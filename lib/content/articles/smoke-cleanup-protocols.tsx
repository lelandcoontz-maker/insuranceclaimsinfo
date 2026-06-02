import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Smoke Cleanup Protocols: What Your Insurance Company Should Be Paying For',
  description:
    'A technical guide to smoke damage remediation methods, deodorization protocols, and the insurance disputes that arise when carriers underpay cleanup costs.',
  summary:
    'Proper smoke remediation follows recognized cleaning and deodorization protocols matched to the contamination, not a quick wipe-down. Carriers underpay by skipping steps; knowing the correct protocols helps you claim the full cost of cleanup.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s practical
          guidance on smoke remediation protocols as a Licensed California Public Adjuster. It
          is not legal advice and is not a substitute for the opinion of a qualified
          IICRC-certified restoration professional or a Certified Industrial Hygienist on the
          specific protocols needed for a specific loss. For legal questions about a specific
          smoke claim, consult a licensed attorney who specializes in insurance coverage
          disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke remediation is not a single task &mdash; it is a multi-phase process that varies
        dramatically depending on the type of fire, the materials that burned, the surfaces
        affected, and the extent of smoke infiltration into structural cavities and mechanical
        systems. Insurance carriers routinely underpay smoke cleanup by treating it as a simple
        wipe-down when the actual scope requires multiple cleaning passes, specialized
        deodorization, sealing, and post-remediation verification testing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what proper smoke remediation looks like, what your insurer should
        be paying for, and where the most common disputes arise. If your home has suffered smoke
        damage, this information will help you evaluate whether the cleanup your carrier is
        authorizing is actually sufficient &mdash; or whether you are being set up for a home
        that still smells, still has residual contamination, and still poses health risks after
        the &ldquo;cleanup&rdquo; is complete.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Smoke Residue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all smoke is the same. The type of material that burned determines the chemical
        composition of the residue, its adhesion characteristics, its health hazard profile,
        and the cleaning methods required to remove it. An insurer that treats all smoke damage
        identically is already cutting corners.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Protein residue (kitchen fires):</strong> Nearly invisible but produces
          an extremely strong odor. Discolors paint yellow over time. Bonds chemically to
          surfaces, making it particularly difficult to deodorize.
        </li>
        <li>
          <strong>Synthetic residue (plastics, modern materials):</strong> Sticky, smeary,
          and extremely difficult to remove. Smears when wiped with standard methods and
          requires specialized solvents. Burning plastics release toxic compounds including
          hydrogen cyanide and dioxins.
        </li>
        <li>
          <strong>Natural substance residue (wood fires):</strong> Dry, powdery residue that
          is the easiest to clean. Responds well to HEPA vacuuming and chemical sponge
          treatment &mdash; but still infiltrates cavities and HVAC systems.
        </li>
        <li>
          <strong>Fuel oil/petroleum residue:</strong> Dense, black, oily smoke that coats
          every surface with a thick greasy film. Requires aggressive solvent cleaning,
          multiple passes, and is the most expensive to remediate properly.
        </li>
        <li>
          <strong>Wildfire smoke:</strong> A complex mixture of all the above. Urban wildfires
          burn wood, plastics, vehicles, electronics, chemicals, and building materials
          containing asbestos or lead. The resulting smoke contains ash, fine particulate,
          VOCs, heavy metals, and hazardous materials. Requires environmental testing before
          cleanup begins. See our{' '}
          <Link href="/resources/wildfire-guide" className="text-blue-700 underline hover:text-blue-900">
            wildfire claims guide
          </Link>{' '}
          and{' '}
          <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
            smoke damage claims article
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="important" title="Identify the Residue Type Before Cleanup Begins">
        <p>
          The cleaning method must match the residue type. A remediation company that shows up
          and starts wiping surfaces without first identifying what type of smoke residue is
          present is guessing. Ask your remediation contractor to document the residue type and
          explain why their chosen cleaning method is appropriate for that specific residue. If
          the carrier&rsquo;s preferred vendor cannot answer this question, that tells you
          something about the quality of work you are about to receive.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Surface-by-Surface Cleanup Methods
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proper smoke remediation addresses each surface type with the appropriate method.
        A single cleaning approach does not work across all materials &mdash; and this is
        where carriers most often underpay, by authorizing a single general cleaning when
        the{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss
        </Link>{' '}
        requires multiple specialized treatments.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hard Non-Porous Surfaces
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hard surfaces &mdash; countertops, tile, glass, metal, sealed wood &mdash; are the
        most straightforward to clean, but the process still requires specific steps in order:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>HEPA vacuum.</strong> Remove loose particulate before any wet cleaning to
          prevent smearing soot into the surface.
        </li>
        <li>
          <strong>Dry chemical sponge.</strong> A vulcanized rubber sponge (sometimes called
          a &ldquo;chem sponge&rdquo;) is used dry to lift soot residue without smearing.
          This is particularly important for walls and ceilings before wet cleaning.
        </li>
        <li>
          <strong>Wet cleaning with appropriate solvent.</strong> The solvent must match the
          residue type &mdash; alkaline cleaners for protein residue, solvent-based cleaners
          for synthetic or petroleum residue. Using the wrong cleaner can set the residue
          permanently.
        </li>
        <li>
          <strong>Rinse and dry.</strong> Cleaning solution residue must be removed to prevent
          new staining or surface damage.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Soft Porous Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Upholstered furniture, mattresses, clothing, drapes, carpet padding, and similar
        porous materials absorb smoke deeply into their fibers. In many cases, these items
        cannot be effectively cleaned and are a total loss. This is one of the most common
        areas of dispute in smoke claims &mdash; carriers want to pay for cleaning when
        replacement is the only realistic option. See our guide on{' '}
        <Link href="/resources/contents-cleaning-total-loss" className="text-blue-700 underline hover:text-blue-900">
          contents cleaning vs. total loss
        </Link>{' '}
        for detailed criteria.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Clothing:</strong> May be cleanable if the smoke exposure was light and the
          residue is dry/powdery. Synthetic smoke or heavy soot exposure typically renders
          clothing unsalvageable. Professional ozone or hydroxyl treatment in a sealed chamber
          is sometimes attempted.
        </li>
        <li>
          <strong>Upholstered furniture and mattresses:</strong> Smoke penetrates deep into
          foam, batting, and fabric. Professional cleaning can address surface contamination
          but rarely eliminates odor from interior materials. These are frequently total losses.
        </li>
        <li>
          <strong>Carpet and padding:</strong> Carpet can sometimes be cleaned; padding almost
          never can. If padding is replaced, the carpet must be re-stretched, which adds cost
          the carrier should be paying for.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HVAC Systems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contaminated HVAC system will re-contaminate a cleaned home every time it runs.
        This is not optional work &mdash; it is essential. Proper HVAC remediation includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Complete ductwork cleaning, including supply and return lines</li>
        <li>Filter replacement (all filters, not just the main return filter)</li>
        <li>Evaporator coil cleaning &mdash; soot on the coil reduces efficiency and releases
          odor every time the system operates</li>
        <li>Blower motor and housing cleaning</li>
        <li>In severe cases, complete system replacement when soot has infiltrated the heat
          exchanger or other components that cannot be adequately cleaned</li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Run the HVAC Before Cleaning">
        <p>
          Running a smoke-contaminated HVAC system spreads soot and odor throughout the entire
          structure, including areas that may not have been originally affected. If your home
          has smoke damage, do not operate the HVAC system until it has been professionally
          cleaned and inspected. If the carrier&rsquo;s adjuster ran the system during their
          inspection, document that &mdash; they may have worsened the contamination.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Electronics
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke particles are acidic and corrosive. When they settle on circuit boards, connectors,
        and internal components, they cause accelerated corrosion that shortens the lifespan of
        electronic equipment &mdash; even if the device appears to function normally immediately
        after the fire. Computers, televisions, appliances with electronic controls, and other
        electronics exposed to smoke may function initially but fail prematurely. Many electronics
        manufacturers void warranties for smoke-exposed equipment. The cost to properly clean
        electronics often exceeds the cost of replacement, making many items a functional total
        loss. See our{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          contents claims guide
        </Link>{' '}
        for more on documenting electronics losses.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Structural Cavities
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the area carriers most often ignore entirely. Smoke infiltrates wall cavities
        through electrical outlets, plumbing penetrations, and any other opening. It rises
        into attic spaces and settles into crawl spaces. Contamination inside cavities
        off-gases into the living space indefinitely, even after visible surfaces are cleaned.
        Addressing it may require opening walls, removing insulation, and cleaning framing
        members &mdash; expensive, disruptive, and absolutely necessary when testing confirms
        contamination. Carriers often refuse, arguing surface cleaning is sufficient. It is
        not. See our{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss article
        </Link>{' '}
        for more on documenting the full scope.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Deodorization Methods
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cleaning removes visible residue. Deodorization addresses the odor molecules that
        remain after cleaning &mdash; embedded in surfaces, trapped in cavities, and absorbed
        into porous materials. These are separate line items in a remediation scope, and
        carriers often try to skip or minimize deodorization.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Thermal fogging:</strong> A heated solvent dispersed as dense fog that
          penetrates the same paths smoke took &mdash; cavities, ductwork, fabric fibers.
          Effective for moderate odor, may need repeating. Space must be unoccupied.
        </li>
        <li>
          <strong>Ozone treatment:</strong> Ozone (O&#8323;) oxidizes odor molecules at the
          molecular level. Highly effective but a health hazard at treatment concentrations
          &mdash; the space must be completely unoccupied, sealed, and ventilated before
          re-entry. Multiple treatments may be needed.
        </li>
        <li>
          <strong>Hydroxyl generators:</strong> UV light produces hydroxyl radicals that
          oxidize odor molecules similarly to ozone, but without the health risk. Can be
          used in occupied spaces. Works more slowly than ozone, requiring longer treatment.
        </li>
        <li>
          <strong>Encapsulation/sealing:</strong> After cleaning and deodorization, surfaces
          must be sealed with shellac-based or oil-based primer (Zinsser B-I-N, Kilz Original)
          before repainting. The sealer traps residual odor molecules. This is not optional
          &mdash; standard latex paint does not block smoke odor. This is one of the most
          common disputes in smoke claims, discussed below.
        </li>
      </ul>

      <CalloutBox variant="tip" title="When to Use Each Deodorization Method">
        <p>
          <strong>Light smoke odor, occupied home:</strong> Hydroxyl generators.
          <br />
          <strong>Moderate smoke odor, unoccupied home:</strong> Thermal fogging, possibly
          followed by hydroxyl treatment.
          <br />
          <strong>Heavy smoke odor, unoccupied home:</strong> Ozone treatment (one or more
          cycles), followed by sealing all structural surfaces.
          <br />
          <strong>Persistent odor after cleaning:</strong> The cleaning was insufficient.
          Re-clean, then deodorize again. Do not keep layering deodorization over inadequately
          cleaned surfaces.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Verification and Testing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Remediation without verification is guesswork. A remediation contractor who declares
        the work &ldquo;complete&rdquo; based on visual inspection and a sniff test has not
        verified anything. Proper post-remediation verification includes objective testing
        that confirms contamination has been reduced to acceptable levels. For a deeper
        discussion of testing methods, see our{' '}
        <Link href="/resources/environmental-sampling-methods" className="text-blue-700 underline hover:text-blue-900">
          environmental sampling methods article
        </Link>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Post-remediation verification (PRV) should be conducted by an independent party &mdash;
        not the same company that performed the cleanup. A company certifying its own work is
        a basic conflict of interest. A qualified industrial hygienist should conduct PRV
        using objective testing methods including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Air quality testing:</strong> Evaluate particulate matter, VOC concentrations,
          and contaminants identified during initial assessment. Compare results to baseline
          (pre-loss or outdoor ambient levels) &mdash; not arbitrary &ldquo;acceptable&rdquo;
          thresholds chosen by the carrier&rsquo;s consultant.
        </li>
        <li>
          <strong>Wipe sampling for soot and char:</strong> Quantify residual contamination
          on cleaned surfaces in micrograms per square centimeter. Sample multiple locations
          including hard-to-reach areas (inside cabinets, top of door frames) and compare
          to control samples from unaffected areas.
        </li>
        <li>
          <strong>Clearance testing:</strong> A formal pass/fail assessment required for heavy
          contamination, wildfire exposure, or occupants with health sensitivities. The
          clearance protocol should be defined before remediation begins &mdash; not after
          &mdash; so everyone knows what &ldquo;done&rdquo; looks like.
        </li>
      </ul>

      <CalloutBox variant="important" title="Insist on Independent Verification">
        <p>
          If the carrier&rsquo;s preferred vendor performs the remediation and the same
          carrier&rsquo;s preferred consultant performs the clearance testing, you have two
          parties with the same economic incentive &mdash; to declare the work complete as
          quickly and cheaply as possible. Under California regulations, you have the right
          to choose your own contractor (see our{' '}
          <Link href="/resources/right-to-repair" className="text-blue-700 underline hover:text-blue-900">
            right to repair article
          </Link>
          ), and you should insist on independent post-remediation verification.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Insurance Claim Disputes in Smoke Cleanup
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke cleanup is one of the most chronically underpaid categories in property
        insurance claims. The following disputes come up repeatedly, and understanding
        them in advance helps you recognize when your claim is being shorted.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        One Cleaning vs. Multiple Passes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely authorize a single cleaning pass when the ANSI/IICRC S700 Standard
        for Professional Restoration of Fire and Smoke Damaged Structures and Contents
        contemplates iterative cleaning based on residue type and surface response. The first
        pass removes the bulk of surface contamination. The second and third passes address
        residual contamination that was driven deeper into surfaces by the first cleaning, or
        that was simply missed. Many smoke-affected homes require three or more cleaning
        passes before surfaces test clean. When the carrier authorizes one pass and calls it
        done, the homeowner is left with a home that still has elevated contamination levels.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Clean and Seal&rdquo; vs. &ldquo;Clean and Paint&rdquo; Dispute
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common smoke claim disputes. After cleaning, structural
        surfaces need to be sealed with a shellac-based or oil-based primer before painting.
        The sealer is what blocks residual odor from bleeding through. Carriers often want
        to pay for cleaning and painting &mdash; skipping the sealer coat entirely. Standard
        latex paint does not block smoke odor. Within weeks or months, the smell returns as
        residual odor molecules migrate through the unsealed paint film. The sealer (B-I-N,
        Kilz Original, or equivalent) is a separate, necessary line item &mdash; not an
        optional upgrade.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contents Cleaning vs. Replacement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers prefer to pay for professional cleaning of personal property rather than
        replacement, because cleaning is almost always cheaper. But cleaning is only
        appropriate when it can actually restore the item to pre-loss condition. Items that
        cannot be cleaned effectively &mdash; mattresses deeply saturated with synthetic
        smoke residue, upholstered furniture with soot in the foam, children&rsquo;s
        stuffed animals exposed to wildfire contaminants &mdash; should be replaced. The
        standard is not &ldquo;can this item be made to look clean&rdquo; but rather
        &ldquo;can this item be restored to its pre-loss condition, including eliminating
        odor and any health hazard.&rdquo; When the cost to clean approaches 60&ndash;70%
        of the replacement cost, replacement is typically the more practical option. For
        a complete analysis, see our{' '}
        <Link href="/resources/contents-cleaning-total-loss" className="text-blue-700 underline hover:text-blue-900">
          contents cleaning vs. total loss guide
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Preferred Vendor Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers maintain networks of &ldquo;preferred vendors&rdquo; &mdash;
        remediation companies that receive referrals from the carrier in exchange for
        discounted rates and, frequently, a willingness to minimize scope. A preferred
        vendor who writes aggressive scopes does not remain a preferred vendor for long.
        The economic incentive is to do the minimum cleanup the carrier will approve, not
        the thorough remediation the home actually needs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, you have the right to choose your own remediation contractor.
        The carrier cannot require you to use their preferred vendor, though they may
        try to steer you toward one by implying it will &ldquo;speed up&rdquo; your claim
        or that using an outside contractor will create problems. Your{' '}
        <Link href="/resources/right-to-repair" className="text-blue-700 underline hover:text-blue-900">
          right to choose your own contractor
        </Link>{' '}
        is protected, and exercising it is one of the most effective ways to ensure your
        home is properly remediated.
      </p>

      <CalloutBox variant="warning" title="Watch for Scope Cuts on the Remediation Estimate">
        <p>
          Compare the remediation contractor&rsquo;s original scope to what the carrier
          actually authorizes. Carriers commonly cut line items for deodorization, sealing,
          HVAC cleaning, cavity treatment, and post-remediation testing &mdash; leaving a
          scope that addresses surface contamination only. If your contractor&rsquo;s scope
          has been cut, request a written explanation from the carrier for each deleted line
          item, and challenge any deletion that reduces the scope below what is necessary
          to return your home to pre-loss condition.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <Link
            href="/resources/smoke-damage-claims"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Smoke Damage Insurance Claims
          </Link>{' '}
          &mdash; Coverage law, testing requirements, and the Smoke Damage Recovery Act
        </li>
        <li>
          <Link
            href="/resources/wildfire-smoke-physical-loss"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Wildfire Smoke and &ldquo;Direct Physical Loss&rdquo;
          </Link>{' '}
          &mdash; The Another Planet / Gharibian / Bottega framework for smoke coverage
        </li>
        <li>
          <Link
            href="/resources/cdi-smoke-damage-coverage"
            className="text-blue-700 underline hover:text-blue-900"
          >
            CDI Bulletin 2025-7 and Your Rights
          </Link>{' '}
          &mdash; The regulatory anchor for smoke-damage claims handling
        </li>
        <li>
          <Link
            href="/resources/contents-cleaning-total-loss"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Contents Cleaning vs. Total Loss
          </Link>{' '}
          &mdash; When personal property can be restored vs. when it must be replaced
        </li>
        <li>
          <Link
            href="/resources/environmental-sampling-methods"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Environmental Sampling Methods
          </Link>{' '}
          &mdash; Wipe, microvacuum, tape lift, and air sampling protocols
        </li>
        <li>
          <Link
            href="/resources/wildfire-guide"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Wildfire Claims Guide
          </Link>{' '}
          &mdash; Comprehensive guide to wildfire property damage claims
        </li>
        <li>
          <Link
            href="/resources/scope-of-loss"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Scope of Loss
          </Link>{' '}
          &mdash; How to ensure every damaged item and area is documented
        </li>
        <li>
          <Link
            href="/resources/contents-claims"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Contents Claims Guide
          </Link>{' '}
          &mdash; Documenting and claiming personal property losses
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Smoke Cleanup Being Shortchanged?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your carrier is authorizing minimal cleanup for a home that still smells like
          smoke, a Public Adjuster can ensure the full remediation scope is documented,
          properly priced, and paid.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice or professional consulting guidance. Smoke remediation standards, deodorization
          methods, and testing protocols discussed here are presented for informational purposes
          to help policyholders understand what proper smoke cleanup entails in the context of
          insurance claims. Always engage qualified remediation professionals and independent
          environmental consultants for actual work on your property.
        </p>
        <p className="mt-2">
          Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
        </p>
      </CalloutBox>
    </>
  )
}
