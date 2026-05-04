import Link from 'next/link'

export const meta = {
  title: 'Scope vs. Price: The Two Different Fights Your Insurance Company Wants You to Confuse',
  description:
    'Every insurance claim dispute is either a scope dispute or a price dispute. Understanding which fight you are in changes your evidence, your strategy, and your path to resolution. Learn the critical difference and how carriers exploit the confusion.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are fighting with your insurance company over a property damage claim, you are in one
        of two fights. Either you are arguing about <em>what work needs to be done</em>, or you are
        arguing about <em>what that work costs</em>. These are fundamentally different disputes, and
        they require different evidence, different strategies, and different resolution paths. Yet
        most policyholders &mdash; and even some professionals who should know better &mdash; treat
        them as the same thing. That confusion benefits the carrier every single time.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article breaks down the distinction between scope disputes and price disputes, explains
        why your insurance company wants you to confuse the two, and gives you practical tools for
        identifying which fight you are actually in &mdash; so you can win it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Scope Dispute?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A scope dispute is a disagreement about <strong>what damage exists</strong> and{' '}
        <strong>what repairs are necessary</strong> to restore the property. In a scope dispute, you
        and the carrier cannot agree on the nature or extent of the work that needs to be performed.
        The question is not how much the work costs &mdash; it is whether the work needs to happen at
        all.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Scope disputes show up in almost every type of property claim. Here are common examples:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Roof replacement vs. repair:</strong> Your roofer says the entire roof needs
          replacement due to storm damage. The carrier says only a few shingles need patching. The
          disagreement is not about what a new roof costs &mdash; it is about whether a new roof is
          warranted.
        </li>
        <li>
          <strong>Water migration extent:</strong> Your restoration contractor found moisture readings
          indicating water has migrated into three adjacent rooms. The carrier&apos;s adjuster only
          scoped damage in the room where the leak originated. The dispute is about where the damage
          actually extends.
        </li>
        <li>
          <strong>Plumbing re-pipe vs. spot repair:</strong> Your plumber says the corroded copper
          throughout the house needs a full re-pipe because the failed section is symptomatic of
          system-wide deterioration. The carrier says only the failed joint needs a patch. The fight
          is about the nature of the required repair.
        </li>
        <li>
          <strong>Hidden damage behind walls:</strong> You believe water infiltrated the wall
          cavities, damaging insulation, framing, and electrical. The carrier says the damage is
          limited to the surface drywall. The dispute is about what exists behind the finish
          materials.
        </li>
        <li>
          <strong>Matching and uniformity:</strong> Your contractor says the undamaged portions of the
          flooring, cabinetry, or roofing must be replaced to achieve a uniform appearance because
          the existing materials cannot be matched. The carrier says the damaged section can be
          repaired in isolation. This is a scope dispute about whether the repair scope must include
          undamaged areas to achieve a proper result.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The defining feature of a scope dispute is that the parties have not yet agreed on what the
        damage is or what work is required. Until that question is resolved, any discussion about
        price is premature. You cannot meaningfully negotiate the cost of work that the carrier does
        not agree needs to happen.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of how scope disputes arise and how to challenge the carrier&apos;s
        inspection, see our{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          Scope of Loss Disputes
        </Link>{' '}
        guide.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Price Dispute?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A price dispute is a disagreement about <strong>what the agreed-upon work costs</strong>. In
        a price dispute, both you and the carrier agree on the scope &mdash; you agree the roof needs
        replacement, or the kitchen needs to be rebuilt, or the plumbing needs a re-pipe. What you
        cannot agree on is the dollar figure. Your contractor says $45,000. The carrier&apos;s
        Xactimate estimate says $28,000. Nobody is arguing about what work needs to be done. The
        argument is about the cost of doing it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Price disputes are common and can involve significant dollar amounts:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Labor rates:</strong> The carrier&apos;s estimate uses Xactimate&apos;s labor
          pricing, which often lags behind actual market rates. Your contractor&apos;s rates reflect
          what skilled tradespeople actually charge in your area. After major disasters, the gap
          between Xactimate labor pricing and actual market rates can be enormous because Xactimate
          is a historically based pricing system that does not account for real-time demand surges.
        </li>
        <li>
          <strong>Material costs:</strong> Xactimate&apos;s material pricing may not reflect current
          supply chain conditions, regional availability, or the specific materials needed to match
          existing finishes. The carrier may price generic materials when the repair requires
          specific, harder-to-source products.
        </li>
        <li>
          <strong>Overhead and profit:</strong> The carrier refuses to include general contractor
          overhead and profit in the estimate, even though the job involves multiple trades and
          requires coordination that only a general contractor can provide. This alone can represent
          a 20% gap between the carrier&apos;s estimate and the actual cost.
        </li>
        <li>
          <strong>Line item unit pricing:</strong> Individual line items in the Xactimate estimate
          are priced below what the work actually costs. The carrier&apos;s adjuster may be using
          outdated pricing databases, incorrect quality settings, or &quot;new construction&quot;
          pricing modes rather than repair and replacement pricing.
        </li>
        <li>
          <strong>Code upgrade costs:</strong> The carrier acknowledges the work but disputes the
          cost of bringing the repairs into compliance with current building codes &mdash; upgraded
          electrical panels, seismic retrofits, energy efficiency requirements, and similar code-driven
          expenses.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate itself has acknowledged the limitations of its pricing data. Verisk&apos;s End User
        License Agreement now states: &quot;We do not warrant the accuracy of pricing information in
        the Price Data.&quot; When the software&apos;s own publisher disclaims its pricing accuracy,
        it is difficult for a carrier to credibly argue that Xactimate pricing is the definitive
        measure of what a repair should cost. For a detailed breakdown of how to challenge
        Xactimate-based underpayment, see our guide on{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          how to challenge a Xactimate estimate
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Distinction Matters
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing whether you are in a scope dispute or a price dispute changes almost everything about
        how you should handle your claim. The evidence you need is different. The experts you hire are
        different. The resolution mechanisms available to you are different. And the carrier&apos;s
        obligations under the policy and under state regulations are different.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Different Evidence
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Scope disputes require <strong>physical evidence</strong> proving that the damage exists and
        that the proposed repairs are necessary. This means:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Detailed inspection reports from qualified contractors, engineers, or other experts who
          have physically examined the property
        </li>
        <li>
          Moisture mapping, thermal imaging, and other diagnostic testing that reveals damage not
          visible to the naked eye
        </li>
        <li>
          Destructive testing &mdash; opening walls, pulling up flooring, removing ceiling panels
          &mdash; to document what the carrier&apos;s adjuster refused or failed to look at
        </li>
        <li>
          Engineering reports addressing structural integrity, causation, and the technical necessity
          of the proposed repairs
        </li>
        <li>
          Photographic and video documentation, including before-and-after comparisons where
          available
        </li>
        <li>
          Industry standards and manufacturer specifications establishing the correct repair protocol
          for the type of damage involved
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Price disputes require <strong>market data</strong> proving that the carrier&apos;s cost
        estimate is inadequate. This means:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Competing contractor bids &mdash; ideally two or three bids from licensed, reputable
          contractors confirming what the work actually costs in your market
        </li>
        <li>
          A detailed Xactimate rebuttal estimate prepared by someone who understands how the
          software works and can identify where the carrier&apos;s estimate used incorrect settings,
          omitted legitimate line items, or applied below-market pricing
        </li>
        <li>
          Verisk pricing documentation showing that the carrier&apos;s estimate does not reflect the
          published pricing data for your zip code and date of loss
        </li>
        <li>
          Material supplier quotes for the specific products needed, demonstrating that the
          carrier&apos;s material pricing is below actual retail or wholesale cost
        </li>
        <li>
          Trade-specific sub-bids from specialty contractors (electricians, plumbers, roofers) showing
          actual market rates for each trade involved in the repair
        </li>
        <li>
          Documentation of post-disaster pricing conditions if the loss occurred during or after a
          declared catastrophe event, when labor and material costs spike due to demand
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Submitting price evidence when you are in a scope dispute wastes time and money. The carrier
        does not care what the roof replacement costs if they are still arguing that the roof only
        needs a patch. Conversely, submitting additional inspection reports when you are in a price
        dispute is equally misguided &mdash; no one is arguing about whether the damage exists.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Different Experts
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The professionals you need on your side depend on which dispute you are in:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scope disputes</strong> call for forensic engineers, certified industrial
          hygienists (for mold and contamination issues), specialty inspectors, and experienced
          contractors who can conduct invasive inspections and author detailed reports establishing
          the existence and extent of damage.
        </li>
        <li>
          <strong>Price disputes</strong> call for experienced Xactimate estimators, construction
          cost consultants, licensed general contractors who can provide competitive bids, and
          appraisers who specialize in property damage valuation. See our guide on{' '}
          <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
            sub-bids vs. Xactimate pricing
          </Link>{' '}
          for more on how to assemble compelling pricing evidence.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Different Resolution Paths
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is perhaps the most consequential difference. Scope disputes and price disputes have
        different available resolution mechanisms, and choosing the wrong one can cost you months of
        delay &mdash; or permanently waive your rights.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Price disputes</strong> are typically well-suited for the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal process
        </Link>
        . Most property insurance policies contain an appraisal clause that allows either party to
        demand an independent appraisal when there is a disagreement over the &quot;amount of
        loss.&quot; Appraisal is faster and less expensive than litigation. Each side selects an
        appraiser, the two appraisers select an umpire, and any two of the three can issue a binding
        award establishing the value of the loss. When both parties agree on what the damage is and
        what work needs to be done, appraisal is often the fastest path to a fair settlement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Scope disputes</strong> are more complicated. The appraisal clause, by its terms,
        typically applies to disagreements about the &quot;amount of loss&quot; &mdash; not to
        disagreements about what constitutes a covered loss in the first place. When the dispute is
        whether the roof needs replacement or just repair, whether water migrated into adjacent rooms,
        or whether the plumbing needs a re-pipe, you are not arguing about a dollar amount. You are
        arguing about the nature and extent of the damage itself.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some courts have held that scope determinations are a necessary part of valuing the loss and
        therefore fall within the appraisal clause. Other courts have drawn a firmer line, ruling that
        scope disputes &mdash; particularly when they touch on causation or coverage questions &mdash;
        exceed the authority of appraisers and must be resolved through litigation or other legal
        proceedings. The answer often depends on your state&apos;s law and the specific policy
        language.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This means that if you are in a genuine scope dispute, demanding appraisal may not resolve
        your issue. Worse, the carrier may use an appraisal demand strategically &mdash; arguing that
        the dispute is &quot;just about money&quot; in order to funnel it into a process where the
        underlying scope questions never get addressed. If your scope dispute also implicates{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
          coverage issues
        </Link>{' '}
        &mdash; for example, the carrier is arguing that the damage was caused by an excluded peril
        rather than a covered one &mdash; then litigation may be your only viable path.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Blur the Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies benefit from confusion. When a policyholder cannot clearly articulate
        whether the dispute is about scope or price, the carrier has more room to maneuver, more
        tactics to deploy, and more opportunities to exhaust the policyholder into accepting a low
        offer. Blurring the line between scope and price is not accidental. It is a strategy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 1: Reframing a Scope Dispute as a Price Dispute
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your contractor says the roof needs full replacement. The carrier&apos;s adjuster inspected
        the roof for 20 minutes, counted a handful of damaged shingles, and wrote an estimate for a
        spot repair. You push back with a detailed inspection report from a roofing expert. Instead
        of engaging with the scope evidence, the carrier responds: &quot;We&apos;ve reviewed the
        claim and we believe our estimate is fair. If you disagree with the amount, you can invoke
        appraisal.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Notice what happened. The carrier sidestepped the scope argument entirely. They did not
        address whether the roof needs replacement. They simply characterized the disagreement as
        being about money and pointed you toward a process &mdash; appraisal &mdash; that may not
        have the authority to decide whether a roof replacement is necessary versus a spot repair.
        If you accept the carrier&apos;s framing and pursue appraisal, you may end up with an
        appraiser who values the spot repair that the carrier scoped rather than the full replacement
        your contractor documented. You would win the price fight while losing the scope fight
        entirely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 2: Reframing a Price Dispute as a Scope Dispute
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This tactic runs in the opposite direction. Everyone agrees the kitchen needs to be rebuilt
        after a fire. Your contractor submits a detailed estimate for $85,000. The carrier comes back
        with an estimate for $52,000 &mdash; but instead of defending the lower pricing, they start
        questioning whether certain items in your contractor&apos;s estimate are really necessary.
        &quot;Do you really need to replace all the upper cabinets? We only see smoke damage on the
        lower ones. Does the flooring really need to come out in the dining room? Our adjuster
        didn&apos;t note damage there.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier has taken what was originally a price dispute &mdash; both sides agreed the
        kitchen was destroyed and needed rebuilding &mdash; and retroactively introduced scope
        questions. This buys time, creates new issues to investigate, and forces you to prove things
        that were already conceded. It also lets the carrier avoid defending its Xactimate pricing
        against your contractor&apos;s actual costs, which is an argument they would likely lose.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 3: Combining Scope and Price Into One Unreadable Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers issue estimates that make it impossible to determine which items they are
        disputing on scope and which they are disputing on price. The estimate may include some rooms
        but not others, include some line items at below-market pricing, omit entire categories of
        work without explanation, and arrive at a bottom-line number that is clearly inadequate
        &mdash; but you cannot tell whether the shortfall comes from missing scope, low pricing, or
        both. This is by design. A combined, opaque estimate forces you to challenge every element
        simultaneously, which is expensive and time-consuming. It also makes it harder to identify
        the right resolution path because you cannot cleanly characterize the dispute as scope or
        price when it is deliberately muddled.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 4: Claiming Scope Authority Over Price Issues
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier writes a low estimate. You respond with contractor bids proving the work costs
        more. The carrier responds: &quot;Our field adjuster inspected the property and determined
        the appropriate scope of repairs. We stand by our estimate.&quot; The word &quot;scope&quot;
        appears here, but the actual dispute is about pricing. The carrier is using &quot;scope&quot;
        as a shield &mdash; implying that their adjuster&apos;s on-site inspection gives them
        authority over the cost of repairs, when in reality their adjuster&apos;s inspection only
        establishes what damage was observed, not what it costs to fix.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Identify Which Fight You Are In
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ask yourself one question: <strong>Does the carrier agree that the work needs to be
        done?</strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the answer is yes &mdash; the carrier acknowledges the roof needs replacement, the
        kitchen needs rebuilding, the plumbing needs re-piping &mdash; then the dispute is about
        price. The argument is about dollars. You need market data, competing bids, and Xactimate
        analysis.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the answer is no &mdash; the carrier says the roof only needs repair, the kitchen damage
        is limited, the plumbing just needs a patch &mdash; then the dispute is about scope. The
        argument is about the nature of the damage and the extent of the necessary repairs. You need
        physical evidence, expert inspections, and potentially destructive testing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the answer is partly yes and partly no &mdash; the carrier agrees on some items but
        disputes others &mdash; then you have a mixed dispute with both scope and price components.
        This is common. You need to separate the two and address each component with the appropriate
        evidence and strategy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Practical Test: Compare the Estimates Line by Line
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Get the carrier&apos;s Xactimate estimate and your contractor&apos;s estimate side by side.
        Go through every line item and categorize each difference:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Missing items:</strong> Your contractor includes work that does not appear anywhere
          in the carrier&apos;s estimate. These are scope disputes. The carrier is not saying the
          work is overpriced &mdash; they are saying it does not need to happen.
        </li>
        <li>
          <strong>Same items, different prices:</strong> Both estimates include the same line item
          &mdash; for example, &quot;Remove and replace composition shingle roofing&quot; &mdash;
          but the carrier&apos;s unit price is lower. This is a price dispute. Everyone agrees the
          work needs to happen; the argument is about cost.
        </li>
        <li>
          <strong>Same items, different quantities:</strong> Both estimates include shingle
          replacement, but your contractor measured 28 squares and the carrier measured 22 squares.
          This is a scope dispute dressed up as a measurement issue. The carrier is effectively
          saying that some of the roof area does not need replacement.
        </li>
        <li>
          <strong>Different repair methods:</strong> Your contractor says the water-damaged framing
          needs to be removed and replaced. The carrier says it can be dried and treated in place.
          This is a scope dispute about the appropriate repair methodology, not a price dispute.
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        This line-by-line exercise often reveals that what seems like one big dispute is actually
        multiple smaller disputes, some about scope and some about price. Separating them allows you
        to deploy the right strategy for each.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fighting a Scope Dispute: Evidence and Strategy
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Scope disputes are won with physical evidence. The carrier is claiming that damage does not
        exist or that a less extensive repair is adequate. You need to prove otherwise.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Demand a Reinspection
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&apos;s adjuster performed a superficial inspection &mdash; which is the norm,
        not the exception &mdash; you have every right to demand a reinspection with your own expert
        present. State regulators in most jurisdictions require carriers to conduct reasonable
        investigations of claims. A 30-minute walk-through of a property with hidden damage behind
        walls and above ceilings does not constitute a reasonable investigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conduct Destructive Testing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Hidden damage is proven by looking for it. If you believe there is water damage behind walls,
        mold in the wall cavities, fire damage to structural members, or other concealed damage, you
        may need to open walls, remove flooring, or pull down ceiling material to document it.
        Destructive testing should be performed by a qualified professional, thoroughly photographed
        and documented, and the carrier should be invited to attend or given notice before it occurs.
        Research indicates that hidden damage accounts for a significant majority of underpaid claims,
        with concealed moisture, structural micro-fractures, and mold growth being among the most
        frequently missed categories.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Obtain Expert Reports
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        An expert report from a licensed engineer, certified industrial hygienist, or other qualified
        professional carries significant weight. The report should document the expert&apos;s
        findings, explain the methodology used, state the conclusions regarding the nature and extent
        of the damage, and recommend specific repairs. The report becomes the factual foundation for
        your scope argument.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Frame the Dispute Clearly
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In all correspondence with the carrier, be explicit about the nature of the dispute. State
        it plainly: &quot;This is a scope dispute. The carrier&apos;s adjuster failed to identify
        damage that our expert has documented. The enclosed report establishes that the damage extends
        beyond what the carrier&apos;s estimate acknowledges. We are not disputing the carrier&apos;s
        pricing &mdash; we are disputing the carrier&apos;s failure to recognize the full extent of
        the damage.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This framing puts the carrier on notice that you understand the distinction, forces them to
        respond to the scope evidence rather than deflecting to price, and creates a record that is
        useful if the claim later moves to litigation or a regulatory complaint.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fighting a Price Dispute: Evidence and Strategy
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Price disputes are won with market data. The carrier has acknowledged the scope of work but
        is undervaluing it. You need to prove that their numbers are wrong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Get Multiple Contractor Bids
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two or three bids from licensed, reputable contractors in your area are powerful evidence.
        If three independent contractors all say the roof replacement costs $42,000 to $48,000 and
        the carrier&apos;s Xactimate estimate says $28,000, the market has spoken. The carrier will
        have difficulty explaining why its estimate &mdash; generated by software in an office &mdash;
        should override the pricing of professionals who actually perform the work in your market.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Challenge the Xactimate Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&apos;s estimate was generated in Xactimate, have someone who is proficient in
        the software review it line by line. Common issues include the use of incorrect pricing
        databases, failure to apply the correct zip code or regional pricing, use of &quot;new
        construction&quot; labor minimums instead of repair pricing, omission of legitimate line
        items that the carrier has conceded belong in scope, and failure to include general contractor
        overhead and profit when the job clearly involves multiple trades. Our{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          Xactimate challenge guide
        </Link>{' '}
        walks through this process in detail.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Use Sub-Bids for Specialty Work
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For specific trades &mdash; electrical, plumbing, HVAC, roofing &mdash; a sub-bid from a
        licensed specialty contractor can be more persuasive than a general contractor&apos;s
        all-inclusive estimate. Sub-bids show exactly what each trade costs, making it harder for the
        carrier to argue that the overall estimate is inflated. For a full discussion of how sub-bids
        compare to Xactimate pricing, see our{' '}
        <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
          sub-bids vs. Xactimate pricing
        </Link>{' '}
        article.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Frame the Dispute Clearly
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In your correspondence, be equally direct about the nature of a price dispute: &quot;We
        agree the damage exists and is covered. We agree on the scope of necessary repairs. This is
        a price dispute. The carrier&apos;s Xactimate estimate does not reflect the actual cost of
        performing the agreed-upon repairs in our market. Enclosed are three contractor bids
        demonstrating the actual cost.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This framing does two important things. First, it locks in the carrier&apos;s scope
        concessions &mdash; if they agreed the roof needs replacement, they cannot later walk that
        back without contradicting their own prior position. Second, it positions the dispute as
        precisely the kind of &quot;amount of loss&quot; disagreement that is appropriate for
        appraisal, giving you a clear and efficient resolution path.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Appraisal Question: When It Helps and When It Does Not
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal clause
        </Link>{' '}
        in most property insurance policies allows either party to demand an independent appraisal
        when there is a disagreement about the &quot;amount of loss.&quot; Appraisal is binding in
        most states, relatively fast (typically 60 to 120 days), and far less expensive than
        litigation. For pure price disputes, it is often the best resolution path.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But appraisal has significant limitations when scope is in dispute:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Authority limitations:</strong> Appraisers are generally empowered to determine
          the value of the loss, not to decide coverage or causation questions. If the carrier is
          arguing that certain damage was caused by an excluded peril &mdash; a scope and coverage
          dispute rolled into one &mdash; the appraisers may lack authority to override that
          determination.
        </li>
        <li>
          <strong>Carrier manipulation:</strong> If the carrier successfully characterizes a scope
          dispute as a price dispute and pushes it into appraisal, the appraisers may end up valuing
          only the limited scope the carrier acknowledged. The result is a binding award that
          permanently undervalues the claim because the scope question was never properly adjudicated.
        </li>
        <li>
          <strong>State law variations:</strong> Some states define &quot;amount of loss&quot;
          broadly enough to include scope determinations as a necessary component of valuation.
          Other states draw a tighter line. Your state&apos;s case law on this issue directly affects
          whether appraisal is a viable option for your specific dispute.
        </li>
        <li>
          <strong>Waiver risk:</strong> In some jurisdictions, invoking appraisal may waive certain
          rights or delay other legal remedies. Before demanding appraisal, make sure you understand
          the procedural implications in your state.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The practical takeaway: if your dispute is genuinely about price &mdash; everyone agrees on
        the work, you are just arguing about cost &mdash; appraisal is usually your fastest and most
        cost-effective resolution path. If your dispute is genuinely about scope &mdash; the carrier
        is denying that damage exists or arguing that a lesser repair is appropriate &mdash; you need
        to resolve the scope question first, possibly through negotiation backed by expert evidence,
        a regulatory complaint, or litigation. Only after scope is established does it make sense to
        invoke appraisal to resolve any remaining price disagreements.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mixed Disputes: When It Is Both Scope and Price
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, many claims involve both scope and price disputes simultaneously. The carrier
        may have acknowledged some damage but missed other areas (scope), while also underpricing
        the work they did acknowledge (price). When this happens, you need a two-track approach.
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Resolve scope first.</strong> Before arguing about what the work costs, establish
          agreement on what work needs to be done. Submit your expert reports, demand reinspections,
          and conduct destructive testing as needed. Push until the carrier either concedes the
          additional scope or takes a clear, documented position denying it.
        </li>
        <li>
          <strong>Document the carrier&apos;s position.</strong> Get the carrier to commit in writing
          to what they agree needs to be done and what they dispute. This creates a clear record. If
          the carrier later tries to shift from one type of dispute to another, you can point to
          their own correspondence.
        </li>
        <li>
          <strong>Address price separately.</strong> Once scope is established &mdash; whether by
          carrier concession or by a legal determination &mdash; turn to the price component.
          Submit your contractor bids, Xactimate analysis, and market data. If the price dispute
          remains unresolved, invoke appraisal.
        </li>
        <li>
          <strong>Keep the record clean.</strong> In every communication with the carrier, clearly
          identify which items are scope disputes and which are price disputes. Do not let them
          blend together. Your written record should make it obvious to any third party &mdash;
          appraiser, judge, or regulator &mdash; which issues fall into which category.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Scenarios
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 1: The Wind-Damaged Roof
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A windstorm damages a homeowner&apos;s roof. The carrier&apos;s adjuster inspects from the
        ground and writes an estimate for 15 shingle repairs totaling $2,800. The homeowner hires
        a roofing contractor who gets on the roof, finds wind creasing on 60% of the shingles, and
        concludes the entire roof needs replacement at $38,000.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What type of dispute is this?</strong> Scope. The carrier is not saying that roof
        replacement would cost less than $38,000. They are saying the roof does not need replacement.
        The evidence needed is a detailed inspection report with photographs documenting the extent
        of the wind damage, possibly a forensic engineering report addressing the structural
        compromise of the roofing system, and manufacturer specifications establishing when wind
        creasing or granule loss necessitates replacement rather than repair.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Wrong move:</strong> Invoking appraisal immediately. If the carrier&apos;s appraiser
        agrees with the carrier&apos;s scope, the appraisal award will value 15 shingle repairs
        &mdash; not a replacement. <strong>Right move:</strong> Force the scope issue. Demand a
        reinspection with the roofing expert present. Submit the inspection report. Escalate to a
        supervisor. If the carrier still refuses to acknowledge the full scope, consider litigation
        or a regulatory complaint.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 2: The Kitchen Fire Rebuild
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A kitchen fire destroys the kitchen and causes smoke damage throughout the home. The carrier
        acknowledges the kitchen is a total loss and needs a complete rebuild. The homeowner&apos;s
        contractor estimates $92,000. The carrier&apos;s Xactimate estimate comes in at $61,000.
        Both estimates include the same rooms and the same general scope of work, but the
        carrier&apos;s pricing is substantially lower on labor, materials, and does not include
        overhead and profit.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What type of dispute is this?</strong> Price. Both sides agree the kitchen is
        destroyed and needs a complete rebuild. The disagreement is about cost. The evidence needed
        is competing contractor bids, a line-by-line Xactimate rebuttal, trade-specific sub-bids,
        and documentation of current material pricing. <strong>Right move:</strong> Invoke appraisal.
        This is exactly the type of &quot;amount of loss&quot; dispute the appraisal clause was
        designed to resolve. An experienced property damage appraiser will look at the actual market
        cost of the repairs and issue an award that reflects reality, not Xactimate&apos;s
        understated pricing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 3: The Water Loss With Hidden Damage
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A supply line breaks and floods a bathroom. The carrier&apos;s adjuster scopes the damage to
        the bathroom only &mdash; new flooring, new vanity, repaint. Total estimate: $8,500. The
        homeowner&apos;s restoration contractor finds elevated moisture readings in the adjacent
        bedroom and hallway, discovers mold growth behind the bathroom wall extending into the
        bedroom, and determines the subfloor in all three areas is saturated and needs replacement.
        The contractor&apos;s estimate: $34,000.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What type of dispute is this?</strong> Primarily scope. The carrier is not saying it
        is cheaper to remediate mold and replace subfloor &mdash; they are saying the damage does
        not extend beyond the bathroom. The evidence needed is moisture mapping data, mold testing
        results, photographs of the hidden damage revealed through destructive testing, and an
        industrial hygienist&apos;s report.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        However, even within the bathroom &mdash; where scope is agreed &mdash; there may also be a
        price component. If the carrier&apos;s $8,500 bathroom estimate uses below-market pricing
        for the agreed bathroom scope, that portion is a price dispute. The homeowner should address
        both: fight the scope issue with physical evidence, and fight the pricing issue with market
        data.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line: Control the Framing
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important thing you can do in any insurance claim dispute is control the
        framing. The carrier will try to characterize the dispute in whatever way benefits them. If
        they cannot win the scope argument, they will shift to price. If they cannot win on price,
        they will reintroduce scope questions. If they can keep the dispute muddled, they can
        keep you off balance and delay resolution indefinitely.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You fight back by being precise. In every letter, every email, every phone conversation with
        the carrier, clearly state which dispute you are addressing:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          &quot;We are requesting a reinspection because the carrier&apos;s adjuster failed to
          identify damage in the following areas. This is a scope dispute.&quot;
        </li>
        <li>
          &quot;We agree on the scope of work. The carrier&apos;s pricing does not reflect market
          conditions. Enclosed are three contractor bids. This is a price dispute, and we are
          invoking appraisal.&quot;
        </li>
        <li>
          &quot;Items 1 through 12 on the enclosed comparison are scope disputes &mdash; the
          carrier has failed to include necessary repairs. Items 13 through 20 are price disputes
          &mdash; the carrier&apos;s unit costs are below market. We address each category
          separately below.&quot;
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you control the framing, you force the carrier to respond to your argument rather than
        their own. You choose the evidence, the experts, and the resolution path. And you make it
        much harder for the carrier to muddy the waters with the kind of deliberate confusion that
        costs policyholders millions of dollars every year.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Scope and price are two different fights. Know which one you are in. Fight it with the right
        weapons. And do not let the carrier convince you they are the same thing.
      </p>
    </>
  )
}
