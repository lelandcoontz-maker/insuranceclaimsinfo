import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/content/ArticleLayout'

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  'california-fair-claims': { title: 'California Fair Claims Settlement Practices Act (10 CCR 2695)', description: 'Your rights under California\'s fair claims regulation.' },
  'policy-interpretation':  { title: 'Understanding Your Insurance Policy', description: 'Coverages A–D, exclusions, and conditions explained.' },
  'claims-process':         { title: 'The Insurance Claims Process Step by Step', description: 'From first notice of loss to final settlement.' },
  'contents-claims':        { title: 'Personal Property & Contents Claims', description: 'How to document and value personal property for your claim.' },
  'ale-frv':                { title: 'Additional Living Expenses & Fair Rental Value', description: 'ALE and FRV: what you\'re entitled to and how to document it.' },
  'appraisal':              { title: 'The Insurance Appraisal Process', description: 'When and how to invoke appraisal to resolve valuation disputes.' },
  'negotiation':            { title: 'Insurance Claim Negotiation Tactics', description: 'How to respond to lowball offers and delay tactics.' },
  'bad-faith':              { title: 'Bad Faith Insurance Practices in California', description: 'What constitutes bad faith and your remedies under California law.' },
  'xactimate':              { title: 'Xactimate Estimates: What You Need to Know', description: 'How to read and dispute Xactimate scopes of loss.' },
  'public-adjuster':        { title: 'Working With a Public Adjuster', description: 'What a PA does, fees, and when to hire one.' },
  'cdi-complaint':          { title: 'Filing a CDI Complaint', description: 'How to file a complaint with the California Department of Insurance.' },
  'exclusions':             { title: 'Policy Exclusions: What\'s Not Covered', description: 'Common exclusions and when they may not apply.' },
  'acv-rcv':                { title: 'ACV vs. RCV: Actual vs. Replacement Cost Value', description: 'The most important distinction in a contents claim.' },
  'proof-of-loss':          { title: 'Proof of Loss: What It Is and How to Complete It', description: 'Requirements, deadlines, and how to file a sworn proof of loss.' },
  'specialty-items':        { title: 'Electronics, Jewelry & Specialty Item Claims', description: 'How high-value and specialty items are valued differently.' },
  'mold-losses':            { title: 'Mold Losses: What Your Insurance Actually Covers', description: 'Ensuing loss, mold limits, and common insurer tactics with mold claims.' },
  'duties-after-loss':      { title: 'Duties After Loss: What You\'re Required to Do', description: 'Your obligations after a loss and how they affect your claim.' },
}

// Map slugs to dynamic imports of content modules
const ARTICLE_CONTENT: Record<string, () => Promise<{ meta: { title: string; description: string }; default: React.ComponentType }>> = {
  'california-fair-claims': () => import('@/lib/content/articles/california-fair-claims'),
  'policy-interpretation':  () => import('@/lib/content/articles/policy-interpretation'),
  'claims-process':         () => import('@/lib/content/articles/claims-process'),
  'contents-claims':        () => import('@/lib/content/articles/contents-claims'),
  'ale-frv':                () => import('@/lib/content/articles/ale-frv'),
  'appraisal':              () => import('@/lib/content/articles/appraisal'),
  'negotiation':            () => import('@/lib/content/articles/negotiation'),
  'bad-faith':              () => import('@/lib/content/articles/bad-faith'),
  'xactimate':              () => import('@/lib/content/articles/xactimate'),
  'public-adjuster':        () => import('@/lib/content/articles/public-adjuster'),
  'cdi-complaint':          () => import('@/lib/content/articles/cdi-complaint'),
  'exclusions':             () => import('@/lib/content/articles/exclusions'),
  'acv-rcv':                () => import('@/lib/content/articles/acv-rcv'),
  'proof-of-loss':          () => import('@/lib/content/articles/proof-of-loss'),
  'specialty-items':        () => import('@/lib/content/articles/specialty-items'),
  'mold-losses':            () => import('@/lib/content/articles/mold-losses'),
  'duties-after-loss':      () => import('@/lib/content/articles/duties-after-loss'),
}

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = ARTICLE_META[slug]
  return meta
    ? { title: meta.title, description: meta.description }
    : { title: 'Resource Article' }
}

export function generateStaticParams() {
  return Object.keys(ARTICLE_META).map(slug => ({ slug }))
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const meta = ARTICLE_META[slug]
  const title = meta?.title ?? 'Resource Article'

  // Try to load article content
  const loader = ARTICLE_CONTENT[slug]
  if (loader) {
    try {
      const mod = await loader()
      const Content = mod.default
      return (
        <ArticleLayout
          title={title}
          description={meta?.description}
          backLink={{ href: '/resources', label: 'Back to Resources' }}
        >
          <Content />
        </ArticleLayout>
      )
    } catch {
      // Fall through to "coming soon" placeholder
    }
  }

  // Coming soon fallback
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
            we&#39;re happy to answer questions about your specific situation.
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
