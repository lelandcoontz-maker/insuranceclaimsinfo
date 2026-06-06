/* Export every article (and key prose pages) as readable Markdown for offline audit.
 * Output: C:\Users\lelan\Desktop\Website every article\{articles,pages}\{slug}.md
 */
const fs = require('fs')
const path = require('path')

const ART_DIR = path.join(__dirname, '../lib/content/articles')
const OUT = 'C:/Users/lelan/Desktop/Website every article'
const OUT_ART = path.join(OUT, 'articles')
const OUT_PG = path.join(OUT, 'pages')
fs.mkdirSync(OUT_ART, { recursive: true })
fs.mkdirSync(OUT_PG, { recursive: true })

const ENTITIES = {
  '&mdash;': '—', '&ndash;': '–', '&amp;': '&', '&nbsp;': ' ',
  '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”',
  '&sect;': '§', '&para;': '¶', '&times;': '×', '&deg;': '°',
  '&hellip;': '…', '&apos;': "'", '&quot;': '"', '&lt;': '<', '&gt;': '>',
  '&frac12;': '½', '&frac14;': '¼', '&frac34;': '¾', '&middot;': '·',
  '&trade;': '™', '&reg;': '®', '&copy;': '©', '&eacute;': 'é',
}
function decode(s) {
  for (const [k, v] of Object.entries(ENTITIES)) s = s.split(k).join(v)
  s = s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  return s
}

// Pull the value of a meta field (handles single/double/backtick, optional newline)
function metaField(src, field) {
  // Match the opening quote, then everything up to the matching unescaped quote.
  const re = new RegExp(field + ":\\s*\\n?\\s*([\"'`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1")
  const m = src.match(re)
  if (!m) return ''
  return m[2].replace(/\\(['"`])/g, '$1')
}

function jsxToMarkdown(body) {
  let s = body

  // CalloutBox -> blockquote with its title
  s = s.replace(/<CalloutBox\b[^>]*\btitle=["']([^"']*)["'][^>]*>([\s\S]*?)<\/CalloutBox>/g,
    (_, title, inner) => `\n\n> **${title}**\n> ${stripInline(inner).replace(/\n+/g, '\n> ')}\n\n`)
  s = s.replace(/<CalloutBox\b[^>]*>([\s\S]*?)<\/CalloutBox>/g,
    (_, inner) => `\n\n> ${stripInline(inner).replace(/\n+/g, '\n> ')}\n\n`)
  s = s.replace(/<KeyTakeaway\b[^>]*>([\s\S]*?)<\/KeyTakeaway>/g,
    (_, inner) => `\n\n> **KEY TAKEAWAY:** ${stripInline(inner)}\n\n`)

  // Headings
  s = s.replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g, (_, t) => `\n\n# ${stripInline(t)}\n\n`)
  s = s.replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g, (_, t) => `\n\n## ${stripInline(t)}\n\n`)
  s = s.replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g, (_, t) => `\n\n### ${stripInline(t)}\n\n`)
  s = s.replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/g, (_, t) => `\n\n#### ${stripInline(t)}\n\n`)

  // List items
  s = s.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/g, (_, t) => `\n- ${stripInline(t)}`)

  // Table rows -> pipe-separated
  s = s.replace(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g, (_, t) => `${stripInline(t)} | `)
  s = s.replace(/<tr\b[^>]*>/g, '\n').replace(/<\/tr>/g, '')

  // Paragraphs -> blank-line separated
  s = s.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/g, (_, t) => `\n\n${stripInline(t)}\n\n`)

  // Final pass: convert remaining inline formatting + strip leftover tags,
  // but PRESERVE the block-level newlines inserted above.
  s = finalize(s)

  // Whitespace cleanup
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/[ \t]{2,}/g, ' ')
  return s.trim()
}

