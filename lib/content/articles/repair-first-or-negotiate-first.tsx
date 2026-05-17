import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Repair First or Negotiate First: The Strategic Dilemma at the Heart of Every Property Insurance Claim',
  description:
    'When should a policyholder complete repairs before reaching a settlement — and when should they refuse to lift a hammer until the carrier pays? A strategic framework for California property insurance claims.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        After two decades in property insurance claims, I can tell you that this is one of the
        trickiest strategic decisions a policyholder will face: do you repair the damage first and
        then demand the carrier pay for what you spent, or do you negotiate the claim to a fair
        number first and then repair after you have the money in hand?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no universal answer. There are cases where repairing first is a devastating weapon
        that forces the carrier to the table with real numbers it cannot argue away. And there are
        cases where repairing first is a catastrophic mistake that leaves the policyholder holding
        invoices the carrier refuses to honor. The same is true in reverse &mdash; negotiating first
        can be a position of strength, or it can be a slow death by depreciation deadlines and ALE
        exhaustion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What makes this even more complicated is that the answer may be different for different parts
        of the same claim. You might repair the roof immediately to stop ongoing water damage,
        negotiate the kitchen remodel before starting work, and hold off entirely on the landscaping
        until the carrier commits to a number. The strategy is not one decision. It is a series of
        decisions, each driven by different pressures and different legal considerations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Case for Repairing First
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Invoices Are the Most Powerful Evidence in Claims Negotiation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single greatest advantage of repairing first is that it replaces estimates with invoices.
        An estimate is a prediction. An invoice is a fact. And in any dispute over the cost of
        repairs, facts win.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder submits an estimate &mdash; whether it is an Xactimate estimate prepared
        by a public adjuster or a bid from a general contractor &mdash; the carrier&rsquo;s response
        is predictable. The carrier will challenge line items. The carrier will dispute unit prices.
        The carrier will argue that the scope is inflated, the materials are excessive, the labor
        rates are above market. The carrier will counter with its own estimate, and the result is two
        estimates staring at each other across a conference table.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An invoice changes the dynamic entirely. When the policyholder has already completed the
        repairs and has a paid invoice from a licensed contractor, the argument is no longer about
        what the repairs <em>should</em> cost. The argument is about what the repairs <em>did</em>
        {' '}cost. The carrier can no longer propose an alternative scope &mdash; the work is done.
        The carrier can no longer argue for different materials &mdash; the materials are installed.
        The carrier can no longer claim that a different contractor would have charged less &mdash;
        the contractor has been hired, the work has been performed, and the invoice has been paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The evidentiary weight of a paid invoice in litigation, appraisal, or mediation is
        substantially greater than the weight of a competing estimate. A jury understands an invoice.
        A jury understands that the homeowner hired a contractor, the contractor did the work, and
        the contractor charged a price. A jury has a much harder time evaluating dueling estimates
        prepared by adjusters using software the jury has never seen.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Repairing First Can Reveal Hidden Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property losses rarely present their full scope on initial inspection. A fire that appears to
        have damaged two rooms may have compromised the electrical system in the walls, the HVAC
        ductwork in the attic, or the structural framing behind the drywall. Water damage that
        appears limited to a bathroom ceiling may have wicked into adjacent walls, saturated
        insulation, or created conditions for mold growth that will not manifest for weeks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder repairs first, the contractor opens walls, removes damaged materials,
        and exposes conditions that no one could have seen during the initial inspection. This
        discovery process frequently reveals damage that the carrier&rsquo;s estimate did not
        contemplate &mdash; because the carrier&rsquo;s adjuster wrote the estimate based on what
        was visible, not what was hidden.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Replacement Cost Policy Structure Favors Completion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners policies in California are replacement cost policies, and the replacement
        cost payment structure is designed around the assumption that the policyholder will complete
        repairs. The carrier pays the claim in two stages: first, the Actual Cash Value (the
        replacement cost minus depreciation), and second, the recoverable depreciation (the withheld
        amount), which is released only after the policyholder completes repairs or replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This structure creates a financial incentive to repair. If the policyholder negotiates a
        settlement but never completes the repairs, the policyholder receives only the ACV &mdash;
        which can be tens of thousands of dollars less than the full replacement cost. In a claim
        where the dwelling damage is $300,000 and depreciation is $75,000, the difference between
        completing repairs and not completing them is $75,000. That is not a rounding error.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Repairing first ensures that the policyholder is positioned to collect the full replacement
        cost value, including the depreciation holdback. The policyholder completes the work, submits
        the invoices, and demands the full policy benefit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Mitigate Works in Both Directions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every property insurance policy imposes a duty on the policyholder to protect the property
        from further damage. But the duty to mitigate also creates a strategic opportunity. When the
        policyholder repairs promptly &mdash; particularly emergency and protective repairs &mdash;
        the policyholder is demonstrating compliance with the duty to mitigate in the most
        unambiguous way possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier that refuses to reimburse reasonable mitigation costs is on dangerous ground. A
        carrier that argues the policyholder should have waited &mdash; should have let the property
        sustain additional damage while the carrier slow-walked the estimate &mdash; is making an
        argument that no jury wants to hear.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Risks of Repairing First
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Policyholder Bears the Financial Burden
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most obvious risk of repairing first is that someone has to pay for the repairs before
        the carrier reimburses them. For many policyholders, this is not feasible. A $200,000
        reconstruction project requires either substantial personal savings, a construction loan, or
        a contractor willing to carry the cost until the insurance proceeds arrive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This financial constraint is real, and it is the primary reason many policyholders cannot
        adopt a repair-first strategy even when it would be strategically advantageous. The carrier
        knows this. The carrier&rsquo;s entire leverage in many claims derives from the fact that
        the policyholder does not have the resources to repair independently of the insurance
        proceeds.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Carrier May Dispute Reasonableness
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder repairs first and submits invoices, the carrier does not automatically
        pay the full amount. The carrier retains the right to evaluate the reasonableness of the
        repair costs. If the carrier believes the costs are excessive &mdash; if the carrier argues
        that the policyholder used a contractor who charged above-market rates, selected materials
        that exceeded what was damaged, or included work not necessitated by the covered loss &mdash;
        the carrier will pay only the amount it considers reasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This risk can be managed. The policyholder should document everything &mdash; the condition
        of the property before repairs, the scope of work, the contractor&rsquo;s qualifications,
        the basis for material selections, and the market rates for comparable work in the area. The
        policyholder should obtain multiple bids where practical, not because the lowest bid is
        necessarily the right bid, but because multiple bids establish a market range that makes the
        selected contractor&rsquo;s pricing defensible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Evidence Preservation Concerns
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once repairs are completed, the physical evidence of the original damage is gone. The
        fire-damaged framing has been removed. The water-stained drywall has been replaced. The
        carrier can no longer inspect the damage firsthand.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical solution is to give the carrier reasonable notice and a reasonable opportunity
        to inspect before repairs begin, then proceed with or without the carrier&rsquo;s
        participation. If the carrier fails to inspect after being given the opportunity, the carrier
        has waived its right to complain about evidence preservation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Case for Negotiating First
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Negotiating First Eliminates Financial Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most compelling advantage of negotiating before repairing is that it eliminates the
        policyholder&rsquo;s financial exposure. If the carrier agrees to the scope and cost before
        repairs begin, the policyholder knows exactly how much money is available. The policyholder
        can plan the project, hire the contractor, and proceed with confidence that the funds will be
        there.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Carrier Must Respond to a Documented Demand
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder presents a comprehensive, well-documented demand before repairs begin,
        the carrier is forced to respond. Under California&rsquo;s Fair Claims Settlement Practices
        Regulations (Cal. Code Regs. tit. 10, Section 2695.7), the carrier must provide a written
        explanation when it does not accept a claim as submitted. This explanation must identify
        every basis for the carrier&rsquo;s position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is significant. When the carrier is forced to articulate its position on paper, the
        policyholder and the policyholder&rsquo;s representatives can evaluate that position,
        identify its weaknesses, and respond point by point. The negotiation becomes a documented
        exchange of positions &mdash; a paper trail that will be valuable in any subsequent
        appraisal, mediation, or litigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&rsquo;s Contractor Naming Regulation: One of the Most Powerful Tools in Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where California policyholders have an advantage that policyholders in most other
        states do not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Code of Regulations, title 10, section 2695.9, subdivision (d), provides:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 italic">
        &ldquo;No insurer shall require that the claimant have the property repaired by a specific
        individual or entity.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the regulation goes further. When the carrier&rsquo;s estimate is lower than the
        policyholder&rsquo;s estimate, and the parties cannot agree on the cost of repairs:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 italic">
        &ldquo;The insurer shall provide the claimant with the name of at least one repair
        individual or entity that will make the repairs for the amount of the insurer&rsquo;s
        estimate.&rdquo;
      </p>

      <CalloutBox variant="tip" title="The Contractor-Naming Regulation">
        <p>
          If the carrier writes an estimate for $120,000 and the policyholder&rsquo;s contractor
          bids $190,000, and the two sides cannot agree, the carrier must give the policyholder the
          name of a contractor &mdash; a specific, identified contractor &mdash; who will actually
          do the work for $120,000. If the carrier cannot name a contractor who will do the work for
          the carrier&rsquo;s estimate, the carrier&rsquo;s estimate is exposed as a fiction.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, carriers struggle mightily with this requirement. Naming a contractor who will
        do the work for the carrier&rsquo;s estimate means the carrier must find a licensed
        contractor willing to commit to a specific scope of work at a specific price on a specific
        property. Many carriers either ignore the regulation entirely, provide a generic referral to
        a preferred vendor program, or name a contractor who, upon inspection, declines to commit to
        the carrier&rsquo;s price.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every one of those responses benefits the policyholder. If the carrier ignores the
        regulation, the carrier is in violation of the Fair Claims Settlement Practices Regulations
        &mdash; a fact that is relevant in any bad faith action. If the carrier names a contractor
        who cannot or will not do the work for the estimate amount, the carrier has functionally
        conceded that its estimate is inadequate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This regulation is most effectively deployed before repairs begin. Once the policyholder has
        already repaired the property, the regulation becomes moot &mdash; the question of who can
        do the work for the carrier&rsquo;s estimate is academic when the work has already been
        done.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Negotiating First Preserves Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When repairs have not yet been performed, the physical evidence of the damage remains
        available for inspection, re-inspection, expert evaluation, and documentation. If the claim
        proceeds to appraisal or litigation, the damaged property itself is evidence that can be
        examined by appraisers, umpires, experts, and &mdash; if it comes to it &mdash; a jury.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Risks of Negotiating First
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Time Is the Carrier&rsquo;s Weapon
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The greatest risk of the negotiate-first strategy is that it gives the carrier what the
        carrier wants most: time. As long as repairs have not begun, the policyholder is displaced.
        As long as the policyholder is displaced, the carrier&rsquo;s leverage grows. Additional
        Living Expenses deplete. The depreciation holdback deadline approaches. The
        policyholder&rsquo;s emotional reserves erode. The carrier can process the claim at its own
        pace, engage in the kind of procedural delay that costs the carrier nothing and costs the
        policyholder everything.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Depreciation Holdback Deadlines Can Force Premature Settlement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most replacement cost policies require the policyholder to complete repairs within a
        specified period &mdash; typically twelve to twenty-four months from the date of loss,
        depending on the policy &mdash; in order to collect the recoverable depreciation. If repairs
        are not completed within this window, the depreciation holdback is forfeited permanently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This deadline creates a structural conflict with the negotiate-first strategy. If the
        policyholder spends twelve months negotiating and has not yet begun repairs, the depreciation
        deadline may be only months away. The policyholder faces a choice: accept the carrier&rsquo;s
        inadequate offer and begin repairs in time to collect the depreciation, or continue
        negotiating and risk losing tens of thousands of dollars in recoverable depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, policyholders in declared disasters have some protection: Insurance Code
        Section 2051.5 provides that the time limit for collecting recoverable depreciation begins
        when the insurer provides written notice of the time limit, not from the date of loss. But
        outside of declared disasters, the policy&rsquo;s own language controls, and those deadlines
        are firm.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Xactimate Estimates Are Not Self-Proving
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder negotiates before repairs, the negotiation is conducted on the basis of
        estimates &mdash; the carrier&rsquo;s estimate, the policyholder&rsquo;s estimate, and
        possibly a contractor&rsquo;s bid. Estimates are predictions, not facts. The carrier&rsquo;s
        adjuster will argue that the policyholder&rsquo;s estimate overstates the scope. The
        policyholder&rsquo;s public adjuster or contractor will argue the reverse. Without completed
        work to point to, neither side has the definitive evidence that an invoice provides.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Hybrid Approach: Repairing Strategically
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, the most effective strategy for many claims is neither purely repair-first nor
        purely negotiate-first. It is a hybrid approach that applies each strategy to different
        elements of the claim based on the specific characteristics of each element.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Repair Immediately: Emergency and Mitigation Work
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain repairs should always be performed immediately, regardless of the claim&rsquo;s
        negotiation status. Emergency repairs that prevent further damage &mdash; tarping a roof,
        boarding up broken windows, extracting standing water, removing debris that poses a safety
        hazard &mdash; fall squarely within the duty to mitigate. The policyholder should not wait
        for carrier approval to prevent ongoing damage to the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These costs are recoverable, and the policyholder&rsquo;s prompt action strengthens the
        overall claim by demonstrating good faith and responsible property stewardship. Document the
        emergency conditions, document the work performed, and submit the invoices to the carrier.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Repair First: Known Scope, Clear Pricing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For elements of the claim where the scope is straightforward and the pricing is defensible
        &mdash; replacing a water heater, repairing drywall in a single room, replacing standard
        roofing materials &mdash; repairing first can be advantageous. These items are unlikely to
        generate major disputes, and completing them quickly demonstrates progress and good faith.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Negotiate First: Complex Scope, High Value, Custom Work
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the major elements of the claim &mdash; full kitchen reconstruction, structural repairs,
        custom finishes, code upgrade work &mdash; negotiating first is often the wiser course. These
        are the items where the carrier&rsquo;s estimate and the actual cost are most likely to
        diverge significantly. These are the items where the policyholder&rsquo;s financial exposure
        is greatest if the carrier refuses to reimburse the full cost after the fact.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        By negotiating these items before repairs begin, the policyholder retains the ability to
        invoke California&rsquo;s contractor-naming regulation. The policyholder can demand that the
        carrier name a contractor who will do the work for the carrier&rsquo;s estimate. The
        policyholder preserves the physical evidence for inspection and re-inspection.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Negotiate First: Disputed Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If there is any question about whether a particular element of damage is covered &mdash; if
        the carrier has reserved its rights, if the cause of loss is disputed, if the carrier has
        raised a policy exclusion &mdash; do not repair that element before the coverage question is
        resolved. Repairing damage that the carrier ultimately denies coverage for leaves the
        policyholder with no reimbursement for completed work. The coverage question must be answered
        first. The hammers come second.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Code Upgrades: A Special Case Where &ldquo;Repair First&rdquo; Can Unlock Money
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is one category of claim payment where the repair-first versus negotiate-first
        question operates under entirely different rules, and understanding those rules creates a
        strategic opportunity that most policyholders &mdash; and many professionals &mdash;
        overlook entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard dwelling coverage and law and ordinance coverage have fundamentally different
        payment triggers. Under a typical replacement cost homeowners policy, the carrier owes the
        Actual Cash Value of the dwelling damage whether or not the policyholder ever lifts a hammer.
        Law and ordinance coverage &mdash; the coverage that pays for code upgrades required when a
        damaged structure is repaired or rebuilt &mdash; works differently. Under most policies, code
        upgrade costs are not owed until the policyholder has actually incurred or completed the
        expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction creates a problem. In the normal sequence of a construction project, code
        upgrades happen during or at the end of the rebuilding process. The policyholder who is
        waiting to negotiate the full claim before starting construction may also be waiting months
        or years to collect law and ordinance proceeds, because those proceeds are not payable until
        the upgrades are physically completed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But not every code upgrade depends on other construction being finished first. Some code
        upgrades are functionally standalone &mdash; they can be completed independently of the
        broader reconstruction, sometimes before any other work has even begun. And completing those
        upgrades early triggers the law and ordinance payment early, putting money in the
        policyholder&rsquo;s hands that would otherwise remain locked until the end of the project.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Standalone Code Upgrade
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a straightforward example. A policyholder suffers a fire that destroys a detached
        garage. The electrical service panel is mounted on the exterior of the main dwelling,
        separated from the garage by a clear space. The existing panel is a 100-amp panel. Current
        electrical code requires a 200-amp panel. Upgrading that panel is a code-required improvement
        that falls squarely within law and ordinance coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the key: the electrical panel upgrade does not depend on the garage being rebuilt. An
        electrician can pull permits, upgrade the panel from 100 amps to 200 amps, pass inspection,
        and complete the work in a matter of days &mdash; before a single framing nail goes into the
        garage reconstruction. The moment that work is completed and the invoice is submitted, the
        law and ordinance coverage for the panel upgrade is triggered. The carrier owes that money
        now, not at the end of the project.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Identifying Standalone Code Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every code upgrade is a candidate for early, independent completion. The question is
        whether the upgrade can be physically performed without the underlying construction being
        completed first. Common categories that tend to be good candidates:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Electrical upgrades.</strong> Panel upgrades, GFCI and AFCI circuit protection
          requirements, grounding system upgrades, and service entrance improvements can often be
          completed on the existing dwelling independent of reconstruction of a damaged structure.
        </li>
        <li>
          <strong>Water heater and plumbing code items.</strong> Seismic strapping, expansion tanks,
          temperature and pressure relief valve discharge piping, and similar plumbing code
          requirements can often be addressed independently.
        </li>
        <li>
          <strong>Gas line and utility upgrades.</strong> Upgrades to gas piping, meter relocation
          requirements, and similar utility-side code items can sometimes be completed before
          reconstruction begins.
        </li>
        <li>
          <strong>Site and grading requirements.</strong> Changes to drainage, grading, or stormwater
          management required by current code may be completable independently of the structural
          rebuild.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The analysis is always specific to the property, the loss, the applicable building codes, and
        the policy language. But the principle is consistent: if a code upgrade can be physically
        completed and invoiced before the broader reconstruction, completing it early triggers the
        payment early.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Framework for the Decision
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no formula for this. Every claim is different. But here is a framework for thinking
        about the repair-first versus negotiate-first question:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Repair first when:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The scope is clear and undisputed</li>
        <li>The pricing is defensible and within market norms</li>
        <li>The policyholder has the financial resources to fund the work</li>
        <li>Emergency conditions require immediate action</li>
        <li>The work will reveal hidden damage that strengthens the claim</li>
        <li>Coverage is not in dispute</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Negotiate first when:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The scope is complex, disputed, or involves custom work</li>
        <li>The cost is high and the gap between estimates is large</li>
        <li>The policyholder cannot fund repairs independently</li>
        <li>Coverage for any element is in question</li>
        <li>The policyholder wants to invoke California&rsquo;s contractor-naming regulation</li>
        <li>Evidence preservation is important for potential litigation</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Use a hybrid approach when:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Different elements of the claim have different characteristics</li>
        <li>Some repairs are urgent while others can wait</li>
        <li>The claim involves both straightforward and complex elements</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The repair-first versus negotiate-first dilemma is not a riddle with a single answer. It is
        a strategic decision shaped by the specific facts of the loss, the policyholder&rsquo;s
        financial and emotional circumstances, the carrier&rsquo;s conduct, the regulatory
        environment, and the legal landscape of the jurisdiction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What matters is that the policyholder makes this decision consciously, with an understanding
        of the advantages, risks, and trade-offs of each approach. What the policyholder should not
        do is default into a strategy without thinking about it &mdash; repairing first simply
        because they want to go home, or negotiating first simply because they do not have the money
        to repair. Both of those impulses are understandable. But understanding why you are choosing
        a strategy, and what you are gaining and giving up by choosing it, is what separates a
        policyholder who navigates the claim from a policyholder who is navigated by the carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The carrier has a strategy. The carrier always has a strategy. The policyholder should have
        one too.
      </p>
    </>
  )
}
