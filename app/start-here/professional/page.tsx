import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here: Claims Professionals | InsuranceClaimsInfo.com',
  description: 'Technical references for public adjusters, contractors, and restoration professionals — estimating, scoping, appraisal, and dispute strategy.',
  alternates: { canonical: '/start-here/professional' },
}

const sections = [
  {
    label: 'Estimating & Xactimate',
    desc: 'The estimate is the battlefield. Win or lose happens in the line items.',
    articles: [
      { href: '/resources/xactimate', title: 'Xactimate Estimates: What You Need to Know' },
      { href: '/resources/how-to-read-xactimate-estimate', title: 'How to Read an Xactimate Estimate' },
      { href: '/resources/estimate-bid-invoice-xactimate', title: 'The Three Lives of an Xactimate Document: Estimate, Bid, and Invoice' },
      { href: '/resources/xactimate-labor-efficiency-settings', title: 'Xactimate Labor Efficiency Settings: How Restoration vs. Rebuild Changes Every Line Item' },
      { href: '/resources/overhead-and-profit', title: 'Overhead & Profit: When It\'s Owed' },
      { href: '/resources/three-trade-rule', title: 'The Three-Trade Rule' },
      { href: '/resources/how-to-challenge-xactimate-estimate', title: 'How to Challenge an Xactimate Estimate: A Step-by-Step Guide' },
      { href: '/resources/excessive-depreciation', title: 'Excessive Depreciation' },
    ],
  },
  {
    label: 'Scoping & Documentation',
    desc: 'What you document in the field determines what you can defend at the desk.',
    articles: [
      { href: '/resources/scoping-the-loss', title: 'Scoping the Loss' },
      { href: '/resources/commonly-missed-items', title: 'Commonly Missed Items' },
      { href: '/resources/color-matching-material-aging', title: 'Color Matching, Material Aging, and What Your Insurance Company Owes' },
      { href: '/resources/contents-inventory-guide', title: 'Contents Inventory Documentation' },
      { href: '/resources/proof-of-loss', title: 'Proof of Loss' },
    ],
  },
  {
    label: 'Appraisal Practice',
    desc: 'Appraisal is where most underpaid claims end up. Know the process cold.',
    articles: [
      { href: '/resources/appraisal', title: 'Insurance Appraisal in California' },
      { href: '/resources/appraisal-practitioner-guide', title: 'Appraisal Practitioner Guide' },
      { href: '/resources/appraisal-mediation-litigation-decision', title: 'Appraisal vs. Mediation vs. Litigation' },
      { href: '/resources/reading-statement-of-loss', title: 'Reading the Statement of Loss' },
    ],
  },
  {
    label: 'Dispute Strategy',
    desc: 'When the carrier says no, you need to know the rules they\'re supposed to follow.',
    articles: [
      { href: '/resources/release-trap-insurance-claims', title: 'The Release Trap: What You Sign Away When You Sign' },
      { href: '/resources/insurer-directed-failed-repairs-wasted-policy-limits', title: 'When the Insurance Company Burns Your Policy Limits on Repairs That Were Never Going to Work' },
      { href: '/resources/repair-first-or-negotiate-first', title: 'Repair First or Negotiate First: The Strategic Dilemma at the Heart of Every Property Insurance Claim' },
      { href: '/resources/negotiation', title: 'Negotiation Tactics' },
      { href: '/resources/claim-negotiation-letters', title: 'Template Demand Letters' },
      { href: '/resources/california-fair-claims', title: 'California Fair Claims Regulations' },
      { href: '/resources/insurance-delay-tactics', title: 'Carrier Delay Tactics' },
    ],
  },
  {
    label: 'Coverage Issues',
    desc: 'Coverage questions you\'ll run into on complex residential and commercial losses.',
    articles: [
      { href: '/resources/efficient-proximate-cause', title: 'Efficient Proximate Cause' },
      { href: '/resources/ensuing-loss', title: 'Ensuing Loss' },
      { href: '/resources/ordinance-law', title: 'Ordinance or Law Coverage' },
      { href: '/resources/debris-removal', title: 'Debris Removal Coverage' },
      { href: '/resources/commercial-coinsurance', title: 'Commercial Coinsurance' },
    ],
  },
  {
    label: 'Specialized Damage Types',
    desc: 'Technical references for specific loss types.',
    articles: [
      { href: '/resources/smoke-damage-claims', title: 'Smoke Damage Claims' },
      { href: '/resources/urban-vs-forest-wildfire-smoke', title: 'Urban vs. Forest Fire Smoke' },
      { href: '/resources/mold-losses', title: 'Mold Losses' },
      { href: '/resources/asbestos-lead-claims', title: 'Asbestos & Lead Paint' },
      { href: '/resources/total-loss', title: 'Total Loss Claims' },
    ],
  },
]

