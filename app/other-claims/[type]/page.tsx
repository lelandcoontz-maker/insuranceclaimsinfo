import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { notFound } from 'next/navigation'

const OTHER_CLAIM_CONTENT: Record<string, () => Promise<{ meta: { title: string; description: string }; default: React.ComponentType }>> = {
  'business-interruption': () => import('@/lib/content/other-claims/business-interruption'),
  'cyber-theft': () => import('@/lib/content/other-claims/cyber-theft'),
  'employee-theft': () => import('@/lib/content/other-claims/employee-theft'),
  'cargo': () => import('@/lib/content/other-claims/cargo'),
  'auto-damage': () => import('@/lib/content/other-claims/auto-damage'),
  'personal-injury': () => import('@/lib/content/other-claims/personal-injury'),
  'workers-comp': () => import('@/lib/content/other-claims/workers-comp'),
  'medical': () => import('@/lib/content/other-claims/medical'),
}

interface Props { params: Promise<{ type: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const loader = OTHER_CLAIM_CONTENT[type]
  if (!loader) return { title: 'Other Claims' }
  const mod = await loader()
  return { title: mod.meta.title, description: mod.meta.description }
}

export function generateStaticParams() {
  return Object.keys(OTHER_CLAIM_CONTENT).map(type => ({ type }))
}

export default async function OtherClaimTypePage({ params }: Props) {
  const { type } = await params
  const loader = OTHER_CLAIM_CONTENT[type]
  if (!loader) notFound()

  const mod = await loader()
  const Content = mod.default

  return (
    <ArticleLayout
      title={mod.meta.title}
      description={mod.meta.description}
      backLink={{ href: '/other-claims', label: 'Back to Other Claims' }}
    >
      <Content />
    </ArticleLayout>
  )
}
