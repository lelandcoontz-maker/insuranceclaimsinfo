import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Additional Living Expenses & Fair Rental Value',
  description:
    'Understanding your ALE and FRV coverage: what qualifies, how to document expenses, and how to counter common insurer tactics that limit your benefits.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss makes your home uninhabitable, your insurance policy does more than just
        pay for repairs. It also covers the increased costs you incur while living elsewhere. This
        coverage goes by different names depending on whether you live in the home or rent it out:
        Additional Living Expenses (ALE) for owner-occupants, and Fair Rental Value (FRV) for
        landlords.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What ALE Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional Living Expenses coverage pays for the <em>additional</em> costs you incur to
        maintain your normal standard of living while your home is being repaired or rebuilt. The key
        concept is that ALE covers expenses that are <em>over and above</em> what you would normally
        spend.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common misunderstanding involves housing costs. When you are displaced, you do not stop
        paying your mortgage &mdash; you still owe that payment every month. But now you <em>also</em>{' '}
        have to pay for a place to live while your home is uninhabitable. The cost of that temporary
        housing (for example, $3,500 per month to rent a comparable home) is an entirely new expense
        on top of the mortgage you are already paying. That full rental cost is typically your
        additional living expense for housing, because it is an expense you would not have at all if
        not for the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE extends well beyond housing. It covers the full range of increased costs caused by the
        displacement, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Increased mileage and transportation costs from a longer commute</li>
        <li>Parking fees at a temporary hotel or rental</li>
        <li>Dry cleaning costs when you no longer have access to your home laundry</li>
        <li>
          Increased meal expenses &mdash; if you normally spend $400 per month on home-cooked
          groceries but are now spending $700 on restaurant meals because you lack a full kitchen,
          ALE covers the $300 increase
        </li>
        <li>Pet boarding if your temporary housing does not allow pets</li>
        <li>Storage fees for personal property</li>
        <li>Moving costs to and from temporary housing</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The overarching principle is that ALE covers the full additional cost of maintaining your
        normal standard of living &mdash; every expense that is above and beyond what your life would
        normally cost.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What FRV Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a landlord and your rental property is damaged, Fair Rental Value coverage
        reimburses you for the rental income you lose while the property cannot be rented. The
        benefit is based on the fair market rental value of the property, minus any expenses you no
        longer incur (such as utilities you normally provide to tenants). FRV continues until the
        property is repaired and available for re-rental, or until the policy limit is exhausted.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Does &ldquo;Uninhabitable&rdquo; Mean?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE coverage triggers when your home is not fit to live in due to a covered loss. This does
        not mean the home must be completely destroyed. A home can be uninhabitable if it lacks
        functioning plumbing, heating, or electrical systems, if there are health hazards like mold
        or smoke contamination, or if local authorities have issued an evacuation order. If you are
        told you must leave by a fire marshal, building inspector, or other authority, that
        constitutes uninhabitability.
      </p>

      <CalloutBox variant="legal" title="Mandatory Evacuation Orders">
        <p>
          In California, if a civil authority prohibits access to your home due to a covered peril
          (such as a wildfire evacuation order), ALE coverage typically applies even if your home
          was not directly damaged. Check your policy for the &ldquo;civil authority&rdquo;
          provision and its time limits.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Comparable Housing Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard is that you are entitled to maintain your normal standard of living. If you
        lived in a four-bedroom house in a specific school district, you are entitled to comparable
        temporary housing &mdash; not a studio apartment across town. Temporary housing includes
        hotels, rental homes, and furnished apartments that reasonably match your pre-loss living
        situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting ALE Expenses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Meticulous record-keeping is essential for ALE claims. Save every receipt. Keep a spreadsheet
        or log that categorizes each expense by type and date. For food expenses, track your
        pre-loss normal spending so you can demonstrate the increase. If you can show that your
        household normally spent $500 per month on groceries and you are now spending $900, the
        $400 difference is clearly documented.
      </p>

      <CalloutBox variant="tip" title="Request Advance Payments">
        <p>
          You do not have to wait until the end of your displacement to submit ALE expenses. Submit
          receipts monthly and request ongoing reimbursement. Under California regulations, the
          insurer must process undisputed portions of your claim promptly.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics to Limit ALE
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE is one of the coverages insurers most frequently try to minimize. Watch for these
        tactics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pressuring you into cheap housing.</strong> The insurer may push a small apartment
          or extended-stay hotel that does not match your normal standard of living. You are entitled
          to comparable housing.
        </li>
        <li>
          <strong>Cutting ALE off too early.</strong> Some insurers try to end ALE benefits before
          repairs are actually complete, arguing that the home is &ldquo;livable&rdquo; even when
          significant work remains. If the home is not fully repaired and safe to occupy, ALE
          continues.
        </li>
        <li>
          <strong>Disputing food expenses.</strong> Insurers sometimes challenge increased food costs
          as excessive. Detailed records of your pre-loss grocery spending are your best defense.
        </li>
        <li>
          <strong>Blaming you for repair delays.</strong> If the insurer claims that repairs are
          taking too long because of your actions, they may try to limit ALE duration. Document that
          you are cooperating fully and that any delays are on the insurer&rsquo;s side or due to
          contractor availability.
        </li>
      </ul>

      <CalloutBox variant="warning" title="ALE Has a Policy Limit">
        <p>
          ALE coverage is subject to a cap, often 20 to 30 percent of your dwelling coverage or a
          specific time limit (12 or 24 months). If your displacement is expected to be lengthy,
          budget carefully and discuss the timeline with your insurer early.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        ALE and FRV exist to keep you and your family stable while your home is restored. Do not
        leave this money on the table. Track every expense, submit documentation regularly, and push
        back if the insurer tries to shortchange you. A licensed Public Adjuster can help ensure you
        receive the full ALE or FRV benefit your policy provides.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
