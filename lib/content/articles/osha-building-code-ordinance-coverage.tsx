import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'OSHA Requirements and Building Code Upgrades as Triggers for Ordinance or Law Coverage',
  description:
    'When workplace safety regulations and building codes force upgrades during insured repairs, ordinance or law coverage should pay the additional costs. Learn how OSHA standards, Cal/OSHA requirements, and building code changes trigger coverage for increased construction costs.',
  summary:
    'When OSHA, Cal/OSHA, or building-code requirements force upgrades during insured repairs, ordinance or law coverage should pay the added costs. These regulatory triggers, not just the original damage, can substantially increase what the insurer owes.',
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

      <p className="text-gray-700 leading-relaxed mb-4">
        When a commercial property suffers a covered loss, the repair process often reveals
        a hidden layer of cost that goes far beyond replacing what was damaged. The moment
        a contractor opens a wall, removes a roof, or begins demolition, the project may
        trigger compliance requirements under building codes, workplace safety regulations,
        or both. Asbestos that was safely encapsulated before the loss must now be abated.
        Electrical panels that were grandfathered under old codes must now be brought up to
        current standards. Fall protection systems that were not required when the building
        was originally constructed must now be installed before repair work can proceed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These additional costs &mdash; the costs of complying with laws, ordinances, and
        regulations that apply to the repair or reconstruction &mdash; are precisely what{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">
          ordinance or law coverage
        </Link>{' '}
        was designed to address. Yet many policyholders and their representatives overlook
        the role that workplace safety regulations, including OSHA and Cal/OSHA standards,
        play in driving up the cost of repair after a covered loss. This article examines
        the intersection of OSHA requirements, building code upgrades, and ordinance or
        law coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Ordinance or Law Coverage Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or law coverage is a separate coverage within a commercial or homeowner&rsquo;s
        property policy that pays for additional costs imposed by laws, ordinances, or
        regulations when repairing or rebuilding after a covered loss. It is typically divided
        into three components:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A &mdash; Loss to the Undamaged Portion:</strong> When a law or
          ordinance requires demolition of the undamaged portion of a building (for example,
          because the damage exceeds a threshold percentage of the structure&rsquo;s value),
          this coverage compensates the policyholder for the value of the undamaged portion
          that must be torn down.
        </li>
        <li>
          <strong>Coverage B &mdash; Demolition Cost:</strong> The actual cost of demolishing
          the undamaged portion when required by law, including labor, equipment, hauling,
          and disposal.
        </li>
        <li>
          <strong>Coverage C &mdash; Increased Cost of Construction:</strong> The additional
          cost of rebuilding or repairing to comply with current codes, standards, and
          regulations. This is the component most directly implicated when OSHA and building
          code requirements drive up repair costs.
        </li>
      </ul>

      <CalloutBox variant="important" title="Ordinance or Law Coverage Is Not Automatic">
        <p>
          Many property policies do not include ordinance or law coverage unless it is
          specifically added by endorsement. Even when included, the coverage has its own
          separate limit, which may be stated as a flat dollar amount or as a percentage
          of the building coverage limit. Policyholders should review their{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] underline">
            declarations page
          </Link>{' '}
          to confirm whether ordinance or law coverage is present and what the applicable
          limit is.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When OSHA Standards Trigger Additional Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Occupational Safety and Health Administration (OSHA) sets federal workplace
        safety standards that apply to construction and repair activities. In California,
        the Division of Occupational Safety and Health (Cal/OSHA) enforces state workplace
        safety standards that often exceed federal OSHA requirements. When a covered loss
        requires construction or repair work, OSHA and Cal/OSHA standards can impose
        significant additional costs that would not have been incurred but for the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Asbestos Abatement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Asbestos is the single most common OSHA-triggered expense in property damage
        repair. Many commercial buildings and older residential properties contain
        asbestos in insulation, floor tiles, ceiling tiles, pipe wrap, roofing materials,
        joint compound, and other building components. When these materials are
        undisturbed, they do not necessarily pose a hazard and can remain in place
        indefinitely. But when a covered loss requires that asbestos-containing materials
        be disturbed, removed, or repaired, OSHA regulations (29 CFR 1926.1101) and
        Cal/OSHA regulations (Cal. Code Regs., tit. 8, &sect; 1529) require that the
        work be performed by licensed asbestos abatement contractors using specific
        containment, removal, and disposal procedures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of asbestos abatement can be enormous. A fire that damages a section of
        an older commercial building may require abatement of asbestos-containing materials
        throughout the affected area before any repair work can begin. The abatement
        itself may cost more than the physical repair of the fire damage. Without
        ordinance or law coverage, the policyholder would be responsible for the full
        cost of abatement &mdash; an expense that was triggered entirely by the need to
        repair a covered loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lead Paint Abatement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Similar to asbestos, lead-based paint in buildings constructed before 1978 may
        require abatement when repair work disturbs painted surfaces. OSHA&rsquo;s lead
        in construction standard (29 CFR 1926.62) and Cal/OSHA&rsquo;s corresponding
        regulations impose requirements for worker protection, containment, and proper
        disposal when lead paint is disturbed during construction activities. The EPA&rsquo;s
        Renovation, Repair, and Painting (RRP) Rule (40 CFR 745) adds additional
        requirements. These regulatory mandates increase the cost of repair and should be
        claimed under ordinance or law coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fall Protection and Scaffolding
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        OSHA&rsquo;s fall protection standards (29 CFR 1926, Subpart M) require fall
        protection for workers at heights of six feet or more in construction activities.
        Cal/OSHA imposes similar requirements. When a covered loss requires roof repair,
        exterior wall work, or other elevated construction, the cost of scaffolding,
        guardrails, safety nets, and personal fall arrest systems adds to the total
        repair cost. These are not optional &mdash; they are legally mandated, and the
        costs exist solely because of the need to perform repair work after a covered loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Confined Space Entry
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If repair work requires entry into confined spaces &mdash; crawl spaces, utility
        tunnels, tanks, or similar areas &mdash; OSHA&rsquo;s permit-required confined
        space standard (29 CFR 1910.146) and its construction industry counterpart
        (29 CFR 1926, Subpart AA) require atmospheric testing, ventilation, rescue
        equipment, and trained personnel. These requirements add cost to the repair
        process that would not have been incurred but for the covered loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Silica and Dust Control
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        OSHA&rsquo;s respirable crystalline silica standard for construction (29 CFR
        1926.1153) requires specific dust control measures when repair activities involve
        cutting, grinding, or drilling concrete, masonry, or stone. These measures &mdash;
        including water suppression systems, vacuum dust collection, and respiratory
        protection programs &mdash; add cost to repair work involving concrete or
        masonry structures.
      </p>

      <CalloutBox variant="tip" title="Document Every Regulatory Requirement">
        <p>
          When a covered loss triggers OSHA or Cal/OSHA compliance requirements, the
          policyholder should document each requirement thoroughly. Obtain written
          reports from the abatement contractor or safety consultant identifying the
          specific OSHA or Cal/OSHA regulation that mandates each procedure, the cost
          of compliance, and confirmation that the requirement was triggered by the
          repair work necessitated by the covered loss. This documentation is essential
          for supporting the ordinance or law coverage claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Code Upgrades That Coincide with OSHA Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        OSHA requirements do not operate in isolation. When repair work begins after a
        covered loss, the local building department will typically require that the
        repaired portions of the building comply with current building codes. In California,
        this means compliance with the current edition of the California Building Standards
        Code (Title 24), which is updated on a triennial cycle. The combination of OSHA
        workplace safety requirements and building code upgrade requirements can create a
        substantial additional cost layer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this example: A fire damages a portion of a 1970s-era commercial
        building. The repair triggers the following:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Asbestos abatement</strong> &mdash; The fire-damaged area contains
          asbestos insulation that must be removed before repair work can begin. This is
          an OSHA/Cal/OSHA requirement triggered by the repair work.
        </li>
        <li>
          <strong>Electrical code upgrade</strong> &mdash; The building&rsquo;s electrical
          system in the damaged area does not meet current California Electrical Code
          requirements. The local building department requires a full upgrade as a condition
          of the building permit. This is a building code requirement.
        </li>
        <li>
          <strong>Fire sprinkler installation</strong> &mdash; The building was not required
          to have fire sprinklers when it was originally constructed, but current fire code
          requires sprinklers in the repaired area. This is a fire code requirement.
        </li>
        <li>
          <strong>ADA compliance</strong> &mdash; The repair work triggers accessibility
          upgrade requirements under the Americans with Disabilities Act and the California
          Building Code&rsquo;s accessibility provisions.
        </li>
        <li>
          <strong>Title 24 energy compliance</strong> &mdash; Current energy efficiency
          standards require upgraded insulation, windows, lighting, and HVAC systems in
          the repaired area.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every one of these additional costs was triggered by the covered fire loss. Without
        the fire, the building would have continued operating under its existing grandfathered
        conditions. The fire forced repairs, and the repairs triggered compliance requirements
        that did not apply before. Ordinance or law Coverage C &mdash; Increased Cost of
        Construction &mdash; should cover all of these additional costs, subject to the
        policy&rsquo;s limit for that coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Enforcement&rdquo; Requirement Debate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most contested issues in ordinance or law coverage is whether the law or
        regulation must be actively &ldquo;enforced&rdquo; against the specific property for
        coverage to apply, or whether it is sufficient that the law exists and would apply
        if the repair work is performed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers take the position that ordinance or law coverage applies only when a
        government authority has actually issued an order, notice, or citation requiring
        compliance with the specific regulation. Under this interpretation, the policyholder
        would need to show that the building department or Cal/OSHA has formally required
        the upgrade &mdash; a passive obligation to comply with existing law would not be
        enough.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This interpretation is problematic for policyholders and inconsistent with the
        purpose of the coverage. Building codes and OSHA regulations are not optional &mdash;
        they apply automatically to construction and repair activities. A contractor who
        fails to perform asbestos abatement when OSHA requires it does not avoid the
        regulation by not being cited; the contractor is simply in violation. The same is
        true for building code requirements &mdash; the building department does not need
        to issue a special order for current codes to apply to new construction or repair
        work. The codes apply by operation of law.
      </p>

      <CalloutBox variant="legal" title="The Better Interpretation">
        <p>
          The more sound interpretation &mdash; and the one more consistent with
          California&rsquo;s pro-policyholder interpretive rules &mdash; is that ordinance
          or law coverage is triggered whenever a law, ordinance, or regulation requires
          additional costs in connection with the repair or reconstruction of the insured
          property after a covered loss. The policyholder should not be required to wait
          for a citation or enforcement action to claim the coverage. If the law applies
          to the repair work and the cost of compliance exceeds what the repair would have
          cost without the legal requirement, the increased cost is covered.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Distinction Between Building Codes and Workplace Safety Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes argue that ordinance or law coverage applies only to
        &ldquo;building codes&rdquo; &mdash; the structural, electrical, plumbing, and
        mechanical codes that govern the finished building &mdash; and not to workplace
        safety regulations like OSHA standards that govern the process of construction
        and repair. This distinction is artificial and should not affect coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ordinance or law coverage provision refers to &ldquo;any ordinance
        or law&rdquo; that regulates the construction, use, or repair of any property.
        OSHA and Cal/OSHA regulations are laws that directly regulate the repair of
        property &mdash; they dictate how the repair work must be performed, what safety
        measures must be in place, and what procedures must be followed when hazardous
        materials are encountered. They are as much a part of the legal framework
        governing construction and repair as the building code itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some requirements bridge both categories. Cal/OSHA&rsquo;s asbestos
        regulations, for example, are workplace safety rules that also function as
        environmental regulations and interact with building permit requirements.
        Attempting to draw a line between &ldquo;building code&rdquo; and &ldquo;workplace
        safety&rdquo; would create an arbitrary distinction that the policy language does
        not support.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Building Code and Cal/OSHA Interaction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the California Building Standards Code (Title 24) and Cal/OSHA
        regulations (Title 8) work in tandem to govern construction and repair activities.
        Key areas of interaction include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hazardous materials surveys:</strong> California Health and Safety Code
          &sect; 25915 et seq. may require a hazardous materials survey before demolition or
          renovation work begins. The survey identifies asbestos, lead, and other regulated
          materials, and the results determine the scope of required abatement work under
          both Cal/OSHA and environmental regulations.
        </li>
        <li>
          <strong>Fire code and life safety:</strong> The California Fire Code (Title 24,
          Part 9) may require fire sprinkler installation, fire alarm upgrades, or exit
          modifications when repairs exceed a specified threshold. These requirements
          interact with Cal/OSHA&rsquo;s fire safety standards for the construction
          workplace.
        </li>
        <li>
          <strong>Structural safety:</strong> Cal/OSHA&rsquo;s construction safety orders
          (Cal. Code Regs., tit. 8, &sect; 1500 et seq.) impose requirements for structural
          shoring, bracing, and protection during repair work that overlap with the
          California Building Code&rsquo;s structural requirements for the finished repair.
        </li>
        <li>
          <strong>Seismic retrofit triggers:</strong> In some California jurisdictions,
          repair work exceeding a specified percentage of the building&rsquo;s value
          triggers mandatory seismic retrofit requirements under local ordinances. These
          requirements can add significant cost, particularly for unreinforced masonry
          buildings and soft-story structures.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document and Claim OSHA-Triggered Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Documenting OSHA-triggered costs for an ordinance or law coverage claim requires
        a methodical approach:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Identify the regulatory trigger.</strong> For each additional cost,
          identify the specific OSHA, Cal/OSHA, or building code provision that requires
          the expenditure. Cite the regulation by number and title.
        </li>
        <li>
          <strong>Establish the causal link to the covered loss.</strong> Demonstrate that
          the regulatory requirement was triggered by the repair work necessitated by the
          covered loss. If the asbestos abatement is required because the fire damage
          requires removal of asbestos-containing materials, document that connection
          explicitly.
        </li>
        <li>
          <strong>Obtain cost separation.</strong> Separate the cost of OSHA/code compliance
          from the cost of the physical repair itself. If the fire repair would have cost
          $200,000 without any code upgrades, and the code-compliant repair costs $350,000,
          the increased cost of construction is $150,000. A qualified contractor or cost
          estimator should prepare this comparison.
        </li>
        <li>
          <strong>Obtain professional reports.</strong> Engage a certified industrial
          hygienist for hazardous materials assessments, a licensed asbestos abatement
          contractor for abatement cost estimates, and a code compliance consultant or
          licensed architect to identify all applicable building code upgrades. These
          professional reports provide the evidentiary foundation for the claim.
        </li>
        <li>
          <strong>Preserve all permits and inspection records.</strong> Building permits,
          inspection reports, abatement permits, air monitoring reports, and waste disposal
          manifests all document the regulatory compliance work that was performed and the
          associated costs.
        </li>
        <li>
          <strong>Submit a separate ordinance or law claim.</strong> Do not bury the
          OSHA-triggered costs within the general property damage claim. Submit the
          ordinance or law costs as a separate, documented component of the overall claim,
          with clear references to the specific coverage provision, the applicable
          regulations, and the itemized costs.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Do Not Assume the Carrier Will Identify These Costs">
        <p>
          Insurance carriers and their adjusters typically do not proactively identify
          ordinance or law costs. The carrier&rsquo;s estimate will usually reflect only
          the cost of replacing what was damaged with like kind and quality materials &mdash;
          it will not include code upgrades, OSHA compliance costs, or other regulatory
          expenses. It is the policyholder&rsquo;s responsibility (or the responsibility
          of the policyholder&rsquo;s{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Public Adjuster
          </Link>
          ) to identify, document, and claim these costs. Failing to do so leaves
          potentially significant money on the table.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Examples
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 1: Fire in a 1960s Office Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire damages the second floor of a 1960s-era office building. The physical
        damage repair is estimated at $400,000. However, the repair work triggers:
        asbestos abatement ($120,000), electrical system upgrade to current California
        Electrical Code ($85,000), fire sprinkler installation required by current fire
        code ($65,000), ADA accessibility improvements ($45,000), and Title 24 energy
        compliance upgrades ($35,000). The total increased cost of construction is
        $350,000 &mdash; nearly as much as the physical damage itself. All of these
        costs should be claimed under ordinance or law Coverage C.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 2: Wind Damage to a Warehouse Roof
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        High winds tear off a section of roof on a warehouse built in the 1980s. The
        reroofing project requires workers at height, triggering Cal/OSHA fall protection
        requirements ($15,000 in scaffolding and safety equipment). The reroofing also
        disturbs asbestos-containing roofing materials, requiring abatement ($40,000).
        The building department requires the new roof to comply with current energy code
        requirements, including upgraded insulation and a cool roof coating ($25,000).
        Total ordinance or law costs: $80,000, on top of the $120,000 physical damage
        repair.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 3: Water Damage in a Historic Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pipe burst causes extensive water damage on multiple floors of a historic
        commercial building. The repair work requires demolition of damaged plaster walls
        and ceilings, which disturbs both asbestos and lead paint. The hazardous materials
        survey and abatement costs total $200,000. The building department also requires
        seismic strengthening of the repaired area under the local soft-story retrofit
        ordinance, adding $180,000. The total ordinance or law claim of $380,000 is
        more than twice the $175,000 in physical water damage repair.
      </p>

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Saxe Doernberger &amp; Vita, P.C.</strong> &mdash; A policyholder-side
          insurance coverage law firm that has published analyses of ordinance or law
          coverage disputes, including the scope of &ldquo;increased cost of construction&rdquo;
          coverage and the types of regulations that trigger the coverage. As the firm has
          explained, &ldquo;ordinance or law coverage exists precisely because the cost of
          complying with current laws during repair almost always exceeds the cost of simply
          replacing what was damaged.&rdquo; Search for their publications on ordinance or
          law coverage.
        </li>
        <li>
          <strong>Policyholder-side coverage commentary</strong> &mdash; Published
          analyses from the national policyholder-side bar address ordinance-or-law
          coverage in the context of commercial property claims, including the interaction
          of building codes and environmental regulations.
        </li>
        <li>
          <strong>Merlin Law Group</strong> &mdash; Policyholder attorneys who have written
          on ordinance or law coverage, including the enforcement requirement debate and
          practical strategies for documenting code upgrade costs. Search for their blog
          posts on ordinance or law coverage.
        </li>
        <li>
          <strong>International Risk Management Institute (IRMI)</strong> &mdash; IRMI
          publishes reference materials on ordinance or law coverage, including analysis
          of standard policy forms and endorsements. Search for &ldquo;ordinance or law&rdquo;
          on irmi.com.
        </li>
        <li>
          <strong>Cal/OSHA</strong> &mdash; The California Division of Occupational Safety
          and Health maintains regulations and guidance at dir.ca.gov/dosh. Construction
          safety orders are codified in California Code of Regulations, Title 8.
        </li>
        <li>
          <strong>California Building Standards Commission</strong> &mdash; The California
          Building Standards Code (Title 24) is available through the California Building
          Standards Commission website at dgs.ca.gov/BSC. The current edition and historical
          editions provide the basis for identifying code upgrade requirements.
        </li>
        <li>
          <strong>FC&amp;S / National Underwriter</strong> &mdash; The insurance industry&rsquo;s
          coverage interpretation resource has addressed the scope of ordinance or law
          coverage, including the distinction between building codes and other regulatory
          requirements as triggers for the coverage.
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal,
          safety, or insurance advice. Nothing in this article should be construed as a legal
          opinion or as a substitute for consultation with a qualified attorney, safety
          professional, or insurance professional. OSHA and Cal/OSHA regulations are complex,
          and compliance obligations depend on the specific circumstances of each project.
          The legal principles discussed reflect California law as of the date of publication
          and are subject to change. Consult a licensed attorney for advice on your specific
          situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is Your Carrier Ignoring Code Upgrade and OSHA Compliance Costs?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster can identify all ordinance or law costs triggered by
          your covered loss, document the regulatory requirements, and ensure these costs
          are properly claimed and paid.
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
