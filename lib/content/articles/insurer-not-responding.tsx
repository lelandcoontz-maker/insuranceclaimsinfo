import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What to Do When Your Insurance Company Stops Returning Calls',
  description:
    'A concrete escalation path when your insurer goes silent: supervisor requests, written demands, CDI complaints, and California regulatory deadlines they must meet.',
  summary:
    'When your insurer goes silent, escalate in writing: request a supervisor, send a dated written demand, and cite the response deadlines California regulations require. If silence continues, file a complaint with the Department of Insurance. Document every attempt to reach them.',
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
        You have called. You have left voicemails. You have sent emails. Silence. Your insurance
        company is not responding to your claim, and every day of delay costs you money, extends
        your displacement, and compounds your stress. This is not an accident. Delay is a
        strategy. It wears policyholders down until they accept less or give up entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not have to accept it. California law imposes specific deadlines on insurers, and
        violations carry consequences. This guide gives you a concrete escalation path, from
        polite follow-up to formal regulatory complaint.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Law: California&rsquo;s 15-Day Response Requirement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect;&nbsp;2695.5(b) (California&rsquo;s Fair Claims Settlement Practices Regulations),
        every insurer must acknowledge and respond to communications from a claimant within 15
        calendar days. This is not a suggestion. It is a regulatory mandate. When your insurer
        ignores your calls and emails for more than 15 days, they are violating California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional deadlines that apply:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>15 days:</strong> Insurer must acknowledge receipt of your claim (10 CCR &sect;&nbsp;2695.5(e)).
        </li>
        <li>
          40 days: Insurer must accept or deny your claim after receiving proof of loss (10 CCR §2695.7(b)).
        </li>
        <li>
          30 days: After accepting a claim, the insurer must pay (10 CCR §2695.7(h)).
        </li>
        <li>
          <strong>15 days:</strong> Insurer must respond to each communication regarding a claim
          (10 CCR &sect;&nbsp;2695.5(b)).
        </li>
      </ul>

      <CalloutBox variant="tip" title="Document Every Contact Attempt">
        <p>
          Before you escalate, build your paper trail. Log every phone call (date, time, number
          called, who you spoke to or that you left a voicemail). Save every email. Note every
          unreturned message. This log becomes your evidence when you file a complaint or pursue
          bad faith.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Escalation Level 1: The Supervisor Request
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your first escalation is simple. Call the insurer&rsquo;s main claims line and ask to
        speak with your adjuster&rsquo;s supervisor or manager. If you cannot reach them by phone,
        send an email to the adjuster with the subject line: &ldquo;Request for Supervisor Contact
        Information &mdash; Claim [Number].&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In that email, state:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The dates of your unanswered communications</li>
        <li>What you are waiting for (inspection, payment, response to supplement, etc.)</li>
        <li>That you are requesting the matter be escalated to a supervisor</li>
        <li>A deadline for response (7 days is reasonable)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claim delays are caused by overloaded adjusters who carry too many files. A supervisor
        contact sometimes shakes the file loose. Sometimes it does not. If this does not produce a
        response within 7 days, escalate further.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Escalation Level 2: The Written Demand
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A formal written demand changes the dynamic. It signals that you know your rights and are
        preparing to enforce them. Send this by email and certified mail (return receipt requested).
        Address it to the claims department and, if possible, a named manager.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your demand letter should include:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your policy number, claim number, and date of loss.</li>
        <li>A chronological list of every unanswered communication with dates.</li>
        <li>
          A citation to 10 CCR &sect;&nbsp;2695.5(b) and the 15-day response requirement.
        </li>
        <li>
          A statement that the insurer&rsquo;s failure to respond constitutes a violation of
          California&rsquo;s Fair Claims Settlement Practices Regulations.
        </li>
        <li>
          A specific demand: what action you need them to take and by what date.
        </li>
        <li>
          A statement that if you do not receive a substantive response by [date], you will file a
          complaint with the California Department of Insurance.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Give them 10 to 15 days from receipt. This is more than California law requires (they
        already violated the 15-day rule), but it demonstrates reasonableness on your part.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For detailed guidance on writing effective letters to insurers, see our{' '}
        <Link href="/resources/claim-negotiation-letters" className="text-blue-700 underline hover:text-blue-900">
          negotiation letters guide
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Always Put It in Writing">
        <p>
          Phone calls are easy for insurers to deny or &ldquo;forget.&rdquo; Emails create an
          automatic timestamp. Certified mail creates proof of delivery. From this point forward,
          every communication with your insurer should be in writing. If you must call, follow up
          immediately with an email summarizing the conversation: &ldquo;Per our phone call today
          at 2:15 PM, you confirmed that...&rdquo;
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Escalation Level 3: CDI Complaint
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) regulates every insurer doing business in
        California. When an insurer violates claims handling regulations, CDI has the authority to
        investigate, impose fines, and order corrective action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a CDI complaint is free and can be done online. You will need:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your policy and claim numbers</li>
        <li>The insurer&rsquo;s name and your adjuster&rsquo;s name</li>
        <li>A chronological summary of the problem</li>
        <li>Copies of your unanswered communications</li>
        <li>A copy of your written demand and any response (or lack thereof)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        CDI assigns an analyst to your complaint who contacts the insurer and requires a response.
        In many cases, this alone breaks the logjam. Insurers pay attention when the regulator
        calls. For step-by-step instructions, see our{' '}
        <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
          CDI complaint guide
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Important: A CDI complaint does not prevent you from also pursuing legal remedies. You can
        do both simultaneously.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Escalation Level 4: Attorney Referral
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer continues to stonewall after a CDI complaint, or if the amount at stake
        justifies legal representation, consult an insurance coverage attorney. In California,
        many policyholder attorneys work on contingency (they take a percentage of your recovery
        rather than charging hourly fees).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Signs it is time for an attorney:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The insurer has denied your claim entirely</li>
        <li>Non-response continues after a CDI complaint</li>
        <li>The amount in dispute justifies legal fees</li>
        <li>You suspect bad faith (the insurer knows they owe you money and is deliberately delaying)</li>
        <li>The insurer is making unreasonable demands for documentation</li>
        <li>You are dealing with a Special Investigations Unit (SIU) referral</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law (Brandt v. Superior Court, 37 Cal.3d 813 (1985)), if an insurer
        unreasonably withholds benefits, you may recover attorney fees as damages. This means a
        bad faith insurer may end up paying your lawyer on top of paying your claim. For more on
        when to hire an attorney, see our{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
          guide on when to hire an attorney
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Know Your Insurer&rsquo;s Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond response deadlines, your insurer has affirmative obligations under California law
        that they cannot avoid by simply ignoring you:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          They must conduct a thorough, fair, and objective investigation (10 CCR §2695.7(d)).
        </li>
        <li>
          California Insurance Code &sect; 790.03(h)(11) describes &mdash; as a regulatory
          standard for the Insurance Commissioner&apos;s enforcement &mdash; the practice of
          delaying investigation or payment by requiring duplicative documentation (preliminary
          claim report followed by formal proof of loss containing substantially the same
          information). Under <em>Moradi-Shalal</em>, &sect; 790.03 does not create a private
          cause of action; the standard informs what may support a common-law bad-faith claim.
        </li>
        <li>
          They must pay undisputed amounts promptly, even if other amounts remain contested
          (10 CCR &sect; 2695.7(h)).
        </li>
        <li>
          They must provide written notice of any coverage denial with specific reasons and policy
          provisions (10 CCR &sect;&nbsp;2695.7(b)(1)).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete summary of what your insurer owes you, see our{' '}
        <Link href="/resources/insurer-obligations-cheat-sheet" className="text-blue-700 underline hover:text-blue-900">
          insurer obligations cheat sheet
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself While You Wait
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While you escalate, protect your interests:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Continue mitigating damage.</strong> Your duty to protect your property from
          further damage does not pause because the insurer is not responding. Make emergency
          repairs and keep receipts.
        </li>
        <li>
          <strong>Keep paying your premium.</strong> Do not stop premium payments as a protest.
          Non-payment can result in policy cancellation, which creates a whole new problem.
        </li>
        <li>
          <strong>Watch your deadlines.</strong> Statutes of limitation and policy deadlines
          continue to run even when the insurer is non-responsive.
        </li>
        <li>
          <strong>Get contractor estimates.</strong> Use the waiting time productively by obtaining
          written repair estimates you will need for negotiation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Insurers Go Silent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the cause helps you choose the right response:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Overwhelmed adjuster:</strong> After catastrophe events, adjusters may carry
          hundreds of files. Your claim gets buried. A supervisor escalation often works.
        </li>
        <li>
          <strong>File transferred:</strong> Your claim may have been reassigned without notice.
          Call the main claims line and ask who currently handles your file.
        </li>
        <li>
          <strong>Waiting for something:</strong> The insurer may be waiting for an engineering
          report, subrogation information, or internal approval. They should communicate this, but
          often do not.
        </li>
        <li>
          <strong>Deliberate delay:</strong> Some insurers use delay as a settlement tactic,
          hoping you will accept less just to end the process. Conduct of this kind may be
          evidence of bad faith. California Insurance Code &sect; 790.03(h) describes
          unreasonable settlement practices, and while &sect; 790.03 itself does not create
          a private right of action (per <em>Moradi-Shalal v. Fireman&rsquo;s Fund Ins. Co.</em>
          (1988) 46 Cal.3d 287), those standards inform what may support a common-law
          bad-faith claim that a California-licensed attorney can evaluate.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Silence is not an answer. It is a violation. You paid premiums for years. You reported a
        legitimate claim. You deserve a timely response. Follow this escalation path methodically,
        document everything, and hold your insurer accountable. The law is on your side.
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
