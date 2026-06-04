import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "How to Read Your Insurance Statement of Loss: The Document That Shows Where Your Money Went",
  description:
    "The statement of loss is the carrier's accounting of your entire claim — what it calculated, what it deducted, and what it paid on each coverage. Learning to read it is the first step to identifying underpayment.",
  summary:
    'The statement of loss is the carrier\'s accounting of your claim, showing replacement cost, depreciation, deductible, and what was actually paid. Reading it line by line reveals where your money went and where the carrier shorted you.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          insurance policy provisions and California insurance law as a Licensed Public Adjuster.
          It is not legal advice. Every policy is different, and the statement of loss on your
          claim will reflect the specific coverages, limits, deductibles, and provisions in your
          policy. Consult your policy language and a licensed professional for advice about your
          specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        After the carrier processes your claim, it issues a document called the{' '}
        <strong>statement of loss</strong> &mdash; sometimes called a &ldquo;loss statement,&rdquo;
        &ldquo;claim summary,&rdquo; or &ldquo;settlement breakdown.&rdquo; This is the single
        most important financial document in your claim. It shows how the carrier calculated every
        payment on every coverage, where the deductible was applied, how much depreciation was
        withheld, and what you were actually paid. Most policyholders never read it carefully.
        That&rsquo;s a mistake.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Statement of Loss Is
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statement of loss is the carrier&rsquo;s accounting document showing how it arrived at
        the payment amounts on your claim. It breaks the claim into coverage lines &mdash;{' '}
        <strong>Coverage A (Dwelling)</strong>, <strong>Coverage B (Other Structures)</strong>,{' '}
        <strong>Coverage C (Personal Property)</strong>, and{' '}
        <strong>Coverage D (Additional Living Expenses / Fair Rental Value)</strong> &mdash; and
        shows the math for each one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For each coverage, the statement typically shows:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Gross replacement cost value (RCV)</li>
        <li>Depreciation withheld</li>
        <li>Actual cash value (ACV)</li>
        <li>Deductible (if applicable to that coverage)</li>
        <li>Prior payments already issued</li>
        <li>Net payment &mdash; the check amount</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statement may also show sublimits, policy limits, and how those caps affected the
        payment. It is important to understand that this is <strong>not</strong> the Xactimate
        estimate. The Xactimate estimate is the detailed line-by-line repair cost document. The
        statement of loss is the financial summary that sits on top of the estimate &mdash; it
        applies the policy provisions (depreciation, deductible, limits) to the estimate totals and
        produces the actual payment figures.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Anatomy of a Statement of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand how a statement of loss works, it helps to walk through a typical example.
        The numbers below are simplified for illustration, but the structure reflects what you will
        see on most carrier statements.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coverage A &mdash; Dwelling
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Replacement Cost Value (RCV):</strong> $350,000</li>
        <li><strong>Less Depreciation:</strong> ($52,500) &mdash; 15%</li>
        <li><strong>Actual Cash Value (ACV):</strong> $297,500</li>
        <li><strong>Less Deductible:</strong> ($5,000)</li>
        <li><strong>Less Prior Payments:</strong> ($0)</li>
        <li><strong>Net ACV Payment:</strong> $292,500</li>
        <li><strong>Recoverable Depreciation:</strong> $52,500 (payable after repairs completed)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier starts with the total replacement cost of the dwelling damage &mdash; $350,000 in
        this example. It then subtracts depreciation, which represents the loss in value due to age
        and condition of the damaged components. What remains after depreciation is the{' '}
        <strong>actual cash value (ACV)</strong>. The deductible is then subtracted from the ACV,
        and any prior payments the carrier already issued are subtracted as well. The result is the
        net ACV payment &mdash; the check you receive. The recoverable depreciation line shows the
        amount the carrier is holding back until you complete repairs.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coverage B &mdash; Other Structures
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Replacement Cost Value (RCV):</strong> $25,000</li>
        <li><strong>Less Depreciation:</strong> ($3,750)</li>
        <li><strong>Actual Cash Value (ACV):</strong> $21,250</li>
        <li><strong>Less Deductible:</strong> ($0) &mdash; deductible already applied to Coverage A</li>
        <li><strong>Net ACV Payment:</strong> $21,250</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B covers detached structures &mdash; fences, sheds, detached garages, retaining
        walls. Notice that the deductible is $0 on this line. That is because the deductible was
        already applied in full to Coverage A. The deductible is applied only once per claim, and
        this is one of the most important details on the statement.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coverage C &mdash; Personal Property
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Replacement Cost Value (RCV):</strong> $85,000</li>
        <li><strong>Less Depreciation:</strong> ($25,500) &mdash; 30%</li>
        <li><strong>Actual Cash Value (ACV):</strong> $59,500</li>
        <li><strong>Less Deductible:</strong> ($0) &mdash; deductible already applied to Coverage A</li>
        <li><strong>Net ACV Payment:</strong> $59,500</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage C covers personal property &mdash; furniture, clothing, electronics, appliances,
        and everything else you own inside the home. Note the higher depreciation rate here. Personal
        property is often depreciated more aggressively than the dwelling structure, particularly for
        items like electronics and clothing that carriers consider to have shorter useful lives.
        Again, no deductible is applied because it was already fully satisfied under Coverage A.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coverage D &mdash; Additional Living Expenses (ALE)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Expenses Incurred:</strong> $18,000</li>
        <li><strong>Less Normal Living Expenses:</strong> ($3,000)</li>
        <li><strong>Net ALE Payment:</strong> $15,000</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D works differently from the other coverages. There is no depreciation and no
        deductible. Instead, the carrier calculates the total living expenses you incurred while
        displaced and subtracts the &ldquo;normal living expenses&rdquo; you would have had anyway
        &mdash; things like your regular mortgage payment, utilities, and groceries at your normal
        rate. The net amount is what the carrier pays. Understanding this calculation in full is
        covered in our{' '}
        <Link href="/resources/how-insurance-payments-calculated" className="text-blue-700 underline hover:text-blue-900">
          guide to how insurance payments are calculated
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Deductible Was Applied &mdash; And Why It Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The deductible is subtracted only once per claim, from the first coverage that gets paid.
        On most homeowner claims, that means it is applied to Coverage A. But where the carrier
        places the deductible can have practical consequences beyond the math.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the deductible is applied to Coverage A, it reduces the dwelling check &mdash; and on
        most mortgaged properties, the dwelling check has the mortgage company&rsquo;s name on it.
        That means the deductible effectively comes out of the check that is subject to{' '}
        <strong>mortgage company oversight</strong>, which can complicate your access to those funds.
        If the deductible had been applied to a different coverage &mdash; say, Coverage C (personal
        property) &mdash; it would reduce a check that typically does not have the mortgage company
        on it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not get to choose where the carrier applies the deductible, but you should understand
        where it was applied so you can plan accordingly. For a deeper explanation of how deductibles
        work across different policy types, see our{' '}
        <Link href="/resources/deductibles-guide" className="text-blue-700 underline hover:text-blue-900">
          complete guide to insurance deductibles
        </Link>. For how deductible placement affects over-limit claims, see our article on{' '}
        <Link href="/resources/coverage-allocation-over-limit-claims" className="text-blue-700 underline hover:text-blue-900">
          coverage allocation in over-limit claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Statement Changes Over Time
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statement of loss is not a static document. It evolves as your claim progresses, and
        you should expect to receive multiple versions over the life of a significant claim.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Initial statement:</strong> Reflects the carrier&rsquo;s first estimate of
          damages. This is often based on the initial inspection and is frequently too low.
        </li>
        <li>
          <strong>Supplement revisions:</strong> When supplements are filed and approved &mdash;
          whether for additional damage discovered during repairs or for items missed in the
          original scope &mdash; the statement is revised to reflect the new totals.
        </li>
        <li>
          <strong>Recoverable depreciation release:</strong> When you complete repairs and submit
          documentation, the carrier releases the withheld depreciation. The statement updates to
          reflect these additional payments.
        </li>
        <li>
          <strong>Prior payments:</strong> Each revised statement subtracts prior payments from
          the new total to avoid double-paying. This is where errors frequently occur.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every time you receive a revised statement of loss, compare it to the previous version line
        by line. Identify exactly what changed &mdash; did the RCV go up? Did the depreciation
        percentage change? Were prior payments credited correctly? This comparison is how you catch
        errors before they become embedded in the claim file.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Red Flags to Look For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statement of loss is where underpayments hide. Here are the most common problems to
        watch for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Excessive depreciation percentages.</strong> If the carrier is depreciating a
          five-year-old roof at 40%, that number deserves scrutiny. Depreciation should reflect
          the actual condition and remaining useful life of the damaged components, not an
          arbitrary percentage the carrier assigned.
        </li>
        <li>
          <strong>The deductible applied more than once.</strong> The deductible should be
          subtracted only once per claim. If you see a deductible line on Coverage A and another
          deductible line on Coverage C, something is wrong.
        </li>
        <li>
          <strong>Coverage limits applied incorrectly.</strong> Watch for sublimits being applied
          to items that should not be sublimited, or policy limits being understated.
        </li>
        <li>
          <strong>Missing coverages.</strong> Is Coverage B accounted for? Was ALE included?
          Some statements simply omit coverages that should have been addressed, either because
          the adjuster overlooked them or because the carrier chose not to include them.
        </li>
        <li>
          <strong>RCV that doesn&rsquo;t match the Xactimate estimate total.</strong> The
          replacement cost value on the statement should correspond to the total on the
          Xactimate estimate. If these numbers diverge, one of the documents contains an error.
        </li>
        <li>
          <strong>&ldquo;Non-recoverable depreciation&rdquo; applied to items that should be
          recoverable.</strong> Some carriers label depreciation as non-recoverable when the
          policy language does not support that classification. If you see this on your
          statement, examine the policy language carefully.
        </li>
        <li>
          <strong>Prior payments that don&rsquo;t match what you actually received.</strong> The
          statement should reflect the actual amounts paid. If it shows a prior payment of
          $50,000 but you only received $45,000, that $5,000 discrepancy reduces every future
          payment.
        </li>
        <li>
          <strong>The statement doesn&rsquo;t reconcile with the actual checks issued.</strong>{' '}
          Add up every check the carrier sent you. That total should match what the statement
          shows as &ldquo;total payments to date.&rdquo; If it doesn&rsquo;t, demand an
          explanation in writing.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Double-Check the Math">
        <p>
          Carriers make mathematical errors on statements of loss more often than you would expect.
          Do not assume the numbers are correct just because they came from an insurance company.
          Verify every calculation yourself &mdash; the addition, the subtraction, the percentages.
          Errors in the carrier&rsquo;s favor rarely get corrected unless the policyholder catches
          them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Statement of Loss vs. the Xactimate Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These two documents serve different purposes, and understanding the distinction is critical.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>Xactimate estimate</strong> is the detailed line-by-line repair cost document.
        It lists every trade, every material, every labor operation, and every unit price that the
        carrier used to calculate the cost of repairing your property. For a detailed explanation of
        how to read an Xactimate estimate, see our{' '}
        <Link href="/resources/xactimate-line-items" className="text-blue-700 underline hover:text-blue-900">
          guide to Xactimate line items
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>statement of loss</strong> is the financial summary that applies policy
        provisions to the estimate total. The estimate tells you what the carrier thinks the damage
        costs to repair. The statement of loss tells you what the carrier is actually paying and
        why &mdash; after depreciation, deductible, limits, and prior payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both documents matter, and errors can exist in either one. An error in the Xactimate
        estimate &mdash; a missing line item, an incorrect unit price, a wrong quantity &mdash;
        flows through to the statement of loss and reduces your payment. But even if the Xactimate
        estimate is perfectly accurate, the statement of loss can still contain errors in how it
        applies depreciation, the deductible, or policy limits. You need to review both.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Request the Statement of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California&rsquo;s Fair Claims Settlement Practices regulations, you have the right
        to know how your claim was calculated. Under 10 CCR &sect;2695.9(d), if losses are
        settled on the basis of a written scope and/or estimate prepared by or for the insurer,
        the insurer must supply the claimant with a copy. Under &sect;2695.7(b)(1), when a claim
        is denied in whole or in part, the carrier must provide a written explanation listing all
        bases for the denial with the factual and legal basis for each reason.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have not received a statement of loss, request one in writing. Some carriers issue
        it automatically with every payment. Others do not issue one unless asked. Either way, you
        are entitled to this document.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, under 10 CCR &sect;2695.4(a), the carrier must affirmatively disclose all
        benefits, coverage, time limits, and other provisions that may apply to the claim. If the
        carrier is relying on an internal statement of loss to calculate your payments but has not
        shared it with you, that is a problem under California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader overview of these regulations, see our{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          guide to California&rsquo;s Fair Claims Settlement Practices
        </Link>{' '}
        and our article on{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
          your right to claim documents from the California Department of Insurance
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If the Numbers Don&rsquo;t Add Up
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have your statement of loss and something looks wrong, here is how to systematically
        verify it:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Compare the RCV on the statement to the Xactimate estimate total.</strong> These
          numbers should match. If the statement shows a different RCV than what appears on the
          last page of the Xactimate estimate, ask the carrier to explain the discrepancy.
        </li>
        <li>
          <strong>Verify the depreciation calculation against the estimate&rsquo;s depreciation
          summary.</strong> The Xactimate estimate usually includes a depreciation summary. The
          total depreciation on the statement should match (or closely correspond to) the
          depreciation totals in the estimate.
        </li>
        <li>
          <strong>Confirm the deductible was applied only once.</strong> Add up every deductible
          line across all coverages. If the total exceeds your policy deductible, the carrier has
          double-applied it.
        </li>
        <li>
          <strong>Check that all coverages are accounted for.</strong> Your claim may involve
          damage to the dwelling, other structures, personal property, and living expenses. If
          any of those coverages are missing from the statement, the carrier may have overlooked
          part of your claim.
        </li>
        <li>
          <strong>Compare prior payments to actual checks received.</strong> Go through your bank
          records and add up every insurance payment you deposited. That total should match the
          &ldquo;prior payments&rdquo; figure on your most recent statement.
        </li>
        <li>
          <strong>If you find errors, write to the carrier citing the specific
          discrepancy.</strong> Do not call &mdash; put it in writing. Identify the exact line
          on the statement, state what the number should be, explain why, and request a corrected
          statement.
        </li>
        <li>
          <strong>Consider hiring a public adjuster to review the statement.</strong> A licensed{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            public adjuster
          </Link>{' '}
          reviews these documents for a living and can quickly identify errors that a policyholder
          might miss &mdash; particularly in how depreciation, limits, and sublimits were applied.
        </li>
      </ol>

      <CalloutBox variant="important" title="The Bottom Line">
        <p>
          The statement of loss is not just an accounting document &mdash; it&rsquo;s a roadmap
          to your claim. Every error in that document costs you money. Read it carefully, compare
          it to the estimate, verify the math, and challenge anything that doesn&rsquo;t add up.
          The carrier is not going to correct its own mistakes. That&rsquo;s your job &mdash; or
          the job of the professional you hire to represent you.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal advice. It
          reflects the author&rsquo;s interpretation of insurance policy provisions and California
          insurance regulations as a Licensed Public Adjuster. Your policy language controls the
          terms of your coverage. For advice about your specific claim, consult a licensed public
          adjuster or an attorney experienced in insurance coverage disputes.
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
