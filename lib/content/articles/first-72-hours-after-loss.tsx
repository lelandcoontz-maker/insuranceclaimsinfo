import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What to Do in the First 72 Hours After a Loss',
  description:
    'Emergency actions, who to call, what to document, and what NOT to do in the critical first three days after property damage.',
  summary:
    'In the first 72 hours: get safe, prevent further damage (a policy duty), and document everything before cleanup, then report the loss and keep all receipts. Do not throw anything away or authorize permanent repairs until the damage is fully documented.',
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
        Something just happened to your home. Fire, water, wind, theft — whatever it is,
        the next 72 hours matter more than any other period in your claim. What you do now
        determines how much you get paid and how smoothly the process goes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide covers the essential actions in order. Do them in sequence. Skip nothing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hour 1: Safety and Emergency Services
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>If anyone is injured, call 911.</li>
        <li>If the structure is unsafe, get out. Do not re-enter until cleared by fire department or building inspector.</li>
        <li>Shut off utilities if you can do so safely — gas, water, electricity at the source.</li>
        <li>If it is a fire, let the fire department finish before you enter.</li>
        <li>If it is a burglary or vandalism, call police. Get a report number.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hours 1–6: Prevent Further Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to take reasonable steps to prevent further damage. This is
        called &ldquo;mitigation.&rdquo; The insurance company will pay for these emergency
        measures — but if you do nothing and the damage gets worse, they can deny the
        additional damage.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Board up broken windows and doors.</li>
        <li>Tarp a damaged roof to prevent water entry.</li>
        <li>Turn off the water source if you have a leak.</li>
        <li>Call a water mitigation company if there is standing water (extraction prevents mold).</li>
        <li>Move undamaged belongings away from the affected area if safe to do so.</li>
      </ul>

      <CalloutBox variant="warning" title="Do NOT Throw Anything Away">
        <p>
          Do not discard damaged items until the adjuster has seen them or you have
          photographed them thoroughly. The insurance company has the right to inspect
          damaged property. If you throw it away before they see it, they can dispute
          the claim. Keep everything — even if it looks like garbage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hours 1–12: Document Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you clean up, before you move anything, before anyone starts repairs:
        <strong> photograph and video the damage.</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Take wide shots of every affected room and exterior area.</li>
        <li>Take close-ups of every damaged item, surface, and component.</li>
        <li>Shoot video walking through the entire affected area with narration.</li>
        <li>Photograph undamaged areas too — this establishes what was NOT damaged (important later).</li>
        <li>If items are charred, soaked, or broken, photograph them in place before moving them.</li>
        <li>Photograph any emergency repairs as you make them (before, during, after).</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Use your phone. Timestamp is automatic. Back up to the cloud immediately — if your
        phone is lost or damaged, you lose your evidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hours 6–24: Contact Your Insurance Company
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call your insurer to report the loss. This is called &ldquo;first notice of loss&rdquo;
        or FNOL. You can do this by phone, online, or through your agent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you call:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>State what happened and approximately when.</li>
        <li>Describe the general scope of damage (do not estimate a dollar amount).</li>
        <li>Get your claim number.</li>
        <li>Get the name and direct number of your assigned adjuster (or ask when one will be assigned).</li>
        <li>Ask what the next steps are and when to expect contact.</li>
        <li>Do not give a recorded statement at this time. Say you will schedule one later.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the call, send a follow-up email confirming what was discussed: claim number,
        adjuster name, what you reported. This creates a written record from day one. See{' '}
        <Link href="/resources/what-to-say-adjuster-calls" className="text-[#1F3964] underline font-medium">
          What to Say and What Not to Say
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hours 12–48: Start Your Contents List
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If personal property was damaged or destroyed, start your contents inventory now
        while your memory is fresh. Go room by room. Write down everything you can remember:
        furniture, electronics, clothing, kitchen items, tools, decorations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need exact prices or purchase dates yet. The list will grow over weeks
        and months as you remember things. The important thing is to start. See{' '}
        <Link href="/resources/contents-inventory-guide" className="text-[#1F3964] underline font-medium">
          How to Document a Contents Inventory
        </Link>{' '}
        and the{' '}
        <Link href="/inventory" className="text-[#1F3964] underline font-medium">
          free Inventory Tool
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hours 24–72: Get Organized
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Find your policy.</strong> The full policy booklet, not just the declarations
          page. If you do not have it, call your agent and request a complete copy immediately.
        </li>
        <li>
          <strong>Start a claim file.</strong> Physical folder or digital folder. Every document,
          email, photo, receipt, and note goes in this file. Date everything.
        </li>
        <li>
          <strong>Keep all receipts.</strong> Emergency repairs, hotel stays, meals out, storage
          units, gas — everything you spend because of this loss. These are Additional Living
          Expenses (ALE) that the insurer owes you.
        </li>
        <li>
          <strong>Arrange temporary housing if needed.</strong> If your home is uninhabitable,
          your policy&apos;s Loss of Use coverage pays for a comparable place to live. See{' '}
          <Link href="/resources/ale-frv" className="text-[#1F3964] underline font-medium">
            Additional Living Expenses
          </Link>.
        </li>
        <li>
          <strong>Do NOT sign anything yet.</strong> The adjuster may show up quickly with
          papers. Do not sign a &ldquo;scope of work,&rdquo; a proof of loss, or a release
          until you understand what you are agreeing to.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What NOT to Do
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Do not throw anything away before documenting it.</li>
        <li>Do not give a recorded statement without preparation.</li>
        <li>Do not accept a payment or sign a release without understanding it fully.</li>
        <li>Do not hire a contractor to start permanent repairs before the adjuster inspects.</li>
        <li>Do not post about the loss on social media (insurers check).</li>
        <li>Do not guess at dollar amounts when speaking to the insurer.</li>
        <li>Do not let the insurer pressure you to settle quickly.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Call a Professional
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every claim needs a professional representative. But some do — and the earlier
        you engage one, the better the outcome. Consider calling a{' '}
        <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
          Public Adjuster
        </Link>{' '}
        if:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The damage is extensive (total loss, major fire, widespread water).</li>
        <li>You do not have time to manage the claim yourself.</li>
        <li>You feel overwhelmed by the process.</li>
        <li>The damage involves complex coverage issues (commercial, multiple buildings, disputed cause).</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        A Public Adjuster works on contingency — no upfront cost. They handle documentation,
        estimating, and negotiation. The earlier they are involved, the more complete the
        initial claim submission will be.
      </p>

      <CalloutBox variant="tip" title="The Clock Is Running">
        <p>
          Under 10 CCR &sect;&nbsp;2695.5(e) (California&apos;s Fair Claims Settlement
          Practices Regulations), the insurer has 15 calendar days to acknowledge the claim
          and begin investigating. If a deadline is missed, document it &mdash; every missed
          deadline is evidence that may be useful later. See{' '}
          <Link href="/resources/insurer-obligations-cheat-sheet" className="text-[#1F3964] underline font-medium">
            What Your Insurance Company Is Required to Do
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Comes Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the first 72 hours are behind you and the claim is reported, the focus shifts to
        the carrier&apos;s response &mdash; adjuster assignment, the first inspection, and
        early documentation requests. See{' '}
        <Link href="/resources/first-week-of-claim" className="text-[#2E74B5] underline">
          What to Expect in the First Week of Your Claim
        </Link>{' '}
        for a day-by-day walkthrough of that phase.
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
