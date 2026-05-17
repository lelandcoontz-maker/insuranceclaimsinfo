import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Assigning an Insurance Claim When Selling a Damaged Property: What Transfers, What Doesn\'t, and What Can Go Wrong',
  description:
    'A policyholder\'s guide to selling property with an open or unresolved insurance claim — assignment of claims, mortgage company complications, and California disclosure requirements.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire damages your home. The insurance claim is open. The carrier has paid some money
        &mdash; maybe the ACV, maybe a partial payment &mdash; but the claim is not resolved. There
        are disputed items. There may be recoverable depreciation that has not been collected because
        repairs have not been completed. There may be a code upgrade component that has not been
        triggered. There may be a bad faith dispute brewing over the carrier&rsquo;s handling of the
        claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And you want to sell the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maybe you are elderly and do not want to manage a reconstruction project. Maybe you are
        relocating and cannot wait eighteen months for the claim to resolve. Maybe you are
        financially unable to fund the gap between what the carrier has paid and what the repairs
        actually cost. Maybe you have looked at the situation &mdash; the displacement, the stress,
        the grinding negotiation with the carrier &mdash; and decided that selling the property and
        moving on is the right decision for you and your family.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question is: what happens to the insurance claim?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on what you are assigning, when you are assigning it, what your policy
        says about assignment, what your mortgage company has to say about it, and &mdash; in
        California and many other states &mdash; what you are required to disclose to the buyer.
        Each of these layers has its own rules, its own risks, and its own body of law that most
        policyholders never encounter until they are standing in the middle of it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Distinction: Pre-Loss vs. Post-Loss Assignment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important concept in insurance claim assignment is the distinction between
        assigning a policy before a loss occurs and assigning the right to claim proceeds after a
        loss has already occurred. These are fundamentally different transactions, and the law treats
        them very differently.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pre-Loss Assignment: Generally Prohibited
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance policy is a personal contract. The carrier agreed to insure a specific person,
        on a specific property, based on a specific underwriting evaluation of the risk that person
        and that property presented. The carrier evaluated the policyholder&rsquo;s claims history,
        the property&rsquo;s condition, its location, its construction type, and dozens of other
        factors before agreeing to issue the policy and setting the premium.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because the policy is a personal contract, the policyholder generally cannot transfer the
        policy itself to another person without the carrier&rsquo;s consent. If the policyholder
        could freely assign the policy to anyone, the carrier would lose control over its
        underwriting &mdash; it might find itself insuring a property owner it never agreed to
        insure, with a risk profile it never evaluated, at a premium that does not reflect the
        actual risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why virtually every property insurance policy contains an anti-assignment clause. The
        language varies, but the typical clause reads something like: &ldquo;Assignment of this
        policy shall not be valid except with the written consent of the Company.&rdquo; This clause
        means that the policyholder cannot transfer the policy to the buyer of the property as part
        of the real estate transaction. When the property sells, the policy does not follow the
        property. The buyer must obtain their own insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the pre-loss rule, and it is straightforward: you cannot give someone else your
        insurance policy without the carrier&rsquo;s permission.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Post-Loss Assignment: Generally Permitted
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the law diverges from what most people &mdash; and many carriers &mdash;
        expect.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a loss has occurred, the nature of the policyholder&rsquo;s interest changes. Before
        the loss, the policyholder held a contract for future, contingent coverage &mdash; a promise
        by the carrier to pay if something happened. After the loss, the policyholder holds something
        very different: a right to be paid for something that has already happened. The contingency
        has been resolved. The loss has occurred. The carrier&rsquo;s obligation to pay has been
        triggered. What the policyholder now holds is not a speculative contract &mdash; it is a
        chose in action, a legal right to recover a specific sum of money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And choses in action are, as a general rule, freely assignable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The logic is simple. Once the loss has occurred, the carrier&rsquo;s risk is fixed. The fire
        has already happened. The water damage has already occurred. The carrier cannot be harmed by
        the assignment because the event that triggers the carrier&rsquo;s obligation is in the past,
        not the future. The carrier owes what it owes regardless of who holds the right to collect
        it. Allowing the policyholder to assign the post-loss claim to a buyer, a contractor, or any
        other party does not change the carrier&rsquo;s exposure by a single dollar.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This principle is well established across American jurisdictions. Courts have consistently
        held that anti-assignment clauses in insurance policies apply to pre-loss assignments &mdash;
        transfers of the policy itself &mdash; but do not bar post-loss assignments of the right to
        claim proceeds. The reasoning is that enforcing an anti-assignment clause after the loss
        would effectively allow the carrier to use a contractual technicality to avoid paying a claim
        it legitimately owes. Courts are not sympathetic to that result.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the right to assign a post-loss claim is particularly well protected.
        California Insurance Code Section 520 provides that an insurance policy may be assigned after
        a loss. California courts have repeatedly affirmed that anti-assignment clauses do not
        prevent the assignment of rights that have already vested &mdash; that is, rights arising
        from a loss that has already occurred.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Exactly Can Be Assigned
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every component of an insurance claim is treated the same way in an assignment.
        Understanding what transfers &mdash; and what might not &mdash; is critical for both the
        seller and the buyer.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Insurance Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most straightforward assignment is the right to the insurance proceeds themselves &mdash;
        the money the carrier owes for the covered loss. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Unpaid ACV.</strong> If the carrier has not yet paid the full Actual Cash Value of
          the loss, the right to collect that ACV can be assigned to the buyer.
        </li>
        <li>
          <strong>Recoverable depreciation.</strong> The right to collect the depreciation holdback
          &mdash; the amount the carrier withholds until repairs are completed &mdash; can be
          assigned. This is particularly significant in the context of a property sale, because the
          buyer who completes the repairs can then claim the recoverable depreciation. The
          policyholder who sells without repairing would forfeit this amount; by assigning it, the
          right passes to someone who may actually complete the repairs and collect it.
        </li>
        <li>
          <strong>Supplemental claims.</strong> If the claim is still open and additional damage may
          be discovered during repairs, the right to submit supplemental claims can be assigned. The
          buyer who purchases the property and begins repairs may discover hidden damage that the
          original policyholder never documented.
        </li>
        <li>
          <strong>Undisputed amounts not yet paid.</strong> If the carrier has acknowledged that
          certain amounts are owed but has not yet issued payment, those amounts are assignable.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Pursue the Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the right to specific dollar amounts, the policyholder can assign the right to pursue
        the claim itself &mdash; to negotiate with the carrier, to dispute the carrier&rsquo;s
        valuation, to invoke the appraisal process, and to take whatever steps are necessary to
        resolve the claim. This is important when the claim is not just underpaid but actively
        disputed. The buyer who takes assignment of a disputed claim steps into the shoes of the
        original policyholder and can continue the fight.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Bad Faith Claims: The Complex Question
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the policyholder can assign a bad faith cause of action is a more complex question,
        and the answer varies significantly by jurisdiction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A bad faith claim is not a claim for insurance proceeds. It is a tort claim &mdash; a claim
        that the carrier acted unreasonably, in bad faith, in its handling of the claim. Bad faith
        claims can result in damages far exceeding the policy limits, including emotional distress,
        punitive damages, and attorney fees. They are, in many cases, the most valuable component
        of a disputed insurance claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the assignability of bad faith claims has been addressed by the courts, and
        the law permits assignment of bad faith claims in certain contexts. The assignment of a bad
        faith claim that has already accrued &mdash; meaning the carrier&rsquo;s bad faith conduct
        has already occurred &mdash; is generally treated like any other chose in action. The right
        to sue for the carrier&rsquo;s bad faith handling of the claim can be transferred to the
        buyer as part of the assignment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, bad faith claims are inherently personal in nature. They arise from the
        carrier&rsquo;s treatment of the policyholder &mdash; the delays, the lowball offers, the
        unreturned phone calls, the unreasonable denials. The buyer did not experience that conduct.
        The buyer did not suffer the emotional distress of being jerked around by the carrier for
        months. This personal dimension creates arguments that carriers can and do raise when an
        assigned bad faith claim is pursued by someone other than the original policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Any assignment that includes a bad faith component should be drafted by an attorney who
        understands both insurance law and the specific jurisdictional rules governing assignment of
        tort claims. This is not a form-document situation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Generally Cannot Be Assigned
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain elements of the insurance relationship are personal to the policyholder and do not
        transfer through an assignment of the claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The policy itself.</strong> As discussed above, the policy is a personal contract.
          The assignment of a post-loss claim does not transfer the policy to the buyer. The buyer
          does not become the insured under the seller&rsquo;s policy. The buyer acquires rights to
          the specific claim arising from the specific loss &mdash; nothing more.
        </li>
        <li>
          <strong>Future coverage.</strong> The assignment does not give the buyer any coverage for
          future losses. If a new loss occurs after the sale, the buyer must look to their own
          insurance.
        </li>
        <li>
          <strong>The duty to cooperate.</strong> The original policyholder&rsquo;s duty to cooperate
          with the carrier&rsquo;s investigation survives the assignment. Even after assigning the
          claim, the original policyholder may be required to provide testimony, answer questions, or
          produce documents related to the loss. This ongoing obligation should be addressed in the
          assignment agreement.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Structure the Assignment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An assignment of an insurance claim is a legal document, and like any legal document,
        specificity matters. A vague or poorly drafted assignment creates ambiguity that the carrier
        can exploit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Assignment Agreement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The assignment should be a written agreement between the seller (assignor) and the buyer
        (assignee) that identifies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The specific policy &mdash; carrier name, policy number, policy period</li>
        <li>The specific loss &mdash; date of loss, type of loss, claim number</li>
        <li>
          The specific rights being assigned &mdash; proceeds, right to negotiate, right to
          appraisal, supplemental claims, bad faith claims (if applicable)
        </li>
        <li>
          Any rights retained by the seller &mdash; the seller may want to retain certain rights,
          such as a portion of any recovery above a specified amount
        </li>
        <li>
          The buyer&rsquo;s assumption of responsibilities &mdash; the buyer should acknowledge the
          obligation to cooperate with the carrier, to comply with policy conditions, and to pursue
          the claim in good faith
        </li>
        <li>
          Representations about the current status of the claim &mdash; what has been paid, what is
          disputed, what remains outstanding
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Notice to the Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier should be notified of the assignment in writing. While a valid post-loss
        assignment does not require the carrier&rsquo;s consent, providing notice serves important
        purposes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          It establishes a record that the carrier was informed of the assignment and knows to whom
          future payments should be directed
        </li>
        <li>
          It prevents the carrier from arguing that it paid the wrong party or was unaware of the
          assignment
        </li>
        <li>
          It creates a paper trail documenting the assignment date, which may be relevant if disputes
          arise about when the assignment became effective
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The notice should include a copy of the assignment agreement, a demand that all future
        communications and payments be directed to the assignee, and a statement that the assignee is
        stepping into the rights of the original policyholder with respect to the identified claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Integration with the Real Estate Transaction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a property sale, the assignment of the insurance claim is typically a component of the
        broader purchase agreement. The assignment should be referenced in the purchase agreement
        itself, and the specific terms should be set forth in a separate assignment document that is
        executed simultaneously with the closing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The purchase price of the property will reflect the property&rsquo;s damaged condition. The
        buyer is acquiring a damaged property at a reduced price, plus the right to pursue an
        insurance claim that may fund the repairs. The economics of the transaction &mdash; how much
        the buyer pays for the property, how much the buyer expects to recover from the insurance
        claim, and how much the repairs will actually cost &mdash; should be clearly understood by
        both parties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a transaction that benefits from legal representation on both sides. The seller needs
        an attorney to ensure the assignment is valid and complete. The buyer needs an attorney to
        evaluate the claim being assigned &mdash; its current status, the carrier&rsquo;s position,
        the likelihood of recovery, and the risks of stepping into an existing dispute with an
        insurance company.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Mortgage Company Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the property has a mortgage, the insurance claim is not a two-party transaction between
        the seller and the carrier. It is a three-party transaction, and the mortgage company is the
        party most likely to create complications.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Mortgage Company Is Involved
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a property is mortgaged, the mortgage company has a financial interest in the property.
        The mortgage company lent money secured by the property, and the property is the mortgage
        company&rsquo;s collateral. If the property is damaged and not repaired, the mortgage
        company&rsquo;s collateral is impaired.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To protect its interest, the mortgage company is named as a loss payee &mdash; or more
        specifically, a mortgagee &mdash; on the insurance policy. This means that insurance proceeds
        for dwelling damage are typically payable jointly to the policyholder and the mortgage
        company. The check arrives with both names on it. The policyholder cannot cash it alone.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the Mortgage Company Wants
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mortgage company wants the property repaired. A repaired property maintains the
        collateral value that secures the mortgage. The mortgage company does not want the
        policyholder to take the insurance money and walk away, leaving a damaged property worth less
        than the outstanding loan balance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To ensure repairs are completed, mortgage companies typically impose a managed disbursement
        process. The mortgage company holds the insurance proceeds in escrow and releases them in
        draws as repairs progress:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>The insurance check is endorsed by both the policyholder and the mortgage company</li>
        <li>
          The funds are deposited into an escrow or restricted account controlled by the mortgage
          company
        </li>
        <li>The policyholder begins repairs and submits documentation of progress</li>
        <li>The mortgage company sends an inspector to verify the work</li>
        <li>The mortgage company releases a portion of the funds</li>
        <li>The process repeats until repairs are complete</li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Happens When the Policyholder Doesn&rsquo;t Repair
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder decides not to repair &mdash; and instead wants to sell the property
        as-is &mdash; the mortgage company has a problem. Its collateral is damaged. The insurance
        proceeds that could restore the collateral are sitting in escrow. And the policyholder wants
        to sell and move on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mortgage company&rsquo;s response depends on the specifics, but it generally falls into
        one of these categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Apply proceeds to the loan balance.</strong> Some mortgage agreements allow the
          mortgage company to apply insurance proceeds to the outstanding loan balance rather than
          releasing them for repairs.
        </li>
        <li>
          <strong>Require repairs as a condition of releasing funds.</strong> The mortgage company
          may simply refuse to release the insurance proceeds until repairs are completed, regardless
          of the policyholder&rsquo;s desire to sell.
        </li>
        <li>
          <strong>Cooperate with the sale.</strong> If the sale price, combined with any insurance
          proceeds applied to the loan, is sufficient to pay off the mortgage in full, the mortgage
          company may cooperate with the transaction.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Practical Impact
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mortgage company&rsquo;s involvement means that a policyholder who wants to sell a
        damaged property and assign the insurance claim cannot simply hand the claim to the buyer and
        walk away. The mortgage must be satisfied. The insurance proceeds that are jointly payable to
        the policyholder and the mortgage company must be accounted for. And the assignment of the
        claim must be structured in a way that addresses the mortgage company&rsquo;s interests.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders who own the property free and clear &mdash; no mortgage &mdash; this
        complication does not exist. The insurance proceeds are payable to the policyholder alone,
        and the policyholder has complete freedom to assign the claim as part of a property sale.
        This is one of the few situations in insurance claims where having no mortgage provides a
        clear strategic advantage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders with a mortgage, the transaction requires coordination among the
        policyholder, the buyer, the mortgage company, and potentially the carrier. This is a
        transaction that demands competent legal counsel.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Disclosure Requirements: What the Seller Must Tell the Buyer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is a full-disclosure state for residential real estate transactions. Under
        California Civil Code Sections 1102 through 1102.17, sellers of residential property (one to
        four units) are required to complete a Transfer Disclosure Statement (TDS) disclosing known
        material facts about the property&rsquo;s condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A property with unrepaired damage from an insurance claim is a property with known material
        defects. The seller knows about the damage &mdash; the seller filed the claim. The seller
        knows the extent of the damage &mdash; the seller has the carrier&rsquo;s inspection
        reports, the estimates, the scope of loss. The seller may know about disputes over the scope
        or cause of the damage. All of this is information that a buyer would want to know before
        purchasing the property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Scope of Disclosure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Transfer Disclosure Statement requires the seller to disclose known defects in the
        property&rsquo;s structural components, roof, plumbing, electrical, heating, and other
        systems. A property with fire damage, water damage, or any other type of insured loss almost
        certainly has defects in one or more of these categories.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the TDS, California law imposes a general duty on sellers to disclose all known
        material facts that affect the value or desirability of the property. This duty exists
        independent of the TDS form and encompasses information that may not fit neatly into the
        form&rsquo;s checkboxes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Claims and CLUE Reports
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a practical dimension to disclosure that sellers should understand: insurance claims
        are not secrets. The Comprehensive Loss Underwriting Exchange &mdash; CLUE &mdash; is a
        database maintained by LexisNexis that records insurance claims filed on a property. When the
        buyer applies for homeowners insurance on the property they are purchasing, the buyer&rsquo;s
        prospective carrier will pull a CLUE report. That report will show every claim filed on the
        property within the prior seven years, including the date of loss, the type of loss, and the
        amounts paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The buyer is going to find out about the claim. The question is not whether the buyer will
        learn about it, but whether they learn about it from the seller&rsquo;s honest disclosure or
        from a CLUE report that makes the seller look like they were hiding something.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What to Disclose and How
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The specifics of what to disclose and how to frame the disclosure are questions for a real
        estate attorney. This is not an area where a public adjuster, a contractor, or the
        seller&rsquo;s best judgment should substitute for legal counsel. The stakes are too high
        &mdash; a seller who fails to disclose a material defect faces potential liability for fraud,
        negligent misrepresentation, and rescission of the sale.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, certain general principles apply:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Disclose the claim.</strong> The fact that an insurance claim was filed, the type
          of loss, and the general scope of the damage should be disclosed.
        </li>
        <li>
          <strong>Disclose unrepaired damage.</strong> If damage from the insured loss has not been
          fully repaired, the seller should disclose that fact and describe the unrepaired
          conditions.
        </li>
        <li>
          <strong>Disclose the status of the claim.</strong> If the insurance claim is still open,
          that fact is material. The buyer needs to know whether they are purchasing a property with
          a resolved claim or stepping into an active dispute with an insurance company.
        </li>
        <li>
          <strong>When in doubt, disclose.</strong> Over-disclosure creates no liability.
          Under-disclosure creates substantial liability.
        </li>
        <li>
          <strong>Assume the buyer will see the claim file.</strong> The buyer may request the
          insurance claim file as part of due diligence. The seller who approaches disclosure with
          the assumption that the buyer will eventually see everything is the seller who is least
          likely to face a post-closing dispute.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strategic Considerations for the Seller
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Timing the Sale
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance claim is still in its early stages &mdash; if the carrier has not yet
        completed its investigation, if the scope of loss is not yet determined, if significant
        coverage disputes remain unresolved &mdash; the value of the claim being assigned to the
        buyer is uncertain. The buyer is acquiring a dispute, not a check. This uncertainty will be
        reflected in the purchase price, and typically not in the seller&rsquo;s favor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the seller can advance the claim to a point where the carrier&rsquo;s position is clear
        &mdash; even if the carrier&rsquo;s position is inadequate &mdash; the claim has a more
        definable value. The buyer can evaluate what has been paid, what the carrier has agreed to,
        what remains in dispute, and what the cost of pursuing the dispute will be. Clarity, even
        unfavorable clarity, is more valuable than ambiguity.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Valuing the Assigned Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The value of the assigned claim should be reflected in the purchase price. The buyer is
        paying less for the property because it is damaged, and the buyer is receiving the insurance
        claim as partial compensation for the reduced value. The math matters:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the property in undamaged condition would sell for $800,000, and the property in its
        current damaged condition is worth $550,000, the gap is $250,000. If the insurance claim has
        a realistic recovery value of $200,000 &mdash; considering what has been paid, what is
        disputed, and the cost of pursuing the dispute &mdash; the effective purchase price from the
        buyer&rsquo;s perspective is $550,000 for the property plus an asset (the claim) worth
        approximately $200,000, for a total value proposition of $750,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This valuation is inherently uncertain, and sophisticated buyers will discount the claim
        value to account for risk. The seller&rsquo;s goal is to present the claim in a way that
        maximizes the buyer&rsquo;s confidence in the recovery &mdash; which means having organized
        documentation, clear records of what has been paid and disputed, and ideally a professional
        assessment of the claim&rsquo;s value from a public adjuster or attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Retaining a Piece of the Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seller does not have to assign 100% of the claim. The assignment agreement can be
        structured to give the seller a share of any recovery above a specified threshold. For
        example, the seller might assign the claim to the buyer but retain 25% of any recovery above
        the amount already paid by the carrier. This gives the seller ongoing upside if the buyer
        successfully pursues the disputed amounts, while giving the buyer the right to manage and
        control the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether this structure makes sense depends on the specifics &mdash; the size of the disputed
        amount, the seller&rsquo;s willingness to remain involved in the claim (even peripherally),
        and the buyer&rsquo;s willingness to accept a partial assignment. But it is an option that
        should be considered, particularly in claims where the disputed amount is large and the
        seller believes the claim has substantial value that is not reflected in the current purchase
        price.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strategic Considerations for the Buyer
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Due Diligence on the Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A buyer considering a property with an assigned insurance claim should conduct due diligence
        on the claim itself, not just the property. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Reviewing the claim file.</strong> Request a complete copy of the insurance claim
          file from the seller, including all correspondence with the carrier, all estimates and
          scopes of loss, all inspection reports, all payments received, and all coverage positions
          taken by the carrier.
        </li>
        <li>
          <strong>Evaluating the carrier&rsquo;s position.</strong> Understand what the carrier has
          paid, what the carrier has disputed, and the basis for the carrier&rsquo;s position.
        </li>
        <li>
          <strong>Assessing repair costs.</strong> Obtain independent estimates for the cost of
          completing repairs. The buyer needs to know not just what the carrier will pay, but what
          the repairs will actually cost.
        </li>
        <li>
          <strong>Consulting an attorney.</strong> The buyer should have an attorney review the
          assignment agreement, evaluate the enforceability of the assignment, and advise on the
          risks of stepping into an existing insurance dispute.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Recoverable Depreciation Opportunity
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the buyer, one of the most significant opportunities in an assigned claim is the
        recoverable depreciation. The original policyholder who sells without repairing forfeits the
        depreciation holdback. But the buyer who completes the repairs after purchasing the property
        can collect the recoverable depreciation through the assigned claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the depreciation holdback on a claim is $60,000, and the buyer completes the repairs and
        submits the invoices to the carrier through the assigned claim, the buyer collects $60,000
        that the seller would have forfeited. This $60,000 effectively reduces the buyer&rsquo;s net
        repair cost and can make the economics of purchasing a damaged property substantially more
        attractive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key question is whether the carrier will honor the recoverable depreciation claim
        submitted by an assignee. Carriers may resist, arguing that the depreciation holdback
        provisions are personal to the original policyholder. The strength of this argument varies by
        jurisdiction, but in states like California where post-loss assignment rights are strongly
        protected, the assignee generally steps into the shoes of the original policyholder &mdash;
        including the right to collect recoverable depreciation upon completion of repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Assignment Is Not the Right Answer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assignment of an insurance claim is not always the best strategy for a policyholder who
        wants to sell.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the claim is small and the disputed amount is minimal, the transaction costs of drafting
        an assignment, notifying the carrier, and dealing with the carrier&rsquo;s objections may
        exceed the value of the assignment itself. In that case, the policyholder may be better off
        settling the claim &mdash; even at a discount &mdash; before closing the sale.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder&rsquo;s relationship with the carrier has deteriorated to the point of
        active litigation, assigning the claim means assigning a lawsuit. Buyers who are purchasing a
        property to live in may not want to inherit active litigation with an insurance company.
        Investors and contractors who purchase damaged properties as a business may be comfortable
        with this; a family looking for a home generally is not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the claim involves complex coverage issues &mdash; concurrent causation disputes, policy
        interpretation questions, or coverage defenses that the carrier has raised &mdash; the value
        of the assigned claim depends entirely on how those legal questions are resolved. The buyer
        is not just buying a claim; they are buying a legal dispute with an uncertain outcome.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these situations, the seller should consult with both an insurance professional
        and an attorney before deciding whether to assign the claim, settle it, or pursue it to
        resolution before selling.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Selling a damaged property with an open insurance claim is not a simple transaction. It
        involves at least three bodies of law &mdash; insurance law, real estate law, and mortgage
        law &mdash; and potentially a fourth if the claim involves bad faith or tort claims. The
        policyholder who decides to sell must understand what can be assigned, what the mortgage
        company will allow, what must be disclosed to the buyer, and how to structure the transaction
        to protect everyone&rsquo;s interests.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The right to assign a post-loss insurance claim is a valuable right. In California and most
        other jurisdictions, that right is protected by law and cannot be defeated by an
        anti-assignment clause in the policy. But having the right to assign is not the same as
        knowing how to assign effectively. The assignment must be properly drafted, the carrier must
        be properly notified, the mortgage company must be properly addressed, and the disclosure
        obligations must be properly fulfilled.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Policyholders who are considering selling a damaged property should not make this decision
        in a vacuum. Talk to your public adjuster about the claim&rsquo;s value. Talk to your
        attorney about the assignment. Talk to your mortgage company about what they will and will
        not allow. And make the decision with full information &mdash; because once the property is
        sold and the claim is assigned, getting it back is not an option.
      </p>
    </>
  )
}
