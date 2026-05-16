import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Filing Your First Claim',
  description: 'A guided reading path for first-time insurance claimants — from deciding whether to file through getting paid fairly.',
  alternates: { canonical: '/start-here/first-claim' },
}

const steps = [
  {
    step: 1,
    label: 'Before You File',
    articles: [
      { href: '/resources/when-not-to-file-claim', title: 'When Not to File a Claim' },
      { href: '/resources/policy-interpretation', title: 'Understanding Your Insurance Policy' },
      { href: '/resources/declarations-page', title: 'Your Declarations Page Explained' },
      { href: '/resources/deductibles-guide', title: 'Understanding Deductibles' },
    ],
  },
  {
    step: 2,
    label: 'Report the Loss',
    articles: [
      { href: '/resources/claims-process', title: 'The Insurance Claims Process Step by Step' },
      { href: '/resources/duties-after-loss', title: 'Duties After Loss: What Your Policy Requires' },
      { href: '/resources/temporary-emergency-repairs', title: 'Temporary and Emergency Repairs' },
    ],
  },
  {
    step: 3,
    label: 'Document Everything',
    articles: [
      { href: '/resources/contents-claims', title: 'Personal Property & Contents Claims' },
      { href: '/resources/contents-inventory-guide', title: 'How to Document a Contents Inventory' },
      { href: '/resources/proof-of-loss', title: 'Proof of Loss: What It Is and When to Sign' },
      { href: '/resources/recording-insurance-inspections', title: 'Recording Insurance Inspections' },
    ],
  },
  {
    step: 4,
    label: 'Understand the Adjuster',
    articles: [
      { href: '/resources/dealing-with-adjuster', title: 'Dealing With the Adjuster' },
      { href: '/resources/adjuster-types', title: 'Types of Insurance Adjusters' },
      { href: '/resources/independent-adjuster-explained', title: 'Independent Adjusters Explained' },
      { href: '/resources/recorded-statements-siu', title: 'Recorded Statements & SIU' },
    ],
  },
  {
    step: 5,
    label: 'Temporary Housing',
    articles: [
      { href: '/resources/ale-frv', title: 'Additional Living Expenses & Fair Rental Value' },
      { href: '/resources/loss-of-use-maximizing', title: 'Maximizing Your Loss of Use Benefits' },
    ],
  },
  {
    step: 6,
    label: 'Review the Payment',
    articles: [
      { href: '/resources/how-insurance-payments-calculated', title: 'How Your Payment Is Calculated' },
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: Understanding Depreciation' },
      { href: '/resources/reading-statement-of-loss', title: 'How to Read Your Statement of Loss' },
      { href: '/resources/insurance-checks', title: 'Understanding Insurance Checks' },
    ],
  },
  {
    step: 7,
    label: 'If Things Go Wrong',
    articles: [
      { href: '/resources/first-offer-lowball', title: 'Why You Should Never Accept the First Offer' },
      { href: '/resources/negotiation', title: 'Insurance Claim Negotiation Tactics' },
      { href: '/resources/supplemental-claims', title: 'Filing a Supplement' },
      { href: '/resources/public-adjuster', title: 'Working With a Public Adjuster' },
      { href: '/resources/when-to-hire-attorney', title: 'When to Hire an Attorney' },
    ],
  },
]

export default function FirstClaimPath() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">📋 Filing Your First Claim</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Never filed an insurance claim before? This path walks you through every stage
            — from deciding whether to file, through documenting your loss, to making sure
            you get paid what you&apos;re owed.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-10">
          {steps.map(({ step, label, articles }) => (
            <div key={step}>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#1F3964] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step}
                </span>
                <h2 className="text-xl font-bold text-gray-900">{label}</h2>
              </div>
              <div className="ml-11 space-y-2">
                {articles.map(article => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block p-3 rounded-lg border border-gray-200 hover:border-[#1F3964] hover:shadow-sm transition-all"
                  >
                    <span className="text-[#1F3964] font-medium text-sm">{article.title}</span>
                    <span className="text-gray-400 ml-2">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#EFF4FB] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Feeling Overwhelmed?</h2>
          <p className="text-gray-600 mb-4">
            A licensed Public Adjuster can handle your entire claim from start to finish — at no upfront cost.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
