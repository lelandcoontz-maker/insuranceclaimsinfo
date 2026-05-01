import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Xactimate Estimates: What You Need to Know',
  description:
    'Learn how Xactimate estimating software works, why insurance estimates are often too low, and which line items adjusters commonly miss or underpay.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Xactimate?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is the insurance industry&apos;s standard estimating software, developed by
        Verisk Analytics (formerly Xactware). It is used by the vast majority of insurance
        companies, independent adjusters, contractors, and Public Adjusters to prepare repair
        estimates for property damage claims. Xactimate contains a database of localized pricing for
        labor and materials, updated regularly to reflect current market conditions in each
        geographic area.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because nearly everyone in the claims process uses Xactimate, it serves as a common language
        for discussing the cost of repairs. However, the tool is only as accurate as the person
        using it. An estimate prepared in Xactimate can vary wildly depending on who builds it, what
        line items they include, and whether they follow the software&apos;s own pricing methodology.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Insurance Xactimate Estimates Are Often Low
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Receiving an Xactimate estimate from your insurance company does not mean the number is fair
        or complete. There are several common reasons why insurer-prepared estimates fall short of
        what the repairs will actually cost.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Insufficient Training
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurance adjusters receive only basic training on Xactimate. The software is powerful
        and complex, with thousands of line items and specific rules for how they should be applied.
        An adjuster who is not thoroughly trained may simply not know the correct line items exist
        for certain types of work.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Missing Line Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common problem. The adjuster&apos;s estimate may omit necessary work
        entirely — failing to account for items like the removal and resetting of fixtures,
        furniture moving, floor protection during construction, temporary repairs, or the multiple
        steps involved in matching existing finishes. Each missing line item means money left off
        your claim.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Incorrect Measurements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster does not take accurate measurements of the damaged area, the entire estimate
        will be based on wrong quantities. This is especially impactful for large areas — even a
        small measurement error on a roof or flooring claim can translate to thousands of dollars.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Wrong Material Specifications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate allows the estimator to select specific materials and quality levels. An adjuster
        who uses a standard-grade material when your home actually has premium-grade finishes will
        produce an estimate that does not cover the true cost of matching your existing property.
      </p>

      <CalloutBox variant="warning" title="Do Not Accept the First Estimate Without Review">
        <p>
          The initial Xactimate estimate from your insurance company is a starting point, not a
          final offer. Have it reviewed by someone experienced in Xactimate — a
          qualified <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">Public Adjuster</Link> or
          a knowledgeable contractor — before you accept or sign anything. Missing line items and
          errors are extremely common.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Controversial Line Items Insurers Fight Over
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain Xactimate line items are frequent points of dispute between policyholders and insurance
        companies. Understanding these disputes can help you identify when your estimate is short.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        General Contractor Overhead and Profit (O&amp;P)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When repairs require multiple trades — for example, a water loss that needs a plumber, a
        drywall contractor, a painter, and a flooring installer — a general contractor is typically
        needed to coordinate the work. The general contractor charges overhead (their cost of doing
        business) and profit. Insurance companies routinely try to deny O&amp;P, claiming the
        homeowner can coordinate the trades themselves or that it is not warranted. In most cases
        involving multiple trades, O&amp;P is appropriate and should be included.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Supervision
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies often claim that supervision is already included in the general
        contractor&apos;s overhead and profit. This is not accurate. General contractor O&amp;P
        covers the general contractor&apos;s business expenses and profit margin. Supervision is a
        separate, trade-specific activity — it refers to the on-site management of the specific work
        being performed by each trade. These are different functions, and Xactimate has separate line
        items for them for a reason.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Content Manipulation and Cleaning
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a loss, personal property (contents) often needs to be moved, cleaned, stored, or
        manipulated to allow repairs to proceed. Insurers frequently underestimate or omit these
        costs. Moving furniture out of a room, cleaning smoke-damaged belongings, and packing and
        storing contents during a lengthy repair are all legitimate costs that should be in the
        estimate.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Waste and Debris Calculations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction generates waste. When you tear out damaged materials, there is cutting waste,
        packaging waste, and debris that must be hauled away. Xactimate has specific waste factors
        built into its pricing for many line items, but adjusters sometimes override these or fail
        to include proper debris removal line items. Proper waste and debris calculations are part of
        the actual cost of the repair.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Matching
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When only part of a surface is damaged, the repaired area must match the undamaged area. If
        your damaged kitchen floor tile is no longer manufactured, or the repaired section of your
        roof does not match the weathered existing shingles, the repair is not complete. Many
        policies — and California regulations — require the insurer to pay for matching. Adjusters
        frequently underestimate or ignore matching costs in their Xactimate estimates.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Xactimate User Agreement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate comes with a user agreement and pricing methodology that all users are supposed to
        follow. This methodology establishes how line items should be selected, how pricing is
        applied, and what the database prices are intended to represent. Many adjusters do not follow
        these guidelines — they cherry-pick line items, manually override pricing, or use the
        software in ways that contradict the methodology.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer&apos;s estimate departs from Xactimate&apos;s own guidelines, that
        departure can be used to challenge the estimate. A knowledgeable Public Adjuster or
        contractor can identify where the adjuster strayed from the methodology and use that as
        leverage in negotiations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not treat an Xactimate estimate as gospel simply because it came from your insurance
        company or because it was generated by professional software. The estimate is only as good
        as the person who prepared it. Get an independent review, compare line items, check
        measurements, and verify that the material specifications match what is actually in your
        home. If you are dealing with a significant claim, working with an
        experienced <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">Public Adjuster</Link> who
        is proficient in Xactimate can make a substantial difference in your settlement.
      </p>
    </>
  )
}
