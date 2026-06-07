import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Should I File a Claim? How to Decide',
  description:
    'Not every loss should be a claim. A decision framework for when to file and when to pay out of pocket — considering deductibles, CLUE reports, and premium impact.',
  summary:
    'File a claim only when the loss clearly exceeds your deductible and is unlikely to raise premiums or harm your CLUE record. For small losses near the deductible, paying out of pocket is often the smarter financial choice.',
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
        You have damage to your property. Your first instinct is to call the insurance
        company — that is what you pay them for. But not every loss should be a claim.
        Sometimes the smarter move is to pay for the repair yourself and keep your claims
        history clean.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article helps you think through that decision before you pick up the phone.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Basic Math
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start with your deductible. If you have a $2,500 deductible and the damage will
        cost $3,000 to repair, the insurer only pays $500. That $500 payout comes with a
        claim on your record that will follow you for 5-7 years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The general rule: if the loss is less than double your deductible, think carefully.
        The payout may not be worth the consequences.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Claim Costs You (Beyond the Deductible)
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Premium increase.</strong> Most carriers will raise your premium after a
          claim — even if the loss was not your fault. Increases of 10-25% are common.
          Over 3-5 years, you may pay back more in premiums than you received in claim
          proceeds.
        </li>
        <li>
          <strong>CLUE report entry.</strong> Every claim is reported to the Comprehensive
          Loss Underwriting Exchange (CLUE). This database follows you for 7 years.
          Future insurers can see it when you apply for coverage. Multiple claims —
          especially frequency claims (many small ones) — can make you uninsurable with
          preferred carriers.
        </li>
        <li>
          <strong>Non-renewal risk.</strong> After one claim, you are usually fine. After
          two claims within 3-5 years, many carriers will non-renew your policy. In
          California&apos;s current market, being non-renewed can mean moving to the{' '}
          <Link href="/resources/california-fair-plan" className="text-[#1F3964] underline font-medium">
            FAIR Plan
          </Link>{' '}
          — more expensive, less coverage.
        </li>
        <li>
          <strong>Investigation overhead.</strong> Filing a claim means an adjuster, an
          inspection, documentation requirements, and time spent managing the process. For
          a small loss, that time may not be worth the payout.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When You SHOULD File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        File a claim when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The damage is significant — clearly exceeds 2-3x your deductible.</li>
        <li>You cannot afford the repair out of pocket.</li>
        <li>The loss involves structural damage, total loss, or safety concerns.</li>
        <li>You need ALE (temporary housing) — you cannot self-fund months of displacement.</li>
        <li>There may be hidden damage (water behind walls, smoke in HVAC, structural compromise) that could grow.</li>
        <li>A third party is injured on your property (liability).</li>
        <li>The damage was caused by a catastrophe or declared disaster (everyone is filing — there is no stigma, and your premium increase was already coming).</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When You Might NOT File
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The repair cost is less than 2x your deductible.</li>
        <li>You can afford the repair out of pocket without hardship.</li>
        <li>You already have a recent claim on your CLUE report.</li>
        <li>The damage is cosmetic and does not affect habitability or function.</li>
        <li>You are in the process of shopping for new insurance (a fresh claim hurts your options).</li>
      </ul>

      <CalloutBox variant="tip" title="You Can Report Without Filing">
        <p className="mb-2">
          In California, you can contact your insurer to ask a coverage question without
          it being recorded as a formal claim. Be explicit: &ldquo;I am not filing a claim.
          I have a coverage question.&rdquo;
        </p>
        <p>
          However, be aware that some carriers record any report of damage as a claim in
          CLUE — even if you explicitly say you are not filing. If this concerns you,
          review your policy language first or consult your agent before calling the carrier
          directly.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Percentage Deductible Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies — especially earthquake and wind/hail policies — have percentage
        deductibles: 5%, 10%, or even 15% of the dwelling limit. On a home insured for $500,000,
        a 5% deductible is $25,000. You must sustain that much damage before the insurer
        pays anything.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With percentage deductibles, the filing decision is easier: if the damage is less
        than the deductible, there is nothing to file. If it exceeds the deductible, file —
        because the amount above the deductible is typically substantial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Hidden Damage Factor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes damage appears small but has unseen consequences. A small water leak may
        have caused mold behind the drywall. A minor fire may have deposited soot in the
        HVAC system. Wind that lifted a few shingles may have compromised the underlayment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you suspect hidden damage, consider filing. The cost of discovery (opening walls,
        professional testing) often exceeds what you would pay out of pocket, and the full
        scope of damage may be far larger than what is visible.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Decision Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask yourself these questions in order:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Is the repair cost clearly more than 2-3x my deductible? If no → lean toward paying out of pocket.</li>
        <li>Can I afford to pay for the repair without financial hardship? If no → file.</li>
        <li>Is there a risk of hidden damage that could grow? If yes → file.</li>
        <li>Do I already have a claim on my CLUE report from the last 3-5 years? If yes → think hard about the non-renewal risk.</li>
        <li>Is this a declared disaster or catastrophe? If yes → file (everyone else is).</li>
        <li>Does the damage affect habitability or safety? If yes → file.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Once You Decide to File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        If you decide to file, do it promptly. Your policy requires timely notice. Document
        the damage before any cleanup or repairs. See{' '}
        <Link href="/resources/first-72-hours-after-loss" className="text-[#1F3964] underline font-medium">
          What to Do in the First 72 Hours
        </Link>{' '}
        for the complete action plan, and{' '}
        <Link href="/resources/claims-process" className="text-[#1F3964] underline font-medium">
          The Claims Process Step by Step
        </Link>{' '}
        for what happens next.
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
