import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Recoverable Depreciation Deadline: How Carrier Delays Can Cost You Thousands',
  description:
    'Your policy gives you a limited time to recover withheld depreciation — but when the insurance company causes the delays that eat up that window, you should not lose the money. How the deadline works, what triggers it, and how to protect yourself.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Recoverable Depreciation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your policy provides{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          replacement cost value (RCV)
        </Link>{' '}
        coverage, the insurer typically makes an initial payment at actual cash value (ACV) &mdash;
        the replacement cost minus depreciation. The difference between ACV and full replacement cost
        is the &ldquo;recoverable depreciation&rdquo; or &ldquo;holdback.&rdquo; You get this money
        back when you complete repairs or replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But there is a catch: your policy contains a deadline to recover that depreciation. If you
        do not complete repairs within the specified time, you forfeit the holdback &mdash; potentially
        tens of thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Deadline Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The typical policy language requires you to &ldquo;actually repair or replace the damaged
        property&rdquo; within a specified period after the loss. Common timeframes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>180 days</strong> (6 months) &mdash; common in many standard HO-3 policies</li>
        <li><strong>12 months</strong> &mdash; some policies and some California-specific forms</li>
        <li><strong>24 months</strong> &mdash; required by California Insurance Code &sect;2051.5 for
          declared disasters (extended from the shorter periods in the base policy)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The clock typically starts from the &ldquo;date of loss&rdquo; or the date of the insurer&apos;s
        initial payment &mdash; check your specific policy language. Some policies start from the date
        of actual cash value payment; others from the date of loss itself.
      </p>

      <CalloutBox variant="warning" title="180 Days Is Not Enough for Many Claims">
        <p>
          Six months sounds like a long time until you account for reality: the adjuster takes 30-60
          days to inspect and write an estimate. Scope disputes take another 30-60 days. Permit
          applications take 2-6 weeks. Contractor scheduling adds more weeks. Custom materials
          (cabinets, specialty flooring, countertops) have lead times of 6-12 weeks. By the time you
          can actually begin meaningful construction, the 180-day window may already be closing.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Trap: Carrier Delays Consume Your Window
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the scenario that plays out on thousands of claims:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Month 1:</strong> You report the loss. The carrier assigns an adjuster who
          schedules an inspection for two weeks out.
        </li>
        <li>
          <strong>Month 2:</strong> The adjuster inspects and writes an initial estimate. You
          disagree with the scope. Your contractor writes a competing estimate.
        </li>
        <li>
          <strong>Month 3:</strong> Back and forth on scope. The carrier sends their preferred
          contractor for a second opinion. The preferred contractor tries to match existing
          materials and fails.
        </li>
        <li>
          <strong>Month 4:</strong> The carrier&apos;s vendor admits matching is impossible.
          Now you are debating whether the scope should expand to include adjacent areas.
          Meanwhile, no construction has started.
        </li>
        <li>
          <strong>Month 5:</strong> You finally reach agreement on scope. The contractor orders
          materials with a 6-week lead time. The 180-day deadline is approaching.
        </li>
        <li>
          <strong>Month 6:</strong> Materials arrive. Construction begins. The deadline expires
          before the job is finished. The carrier says you forfeited the holdback.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this scenario, the policyholder did nothing wrong. Every delay was caused by the carrier&apos;s
        investigation, their vendor&apos;s failed attempts, and the scope dispute the carrier created.
        Yet the policyholder is the one who loses money.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Carrier Has No Incentive to Resolve This Quickly
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about the carrier&apos;s position: every day they delay is a day closer to the
        depreciation deadline expiring. If the policyholder cannot complete repairs in time, the
        carrier keeps the holdback &mdash; money they already set aside as a reserve but never have
        to pay. Delay is profitable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a perverse incentive structure. The carrier benefits from:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Slow initial response times</li>
        <li>Multiple inspections and re-inspections</li>
        <li>Prolonged scope disputes</li>
        <li>Preferred vendor attempts that fail (consuming months)</li>
        <li>Requiring additional documentation before authorizing scope changes</li>
        <li>Changing adjusters mid-claim (the new adjuster needs time to get up to speed)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these is individually defensible as part of the &ldquo;investigation.&rdquo;
        Collectively, they run the clock until the policyholder&apos;s deadline expires.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Defenses
      </h2>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        1. Request an Extension in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As soon as you see the deadline approaching and construction is not complete, request an
        extension in writing. Explain specifically why the delay occurred and that it was not your
        fault:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-gray-300 pl-4">
        &ldquo;I am requesting an extension of the recoverable depreciation deadline. Construction
        has not begun because [your vendor spent 8 weeks attempting to match materials and failed /
        the scope dispute was not resolved until Month 4 / the adjuster was replaced mid-claim].
        None of these delays were caused by me. Per your own records, I have cooperated with every
        request. Please confirm in writing that the deadline is extended by [X days/months].&rdquo;
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        2. The Prejudice Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the insurer generally cannot enforce a policy deadline against you
        unless your failure to meet it actually prejudiced the insurer. If you are actively pursuing
        repairs and the only reason for missing the deadline is the carrier&apos;s own delays, the
        carrier suffers no prejudice from extending the window. This is the same{' '}
        <Link href="/resources/duties-after-loss" className="text-blue-700 underline hover:text-blue-900">
          prejudice requirement
        </Link>{' '}
        that applies to other policy conditions.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        3. Equitable Estoppel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&apos;s own conduct caused the delay &mdash; their vendor took months to
        determine a match was impossible, their adjuster was unresponsive, their scope dispute
        prevented construction from starting &mdash; the carrier may be equitably estopped from
        enforcing the deadline. You cannot cause the delay and then benefit from it.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        4. Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier that deliberately delays resolution of a claim until the depreciation window expires
        may be engaging in{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>. Document the timeline meticulously. A pattern of delays with no reasonable basis,
        combined with the carrier&apos;s financial incentive to let the deadline lapse, supports
        a bad faith theory.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        5. Declared Disaster Protections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For losses in declared disasters, California Insurance Code &sect;2051.5(b) provides at
        least 24 months to collect recoverable depreciation, and the deadline can be extended if
        circumstances beyond the policyholder&apos;s control prevent timely completion. The statute
        requires insurers to provide the extension upon showing of good cause.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps to Protect Yourself
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Identify the deadline immediately.</strong> As soon as you receive your ACV payment,
          calculate the depreciation recovery deadline. Put it on your calendar with 60-day and 30-day
          advance warnings.
        </li>
        <li>
          <strong>Document every carrier-caused delay.</strong> Keep a timeline showing each date you
          submitted something, each date the carrier responded (or failed to respond), and each delay
          caused by their process. This becomes your evidence.
        </li>
        <li>
          <strong>Request the extension before the deadline passes.</strong> Do not wait until the
          deadline expires. Request the extension as soon as you can see the deadline approaching with
          construction incomplete.
        </li>
        <li>
          <strong>Begin repairs on undisputed portions.</strong> If part of the scope is agreed upon,
          begin those repairs while the disputed portions are being resolved. This demonstrates your
          intent to complete and starts generating invoices that show incurred costs.
        </li>
        <li>
          <strong>Consider filing a partial proof of claim.</strong> Submit paid invoices for completed
          work to recover depreciation on those portions immediately &mdash; even if the overall
          project is not finished.
        </li>
        <li>
          <strong>Send a 790 letter if the carrier won&apos;t extend.</strong> If the carrier refuses
          an extension despite their own delays causing the problem, a{' '}
          <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
            790 letter
          </Link>{' '}
          puts them on notice that you consider their conduct a violation of the unfair claims
          practices statute.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Recoverable Depreciation Can Be Claimed in Stages">
        <p>
          You do not need to wait until the entire project is complete to submit for recoverable
          depreciation. As sections of work are finished and paid, submit those invoices to recover
          the depreciation on that portion. This is especially important when the deadline is
          approaching &mdash; recovering depreciation on completed work protects that money even
          if the overall project continues past the deadline.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Interaction with ALE
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The recoverable depreciation deadline and ALE duration are connected. If the carrier advances
        only limited ALE based on an unrealistic construction timeline, the policyholder may be forced
        to rush construction to get back in the home before ALE runs out. Rushed construction means
        cutting corners &mdash; accepting materials that don&apos;t match, skipping permit processes,
        or leaving work incomplete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Alternatively, if the policyholder pushes for proper construction (correct materials, permits,
        code-compliant work), the project takes longer, and both the ALE and the depreciation deadline
        become pressure points. The carrier benefits from both constraints simultaneously &mdash;
        using time pressure to force the policyholder into accepting less than full restoration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        See our{' '}
        <Link href="/resources/ale-advance-payments" className="text-blue-700 underline hover:text-blue-900">
          ALE advance payments article
        </Link>{' '}
        for strategies on securing adequate temporary housing for the actual construction period.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article addresses a common claim scenario based on real cases. Recoverable depreciation
        deadlines vary by policy and may be modified by California statute for declared disasters.
        This is educational information and does not constitute legal advice. For advice on your
        specific deadline, consult a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or attorney.
      </p>
    </>
  )
}
