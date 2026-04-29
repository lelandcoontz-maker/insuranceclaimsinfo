import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Silica Contamination in Property Insurance Claims: What You Need to Know',
  description:
    'Crystalline silica exposure during property damage repairs is a serious OSHA-regulated hazard. Learn what silica is, why it matters for your insurance claim, and what remediation your insurer should be paying for.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property has been damaged by fire, water, or any event that requires demolition,
        cutting, grinding, or sanding of concrete, stucco, drywall, tile, or stone, there is a
        serious health hazard that most insurance adjusters either don&apos;t understand or
        deliberately ignore: <strong>respirable crystalline silica</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Silica is one of the most tightly regulated substances in construction. OSHA has strict
        federal standards governing worker exposure, and California has adopted an even more
        aggressive permanent standard. Compliance with these regulations costs money &mdash;
        real money &mdash; and those costs are a legitimate part of your insurance claim. When
        your insurer writes a repair estimate that ignores silica compliance, they are not just
        shortchanging your claim. They are expecting your contractor to either break the law
        or absorb the cost of compliance out of their own pocket.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Crystalline Silica?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Crystalline silica (SiO&#8322;) is a naturally occurring mineral found in sand, rock, soil,
        and many common construction materials. In its undisturbed state, silica is harmless &mdash;
        you walk on it every day. The danger arises when silica-containing materials are cut,
        ground, drilled, sanded, or demolished, releasing microscopic particles into the air.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These particles &mdash; called <strong>respirable crystalline silica</strong> &mdash; are
        roughly 100 times smaller than a grain of beach sand. They are invisible to the naked eye,
        and when inhaled, they penetrate deep into the lungs where the body cannot expel them. Once
        lodged in lung tissue, silica particles cause progressive, irreversible scarring.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common construction materials that contain crystalline silica include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Concrete and mortar</strong></li>
        <li><strong>Stucco</strong></li>
        <li><strong>Drywall and joint compound</strong></li>
        <li><strong>Ceramic and porcelain tile</strong></li>
        <li><strong>Natural stone</strong> (granite, sandstone, slate, quartzite)</li>
        <li><strong>Engineered stone</strong> (quartz countertops)</li>
        <li><strong>Brick</strong></li>
        <li><strong>Fiber cement siding</strong> (e.g., Hardie board)</li>
        <li><strong>Roof tiles</strong> (concrete and clay)</li>
        <li><strong>Asphalt</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In other words, virtually every property damage repair that involves demolition or
        modification of structural or finish materials will disturb silica-containing products.
        This is not a niche concern. It applies to nearly every significant property claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Silica Matters: The Health Consequences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Respirable crystalline silica has been recognized as an occupational hazard since the
        1700s. Prolonged or concentrated exposure causes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Silicosis</strong> &mdash; An incurable, progressive lung disease caused by
          inhaling silica dust. The silica particles create permanent scar tissue in the lungs,
          progressively reducing lung capacity. Silicosis can be fatal and has no treatment
          other than lung transplantation.
        </li>
        <li>
          <strong>Lung cancer</strong> &mdash; Crystalline silica is classified as a Group 1
          carcinogen by the International Agency for Research on Cancer (IARC), the same
          classification as asbestos and tobacco.
        </li>
        <li>
          <strong>Chronic obstructive pulmonary disease (COPD)</strong>
        </li>
        <li>
          <strong>Kidney disease</strong>
        </li>
        <li>
          <strong>Autoimmune disorders</strong> &mdash; including scleroderma and rheumatoid
          arthritis
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California alone has logged more than 230 confirmed silicosis cases and 14 deaths since
        2019. These are not hypothetical risks. In 2024, more than a quarter of California&apos;s
        inspected engineered-stone fabrication shops were hit with stop-work orders, and fines
        reached five-figure territory for routine violations.
      </p>

      <CalloutBox variant="warning" title="Silicosis Is Incurable">
        <p>
          There is no cure for silicosis. Once the scarring begins, it does not stop &mdash;
          even after exposure ends. This is why OSHA treats silica exposure with the same
          regulatory seriousness as asbestos. Contractors who skip silica protocols are
          not cutting corners on paperwork &mdash; they are exposing workers to a disease
          that will kill them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Federal OSHA Standard: 29 CFR 1926.1153
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        OSHA&apos;s Respirable Crystalline Silica Standard for construction (29 CFR 1926.1153)
        went into effect on June 23, 2017. It applies to <em>all</em> construction activities
        that may expose workers to respirable crystalline silica. The key requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Permissible Exposure Limit (PEL):</strong> 50 &mu;g/m&sup3; over an 8-hour
          time-weighted average &mdash; reduced from the previous limit of 250 &mu;g/m&sup3;.
          This is a fivefold reduction in the allowable exposure.
        </li>
        <li>
          <strong>Action Level:</strong> 25 &mu;g/m&sup3; &mdash; at which point employers
          must begin exposure monitoring and medical surveillance.
        </li>
        <li>
          <strong>Engineering controls</strong> must be used to reduce exposure. Examples include
          water suppression while cutting or grinding, dust shrouds, HEPA-filtered dust
          collectors with 99% air filtration, and HEPA vacuuming instead of sweeping or
          blowing with compressed air.
        </li>
        <li>
          <strong>Respiratory protection</strong> when engineering controls alone are
          insufficient.
        </li>
        <li>
          <strong>Written exposure control plan</strong> for each jobsite.
        </li>
        <li>
          <strong>Medical surveillance</strong> for workers exposed above the action level.
        </li>
        <li>
          <strong>Competent person</strong> designation &mdash; someone trained to identify
          silica hazards and authorized to take corrective measures.
        </li>
        <li>
          <strong>Housekeeping:</strong> Dry sweeping and compressed air blow-off are prohibited.
          Only HEPA-filtered vacuuming, wet sweeping, or other dust-minimizing methods are
          permitted.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Permanent Silica Standard: Even Stricter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2023, Cal/OSHA adopted an emergency temporary standard (ETS) for respirable crystalline
        silica. In 2025, that standard became permanent under Title 8 CCR &sect;5204 &mdash; with
        no sunset clause, no grace period, and no excuses. The California standard goes beyond
        federal OSHA in several important ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>High-Exposure Trigger Tasks (HETTs)</strong> &mdash; Any cutting, grinding,
          drilling, polishing, or cleanup that disturbs artificial stone (greater than 0.1% silica)
          or high-silica natural stone is subject to the most restrictive controls regardless of
          measured exposure levels. No objective-data exemption is available for HETTs.
        </li>
        <li>
          <strong>Wet methods mandated:</strong> Continuous water flow or full submersion is
          required during cutting &mdash; not just &ldquo;where feasible&rdquo; as under the
          2023 ETS. Employers must document that flow rates are adequate for dust suppression.
        </li>
        <li>
          <strong>Respiratory protection:</strong> Tight-fit PAPR with HEPA/N-R-P 100 filters
          is the default. Downgrading is only permitted after semi-annual sampling confirms
          exposure below the action level.
        </li>
        <li>
          <strong>Dry sweeping and air blow-off are banned outright.</strong>
        </li>
        <li>
          <strong>Employee rotation</strong> is no longer an acceptable exposure control method.
        </li>
        <li>
          <strong>24-hour reporting:</strong> Any confirmed case of silicosis must be reported
          to Cal/OSHA and CDPH within 24 hours.
        </li>
        <li>
          <strong>Medical surveillance:</strong> Baseline exam plus follow-ups every three years,
          with immediate follow-ups for high-exposure workers.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Does Silica Apply to an Insurance Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Silica compliance is relevant to virtually any property claim that involves structural
        repair, demolition, or renovation. Common scenarios include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fire damage</strong> &mdash; Demolition of fire-damaged concrete, stucco,
          drywall, and tile generates silica dust. Wildfire debris itself contains crystalline
          silica from burned concrete, stucco, and sheetrock. See our{' '}
          <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
            smoke damage claims guide
          </Link>{' '}
          for more on wildfire contaminants.
        </li>
        <li>
          <strong>Water damage</strong> &mdash; Flood-damaged drywall, tile, and concrete that
          must be removed or cut back generates silica dust during demolition.
        </li>
        <li>
          <strong>Hail and wind damage</strong> &mdash; Removal and replacement of concrete
          roof tiles, stucco repairs, and masonry work all involve silica-containing materials.
        </li>
        <li>
          <strong>Mold remediation</strong> &mdash; Cutting out mold-contaminated drywall and
          other building materials releases silica particles.
        </li>
        <li>
          <strong>Earthquake damage</strong> &mdash; Concrete and masonry repair or demolition.
        </li>
        <li>
          <strong>Vehicle impact</strong> &mdash; When a vehicle strikes a building, demolition
          and repair of damaged concrete, block, brick, or stucco walls requires silica controls.
        </li>
        <li>
          <strong>Any renovation or code upgrade</strong> &mdash; Cutting, grinding, or sanding
          concrete, tile, stone, or fiber cement board as part of code-required upgrades.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Bottom Line">
        <p>
          If your contractor has to cut, grind, sand, drill, or demolish concrete, stucco,
          drywall, tile, brick, or stone, OSHA silica compliance costs apply. These are not
          optional. They are federal law.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Silica Compliance Costs Look Like in an Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proper silica compliance requires specific line items in any repair estimate. Insurance
        companies routinely omit all of them. Here are the categories of cost that OSHA compliance
        requires:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Personal Protective Equipment (PPE)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Full-face multi-purpose respirators for each worker, each day</li>
        <li>HEPA respirator cartridges (replaced per manufacturer schedule)</li>
        <li>Hazardous cleanup PPE (Tyvek suits, gloves, eye protection)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Containment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Containment barriers with airlocks and decontamination chambers</li>
        <li>Peel-and-seal zippers for containment entry points</li>
        <li>Negative air pressure maintenance throughout the work area</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Air Filtration and Scrubbing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Negative air fans / air scrubbers running 24 hours per day during active work</li>
        <li>HEPA filters for negative air machines (large format)</li>
        <li>HEPA filters for upright vacuums used in cleanup</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cleaning and Decontamination
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>HEPA vacuuming of all surfaces &mdash; light pass and detailed pass (per square foot)</li>
        <li>Surface cleaning (standard and heavy)</li>
        <li>Equipment decontamination charges for each piece of equipment</li>
        <li>Air movers for drying and ventilation</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Supervision and Administration
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hazardous waste / supervisory labor (the competent person required by OSHA)</li>
        <li>Written exposure control plan preparation</li>
        <li>Air monitoring if exposure levels are uncertain</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        These costs are real, documented in Xactimate, and required by federal law. A typical
        silica compliance section on a restoration estimate can add $5,000 to $15,000 or more
        depending on the scope of work and number of rooms affected. When your insurer&apos;s
        estimate does not include a single silica compliance line item, they are writing an
        estimate that cannot be legally performed as written.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurance Companies Handle Silica (Badly)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies handle silica compliance the same way they handle most legitimate
        costs: they ignore it and hope you don&apos;t notice. Common tactics include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Omitting silica line items entirely.</strong> The most common approach. The
          insurer writes an estimate for drywall demolition, tile removal, or stucco repair
          with zero OSHA compliance costs included. The contractor is expected to absorb
          the cost or skip the safety measures.
        </li>
        <li>
          <strong>&ldquo;It&apos;s included in the labor rate.&rdquo;</strong> Insurers
          sometimes claim that OSHA compliance costs are already factored into
          Xactimate&apos;s labor rates. This is false. Xactimate&apos;s standard labor rates
          cover normal working conditions. HEPA vacuuming, air scrubbers, containment barriers,
          full-face respirators, and supervisory labor are additional costs above standard labor.
        </li>
        <li>
          <strong>&ldquo;The contractor didn&apos;t need to do that.&rdquo;</strong> After the
          work is completed, the insurer refuses to pay for silica measures the contractor
          actually performed, arguing they were unnecessary. OSHA regulations are not optional
          &mdash; the contractor was legally required to perform those measures.
        </li>
        <li>
          <strong>&ldquo;That&apos;s the contractor&apos;s overhead.&rdquo;</strong> OSHA
          compliance is not overhead. These are direct costs of performing the work safely
          and legally. They are no more &ldquo;overhead&rdquo; than the drywall itself.
        </li>
      </ul>

      <CalloutBox variant="warning" title="An Estimate Without Silica Compliance Is an Estimate That Violates Federal Law">
        <p>
          If a repair estimate includes demolition of drywall, concrete, stucco, tile, or stone
          and does not include OSHA silica compliance line items, the work described in that
          estimate cannot be legally performed as written. Any contractor who performs the work
          without silica controls is violating 29 CFR 1926.1153 and exposing workers to a
          known carcinogen.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Silica in Wildfire Smoke and Ash
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Silica contamination is not limited to repair activities. When a wildfire burns through
        a residential neighborhood, the combustion of concrete, stucco, and sheetrock releases
        crystalline silica into the smoke and ash. This silica settles on and inside neighboring
        properties &mdash; including homes that were not directly damaged by fire.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Urban wildfire smoke is dramatically different from forest fire smoke. A forest fire
        burns trees and brush. An urban wildfire burns homes, vehicles, electronics, chemicals,
        and construction materials &mdash; producing a toxic mixture that includes crystalline
        silica along with heavy metals, dioxins, asbestos, and dozens of other hazardous
        compounds. For a comprehensive discussion, see our{' '}
        <Link href="/resources/wildfire-guide" className="text-blue-700 underline hover:text-blue-900">
          California wildfire claims guide
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property was exposed to urban wildfire smoke, environmental testing may reveal
        silica contamination on surfaces and in HVAC systems. The remediation of this
        contamination &mdash; HEPA vacuuming, air scrubbing, duct cleaning, and surface
        decontamination &mdash; is a covered cost under your fire policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Insurer Ignores Silica Compliance
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get a detailed estimate from a qualified contractor.</strong> Make sure the
          estimate includes all OSHA silica compliance line items &mdash; PPE, containment,
          air scrubbing, HEPA vacuuming, equipment decontamination, and supervisory labor.
        </li>
        <li>
          <strong>Reference the OSHA standard directly.</strong> Cite 29 CFR 1926.1153 (federal)
          and Title 8 CCR &sect;5204 (California) in your correspondence with the insurer. These
          are not suggestions &mdash; they are enforceable regulations with real penalties.
        </li>
        <li>
          <strong>Request the insurer&apos;s position in writing.</strong> Ask the insurance
          company to explain, in writing, why they believe OSHA compliance costs do not apply
          to the repair work in their estimate. Most insurers will not put that position on
          paper because they know it is indefensible.
        </li>
        <li>
          <strong>If your insurer employs a hygienist or safety consultant,</strong> ask for
          their qualifications and their opinion on whether silica controls are required for
          the scope of work. See our guide on{' '}
          <Link href="/resources/biased-insurance-experts" className="text-blue-700 underline hover:text-blue-900">
            challenging biased insurance experts
          </Link>.
        </li>
        <li>
          <strong>Consider filing a complaint with the California Department of Insurance</strong>{' '}
          if the insurer refuses to include legally required compliance costs. Omitting mandatory
          safety measures from an estimate is a form of claim underpayment. See our{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            CDI complaint guide
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Eight Core Employer Duties Under California&apos;s Permanent Silica Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s permanent silica standard (Title 8 CCR &sect;5204) imposes eight core
        duties on any employer whose workers may be exposed to respirable crystalline silica:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Written Exposure-Control Plan</strong> &mdash; List all materials and tasks
          by silica content. Include air-monitoring records and engineering-control schematics.
        </li>
        <li>
          <strong>Exposure Assessment</strong> &mdash; Perform initial and periodic air monitoring
          to determine worker exposure levels.
        </li>
        <li>
          <strong>Engineering and Work Practice Controls</strong> &mdash; Water suppression,
          ventilation, and HEPA filtration as primary controls.
        </li>
        <li>
          <strong>Respiratory Protection</strong> &mdash; Tight-fit PAPR with HEPA/N-R-P 100
          filters as the default.
        </li>
        <li>
          <strong>Regulated Areas</strong> &mdash; Establish and enforce restricted zones where
          silica exposure may exceed the PEL.
        </li>
        <li>
          <strong>Medical Surveillance</strong> &mdash; Baseline and periodic medical exams for
          exposed workers.
        </li>
        <li>
          <strong>Hazard Communication and Training</strong> &mdash; All workers must be trained
          on silica hazards, controls, and medical surveillance.
        </li>
        <li>
          <strong>Recordkeeping</strong> &mdash; Maintain exposure records, medical surveillance
          records, and written plans for the duration required by regulation.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every one of these duties has a cost. When an insurance company writes an estimate
        that includes drywall demolition but no silica compliance costs, they are expecting a
        contractor to violate all eight of these requirements simultaneously.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Air Scrubbing: The Most Commonly Omitted Line Item
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important &mdash; and most frequently omitted &mdash; silica compliance
        costs is air scrubbing. Negative air machines (air scrubbers) filter the work area air
        through HEPA filters to capture respirable silica particles. They must run continuously
        during active work and, depending on the scope, may need to continue running for a
        period after work is completed to clear residual airborne particles.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Air scrubbers are not small devices. A standard unit handles a specific volume of air,
        and the number of units required depends on the size of the work area and the volume of
        air exchanges needed per hour. The HEPA filters in these machines are consumable items
        that must be replaced regularly &mdash; and a single large-format HEPA filter can cost
        over $200.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer&apos;s estimate omits air scrubbing entirely, they are omitting one of
        the most fundamental engineering controls that OSHA requires.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HEPA Vacuuming: Two Passes, Not Zero
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        OSHA prohibits dry sweeping and compressed air blow-off in areas where silica dust is
        present. The only acceptable housekeeping method is HEPA-filtered vacuuming or wet methods.
        Proper silica remediation typically requires two passes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Light HEPA vacuuming</strong> &mdash; An initial pass over all surfaces
          (walls, ceilings, and floors) to remove loose particulate.
        </li>
        <li>
          <strong>Detailed HEPA vacuuming</strong> &mdash; A second, more thorough pass that
          captures embedded particles from textured surfaces, crevices, and joints.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both passes are measured per square foot and apply to all walls, ceilings, and floors
        in the affected area. A 1,700-square-foot scope of work can easily generate $2,000 to
        $3,000 in HEPA vacuuming costs alone &mdash; costs that your insurer&apos;s estimate
        likely does not include.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Equipment Decontamination
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every piece of equipment used in a silica-affected work area must be decontaminated
        before it leaves the containment zone. This prevents cross-contamination to other
        areas of the home or to other jobsites. Equipment decontamination is a per-piece charge
        that applies to every tool, machine, and piece of PPE that enters the work area.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Connection to Environmental Sampling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property has been exposed to silica contamination &mdash; particularly from
        wildfire smoke and ash &mdash; environmental sampling can document the presence and
        concentration of crystalline silica on surfaces and in the air. Common sampling methods
        include surface wipe samples, microvacuum samples, and air cassette sampling. For a
        detailed discussion of sampling methods, see our{' '}
        <Link href="/resources/environmental-sampling-methods" className="text-blue-700 underline hover:text-blue-900">
          environmental sampling methods guide
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sampling results that confirm silica contamination create a documented, defensible basis
        for including silica remediation costs in your insurance claim. This is particularly
        important for smoke damage claims where the insurer may argue that the home &ldquo;just
        needs cleaning.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: What Your Insurer Should Be Paying For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance claim involves any work that disturbs silica-containing materials,
        the repair estimate should include &mdash; at minimum &mdash; the following:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Personal protective equipment (PPE) including full-face respirators and HEPA cartridges</li>
        <li>Containment barriers with airlocks and decontamination chambers</li>
        <li>Negative air fans / air scrubbers with HEPA filters, running continuously</li>
        <li>HEPA vacuuming &mdash; light and detailed passes &mdash; of all affected surfaces</li>
        <li>Surface cleaning (standard and heavy) of all affected areas</li>
        <li>Equipment decontamination for all tools and equipment</li>
        <li>Hazardous waste supervisory labor (the OSHA-required competent person)</li>
        <li>Air movers for ventilation during and after work</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are not luxury items. They are not &ldquo;nice to have.&rdquo; They are federally
        mandated safety requirements that carry real costs, and they are a legitimate part of
        any property insurance claim that involves demolition, cutting, or grinding of
        silica-containing materials.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 italic">
        Have questions about silica contamination or remediation costs on your insurance claim?{' '}
        <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
          Contact us
        </Link>{' '}
        for a free consultation.
      </p>
    </>
  )
}
