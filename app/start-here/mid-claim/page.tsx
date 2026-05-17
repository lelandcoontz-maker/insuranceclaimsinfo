import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: In the Middle of a Claim | InsuranceClaimsInfo.com',
  description: 'Already filed a claim? Tactical guidance for documentation, negotiation, working with adjusters, and knowing when to escalate.',
  alternates: { canonical: '/start-here/mid-claim' },
}

const sections = [
  {
    label: 'Document and Protect Your Claim',
    desc: 'The insurer documents everything. You should too.',
    articles: [
      { href: '/resources/contents-claims', title: 'Personal Property & Contents Claims' },
      { href: '/resources/contents-inventory-guide', title: 'How to Document a Contents Inventory' },
      { href: '/resources/commonly-missed-items', title: 'Commonly Missed Items in Contents Claims' },
      { href: '/resources/proof-of-loss', title: 'Proof of Loss: What It Is and When to Sign' },
      { href: '/resources/recording-insurance-inspections', title: 'Recording Insurance Inspections' },
    ],
  },
  {
    label: 'Deal With the Adjuster',
    desc: 'The adjuster works for the insurance company. That doesn\'t mean the process has to be adversarial — but you need to understand the dynamics.',
    articles: [
      { href: '/resources/dealing-with-adjuster', title: 'Dealing With the Adjuster' },
      { href: '/resources/adjuster-types', title: 'Types of Insurance Adjusters' },
      { href: '/resources/recorded-statements-siu', title: 'Recorded Statements & SIU Investigations' },
      { href: '/resources/insurer-duty-to-explain-payment', title: 'Your Right to Know How It Was Calculated' },
    ],
  },
  {
    label: 'Understand What You\'re Being Paid',
    desc: 'Before you can negotiate, you need to understand what the numbers mean.',
    articles: [
      { href: '/resources/how-insurance-payments-calculated', title: 'How Your Payment Is Calculated' },
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: Understanding Depreciation' },
      { href: '/resources/reading-statement-of-loss', title: 'How to Read Your Statement of Loss' },
      { href: '/resources/insurance-checks', title: 'Understanding Insurance Checks' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
    ],
  },
  {
    label: 'Temporary Housing (ALE)',
    desc: 'If you can\'t live in your home, the insurer owes you Additional Living Expenses.',
    articles: [
      { href: '/resources/ale-frv', title: 'Additional Living Expenses & Fair Rental Value' },
      { href: '/resources/loss-of-use-maximizing', title: 'Maximizing Your Loss of Use Benefits' },
      { href: '/resources/long-term-displacement-ale', title: 'Long-Term Displacement: When ALE Runs Out' },
    ],
  },
  {
    label: 'Fight Back',
    desc: 'If the offer is wrong, you have options. You don\'t have to accept it.',
    articles: [
      { href: '/resources/first-offer-lowball', title: 'Why You Should Never Accept the First Offer' },
      { href: '/resources/negotiation', title: 'Insurance Claim Negotiation Tactics' },
      { href: '/resources/claim-negotiation-letters', title: 'Template Demand Letters' },
      { href: '/resources/supplemental-claims', title: 'Filing a Supplement' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price: Which Fight Are You In?' },
    ],
  },
  {
    label: 'Escalate When Necessary',
    desc: 'Negotiation didn\'t work. Here\'s what comes next.',
    articles: [
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/cdi-complaint', title: 'Filing a CDI Complaint' },
      { href: '/resources/bad-faith', title: 'Bad Faith Insurance Practices' },
      { href: '/resources/public-adjuster', title: 'Working With a Public Adjuster' },
      { href: '/resources/when-to-hire-attorney', title: 'When to Hire an Attorney' },
    ],
  },
]

export default function MidClaimHubPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">In the Middle of a Claim</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            You&apos;ve filed. Now you need to make sure you get paid what you&apos;re owed.
            These articles give you the tactical knowledge to document your loss, understand
            your payments, and push back when the numbers are wrong.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map(section => (
            <div key={section.label}>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{section.label}</h2>
              <p className="text-gray-500 text-sm mb-4">{section.desc}</p>
              <div className="space-y-2">
                {section.articles.map(article => (
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Not Getting Paid Fairly?</h2>
          <p className="text-gray-600 mb-4">
            A licensed Public Adjuster negotiates with insurers every day — and works on contingency.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
