import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How Your Insurance Payment Is Actually Calculated',
  description:
    'A step-by-step walkthrough of how insurance companies calculate claim payments — RCV, depreciation, ACV, deductible application, recoverable depreciation, and supplements. Includes worked examples and guidance on decoding your payment.',
  summary:
    'Your payment is built from replacement cost, minus depreciation to reach actual cash value, minus your deductible, with depreciation recoverable once you complete repairs. Knowing each step lets you decode your check and spot where money was held back.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          insurance policy provisions and California insurance law as a Licensed Public Adjuster.
          It is not legal advice. Every policy is different, and the specific payment calculation
          on your claim depends on your policy language, your coverage limits, and the facts of
          your loss. Consult your policy language and a licensed professional for advice about
          your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive a check from your insurance company, it is often unclear how the number
        was derived. Sometimes the carrier includes a detailed payment letter or an estimate
        explaining the calculation. Sometimes you get a check with little more than shorthand on
        the stub. This article walks through the math behind insurance claim payments so you can
        verify whether the carrier calculated yours correctly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Basic Formula
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a standard replacement cost homeowner policy, the claim payment follows a two-step
        process. The first payment is the <strong>actual cash value (ACV) payment</strong>, and
        the second &mdash; after repairs are completed &mdash; is the <strong>recoverable
        depreciation payment</strong>. Here is how each is calculated.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 1: The Initial ACV Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier determines the full cost to repair or replace the damaged property at
        current prices. This is the <strong>replacement cost value (RCV)</strong>. The carrier
        then subtracts depreciation &mdash; a reduction for the age and condition of the
        damaged items &mdash; to arrive at the <strong>actual cash value (ACV)</strong>.
        Finally, the deductible is subtracted from the ACV to produce the initial payment.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Replacement Cost Value (RCV): $80,000</li>
        <li>Less depreciation (15%): &minus;$12,000</li>
        <li>Actual Cash Value (ACV): $68,000</li>
        <li>Less deductible: &minus;$2,500</li>
        <li><strong>Initial ACV payment: $65,500</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $12,000 in depreciation is not lost &mdash; it is held back by the carrier and
        released after the policyholder completes repairs. This holdback is called{' '}
        <strong>recoverable depreciation</strong>. For more on how depreciation works and common
        problems with its application, see our articles on{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          ACV vs. RCV
        </Link>{' '}
        and{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-blue-700 underline hover:text-blue-900">
          loss settlement provisions
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 2: The Recoverable Depreciation Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the policyholder completes repairs, the carrier releases the depreciation holdback.
        On the example above, the carrier would release the remaining $12,000. The total recovery
        is $65,500 + $12,000 = $77,500 &mdash; which equals the $80,000 replacement cost minus
        the $2,500 deductible. The deductible is borne once and only once.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are deadlines to claim recoverable depreciation, and they vary by policy and by
        state. Missing the deadline can mean forfeiting the holdback entirely. See our article
        on{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-blue-700 underline hover:text-blue-900">
          recoverable depreciation deadlines
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Deductible Gets Subtracted
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        By tradition, the deductible is typically subtracted from the Coverage A (Dwelling)
        payment. This is the standard practice on most homeowner claims because the dwelling
        is usually the largest component of the loss. But there is no hard rule in most policies
        requiring the deductible to be subtracted from a specific coverage part. The deductible
        applies to the <em>claim</em>, not to a particular coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters in practice. Consider a scenario where a tree falls and crushes a detached
        garage but does not damage the main dwelling. There is no Coverage A (Dwelling) payment
        in that scenario &mdash; the entire claim is under Coverage B (Other Structures). The
        deductible gets subtracted from the Coverage B payment because that is the only coverage
        involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now suppose the same tree event also caused wind damage to the dwelling that is
        discovered later. The{' '}
        <Link href="/resources/statement-of-loss" className="text-blue-700 underline hover:text-blue-900">
          statement of loss
        </Link>{' '}
        might change &mdash; the carrier might shift the deductible to the Coverage A dwelling
        payment instead of the Coverage B other structures payment, or they might simply leave
        the calculation the way it was initially done. Either way, the deductible is applied
        once per occurrence, not once per coverage part. For more on this distinction, see our{' '}
        <Link href="/resources/deductibles-guide" className="text-blue-700 underline hover:text-blue-900">
          deductibles guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Multi-Coverage Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many losses involve more than one coverage part. A fire might produce a Coverage A
        (Dwelling) payment, a Coverage B (Other Structures) payment for a damaged shed, a
        Coverage C (Personal Property) payment for destroyed contents, and a Coverage D (Loss
        of Use) payment for temporary housing while the home is repaired. Each coverage part
        has its own limit shown on the{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>,
        and each is calculated separately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The deductible applies only once to the entire occurrence. Coverage D (Loss of Use /
        Additional Living Expenses) has <strong>no deductible</strong> at all on most homeowner
        policies. If the carrier subtracts the deductible from your ALE payment, that is
        typically an error.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ACV-Only Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all policies include replacement cost coverage. On an ACV-only policy, the formula
        is simpler &mdash; and the payment is lower:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Replacement Cost Value (RCV): $80,000</li>
        <li>Less depreciation (15%): &minus;$12,000</li>
        <li>Actual Cash Value (ACV): $68,000</li>
        <li>Less deductible: &minus;$2,500</li>
        <li><strong>Total payment: $65,500</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The math looks the same as Step 1 above, but with an ACV-only policy, there is no
        Step 2. The $12,000 in depreciation is not recoverable. It is gone. The $65,500 is
        the final payment. This is why the distinction between replacement cost and ACV
        policies matters so much &mdash; on a $80,000 loss, the difference is $12,000.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supplemental Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The initial payment is rarely the final payment. As repairs proceed, additional damage
        is often discovered &mdash; hidden water damage behind walls, code upgrade requirements,
        or scope items the original adjuster missed. These additional items are addressed
        through{' '}
        <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
          supplemental claims
        </Link>.
        The deductible should <strong>not</strong> be subtracted again on a supplement. The
        deductible was already taken on the initial payment. If the carrier subtracts the
        deductible from a supplemental payment, push back immediately.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Decoding the Check You Received
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies do not always explain their payments clearly. In many cases, the
        carrier will send an accompanying payment letter that explains how the number was
        derived, and they may include estimates or adjuster reports showing the calculation.
        But they do not always do that. Sometimes you receive a check with no explanation at
        all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a payment letter is not included, there are often clues on the check itself.
        The check stub or memo line frequently uses shorthand terminology that indicates which
        coverage part the payment applies to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>COVA</strong> or <strong>Cov A</strong> &mdash; Coverage A (Dwelling)</li>
        <li><strong>COVB</strong> or <strong>Cov B</strong> &mdash; Coverage B (Other Structures)</li>
        <li><strong>COVC</strong> or <strong>Cov C</strong> &mdash; Coverage C (Personal Property / Contents)</li>
        <li><strong>ALE</strong> or <strong>COVD</strong> &mdash; Coverage D (Additional Living Expenses / Loss of Use)</li>
        <li><strong>ACV</strong> &mdash; Actual Cash Value (initial payment, depreciation withheld)</li>
        <li><strong>RCV</strong> or <strong>Dep</strong> &mdash; Recoverable depreciation / replacement cost holdback release</li>
        <li><strong>Supp</strong> or <strong>Supplement</strong> &mdash; Supplemental payment for additional approved damage</li>
        <li><strong>EMS</strong> or <strong>Mitigation</strong> &mdash; Emergency mitigation services</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These abbreviations are not standardized across the industry. Different carriers use
        different shorthand. But the presence of any of these terms on a check stub gives you
        a starting point for understanding what the payment covers.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        When No Explanation Is Provided
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive a payment and cannot determine how it was calculated, you have every
        right to ask. Send the carrier a written request &mdash; email or letter &mdash; asking
        them to explain the basis for the payment: what coverage part it applies to, how the
        amount was calculated, what deductible was applied, and what depreciation (if any) was
        withheld. In California, this is more than a courtesy &mdash; the carrier is required
        under the{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        to provide a clear explanation of the basis for any payment, and documents related to
        your claim are{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
          claim-related documents you are entitled to receive
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Payments Based on Undisclosed Documents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, the carrier issues a payment based on an internal document &mdash; an
        estimate, an engineering report, or a scope of loss &mdash; that was not shared with the
        policyholder. This is not necessarily intentional concealment. Sometimes the document
        was prepared by a field adjuster and simply was not forwarded. Sometimes the payment was
        processed before the supporting documentation was finalized. Regardless of the reason,
        if you receive a payment and do not have the documentation that supports it, you should
        push back and insist on receiving it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is especially important in California, where the estimate, scope, or report
        underlying a payment is a claim-related document that the carrier is required to provide
        under California Code of Regulations, title 10, &sect;2695.7(d). You cannot evaluate
        whether a payment is correct if you do not know how it was calculated. Requesting the
        supporting documentation is not adversarial &mdash; it is a basic step in understanding
        your own claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mortgage Company Involvement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a mortgage, insurance checks above a certain amount are typically made
        payable to both you and the mortgage company. The mortgage company will often require
        you to endorse the check and submit it to them, and they will release funds in
        installments as repairs are completed. This process adds delay and complexity to
        receiving your money. For a detailed discussion of how to navigate this, see our
        article on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-blue-700 underline hover:text-blue-900">
          mortgage company holds
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Worked Example: Fire Damage Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a complete worked example showing how payments flow on a typical fire damage
        claim on a replacement cost homeowner policy with a $2,500 deductible:
      </p>
      <p className="text-gray-700 leading-relaxed mb-2">
        <strong>Coverage A &mdash; Dwelling:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
        <li>RCV: $120,000</li>
        <li>Depreciation (10%): &minus;$12,000</li>
        <li>ACV: $108,000</li>
        <li>Deductible: &minus;$2,500</li>
        <li><strong>Initial dwelling payment: $105,500</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-2">
        <strong>Coverage C &mdash; Contents:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
        <li>RCV: $35,000</li>
        <li>Depreciation (20%): &minus;$7,000</li>
        <li>ACV: $28,000</li>
        <li>Deductible: $0 (already applied to dwelling)</li>
        <li><strong>Initial contents payment: $28,000</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-2">
        <strong>Coverage D &mdash; Additional Living Expenses:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
        <li>Hotel, meals, and increased costs during repairs: $18,000</li>
        <li>Deductible: $0 (ALE has no deductible)</li>
        <li><strong>ALE payment: $18,000</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-2">
        <strong>Recoverable depreciation (after repairs completed):</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
        <li>Dwelling depreciation released: $12,000</li>
        <li>Contents depreciation released: $7,000</li>
        <li><strong>Total depreciation release: $19,000</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Total claim recovery:</strong> $105,500 + $28,000 + $18,000 + $19,000 ={' '}
        <strong>$170,500</strong> (which equals $120,000 + $35,000 + $18,000 &minus; $2,500
        deductible = $170,500).
      </p>

      <CalloutBox variant="tip" title="Verify the Math Yourself">
        <p>
          When you receive a payment, work the formula backwards. Start with the check amount,
          add back the deductible and depreciation, and see if the total matches the carrier&rsquo;s
          estimate. If the numbers do not reconcile, ask the carrier to explain the discrepancy
          in writing. Common errors include applying the deductible twice, applying it to the
          wrong coverage part, or withholding more depreciation than the estimate supports.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, payment methods, and regulations vary significantly.
          Consult your policy language and a licensed professional for advice about your specific
          situation.
        </p>
      </CalloutBox>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
