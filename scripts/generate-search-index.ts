/**
 * Build-time script to generate search index and article registry from
 * per-article meta exports in lib/content/articles/*.tsx.
 *
 * Outputs:
 *   public/data/search-index.json   — [{slug, title, description}, ...]
 *   public/data/article-registry.json — {slug: {title, description}, ...}
 *
 * Run with: npx tsx scripts/generate-search-index.ts
 * Automatically runs before every `next build` via the prebuild script.
 */

import * as fs from 'fs'
import * as path from 'path'

const ARTICLES_DIR = path.resolve(__dirname, '../lib/content/articles')
const OUTPUT_DIR = path.resolve(__dirname, '../public/data')

interface ArticleMeta {
  title: string
  description: string
  summary?: string
  seoTitle?: string
  seoDescription?: string
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.tsx'))

const searchEntries: { slug: string; title: string; description: string }[] = []
const registry: Record<string, ArticleMeta> = {}

for (const file of files) {
  const slug = file.replace('.tsx', '')
  const filePath = path.join(ARTICLES_DIR, file)
  const content = fs.readFileSync(filePath, 'utf-8')

  // Quote-aware extraction: capture the opening quote, then match anything except
  // that exact quote (and except backslash, which we allow as an escape). This
  // prevents apostrophes inside double-quoted strings (and vice versa) from
  // terminating the match early.
  const titleMatch = content.match(/(?<![a-zA-Z])title:\s*(['"`])((?:(?!\1)[^\\]|\\.)*)\1/)
  const seoTitleMatch = content.match(/seoTitle:\s*(['"`])((?:(?!\1)[^\\]|\\.)*)\1/)
  const descMatch = content.match(/(?<![a-zA-Z])description:\s*\n?\s*(['"`])((?:(?!\1)[^\\]|\\.)*)\1/)
  const seoDescMatch = content.match(/seoDescription:\s*\n?\s*(['"`])((?:(?!\1)[^\\]|\\.)*)\1/)
  const summaryMatch = content.match(/summary:\s*\n?\s*(['"`])((?:(?!\1)[^\\]|\\.)*)\1/)

  if (!titleMatch) {
    console.warn(`WARNING: No title found in ${file}`)
    continue
  }

  const unescape = (s: string) => s.replace(/\\'/g, "'").replace(/\\"/g, '"')

  // Note: index [2] because the new quote-aware regex captures the opening
  // quote in group 1 and the body in group 2.
  const title = unescape(titleMatch[2])
  const seoTitle = seoTitleMatch ? unescape(seoTitleMatch[2]) : undefined
  const description = descMatch ? unescape(descMatch[2]) : ''
  const seoDescription = seoDescMatch ? unescape(seoDescMatch[2]) : undefined
  const summary = summaryMatch ? unescape(summaryMatch[2]) : undefined

  searchEntries.push({ slug, title, description })
  const entry: ArticleMeta = { title, description }
  if (summary) entry.summary = summary
  if (seoTitle) entry.seoTitle = seoTitle
  if (seoDescription) entry.seoDescription = seoDescription
  registry[slug] = entry
}

searchEntries.sort((a, b) => a.slug.localeCompare(b.slug))

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'search-index.json'),
  JSON.stringify(searchEntries, null, 0)
)

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'article-registry.json'),
  JSON.stringify(registry, null, 2)
)

console.log(`Generated search index and registry for ${searchEntries.length} articles → ${OUTPUT_DIR}`)
