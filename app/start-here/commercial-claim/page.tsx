import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Commercial Property Claim',
  description: 'A guided reading path for commercial property insurance claims — from policy basics through business interruption, disputes, and professional help.',
  alternates: { canonical: '/start-here/commercial-claim' },
}

const steps = [
  {
    step: 1,
    label: 'Commercial Policy Basics',
    articles: [
      { href: '/resources/commercial-vs-residential-claims', title: 'Commercial vs. Residential Claims' },
      { href: '/resources/cp-cause-of-loss-forms', title: 'Commercial Property Cause of Loss Forms' },
      { href: '/resources/cp-vs-bop-policies', title: 'CP Policy vs. BOP: What\'s the Difference?' },
    ],
  },
  {
    step: 2,
    label: 'Business Interruption',
    articles: [
      { href: '/resources/business-interruption', title: 'Business Interruption Coverage' },
      { href: '/resources/business-income-waiting-period', title: 'Business Income Waiting Period' },
      { href: '/resources/extra-expense-coverage', title: 'Extra Expense Coverage' },
    ],
  },
  {
    step: 3,
    label: 'Commercial-Specific Issues',
    articles: [
      { href: '/resources/commercial-coinsurance', title: 'Commercial Coinsurance Penalties' },
      { href: '/resources/commercial-vacancy-clause', title: 'The Vacancy Clause' },
      { href: '/resources/blanket-vs-specific-insurance', title: 'Blanket vs. Specific Insurance' },
    ],
  },
  {
    step: 4,
    label: 'Specialized Coverages',
    articles: [
      { href: '/resources/commercial-endorsements', title: 'Key Commercial Endorsements' },
      { href: '/resources/accounts-receivable-valuable-papers', title: 'Accounts Receivable & Valuable Papers' },
      { href: '/resources/spoilage-coverage', title: 'Spoilage Coverage' },
    ],
  },
  {
    step: 5,
    label: 'The Claims Process',
    articles: [
      { href: '/resources/claims-process', title: 'The Insurance Claims Process Step by Step' },
      { href: '/resources/dealing-with-adjuster', title: 'Dealing With the Adjuster' },
      { href: '/resources/scoping-the-loss', title: 'Scoping the Loss' },
      { href: '/resources/xactimate', title: 'Xactimate Estimates: What You Need to Know' },
    ],
  },
  {
    step: 6,
    label: 'Disputes',
    articles: [
      { href: '/resources/negotiation', title: 'Insurance Claim Negotiation Tactics' },
      { href: '/resources/overhead-and-profit', title: 'Overhead & Profit: Are You Owed It?' },
      { href: '/resources/overhead-and-profit', title: 'The Three-Trade Rule' },
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price: Which Fight Are You In?' },
    ],
  },
  {
    step: 7,
    label: 'Getting Help',
    articles: [
      { href: '/resources/public-adjuster', title: 'Working With a Public Adjuster' },
      { href: '/resources/when-to-hire-attorney', title: 'When to Hire an Attorney' },
      { href: '/resources/large-commercial-losses', title: 'Large Commercial Losses' },
    ],
  },
]

export default function CommercialClaimPath() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">🏢 Commercial Property Claim</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Commercial claims are more complex than residential — with coinsurance penalties,
            business interruption calculations, and policy forms most business owners have
            never read. This path covers everything you need to protect your business.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Protect Your Business</h2>
          <p className="text-gray-600 mb-4">
            Commercial claims require specialized expertise. A licensed Public Adjuster can maximize your recovery.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
