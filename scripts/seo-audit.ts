/**
 * Per-article SEO health audit.
 *
 * Fetches every article on insuranceclaimsinfo.com (or a different base via
 * argv[2]), parses the <head> and structural HTML, and writes a markdown
 * report of issues affecting SEO and SERP appearance:
 *
 *  - Missing meta description
 *  - Meta description too long (>160 chars; SERPs truncate near 155)
 *  - Meta description too short (<70 chars; underuse of SERP real estate)
 *  - Duplicate meta descriptions across articles (cannibalizes ranking)
 *  - Missing or duplicate <title>; title >60 chars; >70 chars (truncation)
 *  - Missing canonical URL
 *  - Missing OpenGraph (og:title, og:description, og:url, og:type, og:image)
 *  - Missing Twitter card tags
 *  - Missing or wrong-type JSON-LD schema (Article, NewsArticle, BlogPosting)
 *  - h1 count != 1
 *  - Heading-hierarchy skip (e.g., h2 -> h4)
 *
 * Usage:
 *   npm run seo
 *   npm run seo -- http://localhost:3000   # target dev server
 */

import * as fs from 'fs'
import * as path from 'path'
import { JSDOM } from 'jsdom'

const DEFAULT_BASE = 'https://insuranceclaimsinfo.com'
const BASE_URL = (process.argv[2] || DEFAULT_BASE).replace(/\/$/, '')

const ARTICLES_DIR = path.resolve(process.cwd(), 'lib/content/articles')

const SLUGS = fs
  .readdirSync(ARTICLES_DIR)
  .filter(f => f.endsWith('.tsx'))
  .map(f => f.replace(/\.tsx$/, ''))
  .sort()

const CONCURRENCY = 8

interface PageSeo {
  slug: string
  url: string
  status: number | string
  title?: string
  metaDescription?: string
  canonical?: string
  og: Record<string, string>
  twitter: Record<string, string>
  jsonLdTypes: string[]
  h1Count: number
  headingSkips: string[] // e.g. "h2 -> h4"
  error?: string
}

interface Issue {
  slug: string
  url: string
  rule: string
  severity: 'high' | 'medium' | 'low'
  detail: string
}

