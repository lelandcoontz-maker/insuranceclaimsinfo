import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Does California Follow the Broad Evidence Rule for Calculating Depreciation?',
  description:
    'California is not a broad evidence rule state. The Legislature displaced the common-law approach with a statutory formula in Insurance Code § 2051(b). This article explains how depreciation must be calculated under California law — including specific scenarios for damaged building materials, partial repairs with matching concerns, and personal property under Doan v. State Farm.',
  summary:
    'California is not a broad evidence rule state. Insurance Code § 2051(b) fixes ACV by statute as replacement cost less a fair and reasonable deduction for physical depreciation, and 10 CCR § 2695.9 regulates how depreciation must be documented and applied. Depreciation cannot be applied to labor, applies only to wear components, and on contents must reflect each item\'s actual physical condition under Doan v. State Farm.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is provided for general educational purposes regarding California
          property insurance claims practice and does not constitute legal advice. Statutes
          and regulations are periodically amended; the operative text should be confirmed
          against the current official sources before being relied upon in a specific claim
          or legal proceeding. Policyholders with disputed claims should consult a licensed
          California attorney who specializes in insurance coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Short answer:</strong> No. California is not a broad evidence rule
        jurisdiction for determining actual cash value (ACV) on residential and commercial
        property losses. While California&rsquo;s courts once embraced a broad,
        fact-driven approach to ACV, the Legislature has since displaced it with a specific
        statutory formula. Today, for open property policies, California fixes ACV by
        statute as replacement cost less a fair and reasonable deduction for physical
        depreciation &mdash; and that statute, along with the Department of Insurance
        regulations, places real limits on how depreciation may be calculated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what the broad evidence rule is, where California once stood,
        and the statutory and regulatory framework that controls depreciation in California
        today.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is the Broad Evidence Rule?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;broad evidence rule&rdquo; is one of the principal methods courts use to
        determine actual cash value when a policy does not define the term. Under this rule,
        the fact-finder is not locked into a single formula. Instead, the fact-finder may
        consider every piece of evidence a reasonable appraiser would find relevant to value
        &mdash; including fair market value, replacement cost less depreciation, the
        property&rsquo;s income-generating capacity, obsolescence, and the property&rsquo;s
        overall condition &mdash; and assign whatever weight to each factor it deems
        appropriate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rule&rsquo;s strength is its flexibility; its weakness is that it supplies no
        fixed method for arriving at a number, which can make outcomes harder to predict.
        The broad evidence rule is the majority approach nationally and has been adopted by
        courts in roughly two dozen states. Other states instead define ACV as fair market
        value, as replacement cost less depreciation, or as replacement cost with no
        depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California belongs to none of those flexible camps today. It has adopted a specific
        statutory standard that controls over the common-law approaches.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California&rsquo;s Historical Position: <em>Jefferson Insurance Co. v. Superior Court</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For much of the twentieth century, California treated ACV as a question of fact. In{' '}
        <em>Jefferson Insurance Co. of New York v. Superior Court of Alameda County</em>{' '}
        (1970) 3 Cal.3d 398, the California Supreme Court addressed the valuation of an
        insured building and confirmed that determining the actual cash value of insured
        property is a factual determination. The Court also drew a line that remains
        important in appraisal practice: appraisers are authorized to decide questions of
        fact &mdash; the amount of damage and the value of the property &mdash; not
        questions of coverage or policy interpretation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Jefferson</em> is frequently cited for the proposition that California once
        permitted a broad, evidence-weighing approach to ACV. That historical posture,
        however, has been overtaken by statute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Statutory Shift: California Insurance Code &sect; 2051
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051 now governs the measure of indemnity for open
        property policies, and it does so with far more precision than the broad evidence
        rule allows.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 2051(a)</strong> provides the baseline rule for fire insurance:
        under an open policy, the measure of indemnity is the expense to the insured of
        replacing the damaged or destroyed property in its condition at the time of the
        injury, computed as of the time the fire began.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 2051(b)</strong> supplies the operative ACV formula. As currently
        written (post-AB 188 (2019) restructure), the measure of recovery for either a total
        or partial loss is the amount it would cost the insured to repair, rebuild, or
        replace the thing lost or injured, less
        a fair and reasonable deduction for physical depreciation based upon its condition
        at the time of the injury &mdash; or the policy limit, whichever is less.
      </p>
      <p className="text-sm text-gray-500 italic">
        Cal. Ins. Code &sect; 2051(b), as amended by AB 188 (Stats. 2019, ch. 59), effective
        January 1, 2020. AB 188 (2019) eliminated the prior &sect; 2051(b)(1)/(b)(2)
        bifurcation between total-loss and partial-loss valuation. The statute uses the
        phrase &ldquo;thing lost or injured&rdquo;; the alternative phrase &ldquo;damaged
        or destroyed property&rdquo; appears in the related regulation, 10 CCR
        &sect; 2695.9(f)(1).
      </p>

      <CalloutBox variant="important" title="This Is Not the Broad Evidence Rule">
        <p>
          What &sect; 2051(b) codifies is <strong>replacement cost less depreciation</strong>.
          It is not the broad evidence rule, and it is not fair market value. An insurer
          cannot reach for a broad-evidence or market-value theory to depress the ACV of a
          covered loss in California.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        The 2020 Amendment Eliminated Fair Market Value for Total Losses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The current uniform language is the product of an amendment effective January 1,
        2020. Before that amendment, &sect; 2051(b) treated total and partial losses
        differently: a total loss to a structure was valued at the policy limit or the fair
        market value of the structure, whichever was less, while a partial loss was valued
        at replacement cost less depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The amendment removed the fair market value standard for total losses and made the
        replacement-cost-less-depreciation method uniform across both total and partial
        losses. This was a significant change for policyholders, because rebuild costs
        frequently exceed a home&rsquo;s fair market value &mdash; meaning the prior
        fair-market-value standard often left owners of totally destroyed homes
        underindemnified. This distinction is especially relevant to actual cash value
        policies, including many issued by the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan Association
        </Link>
        , the state&rsquo;s insurer of last resort.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Recoverable Depreciation Under &sect; 2051.5
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policies that provide replacement cost coverage, Insurance Code &sect; 2051.5
        works alongside &sect; 2051. Under an open policy requiring payment of replacement
        cost, the measure of indemnity is the cost to repair, rebuild, or replace the
        property without a deduction for physical depreciation, or the policy limit,
        whichever is less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where the policy conditions full replacement cost on actually repairing or replacing
        the property, the insurer pays the actual cash value (as defined in &sect; 2051)
        first, and then pays the difference between that ACV payment and the full
        replacement cost once the work is done. Section 2051.5(b)(1) protects the
        insured&rsquo;s ability to collect this withheld &ldquo;recoverable
        depreciation&rdquo; by prohibiting time limits shorter than 12 months from the
        first ACV payment to complete replacement &mdash; extended to no less than{' '}
        <strong>36 months</strong> when the loss relates to a declared state of emergency
        (per AB 1800, signed September 21, 2018), with additional six-month extensions
        available for good cause.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Depreciation Must Be Calculated in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law constrains not only the valuation standard but the mechanics of
        depreciation itself. Three limits matter most.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        1. Depreciation applies only to components subject to repair and replacement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051(b) provides that a deduction for physical depreciation applies only to
        components of a structure that are normally subject to repair and replacement
        during the structure&rsquo;s useful life. Structural elements not normally replaced
        over the life of the building are not proper subjects of depreciation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        2. Labor may not be depreciated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.9(f)(1), except for intrinsic labor costs already embedded
        in the cost of manufactured materials or goods, the labor necessary to repair,
        rebuild, or replace covered property is not a component of physical depreciation
        and may not be subject to depreciation or betterment. Depreciating the labor
        component of a repair estimate is therefore improper in California. For a deeper
        analysis, see our guide on{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          labor depreciation
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        3. Depreciation must be documented, measurable, and explained
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Fair Claims Settlement Practices Regulations, 10 CCR &sect; 2695.9(f), require
        that when a claim is adjusted for betterment, depreciation, or salvage, all
        justification be contained in the claim file. Any adjustment must be discernible,
        measurable, itemized, and specified as to dollar amount, and must accurately
        reflect the value of the betterment, depreciation, or salvage. Betterment and
        depreciation adjustments must reflect a measurable difference in market value
        attributable to the condition and age of the property and apply only to property
        normally subject to repair and replacement during its useful life. The basis for
        any adjustment must be fully explained to the claimant in writing.
      </p>

      <CalloutBox variant="tip" title="What This Means in Practice">
        <p>
          A depreciation adjustment that cannot be reconciled with &sect; 2051(b) and 10
          CCR &sect; 2695.9(f) is vulnerable to challenge, and an insurer&rsquo;s failure
          to itemize and justify depreciation may itself implicate the Fair Claims
          Settlement Practices Regulations.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Depreciation Applies by Loss Type
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The limits above apply across the board, but they play out differently depending on
        what is being repaired or replaced. Three scenarios recur in practice: replacement
        of damaged building materials, partial repairs that raise matching concerns, and
        personal property (contents). They share a common spine &mdash; depreciation
        reaches only material and never labor, only wear-life components, and must always
        be itemized, condition-based, and explained in writing. What changes from one
        scenario to the next is the overlay.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        1. Replacement of Damaged Building Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the baseline structural scenario under Insurance Code &sect; 2051(b): ACV
        is the cost to repair, rebuild, or replace, less a fair and reasonable deduction
        for physical depreciation based on the component&rsquo;s condition at the time of
        injury. Two limits do most of the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, depreciation reaches only the <strong>material</strong>. Under 10 CCR
        &sect; 2695.9(f)(1), the labor necessary to repair, rebuild, or replace is not a
        component of physical depreciation, except for intrinsic labor already embedded in
        the cost of manufactured goods. On a material-replacement line item, the material
        cost is isolated and only that portion is depreciated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, even within the material, depreciation applies only to components{' '}
        <strong>normally subject to repair and replacement during the structure&rsquo;s
        useful life.</strong> Wear items such as roofing, paint, flooring, carpet, and
        water heaters may be depreciated; components expected to last the life of the
        building, such as framing and foundation, generally are not proper subjects of
        depreciation at all. The deduction must reflect a measurable difference in market
        value tied to actual condition and age, itemized to a dollar amount, and explained
        to the insured in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        2. Partial Repairs and the Matching Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A partial repair &mdash; for example, replacing a few damaged shingles on a roof
        slope &mdash; runs through the same &sect; 2051(b) analysis (material only, wear
        components, condition-based), but it adds a second layer: matching. Under 10 CCR
        &sect; 2695.9(a)(2), when a loss requires replacement of items and the replaced
        items do not match in quality, color, or size, the insurer must replace all items
        in the <strong>damaged area</strong> so as to conform to a reasonably uniform
        appearance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether matching is triggered turns on whether the damaged material can actually
        be matched. If the shingle is still in production and the new material will match
        the existing field, the insurer may repair only the damaged shingles, and
        depreciation applies only to that replacement material. If the shingle is
        discontinued, or has weathered so that new material will not match, the matching
        requirement expands the repair scope to the area needed to restore a reasonably
        uniform appearance &mdash; which is where the significant dollars lie.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contested term is &ldquo;the damaged area.&rdquo; Insurers typically argue the
        area is less than the entire structure &mdash; the immediate area, the slope
        section, or the line of sight &mdash; while policyholders argue for the scope
        actually required to achieve uniform appearance, which on a hip roof where all
        slopes are visible from the ground may be the entire roof. An earlier version of
        the California regulation expressly referenced the &ldquo;area which encompasses
        clear line of vision,&rdquo; but that language was abandoned as too subjective;
        the operative standard today is simply a &ldquo;reasonably uniform appearance&rdquo;
        within the &ldquo;damaged area.&rdquo; Two structural points bear noting: the
        matching provision sits in subsection (a), which applies to{' '}
        <strong>replacement cost</strong> settlements, and subsection (a)(1) separately
        requires the insurer to include any consequential physical damage incurred in
        making the repair. For a deeper analysis, see our guide on{' '}
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
        contents,&rdquo; ACV is replacement cost less a fair and reasonable deduction for
        physical depreciation based on condition at the time of injury. The governing
        California authority is <em>Doan v. State Farm General Ins. Co.</em> (2011) 195
        Cal.App.4th 1082, but it is worth separating what the published appellate opinion
        held from what the litigation stands for, because the two are frequently
        conflated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The binding appellate holding is <strong>procedural.</strong> State Farm demanded
        appraisal to fix the amount of loss; the insured asked that appraisal be stayed
        until a court could determine the proper method for calculating actual cash value;
        the Court of Appeal sided with the insured and reversed the trial court&rsquo;s
        dismissal. Its reasoning was that an appraiser has no authority to decide whether
        the insurer&rsquo;s method of calculating depreciation breaches the contract or
        violates &sect; 2051 &mdash; so a policyholder may pursue a declaratory relief
        action challenging depreciation <strong>methodology</strong> in court rather than
        being forced into appraisal. The opinion reversed the demurrer and allowed the
        methodology challenge to proceed; it did not itself adjudicate the substantive
        depreciation standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>substantive</strong> standard &mdash; the proposition the case is best
        known for among adjusters &mdash; is that depreciation of personal property must
        rest on the actual physical condition of each item at the time of loss, not on age
        alone or on undisclosed automatic schedules. That was the core of the
        insured&rsquo;s claim: that depreciation calculated solely on an item&rsquo;s age
        violated the policy and the Insurance Code. The insured had submitted his own
        claim itemizing depreciation for each item based on its actual physical condition,
        against the insurer&rsquo;s far larger schedule-driven figure. The condition-based
        standard was ultimately applied at the trial court level in 2016, where the court
        ruled that insurers must consider the physical condition of personal property at
        the time of loss and found the insurer had violated the regulations by failing to
        explain its depreciation in writing. That 2016 ruling is a trial court decision;
        it articulates the correct standard but is not itself binding statewide precedent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For contents, then, the accurate stack is: &sect; 2051(b) sets condition-based
        replacement-cost-less-depreciation; 10 CCR &sect; 2695.9(f) requires the deduction
        to be itemized, measurable against market value, and explained in writing;{' '}
        <em>Doan</em> (2011) secures the right to challenge the insurer&rsquo;s
        methodology in court rather than have it resolved in appraisal; and the{' '}
        <em>Doan</em> trial ruling applies the individualized-condition standard against
        schedule-based depreciation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Items Replaced Only to Achieve Uniform Appearance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recurring question within the matching scenario is whether the insurer may
        depreciate <strong>undamaged</strong> items that are replaced solely to achieve a
        reasonably uniform appearance. The better-supported position is that it may not
        &mdash; though policyholders should understand this as a strong, well-grounded
        argument rather than a rule settled by California appellate decision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, the matching obligation in 10 CCR &sect; 2695.9(a) exists only in the{' '}
        <strong>replacement cost</strong> context, and replacement cost coverage by
        definition pays the cost to replace without deduction for depreciation. The
        undamaged items drawn in for uniform appearance are part of that replacement-cost
        recovery and ride along at full replacement cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, &sect; 2695.9(a)(1) &mdash; which sits immediately above the matching
        provision &mdash; states that when a loss requires repair or replacement, the
        insured shall not have to pay for depreciation, nor any other cost, except for the
        applicable deductible. Compelled matching replacement is, in substance, a cost the
        insured is required to incur to make the repair; depreciating it would force the
        insured to pay out of pocket to obtain the uniform appearance the regulation
        guarantees.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third, the labor to remove and reinstall the matching material is non-depreciable
        in any event under &sect; 2695.9(f)(1).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fourth, the indemnity principle supports the position: the insured had a
        functioning, uniform roof before the loss, did not elect to replace good material,
        and is made whole &mdash; not bettered &mdash; by restoring the pre-loss uniform
        condition that the property&rsquo;s market value already reflected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A careful analysis should also acknowledge the countervailing considerations. The
        &ldquo;no depreciation&rdquo; language in &sect; 2695.9(a)(1) is grammatically
        tied to the consequential-physical-damage sentence, so an insurer may argue it
        does not textually extend to matching items under (a)(2); and an insurer may
        assert that replacing aged but undamaged material new-for-old confers a real
        betterment. These disputes arise most often in the actual-cash-value holdback
        calculation and on pure actual-cash-value policies, rather than in the final
        replacement-cost recovery. On balance, on a replacement cost policy the matching
        scope is properly recovered at full replacement cost, and the text of &sect;
        2695.9(a)(1), the non-depreciability of labor, and core indemnity principles weigh
        against depreciating the compelled matching replacement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Takeaways for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because California fixes ACV by statute, an insurer cannot reach for a
        broad-evidence or market-value theory to depress the ACV of a covered loss. When
        evaluating a depreciation deduction in California, policyholders and their
        representatives should:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Confirm that depreciation has been applied only to components normally subject to
          repair and replacement during the structure&rsquo;s useful life, and not to
          non-depreciable structural elements.
        </li>
        <li>
          Verify that no depreciation has been taken on labor, apart from intrinsic labor
          embedded in manufactured materials.
        </li>
        <li>
          Demand the insurer&rsquo;s written, itemized justification for each depreciation
          deduction, specified to a dollar amount and tied to a measurable difference in
          market value based on condition and age, as the regulations require.
        </li>
        <li>
          On partial repairs, evaluate whether the damaged material can actually be matched;
          where it cannot, press the matching requirement to expand the repair scope to a
          reasonably uniform appearance, and resist depreciation of undamaged material
          drawn in solely for matching on a replacement cost policy.
        </li>
        <li>
          On contents, require condition-based, item-by-item depreciation rather than
          age-only or schedule-driven figures, and remember that a challenge to the
          insurer&rsquo;s depreciation methodology is a legal question that need not be
          surrendered to appraisal.
        </li>
        <li>
          For replacement cost policies, ensure that withheld depreciation is recoverable
          and that the insurer has honored the statutory minimum time limits to complete
          repairs or replacement.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A depreciation adjustment that cannot be reconciled with &sect; 2051(b) and 10 CCR
        &sect; 2695.9(f) is vulnerable to challenge, and an insurer&rsquo;s failure to
        itemize and justify depreciation may itself implicate the Fair Claims Settlement
        Practices Regulations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources and Authorities
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Insurance Code &sect; 2051</strong> &mdash; statutory measure
          of indemnity and actual cash value for open property policies; subsection (b)
          sets the replacement-cost-less-depreciation standard for both total and partial
          losses and limits depreciation to components normally subject to repair and
          replacement.
        </li>
        <li>
          <strong>California Insurance Code &sect; 2051.5(b)(1)</strong> &mdash; replacement
          cost coverage; payment of ACV pending repair/replacement, recovery of withheld
          depreciation, and minimum time limits (12 months generally; <strong>36 months
          for declared states of emergency per AB 1800 (2018)</strong>, with additional
          six-month good-cause extensions).
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(a)(1)</strong> (Fair Claims Settlement Practices
          Regulations) &mdash; replacement cost settlements; inclusion of consequential
          physical damage and the rule that the insured shall not have to pay for
          depreciation or any cost except the applicable deductible.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(a)(2)</strong> &mdash; matching requirement: where
          replaced items do not match in quality, color, or size, the insurer must replace
          all items in the damaged area to conform to a reasonably uniform appearance.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)</strong> &mdash; documentation, itemization, and
          written-explanation requirements for betterment, depreciation, and salvage
          adjustments.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)(1)</strong> &mdash; prohibition on depreciating
          labor (except intrinsic labor in manufactured materials or goods).
        </li>
        <li>
          <em>Doan v. State Farm General Ins. Co.</em> (2011) 195 Cal.App.4th 1082 &mdash;
          a policyholder&rsquo;s challenge to the insurer&rsquo;s depreciation methodology
          is a legal/coverage question that may proceed by declaratory relief and is not
          committed to appraisal; widely cited (together with the 2016 trial ruling) for
          the principle that ACV depreciation of personal property must reflect each
          item&rsquo;s actual physical condition rather than age alone.
        </li>
        <li>
          <em>Jefferson Insurance Co. of New York v. Superior Court of Alameda County</em>{' '}
          (1970) 3 Cal.3d 398 &mdash; historical treatment of ACV as a question of fact
          and the scope of appraisers&rsquo; authority.
        </li>
      </ul>

      <CalloutBox variant="info" title="Related Articles">
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>
            <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
              ACV vs. RCV: Actual Cash Value vs. Replacement Cost Value
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
            <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
              Labor Depreciation: Why Your Insurer Cannot Depreciate Labor Costs
            </Link>
          </li>
          <li>
            <Link href="/resources/matching" className="text-[#2E74B5] underline">
              Matching and Uniform Appearance
            </Link>
          </li>
        </ul>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
