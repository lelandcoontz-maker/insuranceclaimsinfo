import type { Metadata } from 'next'
import Link from 'next/link'
import { FreeGuideCard } from './FreeGuideCard'
import type { FreeGuide } from './FreeGuideCard'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Free Insurance Claim Guides — InsuranceClaimsInfo',
  description:
    'Nine free downloadable PDF guides for homeowners dealing with insurance claims — carrier tactics, appraisal strategy, Xactimate disputes, wildfire recovery, bad faith documentation, depreciation, contents claims, and policy coverage.',
  alternates: { canonical: '/free-guides' },
  openGraph: {
    title: 'Free Insurance Claim Guides — InsuranceClaimsInfo',
    description:
      'Nine free downloadable PDF guides written by a licensed California Public Adjuster. Covers appraisal, Xactimate, wildfire, bad faith, and more.',
    type: 'website',
  },
}

const FREE_GUIDES: FreeGuide[] = [
  {
    id: 'games-insurers-play',
    name: 'Games Insurance Companies Play',
    description:
      'How carriers minimize your claim — and what you can do about it. Covers lowball offers, delay tactics, depreciation abuse, scope shrinking, preferred vendor traps, and policy language weaponization.',
    iconName: 'dices',
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
    id: 'appraisal-handbook',
    name: 'The California Appraisal Handbook',
    description:
      'Everything you need to know about insurance appraisal in California — from invoking it to winning it. Covers key case law, appraiser selection, umpire process, and strategy.',
    iconName: 'gavel',
    tag: 'In-Depth',
    tagColor: 'bg-purple-100 text-purple-700',
    fileName: 'appraisal-handbook.pdf',
    pages: 40,
    features: [
      '40+ pages of California-specific appraisal guidance',
      'Key case law summaries (Sharma, Kacha, Devonwood, Lee)',
      'Sample appraisal demand letter',
      'Award form language red flags checklist',
      'White waiver response template',
      'Appraiser selection criteria worksheet',
    ],
  },
  {
    id: 'xactimate-dispute-guide',
    name: 'Xactimate Dispute Guide: Line by Line',
    description:
      'How to read, challenge, and supplement an Xactimate estimate to fight underpayment. Covers the most commonly omitted line items, O&P, and supplement strategy.',
    iconName: 'ruler',
    tag: 'Technical',
    tagColor: 'bg-blue-100 text-blue-700',
    fileName: 'xactimate-dispute-guide.pdf',
    pages: 50,
    features: [
      '50+ pages with annotated Xactimate examples',
      '25 most commonly omitted line items checklist',
      'O&P inclusion argument template',
      'Supplement letter template',
      'Labor rate and material pricing guidance',
      'Room-by-room scope review methodology',
    ],
  },
  {
    id: 'wildfire-recovery-guide',
    name: 'California Wildfire Claims Recovery Guide',
    description:
      'Step-by-step guidance for total and partial wildfire losses in California. Covers smoke contamination, ALE, contents inventory, and post-disaster regulatory protections.',
    iconName: 'flame',
    tag: 'California',
    tagColor: 'bg-orange-100 text-orange-700',
    fileName: 'wildfire-recovery-guide.pdf',
    pages: 35,
    features: [
      '35+ pages of wildfire-specific claim guidance',
      'Forest fire vs. urban wildfire smoke contamination',
      'Coverage A–D walkthrough for wildfire losses',
      'ALE documentation checklist and timeline',
      'Contents inventory methodology for total losses',
      'Post-disaster regulatory protections summary',
    ],
  },
  {
    id: 'appraisal-process',
    name: 'The Appraisal Process Explained',
    description:
      'Your most powerful tool when the insurance company won\'t pay what you\'re owed. Learn how appraisal works, when to invoke it, and how to win.',
    iconName: 'scale',
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
    id: 'bad-faith-documentation-kit',
    name: 'Bad Faith Documentation Kit',
    description:
      'Templates and checklists for building a bad faith case from day one of your claim. Includes communication logs, deadline trackers, and sample follow-up letters.',
    iconName: 'clipboard-check',
    tag: 'Essential',
    tagColor: 'bg-amber-100 text-amber-700',
    fileName: 'bad-faith-documentation-kit.pdf',
    pages: 29,
    features: [
      'Communication log template (printable + digital)',
      'Regulatory deadline tracker (10 CCR 2695)',
      'Violation documentation worksheets',
      'Sample follow-up letters for missed deadlines',
      'Bad faith indicators checklist',
      'Guide to the interplay of regulations, statutes, and bad faith',
    ],
  },
  {
    id: 'depreciation-trap',
    name: 'ACV vs. RCV: The Depreciation Trap',
    description:
      'How insurance companies shortchange your claim payout through depreciation abuse. Understand ACV, RCV, recoverable depreciation, and how to fight back.',
    iconName: 'trending-down',
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
    id: 'contents-claim-workbook',
    name: 'The Complete Contents Claim Workbook',
    description:
      'Room-by-room methodology for documenting, valuing, and claiming personal property losses. Covers cleaning vs. replacement, ACV vs. RCV, and how to present your inventory.',
    iconName: 'armchair',
    tag: 'Starter',
    tagColor: 'bg-green-100 text-green-700',
    fileName: 'contents-claim-workbook.pdf',
    pages: 19,
    features: [
      'Room-by-room inventory worksheets',
      'Cleaning vs. replacement decision framework',
      'ACV vs. RCV calculation examples',
      'Electronics and specialty item valuation guide',
      'Pack-out and storage documentation checklist',
      'Sample contents claim submission format',
    ],
  },
  {
    id: 'what-policy-covers',
    name: 'What Your Policy Actually Covers',
    description:
      'A policyholder\'s guide to understanding homeowner\'s insurance. Your policy is more generous than you think — and more generous than your insurer wants you to know.',
    iconName: 'book-open',
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
            <p className="text-2xl font-bold text-[#1F3964]">9 Guides</p>
            <p className="text-gray-600 text-sm">230+ total pages</p>
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
