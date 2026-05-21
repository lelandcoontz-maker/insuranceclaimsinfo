import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Your Insurance Company Made an Offer — Now What?',
  description:
    'How to evaluate your insurance settlement offer, understand your options, and decide whether to accept, negotiate, or dispute the amount.',
  summary:
    'When the insurer makes an offer you have three choices: accept, negotiate, or dispute. Compare it against your own documentation and estimate first. A low offer is a negotiating position, not a verdict, and you can counter in writing or invoke appraisal.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You opened the mail or checked your email, and there it is: a number. Your insurance
        company has made an offer on your claim. Maybe it looks reasonable. Maybe it looks
        laughably low. Either way, you need a framework for deciding what to do next. This guide
        gives you one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first thing to understand: an insurance company&rsquo;s initial offer is almost never
        their best offer. Studies and industry data consistently show that policyholders who accept
        the first offer recover significantly less than those who negotiate. You are not being
        difficult by questioning the number. You are exercising the rights you paid for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 1: Understand What the Offer Includes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you decide anything, make sure you understand the components of the offer:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Is this an ACV or RCV payment?</strong> If your policy pays replacement cost, the
          first check is usually the actual cash value (depreciated amount). You recover the
          withheld depreciation later when you complete repairs. This is normal and does not mean
          you accepted the total as final.
        </li>
        <li>
          <strong>What coverages does it address?</strong> Your claim may have multiple components:
          dwelling (structure), contents (personal property), additional living expenses, and
          other structures. The offer might address only one.
        </li>
        <li>
          <strong>Has the deductible been subtracted?</strong> The insurer subtracts your deductible
          from the payment. Make sure the gross amount (before deductible) reflects the full damage.
        </li>
        <li>
          <strong>Is recoverable depreciation noted?</strong> The payment summary should show the
          replacement cost value, the depreciation withheld, and the net ACV payment.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Cashing a Check Does Not Mean You Agree">
        <p>
          In California, accepting a partial payment does not waive your right to dispute the
          remaining amount. Under 10 CCR §2695.7(h), if the insurer
          issues payment for an undisputed amount, cashing that check does not prevent you from
          pursuing the disputed portion. However, read any letter that accompanies the check
          carefully. If it contains &ldquo;full and final settlement&rdquo; language, cross that
          language out, write &ldquo;accepted as partial payment only,&rdquo; and deposit it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 2: Compare to Your Actual Repair Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The only way to evaluate an insurance offer is to compare it against what the repairs
        actually cost. You need at least one written contractor estimate for the full scope of
        repairs. Two or three estimates are better.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When comparing:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Does the insurance estimate cover the same scope of work as the contractor bid? Missing
          line items are a scope dispute.
        </li>
        <li>
          Are the quantities the same? Different measurements indicate someone made an error (and
          it is usually the insurer&rsquo;s adjuster who spent less time measuring).
        </li>
        <li>
          Are the unit prices comparable? In post-disaster markets or high-cost areas, actual
          contractor pricing often exceeds insurance estimate pricing.
        </li>
        <li>
          Does the contractor include overhead and profit? If so, does the insurance estimate?
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A gap between the insurance offer and actual repair costs is normal. Gaps of 30 to 50
        percent are common on initial offers. That gap is what negotiation is for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 3: Decide Your Path
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have three options. None of them is &ldquo;take it or leave it.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Option A: Accept the Offer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the offer covers your actual repair costs (including a reasonable contractor bid), and
        you are satisfied the scope is complete, accepting is reasonable. This is rare on first
        offers but does happen on straightforward claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Option B: Negotiate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the offer is in the ballpark but missing items or underpriced, negotiation is the right
        tool. Submit a written response identifying the specific line items in dispute, supported
        by your contractor estimate. See our{' '}
        <Link href="/resources/negotiation" className="text-blue-700 underline hover:text-blue-900">
          negotiation guide
        </Link>{' '}
        for step-by-step instructions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Option C: Dispute
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the offer is fundamentally inadequate, a coverage dispute exists, or the insurer is
        acting in bad faith, stronger action is needed. Your dispute options include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Supplemental claim:</strong> Submit additional documentation showing damage the
          insurer missed. See our{' '}
          <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
            supplemental claims guide
          </Link>.
        </li>
        <li>
          <strong>Appraisal:</strong> Invoke the appraisal clause in your policy. This is a binding
          process where independent appraisers determine the amount of loss. It resolves dollar
          disputes without litigation. See our{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal guide
          </Link>.
        </li>
        <li>
          <strong>CDI complaint:</strong> File a complaint with the California Department of
          Insurance if the insurer is violating claims handling regulations.
        </li>
        <li>
          <strong>Attorney referral:</strong> If bad faith is present or the stakes are high enough
          to justify legal representation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding Partial Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies sometimes issue partial payments for undisputed portions of the claim
        while the disputed portion is still being negotiated. This is actually required under
        California law. 10 CCR 2695.7(h) states that when an amount is not in dispute, the insurer
        must pay it promptly even if other amounts are still contested.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Accept partial payments. They do not limit your rights. But always confirm in writing:
        &ldquo;I am accepting this payment as a partial advance against the total claim amount. I
        reserve all rights to dispute the remaining balance.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Supplement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Accepting an initial payment does not close your claim. You have the right to supplement
        your claim with additional damage discovered during repairs. This happens constantly. A
        contractor opens up a wall and finds more damage than was visible from the surface. The
        insurer must evaluate and pay for legitimate supplements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The supplement process works like this:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your contractor discovers additional damage during repairs.</li>
        <li>Stop work on that area and document the newly discovered damage with photos.</li>
        <li>Submit a supplemental estimate to the adjuster with photos and explanation.</li>
        <li>The adjuster inspects (or approves based on documentation).</li>
        <li>Additional payment is issued for the approved supplement.</li>
      </ol>

      <CalloutBox variant="warning" title="Do Not Let a Low Offer Delay Your Repairs">
        <p>
          If your home has active damage (ongoing water intrusion, exposed structure, safety
          hazards), do not wait for the insurer to agree on a final number before making emergency
          repairs. Your policy requires you to mitigate further damage. Make the repairs, document
          everything, keep receipts, and submit the costs. But do not let a dispute over the total
          amount prevent you from protecting your property.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Respond to the Offer in Writing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you accept, negotiate, or dispute, respond in writing. A phone call leaves no
        record. An email or letter creates a paper trail. Your response should include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your claim number and date of loss</li>
        <li>The specific amount you received and the date you received it</li>
        <li>Whether you are accepting the amount as full or partial payment</li>
        <li>Any items you dispute, with specific reference to line items in their estimate</li>
        <li>Supporting documentation (contractor bids, photos, code requirements)</li>
        <li>A clear statement of what you are requesting</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Timeline Expectations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law (10 CCR 2695.5(b)), the insurer must respond to your communications
        within 15 calendar days. After you submit a dispute or supplement, they have 40 days to accept or deny the claim (10 CCR §2695.7(b)). If they miss these
        deadlines, document it. Regulatory violations strengthen your position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how the overall claim process works in California, see our{' '}
        <Link href="/resources/how-california-claim-works" className="text-blue-700 underline hover:text-blue-900">
          California claims process guide
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The offer is not the end. It is a starting point for a conversation. Know your numbers, know
        your rights, and respond with evidence. That is how claims get paid fairly.
      </p>
    </>
  )
}
