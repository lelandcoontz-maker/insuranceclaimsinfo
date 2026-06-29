import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Selling a Property With a Pending Insurance Claim',
  description:
    'Can you sell a home while an insurance claim is open? Yes, but the complications are significant. Learn how to protect claim proceeds, handle assignments, navigate mortgage payoffs, and avoid common pitfalls when real estate transactions and insurance claims collide.',
  summary:
    'You can sell a home with an open claim, but it complicates proceeds, assignments, and the mortgage payoff. Clarify in the sale who keeps the claim and how proceeds transfer, to avoid losing money in the handoff.',
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
        You have a damaged home. You have an open insurance claim. And now you want to sell.
        Maybe the damage was the last straw and you want out. Maybe you received a job offer
        in another state. Maybe the claim has dragged on so long that selling feels like the
        only way to move forward. Whatever the reason, selling a property with a pending
        insurance claim is legal &mdash; but the intersection of real estate law and insurance
        law creates traps that catch both buyers and sellers off guard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article walks through the mechanics of what happens to a claim when a property
        changes hands, how to protect yourself on either side of the transaction, and where
        things commonly go wrong.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Can You Sell a Home While a Claim Is Pending?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. There is no law that prevents you from listing or selling a property while an
        insurance claim is open. The claim belongs to the policyholder, not to the property.
        But that distinction &mdash; claim follows the person, not the land &mdash; is exactly
        what creates the complications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you sell the property, you are transferring real estate. You are not automatically
        transferring the insurance claim. The insurance policy is a contract between you and
        your carrier. The buyer has no rights under your policy unless those rights are
        specifically assigned. This means that after closing, the seller may still be the one
        entitled to the claim proceeds &mdash; but the seller no longer owns the property that
        was damaged. That disconnect is the root of nearly every problem discussed in this
        article.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Who Gets the Insurance Money &mdash; Buyer or Seller?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends entirely on what the purchase agreement says and whether the claim
        was assigned. There is no default rule that automatically transfers claim proceeds to
        the buyer at closing. Consider three scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Purchase agreement is silent on the claim.</strong> The seller retains the
          right to all claim proceeds because the insurance contract is between the seller
          and the carrier. The buyer gets the property in its current condition. If the claim
          later pays out, that money goes to the seller &mdash; even though the seller no
          longer owns the property.
        </li>
        <li>
          <strong>Purchase agreement addresses the claim.</strong> The parties can negotiate
          any arrangement: the seller keeps the proceeds, the buyer receives them, the
          proceeds are held in escrow until the claim settles, or the sale price is adjusted
          to account for the pending claim. Whatever the agreement says controls.
        </li>
        <li>
          <strong>The claim is formally assigned to the buyer.</strong> The buyer steps into
          the seller&apos;s shoes and has the right to pursue the claim directly with the
          carrier. This is the cleanest approach when a buyer purchases a damaged property
          intending to repair it. See our guide on{' '}
          <Link href="/resources/assignment-of-benefits" className="text-[#2E74B5] hover:underline">
            assignment of benefits
          </Link>{' '}
          for how this works.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Purchase Agreement Controls Everything">
        <p>
          If you are selling or buying a property with a pending claim, the purchase agreement
          must explicitly address what happens to the insurance proceeds. Silence on this issue
          is not neutral &mdash; it defaults to the seller keeping the money, which may not be
          what either party intended. Have your real estate attorney or escrow officer include
          specific language addressing the claim, the proceeds, and any assignment.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Assigning the Claim to the Buyer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An{' '}
        <Link href="/resources/assignment-of-benefits" className="text-[#2E74B5] hover:underline">
          assignment of benefits
        </Link>{' '}
        (AOB) transfers the seller&apos;s rights under the insurance policy to the buyer. After
        a valid assignment, the buyer can deal directly with the carrier, submit documentation,
        negotiate the settlement, and receive payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, insurance benefits are generally assignable after a loss has occurred.
        The key word is &ldquo;after.&rdquo; You cannot assign coverage for future losses &mdash;
        that would effectively be selling the policy itself. But once the loss has happened, the
        right to collect the proceeds becomes a chose in action (a right to recover money), and
        California law treats choses in action as freely assignable.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does the Carrier Have to Consent?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policies contain anti-assignment clauses that say the policy cannot be assigned
        without the carrier&apos;s consent. However, California courts have consistently held
        that these clauses apply to assignment of the policy itself &mdash; not to assignment
        of the right to collect proceeds after a loss. Once the damage has occurred and the
        claim exists, the policyholder&apos;s right to the money is a personal asset that can
        be transferred like any other. The carrier does not need to consent to a post-loss
        assignment of benefits, regardless of what the policy says.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, the carrier should be notified of the assignment. While consent is not
        required, notice is a practical necessity &mdash; the carrier needs to know who to
        communicate with and who to make checks payable to.
      </p>

      <CalloutBox variant="legal" title="California Law on Post-Loss Assignments">
        <p>
          California Insurance Code &sect; 520 is actually a sword for the seller, not a shield
          for the carrier. It provides: &ldquo;An agreement not to transfer the claim of the
          insured against the insurer after a loss has happened, is void if made before the
          loss.&rdquo; In plain language: pre-loss anti-assignment clauses in the policy cannot
          be enforced to block post-loss transfers of the claim. Post-loss assignment of the
          right to proceeds is treated as assignment of a chose in action under California
          Civil Code &sect; 954, which permits free transferability. The carrier&apos;s consent
          is not required for a post-loss assignment.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Can You Assign a Bad Faith Claim to the Buyer?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the policyholder can assign a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>{' '}
        cause of action is a more complex question than assigning the right to claim proceeds.
        A bad faith claim is not a claim for insurance money &mdash; it is a tort claim alleging
        that the carrier acted unreasonably in handling the claim. Bad faith claims can result in
        damages far exceeding the policy limits, including emotional distress, punitive damages,
        and attorney fees. In many disputed claims, the bad faith component is the most valuable
        part.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the assignment of a bad faith claim that has already accrued &mdash;
        meaning the carrier&rsquo;s bad faith conduct has already occurred &mdash; is generally
        treated like any other chose in action. The right to sue for the carrier&rsquo;s bad faith
        handling can be transferred to the buyer as part of the assignment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, bad faith claims are inherently personal in nature. They arise from the
        carrier&rsquo;s treatment of the policyholder &mdash; the delays, the lowball offers, the
        unreturned phone calls, the unreasonable denials. The buyer did not experience that
        conduct. The buyer did not suffer the emotional distress of being jerked around by the
        carrier for months. This personal dimension creates arguments that carriers can and do
        raise when an assigned bad faith claim is pursued by someone other than the original
        policyholder.
      </p>

      <CalloutBox variant="warning" title="Bad Faith Assignment Requires Attorney Drafting">
        <p>
          Any assignment that includes a bad faith component should be drafted by an attorney
          who understands both insurance law and the specific jurisdictional rules governing
          assignment of tort claims. This is not a form-document situation. A poorly drafted
          bad faith assignment may be challenged by the carrier as invalid, costing both
          parties the most valuable part of the claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Cannot Be Assigned
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain elements of the insurance relationship are personal to the policyholder and do
        not transfer through an assignment of the claim. Understanding these boundaries prevents
        both buyer and seller from making assumptions that can unravel the transaction.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The policy itself.</strong> The assignment of a post-loss claim does not transfer
          the policy to the buyer. The buyer does not become the insured under the seller&rsquo;s
          policy. The buyer acquires rights to the specific claim arising from the specific loss
          &mdash; nothing more.
        </li>
        <li>
          <strong>Future coverage.</strong> The assignment does not give the buyer any coverage for
          future losses. If a new loss occurs after the sale, the buyer must look to their own
          insurance.
        </li>
        <li>
          <strong>The duty to cooperate.</strong> The original policyholder&rsquo;s duty to
          cooperate with the carrier&rsquo;s investigation survives the assignment. Even after
          assigning the claim, the original policyholder may be required to provide testimony,
          answer questions, or produce documents related to the loss. This ongoing obligation
          should be addressed in the assignment agreement, and the seller should understand that
          selling the property does not necessarily end their involvement in the claim.
        </li>
      </ul>

      <CalloutBox variant="important" title="Sellers: Your Obligations May Survive the Sale">
        <p>
          Assigning the claim and selling the property does not mean you are done. The carrier
          may still require your cooperation &mdash; answering questions about the loss,
          providing documents, or even sitting for an examination under oath. Make sure the
          assignment agreement addresses this obligation so both you and the buyer understand
          what is expected after closing.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Mortgage Payoff Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where selling with a pending claim gets truly complicated. If the property has a
        mortgage, the lender is listed as an additional payee on dwelling damage checks. This is
        standard &mdash; the lender has a financial interest in the property and wants to make
        sure insurance proceeds are used to repair its collateral. Under normal circumstances,
        the lender holds the funds and releases them as repairs progress. For more on this, see
        our guide on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          mortgage company holds
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But when you sell the property, the mortgage gets paid off at closing. And here is the
        problem: if the insurance check is co-payable to you and the mortgage company, and the
        mortgage company receives that check as part of the payoff, the lender may apply those
        funds to the loan balance rather than releasing them to you. The lender&apos;s position
        is simple &mdash; the property is no longer their collateral, they have no reason to
        hold funds for repairs, and they want their money back.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example: The Disappearing Insurance Check
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner has a $400,000 mortgage and files a claim for $120,000 in fire damage. The
        carrier issues a check for $85,000 (the actual cash value payment) made payable to the
        homeowner and the mortgage company. The homeowner endorses it and sends it to the
        lender&apos;s loss draft department. Before the lender releases any repair funds, the
        homeowner decides to sell. At closing, the mortgage is paid off. The lender applies the
        $85,000 in the loss draft account toward the loan balance. The homeowner walks away from
        closing with $85,000 less than expected &mdash; and still has an open claim with no
        proceeds in hand.
      </p>

      <CalloutBox variant="warning" title="Coordinate Insurance and Escrow Before Listing">
        <p>
          If you have insurance proceeds sitting in your lender&apos;s loss draft account and you
          are planning to sell, talk to your escrow officer and your lender before listing. You
          may need to negotiate the release of those funds as a condition of the sale, or adjust
          the closing documents to account for the insurance money separately from the mortgage
          payoff.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Disclosure Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law requires sellers to disclose known material defects and conditions that
        affect the property. The Transfer Disclosure Statement (TDS), required under California
        Civil Code &sect; 1102, asks sellers to disclose known defects, alterations, and other
        conditions. A pending insurance claim for property damage is exactly the kind of
        information that must be disclosed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Specifically, the seller should disclose:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The nature and extent of the damage</li>
        <li>That an insurance claim has been filed</li>
        <li>The current status of the claim</li>
        <li>Whether any repairs have been completed, are in progress, or have not been started</li>
        <li>Whether any claim proceeds have been received and how they were used</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Failure to disclose a pending claim and known damage can expose the seller to liability
        after closing. If the buyer discovers undisclosed damage, they may have grounds for
        rescission of the sale or a lawsuit for damages. The fact that an insurance claim was
        filed and not disclosed makes it very difficult for the seller to argue they did not
        know about the damage &mdash; filing a claim is an admission of knowledge.
      </p>

      <CalloutBox variant="legal" title="California Disclosure Law">
        <p>
          Under California Civil Code &sect; 1102.6, the Transfer Disclosure Statement requires
          the seller to disclose &ldquo;any significant defects/malfunctions&rdquo; in
          specified systems and to disclose other known material facts. A pending insurance
          claim for property damage is a material fact. Also, California Civil Code
          &sect; 1102.13 specifically asks whether the seller is aware of any insurance claims
          filed within the past five years. Failing to disclose is not a viable strategy
          &mdash; it creates liability that far exceeds any benefit.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Scenarios
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 1: Seller Lists &ldquo;As-Is&rdquo; With an Open Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner has a kitchen fire. The claim is open and the carrier has paid the ACV amount
        but the homeowner has not started repairs. The homeowner lists the property as-is, pricing
        it below market to reflect the unrepaired damage. The buyer knows about the damage and
        plans to repair it themselves after closing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The key question:</strong> What happens to the claim? If the purchase agreement
        is silent, the seller keeps the right to claim proceeds &mdash; including the depreciation
        holdback the seller can no longer collect because they will not be making the repairs. If
        the buyer wants the claim, it needs to be assigned. If the seller keeps the claim, the
        sale price should reflect that the buyer is taking the property without any insurance
        recovery.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 2: Buyer Purchases Knowing About the Damage and the Pending Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A buyer agrees to purchase a property with known water damage. The seller assigns the
        insurance claim to the buyer at closing. The buyer plans to complete the repairs and
        collect the depreciation holdback. This can work well for both parties &mdash; the seller
        avoids the hassle of managing repairs, and the buyer gets a property at a reduced price
        with an insurance claim to help fund the restoration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The risk for the buyer:</strong> The claim may settle for less than expected. The
        carrier may dispute scope, apply depreciation differently, or raise coverage defenses the
        buyer did not anticipate. The buyer is stepping into the seller&apos;s shoes &mdash;
        including any weaknesses in the claim. A smart buyer gets a copy of the estimate, the
        policy, and all claim correspondence before agreeing to take the assignment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 3: Seller Repairs Before Closing Using Insurance Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the cleanest approach. The seller completes repairs, collects the full replacement
        cost (including the depreciation holdback), and sells the property in repaired condition.
        The buyer gets a home without damage issues, and the insurance claim is resolved before
        the sale.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The catch:</strong> This requires time. Repairs take weeks or months. The claim
        may still be in dispute. The seller may not have the funds to pay for repairs upfront
        while waiting for the depreciation holdback. And if the{' '}
        <Link href="/resources/claims-process" className="text-[#2E74B5] hover:underline">
          claims process
        </Link>{' '}
        is moving slowly, the seller may not be able to wait.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 4: Seller Assigns the Claim to the Buyer at Closing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seller and buyer agree that the insurance claim will be assigned to the buyer as
        part of the transaction. The assignment is executed at closing. The buyer takes title to
        the property and the right to pursue the claim. The sale price is adjusted to reflect
        the damage and the uncertain value of the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Important detail:</strong> The assignment should be a written document, separate
        from the purchase agreement, that specifically identifies the claim number, the carrier,
        the date of loss, and the rights being transferred. A vague reference to &ldquo;all
        insurance claims&rdquo; in the purchase agreement may not be sufficient. The carrier
        should receive written notice of the assignment with the buyer&apos;s contact information.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 5: Claim Settles After Closing With No Assignment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The sale closes. No assignment was made. Two months later, the carrier issues a settlement
        check to the seller. The seller is legally entitled to the money &mdash; the claim was
        theirs. But the buyer now owns a damaged property and expected to receive those proceeds
        as part of the deal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a dispute between the buyer and seller, not between either of them and the
        carrier. Whether the buyer has a claim against the seller depends on what was represented
        during the sale, what the purchase agreement says, and whether the buyer can prove they
        were promised the insurance proceeds. If the agreement was silent, the seller keeps the
        money. If there was a verbal promise, good luck proving it.
      </p>

      <CalloutBox variant="tip" title="Get It in Writing">
        <p>
          Verbal agreements about insurance proceeds are worth the paper they are printed on.
          Every arrangement regarding the pending claim &mdash; who gets the money, whether the
          claim is assigned, how the proceeds affect the sale price &mdash; must be in writing,
          signed by both parties, and ideally incorporated into the escrow instructions.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Valuing the Assigned Claim in the Purchase Price
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The value of the assigned claim should be reflected in the purchase price. The buyer is
        paying less for the property because it is damaged, and the buyer is receiving the
        insurance claim as partial compensation for the reduced value. The math matters.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this example: a property in undamaged condition would sell for $800,000. In its
        current damaged condition, it is worth $550,000. The gap is $250,000. If the insurance
        claim has a realistic recovery value of $200,000 &mdash; considering what has been paid,
        what is disputed, and the cost of pursuing the dispute &mdash; the effective purchase
        price from the buyer&rsquo;s perspective is $550,000 for the property plus an asset (the
        claim) worth approximately $200,000, for a total value proposition of $750,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This valuation is inherently uncertain, and sophisticated buyers will discount the claim
        value to account for risk. The seller&rsquo;s goal is to present the claim in a way that
        maximizes the buyer&rsquo;s confidence in the recovery &mdash; which means having
        organized documentation, clear records of what has been paid and disputed, and ideally
        a professional assessment of the claim&rsquo;s value from a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          Public Adjuster
        </Link>{' '}
        or attorney.
      </p>

      <CalloutBox variant="tip" title="Clarity Increases Claim Value">
        <p>
          If the seller can advance the claim to a point where the carrier&rsquo;s position is
          clear &mdash; even if that position is inadequate &mdash; the claim has a more definable
          value. A buyer can evaluate what has been paid, what the carrier has agreed to, what
          remains in dispute, and what the cost of pursuing the dispute will be. Clarity, even
          unfavorable clarity, is more valuable than ambiguity when negotiating the purchase price.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Retaining a Percentage of the Recovery
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seller does not have to assign 100% of the claim. The assignment agreement can be
        structured to give the seller a share of any recovery above a specified threshold. For
        example, the seller might assign the claim to the buyer but retain 25% of any recovery
        above the amount already paid by the carrier. This gives the seller ongoing upside if
        the buyer successfully pursues the disputed amounts, while giving the buyer the right to
        manage and control the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether this structure makes sense depends on the specifics &mdash; the size of the
        disputed amount, the seller&rsquo;s willingness to remain involved in the claim (even
        peripherally), and the buyer&rsquo;s willingness to accept a partial assignment. But it
        is an option that should be considered, particularly in claims where the disputed amount
        is large and the seller believes the claim has substantial value that is not reflected in
        the current purchase price.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Carrier&apos;s Response to a Sale
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company learns that a property has been sold, some carriers try to
        close the claim. Their reasoning is that the policyholder no longer owns the property
        and therefore no longer has an &ldquo;insurable interest.&rdquo; This argument has
        serious problems.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurable interest requirement applies at the time of the loss, not at the time of
        settlement. If you owned the property when the damage occurred and had a valid policy in
        force, your right to the claim proceeds vested at the moment of loss. Selling the
        property afterward does not retroactively eliminate your insurable interest. Your right
        to collect was established when the damage happened.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier that refuses to pay a valid claim solely because the property changed hands is
        engaging in conduct that may constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>
        . The sale of the property is irrelevant to the carrier&apos;s obligation to settle the
        claim for the loss that occurred during the policy period.
      </p>

      <CalloutBox variant="warning" title="Do Not Let the Carrier Close Your Claim After a Sale">
        <p>
          If you sell your property and the carrier tells you the claim is being closed because
          you no longer own the home, push back in writing. Cite the date of loss, confirm you
          owned the property and had coverage when the damage occurred, and remind them that
          insurable interest is measured at the time of loss. If the claim was validly assigned
          to the buyer, the buyer should do the same. A carrier that closes a valid claim because
          of a subsequent sale is inviting a regulatory complaint and potential bad faith
          liability.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What About the Depreciation Holdback?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a replacement cost policy, the carrier pays the actual cash value first and withholds
        the depreciation until repairs are completed. This creates a specific problem when the
        property is sold before repairs are done. For background on how this works, see our
        article on{' '}
        <Link href="/resources/cashing-insurance-checks" className="text-[#2E74B5] hover:underline">
          insurance checks
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the seller does not make repairs before closing, the seller generally cannot collect
        the depreciation holdback &mdash; most policies require the policyholder to actually
        incur the repair expense. If the claim is assigned to the buyer, the buyer can make the
        repairs and collect the holdback, assuming the carrier honors the assignment. If there
        is no assignment, the holdback is often lost entirely &mdash; the seller will not make
        the repairs, and the buyer has no standing under the policy to claim it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Recoverable Depreciation Opportunity for Buyers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the buyer, the recoverable depreciation holdback is one of the most significant
        financial opportunities in an assigned claim. The original policyholder who sells without
        repairing forfeits the depreciation holdback. But the buyer who completes the repairs
        after purchasing the property can collect that depreciation through the assigned claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a claim with a $60,000 depreciation holdback. If the buyer completes the
        repairs and submits the invoices to the carrier through the assigned claim, the buyer
        collects $60,000 that the seller would have forfeited. This $60,000 effectively reduces
        the buyer&rsquo;s net repair cost and can make the economics of purchasing a damaged
        property substantially more attractive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key question is whether the carrier will honor the recoverable depreciation claim
        submitted by an assignee. Carriers may resist, arguing that the depreciation holdback
        provisions are personal to the original policyholder. The strength of this argument
        varies by jurisdiction, but in California &mdash; where post-loss assignment rights are
        strongly protected &mdash; the assignee generally steps into the shoes of the original
        policyholder, including the right to collect recoverable depreciation upon completion of
        repairs.
      </p>

      <CalloutBox variant="tip" title="Buyers: The Holdback Can Change the Deal Economics">
        <p>
          When evaluating a damaged property with an assigned claim, do not overlook the
          depreciation holdback. A large holdback that the seller would have forfeited can
          significantly reduce your net cost of repairs. Factor this into your purchase price
          analysis &mdash; it is real money that becomes available when you complete the work.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Advice for Sellers
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Complete repairs before selling if possible.</strong> This eliminates the claim
          as a complication in the sale and allows you to collect the full replacement cost
          including depreciation holdback.
        </li>
        <li>
          <strong>If you cannot repair first, decide whether to keep or assign the claim.</strong>{' '}
          Keeping the claim means you retain the right to proceeds but lose the ability to collect
          the depreciation holdback (since you will not be repairing). Assigning the claim means
          you give up proceeds but can adjust the sale price accordingly.
        </li>
        <li>
          <strong>Address the mortgage company early.</strong> If insurance funds are in the
          lender&apos;s loss draft account, coordinate with the lender and escrow officer to
          ensure those funds are properly accounted for at closing &mdash; not absorbed into
          the mortgage payoff.
        </li>
        <li>
          <strong>Disclose everything.</strong> The damage, the claim, the status, the payments
          received, and the repairs completed (or not completed). Full disclosure protects you
          from post-closing liability.
        </li>
        <li>
          <strong>Get the claim arrangement in writing.</strong> Whatever you agree to regarding
          the insurance claim, put it in the purchase agreement and the escrow instructions. Do
          not rely on verbal understandings.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Advice for Buyers
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get copies of everything before closing.</strong> If you are taking an assignment
          of the claim, review the policy, the carrier&apos;s estimate, all correspondence, and
          any reports. Know what you are stepping into.
        </li>
        <li>
          <strong>Get your own estimates.</strong> Do not rely on the carrier&apos;s estimate of
          damage. Hire a contractor or a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            Public Adjuster
          </Link>{' '}
          to evaluate the damage independently so you understand the true cost of repairs before
          you agree to a purchase price.
        </li>
        <li>
          <strong>Insist on a formal written assignment.</strong> A vague clause in the purchase
          agreement is not enough. The assignment should be a standalone document that identifies
          the specific claim and transfers all rights under the policy for that loss.
        </li>
        <li>
          <strong>Notify the carrier immediately after closing.</strong> Send written notice of
          the assignment to the carrier with your contact information, a copy of the assignment,
          and a request for all future communications to be directed to you.
        </li>
        <li>
          <strong>Understand the risks.</strong> An assigned claim is not guaranteed money. The
          carrier may dispute the scope, the amount, or the assignment itself. You may end up
          in the same fight the seller was trying to avoid. Factor this uncertainty into the
          price you pay for the property.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Assignment Is Not the Right Answer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assignment of an insurance claim is not always the best strategy for a policyholder who
        wants to sell. There are situations where other approaches make more sense.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Small claims with minimal disputed amounts.</strong> If the claim is small and
          the disputed amount is minimal, the transaction costs of drafting an assignment,
          notifying the carrier, and dealing with the carrier&rsquo;s objections may exceed the
          value of the assignment itself. The policyholder may be better off settling the claim
          &mdash; even at a discount &mdash; before closing the sale.
        </li>
        <li>
          <strong>Active litigation.</strong> If the policyholder&rsquo;s relationship with the
          carrier has deteriorated to the point of active litigation, assigning the claim means
          assigning a lawsuit. Buyers who are purchasing a property to live in may not want to
          inherit active litigation with an insurance company. Investors and contractors who
          purchase damaged properties as a business may be comfortable with this; a family
          looking for a home generally is not.
        </li>
        <li>
          <strong>Complex coverage disputes.</strong> If the claim involves concurrent causation
          disputes, policy interpretation questions, or coverage defenses that the carrier has
          raised, the value of the assigned claim depends entirely on how those legal questions
          are resolved. The buyer is not just buying a claim &mdash; they are buying a legal
          dispute with an uncertain outcome.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these situations, the seller should consult with both an insurance professional
        and an attorney before deciding whether to assign the claim, settle it, or pursue it to
        resolution before selling.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How a Public Adjuster Can Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The intersection of real estate and insurance claims is where things get messy. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          Public Adjuster
        </Link>{' '}
        works for the policyholder &mdash; not the insurance company, not the buyer, not the
        real estate agent &mdash; and can help navigate both sides of this situation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For sellers, a Public Adjuster can push the claim toward settlement before listing,
        maximize the payout, and advise on whether to assign the claim or keep it. For buyers
        taking an assignment, a Public Adjuster can evaluate the claim file, assess whether the
        carrier&apos;s estimate is fair, and take over management of the claim after closing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps most importantly, a Public Adjuster can identify problems that real estate agents
        and escrow officers miss. Real estate professionals are experts in real estate &mdash;
        not insurance claims. They may not understand the implications of a loss draft hold, the
        mechanics of a depreciation holdback, or the significance of an anti-assignment clause in
        a policy. A Public Adjuster fills that gap.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Selling or Buying a Property With an Open Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can review the claim, advise on assignments, and make sure the
          insurance side of your real estate transaction does not cost you money.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <hr className="my-8 border-gray-200" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal, insurance,
          or real estate advice. Every transaction involves unique facts, policy language, and
          circumstances. The interaction between insurance claims and real estate sales can be
          complex and may require the involvement of a licensed attorney, a licensed Public
          Adjuster, and a qualified real estate professional. Consult with appropriate licensed
          professionals regarding your specific situation.
        </p>
      </CalloutBox>

      <p className="text-sm text-gray-500 leading-relaxed mt-4">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
