import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Solar Panel Damage Insurance Claims: Coverage Disputes, Fire Code Setbacks, and Lease Complications',
  description:
    'Solar panels on California homes create unique insurance claim issues — Coverage A vs. B disputes, microinverter compatibility, fire code setback requirements, lease complications, and carrier tactics for underpaying panel damage.',
  summary:
    'Solar panel claims raise Coverage A versus B disputes, microinverter compatibility, fire-code setback requirements, and lease complications. Carriers underpay panel damage; know how your system is insured and the code rules that drive the true repair cost.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Every claim is different. Solar panel systems involve electrical, structural,
          fire code, and contractual considerations that vary by manufacturer, installer, local
          jurisdiction, and policy form. For guidance on your specific situation, consult a
          licensed Public Adjuster, a qualified solar contractor, or an attorney experienced in
          insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California has more residential solar installations than any other state. Since 2020,
        the California Building Standards Code (Title 24, Part 6) has required solar
        photovoltaic systems on virtually all new single-family homes. Millions of older homes
        have voluntarily installed panels as well. When a covered loss &mdash; fire, wind, hail,
        falling tree, vehicle impact &mdash; damages a solar panel system or damages the roof
        beneath it, the insurance claim becomes significantly more complicated than a standard
        roofing or structural claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the coverage disputes, code compliance issues, lease complications,
        and carrier tactics that arise in solar panel insurance claims &mdash; and how to
        protect yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage A vs. Coverage B: Are Solar Panels Part of the Dwelling?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first coverage question in any solar panel claim is classification. Under a standard
        HO-3 policy, Coverage A insures the dwelling and &ldquo;structures attached to the
        dwelling.&rdquo; Coverage B insures other structures &mdash; detached garages, sheds,
        fences, and similar items &mdash; typically at 10% of the Coverage A limit. The
        distinction matters because Coverage B has a lower limit, and some policies apply
        different deductibles or exclusions to other structures.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Roof-Mounted Systems</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Solar panels bolted to your roof through racking systems that penetrate or attach to
        the roof structure are, by any reasonable reading, attached to the dwelling. The racking
        is lag-bolted into rafters or trusses. The conduit runs through the attic or along the
        exterior wall to the electrical panel. The inverter or microinverters are permanently
        wired into the home&rsquo;s electrical system. These are not portable items sitting on
        the roof &mdash; they are integrated building components. Roof-mounted solar systems
        should be covered as part of the dwelling.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Ground-Mounted Systems</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ground-mounted solar arrays &mdash; installed on posts or frames in the yard, separate
        from the dwelling structure &mdash; are properly classified as other structures under
        Coverage B. They are not attached to the dwelling. The 10% Coverage B limit may be
        adequate for a small array, but larger ground-mounted systems can easily exceed that
        limit. If you have a ground-mounted system, check your Coverage B limit and consider an
        endorsement to increase it.
      </p>

      <CalloutBox variant="warning" title="The Personal Property Trick">
        <p>
          Some carriers attempt to classify solar panels as <strong>personal property</strong>{' '}
          under Coverage C, which typically has lower limits and applies actual cash value (ACV)
          depreciation rather than replacement cost. This is wrong for any permanently installed
          system. Solar panels bolted to your roof or cemented into the ground are not personal
          property any more than your furnace or water heater is personal property. They are
          permanently installed building components. If your carrier classifies your solar system
          under Coverage C, challenge it &mdash; this classification significantly reduces your
          recovery.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Microinverters, Optimizers, and the String Replacement Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern residential solar systems use one of three electrical architectures: string
        inverters, microinverters, or power optimizers. The architecture matters enormously for
        claims because it determines how much of the system must be replaced when only part of
        it is damaged.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">String Inverters</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Older systems use a single string inverter that converts DC power from a series
        &ldquo;string&rdquo; of panels into AC power. All panels in a string must be compatible
        with the inverter&rsquo;s voltage and current specifications. If the damaged panels are
        discontinued and the replacement panels have different electrical characteristics, the
        new panels may not be compatible with the existing inverter or the remaining panels in
        the string. In that case, the entire string &mdash; and potentially the inverter &mdash;
        must be replaced for the system to function.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Microinverters and Optimizers</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Newer systems use microinverters (one per panel) or DC power optimizers (one per panel,
        feeding a central inverter). These systems are more flexible because each panel operates
        somewhat independently. However, compatibility issues still arise. Microinverter
        manufacturers issue compatibility lists specifying which panels work with which
        microinverter models. If the damaged panel is discontinued and the replacement panel is
        not on the compatibility list for the existing microinverter, the microinverter must
        also be replaced. Enphase, the dominant microinverter manufacturer, regularly
        discontinues older models, making this a common problem on systems more than five to
        seven years old.
      </p>

      <CalloutBox variant="important" title="The Matching Problem Is Real">
        <p>
          Insurance carriers routinely approve replacement of only the physically damaged panels
          and refuse to pay for the additional panels, inverters, or optimizers that must be
          replaced for electrical compatibility. This is a{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss
          </Link>{' '}
          dispute. A solar system that does not function because the replacement panels are
          electrically incompatible with the surviving components has not been repaired &mdash;
          it has been left broken. Get a written assessment from a licensed solar contractor
          documenting the incompatibility. The carrier owes for a functioning system, not a
          collection of mismatched parts.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Production Loss During Repairs: Is Lost Energy Covered?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a solar system is damaged or must be removed for roof repairs, the homeowner loses
        energy production for the duration. In California, where net energy metering (NEM)
        credits offset utility bills, this lost production has a calculable dollar value. A
        typical 8 kW residential system in Southern California produces roughly $150 to $250
        per month in energy value. If the system is offline for three to six months during roof
        replacement &mdash; a common timeline &mdash; the homeowner loses $450 to $1,500 or
        more in energy production.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether this is covered depends on your policy language and the nature of the loss. If
        you are displaced and receiving additional living expenses (ALE) under Coverage D, the
        lost energy production is arguably irrelevant because you are not living in the home
        and not paying the utility bill. But if you remain in the home while the roof is
        repaired and the solar system is disconnected, your utility costs increase &mdash; and
        that increase is a direct consequence of the covered loss. Document your pre-loss
        utility bills and solar production data (most systems have monitoring apps with
        historical data) to establish the baseline and quantify the loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Leased Panels and Power Purchase Agreements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A significant percentage of California residential solar systems are not owned by the
        homeowner. They are owned by a third party &mdash; most commonly Tesla (formerly
        SolarCity), Sunrun, Vivint, or Sunnova &mdash; under a lease agreement or power
        purchase agreement (PPA). This creates an insurable interest problem that complicates
        claims.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">The Insurable Interest Issue</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your homeowner&rsquo;s insurance covers property you own. If the solar panels on your
        roof belong to Tesla or Sunrun, you may not have an insurable interest in the panels
        themselves. The lease company carries its own insurance on the equipment. However, you
        do have an insurable interest in your roof &mdash; and removing and reinstalling leased
        panels to access the roof for covered repairs is a cost the insurer owes. That cost
        is typically $2,000 to $8,000 or more depending on system size and complexity.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Removal and Reinstallation (R&amp;R) Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss requires roof replacement, the solar panels must come off before
        the roof work begins and go back on afterward. Most lease agreements require the
        homeowner to use the leasing company&rsquo;s approved installer for any removal and
        reinstallation work. These companies charge a premium for R&amp;R services, and the
        homeowner has no ability to shop for a lower price. The R&amp;R cost is part of the
        repair cost caused by the covered loss and should be included in the claim under
        Coverage A.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coordination Between Insurer and Lease Company
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Getting a leased solar system removed and reinstalled requires coordination between
        your insurance carrier, the solar lease company, the roofing contractor, and
        potentially the local building department. The lease company may require advance
        notice, restrict which contractors can work near their equipment, and refuse to
        reinstall until they inspect the new roof. These delays extend the repair timeline
        and may increase your ALE claim. Document every communication and every delay caused
        by the lease company&rsquo;s requirements.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fire Code Setback Requirements and Ordinance or Law Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most commonly overlooked issues in solar panel claims. The
        California Fire Code (Title 24, Part 9, based on the International Fire Code) requires
        specific clear pathways on roofs for firefighter access. These requirements include a
        minimum 36-inch-wide pathway from the eave to the ridge on residential roofs, as well
        as setbacks from ridges, hips, and valleys. The specific requirements vary by
        jurisdiction and fire district, but the 3-foot access pathway is standard across
        California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the insurance issue arises: many solar systems installed before current
        fire code requirements took effect do not comply with today&rsquo;s setback rules. The
        panels may cover the entire roof area with no firefighter access pathways. The system
        was legal when installed, but it does not meet current code.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss requires the solar system to be removed and reinstalled &mdash;
        whether because the panels were damaged or because the roof beneath them needs repair
        &mdash; the local building department may require that the reinstalled system comply
        with current fire code. That means the panels must be repositioned to create the
        required access pathways. This repositioning reduces the available roof area, which
        often means fewer panels can fit back on the roof.
      </p>

      <CalloutBox variant="important" title="This Is an Ordinance or Law Issue">
        <p>
          When a building code that did not exist when the system was installed now requires
          modifications to the reinstalled system, the increased cost is a textbook application
          of{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            ordinance or law (O&amp;L) coverage
          </Link>
          . O&amp;L coverage exists to pay for the increased cost of repair caused by the
          enforcement of current codes. If the fire code setback requirement means you lose
          panel capacity, the O&amp;L coverage should pay for higher-efficiency replacement
          panels that produce equivalent output from the smaller array area, or for a
          ground-mounted supplemental array, or for the lost production value. The homeowner
          should not bear the cost of a code change they did not cause.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Title 24 Solar Mandate and Total Loss Rebuilds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Since January 1, 2020, the California Energy Code (Title 24, Part 6) requires solar
        photovoltaic systems on all new single-family residential construction with limited
        exceptions. If your home is a total loss and you rebuild, the new home must include a
        code-compliant solar system regardless of whether the original home had one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the original home had no solar panels, the cost of the mandated solar system on the
        rebuild is an increased cost of construction caused by current code requirements. This
        falls squarely under{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>
        . If the original home had a solar system that was destroyed, the replacement system
        must meet current code, which may require a larger or more efficient system than what
        was there &mdash; again, an O&amp;L issue. Review our{' '}
        <Link href="/resources/betterment-and-improvement" className="text-blue-700 underline hover:text-blue-900">
          betterment article
        </Link>{' '}
        to understand why the carrier cannot call a code-mandated system an
        &ldquo;upgrade.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hail, Wind, and Micro-Cracking: Hidden Damage That Reduces Output
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Solar panels are engineered to withstand significant weather exposure, but they are not
        invulnerable. Hail impacts, wind-borne debris, and thermal stress can cause
        micro-cracking in the photovoltaic cells beneath the tempered glass surface. These
        micro-cracks are invisible to the naked eye but progressively reduce the panel&rsquo;s
        electrical output. A panel that looks undamaged on visual inspection may be producing
        20% to 40% less power than its rated capacity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Detecting micro-cracks requires specialized testing. Electroluminescence (EL) imaging
        passes a current through the panel and photographs the resulting luminescence &mdash;
        cracked cells appear as dark areas. Infrared (IR) thermography identifies hot spots
        where cracked cells create resistance. IV curve tracing measures the panel&rsquo;s
        actual electrical output against its rated specifications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely send an adjuster who looks at the panels from the ground, sees no
        visible damage, and denies the claim. A visual inspection is not adequate for solar
        panels. If your area experienced a significant hail event, high winds with debris, or
        any impact event, have a qualified solar technician perform EL imaging or IV curve
        testing on each panel. If the testing shows reduced output from micro-cracking caused
        by the covered event, those panels need replacement &mdash; even if they
        &ldquo;look fine.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics in Solar Panel Claims
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. Classifying Panels as Personal Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers classify permanently installed solar systems as
        personal property instead of building property (Coverage A). This reduces
        limits and applies depreciation. A roof-mounted, permanently wired solar system is a
        building component. Challenge any Coverage C classification.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. Refusing to Pay for System Compatibility
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier approves replacement of only the physically damaged panels and refuses to
        pay for the additional components needed to make the replacement panels work with the
        existing system. This leaves you with a non-functional solar system. A repair that
        results in a non-functional system is not a repair. Get a solar contractor&rsquo;s
        written assessment of what is needed for a functional system and submit it as part of
        your{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss
        </Link>
        .
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. Denying Fire Code Compliance Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier pays to reinstall the panels in their original positions and refuses to pay
        the additional cost of reconfiguring the array to meet current fire code setback
        requirements. This is an ordinance or law coverage issue. The building department will
        not approve a reinstallation that violates current fire code, regardless of what the
        carrier is willing to pay.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Excluding Solar R&amp;R from the Roof Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier writes a roof replacement estimate that does not include the cost of
        removing and reinstalling the solar panels that sit on the roof. The solar panels
        cannot levitate while the roof is replaced. Removal and reinstallation is a necessary
        cost of the roof repair. Include R&amp;R in your initial claim, not as a supplement
        the carrier can more easily challenge.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        5. Applying Excessive Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Solar panels have a typical manufacturer warranty of 25 to 30 years and an expected
        useful life of 30 to 40 years. A carrier that depreciates a 10-year-old panel by 50%
        is applying depreciation that does not reflect the panel&rsquo;s actual remaining
        useful life. The standard degradation rate for modern crystalline silicon panels is
        approximately 0.5% per year. A 10-year-old panel still produces roughly 95% of its
        original rated output. Depreciation should reflect actual condition, not arbitrary
        percentages.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        6. Calling the Title 24 Mandate &ldquo;Betterment&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a total loss rebuild where the original home had no solar system, the carrier may
        argue that installing the code-mandated solar system is{' '}
        <Link href="/resources/betterment-and-improvement" className="text-blue-700 underline hover:text-blue-900">
          betterment
        </Link>{' '}
        because the homeowner is getting something they did not have before. This argument
        fails for the same reason it fails in every code-upgrade context: the homeowner did not
        choose this. The law requires it. The covered loss necessitated the rebuild, and
        current code requires solar. That is exactly what ordinance or law coverage is for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps to Protect Your Solar Panel Claim
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document your system before a loss.</strong> Record the manufacturer, model
          number, wattage rating, serial number, and installation date of every panel. Save
          your monitoring app data showing production history. Keep a copy of your solar
          contract (purchase or lease) and the original permit.
        </li>
        <li>
          <strong>Get a qualified solar contractor assessment immediately after a loss.</strong>{' '}
          Do not rely on the insurance adjuster to evaluate solar equipment. A licensed solar
          contractor can identify micro-cracking, inverter damage, wiring degradation, and
          compatibility issues that a general adjuster will miss.
        </li>
        <li>
          <strong>Request EL imaging or IV curve testing after hail or impact events.</strong>{' '}
          Visual inspection alone cannot detect the most common form of solar panel
          damage. Insist on technical testing and include the testing cost in your claim.
        </li>
        <li>
          <strong>Include R&amp;R costs in your roof claim from day one.</strong> If you have
          panels on a damaged roof, the removal and reinstallation cost is part of the
          repair &mdash; not a separate issue. Present it as a single repair scope.
        </li>
        <li>
          <strong>Check current fire code setback requirements before reinstallation.</strong>{' '}
          Contact your local fire marshal or building department to confirm the setback
          requirements that will apply to the reinstalled system. If the requirements have
          changed since original installation, document this and include the compliance cost
          under ordinance or law coverage.
        </li>
        <li>
          <strong>If you have leased panels, contact the leasing company immediately.</strong>{' '}
          Understand their requirements for R&amp;R, who is authorized to perform the work,
          their timeline, and their insurance claim process. Delays caused by the lease
          company&rsquo;s requirements may extend your ALE.
        </li>
        <li>
          <strong>Document production loss.</strong> Download your monitoring data showing
          pre-loss production levels and post-loss production (or zero production if the system
          is offline). Compare your utility bills before and after the loss.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Review Your Full Claim Scope">
        <p>
          Solar panel damage rarely occurs in isolation. If wind, hail, fire, or a falling tree
          damaged your solar system, it likely damaged your roof and possibly other components
          as well. Review our{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            Scope of Loss article
          </Link>{' '}
          and{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            Code Upgrade Coverage guide
          </Link>{' '}
          to ensure your claim captures the full cost of restoring your home and its systems
          to proper working condition.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Solar panel claims involve coverage classification issues, electrical compatibility
        requirements, fire code compliance obligations, and lease complications that do not
        exist in standard property claims. Carriers exploit this complexity by
        misclassifying panels, ignoring compatibility, refusing code compliance costs, and
        excluding R&amp;R from roof estimates. None of these tactics change the fundamental
        obligation: the insurer owes the cost of restoring your property &mdash; including
        its solar energy system &mdash; to its pre-loss, code-compliant condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not accept an estimate that ignores the solar panels on your roof. Do not accept
        a repair that leaves your system non-functional. Do not accept a betterment deduction
        for code compliance you did not choose. Document your system, get qualified technical
        assessments, and hold the carrier to its obligation to pay the actual cost of repair
        &mdash; all of it.
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
