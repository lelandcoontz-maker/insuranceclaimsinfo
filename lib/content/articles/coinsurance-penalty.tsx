import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Coinsurance Penalties: When Being Underinsured Costs You Extra',
  description:
    'What coinsurance is, how the penalty works, and why it usually doesn\'t apply to total losses — even though some adjusters apply it anyway.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coinsurance is a provision in some insurance policies &mdash; particularly commercial
        policies &mdash; that penalizes you if your coverage limits are too low relative to
        the value of your property. If a coinsurance penalty applies, you won&apos;t receive
        full payment even for a covered loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How the Coinsurance Penalty Works</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical coinsurance clause requires you to insure your property for at least 80% of
        its replacement cost. If you don&apos;t, the penalty kicks in proportionally. The formula
        is: (Amount of Insurance Carried &divide; Amount Required) &times; Loss = Payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if your building is worth $1,000,000, the 80% coinsurance requirement is
        $800,000. If you only carry $600,000 in coverage and have a $200,000 loss, you&apos;d
        receive: ($600,000 &divide; $800,000) &times; $200,000 = $150,000 &mdash; a $50,000
        penalty for being underinsured.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Total Losses and Coinsurance</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&apos;s something important that even some adjusters get wrong: if the property is a
        true total loss, there is no coinsurance penalty. It&apos;s simply how the math works.
        If the loss equals or exceeds the coverage limit, the formula always produces the
        full policy limit &mdash; the penalty disappears.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        I&apos;ve seen carriers order real estate appraisals on total-loss commercial properties
        specifically to check for coinsurance penalties. This is a waste of time and money &mdash;
        if it&apos;s truly a total loss, the math makes the penalty irrelevant.
      </p>

      <CalloutBox variant="tip" title="Check Your Coverage Limits">
        <p>
          If you own commercial property, review your coverage limits annually to make sure they
          keep pace with rising construction costs. Being 10% underinsured might not seem like
          a big deal until a partial loss triggers a coinsurance penalty that costs you tens of
          thousands of dollars.
        </p>
      </CalloutBox>

    </>
  )
}
