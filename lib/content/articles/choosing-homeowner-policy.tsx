import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Choose a Homeowner Insurance Policy in California',
  description:
    'A policyholder-first guide to choosing homeowner insurance in California: what to prioritize beyond price, the admitted vs. surplus lines distinction, and navigating the current market crisis.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Choosing a homeowner insurance policy is not like buying a commodity. Policies are not
        interchangeable. Two policies with the same premium can have dramatically different coverage.
        One might pay you enough to rebuild after a fire. The other might leave you $200,000 short.
        This guide explains what actually matters when you are selecting coverage — and what most
        people get wrong.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stop Shopping on Price Alone
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cheapest policy is often the cheapest for a reason: lower limits, higher deductibles,
        actual cash value instead of replacement cost, fewer endorsements, more exclusions. A policy
        that saves you $400 a year in premium but pays $100,000 less on a claim is not a bargain. It
        is a trap. Compare coverage terms first. Compare price last.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Admitted vs. Surplus Lines Carriers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important distinction most homeowners do not know about. An
        &quot;admitted&quot; insurer is licensed by the California Department of Insurance. It must
        follow California&apos;s Fair Claims Settlement Practices Regulations. Its rates and policy
        forms are filed with and approved by the CDI. And if it becomes insolvent, the California
        Insurance Guarantee Association (CIGA) pays your claims up to $500,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A &quot;surplus lines&quot; or &quot;non-admitted&quot; insurer is not licensed in California.
        It is authorized to write policies that admitted carriers will not — often in high-risk areas.
        Surplus lines insurers are not subject to the same rate regulations, are not required to use
        CDI-approved forms, and are not backed by CIGA if they fail. Your only recourse for
        complaints is through the surplus lines broker, not the CDI.
      </p>

      <CalloutBox variant="warning" title="Know What You Are Buying">
        <p>
          If you are placed with a surplus lines insurer, you should understand the tradeoff: you are
          getting coverage that no admitted carrier would write, but you are giving up regulatory
          protections and the CIGA safety net. This may be your only option in a high-risk area — but
          go in with open eyes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Broker vs. Captive Agent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A &quot;captive&quot; agent works for one insurer — State Farm, Allstate, Farmers. They can
        only sell you that company&apos;s products. An &quot;independent&quot; agent or broker
        represents multiple insurers and can shop your coverage across many carriers. In
        California&apos;s current market, where carriers are restricting new business and
        non-renewing existing policies, an independent broker with access to multiple markets gives
        you significantly more options.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean captive agents are bad. If their company offers strong coverage at a fair
        price for your situation, that works. But if their company declines you or offers inadequate
        terms, a captive agent cannot help you find alternatives.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Prioritize in a Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When comparing policies, these features matter most:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Replacement cost on dwelling and contents:</strong> Not actual cash value. You want
          new-for-old, not depreciated value. For more detail, see our guide on{' '}
          <Link href="/resources/replacement-cost-vs-guaranteed" className="text-blue-700 underline hover:text-blue-900">
            replacement cost vs. guaranteed replacement cost
          </Link>.
        </li>
        <li>
          <strong>Extended or guaranteed replacement cost:</strong> This pays above your dwelling
          limit if costs exceed estimates. In the current construction market, this is essential.
        </li>
        <li>
          <strong>Open perils on contents:</strong> &quot;Open perils&quot; (also called &quot;all
          risk&quot;) covers everything unless specifically excluded. &quot;Named perils&quot; only
          covers what is listed. Open perils on contents is significantly better coverage.
        </li>
        <li>
          <strong>Adequate ALE (loss of use):</strong> Your Coverage D should cover 18 to 24 months
          of temporary housing at current market rental rates in your area.
        </li>
        <li>
          <strong>Flat deductible (not percentage):</strong> A flat $2,500 deductible is predictable.
          A 5 percent deductible on a $700,000 home is $35,000 out of pocket.
        </li>
        <li>
          <strong>Ordinance or law coverage:</strong> Pays for code upgrades required during
          rebuilding. Without it, you pay for code compliance yourself.
        </li>
        <li>
          <strong>Water backup/sump overflow endorsement:</strong> Standard policies exclude sewer
          backup. This endorsement is cheap and covers a common loss.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California FAIR Plan as Last Resort
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
          California FAIR Plan
        </Link>{' '}
        is the insurer of last resort for properties that cannot obtain coverage in the standard
        admitted or surplus lines markets. It provides basic fire coverage — dwelling and contents —
        but does not include liability, theft, or many other perils covered by a standard homeowner
        policy. You will need a separate &quot;Difference in Conditions&quot; (DIC) policy to fill
        the gaps.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan is not cheap, and its coverage is limited. But it exists as a legal guarantee
        that every California property owner can obtain at least basic fire coverage. If you end up
        on the FAIR Plan, continue looking for standard market alternatives — many homeowners rotate
        back to the admitted market when conditions change.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reading AM Best Ratings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        AM Best is the primary rating agency for insurance companies. Their ratings assess an
        insurer&apos;s financial strength — the ability to pay claims. The scale runs from A++
        (Superior) down to F (In Liquidation). What matters for you as a policyholder:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>A++ or A+:</strong> Superior. Strongest financial position.</li>
        <li><strong>A or A-:</strong> Excellent. Very strong ability to pay claims.</li>
        <li><strong>B++ or B+:</strong> Good. Adequate, but less financial cushion.</li>
        <li><strong>Below B+:</strong> Proceed with caution. Higher risk of financial difficulty.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can check ratings for free at ambest.com. An insurer&apos;s rating can change — check
        annually, especially after major catastrophe events that strain insurer finances.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Current Market Reality
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s homeowner insurance market is in a state of upheaval. Multiple major
        carriers have paused or restricted new business. Non-renewals are common, particularly in
        wildfire-prone areas. Premiums are rising sharply. The California Department of Insurance has
        implemented reforms to attract carriers back, but the market remains tight.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this environment, your options may be limited. You may not have the luxury of choosing
        between five admitted carriers with comprehensive coverage. You may be choosing between a
        surplus lines policy and the FAIR Plan plus a DIC. That is the reality. But even within
        limited options, the principles above apply: understand what you are buying, know the
        tradeoffs, and do not sacrifice critical coverage features just to save on premium.
      </p>

      <CalloutBox variant="tip" title="What to Do If You Are Non-Renewed">
        <p>
          If your insurer non-renews you, you typically get 75 days notice (Insurance Code Section
          678). Use that time immediately: contact an independent broker, get quotes, explore the
          FAIR Plan as a backup. Do not wait until the last week. In the current market, placing
          coverage takes time.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Comparison Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When evaluating two or more policies side by side, check each of these:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Admitted or surplus lines?</li>
        <li>Replacement cost or actual cash value (dwelling and contents separately)?</li>
        <li>Extended or guaranteed replacement cost included?</li>
        <li>Open perils or named perils on contents?</li>
        <li>Flat deductible or percentage deductible?</li>
        <li>ALE limit — dollar amount and time limit?</li>
        <li>Ordinance or law coverage included? At what limit?</li>
        <li>Water backup endorsement available?</li>
        <li>Equipment breakdown coverage?</li>
        <li>Insurer&apos;s AM Best rating?</li>
        <li>Insurer&apos;s claims-handling reputation (check CDI complaint ratios)?</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-6">
        For a deeper understanding of{' '}
        <Link href="/resources/what-is-homeowners-insurance" className="text-blue-700 underline hover:text-blue-900">
          what homeowners insurance is
        </Link>{' '}
        and{' '}
        <Link href="/resources/what-does-homeowner-policy-cover" className="text-blue-700 underline hover:text-blue-900">
          what it covers
        </Link>,
        start with our introductory guides. The more you understand about how your policy works, the
        better decisions you will make when choosing one.
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
