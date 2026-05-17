import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import articleRegistry from '@/public/data/article-registry.json'
import articleTags from '@/public/data/article-tags.json'

const registry = articleRegistry as Record<string, { title: string; description: string }>
const tags = articleTags as Record<string, { audience: string[]; claimType: string[]; contentType: string; jurisdiction: string }>

const TAG_LABELS: Record<string, string> = {
  // Audience
  newcomer: 'For Newcomers',
  'mid-claim': 'For Mid-Claim',
  professional: 'For Professionals',
  attorney: 'For Attorneys',
  // Claim type
  fire: 'Fire & Wildfire',
  water: 'Water Damage',
  smoke: 'Smoke Damage',
  mold: 'Mold',
  commercial: 'Commercial',
  contents: 'Contents & Personal Property',
  ale: 'Living Expenses (ALE)',
  roof: 'Roof & Wind',
  theft: 'Theft & Vandalism',
  general: 'General',
  // Content type
  guide: 'Guides',
  checklist: 'Checklists',
  'legal-analysis': 'Legal Analysis',
  'case-study': 'Case Studies',
  'how-to': 'How-To',
  reference: 'Reference',
  // Jurisdiction
  california: 'California',
  'multi-state': 'Multi-State',
  federal: 'Federal',
}

interface Props { params: Promise<{ tag: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const label = TAG_LABELS[tag]
  if (!label) return { title: 'Tagged Articles' }
  return {
    title: `${label} — Articles | InsuranceClaimsInfo.com`,
    description: `Browse all articles tagged "${label}" on InsuranceClaimsInfo.com.`,
  }
}

export function generateStaticParams() {
  return Object.keys(TAG_LABELS).map(tag => ({ tag }))
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const label = TAG_LABELS[tag]
  if (!label) notFound()

  const matchingArticles = Object.entries(tags)
    .filter(([, t]) => {
      return t.audience.includes(tag) ||
        t.claimType.includes(tag) ||
        t.contentType === tag ||
        t.jurisdiction === tag
    })
    .map(([slug]) => ({ slug, ...registry[slug] }))
    .filter(a => a.title)
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/resources" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-3xl font-bold">{label}</h1>
          <p className="text-blue-200 mt-2">{matchingArticles.length} articles</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {matchingArticles.map(article => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="block p-4 border border-gray-200 rounded-lg hover:border-[#1F3964] hover:shadow-sm transition-colors"
            >
              <h2 className="font-semibold text-[#1F3964]">{article.title}</h2>
              {article.description && (
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{article.description}</p>
              )}
            </Link>
          ))}
        </div>

        {matchingArticles.length === 0 && (
          <p className="text-gray-500 text-center py-12">No articles found for this tag.</p>
        )}

        <div className="mt-12 pt-8 border-t">
          <h3 className="font-bold text-[#1F3964] mb-4">Browse by Tag</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(TAG_LABELS).map(([t, l]) => (
              <Link
                key={t}
                href={`/resources/tag/${t}`}
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  t === tag
                    ? 'bg-[#1F3964] text-white border-[#1F3964]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#1F3964] hover:text-[#1F3964]'
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
