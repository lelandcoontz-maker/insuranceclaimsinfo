import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Business Income from Dependent Properties: When Someone Else’s Loss Shuts Down Your Revenue',
  description:
    'Dependent property business income coverage protects you when physical damage at a supplier, customer, manufacturer, or anchor business causes your revenue to drop. Learn the four ISO categories, the CP 15 08 endorsement, common claim disputes, and how to document losses when the damage occurs at someone else’s property.',
  summary:
    'Dependent property business income coverage protects you when physical damage at a supplier, customer, manufacturer, or anchor business cuts your revenue. The CP 15 08 endorsement adds it; document the upstream loss and your resulting income drop.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Dependent property coverage involves complex policy language, endorsement variations,
          and fact-specific causation analysis that varies by claim. If you have a disputed claim
          involving business income losses caused by damage at a third-party property, consult
          with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your building is standing. Your equipment works. Your employees showed up. But your
        revenue has collapsed &mdash; because the factory that makes your key component burned
        down, or because the anchor tenant at your shopping center was destroyed by a windstorm,
        or because the port where your raw materials arrive was damaged by flooding. The physical
        loss happened somewhere else, at someone else&rsquo;s property, but the financial
        consequences landed squarely on your business.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the scenario that <strong>business income from dependent properties</strong>{' '}
        coverage is designed to address. Standard{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business interruption coverage
        </Link>{' '}
        pays for income lost when <em>your own</em> property sustains direct physical damage.
        Dependent property coverage extends that protection to income lost when physical damage
        occurs at the property of a business you depend on &mdash; a supplier, a customer, a
        contract manufacturer, or even an anchor tenant whose presence drives foot traffic to
        your location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This coverage is not automatic. It does not appear in the standard ISO Business Income
        Coverage Form (CP 00 30). It must be added by endorsement &mdash; most commonly the
        ISO Business Income from Dependent Properties endorsement, CP 15 08 &mdash; or written
        into a manuscript policy. If you do not have the endorsement, you do not have the
        coverage, no matter how catastrophic your supply chain disruption.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Dependent Property Coverage Is &mdash; and How It Differs from Contingent BI
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The terms &ldquo;dependent property coverage&rdquo; and &ldquo;contingent business
        interruption&rdquo; are often used interchangeably, and there is significant overlap.
        But understanding the distinction is important, particularly when navigating policy
        language and coverage disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Contingent business interruption (CBI)</strong> is the broader concept: coverage
        for income lost when physical damage at a third-party location disrupts your operations.
        CBI can be provided through various policy forms, endorsements, and manuscript language.
        For a comprehensive analysis of CBI coverage, triggers, and real-world claim scenarios,
        see our{' '}
        <Link href="/resources/contingent-business-interruption" className="text-blue-700 underline hover:text-blue-900">
          contingent business interruption article
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Business income from dependent properties</strong> is the specific ISO
        endorsement mechanism (CP 15 08) that provides this coverage in standard commercial
        property policies. The endorsement uses a structured framework that classifies
        third-party locations into four defined categories, each with its own coverage
        implications. This article focuses on that framework, the endorsement&rsquo;s specific
        language, and the practical issues that arise when you file a claim under it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Four Categories of Dependent Properties Under CP 15 08
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO CP 15 08 endorsement defines four categories of dependent properties. Each
        category describes a different type of business relationship, and the coverage trigger,
        loss calculation, and documentation burden differ for each. When you purchase this
        endorsement, you identify specific dependent properties by name and address on the
        schedule &mdash; and select which categories apply.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. Contributing Locations (Suppliers)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contributing location is a property that supplies materials, parts, components, or
        services to your business. When physical damage at a supplier&rsquo;s facility prevents
        them from delivering what you need, your resulting income loss is the coverage trigger.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most commonly triggered category because modern businesses depend on supply
        chains that extend far beyond their own walls. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A bakery that cannot operate because its flour mill was destroyed by fire
        </li>
        <li>
          An electronics assembler that loses production when a fire at a semiconductor
          fabrication plant halts chip deliveries
        </li>
        <li>
          A printing company that cannot fulfill orders because a windstorm damaged its paper
          supplier&rsquo;s warehouse
        </li>
        <li>
          A restaurant chain that loses revenue when flooding destroys its primary produce
          distributor&rsquo;s cold storage facility
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contributing location claims raise immediate questions about alternate sourcing. The
        carrier will ask whether you could have obtained the same materials from a different
        supplier. Document every effort you make to find alternates and every reason those
        alternates were not feasible &mdash; higher cost, inferior quality, insufficient
        capacity, lead times that exceed your production schedule, or contractual exclusivity
        arrangements.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. Recipient Locations (Customers)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recipient location is a property that accepts your goods or services. When physical
        damage at a customer&rsquo;s facility prevents them from purchasing or receiving your
        products, the resulting drop in your income is the coverage trigger.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This category is critically important for businesses with concentrated customer bases.
        If 70 percent of your output goes to a single buyer and that buyer&rsquo;s warehouse
        burns down, you lose 70 percent of your revenue even though your own operations are
        fully functional. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A parts manufacturer whose primary customer&rsquo;s assembly plant is destroyed by fire
        </li>
        <li>
          A cleaning service that loses contracts because the office complex it services was
          damaged by an earthquake
        </li>
        <li>
          A food processor that cannot ship product because its largest retail
          customer&rsquo;s distribution center was destroyed by a tornado
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. Manufacturing Locations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A manufacturing location produces goods that you sell but do not manufacture yourself.
        This is distinct from a contributing location because the relationship is not one of
        supplying raw materials or components &mdash; instead, the manufacturing location
        produces the finished or semi-finished goods that you distribute, market, or retail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters because a distributor or retailer may have no ability to
        manufacture substitute products. The relationship is one of dependence on a specific
        production facility. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A wine distributor whose partner winery&rsquo;s production facility is destroyed
          by wildfire
        </li>
        <li>
          A branded clothing retailer whose overseas contract manufacturer&rsquo;s factory
          is damaged by flooding
        </li>
        <li>
          A pharmaceutical distributor whose drug manufacturer&rsquo;s production facility
          is shut down by explosion damage
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Leader Locations (Anchor Tenants and Attraction Properties)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A leader location &mdash; sometimes called an <strong>attraction property</strong>
        &mdash; is a property that draws customers to your area. This category recognizes that
        some businesses depend entirely on foot traffic or customer flow generated by a nearby
        anchor business, even without any direct contractual relationship.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The classic scenario: a small specialty shop in a shopping center anchored by a major
        department store. The department store burns down, the mall loses 60 percent of its foot
        traffic, and the specialty shop&rsquo;s revenue drops by half &mdash; even though the
        shop itself is completely undamaged and has no contract with the department store.
        Additional examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A coffee shop adjacent to a sports arena that loses revenue when fire damage closes
          the arena for a season
        </li>
        <li>
          A hotel near a convention center that loses bookings when wind damage forces the
          center to shut down for six months
        </li>
        <li>
          Restaurants near a university campus that lose revenue when earthquake damage forces
          the campus to close for an academic term
        </li>
        <li>
          Small retailers in a tourist district that lose foot traffic when fire damages the
          district&rsquo;s primary attraction
        </li>
      </ul>

      <CalloutBox variant="warning" title="Leader Location Coverage Is Frequently Sublimited or Excluded">
        <p>
          Leader location coverage is the most restrictively written of the four categories.
          Many standard CP 15 08 endorsements either exclude leader locations entirely or impose
          significant sublimits. If your business depends on foot traffic generated by a nearby
          anchor tenant or attraction, you must specifically request this coverage and negotiate
          adequate limits. Do not assume it is included in a standard dependent property
          endorsement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CP 15 08 Endorsement: Structure and Key Provisions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO Business Income from Dependent Properties endorsement (CP 15 08) is the
        standard mechanism for adding dependent property coverage to a commercial property
        policy. Understanding its structure is essential because the endorsement&rsquo;s
        schedule, limits, and conditions define exactly what is and is not covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key elements of the CP 15 08 endorsement include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The schedule of dependent properties.</strong> You must identify each
          dependent property by name, address, and category (contributing, recipient,
          manufacturing, or leader). If a dependent property is not listed on the schedule,
          it is typically not covered. This means you must identify your critical
          dependencies <em>before</em> a loss occurs.
        </li>
        <li>
          <strong>Separate limits for each dependent property.</strong> The endorsement allows
          you to set separate limits for each listed property. If you set a limit of $500,000
          for your primary supplier and the actual income loss is $1.2 million, you collect
          $500,000. Limits must reflect realistic exposure, not guesswork.
        </li>
        <li>
          <strong>Covered causes of loss.</strong> The causes of loss that trigger dependent
          property coverage are the same as those that apply to your underlying business
          income coverage. If your policy covers named perils only, the physical damage at
          the dependent property must also be caused by a named peril.
        </li>
        <li>
          <strong>The period of restoration.</strong> Coverage applies during the{' '}
          <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
            period of restoration
          </Link>{' '}
          at the dependent property &mdash; not your property. This creates unique challenges
          because you have no control over the dependent property&rsquo;s rebuilding timeline.
        </li>
        <li>
          <strong>Business income and extra expense.</strong> The endorsement can cover both
          business income losses and extra expenses incurred to avoid or minimize the income
          loss (such as the cost of sourcing materials from a more expensive alternate
          supplier).
        </li>
      </ul>

      <CalloutBox variant="info" title="Blanket vs. Scheduled Dependent Property Coverage">
        <p>
          Some insurers offer blanket dependent property coverage that does not require you to
          list specific properties on a schedule. Blanket coverage is more flexible &mdash; it
          protects against losses from dependent properties you may not have identified in
          advance &mdash; but it typically comes with lower sublimits and stricter conditions.
          If your supply chain is complex or involves numerous suppliers, blanket coverage can
          fill gaps that a scheduled endorsement misses. Review both options with your broker.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Identifying Your Dependent Property Exposures
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common reason businesses lack adequate dependent property coverage is that they
        never systematically identified their dependencies. Purchasing CP 15 08 without
        conducting a thorough exposure analysis is like buying fire insurance without knowing
        what your building is worth. A structured assessment should examine:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Supply chain mapping.</strong> List every supplier, vendor, and service
          provider that your operations depend on. For each one, ask: if their facility were
          destroyed tomorrow, how long could you continue to operate? Could you find an
          alternate source? At what cost? How quickly?
        </li>
        <li>
          <strong>Customer concentration analysis.</strong> Identify how much of your revenue
          comes from your top five customers. If any single customer accounts for more than
          20 percent of revenue, damage at that customer&rsquo;s location creates significant
          exposure.
        </li>
        <li>
          <strong>Single-source dependencies.</strong> Flag any material, component, or service
          that you obtain from only one source. Single-source dependencies create the highest
          risk because there is no alternate to turn to when the source is damaged.
        </li>
        <li>
          <strong>Geographic concentration.</strong> If multiple suppliers or customers are
          located in the same geographic area, a single catastrophic event (earthquake,
          hurricane, wildfire) could disable several dependent properties simultaneously.
        </li>
        <li>
          <strong>Anchor tenant and foot traffic analysis.</strong> If your business relies on
          foot traffic from a nearby anchor tenant, entertainment venue, or institutional
          presence, quantify what percentage of your revenue is attributable to that traffic.
        </li>
        <li>
          <strong>Tier 2 and Tier 3 dependencies.</strong> Your supplier depends on its own
          suppliers. If a Tier 2 supplier is damaged, your Tier 1 supplier may be unable to
          deliver, and your standard CP 15 08 endorsement &mdash; which typically only covers
          direct (Tier 1) dependent properties &mdash; may not respond.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Direct Physical Loss Requirement at the Dependent Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Like standard{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business interruption coverage
        </Link>
        , dependent property coverage requires <strong>direct physical loss of or damage
        to</strong> the dependent property. The income loss you suffer must be caused by
        physical damage at the dependent location &mdash; not by the dependent
        business&rsquo;s financial difficulties, management decisions, labor disputes, or
        voluntary shutdowns.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This requirement became the central battleground during the COVID-19 pandemic, when
        businesses argued that government closure orders constituted &ldquo;direct physical
        loss&rdquo; at dependent properties. Most courts rejected that argument. The physical
        damage requirement generally means tangible alteration or destruction of the property
        &mdash; fire, flood, wind, explosion, collapse, or similar physical events.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For dependent property claims, the physical damage must occur at the listed dependent
        property, and it must be caused by a peril covered under your policy. If your
        supplier&rsquo;s facility was damaged by earthquake but your policy excludes earthquake,
        there is no dependent property coverage &mdash; even if the supplier had its own
        earthquake insurance and was fully covered for its own losses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Disputes in Dependent Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dependent property claims are inherently more complex than standard business
        interruption claims because the damage occurs at a location the policyholder does not
        own or control. This creates multiple points of dispute that carriers exploit
        aggressively.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Proving the Income Loss Connection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder must demonstrate a direct causal connection between the physical
        damage at the dependent property and the policyholder&rsquo;s income loss. Carriers
        challenge this connection by arguing that the income loss was caused by other factors
        &mdash; market conditions, seasonal fluctuations, the policyholder&rsquo;s own
        operational issues, or the availability of alternate sources.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proving causation requires detailed financial analysis: comparing pre-loss and post-loss
        revenue, isolating the impact of the dependent property&rsquo;s shutdown from other
        variables, and demonstrating that the revenue would not have declined &ldquo;but
        for&rdquo; the dependent property loss. Forensic accountants experienced in business
        interruption claims are often essential.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Period of Restoration at Someone Else&rsquo;s Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
          period of restoration
        </Link>{' '}
        under a dependent property endorsement is measured at the dependent property &mdash;
        not at the policyholder&rsquo;s premises. This creates a fundamental problem: the
        policyholder has no control over how quickly the dependent property owner rebuilds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your supplier chooses to rebuild slowly, relocate, or exit the business entirely,
        the period of restoration becomes a contested issue. Carriers may argue that the period
        should be measured by how long it <em>should</em> take to rebuild with reasonable speed,
        not how long it actually takes. Meanwhile, the policyholder continues to lose income.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have generally held that the period of restoration is measured by the
        time reasonably required to rebuild or repair the dependent property with reasonable
        speed and similar quality. Unreasonable delays by the dependent property owner may
        shorten the covered period. Conversely, if the dependent property owner abandons the
        property entirely, the period of restoration may be measured by how long it would take
        the policyholder to establish a replacement relationship with an alternate supplier or
        customer.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Alternate Source Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely argue that the policyholder could have mitigated losses by obtaining
        goods or services from an alternate source. This argument has teeth even when the
        alternate would have been more expensive, required significant lead time, or delivered
        inferior quality. The carrier&rsquo;s position is that any income loss attributable to
        the policyholder&rsquo;s failure to mitigate is not covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&rsquo;s defense is to document every effort to find alternate sources
        and every reason those alternates were not feasible. Keep records of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Every alternate supplier or customer you contacted</li>
        <li>Price quotes from alternate sources (showing increased cost)</li>
        <li>Lead time estimates that exceeded your operational needs</li>
        <li>Quality or specification differences that made substitution impractical</li>
        <li>Contractual exclusivity arrangements that prevented alternate sourcing</li>
        <li>Capacity constraints at alternate sources</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Unlisted Dependent Properties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you purchased scheduled coverage (listing specific dependent properties) and the
        property that was actually damaged is not on the schedule, the carrier will deny the
        claim. This is one of the most devastating gaps in dependent property coverage &mdash;
        and one of the most preventable. Supply chains change. New suppliers come on board.
        Critical customers shift. If you do not update your schedule annually, you risk having
        no coverage for your most important current dependencies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supply Chain Vulnerability and the Modern Economy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The importance of dependent property coverage has grown exponentially as supply chains
        have become longer, more specialized, and more interconnected. Just-in-time manufacturing,
        single-source suppliers, and global sourcing strategies have all increased businesses&rsquo;
        vulnerability to disruption at third-party locations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 2011 Tohoku earthquake in Japan demonstrated this vulnerability on a global scale.
        A single earthquake damaged semiconductor fabrication plants, automotive parts suppliers,
        and specialty chemical manufacturers, cascading shutdowns through automotive, electronics,
        and manufacturing supply chains worldwide. Businesses that had never heard of the
        specific Tier 2 or Tier 3 suppliers in Japan found themselves unable to operate
        because a critical component simply could not be sourced from anywhere else.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        More recently, the 2021 Texas winter storm disrupted petrochemical production for months,
        affecting plastics, chemicals, and pharmaceutical supply chains across North America.
        Wildfires, hurricanes, and flooding events increasingly disable regional supply networks,
        and the businesses that suffer the most are often the ones that never purchased
        dependent property coverage because they did not realize how concentrated their
        supply chain dependencies were.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Related coverages that address adjacent risks include{' '}
        <Link href="/resources/civil-authority-utility-services" className="text-blue-700 underline hover:text-blue-900">
          civil authority and utility services coverage
        </Link>
        , which responds when government orders or utility failures &mdash; rather than damage
        at a specific dependent property &mdash; cause your income loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting a Dependent Property Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The documentation burden in a dependent property claim is significantly heavier than in
        a standard business interruption claim because you must prove facts about a property you
        do not own and a loss you did not directly experience. Start assembling documentation
        immediately when you learn of the damage at the dependent property.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Proof of physical damage at the dependent property.</strong> Obtain written
          confirmation from the dependent property owner that physical damage occurred, what
          caused it, and what the expected repair or rebuilding timeline is. If available,
          obtain photographs, news reports, fire department reports, or the dependent
          property owner&rsquo;s own insurance claim documentation.
        </li>
        <li>
          <strong>Documentation of the business relationship.</strong> Assemble contracts,
          purchase orders, invoices, delivery records, and correspondence that establish the
          business relationship and its importance to your operations. Show the volume and
          value of goods or services exchanged in the 12 to 24 months before the loss.
        </li>
        <li>
          <strong>Pre-loss and post-loss financial records.</strong> Provide detailed revenue,
          production, and cost records for a period before and after the dependent property
          loss. Monthly or weekly data is better than annual. The goal is to demonstrate a
          clear, measurable decline in income that correlates with the dependent property
          shutdown.
        </li>
        <li>
          <strong>Alternate source efforts.</strong> Document every attempt to find alternate
          suppliers, customers, or manufacturing sources &mdash; and every reason those
          alternates were not viable. This includes quotes, correspondence, capacity analyses,
          and quality assessments.
        </li>
        <li>
          <strong>Extra expenses incurred.</strong> Track all additional costs you incurred to
          mitigate the income loss &mdash; expedited shipping from alternate sources, temporary
          equipment, overtime labor, or other extraordinary measures. These may be recoverable
          under the extra expense provisions of your endorsement.
        </li>
        <li>
          <strong>Period of restoration evidence.</strong> Track the dependent property
          owner&rsquo;s rebuilding or repair progress. Document milestones, delays, and the
          date the dependent property resumes operations. If the dependent property owner is
          uncommunicative, document your attempts to obtain information.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance: Requesting and Structuring Dependent Property Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dependent property coverage is not a luxury. For any business that relies on external
        suppliers, customers, manufacturers, or nearby anchor tenants, it is an essential
        component of a complete commercial property insurance program. The following steps will
        help you obtain and structure this coverage effectively.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Conduct the exposure analysis first.</strong> Before asking your broker for
          coverage, map your supply chain, identify customer concentrations, flag single-source
          dependencies, and quantify how much income you would lose if each dependent property
          were shut down for 90, 180, or 365 days.
        </li>
        <li>
          <strong>Request CP 15 08 by name.</strong> Ask your broker specifically for the ISO
          Business Income from Dependent Properties endorsement (CP 15 08) or its equivalent
          under your carrier&rsquo;s proprietary forms. Do not assume that &ldquo;business
          interruption coverage&rdquo; includes dependent property coverage. It does not.
        </li>
        <li>
          <strong>Set realistic limits for each dependent property.</strong> The limit should
          reflect your actual income exposure &mdash; not a round number picked for convenience.
          Calculate the income you would lose if that dependent property were shut down for the
          expected rebuilding period, plus extra expenses you would incur to mitigate.
        </li>
        <li>
          <strong>Consider blanket coverage as a supplement.</strong> Even with a well-maintained
          schedule, you may miss dependencies. Blanket dependent property coverage provides a
          safety net for unlisted properties, typically at a lower sublimit.
        </li>
        <li>
          <strong>Review and update the schedule annually.</strong> Supply chains change.
          Customers shift. New suppliers come on board. If your CP 15 08 schedule does not
          reflect your current dependencies, you have gaps. Build an annual review into your
          renewal process.
        </li>
        <li>
          <strong>Request leader location coverage explicitly.</strong> If your business depends
          on foot traffic from a nearby anchor, do not assume the standard endorsement includes
          leader location coverage. Ask for it by name and negotiate adequate limits.
        </li>
        <li>
          <strong>Coordinate with other coverages.</strong> Dependent property coverage works
          alongside{' '}
          <Link href="/resources/contingent-business-interruption" className="text-blue-700 underline hover:text-blue-900">
            contingent business interruption
          </Link>
          ,{' '}
          <Link href="/resources/civil-authority-utility-services" className="text-blue-700 underline hover:text-blue-900">
            civil authority and utility services coverage
          </Link>
          , and other{' '}
          <Link href="/resources/commercial-endorsements" className="text-blue-700 underline hover:text-blue-900">
            commercial endorsements
          </Link>
          . Review all of these coverages together to ensure there are no overlaps creating
          confusion or gaps leaving you exposed.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Wait for a Loss to Discover the Gap">
        <p>
          The businesses that file dependent property claims and discover they have no coverage
          &mdash; or inadequate coverage &mdash; are almost always businesses that never
          conducted a supply chain exposure analysis. The CP 15 08 endorsement is relatively
          inexpensive compared to the income it protects. If your business depends on anyone
          else&rsquo;s property to generate revenue, talk to your broker about this coverage
          today. Not after your supplier burns down. Today.
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
