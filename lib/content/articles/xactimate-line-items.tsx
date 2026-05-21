import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Read an Xactimate Estimate Line by Line',
  description:
    'A practical walkthrough of Xactimate estimates — how to read selector codes, line items, depreciation, O&P, sketches, waste factors, and how to spot a thin estimate that underpays your claim.',
  summary:
    'Reading an Xactimate estimate means understanding selector codes, line items, depreciation, O&P, sketches, and waste factors. Learning to read it line by line lets you spot a thin estimate that omits scope and underpays your claim.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is written for educational purposes by a California Licensed Public
          Adjuster. Xactimate is a proprietary product of Verisk. The information here reflects
          general industry knowledge about how Xactimate estimates are structured and read. If
          you have a dispute with your insurance company about the contents of an estimate,
          consult a licensed public adjuster or attorney.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Introduction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have filed a property insurance claim, you have almost certainly received an
        Xactimate estimate. Our{' '}
        <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
          overview of Xactimate
        </Link>{' '}
        explains what the software is and why it matters. This article is different &mdash; it
        is a practical, line-by-line walkthrough of what you are actually looking at when you
        open an Xactimate estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The estimate controls how much money you receive. Every line item, selector code,
        quantity, and price directly affects your payout. If you cannot read the estimate, you
        cannot evaluate whether it is accurate &mdash; and you cannot identify what is missing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Header: Claim Information and Pricing Region
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every Xactimate estimate begins with a header identifying the claim: claim number,
        date of loss, insured name, and the adjuster who wrote it. But the most important
        item in the header is the <strong>price list / pricing region</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate prices are not national &mdash; they vary by geographic region and zip code.
        The pricing region determines <em>every single price</em> in the estimate. A shingle
        that costs $3.50 per square foot in one zip code may cost $4.25 in another. If the
        wrong pricing region is set, every price in the estimate is wrong.
      </p>

      <CalloutBox variant="important" title="Check the Pricing Region First">
        <p>
          Before looking at anything else, verify that the pricing region and zip code match
          your property&rsquo;s actual location. If the estimate uses a lower-cost area&rsquo;s
          pricing, every line item will be underpriced. This is an easy error to make and an
          easy one to miss &mdash; but it affects the entire estimate.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Line Item Structure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each line item represents one specific repair activity or material and follows a
        consistent structure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Selector code</strong> &mdash; a shorthand code identifying the item (e.g.,
          &ldquo;RFG LAMI25&rdquo; = roofing, laminate 25-year shingle).
        </li>
        <li>
          <strong>Description</strong> &mdash; plain-English explanation (e.g., &ldquo;Remove
          &amp; replace laminated - 25 yr shingles&rdquo;).
        </li>
        <li>
          <strong>Quantity</strong> &mdash; how much of the item is included.
        </li>
        <li>
          <strong>Unit</strong> &mdash; the unit of measurement: SF (square foot), LF (linear
          foot), EA (each), or SQ (square = 100 SF, common for roofing).
        </li>
        <li>
          <strong>Unit price</strong> &mdash; cost per unit from the Xactimate pricing database
          for the specified region.
        </li>
        <li>
          <strong>Total</strong> &mdash; quantity times unit price.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Read Selector Codes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Selector codes look cryptic but follow a consistent pattern. The first part identifies
        the trade category; the remainder identifies the specific item. Common prefixes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>DRY</strong> &mdash; Drywall</li>
        <li><strong>PLM</strong> &mdash; Plumbing</li>
        <li><strong>ELC</strong> &mdash; Electrical</li>
        <li><strong>RFG</strong> &mdash; Roofing</li>
        <li><strong>PNT</strong> &mdash; Painting</li>
        <li><strong>FLR</strong> &mdash; Flooring</li>
        <li><strong>CLN</strong> &mdash; Cleaning</li>
        <li><strong>DMO</strong> &mdash; Demolition</li>
        <li><strong>WDR</strong> &mdash; Water damage restoration / mitigation</li>
        <li><strong>FRM</strong> &mdash; Framing</li>
        <li><strong>INS</strong> &mdash; Insulation</li>
        <li><strong>CBN</strong> &mdash; Cabinetry</li>
        <li><strong>CTR</strong> &mdash; Countertops</li>
        <li><strong>WND</strong> &mdash; Windows</li>
        <li><strong>EXT</strong> &mdash; Exterior siding and trim</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the prefix, the code gets more specific. &ldquo;DRY 1/2&rdquo; is standard
        1/2-inch drywall; &ldquo;DRY 5/8FR&rdquo; is 5/8-inch fire-rated. Learning common
        codes helps you read estimates faster and catch situations where the wrong code was
        used.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        RCV and ACV Columns
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most estimates include two value columns:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>RCV (Replacement Cost Value)</strong> &mdash; the full cost to replace the
          item with new, like-kind-and-quality materials and labor, with no deduction for age.
        </li>
        <li>
          <strong>ACV (Actual Cash Value)</strong> &mdash; replacement cost minus depreciation.
          This is the initial payment on a replacement cost policy. See our article on{' '}
          <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
            ACV vs. RCV
          </Link>{' '}
          for a detailed explanation.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a replacement cost policy, the carrier pays ACV first; the policyholder recovers
        the depreciation holdback after completing repairs. On an actual cash value policy,
        ACV is the full settlement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Depreciation Column
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is shown as both a percentage and dollar amount per line item. A critical
        point: <strong>depreciation should vary by item</strong>. A 20-year-old roof that has
        reached the end of its useful life depreciates heavily. Five-year-old cabinets in good
        condition should depreciate far less. Recently applied paint might have minimal
        depreciation.
      </p>

      <CalloutBox variant="important" title="Watch for Flat-Rate Depreciation">
        <p>
          One of the most common problems in carrier estimates is applying a single flat
          depreciation rate to every line item. If you see 15% on everything &mdash; the roof,
          drywall, cabinets, paint, flooring &mdash; that is a red flag. Brand-new carpet
          should not depreciate at the same rate as a 25-year-old roof. Each item should be
          depreciated individually based on age, condition, and expected useful life.
          Additionally, in California, labor generally should not be depreciated &mdash; only
          materials.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Overhead and Profit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P represents the general contractor&rsquo;s compensation for managing the repair
        project. It usually appears as a separate section at the bottom: 10% overhead and 10%
        profit (compounding to approximately 21%). This is the industry standard, often called
        &ldquo;10 and 10.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers frequently exclude O&amp;P, arguing the loss does not require a general
        contractor. This is one of the most disputed areas in property claims. For a detailed
        discussion, see our article on{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Remove &amp; Replace vs. Remove &amp; Reinstall vs. Detach &amp; Reset
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These three operations have very different costs, and carriers sometimes use the
        cheaper code when the more expensive one applies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Remove and replace (R&amp;R)</strong> &mdash; the item is removed, discarded,
          and a brand-new item is installed. Most expensive because it includes new material.
          Used when the existing item is damaged beyond repair.
        </li>
        <li>
          <strong>Remove and reinstall (R&amp;RI)</strong> &mdash; the item is carefully
          removed, set aside, and reinstalled after other work. No new material purchased.
          Used when the item is undamaged but must come out for access &mdash; like removing
          a toilet to replace flooring beneath it.
        </li>
        <li>
          <strong>Detach and reset (D&amp;R)</strong> &mdash; similar to R&amp;RI but for
          items that can be disconnected and moved without full removal. Typically less
          labor-intensive. Common for appliances and certain fixtures.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When reviewing an estimate, check whether each operation code matches what actually
        needs to happen. A carrier writing &ldquo;detach and reset&rdquo; for something that
        needs full removal and replacement saves the carrier money but leaves the policyholder
        with an inadequate repair.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Minimum Charge Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate includes minimum charges for many trades. A tradesperson does not show up for
        a trivially small job &mdash; there is a minimum cost to mobilize, travel, and perform
        any work. An electrician will not come to replace one outlet cover for $15; a plumber
        will not make a service call for $47.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a carrier estimate includes small trade items without minimum charges, those line
        items are below the real cost of getting a licensed professional to the property.
        Xactimate has minimum charge codes built into the system &mdash; if they are missing,
        that is a legitimate basis for a supplement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sales Tax
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tax typically appears as a separate line at the bottom, applied to materials at the
        local rate. In California, labor for construction and repair work is generally not
        subject to sales tax, but materials are. Verify the correct tax rate &mdash; rates vary
        by city and county. Some carrier estimates omit tax entirely; if materials are in the
        estimate, tax on those materials should be too.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Sketch Section
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&rsquo;s sketch module generates the measurements that drive line item
        quantities &mdash; room dimensions, wall lengths, floor areas, ceiling areas, and
        perimeters. The sketch shows:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Room dimensions</strong> &mdash; length, width, and ceiling height.
        </li>
        <li>
          <strong>Perimeter</strong> &mdash; total wall length, used for baseboard, crown
          molding, and similar items.
        </li>
        <li>
          <strong>Floor area</strong> &mdash; square footage for flooring and carpet.
        </li>
        <li>
          <strong>Wall area</strong> &mdash; surface area for drywall, paint, and texture,
          calculated from perimeter and ceiling height minus openings.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verifying the sketch is critical. If room dimensions are wrong, every quantity derived
        from them is wrong. Measure your rooms and compare. A room that is 14&rsquo; x 16&rsquo;
        but sketched as 12&rsquo; x 14&rsquo; produces significantly less square footage for
        drywall, paint, and flooring &mdash; and a significantly lower estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Waste Factors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In construction, you never purchase exactly the amount of material needed. Cuts,
        miscuts, starter pieces, and irregular shapes all require additional material. Standard
        waste factors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Roofing shingles</strong> &mdash; 10&ndash;15%, higher for complex roofs</li>
        <li><strong>Drywall</strong> &mdash; typically 10%</li>
        <li><strong>Hardwood / laminate flooring</strong> &mdash; 10&ndash;15%, higher for diagonal installs</li>
        <li><strong>Tile</strong> &mdash; 10&ndash;15%, higher for large format or intricate patterns</li>
        <li><strong>Carpet</strong> &mdash; varies based on room layout and seam placement</li>
      </ul>

      <CalloutBox variant="important" title="Carriers Sometimes Remove Waste Factors">
        <p>
          An estimate showing zero waste on roofing or flooring does not reflect actual
          construction costs. No contractor installs materials with zero waste &mdash; it is
          physically impossible. If waste factors have been removed or set unrealistically low,
          the estimate understates the real cost of repair.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Spot a Thin Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A &ldquo;thin&rdquo; estimate lists some repairs but omits the supporting work required
        to do them properly. It looks detailed at first glance, but the gaps become apparent
        when you understand actual construction. Common omissions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Containment and protection</strong> &mdash; masking, plastic sheeting, floor
          protection for undamaged areas.
        </li>
        <li>
          <strong>Trim removal and replacement</strong> &mdash; baseboards, crown molding, and
          door casing that must come out for drywall or flooring work.
        </li>
        <li>
          <strong>Texture matching</strong> &mdash; if existing walls have orange peel,
          knockdown, or hand-applied texture, new drywall must match. This is labor-intensive
          and should be a separate line item.
        </li>
        <li>
          <strong>Paint prime coats</strong> &mdash; new drywall requires primer before finish
          paint. Carrier estimates sometimes include only the finish coat.
        </li>
        <li>
          <strong>Electrical and plumbing disconnects</strong> &mdash; outlets, switches, and
          fixtures must be disconnected before demolition and reconnected after.
        </li>
        <li>
          <strong>Permits and inspections</strong> &mdash; electrical, plumbing, and structural
          work typically requires permits in California.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive list, see our article on{' '}
        <Link href="/resources/commonly-missed-items" className="text-blue-700 underline hover:text-blue-900">
          commonly missed items in insurance estimates
        </Link>
        . For guidance on how the{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss
        </Link>{' '}
        should be developed, see our scoping article.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Xactimate Prices Are Set
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&rsquo;s pricing database is updated monthly by Verisk based on surveys of
        regional labor rates and material costs. The prices reflect what contractors actually
        charge in a given area &mdash; which is why the pricing region matters so much.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, <strong>the policyholder is not obligated to accept Xactimate pricing as the
        final word</strong>. Xactimate prices are survey-based averages. Actual contractor
        quotes may be higher, particularly after major disasters when demand spikes. If you
        have legitimate contractor bids exceeding Xactimate pricing, those bids are relevant
        evidence. The policy obligates the insurer to pay the reasonable cost of repair &mdash;
        not the Xactimate cost of repair.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reading the Estimate Summary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The summary at the end totals everything:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Line item total</strong> &mdash; sum of all items before O&amp;P and tax</li>
        <li><strong>Overhead</strong> &mdash; typically 10%</li>
        <li><strong>Profit</strong> &mdash; typically 10% of total plus overhead</li>
        <li><strong>Sales tax</strong> &mdash; on materials at the local rate</li>
        <li><strong>RCV total</strong> &mdash; full cost before depreciation</li>
        <li><strong>Total depreciation</strong> &mdash; sum across all line items</li>
        <li><strong>ACV total</strong> &mdash; RCV minus depreciation (initial payment on RC policy)</li>
        <li><strong>Deductible</strong> &mdash; subtracted from ACV</li>
        <li><strong>Net claim</strong> &mdash; the amount the carrier actually pays</li>
      </ul>

      <CalloutBox variant="tip" title="Xactimate Is a Tool, Not the Final Answer">
        <p>
          Carriers often present their Xactimate estimate as an objective, unchallengeable
          calculation. It is not. Xactimate produces output based on the inputs of the person
          writing the estimate. Wrong selector code, wrong quantity, wrong pricing region,
          removed waste factors, omitted line items &mdash; any of these produces a wrong
          answer. An estimate is only as good as the person who wrote it. For a deeper look,
          see our{' '}
          <Link href="/resources/xactimate-user-manual" className="text-blue-700 underline hover:text-blue-900">
            Xactimate user manual guide
          </Link>
          .
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Estimate Is Wrong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have identified errors &mdash; missing items, incorrect quantities, wrong codes,
        removed waste, flat depreciation, missing O&amp;P, or a wrong pricing region &mdash;
        you have the right to dispute it through a supplement. A{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          properly scoped estimate
        </Link>{' '}
        from a licensed public adjuster or qualified contractor can document what the carrier
        missed. The supplement should be written in Xactimate using the same pricing database
        so the comparison is apples-to-apples.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how to read an Xactimate estimate is the first step toward knowing
        whether your claim is being handled fairly. You do not need to become an expert &mdash;
        but you need to know enough to ask the right questions and recognize when something is
        missing.
      </p>

      <CalloutBox variant="tip" title="Get Your Own Estimate">
        <p>
          You are not required to accept the carrier&rsquo;s estimate at face value. A licensed
          public adjuster can write an independent Xactimate estimate, identify what the carrier
          missed, and negotiate on your behalf. If estimates cannot be reconciled, the dispute
          may proceed to{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>
          .
        </p>
      </CalloutBox>
    </>
  )
}
