import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Understanding Your Insurance Policy',
  description: 'A guided reading path to help you understand your homeowners insurance policy — from declarations page through endorsements and legal doctrines.',
  alternates: { canonical: '/start-here/understand-policy' },
}

const steps = [
  {
    step: 1,
    label: 'Policy Basics',
    articles: [
      { href: '/resources/policy-types-overview', title: 'Types of Homeowners Insurance Policies' },
      { href: '/resources/policy-interpretation', title: 'Understanding Your Insurance Policy' },
      { href: '/resources/how-to-read-your-policy', title: 'How to Read Your Insurance Policy' },
    ],
  },
  {
    step: 2,
    label: 'Your Declarations Page',
    articles: [
      { href: '/resources/declarations-page', title: 'Your Declarations Page Explained' },
      { href: '/resources/special-limits-of-liability', title: 'Special Limits of Liability' },
      { href: '/resources/deductibles-guide', title: 'Understanding Deductibles' },
    ],
  },
  {
    step: 3,
    label: 'Coverages A Through D',
    articles: [
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: Understanding Depreciation' },
      { href: '/resources/ordinance-law', title: 'Code Upgrade & Ordinance or Law Coverage' },
      { href: '/resources/ale-frv', title: 'Additional Living Expenses & Fair Rental Value' },
      { href: '/resources/contents-claims', title: 'Personal Property & Contents Claims' },
      { href: '/resources/debris-removal', title: 'Debris Removal Coverage' },
    ],
  },
  {
    step: 4,
    label: 'Exclusions and Limitations',
    articles: [
      { href: '/resources/exclusions', title: 'Policy Exclusions: When They Apply and When They Don\'t' },
      { href: '/resources/wear-and-tear-cause-of-loss', title: 'Wear and Tear: Condition Is Not Causation' },
      { href: '/resources/where-you-reside-exclusion', title: 'The "Where You Reside" Exclusion' },
      { href: '/resources/mold-losses', title: 'Mold Losses and Coverage' },
    ],
  },
  {
    step: 5,
    label: 'Key Legal Doctrines',
    articles: [
      { href: '/resources/efficient-proximate-cause', title: 'Efficient Proximate Cause Doctrine' },
      { href: '/resources/ensuing-loss', title: 'Ensuing Loss: The Clause Insurers Hope You Never Read' },
      { href: '/resources/loss-settlement-provisions', title: 'Loss Settlement Provisions' },
    ],
  },
  {
    step: 6,
    label: 'Important Endorsements',
    articles: [
      { href: '/resources/endorsements-every-homeowner-needs', title: 'Endorsements Every Homeowner Needs' },
      { href: '/resources/open-perils-vs-named-perils', title: 'Open Perils vs. Named Perils' },
      { href: '/resources/force-placed-insurance', title: 'Force-Placed Insurance' },
    ],
  },
  {
    step: 7,
    label: 'Who Is Covered',
    articles: [
      { href: '/resources/named-insured-vs-an-insured', title: 'Named Insured vs. "An Insured"' },
      { href: '/resources/insurable-interest', title: 'Insurable Interest' },
      { href: '/resources/policyholder-death-coverage', title: 'Coverage After a Policyholder\'s Death' },
      { href: '/resources/surprising-coverages', title: 'Surprising Things Your Policy Covers' },
    ],
  },
]

export default function UnderstandPolicyPath() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">📖 Understanding Your Insurance Policy</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Your insurance policy is a contract — and the more you understand it, the harder
            it is for the insurance company to underpay you. This path breaks down every
            section of your policy in plain English.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Have a Coverage Question?</h2>
          <p className="text-gray-600 mb-4">
            A licensed Public Adjuster can review your policy, explain your coverages, and document your loss.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Policy Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
