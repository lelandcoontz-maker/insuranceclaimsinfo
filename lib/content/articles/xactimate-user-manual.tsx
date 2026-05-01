import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Xactimate User Manual: What It Is, Why It Matters, and How to Use It',
  description:
    'A practitioner\'s guide to Xactimate — the industry-standard estimating software. Pricing database, line items, overhead and profit, depreciation, certification levels, and practical tips.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is the estimating software that drives virtually every property insurance claim
        in America. Whether you are a policyholder trying to understand an estimate, a contractor
        preparing a repair bid, or a claims professional building a scope &mdash; the software is
        at the center of the process. But few people who use Xactimate actually understand how
        the software works, what its user manual says, or why those details matter when money is
        on the line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide walks through what the Xactimate user manual covers, what the software is
        designed to do (and what it is not), and how to use it effectively in a claims
        environment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Xactimate Is and Who Uses It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a property estimating platform developed by Verisk Analytics (formerly
        Xactware). It contains a continuously updated pricing database of labor, material, and
        equipment costs for virtually every component of residential and commercial construction.
        The database is localized &mdash; pricing is adjusted by geographic area &mdash; and
        updated regularly to reflect current market conditions, material costs, and labor rates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The software is used by nearly every major participant in the property claims process:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance company adjusters</strong> &mdash; both staff adjusters and
          independent adjusters use Xactimate to prepare the initial estimates that determine
          how much the carrier pays on a claim
        </li>
        <li>
          <strong>Contractors and restoration companies</strong> &mdash; many contractors use
          Xactimate to prepare repair bids in the same format the insurance company uses,
          making comparisons straightforward
        </li>
        <li>
          <strong>Public Adjusters</strong> &mdash; licensed{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjusters
          </Link>{' '}
          use Xactimate to prepare independent estimates on behalf of policyholders, identifying
          missing line items and challenging carrier underpayments
        </li>
        <li>
          <strong>Appraisal panels</strong> &mdash; when a claim goes to{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>, both the policyholder&apos;s appraiser and the carrier&apos;s appraiser
          typically present Xactimate estimates to the umpire
        </li>
        <li>
          <strong>Attorneys and litigation consultants</strong> &mdash; in disputed claims and
          bad faith litigation, Xactimate estimates are central evidence documents
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because Xactimate is the common language of property claims, understanding how it
        works &mdash; and where it breaks down &mdash; is essential for anyone involved in
        the process.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Xactimate User Manual: Purpose and Location
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Xactimate user manual is the official documentation that explains how the software
        is intended to be used, how its pricing is structured, and what the rules are for
        building estimates. It is not a single booklet &mdash; it exists across several
        locations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Within the software (Help menu)</strong> &mdash; Xactimate includes built-in
          help documentation accessible from the application. This covers interface navigation,
          line item selection, sketching tools, and reporting
        </li>
        <li>
          <strong>Verisk/Xactware online knowledge base</strong> &mdash; Verisk maintains an
          online resource library with articles, tutorials, FAQs, and detailed technical
          documentation on pricing methodology, line item inclusions, and software features
        </li>
        <li>
          <strong>Xactimate University certification program</strong> &mdash; the formal
          training and certification curriculum developed by Verisk includes detailed
          instructional materials that function as an extended user manual, covering everything
          from basic navigation to advanced estimating techniques
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many disputes in insurance claims arise because one or both parties are not following
        the software&apos;s own methodology. The user manual is the authoritative source for
        how Xactimate is intended to work &mdash; and citing it in a dispute carries weight.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the User Manual Covers
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Pricing Database
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The heart of Xactimate is its pricing database. Every line item in the software has
        a price that is broken down into specific components:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Unit of measure</strong> &mdash; what the line item is measured in (square
          feet, linear feet, each, per hour, etc.)
        </li>
        <li>
          <strong>Material cost</strong> &mdash; the cost of the materials needed for that line
          item
        </li>
        <li>
          <strong>Labor cost</strong> &mdash; the cost of the labor to install, remove, or
          perform the work
        </li>
        <li>
          <strong>Equipment cost</strong> &mdash; the cost of any equipment required for the
          work (this is zero for many line items but significant for others, such as heavy
          equipment or specialty tools)
        </li>
        <li>
          <strong>Combined total</strong> &mdash; the sum of material, labor, and equipment
          costs, representing the full unit price
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pricing database is released in versions called <strong>price lists</strong>, each
        tied to a specific date and geographic area. Geographic areas are identified by
        <strong> geographic codes</strong> (also called price list regions) &mdash; for example,
        &ldquo;CALA1&rdquo; might refer to the Los Angeles, California metropolitan area.
        Using the correct price list for the correct area and the correct date is fundamental
        to producing an accurate estimate.
      </p>

      <CalloutBox variant="important" title="The Price List Matters &mdash; A Lot">
        <p>
          Using the wrong price list &mdash; whether it is outdated or from the wrong
          geographic area &mdash; can understate or overstate repair costs by thousands of
          dollars. Always verify that your estimate uses the current price list for the
          correct geographic code. If the carrier&apos;s estimate uses a price list from six
          months ago or from a different region, the pricing will not reflect what the repairs
          actually cost in your area today.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Line Item Descriptions and Inclusions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every line item in Xactimate has a description that specifies exactly what is included
        in the price and what is not. This is one of the most important and most frequently
        ignored parts of the software. The description tells you:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>What is included</strong> &mdash; the specific materials, labor steps, and
          activities that are encompassed by the line item&apos;s price
        </li>
        <li>
          <strong>What is excluded</strong> &mdash; related work that must be added as
          separate line items (for example, a drywall installation line item may not include
          texture, which requires its own line item)
        </li>
        <li>
          <strong>Remove line items</strong> &mdash; many repairs require removing existing
          damaged material before installing new material. Removal is typically a separate
          line item from installation
        </li>
        <li>
          <strong>Painting</strong> &mdash; paint is almost always a separate line item from
          the substrate it covers. Installing new drywall does not include priming and
          painting it
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common disputes in claims involves the distinction between
        &ldquo;like for like&rdquo; and &ldquo;upgrade&rdquo; items. If your home has
        premium-grade materials, the estimate should use the line item that reflects that
        quality level &mdash; not a stripped-down, standard-grade item. Xactimate has
        different line items for standard, premium, and custom-grade materials. Selecting the
        wrong one is one of the most frequent ways{' '}
        <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
          insurance estimates come in low
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Overhead and Profit (O&amp;P)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and Profit &mdash; typically 10% overhead and 10% profit, for a combined 20%
        on top of direct repair costs &mdash; is one of the most disputed items in property
        insurance claims. O&amp;P represents the general contractor&apos;s fee for managing a
        repair project that involves multiple trades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate includes O&amp;P as a standard feature in the software. It can be applied
        globally to an estimate or selectively to specific line items. The user manual explains
        how O&amp;P is calculated and how it is intended to be applied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When is O&amp;P appropriate? The standard in the industry is that O&amp;P is owed
        whenever the repairs require a general contractor to coordinate multiple trades. If
        your claim involves plumbing, drywall, painting, and flooring &mdash; which most water
        damage claims do &mdash; a general contractor is typically needed to manage the project.
        That contractor&apos;s{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>{' '}
        are legitimate costs of the repair.
      </p>

      <CalloutBox variant="legal" title="O&amp;P Rights in California">
        <p>
          Insurance companies routinely refuse to include O&amp;P in their estimates, claiming
          the homeowner &ldquo;does not need a general contractor.&rdquo; In California,
          the California Department of Insurance (CDI) has enforced the position that O&amp;P
          must be included when the repair reasonably requires a general contractor. If
          your carrier strips O&amp;P from your estimate, you have strong grounds to push
          back &mdash; especially when the estimate involves three or more trades.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Depreciation and ACV vs. RCV
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate includes tools for calculating depreciation, which is central to the
        distinction between Actual Cash Value (ACV) and Replacement Cost Value (RCV). The user
        manual covers how depreciation is calculated within the software:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>RCV</strong> is the cost to repair or replace the damaged property with
          materials of like kind and quality, without deduction for depreciation
        </li>
        <li>
          <strong>ACV</strong> is the RCV minus depreciation &mdash; what the item is worth
          at the time of loss, accounting for its age and condition
        </li>
        <li>
          <strong>Depreciation</strong> in Xactimate is typically applied as a percentage
          based on the age and expected useful life of the item. The software allows the
          estimator to set depreciation rates for each category or line item
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether depreciation is <strong>recoverable</strong> (you get it back after completing
        repairs) or <strong>non-recoverable</strong> (the carrier never pays it) depends on
        your policy language and state law. This is a frequent source of disputes, particularly
        regarding{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          labor depreciation
        </Link>, where some carriers depreciate the labor component of a repair even though
        labor does not &ldquo;wear out&rdquo; the way materials do.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Xactimate Online vs. Xactimate Desktop
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is available in two primary versions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>X1 (Desktop)</strong> &mdash; the full-featured desktop application.
          X1 includes the complete suite of sketching tools, advanced estimating capabilities,
          and integration with other Verisk products. It is the version used by most serious
          estimators &mdash; Public Adjusters, experienced adjusters, and large contractors
        </li>
        <li>
          <strong>Xactimate Online (Browser-Based)</strong> &mdash; a browser-based version
          that provides access to estimating functions without requiring a local installation.
          It is more limited than X1 in sketching and advanced features but adequate for many
          standard estimating tasks
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The choice between versions matters because some features available in X1 &mdash;
        particularly advanced sketching and field tools &mdash; are not available in the online
        version. If you are reviewing an estimate, it is worth knowing which version was used,
        as this can affect the level of detail in the scope.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Xactimate Certification and What It Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk offers a formal certification program for Xactimate users, structured in three
        levels. Each level represents increasing proficiency with the software:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Level 1: Fundamentals
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 1 certification covers basic functionality: navigating the interface, creating a
        new claim, adding line items, applying basic depreciation, and generating reports. This
        is the entry point for anyone who needs to use Xactimate professionally. It demonstrates
        that the user understands the basics of the software but does not indicate advanced
        proficiency.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Level 2: Intermediate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 2 covers sketching tools (both interior and exterior), advanced line item
        selection, integration with other Xactware products, and more efficient workflows.
        This is where most competent adjusters and estimators should be operating. Level 2
        certification indicates the user can produce detailed, sketch-based estimates &mdash;
        not just simple line-item lists.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Level 3: Expert
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 3 addresses complex estimating scenarios, advanced field tools, expert-level
        pricing and scope methodology, and the nuances of Xactimate that most users never
        encounter. This is the professional tier &mdash; the certification that distinguishes
        someone who truly understands the software from someone who can simply operate it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why does certification matter? For Public Adjusters, independent adjusters, and
        claims consultants, certification demonstrates formal training and competence with the
        tool that drives the industry. It is increasingly expected &mdash; and in some markets,
        required &mdash; for professionals who prepare estimates as part of their work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Using Xactimate Effectively
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are a professional estimator or a policyholder reviewing an estimate,
        these practical guidelines will help you get more out of the software:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Always use the current price list for the correct geographic area.</strong>{' '}
          An outdated price list or a price list from a different region will produce incorrect
          pricing. Verify the price list date and geographic code on every estimate you review.
        </li>
        <li>
          <strong>Read line item descriptions carefully.</strong> Every line item has a
          description that tells you what is included and what is not. If you do not read the
          description, you will miss related items that need to be added separately.
        </li>
        <li>
          <strong>Do not rely solely on Xactimate for specialty items.</strong> Xactimate
          prices common construction items well, but it may not accurately price specialty
          materials, custom work, or items that are not in the database. For these, get actual
          bids from qualified contractors and add them as manual line items.
        </li>
        <li>
          <strong>Use the Notes field to document the basis for your selections.</strong>{' '}
          When you choose a specific line item, note why you selected it. This creates a record
          that supports your estimate in negotiations or{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>.
        </li>
        <li>
          <strong>Retain the native Xactimate format (.ESX), not just the PDF.</strong> The
          .ESX file contains all the data behind the estimate &mdash; line items, pricing
          details, notes, sketches, and settings. A PDF is a flat document that cannot be
          analyzed line by line. Always request and retain the .ESX file.
        </li>
        <li>
          <strong>Understand that Xactimate is a pricing tool, not a{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope
          </Link>{' '}
          development tool.</strong> Xactimate prices whatever you tell it to price. It does
          not tell you what damage exists or what repairs are needed. That is the job of a
          qualified inspector who physically examines the property.
        </li>
      </ol>

      <CalloutBox variant="warning" title="A Pricing Tool, Not a Scope Tool">
        <p>
          This is the single most important thing to understand about Xactimate: <strong>an
          incomplete scope produces an incomplete estimate</strong>. If the adjuster does not
          identify all the damage during the inspection, the estimate will not include those
          items &mdash; no matter how sophisticated the software is. Xactimate does not find
          damage. It prices the damage that someone tells it to price. This is why the{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss
          </Link>{' '}
          and the physical inspection are so critical.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have received an Xactimate estimate from your insurance company and the number
        seems low, the user manual is part of the answer. The software has rules. It has a
        methodology. And when the carrier&apos;s adjuster departs from those rules &mdash;
        whether by using the wrong price list, omitting line items, stripping overhead and
        profit, or selecting stripped-down materials when your home has premium finishes &mdash;
        that departure can be identified and challenged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A qualified{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        who is proficient in Xactimate can review the carrier&apos;s estimate line by line,
        identify what is missing, correct what is wrong, and prepare a competing estimate
        that reflects the actual cost of restoring your property. That competing estimate
        &mdash; built in the same software, using the same pricing database &mdash; is
        the most powerful tool a policyholder has in a claim dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Disclaimer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is for educational purposes and is not legal advice. Xactimate is a
        proprietary product of Verisk Analytics, and specific features, pricing, and
        certification requirements may change over time. For advice specific to your
        claim, consult with a licensed professional in your state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </em>
      </p>
    </>
  )
}
