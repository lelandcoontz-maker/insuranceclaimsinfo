import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Water Damage Insurance Claims: A Complete Guide',
  description:
    'How to handle water damage insurance claims — from emergency response to final settlement. Covers sudden vs. gradual leaks, slab leaks, and common carrier disputes.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage is the most common type of homeowner&apos;s insurance claim &mdash; and one
        of the most frequently disputed. Whether it&apos;s a burst pipe, a failed water heater,
        a slab leak, or an appliance malfunction, the key question is always the same: is this
        a sudden and accidental loss, or a gradual leak?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That distinction determines whether your claim gets paid or denied. And insurance
        companies have become very aggressive about characterizing losses as &quot;gradual&quot;
        to avoid payment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What&apos;s Covered</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner&apos;s policies cover water damage that is &quot;sudden and accidental.&quot;
        This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Burst or frozen pipes</li>
        <li>Water heater failures</li>
        <li>Appliance malfunctions (dishwasher, washing machine, refrigerator)</li>
        <li>Sudden plumbing failures</li>
        <li>Accidental overflow from a sink or bathtub</li>
        <li>Toilet overflow or supply line failure</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What&apos;s Typically Excluded</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Flood damage (requires separate flood insurance)</li>
        <li>Gradual leaks and seepage</li>
        <li>Maintenance-related failures</li>
        <li>Sewer backup (unless you have a sewer backup endorsement)</li>
        <li>Water intrusion through the foundation (in many policies)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The &quot;Sudden vs. Gradual&quot; Battle</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&apos;s where most water damage disputes begin. A pipe fails in your wall. The
        insurance company sends an adjuster who looks at the damage and says, &quot;This has
        been leaking for a long time &mdash; this is a gradual leak, not a covered loss.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reality is more nuanced. A pipe can corrode gradually but fail suddenly. The
        corrosion is the condition, but the failure &mdash; the moment the pipe actually
        starts leaking water into your home &mdash; is the event. Many adjusters confuse
        the condition of the pipe with the onset of the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts in many states have held that if the policyholder didn&apos;t know about the
        leak and the resulting damage was not reasonably discoverable, the loss can still be
        considered &quot;sudden&quot; from the policyholder&apos;s perspective.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Slab Leaks</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Slab leaks deserve special attention because they&apos;re extremely common in certain
        regions and are frequently disputed. A slab leak occurs when a pipe running under or
        through the concrete slab foundation develops a leak.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies cover the resulting damage &mdash; the water damage to flooring, cabinets,
        walls, etc. &mdash; but may not cover the cost of accessing the pipe itself (jackhammering
        the slab). However, some policies do cover &quot;tearing out and replacing&quot; parts of
        the building necessary to access the source of the leak. Read your policy carefully on
        this point, and if in doubt, consult a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insured may be entitled to at least the cost of direct repair to the slab &mdash; leak
        detection, opening the slab, excavation, back-filling, and pouring new concrete &mdash; even
        if they chose the more expensive option of rerouting the plumbing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Immediate Steps After Water Damage</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Stop the source</strong> &mdash; shut off the water supply if possible.
        </li>
        <li>
          <strong>Document everything</strong> &mdash; take photos and video of the damage
          before any cleanup or mitigation.
        </li>
        <li>
          <strong>Call your insurance company</strong> &mdash; report the loss promptly.
        </li>
        <li>
          <strong>Start mitigation</strong> &mdash; call a water damage mitigation company
          to begin extraction and drying. Do not wait for the adjuster. Your policy requires
          you to prevent further damage.
        </li>
        <li>
          <strong>Keep the failed component</strong> &mdash; if a pipe, hose, or fitting
          failed, save it. The insurance company may want to inspect it.
        </li>
        <li>
          <strong>Do not make permanent repairs</strong> until the insurance company has
          inspected and documented the damage.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Carrier Tactics on Water Claims</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Calling it &quot;gradual&quot;</strong> &mdash; even when the damage appeared suddenly to the homeowner
        </li>
        <li>
          <strong>Limiting the scope</strong> &mdash; only covering the immediately visible room
          when water migrated to adjacent areas
        </li>
        <li>
          <strong>Refusing to pay for mold testing</strong> &mdash; when water sat for any period before mitigation
        </li>
        <li>
          <strong>Excluding the source repair</strong> &mdash; paying for the water damage but
          not the plumbing repair, even when the policy covers &quot;tear out and replace&quot;
        </li>
        <li>
          <strong>Using their own mitigation company</strong> &mdash; who may dry the area
          but write a limited damage report favorable to the carrier
        </li>
      </ul>

      <CalloutBox variant="tip" title="Don't Let Them Rush You">
        <p>
          Insurance companies sometimes pressure homeowners to sign off on mitigation work
          as the full extent of the damage before hidden damage is properly assessed.
          Water travels behind walls, under floors, and into adjacent rooms. A thorough
          moisture survey with proper equipment is essential before anyone signs off on
          the scope of damage.
        </p>
      </CalloutBox>

    </>
  )
}
