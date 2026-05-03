import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'AB 597: New Public Adjuster Regulations in California',
  description:
    'California AB 597 strengthens public adjuster regulations with new contract requirements, fee prohibitions, solicitation rules, and extended cancellation rights during emergencies.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Assembly Bill 597, which took effect on January 1, 2026, represents the most
        significant overhaul of public adjuster regulation in California in over a decade. The bill
        amends several sections of the California Insurance Code governing how public adjusters
        contract with policyholders, what fees they may charge, when they may solicit business, and
        how long policyholders have to cancel a contract after signing. For consumers navigating
        insurance claims &mdash; particularly after a disaster &mdash; these protections are
        substantial and worth understanding in detail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legislation was introduced in response to concerns about aggressive solicitation practices
        and unclear contract terms that left some policyholders locked into agreements they did not
        fully understand. While the vast majority of licensed{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjusters
        </Link>{' '}
        operate ethically and provide valuable services, the new law establishes baseline standards
        that protect consumers from the few who do not.
      </p>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. AB 597 amends existing California Insurance Code provisions, and its interpretation
          may evolve through regulatory guidance and case law. For guidance on a specific public
          adjuster contract or dispute, consult a licensed attorney.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What AB 597 Changes: An Overview
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 597 addresses four primary areas of public adjuster regulation: contract content
        requirements, fee calculation restrictions, solicitation prohibitions, and cancellation
        rights. Each of these changes is designed to ensure that policyholders enter into public
        adjuster agreements with full knowledge of what they are agreeing to, that they are not
        paying for work they did not need, and that they have meaningful time to reconsider.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        New Contract Requirements: Specificity and Transparency
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Prior to AB 597, California law required public adjuster contracts to include basic
        information such as the adjuster&rsquo;s license number, the fee percentage, and a
        cancellation notice. The new law goes significantly further, requiring that every public
        adjuster contract must now describe the <strong>specific services</strong> the adjuster will
        perform and the <strong>specific coverages</strong> the adjuster will address on behalf of
        the policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an important change. Under the old framework, a public adjuster could sign a broad
        contract covering &ldquo;all claims arising from&rdquo; a loss event without specifying
        whether the adjuster would be handling the dwelling claim, the contents claim, the additional
        living expense claim, or all three. The policyholder might not realize until later that the
        adjuster intended to collect a fee on every coverage line &mdash; including coverages the
        policyholder could have handled independently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under AB 597, the contract must clearly identify:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The specific services to be performed</strong> &mdash; such as damage inspection,
          scope of loss preparation, estimate review, negotiation with the insurer, or coordination
          with contractors and experts
        </li>
        <li>
          <strong>The specific coverages to be addressed</strong> &mdash; such as Coverage A
          (dwelling), Coverage B (other structures), Coverage C (personal property), Coverage D
          (loss of use), or specific endorsements like ordinance or law coverage
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This specificity benefits policyholders in several ways. It prevents scope creep, where an
        adjuster expands the engagement to collect fees on coverages that required little or no
        effort. It also creates a clear record if a dispute arises about what the adjuster was
        retained to do. Policyholders should review any public adjuster contract carefully to ensure
        the scope matches their actual needs.
      </p>

      <CalloutBox variant="tip" title="What to Look for in a PA Contract Under AB 597">
        <p>
          Before signing a public adjuster contract, verify that it lists each specific coverage line
          the adjuster will handle and describes the services to be performed. If the contract uses
          vague language like &ldquo;all coverages&rdquo; or &ldquo;all services related to the
          claim,&rdquo; ask the adjuster to specify. The new law requires this specificity, and a
          reputable adjuster will have no objection to providing it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fee Prohibition: No Fees on Pre-Contract Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most significant provisions of AB 597 is the prohibition on public adjusters
        basing their fee on amounts the insurer paid <strong>before the date of the contract</strong>.
        This addresses a practice that, while not universal, was a source of legitimate consumer
        complaints: a policyholder would receive an initial payment from the insurer, then hire a
        public adjuster, and the adjuster would calculate the fee based on the{' '}
        <em>total</em> settlement &mdash; including money the insurer had already paid before the
        adjuster was ever involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the new law, the public adjuster&rsquo;s{' '}
        <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] underline">
          fee
        </Link>{' '}
        can only be calculated on the amounts recovered <em>after</em> the contract date. If an
        insurer paid $50,000 before the policyholder hired a public adjuster, and the adjuster
        subsequently negotiated an additional $150,000, the fee applies only to the $150,000 &mdash;
        not the full $200,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This provision aligns California with the principle that a public adjuster&rsquo;s fee should
        reflect the value the adjuster actually adds to the claim. A public adjuster who is confident
        in the value of their services should have no difficulty operating under this framework,
        because the fee is tied directly to the additional recovery they produce.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Practical Implications of the Fee Restriction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should be aware of how this provision interacts with the claims timeline:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document all payments received before hiring a public adjuster.</strong> Keep
          copies of every check, direct deposit confirmation, or payment summary from the insurer.
          These pre-contract payments are excluded from the fee calculation.
        </li>
        <li>
          <strong>The contract date matters.</strong> The fee prohibition is tied to the date the
          contract is executed, not the date the loss occurred or the date the adjuster began work.
          Ensure the contract date is clearly documented.
        </li>
        <li>
          <strong>Advance payments and emergency payments count.</strong> If the insurer provided
          advance payments for additional living expenses, emergency repairs, or partial dwelling
          payments before the contract date, those amounts should be excluded from the fee base.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Solicitation Prohibition During a Loss-Producing Occurrence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 597 prohibits public adjusters from soliciting business from a policyholder during a
        &ldquo;loss-producing occurrence.&rdquo; This means a public adjuster cannot approach a
        homeowner while a fire is still burning, while flood waters are still rising, or while an
        earthquake aftershock sequence is still active and initiate contact for the purpose of
        securing a contract.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solicitation prohibition is narrowly targeted at the timing of the contact, not at the
        existence of the adjuster&rsquo;s services. A policyholder who independently seeks out a
        public adjuster during a loss event is not affected by this prohibition. The law restricts
        unsolicited contact initiated by the adjuster &mdash; door knocking at evacuation centers,
        cold calling homeowners in active disaster zones, or similar outreach during the emergency
        itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This provision reflects a reasonable concern about vulnerable consumers making hasty decisions
        under extreme duress. When a homeowner is watching their neighborhood burn or is standing in
        several inches of water, they are not in a position to carefully evaluate a contract or
        compare options. The cooling-off period that follows (discussed below) works in tandem with
        this provision to ensure that when a policyholder does hire a public adjuster, the decision
        is informed and deliberate.
      </p>

      <CalloutBox variant="important" title="Solicitation vs. Advertising">
        <p>
          The solicitation prohibition applies to direct, unsolicited contact with specific
          policyholders during a loss event. It does not prohibit general advertising, social media
          posts, or maintaining a website that policyholders can find on their own. Public adjusters
          may still make their services known to the public &mdash; they simply cannot target
          individual policyholders during an active emergency.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extended Five-Day Cancellation Right During a State of Emergency
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law has long provided policyholders with the right to cancel a public adjuster
        contract within a specified window after signing. AB 597 extends this cancellation period
        to <strong>five business days</strong> when the contract is entered into during a declared
        state of emergency. This extended window applies regardless of whether the policyholder
        sought out the adjuster or the adjuster initiated contact (outside the prohibited
        solicitation window).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The five-day cancellation right is a meaningful protection. After a major disaster,
        policyholders are often overwhelmed, sleep-deprived, and facing enormous pressure to make
        decisions quickly. The extended cancellation window ensures that a policyholder who signs a
        contract in the immediate aftermath of a catastrophe has adequate time to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Read the contract carefully and understand the fee structure</li>
        <li>Consult with family, friends, or an attorney</li>
        <li>Compare the terms offered by other public adjusters</li>
        <li>
          Evaluate whether a public adjuster is even necessary for the specific claim (some
          straightforward claims may not require professional representation)
        </li>
        <li>
          Research the adjuster&rsquo;s license status, disciplinary history, and reputation
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cancellation must be in writing and is effective upon mailing or delivery to the public
        adjuster within the five-business-day window. Upon cancellation, the public adjuster is
        entitled to no fee for any services performed during the cancellation period.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How AB 597 Protects Consumers: The Bigger Picture
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Taken together, the four pillars of AB 597 create a framework that protects policyholders at
        every stage of the public adjuster relationship:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Before the contract:</strong> The solicitation prohibition prevents adjusters from
          pressuring policyholders during the most vulnerable moments of a disaster.
        </li>
        <li>
          <strong>At the time of contracting:</strong> The specificity requirements ensure
          policyholders understand exactly what services they are purchasing and which coverages are
          included.
        </li>
        <li>
          <strong>After signing:</strong> The extended cancellation window gives policyholders time
          to reconsider without financial penalty.
        </li>
        <li>
          <strong>At settlement:</strong> The fee prohibition on pre-contract payments ensures
          policyholders pay only for the value the adjuster actually adds.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Look for in a Public Adjuster Contract After AB 597
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        With the new law in effect, policyholders should review any public adjuster contract with the
        following checklist in mind:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Does the contract list specific services?</strong> It should describe what the
          adjuster will do &mdash; inspect damage, prepare estimates, negotiate with the insurer,
          coordinate with experts, etc.
        </li>
        <li>
          <strong>Does the contract identify specific coverages?</strong> Look for references to
          Coverage A (dwelling), Coverage B (other structures), Coverage C (personal property),
          Coverage D (loss of use/ALE), and any applicable endorsements.
        </li>
        <li>
          <strong>How is the fee calculated?</strong> The contract should clearly state that the fee
          is based on amounts recovered after the contract date, not on the total settlement
          including pre-contract payments. For more on fee structures, see the{' '}
          <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] underline">
            public adjuster fees
          </Link>{' '}
          guide.
        </li>
        <li>
          <strong>Is the cancellation right clearly stated?</strong> The contract must include
          notice of the right to cancel, the timeframe (including the extended five-day period
          during a state of emergency), and instructions for exercising that right.
        </li>
        <li>
          <strong>Is the adjuster&rsquo;s license number included?</strong> This was already
          required before AB 597 and remains mandatory. Verify the license with the California
          Department of Insurance. For more on{' '}
          <Link href="/resources/unlicensed-adjusters" className="text-[#2E74B5] underline">
            unlicensed adjuster risks
          </Link>, see the separate guide.
        </li>
        <li>
          <strong>Are there any provisions for additional fees?</strong> Some contracts include
          clauses for administrative fees, cancellation penalties, or charges for specific services
          beyond the contingency percentage. These should be clearly disclosed.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of Public Adjusters Remains Vital
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is important to emphasize that AB 597 is not anti-public adjuster legislation. Licensed{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjusters
        </Link>{' '}
        serve a critical function in the insurance ecosystem. They are the only licensed
        professionals whose sole obligation is to the policyholder. Insurance companies have teams of
        adjusters, engineers, attorneys, and consultants working on their behalf. A skilled public
        adjuster levels the playing field, ensuring the policyholder&rsquo;s claim is properly
        documented, accurately valued, and fairly negotiated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California insurance crisis &mdash; driven by wildfire exposure, carrier withdrawals,
        and increasing claim complexity &mdash; has made public adjusters more important than ever.
        As more homeowners are pushed onto the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          FAIR Plan
        </Link>{' '}
        or surplus lines policies, the claims process has become more fragmented and harder to
        navigate. Public adjusters with expertise in these complex coverage scenarios provide
        significant value to policyholders who would otherwise be at a substantial disadvantage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 597 strengthens the profession by raising standards. Public adjusters who already operated
        with clear contracts, transparent fee structures, and ethical solicitation practices will
        notice little change. The law targets the margins &mdash; the unclear contracts, the fees on
        work not performed, the high-pressure tactics during disasters &mdash; and in doing so,
        protects both consumers and the reputation of the profession itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Enforcement and Consequences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) is responsible for enforcing public adjuster
        regulations, including the new requirements under AB 597. Violations can result in
        disciplinary action against the adjuster&rsquo;s license, including suspension or revocation.
        Policyholders who believe a public adjuster has violated the provisions of AB 597 &mdash;
        for example, by charging fees on pre-contract payments, failing to specify services in the
        contract, or soliciting during a loss event &mdash; can file a complaint with CDI.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, a contract that fails to comply with the statutory requirements may be
        voidable. If a public adjuster&rsquo;s contract does not include the required specificity
        about services and coverages, the policyholder may have grounds to challenge the
        enforceability of the agreement. This is another reason why policyholders should carefully
        review contracts before signing and retain copies of all documentation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways for Policyholders
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          AB 597 requires public adjuster contracts to describe the specific services and specific
          coverages the adjuster will handle. Vague or overly broad contracts do not comply.
        </li>
        <li>
          Public adjuster fees cannot be based on amounts the insurer paid before the contract date.
          The fee applies only to additional recovery.
        </li>
        <li>
          Public adjusters cannot solicit policyholders during a loss-producing occurrence. The
          prohibition targets unsolicited contact during the emergency, not general advertising.
        </li>
        <li>
          During a declared state of emergency, policyholders have five business days to cancel a
          public adjuster contract without penalty.
        </li>
        <li>
          These protections work together to ensure policyholders make informed decisions and pay
          only for value received.
        </li>
      </ul>

      <CalloutBox variant="info" title="Related Resources">
        <p>
          For more on working with public adjusters, see the{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            complete guide to public adjusters
          </Link>
          , the{' '}
          <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] underline">
            public adjuster fees
          </Link>{' '}
          breakdown, and the{' '}
          <Link href="/resources/unlicensed-adjusters" className="text-[#2E74B5] underline">
            unlicensed adjuster risks
          </Link>{' '}
          guide.
        </p>
      </CalloutBox>
    </>
  )
}
