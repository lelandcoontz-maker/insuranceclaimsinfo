import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'NIST Camp Fire Investigation: What Government Scientists Found',
  description:
    'NIST’s investigation of the 2018 Camp Fire — which destroyed over 19,000 structures — reveals how wildfire damages buildings and why insurers underestimate repair costs.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        On November 8, 2018, the Camp Fire swept through Paradise, California and became the
        deadliest and most destructive wildfire in the state&apos;s history. It killed 86 people,
        destroyed more than <strong>19,000 structures</strong>, and burned nearly 19,000 acres in
        a matter of hours. The National Institute of Standards and Technology (NIST) deployed a
        team of scientists to investigate how the fire spread, how it damaged buildings, and what
        it revealed about wildfire behavior that the insurance industry has been slow to accept.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Their findings, published as NIST Technical Note 2105, are directly relevant to anyone
        filing a wildfire insurance claim &mdash; including claims from the 2025 Palisades Fire
        and other recent California wildfires. The research proves that wildfire damages structures
        through mechanisms most insurance adjusters do not account for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Wildfire Actually Damages Buildings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most people &mdash; and most insurance adjusters &mdash; think of wildfire damage as
        simple: the fire reaches your house, your house burns. If the fire did not reach your
        house, your house is fine. The NIST investigation proved this understanding is wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        NIST documented <strong>three distinct pathways</strong> through which wildfire damages
        structures:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Direct flame contact</strong> &mdash; the fire itself reaches the structure.
          This is the damage pathway everyone recognizes.
        </li>
        <li>
          <strong>Radiant heat</strong> &mdash; intense heat radiating from nearby burning
          vegetation or structures can ignite materials, warp siding, crack windows, and
          degrade building components without flames ever touching the building.
        </li>
        <li>
          <strong>Ember transport</strong> &mdash; burning embers carried by wind can travel{' '}
          <strong>over a mile</strong> from the fire front, landing on roofs, in gutters, on
          decks, and near vents. These embers ignite structures far from the visible fire line.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Of these three, ember transport is the most overlooked in insurance claims &mdash; and
        the hardest for adjusters to assess. When a home ignites from embers, there may be no
        burned vegetation adjacent to the structure. An adjuster who looks for signs of direct
        flame contact and finds none may wrongly conclude the fire did not affect the property.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Damage You Cannot See
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important findings from the NIST investigation is that{' '}
        <strong>structures that appear visually intact can still be severely damaged</strong> by
        wildfire exposure. Smoke and heat cause degradation that is not visible from the outside:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insulation degradation</strong> &mdash; heat exposure breaks down insulation
          materials, reducing their effectiveness even when they appear unchanged.
        </li>
        <li>
          <strong>Electrical wiring damage</strong> &mdash; heat can damage wire insulation
          inside walls, creating fire hazards that are invisible without opening the walls.
        </li>
        <li>
          <strong>HVAC contamination</strong> &mdash; smoke and particulate matter drawn into
          heating and cooling systems contaminate ductwork and components throughout the
          building.
        </li>
        <li>
          <strong>Structural material weakening</strong> &mdash; prolonged heat exposure can
          compromise the strength of metal fasteners, adhesives, and other components without
          visible signs of damage.
        </li>
      </ul>

      <CalloutBox variant="important" title="Hidden Wildfire Damage Is Real">
        <p>
          NIST documented that wildfire smoke, heat, and ember exposure damage structures that
          appear visually intact from the outside. If your insurer says your home{' '}
          <strong>&ldquo;wasn&apos;t affected by the fire&rdquo;</strong> based on a visual
          inspection, they are ignoring what government scientists have proven: insulation
          degradation, wiring damage, and HVAC contamination can all occur without visible
          exterior damage. A proper assessment requires invasive inspection &mdash; not a
          drive-by.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Embers Travel Farther Than Insurers Admit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The NIST team documented ember transport distances that challenge the assumptions
        insurance companies routinely make about wildfire exposure. Burning embers were carried
        by wind <strong>well over a mile</strong> from the fire front, landing on and igniting
        structures that were far from the advancing flames.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This finding is critical for claims where the insurer argues &ldquo;the fire didn&apos;t
        reach your property.&rdquo; The NIST research proves that embers &mdash; which are
        essentially small pieces of burning material lofted by wind &mdash; can ignite a home
        from enormous distances. Your home does not need to be in the fire&apos;s direct path
        to sustain fire damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if embers did not ignite your home, they may have landed on it. Embers that land
        on a roof, deck, or near a vent and smolder can cause localized damage &mdash; charring,
        melting, or heat damage &mdash; that an adjuster may dismiss as &ldquo;cosmetic&rdquo;
        or unrelated to the fire.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for California Wildfire Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Camp Fire investigation findings apply directly to recent California wildfire claims,
        including the 2025 Palisades Fire. Here is what homeowners should know:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;The fire didn&apos;t reach your property.&rdquo;</strong> NIST proved
          that embers and radiant heat cause damage at significant distances from the fire
          front. The fire does not need to physically reach your home to cause covered damage.
        </li>
        <li>
          <strong>&ldquo;Your home looks fine from the outside.&rdquo;</strong> The research
          documents invisible damage to insulation, wiring, and HVAC systems in structures
          that appear intact. A visual inspection is not sufficient.
        </li>
        <li>
          <strong>&ldquo;We only see cosmetic smoke damage.&rdquo;</strong> Smoke exposure
          causes material degradation, not just discoloration. HVAC contamination alone can
          require complete system replacement.
        </li>
        <li>
          <strong>&ldquo;There&apos;s no evidence of fire damage to your structure.&rdquo;</strong>{' '}
          If the adjuster did not conduct invasive testing &mdash; opening walls, testing
          insulation, inspecting wiring, sampling ductwork &mdash; they did not look for the
          damage NIST documented.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do with This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your wildfire claim has been denied or underpaid, the NIST Camp Fire investigation
        provides peer-reviewed, government-funded evidence that wildfire damages structures
        through mechanisms that routine insurance inspections do not assess. You can cite this
        research in your dispute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Specifically, ask your insurer these questions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Did your adjuster assess ember exposure damage, or only direct flame contact?
        </li>
        <li>
          Was invasive inspection conducted to check for insulation degradation and wiring
          damage?
        </li>
        <li>
          Was the HVAC system tested for smoke and particulate contamination?
        </li>
        <li>
          What scientific basis did your adjuster use to determine the fire &ldquo;did not
          affect&rdquo; the property?
        </li>
      </ul>

      <CalloutBox variant="tip" title="Request a Copy of the Full Report">
        <p>
          NIST Technical Note 2105 is a government publication and is freely available to the
          public at{' '}
          <strong>nist.gov</strong>. Having a copy on hand when disputing a wildfire claim
          strengthens your position &mdash; you are citing the same agency that sets building
          and fire safety standards for the entire country.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        About This Research
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The findings discussed in this article are based on:{' '}
        <strong>
          &ldquo;Camp Fire Preliminary Reconnaissance&rdquo;
        </strong>{' '}
        (NIST Technical Note 2105, 2020) by Alexander Maranghides, William Mell, Steven Hawks,
        Eric D. Link, Christopher U. Brown, William R. Murrill, and Erin Ashley of the National
        Institute of Standards and Technology.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        NIST is a non-regulatory federal agency within the U.S. Department of Commerce. Its
        fire research division has been investigating wildfire behavior and building performance
        for decades. The Camp Fire investigation was part of a broader NIST program to understand
        how wildfires affect communities &mdash; research that has direct implications for
        insurance claims handling nationwide.
      </p>
    </>
  )
}