async function auditSlug(slug: string): Promise<PageSeo> {
  const url = `${BASE_URL}/resources/${slug}`
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'seo-audit/1.0 (jsdom)' },
    })
    if (!res.ok) {
      return {
        slug,
        url,
        status: res.status,
        og: {},
        twitter: {},
        jsonLdTypes: [],
        h1Count: 0,
        headingSkips: [],
        error: `HTTP ${res.status}`,
      }
    }
    const html = await res.text()
    const dom = new JSDOM(html, { url })
    const doc = dom.window.document

    const title = doc.querySelector('title')?.textContent?.trim()
    const metaDescription = doc
      .querySelector('meta[name="description"]')
      ?.getAttribute('content')
      ?.trim()
    const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || undefined

    const og: Record<string, string> = {}
    doc.querySelectorAll('meta[property^="og:"]').forEach(el => {
      const prop = el.getAttribute('property')!
      const content = el.getAttribute('content') || ''
      og[prop] = content
    })

    const twitter: Record<string, string> = {}
    doc.querySelectorAll('meta[name^="twitter:"]').forEach(el => {
      const name = el.getAttribute('name')!
      const content = el.getAttribute('content') || ''
      twitter[name] = content
    })

    const jsonLdTypes: string[] = []
    doc.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
      try {
        const data = JSON.parse(el.textContent || '{}')
        const items = Array.isArray(data) ? data : [data]
        for (const item of items) {
          if (item && item['@type']) {
            const t = Array.isArray(item['@type']) ? item['@type'].join(',') : item['@type']
            jsonLdTypes.push(String(t))
          }
          // Walk @graph if present
          if (item && Array.isArray(item['@graph'])) {
            for (const g of item['@graph']) {
              if (g && g['@type']) {
                const t = Array.isArray(g['@type']) ? g['@type'].join(',') : g['@type']
                jsonLdTypes.push(String(t))
              }
            }
          }
        }
      } catch {
        /* ignore parse errors */
      }
    })

    const h1Count = doc.querySelectorAll('h1').length

    const headings = Array.from(doc.querySelectorAll('h1,h2,h3,h4,h5,h6')) as Element[]
    const headingSkips: string[] = []
    let prevLevel = 0
    for (const h of headings) {
      const level = parseInt(h.tagName.substring(1), 10)
      if (prevLevel > 0 && level > prevLevel + 1) {
        headingSkips.push(`h${prevLevel} -> h${level}`)
      }
      prevLevel = level
    }

    return {
      slug,
      url,
      status: res.status,
      title,
      metaDescription,
      canonical,
      og,
      twitter,
      jsonLdTypes,
      h1Count,
      headingSkips,
    }
  } catch (err: any) {
    return {
      slug,
      url,
      status: 'ERR',
      og: {},
      twitter: {},
      jsonLdTypes: [],
      h1Count: 0,
      headingSkips: [],
      error: err.message || String(err),
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

function deriveIssues(pages: PageSeo[]): Issue[] {
  const issues: Issue[] = []

  // Detect duplicate descriptions and titles
  const descCounts: Record<string, PageSeo[]> = {}
  const titleCounts: Record<string, PageSeo[]> = {}
  for (const p of pages) {
    if (p.error) continue
    if (p.metaDescription) {
      ;(descCounts[p.metaDescription] ||= []).push(p)
    }
    if (p.title) {
      ;(titleCounts[p.title] ||= []).push(p)
    }
  }

  for (const p of pages) {
    if (p.error) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'fetch-error',
        severity: 'high',
        detail: String(p.error),
      })
      continue
    }

    // Title
    if (!p.title) {
      issues.push({ slug: p.slug, url: p.url, rule: 'title-missing', severity: 'high', detail: 'No <title>' })
    } else {
      if (p.title.length > 70) {
        issues.push({
          slug: p.slug,
          url: p.url,
          rule: 'title-too-long',
          severity: 'medium',
          detail: `${p.title.length} chars (SERPs truncate ~60-65)`,
        })
      }
      if (titleCounts[p.title].length > 1) {
        const dupes = titleCounts[p.title].filter(o => o.slug !== p.slug).map(o => o.slug)
        issues.push({
          slug: p.slug,
          url: p.url,
          rule: 'title-duplicate',
          severity: 'medium',
          detail: `Same <title> as: ${dupes.join(', ')}`,
        })
      }
    }

    // Meta description
    if (!p.metaDescription) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'meta-description-missing',
        severity: 'high',
        detail: 'No <meta name="description">',
      })
    } else {
      if (p.metaDescription.length > 160) {
        issues.push({
          slug: p.slug,
          url: p.url,
          rule: 'meta-description-too-long',
          severity: 'medium',
          detail: `${p.metaDescription.length} chars (SERPs truncate ~155)`,
        })
      }
      if (p.metaDescription.length < 70) {
        issues.push({
          slug: p.slug,
          url: p.url,
          rule: 'meta-description-too-short',
          severity: 'low',
          detail: `${p.metaDescription.length} chars (underuses SERP real estate)`,
        })
      }
      if (descCounts[p.metaDescription].length > 1) {
        const dupes = descCounts[p.metaDescription].filter(o => o.slug !== p.slug).map(o => o.slug)
        issues.push({
          slug: p.slug,
          url: p.url,
          rule: 'meta-description-duplicate',
          severity: 'high',
          detail: `Same description as: ${dupes.join(', ')}`,
        })
      }
    }

    // Canonical
    if (!p.canonical) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'canonical-missing',
        severity: 'medium',
        detail: 'No <link rel="canonical">',
      })
    } else if (!p.canonical.includes(p.slug)) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'canonical-mismatch',
        severity: 'high',
        detail: `Canonical does not match slug: ${p.canonical}`,
      })
    }

    // OpenGraph
    const ogRequired = ['og:title', 'og:description', 'og:url', 'og:type']
    for (const k of ogRequired) {
      if (!p.og[k]) {
        issues.push({
          slug: p.slug,
          url: p.url,
          rule: `og-missing-${k.replace(':', '-')}`,
          severity: 'low',
          detail: `Missing ${k}`,
        })
      }
    }
    if (!p.og['og:image']) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'og-missing-image',
        severity: 'medium',
        detail: 'Missing og:image (social shares will have no preview image)',
      })
    }

    // Twitter card
    if (!p.twitter['twitter:card']) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'twitter-card-missing',
        severity: 'low',
        detail: 'Missing twitter:card',
      })
    }

    // JSON-LD schema
    const articleTypes = ['Article', 'NewsArticle', 'BlogPosting']
    const hasArticle = p.jsonLdTypes.some(t =>
      articleTypes.some(at => t.includes(at))
    )
    if (!hasArticle) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'jsonld-no-article-schema',
        severity: 'medium',
        detail: `JSON-LD present (${p.jsonLdTypes.join(', ') || 'none'}) but no Article/NewsArticle/BlogPosting type`,
      })
    }

    // h1
    if (p.h1Count === 0) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'h1-missing',
        severity: 'high',
        detail: 'No <h1> on page',
      })
    } else if (p.h1Count > 1) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'h1-multiple',
        severity: 'medium',
        detail: `${p.h1Count} <h1> elements on page`,
      })
    }

    // Heading skips
    for (const skip of p.headingSkips) {
      issues.push({
        slug: p.slug,
        url: p.url,
        rule: 'heading-skip',
        severity: 'low',
        detail: skip,
      })
    }
  }

  return issues
}

