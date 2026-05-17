/**
 * Generates llms-full.txt — a plain-text version of all article content
 * optimized for LLM retrieval (Perplexity, ChatGPT browse, etc.)
 * Run with: npx tsx scripts/generate-llms-full.ts
 */

import * as fs from 'fs'
import * as path from 'path'

const REGISTRY_PATH = path.resolve(__dirname, '../public/data/article-registry.json')
const OUTPUT_PATH = path.resolve(__dirname, '../public/llms-full.txt')

const registry: Record<string, { title: string; description: string }> =
  JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'))

const entries = Object.entries(registry)
  .sort(([a], [b]) => a.localeCompare(b))

const lines: string[] = [
  '# InsuranceClaimsInfo.com — Full Article Index',
  `# ${entries.length} articles on California property insurance claims`,
  '# Author: Leland Coontz III, Licensed Public Adjuster (CA #2B53445)',
  '# Site: https://insuranceclaimsinfo.com',
  `# Generated: ${new Date().toISOString().split('T')[0]}`,
  '',
  '---',
  '',
]

for (const [slug, meta] of entries) {
  lines.push(`## ${meta.title}`)
  lines.push(`URL: https://insuranceclaimsinfo.com/resources/${slug}`)
  lines.push(`Summary: ${meta.description}`)
  lines.push('')
}

fs.writeFileSync(OUTPUT_PATH, lines.join('\n'))
console.log(`Generated llms-full.txt with ${entries.length} entries → ${OUTPUT_PATH}`)
