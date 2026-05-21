import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Insurance Claims for Rural and Agricultural Properties: Livestock, Crops, Equipment, and Coverage Gaps',
  description:
    'Rural and agricultural property claims involve livestock mortality, crop damage, farm equipment on inland marine policies, outbuilding coverage gaps, and well and septic losses that standard homeowner guidance ignores.',
  summary:
    'Rural and farm claims involve livestock mortality, crop damage, equipment on inland marine policies, outbuilding gaps, and well and septic losses that standard homeowner advice ignores. These properties need coverage matched to their unique exposures.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law and agricultural policy provisions as a Licensed Public Adjuster.
          It is not legal advice. Agricultural claims involve specialized policy forms, federal crop
          programs, and fact-specific coverage questions. Consult with a licensed attorney or public
          adjuster for questions about your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance claims guidance is written for suburban homeowners with a standard HO-3 policy.
        If you operate a ranch, farm, vineyard, or any rural property, that guidance is largely
        useless. The insurance products are different, the perils are different, the property at risk
        is different, and the claims process involves valuation methods that never come up on a
        residential kitchen remodel.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rural and agricultural properties sit at the intersection of multiple insurance lines &mdash;
        homeowners or dwelling fire, commercial property, inland marine, livestock mortality, crop
        insurance, and sometimes surplus lines coverage from non-admitted carriers. A single wildfire
        can trigger claims under four or five separate policies simultaneously. Understanding which
        policy covers what, and where the gaps hide, is the difference between recovering your
        losses and absorbing them.
      </p>

      {/* ───────── SECTION: POLICY LANDSCAPE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Insurance Landscape for Rural Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Urban and suburban properties are typically insured under a single homeowners policy that
        covers the dwelling, other structures, personal property, and additional living expenses.
        Rural properties rarely fit that model. The coverage is usually spread across multiple
        policies, each with its own insurer, its own adjuster, and its own claims process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Farm and Ranch Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The farm and ranch policy is the agricultural equivalent of the homeowners policy. It bundles
        several coverages into one form: the dwelling, farm personal property (equipment, tools,
        supplies), other farm structures (barns, stables, silos, equipment sheds), and farm liability.
        Some forms also include limited livestock coverage, though serious livestock operations
        typically carry separate mortality policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical difference from a standard homeowners policy is how &ldquo;other structures&rdquo;
        coverage works. On an HO-3, Coverage B (other structures) is typically 10% of the dwelling
        limit. On a working ranch with a $500,000 home, that gives you $50,000 for all outbuildings
        combined &mdash; which will not come close to replacing a barn, a stable, equipment storage,
        and fencing. Farm policies allow separate scheduled limits for each structure, but only if the
        policyholder specifically listed and valued each one when the policy was written.
      </p>

      <CalloutBox variant="warning" title="The Outbuilding Gap">
        <p>
          If your rural property is insured on a standard homeowners policy rather than a farm and
          ranch form, your outbuildings are almost certainly underinsured. A standard HO-3&rsquo;s
          10% Coverage B limit was designed for a detached garage and a garden shed &mdash; not for
          a 3,000 square foot barn. Review your policy now. If your outbuildings are on a blanket
          Coverage B limit that would not rebuild the most expensive structure alone, you have a
          coverage gap.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inland Marine for Farm Equipment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Farm equipment &mdash; tractors, combines, harvesters, irrigation systems, processing
        equipment &mdash; is often insured under{' '}
        <Link href="/resources/inland-marine" className="text-[#2E74B5] underline">
          inland marine policies
        </Link>{' '}
        rather than on the farm policy itself. Inland marine covers mobile property and property
        that moves between locations, which describes most farm equipment. The key advantage is
        that inland marine policies are typically written on an open-perils (all-risk) basis with
        agreed-value coverage, meaning there is no{' '}
        <Link href="/resources/coinsurance-penalty" className="text-[#2E74B5] underline">
          coinsurance penalty
        </Link>{' '}
        and no depreciation dispute at claim time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The catch is that inland marine requires accurate scheduling. Each piece of equipment must
        be listed with its description, serial number, and agreed value. Equipment that is not on
        the schedule is not covered. Farmers who buy new equipment mid-season and forget to notify
        the agent discover this gap at the worst possible time.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Federal Crop Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Crop losses are not covered by property insurance at all. They are covered by the federal
        crop insurance program administered by the USDA&rsquo;s Risk Management Agency (RMA)
        through approved private insurance companies. Federal crop insurance operates under entirely
        different rules than private property insurance &mdash; different deadlines, different
        adjustment methods, different appeal processes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The two main types are <strong>yield-based policies</strong> (which pay when actual
        production falls below a guaranteed yield level) and <strong>revenue-based policies</strong>
        (which pay when revenue falls below a guaranteed level, accounting for both yield and price).
        California&rsquo;s specialty crops &mdash; grapes, almonds, citrus, avocados &mdash; have
        crop-specific policies with adjustment procedures tailored to each commodity.
      </p>

      <CalloutBox variant="important" title="Crop Insurance Deadlines Are Strict">
        <p>
          Federal crop insurance has rigid reporting deadlines. You must report a loss within 72
          hours of discovering it (or within 15 days after the end of the insurance period). Unlike
          private insurance where late notice can sometimes be excused, federal crop insurance
          deadlines are enforced strictly. Missing the reporting window can result in a complete
          denial regardless of the merits of the loss.
        </p>
      </CalloutBox>

      {/* ───────── SECTION: LIVESTOCK ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Livestock Claims: Mortality, Theft, and Proof of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Livestock mortality insurance covers death or destruction of animals from covered perils.
        Standard perils include accident, illness, disease, fire, lightning, and transportation
        mishaps. Policies can cover individual high-value animals (breeding stock, show animals)
        or herds on a blanket basis. The claims process is unlike anything in standard property
        insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Valuation Challenges
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most contentious issue in livestock claims is valuation. A dairy cow has different
        values depending on whether you measure her as a beef animal, a producing dairy cow, or
        breeding stock. A registered quarter horse has a pedigree value, a training investment
        value, and a market value that may all be wildly different. Insurers will push toward
        the lowest defensible valuation unless you can document the higher value with sales
        records, breeding records, competition records, and veterinary assessments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For herd losses &mdash; particularly in wildfire or disease events &mdash; the challenge
        is proving what you had. Insurers will request a complete inventory with species, breed,
        age, sex, registration numbers, and pre-loss value for every animal. Ranchers who maintain
        detailed records recover substantially more than those who rely on estimates and memory.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Veterinary Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most livestock mortality policies require a veterinary examination before euthanasia or
        destruction of the animal, and a veterinary certificate of death establishing the cause.
        In emergency situations &mdash; a horse with a catastrophic leg fracture, an animal
        suffering after a fire &mdash; the policyholder may need to euthanize before a vet
        arrives. This creates a documentation gap that insurers can exploit. If emergency
        euthanasia is necessary, photograph the animal, document the condition, and get the
        attending veterinarian&rsquo;s written statement as soon as possible. Do not dispose
        of the carcass before the insurer has had a reasonable opportunity to inspect.
      </p>

      <CalloutBox variant="warning" title="Do Not Dispose of Carcasses Prematurely">
        <p>
          After a livestock loss, the insurer has the right to inspect the remains. Disposing of
          the carcass before the insurer&rsquo;s adjuster or veterinarian can examine it gives
          the carrier grounds to dispute the cause of death, the identity of the animal, or
          whether the animal existed at all. If health regulations require immediate disposal
          (certain contagious diseases), document everything &mdash; video, photographs, the
          veterinarian&rsquo;s written statement &mdash; and notify the insurer immediately.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Livestock Theft
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Livestock theft is covered under some farm policies and some standalone livestock policies,
        but it is one of the hardest claims to prove. The insurer will require a police report, an
        inventory showing what was on the property before the theft, evidence of forced entry or
        tampering (cut fences, broken gates), and an explanation for how the theft was discovered
        and when it likely occurred. Livestock that simply &ldquo;went missing&rdquo; without
        evidence of theft will be treated as strayed rather than stolen, and stray losses are
        typically excluded.
      </p>

      {/* ───────── SECTION: OUTBUILDINGS AND STRUCTURES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Outbuildings, Barns, and Farm Structures
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A working rural property may have a dozen or more structures beyond the primary dwelling:
        barns, stables, equipment sheds, hay storage, workshops, pump houses, greenhouses, and
        animal shelters. How these structures are insured depends entirely on the policy form.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scheduled vs. Blanket Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a farm policy, outbuildings can be insured on a <strong>scheduled basis</strong> (each
        structure listed individually with its own limit) or on a <strong>blanket basis</strong>
        (a single limit covering all structures). Scheduled coverage is more precise but requires
        updating whenever you build, modify, or demolish a structure. Blanket coverage is more
        flexible but often triggers{' '}
        <Link href="/resources/commercial-coinsurance" className="text-[#2E74B5] underline">
          coinsurance requirements
        </Link>{' '}
        &mdash; if the blanket limit is less than the required percentage of total value, the
        carrier reduces payment proportionally.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common gap: structures built after the policy was written that were never reported
        to the insurer. A new barn, an expanded equipment shed, a greenhouse added three years ago
        &mdash; if it is not on the policy and the total value now exceeds the blanket limit, the
        coinsurance penalty applies to every structure, including the ones that were properly scheduled.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fencing and Corrals
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fencing is one of the most expensive and most frequently underinsured components of a rural
        property. Miles of perimeter fencing, cross-fencing, corrals, and livestock pens can represent
        hundreds of thousands of dollars in replacement cost. Some farm policies cover fencing as a
        scheduled item; others include it under a general &ldquo;farm structures&rdquo; limit; some
        exclude fencing entirely or limit it to a nominal sublimit. After a wildfire that burns
        through miles of fencing, the sublimit gap becomes painfully apparent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California ranchers affected by wildfire should also investigate the USDA&rsquo;s Emergency
        Conservation Program (ECP) and the Livestock Indemnity Program (LIP), which can provide
        federal cost-share assistance for fencing replacement and livestock losses that insurance
        does not fully cover.
      </p>

      {/* ───────── SECTION: WELLS AND SEPTIC ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Wells, Septic Systems, and Water Infrastructure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rural properties rely on private wells, septic systems, irrigation infrastructure, and
        sometimes shared water systems. Damage to these systems can be the most expensive single
        item in a rural property claim &mdash; and the most likely to fall through a coverage gap.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Wells
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard homeowners policy provides limited or no coverage for wells. Some policies
        classify the well as an &ldquo;other structure&rdquo; and cover it under Coverage B,
        but only for covered perils &mdash; which does not include mechanical breakdown, drought,
        contamination, or earthquake damage. Farm policies vary widely. Some provide specific well
        coverage; others exclude wells from the farm structures coverage and require a separate{' '}
        <Link href="/resources/service-line-coverage" className="text-[#2E74B5] underline">
          service line or equipment breakdown endorsement
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Drilling a new well in California can cost $30,000 to $100,000 or more depending on depth,
        geology, and permitting requirements. If your well is damaged in a covered loss and your
        policy sublimit is $5,000, you are absorbing a catastrophic out-of-pocket expense.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Septic Systems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Septic system coverage depends on both the policy form and the cause of loss. Damage from
        a covered peril (fire, vehicle impact, fallen tree) is generally covered as an &ldquo;other
        structure.&rdquo; But septic failure from age, root intrusion, saturation, or improper
        maintenance is excluded as wear and tear. The gray area &mdash; a septic system damaged
        by earthquake, mudslide, or flooding &mdash; depends on whether you carry the appropriate
        endorsement or separate policy for those perils. For more detail, see our article on{' '}
        <Link href="/resources/septic-system-coverage" className="text-[#2E74B5] underline">
          septic system coverage
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Irrigation Systems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Irrigation infrastructure &mdash; pumps, pipes, drip systems, sprinkler heads, pivot
        systems, and control equipment &mdash; is critical to agricultural operations and expensive
        to replace. Coverage depends on whether the system is classified as real property (permanently
        installed underground pipes), farm personal property (portable irrigation equipment), or
        scheduled equipment under an inland marine floater. In a wildfire, above-ground irrigation
        components melt and burn. Below-ground pipes may survive the fire but can be damaged by the
        heat or by subsequent mudslide and debris flow. The claim often spans multiple coverage
        categories.
      </p>

      {/* ───────── SECTION: WILDFIRE-SPECIFIC ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Wildfire and Rural Properties: The Compounding Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wildfire is the catastrophic peril for California rural properties, and its impact
        compounds across every coverage category simultaneously. A single fire can destroy the
        dwelling, burn outbuildings, kill livestock, ruin stored feed and supplies, melt irrigation
        systems, contaminate wells, burn miles of fencing, and render the land temporarily unusable.
        The total loss can easily exceed the combined policy limits across all policies because many
        rural policyholders are underinsured on at least one category.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Post-wildfire claims on rural properties also involve unique complications that urban claims
        do not:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Access delays:</strong> Rural properties in fire zones may be inaccessible for
          weeks due to road closures, downed power lines, and active firefighting operations. The
          insurer&rsquo;s adjuster cannot inspect, and the policyholder cannot begin mitigation
          or documentation.
        </li>
        <li>
          <strong>Hazardous materials:</strong> Burned agricultural properties may have pesticide
          contamination, fuel storage tank leaks, burned treated lumber, and other hazmat issues
          that complicate debris removal and increase costs far beyond standard residential rates.
        </li>
        <li>
          <strong>Soil damage:</strong> Intense wildfire can sterilize topsoil, destroy root
          systems that prevent erosion, and create hydrophobic soil layers that cause severe
          runoff and{' '}
          <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] underline">
            mudslide risk
          </Link>
          . Restoring agricultural productivity may require soil remediation that no insurance
          policy covers.
        </li>
        <li>
          <strong>Smoke taint:</strong> Wine grape vineyards within the smoke zone of a wildfire
          may suffer smoke taint &mdash; chemical compounds absorbed into the grape skins that
          make the wine undrinkable. The vines survive, but the crop is worthless. This is a crop
          insurance claim, not a property claim, and proving smoke taint requires laboratory
          analysis of grapes sampled at specific intervals.
        </li>
      </ul>

      {/* ───────── SECTION: CLAIMS PROCESS DIFFERENCES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Agricultural Claims Differ From Residential Claims
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Multiple Adjusters, Multiple Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A residential homeowner typically deals with one adjuster from one insurance company. A
        rural property owner after a catastrophic loss may be dealing with a homeowners adjuster
        for the dwelling, a farm policy adjuster for structures and equipment, a livestock adjuster
        (often a specialized independent adjuster), a crop insurance adjuster from a federally
        approved company, an inland marine adjuster for scheduled equipment, and possibly a FEMA
        representative if there is a federal disaster declaration. Coordinating these separate
        claims processes simultaneously is overwhelming, and the adjusters from different companies
        have no obligation to communicate with each other.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Specialized Appraisal and Valuation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Residential personal property is valued using retail replacement cost or actual cash value
        based on age and condition. Agricultural property requires specialized appraisal methods.
        Livestock is valued using comparable sales data, breed registry values, production records,
        and sometimes discounted future income calculations. Farm equipment is valued using
        equipment dealer guides, auction records, and condition assessments. Stored commodities
        (hay, grain, feed) are valued at market price on the date of loss. If the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal process
        </Link>{' '}
        is invoked, the appraiser and umpire need agricultural expertise, not residential
        construction experience.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Income Loss and Business Interruption
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A residential policyholder recovers additional living expenses (ALE) during displacement.
        A farming operation that is shut down loses income. If the farm policy includes a farm
        income coverage or business interruption provision, the policyholder can recover lost farm
        income during the restoration period. But farm income is seasonal and cyclical &mdash;
        proving what the operation would have earned but for the loss requires production records,
        tax returns, and potentially expert agricultural economic analysis. Insurers routinely
        undervalue farm income claims by using annual averages that ignore the seasonality of the
        operation.
      </p>

      {/* ───────── SECTION: DOCUMENTATION ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Documentation That Rural Property Owners Should Maintain
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important thing a rural or agricultural property owner can do before a loss
        occurs is maintain comprehensive records. Agricultural claims are documentation-intensive,
        and the policyholder who has records recovers more &mdash; sometimes dramatically more &mdash;
        than the one who does not.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Livestock inventory:</strong> Species, breed, age, sex, registration numbers,
          purchase price, veterinary records, production records (milk yield, offspring), and
          photographs. Update at least quarterly.
        </li>
        <li>
          <strong>Equipment inventory:</strong> Make, model, year, serial number, purchase price,
          maintenance records, and photographs. Include attachments and implements. Store copies
          of this inventory off-site.
        </li>
        <li>
          <strong>Structure inventory:</strong> Photographs and dimensions of every outbuilding,
          barn, shed, greenhouse, and corral. Note construction materials, when it was built, and
          any improvements. This is critical for establishing replacement cost.
        </li>
        <li>
          <strong>Stored commodities:</strong> What is stored where, quantities, purchase receipts
          or production records, and current market value. Hay stored in a barn that burns needs
          to be documented before the fire, not reconstructed from memory after.
        </li>
        <li>
          <strong>Video walkthrough:</strong> An annual video walkthrough of the entire property
          &mdash; every building, every room in every building, every corral, every piece of
          stored equipment &mdash; provides powerful evidence of pre-loss condition. Store the
          video in cloud storage, not on a device that could be destroyed in the loss.
        </li>
      </ul>

      <CalloutBox variant="important" title="Store Records Off-Site">
        <p>
          If your property records are stored in a filing cabinet in the barn and the barn burns
          down, your records burn with it. Keep copies of all inventories, photographs, policy
          documents, and production records in cloud storage or at an off-site location. This
          applies to digital records too &mdash; if your computer and backup drive are both in
          the house, a total loss destroys both.
        </p>
      </CalloutBox>

      {/* ───────── SECTION: COMMON GAPS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Coverage Gaps on Rural Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rural properties are more susceptible to coverage gaps than suburban homes because the
        exposures are more diverse and the policies are more fragmented. These are the gaps that
        produce the most painful surprises:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Outbuildings on a standard HO-3:</strong> The 10% Coverage B limit is catastrophically
          inadequate for properties with barns, stables, or equipment buildings.
        </li>
        <li>
          <strong>Unscheduled equipment:</strong> Farm equipment purchased mid-year and not added to the
          inland marine schedule is uninsured.
        </li>
        <li>
          <strong>Well and septic sublimits:</strong> Many policies cap well and septic coverage at
          $5,000&ndash;$10,000 when replacement costs are $30,000&ndash;$100,000.
        </li>
        <li>
          <strong>Fencing sublimits:</strong> A nominal fencing sublimit against hundreds of thousands
          in actual fencing value.
        </li>
        <li>
          <strong>Flood exclusion:</strong> Rural properties in valley and river locations are flood-prone,
          but flood coverage requires a separate{' '}
          <Link href="/claim-types/flood" className="text-[#2E74B5] underline">
            NFIP or private flood policy
          </Link>.
        </li>
        <li>
          <strong>Earthquake exclusion:</strong> California seismic risk extends to rural areas, and
          earthquake damage to wells, septic systems, and foundations requires separate earthquake coverage.
        </li>
        <li>
          <strong>No business income coverage:</strong> A farm policy without income coverage means the
          operation absorbs all lost revenue during restoration, which can be more devastating than the
          property loss itself.
        </li>
        <li>
          <strong>Pollution exclusion:</strong> Contamination from fuel storage, pesticide sheds, or
          chemical storage may be excluded under the pollution exclusion even when the contamination
          was caused by a covered peril like fire.
        </li>
      </ul>

      {/* ───────── SECTION: FEDERAL PROGRAMS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Federal Disaster Programs for Agricultural Losses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When insurance coverage falls short, federal disaster programs can partially fill the gap.
        These are not substitutes for insurance &mdash; they are cost-share programs that reimburse
        a percentage of losses, often with caps. But for uninsured or underinsured losses, they can
        provide meaningful recovery.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Livestock Indemnity Program (LIP):</strong> Provides payments for livestock deaths
          caused by eligible adverse weather events and attacks by federally reintroduced animals.
          Payments are based on 75% of the average fair market value.
        </li>
        <li>
          <strong>Emergency Livestock Assistance Program (ELAP):</strong> Covers livestock losses not
          covered by LIP, including losses from disease, water shortages, and certain wildfire-related
          grazing losses.
        </li>
        <li>
          <strong>Emergency Conservation Program (ECP):</strong> Provides cost-share assistance for
          farmland rehabilitation after natural disasters &mdash; including fencing, debris removal,
          water system restoration, and soil stabilization.
        </li>
        <li>
          <strong>Tree Assistance Program (TAP):</strong> Provides cost-share for replanting orchards
          and vineyards destroyed by natural disasters.
        </li>
        <li>
          <strong>Noninsured Crop Disaster Assistance Program (NAP):</strong> Provides crop loss
          assistance for crops that are not covered by federal crop insurance.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These programs have their own application deadlines, documentation requirements, and
        eligibility criteria. After a declared disaster, contact your local USDA Farm Service
        Agency (FSA) office immediately. Application windows can be as short as 30 days after
        the disaster declaration.
      </p>

      {/* ───────── SECTION: PA ROLE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When to Bring In a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Agricultural claims are among the most complex claims that exist in property insurance. The
        combination of multiple policies, specialized property types, unique valuation methods, and
        overlapping federal programs creates a situation where expertise matters more than effort. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed Public Adjuster
        </Link>{' '}
        who understands agricultural operations can coordinate claims across multiple insurers,
        ensure that every covered item is documented and submitted under the correct policy, and
        prevent the gaps and overlaps that result in unrecovered losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is especially important in catastrophic wildfire losses where the policyholder is
        displaced, emotionally overwhelmed, and dealing with immediate operational decisions
        (relocating livestock, securing equipment, managing employees) while simultaneously trying
        to manage four or five separate insurance claims. The complexity is not a reason to delay
        filing &mdash; it is a reason to get help early.
      </p>

      <LeadCaptureForm
        claimType="commercial"
        heading="Rural or Agricultural Property Claim? We Can Help."
        description="We handle complex rural property claims across California — farms, ranches, vineyards, and agricultural operations. Free consultation, no obligation."
      />

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies, federal crop insurance programs, and USDA disaster programs have specific terms,
        conditions, and deadlines that vary by policy and program year. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
