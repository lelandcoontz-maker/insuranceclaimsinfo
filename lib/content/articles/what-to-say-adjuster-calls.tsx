import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Your Insurance Company Just Called — What to Say and What Not to Say',
  description:
    'A practical guide for your first conversation with the insurance adjuster. What to volunteer, what to hold back, and how to be cooperative without hurting your claim.',
  summary:
    'When the adjuster first calls, be cooperative and factual but brief: report what happened without speculating about cause, value, or fault, and decline to give a recorded statement or accept an early figure on the spot. Let the documentation make your case.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster will call you. It might be within hours of your loss, it might be a
        few days. Either way, you will be on the phone with someone whose job is to
        investigate your claim and determine how much the insurance company will pay. What
        you say in that conversation matters.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not about being dishonest. It is about being strategic. You should be
        truthful, cooperative, and factual — but you do not need to hand the adjuster
        ammunition to reduce your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The First Call: What to Expect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster will typically ask:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>What happened?</li>
        <li>When did it happen?</li>
        <li>What is the extent of the damage?</li>
        <li>Is the property habitable?</li>
        <li>Did you take steps to prevent further damage?</li>
        <li>When can they inspect the property?</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are all reasonable questions. Answer them factually and briefly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Say
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>State the facts.</strong> &ldquo;There was a fire in the kitchen on
          Tuesday around 3pm. The fire department responded. The kitchen and dining room
          are destroyed and there is smoke damage throughout.&rdquo;
        </li>
        <li>
          <strong>Describe what you did to mitigate.</strong> &ldquo;I tarped the roof
          opening and hired a board-up company.&rdquo;
        </li>
        <li>
          <strong>Be honest about what you know and don&apos;t know.</strong> &ldquo;I
          don&apos;t know the full extent of the damage yet. I&apos;ll know more after a
          thorough inspection.&rdquo;
        </li>
        <li>
          <strong>Confirm everything important.</strong> &ldquo;Can you email me a
          confirmation of this call with my claim number and your direct contact?&rdquo;
        </li>
        <li>
          <strong>Ask what they need from you.</strong> &ldquo;What documentation do you
          need me to provide, and by when?&rdquo;
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What NOT to Say
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Do not estimate dollar amounts.</strong> You do not know what the damage
          will cost to repair. If you say &ldquo;I think it&apos;s maybe $20,000&rdquo; and
          the real number is $80,000, that early guess will follow you. Say: &ldquo;I
          don&apos;t have an estimate yet.&rdquo;
        </li>
        <li>
          <strong>Do not speculate about cause.</strong> If you are not sure what started the
          fire or where the water came from, say so. &ldquo;I don&apos;t know the cause yet.
          That&apos;s still being determined.&rdquo; Speculation can lead to coverage problems.
        </li>
        <li>
          <strong>Do not minimize the damage.</strong> Do not say &ldquo;it&apos;s not that
          bad&rdquo; to be polite. If it is bad, say it is bad. If you do not know the full
          extent, say that.
        </li>
        <li>
          <strong>Do not volunteer pre-existing conditions.</strong> If the adjuster asks
          about maintenance history, answer honestly. But do not volunteer &ldquo;well, the
          roof was pretty old&rdquo; or &ldquo;we had a small leak there before.&rdquo; Let
          them ask specific questions.
        </li>
        <li>
          <strong>Do not agree to a recorded statement on the spot.</strong> You have the
          right to schedule it at a time when you are prepared. Say: &ldquo;I&apos;d prefer
          to schedule that for later this week when I have my documents together.&rdquo;
        </li>
        <li>
          <strong>Do not admit fault or negligence.</strong> Even if you think the damage
          might be your fault, do not say so. Fault is a legal determination. Let the
          investigation determine causation.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Recorded Statements">
        <p className="mb-2">
          The adjuster may ask to record the call or schedule a formal recorded statement.
          You are generally required to cooperate, but you are not required to do it on the
          spot.
        </p>
        <p>
          Schedule it for 2-3 days later. Use that time to review your policy, organize
          your thoughts, and understand what they are likely to ask. See{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#1F3964] underline font-medium">
            Recorded Statements &amp; SIU
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Quick Settlement&rdquo; Offer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will offer a fast payment in the first call: &ldquo;We can cut you
        a check for $5,000 today to get things started.&rdquo; This is not necessarily a
        trick — advance payments are legitimate — but do not sign anything that says
        &ldquo;full and final settlement&rdquo; or that releases the insurer from further
        obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Advance payments are fine. Final settlements in the first 48 hours are almost always
        a bad deal for the policyholder — because you do not yet know the full extent of
        the damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After Every Call
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Write down what was discussed while it is fresh.</li>
        <li>Send a confirmation email: &ldquo;Per our call today, you stated that...&rdquo;</li>
        <li>Note any promises made: &ldquo;Adjuster said they would inspect by Friday.&rdquo;</li>
        <li>Note any deadlines given or agreed to.</li>
        <li>Save the email in your claim file.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This confirmation habit is the single most valuable thing you can do. It creates a
        written record that protects you if things go wrong later. See{' '}
        <Link href="/resources/claim-negotiation-letters" className="text-[#1F3964] underline font-medium">
          How to Write Effective Claim Letters
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Be truthful. Be factual. Be brief. Do not guess. Do not speculate. Do not volunteer
        information beyond what is asked. And document everything in writing after the call.
        The adjuster is not your enemy — but they are not your advocate either. They work for
        the insurance company. You look out for you.
      </p>
    </>
  )
}
