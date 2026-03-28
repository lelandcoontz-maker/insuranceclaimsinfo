import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Business Interruption Claims: What You Need to Know',
  description:
    'Business interruption insurance covers lost income when a covered event disrupts your operations. Learn how a Public Adjuster can help you navigate this complex claim type.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Business Interruption Insurance?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business interruption insurance &mdash; also called business income coverage &mdash; compensates
        a business for lost income when operations are disrupted by a covered first-party loss. This
        includes events like fire, vandalism, theft, and certain natural disasters that physically
        damage your business property and force you to suspend or reduce operations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage is typically included as part of a commercial property or business owner&apos;s
        policy (BOP). It is designed to put your business in the same financial position it would have
        been in had the loss never occurred &mdash; covering lost net income plus continuing fixed
        expenses during the period of restoration.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Industry Formula Is Not What Your CPA Would Calculate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most critical points about business interruption claims: the calculation of
        lost business income uses a <strong>unique insurance industry formula</strong> that is fundamentally
        different from standard accounting methods. Your CPA or bookkeeper may calculate your lost
        income one way, but the insurance policy defines &ldquo;business income&rdquo; using specific
        terminology and assumptions rooted in insurance case law and policy language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under most commercial policies, &ldquo;business income&rdquo; means net income (or loss) that
        would have been earned, <strong>plus</strong> continuing normal operating expenses, including
        payroll. This is not the same as profit. The formula accounts for what revenues the business
        would have generated, subtracts only the expenses that do not continue (such as cost of goods
        sold), and includes fixed overhead that keeps accruing even while the business is shut down.
      </p>

      <CalloutBox variant="important" title="Do Not Rely on Your CPA for This Calculation">
        <p>
          Many business owners make the mistake of having their CPA prepare the business interruption
          claim. While CPAs are essential for accounting and taxes, business interruption calculations
          follow insurance-specific rules and assumptions that most accountants are not trained in.
          Submitting a CPA-prepared figure that differs from the policy&apos;s formula can result in
          delays, underpayment, or denial. A licensed Public Adjuster who specializes in commercial
          claims understands this formula and can prepare a compliant, maximized claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Period of Restoration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business interruption coverage applies during the &ldquo;period of restoration&rdquo; &mdash;
        the time it takes to repair or replace the damaged property and resume normal operations. This
        period begins when the physical damage occurs (or after any applicable waiting period) and ends
        when the property should be restored with reasonable speed. Insurers often try to shorten this
        period, arguing the business should have reopened sooner, which directly reduces the payout.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extra Expense Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policies also include extra expense coverage, which pays for costs above your normal
        operating expenses that are necessary to continue operations or minimize the suspension of
        business. This can include renting temporary space, expediting repairs, or outsourcing
        production. Properly documenting and claiming these expenses is essential &mdash; they are
        frequently overlooked or undervalued.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Disputes in Business Interruption Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Length of the restoration period:</strong> Insurers may argue the business could
          have reopened faster than it actually did.
        </li>
        <li>
          <strong>Revenue projections:</strong> Disputes over what the business &ldquo;would have
          earned&rdquo; during the shutdown, especially for seasonal or growing businesses.
        </li>
        <li>
          <strong>Continuing vs. non-continuing expenses:</strong> Disagreements about which
          operating costs should be included in the calculation.
        </li>
        <li>
          <strong>Coinsurance penalties:</strong> If the declared business income limit is too low
          relative to actual annual revenue, the insurer may impose a coinsurance penalty that
          reduces the payout.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Public Adjuster Helps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Public Adjuster works exclusively for the policyholder &mdash; not the insurance
        company. For business interruption claims, a Public Adjuster will prepare the claim using the
        correct insurance industry formula, document all continuing expenses and extra expenses,
        establish the proper period of restoration, and negotiate directly with the insurer to
        maximize your recovery. Because these claims involve complex financial calculations and
        policy-specific language, professional representation can make a significant difference in
        the final settlement.
      </p>

      <LeadCaptureForm
        claimType="business-interruption"
        heading="Get Help With Your Business Interruption Claim"
        description="Tell us about your business loss and we'll review your situation. Free consultation, no obligation."
      />
    </>
  )
}
