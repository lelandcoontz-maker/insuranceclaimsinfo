import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Excessive Depreciation: How Insurers Shortchange Claims",
  description:
    "Insurers routinely apply excessive depreciation to reduce payments. The rules they violate on labor, long-life components, and matching under California law.",
  summary:
    'Insurers routinely over-depreciate to cut payments. Key limits they violate: no depreciation on labor, none on long-life components beyond their actual wear, and none on undamaged matching areas. California law lets you push back on unreasonable depreciation.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California depreciation rules by a Licensed
          California Public Adjuster. It is not legal advice. California&rsquo;s ACV framework
          is statutory (Cal. Ins. Code &sect; 2051(b)) and regulatory (10 CCR &sect; 2695.9(f)).
          For legal questions, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is the single largest deduction on most insurance claim payments, and it is
        also the area where insurance companies make the most &ldquo;mistakes&rdquo; &mdash; almost
        always in their favor. Whether it is applying a blanket percentage to an entire estimate,
        depreciating labor that cannot lose value, or ignoring the actual condition of the property,
        excessive depreciation quietly strips thousands of dollars from claim payments. Most
        policyholders never question it because they don&rsquo;t know the rules.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the specific rules &mdash; from California statutes and regulations,
        case law, policy language, and industry standards &mdash; that limit how depreciation can
        be applied. If your insurance company is depreciating your claim aggressively, chances are
        they are violating at least one of these rules.
      </p>

      <h2 id="what-depreciation-is" className="text-2xl font-bold text-[#1F3964] mb-4">
        What Depreciation Is Supposed to Be
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect; 2051(b), the measure of actual cash value
        (ACV) recovery for either a total or partial loss to the structure or its contents
        is &ldquo;the amount it would cost the insured to repair, rebuild, or replace the
        thing lost or injured less a fair and reasonable deduction for physical depreciation
        based upon its condition at the time of the injury or the policy limit, whichever is
        less.&rdquo; That statutory language contains three critical limitations that
        insurers routinely ignore:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The deduction must be <strong>fair and reasonable</strong> &mdash; not whatever number
          produces the lowest payment.
        </li>
        <li>
          It must be based on <strong>physical depreciation</strong> based on actual
          <strong> condition at the time of the injury</strong> &mdash; not abstract age-based
          formulas.
        </li>
        <li>
          California&apos;s Fair Claims Settlement Practices regulation, 10 CCR
          &sect; 2695.9(f)(1), prohibits depreciating labor: &ldquo;Except for the intrinsic
          labor costs that are included in the cost of manufactured materials or goods, the
          expense of labor necessary to repair, rebuild or replace covered property is not
          a component of physical depreciation and shall not be subject to depreciation or
          betterment.&rdquo;
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer slaps a 40% depreciation rate across an entire estimate without examining
        the condition of each component, they are not following the law. They are applying a
        shortcut that benefits them at the policyholder&rsquo;s expense.
      </p>

      <h2 id="tax-vs-insurance" className="text-2xl font-bold text-[#1F3964] mb-4">
        Tax Depreciation Is Not Insurance Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One common source of confusion &mdash; especially on commercial and rental-property claims
        &mdash; is the difference between <strong>tax depreciation</strong> and{' '}
        <strong>insurance depreciation</strong>. They are not the same thing, and one does not
        control the other.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Tax depreciation</strong> is an accounting allocation for federal income tax
          purposes, driven by IRS rules (the MACRS cost-recovery system for most business
          property). It is based on a property&rsquo;s original cost basis and statutory recovery
          periods &mdash; not on the property&rsquo;s physical condition. A fully depreciated
          asset on the tax books may still be in perfect working order in the real world.
        </li>
        <li>
          <strong>Insurance depreciation</strong> is a valuation concept for determining actual
          cash value under the policy and California Insurance Code &sect; 2051. It is based on{' '}
          <em>physical condition</em> at the time of loss, not on accounting books. An asset that
          is fully depreciated on a tax return can still carry very little insurance depreciation
          if it was well-maintained and fully functional.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusters occasionally reach for a CPA-prepared depreciation schedule to support a large
        deduction on a claim. That is not how ACV is supposed to be calculated under California
        law. The policyholder&rsquo;s accountant may have very good reasons for the tax schedule
        they chose, but those reasons do not bind the insurance valuation. The statutory standard
        is physical depreciation based on condition &mdash; full stop.
      </p>

      <h2 id="condition-not-age" className="text-2xl font-bold text-[#1F3964] mb-4">
        Rule #1: Depreciation Must Be Based on Condition, Not Age
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important and most frequently violated rule. Under California law,
        depreciation must reflect the <strong>actual physical condition</strong> of the property at
        the time of the loss &mdash; not simply how old it is.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California authority on this is <em>Doan v. State Farm General Ins. Co.</em>
        (2011) 195 Cal.App.4th 1082, but the case has two layers and they are often
        conflated. The <strong>binding appellate holding</strong> is procedural: a
        policyholder may challenge the insurer&rsquo;s depreciation methodology in court
        through declaratory relief, and is not forced into appraisal &mdash; because an
        appraiser has no authority to decide whether the insurer&rsquo;s method of
        calculating depreciation breaches the contract or violates &sect; 2051. The
        <strong> substantive</strong> condition-not-age rule that the case is best known
        for came from the <em>Doan</em> trial court&rsquo;s 2016 ruling on remand, which
        held that contents depreciation must rest on the actual physical condition of
        each item at the time of loss rather than on age alone or undisclosed automatic
        schedules. That 2016 trial-court ruling is the right articulation of the standard
        but is not itself binding statewide precedent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For primary authority on the condition-not-age rule itself, Cal. Ins. Code
        &sect; 2051(b) supplies the controlling text &mdash; ACV is a &ldquo;fair and
        reasonable deduction for physical depreciation <em>based upon its condition at the
        time of the injury</em>&rdquo; (emphasis added) &mdash; and 10 CCR &sect; 2695.9(f)
        adds the documentation, itemization, and written-explanation requirements that
        force the insurer to actually justify the deduction based on condition. A
        20-year-old roof that was well-maintained, had no leaks, and was functioning
        properly should not be depreciated the same as a 20-year-old roof that was falling
        apart &mdash; that is what the statute and regulation require, and what the
        <em> Doan</em> trial-court ruling articulates.
      </p>

      <CalloutBox variant="important" title="This Applies to Personal Property Too">
        <p>
          The condition-not-age rule applies to personal property (contents) claims as well as
          building claims. A 10-year-old couch that was in excellent condition, rarely used, and
          stored in a formal living room should be depreciated far less than a 10-year-old couch
          in a house with four kids and three dogs. The insurer cannot simply look up the age and
          apply a formula. They must consider the actual condition of each item.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, most insurers do the opposite. They use straight-line depreciation formulas
        based entirely on age: divide 100% by the estimated useful life, multiply by the age of
        the item, and that&rsquo;s the depreciation. This mechanical approach is fast, easy, and
        consistently produces higher depreciation than a genuine condition-based analysis would.
        It is also not what the law requires.
      </p>

      <h2 id="no-labor-depreciation" className="text-2xl font-bold text-[#1F3964] mb-4">
        Rule #2: Labor Cannot Be Depreciated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You cannot buy &ldquo;used labor.&rdquo; A roofer charges the same hourly rate whether
        the shingles being removed are 5 years old or 25 years old. A painter&rsquo;s time
        doesn&rsquo;t cost less because the wall is old. Labor is a service performed at
        current market rates, and it does not physically deteriorate over time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the rule is regulatory: 10 CCR &sect; 2695.9(f)(1) provides that
        &ldquo;[e]xcept for the intrinsic labor costs that are included in the cost of
        manufactured materials or goods, the expense of labor necessary to repair, rebuild
        or replace covered property is not a component of physical depreciation and shall
        not be subject to depreciation or betterment.&rdquo; Cal. Ins. Code &sect; 2051(b),
        the underlying statutory ACV provision, supplies the depreciation framework
        (replacement cost less a fair and reasonable deduction for physical depreciation,
        limited to components subject to repair and replacement during useful life); the
        regulation adds the specific labor-depreciation prohibition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Out-of-state courts &mdash; including <em>Shelter Mutual Insurance Co. v. Goodner</em>
        {' '}(Arkansas), <em>Hicks v. State Farm</em> (Kentucky), and <em>Redlin v. Grinnell
        Mutual</em> (Oklahoma) &mdash; reached the same conclusion through case law.
        California addressed the question through regulation rather than waiting for case
        law to develop.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear regulatory text, many carriers still apply depreciation to the
        entire estimate &mdash; materials and labor together &mdash; using a single blanket
        percentage. When labor represents 40&ndash;50% of a repair estimate, depreciating
        it can cost the policyholder thousands of dollars and is a direct violation of
        10 CCR &sect; 2695.9(f)(1) (and inconsistent with &sect; 2051(b)&rsquo;s
        depreciation framework). For a deeper discussion, see our
        article on{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          labor depreciation
        </Link>.
      </p>

      <h2 id="long-life-components" className="text-2xl font-bold text-[#1F3964] mb-4">
        Rule #3: Items That Don&rsquo;t Wear Out During the Life of the Home Should Not Be
        Depreciated (or Should Be Depreciated Minimally)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not everything in a home deteriorates at the same rate. Some components are designed to
        last the entire life of the structure and, under normal conditions, never need replacement.
        Depreciating these items at the same rate as components with shorter useful lives is
        unreasonable and unsupported by the actual condition of the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Examples of long-life components that should receive little or no depreciation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Concrete foundations and slabs</strong> &mdash; Concrete has an effective useful
          life that can exceed 100 years. Depreciating a concrete slab at 2% per year because the
          house is 20 years old is not reasonable.
        </li>
        <li>
          <strong>Copper plumbing</strong> &mdash; Copper water supply lines last 50&ndash;70+
          years under normal conditions. In a 20-year-old home, copper plumbing is barely
          middle-aged.
        </li>
        <li>
          <strong>Structural framing</strong> &mdash; Wood framing, steel beams, and structural
          components are designed for the life of the building. Unless there is rot, termite
          damage, or structural failure, the framing in a 25-year-old house is functionally
          identical to new framing.
        </li>
        <li>
          <strong>Brick, stone, and masonry</strong> &mdash; These materials last indefinitely
          under normal conditions.
        </li>
        <li>
          <strong>Electrical wiring (copper)</strong> &mdash; Copper wiring itself does not
          deteriorate meaningfully over the life of a home, although panels, breakers, and
          outlets may.
        </li>
        <li>
          <strong>Cast iron and clay sewer lines</strong> &mdash; These can last 75&ndash;100+
          years.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer should be depreciating each component based on its own useful life and actual
        condition &mdash; not applying a blanket rate derived from the age of the roof or the most
        visible exterior components. A home is made up of hundreds of different components with
        vastly different lifespans, and a proper depreciation analysis must account for that.
      </p>

      <CalloutBox variant="legal" title="The Itemized Depreciation Requirement">
        <p>
          California regulations require the insurer to provide an itemized basis for depreciation.
          If the carrier&rsquo;s estimate shows a single depreciation percentage applied to the
          entire claim, demand an itemized breakdown showing the depreciation rate and reasoning
          for each component. Many blanket-rate depreciation schemes fall apart when the insurer
          is forced to justify them line by line.
        </p>
      </CalloutBox>

      <h2 id="matching-depreciation" className="text-2xl font-bold text-[#1F3964] mb-4">
        Rule #4: Undamaged Areas Replaced for Matching Should Not Be Depreciated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This may be the most important depreciation argument that almost nobody knows about &mdash;
        not insurance adjusters, not contractors, and not most Public Adjusters. No published
        California appellate decision has squarely resolved it, but the structure of the
        regulation gives the insured a strong position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Code of Regulations, Title 10, Section 2695.9(a)(2), when a loss
        requires replacement of items and the replaced items do not match in quality, color,
        or size, the insurer must replace all items in the damaged area to conform to a{' '}
        <strong>reasonably uniform appearance</strong>. This is the{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">
          matching requirement
        </Link>.
        What most people miss is the depreciation implication.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this example: a tree falls on the front slope of a roof. The insurance company
        agrees that the front slope shingles need to be replaced. They also agree that the back
        slope shingles need to be replaced to achieve a matching appearance, because new shingles
        on the front won&rsquo;t match the weathered shingles on the back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the part that matters: <strong>the back slope shingles are not
        damaged.</strong> They are being replaced solely to achieve a uniform appearance. Because
        those shingles are undamaged, there is no basis for applying depreciation to them. The
        depreciation deduction under &sect; 2051 is for &ldquo;physical depreciation based upon
        [the property&rsquo;s] condition at the time of loss.&rdquo; The back slope shingles were
        in fine condition &mdash; they were performing exactly as intended. The only reason
        they&rsquo;re being replaced is cosmetic uniformity. There is no &ldquo;damage&rdquo; to
        depreciate.
      </p>

      <CalloutBox variant="warning" title="Two Different Depreciation Rates on One Roof">
        <p>
          If the insurer properly follows this rule, the estimate should show <strong>two
          separate line items</strong> for the roof: one for the damaged front slope (with
          depreciation) and one for the undamaged back slope being replaced for matching
          (with zero or minimal depreciation). Industry experience shows that insurance companies
          almost never actually do this &mdash; even though the regulation requires it.
          They apply the same depreciation rate to the entire roof, including the undamaged
          matching areas, and the policyholder never knows the difference.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This rule applies to any situation where undamaged materials are being replaced to achieve
        matching: siding, flooring, paint, countertops, cabinets &mdash; anything. If the
        undamaged portion is being replaced only because it won&rsquo;t match the new repair,
        depreciation should not be applied to the undamaged portion. The practical impact can be
        significant. On a $30,000 roof replacement where the back slope represents half the cost
        and the insurer is applying 30% depreciation across the board, correcting this one issue
        alone could recover $4,500.
      </p>

      <h2 id="overhead-profit-permits" className="text-2xl font-bold text-[#1F3964] mb-4">
        Rule #5: Overhead, Profit, Permits, and General Conditions Should Not Be Depreciated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond labor and materials, a repair estimate includes other cost categories that reflect
        current costs and have no physical existence that can deteriorate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contractor overhead and profit</strong> &mdash; These are percentages added to
          the job cost to cover the contractor&rsquo;s business expenses and margin. They are
          current costs, not physical items that age.
        </li>
        <li>
          <strong>Building permits</strong> &mdash; A permit costs what it costs today. It has
          no &ldquo;used&rdquo; equivalent.
        </li>
        <li>
          <strong>Debris removal and haul-off</strong> &mdash; The cost of removing damaged
          material and disposing of it is a current service cost.
        </li>
        <li>
          <strong>Equipment rental</strong> &mdash; Dumpsters, scaffolding, lifts, and other
          rental equipment are current costs.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer applies a blanket depreciation percentage to an entire estimate, all of
        these items get depreciated along with the materials. This is improper. Only physical
        materials that have actually deteriorated should be subject to depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same logic applies to <strong>consumable materials</strong> used during construction
        &mdash; items that are used up during the repair process and have no pre-loss equivalent
        in the home. Examples include masking paper and tape used to protect surfaces, plastic
        sheeting for dust containment, a temporary portable toilet placed in the yard for workers,
        cleaning solvents, sandpaper, caulking, and similar supplies. These items did not exist in
        the home before the loss. They are not replacing anything that wore out. There is no
        &ldquo;used&rdquo; version of masking tape. Depreciating consumables is no different from
        depreciating labor &mdash; it produces a deduction for deterioration that never occurred.
      </p>

      <h2 id="blanket-depreciation" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Blanket Depreciation Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common form of excessive depreciation is also the laziest: the insurer picks a
        single depreciation percentage and applies it to the entire estimate. This is sometimes
        called &ldquo;blanket&rdquo; or &ldquo;flat-rate&rdquo; depreciation, and it violates
        virtually every rule discussed in this article.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A proper depreciation analysis considers each component individually:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-6">
        <p className="font-semibold text-[#1F3964] mb-3">
          Example: What Proper vs. Blanket Depreciation Looks Like
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 pr-3">Component</th>
                <th className="text-center py-2 px-3">Blanket (30%)</th>
                <th className="text-center py-2 pl-3">Proper Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">Asphalt shingles (15 yrs old, 30-yr shingle)</td>
                <td className="text-center py-2 px-3">30%</td>
                <td className="text-center py-2 pl-3">~20% (condition-based)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">Roof sheathing (plywood, original)</td>
                <td className="text-center py-2 px-3">30%</td>
                <td className="text-center py-2 pl-3">~5% (long-life component)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">Undamaged slope replaced for matching</td>
                <td className="text-center py-2 px-3">30%</td>
                <td className="text-center py-2 pl-3">0% (undamaged)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">All labor</td>
                <td className="text-center py-2 px-3">30%</td>
                <td className="text-center py-2 pl-3">0% (non-depreciable)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">Overhead &amp; profit</td>
                <td className="text-center py-2 px-3">30%</td>
                <td className="text-center py-2 pl-3">0% (current cost)</td>
              </tr>
              <tr>
                <td className="py-2 pr-3">Permits, debris removal</td>
                <td className="text-center py-2 px-3">30%</td>
                <td className="text-center py-2 pl-3">0% (current cost)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-3 italic">
          In this example, the blanket 30% depreciation is only arguably correct for one line
          item &mdash; the shingles &mdash; and even that rate may be too high based on actual
          condition. Every other item is being over-depreciated.
        </p>
      </div>

      <h2 id="why-acv-matters" className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Excessive Depreciation Matters &mdash; Even on Replacement Cost Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some people assume that depreciation doesn&rsquo;t matter on a replacement cost policy
        because the policyholder can recover the depreciation later by completing repairs. While
        that is true in theory, it ignores several realities:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Not Everyone Wants to Repair
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder has every legal and ethical right to take the ACV payment and not repair.
        They might decide to sell the property as-is. They might not be able to afford the
        out-of-pocket gap between the ACV payment and the repair cost. They might have other
        priorities. Whatever the reason, choosing not to repair is a perfectly legitimate decision.
        For these policyholders, excessive depreciation directly reduces their final recovery with
        no opportunity to get it back.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Holdback Creates a Cash Flow Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even for policyholders who intend to repair, excessive depreciation means a smaller initial
        ACV payment. That means less money upfront to hire a contractor and begin repairs. Some
        policyholders cannot afford to start repairs without adequate initial funding, creating a
        catch-22: they need the holdback to fund the repairs, but they need to complete the repairs
        to get the holdback.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        There Are Deadlines and Hoops
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recovering the depreciation holdback is not automatic. The policyholder must complete (or
        in some policies, incur) the repairs within a specified time period, then submit
        documentation to prove it. Under California Insurance Code &sect; 2051.5(b)(1)(A), the
        statutory minimum is 12 months from the date the ACV payment is made &mdash; but the
        policy may provide a longer period. If the policyholder misses the deadline or fails to
        submit adequate documentation, the holdback is forfeited.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Extensions of Time to Recover Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has expanded the time policyholders have to rebuild and collect the holdback,
        particularly after declared disasters. For losses related to a declared state of
        emergency, &sect; 2051.5(b)(1)(B) (as amended by AB 1800 in 2018) sets the statutory
        minimum at <strong>36 months</strong> from the date the first ACV payment is made,
        with additional six-month extensions available for good cause when the insured, acting
        in good faith and with reasonable diligence, encounters delays beyond their control
        &mdash; including delays caused by contractor shortages, permit backlogs, or community-
        wide rebuilding efforts. Some disaster events have triggered longer windows enacted by
        the Legislature for specific catastrophes. Mark the deadline in your calendar, but also
        document every delay you encounter so you can justify an extension if you need one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer is refusing to grant a reasonable extension after a declared disaster,
        this is not legal advice, but it is frequently worth consulting an attorney &mdash; the
        extension statutes exist precisely because the Legislature recognized that 12 months is
        not realistic in a major-loss environment. Only an attorney can advise you on whether
        your facts support an extension claim under the statute as it applies to your loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more details on the holdback recovery process, including the critical difference
        between policies that require <em>completion</em> of repairs versus those that require
        only <em>incurring</em> the expense, see our article on{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">
          loss settlement provisions
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Fight Excessive Depreciation Even If You Plan to Repair">
        <p>
          A Public Adjuster may push back on excessive depreciation even when the policyholder
          intends to complete repairs and recover the holdback. Why? Because it is the right
          thing to do. The rules exist for a reason, and the insurance company should follow them.
          How aggressively to fight depends on the amount of money involved, the difficulty of
          the fight, and the homeowner&rsquo;s priorities and strategy &mdash; but the principle
          is the same: the insurer should not be applying depreciation that violates the law,
          regardless of whether the holdback might eventually be recovered.
        </p>
      </CalloutBox>

      <h2 id="case-law-and-authority" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Authority: Statutes, Regulations, Case Law, and Standards
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rules against excessive depreciation come from multiple sources. Here is a summary
        of the key authorities in California:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">California Statutes</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance Code &sect; 2051(b)</strong> &mdash; Defines ACV for either a
          total or partial loss to the structure or contents as the amount to repair,
          rebuild, or replace the thing lost or injured less a fair and reasonable
          deduction for physical depreciation based on its condition at the time of the
          injury. Limits depreciation to components &ldquo;normally subject to repair and
          replacement during the useful life of that structure.&rdquo; (As restructured by
          AB 188 (Stats. 2019, ch. 59), effective January 1, 2020, eliminating the prior
          &sect; 2051(b)(1)/(b)(2) bifurcation between total and partial losses. The
          labor-depreciation prohibition is regulatory; see 10 CCR &sect; 2695.9(f)(1)
          below.)
        </li>
        <li>
          <strong>Insurance Code &sect; 2051.5</strong> &mdash; Governs replacement cost
          recovery, including the 12-month minimum holdback collection period
          (&sect;&nbsp;2051.5(b)(1)(A)) extended to 36 months for state-of-emergency losses
          (&sect;&nbsp;2051.5(b)(1)(B), per AB&nbsp;1800, 2018).
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">California Regulations</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>10 CCR &sect; 2695.9(f)</strong> &mdash; Requires that any adjustment for
          betterment, depreciation, or salvage be &ldquo;discernable, measurable, itemized, and
          specified as to dollar amount,&rdquo; reflect &ldquo;a measurable difference in
          market value attributable to the condition and age of the property,&rdquo; and apply
          only to property &ldquo;normally subject to repair and replacement during the useful
          life of the property.&rdquo;
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)(1)</strong> &mdash; Expressly prohibits labor
          depreciation: &ldquo;the expense of labor necessary to repair, rebuild or replace
          covered property is not a component of physical depreciation and shall not be subject
          to depreciation or betterment&rdquo; (except for intrinsic labor in manufactured
          materials).
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(a)(2)</strong> &mdash; The matching regulation:
          &ldquo;When a loss requires replacement of items and the replaced items do not match
          in quality, color or size, the insurer shall replace all items in the damaged area so
          as to conform to a reasonably uniform appearance.&rdquo; The depreciation implication
          is that undamaged items replaced solely for matching purposes have not deteriorated
          and should not be depreciated.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Key Case Law</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Doan v. State Farm General Ins. Co.</em></strong> (2011) 195 Cal.App.4th
          1082 &mdash; Two layers. The binding appellate holding is procedural: a
          policyholder may challenge the insurer&rsquo;s depreciation methodology in court
          through declaratory relief rather than being forced into appraisal, because an
          appraiser has no authority to decide whether the insurer&rsquo;s method of
          calculating depreciation breaches the contract or violates &sect; 2051. The
          substantive condition-not-age rule the case is best known for came from the 2016
          trial-court ruling on remand &mdash; correct standard, not statewide-binding
          precedent. Pair with &sect; 2051(b) and 10 CCR &sect; 2695.9(f) for primary
          authority.
        </li>
        <li>
          <strong><em>Cheeks v. California FAIR Plan Ass&rsquo;n</em></strong> (1998) 61
          Cal.App.4th 423 &mdash; Historical interest only. <em>Cheeks</em> applied a broad-
          evidence approach to total losses, which the California Legislature subsequently
          <strong> superseded</strong> by AB 188 (Stats. 2019, ch. 59), effective January 1,
          2020, which amended &sect; 2051(b) to require RC-less-depreciation methodology for
          both total and partial losses.
        </li>
        <li>
          <strong><em>Shelter Mut. Ins. Co. v. Goodner</em></strong> (Arkansas) &mdash;
          Out-of-state case holding that labor cannot be depreciated. (In California, the same
          rule is set by statute and regulation; this case is illustrative only.)
        </li>
        <li>
          <strong><em>Hicks v. State Farm</em></strong> (Kentucky) &mdash; Held that labor
          depreciation is improper because labor does not have a &ldquo;used&rdquo; equivalent.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Industry Standards and Policy Language</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond statutes and case law, the insurance policy itself limits depreciation. The
        standard replacement cost loss settlement provision states that the insurer will pay the
        cost to repair or replace with materials of &ldquo;like kind and quality&rdquo; &mdash;
        not with depreciated materials. The policy contemplates that depreciation is a timing
        mechanism (the holdback), not a permanent reduction in value. Also, industry
        estimating standards &mdash; including Xactimate&rsquo;s own documentation &mdash;
        distinguish between depreciable and non-depreciable line items. When the insurer&rsquo;s
        own estimating software provides for zero depreciation on labor and general conditions,
        the carrier has a difficult time justifying their decision to depreciate those items
        anyway.
      </p>

      <h2 id="how-to-fight-back" className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Fight Excessive Depreciation
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Demand an itemized depreciation schedule.</strong> The insurer must show you
          how depreciation was calculated for each component of the estimate &mdash; not just a
          total. If they applied a blanket rate, demand they break it down. Many excessive
          depreciation schemes cannot survive this scrutiny.
        </li>
        <li>
          <strong>Challenge labor depreciation.</strong> Identify every labor line item in the
          estimate and demand that depreciation be removed from each one. Cite the relevant case
          law and the California regulatory language requiring condition-based depreciation.
        </li>
        <li>
          <strong>Identify long-life components.</strong> Review the estimate for items like
          concrete, framing, copper plumbing, and masonry. If these are being depreciated at
          the same rate as shorter-life items, challenge each one with a reasonable useful-life
          analysis.
        </li>
        <li>
          <strong>Separate damaged from undamaged matching areas.</strong> If the estimate
          includes items being replaced for matching, demand separate line items with zero
          depreciation on the undamaged portions. Cite 10 CCR &sect; 2695.9(a)(2).
        </li>
        <li>
          <strong>Document actual condition.</strong> Photographs of the property before the loss
          (if available), maintenance records, and contractor assessments of the pre-loss
          condition all support a lower depreciation rate. Under &sect; 2051(b) and the
          <em>Doan</em> trial-court ruling, condition is what matters, and evidence of good
          condition directly undermines the insurer&rsquo;s depreciation.
        </li>
        <li>
          <strong>Put it in writing.</strong> All depreciation challenges should be made in a
          formal written letter citing the specific legal authority, the specific line items
          being challenged, and the corrected depreciation amount.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Don&rsquo;t Accept &ldquo;That&rsquo;s Just How We Do It&rdquo;">
        <p>
          Insurance adjusters will sometimes respond to depreciation challenges by saying that
          their blanket-rate method is &ldquo;standard practice&rdquo; or &ldquo;how our system
          works.&rdquo; That is not a legal defense. The insurer&rsquo;s internal workflow does
          not override California statutes and regulations. If the law says depreciation must be
          condition-based, itemized, and limited to materials that actually deteriorate, the
          insurer&rsquo;s software settings do not change that obligation.
        </p>
      </CalloutBox>

      <h2 id="bottom-line" className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Excessive depreciation is one of the most common and least-challenged ways insurance
        companies reduce claim payments. The rules are clear: depreciation must be based on
        condition, not age. Labor cannot be depreciated. Long-life components should receive
        minimal depreciation. Undamaged areas replaced for matching should not be depreciated
        at all. Overhead, profit, permits, and other current costs are not depreciable. And the
        insurer must provide an itemized justification for every depreciation deduction.
      </p>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CDI Has Found Insurers Guilty of Excessive Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has used its market conduct examination
        authority to examine FAIR Plan claims-handling practices. CDI&rsquo;s{' '}
        <strong>Stipulation and Order 2023-2</strong> &mdash; issued November 30, 2023
        adopting the market conduct examination report of the California FAIR Plan
        Association &mdash; is one example. The Order and the underlying examination
        report (both posted on the CDI website) address a range of FAIR Plan claims-handling
        issues; the underlying examination report and the related corrective-action
        documentation are the primary sources for the specific depreciation findings
        and remedial measures that followed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The corrective-action package the FAIR Plan implemented in connection with the
        examination reportedly included staffing changes (internal claim examiners, quality
        auditors, and trainers) and ongoing quality-assurance audits of both independent
        adjuster and internal staff file handling. Insureds with FAIR Plan claims who
        encounter depreciation issues are well-served to compare their carrier&rsquo;s
        approach to the regulatory expectations reflected in this market conduct work.
        The current Stipulation and Order, market conduct reports, and related public
        filings are available through CDI&rsquo;s public records.
      </p>

      <CalloutBox variant="important" title="CDI Market Conduct Exams Are Public Record">
        <p>
          When the CDI finds that an insurer has engaged in improper depreciation practices,
          the examination report becomes part of the public record. If your insurer is applying
          depreciation in ways that seem unreasonable, check the CDI&rsquo;s{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            examination reports database
          </Link>{' '}
          to see if the same insurer has been cited for similar violations. A prior CDI finding
          of improper depreciation is powerful ammunition for your dispute.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders never challenge depreciation because they don&rsquo;t know these
        rules exist. Now you do. If your insurer has applied excessive depreciation to your
        claim, challenge it in writing, cite the specific legal authority, and demand a
        correction. If you need help, a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed Public Adjuster
        </Link>{' '}
        can analyze the depreciation on your estimate, identify every violation, and negotiate
        a corrected amount on your behalf.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        See also:{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          ACV vs. RCV
        </Link>{' '}
        |{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          Labor Depreciation
        </Link>{' '}
        |{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">
          Matching
        </Link>{' '}
        |{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">
          Loss Settlement Provisions
        </Link>
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
