import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'My Claim Was Denied — What Are My Options?',
  description:
    'A step-by-step guide for California homeowners whose insurance claim was denied: how to understand the denial, gather evidence, appeal, file a CDI complaint, and get professional help.',
  summary:
    'A denied claim is not the end. Read the denial letter to find the exact reason, gather evidence that rebuts it, and appeal in writing, then escalate to a Department of Insurance complaint or professional help if needed. Many denials are reversible.',
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
        A claim denial is not the end. It feels like it — you are already dealing with property
        damage, and now the company you have been paying premiums to for years says they will not
        help. But a denial is a starting point for a fight, not a final answer. Insurance companies
        deny claims that should be paid. They do it routinely. And in California, you have real
        options to push back.
      </p>

      <CalloutBox variant="important" title="Do Not Accept the First 'No'">
        <p>
          Studies and regulatory data consistently show that policyholders who challenge denials
          recover more than those who accept them. Many denials are reversed on appeal or after
          professional involvement. The insurer is betting you will give up. Do not.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 1: Understand the Denial Letter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, an insurer must provide a written denial that cites the specific policy
        provisions it is relying on (Cal. Code Regs., tit. 10, Section 2695.7(b)(1)). The denial
        letter should tell you exactly which exclusion, condition, or limitation the insurer claims
        applies. If the denial is vague — &quot;not covered under your policy&quot; without citing
        specific language — that itself may be a regulatory violation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read the denial letter carefully. Identify the stated reason. Then pull out your policy and
        read the specific provision cited. Does the exclusion actually say what the insurer claims it
        says? Does it apply to your specific facts? Insurers sometimes misquote their own policies or
        apply exclusions to situations they were never intended to cover.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 2: Identify Whether This Is a Coverage Denial or an Amount Dispute
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two fundamentally different types of claim disputes, and they require different
        approaches:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage denial:</strong> The insurer says the loss is not covered at all — wrong
          peril, exclusion applies, policy was not in force, condition was not met. This is a legal
          dispute about what the policy covers.
        </li>
        <li>
          <strong>Amount dispute:</strong> The insurer accepts the loss is covered but offers less
          than the damage is worth — low estimate, excessive depreciation, missed scope. This is a
          factual dispute about how much the damage costs to repair.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage denials are legal fights. They typically require an attorney. Amount disputes can
        often be resolved through negotiation, supplemental documentation, or the appraisal process.
        Know which kind of fight you are in.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 3: Gather Counter-Evidence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you understand the denial reason, assemble evidence that contradicts it. Common examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>If they claim pre-existing damage:</strong> Photos before the loss, maintenance
          records, prior inspection reports, neighbor testimony about the event
        </li>
        <li>
          <strong>If they claim a maintenance exclusion:</strong> Evidence that the damage resulted
          from a sudden, accidental event — not gradual deterioration
        </li>
        <li>
          <strong>If they claim the wrong peril:</strong> Expert reports (engineer, contractor,
          meteorologist) establishing the actual cause of loss
        </li>
        <li>
          <strong>If they claim you failed a policy condition:</strong> Evidence of compliance — when
          you reported, what you did to mitigate, your cooperation history
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 4: Write a Disagreement Letter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put your disagreement in writing. Send it to the adjuster and the claims manager. A strong
        disagreement letter includes:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your claim number, policy number, and date of loss</li>
        <li>A clear statement that you disagree with the denial</li>
        <li>The specific denial reason from their letter</li>
        <li>Your factual and policy-based arguments against the denial</li>
        <li>Supporting documentation (attached or referenced)</li>
        <li>A request for reconsideration with a specific deadline (14 to 21 days)</li>
        <li>A statement that you reserve all rights under California law</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Send by email and certified mail. Keep copies of everything. For more on writing effective
        claim letters, see our guide on{' '}
        <Link href="/resources/claim-negotiation-letters" className="text-blue-700 underline hover:text-blue-900">
          claim negotiation letters
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 5: File a CDI Complaint
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) investigates complaints against insurers. Filing
        a complaint does two things: it puts the insurer on notice that a regulator is watching, and
        it creates an official record of their conduct. The CDI can require the insurer to
        re-examine the claim, provide a more detailed explanation, or reverse the denial if it
        violates regulations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CDI complaint is free and does not require an attorney. It is not a lawsuit and cannot
        award you money directly. But it is leverage. Many insurers reconsider their position once
        the CDI is involved. For the full process, see our{' '}
        <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
          CDI complaint guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 6: Hire a Professional
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the denial stands after your own efforts, it is time to bring in professional help. Who
        you hire depends on the type of dispute:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Public Adjuster:</strong> Best for amount disputes — when the insurer accepts
          coverage but underpays. A{' '}
          <Link href="/resources/what-public-adjuster-does" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          works on your behalf to document, estimate, and negotiate the claim. Licensed by the state.
          Typically works on a percentage of the recovery.
        </li>
        <li>
          <strong>Insurance attorney:</strong> Essential for coverage denials, bad faith situations,
          and cases where the insurer is playing hardball. An attorney can file suit, pursue bad
          faith damages, and force the insurer to the table. For help deciding, see our guide on{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
            when to hire an attorney
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bad Faith Angle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every denial is bad faith. But some are. If the insurer denied your claim without a
        reasonable basis — without investigating, by misrepresenting the policy, or by ignoring
        evidence that contradicts their position — that may constitute{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>. Bad faith exposes the insurer to damages beyond the policy limits: emotional
        distress, punitive damages, and attorney fees (Brandt fees). This is why insurers sometimes
        reverse unreasonable denials once an attorney gets involved — the cost of being wrong on a
        bad faith claim is enormous.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Timeline and Deadlines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not sit on a denial indefinitely. While there is no specific deadline to &quot;appeal&quot;
        a denial (it is not a formal appeal process like in health insurance), there are statutory
        and contractual deadlines that limit how long an insured has to file a lawsuit. In
        California, residential and commercial property policies subject to Cal. Ins. Code
        &sect; 2071 generally contain a <strong>12-month suit-limitation period running from
        inception of the loss</strong>, extended to <strong>24 months for losses related to a
        state of emergency</strong> as defined in Cal. Gov. Code &sect; 8558(b). Whether a
        specific policy aligns with the &sect; 2071 baseline, and whether equitable tolling
        applies, are questions for a California-licensed attorney. Missing the deadline can
        bar the right to challenge the denial in court.
      </p>

      <CalloutBox variant="warning" title="Do Not Let Time Run Out">
        <p>
          Check your policy for a &quot;suit limitation&quot; or &quot;legal action&quot; provision.
          It will state how long after a loss you can file a lawsuit. Mark this date. If you are
          approaching it and the dispute is unresolved, consult an attorney immediately. This
          deadline can sometimes be tolled (extended) under specific circumstances, but do not count
          on it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Path Forward
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A denied claim is not a closed case. It is the beginning of a process. Understand the denial.
        Build your evidence. Push back in writing. Involve regulators. Hire professionals if needed.
        Insurance companies deny claims knowing that most people will not fight back. Be the
        exception. The money is yours — you paid for it every month in premiums. Go get it.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
