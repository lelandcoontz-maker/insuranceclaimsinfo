import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Can California Insurers Depreciate Overhead & Profit? No — Here’s Why',
  description:
    'California Insurance Code Section 2051(b) limits deductions to physical depreciation of structural components. O&P is a service cost — it has no condition, no age, and cannot legally be depreciated. The statutory framework, regulatory requirements, and pending federal litigation explained.',
  summary:
    'California Insurance Code 2051(b) limits depreciation to physical wear of structural components. Overhead and profit is a service cost with no age or condition, so it cannot legally be depreciated. Challenge any carrier that depreciates O&P.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of insurance law as a Licensed Public Adjuster. It is not legal advice. If your insurer has depreciated overhead and profit on your claim, consult with a licensed attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You receive your actual cash value (ACV) payment and notice something strange. The insurer included <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">overhead and profit</Link> in the replacement cost estimate &mdash; acknowledging that a general contractor is needed &mdash; but then applied a depreciation percentage to the O&amp;P line item, reducing your payment by hundreds or thousands of dollars.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This practice is illegal in California. The statute that governs how insurers calculate actual cash value permits only one type of deduction: <strong>physical depreciation</strong> of <strong>structural components</strong>. Overhead and profit is neither physical nor a structural component. It cannot be depreciated under California law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Statute: California Insurance Code Section 2051(b)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 2051(b) defines how actual cash value is calculated
        under an open policy. Following AB 188 (Stats. 2019, ch. 59), effective January 1,
        2020, the same replacement-cost-less-depreciation formula applies to either a total
        or partial loss to the structure or its contents:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Under an open policy that requires payment of actual cash value, the measure
        of the actual cash value recovery, in whole or partial settlement of the claim, for
        either a total or partial loss to the structure or its contents, shall be the
        amount it would cost the insured to repair, rebuild, or replace the thing lost or
        injured less a fair and reasonable deduction for physical depreciation based upon
        its condition at the time of the injury or the policy limit, whichever is less. A
        deduction for physical depreciation shall apply only to components of a structure
        that are normally subject to repair and replacement during the useful life of that
        structure.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Cal. Ins. Code &sect; 2051(b), as amended by AB 188 (Stats. 2019, ch. 59), effective
        January 1, 2020. AB 188 (2019) eliminated the prior &sect; 2051(b)(1)/(b)(2)
        bifurcation between total and partial losses.{' '}
        <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=2051." target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read the statute on leginfo</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s prohibition on depreciating labor lives in the parallel regulation,
        10 CCR &sect; 2695.9(f)(1): &ldquo;Except for the intrinsic labor costs that are
        included in the cost of manufactured materials or goods, the expense of labor
        necessary to repair, rebuild or replace covered property is not a component of
        physical depreciation and shall not be subject to depreciation or betterment.&rdquo;
        Taken together, the statute and regulation impose four critical limitations on what
        can be depreciated:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>Physical depreciation only.</strong> The statutory deduction must be for &ldquo;physical depreciation&rdquo; &mdash; not any other kind of reduction.</li>
        <li><strong>Based on condition.</strong> The depreciation must be &ldquo;based upon its condition at the time of the injury&rdquo; &mdash; the item must have a measurable physical state that can deteriorate.</li>
        <li><strong>Components of a structure only.</strong> Depreciation applies &ldquo;only to components of a structure that are normally subject to repair and replacement during the useful life of that structure.&rdquo;</li>
        <li><strong>No labor.</strong> Under the regulation, labor (other than intrinsic labor embedded in manufactured materials) &ldquo;is not a component of physical depreciation and shall not be subject to depreciation or betterment.&rdquo;</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and profit fails the first three tests directly: it is not &ldquo;physical,&rdquo;
        it has no &ldquo;condition,&rdquo; and it is not a &ldquo;component of a structure.&rdquo;
        It also fails the fourth test by analogy: O&amp;P is a contractor service fee that
        functions analytically the same way labor does, and the legislature&rsquo;s express
        prohibition on labor depreciation reflects the broader principle that service costs
        cannot be depreciated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Regulation: 10 CCR 2695.9(f)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations reinforce the statutory framework. Title 10, California Code of Regulations, Section 2695.9(f) requires depreciation adjustments to be &ldquo;discernable, measurable, itemized, and specified as to dollar amount,&rdquo; to reflect a &ldquo;measurable difference in market value attributable to the condition and age of the property,&rdquo; and to apply only to property &ldquo;normally subject to repair and replacement during the useful life of the property.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And subsection (f)(1) explicitly addresses service costs:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Except for the intrinsic labor costs that are included in the cost of manufactured materials or goods, the expense of labor necessary to repair, rebuild or replace covered property is not a component of physical depreciation and shall not be subject to depreciation or betterment.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        10 CCR 2695.9(f) and (f)(1). <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read the regulation</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Labor Rule Applies to O&amp;P
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.9(f)(1) explicitly names &ldquo;labor&rdquo; as non-depreciable. It does not explicitly name &ldquo;overhead and profit.&rdquo; Carriers have seized on this omission to argue that while labor cannot be depreciated, O&amp;P can be.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument fails for a straightforward reason: the labor prohibition in (f)(1) is an application of the broader principle in (f), not an exception to it. The parent subsection already limits all depreciation to &ldquo;property normally subject to repair and replacement during the useful life of the property.&rdquo; O&amp;P is not &ldquo;property&rdquo; at all &mdash; it is a contractor&rsquo;s service fee. The regulation did not need to list O&amp;P separately because the general principle already excludes it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The analogy between labor and O&amp;P is exact:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Labor</strong> is the cost of a worker&rsquo;s time to perform repairs. It does not physically deteriorate. A plumber&rsquo;s hourly rate today is not &ldquo;depreciated&rdquo; by the age of your house.</li>
        <li><strong>Overhead</strong> is the cost of running the contractor&rsquo;s business &mdash; insurance, licensing, office expenses, vehicles, project management. These costs do not deteriorate. A contractor&rsquo;s business insurance premium is not reduced because your roof is 15 years old.</li>
        <li><strong>Profit</strong> is what the contractor earns for performing the work. A contractor&rsquo;s profit margin does not decrease because your house was built in 2005.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        All three are service costs necessary to accomplish the repair. None of them have a &ldquo;condition&rdquo; that can be measured. None of them &ldquo;wear out.&rdquo; None of them are &ldquo;components of a structure.&rdquo; Under Section 2051(b), none of them can be depreciated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Case Law
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Cal. Fair Plan Ass&rsquo;n v. Garnes (2017)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Court of Appeal, First Appellate District, confirmed that Section 2051(b) sets the formula for calculating ACV and limits deductions to &ldquo;physical depreciation.&rdquo; The Supreme Court denied review, effectively affirming. While this case addressed whether ACV can exceed fair market value for partial losses (it can), it establishes that Section 2051 is the controlling standard and that insurers cannot impose deductions beyond what the statute authorizes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Cal. Fair Plan Ass&rsquo;n v. Garnes, 11 Cal.App.5th 1276, 218 Cal.Rptr.3d 246 (Cal. App. 1st Dist. 2017). <a href="https://caselaw.findlaw.com/ca-court-of-appeal/1862181.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on FindLaw</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Pitkin v. State Farm General Insurance Co. (N.D. Cal. &mdash; Pending)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this federal class action, U.S. District Judge William H. Orrick certified a class of approximately 200,000 California homeowners alleging that State Farm violated Section 2051(b) by depreciating sales tax when calculating ACV for personal property claims. Trial is scheduled for September 8, 2026.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Judge Orrick&rsquo;s reasoning is directly relevant to O&amp;P: California Insurance Code prohibits deductions aside from &ldquo;physical depreciation,&rdquo; and sales tax is not a physical component that deteriorates. The same logic applies with even greater force to O&amp;P. If sales tax cannot be depreciated because it is not a &ldquo;component of a structure normally subject to repair and replacement,&rdquo; then O&amp;P &mdash; also not a structural component &mdash; likewise cannot be depreciated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Pitkin et al. v. State Farm General Ins. Co., Case No. 3:23-cv-00924-WHO (N.D. Cal.). <a href="https://law.justia.com/cases/federal/district-courts/california/candce/3:2023cv00924/409061/69/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Illinois: Sproull v. State Farm (2021)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While not California law, the Illinois Supreme Court&rsquo;s reasoning in{' '}
        <em>Sproull v. State Farm Fire &amp; Casualty Co.</em> is persuasive. Under the
        Illinois insurance regulation defining ACV as &ldquo;replacement cost of property
        at time of loss less depreciation, if any,&rdquo; and absent a policy definition
        of &ldquo;actual cash value,&rdquo; the court held that &ldquo;only the property
        structure and materials are subject to a reasonable deduction for depreciation,
        and depreciation may not be applied to the intangible labor component.&rdquo; The
        court reached this conclusion by finding the policy language ambiguous and
        construing the ambiguity against the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Sproull v. State Farm Fire &amp; Cas. Co., 2021 IL 126446 (Ill. 2021). <a href="https://law.justia.com/cases/illinois/supreme-court/2021/126446.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        CDI Enforcement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has enforced the depreciation limitations against carriers. In a March 2021 Market Conduct Examination of the California FAIR Plan Association, CDI found violations including &ldquo;instances in which depreciation was taken on items not normally subject to repair or replacement during their useful life.&rdquo; The FAIR Plan was required to review and correct past claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While no CDI bulletin explicitly states &ldquo;insurers may not depreciate overhead and profit&rdquo; using those exact words, the Department&rsquo;s enforcement of the general depreciation principle &mdash; that only physical components subject to wear can be depreciated &mdash; covers O&amp;P by implication. A contractor&rsquo;s management fee is not an &ldquo;item normally subject to repair or replacement during the useful life&rdquo; of anything.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your O&amp;P Was Depreciated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer&rsquo;s ACV payment shows depreciation applied to the overhead and profit line:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>Get the depreciation breakdown in writing.</strong> Under 10 CCR 2695.9(f), all depreciation adjustments must be &ldquo;discernable, measurable, itemized, and specified as to dollar amount.&rdquo; Ask your adjuster for a line-by-line depreciation schedule showing exactly what was depreciated and by how much.</li>
        <li><strong>Identify the O&amp;P depreciation.</strong> Look for depreciation applied to &ldquo;GC O&amp;P,&rdquo; &ldquo;overhead,&rdquo; &ldquo;profit,&rdquo; &ldquo;contractor supervision,&rdquo; or &ldquo;general conditions.&rdquo; In Xactimate, this may appear as depreciation applied to the entire estimate total (which includes O&amp;P) rather than to individual material line items.</li>
        <li><strong>Cite the statute.</strong> In your response to the insurer, quote Section 2051(b) and explain that O&amp;P is not a &ldquo;component of a structure normally subject to repair and replacement.&rdquo; Cite 10 CCR 2695.9(f)(1)&rsquo;s prohibition on labor depreciation and explain that O&amp;P is analytically identical to labor: a service cost, not a physical thing.</li>
        <li><strong>Calculate the dollar impact.</strong> If the carrier applied 30% depreciation to the entire estimate including $20,000 in O&amp;P, that is $6,000 improperly withheld. Quantify the overcharge.</li>
        <li><strong>File a <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">CDI complaint</Link> if the carrier refuses to correct it.</strong> Depreciating O&amp;P violates the Fair Claims Settlement Practices Regulations.</li>
        <li><strong>Consult an <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">attorney</Link>.</strong> If the dollar amount is significant, this may support a bad faith claim &mdash; particularly if the carrier&rsquo;s practice is systematic rather than a one-off error.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on Transparency
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No published California appellate decision has held, in its exact words, &ldquo;overhead and profit cannot be depreciated.&rdquo; The prohibition is derived from the statutory and regulatory framework rather than from a case that squarely decided this question. The <em>Pitkin</em> case (pending trial September 2026) addresses the same legal principle in the context of sales tax depreciation and may produce the first federal ruling that explicitly confirms non-physical costs cannot be depreciated under California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, the statutory text is unambiguous. Section 2051(b) authorizes only &ldquo;physical depreciation&rdquo; of &ldquo;components of a structure.&rdquo; Overhead and profit is not physical and is not a component of a structure. The argument that it can be depreciated has no basis in the text of the law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">Overhead &amp; Profit: When Your Claim Should Include O&amp;P</Link></li>
        <li><Link href="/resources/three-trade-rule" className="text-[#2E74B5] underline">The Three-Trade Rule: Why Your Insurance Company Owes O&amp;P</Link></li>
        <li><Link href="/resources/selective-op-denial" className="text-[#2E74B5] underline">Selective O&amp;P Denial: When Carriers Pay It on Some Trades But Not Others</Link></li>
        <li><Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">Labor Depreciation: Why California Bars It</Link></li>
        <li><Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">ACV vs. RCV: Actual vs. Replacement Cost Value</Link></li>
        <li><Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">California Fair Claims Settlement Practices Regulations</Link></li>
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
