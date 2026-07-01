import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "When a Claim Is Below the Deductible: What to Do",
  description:
    "How deductibles work, why carriers keep estimates below them, commonly missed items that push claims over the threshold, and when to hire a Public Adjuster.",
  summary:
    'Carriers have an incentive to keep estimates just under your deductible so nothing is paid. Capture the full scope, including commonly missed items, to push a borderline claim over the threshold; a Public Adjuster can help on close calls.',
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
        A tree limb falls through a section of roof during a storm. The homeowner calls the
        insurance company. A field adjuster walks the property, writes a quick estimate, and
        announces that the damage totals $3,800 &mdash; less than the policy&rsquo;s $5,000
        deductible. No payment will be issued. The homeowner, disappointed but trusting the
        adjuster&rsquo;s assessment, decides not to pursue the claim any further and pays for
        repairs out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Six months later, the homeowner hires a contractor for an unrelated project. The
        contractor notices water staining on the attic decking, damaged insulation, mold
        growth behind a wall, and a cracked collar tie &mdash; all resulting from the original
        storm damage that was supposedly only $3,800. The actual cost to repair everything
        properly exceeds $18,000. The deductible is no longer an issue. The issue is that the
        carrier&rsquo;s initial estimate captured a fraction of the actual damage, and the
        homeowner was led to believe the claim was not worth pursuing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This scenario is far more common than most policyholders realize. Borderline
        deductible claims represent one of the most significant areas where carrier incentives
        and policyholder interests diverge &mdash; and where incomplete scoping can cost
        homeowners thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Deductibles Work in Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/deductibles-guide" className="text-[#2E74B5] underline hover:text-blue-900">
          deductible
        </Link>{' '}
        is the amount the policyholder must pay out of pocket before the insurance carrier
        begins to pay on a covered claim. If the policy has a $5,000 deductible and the
        covered loss totals $20,000, the carrier pays $15,000 and the policyholder absorbs
        the first $5,000. If the covered loss totals $4,500, the carrier pays nothing &mdash;
        the entire loss falls within the deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners policies use a flat dollar deductible &mdash; $1,000, $2,500, $5,000,
        or higher. Some policies, particularly in catastrophe-prone areas, use percentage-based
        deductibles tied to the dwelling coverage limit (e.g., 1 percent or 2 percent of
        Coverage A). A policyholder with a $600,000 dwelling limit and a 2 percent deductible
        would have a $12,000 deductible for certain covered events.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical point for policyholders to understand is this: the deductible is an
        all-or-nothing threshold for whether the carrier pays anything, but once the loss
        exceeds the deductible, the carrier pays the full amount above it. A loss that is $1
        over the deductible triggers a carrier payment. A loss that is $1 under it triggers
        nothing. This creates an enormous incentive dynamic around claims that are close to
        the deductible amount.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier Incentive to Keep Estimates Below the Deductible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        From the carrier&rsquo;s perspective, a claim that comes in below the deductible is
        the most financially favorable outcome possible: the claim is reported, investigated,
        and closed with zero payment. The carrier incurs some administrative cost, but the
        actual indemnity payment is zero. Every dollar of damage that is not captured in the
        estimate moves the claim closer to &mdash; or below &mdash; that zero-payment
        threshold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean that every carrier adjuster deliberately underestimates borderline
        claims. But the incentive structure creates conditions where underestimation is more
        likely to go unchallenged:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Rushed inspections.</strong> Field adjusters handling catastrophe loads may
          spend 20 to 30 minutes on a property inspection that should take two hours. A quick
          walk-through may capture the visible damage on the roof but miss water intrusion
          damage in the attic, behind walls, or in ceiling cavities that requires more
          thorough investigation.
        </li>
        <li>
          <strong>Surface-level scoping.</strong> The adjuster photographs the obvious damage
          &mdash; missing shingles, a broken window, a downed fence &mdash; and writes an
          estimate for those visible items. Interior damage, secondary damage from water
          intrusion, structural issues behind finished surfaces, and code upgrade
          requirements are simply not included because they were not investigated.
        </li>
        <li>
          <strong>Exclusion of overhead and profit.</strong> The carrier&rsquo;s initial
          estimate may omit{' '}
          <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline hover:text-blue-900">
            general contractor overhead and profit
          </Link>
          , which typically adds 20 percent to the total repair cost (10 percent overhead and
          10 percent profit). On a $4,500 estimate, adding overhead and profit pushes the
          total to $5,400 &mdash; above a $5,000 deductible. The omission of overhead and
          profit is one of the most common ways borderline claims are kept below the
          threshold.
        </li>
        <li>
          <strong>No follow-up on potential hidden damage.</strong> A competent adjuster who
          sees roof damage from a storm should investigate for corresponding interior damage
          &mdash; water staining, insulation damage, mold conditions, damaged decking. When
          the adjuster does not open walls, check the attic, or look behind affected areas,
          the resulting estimate reflects only the surface damage.
        </li>
      </ul>

      <CalloutBox variant="warning" title="An Estimate Below the Deductible Is Not the End">
        <p>
          If a carrier adjuster tells a policyholder that the damage is below the deductible,
          that is the carrier&rsquo;s estimate &mdash; not a final determination. The
          policyholder has every right to obtain independent estimates, document additional
          damage the adjuster missed, and challenge the scope of the carrier&rsquo;s
          assessment.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commonly Missed Items That Push Claims Over the Deductible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The difference between a below-deductible claim and an above-deductible claim
        frequently comes down to whether the following items are included in the scope:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        General Contractor Overhead and Profit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a repair requires the coordination of three or more trades (roofing, drywall,
        painting, for example), the use of a general contractor is reasonable and necessary.
        A general contractor&rsquo;s{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline hover:text-blue-900">
          overhead and profit
        </Link>{' '}
        &mdash; typically 10 percent each, applied to the repair estimate &mdash; is a
        legitimate cost of repair that should be included in the loss calculation. Many
        carrier estimates omit this line item entirely, particularly on smaller claims where
        including it would push the total above the deductible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Code Upgrade Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When property is repaired, the work must comply with current building codes. If the
        damaged roof section used older materials or methods that no longer meet code, the
        repair must incorporate{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
          code upgrades
        </Link>
        . Common code-driven additions include enhanced nailing patterns, upgraded underlayment,
        ice and water shield in valleys and at eaves, upgraded electrical work behind opened
        walls, and energy efficiency improvements. These costs are real, they are required by
        law, and they belong in the estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Water Intrusion and Secondary Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roof damage almost always allows water to enter the structure. Even if the visible
        leak is small, water can travel along rafters, sheathing, and framing members before
        reaching finished surfaces. The resulting damage may include saturated insulation,
        stained or damaged drywall, warped or delaminated plywood decking, and conditions
        conducive to{' '}
        <Link href="/resources/mold-losses" className="text-[#2E74B5] underline hover:text-blue-900">
          mold growth
        </Link>
        . Identifying this damage typically requires accessing the attic, removing
        compromised materials for inspection, and in some cases, using moisture meters or
        thermal imaging to trace the path of water intrusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Matching Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a portion of a roof, a section of siding, or an area of flooring is damaged, the
        repaired section must{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline hover:text-blue-900">
          reasonably match
        </Link>{' '}
        the undamaged areas. If the roofing material is discontinued, weathered beyond the
        point of color matching, or architecturally distinct in a way that makes partial
        replacement conspicuous, the scope of repair may need to be expanded to include
        additional undamaged material. Carrier estimates frequently limit the scope to the
        damaged area only, ignoring matching requirements that can significantly increase the
        repair cost.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Debris Removal and Temporary Repairs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost to remove the fallen tree limb, clear debris from the roof, tarp the damaged
        area, and perform{' '}
        <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] underline hover:text-blue-900">
          emergency temporary repairs
        </Link>{' '}
        is a covered expense under most policies. These costs &mdash; which can easily total
        $500 to $2,000 or more &mdash; are sometimes omitted from the carrier&rsquo;s initial
        estimate or treated as separate from the loss total. They should be included in the
        overall scope of the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Interior Damage Often Overlooked
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Storm damage claims frequently involve interior consequences that are not immediately
        visible or that develop over time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Ceiling and wall damage from water intrusion</li>
        <li>Damaged light fixtures, electrical outlets, or wiring exposed to moisture</li>
        <li>Carpet, padding, or flooring damaged by water tracking down interior walls</li>
        <li>Personal property damage from water intrusion</li>
        <li>Paint damage, staining, or texture damage that requires repainting entire rooms
          to maintain a uniform appearance</li>
        <li>HVAC ductwork contamination if water enters the system</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Penny Wise, Pound Foolish&rdquo; Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders, particularly those with higher deductibles, decide not to file a
        claim because the visible damage appears to be close to or below the deductible. The
        reasoning seems sound: why file a claim, risk a rate increase or non-renewal, and go
        through the hassle of the claims process for a payment of a few hundred dollars over
        the deductible?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem with this reasoning is that it assumes the visible damage is the total
        damage. In practice, the visible damage is often the tip of the iceberg. A
        policyholder who decides not to file based on a cursory assessment of the damage may
        be walking away from a five-figure claim. Worse, if the underlying damage is not
        properly repaired, it can worsen over time &mdash; leading to mold, structural
        deterioration, or additional water damage that may not be covered later because the
        original cause of loss was not timely reported.
      </p>

      <CalloutBox variant="important" title="File the Claim, Then Decide">
        <p>
          The decision about whether to pursue a claim should be made after a thorough
          assessment of the full scope of damage &mdash; not before. Filing a claim and
          having the damage properly documented does not obligate the policyholder to accept
          the carrier&rsquo;s estimate. But failing to file means the policyholder may lose
          the right to recover for damage that turns out to be far more extensive than
          initially appeared.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documentation Strategies for Borderline Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim appears to be near the deductible threshold, thorough documentation is
        essential to ensure the full scope of loss is captured:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photograph everything before any repairs.</strong> Take detailed
          photographs and video of all visible damage from multiple angles. Include wide
          shots that show the context of the damage and close-ups that show the detail.
          Photograph the interior below any roof penetration, the attic above the damaged
          area, and any areas where water may have traveled.
        </li>
        <li>
          <strong>Document the damage progression.</strong> If water intrusion damage
          develops or worsens over days following the event, photograph the progression.
          This establishes that the damage is related to the covered event and not a
          pre-existing condition.
        </li>
        <li>
          <strong>Obtain independent contractor estimates.</strong> Before the carrier&rsquo;s
          adjuster arrives &mdash; or immediately after receiving a below-deductible
          determination &mdash; obtain written estimates from one or more licensed contractors.
          Ask the contractor to include all components of the repair: demolition, structural
          repair, code upgrades, finish work, and overhead and profit.
        </li>
        <li>
          <strong>Request a moisture inspection.</strong> If water intrusion is suspected,
          request that the carrier&rsquo;s adjuster conduct moisture testing using a moisture
          meter or thermal imaging camera. If the adjuster declines, consider hiring a
          moisture inspection firm independently. The results may reveal damage not visible
          to the naked eye.
        </li>
        <li>
          <strong>Keep all receipts for emergency repairs.</strong> Every dollar spent on
          tarping, board-up, debris removal, and other emergency measures is part of the
          claim total. These costs should be included in the overall scope of loss.
        </li>
        <li>
          <strong>Put everything in writing.</strong> If the carrier&rsquo;s adjuster verbally
          tells the policyholder that the damage is below the deductible, follow up in writing
          and request a copy of the adjuster&rsquo;s{' '}
          <Link href="/resources/how-to-read-xactimate-estimate" className="text-[#2E74B5] underline hover:text-blue-900">
            written estimate
          </Link>{' '}
          showing the line items that were included and excluded. This creates a record that
          can be used to challenge the scope if additional damage is later discovered.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Hire a Public Adjuster for Borderline Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders often assume that{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline hover:text-blue-900">
          Public Adjusters
        </Link>{' '}
        are only worth engaging on large claims. In reality, borderline deductible claims are
        among the situations where a Public Adjuster can add the most value relative to cost.
        A Public Adjuster brings the expertise to identify damage the carrier&rsquo;s adjuster
        missed, the knowledge to include line items (overhead and profit, code upgrades,
        matching) that push the claim above the deductible, and the advocacy perspective to
        challenge an inadequate scope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider engaging a Public Adjuster when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The carrier&rsquo;s estimate places the damage within 30 percent of the deductible
          (either above or below) &mdash; claims in this range are most likely to be
          improperly scoped.
        </li>
        <li>
          The carrier&rsquo;s adjuster spent less than an hour on the inspection, did not
          access the attic or crawl spaces, and did not investigate for secondary or hidden
          damage.
        </li>
        <li>
          The carrier&rsquo;s estimate does not include overhead and profit, code upgrades,
          or matching &mdash; items that are frequently owed but routinely excluded.
        </li>
        <li>
          The policyholder has received independent contractor estimates that are significantly
          higher than the carrier&rsquo;s estimate.
        </li>
        <li>
          The damage involves water intrusion, which almost always produces more damage than
          is initially visible.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Cost of Not Pursuing a Valid Claim">
        <p>
          A policyholder who accepts a below-deductible determination on what is actually a
          $15,000 loss does not just lose $10,000 in insurance recovery. The policyholder
          also risks living with improperly repaired damage that worsens over time, potentially
          creating health hazards (mold), structural problems, and additional repair costs that
          will not be covered because the original loss was not properly documented and claimed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reopening a Closed Below-Deductible Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a policyholder discovers additional damage after a claim has been closed as
        below the deductible, the claim can typically be{' '}
        <Link href="/resources/reopening-closed-claims" className="text-[#2E74B5] underline hover:text-blue-900">
          reopened
        </Link>{' '}
        or supplemented. The policyholder should notify the carrier in writing that additional
        damage related to the original loss has been discovered, provide documentation of the
        additional damage, and request that the carrier re-inspect the property or review
        the supplemental documentation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Time is important. Under California law, the statute of limitations for a breach of
        contract claim against an insurer is generally four years, but policy conditions may
        impose shorter timeframes for reporting losses or submitting proof of loss. The sooner
        additional damage is reported, the stronger the policyholder&rsquo;s position.
      </p>

      {/* ── Related Reading ── */}
      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline hover:text-blue-900">
              Overhead and Profit
            </Link>{' '}
            &mdash; Why general contractor markup belongs in every multi-trade estimate
          </li>
          <li>
            <Link href="/resources/commonly-missed-items" className="text-[#2E74B5] underline hover:text-blue-900">
              Commonly Missed Items in Insurance Estimates
            </Link>{' '}
            &mdash; Line items carriers routinely exclude
          </li>
          <li>
            <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
              Code Upgrade Coverage
            </Link>{' '}
            &mdash; How ordinance or law coverage applies to repairs
          </li>
          <li>
            <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline hover:text-blue-900">
              Scoping the Loss
            </Link>{' '}
            &mdash; How to ensure all damage is captured in the claim
          </li>
          <li>
            <Link href="/resources/deductibles-guide" className="text-[#2E74B5] underline hover:text-blue-900">
              Deductibles Guide
            </Link>{' '}
            &mdash; How deductibles work and common misconceptions
          </li>
        </ul>
      </CalloutBox>

      {/* ── Sources & Further Reading ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Merlin Law Group</strong> &mdash; A nationally recognized policyholder
          advocacy firm whose blog has extensively addressed the problem of inadequate carrier
          scoping, overhead and profit disputes, and the tactics used to minimize claim
          estimates. As Merlin Law Group has noted, &ldquo;the carrier&rsquo;s estimate is
          not a ceiling on the claim &mdash; it is a starting point for negotiation, and
          policyholders should never accept it as the final word on the scope of their
          loss.&rdquo; Search for their publications at propertyinsurancecoveragelaw.com.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; A nonprofit consumer advocacy
          organization that provides resources for policyholders navigating the claims
          process, including guidance on challenging inadequate estimates and understanding
          deductible mechanics. Search for their claim tips at uphelp.org.
        </li>
        <li>
          <strong>National Association of Public Insurance Adjusters (NAPIA)</strong> &mdash;
          The professional association for Public Adjusters, which has published educational
          materials on proper claim scoping, the importance of thorough inspections, and the
          role of Public Adjusters in borderline claims.
        </li>
        <li>
          <strong>American Policyholder Association</strong> &mdash; Has published resources
          addressing common claim handling deficiencies including insufficient scoping,
          omission of overhead and profit, and failure to investigate hidden damage in
          property claims.
        </li>
        <li>
          <strong>International Association of Certified Home Inspectors (InterNACHI)</strong>
          &mdash; Provides standards and educational resources on property inspection
          methodology, including moisture detection, attic inspection, and identification of
          water intrusion damage that is relevant to insurance claim documentation.
        </li>
        <li>
          <strong>California Department of Insurance</strong> &mdash; The CDI&rsquo;s Fair
          Claims Settlement Practices Regulations (10 CCR 2695.7) require carriers to
          conduct thorough investigations before making claim determinations. A carrier that
          issues a below-deductible determination based on an incomplete inspection may be
          in violation of these regulations. Available at insurance.ca.gov.
        </li>
      </ul>

      {/* ── Disclaimer ── */}
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          or insurance advice. Policy language, deductible structures, and applicable law vary
          by carrier, by policy form, and by state. The strategies discussed are general
          guidance and may not apply to every claim or policy. Consult with a licensed public
          adjuster or attorney regarding your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Told Your Claim Is Below the Deductible?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster can re-inspect your property, identify damage the
          carrier&rsquo;s adjuster missed, and prepare a comprehensive estimate that captures
          the full scope of loss &mdash; including overhead and profit, code upgrades, and
          hidden damage.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
