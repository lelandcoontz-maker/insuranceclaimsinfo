import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Write an Effective Insurance Claim Letter',
  description:
    'Your written communications with the insurance company become the record of your claim. Learn how to write letters that protect your rights and move your claim forward.',
  summary:
    'Your written communications become the official record of your claim. Write clear, factual letters that state what you want, cite the relevant policy or regulation, and request a dated response, keeping a copy of everything you send.',
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
        Written communication is the backbone of any insurance claim. Phone calls are easily
        denied or misremembered. Emails and letters create a permanent record. Every important
        communication with your insurance company should be in writing — or followed up in
        writing immediately after a phone call.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what kinds of letters you will need to write, how to structure
        them for maximum effect, and provides frameworks you can adapt to your situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Why Written Communication Matters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies record their calls. You should assume every phone conversation
        is documented in their claim file — but only the parts they want to remember. Your
        written correspondence creates a parallel record that belongs to you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        More importantly, written communications trigger regulatory obligations. Under
        California&apos;s Fair Claims Settlement Practices Regulations, the insurer must
        respond to written communications within specific timeframes. A phone request can
        be ignored indefinitely. A written request starts a clock.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Types of Letters You May Need</h2>

      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Confirmation of Phone Call</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After every significant phone call with your adjuster, send a brief email
        summarizing what was discussed and agreed to. This is the single most important
        habit you can develop. Start with: &ldquo;Per our phone call today at [time],
        you stated that...&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster made a promise — they will re-inspect, they will add a line item,
        they will send payment by a certain date — document it in writing immediately.
        Promises disappear when adjusters change or when the file gets transferred.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Supplement Request</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you discover additional damage or the repair scope expands beyond the original
        estimate, submit a written supplement request. Include: what the additional damage
        is, when you discovered it, photos documenting it, and either your own estimate or
        a contractor&apos;s bid showing the cost.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Demand for Payment of Undisputed Amounts</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect;2695.7(h), the insurer must pay undisputed amounts within 30 days
        of reaching agreement. If they agree they owe you money but do not pay, write a
        letter citing this regulation, stating the amount agreed upon, the date agreement
        was reached, and demanding payment within the regulatory timeframe.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">4. Response to Denial</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer denies part or all of your claim, respond in writing. Your response
        should address each reason given for the denial, cite the policy language or
        California law that supports coverage, and request reconsideration. Do not accept
        verbal denials — demand the written denial letter first, then respond to the
        specific provisions cited.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">5. Regulatory Deadline Reminder</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer misses a regulatory deadline (15 days to acknowledge, 40 days to
        accept or deny, 30-day status updates), send a letter noting the specific deadline,
        the date it was missed, and the regulation that imposes it. This creates evidence
        for a{' '}
        <Link href="/resources/cdi-complaint" className="text-[#1F3964] underline font-medium">
          CDI complaint
        </Link>{' '}
        or bad faith claim.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">6. Appraisal Demand</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you cannot agree on the amount of loss with the insurer, most policies allow
        either party to invoke{' '}
        <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">
          appraisal
        </Link>. The demand must be in writing and reference the specific appraisal clause
        in your policy. Include the name and contact information of your chosen appraiser.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Structure an Effective Letter</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every letter to the insurance company should follow this structure:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Header information.</strong> Your name, policy number, claim number, date
          of loss, adjuster name, and the date of your letter.
        </li>
        <li>
          <strong>Statement of facts.</strong> What happened, when, and what the current
          status is. Be specific: dates, names, amounts.
        </li>
        <li>
          <strong>Citation of authority.</strong> Reference the specific policy provision,
          regulation (10 CCR &sect;2695.X), or statute (California Insurance Code &sect;XXX)
          that supports your position.
        </li>
        <li>
          <strong>Specific request.</strong> State exactly what you want the insurer to do:
          pay $X, re-inspect the damage, provide a written explanation, schedule an
          inspection by a specific date.
        </li>
        <li>
          <strong>Deadline.</strong> Give them a reasonable timeframe to respond. Fourteen
          days is standard for most requests. For regulatory-deadline letters, cite the
          regulation&apos;s own deadline.
        </li>
        <li>
          <strong>Next steps if no response.</strong> State what you will do if they do not
          comply: file a CDI complaint, invoke appraisal, consult an attorney.
        </li>
      </ol>

      <CalloutBox variant="legal" title="Tone Matters">
        <p className="mb-2">
          Professional. Factual. Firm. Never threatening, never emotional, never personal.
          Write as if a judge will read this letter someday — because they might. The goal
          is to demonstrate that you are informed, organized, and serious.
        </p>
        <p>
          The best letters read like they were written by someone who has already decided to
          litigate if necessary. The insurer should feel that continuing to underpay or delay
          will cost them more than paying the claim fairly.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Key Phrases That Get Attention</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain language signals to the insurer that you know your rights:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>&ldquo;Per 10 CCR &sect;2695.7(b), you are required to...&rdquo;</li>
        <li>&ldquo;This constitutes a violation of the California Fair Claims Settlement Practices Regulations.&rdquo;</li>
        <li>&ldquo;Please provide the specific policy language you are relying upon for this denial.&rdquo;</li>
        <li>&ldquo;I am formally invoking the appraisal clause set forth in [section] of my policy.&rdquo;</li>
        <li>&ldquo;I reserve all rights and remedies available under the policy and applicable law.&rdquo;</li>
        <li>&ldquo;Please be advised that I am documenting all communications for potential regulatory complaint.&rdquo;</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Delivery Methods</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Email.</strong> Fast, creates automatic timestamp. Send to both the adjuster
          and their supervisor. Request read receipt if your email client supports it.
        </li>
        <li>
          <strong>Certified mail, return receipt requested.</strong> For formal demands,
          appraisal invocations, and anything you may need to prove was received. The green
          card is proof of delivery.
        </li>
        <li>
          <strong>Both.</strong> For critical communications — send by email for speed and
          certified mail for proof. The certified mail copy protects you if the insurer
          claims they never received the email.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Paper Trail Is Everything</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim eventually goes to{' '}
        <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">
          appraisal
        </Link>{' '}
        or litigation, the paper trail you built becomes your evidence. Every letter
        documenting a missed deadline. Every email confirming what the adjuster said. Every
        written request that went unanswered. These build the case for{' '}
        <Link href="/resources/bad-faith" className="text-[#1F3964] underline font-medium">
          bad faith
        </Link>{' '}
        if it comes to that.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start a folder — physical or digital — for every piece of written communication.
        Date everything. Save copies of what you send and what you receive. If you speak by
        phone, send the confirmation email within 24 hours while the conversation is fresh.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        You do not need to be a lawyer to write effective letters. You need to be specific,
        factual, and persistent. Write as if a judge will read it someday. That discipline
        alone will change how the insurance company handles your claim.
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
