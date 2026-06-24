import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: "Your Right to Claim Documents: What Insurers Must Provide Under California Law",
  description:
    "California law requires insurers to provide all claim-related documents within 15 days of your request. Most policyholders don't know this right exists. Here is the CDI's official notice explaining what you're entitled to.",
  summary:
    'California law requires insurers to provide all claim-related documents within 15 days of your written request. Most policyholders never ask; requesting the file is a powerful, underused way to see what the carrier actually has.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        You Can Demand Your Claim File Documents — Most Policyholders Never Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders have no idea they can demand copies of the documents their insurance
        company used to evaluate their claim. They accept whatever number the adjuster puts in
        front of them, never realizing there is an entire file behind that number — estimates,
        appraisals, scope-of-loss reports, third-party findings — that they have a legal right
        to see.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code Section 2071 — the standard form fire insurance policy —
        insurers have two separate duties regarding claim-related documents. First, they must{' '}
        <strong>notify every claimant</strong> that these documents are available upon request.
        Second, they must <strong>provide copies within 15 calendar days</strong> of receiving
        your written request. These are not optional courtesies. They are mandatory obligations
        built into the statutory policy form that governs every fire insurance policy issued in
        California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The definition of &ldquo;claim-related documents&rdquo; is broad. It includes repair and
        replacement estimates, bids, appraisals, scopes of loss, drawings, plans, reports,
        third-party findings on the amount of loss, covered damages, cost of repairs, and all
        other valuation, measurement, and loss adjustment calculations. In practical terms, this
        means you are entitled to see exactly how the carrier arrived at its number — every
        line item, every calculation, every outside report they relied on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The only exemptions are narrow: attorney work product, attorney-client privileged
        communications, documents indicating fraud by the insured, and medically privileged
        information. Everything else must be produced.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the strongest tools a policyholder has on a disputed claim. When you
        request your claim-related documents, two things happen. First, you get visibility into
        the carrier&apos;s valuation — you can see where they cut corners, where their numbers
        are wrong, and what they left out. Second, the carrier knows you are paying attention.
        Claims where the policyholder demands documentation get handled differently than claims
        where the policyholder stays quiet and accepts whatever is offered.
      </p>

      <CalloutBox variant="tip" title="Sample Request Language">
        <p>
          &ldquo;Pursuant to California Insurance Code Section 2071 and the standard form fire
          insurance policy, I am requesting copies of all claim-related documents pertaining to
          Claim No. [your claim number]. Please provide these documents within 15 calendar days
          as required by law.&rdquo;
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Notice on Duty to Provide Claim-Related Documents
      </h2>

      <DocumentEmbed
        title="Notice Regarding Duty to Provide Claim-Related Documents"
        source="California Department of Insurance"
        date="September 9, 2016"
        type="notice"
        sourceUrl="https://www.insurance.ca.gov/01-consumers/140-catastrophes/upload/ClaimRelatedDocumentsNotice.pdf"
      >
        <p><strong>STATE OF CALIFORNIA</strong></p>
        <p><strong>DEPARTMENT OF INSURANCE</strong></p>
        <p><strong>Legal Branch</strong></p>
        <p><strong>NOTICE REGARDING DUTY TO PROVIDE CLAIM-RELATED DOCUMENTS</strong></p>
        <p><strong>TO:</strong> Property Insurers Issuing Fire Policies in California</p>
        <p><strong>DATE:</strong> September 9, 2016</p>
        <p>
          This Notice reminds insurers issuing fire insurance policies in California of their
          duties under California Insurance Code section 2071 regarding &ldquo;claim-related
          documents.&rdquo;
        </p>
        <p><strong>Background</strong></p>
        <p>
          Insurance Code section 102(a) defines &ldquo;fire insurance&rdquo; to include, inter
          alia, insurance against loss by fire, lightning, windstorm, tornado, or earthquake.
          Insurance Code section 2070 et seq. generally requires that insurers issuing fire
          insurance policies use the California Standard Form Fire Insurance Policy
          (&ldquo;standard form&rdquo;) prescribed in section 2071.
        </p>
        <p><strong>Claim-related documents &mdash; duties and definition</strong></p>
        <p>
          The standard form language in section 2071 imposes two duties with respect to
          claim-related documents:
        </p>
        <p>
          Insurers must notify every claimant that the claimant may obtain, upon request, copies
          of claim-related documents.
        </p>
        <p>
          Insurers must provide claim-related documents upon a claimant&apos;s request.
        </p>
        <p>
          The standard form language recited in section 2071 defines &ldquo;claim-related
          documents&rdquo; to mean: &ldquo;[A]ll documents that relate to the evaluation of
          damages, including, but not limited to, repair and replacement estimates and bids,
          appraisals, scopes of loss, drawings, plans, reports, third-party findings on the
          amount of loss, covered damages, and cost of repairs, and all other valuation,
          measurement, and loss adjustment calculations of the amount of loss, covered damage,
          and cost of repairs.&rdquo;
        </p>
        <p>
          The intent behind the requirement that insurers provide claim-related documents is to
          allow claimants to understand (and potentially contest) the basis for an
          insurer&apos;s valuation of a claim. Insurers should determine whether a particular
          document is a claim-related document with this intent in mind.
        </p>
        <p>
          The standard form language in section 2071 exempts from the duty to provide
          claim-related documents &ldquo;[a]ttorney work product and attorney-client privileged
          documents, and documents that indicate fraud by the insured or that contain medically
          privileged information.&rdquo;
        </p>
        <p>
          Section 2070 allows the standard form not to be used if &ldquo;coverage with respect
          to the peril of fire, when viewed in its entirety, is substantially equivalent to or
          more favorable to the insured than that contained in such standard form fire insurance
          policy.&rdquo; The Department takes the position that the above-described duties to
          notify claimants about claim-related documents and provide those documents are
          essential; and no fire policy lacking such duties would be substantially equivalent to
          the standard form.
        </p>
        <p>
          <strong>
            When must an insurer send the notice of the right to request and obtain
            claim-related documents?
          </strong>
        </p>
        <p>
          The standard form language in section 2071 does not specify how soon an insurer must
          provide an insured with notice of the insured&apos;s right to request claim-related
          documents after an insured files a claim. Implicitly, an insurer may not delay sending
          the notice if the delay would prejudice the insured. Conversely, notice sent with the
          first written communication to a claimant after a claim has been filed, or with an
          initial communication of a damage valuation amount, would comply with the spirit of
          the law.
        </p>
        <p>
          <strong>When must an insurer provide claim-related documents?</strong>
        </p>
        <p>
          The standard form language in section 2071 requires that insurers provide a claimant
          with copies of all claim-related documents that are not exempt (e.g. privileged)
          within 15 calendar days after receiving a request from an insured for such documents.
        </p>
        <p>
          Please direct any questions about this Notice to: Ms. Christina Carroll, Attorney,
          Department of Insurance, Legal Branch.
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Request Your Claim Documents
      </h2>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Put Your Request in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Always make this request in writing — email is fine, but a letter sent via certified
        mail creates a paper trail with a date stamp. Reference CIC Section 2071 by name. Be
        specific about your claim number. You do not need to explain why you want the documents
        or justify your request in any way.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Mark Your Calendar for 15 Days
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer has 15 calendar days from receiving your request to produce the documents.
        Not business days — calendar days. If they miss that deadline, they are in violation of
        the standard form policy language mandated by Section 2071.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Review What You Receive
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the documents arrive, review them carefully. Look for repair estimates that omit
        line items you know are damaged. Look for unit pricing that seems low. Look for scope
        notes that exclude areas of your property you reported as damaged. These documents tell
        you exactly where the carrier&apos;s valuation went wrong — and that is where your
        dispute begins.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Follow Up if Documents Are Missing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier produces some documents but you suspect they are withholding others —
        for example, you know a third-party engineer inspected your property but no engineering
        report was included — send a follow-up letter identifying the specific documents you
        believe exist. If they claim privilege, they must identify the document and the basis
        for the privilege claim.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: File a CDI Complaint if They Refuse
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer ignores your request or fails to produce documents within 15 days, you
        can{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
          file a complaint with the California Department of Insurance
        </Link>
        . The CDI takes document-production violations seriously because the right to
        claim-related documents is embedded in the statutory policy form itself — it is not
        merely a regulatory preference.
      </p>

      <CalloutBox variant="important" title="Do Not Wait Until Your Claim Is Closed">
        <p>
          You can request claim-related documents at any point during the claims process — you
          do not need to wait until the carrier makes a final offer. In fact, requesting
          documents early gives you time to identify valuation errors and dispute them before
          the claim settles.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            California Fair Claims Settlement Practices Regulations
          </Link>{' '}
          — the full regulatory framework governing how insurers must handle your claim
        </li>
        <li>
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] hover:underline">
            How to Write Effective Claim Negotiation Letters
          </Link>{' '}
          — put those claim documents to work in your written disputes
        </li>
        <li>
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            Filing a CDI Complaint
          </Link>{' '}
          — what to do when your insurer ignores your rights
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            Insurance Bad Faith in California
          </Link>{' '}
          — when claims-handling violations cross the line into bad faith
        </li>
      </ul>
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
