import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Choosing Your Own Contractor vs. the Insurance Company\'s',
  description:
    'You have the right to choose your own contractor in most states. Here\'s why it matters, what to look for, and how to handle the carrier\'s pushback.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important rights you have as a policyholder is the right to choose
        your own contractor. Insurance companies will often try to steer you toward their
        preferred vendor or managed repair program. Understanding why they do this &mdash; and
        why your own choice usually serves you better &mdash; is critical.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Why Carriers Push Their Contractors</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Volume discounts</strong> &mdash; carrier contractors often buy materials
          through special accounts at reduced prices
        </li>
        <li>
          <strong>Lower labor rates</strong> &mdash; these contractors accept lower rates in
          exchange for steady volume from the carrier
        </li>
        <li>
          <strong>Scope control</strong> &mdash; the carrier controls what work gets done and
          what doesn&apos;t
        </li>
        <li>
          <strong>Faster closures</strong> &mdash; preferred vendors are incentivized to close
          claims quickly
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What to Look for in Your Contractor</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Valid state contractor&apos;s license for the type of work needed</li>
        <li>Workers&apos; compensation and liability insurance</li>
        <li>References from recent similar projects</li>
        <li>A detailed written estimate and contract</li>
        <li>Willingness to work with the insurance claim process</li>
        <li>Experience with insurance restoration work</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When the Carrier Pushes Back</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company says your contractor&apos;s estimate is too high, they owe
        you a specific explanation of which line items they disagree with and why. A blanket
        &quot;your estimate is too high&quot; is not an adequate response. Demand a line-by-line
        comparison of their estimate against your contractor&apos;s, and dispute each item
        individually.
      </p>

      <CalloutBox variant="tip" title="Your Contractor Works for You">
        <p>
          The fundamental difference: your contractor&apos;s loyalty is to you. The carrier&apos;s
          contractor&apos;s loyalty is to the company that sends them work. When there&apos;s a
          question about whether something needs to be replaced or can be patched, guess which
          direction each contractor leans. Choose someone whose incentives align with yours.
        </p>
      </CalloutBox>

    </>
  )
}
