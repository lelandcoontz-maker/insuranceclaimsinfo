import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Claims Professionals | InsuranceClaimsInfo.com',
  description: 'Technical references for public adjusters, contractors, and restoration professionals — estimating, scoping, appraisal, and dispute strategy.',
  alternates: { canonical: '/start-here/professional' },
}

const sections = [
  {
    label: 'Estimating & Xactimate',
    desc: 'The estimate is the battlefield. Win or lose happens in the line items.',
    articles: [
      { href: '/resources/xactimate', title: 'Xactimate Estimates: What You Need to Know' },
      { href: '/resources/how-to-read-xactimate-estimate', title: 'How to Read an Xactimate Estimate' },
      { href: '/resources/overhead-and-profit', title: 'Overhead & Profit: When It\'s Owed' },
      { href: '/resources/three-trade-rule', title: 'The Three-Trade Rule' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price: Which Fight Are You In?' },
    ],
  },
  {
    label: 'Scoping & Documentation',
    desc: 'What you document in the field determines what you can defend at the desk.',
    articles: [
      { href: '/resources/scoping-the-loss', title: 'Scoping the Loss' },
      { href: '/resources/commonly-missed-items', title: 'Commonly Missed Items' },
      { href: '/resources/contents-inventory-guide', title: 'Contents Inventory Documentation' },
      { href: '/resources/proof-of-loss', title: 'Proof of Loss' },
    ],
  },
  {
    label: 'Appraisal Practice',
    desc: 'Appraisal is where most underpaid claims end up. Know the process cold.',
    articles: [
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/appraisal-mediation-litigation-decision', title: 'Appraisal vs. Mediation vs. Litigation' },
      { href: '/resources/reading-statement-of-loss', title: 'Reading the Statement of Loss' },
    ],
  },
  {
    label: 'Dispute Strategy',
    desc: 'When the carrier says no, you need to know the rules they\'re supposed to follow.',
    articles: [
      { href: '/resources/negotiation', title: 'Negotiation Tactics' },
      { href: '/resources/claim-negotiation-letters', title: 'Template Demand Letters' },
      { href: '/resources/supplemental-claims', title: 'Supplements' },
      { href: '/resources/california-fair-claims', title: 'California Fair Claims Regulations' },
      { href: '/resources/insurance-delay-tactics', title: 'Carrier Delay Tactics' },
    ],
  },
  {
    label: 'Coverage Issues',
    desc: 'Coverage questions you\'ll run into on complex residential and commercial losses.',
    articles: [
      { href: '/resources/efficient-proximate-cause', title: 'Efficient Proximate Cause' },
      { href: '/resources/ensuing-loss', title: 'Ensuing Loss' },
      { href: '/resources/ordinance-law', title: 'Ordinance or Law Coverage' },
      { href: '/resources/debris-removal', title: 'Debris Removal Coverage' },
      { href: '/resources/commercial-coinsurance', title: 'Commercial Coinsurance' },
    ],
  },
  {
    label: 'Specialized Damage Types',
    desc: 'Technical references for specific loss types.',
    articles: [
      { href: '/resources/smoke-damage-claims', title: 'Smoke Damage Claims' },
      { href: '/resources/urban-vs-forest-wildfire-smoke', title: 'Urban vs. Forest Fire Smoke' },
      { href: '/resources/mold-losses', title: 'Mold Losses' },
      { href: '/resources/asbestos-lead-insurance-claims', title: 'Asbestos & Lead Paint' },
      { href: '/resources/total-loss', title: 'Total Loss Claims' },
    ],
  },
]

export default function ProfessionalHubPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">For Claims Professionals</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Technical references for public adjusters, contractors, and restoration professionals.
            Estimating standards, scoping methodology, appraisal practice, and the regulatory
            framework that governs carrier behavior in California.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Referral Partner?</h2>
          <p className="text-gray-600 mb-4">
            If you have a policyholder who needs a Public Adjuster, reach out. Same-day response.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
