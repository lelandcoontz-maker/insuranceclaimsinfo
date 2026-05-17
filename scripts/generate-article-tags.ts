/**
 * Build-time script to generate article tag and subcategory assignments.
 * Uses slug/title pattern matching to assign structured tags.
 *
 * Outputs: public/data/article-tags.json
 *   { slug: { audience, claimType, contentType, jurisdiction, subcategory } }
 *
 * Run with: npx tsx scripts/generate-article-tags.ts
 */

import * as fs from 'fs'
import * as path from 'path'

const REGISTRY_PATH = path.resolve(__dirname, '../public/data/article-registry.json')
const OUTPUT_PATH = path.resolve(__dirname, '../public/data/article-tags.json')

interface TagAssignment {
  audience: string[]
  claimType: string[]
  contentType: string
  jurisdiction: string
  subcategory?: string
}

const registry: Record<string, { title: string; description: string }> = JSON.parse(
  fs.readFileSync(REGISTRY_PATH, 'utf-8')
)

// Pattern-based tag assignment rules
const claimTypePatterns: [RegExp, string][] = [
  [/fire|wildfire|burn|smoke|ash|soot/, 'fire'],
  [/water|flood|leak|plumb|moisture|pipe/, 'water'],
  [/smoke/, 'smoke'],
  [/mold|fungus|mycotoxin/, 'mold'],
  [/commercial|business|tenant|landlord|lease|bop|cp-/, 'commercial'],
  [/contents|personal.property|inventory|belongings/, 'contents'],
  [/ale|living.expense|frv|fair.rental|displacement|relocation/, 'ale'],
  [/roof|shingle|wind|storm|hail/, 'roof'],
  [/theft|vandal|burglary|break.in|stolen/, 'theft'],
]

const audiencePatterns: [RegExp, string][] = [
  [/xactimate|scoping|three.trade|o.p|estimat/, 'professional'],
  [/case.law|caci|jury.instruction|litigation|statute.of.limitation/, 'attorney'],
  [/appraisal.practitioner|umpire/, 'professional'],
  [/bad.faith.damages|brandt.fees|punitive/, 'attorney'],
]

const contentTypePatterns: [RegExp, string][] = [
  [/guide|how.to|step.by.step|walkthrough/, 'guide'],
  [/checklist|worksheet/, 'checklist'],
  [/case.law|doctrine|statute|regulation|code.section|caci/, 'legal-analysis'],
  [/story|stories|real.claim/, 'case-study'],
]

// Subcategory assignment rules by parent category slug patterns
const subcategoryRules: Record<string, [RegExp, string][]> = {
  'understanding-your-residential-policy': [
    [/policy.type|ho-|dwelling|declarations|how.to.read.your.policy|policy.interpretation/, 'policy-structure'],
    [/coverage|limit|sub.limit|special.limit|deductible|coinsurance/, 'coverage-types'],
    [/acv|rcv|replacement.cost|depreciation|settlement|valuation|agreed.value|pair.and.set/, 'valuation'],
    [/condo|hoa|landlord|tenant|vacancy|builder|marine|manufactured/, 'property-types'],
    [/endorsement|rider|floater|scheduled/, 'endorsements'],
  ],
  'filing---managing-your-claim': [
    [/claim.process|first.notice|duties.after|proof.of.loss|file.a.claim|rights/, 'getting-started'],
    [/adjuster|inspection|recorded.statement|siu|investigation|dealing.with/, 'working-with-adjusters'],
    [/payment|check|holdback|calculated|depreciation|recoverable|advance/, 'payments-valuation'],
    [/ale|frv|living.expense|displacement|relocation|hotel|rent/, 'living-expenses'],
    [/contents|inventory|personal.property|belonging/, 'contents-claims'],
    [/supplement|reopen/, 'supplements-reopening'],
  ],
  'disputes---fighting-back': [
    [/negotiat|demand|letter|lowball|offer|strategy/, 'negotiation'],
    [/xactimate|estimate|pricing|scope.vs.price|three.trade|o.p|missed.items|depreciation/, 'estimating'],
    [/appraisal|umpire/, 'appraisal'],
    [/engineer|report|expert|defeating/, 'engineering'],
    [/bad.faith|lawsuit|attorney|litigation|remedy/, 'legal-remedies'],
  ],
  'types-of-damage': [
    [/fire|wildfire|burn|smoke|soot|ash|thermal/, 'fire-smoke'],
    [/water|flood|leak|mold|moisture|plumb/, 'water-mold'],
    [/wind|roof|storm|hail|shingle/, 'wind-roof'],
    [/vandal|theft|vehicle|tree|fallen/, 'specialty-damage'],
    [/environmental|hazmat|biohazard|asbestos|lead|contamination|sampling/, 'environmental'],
  ],
  'california-law---regulations': [
    [/bad.faith|penalty|punitive|brandt|emotional.distress/, 'bad-faith'],
    [/code.790|ccr|2695|regulation|fair.claims|standard.fire|sb.?49/, 'statutes-regulations'],
    [/case.law|gruenberg|caci|jury/, 'case-law'],
    [/proximate.cause|ensuing.loss|concurrent|doctrine|reformation/, 'coverage-doctrines'],
    [/elder|consumer|cdi|complaint|crisis/, 'consumer-protection'],
  ],
}

