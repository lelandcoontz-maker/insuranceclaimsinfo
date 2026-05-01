import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Wind Damage Insurance Claims',
  description:
    'How wind damage claims work, what\'s covered, disputes over wind vs. wear-and-tear, and how to document and fight for your full settlement.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wind damage claims present unique challenges because wind damage can be difficult to
        distinguish from wear and tear, and insurance companies take advantage of that ambiguity. A roof
        that loses shingles in a storm may have been perfectly functional before the event, but
        the carrier may argue the shingles were old, worn, and &quot;ready to go.&quot;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Wind Damage Looks Like</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Missing or lifted shingles and tiles</li>
        <li>Damaged or detached ridge caps</li>
        <li>Torn or displaced flashing</li>
        <li>Broken or cracked siding</li>
        <li>Damaged soffit and fascia</li>
        <li>Fallen trees and branches impacting structures</li>
        <li>Blown-off gutters and downspouts</li>
        <li>Broken windows from wind-driven debris</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Wind vs. Wear and Tear</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common dispute in wind damage claims is whether the damage was caused by wind
        (covered) or pre-existing wear and tear (excluded). Carriers frequently use the age of
        the roof to argue that any damage is wear-related, even when a documented windstorm
        clearly caused the failure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key is causation: did the wind cause the damage? If a 15-year-old roof was
        functioning perfectly before the storm and is now missing shingles, the wind caused
        the damage. The age of the roof is relevant to depreciation, not to causation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting Wind Damage</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Photograph all visible damage immediately after the storm</li>
        <li>Check weather records for official wind speed reports in your area</li>
        <li>Note damage to neighboring properties as corroborating evidence</li>
        <li>Get a professional inspection from a licensed roofing contractor</li>
        <li>Document any interior water damage that resulted from the wind damage</li>
        <li>Check Coverage B structures: fences, sheds, detached garages</li>
      </ol>

      <CalloutBox variant="tip" title="The Concurrent Causation Issue">
        <p>
          Some carriers argue that wind damage combined with pre-existing wear creates a
          &quot;concurrent causation&quot; situation and use anti-concurrent causation clauses
          to limit or deny the claim. This is an area of active litigation in many states.
          If your carrier raises this argument, consult with a public adjuster or attorney
          who understands the case law in your state.
        </p>
      </CalloutBox>

    </>
  )
}
