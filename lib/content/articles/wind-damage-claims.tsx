import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Wind Damage Insurance Claims',
  description:
    'How wind damage claims work, what\'s covered, disputes over wind vs. wear-and-tear, and how to document and fight for your full settlement.',
  summary:
    'Wind damage is generally covered, but insurers dispute wind versus wear-and-tear, especially on roofs. Document the wind event and the damage pattern, and frame wind as the cause of loss to defeat a wear-and-tear denial and get the full settlement.',
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
        Wind damage claims present unique challenges because wind damage can be difficult to
        distinguish from wear and tear — and insurance companies take advantage of that
        ambiguity. A roof that loses shingles in a storm may have been perfectly functional
        before the event, but the carrier will argue the shingles were old, worn, and
        &ldquo;ready to go.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers what wind damage looks like, how claims are handled, the most
        common disputes, and how to protect your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Wind Damage Looks Like</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wind damage to a structure takes many forms. The most common:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Missing, lifted, or creased shingles and tiles</li>
        <li>Damaged or detached ridge caps</li>
        <li>Torn or displaced flashing</li>
        <li>Broken or cracked siding</li>
        <li>Damaged soffit, fascia, and eaves</li>
        <li>Fallen trees and branches impacting structures</li>
        <li>Blown-off gutters and downspouts</li>
        <li>Broken windows from wind-driven debris</li>
        <li>Fence panels torn loose or collapsed</li>
        <li>Damaged patio covers, pergolas, and carports</li>
        <li>Antenna, satellite dish, or solar panel displacement</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Is Wind Damage Covered?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a standard HO-3 policy, wind is a covered peril for both the dwelling (Coverage A,
        open perils) and personal property (Coverage C, named perils — and wind/hail is
        specifically named). Wind damage is covered unless your policy contains a specific
        wind or hurricane exclusion, which is uncommon in California but exists in coastal
        areas of some states.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage question in wind claims is rarely whether wind is covered. It is whether
        the damage was caused by wind (covered) or by something else (excluded). That
        distinction is where most disputes live.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Wind vs. Wear and Tear</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common dispute in wind damage claims is whether the damage was caused by
        wind (covered) or pre-existing wear and tear (excluded). Carriers frequently use the
        age of the roof to argue that any damage is wear-related, even when a documented
        windstorm clearly caused the failure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal question is causation: did the wind cause the damage? If a 15-year-old roof
        was functioning — keeping water out, performing its intended purpose — before the
        storm, and is now missing shingles after the storm, the wind caused the damage. The
        age of the roof is relevant to depreciation, not to causation. A shingle does not
        need to be new to be functional.
      </p>

      <CalloutBox variant="legal" title="Condition Is Not Causation">
        <p className="mb-2">
          In California, the condition of a component before a loss does not negate coverage
          when an insured peril causes the damage. An old roof in worn condition is still
          functional until wind removes the shingles. The wind event — not the age — is the
          cause of loss.
        </p>
        <p>
          See{' '}
          <Link href="/resources/wear-and-tear-cause-of-loss" className="text-[#1F3964] underline font-medium">
            Wear and Tear: Condition Is Not Causation
          </Link>{' '}
          for the full legal analysis.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Cosmetic vs. Functional Damage</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies contain &ldquo;cosmetic damage exclusions&rdquo; for roofing — they
        will not pay to replace shingles that are only cosmetically damaged (dented, bruised,
        scuffed) but still function as a weather barrier. This endorsement is more common in
        hail-prone states but appears in some California policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fight is over the line between cosmetic and functional. A creased shingle may
        look cosmetic but the crease breaks the seal, allowing water intrusion. Granule loss
        accelerates UV degradation, shortening the remaining life of the roof. Damage that
        impairs future performance or reduces remaining useful life is functional — not
        merely cosmetic. See{' '}
        <Link href="/resources/cosmetic-damage-denials" className="text-[#1F3964] underline font-medium">
          Cosmetic Damage Denials
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting Wind Damage</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Photograph everything immediately after the storm.</strong> Include wide
          shots showing the overall roof and close-ups of each damaged area. Photograph
          from multiple angles. Include adjacent undamaged areas for comparison.
        </li>
        <li>
          <strong>Check weather records.</strong> Pull official wind speed reports for your
          area from the National Weather Service or a local weather station. High reported
          wind speeds corroborate that a wind event occurred. Even moderate sustained winds
          (40-50 mph) can damage roofing.
        </li>
        <li>
          <strong>Document neighboring properties.</strong> If your neighbors have similar
          damage, that corroborates a wind event and undermines the &ldquo;wear and tear&rdquo;
          argument. Photograph damage to nearby homes, fences, and trees.
        </li>
        <li>
          <strong>Get a professional inspection.</strong> Hire a licensed roofing contractor
          to inspect and provide a written report identifying wind damage vs. normal aging.
          A contractor who understands insurance work will note the patterns that distinguish
          wind damage from deterioration.
        </li>
        <li>
          <strong>Check interior damage.</strong> Wind damage to the roof often results in
          water intrusion. Check attics, ceilings, and walls for water staining that
          appeared after the storm. This consequential damage is also covered.
        </li>
        <li>
          <strong>Inspect Coverage B structures.</strong> Fences, sheds, detached garages,
          patio covers. These are often damaged in the same event and should be claimed
          together.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Matching Issue</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wind often damages part of a roof — not all of it. The insurer will want to repair
        only the damaged section. But if your roof has discontinued shingles that cannot be
        matched, a partial repair leaves your home with a visible patchwork appearance. In
        California, the{' '}
        <Link href="/resources/matching" className="text-[#1F3964] underline font-medium">
          matching
        </Link>{' '}
        doctrine requires the insurer to pay for enough replacement to achieve a reasonably
        uniform appearance. This may mean replacing an entire roof slope or the entire roof.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Insurer Tactics</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Blaming age alone.</strong> &ldquo;Your roof is 18 years old, so this is
          wear and tear.&rdquo; Age does not cause shingles to fly off. Wind causes shingles
          to fly off. Age may affect depreciation but not coverage.
        </li>
        <li>
          <strong>Sending a desk adjuster.</strong> The insurer may skip a physical
          inspection and deny based on aerial imagery. Demand an in-person inspection —
          wind damage is often visible only from the roof surface, not from satellite photos.
        </li>
        <li>
          <strong>Hiring a biased engineer.</strong> The carrier sends an engineer who
          attributes all damage to &ldquo;normal weathering.&rdquo; These reports can be
          challenged — see{' '}
          <Link href="/resources/engineering-reports-vs-coverage" className="text-[#1F3964] underline font-medium">
            Defeating Carrier Expert Reports
          </Link>.
        </li>
        <li>
          <strong>Partial payment with no matching.</strong> Paying to replace 20 shingles
          on a roof where the shingles are discontinued. This does not restore you to
          pre-loss condition.
        </li>
        <li>
          <strong>Excessive depreciation.</strong> Applying 70-80% depreciation to a
          15-year roof with a 30-year expected life. The depreciation should reflect actual
          remaining useful life, not an arbitrary percentage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Multiple Causes</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes wind damage combines with another cause. A weakened branch (decay) falls
        in a windstorm. An old roof (wear) fails in high wind. Under California&apos;s{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#1F3964] underline font-medium">
          efficient proximate cause
        </Link>{' '}
        doctrine, when a covered peril (wind) is the predominant cause of the loss, the
        entire loss is covered — even if an excluded peril (wear and tear) contributed.
        This is one of the strongest policyholder protections in California law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When to Get Help</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        If the insurer denies your wind claim based on wear and tear, refuses to apply
        matching, or offers a settlement that would not actually repair the damage, you have
        options. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
          Public Adjuster
        </Link>{' '}
        can document the wind damage, obtain competing expert reports, and negotiate or
        take the claim to{' '}
        <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">
          appraisal
        </Link>. If the denial itself is unreasonable, an{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#1F3964] underline font-medium">
          attorney
        </Link>{' '}
        may pursue bad faith.
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
