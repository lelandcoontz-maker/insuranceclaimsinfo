/**
 * Placeholder for individual resource articles.
 * Phase 1: Shows a "coming soon" page with a CTA.
 * Phase 2: Replace with MDX content, a CMS (Contentful, Sanity), or a database.
 *
 * The URL structure /resources/[slug] is already set up — just add content.
 */

import type { Metadata } from 'next'
import Link from 'next/link'

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
}

interface Props { params: { slug: string } }

export function generateMetadata({ params }: Props): Metadata {
  const meta = ARTICLE_META[params.slug]
  return meta
    ? { title: meta.title, description: meta.description }
    : { title: 'Resource Article' }
}

export default function ResourceArticlePage({ params }: Props) {
  const meta = ARTICLE_META[params.slug]
  const title = meta?.title ?? 'Resource Article'

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
        {/* Coming soon placeholder */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-xl font-bold text-amber-900 mb-3">Full Guide Coming Soon</h2>
          <p className="text-amber-800 leading-relaxed mb-6">
            This article is being written. In the meantime, if you have questions about{' '}
            <strong>{title.toLowerCase()}</strong>, contact us for a free consultation —
            we're happy to answer questions about your specific situation.
          </p>
          <Link href="/contact" className="btn-primary">
            Ask a Question — Free →
          </Link>
        </div>

        {/* Related tools */}
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
