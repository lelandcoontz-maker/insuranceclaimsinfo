import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Why You Should Never Accept the Insurer\'s First Offer',
  description:
    'Why the insurance company\'s initial settlement offer is almost always too low — and how to respond to get a fair payout.',
  summary:
    'The insurer\'s first settlement offer is almost always low, a starting position rather than a fair number. Do not accept it reflexively; compare it to your own documentation and estimate, and counter in writing.',
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
        After a property loss, the insurance company will make you an initial settlement offer —
        sometimes within days. The offer may look substantial: a large dollar amount for a
        devastating loss. But in nearly every case, the first offer is significantly less than what
        you are actually owed. Insurance claim underpayment is a well-documented problem —
        congressional testimony, regulatory investigations, and policyholder advocacy groups have
        consistently shown that insurers routinely reduce field adjusters&apos; damage estimates
        through desk reviews, sometimes cutting payments dramatically. Accepting that first offer
        too quickly is one of the most costly mistakes a policyholder can make.
      </p>

      <CalloutBox variant="warning" title="You Can Almost Always Negotiate">
        <p>
          The first offer is a starting point, not a final answer. You are not required to accept
          it, and counter-offering does not jeopardize your claim. Under California law, the insurer
          must make a good faith attempt to settle — but &ldquo;good faith&rdquo; does not mean
          their first offer is fair.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the First Offer Is Almost Always Low
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">1. Incomplete Scope of Damage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&apos;s initial estimate is based on a preliminary inspection — often a quick
        walk-through or even a desktop review. Hidden damage (inside walls, under floors, in
        ductwork, in crawl spaces and attics) has not been discovered yet. The{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">scope of loss</Link>{' '}
        expands as demolition and repairs reveal additional damage. First offers almost never
        account for this.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">2. Low Unit Pricing</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters use{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">Xactimate</Link>{' '}
        or similar estimating software. While the software itself is industry standard, adjusters
        can manipulate the inputs: using lower-grade materials than what was actually in the home,
        applying the wrong labor rates, excluding overhead and profit for general contractors,
        or using unit prices that do not reflect actual local construction costs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">3. Depreciation Applied to Everything</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the first payment is based on actual cash value (ACV), the insurer has applied
        depreciation to every item and every component. The depreciation calculations are often
        aggressive — depreciating labor, depreciating items that do not meaningfully depreciate,
        or using an unreasonably short useful life. See our guide on{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">ACV vs. RCV</Link>{' '}
        for how this works.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">4. Missing Coverages</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first offer frequently addresses only the most obvious coverage &mdash; dwelling damage.
        But your policy likely includes several additional coverages that the insurer will not
        volunteer:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">Additional Living Expenses (ALE)</Link>{' '}
          — temporary housing, meals, commuting costs, laundry, pet boarding
        </li>
        <li>
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">Ordinance or Law coverage</Link>{' '}
          — code upgrade costs, which can add 25–50% to rebuilding costs
        </li>
        <li>
          <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">Debris removal</Link>{' '}
          — including hazardous material abatement
        </li>
        <li>
          <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">Contents/personal property</Link>{' '}
          — often dramatically undervalued in initial estimates
        </li>
        <li>Other structures — detached garages, fences, retaining walls, driveways</li>
        <li>Landscaping — trees, shrubs, and yard damage up to policy sublimits</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">5. Pressure to Settle Quickly</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers know that policyholders are stressed, displaced, and financially pressured after a
        loss. A quick offer with a release to sign takes advantage of that urgency. Some adjusters
        will tell you the offer is &ldquo;final&rdquo; or imply it will decrease if you do not
        accept now. This is not true.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Respond to the First Offer
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Do not sign a release or &ldquo;full and final&rdquo; settlement.</strong>{' '}
          Accept partial payments as &ldquo;partial payment on account&rdquo; — not as a final
          settlement. You have a right to take partial payments without waiving your right to
          additional amounts owed.
        </li>
        <li>
          <strong>Request the full estimate.</strong> Ask for the complete Xactimate estimate (or
          whatever format the insurer used), line by line. Review it against your actual conditions
          and costs. See our{' '}
          <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">Xactimate guide</Link>{' '}
          for what to look for.
        </li>
        <li>
          <strong>Get your own estimates.</strong> Hire a licensed contractor to provide a repair or
          rebuild estimate based on actual conditions, actual local labor rates, and actual material
          costs. This is your most powerful negotiating tool.
        </li>
        <li>
          <strong>Document all coverages.</strong> Go through your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link>{' '}
          and identify every coverage that applies. Make sure the insurer has addressed each one.
        </li>
        <li>
          <strong>Submit a detailed counter-demand.</strong> Do not just say &ldquo;we want
          more.&rdquo; Submit a written demand letter with your independent estimate, line-item
          comparisons showing where the insurer&apos;s estimate is deficient, and specific policy
          language supporting your position. See our{' '}
          <Link href="/resources/negotiation" className="text-[#2E74B5] hover:underline">negotiation guide</Link>.
        </li>
        <li>
          <strong>Consider professional help.</strong> A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>{' '}
          handles the entire process — documenting the loss, reviewing the insurer&apos;s estimate,
          preparing a counter, and negotiating — on your behalf.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Numbers: How Much More Can You Get?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no universal formula, but it is common for the final settlement to exceed
        the first offer by 30–100% or more — especially on total losses and complex claims.
        A January 2010 Florida government study (OPPAGA Report 10-06) found that
        PA-represented Citizens Property Insurance Corporation claims settled for substantially
        more than unrepresented claims, though the study did not control for claim complexity and
        the gap varies widely depending on the facts of each loss.
        Net benefit is also lower after Public Adjuster fees.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap can be extreme. A CBS 60 Minutes episode titled &ldquo;After the Hurricane,&rdquo;
        aired September 29, 2024, and reported by Sharyn Alfonsi, investigated Heritage Property
        &amp; Casualty Insurance&apos;s handling of Hurricane Ian claims. The episode documented
        cases where insurer desk reviews slashed field adjuster estimates by 93% or more — one
        adjuster&apos;s $231,000 estimate was reduced to $15,000, another from $488,000 to $13,000.
        Allstate&apos;s own executive acknowledged at a May 2025 Senate Homeland Security
        subcommittee hearing that 27% of field adjuster estimates were reduced through desk review,
        while only 9% were increased. In one case highlighted during the hearings, an insurer
        initially offered $46,000 on a claim where the actual damage was ultimately determined to
        be $497,000 — a tenfold difference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even a modest negotiation effort — getting a contractor&apos;s estimate and pointing out
        missing items — typically yields a significantly higher settlement than simply accepting
        the first offer.
      </p>

      <CalloutBox variant="legal" title="Low-Balling Is Specifically Prohibited by California Law">
        <p className="mb-3">
          Under California law, insurers are not merely encouraged to make fair offers &mdash;
          they are prohibited by statute and regulation from making unreasonably low offers for
          the purpose of forcing policyholders into litigation or accepting less than they are
          owed. The key authorities:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>
            <strong>Insurance Code &sect; 790.03(h)(5)</strong> &mdash; makes it an unfair claims
            practice to fail to &ldquo;attempt in good faith to effectuate prompt, fair, and
            equitable settlements of claims in which liability has become reasonably clear.&rdquo;
          </li>
          <li>
            <strong>Insurance Code &sect;&nbsp;790.03(h)(6)</strong> &mdash; specifically defines
            as an unfair claims practice &ldquo;compelling insureds to institute litigation to
            recover amounts due under an insurance policy by offering substantially less than
            the amounts ultimately recovered in actions brought by the insureds.&rdquo; This is
            the classic lowball provision in the regulatory standard. Under{' '}
            <em>Moradi-Shalal v. Fireman&apos;s Fund Ins. Co.</em> (1988) 46 Cal.3d 287,{' '}
            &sect;&nbsp;790.03 itself does not create a private cause of action; it sets the
            standard the Department of Insurance enforces and informs what common-law bad-faith
            analysis looks like.
          </li>
          <li>
            <strong>10 CCR &sect;&nbsp;2695.7(g)</strong> &mdash; the Fair Claims Settlement
            Practices Regulations parallel the statute, barring low offers made to force
            litigation.
          </li>
          <li>
            <strong>Case law.</strong> California courts have long held that unreasonably low
            offers can constitute bad faith under the implied covenant. See{' '}
            <em>Gruenberg v. Aetna Ins. Co.</em> (1973) 9 Cal.3d 566;{' '}
            <em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24 Cal.3d 809;{' '}
            <em>Neal v. Farmers Ins. Exchange</em> (1978) 21 Cal.3d 910. These cases establish
            that the implied covenant of good faith requires the insurer to give{' '}
            <em>at least as much consideration to the insured&apos;s interests as to its own</em>{' '}
            &mdash; and a common-law bad-faith action is the operative private remedy, not
            &sect;&nbsp;790.03 directly.
          </li>
        </ul>
        <p className="mb-3">
          You have the right to negotiate, hire representation, demand appraisal, or file a{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="underline font-semibold">CDI complaint</Link>{' '}
          if you believe the insurer is acting in bad faith.
        </p>
        <p className="italic text-sm">
          This is not legal advice. Whether a specific offer rises to the level of common-law
          bad faith (informed by &sect;&nbsp;790.03(h)) requires case-specific analysis. Only
          an attorney can advise you on a bad-faith claim.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Got a Lowball Offer?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Send us the insurer&apos;s estimate and we&apos;ll review it for free. We&apos;ll tell you
          if you are being shortchanged and what your claim is actually worth.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
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
