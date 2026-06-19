import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Matching: Achieving a Reasonable Uniform Appearance',
  description:
    'When a partial repair leaves a visibly mismatched appearance, your insurer may be required to pay to achieve a reasonably uniform look, including replacing undamaged adjacent areas. In California, the controlling phrase is &ldquo;the damaged area&rdquo; under 10 CCR &sect; 2695.9(a)(2); &ldquo;line of sight&rdquo; is the standard adopted in other states (Iowa, Texas), not California.',
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
        When a loss damages part of your home, the repair should not leave you with a patchwork
        result where new materials are visibly different from the undamaged areas around them. This
        is the concept of &quot;matching&quot; — the principle that repairs should achieve a
        reasonable uniform appearance, even if that means replacing more than just the directly
        damaged area.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Matching Means in Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Matching comes into play whenever partial repairs result in a noticeable visual difference
        between the repaired area and the surrounding undamaged area. This can happen with nearly
        any building material or finish:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Roofing:</strong> A section of roof is replaced with new shingles that differ in
          color, texture, or weathering from the remaining old shingles
        </li>
        <li>
          <strong>Siding:</strong> Partial siding replacement where the new panels do not match the
          existing color, profile, or material — especially when the original siding has been
          discontinued
        </li>
        <li>
          <strong>Flooring:</strong> A portion of hardwood, tile, or carpet is replaced but the new
          material does not match the surrounding floor in color, grain, or texture
        </li>
        <li>
          <strong>Paint:</strong> One wall is repainted after repair, but the fresh paint does not
          match adjacent walls due to fading, aging, or formula changes
        </li>
        <li>
          <strong>Countertops, cabinets, and fixtures:</strong> Partial replacement where the new
          items are visibly different from the remaining originals
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Basis: The NAIC Property/Casualty Model Regulation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some people argue that &quot;matching&quot; is not the correct term or that it is not
        addressed in insurance regulations. This is incorrect. The National Association of
        Insurance Commissioners (NAIC) adopted the <em>Unfair Property/Casualty Claims
        Settlement Practices Model Regulation</em> in 1990. That model regulation contains the
        matching language &mdash; it requires insurers to &ldquo;replace all such items in the
        area so as to conform to a reasonable uniform appearance&rdquo; when items replaced
        after a loss do not match the surrounding undamaged items.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a separate NAIC document from the broader NAIC <em>Unfair Claims Settlement
        Practices Act</em>, which addresses claim-handling standards generally but does not by
        itself contain matching language. A growing number of states have adopted versions of
        the property/casualty matching regulation &mdash; the exact count varies by source and
        by year, but it sits in the mid-teens to low twenties as of recent reporting. California
        is one of those states; the operative California matching authority is the regulation
        discussed in the next section.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The requirement is straightforward: if a partial repair leaves your home looking visibly
        inconsistent, the insurer must pay for the additional work needed to make the repaired
        area blend with the undamaged area. This may mean replacing an entire roof slope, an
        entire room&rsquo;s flooring, or an entire elevation of siding &mdash; not just the
        damaged section.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&rsquo;s Matching Regulation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California policyholders have specific regulatory authority for matching claims.{' '}
        <strong>10 CCR &sect;&nbsp;2695.9(a)(2)</strong> provides:
      </p>
      <CalloutBox variant="legal" title="10 CCR §2695.9(a)(2)">
        <p className="italic">
          When a loss requires replacement of items and the replaced items do not match in
          quality, color or size, the insurer shall replace all items in the damaged area so
          as to conform to a reasonably uniform appearance.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not just a general industry principle &mdash; it is a binding California
        regulation that insurers are required to follow. When disputing a matching claim in
        California, an insured may want to cite this regulation by name and section number
        in written correspondence with the insurer. The contested term in practice is
        &ldquo;damaged area&rdquo; &mdash; insurers tend to read it narrowly (the directly
        damaged section only), while plaintiff-side practice reads it as the area that has
        to be replaced for the result to look reasonably uniform (often the full slope, the
        full elevation, or the full continuous run of flooring).
      </p>

      <CalloutBox variant="important" title="Matching Can Dramatically Increase Your Settlement">
        <p>
          Do not accept partial repairs that leave your home looking patched together. If new
          roofing materials do not match the old, you may be entitled to a full roof replacement.
          If new flooring does not match the adjacent rooms, those rooms may need to be replaced
          as well. Matching can double or even triple the scope of covered repairs.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Discontinued and Unavailable Materials
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Matching disputes become particularly significant when the original materials are
        discontinued or no longer available. If your home has a specific siding profile that the
        manufacturer stopped producing, there may be no way to replace just the damaged section and
        achieve a match. In that case, the insurer&rsquo;s obligation to achieve a reasonable
        uniform appearance may require replacing all of the siding on the affected elevation — or
        even the entire home — with a new, consistent product.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same principle applies to roofing shingles, flooring products, tiles, and any other
        material where age, weathering, or product discontinuation makes a partial match impossible.
        Insurers sometimes argue they only need to pay for the damaged area, but in states that
        require a reasonable uniform appearance, the standard is the visual result, not the cause
        of the mismatch.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Depreciation on Undamaged Items Replaced for Matching: The Regulation Answers This
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recurring question within matching disputes is whether the insurer may apply
        depreciation to the <strong>undamaged</strong> items that are replaced solely to
        achieve a reasonably uniform appearance. For example, if matching requires replacing
        an entire roof when only one slope was damaged, can the insurer depreciate the
        material on the slopes that were not directly hit? <strong>The California Fair
        Claims Settlement Practices Regulations answer this directly: no.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the operative regulation, in full:
      </p>
      <CalloutBox variant="legal" title="10 CCR § 2695.9(a) — Full Text">
        <p className="italic">
          (a) When a residential or commercial property insurance policy provides for the
          adjustment and settlement of first party losses based on replacement cost, the
          following standards apply:
        </p>
        <p className="italic mt-3">
          (1) When a loss requires repair or replacement of an item or part, any consequential
          physical damage incurred in making the repair or replacement not otherwise excluded
          by the policy shall be included in the loss. The insured shall not have to pay for
          depreciation nor any other cost except for the applicable deductible.
        </p>
        <p className="italic mt-3">
          (2) When a loss requires replacement of items and the replaced items do not match in
          quality, color or size, the insurer shall replace all items in the damaged area so
          as to conform to a reasonably uniform appearance.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        The structure is plain on the face of the regulation. Both (a)(1) and (a)(2) are
        &ldquo;standards&rdquo; the regulation imposes on replacement-cost-policy losses
        under the (a) preamble. The (a)(1) rule that the insured pays only the deductible is
        a stand-alone sentence &mdash; it is not limited to the consequential-damage rule in
        the preceding sentence; it states an independent limit on what the insured pays. The
        (a)(2) matching obligation requires replacement of items in the damaged area to
        achieve uniform appearance. When the insurer is compelled by (a)(2) to replace items,
        the insured pays only the deductible &mdash; (a)(1) says so. Depreciating compelled
        matching replacements would force the insured to pay out of pocket to obtain the
        uniform appearance the regulation guarantees.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read together, the structure is straightforward. Both (a)(1) and (a)(2) are
        &ldquo;standards&rdquo; the regulation imposes on replacement-cost-policy losses
        under the (a) preamble. The (a)(1) rule that the insured pays only the deductible is
        a flat, stand-alone limit. The (a)(2) matching obligation requires replacement of
        undamaged items in the same damaged area to achieve uniform appearance. When the
        insurer is compelled by (a)(2) to replace items, the insured is not required to
        absorb depreciation on those replacements &mdash; (a)(1) says so. Depreciating
        compelled matching replacements would force the insured to pay out of pocket to
        obtain the uniform appearance the regulation guarantees.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two reinforcing points strengthen the conclusion. <strong>First,</strong> the labor
        to remove and reinstall the matching material is non-depreciable in any event under
        10 CCR &sect; 2695.9(f)(1). <strong>Second,</strong> the indemnity principle
        supports the result: the insured had a functioning, uniform roof (or siding, or
        floor) before the loss, did not elect to replace good material, and is made whole
        &mdash; not bettered &mdash; by restoring the pre-loss uniform condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers occasionally argue that (a)(1)&rsquo;s &ldquo;no depreciation&rdquo;
        sentence is grammatically tethered to the preceding consequential-damage sentence
        and does not reach (a)(2) matching items, or that replacing aged-but-undamaged
        material new-for-old confers a real betterment. These arguments cut against the
        natural structure of the regulation. They surface most often in actual-cash-value
        holdback calculations and on pure actual-cash-value policies rather than in
        final replacement-cost recoveries. On a replacement-cost policy, the matching scope
        is properly recovered at full replacement cost, period &mdash; the regulation does
        not contemplate the insured underwriting a cost the regulation itself compelled.
        For a fuller treatment of how depreciation is calculated under California law, see
        our article on{' '}
        <Link href="/resources/broad-evidence-rule-acv" className="text-[#2E74B5] underline">
          how depreciation is calculated under California law
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Argue Matching with Your Insurer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer is refusing to pay for matching, here are the steps to build your case:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the mismatch visually.</strong> Take clear photographs showing the
          repaired area next to the undamaged area. Side-by-side photos in the same lighting
          conditions are the most effective evidence.
        </li>
        <li>
          <strong>Get samples.</strong> If possible, retain samples of the original material and the
          proposed replacement material. Place them next to each other and photograph the
          difference.
        </li>
        <li>
          <strong>Research material availability.</strong> If the original product is discontinued,
          get documentation from the manufacturer or a supplier confirming it is no longer available.
        </li>
        <li>
          <strong>Cite your state&rsquo;s regulations.</strong> If your state has adopted the Model
          Fair Claims Act or has specific matching regulations, reference them by name and section
          number in your written correspondence with the insurer.
        </li>
        <li>
          <strong>Get a contractor&rsquo;s opinion.</strong> Have your contractor provide a written
          statement explaining why a partial repair will not achieve a uniform appearance and what
          scope of work is needed to match.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Matching Is Not Required
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard is &quot;reasonable uniform appearance,&quot; not &quot;identical.&quot; Minor
        differences that are not readily apparent to a reasonable person may not trigger a matching
        obligation. Also, matching generally applies to areas that are visible together — if
        the repaired area is on the back of the house and the unmatched area is on the front, the
        argument is weaker because they are not viewed at the same time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are in a dispute over matching and your insurer is refusing to budge, a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help you document the mismatch, identify the applicable regulations, and negotiate for
        the full scope of work needed to achieve a proper result.
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
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
