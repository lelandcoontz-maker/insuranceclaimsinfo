import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Law and Ordinance Coverage: Building Code Upgrades, Zoning, and the Hidden Gap in Your Property Claim',
  description:
    'When building codes have changed since your home was built, repairs can cost far more than the insurer\'s estimate. Learn how law and ordinance coverage works in California \u2014 electrical, structural, Title 24, plumbing, and roofing code upgrades.',
  summary:
    'Law and ordinance coverage pays the extra cost of bringing repairs up to current building codes, which a basic dwelling estimate ignores. In California this can cover electrical, structural, Title 24, plumbing, and roofing upgrades. Confirm you have adequate code-upgrade limits.',
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
        If your home was built more than a few years ago, the building codes in effect when it
        was constructed are almost certainly not the codes in effect today. When you repair or
        rebuild after a covered loss, your local building department will require compliance with
        current codes &mdash; not the codes your home was originally built to. The cost difference
        can be staggering, and without adequate Law and Ordinance (L&amp;O) coverage, that cost
        falls on you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article goes beyond the basics of L&amp;O coverage (which we cover in our{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Building Code and Ordinance or Law Coverage overview
        </Link>) and dives into the specific California code upgrade requirements you are most
        likely to encounter, the zoning and ordinance issues that can complicate reconstruction,
        and the practical steps to maximize your L&amp;O recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        I. What Law and Ordinance Coverage Is
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Law and Ordinance coverage is a separate coverage within your homeowner policy that pays
        for the additional costs imposed by laws, ordinances, or regulations that affect the
        repair, rebuilding, or demolition of your home after a covered loss. It is typically
        divided into three components:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A &mdash; Loss in Value of the Undamaged Portion:</strong> When a law
          or ordinance requires that the undamaged portion of your home be demolished because the
          damaged portion exceeds a threshold (commonly 50% of the structure&rsquo;s value), Coverage
          A compensates you for the value of the undamaged structure that must be torn down. Without
          this coverage, you lose the undamaged portion of your home with no compensation.
        </li>
        <li>
          <strong>Coverage B &mdash; Demolition Cost:</strong> The actual cost of demolishing the
          undamaged portion of the structure when required by law. This includes labor, equipment,
          hauling, and disposal costs associated with tearing down structure that was not damaged
          by the covered loss.
        </li>
        <li>
          <strong>Coverage C &mdash; Increased Cost of Construction:</strong> The additional cost
          of rebuilding or repairing to comply with current codes and standards. This is the
          component most people think of when they hear &ldquo;code upgrade coverage.&rdquo; If
          your home was built to 1970 standards and must now be rebuilt to 2025 standards, Coverage
          C pays the difference.
        </li>
      </ul>

      <CalloutBox variant="important" title="Check Your Limits">
        <p>
          L&amp;O coverage is not unlimited. It has its own separate limit, stated on
          your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>. Common limits range from 10% to 50% of the Coverage A dwelling limit. On
          older homes with extensive code gaps, even 25% may not be enough. Review your limits
          now &mdash; before a loss occurs &mdash; and increase them if necessary.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        II. California-Specific Code Upgrade Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has some of the most stringent and frequently updated building codes in the
        nation. The California Building Standards Code (Title 24) is updated on a triennial cycle,
        with the most recent edition taking effect January 1, 2026. On top of the statewide code,
        individual cities and counties often adopt local amendments that impose even stricter
        requirements. Below are the major categories of code upgrades you are likely to encounter
        when repairing or rebuilding in California.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A. Electrical System Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical code upgrades are among the most common and most expensive requirements when
        repairing or rebuilding an older home. The gap between what was acceptable decades ago
        and what is required today is enormous:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Knob-and-tube wiring:</strong> Homes built before the 1940s may still have
          knob-and-tube wiring, which is not permitted under current code. If any portion of the
          electrical system is opened up for repair, the building department will likely require
          complete replacement of the knob-and-tube system with modern NM (Romex) or conduit
          wiring. This is a full rewire &mdash; one of the most expensive code upgrades possible.
        </li>
        <li>
          <strong>Aluminum wiring:</strong> Homes built in the 1960s and 1970s often used aluminum
          branch circuit wiring, which is now recognized as a fire hazard due to oxidation and
          connection failures. Current code may require remediation, including replacement or the
          installation of approved aluminum-to-copper connectors (such as COPALUM or AlumiConn) at
          every connection point.
        </li>
        <li>
          <strong>Arc-Fault Circuit Interrupters (AFCI):</strong> Current California electrical
          code requires AFCI protection in virtually all habitable rooms, including bedrooms,
          living rooms, dining rooms, hallways, closets, and other living spaces. Older homes
          typically have no AFCI protection. Adding AFCI breakers or receptacles to an existing
          panel, or replacing the panel to accommodate them, is a significant upgrade cost.
        </li>
        <li>
          <strong>Ground-Fault Circuit Interrupters (GFCI):</strong> GFCI protection is required
          in bathrooms, kitchens, garages, laundry rooms, unfinished basements, outdoor outlets,
          and near any water source. The areas requiring GFCI protection have expanded
          significantly over the years. Older homes may have few or no GFCI outlets.
        </li>
        <li>
          <strong>Tamper-resistant receptacles:</strong> All 125-volt, 15- and 20-amp receptacles
          in a dwelling must now be tamper-resistant. Replacing every outlet in a home with
          tamper-resistant receptacles is a line-item cost that is frequently missed.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Electrical Upgrades Can Cost $10,000&ndash;$40,000+">
        <p>
          A full electrical upgrade on an older California home &mdash; including panel
          replacement, rewiring, AFCI/GFCI protection, and tamper-resistant receptacles &mdash;
          can cost $10,000 to $40,000 or more depending on the size and age of the home. This is
          a legitimate L&amp;O cost that should be documented and claimed. Do not let the insurer
          include only the cost of &ldquo;matching&rdquo; the existing wiring &mdash; if the
          building department requires an upgrade, the upgrade cost is covered under L&amp;O.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        B. Structural and Framing Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s seismic requirements have evolved dramatically over the decades. Homes
        built before modern seismic standards were adopted may require significant structural
        upgrades when repaired or rebuilt:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Soft-story retrofit:</strong> Many older multi-story buildings, particularly
          those with tuck-under parking or large openings on the ground floor, are classified as
          &ldquo;soft-story&rdquo; structures vulnerable to collapse in an earthquake. Several
          California cities (including Los Angeles and San Francisco) have mandatory soft-story
          retrofit ordinances. If your building is subject to such an ordinance and you are
          performing major repairs, the retrofit may be triggered.
        </li>
        <li>
          <strong>Cripple wall bracing:</strong> Homes with raised foundations supported by short
          stud walls (cripple walls) between the foundation and the first floor are vulnerable to
          collapse during seismic events. Current code requires structural bracing of cripple walls
          with structural plywood sheathing, proper nailing patterns, and adequate connections to
          both the foundation and the floor framing above.
        </li>
        <li>
          <strong>Anchor bolts and foundation connections:</strong> Older homes often sit on their
          foundations with minimal or no mechanical connection. Current code requires anchor bolts
          (typically 1/2-inch minimum) at specified intervals to secure the mudsill to the
          foundation. Retrofit anchor bolts or epoxy-set anchors may be required.
        </li>
        <li>
          <strong>Shear walls:</strong> Modern seismic codes require shear walls &mdash;
          structural walls designed to resist lateral forces &mdash; at specified locations and
          with specific construction requirements (structural sheathing, nailing schedules, hold-down
          hardware). Older homes may have no engineered shear walls.
        </li>
        <li>
          <strong>Hold-down hardware:</strong> Current framing codes require engineered hold-down
          hardware (such as Simpson HDU or similar) at shear wall ends, openings, and other
          locations where uplift or overturning forces must be resisted. This hardware was not
          required in older construction and must be added during repairs.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        C. Title 24 Energy Code Compliance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Title 24 Energy Code is the most aggressive energy efficiency standard
        in the nation, and it has been substantially tightened with each triennial update. When
        you repair or rebuild, the building department will require compliance with the current
        Title 24 standards, which may differ dramatically from what existed when your home was
        built.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insulation R-values:</strong> Current Title 24 requires significantly higher
          insulation levels than older codes. Attic insulation requirements have increased from
          R-19 or R-30 in older codes to R-38 or higher in current climate zones. Wall insulation,
          floor insulation, and slab insulation requirements have also increased. Bringing an
          older home&rsquo;s insulation up to current standards can require complete removal and
          replacement of existing insulation, addition of continuous exterior insulation, and
          air-sealing measures.
        </li>
        <li>
          <strong>Window performance (U-factor and SHGC):</strong> Current Title 24 requires
          windows to meet specific thermal performance criteria measured by U-factor (rate of
          heat transfer) and Solar Heat Gain Coefficient (SHGC). Older single-pane or early
          double-pane windows almost never meet current standards. Replacement with
          high-performance dual-pane or triple-pane windows with low-E coatings is typically
          required. This is one of the highest-cost single items in a Title 24 upgrade.
        </li>
        <li>
          <strong>HVAC efficiency (SEER2 and AFUE):</strong> Current code requires heating and
          cooling equipment to meet minimum efficiency standards. Air conditioners must meet
          SEER2 (Seasonal Energy Efficiency Ratio 2) minimums, furnaces must meet AFUE (Annual
          Fuel Utilization Efficiency) minimums, and heat pumps must meet HSPF2 (Heating Seasonal
          Performance Factor 2) minimums. If a covered loss damages or necessitates replacement of
          HVAC equipment, the replacement must meet current efficiency standards &mdash; which may
          require a significantly more expensive unit, modified ductwork, or changes to the
          refrigerant lines.
        </li>
        <li>
          <strong>Duct system standards &mdash; Title 24, Part 6, Section 150.0(m):</strong>{' '}
          This is one of the most frequently missed code triggers in L&amp;O claims. When new
          or altered duct sections are installed &mdash; including in connection with HVAC
          equipment change-outs that involve duct modification &mdash; the affected duct
          system must meet current code: R-8 insulation on ducts in unconditioned spaces,
          sealed joints, and mandatory HERS (Home Energy Rating System) verification of duct
          leakage performance in the applicable climate zones. Existing ductwork in older
          homes frequently fails the HERS leakage test because the joints, seams, and duct
          liner have deteriorated over time. The practical result is that significant duct
          sealing, repair, or partial-to-full duct replacement is commonly required to pass
          the verification &mdash; and the cost of that work, depending on scope, can add
          <strong> $10,000 to $30,000 or more</strong> to a claim. Insurers routinely pay only
          for duct &ldquo;cleaning&rdquo; rather than the code-required sealing, retesting,
          and any replacement work needed to achieve compliance.
        </li>
        <li>
          <strong>Heat pump water heaters:</strong> California is aggressively mandating heat pump
          water heaters as part of its electrification strategy. If your existing gas water heater
          is destroyed or must be replaced as part of covered repairs, current code may require
          installation of a heat pump water heater, which is significantly more expensive than a
          standard gas unit and may require electrical upgrades, drainage provisions, and a
          different installation location due to space and airflow requirements.
        </li>
        <li>
          <strong>Whole-house ventilation:</strong> Current Title 24 requires mechanical
          whole-house ventilation systems to ensure adequate indoor air quality in tightly sealed,
          energy-efficient homes. Older homes relied on natural infiltration (air leaking through
          gaps, cracks, and poorly sealed assemblies) for ventilation. Adding a mechanical
          ventilation system &mdash; such as an HRV (Heat Recovery Ventilator) or ERV (Energy
          Recovery Ventilator), or a continuous exhaust system &mdash; is an additional cost.
        </li>
        <li>
          <strong>Solar ready provisions:</strong> Current California code requires new
          construction and certain major renovations to include &ldquo;solar ready&rdquo;
          provisions: designated roof area for future solar panel installation, conduit from the
          roof to the electrical panel, and a panel with space for solar circuit breakers.
          Depending on the scope of your repair, these provisions may be triggered.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Title 24 Compliance Can Add Substantial Costs">
        <p>
          When rebuilding after a loss, homeowners must bring their property into compliance with
          current California building codes (Title 24), which have been significantly updated in
          recent code cycles. These upgrades — including enhanced energy efficiency, fire-hardening,
          electrical panel upgrades, and accessibility improvements — can add substantial costs to a
          rebuild, particularly for homes built under older codes. This is why Ordinance or Law
          coverage, typically offered in increments of 10% to 50% of dwelling coverage, is a
          critical part of any homeowner&apos;s policy. High-performance windows, upgraded
          insulation, efficient HVAC systems, heat pump water heaters, mechanical ventilation, and
          solar-ready provisions are all real costs that the insurer must cover under L&amp;O
          Coverage C if they are required by current code. Do not accept an estimate that prices
          repairs to the old standards.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        D. Plumbing Code Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plumbing code upgrades are frequently overlooked in L&amp;O claims, but they can represent
        significant additional costs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Galvanized pipe replacement:</strong> Homes built before the 1960s often have
          galvanized steel supply piping, which corrodes from the inside, restricts water flow, and
          eventually fails. Current code does not permit galvanized pipe in new installations. If
          a repair requires opening up plumbing systems in a home with galvanized pipe, the
          building department may require replacement with copper or PEX piping throughout the
          affected area or the entire home.
        </li>
        <li>
          <strong>Cast iron drain replacement:</strong> Cast iron drain, waste, and vent (DWV)
          piping was standard in homes built before the 1970s. Cast iron corrodes, develops
          cracks, and eventually fails. Current code uses ABS or PVC plastic piping for DWV
          systems. If a repair involves the DWV system in a home with cast iron drains, replacement
          with approved plastic piping may be required.
        </li>
        <li>
          <strong>Earthquake gas shutoff valves:</strong> California code requires automatic
          earthquake-activated gas shutoff valves (also called seismic gas valves) on the gas
          supply line. If your home does not have one and you are performing repairs that involve
          the gas system, installation of a seismic shutoff valve will be required.
        </li>
        <li>
          <strong>Low-flow fixtures:</strong> Current California code requires low-flow toilets
          (1.28 gallons per flush or less), low-flow showerheads (1.8 GPM or less at 80 psi
          under Title 20 &sect; 1605.1 Tier 2, effective July 2018), and low-flow faucets. If
          your repair involves replacing plumbing fixtures, the replacements must meet current
          flow-rate requirements. While individual fixture costs may be modest, the aggregate
          cost across a full-house renovation can be significant, particularly when older
          toilets require different rough-in dimensions.
        </li>
        <li>
          <strong>Anti-scald valves (thermostatic mixing valves):</strong> Current code requires
          anti-scald protection on shower and tub valves to prevent water temperature from
          exceeding 120&deg;F. Older homes often have single-handle valves without pressure-balancing
          or thermostatic protection. Upgrading every shower and tub valve is a legitimate code
          upgrade cost.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        E. Roof Sheathing and Roofing Material Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing code requirements have changed significantly, particularly in California&rsquo;s
        fire-prone areas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sheathing thickness:</strong> Older homes may have 3/8-inch or 7/16-inch roof
          sheathing that does not meet current minimum requirements. Current code typically requires
          a minimum of 15/32-inch (approximately 1/2-inch) structural panel sheathing with proper
          edge support and nailing. If a roof repair requires accessing or replacing sheathing, the
          replacement must meet current thickness and performance requirements.
        </li>
        <li>
          <strong>Wood shake prohibition in Very High Fire Hazard Severity Zones (VHFHSZ):</strong>{' '}
          California law prohibits wood shake and shingle roofing materials in designated Very High
          Fire Hazard Severity Zones. If your home had a wood shake roof and is in a VHFHSZ, you
          cannot replace the roof with the same material. You must use a Class A fire-rated roofing
          material (concrete tile, clay tile, composition shingle, metal, or other approved material).
          The cost difference between wood shake and a Class A-rated alternative is a legitimate
          L&amp;O cost.
        </li>
        <li>
          <strong>Underlayment requirements:</strong> Current code requires specific underlayment
          types and installation methods. Self-adhering modified bitumen underlayment (ice and
          water shield) is required in certain applications, and minimum weights for felt
          underlayment have been updated. These requirements add material and labor costs beyond
          what the original roof had.
        </li>
        <li>
          <strong>Chapter 7A Wildland-Urban Interface (WUI) provisions:</strong> For homes in
          designated WUI areas, California Building Code Chapter 7A imposes extensive requirements
          for fire-resistant construction, including specific roofing materials, ember-resistant
          vents, ignition-resistant exterior wall coverings, and protected eaves and soffits.
          Compliance with Chapter 7A during roof repair or replacement can add substantial cost.
        </li>
      </ul>

      <CalloutBox variant="warning" title="VHFHSZ and WUI Requirements Are Expanding">
        <p>
          After recent catastrophic wildfires, California has expanded the areas designated as
          Very High Fire Hazard Severity Zones and Wildland-Urban Interface zones. Your home may
          now be in a designated zone even if it was not when the home was built. If you are
          repairing or rebuilding after a fire loss, check with your local building department
          for the current fire zone designation &mdash; the requirements may be far more extensive
          than you expect, and every additional cost is potentially covered under L&amp;O.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        F. Pool, Spa, and Outdoor Code Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Properties with pools, spas, and outdoor systems are subject to code upgrades that are
        almost universally missed by insurance adjusters:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pool barrier fencing &mdash; Health &amp; Safety Code &sect;&sect; 115922&ndash;115929:</strong>{' '}
          California law requires pools and spas to have approved safety barriers. If your pool
          fencing, gates, or barriers are damaged or destroyed, replacements must comply with current
          requirements &mdash; including self-closing, self-latching gates that open away from the
          pool, and barrier heights of at least 60 inches. Older pool enclosures frequently do not
          meet current standards.
        </li>
        <li>
          <strong>Pool bonding and GFCI protection &mdash; NEC Article 680:</strong> The National
          Electrical Code requires equipotential bonding grids around pools and spas, GFCI protection
          on all pool-related circuits, and specific wiring methods for underwater lighting, pumps,
          and heaters. Older pool electrical systems were installed before these requirements existed.
          When pool equipment is damaged and must be replaced, the entire pool electrical system may
          need to be brought to current NEC Article 680 standards &mdash; a significant cost.
        </li>
        <li>
          <strong>Variable speed pool pump &mdash; Title 20, Section 1605.3(g)(4):</strong>{' '}
          California energy efficiency regulations now require variable speed pool pumps for all
          replacement installations. Single-speed pumps &mdash; which were standard for decades &mdash;
          can no longer be installed. A variable speed pump costs substantially more than a
          single-speed replacement, and the cost difference is a legitimate L&amp;O item.
        </li>
        <li>
          <strong>Defensible space and fire-resistant landscaping:</strong> In fire zones, properties
          must maintain defensible space with fire-resistant landscaping. If landscape irrigation
          systems, retaining walls, or vegetation screening were destroyed and must be replaced,
          current fire code requirements (including LA County Fire Code Section 4907 and local
          defensible space ordinances) may mandate upgraded systems that exceed what was there before.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        III. Zoning-Driven Ordinance and Law Issues
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Law and Ordinance coverage is not limited to building codes. It also covers costs imposed
        by zoning requirements, land use regulations, and other governmental rules that affect
        how your home can be repaired or rebuilt. Zoning issues can be just as impactful as
        building code upgrades &mdash; and sometimes more so.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A. Non-Conforming Use and Setback Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many older homes are &ldquo;non-conforming&rdquo; under current zoning rules. This means
        the home was legally built under the zoning rules in effect at the time, but subsequent
        changes to the zoning code have made certain features non-compliant. Common non-conforming
        issues include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Setback requirements:</strong> The home may be closer to the property line than
          current zoning allows. If the home is destroyed beyond a certain threshold (often 50%
          of value), the rebuilt home may need to comply with current setback requirements, which
          could mean a smaller footprint, a different building envelope, or a complete redesign.
        </li>
        <li>
          <strong>Lot coverage limits:</strong> Current zoning may limit the percentage of the lot
          that can be covered by structures. An older home that covers 60% of the lot may need to
          be rebuilt to cover only 40%, requiring architectural redesign and potentially a smaller
          home.
        </li>
        <li>
          <strong>Height restrictions:</strong> If current zoning has lower height limits than when
          the home was built, a two-story home may need to be redesigned to fit within the current
          height envelope, potentially requiring different roof pitches, ceiling heights, or
          structural approaches.
        </li>
        <li>
          <strong>Parking requirements:</strong> Updated zoning may require additional parking
          spaces, a wider driveway, or a garage that the original home did not have. These
          requirements are imposed by ordinance, not building code, and are covered under L&amp;O.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Non-conforming use issues can fundamentally change the scope of a rebuild. The costs
        associated with redesigning, downsizing, or reconfiguring a home to comply with current
        zoning are legitimate L&amp;O costs &mdash; including architectural and engineering fees
        required to design a compliant structure.
      </p>

      <CalloutBox variant="legal" title="Rebuilding Rights After Disaster">
        <p>
          California law provides some protections for property owners rebuilding after a
          declared disaster, but the specific authority varies by structure type and
          jurisdiction. For multifamily dwellings, Government Code &sect; 65852.25 limits local
          ordinances that would prohibit rebuilding to predamaged size and unit count after fire
          or catastrophic damage, subject to health-and-safety exceptions. For single-family
          and other property types, post-disaster rebuilding rights typically derive from a
          combination of state statutes, local ordinances, and the local zoning code&rsquo;s
          treatment of non-conforming uses. These protections are not absolute and vary by
          jurisdiction. Consult with the local planning department and an attorney to
          understand the rights that apply to a specific situation.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        B. Historic Preservation and Design Standards
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home is in a designated historic district or is individually designated as a
        historic structure, repair and reconstruction must comply with preservation standards that
        go well beyond standard building codes. These requirements can include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Period-appropriate materials:</strong> Historic preservation standards may require
          the use of specific materials that match the original construction &mdash; wood siding
          instead of fiber cement, wood windows instead of vinyl, plaster instead of drywall,
          specific types of roofing materials. These period-appropriate materials are invariably
          more expensive than modern alternatives.
        </li>
        <li>
          <strong>Architectural detail preservation:</strong> Ornamental woodwork, decorative
          moldings, specific window configurations, porch details, and other architectural features
          may need to be replicated or restored to their original design. This often requires
          custom millwork and specialized craftspeople.
        </li>
        <li>
          <strong>Design review requirements:</strong> Historic district commissions or
          architectural review boards may need to approve your repair plans before work begins.
          This adds time and cost to the process, including architectural fees for preparing
          submissions that meet the review board&rsquo;s requirements.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        All of these costs &mdash; the premium for period-appropriate materials, custom millwork,
        specialized labor, and design review compliance &mdash; are legitimate L&amp;O costs
        because they are imposed by ordinances and regulations that govern how the building must
        be constructed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IV. Practical Guidance: Maximizing Law and Ordinance Recovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        L&amp;O coverage is one of the most underutilized coverages in property insurance. Many
        policyholders &mdash; and many insurer adjusters &mdash; do not fully understand what it
        covers or how to document it properly. Here are the steps to maximize your L&amp;O
        recovery:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Review Your Declarations Page for L&amp;O Limits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before anything else, identify your L&amp;O limits on your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. Know the total amount available, and understand whether your policy provides
        separate limits for Coverages A, B, and C of L&amp;O or a single combined limit. Some
        policies include a basic amount (such as 10% of Coverage A) automatically, while others
        require you to have purchased L&amp;O as an endorsement. If you do not have L&amp;O
        coverage or your limits are low, note this immediately &mdash; it affects your entire
        strategy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Engage an Experienced General Contractor Early
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your general contractor is your most important partner in documenting L&amp;O costs. You
        need a GC who understands current code requirements and can provide a detailed estimate
        that separates &ldquo;like-for-like&rdquo; repair costs from &ldquo;code upgrade&rdquo;
        costs. The estimate should clearly identify each code requirement that exceeds the
        original construction, the specific code section or regulation that mandates the upgrade,
        and the incremental cost of compliance. An experienced GC who has worked on insurance
        rebuilds will know how to structure this estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Request a Pre-Application Meeting with the Building Department
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most local building departments will provide a pre-application or pre-submittal meeting
        where you can discuss your project before submitting plans. This is an invaluable step
        for L&amp;O claims because it allows you to learn exactly what the building department
        will require for your specific property. Ask about:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Which current code editions are adopted and in effect</li>
        <li>Whether your repair scope triggers full code compliance or only partial upgrades</li>
        <li>Non-conforming use issues and whether rebuilding rights apply</li>
        <li>Fire zone designation (VHFHSZ, WUI) and associated requirements</li>
        <li>Historical preservation or design review requirements</li>
        <li>Title 24 energy code compliance requirements for the scope of your repair</li>
        <li>Any local amendments that go beyond the statewide code</li>
      </ul>

      <CalloutBox variant="tip" title="Get It in Writing from the Building Department">
        <p>
          After your pre-application meeting, request a written summary or correction list from
          the building department that identifies all code requirements applicable to your repair.
          This written document from a governmental authority is the strongest possible evidence
          that the code upgrades are legally required &mdash; which is exactly what your insurer
          needs to see to approve L&amp;O coverage. An email from the plan checker or
          building official confirming code requirements carries more weight than any contractor
          estimate.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Document Code Requirements Separately from Base Repairs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key to a successful L&amp;O claim is clear separation between the cost of repairing
        the damage (covered under your base dwelling coverage) and the additional cost of
        complying with current codes and regulations (covered under L&amp;O). For each code
        upgrade item, follow this five-step documentation framework:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Code citation:</strong> Identify the specific code section that mandates the
          upgrade (e.g., Title 24, Part 6, Section 150.0(m); NEC Article 680; Health &amp; Safety
          Code &sect; 115922). A code citation from a regulatory body is the strongest possible
          evidence that the upgrade is legally required.
        </li>
        <li>
          <strong>Pre-loss condition:</strong> Document what the original construction had &mdash;
          single-pane windows, R-19 insulation, galvanized pipe, knob-and-tube wiring, single-speed
          pool pump. Photographs, the original permit file, or a contractor&rsquo;s inspection
          report establish the baseline.
        </li>
        <li>
          <strong>Authority Having Jurisdiction (AHJ) confirmation:</strong> Obtain written
          confirmation from the local building department (the AHJ) that the upgrade is required
          for your specific project scope. An email from the plan checker or a correction sheet
          from plan review carries more weight with an insurer than any contractor estimate.
        </li>
        <li>
          <strong>Permitted scope with finals:</strong> Pull the building permits for the upgrade
          work and obtain final inspection sign-off. Permits and final inspection cards prove the
          work was done, was required, and met code. This is your evidence of compliance and your
          receipt for L&amp;O reimbursement.
        </li>
        <li>
          <strong>Cost delta analysis:</strong> For each item, document the cost of the original-spec
          material and installation (base repair cost) versus the cost of the code-compliant
          material and installation (upgrade cost). The difference is your L&amp;O claim amount
          for that line item.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Consult a Public Adjuster or Attorney if L&amp;O Limits Are Insufficient
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your documented code upgrade costs exceed your L&amp;O limits, you have a coverage
        gap that requires professional guidance. A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help you maximize recovery within the available limits, ensure all applicable
        coverages are being utilized, and identify whether any code upgrade costs can be properly
        allocated to other coverages (such as base dwelling coverage for items that are
        &ldquo;betterment&rdquo; vs. true code requirements). If L&amp;O was not offered or was
        inadequately explained by your agent, there may also be an errors and omissions (E&amp;O)
        claim against the agent &mdash; consult an{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
          attorney experienced in insurance coverage
        </Link>{' '}
        for guidance on that possibility.
      </p>

      <CalloutBox variant="important" title="L&amp;O Is One of the Most Underutilized Coverages">
        <p>
          Ordinance or Law coverage is widely recognized across the insurance industry as one of
          the most overlooked and underutilized coverages available to homeowners. Many
          policyholders either do not carry it or carry insufficient limits, leaving them exposed
          to significant upgrade costs when rebuilding to current codes after a loss. Many
          adjusters do not have the technical expertise to identify all applicable code
          requirements, and many policyholders do not know the coverage exists. On older homes,
          L&amp;O can add 25% to 50% or more to the total claim value. If you are handling a
          claim on a home built before 2000, you should be scrutinizing every trade for code
          upgrade requirements &mdash; electrical, plumbing, structural, energy, roofing, fire
          safety, accessibility, and zoning. The money is there; you just have to document it.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        This article is for educational purposes only and does not constitute legal or insurance
        advice. Every claim is different, and your recovery depends on your specific policy
        language, the facts of your loss, and applicable state law. Building code requirements
        vary by jurisdiction and change frequently. For guidance on your particular situation,
        consult a licensed Public Adjuster, a qualified general contractor, and/or an attorney
        experienced in insurance coverage.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
