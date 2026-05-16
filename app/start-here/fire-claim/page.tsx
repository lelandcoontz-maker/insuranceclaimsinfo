import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Fire or Wildfire Claim',
  description: 'A guided reading path for California fire and wildfire claim victims — from emergency steps through settlement.',
  alternates: { canonical: '/start-here/fire-claim' },
}

const steps = [
  {
    step: 1,
    label: 'Understand the Basics',
    articles: [
      { href: '/resources/claims-process', title: 'The Insurance Claims Process Step by Step' },
      { href: '/resources/policy-interpretation', title: 'Understanding Your Insurance Policy' },
      { href: '/resources/duties-after-loss', title: 'Duties After Loss: What Your Policy Requires' },
    ],
  },
  {
    step: 2,
    label: 'Know Your Wildfire-Specific Rights',
    articles: [
      { href: '/resources/wildfire-guide', title: 'California Wildfire Claims Guide' },
      { href: '/resources/smoke-damage-claims', title: 'Smoke Damage Claims' },
      { href: '/resources/urban-vs-forest-wildfire-smoke', title: 'Urban vs. Forest Fire Smoke' },
      { href: '/resources/wildfire-mudslide-coverage', title: 'Mudslide After Wildfire: Why It\'s Covered' },
      { href: '/resources/debris-removal', title: 'Debris Removal Coverage' },
    ],
  },
  {
    step: 3,
    label: 'Document Your Property',
    articles: [
      { href: '/resources/contents-claims', title: 'Personal Property & Contents Claims' },
      { href: '/resources/contents-inventory-guide', title: 'How to Document a Contents Inventory' },
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: Understanding Depreciation' },
      { href: '/resources/commonly-missed-items', title: 'Commonly Missed Items in Contents Claims' },
      { href: '/resources/specialty-items', title: 'Electronics, Jewelry & Specialty Items' },
    ],
  },
  {
    step: 4,
    label: 'Handle Temporary Housing',
    articles: [
      { href: '/resources/ale-frv', title: 'Additional Living Expenses & Fair Rental Value' },
      { href: '/resources/loss-of-use-maximizing', title: 'Maximizing Your Loss of Use Benefits' },
      { href: '/resources/long-term-displacement-ale', title: 'Long-Term Displacement: When ALE Runs Out' },
    ],
  },
  {
    step: 5,
    label: 'Deal With the Insurance Company',
    articles: [
      { href: '/resources/dealing-with-adjuster', title: 'Dealing With the Adjuster' },
      { href: '/resources/adjuster-types', title: 'Types of Insurance Adjusters' },
      { href: '/resources/first-offer-lowball', title: 'Never Accept the First Offer' },
      { href: '/resources/how-insurance-payments-calculated', title: 'How Your Payment Is Calculated' },
      { href: '/resources/recorded-statements-siu', title: 'Recorded Statements & SIU' },
    ],
  },
  {
    step: 6,
    label: 'Fight If Needed',
    articles: [
      { href: '/resources/negotiation', title: 'Insurance Claim Negotiation Tactics' },
      { href: '/resources/claim-negotiation-letters', title: 'Template Negotiation Letters' },
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/bad-faith', title: 'Bad Faith Insurance Practices' },
      { href: '/resources/public-adjuster', title: 'Working With a Public Adjuster' },
      { href: '/resources/when-to-hire-attorney', title: 'When to Hire an Attorney' },
    ],
  },
  {
    step: 7,
    label: 'Rebuilding Decisions',
    articles: [
      { href: '/resources/choosing-your-contractor', title: 'Choosing Your Contractor' },
      { href: '/resources/ordinance-law', title: 'Code Upgrade & Ordinance or Law Coverage' },
      { href: '/resources/deciding-not-to-rebuild', title: 'What If You Don\'t Rebuild?' },
      { href: '/resources/total-loss', title: 'Total Loss Claims' },
      { href: '/resources/underinsured-after-wildfire', title: 'Underinsured After a Wildfire' },
    ],
  },
]

export default function FireClaimPath() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            ← Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">🔥 Fire or Wildfire Claim</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            A step-by-step reading path to help you navigate a fire or wildfire insurance claim
            from the first day through final settlement. Read in order, or jump to the step
            that matches where you are now.
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
                    <span className="text-gray-400 ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#EFF4FB] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Need Professional Help?</h2>
          <p className="text-gray-600 mb-4">
            A licensed Public Adjuster can handle your entire claim — at no upfront cost.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
