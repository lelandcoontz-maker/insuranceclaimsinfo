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
        Damage on the Opposite (Back) Side of the Impact
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a vehicle strikes a building, the energy does not stop at the impact wall. Force
        transfers through framing, floor diaphragms, and roof structure into rooms and elevations
        on the <strong>opposite side of the house</strong>. It is common to find cracked drywall,
        separated trim, misaligned doors and windows, popped nails, and hairline foundation
        cracks on the <em>back</em> of a structure that was struck from the front — damage the
        adjuster never inspected because they only looked at the obvious impact zone. Walk the
        entire perimeter and the full interior. Document everything that is out of plumb, out of
        square, or newly separated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Electrical and System Triggers After Vehicle Impact
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vehicle impacts can cause sudden mechanical jolts that damage systems inside the building
        — even systems far from the impact point. Common hidden issues include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Electrical arc-fault and short-circuit damage.</strong> The jolt can shift
          wiring behind drywall and cause arcing or hidden short circuits. Check for tripped
          breakers, intermittent outlets, or burn marks.
        </li>
        <li>
          <strong>GFCI/AFCI device trips.</strong> Breakers or outlets that trip repeatedly after
          the event may signal a damaged circuit behind the wall.
        </li>
        <li>
          <strong>HVAC and appliance triggers.</strong> Connected appliances, furnaces, and
          compressors can suffer internal damage from the impact-induced power surge or mechanical
          shock. Do not assume equipment is fine because it turns on.
        </li>
        <li>
          <strong>Plumbing leaks.</strong> Rigid plumbing lines can develop pinhole leaks at
          joints after an impact — sometimes not apparent for days or weeks.
        </li>
        <li>
          <strong>Fire-sprinkler systems.</strong> Impact can misalign piping or damage heads,
          creating slow leaks or future-failure risk.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Law &amp; Ordinance Coverage on Vehicle-Impact Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a repair requires opening framing, disturbing electrical, or modifying structural
        components, the building department may require that the affected portions be brought up
        to current code. This triggers your{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Law and Ordinance (L&amp;O) coverage
        </Link>
        . Vehicle-impact claims routinely implicate code upgrades — to electrical, framing
        connections (hardware, hurricane straps, shear panels), insulation, fire-rating, and
        egress requirements. Do not let the carrier estimate the job as if no code upgrades apply.
        If a permit and inspection are involved, L&amp;O is usually on the table.
      </p>

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
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help ensure the full extent of structural damage is identified and included in
        your claim.
      </p>
    </>
  )
}
