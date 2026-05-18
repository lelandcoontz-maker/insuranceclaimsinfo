import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to File a Complaint With the California Department of Insurance',
  description:
    'A step-by-step guide to filing a CDI complaint: what to include, what CDI can and cannot do, realistic timelines, and how to use the complaint process as leverage.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) exists to regulate insurance companies and
        protect consumers. When your insurer is not playing by the rules — missing deadlines, refusing
        to communicate, denying claims without proper basis — you can file a complaint that puts a
        state regulator on the case. It is free, it does not require a lawyer, and it works more
        often than most people expect.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What CDI Can Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI has regulatory authority over all admitted insurers in California. When you file a
        complaint, an analyst reviews your situation and contacts the insurer. The CDI can:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Require the insurer to respond in writing, explaining their position</li>
        <li>Investigate whether the insurer violated the Insurance Code or Fair Claims Settlement Practices Regulations</li>
        <li>Require corrective action if a violation is found</li>
        <li>Impose fines for regulatory violations</li>
        <li>Refer patterns of abuse for formal enforcement proceedings</li>
        <li>Issue a written determination of whether the insurer&apos;s conduct violated regulations</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What CDI Cannot Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be realistic about the CDI&apos;s limitations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>CDI cannot award you money. It is not a court and cannot order the insurer to pay your claim.</li>
        <li>CDI cannot resolve coverage disputes. If the dispute is about policy interpretation, CDI will note that it is a legal question beyond its scope.</li>
        <li>CDI cannot provide legal advice or represent you.</li>
        <li>CDI cannot force an insurer to change a coverage decision — only to follow proper procedures.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite these limitations, a CDI complaint is powerful. When an insurer knows a regulator is
        watching, behavior often changes. Claims that were stalled for months suddenly get attention.
        Adjusters who stopped responding suddenly call back. The complaint creates accountability.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        File a CDI complaint when the insurer has violated procedural requirements or acted
        unreasonably:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Failed to acknowledge your claim within 15 days (Cal. Code Regs., tit. 10, Section 2695.5(e))</li>
        <li>Failed to accept or deny within 40 days of receiving your proof of loss (Cal. Code Regs., tit. 10, Section 2695.7(b))</li>
        <li>Stopped communicating — not returning calls or responding to written inquiries</li>
        <li>Denied without citing specific policy language as required</li>
        <li>Failed to inform you of all coverages that apply to your loss (Cal. Code Regs., tit. 10, Section 2695.4(a))</li>
        <li>Failed to pay undisputed amounts while disputing the remainder</li>
        <li>Pressured you to accept a settlement without providing a fair basis for the amount</li>
      </ul>

      <CalloutBox variant="tip" title="Cite the Specific Regulation">
        <p>
          Your complaint is stronger when you cite the specific regulation the insurer violated.
          The California Fair Claims Settlement Practices Regulations are in the California Code of
          Regulations, Title 10, Sections 2695.1 through 2695.14. Reference the specific section
          number in your complaint. It tells the CDI analyst exactly what to investigate.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to File: Step by Step
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI accepts complaints through its online portal. Here is the process:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Go to the CDI website:</strong> Visit insurance.ca.gov and navigate to
          &quot;File a Complaint&quot; (or go directly to the complaint portal)
        </li>
        <li>
          <strong>Create an account</strong> (or log in if you have one)
        </li>
        <li>
          <strong>Select the complaint type:</strong> Choose &quot;Property&quot; and then the
          specific sub-category (claim handling delay, denial, underpayment, etc.)
        </li>
        <li>
          <strong>Provide your policy information:</strong> Insurer name, policy number, claim
          number, date of loss
        </li>
        <li>
          <strong>Describe the problem:</strong> Write a clear, factual narrative of what happened
          and what the insurer did wrong (see below for tips)
        </li>
        <li>
          <strong>Upload supporting documents:</strong> Attach your denial letter, relevant
          correspondence, your policy dec page, and any evidence of the violation
        </li>
        <li>
          <strong>Submit:</strong> You will receive a confirmation number and case assignment
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Include in Your Complaint
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The quality of your complaint determines how effectively CDI can act. Include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A clear timeline:</strong> Date of loss, date you reported the claim, key dates
          for inspections, correspondence, and deadlines missed
        </li>
        <li>
          <strong>The specific violation:</strong> What regulation or law the insurer violated, with
          citation if possible
        </li>
        <li>
          <strong>What you want:</strong> State specifically what outcome you are seeking — a
          response, a re-evaluation, payment of the undisputed amount, etc.
        </li>
        <li>
          <strong>Documentation:</strong> The denial letter, your disagreement letter, proof of
          mailing dates, the claim file correspondence
        </li>
        <li>
          <strong>Factual tone:</strong> State facts, not emotions. &quot;The insurer has not
          responded to my three written inquiries dated March 5, March 19, and April 2&quot; is
          stronger than &quot;they are ignoring me.&quot;
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Exaggerate">
        <p>
          Stick to facts you can document. If you say the insurer missed a deadline, attach the
          correspondence showing the dates. If you say they failed to investigate, explain what
          investigation steps were skipped. Exaggeration or inaccuracy in your complaint undermines
          your credibility.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Timeline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After you file, expect this general timeline:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>1-5 business days:</strong> CDI assigns your case to an analyst</li>
        <li><strong>5-15 business days:</strong> CDI contacts the insurer and requests a response</li>
        <li><strong>15-30 days:</strong> Insurer provides its response to CDI</li>
        <li><strong>30-60 days:</strong> CDI analyst reviews both sides and issues a determination</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Total resolution time is typically 30 to 90 days. Complex cases take longer. During this
        period, your claim continues — filing a CDI complaint does not pause the claims process or
        any deadlines that apply to you.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Using the CDI Complaint as Leverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the practical reality: sometimes the threat of a CDI complaint is as effective as
        actually filing one. When you write to the insurer and state that you will file a CDI
        complaint if the issue is not resolved by a specific date, many insurers take notice. They
        know that CDI complaints create a regulatory record. They know that too many complaints
        trigger Market Conduct examinations. They know that regulatory findings can be used against
        them in litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But do not make empty threats. If you say you will file, follow through. And if the issue is
        already severe — months of delay, a clearly improper denial, refusal to communicate — file
        immediately rather than warning first. You can reference the CDI complaint in your
        communications with the insurer: &quot;Please be advised that I have filed CDI Complaint
        No. [number] regarding your handling of this claim.&quot;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens After CDI&apos;s Determination
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CDI will send you a written determination. If CDI finds a violation, it will direct the
        insurer to take corrective action. If CDI does not find a violation, it will explain why.
        Either way, the CDI determination creates an official record that can be useful later — in
        appraisal, mediation, or litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CDI complaint does not replace your other options. You can file a CDI complaint AND hire a
        public adjuster or attorney. You can file a CDI complaint AND invoke appraisal. These
        processes run in parallel, not in sequence. Use every available tool. For more on your
        insurer&apos;s obligations, see our{' '}
        <Link href="/resources/insurer-obligations-cheat-sheet" className="text-blue-700 underline hover:text-blue-900">
          insurer obligations cheat sheet
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When CDI Is Not Enough
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the dispute is about coverage interpretation (not procedural violations), if the amount
        at stake is large, or if the insurer&apos;s conduct is so egregious that it constitutes{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>, you likely need an attorney. CDI is a regulator, not your advocate. An attorney is
        your advocate. Use both. For guidance on when an attorney is necessary, see our article on{' '}
        <Link href="/resources/insurer-not-responding" className="text-blue-700 underline hover:text-blue-900">
          what to do when your insurer is not responding
        </Link>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        The CDI exists because the legislature recognized that policyholders need protection from
        insurer misconduct. Filing a complaint is not adversarial — it is using the system as
        designed. If your insurer is not following the rules, report it. That is exactly what CDI
        is for.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
