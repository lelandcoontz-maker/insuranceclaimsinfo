import type { Metadata } from 'next'
import Link from 'next/link'
import { LetterDownloadCard } from '@/components/letters/LetterDownloadCard'

export const metadata: Metadata = {
  title: 'Template Demand Letters for Insurance Claims | Free Downloads',
  description:
    'Free template demand letters you can send to your insurance company — citing the exact California regulations. Contractor name demand, labor depreciation challenge, claim file request, and more.',
  alternates: { canonical: '/letters' },
}

/* ────────────────────────────────────────────
   Letter template content — plain text format
   ──────────────────────────────────────────── */

const LETTERS = [
  {
    id: 'contractor-name-demand',
    title: 'Contractor Name Demand Letter',
    regulation: '§2695.9(d)(2)',
    description:
      'The most powerful tool for property policyholders. Demands the insurer name a contractor who will perform the repairs for the amount of their estimate. When they cannot — and they almost never can — their estimate is effectively rebutted.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Contractor Name Demand Pursuant to 10 CCR §2695.9(d)(2)

Dear [Adjuster Name / Claims Department]:

I am writing regarding the above-referenced claim. I have received your written estimate dated [date of insurer's estimate] in the amount of $[amount]. I do not believe this estimate is sufficient to restore my property to its pre-loss condition in accordance with accepted trade standards for good and workmanlike construction.

Pursuant to Title 10, California Code of Regulations, Section 2695.9(d), your estimate must be "of an amount which will restore the damaged property to no less than its condition prior to the loss and which will allow for repairs to be made in a manner which meets accepted trade standards for good and workmanlike construction." The regulation further requires that repair or rebuilding costs be "accurate and representative of costs in the local market area."

Under Section 2695.9(d)(2), I am requesting that you promptly provide me with the name of at least one repair individual or entity that will make the repairs for the amount of your written estimate ($[amount]), in accordance with accepted trade standards for good and workmanlike construction. As required by the regulation, the insurer shall cause the damaged property to be restored to no less than its condition prior to the loss at no additional cost to me other than as stated in the policy.

Please respond to this request within fifteen (15) calendar days as required by 10 CCR §2695.5(b).

If you are unable to provide the name of a contractor who will perform the work for the amount of your estimate, I request that you adjust your estimate to an amount that is accurate and representative of actual repair costs in the local market area, as required by §2695.9(d).

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: '15-day-response-demand',
    title: '15-Day Response Deadline Notice',
    regulation: '§2695.5(b)',
    description:
      'When the insurer has failed to respond to your communication within 15 calendar days. Documents the violation and demands an immediate response.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Notice of Regulatory Violation — Failure to Respond Within 15 Days

Dear [Adjuster Name / Claims Department]:

On [date of your original communication], I sent you [describe: a letter / an email / documentation] regarding the above-referenced claim. [Briefly describe what the communication contained or requested.]

As of the date of this letter, [number] calendar days have elapsed and I have not received any response.

Under Title 10, California Code of Regulations, Section 2695.5(b), upon receiving any communication from a claimant regarding a claim that reasonably suggests a response is expected, the insurer must furnish the claimant with a complete response within fifteen (15) calendar days. Your failure to respond within this timeframe constitutes a violation of this regulation.

I am requesting an immediate and complete response to my communication of [date]. Please be advised that I am documenting this regulatory violation and reserve all rights, including the right to file a complaint with the California Department of Insurance and to use this violation as evidence in any future proceedings.

Please respond within five (5) calendar days of this letter.

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: 'coverage-disclosure-request',
    title: 'Request for All Applicable Coverages',
    regulation: '§2695.4(a)',
    description:
      'Demands the insurer identify every coverage, benefit, time limit, and policy provision that may apply to your claim. Prevents the insurer from "forgetting" to mention coverages like ordinance or law, extended replacement cost, or debris removal.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Request for Disclosure of All Applicable Coverages Pursuant to 10 CCR §2695.4(a)

Dear [Adjuster Name / Claims Department]:

I am writing to request a complete disclosure of all benefits, coverages, time limits, and other policy provisions that may apply to my claim, as required by Title 10, California Code of Regulations, Section 2695.4(a).

Section 2695.4(a) states: "Every insurer shall disclose to a first party claimant or beneficiary, all benefits, coverage, time limits or other provisions of any insurance policy issued by that insurer that may apply to the claim presented by the claimant."

Specifically, please identify and explain the applicability of each of the following coverages under my policy as they relate to my loss:

  1. Coverage A — Dwelling (including any extended replacement cost endorsement)
  2. Coverage B — Other Structures
  3. Coverage C — Personal Property / Contents (including any special limits of liability)
  4. Coverage D — Loss of Use / Additional Living Expenses / Fair Rental Value
  5. Ordinance or Law Coverage (Coverages A, B, and C under the endorsement, if applicable)
  6. Debris Removal Coverage (including any additional limits beyond the dwelling)
  7. Trees, Shrubs, and Other Vegetation Coverage
  8. Fire Department Service Charge
  9. Any other endorsements, riders, or additional coverages that may apply

For each coverage identified, please provide the applicable limits of liability, any sub-limits, the deductible(s), and any time limits or conditions that apply.

Please respond within fifteen (15) calendar days as required by 10 CCR §2695.5(b).

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: 'labor-depreciation-challenge',
    title: 'Labor Depreciation Challenge Letter',
    regulation: '§2695.9(f)(1)',
    description:
      'Challenges the insurer\'s depreciation of labor costs on the ACV payment. In California, field labor cannot be depreciated on property claims — one of the most commonly violated regulations.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Challenge to Depreciation of Labor Costs — 10 CCR §2695.9(f)(1)

Dear [Adjuster Name / Claims Department]:

I have reviewed your Actual Cash Value (ACV) estimate for the above-referenced claim. Your depreciation calculation applies depreciation to line items that include labor costs. This is a violation of California law.

Title 10, California Code of Regulations, Section 2695.9(f)(1) states:

"Except for the intrinsic labor costs that are included in the cost of manufactured materials or goods, the expense of labor necessary to repair, rebuild or replace covered property is not a component of physical depreciation and shall not be subject to depreciation or betterment."

Your estimate depreciates the following line items that include labor costs:

  [List specific line items — for example:]
  - Demolition and removal: $[amount] depreciated by [%] = $[depreciation amount]
  - Roofing installation labor: $[amount] depreciated by [%] = $[depreciation amount]
  - Painting labor: $[amount] depreciated by [%] = $[depreciation amount]
  - [Add additional items as applicable]

Under §2695.9(f)(1), the labor component of these line items is not subject to depreciation. Only the material component may be depreciated, and any such depreciation must be "discernable, measurable, itemized, and specified as to dollar amount" per §2695.9(f).

I am requesting that you recalculate the ACV payment with labor costs excluded from depreciation and issue a supplemental payment for the difference. Please also ensure that any remaining depreciation on materials is individually itemized and explained in writing, as required by the regulation.

Please respond within fifteen (15) calendar days as required by 10 CCR §2695.5(b).

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: '40-day-decision-demand',
    title: '40-Day Decision Deadline Notice',
    regulation: '§2695.7(b)',
    description:
      'When the insurer has failed to accept or deny your claim within 40 days of receiving proof of claim. Documents the violation and demands an immediate coverage decision.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Notice of Regulatory Violation — Failure to Accept or Deny Within 40 Days

Dear [Adjuster Name / Claims Department]:

I filed the above-referenced claim on [date claim filed]. Your adjuster inspected the property on [date of inspection] and [describe any other proof of claim submitted or obtained by the insurer, e.g., "I submitted my contractor's estimate on (date)" or "your adjuster completed their estimate on (date)"].

Under Title 10, California Code of Regulations, Section 2695.7(b), upon receiving proof of claim, the insurer must accept or deny the claim, in whole or in part, within forty (40) calendar days. As of today, [number] calendar days have elapsed since [proof of claim was received/your adjuster completed the inspection], and I have not received a written acceptance or denial.

If you require additional time, Section 2695.7(c)(1) requires you to provide me with written notice specifying any additional information you need and stating the reasons for your inability to make a determination. I have not received any such written notice.

Your failure to accept or deny the claim within 40 days, and your failure to provide the written notice required by §2695.7(c)(1), constitute regulatory violations. I am documenting these violations and reserve all rights.

I demand that you accept or deny this claim immediately, in writing, in accordance with the requirements of §2695.7(b)(1), including: all bases for any denial, the factual and legal bases for each reason, specific reference to any policy provisions relied upon, and the California Department of Insurance contact information.

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: 'claim-file-request',
    title: 'Complete Claim File Request',
    regulation: '§2695.3',
    description:
      'Requests the insurer produce your complete claim file — all documents, notes, internal correspondence, adjuster reports, estimate versions, and supervisor communications. The file often reveals what the insurer knew and when.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Request for Complete Claim File Pursuant to 10 CCR §2695.3

Dear [Adjuster Name / Claims Department]:

Pursuant to Title 10, California Code of Regulations, Section 2695.3, I am requesting a complete copy of my claim file, including but not limited to:

  1. All adjuster reports and field notes
  2. All estimates and scopes of loss (all versions, including drafts and revisions)
  3. All photographs and video taken by your adjusters, agents, or contractors
  4. All internal notes, memoranda, and communications regarding this claim
  5. All supervisor notes, reviews, or approvals
  6. All correspondence (inbound and outbound) related to this claim
  7. All expert reports, engineering reports, or consultant reports obtained
  8. All reserve information and reserve change documentation
  9. Activity logs showing all claim file activity with dates
  10. Any recorded statements or transcripts

Section 2695.3 requires that claim files contain "all documents, notes and work papers (including copies of all correspondence) which reasonably pertain to each claim in such detail that pertinent events and the dates of the events can be reconstructed and the licensee's actions pertaining to the claim can be determined."

Please produce the complete file within fifteen (15) calendar days as required by 10 CCR §2695.5(b). Please send the file to me at the address above [or to the email address: (your email)].

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: 'deficient-denial-response',
    title: 'Response to Deficient Denial Letter',
    regulation: '§2695.7(b)(1)',
    description:
      'When the insurer sends a denial that fails to meet regulatory standards — missing the specific policy language, factual basis, legal reasoning, or CDI contact information. Forces a compliant denial or withdrawal.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Response to Deficient Denial — 10 CCR §2695.7(b)(1)

Dear [Adjuster Name / Claims Department]:

I received your denial letter dated [date] regarding the above-referenced claim. Upon review, your denial does not comply with the requirements of Title 10, California Code of Regulations, Section 2695.7(b)(1). Specifically, your denial fails to include the following required elements:

  [ ] A statement listing ALL bases for the denial
  [ ] The factual basis for each reason for denial
  [ ] The legal basis for each reason for denial
  [ ] Reference to the specific policy provision, condition, or exclusion relied upon
  [ ] An explanation of the application of the cited provision to my claim
  [ ] A statement that I may have the matter reviewed by the California Department of Insurance [§2695.7(b)(3)]
  [ ] The address and telephone number of the CDI unit that reviews claims practices [§2695.7(b)(3)]

[Check the boxes that apply to your situation and delete the ones that don't.]

Section 2695.7(b)(1) requires that when an insurer denies a first party claim, "it shall do so in writing and shall provide to the claimant a statement listing all bases for such rejection or denial and the factual and legal bases for each reason. Where denial is based on a specific statute, applicable law or policy provision, condition or exclusion, the written denial shall include reference thereto and provide an explanation of the application thereof to the claim." Additionally, Section 2695.7(b)(3) requires that the written denial include a statement that the claimant may have the matter reviewed by the California Department of Insurance, along with the address and telephone number of the unit that reviews claims practices.

Your denial letter does not meet this standard. I request that you either:

  (1) Provide a compliant denial letter that includes all elements required by §2695.7(b)(1); or
  (2) Withdraw the denial and accept the claim.

Please respond within fifteen (15) calendar days as required by 10 CCR §2695.5(b). I am documenting this regulatory violation and reserve all rights, including the right to file a complaint with the California Department of Insurance.

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
  {
    id: '30-day-status-demand',
    title: '30-Day Status Update Demand',
    regulation: '§2695.7(c)',
    description:
      'When the insurer has failed to provide a written status update within 30 days. Each missed update is a separate, documentable violation.',
    letterContent: `[Your Name]
[Your Address]
[City, State ZIP]
[Date]

[Insurance Company Name]
[Claims Department / Adjuster Name]
[Address]
[City, State ZIP]

Re: Claim Number: [Your Claim Number]
    Policy Number: [Your Policy Number]
    Date of Loss: [Date of Loss]
    Demand for Written Status Update — 10 CCR §2695.7(c)(1)

Dear [Adjuster Name / Claims Department]:

The above-referenced claim remains open and unresolved. The last written status update I received from your office was dated [date of last status update — or "I have not received any written status update"].

Under Title 10, California Code of Regulations, Section 2695.7(c)(1), when an insurer requires more than forty (40) days to determine whether a claim should be accepted or denied, the insurer must provide written notice to the claimant every thirty (30) calendar days. This written notice must:

  (1) Specify any additional information the insurer requires in order to make a determination; and
  (2) State any continuing reasons for the insurer's inability to make a determination.

More than thirty (30) days have elapsed since your last written status communication. Your failure to provide the required written status update constitutes a violation of §2695.7(c)(1).

I demand that you immediately provide a written status update that complies with the regulation, including:

  - The current status of your investigation
  - Any specific additional information you require from me in order to make a determination
  - The continuing reasons for your inability to make a determination
  - If the determination cannot be made until some future event occurs, an estimate as to when the determination can be made

Please be advised that I am documenting each missed 30-day status update as a separate regulatory violation and reserve all rights.

Sincerely,

[Your Name]


---
This template is provided for educational purposes by InsuranceClaimsInfo.com.
It should be customized to your specific claim. This is not legal advice.
© Leland Coontz`,
  },
]

export default function LettersPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">
            Free Tools
          </p>
          <h1 className="text-3xl font-bold mb-3">
            Template Demand Letters for Insurance Claims
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Ready-to-use template letters that cite the exact California regulations your
            insurer must follow. Customize them with your claim details and send. Each letter
            either gets you what you need — or documents a regulatory violation if the insurer
            fails to comply.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-amber-900 mb-2">How to Use These Templates</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
            <li>
              Replace all bracketed text <strong>[like this]</strong> with your specific claim
              information.
            </li>
            <li>
              Send by certified mail (return receipt requested) or email — keep a copy of
              everything you send.
            </li>
            <li>
              Log the date you sent the letter. If the insurer fails to respond within the
              deadline cited, that failure is a documented regulatory violation.
            </li>
            <li>
              These templates are starting points. Customize them to fit your specific
              situation — add details, remove sections that do not apply.
            </li>
          </ul>
          <p className="text-xs text-amber-700 mt-3 italic">
            These templates are provided for educational purposes. They are not legal advice.
            For assistance with your specific claim, consult a licensed Public Adjuster or
            attorney.
          </p>
        </div>

        {/* Quick-jump nav */}
        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <h2 className="font-bold text-[#1F3964] text-sm mb-3">Jump to a Letter:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {LETTERS.map(letter => (
              <a
                key={letter.id}
                href={`#${letter.id}`}
                className="text-sm text-[#2E74B5] hover:text-[#1F3964] hover:bg-white px-3 py-2 rounded transition-colors flex items-center gap-2"
              >
                <span className="font-mono text-xs text-gray-400 shrink-0">
                  {letter.regulation}
                </span>
                <span>{letter.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Letter cards */}
        <div className="space-y-6">
          {LETTERS.map(letter => (
            <LetterDownloadCard key={letter.id} {...letter} />
          ))}
        </div>

        {/* Regulatory reference callout */}
        <div className="mt-10 bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6">
          <h3 className="font-bold text-[#1F3964] mb-2">
            Want to Understand the Regulations Behind These Letters?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Each letter cites specific sections of California&apos;s Fair Claims Settlement
            Practices Regulations. For a complete section-by-section analysis with case law,
            real-world examples, and detailed explanations, read our comprehensive guide.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/resources/california-fair-claims"
              className="inline-block bg-[#1F3964] hover:bg-[#16305a] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Read the Full Regulations Guide &rarr;
            </Link>
            <Link
              href="/regulations"
              className="inline-block border border-[#1F3964] text-[#1F3964] hover:bg-[#1F3964] hover:text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Regulations Reference Page
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-[#1F3964] mb-2">
            Need Help With Your Claim?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            These letters are a great start — but if your insurer is playing hardball, a
            licensed Public Adjuster can handle the entire process for you. Free consultation,
            no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
