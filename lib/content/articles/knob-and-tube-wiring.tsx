import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Knob-and-Tube and Aluminum Wiring in Claims",
  description:
    "When a covered loss opens walls and reveals outdated wiring, rewiring is a necessary repair cost, not an upgrade. Here are the code rules and California issues.",
  summary:
    'When a covered loss opens walls and exposes knob-and-tube or aluminum wiring, the rewiring needed to safely complete the repair is a covered repair cost, not a betterment upgrade. Cite the code requirement to fight a carrier\'s denial.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Every claim is different. Electrical code requirements vary by jurisdiction and
          are updated on regular cycles. For guidance on your specific situation, consult a
          licensed Public Adjuster, a licensed electrical contractor (C-10), or an attorney
          experienced in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Knob-and-tube (K&amp;T) wiring was the standard residential electrical installation
        method from the 1880s through the 1940s. Aluminum branch circuit wiring was widely
        used from roughly 1965 through 1975, when copper prices spiked. Both wiring types are
        legal to leave in place in an existing home &mdash; no California regulation requires a
        homeowner to proactively replace them. But when a covered loss &mdash; fire, water,
        falling tree, vehicle impact &mdash; damages your home and the resulting repairs require
        opening walls, ceilings, or attic spaces, the electrician discovers what has been
        hidden for decades. And once the walls are open, the California Electrical Code requires
        that the exposed wiring be brought to current standards before the walls are closed
        again.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is structurally identical to the{' '}
        <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
          asbestos and lead paint
        </Link>{' '}
        situation: the hazardous or non-compliant condition existed before the loss, but the
        obligation to address it arose solely because the covered loss triggered repairs that
        exposed it. The additional cost is part of the repair, and the insurer is responsible
        for paying it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Knob-and-Tube and Aluminum Wiring Are Found
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Knob-and-Tube Wiring</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        K&amp;T wiring is found primarily in homes built before 1950. In California, this
        includes huge numbers of homes in Los Angeles, San Francisco, Oakland, Berkeley,
        Pasadena, Long Beach, and other cities with pre-war housing stock. K&amp;T wiring
        runs individual hot and neutral conductors along ceramic &ldquo;knob&rdquo; insulators
        attached to framing members, passing through framing via ceramic &ldquo;tube&rdquo;
        insulators. The wiring has no ground conductor &mdash; a critical deficiency by modern
        standards. It was designed to be air-cooled, running through open spaces between
        framing with adequate ventilation around the conductors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The system worked acceptably in its era. But modern electrical loads far exceed what
        K&amp;T circuits were designed to carry, and the rubber and cloth insulation on the
        conductors degrades over time, becoming brittle and cracked. The most dangerous
        condition arises when insulation (fiberglass, cellulose, or blown-in foam) has been
        added around K&amp;T wiring, which was never designed to be enclosed. The insulation
        traps heat around conductors that were engineered for air cooling, creating a fire
        risk.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Aluminum Branch Circuit Wiring</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Aluminum branch circuit wiring (as distinguished from aluminum service entrance cable,
        which is standard and not problematic) was used in single-family homes from
        approximately 1965 through 1975. In California, this corresponds to a massive wave
        of suburban construction &mdash; tract homes in the San Fernando Valley, Orange County,
        the Inland Empire, and the San Diego suburbs. Aluminum wiring is found in an estimated
        2 million homes nationwide.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The issue with aluminum branch circuits is not the wire itself but the connections.
        Aluminum expands and contracts more than copper when heated and cooled (a property
        called differential thermal expansion). Over time, this loosens connections at outlets,
        switches, and splices, creating resistance and heat buildup. The Consumer Product
        Safety Commission (CPSC) has found that homes with aluminum wiring are 55 times more
        likely to have connections reach fire-hazard conditions than homes with copper wiring.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Covered Loss Triggers Electrical Code Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Electrical Code (Title 24, Part 3, based on the National Electrical
        Code, NFPA 70) governs all electrical work performed in the state. The key principle
        is that any <em>new</em> electrical work must comply with the current code in effect
        at the time the work is performed. When a covered loss requires repairs that involve
        opening walls and disturbing or replacing electrical components, the permit and
        inspection process requires that the new and altered work meet current code.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Knob-and-Tube: Cannot Be Buried in Insulation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        NEC &sect; 394.12 prohibits new K&amp;T installations entirely. More critically for
        claims purposes, NEC &sect; 394.12(B) prohibits K&amp;T wiring in hollow spaces where
        it is &ldquo;concealed by insulation,&rdquo; and the California Electrical Code
        enforces this provision. When a fire or water loss requires replacing insulation in
        walls or attic spaces where K&amp;T wiring is present, the wiring must be replaced
        before new insulation can be installed. You cannot legally insulate around K&amp;T
        wiring. The electrician must either remove and replace the K&amp;T circuits in the
        affected areas or reroute them so they are not enclosed in insulation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not an optional upgrade. The building inspector will not sign off on the
        repair if K&amp;T wiring remains buried in new insulation. The repair cannot be
        completed without addressing the wiring. Therefore, the wiring replacement is a
        necessary cost of the covered repair.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Aluminum Wiring: CO/ALR Devices and COPALUM Remediation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When repairs expose aluminum branch circuit connections, the California Electrical Code
        requires that any altered or new connections comply with current standards. Standard
        copper-only devices cannot be used on aluminum circuits &mdash; they require
        CO/ALR-rated (Copper-Aluminum Revised) outlets, switches, and connectors, or the CPSC-
        recommended COPALUM crimp connector system that uses a special tool to permanently
        attach a copper pigtail to each aluminum conductor. If the scope of the covered repair
        involves replacing outlets, switches, or junction boxes on aluminum circuits, the
        replacement devices must be aluminum-compatible, and the electrician may recommend or
        the inspector may require pigtailing the entire affected circuit for safety.
      </p>

      <CalloutBox variant="important" title="The Walls Are Already Open">
        <p>
          The critical fact in every K&amp;T and aluminum wiring claim is the same: the
          homeowner did not ask to have their walls opened. The covered loss did that. Once the
          walls are open and the outdated wiring is exposed, the electrical code requires it to
          be addressed before the walls are closed. The homeowner cannot un-open the walls. They
          cannot pretend the wiring was not found. The code compliance cost exists because the
          covered peril created the condition that triggered the code requirement. That is the
          definition of a covered repair cost.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Pays: The Insurer, Because This Is a Repair Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer owes the cost of repairing your home after a covered loss. The cost of
        repairing your home includes every cost that is legally required to complete the
        repair. If the California Electrical Code requires rewiring before the walls can be
        closed and the repair can pass inspection, that rewiring cost is part of the repair
        cost &mdash; not an optional improvement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor cannot legally close walls over K&amp;T wiring buried in new insulation.
        An electrician cannot legally install standard copper-only devices on aluminum branch
        circuits. These are not choices. They are code requirements triggered by the repair
        work the covered loss necessitated. The additional cost exists solely because of the
        covered loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Ordinance or Law Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your policy includes{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law (O&amp;L) coverage
        </Link>
        , electrical code upgrade costs are a textbook application of that coverage. O&amp;L
        coverage exists to pay the increased cost of repair caused by the enforcement of
        building codes, ordinances, or regulations that apply only because the repair work
        triggers them. Before the loss, you had no obligation to rewire your home. After the
        loss, the California Electrical Code requires that the exposed and affected wiring be
        brought to current standards as a condition of completing the repair. This is exactly
        the scenario O&amp;L coverage is designed for.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even without a separate O&amp;L endorsement, rewiring costs caused by a covered loss
        are arguably part of the base Coverage A repair cost. The repair cannot legally be
        completed without addressing the wiring. But having O&amp;L coverage provides a
        second, independent basis for recovery and eliminates any ambiguity about whether
        code compliance costs are covered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics for Avoiding Electrical Upgrade Costs
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. &ldquo;It&rsquo;s Pre-Existing&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier argues that the K&amp;T or aluminum wiring existed before the loss and
        is not &ldquo;caused by&rdquo; the covered peril. This is the same flawed argument
        carriers use for{' '}
        <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
          asbestos and lead paint
        </Link>
        . Yes, the wiring was there before the loss. But there was no obligation to replace
        it. The replacement obligation arose only because the covered loss opened the walls
        and triggered code compliance requirements. The covered loss is the efficient
        proximate cause of the rewiring cost.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. &ldquo;It&rsquo;s Maintenance&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers characterize outdated wiring as a &ldquo;maintenance&rdquo; issue the
        homeowner should have addressed before the loss. This is wrong. There is no
        maintenance obligation to proactively replace functional K&amp;T or aluminum wiring
        in an existing home. The California Electrical Code does not require it. No building
        department issues violations for wiring that was legal when installed and has not been
        altered. Characterizing a legally permitted condition as &ldquo;maintenance
        neglect&rdquo; is a misrepresentation of the code.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. &ldquo;It&rsquo;s{' '}
        <Link href="/resources/betterment-and-improvement" className="text-blue-700 underline hover:text-blue-900">
          Betterment
        </Link>
        &rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier argues that replacing K&amp;T or aluminum wiring with modern copper NM-B
        (Romex) wiring constitutes betterment because the homeowner ends up with
        &ldquo;better&rdquo; wiring than they had before. This argument fails for the same
        reason it always fails in code-upgrade situations: the homeowner did not request the
        upgrade. They did not decide to rewire their home. A covered peril damaged their
        home, the repairs required opening walls, and the building code requires that the
        exposed wiring be brought to current standards. The &ldquo;improvement&rdquo; was
        forced on them by the combination of the covered loss and the applicable code. They
        had no choice.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Limiting Rewiring to the Damaged Area Only
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier may agree to pay for rewiring in the specific rooms that were damaged but
        refuse to pay for rewiring circuits that pass through the damaged area on their way
        to undamaged rooms. Electrical circuits do not respect room boundaries. A K&amp;T
        circuit that serves the damaged bedroom may also serve the adjacent hallway and
        bathroom. If the circuit must be replaced to comply with code in the damaged area, the
        entire circuit &mdash; including the portions running to other rooms &mdash; may need
        replacement because you cannot splice modern NM-B cable to K&amp;T wiring and pass
        inspection. Get your electrician&rsquo;s written assessment of the full scope of
        rewiring required by the code compliance work in the damaged area.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        5. Ignoring the Electrical Entirely
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common tactic: the carrier&rsquo;s repair estimate includes drywall, paint,
        flooring, and other visible repairs but contains no line items for electrical work
        beyond replacing damaged outlets or switches. The estimate assumes the walls will be
        opened and closed without any electrical code compliance work. This is not a realistic
        repair scope for any pre-1950 home with K&amp;T wiring or any 1965&ndash;1975 home
        with aluminum branch circuits where the repairs involve opening walls. The electrical
        work is not optional &mdash; the building inspector will require it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Catch-22: Can&rsquo;t Insure It, Can&rsquo;t Replace It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurance carriers will not write new policies &mdash; or will non-renew existing
        policies &mdash; on homes with known K&amp;T wiring. This creates a perverse
        situation. The homeowner cannot get insurance because of the K&amp;T wiring, but they
        also cannot afford the $15,000 to $40,000 or more it costs to rewire a whole house
        without a claim to pay for it. And because no regulation requires proactive replacement,
        they have no code-based reason to force the issue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss finally opens the walls and forces the issue, the carrier that
        has been collecting premiums &mdash; possibly for years on a home it knew had K&amp;T
        wiring &mdash; argues it should not pay for the rewiring. The carrier accepted the
        risk of insuring a K&amp;T home, collected premiums reflecting that risk, and now
        wants to avoid paying the foreseeable consequence when a loss occurs. This is worth
        documenting in your correspondence with the carrier.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps to Protect Your Claim
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get a licensed electrician&rsquo;s assessment before the walls close.</strong>{' '}
          As soon as the repair work exposes wiring, have a licensed electrical contractor
          (C-10 license) inspect and document what was found. The assessment should identify
          the wiring type, its condition, the specific code provisions that apply, and the
          scope of rewiring required to bring the affected areas into compliance. Do not let
          the carrier&rsquo;s adjuster close the walls before this assessment is complete.
        </li>
        <li>
          <strong>Photograph everything before it gets covered up.</strong> Photograph the
          K&amp;T knobs and tubes, the deteriorated insulation, the aluminum connections with
          visible oxidation or heat damage, and the relationship between the wiring and the
          damaged area. Once the walls are closed, the evidence is gone.
        </li>
        <li>
          <strong>Get a detailed written estimate for the electrical work.</strong> The
          electrician&rsquo;s estimate should break out each component: demolition and access,
          removal of old wiring, installation of new circuits, panel upgrades (if the existing
          panel cannot accommodate the new circuits), AFCI and GFCI protection as required by
          current code, permits, and inspection.
        </li>
        <li>
          <strong>Include the electrical work in your claim as part of the repair, not as a
          separate request.</strong> Present the repair scope as a single, integrated package
          that includes demolition, electrical, framing, insulation, drywall, and finishes. The
          electrical work is not a side project &mdash; it is a necessary component of the
          covered repair.
        </li>
        <li>
          <strong>Cite the specific code provisions.</strong> Reference the California
          Electrical Code (Title 24, Part 3), NEC &sect; 394.12 (prohibition on K&amp;T in
          insulated spaces), and any local amendments. This puts the carrier on notice that
          the requirements are mandatory, not discretionary.
        </li>
        <li>
          <strong>Request the carrier&rsquo;s denial in writing.</strong> If the adjuster
          verbally tells you the rewiring is &ldquo;not covered,&rdquo; demand a written
          denial citing the specific policy language they rely on. California&rsquo;s Fair
          Claims Settlement Practices regulations (10 CCR &sect; 2695.7(b)) require written
          explanations for coverage denials or limitations.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Close the Walls Prematurely">
        <p>
          Once the walls are closed and the drywall is finished, there is no practical way to
          prove what wiring was found inside. If you allow the carrier&rsquo;s preferred
          contractor to complete the drywall before the electrical assessment is done, you lose
          your evidence. Insist on a licensed electrician&rsquo;s inspection and documentation
          while the walls are still open. This is the one time the wiring is visible and
          accessible &mdash; do not waste it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Code Requirements That May Apply
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss triggers electrical work in an older home, the code compliance
        requirements extend beyond just the wiring itself. Depending on the scope of the
        repair, the following may also be required under the current California Electrical Code:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Arc-Fault Circuit Interrupter (AFCI) protection</strong> &mdash; NEC
          &sect; 210.12 requires AFCI protection on virtually all 15- and 20-ampere branch
          circuits in dwelling units. If circuits are being replaced or significantly altered,
          AFCI breakers or outlets will likely be required.
        </li>
        <li>
          <strong>Ground-Fault Circuit Interrupter (GFCI) protection</strong> &mdash; the
          current code requires GFCI protection in kitchens, bathrooms, garages, outdoors,
          basements, laundry areas, and other locations. K&amp;T circuits serving these areas
          have no GFCI protection. When rewired, GFCI protection must be added.
        </li>
        <li>
          <strong>Electrical panel upgrades</strong> &mdash; many older homes with K&amp;T
          wiring have 60-amp or 100-amp electrical panels with obsolete breaker types (Federal
          Pacific Stab-Lok, Zinsco/Sylvania). If the rewiring adds circuits or the panel
          cannot accommodate modern AFCI/GFCI breakers, a panel upgrade may be required.
        </li>
        <li>
          <strong>Grounding and bonding</strong> &mdash; K&amp;T wiring has no equipment
          grounding conductor. Modern code requires grounding on all circuits. New circuits
          replacing K&amp;T must include a grounding conductor, and the grounding electrode
          system may need upgrading.
        </li>
        <li>
          <strong>Tamper-resistant receptacles</strong> &mdash; NEC &sect; 406.12 requires
          tamper-resistant receptacles in all dwelling unit locations. Any new receptacles
          installed as part of the rewiring must be tamper-resistant.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these requirements adds cost to the repair. Each is mandatory under the current
        California Electrical Code. None is optional or discretionary. All are covered repair
        costs or, at minimum,{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>{' '}
        costs triggered by the covered loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has a disproportionately large number of homes with outdated wiring because
        of its building history. San Francisco, Oakland, and Berkeley have dense concentrations
        of pre-1920 homes with K&amp;T wiring &mdash; many of which have been modified,
        extended, or partially updated by previous owners without permits. Los Angeles has
        enormous numbers of 1920s&ndash;1940s bungalows and Craftsman homes with original
        K&amp;T. The San Fernando Valley, Orange County, and Inland Empire have extensive
        1965&ndash;1975 tract housing stock with aluminum branch circuits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the 2025 Palisades and Eaton fires, thousands of pre-war homes in Pacific
        Palisades, Altadena, and surrounding areas sustained fire, smoke, and water damage that
        required opening walls. Many of these homes contained K&amp;T wiring that had been
        undisturbed for decades. The rebuilding and repair process for these homes necessarily
        includes electrical code compliance &mdash; and the cost is substantial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s efficient proximate cause doctrine also strengthens the policyholder&rsquo;s
        position. When the covered peril (fire, water, falling tree) is the event that
        necessitated the repairs, and the repairs are what triggered the code requirement, the
        covered peril is the efficient proximate cause of the rewiring cost. The carrier cannot
        sever the chain of causation by pointing to the pre-existing wiring as a separate
        &ldquo;cause&rdquo; of the cost.
      </p>

      <CalloutBox variant="tip" title="Check All Code Upgrade Requirements">
        <p>
          Electrical wiring is far from the only code upgrade issue in older homes. When a
          covered loss triggers repairs in a pre-1980 home, the same walls that reveal K&amp;T
          wiring may also reveal{' '}
          <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
            asbestos and lead paint
          </Link>
          , inadequate structural framing, missing fire blocking, or non-compliant plumbing.
          Review our{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            Code Upgrade Coverage guide
          </Link>{' '}
          and{' '}
          <Link href="/resources/betterment-and-improvement" className="text-blue-700 underline hover:text-blue-900">
            Betterment article
          </Link>{' '}
          to ensure your claim captures every code compliance cost the covered loss triggered.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knob-and-tube and aluminum wiring in your home are not your fault, not a maintenance
        issue, and not a reason for the insurer to reduce your claim. When a covered loss opens
        your walls and exposes wiring that the California Electrical Code requires to be
        addressed before the repair can be completed, the rewiring cost is part of the repair.
        The homeowner did not choose to open the walls. The homeowner did not choose to trigger
        a code compliance obligation. The covered peril did both.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not accept an estimate that pretends the wiring does not exist. Do not accept a
        betterment deduction for code compliance you did not request. Do not let the walls
        close before a licensed electrician has documented what is inside them. Get the
        assessment, get the estimate, include it in your claim from day one, and hold the
        carrier to its obligation to pay the actual cost of repairing your home &mdash; wiring
        and all.
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
