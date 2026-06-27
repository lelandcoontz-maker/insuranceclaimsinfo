import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'ACV vs. RCV: Actual Cash Value vs. Replacement Cost Value',
  description:
    'How California measures actual cash value and replacement cost under Insurance Code § 2051(b) and the Fair Claims Settlement Practices Regulations — including why California is not a broad evidence rule state, how depreciation schedules and useful life numbers are derived, and where carrier depreciation breaks down on roofing, flooring, contents, and labor.',
  summary:
    'Actual cash value (ACV) is replacement cost minus a fair and reasonable deduction for physical depreciation; replacement cost value (RCV) is the full cost to replace. In California, the formula is statutory (Cal. Ins. Code § 2051(b)) and uniform for total and partial losses since January 1, 2020 — not the broad evidence rule. Depreciation is limited to components normally subject to repair and replacement during the structure’s useful life, cannot include labor (10 CCR § 2695.9(f)(1)), and on contents must reflect each item’s actual physical condition under Doan v. State Farm.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California ACV, Replacement Cost
          Value, and depreciation rules by a Licensed California Public Adjuster. It is
          not legal advice. California&rsquo;s ACV framework is statutory (Cal. Ins.
          Code &sect; 2051(b)), and depreciation disputes are fact-specific. For legal
          questions, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two of the most important terms in a property insurance policy are Actual Cash
        Value (ACV) and Replacement Cost Value (RCV). The difference between them
        directly determines how much money is paid after a loss, and how that money
        is released. The depreciation deduction that separates RCV from ACV is driven
        by carrier-controlled inputs &mdash; useful life assignments, condition
        determinations, and schedules &mdash; that frequently understate what an
        insured is actually owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article walks through the RCV/ACV distinction, the California statutory
        and regulatory framework that controls depreciation, why California is not a
        broad evidence rule state, how carriers derive useful life numbers, where
        those numbers commonly break down, and the steps an insured can take to
        challenge them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is Replacement Cost Value (RCV)?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Replacement Cost Value is the amount it would cost to repair or replace
        damaged property with materials of like kind and quality at current prices,
        without any deduction for depreciation. If a storm destroys a ten-year-old
        roof, RCV is the cost to install a new roof of comparable quality today. RCV
        reflects what things actually cost right now, regardless of the age or
        condition of the item before the loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is Actual Cash Value (ACV)?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Actual Cash Value is most commonly <em>calculated</em> as replacement cost
        minus depreciation. Using the same roof example, if a new comparable roof
        costs $25,000 (the RCV) and the insurer determines that 40 percent of the
        roof&rsquo;s useful life has been consumed, the insurer would subtract
        $10,000 in depreciation, resulting in an ACV of $15,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ACV is <strong>not</strong> the same thing as fair market value, even though
        the terms are sometimes used interchangeably. Fair market value is the price
        a willing buyer would pay a willing seller in an open market &mdash; and that
        number can be significantly higher or lower than replacement cost minus
        depreciation. In California, the framework is statutory. Effective January 1,
        2020, the Legislature amended Insurance Code &sect; 2051(b) to require a
        uniform method of determining ACV for both total and partial losses, for both
        structure and contents: <strong>ACV = replacement cost less a fair and
        reasonable deduction for physical depreciation.</strong> This was a deliberate
        move away from the broad-evidence / fair-market-value approach that earlier
        California cases such as <em>Cheeks v. California FAIR Plan Ass&rsquo;n</em>{' '}
        (1998) 61 Cal.App.4th 423 had applied to total losses. In operative part,
        &sect; 2051(b) provides that the measure of the actual cash value recovery,
        for either a total or partial loss to the structure or its contents, shall
        be:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
        &ldquo;... the amount it would cost the insured to repair, rebuild, or
        replace the thing lost or injured less a fair and reasonable deduction for
        physical depreciation based upon its condition at the time of the injury or
        the policy limit, whichever is less.&rdquo;
      </blockquote>
      <p className="text-sm text-gray-500 italic">
        Cal. Ins. Code &sect; 2051(b), as amended by AB 188 (Stats. 2019, ch. 59),
        effective January 1, 2020. AB 188 (2019) eliminated the prior bifurcation
        between total losses (formerly &sect; 2051(b)(1), valued at fair market
        value) and partial losses (formerly &sect; 2051(b)(2), repair/rebuild/replace
        less depreciation), making the same replacement-cost-less-depreciation
        formula apply to &ldquo;either a total or partial loss to the structure or
        its contents.&rdquo; The statutory text still uses the traditional phrase
        &ldquo;thing lost or injured&rdquo;; the alternative phrase &ldquo;damaged or
        destroyed property&rdquo; appears in the related regulation, 10 CCR
        &sect; 2695.9(f)(1), not in the statute itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s labor-depreciation prohibition is regulatory. Under 10 CCR
        &sect; 2695.9(f)(1), &ldquo;the expense of labor necessary to repair, rebuild
        or replace covered property is not a component of physical depreciation and
        shall not be subject to depreciation or betterment&rdquo; (with a narrow
        exception for intrinsic labor in manufactured materials). The framework
        focuses on cost to the insured, not on what the item might sell for on the
        open market.
      </p>

      <CalloutBox variant="info" title="&ldquo;Thing Lost or Injured&rdquo; vs. &ldquo;Damaged or Destroyed Property&rdquo;: Why You&rsquo;ll See Both Phrases">
        <p>
          California first-party property law uses two different phrases for the same
          underlying concept, depending on whether the source is the statute or the
          regulation:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Cal. Ins. Code &sect; 2051(b) (the statute)</strong> uses{' '}
            <em>&ldquo;thing lost or injured.&rdquo;</em> This is traditional
            fire-insurance terminology that has been in the California Insurance Code
            since the standard fire policy was originally enacted. The phrase was
            preserved through the AB 188 (Stats. 2019, ch. 59) restructuring that
            eliminated the prior &sect; 2051(b)(1)/(b)(2) total-loss-vs-partial-loss
            bifurcation. The current statute still uses &ldquo;thing lost or
            injured.&rdquo;
          </li>
          <li>
            <strong>10 CCR &sect; 2695.9(f)(1) (the regulation)</strong> uses{' '}
            <em>&ldquo;damaged or destroyed property&rdquo;</em> and{' '}
            <em>&ldquo;covered property.&rdquo;</em> The California Department of
            Insurance chose modern terminology when drafting the Fair Claims
            Settlement Practices Regulations, which include the labor-depreciation
            prohibition.
          </li>
        </ul>
        <p className="mt-3">
          Both phrases refer to the same property. The cite-precision matters when
          quoting authority directly: if the source is the statute, use &ldquo;thing
          lost or injured&rdquo;; if the source is the regulation, use &ldquo;damaged
          or destroyed property&rdquo; or &ldquo;covered property.&rdquo; Some
          secondary sources have inadvertently combined the two &mdash; treating
          regulatory text as if it were statutory or claiming the statute was amended
          to adopt regulatory phrasing. Neither is accurate; the terminology
          distinction is a real one between the two sources of California law.
        </p>
      </CalloutBox>

      <CalloutBox variant="important" title="Check Your Policy Type">
        <p>
          The single most important thing an insured can confirm before a loss is
          whether the policy provides replacement cost or actual cash value coverage.
          RCV policies cost more in premium but pay significantly more at claim time.
          An ACV-only policy pays only the depreciated value &mdash; with no
          recoverable depreciation holdback to collect later.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California Is Not a Broad Evidence Rule State
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is not a broad evidence rule jurisdiction for determining ACV on
        residential or commercial property losses. California&rsquo;s courts once
        embraced a broad, fact-driven approach to ACV, but the Legislature displaced
        it with a specific statutory formula. For open property policies today,
        California fixes ACV by statute as replacement cost less a fair and
        reasonable deduction for physical depreciation &mdash; and that statute,
        along with the Department of Insurance regulations, places real limits on
        how depreciation may be calculated.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        What Is the Broad Evidence Rule?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;broad evidence rule&rdquo; is one of the principal methods courts
        use to determine actual cash value when a policy does not define the term.
        Under this rule, the fact-finder is not locked into a single formula.
        Instead, the fact-finder may consider every piece of evidence a reasonable
        appraiser would find relevant to value &mdash; including fair market value,
        replacement cost less depreciation, the property&rsquo;s income-generating
        capacity, obsolescence, and the property&rsquo;s overall condition &mdash;
        and assign whatever weight to each factor it deems appropriate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rule&rsquo;s strength is its flexibility; its weakness is that it
        supplies no fixed method for arriving at a number, which can make outcomes
        harder to predict. The broad evidence rule is the majority approach
        nationally and has been adopted by courts in roughly two dozen states. Other
        states instead define ACV as fair market value, as replacement cost less
        depreciation, or as replacement cost with no depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California belongs to none of those flexible camps today. It has adopted a
        specific statutory standard that controls over the common-law approaches.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        California&rsquo;s Historical Position: <em>Jefferson Insurance Co. v. Superior Court</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For much of the twentieth century, California treated ACV as a question of
        fact. In{' '}
        <em>
          Jefferson Insurance Co. of New York v. Superior Court of Alameda County
        </em>{' '}
        (1970) 3 Cal.3d 398, the California Supreme Court addressed the valuation of
        an insured building and confirmed that determining the actual cash value of
        insured property is a factual determination. The Court also drew a line that
        remains important in appraisal practice: appraisers are authorized to decide
        questions of fact &mdash; the amount of damage and the value of the property
        &mdash; not questions of coverage or policy interpretation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Jefferson</em> is frequently cited for the proposition that California
        once permitted a broad, evidence-weighing approach to ACV. That historical
        posture, however, has been overtaken by statute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        The Statutory Shift: California Insurance Code &sect; 2051
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051 now governs the measure of indemnity
        for open property policies, and it does so with far more precision than the
        broad evidence rule allows.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 2051(a)</strong> provides the baseline rule for fire
        insurance: under an open policy, the measure of indemnity is the expense to
        the insured of replacing the thing lost or injured in its condition at the
        time of the injury, computed as of the time the fire began.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 2051(b)</strong> supplies the operative ACV formula. As
        currently written (post-AB 188 (2019) restructure), the measure of recovery
        for either a total or partial loss is the amount it would cost the insured
        to repair, rebuild, or replace the thing lost or injured, less a fair and
        reasonable deduction for physical depreciation based upon its condition at
        the time of the injury &mdash; or the policy limit, whichever is less.
      </p>

      <CalloutBox variant="important" title="This Is Not the Broad Evidence Rule">
        <p>
          What &sect; 2051(b) codifies is{' '}
          <strong>replacement cost less depreciation</strong>. It is not the broad
          evidence rule, and it is not fair market value. An insurer cannot reach for
          a broad-evidence or market-value theory to depress the ACV of a covered
          loss in California.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        The 2020 Amendment Eliminated Fair Market Value for Total Losses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The current uniform language is the product of an amendment effective
        January 1, 2020. Before that amendment, &sect; 2051(b) treated total and
        partial losses differently: a total loss to a structure was valued at the
        policy limit or the fair market value of the structure, whichever was less,
        while a partial loss was valued at replacement cost less depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The amendment removed the fair market value standard for total losses and
        made the replacement-cost-less-depreciation method uniform across both total
        and partial losses. This was a significant change for policyholders, because
        rebuild costs frequently exceed a home&rsquo;s fair market value &mdash;
        meaning the prior fair-market-value standard often left owners of totally
        destroyed homes underindemnified. This distinction is especially relevant to
        actual cash value policies, including many issued by the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan Association
        </Link>
        , the state&rsquo;s insurer of last resort.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Depreciation Must Be Calculated in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law constrains not only the valuation standard but the mechanics
        of depreciation itself. Three limits do most of the work.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        1. Depreciation applies only to components subject to repair and replacement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051(b) provides that a deduction for physical depreciation applies
        only to components of a structure that are normally subject to repair and
        replacement during the structure&rsquo;s useful life. Structural elements
        not normally replaced over the life of the building are not proper subjects
        of depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What this means in practice: structural framing lumber is not
        &ldquo;normally subject to repair and replacement&rdquo; &mdash; no
        homeowner replaces wall studs as part of routine maintenance. Foundation
        concrete is not normally replaced during the life of a structure. Properly
        installed copper plumbing can last 50 to 100 years &mdash; approaching or
        exceeding the useful life of the structure itself. Wiring inside walls,
        structural steel, and load-bearing elements are all designed to be
        permanent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yet carriers routinely depreciate these components. They assign a useful
        life to framing lumber, to foundation elements, to embedded plumbing and
        wiring, and they subtract depreciation as though these items were
        consumable materials that homeowners regularly replace. Under
        &sect; 2051(b), that is improper. If structural components appear on the
        estimate as depreciated line items, that is one of the strongest grounds
        for challenge.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        2. Labor may not be depreciated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.9(f)(1), except for intrinsic labor costs already
        embedded in the cost of manufactured materials or goods, the labor necessary
        to repair, rebuild, or replace covered property is not a component of
        physical depreciation and may not be subject to depreciation or betterment.
        Depreciating the labor component of a repair estimate is therefore improper
        in California. For a deeper analysis, see the guide on{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          labor depreciation
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        3. Depreciation must be documented, measurable, and explained
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Fair Claims Settlement Practices Regulations, 10 CCR &sect; 2695.9(f),
        require that when a claim is adjusted for betterment, depreciation, or
        salvage, all justification be contained in the claim file. Any adjustment
        must be discernible, measurable, itemized, and specified as to dollar
        amount, and must accurately reflect the value of the betterment,
        depreciation, or salvage. Betterment and depreciation adjustments must
        reflect a measurable difference in market value attributable to the
        condition and age of the property and apply only to property normally
        subject to repair and replacement during its useful life. The basis for any
        adjustment must be fully explained to the claimant in writing.
      </p>

      <CalloutBox variant="tip" title="What This Means in Practice">
        <p>
          A depreciation adjustment that cannot be reconciled with &sect; 2051(b)
          and 10 CCR &sect; 2695.9(f) is vulnerable to challenge, and an
          insurer&rsquo;s failure to itemize and justify depreciation may itself
          implicate the Fair Claims Settlement Practices Regulations.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Depreciation Applies by Loss Type
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The limits above apply across the board, but they play out differently
        depending on what is being repaired or replaced. Three scenarios recur in
        practice: replacement of damaged building materials, partial repairs that
        raise matching concerns, and personal property (contents). They share a
        common spine &mdash; depreciation reaches only material and never labor,
        only wear-life components, and must always be itemized, condition-based,
        and explained in writing. What changes from one scenario to the next is the
        overlay.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        1. Replacement of Damaged Building Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the baseline structural scenario under Insurance Code
        &sect; 2051(b): ACV is the cost to repair, rebuild, or replace, less a fair
        and reasonable deduction for physical depreciation based on the
        component&rsquo;s condition at the time of injury. Two limits do most of
        the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, depreciation reaches only the <strong>material</strong>. Under 10
        CCR &sect; 2695.9(f)(1), the labor necessary to repair, rebuild, or replace
        is not a component of physical depreciation, except for intrinsic labor
        already embedded in the cost of manufactured goods. On a
        material-replacement line item, the material cost is isolated and only
        that portion is depreciated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, even within the material, depreciation applies only to components{' '}
        <strong>
          normally subject to repair and replacement during the structure&rsquo;s
          useful life.
        </strong>{' '}
        Wear items such as roofing, paint, flooring, carpet, and water heaters may
        be depreciated; components expected to last the life of the building, such
        as framing and foundation, generally are not proper subjects of
        depreciation at all. The deduction must reflect a measurable difference in
        market value tied to actual condition and age, itemized to a dollar amount,
        and explained to the insured in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        2. Partial Repairs and the Matching Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A partial repair &mdash; for example, replacing a few damaged shingles on a
        roof slope &mdash; runs through the same &sect; 2051(b) analysis (material
        only, wear components, condition-based), but it adds a second layer:
        matching. Under 10 CCR &sect; 2695.9(a)(2), when a loss requires
        replacement of items and the replaced items do not match in quality, color,
        or size, the insurer must replace all items in the{' '}
        <strong>damaged area</strong> so as to conform to a reasonably uniform
        appearance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether matching is triggered turns on whether the damaged material can
        actually be matched. If the shingle is still in production and the new
        material will match the existing field, the insurer may repair only the
        damaged shingles, and depreciation applies only to that replacement
        material. If the shingle is discontinued, or has weathered so that new
        material will not match, the matching requirement expands the repair scope
        to the area needed to restore a reasonably uniform appearance &mdash;
        which is where the significant dollars lie.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contested term is &ldquo;the damaged area.&rdquo; Insurers typically
        argue the area is less than the entire structure &mdash; the immediate
        area, the slope section, or the line of sight &mdash; while policyholders
        argue for the scope actually required to achieve uniform appearance, which
        on a hip roof where all slopes are visible from the ground may be the
        entire roof. An earlier version of the California regulation expressly
        referenced the &ldquo;area which encompasses clear line of vision,&rdquo;
        but that language was abandoned as too subjective; the operative standard
        today is simply a &ldquo;reasonably uniform appearance&rdquo; within the
        &ldquo;damaged area.&rdquo; Two structural points bear noting: the
        matching provision sits in subsection (a), which applies to{' '}
        <strong>replacement cost</strong> settlements, and subsection (a)(1)
        separately requires the insurer to include any consequential physical
        damage incurred in making the repair. For a deeper analysis, see the guide
        on{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">
          matching and uniform appearance
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        3. Personal Property (Contents) and <em>Doan v. State Farm</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contents fall within &sect; 2051(b) as well &mdash; for &ldquo;loss to its
        contents,&rdquo; ACV is replacement cost less a fair and reasonable
        deduction for physical depreciation based on condition at the time of
        injury. The governing California authority is{' '}
        <em>Doan v. State Farm General Ins. Co.</em> (2011) 195 Cal.App.4th 1082,
        but it is worth separating what the published appellate opinion held from
        what the litigation stands for, because the two are frequently conflated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The binding appellate holding is <strong>procedural.</strong> State Farm
        demanded appraisal to fix the amount of loss; the insured asked that
        appraisal be stayed until a court could determine the proper method for
        calculating actual cash value; the Court of Appeal sided with the insured
        and reversed the trial court&rsquo;s dismissal. Its reasoning was that an
        appraiser has no authority to decide whether the insurer&rsquo;s method of
        calculating depreciation breaches the contract or violates &sect; 2051
        &mdash; so a policyholder may pursue a declaratory relief action
        challenging depreciation <strong>methodology</strong> in court rather than
        being forced into appraisal. The opinion reversed the demurrer and allowed
        the methodology challenge to proceed; it did not itself adjudicate the
        substantive depreciation standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>substantive</strong> standard &mdash; the proposition the case
        is best known for among adjusters &mdash; is that depreciation of personal
        property must rest on the actual physical condition of each item at the
        time of loss, not on age alone or on undisclosed automatic schedules. That
        was the core of the insured&rsquo;s claim: that depreciation calculated
        solely on an item&rsquo;s age violated the policy and the Insurance Code.
        The insured had submitted his own claim itemizing depreciation for each
        item based on its actual physical condition, against the insurer&rsquo;s
        far larger schedule-driven figure. The condition-based standard was
        ultimately applied at the trial court level in 2016, where the court ruled
        that insurers must consider the physical condition of personal property at
        the time of loss and found the insurer had violated the regulations by
        failing to explain its depreciation in writing. That 2016 ruling is a
        trial court decision; it articulates the correct standard but is not
        itself binding statewide precedent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For contents, then, the accurate stack is: &sect; 2051(b) sets
        condition-based replacement-cost-less-depreciation; 10 CCR
        &sect; 2695.9(f) requires the deduction to be itemized, measurable
        against market value, and explained in writing; <em>Doan</em> (2011)
        secures the right to challenge the insurer&rsquo;s methodology in court
        rather than have it resolved in appraisal; and the <em>Doan</em> trial
        ruling applies the individualized-condition standard against
        schedule-based depreciation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Items Replaced Only to Achieve Uniform Appearance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recurring question within the matching scenario is whether the insurer
        may depreciate <strong>undamaged</strong> items that are replaced solely to
        achieve a reasonably uniform appearance. The California Fair Claims
        Settlement Practices Regulations answer this directly: <strong>no.</strong>{' '}
        The full operative text:
      </p>
      <CalloutBox variant="legal" title="10 CCR § 2695.9(a) — Full Text">
        <p className="italic">
          (a) When a residential or commercial property insurance policy provides
          for the adjustment and settlement of first party losses based on
          replacement cost, the following standards apply:
        </p>
        <p className="italic mt-3">
          (1) When a loss requires repair or replacement of an item or part, any
          consequential physical damage incurred in making the repair or replacement
          not otherwise excluded by the policy shall be included in the loss. The
          insured shall not have to pay for depreciation nor any other cost except
          for the applicable deductible.
        </p>
        <p className="italic mt-3">
          (2) When a loss requires replacement of items and the replaced items do
          not match in quality, color or size, the insurer shall replace all items
          in the damaged area so as to conform to a reasonably uniform appearance.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        The structure is plain on the face of the regulation. Both (a)(1) and
        (a)(2) are &ldquo;standards&rdquo; the regulation imposes on
        replacement-cost-policy losses under the (a) preamble. The (a)(1) rule
        that the insured pays only the deductible is a stand-alone sentence
        &mdash; it is not limited to the consequential-damage rule in the
        preceding sentence; it states an independent limit on what the insured
        pays. The (a)(2) matching obligation requires replacement of items in the
        damaged area to achieve uniform appearance. When the insurer is compelled
        by (a)(2) to replace items, the insured pays only the deductible &mdash;
        (a)(1) says so.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two reinforcing points strengthen the conclusion.{' '}
        <strong>First,</strong> the labor to remove and reinstall the matching
        material is non-depreciable in any event under &sect; 2695.9(f)(1).{' '}
        <strong>Second,</strong> the indemnity principle supports the result: the
        insured had a functioning, uniform roof (or siding, or floor) before the
        loss, did not elect to replace good material, and is made whole &mdash;
        not bettered &mdash; by restoring the pre-loss uniform condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers occasionally argue that (a)(1)&rsquo;s &ldquo;no
        depreciation&rdquo; sentence is grammatically tethered to the preceding
        consequential-damage sentence and does not reach (a)(2) matching items,
        or that replacing aged-but-undamaged material new-for-old confers a real
        betterment. These arguments cut against the natural structure of the
        regulation. They surface most often in actual-cash-value holdback
        calculations and on pure actual-cash-value policies rather than in final
        replacement-cost recoveries. On a replacement-cost policy, the matching
        scope is properly recovered at full replacement cost &mdash; the
        regulation does not contemplate the insured underwriting a cost the
        regulation itself compelled.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Two-Step Payment Process and Recoverable Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policies that provide replacement cost coverage, Insurance Code
        &sect; 2051.5 works alongside &sect; 2051. Under an open policy requiring
        payment of replacement cost, the measure of indemnity is the cost to
        repair, rebuild, or replace the property without a deduction for physical
        depreciation, or the policy limit, whichever is less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where the policy conditions full replacement cost on actually repairing or
        replacing the property, the insurer pays the actual cash value (as defined
        in &sect; 2051) first, and then pays the difference between that ACV
        payment and the full replacement cost once the work is done.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On an RCV policy, payment typically happens in two steps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Step 1 &ndash; ACV payment:</strong> The insurer first pays the
          actual cash value (replacement cost minus depreciation), less the
          deductible. This gives the insured money to begin repairs or
          replacements.
        </li>
        <li>
          <strong>Step 2 &ndash; Recoverable depreciation (holdback):</strong>{' '}
          After the insured completes the repairs or replaces the items and submits
          proof of the work or purchases, the insurer pays the remaining
          depreciation, bringing the total payment up to the full replacement cost.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Deadlines for Collecting Holdback">
        <p>
          Replacement cost policies include a deadline for completing replacements
          and collecting the recoverable depreciation. This deadline varies by
          policy, but in California, Insurance Code &sect; 2051.5(b)(1)(A) sets a
          statutory minimum of <strong>12 months</strong> from the date the{' '}
          <em>ACV payment is made</em> &mdash; not from the date of loss. This
          distinction matters because there can be months or even years between the
          date of loss and the date the insurer actually issues the ACV payment.
        </p>
        <p className="mt-3">
          <strong>State-of-emergency extension:</strong> For losses related to a
          declared state of emergency, &sect; 2051.5(b)(1)(B) (as amended by AB
          1800 in 2018, the last-chaptered bill in California&rsquo;s 2018 wildfire
          package alongside SB 894 and AB 1772) extends the minimum period for
          collecting replacement-cost benefits to <strong>36 months</strong> from
          the first ACV payment, with additional six-month extensions available for
          good cause. Wildfire and other declared-disaster losses almost always
          qualify for this longer period.
        </p>
        <p className="mt-3">
          If more time is needed even beyond these statutory minimums, an
          extension request in writing before the deadline passes is the safest
          route. Many policies allow extensions, and some provide longer periods
          than the statutory minimum.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies also impose a separate window in which the insured must
        notify the carrier of intent to recover depreciation. For more on the
        timing mechanics and how to protect this right after a loss, see the
        guide on the{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
          recoverable depreciation deadline
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Depreciation Is Calculated: Methods and Inputs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is supposed to reflect the actual loss in value due to age,
        wear, and obsolescence. Insurers typically use one of two methods:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Straight-line depreciation:</strong> The item&rsquo;s value is
          reduced by a fixed percentage for each year of its life. For example, an
          appliance with a 15-year useful life might be depreciated at roughly 6.7
          percent per year.
        </li>
        <li>
          <strong>Condition-based depreciation:</strong> The adjuster evaluates the
          actual condition of the item before the loss and assigns depreciation
          based on observed wear rather than a formula.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both methods involve judgment calls, and those judgment calls are where
        disputes often arise. An insurer who assigns 70 percent depreciation to a
        well-maintained 10-year-old item may be acting unreasonably.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The depreciation formula most carriers use is straight-line. The carrier
        assigns each component a &ldquo;useful life&rdquo; in years, determines
        how old the component is, and calculates the percentage of useful life
        that has been consumed. If the carrier assigns a roof a useful life of 20
        years and the roof is 10 years old, the depreciation is 50 percent. On a
        $30,000 roof replacement, that means $15,000 is withheld from the ACV
        payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This formula appears objective. But its fairness depends entirely on
        whether the useful life assignment is accurate and whether the
        depreciation methodology complies with the law. That is where the
        problems begin.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        &ldquo;Based Upon Its Condition at the Time of the Injury&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051(b)&rsquo;s &ldquo;based upon its condition at the time of the
        injury&rdquo; language means the carrier cannot simply look at the age of
        a component and apply a formula. Depreciation must be based on the actual
        physical condition of the property, not an abstract schedule driven by age
        alone. A well-maintained 20-year-old roof with 10 years of remaining
        useful life should not be depreciated the same as a neglected
        20-year-old roof with curling shingles and missing granules. The statute
        requires an individualized assessment of the property&rsquo;s actual
        condition &mdash; something most carriers fail to perform.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, adjusters rarely document the condition of components before
        applying depreciation. They plug a useful life number into their
        estimating software, enter the age, and let the system calculate the
        deduction. The &ldquo;condition at the time of loss&rdquo; requirement
        is treated as though it does not exist. California appellate authority
        backs the condition-based reading: <em>Doan v. State Farm</em> (2011) 195
        Cal.App.4th 1082 (procedural) plus the 2016 trial-court ruling on remand
        (substantive condition-based standard), discussed above.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Useful Life Tables: Where the Numbers Come From
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no single, universally accepted standard for the useful life of
        building components or personal property. Instead, carriers draw on a
        combination of sources, each with its own limitations. Understanding where
        these numbers originate helps explain why they so often fail to reflect
        reality.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Internal Carrier Depreciation Guides
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most major carriers maintain proprietary depreciation guides &mdash;
        internal reference documents that assign a useful life to hundreds or
        thousands of items, from roofing materials and plumbing to kitchen
        appliances and clothing. These guides are developed by the carrier&rsquo;s
        claims department, sometimes with input from industry consultants, and
        they are distributed to field adjusters as the default reference for
        depreciation calculations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These guides are rarely disclosed to policyholders and are almost never
        subject to independent review. They are created by the same entity that
        benefits financially from shorter useful life assignments. A carrier that
        assigns a useful life of 15 years to hardwood flooring instead of 50 years
        will withhold dramatically more depreciation on every flooring claim it
        handles. There is no regulatory body that audits these guides for accuracy
        or fairness.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Industry Tables and Published Studies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers reference published sources like the National Association of
        Home Builders (NAHB) Study of Life Expectancy of Home Components, which
        provides expected lifespans for hundreds of building materials. The NAHB
        study assigns a life expectancy of 100 years or more to solid hardwood
        flooring, over 50 years to slate and copper roofing, and 20 years to
        standard asphalt shingles. Estimating software like{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        also includes built-in depreciation schedules that adjusters can
        reference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, even when carriers reference these tables, they often cherry-pick
        the numbers that favor shorter useful lives. A carrier might cite the NAHB
        study for appliance lifespans (which tend to be short) while ignoring the
        same study&rsquo;s finding that hardwood floors last a century. When
        independent tables do not support the depreciation the carrier wants to
        apply, the carrier simply falls back on its own internal guide. These
        tables are guidelines, not law. They can be challenged.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Adjuster Judgment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many cases, the useful life assignment comes down to the individual
        adjuster&rsquo;s judgment. An adjuster inspecting a damaged roof might
        assign a useful life of 20 years based on general knowledge, personal
        experience, or simply because that is the number the carrier&rsquo;s
        training suggested. This judgment is often exercised without any physical
        inspection of the component&rsquo;s actual condition prior to the loss,
        without consulting manufacturer data, and without documenting the basis
        for the assignment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a system in which two adjusters from the same carrier,
        looking at the same type of component, might assign significantly
        different useful lives &mdash; and the policyholder has no way to know
        which number is correct or how it was determined. During catastrophe
        events, when carriers deploy temporary adjusters to process high volumes
        of claims quickly, these inconsistencies become even more pronounced.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Carriers Over-Depreciate: Common Tactics
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Over-depreciation is not a single error &mdash; it takes many forms.
        Understanding the specific ways carriers inflate depreciation helps
        identify problems on a particular claim and challenge them effectively.
        For a broader treatment of the pattern itself, see{' '}
        <Link href="/resources/excessive-depreciation" className="text-[#2E74B5] underline">
          excessive depreciation
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Using Aggressive Useful Life Assumptions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common form of over-depreciation is simply assigning useful lives
        that are shorter than what the material actually lasts. Consider these
        examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Architectural shingles depreciated over 20 years</strong> when
          manufacturers like GAF, CertainTeed, and Owens Corning provide
          warranties of 30 years to &ldquo;lifetime&rdquo; (typically 40 to 50
          years) and market expected service lives of 25 to 30 years or more
        </li>
        <li>
          <strong>Hardwood flooring depreciated over 15 years</strong> when the
          NAHB Study assigns a life expectancy of 100 years or more &mdash; solid
          hardwood can be refinished multiple times and, with proper maintenance,
          will outlast the structure
        </li>
        <li>
          <strong>Copper plumbing depreciated over 20 years</strong> when copper
          supply lines typically last 50 to 70 years, with some installations
          exceeding 100 years
        </li>
        <li>
          <strong>HVAC systems blanket-depreciated over 10 years</strong> when
          well-maintained systems commonly operate for 15 to 25 years, with
          furnaces averaging 15 to 20 years
        </li>
        <li>
          <strong>Interior paint depreciated over 3 years</strong> when quality
          interior paint in normal conditions can last 7 to 10 years, and even
          longer in low-traffic areas
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $30,000 roof replacement, the difference between a 20-year useful
        life and a 30-year useful life on a 10-year-old roof is the difference
        between 50 percent depreciation ($15,000 withheld) and 33 percent
        depreciation ($10,000 withheld). That single assignment swings the
        payment by $5,000.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Depreciating Components That Should Not Be Depreciated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed under &sect; 2051 above, depreciation applies only to
        components &ldquo;normally subject to repair and replacement during the
        useful life of that structure.&rdquo; Yet carriers regularly depreciate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Structural framing (wall studs, rafters, joists, beams) &mdash; these
          are designed to be permanent and are not replaced during normal
          maintenance
        </li>
        <li>
          Foundation elements (concrete slabs, footings, stem walls) &mdash; no
          homeowner replaces their foundation as routine maintenance
        </li>
        <li>
          Wiring inside walls &mdash; electrical wiring that is embedded during
          original construction is not normally accessed or replaced
        </li>
        <li>
          Insulation inside closed wall and ceiling cavities &mdash; this is
          installed once and left in place for the life of the structure
        </li>
        <li>
          Subfloor sheathing and roof decking &mdash; these structural elements
          are not normally replaced unless damaged
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the estimate shows depreciation on structural components that are not
        normally repaired or replaced, that is fair game to challenge. Citing
        Insurance Code &sect; 2051(b) directly and asking the carrier to explain
        why it believes the component is &ldquo;normally subject to repair and
        replacement during the useful life of the structure&rdquo; tends to
        force the issue out of the abstract.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Straight-Line Depreciation That Ignores Actual Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Straight-line depreciation assumes a component loses value at a constant
        rate from installation to the end of its useful life. A 10-year-old roof
        with a 20-year useful life gets 50 percent depreciation regardless of
        its actual condition. But property does not deteriorate in a straight
        line. A well-maintained item in excellent condition has more remaining
        value than the formula suggests, while a poorly maintained item might
        have less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051 requires that depreciation be based on condition at the
        time of loss, not merely age. If the carrier applied straight-line
        depreciation without evaluating condition, the calculation is legally
        deficient. This is particularly important for items that were in
        demonstrably excellent condition. A 15-year-old kitchen that was
        meticulously maintained and looks nearly new should not receive the
        same depreciation as an identical kitchen that was neglected.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Depreciating to Zero
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carrier depreciation schedules allow components to be depreciated to
        zero &mdash; meaning the carrier assigns no value whatsoever to an item
        that was still functioning and providing service at the time of loss. A
        25-year-old roof that was still keeping water out, a 30-year-old water
        heater that was still producing hot water, a 20-year-old dishwasher that
        was still washing dishes &mdash; if the item was functional and in use,
        it had value. Depreciating it to zero is unreasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a component still had remaining useful life and was performing its
        intended function, it had value. An item cannot logically have zero value
        while simultaneously providing the service for which it was installed.
        Any depreciation calculation that reduces a functional component to zero
        is worth pushing back on.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Labor Depreciation: The Critical Issue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most consequential issues in depreciation law is whether
        carriers may depreciate the{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          labor component
        </Link>{' '}
        of a repair or replacement estimate. In a typical Xactimate estimate,
        each line item includes both material costs and labor costs. When a
        carrier applies depreciation to the entire line item &mdash; rather than
        separating materials from labor &mdash; it depreciates both the materials
        and the labor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The logic against labor depreciation is intuitive: labor does not
        &ldquo;wear out.&rdquo; It costs the same to install new shingles whether
        the roof being replaced is 5 years old or 25 years old. A roofer charges
        the same hourly rate regardless of the age of the shingles being removed.
        There is no &ldquo;used&rdquo; version of a plumber&rsquo;s time. There
        is no market for &ldquo;depreciated labor.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        States That Have Prohibited Labor Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A growing number of states have concluded that depreciating labor is
        improper:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Arkansas</strong> &mdash;{' '}
          <em>Shelter Mut. Ins. Co. v. Goodner</em> held that labor costs are not
          subject to depreciation
        </li>
        <li>
          <strong>Kentucky</strong> &mdash; <em>Hicks v. State Farm</em> rejected
          the depreciation of labor as inconsistent with the concept of actual
          cash value
        </li>
        <li>
          <strong>Oklahoma</strong> &mdash; <em>Redlin v. Grinnell Mut.</em>{' '}
          found that labor does not physically deteriorate and therefore cannot
          be depreciated
        </li>
        <li>
          <strong>Virginia</strong> &mdash; the state has stated that
          depreciation of labor and other nontangible items is not permissible
          because they do not lose value or degrade over time
        </li>
        <li>
          <strong>Michigan</strong> &mdash; the Department of Insurance and
          Financial Services has issued guidance that no personal lines
          homeowners or dwelling insurer may depreciate labor absent a
          standalone, optional endorsement expressly allowing it
        </li>
        <li>
          <strong>Washington</strong> &mdash; the Office of the Insurance
          Commissioner has pursued rulemaking to prohibit the depreciation of
          labor on property claims
        </li>
        <li>
          <strong>Georgia, Hawaii, Illinois</strong> &mdash; multiple rulings
          have addressed the impermissibility of labor depreciation
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        California&rsquo;s Position: Labor Depreciation Is Prohibited by Regulation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California addresses the labor depreciation question through a Fair Claims
        Settlement Practices regulation. 10 CCR &sect; 2695.9(f)(1) provides:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
        &ldquo;Except for the intrinsic labor costs that are included in the cost
        of manufactured materials or goods, the expense of labor necessary to
        repair, rebuild or replace covered property is not a component of
        physical depreciation and shall not be subject to depreciation or
        betterment.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is unambiguous: on a California first-party property claim,
        the carrier may not depreciate the labor component of a repair or
        replacement estimate. The only labor that may be depreciated is labor
        already embedded in the manufactured material itself (the intrinsic
        labor that went into producing a shingle, a length of copper pipe, a
        window unit) &mdash; not the labor an insured will pay a contractor to
        install or replace the damaged component.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dollar impact is significant. Labor commonly represents 40 to 60
        percent of a dwelling repair estimate. On a $50,000 repair estimate
        where labor comprises $25,000, a carrier that applies 30 percent
        depreciation to the full estimate (including labor) withholds $7,500 in
        labor depreciation alone. On larger claims, depreciating labor in
        violation of 10 CCR &sect; 2695.9(f)(1) can cost policyholders $15,000
        to $30,000 or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear regulatory text, some carriers and their estimating
        software still apply depreciation to combined material-plus-labor line
        items, which has the practical effect of depreciating labor. On every
        California claim, comparing the labor portion of each line item to the
        depreciation applied &mdash; and confirming that no portion of the labor
        cost has been depreciated &mdash; is the only reliable way to catch it.
        Where the carrier&rsquo;s estimate fails to separate labor from
        materials, requesting the breakout in writing and citing 10 CCR
        &sect; 2695.9(f)(1) as the basis is the standard move.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Items That Should Not Be Depreciated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not everything is subject to depreciation, and this is an area where
        insurers frequently make errors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Labor costs:</strong> In several states, courts have ruled
          that labor does not depreciate. The cost to pay a roofer or painter
          today is the cost today, period. The age of the materials is
          irrelevant to the cost of installing new ones. In California, the
          rule is regulatory: 10 CCR &sect; 2695.9(f)(1) provides that the
          expense of labor necessary to repair, rebuild, or replace covered
          property is not a component of physical depreciation and shall not be
          subject to depreciation or betterment (with a narrow exception for
          intrinsic labor in manufactured materials). An insured who sees labor
          depreciation on a California estimate has a basis to dispute it.
        </li>
        <li>
          <strong>Concrete foundations and slabs:</strong> Concrete has an
          extremely long useful life. Depreciating a concrete slab at the same
          rate as roofing materials is inappropriate, yet some insurers do it.
        </li>
        <li>
          <strong>General conditions and overhead:</strong> Items like permits,
          debris removal, and contractor overhead and profit reflect current
          costs and generally should not be depreciated.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Insurer Mistakes with Depreciation
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Applying a blanket depreciation percentage to an entire estimate rather
          than depreciating individual components based on their actual age and
          condition
        </li>
        <li>
          Depreciating items beyond their useful life (an item cannot be
          depreciated to zero if it was still functioning before the loss)
        </li>
        <li>
          Depreciating labor, overhead, and profit, which reflect current costs
          and do not age
        </li>
        <li>
          Using an unreasonably short useful life to inflate the depreciation
          percentage
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Depreciation Disputes by Building Component
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain building components generate depreciation disputes more
        frequently than others. The following are the areas where
        over-depreciation is most common and where challenges are most likely
        to succeed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Roofing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing is the single most disputed depreciation category because roofs
        are frequently damaged by covered perils (hail, wind, fire) and because
        the dollar amounts involved are substantial. Common over-depreciation
        tactics on roofing include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Assigning a 20-year useful life to architectural shingles that carry
          30-year or longer warranties
        </li>
        <li>
          Using the same useful life for all shingle types regardless of grade
          &mdash; three-tab shingles and premium architectural shingles are
          treated identically
        </li>
        <li>
          Failing to credit well-maintained roofs that show minimal granule loss
          and no signs of aging
        </li>
        <li>
          Depreciating underlayment, ice-and-water shield, flashing, and roof
          decking as though these are components that homeowners regularly
          replace (many of these are installed once and left in place for the
          life of the roof)
        </li>
        <li>
          Depreciating labor on the entire roof replacement estimate,
          effectively penalizing the policyholder for the age of the shingles
          when the cost to remove and install shingles does not change based on
          shingle age
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This analysis is separate from{' '}
        <Link href="/resources/betterment-and-improvement" className="text-[#2E74B5] underline">
          betterment and improvement
        </Link>{' '}
        issues, where a carrier might argue the insured is receiving an upgrade.
        Depreciation and betterment are distinct concepts, and the carrier
        should not conflate them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Flooring
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Flooring disputes arise because carrier depreciation schedules frequently
        assign useful lives that are dramatically shorter than the
        material&rsquo;s actual lifespan. Solid hardwood flooring can last 100
        years or more and can be refinished 8 to 10 times during its life.
        Natural stone flooring (marble, granite, slate) can last centuries. Even
        engineered hardwood commonly lasts 20 to 40 years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier assigns a 15-year useful life to hardwood flooring that
        the NAHB says lasts 100 years, the resulting depreciation on a
        10-year-old floor is 67 percent instead of 10 percent. On a $20,000
        flooring claim, that is the difference between paying $6,600 at ACV and
        paying $18,000 at ACV &mdash; an $11,400 swing caused entirely by the
        useful life assignment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Cabinetry
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kitchen and bathroom cabinetry frequently receives aggressive
        depreciation despite the fact that quality cabinetry can last 30 to 50
        years or longer with normal care. Solid wood cabinetry from quality
        manufacturers is designed to be a semi-permanent fixture. Yet carriers
        commonly assign useful lives of 15 to 20 years, generating substantial
        depreciation on kitchens that were in excellent condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photos showing the pre-loss condition of cabinetry are particularly
        valuable here. Well-maintained cabinets that show no signs of wear,
        delamination, or cosmetic deterioration should receive minimal
        depreciation regardless of their age.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Plumbing and Electrical
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Embedded plumbing and electrical systems present a strong argument under
        Section 2051&rsquo;s &ldquo;normally subject to repair and
        replacement&rdquo; provision. Copper supply lines, cast iron drain
        lines, and electrical wiring inside walls are all installed during
        construction and left in place for decades. Homeowners do not replace
        the wiring inside their walls or the supply lines behind their drywall
        as routine maintenance. These components are arguably not subject to
        depreciation at all under the statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even plumbing fixtures &mdash; faucets, toilets, sinks &mdash;
        frequently have useful lives longer than what carriers assign. Quality
        fixtures from major manufacturers carry warranties of 10 years or
        longer, and many remain fully functional for 20 to 30 years.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Windows and Doors
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quality windows can last 20 to 40 years, with some high-end wood and
        fiberglass windows lasting 50 years or more. Exterior doors, when
        properly maintained, can last the life of the structure. Interior doors
        are essentially permanent fixtures that require no routine replacement.
        Yet carriers frequently apply aggressive depreciation to windows and
        doors, particularly on older homes where the dollar amounts are
        significant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Drywall and Interior Finishes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Drywall is a particularly interesting depreciation dispute. The drywall
        itself &mdash; the gypsum board &mdash; has an indefinite useful life
        absent water damage or physical impact. It does not wear out. The paint
        and texture on the drywall surface may need periodic refreshing, but
        the substrate itself is essentially permanent. Some carriers apply
        depreciation to the entire drywall replacement cost (demolition,
        replacement board, taping, texturing, and painting) based on the age of
        the paint finish, which dramatically overstates the depreciation that
        should apply.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Personal Property and Contents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation on{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          personal property and contents claims
        </Link>{' '}
        follows the same principles but presents unique challenges. Carriers
        often apply category-based depreciation &mdash; &ldquo;all clothing, 50
        percent&rdquo; or &ldquo;all electronics, 60 percent&rdquo; &mdash;
        rather than evaluating each item individually. This ignores the fact
        that a two-month-old winter coat should not be depreciated the same as
        a five-year-old t-shirt. Under <em>Doan</em>, the standard is
        item-by-item physical condition, not category averages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Worth watching for on contents:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Excessive depreciation on durable goods.</strong> A quality
          leather sofa may last 15 to 20 years, but carriers frequently assign
          useful lives of 5 to 8 years. Cast iron cookware can last
          generations. High-end hand tools can last a lifetime.
        </li>
        <li>
          <strong>Category-based depreciation.</strong> Blanket percentages
          applied to entire categories of belongings ignore the individual
          condition and remaining useful life of each item &mdash; the precise
          practice <em>Doan</em> targets.
        </li>
        <li>
          <strong>The &ldquo;like kind and quality&rdquo; trap.</strong> The
          carrier selects the cheapest arguable &ldquo;comparable&rdquo;
          replacement, reducing the RCV before depreciation is even applied,
          creating a double reduction. The fix is to insist on true
          comparability in type, grade, features, and quality.
        </li>
        <li>
          <strong>No credit for items in excellent condition.</strong> Under
          &sect; 2051, actual condition matters. A piece of furniture in
          near-new condition should receive less depreciation than the same
          item in poor condition.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Challenge Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Challenging depreciation requires documentation, research, and
        persistence. The following strategies are the most effective approaches,
        whether the insured handles the claim directly or works with a Public
        Adjuster or attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Request the Carrier&rsquo;s Depreciation Schedule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first step is to request a copy of the carrier&rsquo;s depreciation
        guide or schedule &mdash; the internal document the adjuster relied on
        to determine useful life. Many carriers will resist this request,
        claiming the guide is proprietary. California&rsquo;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (Cal. Code Regs., tit. 10, &sect; 2695.7) require insurers to provide a
        reasonable explanation of the basis for a claim settlement. If the
        carrier used a specific guide to calculate depreciation, the
        policyholder is entitled to know what that guide says. A number cannot
        be meaningfully disputed without knowing how it was derived.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the guide is in hand, compare its useful life assignments to
        independent sources. If the guide assigns a 15-year useful life to
        hardwood flooring while the NAHB study says 100 years, there is a
        powerful basis for challenging the depreciation calculation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Compare to Actual Condition: Photos and Maintenance Records
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Demonstrating that the damaged property was in good condition before the
        loss undermines the carrier&rsquo;s ability to apply aggressive
        depreciation based on age alone. Useful evidence includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Photographs or video of the property taken before the loss (even
          casual photos that happen to show the condition of relevant
          components)
        </li>
        <li>
          Maintenance records showing regular upkeep &mdash; roof inspections,
          HVAC servicing, flooring refinishing, plumbing maintenance, painting
          schedules
        </li>
        <li>
          Prior inspection reports from real estate transactions, home warranty
          companies, or municipal inspections
        </li>
        <li>
          Statements from contractors or tradespeople who worked on the
          property and can attest to the condition of specific components
        </li>
        <li>
          Prior insurance inspections &mdash; some carriers inspect properties
          at policy inception or renewal and may have documented the condition
          of the very components they are now depreciating
        </li>
        <li>
          Google Street View or satellite imagery showing the exterior
          condition of the property at various dates before the loss
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051&rsquo;s requirement that depreciation be &ldquo;based upon
        its condition at the time of the injury&rdquo; means that evidence of
        actual condition should override any abstract depreciation schedule.
        If the carrier&rsquo;s own inspector noted that the roof was in
        &ldquo;good condition&rdquo; two years before the loss, that
        inspector&rsquo;s assessment contradicts aggressive depreciation
        applied after the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Challenge Items Depreciated Beyond Their Actual Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Review the{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          estimate
        </Link>{' '}
        line by line and identify every component where the depreciation
        percentage seems inconsistent with the item&rsquo;s actual condition.
        If 12-year-old kitchen cabinets were in excellent condition &mdash; no
        water damage, no wear, no cosmetic defects &mdash; and the carrier
        depreciated them 60 percent on a 20-year useful life, the depreciation
        does not reflect reality. A written response identifying each
        component, explaining its actual condition, and providing documentation
        is the standard format.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Challenge Structural Components Under Section 2051
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Separately identify every structural component that has been
        depreciated and challenge it under the &ldquo;normally subject to
        repair and replacement&rdquo; provision. Frame the argument precisely:
        ask the carrier to identify when, during the normal useful life of the
        structure, the component in question would have been repaired or
        replaced. If the answer is &ldquo;never, unless damaged by a covered
        event,&rdquo; then the component is not &ldquo;normally subject to
        repair and replacement,&rdquo; and no depreciation should apply.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Compare to Manufacturer Warranties and Specifications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturer warranties provide a useful baseline for challenging
        useful life assignments. If the manufacturer provides a 30-year
        warranty, the carrier&rsquo;s assignment of a 20-year useful life is
        immediately suspect. The manufacturer &mdash; which has a financial
        incentive to not overstate the product&rsquo;s lifespan &mdash; has
        determined that the product should perform for at least 30 years. A
        carrier that assigns a shorter useful life is, in effect, claiming to
        know more about the product than the company that made it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturer product data sheets, warranty documents, and any
        published performance data for the specific materials involved are all
        useful here. Warranties often represent the minimum expected lifespan,
        not the maximum. Professional trade associations &mdash; organizations
        like the Copper Development Association, the Asphalt Roofing
        Manufacturers Association, and the National Wood Flooring Association
        &mdash; also publish expected lifespan data that can support the
        challenge.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Get an Expert Opinion on Remaining Useful Life
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For significant claims, retaining an independent expert &mdash; a
        roofing consultant, a general contractor, an engineer, or a materials
        specialist &mdash; to evaluate the remaining useful life of the
        depreciated components is often worth the cost. An expert who inspects
        the property and provides a written opinion that the carrier&rsquo;s
        useful life assignment is unreasonably short carries significant
        weight, both in negotiation and in any subsequent appraisal or
        litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Building Your Depreciation Challenge: Step by Step
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the claim estimate arrives with depreciation that appears
        excessive, the following steps build a clean record:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review the estimate line by line.</strong> Identify every
          component where depreciation has been applied. Note the useful life
          assigned, the age used, and the resulting depreciation percentage.
          Calculate the dollar impact of depreciation on each line. Look
          specifically for structural components that should not be
          depreciated and for labor depreciation.
        </li>
        <li>
          <strong>Request the carrier&rsquo;s depreciation guide.</strong> Ask
          the adjuster to provide the source document or schedule used to
          assign useful life for each depreciated component. Put this request
          in writing. If the carrier refuses, cite Cal. Code Regs., tit. 10,
          &sect; 2695.7 and the insurer&rsquo;s obligation to explain the
          basis for its settlement calculation.
        </li>
        <li>
          <strong>Research independent useful life data.</strong> For each
          major depreciated component, gather manufacturer warranty
          information, NAHB life expectancy data, trade association
          publications, and any other independent sources that address the
          expected lifespan of the material.
        </li>
        <li>
          <strong>Document actual condition.</strong> Assemble all available
          evidence of the property&rsquo;s condition before the loss:
          photographs, maintenance records, inspection reports, contractor
          statements. If the property has not been demolished or repaired,
          have an expert inspect and document the condition of key components.
        </li>
        <li>
          <strong>Prepare a written challenge.</strong> Draft a letter to the
          carrier that identifies each depreciation figure in dispute,
          provides the independent data supporting a longer useful life,
          addresses the actual condition of the property, and calculates the
          corrected ACV based on appropriate depreciation. Cite California
          Insurance Code &sect; 2051 and the requirement that depreciation be
          based on the property&rsquo;s actual condition.
        </li>
        <li>
          <strong>Address labor depreciation separately.</strong> If the
          carrier has depreciated labor on a California claim, raise this as
          a distinct issue and cite 10 CCR &sect; 2695.9(f)(1) directly:
          &ldquo;Except for the intrinsic labor costs that are included in
          the cost of manufactured materials or goods, the expense of labor
          necessary to repair, rebuild or replace covered property is not a
          component of physical depreciation and shall not be subject to
          depreciation or betterment.&rdquo; This is a regulatory
          prohibition, not merely a policy argument.
        </li>
        <li>
          <strong>
            Identify components that should not be depreciated at all.
          </strong>{' '}
          Separately list structural components that are not &ldquo;normally
          subject to repair and replacement&rdquo; and cite Cal. Ins. Code
          &sect; 2051(b) for each.
        </li>
        <li>
          <strong>Escalate if necessary.</strong> If the adjuster refuses to
          adjust depreciation, escalate to a supervisor or the carrier&rsquo;s
          complaint department. If the carrier will not move, options include
          filing a complaint with the California Department of Insurance,
          invoking the appraisal clause in the policy, or retaining a Public
          Adjuster or attorney to advocate on the insured&rsquo;s behalf.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Recoverable Depreciation: The Replacement Cost Holdback
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a replacement cost policy, depreciation creates a two-payment
        structure. The first payment is the ACV &mdash; replacement cost minus
        depreciation. The second payment &mdash; the recoverable depreciation
        &mdash; is paid after the insured completes repairs and submits
        documentation showing the costs were incurred. This is sometimes
        called the &ldquo;holdback&rdquo; because the carrier holds back the
        depreciation until repairs are completed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies impose a{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
          deadline to recover depreciation
        </Link>
        . The California statutory minimums &mdash; 12 months under
        &sect; 2051.5(b)(1)(A) and 36 months under (b)(1)(B) for declared
        states of emergency &mdash; set the floor; many policies provide
        longer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where excessive depreciation creates a trap. When the initial
        ACV payment is inadequate to fund repairs &mdash; which happens
        frequently when depreciation is aggressive &mdash; the insured is
        caught in a bind: cannot afford to begin repairs without the
        recoverable depreciation, and cannot collect the recoverable
        depreciation without completing repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Excessive depreciation exacerbates this problem. The more aggressively
        the carrier depreciates, the less money the insured receives upfront,
        the harder it is to fund repairs, and the more likely the deadline is
        to slip. Some policyholders simply give up on recovering the withheld
        depreciation because they cannot bridge the funding gap within the
        policy&rsquo;s time constraints. The standard counter is to notify the
        carrier in writing that the ACV payment is insufficient to begin
        repairs, request an extension of the recovery deadline, and consider
        whether the carrier&rsquo;s inadequate initial payment itself
        constitutes a violation of its{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          fair claims settlement obligations
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To collect recoverable depreciation, the insured will typically need
        to provide the carrier with proof that repairs were completed
        &mdash; contractor invoices, receipts for materials, and sometimes
        photographs of the completed work. The carrier should release the
        recoverable depreciation promptly upon receipt of this documentation.
        If the carrier delays or imposes additional requirements not found in
        the policy, document the delay and escalate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Depreciation Becomes Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation calculations involve judgment, and reasonable people can
        disagree about useful life. But there is a line between reasonable
        disagreement and bad faith. When a carrier assigns a useful life that
        is dramatically shorter than what independent data supports, refuses
        to provide the basis for its depreciation schedule, ignores evidence
        of the property&rsquo;s actual condition, or applies depreciation to
        components that are not subject to depreciation under the applicable
        statute, the carrier may be crossing that line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Act (Cal. Ins.
        Code &sect; 790.03(h)) and the Unfair Claims Settlement Practices
        Regulations (Cal. Code Regs., tit. 10, &sect; 2695.7) prohibit
        insurers from making settlement offers that are unreasonably low. A
        depreciation calculation that reduces the ACV to a fraction of the
        property&rsquo;s actual pre-loss value &mdash; because the carrier
        used an arbitrarily short useful life or ignored the property&rsquo;s
        condition &mdash; may constitute an unreasonably low settlement offer
        under these provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document everything. If the carrier&rsquo;s depreciation is
        unreasonable and the insured can show that it was challenged with
        evidence, the carrier&rsquo;s refusal to adjust creates a record that
        may support a bad faith claim. This is particularly true when the
        carrier applies depreciation in a way that violates the express
        requirements of Section 2051 &mdash; such as depreciating components
        that are not normally subject to repair and replacement, or ignoring
        the actual condition of the property in favor of an age-based
        formula.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Depreciation on the Dwelling vs. Personal Property: Key Differences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation operates differently depending on whether the loss
        involves the Dwelling coverage or the Personal Property coverage, and
        understanding the distinctions helps in challenging each effectively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dwelling depreciation applies to structural components and is
        typically calculated within the Xactimate estimate on a line-by-line
        or category-by-category basis. The Section 2051 protections &mdash;
        condition-based depreciation and the &ldquo;normally subject to
        repair and replacement&rdquo; limitation &mdash; apply with full
        force to dwelling claims. Labor depreciation is a major issue here
        because labor commonly represents 40 to 60 percent of dwelling repair
        costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal Property depreciation can be even more aggressive because
        many personal property items have shorter useful lives than building
        components. Carriers take advantage of this reality by applying
        broad-brush depreciation rates across entire categories of belongings
        &mdash; the very practice <em>Doan</em> calls out as inconsistent
        with the statute. The &ldquo;like kind and quality&rdquo; replacement
        calculation also creates opportunities for the carrier to reduce the
        RCV before depreciation is applied, compounding the underpayment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For detailed guidance on contents depreciation strategies, see the
        article on{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          contents claims
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Systematic Bias: Why Carrier Depreciation Always Favors the Carrier
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The structural incentive is clear: shorter useful life assignments
        produce higher depreciation, which reduces the carrier&rsquo;s
        payout. A carrier that systematically assigns useful lives 20 to 30
        percent shorter than what independent data supports will save
        millions of dollars across its book of business. No one inside the
        claims department has an incentive to assign longer useful lives. The
        adjuster&rsquo;s performance is not measured by the accuracy of
        depreciation calculations; it is measured by cycle time and, in many
        organizations, by indemnity spend.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a speculative concern. It is a pattern that Public
        Adjusters, plaintiff attorneys, and consumer advocates encounter
        routinely. The depreciation schedules built into carrier systems
        consistently favor the carrier, and the burden falls on the
        policyholder to identify the error and challenge it. The carriers
        have spent decades refining their depreciation schedules to minimize
        payouts. The absence of regulatory oversight over these schedules
        means the only check on their accuracy is the policyholder&rsquo;s
        willingness and ability to push back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the economics from the carrier&rsquo;s perspective. A
        carrier handling 50,000 property claims per year whose depreciation
        schedule averages $2,000 in over-depreciation per claim withholds
        $100 million annually. Not every policyholder will challenge the
        depreciation. Many will accept the carrier&rsquo;s numbers without
        question, particularly if they do not understand how depreciation is
        calculated or that the numbers are negotiable. The carrier profits
        from every claim that goes unchallenged.
      </p>

      <CalloutBox variant="tip" title="Review Every Line">
        <p>
          When the insurer&rsquo;s estimate arrives, the depreciation applied
          to every line item is worth reviewing. Labor depreciation, blanket
          percentage applications, and numbers that do not line up with the
          actual condition of the property can each be raised in writing with
          a clear explanation of why the depreciation is incorrect. A licensed
          Public Adjuster can perform this analysis and negotiate corrections
          on the insured&rsquo;s behalf.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Takeaways
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is not a neutral, objective calculation. It is a process
        driven by carrier self-interest, executed through internal schedules
        developed without regulatory oversight and applied without
        individualized assessment of property condition. The numbers that
        carriers assign to &ldquo;useful life&rdquo; directly determine how
        much money the insured receives, and those numbers are frequently
        wrong &mdash; always in the carrier&rsquo;s favor. Because California
        fixes ACV by statute, an insurer cannot reach for a broad-evidence or
        market-value theory to depress the ACV of a covered loss.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A depreciation calculation taken at face value is rarely the right
          number. Reviewing the useful life assignments against independent
          data is the standard starting point.
        </li>
        <li>
          The carrier&rsquo;s depreciation guide is requestable. The
          policyholder is entitled to know the basis for the depreciation
          applied to the claim under 10 CCR &sect; 2695.7.
        </li>
        <li>
          Depreciation must reflect the actual condition of the property,
          not just its age. California Insurance Code &sect; 2051 requires
          this, and the carrier can be held to it.
        </li>
        <li>
          Structural components that are not normally repaired or replaced
          during the useful life of the structure &mdash; framing,
          foundation, embedded plumbing, and wiring &mdash; should not be
          depreciated at all under &sect; 2051(b).
        </li>
        <li>
          On California claims, labor depreciation is prohibited by
          regulation. 10 CCR &sect; 2695.9(f)(1) provides that &ldquo;the
          expense of labor necessary to repair, rebuild or replace covered
          property is not a component of physical depreciation and shall not
          be subject to depreciation or betterment&rdquo; (with a narrow
          exception for intrinsic labor in manufactured materials). Any
          depreciation calculation that touches the labor portion of a line
          item is worth challenging.
        </li>
        <li>
          On partial repairs, whether the damaged material can actually be
          matched is the threshold question. Where it cannot, the matching
          requirement (10 CCR &sect; 2695.9(a)(2)) expands the repair scope
          to a reasonably uniform appearance, and depreciation of undamaged
          material drawn in solely for matching on a replacement-cost policy
          runs into &sect; 2695.9(a)(1).
        </li>
        <li>
          On{' '}
          <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
            contents claims
          </Link>
          , the carrier&rsquo;s &ldquo;comparable&rdquo; replacement items
          are worth scrutinizing. If a cheaper, inferior product has been
          selected as the &ldquo;like kind and quality&rdquo; replacement,
          the replacement cost itself can be challenged before depreciation
          is even addressed. <em>Doan</em> requires item-by-item,
          condition-based depreciation rather than age-only or
          schedule-driven figures, and a challenge to depreciation
          methodology is a legal question that need not be surrendered to
          appraisal.
        </li>
        <li>
          The{' '}
          <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
            recoverable depreciation deadline
          </Link>{' '}
          matters. Excessive depreciation combined with a tight recovery
          window can permanently reduce the payout if the timing slips. The
          California minimums are 12 months under &sect; 2051.5(b)(1)(A) and
          36 months under (b)(1)(B) for state-of-emergency losses.
        </li>
        <li>
          For significant claims, an independent expert &mdash; a roofing
          consultant, materials engineer, or experienced Public Adjuster
          &mdash; often pays for itself in the additional recovery generated.
        </li>
        <li>
          Document the challenge in writing. If the carrier refuses to
          adjust unreasonable depreciation after evidence is presented, the
          written record supports a potential bad faith claim.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who understand how the depreciation system works
        &mdash; and who are willing to challenge it with evidence &mdash;
        routinely recover thousands of dollars more than those who accept the
        carrier&rsquo;s numbers without question. Depreciation is negotiable.
        The useful life assignments that drive it are not set in stone. When
        the numbers do not reflect the reality of the property, there is room
        to push back.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources and Authorities
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Insurance Code &sect; 2051</strong> &mdash;
          statutory measure of indemnity and actual cash value for open
          property policies; subsection (b) sets the
          replacement-cost-less-depreciation standard for both total and
          partial losses (as amended by AB 188 (Stats. 2019, ch. 59),
          effective January 1, 2020) and limits depreciation to components
          normally subject to repair and replacement.
        </li>
        <li>
          <strong>California Insurance Code &sect; 2051.5(b)(1)</strong>{' '}
          &mdash; replacement cost coverage; payment of ACV pending
          repair/replacement, recovery of withheld depreciation, and minimum
          time limits (12 months under (b)(1)(A);{' '}
          <strong>
            36 months under (b)(1)(B) for declared states of emergency per AB
            1800 (2018)
          </strong>
          , with additional six-month good-cause extensions).
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(a)(1)</strong> (Fair Claims Settlement
          Practices Regulations) &mdash; replacement cost settlements;
          inclusion of consequential physical damage and the rule that the
          insured shall not have to pay for depreciation or any cost except
          the applicable deductible.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(a)(2)</strong> &mdash; matching
          requirement: where replaced items do not match in quality, color,
          or size, the insurer must replace all items in the damaged area to
          conform to a reasonably uniform appearance.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)</strong> &mdash; documentation,
          itemization, and written-explanation requirements for betterment,
          depreciation, and salvage adjustments.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)(1)</strong> &mdash; prohibition on
          depreciating labor (except intrinsic labor in manufactured
          materials or goods).
        </li>
        <li>
          <strong>10 CCR &sect; 2695.7</strong> &mdash; insurer&rsquo;s
          obligation to provide a reasonable explanation of the basis for a
          claim settlement; foundation for requesting the carrier&rsquo;s
          depreciation schedule.
        </li>
        <li>
          <strong>Cal. Ins. Code &sect; 790.03(h)</strong> &mdash; Unfair
          Claims Settlement Practices Act prohibitions, including against
          unreasonably low settlement offers.
        </li>
        <li>
          <em>Doan v. State Farm General Ins. Co.</em> (2011) 195
          Cal.App.4th 1082 &mdash; a policyholder&rsquo;s challenge to the
          insurer&rsquo;s depreciation methodology is a legal/coverage
          question that may proceed by declaratory relief and is not
          committed to appraisal; widely cited (together with the 2016 trial
          ruling) for the principle that ACV depreciation of personal
          property must reflect each item&rsquo;s actual physical condition
          rather than age alone.
        </li>
        <li>
          <em>
            Jefferson Insurance Co. of New York v. Superior Court of Alameda
            County
          </em>{' '}
          (1970) 3 Cal.3d 398 &mdash; historical treatment of ACV as a
          question of fact and the scope of appraisers&rsquo; authority.
        </li>
        <li>
          <em>Cheeks v. California FAIR Plan Ass&rsquo;n</em> (1998) 61
          Cal.App.4th 423 &mdash; pre-AB 188 total-loss valuation under the
          former fair-market-value standard, now displaced by the uniform
          replacement-cost-less-depreciation rule.
        </li>
      </ul>

      <CalloutBox variant="info" title="Related Articles">
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>
            <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
              Labor Depreciation: Why Your Insurer Cannot Depreciate Labor Costs
            </Link>
          </li>
          <li>
            <Link href="/resources/excessive-depreciation" className="text-[#2E74B5] underline">
              Excessive Depreciation: How Insurance Companies Shortchange Your Claim
            </Link>
          </li>
          <li>
            <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">
              Loss Settlement Provisions: How Your Insurance Payout Is Calculated
            </Link>
          </li>
          <li>
            <Link href="/resources/matching" className="text-[#2E74B5] underline">
              Matching and Uniform Appearance
            </Link>
          </li>
          <li>
            <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
              The Recoverable Depreciation Deadline
            </Link>
          </li>
          <li>
            <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
              Contents Claims
            </Link>
          </li>
          <li>
            <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
              California Fair Claims Settlement Practices Regulations
            </Link>
          </li>
          <li>
            <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
              The California FAIR Plan
            </Link>
          </li>
          <li>
            <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
              How to Challenge an Xactimate Estimate
            </Link>
          </li>
          <li>
            <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] underline">
              Replacement Cost vs. Guaranteed Replacement Cost
            </Link>
          </li>
          <li>
            <Link href="/resources/betterment-and-improvement" className="text-[#2E74B5] underline">
              Betterment and Improvement
            </Link>
          </li>
        </ul>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not
        constitute legal advice. Insurance policies and applicable law vary
        by state and by policy form. Consult with a licensed professional
        regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
