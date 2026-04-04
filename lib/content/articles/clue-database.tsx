import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The CLUE Database: How Your Claims History Follows You',
  description:
    'What the CLUE database is, how insurance companies use it against you, and what to do if it contains errors about your claims history.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every time you file an insurance claim, it gets reported to a database called CLUE &mdash;
        the Comprehensive Loss Underwriting Exchange, operated by LexisNexis. This database
        follows you and your property, and it affects your ability to get insurance and what
        you pay for it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What CLUE Contains</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CLUE reports include up to seven years of claims history associated with you personally
        and with any property you&apos;ve insured. This includes claims you filed, claims filed
        against your property by previous owners, and even inquiries that didn&apos;t result in
        a claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Carriers Use CLUE Against You</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies use CLUE during underwriting to decide whether to offer you a policy
        and at what price. A history of claims &mdash; even legitimate ones &mdash; can result in
        higher premiums, policy non-renewal, or outright denial of coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There have been documented cases of carriers reporting inaccurate information to CLUE.
        In one lawsuit, Farmers Insurance was accused of reporting litigation expenses, settlement
        costs, and other carrier expenses as payments made to the policyholder &mdash; making it
        appear that the homeowner received millions when they actually received a fraction of that
        amount. This inflated CLUE report made it nearly impossible for those policyholders to
        obtain new insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Check Your CLUE Report</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to request a free copy of your CLUE report once per year from
        LexisNexis. Review it carefully for errors. If you find inaccurate information, you
        can dispute it directly with LexisNexis, similar to disputing errors on a credit report.
      </p>

      <CalloutBox variant="tip" title="Before You File a Small Claim">
        <p>
          Think carefully before filing small claims. A $1,500 claim might cost you far more
          in increased premiums and CLUE history than the payout is worth. This doesn&apos;t
          mean you shouldn&apos;t file legitimate claims &mdash; but be aware that every claim
          leaves a record that follows you for seven years.
        </p>
      </CalloutBox>

    </>
  )
}
