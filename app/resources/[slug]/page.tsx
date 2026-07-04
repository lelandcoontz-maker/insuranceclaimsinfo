import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { RelatedArticles } from '@/components/content/RelatedArticles'
import { ExploreBlock } from '@/components/content/ExploreBlock'
import { NewsletterSignup } from '@/components/content/NewsletterSignup'
import { JsonLd } from '@/components/seo/JsonLd'
import { getCategoryForArticle, getCtaVariantForArticle, CATEGORIES } from '@/lib/content/taxonomy'
import articleDates from '@/public/data/article-dates.json'
import articleRegistry from '@/public/data/article-registry.json'
import articleTags from '@/public/data/article-tags.json'

const registry = articleRegistry as Record<string, { title: string; description: string; summary?: string; seoTitle?: string; seoDescription?: string }>
const tagData = articleTags as Record<string, { subcategory?: string }>

interface Props { params: Promise<{ slug: string }> }

/**
 * Build the HTML <title> for a given article.
 *
 * Priority:
 *   1. meta.seoTitle (hand-crafted short title for SERP)
 *   2. meta.title truncated at word boundary to ~60 chars
 *
 * Returned as `absolute` so the layout's '%s | InsuranceClaimsInfo.com'
 * template does NOT add ~26 chars of suffix on top of an already-long title.
 */
function buildSeoTitle(meta: { title: string; seoTitle?: string }, max = 60): string {
  if (meta.seoTitle && meta.seoTitle.length <= max) return meta.seoTitle
  const source = meta.seoTitle || meta.title
  if (source.length <= max) return source
  const sub = source.slice(0, max)
  const lastSpace = sub.lastIndexOf(' ')
  return lastSpace > max * 0.6 ? sub.slice(0, lastSpace) : sub.slice(0, max - 1) + '…'
}

/**
 * Build the SERP meta description for a given article.
 *
 * Priority:
 *   1. meta.seoDescription (hand-crafted, optimized for click-through)
 *   2. meta.description truncated at sentence/word boundary to ~155 chars
 */
function buildSeoDescription(meta: { description: string; seoDescription?: string }, max = 155): string {
  if (meta.seoDescription && meta.seoDescription.length <= max) return meta.seoDescription
  const source = meta.seoDescription || meta.description
  if (source.length <= max) return source
  const sub = source.slice(0, max)
  // Prefer a sentence boundary if one falls in the back half of the slice
  const lastSentence = Math.max(sub.lastIndexOf('. '), sub.lastIndexOf('! '), sub.lastIndexOf('? '))
  if (lastSentence > max * 0.6) return sub.slice(0, lastSentence + 1)
  // Otherwise fall back to word boundary with an ellipsis
  const lastSpace = sub.lastIndexOf(' ')
  return lastSpace > max * 0.6 ? sub.slice(0, lastSpace) + '…' : sub.slice(0, max - 1) + '…'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = registry[slug]
  if (!meta) return { title: 'Resource Article' }
  const url = `https://insuranceclaimsinfo.com/resources/${slug}`
  const seoTitle = buildSeoTitle(meta)
  const seoDescription = buildSeoDescription(meta)
  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      type: 'article',
      siteName: 'InsuranceClaimsInfo.com',
      locale: 'en_US',
      authors: ['Leland Coontz III'],
      images: [
        {
          url: 'https://insuranceclaimsinfo.com/images/leland-coontz-headshot.jpg',
          alt: 'Leland Coontz III, California Licensed Public Adjuster (#2B53445)',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: seoTitle,
      description: seoDescription,
      images: ['https://insuranceclaimsinfo.com/images/leland-coontz-headshot.jpg'],
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

  const subcategorySlug = tagData[slug]?.subcategory
  const subcategoryLabel = subcategorySlug && category
    ? CATEGORIES.find(c => c.label === category.label)?.subcategories?.find(s => s.slug === subcategorySlug)?.label
    : undefined

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    ...(category ? [{ label: category.label, href: `/resources#${category.slug}` }] : []),
    ...(subcategoryLabel ? [{ label: subcategoryLabel, href: `/resources#${subcategorySlug}` }] : []),
    { label: title },
  ]

  let pos = 1
  const jsonLdBreadcrumbs = [
    { '@type': 'ListItem' as const, position: pos++, name: 'Home', item: 'https://insuranceclaimsinfo.com' },
    { '@type': 'ListItem' as const, position: pos++, name: 'Resources', item: 'https://insuranceclaimsinfo.com/resources' },
    ...(category ? [{ '@type': 'ListItem' as const, position: pos++, name: category.label, item: `https://insuranceclaimsinfo.com/resources#${category.slug}` }] : []),
    ...(subcategoryLabel ? [{ '@type': 'ListItem' as const, position: pos++, name: subcategoryLabel, item: `https://insuranceclaimsinfo.com/resources#${subcategorySlug}` }] : []),
    { '@type': 'ListItem' as const, position: pos, name: title },
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
          image: 'https://insuranceclaimsinfo.com/images/leland-coontz-headshot.jpg',
          author: {
            '@type': 'Person',
            name: 'Leland Coontz III',
            jobTitle: 'Licensed Public Adjuster',
            image: 'https://insuranceclaimsinfo.com/images/leland-coontz-headshot.jpg',
            identifier: {
              '@type': 'PropertyValue',
              propertyID: 'California Department of Insurance License',
              value: '2B53445',
            },
            url: 'https://insuranceclaimsinfo.com/about',
            sameAs: 'https://insuranceclaimsinfo.com/about',
            knowsAbout: [
              'California Insurance Claims',
              'Public Adjusting',
              'Wildfire Insurance Claims',
              'Smoke Damage Claims',
              'Property Insurance Appraisal',
            ],
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
          summary={meta?.summary}
          breadcrumbs={breadcrumbItems}
          ctaVariant={ctaVariant}
          publishedDate={dates?.published}
          modifiedDate={dates?.modified}
          afterContent={<><ExploreBlock currentSlug={slug} /><NewsletterSignup source={slug} /><RelatedArticles currentSlug={slug} /></>}
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
