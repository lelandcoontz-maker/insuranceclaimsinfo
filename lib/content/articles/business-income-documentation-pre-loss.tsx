import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Business Income Documentation: What You Need Before a Loss Hits',
  description:
    'How to organize tax returns, P&L statements, bank records, and seasonal revenue data before a loss occurs so you can maximize your business interruption insurance recovery.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law as a Licensed Public Adjuster. It is not legal advice. Business
          income claims involve complex financial analysis that depends on specific policy language,
          accounting methods, and the unique circumstances of each business. If you have a disputed
          claim involving business income documentation, consult with a licensed California attorney
          who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a fire, flood, or other covered peril forces a business to close, the{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business income
        </Link>{' '}
        claim is often the largest and most contentious part of the insurance recovery. Business
        income coverage replaces the net income and continuing expenses the business would have
        earned during the{' '}
        <Link
          href="/resources/period-of-restoration-disputes"
          className="text-blue-700 underline hover:text-blue-900"
        >
          period of restoration
        </Link>{' '}
        &mdash; the time it takes to repair or replace the damaged property and resume operations.
        For many businesses, the business income loss dwarfs the property damage itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But here is the problem: the documentation carriers demand to evaluate a business income
        claim is extensive, detailed, and time-sensitive. They want tax returns, profit and loss
        statements, bank records, seasonal revenue data, growth projections, contracts, and more.
        If these records were stored at the business premises and destroyed in the same event that
        caused the loss, the policyholder faces the impossible task of reconstructing years of
        financial history while simultaneously dealing with property damage, displaced employees,
        and lost customers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is to organize, maintain, and protect this documentation before a loss occurs.
        Every dollar of business income recovery depends on the policyholder&rsquo;s ability to
        prove what the business was earning, what it would have earned, and what continuing expenses
        it incurred during the shutdown. Businesses that have this documentation readily available
        recover faster and more completely. Businesses that do not leave money on the table &mdash;
        or face outright denials.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Pre-Loss Documentation Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A business income claim is fundamentally a proof-of-loss exercise. The policyholder must
        demonstrate the amount of income the business <em>would have earned</em> during the period
        of restoration &mdash; a hypothetical projection based on historical performance. The
        insurer is not simply paying what the business earned last year; it is paying what the
        business would have earned during a specific future period had the loss not occurred.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This requires:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Historical financial data</strong> to establish the baseline &mdash; what the
          business was earning before the loss.
        </li>
        <li>
          <strong>Seasonal and trend data</strong> to project what the business would have earned
          during the specific months of the restoration period. A restaurant that suffers a fire
          in October and reopens in March must prove what its revenue would have been during the
          holiday season &mdash; not just its annual average.
        </li>
        <li>
          <strong>Growth or decline evidence</strong> to adjust projections for business trends.
          If the business was growing at 15% year-over-year, the projection should reflect that
          trajectory. If a new competitor opened nearby, the insurer may argue the business was
          declining.
        </li>
        <li>
          <strong>Expense documentation</strong> to prove which expenses continued during the
          shutdown (rent, loan payments, insurance premiums, key employee salaries) and which
          ceased (raw materials, hourly labor, utilities).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without documentation to support each element, the insurer will either reduce the claim or
        deny portions of it entirely. Carriers do not give policyholders the benefit of the doubt
        on unsubstantiated financial projections.
      </p>

      <CalloutBox variant="important" title="The Insurer Will Scrutinize Every Number">
        <p>
          Business income claims are reviewed by forensic accountants retained by the insurance
          company. These accountants are trained to find reasons to reduce the claim &mdash; not
          to maximize it. They will challenge revenue projections, reclassify continuing expenses
          as non-continuing, dispute growth trends, and question any number that is not supported
          by contemporaneous documentation. The more complete and organized your pre-loss records
          are, the fewer opportunities the insurer&rsquo;s accountant has to erode your recovery.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Carriers Will Demand: The Complete Documentation List
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a business income claim is filed, the carrier will typically request some or all of
        the following. Having these organized and accessible before a loss occurs dramatically
        accelerates the claims process and strengthens your negotiating position.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Tax Returns
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers will request a minimum of two to three years of complete federal and state tax
        returns for the business entity. This includes all schedules, attachments, and K-1s. Tax
        returns establish the baseline income and expense profile of the business. If the business
        is a sole proprietorship, the personal return with Schedule C is required. For
        partnerships and S-corporations, the entity return plus individual K-1s. For
        C-corporations, Form 1120.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Why pre-loss preparation matters:</strong> If your tax returns are stored only at
        the business location and destroyed in the loss, reconstructing them from the IRS takes
        time. IRS transcripts (Form 4506-T) can take weeks to obtain and do not include all
        schedules and attachments. Keep copies at a separate location or in cloud storage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Profit and Loss Statements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Monthly or quarterly profit and loss (P&amp;L) statements for the current year and at
        least two prior years. Annual P&amp;L statements are insufficient because they obscure
        seasonal patterns. A business that earns 60% of its revenue in Q4 will appear to have
        uniform earnings on an annual P&amp;L, masking the fact that a Q4 loss is far more
        damaging than a Q1 loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Monthly P&amp;L statements are ideal because they reveal the revenue and expense pattern
        by month, showing exactly when the business peaks and troughs. This monthly data is
        critical for proving that the{' '}
        <Link
          href="/resources/period-of-restoration-disputes"
          className="text-blue-700 underline hover:text-blue-900"
        >
          period of restoration
        </Link>{' '}
        coincided with high-revenue months.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Bank Statements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Complete bank statements for all business accounts for the current year and at least two
        prior years. Bank statements corroborate the P&amp;L statements and tax returns. They
        show actual deposits (revenue), actual payments (expenses), and the timing of both. Bank
        statements also reveal revenue sources that may not appear on a P&amp;L &mdash; cash
        deposits, electronic transfers, merchant processing deposits, and other income streams.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most banks offer digital access to historical statements. Download and save PDF copies
        of at least 36 months of statements for every business account. Do not rely solely on
        online access &mdash; banks sometimes limit how far back you can view statements online,
        and access may be disrupted if the bank account itself is affected by the loss.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Seasonal Revenue Data
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Detailed monthly revenue data broken down by revenue source, product line, or service
        category. This is especially critical for seasonal businesses, but even non-seasonal
        businesses have revenue fluctuations. A CPA firm earns more during tax season. A
        landscaper earns more in spring and summer. A restaurant earns more on weekends and
        holidays.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&rsquo;s forensic accountant will use seasonal data to evaluate whether the
        business income claim accurately reflects what the business would have earned during the
        specific months of the restoration period. If you cannot prove your seasonal revenue
        pattern, the insurer will default to a flat monthly average &mdash; which will understate
        the loss if the restoration period overlaps with your peak months.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Contracts and Agreements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Copies of all current contracts, agreements, purchase orders, and commitments that
        generate revenue. This includes service contracts, vendor agreements, lease commitments,
        recurring customer agreements, and letters of intent. Contracts prove future revenue that
        the business was legally entitled to receive. A catering company with $200,000 in booked
        events for the upcoming quarter has documentation that directly supports a business income
        projection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For businesses with{' '}
        <Link
          href="/resources/contingent-business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          contingent business interruption
        </Link>{' '}
        coverage, contracts with key suppliers and customers are also essential to document the
        dependency relationships that trigger contingent BI coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Growth Projections and Business Plans
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the business was expanding &mdash; opening new locations, launching new products,
        hiring additional staff &mdash; documentation of these plans supports a higher business
        income projection. The key is that the documentation must predate the loss. A business
        plan written six months before the fire that projects 20% revenue growth is credible
        evidence. A projection prepared after the loss for the purpose of inflating the claim is
        not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maintain copies of business plans, loan applications (which contain financial projections),
        investor presentations, marketing plans, and any other documents that reflect the
        business&rsquo;s expected trajectory. These documents carry weight precisely because they
        were created for purposes other than insurance recovery.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Payroll Records
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Complete payroll records including employee lists, wage rates, hours worked, payroll tax
        filings (Form 941), and W-2 summaries. Payroll is typically the largest continuing expense
        in a business income claim. The insurer will scrutinize which employees the business
        retained during the shutdown (continuing expense) versus which were laid off (non-continuing
        expense). Pre-loss payroll records establish the baseline and support the claim for
        continuing payroll during the restoration period.
      </p>

      <CalloutBox variant="tip" title="Payroll Is Usually the Biggest Battle">
        <p>
          Insurers frequently argue that employee wages are &ldquo;non-continuing&rdquo; expenses
          that should be deducted from the business income calculation. If you laid off employees
          during the shutdown, the insurer will deduct their wages. If you continued paying
          employees to retain them for reopening, the insurer may still argue those wages are not
          &ldquo;necessary&rdquo; continuing expenses. Pre-loss payroll records showing each
          employee&rsquo;s role, skills, and training investment support the argument that
          retaining key employees was a reasonable and necessary business decision.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Business Income Worksheet
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ISO provides a Business Income Report/Worksheet that insurers use to evaluate business
        income exposure and claims. While this worksheet is typically completed at policy inception
        or renewal to help set coverage limits, completing it annually serves a dual purpose: it
        helps ensure your{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business income coverage
        </Link>{' '}
        limit is adequate, and it creates a contemporaneous record of your business income exposure
        that supports a future claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The worksheet calculates business income exposure by adding:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Net income (or net loss) before income taxes</li>
        <li>Payroll expense (if ordinary payroll is included in coverage)</li>
        <li>All other operating expenses that would continue during a shutdown</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is the estimated annual business income exposure. Dividing by twelve gives the
        monthly exposure. Multiplying by the estimated maximum period of restoration (in months)
        gives the total exposure that should be compared to the policy&rsquo;s business income
        limit. If the exposure exceeds the limit, the business is underinsured for business income
        &mdash; a gap that many business owners do not discover until after a loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Calculate Your Exposure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Calculating business income exposure requires estimating two variables: the monthly
        business income figure and the maximum probable period of restoration.
      </p>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">
          Example: Restaurant Business Income Exposure
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Annual net income before taxes: $180,000</li>
          <li>Annual payroll (to be continued during shutdown): $320,000</li>
          <li>Annual continuing expenses (rent, insurance, utilities, loan payments): $156,000</li>
          <li>Total annual business income exposure: $656,000</li>
          <li>Monthly exposure: $656,000 &divide; 12 = approximately $54,667</li>
          <li>Estimated maximum period of restoration: 9 months</li>
          <li>Total exposure: $54,667 &times; 9 = approximately $492,000</li>
        </ul>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">
          If this restaurant carries only $250,000 in business income coverage &mdash; a common
          limit on a Business Owners Policy &mdash; it is underinsured by nearly $250,000 for a
          severe loss. And this calculation does not account for the{' '}
          <Link
            href="/resources/extra-expense-coverage"
            className="text-blue-700 underline hover:text-blue-900"
          >
            extra expenses
          </Link>{' '}
          the business may incur to expedite reopening or operate from a temporary location.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Completing this calculation annually and sharing it with your agent ensures your business
        income limit keeps pace with your actual exposure. The calculation itself becomes
        documentation that supports a future claim because it was prepared in the ordinary course
        of business, not after a loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Working with Your CPA Before a Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your CPA is one of the most important resources for pre-loss business income documentation.
        A proactive relationship with your accountant can dramatically improve your position if a
        claim is ever filed:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Request monthly financial statements.</strong> Even if your CPA currently
          prepares only annual statements, ask for monthly or quarterly P&amp;L statements and
          balance sheets. The incremental cost is modest compared to the value of monthly data in
          a business income claim.
        </li>
        <li>
          <strong>Ensure your books distinguish between fixed and variable expenses.</strong> In a
          business income claim, the insurer deducts non-continuing (variable) expenses from the
          loss calculation. If your books do not clearly separate fixed expenses (rent, insurance,
          loan payments) from variable expenses (raw materials, hourly labor, shipping), the
          insurer&rsquo;s forensic accountant will make that classification for you &mdash; and
          their classification will favor the insurer.
        </li>
        <li>
          <strong>Document revenue by category and season.</strong> Ask your CPA to track revenue
          by source, product line, or service category on a monthly basis. This granular data
          supports more accurate projections during a claim.
        </li>
        <li>
          <strong>Maintain a narrative of business trends.</strong> A brief quarterly memo from
          your CPA noting significant changes &mdash; new clients, lost accounts, expansions,
          market conditions &mdash; creates a contemporaneous record that supports or explains
          revenue trends. A memo written in March noting &ldquo;Q1 revenue up 18% due to new
          corporate catering contract&rdquo; is powerful evidence in a July business income claim.
        </li>
        <li>
          <strong>Review insurance coverage annually with your CPA.</strong> Your accountant
          understands your financial exposure better than your insurance agent. An annual
          conversation between your CPA, your agent, and you ensures that business income limits
          reflect actual exposure.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Tax Minimization vs. Claim Maximization">
        <p>
          There is an inherent tension between tax strategy and insurance recovery. Many businesses
          aggressively minimize reported income for tax purposes &mdash; accelerating deductions,
          deferring revenue recognition, and maximizing write-offs. When a business income claim
          is filed, the insurer uses those same tax returns as the baseline for calculating lost
          income. A business that reported $100,000 in net income on its tax return will have a
          difficult time claiming $200,000 in lost income during the restoration period. Your
          pre-loss financial documentation should accurately reflect the true economic performance
          of the business. Discuss this tension with your CPA.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When Documentation Is Destroyed in the Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a fire or other peril destroys the business premises, it often destroys the financial
        records stored there as well. This is precisely the scenario that pre-loss preparation
        prevents, but if it happens, several recovery options exist:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>IRS transcripts</strong> &mdash; Request tax return transcripts using Form
          4506-T. These are free but may take several weeks and do not include all schedules and
          attachments. Wage and income transcripts (showing Forms W-2 and 1099 issued to the
          business) can supplement the return transcript.
        </li>
        <li>
          <strong>Bank records</strong> &mdash; Contact every bank where the business holds
          accounts and request complete statement histories. Most banks can provide several years
          of historical statements, though fees may apply for older records.
        </li>
        <li>
          <strong>CPA records</strong> &mdash; Your accountant should have copies of all tax
          returns and financial statements they prepared. Contact your CPA immediately.
        </li>
        <li>
          <strong>Payroll service records</strong> &mdash; If you use a payroll service (ADP,
          Gusto, Paychex), they maintain complete payroll records accessible online.
        </li>
        <li>
          <strong>Point-of-sale and merchant processing records</strong> &mdash; POS systems and
          credit card processors maintain transaction histories that can reconstruct revenue data.
          Contact your POS provider and merchant processor for historical reports.
        </li>
        <li>
          <strong>Cloud-based accounting software</strong> &mdash; QuickBooks Online, Xero, and
          similar platforms store financial data in the cloud, surviving physical destruction of
          the premises. If your accounting is on desktop software only, this is a strong reason
          to migrate.
        </li>
        <li>
          <strong>Vendor and customer records</strong> &mdash; Your suppliers have records of what
          they sold you. Your customers have records of what they purchased. These third-party
          records can corroborate revenue and expense data when your own records are unavailable.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reconstructing financial records after a loss is possible but time-consuming, expensive,
        and inherently less credible to the insurer than contemporaneous records. An insurer
        reviewing reconstructed records will scrutinize them more aggressively than original
        documents. Pre-loss backup and off-site storage eliminate this problem entirely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Backup and Storage: Protecting Your Documentation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The documentation described above is only useful if it survives the loss that triggers the
        claim. Physical records stored solely at the business premises are vulnerable to the same
        perils that threaten the business itself. A comprehensive backup strategy should include:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Cloud storage.</strong> Store digital copies of all financial records in a cloud
          platform (Google Drive, Dropbox, OneDrive, or a dedicated backup service). Cloud
          storage survives any physical event at the business location.
        </li>
        <li>
          <strong>Cloud-based accounting.</strong> If your business uses desktop accounting
          software, migrate to a cloud-based platform. QuickBooks Online, Xero, and FreshBooks
          maintain your financial data on remote servers, accessible from any device. This is the
          single most impactful step for protecting business income documentation.
        </li>
        <li>
          <strong>Off-site physical copies.</strong> Keep copies of tax returns, key contracts,
          and the most recent financial statements at a second location &mdash; your home, a safe
          deposit box, or your CPA&rsquo;s office.
        </li>
        <li>
          <strong>Automated backups.</strong> Set up automated daily or weekly backups of all
          digital financial files. Do not rely on manual backup processes that can be forgotten
          during busy periods.
        </li>
        <li>
          <strong>Ensure your CPA retains copies.</strong> Confirm that your accountant maintains
          copies of all returns, financial statements, and work papers, and that they have their
          own backup and retention policies.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Industry-Specific Documentation Needs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Different industries present different documentation challenges. Beyond the universal
        requirements listed above, consider these industry-specific needs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Restaurants and hospitality</strong> &mdash; Daily sales reports, reservation
          records, catering contracts, special event bookings, and seasonal menu pricing all
          support revenue projections. Tip reporting and cash sales require particular attention
          as carriers will challenge undocumented revenue.
        </li>
        <li>
          <strong>Professional services</strong> &mdash; Billable hours records, client engagement
          letters, retainer agreements, and work-in-progress reports document both current revenue
          and pipeline revenue that would have been earned during the restoration period.
        </li>
        <li>
          <strong>Retail</strong> &mdash; Point-of-sale transaction data, inventory management
          reports, vendor purchase orders, and e-commerce platform analytics. Seasonal inventory
          data also supports claims under a peak season endorsement.
        </li>
        <li>
          <strong>Manufacturing</strong> &mdash; Production logs, raw material purchase orders,
          customer delivery schedules, backlog reports, and capacity utilization data document
          both current and projected output.
        </li>
        <li>
          <strong>Construction</strong> &mdash; Active contracts, bid proposals, project
          schedules, and bonding documentation establish the pipeline of work that would have
          generated revenue during the restoration period.
        </li>
        <li>
          <strong>Healthcare</strong> &mdash; Patient volume data, appointment schedules, payer
          mix analysis, and reimbursement rate schedules support revenue projections in practices
          where documentation of future appointments directly proves future revenue.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The{' '}
        <Link
          href="/resources/business-income-waiting-period"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Waiting Period
        </Link>{' '}
        and Documentation Timing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most business income policies include a waiting period &mdash; typically 72 hours &mdash;
        before coverage begins. No business income is payable for the first 72 hours after the
        loss. This means documentation of the loss timeline is critical: when the event occurred,
        when operations ceased, when the waiting period expired, and when the covered loss period
        began.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pre-loss documentation of daily or weekly revenue patterns supports the calculation of
        income lost during and after the waiting period. A business that can prove it generates
        $5,000 per day during its peak season can precisely quantify the waiting period deduction
        and the covered loss that follows.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A business income claim is only as strong as the documentation behind it. The time to
        organize, protect, and supplement that documentation is now &mdash; not after a fire has
        destroyed your records and your insurer is demanding proof of earnings you can no longer
        access. Monthly financial statements, multi-year tax returns, bank records, seasonal
        revenue data, contracts, payroll records, and growth projections should all be maintained
        in cloud storage or off-site backups. Your CPA should be a partner in this process,
        preparing the monthly data and annual exposure calculations that support both adequate
        coverage limits and future claim recovery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The businesses that recover fully from a loss are not necessarily the ones with the largest
        policies &mdash; they are the ones that can prove what they lost. Documentation is the
        difference between a six-figure recovery and a six-figure shortfall.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For related reading, see our articles on{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business interruption coverage
        </Link>
        ,{' '}
        <Link
          href="/resources/period-of-restoration-disputes"
          className="text-blue-700 underline hover:text-blue-900"
        >
          period of restoration disputes
        </Link>
        ,{' '}
        <Link
          href="/resources/business-income-waiting-period"
          className="text-blue-700 underline hover:text-blue-900"
        >
          the business income waiting period
        </Link>
        ,{' '}
        <Link
          href="/resources/extra-expense-coverage"
          className="text-blue-700 underline hover:text-blue-900"
        >
          extra expense coverage
        </Link>
        , and{' '}
        <Link
          href="/resources/contingent-business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          contingent business interruption
        </Link>
        .
      </p>

      <CalloutBox variant="legal" title="Consult a Professional">
        <p>
          This article provides general educational information about business income documentation
          and preparation. It does not constitute legal, accounting, or insurance advice. Business
          income calculations and documentation requirements vary by policy form, industry, and
          jurisdiction. Consult your CPA, insurance professional, a licensed public adjuster, or
          an attorney for guidance specific to your situation.
        </p>
      </CalloutBox>
    </>
  )
}
