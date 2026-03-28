import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Vehicle Impact Damage: When a Car Hits Your Building',
  description:
    'Understand the often-hidden structural damage when a vehicle strikes a building, why a structural engineer is essential, and how your homeowner insurance handles vehicle impact claims.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        More Damage Than Meets the Eye
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a vehicle strikes a building, the visible damage — a hole in the wall, broken siding,
        cracked stucco — is almost always just a fraction of the actual damage. The force of a
        vehicle impact transfers energy through the structure in ways that are not immediately
        apparent. What looks like damage to one wall may actually involve shifted framing,
        compromised foundation elements, cracked interior walls on the opposite side of the
        building, and misaligned doors and windows throughout the structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters frequently underestimate vehicle impact damage because they assess
        what they can see from the surface. But the real cost of properly repairing a vehicle
        impact often far exceeds the visible damage. Framing members may be cracked, split, or
        displaced behind intact drywall. The foundation may have shifted or cracked. Roof trusses
        may have been stressed. Plumbing and electrical lines running through affected walls may
        be damaged.
      </p>

      <CalloutBox variant="important" title="Get a Structural Engineer Involved Early">
        <p>
          Do not rely solely on the insurance company&apos;s adjuster to assess the extent of
          structural damage from a vehicle impact. Hire an independent structural engineer to
          evaluate the building as soon as possible. A structural engineer can identify hidden
          damage to framing, foundation, and load-bearing elements that a general insurance
          adjuster may not be qualified to assess. The engineer&apos;s report becomes a critical
          piece of evidence supporting the true scope of your claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hidden Framing and Foundation Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Framing damage is one of the most commonly overlooked issues in vehicle impact claims.
        Wall studs, headers, sill plates, and rim joists can all be damaged without any visible
        indication on the exterior or interior surface. The only way to properly assess framing
        damage is to open up the walls — remove drywall or interior finishes to expose the
        structural members. If the insurance company wants to repair only the surface damage
        without investigating the framing behind it, they are not conducting a proper assessment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Foundation shifting is another critical concern. Even a seemingly moderate impact can
        cause a section of foundation to crack or shift, especially in older construction or
        where the impact occurs near a corner. Signs of foundation movement include new cracks
        in interior walls, doors or windows that suddenly do not open or close properly, and
        visible separation between walls and floors or ceilings.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Insurance and Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your homeowners insurance policy covers damage to your building from a vehicle impact —
        it is a covered peril under virtually all standard policies. You can and should file a
        claim under your own policy to get the repairs started. Your insurance company may then
        pursue the driver&apos;s auto liability insurance through subrogation to recover what
        they paid on your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You may also have a direct claim against the driver&apos;s auto liability policy for
        damage to your property. Obtaining a police report is essential — it documents the
        incident and identifies the driver and their insurance information. If the driver was
        uninsured or fled the scene, your homeowners policy still covers the building damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a vehicle impact, call the police to file a report and document the scene. Take
        photos and video of all visible damage from multiple angles, including the vehicle&apos;s
        position if it is still present. Get the driver&apos;s insurance information and contact
        details. Do not allow any repairs until both your insurance company and a structural
        engineer have assessed the damage. If the damage is significant, a licensed{' '}
        <Link href="/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help ensure the full extent of structural damage is identified and included in
        your claim.
      </p>
    </>
  )
}
