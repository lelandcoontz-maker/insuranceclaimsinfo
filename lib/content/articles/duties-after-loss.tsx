import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Duties After Loss: What You\'re Required to Do',
  description:
    'Learn about your obligations as a policyholder after filing an insurance claim, including reporting, inspections, proof of loss, and how California law handles these requirements.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Policy Comes With Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file an insurance claim, your policy does not just require the insurance company to
        pay for covered losses — it also requires <strong>you</strong> to fulfill certain duties.
        These are typically found in a section of the policy labeled &quot;Duties After Loss&quot; or
        &quot;Conditions.&quot; Understanding these duties and complying with them is important to
        protecting your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Key Duties
      </h2>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Duty to Report the Claim Timely
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to notify the insurance company of a loss as soon as reasonably
        possible. This does not mean you must call within minutes of discovering damage, but you
        should not wait weeks or months without good reason. Prompt reporting helps establish the
        timeline of the loss and allows the insurer to inspect the damage before conditions change.
        Unreasonable delay in reporting can create problems — the insurer may argue that the delay
        caused them prejudice by preventing them from properly investigating the loss.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Duty to Exhibit Damages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You must allow the insurance company to inspect the damaged property. This means granting
        their adjuster or inspector reasonable access to your home and the damaged areas. You do not
        have to give them unlimited access at any time, but you must cooperate with reasonable
        requests to inspect. If you refuse to let the insurer see the damage, you are giving them
        grounds to question your claim.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Duty to Report to Law Enforcement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your loss involves a crime — theft, vandalism, arson, or any other criminal act — your
        policy requires you to report it to law enforcement. File a police report as soon as
        possible. The insurer will want a copy of the report, and the absence of one can raise
        questions about the legitimacy of the claim.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Duty to Submit a Proof of Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A proof of loss is a formal, sworn statement documenting the facts of the loss, the items
        damaged or destroyed, and the amount claimed. Most policies give the insurer the right to
        request a signed, sworn proof of loss. When the insurance company sends you a proof of loss
        form, they expect you to complete it, sign it under oath, and return it within the
        timeframe specified (typically 60 days, though this varies).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The proof of loss is a significant document. Because it is sworn, the information you
        provide carries legal weight. Be accurate and thorough when completing it, and do not guess
        at numbers — if you are unsure about a value, say so or get help.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Duty to Cooperate With the Investigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to cooperate with the insurer&apos;s investigation of your claim.
        This can include answering questions about the loss, providing requested documents (receipts,
        estimates, inventories), and in some cases, submitting to an examination under oath (EUO).
        Cooperation does not mean you have to agree with the insurer&apos;s assessment or accept
        their valuation — it means you must participate in the process in good faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Can the Insurer Deny Your Claim for Non-Compliance?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a critical point. In many jurisdictions, including California, the insurance company
        generally <strong>cannot</strong> deny your claim based solely on your failure to comply with
        a policy duty unless they can demonstrate that your non-compliance actually
        caused <strong>prejudice</strong> to the insurance company. Prejudice means the insurer
        suffered a material disadvantage — for example, if you waited so long to report the loss
        that the evidence was destroyed and the insurer could no longer investigate the cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Simply failing to submit a form on time, without any resulting harm to the insurer&apos;s
        ability to adjust the claim, is generally not enough to justify a denial. However, this is a
        legal area with nuances, and the burden of proving prejudice (or the lack of it) can vary.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific: Proof of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law treats the proof of loss requirement differently than some other states. Under
        California law, a proof of loss is generally <strong>not required</strong> as a condition to
        recover on your claim, even if your policy says it is. California courts have held that the
        insurer must show prejudice resulting from the failure to submit the proof of loss before
        they can use it as a basis for denial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>However</strong> — and this is important — just because California law does not
        strictly require it does not mean you should ignore the request. Failing to submit a proof
        of loss when asked can create unnecessary friction, delay your claim, and potentially lead to
        attorney involvement and legal fees that could have been avoided. The practical reality is
        that submitting the proof of loss, when properly completed, moves your claim forward and
        demonstrates good faith on your part.
      </p>

      <CalloutBox variant="legal" title="Protect Your Claim: Comply With Your Duties">
        <p>
          Even when California law may not strictly require compliance with every policy duty, the
          safest approach is to comply anyway. Submit the proof of loss when requested. Allow
          inspections. Respond to reasonable requests for information. Compliance protects your claim,
          demonstrates good faith, and avoids giving the insurance company an excuse to slow down or
          complicate the process. Non-compliance, even when technically permissible, can create
          problems that are expensive and time-consuming to resolve.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Fulfilling Your Duties
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Report promptly.</strong> Call your insurance company as soon as you discover the
          loss. Follow up in writing (email) to create a paper trail.
        </li>
        <li>
          <strong>Document everything.</strong> Take photos and video of the damage before any
          cleanup or repairs begin. Keep receipts for any emergency repairs you make.
        </li>
        <li>
          <strong>Respond to requests in writing.</strong> When the insurer asks for documents or
          information, respond in writing and keep copies of everything you send.
        </li>
        <li>
          <strong>Meet deadlines.</strong> If the policy specifies a timeframe for submitting a proof
          of loss or other documents, meet it. If you need more time, request an extension in writing
          before the deadline passes.
        </li>
        <li>
          <strong>Get help if you need it.</strong> If you are unsure how to complete a proof of loss
          or respond to an examination under oath, consult with a{' '}
          <Link href="/public-adjuster" className="text-blue-700 underline hover:text-blue-900">Public Adjuster</Link> or
          an attorney before responding.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is educational and is not legal advice. Insurance policies and the laws that
        govern them vary by state and by policy. If you are facing a specific situation involving
        your duties after a loss — especially an examination under oath or a disputed proof of
        loss — you should consult with a licensed attorney who specializes in insurance claims in
        your jurisdiction.
      </p>
    </>
  )
}
