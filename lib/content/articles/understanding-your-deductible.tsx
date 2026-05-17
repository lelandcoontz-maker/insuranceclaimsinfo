import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Your Deductible: What It Is, How It Works, and When It Doesn\'t Apply',
  description:
    'A clear explanation of how insurance deductibles work — flat vs. percentage, hurricane deductibles, how they apply to replacement cost claims, and when the insurer must waive them.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your deductible is the amount you pay out of pocket before your insurance kicks in. It is
        the most basic concept in your policy, and it is also one of the most misunderstood. People
        think it works like a car insurance deductible &mdash; pay $1,000, insurer pays the rest.
        That is roughly correct, but the details matter, especially when large losses, percentage
        deductibles, and replacement cost claims enter the picture.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Flat Deductible Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A flat deductible is a fixed dollar amount &mdash; $1,000, $2,500, $5,000 &mdash; that you
        are responsible for on each covered loss. If your roof suffers $15,000 in hail damage and
        your deductible is $2,500, the insurer owes $12,500.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The deductible applies per occurrence, not per coverage or per item. One storm that damages
        your roof, siding, and fence is one occurrence with one deductible. You do not pay $2,500
        three times.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your deductible amount is printed on your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. Look at it now, before you need it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Percentage Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies use percentage deductibles for certain perils, most commonly wind, hurricane,
        or earthquake. A percentage deductible is calculated as a percentage of your Coverage A
        dwelling limit &mdash; not a percentage of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is enormous. If your home is insured for $600,000 and you have a 2 percent
        wind deductible, your deductible for any wind loss is $12,000 &mdash; regardless of whether
        the damage is $15,000 or $150,000. On a 5 percent deductible, that number jumps to $30,000.
        Many homeowners do not realize how large their percentage deductible is until they file a
        claim.
      </p>

      <CalloutBox variant="warning" title="Hurricane and Wind Deductibles Can Be Devastating">
        <p>
          In coastal and hurricane-prone states, percentage deductibles of 2 to 5 percent are
          common for wind and hurricane losses. On a $500,000 home, a 5 percent hurricane
          deductible means you pay the first $25,000 out of pocket. For moderate storm damage,
          this can consume the entire claim, leaving you with nothing from the insurer. Know your
          percentage deductible before a storm hits.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Per Occurrence&rdquo; Rule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An occurrence is a single event or series of related events that causes damage. One
        windstorm is one occurrence. One kitchen fire is one occurrence. You pay one deductible per
        occurrence, no matter how many parts of your home are damaged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But here is where it gets complicated: if two separate, unrelated events happen close
        together &mdash; say a windstorm damages your roof on Monday and a pipe bursts on
        Wednesday &mdash; those are two separate occurrences with two separate deductibles. The
        timing does not matter. What matters is whether the damage stems from one event or two
        independent events.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers sometimes try to split a single event into multiple occurrences to apply multiple
        deductibles. If a storm causes wind damage and rain intrusion, that is one occurrence. The
        rain came in because of the wind damage. Do not accept multiple deductibles for what is
        clearly one event.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Deductible Applies to Replacement Cost Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          replacement cost policy
        </Link>, the insurer pays your claim in two steps: first the actual cash value (ACV), then
        the recoverable depreciation (the &ldquo;holdback&rdquo;) after you complete repairs. Your
        deductible comes out of the first payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a concrete example. Say your roof sustains $30,000 in damage (replacement cost).
        The insurer calculates $8,000 in depreciation. Your deductible is $2,500.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>First payment (ACV):</strong> $30,000 (RCV) minus $8,000 (depreciation) minus
          $2,500 (deductible) = $19,500
        </li>
        <li>
          <strong>Second payment (holdback):</strong> After you complete repairs, you receive the
          $8,000 in recoverable depreciation. The deductible is not applied again.
        </li>
        <li>
          <strong>Total received:</strong> $27,500 ($30,000 minus your $2,500 deductible)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The deductible is applied once. It comes off the first check. You never pay it again on
        the same claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Multiple Deductibles Apply to a Single Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies have separate deductibles for different perils. You might have a $2,500 all-
        perils deductible and a separate 2 percent wind/hail deductible. If a storm causes both
        wind damage and water intrusion from the broken roof, the question becomes: which
        deductible applies?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Generally, the peril-specific deductible applies to damage caused by that peril. If wind
        blows off your shingles and rain enters through the opening, the wind deductible should
        apply to the entire claim because wind was the proximate cause. The rain did not enter on
        its own &mdash; it entered because of the wind damage. Insurers sometimes try to apply the
        higher percentage deductible to the wind damage and the flat deductible separately to the
        interior water damage. Push back on this. One event, one deductible.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Waives the Deductible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are a few situations where a deductible may be waived:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Third-party liability:</strong> If someone else caused the damage and the insurer
          plans to subrogate (recover from the responsible party), some insurers will waive or
          refund the deductible after successful recovery.
        </li>
        <li>
          <strong>Declared disasters:</strong> After some declared disasters, insurers may waive
          deductibles as a goodwill measure or because state regulators require it.
        </li>
        <li>
          <strong>Large losses:</strong> On a total loss where the claim exceeds your policy
          limits, the deductible becomes irrelevant because you are already capped at the policy
          limit. The insurer pays the full limit regardless.
        </li>
        <li>
          <strong>Endorsement provisions:</strong> Some policies include deductible-waiver
          endorsements for specific situations, such as a complete roof replacement or a loss
          exceeding a certain dollar threshold.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Deductible Is Not a Reason to Avoid Filing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some people avoid filing claims because the damage seems close to the deductible. This can
        be a mistake. What looks like $3,000 in damage often turns out to be $10,000 or more once
        a professional inspects it. Hidden damage behind walls, secondary moisture damage, and code
        upgrade requirements can dramatically increase the scope of a loss. You paid premiums for
        this coverage. If there is damage, report it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, there are legitimate reasons to think carefully about whether to file. For
        guidance on weighing that decision, see our article on{' '}
        <Link href="/resources/should-i-file-a-claim" className="text-blue-700 underline hover:text-blue-900">
          whether you should file a claim
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Choosing Your Deductible Amount
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Higher deductibles mean lower premiums. Lower deductibles mean higher premiums. The
        tradeoff is straightforward. But there is a practical question most people do not ask: can
        you actually afford your deductible if a loss happens tomorrow? If your deductible is
        $5,000 and you do not have $5,000 readily available, you may struggle to begin repairs
        while waiting for the insurer to process your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ideal deductible is the highest amount you can comfortably pay out of pocket without
        financial hardship. That gives you the lowest premium without creating a cash crunch when
        you need to use the policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your deductible applies once per occurrence, not per item or per coverage.</li>
        <li>
          Percentage deductibles are calculated against your dwelling limit, not the loss amount.
          They can be far larger than you expect.
        </li>
        <li>
          On replacement cost claims, the deductible comes off the first payment only. You do not
          pay it again when you collect the holdback.
        </li>
        <li>
          One event = one deductible. Do not accept multiple deductibles for related damage from a
          single storm or incident.
        </li>
        <li>
          Know your deductible amount now. It is on your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>.
        </li>
      </ul>
    </>
  )
}
