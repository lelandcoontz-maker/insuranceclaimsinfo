/**
 * External link rot audit.
 *
 * Scans every article TSX for external URLs (http[s]:// pointing anywhere
 * except insuranceclaimsinfo.com), then HEAD-requests each unique URL with
 * concurrency. Reports anything that doesn't return a 2xx or 3xx, grouped by
 * URL with the list of articles citing it.
 *
 * Known-noisy domains that bot-block HEAD requests (FindLaw, Justia, etc.)
 * are flagged as "bot-blocked" rather than dead so the report is
 * actionable rather than overwhelming.
 *
 * Usage:
 *   npm run links
 */

import * as fs from 'fs'
import * as path from 'path'

const ARTICLES_DIR = path.resolve(process.cwd(), 'lib/content/articles')
const TIMEOUT_MS = 15000
const CONCURRENCY = 16

// Domains that reliably bot-block automated requests. A non-200 from these
// doesn't mean the URL is dead — just that the bot wasn't allowed in.
const BOT_BLOCKED_DOMAINS = new Set([
  'findlaw.com',
  'caselaw.findlaw.com',
  'justia.com',
  'law.justia.com',
  'cases.justia.com',
  'casetext.com',
  'westlaw.com',
  'lexis.com',
  'plus.lexis.com',
  'cdi.ca.gov',
  'insurance.ca.gov',
  'uphelp.org',
  'merlinlawgroup.com',
  'propertyinsurancecoveragelaw.com',
  'consumerwatchdog.org',
  'latimes.com',
  'nytimes.com',
  'wsj.com',
  'bloomberg.com',
  'reuters.com',
  'cnn.com',
  'cnbc.com',
  'forbes.com',
  'linkedin.com',
  'facebook.com',
  'twitter.com',
  'x.com',
  // Added 2026-06-23 after manual spot-check confirmed these load fine in a
  // browser but reject script HEAD/GET regardless of User-Agent
  'apassociation.org',
  'sloaneandwalsh.com',
  'wdblegal.com',
  'candrmagazine.com',
  'propertycasualtyfocus.com',
  'mslawllp.com',
  'tn.gov',
  'tninsurancelitigation.com',
])

interface LinkUse {
  url: string
  articles: string[]
}

interface CheckResult {
  url: string
  status: number | string
  ok: boolean
  redirectedTo?: string
  botBlocked?: boolean
}

// Extract https?:// URLs from article source. Strip trailing punctuation
// and matching closing quotes/parens.
function extractUrls(src: string): string[] {
  const urls: string[] = []
  const re = /https?:\/\/[^\s'"`<>{}|\\^[\]]+/g
  let m: RegExpExecArray | null
  while ((m = re.exec(src)) !== null) {
    let u = m[0]
    // Trim trailing punctuation that almost certainly isn't part of the URL
    u = u.replace(/[.,;:!?)\]}>"'`]+$/, '')
    urls.push(u)
  }
  return urls
}

function hostOf(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}

function isExternal(url: string): boolean {
  const h = hostOf(url)
  if (!h) return false
  return h !== 'insuranceclaimsinfo.com' && !h.endsWith('.insuranceclaimsinfo.com')
}

function isBotBlocked(url: string): boolean {
  const h = hostOf(url)
  if (!h) return false
  if (BOT_BLOCKED_DOMAINS.has(h)) return true
  for (const d of BOT_BLOCKED_DOMAINS) {
    if (h.endsWith('.' + d)) return true
  }
  return false
}

// Real browser UA string. Many sites bot-detect on the literal "compatible;"
// token or on any non-browser UA. Using the actual Chrome string maximizes
// signal vs. noise.
const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

async function tryFetch(url: string, method: 'HEAD' | 'GET', signal: AbortSignal): Promise<Response> {
  return fetch(url, {
    method,
    redirect: 'follow',
    signal,
    headers: {
      'User-Agent': BROWSER_UA,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  })
}

async function checkUrl(url: string): Promise<CheckResult> {
  const botBlocked = isBotBlocked(url)
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    // Try HEAD first (cheap). If anything looks wrong, retry with GET — many
    // servers misconfigured for HEAD return 404/405/403/400 even though the
    // URL actually loads fine.
    let res = await tryFetch(url, 'HEAD', controller.signal)
    if (res.status < 200 || res.status >= 400) {
      res = await tryFetch(url, 'GET', controller.signal)
    }
    clearTimeout(timer)
    const ok = res.status >= 200 && res.status < 400
    return {
      url,
      status: res.status,
      ok,
      botBlocked,
      ...(res.url !== url ? { redirectedTo: res.url } : {}),
    }
  } catch (err: any) {
    clearTimeout(timer)
    return {
      url,
      status: err.name === 'AbortError' ? 'TIMEOUT' : 'ERR',
      ok: false,
      botBlocked,
    }
  }
}

