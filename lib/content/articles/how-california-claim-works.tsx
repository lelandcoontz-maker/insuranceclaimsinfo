import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How a California Homeowner Insurance Claim Actually Works',
  description:
    'An honest, no-jargon walkthrough of what really happens from the moment you call your insurer through the final payment — including what they don\'t tell you.',
  summary:
    'A California claim runs from your first report through adjuster inspection, investigation, and payment, usually paid first at actual cash value with depreciation released after repairs are completed. The insurer controls the pace unless you push it forward.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You pay your insurance premium every year. Something damages your home. You call the
        insurance company. They send someone. You get a check. Simple.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Except it is not simple. The process has stages, each with its own rules, timelines,
        and potential problems. Understanding the real process — not the brochure version —
        is the difference between getting paid fairly and leaving money on the table.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 1: You Report the Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You call your insurance company or file online. This is called First Notice of Loss
        (FNOL). You get a claim number. The insurer assigns an adjuster.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> From this moment, a clock starts.
        The insurer has 15 days to acknowledge your claim in writing and begin investigating.
        If they miss that deadline, they are already violating California regulations. Most
        people do not know this — so most people do not notice when it happens.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 2: The Adjuster Investigates
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An adjuster — working for the insurance company — comes to your property to inspect
        the damage. They photograph it, measure it, and write an estimate of what it will
        cost to repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> The adjuster is trained to assess
        the minimum scope of repair that addresses the damage. They will not look for damage
        you do not show them. They will not suggest upgrading something unless the code
        requires it. They will not remind you about your contents claim, your ALE, or your
        right to Overhead &amp; Profit. Their job is to process the claim, not to maximize
        your recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 3: The Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster writes an estimate — usually in Xactimate software — and sends it to
        you with a payment. This estimate lists every repair item, its quantity, and its
        price.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> This estimate is the insurer&apos;s
        opening position, not the final word. It is almost always lower than what the repairs
        will actually cost. Items are missed. Scope is too narrow. Pricing may use outdated
        rates. Depreciation may be excessive. You have the right to challenge every line item
        and submit your own estimate. See{' '}
        <Link href="/resources/how-to-read-xactimate-estimate" className="text-[#1F3964] underline font-medium">
          How to Read Your Estimate
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 4: The First Payment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost policy (most California homeowners do), the insurer
        pays in two steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>ACV payment</strong> — the full repair cost minus depreciation. This is
          your &ldquo;first check.&rdquo; The insurer withholds the depreciation amount.
        </li>
        <li>
          <strong>Depreciation holdback</strong> — after you complete repairs, the insurer
          releases the withheld depreciation. You get the full replacement cost only after
          the work is done.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> The deductible comes off the first
        payment. So if the repair estimate is $25,000, depreciation is $5,000, and your
        deductible is $2,500, your first check is $17,500 ($25,000 – $5,000 – $2,500). Many
        people see that number and think they have been shortchanged — because no one
        explained the math. See{' '}
        <Link href="/resources/acv-rcv" className="text-[#1F3964] underline font-medium">
          ACV vs. RCV: Understanding Depreciation
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 5: Repairs and Supplements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You hire a contractor and begin repairs. Almost always, additional damage is
        discovered once walls are opened, flooring is pulled, or equipment is accessed. This
        additional damage requires a &ldquo;supplement&rdquo; — an addition to the original
        estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> Supplements are normal. They are not
        a sign of a bad initial estimate — they are a standard part of how insurance repairs
        work. Your contractor (or your Public Adjuster) submits the supplement to the
        insurer, who sends another adjuster or desk-reviews the additional scope. This
        can add weeks to the timeline.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 6: The Depreciation Recovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After repairs are complete, you submit documentation (final invoices, photos of
        completed work) to the insurer. They release the depreciation holdback. Now you have
        received the full replacement cost value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> You have a deadline to complete
        repairs and claim the holdback. The timeline varies by policy — it may be 180 days,
        365 days, or another period from the date of loss or date of payment. Read your
        policy&apos;s Loss Settlement provisions to find your deadline. Miss it and you
        forfeit the holdback permanently.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 7: Negotiation (If Needed)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer&apos;s estimate is too low and supplements are not resolving the
        gap, you enter negotiation. This is where you (or your{' '}
        <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
          Public Adjuster
        </Link>) submit your own estimate, contractor bids, and documentation to prove
        the actual cost of repair exceeds what the insurer is offering.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What they don&apos;t tell you:</strong> The insurer&apos;s first offer is
        designed to be accepted. If you negotiate, they will negotiate back. Claims that
        are challenged almost always settle for more than the initial offer. See{' '}
        <Link href="/resources/negotiation" className="text-[#1F3964] underline font-medium">
          Negotiation Tactics
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stage 8: Escalation (If Needed)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If negotiation fails, you have options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">Appraisal</Link>{' '}
          — a neutral process to resolve dollar disputes. Binding on both parties.
        </li>
        <li>
          <Link href="/resources/cdi-complaint" className="text-[#1F3964] underline font-medium">CDI complaint</Link>{' '}
          — report regulatory violations to the California Department of Insurance.
        </li>
        <li>
          <Link href="/resources/when-to-hire-attorney" className="text-[#1F3964] underline font-medium">Attorney</Link>{' '}
          — for coverage denials and bad faith.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Parallel Tracks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A property claim is not one thing — it is typically three parallel claims moving at
        different speeds:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Dwelling claim (Coverage A)</strong> — the structural repair. Usually the
          largest dollar amount and the most complex.
        </li>
        <li>
          <strong>Contents claim (Coverage C)</strong> — your personal property. Requires a
          separate inventory, separate documentation, separate negotiation.
        </li>
        <li>
          <strong>ALE claim (Coverage D)</strong> — your living expenses while displaced.
          Ongoing throughout the repair period.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer may try to close one track early while the others are still open. They
        may try to apply pressure on the dwelling claim by cutting your ALE. Each coverage
        is separate and must be handled on its own merits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Long It Takes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be realistic:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Small, simple claims (broken window, small water loss): 2-6 weeks.</li>
        <li>Moderate claims (kitchen fire, roof damage): 2-6 months.</li>
        <li>Large claims (total loss, extensive fire, full-home water): 6-18 months.</li>
        <li>Disputed claims that go to appraisal: add 3-6 months.</li>
        <li>Claims that go to litigation: 1-3 years.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        The insurance company benefits from delay. You benefit from resolution. That
        asymmetry is why being organized, persistent, and informed from day one matters
        more than anything else you can do.
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
