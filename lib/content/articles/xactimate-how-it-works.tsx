import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "How Xactimate Works: A Policyholder's Guide to Insurance Estimates",
  description:
    "Xactimate is the software insurance companies use to price your claim. Understanding how it works — regional pricing databases, line items, labor settings, and its limitations — is the first step to getting paid fairly.",
  summary:
    'Xactimate is the software insurers use to price your claim, built on regional pricing databases, line items, and labor settings. Understanding how it works, and its limitations, is the first step to recognizing and correcting an estimate that underpays.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only. It does not constitute legal,
          financial, or professional advice. Insurance policies vary, and regulations differ by
          state. Consult with a licensed attorney or Public Adjuster regarding your specific
          claim. Nothing in this article creates a professional-client relationship.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have received an estimate from your insurance company for property damage, it was
        almost certainly generated in a software program called Xactimate. This is the tool that
        the entire property insurance industry uses to put a dollar figure on your loss. The
        number on that estimate &mdash; the one the carrier says is &quot;what your claim is
        worth&quot; &mdash; came out of this software.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders accept that number without understanding where it came from or how it
        was calculated. That is a mistake. Xactimate is a powerful and sophisticated tool, but
        the output depends entirely on who is using it and what choices they make while building
        the estimate. Two competent estimators can look at the same damage and produce numbers
        that are tens of thousands of dollars apart &mdash; all within the same software.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how Xactimate works in plain language. You do not need to become an
        expert in the software. But you do need to understand enough to know whether the estimate
        you received is reasonable &mdash; or whether your carrier is using the tool to
        short-change you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We will cover how pricing is determined, what a line item actually contains, how labor
        settings affect costs, how overhead and profit works, what the raw data file reveals,
        and why insurance estimates are so frequently inadequate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Is Xactimate?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is estimating software made by Verisk, a data analytics company that was
        formerly known as Xactware. It has been the dominant tool in the property insurance
        industry for over two decades. Virtually every insurance carrier in the United States
        uses Xactimate to write estimates. So do most independent adjusters, public adjusters,
        and a growing number of contractors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The software generates repair estimates based on a massive database of pricing
        information organized by geographic area. It contains thousands of individual line items
        covering every construction trade you can think of &mdash; roofing, plumbing, electrical,
        drywall, painting, flooring, cabinetry, appliances, demolition, temporary protection,
        and hundreds more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pricing database is updated monthly by zip code to reflect local market conditions.
        In theory, this means the prices in Xactimate should approximate what it actually costs
        to hire someone to do the work in your area. In practice, there are significant gaps
        between what Xactimate says and what the work actually costs &mdash; especially after
        catastrophic events when demand surges.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because both sides of a claim typically use the same software, Xactimate functions as a
        common language. The dispute is rarely about whether to use Xactimate. The dispute is
        about how it was used &mdash; what was included, what was excluded, and what settings
        were applied.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Pricing Works</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s pricing is based on market surveys conducted in each geographic region.
        Verisk collects data from contractors, suppliers, and other sources to determine what
        labor and materials cost in a given area. These prices are then published by zip code
        and updated on a monthly cycle.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each price list factors in local wage rates, material costs, and equipment expenses. A
        line item for hanging drywall in Los Angeles will have a different price than the same
        line item in rural Nebraska because the labor market and material supply chains are
        different.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The monthly update cycle is important to understand. Verisk publishes new prices once per
        month, but material costs and labor rates can change faster than that &mdash; especially
        after a disaster. When a wildfire destroys thousands of homes in a region, the sudden
        demand for labor and materials drives prices up immediately. It can take several months
        for the Xactimate price list to catch up to the new reality. During that lag period,
        every estimate generated with the outdated prices will be too low.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each line item in an estimate has a quantity, a unit price (pulled from the database for
        that zip code), and a calculated total. The estimate is the sum of all line items. On top
        of that base total, overhead and profit may be added as a separate percentage &mdash;
        but it is not included in the unit prices themselves.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One detail worth noting: the carrier&apos;s adjuster can select which month&apos;s price
        list to apply. Most should use the price list effective at the time of loss or at the
        time repairs will be performed &mdash; whichever produces a fair result. But an adjuster
        who applies a price list from six months before the loss &mdash; or one from a different
        zip code &mdash; will produce a materially lower estimate without changing any line items.
        This is one of the invisible levers that can suppress a claim value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk also publishes what are called &quot;state-specific&quot; price lists for
        catastrophe events, which may carry different assumptions. After a large wildfire or
        hurricane, the published prices may still not reflect the actual cost of hiring a
        contractor in a market flooded with demand. Keep this in mind if your loss occurred
        during or immediately after a declared disaster.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What a Line Item Contains</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every line item in Xactimate is built from several components. Understanding these
        components helps you evaluate whether a specific line item is appropriate for your
        situation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each line item includes a description of the work being performed. For example:
        &quot;Remove and replace drywall, 1/2 inch, hung, taped, floated, ready for paint.&quot;
        The description tells you exactly what scope of work that line item covers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The unit of measurement varies by line item. Some are measured in square feet (SF), some
        in linear feet (LF), some per each (EA), some per square (SQ, which is 100 square feet
        for roofing), and some as lump sum (LS). Using the wrong unit of measurement or the wrong
        quantity is one of the most common errors in insurance estimates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Within each unit price, there is a material cost component and a labor cost component.
        Some line items also include an equipment component &mdash; for example, line items
        involving scaffolding, lifts, or specialty tools. You can view this breakdown in the
        estimate detail, and it matters because disputes sometimes center on whether the
        material or the labor portion is accurate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the critical point: two estimates can address the same category of work but
        contain vastly different levels of detail. One estimator might use a single line item
        for &quot;paint bedroom walls and ceiling&quot; while another breaks that same work into
        separate line items for masking, primer coat, two finish coats, cutting in at trim, and
        ceiling paint. Both are using Xactimate. The difference in the total can be substantial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate also distinguishes between &quot;remove and replace&quot; (R&amp;R) line items
        and &quot;remove only&quot; or &quot;install only&quot; line items. An R&amp;R line item
        covers the full process of tearing out the damaged material and installing new material
        in its place. If the adjuster uses only a &quot;remove&quot; line item without the
        corresponding &quot;replace,&quot; or vice versa, the estimate will be incomplete. This
        may seem like an obvious error, but it is surprisingly common in hastily prepared
        estimates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Another important distinction is between &quot;minimum charge&quot; line items and
        standard quantity-based pricing. When a small amount of work is needed &mdash; say,
        patching three square feet of drywall &mdash; the actual cost is higher per unit than
        the standard rate because a tradesperson still has to mobilize, set up, do the work, and
        clean up regardless of the tiny quantity. Xactimate has minimum-charge line items that
        account for this reality. Adjusters who apply standard per-unit pricing to very small
        quantities will produce an estimate that no contractor would accept.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Sketch and Measurements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate includes a built-in sketching tool that allows the estimator to draw the
        floor plan of your home (or at least the affected rooms). The sketch drives the
        quantities in the estimate &mdash; wall lengths, ceiling areas, floor square footage.
        If the sketch is wrong, every area-based line item will be wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some adjusters use aerial measurement services (like EagleView or Hover) to generate
        roof and exterior measurements remotely. While these can be accurate, they are not
        infallible. Complex roof geometries, tree cover, and recent modifications to the
        structure can all introduce errors. If your estimate seems low, checking whether the
        measurements match reality is one of the first things to verify.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The sketch also defines which rooms are included in the estimate&apos;s scope. If the
        adjuster did not sketch a room, that room&apos;s damage is not in the estimate &mdash;
        even if it was clearly affected. Review the sketch pages of your estimate carefully to
        confirm all damaged areas are represented.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Labor Efficiency Settings</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most impactful settings in Xactimate, and most policyholders have
        never heard of it. Xactimate has two primary labor productivity settings: &quot;New
        Construction&quot; and &quot;Restoration/Service/Remodel.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The New Construction setting assumes that work is being done in an open-field environment
        with maximum efficiency. Think of a new housing development where framers are working on
        bare studs with no existing finishes to protect, no furniture to move, full crew access,
        and no occupied household to work around.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Restoration/Service/Remodel setting accounts for the realities of repair work in an
        existing structure. This includes working around existing finishes that must be protected,
        smaller crew sizes due to limited workspace, the need to move or cover furniture,
        restricted access to the work area, longer setup and cleanup times, debris removal from
        an occupied property, and the general inefficiency of tearing out damaged material before
        rebuilding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The setting used can change the labor cost on an estimate by 20% to 40% or more. That is
        not a small difference. On a $100,000 repair estimate where labor represents half the
        cost, the wrong setting could mean $10,000 to $20,000 left off the table.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most repair work on insurance claims should use the Restoration setting. The work is
        being done in an existing home with existing finishes, occupied or not. It is repair
        work, not new construction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite this, some insurance carriers have been documented using the New Construction
        setting on repair estimates. Whether this is done out of ignorance or as a deliberate
        cost-saving measure, the result is the same: an estimate that does not reflect the
        actual cost of the work.
      </p>

      <CalloutBox variant="warning" title="Check the Labor Setting">
        <p>
          If you have received an Xactimate estimate from your insurance company, ask what labor
          productivity setting was used. If it says &quot;New Construction&quot; or if the
          carrier cannot answer the question, that is a red flag. Repair work in an existing
          structure is not new construction, and pricing it as though it were understates the
          actual cost.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Depreciation Works in Xactimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost policy, your carrier will typically issue two payments: an
        initial payment at actual cash value (ACV), and a second payment for the recoverable
        depreciation once repairs are completed. The depreciation calculation happens inside
        Xactimate, and it is another area where carriers take liberties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate allows the estimator to apply depreciation to materials, labor, or both. The
        correct approach depends on your state&apos;s law and the specific policy language. In
        California, labor depreciation has been a contested issue &mdash; labor does not &quot;wear
        out&quot; the way a roof shingle does, and courts have weighed in on whether it can be
        depreciated at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Within the estimate, depreciation is applied as a percentage to each line item or
        category based on the age and condition of the damaged component. A 15-year-old roof
        with a 30-year expected life might be depreciated at 50%. But the rate applied should
        reflect the actual condition of the item, not just its calendar age. A well-maintained
        roof that was functioning perfectly before the loss should not be depreciated the same
        as one that was already deteriorating.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file will show you exactly how depreciation was calculated &mdash; what
        percentages were applied to which line items, and whether labor was included in the
        depreciation. This is one of the most valuable pieces of information you can extract
        from that file.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Overhead and Profit</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and profit &mdash; commonly referred to as O&amp;P &mdash; is a percentage added
        on top of the base estimate to account for a general contractor&apos;s business costs and
        profit margin. The industry standard is 10% overhead plus 10% profit, which works out to
        approximately 21% on top of the direct costs (because profit is calculated on the total
        including overhead).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P is not included in Xactimate&apos;s unit prices. It must be added as a separate
        line on the estimate. This is an important distinction &mdash; the base prices in
        Xactimate represent the cost for a trade-specific subcontractor to perform work, not the
        all-in cost of having a general contractor manage a multi-trade repair project.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Three Categories of Overhead in Xactimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s own documentation recognizes three distinct types of overhead:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>General overhead:</strong> The contractor&apos;s ongoing business expenses
          &mdash; rent, office staff, licensing fees, insurance, advertising, vehicle costs. This
          is what the standard 10% overhead covers.
        </li>
        <li>
          <strong>Job-related overhead:</strong> Costs specific to a particular project that go
          beyond the trade labor itself &mdash; project management, portable restroom facilities,
          temporary power, dumpster rental, site security, and job coordination. These should be
          written as separate line items in the estimate, not absorbed into the general O&amp;P
          percentage.
        </li>
        <li>
          <strong>Job-personnel overhead:</strong> The cost of employing the workers themselves
          &mdash; payroll taxes, workers&apos; comp insurance, benefits, and similar expenses.
          This component is already built into the labor portion of each line item. It does not
          need to be added separately.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers commonly refuse to include O&amp;P, arguing that it is &quot;not
        warranted&quot; or that the homeowner does not need a general contractor. Some carriers
        cite a &quot;three-trade rule&quot; &mdash; the notion that O&amp;P is only appropriate
        when three or more distinct trades are required. This rule has no legal authority. It is
        an industry guideline that carriers have adopted because it provides a convenient basis
        for denial. The reality is that even two-trade repairs often require general contractor
        coordination.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of this topic, see our article on{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ESX File &mdash; Your Right to the Raw Data
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an adjuster builds an estimate in Xactimate, the native file format is called an
        ESX file. This is the source file &mdash; not the PDF summary they send you. The ESX
        file contains far more information than the printed estimate, and it is information you
        are entitled to.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An ESX file contains metadata showing who prepared the estimate and when. It shows every
        modification that was made &mdash; including line items that were added and then removed,
        which can reveal items the adjuster initially included but later deleted. It shows what
        labor productivity setting was used, what price list was applied, and what depreciation
        calculations were performed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This data has been recognized as significant enough that federal courts have ordered
        insurance companies to produce ESX files in litigation discovery. The metadata embedded
        in these files has exposed estimate manipulation that would never be visible from the PDF
        printout alone.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, you do not need to be in litigation to obtain this file. Under California
        Insurance Code Section 2071 and the Fair Claims Settlement Practices Regulations, your
        carrier is required to provide claim-related documents within 15 days of a written
        request. The ESX file is a claim-related document &mdash; it is the source data behind
        the estimate they used to determine your payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What can a professional learn from reviewing your ESX file? Quite a bit:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Whether the correct price list (zip code and date) was used</li>
        <li>Whether labor efficiency is set to restoration or new construction</li>
        <li>Whether line items were added and then deleted before the estimate was finalized</li>
        <li>Whether depreciation was applied correctly or excessively</li>
        <li>Whether O&amp;P was included or stripped out</li>
        <li>Whether the estimate was built from a template or customized to your actual loss</li>
        <li>What version of the software was used and whether it was current</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on your rights to claim documents, see our article on the{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
          CDI Right to Claim Documents
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Request the ESX File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your request should be in writing &mdash; email is fine. Be specific: ask for
        &quot;the native Xactimate ESX file(s) for all estimates prepared in connection with
        claim number [your claim number].&quot; Do not ask for &quot;the estimate&quot; because
        the carrier will send you the PDF and claim compliance. You need the ESX file
        specifically.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier pushes back &mdash; claiming the file is proprietary, or that they only
        provide PDFs &mdash; remind them that the ESX file is a document related to your claim
        and that California regulations require its production. The file is not proprietary to
        the carrier; it is a record of how they evaluated your loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have the ESX file, you will need someone with Xactimate software to open and
        review it. A public adjuster, independent estimator, or knowledgeable contractor can do
        this. The file cannot be opened in a standard program like Word or Excel &mdash; it
        requires the Xactimate application itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Xactimate Estimates Are Often Too Low
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Receiving an estimate generated in Xactimate does not mean the number is accurate or
        fair. There are structural reasons why insurance-prepared Xactimate estimates
        consistently understate the cost of repair.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Monthly Update Lag
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate updates its pricing monthly. After a disaster, actual
        costs rise immediately due to demand surges. The price list may not reflect reality for
        weeks or months. Every estimate written during that lag period uses outdated numbers.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Verisk&apos;s Own Disclaimer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk&apos;s End User License Agreement &mdash; specifically Section 12.3 &mdash;
        contains a disclaimer stating that the pricing data is intended as a &quot;baseline&quot;
        and that the company does not guarantee the accuracy of its prices. In other words, even
        the publisher of the software acknowledges that the numbers are a starting point, not a
        definitive statement of cost.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insufficient User Training
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate offers certification levels for its users, ranging from basic familiarity to
        advanced proficiency. Only an estimated 1% to 2% of all Xactimate users hold Level 1 or
        Level 2 certification. Most insurance adjusters writing estimates have
        never demonstrated proficiency through the software&apos;s own certification program.
        This means the people writing your estimate may not fully understand the tool they are
        using.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Commonly Omitted Line Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters routinely omit legitimate line items from their estimates. These
        omissions are not always intentional &mdash; sometimes the adjuster simply does not know
        the line item exists or does not understand the construction process well enough to know
        it is needed. Common omissions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Surface preparation before painting (sanding, cleaning, deglossing)</li>
        <li>Primer coats (listed separately from finish paint in Xactimate)</li>
        <li>Texture matching on walls and ceilings</li>
        <li>Protection of adjacent finished surfaces during construction</li>
        <li>Masking and taping before painting</li>
        <li>Furniture and contents manipulation (moving items to access work areas)</li>
        <li>Haul-off and disposal of debris beyond the initial dumpster</li>
        <li>Temporary facilities (portable restrooms, temporary power for large jobs)</li>
        <li>Final cleaning after construction is complete</li>
        <li>Permit fees and inspection costs</li>
        <li>Material delivery charges</li>
        <li>Minimum charge thresholds (small-quantity work costs more per unit)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Financial Incentives
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        It would be naive to ignore the obvious: the carrier&apos;s adjuster works for a company
        whose profitability improves when claims are paid at lower amounts. Some carriers track
        adjuster &quot;severity&quot; &mdash; the average claim payment per file. Adjusters who
        consistently write higher estimates may face scrutiny. This does not mean every adjuster
        is deliberately lowballing your claim, but the incentive structure is not aligned with
        writing the most thorough estimate possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, many insurance companies use desk adjusters who never visit the property.
        They write estimates based on photos, sometimes taken by the homeowner and sometimes by
        a field inspector who has no estimating training. Writing an estimate from photos without
        physically inspecting the damage almost guarantees that scope will be missed. Damage
        behind walls, under flooring, in attic spaces, and in areas not photographed simply will
        not appear on the estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers also use proprietary &quot;estimate review&quot; software that flags line
        items exceeding certain thresholds or that appear on a pre-set exclusion list. The
        adjuster may write a thorough estimate only to have it reduced by automated review before
        it reaches you. The estimate you receive may not even reflect what the field adjuster
        originally wrote.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What You Can Do</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how Xactimate works puts you in a stronger position to challenge an
        inadequate estimate. Here are concrete steps you can take:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Request your ESX file.</strong> Put your request in writing and cite California
          Insurance Code Section 2071. The carrier must respond within 15 days. If they refuse
          or claim the file does not exist, that is a potential fair claims violation.
        </li>
        <li>
          <strong>Get two or three contractor bids.</strong> Obtain written estimates from
          licensed general contractors for the same scope of work. These real-world numbers
          provide a benchmark to compare against the Xactimate estimate. If three contractors
          all say the job costs $80,000 and the carrier&apos;s estimate says $45,000, you have
          a documented gap.
        </li>
        <li>
          <strong>Hire a public adjuster or independent estimator.</strong> A professional who
          works in Xactimate daily can review the carrier&apos;s estimate line by line, identify
          what was omitted, verify the settings, and prepare a competing estimate that reflects
          the actual scope and cost of repair. This is what{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            public adjusters
          </Link>{' '}
          do.
        </li>
        <li>
          <strong>Do not accept the first estimate as final.</strong> The initial estimate is a
          starting point. Insurance companies expect negotiation on larger claims. Accepting the
          first number without pushback almost guarantees you are leaving money on the table.
        </li>
        <li>
          <strong>Document the gap.</strong> If contractor bids exceed the insurance estimate,
          put the discrepancy in writing to the carrier. Ask them to explain specifically why
          their estimate is lower. Force them to justify the number, not just assert it.
        </li>
        <li>
          <strong>File a supplement.</strong> If additional damage is discovered during repairs,
          or if the initial scope was incomplete, you have the right to submit a{' '}
          <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
            supplemental claim
          </Link>{' '}
          for the additional costs. The first estimate does not cap your recovery.
        </li>
        <li>
          <strong>Understand your dispute options.</strong> If negotiation stalls, California
          policyholders have several paths: invoking the appraisal clause in your policy (which
          resolves amount disputes through a panel process), filing a complaint with the
          California Department of Insurance, or retaining legal counsel for bad faith claims.
          The avenue depends on whether the dispute is about coverage or about the dollar amount.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Not to Do
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A few common mistakes policyholders make when dealing with Xactimate estimates:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not assume the estimate is correct because it looks official.</strong> A
          20-page Xactimate printout with line-item detail looks authoritative. That appearance
          of precision makes people assume accuracy. But an estimate full of omissions is still
          wrong no matter how professionally it is formatted.
        </li>
        <li>
          <strong>Do not sign a contractor agreement for the insurance estimate amount.</strong>
          {' '}If you lock in a contract at the carrier&apos;s number before disputing the
          estimate, you may limit your ability to recover the true cost. Get the estimate
          corrected first.
        </li>
        <li>
          <strong>Do not wait too long to challenge the number.</strong> While California does not
          impose a strict deadline for disputing an estimate, delays make the process harder.
          Challenge the estimate promptly while the damage is still visible and the
          circumstances are fresh.
        </li>
        <li>
          <strong>Do not make repairs without documenting the original damage.</strong> Once
          repairs are complete, the physical evidence of what was wrong is gone. Photograph and
          video everything before construction begins. If possible, have a professional inspect
          before demolition starts.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Key Takeaway">
        <p>
          Xactimate is a pricing tool, not an oracle. It produces whatever number the person
          using it tells it to produce. The carrier&apos;s estimate is their opening position,
          not the final word on what your repairs cost. Understanding the software&apos;s
          mechanics &mdash; pricing databases, labor settings, line item selection, and O&amp;P
          &mdash; gives you the knowledge to identify where the estimate falls short and the
          language to challenge it effectively.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
            Overhead &amp; Profit: When Your Claim Should Include O&amp;P
          </Link>
        </li>
        <li>
          <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
            Supplemental Claims: Getting Paid for Additional Damage
          </Link>
        </li>
        <li>
          <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
            Your Right to Claim Documents Under California Law
          </Link>
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            What a Public Adjuster Does and When to Hire One
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
