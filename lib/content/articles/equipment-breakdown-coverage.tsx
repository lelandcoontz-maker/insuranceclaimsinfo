import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Equipment Breakdown Coverage: What Homeowners and Business Owners Need to Know',
  description:
    'Equipment breakdown insurance (formerly boiler and machinery) covers mechanical and electrical failures that standard property policies exclude. Learn what is covered, how to file a claim, and how to avoid costly coverage gaps.',
  summary:
    'Equipment breakdown coverage (formerly boiler and machinery) pays for sudden mechanical or electrical failures that standard property policies exclude, such as HVAC, electrical panels, or appliances. Add it to close a common and expensive gap.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your commercial freezer compressor burns out on a Friday night and $40,000 worth of
        inventory spoils before Monday morning. Your building&apos;s boiler fails in January
        and the pipes freeze. Your HVAC system&apos;s compressor seizes in August and your
        tenants are without air conditioning for two weeks. You call your insurance company,
        and the adjuster tells you: &ldquo;That&apos;s not covered under your property policy.
        That&apos;s a mechanical breakdown.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where equipment breakdown coverage comes in. It fills one of the most significant
        gaps in standard property insurance &mdash; the gap between damage caused by external
        events (fire, wind, lightning) and damage caused by internal mechanical or electrical
        failure. If you own a home with an HVAC system, a water heater, and an electrical panel,
        you have equipment that can fail internally. If you own a business, the exposure is
        dramatically larger. Equipment breakdown coverage &mdash; formerly known as boiler and
        machinery insurance &mdash; is the policy designed to respond when equipment fails from
        the inside out.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Coverage Gap: External vs. Internal Causes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand why equipment breakdown coverage exists, you need to understand the basic
        architecture of a property insurance policy. Standard property policies &mdash; whether
        homeowner&apos;s (HO-3, HO-5) or commercial property (CP 00 10) &mdash; cover damage
        caused by external events. Fire, windstorm, hail, lightning, explosion, vandalism,
        vehicle impact, falling objects &mdash; these are all covered perils because they originate
        outside the equipment itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What property policies do <strong>not</strong> cover is damage that originates from
        within the equipment. When a motor burns out because its windings deteriorated over time,
        when a compressor seizes because of internal bearing failure, when a boiler&apos;s pressure
        vessel cracks from metal fatigue, when an electrical panel arcs internally due to a loose
        connection &mdash; none of these events are covered under a standard property policy.
        The policy was never designed to cover them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction creates a massive gap for property owners. The most expensive and most
        critical building systems &mdash; HVAC, electrical, plumbing, elevators, commercial
        refrigeration &mdash; are the ones most likely to experience internal failure. And when
        they do fail, the resulting damage can be far more costly than the equipment itself:
        frozen pipes from a boiler failure, spoiled inventory from a refrigeration failure,
        business income lost during repairs.
      </p>

      <CalloutBox variant="info" title="The Name Change: From Boiler and Machinery to Equipment Breakdown">
        <p>
          Equipment breakdown coverage used to be called &ldquo;boiler and machinery&rdquo;
          insurance. The name reflected its origins in the industrial age, when steam boilers
          were the primary concern. Today, the coverage has evolved to protect against failures
          in a wide range of mechanical, electrical, and electronic equipment &mdash; from HVAC
          compressors and electrical panels in homes to CT scanners and data center cooling
          systems in commercial buildings. Most insurers rebranded the product as
          &ldquo;equipment breakdown&rdquo; to reflect the modern scope of coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Equipment Breakdown Coverage Insures
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown coverage responds when &ldquo;covered equipment&rdquo; suffers a
        &ldquo;breakdown.&rdquo; Those two defined terms control everything about how the
        coverage works.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Covered equipment</strong> typically includes any equipment that generates,
        transmits, or uses mechanical or electrical power. Under the ISO Equipment Breakdown
        Protection Coverage Form (EB 00 20), covered equipment includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Boilers and pressure vessels.</strong> Steam boilers, hot water boilers,
          pressure tanks, expansion tanks, and any vessel designed to operate under internal
          pressure.
        </li>
        <li>
          <strong>Mechanical equipment.</strong> Compressors (HVAC, refrigeration, air),
          pumps, fans, blowers, engines, turbines, generators, and any equipment with moving
          parts that can seize, wear, or break.
        </li>
        <li>
          <strong>Electrical equipment.</strong> Transformers, switchgear, bus ducts, electrical
          panels, distribution boards, motors, and any equipment that generates, transmits, or
          uses electrical energy.
        </li>
        <li>
          <strong>Electronic equipment.</strong> Computers, servers, telecommunications
          equipment, building management systems, security systems, and other electronic
          devices.
        </li>
        <li>
          <strong>Refrigeration and air conditioning.</strong> Commercial refrigeration units,
          walk-in coolers and freezers, chillers, cooling towers, and HVAC systems.
        </li>
        <li>
          <strong>Elevators and escalators.</strong> Both the mechanical and electrical
          components.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Breakdown</strong> is defined as direct physical damage to covered equipment
        caused by one or more of the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mechanical failure</strong> &mdash; including rupture, bursting, cracking,
          or seizing of internal moving parts.
        </li>
        <li>
          <strong>Electrical arcing</strong> &mdash; abnormal electrical discharge within
          equipment, such as a motor winding short or a transformer flashover.
        </li>
        <li>
          <strong>Explosion of steam boilers or pressure vessels</strong> &mdash; a sudden and
          accidental tearing apart of the equipment by force of internal steam or other pressure.
        </li>
        <li>
          <strong>Artificially generated electrical current</strong> &mdash; including power
          surges, electrical disturbances, and voltage spikes that damage covered equipment.
          This is significant because many property policies exclude artificially generated
          current.
        </li>
      </ul>

      <CalloutBox variant="warning" title="What Is NOT a Breakdown">
        <p>
          Equipment breakdown coverage does not respond to every equipment failure. It
          specifically excludes damage caused by fire (covered by the property policy),
          ordinary wear and tear, depletion, deterioration, corrosion, erosion, settling,
          and gradual degradation. It also excludes cosmetic damage and damage to consumable
          parts like filters, belts, and fuses that are expected to be replaced periodically.
          The coverage is designed for <em>sudden and accidental</em> internal failures, not
          for the predictable decline of equipment over time.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Equipment Breakdown Coverage Works with Property Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown coverage is not a standalone replacement for property insurance.
        It works alongside your property policy to fill the gaps. Think of it as a
        complementary coverage that picks up where the property policy leaves off.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an external peril causes equipment to fail &mdash; for example, a fire damages
        your HVAC system or a falling tree crushes your compressor &mdash; the property policy
        responds. When an internal cause makes the equipment fail &mdash; a compressor seizes,
        a motor burns out, a boiler cracks from metal fatigue &mdash; the equipment breakdown
        policy responds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many modern commercial insurance programs, equipment breakdown coverage is written as
        an endorsement to the property policy rather than as a separate policy. This simplifies
        the relationship between the two coverages and reduces gaps. But whether it is an
        endorsement or a standalone policy, the principle is the same: property insurance covers
        external causes, and equipment breakdown covers internal causes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Overlap Question: Lightning and Equipment Failure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common coverage disputes arises when a covered external peril causes
        equipment to fail internally. The classic example is{' '}
        <Link href="/resources/lightning-damage" className="text-[#2E74B5] hover:underline">
          lightning
        </Link>. A lightning strike sends a massive electrical surge through your building&apos;s
        wiring. The surge destroys a motor winding in your HVAC compressor, fries the control
        board in your commercial refrigeration unit, and damages the bus bars in your electrical
        panel.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Which coverage responds? Lightning is a named peril under the property policy. But the
        damage mechanism &mdash; electrical arcing, motor burnout &mdash; looks like an equipment
        breakdown. Here is how it typically works:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>If the proximate cause is lightning,</strong> the property policy should respond
          first. Lightning is a covered peril, and the resulting equipment damage is a direct
          consequence of that covered peril. Do not let the insurer redirect you to the equipment
          breakdown coverage if lightning caused the failure.
        </li>
        <li>
          <strong>If the property policy contains an &ldquo;artificially generated electrical
          current&rdquo; exclusion,</strong> the insurer may argue that the lightning-induced
          surge is excluded under the property form. This is where the equipment breakdown
          coverage becomes the backup &mdash; it explicitly covers artificially generated
          current, including lightning-induced surges. Either way, you should be covered under
          one policy or the other.
        </li>
        <li>
          <strong>If both coverages could apply,</strong> the &ldquo;other insurance&rdquo;
          provisions in each policy determine which pays first. In most cases, when equipment
          breakdown is endorsed onto the property policy, the carrier handles the allocation
          internally. When they are separate policies from different carriers, coordination
          can become more complicated.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Protect Yourself from the Coverage Gap">
        <p>
          The worst outcome is when neither coverage responds &mdash; the property insurer
          says it is an equipment breakdown and the equipment breakdown insurer says it is a
          property loss. To prevent this, make sure your property policy and equipment breakdown
          coverage are with the same carrier, or that the two policies explicitly coordinate
          coverage for overlapping events. Review your policy language carefully. For more on
          understanding your policy structure, see our guide on{' '}
          <Link href="/resources/how-to-read-your-policy" className="text-[#2E74B5] hover:underline">
            how to read your insurance policy
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Residential Equipment Breakdown Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown coverage is no longer just a commercial product. Many homeowner&apos;s
        policies now include an equipment breakdown endorsement, and some carriers include it
        automatically. For homeowners, this coverage protects the major mechanical and electrical
        systems in the home that are most likely to experience internal failure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>HVAC systems.</strong> Central air conditioning compressors, heat pumps,
          furnace blower motors, and mini-split systems. When a compressor seizes in the
          middle of summer or a furnace blower motor burns out in winter, the property policy
          does not cover the repair. Equipment breakdown does.
        </li>
        <li>
          <strong>Water heaters.</strong> Both tank and tankless water heaters can fail
          internally &mdash; heating elements burn out, thermostats fail, tanks rupture from
          internal pressure or sediment buildup.
        </li>
        <li>
          <strong>Electrical panels.</strong> Arc faults, bus bar failures, and breaker
          malfunctions originating inside the panel.
        </li>
        <li>
          <strong>Kitchen appliances.</strong> Built-in ovens, dishwashers, garbage disposals,
          and built-in microwaves. Some endorsements extend to refrigerators and washers/dryers
          as well.
        </li>
        <li>
          <strong>Well pumps and sump pumps.</strong> Motor burnout, impeller failure, and
          control switch malfunctions.
        </li>
        <li>
          <strong>Pool and spa equipment.</strong> Pump motors, heaters, and control systems.
          For more on pool-related claims, see our article on{' '}
          <Link href="/resources/swimming-pool-damage" className="text-[#2E74B5] hover:underline">
            swimming pool damage claims
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="info" title="Check Whether Your Homeowner&apos;s Policy Already Includes It">
        <p>
          Some homeowner&apos;s policies &mdash; particularly from major carriers like State Farm,
          Allstate, and USAA &mdash; include equipment breakdown coverage automatically or for
          a very small additional premium (often $20 to $50 per year). Others exclude it entirely
          or offer it as an optional endorsement. Check your declarations page and endorsement
          schedule. If you do not see an equipment breakdown endorsement, ask your agent about
          adding one. The cost is minimal relative to the exposure.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Equipment Breakdown Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For businesses, equipment breakdown coverage is far more than a convenience &mdash; it
        is a critical necessity. The scope and cost of commercial equipment failures dwarf
        residential ones. Consider the types of businesses where equipment breakdown exposure
        is highest:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Restaurants and food service.</strong> Commercial refrigeration, walk-in
          coolers and freezers, HVAC systems, cooking equipment, ice machines. A compressor
          failure in a walk-in freezer can destroy thousands of dollars in food inventory
          overnight.
        </li>
        <li>
          <strong>Hotels and hospitality.</strong> Boilers, chillers, elevators, laundry
          equipment, commercial HVAC systems. A boiler failure in winter can make the property
          uninhabitable and create freeze damage to pipes throughout the building.
        </li>
        <li>
          <strong>Manufacturing facilities.</strong> Production machinery, CNC equipment,
          compressors, conveyors, electrical distribution systems. A single motor failure on
          a production line can halt operations and cost tens of thousands in lost output per day.
        </li>
        <li>
          <strong>Data centers and technology companies.</strong> Servers, UPS systems, cooling
          systems, generators, electrical switchgear. A cooling system failure in a data center
          can force emergency shutdowns and cause permanent damage to servers.
        </li>
        <li>
          <strong>Medical facilities.</strong> MRI machines, CT scanners, sterilization
          equipment, backup generators, refrigerated medication storage. Equipment failures
          in medical settings can have patient safety implications on top of financial losses.
        </li>
        <li>
          <strong>Apartment buildings and commercial real estate.</strong> Boilers, elevators,
          central HVAC systems, fire suppression pumps, and building management systems. A
          boiler or elevator failure in a multi-story building can affect every tenant and
          create habitability issues that trigger lease provisions.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For commercial properties, equipment breakdown coverage is typically written as part of
        the commercial property program. The ISO Equipment Breakdown Protection Coverage Form
        (EB 00 20) is the standard form, though many carriers use proprietary forms with
        variations in covered equipment definitions, exclusions, and additional coverages. For
        more on{' '}
        <Link href="/resources/commercial-vs-residential-claims" className="text-[#2E74B5] hover:underline">
          the differences between commercial and residential claims
        </Link>, see our detailed comparison.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Equipment Breakdown Coverage Pays For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown coverage does more than pay to repair or replace the broken equipment.
        A comprehensive policy covers the cascade of losses that follow an equipment failure:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Direct damage to the equipment.</strong> The cost to repair or replace the
          equipment that suffered the breakdown. This is the most obvious component.
        </li>
        <li>
          <strong>Damage to other property.</strong> When a boiler explodes, it damages walls,
          ceilings, and nearby equipment. When a pipe bursts from a failed pump, water damages
          the building interior. The consequential damage to other property caused by the
          breakdown is covered.
        </li>
        <li>
          <strong>Business income and extra expense.</strong> Lost income during the repair
          period, plus the extra costs of maintaining operations &mdash; such as renting
          temporary equipment or expediting repairs. This mirrors the business interruption
          coverage in a property policy but responds to equipment breakdown events.
        </li>
        <li>
          <strong>Spoilage.</strong> If a refrigeration or cooling system breaks down and
          perishable goods are destroyed &mdash; food, pharmaceuticals, chemicals, biological
          specimens &mdash; the spoilage coverage pays for the loss. This is one of the most
          valuable components for restaurants, grocers, and medical facilities.
        </li>
        <li>
          <strong>Expediting expenses.</strong> The additional cost of temporary repairs,
          overtime labor, express shipping for parts, and rental equipment needed to get
          operations back online as quickly as possible.
        </li>
        <li>
          <strong>Hazardous substance cleanup.</strong> If the breakdown releases refrigerant,
          fuel oil, or other hazardous materials, the cost of cleanup and decontamination is
          covered.
        </li>
        <li>
          <strong>Data restoration.</strong> If electronic equipment breakdown results in loss
          of electronic data, some policies cover the cost of restoring data from backups or
          reconstructing it.
        </li>
        <li>
          <strong>Utility interruption.</strong> Some equipment breakdown policies extend
          coverage to failures in off-premises utility equipment (such as a transformer on
          the power company&apos;s pole) that cause a breakdown of your equipment.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Spoilage Coverage: The Hidden Gem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spoilage coverage deserves special attention because it is often the most financially
        significant component of an equipment breakdown claim &mdash; and because it is the one
        most frequently overlooked by policyholders until they need it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spoilage coverage pays for the loss of perishable stock when covered refrigeration or
        cooling equipment breaks down. The coverage typically applies to food, beverages,
        pharmaceuticals, flowers, chemicals, and any other goods that require temperature
        control to maintain their value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a real-world scenario: a restaurant with a walk-in cooler and a walk-in freezer
        experiences a compressor failure on its refrigeration system at 10 PM on a Saturday. By
        the time the owner arrives Monday morning, internal temperatures have risen well above
        safe thresholds. All food in both units must be discarded. The total value of the
        destroyed inventory could be $10,000 to $50,000 or more for a large-volume restaurant.
        The compressor repair itself might cost $3,000 to $8,000, but the spoiled food is the
        real financial hit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without equipment breakdown coverage with a spoilage endorsement, the property policy
        will not pay for this loss. The compressor failure is not a covered peril under the
        property form, and the food spoilage is consequential damage from an uncovered event.
        With equipment breakdown coverage, both the compressor repair and the spoiled inventory
        are covered.
      </p>

      <CalloutBox variant="warning" title="Spoilage Coverage Often Has Sublimits">
        <p>
          Review your spoilage limit carefully. Many equipment breakdown policies cap spoilage
          coverage at $25,000, $50,000, or $100,000. For a large restaurant, grocery store,
          or food distributor, these limits may be inadequate. Calculate the maximum value of
          perishable inventory you carry at any given time and make sure your spoilage limit
          exceeds that amount. Also check whether your spoilage coverage includes a waiting
          period or requires that temperatures reach a specific threshold before coverage
          triggers.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Equipment Breakdown Scenarios
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how equipment breakdown claims actually play out helps illustrate why
        this coverage matters and where disputes arise.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 1: HVAC Compressor Failure in a Home
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner&apos;s central air conditioning compressor seizes in July. The HVAC
        technician diagnoses internal bearing failure &mdash; the compressor locked up due to
        a failed bearing, which caused the motor to overheat and burn out its windings. The
        repair requires replacing the compressor and possibly the condenser unit. Total cost:
        $4,000 to $8,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Without equipment breakdown coverage:</strong> The homeowner files a claim under
        their HO-3 policy. The insurer denies it because mechanical failure is not a covered
        peril. The homeowner pays out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>With equipment breakdown coverage:</strong> The homeowner files a claim under the
        equipment breakdown endorsement. The compressor is covered equipment, the bearing failure
        is a covered breakdown, and the insurer pays to replace the compressor minus the
        deductible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 2: Commercial Boiler Failure in a Hotel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A hotel&apos;s steam boiler develops a crack in the heat exchanger in January. The
        failure is caused by metal fatigue &mdash; years of thermal cycling have weakened the
        metal to the point of failure. The crack allows water to leak into areas it should not
        reach, and the boiler must be shut down immediately. The hotel loses heating to all
        guest rooms for two weeks while a replacement boiler is sourced and installed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The costs cascade: the boiler replacement costs $75,000. The hotel must refund guests
        and cancel reservations for two weeks, losing $200,000 in revenue. The hotel rents
        portable heating units at $15,000 to keep common areas usable. Pipes in unheated
        sections freeze and burst, causing $50,000 in water damage to guest rooms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>With equipment breakdown coverage:</strong> The boiler replacement, the lost
        business income, the expediting expenses for portable heaters, and the resulting water
        damage to the building are all covered under the equipment breakdown policy. The total
        claim could exceed $300,000 &mdash; far beyond the cost of the boiler itself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 3: Electrical Panel Arc Flash in an Office Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An electrical panel in a commercial office building experiences an internal arc flash.
        A loose bus bar connection creates resistance, which generates heat, which eventually
        causes an arc between conductors. The arc flash damages the panel, trips the main
        breaker, and cuts power to three floors. The heat from the arc scorches the electrical
        room wall and damages adjacent wiring.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The property policy may cover the fire damage to the wall but will not cover the internal
        electrical panel failure. Equipment breakdown coverage pays for the panel replacement,
        the rewiring, the lost rental income while floors are offline, and the expediting costs
        for emergency electrical work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to File an Equipment Breakdown Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing an equipment breakdown claim is similar to filing a standard property claim, but
        there are important differences in how you document the loss and what the insurer
        investigates.
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Report the claim immediately.</strong> Call your insurance company as soon as
          you discover the equipment failure. Report it as an equipment breakdown claim
          specifically &mdash; not just a general property claim. If you are unsure whether the
          failure is an equipment breakdown or a property loss, report it under both coverages
          and let the carrier sort out the allocation.
        </li>
        <li>
          <strong>Do not discard the failed equipment.</strong> The insurer will want to inspect
          the equipment or have it examined by a forensic engineer to confirm that the failure
          qualifies as a covered breakdown. If you replace the equipment before the insurer
          inspects it, keep the failed component. Do not send it to a scrapyard.
        </li>
        <li>
          <strong>Get a technician&apos;s diagnosis in writing.</strong> Have the HVAC
          technician, electrician, plumber, or mechanic who responds to the failure provide a
          written report documenting the cause of the failure. The report should specify the
          internal cause &mdash; bearing failure, winding burnout, pressure vessel crack,
          electrical arc &mdash; and distinguish it from external causes or wear and tear.
        </li>
        <li>
          <strong>Document consequential damage.</strong> Equipment failures often cause damage
          beyond the equipment itself. Photograph water damage from burst pipes, document
          spoiled inventory with photos and inventory lists, record the dates your business
          was shut down or operating at reduced capacity. All of this feeds into the broader
          claim for business income loss, spoilage, and property damage.
        </li>
        <li>
          <strong>Track expediting expenses.</strong> If you rent temporary equipment, pay for
          emergency repairs, or incur overtime labor costs to get back online, keep receipts
          for everything. These are covered under most equipment breakdown policies.
        </li>
        <li>
          <strong>Maintain temperature records.</strong> For spoilage claims, temperature
          monitoring data is critical. If your refrigeration or cooling equipment has a
          temperature logging system, preserve those records. They document exactly when
          temperatures exceeded safe thresholds and how long perishable goods were exposed
          to unsafe conditions.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Report Under Both Coverages When in Doubt">
        <p>
          If you are not sure whether the cause of loss is an external peril (property policy)
          or an internal equipment failure (equipment breakdown), report the claim under both
          coverages. Let the carrier investigate and determine which coverage applies. The worst
          outcome is filing under only one coverage, having it denied, and then being told that
          the other coverage had a reporting deadline that has now passed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Equipment Breakdown Claims Differ from Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown claims involve several unique features that distinguish them from
        standard property claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Forensic engineering inspections.</strong> Equipment breakdown insurers
          frequently send a forensic engineer to inspect the failed equipment and determine
          the cause of failure. This is more common than in property claims, where the cause
          of loss (fire, wind, etc.) is usually obvious. The engineer&apos;s role is to confirm
          that the failure was a covered breakdown (internal mechanical or electrical failure)
          rather than an excluded cause (fire, wear and tear, lack of maintenance).
        </li>
        <li>
          <strong>The maintenance question.</strong> Insurers will investigate whether the
          equipment was properly maintained. Unlike property insurance, where the condition of
          your roof before a windstorm is rarely an issue, equipment breakdown claims often
          involve questions about maintenance history. Keep maintenance records for all major
          equipment. Regular servicing and documentation strengthens your claim.
        </li>
        <li>
          <strong>Deductible structures.</strong> Equipment breakdown deductibles can be
          structured differently from property deductibles. Some policies use a flat dollar
          deductible. Others use a time-based deductible (such as a 24-hour or 48-hour waiting
          period for business income losses). Understand your deductible structure before a
          loss occurs.
        </li>
        <li>
          <strong>Jurisdiction inspections.</strong> Equipment breakdown insurers traditionally
          provided boiler and pressure vessel inspections as part of the coverage &mdash; a
          service that goes back to the origins of boiler insurance. Many jurisdictions require
          periodic inspection of boilers and pressure vessels, and the equipment breakdown
          insurer often fulfills this requirement. These inspections can identify developing
          problems before they become catastrophic failures.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics on Equipment Breakdown Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Like any insurance claim, equipment breakdown claims are subject to dispute. Here are
        the most common ways carriers minimize or deny these claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Blaming wear and tear.</strong> The insurer argues that the equipment failed
          due to gradual deterioration, not a sudden and accidental breakdown. This is the
          most common denial. The response: get a technician or engineer to document that the
          failure was a sudden mechanical event (bearing seizure, winding failure, arc flash),
          not a gradual process. Even if the equipment was aging, the breakdown itself was
          sudden and accidental.
        </li>
        <li>
          <strong>Blaming lack of maintenance.</strong> The insurer argues that the failure was
          caused by the policyholder&apos;s failure to maintain the equipment. This is a
          coverage defense, not an automatic denial. In most jurisdictions, the insurer must
          prove that the specific failure was directly caused by the lack of maintenance, not
          merely that maintenance was overdue. Maintain your equipment and keep records, but
          also know that a general maintenance deficiency does not automatically void coverage.
        </li>
        <li>
          <strong>Classifying consequential damage as uncovered.</strong> The insurer pays
          to replace the compressor but denies the $30,000 in spoiled food, arguing it is not
          part of the equipment breakdown. Review your spoilage endorsement. If it is on your
          policy, push back.
        </li>
        <li>
          <strong>Minimizing the business income period.</strong> The insurer argues that the
          equipment could have been repaired or replaced faster, and therefore limits the
          business income payment to a shorter period than the actual downtime. Document every
          delay and its cause &mdash; parts backordered, contractor availability, permits
          required.
        </li>
        <li>
          <strong>Applying depreciation to equipment.</strong> The insurer depreciates the value
          of the failed equipment, paying only actual cash value for a 15-year-old boiler
          instead of the cost of a new one. Check your policy &mdash; many equipment breakdown
          policies provide replacement cost coverage. If your policy is replacement cost, the
          insurer must pay the full cost to replace the equipment with similar quality, without
          depreciation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Advice for Homeowners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a homeowner, here is what you should do to protect yourself from equipment
        breakdown losses:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Check your current policy for equipment breakdown coverage.</strong> Review
          your declarations page and endorsement schedule. Look for an equipment breakdown
          endorsement or a &ldquo;service line&rdquo; endorsement (a related but different
          coverage). If you do not have equipment breakdown coverage, ask your agent about
          adding it.
        </li>
        <li>
          <strong>Understand your deductible.</strong> Equipment breakdown endorsements on
          homeowner&apos;s policies typically have a separate deductible, often $500 or the
          property policy deductible &mdash; whichever is greater. Know what your deductible
          is before you file a claim.
        </li>
        <li>
          <strong>Keep maintenance records.</strong> Annual HVAC servicing, water heater
          flushing, electrical panel inspections &mdash; keep receipts and service records for
          all major systems. These records will support your claim if a breakdown occurs and
          the insurer questions your maintenance history.
        </li>
        <li>
          <strong>Know the age and condition of your equipment.</strong> A 20-year-old HVAC
          system is more likely to experience a breakdown than a 5-year-old one. If your major
          systems are aging, equipment breakdown coverage becomes more important, not less.
        </li>
        <li>
          <strong>Do not assume a home warranty replaces equipment breakdown insurance.</strong> Home
          warranties and equipment breakdown insurance are different products. Home warranties
          are service contracts with their own contractors, coverage limits, and exclusions.
          Equipment breakdown insurance pays the actual cost of repair or replacement through
          the contractor of your choice. The two can complement each other, but they are not
          interchangeable.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Advice for Business Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For commercial policyholders, equipment breakdown coverage requires more careful
        attention to limits, sublimits, and additional coverages:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Inventory your critical equipment.</strong> Make a list of every piece of
          equipment that, if it failed, would shut down or significantly impair your business
          operations. This includes HVAC, refrigeration, elevators, production machinery,
          servers, and electrical distribution equipment. Use this list to evaluate whether
          your coverage limits are adequate.
        </li>
        <li>
          <strong>Review your spoilage limit.</strong> If your business carries perishable
          inventory, calculate the maximum value of that inventory at any given time and make
          sure your spoilage sublimit covers it. A $25,000 spoilage limit is inadequate for
          a restaurant carrying $40,000 in food inventory.
        </li>
        <li>
          <strong>Confirm business income coverage is included.</strong> Equipment breakdown
          business income coverage is not always included automatically. Verify that your
          policy includes business income and extra expense coverage for equipment breakdown
          events, and that the limits and restoration period are adequate.
        </li>
        <li>
          <strong>Coordinate with your property policy.</strong> Make sure there are no gaps
          between your property policy and your equipment breakdown coverage. Ideally, both
          should be with the same carrier to avoid coverage disputes. If they are with
          different carriers, review the &ldquo;other insurance&rdquo; clauses in both
          policies.
        </li>
        <li>
          <strong>Establish a preventive maintenance program.</strong> Regular maintenance
          reduces the likelihood of breakdowns and strengthens your position if a claim is
          filed. Maintain detailed records of all inspections, servicing, and repairs. These
          records are your defense against the &ldquo;lack of maintenance&rdquo; denial.
        </li>
        <li>
          <strong>Consider service interruption coverage.</strong> Some equipment breakdown
          policies offer service interruption coverage, which extends the breakdown definition
          to include failures in off-premises utility equipment. If your business is highly
          dependent on uninterrupted electrical or gas service, this endorsement can be
          valuable.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Equipment Breakdown vs. Mechanical Breakdown Insurance for Vehicles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common point of confusion: equipment breakdown coverage on property policies is
        completely different from &ldquo;mechanical breakdown insurance&rdquo; (MBI) sold for
        vehicles. MBI for vehicles is essentially an extended warranty for your car, covering
        engine and transmission failures. Equipment breakdown coverage on a property or
        commercial policy covers building-related and business-related mechanical and electrical
        equipment. The two products have nothing to do with each other beyond sharing the word
        &ldquo;breakdown.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Inspection Benefit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One often-overlooked benefit of commercial equipment breakdown coverage is the inspection
        service. Equipment breakdown insurers have historically employed or contracted with
        engineers who inspect boilers, pressure vessels, and other regulated equipment on a
        regular schedule. These inspections serve a dual purpose: they satisfy jurisdictional
        requirements for periodic boiler and pressure vessel inspection, and they identify
        developing problems before they result in catastrophic failures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many states, boilers and pressure vessels must be inspected annually or biennially by
        a licensed inspector. The equipment breakdown insurer typically provides this inspection
        at no additional cost as part of the coverage. If you cancel your equipment breakdown
        coverage, you will need to arrange and pay for these inspections independently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the mandatory inspections, equipment breakdown insurers often offer loss control
        services &mdash; recommendations for improving equipment reliability, upgrading outdated
        systems, and implementing preventive maintenance programs. These services can reduce your
        risk of breakdown and may also result in lower premiums over time.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Exclusions to Watch For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown coverage is broad, but it has important exclusions. Understanding
        these exclusions prevents surprises at claim time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fire and explosion.</strong> If a fire causes equipment to fail, the property
          policy covers it. Equipment breakdown specifically excludes fire as a cause of loss
          to avoid overlap. However, if an equipment breakdown <em>causes</em> a fire (such as
          an electrical arc that ignites surrounding materials), the equipment breakdown policy
          covers the equipment damage while the property policy covers the fire damage to the
          building.
        </li>
        <li>
          <strong>Wear, tear, and deterioration.</strong> Gradual degradation over time is not
          a breakdown. Equipment that slowly corrodes, rusts, erodes, or wears down is not
          covered. But note the distinction: if gradual deterioration leads to a sudden failure
          (a corroded bearing finally seizes), the sudden failure itself may still qualify as
          a breakdown. This is a fact-specific determination.
        </li>
        <li>
          <strong>Earth movement and flood.</strong> Earthquakes and floods that damage
          equipment are excluded from equipment breakdown coverage just as they are from
          standard property coverage. Separate earthquake and flood policies are needed.
        </li>
        <li>
          <strong>Testing and commissioning.</strong> Equipment that fails during acceptance
          testing or initial commissioning is typically excluded. The coverage applies to
          equipment that has been placed in regular service.
        </li>
        <li>
          <strong>Cosmetic damage.</strong> Scratches, dents, or discoloration that do not
          affect the equipment&apos;s operation are not covered breakdowns.
        </li>
        <li>
          <strong>Consumable parts.</strong> Filters, belts, fuses, light bulbs, heating
          elements, and other parts designed to be routinely replaced are typically excluded
          unless their failure causes damage to other covered equipment.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Involve a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equipment breakdown claims &mdash; especially commercial ones &mdash; can involve
        significant sums and complex technical questions. Consider involving a licensed Public
        Adjuster if:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer denies the claim, arguing the failure was due to wear and tear or lack
          of maintenance rather than a covered breakdown
        </li>
        <li>
          The insurer&apos;s forensic engineer reaches a conclusion that conflicts with your
          technician&apos;s diagnosis
        </li>
        <li>
          Significant consequential losses are involved &mdash; spoilage, business income,
          water damage from burst pipes &mdash; and the insurer is limiting the claim to just
          the equipment repair
        </li>
        <li>
          You are unsure which coverage applies (property vs. equipment breakdown) and the
          insurer is directing you to the coverage with lower limits or a more restrictive
          exclusion
        </li>
        <li>
          The claim involves both property damage and equipment breakdown, and the insurer is
          not properly allocating between the two coverages
        </li>
        <li>
          The total claim is substantial &mdash; $25,000 or more &mdash; and you want
          professional representation to maximize your recovery
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Equipment Breakdown Claim Being Denied or Underpaid?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer is calling your equipment failure &ldquo;wear and tear,&rdquo;
          refusing to cover spoilage or business income losses, or directing you to the wrong
          coverage, a licensed Public Adjuster can help you document the breakdown, challenge
          the denial, and recover what your policy owes you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="info" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not
          constitute legal advice. Every insurance policy is different, and coverage
          determinations depend on your specific policy language, the facts of your loss,
          and applicable state law. Consult a licensed professional for advice about your
          individual situation.
        </p>
      </CalloutBox>
    </>
  )
}
