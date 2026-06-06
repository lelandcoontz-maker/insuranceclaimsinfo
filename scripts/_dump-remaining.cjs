/* Dump title + description for articles missing a summary.
 * Usage: node scripts/_dump-remaining.cjs <start> <count>
 */
const fs = require('fs')
const path = require('path')
const DIR = path.join(__dirname, '../lib/content/articles')

const start = parseInt(process.argv[2] || '0', 10)
const count = parseInt(process.argv[3] || '45', 10)

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.tsx')).sort()
const remaining = files.filter(f => {
  const s = fs.readFileSync(path.join(DIR, f), 'utf8')
  const head = s.indexOf('export default') === -1 ? s : s.slice(0, s.indexOf('export default'))
  return !/\n\s*summary:/.test(head)
})

const batch = remaining.slice(start, start + count)
const titleRe = /title:\s*['"`]((?:[^'"`\\]|\\.)*)['"`]/
const descRe = /description:\s*\n?\s*['"`]((?:[^'"`\\]|\\.)*)['"`]/

for (const f of batch) {
  const slug = f.replace('.tsx', '')
  const src = fs.readFileSync(path.join(DIR, f), 'utf8')
  const t = (src.match(titleRe) || [])[1] || ''
  const d = (src.match(descRe) || [])[1] || ''
  console.log('@@ ' + slug)
  console.log('T: ' + t)
  console.log('D: ' + d)
}
console.log(`--- showing ${batch.length} (index ${start}..${start + batch.length}) of ${remaining.length} remaining ---`)
