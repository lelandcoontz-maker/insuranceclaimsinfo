import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Underinsured After a Wildfire: What to Do When Your Policy Isn\'t Enough',
  description:
    'Why so many California homeowners are underinsured after a wildfire — and strategies to maximize recovery when your policy limits fall short of actual rebuild costs.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most devastating discoveries after a wildfire is learning that your insurance
        isn&apos;t enough to rebuild. Your home is gone, and the insurer tells you the policy limit
        is $500,000 — but contractors are quoting $800,000 to rebuild. This gap, sometimes hundreds
        of thousands of dollars, is the underinsurance crisis. It affects a staggering percentage of
        California wildfire victims, and it&apos;s not an accident.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Are So Many Homeowners Underinsured?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurers&apos; automated valuation tools underestimate rebuild costs.</strong>{' '}
          Most insurers set dwelling coverage limits using automated tools like CoreLogic, Marshall
          &amp; Swift, or Xactware&apos;s 360Value. These tools use national databases and
          algorithms that frequently underestimate actual California construction costs —
          particularly in high-demand post-disaster markets where labor and materials are scarce.
        </li>
        <li>
          <strong>Construction costs have surged.</strong> California construction costs have
          increased 30–60% in recent years due to labor shortages, material cost inflation, supply
          chain disruptions, and increased demand after major disasters. Your policy limit,
          set years ago, hasn&apos;t kept pace.
        </li>
        <li>
          <strong>Inflation guard isn&apos;t enough.</strong> Many policies include an &ldquo;
          inflation guard&rdquo; that automatically increases Coverage A by 2–4% annually. But
          actual construction cost increases have far outpaced this adjustment.
        </li>
        <li>
          <strong>Demand surge after a disaster.</strong> After a major wildfire, thousands of homes
          need to be rebuilt simultaneously. Contractor availability plummets and prices spike.
          This &ldquo;demand surge&rdquo; can add 20–40% to normal rebuild costs — and it&apos;s
          not reflected in your pre-loss policy limit.
        </li>
        <li>
          <strong>Policyholders choose lower limits to save on premiums.</strong> With California
          premiums rising dramatically, some homeowners deliberately accepted lower coverage limits
          to keep their insurance affordable. This is an understandable but dangerous trade-off.
        </li>
        <li>
          <strong>Code upgrade costs.</strong> When you rebuild, you must comply with current
          building codes — which may be significantly more stringent than when your home was
          originally built. These{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">ordinance or law</Link>{' '}
          costs can add $50,000–$200,000+ to a rebuild but are covered under a separate,
          often inadequate, sublimit.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Insurer Set Your Limit — Not You">
        <p>
          In many cases, the insurer recommended or set the Coverage A limit based on their own
          valuation tool. If that tool underestimated rebuild costs, there is an argument that the
          insurer bears responsibility for the gap. This doesn&apos;t automatically mean you&apos;ll
          recover more than your policy limit, but it&apos;s an important factor in potential bad
          faith or negligence claims against the insurer or agent.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Policy Provisions That Can Help
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Extended Replacement Cost</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many California homeowner policies include an extended (or &ldquo;enhanced&rdquo;)
        replacement cost endorsement that pays an additional 25–50% above your Coverage A limit.
        Check your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link>.
        If your Coverage A limit is $500,000 and you have a 50% extended replacement cost
        endorsement, your effective dwelling coverage is $750,000. However:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>You typically must <strong>actually rebuild</strong> to access the extended amount — you can&apos;t take a cash settlement and pocket the extended coverage</li>
        <li>You must rebuild on the <strong>same premises</strong> (some policies) or within the same area</li>
        <li>There may be a <strong>time limit</strong> to begin and complete rebuilding</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Ordinance or Law Coverage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a separate coverage (not part of your dwelling limit) that pays for the additional
        cost of complying with current building codes. It typically covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The increased cost of construction to meet current codes</li>
        <li>Demolition of undamaged portions that don&apos;t meet code</li>
        <li>The value of the undamaged portion that must be demolished</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;L limits are often 10–25% of Coverage A. If your O&amp;L is 10% on a $500,000
        policy, that&apos;s only $50,000 for code upgrades — which may not be enough. Review your{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">O&amp;L coverage guide</Link>{' '}
        for details.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Debris Removal</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">Debris removal</Link>{' '}
        is a separate coverage that pays for clearing the lot before rebuilding. After a wildfire,
        debris removal can cost $50,000–$200,000+ due to hazardous material (asbestos, lead, ash)
        requirements. If debris removal costs exhaust the sublimit, additional coverage may be
        available under your dwelling limit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strategies to Maximize Recovery When Underinsured
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get an independent rebuild estimate.</strong> Don&apos;t accept the insurer&apos;s
          estimate of rebuild cost. Hire a licensed contractor or professional estimator who
          understands current local costs. This is your baseline for negotiation.
        </li>
        <li>
          <strong>Claim every applicable coverage separately.</strong> Ensure that debris removal,
          O&amp;L, other structures, landscaping, and{' '}
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">ALE</Link>{' '}
          are all claimed and paid from their own sublimits — not from Coverage A. Every dollar
          that comes from a sublimit rather than Coverage A preserves your dwelling limit for
          actual construction.
        </li>
        <li>
          <strong>Maximize your contents claim.</strong> Use our free{' '}
          <Link href="/inventory" className="text-[#2E74B5] hover:underline">Personal Property Inventory Tool</Link>{' '}
          to document every item you owned. Be thorough — the average policyholder leaves
          20–40% of their contents value undocumented.
        </li>
        <li>
          <strong>Invoke the extended replacement cost endorsement.</strong> If you have one,
          commit to rebuilding and trigger the additional coverage. The math often works out
          heavily in your favor.
        </li>
        <li>
          <strong>Challenge the insurer&apos;s valuation.</strong> If the insurer is undervaluing
          the rebuild cost within your policy limits, fight the{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">scope</Link> and{' '}
          <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">Xactimate pricing</Link>.
          Even within an underinsured claim, the insurer must pay your full limit — they can&apos;t
          lowball you below that.
        </li>
        <li>
          <strong>Investigate agent or insurer liability.</strong> If the insurer or agent set your
          Coverage A limit based on their valuation tool and that tool was materially wrong, consult
          an attorney about a potential negligence claim. This is separate from your insurance claim
          and can potentially recover the gap.
        </li>
        <li>
          <strong>Explore government assistance.</strong> FEMA grants (up to $42,500 currently),
          SBA disaster loans (low-interest), and state programs may help fill the gap. These are not
          substitutes for insurance but can supplement it.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Rebuilding vs. Cashing Out When Underinsured
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you&apos;re significantly underinsured, you face a difficult choice: rebuild with a
        large out-of-pocket cost, or take a cash settlement and use it toward a different
        property. Key considerations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Rebuilding triggers extended replacement cost.</strong> If you have an extended
          replacement cost endorsement, rebuilding unlocks the additional 25–50%. Cashing out
          forfeits this.
        </li>
        <li>
          <strong>Cash settlement is limited to ACV.</strong> If you don&apos;t rebuild, the insurer
          pays the actual cash value (depreciated value) of your home — not the replacement cost.
          This is a significant reduction.
        </li>
        <li>
          <strong>Contents holdback requires replacement.</strong> Under a replacement cost policy,
          you receive the depreciation holdback on contents only when you actually replace items.
          If you don&apos;t replace, you receive only ACV.
        </li>
        <li>
          <strong>Tax implications differ.</strong> Insurance proceeds for rebuilding are generally
          not taxable. Cash settlements above your cost basis may have tax implications. Consult a
          tax professional.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Underinsured After a Loss?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can help you maximize every available coverage and ensure no dollar
          is left on the table — even when policy limits are tight.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
    </>
  )
}
