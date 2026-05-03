import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The FAIR Plan Claims Process: What 610,000 Policyholders Need to Know',
  description:
    'How to file a FAIR Plan claim, what the FAIR Plan covers and excludes, the $3M residential cap, the current crisis with 610K+ policies, AB 1680 and AB 226 reforms, and why a DIC policy is essential.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan is now the largest property insurer in the state by policy count,
        with more than 610,000 active policies as of late 2025 &mdash; a 43 percent increase from
        September 2024 to December 2025. What was originally designed as a temporary insurer of
        last resort for a small number of high-risk properties has become the primary fire insurance
        option for hundreds of thousands of California homeowners. The January 2025 Los Angeles
        wildfires inflicted approximately $4 billion in losses on the FAIR Plan alone, straining an
        organization that was never built to handle catastrophic events of this magnitude.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders navigating a{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          FAIR Plan
        </Link>{' '}
        claim, the process is different from dealing with a traditional insurance company &mdash; and
        the coverage gaps are far more severe than most homeowners realize. This guide covers how to
        file a FAIR Plan claim, what to expect during the process, what the FAIR Plan does and does
        not cover, and why supplemental coverage is not optional but essential.
      </p>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. FAIR Plan policies, coverage terms, and regulatory requirements are subject to
          change. For guidance on a specific FAIR Plan claim, consult a licensed public adjuster or
          attorney experienced in California property insurance.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing a FAIR Plan Claim: The Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a claim with the FAIR Plan follows the same general framework as any property
        insurance claim, but with some important differences in how the process is managed and who
        handles the file.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Report the Loss Promptly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contact the FAIR Plan as soon as possible after a loss. The FAIR Plan accepts claims by
        phone and through its website. Have the policy number, date of loss, and a brief description
        of the damage ready. As with any property insurance claim, prompt reporting is important
        both to comply with policy conditions and to begin the documentation process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Document Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thorough documentation is critical for FAIR Plan claims. Photograph and video all damage
        before any cleanup or temporary repairs. Save receipts for all emergency expenses including
        hotel stays, meals, and temporary repairs. Create a written inventory of damaged or destroyed
        personal property with descriptions, approximate ages, and estimated values. The FAIR Plan,
        like any insurer, will require documentation to support every element of the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Understand the Adjuster Assignment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan does not maintain its own staff of field adjusters in the way that large
        carriers do. Instead, it contracts with independent adjusting firms and third-party
        administrators to handle claims. This means the adjuster assigned to a FAIR Plan claim may
        be handling files for multiple carriers simultaneously and may not be deeply familiar with
        FAIR Plan-specific policy provisions. Policyholders should not assume the assigned adjuster
        is an expert on what the FAIR Plan policy does and does not cover.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Request Advance Payments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California regulations require insurers, including the FAIR Plan, to provide advance payments
        when liability is reasonably clear. If a wildfire destroyed a home and the FAIR Plan policy
        was in force, there should be no dispute about whether the loss is covered. Policyholders
        should request advance payments for additional living expenses and partial dwelling payments
        as soon as possible. Do not wait for the full adjustment to be completed before asking for
        money to cover immediate needs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Coordinate with the DIC Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">
          Difference in Conditions (DIC) policy
        </Link>{' '}
        is in place, coordinating between the FAIR Plan and the DIC carrier is one of the most
        important &mdash; and most complex &mdash; aspects of the claim. The DIC policy typically
        sits on top of the FAIR Plan and covers perils and amounts that the FAIR Plan does not. The
        two policies must be adjusted together to maximize the total recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the FAIR Plan Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan&rsquo;s coverage is narrow by design. The standard FAIR Plan homeowner policy
        covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fire</strong> &mdash; including wildfire, which is the primary reason most
          policyholders are on the FAIR Plan
        </li>
        <li><strong>Lightning</strong></li>
        <li><strong>Internal explosion</strong></li>
        <li>
          <strong>Smoke damage</strong> &mdash; from a hostile fire (not smoke from fireplaces,
          cooking, or industrial sources)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Optional endorsements are available for windstorm, hail, vandalism, and extended coverage
        perils (riot, civil commotion, aircraft, vehicles, volcanic eruption). These endorsements
        add cost but are worth considering depending on the property&rsquo;s risk profile.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the FAIR Plan Does NOT Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusions in a FAIR Plan policy are extensive, and they represent the most dangerous
        coverage gaps for California homeowners:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>No personal liability coverage.</strong> If someone is injured on the property, the
          FAIR Plan provides zero liability protection. A separate liability policy is essential.
        </li>
        <li>
          <strong>No theft coverage.</strong> Burglary, robbery, and theft of personal property are
          not covered.
        </li>
        <li>
          <strong>No water damage coverage.</strong> Burst pipes, appliance leaks, rain intrusion,
          and other water-related damage are excluded.
        </li>
        <li>
          <strong>No tree or falling object damage.</strong> Damage caused by trees, branches, or
          other objects falling on the property is not covered under the basic form.
        </li>
        <li>
          <strong>Limited additional living expenses (ALE) in the basic form.</strong> The base FAIR
          Plan policy either excludes ALE entirely or provides only minimal coverage. An ALE
          endorsement may be available but typically at lower limits than a standard homeowner
          policy.
        </li>
        <li>
          <strong>No replacement cost valuation in the basic form.</strong> The base FAIR Plan policy
          pays on an actual cash value (ACV) basis &mdash; meaning damaged property is valued after
          depreciation. A replacement cost endorsement may be available, but policyholders must
          specifically request and pay for it. Without replacement cost coverage, the gap between
          what the insurer pays and what it actually costs to rebuild can be enormous.
        </li>
        <li>
          <strong>No ordinance or law coverage.</strong> If the home must be rebuilt to current
          building codes (which is almost always the case after a total loss), the additional cost
          of code compliance is not covered.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The FAIR Plan Is NOT a Substitute for Full Homeowner Coverage">
        <p>
          The FAIR Plan covers fire and a handful of named perils. It does not provide the
          comprehensive coverage that a standard homeowner policy offers. Without a DIC policy or
          other supplemental coverage layered on top of the FAIR Plan, a homeowner has massive
          coverage gaps that could prove financially devastating.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The $3 Million Residential Cap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan&rsquo;s maximum dwelling coverage for residential properties is $3 million.
        While this may seem adequate for many homes, it falls short for higher-value properties in
        coastal, hillside, and urban areas where rebuild costs can exceed this limit significantly.
        Properties in wildfire-prone areas of Los Angeles, the Bay Area, and other high-cost
        California markets may have replacement costs that approach or exceed $3 million &mdash;
        particularly when factoring in current construction costs, demand surge pricing after a
        catastrophe, and code upgrade requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders with homes valued above $3 million must secure excess coverage from another
        source to avoid being{' '}
        <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] underline">
          underinsured after a wildfire
        </Link>
        . The surplus lines market may offer options, but availability and pricing fluctuate
        significantly based on market conditions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Current Crisis: Growth, Losses, and Rate Increases
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan was never designed to be a major insurance carrier. It was created in 1968 as a
        temporary backstop, a pool of last resort for properties that the private market would not
        insure. But as major carriers have withdrawn from California or drastically reduced their
        wildfire-zone exposure, the FAIR Plan has absorbed an enormous and growing share of the
        state&rsquo;s fire insurance market.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The numbers tell the story:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>610,000+ active policies</strong> as of late 2025, up 43 percent from September
          2024 to December 2025
        </li>
        <li>
          <strong>$4 billion in estimated losses</strong> from the January 2025 Los Angeles wildfires
          alone
        </li>
        <li>
          <strong>A 36 percent rate increase</strong> pending regulatory approval, reflecting the
          FAIR Plan&rsquo;s deteriorating financial position
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] underline">
          California insurance crisis
        </Link>{' '}
        has transformed the FAIR Plan from a niche product into a necessity for hundreds of
        thousands of families. This rapid growth has strained the FAIR Plan&rsquo;s administrative
        capacity, its claims handling infrastructure, and its financial reserves. Policyholders who
        file claims during catastrophic events may face longer wait times, less experienced
        adjusters, and more aggressive claims handling as the organization struggles to manage an
        unprecedented volume of losses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        CDI Examination Findings: Systemic Claims Handling Failures
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) has conducted examinations of the FAIR
        Plan&rsquo;s claims handling practices and identified systemic failures that affect
        policyholders across the board. These findings include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Delays in claim acknowledgment and investigation.</strong> The FAIR Plan has been
          cited for failing to acknowledge claims within the timeframes required by California&rsquo;s
          Fair Claims Settlement Practices Regulations.
        </li>
        <li>
          <strong>Inadequate communication with policyholders.</strong> CDI found that policyholders
          were not being kept informed of the status of their claims or the reasons for delays.
        </li>
        <li>
          <strong>Insufficient advance payments.</strong> Despite regulatory requirements to provide
          advance payments when liability is reasonably clear, the FAIR Plan was found to be slow in
          issuing these payments to policyholders displaced by covered losses.
        </li>
        <li>
          <strong>Inconsistent claim valuations.</strong> CDI identified concerns about the
          consistency and accuracy of damage assessments, particularly in catastrophic loss
          situations where the FAIR Plan was relying heavily on third-party adjusting firms.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These findings reinforce the importance of policyholders being proactive in documenting their
        claims, requesting payments in writing, and keeping detailed records of all communications
        with the FAIR Plan and its adjusters.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Legislative Reforms: AB 1680 and AB 226
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        AB 1680: The Make It FAIR Act
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assembly Bill 1680, known as the Make It FAIR Act, represents a significant effort to reform
        the FAIR Plan and expand its coverage options. The legislation addresses several of the most
        critical gaps in FAIR Plan coverage, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Requiring the FAIR Plan to offer a comprehensive homeowner policy option that more closely
          resembles standard market coverage
        </li>
        <li>
          Expanding coverage to include perils currently excluded from the basic FAIR Plan form
        </li>
        <li>
          Strengthening claims handling standards and timelines specific to the FAIR Plan
        </li>
        <li>
          Addressing the FAIR Plan&rsquo;s governance structure and accountability to policyholders
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If enacted as proposed, AB 1680 would fundamentally change the FAIR Plan from a bare-bones
        fire policy into something closer to actual homeowner insurance. This would reduce (though
        not eliminate) the need for a separate DIC policy and would provide meaningful additional
        protection for the hundreds of thousands of families currently relying on the FAIR Plan as
        their only fire coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        AB 226
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assembly Bill 226 addresses FAIR Plan reforms from a different angle, focusing on the
        financial structure of the FAIR Plan, its assessment authority (how it charges admitted
        carriers for losses that exceed its reserves), and its rate-setting process. AB 226 is
        particularly relevant to the question of how the FAIR Plan will fund its growing obligations
        without imposing unsustainable rate increases on policyholders or destabilizing the admitted
        insurance market through excessive assessments.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Critical Need for a DIC Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Given the FAIR Plan&rsquo;s extensive coverage limitations, a{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">
          Difference in Conditions (DIC) policy
        </Link>{' '}
        is not a luxury &mdash; it is a necessity for any homeowner relying on the FAIR Plan. A DIC
        policy fills in the gaps by providing coverage for perils and amounts that the FAIR Plan
        excludes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Theft, water damage, and liability</strong> &mdash; the most significant perils
          excluded from the FAIR Plan
        </li>
        <li>
          <strong>Replacement cost coverage</strong> &mdash; if the FAIR Plan policy is on an ACV
          basis, the DIC policy can provide the replacement cost difference
        </li>
        <li>
          <strong>Additional living expenses</strong> &mdash; at limits more consistent with what a
          standard homeowner policy would provide
        </li>
        <li>
          <strong>Personal property at replacement cost</strong> &mdash; instead of the FAIR
          Plan&rsquo;s ACV-only basis
        </li>
        <li>
          <strong>Ordinance or law coverage</strong> &mdash; for code upgrade costs
        </li>
      </ul>

      <CalloutBox variant="tip" title="Do Not Skip the DIC Policy">
        <p>
          The most common and most costly mistake FAIR Plan policyholders make is forgoing the DIC
          policy to save on premiums. Without a DIC policy, a FAIR Plan policyholder has no coverage
          for water damage, theft, liability, and in many cases no replacement cost protection. A
          single burst pipe or slip-and-fall lawsuit can result in catastrophic uninsured loss. The
          DIC premium is the cost of actually being insured.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Strategies for FAIR Plan Policyholders
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review the FAIR Plan policy carefully.</strong> Do not assume it covers what a
          standard homeowner policy covers. Read the declarations page and the policy form to
          understand exactly what is and is not covered.
        </li>
        <li>
          <strong>Obtain a DIC policy.</strong> Work with a broker experienced in the surplus lines
          market to find a DIC policy that complements the FAIR Plan coverage. Ensure the DIC policy
          coordinates properly with the FAIR Plan.
        </li>
        <li>
          <strong>Document property values annually.</strong> With a 36 percent rate increase
          pending and construction costs continuing to rise, ensure coverage limits reflect current
          replacement costs. Being underinsured on the FAIR Plan while paying higher premiums is the
          worst of both outcomes.
        </li>
        <li>
          <strong>Keep checking the private market.</strong> The FAIR Plan should be a last resort,
          not a permanent solution. Have a broker re-check the admitted and surplus lines markets
          annually for alternatives. The{' '}
          <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] underline">
            surplus lines market
          </Link>{' '}
          may offer options that were not available when the FAIR Plan policy was first purchased.
        </li>
        <li>
          <strong>File claims promptly and document aggressively.</strong> Given CDI&rsquo;s findings
          about the FAIR Plan&rsquo;s claims handling deficiencies, policyholders cannot afford to be
          passive. Report losses immediately, follow up in writing, request advance payments
          explicitly, and keep records of every communication.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The FAIR Plan covers fire and a few named perils only. It is not comprehensive homeowner
          insurance.
        </li>
        <li>
          Critical exclusions include liability, theft, water damage, tree damage, and (in the basic
          form) replacement cost valuation and adequate ALE.
        </li>
        <li>
          The $3 million residential cap may be insufficient for high-value homes, particularly in
          high-cost California markets.
        </li>
        <li>
          CDI has identified systemic claims handling failures. Policyholders must be proactive in
          documenting and pursuing their claims.
        </li>
        <li>
          AB 1680 and AB 226 may bring meaningful reforms, but legislation takes time. Current
          policyholders must plan based on the FAIR Plan as it exists today.
        </li>
        <li>
          A DIC policy is not optional. Without one, a FAIR Plan policyholder has coverage gaps that
          a standard homeowner would never accept.
        </li>
      </ul>

      <CalloutBox variant="info" title="Related Resources">
        <p>
          For more information, see the guides on the{' '}
          <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
            California FAIR Plan overview
          </Link>
          ,{' '}
          <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">
            DIC policies
          </Link>
          , the{' '}
          <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] underline">
            California insurance crisis
          </Link>
          , and{' '}
          <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] underline">
            surplus lines carriers
          </Link>
          .
        </p>
      </CalloutBox>
    </>
  )
}
