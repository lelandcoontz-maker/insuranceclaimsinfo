import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: New to Insurance Claims | InsuranceClaimsInfo.com',
  description: 'New to insurance claims? Start here. Plain-language guides to understanding your policy, your rights, and what to expect if you ever need to file.',
  alternates: { canonical: '/start-here/newcomer' },
}

const sections = [
  {
    label: 'Start Here First (Read These in the Next Hour)',
    desc: 'If you only read four articles, read these.',
    articles: [
      { href: '/resources/first-72-hours-after-loss', title: 'What to Do in the First 72 Hours After a Loss' },
      { href: '/resources/how-california-claim-works', title: 'How a California Homeowner Insurance Claim Actually Works' },
      { href: '/resources/insurance-claim-glossary', title: 'Insurance Claim Glossary: 50 Terms in Plain English' },
      { href: '/resources/insurer-obligations-cheat-sheet', title: 'What Your Insurance Company Is Required to Do — The Cheat Sheet' },
    ],
  },
  {
    label: 'Understand Your Policy',
    desc: 'Your policy is a contract. The more you understand it, the harder it is for anyone to underpay you.',
    articles: [
      { href: '/resources/what-does-homeowner-policy-cover', title: 'What Does My Homeowner Policy Actually Cover?' },
      { href: '/resources/understanding-your-deductible', title: 'Your Deductible: What It Is, How It Works, and When It Doesn\'t Apply' },
      { href: '/resources/replacement-cost-explained', title: 'What "Replacement Cost" Means and Why It Matters More Than You Think' },
      { href: '/resources/open-perils-vs-named-perils', title: 'Named Perils vs. Open Perils: Why Your Contents Aren\'t Covered the Same as Your House' },
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: Actual Cash Value vs. Replacement Cost Value' },
      { href: '/resources/policyholder-rights', title: 'Your Rights as a California Policyholder' },
    ],
  },
  {
    label: 'What Happens When You File',
    desc: 'A claim doesn\'t have to be overwhelming. Here\'s what to expect at each stage.',
    articles: [
      { href: '/resources/first-week-of-claim', title: 'What to Expect in the First Week of Your Claim' },
      { href: '/resources/what-to-say-adjuster-calls', title: 'Your Insurance Company Just Called — What to Say and What Not to Say' },
      { href: '/resources/prepare-for-adjuster-inspection', title: 'The Adjuster Is Coming to My House — How to Prepare' },
      { href: '/resources/how-to-document-damage', title: 'How to Document Damage for Your Insurance Claim' },
      { href: '/resources/what-public-adjuster-does', title: 'What a Public Adjuster Does — And When You Might Want One' },
    ],
  },
  {
    label: 'Before You Need It',
    desc: 'The work you do now — before anything goes wrong — makes recovery dramatically easier.',
    articles: [
      { href: '/resources/ten-things-before-a-loss', title: '10 Things Every California Homeowner Should Know Before a Loss' },
      { href: '/resources/should-i-file-a-claim', title: 'Should I File a Claim? How to Decide' },
      { href: '/resources/annual-policy-review', title: 'How to Review Your Insurance Policy Before You Need It' },
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
        {/* What To Do Right Now */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">What To Do Right Now</h2>
          <p className="text-gray-500 text-sm mb-5">
            Whether you just had a loss or you&apos;re preparing for the worst, do these in order.
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Stop the damage from getting worse.</strong> Shut off the water, tarp the
              hole, board up the broken window. Your policy requires reasonable mitigation.
              Anything you reasonably spend on emergency steps is generally reimbursable up to
              policy limits; anything you let get worse may not be covered at all.
            </li>
            <li>
              <strong>Photograph and video everything before any cleanup.</strong> Wide shots for
              location, close-ups for severity. The evidence you capture in the first hours
              defeats every later argument that damage was pre-existing, exaggerated, or
              invented.
            </li>
            <li>
              <strong>Notify your insurer in writing.</strong> A phone call alone leaves no
              record. Email or a written claim form starts a 15-calendar-day clock under
              California regulations (10 CCR &sect;2695.5(e)) — the insurer must acknowledge the
              claim and begin investigating within that window.
            </li>
            <li>
              <strong>Start a claim file today.</strong> One folder (paper or digital) for every
              photo, email, receipt, and note. Date every entry. From now until the claim closes,
              every conversation that matters gets confirmed in writing.
            </li>
          </ol>
        </section>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Key Concepts You Will Need to Know</h2>
          <p className="text-gray-500 text-sm mb-5">
            Six terms and rules that the rest of the process turns on.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Your policy is a contract.</strong> The insurer owes you what the contract
              promises — not what they want to pay, not what they think you deserve. Read it,
              especially the declarations page.
            </li>
            <li>
              <strong>Your deductible is per occurrence.</strong> One storm that damages your
              roof, siding, and fence is one occurrence with one deductible. You do not pay it
              three times.
            </li>
            <li>
              <strong>ACV vs. RCV.</strong> Actual Cash Value is replacement cost minus
              depreciation. Replacement Cost Value is what it actually costs to repair or
              replace today. If you have replacement-cost coverage (most California homeowners
              do), the insurer pays ACV first, then the depreciation holdback after you complete
              repairs.
            </li>
            <li>
              <strong>ALE (Coverage D).</strong> If your home is uninhabitable, the insurer owes
              Additional Living Expenses — temporary housing, increased food costs, storage, pet
              boarding. After a state-of-emergency loss in California, Ins. Code &sect;2060(b)
              sets a minimum of 24 months of ALE.
            </li>
            <li>
              <strong>The 15-day rule.</strong> California insurers must acknowledge a claim
              within 15 calendar days and respond to your written communications within 15 days
              (10 CCR &sect;2695.5). Every missed deadline is documented evidence of a
              regulatory violation.
            </li>
            <li>
              <strong>A Public Adjuster works for you, not the insurer.</strong> Licensed
              professional who represents the policyholder on contingency from the recovery.
              Insurance Code &sect;15027 governs the contract form. There is no statutory fee
              cap; common practice is 10% in catastrophe contexts.
            </li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Common Mistakes First-Time Claimants Make</h2>
          <p className="text-gray-500 text-sm mb-5">
            Each of these costs real money. Each is avoidable.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Giving a recorded statement on the spot.</strong> You are generally
              required to cooperate, but you are not required to do it the moment they ask.
              Schedule it for two or three days out so you can review your policy and organize
              your thoughts.
            </li>
            <li>
              <strong>Cleaning up before you document.</strong> Photographs of a clean room do
              not prove what was there. The insurer&apos;s right to inspect is real; throwing
              damaged items away before they are photographed is the most common documentation
              mistake.
            </li>
            <li>
              <strong>Speculating about the cause of loss.</strong> &ldquo;I think the pipe was
              old&rdquo; or &ldquo;the roof was probably worn out&rdquo; hands the insurer
              arguments for excluded perils or pre-existing damage. If you do not know, say you
              do not know.
            </li>
            <li>
              <strong>Accepting the first offer.</strong> Studies and industry data consistently
              show that policyholders who challenge the first offer recover more. The first
              number is the insurer&apos;s opening position, not the final word.
            </li>
            <li>
              <strong>Signing a release before the claim is finished.</strong> The
              carrier&apos;s payment for an undisputed amount is not the same thing as a
              settlement of the whole claim. If the document says &ldquo;full and final
              settlement&rdquo; and there are still open items, do not sign it.
            </li>
          </ul>
        </section>

        {/* Curated Reading Path */}
        <h2 className="text-2xl font-bold text-[#1F3964] mb-6">Read Next</h2>
        <div className="space-y-12">
          {sections.map(section => (
            <div key={section.label}>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{section.label}</h3>
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-4">
            Insurance claims are confusing on purpose. A short conversation with a licensed
            Public Adjuster can save you weeks of uncertainty — and there is no charge for the
            consultation.
          </p>
          <Link href="/contact" className="btn-gold">
            Talk to a Public Adjuster — Free &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
