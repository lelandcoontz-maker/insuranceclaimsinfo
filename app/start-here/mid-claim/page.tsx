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
      { href: '/resources/how-to-document-damage', title: 'How to Document Damage for Your Insurance Claim' },
      { href: '/resources/personal-property-inventory-guide', title: 'How to Make a Personal Property (Contents) List After a Loss' },
      { href: '/resources/contents-claims', title: 'Personal Property & Contents Claims' },
      { href: '/resources/commonly-missed-items', title: 'Commonly Missed Items in Contents Claims' },
      { href: '/resources/proof-of-loss', title: 'Proof of Loss: What It Is and When to Sign' },
      { href: '/resources/recording-insurance-inspections', title: 'Recording Insurance Inspections' },
    ],
  },
  {
    label: 'Deal With the Adjuster',
    desc: 'The adjuster works for the insurance company. That doesn\'t mean the process has to be adversarial — but you need to understand the dynamics.',
    articles: [
      { href: '/resources/what-to-say-adjuster-calls', title: 'Your Insurance Company Just Called — What to Say and What Not to Say' },
      { href: '/resources/prepare-for-adjuster-inspection', title: 'The Adjuster Is Coming to My House — How to Prepare' },
      { href: '/resources/dealing-with-adjuster', title: 'Dealing With the Adjuster' },
      { href: '/resources/adjuster-types', title: 'Types of Insurance Adjusters' },
      { href: '/resources/recorded-statements-siu', title: 'Recorded Statements & SIU Investigations' },
    ],
  },
  {
    label: 'Understand What You\'re Being Paid',
    desc: 'Before you can negotiate, you need to understand what the numbers mean.',
    articles: [
      { href: '/resources/how-to-read-xactimate-estimate', title: 'How to Read the Estimate Your Insurance Company Sent You' },
      { href: '/resources/insurance-offer-now-what', title: 'Your Insurance Company Made an Offer — Now What?' },
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV: Understanding Depreciation' },
      { href: '/resources/how-insurance-payments-calculated', title: 'How Your Payment Is Calculated' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
    ],
  },
  {
    label: 'Temporary Housing (ALE)',
    desc: 'If you can\'t live in your home, the insurer owes you Additional Living Expenses.',
    articles: [
      { href: '/resources/ale-basics-what-is-covered', title: 'What "Additional Living Expenses" Covers When You Can\'t Live at Home' },
      { href: '/resources/ale-frv', title: 'Additional Living Expenses & Fair Rental Value' },
      { href: '/resources/loss-of-use-maximizing', title: 'Maximizing Your Loss of Use Benefits' },
    ],
  },
  {
    label: 'Fight Back',
    desc: 'If the offer is wrong, you have options. You don\'t have to accept it.',
    articles: [
      { href: '/resources/lowball-offer-what-to-do', title: 'My Insurance Company Is Lowballing Me — What Can I Do?' },
      { href: '/resources/writing-effective-insurance-letter', title: 'How to Write a Letter to Your Insurance Company That Gets Results' },
      { href: '/resources/negotiation', title: 'Insurance Claim Negotiation Tactics' },
      { href: '/resources/supplemental-claims', title: 'Filing a Supplement' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price: Which Fight Are You In?' },
    ],
  },
  {
    label: 'Escalate When Necessary',
    desc: 'Negotiation didn\'t work. Here\'s what comes next.',
    articles: [
      { href: '/resources/insurer-not-responding', title: 'What to Do When Your Insurance Company Stops Returning Calls' },
      { href: '/resources/claim-denied-options', title: 'My Claim Was Denied — What Are My Options?' },
      { href: '/resources/file-cdi-complaint-guide', title: 'How to File a Complaint With the California Department of Insurance' },
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/bad-faith', title: 'What Is "Bad Faith" and How Do I Know If My Insurer Is Doing It?' },
      { href: '/resources/do-i-need-a-lawyer', title: 'Do I Need a Lawyer for My Insurance Claim?' },
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
        {/* What To Do Right Now */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">What To Do Right Now</h2>
          <p className="text-gray-500 text-sm mb-5">
            Five things every mid-claim policyholder should be doing this week.
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Build the evidence record every day.</strong> Photos of any new damage
              discovered, copies of every adjuster email, contemporaneous notes after every
              phone call. Send yourself a written summary of every phone conversation within 24
              hours so the record exists in time-stamped form.
            </li>
            <li>
              <strong>Read every estimate and letter line-by-line.</strong> Wrong measurements,
              missing rooms, depreciated labor (illegal in California under 10 CCR
              &sect;2695.9(f)(1)), absent overhead and profit, missing code upgrades — every
              line is challengeable. The estimate is the insurer&apos;s opening position, not a
              final number.
            </li>
            <li>
              <strong>Respond to everything in writing.</strong> Phone calls disappear; adjusters
              change; files get reassigned. Email is the minimum. Certified mail for demand
              letters. Under 10 CCR &sect;2695.5(b) the insurer has 15 calendar days to respond
              to your written communications.
            </li>
            <li>
              <strong>Know your deadlines and theirs.</strong> The insurer must accept or deny
              within 40 days of proof of loss and pay within 30 days of acceptance (10 CCR
              &sect;2695.7(b), (h)). On your side: the policy&apos;s suit-limitation period
              (one year for fire under &sect;2071, 24 months for state-of-emergency losses) is
              the deadline that matters most. Mark it on a calendar.
            </li>
            <li>
              <strong>Document insurer behavior.</strong> Missed deadlines, contradictory
              explanations, requests for duplicative documentation, pressure to accept a low
              offer — each is potential bad-faith evidence under Ins. Code &sect;790.03(h). Keep
              a running log. A pattern is what matters.
            </li>
          </ol>
        </section>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Key Concepts You Need to Know</h2>
          <p className="text-gray-500 text-sm mb-5">
            The rules that determine what you are actually owed.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>The 40-day decision rule.</strong> Once the insurer has proof of loss, it
              must accept or deny within 40 calendar days (10 CCR &sect;2695.7(b)). If it needs
              more time, it must say so in writing — and provide a status update every 30 days
              thereafter. Silence is a violation.
            </li>
            <li>
              <strong>The 30-day payment rule.</strong> Upon acceptance of the claim (in whole or
              in part), the insurer must tender payment within 30 calendar days (10 CCR
              &sect;2695.7(h)).
            </li>
            <li>
              <strong>Partial payments do not waive disputed amounts.</strong> Cashing a partial
              check in California does not surrender your right to pursue the rest — but always
              confirm in writing that you are accepting the check as a partial payment, not as
              full settlement. Under California Commercial Code &sect;3311, even a check with
              restrictive endorsement language can be returned within 90 days.
            </li>
            <li>
              <strong>Appraisal resolves dollar disputes.</strong> If the carrier agrees coverage
              applies but disputes the amount, you can invoke appraisal under Ins. Code
              &sect;2071. Binding, faster than litigation, and limited to the amount of loss —
              not coverage questions.
            </li>
            <li>
              <strong>Bad faith is a tort.</strong> In California, when an insurer unreasonably
              delays, denies, or underpays a claim, the violation is a tort, not just a contract
              breach (<em>Gruenberg v. Aetna Ins. Co.</em>, 9 Cal.3d 566 (1973)). That opens the
              door to emotional-distress damages, punitive damages under Civ. Code &sect;3294,
              and attorney&apos;s fees under <em>Brandt v. Superior Court</em>, 37 Cal.3d 813
              (1985).
            </li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Common Mistakes Mid-Claim Policyholders Make</h2>
          <p className="text-gray-500 text-sm mb-5">
            Five errors that are easier to avoid than to fix.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Negotiating by phone only.</strong> Phone calls leave no record. Every
              adjuster commitment that matters needs to be in writing — either confirmed by the
              adjuster or memorialized by you in a follow-up email the same day.
            </li>
            <li>
              <strong>Cashing checks with &ldquo;full and final settlement&rdquo; language
              without responding.</strong> If the cover letter or check stub says full settlement
              and you have open items, write &ldquo;accepted as partial payment only — all
              rights reserved&rdquo; on the check before depositing, and send a written
              confirmation that same day.
            </li>
            <li>
              <strong>Missing the recoverable depreciation deadline.</strong> Ins. Code
              &sect;2051.5(b) gives you at least 12 months from the date of the first ACV
              payment (36 months for state-of-emergency losses) to complete repairs and collect
              the depreciation holdback. Miss it and the money is forfeited.
            </li>
            <li>
              <strong>Accepting the insurer&apos;s preferred contractor without your own
              estimate.</strong> California&apos;s no-specific-contractor rule (10 CCR
              &sect;2695.9(b)) means the insurer cannot require you to use a particular
              contractor. Get your own bid before you sign anyone&apos;s contract.
            </li>
            <li>
              <strong>Failing to invoke the contractor-naming regulation.</strong> When the
              carrier&apos;s estimate is lower than your contractor&apos;s, 10 CCR
              &sect;2695.9(d) requires the insurer to name a contractor who will actually do
              the work for the insurer&apos;s number. Most carriers cannot. Make them try.
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
