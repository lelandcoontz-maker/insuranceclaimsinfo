import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Policy Exclusions: What\'s Not Covered',
  description:
    'A guide to common insurance policy exclusions, when they may not apply, and California-specific rules that protect policyholders.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance policy covers some things and excludes others. Understanding what your policy
        does not cover is just as important as knowing what it does. Exclusions are specific
        provisions in your policy that remove coverage for certain causes of loss, types of property,
        or situations. If an exclusion applies, the insurer will not pay for that portion of the
        loss, even if the damage is real and significant.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Exclusions in Homeowner Policies
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Earth movement:</strong> Earthquakes, landslides, sinkholes, and earth settling are
          excluded from standard homeowner policies. Earthquake coverage requires a separate policy,
          often through the California Earthquake Authority (CEA).
        </li>
        <li>
          <strong>Flood:</strong> Water damage from flooding (rising water from external sources) is
          not covered by standard homeowner policies. Flood coverage is available through the
          National Flood Insurance Program (NFIP) or private flood insurers. This is distinct from
          water damage caused by burst pipes or appliance leaks, which is typically covered.
        </li>
        <li>
          <strong>Ordinance and law:</strong> Standard policies often exclude or limit coverage for
          the increased cost of repairs required to bring your home up to current building codes. An
          ordinance and law endorsement can fill this gap, and it is one of the most important
          endorsements to have on your policy.
        </li>
        <li>
          <strong>Mold (as a direct cause):</strong> Most policies exclude mold damage or impose
          severe sublimits. However, if mold develops as a result of a covered water loss, it may
          be covered as consequential damage. The distinction between mold as a direct cause and
          mold as a consequence of covered water damage is critical.
        </li>
        <li>
          <strong>Wear and tear:</strong> Insurance covers sudden and accidental losses, not gradual
          deterioration. A roof that fails due to age and lack of maintenance is not covered.
          However, if a windstorm damages an aging roof, the storm damage itself may still be
          covered.
        </li>
        <li>
          <strong>Neglect:</strong> If you fail to protect your property from further damage after a
          loss, the insurer can deny coverage for the additional damage. This is why it is important
          to make emergency repairs (tarping a roof, boarding up windows) immediately after a loss.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Exclusions May Not Apply
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Exclusions are not always the final word. There are important legal doctrines that can limit
        the reach of policy exclusions:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">The Ensuing Loss Doctrine</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policies contain an &ldquo;ensuing loss&rdquo; clause. This means that while the
        excluded peril itself is not covered, damage that results from a covered peril that follows
        may be. For example, if faulty construction (excluded) leads to a water leak that causes
        water damage (covered peril), the resulting water damage may be covered even though the
        underlying construction defect is not.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Concurrent Causation</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss is caused by two or more perils acting together, and at least one of those perils
        is covered, the question becomes whether the policy covers the loss. California historically
        followed the rule that if a covered peril was a contributing cause, the loss was covered.
        Many insurers responded by adding &ldquo;anti-concurrent causation&rdquo; clauses to their
        policies. These clauses attempt to deny coverage whenever an excluded peril is involved,
        regardless of whether a covered peril also contributed. The enforceability of these clauses
        continues to be litigated in California courts.
      </p>

      <CalloutBox variant="legal" title="California Favors Policyholders">
        <p>
          California law requires that ambiguities in insurance policies be interpreted in favor of
          the policyholder. If an exclusion is unclear or can be read in more than one way, the
          interpretation that provides coverage should prevail. This principle has been affirmed
          repeatedly by California courts.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Rules on Exclusions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California imposes additional requirements on how insurers apply exclusions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer bears the burden of proving that an exclusion applies. It is not your job to
          prove the exclusion does not apply.
        </li>
        <li>
          Exclusions must be conspicuous, plain, and clear. Buried or ambiguous exclusion language
          may not be enforceable.
        </li>
        <li>
          The insurer must specifically identify which exclusion applies and explain how it relates
          to your loss. A blanket denial without citing specific policy language violates
          California&rsquo;s Fair Claims Settlement Practices Act.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Exclusions vs. Limitations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is an important difference between an exclusion and a limitation. An exclusion removes
        coverage entirely for a specific peril or situation. A limitation caps or restricts coverage
        but does not eliminate it. For example, your policy might have a $10,000 sublimit on mold
        remediation. That is a limitation, not an exclusion. Mold is still covered, but only up to
        the specified amount. Similarly, jewelry may be covered for theft but subject to a $1,500 or
        $2,500 sublimit per item unless separately scheduled.
      </p>

      <CalloutBox variant="tip" title="Read Your Policy Before a Loss">
        <p>
          The best time to review your exclusions and limitations is before you need to file a claim.
          If you discover gaps in coverage now, you can often add endorsements to fill them. After
          a loss, it is too late to change the policy. A licensed Public Adjuster or insurance broker
          can review your policy and identify potential coverage gaps.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer denies part of your claim based on an exclusion, do not accept the denial
        at face value. Request the denial in writing with the specific policy language cited. Review
        the exclusion carefully to determine whether it truly applies to your situation. When in
        doubt, consult with a licensed Public Adjuster or an attorney experienced in insurance
        coverage disputes.
      </p>
    </>
  )
}
