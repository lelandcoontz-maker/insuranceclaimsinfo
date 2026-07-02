import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "50-State Map of Overhead and Profit Law on Claims",
  description:
    "State-by-state guide to overhead and profit law in property insurance claims, with majority and minority rules, regulators, and key case citations.",
  summary:
    'Whether your insurer must pay general contractor overhead and profit (O&P) depends on your state. Most states require it whenever repairs need a GC to coordinate multiple trades; a minority let insurers withhold it until actually incurred. This guide maps the rule, regulators, and case law state by state.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of insurance law as a Licensed Public Adjuster. It is not legal advice. The law on overhead and profit varies by state and is subject to change through legislation, regulation, and new court decisions. If you have a specific O&amp;P dispute, consult with a licensed attorney in your state who specializes in insurance coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">Overhead and profit</Link> (O&amp;P) is the fee a general contractor charges for managing, coordinating, and overseeing a repair project &mdash; typically 10% overhead and 10% profit, for a combined 20% on top of direct repair costs. Whether and when an insurer must include O&amp;P in a claim payment is one of the most litigated issues in property insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Across the country, two competing legal standards have emerged. The <strong>majority rule</strong> holds that O&amp;P must be included whenever a general contractor is &ldquo;reasonably likely&rdquo; to be needed &mdash; regardless of whether one has actually been hired. The <strong>minority rule</strong> holds that O&amp;P need not be paid until the policyholder actually hires a general contractor and incurs the expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article maps the law in every state where published authority exists, organized by which standard applies. For a detailed discussion of the legal principle underlying the majority rule, see our article on the <Link href="/resources/three-trade-rule" className="text-[#2E74B5] underline">three-trade rule</Link>. For the leading minority-rule case and its implications, see our article on the <Link href="/resources/kurach-op-policy-restrictions" className="text-[#2E74B5] underline">Kurach decision</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two Competing Standards
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Majority Rule: &ldquo;Reasonably Likely&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the majority rule, O&amp;P must be included in the insurer&rsquo;s estimate &mdash; including the initial actual cash value payment &mdash; whenever the insured is &ldquo;reasonably likely&rdquo; to need a general contractor to perform the repairs. The policyholder does not need to actually hire a GC or complete repairs before receiving O&amp;P. The test is whether the scope and complexity of the work make GC involvement probable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the standard adopted by the clear majority of states that have addressed the issue through case law or regulation.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Minority Rule: &ldquo;Actually Incurred&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the minority rule, O&amp;P is a cost that need not be paid until the policyholder actually hires a general contractor and incurs the expense. This approach treats O&amp;P as part of replacement cost that is payable only upon completion of repairs, rather than as a component of the initial ACV payment. The genesis of this view is <em>Snellen v. State Farm Fire &amp; Cas. Co.</em>, 675 F. Supp. 1064 (W.D. Ky. 1987).
      </p>

      {/* ================================================================ */}
      {/*  MAJORITY RULE STATES                                            */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-8">
        Majority Rule States: O&amp;P Owed When &ldquo;Reasonably Likely&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These states have appellate case law, regulatory bulletins, or both establishing that O&amp;P is owed whenever a general contractor&rsquo;s involvement is reasonably likely.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Arizona</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Tritschler v. Allstate Ins. Co.</em>, 213 Ariz. 505, 144 P.3d 519 (Ariz. Ct. App. 2006).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As a matter of first impression, the court held that &ldquo;actual cash value&rdquo; includes any cost that would be &ldquo;reasonably likely incurred&rdquo; in repair or replacement of a covered loss, including general contractor overhead and profit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://caselaw.findlaw.com/court/az-court-of-appeals/1285810.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on FindLaw</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Colorado</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> Colorado Division of Insurance (DORA) Bulletin B-5.1 (1998, reissued 2007) &mdash; &ldquo;Calculation of Actual Cash Value: Prohibition Against Deducting Contractors&rsquo; Overhead and Profit from Replacement Cost Where Repairs Are Not Made.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The bulletin prohibits deducting contractor O&amp;P in addition to depreciation when calculating ACV under replacement cost policies. ACV equals replacement cost minus depreciation, without further deduction for O&amp;P. Supporting case law: <em>Woodgate South Homeowners Assoc. v. American Family Mut. Ins. Co.</em>, No. 2013cv30784 (Colo. Dist. Ct. Oct. 20, 2014).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://doi.colorado.gov/statutes-regulations-bulletins/colorado-insurance-bulletins" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Colorado DOI Bulletins</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Florida</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Trinidad v. Florida Peninsula Ins. Co.</em>, 121 So. 3d 433 (Fla. 2013) (Florida Supreme Court); Fla. Stat. &sect; 627.7011.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Florida Supreme Court held that replacement cost coverage includes O&amp;P whenever the insured is &ldquo;reasonably likely to need a general contractor for the repairs.&rdquo; The insured need not actually hire a GC or complete repairs before receiving O&amp;P.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://caselaw.findlaw.com/court/fl-supreme-court/1637393.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on FindLaw</a>. <a href="https://www.flsenate.gov/laws/statutes/2021/627.7011" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read Fla. Stat. &sect; 627.7011</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Illinois</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Windridge of Naperville Condo. Assoc. v. Philadelphia Indem. Ins. Co.</em> (N.D. Ill.; affirmed 7th Cir. 2019, 932 F.3d 1035).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that if repairing or replacing property requires a general contractor, the cost of repair includes the industry-standard O&amp;P (10 and 10). No policy language permits withholding O&amp;P when a GC is required. The Seventh Circuit affirmed, noting that &ldquo;the majority of courts have concluded that general contractor overhead and profit should be included in the cost of repair.&rdquo;
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Michigan</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Salesin v. State Farm Fire &amp; Cas. Co.</em>, 581 N.W.2d 781 (Mich. Ct. App. 1998).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that replacement cost used to ascertain ACV is an estimate of all costs &ldquo;likely and reasonably expected to be incurred,&rdquo; and that GC expenses cannot be deducted unless such services are not likely required. The court held that O&amp;P was owed even though the policyholder would &ldquo;almost certainly&rdquo; not incur that expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://caselaw.findlaw.com/court/mi-court-of-appeals/1178083.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on FindLaw</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">New York</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Mazzocki v. State Farm Fire &amp; Cas. Corp.</em>, 1 A.D.3d 9 (N.Y. App. Div. 3rd Dept. 2003).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that &ldquo;replacement cost&rdquo; in insurance policies can reasonably be interpreted to include O&amp;P whenever it is &ldquo;reasonably likely&rdquo; that a general contractor will be needed. The decision follows the broad evidence rule for ACV, supported by <em>McAnarney v. Newark Fire Ins. Co.</em>, 247 N.Y. 176 (1928).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://caselaw.findlaw.com/court/ny-supreme-court/1329610.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on FindLaw</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Oklahoma</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Burgess v. Farmers Ins. Co., Inc.</em>, 151 P.3d 92, 2006 OK 66 (Okla. 2006) (Oklahoma Supreme Court).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Oklahoma Supreme Court certified a class for all Oklahoma policyholders whose claims involved three or more anticipated trades at the time of ACV adjustment and who were not paid the 20% O&amp;P. The court held that O&amp;P &mdash; typically 10% overhead plus 10% profit &mdash; is owed when the scope of work requires multiple trades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://law.justia.com/cases/oklahoma/supreme-court/2006/448123.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Pennsylvania (Policies Silent on O&amp;P)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Gilderman v. State Farm Ins. Co.</em>, 649 A.2d 941 (Pa. Super. 1994); <em>Mee v. Safeco Ins. Co. of America</em>, 908 A.2d 344 (Pa. Super. 2006).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policies that are <em>silent</em> on O&amp;P, Pennsylvania follows the majority rule: O&amp;P is owed when a general contractor is reasonably likely to be needed. <em>Gilderman</em> established the &ldquo;reasonably likely&rdquo; standard; <em>Mee</em> added a three-factor test. However, policies with <em>explicit</em> O&amp;P-withholding language are governed by <em><Link href="/resources/kurach-op-policy-restrictions" className="text-[#2E74B5] underline">Kurach v. Truck Ins. Exchange</Link></em>, 235 A.3d 1106 (Pa. 2020), which upheld conditional exclusion of O&amp;P from ACV payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://law.justia.com/cases/pennsylvania/superior-court/1994/437-pa-super-217-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Gilderman on Justia</a>. <a href="https://law.justia.com/cases/pennsylvania/superior-court/2006/a14003-06.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Mee on Justia</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Texas</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> Texas Commissioner&rsquo;s Bulletin B-0045-98 (June 12, 1998); <em>Ghoman v. New Hampshire Ins. Co.</em>, 159 F. Supp. 2d 928 (N.D. Tex. 2001).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Commissioner&rsquo;s Bulletin states that &ldquo;the deduction of prospective contractors&rsquo; overhead and profit and sales tax in determining the actual cash value under a replacement cost policy is improper, is not a reasonable interpretation of the policy language, and is unfair to insureds.&rdquo; Violations may trigger disciplinary action under the Texas Insurance Code. The court in <em>Ghoman</em> held that replacement costs include &ldquo;any cost that an insured is reasonably likely to incur,&rdquo; including O&amp;P and sales tax.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.tdi.texas.gov/bulletins/1998/b-0045-8.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Texas Commissioner&rsquo;s Bulletin B-0045-98</a>. <a href="https://law.justia.com/cases/federal/district-courts/FSupp2/159/928/2384313/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Ghoman on Justia</a>.
      </p>

      {/* ================================================================ */}
      {/*  REGULATORY / STATUTORY STATES                                   */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-8">
        Regulatory and Statutory Framework States
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These states have addressed O&amp;P through statutes, regulations, or formal regulatory bulletins, sometimes in addition to case law.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">California</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> 10 CCR 2695.9 (Fair Claims Settlement Practices Regulations).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation requires estimates that &ldquo;restore the damaged property to no less than its condition prior to the loss&rdquo; meeting &ldquo;accepted trade standards for good and workmanlike construction.&rdquo; The insurer must verify repair costs are &ldquo;accurate and representative of costs in the local market area.&rdquo; Labor costs are not subject to depreciation. The policyholder has the right to choose their own contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the regulation does not explicitly mandate O&amp;P by name, it requires estimates reflecting the actual cost to restore property &mdash; which implicitly includes O&amp;P when a general contractor would be needed. (Earlier California case law applied a broad-evidence approach to ACV; effective January 1, 2020, Insurance Code &sect; 2051(b) replaced that with a uniform statutory definition &mdash; replacement cost less a fair and reasonable deduction for physical depreciation &mdash; for both total and partial losses. Labor is not depreciated under &sect; 2051(b).)
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read 10 CCR 2695.9</a>. <a href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">CDI Fair Claims Regulations</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Tennessee</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> Tennessee Board of Licensing Contractors Rule (effective January 1, 2014); <em>Parkway Assoc., LLC v. Harleysville Mut. Ins. Co.</em>, 129 Fed. Appx. 955 (6th Cir. 2005).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tennessee&rsquo;s contractor licensing rule requires a licensed contractor when: (1) the project cost is $25,000 or more (excluding masonry), or (2) the project involves more than one subcontractor or tradesman. This establishes a <strong>two-trade threshold</strong> &mdash; not three &mdash; for when a GC is legally required. The Sixth Circuit in <em>Parkway</em> held that O&amp;P is owed when &ldquo;it is reasonably likely that the insured would be expected to hire a contractor.&rdquo; Because Tennessee law requires a licensed GC when two or more trades are needed, O&amp;P is effectively owed on most multi-trade claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.tninsurancelitigation.com/2016/11/when-is-overhead-and-profit-due-in-tennessee/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Tennessee O&amp;P Analysis</a>. <a href="https://www.tn.gov/commerce/regboards/contractors/rules-and-laws/laws.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">TN Contractor Board Rules</a>.
      </p>

      {/* ================================================================ */}
      {/*  MINORITY RULE STATES                                            */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-8">
        Minority Rule States: O&amp;P &ldquo;Actually Incurred&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A small number of jurisdictions have adopted the minority position that O&amp;P need not be paid until the policyholder actually hires a general contractor and incurs the expense.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Kentucky</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Snellen v. State Farm Fire &amp; Cas. Co.</em>, 675 F. Supp. 1064 (W.D. Ky. 1987).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seminal minority-view case. The court held that O&amp;P is a &ldquo;non-damage&rdquo; having no relation to the value of damaged property and represents only a cost incurred if repair or replacement takes place. O&amp;P is not payable under a replacement cost policy until actually incurred. <em>Snellen</em> has been cited by carriers nationwide to justify withholding O&amp;P, but its reasoning has been rejected by the majority of courts that have considered the question.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Pennsylvania (Policies with Explicit O&amp;P-Withholding Language)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em><Link href="/resources/kurach-op-policy-restrictions" className="text-[#2E74B5] underline">Kurach v. Truck Ins. Exchange</Link></em>, 235 A.3d 1106 (Pa. 2020) (4&ndash;3 decision).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where policy language explicitly provides that &ldquo;actual cash value settlements will not include estimated general contractor fees or charges &hellip; unless and until you actually incur and pay such fees,&rdquo; the insurer may withhold O&amp;P from ACV payments. This applies only to policies with explicit withholding language. Policies silent on O&amp;P remain governed by <em>Gilderman</em> and <em>Mee</em> under the majority &ldquo;reasonably likely&rdquo; standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://law.justia.com/cases/pennsylvania/supreme-court/2020/12-eap-2019-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Washington</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key Authority:</strong> <em>Hess v. North Pacific Ins. Co.</em>, 122 Wash.2d 180 (1993) (Washington Supreme Court).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that an insured under a fire policy is not entitled to recover full replacement costs (including O&amp;P) unless actual repair or replacement is undertaken and completed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://law.justia.com/cases/washington/supreme-court/1993/60026-1-1.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>

      {/* ================================================================ */}
      {/*  SPLIT / UNDECIDED / LIMITED                                     */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-8">
        States with Split, Limited, or No Published Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many states have not yet produced published appellate authority directly addressing O&amp;P in first-party property insurance claims. The absence of authority does not mean O&amp;P is not owed &mdash; most follow general indemnity principles and NAIC model guidelines that support O&amp;P inclusion. Several states have limited or conflicting authority.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Louisiana (Split Authority)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Louisiana has split federal district court decisions with no controlling state appellate authority. <em>Edwards v. Allstate Prop. &amp; Cas. Co.</em>, 2005 WL 221558 (E.D. La. 2005) dismissed an O&amp;P claim for failure to demonstrate need for a GC. But <em>Nguyen v. St. Paul Travelers Ins. Co.</em> (E.D. La. 2007) held that ACV equals replacement cost less depreciation, with replacement cost including O&amp;P.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Wisconsin (Settlement Authority Only)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        American Family Mutual Insurance Co. paid a $16.37 million settlement in 2025 resolving class action allegations that it improperly deducted labor, overhead, and profit from ACV payments. No published appellate opinion establishes the rule, but the settlement outcome strongly suggests the &ldquo;reasonably likely&rdquo; standard would apply.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Minnesota, New Jersey, Alabama</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Minnesota</strong> has no statute or regulation specifically addressing O&amp;P; the law comes from contested case decisions applying general contract interpretation principles. <strong>New Jersey</strong> follows the broad evidence rule for ACV but has no published O&amp;P-specific appellate authority. <strong>Alabama</strong> proposed SB 268 (2017) to define &ldquo;cost of undertaking&rdquo; to include &ldquo;materials, labor, supervision, overhead, and profit,&rdquo; but enactment status is unconfirmed.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">All Other States</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following states have no identified published appellate authority specifically addressing O&amp;P in first-party property claims: Alaska, Arkansas, Connecticut, Delaware, Georgia, Hawaii, Idaho, Indiana, Iowa, Kansas, Maine, Maryland, Massachusetts, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Mexico, North Carolina, North Dakota, Ohio, Oregon, Rhode Island, South Carolina, South Dakota, Utah, Vermont, Virginia, West Virginia, and Wyoming.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In these states, O&amp;P disputes are typically resolved by applying general principles of contract interpretation and the state&rsquo;s version of the NAIC Unfair Claims Settlement Practices Act, which requires that repair estimates reflect the actual cost to restore damaged property to its pre-loss condition.
      </p>

      {/* ================================================================ */}
      {/*  SUMMARY TABLE                                                   */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-8">
        Summary Table
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm text-gray-700 border border-gray-300">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-2 text-left border border-gray-300">State</th>
              <th className="px-4 py-2 text-left border border-gray-300">Standard</th>
              <th className="px-4 py-2 text-left border border-gray-300">Key Authority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Arizona</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely</td>
              <td className="px-4 py-2 border border-gray-300"><em>Tritschler v. Allstate</em> (2006)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">California</td>
              <td className="px-4 py-2 border border-gray-300">Regulatory</td>
              <td className="px-4 py-2 border border-gray-300">10 CCR 2695.9</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Colorado</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely + Regulatory</td>
              <td className="px-4 py-2 border border-gray-300">DORA Bulletin B-5.1; <em>Woodgate South</em> (2014)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Florida</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely + Statutory</td>
              <td className="px-4 py-2 border border-gray-300"><em>Trinidad</em> (2013); Fla. Stat. &sect; 627.7011</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Illinois</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely</td>
              <td className="px-4 py-2 border border-gray-300"><em>Windridge of Naperville</em> (7th Cir. 2019)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Michigan</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely</td>
              <td className="px-4 py-2 border border-gray-300"><em>Salesin v. State Farm</em> (1998)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">New York</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely</td>
              <td className="px-4 py-2 border border-gray-300"><em>Mazzocki v. State Farm</em> (2003)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Oklahoma</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely</td>
              <td className="px-4 py-2 border border-gray-300"><em>Burgess v. Farmers</em> (2006)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Pennsylvania (silent policies)</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely</td>
              <td className="px-4 py-2 border border-gray-300"><em>Gilderman</em> (1994); <em>Mee</em> (2006)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Tennessee</td>
              <td className="px-4 py-2 border border-gray-300">Regulatory (2-trade threshold)</td>
              <td className="px-4 py-2 border border-gray-300">TN Contractor Board Rule (2014); <em>Parkway</em> (6th Cir. 2005)</td>
            </tr>
            <tr className="bg-green-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Texas</td>
              <td className="px-4 py-2 border border-gray-300">Reasonably Likely + Regulatory</td>
              <td className="px-4 py-2 border border-gray-300">Bulletin B-0045-98; <em>Ghoman</em> (2001)</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Kentucky</td>
              <td className="px-4 py-2 border border-gray-300">Actually Incurred</td>
              <td className="px-4 py-2 border border-gray-300"><em>Snellen v. State Farm</em> (1987)</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Pennsylvania (explicit O&amp;P language)</td>
              <td className="px-4 py-2 border border-gray-300">Actually Incurred</td>
              <td className="px-4 py-2 border border-gray-300"><em>Kurach v. Truck Ins. Exch.</em> (2020)</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Washington</td>
              <td className="px-4 py-2 border border-gray-300">Actually Incurred</td>
              <td className="px-4 py-2 border border-gray-300"><em>Hess v. North Pacific Ins.</em> (1993)</td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Louisiana</td>
              <td className="px-4 py-2 border border-gray-300">Split / Undecided</td>
              <td className="px-4 py-2 border border-gray-300"><em>Edwards</em> (2005) vs. <em>Nguyen</em> (2007)</td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="px-4 py-2 border border-gray-300 font-medium">Wisconsin</td>
              <td className="px-4 py-2 border border-gray-300">Settlement Only</td>
              <td className="px-4 py-2 border border-gray-300">Am. Family $16.37M settlement (2025)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
        <strong>Green</strong> = Majority rule (O&amp;P owed when reasonably likely). <strong>Red</strong> = Minority rule (O&amp;P must be actually incurred). <strong>Yellow</strong> = Split or limited authority.
      </p>

      {/* ================================================================ */}
      {/*  NAIC AND RESOURCES                                              */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-8">
        The NAIC Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Neither the NAIC&rsquo;s Model Unfair Claims Settlement Practices Act (Model 900) nor its Unfair Property/Casualty Claims Settlement Practices Model Regulation (Model 902) explicitly addresses O&amp;P by name. However, Model 900 Section 4(A) prohibits &ldquo;misrepresenting pertinent facts or insurance policy provisions relating to coverages at issue,&rdquo; and Model 902 requires repair estimates that restore property &ldquo;to no less than its condition prior to the loss.&rdquo; These provisions provide a framework for arguing that withholding O&amp;P constitutes an unfair claims practice when the repair realistically requires a general contractor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Resources
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For additional research, these are the most comprehensive resources on O&amp;P law across jurisdictions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>MWL Law 50-State GCOP Chart</strong> &mdash; The most comprehensive published state-by-state analysis of O&amp;P case law. <a href="https://www.mwl-law.com/general-contractor-overhead-and-profit-first-party-claims/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Article and PDF chart</a>.
        </li>
        <li>
          <strong>Claims Journal</strong> &mdash; Gary Wickert, &ldquo;Paying Overhead and Profit in First-Party Claims&rdquo; (Oct. 31, 2019). <a href="https://www.claimsjournal.com/columns/road-to-recovery/2019/10/31/293871.htm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read article</a>.
        </li>
        <li>
          <strong>Adjusters International</strong> &mdash; &ldquo;Overhead and Profit&rdquo; publication. <a href="https://www.adjustersinternational.com/pubs/adjusting-today/overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read publication</a>.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; &ldquo;What&rsquo;s UP with Overhead and Profit?&rdquo; <a href="https://uphelp.org/claim-guidance-publications/whats-up-with-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read guidance</a>.
        </li>
        <li>
          <strong>Merlin Law Group</strong> &mdash; Multiple articles on O&amp;P law. <a href="https://www.propertyinsurancecoveragelaw.com/blog/when-is-a-policyholder-entitled-to-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">When Is a Policyholder Entitled to O&amp;P?</a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">Overhead &amp; Profit: When Your Claim Should Include O&amp;P</Link></li>
        <li><Link href="/resources/three-trade-rule" className="text-[#2E74B5] underline">The Three-Trade Rule: Why Your Insurance Company Owes O&amp;P</Link></li>
        <li><Link href="/resources/kurach-op-policy-restrictions" className="text-[#2E74B5] underline">When Your Policy Secretly Restricts O&amp;P: The Kurach Decision</Link></li>
        <li><Link href="/resources/xactimate-not-the-law" className="text-[#2E74B5] underline">Xactimate Is Not the Law</Link></li>
        <li><Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">ACV vs. RCV: Actual vs. Replacement Cost Value</Link></li>
        <li><Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">Loss Settlement Provisions</Link></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property Insurance Coverage Law Blog (Merlin Law Group)</strong> &mdash; Merlin Law Group has published extensively on overhead and profit, including state-by-state treatment of when O&amp;P is owed. Search the blog for &ldquo;overhead and profit.&rdquo;
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; Consumer-advocacy resources on overhead and profit and contractor pricing (uphelp.org).
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
