import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Insurance Claim Deadlines and Timeframes',
  description:
    'Every deadline your California insurance company must meet — from acknowledging your claim to paying it. Know the rules so you can hold them accountable.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has among the most detailed claim handling regulations in the nation. The
        Fair Claims Settlement Practices Regulations (Title 10, California Code of Regulations,
        Section 2695) establish specific deadlines that insurance companies must follow. Knowing
        these deadlines gives you the power to hold your carrier accountable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Key Deadlines</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>15 days</strong> &mdash; The carrier must acknowledge receipt of your claim
          and begin investigation
        </li>
        <li>
          <strong>40 days</strong> &mdash; After receiving a proof of claim, the carrier must
          accept or deny the claim (or inform you of the need for additional time and the
          reasons why)
        </li>
        <li>
          <strong>30 days</strong> &mdash; After reaching agreement on the amount, the carrier
          must issue payment
        </li>
        <li>
          <strong>30 days</strong> &mdash; The carrier must provide written status updates at
          least every 30 days while the claim is open
        </li>
        <li>
          <strong>15 days</strong> &mdash; The carrier must respond to communications from the
          insured that reasonably suggest a response is expected
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Statute of Limitations</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is unusual in several ways when it comes to the statute of limitations on
        insurance claims. The standard policy requires suit to be filed within one year of the
        loss. However, in California the statute of limitations is tolled (paused) during the
        period the insurance company is investigating. This means the clock is paused while
        the carrier is actively handling your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier is required to inform an insured who is not represented by an attorney of
        their applicable statute of limitations. This is an additional protection unique to
        California that many adjusters forget about. For more on this topic, see our guide on{' '}
        <Link href="/resources/equitable-tolling" className="text-blue-700 underline hover:text-blue-900">
          equitable tolling
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Happens When They Miss Deadlines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Violating the Fair Claims Settlement Practices Regulations can result in:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Department of Insurance complaints and potential fines</li>
        <li>Evidence of bad faith if litigation follows</li>
        <li>Potential penalty damages in a bad faith lawsuit</li>
      </ul>

      <CalloutBox variant="tip" title="Track Every Deadline">
        <p>
          Start a spreadsheet or log from day one. Record when you filed the claim, when the
          carrier acknowledged it, when proof of claim was submitted, and when every
          communication occurred. If a deadline passes without action, send a written reminder
          citing the specific regulation. This paper trail is invaluable if the claim goes to
          litigation.
        </p>
      </CalloutBox>

    </>
  )
}
