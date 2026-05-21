import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Professional Services Firm Insurance Claims: Law Firms, Accounting Firms, and the Client Retention Crisis',
  description:
    'Law firms, accounting firms, and architecture firms face unique property insurance challenges—from valuable papers and electronic data to the devastating client retention problem during closure. Learn where the coverage gaps hide and how to protect your practice.',
  summary:
    'Law, accounting, and architecture firms face unique exposures: valuable papers, electronic data, and the severe client-retention problem during a closure. Standard coverage often leaves gaps that can sink a practice\'s recovery.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Every professional services firm insurance claim involves unique facts, policy language, regulatory requirements, and client obligations that may affect coverage. If you have a disputed claim involving your professional services firm, consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a fire, flood, or other disaster strikes a law firm, accounting firm, or architecture practice, the damage goes far beyond the physical office. The real catastrophe is what happens to the client relationships. Unlike a retail store that reopens and customers return, a professional services firm that closes for three months may find that its clients &mdash; facing their own deadlines, filings, and legal obligations &mdash; have already engaged other professionals by the time the firm reopens. The revenue does not come back when the doors reopen. It comes back slowly, partially, and in some cases not at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the <strong>client retention crisis</strong>, and it is the defining insurance challenge for professional services firms. The standard business income policy assumes that revenue returns to pre-loss levels once the physical premises are restored. For a professional services firm, that assumption is fundamentally wrong. The client relationships that generated the revenue have been disrupted, and rebuilding them takes far longer than rebuilding the office.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the client retention problem, professional services firms face a constellation of insurance exposures that are poorly addressed by the standard commercial property policy: valuable papers and records, electronic data, regulatory compliance obligations, specialized equipment, and the interaction between property losses and professional liability coverage. This guide covers each of these exposures in detail.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Professional Services Firms Face Unique Property Insurance Challenges
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional services firms differ from most commercial operations in ways that directly affect how property insurance responds to a loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>The product is expertise, not inventory.</strong> A law firm does not sell physical goods. It sells the knowledge, judgment, and relationships of its attorneys. When the physical office is destroyed, the &ldquo;inventory&rdquo; &mdash; the attorneys and staff &mdash; can theoretically work from anywhere. But in practice, without access to files, systems, and the physical infrastructure of the office, productivity drops dramatically.</li>
        <li><strong>Client relationships are fragile.</strong> A client who needs a tax return filed, a contract drafted, or a building permitted cannot wait three months. Professional services clients have deadlines that do not pause for the firm&rsquo;s disaster. They will &mdash; and must &mdash; find another professional, and once they do, inertia favors the new relationship.</li>
        <li><strong>Records have independent value.</strong> Client files, legal documents, financial records, architectural drawings, and engineering calculations have value independent of their physical form. Losing a client&rsquo;s original trust documents, a set of architectural plans mid-project, or three years of accounting workpapers creates professional liability exposure in addition to the property loss.</li>
        <li><strong>Regulatory obligations persist through the disaster.</strong> Attorneys have bar obligations, CPAs have state board requirements, and architects have licensing standards. Court filing deadlines do not stop because the attorney&rsquo;s office burned down. Tax filing deadlines may be extended but not eliminated. The professional&rsquo;s regulatory obligations create urgency that standard business income coverage does not address.</li>
        <li><strong>Most firms operate in leased space.</strong> Professional services firms overwhelmingly occupy leased office space. The{' '}
          <Link href="/resources/tenant-improvements-betterments" className="text-[#2E74B5] hover:underline">tenant improvements and betterments</Link>{' '}
          &mdash; the buildout, the custom millwork, the conference rooms, the server closet, the library shelving &mdash; are the firm&rsquo;s property, and they are often underinsured or uninsured.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Valuable Papers and Records Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/accounts-receivable-valuable-papers" className="text-[#2E74B5] hover:underline">Valuable papers and records coverage</Link>{' '}
        is one of the most important &mdash; and most frequently inadequate &mdash; coverages for professional services firms. The standard commercial property policy provides limited coverage for &ldquo;valuable papers and records,&rdquo; typically defined as documents that have value because of the information they contain, as opposed to their physical form. This includes client files, legal documents, financial records, architectural drawings, survey data, engineering calculations, and similar materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical distinction is between <strong>physical records</strong> and <strong>electronic data</strong>. The standard ISO commercial property form (CP 00 10) covers the cost to research, replace, or restore valuable papers and records that are physically damaged by a covered peril. But the coverage for electronic data is handled separately and is subject to much lower sublimits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a law firm, the exposure is enormous. Original wills, trusts, and estate documents. Executed contracts. Real estate closing files with original deeds and title documents. Litigation files with discovery materials, deposition transcripts, and expert reports. Immigration files with original client documents from foreign governments. Many of these documents are irreplaceable &mdash; not merely expensive to reconstruct, but literally impossible to recreate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For an accounting firm, the exposure includes workpapers, tax returns, audit documentation, and financial statements. The IRS requires certain records to be maintained for specific periods. State boards of accountancy impose their own retention requirements. Destruction of these records does not relieve the firm of its regulatory obligations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For an architecture or engineering firm, the exposure includes original drawings, specifications, structural calculations, soil reports, environmental studies, and project correspondence. Many of these documents are required by the building department, the client, and the firm&rsquo;s own professional liability insurer to be maintained for years after project completion.
      </p>

      <CalloutBox variant="warning" title="The Standard Valuable Papers Sublimit Is Almost Certainly Inadequate">
        <p>
          The standard commercial property policy&rsquo;s valuable papers sublimit &mdash; often $25,000 to $50,000 &mdash; is a fraction of the cost to research, reconstruct, and replace the records of a professional services firm. A single litigation file can cost tens of thousands of dollars to reconstruct. A complete reconstruction of an accounting firm&rsquo;s workpapers after a fire can cost hundreds of thousands. Request an increase to the valuable papers limit that reflects the actual cost of reconstructing your firm&rsquo;s records, and maintain off-site backups of all critical documents.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Electronic Data Coverage and Its Limitations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern professional services firms store the vast majority of their records electronically. Document management systems, practice management software, accounting platforms, CAD files, email archives, and client databases all reside on servers, in cloud storage, or on individual workstations. When a property loss occurs &mdash; fire, water damage, electrical surge &mdash; the electronic data is often the most significant loss, but it is also the most poorly covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO commercial property form covers &ldquo;electronic data&rdquo; as a category separate from both personal property and valuable papers. The standard sublimit is typically $2,500 &mdash; a limit so low it is almost meaningless for any professional services firm. Even with enhanced endorsements, the electronic data sublimit is often $25,000 to $100,000, which may be inadequate for a firm that has invested hundreds of thousands of dollars in digital infrastructure, software customization, and data accumulation over years or decades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Electronic data coverage under the commercial property form covers the cost to <strong>replace or restore</strong> data that has been destroyed or corrupted by a covered cause of loss. It does <strong>not</strong> cover the cost to create new data that never existed before, and it does not cover the business income lost because the data was unavailable. Business income coverage for data loss typically requires a separate{' '}
        <Link href="/resources/equipment-breakdown-coverage" className="text-[#2E74B5] hover:underline">equipment breakdown</Link>{' '}
        policy or endorsement, which covers data restoration costs and business income loss resulting from the failure of covered equipment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage gap between property damage to the hardware and the cost of restoring the data on that hardware is one of the most significant and most commonly overlooked exposures for professional services firms.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income and the Client Retention Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/business-interruption" className="text-[#2E74B5] hover:underline">Business income coverage</Link>{' '}
        for professional services firms is where the standard policy&rsquo;s assumptions fail most dramatically. The ISO business income form (CP 00 30 or the business income provisions in the BOP) measures the loss as the reduction in business income during the{' '}
        <Link href="/resources/period-of-restoration-disputes" className="text-[#2E74B5] hover:underline">period of restoration</Link>{' '}
        &mdash; the time it takes to repair, rebuild, or replace the damaged property. The period of restoration ends when the property &ldquo;should be&rdquo; repaired with reasonable speed and similar quality. After that, the standard policy provides a limited extended business income period &mdash; typically 30 to 60 days &mdash; to account for the ramp-up after reopening.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a professional services firm, the ramp-up period is not 30 to 60 days. It is 6 to 18 months, or longer. Consider what happens when a law firm closes for four months after a fire:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Active litigation clients need continuity. Opposing counsel does not wait. Courts do not wait. Clients with pending matters will engage other attorneys, and those attorneys will handle the matter through to conclusion.</li>
        <li>Transactional clients with pending deals will close with other counsel. Once a client has engaged a new attorney for a real estate closing, a business acquisition, or an estate plan, that client has no reason to return.</li>
        <li>Accounting clients whose tax returns are due during the closure will engage other CPAs. That CPA will likely prepare the return the following year as well, and the year after that.</li>
        <li>Architecture clients with active projects will engage other architects to keep the project moving. Building permits, construction schedules, and financing timelines do not accommodate a four-month delay.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the firm reopens, it reopens to a partially empty client roster. The revenue that was $200,000 per month before the loss may be $80,000 per month after reopening, with a slow climb back over 12 to 18 months as the firm rebuilds its client base. The standard 30-day extended business income period covers only a fraction of this ramp-up loss.
      </p>

      <CalloutBox variant="important" title="The Extended Period of Indemnity Is Not Optional for Professional Services Firms">
        <p>
          If your firm depends on ongoing client relationships for revenue &mdash; and every professional services firm does &mdash; the standard 30-day extended business income period is grossly inadequate. Request an extended period of indemnity endorsement of at least 180 to 365 days. The cost is modest relative to the exposure. Without it, your business income coverage effectively ends on the day you reopen, even though your revenue will not return to pre-loss levels for months or longer.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income Calculation Challenges: The Billable Hour Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional services firms generate revenue through billable hours, contingency fees, fixed-fee engagements, or some combination of these billing methods. Proving the amount of business income lost during a closure requires documenting the revenue the firm <em>would have</em> earned but for the loss &mdash; and this calculation is inherently more complex for a professional services firm than for a business that sells products.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a law firm billing by the hour, the calculation involves establishing the number of billable hours each attorney would have worked during the loss period, the billing rates in effect, and the firm&rsquo;s historical collection rate. A firm with 10 attorneys averaging 150 billable hours per month at an average rate of $400 per hour with an 85% collection rate would have a projected monthly revenue of $510,000 &mdash; but proving each of those variables requires detailed documentation: time records for prior periods, billing rate schedules, collection reports, and accounts receivable aging.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For contingency-fee practices, the calculation is even more challenging. Revenue depends on case outcomes, which are uncertain even in the best circumstances. A plaintiff&rsquo;s personal injury firm may have cases in the pipeline with significant expected fees, but the timing and amount of those fees are inherently unpredictable. Insurers will argue that contingency fees are speculative and cannot be projected with reasonable certainty.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For accounting firms, revenue is highly seasonal. A CPA firm that suffers a loss in January may lose an entire tax season &mdash; 40% to 60% of its annual revenue &mdash; even if the physical restoration is complete by April. The business income calculation must account for this seasonality and project the revenue the firm would have earned during the peak period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Document everything now, before a loss occurs.</strong> Maintain detailed time records, billing summaries, collection reports, and revenue by practice area and by client. Historical revenue data by month is the single most important document in a business income claim, and many firms do not maintain it in a format that is readily accessible to an adjuster or a forensic accountant.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The E&amp;O / Professional Liability Interaction with Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a property loss destroys client files, disrupts active matters, or causes missed deadlines, the firm faces a dual exposure: the property loss itself, and the potential professional liability that arises from the disruption. A law firm that misses a statute of limitations because its case files were destroyed in a fire has both a property insurance claim and a professional liability claim. An accounting firm that fails to file a client&rsquo;s tax return because its records were destroyed has the same dual exposure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The property policy and the Errors &amp; Omissions (E&amp;O) policy respond to different aspects of this scenario. The property policy covers the cost to restore the damaged files and the firm&rsquo;s lost business income. The E&amp;O policy covers the professional liability claim from the client whose matter was damaged by the disruption &mdash; the malpractice claim, the regulatory complaint, or the client&rsquo;s damages from a missed deadline.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These policies do not overlap, and each has exclusions that may leave gaps. The property policy does not cover the cost of defending a malpractice claim or paying damages to a client. The E&amp;O policy does not cover the physical damage to the office or the firm&rsquo;s lost revenue. Both policies must be in place, with adequate limits, for the firm to be fully protected in a scenario where a property loss triggers professional liability exposure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical action item for any professional services firm is to ensure that the property loss does not <em>also</em> become a malpractice event. This means having a disaster recovery plan that prioritizes active client matters: identifying which cases have pending deadlines, which tax returns are due, which projects have submittal dates, and ensuring that those obligations are covered even if the office is destroyed. The cost of engaging temporary counsel, contract CPAs, or freelance architects to handle urgent client matters during a closure is an <strong>extra expense</strong> under the property policy &mdash; and it is money well spent if it prevents a professional liability claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Specialized Equipment: Servers, Plotters, and Practice-Specific Technology
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional services firms rely on specialized equipment that is more expensive and harder to replace than standard office furniture and computers. The{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">contents</Link>{' '}
        of a professional services office may include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Servers and network infrastructure.</strong> On-premises servers running practice management software, document management systems, email, and client databases. A mid-size law firm&rsquo;s server infrastructure can represent $50,000 to $200,000 in hardware alone, plus the cost of the data stored on it.</li>
        <li><strong>Large-format plotters and printers.</strong> Architecture and engineering firms use large-format plotters that cost $10,000 to $50,000 and have lead times of weeks for replacement. Custom paper stocks, ink systems, and calibration add to the replacement cost and delay.</li>
        <li><strong>3D printers and modeling equipment.</strong> Architecture firms increasingly use 3D printers for models and prototypes. These range from $5,000 to $100,000+ depending on the technology and are specialized equipment with limited availability.</li>
        <li><strong>Legal research libraries.</strong> While much legal research has moved online, many law firms maintain physical libraries of reporters, treatises, and practice guides that can represent tens of thousands of dollars in replacement cost.</li>
        <li><strong>Specialized scanning and imaging equipment.</strong> High-speed document scanners, microfilm readers, and forensic imaging equipment used by litigation support departments.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard commercial property policy covers business personal property at the insured premises, but the limit must be adequate to cover all of this equipment at <strong>replacement cost</strong>. Many firms set their business personal property limit when they first moved into the space and have not adjusted it as equipment has been added, upgraded, and customized over the years. A current inventory and accurate valuation is essential.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Records Retention and Regulatory Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional services firms operate under regulatory frameworks that impose specific records retention requirements. Destruction of records by a covered peril does not relieve the firm of these obligations &mdash; it creates a compliance crisis on top of the property loss.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>California State Bar (attorneys).</strong> California Rule of Professional Conduct 1.16(e) requires attorneys to take reasonable steps to protect client interests upon termination of representation, including returning client files and property. The State Bar&rsquo;s guidelines on file retention recommend maintaining closed files for a minimum of five years, and longer for certain categories including estate planning, real property, and matters involving minors. Destruction of client files by a covered peril must be documented and reported to affected clients.</li>
        <li><strong>California Board of Accountancy (CPAs).</strong> California Business and Professions Code &sect;5037 requires licensees to maintain records in accordance with professional standards. Auditing standards (GAAS) require workpaper retention for at least five years from the report release date. Tax return workpapers should be maintained for at least seven years (matching the IRS assessment period for substantial understatement). Destruction of workpapers during an audit engagement or during the retention period creates both regulatory and professional liability exposure.</li>
        <li><strong>California Architects Board.</strong> California Business and Professions Code &sect;5536.22 requires architects to use a written contract for professional services, with eight specified contents (project description, services to be provided, basis of compensation, identifying information for the architect/client/project, change procedures, termination procedures, ownership of instruments of service, and a 12-point-type statement regarding the California Architects Board&rsquo;s regulatory authority). Separately, as a practical matter, project files (drawings, specifications, and correspondence) should be maintained for at least 10 years after project completion &mdash; the statute of repose for construction defect claims in California (CCP &sect;337.15).</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance implication is that the firm must reconstruct records to the extent possible after a loss &mdash; and the cost of that reconstruction is a covered expense under the valuable papers and records coverage. The firm must also notify clients whose records were destroyed and cooperate with any regulatory inquiries that result. These notification and compliance costs are generally <strong>not</strong> covered under the standard property policy and may require a separate cyber liability or professional liability policy to address.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cyber Liability for Client Data Exposed During Property Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A property loss can create a data breach. When fire or water damages a server room and the servers are removed for disposal or sent to a data recovery specialist, client data on those servers may be exposed to unauthorized access. Hard drives removed from a damaged building may be stolen or improperly disposed of. Backup media stored on-site may be damaged but not destroyed, leaving data partially accessible to anyone who recovers the physical media.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional services firms hold some of the most sensitive client data in any industry: Social Security numbers, financial account information, medical records (for attorneys handling personal injury or family law), trade secrets, and privileged communications. A data breach resulting from a property loss triggers notification obligations under the California Consumer Privacy Act (CCPA) and the California data breach notification statute (Civil Code &sect;1798.82), which requires notification to affected individuals when their personal information is acquired by an unauthorized person.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The commercial property policy does <strong>not</strong> cover the costs of data breach response: forensic investigation, legal counsel, notification to affected individuals, credit monitoring, regulatory defense, and potential liability. A <strong>cyber liability policy</strong> is the appropriate coverage for these exposures. Professional services firms that handle sensitive client data &mdash; which is virtually all of them &mdash; should carry cyber liability coverage as part of their insurance program, separate from and in addition to their property and E&amp;O policies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tenant Improvement Losses in Leased Office Space
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The overwhelming majority of professional services firms operate in leased office space. The buildout of that space &mdash;{' '}
        <Link href="/resources/tenant-improvements-betterments" className="text-[#2E74B5] hover:underline">tenant improvements and betterments</Link>{' '}
        &mdash; is typically the single largest property asset the firm owns. A law firm&rsquo;s buildout may include custom millwork, a reception area, conference rooms with built-in audio/visual systems, a law library, a server room with climate control, partner offices with custom finishes, and common areas designed to project the firm&rsquo;s image. The cost of this buildout can range from $50 to $150+ per square foot, meaning a 5,000-square-foot law office buildout may represent $250,000 to $750,000 or more in tenant improvements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard commercial property policy covers tenant improvements and betterments, but the valuation method is critical. The ISO form values tenant improvements at their depreciated value based on the remaining lease term &mdash; not at replacement cost. Under this method, tenant improvements that cost $500,000 to install five years ago, with five years remaining on a ten-year lease, are valued at $250,000. The actual cost to rebuild them today &mdash; after years of construction cost inflation &mdash; may be $650,000. The gap between the depreciated policy value and the actual replacement cost can be devastating.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Request a <strong>replacement cost</strong> valuation for tenant improvements. This is available by endorsement and ensures that the improvements are covered at the cost to replace them with materials of like kind and quality at current prices, not at depreciated value. The premium increase for replacement cost coverage is modest relative to the protection it provides.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Practical Coverage Checklist for Professional Services Firms
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every professional services firm should review its insurance program with its broker at least annually. The following checklist covers the core coverages that every law firm, accounting firm, and architecture practice should evaluate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Valuable Papers and Records:</strong> Increase the sublimit to reflect the actual cost to research, reconstruct, and replace the firm&rsquo;s physical and electronic records. For most professional services firms, the standard sublimit is inadequate by an order of magnitude.</li>
        <li><strong>Electronic Data:</strong> Increase the sublimit well beyond the standard $2,500. Consider a separate electronic data restoration endorsement or an equipment breakdown policy with data restoration coverage.</li>
        <li><strong>Business Income:</strong> Base the limit on at least 12 to 18 months of projected revenue, accounting for seasonality (especially for CPA firms). Include an extended period of indemnity endorsement of at least 180 to 365 days to cover the client retention ramp-up period.</li>
        <li><strong>{' '}
          <Link href="/resources/extra-expense-coverage" className="text-[#2E74B5] hover:underline">Extra Expense</Link>:</strong> Professional services firms will incur significant extra expense to maintain operations during a closure &mdash; temporary office space, equipment rental, expedited IT restoration, temporary staffing, and engagement of contract professionals to handle urgent client matters. Ensure the extra expense limit is adequate.</li>
        <li><strong>Tenant Improvements and Betterments:</strong> Insure at replacement cost, not depreciated value. Verify the limit reflects current construction costs, not the original buildout cost.</li>
        <li><strong>Business Personal Property:</strong> Verify the limit covers all equipment at replacement cost, including servers, specialized equipment, furniture, library collections, and artwork. Conduct a current inventory.</li>
        <li><strong>{' '}
          <Link href="/resources/equipment-breakdown-coverage" className="text-[#2E74B5] hover:underline">Equipment Breakdown</Link>:</strong> Covers mechanical and electrical failure of servers, HVAC, UPS systems, and other equipment. Includes data restoration costs and business income during repairs.</li>
        <li><strong>E&amp;O / Professional Liability:</strong> Ensure adequate limits and verify that the policy does not exclude claims arising from events that also involve a property loss. Coordinate the property and E&amp;O policies to eliminate gaps.</li>
        <li><strong>Cyber Liability:</strong> Covers data breach response costs, notification, credit monitoring, regulatory defense, and liability for client data exposed during a property loss or otherwise.</li>
        <li><strong>Disaster Recovery Plan:</strong> Not an insurance product, but essential for protecting client relationships during a closure. Identify active matters with pending deadlines, maintain off-site backups, and have a plan for temporary operations that can be activated immediately after a loss.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        A professional services firm&rsquo;s most valuable asset walks out the door every evening &mdash; its people and the client relationships they maintain. But the infrastructure that supports those relationships &mdash; the files, the data, the specialized equipment, the office itself &mdash; is what allows the firm to deliver its expertise. When that infrastructure is destroyed, the firm does not just lose property. It loses time, it loses clients, and it loses revenue that may take years to rebuild. The standard commercial property policy was not designed for this reality. Closing the gaps requires a deliberate, informed approach to coverage selection that accounts for the unique way professional services firms generate revenue and serve their clients.
      </p>
    </>
  )
}
