import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "My House Was Damaged by Fire — A Beginner's Guide",
  description:
    'A complete beginner\'s guide to fire damage insurance claims: the first 72 hours, ALE coverage, contents, smoke damage, timelines, and how to navigate the parallel tracks of dwelling, contents, and living expenses.',
  summary:
    'A fire claim runs on three parallel tracks: dwelling repairs, contents replacement, and living expenses (ALE), which the insurer must advance while you are displaced. Document everything, do not discard damaged items before they are recorded, and expect the process to take months.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s practical
          guidance on the first hours and weeks of a fire-claim response as a Licensed
          California Public Adjuster. It is not legal advice. Every claim involves unique
          facts, policy language, and circumstances. For legal questions about a specific
          fire claim, consult a licensed California attorney who specializes in insurance
          coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your home has been damaged by fire. You may be standing outside watching firefighters work.
        You may be in a hotel room in shock. Wherever you are right now, this guide will walk you
        through the next steps — what your insurance owes you, what to do first, and what traps to
        avoid. Fire claims are the most complex type of homeowner insurance claim. They involve
        multiple parallel tracks, large dollar amounts, and timelines measured in months or years.
        But you can navigate this if you understand the structure.
      </p>

      <CalloutBox variant="tip" title="You Are Entitled to Living Expenses Immediately">
        <p>
          Your policy includes Additional Living Expenses (ALE) coverage &mdash; also called
          Coverage D or &ldquo;Loss of Use.&rdquo; If your home is uninhabitable, the insurer
          must pay reasonable increased living expenses <strong>now</strong>, while the claim
          is being investigated. ALE is triggered by the loss of use, not by a final coverage
          determination. Under 10 CCR &sect; 2695.7(h), insurers must make interim payments for
          undisputed portions of a claim while investigating disputed portions. Also,
          California Insurance Code &sect; 2061 (added by SB 872, 2020) provides that on
          request, an insurer must render an advance payment of no less than four months
          of living expenses after a total loss related to a declared state of emergency. If the insurer refuses to advance ALE while investigating, that may
          violate the Fair Claims Settlement Practices Regulations and the Insurance Code.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The First 72 Hours
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything in the first{' '}
        <Link href="/resources/first-72-hours-after-loss" className="text-[#2E74B5] hover:underline">
          72 hours after a loss
        </Link>{' '}
        sets the trajectory for the entire claim. Here is what to do:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get safe housing.</strong> If your home is uninhabitable, get a hotel or stay with
          family. Keep all receipts. Your ALE coverage pays the difference between your normal living
          expenses and your temporary expenses.
        </li>
        <li>
          <strong>Call your insurer to report the claim.</strong> Do this within 24 hours if possible.
          State the facts: there was a fire, the home is damaged, you need ALE. Request an advance
          payment for immediate living expenses.
        </li>
        <li>
          <strong>Secure the property.</strong> Board-up services protect the structure from weather,
          animals, and trespassers. This is mitigation — your duty under the policy. The insurer
          pays for reasonable board-up. You can hire any board-up company.
        </li>
        <li>
          <strong>Do not enter the structure</strong> until the fire department clears it. Even after
          clearance, do not attempt cleanup yourself. Smoke residue, ash, and structural instability
          make fire-damaged homes dangerous.
        </li>
        <li>
          <strong>Begin documenting.</strong> Photograph and video the exterior from all angles. If
          it is safe to enter (fire department cleared), photograph every room. But do not touch or
          move anything yet.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding the Three Parallel Tracks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire claim is not one claim — it is at least three simultaneous claims running in parallel.
        Each has its own coverage, its own process, and its own potential disputes:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Track 1: Dwelling (Coverage A)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This covers the physical repair or rebuilding of your home. It includes the structure itself,
        attached fixtures, built-in appliances, and related structures covered under Coverage A. If
        the home is a total loss, this is your rebuild. If it is a partial loss, this covers all
        necessary repairs to return the home to its pre-loss condition. Dwelling claims involve
        detailed repair estimates — line-by-line in software like Xactimate — and are often the
        largest dollar amount in the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Track 2: Contents (Coverage C)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This covers your personal property — furniture, clothing, electronics, kitchen items, books,
        tools, everything you own that is not part of the building itself. After a fire,{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
          contents claims
        </Link>{' '}
        are enormous and painstaking. You must inventory every item you owned, estimate its value,
        and provide documentation where possible. Even items not directly burned are likely damaged
        by smoke, heat, or water from firefighting.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Track 3: Additional Living Expenses (Coverage D)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">ALE</Link> covers
        the increased cost of living while your home is uninhabitable. This includes temporary
        housing (rental, hotel), increased food costs (you are eating out because you have no
        kitchen), storage fees, increased commute costs, laundry, and other reasonable expenses
        above your normal cost of living. ALE continues until your home is repaired or until you
        could reasonably have completed repairs — whichever comes first.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Smoke Damage: Everything Is Affected
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is something most people do not realize after a fire: even rooms that were not burned
        are likely damaged. Smoke penetrates everywhere. It deposits acidic soot on every surface.
        It permeates soft goods (clothing, upholstery, mattresses). It infiltrates HVAC ductwork
        and spreads throughout the entire structure. It gets inside electronics and appliances.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means your{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] hover:underline">smoke damage</Link>{' '}
        claim often extends far beyond the rooms that actually burned. Professional smoke testing
        (using chem-sponges, tape lifts, or laboratory analysis) can document contamination in areas
        that look clean to the naked eye. Do not let the adjuster dismiss rooms as &ldquo;unaffected&rdquo;
        without testing.
      </p>

      <CalloutBox variant="warning" title="Do Not Attempt DIY Smoke Cleanup">
        <p>
          Cleaning smoke-damaged surfaces without proper techniques and chemicals can permanently
          set stains and odors. Wiping soot into porous surfaces makes it impossible to clean later.
          Professional restoration companies use specific protocols (dry sponging before wet cleaning,
          ozone treatments, thermal fogging) that a homeowner cannot replicate. If you clean before
          the adjuster inspects, you risk both destroying evidence and making the damage worse.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Total Loss vs. Partial Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>total loss</strong> means the home must be demolished and rebuilt from the ground
        up. This is not always obvious — sometimes a home looks partially salvageable but is
        economically a total loss (cost to repair exceeds cost to rebuild, or structural damage
        makes repair impractical).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>partial loss</strong> means the home can be repaired. But &ldquo;partial&rdquo;
        does not mean &ldquo;small.&rdquo; A partial fire loss can still involve gutting entire
        sections of the home, replacing all HVAC, rewiring, replumbing, and months of restoration work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The classification matters because it determines how the claim is measured. In a total loss,
        you are rebuilding — the claim is based on the cost of new construction to match your prior
        home&rsquo;s specifications. In a partial loss, the claim is based on repair costs. If there
        is any question about whether your home is a total loss, get an independent structural
        engineer&rsquo;s opinion before accepting the insurer&rsquo;s determination.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Expect: Timeline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire claims take time. Set your expectations now:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Week 1:</strong> File the claim, secure the property, get ALE started, begin
          contents inventory. The adjuster should contact you within days.
        </li>
        <li>
          <strong>Weeks 2-4:</strong> The insurer inspects the property, possibly hires an engineer
          or origin-and-cause investigator. You should be receiving ALE advances.
        </li>
        <li>
          <strong>Months 1-3:</strong> Dwelling estimate prepared. Initial contents payments begin
          (actual cash value on documented items). Disputes surface about scope.
        </li>
        <li>
          <strong>Months 3-12:</strong> Repairs or rebuilding begins. Supplemental claims for hidden
          damage discovered during construction. Contents inventory continues.
        </li>
        <li>
          <strong>Months 12-24:</strong> For total losses, rebuilding may take 18-24 months or
          longer. Replacement cost holdback payments come as you replace contents.
        </li>
      </ul>

      <CalloutBox variant="tip" title="California's 30-Day Payment Rule">
        <p>
          Under California&rsquo;s Fair Claims Settlement Practices Regulations (10 CCR &sect;
          2695.7(b)), once the insurer has all information needed to evaluate the claim, it must
          accept or deny within 40 days of receiving proof of claim. Undisputed amounts must be paid
          within 30 days of the coverage determination. If you have documented losses the insurer is
          not disputing, demand payment of those undisputed amounts immediately — they cannot hold
          your entire claim hostage over a dispute about a portion of it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contents: The Overwhelming Part
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a total loss, you must inventory every single item you owned. Every fork. Every book.
        Every picture on the wall. Every article of clothing. This is exhausting and emotionally
        draining. Most families own 3,000 to 5,000 individual items. The average total-loss contents
        claim runs $150,000 to $300,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Go room by room. Use old photos, Amazon order history, credit card statements, and your
        memory. Include brand names, model numbers, and age where you can remember them. The insurer
        will pay Actual Cash Value (ACV — replacement cost minus depreciation) initially, then the
        remaining Replacement Cost Value (RCV) holdback as you actually replace items. See{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
          contents claims
        </Link>{' '}
        for detailed guidance on building your inventory.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Board-Up and Emergency Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a fire, the structure needs immediate protection. Board-up covers window and door
        openings, damaged roof sections, and any other breach in the building envelope. Tarping
        protects exposed areas from rain. Fencing may be needed to prevent unauthorized entry.
        These are all covered as mitigation costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some board-up companies also offer tree removal (if a burned tree threatens the structure),
        debris stabilization, and temporary utilities. All of these are legitimate mitigation
        expenses. Do not let the insurer tell you board-up is &ldquo;your responsibility&rdquo; —
        it is your duty to arrange it, but the cost is part of the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Mistakes to Avoid
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Accepting the first offer.</strong> The insurer&rsquo;s initial estimate on a fire
          claim is almost always low. It is a starting point for negotiation, not a final offer.
        </li>
        <li>
          <strong>Not claiming everything.</strong> Smoke damage extends further than you think.
          Contents are worth more than you remember. Do not leave money on the table by underclaiming.
        </li>
        <li>
          <strong>Using the insurer&rsquo;s preferred contractor.</strong> You have the right to
          choose your own contractor. The insurer&rsquo;s &ldquo;preferred&rdquo; vendor has a
          financial relationship with the insurer, not with you.
        </li>
        <li>
          <strong>Not keeping receipts for ALE.</strong> Every dollar you spend on temporary living
          needs a receipt. Hotels, meals, storage units, gas for longer commutes — track everything.
        </li>
        <li>
          <strong>Signing a contractor assignment of benefits too early.</strong> Some restoration
          companies ask you to sign over your insurance benefits. Be cautious — this gives them
          control of your claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Getting Professional Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Fire claims are large, complex, and long. The insurer has a team of adjusters, engineers,
        and consultants working on your file. You deserve representation too. A Public Adjuster
        works exclusively for you &mdash; they prepare the claim, negotiate with the insurer,
        and ensure every covered dollar is recovered. For a{' '}
        <Link href="/resources/fire-claim-denied" className="text-[#2E74B5] hover:underline">fire claim</Link>,
        professional help often pays for itself many times over. If you suspect bad faith
        &mdash; unreasonable delays, lowball offers, or improper denials &mdash; consult an
        insurance coverage attorney as well. You do not have to navigate this alone.
      </p>

      <p className="text-sm text-gray-500 mt-8 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