function severityRank(s: string): number {
  return { high: 0, medium: 1, low: 2 }[s] ?? 3
}

async function main() {
  console.log(`Auditing ${SLUGS.length} articles on ${BASE_URL} (concurrency=${CONCURRENCY})...`)
  const t0 = Date.now()

  const pages = await runWithConcurrency(SLUGS, CONCURRENCY, async slug => {
    const r = await auditSlug(slug)
    process.stdout.write(r.error ? '!' : '.')
    return r
  })
  console.log(`\nDone in ${((Date.now() - t0) / 1000).toFixed(1)}s.`)

  const issues = deriveIssues(pages)

  // Aggregate by rule
  const byRule: Record<string, Issue[]> = {}
  for (const iss of issues) {
    ;(byRule[iss.rule] ||= []).push(iss)
  }
  const sortedRules = Object.entries(byRule).sort((a, b) => {
    const sa = severityRank(a[1][0].severity)
    const sb = severityRank(b[1][0].severity)
    if (sa !== sb) return sa - sb
    return b[1].length - a[1].length
  })

  // Markdown report
  const lines: string[] = []
  lines.push(`# Per-Article SEO Audit Report`)
  lines.push(``)
  lines.push(`- **Site:** ${BASE_URL}`)
  lines.push(`- **Articles audited:** ${pages.length}`)
  lines.push(`- **Total issues:** ${issues.length}`)
  lines.push(`- **Rules with issues:** ${sortedRules.length}`)
  lines.push(``)
  const highCount = issues.filter(i => i.severity === 'high').length
  const medCount = issues.filter(i => i.severity === 'medium').length
  const lowCount = issues.filter(i => i.severity === 'low').length
  lines.push(`Severity breakdown: **${highCount} high, ${medCount} medium, ${lowCount} low**.`)
  lines.push(``)

  lines.push(`## Issues by rule (worst severity first)`)
  lines.push(``)
  if (sortedRules.length === 0) {
    lines.push(`**No issues found.** All ${pages.length} articles pass.`)
    lines.push(``)
  }
  for (const [rule, list] of sortedRules) {
    const sev = list[0].severity
    lines.push(`### \`${rule}\` (${sev}) — ${list.length} article${list.length === 1 ? '' : 's'}`)
    lines.push(``)
    // First 20 instances
    const shown = list.slice(0, 20)
    for (const iss of shown) {
      lines.push(`- \`${iss.slug}\` — ${iss.detail}`)
    }
    if (list.length > shown.length) {
      lines.push(`- _...and ${list.length - shown.length} more_`)
    }
    lines.push(``)
  }

  lines.push(`## Per-article summary (issues only)`)
  lines.push(``)
  const articlesWithIssues = pages.filter(p => issues.some(i => i.slug === p.slug))
  if (articlesWithIssues.length === 0) {
    lines.push(`No articles with issues.`)
  } else {
    lines.push(`| Slug | Title length | Desc length | Issues |`)
    lines.push(`|---|---|---|---|`)
    for (const p of articlesWithIssues) {
      const myIssues = issues.filter(i => i.slug === p.slug)
      lines.push(
        `| ${p.slug} | ${p.title?.length ?? '-'} | ${p.metaDescription?.length ?? '-'} | ${myIssues.length} |`
      )
    }
  }
  lines.push(``)

  const outPath = path.resolve(process.cwd(), 'seo-audit-report.md')
  fs.writeFileSync(outPath, lines.join('\n'))
  console.log(`Report written to ${outPath}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
