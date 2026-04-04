import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Hail Damage Insurance Claims',
  description:
    'How to handle a hail damage claim — from documenting the damage to fighting for matching and full replacement when the carrier wants to patch.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage is one of the most common property insurance claims in the United States,
        particularly for roofing. A single hailstorm can damage thousands of properties in a
        region, and insurance companies handle these claims with an assembly-line efficiency
        that often shortchanges individual homeowners.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting Hail Damage</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage to roofing can be subtle. It may not cause an obvious leak immediately,
        but it compromises the shingle&apos;s integrity and dramatically shortens its useful
        life. Documentation is critical:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Get a professional roof inspection from a qualified roofer &mdash; not just a visual from the ground</li>
        <li>Document damage to soft metals (gutters, vents, flashing) which confirm hail impact</li>
        <li>Check all exterior surfaces: siding, window screens, AC units, fences</li>
        <li>Photograph damage to vehicles or outdoor furniture as corroborating evidence</li>
        <li>Note the date of the storm and check weather records for hail size reports</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Matching Fight</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the biggest disputes in hail claims is{' '}
        <Link href="/resources/matching" className="text-blue-700 underline hover:text-blue-900">
          matching
        </Link>. If hail damages one slope of your roof, the carrier may only want to replace
        that slope. But the new shingles won&apos;t match the weathered existing shingles on
        the other slopes. You end up with a two-tone roof.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the loss, you had a uniform roof. After the loss, you deserve a uniform roof.
        Many states and fair claims regulations support the requirement to achieve a
        &quot;reasonably uniform appearance&quot; after repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Don&apos;t Forget Other Structures</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail doesn&apos;t just hit roofs. Check and document damage to{' '}
        <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
          other structures
        </Link>: fences, sheds, detached garages, outdoor lighting, garden features,
        and landscaping. These are covered under Coverage B.
      </p>

      <CalloutBox variant="tip" title="Beware the Quick Settlement">
        <p>
          After major hailstorms, some carriers deploy adjusters en masse with instructions
          to close claims quickly. A fast inspection and a quick check may seem helpful, but
          it often means damage is missed. Don&apos;t sign a &quot;full and final&quot;
          settlement until you&apos;ve had the damage independently assessed.
        </p>
      </CalloutBox>

    </>
  )
}
