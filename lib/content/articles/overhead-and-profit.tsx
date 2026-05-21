import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Overhead & Profit: When Your Claim Should Include O&P',
  description:
    'Insurance companies routinely refuse to include overhead and profit in their estimates. Learn what O&P is, when you\'re entitled to it, and how to fight for it.',
  summary:
    'General contractor overhead and profit (O&P) is owed whenever repairs are complex enough to need a GC, typically three or more trades. Insurers routinely omit it; know when you are entitled to O&P and insist it be included.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and Profit &mdash; commonly called O&amp;P &mdash; is one of the most
        frequently disputed line items in property insurance claims. It refers to the general
        contractor&apos;s fee for managing a repair project: typically 10% overhead (business
        expenses) and 10% profit, for a combined 20% on top of the direct repair costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely refuse to include O&amp;P in their estimates, claiming
        the homeowner &quot;does not need a general contractor.&quot; This argument falls
        apart when you look at what the repairs actually require.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When Is O&amp;P Owed?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P is owed whenever the repair requires the coordination of multiple trades. If
        your claim involves plumbing, electrical, drywall, painting, and flooring &mdash; which
        most water damage claims do &mdash; someone has to manage those trades. That is what
        a general contractor does, and their overhead and profit are legitimate costs of repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s own estimating software, Xactimate, includes O&amp;P as
        a standard feature. When the carrier&apos;s adjuster removes it, they are making a
        judgment call that often contradicts how construction actually works.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The &quot;Three Trade&quot; Rule</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many in the industry reference a &quot;three trade rule&quot; &mdash; the idea that if
        a repair requires three or more trades (e.g., plumbing, drywall, paint), O&amp;P should
        be included. While this is not a formal regulation in most states, it is widely
        accepted as a reasonable standard. Even Xactimate&apos;s own documentation references
        the complexity of multi-trade coordination as justification for O&amp;P.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reality is that even repairs involving two trades often need a general contractor.
        Someone needs to schedule, coordinate, pull permits, ensure code compliance, and manage
        quality. A homeowner should not be expected to serve as their own GC.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Carrier Arguments Against O&amp;P</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&quot;The homeowner can coordinate the trades themselves.&quot;</strong> The
          policy pays for what it costs to repair the property, not for the homeowner to become
          a project manager. The insured is entitled to have the work done professionally.
        </li>
        <li>
          <strong>&quot;It is a simple repair.&quot;</strong> If the estimate has multiple
          trades, it is not simple. Even &quot;small&quot; water losses often involve demo,
          drying, plumbing, drywall, texture, paint, flooring, and baseboard.
        </li>
        <li>
          <strong>&quot;We&apos;ll add it if you provide a signed GC contract.&quot;</strong>
          You should not need to hire and sign with a contractor before the insurance company
          pays what the repair actually costs. The estimate should reflect the cost of repair
          regardless of whether the homeowner has already hired someone.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Fight for O&amp;P</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Get a written estimate from a licensed general contractor that includes O&amp;P
          &mdash; this demonstrates that real-world contractors charge it.
        </li>
        <li>
          Count the trades in the insurance company&apos;s own estimate. If they have three or
          more trades listed but no O&amp;P, point out the inconsistency.
        </li>
        <li>
          Cite your state&apos;s fair claims regulations. In California, the insurer must pay
          the reasonable cost of repair &mdash; and O&amp;P is a reasonable cost when a GC is needed.
        </li>
        <li>
          Put your demand in writing. Explain why O&amp;P is appropriate and ask the carrier
          to add it or provide a written explanation for why they believe it is not owed.
        </li>
        <li>
          If the carrier refuses, this becomes an amount dispute that can be resolved through{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>.
        </li>
      </ol>

      <CalloutBox variant="tip" title="The Dollar Impact">
        <p>
          On a $50,000 repair, O&amp;P adds $10,000 to the claim. On a $100,000 repair,
          it is $20,000. This is real money that insurance companies are stripping from
          claims every day. Do not accept an estimate that omits O&amp;P without a fight.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
    </>
  )
}