async function runWithConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length)
  let cursor = 0
  async function worker() {
    while (true) {
      const i = cursor++
      if (i >= items.length) return
      results[i] = await fn(items[i])
    }
  }
  await Promise.all(Array.from({ length: limit }, () => worker()))
  return results
}

async function main() {
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.tsx'))
  console.log(`Scanning ${files.length} article files for external URLs...`)

  const urlToArticles: Map<string, Set<string>> = new Map()
  for (const f of files) {
    const slug = f.replace('.tsx', '')
    const src = fs.readFileSync(path.join(ARTICLES_DIR, f), 'utf8')
    const urls = extractUrls(src).filter(isExternal)
    for (const u of urls) {
      if (!urlToArticles.has(u)) urlToArticles.set(u, new Set())
      urlToArticles.get(u)!.add(slug)
    }
  }

  const uniqueUrls = Array.from(urlToArticles.keys()).sort()
  console.log(`Found ${uniqueUrls.length} unique external URLs across ${files.length} articles.`)
  console.log(`Checking with concurrency=${CONCURRENCY}, timeout=${TIMEOUT_MS}ms...`)
  const t0 = Date.now()

  const results = await runWithConcurrency(uniqueUrls, CONCURRENCY, async u => {
    const r = await checkUrl(u)
    process.stdout.write(r.ok ? '.' : (r.botBlocked ? '?' : '!'))
    return r
  })
  console.log(`\nDone in ${((Date.now() - t0) / 1000).toFixed(1)}s.`)

  const dead = results.filter(r => !r.ok && !r.botBlocked)
  const botBlocked = results.filter(r => !r.ok && r.botBlocked)
  const redirected = results.filter(r => r.ok && r.redirectedTo)

  const lines: string[] = []
  lines.push(`# External Link Audit Report`)
  lines.push(``)
  lines.push(`- **Articles scanned:** ${files.length}`)
  lines.push(`- **Unique external URLs found:** ${uniqueUrls.length}`)
  lines.push(`- **Likely dead (non-2xx/3xx, not bot-blocked):** ${dead.length}`)
  lines.push(`- **Bot-blocked (status looks bad but domain is known to refuse automated requests; manual review needed):** ${botBlocked.length}`)
  lines.push(`- **Redirected (still resolve, just no longer at original URL):** ${redirected.length}`)
  lines.push(``)

  lines.push(`## Likely dead URLs (action needed)`)
  lines.push(``)
  if (dead.length === 0) {
    lines.push(`**None found.** Every non-bot-blocked external URL on the site resolves.`)
    lines.push(``)
  } else {
    for (const r of dead) {
      const articles = Array.from(urlToArticles.get(r.url) || []).sort()
      lines.push(`### \`${r.url}\` — status ${r.status}`)
      lines.push(``)
      lines.push(`Cited in ${articles.length} article${articles.length === 1 ? '' : 's'}:`)
      for (const s of articles) lines.push(`- ${s}`)
      lines.push(``)
    }
  }

  lines.push(`## Bot-blocked URLs (probably fine, manual spot-check if worried)`)
  lines.push(``)
  if (botBlocked.length === 0) {
    lines.push(`None.`)
  } else {
    lines.push(`These domains are on the known-bot-blocking list. A non-2xx response from them does NOT necessarily mean the URL is dead — these sites load fine in a normal browser but refuse automated HEAD/GET requests from non-browser User-Agents. Spot-check in a browser if any look suspicious:`)
    lines.push(``)
    // Group by domain
    const byDomain: Record<string, CheckResult[]> = {}
    for (const r of botBlocked) {
      const h = hostOf(r.url) || 'unknown'
      ;(byDomain[h] ||= []).push(r)
    }
    for (const [domain, list] of Object.entries(byDomain).sort()) {
      lines.push(`### ${domain} (${list.length})`)
      lines.push(``)
      for (const r of list.slice(0, 10)) {
        lines.push(`- ${r.url} → ${r.status}`)
      }
      if (list.length > 10) lines.push(`- _...and ${list.length - 10} more_`)
      lines.push(``)
    }
  }

  lines.push(`## Redirected URLs (FYI; consider updating to canonical)`)
  lines.push(``)
  if (redirected.length === 0) {
    lines.push(`None.`)
  } else {
    for (const r of redirected.slice(0, 50)) {
      lines.push(`- \`${r.url}\` → \`${r.redirectedTo}\``)
    }
    if (redirected.length > 50) lines.push(`- _...and ${redirected.length - 50} more_`)
  }
  lines.push(``)

  const outPath = path.resolve(process.cwd(), 'link-audit-report.md')
  fs.writeFileSync(outPath, lines.join('\n'))
  console.log(`Report written to ${outPath}`)
  console.log(`\nSummary: ${dead.length} likely dead, ${botBlocked.length} bot-blocked, ${redirected.length} redirected.`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
