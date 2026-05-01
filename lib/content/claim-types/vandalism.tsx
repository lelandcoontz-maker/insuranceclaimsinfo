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
      <p className="text-gray-700 leading-relaxed mb-4">
        Vandalism is a covered peril under standard homeowners and dwelling fire policies. It
        covers intentional and malicious damage to property by another person &mdash; from
        break-ins and graffiti to tenant destruction and illegal marijuana grow operations.
        Insurance companies frequently dispute these claims by relabeling the damage as
        &ldquo;wear and tear,&rdquo; making proper documentation essential from the start.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Types of Vandalism
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Break-in damage:</strong> Kicked-in doors, broken windows, damaged locks, and
          forced entry damage
        </li>
        <li>
          <strong>Graffiti:</strong> Spray paint and defacing of exterior or interior surfaces
        </li>
        <li>
          <strong>Malicious mischief:</strong> Smashed walls, ripped-out fixtures, destroyed
          landscaping, and other deliberate damage
        </li>
        <li>
          <strong>Marijuana grow operations:</strong> Moisture damage, electrical modifications,
          chemical contamination, structural alterations, and mold
        </li>
        <li>
          <strong>Tenant damage:</strong> Intentional destruction that goes beyond normal wear
          and tear
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Vacancy Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies exclude vandalism coverage when the dwelling has been vacant for 60 or more
        consecutive days. However, &ldquo;vacant&rdquo; and &ldquo;unoccupied&rdquo; are not the
        same thing under insurance definitions. A furnished property where no one is currently
        living is typically considered unoccupied &mdash; not vacant &mdash; and the exclusion
        should not apply. This distinction matters significantly for landlords and rental property
        owners.
      </p>

      <CalloutBox variant="important" title="Do Not Clean Up Before Documenting">
        <p>
          With any type of vandalism, resist the urge to clean up or begin repairs before
          thoroughly documenting all damage. Take extensive photos and video of every affected
          area. The insurance company needs to see the damage in its original state. Once you
          clean up, you lose critical evidence that supports your claim.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive guide covering the policy language, intent requirement, case law
        (including <em>Bowers v. Farmers</em>), burden of proof, and step-by-step documentation
        strategies, read our full article:{' '}
        <Link href="/resources/vandalism-claims" className="text-blue-700 underline hover:text-blue-900">
          Vandalism Claims: When Insurers Call It &ldquo;Wear and Tear&rdquo;
        </Link>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer is disputing a vandalism claim, a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help document the damage, challenge improper denials, and negotiate on your behalf.
      </p>
    </>
  )
}
