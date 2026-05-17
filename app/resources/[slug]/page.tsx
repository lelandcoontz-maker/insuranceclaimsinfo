import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { RelatedArticles } from '@/components/content/RelatedArticles'
import { JsonLd } from '@/components/seo/JsonLd'
import { getCategoryForArticle, getCtaVariantForArticle } from '@/lib/content/taxonomy'
import articleDates from '@/public/data/article-dates.json'
import articleRegistry from '@/public/data/article-registry.json'

const registry = articleRegistry as Record<string, { title: string; description: string }>

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = registry[slug]
  if (!meta) return { title: 'Resource Article' }
  const url = `https://insuranceclaimsinfo.com/resources/${slug}`
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: 'article',
      siteName: 'InsuranceClaimsInfo.com',
      locale: 'en_US',
      authors: ['Leland Coontz III'],
    },
    twitter: {
      card: 'summary',
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(registry).map(slug => ({ slug }))
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const meta = registry[slug]
  const title = meta?.title ?? 'Resource Article'
  const category = getCategoryForArticle(slug)
  const ctaVariant = getCtaVariantForArticle(slug)
  const dates = (articleDates as Record<string, { published: string; modified: string }>)[slug]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    ...(category ? [{ label: category.label, href: `/resources#${category.slug}` }] : []),
    { label: title },
  ]

  const jsonLdBreadcrumbs = [
    { '@type': 'ListItem' as const, position: 1, name: 'Home', item: 'https://insuranceclaimsinfo.com' },
    { '@type': 'ListItem' as const, position: 2, name: 'Resources', item: 'https://insuranceclaimsinfo.com/resources' },
    ...(category ? [{ '@type': 'ListItem' as const, position: 3, name: category.label, item: `https://insuranceclaimsinfo.com/resources#${category.slug}` }] : []),
    { '@type': 'ListItem' as const, position: category ? 4 : 3, name: title },
  ]

  try {
    const mod = await import(`@/lib/content/articles/${slug}`)
    const Content = mod.default
    return (
      <>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: meta?.description,
          author: {
            '@type': 'Person',
            name: 'Leland Coontz III',
            jobTitle: 'Licensed Public Adjuster',
            url: 'https://insuranceclaimsinfo.com/about',
            sameAs: 'https://insuranceclaimsinfo.com/about',
          },
          publisher: {
            '@type': 'Organization',
            name: 'InsuranceClaimsInfo.com',
            url: 'https://insuranceclaimsinfo.com',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://insuranceclaimsinfo.com/resources/${slug}`,
          },
          ...(dates?.published && { datePublished: dates.published }),
          ...(dates?.modified && { dateModified: dates.modified }),
          inLanguage: 'en-US',
          isAccessibleForFree: true,
          about: {
            '@type': 'Thing',
            name: 'Insurance Claims',
          },
        }} />
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: jsonLdBreadcrumbs,
        }} />
        <ArticleLayout
          title={title}
          description={meta?.description}
          breadcrumbs={breadcrumbItems}
          ctaVariant={ctaVariant}
          afterContent={<RelatedArticles currentSlug={slug} />}
        >
          <Content />
        </ArticleLayout>
      </>
    )
  } catch {
    // Article file doesn't exist yet — show placeholder
  }

  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-3xl font-bold">{title}</h1>
          {meta?.description && (
            <p className="text-blue-200 mt-3">{meta.description}</p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-xl font-bold text-amber-900 mb-3">Full Guide Coming Soon</h2>
          <p className="text-amber-800 leading-relaxed mb-6">
            This article is being written. In the meantime, if you have questions about{' '}
            <strong>{title.toLowerCase()}</strong>, contact us for a free consultation —
            we&apos;re happy to answer questions about your specific situation.
          </p>
          <Link href="/contact" className="btn-primary">
            Ask a Question — Free →
          </Link>
        </div>

        <div className="mt-10 border-t pt-8">
          <h3 className="font-bold text-[#1F3964] mb-4">While You Wait — Use the Free Tool</h3>
          <Link href="/inventory" className="card flex items-center gap-4 hover:border-[#1F3964]">
            <span className="text-3xl">📋</span>
            <div>
              <p className="font-semibold text-[#1F3964]">Personal Property Inventory Tool</p>
              <p className="text-sm text-gray-600">3,750+ items, room by room. Free Excel download.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
