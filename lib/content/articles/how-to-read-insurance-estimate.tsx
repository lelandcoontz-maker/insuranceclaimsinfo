import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Read the Estimate Your Insurance Company Sent You',
  description:
    'A plain-language guide to understanding Xactimate estimates, line items, depreciation schedules, and what to question when the numbers seem low.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance company sent you a stack of pages covered in line items, codes, and numbers.
        It looks official. It looks final. It is neither. This is their opening offer disguised as
        a technical document. Understanding what it says, and what it leaves out, is the first step
        toward getting paid fairly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance estimates are written in a software program called Xactimate. This guide
        explains how to read one even if you have never seen one before. For a deeper dive into the
        software itself, see our{' '}
        <Link href="/resources/how-to-read-xactimate-estimate" className="text-blue-700 underline hover:text-blue-900">
          detailed Xactimate reading guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Basic Structure of an Insurance Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical insurance estimate contains several sections:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cover page:</strong> Your claim number, date of loss, adjuster name, and policy
          information.
        </li>
        <li>
          <strong>Line items:</strong> The actual list of repairs, organized by room or area. Each
          line includes a description, quantity, unit price, and total.
        </li>
        <li>
          <strong>Summary page:</strong> Totals for each category (roofing, drywall, flooring, etc.)
          plus overhead, profit, and tax calculations.
        </li>
        <li>
          <strong>Depreciation schedule:</strong> A separate page showing how much they subtracted
          from each item for age and wear.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding Line Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each line item represents one task or material. Here is how to read one:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Example:</strong> &ldquo;Remove &amp; replace drywall, 1/2&quot; — 4x8, hung,
        taped, floated, ready for paint — 128 SF @ $2.87/SF = $367.36&rdquo;
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Description:</strong> What work is being done (remove and replace drywall)
        </li>
        <li>
          <strong>Specification:</strong> Material details (1/2 inch, 4x8 sheets)
        </li>
        <li>
          <strong>Scope:</strong> What is included (hung, taped, floated, ready for paint)
        </li>
        <li>
          <strong>Quantity:</strong> How much (128 square feet)
        </li>
        <li>
          <strong>Unit price:</strong> Cost per unit ($2.87 per square foot)
        </li>
        <li>
          <strong>Total:</strong> Quantity times unit price ($367.36)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The unit price in Xactimate comes from a database that is updated monthly based on regional
        labor and material costs. For more on how this pricing works, see our{' '}
        <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
          Xactimate overview
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Scope vs. Price">
        <p>
          There are two ways an estimate can be wrong: the scope can be incomplete (they left out
          damaged areas) or the pricing can be inadequate (they included the work but at an
          unrealistically low cost). Both are common. Check for both. Scope issues are usually more
          significant than pricing issues.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Usually Missing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance estimates are notorious for omitting legitimate repair items. Look for these
        common gaps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Matching:</strong> If they replace 20% of your flooring, the new material may not
          match the remaining 80%. Your policy likely requires a reasonable match. If matching is
          impossible, the entire floor should be replaced.
        </li>
        <li>
          <strong>Code upgrades:</strong> Building codes change. If your 1985 electrical panel is
          damaged, the replacement must meet 2026 code. The additional cost is covered if you have
          ordinance or law coverage.
        </li>
        <li>
          <strong>Tearout/setup:</strong> You cannot paint a ceiling without moving furniture,
          covering floors, and masking trim. These &ldquo;setup&rdquo; items are often excluded.
        </li>
        <li>
          <strong>Texture matching:</strong> If your walls have a hand-applied texture (knockdown,
          orange peel, skip trowel), matching that texture costs more than smooth drywall. Many
          estimates default to the cheapest finish.
        </li>
        <li>
          <strong>General contractor overhead and profit:</strong> When three or more trades are
          required, a general contractor is necessary to coordinate the work. Their standard markup
          (typically 10% overhead + 10% profit) belongs in the estimate.
        </li>
        <li>
          <strong>Permit costs:</strong> Many repairs require building permits. The permit fees and
          associated inspection time should be in the estimate.
        </li>
        <li>
          <strong>Related damage:</strong> Removing a water-damaged cabinet means disconnecting
          plumbing. That plumber cost should appear in the estimate.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Overhead and Profit (O&amp;P)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most commonly disputed items. When a general contractor manages your
        repair project, they charge overhead (their business costs) and profit (their compensation
        for managing the job). The industry standard is 10% for each, totaling 20% on top of the
        repair costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurance estimates exclude O&amp;P entirely or include it at a reduced rate. If your
        repair requires multiple trades (roofer, plumber, electrician, drywall, painter), a general
        contractor is needed to coordinate. O&amp;P belongs in your estimate. See our{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit guide
        </Link>{' '}
        for the full explanation of when and why it applies.
      </p>

      <CalloutBox variant="warning" title="Do Not Accept O&amp;P Exclusion Without a Fight">
        <p>
          If the insurer says O&amp;P &ldquo;does not apply&rdquo; or &ldquo;will be considered
          later,&rdquo; ask them to cite the policy language that excludes it. There is no such
          exclusion. O&amp;P is a legitimate cost of repair, and your policy pays for the cost to
          restore your property. Insurers routinely exclude it to save money, not because it is
          inapplicable.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Depreciation Schedule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your policy pays actual cash value (ACV) initially with replacement cost value (RCV)
        recoverable later, the estimate includes a depreciation schedule. This document shows how
        much the insurer subtracted from each item based on age and condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Things to check on the depreciation schedule:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Are they depreciating labor?</strong> In California, labor cannot be depreciated.
          The cost to install a new roof shingle is the same whether the shingle is 1 year old or
          20 years old. Only materials should be depreciated. If you see labor depreciated, challenge
          it.
        </li>
        <li>
          <strong>Are the useful life estimates reasonable?</strong> An insurer might claim a
          15-year-old roof has zero remaining life. But if that roof had a 30-year warranty, it had
          15 years of useful life remaining.
        </li>
        <li>
          <strong>Is the condition assessment accurate?</strong> Depreciation should reflect actual
          condition, not just age. A well-maintained 20-year-old kitchen is worth more than the
          formula suggests.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full explanation of how ACV and RCV work, see our{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          ACV vs. RCV guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Comparing the Estimate to Contractor Bids
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Get at least one contractor bid for the same scope of work. When you compare them:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Is the scope the same?</strong> The contractor might include items the insurance
          estimate omitted. That is a scope dispute you can raise with the insurer.
        </li>
        <li>
          <strong>Are the quantities the same?</strong> If the insurer says 128 SF of drywall and
          your contractor measures 200 SF, someone is wrong. Usually it is the adjuster who
          undermeasured.
        </li>
        <li>
          <strong>Are the prices realistic?</strong> Xactimate prices are market averages. In
          high-cost areas or after catastrophe events, actual contractor pricing may exceed
          Xactimate. That does not mean the contractor is overcharging. It means the database is
          behind the market.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Red Flags on Insurance Estimates
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Watch for these indicators that the estimate was written to minimize payment:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>&ldquo;Repair&rdquo; where replacement is clearly needed</li>
        <li>Minimum charges on items that should have larger quantities</li>
        <li>Missing rooms or areas you know are damaged</li>
        <li>No line items for moving contents, protecting finishes, or cleanup</li>
        <li>Generic descriptions instead of specific materials (e.g., &ldquo;carpet&rdquo; instead
            of &ldquo;nylon carpet, 40 oz, commercial grade&rdquo;)
        </li>
        <li>Suspiciously round numbers in the quantities</li>
        <li>No O&amp;P on a multi-trade repair</li>
        <li>Labor depreciation (illegal in California)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Estimate Is Too Low
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An inadequate estimate is not the final word. You have options:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get a contractor estimate</strong> for the full scope of repairs needed.
        </li>
        <li>
          <strong>Submit a supplement</strong> identifying the missing items and inadequate pricing,
          with your contractor&rsquo;s bid as support.
        </li>
        <li>
          <strong>Negotiate</strong> specific line items with documentation (see our{' '}
          <Link href="/resources/negotiation" className="text-blue-700 underline hover:text-blue-900">
            negotiation guide
          </Link>).
        </li>
        <li>
          <strong>Invoke appraisal</strong> if negotiations stall. This is a binding process where
          independent appraisers determine the loss amount (see our{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal guide
          </Link>).
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-6">
        The estimate your insurance company sends is a starting point for negotiation, not a final
        determination of what your damage is worth. Treat it as such. Review it carefully, identify
        what is missing, and push back with evidence. The policyholders who get paid fairly are the
        ones who question the first offer.
      </p>
    </>
  )
}
