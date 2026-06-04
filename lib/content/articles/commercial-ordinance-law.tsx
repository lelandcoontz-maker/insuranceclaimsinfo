import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Ordinance or Law Coverage in Commercial Property Insurance: When Code Upgrades Can Double Your Claim',
  description:
    'How ordinance or law coverage works in commercial property policies. The three ISO coverages, policy variations, demolition thresholds, and gaps that can cost building owners hundreds of thousands.',
  summary:
    'Ordinance or law coverage in commercial policies pays for code-required upgrades, demolition, and the increased cost of construction after a loss, split across three ISO coverages. Gaps and low limits can cost building owners hundreds of thousands.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <CalloutBox variant="important" title="This Article Covers Commercial Property Policies">
        <p>
          This article addresses Ordinance or Law coverage as it applies to commercial property
          insurance &mdash; including ISO form CP 04 05 and its many proprietary variations. If you
          own a home rather than a commercial building, see our{' '}
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            residential Ordinance or Law coverage article
          </Link>{' '}
          and our{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            code upgrade coverage guide
          </Link>{' '}
          for homeowner-specific guidance.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A fire damages 60% of a commercial building. The city determines the structure must be
        demolished entirely because a local ordinance requires full demolition when damage exceeds
        50% of the building&rsquo;s value. The building owner assumes the insurance policy will
        cover everything &mdash; the demolished undamaged portion, the demolition costs, and the
        increased cost to rebuild to current codes. In many cases, the policy does not. Without the
        correct endorsement, with adequate limits, and with language broad enough to cover the
        entire building, the building owner faces a gap that can reach hundreds of thousands of
        dollars or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or Law coverage in commercial property insurance is not a single monolithic
        coverage. It is a three-part structure, each part addressing a different financial
        consequence of code compliance after a loss. These parts can be purchased individually or
        in combination, and the specific policy language varies dramatically from insurer to
        insurer. Understanding how these coverages work &mdash; and more importantly, how your
        specific policy&rsquo;s language defines their scope &mdash; is critical to avoiding a
        catastrophic gap when a loss occurs.
      </p>

      {/* ───────── SECTION 1: THE THREE COVERAGES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Three Coverages: ISO CP 04 05
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Insurance Services Office (ISO) Ordinance or Law endorsement for commercial property
        policies &mdash; form CP 04 05 &mdash; divides the coverage into three distinct parts.
        Each addresses a different financial consequence that arises when a law, ordinance, or
        regulation forces the building owner to do more than simply repair the physical damage
        from a covered loss.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Coverage A: Loss to the Undamaged Portion of the Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A reimburses the value of the undamaged portion of a building that must be
        demolished because of a law or ordinance. This is the coverage most building owners do not
        know they need &mdash; until they need it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a commercial building valued at $2 million. A fire damages 60% of the structure.
        The local municipality has an ordinance requiring complete demolition of any building
        damaged beyond 50% of its value. The standard commercial property policy covers the
        damaged 60% &mdash; approximately $1.2 million &mdash; but says nothing about the
        undamaged 40%. Without Coverage A, the building owner absorbs the $800,000 value of the
        undamaged portion that must be torn down. Coverage A pays for that loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A is not included in most base commercial property policies. It must be purchased
        as part of the Ordinance or Law endorsement, and many policyholders either do not carry
        it or carry inadequate limits.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Coverage B: Demolition Cost
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B pays the actual expense to demolish the undamaged portion of the building and
        clear the site. This includes the cost of tearing down the remaining structure, hauling
        away debris, and &mdash; critically &mdash; the cost of hazardous materials abatement
        during demolition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the undamaged portion of the building contains asbestos insulation, lead paint, or
        other hazardous materials, the cost of safe removal during demolition can exceed the
        demolition cost itself. Coverage B is designed to cover these expenses. Without it, the
        building owner pays for demolition and abatement out of pocket &mdash; a cost that can
        easily reach six figures for older commercial buildings. For more on how insurance
        policies handle hazardous materials, see our{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
          pollution exclusion article
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Coverage C: Increased Cost of Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage C is the most commonly purchased &mdash; and the most commonly misunderstood
        &mdash; of the three coverages. It pays the additional cost to rebuild to current codes
        rather than the codes in effect when the building was originally constructed. This
        includes the increased cost to repair or reconstruct both damaged portions and, depending
        on the policy language, the reconstruction or remodel of undamaged portions when current
        codes require it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage C can include costs for excavation, foundations, pilings, and underground
        systems when those elements must be upgraded to meet current code requirements. If a
        building was constructed in 1975 with a foundation that met the seismic standards of that
        era, and current codes require a significantly more robust foundation, the additional
        cost of the upgraded foundation falls under Coverage C.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical issue with Coverage C is scope. As discussed in detail below, some policies
        cover code upgrades to the <strong>entire building</strong>, while others limit coverage
        to code upgrades only for <strong>items directly physically damaged by the loss</strong>.
        This distinction can mean the difference between a fully covered claim and a six-figure
        gap.
      </p>

      <CalloutBox variant="warning" title="Many Policies Only Include Coverage C">
        <p>
          It is common for commercial property policies to include only Coverage C &mdash; Increased
          Cost of Construction &mdash; without Coverages A and B. Many building owners assume
          Coverage C is all they need. It is not. If a local ordinance forces demolition of the
          undamaged portion, Coverage C does not pay for the value of what was torn down (that is
          Coverage A) or the cost of tearing it down (that is Coverage B). All three coverages
          serve different purposes, and the absence of any one can create a devastating gap.
        </p>
      </CalloutBox>

      {/* ───────── SECTION 2: OPTIONAL AND VARIABLE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Ordinance or Law Coverage Is Optional &mdash; And Variable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important things to understand about Ordinance or Law coverage is that it
        is an <strong>extra</strong> coverage. It is not part of the basic insuring agreement in
        a standard commercial property policy. Like replacement cost coverage, it must be
        specifically purchased, and its terms are defined by the endorsement language &mdash; not
        by any background rules that courts have developed for the basic coverage form.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters enormously because with basic coverage provisions &mdash; the insuring
        agreement, the loss settlement provisions, the definition of &ldquo;covered cause of
        loss&rdquo; &mdash; decades of case law have established relatively consistent rules
        about what is and is not covered. Courts have interpreted these provisions thousands of
        times, and policyholders can generally rely on a body of precedent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With extra coverages like Ordinance or Law, the insurer has far more freedom in drafting
        the language. There is no single &ldquo;standard&rdquo; Ordinance or Law endorsement.
        The ISO CP 04 05 form provides a baseline, but many insurers use proprietary forms with
        significantly different language. Some are broader than the ISO form. Some are narrower.
        Some cover scenarios that other policies explicitly exclude.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical consequence: <strong>a policyholder must read their specific policy
        language</strong>. There is no shortcut. General articles &mdash; including this one
        &mdash; can explain the structure and common variations, but no article can tell you
        what your policy covers without quoting your policy&rsquo;s actual words. If you are
        facing a claim involving code upgrades on a commercial property, read the endorsement.
        Then read it again. If the language is ambiguous, consult a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          licensed public adjuster
        </Link>{' '}
        or an attorney who handles insurance coverage disputes.
      </p>

      {/* ───────── SECTION 3: WHAT TRIGGERS COVERAGE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Triggers Ordinance or Law Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or Law coverage does not apply to every loss. Three elements must be present
        for the coverage to be triggered:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>A covered cause of loss damages the building.</strong> The loss must be caused
          by a peril covered under the policy &mdash; fire, windstorm, water damage, or whatever
          perils the policy covers. If the loss itself is excluded (for example, flood damage on
          a policy without flood coverage), the Ordinance or Law endorsement does not apply.
        </li>
        <li>
          <strong>A law, ordinance, or regulation applies to the damaged building.</strong> There
          must be an enforceable legal requirement that affects how the building can be repaired,
          rebuilt, or demolished. This requirement must exist and must actually apply to the
          building in question.
        </li>
        <li>
          <strong>The law requires demolition, increased cost of construction, or restricts
          repair or rebuilding.</strong> The legal requirement must impose a financial burden
          beyond what the repair or rebuilding would cost without the law. If the building can
          be repaired to pre-loss condition without any code-driven additional cost, the
          endorsement has nothing to cover.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        All three elements must be present. A building damaged by a covered peril in a
        jurisdiction with no code requirements that affect the repair does not trigger the
        coverage. A building subject to code requirements that is not damaged by a covered
        peril does not trigger the coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        &ldquo;Law or Ordinance&rdquo; Is Broader Than Building Codes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The phrase &ldquo;ordinance or law&rdquo; is not limited to building codes. It encompasses
        any law, ordinance, or regulation that affects the construction, repair, demolition, or
        use of the building. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building codes:</strong> Updated electrical, plumbing, structural, HVAC,
          energy efficiency, and fire safety requirements adopted since the building was
          originally constructed
        </li>
        <li>
          <strong>Zoning ordinances:</strong> Changes in setback requirements, lot coverage
          limits, height restrictions, parking requirements, or land use designations that
          affect how or whether the building can be rebuilt in its current configuration
        </li>
        <li>
          <strong>ADA compliance:</strong> The Americans with Disabilities Act and its state
          equivalents can require accessibility upgrades when a commercial building undergoes
          substantial renovation or repair
        </li>
        <li>
          <strong>Environmental regulations:</strong> Requirements for stormwater management,
          impervious surface limits, wetland buffers, and similar environmental protections that
          may not have existed when the building was originally constructed
        </li>
        <li>
          <strong>Fire codes:</strong> Requirements for sprinkler systems, fire-rated assemblies,
          egress modifications, and fire alarm systems that current codes mandate but the
          original building did not include
        </li>
        <li>
          <strong>Seismic retrofit mandates:</strong> Requirements to bring the building&rsquo;s
          structural system up to current seismic standards, which can be enormously expensive
          for unreinforced masonry buildings, soft-story structures, and pre-1970s concrete
          frame buildings
        </li>
        <li>
          <strong>Historical preservation requirements:</strong> If the building is in a
          designated historical district, reconstruction may require historically compatible
          materials, architectural details, and construction methods at significantly higher cost
        </li>
      </ul>

      <CalloutBox variant="info" title="California-Specific Requirements">
        <p>
          In California, commercial building owners should pay particular attention to Title 24
          energy requirements (which are updated on a three-year cycle and can significantly
          increase rebuilding costs), seismic retrofit mandates (especially for unreinforced
          masonry and soft-story buildings in cities like Los Angeles and San Francisco that have
          mandatory retrofit ordinances), ADA compliance requirements under both federal and
          California accessibility standards, and historical preservation requirements in
          designated areas. Each of these can trigger Ordinance or Law coverage and can add
          substantial cost to a commercial rebuilding project.
        </p>
      </CalloutBox>

      {/* ───────── SECTION 4: NARROW VS. BROAD ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Narrow vs. Broad Policy Language: The Coverage C Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important distinction in commercial Ordinance or Law coverage is whether
        Coverage C &mdash; Increased Cost of Construction &mdash; applies to the{' '}
        <strong>entire building</strong> or only to the{' '}
        <strong>portions directly physically damaged by the loss</strong>. This distinction is
        controlled entirely by the policy language, and it varies significantly from policy to
        policy and insurer to insurer.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Narrow Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies define Coverage C as covering the &ldquo;increased cost to repair or
        reconstruct the damaged portions of the building.&rdquo; Under this language, code
        upgrades are only covered for the parts of the building that were physically damaged
        by the covered loss. If a fire damages the second floor and the city requires the
        entire building to be brought up to current fire suppression codes, the narrow policy
        only pays for upgraded fire suppression on the second floor &mdash; not the first
        floor, not the third floor, and not any other undamaged area.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Broad Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other policies define Coverage C more broadly, covering the &ldquo;increased cost to
        repair or reconstruct the building&rdquo; &mdash; without limiting the coverage to
        &ldquo;damaged portions.&rdquo; Some policies go further, explicitly stating they cover
        the cost to &ldquo;reconstruct or remodel undamaged portions when required by the
        enforcement of any ordinance or law.&rdquo; Under this language, if a fire on one floor
        triggers a code requirement to upgrade the fire suppression system throughout the entire
        building, the policy covers the entire upgrade.
      </p>

      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        Compare: &ldquo;We will pay the increased cost to repair or reconstruct the damaged
        portion of the building&rdquo; vs. &ldquo;We will pay the increased cost to repair or
        reconstruct the building, including the cost to reconstruct or remodel undamaged portions
        when necessitated by the enforcement of any applicable ordinance or law.&rdquo; The
        difference is the scope of the entire Coverage C benefit.
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        Courts that have addressed this issue have generally held that the policy language
        controls. Where the language is narrow, courts have upheld the insurer&rsquo;s
        limitation to damaged portions. Where the language is broad, courts have required the
        insurer to pay for code upgrades throughout the building. Where the language is
        ambiguous, the general rules of policy interpretation &mdash; including the rule that
        ambiguities are construed against the insurer &mdash; may favor broader coverage. But
        relying on ambiguity is a gamble. The far better approach is to purchase a policy with
        explicitly broad Coverage C language.
      </p>

      <CalloutBox variant="tip" title="How to Check Your Policy">
        <p>
          Pull out your commercial property policy and find the Ordinance or Law endorsement.
          Look at the Coverage C section. Does it say &ldquo;damaged portions of the
          building&rdquo; or simply &ldquo;the building&rdquo;? Does it explicitly mention
          coverage for undamaged portions when code requires upgrades? If the language is narrow
          or unclear, talk to your broker about endorsement options before a loss occurs. After
          a loss, the language is what it is.
        </p>
      </CalloutBox>

      {/* ───────── SECTION 5: THE UNDAMAGED PORTION PROBLEM ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Undamaged Portion Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;undamaged portion problem&rdquo; is where Ordinance or Law coverage gaps hit
        commercial building owners the hardest. It arises when a partial loss triggers code
        requirements that extend to the entire building &mdash; not just the damaged area.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a commercial office building that suffers fire damage to 40% of its structure.
        The city&rsquo;s building department determines that because the repair constitutes a
        &ldquo;substantial improvement&rdquo; under local ordinance, the entire building must be
        brought up to current ADA accessibility standards, current seismic codes, and current
        fire safety codes &mdash; not just the damaged 40%, but the entire structure including
        the undamaged 60%.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without Coverage A, if the city requires demolition of the undamaged portion, the
        building owner pays for the value of that portion out of pocket. Without Coverage C
        that extends to undamaged portions, the building owner pays for code upgrades to the
        60% that was not damaged. Without Coverage B, the building owner pays for the
        demolition and hazardous materials abatement of the undamaged portion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many commercial building owners carry only Coverage C and assume it covers everything
        related to code compliance. But if their Coverage C language limits upgrades to
        &ldquo;damaged portions,&rdquo; they face a massive uninsured gap for code upgrades to
        the undamaged 60% of the building. This gap can easily exceed the cost of the physical
        damage from the original loss.
      </p>

      {/* ───────── SECTION 6: DEMOLITION THRESHOLDS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Municipal Demolition Thresholds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many municipalities have ordinances requiring complete demolition of a building when
        damage exceeds a specified percentage of the building&rsquo;s value. These thresholds
        are the primary trigger for Coverage A claims, and understanding them is essential for
        adequate pre-loss planning.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Common thresholds:</strong> Most demolition ordinances set the threshold at
          50% or 75% of the building&rsquo;s value, though the specific percentage varies by
          jurisdiction
        </li>
        <li>
          <strong>Variation by building type and zone:</strong> The threshold may differ
          depending on the building&rsquo;s occupancy classification, construction type, and
          the zoning district in which it is located
        </li>
        <li>
          <strong>Lower thresholds in regulated areas:</strong> Buildings in flood zones,
          seismic hazard zones, or designated historical districts may face lower damage
          thresholds or more complex requirements for substantial improvement determinations
        </li>
        <li>
          <strong>FEMA substantial improvement rule:</strong> In Special Flood Hazard Areas
          (SFHAs), FEMA&rsquo;s substantial improvement rule requires that any repair or
          improvement costing 50% or more of the building&rsquo;s market value must bring the
          entire building into compliance with current floodplain management requirements
        </li>
        <li>
          <strong>Cumulative damage rules:</strong> Some jurisdictions track damage cumulatively,
          meaning that multiple smaller losses over time can collectively trigger the demolition
          threshold even if no single loss exceeds it
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A is specifically designed for the scenario where a demolition threshold forces
        the building owner to lose the undamaged portion. Without it, the building owner
        effectively self-insures the value of whatever percentage of the building was not
        damaged by the covered loss.
      </p>

      {/* ───────── SECTION 7: HAZARDOUS MATERIALS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Hazardous Materials and Demolition Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B &mdash; Demolition Cost &mdash; becomes particularly significant when the
        building contains hazardous materials. Older commercial buildings frequently contain
        asbestos in insulation, floor tiles, ceiling tiles, pipe wrapping, and fireproofing
        materials. Lead paint is common in buildings constructed before 1978. Some buildings
        contain PCBs in caulking, electrical equipment, or fluorescent light ballasts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When these buildings must be demolished, federal and state regulations require
        hazardous materials to be identified, properly contained, and disposed of according to
        strict protocols. The cost of asbestos abatement alone during a commercial demolition
        can run into hundreds of thousands of dollars. Lead paint removal, PCB disposal, and
        other hazardous materials handling add further cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B covers these demolition-related costs &mdash; but only if purchased. A
        building owner without Coverage B who faces a mandatory demolition of the undamaged
        portion pays for both the demolition and the hazardous materials abatement. For a
        detailed discussion of how{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
          pollution exclusions
        </Link>{' '}
        interact with asbestos and other hazardous materials in insurance claims, see our
        dedicated article on that topic.
      </p>

      <CalloutBox variant="warning" title="The Pollution Exclusion Intersection">
        <p>
          Some insurers have attempted to apply the pollution exclusion to deny Coverage B
          claims involving asbestos or other hazardous materials during demolition. The argument
          is that asbestos abatement is a &ldquo;pollution&rdquo; cost excluded by the policy.
          Courts have reached different conclusions on this issue depending on the specific
          policy language and the jurisdiction. If your Coverage B claim involves hazardous
          materials, be prepared for this argument and consult with an attorney experienced in
          coverage disputes.
        </p>
      </CalloutBox>

      {/* ───────── SECTION 8: REAL-WORLD EXAMPLES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Commercial Real-World Examples
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following scenarios illustrate how Ordinance or Law coverage issues arise in
        commercial claims. Each demonstrates a different interaction between the loss, the
        applicable law or ordinance, and the policy coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Strip Mall Fire Triggers Building-Wide Sprinkler Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire destroys two units in a strip mall built in 1985. Current fire codes require
        automatic sprinkler systems throughout commercial buildings of this type, but the
        building was grandfathered under the original code. The fire department and building
        department determine that the repair constitutes a substantial improvement, triggering
        the requirement to install sprinklers throughout the entire complex &mdash; not just in
        the two damaged units. A policy with broad Coverage C language covers the sprinkler
        installation for the entire building. A policy with narrow Coverage C language covers
        sprinklers only in the two damaged units, leaving the building owner to pay for
        sprinklers in every other unit.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Office Building Partial Loss Triggers ADA Compliance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage affects 30% of a three-story office building built in 1988 &mdash; before
        the ADA was enacted in 1990. The building department determines that the scope of
        repairs triggers the requirement for ADA compliance throughout the building, including
        accessible restrooms on all floors, an elevator or lift, accessible parking, and
        compliant signage. The ADA upgrades to the undamaged portions of the building can cost
        more than the water damage repair itself. Without broad Coverage C, the building owner
        bears the cost of ADA upgrades to the undamaged 70% of the building.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Warehouse Fire Triggers Seismic Retrofit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire damages 55% of an unreinforced masonry warehouse in a California city with a
        mandatory seismic retrofit ordinance. The city determines that damage exceeding 50%
        triggers the full retrofit requirement. The seismic retrofit &mdash; which involves
        adding steel moment frames, reinforcing walls, upgrading the roof-to-wall connections,
        and strengthening the foundation &mdash; costs $600,000 for the undamaged portion alone.
        Coverage A covers the value of undamaged portions that must be demolished for the
        retrofit. Coverage B covers demolition and hazardous materials costs. Coverage C covers
        the increased cost of the retrofit itself. Without all three, the building owner faces
        a gap that could approach the value of the original building.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3 mt-6">
        Historical District Rebuilding Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A commercial building in a designated historical district suffers a substantial fire
        loss. The historical preservation commission requires reconstruction using historically
        compatible materials &mdash; hand-laid brick instead of modern concrete block, custom
        millwork instead of standard trim, period-appropriate windows instead of modern vinyl,
        and copper roofing instead of asphalt shingles. The cost to rebuild with historically
        compatible materials and methods is two to three times the cost of modern construction.
        Coverage C pays the difference between modern construction costs and the historically
        required construction costs &mdash; if the policy language is broad enough and the
        limits are adequate. For buildings in historical districts, Coverage C limits set at
        the standard 25% of building value are almost certainly inadequate.
      </p>

      {/* ───────── SECTION 9: DISPUTES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Coverage Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or Law claims on commercial properties frequently generate disputes between
        the building owner and the insurer. The most common disputes include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scope of Coverage C:</strong> Whether the policy covers code upgrades to the
          entire building or only the damaged portions &mdash; the narrow vs. broad language
          issue discussed above
        </li>
        <li>
          <strong>Whether a law &ldquo;applies&rdquo;:</strong> Insurers sometimes argue that a
          particular code requirement is discretionary rather than mandatory, or that the
          building department is not actually enforcing the code, in an effort to deny Coverage
          C benefits
        </li>
        <li>
          <strong>Causation:</strong> Insurers may argue that the code upgrades were needed
          regardless of the loss and therefore are not caused by the covered peril &mdash; an
          argument that misunderstands the coverage, which is triggered by the intersection of
          a covered loss and an applicable law
        </li>
        <li>
          <strong>Limit adequacy:</strong> Even when coverage applies, the limits purchased may
          be far below the actual increased cost &mdash; a problem that cannot be fixed after
          the loss
        </li>
        <li>
          <strong>ACV vs. RCV:</strong> Whether the increased cost of construction is measured
          at actual cash value or replacement cost value, and whether the policy requires the
          work to be completed before replacement cost benefits are paid
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive discussion of how coverage disputes are handled, including the
        burden of proof, the duty to read the policy, and the role of public adjusters and
        attorneys, see our{' '}
        <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
          coverage disputes article
        </Link>.
      </p>

      {/* ───────── SECTION 10: VACANCY ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Vacancy Clause Intersection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial building owners should be aware that the{' '}
        <Link href="/resources/commercial-vacancy-clause" className="text-blue-700 underline hover:text-blue-900">
          commercial vacancy clause
        </Link>{' '}
        can interact with Ordinance or Law coverage in unexpected ways. If a building has been
        vacant for more than 60 consecutive days at the time of loss, the standard ISO vacancy
        condition reduces the payment for covered losses by 15% and eliminates coverage for
        certain perils entirely. This reduction applies to the base coverage amount, which in
        turn affects the calculation of Ordinance or Law benefits that are tied to or limited
        by the covered loss amount.
      </p>

      {/* ───────── SECTION 11: PRACTICAL ADVICE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Advice for Commercial Building Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following recommendations apply to every commercial building owner, but are
        especially critical for owners of older buildings, buildings in regulated areas, and
        buildings in historical districts.
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Purchase all three coverages.</strong> Carry Coverages A, B, and C. Each
          addresses a different financial consequence, and the absence of any one creates a
          gap that the other two cannot fill. The premium for all three is modest compared
          to the exposure they address.
        </li>
        <li>
          <strong>Set adequate limits.</strong> A common starting point for Coverage C is 25%
          of building value, but this is a floor, not a ceiling. Older buildings in areas with
          aggressive code enforcement, seismic retrofit mandates, or historical preservation
          requirements may need 50% or more. Coverage A limits should reflect the maximum
          percentage of the building that could survive a loss only to be demolished under a
          local ordinance.
        </li>
        <li>
          <strong>Read the Coverage C language.</strong> Does your policy cover code upgrades
          to the entire building, or only to damaged portions? If the language is narrow, ask
          your broker about broader endorsement options. This is the single most important
          coverage distinction in commercial Ordinance or Law coverage.
        </li>
        <li>
          <strong>Research your local demolition thresholds.</strong> Before a loss occurs, know
          what percentage of damage triggers mandatory demolition or substantial improvement
          requirements in your jurisdiction. If your building is in a flood zone, seismic
          hazard zone, or historical district, the rules may be more complex or the thresholds
          lower.
        </li>
        <li>
          <strong>Understand current code requirements.</strong> What would your building
          department require if you had to rebuild or substantially repair your building
          today? Are there seismic, ADA, fire suppression, energy efficiency, or
          environmental requirements that your existing building does not meet? The gap
          between your building&rsquo;s current condition and current code requirements is
          the exposure that Coverage C is designed to address.
        </li>
        <li>
          <strong>Increase limits for high-risk categories.</strong> If your building is in a
          historical district, seismic hazard zone, flood zone, or an area with aggressive
          code enforcement, standard limits are almost certainly inadequate. Work with your
          broker to model the worst-case scenario and set limits accordingly.
        </li>
        <li>
          <strong>Document your building&rsquo;s condition.</strong> Maintain records of your
          building&rsquo;s construction date, original building codes, current code
          deficiencies (if known), and any hazardous materials present. This documentation
          will be invaluable in substantiating an Ordinance or Law claim.
        </li>
        <li>
          <strong>Engage a public adjuster early.</strong> Ordinance or Law claims on
          commercial properties are among the most complex claims in property insurance. The
          interaction of municipal codes, policy language, coverage limits, and demolition
          requirements creates a landscape where experienced representation can make the
          difference between a fully covered claim and a devastating gap. A{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            licensed public adjuster
          </Link>{' '}
          represents the policyholder &mdash; not the insurance company &mdash; and can
          navigate these complexities on your behalf.
        </li>
      </ol>

      {/* ───────── SECTION 12: KEY TAKEAWAYS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Ordinance or Law coverage is <strong>optional</strong> in commercial property
          insurance &mdash; it must be specifically purchased
        </li>
        <li>
          The coverage has three parts: Coverage A (loss to undamaged portion), Coverage B
          (demolition cost), and Coverage C (increased cost of construction) &mdash; each
          addressing a different financial exposure
        </li>
        <li>
          Many policies only include Coverage C, leaving building owners exposed on Coverages
          A and B
        </li>
        <li>
          Coverage C language varies dramatically: some policies cover the entire building,
          others only cover damaged portions &mdash; this distinction can mean a six-figure
          difference in claim payment
        </li>
        <li>
          &ldquo;Ordinance or law&rdquo; is not limited to building codes &mdash; it includes
          zoning, ADA, environmental regulations, fire codes, seismic mandates, and historical
          preservation requirements
        </li>
        <li>
          Municipal demolition thresholds can force demolition of the undamaged portion,
          triggering Coverage A &mdash; if you have it
        </li>
        <li>
          Hazardous materials abatement during demolition can exceed the demolition cost itself
          &mdash; Coverage B addresses this expense
        </li>
        <li>
          Policy language controls &mdash; there is no substitute for reading your specific
          endorsement
        </li>
      </ul>

      {/* ───────── RELATED RESOURCES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            Building Code &amp; Ordinance or Law Coverage (Residential)
          </Link>
        </li>
        <li>
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            Law and Ordinance Coverage: Building Code Upgrades, Zoning, and the Hidden Gap
          </Link>
        </li>
        <li>
          <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
            Insurance Coverage Disputes
          </Link>
        </li>
        <li>
          <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
            Pollution Exclusion Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/commercial-vacancy-clause" className="text-blue-700 underline hover:text-blue-900">
            Commercial Vacancy Clause
          </Link>
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            What a Public Adjuster Does
          </Link>
        </li>
      </ul>

      {/* ───────── DISCLAIMER ───────── */}
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or
          professional advice. Ordinance or Law coverage varies significantly from policy to
          policy. The information presented here reflects general principles and common policy
          structures, but your specific policy may contain language that differs materially
          from the examples discussed. Always read your actual policy language and consult
          with a licensed public adjuster or attorney for guidance on your specific situation.
        </p>
      </CalloutBox>
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
