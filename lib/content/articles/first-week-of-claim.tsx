import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What to Expect in the First Week of Your Claim',
  description:
    'A day-by-day reality check for the first week after filing an insurance claim. What happens, what the adjuster will ask, and what you should be doing each day.',
  summary:
    'In the first week, your insurer assigns an adjuster who schedules an inspection and requests documentation. Use the time to document damage, track living expenses, and organize records rather than waiting passively for the insurer to set the pace.',
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
        You filed your claim. Now what? The first week sets the tone for the entire process.
        If you are organized and proactive, the claim moves faster and you get paid more. If
        you wait passively for the insurance company to tell you what to do, you lose control.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what actually happens in the first week &mdash; and what you should be doing.
      </p>

      <CalloutBox variant="info" title="Still in the First 72 Hours?">
        <p>
          If the loss just happened, start with{' '}
          <Link href="/resources/first-72-hours-after-loss" className="text-[#1F3964] underline font-medium">
            What to Do in the First 72 Hours After a Loss
          </Link>{' '}
          first &mdash; safety, mitigation, and documentation before cleanup. This guide
          picks up after the claim has been reported.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Days 1–2: Claim Acknowledgment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After you file, the insurer assigns your claim a number and routes it to an adjuster.
        You should hear from the assigned adjuster within 1-3 business days. Legally, they
        have 15 calendar days to acknowledge receipt in writing — but most carriers make
        initial contact faster.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Continue documenting damage with photos and video.</li>
        <li>Continue your contents list (go room by room, 30 minutes per day).</li>
        <li>Keep all receipts for emergency repairs, hotel, meals, gas.</li>
        <li>Read your policy — at minimum, the declarations page and Coverage A-D sections.</li>
        <li>If displaced, get settled in temporary housing and document the cost.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Days 2–4: The Adjuster Calls
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The assigned adjuster will call to introduce themselves, ask about the loss, and
        schedule an inspection. This is the call covered in{' '}
        <Link href="/resources/what-to-say-adjuster-calls" className="text-[#1F3964] underline font-medium">
          What to Say and What Not to Say
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Answer factually and briefly. Do not estimate dollar amounts.</li>
        <li>Schedule the inspection at a time when you can be present.</li>
        <li>Ask what documentation they need from you.</li>
        <li>Get the adjuster&apos;s direct phone and email.</li>
        <li>Send a follow-up email confirming everything discussed.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Days 3–5: Prepare for the Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the adjuster arrives, prepare:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Walk through the property and note every area of damage you want the adjuster to see.</li>
        <li>Make a written list — room by room — of damage locations. Adjusters rush. If you do not point it out, they may miss it.</li>
        <li>Have your photos and video ready to share (especially anything that has been cleaned up or dried out since the loss).</li>
        <li>Clear access paths so the adjuster can reach all affected areas.</li>
        <li>If attic or crawlspace access is needed, have a ladder ready.</li>
        <li>Be present during the entire inspection. Walk with the adjuster.</li>
      </ul>

      <CalloutBox variant="tip" title="Recording the Inspection — A Quick Note">
        <p>
          Video-only recording of an inspection of your own property is generally permissible in
          California. Audio recording is different: California is an all-party consent state under
          Penal Code &sect; 632, and the rules differ depending on whether you are recording an
          in-person inspection, a phone call, or an Examination Under Oath. Before you record any
          conversation with the insurer&rsquo;s representative, read{' '}
          <Link href="/resources/recording-insurance-inspections" className="text-[#1F3964] underline font-medium">
            Recording Insurance Inspections
          </Link>{' '}
          — it walks through each scenario and the layered-defense approach. The legal stakes are
          real (civil and criminal), and the analysis is fact-specific, so consult an attorney if
          your situation has any wrinkles.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Days 4–7: The Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster comes to your property to assess the damage. They will photograph,
        measure, and take notes. They may use Xactimate software to build an estimate on
        a tablet.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>During the inspection:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Walk with them through every affected room and area.</li>
        <li>Point out damage they might miss (inside cabinets, behind furniture, ceiling areas, closets).</li>
        <li>Point out odors (smoke, mold, sewer) even if not visible.</li>
        <li>Ask them to check areas you cannot access (roof, attic, under flooring).</li>
        <li>Ask questions: &ldquo;Is this included in your scope? What about this?&rdquo;</li>
        <li>Do NOT sign anything during the inspection. They may offer a scope document — say you need to review it first.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Days 5–7: After the Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the inspection, the adjuster writes their estimate and submits it for approval.
        You will not get a payment immediately — it typically takes 5-15 additional days
        after the inspection. During this time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Get your own repair estimates from 1-2 licensed contractors. You will need these to compare against the insurer&apos;s estimate.</li>
        <li>Continue your contents inventory. Be thorough — you will not get a second chance at a comprehensive list.</li>
        <li>If you found damage after the adjuster left, photograph it and notify the adjuster by email immediately.</li>
        <li>Submit ALE receipts if you are displaced.</li>
        <li>Start researching: read the relevant articles on this site for your type of loss.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Does NOT Happen in Week 1
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>You will probably not receive a payment yet (unless an advance is requested).</li>
        <li>You will probably not receive a written estimate yet.</li>
        <li>The full scope of damage may not be determined yet — hidden damage takes time to discover.</li>
        <li>Permanent repairs should not begin yet — wait until the insurer has inspected and agreed on scope.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Red Flags in Week 1
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are not normal and may signal a problem:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>No contact from an adjuster within 5 business days.</li>
        <li>Adjuster asks for a recorded statement before inspecting.</li>
        <li>Adjuster says they will not inspect and will work from photos only.</li>
        <li>Insurer immediately assigns to Special Investigations Unit (SIU).</li>
        <li>Adjuster pressures you to accept a fast settlement before inspection.</li>
        <li>Adjuster tells you to use a specific contractor (&ldquo;our program vendor&rdquo;) before you have chosen one.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        After week one, the process enters the investigation and payment phase. See{' '}
        <Link href="/resources/claims-process" className="text-[#1F3964] underline font-medium">
          The Claims Process Step by Step
        </Link>{' '}
        for what happens from here, and{' '}
        <Link href="/resources/insurer-obligations-cheat-sheet" className="text-[#1F3964] underline font-medium">
          What Your Insurance Company Is Required to Do
        </Link>{' '}
        to know the deadlines that govern everything from this point forward.
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
