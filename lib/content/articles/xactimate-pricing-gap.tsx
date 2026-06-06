import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Why Your Insurance Estimate Is Lower Than Your Contractor's Quote",
  description:
    "Xactimate estimates are often 30% or more below actual repair costs. The software itself disclaims pricing accuracy. Here is why the gap exists and what you can do about it.",
  summary:
    'Xactimate estimates often run 30% or more below actual repair costs, and the software itself disclaims pricing accuracy. Knowing why this gap exists lets you document real market costs and demand an estimate that reflects them.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Every claim is different. For guidance on your specific situation, consult a
          licensed Public Adjuster or an attorney experienced in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You get your insurance estimate. Then you get a quote from a licensed contractor. The
        contractor&apos;s number is 30%, 40%, sometimes 50% higher than what the insurance
        company says the repairs should cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier tells you the contractor is inflating. The contractor tells you the carrier
        is lowballing. You are stuck in the middle, wondering who is telling the truth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most cases, the contractor is closer to reality. And the reason is not complicated:
        the software that insurance companies use to generate their estimates &mdash; Xactimate
        &mdash; has well-documented pricing limitations that the insurance industry prefers not
        to discuss with policyholders. In fact, Xactimate&apos;s own licensing agreement
        explicitly disclaims the accuracy of its pricing data.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common sources of frustration in the claims process. You are
        not imagining the discrepancy. It is real, it is well-documented, and it affects
        claims of every size in every state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains where the gap comes from, why it exists, and what you can do
        about it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Documented Pricing Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between Xactimate pricing and actual contractor costs is not a matter of opinion.
        It has been documented in academic studies, government investigations, and post-disaster
        analyses going back over a decade. This is not one or two anecdotes &mdash; it is a
        consistent, reproducible pattern observed across different disaster types, different
        regions, and different time periods.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After Hurricane Ian hit southwest Florida in 2022, labor rates in the Fort Myers area
        reached $208 per hour for experienced tradespeople. Xactimate&apos;s price database
        &mdash; which updates monthly &mdash; could not keep pace with market conditions that
        were changing by the day. Contractors who could actually show up and do the work were
        charging what the market demanded. The software was still pricing labor at pre-storm
        rates weeks after the market had shifted dramatically.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After Superstorm Sandy in 2012, investigations documented systematic underpayment of
        30% or more on affected claims. The National Flood Insurance Program faced congressional
        scrutiny over its reliance on estimating tools that could not reflect actual rebuilding
        costs in a devastated market. Homeowners received estimates that bore no relationship to
        what any contractor would accept to do the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the 2017 hurricane season &mdash; Harvey, Irma, and Maria in rapid succession
        &mdash; the same pattern appeared across Texas, Florida, and Puerto Rico. Material
        costs spiked as supply chains strained under the weight of simultaneous rebuilding
        efforts in multiple states. Roofing materials in Houston were priced far above what
        the software reflected because every roofer within 500 miles was already booked.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pattern repeats after every major disaster. It also exists in normal times &mdash;
        the gap is just smaller and less dramatic. In a stable market, Xactimate pricing
        typically runs 15&ndash;25% below what licensed contractors actually charge. After a
        catastrophe, that gap explodes to 30&ndash;50% or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even outside disaster zones, the gap persists. In high-cost-of-living areas like
        coastal California, the San Francisco Bay Area, and metro Los Angeles, Xactimate
        pricing frequently trails actual contractor rates by significant margins. The cost
        of doing business in these markets &mdash; insurance, licensing, workers&apos;
        compensation, fuel, and overhead &mdash; is simply higher than what the database
        reflects.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not because contractors are gouging. It is because the software is not designed
        to reflect what repairs actually cost today, in your market, under your circumstances.
        It is designed to produce an estimate quickly. Speed and accuracy are different goals.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Xactimate&apos;s Own Disclaimer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is something most policyholders never learn: Xactimate&apos;s own End User License
        Agreement (EULA) explicitly states that the software does not warrant the accuracy of its
        pricing data.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 12.3 of the EULA contains language that should make every policyholder sit up and
        pay attention. The agreement characterizes Xactimate&apos;s price data as &ldquo;a baseline
        or place to begin creation of an estimate&rdquo; &mdash; not a definitive final number, not
        a guarantee of what repairs should cost, and not an authoritative statement of market
        pricing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The EULA goes further. It explicitly permits deviations from its pricing &ldquo;where
        contractor requirements, market conditions, demand or any other factor warrants&rdquo;
        alternative pricing. In plain English: even the company that makes the software says you
        should adjust the prices when real-world conditions differ from what is in the database.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about what this means. When your insurance company hands you an Xactimate estimate
        and tells you that is what the repairs should cost, they are treating a self-described
        &ldquo;starting point&rdquo; as a final answer. The software company itself disagrees
        with that approach.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies know this. They use Xactimate every day. They have read the EULA.
        And yet they present Xactimate pricing to policyholders as if it were an objective,
        authoritative determination of repair costs. It is not. The software company says so
        in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Next time an adjuster tells you their Xactimate estimate represents the &ldquo;fair
        and reasonable&rdquo; cost of your repairs, remember: the company that provided those
        numbers explicitly said they are a starting point, not a conclusion. If the adjuster
        is treating the starting point as the finish line, they are misusing the tool &mdash;
        by the tool&apos;s own definition.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Prices Are Low
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pricing gap does not exist by accident. Multiple structural factors push Xactimate
        pricing below actual market rates. Understanding these factors helps you explain to your
        carrier exactly why their estimate does not reflect reality &mdash; and why they owe
        more.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Monthly Update Cycle
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate updates its pricing database on a monthly cycle. In a perfectly stable market,
        monthly updates might be adequate for most materials and labor categories. But material
        costs and labor markets can shift dramatically in a matter of days &mdash; especially
        after a disaster, during supply chain disruptions, or during seasonal construction peaks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When lumber prices doubled in 2021, Xactimate pricing lagged behind for months. When
        drywall became scarce after a series of hurricanes, the database could not keep up.
        When the COVID-19 pandemic disrupted global supply chains, material costs spiked across
        nearly every category while the database played catch-up month after month.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The monthly cycle means that in volatile conditions, the software is always looking
        in the rearview mirror. You are being offered last month&apos;s prices for today&apos;s
        repairs. In a rising market, that guarantees you are underpaid.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Backward-Looking Survey Methodology
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate derives its pricing from historical market surveys. The prices in the database
        reflect what contractors charged in the recent past &mdash; not what they are charging
        right now. In a rising market, this methodology guarantees that the database will
        always trail actual costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are being paid based on what things cost last month or last quarter, not what they
        cost today when you actually need to hire someone. In construction, prices rarely go
        down. They go up with inflation, regulation, insurance costs, fuel costs, and labor
        market tightness. A backward-looking methodology in a market that trends upward means
        the database is structurally behind reality at all times.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The surveys also depend on who responds. If the sample skews toward larger operations
        with lower per-unit costs, the resulting averages will be lower than what a typical
        residential repair contractor charges. The methodology is opaque &mdash; Verisk does
        not publish the details of how surveys are conducted, who responds, or how outliers
        are handled.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Structural Incentive Problems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the elephant in the room. Xactimate is developed by Verisk Analytics. Verisk
        was formed around the Insurance Services Office (ISO) &mdash; the organization that has
        historically provided data and analytics services to the insurance industry. Insurance
        carriers are Xactimate&apos;s largest customer base.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tool that determines how much your insurance company pays you for repairs is owned
        and developed by a company whose principal customers &mdash; and historically, whose
        principal shareholders &mdash; are insurance carriers. Those carriers benefit financially
        every time the software produces a lower number. That is the structural reality.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean Xactimate is intentionally rigged. It does mean that the market
        incentives do not favor higher pricing. When in doubt, the system errs on the side of
        the customer who pays for it &mdash; and that customer is not you.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Missing Specifications and Line Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Separate from the pricing issue, carrier adjusters frequently write estimates that omit
        entire categories of work. Preparation work, protection of adjacent surfaces, haul-off
        and disposal, temporary facilities, equipment rental, and multiple coats of primer or
        paint are routinely left out.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor quoting the same job will include everything needed to actually complete
        the work. They know from experience that you cannot paint a wall without first priming
        it, that you cannot install baseboards without removing and disposing of the old ones,
        and that you cannot demolish a bathroom without protecting the hallway floors. These
        are not extras &mdash; they are the job.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier estimate includes only what the adjuster chose to put in. The gap between
        these two numbers is often less about price per unit and more about what work was
        acknowledged at all. When policyholders ask why the contractor is 40% higher, the
        answer is usually that the contractor included 40% more work &mdash; work that is
        genuinely necessary to complete the repairs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        New Construction vs. Repair Settings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate allows the estimator to select between &ldquo;new construction&rdquo; and
        &ldquo;repair&rdquo; labor productivity settings. New construction labor is cheaper
        because workers are building fresh &mdash; no existing finishes to protect, no
        occupied furniture to work around, no matching of existing textures or materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Repair work in an occupied home is inherently slower and more expensive. Workers must
        protect existing floors, move furniture, set up dust barriers, work around occupants,
        match existing textures and finishes, and clean up each day so the family can use their
        home. None of these constraints exist in new construction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers use the cheaper new construction settings for repair estimates, producing
        numbers that no contractor can hit while doing the work correctly. This is a common
        source of the gap that most policyholders never notice because it is buried in the
        estimate settings, not visible on the face of the PDF. You need the ESX file to
        identify this manipulation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Demand Surge &mdash; Why Post-Disaster Estimates Are Always Wrong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major disaster &mdash; a wildfire, hurricane, tornado, or flood &mdash; labor
        and materials become scarce. Thousands of properties need repair simultaneously. The
        supply of skilled tradespeople and building materials cannot expand overnight to meet
        that demand. This is basic economics: when demand spikes and supply is fixed, prices
        rise.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is demand surge pricing. Contractors can charge premium rates because demand
        vastly exceeds supply. Lumber, drywall, roofing materials, and appliances all spike in
        price. Workers command higher wages because they have unlimited work available. A roofer
        who could charge $350 per square in normal conditions can charge $500 or more when every
        roof in the neighborhood needs replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s monthly database simply cannot keep pace with these real-time price
        spikes. By the time the database reflects post-disaster pricing, conditions on the
        ground may have shifted again. Contractor estimates in post-disaster zones may only
        be valid for two to four weeks because the market is moving that fast.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The demand surge effect is not limited to labor. Building materials experience the
        same phenomenon. After a wildfire destroys hundreds of homes, the regional supply of
        framing lumber, concrete, windows, and roofing is depleted. Materials must be trucked
        in from farther away, adding transportation costs. Manufacturers cannot ramp up
        production instantly. The result is higher prices for every component of the rebuild.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Temporary housing also becomes scarce, extending the period of displacement and
        increasing additional living expense costs. Skilled tradespeople are pulled from other
        regions, requiring per diem, travel, and housing allowances that drive labor costs
        even higher. The entire ecosystem of rebuilding inflates simultaneously.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what matters: your insurance policy covers what it actually costs to repair
        your property. It does not say the carrier only owes what Xactimate says it should
        cost. If the real-world cost of repair is higher than the software&apos;s database
        reflects, the carrier owes the real-world cost. That is what &ldquo;indemnification&rdquo;
        means &mdash; to make you whole.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the 2018 Camp Fire in Paradise, California, rebuilding costs exceeded initial
        estimates by enormous margins. After the 2025 Palisades and Eaton fires in Los Angeles
        County, the same pattern emerged immediately. Every major disaster produces the same
        result: Xactimate pricing falls far short of what it actually costs to rebuild in a
        post-disaster market.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your carrier knows this. They have actuaries who study demand surge. They model it.
        They price their premiums to account for it. They set aside catastrophe reserves
        specifically because they know post-disaster costs are higher. But when it comes time
        to pay your claim, they hand you an Xactimate estimate based on pre-disaster pricing
        and act surprised when your contractor charges more.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Certification Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a complex piece of software with thousands of line items, multiple
        pricing databases, and specific rules for how work should be documented. Using it
        correctly requires significant training. Most people using it have not had that
        training.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate offers a tiered certification program: Level 1, Level 2, Level 3, and
        Certified Trainer. The numbers tell the story:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Only 1&ndash;2% of Xactimate users hold Level 1 or Level 2 certification
        </li>
        <li>
          Approximately 10% hold Level 3 certification (the most basic tier)
        </li>
        <li>
          Fewer than 50 Xactimate Certified Trainers exist in all of North America
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        That means most people writing Xactimate estimates &mdash; including
        the adjusters writing estimates for insurance carriers &mdash; have never been formally
        certified on the software. They learned on the job, from coworkers who also learned on
        the job, in an environment where speed is rewarded over accuracy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An untrained user can easily miss critical line items, select wrong material
        specifications, use incorrect productivity settings, or apply the wrong trade
        category to a task. Each of these errors reduces the estimate below what the work
        actually costs. And the errors compound &mdash; miss five line items at $500 each and
        your estimate is $2,500 short before you even look at pricing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the difference between someone who has spent years doing repair work and
        someone who has spent a few weeks learning software. The experienced contractor knows
        that replacing a section of drywall requires removing the damaged material, checking
        for mold or moisture behind it, installing new board, taping, mudding (typically three
        coats), sanding between coats, priming, and painting &mdash; often with texture
        matching. An untrained estimator might put in one line item for &ldquo;drywall
        repair&rdquo; and miss half the actual steps involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The person who wrote your carrier&apos;s estimate may have had a few days of training
        before being handed the software and told to start writing estimates. Meanwhile, the
        contractor quoting your job has years of hands-on experience knowing what the work
        actually requires. The gap between these two estimates is partly a gap in knowledge
        and partly a gap in incentive &mdash; the adjuster is not penalized for writing a
        low estimate, but the contractor cannot afford to underquote the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When someone with minimal training writes an estimate that is 30% below a quote from
        an experienced licensed contractor, the problem is probably not the contractor&apos;s
        pricing. The contractor has to build the job profitably or go out of business. The
        adjuster has no such accountability for the accuracy of what they write.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask your adjuster if they are Xactimate certified. Ask them what level. Ask them how
        many hours of formal training they have received on the software. In most cases, the
        answer will tell you everything you need to know about why their number is lower than
        your contractor&apos;s.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Can Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pricing gap is real, but it is not something you have to accept. Here is how to
        fight back.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Get Written Contractor Quotes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Obtain two to three written quotes from licensed contractors for the same scope of work
        described in the insurance estimate. These quotes establish what the work actually costs
        in your market, from real companies that will actually do the job. This is the single
        most powerful piece of evidence you can produce.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Make sure the contractor quotes are detailed &mdash; not just a lump sum. You want
        line-item breakdowns that show labor hours, material quantities, and unit pricing.
        The more detailed the quote, the easier it is to demonstrate exactly where the
        insurance estimate falls short. A one-line &ldquo;kitchen remodel: $45,000&rdquo;
        gives the carrier room to dismiss it. A 50-line itemized breakdown forces them to
        engage with specifics.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Request Your ESX File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code Section 2071 and 10 CCR 2695.7(d), you have the right
        to request the underlying ESX file &mdash; the actual Xactimate project file, not just
        the PDF summary. The carrier has 15 days to provide it once you make the request in
        writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file allows a qualified estimator to see exactly what settings, pricing, and
        line items the adjuster used, and to identify exactly where the estimate falls short.
        It reveals whether the adjuster used repair or new construction settings, what price
        list they selected, what waste factors they applied, and what line items they chose not
        to include. Without the ESX file, you are arguing blind.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Compare Line by Line
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not just compare the bottom-line totals. Go line by line and identify what is
        included in the contractor&apos;s quote that is missing from the insurance estimate.
        Often the gap is not about price per unit &mdash; it is about entire categories of work
        that the adjuster left out.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common items that are present in contractor quotes but missing from carrier estimates
        include: floor protection during construction, furniture moving and storage, dust
        barriers, temporary containment, multiple coats of primer, texture matching on
        ceilings and walls, haul-off and dump fees, permit costs, and final cleaning.
        Document every discrepancy in a simple spreadsheet or list.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        File a Supplement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Submit a formal{' '}
        <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
          supplement
        </Link>{' '}
        to the carrier showing the actual cost of repairs, supported by your contractor quotes
        and a detailed comparison to the original estimate. Include specific line items that are
        missing, incorrect material specifications, and any pricing that does not reflect current
        market conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A well-documented supplement is harder for a carrier to ignore than a phone call
        complaining about the number being too low. Put it in writing. Attach the contractor
        quotes. Identify each missing or underpriced item specifically. Make it clear that you
        are not guessing &mdash; you have documentation showing what the work actually costs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Invoke Appraisal or File a CDI Complaint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier refuses to budge after receiving legitimate contractor documentation,
        you have options. Most homeowner policies contain an{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal clause
        </Link>{' '}
        that allows either party to demand binding appraisal of the amount of loss. Appraisal
        takes the dispute out of the carrier&apos;s hands and puts it before an independent
        umpire.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can also file a complaint with the California Department of Insurance if the
        carrier is refusing to conduct a reasonable investigation of your claim. When a carrier
        ignores documented evidence of actual repair costs and relies solely on its own
        software output, that is a failure to investigate &mdash; and CDI takes those
        complaints seriously.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hire a Public Adjuster or Certified Estimator
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or a certified Xactimate estimator can write a proper competing estimate that speaks
        the same language as the carrier&apos;s estimate. When you submit an Xactimate-format
        estimate that is properly documented and correctly priced, the carrier can no longer
        dismiss your claim as &ldquo;just a contractor&apos;s quote.&rdquo; They have to engage
        with it on the merits, line item by line item.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster works for you, not the insurance company. They understand the
        software, they know which line items are commonly omitted, and they can document the
        actual scope of damage in a format that the carrier cannot ignore. On larger claims,
        the increase in settlement typically far exceeds the PA&apos;s fee.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key advantage of a competing Xactimate estimate is that it removes the
        carrier&apos;s favorite deflection: &ldquo;that&apos;s just what the contractor
        wants to charge.&rdquo; When a certified estimator produces a detailed Xactimate
        estimate using proper methodology, correct settings, and appropriate line items, the
        carrier must respond to it substantively. They can no longer wave it away as an
        uninformed contractor markup.
      </p>

      <CalloutBox variant="warning" title="Refusing Contractor Quotes Violates Fair Claims Regulations">
        <p>
          If your carrier says Xactimate is &ldquo;the industry standard&rdquo; and refuses to
          consider actual contractor quotes, they are violating the duty to conduct a fair and
          reasonable investigation under 10 CCR 2695.7(d). The regulations require carriers to
          consider all relevant information &mdash; not just their own software output. A carrier
          that refuses to acknowledge real-world pricing evidence is not investigating your claim
          fairly.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a tool. It is not a verdict, not an authority, and not the final word on
        what your repairs should cost. The company that makes the software says so in its own
        licensing agreement. The insurance industry treats it as gospel because it consistently
        produces lower numbers &mdash; not because it is accurate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy does not say the carrier owes you whatever Xactimate says it costs
        to repair your property. It says the carrier owes you what it actually costs. Those are
        two different numbers, and the gap between them is well-documented, structurally
        predictable, and consistently in the carrier&apos;s favor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a licensed contractor &mdash; someone who actually does the work, buys the
        materials, pays the labor, and stands behind the finished product &mdash; tells you
        what the job costs, that number carries weight. It is not &ldquo;inflated.&rdquo; It is
        what things cost. The insurance company&apos;s software-generated estimate is the
        artificial number, not the contractor&apos;s real-world quote.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier will tell you their estimate is &ldquo;fair&rdquo; and &ldquo;reasonable&rdquo;
        and based on &ldquo;industry standard software.&rdquo; What they will not tell you is
        that the software company disclaims its own pricing accuracy, that the person who wrote
        the estimate may have had minimal training, and that the tool&apos;s prices are
        structurally lower than what real contractors charge in the real world.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not accept the first number. Get your own documentation. Fight for what the repairs
        actually cost. The gap is real, it is significant, and you do not have to absorb it.
        Your policy entitles you to the cost of repair &mdash; the actual cost, from actual
        contractors, in the actual market where you live. Not a software company&apos;s
        approximation of what it might theoretically cost in a frictionless world.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
            Xactimate Estimates: What You Need to Know
          </Link>
        </li>
        <li>
          <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
            Overhead &amp; Profit: When Your Claim Should Include O&amp;P
          </Link>
        </li>
        <li>
          <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
            How to File a Supplement on Your Insurance Claim
          </Link>
        </li>
        <li>
          <Link href="/resources/demand-surge-pricing" className="text-blue-700 underline hover:text-blue-900">
            Demand Surge: Why Post-Disaster Repairs Cost More
          </Link>
        </li>
        <li>
          <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
            Your Right to Claim Documents Under California Law
          </Link>
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Should You Hire a Public Adjuster?
          </Link>
        </li>
      </ul>
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
