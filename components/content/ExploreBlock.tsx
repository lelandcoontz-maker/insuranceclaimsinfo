import Link from 'next/link'
import { CATEGORIES, type ArticleCard } from '@/lib/content/taxonomy'

interface Props {
  currentSlug: string
}

function getArticleContext(slug: string) {
  const href = `/resources/${slug}`
  for (const cat of CATEGORIES) {
    const article = cat.articles.find(a => a.href === href)
    if (article) {
      return { article, category: cat }
    }
  }
  return null
}

export function ExploreBlock({ currentSlug }: Props) {
  const context = getArticleContext(currentSlug)
  if (!context) return null

  const { article, category } = context
  const currentSubcategory = (article as ArticleCard & { subcategory?: string }).subcategory

  // Find sibling articles in the same subcategory (or same category if no subcategory)
  let siblings: ArticleCard[]
  if (currentSubcategory) {
    siblings = category.articles.filter(
      a =>
        (a as ArticleCard & { subcategory?: string }).subcategory === currentSubcategory &&
        a.href !== `/resources/${currentSlug}`
    )
  } else {
    siblings = category.articles.filter(a => a.href !== `/resources/${currentSlug}`)
  }

  if (siblings.length === 0) return null

  // Show up to 5 siblings
  const toShow = siblings.slice(0, 5)

  const subcategoryLabel = currentSubcategory && category.subcategories
    ? category.subcategories.find(s => s.slug === currentSubcategory)?.label
    : null

  const heading = subcategoryLabel
    ? `More on ${subcategoryLabel}`
    : `More in ${category.label}`

  return (
    <nav aria-label={heading} className="border border-gray-200 rounded-lg p-5 my-8 bg-gray-50">
      <h3 className="text-sm font-bold text-[#1F3964] uppercase tracking-wide mb-3">
        {heading}
      </h3>
      <ul className="space-y-2">
        {toShow.map(a => (
          <li key={a.href}>
            <Link
              href={a.href}
              className="text-sm text-gray-700 hover:text-[#1F3964] hover:underline flex items-start gap-2"
            >
              <span className="flex-shrink-0" aria-hidden="true">{a.icon}</span>
              <span>{a.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      {siblings.length > 5 && (
        <Link
          href="/resources"
          className="text-xs text-[#1F3964] font-medium mt-3 inline-block hover:underline"
        >
          Browse all {category.label} articles →
        </Link>
      )}
    </nav>
  )
}
