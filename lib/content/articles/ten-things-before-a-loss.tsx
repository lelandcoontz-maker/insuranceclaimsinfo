import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: '10 Things Every California Homeowner Should Know Before a Loss',
  description:
    'Pre-loss preparation checklist for California homeowners: read your dec page, photograph everything, know your limits, understand your deductible, and more.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The worst time to learn how your insurance works is after something goes wrong. Most
        homeowners never look at their policy until they have water pouring through the ceiling or
        ash falling on their property. By then, the questions come fast and the answers are expensive.
        This article gives you the ten things you need to know right now — while things are calm.
      </p>

      <CalloutBox variant="tip" title="Do This Today, Not Tomorrow">
        <p>
          You can complete most of these steps in a single afternoon. The payoff is enormous. A
          prepared policyholder recovers faster, receives more money, and avoids common traps that
          cost thousands of dollars.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        1. Read Your Declarations Page
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your declarations page — the &quot;dec page&quot; — is a one- or two-page summary of your
        entire policy. It lists your coverage limits, your deductible, your endorsements, and your
        policy period. It is the single document that makes your policy specific to you. If you have
        never read it, you do not actually know what you are covered for. Find it. Read it. Keep a
        copy somewhere outside your home — in your email, in cloud storage, or with a family member.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a section-by-section walkthrough, see our guide on{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          how to read your declarations page
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        2. Photograph Everything You Own
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home is destroyed, you will need to prove what you owned. That means every room,
        every closet, every drawer, every shelf. Walk through your home with your phone recording
        video. Open cabinets. Pull out drawers. Narrate as you go: &quot;Kitchen — KitchenAid
        mixer, Vitamix blender, set of All-Clad pots.&quot; This takes 30 minutes and can be worth
        tens of thousands of dollars in a total loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Store the video in the cloud — Google Drive, iCloud, Dropbox — anywhere that survives if
        your home does not. Update it once a year, especially after major purchases.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        3. Know Your Coverage Limits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy has separate limits for different categories: dwelling (Coverage A), other
        structures (Coverage B), personal property (Coverage C), and loss of use (Coverage D). Each
        one is a ceiling — the maximum the insurer will pay for that category. You need to know these
        numbers. If your dwelling limit is $400,000 but rebuilding your home would cost $650,000,
        you have a serious problem that needs to be fixed before a loss occurs, not after.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        4. Understand Your Deductible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your deductible is the amount you pay out of pocket before insurance kicks in. Most
        homeowners know they have a deductible. Fewer know the exact amount. And many do not realize
        that some policies have different deductibles for different perils. A policy might have a
        $1,000 deductible for most losses but a separate, higher deductible for windstorm or
        earthquake.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        5. Check for Percentage Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where many homeowners get blindsided. A &quot;percentage deductible&quot; is not a
        fixed dollar amount — it is a percentage of your dwelling limit. A 5 percent earthquake
        deductible on a $600,000 home means you pay the first $30,000 out of pocket. Some wildfire
        policies and California FAIR Plan policies use percentage deductibles too. Check your dec
        page carefully. If you see any deductible expressed as a percentage, do the math now so
        you are not shocked later.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        6. Update Your Contents List Annually
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your belongings change every year. You buy furniture. You receive gifts. You upgrade
        electronics. A contents inventory from five years ago is incomplete. Set a calendar reminder
        to update your home inventory every year — perhaps when you change your clocks or file your
        taxes. Include descriptions, approximate values, and photographs or receipts where possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law (10 CCR §2695.5(e)(2)), the insurer must provide you with forms for listing personal property within 15 calendar days of receiving notice of the claim. But do not wait for a loss to start the list. Build it now.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        7. Know Your ALE Limit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE stands for Additional Living Expenses — also called &quot;loss of use&quot; or Coverage
        D. This is the money your insurer pays for temporary housing, meals, and other increased
        costs while your home is being repaired or rebuilt. In California, most policies provide ALE
        as a percentage of Coverage A (often 20-30 percent) or for a specific time period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Know your limit and know whether it is capped by time, by dollar amount, or both. If your
        home needs a year of reconstruction and your ALE limit runs out in six months, you will be
        paying out of pocket for the remaining time. For more detail, see our guide on{' '}
        <Link href="/resources/how-california-claim-works" className="text-blue-700 underline hover:text-blue-900">
          how a California claim works
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        8. Have a Mitigation Plan
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When damage happens, you have a duty to mitigate — to prevent further damage. If a pipe
        bursts, you need to shut off the water. If a tree falls through the roof, you need to tarp
        it. If there is smoke intrusion, you need to ventilate. Think about what you would do in
        common scenarios. Know where your main water shutoff is. Know where your electrical panel is.
        Have tarps, a shop vac, and basic tools accessible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer is required to pay for reasonable mitigation costs. But you have to act — and act
        quickly. Failing to mitigate can give the insurer grounds to deny part of your claim for the
        resulting additional damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        9. Keep Contractor Contacts Ready
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major loss, good contractors are booked immediately. After a catastrophe like a
        wildfire or widespread storm, they are booked for months. Having a relationship with a
        licensed general contractor before a loss gives you a massive head start. You want someone
        who can provide a repair estimate, perform emergency board-ups or tarping, and eventually do
        the rebuild.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also keep contacts for a water mitigation company, a plumber, an electrician, and a roofer.
        You do not want to be Googling these at midnight with water coming through your ceiling.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        10. Understand the Claims Process Before You Need It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance claims process has specific steps, specific deadlines, and specific rules. In
        California, an insurer must acknowledge your claim within 15 days and accept or deny it
        within 40 days (Cal. Code Regs., tit. 10, Section 2695.7). You have the right to choose your
        own contractor. You have the right to disagree with the insurer&apos;s estimate. You can
        invoke appraisal if you dispute the amount. These are rights that you lose if you do not know
        about them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read our overview of{' '}
        <Link href="/resources/how-california-claim-works" className="text-blue-700 underline hover:text-blue-900">
          how a California homeowner claim works
        </Link>{' '}
        before you ever need to file one. Understanding what{' '}
        <Link href="/resources/what-is-homeowners-insurance" className="text-blue-700 underline hover:text-blue-900">
          homeowners insurance
        </Link>{' '}
        actually covers — and what it does not — will put you ahead of 90 percent of policyholders.
      </p>

      <CalloutBox variant="warning" title="Do Not Trust Your Agent to Tell You All of This">
        <p>
          Your insurance agent sold you the policy. They are not obligated to explain every coverage
          gap, every sublimit, or every exclusion in detail. Many agents do not fully understand the
          policies they sell. You are the only person who will consistently look out for your
          interests. Take the time to understand your own coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Insurance is a contract you pay for every month. You deserve to know what that contract says
        and how it works. The ten steps above take a few hours total. They can save you weeks of
        frustration and tens of thousands of dollars when something goes wrong. Do not wait for a
        loss to read your policy. Do it now.
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
