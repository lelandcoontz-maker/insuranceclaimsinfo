import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Blanket vs. Specific Insurance: How Limits Work Across Multiple Locations',
  description:
    'How blanket and specific insurance limits differ for multi-location businesses, why blanket coverage reduces coinsurance risk, and how to evaluate which structure protects your commercial property best.',
  summary:
    'Blanket insurance applies one limit across multiple locations or categories, reducing coinsurance risk, while specific insurance fixes a separate limit per location. For multi-location businesses, blanket coverage usually offers more flexible protection.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Educational Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Policy language, endorsements, and applicable law vary by carrier, state, and
          policy form. Consult with a licensed professional regarding your specific coverage
          structure.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If your business insures more than one building or operates across multiple locations,
        one of the most consequential decisions in your commercial property program is whether
        your limits are written on a <strong>specific</strong> (also called &ldquo;scheduled&rdquo;)
        basis or a <strong>blanket</strong> basis. The distinction affects how much you recover
        after a loss, whether a{' '}
        <Link href="/resources/commercial-coinsurance" className="text-[#2E74B5] underline hover:text-blue-900">
          coinsurance penalty
        </Link>{' '}
        applies, and how much flexibility you have as property values shift over time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many business owners never think about this distinction until a loss occurs and the
        adjuster applies a coinsurance penalty to a location that was underinsured &mdash; even
        though other locations were overinsured. Understanding how these two structures work is
        essential for avoiding preventable shortfalls in recovery.
      </p>

      {/* ── Section 1: Specific Insurance ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What &ldquo;Specific&rdquo; Insurance Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a specific (or scheduled) insurance arrangement, each building, location, or
        coverage category listed on the declarations page has its own separate limit of
        insurance. That limit applies independently &mdash; it cannot be borrowed from or
        shared with any other item on the schedule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key characteristics of specific insurance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Each building or location carries its own limit &mdash; for example, Building A at
          $1,500,000, Building B at $2,000,000, Building C at $1,500,000.
        </li>
        <li>
          Each limit applies independently. A loss at Building A can only be paid from Building
          A&rsquo;s limit. Surplus capacity at Buildings B and C is irrelevant.
        </li>
        <li>
          Each location has its own coinsurance requirement, calculated independently against
          that location&rsquo;s replacement cost value.
        </li>
        <li>
          Underinsuring one location does not affect recovery at another location &mdash; but
          the coinsurance penalty applies in full to the underinsured location where the loss
          occurs.
        </li>
        <li>
          If property values at one location increase faster than expected, the coinsurance gap
          grows at that location alone, even if other locations remain adequately insured.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental risk with specific insurance is that each location is an island. You
        cannot offset a shortfall at one location with excess coverage at another. This creates
        a fragile structure for businesses with fluctuating or hard-to-predict values across
        multiple sites.
      </p>

      {/* ── Section 2: Blanket Insurance ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What &ldquo;Blanket&rdquo; Insurance Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a blanket insurance arrangement, a single limit of insurance covers multiple
        items, locations, or coverage categories. Instead of assigning separate limits to each
        building, the policy provides one aggregate limit that is available for any loss at any
        covered location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key characteristics of blanket insurance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A single limit &mdash; say $5,000,000 &mdash; covers all scheduled locations.
        </li>
        <li>
          The full blanket limit is available for a loss at any one location. If a building
          worth $2,000,000 suffers a total loss, the entire $5,000,000 limit is theoretically
          available (subject to the actual loss amount).
        </li>
        <li>
          Coinsurance is calculated on the <em>combined</em> values of all blanket items, not
          on each location individually.
        </li>
        <li>
          A $5,000,000 blanket limit covering three buildings worth $1,500,000, $2,000,000, and
          $1,500,000 means the full $5,000,000 is available for a total loss at any single
          location &mdash; provided the blanket limit meets the coinsurance requirement for the
          combined total.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The blanket structure gives multi-location businesses a critical advantage: flexibility.
        Values can shift between locations over time without creating a coinsurance gap at any
        single site, as long as the aggregate limit keeps pace with the aggregate value.
      </p>

      {/* ── Section 3: Coinsurance Advantages ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Blanket Insurance Reduces Coinsurance Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coinsurance advantage of blanket coverage is the primary reason most multi-location
        businesses prefer it. Here is why it matters:
      </p>
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Specific Insurance Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        With specific insurance, each location must independently meet its coinsurance
        requirement. If Building A was insured for $1,500,000 at inception but construction
        costs have driven its replacement value to $1,800,000, and your policy has a 90%
        coinsurance clause, the required insurance for that building is now $1,620,000. Your
        $1,500,000 limit falls short, and any partial loss at Building A triggers a penalty
        &mdash; even if Buildings B and C are overinsured by hundreds of thousands of dollars.
      </p>
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Blanket Insurance Solution
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        With blanket insurance, coinsurance compliance is measured across the entire blanket.
        As long as the total blanket limit meets the coinsurance percentage of the total
        insurable value across all locations, no penalty applies &mdash; even if individual
        locations are &ldquo;unbalanced.&rdquo; One location can increase in value while
        another decreases, and as long as the aggregate math works, every location is protected.
      </p>
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Margin Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many blanket policies include a <strong>margin clause</strong> (sometimes called a
        &ldquo;cushion&rdquo; or &ldquo;margin of coverage&rdquo;) that provides an additional
        buffer of 10&ndash;25% above the stated values. This margin allows the total insurable
        value across all locations to drift upward during the policy period without triggering
        coinsurance. For example, a blanket policy with a 25% margin clause and $5,000,000 in
        reported values would not trigger a coinsurance penalty until total values exceeded
        $6,250,000. This built-in cushion is one of the most valuable features of blanket
        coverage for businesses in areas with volatile construction costs.
      </p>

      {/* ── Section 4: How Blanket Rating Works ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Blanket Rating Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket insurance is rated on the total value across all covered locations. The premium
        reflects the insurer&rsquo;s increased exposure &mdash; because the full blanket limit
        is available at each location, the insurer faces a higher potential payout than it would
        under specific insurance, where each location&rsquo;s limit caps the exposure there.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The premium for blanket coverage is typically 5&ndash;15% higher than the equivalent
          specific coverage, depending on the number of locations, the spread of values, and
          the insurer&rsquo;s underwriting guidelines.
        </li>
        <li>
          This premium increase is usually modest compared to the coinsurance protection it
          provides. A 10% premium increase that prevents a $37,000 coinsurance penalty on a
          single partial loss is a sound investment.
        </li>
        <li>
          Some insurers offer blanket coverage with a rate credit if you also carry a high
          coinsurance percentage (90% or 100%), since higher coinsurance requirements produce
          more premium relative to exposure.
        </li>
      </ul>

      {/* ── Section 5: Types of Blanket Coverage ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Types of Blanket Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket coverage can be structured in several ways, depending on what is being insured:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building blanket:</strong> Covers multiple buildings under a single limit.
          Each building is listed on the statement of values, but the limit floats across all
          of them.
        </li>
        <li>
          <strong>Business personal property (BPP) blanket:</strong> Covers{' '}
          <Link href="/resources/business-personal-property-claims" className="text-[#2E74B5] underline hover:text-blue-900">
            business personal property
          </Link>{' '}
          at multiple locations under one limit. This is especially useful for businesses that
          move inventory or equipment between sites.
        </li>
        <li>
          <strong>Combined building &amp; BPP blanket:</strong> Both buildings and their
          contents are covered under a single blanket limit. This provides maximum flexibility
          but requires careful valuation.
        </li>
        <li>
          <strong>Business income blanket:</strong> Covers business income and extra expense
          across multiple locations under one limit. Particularly valuable when a loss at one
          location can shift revenue to another, making it difficult to predict which location
          will generate the largest income loss.
        </li>
      </ul>

      <CalloutBox variant="info" title="Mixing Blanket and Specific">
        <p>
          It is possible &mdash; and common &mdash; to have a blanket limit for buildings while
          carrying specific limits for other coverages, or vice versa. Your declarations page
          will indicate which items are blanket and which are specific. Review this carefully
          after every renewal.
        </p>
      </CalloutBox>

      {/* ── Section 6: Statement of Values ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Statement of Values
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket insurance requires a <strong>Statement of Values</strong> (SOV) &mdash; a
        document listing each covered location, a description of the property, and its
        individual value. The SOV is the foundation of the blanket arrangement.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The total of all individual values on the SOV determines the blanket limit and
          establishes the baseline for coinsurance compliance.
        </li>
        <li>
          The SOV is submitted at policy inception and at each renewal. Failing to update it
          is one of the most common mistakes policyholders make.
        </li>
        <li>
          <strong>Values must be updated annually.</strong> If actual replacement cost values
          across all locations exceed the reported values on the SOV, the coinsurance penalty
          can still apply &mdash; even on a blanket policy. The blanket structure reduces the
          risk of coinsurance, but it does not eliminate it entirely.
        </li>
        <li>
          When adding new locations mid-term, most blanket policies require notification to the
          insurer and an updated SOV. Some policies include automatic coverage for newly
          acquired locations for a limited period (typically 30&ndash;90 days), but the SOV
          must still be updated.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Outdated Statement of Values">
        <p>
          An outdated SOV is the most common way blanket policyholders inadvertently trigger a
          coinsurance penalty. If you have not updated your SOV in two or three years and
          construction costs in your area have risen significantly, your blanket limit may no
          longer satisfy the coinsurance requirement. Review the SOV at every renewal &mdash;
          not just when your broker asks for it.
        </p>
      </CalloutBox>

      {/* ── Section 7: Worked Example ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Worked Example: Specific vs. Blanket
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a business that owns three locations. At policy inception, the replacement
        cost values are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Building A: $1,500,000</li>
        <li>Building B: $2,000,000</li>
        <li>Building C: $1,500,000</li>
        <li>Total: $5,000,000</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy has a <strong>90% coinsurance requirement</strong>. During the policy
        period, Building A&rsquo;s replacement cost increases to $1,800,000 due to rising
        construction costs. The other buildings remain at their original values. A
        $500,000 partial loss occurs at Building A.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Scenario 1: Specific Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each building has its own limit. Building A is insured for $1,500,000. The coinsurance
        calculation looks only at Building A:
      </p>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Building A replacement cost: $1,800,000</li>
          <li>Coinsurance requirement: 90%</li>
          <li>Insurance required: $1,800,000 &times; 90% = $1,620,000</li>
          <li>Insurance carried on Building A: $1,500,000</li>
          <li>
            Payment: ($1,500,000 &divide; $1,620,000) &times; $500,000 = <strong>$462,963</strong>
          </li>
          <li>
            Coinsurance penalty: $500,000 &minus; $462,963 = <strong>$37,037</strong>
          </li>
        </ul>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">
          The business loses $37,037 &mdash; even though Buildings B and C are fully insured
          and their limits are not involved in the calculation.
        </p>
      </div>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Scenario 2: Blanket Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        All three buildings are covered under a single $5,000,000 blanket limit. The
        coinsurance calculation looks at the aggregate:
      </p>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>
            Total replacement cost (all locations): $1,800,000 + $2,000,000 + $1,500,000 = $5,300,000
          </li>
          <li>Coinsurance requirement: 90%</li>
          <li>Insurance required: $5,300,000 &times; 90% = $4,770,000</li>
          <li>Insurance carried (blanket limit): $5,000,000</li>
          <li>$5,000,000 exceeds $4,770,000 &mdash; coinsurance requirement is met</li>
          <li>
            Payment: <strong>$500,000 in full</strong> (no penalty)
          </li>
        </ul>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">
          The blanket structure absorbs the $300,000 value increase at Building A because the
          aggregate limit still exceeds the aggregate coinsurance requirement. The business
          recovers the full $500,000 loss.
        </p>
      </div>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Side-by-Side Comparison
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="text-left p-3 font-semibold">Factor</th>
              <th className="text-left p-3 font-semibold">Specific Insurance</th>
              <th className="text-left p-3 font-semibold">Blanket Insurance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 font-medium border-b border-gray-200">Limit structure</td>
              <td className="p-3 border-b border-gray-200">$1.5M / $2M / $1.5M (separate)</td>
              <td className="p-3 border-b border-gray-200">$5M (single limit, all locations)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium border-b border-gray-200">Building A actual value</td>
              <td className="p-3 border-b border-gray-200">$1,800,000</td>
              <td className="p-3 border-b border-gray-200">$1,800,000</td>
            </tr>
            <tr>
              <td className="p-3 font-medium border-b border-gray-200">Coinsurance calculation basis</td>
              <td className="p-3 border-b border-gray-200">Building A only ($1.8M)</td>
              <td className="p-3 border-b border-gray-200">All locations ($5.3M)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium border-b border-gray-200">Insurance required (90%)</td>
              <td className="p-3 border-b border-gray-200">$1,620,000</td>
              <td className="p-3 border-b border-gray-200">$4,770,000</td>
            </tr>
            <tr>
              <td className="p-3 font-medium border-b border-gray-200">Insurance carried</td>
              <td className="p-3 border-b border-gray-200">$1,500,000</td>
              <td className="p-3 border-b border-gray-200">$5,000,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium border-b border-gray-200">Coinsurance met?</td>
              <td className="p-3 border-b border-gray-200 text-red-700 font-semibold">No (short by $120K)</td>
              <td className="p-3 border-b border-gray-200 text-green-700 font-semibold">Yes (exceeds by $230K)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium border-b border-gray-200">$500K loss payment</td>
              <td className="p-3 border-b border-gray-200">$462,963</td>
              <td className="p-3 border-b border-gray-200">$500,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium">Coinsurance penalty</td>
              <td className="p-3 text-red-700 font-semibold">$37,037</td>
              <td className="p-3 text-green-700 font-semibold">$0</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Section 8: When Specific Makes Sense ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Specific Insurance Makes More Sense
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket coverage is not always the best choice. Specific insurance may be preferable
        when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Single-location businesses with stable values.</strong> If you insure one
          building and its value is predictable, there is no &ldquo;pooling&rdquo; benefit
          from blanket coverage and the additional premium is wasted.
        </li>
        <li>
          <strong>Locations with vastly different risk profiles.</strong> If one location is
          in a flood zone and another is not, or one requires a special cause of loss form
          (e.g., earthquake), specific insurance allows you to tailor coverage and forms to
          each site.
        </li>
        <li>
          <strong>Specialized coverage needs at individual locations.</strong> When one
          building needs unique endorsements &mdash; such as equipment breakdown, ordinance or
          law coverage at a higher limit, or specialized flood insurance &mdash; specific
          scheduling allows those endorsements to apply precisely where needed.
        </li>
        <li>
          <strong>Premium sensitivity with accurate valuations.</strong> If you are confident
          that your valuations at each location are accurate and regularly updated, specific
          insurance avoids the blanket surcharge while still meeting coinsurance requirements.
        </li>
      </ul>

      {/* ── Section 9: When Blanket Makes Sense ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Blanket Insurance Makes More Sense
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket coverage is typically the superior option for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Multi-location businesses.</strong> The more locations you insure, the
          greater the risk that at least one will be underinsured under a specific arrangement.
          Blanket coverage pools the risk across all sites.
        </li>
        <li>
          <strong>Businesses with fluctuating values.</strong> If inventory, equipment, or
          tenant improvements shift between locations, blanket coverage ensures the limit
          follows the value without requiring constant endorsement changes.
        </li>
        <li>
          <strong>Markets with construction cost inflation.</strong> In regions where
          replacement costs are rising rapidly, blanket coverage &mdash; especially with a
          margin clause &mdash; provides a buffer that specific insurance simply cannot match.
        </li>
        <li>
          <strong>Growing or acquiring businesses.</strong> Companies that frequently add new
          locations benefit from the flexibility of blanket coverage, which can absorb new
          acquisitions within the existing limit (often with automatic coverage for a
          notification period).
        </li>
        <li>
          <strong>Businesses that want maximum recovery certainty.</strong> If your priority
          is avoiding coinsurance surprises at claim time, blanket coverage is the safer
          structural choice.
        </li>
      </ul>

      {/* ── Section 10: Practical Advice ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Advice for Policyholders
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ask your broker whether blanket is available and what the premium difference
          is.</strong> Many business owners are never told about blanket coverage because the
          agent defaults to specific scheduling. The premium difference is often surprisingly
          small relative to the protection it provides.
        </li>
        <li>
          <strong>Review the Statement of Values annually.</strong> Whether you carry blanket
          or specific insurance, outdated valuations are the single most common cause of
          coinsurance penalties. Request an updated replacement cost estimate for each location
          at every renewal.
        </li>
        <li>
          <strong>Understand that blanket does not eliminate coinsurance.</strong> It makes
          compliance easier by pooling values across locations, but the coinsurance clause
          still applies to the aggregate. If total values grow beyond the blanket limit and
          the margin clause, the penalty can still be triggered.
        </li>
        <li>
          <strong>Verify how your insurer calculates coinsurance on a blanket policy.</strong>{' '}
          If your insurer applies a coinsurance penalty after a loss on a blanket policy,
          verify that they calculated the penalty using the total blanket values across all
          locations &mdash; not the individual location where the loss occurred. Applying the
          coinsurance formula to a single location on a blanket policy is improper and should
          be challenged.
        </li>
        <li>
          <strong>Look for a margin clause.</strong> If your blanket policy does not include a
          margin clause, ask whether one can be added by endorsement. The additional premium is
          typically minimal and the protection against mid-term value drift is significant.
        </li>
      </ol>

      {/* ── Section 11: How Carriers Weaponize Specific Insurance ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Carriers Exploit the Specific Insurance Structure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The specific insurance structure creates vulnerabilities that sophisticated carriers
        know how to exploit at claim time. Policyholders and their advocates should watch for
        these patterns:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Post-loss appraisals inflating individual building values.</strong> After a
          loss, the carrier orders a replacement cost appraisal for the damaged location. That
          appraisal comes back higher than the specific limit &mdash; sometimes conveniently so
          &mdash; and the carrier applies a coinsurance penalty based on the post-loss valuation.
          The policyholder had no reason to know the value had increased and was never advised
          to raise the limit.
        </li>
        <li>
          <strong>Applying the penalty location-by-location even when the portfolio is
          adequately insured.</strong> A business with three locations and $5,000,000 in total
          coverage may be perfectly insured in the aggregate, but if one location is $120,000
          under its specific limit, the carrier applies the penalty to that location&rsquo;s
          loss. The other locations&rsquo; adequate coverage is irrelevant under the specific
          structure &mdash; which is precisely why the carrier sold it that way.
        </li>
        <li>
          <strong>Failing to recommend blanket coverage at renewal.</strong> Agents and brokers
          have a duty to review coverage and make appropriate recommendations. When a multi-location
          business is left on specific scheduling year after year without being told that blanket
          coverage is available and would provide superior protection, the question of whether the
          agent&rsquo;s failure to advise constitutes negligence is worth exploring with counsel.
        </li>
      </ul>

      <CalloutBox variant="important" title="Challenge Improper Coinsurance Calculations">
        <p>
          When a carrier applies a coinsurance penalty on a blanket policy by calculating
          coinsurance at the individual location level rather than the aggregate blanket
          level, the calculation is generally inconsistent with how blanket insurance is
          structured. The entire point of blanket insurance is that the coinsurance formula
          uses the combined values. You might consider asking the carrier to show which
          values they used in the denominator of the coinsurance formula.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The coinsurance clause in a blanket policy operates on the total values across all
        scheduled locations. When a carrier isolates a single location from the blanket and
        applies the coinsurance penalty as though that location were specifically insured, the
        carrier is restructuring the coverage at the time of loss. That allocation is
        inconsistent with how blanket insurance is generally written and is a point worth
        surfacing with the carrier in writing.
      </p>

      {/* ── Related Reading ── */}
      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/commercial-coinsurance" className="text-[#2E74B5] underline hover:text-blue-900">
              Commercial Coinsurance Explained
            </Link>{' '}
            &mdash; How the coinsurance formula works and how to avoid penalties
          </li>
          <li>
            <Link href="/resources/cp-vs-bop-policies" className="text-[#2E74B5] underline hover:text-blue-900">
              CP vs. BOP Policies
            </Link>{' '}
            &mdash; Comparing commercial property policy forms
          </li>
          <li>
            <Link href="/resources/commercial-endorsements" className="text-[#2E74B5] underline hover:text-blue-900">
              Commercial Endorsements
            </Link>{' '}
            &mdash; Key endorsements that modify commercial property coverage
          </li>
          <li>
            <Link href="/resources/business-personal-property-claims" className="text-[#2E74B5] underline hover:text-blue-900">
              Business Personal Property Claims
            </Link>{' '}
            &mdash; How BPP coverage works and common claim issues
          </li>
        </ul>
      </CalloutBox>

      {/* ── CTA ── */}
      <div className="mt-12 p-6 bg-[#1F3964] rounded-lg text-center">
        <p className="text-white text-lg font-semibold mb-2">
          Multi-Location Business Facing a Coinsurance Dispute?
        </p>
        <p className="text-blue-100 text-sm mb-4">
          A Licensed Public Adjuster can review your blanket or specific coverage structure and challenge improperly applied coinsurance penalties.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] text-white font-bold py-3 px-8 rounded hover:bg-yellow-600 transition"
        >
          Request a Free Consultation
        </Link>
      </div>
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
