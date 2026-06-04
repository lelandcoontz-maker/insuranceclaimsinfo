import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Scope of Loss Disputes: When the Adjuster Misses Damage',
  description:
    'Understanding scope of loss disputes with insurers — what they are, why carriers undercount damage, how to document items the adjuster missed, and strategies for challenging an inadequate repair estimate.',
  summary:
    'A scope-of-loss dispute is about what damage exists, not its price. Adjusters routinely undercount, so document every missed item with photos and measurements and present the full scope to challenge an inadequate estimate.',
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
        A &quot;scope of loss&quot; dispute is a disagreement about the extent and nature of the
        damage to your property and the repairs required to fix it. Unlike a{' '}
        <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
          coverage dispute
        </Link>{' '}
        — which asks whether the loss is covered at all — a scope dispute assumes coverage exists
        but challenges how much damage the insurer has recognized and how much work they are
        willing to pay for. Scope disputes are among the most common reasons policyholders receive
        inadequate settlements.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Scope Disputes Happen
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Scope disputes typically arise for one or more of these reasons:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The adjuster missed damage.</strong> Insurance company adjusters are often
          handling dozens of claims simultaneously. They may spend 30 minutes to an hour inspecting
          a property that has damage requiring hours of careful evaluation. Hidden damage behind
          walls, above ceilings, and under floors is routinely missed during quick inspections.
        </li>
        <li>
          <strong>Inadequate inspection methods.</strong> Some adjusters perform only visual
          inspections when the damage requires moisture readings, thermal imaging, or destructive
          testing to fully identify. Water damage, in particular, is almost impossible to fully
          scope with a visual inspection alone.
        </li>
        <li>
          <strong>Xactimate undercount.</strong> The insurer&rsquo;s estimate — typically generated
          in{' '}
          <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
            Xactimate
          </Link>{' '}
          — may omit line items, use incorrect measurements, fail to include necessary related
          repairs, or apply pricing that does not reflect the actual cost of the work.
        </li>
        <li>
          <strong>Deliberate scope limitation.</strong> In some cases, the insurer intentionally
          limits the scope to reduce the claim payment. This can take the form of acknowledging
          damage only in the most obvious areas while ignoring adjacent areas that were also
          affected.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commonly Missed Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain types of damage are missed more often than others because they are not immediately
        visible:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hidden damage behind walls:</strong> Water that enters a wall cavity can damage
          insulation, framing, and the drywall on the opposite side of the wall from the visible
          damage
        </li>
        <li>
          <strong>Subfloor damage:</strong> Water that saturates flooring frequently damages the
          subfloor beneath — plywood or OSB that swells, warps, or develops mold
        </li>
        <li>
          <strong>Electrical and plumbing systems:</strong> Water exposure to wiring, outlets,
          junction boxes, and plumbing connections can create safety hazards that require
          inspection and possible replacement
        </li>
        <li>
          <strong>HVAC contamination:</strong> Smoke, soot, and water can contaminate ductwork and
          HVAC equipment, requiring cleaning or replacement that the insurer&rsquo;s adjuster may
          not include
        </li>
        <li>
          <strong>Matching and related repairs:</strong> Repairs to the damaged area may require
          extending the work to adjacent undamaged areas to achieve a uniform appearance
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Your Own Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are not required to accept the insurer&rsquo;s scope or estimate. You have the right
        to hire your own contractor to inspect the damage and prepare an independent estimate of
        the repairs needed. A qualified contractor who physically inspects the property — including
        areas the insurer&rsquo;s adjuster may not have accessed — can identify damage that was
        missed and provide a detailed, line-by-line estimate of the full scope of work required.
      </p>

      <CalloutBox variant="tip" title="Never Sign a Scope Agreement Prematurely">
        <p>
          Some insurers ask you to sign a &quot;scope agreement&quot; that locks in the extent of
          damage and required repairs before the full scope has been determined. Never sign a scope
          agreement without having your own contractor review the damage first. Once you agree to
          the scope, it becomes much harder to add items later when hidden damage is discovered
          during repairs.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document Missed Scope
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you believe the insurer has underscoped your damage, documentation is your most
        powerful tool:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Independent inspections:</strong> Hire a licensed contractor or qualified
          inspector to perform a thorough inspection and prepare a written report documenting all
          damage, including areas the insurer did not address
        </li>
        <li>
          <strong>Destructive testing:</strong> In cases of water damage, opening walls, pulling up
          flooring, and accessing concealed spaces is often the only way to determine the true
          extent of damage — document this process with photos and video
        </li>
        <li>
          <strong>Moisture readings:</strong> Professional moisture meters can detect moisture in
          materials that appear dry to the naked eye — these readings provide objective evidence of
          water damage that a visual inspection would miss
        </li>
        <li>
          <strong>Thermal imaging:</strong> Infrared cameras can reveal moisture patterns, missing
          insulation, and other hidden conditions behind intact surfaces
        </li>
        <li>
          <strong>Detailed photographs:</strong> Every area of damage should be photographed from
          multiple angles, with measurements and reference points visible
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Invoke Appraisal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you and your insurer cannot agree on the scope and value of the loss, most homeowners
        policies include an{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal
        </Link>{' '}
        provision. Appraisal is a dispute resolution process where each side hires an appraiser,
        the two appraisers select an umpire, and any two of the three can set the amount of loss.
        Appraisal is typically faster and less expensive than litigation and is often very effective
        for scope and valuation disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help you at every stage of a scope dispute — from performing an independent damage
        assessment, to preparing a detailed competing estimate, to managing the appraisal process
        if it comes to that. Do not settle for less than the full cost of proper repairs.
      </p>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
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
