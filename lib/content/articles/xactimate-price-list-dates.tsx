import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Xactimate Price List Dates: Why the Date on Your Estimate Matters More Than You Think",
  description:
    "How insurance companies use outdated Xactimate price lists to systematically underpay claims. Learn where to find the price list date, why it matters, and how to challenge an estimate built on stale pricing data.",
  summary:
    'Xactimate price lists update regularly, and carriers sometimes use an outdated list to underpay at stale prices. Check the price-list date on your estimate, and challenge any estimate built on pricing that does not reflect current costs.',
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
        <em>A detailed guide for policyholders, public adjusters, and attorneys on how the price list date in an Xactimate estimate controls every dollar in the repair cost &mdash; and what happens when the carrier locks that date to a month that no longer reflects what repairs actually cost.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every Xactimate estimate contains thousands of individual prices &mdash; the cost of a sheet of drywall, the labor rate for a roofer, the price of a gallon of primer, the hourly charge for a plumber. None of those prices are typed in manually. They are all pulled from a single source: the Xactimate price list. And every price list is tied to a specific month and year.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The price list date is a global setting in every Xactimate estimate. It is selected before a single line item is entered. It determines which month&apos;s pricing data will be used for every material cost, every labor rate, and every equipment charge in the entire estimate. If the price list date is set to January, the estimate uses January prices. If it is set to June, it uses June prices. The difference between those two months &mdash; in a rising cost environment &mdash; can be thousands of dollars on a single claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a hypothetical problem. In post-disaster markets, during periods of inflation, and in any environment where construction costs are climbing, the price list date becomes one of the most consequential settings in the entire estimate. And carriers routinely set it to a date that does not reflect what repairs will actually cost when the work is performed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Verisk Updates Xactimate Pricing
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate</Link>&apos;s pricing database is maintained by Verisk Analytics, the company that owns and operates the software. Verisk collects pricing data from more than 50,000 providers of materials, equipment, and labor across the United States. It gathers over 345,000 survey data points each year, analyzes more than 5 million completed estimates annually, and examines over 7,300 individual price survey points each month.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Based on this data, Verisk publishes updated price lists on a monthly cycle. Each month&apos;s price list reflects the most recent available pricing data for a given geographic region. The prices are organized by state and sub-region &mdash; for example, the price list for the Los Angeles area of California is different from the price list for the Sacramento area, and both are different from a price list for the Houston area of Texas.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each price list is identified by a naming convention that includes the state abbreviation, the regional area code, the version type, and the month and year of publication. For instance, a price list might be labeled with a code indicating it is the California, Los Angeles region, standard version, for March 2026. The version number is also significant: the standard &quot;8X&quot; version is the most commonly used general pricing tier. If you see a different version number, it may indicate a variable or custom price list, which can further alter the pricing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The critical point is this: prices change every month. Lumber prices rise. Drywall costs increase. Labor rates climb. Roofing material prices fluctuate with supply chain conditions. Each monthly price list captures a snapshot of where those costs stood at the time Verisk collected and analyzed the data. And because data collection and analysis take time, even the most current price list may lag behind real-world conditions by several weeks.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Price List Date Controls
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The price list date is not just one setting among many. It is the master pricing control for the entire estimate. When an estimator opens a new project in Xactimate and selects a price list, that selection determines:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Every material cost:</strong> The price of drywall, paint, roofing shingles, flooring, trim, insulation, and every other material in the estimate is pulled from the selected month&apos;s data.</li>
        <li><strong>Every labor rate:</strong> The cost of labor for demolition, installation, finishing, and specialty trades is set by the price list date.</li>
        <li><strong>Every equipment charge:</strong> Rental costs for dumpsters, scaffolding, lifts, and other equipment reflect the pricing month&apos;s data.</li>
        <li><strong>Overhead and profit calculations:</strong> Because overhead and profit are typically calculated as a percentage of the combined material, labor, and equipment totals, an outdated price list reduces the base upon which those percentages are applied &mdash; compounding the underpayment.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        In other words, an outdated price list does not affect one or two line items. It affects every single line item in the estimate. If there are 200 line items and each one is priced 3% below current costs, the cumulative effect is a 3% reduction across the entire estimate. On a $150,000 repair, that is $4,500. On a $500,000 total loss, it is $15,000. And 3% is a conservative figure &mdash; in rapidly inflating markets, the gap can be significantly larger.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where to Find the Price List Date
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        On the Printed Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The price list information typically appears at the top of the estimate printout or PDF, near the header section that contains the insured&apos;s name, the property address, the claim number, the date of the estimate, and the type of estimate. Look for a line labeled &quot;Price List&quot; or &quot;Price List Area.&quot; This will display the price list code, which includes the geographic region and the month and year. For example, you might see something like &quot;CALA8X_MAR26&quot; &mdash; indicating the California, Los Angeles region, standard version, March 2026 pricing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the estimate does not show the price list information in the header, check the parameters page or the summary page. Some estimate formats place this information in different locations depending on how the adjuster configured the print layout.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Within the Xactimate Software
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have access to the Xactimate software (or if a Public Adjuster or appraiser is reviewing the estimate on your behalf), the price list date can be found by opening the estimate, navigating to the Claim Info tab, and clicking on the Parameters section. Under the Pricing category, the price list information is displayed, including the specific price list area, the version, and the month and year. This is where the estimator selects &mdash; or changes &mdash; the price list before building the estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        In the ESX File
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file is Xactimate&apos;s native project file format. It is a compressed archive that contains all of the estimate data, including the sketch, the line items, the photographs, and &mdash; critically &mdash; the pricing parameters. The price list date is embedded in the ESX file&apos;s metadata as part of the project information. When the ESX file is imported into Xactimate, the price list setting comes with it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the many reasons why obtaining the ESX file from your carrier is essential. A printed estimate or PDF can be reviewed for obvious issues, but the ESX file allows a knowledgeable professional to examine every underlying setting &mdash; including the price list date, the{' '}
        <Link href="/resources/xactimate-labor-efficiency-settings" className="text-[#2E74B5] underline">labor efficiency setting</Link>,
        tax parameters, and any custom overrides that may have been applied. If you have not already requested the ESX file from your carrier, see{' '}
        <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">Your Right to the ESX File</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Correct Price List Date: Time of Repair, Not Date of Loss
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the central issue, and it is where many carriers take a position that systematically favors underpayment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance policies generally obligate the carrier to pay the{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">replacement cost</Link>{' '}
        to repair or replace the damaged property. That cost is not frozen in time. It is the cost at the time the repairs are actually performed. If a windstorm damages your roof in January but the repairs are not completed until April &mdash; because the carrier took three months to inspect, evaluate, and issue payment &mdash; the relevant cost is what roofing materials and labor cost in April, not what they cost in January.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Yet carriers frequently write estimates using the price list from the month of the loss, or the month the estimate was prepared, rather than using pricing that reflects when repairs will actually take place. In a stable market, the difference might be negligible. But in a rising market &mdash; and especially after a catastrophe, when demand surge drives prices sharply upward &mdash; the difference can be substantial.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a real-world example. A major wildfire destroys hundreds of homes in October. The carrier writes its initial estimate in November using October pricing. But repairs cannot begin until the following spring because of debris removal, permitting delays, and contractor availability. By the time construction starts in April, lumber prices have risen 8%, roofing labor rates have increased 12%, and drywall costs are up 6% due to demand surge in the affected region. The carrier&apos;s estimate, locked to October pricing, does not account for any of these increases. Every line item is understated. And the policyholder is expected to rebuild at today&apos;s prices using yesterday&apos;s money.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk itself has acknowledged the limitations of its pricing data. Xactimate&apos;s End User License Agreement states that &quot;Price Data is intended to represent historical information and should be used as a baseline or place to begin creation of an estimate.&quot; Read that again: <em>historical information</em>. Even Verisk does not claim its pricing data represents what materials and labor will cost when the work is actually done. The data reflects what things cost when the data was collected &mdash; which, by the time the price list is published and the estimate is written, is already weeks or months in the past.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Much Does the Price List Date Actually Matter?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The financial impact depends on two factors: how much prices have changed between the price list date used and the date repairs will be performed, and the total size of the estimate. Here is how the math works in practice.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Moderate Inflation: 1-2% Monthly Increase
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a normal inflationary environment where construction costs are rising 1-2% per month, a price list that is two months old results in an estimate that is 2-4% below current pricing. On a $100,000 estimate, that is $2,000 to $4,000. On a $300,000 estimate, it is $6,000 to $12,000. These are not trivial amounts &mdash; they represent the difference between a policyholder being able to complete repairs and being forced to cut corners or pay out of pocket.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Post-Disaster Demand Surge: 5-15% or More
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        After a major catastrophe &mdash; a wildfire, a hurricane, a widespread hail event &mdash; construction costs do not rise gradually. They spike. Demand surge occurs when hundreds or thousands of properties in the same region all need repairs simultaneously. Licensed contractors are overwhelmed. Materials are depleted from local suppliers. Shipping costs increase because supplies must be brought in from further away. Labor rates climb because workers must be attracted from other regions, often requiring travel, lodging, and per diem payments.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In these conditions, construction costs can increase 10%, 20%, or more within weeks. The monthly Xactimate price list updates cannot keep up with these rapid changes. Even if Verisk publishes a new price list every month, the data underlying that price list was collected before the catastrophe&apos;s full impact on local pricing was felt. The result is that even the most current available price list may be significantly below actual market conditions.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now add the carrier&apos;s habit of using a price list from the month of loss rather than the month of repair. If the catastrophe occurred in October and the carrier uses October pricing, but repairs will not begin until the following March, the estimate may be 15-25% or more below the actual cost of construction. On a $400,000 total loss claim, that is $60,000 to $100,000 in underpayment &mdash; all from a single settings choice that most policyholders never think to check. For more on how catastrophe conditions affect pricing, see{' '}
        <Link href="/resources/demand-surge-pricing" className="text-[#2E74B5] underline">Demand Surge Pricing</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Outdated Pricing Compounds with Other Xactimate Errors
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The price list date does not exist in isolation. It interacts with every other setting and decision in the estimate. When a carrier uses an outdated price list <em>and</em> makes other common errors, the cumulative effect can be devastating.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Outdated Pricing Plus Wrong Labor Efficiency
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/xactimate-labor-efficiency-settings" className="text-[#2E74B5] underline">labor efficiency setting</Link>{' '}
        in Xactimate determines whether labor is calculated at &quot;new construction&quot; efficiency (faster, cheaper) or &quot;restoration/repair&quot; efficiency (slower, more expensive, reflecting the realities of working in an occupied, partially damaged structure). When a carrier applies the new construction setting to a repair project, it reduces every labor line item by 15-30%. Now combine that with an outdated price list that has already reduced every material and labor cost by another 3-8%. The two errors multiply:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A $150 labor line item reduced to $120 by the wrong efficiency setting</li>
        <li>That $120 further reduced to $113 by a price list that is 6% below current costs</li>
        <li>The policyholder receives $113 for work that actually costs $150 &mdash; a 25% underpayment on that single line item</li>
        <li>Multiply this across every labor line item in a 200-item estimate</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Outdated Pricing Plus Missing Line Items
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Missing line items are one of the most common problems in carrier-prepared estimates. Adjusters routinely omit necessary work: furniture moving, floor protection, disposal fees, the removal and reset of fixtures before wall repairs, and dozens of other legitimate cost items. When the line items that <em>are</em> included are also priced using outdated data, the estimate is hit twice &mdash; once for what is missing and again for what is underpriced. For a comprehensive overview of commonly missed items and how to{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">challenge an Xactimate estimate</Link>,
        review our detailed guide.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Outdated Pricing Plus Wrong Geographic Region
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each Xactimate price list is specific to a geographic region within a state. If the carrier uses the correct month but the wrong region &mdash; for example, using rural area pricing for a property located in a metropolitan area &mdash; the prices will not reflect local market conditions. Combine the wrong region with the wrong month, and the estimate can be dramatically below reality on every line.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Carriers Use Outdated Price Lists
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding why carriers use outdated pricing is important for understanding how to challenge it. There are several reasons, and they are not all equally defensible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &quot;Date of Loss&quot; Argument
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers argue that the estimate should reflect costs as of the date of loss &mdash; the day the damage occurred &mdash; rather than the date of repair. This argument sounds reasonable on the surface, but it does not hold up under scrutiny. The policy obligates the carrier to pay the cost of repair. Repair costs are incurred when the repairs are performed, not when the damage occurred. A policyholder cannot travel back in time to buy materials at last quarter&apos;s prices. The cost of restoration is a present-day cost, not a historical one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is especially problematic when the carrier itself is responsible for the delay. If it takes the carrier four months to complete its investigation and issue payment, and prices have risen during those four months, the carrier should not benefit from its own delay by locking the estimate to the month when the claim was first reported.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Default Setting
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, the adjuster simply uses whatever price list was current when the estimate was opened. If the adjuster begins the estimate in one month but does not complete it until the next, the price list remains set to the month the estimate was started. If the estimate is revised weeks or months later, the original price list date may carry forward unless the adjuster deliberately updates it. Some adjusters are not even aware that this is a setting they can &mdash; and should &mdash; change.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Corporate Standardization
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        After catastrophic events, some carriers issue internal directives that lock the price list date to a specific month for all claims arising from that event. This creates consistency within the carrier&apos;s files, but it does so at the policyholder&apos;s expense. If the locked date does not reflect actual repair costs at the time of construction, every policyholder affected by that directive is systematically underpaid.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Verisk&apos;s Own Position on Pricing Accuracy
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth emphasizing what Verisk itself says about the accuracy of its pricing data, because carriers often treat Xactimate prices as gospel while Verisk itself does not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk&apos;s pricing methodology documentation explains that its data represents the &quot;most common price recently submitted&quot; within each geographic region. Verisk uses cluster analysis to identify the largest group of submitted prices and selects a point within that range. This is a statistical methodology, not a guarantee of accuracy for any individual market at any specific point in time.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        More significantly, Verisk&apos;s own End User License Agreement states that users &quot;are not prohibited from deviations from the Price Data where contractor requirements, market conditions, demand or any other factor warrants the use of different line-item prices.&quot; Verisk explicitly anticipates that market conditions may require prices different from what the price list shows. This language directly undermines any carrier argument that the Xactimate price list is the final word on what repairs should cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper understanding of how Verisk&apos;s pricing methodology works and what its published research reveals, see{' '}
        <Link href="/resources/how-to-read-verisk-white-paper" className="text-[#2E74B5] underline">How to Read a Verisk White Paper</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Demand Surge: When Monthly Updates Are Not Enough
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the carrier uses the most current available price list, there are situations where that price list still does not reflect actual market conditions. The most common scenario is demand surge following a catastrophe.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the timeline problem. A major hurricane makes landfall on October 15. The Xactimate price list for October was built using data collected in September and early October &mdash; before the hurricane. The November price list will be built using data collected through late October, capturing perhaps two weeks of post-hurricane pricing. But demand surge does not peak in two weeks. It builds over months as thousands of claims are filed, contractors mobilize, and supply chains are strained. The December, January, and February price lists will gradually incorporate higher prices, but they will always lag behind the actual market because the data collection and analysis process takes time.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Meanwhile, a policyholder whose home was destroyed in the hurricane is trying to get rebuilt. Contractors are quoting prices that reflect the reality on the ground &mdash; the actual cost of hiring workers, buying materials, and completing construction in a market where demand far exceeds supply. Those prices are significantly higher than what any Xactimate price list shows because the price list, by design, looks backward at historical data.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a flaw that can be fixed by simply selecting a newer price list date. It is a structural limitation of how Xactimate pricing works. In demand surge conditions, the price list is always behind the market. The question is how far behind and what can be done about it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk does offer some catastrophe-specific pricing adjustments for certain regions after major events. However, these adjustments are not always available, are not always sufficient, and do not always reach the areas that need them. Policyholders and their representatives cannot rely on the price list alone &mdash; they must supplement with actual contractor quotes that reflect current market conditions in the specific area where the repairs will be performed. For a comprehensive treatment of this issue, see our article on{' '}
        <Link href="/resources/demand-surge-pricing" className="text-[#2E74B5] underline">Demand Surge Pricing</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Identify and Challenge an Outdated Price List
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you suspect that your insurance estimate is using an outdated price list, here is a systematic approach to identifying the issue and presenting a challenge.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Identify the Price List Date
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Locate the price list information on the estimate as described above. Note the month and year. Also note the geographic region code to confirm it is correct for your property&apos;s location.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Determine When Repairs Will Be Performed
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Establish a realistic timeline for when repairs will actually begin and be completed. Consider factors such as contractor availability, permitting requirements, material lead times, and whether you are in a post-catastrophe environment where delays are inevitable. For more on how these factors affect{' '}
        <Link href="/resources/construction-timeline-disputes-ale" className="text-[#2E74B5] underline">construction timelines and related disputes</Link>,
        see our detailed guide. If the carrier&apos;s own delays have pushed the repair timeline out by months, document that timeline carefully.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Compare the Price Lists
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have access to Xactimate, you can run the same estimate with two different price list dates &mdash; the one the carrier used and the one that corresponds to the expected repair period. Xactimate makes this straightforward: change the price list date in the parameters, re-price the estimate, and compare the totals. The difference is the price list gap.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you do not have access to Xactimate, a Public Adjuster, appraiser, or estimator can perform this comparison for you. The comparison produces a concrete dollar amount &mdash; not an estimate of the difference, but the actual difference calculated by the same software the carrier used.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Obtain Current Contractor Pricing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Supplement the Xactimate comparison with actual quotes from licensed contractors in your area. If local contractors are quoting prices that exceed even the most current Xactimate price list, that supports the argument that the carrier&apos;s outdated price list is inadequate. Obtain at least two or three quotes from reputable, licensed general contractors for the scope of work in the carrier&apos;s estimate. This creates a paper trail showing what repairs actually cost in the current market.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Present the Challenge in Writing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Draft a written challenge to the carrier that includes:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Identification of the price list date used in the carrier&apos;s estimate</li>
        <li>An explanation of why that date does not reflect the cost of repairs at the time they will be performed</li>
        <li>The Xactimate comparison showing the dollar difference between the carrier&apos;s price list and the appropriate price list</li>
        <li>Contractor quotes supporting the higher pricing</li>
        <li>A reference to Verisk&apos;s own acknowledgment that its pricing data is &quot;historical information&quot; and a &quot;baseline,&quot; not a ceiling</li>
        <li>A reference to Verisk&apos;s own statement that deviations from the price data are appropriate when &quot;market conditions, demand or any other factor warrants&quot; different prices</li>
        <li>If applicable, documentation of the carrier&apos;s own delays that contributed to the gap between the loss date and the repair date</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        This approach turns the price list date from a hidden setting into a documented, quantified issue with a specific dollar amount attached. It is much harder for a carrier to dismiss a challenge when you can show that the same software, with the same line items, produces a materially different result simply by updating the price list to the correct month.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Price List Date in Supplemental Estimates
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The price list issue does not end with the initial estimate. When additional damage is discovered during repairs, or when the scope of work is expanded through the supplement process, the price list date for the supplemental estimate matters just as much. If the carrier writes a supplement using the same outdated price list from the original estimate, the supplemental work is also underpriced.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This creates an absurd situation. Imagine the original estimate was written in January using November pricing. A supplement is submitted in April for additional work discovered during construction. The carrier writes the supplement &mdash; also using November pricing. The supplemental work will be performed in May or June, but it is priced at levels from six or seven months earlier. Every month of lag compounds the underpayment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When submitting or reviewing supplements, always check the price list date on the supplemental estimate separately. Do not assume it matches the original, and do not assume it is any more current than the original.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Price List Date in Appraisal and Litigation
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If a claim progresses to appraisal or litigation, the price list date becomes an important evidentiary issue. In appraisal, the appraiser should use pricing that reflects the cost of repairs at the time they will be performed. An appraiser who uses an outdated price list is not valuing the loss accurately &mdash; they are valuing it at historical prices that the policyholder cannot actually obtain in the current market.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In litigation, the price list date can be a powerful tool for demonstrating systematic underpayment. If the carrier used the same outdated price list date across hundreds or thousands of claims from a single catastrophic event, that pattern suggests a corporate decision to underpay rather than individual adjuster error. Discovery can reveal internal communications about price list directives, and expert testimony can quantify the aggregate impact of the outdated pricing across the carrier&apos;s entire book of claims.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The State Farm labor efficiency class action is instructive here. In that case, State Farm&apos;s systematic use of improper labor efficiency settings led to a class action that encompassed 65,575 policyholders, some of whom were underpaid by $20,000 or more. The price list date presents a similar class-wide issue: if a carrier directs all its adjusters to use a specific outdated price list for a catastrophe event, every policyholder affected by that directive has the same underpayment problem.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Checkpoint Price Lists and Custom Pricing
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers use what Xactimate calls &quot;checkpoint&quot; price lists &mdash; price lists that are locked to a specific date and do not update automatically. This is a feature designed to allow carriers to maintain consistent pricing across a large volume of claims, but it can also be used to freeze pricing at a point that favors the carrier.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Similarly, some carriers use custom or &quot;variable&quot; price lists that modify the standard Verisk pricing. These custom lists may adjust labor rates, material costs, or both, either up or down. If you see a price list version number other than the standard &quot;8X,&quot; it may indicate that the carrier is using a custom price list that further deviates from standard market pricing. This is another setting that should be examined carefully and compared against the standard price list for the same region and month.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Recommendations
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Based on everything discussed above, here are concrete steps that every policyholder, Public Adjuster, or attorney should take when reviewing an Xactimate estimate.
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Check the price list date on every estimate you receive.</strong> This should be as routine as checking the total. It takes seconds to find and can reveal thousands of dollars in underpayment.</li>
        <li><strong>Request the ESX file from your carrier.</strong> The printed estimate does not always reveal all of the underlying settings. The ESX file does. Insist on receiving it.</li>
        <li><strong>Compare the price list date to the expected repair date.</strong> If there is a gap of two months or more, the estimate is likely understating current costs. In a post-disaster or high-inflation environment, even a one-month gap may be significant.</li>
        <li><strong>Run a side-by-side comparison.</strong> Have a professional re-price the carrier&apos;s estimate using the appropriate price list. The dollar difference becomes your documented claim for additional payment.</li>
        <li><strong>Supplement with actual contractor quotes.</strong> Xactimate pricing, even at its most current, is a baseline. Real-world contractor quotes establish what repairs actually cost in today&apos;s market.</li>
        <li><strong>Check for other compounding errors.</strong> An outdated price list is rarely the only problem. Check the labor efficiency setting, the geographic region, and the line items for completeness. Each additional error you identify strengthens the overall challenge.</li>
        <li><strong>Document carrier delays.</strong> If the carrier took months to inspect, evaluate, or pay the claim, and prices rose during that period, the carrier should not benefit from its own delay. Keep a timeline of every communication and every missed deadline.</li>
        <li><strong>Put everything in writing.</strong> Verbal conversations with adjusters are easily forgotten or denied. Every price list challenge should be submitted in a dated, written communication that becomes part of the claim file.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The price list date is one of several global settings in Xactimate that can silently reduce an estimate across every line item. Unlike missing line items, which are visible on the face of the estimate, an outdated price list is invisible to anyone who does not know to look for it. The line items appear complete. The quantities appear accurate. The prices appear specific and authoritative, generated by sophisticated software backed by a massive database. Nothing on the face of the estimate tells the policyholder that every price is from three months ago.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is what makes the price list date such an effective tool for systematic underpayment. It is a single setting, chosen before a single line item is entered, that reduces the entire estimate by a uniform percentage. It does not attract attention the way a missing room or a deleted line item would. It simply makes everything a little cheaper &mdash; and that &quot;little&quot; adds up to a lot.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are dealing with an insurance claim and the carrier has provided an Xactimate estimate, do not accept the numbers at face value. Check the price list date. Compare it to current pricing. Calculate the difference. And if the numbers do not add up, challenge them &mdash; in writing, with data, using the carrier&apos;s own tool against itself.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete guide to identifying and challenging every type of Xactimate error, see{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">How to Challenge an Xactimate Estimate</Link>.
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
