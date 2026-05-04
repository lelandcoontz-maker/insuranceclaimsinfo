import Link from 'next/link'

export const meta = {
  title: 'How to Challenge an Xactimate Estimate: A Step-by-Step Guide',
  description:
    'A practical guide for policyholders, public adjusters, and attorneys on identifying errors in an insurance carrier&apos;s Xactimate estimate and building an effective challenge.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A practical guide for policyholders, public adjusters, and attorneys on identifying errors
          in an insurance carrier&apos;s Xactimate estimate and building an effective challenge.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You just received the insurance company&apos;s estimate for your fire-damaged kitchen. The
        adjuster was polite, spent forty-five minutes in your home, and told you the company would
        &quot;take care of everything.&quot; Two weeks later, an envelope arrives. Inside is a dense,
        multi-page document full of codes, line items, and numbers that might as well be written in
        another language. The bottom line says $38,000. Your contractor says the job is $67,000. The
        gap between those two numbers is not a rounding error &mdash; it is the difference between a
        proper repair and a half-finished project that leaves your family in a home that was never
        fully restored.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That estimate was almost certainly produced using Xactimate, a software platform made by
        Verisk (formerly Xactware Solutions). And while there is nothing inherently wrong with
        Xactimate as a tool, the way it is used &mdash; and misused &mdash; by insurance carriers has
        turned it into one of the most effective mechanisms for systematically underpaying property
        insurance claims in the United States.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This guide will walk you through what Xactimate actually is, what it is not, and how to
        identify and challenge the errors that may be costing you tens of thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Xactimate Is &mdash; and What It Is Not
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">A Tool, Not an Authority</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is estimating software. It is a program that allows a user to input measurements,
        select materials, choose labor categories, and generate a cost estimate for construction and
        repair work. It is used by insurance carriers, independent adjusters, public adjusters,
        contractors, and restoration companies across the country.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What Xactimate is <em>not</em> is an oracle. It does not independently determine the cost of
        your repair. It does not assess damage. It does not interpret your insurance policy. It does
        not decide what is owed. Every single number on an Xactimate estimate is the product of
        choices made by the person who created it &mdash; the adjuster, the desk reviewer, or the
        estimator sitting in a cubicle who may never have set foot on your property.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster chose the measurements. The adjuster chose the line items. The adjuster chose
        the labor efficiency setting. The adjuster chose whether to include overhead and profit. The
        adjuster chose the material specifications. Every one of those choices directly affects the
        bottom line, and every one of them can be wrong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Garbage In, Garbage Out</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate operates on a simple principle that applies to all software: the output is only as
        reliable as the input. If the adjuster measured your roof at 22 squares when it is actually
        28 squares, Xactimate will faithfully generate an estimate that is short by six squares of
        roofing. If the adjuster selected &quot;builder-grade laminate&quot; when your kitchen had
        custom tile, Xactimate will price builder-grade laminate. The software does not know the
        difference. It does what it is told.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is precisely why challenging an Xactimate estimate is not a matter of arguing with a
        computer. It is a matter of examining the human decisions that went into the estimate and
        identifying where those decisions were wrong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Policy Controls, Not the Software
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Nothing in a standard homeowners insurance policy &mdash; whether it is an HO-3, HO-5, or
        any other form &mdash; references Xactimate or authorizes an insurer to limit its obligations
        to whatever figure a third-party software program generates. The policy is the contract. The
        policy defines what is covered, how losses are valued, and what the insurer owes. As one
        commentator put it plainly: &quot;Xactimate is not the law.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the measure of recovery for a covered property loss is the amount it
        would cost to repair or replace the damaged property to its pre-loss condition. (Cal. Ins.
        Code &sect; 2051; Cal. Ins. Code &sect; 2051.5.) The carrier cannot satisfy this obligation
        by pointing to a software-generated number that does not actually reflect what the repair
        will cost.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Xactimate EULA: An Admission Most Adjusters Have Never Read
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful tools available when challenging an Xactimate estimate is the very
        document that governs the use of the software itself: the End User License Agreement (EULA).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">What the EULA Actually Says</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Xactware EULA, published by Verisk at{' '}
        <a
          href="https://www.verisk.com/privacy-policies/xactware-eula/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          verisk.com/privacy-policies/xactware-eula
        </a>
        , contains language that directly undermines the way carriers present their Xactimate
        estimates as authoritative statements of repair cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 12.3 of the EULA states plainly:{' '}
        <strong>
          &quot;We do not warrant the accuracy of pricing information in the Price Data.&quot;
        </strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read that again. The company that makes Xactimate &mdash; the company that maintains the
        pricing database &mdash; does not guarantee that its prices are accurate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The EULA further clarifies that Xactimate pricing is &quot;intended to represent historical
        information and should be used as a baseline or place to begin creation of an estimate.&quot;
        In other words, Verisk itself describes its prices as a <em>starting point</em>, not a final
        answer.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The EULA also acknowledges that local market conditions may vary from the prices contained in
        the database. This is a significant admission. It means that even when the software is used
        correctly, the prices it generates may not reflect what repairs actually cost in your
        specific market.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Why This Matters</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier presents its Xactimate estimate as the definitive word on what your repair
        should cost, it is representing the output of a tool whose own manufacturer says the prices
        are not guaranteed, are based on historical data, and may not reflect local market
        conditions. This creates a powerful argument &mdash; both in negotiation and in litigation
        &mdash; that the carrier cannot hide behind Xactimate to justify an underpayment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When challenging an estimate, consider printing the relevant sections of the EULA and
        attaching them to your written demand. It is difficult for an adjuster to argue that
        Xactimate prices are gospel when Verisk itself says otherwise.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The RIA Advocacy on EULA Language
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Restoration Industry Association (RIA) has actively engaged with Verisk over EULA
        language, successfully advocating for the restoration of key disclaimers that clarify
        Xactimate prices are not definitive market values and that users should adapt prices based on
        actual market conditions related to a particular job. This history of advocacy further
        demonstrates that the industry itself does not regard Xactimate pricing as final or
        authoritative.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Errors to Look For</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive a carrier&apos;s Xactimate estimate, treat it like opposing counsel&apos;s
        brief: read it carefully, assume nothing, and check everything. Below are the most common
        categories of errors.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Wrong Labor Efficiency Settings
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most consequential &mdash; and least understood &mdash; errors in carrier
        estimates. Xactimate allows the estimator to select different labor efficiency settings that
        dramatically affect pricing across every labor line item in the estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">The key settings include:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Restoration/Service/Remodel</strong>: This setting reflects the reality of repair
          work &mdash; jobs that involve drive time, mobilization costs, material delivery to an
          occupied structure, reduced productivity due to working around existing finishes and
          contents, and the inherent inefficiency of restoration and remodeling work. This is the
          appropriate setting for the vast majority of insurance repair claims.
        </li>
        <li>
          <strong>Large Restoration/Remodel</strong>: A newer setting introduced by Verisk,
          positioned between the standard Restoration/Remodel and Total Rebuild settings. This
          setting reduces labor pricing by approximately 5-10% compared to the standard
          Restoration/Remodel setting. It is designed for larger projects that are more accessible
          but still involve the complexities of restoration work.
        </li>
        <li>
          <strong>Total Rebuild or Similar</strong>: This setting reflects new construction
          efficiency &mdash; large-scale work on unoccupied structures where crews have unrestricted
          access, can schedule freely, and operate at maximum productivity. This setting produces the
          lowest labor costs.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the problem: when a carrier&apos;s adjuster selects &quot;Total Rebuild&quot; or
        even &quot;Large Restoration/Remodel&quot; for a project that is actually a restoration or
        repair job in an occupied home, every single labor line item in the estimate is reduced. The
        cumulative effect can undervalue the labor component of the entire estimate by 15-30%. On a
        $60,000 repair, that is $9,000 to $18,000 that disappears from the estimate with a single
        setting change.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        As Verisk&apos;s own documentation states, estimators must use &quot;their experience,
        skill, and knowledge to determine appropriate items, labor efficiency, and pricing.&quot; The
        choice of labor efficiency setting is a judgment call &mdash; and it is a judgment call that
        can be challenged.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Check the labor efficiency setting on the carrier&apos;s
        estimate. It is typically shown in the estimate parameters or profile settings. If it is set
        to anything other than Restoration/Service/Remodel for a standard repair job, flag it
        immediately.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">2. Missing Line Items</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most straightforward category of error, and often the most significant in dollar
        terms. The adjuster simply did not include work that needs to be done.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Common examples include:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Failure to scope adjacent or related damage (e.g., water damage to framing behind
          fire-damaged drywall)
        </li>
        <li>
          Omitting detach-and-reset items (removing and reinstalling fixtures, appliances, or trim
          that must be moved to complete the repair)
        </li>
        <li>Ignoring protection of adjacent surfaces during construction</li>
        <li>
          Failing to include content manipulation (moving furniture and belongings to access repair
          areas)
        </li>
        <li>Omitting cleaning, HVAC duct cleaning, or odor remediation</li>
        <li>Leaving out temporary housing or additional living expenses during repairs</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Walk the property with a qualified contractor or public adjuster
        and create a comprehensive scope. Compare it line by line against the carrier&apos;s
        estimate. Every missing item should be documented and included in your supplemental demand.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">3. Wrong Measurements</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Measurement errors are surprisingly common, particularly when the carrier&apos;s adjuster
        used Xactimate&apos;s sketching tools without adequate field verification or relied on aerial
        imagery for roof measurements.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Common measurement errors include:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Roof area understated (failing to account for waste, pitch factor, or complex geometry)
        </li>
        <li>Room dimensions that do not match actual measurements</li>
        <li>Linear footage errors on trim, baseboards, or crown molding</li>
        <li>Failure to measure areas that are difficult to access</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Take your own measurements. For roofs, obtain a professional
        measurement report (companies like EagleView and GAF QuickMeasure provide aerial measurement
        services, or measure the roof yourself). For interiors, measure every room. Compare your
        measurements against the carrier&apos;s sketch.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Missing Overhead and Profit (O&amp;P)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and profit &mdash; typically 10% overhead and 10% profit, applied to the total
        estimate &mdash; represent the general contractor&apos;s compensation for managing,
        coordinating, and supervising the project. Carriers routinely omit O&amp;P from their
        estimates, and the fight over O&amp;P is one of the most common disputes in property
        insurance claims.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This issue is significant enough that it warrants its own section below.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Incorrect Material Specifications
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate contains thousands of line items for different materials at different quality
        levels. When the carrier&apos;s adjuster selects a lower-grade material than what was
        actually installed in your property, every affected line item is underpriced.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Common examples include:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Using builder-grade carpet pricing for high-end or custom carpet</li>
        <li>
          Selecting standard three-tab shingle pricing when the roof had architectural or designer
          shingles
        </li>
        <li>Pricing standard ceramic tile when the home had natural stone or custom tile</li>
        <li>Using stock-grade cabinetry pricing for semi-custom or custom cabinets</li>
        <li>Selecting standard plumbing fixtures when the home had high-end fixtures</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the insurer&apos;s estimate must be &quot;of an amount which will
        restore the damaged property to no less than its condition prior to the loss.&quot; (10 CCR
        &sect; 2695.9(a)(1)(B).) If your home had custom finishes, the estimate must reflect the
        cost of custom finishes &mdash; not the cheapest alternative the adjuster can find in the
        Xactimate database.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Document what was actually in your home before the loss.
        Photographs, receipts, contractor records, and homeowner testimony all serve as evidence of
        pre-loss condition. For each material that is mispriced, identify the correct Xactimate line
        item or provide actual pricing from suppliers.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">6. Depreciation Errors</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For claims paid on an actual cash value (ACV) basis &mdash; which is usually the initial
        payment, even under a replacement cost policy &mdash; the carrier will deduct depreciation
        from the estimate. Depreciation errors are extremely common and take several forms:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Depreciating items that should not be depreciated</strong>: Labor, for instance,
          does not wear out over time. Some carriers depreciate labor costs alongside material costs,
          effectively double-dipping. Many jurisdictions, including California, do not permit
          depreciation of labor. (See <em>Essa v. Security Ins. Co. of Hartford</em>, Cal. Ct. App.
          2024, holding that labor costs may not be depreciated under California law.)
        </li>
        <li>
          <strong>Using incorrect useful life figures</strong>: Xactimate allows the adjuster to set
          the useful life for materials. If the adjuster assigns a 15-year useful life to a roof
          that has a 30-year manufacturer warranty, the depreciation will be roughly double what it
          should be.
        </li>
        <li>
          <strong>Applying depreciation uniformly</strong>: Not all components of a repair
          depreciate at the same rate. A 20-year-old home may have a roof that is near end of life
          but cabinets that are in excellent condition. Blanket depreciation percentages ignore these
          differences.
        </li>
        <li>
          <strong>Failing to account for maintenance</strong>: A well-maintained component
          depreciates more slowly than one that has been neglected. The condition of the item at the
          time of loss matters.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Review every depreciation line in the estimate. Check the
        useful life assigned to each category. Verify that labor is not being depreciated. Compare
        the depreciation percentages against industry standards and the actual condition of the
        property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">7. Missing Code Upgrades</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a property is repaired, the work must comply with current building codes &mdash; not
        the codes that were in effect when the home was originally built. If the building code has
        changed since original construction, the cost of bringing the repaired areas up to current
        code is an additional expense that should be reflected in the estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Common code upgrade items include:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Electrical upgrades (GFCI outlets, arc-fault breakers, updated panel requirements)
        </li>
        <li>Plumbing upgrades (water heater strapping, backflow prevention)</li>
        <li>
          Energy code compliance (insulation requirements, window specifications, HVAC efficiency
          standards)
        </li>
        <li>Structural upgrades (seismic bracing, hurricane straps in applicable areas)</li>
        <li>Fire safety upgrades (smoke detectors, fire sprinklers in some jurisdictions)</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners policies include Ordinance or Law coverage (sometimes called Code Upgrade
        coverage) as an endorsement, providing additional coverage &mdash; typically 10%, 25%, or
        50% of the dwelling limit &mdash; specifically for code-mandated upgrades. Yet carriers
        routinely fail to include code upgrade costs in their estimates.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Have your contractor or a code consultant identify all
        applicable code changes since original construction. Prepare a separate code upgrade
        estimate in Xactimate. Submit it under the Ordinance or Law endorsement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        8. Wrong Geographic Pricing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate uses pricing databases that are updated monthly and organized by geographic
        region, typically by ZIP code. The prices are based on surveys of labor and material costs in
        specific areas.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Errors occur when:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The estimate uses the wrong ZIP code</li>
        <li>
          The pricing database does not reflect actual costs in your market (particularly after
          catastrophic events when demand drives prices up)
        </li>
        <li>The carrier uses pricing from a lower-cost region</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations require that the insurer
        &quot;take reasonable steps to verify that the repair or rebuilding costs utilized by the
        insurer or its claims agents are accurate and representative of costs in the local market
        area.&quot; (10 CCR &sect; 2695.9(d).) If the carrier&apos;s Xactimate pricing does not
        match what local contractors actually charge, the carrier is not meeting this standard.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: Check the ZIP code on the carrier&apos;s estimate (it appears
        in the estimate profile). Compare Xactimate&apos;s unit prices against actual bids from
        local contractors. After catastrophic events, document market pricing with multiple
        contractor bids to demonstrate that Xactimate&apos;s database has not kept pace with actual
        costs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The O&amp;P Fight</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Overhead and Profit Is Owed
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The dispute over general contractor overhead and profit is one of the most common &mdash;
        and most consequential &mdash; battles in property insurance claims. O&amp;P typically adds
        20% to the base estimate (10% overhead + 10% profit), so the carrier has a significant
        financial incentive to deny it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk&apos;s own white paper on overhead and profit, published at{' '}
        <a
          href="https://www.verisk.com/49fdda/siteassets/media/downloads/property-estimating/overhead-and-profit.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          verisk.com
        </a>
        , makes clear that general overhead expenses are not included in Xactimate&apos;s unit
        pricing. These costs &mdash; which include a contractor&apos;s general and administrative
        expenses, office rent, utilities, office staff salaries, insurance, licensing, and
        advertising &mdash; are separate from the line-item prices in the estimate and must be added
        to reflect the actual cost of a contractor performing the work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The general standard for when O&amp;P is owed is this:{' '}
        <strong>
          when a general contractor is reasonably likely to be needed to coordinate and complete the
          repair, O&amp;P must be included in the estimate.
        </strong>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &quot;Three Trades&quot; Benchmark
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A commonly referenced benchmark &mdash; sometimes called the &quot;three trades rule&quot;
        &mdash; holds that when a repair requires the coordination of three or more trades (e.g., a
        roofer, an electrician, and a drywall contractor), a general contractor is reasonably
        necessary to manage the project, and O&amp;P is therefore owed.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        While this benchmark has been widely used in the industry, it is important to understand
        that it is a guideline, not a legal standard. The actual legal test, as articulated in
        several key decisions, is whether the use of a general contractor is &quot;reasonably
        likely&quot;:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          In <strong>Trinidad v. Florida Peninsula Insurance Co.</strong> (Fla. 2013), the Florida
          Supreme Court held that general contractor overhead and profit is &quot;a necessary
          component&quot; of an insurer&apos;s obligations under a replacement cost policy, and that
          it must be paid &quot;where it is reasonably likely a general contractor would be
          needed.&quot; The court explicitly declined to adopt a rigid &quot;three trade&quot; rule.
        </li>
        <li>
          In{' '}
          <strong>
            Windridge of Naperville Condo. Ass&apos;n v. Philadelphia Indemnity Insurance Co.
          </strong>{' '}
          (N.D. Ill. 2017), the court held that if a general contractor is required to repair or
          replace the damaged property, the insurer must pay the overhead and profit components of
          the general contractor&apos;s charges.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Carrier&apos;s Argument &mdash; and Why It Fails
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&quot;The policyholder hasn&apos;t hired a general contractor yet.&quot;</strong>{' '}
          This argument confuses the question. Under a replacement cost policy, the insurer must pay
          what it will cost to repair the property. If a GC is reasonably necessary, the cost
          includes O&amp;P &mdash; regardless of whether the policyholder has signed a contract yet.
        </li>
        <li>
          <strong>&quot;The policyholder can hire the trades directly.&quot;</strong> Most homeowners
          are not qualified to act as their own general contractor, and they should not be expected
          to. The cost of repair includes the cost of professional coordination.
        </li>
        <li>
          <strong>&quot;The job only involves two trades.&quot;</strong> Even if a project involves
          fewer than three trades, a general contractor may still be reasonably necessary depending
          on the complexity of the work, the need for permits and inspections, and the
          policyholder&apos;s ability to manage the project.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do</strong>: If the carrier&apos;s estimate omits O&amp;P and your repair
        involves multiple trades or any significant complexity, demand that O&amp;P be added. Cite
        Verisk&apos;s own documentation acknowledging that general overhead is not included in
        line-item pricing. Provide your general contractor&apos;s bid showing O&amp;P as a separate
        line item.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Build Your Challenge</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 1: Get the ESX File</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The first and most critical step is requesting the carrier&apos;s native Xactimate file
        &mdash; the ESX file &mdash; not just the PDF printout.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        An ESX file is a compressed archive that contains the complete estimate, including the
        sketch, all line items, notes, photos, estimate parameters, labor efficiency settings, and
        any internal comments the adjuster may have entered. A PDF printout may obscure or omit much
        of this information.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have a right to receive the documents upon which the carrier&apos;s settlement is based.
        Under California&apos;s Fair Claims Settlement Practices Regulations, &quot;if losses are
        settled on the basis of a written scope and/or estimate prepared by or for the insurer, the
        insurer shall supply the claimant with a copy of each document upon which the settlement is
        based.&quot; (10 CCR &sect; 2695.9(b).) The ESX file is the document &mdash; the PDF is
        merely a printout of it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Put your request in writing:</p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-600 mb-6">
        &quot;Please provide a copy of the native Xactimate file (.ESX format) for claim number [X],
        including all associated sketches, notes, photographs, and estimate parameters. A PDF
        printout is not sufficient, as it does not contain the complete data necessary for a thorough
        review of your estimate.&quot;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier refuses to provide the ESX file, document the refusal. It may become relevant
        in a bad faith context.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Conduct a Line-by-Line Comparison
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have the carrier&apos;s ESX file, import it into your own copy of Xactimate (or
        have your public adjuster or estimator do so). Then create your own estimate of the same
        loss and compare the two line by line.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">For each discrepancy, document:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The specific line item code</li>
        <li>
          The carrier&apos;s quantity and unit price versus your quantity and unit price
        </li>
        <li>
          The reason for the discrepancy (wrong measurement, missing item, wrong material, wrong
          labor setting, etc.)
        </li>
        <li>The dollar impact of the discrepancy</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        This comparison becomes the foundation of your written challenge.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Document Market Pricing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate pricing is based on historical survey data. It may not reflect current market
        conditions, particularly after catastrophic events when labor and material costs spike.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Obtain actual bids from licensed, local contractors. These bids serve two purposes:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>They demonstrate the actual cost of repair in the local market.</li>
        <li>
          They provide independent evidence that the carrier&apos;s estimate is insufficient.
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.9(d), the carrier is required to verify that its repair costs are
        &quot;accurate and representative of costs in the local market area.&quot; If actual
        contractor bids consistently exceed Xactimate pricing, the carrier&apos;s estimate does not
        meet this standard.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Reference Verisk&apos;s Own Documentation
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk publishes white papers and documentation on its pricing methodology, labor efficiency
        settings, overhead and profit, and depreciation. These documents are publicly available and
        can be used to hold the carrier accountable for how it uses the software.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Key Verisk resources include:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Overhead and Profit White Paper</strong>: Confirms that general overhead is not
          included in unit pricing
        </li>
        <li>
          <strong>Labor Efficiencies Design Document</strong>: Explains the different labor
          efficiency settings and when each is appropriate
        </li>
        <li>
          <strong>Labor Productivity in Xactimate Pricing</strong>: Details how labor rates are
          calculated
        </li>
        <li>
          <strong>Xactimate Pricing Methodology Summary</strong>: Describes how prices are surveyed
          and updated
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier misuses a setting or misapplies Xactimate&apos;s methodology, Verisk&apos;s
        own documentation becomes evidence against the carrier&apos;s position.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Present Your Challenge in Writing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Always &mdash; always &mdash; present your challenge in writing. Phone calls are useful for
        building rapport and understanding the adjuster&apos;s position, but they are not a
        substitute for a written demand that creates a clear record.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your written challenge should include:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>A summary of the claim and the carrier&apos;s current estimate</li>
        <li>Your revised estimate (in Xactimate format, if possible)</li>
        <li>A line-by-line comparison identifying each discrepancy</li>
        <li>
          Supporting documentation (contractor bids, measurements, photographs, material
          specifications)
        </li>
        <li>Reference to applicable law and regulations</li>
        <li>A specific dollar demand</li>
        <li>A reasonable deadline for response</li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        Send your challenge via email with delivery confirmation, or via certified mail. Keep copies
        of everything.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Carrier Will Not Budge
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have submitted a detailed, well-documented challenge. The carrier has responded with a
        form letter reaffirming its original estimate, or worse, has not responded at all. What now?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Invoke the Appraisal Clause
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most property insurance policies contain an appraisal clause that provides a mechanism for
        resolving disputes over the amount of a loss. Under California Insurance Code Sections
        2070-2071, standard fire insurance policies must include an appraisal provision.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The appraisal process works as follows:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Either party (you or the insurer) demands appraisal in writing.</li>
        <li>Each party selects an independent appraiser.</li>
        <li>The two appraisers attempt to agree on the amount of loss.</li>
        <li>If they cannot agree, they select a neutral umpire.</li>
        <li>
          Agreement by any two of the three (both appraisers, or one appraiser and the umpire) is
          binding.
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">Appraisal has several advantages:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>It is faster and less expensive than litigation.</li>
        <li>
          It is binding, which means the carrier cannot simply ignore the result.
        </li>
        <li>
          It is focused exclusively on the amount of loss, which is exactly what an Xactimate
          dispute involves.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        However, appraisal has limitations. It addresses only the amount of the loss &mdash; not
        coverage questions, policy interpretation, or bad faith. And the parties must have made a
        genuine effort to resolve the dispute before invoking appraisal.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Important</strong>: Select your appraiser carefully. Choose someone with deep
        experience in Xactimate estimating and construction costs, not just a licensed appraiser who
        primarily handles real estate valuations. The appraiser you select will be your advocate in
        the process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        File a Department of Insurance Complaint
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, you can file a complaint with the California Department of Insurance (CDI)
        online at{' '}
        <a
          href="https://www.insurance.ca.gov/01-consumers/101-help/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          insurance.ca.gov
        </a>{' '}
        or by calling the consumer hotline at 1-800-927-4357.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A CDI complaint triggers a formal review. The department forwards your complaint to the
        insurer, which is required to respond with an explanation and supporting documentation. The
        CDI evaluates whether the insurer&apos;s conduct complied with California&apos;s Fair Claims
        Settlement Practices Regulations.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A CDI complaint is particularly effective when the carrier&apos;s conduct violates specific
        regulatory requirements, such as:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Failing to provide a copy of the estimate upon which settlement is based (10 CCR &sect;
          2695.9(b))
        </li>
        <li>
          Using repair costs that are not representative of the local market (10 CCR &sect;
          2695.9(d))
        </li>
        <li>
          Failing to provide a reasonable explanation for denying or reducing a claim (10 CCR &sect;
          2695.7(b)(1))
        </li>
        <li>
          Failing to accept or deny a claim within 40 days of receiving proof of claim (10 CCR
          &sect; 2695.7(b))
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        While the CDI does not adjudicate individual claims, a substantiated complaint creates a
        regulatory record that can be valuable in subsequent proceedings.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Understand the Bad Faith Implications
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier refuses to adjust an estimate that contains demonstrable errors &mdash; wrong
        measurements, inappropriate labor settings, missing line items, omitted O&amp;P &mdash; the
        refusal raises questions that extend beyond the amount of the claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, every insurance policy includes an implied covenant of good faith and
        fair dealing. (Cal. Ins. Code &sect; 790.03(h);{' '}
        <em>Egan v. Mutual of Omaha Ins. Co.</em>, 24 Cal.3d 809 (1979).) A carrier that knowingly
        relies on a flawed estimate to underpay a claim &mdash; or that refuses to correct known
        errors &mdash; may be exposing itself to a bad faith claim, which can result in damages far
        exceeding the original claim value.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Unfair Insurance Practices Act (Cal. Ins. Code &sect; 790.03(h))
        identifies specific practices that constitute bad faith, including:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Not attempting in good faith to effectuate prompt, fair, and equitable settlements of
          claims in which liability has become reasonably clear
        </li>
        <li>
          Compelling insureds to institute litigation to recover amounts due under an insurance
          policy by offering substantially less than the amounts ultimately recovered in actions
          brought by such insureds
        </li>
        <li>
          Failing to promptly provide a reasonable explanation of the basis in the insurance policy
          for the denial or offer of a compromise settlement
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The significance of these provisions in the Xactimate context cannot be overstated. When a
        carrier&apos;s own estimating tool contains settings and parameters that produce a lower
        number based on choices that do not match the facts of the loss, and the carrier refuses to
        correct those choices when confronted with evidence, the carrier&apos;s conduct begins to
        look less like a good-faith disagreement over value and more like a systematic practice of
        underpayment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For attorneys evaluating these claims, the discovery phase can be particularly revealing.
        Requesting the carrier&apos;s internal guidelines for Xactimate settings, training materials
        for adjusters, and any directives regarding labor efficiency, O&amp;P, or depreciation can
        illuminate whether the errors in a particular estimate are isolated mistakes or reflections
        of company-wide practices.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Litigation</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When negotiation, appraisal, and regulatory complaints have not resolved the dispute,
        litigation remains available. In California, a policyholder can bring a breach of contract
        claim for the unpaid benefits and a tort claim for breach of the implied covenant of good
        faith and fair dealing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A bad faith action allows recovery of:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The full contract damages (the unpaid claim benefits)</li>
        <li>Consequential damages (costs incurred as a result of the underpayment)</li>
        <li>Emotional distress damages</li>
        <li>Punitive damages (in cases of particularly egregious conduct)</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Egan v. Mutual of Omaha</em>, the California Supreme Court upheld an award of $5
        million in punitive damages against a carrier that failed to conduct a thorough, unbiased
        investigation before denying a claim. While not every Xactimate dispute rises to that level,
        the case illustrates the potential consequences when a carrier&apos;s claims handling falls
        below the standard of good faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Policyholders
      </h2>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not accept the first estimate without review.</strong> The carrier&apos;s
          initial estimate is a starting point, not a final offer &mdash; even if the carrier
          presents it as one.
        </li>
        <li>
          <strong>Hire a public adjuster or an attorney early.</strong> If the gap between the
          carrier&apos;s estimate and actual repair costs is significant, professional representation
          often pays for itself many times over.
        </li>
        <li>
          <strong>Document everything.</strong> Photograph damage before any repairs. Keep every
          communication with the carrier. Save every version of every estimate. Maintain a written
          log of every phone call, including the date, time, and the name of the person you spoke
          with.
        </li>
        <li>
          <strong>
            Do not sign a release or accept a &quot;final&quot; payment without understanding what
            you are giving up.
          </strong>{' '}
          Some carriers will issue a payment with language suggesting it is &quot;full and final
          settlement.&quot; Cashing that check may not waive your rights, but it is better to
          address the language before depositing the funds.
        </li>
        <li>
          <strong>Understand recoverable depreciation.</strong> If you have a replacement cost
          policy, the carrier&apos;s initial payment is typically actual cash value (replacement cost
          minus depreciation). You are entitled to recover the depreciation once repairs are
          completed. Do not leave this money on the table.
        </li>
        <li>
          <strong>Get multiple contractor bids.</strong> Three bids from licensed, local contractors
          provide strong evidence of actual market pricing and make it much harder for the carrier to
          argue that its Xactimate estimate reflects reality.
        </li>
        <li>
          <strong>Know your policy.</strong> Read your declarations page and your policy form.
          Understand your coverage limits, your deductible, your Ordinance or Law coverage, and your
          appraisal clause. Knowledge of your own policy is your most basic and most important tool.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">A Note for Attorneys</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are representing a policyholder in a property insurance dispute, the Xactimate file
        is one of the most important pieces of evidence you can obtain.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">In discovery, request:</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The native ESX file(s) for every version of the carrier&apos;s estimate
        </li>
        <li>
          The carrier&apos;s internal Xactimate guidelines and estimating standards
        </li>
        <li>Training materials provided to adjusters regarding Xactimate settings</li>
        <li>
          Any corporate directives regarding labor efficiency settings, O&amp;P, depreciation
          methodology, or material specifications
        </li>
        <li>The adjuster&apos;s field notes, photographs, and measurements</li>
        <li>Any internal communications referencing the estimate or the claim</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file will reveal not only the line items and prices but also the estimate
        parameters, profile settings, labor efficiency selections, and any notes or comments entered
        by the adjuster. These details are often not visible on the PDF printout and can provide
        critical evidence of how and why the estimate was constructed the way it was.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pay particular attention to whether the carrier&apos;s estimating practices are consistent
        across claims. If you can demonstrate that the carrier systematically uses labor efficiency
        settings, depreciation methodologies, or O&amp;P exclusions that undervalue claims as a
        matter of corporate practice, you may have a basis for a broader bad faith claim and,
        potentially, class-wide relief.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Conclusion</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        An Xactimate estimate is not a verdict. It is a document created by a person who made
        choices &mdash; about measurements, materials, labor, overhead, depreciation, and code
        compliance &mdash; that may or may not be correct. The software itself does not guarantee
        accuracy. Its own manufacturer says so in the EULA.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive an Xactimate estimate from your insurance carrier, you have every right to
        examine it, question it, and challenge it. The tools are available: request the ESX file,
        compare it against your own estimate, document actual market costs, and present your
        challenge in writing. If the carrier will not budge, invoke appraisal, file a regulatory
        complaint, or pursue litigation.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between the carrier&apos;s estimate and the actual cost of repair is not a matter of
        opinion. It is a matter of facts &mdash; facts that can be identified, documented, and
        proven. The carrier may have Xactimate on its side, but you have the policy, the law, and
        the truth about what your repair actually costs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          This article is for informational purposes only and does not constitute legal advice. If
          you believe your insurance claim has been underpaid, consult with a licensed public
          adjuster or an attorney experienced in insurance coverage disputes.
        </em>
      </p>
    </>
  )
}
