import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Fire Debris and Ash Contamination on Properties That Did Not Burn: Coverage, Cleanup, and the Cost Gap',
  description:
    'When wildfire ash, soot, and toxic debris contaminate a property that was never on fire, policyholders face unique coverage challenges. Covers cleanup costs, pollution exclusion issues, DTSC programs, and how to document contamination claims in California.',
  summary:
    'When wildfire ash, soot, and toxic debris contaminate a home that never burned, coverage is often disputed under the pollution exclusion. Document the contamination thoroughly and pursue cleanup costs; California programs and case law support these claims.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A wildfire burns through a community. Thousands of structures are destroyed. But for every
        home that burns, dozens more in surrounding areas are blanketed by windblown ash, soot,
        charred building materials, and toxic particulates. These properties were never touched by
        flame. Their walls are intact, their roofs are whole, and from the outside they may appear
        undamaged. Yet inside &mdash; on surfaces, in HVAC systems, embedded in carpeting and
        upholstery, settled into attic insulation and wall cavities &mdash; a layer of
        contamination has taken hold that may render the home unsafe to occupy without professional
        remediation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the least understood categories of wildfire-related insurance claims. The
        property did not burn. There is no charred structure to photograph. The damage is invisible
        to the untrained eye &mdash; measurable only through air quality testing, surface wipe
        sampling, and industrial hygienist assessment. Yet the cost of proper remediation can reach
        tens of thousands of dollars, and in severe cases, six figures. Policyholders in this
        situation face a distinctive set of challenges: proving that contamination exists, proving
        that it constitutes a covered loss, navigating the{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-[#2E74B5] underline">
          pollution exclusion
        </Link>, and bridging the gap between what government programs cover and what full
        remediation actually costs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Wildfire Debris Actually Contains
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a modern structure burns, it does not simply produce wood ash. Residential and
        commercial buildings contain synthetic materials, treated lumber, plastics, electronics,
        household chemicals, vehicles, and in older structures, asbestos-containing materials and
        lead paint. When these materials combust, they release a complex mixture of hazardous
        substances that become airborne and travel with the wind &mdash; sometimes for miles.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Toxic Substances Control (DTSC), which oversees debris
        removal after major wildfires, has consistently identified the following contaminants in
        wildfire ash and debris:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Heavy metals</strong> &mdash; Lead, arsenic, cadmium, chromium, and mercury
          from burned electronics, batteries, treated wood, paints, and household products
        </li>
        <li>
          <strong>Asbestos fibers</strong> &mdash; Released when older structures containing
          asbestos-bearing siding, insulation, floor tiles, or roofing materials are destroyed
        </li>
        <li>
          <strong>Polycyclic aromatic hydrocarbons (PAHs)</strong> &mdash; Carcinogenic compounds
          produced by incomplete combustion of organic materials
        </li>
        <li>
          <strong>Volatile organic compounds (VOCs)</strong> &mdash; Released from burned
          plastics, solvents, adhesives, and synthetic building materials
        </li>
        <li>
          <strong>Dioxins and furans</strong> &mdash; Highly toxic compounds formed when
          chlorine-containing materials (PVC pipes, vinyl siding, certain plastics) burn
        </li>
        <li>
          <strong>Particulate matter (PM2.5 and PM10)</strong> &mdash; Microscopic particles
          that penetrate deep into building interiors through any opening, including HVAC
          systems, window seals, and structural gaps
        </li>
      </ul>

      <CalloutBox variant="warning" title="Ash Is Not Just &ldquo;Dirt&rdquo;">
        <p>
          Wildfire ash from burned structures is fundamentally different from natural wood ash.
          It is classified as potentially hazardous waste by DTSC and requires professional
          handling. Policyholders should not attempt to clean up wildfire ash contamination
          themselves. Improper cleanup can spread contaminants deeper into building materials and
          HVAC systems, creating a worse remediation problem and potential health hazards.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Contamination Reaches Non-Burned Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanism by which wildfire contamination reaches properties that did not burn is
        straightforward but often underestimated. During a wildfire, convection columns carry ash
        and particulates thousands of feet into the atmosphere. Prevailing winds then distribute
        this material across a wide area &mdash; far beyond the fire perimeter. Properties
        downwind of a major structural fire can receive significant deposits of contaminated ash
        even when they are miles from the nearest burned structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contamination pathway into buildings is equally important to understand. Fine
        particulates enter through HVAC intake vents, gaps around windows and doors, attic
        ventilation openings, and any penetration in the building envelope. Once inside, these
        particles settle on every surface and become embedded in porous materials &mdash; carpet
        fibers, upholstered furniture, draperies, mattresses, and even drywall. HVAC ductwork
        acts as both an entry point and a distribution system, spreading contamination throughout
        the structure every time the system operates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that a property can appear largely unaffected from the exterior while harboring
        significant contamination inside. A homeowner who returns after an evacuation order is
        lifted may see a thin film of ash on outdoor surfaces and assume a simple hosing down will
        suffice. The reality is that the interior contamination &mdash; the contamination that
        poses the greatest health risk because occupants are breathing it continuously &mdash; is
        the far more serious problem.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage Under Standard Homeowners Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The threshold question for any insurance claim arising from wildfire ash contamination is
        whether the contamination constitutes a covered loss under the policy. This analysis
        involves several interrelated issues.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fire as a Covered Peril
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowners policies &mdash; including the ISO HO-3 form used as the basis for
        most California residential policies &mdash; cover fire as a named peril. The standard
        fire policy provisions codified in California Insurance Code sections 2070 through 2080
        provide broad coverage for loss caused by fire. Smoke, soot, and ash are natural and
        expected consequences of fire. A wildfire that produces contaminating debris is a fire
        loss, and the damage caused by that debris &mdash; even to properties that were not
        themselves on fire &mdash; is damage caused by the fire peril.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fact that the policyholder&rsquo;s own structure did not burn does not negate
        coverage. The policy covers damage to the insured property caused by fire &mdash; it
        does not require that the fire occur on the insured premises. A fire that originates
        miles away but sends contaminating debris onto the insured property has caused damage
        to that property by the fire peril, and the resulting remediation costs should be covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Direct Physical Loss&rdquo; Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most property policies require &ldquo;direct physical loss or damage&rdquo; to trigger
        coverage. Following the California Supreme Court&rsquo;s decision in{' '}
        <em>Another Planet Entertainment, LLC v. Vigilant Insurance Co.</em> (2024) 15 Cal.5th
        1106, the standard in California requires a &ldquo;distinct, demonstrable, physical
        alteration of property.&rdquo; Wildfire ash contamination that is documented through
        environmental testing &mdash; surface wipe samples showing elevated levels of heavy
        metals, air quality tests demonstrating unsafe particulate concentrations, or industrial
        hygienist findings of embedded contaminants &mdash; satisfies this standard. The property
        has been physically altered by the deposit of hazardous materials that require professional
        removal.
      </p>

      <CalloutBox variant="legal" title="Environmental Testing Is Essential">
        <p>
          Without professional environmental testing, a contamination claim rests on subjective
          observations &mdash; visible ash, lingering odor, respiratory symptoms. These may be
          sufficient to initiate a claim, but they are unlikely to withstand carrier scrutiny.
          A certified industrial hygienist who can document specific contaminant types,
          concentrations, and locations within the structure provides the objective evidence
          needed to establish that a direct physical loss has occurred.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Pollution Exclusion Challenge
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most significant coverage obstacle for ash contamination claims is the{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-[#2E74B5] underline">
          pollution exclusion
        </Link>. Carriers have attempted to characterize wildfire ash as a &ldquo;pollutant&rdquo;
        or &ldquo;contaminant&rdquo; under the broad ISO absolute pollution exclusion, arguing
        that because the ash contains hazardous substances, the resulting damage falls within the
        exclusion&rsquo;s scope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument faces several substantial hurdles under California law. The pollution
        exclusion was designed to address traditional environmental contamination &mdash;
        industrial waste, chemical spills, gradual soil and groundwater pollution. It was not
        drafted to address the consequences of a covered fire peril. Under the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">
          efficient proximate cause doctrine
        </Link>, when a covered peril (fire) sets in motion a chain of events that includes an
        excluded peril (pollution), the covered peril controls if it was the predominant cause
        of the loss. The fire caused the contamination. The contamination did not cause the fire.
        The efficient proximate cause is fire &mdash; a covered peril.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, many policies contain a hostile fire exception to the pollution exclusion,
        which restores coverage for damage arising from heat, smoke, or fumes from a hostile fire.
        A wildfire is by definition a hostile fire. Ash and soot from that wildfire are products
        of smoke and combustion. The hostile fire exception, where present, should override the
        pollution exclusion for wildfire ash claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Government Cleanup Programs vs. Private Remediation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After major California wildfires, the state and federal governments typically establish
        debris removal programs. These programs, coordinated by DTSC and often funded through
        FEMA, remove hazardous materials and structural debris from properties that were destroyed
        by fire. Understanding what these programs do &mdash; and what they do not do &mdash; is
        critical for policyholders whose properties were contaminated but not destroyed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Government Program: Scope and Limitations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Government-sponsored debris removal typically operates in two phases. Phase 1, managed by
        the Environmental Protection Agency (EPA), involves the collection and removal of
        household hazardous waste from destroyed properties &mdash; propane tanks, batteries,
        pesticides, paint cans, and similar items. Phase 2, managed by the U.S. Army Corps of
        Engineers under DTSC oversight, involves the removal of structural debris, ash, and
        contaminated soil from properties that were destroyed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical limitation is that these programs are generally designed for properties
        where structures were destroyed &mdash; not for properties that suffered contamination
        without structural loss. A homeowner whose house is still standing but contaminated by
        windblown ash from neighboring destroyed properties may find that the government program
        does not extend to their property at all. Even when contaminated non-burned properties
        are included in cleanup programs, the scope of government remediation may be limited to
        soil and exterior surfaces, leaving interior contamination &mdash; the portion most
        directly affecting occupant health &mdash; as the homeowner&rsquo;s responsibility.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Cost Gap
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a significant gap. Government programs may address exterior contamination
        and soil remediation on the policyholder&rsquo;s lot, but the cost of interior
        remediation &mdash; professional cleaning of all surfaces, HVAC system decontamination,
        removal and replacement of porous materials that cannot be adequately cleaned, air
        quality verification testing, and in severe cases, temporary relocation during the
        remediation process &mdash; falls to the policyholder and, presumably, their insurance
        carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These costs are substantial. Professional interior remediation of a moderately
        contaminated single-family home can cost $15,000 to $50,000 or more, depending on the
        severity of contamination, the size of the structure, and the materials involved. If
        contamination has penetrated HVAC ductwork, attic insulation, or wall cavities, costs
        escalate significantly. Add temporary relocation expenses during remediation, and the
        total claim value for a non-burned property can rival smaller fire loss claims.
      </p>

      <CalloutBox variant="important" title="Do Not Wait for the Government Program">
        <p>
          Government debris removal programs can take months or even years to reach all
          affected properties. Policyholders should not delay filing their insurance claim
          while waiting for government assistance. File promptly, document the contamination
          through professional testing, and pursue insurance coverage for the full scope of
          remediation needed. Government programs and insurance coverage are not mutually
          exclusive &mdash; but the insurance claim is the mechanism for recovering the costs
          that government programs do not cover.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting an Ash Contamination Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Documentation is the foundation of every contamination claim. Because the damage is
        not visible in the way that fire char or water staining is visible, the evidentiary
        burden falls heavily on the policyholder to establish that contamination exists, that it
        poses a health or safety concern, and that professional remediation is necessary.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Professional Environmental Assessment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Retain a certified industrial hygienist (CIH) to perform a comprehensive assessment
        of the property. The CIH should collect surface wipe samples from multiple locations
        throughout the interior, test air quality for particulates and specific contaminants,
        inspect the HVAC system for deposits and contamination, and assess porous materials
        (carpet, upholstery, bedding, drapes) for embedded particulates. The resulting report
        should identify specific contaminants found, their concentrations, applicable health
        and safety thresholds, and a professional opinion on whether the property is safe to
        occupy without remediation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Photograph and Video Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even though contamination is largely invisible, document any visual evidence of ash
        deposits. Photograph exterior surfaces showing ash accumulation. Photograph HVAC
        filters that have been coated with particulates. Document any visible discoloration
        on surfaces, windows, or outdoor areas. Take close-up photographs of ash deposits on
        window sills, outdoor furniture, vehicles, and landscaping. Date-stamp all photographs
        and preserve them in their original digital format.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Obtain Remediation Scope and Estimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Based on the industrial hygienist&rsquo;s findings, obtain a detailed remediation
        scope and estimate from a qualified environmental remediation contractor. The scope
        should specify every component of the remediation: surface cleaning protocols for each
        material type, HVAC cleaning and filter replacement, removal and replacement of porous
        materials that cannot be adequately decontaminated, post-remediation verification testing,
        and any temporary relocation requirements during the remediation process. The estimate
        should be itemized and defensible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Preserve All Health-Related Documentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If any household member has experienced health symptoms consistent with exposure to
        wildfire contaminants &mdash; respiratory problems, persistent coughing, headaches,
        eye irritation, skin reactions &mdash; document those symptoms through medical
        professionals. While health effects alone do not prove a property damage claim, they
        corroborate the contamination evidence and demonstrate the real-world consequences of
        the exposure. This documentation may also be relevant to any{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          additional living expense
        </Link>{' '}
        claim if temporary relocation is necessary during remediation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Living Expenses During Remediation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the contamination renders the home unsafe to occupy &mdash; as determined by the
        industrial hygienist&rsquo;s assessment or by a public health advisory &mdash; the
        policyholder should be entitled to additional living expenses (ALE) under Coverage D
        of their homeowners policy while remediation is performed. California Insurance Code
        section 2051.5 provides for ALE when a covered peril makes the insured residence unfit
        for its normal use.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers may resist ALE claims for contamination on the theory that the home is
        &ldquo;physically intact&rdquo; and therefore habitable. This argument conflates
        structural integrity with habitability. A home can be structurally sound while
        containing airborne contaminants at levels that exceed health and safety standards.
        The relevant question is not whether the walls are standing, but whether the
        indoor environment is safe for sustained human occupation. Environmental testing
        results that demonstrate contaminant levels above applicable thresholds are the
        strongest evidence to support an ALE claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        DTSC Requirements and Regulatory Standards
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Toxic Substances Control establishes the regulatory
        framework for wildfire debris management. DTSC has published guidance on acceptable
        contamination levels for residential properties after wildfire events, including soil
        screening levels for metals, asbestos fiber concentrations, and particulate matter
        thresholds. These regulatory standards serve a dual purpose for policyholders: they
        establish the baseline against which contamination levels are measured, and they
        provide objective evidence that remediation is not discretionary but mandated by state
        environmental standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier questions whether remediation is truly &ldquo;necessary,&rdquo;
        pointing to DTSC standards that classify the contamination as requiring professional
        cleanup shifts the conversation from a subjective dispute about cleanliness to an
        objective regulatory compliance issue. The policyholder is not seeking remediation
        because the property looks dirty. The policyholder is seeking remediation because
        state environmental authorities have determined that contamination at these levels
        requires professional abatement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contents Claims Arising from Contamination
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wildfire ash contamination does not affect only the structure. Personal property
        inside the home &mdash; clothing, bedding, upholstered furniture, children&rsquo;s
        toys, kitchen items, electronics, books, and art &mdash; can absorb contaminants
        that make them unsafe or unusable. Porous items are particularly susceptible because
        they absorb fine particulates that cannot be removed through ordinary cleaning methods.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          contents claim
        </Link>{' '}
        for a contamination loss should include all personal property that was damaged or rendered
        unusable by the contamination. Items that can be professionally cleaned should be cleaned
        at the carrier&rsquo;s expense. Items that cannot be adequately decontaminated &mdash;
        particularly porous items like mattresses, pillows, stuffed animals, and certain types
        of upholstered furniture &mdash; should be replaced. The industrial hygienist&rsquo;s
        assessment should address which categories of items can be cleaned versus which must be
        discarded based on the nature of the contamination.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Policyholders
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>File your claim promptly.</strong> Do not wait to see whether government
          cleanup programs will address your property. File with your insurer as soon as you
          are aware of contamination, referencing the wildfire as the cause of loss.
        </li>
        <li>
          <strong>Do not clean the property yourself before testing.</strong> Premature cleaning
          can destroy the evidence needed to support the claim. Leave surfaces undisturbed until
          the industrial hygienist has collected samples.
        </li>
        <li>
          <strong>Turn off the HVAC system.</strong> If you suspect ash contamination, stop
          running the heating or cooling system immediately. Every cycle of the HVAC system
          redistributes contaminants throughout the structure and embeds them deeper into
          ductwork and building materials.
        </li>
        <li>
          <strong>Keep all receipts.</strong> Temporary relocation costs, environmental testing
          fees, remediation contractor invoices, medical expenses related to exposure &mdash;
          document every dollar spent in connection with the contamination.
        </li>
        <li>
          <strong>Request your policy in full.</strong> Obtain the complete policy, including all
          endorsements. Review the pollution exclusion language carefully. Determine whether the
          hostile fire exception is present. Check for any endorsements that modify pollution
          coverage.
        </li>
        <li>
          <strong>Consider retaining a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Public Adjuster
          </Link>.</strong> Contamination claims involve technical environmental evidence,
          complex coverage arguments, and significant documentation requirements. A licensed
          Public Adjuster who has handled wildfire contamination claims can coordinate the
          environmental assessment, prepare the claim documentation, and negotiate with the
          carrier.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Neighbor Coordination Can Strengthen Claims">
        <p>
          When multiple properties in a neighborhood are affected by the same wildfire
          contamination, coordinated testing and documentation can strengthen individual
          claims. A pattern of elevated contamination levels across multiple nearby properties
          makes it more difficult for any individual carrier to dismiss the contamination as
          pre-existing or unrelated to the wildfire event.
        </p>
      </CalloutBox>

      {/* ── Sources and Further Reading ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Department of Toxic Substances Control (DTSC)</strong> &mdash;
          DTSC publishes guidance on wildfire debris hazards, residential soil screening
          levels, and the scope of government-sponsored cleanup programs after each major
          wildfire. Search for DTSC wildfire cleanup program documentation and their
          hazardous waste characterization guidance for wildfire ash.
        </li>
        <li>
          <strong>Anderson Kill P.C.</strong> &mdash; Anderson Kill&rsquo;s policyholder-side
          insurance recovery team has analyzed how environmental contamination from nearby
          events triggers coverage under standard property policies, including the
          intersection of fire coverage and pollution exclusions. As the attorneys at Anderson
          Kill have observed, &lsquo;The pollution exclusion was designed to address the
          environmental liabilities of industrial polluters, not to strip coverage from
          homeowners whose properties were contaminated by a covered fire event.&rsquo;
        </li>
        <li>
          <strong>Hunton Andrews Kurth LLP</strong> &mdash; The firm&rsquo;s insurance
          recovery practice has published analysis on the application of the &ldquo;direct
          physical loss&rdquo; standard to contamination claims, including how the
          <em> Another Planet</em> decision affects claims based on environmental alteration
          rather than structural destruction. Search for their coverage publications on
          physical loss and contamination.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; This nonprofit consumer advocacy
          organization provides resources for wildfire survivors, including guidance on
          contamination-related claims for properties in the broader impact zone. Their
          post-wildfire recovery resources address the gap between government cleanup
          programs and the full scope of remediation policyholders may need.
        </li>
        <li>
          <strong>Shernoff Bidart Echeverria LLP</strong> &mdash; As a leading
          California policyholder-side firm, Shernoff Bidart Echeverria has represented
          wildfire claimants facing contamination-related coverage disputes and has
          analyzed how California&rsquo;s efficient proximate cause doctrine applies when
          fire-generated pollutants damage non-burned properties.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Insurance policies, regulations, and case law vary based on individual
          circumstances. The legal principles discussed here reflect California law as of the
          date of publication and may not apply in other jurisdictions. If your property has
          been contaminated by wildfire debris, consult a licensed attorney or{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Public Adjuster
          </Link>{' '}
          for advice about your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Property Contaminated by Wildfire Ash?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your home was covered in ash or soot from a nearby wildfire &mdash; even though
          your property did not burn &mdash; you may have a valid insurance claim for
          remediation, contents replacement, and temporary relocation. A licensed Public
          Adjuster can coordinate environmental testing and present a proper claim.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
