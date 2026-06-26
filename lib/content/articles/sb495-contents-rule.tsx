import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'SB 495: California\'s New Contents and Proof-of-Loss Rules After Declared Disasters',
  description:
    'How SB 495 changes residential personal-property claims after declared emergencies: a 60% / $350,000 automatic contents advance under Ins. Code §10103.7 and a separate 100-day proof-of-loss extension under §2051.5(b)(3)(A).',
  summary:
    'SB 495 (Stats. 2025, ch. 542) added two distinct protections for residential policyholders after a declared emergency: a 60% / $350,000 automatic contents advance under Ins. Code §10103.7(b)(1), and a separate 100-day minimum on when an insurer may require proof of loss under §2051.5(b)(3)(A).',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California Senate Bill 495 (Stats. 2025,
          ch. 542) and the related amendments to Insurance Code §§ 10103.7 and 2051.5. It is
          not legal advice. For specific questions about whether SB 495 applies to a claim,
          consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Senate Bill 495 (SB 495), chaptered as Stats. 2025, ch. 542, made two
        distinct changes to residential property claim handling after a declared state of
        emergency. The two changes live in different statutes and do different things, but
        they are often described together because both apply to the same population of
        disaster claimants. They are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The contents advance &mdash; Ins. Code &sect; 10103.7(b)(1).</strong> When
          a total loss occurs during a state-declared emergency, the insurer must offer an
          advance payment of at least 60% of the personal property coverage limit, capped at
          $350,000, without requiring an itemized claim. This replaces the prior 30% /
          $250,000 floor.
        </li>
        <li>
          <strong>The 100-day proof-of-loss minimum &mdash; Ins. Code &sect; 2051.5(b)(3)(A).</strong>
          For losses related to a state of emergency as defined by Gov. Code &sect; 8558,
          the insurer cannot require the insured to provide proof of loss less than 100 days
          after the loss.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These two protections are independent. The 60% advance is not gated by the 100-day
        rule, and the 100-day proof-of-loss minimum is not limited to total losses.
      </p>

      <CalloutBox variant="info" title="Effective dates">
        <p>
          SB 495&apos;s amendments to &sect; 10103.7 and &sect; 2051.5 took effect on January 1,
          2026 as part of the regular legislative cycle. &sect; 10103.7(c) additionally provides
          that <em>&ldquo;On and after July 1, 2026, all policy forms issued or renewed by an
          insurer shall comply with this section in its entirety.&rdquo;</em> Claims arising
          between January 1, 2026 and July 1, 2026 on policies that have not yet been renewed
          under the new form may sit in a transition window; consult an attorney for the
          specifics in any particular claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 60% Contents Advance &mdash; &sect; 10103.7(b)(1)
      </h2>

      <CalloutBox variant="legal" title="Ins. Code § 10103.7(b)(1) (as amended by SB 495)">
        <p className="italic">
          [The insurer] shall offer a payment under the contents (personal property) coverage
          in an amount no less than 60 percent of the policy limit applicable to the personal
          property covered under the policy, up to a maximum of three hundred fifty thousand
          dollars ($350,000).
        </p>
      </CalloutBox>

      <CalloutBox variant="info" title="Plain English (general interpretation)">
        <p>
          Many policyholder attorneys read this provision to mean that, when an insured
          suffers a total loss in a state-declared emergency, the insurer must put a
          substantial sum into the insured&apos;s hands without first demanding a room-by-room
          inventory. The statute sets a floor, not a ceiling &mdash; an insurer remains free
          to advance more than 60%. For how the provision applies to a specific claim, an
          insured should consult an attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Mechanically, the advance works as follows:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It applies to total losses</strong> on residential property during a state-declared
          emergency.
        </li>
        <li>
          <strong>The floor is 60% of the personal property coverage limit.</strong> For a
          policy with $200,000 in personal property coverage, that is at least $120,000.
        </li>
        <li>
          <strong>The cap is $350,000.</strong> Above that, the advance does not scale further.
        </li>
        <li>
          <strong>No itemized claim is required to trigger the advance.</strong> The detailed
          inventory work happens later, against the full coverage limit; the advance is paid
          without that initial showing.
        </li>
        <li>
          <strong>The advance is not a bonus.</strong> It is an advance against the personal
          property coverage limit. If documented losses come in higher than the advance, the
          insured may pursue the remainder up to the policy limit.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Compared with the prior version of &sect; 10103.7, which set the floor at 30% of the
        personal property limit with a $250,000 cap, the SB 495 amendment roughly doubles the
        amount of immediate cash relief available to an insured after a total loss in a
        declared emergency.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 100-Day Proof-of-Loss Minimum &mdash; &sect; 2051.5(b)(3)(A)
      </h2>

      <CalloutBox variant="legal" title="Ins. Code § 2051.5(b)(3)(A) (as amended by SB 495)">
        <p className="italic">
          In the event of a loss relating to a state of emergency, as defined in Section 8558
          of the Government Code, an insurer shall not require the insured to provide proof
          of loss less than 100 days after the loss.
        </p>
      </CalloutBox>

      <CalloutBox variant="info" title="Plain English (general interpretation)">
        <p>
          Many policyholder attorneys read this provision to mean that, when a loss arises
          out of a declared state of emergency, the insurer is barred from demanding a sworn
          proof of loss in the first 100 days. This is a procedural protection that buys
          stabilization time. It is separate from the &sect; 10103.7(b)(1) contents advance
          and is not limited to total losses.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two clarifications matter:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>This is about proof of loss, not inventory generally.</strong> The 100-day
          rule is a floor on when a sworn proof of loss can be required &mdash; it is not a
          general &ldquo;no documentation needed for 100 days&rdquo; rule. The 60% contents
          advance under &sect; 10103.7(b)(1) is what eliminates the inventory threshold for
          the advance itself.
        </li>
        <li>
          <strong>The statute also provides for extensions.</strong> Section 2051.5(b)(3)(B)
          requires the insurer to grant additional time, in three-month increments, when an
          insured acting in good faith with reasonable diligence is delayed by circumstances
          outside their control (carrier delays, unavailable contractors, hazardous access,
          disability, and similar factors). The 100-day floor is the starting point, not the
          ceiling.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Distinction Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The two provisions are sometimes described as one rule (&ldquo;the 60% / 100-day
        rule&rdquo;), but they sit in different code sections and serve different functions.
        Conflating them creates two avoidable problems for an insured:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It can suggest the 60% advance has a 100-day expiration.</strong> It does
          not. The advance under &sect; 10103.7(b)(1) is not time-limited in that way; the
          carrier&apos;s duty to offer it does not turn on the proof-of-loss clock.
        </li>
        <li>
          <strong>It can suggest the 100-day proof-of-loss minimum only applies to total
          losses.</strong> It does not. Section 2051.5(b)(3)(A) applies to losses relating
          to a state of emergency under Gov. Code &sect; 8558, regardless of whether the
          loss is total or partial.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scope &mdash; Who the Statutes Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both statutes sit in the Insurance Code chapter governing residential property
        insurance. As a general matter:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The &sect; 10103.7 contents advance</strong> applies to total losses on
          residential property during a state-declared emergency. The Dwelling and Other
          Structures coverages have a separate combined-payment mechanism elsewhere in the
          same statute.
        </li>
        <li>
          <strong>The &sect; 2051.5(b)(3)(A) 100-day proof-of-loss minimum</strong> applies to
          losses arising out of a declared state of emergency under Gov. Code &sect; 8558,
          and is not restricted to total losses.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For non-emergency losses, the standard contents claim process under the policy still
        applies. An insured working through a partial or non-emergency contents loss may find
        the broader <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">contents claims guide</Link>{' '}
        and the <Link href="/inventory" className="text-[#2E74B5] hover:underline">inventory tool</Link>{' '}
        helpful starting points.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Notes for Policyholders
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Asking for the advance in writing is common practice.</strong> Many
          policyholders request the &sect; 10103.7(b)(1) advance in a short letter citing the
          statute, rather than waiting for the carrier to offer it.
        </li>
        <li>
          <strong>The advance is an advance, not a gift.</strong> It counts against the
          personal property coverage limit. The remainder of the limit is reached the usual
          way &mdash; through documentation of the actual loss.
        </li>
        <li>
          <strong>Inventory work still pays.</strong> Once the advance is paid, the path to
          the rest of the personal property limit runs through documentation. Households
          frequently underestimate the replacement value of their personal property; a
          thorough inventory, organized by room or category, tends to surface items that a
          quick-pass list misses.
        </li>
        <li>
          <strong>The 100-day proof-of-loss minimum is a floor.</strong> An insured who needs
          more time can ask for an extension under &sect; 2051.5(b)(3)(B); the statute
          requires the insurer to grant three-month extensions where the insured is acting
          in good faith but is delayed by circumstances outside their control.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With a Contents Claim After a Declared Disaster?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed public adjuster can review a personal property claim, identify
          underpaid items, and work through SB 495&apos;s contents-advance and
          proof-of-loss timing protections. A public adjuster may also identify issues
          that warrant consultation with an attorney. Most public adjusters and attorneys
          will provide a free consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with
        a licensed professional regarding any specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
