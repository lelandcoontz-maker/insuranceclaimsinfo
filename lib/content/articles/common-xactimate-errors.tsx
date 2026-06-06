import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Common Xactimate Errors That Result in Underpayment',
  description:
    'A detailed guide to the most common errors and omissions in insurance company Xactimate estimates — from missing line items and wrong waste factors to incorrect depreciation and missing overhead and profit. Learn how to identify these errors and what to do about them.',
  summary:
    'Insurer Xactimate estimates routinely underpay through missing line items, low waste factors, wrong depreciation, and omitted overhead and profit. Learn to spot these recurring errors and document the corrections needed to bring the estimate to full scope.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company sends you an estimate for your property damage claim, that
        estimate was almost certainly prepared in{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
          Xactimate
        </Link>
        {' '}&mdash; the industry-standard estimating software. The number on that estimate is
        not a take-it-or-leave-it offer. It is one person&apos;s interpretation of what
        your repairs should cost, built line by line in a software program that has thousands
        of options and rules. And that interpretation frequently contains errors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some of these errors are honest mistakes &mdash; the adjuster was rushed, undertrained,
        or simply missed something. Others are systematic: company guidelines that instruct
        adjusters to exclude certain items, use lower-grade materials, or apply depreciation
        in ways that do not reflect reality. Either way, the result is the same: you get paid
        less than what your repairs actually cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the most common categories of Xactimate errors that lead to
        underpayment. Understanding these errors is the first step toward getting a fair
        settlement. You do not need to be an Xactimate expert to identify many of them &mdash;
        you just need to know what to look for.
      </p>

      <CalloutBox variant="info" title="Why This Matters">
        <p>
          A single missing line item might only be worth $50 or $100. But Xactimate estimates
          on significant claims can contain dozens of errors, each one reducing your payment.
          When you add up missing detach/reset items, incorrect waste factors, wrong material
          selections, and missing{' '}
          <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
            overhead and profit
          </Link>
          , the total underpayment can easily reach thousands or tens of thousands of dollars.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Line Item Omissions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most straightforward type of error is simply leaving things out. Xactimate has
        thousands of{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
          individual line items
        </Link>
        , and every item that exists in your home and needs to be removed, protected, or
        replaced must appear in the estimate. When items are missing, you are not getting
        paid for that work.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Detach and Reset Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Detach and reset&rdquo; (D&amp;R) refers to items that must be carefully removed
        before repair work can happen, then reinstalled afterward. These are some of the most
        commonly omitted line items in Xactimate estimates. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Electrical fixtures</strong> &mdash; outlet covers, switch plates, light
          fixtures, ceiling fans, and smoke detectors that must be removed before drywall or
          painting work
        </li>
        <li>
          <strong>Plumbing fixtures</strong> &mdash; toilets, faucets, supply lines, and
          angle stops that must be disconnected and reconnected during floor or wall work
        </li>
        <li>
          <strong>Window coverings</strong> &mdash; blinds, shutters, and curtain rods that
          must come down before window or wall work
        </li>
        <li>
          <strong>Appliances</strong> &mdash; stoves, dishwashers, and refrigerators that
          must be moved for floor or cabinet work
        </li>
        <li>
          <strong>Hardware</strong> &mdash; towel bars, toilet paper holders, door stops,
          house numbers, and mailboxes
        </li>
        <li>
          <strong>Base shoe and trim</strong> &mdash; quarter-round molding at the base of
          cabinets that must be removed and replaced when flooring is done
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these is a separate line item in Xactimate. An adjuster who writes &ldquo;paint
        bedroom&rdquo; without including D&amp;R for the light fixtures, outlet covers, and
        window coverings in that room has produced an incomplete estimate. The painter still
        has to do that work &mdash; it just is not being paid for.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Temporary Protection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        During construction, areas that are not being worked on must be protected from damage.
        Xactimate includes line items for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Floor protection</strong> &mdash; Ram Board, builder&apos;s paper, or plastic
          sheeting to protect finished floors from foot traffic, paint drips, and debris
        </li>
        <li>
          <strong>Furniture protection</strong> &mdash; plastic sheeting over furniture that
          cannot be moved out of the work area
        </li>
        <li>
          <strong>Dust barriers</strong> &mdash; poly sheeting and zipper doors to contain
          dust during demolition and reconstruction
        </li>
        <li>
          <strong>Carpet protection</strong> &mdash; adhesive-backed film specifically for
          protecting carpet in traffic areas adjacent to the work zone
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These items are standard construction practice. Any contractor performing the work
        would protect adjacent finished surfaces. But many insurance estimates leave them out
        entirely, as if the crew will somehow avoid damaging the rest of the house during
        demolition and reconstruction.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Content Manipulation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Content manipulation refers to the labor required to move the homeowner&apos;s
        belongings out of the way before construction begins and move them back when
        construction is complete. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Move out</strong> &mdash; moving furniture and contents from the affected
          area to a safe location (another room, garage, or storage pod)
        </li>
        <li>
          <strong>Move back</strong> &mdash; returning all contents to their original
          positions after repairs are complete
        </li>
        <li>
          <strong>Storage</strong> &mdash; when contents cannot remain in the home during
          repairs, portable storage units or offsite storage costs
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate calculates content manipulation based on the square footage of affected
        rooms and a per-room time factor. It is legitimate construction overhead &mdash;
        contractors do not simply work around your couch. Many insurance estimates either omit
        content manipulation entirely or include it for only some of the affected rooms.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Cleaning During and After Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction generates dust, debris, and mess. Xactimate includes specific line items
        for construction cleaning:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Progressive clean</strong> &mdash; ongoing cleaning during the construction
          process to maintain a livable environment
        </li>
        <li>
          <strong>Final clean</strong> &mdash; deep cleaning at the completion of all work
          to return the home to a presentable condition
        </li>
        <li>
          <strong>HEPA vacuuming</strong> &mdash; required when drywall dust or other fine
          particulates are generated, especially in occupied homes
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor performing the repair will clean the site. That cleaning has a cost. If
        the estimate does not include it, that cost is coming out of the money allocated for
        actual repairs.
      </p>

      <CalloutBox variant="tip" title="Check for Missing Items">
        <p>
          For a comprehensive list of items that adjusters routinely miss, see our{' '}
          <Link href="/resources/commonly-missed-items" className="text-[#2E74B5] hover:underline">
            Commonly Missed Items
          </Link>
          {' '}article. It covers everything from low-voltage wiring and arc fault breakers to
          scribe moldings and pressure-treated sole plates.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Incorrect Measurements and Waste Factors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when the right line items are included, the quantities can be wrong. Measurement
        errors and incorrect{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] hover:underline">
          waste factors
        </Link>
        {' '}are among the most impactful errors because they affect every material and labor
        line item in the affected area.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Net vs. Gross Measurements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When measuring a wall for drywall or paint, should you deduct the area of windows
        and doors? It depends. Xactimate has specific rules about when to measure &ldquo;net&rdquo;
        (subtracting openings) versus &ldquo;gross&rdquo; (measuring the full wall). The
        general principle is:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          For <strong>drywall and paint</strong>, Xactimate typically uses the full wall area
          without deducting for standard-size windows and doors, because the labor to cut around
          openings takes as much time as covering a flat expanse
        </li>
        <li>
          For <strong>siding and exterior finishes</strong>, the calculation method depends on
          the size of the opening relative to the wall area
        </li>
        <li>
          For <strong>flooring</strong>, the measurements should reflect the actual footprint
          of the room, but waste factor must still be added on top
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        An adjuster who deducts every window and door opening from the wall area is reducing
        the square footage being paid for &mdash; but not reducing the actual work required.
        This is a measurement methodology error that results in underpayment.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Incorrect Waste Factors
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A waste factor accounts for the material that is lost during installation due to
        cutting, breakage, starter courses, and pattern matching. Every type of material has
        an expected waste factor, and more complex installations require higher waste factors.
        Common errors include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Roofing on complex roofs</strong> &mdash; a simple gable roof might have
          5-10% waste, while a hip roof with valleys and dormers can require 15-20% or more.
          Adjusters frequently apply a flat 10% waste factor regardless of roof complexity
        </li>
        <li>
          <strong>Tile flooring</strong> &mdash; diagonal installations, large-format tile
          in small rooms, and natural stone all generate more waste than standard square-lay
          ceramic in large rooms
        </li>
        <li>
          <strong>Hardwood flooring</strong> &mdash; random-length planks in rooms with many
          angles, closets, and transitions generate higher waste than the same product in a
          simple rectangular room
        </li>
        <li>
          <strong>Siding</strong> &mdash; walls with many windows, corners, and architectural
          features create more cut pieces and more waste
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the waste factor is too low, the estimate does not include enough material to
        complete the job. The homeowner either pays the difference out of pocket or the
        contractor cuts corners to stay within budget.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Incorrect Perimeter Calculations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Baseboard, crown molding, chair rail, and other linear trim items are measured by the
        linear foot. The perimeter of a room determines how much trim is needed. Common
        errors include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Not including closet perimeters &mdash; closets have baseboard too
        </li>
        <li>
          Not accounting for islands, peninsulas, and knee walls in kitchens
        </li>
        <li>
          Using a simplified room outline that does not reflect alcoves, bump-outs, or
          irregular shapes
        </li>
        <li>
          Deducting door openings from baseboard measurements when baseboard actually returns
          into the door casing on both sides
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wrong Labor Rates and Minimums
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate uses a complex labor pricing system. Each line item has a built-in labor
        component based on industry-standard production rates. But the way those labor rates
        are applied can vary, and errors here result in underpayment for the actual work
        involved.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Minimum Charge vs. Standard Rate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many line items in Xactimate have a &ldquo;minimum charge&rdquo; &mdash; the least
        amount that will be paid for that type of work, regardless of quantity. For example,
        a painter may have a two-hour minimum. If a room takes 1.5 hours to paint, the painter
        still charges the two-hour minimum because they cannot use that half hour on another
        job.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The error occurs when an adjuster applies the minimum charge on a job that clearly
        exceeds the minimum threshold. If a claim involves painting six rooms, the
        &ldquo;minimum&rdquo; rate is irrelevant &mdash; the standard production rate applies.
        Conversely, on small jobs, the minimum charge should apply but is sometimes omitted
        entirely.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Incorrect Labor Minimums
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each trade has a minimum charge for showing up to the job. An electrician, a plumber,
        and a painter each have a minimum service call fee. Xactimate accounts for this
        through labor minimums on individual line items and through the overall trade
        minimum. Errors occur when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The estimate has a very small quantity of a particular trade&apos;s work but does
          not apply the labor minimum &mdash; resulting in a payout that would not cover the
          tradesperson&apos;s minimum service call
        </li>
        <li>
          The adjuster manually overrides the labor minimum downward without justification
        </li>
        <li>
          Multiple small jobs for the same trade across different rooms are combined to avoid
          triggering separate labor minimums, when in reality they require separate site visits
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Labor Productivity Rate Adjustments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s base labor rates assume standard working conditions. But real-world
        conditions often slow production: working at heights, working in confined spaces,
        working in occupied homes, or working with hazardous materials all require more time.
        Xactimate has line items and modifiers for these situations, but adjusters frequently
        fail to include them. A painter working on a 20-foot cathedral ceiling is not working
        at the same production rate as a painter working on an 8-foot flat ceiling, but the
        estimate may price them identically.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Missing Overhead &amp; Profit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
          Overhead and profit
        </Link>
        {' '}(O&amp;P) is a 20% charge (10% overhead + 10% profit) that represents the general
        contractor&apos;s fee for managing the repair project. It is one of the most commonly
        disputed elements in insurance estimates, and its omission represents one of the
        largest single-item underpayments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P should be included whenever the repair requires coordination of multiple
        trades. If a claim involves demolition, drywall, texture, paint, flooring, and trim
        &mdash; as most significant water damage claims do &mdash; someone must manage those
        trades. That is what a general contractor does, and their overhead and profit are
        legitimate costs of repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common situations where O&amp;P is improperly excluded:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Claims involving three or more trades &mdash; the widely accepted industry threshold
          for including O&amp;P
        </li>
        <li>
          Claims where the insurer&apos;s own estimate lists work across multiple trade
          categories, yet does not include O&amp;P
        </li>
        <li>
          Roof claims that require coordination between roofers, carpenters (fascia/soffit),
          painters, and gutter installers
        </li>
        <li>
          Fire claims where virtually every trade is involved and O&amp;P is clearly warranted
        </li>
      </ul>

      <CalloutBox variant="warning" title="O&amp;P Is Not Optional">
        <p>
          Some insurance companies have internal guidelines telling adjusters not to include
          O&amp;P unless the policyholder specifically requests it or provides a signed
          contractor estimate. This practice shifts the burden to the homeowner to identify the
          omission. The cost of repair includes the cost of having someone manage the repair.
          O&amp;P is not a bonus &mdash; it is a standard cost of construction.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wrong Material Selections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate has line items for a range of material qualities: builder-grade, standard,
        premium, and custom. The estimate should reflect what was actually in your home, not
        the cheapest available option. Common material selection errors include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Flooring</strong> &mdash; using a line item for basic laminate when the home
          had engineered hardwood, or using standard-grade carpet when the home had premium
          nylon fiber
        </li>
        <li>
          <strong>Cabinets</strong> &mdash; using economy or builder-grade cabinet line items
          when the home had semi-custom or custom cabinetry with specialty finishes
        </li>
        <li>
          <strong>Countertops</strong> &mdash; using laminate pricing when the home had granite,
          quartz, or solid surface material
        </li>
        <li>
          <strong>Fixtures</strong> &mdash; using standard-grade light fixtures, faucets, and
          hardware when the home had premium or designer selections
        </li>
        <li>
          <strong>Paint</strong> &mdash; using standard two-coat latex when the home had
          specialty finishes, Venetian plaster, or multi-step decorative treatments
        </li>
        <li>
          <strong>Roofing</strong> &mdash; using three-tab shingle pricing when the home had
          architectural/dimensional shingles, or using standard composition when the home had
          tile or metal roofing
        </li>
        <li>
          <strong>Windows</strong> &mdash; using single-pane or builder-grade vinyl when the
          home had dual-pane, low-E, or wood-frame windows
        </li>
        <li>
          <strong>Doors</strong> &mdash; using hollow-core interior door pricing when the home
          had solid-core or solid wood doors
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy entitles you to repair or replacement with materials of &ldquo;like kind
        and quality.&rdquo; That means what you had before the loss, not the cheapest available
        substitute. If your home had 3/4-inch solid hardwood floors, the estimate should not
        include 8mm laminate just because it looks similar. They are different products at
        different price points, and the estimate must reflect what was actually there.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Incorrect Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company issues an actual cash value (ACV) payment, they deduct
        depreciation from the replacement cost to account for the age and condition of the
        damaged items. Depreciation errors are extremely common and can represent thousands
        of dollars in improper withholding. The most frequent errors include:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Depreciating Labor (Illegal in California)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, labor cannot be depreciated. The cost to install a new roof is the
        cost to install a new roof &mdash; it does not matter how old the previous roof was.
        Labor does not &ldquo;wear out.&rdquo; Despite this, many insurance company estimates
        apply depreciation to the total replacement cost including labor. The correct method
        is to depreciate only the materials and apply the labor cost at full value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This error is particularly significant on labor-intensive repairs. On a roof claim
        where labor is 60% of the cost, improperly depreciating labor means the initial ACV
        payment is dramatically lower than it should be.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Wrong Useful Life Estimates
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is based on an item&apos;s expected useful life. If a roof has a 30-year
        expected life and is 15 years old, it might be depreciated 50%. But what if the
        insurer uses a 20-year useful life instead? Now that same roof is depreciated 75%.
        Common errors include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Using unrealistically short useful-life tables that do not reflect how long materials
          actually last in the field
        </li>
        <li>
          Not accounting for maintenance that extends useful life &mdash; a well-maintained
          roof lasts longer than a neglected one
        </li>
        <li>
          Applying the same depreciation percentage to every component regardless of actual
          condition &mdash; some items age faster than others
        </li>
        <li>
          Depreciating beyond actual condition &mdash; if a 20-year roof is in excellent
          condition at 15 years, depreciating it 75% does not reflect reality
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Depreciating Items That Should Not Be Depreciated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain items and costs should never be depreciated because they do not &ldquo;wear
        out&rdquo; over time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Labor</strong> &mdash; illegal to depreciate in California
          and inappropriate in many other states
        </li>
        <li>
          <strong>Permits</strong> &mdash; the cost of a building permit does not depreciate
        </li>
        <li>
          <strong>Code upgrades</strong> &mdash; bringing systems up to current code is a
          fixed cost unrelated to the age of the existing system
        </li>
        <li>
          <strong>Overhead and profit</strong> &mdash; the GC&apos;s management fee does not
          depreciate
        </li>
        <li>
          <strong>Debris removal and haul-off</strong> &mdash; the cost to dispose of damaged
          materials is the same regardless of their age
        </li>
        <li>
          <strong>Concrete and masonry</strong> &mdash; properly maintained concrete has an
          extremely long useful life and should be depreciated minimally if at all
        </li>
      </ul>

      <CalloutBox variant="warning" title="California Labor Depreciation">
        <p>
          If you are in California and your insurance estimate applies depreciation to both
          labor and materials as a combined percentage, the depreciation is almost certainly
          calculated incorrectly. The correct method separates material cost from labor cost
          and depreciates only the material portion. This error alone can represent hundreds
          or thousands of dollars in underpayment on your initial ACV check.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Missing Trades
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A complete repair requires every affected trade to be represented in the estimate.
        Adjusters sometimes scope only the most obvious trades and miss the supporting work.
        Common missing trades include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Electrician</strong> &mdash; when walls are opened for drywall repair, any
          electrical running through those walls may need to be addressed. Outlet boxes,
          wiring, and connections disturbed during demo need an electrician to make them safe
          and code-compliant
        </li>
        <li>
          <strong>Plumber</strong> &mdash; water damage claims often require plumbing work
          beyond the initial repair of the leak. Supply lines, drain lines, and fixtures in
          affected areas may all need attention
        </li>
        <li>
          <strong>HVAC technician</strong> &mdash; when ductwork runs through affected areas,
          it often needs cleaning, repair, or replacement. Registers and grilles that were
          removed need to be reinstalled
        </li>
        <li>
          <strong>Insulation contractor</strong> &mdash; when walls or ceilings are opened,
          insulation is disturbed or removed. It must be replaced before the walls are closed
          back up
        </li>
        <li>
          <strong>Low-voltage technician</strong> &mdash; network cabling, phone lines,
          security system wiring, and speaker wire all require a specialized technician
        </li>
        <li>
          <strong>Stucco/exterior specialist</strong> &mdash; when interior work requires
          access through exterior walls, the exterior finish must be restored by someone
          qualified in that specific material
        </li>
        <li>
          <strong>Cabinetmaker</strong> &mdash; custom or semi-custom cabinets cannot be
          purchased off the shelf; they require fabrication by a specialist
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Missing trades is also significant for the{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
          overhead and profit
        </Link>
        {' '}discussion. Each additional trade that should be in the estimate strengthens the
        argument for O&amp;P &mdash; more trades means more coordination, which means a GC
        is clearly needed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sketch Errors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate uses a sketch module to draw the floor plan or roof layout of the property.
        The sketch drives the measurements for many line items &mdash; wall area, floor area,
        ceiling area, and perimeter are all calculated from the sketch. When the sketch is
        wrong, every line item tied to it is wrong.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Incomplete Sketches
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common sketch error is simply not including all affected areas. If water
        damage affected the kitchen, hallway, and two bedrooms, but the sketch only includes
        the kitchen and one bedroom, the estimate will miss significant square footage. This
        often happens when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The adjuster did not physically enter every affected room or did not take
          measurements in all of them
        </li>
        <li>
          Secondary damage areas (like water that migrated to an adjacent room) were not
          identified during the inspection
        </li>
        <li>
          Closets, pantries, and utility rooms within affected areas were not included as
          separate sketch elements
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Wrong Ceiling Heights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate defaults to a standard 8-foot ceiling height. Many homes have 9-foot, 10-foot,
        or vaulted ceilings. When the ceiling height is wrong in the sketch, the wall area
        calculation is wrong, which means drywall quantities, paint quantities, and baseboard
        calculations are all affected. A room with 10-foot ceilings has 25% more wall area
        than the same room with 8-foot ceilings.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Missing Rooms and Spaces
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Walk-in closets, utility rooms, half-baths, nooks, bump-outs, and alcoves are all
        separate spaces with their own walls, floors, and ceilings. If the sketch lumps a
        walk-in closet into the bedroom measurement, the closet&apos;s perimeter (for
        baseboard) and wall area (for paint) are not being accurately captured. Each distinct
        space should be its own room in the sketch.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Roof Sketch Errors
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roof sketches in Xactimate must accurately reflect the pitch, valleys, hips, ridges,
        and any penetrations (vents, skylights, chimneys). Common errors include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Incorrect roof pitch &mdash; using a 4/12 pitch when the actual roof is 8/12 results
          in significantly less calculated area (steeper roofs have more surface area)
        </li>
        <li>
          Missing roof facets &mdash; dormers, gables, and lower sections that were damaged
          but not included in the sketch
        </li>
        <li>
          Missing ridge and hip lengths &mdash; these drive the quantities for ridge cap
          materials, which are a separate line item from field shingles
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pricing Database Issues
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s pricing is localized by zip code. Prices in San Francisco are
        different from prices in rural Kansas. The pricing database is updated regularly by
        Verisk, but there are several ways that pricing errors can creep into an estimate.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Wrong Zip Code or Price List
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster builds the estimate using the wrong zip code, every price in the
        estimate will be wrong. This sometimes happens when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The adjuster works remotely and selects the wrong location
        </li>
        <li>
          The property is in a high-cost area but the adjuster uses a neighboring, lower-cost
          zip code
        </li>
        <li>
          The insurer uses a regional price list that does not reflect local conditions in
          your specific market
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can verify the price list by checking the first page of the Xactimate estimate,
        which should display the &ldquo;Price List&rdquo; and the zip code or region used.
        It should match the actual location of your property.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Outdated Pricing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s prices are updated monthly. If the estimate was written using an
        older price list, the prices may not reflect current material and labor costs. This
        is particularly impactful during periods of rapid price increases (such as after
        hurricanes or during supply chain disruptions). The price list date should correspond
        to the date of loss or the date of repair, not a date months or years earlier.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Wrong State
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is rarer but it happens, particularly with catastrophe (CAT) adjusters who
        handle claims in multiple states. If an adjuster who normally works in Texas is
        deployed to California for a wildfire, they may inadvertently use their default
        state&apos;s price list. California prices are significantly higher than Texas
        prices. Always verify the state and zip code on the price list page.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Identify These Errors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need to be an Xactimate expert to find many of these errors. Here is a
        systematic approach to reviewing an insurance estimate:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Step 1: Check the Basics
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Price list</strong> &mdash; check the first page for the correct zip code,
          state, and a price list date that is current to your date of loss
        </li>
        <li>
          <strong>Overhead and profit</strong> &mdash; if your claim involves multiple trades,
          check whether O&amp;P is included. It is usually shown at the bottom of the estimate
          as a separate percentage
        </li>
        <li>
          <strong>Depreciation method</strong> &mdash; if you are in California, verify that
          depreciation is applied only to materials, not to the combined total
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Step 2: Compare the Sketch to Your Home
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Does the sketch include every room that was damaged?
        </li>
        <li>
          Are closets and secondary spaces shown separately?
        </li>
        <li>
          Do the room dimensions look reasonable compared to what you know about your home?
        </li>
        <li>
          Is the ceiling height noted correctly? (Check the room properties in the estimate)
        </li>
        <li>
          For roof claims, does the sketch show all roof facets, dormers, and slopes?
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Step 3: Walk Through the Line Items
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Look at the material descriptions &mdash; do they match what you actually have?
          If your estimate says &ldquo;laminate countertop&rdquo; and you have granite, that
          is a material selection error
        </li>
        <li>
          Look for detach/reset items &mdash; if the estimate includes painting a room, there
          should be D&amp;R items for the fixtures in that room
        </li>
        <li>
          Look for content manipulation &mdash; if rooms are being reconstructed, there should
          be a line item for moving contents
        </li>
        <li>
          Count the trades &mdash; if you see three or more different types of work
          (electrical, plumbing, drywall, paint, flooring, etc.) there should be O&amp;P
        </li>
        <li>
          Check for temporary protection &mdash; any construction project near finished
          surfaces needs floor protection, dust barriers, or both
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Step 4: Check Depreciation Line by Line
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Is depreciation applied to labor separately from materials?
        </li>
        <li>
          Are the useful-life assumptions reasonable for each item?
        </li>
        <li>
          Is depreciation being applied to items that should not be depreciated (permits,
          code upgrades, debris removal)?
        </li>
        <li>
          Does the depreciation percentage seem appropriate for the actual age and condition
          of the items?
        </li>
      </ul>

      <CalloutBox variant="tip" title="Get the PDF Version">
        <p>
          Insurance companies issue Xactimate estimates as PDF files. Request the full PDF
          including the sketch, line item detail, and depreciation summary. Some insurers
          only provide a summary page &mdash; you need the full detail to review it properly.
          You are entitled to a copy of the complete estimate that supports any payment.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When You Find Errors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Finding errors in your estimate is step one. Getting them corrected is step two. The
        process for addressing errors is called &ldquo;supplementing&rdquo; the claim.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        The Supplement Process
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A supplement is a formal request to revise the estimate. It is not a complaint or a
        dispute &mdash; it is a standard part of the claims process. Supplements happen on
        virtually every significant claim because it is impossible to identify every needed
        repair on the initial inspection. Here is how it works:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the errors</strong> &mdash; create a list of each error or omission
          you have identified. Be specific: &ldquo;missing D&amp;R for toilet in master
          bath&rdquo; is better than &ldquo;things are missing&rdquo;
        </li>
        <li>
          <strong>Provide supporting evidence</strong> &mdash; photographs showing what is
          actually in the home (material types, fixtures, conditions), measurements you have
          taken, or contractor invoices that reflect the actual cost
        </li>
        <li>
          <strong>Submit to the adjuster</strong> &mdash; send your supplement request in
          writing (email) to the assigned adjuster. Keep a copy for your records
        </li>
        <li>
          <strong>Follow up</strong> &mdash; if you do not receive a response within 15 days
          (in California) or the timeframe required by your state, follow up in writing and
          reference your original submission date
        </li>
        <li>
          <strong>Escalate if needed</strong> &mdash; if legitimate errors are not being
          corrected, you have options including requesting a supervisor review, hiring a
          Public Adjuster, invoking the appraisal clause, or filing a complaint with your
          state&apos;s department of insurance
        </li>
      </ol>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Writing an Effective Supplement Request
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most effective supplement requests are specific, factual, and referenced to
        Xactimate&apos;s own line items and pricing methodology. Instead of saying &ldquo;your
        estimate is too low,&rdquo; point to specific line items:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          &ldquo;The estimate uses line item XYZ for standard-grade laminate flooring. The
          home has engineered hardwood flooring (see attached photo). The correct line item
          is ABC.&rdquo;
        </li>
        <li>
          &ldquo;The estimate does not include detach and reset for the three toilets in rooms
          where flooring is being replaced. Attached are photos showing toilets in the master
          bath, hall bath, and powder room that must be removed for the flooring work.&rdquo;
        </li>
        <li>
          &ldquo;The estimate applies a 10% waste factor to a complex hip roof with valleys
          and dormers. Industry standard for this roof geometry is 15-20%. See attached aerial
          image showing roof complexity.&rdquo;
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        When to Hire a Professional
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some errors are straightforward enough for a homeowner to identify and dispute. Others
        require professional expertise. Consider hiring a licensed Public Adjuster or an
        independent Xactimate estimator when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The claim is large (over $20,000-$30,000) and the potential for error is significant
        </li>
        <li>
          The insurer is refusing to correct documented errors
        </li>
        <li>
          You do not have the time or expertise to line-item the estimate yourself
        </li>
        <li>
          The damage involves complex trades, code issues, or specialty materials
        </li>
        <li>
          You need a competing Xactimate estimate prepared in the same software using the
          same methodology &mdash; which levels the playing field
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Honest Mistakes vs. Systematic Underpayment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every error in an insurance estimate is intentional. The difference between a
        genuine mistake and a pattern of systematic underpayment matters &mdash; both for
        your own perspective and for how you choose to respond.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Signs of an Honest Mistake
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The adjuster willingly corrects the error when you point it out
        </li>
        <li>
          The errors are random &mdash; some things are over-estimated, some under-estimated
        </li>
        <li>
          The adjuster acknowledges they missed something or measured incorrectly
        </li>
        <li>
          The scope of the error is relatively small compared to the overall estimate
        </li>
        <li>
          The adjuster was clearly rushing (large catastrophe event, heavy caseload) but is
          responsive to corrections
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Signs of Systematic Underpayment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The same types of items are consistently excluded across the entire estimate &mdash;
          for example, no D&amp;R items anywhere, no content manipulation anywhere, no
          temporary protection anywhere
        </li>
        <li>
          O&amp;P is excluded despite clear multi-trade involvement
        </li>
        <li>
          Every material selection defaults to the cheapest available option regardless of
          what is actually in the home
        </li>
        <li>
          The adjuster refuses to correct documented errors or gives circular reasons for
          the exclusions
        </li>
        <li>
          Depreciation is applied aggressively to items that should not be depreciated or
          using unrealistically short useful-life tables
        </li>
        <li>
          The insurer cites &ldquo;company guidelines&rdquo; as justification for excluding
          standard costs
        </li>
        <li>
          The waste factor is uniformly low regardless of actual installation conditions
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Why the Distinction Matters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the errors are honest mistakes, a polite supplement request will usually resolve
        them. The adjuster corrects the estimate, you receive additional payment, and the
        claim moves forward. There is no need to escalate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the errors are systematic &mdash; reflecting company policy rather than individual
        oversight &mdash; a simple supplement request may not be enough. The adjuster may
        lack authority to override company guidelines, even when those guidelines produce an
        incomplete estimate. In this situation, you may need to escalate: request a supervisor
        review, hire a Public Adjuster, invoke appraisal, or file a department of insurance
        complaint. The approach is different because the problem is different.
      </p>

      <CalloutBox variant="info" title="Document Everything">
        <p>
          Regardless of whether the errors appear intentional, document everything in writing.
          Send your supplement requests by email so you have a record of what you asked for
          and when. Note dates of phone calls and what was discussed. If the claim eventually
          goes to appraisal, mediation, or litigation, your documentation of the errors and
          the insurer&apos;s response (or non-response) becomes critical evidence.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: The Most Impactful Errors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While every error matters, some have a disproportionate impact on the total estimate.
        If you are reviewing your insurance estimate and have limited time, focus on these
        high-impact areas first:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Missing overhead and profit</strong> &mdash; this is typically 20% of the
          entire estimate. If it should be there and it is not, that is the single largest
          error in dollar terms
        </li>
        <li>
          <strong>Incorrect depreciation</strong> &mdash; especially depreciating labor in
          California or using unrealistically short useful lives. This directly reduces your
          initial payment
        </li>
        <li>
          <strong>Wrong material selections</strong> &mdash; the difference between
          builder-grade and premium materials can be substantial, especially on large-quantity
          items like flooring, cabinets, and roofing
        </li>
        <li>
          <strong>Sketch errors and wrong measurements</strong> &mdash; these affect every
          line item in the affected rooms. A missing room or wrong ceiling height has a
          multiplier effect across all trades
        </li>
        <li>
          <strong>Wrong waste factor</strong> &mdash; particularly on roofing claims where
          the difference between 10% and 20% waste on a large roof is significant
        </li>
        <li>
          <strong>Missing trades</strong> &mdash; an entire category of work that is not
          represented means all the labor and materials for that trade are unpaid
        </li>
        <li>
          <strong>Missing detach/reset items</strong> &mdash; individually small, but they
          add up across an entire scope of work and their absence also suggests the estimate
          was prepared carelessly
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance estimate is not a final verdict. It is a starting point. When it contains
        errors &mdash; whether through oversight or design &mdash; you have every right to
        identify those errors and request corrections. The supplement process exists for
        exactly this purpose. The more specific and documented your request, the more likely
        it is to result in additional payment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For more information on related topics, see our guides on{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
          understanding Xactimate estimates
        </Link>
        ,{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
          Xactimate line items
        </Link>
        ,{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
          overhead and profit
        </Link>
        ,{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] hover:underline">
          roof waste factors
        </Link>
        , and{' '}
        <Link href="/resources/commonly-missed-items" className="text-[#2E74B5] hover:underline">
          commonly missed items
        </Link>
        .
      </p>
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
