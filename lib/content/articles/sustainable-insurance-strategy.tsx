import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California’s Sustainable Insurance Strategy: What the Biggest Overhaul in 30 Years Means for Your Premiums',
  description:
    'An in-depth look at the California Department of Insurance’s Sustainable Insurance Strategy — how forward-looking catastrophe models, reinsurance cost pass-through, and Proposition 103 changes are reshaping insurance rates and availability statewide.',
  summary:
    'California\'s Sustainable Insurance Strategy, the biggest overhaul in 30 years, lets insurers use forward-looking catastrophe models and pass through reinsurance costs in exchange for writing more high-risk areas. It reshapes premiums and availability statewide.',
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
        In late 2023, California Insurance Commissioner Ricardo Lara announced the Sustainable
        Insurance Strategy &mdash; the most fundamental overhaul of California&rsquo;s insurance
        regulatory framework since the passage of Proposition 103 in 1988. The strategy is designed
        to address a crisis that has been building for years: major insurers leaving California,
        the FAIR Plan growing to unsustainable levels, and hundreds of thousands of homeowners
        unable to find coverage at any price.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The central bargain of the Sustainable Insurance Strategy is straightforward in concept,
        even if the details are complex: insurers get the ability to charge higher, more
        actuarially accurate rates, and in exchange, they commit to writing policies in the
        wildfire-distressed areas they have been fleeing. Whether this bargain delivers for
        California consumers depends on how the details play out &mdash; and the early results
        are mixed.
      </p>

      {/* ====== Background ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How California Got Here
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Since 2020, major carriers including State Farm, Allstate, Farmers, USAA, Chubb, and
        others either stopped writing new homeowner policies in California or significantly
        restricted their footprint. The California FAIR Plan &mdash; meant to be a temporary
        backstop &mdash; swelled to over 400,000 policies with total insured exposure exceeding
        $300 billion. In some wildfire-prone communities, more than half of all homeowners were on
        the FAIR Plan or surplus lines coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The root cause, from the industry&rsquo;s perspective, was that California&rsquo;s
        regulatory framework prevented them from pricing policies to reflect actual wildfire risk.
        Under Proposition 103, insurance rates in California must be approved by the Department of
        Insurance before they take effect. Historically, the CDI required insurers to base rates on
        <em> historical</em> loss data &mdash; looking backward at what losses had occurred &mdash;
        rather than <em>forward-looking</em> catastrophe models that project what losses are likely
        to occur in the future based on climate trends, vegetation conditions, and urban-wildland
        interface expansion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also, California did not allow insurers to include the cost of reinsurance (the
        insurance that insurers buy to protect themselves against catastrophic losses) in their rate
        calculations. Since reinsurance costs have skyrocketed due to global catastrophe losses,
        this meant California rates did not reflect one of the largest cost drivers in the industry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader look at how the crisis developed, see the overview of the{' '}
        <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] underline">
          California insurance crisis
        </Link>.
      </p>

      {/* ====== Core Elements ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Core Elements of the Sustainable Insurance Strategy
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Forward-Looking Catastrophe Models
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most significant change is that the CDI now allows insurers to use forward-looking
        catastrophe models to justify rate filings. These models use scientific data &mdash;
        climate projections, vegetation analysis, fire behavior simulation, topography, and
        building construction characteristics &mdash; to estimate expected future losses rather
        than relying solely on what happened in the past.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first catastrophe model was approved by the CDI in mid-2025. Models must meet specific
        criteria set by the Department, including transparency requirements, open methodology
        standards, and validation against historical data. The CDI retains authority to reject or
        require modifications to any model, and the models used by insurers are subject to
        regulatory review.
      </p>

      <CalloutBox variant="warning" title="What Forward-Looking Models Mean for Premiums">
        <p>
          Forward-looking models almost universally produce higher risk estimates than historical
          data alone, because they account for increasing wildfire frequency, drought conditions,
          and expanding wildland-urban interface development. For homeowners in high-risk areas,
          this translates directly into higher premiums. The question is whether the premium
          increases lead to genuine availability &mdash; carriers actually writing policies &mdash;
          or simply more expensive coverage that remains difficult to obtain.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Reinsurance Cost Pass-Through
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the first time, California insurers can include the cost of reinsurance in their rate
        calculations. Reinsurance is the mechanism by which insurers spread catastrophic risk
        globally &mdash; a California insurer might buy reinsurance from carriers in London,
        Bermuda, or Zurich to protect itself against a $1 billion wildfire event. These costs have
        increased dramatically since 2020 as global catastrophe losses (hurricanes, wildfires,
        floods, and severe convective storms) have driven reinsurance prices upward worldwide.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allowing reinsurance cost pass-through means that California policyholders now absorb a
        share of global catastrophe cost trends &mdash; even events in other states or countries
        affect the cost of reinsurance that California insurers purchase, which is now reflected
        in California premiums. This is a significant shift. It connects California homeowner
        rates to global reinsurance market dynamics in a way that was not previously permitted.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. The 85% Commitment: Writing in Wildfire-Distressed Areas
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The other side of the bargain is the commitment requirement. Insurers that use
        forward-looking catastrophe models and reinsurance cost pass-through to justify higher rates
        must, in exchange, commit to writing at least <strong>85% of their statewide market
        share in new policies in wildfire-distressed areas</strong>. In practical terms, if an
        insurer holds 10% of the California homeowner market statewide, it must write new policies
        in wildfire-distressed ZIP codes at a rate of at least 8.5% of total new policies in those
        areas.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the mechanism designed to ensure that higher rates translate into actual
        availability. Without this requirement, insurers could simply charge more in lower-risk
        areas while continuing to avoid high-risk communities altogether.
      </p>

      <CalloutBox variant="info" title="What &ldquo;Wildfire-Distressed&rdquo; Means">
        <p>
          The CDI defines wildfire-distressed areas based on the concentration of FAIR Plan
          policies. ZIP codes where the FAIR Plan market share exceeds certain thresholds are
          classified as distressed. These are areas where the voluntary market has
          substantially withdrawn, leaving residents dependent on the{' '}
          <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
            FAIR Plan
          </Link>{' '}
          or surplus lines carriers.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Modifications to the Proposition 103 Framework
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proposition 103, passed by California voters in 1988, established the prior-approval
        system for insurance rates. The Sustainable Insurance Strategy does not repeal or
        fundamentally alter Proposition 103 &mdash; doing so would require another ballot
        initiative &mdash; but the regulatory changes effectively expand what insurers can include
        in their rate filings within the existing framework. The CDI has used its regulatory
        authority to implement the catastrophe model and reinsurance provisions through rulemaking
        rather than legislation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consumer advocacy groups have challenged some of these changes, arguing that the
        regulatory modifications circumvent the intent of Proposition 103 without voter approval.
        This legal and political tension is ongoing and may ultimately be resolved by the courts
        or a future ballot measure.
      </p>

      {/* ====== Rate Impact ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Happening to Premiums
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The premium impact has been substantial. The California Department of Insurance has
        approved rate increases averaging approximately 16% for 2026, following cumulative
        increases of roughly 18% in 2024 and 2025 combined. This means that a California
        homeowner who was paying $2,000 per year in 2023 could be paying approximately $2,680
        by the end of 2026 &mdash; a cumulative increase of roughly 34%.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are statewide averages. The impact varies dramatically by location:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>High wildfire risk areas.</strong> Homeowners in State Responsibility Areas
          (SRA) and Very High Fire Hazard Severity Zones (VHFHSZ) are seeing the largest
          increases &mdash; in some cases 40% to 60% or more &mdash; as forward-looking models
          assign significantly higher risk scores to these areas.
        </li>
        <li>
          <strong>Urban and lower-risk areas.</strong> Homeowners in urban, lower-risk areas are
          seeing more moderate increases, but they are still absorbing the impact of reinsurance
          cost pass-through and general market hardening.
        </li>
        <li>
          <strong>FAIR Plan policyholders.</strong> The FAIR Plan has filed its own rate increases
          as well. Homeowners on the FAIR Plan often face the highest absolute premiums because
          the Plan&rsquo;s loss experience is concentrated in the highest-risk areas.
        </li>
      </ul>

      {/* ====== Carriers Returning ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Carriers Returning to the California Market
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The stated goal of the Sustainable Insurance Strategy is to bring carriers back to
        California. As of early 2026, several carriers have either resumed writing new policies
        or expanded their California operations under the new framework:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mercury Insurance</strong> has resumed writing new homeowner policies in
          California after a period of restricted new business.
        </li>
        <li>
          <strong>CSAA Insurance Group</strong> (the AAA-affiliated insurer) has expanded its
          California homeowner writings under the new rate framework.
        </li>
        <li>
          <strong>Travelers</strong> has re-entered the California homeowner market with new
          products filed under the catastrophe model provisions.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, several major carriers &mdash; including State Farm and Allstate &mdash; have
        not yet resumed writing new homeowner policies in meaningful volume. The extent to which
        the Strategy succeeds will ultimately be measured not by a handful of early movers but by
        whether it produces broad, sustained market participation across the state.
      </p>

      {/* ====== Consumer Perspective ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Availability vs. Affordability: The Consumer Dilemma
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental tension in the Sustainable Insurance Strategy is the trade-off between
        availability and affordability. For a homeowner who has been non-renewed and cannot find
        coverage at any price, any available policy &mdash; even an expensive one &mdash;
        represents an improvement. For a homeowner who currently has coverage but sees a 30% to
        50% premium increase, the &ldquo;improvement&rdquo; feels more like a crisis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is also a deeper concern about equity. The areas most affected by wildfire risk
        are not exclusively wealthy hillside communities. Many of the highest-risk areas include
        working-class and rural communities where homeowners have limited ability to absorb
        dramatic premium increases. The question of whether insurance remains affordable for these
        communities &mdash; or whether it effectively becomes an unfunded mandate &mdash; is one
        that the Sustainable Insurance Strategy does not fully answer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For homeowners who have been non-renewed and are navigating limited options, understanding
        the full range of alternatives is essential. See the guide to{' '}
        <Link href="/resources/nonrenewal-cancellation" className="text-[#2E74B5] underline">
          non-renewal and cancellation
        </Link>{' '}
        for steps to take when a carrier drops coverage.
      </p>

      {/* ====== What to Watch ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Watch Going Forward
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Sustainable Insurance Strategy is still in its early implementation phase. Several
        key developments will determine whether it achieves its goals:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>85% commitment enforcement.</strong> Whether the CDI actively monitors and
          enforces the requirement that carriers write proportional market share in distressed
          areas, or whether carriers find ways to satisfy the letter of the requirement without
          meaningfully serving those communities.
        </li>
        <li>
          <strong>Additional catastrophe model approvals.</strong> As more models are approved
          and put into use, the rate impact will become clearer. If competing models produce
          significantly different risk scores, the CDI will face pressure to establish which
          models are permissible.
        </li>
        <li>
          <strong>Legal challenges.</strong> Consumer advocacy groups and intervenors continue to
          challenge the regulatory changes. A court ruling invalidating key provisions could
          disrupt the entire framework.
        </li>
        <li>
          <strong>FAIR Plan depopulation.</strong> The ultimate metric is whether the voluntary
          market absorbs policies from the FAIR Plan. If FAIR Plan policy counts continue to grow
          despite the Strategy, it will be difficult to call the program a success.
        </li>
        <li>
          <strong>Next major wildfire.</strong> The true test of any insurance reform comes when
          the next catastrophic wildfire occurs. Whether the new framework produces adequate
          reserves, fair claim handling, and financial stability through a major event remains to
          be seen.
        </li>
      </ul>

      {/* ====== Key Takeaways ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The Sustainable Insurance Strategy is the most significant change to California
          insurance regulation since Proposition 103 in 1988.
        </li>
        <li>
          Insurers can now use forward-looking catastrophe models and include reinsurance costs
          in rate calculations, which means higher premiums but potentially greater availability.
        </li>
        <li>
          In exchange, carriers must commit to writing at least 85% of their market share in new
          policies in wildfire-distressed areas.
        </li>
        <li>
          Statewide rate increases are projected at approximately 16% for 2026, with cumulative
          increases of roughly 34% since 2023. High-risk areas are seeing significantly larger
          increases.
        </li>
        <li>
          Several carriers (Mercury, CSAA, Travelers) have returned or expanded under the new
          framework, but major carriers have not yet returned in significant volume.
        </li>
        <li>
          The trade-off between availability and affordability remains the central tension, and
          the program&rsquo;s success will be measured over years, not months.
        </li>
        <li>
          Policyholders should expect continued premium increases, shop the market aggressively,
          invest in wildfire mitigation, and review their coverage regularly.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal, financial,
          or insurance advice. The regulatory landscape described here is evolving rapidly. For
          the most current information, consult the California Department of Insurance website
          at insurance.ca.gov or speak with a licensed California insurance professional.
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
