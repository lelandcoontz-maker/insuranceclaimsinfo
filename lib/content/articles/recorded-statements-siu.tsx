import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Recorded Statements and SIU Investigations',
  description:
    'What to expect when your insurance company requests a recorded statement or refers your claim to their Special Investigation Unit — and how to protect yourself.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company requests a recorded statement or your claim is referred to
        the Special Investigation Unit (SIU), it&apos;s natural to feel alarmed. But
        understanding the process and your rights can make a significant difference in the
        outcome.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Recorded Statements</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recorded statement is exactly what it sounds like &mdash; the insurance company asks
        you questions about your claim while recording your answers. While you generally have
        a duty to cooperate with the carrier&apos;s investigation, the scope of that cooperation
        varies by state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be careful with recorded statements. Adjusters are trained to ask questions that can
        be used against you later. Seemingly innocent questions about your daily routine, your
        maintenance history, or when you first noticed damage can become ammunition for a denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">SIU Referrals</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        SIU is the carrier&apos;s fraud investigation unit. Not every SIU referral means they
        suspect fraud. Many are triggered automatically by dollar thresholds, claim patterns,
        or simply because the adjuster flagged something they didn&apos;t understand.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim is referred to SIU, the investigation will typically involve a more
        detailed review of your claim, your claims history, and potentially a recorded statement
        or{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          Examination Under Oath
        </Link>{' '}
        (EUO). The carrier may also conduct surveillance or background checks.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Protecting Yourself</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cooperate, but know your limits</strong> &mdash; you must cooperate with
          reasonable investigation requests, but you have rights
        </li>
        <li>
          <strong>Consider hiring an attorney</strong> before any recorded statement or EUO
        </li>
        <li>
          <strong>Don&apos;t volunteer information</strong> beyond what&apos;s asked
        </li>
        <li>
          <strong>Be truthful</strong> &mdash; any misstatement can be used as grounds
          for denial
        </li>
        <li>
          <strong>Ask for questions in advance</strong> when possible, so you can prepare
          thoughtful, accurate answers
        </li>
      </ul>

      <CalloutBox variant="tip" title="SIU vs. Cooperating with Your PA">
        <p>
          As a public adjuster, if the carrier wants to do a recorded interview with my client
          through SIU, I cooperate &mdash; because the alternative of an Examination Under Oath
          is worse. An EUO takes longer, is more adversarial, involves defense attorneys, and
          costs the insured time and stress. A cooperative SIU interview often resolves the
          carrier&apos;s concerns and keeps the claim moving.
        </p>
      </CalloutBox>

    </>
  )
}
