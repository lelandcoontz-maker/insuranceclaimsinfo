import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Force-Placed Insurance: What It Is and Why It\'s a Problem',
  description:
    'What happens when your mortgage lender force-places insurance on your property — what it covers, what it doesn\'t, and how to avoid it.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your homeowner insurance lapses — whether because your policy was non-renewed, cancelled,
        or you missed a payment — your mortgage lender will &ldquo;force-place&rdquo; insurance on
        your property. This is also called lender-placed insurance (LPI). Force-placed insurance
        protects the <em>lender&apos;s</em> financial interest. It does almost nothing for you.
        Understanding this distinction is critical, especially in California&apos;s current market
        where non-renewals are rampant.
      </p>

      <CalloutBox variant="warning" title="Force-Placed Insurance Is Not Real Coverage">
        <p>
          Force-placed policies typically do <strong>not</strong> cover your personal belongings,
          loss of use (temporary housing), liability, or the full replacement cost of your home.
          They exist to protect the lender&apos;s collateral — not you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Force-Placement Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your mortgage agreement requires you to maintain continuous homeowner insurance. The lender
        monitors your insurance status through a tracking service. When coverage lapses, the process
        typically follows these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Notification.</strong> The lender sends you one or more notices informing you
          that your coverage has lapsed and that they will place insurance on your behalf if you
          don&apos;t provide proof of coverage within a specified timeframe (usually 30–45 days).
        </li>
        <li>
          <strong>Placement.</strong> If you don&apos;t respond, the lender purchases a force-placed
          policy from their preferred insurer. The lender typically has an existing relationship
          (and sometimes a financial arrangement) with this insurer.
        </li>
        <li>
          <strong>Billing.</strong> The premium is added to your mortgage payment or escrow account.
          Force-placed premiums are dramatically higher than standard market premiums — often 3 to
          10 times more expensive — for a fraction of the coverage.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Force-Placed Insurance Covers
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The dwelling structure</strong> — but only up to the outstanding mortgage balance,
          not the full replacement cost. If your home is worth $800,000 to rebuild but your
          mortgage balance is $300,000, the force-placed policy may only cover $300,000.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Force-Placed Insurance Does NOT Cover
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Personal property (contents)</strong> — your furniture, clothing, electronics</li>
        <li><strong>Additional living expenses (ALE)</strong> — temporary housing costs</li>
        <li><strong>Personal liability</strong> — injury or property damage to others</li>
        <li><strong>Other structures</strong> — detached garages, fences, sheds</li>
        <li><strong>Ordinance or law coverage</strong> — code upgrade costs</li>
        <li><strong>Debris removal</strong> — beyond minimal amounts</li>
        <li><strong>The gap between mortgage balance and rebuild cost</strong></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why It&apos;s So Expensive
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Force-placed insurance premiums are dramatically inflated for several reasons:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer is covering a property with no prior inspection, no underwriting, and no
          information about the property&apos;s condition — the risk premium is high.
        </li>
        <li>
          Lenders often receive commissions, kickbacks, or &ldquo;expense reimbursements&rdquo; from
          the force-placed insurer. This creates a financial incentive for the lender that doesn&apos;t
          align with the borrower&apos;s interest.
        </li>
        <li>
          The borrower has no competitive market pressure — they don&apos;t choose the insurer or
          negotiate the premium.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Avoid Force-Placed Insurance
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Don&apos;t let coverage lapse.</strong> If you receive a non-renewal notice,
          start shopping for replacement coverage immediately. Apply for the{' '}
          <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">California FAIR Plan</Link>{' '}
          well before your current policy expires.
        </li>
        <li>
          <strong>Respond to lender notices immediately.</strong> If you receive a notice from your
          lender about a coverage lapse, don&apos;t ignore it. Provide proof of your new or
          continuing coverage as soon as possible.
        </li>
        <li>
          <strong>Check your escrow statements.</strong> If you notice an unexplained increase in
          your mortgage payment, it may be a force-placed premium. Investigate immediately.
        </li>
        <li>
          <strong>Provide evidence of coverage retroactively.</strong> If you obtain replacement
          coverage after a brief lapse, provide proof to the lender. They are required to cancel
          the force-placed policy and refund any overlapping premiums within 15 days of receiving
          proof of your own coverage.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        If a Loss Occurs While Force-Placed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the worst-case scenario. If your home is damaged or destroyed while only force-placed
        insurance is in effect:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The force-placed insurer will pay the <em>lender</em> — not you — up to the mortgage
          balance.
        </li>
        <li>
          You have no coverage for personal property, no ALE for temporary housing, no liability
          coverage, and potentially no coverage for the rebuild cost above your mortgage balance.
        </li>
        <li>
          You still owe the mortgage, plus the inflated force-placed premium, regardless of the
          loss.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Federal and State Protections">
        <p>
          Under the Homeowner Flood Insurance Affordability Act and the Dodd-Frank Wall Street Reform
          Act, lenders must follow specific procedures before force-placing insurance, including
          providing adequate notice. California Insurance Code § 790.06 also provides additional
          consumer protections. If your lender force-placed without proper notice, consult an attorney
          — the placement may be improper.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help Getting Proper Coverage?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If you&apos;ve been non-renewed and are at risk of force-placed insurance, or if you&apos;ve
          suffered a loss while force-placed, contact us for guidance.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Consultation →
        </Link>
      </div>
    </>
  )
}
