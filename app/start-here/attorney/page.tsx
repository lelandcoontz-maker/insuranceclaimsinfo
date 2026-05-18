import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Attorneys | InsuranceClaimsInfo.com',
  description: 'Case law, bad faith doctrine, CACI instructions, statutory remedies, and coverage analysis for insurance litigation attorneys.',
  alternates: { canonical: '/start-here/attorney' },
}

const sections = [
  {
    label: 'Bad Faith & Extracontractual Liability',
    desc: 'The doctrinal framework for holding carriers accountable beyond the policy limits.',
    articles: [
      { href: '/resources/bad-faith-explained', title: 'What Is "Bad Faith" and How Do I Know If My Insurer Is Doing It? (Canonical Primer)' },
      { href: '/resources/bad-faith-damages', title: 'Bad Faith Damages in California: What You Can Actually Recover' },
      { href: '/resources/duty-to-investigate', title: 'The Insurer\'s Duty to Investigate' },
      { href: '/resources/brandt-fees', title: 'Brandt Fees: Recovering Attorney\'s Fees as Damages' },
      { href: '/resources/elder-abuse-insurance', title: 'Elder Abuse Statutes in Insurance Claims: Enhanced Remedies' },
      { href: '/resources/insurer-fraud-vs-bad-faith', title: 'Insurer Fraud vs. Bad Faith: Where Is the Line?' },
    ],
  },
  {
    label: 'Coverage Doctrines',
    desc: 'The interpretive rules that determine whether a loss is covered.',
    articles: [
      { href: '/resources/efficient-proximate-cause', title: 'Efficient Proximate Cause Doctrine' },
      { href: '/resources/ensuing-loss', title: 'Ensuing Loss' },
      { href: '/resources/anti-concurrent-causation', title: 'Anti-Concurrent Causation' },
      { href: '/resources/wear-and-tear-cause-of-loss', title: 'Wear and Tear: Condition Is Not Causation' },
      { href: '/resources/exclusions', title: 'Policy Exclusions' },
      { href: '/resources/coverage-disputes', title: 'Coverage Disputes' },
    ],
  },
  {
    label: 'Statutes & Regulations',
    desc: 'The California statutory and regulatory framework for first-party claims handling.',
    articles: [
      { href: '/resources/california-fair-claims', title: 'California Fair Claims Regulations (10 CCR §2695)' },
      { href: '/resources/insurance-code-790', title: 'Insurance Code §790.03 and the 790 Letter' },
      { href: '/resources/standard-fire-policy-insurance-code-2070', title: 'California\'s Standard Fire Policy: §§2070–2071' },
      { href: '/resources/equitable-tolling', title: 'Equitable Tolling of the Statute of Limitations in California Insurance Claims' },
      { href: '/resources/appraisal-tolling-statute-limitations', title: 'Does Invoking Appraisal Toll the Statute of Limitations?' },
      { href: '/resources/policyholder-rights', title: 'Policyholder Rights Under California Law' },
      { href: '/resources/cdi-complaint', title: 'CDI Complaints and Enforcement' },
    ],
  },
  {
    label: 'CACI Jury Instructions',
    desc: 'The pattern instructions California courts give juries in first-party coverage cases.',
    articles: [
      { href: '/resources/caci-jury-instructions-insurance', title: 'CACI Jury Instructions for Insurance Litigation in California' },
    ],
  },
  {
    label: 'Valuation Disputes',
    desc: 'Technical valuation issues that appear in coverage litigation.',
    articles: [
      { href: '/resources/acv-rcv', title: 'ACV vs. RCV' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
      { href: '/resources/overhead-and-profit', title: 'Overhead & Profit' },
      { href: '/resources/xactimate', title: 'Xactimate and Carrier Estimating' },
      { href: '/resources/estimate-bid-invoice-xactimate', title: 'The Three Lives of an Xactimate Document' },
      { href: '/resources/scope-vs-price-disputes', title: 'Scope vs. Price Disputes' },
    ],
  },
  {
    label: 'Dispute Resolution',
    desc: 'Pre-litigation and alternative resolution mechanisms.',
    articles: [
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/appraisal-mediation-litigation-decision', title: 'Appraisal vs. Mediation vs. Litigation' },
      { href: '/resources/insurance-mediation', title: 'Insurance Mediation' },
    ],
  },
]

export default function AttorneyHubPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">For Attorneys</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Coverage analysis, bad faith doctrine, case law, CACI instructions, and statutory
            remedies for California first-party property insurance litigation. Written by a
            licensed Public Adjuster who works with plaintiff-side counsel daily.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What To Do When a New Case Lands */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">What To Do When a New Case Lands</h2>
          <p className="text-gray-500 text-sm mb-5">
            Five steps that determine whether a case settles, goes to appraisal, or goes to trial.
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Read the policy first — every endorsement, every condition.</strong>{' '}
              Coverage analysis turns on the form, the endorsements, and the conditions, not on
              the carrier&apos;s denial reasoning. Pull the declarations page, the policy form,
              and every endorsement. The exclusion the carrier is invoking may not say what they
              claim, or may be subject to ensuing-loss carve-back, or may be defeated by
              efficient proximate cause under <em>Garvey v. State Farm</em>, 48 Cal.3d 395 (1989).
            </li>
            <li>
              <strong>Pull the claim file in full, including the ESX and adjuster notes.</strong>{' '}
              Under California Insurance Code &sect;2071 and 10 CCR &sect;2695.9(d), the insured
              is entitled to copies of the documents the settlement was based on. Native
              Xactimate files (.ESX), adjuster notes, expert reports, internal correspondence.
              Discovery-quality production starts pre-litigation if you make the right written
              demand.
            </li>
            <li>
              <strong>Catalog regulatory violations from the file.</strong> Missed &sect;2695.5(e)
              acknowledgment deadlines, missed &sect;2695.7(b) 40-day decision deadlines,
              failure to comply with &sect;2695.7(d) thorough-investigation standard, denial
              without the bases required by &sect;2695.7(b)(1), failure to disclose all
              applicable benefits under &sect;2695.4(a). Each violation is admissible as evidence
              of bad faith — see <em>Rattan v. United Services Auto. Ass&rsquo;n</em>, 84
              Cal.App.4th 715 (2000).
            </li>
            <li>
              <strong>Calculate Brandt fees exposure from day one.</strong> Under{' '}
              <em>Brandt v. Superior Court</em>, 37 Cal.3d 813 (1985), attorney&apos;s fees
              reasonably incurred to recover policy benefits are recoverable as damages in a
              bad-faith action. This changes the contingency-fee math at intake and affects
              settlement dynamics throughout.
            </li>
            <li>
              <strong>Check the suit-limitation deadline immediately.</strong> Ins. Code
              &sect;2071 imposes a one-year suit limitation on fire policies (24 months for
              state-of-emergency losses). Equitable tolling doctrine applies but is
              fact-specific. The deadline is the deadline that loses cases.
            </li>
          </ol>
        </section>

        {/* Key Doctrinal Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Key Doctrinal Concepts</h2>
          <p className="text-gray-500 text-sm mb-5">
            The doctrinal framework California first-party coverage litigators work from.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Bad faith is a tort, not just a contract breach.</strong> Every insurance
              policy in California carries an implied covenant of good faith and fair dealing;
              when an insurer unreasonably delays, denies, or underpays a claim, the violation
              sounds in tort under <em>Gruenberg v. Aetna Ins. Co.</em>, 9 Cal.3d 566 (1973).
              Tort damages reach beyond the policy limits.
            </li>
            <li>
              <strong>The genuine dispute doctrine has limits.</strong> A reasonable disagreement
              protects the carrier; a manufactured dispute or a biased investigation does not.{' '}
              <em>Wilson v. 21st Century Ins. Co.</em>, 42 Cal.4th 713 (2007): the doctrine does
              not insulate an insurer that ignored evidence or relied on an expert whose opinion
              was not grounded in the actual facts.
            </li>
            <li>
              <strong>Brandt fees are recoverable as damages.</strong>{' '}
              <em>Brandt v. Superior Court</em>, 37 Cal.3d 813 (1985): attorney&apos;s fees
              reasonably incurred to obtain policy benefits are an element of damages in a
              bad-faith claim. The insurer pays not just the claim but the cost of forcing them
              to pay it.
            </li>
            <li>
              <strong>Punitive damages require clear and convincing evidence of oppression,
              fraud, or malice.</strong> Civ. Code &sect;3294. Egregious carrier conduct —
              willful indifference, retaliation, deliberate misrepresentation — meets the
              standard; ordinary negligence does not.
            </li>
            <li>
              <strong>Efficient proximate cause governs first-party causation analysis.</strong>{' '}
              <em>Garvey v. State Farm</em>, 48 Cal.3d 395 (1989): the cause that sets the chain
              of damage in motion controls, not the most immediate cause. The{' '}
              <em>Julian v. Hartford Underwriters</em>, 35 Cal.4th 747 (2005) refinement is
              important: weather-conditions exclusions can still defeat coverage where weather
              interacts with an excluded peril.
            </li>
            <li>
              <strong>The §2071 standard fire policy framework.</strong> Ins. Code &sect;2071
              sets the floor for fire policies in California — proof of loss, examination under
              oath, appraisal, and the one-year suit limitation (24 months for state-of-emergency
              losses). The standard fire policy is read into every policy that purports to cover
              fire.
            </li>
          </ul>
        </section>

        {/* Common Tactical Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Common Tactical Errors</h2>
          <p className="text-gray-500 text-sm mb-5">
            Errors that cost cases even when the substantive position is correct.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Treating it as a contract case when it is a tort case.</strong> Limiting
              the complaint to breach of contract limits damages to policy benefits. The
              bad-faith count opens emotional-distress damages, Brandt fees, and (with the right
              record) punitive exposure. Plead it from the start.
            </li>
            <li>
              <strong>Missing the suit-limitation deadline.</strong> The &sect;2071 12-month /
              24-month suit limitation is shorter than most attorneys expect, and the clock can
              run from inception of loss rather than denial. Equitable tolling exists but is not
              automatic.
            </li>
            <li>
              <strong>Underestimating Brandt fee recovery.</strong> Brandt fees are damages,
              recoverable from the insurer, on top of policy benefits. They change the leverage
              calculus and they materially shift the contingency-fee economics. Build the fee
              record from the engagement letter forward.
            </li>
            <li>
              <strong>Failing to engage a Public Adjuster early for damages testimony.</strong> A
              licensed PA can quantify the loss, document carrier conduct, and provide damages
              testimony at trial or appraisal. Engaging late means the file is built around the
              carrier&apos;s narrative; engaging early means the record reflects the
              insured&apos;s measure of loss from day one.
            </li>
            <li>
              <strong>Failing to catalog regulatory violations as bad-faith evidence.</strong>{' '}
              Each &sect;2695 deadline missed, each disclosure obligation breached under
              &sect;2695.4(a), each unreasonable investigation under &sect;2695.7(d) is
              potentially admissible. The pattern is the case. Build the pattern.
            </li>
          </ul>
        </section>

        {/* Curated Reading Path */}
        <h2 className="text-2xl font-bold text-[#1F3964] mb-6">Read Next</h2>
        <div className="space-y-12">
          {sections.map(section => (
            <div key={section.label}>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{section.label}</h3>
              <p className="text-gray-500 text-sm mb-4">{section.desc}</p>
              <div className="space-y-2">
                {section.articles.map(article => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block p-3 rounded-lg border border-gray-200 hover:border-[#1F3964] hover:shadow-sm transition-all"
                  >
                    <span className="text-[#1F3964] font-medium text-sm">{article.title}</span>
                    <span className="text-gray-400 ml-2">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#EFF4FB] rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Need a Public Adjuster on a Case?</h2>
          <p className="text-gray-600 mb-4">
            Licensed PA available for expert consultation, claim-file analysis, damages testimony,
            and umpire service on California first-party property matters.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
