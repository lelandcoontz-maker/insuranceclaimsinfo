/**
 * Build-time script to generate related article mappings based on topic similarity.
 * For each article, finds the 4 most topically related articles using keyword overlap.
 * Run with: npx tsx scripts/generate-related-articles.ts
 */

import * as fs from 'fs'
import * as path from 'path'

const SLUG_PAGE_PATH = path.resolve(__dirname, '../app/resources/[slug]/page.tsx')
const content = fs.readFileSync(SLUG_PAGE_PATH, 'utf-8')

const metaMatch = content.match(
  /const ARTICLE_META:\s*Record<string,\s*\{[^}]+\}>\s*=\s*\{([\s\S]*?)\n\}/
)
if (!metaMatch) {
  console.error('ERROR: Could not find ARTICLE_META in page.tsx')
  process.exit(1)
}

const metaBlock = metaMatch[1]
const entryRegex =
  /'([^']+)':\s*\{\s*title:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*,\s*description:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*\}/g

interface Article {
  slug: string
  title: string
  description: string
  keywords: string[]
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of',
  'with', 'by', 'from', 'is', 'it', 'its', 'are', 'was', 'were', 'be', 'been',
  'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'what',
  'which', 'who', 'whom', 'how', 'when', 'where', 'why', 'not', 'no', 'nor',
  'if', 'then', 'than', 'so', 'as', 'up', 'out', 'about', 'into', 'over',
  'after', 'before', 'between', 'under', 'again', 'further', 'once', 'here',
  'there', 'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other',
  'some', 'such', 'only', 'own', 'same', 'too', 'very', 'just', 'because',
  'through', 'during', 'while', 'also', 'their', 'they', 'them', 'your', 'you',
  'we', 'our', 'my', 'me', 'he', 'she', 'him', 'her', 'his',
  'learn', 'guide', 'complete', 'comprehensive', 'need', 'know', 'understanding',
])

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w))
}

const articles: Article[] = []
let match: RegExpExecArray | null

while ((match = entryRegex.exec(metaBlock)) !== null) {
  const slug = match[1]
  const title = (match[2] || match[3] || '').replace(/\\'/g, "'").replace(/\\"/g, '"')
  const description = (match[4] || match[5] || '').replace(/\\'/g, "'").replace(/\\"/g, '"')
  const keywords = [...new Set([
    ...extractKeywords(title),
    ...extractKeywords(description),
    ...slug.split('-').filter(w => w.length > 2 && !STOP_WORDS.has(w)),
  ])]
  articles.push({ slug, title, description, keywords })
}

console.log(`Processing ${articles.length} articles for cross-references...`)

// Build keyword-to-articles index for efficient lookup
const keywordIndex: Record<string, Set<number>> = {}
articles.forEach((article, idx) => {
  for (const kw of article.keywords) {
    if (!keywordIndex[kw]) keywordIndex[kw] = new Set()
    keywordIndex[kw].add(idx)
  }
})

// For each article, find the 4 most related by keyword overlap
const relatedMap: Record<string, string[]> = {}

for (let i = 0; i < articles.length; i++) {
  const article = articles[i]
  const scores: { idx: number; score: number }[] = []

  const candidateCounts: Record<number, number> = {}
  for (const kw of article.keywords) {
    const matches = keywordIndex[kw]
    if (!matches || matches.size > articles.length * 0.3) continue
    for (const j of matches) {
      if (j === i) continue
      candidateCounts[j] = (candidateCounts[j] || 0) + 1
    }
  }

  for (const [jStr, count] of Object.entries(candidateCounts)) {
    const j = parseInt(jStr)
    const overlap = count
    const unionSize = new Set([...article.keywords, ...articles[j].keywords]).size
    const jaccardish = overlap / Math.sqrt(article.keywords.length * articles[j].keywords.length)
    scores.push({ idx: j, score: jaccardish })
  }

  scores.sort((a, b) => b.score - a.score)
  relatedMap[article.slug] = scores.slice(0, 4).map(s => articles[s.idx].slug)
}

const outputDir = path.resolve(__dirname, '../public/data')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const outputPath = path.join(outputDir, 'related-articles.json')
fs.writeFileSync(outputPath, JSON.stringify(relatedMap, null, 0))
console.log(`Generated related articles map for ${Object.keys(relatedMap).length} articles`)
console.log(`Written to: ${outputPath}`)
