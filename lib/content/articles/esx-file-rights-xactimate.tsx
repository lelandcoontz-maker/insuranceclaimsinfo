import Link from 'next/link'

export const meta = {
  title: "Your Right to the Carrier’s Xactimate File: How to Get the ESX and What to Do With It",
  description:
    "The ESX file is Xactimate’s native project file containing all settings, line items, and pricing data. Learn your right to obtain it, how to request it, and what to look for once you have it.",
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company sends you its estimate for your property damage claim, what
        you receive is almost always a PDF &mdash; a printed summary of the numbers. What you do
        not receive is the file the adjuster actually built the estimate in. That file is the ESX
        file, Xactimate&apos;s native project format, and it contains far more information than
        the PDF printout will ever show you. The difference between the two is the difference
        between reading a financial summary and having access to the full accounting ledger.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are disputing your insurance company&apos;s estimate &mdash; or if you simply want
        to understand how your claim was valued &mdash; the ESX file is the single most important
        document you can obtain. This article explains what the ESX file is, why carriers resist
        providing it, your legal right to demand it, and exactly what to look for once you have it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is an ESX File?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An ESX file is the native project file format for{' '}
        <Link href="/resources/xactimate-how-it-works" className="text-[#2E74B5] underline">
          Xactimate
        </Link>, the estimating software developed by Verisk Analytics that dominates the
        property insurance industry. When an adjuster builds an estimate for your claim, they
        work inside a Xactimate project. Every setting they configure, every line item they add
        or remove, every measurement they enter, every note they type &mdash; all of it lives
        inside the ESX file. The file extension stands for &quot;Estimate Xactimate,&quot; and
        the file itself is technically a ZIP-compressed archive containing structured data about
        the entire project.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file contains, at minimum, the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>All line items</strong> &mdash; every repair task, material, and labor entry
          the adjuster included (and critically, what they chose not to include)
        </li>
        <li>
          <strong>Measurements and sketches</strong> &mdash; the digital floor plan and
          measurements the estimate is built on
        </li>
        <li>
          <strong>Labor efficiency settings</strong> &mdash; the tier selection that directly
          controls how labor hours are calculated
        </li>
        <li>
          <strong>Price list information</strong> &mdash; which price list was used, what date
          it was published, and which geographic region it applies to
        </li>
        <li>
          <strong>Depreciation calculations</strong> &mdash; the depreciation percentages and
          useful life figures applied to each line item
        </li>
        <li>
          <strong>Overhead and profit settings</strong> &mdash; whether O&amp;P was included or
          excluded, and at what percentage
        </li>
        <li>
          <strong>Internal notes and comments</strong> &mdash; any annotations the adjuster
          made within the estimate file
        </li>
        <li>
          <strong>Revision history</strong> &mdash; in many cases, metadata showing when the
          estimate was created and modified
        </li>
        <li>
          <strong>Photographs</strong> &mdash; images attached to the project during the
          inspection
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The PDF Is Not the Estimate &mdash; It Is a Summary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is critical and widely misunderstood. The PDF that your insurance
        company sends you is a report generated from the ESX file. It shows you line items,
        quantities, and dollar amounts in a formatted printout. But the PDF does not show you the
        settings that produced those numbers. It does not show you what the adjuster excluded. It
        does not show you the labor efficiency tier, the price list date, the depreciation
        methodology, or any of the underlying configuration choices that directly affect your
        bottom line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of it this way: if someone handed you a restaurant bill showing a total of $200,
        you could see what was ordered. But you would not know whether the restaurant applied a
        20% discount to wine, used last year&apos;s menu prices, or added a surcharge you were
        not told about. The ESX file is the itemized receipt with every modifier visible. The PDF
        is just the total.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For anyone attempting to challenge an insurance estimate &mdash; whether a policyholder,
        a Public Adjuster, or an attorney &mdash; the PDF is not enough. You need the raw data.
        You need the ESX.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why You Need the ESX File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file is not just a technical curiosity. It is the key to understanding whether
        your insurance company&apos;s estimate is honest. Here is what the ESX file reveals that
        the PDF does not:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Labor Efficiency Settings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s{' '}
        <Link href="/resources/xactimate-labor-efficiency-settings" className="text-[#2E74B5] underline">
          labor efficiency settings
        </Link>{' '}
        control how labor hours are calculated for every trade in the estimate. The software
        offers multiple tiers: Restoration/Remodel/Service (for standard insurance repair work),
        Large Restoration/Remodel (which reduces labor pricing by approximately 5&ndash;10%
        compared to the standard tier), and New Construction/Total Rebuild (which assumes the
        most efficient working conditions &mdash; no occupants, no existing finishes to protect,
        no access constraints).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers frequently set the labor efficiency to a tier that assumes conditions more
        favorable than what actually exists at the job site. If the adjuster selected New
        Construction efficiency for a repair project in an occupied home, labor hours will be
        artificially reduced across the entire estimate. This single setting can decrease the
        estimate by thousands of dollars, and it is invisible on the PDF printout. You will only
        see it in the ESX file.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Price List Date and Geographic Region
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate pricing is based on localized price lists published monthly by Verisk. Each
        price list reflects labor rates and material costs for a specific geographic region at a
        specific point in time. If the adjuster used a price list from six months before your
        loss &mdash; or one keyed to a lower-cost region &mdash; every line item in the estimate
        will be priced below what the work actually costs in your area at the time of loss. The
        PDF will show you unit prices, but it will not tell you which price list generated them
        or whether it matches your location and loss date.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Excluded Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful features of the ESX file is that it shows what is not in the
        estimate. When a{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          knowledgeable reviewer opens the ESX file in Xactimate
        </Link>, they can compare the estimate against what should be there based on the scope
        of damage. Missing line items &mdash; furniture moving, floor protection, content
        manipulation, trim removal and reinstallation, texture matching, haul-off, temporary
        repairs &mdash; become immediately apparent when you have the editable file rather than
        a static PDF.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Depreciation Schedules
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file contains the specific depreciation percentages applied to each line item,
        along with the useful life figures the adjuster selected. Carriers sometimes apply
        depreciation to non-depreciable items (like labor), use excessive depreciation
        percentages, or assign unreasonably short useful life spans to building components. The
        PDF may show you a lump-sum depreciation holdback, but the ESX file shows you the
        item-by-item breakdown &mdash; which is where the errors live.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Overhead and Profit Inclusion or Exclusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file will show whether{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">
          overhead and profit
        </Link>{' '}
        was included in the estimate and at what percentage. Carriers frequently strip O&amp;P
        from their estimates entirely, or include it at reduced percentages. The ESX file makes
        this immediately visible.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Legal Right to the ESX File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, your right to obtain claim-related documents from your insurer is
        established by both statute and regulation. The ESX file falls squarely within the
        definition of a claim-related document, and your insurer is required to provide it upon
        request.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California Insurance Code &sect;2071
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 2071 requires insurers to notify every claimant that
        they may obtain, upon request, copies of claim-related documents. The statute defines
        &quot;claim-related documents&quot; broadly to include &quot;all documents that relate to
        the evaluation of damages, including, but not limited to, repair and replacement
        estimates and bids, appraisals, scopes of loss, drawings, plans, reports, third-party
        findings on the amount of loss, covered damages, and cost of repairs, and all other
        valuation, measurement, and loss adjustment calculations of the amount of loss, covered
        damage, and cost of repairs.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file is, by definition, a repair estimate containing measurements, valuations,
        and loss adjustment calculations. It is the estimate &mdash; the PDF is merely a
        printout of it. Under &sect;2071, the insurer must provide copies of claim-related
        documents within 15 calendar days of your request.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In August 2025, California Insurance Commissioner Ricardo Lara issued a formal notice
        reminding all insurers of their obligations under &sect;2071, prompted by reports that
        wildfire survivors were being denied access to estimates and other claim-related
        documents. The Commissioner&apos;s notice emphasized that claim-related documents include
        &quot;all estimates, reports, findings, and calculations &mdash; whether preliminary or
        final &mdash; that in any way relate to the loss and evaluation of damages.&quot;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect;2695.7(d) &mdash; Fair Claims Settlement Practices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations, codified at Title 10,
        California Code of Regulations, Section 2695.7(d), impose additional obligations on
        insurers. These regulations require insurers to conduct a thorough, fair, and objective
        investigation of every claim, and to respond to policyholder communications &mdash;
        including requests for documents &mdash; within 15 calendar days. An insurer that
        refuses to provide a claim-related document upon request is not conducting a fair
        investigation; it is obstructing the policyholder&apos;s ability to evaluate the
        insurer&apos;s own work product.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.7(b) further requires that every insurer disclose to the claimant &quot;all
        benefits, coverage, time limits or other provisions of any insurance policy&quot; that may
        apply. When the basis of the insurer&apos;s valuation is embedded in a file it refuses to
        share, the insurer is effectively concealing the methodology behind its payment &mdash;
        which is inconsistent with these regulatory requirements.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Other States
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While this article focuses on California law, most states have analogous regulations
        requiring insurers to deal fairly and in good faith with their policyholders. Florida,
        for example, has enacted statutes and rules requiring insurers and adjusters to provide
        underlying estimates and to explain any changes that deviate from Xactimate or other
        standardized pricing tools. These laws mandate that all versions of an estimate be
        retained and that detailed explanations accompany any adjustments. Courts in Colorado
        and other jurisdictions have ordered production of native Xactimate files in discovery
        when carriers objected. The trend is clearly toward greater transparency.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Request the ESX File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your request should be in writing, should specifically reference the ESX file format,
        and should cite the applicable statute. A verbal request is easy for the carrier to
        ignore or later deny receiving. Below is sample language you can adapt for your own
        written request.
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-600 mb-6">
        <p className="mb-2">
          Re: Claim No. [CLAIM NUMBER] &mdash; Request for Claim-Related Documents
        </p>
        <p className="mb-2">
          Dear [Adjuster/Claims Manager]:
        </p>
        <p className="mb-2">
          Pursuant to California Insurance Code Section 2071 and 10 CCR Section 2695.7, I am
          requesting copies of all claim-related documents pertaining to the above-referenced
          claim, including but not limited to the native Xactimate project file(s) in ESX format
          for all estimates prepared in connection with this claim.
        </p>
        <p className="mb-2">
          I am specifically requesting the ESX file(s), not the PDF printout(s). The ESX file is
          the native Xactimate project file containing the estimate data, settings,
          measurements, line items, depreciation calculations, labor efficiency configurations,
          and all other parameters used to generate the estimate.
        </p>
        <p className="mb-2">
          Under Insurance Code Section 2071, you are required to provide copies of claim-related
          documents within 15 calendar days of this request. The Xactimate project file is a
          claim-related document as defined by the statute &mdash; it is the repair estimate
          itself, containing all valuation, measurement, and loss adjustment calculations.
        </p>
        <p>
          Please provide the ESX file(s) via email attachment or secure file transfer at your
          earliest convenience.
        </p>
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Send this request via email with a read receipt, or via certified mail. If your claim is
        being handled through a Public Adjuster or attorney, they should make the request on your
        behalf using their letterhead.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Carriers Do When You Ask &mdash; and Why Their Excuses Fail
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Requesting the ESX file will almost certainly meet resistance. Carriers have developed a
        predictable set of responses designed to avoid providing the native file. Here are the
        most common objections and why each one fails.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;We Already Provided You the Estimate&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier will point to the PDF it already sent and claim your request has been
        satisfied. This is like an employer telling you they already gave you your pay stub when
        you asked for the underlying payroll records. The PDF is a summary generated from the
        ESX file. It is not the estimate itself &mdash; it is a printout of selected data from
        the estimate. The statute requires the insurer to provide the claim-related document,
        which is the ESX file. The PDF is a derivative of that document, not a substitute for it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;The ESX File Is Proprietary&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will claim that the ESX format is proprietary to Xactware/Verisk and
        therefore cannot be shared. This argument conflates the software with the data. Yes,
        Xactimate is proprietary software developed by Verisk. But the estimate data the
        adjuster entered into that software is not Verisk&apos;s intellectual property &mdash; it
        is the carrier&apos;s work product on the policyholder&apos;s claim. The ESX file was
        created by the carrier&apos;s adjuster, using the carrier&apos;s software license, to
        evaluate the policyholder&apos;s loss. The file format may be proprietary; the claim data
        inside it is not.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;We Don&apos;t Have the Ability to Export It&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is simply untrue. Xactimate has built-in export functionality for ESX files. In
        Xactimate Desktop, the adjuster can export any project as an ESX file in seconds. In
        Xactimate Online, the same export is available. Through XactAnalysis &mdash; the
        platform carriers use to manage and assign claims &mdash; a project can be exported as
        an ESX file with a right-click. Every adjuster and every claims management system that
        uses Xactimate has the ability to export the ESX file. A carrier that claims otherwise
        is being dishonest about its own software capabilities.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;You Don&apos;t Have Xactimate, So It Would Be Useless to You&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the policyholder personally owns Xactimate is irrelevant. The policyholder may
        have retained a Public Adjuster, an attorney, or a contractor who does have Xactimate.
        The insurer does not get to decide what the policyholder is or is not capable of doing
        with the documents to which they are legally entitled. A bank does not refuse to provide
        account statements because the customer might not understand them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;We Can Give You a More Detailed PDF Instead&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A more detailed PDF is still a PDF &mdash; a static, non-editable printout. No matter
        how many pages the PDF contains, it will not show you the labor efficiency tier, the
        price list version, or the depreciation methodology in the same structured, reviewable
        format that the native ESX file provides. The detailed PDF is not what was requested,
        and it is not what the law requires the carrier to produce when the underlying document
        exists in electronic form.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Delay and Silence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common response is no response. The carrier ignores your request, hoping you
        will drop it. This is why written requests with read receipts are essential. After 15
        calendar days without production, the carrier is in violation of &sect;2071. At that
        point, you have the basis for a complaint to the{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
          California Department of Insurance
        </Link>{' '}
        and, depending on the broader context of the claim, potential evidence of bad faith
        claims handling.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Look for Once You Have the ESX File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you obtain the ESX file, a qualified reviewer &mdash; a Public Adjuster, an
        experienced contractor, or an attorney&apos;s expert &mdash; can open it in Xactimate
        and examine every element of the carrier&apos;s estimate. Here are the specific items
        to scrutinize.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Labor Efficiency Tier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Check which{' '}
        <Link href="/resources/xactimate-labor-efficiency-settings" className="text-[#2E74B5] underline">
          labor efficiency tier
        </Link>{' '}
        the adjuster selected. Xactimate offers three tiers, each reflecting different job
        conditions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Restoration/Remodel/Service</strong> &mdash; the appropriate setting for most
          insurance repair work, which accounts for working in an occupied structure, protecting
          existing finishes, limited access, and other real-world constraints
        </li>
        <li>
          <strong>Large Restoration/Remodel</strong> &mdash; reduces labor pricing by
          approximately 5&ndash;10% compared to the standard tier, assuming economies of scale
          that may or may not exist on your project
        </li>
        <li>
          <strong>New Construction/Total Rebuild</strong> &mdash; assumes open, unoccupied
          conditions with maximum efficiency; inappropriate for nearly all repair work in
          existing, occupied structures
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster selected anything other than Restoration/Remodel/Service for a standard
        insurance repair in an occupied home, the labor calculations across the entire estimate
        are artificially reduced. This is one of the most impactful &mdash; and most hidden
        &mdash; ways carriers suppress estimate totals.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Price List Date and Region
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verify that the price list used in the estimate corresponds to your geographic area and
        the date of loss (or later, since material and labor costs generally rise over time). If
        the adjuster used a price list from a different region or an outdated publication date,
        every unit price in the estimate may be wrong. In catastrophe situations &mdash;
        wildfires, hurricanes, widespread storm damage &mdash; demand-driven price increases are
        particularly significant, and using a pre-event price list can dramatically understate
        the actual cost of repairs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Excluded and Missing Line Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compare the line items in the carrier&apos;s estimate against the actual scope of
        damage. Common items that carriers exclude or &quot;forget&quot; include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Content manipulation (moving furniture to access damaged areas)</li>
        <li>Floor and surface protection during construction</li>
        <li>Removal and reinstallation of fixtures, switch plates, outlet covers, and trim</li>
        <li>Texture matching for walls and ceilings</li>
        <li>Prime coat before paint application</li>
        <li>Masking and taping for paint preparation</li>
        <li>Haul-off and disposal of debris</li>
        <li>Temporary repairs and emergency services</li>
        <li>Permits and code compliance items</li>
        <li>Cleaning after construction</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        With the ESX file open in Xactimate, a reviewer can add the missing line items directly
        into the estimate to show the true cost difference. This is fundamentally different from
        arguing about a PDF &mdash; it is building the corrected estimate in the same software
        the carrier used, using the same pricing database.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Depreciation Schedules
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Examine the depreciation applied to each line item. Look for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Depreciation applied to labor</strong> &mdash; in California, labor costs
          should not be depreciated. Labor does not lose value over time. If the carrier has
          depreciated labor line items, that amount should be removed from the depreciation
          holdback.
        </li>
        <li>
          <strong>Excessive depreciation percentages</strong> &mdash; a 10-year-old roof does
          not warrant 50% depreciation if it had a 30-year expected life span. The useful life
          and condition at the time of loss should drive the depreciation calculation.
        </li>
        <li>
          <strong>Inconsistent depreciation</strong> &mdash; different line items for the same
          component depreciated at different rates, suggesting the adjuster was making arbitrary
          rather than methodical decisions.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Overhead and Profit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Check whether O&amp;P is included and at what rate. The industry standard is 10%
        overhead and 10% profit (20% combined) on top of the net repair cost. If the carrier
        excluded O&amp;P entirely or reduced the percentages, the ESX file will show this
        clearly. For any claim involving multiple trades &mdash; which is nearly every property
        claim of any significance &mdash; O&amp;P should be included. Xactimate&apos;s own
        methodology supports O&amp;P inclusion for multi-trade projects.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Notes and Internal Comments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        ESX files can contain notes the adjuster entered during the estimating process. These
        notes sometimes reveal the adjuster&apos;s reasoning for excluding items, instructions
        received from supervisors, or acknowledgments of damage that were not reflected in the
        final line items. In litigation, these notes can be significant evidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Opening ESX Files Without an Xactimate License
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the practical challenges with ESX files is that they are designed to be opened in
        Xactimate, which requires a paid subscription. If you are a policyholder without an
        Xactimate license, here are your options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Retain a Public Adjuster or estimating professional</strong> &mdash; any
          licensed Public Adjuster or experienced estimator will have Xactimate and can open,
          review, and rebuild the estimate from the ESX file. This is the best option for a
          thorough, line-by-line analysis.
        </li>
        <li>
          <strong>Hire a contractor with Xactimate</strong> &mdash; many restoration
          contractors and general contractors who work on insurance claims maintain Xactimate
          licenses. They can import the ESX file and prepare a competing estimate using the same
          software.
        </li>
        <li>
          <strong>Provide it to your attorney&apos;s expert</strong> &mdash; if your claim is
          in litigation or you have retained an attorney, their construction expert or
          consulting adjuster will use Xactimate to analyze the file.
        </li>
        <li>
          <strong>Extract basic data manually</strong> &mdash; because the ESX file is
          technically a ZIP archive, it is possible to rename the .esx extension to .zip and
          extract its contents. The internal files are structured data (XML and related formats)
          that a technically proficient person can read. However, this approach gives you raw
          data without Xactimate&apos;s interface to interpret it, so it is useful only for
          limited purposes such as identifying the price list version or labor efficiency
          setting.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no fully functional free viewer for ESX files that replicates what Xactimate
        shows. Some universal file viewers claim ESX compatibility, but they cannot reliably
        parse the file&apos;s full structure. For meaningful analysis, access to Xactimate
        itself &mdash; whether through your own license or through a professional you have
        retained &mdash; is necessary.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Attorneys and Public Adjusters Use the ESX File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For professionals who handle insurance claim disputes, the ESX file is an indispensable
        tool. Here is how it is used in practice.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Building the Competing Estimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rather than starting from scratch, a Public Adjuster or estimating expert can import the
        carrier&apos;s ESX file into their own Xactimate installation and work from it directly.
        This allows them to keep what the carrier got right, correct what the carrier got wrong,
        and add everything the carrier omitted. The result is a corrected estimate that uses the
        carrier&apos;s own starting point &mdash; making it far more difficult for the carrier
        to dismiss as &quot;inflated&quot; or &quot;unreasonable.&quot; The{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          process of challenging a Xactimate estimate
        </Link>{' '}
        becomes substantially more efficient and effective when you begin with the carrier&apos;s
        own file.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Demonstrating Pattern and Practice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When attorneys handle multiple claims against the same carrier, comparing ESX files
        across claims can reveal systematic practices: the same labor efficiency manipulation,
        the same excluded line items, the same depreciation overages. This kind of evidence is
        powerful in bad faith litigation because it shows that the underpayment was not an
        isolated mistake but a deliberate pattern.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Discovery and Litigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In litigation, the ESX file becomes a key discovery item. Courts have increasingly
        recognized that the native Xactimate file &mdash; not just the PDF printout &mdash;
        must be produced. In a notable Colorado ruling, a court rejected the insurer&apos;s
        objection that policyholders already had the PDF estimate and ordered production of the
        native ESX files under a protective order. The court recognized that the native file
        contains information not available in the PDF, including settings, modifications, and
        metadata that are relevant to whether the estimate was prepared in good faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorneys who represent policyholders should include the native Xactimate file in every
        initial discovery request. The request should specify the ESX format by name, request all
        versions and revisions of the estimate, and request the XactAnalysis activity log
        showing when the estimate was created, modified, and by whom.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Appraisal Proceedings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal process
        </Link>, having the carrier&apos;s ESX file gives your appraiser a tremendous
        advantage. Instead of rebuilding the entire estimate from scratch, the appraiser can
        start with the carrier&apos;s file, identify every deficiency, and present a corrected
        version that speaks the same language as the carrier&apos;s original. This makes the
        umpire&apos;s job easier and makes your position harder to dismiss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Transparency and Accountability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fight over the ESX file is ultimately a fight over transparency. Insurance
        companies have built their claims-handling processes around Xactimate, and they have
        benefited enormously from the ability to manipulate estimate settings behind the scenes
        while presenting policyholders with a clean PDF that reveals nothing about how the
        numbers were generated. The ESX file pulls back the curtain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier knows that its ESX file will be reviewed by a knowledgeable professional,
        it has a powerful incentive to build the estimate correctly in the first place. When
        carriers know their adjusters can hide behind a PDF, there is little accountability for
        the settings choices and line-item omissions that systematically reduce claim payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding{' '}
        <Link href="/resources/how-to-read-verisk-white-paper" className="text-[#2E74B5] underline">
          Verisk&apos;s own published methodology
        </Link>{' '}
        and the{' '}
        <Link href="/resources/common-xactimate-errors" className="text-[#2E74B5] underline">
          common errors found in carrier-prepared Xactimate estimates
        </Link>{' '}
        makes the ESX file even more valuable. When you can point to Verisk&apos;s own white
        papers and show that the carrier&apos;s adjuster deviated from the software
        manufacturer&apos;s published guidelines, the carrier&apos;s position becomes
        increasingly difficult to defend.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: What to Do Right Now
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have an open property damage claim and have received an estimate from your
        insurance company, take these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the ESX file in writing.</strong> Use the sample language above or
          adapt it to your situation. Cite California Insurance Code &sect;2071 and 10 CCR
          &sect;2695.7. Send it via email with a read receipt and keep a copy for your records.
        </li>
        <li>
          <strong>Set a deadline.</strong> The carrier has 15 calendar days to comply. Note the
          deadline in your records.
        </li>
        <li>
          <strong>Do not accept a PDF as a substitute.</strong> If the carrier responds with a
          PDF, reply in writing reiterating your request for the native ESX file and noting that
          the PDF does not satisfy your request under the statute.
        </li>
        <li>
          <strong>Escalate if ignored.</strong> If the 15-day deadline passes without
          production, send a follow-up letter noting the violation. If the carrier continues to
          refuse, file a complaint with the California Department of Insurance and consult with
          an attorney about your options.
        </li>
        <li>
          <strong>Have the file reviewed by a professional.</strong> Once you obtain the ESX
          file, do not try to interpret it on your own unless you have Xactimate experience.
          Provide it to a Public Adjuster, an attorney&apos;s expert, or a qualified contractor
          who can open it in Xactimate and give you a detailed analysis of every setting,
          omission, and error.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file is your claim. It contains the data that determined how much your insurance
        company decided to pay you. You are entitled to see it, and once you do, you will almost
        certainly find that the carrier&apos;s estimate needs significant correction.
      </p>
    </>
  )
}
