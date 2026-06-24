/**
 * Internal-link audit.
 *
 * Reads every article TSX and validates every internal link target:
 *   - /resources/[slug] — slug must exist as lib/content/articles/<slug>.tsx
 *   - /resources/[slug]#anchor — also validates anchor exists in target file
 *   - #anchor (same-page) — validates anchor exists in current file
 *   - /<top-level-route> — validates the route exists in app/
 *
 * Also rolls in (free):
 *   - Taxonomy consistency: every '/resources/[slug]' in lib/content/taxonomy.ts
 *     must point to an existing article
 *   - Heading hierarchy: any h1->h3, h2->h4, h3->h5 etc. skip is flagged
 *
 * Outputs internal-link-report.md. No network calls. Runs in seconds.
 *
 * Usage:
 *   npm run internal-links
 */

import * as fs from 'fs'
import * as path from 'path'

const ARTICLES_DIR = path.resolve(process.cwd(), 'lib/content/articles')
const APP_DIR = path.resolve(process.cwd(), 'app')
const TAXONOMY_FILE = path.resolve(process.cwd(), 'lib/content/taxonomy.ts')

// Build the set of valid article slugs
const articleSlugs = new Set<string>(
  fs
    .readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.tsx'))
    .map(f => f.replace(/\.tsx$/, ''))
)

// Build the set of valid top-level app routes (anything that's a directory
// with a page.tsx or a route.ts in it counts as a route the user can land on)
function collectAppRoutes(dir: string, base = ''): Set<string> {
  const out = new Set<string>([''])  // root
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue
    // Skip dynamic segments like [slug], they're handled differently
    if (e.name.startsWith('[')) continue
    if (e.name === 'api' || e.name === 'node_modules') continue
    const next = base ? `${base}/${e.name}` : e.name
    const fullPath = path.join(dir, e.name)
    // Check if this dir has a page.tsx or page.jsx
    const files = fs.readdirSync(fullPath)
    if (files.some(f => f === 'page.tsx' || f === 'page.jsx' || f === 'page.ts')) {
      out.add(next)
    }
    // Recurse
    const sub = collectAppRoutes(fullPath, next)
    for (const s of sub) out.add(s)
  }
  return out
}

const validAppRoutes = collectAppRoutes(APP_DIR)
// /resources/[slug] is a dynamic route; treat 'resources' as a valid base and
// validate the slug separately
validAppRoutes.delete('resources/[slug]')

// Build a map of slug -> Set of anchor IDs available in that article
function extractAnchorIds(src: string): Set<string> {
  const ids = new Set<string>()
  // Match id="some-id" (single or double quoted) on any element
  const idRe = /\bid=["']([^"']+)["']/g
  let m
  while ((m = idRe.exec(src)) !== null) {
    ids.add(m[1])
  }
  return ids
}

