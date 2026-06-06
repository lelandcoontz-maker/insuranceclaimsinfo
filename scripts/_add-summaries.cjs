/* One-off helper: insert a `summary:` field into each article's meta export.
 * Usage: node scripts/_add-summaries.cjs <map.json>
 * map.json = { "slug": "summary text", ... }
 * Idempotent: skips any article that already has a summary.
 */
const fs = require('fs')
const path = require('path')

const DIR = path.join(__dirname, '../lib/content/articles')
const map = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))

let added = 0
const skipped = []
const missing = []

for (const [slug, summary] of Object.entries(map)) {
  const fp = path.join(DIR, slug + '.tsx')
  if (!fs.existsSync(fp)) { missing.push(slug); continue }
  let src = fs.readFileSync(fp, 'utf8')
  const head = src.slice(0, src.indexOf('export default') === -1 ? 400 : src.indexOf('export default'))
  if (/\n\s*summary:/.test(head)) { skipped.push(slug + ' (has summary)'); continue }
  const m = src.match(/export const meta = \{[\s\S]*?\n\}/)
  if (!m) { skipped.push(slug + ' (no meta block)'); continue }
  const block = m[0]
  const esc = summary.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
  const newBlock = block.replace(/\n\}$/, `\n  summary:\n    '${esc}',\n}`)
  src = src.replace(block, newBlock)
  fs.writeFileSync(fp, src)
  added++
}

console.log(`added: ${added}  skipped: ${skipped.length}  missing: ${missing.length}`)
if (skipped.length) console.log('SKIPPED:', skipped.slice(0, 30).join(' | '))
if (missing.length) console.log('MISSING:', missing.slice(0, 30).join(' | '))
