import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { notFound } from 'next/navigation'

// Map of valid types to their content loaders
const CLAIM_TYPE_CONTENT: Record<string, () => Promise<{ meta: { title: string; description: string }; default: React.ComponentType }>> = {
  'fire': () => import('@/lib/content/claim-types/fire'),
  'smoke': () => import('@/lib/content/claim-types/smoke'),
  'water': () => import('@/lib/content/claim-types/water'),
  'vandalism': () => import('@/lib/content/claim-types/vandalism'),
  'vehicle-impact': () => import('@/lib/content/claim-types/vehicle-impact'),
  'sewage': () => import('@/lib/content/claim-types/sewage'),
  'flood': () => import('@/lib/content/claim-types/flood'),
  'mold': () => import('@/lib/content/claim-types/mold'),
}

interface Props { params: Promise<{ type: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const loader = CLAIM_TYPE_CONTENT[type]
  if (!loader) return { title: 'Claim Type' }
  const mod = await loader()
  return { title: mod.meta.title, description: mod.meta.description, alternates: { canonical: `/types-of-claims/${type}` } }
}

export function generateStaticParams() {
  return Object.keys(CLAIM_TYPE_CONTENT).map(type => ({ type }))
}

export default async function ClaimTypePage({ params }: Props) {
  const { type } = await params
  const loader = CLAIM_TYPE_CONTENT[type]
  if (!loader) notFound()

  const mod = await loader()
  const Content = mod.default

  return (
    <ArticleLayout
      title={mod.meta.title}
      description={mod.meta.description}
      backLink={{ href: '/types-of-claims', label: 'Back to Types of Claims' }}
    >
      <Content />
    </ArticleLayout>
  )
}
