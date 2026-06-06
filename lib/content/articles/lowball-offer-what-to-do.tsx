import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'My Insurance Company Is Lowballing Me — What Can I Do?',
  description:
    'How to recognize and fight a lowball insurance settlement: get your own estimate, negotiate in writing, invoke appraisal, and know when the gap signals bad faith.',
  summary:
    'Fight a lowball offer by getting your own independent estimate, documenting the gap, and negotiating in writing. If the insurer will not move, you can invoke the policy appraisal process, and an unreasonably low offer can itself be evidence of bad faith.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurer accepted the claim. They sent an adjuster. They wrote an estimate. And the
        number is absurdly low. Maybe it covers half the repairs. Maybe it ignores entire rooms.
        Maybe the depreciation is so aggressive that your five-year-old roof is valued at zero. This
        is lowballing — and it is one of the most common ways insurers underpay claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what you can do about it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Recognize the Pattern
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lowball offers share common characteristics. Learn to spot them:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scope too narrow:</strong> The estimate only covers part of the damage. Affected
          areas are excluded. Related damage is ignored. Items that need replacement are listed for
          repair only.
        </li>
        <li>
          <strong>Unit prices too low:</strong> The estimate uses labor rates and material costs that
          no contractor in your area would accept. Xactimate prices set to the wrong zip code or
          adjusted below market.
        </li>
        <li>
          <strong>Excessive depreciation:</strong> Items are depreciated far beyond reasonable useful
          life expectations. A 10-year roof on a 30-year shingle is depreciated to nothing.
        </li>
        <li>
          <strong>No overhead and profit:</strong> The estimate excludes the general contractor&apos;s
          overhead and profit (O&amp;P) — typically 20 percent combined — even though the repairs
          require a GC to coordinate multiple trades.
        </li>
        <li>
          <strong>Code upgrades ignored:</strong> The estimate prices repairs to pre-loss condition
          without accounting for code requirements that apply when you pull a permit.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Get Your Own Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are not required to accept the insurer&apos;s estimate. You have the right to get your
        own estimate from a licensed contractor. In fact, this is exactly what you should do. Find a
        licensed general contractor familiar with insurance repair work. Ask them to inspect the
        damage and provide a written estimate covering the full scope of repairs needed to return
        your property to its pre-loss condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A good contractor estimate will show the gap between what the insurer offered and what the
        repairs actually cost. This is your evidence. This is your leverage. For guidance on reading
        the insurer&apos;s estimate, see our{' '}
        <Link href="/resources/how-to-read-xactimate-estimate" className="text-blue-700 underline hover:text-blue-900">
          Xactimate estimate guide
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Choose the Right Contractor">
        <p>
          Not all contractors understand insurance work. Look for one who has experience with
          insurance claims, can write a detailed scope, and understands that the estimate needs to
          document why each item is necessary — not just list prices. A contractor who has worked with
          Public Adjusters or insurance attorneys will produce a more useful estimate.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Negotiate in Writing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Never negotiate by phone only. Phone calls leave no record. The adjuster can say anything on
        the phone and later deny it. Put every communication in writing — email is fine. When you
        submit your contractor&apos;s estimate, include a cover letter that:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>References your claim number and date of loss</li>
        <li>States that you disagree with the insurer&apos;s estimate</li>
        <li>Identifies specific items that are missing, underpriced, or improperly depreciated</li>
        <li>Attaches your contractor&apos;s estimate as the basis for your disagreement</li>
        <li>Requests a line-by-line response explaining any disputed items</li>
        <li>Sets a reasonable deadline for their response (14 days)</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on the{' '}
        <Link href="/resources/negotiation" className="text-blue-700 underline hover:text-blue-900">
          negotiation process
        </Link>, see our detailed guide.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Supplement Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A &quot;supplement&quot; is a request to add items to the insurer&apos;s existing estimate.
        This is how most claims grow: the initial estimate misses items, and supplements are
        submitted as additional damage is discovered or as the scope becomes clearer during repairs.
        This is normal. Insurers expect supplements. Do not be shy about submitting them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Submit supplements in writing with supporting documentation — photos, invoices, contractor
        assessments. Each supplement should identify the specific items being added and explain why
        they are necessary. For more on this process, see our guide on{' '}
        <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
          supplemental claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Overhead and Profit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common ways insurers reduce estimates is by excluding general contractor
        overhead and profit (O&amp;P). This is the 10 percent overhead and 10 percent profit that a
        general contractor charges to manage a project involving multiple trades (roofer, plumber,
        electrician, painter, etc.).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers often argue that O&amp;P is not owed unless you actually hire a general contractor.
        But if your repairs require coordination of three or more trades — which most significant
        losses do — a general contractor is necessary, and O&amp;P is a legitimate cost. California
        courts have recognized this. For the full analysis, see our article on{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Invoke Appraisal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If negotiation reaches a dead end on the amount of loss, most California homeowner policies
        include an &quot;appraisal&quot; clause. Appraisal is a binding process where each side
        selects an appraiser, the two appraisers select an umpire, and the panel determines the
        amount of loss. It is faster and cheaper than litigation, and it resolves amount disputes
        definitively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Important: appraisal resolves amount disputes, not coverage disputes. If the insurer says
        the loss is not covered at all, appraisal does not help — you need an attorney. But if
        they agree it is covered and just will not pay enough, appraisal is a useful tool. For
        more, see our{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal guide
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Appraisal Is Not Always Quick">
        <p>
          While faster than a lawsuit, appraisal still takes time — typically 60 to 120 days from
          invocation to award. During this time, the insurer should pay the undisputed portion of the
          claim. If they refuse to pay anything pending appraisal, that itself may be a regulatory
          violation (Cal. Code Regs., tit. 10, Section 2695.7(h)).
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Gap Signals Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a difference between a reasonable disagreement and an unreasonable lowball. If the
        insurer&apos;s estimate is 50 percent of what three licensed contractors say the work costs,
        something is wrong. If the adjuster refuses to explain the discrepancy, ignores your
        documentation, or stops responding — that pattern may cross the line from &quot;genuine
        dispute&quot; into{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith exposes the insurer to damages far beyond the claim amount — emotional distress,
        punitive damages, and attorney fees. When an insurer&apos;s conduct becomes unreasonable, an
        attorney experienced in insurance bad faith litigation should evaluate the situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Document Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        From the moment you realize the offer is too low, document everything:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Save every email, letter, and written communication</li>
        <li>Log every phone call (date, time, who you spoke with, what was said)</li>
        <li>Keep copies of every estimate — theirs and yours</li>
        <li>Photograph all damage before repairs begin</li>
        <li>Save all invoices and receipts for repairs, temporary housing, and out-of-pocket costs</li>
        <li>Note every deadline the insurer misses</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This documentation serves two purposes: it supports your claim for the full amount, and it
        builds the record you would need if the dispute escalates to a CDI complaint, appraisal, or
        litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A lowball offer is a negotiating position, not a final determination. The insurer is not the
        judge of what your claim is worth — they are a party to a dispute with a financial interest
        in paying you less. You have the right to disagree, the right to your own evidence, and the
        right to push back through every available channel. Use them.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
