import Link from 'next/link'
import { CATEGORIES, type ArticleCard } from '@/lib/content/categories'

interface Props {
  currentSlug: string
  relatedSlugs?: string[]
}

function findArticleByHref(href: string): (ArticleCard & { categoryLabel: string }) | null {
  for (const cat of CATEGORIES) {
    const found = cat.articles.find(a => a.href === href)
    if (found) return { ...found, categoryLabel: cat.label }
  }
  return null
}

export function RelatedArticles({ currentSlug, relatedSlugs }: Props) {
  const currentHref = `/resources/${currentSlug}`

  let related: ArticleCard[]

  if (relatedSlugs && relatedSlugs.length > 0) {
    related = relatedSlugs
      .map(slug => findArticleByHref(`/resources/${slug}`))
      .filter((a): a is ArticleCard & { categoryLabel: string } => a !== null)
      .slice(0, 4)
  } else {
    const currentCategory = CATEGORIES.find(cat =>
      cat.articles.some(a => a.href === currentHref)
    )
    if (!currentCategory) return null

    const sameCategory = currentCategory.articles.filter(
      a => a.href !== currentHref
    )

    if (sameCategory.length <= 4) {
      related = sameCategory
    } else {
      const shuffled = [...sameCategory].sort(() => Math.random() - 0.5)
      related = shuffled.slice(0, 4)
    }
  }

  if (related.length === 0) return null

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <h2 className="text-xl font-bold text-[#1F3964] mb-4">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map(article => (
          <Link
            key={article.href}
            href={article.href}
            className="block rounded-lg border border-gray-200 p-4 hover:shadow-md hover:border-[#1F3964] transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {article.icon}
              </span>
              <div>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${article.tagColor}`}
                >
                  {article.tag}
                </span>
                <h3 className="font-semibold text-gray-900 mt-1 text-sm leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
