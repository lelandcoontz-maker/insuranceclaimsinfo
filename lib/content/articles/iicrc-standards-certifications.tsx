import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'IICRC Standards and Certifications in Insurance Claims',
  description:
    'What the IICRC standards (S500, S520, S540, S700, S760) actually say, what the certifications (WRT, AMRT, FSRT, OCT) mean, and how carriers use them to justify — and deny — insurance claim amounts.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is written by a California Licensed Public Adjuster for informational
          purposes only. It does not constitute legal, medical, or environmental consulting advice.
          Insurance policies, applicable regulations, and industry standards evolve over time.
          Consult with licensed professionals regarding your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have ever dealt with a water damage, mold, fire, or biohazard insurance claim,
        you have probably seen the letters &ldquo;IICRC&rdquo; referenced somewhere &mdash; in
        a mitigation report, on a contractor&rsquo;s business card, or in your adjuster&rsquo;s
        denial letter. Insurance carriers cite IICRC standards constantly. They cite them to
        justify what they want to pay for, and they cite them to deny what they do not want to
        pay for. Understanding what these standards actually say &mdash; and what the
        certifications after a technician&rsquo;s name actually mean &mdash; gives you a
        significant advantage in any property damage claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is the IICRC?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The IICRC &mdash; the Institute of Inspection, Cleaning and Restoration Certification
        &mdash; is an ANSI-accredited standards-developing organization (SDO). ANSI accreditation
        means the IICRC follows a formal consensus process: its standards are developed by
        committees of industry professionals, reviewed publicly, and updated on a regular cycle.
        These are not manufacturer marketing materials or trade association wish lists. They are
        consensus-based technical standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The IICRC does two things that matter for insurance claims. First, it publishes
        <strong> standards</strong> &mdash; documents like S500, S520, and S700 that define how
        restoration work should be performed. Second, it administers <strong>certifications</strong>
        &mdash; credentials like WRT, AMRT, and FSRT that demonstrate a technician has completed
        training in a specific discipline. Both are frequently misused by carriers.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        S500: Standard for Professional Water Damage Restoration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S500 is the foundational IICRC standard for{' '}
        <Link href="/resources/water-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          water damage claims
        </Link>.
        It governs how water losses should be classified, how drying should be monitored, and what
        constitutes a complete restoration. If your home had a pipe burst, appliance failure, or
        any other water intrusion event, the S500 is the standard that governs how the mitigation
        company should have handled it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Three Water Categories
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S500 classifies water damage by the contamination level of the water source. This
        classification directly affects what materials can be saved and what must be removed:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Category 1 &mdash; Clean Water.</strong> Water from a sanitary source that does
          not pose a substantial health risk. Examples: a broken supply line, a leaking faucet, or
          melting ice. Category 1 water originates from a source that is safe to drink.
        </li>
        <li>
          <strong>Category 2 &mdash; Gray Water.</strong> Water that contains significant
          contamination and has the potential to cause illness if ingested or exposed to skin.
          Examples: washing machine overflow, dishwasher discharge, toilet overflow with urine
          (no feces), and aquarium water.
        </li>
        <li>
          <strong>Category 3 &mdash; Black Water.</strong> Water that is grossly contaminated and
          can contain pathogenic, toxigenic, or other harmful agents. Examples: sewage backup,
          flooding from rivers or streams, toilet overflow with feces, and water that has been
          standing long enough to support microbial growth. Black water requires the most
          aggressive mitigation protocols &mdash; affected porous materials generally cannot be
          saved and must be removed.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The 48-Hour Rule: Category 1 Becomes Category 3">
        <p>
          This is one of the most important &mdash; and most frequently ignored &mdash; principles
          in the S500. Clean water does not stay clean. When Category 1 water contacts building
          materials and remains standing, it deteriorates. The S500 establishes that Category 1
          water not extracted and dried within approximately 48 hours should be reclassified as
          Category 3. A supply line break undiscovered for three days is no longer a &ldquo;clean
          water&rdquo; loss &mdash; it is a contaminated water loss requiring full Category 3
          protocols, including removal of affected porous materials. Insurance adjusters who
          categorize a week-old standing water event as Category 1 are not following the standard.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Four Classes of Water Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Separate from the contamination category, the S500 classifies water damage by the
        <em> extent</em> of water absorption into materials. Class determines how much drying
        equipment is needed and how long drying will take:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Class 1 &mdash; Least Amount of Absorption.</strong> Water has affected only a
          small area and has absorbed into materials with low permeance (e.g., concrete, plywood).
          Minimal drying equipment required.
        </li>
        <li>
          <strong>Class 2 &mdash; Significant Absorption.</strong> Water has wicked up walls at
          least 12 inches but less than 24 inches, or the entire carpet and cushion are wet in an
          affected area. This is the most common classification in residential water losses.
        </li>
        <li>
          <strong>Class 3 &mdash; Greatest Amount of Absorption.</strong> Water has come from
          overhead, saturating ceilings, walls, insulation, carpet, cushion, and sub-floor. This
          typically requires the most drying equipment per square foot.
        </li>
        <li>
          <strong>Class 4 &mdash; Specialty Drying.</strong> Water has been absorbed into materials
          with very low permeance &mdash; hardwood floors, plaster walls, concrete, crawl spaces,
          and stone. These materials require extended drying times and specialized equipment
          (e.g., desiccant dehumidifiers, directed heat drying systems).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers use these classifications to determine equipment needs and drying time. A
        carrier that agrees to Class 2 equipment placement on a Class 3 loss is underpaying
        the mitigation &mdash; fewer dehumidifiers, fewer air movers, and a shorter drying
        timeline than the loss actually requires.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        S520: Standard for Professional Mold Remediation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S520 is the IICRC&rsquo;s standard for{' '}
        <Link href="/resources/mold-losses" className="text-blue-700 underline hover:text-blue-900">
          mold remediation
        </Link>.
        It defines how mold should be assessed, how remediation should be conducted, and what
        post-remediation verification should look like. The most recent edition was updated in
        2024, and it made several important changes to terminology and approach.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mold Conditions: 1, 2, and 3
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S520 classifies mold contamination into three conditions that define the appropriate
        remediation response:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Condition 1 &mdash; Normal Fungal Ecology.</strong> The indoor environment
          has mold spore types and concentrations that are consistent with the normal outdoor
          environment. No remediation is required. This is the baseline &mdash; the condition
          you want to achieve <em>after</em> remediation is complete.
        </li>
        <li>
          <strong>Condition 2 &mdash; Settled Spores.</strong> Indoor mold spore levels are
          elevated compared to Condition 1, but there is no visible active growth. Settled
          spores on surfaces may indicate that an active mold source existed previously or
          exists elsewhere. Investigation is needed to determine the source.
        </li>
        <li>
          <strong>Condition 3 &mdash; Active Growth.</strong> Visible mold growth is present on
          building materials. This condition requires full remediation protocols including
          containment, engineering controls, removal of affected materials, HEPA vacuuming of
          remaining surfaces, and post-remediation verification to confirm the environment has
          been returned to Condition 1.
        </li>
      </ul>

      <CalloutBox variant="info" title="2024 S520 Update: ECM Terminology">
        <p>
          The 2024 edition of the S520 introduced updated terminology. The standard now uses
          the term &ldquo;ECM&rdquo; &mdash; Environmentally Challenged Material &mdash; to
          describe building materials that have been affected by moisture and microbial
          contamination. This replaces some of the older terminology and reflects a broader
          recognition that water-damaged materials may harbor contaminants beyond just visible
          mold. If your remediation contractor or industrial hygienist references ECM, this is
          what they are referring to. The change also matters for insurance claims because it
          more precisely defines what materials require removal versus what can be cleaned. See
          our detailed article on the{' '}
          <Link href="/resources/mold-coverage-paradox" className="text-blue-700 underline hover:text-blue-900">
            mold coverage paradox
          </Link>{' '}
          for how carriers handle mold coverage in practice.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        S540: Standard for Trauma and Crime Scene Cleanup
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S540 addresses what most people would call biohazard cleanup &mdash; remediation of
        blood, bodily fluids, and other biological contaminants from death scenes, crime scenes,
        and trauma events. This standard establishes protocols for the safe handling, removal, and
        decontamination of materials affected by bloodborne pathogens and other biohazardous
        materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters frequently underestimate biohazard remediation scope. Blood and bodily
        fluids penetrate porous building materials &mdash; drywall, carpet, wood subfloor,
        concrete &mdash; and cannot be adequately decontaminated with surface cleaning alone.
        Affected porous materials must be removed, and the underlying structure must be
        decontaminated and tested before rebuild can begin. Adjusters who scope biohazard
        remediation as surface cleaning are not following the standard. For a real-world example,
        see our article on the{' '}
        <Link href="/resources/biohazard-drywall-fraud-threat" className="text-blue-700 underline hover:text-blue-900">
          biohazard drywall fraud threat
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        S700: Standard for Professional Fire and Smoke Damage Restoration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S700 is a standard currently in development by the IICRC. It will address fire and
        smoke damage restoration &mdash; the protocols for assessing, cleaning, and restoring
        properties affected by fire and its byproducts. This standard is being developed by a
        committee of industry professionals, and when published, it will provide the same kind
        of consensus-based technical framework for{' '}
        <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          fire and smoke damage
        </Link>{' '}
        that the S500 provides for water damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The absence of a published S700 has been a gap in the industry for years. Fire and smoke
        restoration has relied on a patchwork of manufacturer guidelines and informal practices
        rather than a single consensus standard. This gap has allowed carriers to dismiss
        restoration approaches by arguing there is &ldquo;no standard requiring it.&rdquo; When
        the S700 is published, it should provide policyholders with a citable authority for fire
        and smoke remediation scope.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        S760: Standard for Wildfire Smoke Investigations and Restoration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The S760 is one of the newest IICRC standards, developed in response to the growing
        wildfire crisis across the western United States. It addresses something that earlier
        standards were not designed for: the unique contamination profile of wildfire smoke, which
        is fundamentally different from structural fire smoke.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Urban wildfire smoke contains not only combustion byproducts from vegetation but also
        burned plastics, electronics, vehicles, building materials, and other synthetic materials.
        The resulting contamination includes VOCs, PAHs, heavy metals, asbestos fibers, silica,
        and other hazardous substances. The S760 addresses investigation methodologies,
        contamination assessment, and restoration protocols specifically for this type of complex,
        multi-source contamination. For more on wildfire contaminants, see our articles on{' '}
        <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          smoke damage claims
        </Link>,{' '}
        <Link href="/resources/environmental-sampling-methods" className="text-blue-700 underline hover:text-blue-900">
          environmental sampling methods
        </Link>, and{' '}
        <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
          asbestos and lead in insurance claims
        </Link>.
      </p>

      <CalloutBox variant="important" title="Why the S760 Matters for Wildfire Claims">
        <p>
          Before the S760, carriers routinely treated wildfire smoke claims like ordinary house
          fire smoke claims &mdash; authorizing basic surface cleaning and HVAC filter replacement
          while ignoring the toxic contamination that wildfire smoke deposits throughout a
          structure. The S760 provides a citable, ANSI-accredited standard establishing that
          wildfire smoke requires a more comprehensive investigation and remediation approach than
          ordinary smoke events. When your carrier&rsquo;s preferred vendor says your wildfire
          smoke-damaged home just needs &ldquo;a good cleaning,&rdquo; the S760 is the standard
          that says otherwise.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Letters After Someone&rsquo;s Name Mean
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        IICRC certifications appear as letter designations after a technician&rsquo;s name.
        They indicate the individual has completed coursework and passed an examination in that
        discipline. They do not guarantee competence by themselves &mdash; but they indicate a
        baseline level of training that matters when evaluating a restoration company.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        WRT &mdash; Water Restoration Technician
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The WRT is the most common IICRC credential. It covers the S500 principles: water
        damage categories and classes, psychrometry (the science of drying), equipment selection
        and placement, moisture monitoring, and documentation. Any technician performing water
        damage mitigation on your property should hold a WRT at minimum. If your carrier&rsquo;s
        preferred vendor sends uncertified technicians to manage your water loss, that is a red
        flag &mdash; the work may not follow S500 protocols.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        AMRT &mdash; Applied Microbial Remediation Technician
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The AMRT covers mold remediation principles from the S520: microbial contamination
        assessment, containment setup, remediation protocols, PPE requirements, and
        post-remediation verification. Mold remediation should be performed by AMRT-certified
        technicians working under a qualified industrial hygienist or environmental consultant.
        For more on how carriers handle mold, see our{' '}
        <Link href="/resources/mold-losses" className="text-blue-700 underline hover:text-blue-900">
          guide to mold losses
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        FSRT &mdash; Fire and Smoke Restoration Technician
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FSRT covers fire and smoke damage restoration &mdash; smoke behavior, combustion
        byproduct chemistry, cleaning methods for different soot types, deodorization, and
        structural evaluation after fire. This is essential for{' '}
        <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          smoke damage claims
        </Link>{' '}
        where improper cleaning can drive contaminants deeper into materials. Technicians
        handling{' '}
        <Link href="/resources/contents-cleaning-total-loss" className="text-blue-700 underline hover:text-blue-900">
          personal property cleaning
        </Link>{' '}
        after a fire should hold this credential.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        OCT &mdash; Odor Control Technician
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The OCT addresses odor identification, source removal, and deodorization methods.
        Relevant to fire, smoke, water, and biohazard losses where odor persists. A common
        carrier tactic is to authorize surface cleaning and declare the job complete &mdash;
        even though the home still smells like smoke, mold, or sewage. Proper odor control
        requires identifying and eliminating the source, not masking it. The OCT trains
        technicians in the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Use IICRC Standards to Justify and Deny Claim Amounts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers have a complicated relationship with IICRC standards. They invoke
        them selectively &mdash; citing the standard when it supports a lower payment, and
        ignoring the standard when it supports a higher one. Understanding this dynamic is
        critical for any policyholder navigating a property damage claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Carriers Cite IICRC Standards to Pay Less
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Drying time limits.</strong> A carrier may cite the S500&rsquo;s drying
          protocols to argue that your mitigation company used too much equipment or dried for
          too long. &ldquo;The S500 says this class of loss should dry in 3&ndash;5 days,
          so we are only paying for 5 days of equipment.&rdquo;
        </li>
        <li>
          <strong>Category 1 classification.</strong> A carrier may classify a loss as Category 1
          even when the water has been standing for days &mdash; avoiding the more expensive
          Category 3 protocols that the S500 actually requires. They want to save the carpet.
          The standard says it should be removed.
        </li>
        <li>
          <strong>Mold scope limitations.</strong> A carrier may cite the S520 to argue that
          only materials with visible mold growth (Condition 3) require removal, while ignoring
          that Condition 2 (settled spores on materials) also requires investigation and may
          require remediation.
        </li>
        <li>
          <strong>Cleaning vs. replacement.</strong> A carrier may argue that the IICRC standards
          support cleaning rather than replacement of personal property &mdash; even when the
          specific contamination (e.g., Category 3 water, wildfire soot) makes restoration to
          pre-loss condition impossible.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Carriers Ignore IICRC Standards to Pay Less
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Skipping antimicrobial treatment.</strong> The S500 calls for antimicrobial
          application in appropriate circumstances, but carriers routinely deny this line item
          as &ldquo;not necessary&rdquo; &mdash; despite it being part of the standard protocol.
        </li>
        <li>
          <strong>Denying containment.</strong> The S520 requires engineering controls (negative
          air containment) during mold remediation to prevent cross-contamination. Carriers
          sometimes deny containment costs, arguing the affected area is &ldquo;too small&rdquo;
          to justify it &mdash; a position that contradicts the standard.
        </li>
        <li>
          <strong>Refusing post-remediation verification.</strong> Both the S500 and S520 call
          for post-remediation verification &mdash; testing to confirm that the remediation was
          successful. Carriers frequently refuse to pay for clearance testing, preferring to rely
          on a visual inspection rather than the objective verification the standards require.
        </li>
        <li>
          <strong>Ignoring the S760 entirely.</strong> Some carriers continue to treat wildfire
          smoke claims as ordinary smoke events, refusing to acknowledge that the S760 exists
          or that wildfire smoke requires specialized investigation and remediation protocols.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Use the Standard Against the Carrier">
        <p>
          When a carrier denies a line item or reduces the scope of your mitigation, ask a
          simple question: &ldquo;Which section of the applicable IICRC standard supports your
          position?&rdquo; If the carrier is citing the standard selectively, demand they explain
          why they follow Section X (which saves them money) but not Section Y (which costs them
          money). IICRC standards are consensus documents &mdash; you do not get to cherry-pick
          the parts you like.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Carrier&rsquo;s Preferred Vendor Doesn&rsquo;t Follow IICRC Standards
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance carriers have &ldquo;preferred vendor&rdquo; or &ldquo;program
        contractor&rdquo; networks &mdash; mitigation companies that work at pre-negotiated
        rates in exchange for a steady stream of referrals. These arrangements create a
        fundamental conflict of interest: the vendor&rsquo;s continued participation depends on
        keeping the carrier happy, not on performing work to the highest standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier&rsquo;s preferred vendor fails to follow IICRC standards &mdash; using
        insufficient equipment, skipping antimicrobial treatment, cutting drying time short,
        or classifying contaminated water as clean to avoid removal protocols &mdash; that
        creates a problem for the carrier, not just the vendor. The carrier recommended this
        vendor and approved the inadequate scope. If the result is incomplete mitigation,
        secondary damage, or a health hazard, the carrier bears responsibility.
      </p>

      <CalloutBox variant="warning" title="Document Everything the Preferred Vendor Does">
        <p>
          If a carrier-assigned mitigation company is cutting corners &mdash; pulling equipment
          early, skipping moisture readings, refusing to apply antimicrobials, or categorizing
          contaminated water as Category 1 &mdash; document it. Take photographs, note when
          equipment was removed, request moisture logs, and ask the technician to explain their
          classification in writing. You are not obligated to use the carrier&rsquo;s preferred
          vendor in California, and if their vendor is not following industry standards, that is
          a strong reason to hire your own.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Tension Between IICRC Standards and What Carriers Want to Pay For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the uncomfortable truth: IICRC standards describe how work <em>should</em> be
        done. Insurance carriers want to pay for how they <em>wish</em> it could be done &mdash;
        which is always less. The standards are written by restoration professionals and
        scientists focused on achieving a proper result. Carrier guidelines are written by claims
        departments focused on controlling costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This tension shows up in predictable ways. The S500 says a Category 3 loss requires
        removal of affected porous materials &mdash; the carrier says the carpet can be cleaned.
        The S520 says Condition 3 mold requires containment, removal, and post-remediation
        verification &mdash; the carrier says a surface wipe-down is sufficient. The S760 says
        wildfire smoke requires specialized investigation &mdash; the carrier says the home
        &ldquo;looks fine&rdquo; after a basic cleaning.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers rarely argue the standard is wrong. Instead, they argue it does not
        &ldquo;require&rdquo; the work &mdash; that it merely &ldquo;recommends&rdquo; or
        &ldquo;suggests&rdquo; it. This is a semantic game. IICRC standards are consensus-based
        professional standards of care. When the result of not following them is property damage
        or a health hazard, whether the standard used &ldquo;shall&rdquo; or &ldquo;should&rdquo;
        matters much less than whether the work was done properly.
      </p>

      <CalloutBox variant="important" title="Standards Define the Professional Standard of Care">
        <p>
          IICRC standards are not building codes and they are not regulations &mdash; no state
          agency enforces them directly. But they define the professional standard of care for
          restoration work. When a restoration company deviates from these standards, they are
          deviating from the accepted practice in their industry. When a carrier directs or
          approves work that deviates from these standards, the carrier is authorizing
          sub-standard work on your property. That distinction matters when it comes time to
          demand supplemental remediation or pursue a claim for{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Means for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are dealing with a water damage, mold, fire, smoke, or biohazard insurance claim,
        here is what you need to know about IICRC standards:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The applicable IICRC standard defines how the work should have been performed. If your
          mitigation company did not follow it, the work may be incomplete.
        </li>
        <li>
          If the carrier is denying line items that are called for by the standard, ask them to
          cite which section of the standard supports their denial.
        </li>
        <li>
          If the carrier&rsquo;s preferred vendor performed work that does not meet the standard,
          document the deficiencies and demand supplemental remediation.
        </li>
        <li>
          Verify that the technicians working on your property hold the appropriate IICRC
          certifications for the type of loss. A WRT for water, an AMRT for mold, an FSRT for
          fire and smoke.
        </li>
        <li>
          Do not accept &ldquo;we do not follow that standard&rdquo; as an answer from either
          the carrier or the restoration company. These are ANSI-accredited consensus standards.
          They are the industry benchmark.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is Your Carrier Ignoring Industry Standards?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can identify when mitigation or remediation falls short of IICRC
          standards and demand the carrier pay for work done correctly.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4 mt-8">
        <em>
          This article is for informational purposes only and does not constitute legal advice.
          Insurance policies, regulations, and IICRC standards are subject to change. This article
          reflects information current as of its publication date. For guidance specific to your
          claim, consult a licensed Public Adjuster or an attorney experienced in insurance
          coverage disputes.
        </em>
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
