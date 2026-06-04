import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Why Your Home Might Be Underinsured — and How to Fix It',
  description:
    'Construction costs have risen dramatically since 2020. Most California homeowners are underinsured without knowing it. Here is how to identify the gap and close it before a loss.',
  summary:
    'Rebuild costs have risen sharply since 2020, leaving many California homeowners underinsured without realizing it. Compare your dwelling limit to current local rebuild costs, add extended or guaranteed replacement cost and inflation guard, and fix the gap before a loss exposes it.',
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
        If your home burned to the ground tomorrow, would your insurance pay enough to rebuild it?
        For most California homeowners, the honest answer is no. Studies consistently show that 60 to
        70 percent of American homes are underinsured — meaning the dwelling limit on the policy is
        less than what it would actually cost to rebuild. In California, where construction costs are
        among the highest in the nation, the gap can be staggering.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Replacement Cost Calculators Get It Wrong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you bought your policy, your agent likely used a replacement cost calculator — software
        like Marshall &amp; Swift, CoreLogic, or 360Value — to estimate what your home would cost to
        rebuild. These tools ask basic questions: square footage, year built, number of bathrooms,
        type of roof. They produce a number. That number is almost always too low.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is why. These calculators use average construction costs across broad geographic areas.
        They do not account for your specific lot conditions (slope, access, soil type). They
        underweight custom features. They use historical cost data that lags the market. And they
        rarely factor in what actually happens after a catastrophe: demand surge. When thousands of
        homes need rebuilding simultaneously, labor and materials costs spike 20 to 50 percent above
        normal market rates.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Construction Costs Have Exploded
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Between 2020 and 2025, construction costs in California rose 40 to 60 percent depending on
        the region and the type of construction. Lumber prices, while off their pandemic peaks,
        remain elevated. Labor shortages persist in the skilled trades — framers, electricians,
        plumbers, HVAC technicians. Code requirements have increased (energy efficiency, fire
        hardening, seismic upgrades). Every one of these factors increases what it costs to build a
        home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your policy limit has not increased by 40 to 60 percent in that same period, you are
        likely underinsured. The typical inflation guard endorsement adds 3 to 5 percent per year.
        That means your limit has grown roughly 15 to 25 percent since 2020 — well short of actual
        cost increases.
      </p>

      <CalloutBox variant="warning" title="The Math Does Not Lie">
        <p>
          A home insured for $500,000 in 2020 with a 4% annual inflation guard would have a dwelling
          limit of approximately $608,000 in 2025. But if construction costs rose 50% in that same
          period, the home actually costs $750,000 to rebuild. That is a $142,000 gap the homeowner
          pays out of pocket — or simply cannot recover.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Inflation Guard Is Not Enough
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inflation guard endorsement automatically increases your dwelling limit by a fixed
        percentage each year — typically 3 to 5 percent. It is better than nothing. But it was
        designed for eras of modest, predictable inflation. It cannot keep pace with the kind of
        rapid cost increases California has experienced. It also does not account for demand surge,
        code upgrades, or the specific cost realities of your particular home and location.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extended Replacement Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An extended replacement cost endorsement pays a specified percentage above your dwelling
        limit if the actual rebuild cost exceeds your coverage. Common options are 25 percent or 50
        percent above the stated limit. If your dwelling limit is $600,000 and you have a 50 percent
        extended replacement cost endorsement, the insurer will pay up to $900,000 to rebuild your
        home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a critical safety net. It is not a substitute for having an accurate dwelling limit,
        but it provides a buffer against unexpected cost increases and demand surge. If your insurer
        offers it, buy it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Guaranteed Replacement Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Guaranteed replacement cost is the gold standard. With this endorsement, the insurer agrees
        to pay whatever it actually costs to rebuild your home — regardless of your stated dwelling
        limit. There is no cap. If your limit is $600,000 but the rebuild costs $850,000, the
        insurer pays $850,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Guaranteed replacement cost has become extremely rare in California. Most major insurers
        stopped offering it after the 2017-2018 wildfire seasons exposed how dramatically they had
        underestimated rebuild costs. If you have it, do not give it up. If you can find it, buy it.
        For a detailed comparison, see our article on{' '}
        <Link href="/resources/replacement-cost-vs-guaranteed" className="text-blue-700 underline hover:text-blue-900">
          replacement cost vs. guaranteed replacement cost
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Get a Real Rebuild Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not rely on your insurer&apos;s calculator. Get an independent estimate from a licensed
        general contractor who builds homes in your area. Ask them: &quot;If my home was destroyed
        and you had to rebuild it from the foundation up, with current code compliance, what would it
        cost?&quot; Get this in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The estimate should include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Site preparation and debris removal</li>
        <li>Foundation (including any required soil engineering)</li>
        <li>Framing, roofing, siding, and all structural components</li>
        <li>Plumbing, electrical, and HVAC systems</li>
        <li>Interior finishes — flooring, cabinets, countertops, fixtures</li>
        <li>Current building code requirements (Title 24 energy, fire hardening, seismic)</li>
        <li>Permits and architectural/engineering fees</li>
        <li>General contractor overhead and profit (typically 20-25 percent)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Consequences of Being Underinsured
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your dwelling limit is less than the actual rebuild cost, you face one of two outcomes
        after a total loss:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You pay the gap out of pocket.</strong> If rebuilding costs $800,000 and your limit
          is $600,000, you need $200,000 from somewhere else — savings, a loan, or selling the lot.
        </li>
        <li>
          <strong>You build a smaller or cheaper home.</strong> You downgrade materials, reduce
          square footage, or eliminate features to fit within the policy limit.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        For partial losses on commercial or certain specialty policies, being underinsured can
        trigger a{' '}
        <Link href="/resources/coinsurance-penalty" className="text-blue-700 underline hover:text-blue-900">
          coinsurance penalty
        </Link>{' '}
        — a formula that reduces your payout proportionally, even when the loss is well within your
        limit. This adds insult to injury.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Fix It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Take these steps now:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Get a contractor&apos;s rebuild estimate for your home</li>
        <li>Compare it to your current Coverage A dwelling limit on your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>
        </li>
        <li>If the estimate exceeds your limit, call your agent and request an increase</li>
        <li>Ask about extended replacement cost (25% or 50% above limit) if guaranteed is unavailable</li>
        <li>Check that your other coverages (B, C, D) are proportionally adequate</li>
        <li>Confirm you have ordinance or law coverage for code upgrades</li>
        <li>Set a calendar reminder to repeat this review annually</li>
      </ol>

      <CalloutBox variant="tip" title="The Premium Increase Is Worth It">
        <p>
          Yes, increasing your dwelling limit raises your premium. But the cost difference between a
          $500,000 limit and a $700,000 limit is typically $300 to $600 per year. Compare that to the
          $200,000 gap you would pay out of pocket after a total loss. The math is obvious.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Market Reality
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s insurance market is in crisis. Carriers are leaving the state, limiting
        coverage, and raising premiums. In this environment, getting adequate coverage is harder and
        more expensive than it used to be. But being underinsured is not a solution — it is just a
        different kind of risk. You are paying premiums for protection that will not actually protect
        you. Either get adequate coverage or understand — clearly, with open eyes — exactly how much
        of the rebuild cost you are self-insuring.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        For more on{' '}
        <Link href="/resources/what-does-homeowner-policy-cover" className="text-blue-700 underline hover:text-blue-900">
          what your homeowner policy covers
        </Link>{' '}
        and where the gaps typically hide, review your full policy and understand what you are buying.
        The time to discover you are underinsured is today — not the day after a fire.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
