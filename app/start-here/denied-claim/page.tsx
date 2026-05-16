import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Denied or Underpaid Claim',
  description: 'Your insurance claim was denied or underpaid. Here\'s a guided reading path to understand your rights and fight back.',
  alternates: { canonical: '/start-here/denied-claim' },
}

const steps = [
  {
    step: 1,
    label: 'Understand Why They Denied or Underpaid',
    articles: [
      { href: '/resources/coverage-disputes', title: 'Coverage Disputes: Is Your Loss Covered?' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price: Which Fight Are You In?' },
      { href: '/resources/exclusions', title: 'Policy Exclusions: When They Apply and When They Don\'t' },
      { href: '/resources/reservation-of-rights', title: 'Reservation of Rights Letters' },
      { href: '/resources/insurer-duty-to-explain-payment', title: 'Your Right to Know How It Was Calculated' },
    ],
  },
  {
    step: 2,
    label: 'Learn the Legal Doctrines That Protect You',
    articles: [
      { href: '/resources/efficient-proximate-cause', title: 'Efficient Proximate Cause Doctrine' },
      { href: '/resources/ensuing-loss', title: 'Ensuing Loss: The Clause Insurers Hope You Never Read' },
      { href: '/resources/wear-and-tear-cause-of-loss', title: 'Wear and Tear: Condition Is Not Causation' },
      { href: '/resources/california-fair-claims', title: 'California Fair Claims Regulations' },
      { href: '/resources/policyholder-rights', title: 'California Policyholder Rights' },
    ],
  },
  {
    step: 3,
    label: 'Challenge the Estimate',
    articles: [
      { href: '/resources/first-offer-lowball', title: 'Why You Should Never Accept the First Offer' },
      { href: '/resources/xactimate', title: 'Xactimate Estimates: What You Need to Know' },
      { href: '/resources/how-to-read-xactimate-estimate', title: 'How to Read Your Xactimate Estimate' },
      { href: '/resources/overhead-and-profit', title: 'Overhead & Profit: Are You Owed It?' },
      { href: '/resources/three-trade-rule', title: 'The Three-Trade Rule' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
    ],
  },
  {
    step: 4,
    label: 'Negotiate and Demand',
    articles: [
      { href: '/resources/negotiation', title: 'Insurance Claim Negotiation Tactics' },
      { href: '/resources/claim-negotiation-letters', title: 'Template Demand Letters' },
      { href: '/resources/supplemental-claims', title: 'Filing a Supplement' },
      { href: '/resources/reading-statement-of-loss', title: 'How to Read Your Statement of Loss' },
    ],
  },
  {
    step: 5,
    label: 'Escalate: Appraisal, CDI, or Litigation',
    articles: [
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/appraisal-mediation-litigation-decision', title: 'Choosing: Appraisal vs. Mediation vs. Litigation' },
      { href: '/resources/cdi-complaint', title: 'Filing a CDI Complaint' },
      { href: '/resources/insurance-mediation', title: 'Insurance Mediation' },
    ],
  },
  {
    step: 6,
    label: 'Bad Faith and Legal Remedies',
    articles: [
      { href: '/resources/bad-faith', title: 'Bad Faith Insurance Practices' },
      { href: '/resources/bad-faith-damages', title: 'Bad Faith Damages: What You Can Recover' },
      { href: '/resources/duty-to-investigate', title: 'The Insurer\'s Duty to Investigate' },
      { href: '/resources/insurance-delay-tactics', title: 'Delay Tactics and Your Rights' },
      { href: '/resources/elder-abuse-insurance', title: 'Elder Abuse Protections' },
    ],
  },
  {
    step: 7,
    label: 'Get Professional Help',
    articles: [
      { href: '/resources/public-adjuster', title: 'Working With a Public Adjuster' },
      { href: '/resources/when-to-hire-attorney', title: 'When to Hire an Attorney' },
      { href: '/resources/public-adjuster-fees', title: 'Public Adjuster Fees' },
    ],
  },
]

export default function DeniedClaimPath() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            ← Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">❌ Denied or Underpaid Claim</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Your insurer denied your claim, underpaid you, or is dragging its feet.
            This path walks you through understanding why, what your rights are,
            and how to fight back — from negotiation through bad faith remedies.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Don&apos;t Fight Alone</h2>
          <p className="text-gray-600 mb-4">
            A licensed Public Adjuster negotiates with insurers every day — and works on contingency.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
