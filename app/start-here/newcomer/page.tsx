import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: New to Insurance Claims | InsuranceClaimsInfo.com',
  description: 'New to insurance claims? Start here. Plain-language guides to understanding your policy, your rights, and what to expect if you ever need to file.',
  alternates: { canonical: '/start-here/newcomer' },
}

const sections = [
  {
    label: 'Understand Your Policy',
    desc: 'Your policy is a contract. The more you understand it, the harder it is for anyone to underpay you.',
    articles: [
      { href: '/resources/how-to-read-your-policy', title: 'How to Read Your Insurance Policy' },
      { href: '/resources/policy-types-overview', title: 'Types of Homeowners Policies (HO-2 Through HO-8)' },
      { href: '/resources/declarations-page', title: 'Your Declarations Page Explained' },
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: How Depreciation Affects Your Payout' },
      { href: '/resources/deductibles-guide', title: 'Understanding Deductibles' },
      { href: '/resources/exclusions', title: 'Policy Exclusions: When They Apply and When They Don\'t' },
    ],
  },
  {
    label: 'Know Your Rights',
    desc: 'California law gives policyholders specific protections. These are the ones that matter most.',
    articles: [
      { href: '/resources/policyholder-rights', title: 'California Policyholder Rights' },
      { href: '/resources/california-fair-claims', title: 'California Fair Claims Regulations' },
      { href: '/resources/duties-after-loss', title: 'Duties After Loss: What Your Policy Requires' },
      { href: '/resources/insurance-delay-tactics', title: 'Delay Tactics and Your Rights' },
    ],
  },
  {
    label: 'What Happens When You File',
    desc: 'A claim doesn\'t have to be overwhelming. Here\'s what to expect at each stage.',
    articles: [
      { href: '/resources/claims-process', title: 'The Insurance Claims Process Step by Step' },
      { href: '/resources/adjuster-types', title: 'Types of Insurance Adjusters' },
      { href: '/resources/dealing-with-adjuster', title: 'Dealing With the Adjuster' },
      { href: '/resources/how-insurance-payments-calculated', title: 'How Your Payment Is Calculated' },
    ],
  },
  {
    label: 'Protect Yourself Before a Loss',
    desc: 'The work you do now — before anything goes wrong — makes recovery dramatically easier.',
    articles: [
      { href: '/resources/contents-inventory-guide', title: 'How to Document a Contents Inventory' },
      { href: '/resources/endorsements-every-homeowner-needs', title: 'Endorsements Every Homeowner Needs' },
      { href: '/resources/when-not-to-file-claim', title: 'When Not to File a Claim' },
      { href: '/resources/surprising-coverages', title: 'Surprising Things Your Policy Covers' },
    ],
  },
]

export default function NewcomerHubPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">New to Insurance Claims</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            You don&apos;t need to memorize your policy. But you should understand the basics
            before something goes wrong — or right after it does. These articles are written
            for people reading about insurance claims for the first time.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Have a Question?</h2>
          <p className="text-gray-600 mb-4">
            If something happens to your property, a free consultation can save you months of confusion.
          </p>
          <Link href="/contact" className="btn-gold">
            Ask a Question — Free &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
