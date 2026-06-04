import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { QABlock } from '@/components/content/QABlock'

export const meta = {
  title: 'Public Adjuster Fees — What They Cost and When They\'re Worth It',
  description:
    'How Public Adjuster fees work in California — contingency percentages, the statutory framework under §15027.5, when hiring a PA is worth it, and questions to ask before signing.',
  summary:
    'California public adjusters work on contingency, a percentage of the recovery, governed by Insurance Code 15027.5. A PA is usually worth it on large, complex, or disputed claims; ask about the fee and scope before signing.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The number one question people ask before hiring a Public Adjuster is: &quot;What does it
        cost?&quot; It is a fair question — and the answer is more straightforward than most people
        expect. Understanding the fee structure helps you make an informed decision about whether
        hiring a PA makes financial sense for your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How PA Fees Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most Public Adjusters work on a contingency basis — they charge a percentage of the
        settlement you receive. There is no hourly billing, no retainer, and no upfront cost
        in most cases. The PA gets paid when you get paid.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Typical range: 10% to 15%</strong> of the total settlement for most residential
          property claims. The exact percentage depends on the size and complexity of the claim.
        </li>
        <li>
          <strong>Sliding scale.</strong> Some PAs charge a higher percentage for smaller claims
          and a lower percentage for larger ones. A $50,000 claim might be at 15%, while a
          $500,000 claim might be at 10%.
        </li>
        <li>
          <strong>Based on the total settlement.</strong> This is an important point that many
          policyholders misunderstand. In most PA contracts, the fee is calculated on the
          <em> total</em> settlement amount — not just the difference between the insurer&rsquo;s
          initial offer and the final settlement. If the insurer initially offered $100,000 and
          the PA negotiates the claim to $250,000, the fee is typically 10% of $250,000 ($25,000),
          not 10% of the $150,000 improvement.
        </li>
        <li>
          <strong>Flat fees and hourly rates.</strong> Some PAs offer flat-fee or hourly-rate
          arrangements for specific services such as appraisal representation, policy review,
          or consultation. This is less common than contingency but may be available depending
          on the PA and the nature of the work.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&rsquo;s Fee Framework — Statute vs. Custom
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;15027.5 governs the agency relationship between the
        Public Adjuster and the insured, and requires disclosure of any third-party
        compensation the PA receives in connection with the claim. The statute does <strong>not</strong> impose
        a numerical fee cap and does not contain a state-of-emergency 10% cap. The 10% figure
        commonly seen on catastrophe-disaster contracts is industry contract practice, not
        statutory law. The contract itself sets the fee, subject to &sect;15027&rsquo;s
        requirements that the percentage be stated in the written agreement and disclosed up
        front.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pending legislation (AB 597, 2025–2026 session) would, if enacted, impose a statutory
        cap on Public Adjuster fees for catastrophic-disaster claims at <strong>15%</strong> of
        the amount paid by the insurer after the contract date. AB 597 has not been enacted as
        of this writing; the 15% cap is a proposal, not current law.
      </p>

      <CalloutBox variant="legal" title="California Insurance Code Section 15027.5 — What It Actually Says">
        <p>
          &sect;15027.5 establishes that the Public Adjuster is the agent of the insured, that
          the PA may not receive fees in excess of the amount or percentage stated in the
          written contract, and that any third-party compensation the PA receives from a
          contractor, insurer, or vendor must be disclosed to the insured. The statute does not
          contain a 10% disaster cap or any other numerical cap; the percentage is whatever the
          contract specifies. Verify the current text at{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=15027.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            leginfo.legislature.ca.gov
          </a>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When PA Fees Are Worth It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The math on PA fees is simple: if a PA costs you 10% of the settlement but increases
        your recovery by 30%, 50%, or more, you come out far ahead. Here are the situations
        where hiring a PA almost always makes financial sense:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The insurer&rsquo;s offer is significantly low.</strong> If you have contractor
          estimates, personal property documentation, or other evidence that the claim is worth
          substantially more than the insurer is offering, a PA can close that gap.
        </li>
        <li>
          <strong>The claim is complex.</strong> Total losses, claims involving multiple coverages
          (dwelling, contents, ALE, debris removal, ordinance or law), and business interruption
          claims have many moving parts that most policyholders are not equipped to handle alone.
        </li>
        <li>
          <strong>You do not have the time or expertise.</strong> Managing a large insurance claim
          is essentially a part-time job — documenting damage, preparing inventories, reviewing
          estimates, responding to the insurer&rsquo;s requests, and negotiating. A PA handles
          all of it.
        </li>
        <li>
          <strong>The insurer is delaying, denying, or lowballing.</strong> When the insurer is
          not acting in good faith, you need someone who knows the regulations, the policy
          language, and the pressure points to force fair treatment.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Math in Practice">
        <p>
          <strong>Example:</strong> Your insurer offers $150,000 on a fire claim. You hire a PA
          at 10%. The PA documents additional damage, contents, code upgrades, and ALE — and
          negotiates the settlement to $300,000. The PA fee is $30,000 (10% of $300,000). You
          net $270,000 — which is $120,000 more than you would have received by accepting the
          insurer&rsquo;s initial offer. The PA fee paid for itself nearly five times over.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When PA Fees May NOT Be Worth It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hiring a PA is not always the right move. There are situations where the fee may not
        make financial sense:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Very small claims close to the deductible.</strong> If the total claim value
          is only slightly above your deductible, the net recovery may be too small for a
          percentage-based fee to make sense. A $10,000 claim with a $5,000 deductible leaves
          only $5,000 in recovery — 10% of which is $1,000 in PA fees.
        </li>
        <li>
          <strong>Claims the insurer has already fairly valued.</strong> It happens less often
          than it should, but sometimes the insurer&rsquo;s initial offer is reasonable. If your
          own contractor&rsquo;s estimate aligns with the insurer&rsquo;s payment, a PA may not
          add enough value to justify the fee.
        </li>
        <li>
          <strong>Claims already in litigation.</strong> If the dispute has escalated to the point
          where you need to file a lawsuit, an attorney is better suited than a PA. PAs handle
          the claim — attorneys handle the courtroom.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What&rsquo;s Included in the Fee
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you hire a PA on contingency, the fee covers the full scope of claim representation.
        You should not be paying separately for any of the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Full claim documentation and inventory.</strong> The PA will document all
          property damage — structural, contents, landscaping — with photos, measurements, and
          detailed descriptions.
        </li>
        <li>
          <strong>Policy review and coverage analysis.</strong> The PA reviews your policy to
          identify every applicable coverage, sublimit, and endorsement — including coverages
          you may not know you have.
        </li>
        <li>
          <strong>Communication with the insurer.</strong> The PA handles all correspondence,
          phone calls, and meetings with the insurance company on your behalf. You are copied
          on everything but no longer have to deal with the adjuster directly.
        </li>
        <li>
          <strong>Estimate preparation or review.</strong> The PA prepares a detailed repair
          estimate (often in Xactimate) or reviews the insurer&rsquo;s estimate to identify
          missing items, incorrect pricing, and scope deficiencies.
        </li>
        <li>
          <strong>Negotiation through settlement.</strong> From the first demand to the final
          payment, the PA negotiates on your behalf to maximize your recovery.
        </li>
        <li>
          <strong>Coordination with professionals.</strong> The PA coordinates with contractors,
          engineers, content specialists, and other professionals as needed to support the claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Questions to Ask Before Hiring
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before signing a PA contract, ask these questions to make sure you understand the
        arrangement:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>What is your fee percentage?</strong> Get the exact number in writing. It should
          be clearly stated in the contract.
        </li>
        <li>
          <strong>Is the fee on the total settlement or on the increase?</strong> Most PA contracts
          are based on the total settlement. Make sure you understand which model applies.
        </li>
        <li>
          <strong>Are there any upfront costs?</strong> Reputable PAs working on contingency
          should not require upfront payment. If they do, ask why and what those costs cover.
        </li>
        <li>
          <strong>What happens if the claim is denied?</strong> Under a true contingency model,
          if the PA cannot recover anything, you owe nothing. Confirm this is the case.
        </li>
        <li>
          <strong>How many claims like mine have you handled?</strong> Experience with your
          specific type of loss — fire, water, wind, etc. — matters. A PA who handles mostly
          water claims may not be the best fit for a wildfire total loss.
        </li>
        <li>
          <strong>Are you licensed in California?</strong> This is non-negotiable. Public Adjusters
          must be licensed by the California Department of Insurance. You can verify any PA&rsquo;s
          license at the CDI website.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &quot;No Recovery, No Fee&quot; Promise
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most reputable Public Adjusters work on a &quot;no recovery, no fee&quot; basis. This means
        that if the PA is unable to improve your outcome — if the claim is denied and stays
        denied, or if no additional recovery is achieved — you owe nothing. This arrangement
        aligns the PA&rsquo;s financial incentive directly with yours: they only get paid when
        you get paid, and they only earn more when you recover more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the reasons hiring a PA is relatively low-risk for the policyholder. You
        are not paying out of pocket and hoping for results — you are sharing a percentage of
        additional recovery that you likely would not have received on your own.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'How do Public Adjuster fees work?',
          answer: "Most PAs work on a contingency basis — they charge a percentage of the settlement, with no hourly billing, no retainer, and no upfront cost. The PA gets paid when you get paid. The typical range is 10% to 15% of the total settlement for residential property claims, with some PAs using a sliding scale (higher percentage for smaller claims, lower for larger). In most contracts the fee is calculated on the total settlement amount, not just the increase above the carrier's offer — make sure you understand which model your specific contract uses before signing.",
        },
        {
          question: 'Does California cap Public Adjuster fees by statute?',
          answer: "No. California Insurance Code §15027.5 governs the agency relationship between the PA and the insured and requires disclosure of any third-party compensation, but it does not impose a numerical fee cap — there is no statutory 10% disaster cap. The 10% figure often seen on catastrophe contracts is industry contract practice, not statutory law. The contract itself sets the fee, subject to §15027's requirements that the percentage be stated in writing and disclosed up front. Pending legislation AB 597 (2025–2026 session) would, if enacted, impose a 15% cap for catastrophic-disaster claims, but AB 597 has not been enacted as of this writing.",
        },
        {
          question: 'When is hiring a PA worth the fee?',
          answer: "When the math works: a PA costs 10% but increases your recovery by 30%, 50%, or more, and you come out far ahead. Specifically: when the insurer's offer is significantly low and you have evidence the claim is worth substantially more; when the claim is complex (total losses, multiple coverages, business interruption); when you don't have the time or expertise to manage what is essentially a part-time job; or when the insurer is delaying, denying, or lowballing — in which case you need someone who knows the regulations, the policy language, and the pressure points to force fair treatment.",
        },
        {
          question: 'When might a PA NOT be worth it?',
          answer: "Very small claims close to the deductible (a $10,000 claim with a $5,000 deductible leaves $5,000 net, of which 10% is $1,000 in fees — the math gets thin). Claims the insurer has already fairly valued (it happens less often than it should, but if your contractor's estimate aligns with the insurer's payment, the PA may not add enough value to justify the fee). Claims already in litigation — once the dispute requires a lawsuit, an attorney is better suited than a PA. PAs handle the claim; attorneys handle the courtroom.",
        },
        {
          question: 'What questions should I ask before hiring a PA?',
          answer: "What is your fee percentage — exact number in writing? Is the fee calculated on the total settlement or only on the increase above the carrier's offer? Are there any upfront costs (reputable contingency PAs shouldn't require any)? What happens if the claim is denied — is it true \"no recovery, no fee\"? How many claims like mine have you handled (a fire specialist may not be the right fit for a wildfire total loss, and vice versa for water)? Are you licensed in California — verify any PA's license at the CDI website before signing anything.",
        },
        {
          question: 'What is included in the PA fee?',
          answer: "Full claim documentation and inventory (structural, contents, landscaping). Policy review and coverage analysis to identify every applicable coverage, sublimit, and endorsement. All communication with the insurer — phone calls, correspondence, and meetings on your behalf. Estimate preparation (often in Xactimate) or review of the insurer's estimate to identify missing items, incorrect pricing, and scope deficiencies. Negotiation through settlement. Coordination with contractors, engineers, content specialists, and other professionals as needed. You should not be paying separately for any of these items.",
        },
      ]} />

      <CalloutBox variant="important" title="Ready for a Free Claim Review?">
        <p>
          If you are wondering whether a Public Adjuster can help with your claim, the easiest
          next step is a free consultation. We will review your claim, your policy, and the
          insurer&rsquo;s offer — and give you an honest assessment of whether hiring a PA makes
          sense for your situation.{' '}
          <Link href="/contact" className="text-red-700 underline hover:text-red-900">
            Contact us here
          </Link>.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
