import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'IICRC S500 Water Damage Categories and Classes: What They Mean for Your Insurance Claim',
  description:
    'The IICRC S500 standard classifies water damage by contamination level (Categories 1-3) and saturation extent (Classes 1-4). Understanding this system is critical because insurers routinely downgrade both to reduce your claim payment.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every water damage insurance claim involves two separate classification systems that
        determine how much work needs to be done and how much the insurer should pay. The first
        is the <strong>Category</strong> of water &mdash; how contaminated it is. The second is
        the <strong>Class</strong> of water damage &mdash; how extensively the water has
        saturated the building materials. Together, these two classifications dictate the entire
        scope of remediation: what materials must be removed and replaced, how much drying
        equipment is needed, and how long the drying process should take.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These classifications come from the{' '}
        <strong>ANSI/IICRC S500 Standard for Professional Water Damage Restoration</strong>,
        published by the Institute of Inspection, Cleaning and Restoration Certification
        (IICRC). The S500 is not a government regulation &mdash; it is an{' '}
        <strong>ANSI-approved consensus standard</strong> developed by a committee of
        restoration professionals, scientists, and industry stakeholders. Despite not being
        law, the S500 is the universally recognized standard of care in the water damage
        restoration industry. Insurance companies, restoration contractors, and courts all
        treat it as the baseline for what constitutes proper remediation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that insurance adjusters &mdash; particularly desk adjusters who have
        never set foot inside a water-damaged home &mdash; routinely manipulate these
        classifications to minimize claim payments. They downgrade the Category to avoid paying
        for demolition and antimicrobial treatment. They understate the Class to reduce the
        amount of drying equipment and the number of drying days. If you do not understand these
        classification systems, you will not catch it when it happens.
      </p>

      <CalloutBox variant="info" title="Why This Matters">
        <p>
          The difference between a Category 1 and a Category 3 water loss can be tens of
          thousands of dollars. Category 1 water may only require drying in place. Category 3
          water requires demolition of all affected porous materials, antimicrobial treatment,
          and often clearance testing before reconstruction can begin. When an insurer
          downgrades your Category 3 sewage loss to a Category 2, they are cutting the scope
          of work &mdash; and your payment &mdash; dramatically.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: THE THREE CATEGORIES OF WATER */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three Categories of Water: Contamination Level
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The IICRC S500 classifies water into three categories based on the level of
        contamination at the <strong>source</strong> of the water and the contamination
        level at the <strong>time of contact</strong> with building materials and occupants.
        This distinction is important: water that starts clean does not necessarily stay clean.
      </p>

      {/* ---- CATEGORY 1 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Category 1 &mdash; Clean Water
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Category 1 water originates from a <strong>sanitary source</strong> and does not pose
        a substantial risk from dermal, ingestion, or inhalation exposure. This is water you
        could reasonably drink &mdash; or at least water that comes from a potable supply line.
        Common examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Broken water supply lines</strong> &mdash; The copper, PEX, or CPVC pipes
          that bring fresh water to your sinks, toilets, and appliances. When these burst or
          develop a leak, the water is clean at the source.
        </li>
        <li>
          <strong>Faucet or fixture failures</strong> &mdash; A faucet left running, a handle
          that breaks off, or a supply valve that fails while in the open position.
        </li>
        <li>
          <strong>Ice maker supply lines</strong> &mdash; The small-diameter water line that
          feeds your refrigerator&apos;s ice maker. These are notorious for failing,
          particularly the braided stainless steel lines with plastic fittings.
        </li>
        <li>
          <strong>Toilet tank water</strong> &mdash; Water in the tank (not the bowl) is
          potable supply water that has not yet been used. A cracked tank or failed fill valve
          releases Category 1 water.
        </li>
        <li>
          <strong>Rainwater entering through a fresh opening</strong> &mdash; Rain coming
          through a hole in the roof created by a fallen tree, for example, is generally
          Category 1 at the point of entry &mdash; though it may pick up contaminants as it
          travels through building materials.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Category 1 losses are the least expensive to remediate because the water itself is not
        hazardous. In many cases, affected materials can be{' '}
        <strong>dried in place</strong> rather than demolished and replaced. Carpet, pad,
        drywall, and insulation may all be salvageable if the water is addressed promptly. The
        key phrase is <em>addressed promptly</em> &mdash; as discussed below, Category 1 water
        does not stay Category 1 forever.
      </p>

      {/* ---- CATEGORY 2 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Category 2 &mdash; Gray Water
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Category 2 water contains <strong>significant contamination</strong> and has the
        potential to cause discomfort or illness if contacted or consumed. This water is not
        grossly unsanitary, but it is not clean either. It contains chemical, biological, or
        physical contaminants that make it unsuitable for human contact. Common examples
        include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Dishwasher discharge</strong> &mdash; Water from a dishwasher overflow or
          supply line failure during the wash or rinse cycle. This water contains food
          particles, detergent, grease, and bacteria.
        </li>
        <li>
          <strong>Washing machine overflow</strong> &mdash; Drain hose failures, pump
          failures, or overflows from washing machines release water that contains detergent
          residue, fabric fibers, body oils, and bacteria from soiled clothing.
        </li>
        <li>
          <strong>Toilet overflow with urine only</strong> &mdash; A toilet that overflows
          when the bowl contains only urine (no fecal matter) is classified as Category 2.
          The presence of urine introduces bacteria and organic compounds but does not rise to
          the level of gross contamination.
        </li>
        <li>
          <strong>HVAC condensate</strong> &mdash; The water that collects in your air
          conditioning system&apos;s condensate pan and drain line. This water has been
          sitting in a dark, warm environment and typically contains bacteria, mold spores,
          and biofilm.
        </li>
        <li>
          <strong>Aquarium water</strong> &mdash; Contains fish waste, food particles, and
          bacteria.
        </li>
        <li>
          <strong>Water bed leaks</strong> &mdash; Water that has been sitting stagnant inside
          a water bed mattress for months or years accumulates bacteria and organic compounds.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Category 2 losses require more aggressive remediation than Category 1. Porous materials
        that have absorbed gray water &mdash; carpet pad, insulation, particleboard &mdash;
        generally cannot be salvaged and must be removed. Carpet may be salvageable in some
        cases with professional cleaning, but the pad underneath must be replaced. Drywall that
        has absorbed gray water typically needs to be cut and replaced at least 12 to 24 inches
        above the visible water line to ensure all contaminated material is removed.
      </p>

      {/* ---- CATEGORY 3 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Category 3 &mdash; Black Water
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Category 3 water is <strong>grossly unsanitary</strong>. It contains pathogenic agents
        and can cause serious illness or death if ingested, and significant illness through
        skin contact or inhalation of contaminated aerosols. Category 3 is the most expensive
        and most aggressive classification because it requires the removal and replacement of
        virtually all porous materials that contacted the water. Common examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sewage backup</strong> &mdash; Any water that originates from or passes
          through the sanitary sewer system is automatically Category 3, regardless of its
          appearance. Clear-looking water that came up through a floor drain connected to the
          sewer is still Category 3. See{' '}
          <Link href="/resources/blockage-vs-backup" className="text-[#2E74B5] underline">
            Blockage &amp; Overflow vs. Sewer Backup
          </Link>{' '}
          for an important distinction between a true sewer backup and an internal plumbing
          blockage.
        </li>
        <li>
          <strong>Toilet overflow with fecal matter</strong> &mdash; When a toilet overflows
          and the bowl contains feces, the water is Category 3. The presence of fecal matter
          introduces E. coli, Salmonella, and other dangerous pathogens.
        </li>
        <li>
          <strong>Flood water (rising water from outside)</strong> &mdash; Any water that
          enters the structure from outside by rising &mdash; whether from a river, storm
          surge, or surface runoff &mdash; is automatically Category 3. This water has
          contacted soil, debris, sewage systems, chemicals, and countless other contaminants.
          This type of flooding is typically excluded under standard homeowner&apos;s policies
          and covered only by NFIP flood insurance.
        </li>
        <li>
          <strong>Water that has contacted soil</strong> &mdash; A{' '}
          <Link href="/resources/slab-leak-claims" className="text-[#2E74B5] underline">
            slab leak
          </Link>{' '}
          where clean supply water migrates through the soil beneath the foundation before
          entering the living space is no longer Category 1. The water has picked up bacteria,
          pesticides, fertilizers, and other contaminants from the soil.
        </li>
        <li>
          <strong>Wind-driven rain through a compromised building envelope</strong> &mdash;
          Water that enters through damaged walls or roofing and travels through contaminated
          insulation, rodent waste, or decomposed organic material in the wall or attic cavity.
        </li>
        <li>
          <strong>Stagnant water that has been sitting for an extended period</strong> &mdash;
          This is perhaps the most important and most disputed category. Category 1 or
          Category 2 water that is not addressed within approximately 48 to 72 hours will
          experience bacterial amplification and is reclassified as Category 3.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Category Escalation: The 48&ndash;72 Hour Rule">
        <p>
          Clean water does not stay clean. The IICRC S500 is explicit: when Category 1 or
          Category 2 water remains in contact with building materials for an extended period
          &mdash; generally 48 to 72 hours &mdash; bacterial growth and amplification will
          reclassify the water to a higher category. Category 1 water that sits for three days
          in a warm home with carpet, pad, and drywall acting as nutrient sources for microbial
          growth becomes Category 3 water. This is not a matter of opinion &mdash; it is
          established science.
        </p>
        <p className="mt-3">
          This rule has enormous implications for insurance claims. When an insurer takes four
          or five days to send an adjuster &mdash; or when their preferred mitigation contractor
          shows up late &mdash; the delay itself can escalate a simple Category 1 supply-line
          break into a Category 3 loss requiring full demolition. The insurer&apos;s own delay
          increased the cost of the claim, and they should not benefit from that delay by then
          claiming the loss was &ldquo;only&rdquo; a Category 1.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Category 3 remediation is significantly more expensive than Category 1 or 2 because
        the standard of care requires:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Removal of all affected porous materials</strong> &mdash; Carpet, pad,
          drywall, insulation, particleboard, OSB, paper-faced materials, and any other porous
          material that contacted Category 3 water must be removed and disposed of. There is
          no &ldquo;drying in place&rdquo; for porous materials exposed to black water.
        </li>
        <li>
          <strong>Antimicrobial treatment</strong> &mdash; All remaining structural surfaces
          (framing lumber, concrete, subfloor) must be treated with an EPA-registered
          antimicrobial agent. This is not a quick spray &mdash; it requires proper
          application, dwell time, and documentation.
        </li>
        <li>
          <strong>HEPA air filtration</strong> &mdash; Air scrubbers with HEPA filters must
          run during the demolition and remediation process to capture airborne particulates
          and prevent cross-contamination to unaffected areas.
        </li>
        <li>
          <strong>Containment</strong> &mdash; The affected area must be isolated from
          unaffected areas using polyethylene sheeting and negative air pressure to prevent
          the spread of contaminants.
        </li>
        <li>
          <strong>Personal protective equipment (PPE)</strong> &mdash; Workers must wear
          appropriate PPE including respirators, gloves, and protective clothing. This is an
          OSHA requirement, not optional.
        </li>
        <li>
          <strong>Clearance testing</strong> &mdash; In many cases, particularly where{' '}
          <Link href="/resources/sewage-contamination-mitigation-failure" className="text-[#2E74B5] underline">
            sewage contamination
          </Link>{' '}
          is involved, post-remediation verification testing should be performed to confirm
          that the remediation was successful before reconstruction begins.
        </li>
      </ul>

      {/* ================================================================ */}
      {/* SECTION: THE FOUR CLASSES OF WATER DAMAGE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Four Classes of Water Damage: Extent of Saturation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the Category describes <em>how contaminated</em> the water is, the Class
        describes <em>how much water</em> is present and how extensively it has saturated the
        building materials. The Class determines the amount of drying equipment (dehumidifiers,
        air movers, and specialty drying systems), the placement of that equipment, and the
        number of days needed to achieve the target drying goals. Higher classes mean more
        equipment, more energy, and more labor &mdash; all of which cost money the insurer
        would prefer not to pay.
      </p>

      {/* ---- CLASS 1 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Class 1 &mdash; Least Amount of Water, Absorption, and Evaporation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Class 1 loss involves the <strong>least amount of water</strong>. Only part of a room
        is affected, or the water is confined to a small area. Materials have absorbed minimal
        moisture. A typical Class 1 scenario might be a slow drip under a sink that affected a
        small section of the cabinet base and a few square feet of adjacent flooring. The water
        has low evaporation potential because so little material is wet.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Class 1 losses require the fewest pieces of drying equipment. A single dehumidifier and
        a few air movers may be sufficient. Drying times are typically short &mdash; sometimes
        as little as one to two days for a truly minor loss.
      </p>

      {/* ---- CLASS 2 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Class 2 &mdash; Significant Amount of Water, Absorption, and Evaporation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Class 2 loss involves a <strong>significant amount of water</strong> that has
        affected an entire room or a large area. The water has wicked into structural materials.
        Key indicators of a Class 2 loss include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The entire carpet and carpet pad in a room are wet.
        </li>
        <li>
          Water has wicked up the walls &mdash; typically <strong>12 to 24 inches</strong>{' '}
          above the floor. This is a critical measurement. The wicking height determines how
          much drywall must be cut out (for Category 2 or 3 water) or how high the air movers
          need to be directed (for Category 1 water being dried in place).
        </li>
        <li>
          Structural materials have absorbed moisture but have not reached full saturation. The
          materials still have the capacity to release moisture through evaporation with
          standard drying equipment.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Class 2 losses require substantially more equipment than Class 1. Multiple
        dehumidifiers and numerous air movers are needed, positioned to direct airflow along
        the wet walls and across the wet flooring. Drying times for a Class 2 loss typically
        range from three to five days, depending on conditions.
      </p>

      {/* ---- CLASS 3 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Class 3 &mdash; Greatest Amount of Water, Absorption, and Evaporation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Class 3 loss involves the <strong>greatest amount of water</strong>. Water may have
        come from overhead &mdash; a burst pipe in the ceiling, a roof leak, or an upstairs
        bathroom overflow &mdash; saturating walls, ceilings, carpet, insulation, and subfloor
        materials. Key indicators include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Walls are saturated from the ceiling down, not just wicked up from the floor.
        </li>
        <li>
          Ceiling materials (drywall, plaster, insulation above) are wet.
        </li>
        <li>
          The entire carpet, pad, and subfloor are saturated.
        </li>
        <li>
          Water may have traveled through wall cavities and emerged on the other side of
          walls, affecting adjacent rooms that do not appear to have a direct water source.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Class 3 losses require the most extensive conventional drying setup. Large commercial
        dehumidifiers, wall cavity drying systems, and a high ratio of air movers to affected
        area are all necessary. Drying times are typically five days or more. When water has
        come from overhead and saturated the ceiling, the ceiling drywall often needs to be
        removed both for drying purposes and because saturated ceiling drywall is a safety
        hazard &mdash; it can collapse.
      </p>

      {/* ---- CLASS 4 ---- */}

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Class 4 &mdash; Specialty Drying Situations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Class 4 is different from the other three classes. It does not describe the{' '}
        <em>amount</em> of water so much as the <em>type of materials</em> that have absorbed
        it. Class 4 applies when water has been absorbed into materials with{' '}
        <strong>low porosity or low permeance</strong> &mdash; materials that hold water
        tightly and release it very slowly through normal evaporation. These materials require
        specialty drying techniques that go beyond conventional air movers and dehumidifiers.
        Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hardwood flooring</strong> &mdash; Solid hardwood absorbs water and swells.
          Standard air movers blowing across the surface are not sufficient to extract moisture
          from within the wood fibers. Specialty drying systems that create a pressure
          differential &mdash; such as floor mat systems or panel drying systems &mdash; are
          required to pull moisture out of the wood without causing excessive cupping, crowning,
          or delamination.
        </li>
        <li>
          <strong>Plaster walls</strong> &mdash; Older homes with traditional three-coat
          plaster walls present a Class 4 drying challenge. Plaster is dense and holds moisture
          much longer than modern paper-faced drywall. Drying plaster requires sustained low
          humidity and extended time.
        </li>
        <li>
          <strong>Concrete</strong> &mdash; Concrete slabs, basement walls, and structural
          concrete absorb water and release it extremely slowly. Specialty drying of concrete
          may require desiccant dehumidifiers and extended drying periods.
        </li>
        <li>
          <strong>Stone and masonry</strong> &mdash; Natural stone, brick, and block walls
          absorb water and require specialty drying approaches similar to concrete.
        </li>
        <li>
          <strong>Crawlspace and subfloor assemblies</strong> &mdash; Water trapped between
          layers of flooring material (subfloor, underlayment, finished floor) requires
          specialty drying equipment to create airflow between the layers.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Class 4 losses are often the most expensive to dry because specialty equipment costs
        more per day than standard air movers, and the drying times are significantly longer.
        A hardwood floor that might be dried in place with a panel drying system over 7 to 14
        days is far more expensive than three days of standard air movers on carpet &mdash; but
        it is also far less expensive than tearing out and replacing the entire hardwood floor.
        This cost calculation is exactly what makes Class 4 classification contentious in
        insurance claims: the insurer may argue for replacement (if their contractor can do it
        cheaply) or for less drying time (if the specialty equipment charges are piling up).
      </p>

      {/* ================================================================ */}
      {/* SECTION: HOW CATEGORIES AND CLASSES WORK TOGETHER */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Categories and Classes Work Together
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Categories and Classes are independent variables. A loss can be any combination of
        Category and Class. Understanding how they interact is essential because each
        combination produces a different scope of work and a different cost:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Category 1 / Class 2</strong> &mdash; A broken supply line floods an entire
          room. The water is clean, and the room is significantly wet. The remediation approach
          is to dry everything in place: pull back the carpet, remove the pad, set up air
          movers and dehumidifiers, and monitor moisture levels until the structure is dry.
          The carpet goes back down with new pad. Minimal demolition.
        </li>
        <li>
          <strong>Category 3 / Class 2</strong> &mdash; A sewage backup covers the same room
          to the same extent. Now the carpet, pad, drywall (to at least 24 inches above the
          flood line), insulation, and any other porous material must be removed and disposed
          of. Antimicrobial treatment is required. HEPA air filtration is required. The cost
          difference between this scenario and the Category 1 / Class 2 scenario above can
          easily be $10,000 to $30,000 or more for a single room.
        </li>
        <li>
          <strong>Category 1 / Class 4</strong> &mdash; A supply line break under the kitchen
          sink saturates a hardwood floor. The water is clean, so the wood can potentially be
          dried in place using specialty drying equipment rather than torn out. This is
          expensive drying, but far less expensive than replacing the hardwood.
        </li>
        <li>
          <strong>Category 3 / Class 4</strong> &mdash; Sewage water saturates a hardwood
          floor. Now the specialty drying option is off the table &mdash; you cannot dry
          Category 3 water in place in a porous material like hardwood. The floor must be
          removed and replaced. This is the most expensive combination.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Rule of Thumb">
        <p>
          <strong>Category determines WHAT gets removed.</strong> Higher contamination means
          more materials must be demolished rather than dried in place.{' '}
          <strong>Class determines HOW MUCH drying equipment and time is needed.</strong>{' '}
          Greater saturation means more dehumidifiers, more air movers, and more days on the
          job. When an insurer understates either classification, they are shrinking the scope
          of work and underpaying your claim.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: HOW INSURERS MANIPULATE CATEGORIES */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurance Companies Downgrade Categories to Save Money
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Category manipulation is one of the most common ways insurance companies underpay water
        damage claims. The financial incentive is straightforward: a lower Category means less
        demolition, less disposal, less antimicrobial treatment, and no containment or HEPA
        filtration. Here are the most common tactics:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Calling Category 3 Sewage a Category 2
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most egregious and most common downgrade. The insurer&apos;s adjuster or
        their preferred mitigation contractor will classify a sewage loss as Category 2
        &ldquo;gray water&rdquo; &mdash; often by arguing that the water &ldquo;looked
        clean&rdquo; or that there was &ldquo;no visible fecal matter.&rdquo; This is
        scientifically indefensible. Under the IICRC S500, any water that originates from or
        passes through the waste drainage system is Category 3, regardless of its visual
        appearance. Sewage water can appear perfectly clear and still contain dangerous levels
        of bacteria, viruses, and parasites. You cannot determine contamination level by
        looking at the water.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason insurers do this is simple math. A Category 2 classification allows them
        to argue that some materials can be cleaned and dried in place rather than demolished.
        They avoid paying for full removal of drywall, insulation, and flooring. They avoid
        paying for antimicrobial treatment. They avoid paying for containment and HEPA
        filtration. A Category 3 sewage loss that should cost $40,000 to properly remediate
        gets written up as a $15,000 Category 2 &ldquo;cleaning.&rdquo;
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Ignoring Category Escalation from Delayed Response
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer takes several days to acknowledge a claim, dispatch an adjuster, or
        authorize mitigation, the water that was originally Category 1 does not patiently wait
        for the insurance company to act. Bacteria begin multiplying within hours. By 48 to 72
        hours, the S500 standard recognizes that Category 1 water has likely escalated to
        Category 3 through microbial amplification.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite this, insurers routinely classify the loss based on the{' '}
        <strong>original source</strong> of the water rather than its condition at the time of
        remediation. They will write the estimate as a Category 1 supply-line break even though
        the water sat for five days in a closed-up house at 78 degrees before anyone touched it.
        The mitigation scope is then based on clean water protocols &mdash; drying in place,
        no demolition, no antimicrobials &mdash; when the actual condition of the loss demands
        Category 3 protocols.
      </p>

      <CalloutBox variant="warning" title="Document the Timeline">
        <p>
          If you experience a water loss, document the date and time of the loss, the date and
          time you reported it to your insurer, and the date and time mitigation actually began.
          If the gap between the loss and the start of mitigation exceeds 48 hours, the Category
          has likely escalated. Take photographs showing the condition of the water and affected
          materials at the time mitigation begins. Stagnant water, discoloration, odor, and
          visible microbial growth are all indicators of category escalation that your
          photographs should capture.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Relying on Their Preferred Vendor&apos;s Classification
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies often dispatch their own preferred mitigation contractors through
        vendor programs. These contractors get a steady stream of referrals from the insurer and
        have a financial incentive to keep the insurance company happy. When the adjuster
        &ldquo;suggests&rdquo; that a loss is Category 2 rather than Category 3, the preferred
        vendor is unlikely to push back. The result is a remediation scope that protects the
        insurer&apos;s bottom line rather than the homeowner&apos;s health. For a detailed
        example of how this plays out, see{' '}
        <Link href="/resources/sewage-contamination-mitigation-failure" className="text-[#2E74B5] underline">
          When the Insurance Company&apos;s Mitigation Contractor Makes Everything Worse
        </Link>.
      </p>

      {/* ================================================================ */}
      {/* SECTION: HOW INSURERS UNDERSTATE CLASSES */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurance Companies Understate Classes to Reduce Drying Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While Category manipulation affects the demolition side of the estimate, Class
        manipulation affects the drying side. Each piece of drying equipment &mdash;
        dehumidifiers, air movers, and specialty drying systems &mdash; is billed per day. The
        number of pieces of equipment is determined by the Class, the size of the affected area,
        and the IICRC&apos;s equipment placement guidelines. By understating the Class, the
        insurer can reduce the number of equipment pieces and the number of drying days,
        sometimes cutting the drying portion of the estimate in half.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Reducing Equipment Counts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The IICRC provides general guidelines for equipment-to-area ratios. For example, a
        Class 2 loss might require one air mover for every 10 to 16 linear feet of wall and
        one dehumidifier per 1,000 to 1,200 square feet. A Class 3 loss requires higher ratios
        because there is more moisture to evaporate. By classifying a Class 3 loss as Class 2,
        the insurer can reduce the air mover count by a third or more and cut a dehumidifier
        from the equipment list.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a trivial difference. A large-loss dehumidifier might bill at $150 to $250
        per day. An air mover might bill at $30 to $50 per day. On a multi-room loss with 20
        air movers and 3 dehumidifiers running for 5 days, reducing the class from 3 to 2 might
        cut equipment charges by $3,000 to $5,000. The insurer treats this as a legitimate
        &ldquo;scope adjustment&rdquo; when it is actually an understatement of the actual
        conditions.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Cutting Drying Days Short
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The other way Class manipulation saves the insurer money is by reducing the number of
        drying days. A Class 1 loss might dry in one to two days. A Class 3 loss might take
        five to seven days. A Class 4 loss with hardwood or plaster can take 10 to 14 days or
        more. The adjuster may approve only three days of drying on a loss that actually
        requires five &mdash; and when the contractor&apos;s monitoring shows the structure is
        not dry after three days, the adjuster refuses to authorize additional time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The consequences of pulling equipment too early are severe. Materials that are not dried
        to their target moisture content will develop mold growth &mdash; typically within 48 to
        72 hours of drying cessation if conditions are favorable. A claim that started as a
        $20,000 water damage loss can become a $60,000 water damage and mold loss because the
        insurer refused to pay for two more days of drying. For more on this progression, see{' '}
        <Link href="/resources/iicrc-standards-certifications" className="text-[#2E74B5] underline">
          IICRC Standards and Certifications
        </Link>.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Ignoring Class 4 Conditions Entirely
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Class 4 specialty drying is expensive, and many adjusters either do not understand it or
        deliberately ignore it. When a water loss affects hardwood flooring, the adjuster may
        approve standard air movers and dehumidifiers &mdash; Class 2 or Class 3 equipment
        &mdash; without approving the specialty drying systems that are actually needed to save
        the hardwood. The standard equipment fails to adequately dry the wood. The wood cups,
        crowns, or develops mold underneath. The homeowner then faces a choice between living
        with damaged flooring or paying out of pocket for the replacement that should have been
        avoided if specialty drying had been approved in the first place.
      </p>

      {/* ================================================================ */}
      {/* SECTION: CATEGORY PROGRESSION IN DETAIL */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Category Progression: Why Time Is the Enemy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important concepts in the S500 standard &mdash; and one of the most
        frequently abused by insurers &mdash; is <strong>category progression</strong>. Water
        contamination does not remain static. It gets worse over time. The S500 describes this
        as a continuum:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>0 to 24 hours</strong> &mdash; Category 1 water remains Category 1 if it is
          promptly extracted and drying begins. Porous materials have not yet developed
          significant microbial colonization. This is the ideal window for mitigation.
        </li>
        <li>
          <strong>24 to 48 hours</strong> &mdash; Microbial growth begins. Bacteria that were
          present in trace amounts in the environment &mdash; on carpet fibers, in dust, on
          surfaces &mdash; begin to multiply rapidly in the warm, wet conditions. The water is
          transitioning from Category 1 to Category 2.
        </li>
        <li>
          <strong>48 to 72 hours</strong> &mdash; The threshold for category escalation. By
          this point, bacterial amplification has typically progressed to the point where the
          water and affected materials should be treated as Category 2 or Category 3, depending
          on conditions such as temperature, the presence of organic nutrients (carpet, paper,
          food particles), and the volume of standing water.
        </li>
        <li>
          <strong>Beyond 72 hours</strong> &mdash; The water is almost certainly Category 3.
          Visible mold growth may already be starting. The remediation scope has expanded from
          drying in place to full demolition and antimicrobial treatment. Every additional day
          of delay makes the loss more extensive and more expensive.
        </li>
      </ul>

      <CalloutBox variant="tip" title="What to Do If Your Insurer Delays">
        <p>
          Do not wait for your insurance company to authorize mitigation before you act.
          California Insurance Code &sect;2071 and the standard HO-3 policy both impose a duty
          on the policyholder to protect the property from further damage. Begin emergency
          mitigation immediately &mdash; extract standing water, set up fans, and call a
          restoration company. Document everything with photographs and video. Keep all
          receipts. Your policy covers reasonable emergency mitigation expenses, and your
          insurer cannot penalize you for taking steps to prevent further damage. What they
          can &mdash; and will &mdash; do is benefit from your inaction if you wait for them
          and the loss escalates.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: PRACTICAL DOCUMENTATION ADVICE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting the Category and Class: Protecting Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important thing you can do when a water loss occurs is document the source and
        the conditions thoroughly. The Category and Class should be determined at the time of
        the loss &mdash; not three days later when the insurer&apos;s adjuster finally shows up
        and everything has dried, been cleaned up by the homeowner, or escalated beyond its
        original condition. Here is what to document:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Documenting the Source (for Category Determination)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photograph the source of the water</strong> &mdash; Is it coming from a
          supply line? A drain line? A toilet? The sewer cleanout? Through the foundation?
          The source determines the initial Category.
        </li>
        <li>
          <strong>Photograph the water itself</strong> &mdash; Color, turbidity, and visible
          debris all help establish the contamination level. Clear water from a supply line
          looks very different from murky water from a sewer.
        </li>
        <li>
          <strong>Note any odors</strong> &mdash; Sewage has a distinctive smell. If the water
          smells like sewage, say so in your documentation. Write it down immediately &mdash;
          by the time the adjuster arrives, the smell may have dissipated.
        </li>
        <li>
          <strong>Photograph the affected materials</strong> &mdash; Show the condition of
          carpet, walls, and contents at the time of the loss. If you can see microbial growth,
          discoloration, or staining, capture it.
        </li>
        <li>
          <strong>Document the timeline</strong> &mdash; When did the loss occur? When did you
          report it? When did the insurer respond? When did mitigation begin? If there is a gap
          of more than 24 hours between the loss and the start of mitigation, the category may
          have escalated.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Documenting the Extent (for Class Determination)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photograph every affected room</strong> &mdash; Wide-angle shots showing the
          full extent of water on the floor, walls, and ceiling.
        </li>
        <li>
          <strong>Measure the wicking height on walls</strong> &mdash; Use a tape measure or
          ruler in the photograph to show how high the water has wicked up the drywall. This is
          critical for Class determination. Class 2 involves wicking to 12&ndash;24 inches;
          water higher than 24 inches may indicate Class 3 conditions.
        </li>
        <li>
          <strong>Check the ceiling</strong> &mdash; If water came from above (upstairs
          bathroom, roof leak, burst pipe in the attic), check for ceiling stains, sagging
          drywall, and dripping. Overhead water intrusion is a hallmark of Class 3.
        </li>
        <li>
          <strong>Identify material types</strong> &mdash; Note whether the affected flooring
          is carpet, hardwood, tile, or laminate. Note whether walls are drywall or plaster.
          Hardwood and plaster indicate potential Class 4 conditions that require specialty
          drying.
        </li>
        <li>
          <strong>Check adjacent rooms</strong> &mdash; Water travels through walls, under
          flooring, and through ceiling cavities. A room that appears unaffected may have wet
          wall cavities or saturated subfloor on the other side of a wall from the primary
          damage area.
        </li>
      </ul>

      {/* ================================================================ */}
      {/* SECTION: DO NOT LET THE CARRIER'S VENDOR CONTROL THE NARRATIVE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Do Not Let the Carrier&apos;s Preferred Vendor Downgrade Your Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurance company sends their preferred mitigation contractor, that contractor
        will write a <strong>moisture map</strong> and produce a <strong>drying report</strong>{' '}
        that includes the Category and Class designations. These documents become part of the
        claim file and are used by the adjuster to scope the estimate. If the preferred
        vendor&apos;s documentation understates the Category or Class, the adjuster will base
        the entire claim payment on those understated classifications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have every right to hire your own independent mitigation contractor or restoration
        consultant to inspect the loss and provide a competing classification. In California,
        under Fair Claims Settlement Practices regulations (&sect;2695.9), the insurer cannot
        require you to use their preferred vendor. If the independent assessment classifies the
        loss at a higher Category or Class than the carrier&apos;s vendor, the insurer must
        address the discrepancy &mdash; they cannot simply ignore it.
      </p>

      <CalloutBox variant="warning" title="Preferred Vendors and Scope Creep in Reverse">
        <p>
          Insurance company preferred mitigation vendors are not working for you &mdash; they
          are working for the referral relationship. Their moisture maps and drying reports
          may reflect what the adjuster wants to pay for rather than what the loss actually
          requires. If you suspect the vendor is understating the scope, get a second opinion
          from an independent IICRC-certified restorer before the mitigation is complete and
          the evidence is gone. Once the wet materials are dried or removed, it becomes much
          harder to prove the loss was worse than what the vendor documented.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: CALIFORNIA-SPECIFIC CONSIDERATIONS */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Rules and Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has several regulations and standards that apply specifically to water damage
        classification and remediation in the insurance context:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fair Claims Settlement Practices (&sect;2695.7)</strong> &mdash; The
          insurer must conduct a thorough and objective investigation of the claim. Accepting
          a preferred vendor&apos;s understated classification without independent verification
          does not constitute a thorough investigation.
        </li>
        <li>
          <strong>Fair Claims Settlement Practices (&sect;2695.9)</strong> &mdash; The
          insurer&apos;s estimate must restore the property to no less than its pre-loss
          condition using accepted trade standards. The IICRC S500 is the accepted trade
          standard for water damage restoration. An estimate that ignores S500 classification
          requirements does not meet this standard.
        </li>
        <li>
          <strong>Right to choose your own contractor (&sect;2695.9(b))</strong> &mdash; No
          insurer shall require the insured to use a specific vendor or contractor. You have
          the right to hire your own mitigation company and your own restoration consultant.
        </li>
        <li>
          <strong>Mold notification requirements</strong> &mdash; Under California Health and
          Safety Code &sect;26147 and related provisions, property owners must disclose known
          mold conditions to tenants and buyers. Inadequate water damage remediation that
          leads to mold growth creates disclosure obligations and potential liability.
        </li>
        <li>
          <strong>Contractor licensing</strong> &mdash; In California, water damage
          restoration work that involves construction (demolition, drywall replacement,
          flooring) requires a contractor&apos;s license. Mitigation-only work (water
          extraction, drying, antimicrobial treatment) falls into a gray area, but any
          reconstruction absolutely requires a licensed contractor.
        </li>
      </ul>

      {/* ================================================================ */}
      {/* SECTION: WHAT TO DO WHEN YOUR CLASSIFICATION IS DISPUTED */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Insurer Disputes Your Classification
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer or their vendor classifies your water loss at a lower Category or
        Class than you believe is correct, take these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get an independent assessment</strong> &mdash; Hire an IICRC-certified water
          damage restoration professional (WRT or higher certification) to inspect the loss
          and provide a written report with their Category and Class determination, including
          moisture readings and the basis for their classification.
        </li>
        <li>
          <strong>Request the insurer&apos;s basis in writing</strong> &mdash; Ask the adjuster
          to provide, in writing, the specific basis for their classification. What standard are
          they applying? What evidence supports their determination? If they are classifying a
          sewage loss as Category 2, make them explain why in writing.
        </li>
        <li>
          <strong>Cite the IICRC S500 standard</strong> &mdash; Reference the specific
          sections of the S500 that support your classification. The S500 is not optional
          &mdash; it is the recognized standard of care. An insurer who ignores it is not
          following accepted trade standards as required by California regulations.
        </li>
        <li>
          <strong>Document everything contemporaneously</strong> &mdash; Take photographs, keep
          a written log of all conversations with the adjuster and contractor, and save all
          emails and text messages. If the adjuster verbally tells the contractor to
          &ldquo;just dry it in place&rdquo; when demolition is required, document that
          instruction.
        </li>
        <li>
          <strong>Consider independent testing</strong> &mdash; For disputed Category
          determinations, laboratory testing of the water or affected materials can provide
          objective evidence. ATP (adenosine triphosphate) testing can quickly indicate the
          presence of biological contamination. More detailed analysis can identify specific
          bacteria and their concentrations.
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance</strong> &mdash;
          If the insurer refuses to properly classify the loss and adjusts the claim based on
          an artificially low Category or Class, file a complaint with the CDI. For guidance,
          see{' '}
          <Link href="/resources/water-damage-claims" className="text-[#2E74B5] underline">
            Water Damage Claims
          </Link>.
        </li>
      </ol>

      {/* ================================================================ */}
      {/* SECTION: SUMMARY TABLE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Quick Reference: Categories and Classes at a Glance
      </h2>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Water Categories (Contamination Level)
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Contamination</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Common Sources</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Remediation Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">1</td>
              <td className="border border-gray-300 px-4 py-2">Clean Water</td>
              <td className="border border-gray-300 px-4 py-2">None &mdash; sanitary source</td>
              <td className="border border-gray-300 px-4 py-2">Supply lines, faucets, ice makers, toilet tanks</td>
              <td className="border border-gray-300 px-4 py-2">Dry in place; minimal demolition</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-bold">2</td>
              <td className="border border-gray-300 px-4 py-2">Gray Water</td>
              <td className="border border-gray-300 px-4 py-2">Significant contamination</td>
              <td className="border border-gray-300 px-4 py-2">Dishwashers, washing machines, HVAC condensate, toilet overflow (urine)</td>
              <td className="border border-gray-300 px-4 py-2">Remove porous materials; partial demolition</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">3</td>
              <td className="border border-gray-300 px-4 py-2">Black Water</td>
              <td className="border border-gray-300 px-4 py-2">Grossly unsanitary</td>
              <td className="border border-gray-300 px-4 py-2">Sewage, flood water, toilet overflow (feces), soil contact, stagnant water 48+ hrs</td>
              <td className="border border-gray-300 px-4 py-2">Full demolition of porous materials; antimicrobial treatment; containment; HEPA filtration</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Water Damage Classes (Extent of Saturation)
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Indicators</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Equipment Needs</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Typical Drying Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">1</td>
              <td className="border border-gray-300 px-4 py-2">Least water</td>
              <td className="border border-gray-300 px-4 py-2">Part of a room; minimal absorption</td>
              <td className="border border-gray-300 px-4 py-2">Minimal &mdash; 1 dehumidifier, few air movers</td>
              <td className="border border-gray-300 px-4 py-2">1&ndash;2 days</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-bold">2</td>
              <td className="border border-gray-300 px-4 py-2">Significant water</td>
              <td className="border border-gray-300 px-4 py-2">Entire room; wicking 12&ndash;24 inches up walls</td>
              <td className="border border-gray-300 px-4 py-2">Multiple dehumidifiers; numerous air movers</td>
              <td className="border border-gray-300 px-4 py-2">3&ndash;5 days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">3</td>
              <td className="border border-gray-300 px-4 py-2">Greatest water</td>
              <td className="border border-gray-300 px-4 py-2">Water from overhead; walls, ceiling, subfloor saturated</td>
              <td className="border border-gray-300 px-4 py-2">Heavy equipment; wall cavity drying; high air mover ratios</td>
              <td className="border border-gray-300 px-4 py-2">5&ndash;7+ days</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-bold">4</td>
              <td className="border border-gray-300 px-4 py-2">Specialty drying</td>
              <td className="border border-gray-300 px-4 py-2">Hardwood, plaster, concrete, stone saturated</td>
              <td className="border border-gray-300 px-4 py-2">Specialty systems (floor mats, panel dryers, desiccant dehumidifiers)</td>
              <td className="border border-gray-300 px-4 py-2">7&ndash;14+ days</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================================================================ */}
      {/* SECTION: RELATED ARTICLES */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/water-damage-claims" className="text-[#2E74B5] underline">
            Water Damage Claims
          </Link>{' '}
          &mdash; A comprehensive guide to filing and managing water damage insurance claims.
        </li>
        <li>
          <Link href="/resources/iicrc-standards-certifications" className="text-[#2E74B5] underline">
            IICRC Standards and Certifications
          </Link>{' '}
          &mdash; Overview of the IICRC certification system and what to look for in a
          restoration professional.
        </li>
        <li>
          <Link href="/resources/blockage-vs-backup" className="text-[#2E74B5] underline">
            Blockage &amp; Overflow vs. Sewer Backup
          </Link>{' '}
          &mdash; Why the distinction between a plumbing blockage and a sewer backup matters
          for coverage.
        </li>
        <li>
          <Link href="/resources/slab-leak-claims" className="text-[#2E74B5] underline">
            Slab Leak Claims
          </Link>{' '}
          &mdash; How slab leaks create unique Category classification challenges when supply
          water contacts soil.
        </li>
        <li>
          <Link href="/resources/sewage-contamination-mitigation-failure" className="text-[#2E74B5] underline">
            When the Insurance Company&apos;s Mitigation Contractor Makes Everything Worse
          </Link>{' '}
          &mdash; A case study in how vendor program dynamics lead to inadequate Category 3
          remediation.
        </li>
      </ul>
    </>
  )
}
