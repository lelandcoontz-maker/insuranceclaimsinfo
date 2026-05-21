import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Review Your Insurance Policy Before You Need It',
  description:
    'An annual policy review checklist for California homeowners: what to look for, what questions to ask your agent, and how to identify coverage gaps before a loss exposes them.',
  summary:
    'Review your policy once a year before you ever file a claim: check your dwelling limit against current rebuild costs, confirm replacement-cost coverage, note exclusions and sub-limits, and close coverage gaps while you still can rather than after a loss.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners renew their policy on autopilot. The renewal notice arrives, the premium goes
        up a few dollars, and the policy continues unchanged. This is how people end up underinsured,
        surprised by exclusions, and fighting with adjusters over coverage they assumed they had. An
        annual policy review takes one hour. It can save you from financial catastrophe.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Annual Reviews Matter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Three things change every year: the cost to rebuild your home, the value of your belongings,
        and the terms of your policy. Construction costs in California have risen 40 to 60 percent
        since 2020. Your insurer may have added exclusions, raised your deductible, or reduced
        sublimits at renewal — sometimes without obvious notification. The inflation guard endorsement
        that increases your dwelling limit by 3 to 5 percent annually does not keep pace with actual
        construction cost increases in most California markets.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Start With Your Declarations Page
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pull out your current{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. This is your roadmap. Look at each coverage limit and ask: is this still adequate?
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling):</strong> Does this reflect the current cost to rebuild your
          home from the ground up? Not the market value — the reconstruction cost. Get a rebuild
          estimate from a licensed contractor if you are unsure.
        </li>
        <li>
          <strong>Coverage B (Other Structures):</strong> Do you have a detached garage, pool house,
          fence, or ADU? Is the standard 10 percent of Coverage A enough?
        </li>
        <li>
          <strong>Coverage C (Personal Property):</strong> Have you made major purchases this year?
          New furniture, electronics, jewelry, art? Is the contents limit still adequate?
        </li>
        <li>
          <strong>Coverage D (Loss of Use):</strong> If you had to rent a comparable home in your
          area for 12 to 24 months while yours is rebuilt, would this limit cover it? Check rental
          prices in your neighborhood.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Check for Replacement Cost vs. Actual Cash Value
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy should pay replacement cost — the cost to repair or replace with new, like-kind
        materials — not actual cash value (which deducts depreciation). Check both your dwelling
        coverage and your contents coverage. Some policies pay replacement cost on the structure but
        only actual cash value on contents. That means your 8-year-old refrigerator gets valued at
        what an 8-year-old refrigerator is worth on the used market, not what it costs to buy a new
        one. For a full explanation, see our guide on{' '}
        <Link href="/resources/replacement-cost-vs-guaranteed" className="text-blue-700 underline hover:text-blue-900">
          replacement cost vs. guaranteed replacement cost
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Look for Percentage Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A percentage deductible is expressed as a percentage of your dwelling limit rather than a
        flat dollar amount. A 2 percent deductible on a $700,000 dwelling limit means you pay the
        first $14,000 out of pocket. These are increasingly common in California, particularly for
        wildfire, wind, and earthquake coverage. If your deductible changed from a flat amount to a
        percentage at your last renewal, the financial impact may be much larger than you realize.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Review Your Endorsements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Endorsements modify your base policy — they add coverage, remove coverage, or change terms.
        Your dec page lists the endorsement form numbers. Read each one. Common endorsements to look
        for (or ask about if you do not have them):
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Extended or guaranteed replacement cost:</strong> Pays above your dwelling limit if
          rebuild costs exceed it. Essential in the current market.
        </li>
        <li>
          <strong>Water backup/sump overflow:</strong> Standard policies exclude sewer and drain
          backup. This endorsement adds it back.
        </li>
        <li>
          <strong>Scheduled personal property:</strong> Provides full coverage for high-value items
          (jewelry, art, musical instruments) that exceed standard sublimits.
        </li>
        <li>
          <strong>Ordinance or law:</strong> Pays for code upgrades required during reconstruction.
          Without it, you pay for code compliance out of pocket.
        </li>
        <li>
          <strong>Equipment breakdown:</strong> Covers mechanical and electrical failure of HVAC,
          water heaters, and appliances — perils often excluded by the base policy.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Identify Sublimits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A sublimit is a lower cap within your overall coverage for specific categories. Your policy
        might have $375,000 in contents coverage but only $2,500 for jewelry, $2,000 for firearms,
        $1,500 for cash, and $5,000 for business property. These sublimits are often buried in the
        policy form, not the dec page. Review them. If you own items that exceed these sublimits,
        schedule them separately or purchase additional coverage.
      </p>

      <CalloutBox variant="warning" title="The Coinsurance Trap">
        <p>
          If you have a commercial policy or certain specialty homeowner policies, being underinsured
          can trigger a{' '}
          <Link href="/resources/coinsurance-penalty" className="text-blue-700 underline hover:text-blue-900">
            coinsurance penalty
          </Link>{' '}
          that reduces your payout even on partial losses. The formula penalizes you proportionally
          for the coverage gap. This is one more reason to keep your limits adequate.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Questions to Ask Your Agent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At your annual review, ask these questions directly:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>What is the current estimated rebuild cost for my home, and does my dwelling limit match it?</li>
        <li>Has anything in my policy changed from last year — deductibles, sublimits, endorsements, exclusions?</li>
        <li>Do I have replacement cost on both my dwelling and my contents?</li>
        <li>Do I have extended or guaranteed replacement cost? If not, what would it cost to add?</li>
        <li>What is my deductible for each covered peril? Are any of them percentage-based?</li>
        <li>Do I have ordinance or law coverage? What is the limit?</li>
        <li>Are there any exclusions specific to my property or my location?</li>
        <li>Is my insurer still financially stable? What is their AM Best rating?</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Shop for a New Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Shopping is not just about price. Consider switching if: your current insurer has a poor
        claims-handling reputation, your coverage options are limited, your premium has increased
        dramatically without corresponding coverage improvement, or your insurer is no longer
        writing policies in your area (a sign they may not renew you next year). Get quotes from
        at least three carriers. Compare coverage terms, not just premiums.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What &quot;Adequate&quot; Coverage Actually Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adequate coverage means your policy will make you whole after a total loss without you paying
        significant money out of pocket beyond your deductible. That means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your dwelling limit covers a complete rebuild at current construction costs</li>
        <li>Your contents limit reflects what you actually own</li>
        <li>Your ALE limit covers 18 to 24 months of temporary housing at market rates</li>
        <li>You have ordinance or law coverage for code upgrades</li>
        <li>Your deductible is an amount you can afford to pay on short notice</li>
        <li>High-value items are scheduled or otherwise fully covered</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Replacement Cost Estimation Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers use software tools to estimate rebuild costs. These tools — Marshall &amp; Swift,
        CoreLogic, 360Value — often underestimate actual construction costs, particularly for older
        homes with custom features, homes in high-cost areas, and homes that would require
        significant code upgrades if rebuilt. Do not accept the insurer&apos;s estimate as gospel.
        Get your own estimate from a licensed general contractor familiar with construction in your
        area.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on why homes are underinsured and what you can do about it, see{' '}
        <Link href="/resources/what-does-homeowner-policy-cover" className="text-blue-700 underline hover:text-blue-900">
          what your homeowner policy actually covers
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Annual Review Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do this once a year, 60 days before your renewal date:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Pull your current dec page and compare it to last year&apos;s</li>
        <li>Research current construction costs per square foot in your area</li>
        <li>Update your home inventory (video walkthrough, receipts for major purchases)</li>
        <li>Check rental prices for comparable homes to validate your ALE limit</li>
        <li>Review all endorsements — confirm nothing was removed</li>
        <li>Calculate the dollar impact of any percentage deductibles</li>
        <li>Call your agent with your questions list</li>
        <li>Get competing quotes if your coverage is inadequate or overpriced</li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-6">
        One hour a year. That is all it takes. The alternative — discovering a coverage gap after a
        loss — costs infinitely more.
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
