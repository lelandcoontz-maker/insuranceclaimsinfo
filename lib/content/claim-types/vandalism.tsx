import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Vandalism Claims: Break-Ins, Graffiti, and Grow Operations',
  description:
    'Understand how insurance covers vandalism damage including break-ins, graffiti, and marijuana grow operation damage, and what you need to document to protect your claim.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Vandalism Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vandalism claims cover intentional damage to your property by another person. While most
        people think of broken windows or spray-painted walls, vandalism claims can involve far
        more extensive damage than homeowners initially realize. Common types of vandalism include
        break-in damage, graffiti, and one of the most destructive forms — damage from illegal
        marijuana grow operations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Break-In Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When someone breaks into your property, the damage is not limited to the point of entry.
        Forced doors, broken locks, smashed windows, and damaged frames are just the beginning.
        Intruders may damage walls, cabinets, and other areas while searching for valuables. The
        key is to document every piece of damage, no matter how minor it seems. File a police
        report immediately — your insurance company will require it, and the report creates an
        official record of the event.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Marijuana Grow Operation Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Illegal marijuana grow operations cause some of the most extensive vandalism damage a
        property can sustain. This type of damage is particularly common in rental properties
        where tenants set up growing operations without the landlord&apos;s knowledge. The damage
        from a grow operation is far-reaching and often includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Moisture damage:</strong> Extensive water damage from irrigation systems, high
          humidity levels, and condensation that saturates drywall, subfloors, and framing
        </li>
        <li>
          <strong>Electrical modifications:</strong> Unauthorized wiring to support high-wattage grow
          lights and ventilation — creating fire hazards and requiring a complete electrical system
          inspection and repair
        </li>
        <li>
          <strong>Chemical contamination:</strong> Pesticides, fertilizers, and other chemicals used
          in growing that contaminate surfaces and building materials
        </li>
        <li>
          <strong>Structural alterations:</strong> Holes cut in walls and floors for ventilation,
          modified plumbing, and removed or rerouted ductwork
        </li>
        <li>
          <strong>Mold:</strong> The high-humidity environment required for growing almost always
          results in significant mold growth throughout the property
        </li>
      </ul>

      <CalloutBox variant="important" title="Do Not Clean Up Before Documenting">
        <p>
          With any type of vandalism, resist the urge to clean up or begin repairs before
          thoroughly documenting all damage. Take extensive photos and video of every affected
          area. The insurance company needs to see the damage in its original state. Once you
          clean up, you lose critical evidence that supports your claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Graffiti Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Graffiti claims involve more than just the cost of paint. Depending on the surface
        affected, proper restoration may require specialized cleaning products, surface
        preparation, and matching of existing finishes. On stucco, brick, or textured surfaces,
        simple painting over graffiti often results in a visible difference between the repaired
        area and the surrounding surface. When a proper match cannot be achieved by spot-treating
        the affected area, you may be entitled to have the entire wall or surface refinished so
        the repair is not noticeable. Insurance companies may push for the cheapest solution, but
        your policy entitles you to restoration to pre-loss condition — which means the repair
        should not be visually obvious.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Your Vandalism Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A police report is typically required for any vandalism claim. File one as soon as you
        discover the damage. Document everything with photos and video before touching anything.
        Make a detailed list of all damage, including items that may seem minor. If the vandalism
        is extensive — particularly with grow operation damage — consider working with a
        licensed{' '}
        <Link href="/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        who can ensure the full scope of damage is properly documented and claimed.
      </p>
    </>
  )
}
