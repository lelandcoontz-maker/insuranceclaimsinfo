import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Tortious Interference with Contractor Relationships in Insurance Claims",
  description:
    "When an insurance carrier deliberately disrupts the policyholder&apos;s relationship with their chosen contractor, it may constitute tortious interference under California law &mdash; opening the door to tort damages, punitive damages, and bad faith liability.",
  summary:
    'When an insurer deliberately disrupts your relationship with your chosen contractor, that can be tortious interference under California law, exposing the carrier to tort and even punitive damages on top of bad faith. Document the interference.',
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
        You have hired a contractor to repair your home after a covered loss. You have a signed
        contract. The scope is agreed upon. The price is agreed upon. Then your insurance company
        contacts your contractor directly &mdash; without your permission &mdash; and tells them
        they will not be paid that amount. They suggest the contractor reduce the scope, lower the
        price, or walk away from the job entirely. A few days later, your contractor calls you with
        an uncomfortable conversation: they are not sure they can do the work anymore.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What just happened is not a routine claim dispute. It is not a legitimate negotiation over
        the cost of repairs. It is something the law treats very differently. When an insurance
        company deliberately interferes with the contractual relationship between a policyholder and
        their chosen contractor, it may constitute tortious interference &mdash; a cause of action
        that opens the door to damages far beyond the original claim amount.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines what tortious interference looks like in the context of insurance
        claims, how California law defines and addresses it, how carriers cross the line from
        legitimate claim handling into actionable misconduct, and what policyholders and their
        attorneys can do to protect themselves and pursue accountability.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Tortious Interference Is
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tortious interference is a civil wrong &mdash; a tort &mdash; that occurs when a third party
        intentionally disrupts a contractual or business relationship between two other parties. The
        tort exists because the law recognizes that contracts and prospective business relationships
        have value, and that outsiders who deliberately sabotage those relationships should be held
        accountable for the resulting harm.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California law recognizes two closely related forms of this tort. The first is tortious
        interference with an existing contractual relationship &mdash; where a third party disrupts a
        contract that is already in place. The second is tortious interference with prospective
        economic advantage &mdash; where a third party disrupts a business relationship that has not
        yet been formalized into a contract but is reasonably expected to develop into one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In the insurance claims context, both forms arise with troubling regularity. When a
        policyholder has signed a contract with a contractor and the carrier takes action to
        undermine that relationship, that is interference with an existing contract. When a
        policyholder is in the process of selecting a contractor and the carrier steers them away
        from their preferred choice &mdash; or discourages that contractor from working on
        insurance claims altogether &mdash; that is interference with prospective economic
        advantage.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The critical distinction between tortious interference and a simple breach of contract is
        who commits the wrongful act. In a breach of contract, the party who fails to perform is a
        party to the contract. In tortious interference, the wrongful actor is a third party &mdash;
        someone who is not a party to the contract but who deliberately causes one of the
        contracting parties to breach or otherwise disrupts the relationship. In the scenario that
        concerns us here, the insurance carrier is that third party. The carrier is not a party to
        the contract between the policyholder and their contractor. It is an outsider whose actions
        can destroy that relationship.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Elements of Tortious Interference Under California Law
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have established clear elements that a plaintiff must prove to prevail on
        a claim for tortious interference with contractual relations. The framework is codified in
        California Civil Jury Instruction (CACI) No. 2201 and was articulated by the California
        Supreme Court in <em>Pacific Gas &amp; Electric Co. v. Bear Stearns &amp; Co.</em> (1990)
        50 Cal.3d 1118.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Element One: A Valid Contract or Business Relationship
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The plaintiff must demonstrate the existence of a valid contract between the policyholder and
        the contractor. In the insurance claims context, this is typically a signed repair contract,
        a work authorization, or a formal agreement for construction services. The stronger and more
        specific the contract, the more clearly this element is satisfied. A signed contract with
        defined scope, price, and timeline is ideal. But even a less formal arrangement &mdash; an
        oral agreement, a handshake deal with a contractor the homeowner has used before &mdash;
        can satisfy this element if the existence and terms of the agreement can be established.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For the related tort of interference with prospective economic advantage, the plaintiff need
        not prove a completed contract but must show an economic relationship with a probability of
        future economic benefit. In <em>Korea Supply Co. v. Lockheed Martin Corp.</em> (2003) 29
        Cal.4th 1134, the California Supreme Court clarified that this relationship must involve
        more than a mere hope of future transactions &mdash; there must be a reasonable expectation,
        based on existing facts, that the relationship would have resulted in an economic benefit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Element Two: Knowledge of the Relationship
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The defendant must have known about the contractual or business relationship. In insurance
        claims, this element is rarely in dispute. The carrier knows the policyholder has selected
        a contractor because the contractor&apos;s{' '}
        <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
          estimate, bid, or invoice
        </Link>{' '}
        has been submitted as part of the claim. The carrier knows a relationship exists &mdash;
        that is the very reason the carrier is engaging with the contractor&apos;s pricing in the
        first place.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Element Three: Intentional Acts of Interference
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The defendant must have committed intentional acts designed to disrupt the relationship. This
        is the element where the distinction between legitimate claim handling and tortious conduct
        becomes critical, and where we will spend considerable time below. The acts must be
        intentional &mdash; not merely negligent or incidental. The defendant must have acted with
        the purpose of disrupting the relationship or with knowledge that its conduct was
        substantially certain to do so.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For interference with an at-will contract or prospective economic advantage, California
        imposes an additional requirement: the defendant&apos;s conduct must be independently
        wrongful. In <em>Ixchel Pharma, LLC v. Biogen, Inc.</em> (2020) 9 Cal.5th 1130, the
        California Supreme Court confirmed that this means conduct &quot;proscribed by some
        constitutional, statutory, regulatory, common law, or other determinable legal
        standard.&quot; In the insurance context, the independently wrongful conduct is often
        readily established through violations of the Fair Claims Settlement Practices Regulations
        (10 CCR &sect; 2695.9(b)), unfair claims settlement practices under Insurance Code
        &sect; 790.03(h), or fraudulent misrepresentations to the contractor or policyholder.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For interference with a fixed-term contract &mdash; which most homeowner-contractor
        repair agreements are &mdash; the independently wrongful act requirement may not apply. In
        <em> Quelimane Co. v. Stewart Title Guaranty Co.</em> (1998) 19 Cal.4th 26, the California
        Supreme Court did not impose this requirement for the existing contract tort. This
        distinction works in the policyholder&apos;s favor, because most repair contracts have a
        defined scope and project timeline.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Element Four: Actual Disruption
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The interference must have actually disrupted the relationship. The contractor must have
        walked away, reduced scope, lowered price, or otherwise changed the terms of the
        relationship in a way that harmed the policyholder. California law does not
        require a complete breach of the contract. Making the plaintiff&apos;s performance
        &quot;more costly or more burdensome&quot; can satisfy this element. If the carrier&apos;s
        conduct caused delays, increased costs, or forced the policyholder to expend time and
        resources defending their contractor choice, the disruption element is satisfied.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the carrier&apos;s interference does not ultimately destroy the contractor
        relationship, the conduct may still be relevant to a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith claim</Link>{' '}
        if it demonstrates that the carrier was not acting in good faith toward its insured.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Element Five: Resulting Damages
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The plaintiff must have suffered damages as a result of the interference. In the insurance
        claims context, damages can include the additional cost of finding a replacement contractor,
        delays in repairs, the cost of temporary housing during extended repair timelines, diminished
        quality of work from a less qualified replacement contractor, and emotional distress. Because
        tortious interference is a tort rather than a contract claim, the range of recoverable
        damages is broader than what would be available in a simple breach of contract action.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Commit Tortious Interference
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the legal elements is necessary, but policyholders need to recognize what
        tortious interference actually looks like when it happens. Carriers rarely announce that they
        are interfering with a contractual relationship. The conduct is usually framed as routine
        claim handling, standard procedure, or helpful guidance. But the effect &mdash; and,
        critically, the intent &mdash; is to separate the policyholder from their chosen contractor.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contacting the Contractor Directly to Negotiate Down Price or Scope
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most common form of tortious interference in insurance claims occurs when a
        carrier contacts the policyholder&apos;s contractor directly &mdash; bypassing the
        policyholder entirely &mdash; and attempts to negotiate the price down or reduce the scope
        of work. The adjuster calls the contractor and explains that the carrier&apos;s estimate
        came in lower, that the contractor&apos;s pricing is &quot;above market,&quot; or that
        certain line items are &quot;not covered.&quot; The implication is clear: reduce your price
        or you will not be paid.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This conduct is worth examining carefully. The policyholder has hired a contractor. The
        policyholder has agreed to a price. The carrier&apos;s obligation is to the policyholder
        &mdash; to indemnify the policyholder for covered losses. The carrier&apos;s disagreement
        with the contractor&apos;s pricing is a dispute between the carrier and the policyholder
        about the amount of the covered loss. It is not an invitation for the carrier to go behind
        the policyholder&apos;s back and pressure the contractor into doing the work for less.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier contacts a contractor directly to negotiate pricing, several things happen.
        The contractor, who may be a small business that depends on insurance-funded work, feels
        pressure to accommodate the carrier. The contractor may reduce the scope or quality of
        repairs to hit the carrier&apos;s price point. The contractor may begin to see the
        policyholder as a problem &mdash; a customer whose job will not be profitable because the
        carrier is making payment difficult. And in some cases, the contractor walks away entirely,
        leaving the policyholder to start the process over with a new contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s obligation runs to the policyholder. The carrier has no business
        negotiating with the policyholder&apos;s contractor, just as a liability insurer has no
        business contacting an opposing party directly when that party is represented by counsel.
        The appropriate channel for a pricing dispute is between the carrier and the policyholder
        &mdash; through negotiation, appraisal, or litigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Telling the Contractor &quot;We Won&apos;t Pay That Much&quot;
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A variation of direct negotiation is the flat statement to the contractor: &quot;We
        won&apos;t pay that much.&quot; This statement, directed at the contractor rather than the
        policyholder, has a specific and predictable effect. The contractor hears it as a warning
        that the job will not be fully funded. The contractor then faces a choice: do the work
        knowing the carrier has already signaled it will not pay the full amount, or walk away.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s statement to the contractor is misleading in an important respect. The
        carrier&apos;s obligation to pay is owed to the policyholder, not to the contractor.
        Whether the carrier agrees with the contractor&apos;s pricing is a question that should be
        resolved between the carrier and the policyholder. By telling the contractor directly that
        the carrier will not pay, the carrier is effectively inserting itself into the
        policyholder-contractor relationship and poisoning it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who hears &quot;we won&apos;t pay that much&quot; from a major insurance
        carrier is in a difficult position. The contractor knows that if the carrier does not pay
        the full amount, the policyholder may not be able to cover the difference out of pocket.
        The contractor knows that pursuing a mechanic&apos;s lien against the homeowner&apos;s
        property is expensive, time-consuming, and damaging to the contractor&apos;s reputation.
        The rational response for many contractors is to either reduce the price or decline the job.
        Either outcome harms the policyholder.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conditioning Payment on Use of a Preferred Vendor
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most consequential forms of interference occurs when a carrier conditions payment
        &mdash; or the full amount of payment &mdash; on the policyholder&apos;s use of the
        carrier&apos;s{' '}
        <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
          preferred vendor
        </Link>. The message, sometimes explicit and sometimes implied, is that the carrier will pay
        the full cost of repairs if the policyholder uses the carrier&apos;s contractor, but will
        dispute the amount if the policyholder uses their own.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is vendor steering, and it is a form of tortious interference because its purpose and
        effect is to drive the policyholder away from their chosen contractor and into the arms of a
        contractor who works for the carrier&apos;s economic benefit. As we discuss in detail in our
        article on{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          the policyholder&apos;s right to choose their own contractor
        </Link>, California law &mdash; specifically 10 CCR &sect; 2695.9(b) &mdash; provides that
        no insurer shall require the insured to have property repaired by a specific individual or
        entity. When a carrier uses its financial leverage to override that choice, it is not
        engaging in legitimate claim administration. It is interfering with the policyholder&apos;s
        contractual freedom.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The interference becomes particularly clear when the carrier&apos;s preferred vendor
        provides a lower estimate &mdash; and the carrier then uses that lower estimate as the
        basis for payment, even though the policyholder has a signed contract with a different
        contractor at a higher price. The carrier is effectively substituting its own
        contractor&apos;s judgment for the policyholder&apos;s contractor&apos;s judgment, and
        using the financial disparity to coerce the policyholder into abandoning their chosen
        contractor. There is no provision in any standard homeowner&apos;s policy that requires the
        insured to use a carrier-approved contractor. The carrier&apos;s obligation is to indemnify
        the insured for the cost of covered repairs, not to dictate who performs them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Threatening Contractors with Blacklisting
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some interference is less subtle. Contractors who work on insurance-funded projects
        sometimes report receiving communications &mdash; direct or indirect &mdash; suggesting
        that their relationship with the carrier will suffer if they do not cooperate on pricing.
        The message is that contractors who consistently submit pricing that exceeds the
        carrier&apos;s expectations will find that adjusters are less willing to work with them in
        the future, or that the carrier will flag the contractor as &quot;difficult&quot; or
        &quot;overpriced&quot; in its internal systems.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a contractor who depends on insurance-funded work for a significant portion of their
        revenue, this is a powerful form of economic pressure. The contractor must weigh the
        immediate job against their long-term relationship with the carrier. Many contractors,
        understandably, choose the long-term relationship &mdash; and the policyholder suffers
        as a result. The contractor reduces their pricing on future projects, cuts corners to hit
        the carrier&apos;s price point, or simply declines to work on claims involving that carrier.
        Every policyholder who would have hired that contractor loses access to quality work at
        honest pricing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This form of interference is particularly insidious because it operates invisibly from the
        policyholder&apos;s perspective. The policyholder may never know that their contractor
        reduced the scope or lowered the price because of pressure from the carrier. The
        policyholder may believe the contractor voluntarily revised the proposal. In reality, the
        contractor was responding to economic coercion from a party that has no business
        participating in the policyholder-contractor relationship. This is tortious interference
        on a systemic level &mdash; not directed at a single contract, but at every future
        relationship between the contractor and the carrier&apos;s policyholders.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Undermining Contractor Credibility
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Another form of interference occurs when a carrier makes statements to the policyholder
        designed to undermine the credibility or reputation of the policyholder&apos;s chosen
        contractor. The adjuster might suggest that the contractor&apos;s pricing is &quot;way out
        of line,&quot; that no other contractor in the area charges those rates, that the
        contractor is &quot;known for inflating estimates,&quot; or that the policyholder would be
        &quot;better served&quot; by a different contractor. These statements, even if not
        demonstrably false, are calculated to erode the policyholder&apos;s confidence in their
        contractor and push them toward the carrier&apos;s preferred vendor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When an adjuster makes these kinds of statements, policyholders should ask themselves a
        question: what is the adjuster&apos;s basis for this opinion? Has the adjuster reviewed
        comparable{' '}
        <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
          sub-bids from other licensed contractors
        </Link>{' '}
        in the area? Has the adjuster accounted for the specific scope of work, the complexity of
        the project, the contractor&apos;s qualifications and licensing, and the current market
        conditions? Or is the adjuster simply comparing the contractor&apos;s bid to the
        carrier&apos;s own Xactimate estimate &mdash; a tool that does not represent actual market
        pricing for a specific project?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Delaying Payment as a Pressure Tactic
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Time is money in the construction industry. Contractors have payroll to meet, materials to
        purchase, and other projects competing for their crews&apos; time. When a carrier delays
        payment on a claim &mdash; not because of a legitimate coverage question, but as a tactic
        to pressure the policyholder into accepting a lower amount or switching contractors &mdash;
        that delay can itself constitute interference with the contractor relationship.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who is told that payment is &quot;pending review&quot; or &quot;under further
        investigation&quot; for weeks or months may eventually conclude that the job is not worth
        the risk. The contractor may present the policyholder with a choice: pay a deposit out of
        pocket to get started, or wait indefinitely for the carrier to issue payment. Many
        contractors, particularly smaller operations, simply cannot afford to wait. They move on to
        other projects, and the policyholder loses the contractor they chose.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Line Between Legitimate Negotiation and Tortious Interference
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is important to be precise about where the line is. Insurance carriers have legitimate
        rights in the claims process. A carrier has the right to disagree with the amount of a
        claim. A carrier has the right to obtain its own estimate. A carrier has the right to
        request documentation supporting the policyholder&apos;s claimed repair costs. A carrier
        has the right to invoke the appraisal clause in the policy if the parties cannot agree on
        the amount of loss. These are all legitimate claim handling activities.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The dividing line is intent.</strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier disputes the amount of a claim and communicates that dispute to the
        policyholder, that is negotiation. When a carrier takes affirmative steps to disrupt the
        policyholder&apos;s relationship with their contractor &mdash; by going around the
        policyholder, pressuring the contractor directly, conditioning payment on the use of a
        different contractor, or making statements designed to sabotage the policyholder&apos;s
        confidence in their contractor &mdash; that is interference.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court addressed this distinction in <em>Applied Equipment Corp. v.
        Litton Saudi Arabia Ltd.</em> (1994) 7 Cal.4th 503, where the court observed that a
        party&apos;s exercise of its own legal rights does not constitute tortious interference,
        even if it incidentally affects another party&apos;s contracts. But the court also made
        clear that when conduct goes beyond the exercise of legal rights and is motivated by a
        desire to disrupt the plaintiff&apos;s economic relationships, tortious interference
        liability attaches.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practical terms, the line is often clearest in the carrier&apos;s choice of audience. If
        the carrier communicates its dispute to the policyholder &mdash; the party to whom it owes
        a contractual obligation &mdash; that is consistent with legitimate claim handling. If the
        carrier communicates its dispute to the contractor &mdash; a party to whom it owes no
        obligation and with whom it has no contractual relationship &mdash; that is a red flag for
        tortious interference. A carrier can dispute the amount; it cannot use that dispute as a
        weapon to destroy the policyholder&apos;s contractor relationship.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Estimate, Bid, and Invoice Distinction
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The tortious interference analysis intersects directly with the{' '}
        <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
          distinction between estimates, bids, and invoices
        </Link>{' '}
        &mdash; a distinction that carriers frequently blur to their advantage.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        An estimate is an approximation of cost. It is not binding and is subject to revision. A
        bid is a binding offer to perform specific work at a specific price. An invoice is a demand
        for payment for work already performed. These are fundamentally different documents with
        different legal significance, and the distinction matters enormously in the tortious
        interference context.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder submits a contractor&apos;s bid to the carrier, and the carrier treats
        that bid as an estimate to be negotiated, the carrier is mischaracterizing the nature of
        the document. The bid reflects a contractual offer that the policyholder has accepted (or
        intends to accept). By treating it as negotiable, the carrier is implicitly denying the
        existence of the contractual relationship between the policyholder and the contractor &mdash;
        the very relationship the law protects against interference.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This matters because of how the carrier then behaves. If the carrier believed the
        contractor&apos;s submission were truly an estimate &mdash; an approximation subject to
        revision &mdash; there would be no contractual relationship to interfere with. But the
        carrier knows, or should know, that a signed contract with a defined scope and price
        represents a binding agreement. When the carrier contacts the contractor to negotiate that
        price down, it is interfering with a contract it knows exists. The carrier cannot have it
        both ways: it cannot treat the document as a mere estimate for purposes of disputing the
        amount while simultaneously knowing that the policyholder has entered into a binding
        agreement with the contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
          relationship between sub-bids and Xactimate pricing
        </Link>{' '}
        adds another layer to this problem. When a carrier relies on its own Xactimate estimate to
        argue that the contractor&apos;s bid is &quot;unreasonable,&quot; the carrier is comparing
        two fundamentally different things: a software-generated approximation created by someone
        who may never have set foot on the property versus a binding offer from a licensed
        contractor who has inspected the damage, assessed the specific conditions, and committed to
        performing the work at a stated price. The carrier&apos;s preference for its own estimate
        does not give it the right to interfere with the policyholder&apos;s contract.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documentation Strategies: Protecting Yourself Before It Is Too Late
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tortious interference cases, like all cases involving intent, depend heavily on evidence.
        The carrier will not admit that it intended to disrupt the policyholder&apos;s contractor
        relationship. It will characterize its conduct as routine claim handling, legitimate dispute
        resolution, or helpful guidance. The policyholder&apos;s ability to prove otherwise depends
        on the quality of the documentation they have assembled.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Recording Calls
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California is a two-party consent state for recording confidential communications under
        Penal Code &sect; 632. However, there is an important practical reality that many
        policyholders overlook. When a carrier informs you at the beginning of a call that the
        conversation &quot;may be recorded for quality assurance purposes,&quot; the carrier has
        established that the conversation is being recorded. At that point, both parties are aware
        of the recording. The conversation is no longer confidential within the meaning of
        &sect; 632, and the policyholder is free to make their own recording as well.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This matters because many critical statements &mdash; &quot;we won&apos;t pay that
        much,&quot; &quot;you need to use our vendor,&quot; &quot;your contractor is
        overcharging&quot; &mdash; are made in phone conversations that the carrier will later deny
        or characterize differently. A recording eliminates the &quot;he said, she said&quot;
        problem.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Preserving Written Communications
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond recordings, policyholders should preserve all written communications &mdash; emails,
        text messages, letters, and adjuster notes &mdash; that relate to their contractor
        relationship. Any communication in which the carrier comments on the contractor&apos;s
        pricing, suggests an alternative contractor, or indicates that payment is contingent on the
        policyholder&apos;s choice of contractor is potential evidence of tortious interference.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Follow-up emails are particularly valuable. After any phone call in which the adjuster makes
        statements about the contractor, send a confirming email: &quot;Per our conversation today,
        you stated that [Carrier] will not approve my contractor&apos;s bid and recommended I use
        [Preferred Vendor] instead. Please confirm whether this is the carrier&apos;s
        position.&quot; If the adjuster does not dispute the summary, it becomes a powerful piece of
        evidence. If the adjuster does dispute it, the exchange itself documents the carrier&apos;s
        awareness of the issue.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Obtaining Contractor Statements
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If a contractor reports that the carrier has contacted them directly, pressured them on
        pricing, or made statements that caused the contractor to reconsider the job, the
        policyholder should ask the contractor to document what happened. A written statement from
        the contractor detailing the substance of the carrier&apos;s communications &mdash; who
        called, when, what was said, and how it affected the contractor&apos;s willingness to
        perform the work &mdash; is powerful evidence of interference.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors may be reluctant to provide such statements, particularly if they depend on
        insurance-funded work and fear retaliation from the carrier. This reluctance is itself
        evidence of the carrier&apos;s influence over the contractor market. But many contractors,
        when they understand that the carrier&apos;s conduct may be actionable, are willing to
        cooperate &mdash; especially if they feel they were unfairly pressured.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the contractor to put their account in writing while the details are fresh. Include the
        date and time of the communication, the name and title of the carrier&apos;s representative,
        the substance of what was said, and the effect it had on the contractor&apos;s position. If
        the contractor reduced their price or withdrew from the project as a result, document that
        as well.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Formalizing the Contract Before Submitting Documentation
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should formalize their contractor relationship in writing before submitting
        documentation to the carrier. A signed contract with clear scope, price, and timeline
        establishes the contractual relationship that the tortious interference tort protects. If
        the carrier later interferes with that relationship, the existence of the signed contract
        makes the first element of the tort straightforward to prove.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The contract should be specific enough that any subsequent reduction in scope or price can
        be traced to the carrier&apos;s interference rather than to a voluntary revision by the
        parties. If the contractor originally agreed to replace all damaged drywall in a room and
        later revised the proposal to patch only the most visible damage, and that revision came
        after the carrier contacted the contractor, the documented change supports an inference of
        interference.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Documenting Carrier Steering
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier suggests or recommends a preferred vendor, document the exchange precisely.
        If the carrier states or implies that payment will be smoother, faster, or more generous if
        the policyholder uses the carrier&apos;s preferred contractor, record that statement. If
        the carrier provides a preferred vendor&apos;s estimate alongside the policyholder&apos;s
        contractor&apos;s bid and uses the preferred vendor&apos;s lower number as the basis for
        payment, document the disparity and the carrier&apos;s stated reason for relying on the
        preferred vendor&apos;s pricing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our article on{' '}
        <Link href="/resources/carrier-contractor-admits-failure" className="text-[#2E74B5] underline">
          what happens when a carrier&apos;s own contractor admits the work was inadequate
        </Link>{' '}
        illustrates what can happen when a policyholder is pushed toward a preferred vendor whose
        work does not meet the standard the policyholder would have received from their own
        contractor. Documenting the carrier&apos;s steering creates a record that connects the
        carrier&apos;s interference to the resulting harm.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Remedies: Why Tortious Interference Matters More Than Breach of Contract
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders and their attorneys should understand why characterizing the carrier&apos;s
        conduct as tortious interference &mdash; rather than simply as breach of the insurance
        contract &mdash; can be strategically significant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tort Damages Are Broader Than Contract Damages
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a breach of contract action, the policyholder&apos;s damages are generally limited to
        the benefit of the bargain &mdash; the amount the carrier should have paid under the
        policy but did not. In a tortious interference action, the policyholder can recover all
        damages proximately caused by the interference, including consequential damages that would
        not be available in a contract action. These can include the cost of finding a replacement
        contractor, delay-related expenses, additional living expenses incurred because of extended
        repair timelines, diminished quality of work, and emotional distress.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Punitive Damages
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because tortious interference is a tort rather than a contract claim, punitive damages may
        be available under California Civil Code &sect; 3294 if the carrier&apos;s conduct was
        oppressive, fraudulent, or malicious. In the insurance context, a carrier that
        systematically interferes with policyholder-contractor relationships as a cost-containment
        strategy may be engaged in conduct that meets this standard. Punitive damages are designed
        to punish particularly egregious conduct and deter its repetition &mdash; and a pattern of
        deliberate interference with contractual relationships across multiple claims can support a
        finding that the carrier&apos;s conduct was driven by malice or conscious disregard for
        policyholders&apos; rights.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Bad Faith Overlay
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tortious interference claims in the insurance context often overlap with{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          insurance bad faith
        </Link>{' '}
        claims. A carrier that deliberately interferes with a policyholder&apos;s contractor
        relationship to reduce its indemnity obligation is, by definition, not acting in
        good faith toward its insured. The same conduct that supports a tortious interference claim
        often supports a bad faith claim as well, and the two causes of action can reinforce each
        other.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Gruenberg v. Aetna Insurance Co.</em> (1973) 9 Cal.3d 566, the California Supreme
        Court recognized that an insurer&apos;s breach of the implied covenant of good faith and
        fair dealing gives rise to tort liability. When a carrier interferes with the
        policyholder&apos;s contractor relationship as part of a broader pattern of claim
        suppression, the carrier faces potential liability on multiple fronts: breach of contract
        for the unpaid claim, tortious interference for the disrupted contractor relationship, and
        bad faith for the carrier&apos;s overall conduct. The bad faith overlay is particularly
        significant because it can support additional categories of damages, including Brandt fees
        &mdash; attorney fees incurred to obtain policy benefits that should have been paid without
        litigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Unfair Business Practices
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier conduct that constitutes tortious interference may also violate California&apos;s
        Unfair Competition Law (Business &amp; Professions Code &sect;&sect; 17200 et seq.) and the
        Unfair Insurance Practices Act (Insurance Code &sect;&sect; 790 et seq.). While the UIPA
        does not provide a direct private right of action under <em>Moradi-Shalal v.
        Fireman&apos;s Fund Insurance Companies</em> (1988) 46 Cal.3d 287, violations of the UIPA
        can be used as evidence of unfair practices under the UCL, and the Department of Insurance
        can take regulatory action based on UIPA violations. These statutes provide additional
        avenues for relief, including injunctive remedies that can prevent the carrier from
        continuing the offending conduct.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Scenarios Policyholders Encounter
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding tortious interference in the abstract is useful. Understanding how it plays
        out in actual claims is essential. The following scenarios are composites drawn from common
        patterns in California insurance claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Disappearing Contractor
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner suffers fire damage and hires a licensed general contractor to perform repairs.
        The contractor inspects the property, develops a detailed scope of work, and provides a bid
        of $185,000. The homeowner signs the contract. The contractor submits the bid to the
        carrier as supporting documentation for the claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two weeks later, the carrier&apos;s field adjuster contacts the contractor directly. The
        adjuster tells the contractor that the carrier&apos;s estimate is $127,000 and that the
        contractor&apos;s pricing is &quot;significantly above what we typically see in this
        area.&quot; The adjuster asks the contractor to &quot;sharpen the pencil&quot; and
        resubmit. The contractor, who has three other insurance-funded projects with the same
        carrier, feels pressure to accommodate. The contractor calls the homeowner and says they
        need to &quot;revise the scope&quot; &mdash; which means cutting corners on the repair to
        hit a lower price point. The homeowner, unaware of the carrier&apos;s direct contact with
        the contractor, believes the contractor simply reassessed the job.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is tortious interference. The carrier knew about the existing contract. The carrier
        contacted the contractor directly with the intent to change the terms of that contract. The
        carrier&apos;s conduct caused the contractor to modify the agreement to the
        homeowner&apos;s detriment. And the homeowner suffered damages &mdash; inferior repairs
        &mdash; as a result.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Preferred Vendor Squeeze
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder with water damage selects their own restoration company and general
        contractor. The carrier acknowledges the claim but tells the policyholder that if they use
        the carrier&apos;s preferred vendor, the carrier will &quot;guarantee&quot; the repairs and
        streamline the payment process. The carrier adds that if the policyholder uses their own
        contractor, the carrier will need to conduct &quot;additional review&quot; of the
        contractor&apos;s pricing, which could delay payment &quot;significantly.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder sticks with their contractor. True to its word, the carrier delays payment
        for three months while conducting its &quot;review.&quot; During that time, the
        policyholder&apos;s contractor, unable to wait indefinitely for payment, gives the
        policyholder an ultimatum: pay a substantial deposit or the contractor will need to move on
        to other projects. The policyholder cannot afford the deposit. The contractor withdraws.
        The policyholder is forced to use the carrier&apos;s preferred vendor, who performs the
        repairs at a lower cost &mdash; and a lower quality.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This scenario involves both tortious interference and vendor steering. The carrier&apos;s
        delay was not motivated by a legitimate need for additional review. It was a tactic designed
        to make the policyholder&apos;s contractor relationship untenable and force the policyholder
        toward the carrier&apos;s preferred vendor.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Blacklist Threat
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A general contractor who specializes in insurance restoration work receives a call from a
        carrier&apos;s claims manager. The manager explains that the contractor&apos;s pricing on
        several recent claims has been &quot;consistently above our guidelines.&quot; The manager
        suggests that if the contractor continues to submit pricing at these levels, the carrier
        may need to &quot;flag&quot; the contractor in its system, which could result in adjusters
        being &quot;less inclined&quot; to approve claims where this contractor is involved. The
        contractor, who derives 40 percent of their revenue from claims involving this carrier,
        reduces their pricing on subsequent projects.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier is not interfering with a single policyholder-contractor relationship. It is
        interfering with every future relationship between this contractor and any of the
        carrier&apos;s policyholders. The contractor, coerced into reducing prices, will perform
        lower-quality work or cut corners &mdash; and every policyholder who hires this contractor
        will bear the consequences without ever knowing why.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Scope Manipulation
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder&apos;s contractor submits a detailed scope of work for a roof replacement
        following hail damage. The carrier&apos;s adjuster contacts the contractor and begins
        line-item negotiations. The adjuster says, &quot;We can agree to the tear-off and
        replacement, but we are not going to pay for ice and water shield on the entire roof &mdash;
        code only requires it at the eaves. And we think the drip edge can be reused rather than
        replaced.&quot; The contractor explains that their scope reflects proper installation
        methods and manufacturer specifications, not just minimum code. The adjuster responds,
        &quot;That&apos;s your standard, not ours. We pay to code.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster is negotiating the scope of work directly with the contractor, bypassing the
        policyholder entirely. The contractor, caught between the policyholder&apos;s expectations
        and the carrier&apos;s payment limitations, faces a choice: perform the work to the
        policyholder&apos;s contracted scope and risk not being paid in full, or reduce the scope
        to match the carrier&apos;s position and risk breaching the contract with the policyholder.
        Either way, the carrier&apos;s direct engagement with the contractor has disrupted the
        policyholder-contractor relationship.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Policyholders Should Do
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe your insurance carrier has interfered with your contractor relationship,
        several steps can strengthen your position.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Formalize your contractor relationship early.</strong> Sign a written contract
          before submitting the contractor&apos;s bid to the carrier. The contract should specify
          scope, price, timeline, and the parties&apos; expectations. A signed contract makes the
          first element of tortious interference straightforward to prove.
        </li>
        <li>
          <strong>Instruct your contractor not to negotiate with the carrier.</strong> Tell your
          contractor in writing that they should not discuss pricing, scope, or scheduling with the
          carrier without your express permission. If the carrier contacts the contractor directly,
          the contractor should refer the carrier back to you (or your public adjuster or attorney).
          This instruction creates a clear record that any direct contact between the carrier and
          the contractor was unauthorized.
        </li>
        <li>
          <strong>Document everything.</strong> Keep copies of all communications with the carrier,
          including written correspondence and notes from phone calls. If the carrier makes
          statements about your contractor&apos;s pricing, qualifications, or reputation, document
          those statements precisely. If the carrier suggests a preferred vendor, document the
          suggestion and any implied or explicit conditions attached to it.
        </li>
        <li>
          <strong>Ask your contractor to document carrier contact.</strong> If your contractor tells
          you that the carrier reached out directly, ask for a written statement describing the
          communication: who called, when, what was said, and what effect it had on the
          contractor&apos;s willingness or ability to perform the work.
        </li>
        <li>
          <strong>Understand your recording rights.</strong> If the carrier tells you a call is
          being recorded, you have the right to record it as well. Many critical statements are
          made in phone conversations that the carrier will later deny or characterize differently.
        </li>
        <li>
          <strong>Send confirming emails after phone calls.</strong> After any conversation in which
          the adjuster makes statements about your contractor, send a follow-up email summarizing
          what was said. If the adjuster does not dispute the summary, it becomes evidence. If the
          adjuster does dispute it, the exchange itself creates a record.
        </li>
        <li>
          <strong>Demand written explanations.</strong> When the carrier objects to your contractor,
          ask for the specific policy provision that requires you to use a carrier-selected
          contractor. Ask whether 10 CCR &sect; 2695.9(b) applies. Force the carrier to put its
          position in writing &mdash; adjusters and their supervisors know that putting an
          indefensible position on the record creates discoverable evidence.
        </li>
        <li>
          <strong>Engage a public adjuster or attorney early.</strong> If you see signs of
          interference &mdash; direct contact with your contractor, suggestions to use a preferred
          vendor, unexplained delays in payment &mdash; consider engaging a licensed public
          adjuster or an attorney who handles insurance disputes. These professionals can identify
          tortious interference when it is happening and take steps to preserve evidence and
          protect your rights.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note for Attorneys: Pleading and Litigation Considerations
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Attorneys representing policyholders in disputes involving carrier interference with
        contractor relationships should consider several pleading and strategic factors.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Independently Wrongful Act Requirement
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For interference with prospective economic advantage (and potentially at-will contracts),
        the independently wrongful act requirement under <em>Della Penna v. Toyota Motor Sales,
        U.S.A., Inc.</em> (1995) 11 Cal.4th 376 must be addressed directly. In the insurance
        context, the independently wrongful conduct may include violations of the duty of good
        faith and fair dealing, violations of the Unfair Insurance Practices Act (Insurance Code
        &sect; 790.03(h)), violations of the Fair Claims Settlement Practices Regulations (10 CCR
        &sect; 2695.9(b)), fraudulent misrepresentations to the contractor or the policyholder, or
        unfair business practices under Business &amp; Professions Code &sect; 17200.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For interference with an existing fixed-term contract, the independently wrongful act
        requirement may not apply. The Supreme Court did not impose this requirement in
        <em> Pacific Gas &amp; Electric</em> for the existing contract tort, and most
        homeowner-contractor repair agreements are fixed-scope contracts. Nevertheless, attorneys
        should be prepared to demonstrate independently wrongful conduct regardless of which form
        of the tort they are pleading, as the law in this area continues to develop.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Stranger Doctrine
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A foundational principle of tortious interference law is that only a &quot;stranger&quot;
        to the contract can be liable. A party to the contract cannot tortiously interfere with
        its own contract. In the insurance context, this principle works in the policyholder&apos;s
        favor: the carrier is a stranger to the homeowner-contractor agreement. The carrier is not
        a party to the construction contract, so it cannot claim immunity from interference
        liability. Likewise, the carrier&apos;s preferred vendor is a stranger to that agreement.
        Neither the carrier nor its vendor has any contractual right or privilege to disrupt the
        homeowner&apos;s chosen contractor relationship.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Discovery Targets
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tortious interference claims open discovery avenues that may not be available in a
        straightforward breach-of-contract or bad faith action. Discovery should target:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The carrier&apos;s internal communications regarding the contractor &mdash; emails
          between adjusters, claim notes, and any memoranda discussing the policyholder&apos;s
          contractor can reveal the carrier&apos;s intent
        </li>
        <li>
          The carrier&apos;s preferred vendor program &mdash; contracts, volume commitments,
          pricing agreements, referral bonuses, and performance metrics that demonstrate the
          carrier&apos;s financial incentive to steer work to preferred vendors
        </li>
        <li>
          Training materials and claim handling guidelines regarding contractor selection and
          preferred vendor referrals
        </li>
        <li>
          Data on how many claims involved preferred vendor referrals versus homeowner-selected
          contractors, and any differential in claim payments between the two groups
        </li>
        <li>
          Other instances where the carrier interfered with existing contractor relationships
          &mdash; evidence of a pattern or practice, which can support punitive damages
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Companion Causes of Action
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A tortious interference claim is rarely brought in isolation. In most cases, it accompanies
        breach of the implied covenant of good faith and fair dealing, breach of contract for
        failure to pay the claim, violation of the UCL (Business &amp; Professions Code &sect;
        17200), and potentially fraud or negligent misrepresentation if the carrier made false
        statements about the homeowner&apos;s contractor. The tortious interference claim adds
        an additional dimension to the litigation, particularly because it can support punitive
        damages independently and can bring the preferred vendor into the lawsuit as a co-defendant
        alongside the carrier.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Statute of Limitations
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A tortious interference claim is subject to a two-year statute of limitations under Code of
        Civil Procedure &sect; 339(1). The clock starts running when the plaintiff discovers, or
        should have discovered, the interference. Policyholders should not assume that ongoing
        claim negotiations toll the limitations period. Attorneys should be consulted promptly if
        interference has occurred.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Why This Matters Beyond a Single Claim
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tortious interference with contractor relationships is not an isolated issue. It is one
        component of a broader dynamic in which carriers use their financial leverage to control
        every aspect of the claim, including who performs the repairs, at what price, and to what
        standard. When carriers interfere with policyholder-contractor relationships, they are not
        just affecting individual claims. They are reshaping the contractor market itself.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors who depend on insurance-funded work learn quickly what carriers will and will
        not pay. Over time, contractors adjust their practices accordingly. They reduce the quality
        of materials. They skip steps that are technically required but that carriers consistently
        refuse to fund. They stop submitting bids that reflect the true cost of proper repairs
        because they know the carrier will reject them. The result is a market in which the
        carrier&apos;s pricing expectations, rather than actual construction standards, determine
        the quality of repairs that policyholders receive.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the quiet consequence of tortious interference. It does not just harm the
        individual policyholder whose contractor was pressured or driven away. It harms every
        policyholder in the market by suppressing repair quality and reducing the availability of
        contractors willing to do the work properly. It creates an environment in which the
        policyholder&apos;s right to{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          choose their own contractor
        </Link>{' '}
        &mdash; a right that California law protects &mdash; becomes a right without practical
        substance, because the carriers have already shaped which contractors are available and
        what those contractors are willing to do.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding tortious interference empowers policyholders and their advocates to push back.
        When a carrier contacts your contractor without your permission, that is not routine. When a
        carrier conditions payment on your choice of contractor, that is not standard procedure.
        When a carrier pressures your contractor to reduce scope or lower price, that is not
        negotiation. It may be tortious interference &mdash; and the law provides remedies for those
        who can prove it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a policyholder dealing with a carrier that is interfering with your contractor
        relationship, or an attorney evaluating a claim that involves these dynamics, the first step
        is documentation. The second step is understanding your rights. And the third step is
        holding the carrier accountable for conduct that the law does not permit. The carrier&apos;s
        playbook depends on policyholders not knowing their rights. Knowledge of those rights is
        the most effective countermeasure.
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
