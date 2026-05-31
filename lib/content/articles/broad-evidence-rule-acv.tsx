import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Does California Follow the Broad Evidence Rule for Calculating Depreciation?',
  description:
    'California is not a broad evidence rule state. The Legislature displaced the common-law approach with a statutory formula in Insurance Code § 2051(b) — replacement cost less a fair and reasonable deduction for physical depreciation, with regulatory limits on how depreciation must be calculated.',
  summary:
    'California is not a broad evidence rule state. Insurance Code § 2051(b) fixes ACV by statute as replacement cost less a fair and reasonable deduction for physical depreciation, and 10 CCR § 2695.9(f) regulates how depreciation must be documented and applied. Depreciation cannot be applied to labor, and applies only to components normally subject to repair and replacement.',
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
        replacing the thing lost or injured in its condition at the time of the injury,
        computed as of the time the fire began.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 2051(b)</strong> supplies the operative ACV formula. As currently
        written, for an open policy requiring payment of actual cash value, the measure of
        recovery &ldquo;for either a total or partial loss to the structure or its
        contents&rdquo; is the amount it would cost the insured to repair, rebuild, or
        replace the thing lost or injured, less a fair and reasonable deduction for
        physical depreciation based upon its condition at the time of the injury &mdash;
        or the policy limit, whichever is less.
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
        replacement cost once the work is done. Section 2051.5 also protects the
        insured&rsquo;s ability to collect this withheld &ldquo;recoverable
        depreciation&rdquo; by prohibiting time limits shorter than 12 months from the
        first ACV payment to complete replacement &mdash; extended to no less than 24
        months when the loss relates to a declared state of emergency, with additional
        six-month extensions available for good cause.
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
          For replacement cost policies, ensure that withheld depreciation is recoverable
          and that the insurer has honored the statutory minimum time limits to complete
          repairs or replacement.
        </li>
      </ul>

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
          <strong>California Insurance Code &sect; 2051.5</strong> &mdash; replacement cost
          coverage; payment of ACV pending repair/replacement, recovery of withheld
          depreciation, and minimum time limits (12 months generally; 24 months for
          declared states of emergency).
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)</strong> (Fair Claims Settlement Practices
          Regulations) &mdash; documentation, itemization, and written-explanation
          requirements for betterment, depreciation, and salvage adjustments.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(f)(1)</strong> &mdash; prohibition on depreciating
          labor (except intrinsic labor in manufactured materials or goods).
        </li>
        <li>
          <em>Jefferson Insurance Co. of New York v. Superior Court of Alameda County</em>{' '}
          (1970) 3 Cal.3d 398 &mdash; historical treatment of ACV as a question of fact and
          the scope of appraisers&rsquo; authority.
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
        </ul>
      </CalloutBox>
    </>
  )
}
