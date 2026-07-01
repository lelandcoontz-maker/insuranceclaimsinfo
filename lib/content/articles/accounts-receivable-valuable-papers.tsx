import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "Accounts Receivable and Valuable Papers Coverage",
  description:
    "CP 04 04 and CP 04 07 protect the information value of business records. Here is what these endorsements cover and how to use them on a claim.",
  summary:
    'Accounts receivable (CP 04 04) and valuable papers (CP 04 07) coverage protect the value of business records destroyed in a loss, such as the cost to reconstruct billing data or documents. They are endorsements you must add, not automatic coverage.',
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
        A fire burns through a small professional office on a Saturday night.
        By Monday morning, the building is a total loss. The owner tallies
        what was destroyed: furniture, computers, equipment, files. The
        building can be rebuilt. The furniture can be replaced. But the filing
        cabinets held something that no amount of rebuilding can restore
        &mdash; the records that prove how much the business is owed, by
        whom, and under what terms. Client contracts, invoices, account
        ledgers, architectural drawings, proprietary formulas, legal case
        files &mdash; all reduced to ash.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without those records, the business cannot collect the money its
        customers owe. It cannot prove the terms of existing contracts. It
        cannot reconstruct proprietary designs or formulas. The physical
        destruction of the building was devastating. The destruction of the
        information inside it may be fatal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the gap that two commonly overlooked commercial property
        endorsements are designed to fill:{' '}
        <strong>Accounts Receivable Coverage (CP 04 04)</strong> and{' '}
        <strong>Valuable Papers and Records Coverage (CP 04 07)</strong>.
        These are not exotic or unusual coverages. They are standard ISO
        endorsements available on virtually any commercial property policy.
        Yet a striking number of businesses &mdash; including businesses
        whose entire value resides in their records &mdash; carry neither
        one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Standard BPP Coverage Does Not Protect Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business owners often assume that their{' '}
        <Link
          href="/resources/business-personal-property-claims"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business personal property (BPP)
        </Link>{' '}
        coverage will handle any loss to files and records. It will not
        &mdash; at least not in the way most business owners expect. Under
        the standard ISO commercial property form (CP 00 10), BPP coverage
        applies to tangible personal property owned by the insured. Files and
        records are technically tangible personal property, but the policy
        values them as physical objects &mdash; the cost of blank paper,
        blank media, and the physical binders that held them. It does not
        cover the cost of the <em>information</em> recorded on those
        materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a fire destroys a filing cabinet full of client contracts, BPP
        coverage will pay for a new filing cabinet and a stack of blank
        paper. It will not pay the $50,000 in professional labor needed to
        reconstruct those contracts from third-party sources. It will not pay
        the $120,000 in accounts receivable that can no longer be collected
        because the business has no documentation to prove the debts exist.
      </p>

      <CalloutBox variant="important" title="Three Separate Exposures">
        <p>
          The destruction of business records creates three distinct financial
          exposures that standard BPP coverage does not adequately address:
          (1) the cost to <strong>reconstruct</strong> the records
          themselves, (2) the <strong>uncollectable receivables</strong> that
          result from lost account documentation, and (3) the{' '}
          <strong>interest charges</strong> on loans the business must take
          to offset uncollected revenue. Each exposure requires its own
          coverage solution.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Accounts Receivable Coverage (CP 04 04)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Accounts Receivable Coverage endorsement &mdash; ISO form
        CP 04 04 &mdash; addresses what happens when a business loses the
        records that document money owed to it by customers. This is not
        coverage for the paper itself. It is coverage for the{' '}
        <em>financial consequence</em> of losing the documentation that
        proves debts exist.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a plumbing contractor who completes work for 40 commercial
        clients over the past 90 days, billing a total of $380,000. The
        invoices, signed work orders, and account ledgers are stored in the
        office. A fire destroys everything. Without documentation &mdash; no
        signed work orders, no approved change orders, no delivery receipts
        &mdash; many of those customers will dispute the charges or simply
        refuse to pay. The contractor cannot sue to collect because there is
        no documentation to present in court.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What CP 04 04 Covers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Accounts Receivable endorsement provides coverage for four
        specific categories of loss:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Amounts owed to the insured that become
          uncollectable.</strong> When accounts receivable records are
          destroyed and the insured cannot collect because it can no longer
          prove the debt, the endorsement pays those uncollectable amounts.
          The insurer essentially steps into the shoes of the debtor.
        </li>
        <li>
          <strong>Interest charges on loans taken to offset uncollectable
          amounts.</strong> If the business must borrow money to replace the
          cash flow it would have received from now-uncollectable
          receivables, the endorsement covers the interest charges. Lost
          receivables do not just reduce revenue &mdash; they create an
          immediate cash flow crisis.
        </li>
        <li>
          <strong>Collection expenses in excess of normal collection
          costs.</strong> When records are partially destroyed, the business
          may be able to collect some receivables &mdash; but only by
          incurring extraordinary collection efforts. Additional
          correspondence, legal fees, reconstruction of billing records, and
          extended follow-up all exceed normal collection procedures.
        </li>
        <li>
          <strong>The cost to reconstruct accounts receivable
          records.</strong> This covers the labor and expense of rebuilding
          the accounting records &mdash; re-creating invoices from purchase
          orders, matching payments to accounts, and reestablishing a
          working accounts receivable ledger from whatever fragments and
          third-party records are available.
        </li>
      </ol>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How the Coverage Works
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Accounts receivable coverage is typically written on an open-peril
        (&ldquo;special&rdquo; cause of loss) basis &mdash; any cause of
        loss not specifically excluded is covered, including fire, theft,
        water damage, vandalism, wind, and accidental destruction. The
        coverage limit is selected by the insured based on the maximum amount
        of receivables outstanding at any given time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Selecting the right limit requires understanding your
        business&rsquo;s receivables cycle. A business that bills $100,000
        per month with 60-day payment terms may have $200,000 in receivables
        outstanding at any time. A seasonal business may have $500,000
        outstanding during peak season and $50,000 during the off-season. The
        limit should reflect the maximum probable exposure, not the average.
      </p>

      <CalloutBox variant="info" title="Determining Uncollectable Amounts">
        <p>
          The endorsement requires the insured to make reasonable efforts to
          collect all amounts owed. Whatever remains uncollectable &mdash;
          net of amounts that would have been uncollectable even without the
          loss (normal bad debt) &mdash; is the covered loss. The insurer may
          examine the insured&rsquo;s historical collection rates to
          determine what percentage of receivables would have been collected
          under normal circumstances.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Valuable Papers and Records Coverage (CP 04 07)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While accounts receivable coverage addresses the financial
        consequences of lost billing records, the{' '}
        <Link
          href="/resources/valuable-papers-records"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Valuable Papers and Records Coverage
        </Link>{' '}
        endorsement &mdash; ISO form CP 04 07 &mdash; addresses a broader
        category: the cost of researching, replacing, or restoring any papers
        and records that have value because of the information they contain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical distinction is between the physical medium and the
        information value. A blank sheet of architectural vellum costs a few
        dollars. An original set of construction drawings for a commercial
        building &mdash; representing hundreds of hours of engineering and
        design work &mdash; may cost $75,000 to reconstruct. The valuable
        papers endorsement pays the reconstruction cost, not the paper cost.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What CP 04 07 Covers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The endorsement covers the cost to research, replace, or restore
        papers and records lost or damaged by a covered cause of loss,
        including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contracts and agreements:</strong> Client contracts, vendor
          agreements, lease agreements, licensing deals, partnership
          agreements
        </li>
        <li>
          <strong>Legal documents:</strong> Court filings, depositions,
          discovery materials, corporate formation documents, compliance
          records
        </li>
        <li>
          <strong>Engineering and architectural drawings:</strong>
          Blueprints, structural calculations, site plans, as-built
          drawings, mechanical and electrical schematics
        </li>
        <li>
          <strong>Medical and patient records:</strong> Treatment histories,
          diagnostic imaging, clinical notes, prescription records
        </li>
        <li>
          <strong>Proprietary formulas and recipes:</strong> Manufacturing
          formulas, chemical compositions, food and beverage recipes,
          compounding instructions
        </li>
        <li>
          <strong>Manuscripts, research, and archival records:</strong>{' '}
          Unpublished manuscripts, research papers, corporate archives,
          genealogical records, historical photographs
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Valuation: Reconstruction Cost, Not Replacement Cost
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The endorsement does not pay replacement cost or actual cash value.
        It pays the <strong>actual cost to research and
        reconstruct</strong> the lost information &mdash; professional labor
        at market rates, research fees, retrieval costs from third-party
        sources, and reprographic expenses. An architecture firm that loses
        original drawings will need licensed architects to re-measure
        buildings and re-draft plans at $200 to $350 per hour. A law firm
        must re-obtain court filings, re-order deposition transcripts, and
        re-compile research that took hundreds of billable hours to assemble.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, if a document is truly irreplaceable &mdash; no copy exists
        anywhere and no source can provide the information needed to
        reconstruct it &mdash; the endorsement typically pays only the
        &ldquo;blank value&rdquo; of the physical materials. A one-of-a-kind
        formula developed over decades of experimentation, with no written
        backup, may be worth millions to the business but only a few dollars
        under the policy&rsquo;s blank-value provision.
      </p>

      <CalloutBox variant="warning" title="The Blank Value Limitation">
        <p>
          If a valuable paper or record is deemed truly irreplaceable &mdash;
          no copy exists, no third party can provide the information, and no
          reconstruction is possible &mdash; the insurer&rsquo;s obligation
          under most CP 04 07 forms is limited to the cost of blank
          materials. This makes pre-loss backup the single most important
          risk management step a business can take. Do not wait for a loss to
          discover that your most critical documents are unrecoverable.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Digital Evolution: Cloud Backups Are Not a Complete Solution
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is tempting to dismiss these coverages as relics of a paper-based
        era. Most businesses now maintain digital records, use cloud-based
        accounting software, and store files on redundant servers. The
        assumption is that digital systems eliminate the risk entirely. That
        assumption is wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Digital records face their own set of catastrophic risks:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Server room fires</strong> can wipe out digital records
          just as effectively as they destroy paper files &mdash; especially
          when backups are stored in the same facility or were not properly
          maintained
        </li>
        <li>
          <strong>Ransomware attacks</strong> can encrypt both primary
          systems and backup drives simultaneously, locking an entire
          operational history behind a ransom demand with no paper fallback
        </li>
        <li>
          <strong>Cloud provider failures</strong> can result in data loss,
          account lockouts, or service terminations &mdash; a business that
          stores all records with a single cloud provider has a single point
          of failure
        </li>
        <li>
          <strong>Hybrid record-keeping</strong> means many businesses
          maintain a mix of paper and digital &mdash; original signed
          contracts, notarized agreements, wet-ink signatures, and original
          engineering stamps often exist only in paper form regardless of how
          digital the rest of the operation may be
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Which Businesses Are Most Vulnerable?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every business that extends credit or maintains records with
        information value faces some exposure. But certain industries face
        disproportionate risk because their records <em>are</em> their
        business:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Law firms:</strong> Case files, depositions, discovery
          materials, and corporate formation records representing thousands
          of hours of billable work
        </li>
        <li>
          <strong>Medical and dental practices:</strong> Patient treatment
          records, diagnostic imaging, and prescription histories with HIPAA
          reconstruction obligations
        </li>
        <li>
          <strong>Architecture and engineering firms:</strong> Original
          drawings and structural calculations &mdash; a single large
          project may involve hundreds of sheets representing months of
          professional work
        </li>
        <li>
          <strong>Financial advisors and CPAs:</strong> Client financial
          records, tax return work papers, and audit files with fiduciary
          reconstruction obligations
        </li>
        <li>
          <strong>Construction companies:</strong> Permits, inspection
          records, subcontractor agreements, and warranty documentation
          &mdash; losing these mid-project can halt construction and trigger
          breach-of-contract claims
        </li>
        <li>
          <strong>Manufacturing and food production:</strong> Proprietary
          formulas, quality control records, and supplier certifications
          &mdash; losing a proprietary formula can eliminate a product line
          entirely
        </li>
      </ul>

      <CalloutBox variant="tip" title="Evaluate Both Coverages Together">
        <p>
          If your business extends credit (accounts receivable exposure)
          <em> and</em> maintains records with significant information value
          (valuable papers exposure), you likely need both endorsements. They
          address different risks. A law firm needs valuable papers coverage
          for its case files and accounts receivable coverage for its
          unbilled time and outstanding invoices. An engineering firm needs
          valuable papers coverage for its drawings and accounts receivable
          coverage for its project billings. Do not assume one endorsement
          covers both exposures.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Backup Requirement and Its Consequences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both endorsements include provisions that reward &mdash; or penalize
        &mdash; the insured based on backup practices. Many forms offer
        higher coverage limits or broader terms if the insured maintains
        off-premises backups. Conversely, failure to maintain reasonable
        backups can reduce coverage or trigger policy conditions that limit
        recovery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the CP 04 04 accounts receivable form, the endorsement
        distinguishes between records kept at the described premises and
        records stored elsewhere. If the insured maintains duplicate records
        off-site and the originals are destroyed, the insurer will argue that
        the receivables are not truly uncollectable because the backup
        records can be used to pursue collection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates an important incentive structure: the better your
        backups, the less likely you are to need the coverage &mdash; and the
        stronger your coverage position if you do. A business that can
        demonstrate regular off-premises backup will face fewer disputes with
        its insurer because the reconstruction path is clear and documented.
        A business with no backups faces both the practical problem of lost
        records and the coverage problem of an insurer questioning why no
        reasonable steps were taken to protect the information.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage Mechanics: Open Peril, Selected Limits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both the CP 04 04 and CP 04 07 endorsements are typically written on
        a &ldquo;special&rdquo; (open-peril) basis, covering any cause of
        loss not specifically excluded. Exclusions typically mirror the base
        commercial property form &mdash; war, nuclear hazard, governmental
        action, and other standard exclusions apply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insured selects coverage limits based on its assessment of
        maximum probable loss. For accounts receivable, this means estimating
        the peak outstanding receivables balance plus a margin for
        reconstruction costs and interest expenses. For valuable papers, it
        means estimating the total cost of reconstructing all covered records
        &mdash; a figure that requires understanding both the volume of
        records and the per-unit reconstruction cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Premiums for both endorsements are generally modest relative to the
        exposure. A $250,000 accounts receivable limit may cost only a few
        hundred dollars per year. A $100,000 valuable papers limit is
        similarly affordable. The cost-benefit analysis is overwhelmingly in
        favor of purchasing the coverage &mdash; a few hundred dollars in
        annual premium to protect against a six-figure loss that could
        cripple or close a business.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Business Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Protecting your business records requires both insurance coverage and
        operational discipline:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Purchase both endorsements</strong> if you have significant
          receivables or irreplaceable records. Review your commercial
          property policy to confirm whether CP 04 04 and CP 04 07 are
          included. If not, add them at your next renewal. The premium cost
          is negligible compared to the exposure.
        </li>
        <li>
          <strong>Set appropriate limits.</strong> For accounts receivable,
          calculate your peak outstanding balance over the past two years and
          add 20 percent for reconstruction costs and interest. For valuable
          papers, estimate the cost to reconstruct your most critical records
          category by category.
        </li>
        <li>
          <strong>Maintain off-site backups.</strong> Back up accounting
          records to a cloud-based system or off-premises server. Scan
          critical paper documents and store copies in a geographically
          separate location. Test your backup system periodically to confirm
          that the records are actually recoverable.
        </li>
        <li>
          <strong>Document your receivables regularly.</strong> Maintain a
          current aged receivables report and store a copy off-premises. This
          report is your evidence of what was owed at any given time. Without
          it, proving uncollectable amounts becomes an exercise in estimation
          and memory.
        </li>
        <li>
          <strong>Know your coverage limits and conditions.</strong> Read the
          endorsements. Understand what triggers coverage, what conditions
          apply, and what your obligations are after a loss. Many
          policyholders discover their limits for the first time when they
          file a claim &mdash; and by then it is too late to adjust them.
        </li>
        <li>
          <strong>Photograph your filing systems.</strong> Take photos or
          video of your filing cabinets, plan rooms, and record storage
          areas. Open drawers and photograph file labels. After a total loss,
          this visual inventory may be your only evidence of what records
          existed.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Coverage Disputes Arise
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Claims under these endorsements can generate{' '}
        <Link
          href="/resources/coverage-disputes"
          className="text-blue-700 underline hover:text-blue-900"
        >
          coverage disputes
        </Link>
        , particularly around the amount of uncollectable receivables, the
        reasonableness of reconstruction costs, and the adequacy of the
        insured&rsquo;s pre-loss backup efforts. Common disputes include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Those receivables would have been uncollectable
          anyway.&rdquo;</strong> The insurer applies the business&rsquo;s
          historical bad debt rate to reduce the claim. This adjustment is
          legitimate in principle but is often applied too aggressively.
        </li>
        <li>
          <strong>&ldquo;You could have reconstructed those records for
          less.&rdquo;</strong> The endorsement pays the <em>actual
          cost</em> to research and reconstruct. Using qualified
          professionals at market rates is reasonable, and the insurer does
          not get to dictate the cheapest possible method if it produces
          inferior results.
        </li>
        <li>
          <strong>&ldquo;Your backups should have prevented this
          loss.&rdquo;</strong> While backup provisions may reduce coverage
          under certain forms, the absence of backup does not eliminate
          coverage entirely. The endorsement exists precisely because records
          are sometimes lost.
        </li>
        <li>
          <strong>&ldquo;The document was irreplaceable, so we owe only
          blank value.&rdquo;</strong> Before accepting this argument,
          exhaust every reconstruction avenue. Can any portion of the
          information be obtained from courts, government agencies, clients,
          vendors, or other third parties? Complete irreplaceability is rarer
          than insurers suggest.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you face a significant dispute on an accounts receivable or
        valuable papers claim, consider retaining a{' '}
        <Link
          href="/resources/public-adjuster"
          className="text-blue-700 underline hover:text-blue-900"
        >
          licensed Public Adjuster
        </Link>{' '}
        to document and present the claim. These endorsements involve
        valuation questions that require both insurance expertise and an
        understanding of the insured&rsquo;s business operations. A public
        adjuster who specializes in commercial claims can bridge that gap and
        ensure the claim is presented in the strongest possible form.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Standard BPP coverage pays for blank paper and media &mdash; not
          the information value of your business records. Reconstruction
          costs, uncollectable receivables, and related expenses require
          separate endorsements.
        </li>
        <li>
          <strong>Accounts Receivable Coverage (CP 04 04)</strong> covers
          uncollectable amounts, reconstruction of account records, interest
          on loans needed to offset lost revenue, and excess collection
          expenses.
        </li>
        <li>
          <strong>Valuable Papers and Records Coverage
          (CP 04 07)</strong>{' '}
          covers the cost to research, replace, or restore papers and
          records based on information value &mdash; not blank paper value.
        </li>
        <li>
          Both endorsements are typically written on an open-peril basis with
          limits selected by the insured. Premiums are modest relative to
          the exposure.
        </li>
        <li>
          Cloud backups and digital records reduce but do not eliminate the
          risk. Server room fires, ransomware, and hybrid paper-digital
          systems all create continuing exposure.
        </li>
        <li>
          Businesses whose records <em>are</em> their primary asset &mdash;
          law firms, medical practices, architecture firms, financial
          advisors &mdash; face the greatest exposure and benefit the most
          from these coverages.
        </li>
        <li>
          Maintaining off-site backups strengthens your coverage position,
          reduces the likelihood of a total loss, and simplifies the claims
          process if a loss occurs.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not
          constitute legal or insurance advice. Insurance policies vary by
          carrier, state, and endorsement. The ISO forms referenced
          (CP 04 04 and CP 04 07) are standard forms, but your policy may
          use modified or proprietary language. Always review your specific
          policy language with a qualified insurance professional. If you
          have a claim dispute, consult with a licensed Public Adjuster or an
          attorney experienced in insurance coverage litigation.
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