// Inline-level: bold/italic/links, strip tags, JSX expressions, decode entities
function stripInline(s) {
  s = s.replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/g, (_, t) => `**${t.trim()}**`)
  s = s.replace(/<b\b[^>]*>([\s\S]*?)<\/b>/g, (_, t) => `**${t.trim()}**`)
  s = s.replace(/<em\b[^>]*>([\s\S]*?)<\/em>/g, (_, t) => `*${t.trim()}*`)
  s = s.replace(/<i\b[^>]*>([\s\S]*?)<\/i>/g, (_, t) => `*${t.trim()}*`)
  // Links: keep visible text only
  s = s.replace(/<Link\b[^>]*>([\s\S]*?)<\/Link>/g, (_, t) => t)
  s = s.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/g, (_, t) => t)
  s = s.replace(/<br\s*\/?>/g, '\n')
  // JSX whitespace/string expressions
  s = s.replace(/\{['"`]([\s\S]*?)['"`]\}/g, '$1')   // {' '} or {'text'}
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')          // {/* comments */}
  s = s.replace(/\{[^{}]*\}/g, '')                    // other {expr}
  // Strip any remaining tags
  s = s.replace(/<[^>]+>/g, '')
  s = decode(s)
  return s.replace(/[ \t]{2,}/g, ' ').replace(/\s*\n\s*/g, ' ').trim()
}

// Like stripInline but preserves newlines (used on the whole body at the end)
function finalize(s) {
  s = s.replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/g, (_, t) => `**${t.trim()}**`)
  s = s.replace(/<b\b[^>]*>([\s\S]*?)<\/b>/g, (_, t) => `**${t.trim()}**`)
  s = s.replace(/<em\b[^>]*>([\s\S]*?)<\/em>/g, (_, t) => `*${t.trim()}*`)
  s = s.replace(/<i\b[^>]*>([\s\S]*?)<\/i>/g, (_, t) => `*${t.trim()}*`)
  s = s.replace(/<Link\b[^>]*>([\s\S]*?)<\/Link>/g, (_, t) => t)
  s = s.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/g, (_, t) => t)
  s = s.replace(/<br\s*\/?>/g, '\n')
  // Turn closing block tags into line breaks so content does not run together
  s = s.replace(/<\/(div|section|ul|ol|aside|nav|table|tbody|thead|figure|blockquote)>/g, '\n')
  s = s.replace(/\{['"`]([\s\S]*?)['"`]\}/g, '$1')
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
  s = s.replace(/\{[^{}]*\}/g, '')
  s = s.replace(/<[^>]+>/g, '')
  return decode(s)
}

function extractBody(src) {
  const i = src.indexOf('return (')
  if (i === -1) return ''
  let body = src.slice(i + 'return ('.length)
  // cut trailing ")\n}" of the component
  const last = body.lastIndexOf(')')
  if (last !== -1) body = body.slice(0, last)
  return body.replace(/^\s*<>\s*/, '').replace(/\s*<\/>\s*$/, '')
}

// ---- Articles ----
const files = fs.readdirSync(ART_DIR).filter(f => f.endsWith('.tsx')).sort()
let count = 0
const index = []
for (const f of files) {
  const slug = f.replace('.tsx', '')
  const src = fs.readFileSync(path.join(ART_DIR, f), 'utf8')
  const title = decode(metaField(src, 'title'))
  const desc = decode(metaField(src, 'description'))
  const summary = decode(metaField(src, 'summary'))
  index.push({ slug, title })
  const md = jsxToMarkdown(extractBody(src))
  const out = `# ${title}\n\n` +
    `- **Slug:** ${slug}\n` +
    `- **URL:** https://insuranceclaimsinfo.com/resources/${slug}\n` +
    `- **Meta description:** ${desc}\n\n` +
    (summary ? `> **KEY TAKEAWAY:** ${summary}\n\n` : '') +
    `---\n\n${md}\n`
  fs.writeFileSync(path.join(OUT_ART, slug + '.md'), out)
  count++
}
console.log(`Articles exported: ${count} -> ${OUT_ART}`)

// ---- Static prose pages (best-effort) ----
const APP_DIR = path.join(__dirname, '../app')
function walk(dir, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'api' || e.name.includes('[')) continue
      walk(p, acc)
    } else if (e.name === 'page.tsx') {
      acc.push(p)
    }
  }
  return acc
}
const pages = walk(APP_DIR, [])
let pc = 0
for (const p of pages) {
  const rel = path.relative(APP_DIR, path.dirname(p))
  const name = rel === '' ? 'home' : rel.replace(/[\\/]/g, '-')
  const src = fs.readFileSync(p, 'utf8')
  const body = jsxToMarkdown(extractBody(src))
  if (body.replace(/\s/g, '').length < 60) continue   // skip near-empty/layout-only pages
  const out = `# Page: /${rel.replace(/\\/g, '/')}\n\n` +
    `- **Source:** app/${path.relative(APP_DIR, p).replace(/\\/g, '/')}\n` +
    `- **Note:** Auto-extracted page text (rougher than articles — interactive/list content may be incomplete).\n\n` +
    `---\n\n${body}\n`
  fs.writeFileSync(path.join(OUT_PG, name + '.md'), out)
  pc++
}
console.log(`Pages exported: ${pc} -> ${OUT_PG}`)

// ---- Index ----
const idx = `# Website Content Export — Audit Index\n\n` +
  `Exported ${new Date().toISOString().slice(0, 10)} for offline read-through and markup.\n\n` +
  `- **articles/** — ${count} individual articles (clean readable Markdown)\n` +
  `- **pages/** — ${pc} larger site sections (about, FAQ, Start-Here hubs, regulations, etc.)\n\n` +
  `Each article file shows the title, slug, meta description, and Key Takeaway, then the full text.\n` +
  `Mark up changes however you like; Karma applies them to the live site afterward.\n\n` +
  `---\n\n## All Articles (A–Z)\n\n` +
  index.map(a => `- [${a.title}](articles/${a.slug}.md)`).join('\n') + '\n'
fs.writeFileSync(path.join(OUT, 'INDEX.md'), idx)
console.log(`Index written -> ${path.join(OUT, 'INDEX.md')}`)
