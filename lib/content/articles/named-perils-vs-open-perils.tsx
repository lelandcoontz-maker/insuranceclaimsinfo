import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Named Perils vs. Open Perils: Why Your Contents Aren\'t Covered the Same as Your House',
  description:
    'The HO-3 split explained: your dwelling is covered for all risks, but your personal property is only covered for specific named perils. What this means and how to fix it.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a split built into the most common homeowners policy that most people never
        notice until it costs them money. Your house and your belongings are not covered the same
        way. Your dwelling gets broad protection. Your contents get narrow protection. This guide
        explains the difference and why it matters.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The HO-3 Split
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard HO-3 homeowners policy covers your dwelling (Coverage A) on an
        &ldquo;open perils&rdquo; basis and your personal property (Coverage C) on a
        &ldquo;named perils&rdquo; basis. These are fundamentally different approaches to
        coverage, and the difference can determine whether your claim is paid or denied.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What &ldquo;Open Perils&rdquo; Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Open perils &mdash; also called &ldquo;all risk&rdquo; or &ldquo;special form&rdquo;
        &mdash; means the policy covers damage from any cause unless that cause is specifically
        excluded. The policy does not list what is covered. It covers everything and then lists
        what is not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the broader, more protective approach. If your dwelling is damaged and the cause
        is not listed as an exclusion, it is covered. Period. The insurer bears the burden of
        proving an exclusion applies. You do not need to prove what caused the damage beyond
        showing that a loss occurred.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common exclusions under an open-perils dwelling coverage include flood, earthquake,
        neglect, wear and tear, insects, and intentional acts. But everything not on that list
        is covered. A tree falls on your house &mdash; covered. A car crashes into your living
        room &mdash; covered. An ice dam causes water damage &mdash; covered. You do not need to
        match the damage to a specific listed peril.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What &ldquo;Named Perils&rdquo; Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Named perils &mdash; also called &ldquo;broad form&rdquo; &mdash; means the policy only
        covers damage caused by perils specifically listed in the policy. If the cause of your
        loss is not on the list, there is no coverage. The list is exclusive. If it is not named,
        it is not covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard HO-3, the named perils for personal property (Coverage C) are:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Fire or lightning</li>
        <li>Windstorm or hail</li>
        <li>Explosion</li>
        <li>Riot or civil commotion</li>
        <li>Aircraft</li>
        <li>Vehicles</li>
        <li>Smoke</li>
        <li>Vandalism or malicious mischief</li>
        <li>Theft</li>
        <li>Volcanic eruption</li>
        <li>Falling objects</li>
        <li>Weight of ice, snow, or sleet</li>
        <li>Accidental discharge or overflow of water or steam</li>
        <li>Sudden and accidental tearing apart, cracking, burning, or bulging of certain systems</li>
        <li>Freezing of plumbing, heating, AC, or sprinkler systems</li>
        <li>Sudden and accidental damage from artificially generated electrical current</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        That is the complete list. Sixteen perils. If the cause of damage to your personal
        property is not one of those sixteen things, you have no coverage under a standard HO-3
        contents provision.
      </p>

      <CalloutBox variant="warning" title="The Burden of Proof Flips">
        <p>
          Under open perils (dwelling), the insurer must prove an exclusion applies to deny your
          claim. Under named perils (contents), you must prove the loss was caused by one of the
          listed perils. This is a massive difference. If you cannot identify which named peril
          caused the damage, you lose. If something simply breaks, disappears, or degrades and
          you cannot point to a listed cause, named-perils coverage does not help you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters in Practice
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are real scenarios where the open-perils/named-perils split creates different
        outcomes for your dwelling and your contents:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Your child spills juice on your hardwood floor:</strong> The floor (part of the
          dwelling, open perils) is likely covered &mdash; accidental damage is not excluded. But
          the rug underneath (personal property, named perils) may not be covered because
          &ldquo;spilled liquid&rdquo; is not a named peril.
        </li>
        <li>
          <strong>A power surge damages your built-in oven and your countertop TV:</strong> The
          oven (permanently installed, part of dwelling) is covered under open perils. The TV
          (personal property) is covered only if &ldquo;sudden and accidental damage from
          artificially generated electrical current&rdquo; applies, and many policies limit or
          exclude power surge damage to electronics.
        </li>
        <li>
          <strong>Your furniture is damaged by a slow, undetected leak:</strong> The wall behind
          the furniture (dwelling) may be covered under open perils if the leak was sudden and
          accidental. But the furniture (contents) requires you to prove the damage was caused by
          &ldquo;accidental discharge or overflow of water&rdquo; &mdash; and if the leak was
          gradual rather than sudden, you may fail to meet that named-peril definition.
        </li>
        <li>
          <strong>Something simply goes missing:</strong> Under open perils, mysterious
          disappearance of part of the dwelling would be covered unless specifically excluded.
          Under named perils for contents, mysterious disappearance is not a listed peril. Unless
          you can prove theft, there is no coverage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Solution: Upgrade to HO-5
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-5 policy &mdash; called the &ldquo;comprehensive form&rdquo; &mdash; provides
        open-perils coverage on both your dwelling and your personal property. Under an HO-5, your
        contents are protected the same way your house is: everything is covered unless
        specifically excluded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With an HO-5, you no longer need to prove which named peril caused damage to your
        belongings. If something is damaged and the cause is not excluded, it is covered. The
        insurer bears the burden of proving an exclusion applies. This is a significant upgrade
        in protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The premium difference between an HO-3 and HO-5 is typically modest &mdash; often 10 to
        15 percent more. For the broader protection it provides, this is usually money well spent.
        Ask your agent about upgrading.
      </p>

      <CalloutBox variant="tip" title="Alternative: Open Perils Endorsement">
        <p>
          If your insurer does not offer a full HO-5, you may be able to add an open-perils
          endorsement (sometimes called &ldquo;special personal property coverage&rdquo;) to your
          existing HO-3. This endorsement upgrades your contents coverage from named perils to
          open perils without changing your entire policy form. The effect is the same as an HO-5
          for personal property purposes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Identify Your Coverage Type
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Look at your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. It will identify your policy form &mdash; HO-3, HO-5, or another form number.
        If you have an HO-3, your contents are named-perils unless you have an endorsement that
        upgrades them. If you have an HO-5, both dwelling and contents are open perils.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are unsure, read the personal property section of your policy. If it lists specific
        perils that are covered, you have named-perils coverage on contents. If it says something
        like &ldquo;we cover your personal property for direct physical loss unless excluded,&rdquo;
        you have open-perils coverage on contents.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Contents Claim Is Denied
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer denies a contents claim because the cause is not a named peril, consider
        these options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Reframe the cause:</strong> Look at the named perils list carefully. A loss that
          seems uncovered may fit within a named peril when examined closely. Water damage from a
          burst pipe is &ldquo;accidental discharge of water.&rdquo; Damage from a fallen tree
          branch is &ldquo;falling objects.&rdquo;
        </li>
        <li>
          <strong>Check your endorsements:</strong> You may have an open-perils endorsement you
          did not know about.
        </li>
        <li>
          <strong>Challenge the insurer&rsquo;s characterization:</strong> Insurers sometimes
          mislabel the cause of loss to avoid a named peril. If the insurer calls something
          &ldquo;wear and tear&rdquo; when it was actually a sudden event, challenge that
          characterization.
        </li>
        <li>
          <strong>Review California law:</strong> Under California&rsquo;s rules of policy
          interpretation, ambiguity in whether a loss fits a named peril is resolved in the
          policyholder&rsquo;s favor. See our{' '}
          <Link href="/resources/policy-interpretation" className="text-blue-700 underline hover:text-blue-900">
            policy interpretation guide
          </Link>{' '}
          for details.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          On a standard HO-3, your house is covered for everything not excluded (open perils) but
          your belongings are only covered for 16 specific causes (named perils).
        </li>
        <li>
          Under named perils, you bear the burden of proving the cause matches a listed peril.
          Under open perils, the insurer bears the burden of proving an exclusion.
        </li>
        <li>
          Upgrading to an HO-5 or adding an open-perils endorsement eliminates this gap for a
          modest premium increase.
        </li>
        <li>
          If a contents claim is denied, examine whether the loss fits within a named peril before
          accepting the denial.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        For more on how exclusions work and how California limits their application, see our{' '}
        <Link href="/resources/exclusions" className="text-blue-700 underline hover:text-blue-900">
          policy exclusions guide
        </Link>. For a complete overview of contents claims, see our{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          contents claims guide
        </Link>. And for the full picture of what your policy covers, start with our guide to{' '}
        <Link href="/resources/what-does-homeowner-policy-cover" className="text-blue-700 underline hover:text-blue-900">
          what your homeowner policy actually covers
        </Link>.
      </p>
    </>
  )
}
