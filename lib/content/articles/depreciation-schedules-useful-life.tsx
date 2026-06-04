import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Depreciation Schedules and Useful Life: How Insurance Companies Reduce Your Payment',
  description:
    'How insurance carriers use depreciation schedules and useful life determinations to reduce claim payouts, why these numbers are often arbitrary and skewed against policyholders, and how to challenge them under California Insurance Code Section 2051.',
  summary:
    'Insurers cut payments using depreciation schedules and \'useful life\' estimates that are often arbitrary and skewed against policyholders. Under California Insurance Code Section 2051, depreciation must be reasonable and based on actual condition, so excessive depreciation can be challenged.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California depreciation rules by a Licensed
          California Public Adjuster. It is not legal advice. California&rsquo;s ACV and
          depreciation framework is statutory (Cal. Ins. Code &sect; 2051(b)), and depreciation
          disputes are fact-specific. For legal questions, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company processes a property claim, one of the most consequential
        calculations it performs is the depreciation deduction. This deduction &mdash; the difference
        between what it would cost to replace your damaged property today and what the insurer
        actually pays you &mdash; is driven almost entirely by two numbers: the &quot;useful
        life&quot; the carrier assigns to each item and the age of the item at the time of loss.
        These numbers can reduce your payout by thousands or even tens of thousands of dollars. And
        yet, the process by which carriers arrive at them is far less scientific than most
        policyholders realize.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines how carriers assign useful life and calculate depreciation, why those
        assignments are frequently arbitrary and skewed against policyholders, what California law
        actually requires, and what you can do to challenge depreciation that does not reflect the
        actual condition of your property.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Depreciation Is in Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation in insurance is the reduction in value of property due to age, wear, and
        condition. When your property is damaged or destroyed, the insurer determines the{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          Replacement Cost Value (RCV)
        </Link>{' '}
        &mdash; what it would cost to repair or replace the damaged item with materials of like kind
        and quality at current prices. The insurer then subtracts depreciation from the RCV to arrive
        at the Actual Cash Value (ACV). The difference between RCV and ACV is the depreciation
        deduction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a{' '}
        <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] underline">
          replacement cost policy
        </Link>
        , the initial payment is typically made at ACV, with the remaining depreciation (called
        recoverable depreciation) paid after you complete repairs. If your policy pays on an ACV-only
        basis, the depreciated amount is all you receive &mdash; ever. In either scenario, the
        depreciation calculation directly determines how much money you receive, and when.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The depreciation formula most carriers use is called straight-line depreciation. The carrier
        assigns each component a &quot;useful life&quot; in years, determines how old the component
        is, and calculates the percentage of useful life that has been consumed. If the carrier
        assigns a roof a useful life of 20 years and the roof is 10 years old, the depreciation is
        50 percent. On a $30,000 roof replacement, that means $15,000 is withheld from the ACV
        payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This formula appears objective. But its fairness depends entirely on whether the useful life
        assignment is accurate and whether the depreciation methodology complies with the law. That
        is where the problems begin.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Insurance Code Section 2051: The Statutory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051 is the statute that governs how depreciation is
        calculated on property claims in California. It provides the measure of recovery for actual
        cash value losses and imposes three critical requirements that carriers routinely ignore.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a partial loss to the structure or contents, &sect; 2051(b)(2) defines the measure of
        actual cash value recovery as &quot;the amount it would cost the insured to repair,
        rebuild, or replace the damaged or destroyed property, less a fair and reasonable
        deduction for physical depreciation based upon its condition at the time of the injury
        or the policy limit, whichever is less.&quot; The same subsection then adds two
        policyholder-protective limits: a deduction for physical depreciation &quot;shall apply
        only to components of a structure that are normally subject to repair and replacement
        during the useful life of that structure,&quot; and &mdash; under the language added by
        AB 188 (Stats. 2018, ch. 627), effective January 1, 2019 &mdash; &quot;the deduction for
        physical depreciation shall not include any labor costs that would be incurred to repair,
        rebuild, or replace the damaged or destroyed property.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These three provisions &mdash; condition-based depreciation, the restriction to components
        normally subject to repair and replacement, and the express prohibition on depreciating
        labor &mdash; create a legal framework that is far more favorable to policyholders than
        most carriers acknowledge. Let us examine each.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;Based Upon Its Condition at the Time of the Injury&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This language means the carrier cannot simply look at the age of a component and apply a
        formula. Depreciation must be based on the actual physical condition of the property, not an
        abstract schedule driven by age alone. A well-maintained 20-year-old roof with 10 years of
        remaining useful life should not be depreciated the same as a neglected 20-year-old roof with
        curling shingles and missing granules. The statute requires an individualized assessment of
        the property&apos;s actual condition &mdash; something that most carriers fail to perform.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, adjusters rarely document the condition of components before applying
        depreciation. They plug a useful life number into their estimating software, enter the age,
        and let the system calculate the deduction. The &quot;condition at the time of loss&quot;
        requirement is treated as though it does not exist.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;Components Normally Subject to Repair and Replacement&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This provision is equally critical and even more frequently overlooked. Depreciation may
        only be applied to components that are &quot;normally subject to repair and replacement
        during the useful life of that structure.&quot; A component that is designed to last the
        life of the structure &mdash; that would not normally be repaired or replaced unless
        damaged by a covered event &mdash; should not be depreciated at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider what this means in practice. Structural framing lumber is not &quot;normally
        subject to repair and replacement&quot; &mdash; no homeowner replaces their wall studs as
        part of routine maintenance. Foundation concrete is not normally replaced during the life
        of a structure. Properly installed copper plumbing can last 50 to 100 years &mdash;
        approaching or exceeding the useful life of the structure itself. Wiring inside walls,
        structural steel, and load-bearing elements are all designed to be permanent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yet carriers routinely depreciate these components. They assign a useful life to framing
        lumber, to foundation elements, to embedded plumbing and wiring, and they subtract
        depreciation as though these items were consumable materials that homeowners regularly
        replace. Under Section 2051, this is improper. If you find structural components
        depreciated on your estimate, this is one of the strongest grounds for challenge.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Useful Life Tables: Where the Numbers Come From
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no single, universally accepted standard for the useful life of building
        components or personal property. Instead, carriers draw on a combination of sources, each
        with its own limitations. Understanding where these numbers originate helps explain why
        they so often fail to reflect reality.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Internal Carrier Depreciation Guides
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most major carriers maintain proprietary depreciation guides &mdash; internal reference
        documents that assign a useful life to hundreds or thousands of items, from roofing
        materials and plumbing to kitchen appliances and clothing. These guides are developed by
        the carrier&apos;s claims department, sometimes with input from industry consultants, and
        they are distributed to field adjusters as the default reference for depreciation
        calculations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These guides are rarely disclosed to policyholders and are almost never subject to
        independent review. They are created by the same entity that benefits financially from
        shorter useful life assignments. A carrier that assigns a useful life of 15 years to
        hardwood flooring instead of 50 years will withhold dramatically more depreciation on
        every flooring claim it handles. There is no regulatory body that audits these guides for
        accuracy or fairness.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Industry Tables and Published Studies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers reference published sources like the National Association of Home Builders
        (NAHB) Study of Life Expectancy of Home Components, which provides expected lifespans for
        hundreds of building materials. The NAHB study assigns a life expectancy of 100 years or
        more to solid hardwood flooring, over 50 years to slate and copper roofing, and 20 years
        to standard asphalt shingles. Estimating software like{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        also includes built-in depreciation schedules that adjusters can reference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, even when carriers reference these tables, they often cherry-pick the numbers
        that favor shorter useful lives. A carrier might cite the NAHB study for appliance
        lifespans (which tend to be short) while ignoring the same study&apos;s finding that
        hardwood floors last a century. When independent tables do not support the depreciation
        the carrier wants to apply, the carrier simply falls back on its own internal guide.
        These tables are guidelines, not law. They can be challenged.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Adjuster Judgment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many cases, the useful life assignment comes down to the individual adjuster&apos;s
        judgment. An adjuster inspecting a damaged roof might assign a useful life of 20 years
        based on general knowledge, personal experience, or simply because that is the number the
        carrier&apos;s training suggested. This judgment is often exercised without any physical
        inspection of the component&apos;s actual condition prior to the loss, without consulting
        manufacturer data, and without documenting the basis for the assignment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a system in which two adjusters from the same carrier, looking at the same
        type of component, might assign significantly different useful lives &mdash; and the
        policyholder has no way to know which number is correct or how it was determined. During
        catastrophe events, when carriers deploy temporary adjusters to process high volumes of
        claims quickly, these inconsistencies become even more pronounced.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Over-Depreciate: Common Tactics
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Over-depreciation is not a single error &mdash; it takes many forms. Understanding the
        specific ways carriers inflate depreciation helps you identify problems on your own claim
        and challenge them effectively.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Using Aggressive Useful Life Assumptions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common form of over-depreciation is simply assigning useful lives that are shorter
        than what the material actually lasts. Consider these examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Architectural shingles depreciated over 20 years</strong> when manufacturers like
          GAF, CertainTeed, and Owens Corning provide warranties of 30 years to &quot;lifetime&quot;
          (typically 40 to 50 years) and market expected service lives of 25 to 30 years or more
        </li>
        <li>
          <strong>Hardwood flooring depreciated over 15 years</strong> when the NAHB Study assigns
          a life expectancy of 100 years or more &mdash; solid hardwood can be refinished multiple
          times and, with proper maintenance, will outlast the structure
        </li>
        <li>
          <strong>Copper plumbing depreciated over 20 years</strong> when copper supply lines
          typically last 50 to 70 years, with some installations exceeding 100 years
        </li>
        <li>
          <strong>HVAC systems blanket-depreciated over 10 years</strong> when well-maintained
          systems commonly operate for 15 to 25 years, with furnaces averaging 15 to 20 years
        </li>
        <li>
          <strong>Interior paint depreciated over 3 years</strong> when quality interior paint
          in normal conditions can last 7 to 10 years, and even longer in low-traffic areas
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $30,000 roof replacement, the difference between a 20-year useful life and a 30-year
        useful life on a 10-year-old roof is the difference between 50 percent depreciation
        ($15,000 withheld) and 33 percent depreciation ($10,000 withheld). That single assignment
        swings the payment by $5,000.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Depreciating Components That Should Not Be Depreciated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed under Section 2051 above, depreciation should only apply to components
        &quot;normally subject to repair and replacement during the useful life of that
        structure.&quot; Yet carriers regularly depreciate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Structural framing (wall studs, rafters, joists, beams) &mdash; these are designed
          to be permanent and are not replaced during normal maintenance
        </li>
        <li>
          Foundation elements (concrete slabs, footings, stem walls) &mdash; no homeowner
          replaces their foundation as routine maintenance
        </li>
        <li>
          Wiring inside walls &mdash; electrical wiring that is embedded during original
          construction is not normally accessed or replaced
        </li>
        <li>
          Insulation inside closed wall and ceiling cavities &mdash; this is installed once
          and left in place for the life of the structure
        </li>
        <li>
          Subfloor sheathing and roof decking &mdash; these structural elements are not
          normally replaced unless damaged
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your estimate shows depreciation on structural components that are not normally
        repaired or replaced, challenge it. Cite Insurance Code &sect; 2051(b)(2) directly and
        ask the carrier to explain why they believe that component is &quot;normally subject to
        repair and replacement during the useful life of the structure.&quot;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Straight-Line Depreciation That Ignores Actual Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Straight-line depreciation assumes a component loses value at a constant rate from
        installation to the end of its useful life. A 10-year-old roof with a 20-year useful life
        gets 50 percent depreciation regardless of its actual condition. But property does not
        deteriorate in a straight line. A well-maintained item in excellent condition has more
        remaining value than the formula suggests, while a poorly maintained item might have less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051 requires that depreciation be based on condition at the time of loss, not
        merely age. If the carrier applied straight-line depreciation without evaluating condition,
        the calculation is legally deficient. This is particularly important for items that were
        in demonstrably excellent condition. A 15-year-old kitchen that was meticulously maintained
        and looks nearly new should not receive the same depreciation as an identical kitchen that
        was neglected.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Depreciating to Zero
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carrier depreciation schedules allow components to be depreciated to zero &mdash;
        meaning the carrier assigns no value whatsoever to an item that was still functioning and
        providing service at the time of loss. A 25-year-old roof that was still keeping water out,
        a 30-year-old water heater that was still producing hot water, a 20-year-old dishwasher
        that was still washing dishes &mdash; if the item was functional and in use, it had value.
        Depreciating it to zero is unreasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a component still had remaining useful life and was performing its intended function, it
        had value. An item cannot logically have zero value while simultaneously providing the
        service for which it was installed. Challenge any depreciation calculation that reduces
        a functional component to zero.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Labor Depreciation: The Critical Issue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most contested and consequential issues in depreciation law is whether carriers
        may depreciate the{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          labor component
        </Link>{' '}
        of a repair or replacement estimate. In a typical Xactimate estimate, each line item
        includes both material costs and labor costs. When a carrier applies depreciation to the
        entire line item &mdash; rather than separating materials from labor &mdash; it depreciates
        both the materials and the labor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The logic against labor depreciation is intuitive: labor does not &quot;wear out.&quot; It
        costs the same to install new shingles whether the roof being replaced is 5 years old or
        25 years old. A roofer charges the same hourly rate regardless of the age of the shingles
        being removed. There is no &quot;used&quot; version of a plumber&apos;s time. You cannot
        purchase &quot;depreciated labor&quot; on the open market.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        States That Have Prohibited Labor Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A growing number of states have concluded that depreciating labor is improper:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Arkansas</strong> &mdash; <em>Shelter Mut. Ins. Co. v. Goodner</em> held that
          labor costs are not subject to depreciation
        </li>
        <li>
          <strong>Kentucky</strong> &mdash; <em>Hicks v. State Farm</em> rejected the depreciation
          of labor as inconsistent with the concept of actual cash value
        </li>
        <li>
          <strong>Oklahoma</strong> &mdash; <em>Redlin v. Grinnell Mut.</em> found that labor does
          not physically deteriorate and therefore cannot be depreciated
        </li>
        <li>
          <strong>Virginia</strong> &mdash; the state has stated that depreciation of labor and
          other nontangible items is not permissible because they do not lose value or degrade
          over time
        </li>
        <li>
          <strong>Michigan</strong> &mdash; the Department of Insurance and Financial Services has
          issued guidance that no personal lines homeowners or dwelling insurer may depreciate
          labor absent a standalone, optional endorsement expressly allowing it
        </li>
        <li>
          <strong>Washington</strong> &mdash; the Office of the Insurance Commissioner has pursued
          rulemaking to prohibit the depreciation of labor on property claims
        </li>
        <li>
          <strong>Georgia, Hawaii, Illinois</strong> &mdash; multiple rulings have addressed the
          impermissibility of labor depreciation
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&apos;s Position: Labor Depreciation Is Prohibited by Statute
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has resolved the labor depreciation question directly through statute. AB 188
        (Stats. 2018, ch. 627), effective January 1, 2019, amended Insurance Code &sect; 2051(b)(2)
        to add the following sentence: &quot;The deduction for physical depreciation shall not
        include any labor costs that would be incurred to repair, rebuild, or replace the damaged
        or destroyed property.&quot; The result is unambiguous: on a California first-party
        property claim, the carrier may not depreciate the labor component of a repair or
        replacement estimate at all. The only labor that may be depreciated is labor already
        embedded in the manufactured material itself (the intrinsic labor that went into producing
        a shingle, a length of copper pipe, a window unit) &mdash; not the labor an insured will
        pay a contractor to install or replace the damaged component.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dollar impact is significant. Labor commonly represents 40 to 60 percent of a
        dwelling repair estimate. On a $50,000 repair estimate where labor comprises $25,000, a
        carrier that applies 30 percent depreciation to the full estimate (including labor)
        withholds $7,500 in labor depreciation alone. On larger claims, depreciating labor in
        violation of &sect; 2051(b)(2) can cost policyholders $15,000 to $30,000 or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear statutory text, some carriers and their estimating software still apply
        depreciation to combined material-plus-labor line items, which has the practical effect of
        depreciating labor. On every California claim, an insured should compare the labor portion
        of each line item to the depreciation applied and confirm that no portion of the labor
        cost has been depreciated. Where the carrier&apos;s estimate fails to separate labor from
        materials, an insured can request the breakout in writing &mdash; and cite
        &sect; 2051(b)(2) as the basis for that request.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Challenge Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Challenging depreciation requires documentation, research, and persistence. The following
        strategies are the most effective approaches, whether you handle the claim yourself or
        work with a public adjuster or attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Request the Carrier&apos;s Depreciation Schedule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your first step should be to request a copy of the carrier&apos;s depreciation guide or
        schedule &mdash; the internal document that the adjuster relied on to determine useful
        life. Many carriers will resist this request, claiming the guide is proprietary. Push
        back. California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (Cal. Code Regs., tit. 10, &sect; 2695.7) require insurers to provide a reasonable
        explanation of the basis for a claim settlement. If the carrier used a specific guide to
        calculate depreciation, the policyholder is entitled to know what that guide says. You
        cannot meaningfully dispute a number if you do not know how it was derived.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have the guide, compare its useful life assignments to independent sources. If
        the guide assigns a 15-year useful life to hardwood flooring while the NAHB study says
        100 years, you have a powerful basis for challenging the depreciation calculation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Compare to Actual Condition: Photos and Maintenance Records
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you can demonstrate that the damaged property was in good condition before the loss,
        you undermine the carrier&apos;s ability to apply aggressive depreciation based on age
        alone. Useful evidence includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Photographs or video of the property taken before the loss (even casual photos that
          happen to show the condition of relevant components)
        </li>
        <li>
          Maintenance records showing regular upkeep &mdash; roof inspections, HVAC servicing,
          flooring refinishing, plumbing maintenance, painting schedules
        </li>
        <li>
          Prior inspection reports from real estate transactions, home warranty companies, or
          municipal inspections
        </li>
        <li>
          Statements from contractors or tradespeople who worked on the property and can attest
          to the condition of specific components
        </li>
        <li>
          Prior insurance inspections &mdash; some carriers inspect properties at policy inception
          or renewal and may have documented the condition of the very components they are now
          depreciating
        </li>
        <li>
          Google Street View or satellite imagery showing the exterior condition of the property
          at various dates before the loss
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051&apos;s requirement that depreciation be &quot;based upon its condition at
        the time of the injury&quot; means that evidence of actual condition should override any
        abstract depreciation schedule. If the carrier&apos;s own inspector noted that the roof
        was in &quot;good condition&quot; two years before the loss, that inspector&apos;s
        assessment contradicts aggressive depreciation applied after the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Challenge Items Depreciated Beyond Their Actual Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Review the{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          estimate
        </Link>{' '}
        line by line and identify every component where the depreciation percentage seems
        inconsistent with the item&apos;s actual condition. If your 12-year-old kitchen cabinets
        were in excellent condition &mdash; no water damage, no wear, no cosmetic defects &mdash;
        and the carrier depreciated them 60 percent on a 20-year useful life, the depreciation
        does not reflect reality. Prepare a written response identifying each component,
        explaining its actual condition, and providing documentation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Challenge Structural Components Under Section 2051
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Separately identify every structural component that has been depreciated and challenge
        it under the &quot;normally subject to repair and replacement&quot; provision. Frame
        the argument precisely: ask the carrier to identify when, during the normal useful life
        of the structure, the component in question would have been repaired or replaced. If the
        answer is &quot;never, unless damaged by a covered event,&quot; then the component is
        not &quot;normally subject to repair and replacement,&quot; and no depreciation should
        apply.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Compare to Manufacturer Warranties and Specifications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturer warranties provide a useful baseline for challenging useful life
        assignments. If the manufacturer provides a 30-year warranty, the carrier&apos;s
        assignment of a 20-year useful life is immediately suspect. The manufacturer &mdash;
        which has a financial incentive to not overstate the product&apos;s lifespan &mdash;
        has determined that the product should perform for at least 30 years. A carrier that
        assigns a shorter useful life is, in effect, claiming to know more about the product
        than the company that made it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Gather the manufacturer&apos;s product data sheets, warranty documents, and any
        published performance data for the specific materials involved. Remember that warranties
        often represent the minimum expected lifespan, not the maximum. Professional trade
        associations &mdash; organizations like the Copper Development Association, the Asphalt
        Roofing Manufacturers Association, and the National Wood Flooring Association &mdash;
        also publish expected lifespan data that can support your challenge.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Get an Expert Opinion on Remaining Useful Life
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For significant claims, consider retaining an independent expert &mdash; a roofing
        consultant, a general contractor, an engineer, or a materials specialist &mdash; to
        evaluate the remaining useful life of the depreciated components. An expert who inspects
        the property and provides a written opinion that the carrier&apos;s useful life
        assignment is unreasonably short carries significant weight, both in negotiation and
        in any subsequent appraisal or litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Recoverable Depreciation: The Replacement Cost Holdback
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost policy, depreciation creates a two-payment claim
        structure. The first payment is the ACV &mdash; replacement cost minus depreciation.
        The second payment &mdash; the recoverable depreciation &mdash; is paid after you
        complete repairs and submit documentation showing you incurred the costs. This is
        sometimes called the &quot;holdback&quot; because the carrier holds back the
        depreciation until repairs are completed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies impose a{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
          deadline to recover depreciation
        </Link>
        , typically 180 days to one year from the date of loss or the date of the ACV payment.
        If you do not complete repairs and submit documentation within that window, you forfeit
        the recoverable depreciation permanently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where excessive depreciation creates a trap. When the initial ACV payment is
        inadequate to fund repairs &mdash; which happens frequently when depreciation is
        aggressive &mdash; you are caught in a bind: you cannot afford to begin repairs without
        the recoverable depreciation, but you cannot collect the recoverable depreciation
        without completing repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Excessive depreciation exacerbates this problem. The more aggressively the carrier
        depreciates, the less money you receive upfront, the harder it is to fund repairs, and
        the more likely you are to miss the recovery deadline. Some policyholders simply give
        up on recovering the withheld depreciation because they cannot bridge the funding gap
        within the policy&apos;s time constraints. If you find yourself in this situation,
        explore options: notify the carrier in writing that the ACV payment is insufficient to
        begin repairs, request an extension of the recovery deadline, and consider whether the
        carrier&apos;s inadequate initial payment itself constitutes a violation of its{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          fair claims settlement obligations
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To collect recoverable depreciation, you will typically need to provide the carrier with
        proof that repairs were completed &mdash; contractor invoices, receipts for materials,
        and sometimes photographs of the completed work. The carrier should release the
        recoverable depreciation promptly upon receipt of this documentation. If the carrier
        delays or imposes additional requirements not found in the policy, document the delay
        and escalate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Depreciation Disputes by Building Component
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain building components generate depreciation disputes more frequently than others.
        The following are the areas where over-depreciation is most common and where challenges
        are most likely to succeed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Roofing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing is the single most disputed depreciation category because roofs are frequently
        damaged by covered perils (hail, wind, fire) and because the dollar amounts involved are
        substantial. Common over-depreciation tactics on roofing include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Assigning a 20-year useful life to architectural shingles that carry 30-year or longer
          warranties
        </li>
        <li>
          Using the same useful life for all shingle types regardless of grade &mdash;
          three-tab shingles and premium architectural shingles are treated identically
        </li>
        <li>
          Failing to credit well-maintained roofs that show minimal granule loss and no signs
          of aging
        </li>
        <li>
          Depreciating underlayment, ice-and-water shield, flashing, and roof decking as though
          these are components that homeowners regularly replace (many of these are installed
          once and left in place for the life of the roof)
        </li>
        <li>
          Depreciating labor on the entire roof replacement estimate, effectively penalizing
          the policyholder for the age of the shingles when the cost to remove and install
          shingles does not change based on shingle age
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Remember that this analysis is separate from{' '}
        <Link href="/resources/betterment-and-improvement" className="text-[#2E74B5] underline">
          betterment and improvement
        </Link>{' '}
        issues, where a carrier might argue you are receiving an upgrade. Depreciation and
        betterment are distinct concepts, and the carrier should not conflate them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Flooring
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Flooring disputes arise because carrier depreciation schedules frequently assign useful
        lives that are dramatically shorter than the material&apos;s actual lifespan. Solid
        hardwood flooring can last 100 years or more and can be refinished 8 to 10 times during
        its life. Natural stone flooring (marble, granite, slate) can last centuries. Even
        engineered hardwood commonly lasts 20 to 40 years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier assigns a 15-year useful life to hardwood flooring that the NAHB says
        lasts 100 years, the resulting depreciation on a 10-year-old floor is 67 percent instead
        of 10 percent. On a $20,000 flooring claim, that is the difference between paying $6,600
        at ACV and paying $18,000 at ACV &mdash; a $11,400 swing caused entirely by the useful
        life assignment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cabinetry
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kitchen and bathroom cabinetry frequently receives aggressive depreciation despite the
        fact that quality cabinetry can last 30 to 50 years or longer with normal care. Solid
        wood cabinetry from quality manufacturers is designed to be a semi-permanent fixture.
        Yet carriers commonly assign useful lives of 15 to 20 years, generating substantial
        depreciation on kitchens that were in excellent condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photos showing the pre-loss condition of your cabinetry are particularly valuable here.
        Well-maintained cabinets that show no signs of wear, delamination, or cosmetic
        deterioration should receive minimal depreciation regardless of their age.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Plumbing and Electrical
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Embedded plumbing and electrical systems present a strong argument under Section
        2051&apos;s &quot;normally subject to repair and replacement&quot; provision. Copper
        supply lines, cast iron drain lines, and electrical wiring inside walls are all installed
        during construction and left in place for decades. Homeowners do not replace the wiring
        inside their walls or the supply lines behind their drywall as routine maintenance. These
        components are arguably not subject to depreciation at all under the statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even plumbing fixtures &mdash; faucets, toilets, sinks &mdash; frequently have useful
        lives longer than what carriers assign. Quality fixtures from major manufacturers carry
        warranties of 10 years or longer, and many remain fully functional for 20 to 30 years.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Windows and Doors
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quality windows can last 20 to 40 years, with some high-end wood and fiberglass windows
        lasting 50 years or more. Exterior doors, when properly maintained, can last the life of
        the structure. Interior doors are essentially permanent fixtures that require no routine
        replacement. Yet carriers frequently apply aggressive depreciation to windows and doors,
        particularly on older homes where the dollar amounts are significant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Drywall and Interior Finishes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Drywall is a particularly interesting depreciation dispute. The drywall itself &mdash;
        the gypsum board &mdash; has an indefinite useful life absent water damage or physical
        impact. It does not wear out. The paint and texture on the drywall surface may need
        periodic refreshing, but the substrate itself is essentially permanent. Some carriers
        apply depreciation to the entire drywall replacement cost (demolition, replacement board,
        taping, texturing, and painting) based on the age of the paint finish, which dramatically
        overstates the depreciation that should apply.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Personal Property and Contents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation on{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          personal property and contents claims
        </Link>{' '}
        follows the same principles but presents unique challenges. Carriers often apply
        category-based depreciation &mdash; &quot;all clothing, 50 percent&quot; or &quot;all
        electronics, 60 percent&quot; &mdash; rather than evaluating each item individually.
        This ignores the fact that a two-month-old winter coat should not be depreciated the
        same as a five-year-old t-shirt.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Watch for these contents depreciation traps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Excessive depreciation on durable goods.</strong> A quality leather sofa may
          last 15 to 20 years, but carriers frequently assign useful lives of 5 to 8 years.
          Cast iron cookware can last generations. High-end hand tools can last a lifetime.
        </li>
        <li>
          <strong>Category-based depreciation.</strong> Blanket percentages applied to entire
          categories of belongings ignore the individual condition and remaining useful life
          of each item.
        </li>
        <li>
          <strong>The &quot;like kind and quality&quot; trap.</strong> The carrier selects
          the cheapest arguable &quot;comparable&quot; replacement, reducing the RCV before
          depreciation is even applied, creating a double reduction. Insist on true
          comparability in type, grade, features, and quality.
        </li>
        <li>
          <strong>No credit for items in excellent condition.</strong> Under &sect; 2051,
          actual condition matters. A piece of furniture in near-new condition should receive
          less depreciation than the same item in poor condition.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Your Depreciation Challenge: Step by Step
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive a claim estimate with depreciation that appears excessive, take the
        following steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review the estimate line by line.</strong> Identify every component where
          depreciation has been applied. Note the useful life assigned, the age used, and the
          resulting depreciation percentage. Calculate the dollar impact of depreciation on
          each line. Look specifically for structural components that should not be depreciated
          and for labor depreciation.
        </li>
        <li>
          <strong>Request the carrier&apos;s depreciation guide.</strong> Ask the adjuster to
          provide the source document or schedule used to assign useful life for each
          depreciated component. Put this request in writing. If the carrier refuses, cite
          Cal. Code Regs., tit. 10, &sect; 2695.7 and the insurer&apos;s obligation to
          explain the basis for its settlement calculation.
        </li>
        <li>
          <strong>Research independent useful life data.</strong> For each major depreciated
          component, gather manufacturer warranty information, NAHB life expectancy data,
          trade association publications, and any other independent sources that address the
          expected lifespan of the material.
        </li>
        <li>
          <strong>Document actual condition.</strong> Assemble all available evidence of the
          property&apos;s condition before the loss: photographs, maintenance records,
          inspection reports, contractor statements. If the property has not been demolished
          or repaired, have an expert inspect and document the condition of key components.
        </li>
        <li>
          <strong>Prepare a written challenge.</strong> Draft a letter to the carrier that
          identifies each depreciation figure you are disputing, provides the independent data
          supporting a longer useful life, addresses the actual condition of the property, and
          calculates the corrected ACV based on appropriate depreciation. Cite California
          Insurance Code &sect; 2051 and the requirement that depreciation be based on the
          property&apos;s actual condition.
        </li>
        <li>
          <strong>Address labor depreciation separately.</strong> If the carrier has depreciated
          labor on a California claim, raise this as a distinct issue and cite Insurance Code
          &sect; 2051(b)(2) directly: &quot;The deduction for physical depreciation shall not
          include any labor costs that would be incurred to repair, rebuild, or replace the
          damaged or destroyed property.&quot; This is a statutory prohibition, not merely a
          policy argument.
        </li>
        <li>
          <strong>Identify components that should not be depreciated at all.</strong> Separately
          list structural components that are not &quot;normally subject to repair and
          replacement&quot; and cite &sect; 2051(b)(2) for each.
        </li>
        <li>
          <strong>Escalate if necessary.</strong> If the adjuster refuses to adjust
          depreciation, escalate to a supervisor or the carrier&apos;s complaint department.
          If the carrier will not move, consider filing a complaint with the California
          Department of Insurance, invoking the appraisal clause in your policy, or retaining
          a public adjuster or attorney to advocate on your behalf.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Depreciation Becomes Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation calculations involve judgment, and reasonable people can disagree about
        useful life. But there is a line between reasonable disagreement and bad faith. When a
        carrier assigns a useful life that is dramatically shorter than what independent data
        supports, refuses to provide the basis for its depreciation schedule, ignores evidence
        of the property&apos;s actual condition, or applies depreciation to components that are
        not subject to depreciation under the applicable statute, the carrier may be crossing
        that line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Act (Cal. Ins. Code &sect;
        790.03(h)) and the Unfair Claims Settlement Practices Regulations (Cal. Code Regs.,
        tit. 10, &sect; 2695.7) prohibit insurers from making settlement offers that are
        unreasonably low. A depreciation calculation that reduces the ACV to a fraction of the
        property&apos;s actual pre-loss value &mdash; because the carrier used an arbitrarily
        short useful life or ignored the property&apos;s condition &mdash; may constitute an
        unreasonably low settlement offer under these provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document everything. If the carrier&apos;s depreciation is unreasonable and you can show
        that you challenged it with evidence, the carrier&apos;s refusal to adjust creates a
        record that may support a bad faith claim. This is particularly true when the carrier
        applies depreciation in a way that violates the express requirements of Section 2051
        &mdash; such as depreciating components that are not normally subject to repair and
        replacement, or ignoring the actual condition of the property in favor of an age-based
        formula.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Depreciation on the Dwelling vs. Contents: Key Differences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation operates differently depending on whether you are dealing with Coverage A
        (dwelling) or Coverage C (contents/personal property), and understanding the distinctions
        helps you challenge each effectively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dwelling depreciation applies to structural components and is typically calculated within
        the Xactimate estimate on a line-by-line or category-by-category basis. The Section 2051
        protections &mdash; condition-based depreciation and the &quot;normally subject to repair
        and replacement&quot; limitation &mdash; apply with full force to dwelling claims. Labor
        depreciation is a major issue because labor commonly represents 40 to 60 percent of
        dwelling repair costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contents depreciation applies to personal property and can be even more aggressive
        because many personal property items have shorter useful lives than building components.
        Carriers take advantage of this reality by applying broad-brush depreciation rates
        across entire categories of belongings. The &quot;like kind and quality&quot;
        replacement calculation also creates opportunities for the carrier to reduce the RCV
        before depreciation is applied, compounding the underpayment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For detailed guidance on contents depreciation strategies, see our article on{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          contents claims
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Systematic Bias: Why Carrier Depreciation Always Favors the Carrier
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The structural incentive is clear: shorter useful life assignments produce higher
        depreciation, which reduces the carrier&apos;s payout. A carrier that systematically
        assigns useful lives 20 to 30 percent shorter than what independent data supports will
        save millions of dollars across its book of business. No one inside the claims department
        has an incentive to assign longer useful lives. The adjuster&apos;s performance is not
        measured by the accuracy of depreciation calculations; it is measured by cycle time and,
        in many organizations, by indemnity spend.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a speculative concern. It is a pattern that public adjusters, plaintiff
        attorneys, and consumer advocates encounter routinely. The depreciation schedules built
        into carrier systems consistently favor the carrier, and the burden falls on the
        policyholder to identify the error and challenge it. The carriers have spent decades
        refining their depreciation schedules to minimize payouts. The absence of regulatory
        oversight over these schedules means the only check on their accuracy is the
        policyholder&apos;s willingness and ability to push back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the economics from the carrier&apos;s perspective. If a carrier handles 50,000
        property claims per year and its depreciation schedule averages $2,000 in
        over-depreciation per claim, that is $100 million in withheld payments annually. Not
        every policyholder will challenge the depreciation. Many will accept the carrier&apos;s
        numbers without question, particularly if they do not understand how depreciation is
        calculated or that the numbers are negotiable. The carrier profits from every claim
        that goes unchallenged.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Takeaways
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is not a neutral, objective calculation. It is a process driven by carrier
        self-interest, executed through internal schedules developed without regulatory oversight
        and applied without individualized assessment of property condition. The numbers that
        carriers assign to &quot;useful life&quot; directly determine how much money you
        receive, and those numbers are frequently wrong &mdash; always in the carrier&apos;s
        favor.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Never accept a depreciation calculation at face value. Always review the useful life
          assignments and compare them to independent data.
        </li>
        <li>
          Request the carrier&apos;s depreciation guide. You are entitled to know the basis
          for the depreciation applied to your claim.
        </li>
        <li>
          Insist that depreciation reflect the actual condition of your property, not just
          its age. California Insurance Code &sect; 2051 requires this, and you should hold
          the carrier to it.
        </li>
        <li>
          Identify structural components that should not be depreciated at all under
          &sect; 2051(b)(2). Framing, foundation, embedded plumbing, and wiring are strong
          candidates.
        </li>
        <li>
          On California claims, labor depreciation is prohibited by statute. Insurance Code
          &sect; 2051(b)(2) (as amended by AB 188, effective January 1, 2019) provides that
          the deduction for physical depreciation &quot;shall not include any labor costs that
          would be incurred to repair, rebuild, or replace the damaged or destroyed property.&quot;
          Challenge any depreciation calculation that touches the labor portion of a line item.
        </li>
        <li>
          On{' '}
          <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
            contents claims
          </Link>
          , scrutinize the carrier&apos;s &quot;comparable&quot; replacement items. If the
          carrier has selected a cheaper, inferior product as the &quot;like kind and
          quality&quot; replacement, challenge the replacement cost before you even address
          depreciation.
        </li>
        <li>
          Be aware of the{' '}
          <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
            recoverable depreciation deadline
          </Link>
          . Excessive depreciation combined with a tight recovery window can permanently
          reduce your payout if you are not vigilant about timing.
        </li>
        <li>
          For significant claims, retain an expert. A roofing consultant, materials engineer,
          or experienced public adjuster can provide the independent assessment needed to
          overcome a carrier&apos;s depreciation schedule.
        </li>
        <li>
          Document your challenge in writing. If the carrier refuses to adjust unreasonable
          depreciation after you present evidence, the written record supports a potential
          bad faith claim.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who understand how the depreciation system works &mdash; and who are
        willing to challenge it with evidence &mdash; routinely recover thousands of dollars
        more than those who accept the carrier&apos;s numbers without question. Depreciation
        is negotiable. The useful life assignments that drive it are not set in stone. When the
        numbers do not reflect the reality of your property, push back.
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
