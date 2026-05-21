import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Choosing Your Contractor After an Insurance Loss',
  description:
    'You have the legal right to choose your own contractor. How to select one, what to watch for, and how to handle the insurance company\'s preferred vendor pressure.',
  summary:
    'You have the legal right to choose your own contractor after a loss; the insurer cannot force you to use its preferred vendor. Pick a licensed, reputable contractor and resist pressure that serves the carrier\'s interest over yours.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important decisions you will make after a property loss is who
        repairs your home. The insurance company may push you toward their preferred vendor
        or managed repair network. They may tell you it will be &ldquo;easier&rdquo; or
        &ldquo;faster.&rdquo; But the choice is yours — and choosing the right contractor
        directly affects how well your home is repaired.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Choose
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect;758.5, if the insurer refers you to a
        contractor, they must provide a written disclosure that you are not required to
        use that contractor. The law is clear: you choose who repairs your home. The
        insurance company cannot:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Require you to use their preferred vendor.</li>
        <li>Reduce your payment because you chose a different contractor.</li>
        <li>Refuse to pay reasonable costs because their vendor would charge less.</li>
        <li>Condition claim approval on using a specific repair company.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer owes you the reasonable and necessary cost to restore your property.
        If your chosen licensed contractor charges more than the insurer&apos;s network
        vendor — and the price is reasonable for your market — the insurer must pay it.
      </p>

      <CalloutBox variant="warning" title="Why Insurer-Preferred Vendors Can Be a Problem">
        <p className="mb-2">
          Contractors in insurance company preferred vendor programs agree to work at
          reduced rates in exchange for volume referrals. They are accountable to the
          insurance company, not to you. They have a financial incentive to keep costs
          low — which often means cutting corners, using cheaper materials, or skipping
          scope items that should be included.
        </p>
        <p>
          This does not mean all program contractors do bad work. But their loyalty is
          split. Your own contractor works for you and answers to you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Choose a Contractor
      </h2>

      <h3 className="text-xl font-bold text-gray-900 mb-3">Licensing</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, any job over $500 requires a licensed contractor. Verify the
        license at the Contractors State License Board (CSLB) website. Check for: active
        license status, appropriate classification for the work (B for general, C-33 for
        painting, C-36 for plumbing, etc.), workers&apos; comp insurance, and any
        disciplinary history.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Loss Experience</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all contractors understand insurance work. You want someone who has worked on
        insurance claims before and understands the process: writing supplements, working
        with adjusters, documenting scope changes, and navigating the payment cycle. Ask
        specifically: &ldquo;How many insurance loss jobs have you done in the last two
        years?&rdquo;
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Bids</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Get at least two bids, preferably three. This protects you in two directions: it
        confirms that your chosen contractor&apos;s price is reasonable (which defends
        against insurer pushback), and it protects you from overpaying. Bids should be
        itemized and detailed — not a single lump-sum number.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">References</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask for references from recent insurance loss jobs — not just regular remodels.
        Insurance work has unique pressures: payment timing is uncertain, scope can change,
        and the insurer may dispute line items mid-project. You want someone who handles
        that smoothly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Red Flags
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Demands large upfront payment before any work begins.</li>
        <li>Will not provide a written, itemized contract.</li>
        <li>Pressures you to sign immediately (&ldquo;this price is only good today&rdquo;).</li>
        <li>Cannot or will not provide license number and proof of insurance.</li>
        <li>Wants you to sign over your insurance check directly to them.</li>
        <li>Shows up uninvited after a disaster (&ldquo;storm chasers&rdquo;).</li>
        <li>Offers to waive your deductible (this is insurance fraud in California).</li>
        <li>Refuses to pull permits for work that requires them.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Payment Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance claim payments typically arrive in phases:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Initial payment (ACV).</strong> The insurer pays actual cash value
          upfront — the repair cost minus depreciation.
        </li>
        <li>
          <strong>Supplements.</strong> As work proceeds and additional damage is found,
          your contractor (or PA) submits supplements for the additional scope.
        </li>
        <li>
          <strong>Depreciation holdback.</strong> After repairs are complete, the insurer
          releases the withheld depreciation.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor experienced in insurance work understands this payment cycle and can
        structure their billing accordingly. They will not demand full payment before the
        insurer has released funds.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Disputes Your Contractor&apos;s Price
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer says your contractor charges too much, this is a price dispute — not
        a reason to change contractors. Your options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Submit documentation showing the price is reasonable for your market (other bids,
          published pricing data, Xactimate local pricing).
        </li>
        <li>
          Ask the insurer to identify specifically which line items they dispute and why.
        </li>
        <li>
          If the dispute is purely about price and not scope, invoke{' '}
          <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">
            appraisal
          </Link>{' '}
          to let a neutral process determine the fair cost.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer cannot say &ldquo;we will only pay what our vendor would charge.&rdquo;
        They owe you the reasonable cost of repair. If local contractors charge $X and the
        insurer&apos;s network vendor would charge 70% of $X, the insurer still owes the
        reasonable local rate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contracts and Scope
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before work begins, have a written contract that includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Detailed scope of work (matching the insurance estimate where possible).</li>
        <li>Price — either a fixed price or a clear unit-price structure.</li>
        <li>Timeline for completion.</li>
        <li>How change orders and supplements will be handled.</li>
        <li>Payment schedule tied to completion milestones, not arbitrary dates.</li>
        <li>Warranty on workmanship.</li>
      </ul>

      <CalloutBox variant="tip" title="Contractor + Public Adjuster">
        <p>
          A{' '}
          <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
            Public Adjuster
          </Link>{' '}
          can help you evaluate bids, identify scope that should be included but is not,
          and handle supplement negotiations with the insurer while your contractor focuses
          on the work. The PA ensures the insurance estimate matches what actually needs to
          be repaired — and fights for the difference when it does not.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After Disasters: Extra Caution
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        After a major disaster — wildfire, earthquake, flood — contractors flood the area
        and demand is extreme. Prices rise, wait times lengthen, and opportunistic operators
        appear. In this environment: verify every license, get everything in writing, never
        pay more than 10% upfront (California law caps contractor deposits at $1,000 or
        10%, whichever is less), and be wary of anyone who promises immediate availability
        when everyone else is booked months out. See also{' '}
        <Link href="/resources/post-disaster-scams" className="text-[#1F3964] underline font-medium">
          Post-Disaster Scams
        </Link>.
      </p>
    </>
  )
}
