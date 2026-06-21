/**
 * Lightweight accessibility audit using axe-core + jsdom.
 *
 * Fetches a representative set of pages from the live (or local) site,
 * runs axe-core INSIDE each page's jsdom window, and writes a markdown report.
 *
 * No headless browser required. Misses dynamic/focus issues but catches
 * the static-HTML WCAG violations that fuel most ADA Title III claims
 * against content sites.
 *
 * Usage:
 *   npm run a11y
 *   npm run a11y -- http://localhost:3000   # target dev server
 */

import * as fs from 'fs'
import * as path from 'path'
import { JSDOM } from 'jsdom'

const DEFAULT_BASE = 'https://insuranceclaimsinfo.com'
const BASE_URL = (process.argv[2] || DEFAULT_BASE).replace(/\/$/, '')

const AXE_SOURCE = fs.readFileSync(
  path.resolve(process.cwd(), 'node_modules/axe-core/axe.min.js'),
  'utf8'
)

// Representative URL set: site shell + key static pages + cross-section of articles.
const PATHS = [
  '/',
  '/about',
  '/contact',
  '/resources',
  '/free-guides',
  '/inventory',
  '/start-here',
  '/start-here/fire-claim',
  '/start-here/denied-claim',
  '/regulations',
  '/cdi-notices',
  '/faq',
  '/resources/bad-faith',
  '/resources/appraisal',
  '/resources/wildfire-guide',
  '/resources/contents-inventory-guide',
  '/resources/cosmetic-damage-denials',
  '/resources/insurance-delay-tactics',
  '/resources/public-adjuster',
  '/resources/california-fair-plan',
]

interface Violation {
  id: string
  impact: string
  description: string
  help: string
  helpUrl: string
  nodes: { html: string; target: string[]; failureSummary: string }[]
}

interface PageResult {
  url: string
  status: number | string
  violations: Violation[]
  passCount: number
  error?: string
}

async function auditUrl(url: string): Promise<PageResult> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'a11y-audit/1.0 (axe-core+jsdom)' },
    })
    if (!res.ok) {
      return { url, status: res.status, violations: [], passCount: 0, error: `HTTP ${res.status}` }
    }
    const html = await res.text()
    const dom = new JSDOM(html, {
      url,
      pretendToBeVisual: true,
      runScripts: 'outside-only',
    })

    // Inject axe-core into the jsdom window via eval (outside-only mode does not
    // auto-execute <script> tags; eval() executes inside the window context).
    const win = dom.window as any
    win.eval(AXE_SOURCE)

    if (!win.axe) {
      throw new Error('axe-core failed to load inside jsdom window')
    }

    const results = await win.axe.run(win.document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
      resultTypes: ['violations', 'passes'],
    })

    return {
      url,
      status: res.status,
      violations: (results.violations || []).map((v: any) => ({
        id: v.id,
        impact: v.impact || 'unknown',
        description: v.description,
        help: v.help,
        helpUrl: v.helpUrl,
        nodes: v.nodes.map((n: any) => ({
          html: String(n.html || '').slice(0, 240),
          target: Array.isArray(n.target) ? n.target.map((t: any) => String(t)) : [String(n.target)],
          failureSummary: n.failureSummary || '',
        })),
      })),
      passCount: (results.passes || []).length,
    }
  } catch (err: any) {
    return { url, status: 'ERR', violations: [], passCount: 0, error: err.message || String(err) }
  }
}

function impactRank(impact: string): number {
  return { critical: 0, serious: 1, moderate: 2, minor: 3 }[impact] ?? 4
}

async function main() {
  console.log(`Auditing ${PATHS.length} pages on ${BASE_URL}...`)
  const results: PageResult[] = []
  for (const p of PATHS) {
    const url = `${BASE_URL}${p}`
    process.stdout.write(`  ${url} ... `)
    const r = await auditUrl(url)
    results.push(r)
    if (r.error) {
      console.log(`ERROR (${r.error})`)
    } else {
      const c = r.violations.filter(v => v.impact === 'critical').length
      const s = r.violations.filter(v => v.impact === 'serious').length
      const m = r.violations.filter(v => v.impact === 'moderate').length
      const n = r.violations.filter(v => v.impact === 'minor').length
      console.log(`${r.violations.length} violations (${c}C/${s}S/${m}M/${n}n)  passes=${r.passCount}`)
    }
  }

  const byRule: Record<string, { impact: string; help: string; helpUrl: string; pages: { url: string; count: number; sampleNode?: string }[] }> = {}
  for (const r of results) {
    for (const v of r.violations) {
      if (!byRule[v.id]) {
        byRule[v.id] = { impact: v.impact, help: v.help, helpUrl: v.helpUrl, pages: [] }
      }
      byRule[v.id].pages.push({
        url: r.url,
        count: v.nodes.length,
        sampleNode: v.nodes[0]?.html,
      })
    }
  }

  const sortedRules = Object.entries(byRule).sort((a, b) => {
    const di = impactRank(a[1].impact) - impactRank(b[1].impact)
    if (di !== 0) return di
    const aTotal = a[1].pages.reduce((s, p) => s + p.count, 0)
    const bTotal = b[1].pages.reduce((s, p) => s + p.count, 0)
    return bTotal - aTotal
  })

  const lines: string[] = []
  lines.push(`# Accessibility Audit Report`)
  lines.push(``)
  lines.push(`- **Site:** ${BASE_URL}`)
  lines.push(`- **Pages audited:** ${results.length}`)
  lines.push(`- **Rules with violations:** ${sortedRules.length}`)
  lines.push(`- **Tool:** axe-core (WCAG 2.0/2.1 A + AA) + jsdom`)
  lines.push(``)
  lines.push(`> Note: jsdom-based audit catches static-HTML violations but does not exercise focus-visible, keyboard navigation, or dynamic ARIA state. Combine with manual keyboard testing.`)
  lines.push(``)
  lines.push(`## Violations by rule (worst impact first)`)
  lines.push(``)
  if (sortedRules.length === 0) {
    lines.push(`**No violations found.** Either the site is clean against the configured WCAG 2.0/2.1 A+AA rule set, or all audited pages errored.`)
    lines.push(``)
  }
  for (const [ruleId, info] of sortedRules) {
    const total = info.pages.reduce((s, p) => s + p.count, 0)
    lines.push(`### \`${ruleId}\` (${info.impact}) — ${total} node${total === 1 ? '' : 's'} across ${info.pages.length} page${info.pages.length === 1 ? '' : 's'}`)
    lines.push(``)
    lines.push(`${info.help}`)
    lines.push(``)
    lines.push(`Reference: ${info.helpUrl}`)
    lines.push(``)
    if (info.pages[0]?.sampleNode) {
      lines.push(`Sample failing element:`)
      lines.push('```html')
      lines.push(info.pages[0].sampleNode)
      lines.push('```')
      lines.push(``)
    }
    lines.push(`Pages affected:`)
    for (const p of info.pages) {
      lines.push(`- ${p.url} (${p.count})`)
    }
    lines.push(``)
  }

  lines.push(`## Per-page summary`)
  lines.push(``)
  lines.push(`| Page | Status | Violations | Passes |`)
  lines.push(`|---|---|---|---|`)
  for (const r of results) {
    lines.push(`| ${r.url} | ${r.status} | ${r.violations.length} | ${r.passCount} |`)
  }
  lines.push(``)

  const outPath = path.resolve(process.cwd(), 'a11y-report.md')
  fs.writeFileSync(outPath, lines.join('\n'))
  console.log(`\nReport written to ${outPath}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
