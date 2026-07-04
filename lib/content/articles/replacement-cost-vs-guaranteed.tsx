import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Replacement Cost vs. Guaranteed Replacement Cost",
  description:
    "Standard, extended, and guaranteed (100% or unlimited) replacement cost are not the same thing. Here is how each works and what California law requires.",
  summary:
    'Standard, extended, and guaranteed (or unlimited) replacement cost are different: standard caps at your limit, extended adds a percentage cushion, and guaranteed pays the full rebuild cost. After a disaster with cost spikes, which one you have can mean hundreds of thousands.',
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
        Most homeowners believe their insurance policy will fully rebuild their home if it burns
        down or is destroyed. Most are wrong. The phrase &ldquo;replacement cost coverage&rdquo;
        sounds like it means 100 percent of whatever it costs to replace your home. It does not.
        Standard replacement cost coverage is capped at your policy limit &mdash; and if your
        policy limit is too low, you pay the difference out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between <strong>replacement cost</strong>,{' '}
        <strong>extended replacement cost</strong>, and{' '}
        <strong>guaranteed (100%) replacement cost</strong> is one of the most consequential &mdash;
        and least understood &mdash; differences in property insurance. After the 2003, 2007, 2017,
        2018, 2020, and 2025 California wildfires, tens of thousands of homeowners discovered the
        hard way that their &ldquo;replacement cost&rdquo; policies did not actually cover the full
        cost to rebuild.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Standard Replacement Cost Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard replacement cost policy, the insurer agrees to pay the cost to repair or
        replace damaged property with materials of <strong>like kind and quality</strong>, without
        deduction for depreciation &mdash; but only up to the policy limit stated on your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051.5(a) defines the measure of indemnity under a
        replacement cost policy as:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;The amount that it would cost the insured to repair, rebuild, or replace the
        thing lost or injured, without a deduction for physical depreciation, or the policy
        limit, whichever is less.&rdquo;
      </blockquote>
      <p className="text-sm text-gray-500 italic mb-6">
        Cal. Ins. Code &sect; 2051.5(a). The parallel &sect; 2051(b) ACV framework was
        restructured by AB 188 (Stats. 2019, ch. 59), effective January 1, 2020, eliminating
        the prior &sect; 2051(b)(1)/(b)(2) bifurcation between total and partial losses and
        making the same replacement-cost-less-depreciation formula apply to either.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That last phrase &mdash; <em>&ldquo;or the policy limit, whichever is less&rdquo;</em>{' '}
        &mdash; is the critical limitation. If your home is insured for $600,000 under the dwelling coverage
        but it actually costs $850,000 to rebuild after a disaster, a standard replacement cost
        policy pays $600,000. You are responsible for the remaining $250,000.
      </p>

      <CalloutBox variant="important" title="Replacement Cost Does Not Mean Unlimited">
        <p>
          The most dangerous misconception in property insurance is the belief that
          &ldquo;replacement cost coverage&rdquo; means the insurer will pay whatever it costs to
          rebuild. It does not. Replacement cost coverage means the insurer uses the replacement
          cost method to calculate the loss &mdash; without deducting depreciation &mdash; but
          payment is still capped at your dwelling limit unless you have an extended or guaranteed
          replacement cost endorsement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extended Replacement Cost Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Extended replacement cost is a policy endorsement that provides a buffer above your
        dwelling limit &mdash; typically 25 percent or 50 percent. If your dwelling limit is
        $600,000 and you have a 50 percent extended replacement cost endorsement, the maximum
        payout for dwelling repairs is $900,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common upgrade from standard replacement cost. Most major California
        carriers offer it, and many include it by default in their preferred homeowner products.
        However, it is still a capped amount. If rebuild costs exceed the extended limit, you are
        underinsured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051.5(c) specifically references extended replacement
        cost coverage and prohibits insurers from limiting or denying payment of extended
        replacement cost benefits simply because the policyholder chooses to rebuild at a new
        location rather than the original site:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;In the event of a total loss of the insured structure, a policy issued or delivered
        in this state shall not contain a provision that limits or denies, on the basis that the
        insured has decided to rebuild at a new location or to purchase an already built home at a
        new location, payment of the building code upgrade cost or the replacement cost, including
        any extended replacement cost coverage, to the extent those costs are otherwise covered by
        the terms of the policy or any policy endorsement.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This statutory protection was enacted specifically because insurers were denying extended
        replacement cost benefits to policyholders who chose to relocate after losing their homes
        in wildfires &mdash; an unconscionable tactic given that many of these homeowners relocated
        precisely because the area remained high-risk.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Guaranteed (100%) Replacement Cost Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Guaranteed replacement cost &mdash; sometimes marketed as &ldquo;100% replacement
        cost&rdquo; or &ldquo;unlimited replacement cost&rdquo; &mdash; is a policy endorsement
        that obligates the insurer to pay the full cost to rebuild your home to its pre-loss
        condition, <strong>regardless of whether that cost exceeds the dwelling limit</strong>.
        There is no cap (or the cap is set so high as to be functionally unlimited).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the gold standard of dwelling coverage. If your home is insured for $600,000 but
        the actual rebuild cost after a wildfire is $1.1 million due to demand surge, code
        upgrades, and material shortages, a guaranteed replacement cost policy covers the full
        $1.1 million.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Guaranteed replacement cost policies have become increasingly rare in California. After
        the catastrophic wildfire seasons of 2017 and 2018, many carriers either eliminated
        guaranteed replacement cost endorsements entirely or converted them to extended replacement
        cost with a fixed percentage cap. If you currently have guaranteed replacement cost
        coverage, understand its value &mdash; and be extremely cautious about switching carriers,
        as you may not be able to get it again.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Side-by-Side Comparison
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-[#1F3964] text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Feature</th>
              <th className="px-4 py-3 font-semibold">Standard RC</th>
              <th className="px-4 py-3 font-semibold">Extended RC</th>
              <th className="px-4 py-3 font-semibold">Guaranteed (100%) RC</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Maximum payout</td>
              <td className="px-4 py-3">dwelling limit</td>
              <td className="px-4 py-3">Dwelling + 25&ndash;50%</td>
              <td className="px-4 py-3">Full rebuild cost (no cap)</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3 font-medium">Depreciation deducted?</td>
              <td className="px-4 py-3">No (paid as holdback)</td>
              <td className="px-4 py-3">No (paid as holdback)</td>
              <td className="px-4 py-3">No (paid as holdback)</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Protects against underinsurance?</td>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3">Partially</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3 font-medium">Protects against demand surge?</td>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3">Partially</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Premium cost</td>
              <td className="px-4 py-3">Base</td>
              <td className="px-4 py-3">Moderate increase</td>
              <td className="px-4 py-3">Highest (if available)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Availability in CA (2025)</td>
              <td className="px-4 py-3">Universal</td>
              <td className="px-4 py-3">Common</td>
              <td className="px-4 py-3">Rare / being phased out</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Distinction Matters: Demand Surge and Underinsurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major disaster, construction costs in the affected area spike dramatically. This
        phenomenon &mdash; called <strong>demand surge</strong> &mdash; can increase rebuild costs
        by 30 to 100 percent or more above pre-disaster estimates. Contractors are scarce, building
        materials are in short supply, and everyone is competing for the same labor pool.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A United Policyholders survey of homeowners who lost their homes in the 2007 Southern
        California wildfires found that <strong>only 26 percent had sufficient coverage to
        rebuild</strong>. The average shortfall was $240,000. These were not careless homeowners
        who chose cheap policies &mdash; they were people who believed their replacement cost
        coverage would cover the full cost to rebuild. It did not, because their policy limits
        were set before demand surge drove prices skyward.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same pattern repeated after the 2017 Tubbs Fire, the 2018 Camp Fire, the 2020 Glass
        Fire, and the 2025 Palisades and Eaton fires. Homeowners with guaranteed replacement cost
        endorsements were made whole. Homeowners with standard replacement cost policies absorbed
        the shortfall themselves &mdash; sometimes hundreds of thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Insurance Code Protections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has enacted several statutory protections related to replacement cost coverage:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 2051 &mdash; Actual Cash Value
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Defines actual cash value as the cost to repair, rebuild, or replace the damaged property,
        less &ldquo;a fair and reasonable deduction for physical depreciation based upon its
        condition at the time of the loss.&rdquo; This is the baseline &mdash; even ACV policies
        must value the loss based on current replacement cost before applying depreciation. The
        depreciation must reflect the property&rsquo;s actual physical condition, not merely its
        age.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 2051.5 &mdash; Replacement Cost Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The central statute governing replacement cost coverage in California. Key provisions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Subdivision (a):</strong> Establishes the two-step payment process &mdash; the
          insurer pays{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
            actual cash value
          </Link>{' '}
          first, then pays the remaining replacement cost (the{' '}
          <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] hover:underline">
            holdback
          </Link>
          ) after the insured actually repairs, rebuilds, or replaces the damaged property. Payment
          is capped at &ldquo;the policy limit, whichever is less.&rdquo;
        </li>
        <li>
          <strong>Subdivision (b):</strong> Sets minimum timeframes for collecting the holdback.
          For standard losses, the insurer cannot impose a deadline shorter than{' '}
          <strong>12 months</strong> from the date the first ACV payment is made. For losses
          related to a declared state of emergency, the minimum is <strong>36 months</strong>, with
          mandatory six-month extensions for good cause, including construction permit delays,
          material shortages, and contractor unavailability.
        </li>
        <li>
          <strong>Subdivision (c):</strong> Prohibits insurers from denying replacement cost or
          extended replacement cost benefits solely because the policyholder chooses to rebuild at a
          different location or purchase an existing home elsewhere. The measure of indemnity is
          capped at what it would have cost to rebuild at the original location.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 790.03 &mdash; Unfair Claims Settlement Practices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Prohibits insurers from engaging in unfair claims settlement practices, including failing
        to adopt and implement reasonable standards for the prompt investigation and processing of
        claims, and not attempting in good faith to effectuate prompt, fair, and equitable
        settlements of claims in which liability has become reasonably clear. An insurer that
        misrepresents the nature of replacement cost coverage &mdash; for example, by marketing a
        policy as providing &ldquo;full replacement cost&rdquo; when it is actually capped at the
        policy limit &mdash; may violate this statute. See our guide on{' '}
        <Link href="/resources/insurance-code-790" className="text-[#2E74B5] hover:underline">
          Insurance Code 790.03 and the 790 Letter
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fair Claims Settlement Practices Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations (Title 10, California Code
        of Regulations, Section 2695 et seq.) impose additional requirements on how insurers handle
        replacement cost claims. See our{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          complete guide to the Fair Claims Regulations
        </Link>{' '}
        for a full section-by-section analysis.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.9(a) &mdash; No Depreciation Under Replacement Cost Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a replacement cost policy, the insured &ldquo;shall not have to pay for depreciation
        nor any other cost except for the applicable deductible.&rdquo; While the insurer may
        initially pay ACV and withhold the depreciation as a holdback, the regulation makes clear
        that the policyholder is ultimately entitled to the full undepreciated replacement cost
        once repairs are completed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.9(a) &mdash; Consequential Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss requires repair or replacement of an item, &ldquo;any consequential physical
        damage incurred in making the repair or replacement not otherwise excluded by the policy
        shall be included in the loss.&rdquo; This means the insurer cannot limit the scope of
        replacement cost payment to only the directly damaged item &mdash; the cost of accessing
        and restoring surrounding areas must be included.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.9(a) &mdash; Matching
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When replaced items do not match in quality, color, or size, &ldquo;the insurer shall
        replace all items in the damaged area so as to conform to a reasonably uniform
        appearance.&rdquo; This is particularly relevant to replacement cost disputes because
        the matching requirement can significantly increase the scope &mdash; and cost &mdash; of
        a repair. See our guide on{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
          matching
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.9(f) &mdash; Depreciation Standards
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.9(f) requires that depreciation adjustments be &ldquo;discernable, measurable,
        itemized, and specified as to dollar amount,&rdquo; reflect &ldquo;a measurable difference
        in market value attributable to the condition and age of the property,&rdquo; and apply
        &ldquo;only to property normally subject to repair and replacement during the useful life
        of the property.&rdquo; The companion provision at &sect; 2695.9(f)(1) goes further:
        &ldquo;Except for the intrinsic labor costs that are included in the cost of manufactured
        materials or goods, the expense of labor necessary to repair, rebuild or replace covered
        property is not a component of physical depreciation and shall not be subject to
        depreciation or betterment.&rdquo; That regulatory prohibition operates against the
        statutory backdrop of Insurance Code &sect; 2051(b)&apos;s ACV framework. This means
        any depreciation deducted from an ACV payment must be calculated
        properly &mdash; blanket percentages and depreciated labor are violations. See
        our guides on{' '}
        <Link href="/resources/excessive-depreciation" className="text-[#2E74B5] hover:underline">
          excessive depreciation
        </Link>{' '}
        and{' '}
        <Link href="/resources/labor-depreciation-debate" className="text-[#2E74B5] hover:underline">
          labor depreciation
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.183 &mdash; Replacement Cost Estimate Standards
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This regulation &mdash; upheld by the California Supreme Court in <em>Association of
        California Insurance Companies v. Jones</em> (2017) 2 Cal.5th 376 &mdash; requires that
        if an insurer communicates a replacement cost estimate to a homeowner (for example, when
        setting the dwelling limit at the time of purchase or renewal), that estimate must
        include the full cost of rebuilding, including labor, materials, overhead and profit,
        demolition and debris removal, permits, architect&rsquo;s plans, and all components and
        features of the structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This regulation was enacted after the 2003 and 2007 California wildfires, when thousands
        of homeowners discovered that their insurers had used incomplete replacement cost
        estimators that produced artificially low dwelling limits. If your insurer provided a
        replacement cost estimate that omitted major cost categories, the resulting underinsurance
        may be attributable to the insurer&rsquo;s failure to comply with this regulation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key California Case Law
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Association of California Insurance Companies v. Jones</em> (2017) 2 Cal.5th 376
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court upheld the Insurance Commissioner&rsquo;s authority to
        regulate replacement cost estimates under 10 CCR &sect; 2695.183. The insurance industry
        challenged the regulation, arguing that it exceeded the Commissioner&rsquo;s authority.
        The Supreme Court unanimously disagreed, holding that the Commissioner had the power to
        regulate how insurers communicate replacement cost estimates to policyholders. The Court
        noted that the regulation was prompted by &ldquo;complaints from homeowners who did not
        have sufficient insurance to repair or rebuild their homes&rdquo; after the Southern
        California wildfires because &ldquo;the estimates of the replacement value of their homes
        were too low.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Why it matters:</strong> This case confirmed that insurers bear responsibility for
        the accuracy of their replacement cost estimates. If you were underinsured because your
        insurer used a deficient estimating tool or omitted major cost components, the insurer may
        bear responsibility for the resulting gap.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Everett v. State Farm General Insurance Co.</em> (2008) 162 Cal.App.4th 649
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this case, the policyholder contended that State Farm&rsquo;s inflation coverage
        provision led her to believe the policy provided 100 percent replacement cost coverage.
        The Court of Appeal disagreed, holding that nothing in the policy language supported a
        finding that an inflation guard endorsement &mdash; which periodically increases the
        dwelling limit &mdash; is the same as guaranteed replacement cost. The two are different
        products with different functions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Why it matters:</strong> This case illustrates the critical distinction between
        policy features that <em>increase</em> your limit over time (inflation guard) and
        endorsements that <em>eliminate</em> the limit entirely (guaranteed replacement cost). An
        inflation guard adjusts your dwelling limit annually &mdash; but if construction costs
        spike 50 percent overnight after a disaster, the inflation guard will not have kept pace.
        Only guaranteed replacement cost protects against that scenario.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Doan v. State Farm General Ins. Co.</em> (2011) 195 Cal.App.4th 1082
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that depreciation must be based on the <em>actual physical condition</em>{' '}
        of the property at the time of loss &mdash; not simply its age. A well-maintained
        20-year-old roof should not be depreciated at the same rate as a neglected one. This case
        is relevant to replacement cost claims because the amount of depreciation directly affects
        the ACV payment the policyholder receives upfront, which in turn affects their ability
        to fund repairs and ultimately collect the full replacement cost.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Agent Liability for Misrepresenting Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have established that an insurance agent can be held liable for
        negligently misrepresenting that a policy provides guaranteed or 100 percent replacement
        cost coverage when it does not. The three recognized exceptions to the general rule that
        agents have no duty to advise on coverage are:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The agent <strong>misrepresented</strong> the nature, extent, or scope of coverage
        </li>
        <li>
          The insured made a <strong>specific request</strong> for a particular type or extent of
          coverage
        </li>
        <li>
          The agent <strong>assumed an additional duty</strong> by express agreement or by holding
          themselves out as having expertise in the type of insurance being sought
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your agent told you the policy would &ldquo;fully replace your home no matter what it
        costs&rdquo; and it turns out you have standard replacement cost with a fixed limit, you
        may have a claim against the agent for the gap.
      </p>

      <CalloutBox variant="tip" title="Document What Your Agent Tells You">
        <p>
          If your insurance agent or broker makes verbal representations about coverage &mdash;
          especially claims that your policy provides &ldquo;full&rdquo; or &ldquo;100
          percent&rdquo; replacement cost &mdash; follow up with an email confirming what was said.
          This creates a written record that can support a misrepresentation claim if the actual
          policy language does not match what you were told.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Check What You Actually Have
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not rely on what your agent told you, what the marketing brochure says, or what you
        think you remember from when you purchased the policy. Check these specific documents:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Your declarations page.</strong> This shows your dwelling limit.
          Under a standard replacement cost policy, this is your maximum payout for dwelling damage.
          See our guide on{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            reading your declarations page
          </Link>.
        </li>
        <li>
          <strong>Your endorsements.</strong> Look for endorsements titled &ldquo;Extended
          Replacement Cost,&rdquo; &ldquo;Guaranteed Replacement Cost,&rdquo; &ldquo;100%
          Replacement Cost,&rdquo; or similar language. The endorsement will specify the percentage
          above the dwelling limit (for extended) or confirm unlimited coverage (for guaranteed).
        </li>
        <li>
          <strong>The loss settlement provision.</strong> This is in the body of your policy and
          controls how your payout is calculated. Look for language about limits, caps, and
          conditions for collecting full replacement cost. See our guide on{' '}
          <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] hover:underline">
            loss settlement provisions
          </Link>.
        </li>
        <li>
          <strong>The inflation guard endorsement.</strong> If you have one, this automatically
          increases your dwelling limit periodically &mdash; but it is <em>not</em> the same as
          guaranteed replacement cost. It is a limit adjuster, not a limit eliminator.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If You Are Underinsured
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have already suffered a loss and discover that your replacement cost coverage is
        capped below the actual rebuild cost, you are not necessarily out of options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Check for extended replacement cost endorsements.</strong> Many policyholders
          have this coverage without realizing it. Even 25 percent above your dwelling limit can
          represent $100,000 or more in additional coverage.
        </li>
        <li>
          <strong>Review how the insurer set your dwelling limit.</strong> If the insurer provided
          a replacement cost estimate when they sold or renewed the policy, check whether it
          complied with 10 CCR &sect; 2695.183. If the estimate omitted major categories (overhead
          and profit, demolition, permits), the insurer may bear responsibility for the shortfall.
        </li>
        <li>
          <strong>Check for agent misrepresentation.</strong> If your agent represented that you
          had guaranteed replacement cost or &ldquo;full coverage,&rdquo; document the
          representations and consult an attorney.
        </li>
        <li>
          <strong>Maximize every other coverage.</strong> Even if your dwelling coverage is exhausted,
          you may have untapped coverage under Other Structures coverage, personal
          property coverage, Loss of Use coverage (
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
            additional living expenses
          </Link>
          ), and{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
            ordinance and law coverage
          </Link>
          . A Public Adjuster can help identify and recover all available benefits.
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance.</strong> If the
          insurer used a deficient replacement cost estimator, this may constitute a violation
          of regulatory standards. See our guide on{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] hover:underline">
            filing a CDI complaint
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="important" title="Before Your Next Renewal">
        <p>
          If you have not yet suffered a loss, now is the time to act. Request a current
          replacement cost estimate from your insurer, compare it to what a local contractor would
          actually charge to rebuild your home from the ground up, and increase your dwelling limit
          if there is a gap. Ask about extended or guaranteed replacement cost endorsements. The
          additional premium is modest compared to the cost of being underinsured after a disaster.
          If your current carrier does not offer guaranteed replacement cost, consider shopping for
          one that does &mdash; while they are still available.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Replacement cost coverage&rdquo; is a valuation method, not a guarantee. It means
        the insurer values your loss at what it would cost to replace without deducting for
        depreciation &mdash; but that payment is capped at your policy limit. Extended replacement
        cost adds a buffer. Guaranteed replacement cost removes the cap entirely. After a disaster,
        the difference between these three coverage types can be the difference between rebuilding
        your home and walking away from it.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Not Sure What Your Policy Covers?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster can review your policy, identify whether you have standard,
          extended, or guaranteed replacement cost coverage, and make sure you recover every dollar
          available under your policy &mdash; including endorsements and additional coverages you
          may not know you have.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Policy Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage
          disputes, a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>

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