// Build category-to-article mapping from taxonomy.ts (read file, extract hrefs per category)
const TAXONOMY_PATH = path.resolve(__dirname, '../lib/content/taxonomy.ts')
const taxonomyContent = fs.readFileSync(TAXONOMY_PATH, 'utf-8')

// Extract category labels and their article slugs
const categoryArticleMap: Record<string, string[]> = {}
const catRegex = /label:\s*'([^']+)',\s*\n\s*color:/g
const categories: string[] = []
let catMatch: RegExpExecArray | null
while ((catMatch = catRegex.exec(taxonomyContent)) !== null) {
  categories.push(catMatch[1])
}

// For each article slug, find which category it belongs to by scanning taxonomy
const slugCategoryMap: Record<string, string> = {}
let currentCat = ''
for (const line of taxonomyContent.split('\n')) {
  const catLabelMatch = line.match(/^\s*label:\s*'([^']+)',/)
  if (catLabelMatch && categories.includes(catLabelMatch[1])) {
    currentCat = catLabelMatch[1].toLowerCase().replace(/[^a-z0-9]+/g, '-')
  }
  const hrefMatch = line.match(/href:\s*'\/resources\/([^']+)'/)
  if (hrefMatch && currentCat) {
    slugCategoryMap[hrefMatch[1]] = currentCat
  }
}

function assignSubcategory(slug: string, text: string, categorySlug: string): string | undefined {
  const rules = subcategoryRules[categorySlug]
  if (!rules) return undefined
  for (const [pattern, subcat] of rules) {
    if (pattern.test(text)) return subcat
  }
  return undefined
}

function assignTags(slug: string, title: string, desc: string): TagAssignment {
  const text = `${slug} ${title} ${desc}`.toLowerCase()

  // Claim types
  const claimTypes: string[] = []
  for (const [pattern, tag] of claimTypePatterns) {
    if (pattern.test(text)) claimTypes.push(tag)
  }
  if (claimTypes.length === 0) claimTypes.push('general')

  // Audience
  const audiences: string[] = []
  for (const [pattern, tag] of audiencePatterns) {
    if (pattern.test(text)) audiences.push(tag)
  }
  if (audiences.length === 0) audiences.push('mid-claim')

  // Content type
  let contentType = 'reference'
  for (const [pattern, tag] of contentTypePatterns) {
    if (pattern.test(text)) {
      contentType = tag
      break
    }
  }

  // Jurisdiction — default California for this site
  const jurisdiction = /federal|nfip|fema/.test(text) ? 'federal'
    : /multi.state|nationwide|all.states/.test(text) ? 'multi-state'
    : 'california'

  // Subcategory
  const categorySlug = slugCategoryMap[slug] || ''
  const subcategory = assignSubcategory(slug, text, categorySlug)

  return { audience: audiences, claimType: claimTypes, contentType, jurisdiction, ...(subcategory && { subcategory }) }
}

// Build the output
const output: Record<string, TagAssignment> = {}

for (const [slug, meta] of Object.entries(registry)) {
  output[slug] = assignTags(slug, meta.title, meta.description)
}

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2))
console.log(`Generated tags for ${Object.keys(output).length} articles → ${OUTPUT_PATH}`)

// Stats
const withSubcat = Object.values(output).filter(t => t.subcategory).length
console.log(`  ${withSubcat} articles assigned subcategories`)
