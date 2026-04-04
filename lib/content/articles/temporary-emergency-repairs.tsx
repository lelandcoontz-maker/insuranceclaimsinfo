import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Emergency Repairs: Your Duty to Protect Your Property',
  description:
    'Your policy requires you to prevent further damage after a loss. Learn what emergency repairs are covered, how to document them, and what mistakes to avoid.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a loss, your policy requires you to take reasonable steps to protect your property
        from further damage. This is your &quot;duty to mitigate.&quot; The good news: your
        policy also pays for these emergency repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What&apos;s Covered</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Board-up and tarping after fire, wind, or break-in</li>
        <li>Water extraction and emergency drying after a water loss</li>
        <li>Emergency plumbing to stop active leaks</li>
        <li>Tree removal if a fallen tree is causing ongoing damage</li>
        <li>Temporary fencing for security</li>
        <li>Emergency electrical work to prevent fire hazards</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Critical Rules</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document before you mitigate.</strong> Take photos and video of the damage
          before any cleanup or temporary repairs begin.
        </li>
        <li>
          <strong>Keep all receipts.</strong> Every dollar you spend on emergency repairs
          should be documented and submitted to the carrier.
        </li>
        <li>
          <strong>Don&apos;t make permanent repairs</strong> until the adjuster has inspected.
          Emergency repairs protect the property; permanent repairs wait for the claim process.
        </li>
        <li>
          <strong>Don&apos;t throw away damaged materials</strong> until the adjuster has seen
          them or you have thorough documentation.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Don't Wait for the Adjuster">
        <p>
          You do not need to wait for the insurance company&apos;s adjuster before making
          emergency repairs. In fact, waiting could be used against you &mdash; if additional
          damage occurs because you didn&apos;t act, the carrier may deny coverage for that
          additional damage. Act promptly, document thoroughly, and submit your receipts.
        </p>
      </CalloutBox>

    </>
  )
}
