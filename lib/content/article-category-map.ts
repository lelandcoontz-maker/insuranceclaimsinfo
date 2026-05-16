import { CATEGORIES, slugForCategory } from './categories'
import type { CtaVariant } from '@/components/content/ArticleLayout'

const categoryMap: Record<string, { label: string; slug: string }> = {}

for (const cat of CATEGORIES) {
  const catSlug = slugForCategory(cat.label)
  for (const article of cat.articles) {
    const articleSlug = article.href.replace('/resources/', '')
    categoryMap[articleSlug] = { label: cat.label, slug: catSlug }
  }
}

export function getCategoryForArticle(slug: string): { label: string; slug: string } | null {
  return categoryMap[slug] ?? null
}

const CATEGORY_CTA_MAP: Record<string, CtaVariant> = {
  'Understanding Your Residential Policy': 'general',
  'Commercial Insurance': 'commercial',
  'Filing & Managing Your Claim': 'general',
  'Carrier Tactics & Real Stories': 'denied',
  'Disputes & Fighting Back': 'denied',
  'Types of Damage': 'damage',
  'Getting Professional Help': 'general',
  'California Law & Regulations': 'legal',
  'Emerging Issues & Technology': 'general',
  'Special Property Types & Situations': 'general',
  'Xactimate & Estimating': 'denied',
  'Research & Academic Studies': 'general',
}

export function getCtaVariantForArticle(slug: string): CtaVariant {
  const cat = getCategoryForArticle(slug)
  if (!cat) return 'general'

  if (slug.includes('wildfire') || slug.includes('fire') || slug.includes('smoke')) return 'wildfire'
  if (slug.includes('appraisal')) return 'appraisal'

  return CATEGORY_CTA_MAP[cat.label] ?? 'general'
}