export default function ProfessionalHubPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/start-here" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Start Here
          </Link>
          <h1 className="text-3xl font-bold mb-3">For Claims Professionals</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Technical references for public adjusters, contractors, and restoration professionals
            working California claims. Estimating, scoping, appraisal, and the regulatory
            framework that governs carrier behavior — written from the practitioner side.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What To Do On Every File */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">What To Do On Every File</h2>
          <p className="text-gray-500 text-sm mb-5">
            Five practitioner steps that change the trajectory of a claim before negotiation even starts.
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Get the ESX file, not just the PDF.</strong> The PDF is a printout; the ESX
              is the file. Under 10 CCR &sect;2695.9(d), you have a right to copies of the
              documents the settlement is based on. Request the native Xactimate file in
              writing — labor-efficiency setting, line items, sketches, notes, photos. The PDF
              hides what the ESX shows.
            </li>
            <li>
              <strong>Check the labor-efficiency setting before you do anything else.</strong>{' '}
              Restoration/Service/Remodel is the default for repair work. Large
              Restoration/Remodel cuts pricing ~5–10%. Total Rebuild (new construction) cuts
              further. Misuse of the setting is a structural, global underpayment that hits
              every labor line. If the carrier is on Total Rebuild for an occupied-home repair,
              you have a fight on a single setting that affects every item.
            </li>
            <li>
              <strong>Cite the regulation that requires restoration to pre-loss
              condition.</strong> 10 CCR &sect;2695.9(d): the estimate must &ldquo;restore the
              damaged property to no less than its condition prior to the loss&rdquo; and the
              carrier must take reasonable steps to verify costs are accurate and representative
              of local market pricing. Every excluded scope item, every below-market unit price,
              can be challenged under that standard.
            </li>
            <li>
              <strong>Document carrier refusals in writing the day they happen.</strong> Refused
              inspections, refused cleaning tests, refused supplements, refused requests for
              documentation. Each refusal is potential evidence of an unreasonable investigation
              under &sect;2695.7(d) — but only if the file shows it happened. Memorialize verbal
              refusals with same-day emails.
            </li>
            <li>
              <strong>Build the appraisal record from day one.</strong> Treat every disputed
              claim as if appraisal is coming. Comparable bids, line-item comparisons, photos of
              damage and of the carrier&apos;s expert taking photos of damage, IICRC standards
              on the file when relevant. By the time you invoke under &sect;2071, the record
              should already exist.
            </li>
          </ol>
        </section>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Key Concepts</h2>
          <p className="text-gray-500 text-sm mb-5">
            The regulatory and doctrinal levers California practitioners use on every disputed claim.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Labor does not depreciate.</strong> 10 CCR &sect;2695.9(f)(1): the expense
              of labor is not a component of physical depreciation and shall not be subject to
              depreciation or betterment. Materials yes, labor no. If you see labor depreciated,
              the line is invalid on its face.
            </li>
            <li>
              <strong>Overhead and profit on multi-trade jobs.</strong> When three or more trades
              are reasonably needed to coordinate a repair, general contractor O&amp;P is part
              of the measure of indemnity. The carrier&apos;s argument that O&amp;P
              &ldquo;doesn&apos;t apply&rdquo; until a GC is hired ignores the basic rule that
              the policy pays the cost to restore, not the cost minimized.
            </li>
            <li>
              <strong>No specific contractor required.</strong> 10 CCR &sect;2695.9(b): the
              insurer may not require the insured to have the property repaired by a specific
              individual or entity. The carrier&apos;s &ldquo;preferred vendor&rdquo; is a
              recommendation, not a requirement.
            </li>
            <li>
              <strong>The name-a-contractor regulation.</strong> When the carrier&apos;s
              estimate is lower than the insured&apos;s bid, 10 CCR &sect;2695.9(d) requires
              the insurer to either pay the difference or name a contractor who will do the
              work for the insurer&apos;s number. Most cannot. Force the issue in writing.
            </li>
            <li>
              <strong>Thorough, fair, and objective investigation.</strong> 10 CCR
              &sect;2695.7(d) — the standard the carrier&apos;s adjuster must meet. Most
              carrier-directed denials and lowballs fail this standard when examined. Build the
              file around the standard, not around the result.
            </li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Common Mistakes Practitioners Make</h2>
          <p className="text-gray-500 text-sm mb-5">
            Mistakes that cost the file, even when the substantive analysis is right.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Accepting the carrier&apos;s Xactimate at face value.</strong> Every
              estimate has a profile, a labor-efficiency setting, regional pricing, and choices
              the carrier&apos;s estimator made about scope and quality. Review the global
              settings before you review the line items. A misset profile defeats every
              line-by-line argument.
            </li>
            <li>
              <strong>Failing to demand the ESX in writing.</strong> A PDF is what the carrier
              sends. The ESX is what you need to review their work. Verbal requests get
              forgotten; written requests create a regulatory record and put &sect;2695.9(d)
              compliance in play.
            </li>
            <li>
              <strong>Skipping the formal demand letter step.</strong> Verbal disagreement does
              not preserve the record. A written demand letter — citing the specific regulatory
              provision violated, the specific dollar gap, a specific deadline for response —
              turns the negotiation into a documented exchange. The file will need that exchange
              if it goes to appraisal or litigation.
            </li>
            <li>
              <strong>Missing the recoverable-depreciation window.</strong> &sect;2051.5(b) sets
              the floor at 12 months from the first ACV payment (36 for state-of-emergency
              losses). Your client&apos;s deadline is your deadline. Calendar it the day the ACV
              check clears.
            </li>
            <li>
              <strong>Not preserving evidence before mitigation begins.</strong> Once the
              contents are bagged, the drywall is opened, and the wet flooring is removed, the
              loss as the carrier first saw it is gone. Photograph before, during, after. Keep
              the failed component (the burst valve, the cracked pipe). Plumber&apos;s report on
              file.
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
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">Referral Partner?</h2>
          <p className="text-gray-600 mb-4">
            If you have a policyholder who needs a Public Adjuster, reach out. Same-day response.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
