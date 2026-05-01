import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Hail Damage Insurance Claims',
  description:
    'How to handle a hail damage claim — from documenting the damage to fighting for matching and full replacement when the carrier wants to patch.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage is one of the most common property insurance claims in the United States,
        particularly for roofing. A single hailstorm can damage thousands of properties in a
        region, and insurance companies handle these claims with an assembly-line efficiency
        that often shortchanges individual homeowners. Understanding how hail damage is assessed,
        documented, and paid is essential to getting a fair outcome on your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Hail Damage Is Assessed</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage to roofing materials is identified through a combination of visual inspection
        and physical testing. A qualified inspector will typically climb onto the roof and examine
        specific areas &mdash; called test squares &mdash; for evidence of hail impact. Each test
        square is a 10-foot by 10-foot section of roof, and the inspector counts the number of
        identifiable hail strikes within that area. For a more detailed explanation of how test
        squares work and what engineers look for, see our guide to{' '}
        <Link href="/resources/hail-damage-science" className="text-blue-700 underline hover:text-blue-900">
          the science of hail damage
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On asphalt shingles, hail impacts typically appear as round or irregular depressions where
        the granules have been dislodged, exposing the underlying mat. The impact may feel soft or
        spongy when pressed with a finger. On metal surfaces &mdash; gutters, flashing, vents, and
        downspouts &mdash; hail leaves characteristic round dents. On wood shakes or shingles,
        impacts may appear as splits or fractures along the grain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail size is measured by comparing it to common objects: pea-sized (1/4 inch), marble-sized
        (1/2 inch), quarter-sized (1 inch), golf ball-sized (1-3/4 inches), and baseball-sized
        (2-3/4 inches). Hail of 1 inch or larger can cause functional damage to most roofing
        materials. Even smaller hail can damage older or weathered shingles whose granule bond has
        weakened over time.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Functional vs. Cosmetic Damage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies increasingly distinguish between &quot;functional&quot; and
        &quot;cosmetic&quot; damage. Functional damage compromises the material&apos;s ability to
        perform its intended purpose &mdash; keeping water out, for example. Cosmetic damage affects
        appearance without allegedly reducing performance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is often used to deny or minimize claims, and it is frequently
        misapplied. Granule loss from hail impact exposes the asphalt mat to UV radiation,
        accelerating deterioration and shortening the roof&apos;s useful life. That is functional
        damage, even if the roof is not actively leaking today. Some policies now include
        &quot;cosmetic damage exclusions&quot; that attempt to eliminate coverage for this type
        of damage entirely. If your policy contains such an exclusion, review it carefully &mdash;
        and see our article on{' '}
        <Link href="/resources/cosmetic-damage-denials" className="text-blue-700 underline hover:text-blue-900">
          cosmetic damage denials
        </Link>{' '}
        for strategies to respond.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting Hail Damage</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thorough documentation is the foundation of a successful hail damage claim. Hail damage
        can be subtle, and evidence can deteriorate over time as granules continue to wash away
        and weathering obscures impact marks. Document the damage as soon as possible after the
        storm:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get a professional roof inspection</strong> from a qualified roofing contractor
          &mdash; not just a visual assessment from the ground. The inspector should document
          damage on every slope, count impacts per test square, and photograph each area of damage
          with close-up and wide-angle shots.
        </li>
        <li>
          <strong>Document damage to soft metals.</strong> Gutters, vents, flashing, downspouts,
          and HVAC equipment are particularly susceptible to hail and provide strong corroborating
          evidence. Dented soft metals confirm that hail of sufficient size struck the property.
        </li>
        <li>
          <strong>Check all exterior surfaces:</strong> siding, window screens, window frames,
          outdoor furniture, fences, AC condensers, and vehicles. Hail does not discriminate
          &mdash; if it damaged the roof, it likely damaged other surfaces as well.
        </li>
        <li>
          <strong>Photograph collateral damage</strong> to vehicles, outdoor furniture, or
          landscaping. These items serve as independent evidence of the storm&apos;s severity.
        </li>
        <li>
          <strong>Obtain weather reports.</strong> The National Weather Service, local news
          stations, and services like the Storm Prediction Center maintain records of hail events,
          including location, time, and reported hail size. These reports establish that a damaging
          hailstorm occurred in your area on a specific date.
        </li>
        <li>
          <strong>Get independent contractor estimates.</strong> Before or alongside the
          insurer&apos;s inspection, obtain a written estimate from a licensed roofing contractor
          detailing the scope of damage and cost of repair or replacement. This serves as a
          benchmark to compare against the insurer&apos;s assessment.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Save the Hailstones">
        <p>
          If a significant hailstorm strikes, collect and photograph some of the hailstones next to
          a ruler, coin, or other common object for scale. Hailstones melt quickly, and
          photographic evidence of hail size can support your claim later, especially if the
          insurer disputes whether the hail was large enough to cause damage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Adjuster Tactics on Hail Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because hail events generate large volumes of claims, insurance companies often deploy
        adjusters with instructions to process them quickly and minimize payouts. Several
        recurring tactics appear across hail claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cosmetic-only classification.</strong> The adjuster acknowledges hail hit the
          roof but characterizes all damage as cosmetic, denying that it affects the roof&apos;s
          performance. As discussed above, this classification is often incorrect &mdash; granule
          loss from hail impact shortens roof life and constitutes functional damage.
        </li>
        <li>
          <strong>Pre-existing damage arguments.</strong> The adjuster attributes damage to age,
          wear and tear, manufacturing defects, or prior storms rather than the claimed hail
          event. This requires the insurer to prove the damage existed before the storm &mdash;
          which is often difficult when there is no pre-loss inspection. For more on this tactic,
          see our guide to{' '}
          <Link href="/resources/pre-existing-vs-storm-damage" className="text-blue-700 underline hover:text-blue-900">
            pre-existing damage vs. storm damage
          </Link>.
        </li>
        <li>
          <strong>Partial replacement instead of full.</strong> The adjuster approves replacement
          of only the slopes or sections that were directly hit, leaving undamaged sections in
          place. This creates a mismatched roof and raises the matching issue discussed below.
        </li>
        <li>
          <strong>Insufficient test squares.</strong> The adjuster inspects only one or two test
          squares &mdash; sometimes on slopes with less exposure to the storm &mdash; and
          concludes there is insufficient damage to warrant replacement. A thorough inspection
          should cover multiple test squares on all slopes.
        </li>
        <li>
          <strong>Quick settlement offers.</strong> After large hail events, carriers may issue
          checks rapidly, hoping policyholders will cash them and consider the matter closed
          before discovering the full extent of the damage.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Sign a Final Release Prematurely">
        <p>
          If the insurer presents a &quot;full and final&quot; release or settlement agreement,
          read it carefully before signing. Some releases waive your right to reopen the claim
          or file a supplement if additional damage is discovered. Have the damage independently
          assessed before agreeing to any final settlement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Matching Requirement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the biggest disputes in hail claims is{' '}
        <Link href="/resources/matching" className="text-blue-700 underline hover:text-blue-900">
          matching
        </Link>. If hail damages one slope of a roof, the carrier may only want to replace
        that slope. But new shingles will not match the weathered existing shingles on the
        undamaged slopes &mdash; different color, different texture, different granule pattern. The
        result is a two-tone roof that did not exist before the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the loss, the policyholder had a uniform roof. After the loss, they deserve a
        uniform roof. In California, this principle is backed by regulation. Under{' '}
        <strong>10 CCR &sect; 2695.9(d)</strong>, when a loss requires replacement of items and the
        replaced items do not reasonably match adjacent undamaged items in quality, color, or size,
        the insurer must pay the reasonable cost to replace the undamaged items to achieve a
        uniform appearance. This is not optional &mdash; it is a binding California regulation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The matching argument extends beyond the roof itself. If hail damages siding on one wall,
        the same matching principle applies to the remaining walls if a reasonable match cannot be
        achieved. The same is true for gutters, fencing, and other exterior components where
        partial replacement would create a visibly inconsistent appearance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Do not Forget Other Structures and Components
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail does not just hit roofs. A thorough claim should include damage to all affected
        components of the property:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Other structures (Coverage B):</strong> Fences, sheds, detached garages, pergolas,
          outdoor lighting, and garden features. See our guide to{' '}
          <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
            other structures and debris removal
          </Link>.
        </li>
        <li>
          <strong>Siding and exterior paint:</strong> Hail can crack vinyl siding, dent aluminum
          siding, and chip painted surfaces.
        </li>
        <li>
          <strong>Windows and screens:</strong> Cracked glass and torn or dented window screens are
          commonly missed in initial inspections.
        </li>
        <li>
          <strong>HVAC equipment:</strong> Outdoor air conditioning condensers and heat pump units
          have aluminum fins that are easily damaged by hail. Damaged fins reduce airflow and
          system efficiency.
        </li>
        <li>
          <strong>Skylights:</strong> Hail can crack or shatter skylight lenses, leading to leaks.
        </li>
        <li>
          <strong>Personal property:</strong> Outdoor furniture, grills, landscaping, and vehicles
          parked outside may be covered under different sections of the policy.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Depreciation Issues in Hail Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is a significant factor in hail claims because roofing materials age. If a
        15-year-old roof is damaged by hail, the insurer will depreciate the roofing materials based
        on the consumed useful life. However, several depreciation practices in hail claims are
        problematic and should be challenged:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Depreciating labor.</strong> The cost of labor to install a new roof does not
          depreciate. A roofer charges the same amount to tear off and install shingles regardless
          of whether the old roof was 5 years old or 20. Several courts have held that labor
          should not be depreciated. See our article on{' '}
          <Link href="/resources/labor-depreciation" className="text-blue-700 underline hover:text-blue-900">
            labor depreciation
          </Link>.
        </li>
        <li>
          <strong>Excessive depreciation rates.</strong> An insurer might assign depreciation rates
          that do not reflect the actual condition of the roof before the loss. A well-maintained
          20-year roof with a 30-year warranty should not be depreciated as if it were at the end
          of its useful life. For more on this issue, see{' '}
          <Link href="/resources/excessive-depreciation" className="text-blue-700 underline hover:text-blue-900">
            excessive depreciation
          </Link>.
        </li>
        <li>
          <strong>Blanket depreciation.</strong> Applying a single depreciation percentage to the
          entire roof estimate instead of depreciating individual components based on their actual
          age and condition. Underlayment, flashing, drip edge, and ridge caps may all have
          different useful lives than the shingles themselves.
        </li>
        <li>
          <strong>Depreciating undamaged matching areas.</strong> If the insurer agrees to pay for
          matching, they should not depreciate the undamaged portions that must be replaced to
          achieve a uniform appearance. The undamaged materials were not worn out &mdash; they are
          being replaced solely because the new materials will not match.
        </li>
      </ul>

      <CalloutBox variant="important" title="Review Depreciation Line by Line">
        <p>
          When you receive the insurer&apos;s estimate, examine the depreciation applied to every
          line item. If labor is being depreciated, if blanket percentages are being applied across
          all components, or if the rates seem unreasonably high, challenge the depreciation in
          writing with a specific explanation of why each item is incorrect. A{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          can review the estimate and identify improper depreciation on your behalf.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Involve a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail claims can appear straightforward, but they often involve technical disputes about
        damage assessment, matching, depreciation, and scope that significantly affect the
        settlement amount. Consider involving a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          licensed Public Adjuster
        </Link>{' '}
        if:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer&apos;s estimate is significantly lower than independent contractor estimates
        </li>
        <li>
          The insurer is classifying functional damage as cosmetic
        </li>
        <li>
          The insurer refuses to pay for matching when partial replacement creates a visibly
          inconsistent appearance
        </li>
        <li>
          You believe the insurer missed damage to other structures, siding, HVAC, or other
          components
        </li>
        <li>
          Depreciation appears excessive or has been applied to items that should not be depreciated
        </li>
        <li>
          The insurer is attributing hail damage to pre-existing conditions without adequate evidence
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster works for the policyholder &mdash; not the insurance company &mdash; and
        can conduct an independent damage assessment, prepare a comprehensive estimate, and
        negotiate directly with the insurer to reach a fair settlement. For more on what a Public
        Adjuster does and what to expect, see our{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          guide to Public Adjusters
        </Link>.
      </p>
    </>
  )
}
