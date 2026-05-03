/**
 * Build-time script to generate the search index JSON from ARTICLE_META.
 * Run with: npx tsx scripts/generate-search-index.ts
 * Automatically runs before every `next build` via the build script.
 */

import * as fs from 'fs'
import * as path from 'path'

// We read the [slug]/page.tsx file and extract the ARTICLE_META object using regex
// This avoids needing to import TSX/JSX in a Node script context.

const SLUG_PAGE_PATH = path.resolve(
  __dirname,
  '../app/resources/[slug]/page.tsx'
)

const content = fs.readFileSync(SLUG_PAGE_PATH, 'utf-8')

// Extract the ARTICLE_META block
const metaMatch = content.match(
  /const ARTICLE_META:\s*Record<string,\s*\{[^}]+\}>\s*=\s*\{([\s\S]*?)\n\}/
)

if (!metaMatch) {
  console.error('ERROR: Could not find ARTICLE_META in page.tsx')
  process.exit(1)
}

const metaBlock = metaMatch[1]

// Parse individual entries: 'slug': { title: '...', description: '...' },
const entryRegex =
  /'([^']+)':\s*\{\s*title:\s*'((?:[^'\\]|\\.)*)'\s*,\s*description:\s*'((?:[^'\\]|\\.)*)'\s*\}/g

interface SearchEntry {
  slug: string
  title: string
  description: string
}

const entries: SearchEntry[] = []
let match: RegExpExecArray | null

while ((match = entryRegex.exec(metaBlock)) !== null) {
  const slug = match[1]
  // Unescape any escaped single quotes in title/description
  const title = match[2].replace(/\\'/g, "'")
  const description = match[3].replace(/\\'/g, "'")
  entries.push({ slug, title, description })
}

console.log(`Generated search index with ${entries.length} articles`)

// Write to public/data/search-index.json
const outputDir = path.resolve(__dirname, '../public/data')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const outputPath = path.join(outputDir, 'search-index.json')
fs.writeFileSync(outputPath, JSON.stringify(entries, null, 0))

console.log(`Written to: ${outputPath}`)
