/**
 * Exports article .tsx files to .docx Word documents for review.
 * Strips JSX/HTML to produce readable plain text with headings and lists.
 * Run with: npx tsx scripts/export-to-docx.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx'

const ARTICLES_DIR = path.resolve(__dirname, '../lib/content/articles')
const OUTPUT_DIR = 'C:/Users/lelan/Desktop/Review - Phase 2 Articles'

const SLUGS_TO_EXPORT = [
  // Tier 1 (8 foundational guides)
  'first-72-hours-after-loss',
  'how-california-claim-works',
  'insurer-obligations-cheat-sheet',
  'what-to-say-adjuster-calls',
  'should-i-file-a-claim',
  'first-week-of-claim',
  'what-public-adjuster-does',
  'insurance-claim-glossary',
  // Tier 2 (5 policy guides)
  'what-does-homeowner-policy-cover',
  'understanding-your-deductible',
  'replacement-cost-explained',
  'ale-basics-what-is-covered',
  'named-perils-vs-open-perils',
  // Tier 3 (7 process guides)
  'how-to-document-damage',
  'prepare-for-adjuster-inspection',
  'how-to-read-insurance-estimate',
  'insurance-offer-now-what',
  'personal-property-inventory-guide',
  'insurer-not-responding',
  'writing-effective-insurance-letter',
  // Tier 4 (5 situation guides)
  'water-leak-what-to-do',
  'fire-damage-beginners-guide',
  'roof-leak-storm-damage',
  'theft-vandalism-claim-guide',
  'basement-flooding-coverage',
  // Tier 5 (5 protection guides)
  'ten-things-before-a-loss',
  'annual-policy-review',
  'underinsured-how-to-fix',
  'insurer-goes-out-of-business',
  'choosing-homeowner-policy',
  // Tier 6 (5 escalation guides)
  'claim-denied-options',
  'lowball-offer-what-to-do',
  'bad-faith-explained',
  'file-cdi-complaint-guide',
  'do-i-need-a-lawyer',
  // Rewritten from markdown drafts (10)
  'estimate-bid-invoice-xactimate',
  'how-to-challenge-xactimate-estimate',
  'color-matching-material-aging',
  'release-trap-insurance-claims',
  'xactimate-labor-efficiency-settings',
  'construction-timeline-disputes-ale',
  'insurer-directed-failed-repairs-wasted-policy-limits',
  'subject-to-mortgage-insurance-trap',
  'victim-becomes-villain-tort-reform',
  'repair-first-or-negotiate-first',
]

function extractTitle(content: string): string {
  const match = content.match(/title:\s*['"](.+?)['"]/) ||
                content.match(/title:\s*[`']([^`']+)[`']/)
  if (match) return match[1].replace(/\\'/g, "'")
  return 'Untitled'
}

function jsxToText(content: string): string[] {
  // Remove imports and meta export
  let body = content.replace(/^import .+$/gm, '')
  body = body.replace(/export const meta[\s\S]*?\n\}/m, '')
  body = body.replace(/export default function Content\(\)[\s\S]*?return \(\s*<>/, '')
  body = body.replace(/<\/>\s*\)\s*\}\s*$/, '')

  // Convert JSX to text-like format
  const lines: string[] = []

  // Extract h2 headings
  body = body.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_, inner) => {
    const text = stripTags(inner).trim()
    lines.push(`\n## ${text}\n`)
    return ''
  })

  // Extract h3 headings
  body = body.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, inner) => {
    const text = stripTags(inner).trim()
    lines.push(`\n### ${text}\n`)
    return ''
  })

  // Extract paragraphs
  body = body.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (_, inner) => {
    const text = stripTags(inner).trim()
    if (text) lines.push(text + '\n')
    return ''
  })

  // Extract list items
  body = body.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, inner) => {
    const text = stripTags(inner).trim()
    if (text) lines.push(`  • ${text}`)
    return ''
  })

  // Extract dt/dd (glossary)
  body = body.replace(/<dt[^>]*>([\s\S]*?)<\/dt>/g, (_, inner) => {
    const text = stripTags(inner).trim()
    if (text) lines.push(`\n${text}`)
    return ''
  })
  body = body.replace(/<dd[^>]*>([\s\S]*?)<\/dd>/g, (_, inner) => {
    const text = stripTags(inner).trim()
    if (text) lines.push(`  ${text}\n`)
    return ''
  })

  return lines
}

function stripTags(html: string): string {
  return html
    .replace(/<Link[^>]*>([\s\S]*?)<\/Link>/g, '$1')
    .replace(/<strong>([\s\S]*?)<\/strong>/g, '$1')
    .replace(/<em>([\s\S]*?)<\/em>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\{' '\}/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&sect;/g, '§')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\{['"`][\s\S]*?['"`]\}/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

async function createDocx(title: string, textLines: string[]): Promise<Buffer> {
  const paragraphs: Paragraph[] = [
    new Paragraph({
      text: title,
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.LEFT,
      spacing: { after: 300 },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'REVIEW COPY — Check for legal accuracy, voice, and content', italics: true, size: 20 })],
      spacing: { after: 400 },
    }),
  ]

  for (const line of textLines) {
    if (line.startsWith('\n## ')) {
      paragraphs.push(new Paragraph({
        text: line.replace('\n## ', '').replace('\n', ''),
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 300, after: 100 },
      }))
    } else if (line.startsWith('\n### ')) {
      paragraphs.push(new Paragraph({
        text: line.replace('\n### ', '').replace('\n', ''),
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 },
      }))
    } else if (line.startsWith('  • ')) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: line.replace('  • ', ''), size: 22 })],
        bullet: { level: 0 },
        spacing: { after: 60 },
      }))
    } else if (line.trim()) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: line.replace(/\n/g, ''), size: 22 })],
        spacing: { after: 150 },
      }))
    }
  }

  const doc = new Document({
    sections: [{ properties: {}, children: paragraphs }],
  })

  return Buffer.from(await Packer.toBuffer(doc))
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  let count = 0
  for (const slug of SLUGS_TO_EXPORT) {
    const filePath = path.join(ARTICLES_DIR, `${slug}.tsx`)
    if (!fs.existsSync(filePath)) {
      console.log(`SKIP: ${slug}.tsx not found`)
      continue
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const title = extractTitle(content)
    const textLines = jsxToText(content)

    const buffer = await createDocx(title, textLines)
    const outPath = path.join(OUTPUT_DIR, `${slug}.docx`)
    fs.writeFileSync(outPath, buffer)
    count++
  }

  console.log(`Exported ${count} articles as .docx to: ${OUTPUT_DIR}`)
}

main().catch(console.error)
