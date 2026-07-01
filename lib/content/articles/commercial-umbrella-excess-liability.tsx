import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "Commercial Umbrella vs. Excess Liability Insurance",
  description:
    "Umbrella and excess policies extend limits but are not the same. The following form trap, drop-down coverage, SIRs, and how to fight an umbrella carrier denial.",
  summary:
    'Commercial umbrella and excess liability both extend your limits, but they are not identical. Watch the following-form trap, drop-down coverage, and self-insured retentions, and know how to respond when the umbrella carrier resists paying.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Commercial umbrella and excess liability policies involve layered coverage structures,
          complex follow-form provisions, and carrier-specific manuscript language that varies
          widely. If you have a disputed claim involving umbrella or excess liability coverage,
          consult with a licensed California attorney who specializes in insurance coverage
          disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A business owner who carries a $1 million Commercial General Liability (CGL) policy
        believes they are well insured &mdash; until a catastrophic liability judgment comes back
        at $3.5 million. A commercial auto accident results in a $2.8 million verdict. A
        product liability claim exceeds the underlying policy limits by seven figures. In each of
        these scenarios, the difference between a survivable event and a business-ending
        catastrophe is whether there is an umbrella or excess liability policy sitting above the
        primary coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial umbrella and excess liability insurance are designed to provide additional
        limits above your primary policies. They are among the most important &mdash; and most
        misunderstood &mdash; coverages a business can carry. Most business owners assume their
        umbrella policy simply extends whatever coverage exists underneath. That assumption is
        wrong more often than it is right, and the consequences of being wrong only surface at the
        worst possible moment: when you have a claim that exceeds your primary limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Commercial Umbrella Insurance Is and Why Businesses Need It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A commercial umbrella policy sits above one or more primary (underlying) liability
        policies and provides two critical functions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Additional limits.</strong> When the underlying policy&rsquo;s limits are
          exhausted by a covered claim, the umbrella pays the excess &mdash; up to its own policy
          limit.
        </li>
        <li>
          <strong>Broader coverage.</strong> Unlike a pure excess policy, a true umbrella may
          provide coverage for claims that the underlying policy excludes, subject to the
          umbrella&rsquo;s own terms and a self-insured retention (SIR).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The typical commercial umbrella sits above a CGL policy, a commercial auto liability
        policy, and an employer&rsquo;s liability policy (part of the workers&rsquo; compensation
        package). The umbrella&rsquo;s scheduled underlying policies list exactly which primary
        policies the umbrella recognizes. If a primary policy is not scheduled, the umbrella
        generally will not respond to a claim arising from that coverage line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For businesses in high-exposure industries &mdash; construction, manufacturing,
        transportation, hospitality, healthcare &mdash; umbrella limits of $5 million, $10
        million, or more are standard. The cost per million of umbrella coverage is typically
        far lower than the cost of the first million on the primary policy, making it one of the
        most cost-effective coverages available.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Umbrella vs. Excess Liability: The Critical Distinction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These terms are used interchangeably in the insurance industry, but they are
        <strong> not the same thing</strong>. The distinction matters enormously at claim time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>An umbrella policy provides broader coverage than the underlying.</strong> It
          can respond to claims that the underlying policy does not cover, subject to its own
          insuring agreement and exclusions. When the umbrella covers a claim the underlying
          excludes, the insured must satisfy a self-insured retention (SIR) before the umbrella
          pays.
        </li>
        <li>
          <strong>An excess policy only extends the limits of the underlying.</strong> It
          &ldquo;follows form&rdquo; to the underlying policy, meaning it covers exactly what the
          underlying covers &mdash; nothing more. If the underlying excludes a claim, the excess
          excludes it too.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the practical difference: Suppose your CGL policy excludes claims arising from
        professional services (a common exclusion). You face a $2 million professional liability
        claim. A true umbrella policy <em>might</em> cover that claim (subject to its own terms
        and the SIR), because the umbrella&rsquo;s coverage is independent of the CGL. A pure
        excess policy will not cover it, because the CGL does not cover it, and the excess simply
        follows the CGL&rsquo;s terms.
      </p>

      <CalloutBox variant="warning" title="Check Your Declarations Page Carefully">
        <p>
          Many policies titled &ldquo;Commercial Umbrella&rdquo; are actually excess liability
          policies in substance. The title on the declarations page does not control &mdash; the
          policy language does. If your &ldquo;umbrella&rdquo; policy contains a strict
          following-form provision and no independent insuring agreement, it is functionally an
          excess policy regardless of what the carrier calls it. Read the insuring agreement, not
          the title.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The &ldquo;Following Form&rdquo; Trap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most commercial umbrella policies contain a &ldquo;following form&rdquo; provision that
        states the umbrella will follow the terms, conditions, and exclusions of the underlying
        policy &mdash; except where the umbrella&rsquo;s own terms differ. This sounds
        straightforward. It is not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following-form provision creates a layered ambiguity:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>When the umbrella is silent on a topic,</strong> the underlying policy&rsquo;s
          terms generally control. If the CGL has a specific exclusion and the umbrella does not
          address that exclusion, does the umbrella follow the CGL&rsquo;s exclusion or not? The
          answer depends on the specific following-form language and applicable case law.
        </li>
        <li>
          <strong>When the umbrella has its own exclusions,</strong> those exclusions apply
          regardless of the underlying policy&rsquo;s terms. Even if the CGL covers a claim, the
          umbrella may exclude it through its own independent exclusion.
        </li>
        <li>
          <strong>When the underlying is amended by endorsement,</strong> the question becomes
          whether the umbrella follows the underlying as amended or as originally written. Some
          umbrella policies specify they follow the underlying &ldquo;as written on the inception
          date,&rdquo; meaning mid-term endorsements to the CGL do not flow through to the
          umbrella.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have addressed these ambiguities with a policyholder-friendly
        interpretive framework. Under <em>AIU Insurance Co. v. Superior Court</em> (1990) 51
        Cal.3d 807, ambiguous policy language is construed against the insurer. When the
        following-form provision creates a reasonable expectation that the umbrella covers a
        particular claim, the policyholder&rsquo;s reasonable interpretation should prevail.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Drop-Down Coverage: When the Underlying Has an Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most valuable &mdash; and most disputed &mdash; features of a true umbrella
        policy is <strong>drop-down coverage</strong>. This occurs when the underlying policy
        excludes a particular claim but the umbrella does not. In that scenario, the umbrella
        &ldquo;drops down&rdquo; to respond as if it were the primary policy, subject to the
        insured satisfying the self-insured retention.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Example: Your CGL policy contains a pollution exclusion. A customer alleges bodily injury
        from chemical exposure at your facility. The CGL denies the claim under the pollution
        exclusion. Your umbrella policy, however, has a more limited pollution exclusion that
        applies only to &ldquo;traditional&rdquo; environmental contamination, not product-related
        chemical exposure. In this scenario, the umbrella should drop down, and after you pay the
        SIR, the umbrella responds as primary.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Drop-down coverage is where the distinction between a true umbrella and a pure excess
        policy is dispositive. A pure excess policy will never drop down, because it only follows
        the form of the underlying. If the underlying does not cover the claim, the excess does
        not either. A true umbrella has an independent insuring agreement that can cover claims the
        underlying excludes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Self-Insured Retention (SIR) vs. the Deductible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the umbrella drops down to provide coverage for a claim the underlying does not
        cover, the insured must satisfy a <strong>self-insured retention</strong> before the
        umbrella begins paying. The SIR is often confused with a deductible, but there are
        important differences:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A deductible reduces the amount the insurer pays.</strong> The insurer adjusts
          the claim and then subtracts the deductible from the payment.
        </li>
        <li>
          <strong>An SIR must be satisfied before the insurer has any obligation to act.</strong>{' '}
          Until the insured pays the SIR amount (or incurs defense costs equal to the SIR), the
          umbrella carrier has no duty to defend and no duty to indemnify. The insured is entirely
          on their own for amounts within the SIR.
        </li>
        <li>
          <strong>Defense costs within the SIR are the insured&rsquo;s responsibility.</strong>{' '}
          If the umbrella&rsquo;s SIR is $10,000, the insured must fund the first $10,000 of
          defense and indemnity before the umbrella engages. This can create a dangerous gap:
          the insured may not have the resources to mount a proper defense, and the umbrella
          carrier has no obligation to help until the SIR is exhausted.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Typical commercial umbrella SIRs range from $10,000 to $25,000 for standard risks. For
        higher-hazard risks or larger programs, SIRs of $50,000, $100,000, or more are common.
        The SIR amount is a negotiable term at the time of policy placement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Disputes When the Umbrella Carrier Refuses to Pay
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Umbrella and excess claims generate some of the most contentious coverage disputes in
        commercial insurance. Here are the arguments carriers most frequently deploy:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        &ldquo;The Underlying Was Not Properly Exhausted&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The umbrella or excess carrier argues that the primary policy&rsquo;s limits were not
        exhausted by <em>payment</em> of covered claims. This dispute arises when the primary
        carrier settles within limits (but arguably for less than the claim is worth), when the
        primary limit is eroded by defense costs under a duty-to-defend policy, or when the
        primary carrier becomes insolvent. The umbrella carrier&rsquo;s position is that it has
        no obligation until the underlying has actually paid its full limit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law on exhaustion is unsettled and has been evolving. The Court of Appeal in
        <em> Community Redevelopment Agency v. Aetna Casualty &amp; Surety Co.</em> (1996) 50
        Cal.App.4th 329 articulated a strict <em>horizontal exhaustion</em> rule &mdash; that an
        excess policy does not attach until all primary insurance has been exhausted &mdash;
        which is generally pro-carrier. More recent decisions (including the California Supreme
        Court&rsquo;s move toward <em>vertical</em> exhaustion in <em>Montrose Chemical Corp. v.
        Superior Court</em> (2020) 9 Cal.5th 215 and related cases) have softened horizontal
        exhaustion in certain contexts. Insureds disputing &ldquo;underlying not properly
        exhausted&rdquo; defenses should look at the most recent California authority for their
        specific exhaustion scenario (long-tail vs. occurrence, multiple primary policies, etc.)
        rather than rely on any single older case.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Coverage Gap Between Underlying and Umbrella
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This occurs when the underlying policy was amended, cancelled, or non-renewed, and the
        umbrella&rsquo;s scheduled underlying insurance no longer matches the coverage actually in
        force. If the underlying limits were reduced from $1 million to $500,000 without the
        umbrella carrier&rsquo;s knowledge, the umbrella may argue that it attaches at $1 million
        (the scheduled amount), leaving a $500,000 gap the insured must fund.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>maintenance of underlying insurance</strong> condition is the policy provision
        that creates this exposure. It requires the insured to maintain the scheduled underlying
        policies in full force with the limits specified. Failure to maintain underlying insurance
        can void the umbrella&rsquo;s obligation entirely or create a gap equal to the amount of
        underlying insurance that should have been maintained.
      </p>

      <CalloutBox variant="warning" title="Never Reduce Underlying Limits Without Notifying the Umbrella Carrier">
        <p>
          If you reduce limits on any scheduled underlying policy &mdash; even to save on premiums
          &mdash; notify the umbrella carrier immediately and get the umbrella&rsquo;s schedule
          amended. The maintenance of underlying insurance condition is strictly enforced, and
          carriers will use any reduction in scheduled underlying limits to deny or limit umbrella
          coverage at claim time.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Late Notice to the Umbrella Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business owners often notify their primary carrier promptly but forget to notify the
        umbrella carrier. Many umbrella policies require notice &ldquo;as soon as
        practicable&rdquo; of any occurrence that <em>may</em> give rise to a claim under the
        umbrella &mdash; not just occurrences that clearly exceed the underlying limits. In
        California, the late notice defense has been significantly limited by California Insurance
        Code &sect; 554, which requires the insurer to demonstrate actual prejudice from the late
        notice before it can disclaim coverage. However, the prejudice requirement does not apply
        to all policy types, and umbrella carriers will still raise the defense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Best practice: notify the umbrella carrier of <em>every</em> occurrence or claim reported
        to any underlying carrier. Do not wait until the claim approaches primary limits. Early
        notice protects your rights and eliminates the late-notice defense entirely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Maintenance of Underlying Insurance Requirement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every commercial umbrella policy contains a schedule of underlying insurance that the
        insured must maintain throughout the policy period. This schedule lists the underlying
        policy types, carriers, policy numbers, and limits. The maintenance condition typically
        states:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;You agree to maintain in full effect during the policy period the underlying
        insurance as described in the Schedule of Underlying Insurance. If you fail to maintain
        underlying insurance, we will only be liable to the extent we would have been had you
        maintained the underlying insurance.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This condition means the umbrella carrier calculates its liability as if the scheduled
        underlying insurance were in force, even if it is not. If your CGL lapses and you have a
        $1.5 million liability claim, the umbrella responds only above $1 million (the scheduled
        underlying CGL limit) &mdash; leaving you personally responsible for the first $1 million
        even though you had no CGL coverage in force.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some umbrella policies go further and make maintenance of underlying insurance a
        <strong> condition precedent</strong> to coverage, meaning any failure to maintain
        underlying insurance voids the umbrella entirely. Read your maintenance provision
        carefully. The difference between a &ldquo;we pay as if&rdquo; provision and a
        &ldquo;condition precedent&rdquo; provision is the difference between a coverage gap and
        a total loss of umbrella protection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How the Umbrella Interacts with CGL, Commercial Auto, and Employer&rsquo;s Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The commercial umbrella typically sits above three primary liability policies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial General Liability (CGL).</strong> The CGL is usually the broadest
          underlying policy. The umbrella follows the CGL&rsquo;s per-occurrence and general
          aggregate limits. When a premises liability, products liability, or completed operations
          claim exhausts the CGL limits, the umbrella responds for the excess.
        </li>
        <li>
          <strong>Commercial Auto Liability.</strong> The umbrella extends above the commercial
          auto policy&rsquo;s combined single limit. Auto claims &mdash; particularly those
          involving serious bodily injury or death &mdash; are among the most common claims to
          reach umbrella limits. The umbrella must be specifically scheduled to cover the auto
          policy, and any vehicles not covered by the underlying auto policy are not covered by
          the umbrella.
        </li>
        <li>
          <strong>Employer&rsquo;s Liability.</strong> Workers&rsquo; compensation claims are
          covered by the workers&rsquo; comp policy and do not flow to the umbrella. However,
          the employer&rsquo;s liability portion (Coverage B of the workers&rsquo; comp policy)
          &mdash; which covers lawsuits by employees for bodily injury outside the workers&rsquo;
          comp system &mdash; is typically scheduled under the umbrella. Employer&rsquo;s
          liability claims that exceed the underlying Part B limits trigger umbrella coverage.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, the umbrella does <strong>not</strong> typically sit above the commercial
        property policy, the inland marine policy, or the workers&rsquo; compensation policy
        (Part A). The umbrella is a liability tower, not a property tower. Businesses that need
        excess property limits must purchase separate excess property coverage. For more on how
        commercial liability coverage works, see our guide to{' '}
        <Link
          href="/resources/named-vs-additional-insured"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Named Insured vs. Additional Insured Status
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides several protections for umbrella and excess policyholders that
        differ from other jurisdictions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Prejudice requirement for late notice.</strong> Under California Insurance Code
          &sect; 554 and the holding in <em>Shell Oil Co. v. Winterthur Swiss Insurance Co.</em>
          (1993) 12 Cal.App.4th 715, an insurer must demonstrate actual prejudice from late
          notice before disclaiming coverage. This significantly limits the late-notice defense
          for umbrella carriers.
        </li>
        <li>
          <strong>Ambiguities construed against the insurer.</strong> Under the doctrine
          established in <em>AIU Insurance Co. v. Superior Court</em> (1990) 51 Cal.3d 807,
          any ambiguity in the umbrella policy &mdash; including the following-form provision
          &mdash; is interpreted in favor of coverage.
        </li>
        <li>
          <strong>Bad faith exposure.</strong> Under <em>Egan v. Mutual of Omaha</em> (1979) 24
          Cal.3d 809 and its progeny, an umbrella or excess carrier that unreasonably refuses to
          defend or indemnify is exposed to bad faith damages, including emotional distress and
          punitive damages. This applies even when the coverage question is debatable, if the
          carrier fails to conduct a reasonable investigation before denying.
        </li>
        <li>
          <strong>The duty to settle within primary limits.</strong> When the underlying carrier
          has an opportunity to settle within its limits but refuses, and a judgment exceeds the
          primary limits triggering the umbrella, complex equitable contribution and subrogation
          issues arise between the primary and umbrella carriers. California recognizes that an
          excess insurer who has been forced to pay because the primary carrier unreasonably
          refused to settle within primary limits may have an equitable-subrogation claim against
          the primary carrier &mdash; the excess steps into the insured&rsquo;s shoes and pursues
          the primary for breach of its duty to settle. The foundational California authority is
          <em> Northwestern Mut. Ins. Co. v. Farmers Ins. Group</em> (1978) 76 Cal.App.3d 1031.
          Note: <em>Commercial Union Assurance Cos. v. Safeway Stores, Inc.</em> (1980) 26 Cal.3d
          912 addresses a different question and is sometimes confused with this doctrine &mdash;
          Commercial Union held that the <em>insured</em> owes no implied duty to its excess
          insurer to accept a settlement offer within primary limits.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Guidance for Business Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Managing umbrella and excess coverage effectively requires attention at both the placement
        and claims stages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Know what you actually have.</strong> Read your policy&rsquo;s insuring
          agreement. If it has an independent insuring agreement that provides coverage beyond the
          underlying, you have a true umbrella. If it simply says it follows the form of the
          underlying, you have an excess policy regardless of the title.
        </li>
        <li>
          <strong>Match your underlying schedule exactly.</strong> Verify that every underlying
          policy is listed on the umbrella&rsquo;s schedule with the correct limits. If you add a
          new coverage line (e.g., a new commercial auto policy), get it added to the umbrella
          schedule immediately.
        </li>
        <li>
          <strong>Never reduce underlying limits without amending the umbrella.</strong> The
          maintenance of underlying insurance condition can create catastrophic gaps if your
          underlying limits no longer match the umbrella&rsquo;s schedule.
        </li>
        <li>
          <strong>Notify the umbrella carrier of every claim.</strong> Do not wait until a claim
          approaches primary limits. Early notice protects your rights and eliminates the
          late-notice defense.
        </li>
        <li>
          <strong>Consider the SIR when evaluating drop-down coverage.</strong> If your umbrella
          has a $25,000 SIR and the underlying excludes the claim, you must fund the first
          $25,000 yourself. Make sure your business can absorb that amount.
        </li>
        <li>
          <strong>Place the umbrella with a financially strong carrier.</strong> The umbrella is
          your last line of defense against catastrophic liability. An A.M. Best rating of A- or
          better is a reasonable minimum.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For businesses with complex operations or high exposure, the umbrella program may involve
        multiple layers of excess coverage &mdash; a $5 million umbrella sitting above the primary
        policies, a $10 million excess above the umbrella, and so on. Each layer follows the
        terms of the layer below it, creating a tower of coverage. The higher the layer, the
        cheaper the premium per million &mdash; but the more complex the claims process becomes
        when a catastrophic loss flows through multiple layers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how commercial claims differ from residential claims, see our overview of{' '}
        <Link
          href="/resources/commercial-vs-residential-claims"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Commercial vs. Residential Claims
        </Link>. For guidance on handling large and complex commercial losses, see our article on{' '}
        <Link
          href="/resources/large-commercial-losses"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Large Commercial Losses
        </Link>.
      </p>

      <CalloutBox variant="info" title="Related Articles">
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li>
            <Link
              href="/resources/commercial-vs-residential-claims"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Commercial vs. Residential Claims
            </Link>{' '}
            &mdash; key differences in how commercial and residential claims are handled
          </li>
          <li>
            <Link
              href="/resources/large-commercial-losses"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Large Commercial Losses
            </Link>{' '}
            &mdash; strategies for managing complex, high-value commercial claims
          </li>
          <li>
            <Link
              href="/resources/named-vs-additional-insured"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Named Insured vs. Additional Insured
            </Link>{' '}
            &mdash; understanding insured status on commercial liability policies
          </li>
          <li>
            <Link
              href="/resources/business-interruption"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Business Interruption Insurance Claims
            </Link>{' '}
            &mdash; recovering lost income after property damage
          </li>
          <li>
            <Link
              href="/resources/commercial-lease-insurance"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Commercial Lease Insurance Requirements
            </Link>{' '}
            &mdash; waiver of subrogation, additional insured, and lease obligations
          </li>
        </ul>
      </CalloutBox>

      <div className="mt-12 p-6 bg-[#1F3964] rounded-lg text-center">
        <p className="text-white text-lg font-semibold mb-2">
          Is Your Umbrella Carrier Refusing to Drop Down or Pay?
        </p>
        <p className="text-blue-100 text-sm mb-4">
          Umbrella and excess liability disputes involve complex coverage layering, following-form
          analysis, and exhaustion questions that carriers exploit to avoid payment. A Licensed
          Public Adjuster can analyze your coverage tower, identify the carrier&rsquo;s
          obligations, and fight for the full protection your premiums purchased.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] text-white font-bold py-3 px-8 rounded hover:bg-yellow-600 transition"
        >
          Request a Free Consultation
        </Link>
      </div>
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
