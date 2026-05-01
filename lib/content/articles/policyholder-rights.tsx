import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Know Your Rights as a Policyholder',
  description:
    'Your insurance company has obligations to you under the policy, state law, and regulations. Here are the rights most policyholders don\'t know they have.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        As an insurance policyholder, you have far more rights than most people realize. Your
        insurance policy is a contract, and the insurance company has specific obligations under
        that contract, under state regulations, and under common law. When they fail to meet
        those obligations, you have remedies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Choose Your Own Contractor</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most states, you have the right to hire your own contractor to perform repairs. The
        insurance company cannot force you to use their preferred vendor, and they cannot reduce
        your payment simply because you chose a different contractor. They owe you the reasonable
        cost of repair, regardless of who performs it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to a Timely Response</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every state has regulations requiring insurance companies to handle claims within specific
        timeframes. In California, the carrier must acknowledge, investigate, and accept or deny
        within prescribed periods. If they miss these deadlines, they may be in violation of
        state regulations &mdash; and you can{' '}
        <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
          file a complaint with the Department of Insurance
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to a Written Explanation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company denies any part of your claim, they must provide a written
        explanation. This is not optional &mdash; it is required by regulation. The denial
        must cite the specific policy provision, statute, or other basis for the denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Dispute the Amount</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s estimate is not the final word. You have the right to submit
        your own estimate, contractor bids, or other documentation to support a higher amount.
        If you cannot agree on the amount, most policies include an{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal clause
        </Link>{' '}
        that provides a mechanism to resolve the dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Representation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to hire a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        or attorney to represent you in your claim. The insurance company cannot retaliate
        against you for hiring a representative, and they must communicate with your
        representative once you have authorized them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Sue for Bad Faith</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company handles your claim in bad faith &mdash; unreasonably delaying,
        denying without basis, lowballing, or otherwise failing to act in good faith &mdash; you
        may have a cause of action for{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>. In some states, bad faith damages can include emotional distress
        and even punitive damages.
      </p>

      <CalloutBox variant="tip" title="Knowledge Is Power">
        <p>
          Insurance companies count on the fact that most policyholders do not know their
          rights. When you demonstrate knowledge of your rights &mdash; by citing regulations,
          requesting written denials, and holding the carrier to deadlines &mdash; the dynamic
          changes. Claims move faster and settlements increase when the carrier knows they are
          dealing with an informed policyholder.
        </p>
      </CalloutBox>

    </>
  )
}
