import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Attorneys | InsuranceClaimsInfo.com',
  description: 'Case law, bad faith doctrine, CACI instructions, statutory remedies, and coverage analysis for insurance litigation attorneys.',
  alternates: { canonical: '/start-here/attorney' },
}

const sections = [
  {
    label: 'Bad Faith & Extracontractual Liability',
    desc: 'The doctrinal framework for holding carriers accountable beyond the policy limits.',
    articles: [
      { href: '/resources/bad-faith', title: 'Bad Faith Insurance Practices in California' },
      { href: '/resources/bad-faith-damages', title: 'Bad Faith Damages: What\'s Recoverable' },
      { href: '/resources/duty-to-investigate', title: 'The Insurer\'s Duty to Investigate' },
      { href: '/resources/brandt-fees', title: 'Brandt Fees' },
      { href: '/resources/emotional-distress-insurance-claims', title: 'Emotional Distress Damages' },
      { href: '/resources/elder-abuse-insurance', title: 'Elder Abuse in Insurance Context' },
    ],
  },
  {
    label: 'Coverage Doctrines',
    desc: 'The interpretive rules that determine whether a loss is covered.',
    articles: [
      { href: '/resources/efficient-proximate-cause', title: 'Efficient Proximate Cause Doctrine' },
      { href: '/resources/ensuing-loss', title: 'Ensuing Loss' },
      { href: '/resources/wear-and-tear-cause-of-loss', title: 'Wear and Tear: Condition Is Not Causation' },
      { href: '/resources/exclusions', title: 'Policy Exclusions' },
      { href: '/resources/coverage-disputes', title: 'Coverage Disputes' },
    ],
  },
  {
    label: 'Statutes & Regulations',
    desc: 'The California statutory and regulatory framework for first-party claims handling.',
    articles: [
      { href: '/resources/california-fair-claims', title: 'California Fair Claims Regulations (CCR 2695)' },
      { href: '/resources/policyholder-rights', title: 'Policyholder Rights Under California Law' },
      { href: '/resources/insurance-delay-tactics', title: 'Statutory Deadlines and Delay' },
      { href: '/resources/cdi-complaint', title: 'CDI Complaints and Enforcement' },
      { href: '/resources/statute-of-limitations-insurance', title: 'Statute of Limitations' },
    ],
  },
  {
    label: 'Case Law & CACI',
    desc: 'Key California decisions and jury instructions for insurance coverage litigation.',
    articles: [
      { href: '/resources/gruenberg-v-aetna', title: 'Gruenberg v. Aetna' },
      { href: '/resources/caci-insurance-instructions', title: 'CACI Insurance Jury Instructions' },
      { href: '/resources/jordan-v-allstate', title: 'Jordan v. Allstate' },
      { href: '/resources/egan-v-mutual-of-omaha', title: 'Egan v. Mutual of Omaha' },
    ],
  },
  {
    label: 'Valuation Disputes',
    desc: 'Technical valuation issues that appear in coverage litigation.',
    articles: [
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
      { href: '/resources/overhead-and-profit', title: 'Overhead & Profit' },
      { href: '/resources/xactimate', title: 'Xactimate and Carrier Estimating' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price Disputes' },
    ],
  },
  {
    label: 'Dispute Resolution',
    desc: 'Pre-litigation and alternative resolution mechanisms.',
    articles: [
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/appraisal-mediation-litigation-decision', title: 'Appraisal vs. Mediation vs. Litigation' },
      { href: '/resources/insurance-mediation', title: 'Insurance Mediation' },
    ],
  },
]

export default function AttorneyHubPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">For Attorneys</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Coverage analysis, bad faith doctrine, case law, CACI instructions, and statutory
            remedies for California first-party property insurance litigation. Written by a
            licensed Public Adjuster who works with plaintiff-side counsel daily.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Need a Public Adjuster on a Case?</h2>
          <p className="text-gray-600 mb-4">
            Licensed PA available for expert consultation, claim valuation, and testimony on
            California first-party property claims.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