const slugAnchors = new Map<string, Set<string>>()
const slugContent = new Map<string, string>()
for (const slug of articleSlugs) {
  const src = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.tsx`), 'utf8')
  slugContent.set(slug, src)
  slugAnchors.set(slug, extractAnchorIds(src))
}

interface Finding {
  rule:
    | 'slug-not-found'
    | 'anchor-not-found'
    | 'route-not-found'
    | 'taxonomy-slug-not-found'
    | 'heading-skip'
  severity: 'high' | 'medium' | 'low'
  inFile: string  // article slug or taxonomy.ts
  href?: string
  detail: string
}

const findings: Finding[] = []

// Extract href values: href="..." or href='...' or href={`...`}
// We only care about literal hrefs (not dynamic interpolated ones)
function extractHrefs(src: string): string[] {
  const hrefs: string[] = []
  // Match double, single, or template literal hrefs
  const re = /href=(?:["'`])([^"'`]+)["'`]/g
  let m
  while ((m = re.exec(src)) !== null) {
    hrefs.push(m[1])
  }
  return hrefs
}

// Validate one article's internal links
for (const slug of articleSlugs) {
  const src = slugContent.get(slug)!
  const hrefs = extractHrefs(src)
  for (const href of hrefs) {
    // Skip external links (already covered by npm run links)
    if (/^https?:\/\//i.test(href)) continue
    // Skip mailto / tel
    if (/^(mailto|tel):/i.test(href)) continue
    // Skip empty or single-hash
    if (href === '' || href === '#') continue

    // Split into path and anchor
    const [rawPath, anchor] = href.split('#', 2)

    // Same-page anchor link: validate anchor exists in this article
    if (rawPath === '' && anchor) {
      const anchors = slugAnchors.get(slug)!
      if (!anchors.has(anchor)) {
        findings.push({
          rule: 'anchor-not-found',
          severity: 'medium',
          inFile: slug,
          href,
          detail: `Same-page anchor #${anchor} not defined in this article`,
        })
      }
      continue
    }

    // /resources/[slug] (with or without anchor)
    const resourcesMatch = rawPath.match(/^\/resources\/([^\/]+)\/?$/)
    if (resourcesMatch) {
      const targetSlug = resourcesMatch[1]
      if (!articleSlugs.has(targetSlug)) {
        findings.push({
          rule: 'slug-not-found',
          severity: 'high',
          inFile: slug,
          href,
          detail: `Target article slug '${targetSlug}' does not exist in lib/content/articles/`,
        })
        continue
      }
      // If the link has an anchor, validate it
      if (anchor) {
        const targetAnchors = slugAnchors.get(targetSlug)!
        if (!targetAnchors.has(anchor)) {
          findings.push({
            rule: 'anchor-not-found',
            severity: 'medium',
            inFile: slug,
            href,
            detail: `Anchor #${anchor} does not exist in target article '${targetSlug}'`,
          })
        }
      }
      continue
    }

    // /resources (the resources index page itself) — valid
    if (rawPath === '/resources' || rawPath === '/resources/') continue

    // Other internal routes: strip leading slash, normalize, validate against app routes
    if (rawPath.startsWith('/')) {
      const norm = rawPath.replace(/^\//, '').replace(/\/$/, '')

      // Static asset reference (anything with a file extension) — validate against /public/
      if (/\.[a-z0-9]{2,5}$/i.test(norm)) {
        const assetPath = path.resolve(process.cwd(), 'public', norm)
        if (fs.existsSync(assetPath)) continue
        findings.push({
          rule: 'route-not-found',
          severity: 'high',
          inFile: slug,
          href,
          detail: `Static asset '${rawPath}' not found in public/`,
        })
        continue
      }

      // Try direct match
      if (validAppRoutes.has(norm)) continue
      // Try with empty segment (root)
      if (norm === '' && validAppRoutes.has('')) continue
      // Many routes have dynamic [slug] children (e.g. /cdi-notices/[slug]) —
      // we treat the path as valid if its parent is a known route
      const parent = norm.split('/').slice(0, -1).join('/')
      if (parent && validAppRoutes.has(parent)) continue
      // Also accept any path that starts with a valid top-level route
      const topLevel = norm.split('/')[0]
      if (validAppRoutes.has(topLevel)) continue

      findings.push({
        rule: 'route-not-found',
        severity: 'high',
        inFile: slug,
        href,
        detail: `Internal route '${rawPath}' does not correspond to a known page in app/`,
      })
    }
  }
}

// Taxonomy consistency: every '/resources/[slug]' href in taxonomy.ts must
// resolve to an existing article
if (fs.existsSync(TAXONOMY_FILE)) {
  const taxonomy = fs.readFileSync(TAXONOMY_FILE, 'utf8')
  const re = /['"`]\/resources\/([^'"`#\/\s]+)['"`]/g
  let m
  const seen = new Set<string>()
  while ((m = re.exec(taxonomy)) !== null) {
    const slug = m[1]
    if (seen.has(slug)) continue
    seen.add(slug)
    if (!articleSlugs.has(slug)) {
      findings.push({
        rule: 'taxonomy-slug-not-found',
        severity: 'high',
        inFile: 'lib/content/taxonomy.ts',
        href: `/resources/${slug}`,
        detail: `Taxonomy navigation references '${slug}' but no article file exists`,
      })
    }
  }
}

// Heading-hierarchy audit: flag h1->h3, h2->h4, h3->h5 skips
const headingRe = /<h([1-6])\b/g
for (const slug of articleSlugs) {
  const src = slugContent.get(slug)!
  const seq: number[] = []
  let hm
  while ((hm = headingRe.exec(src)) !== null) {
    seq.push(parseInt(hm[1], 10))
  }
  headingRe.lastIndex = 0
  let prev = 0
  for (const level of seq) {
    if (prev > 0 && level > prev + 1) {
      findings.push({
        rule: 'heading-skip',
        severity: 'low',
        inFile: slug,
        detail: `h${prev} -> h${level} (skipped h${prev + 1})`,
      })
    }
    prev = level
  }
}

// Aggregate + write report
function sevRank(s: string) {
  return { high: 0, medium: 1, low: 2 }[s] ?? 3
}

const byRule: Record<string, Finding[]> = {}
for (const f of findings) {
  ;(byRule[f.rule] ||= []).push(f)
}
const sortedRules = Object.entries(byRule).sort((a, b) => {
  const da = sevRank(a[1][0].severity)
  const db = sevRank(b[1][0].severity)
  if (da !== db) return da - db
  return b[1].length - a[1].length
})

const lines: string[] = []
lines.push(`# Internal Link Audit Report`)
lines.push(``)
lines.push(`- **Articles scanned:** ${articleSlugs.size}`)
lines.push(`- **Total findings:** ${findings.length}`)
lines.push(`- **Rules with findings:** ${sortedRules.length}`)
const high = findings.filter(f => f.severity === 'high').length
const med = findings.filter(f => f.severity === 'medium').length
const low = findings.filter(f => f.severity === 'low').length
lines.push(``)
lines.push(`Severity breakdown: **${high} high, ${med} medium, ${low} low**.`)
lines.push(``)
lines.push(`## Findings by rule (worst severity first)`)
lines.push(``)
if (sortedRules.length === 0) {
  lines.push(`**No findings.** Every internal link, every taxonomy reference, and every heading hierarchy in all ${articleSlugs.size} articles is valid.`)
  lines.push(``)
}
for (const [rule, list] of sortedRules) {
  const sev = list[0].severity
  lines.push(`### \`${rule}\` (${sev}) — ${list.length} finding${list.length === 1 ? '' : 's'}`)
  lines.push(``)
  const shown = list.slice(0, 50)
  for (const f of shown) {
    if (f.href) {
      lines.push(`- \`${f.inFile}\` — ${f.href} — ${f.detail}`)
    } else {
      lines.push(`- \`${f.inFile}\` — ${f.detail}`)
    }
  }
  if (list.length > shown.length) {
    lines.push(`- _...and ${list.length - shown.length} more_`)
  }
  lines.push(``)
}

const outPath = path.resolve(process.cwd(), 'internal-link-report.md')
fs.writeFileSync(outPath, lines.join('\n'))

console.log(`Scanned ${articleSlugs.size} articles.`)
console.log(`Findings: ${high} high, ${med} medium, ${low} low (total ${findings.length}).`)
console.log(`Report written to ${outPath}`)
