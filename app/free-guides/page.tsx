import type { Metadata } from 'next'
import Link from 'next/link'
import { FreeGuideCard } from './FreeGuideCard'
import type { FreeGuide } from './FreeGuideCard'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Free Insurance Claim Guides — InsuranceClaimsInfo',
  description:
    'Free downloadable PDF guides for homeowners dealing with insurance claims. Learn about carrier tactics, the appraisal process, depreciation, and what your policy covers.',
  openGraph: {
    title: 'Free Insurance Claim Guides — InsuranceClaimsInfo',
    description:
      'Free downloadable PDF guides written by a licensed California Public Adjuster. Protect yourself from insurance company tactics.',
    type: 'website',
  },
}

const FREE_GUIDES: FreeGuide[] = [
  {
    id: 'games-insurers-play',
    name: 'Games Insurance Companies Play',
    description:
      'How carriers minimize your claim — and what you can do about it. Covers lowball offers, delay tactics, depreciation abuse, scope shrinking, preferred vendor traps, and policy language weaponization.',
    icon: '\u{1F3B2}',
    tag: 'Most Popular',
    tagColor: 'bg-red-100 text-red-700',
    fileName: 'Games Insurance Companies Play.pdf',
    pages: 16,
    features: [
      '7 common tactics insurance companies use to underpay claims',
      'How to recognize and counter lowball offers',
      'Your rights when the carrier delays your claim',
      'Step-by-step action plan for before and after filing',
      'What a Public Adjuster does and when to hire one',
    ],
  },
  {
    id: 'appraisal-process',
    name: 'The Appraisal Process Explained',
    description:
      'Your most powerful tool when the insurance company won\'t pay what you\'re owed. Learn how appraisal works, when to invoke it, and how to win.',
    icon: '\u{2696}',
    tag: 'Essential',
    tagColor: 'bg-blue-100 text-blue-700',
    fileName: 'The Appraisal Process Explained.pdf',
    pages: 13,
    features: [
      'Step-by-step walkthrough of the appraisal process',
      'When to invoke appraisal (and when not to)',
      'How to choose the right appraiser',
      'The umpire\'s role and how to influence the outcome',
      'How insurance companies try to undermine appraisal',
    ],
  },
  {
    id: 'depreciation-trap',
    name: 'ACV vs. RCV: The Depreciation Trap',
    description:
      'How insurance companies shortchange your claim payout through depreciation abuse. Understand ACV, RCV, recoverable depreciation, and how to fight back.',
    icon: '\u{1F4C9}',
    tag: 'Eye-Opener',
    tagColor: 'bg-amber-100 text-amber-700',
    fileName: 'ACV vs RCV - The Depreciation Trap.pdf',
    pages: 12,
    features: [
      'ACV vs. RCV explained in plain English',
      'The two-check system and your second payment',
      'Why blanket depreciation percentages are wrong',
      'States where labor depreciation is illegal',
      'The matching problem and how to fight for it',
    ],
  },
  {
    id: 'what-policy-covers',
    name: 'What Your Policy Actually Covers',
    description:
      'A policyholder\'s guide to understanding homeowner\'s insurance. Your policy is more generous than you think — and more generous than your insurer wants you to know.',
    icon: '\u{1F4D6}',
    tag: 'Start Here',
    tagColor: 'bg-green-100 text-green-700',
    fileName: 'What Your Policy Actually Covers.pdf',
    pages: 16,
    features: [
      'The 6 parts of your policy explained in plain English',
      'Open peril vs. named peril — know the difference',
      'Coverages most people don\'t know they have',
      'Common coverage disputes and how to fight denials',
      'Why state law can override your policy language',
    ],
  },
]

export default function FreeGuidesPage() {
  const guidesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Insurance Claim Guides',
    description: 'Free downloadable PDF guides for homeowners dealing with insurance claims.',
    author: {
      '@type': 'Person',
      name: 'Leland Coontz',
      jobTitle: 'California Licensed Public Adjuster',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: FREE_GUIDES.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'DigitalDocument',
          name: guide.name,
          description: guide.description,
          fileFormat: 'application/pdf',
          isAccessibleForFree: true,
        },
      })),
    },
  }

  return (
    <>
      <JsonLd data={guidesJsonLd} />

      {/* Hero */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            100% FREE
          </span>
          <h1 className="text-3xl font-bold mb-3">Free Insurance Claim Guides</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Written by a licensed California Public Adjuster with decades of experience
            on both sides of the claims process. No fluff, no sales pitch &mdash; just the
            knowledge you need to protect yourself.
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-[#1F3964]">4 Guides</p>
            <p className="text-gray-600 text-sm">57 total pages</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-[#1F3964]">No Cost</p>
            <p className="text-gray-600 text-sm">Just enter your email</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-[#1F3964]">Expert Written</p>
            <p className="text-gray-600 text-sm">By a licensed Public Adjuster</p>
          </div>
        </div>
      </div>

      {/* Guide grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FREE_GUIDES.map(guide => (
            <FreeGuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>

      {/* Upsell to paid guides */}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Want to Go Deeper?</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-xl mx-auto leading-relaxed">
            Our premium guides include templates, sample letters, annotated examples,
            and step-by-step strategies you can apply directly to your claim.
          </p>
          <Link
            href="/guides"
            className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View Premium Guides &rarr;
          </Link>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Need Help With Your Claim?</h2>
          <p className="text-blue-200 mb-6">
            A free guide is a great start &mdash; but if your insurance company isn&apos;t
            playing fair, you may need a professional in your corner.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
