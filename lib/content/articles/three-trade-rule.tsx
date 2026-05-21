import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Three-Trade Rule: Why Your Insurance Company Owes Overhead and Profit',
  description:
    'The three-trade rule is a practical shorthand for a legal principle adopted by appellate courts across the country: overhead and profit are owed whenever a general contractor is reasonably likely to be needed. Nine verified case law citations, state regulatory authority, and practical guidance for policyholders.',
  summary:
    'Under the widely adopted three-trade rule, overhead and profit are owed whenever a general contractor is reasonably likely to be needed, typically when repairs span three or more trades. Verified case law and regulatory authority support claiming O&P.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If you believe your insurer has improperly withheld overhead and profit, you should consult with a licensed attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your home sustains fire damage. The repair requires a roofer, an electrician, a plumber, a drywall contractor, and a painter. No single tradesperson can handle this job alone &mdash; it requires a general contractor to coordinate the work, manage the schedule, pull permits, and ensure the repairs meet code.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A general contractor charges overhead and profit. Overhead covers the cost of running the business &mdash; office expenses, insurance, licensing, project management, vehicles. Profit is what the contractor earns for doing the work. Together, these typically add 20% to the cost of repairs: 10% overhead and 10% profit. On a $100,000 repair, that is $20,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance company knows this. Its own estimating software &mdash;{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate</Link>
        {' '}&mdash; has a built-in field for general contractor overhead and profit. But when it comes time to pay your claim, the carrier leaves that field blank and tells you O&amp;P isn&rsquo;t owed. Or it tells you that you haven&rsquo;t proven you need a general contractor. Or it tells you that something called the &ldquo;three-trade rule&rdquo; doesn&rsquo;t exist.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That last claim has become remarkably common. Adjusters say it. Attorneys say it. Insurance industry commentators say it. And in one narrow, technical sense, they are correct: no state legislature has enacted a statute that says &ldquo;when three trades are required, overhead and profit shall be paid.&rdquo; The phrase &ldquo;three-trade rule&rdquo; does not appear in any insurance code.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But dismissing the rule on that basis misses the point entirely. The three-trade rule is a practical shorthand for a legal principle that appellate courts across the country have adopted and enforced for decades. That principle is straightforward: overhead and profit are owed whenever a general contractor is <strong>reasonably likely</strong> to be needed. And the number of trades required for the repair is one of the most important factors courts use to make that determination.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Three-Trade Rule Actually Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three-trade rule, as understood in the insurance adjusting industry, holds that when a property repair requires three or more distinct trades &mdash; such as roofing, plumbing, electrical, drywall, painting, or flooring &mdash; the scope of work is complex enough that a general contractor would reasonably be needed to coordinate and oversee it. When a general contractor is needed, the insurer owes overhead and profit as part of the claim payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rule originated not from a court decision or a statute, but from the practical reality of construction. A homeowner can reasonably manage a single-trade repair &mdash; calling a plumber to fix a burst pipe, for example. But when the burst pipe also damages drywall, flooring, electrical outlets, and cabinetry, the homeowner is no longer managing a plumbing repair. They are managing a construction project. That project requires someone to schedule the trades in the correct sequence, ensure the work of one trade does not conflict with another, handle permitting and inspections, and take responsibility for the finished result.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That someone is a general contractor. And general contractors do not work for free.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Standard: &ldquo;Reasonably Likely&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the three-trade rule itself is an industry guideline, the legal principle it represents has been established by courts across the country. The standard is this: overhead and profit must be included in the insurer&rsquo;s payment whenever the use of a general contractor is <strong>reasonably likely</strong> &mdash; regardless of whether the policyholder has actually hired one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This standard reflects a basic principle of insurance law. A replacement cost policy promises to pay the cost to repair or replace damaged property. That cost includes all expenses the policyholder is reasonably likely to incur &mdash; materials, labor, permits, sales tax, and general contractor overhead and profit when the scope of work warrants it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer does not get to strip out a component of the repair cost simply because the policyholder has not yet spent the money. Insurance is supposed to put the policyholder in a position to make the repair. It is not supposed to underpay and then argue that the policyholder failed to prove they spent money they were never given.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Case Law: Seven Jurisdictions, One Principle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The principle that O&amp;P is owed when a general contractor is reasonably likely to be needed has been adopted by appellate courts in Pennsylvania, Florida, Arizona, Oklahoma, and New York, the Seventh Circuit Court of Appeals, and federal courts applying Texas law. Each of these decisions reinforces the same core holding: the entitlement to overhead and profit does not depend on whether the policyholder actually hired a general contractor.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Pennsylvania: The Foundation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pennsylvania&rsquo;s courts built the framework that most other jurisdictions have followed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Gilderman v. State Farm Insurance Co.</em> (1994), the Pennsylvania Superior Court established that when multiple trades are required for repairs, it is &ldquo;reasonably likely&rdquo; that general contractor services will be needed. The court held that repair or replacement costs include &ldquo;any cost that an insured is reasonably likely to incur,&rdquo; and that this includes general contractor overhead and profit. The insurer may not automatically deduct O&amp;P from advance actual cash value payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        649 A.2d 941 (Pa. Super. 1994).{' '}
        <a href="https://law.justia.com/cases/pennsylvania/superior-court/1994/437-pa-super-217-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Twelve years later, <em>Mee v. Safeco Insurance Company of America</em> (2006) reinforced <em>Gilderman</em> and added a structured framework for determining when O&amp;P is owed. The Mees&rsquo; home sustained damage from a toilet overflow. Safeco denied overhead and profit because the Mees did not hire a general contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Superior Court reversed, establishing a three-factor test:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700 leading-relaxed">
        <li><strong>The extent of the property damage.</strong> More extensive damage is more likely to require professional coordination.</li>
        <li><strong>The number of trades required.</strong> When multiple trades are needed &mdash; in the Mees&rsquo; case, as many as six &mdash; professional oversight becomes reasonably necessary.</li>
        <li><strong>Expert evidence regarding building industry standards.</strong> Industry practice connecting the number of trades to the need for a general contractor is relevant evidence.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that O&amp;P must be included as part of the actual cash value payment, not merely as part of replacement cost. And critically, the insured need not actually hire a general contractor to be entitled to O&amp;P &mdash; the standard is whether a general contractor is <strong>reasonably likely</strong> to be needed, not whether one was actually used.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        908 A.2d 344 (Pa. Super. 2006).{' '}
        <a href="https://www.courtlistener.com/opinion/1551164/mee-v-safeco-insurance-company-of-america/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on CourtListener.
        </a>
        {' '}Also available on{' '}
        <a href="https://caselaw.findlaw.com/court/pa-superior-court/1164464.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a>
        {' '}and{' '}
        <a href="https://law.justia.com/cases/pennsylvania/superior-court/2006/a14003-06.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Florida: The Supreme Court Weighs In
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida&rsquo;s highest court addressed the question directly in <em>Trinidad v. Florida Peninsula Insurance Co.</em> (2013), producing what is now the leading authority in the state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Trinidad&rsquo;s home sustained fire damage. Florida Peninsula refused to include overhead and profit in its payment. The case reached the Florida Supreme Court on a certified question from the Fifth District Court of Appeal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court&rsquo;s holding was unambiguous: overhead and profit must be included in the insurer&rsquo;s payment under a replacement cost policy when the policyholder is <strong>&ldquo;reasonably likely to need a general contractor for the repairs.&rdquo;</strong> The Court explained that O&amp;P is &ldquo;like all other costs of a repair&rdquo; &mdash; it is no different from the cost of labor or materials. Eliminating O&amp;P from the replacement cost payment would provide the policyholder with less coverage than an actual cash value policy, which would contradict the entire purpose of replacement cost coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court rejected any rigid numerical threshold. Whether a general contractor is reasonably likely to be needed is a factual determination that depends on the specific circumstances of the loss &mdash; not a mechanical count of trades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        121 So. 3d 433 (Fla. 2013).{' '}
        <a href="https://caselaw.findlaw.com/court/fl-supreme-court/1637393.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on FindLaw.
        </a>
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Arizona: Following Pennsylvania&rsquo;s Lead
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Tritschler v. Allstate Insurance Co.</em> (2006), the Arizona Court of Appeals adopted Pennsylvania&rsquo;s reasoning and applied it to a case where the absurdity of the carrier&rsquo;s position was on full display.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate sent its own preferred vendor &mdash; Better Way &mdash; to inspect and estimate the damage to Jules Tritschler&rsquo;s home after rain damage. Better Way prepared a $44,471 estimate that included 10% overhead and 10% profit. Allstate then refused to pay the O&amp;P portion of its own vendor&rsquo;s estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that actual cash value is an estimate of needed repairs, and that the determination of whether O&amp;P is owed does not depend on what the insured actually pays. The question is whether a general contractor is reasonably necessary for the scope of work &mdash; and Allstate&rsquo;s own vendor had already answered that question by including O&amp;P in the estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        213 Ariz. 505, 144 P.3d 519 (Ariz. Ct. App. 2006).{' '}
        <a href="https://caselaw.findlaw.com/court/az-court-of-appeals/1285810.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on FindLaw.
        </a>
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Texas: Federal Court and the Insurance Commissioner
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Ghoman v. New Hampshire Insurance Co.</em> (2001), the federal court for the Northern District of Texas granted the policyholder&rsquo;s motion for partial summary judgment on breach of contract. Ghoman owned a Howard Johnson hotel that sustained wind and hail damage. The appraisal valued replacement cost at $299,907, but New Hampshire Insurance tendered only $190,414, withholding $48,083 in contractor overhead and profit and $22,856 in sales tax.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that replacement costs &ldquo;should include any cost that an insured is &lsquo;reasonably likely to incur&rsquo; in repairing or replacing a covered loss.&rdquo; O&amp;P and sales tax &ldquo;clearly fit into this definition and should be included in both the replacement cost and actual cash value amounts.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        159 F. Supp. 2d 928 (N.D. Tex. 2001).{' '}
        <a href="https://law.justia.com/cases/federal/district-courts/FSupp2/159/928/2384313/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Texas Department of Insurance weighed in even earlier. In Commissioner&rsquo;s Bulletin B-0045-98, issued June 12, 1998, the Department declared that &ldquo;the deduction of a prospective contractor&rsquo;s overhead and profit and sales tax, in determining the actual cash value under a replacement cost policy, is improper.&rdquo; The bulletin characterized the withholding of O&amp;P as an <strong>&ldquo;illegal windfall&rdquo;</strong> for the insurer &mdash; language that reflects how seriously Texas regulators view the practice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.tdi.texas.gov/bulletins/1998/b-0045-8.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read Bulletin B-0045-98 on the Texas Department of Insurance website.
        </a>
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Oklahoma: The Three-Trade Rule as Class Boundary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Burgess v. Farmers Insurance Co.</em> (2006) is particularly significant because the Oklahoma Supreme Court explicitly used the three-trade threshold as the defining boundary for a class action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The class was defined as claimants whose claim files reflected that <strong>three or more trades</strong> were anticipated in the property repair. General contractor overhead and profit was defined as 20% of ACV (10% overhead plus 10% profit). Class members received the 20% O&amp;P payment plus 8% interest, less any amounts previously paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is notable because the court did not merely acknowledge the three-trade rule as an industry guideline &mdash; it used three trades as the operative threshold for determining class membership. The practical effect was to establish, in the context of that litigation, that claims involving three or more trades presumptively warrant O&amp;P.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        151 P.3d 92, 2006 OK 66 (Okla. 2006).{' '}
        <a href="https://law.justia.com/cases/oklahoma/supreme-court/2006/448123.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        New York: Replacement Cost Is Inherently Hypothetical
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Mazzocki v. State Farm</em> (2003), the New York Appellate Division addressed the carrier&rsquo;s argument that O&amp;P should not be paid because the policyholder had not yet hired a general contractor. The court rejected this reasoning with an observation that cuts to the heart of the issue:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;A replacement cost estimate is equally hypothetical or contingent as to all materials, labor and contractor services.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The point is simple. Every component of a replacement cost estimate is prospective &mdash; the materials have not been purchased, the labor has not been performed, the contractors have not been hired. If the hypothetical nature of the cost were grounds for exclusion, the insurer would owe nothing at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        1 A.D.3d 9 (N.Y. App. Div., 3d Dept. 2003). See also Merlin Law Group,{' '}
        <a href="https://www.propertyinsurancecoveragelaw.com/2017/12/articles/class-action/entitlement-to-overhead-and-profit-on-an-actual-cash-value-estimate/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          &ldquo;Entitlement to Overhead and Profit on an Actual Cash Value Estimate&rdquo;
        </a>
        {' '}(discussing <em>Mazzocki</em> and related authority).
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Seventh Circuit: The Federal Appellate Standard
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Windridge of Naperville Condominium Association v. Philadelphia Indemnity Insurance Co.</em> (2019), the Seventh Circuit Court of Appeals held that if a general contractor is required to repair damaged property, the insurer must pay overhead and profit regardless of whether one was actually hired. The court applied the industry-standard &ldquo;10 and 10&rdquo; &mdash; 10% overhead and 10% profit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        932 F.3d 1035 (7th Cir. 2019).{' '}
        <a href="https://law.justia.com/cases/federal/appellate-courts/ca7/18-2103/18-2103-2019-08-07.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Caveat: When Policy Language Explicitly Restricts O&amp;P
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all of this case law cuts uniformly in favor of policyholders. In <em>Kurach v. Truck Insurance Exchange</em> (2020), the Pennsylvania Supreme Court held in a 4-3 decision that the insurer could withhold general contractor overhead and profit from ACV payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the holding was narrow and fact-specific. The policy in <em>Kurach</em> contained explicit language conditioning O&amp;P payment on the insured actually incurring and paying those costs. The policy stated: &ldquo;actual cash value settlements will not include estimated general contractor fees or charges for general contractor&rsquo;s services unless and until you actually incur and pay such fees and charges.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court <strong>distinguished rather than overruled</strong> <em>Gilderman</em> and <em>Mee</em>. It held that those earlier decisions involved policies that were silent on O&amp;P, making them factually distinguishable. Where a policy does not contain explicit GCOP-withholding language &mdash; which covers the vast majority of standard homeowner&rsquo;s policies &mdash; the <em>Mee</em> and <em>Gilderman</em> framework remains controlling law in Pennsylvania.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lesson of <em>Kurach</em> is not that O&amp;P can be freely withheld. The lesson is that policy language matters, and policyholders and their representatives should review the specific policy at issue before asserting an O&amp;P claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        235 A.3d 1106 (Pa. 2020).{' '}
        <a href="https://law.justia.com/cases/pennsylvania/supreme-court/2020/12-eap-2019-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        State Regulatory Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond case law, state insurance regulators have independently addressed the O&amp;P question.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Texas</strong> &mdash; Commissioner&rsquo;s Bulletin B-0045-98 (1998) states that withholding O&amp;P from ACV under a replacement cost policy is &ldquo;improper&rdquo; and constitutes an &ldquo;illegal windfall&rdquo; for the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Colorado</strong> &mdash; DORA Bulletin B-5.1 (1998) prohibits insurers from deducting contractors&rsquo; overhead and profit in addition to depreciation when policyholders do not repair or replace the structure. No dollar threshold or complexity requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California</strong> &mdash; While California has not issued a bulletin specifically naming O&amp;P, the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">Fair Claims Settlement Practices regulations</Link>
        {' '}(10 CCR 2695.9) require that insurer estimates reflect costs that will &ldquo;restore the damaged property to no less than its condition prior to the loss&rdquo; using &ldquo;accepted trade standards for good and workmanlike construction&rdquo; at costs &ldquo;accurate and representative of costs in the local market area.&rdquo; When repairs of that scope require a general contractor, the estimate must include the cost of one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read California&rsquo;s regulation at Cornell LII.
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Tennessee</strong> &mdash; The state Board of Licensing Contractors requires a licensed contractor on any project exceeding $25,000 or involving more than one subcontractor. This means that under Tennessee law, two trades &mdash; not three &mdash; can trigger the contractor requirement that supports an O&amp;P obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A comprehensive state-by-state chart of O&amp;P requirements, compiled by Matthiesen, Wickert &amp; Lehrer, is available as a reference document.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.mwl-law.com/wp-content/uploads/2019/09/GENERAL-CONTRACTOR-OVERHEAD-AND-PROFIT-PAYMENTS-CHART-00215699x9EBBF.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Download the 50-state GC O&amp;P chart (PDF).
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why &ldquo;The Three-Trade Rule Doesn&rsquo;t Exist&rdquo; Is the Wrong Argument
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When someone tells you that the three-trade rule doesn&rsquo;t exist, they are making a statement about statutory codification. No legislature has enacted a statute using that phrase. That much is true.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the argument confuses the name of the rule with the substance of the rule. The three-trade rule is not a statute. It is an industry shorthand for a legal standard that has been adopted by appellate courts in at least seven states and the Seventh Circuit, applied by federal courts in multiple others, and endorsed by state insurance regulators in Texas, Colorado, and elsewhere.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The substance of the rule &mdash; that when multiple trades are required, a general contractor is reasonably likely to be needed, and therefore O&amp;P must be paid &mdash; is not an industry invention. It is the holding of <em>Gilderman</em>, <em>Mee</em>, <em>Trinidad</em>, <em>Tritschler</em>, <em>Ghoman</em>, <em>Burgess</em>, <em>Mazzocki</em>, and <em>Windridge</em>. Each of those decisions examined the specific facts before it, and each concluded that the need for multiple trades is strong evidence that general contractor services are reasonably necessary.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider how many foundational insurance law concepts exist without statutory codification. The implied covenant of{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">good faith and fair dealing</Link>
        {' '}is not defined in most insurance codes &mdash; courts created it. The{' '}
        <Link href="/resources/reasonable-expectations-doctrine" className="text-[#2E74B5] underline">reasonable expectations doctrine</Link>
        {' '}is not a statute &mdash; it is a judicial construct. The concept of &ldquo;bad faith&rdquo; itself has no universal statutory definition &mdash; it was developed through decades of case law. No one argues that these principles &ldquo;don&rsquo;t exist&rdquo; simply because a legislature never used those exact words. The three-trade rule is no different. The name is shorthand. The law is real.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney Kelly Kubiak, then of the Merlin Law Group,{' '}
        <a href="https://www.youtube.com/watch?v=5Px2tBYFWQ0" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          addressed this directly in a video on overhead and profit
        </a>, explaining the &ldquo;reasonably likely&rdquo; standard that underlies the three-trade shorthand. One commenter&rsquo;s reaction captured the problem precisely: &ldquo;I always thought you either had to have a contract or three trade or more, I never heard of reasonably likely.&rdquo; That gap between what adjusters think the rule is and what the law actually requires is where policyholders lose money.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Xactimate&rsquo;s Own Documentation Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth noting that{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate</Link>
        {' '}&mdash; the software that insurance companies use to generate the very estimates on which they base their payments &mdash; explicitly distinguishes between subcontractor overhead and profit (which is embedded in line-item pricing) and general contractor overhead and profit (which is not).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        General contractor O&amp;P must be added separately through Xactimate&rsquo;s &ldquo;Add-Ons&rdquo; parameters. Xactware&rsquo;s own white paper on overhead and profit states that &ldquo;the decision to use general O&amp;P &mdash; and the percentages applied &mdash; are the responsibility of those directly involved in the estimating process.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In other words, even the insurer&rsquo;s own estimating software recognizes that general contractor overhead and profit is a legitimate, separate cost component that should be evaluated and included when the scope of work warrants it. When an insurance company generates an Xactimate estimate with the O&amp;P field left at zero on a multi-trade loss, it is not following its own tool&rsquo;s documentation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://getinsights2-data.s3.amazonaws.com/WhitepaperOverheadandProfit.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Download Xactware&rsquo;s Overhead and Profit White Paper (PDF).
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Insurer Denies Overhead and Profit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company has denied or withheld overhead and profit on a claim involving multiple trades, consider the following steps:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Review your policy language.</strong> The first question is whether your policy contains explicit language restricting O&amp;P &mdash; the type of provision at issue in <em>Kurach</em>. Most standard homeowner&rsquo;s policies do not. If your policy is silent on O&amp;P, the majority-rule framework applies: O&amp;P is owed when a general contractor is reasonably likely to be needed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Document the trades required.</strong> List every distinct trade that the repair requires. If the list includes three or more &mdash; roofing, electrical, plumbing, drywall, painting, flooring, HVAC, cabinetry, tile work &mdash; that is strong evidence under the <em>Mee</em> framework that a general contractor is reasonably necessary.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Request the Xactimate file.</strong> Ask your insurer for the native .ESX file of its estimate. This file will show whether the adjuster included O&amp;P in the parameters. If the adjuster set O&amp;P to zero on a multi-trade loss, that is a fact worth documenting.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Get a contractor&rsquo;s estimate.</strong> Obtain one or more written estimates from licensed general contractors. If every contractor who bids the job includes overhead and profit, that is powerful evidence that O&amp;P is a real cost of the repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Consult a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">public adjuster</Link>
        {' '}or attorney.</strong> O&amp;P disputes can involve significant amounts of money &mdash; 20% of the entire repair estimate. A qualified public adjuster or policyholder attorney can evaluate your specific situation, review your policy language, and determine the best path forward.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cases Cited
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-sm leading-relaxed">
        <li><em>Gilderman v. State Farm Insurance Co.</em>, 649 A.2d 941 (Pa. Super. 1994). <a href="https://law.justia.com/cases/pennsylvania/superior-court/1994/437-pa-super-217-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Mee v. Safeco Insurance Co. of America</em>, 908 A.2d 344 (Pa. Super. 2006). <a href="https://www.courtlistener.com/opinion/1551164/mee-v-safeco-insurance-company-of-america/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">CourtListener</a> | <a href="https://caselaw.findlaw.com/court/pa-superior-court/1164464.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a> | <a href="https://law.justia.com/cases/pennsylvania/superior-court/2006/a14003-06.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Trinidad v. Florida Peninsula Insurance Co.</em>, 121 So. 3d 433 (Fla. 2013). <a href="https://caselaw.findlaw.com/court/fl-supreme-court/1637393.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a></li>
        <li><em>Tritschler v. Allstate Insurance Co.</em>, 213 Ariz. 505, 144 P.3d 519 (Ariz. Ct. App. 2006). <a href="https://caselaw.findlaw.com/court/az-court-of-appeals/1285810.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a></li>
        <li><em>Ghoman v. New Hampshire Insurance Co.</em>, 159 F. Supp. 2d 928 (N.D. Tex. 2001). <a href="https://law.justia.com/cases/federal/district-courts/FSupp2/159/928/2384313/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Burgess v. Farmers Insurance Co.</em>, 151 P.3d 92, 2006 OK 66 (Okla. 2006). <a href="https://law.justia.com/cases/oklahoma/supreme-court/2006/448123.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Mazzocki v. State Farm</em>, 1 A.D.3d 9 (N.Y. App. Div., 3d Dept. 2003). <a href="https://www.propertyinsurancecoveragelaw.com/2017/12/articles/class-action/entitlement-to-overhead-and-profit-on-an-actual-cash-value-estimate/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Merlin Law Group analysis</a></li>
        <li><em>Windridge of Naperville Condo. Ass&rsquo;n v. Philadelphia Indemnity Ins. Co.</em>, 932 F.3d 1035 (7th Cir. 2019). <a href="https://law.justia.com/cases/federal/appellate-courts/ca7/18-2103/18-2103-2019-08-07.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Kurach v. Truck Insurance Exchange</em>, 235 A.3d 1106 (Pa. 2020). <a href="https://law.justia.com/cases/pennsylvania/supreme-court/2020/12-eap-2019-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        State Regulatory Authority
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-sm leading-relaxed">
        <li>Texas Department of Insurance, Commissioner&rsquo;s Bulletin B-0045-98 (June 12, 1998). <a href="https://www.tdi.texas.gov/bulletins/1998/b-0045-8.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">TDI</a></li>
        <li>Colorado Division of Insurance, DORA Bulletin B-5.1 (1998)</li>
        <li>California Fair Claims Settlement Practices, 10 CCR 2695.9. <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Cornell LII</a></li>
        <li>Matthiesen, Wickert &amp; Lehrer, General Contractor Overhead and Profit Payments Chart. <a href="https://www.mwl-law.com/wp-content/uploads/2019/09/GENERAL-CONTRACTOR-OVERHEAD-AND-PROFIT-PAYMENTS-CHART-00215699x9EBBF.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">PDF</a></li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Resources
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-sm leading-relaxed">
        <li>Xactware Solutions, Inc., Overhead and Profit White Paper. <a href="https://getinsights2-data.s3.amazonaws.com/WhitepaperOverheadandProfit.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">PDF</a></li>
        <li>Larry Bache, &ldquo;When Is a Policyholder Entitled to Overhead and Profit?&rdquo; Property Insurance Coverage Law Blog (Oct. 2012). <a href="https://www.propertyinsurancecoveragelaw.com/blog/when-is-a-policyholder-entitled-to-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Daniel Ballard, &ldquo;A Refresher on Overhead and Profit in Pennsylvania: Mee v. Safeco,&rdquo; Property Insurance Coverage Law Blog (Mar. 2021). <a href="https://www.propertyinsurancecoveragelaw.com/blog/a-refresher-on-overhead-and-profit-in-pennsylvania-mee-v-safeco/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Corey Harris, &ldquo;Payment of Overhead and Profit,&rdquo; Property Insurance Coverage Law Blog (Mar. 2014). <a href="https://www.propertyinsurancecoveragelaw.com/blog/payment-of-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Merlin Law Group, &ldquo;Withholding Overhead and Profit&rdquo; (white paper). <a href="https://www.propertyinsurancecoveragelaw.com/wp-content/uploads/2019/01/Withholding-Overhead-and-Profit-1-1.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">PDF</a></li>
        <li>Kelly Kubiak, &ldquo;Overhead and Profit&rdquo; (video), Merlin Law Group (Jan. 2014). <a href="https://www.youtube.com/watch?v=5Px2tBYFWQ0" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">YouTube</a></li>
        <li>Wheeler, DiUlio &amp; Barnabei, &ldquo;When To Pay Overhead and Profit&rdquo; (July 2018). <a href="https://wdblegal.com/2018/07/when-to-pay-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Adjusters International, &ldquo;Overhead and Profit: Its Place in a Property Insurance Claim.&rdquo; <a href="https://www.adjustersinternational.com/pubs/adjusting-today/overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>United Policyholders, &ldquo;Payment of Overhead and Profit.&rdquo; <a href="https://uphelp.org/claim-guidance-publications/payment-of-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>MWL Law, &ldquo;General Contractor Overhead and Profit in First-Party Claims.&rdquo; <a href="https://www.mwl-law.com/general-contractor-overhead-and-profit-first-party-claims/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Carlton Fields, &ldquo;In Overhead and Profit Class Actions, The Third Trade&rsquo;s No Longer The Charm.&rdquo; <a href="https://propertycasualtyfocus.com/overhead-profit-class-actions-third-trades-no-longer-charm/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
      </ul>
    </>
  )
}
