import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The Proof of Loss: What You Are Really Signing and How to Protect Yourself",
  description: "A proof of loss is a sworn statement that can lock you into the carrier's numbers and waive coverages you didn't intend to surrender. Learn about partial proofs of loss, how to modify the carrier's form, state-by-state rules, and why NFIP flood claims demand special care.",
  summary:
    'A proof of loss is a sworn statement that can lock you into a number and waive amounts you omit. Prepare it carefully, value the claim fully, and reserve the right to supplement, because signing prematurely can cap your recovery.',
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
        The insurance company sends you a form. It is titled &quot;Proof of Loss.&quot; It may arrive by email, by mail, or through a claims portal. It is pre-filled with numbers&mdash;the carrier&apos;s numbers. The amount of the loss. The coverage amounts. The items claimed. At the bottom, there is a signature line. The form asks you to sign under penalty of perjury.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster tells you to sign it. The adjuster may tell you it is required under the policy. The adjuster may tell you the claim cannot proceed until the signed proof of loss is returned. The adjuster may tell you it is a routine formality.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is not routine. It is not a formality. And the decision of whether to sign it, how to sign it, and what to write on it before you sign it is one of the most consequential decisions you will make during the life of your claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A proof of loss, handled correctly, is a procedural step that moves your claim forward. Handled incorrectly, it is a document that locks you into the carrier&apos;s valuation of your loss, waives claims you did not intend to waive, and hands the carrier a sworn statement it can use against you in every subsequent negotiation, appraisal, and courtroom proceeding.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article is about making sure you handle it correctly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What a Proof of Loss Is</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A proof of loss is a formal, sworn statement submitted by the policyholder to the insurance company, attesting to the facts and circumstances of the loss and the amount of damages claimed. It is a standard feature of property insurance policies. The requirement to submit a proof of loss typically appears in the &quot;Conditions&quot; section of the policy, and the policy usually specifies a deadline&mdash;often 60 days after the carrier requests it, though the timeframe varies by policy and jurisdiction.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The proof of loss serves several purposes, and understanding those purposes is essential to understanding the risks.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>It is a sworn statement.</strong> When you sign a proof of loss, you are signing under oath. You are attesting, under penalty of perjury, that the information in the document is true and correct to the best of your knowledge. This is not a casual representation. It is a statement made under the same legal weight as testimony given in a deposition or at trial. If the carrier later disputes your claim, the proof of loss is Exhibit A&mdash;a sworn document bearing your signature that either supports or undermines your position.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>It quantifies the claim.</strong> The proof of loss puts a number on the loss. That number may be the carrier&apos;s number, your number, or some combination. But whatever number appears on the signed proof of loss, the carrier will treat it as the amount you have sworn to under oath. If you sign a proof of loss stating that the loss is $147,000, and you later claim the loss is $290,000, the carrier will wave the signed proof of loss in front of every mediator, arbitrator, appraiser, judge, and jury it encounters. &quot;The insured swore under oath that the loss was $147,000. Now they want $290,000. Which sworn statement should we believe?&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>It can function as a waiver.</strong> This is the most dangerous aspect of the proof of loss, and the one least understood by policyholders. A proof of loss that does not include certain categories of damage&mdash;law and ordinance costs, trees and shrubs, additional living expenses, contents, debris removal&mdash;can be interpreted as a statement that those categories are not part of the claim. The carrier may argue that by submitting a proof of loss limited to certain items, the insured represented that the loss was limited to those items. Whether this argument succeeds depends on the jurisdiction and the specific language of the proof of loss, but the argument is available to the carrier whenever the proof of loss is silent on a category of covered damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Trap: Signing the Carrier&apos;s Pre-Filled Form</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the danger becomes concrete. In many claims, the carrier does not send the insured a blank proof of loss form. The carrier sends a form that has already been filled in&mdash;with the carrier&apos;s own loss figures, the carrier&apos;s own scope of damage, and the carrier&apos;s own valuation of the claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insured receives this pre-filled form and faces a decision. The numbers on the form are the carrier&apos;s numbers, not the insured&apos;s. The scope of damage listed on the form reflects the carrier&apos;s investigation, not the insured&apos;s assessment. The categories of coverage addressed in the form may not include everything the insured intends to claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the insured signs this form without modification, they have just sworn under oath that the carrier&apos;s numbers are correct. They have attested to a loss amount determined by the carrier&apos;s adjuster, not by their own investigation. And they have potentially limited their claim to the categories of damage the carrier chose to include on the form.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a hypothetical risk. Carriers routinely use signed proofs of loss to argue that the insured agreed to the carrier&apos;s valuation. &quot;The insured reviewed our figures, signed the proof of loss under oath, and submitted it. The insured had every opportunity to disagree with our numbers. They did not. They swore to them.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insured&apos;s response&mdash;&quot;I signed it because the adjuster told me to, and I did not realize the implications&quot;&mdash;is not a strong legal position. It may generate sympathy, but it does not undo a sworn statement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Solution: The Partial Proof of Loss</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important concept for any policyholder facing a proof of loss is this: <strong>you can submit a partial proof of loss.</strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A partial proof of loss is exactly what it sounds like. It is a proof of loss that covers part of the claim&mdash;the part you have quantified and are prepared to swear to&mdash;while explicitly preserving your right to submit supplemental proofs of loss for additional amounts and additional categories of damage as they are identified and quantified.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The partial proof of loss allows the insured to comply with the policy&apos;s proof of loss requirement without locking in a final number. It moves the claim forward&mdash;the carrier cannot argue that the insured has failed to submit a proof of loss. But it does not surrender the insured&apos;s right to claim additional amounts.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How to Mark a Proof of Loss as Partial</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier sends you a pre-filled proof of loss, you do not have to sign it as-is. You can modify it before signing. And if the form does not accurately reflect the full scope of your loss, you should modify it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Write &quot;PARTIAL&quot; on the form.</strong> Write it prominently&mdash;at the top of the first page, next to the amount, and above your signature. There should be no ambiguity about the fact that this proof of loss does not represent the insured&apos;s complete claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Strike through inaccurate amounts.</strong> If the carrier&apos;s pre-filled number does not reflect your assessment of the loss&mdash;and it almost certainly does not, if the carrier has underpaid&mdash;draw a line through the carrier&apos;s number and write your own. If you do not yet know the full amount of the loss, write the amount you have documented to date and note that additional amounts are forthcoming.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Add qualifying language.</strong> Above your signature, add a notation such as: &quot;This proof of loss is submitted as a partial proof of loss only. The insured reserves the right to submit supplemental proofs of loss for additional amounts, including but not limited to law and ordinance coverage, trees/shrubs/landscaping, additional living expenses, contents, debris removal, and any other covered damages not yet quantified. Submission of this partial proof of loss does not constitute a waiver of any coverage or any right to claim additional amounts under the policy.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Identify excluded categories.</strong> If there are specific categories of coverage that are not addressed in the proof of loss, list them. Be explicit: &quot;This proof of loss does not include any claim for Coverage B (Other Structures), Coverage D (Loss of Use), law and ordinance costs under the Ordinance or Law endorsement, or trees, shrubs, plants, and landscaping under Coverage A.&quot; The more specific you are about what is not included, the harder it is for the carrier to later argue that your silence on those items constituted a waiver.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Why This Is Better Than Refusing to Sign</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some policyholders, recognizing the risks of signing a proof of loss, refuse to sign altogether. This is usually a mistake. In many jurisdictions, submission of a proof of loss is a condition precedent to recovery under the policy. Failure to submit a proof of loss can give the carrier a technical defense&mdash;one that has nothing to do with the merits of the claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The partial proof of loss avoids this problem entirely. By submitting a modified, partial proof of loss, the insured has complied with the policy&apos;s requirement. The carrier cannot argue non-compliance. And if the carrier rejects the modified form&mdash;if the carrier insists on an unmodified, full proof of loss reflecting the carrier&apos;s numbers&mdash;the carrier has created a record of demanding that the insured swear to the carrier&apos;s valuation under oath. That is not a demand most carriers want to defend in front of a jury.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Will the Carrier Reject a Modified Proof of Loss?</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier may object. The carrier may tell you that the form must be submitted without modifications. The carrier may send the form back and ask you to resubmit it as originally prepared.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is where many policyholders lose their nerve. They fear that a rejected proof of loss means a rejected claim. It does not. A carrier that refuses to accept a partial proof of loss has created a dispute about procedure, not about coverage. And in that procedural dispute, the insured&apos;s position is strong: &quot;I submitted a sworn proof of loss for the amounts I could document. I identified it as partial. I reserved my right to supplement. The carrier rejected it because I would not swear to the carrier&apos;s numbers. I am willing to swear to my numbers under oath. The carrier is not willing to accept that.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Attempting to submit a modified, partial proof of loss&mdash;even if the carrier rejects it&mdash;is better than signing the carrier&apos;s form without modification. The attempt establishes the insured&apos;s good faith compliance. The rejection establishes the carrier&apos;s insistence on controlling the insured&apos;s sworn statement. That dynamic favors the insured in every subsequent proceeding.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">State-by-State Variation: The Weight of a Proof of Loss Depends on Where You Are</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not all proofs of loss carry the same legal weight. The significance of the document&mdash;and the consequences of getting it wrong&mdash;vary substantially depending on the jurisdiction governing the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">States Where the Proof of Loss Is a Condition Precedent</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In many states, submission of a proof of loss within the time specified in the policy is a condition precedent to recovery. This means that if the insured fails to submit a timely proof of loss, the insured may be barred from recovering under the policy altogether&mdash;regardless of the merits of the claim, regardless of the extent of the damage, regardless of whether the carrier owes every dollar the insured is claiming.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In these jurisdictions, the proof of loss is not a formality. It is a legal prerequisite. Failure to comply is a potential claim-killer. Courts in these states have dismissed otherwise valid claims because the insured did not submit the proof of loss on time or in the required form.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is why blanket advice to &quot;just refuse to sign&quot; is dangerous. In a condition-precedent state, refusal to submit a proof of loss is not a negotiating tactic. It is a path to forfeiture. The partial proof of loss is the correct strategy in these jurisdictions&mdash;it achieves compliance without concession.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">California: A Different Framework</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the proof of loss does not carry the same dispositive weight that it carries in many other states. California courts have generally held that substantial compliance with proof of loss requirements is sufficient, and that technical failures in the proof of loss process do not automatically bar recovery.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court addressed the purpose of proof of loss requirements in the context of the insurance contract&apos;s conditions, recognizing that the requirement serves the carrier&apos;s informational needs&mdash;it allows the carrier to investigate the claim and assess its exposure. When the carrier has received substantially the same information through the claims process&mdash;through inspections, adjuster reports, estimates, and correspondence&mdash;California courts have been reluctant to allow carriers to use proof of loss technicalities to defeat otherwise valid claims.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean California policyholders should ignore proof of loss requirements. The carrier can still argue prejudice from non-compliance, and a signed proof of loss is still a sworn statement that can be used as evidence. But California&apos;s substantial compliance doctrine provides more room to maneuver than the strict condition-precedent framework that applies in other states.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The practical implication for California policyholders is that while the proof of loss should still be submitted&mdash;and should still be submitted as a partial proof of loss when appropriate&mdash;the consequences of technical imperfections are less severe than in jurisdictions where the proof of loss is treated as an absolute prerequisite.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Other Jurisdictions</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The majority of states fall somewhere on the spectrum between strict condition precedent and California&apos;s substantial compliance approach. Some states have enacted statutes that modify the common law proof of loss requirements. Some states require the carrier to demonstrate prejudice from non-compliance before it can invoke the proof of loss defense. Some states allow courts to excuse non-compliance when the carrier has waived the requirement through its conduct&mdash;for example, by continuing to adjust the claim without objecting to the absence of a proof of loss.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insured&apos;s obligation is to understand the specific requirements of the jurisdiction governing their claim. This is not a situation where general advice suffices. The weight of the proof of loss, the deadline for submission, the consequences of non-compliance, and the availability of defenses like waiver and substantial compliance all vary by state. An insured who does not know the rules of their specific jurisdiction is flying blind.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The NFIP Flood Policy: Where the Proof of Loss Is a Matter of Federal Law</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Everything discussed above applies to standard property insurance policies governed by state law. Flood insurance claims present a fundamentally different landscape, and the consequences of mishandling the proof of loss on a flood claim are far more severe.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Federal Framework</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The National Flood Insurance Program is a federal program administered by FEMA. Policies issued under the NFIP are governed by federal law and federal regulations, not by state insurance codes. The Standard Flood Insurance Policy&mdash;the SFIP&mdash;is a federal instrument. Its terms are set by regulation. They are not negotiable, and they are not subject to the consumer-protection doctrines that state courts have developed to soften the harsh edges of insurance policy conditions.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under the SFIP, the proof of loss requirement is not a technicality. It is a jurisdictional prerequisite. The insured must submit a complete, signed, sworn proof of loss within 60 days of the loss&mdash;unless the carrier grants an extension. Federal courts have enforced this requirement with a rigidity that would be unusual in state court. Claims have been denied&mdash;entirely, finally, and without recourse&mdash;for failure to submit a timely and compliant proof of loss.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The federal courts&apos; reasoning is straightforward: the NFIP is a government program, not a private insurance contract. The proof of loss requirement exists to protect the federal treasury. Congress enacted the requirement, FEMA implemented it, and the courts enforce it as written. The equitable doctrines that state courts use to excuse non-compliance&mdash;substantial compliance, waiver, estoppel&mdash;have limited or no application in the federal flood insurance context.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This means the stakes on a flood claim are categorically different. On a standard homeowners claim governed by state law, a proof of loss error is a problem that can often be corrected or litigated around. On an NFIP flood claim, a proof of loss error can be a death sentence for the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Practical Imperative</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For any policyholder with a flood claim under the NFIP, the proof of loss must be treated as the single most important document in the claim. It must be timely. It must be complete. It must be signed and sworn. If the insured cannot quantify the full loss within the 60-day window, the insured must request an extension in writing&mdash;and must document the carrier&apos;s response.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The partial proof of loss strategy is available and advisable on NFIP claims, but it must be executed with even greater precision than on a state-law claim. The insured should submit the partial proof of loss within the deadline, clearly mark it as partial, and request an extension for the supplemental submission. The insured should not assume that the same flexibility that exists under state law applies in the federal flood context. It does not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a flood claim under the NFIP, retain professional assistance before the proof of loss deadline. This is not the place to learn on the job.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Critical Distinction: NFIP Policies vs. Private Flood Policies Using the NFIP Form</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where a common and consequential misunderstanding arises.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The SFIP&mdash;the Standard Flood Insurance Policy form&mdash;is used by the NFIP. But the same form, or a substantially similar form, is also used by private flood insurance carriers. A policyholder may hold a flood policy that looks identical to an NFIP policy&mdash;same form, same language, same proof of loss requirements printed on the page&mdash;but that is actually underwritten by a private, state-regulated carrier.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters enormously for the proof of loss analysis. A flood policy issued by the NFIP is governed by federal law. A flood policy issued by a private carrier using the NFIP form&mdash;a Lloyd&apos;s of London syndicate, a surplus lines carrier, a state-admitted private flood insurer&mdash;may be governed by state law, not federal law.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the policy is governed by state law, the rigid federal proof of loss requirements do not apply. The state&apos;s own rules&mdash;which may include substantial compliance doctrines, waiver, estoppel, and other equitable defenses&mdash;govern the proof of loss obligation. The form on the page says one thing. The law governing the form says something else.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a trap that catches policyholders, public adjusters, and even attorneys who are not paying close attention. They see the SFIP form, assume federal law applies, and either panic about compliance or, conversely, assume the federal framework&apos;s limitations on bad faith claims apply to their private-carrier dispute. Neither assumption may be correct.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The first question on any flood claim is not &quot;What does the form say?&quot; It is &quot;Who is the underwriter?&quot; If the underwriter is FEMA or the NFIP, federal law applies and the proof of loss requirements are absolute. If the underwriter is a private carrier&mdash;regardless of what form the policy uses&mdash;the governing law may be entirely different.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Determine the answer to this question before you do anything else on a flood claim. The proof of loss strategy, the deadline analysis, the available legal defenses, and the consequences of error all flow from this threshold determination.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Specific Categories That Get Left Off the Proof of Loss</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier sends a pre-filled proof of loss, the form typically reflects the carrier&apos;s estimate&mdash;which, in turn, reflects the scope the carrier has approved. If the carrier&apos;s estimate is limited, the proof of loss will be limited. The following categories are commonly omitted from carrier-prepared proofs of loss, and their omission can be interpreted as a waiver if the insured signs without noting their exclusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Law and Ordinance Coverage</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the property requires code upgrades&mdash;and after any significant loss to a structure more than a few years old, it almost certainly does&mdash;the cost of those upgrades is covered under the law and ordinance endorsement (if the policy includes one, as most modern homeowners policies do). But the carrier&apos;s initial estimate rarely includes law and ordinance costs. The proof of loss, which reflects the carrier&apos;s estimate, therefore omits them.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the insured signs a proof of loss that does not include a claim for law and ordinance costs, the carrier may later argue that the insured did not claim those costs and has therefore waived them. Marking the proof of loss as partial and specifically noting that law and ordinance costs are not included&mdash;and are reserved for supplemental submission&mdash;eliminates this argument.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Trees, Shrubs, Plants, and Landscaping</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage for trees, shrubs, and other landscaping is typically provided under Coverage A (Dwelling) or as a separate coverage provision, subject to per-item and aggregate limits. This coverage is almost never included in the carrier&apos;s initial estimate or the carrier&apos;s pre-filled proof of loss. If the insured&apos;s landscaping was damaged&mdash;particularly in fire, wind, or flood losses&mdash;and the insured signs a proof of loss that does not reference landscaping, the carrier has an argument that the insured did not claim it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Additional Living Expenses (Coverage D)</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the insured is displaced and incurring additional living expenses&mdash;hotel costs, restaurant meals, storage, increased commuting costs&mdash;those expenses are ongoing. They cannot be fully quantified at the time the carrier demands the initial proof of loss, because they are still accruing. A proof of loss that includes only the dwelling damage (Coverage A) and does not address ALE (Coverage D) can be read as a waiver of the ALE claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The partial proof of loss resolves this problem. Submit the dwelling claim as a partial proof of loss. Note explicitly that Coverage D expenses are ongoing and will be submitted separately as they are incurred and documented.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Contents (Coverage C)</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Preparing a complete contents inventory after a total or near-total loss takes months. The insured must reconstruct a list of every item in the home, estimate its value, and document as much as possible. This process cannot be completed within the 60-day proof of loss window on most significant losses. If the carrier&apos;s pre-filled proof of loss includes only the dwelling damage, signing it without noting that the contents claim is forthcoming risks waiving Coverage C.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Debris Removal</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of debris removal&mdash;demolishing damaged structures, hauling materials, disposing of hazardous waste&mdash;is covered under most homeowners policies, often as an additional coverage with its own sublimit. The carrier&apos;s initial estimate may or may not include debris removal. If it does not, and the proof of loss does not reference it, the insured should note the omission.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When to Get Professional Help</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The proof of loss is a legal document. It is a sworn statement. The decision of how to complete it, what numbers to include, what language to add, and what categories to reserve involves legal and strategic judgments that most policyholders are not equipped to make on their own.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Retain a public adjuster or an attorney before signing a proof of loss</strong> whenever:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li className="text-gray-700 leading-relaxed">The claim involves significant dollar amounts&mdash;any claim approaching or potentially exceeding six figures warrants professional guidance on the proof of loss.</li>
        <li className="text-gray-700 leading-relaxed">The carrier has sent a pre-filled form with numbers you believe are substantially wrong.</li>
        <li className="text-gray-700 leading-relaxed">You are unsure whether the claim involves additional coverages (law and ordinance, ALE, contents, debris removal) that may not be reflected in the carrier&apos;s form.</li>
        <li className="text-gray-700 leading-relaxed">The claim involves a flood loss&mdash;particularly one that may be governed by federal law.</li>
        <li className="text-gray-700 leading-relaxed">The policy&apos;s proof of loss deadline is approaching and you have not yet quantified the full extent of the loss.</li>
        <li className="text-gray-700 leading-relaxed">You have been asked to sign a proof of loss and something about the request feels wrong or pressured.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of professional guidance at the proof of loss stage is trivial compared to the cost of signing a document that locks you into the wrong number, waives categories of coverage you did not intend to waive, or fails to comply with jurisdictional requirements you did not know existed. The proof of loss is one of the few documents in the claims process that the insured signs under oath. Treat it accordingly.
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
