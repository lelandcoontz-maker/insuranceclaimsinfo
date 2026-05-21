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

  const titleMatch = content.match(/title:\s*['"`]((?:[^'"`\\]|\\.)*)['"`]/)
  const descMatch = content.match(/description:\s*\n?\s*['"`]((?:[^'"`\\]|\\.)*)['"`]/)
  const summaryMatch = content.match(/summary:\s*\n?\s*['"`]((?:[^'"`\\]|\\.)*)['"`]/)

  if (!titleMatch) {
    console.warn(`WARNING: No title found in ${file}`)
    continue
  }

  const title = titleMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"')
  const description = descMatch
    ? descMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"')
    : ''
  const summary = summaryMatch
    ? summaryMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"')
    : undefined

  searchEntries.push({ slug, title, description })
  registry[slug] = summary ? { title, description, summary } : { title, description }
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
