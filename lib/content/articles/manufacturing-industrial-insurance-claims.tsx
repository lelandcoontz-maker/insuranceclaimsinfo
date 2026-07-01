import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "Manufacturing and Industrial Insurance Claims",
  description:
    "Raw vs. finished goods valuation, machinery breakdown bottlenecks, contamination, OSHA, and supply chain disruption shape every industrial facility claim.",
  summary:
    'Manufacturing claims involve raw-materials versus finished-goods valuation, machinery-breakdown bottlenecks, environmental and OSHA issues, and supply-chain disruption. The interplay of these exposures makes industrial claims uniquely complex to value.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s
          interpretation of California insurance law as a Licensed Public
          Adjuster. It is not legal advice. Manufacturing and industrial
          insurance claims involve complex property valuations, environmental
          regulations, business income projections, and regulatory compliance
          requirements that vary by industry and jurisdiction. If you have a
          disputed claim involving a manufacturing or industrial facility,
          consult with a licensed California attorney who specializes in
          insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A fire breaks out in the electrical room of a mid-size manufacturing
        facility. The fire itself is contained to one section of the building,
        but it destroys the main electrical distribution panel that powers the
        entire production line. The building damage is relatively modest
        &mdash; $200,000 in structural repairs. But the production line is
        down for five months while the panel is rebuilt, the equipment is
        inspected and recertified, and OSHA signs off on the reinstallation.
        Five months of zero production. Five months of continuing fixed
        overhead. Five months of customers who cannot wait and take their
        orders to competitors. The business income loss exceeds $2 million
        &mdash; ten times the property damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the reality of manufacturing and industrial insurance claims.
        The property damage is often the smallest component of the total loss.
        The real devastation comes from the production shutdown, the inventory
        in various stages of completion, the environmental cleanup, the
        regulatory compliance costs of rebuilding, and the supply chain
        disruption that ripples outward to every customer who depends on your
        output. Manufacturing claims are among the most complex and
        highest-value claims in commercial insurance, and they are among the
        most aggressively adjusted by carriers.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Manufacturing Facilities Face Unique Insurance Complexities
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A manufacturing facility is not a warehouse that stores goods. It is
        not a retail shop that sells them. It is a facility that{' '}
        <strong>transforms</strong> materials &mdash; and that transformation
        process creates insurance complexities that no other property type
        matches:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Inventory exists in three simultaneous states</strong> &mdash;
          raw materials, work-in-process, and finished goods &mdash; each with
          a different valuation.
        </li>
        <li>
          <strong>Equipment is interdependent.</strong> A single machine failure
          can stop an entire production line even when 90% of the equipment is
          undamaged.
        </li>
        <li>
          <strong>Environmental contamination</strong> from manufacturing
          chemicals can turn a fire or water loss into a hazmat remediation
          project.
        </li>
        <li>
          <strong>Regulatory compliance</strong> (OSHA, EPA, Cal/OSHA, local
          fire codes) can force expensive upgrades during rebuilding that
          transform a repair into a modernization.
        </li>
        <li>
          <strong>Supply chain position</strong> means that your shutdown
          affects your customers, and your suppliers&rsquo; shutdowns affect
          you &mdash; creating both direct and contingent business income
          exposures.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these complexities creates a distinct coverage issue under a
        commercial property policy, and carriers exploit every one of them to
        minimize claim payments.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inventory Valuation: Three Different Values in One Building
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At any given moment, a manufacturing facility contains inventory in
        three distinct states, and each state has a different insurance
        valuation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Raw materials</strong> are valued at cost &mdash; what the
          manufacturer paid to acquire them. Steel, lumber, chemicals, fabrics,
          electronic components, and other inputs are valued at their purchase
          price plus any freight or handling costs to bring them to the
          facility.
        </li>
        <li>
          <strong>Work-in-process (WIP)</strong> is valued at accumulated cost
          &mdash; the cost of raw materials plus the labor, overhead, and
          processing costs that have been invested in the product so far. A
          sheet of aluminum worth $50 that has been cut, stamped, anodized, and
          partially assembled has a WIP value that may be several hundred
          dollars. The ISO commercial property form values stock at
          &ldquo;selling price&rdquo; for finished goods but is less clear on
          WIP, creating a valuation dispute that carriers exploit.
        </li>
        <li>
          <strong>Finished goods</strong> are valued at selling price under the
          standard ISO commercial property valuation conditions. The ISO
          CP 00 10 form states that stock is valued at selling price if the
          property is &ldquo;stock sold but not delivered.&rdquo; For finished
          goods awaiting shipment, this is the full market value including the
          manufacturer&rsquo;s profit margin.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The WIP Valuation Battle">
        <p>
          Carriers routinely undervalue work-in-process inventory by valuing it
          at raw material cost rather than accumulated cost. A partially
          assembled product that has gone through five manufacturing steps has
          absorbed labor, overhead, and processing costs at each step. If the
          carrier values it at the cost of the raw materials alone, the
          manufacturer loses the investment in every processing step. Demand
          that WIP be valued at accumulated cost, including allocated labor and
          overhead for each completed production step. This is the economically
          accurate measure of what was lost.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The total inventory value in a manufacturing facility can fluctuate
        significantly based on production cycles, seasonal demand, and raw
        material prices. A facility might carry $500,000 in raw material
        inventory in January and $2 million in August as it builds stock for
        a seasonal peak. This fluctuation creates a{' '}
        <Link
          href="/resources/commercial-coinsurance"
          className="text-blue-700 underline hover:text-blue-900"
        >
          coinsurance problem
        </Link>{' '}
        that can devastate the manufacturer at claim time.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Machinery Breakdown and Production Bottleneck Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturing production lines are designed as integrated systems where
        materials flow sequentially through multiple machines and processes. The
        capacity of the entire line is limited by the capacity of the slowest
        machine &mdash; the bottleneck. When the bottleneck machine goes down,
        the entire line stops, even if every other machine is undamaged and
        operational.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From an insurance perspective, the bottleneck problem means that the
        business income loss from a single machine failure can be
        disproportionately large compared to the cost of the machine itself.
        A CNC milling machine worth $250,000 that takes four months to replace
        and recalibrate can cause $1.5 million in business income losses
        because the entire $5 million production line sits idle without it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard commercial property coverage &mdash; the ISO CP 00 10 coverage form paired with a
        Causes of Loss form (CP 10 30 Special, CP 10 20 Broad, or CP 10 10 Basic) &mdash; does not
        cover mechanical or electrical breakdown of equipment. The mechanical breakdown exclusion
        lives in the Causes of Loss form, not in CP 00 10 itself. If the CNC machine
        fails due to an internal electrical fault, bearing failure, or
        control system malfunction, the property policy will deny the claim
        because there is no external &ldquo;covered cause of loss.&rdquo;
        This is where{' '}
        <Link
          href="/resources/equipment-breakdown-coverage"
          className="text-blue-700 underline hover:text-blue-900"
        >
          equipment breakdown coverage
        </Link>{' '}
        becomes essential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown (EB) coverage &mdash; formerly boiler and
        machinery insurance &mdash; covers losses caused by the internal
        breakdown of mechanical and electrical equipment. For manufacturing
        facilities, this includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Production machinery (CNC machines, lathes, presses, injection
          molding machines, conveyor systems)
        </li>
        <li>
          HVAC and climate control systems critical to manufacturing processes
        </li>
        <li>
          Boilers, pressure vessels, and steam systems
        </li>
        <li>
          Electrical distribution equipment (transformers, switchgear, motor
          control centers)
        </li>
        <li>
          Compressors and pneumatic systems
        </li>
        <li>
          Programmable logic controllers (PLCs) and industrial control systems
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, equipment breakdown coverage also includes the business
        income loss that results from the breakdown. If the bottleneck machine
        fails internally and the entire line is down for three months, the EB
        policy&rsquo;s business income coverage should respond for the full
        production loss &mdash; not just the cost of the machine.
      </p>

      <CalloutBox variant="info" title="Equipment Breakdown and the Bottleneck">
        <p>
          When filing an equipment breakdown claim for a manufacturing facility,
          document not only the failed equipment but the entire production
          impact. If one machine&rsquo;s failure stops the entire line, the
          business income claim should reflect the total line output lost, not
          just the output of the failed machine. Carriers will attempt to limit
          the BI calculation to the machine&rsquo;s individual output.
          Push back: the machine&rsquo;s output{' '}
          <strong>was</strong> the line&rsquo;s output because nothing else
          could run without it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Environmental Contamination and the Pollution Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturing facilities use, store, and generate chemicals, solvents,
        lubricants, coolants, and waste products that create environmental
        contamination exposure. When a fire, explosion, or equipment failure
        releases these materials, the cleanup cost can dwarf the property damage
        itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link
          href="/resources/pollution-exclusion-claims"
          className="text-blue-700 underline hover:text-blue-900"
        >
          pollution exclusion
        </Link>{' '}
        in standard commercial property and CGL policies (ISO CG 00 01,
        Exclusion f) is one of the broadest exclusions in insurance. It
        excludes coverage for bodily injury or property damage arising out of
        the &ldquo;actual, alleged or threatened discharge, dispersal, seepage,
        migration, release or escape of pollutants.&rdquo; The definition of
        &ldquo;pollutants&rdquo; is sweepingly broad: &ldquo;any solid, liquid,
        gaseous or thermal irritant or contaminant, including smoke, vapor,
        soot, fumes, acids, alkalis, chemicals and waste.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For manufacturers, this exclusion can be devastating. A fire releases
        chemical fumes that contaminate the entire facility. The fire damage
        is covered. The chemical remediation is not &mdash; at least not under
        the standard property policy. The carrier pays to repair the fire
        damage but denies the $500,000 environmental cleanup on pollution
        exclusion grounds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have addressed the pollution exclusion extensively.
        In <em>MacKinnon v. Truck Ins. Exchange</em> (2003) 31 Cal.4th 635,
        the California Supreme Court held that the pollution exclusion applies
        to &ldquo;traditional environmental contamination&rdquo; but may not
        apply to all situations involving substances that happen to fall within
        the literal definition of &ldquo;pollutants.&rdquo; The case-by-case
        nature of this analysis means that manufacturers should not accept a
        pollution exclusion denial at face value. The specific chemicals
        involved, the circumstances of the release, and the policy language
        all matter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturers who use hazardous materials should carry a separate
        environmental liability or pollution legal liability policy that
        specifically covers cleanup costs, third-party liability, and
        business income losses arising from pollution events at the insured
        facility.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income When You Are the Supply Chain Bottleneck
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a manufacturer shuts down, the impact does not stop at the
        facility&rsquo;s walls. Every customer who depends on the
        manufacturer&rsquo;s output is affected. A parts manufacturer that
        supplies an automotive assembly line can shut down the assembly line
        within days. A food ingredient producer that supplies restaurant
        chains can disrupt regional supply for weeks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The manufacturer&rsquo;s own{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business income coverage
        </Link>{' '}
        should pay for the manufacturer&rsquo;s lost income during the
        shutdown. But the downstream customers&rsquo; losses are a separate
        question. The manufacturer may face breach of contract claims,
        penalty clauses in supply agreements, and the permanent loss of
        customers who switch to alternative suppliers during the shutdown.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These downstream impacts are generally <strong>not</strong> covered
        under the manufacturer&rsquo;s business income policy. The BI policy
        covers the manufacturer&rsquo;s own lost net income and continuing
        expenses. It does not cover contractual penalties paid to customers
        or the long-term revenue loss from customers who never come back.
        Some commercial property programs include &ldquo;extended period of
        indemnity&rdquo; coverage that continues business income payments
        beyond the repair period to account for the time needed to rebuild
        the customer base. This endorsement is critical for manufacturers
        &mdash; the day the factory reopens is not the day revenue returns
        to pre-loss levels.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contingent Business Income: When Your Supplier Shuts Down
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reverse scenario is equally devastating.{' '}
        <Link
          href="/resources/contingent-business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Contingent business income (CBI) coverage
        </Link>{' '}
        responds when your business loses income because a{' '}
        <strong>supplier or customer</strong> suffers a covered property loss.
        For manufacturers who depend on specialized raw materials from a
        limited number of suppliers, a single supplier&rsquo;s shutdown can
        halt production entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI coverage is not included in the standard ISO business income form
        &mdash; it must be added by endorsement. The standard endorsement
        (ISO CP 15 08, Business Income from Dependent Properties) covers income
        lost due to direct physical loss or damage at the premises of a
        &ldquo;dependent property&rdquo; &mdash; defined as a contributing
        location (supplier), a recipient location (customer), a manufacturing
        location, or a leader location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturers should pay careful attention to several CBI issues:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Named vs. unnamed dependent properties.</strong> Some CBI
          endorsements require that dependent properties be specifically named
          in the policy schedule. If a key supplier is not listed, the
          coverage may not respond. Broader &ldquo;unnamed&rdquo; CBI
          endorsements cover any supplier or customer without requiring them
          to be specifically identified, but they often carry lower sublimits.
        </li>
        <li>
          <strong>Sole supplier vs. multiple source.</strong> If you source a
          critical component from a single supplier and that supplier is
          destroyed, CBI should respond for the full production loss. If you
          have multiple suppliers and one goes down, the carrier will argue
          that you should have shifted production to the remaining suppliers,
          reducing the CBI claim.
        </li>
        <li>
          <strong>International supply chain.</strong> Many manufacturers
          source materials globally. CBI coverage typically extends worldwide,
          but the &ldquo;direct physical loss or damage&rdquo; trigger means
          that supply disruptions caused by government action, trade
          restrictions, or port closures &mdash; without physical damage to
          the supplier &mdash; may not be covered.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        OSHA Compliance After Rebuilding
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a manufacturing facility is damaged and rebuilt, the rebuilt
        portions must comply with current safety standards &mdash; not the
        standards that existed when the facility was originally constructed.
        In California, this means compliance with Cal/OSHA (Title 8 of the
        California Code of Regulations), federal OSHA standards, and
        applicable fire and building codes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of bringing a damaged facility up to current code can be
        substantial. A manufacturing facility built in 1990 that is damaged
        by fire in 2026 may need to meet current requirements for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Machine guarding and lockout/tagout (LOTO) systems that did not exist
          when the equipment was originally installed.
        </li>
        <li>
          Ventilation and air quality standards (Cal/OSHA permissible exposure
          limits) that have been tightened since the facility was built.
        </li>
        <li>
          Electrical code upgrades (NEC/NFPA 70) for the rewired portions of
          the facility.
        </li>
        <li>
          Fire protection system upgrades, including sprinkler system
          enhancements required by current NFPA standards for the occupancy
          classification.
        </li>
        <li>
          ADA accessibility requirements for rebuilt areas.
        </li>
        <li>
          Seismic bracing and structural requirements under current California
          Building Code for any structural repairs.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard commercial property policies exclude the cost of complying
        with building codes and regulations that require improvements beyond
        pre-loss condition. This gap is addressed by{' '}
        <Link
          href="/resources/commercial-ordinance-law"
          className="text-blue-700 underline hover:text-blue-900"
        >
          ordinance or law coverage
        </Link>{' '}
        (ISO CP 04 05 or equivalent endorsement), which pays for the increased
        cost of construction when building codes require upgrades during
        reconstruction. For manufacturers, ordinance or law coverage is not
        optional &mdash; it is essential. Without it, the manufacturer bears
        the full cost of every code upgrade triggered by the reconstruction.
      </p>

      <CalloutBox variant="warning" title="The OSHA Upgrade Trap">
        <p>
          Carriers will pay to restore the facility to its pre-loss condition.
          They will not voluntarily pay for upgrades required by current OSHA,
          Cal/OSHA, or building code standards unless the policy includes
          ordinance or law coverage. If the carrier&rsquo;s scope of repair
          does not include current code compliance costs, and your local
          building department or Cal/OSHA requires those upgrades before you
          can reopen, you are stuck paying the difference out of pocket. Make
          sure your ordinance or law limits are adequate to cover the full
          code upgrade exposure for your facility.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coinsurance Problem with Fluctuating Raw Material Prices
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link
          href="/resources/commercial-coinsurance"
          className="text-blue-700 underline hover:text-blue-900"
        >
          coinsurance clause
        </Link>{' '}
        in commercial property policies requires the insured to carry coverage
        equal to a specified percentage (typically 80%, 90%, or 100%) of the
        total insurable value of covered property. If the insured&rsquo;s
        coverage limit is less than the required percentage at the time of loss,
        the coinsurance penalty reduces the claim payment proportionally.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For manufacturers, the coinsurance problem is amplified by raw material
        price volatility. Steel, aluminum, copper, lumber, resins, and
        petrochemicals can fluctuate 30&ndash;50% or more in a single year. A
        manufacturer who set insurance limits based on $3,000/ton steel may
        find that steel is $5,000/ton at the time of loss. The total insurable
        value has increased by 40%, but the policy limits have not. The
        coinsurance penalty applies, reducing the payout on every claim &mdash;
        even claims that are well below the policy limit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturers have several options to address coinsurance exposure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Agreed value endorsement:</strong> Suspends the coinsurance
          clause for the policy period. The carrier agrees that the declared
          value is adequate, eliminating the coinsurance penalty. This requires
          submitting a statement of values annually.
        </li>
        <li>
          <strong>Peak season endorsement:</strong> Allows the manufacturer to
          carry higher limits during periods when inventory values peak (e.g.,
          building stock for a seasonal shipping rush).
        </li>
        <li>
          <strong>Quarterly value reporting:</strong> The manufacturer reports
          actual inventory values quarterly, and the policy adjusts coverage
          accordingly. This is more administratively burdensome but more
          accurately reflects fluctuating values.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fire Protection and Sprinkler Systems for Industrial Occupancies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturing and industrial facilities are classified under NFPA
        occupancy and hazard classifications that directly affect insurance
        requirements and premiums. A light manufacturing facility (NFPA Ordinary
        Hazard Group 1) has very different sprinkler requirements than a
        chemical manufacturing facility (NFPA Extra Hazard Group 2).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From an insurance perspective, fire protection systems create both
        premium credits and coverage obligations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Protective safeguard endorsement (CP 04 11):</strong> If the
          commercial property policy includes a protective safeguard endorsement
          that lists the sprinkler system as a required safeguard (symbol
          &ldquo;P-1&rdquo;), the insured must maintain the sprinkler system in
          working order. If the sprinkler system is out of service or impaired
          at the time of a fire, the carrier may deny the claim based on the
          protective safeguard violation.
        </li>
        <li>
          <strong>Sprinkler leakage coverage:</strong> While sprinkler systems
          prevent catastrophic fire losses, they also create a water damage
          exposure. Accidental discharge, broken heads, and frozen lines can
          cause significant water damage. Sprinkler leakage is a covered cause
          of loss under the standard commercial property form, but the damage
          from a manufacturing facility sprinkler discharge &mdash;
          particularly if it contaminates product or raw materials &mdash; can
          be massive.
        </li>
        <li>
          <strong>Impairment notification:</strong> California Fire Code
          requires that building owners notify the fire department and their
          insurer when a sprinkler system is impaired for more than a specified
          period. Failure to notify can create both a regulatory violation and a
          coverage defense.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Ordinance or Law Implications for Industrial Buildings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Industrial buildings in California face unique{' '}
        <Link
          href="/resources/commercial-ordinance-law"
          className="text-blue-700 underline hover:text-blue-900"
        >
          ordinance or law exposures
        </Link>{' '}
        beyond standard building code compliance. California&rsquo;s
        environmental regulations, seismic codes, and industrial safety
        standards are among the most stringent in the nation, and a major loss
        can trigger mandatory upgrades across multiple regulatory frameworks
        simultaneously:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Environmental remediation requirements</strong> under DTSC
          (Department of Toxic Substances Control) regulations may be triggered
          when damage exposes contaminated soil, asbestos-containing materials,
          or lead paint in older industrial buildings.
        </li>
        <li>
          <strong>Air quality permits</strong> from local air quality management
          districts (AQMD) may need to be re-obtained when equipment is
          replaced, and current emission standards may require more expensive
          equipment than what was destroyed.
        </li>
        <li>
          <strong>Wastewater discharge permits</strong> may need to be amended
          or renewed, triggering system upgrades to meet current discharge
          standards.
        </li>
        <li>
          <strong>Seismic retrofit requirements</strong> may be triggered for
          structural repairs in areas with mandatory retrofit ordinances
          (Los Angeles, San Francisco, and other California cities).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without adequate ordinance or law coverage, the manufacturer bears
        every dollar of these regulatory upgrade costs. The standard three
        coverages under ordinance or law &mdash; Coverage A (loss to the
        undamaged portion), Coverage B (demolition cost), and Coverage C
        (increased cost of construction) &mdash; should be carried with limits
        that reflect the specific regulatory exposure of the facility.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Coverage Checklist for Manufacturers
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial property coverage</strong> with limits that
          reflect the full replacement cost of the building, all machinery and
          equipment, and the maximum inventory value (including raw materials
          at current market prices, WIP at accumulated cost, and finished goods
          at selling price).
        </li>
        <li>
          <strong>
            <Link
              href="/resources/equipment-breakdown-coverage"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Equipment breakdown coverage
            </Link>
          </strong>{' '}
          for all critical production equipment, with business income coverage
          included in the EB policy.
        </li>
        <li>
          <strong>
            <Link
              href="/resources/business-interruption"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Business income coverage
            </Link>
          </strong>{' '}
          with limits calculated on 12&ndash;18 months of projected revenue (not
          just historical), plus an extended period of indemnity endorsement
          to cover the ramp-up period after reopening.
        </li>
        <li>
          <strong>
            <Link
              href="/resources/contingent-business-interruption"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Contingent business income coverage
            </Link>
          </strong>{' '}
          with adequate limits, covering both named and unnamed dependent
          properties (key suppliers and customers).
        </li>
        <li>
          <strong>
            <Link
              href="/resources/commercial-ordinance-law"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Ordinance or law coverage
            </Link>
          </strong>{' '}
          (Coverages A, B, and C) with limits that reflect the full regulatory
          upgrade exposure, including OSHA, Cal/OSHA, environmental, and
          building code requirements.
        </li>
        <li>
          <strong>Environmental / pollution liability coverage</strong> for
          facilities that use, store, or generate hazardous materials.
        </li>
        <li>
          <strong>
            <Link
              href="/resources/spoilage-coverage"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Spoilage coverage
            </Link>
          </strong>{' '}
          if the facility handles temperature-sensitive raw materials or
          finished products.
        </li>
        <li>
          <strong>Agreed value endorsement</strong> or value reporting form to
          address{' '}
          <Link
            href="/resources/commercial-coinsurance"
            className="text-blue-700 underline hover:text-blue-900"
          >
            coinsurance
          </Link>{' '}
          exposure from fluctuating inventory and raw material values.
        </li>
        <li>
          <strong>Inland marine / installation floater</strong> for equipment
          in transit, equipment being installed, and property at temporary
          locations.
        </li>
        <li>
          <strong>Cyber liability coverage</strong> for facilities with
          networked industrial control systems (SCADA, PLCs, IoT devices)
          that are vulnerable to cyberattack.
        </li>
      </ul>

      <CalloutBox variant="info" title="The Bottom Line">
        <p>
          Manufacturing insurance claims are complex because manufacturing
          itself is complex. The interaction between property damage, equipment
          breakdown, inventory valuation, business income, regulatory
          compliance, and supply chain disruption creates a claims environment
          where carriers have dozens of opportunities to minimize payments.
          The time to close coverage gaps is before a loss occurs. Review your
          property limits against current values, verify that equipment
          breakdown coverage is in place for every critical machine, ensure
          that ordinance or law limits reflect your regulatory exposure, and
          confirm that your business income coverage accounts for the full
          restoration period &mdash; including the ramp-up time needed to
          bring production and customers back to pre-loss levels.
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
