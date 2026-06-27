import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The California FAIR Plan: Coverage, Claims, Limits, and Reforms (610,000+ Policyholders)',
  description:
    'A complete guide to the California FAIR Plan — the state\'s insurer of last resort. Covers what it insures and excludes, the $3M residential cap, how to apply, how to file a claim, CDI examination findings, the Aliff smoke-damage ruling, AB 226 and AB 1680, and why a DIC policy is essential.',
  summary:
    'The California FAIR Plan is the insurer of last resort for homeowners who cannot get coverage in the private market. It now carries more than 610,000 policies and provides only basic, capped fire coverage at higher cost, so a companion DIC policy is almost always necessary. This guide walks through coverage, exclusions, the $3M cap, the claims process, CDI findings, the Aliff smoke-damage ruling, and pending reforms.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. FAIR Plan policies, coverage terms, and
          regulatory requirements are subject to change. For legal questions about
          your specific situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan (Fair Access to Insurance Requirements) was
        created in 1968 as a last-resort option for property owners who could not
        obtain fire insurance through the private market. Originally designed as
        a temporary backstop for a small number of high-risk properties, the FAIR
        Plan has grown into the largest property insurer in the state by policy
        count, with more than 610,000 active policies as of late 2025 &mdash; a
        43 percent increase between September 2024 and December 2025. The
        January 2025 Los Angeles wildfires inflicted approximately $4 billion in
        losses on the FAIR Plan alone, straining an organization that was never
        built to handle catastrophic events of this magnitude. Current totals are
        reported through CDI filings and FAIR Plan public reports.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have been non-renewed or denied coverage, the FAIR Plan may be
        your most realistic option &mdash; but the process is different from
        dealing with a traditional carrier, and the coverage gaps are far more
        severe than most homeowners realize. This guide walks through what the
        FAIR Plan does and does not cover, the $3 million residential cap, how
        to apply, how the claims process actually works, the CDI examination
        findings on systemic claims-handling failures, the 2025 <em>Aliff</em>{' '}
        smoke-damage ruling, the pending AB 1680 and enacted AB 226 reforms, and
        why a Difference in Conditions (DIC) policy is almost always essential.
      </p>

      <CalloutBox variant="warning" title="FAIR Plan ≠ Full Homeowner Coverage">
        <p>
          The FAIR Plan covers fire and a handful of named perils. It does{' '}
          <strong>not</strong> include theft, water damage, liability, tree or
          falling-object damage, or personal property at replacement cost under
          the base form. You almost certainly need a separate DIC (Difference in
          Conditions) policy to fill the gaps. More on that below.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the FAIR Plan Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan&rsquo;s coverage is narrow by design. The standard FAIR
        Plan homeowner policy covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fire</strong> &mdash; including wildfire, which is the primary
          reason most policyholders are on the FAIR Plan
        </li>
        <li><strong>Lightning</strong></li>
        <li><strong>Internal explosion</strong></li>
        <li>
          <strong>Smoke</strong> &mdash; from a hostile fire (not from
          fireplaces, cooking, or industrial sources)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Optional endorsements are available for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Windstorm and hail</li>
        <li>Vandalism and malicious mischief</li>
        <li>
          Extended coverage (riot, civil commotion, aircraft, vehicles, volcanic
          eruption)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Endorsements add cost but are worth considering depending on the
        property&rsquo;s risk profile.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the FAIR Plan Does NOT Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where most homeowners get an unpleasant surprise. The exclusions
        in a FAIR Plan policy are extensive, and they represent the most
        dangerous coverage gaps for California homeowners:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>No personal liability coverage.</strong> If someone is injured
          on the property, the FAIR Plan provides zero liability protection. A
          separate liability policy is essential.
        </li>
        <li>
          <strong>No theft coverage.</strong> Burglary, robbery, and theft of
          personal property are not covered.
        </li>
        <li>
          <strong>No water damage coverage.</strong> Burst pipes, appliance
          leaks, rain intrusion, and other water-related damage are excluded.
        </li>
        <li>
          <strong>No tree or falling-object damage.</strong> Damage caused by
          trees, branches, or other objects falling on the property is not
          covered under the basic form.
        </li>
        <li>
          <strong>Limited additional living expenses (ALE) in the basic form.</strong>{' '}
          The base FAIR Plan policy either excludes ALE entirely or provides
          only minimal coverage. An ALE endorsement may be available but
          typically at lower limits than a standard homeowner policy.
        </li>
        <li>
          <strong>No replacement cost valuation in the basic form.</strong> The
          base FAIR Plan policy pays personal property on an actual cash value
          (ACV) basis &mdash; meaning damaged property is valued after
          depreciation. A replacement cost endorsement may be available, but
          policyholders must specifically request and pay for it. Without
          replacement cost coverage, the gap between what the insurer pays and
          what it actually costs to rebuild can be enormous.
        </li>
        <li>
          <strong>No ordinance or law coverage.</strong> If the home must be
          rebuilt to current building codes (which is almost always the case
          after a total loss), the additional cost of code compliance is not
          covered under the base form.
        </li>
        <li>
          <strong>Debris removal</strong> beyond a basic sublimit.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage Limits and the $3 Million Residential Cap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan increased its maximum dwelling coverage limit for
        residential properties to $3 million in recent years (previously $1.5
        million). While that limit may seem adequate for many homes, it falls
        short for higher-value properties in coastal, hillside, and urban areas
        where rebuild costs can exceed this limit significantly. Properties in
        wildfire-prone areas of Los Angeles, the Bay Area, and other high-cost
        California markets may have replacement costs that approach or exceed
        $3 million &mdash; particularly when factoring in current construction
        costs, demand-surge pricing after a catastrophe, and code-upgrade
        requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal property (contents) coverage is available but is typically a
        percentage of the dwelling limit &mdash; review the specific amounts on
        your policy. Policyholders with homes valued above $3 million may need
        to secure excess coverage from another source to avoid being{' '}
        <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] hover:underline">
          underinsured after a wildfire
        </Link>
        . The surplus lines market may offer options, but availability and
        pricing fluctuate significantly based on market conditions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Apply
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get declined by the private market first.</strong> The FAIR
          Plan requires proof that you were unable to obtain coverage through a
          standard or surplus lines carrier. Your agent or broker should provide
          a declination letter documenting the denials.
        </li>
        <li>
          <strong>Work through a licensed agent or broker.</strong> You cannot
          apply directly to the FAIR Plan. Any California-licensed
          property/casualty agent can submit an application on your behalf.
        </li>
        <li>
          <strong>Schedule the inspection.</strong> The FAIR Plan requires a
          property inspection before issuing coverage. The inspector will
          evaluate the condition of the property, clearance around structures,
          and basic habitability.
        </li>
        <li>
          <strong>Receive your quote and bind coverage.</strong> Once the
          inspection is approved, you&apos;ll receive a quote. If you accept,
          coverage is bound and the policy is issued.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Apply Early — Processing Times Are Long">
        <p>
          With the surge in applications, the FAIR Plan&apos;s processing times
          have stretched significantly. If you know your current policy is being
          non-renewed, you might consider applying at least 45–60 days before
          expiration to avoid a lapse in coverage. A gap in coverage can trigger
          your mortgage lender to force-place insurance &mdash; which is far
          more expensive and covers only the lender&apos;s interest.
        </p>
      </CalloutBox>

      <CalloutBox variant="info" title="A Note on Terminology: &ldquo;Force-Placed&rdquo; vs. &ldquo;Lender-Placed&rdquo;">
        <p>
          The correct term is <strong>&ldquo;force-placed insurance&rdquo;</strong>{' '}
          (with the &ldquo;-ed&rdquo; on <em>place</em>), not
          &ldquo;forced-placed.&rdquo; The CFPB&apos;s mortgage-servicing rule
          defines the term this way at 12 C.F.R. &sect; 1024.37, and that is
          the controlling federal terminology. As a verb, the action is
          typically written as &ldquo;to force-place insurance&rdquo; or, more
          formally, &ldquo;to obtain force-placed insurance.&rdquo;
        </p>
        <p className="mt-3">
          You will also see <strong>&ldquo;lender-placed insurance&rdquo;</strong>{' '}
          used as a synonym. Fannie Mae and Freddie Mac use this term in their
          servicing guides, and many modern servicers prefer it because it
          sounds less pejorative. Both terms refer to the same thing: hazard
          insurance that the mortgage servicer obtains on the borrower&apos;s
          behalf when the borrower fails to maintain required coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The DIC Policy: Making the FAIR Plan Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Given the FAIR Plan&rsquo;s extensive coverage limitations, a{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] hover:underline">
          Difference in Conditions (DIC) policy
        </Link>{' '}
        is not a luxury for most homeowners &mdash; it is the realistic way to
        get something close to full homeowner coverage on top of a FAIR Plan
        base. A DIC policy is a companion policy designed to &ldquo;wrap
        around&rdquo; the FAIR Plan and fill its gaps. A good DIC policy adds:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Theft, water damage, and liability coverage</strong> &mdash;
          the most significant perils excluded from the FAIR Plan
        </li>
        <li>
          <strong>Replacement cost coverage</strong> &mdash; if the FAIR Plan
          policy is on an ACV basis, the DIC policy can provide the replacement
          cost difference
        </li>
        <li>
          <strong>Additional living expenses (ALE)</strong> &mdash; at limits
          more consistent with what a standard homeowner policy would provide
        </li>
        <li>
          <strong>Personal property at replacement cost</strong> &mdash; instead
          of the FAIR Plan&rsquo;s ACV-only basis
        </li>
        <li>
          <strong>Ordinance or law coverage</strong> &mdash; for code-upgrade
          costs
        </li>
        <li>
          <strong>Broader personal property coverage</strong> generally
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several carriers offer DIC policies specifically designed to pair with
        the FAIR Plan. Your broker should be able to quote this as a package.
        The combined cost (FAIR Plan + DIC) will almost always exceed what a
        standard homeowner policy would have cost &mdash; but it provides
        something close to equivalent coverage.
      </p>

      <CalloutBox variant="tip" title="Do Not Skip the DIC Policy">
        <p>
          The most common and most costly mistake FAIR Plan policyholders make
          is forgoing the DIC policy to save on premiums. Without a DIC policy,
          a FAIR Plan policyholder has no coverage for water damage, theft,
          liability, and in many cases no replacement cost protection. A single
          burst pipe or slip-and-fall lawsuit can result in a catastrophic
          uninsured loss. The DIC premium is the cost of actually being insured.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        FAIR Plan Financial Stability and the Current Crisis
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan was never designed to be a major insurance carrier. It
        was created as a pool of last resort for properties the private market
        would not insure. As major carriers have withdrawn from California or
        drastically reduced their wildfire-zone exposure, the FAIR Plan has
        absorbed an enormous and growing share of the state&rsquo;s fire
        insurance market. The numbers tell the story:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>610,000+ active policies</strong> as of late 2025, up 43
          percent from September 2024 to December 2025
        </li>
        <li>
          <strong>Approximately $4 billion in estimated losses</strong> from
          the January 2025 Los Angeles wildfires alone
        </li>
        <li>
          <strong>A 36 percent rate increase</strong> pending regulatory
          approval, reflecting the FAIR Plan&rsquo;s deteriorating financial
          position
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan is backed by all admitted property/casualty insurers in
        California on a proportional basis. If the FAIR Plan&rsquo;s losses
        exceed its reserves, it can assess member companies to cover the
        shortfall. After the 2025 LA fires, questions arose about whether the
        FAIR Plan&rsquo;s exposure could trigger assessments that ripple
        through the broader California property-insurance market. The
        Legislature has acted on one piece of this risk through AB 226 (see
        the Legislative Reforms section below), but the assessment model
        remains the primary funding mechanism. Current exposure and reserve
        figures are best verified through CDI filings and the FAIR Plan&rsquo;s
        own public reports.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] hover:underline">
          California insurance crisis
        </Link>{' '}
        has transformed the FAIR Plan from a niche product into a necessity for
        hundreds of thousands of families. This rapid growth has strained the
        FAIR Plan&rsquo;s administrative capacity, its claims-handling
        infrastructure, and its financial reserves. Policyholders who file
        claims during catastrophic events may face longer wait times and less
        experienced adjusters as the organization works through an
        unprecedented volume of losses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing a Claim on a FAIR Plan Policy: The Process Step by Step
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claims process on a FAIR Plan policy follows the same California{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        as any other insurer. At a minimum, the FAIR Plan must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Acknowledge your claim within 15 days</li>
        <li>
          Accept or deny within 40 days of receiving necessary documentation
        </li>
        <li>Pay undisputed amounts within 30 days of determination</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a claim with the FAIR Plan follows the same general framework
        as any property insurance claim, but with some important differences in
        how the process is managed and who handles the file. After a
        large-scale event, the FAIR Plan &mdash; like any insurer &mdash; can
        be overwhelmed, and the same tactics used by standard carriers
        (lowball estimates, scope disputes, delayed payments) can occur here as
        well.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Report the Loss Promptly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contact the FAIR Plan as soon as possible after a loss. The FAIR Plan
        accepts claims by phone and through its website. Have the policy
        number, date of loss, and a brief description of the damage ready. As
        with any property insurance claim, prompt reporting is important both
        to comply with policy conditions and to begin the documentation
        process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Document Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thorough documentation is critical for FAIR Plan claims. Photograph
        and video all damage before any cleanup or temporary repairs. Save
        receipts for all emergency expenses including hotel stays, meals, and
        temporary repairs. Create a written inventory of damaged or destroyed
        personal property with descriptions, approximate ages, and estimated
        values. The FAIR Plan, like any insurer, will require documentation to
        support every element of the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Understand the Adjuster Assignment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan does not maintain its own staff of field adjusters in the
        way that large carriers do. Instead, it contracts with independent
        adjusting firms and third-party administrators to handle claims. That
        means the adjuster assigned to a FAIR Plan claim may be handling files
        for multiple carriers simultaneously and may not be deeply familiar
        with FAIR Plan-specific policy provisions. You might consider not
        assuming the assigned adjuster is an expert on what the FAIR Plan
        policy does and does not cover &mdash; verify the coverage analysis
        independently and put disagreements in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Request Advance Payments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California regulations require insurers, including the FAIR Plan, to
        provide advance payments when liability is reasonably clear. If a
        wildfire destroyed a home and the FAIR Plan policy was in force, there
        should be no dispute about whether the loss is covered. You might
        consider requesting advance payments for additional living expenses
        and partial dwelling payments as soon as possible &mdash; in writing
        &mdash; rather than waiting for the full adjustment to be completed
        before asking for money to cover immediate needs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Coordinate with the DIC Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] hover:underline">
          Difference in Conditions (DIC) policy
        </Link>{' '}
        is in place, coordinating between the FAIR Plan and the DIC carrier
        is one of the most important &mdash; and most complex &mdash; aspects
        of the claim. The DIC policy typically sits on top of the FAIR Plan
        and covers perils and amounts that the FAIR Plan does not. The two
        policies must be adjusted together to maximize the total recovery, and
        small differences in how each carrier interprets cause of loss, scope,
        or valuation can shift tens or hundreds of thousands of dollars
        between the two files.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        CDI Examination Findings: Systemic Claims-Handling Failures
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) has conducted
        examinations of the FAIR Plan&rsquo;s claims-handling practices and
        identified systemic failures that affect policyholders across the
        board. These findings include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Delays in claim acknowledgment and investigation.</strong>{' '}
          The FAIR Plan has been cited for failing to acknowledge claims
          within the timeframes required by California&rsquo;s Fair Claims
          Settlement Practices Regulations.
        </li>
        <li>
          <strong>Inadequate communication with policyholders.</strong> CDI
          found that policyholders were not being kept informed of the status
          of their claims or the reasons for delays.
        </li>
        <li>
          <strong>Insufficient advance payments.</strong> Despite regulatory
          requirements to provide advance payments when liability is
          reasonably clear, the FAIR Plan was found to be slow in issuing
          these payments to policyholders displaced by covered losses.
        </li>
        <li>
          <strong>Inconsistent claim valuations.</strong> CDI identified
          concerns about the consistency and accuracy of damage assessments,
          particularly in catastrophic loss situations where the FAIR Plan
          was relying heavily on third-party adjusting firms.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These findings reinforce the importance of policyholders being
        proactive in documenting their claims, requesting payments in writing,
        and keeping detailed records of all communications with the FAIR Plan
        and its adjusters.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Aliff v. California FAIR Plan (2025): Smoke-Damage Limitations Struck Down
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan&apos;s policy form has limited smoke-damage coverage to
        damage that caused a &ldquo;permanent physical change&rdquo; visible to
        the unaided eye. Plaintiffs have alleged in California litigation that
        this language was applied to deny or minimize smoke claims even where
        independent testing confirmed contamination, on the theory that the
        contamination was not visible on the surface. In{' '}
        <em>Aliff v. California FAIR Plan Association</em> (L.A. Super. Ct.
        Case No. 21STCV20095, Hon. Stuart M. Rice, June 24, 2025), the Los
        Angeles Superior Court granted in part the plaintiff&rsquo;s motion
        for summary adjudication, holding that the restrictive language was
        narrower than the coverage required by{' '}
        <strong>California Insurance Code &sect; 2070</strong>, the Standard
        Fire Policy statute that sets the floor for fire-insurance coverage in
        this state. The court relied on the California Supreme
        Court&rsquo;s definition of &ldquo;direct physical loss or damage&rdquo;
        in <em>Another Planet Entertainment, LLC v. Vigilant Insurance Co.</em>{' '}
        (2024) 15 Cal.5th 1106, 548 P.3d 303, which held that &ldquo;physical
        alteration&rdquo; &ldquo;need not be visible to the naked eye.&rdquo;
        An insurer can write broader coverage than &sect; 2070 requires
        &mdash; but it cannot write narrower coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Important context: <em>Aliff</em> is a trial-court ruling, not a
        published appellate decision, so it is persuasive authority rather
        than binding precedent on other courts. Reports following the ruling
        indicate the FAIR Plan has been updating its policy language and that
        some subsequent denial rationales rely on the <em>Another Planet</em>{' '}
        &ldquo;distinct, demonstrable and physical alteration&rdquo; standard
        itself, meaning the next round of disputes is likely to focus on
        whether laboratory testing satisfies that standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulator has also weighed in. On July 31, 2025, the California
        Department of Insurance issued an Order to Show Cause and
        cease-and-desist against the FAIR Plan (CDI Press Release No.
        054-2025), based on a market conduct examination that documented 418
        violations of California consumer-protection law in FAIR Plan claim
        handling. The OSC focuses on the same smoke-damage denial pattern{' '}
        <em>Aliff</em> addressed. The current status of any specific FAIR Plan
        response, including the OSC proceedings, any appeal of <em>Aliff</em>,
        and policy-form revisions, is best confirmed through CDI press
        releases and FAIR Plan public filings.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What this means for FAIR Plan policyholders with smoke-damage claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The &ldquo;visible, permanent change&rdquo; hurdle is gone. Smoke,
          soot, and ash contamination is direct physical damage whether or not
          an adjuster can see it.
        </li>
        <li>
          Claims that were previously denied or closed on the old language may
          be eligible to be reopened or supplemented. See our guide to{' '}
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            supplemental claims
          </Link>.
        </li>
        <li>
          The ruling&apos;s rationale &mdash; that policy language cannot dip
          below &sect; 2070 &mdash; is not limited to the FAIR Plan. Any
          California admitted carrier that uses similar narrowing language on
          smoke claims is exposed to the same legal challenge.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        This summary is general information, not legal advice. Only a licensed
        California attorney can advise you on whether <em>Aliff</em> applies
        to your specific policy and claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Problems With FAIR Plan Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>ACV-only personal property payments.</strong> The base FAIR
          Plan policy pays contents at actual cash value, which means
          depreciation is applied. If your 5-year-old couch cost $2,000 new,
          the ACV payment might be $800. See our guide on{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">ACV vs. RCV</Link>.
        </li>
        <li>
          <strong>No ordinance or law coverage.</strong> If your home must be
          rebuilt to current building codes, the additional cost is not
          covered under the base FAIR Plan. This can add tens of thousands to
          your rebuild. See{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">Ordinance or Law Coverage</Link>.
        </li>
        <li>
          <strong>Limited ALE.</strong> Even with the ALE endorsement, limits
          may be insufficient for extended displacement in high-cost areas.
        </li>
        <li>
          <strong>Underinsurance.</strong> If your dwelling limit does not
          reflect actual rebuild costs, you&apos;ll face a significant gap.
          The FAIR Plan does not automatically adjust limits to keep pace with
          construction-cost inflation.
        </li>
        <li>
          <strong>Third-party adjuster turnover.</strong> Because files are
          handled by contracted firms, the adjuster on your claim may change
          mid-stream, with the new adjuster lacking familiarity with prior
          inspections, agreed scope, or open issues. Keep your own written
          record of every agreement and assignment.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Legislative Reforms: AB 226 and AB 1680
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        AB 226: The FAIR Plan Stabilization Act (enacted)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assembly Bill 226, the FAIR Plan Stabilization Act, was authored by
        Assemblymembers Lisa Calderon and David Alvarez and was enacted as{' '}
        <strong>Chapter 473, Statutes of 2025</strong> (chaptered October 9,
        2025). AB 226 does not change FAIR Plan coverage forms or consumer
        rate-setting rules. Instead, it gives the FAIR Plan new financial
        tools to manage catastrophe losses: the bill authorizes the FAIR
        Plan to access bonds, loans, and lines of credit (including bond
        financing through the California Infrastructure and Economic
        Development Bank, or IBank), with CDI approval, and to levy special
        bond-payment assessments on member insurers over time rather than the
        current 30-day assessment-payment requirement. The practical effect
        is to give the FAIR Plan an immediate cash-infusion mechanism for
        paying claims after large catastrophes without forcing admitted
        insurers to absorb the entire assessment in 30 days &mdash; a
        structural protection against the cascade risk that catastrophic
        FAIR Plan losses could trigger insurer insolvencies.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        AB 1680: The Make It FAIR Act (pending)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assembly Bill 1680, known as the Make It FAIR Act and authored by
        Assemblymember Lisa Calderon (D-Whittier) with Commissioner Ricardo
        Lara as sponsor, represents a significant effort to reform the FAIR
        Plan and expand its coverage options. The legislation would address
        several of the most critical gaps in FAIR Plan coverage, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Requiring the FAIR Plan to offer a comprehensive homeowner policy
          option that more closely resembles standard market coverage
        </li>
        <li>
          Expanding coverage to include perils currently excluded from the
          basic FAIR Plan form
        </li>
        <li>
          Strengthening claims handling standards and timelines specific to
          the FAIR Plan
        </li>
        <li>
          Addressing the FAIR Plan&rsquo;s governance structure and
          accountability to policyholders
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        As of mid-2026, AB 1680 remains in the Assembly Appropriations
        suspense file and has not been enacted. If enacted as proposed, AB
        1680 would fundamentally change the FAIR Plan from a bare-bones fire
        policy into something closer to actual homeowner insurance. That
        would reduce (though not eliminate) the need for a separate DIC
        policy and would provide meaningful additional protection for the
        hundreds of thousands of families currently relying on the FAIR Plan
        as their only fire coverage. Verify the bill&rsquo;s current status
        at the California Legislature website before relying on its
        provisions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Strategies for FAIR Plan Policyholders
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review the FAIR Plan policy carefully.</strong> You might
          consider not assuming it covers what a standard homeowner policy
          covers. Read the declarations page and the policy form to
          understand exactly what is and is not covered.
        </li>
        <li>
          <strong>Obtain a DIC policy.</strong> Work with a broker
          experienced in the surplus lines market to find a DIC policy that
          complements the FAIR Plan coverage. Ensure the DIC policy
          coordinates properly with the FAIR Plan.
        </li>
        <li>
          <strong>Document property values annually.</strong> With a 36
          percent rate increase pending and construction costs continuing to
          rise, you might consider verifying that coverage limits reflect
          current replacement costs. Being underinsured on the FAIR Plan
          while paying higher premiums is the worst of both outcomes.
        </li>
        <li>
          <strong>Keep checking the private market.</strong> The FAIR Plan
          is intended as a last resort, not a permanent solution. Have a
          broker re-check the admitted and surplus lines markets annually
          for alternatives. The{' '}
          <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] hover:underline">
            surplus lines market
          </Link>{' '}
          may offer options that were not available when the FAIR Plan
          policy was first purchased.
        </li>
        <li>
          <strong>File claims promptly and document aggressively.</strong>{' '}
          Given CDI&rsquo;s findings about the FAIR Plan&rsquo;s
          claims-handling deficiencies, passive policyholders tend to fare
          worst. Report losses immediately, follow up in writing, request
          advance payments explicitly, and keep records of every
          communication.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The FAIR Plan covers fire and a few named perils only. It is not
          comprehensive homeowner insurance.
        </li>
        <li>
          Critical exclusions include liability, theft, water damage, tree
          and falling-object damage, and (in the basic form) replacement
          cost valuation and adequate ALE.
        </li>
        <li>
          The $3 million residential cap may be insufficient for high-value
          homes, particularly in high-cost California markets.
        </li>
        <li>
          CDI has identified systemic claims-handling failures and, in the
          smoke-damage context, issued a July 31, 2025 OSC against the FAIR
          Plan (CDI Press Release No. 054-2025) documenting 418 violations.
          Policyholders benefit from being proactive in documenting and
          pursuing their claims.
        </li>
        <li>
          The 2025 <em>Aliff</em> trial-court ruling held that the FAIR
          Plan&rsquo;s narrow smoke-damage language fell below the floor set
          by California Insurance Code &sect; 2070, relying on the
          California Supreme Court&rsquo;s 2024 <em>Another Planet</em>{' '}
          decision.
        </li>
        <li>
          AB 226 (FAIR Plan Stabilization Act) was enacted in October 2025
          and provides the FAIR Plan with bond financing and longer
          assessment timelines, but it does not change consumer coverage
          forms. AB 1680 (Make It FAIR Act), which would expand coverage
          options, remains pending. Current policyholders should plan based
          on the FAIR Plan as it exists today, not on what reforms may
          eventually bring.
        </li>
        <li>
          A DIC policy is not optional for most homeowners. Without one, a
          FAIR Plan policyholder has coverage gaps that a standard
          homeowner would never accept.
        </li>
      </ul>

      <CalloutBox variant="info" title="Related Resources">
        <p>
          For more information, see the guides on{' '}
          <Link href="/resources/dic-policies" className="text-[#2E74B5] hover:underline">
            DIC policies
          </Link>
          , the{' '}
          <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] hover:underline">
            California insurance crisis
          </Link>
          ,{' '}
          <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] hover:underline">
            surplus lines carriers
          </Link>
          ,{' '}
          <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] hover:underline">
            underinsurance after a wildfire
          </Link>
          ,{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
            ACV vs. RCV
          </Link>
          ,{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law coverage
          </Link>
          , the{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            Fair Claims Settlement Practices Regulations
          </Link>
          , and{' '}
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            supplemental claims
          </Link>
          .
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With a FAIR Plan Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can help you navigate the FAIR Plan&apos;s
          limitations and maximize your recovery under every available
          coverage. Free consultation, no fee unless we recover more.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not
        constitute legal advice. Insurance policies and applicable law vary
        by state and by policy form. Consult with a licensed professional
        regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License
        #2B53445.
      </p>
    </>
  )
}
