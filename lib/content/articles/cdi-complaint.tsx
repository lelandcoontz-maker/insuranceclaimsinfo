import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Filing a CDI Complaint',
  description:
    'How to file a complaint with the California Department of Insurance, what it accomplishes, and tips for writing an effective complaint.',
  summary:
    'You can file a complaint with the California Department of Insurance against your carrier. CDI can investigate and pressure the insurer but cannot order payment. A clear, well-documented complaint is most effective and creates a useful record.',
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
        When your insurance company is not treating you fairly, you have a powerful ally: the
        California Department of Insurance (CDI). The CDI is the state agency responsible for
        regulating the insurance industry in California, and one of its core functions is
        investigating complaints from policyholders. Filing a CDI complaint is free, does not require
        an attorney, and can be an effective way to get a stalled or unfair claim back on track.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the California Department of Insurance Does
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI oversees all insurance companies doing business in California. It enforces the
        Insurance Code, the Fair Claims Settlement Practices Regulations, and other regulations designed to
        protect consumers. When you file a complaint, the CDI assigns an analyst to review your
        situation, contact the insurer, and determine whether any laws or regulations have been
        violated. The CDI has the authority to impose fines, require corrective action, and take
        enforcement action against insurers that violate the rules.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to File a Complaint
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider filing a CDI complaint when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your insurer has missed regulatory deadlines (15 days to acknowledge, 40 days to decide)</li>
        <li>The adjuster is not returning your calls or responding to written communications</li>
        <li>Your claim has been denied without a clear written explanation citing specific policy language</li>
        <li>The insurer is engaging in delay tactics without legitimate justification</li>
        <li>You believe the insurer is not conducting a fair and thorough investigation</li>
        <li>The insurer is pressuring you to accept a settlement you believe is unfairly low</li>
        <li>The insurer has failed to inform you of all coverages and benefits that apply to your loss</li>
      </ul>

      <CalloutBox variant="important" title="Do Not Wait Too Long">
        <p>
          File your complaint while the issue is active. A CDI complaint is most effective when it
          addresses an ongoing problem. If the insurer has already made a final decision and months
          have passed, the complaint may be less impactful.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI accepts complaints through its online portal at{' '}
        <strong>www.insurance.ca.gov</strong>. You can also file by phone or mail, but the online
        portal is the fastest and most efficient method. You will need:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your policy number and claim number</li>
        <li>The name of your insurance company</li>
        <li>The name of your assigned adjuster</li>
        <li>A clear description of the problem</li>
        <li>Dates of relevant communications and events</li>
        <li>Copies of relevant correspondence (denial letters, emails, estimates)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a CDI Complaint Accomplishes (and Does Not)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CDI complaint can be very effective at getting an insurer&rsquo;s attention. When the CDI
        contacts an insurer about a complaint, the matter is typically escalated within the company to
        a compliance department or senior claims manager. This alone often breaks through
        bureaucratic logjams that you could not resolve by talking to your assigned adjuster.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, there are limitations. The CDI does not act as your attorney and cannot force the
        insurer to pay a specific dollar amount. The CDI determines whether the insurer violated
        regulations, not whether the insurer&rsquo;s estimate is too low. If your dispute is purely
        about the dollar value of the loss and the insurer has otherwise followed the rules, the CDI
        may not be able to help with the valuation itself. For disputes over the amount of loss,
        the appraisal process or litigation may be more appropriate.
      </p>

      <CalloutBox variant="legal" title="CDI Complaints Create a Record">
        <p>
          Even if the CDI does not resolve your specific issue, the complaint creates an official
          record of the insurer&rsquo;s conduct. If you later pursue bad faith litigation, the CDI
          complaint and the insurer&rsquo;s response become part of the documented history. This can
          be valuable evidence.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tips for Writing an Effective Complaint
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Be specific and factual.</strong> State exactly what happened, when it happened, and
          which regulation or law you believe was violated. Avoid vague language like &ldquo;they are
          being unfair.&rdquo; Instead, say &ldquo;the insurer failed to respond to my written
          communication dated January 15 within the 15-day period required by 10 CCR &sect;
          2695.5(b).&rdquo;
        </li>
        <li>
          <strong>Include a timeline.</strong> Present events in chronological order with specific
          dates. This makes it easy for the CDI analyst to understand your situation quickly.
        </li>
        <li>
          <strong>Attach supporting documents.</strong> Include copies of denial letters, emails
          showing lack of response, your proof of loss, and any other relevant correspondence. Let
          the documents tell the story.
        </li>
        <li>
          <strong>Cite the specific regulation.</strong> If you know which section of the Fair Claims
          Settlement Practices Regulations the insurer has violated, reference it by number. This
          demonstrates that your complaint is grounded in actual regulatory requirements, not just
          frustration.
        </li>
        <li>
          <strong>State what you want.</strong> Be clear about the outcome you are seeking. Do you
          want the insurer to respond to your communications? Reconsider a denial? Complete an
          overdue investigation? Giving the CDI a clear ask makes their job easier.
        </li>
      </ul>

      <CalloutBox variant="tip" title="A Public Adjuster Can Help">
        <p>
          A licensed Public Adjuster can help you identify regulatory violations, draft the CDI
          complaint, and compile the supporting documentation. If you are unsure whether your
          insurer&rsquo;s conduct crosses the line, a Public Adjuster can evaluate the situation and
          advise you on the best course of action.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI exists to protect you. When your insurer is not following the rules, a well-drafted
        complaint puts regulatory pressure on the carrier and creates an official record that can
        benefit you throughout the life of your claim. Do not hesitate to use this resource when it
        is warranted.
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
