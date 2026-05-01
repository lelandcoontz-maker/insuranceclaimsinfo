import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Fire & Wildfire Losses: Navigating Your Insurance Claim',
  description:
    'Understand the differences between structure fires and wildfires, how urban wildfire smoke creates unique toxic contamination, and how to protect your insurance claim after a fire loss.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Structure Fires vs. Wildfires
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire claims are among the most devastating losses a homeowner can experience, and the
        insurance claims process varies significantly depending on the type of fire. A structure fire
        — caused by electrical failure, cooking accidents, or other internal ignition sources —
        typically affects a single property. Wildfires, on the other hand, can destroy entire
        neighborhoods and create a catastrophic claims environment where insurance companies are
        processing thousands of claims simultaneously.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a structure fire, the insurance company will send an adjuster relatively quickly to
        inspect the damage. In a wildfire, you may wait weeks before an adjuster visits your
        property because the insurer is overwhelmed with the volume of claims. This delay alone
        can complicate your claim and make thorough documentation even more critical.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Total Loss vs. Partial Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A total loss means your home has been destroyed to the point where it cannot be repaired
        and must be rebuilt. A partial loss means the structure is still standing but has sustained
        significant damage from fire, heat, smoke, or water used during firefighting. Partial
        losses can actually be more complex from a claims perspective because there are more areas
        for disagreement — what needs to be replaced versus repaired, the extent of smoke damage
        to undamaged areas, and whether hidden damage exists behind walls and in attic spaces.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Urban Wildfire Smoke: A Different Kind of Toxic
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regular wildfire smoke from burning trees and vegetation is harmful enough — it produces
        significant particulate matter, soot, and ash that can infiltrate homes and cause
        respiratory issues. However, when a wildfire burns through a developed area — an urban
        wildfire — the smoke becomes far more dangerous. Urban wildfire smoke contains everything
        from regular wildfire smoke <strong>plus</strong> toxic contaminants released from burning
        man-made materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When homes, vehicles, electronics, appliances, and building materials burn, they release a
        cocktail of hazardous substances including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Silica</strong> — from burning concrete, glass, and ceramic materials
        </li>
        <li>
          <strong>Arsenic</strong> — from treated wood, pesticides, and certain building materials
        </li>
        <li>
          <strong>Mercury</strong> — from thermostats, fluorescent lighting, and electronics
        </li>
        <li>
          <strong>Cadmium</strong> — from batteries, paints, and plastics
        </li>
        <li>
          <strong>Lithium</strong> — from lithium-ion batteries in vehicles, electronics, and power tools
        </li>
        <li>
          <strong>Dioxins</strong> — produced when PVC (polyvinyl chloride) melts and burns, which is
          present in pipes, siding, window frames, and flooring throughout most homes. Dioxins are
          among the most toxic substances known and are classified as cancer-causing compounds.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Urban Wildfire Contamination Requires Specialized Testing">
        <p>
          If your home was in the path of an urban wildfire — even if it did not burn — the smoke
          and ash exposure may have left toxic contaminants on surfaces and in your HVAC system.
          Standard cleaning is not sufficient. You need specialized environmental testing to
          determine whether hazardous substances are present before anyone should occupy the
          property. Do not let your insurance company tell you that ordinary cleaning will resolve
          contamination from urban wildfire smoke. See our{' '}
          <Link href="/types-of-claims/smoke" className="underline hover:text-amber-950">
            smoke damage article
          </Link>{' '}
          for more on contamination testing and remediation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&apos;s Duty to Investigate Fire Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, your insurance company has an <strong>affirmative duty to conduct a
        thorough, fair, and objective investigation</strong> of your fire claim. This is not a
        courtesy — it is a legal obligation. California Insurance Code &sect; 790.03(h)(3)
        specifically prohibits &ldquo;failing to adopt and implement reasonable standards for the
        prompt investigation and processing of claims,&rdquo; and the Fair Claims Settlement
        Practices Regulations (10 CCR &sect; 2695) impose detailed investigation requirements.
        California courts (including <em>Egan v. Mutual of Omaha</em> and <em>Jordan v.
        Allstate</em>) have held that an insurer&apos;s duty of good faith requires it to
        investigate as thoroughly for <em>reasons to pay</em> a claim as for reasons to deny it.
        A one-sided investigation designed to build a denial file is itself evidence of bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practical terms, a proper fire-claim investigation may include origin-and-cause
        analysis, scene documentation, witness interviews, review of fire-department reports,
        examination of utility records, and — where relevant — analysis of smoke and heat damage
        beyond the visible burn area. If the carrier skips steps, relies on a cursory walk-through,
        or commits to a theory before the investigation is complete, those shortcuts can form the
        backbone of a bad-faith claim. See our{' '}
        <Link href="/resources/duty-to-investigate" className="text-blue-700 underline hover:text-blue-900">
          duty-to-investigate guide
        </Link>{' '}
        for the full legal framework. This is general information, not legal advice.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Third-Party Adjusters Must Follow California Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major fire, insurance companies frequently retain <strong>independent
        adjusters</strong> (third-party adjusters hired by the carrier, often from out of state)
        to handle the surge in claims. An independent adjuster&apos;s obligations to the
        policyholder are <strong>the same</strong> as the carrier&apos;s own staff adjuster. The
        California Fair Claims Settlement Practices Regulations (10 CCR &sect; 2695.1(a)) expressly
        apply to &ldquo;every licensee&rdquo; involved in handling a claim. The adjuster&apos;s
        status as an independent contractor does not shrink the carrier&apos;s legal duties and
        does not give the adjuster license to cut corners on timelines, disclosures, or
        investigation standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an out-of-state independent adjuster tells you that California deadlines, O&amp;P rules,
        matching requirements, or disclosure obligations do not apply to them, that is wrong —
        and the carrier is responsible for their conduct. Document the statement in writing, cite
        the regulation, and escalate to the carrier&apos;s claim manager (and, if necessary, to
        CDI). See our{' '}
        <Link href="/resources/adjuster-types" className="text-blue-700 underline hover:text-blue-900">
          types of adjusters guide
        </Link>{' '}
        for the distinctions between staff, independent, and Public Adjusters.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documentation Priorities After a Fire
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a fire, documentation is your most important task. Take extensive photos and video
        of all damage before any cleanup or demolition occurs. If possible, create a complete
        inventory of damaged and destroyed personal property — this will be critical for your
        Coverage C (contents) claim. Save any receipts, purchase records, or photos that show
        items you owned before the fire. The more documentation you have, the stronger your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding Your Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard homeowners policy provides coverage for fire losses under four main categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A — Dwelling:</strong> Covers the cost to repair or rebuild your home&apos;s
          structure, including attached structures like a garage.
        </li>
        <li>
          <strong>Coverage B — Other Structures:</strong> Covers detached structures on your property
          such as fences, sheds, detached garages, and retaining walls.
        </li>
        <li>
          <strong>Coverage C — Contents (Personal Property):</strong> Covers your belongings —
          furniture, clothing, electronics, appliances, and everything else inside the home. Replacement
          cost vs. actual cash value matters enormously here.
        </li>
        <li>
          <strong>Coverage D — Loss of Use:</strong> Covers additional living expenses while your home
          is uninhabitable, including temporary housing, meals, and other costs above your normal
          living expenses.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these coverages has its own limits and its own set of potential disputes. Insurance
        companies routinely undervalue fire claims by underestimating rebuild costs, applying
        excessive depreciation to contents, and limiting loss-of-use payments prematurely. A
        licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help ensure every part of your coverage is properly utilized after a fire loss.
      </p>
    </>
  )
}
