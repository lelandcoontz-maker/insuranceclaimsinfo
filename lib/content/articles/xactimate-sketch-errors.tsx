import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Xactimate Sketch Errors: When Wrong Dimensions Shrink Every Line Item",
  description:
    "In Xactimate, quantities flow from the sketch. A room drawn too small understates drywall, paint, flooring, and baseboard all at once. How to check the dimensions and get them corrected.",
  summary:
    'Every surface-driven quantity in an Xactimate estimate flows from the sketch. When a room is drawn smaller than it really is, every line item in that room shrinks with it &mdash; and nothing on the printed estimate reveals the error unless the dimensions are checked room by room.',
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
        <em>A detailed guide for policyholders, Public Adjusters, and attorneys on how the sketch in an Xactimate estimate controls the quantities behind every surface-driven line item &mdash; and what happens when the rooms in the sketch are smaller than the rooms in the house.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most disputes over insurance estimates focus on prices and line items: what a square foot of drywall costs, whether the painter gets two coats or one, whether the estimate includes floor protection. Those disputes matter. But there is a layer beneath all of them that receives far less attention &mdash; the sketch. In Xactimate, the sketch is not an illustration. It is the measurement engine for the entire estimate. Every square foot of wall, every square foot of ceiling, every linear foot of baseboard is calculated from the rooms the estimator drew.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That means a sketch error is not one mistake. It is a mistake multiplied across every line item that touches the affected surfaces. A room drawn 10% smaller than reality understates the drywall, the paint, the flooring, the baseboard, the insulation, and the cleaning &mdash; all at once, all in the same direction, all invisibly. The prices can be perfectly current. The line items can be complete. And the estimate can still be thousands of dollars short because the software was told the house is smaller than it is.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how the sketch drives the numbers, catalogs the most common sketch errors, shows where the dimensions appear on the printed estimate, and describes what a policyholder can do when the measurements do not match the house.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Sketch Is the Foundation of Every Quantity
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When an estimator opens Xactimate and begins a structural estimate, the first substantive step is drawing the sketch: a floor plan of each affected room, with lengths, widths, wall heights, ceiling shapes, and openings such as doors and windows. From that geometry, the software automatically calculates a set of variables for each room:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Floor area</strong> &mdash; drives flooring, carpet, pad, floor prep, floor protection, and cleaning quantities.</li>
        <li><strong>Ceiling area</strong> &mdash; drives ceiling drywall, ceiling paint, ceiling texture, and insulation above the ceiling.</li>
        <li><strong>Wall area</strong> &mdash; drives wall drywall, wall paint, wall texture, paneling, tile, and wall insulation.</li>
        <li><strong>Perimeter</strong> &mdash; drives baseboard, quarter round, crown molding, and other trim measured in linear feet.</li>
        <li><strong>Wall height</strong> &mdash; multiplies against the perimeter to produce wall area, so an error here scales every vertical surface.</li>
        <li><strong>Openings</strong> &mdash; doors, windows, and pass-throughs that the software deducts from wall area and uses for items like window wrapping and door trim.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the estimator then adds a{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] underline">line item</Link>{' '}
        &mdash; say, &ldquo;Paint the walls &mdash; two coats&rdquo; &mdash; the quantity is not typed in by hand. It is pulled from the sketch. The software applies the room&apos;s calculated wall area to the line item automatically. The same is true for drywall, flooring, baseboard, insulation, texture, and dozens of other surface-driven items. This automation is one of Xactimate&apos;s genuine strengths: it produces consistent, mathematically linked quantities across the estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But automation cuts both ways. If the sketch is right, every quantity is right. If the sketch is wrong, every quantity is wrong &mdash; and wrong in the same proportion. There is no independent check inside the software that compares the sketch to the actual building. The software believes whatever the estimator drew.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Sketch Errors Are Invisible on the Printed Estimate
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A missing line item is at least theoretically visible. A policyholder or contractor reading the estimate can notice that there is no line for baseboard, no line for floor protection, no line for texture matching. The omission sits on the face of the document.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A sketch error is different. The line items are all there. The prices are all there. The quantities look specific and authoritative &mdash; &ldquo;412.36 SF Walls,&rdquo; &ldquo;168.00 SF Ceiling,&rdquo; &ldquo;52.00 LF Floor Perimeter.&rdquo; Nothing about those numbers announces that they were calculated from a room drawn one foot short in each direction. Unless the reader checks the dimensions page and compares the printed measurements to the actual rooms, the error passes through the estimate, through the settlement, and into the payment without anyone noticing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the same structural problem discussed in{' '}
        <Link href="/resources/xactimate-pricing-gap" className="text-[#2E74B5] underline">Why Your Insurance Estimate Is Lower Than Your Contractor&apos;s Quote</Link>: the settings and inputs that most influence the total are the ones least visible on the printed page. The price list date, the labor efficiency setting, and the sketch dimensions all share this quality. They are chosen before or beneath the line items, and they silently scale everything built on top of them.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the arithmetic on a single modest room. A bedroom that actually measures 14 feet by 16 feet has 224 square feet of floor and ceiling. Drawn at 13 by 15 &mdash; each wall shortened by a single foot &mdash; it has 195 square feet. That is a 13% reduction in floor and ceiling quantities, and a corresponding reduction in wall area and perimeter. Every flooring, ceiling, paint, drywall, and baseboard line item in that room is now 7&ndash;13% understated. Multiply that pattern across ten or fifteen rooms in a whole-house claim, and the shortfall reaches into the thousands of dollars without a single line item being missing and without a single unit price being wrong.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Most Common Sketch Errors
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Sketch errors follow recognizable patterns. Most are not exotic. They are the predictable results of estimators working quickly, measuring approximately, or sketching from assumptions rather than from the building.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Rounded-Down Room Dimensions
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The simplest and most common error. A room that measures 12 feet 7 inches gets drawn at 12 feet. A room that measures 15 feet 4 inches becomes 15. Each individual rounding seems trivial, but rounding consistently downward across every wall of every room produces a systematic understatement. Xactimate accepts dimensions to the inch; there is no technical reason to round. When the printed dimensions are all suspiciously even numbers &mdash; 10, 12, 14, 16 &mdash; while the actual house has the irregular dimensions real houses have, the sketch deserves a closer look.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Missing Bump-Outs, Closets, and Hallways
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Real rooms are rarely perfect rectangles. Bay windows, breakfast nooks, entry alcoves, and wall offsets add floor area &mdash; and, more importantly, they add wall surface and perimeter. A bump-out adds three new wall segments and the baseboard that runs along them. When the estimator draws the room as a plain rectangle and ignores the bump-out, the estimate loses that wall area, that paint, that drywall, and that trim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Closets are a related and frequent omission. A closet is a small room with four walls, a ceiling, a floor, shelving, a rod, a door, and paint on every surface. A bedroom with two reach-in closets that are omitted from the sketch loses roughly 40&ndash;80 square feet of wall surface plus the shelving and door hardware. Hallways suffer the same fate: they are easy to skip because no one thinks of them as rooms, yet a smoke-damaged hallway has walls, ceiling, flooring, and trim like any other space. In a whole-house smoke or water claim, missing closets and hallways can quietly remove a meaningful percentage of the affected surface area from the estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Default 8-Foot Wall Height
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate applies a wall height to each room, and 8 feet is the conventional starting point. Many homes &mdash; especially those built in recent decades, and especially in California &mdash; have 9-foot or 10-foot ceilings on the main floor. The difference is not small. A room with 60 linear feet of perimeter has 480 square feet of wall at 8 feet, 540 square feet at 9 feet, and 600 square feet at 10 feet. Applying the default 8-foot height to a 10-foot room understates every wall quantity in that room by 20%. Drywall, paint, texture, insulation, tile wainscot, paneling &mdash; all of it scales with wall height, and all of it shrinks when the height is wrong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Vaulted Ceilings Drawn as Flat
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This error is large enough to deserve its own discussion, which follows in the next section. In short: a vaulted room drawn with a flat 8-foot ceiling loses both the additional wall area on the tall walls and gable ends <em>and</em> the additional ceiling surface along the slope. In a great room or a vaulted primary bedroom, the missing surface area can run into the hundreds of square feet.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Missing Stairwells
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Stairwells are among the most commonly mishandled spaces in residential sketches. A stairwell has treads, risers, stringers, handrail, and &mdash; critically &mdash; tall walls that often extend two stories, sometimes 17 to 20 feet from the lower floor to the upper ceiling line. Painting and repairing those walls requires scaffolding or specialized ladders, which carries its own line items. An estimator who omits the stairwell, or who sketches it as a small flat-ceilinged room, removes a disproportionate amount of wall surface plus the access equipment needed to reach it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Over-Deducted Openings
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a door, window, or pass-through is placed in the sketch, Xactimate deducts its area from the wall surface. Handled correctly, this is appropriate &mdash; no one paints a window. But openings can be over-deducted in several ways: a window drawn larger than it actually is; a standard door opening drawn as a wide cased opening; an opening deducted from the wall calculation even though the surrounding surface still requires full preparation and cutting-in, which takes a painter as long as painting solid wall. Some estimators also set openings to &ldquo;open&rdquo; into adjacent rooms in ways that remove entire wall segments from both rooms. Each over-deduction shaves wall area, and wall area drives the biggest recurring quantities in most interior estimates.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Second-Story Rooms Sketched from First-Floor Assumptions
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In multi-story sketches, upper floors are sometimes drawn by copying the first-floor footprint and subdividing it from memory or from a quick walkthrough. But second floors rarely mirror first floors. Rooms sit partially over garages, ceilings follow rooflines, knee walls shorten wall heights in some places while dormers add surfaces in others. A second story sketched by assumption rather than measurement tends to be wrong in both directions at once &mdash; and in a fire or major water claim where the upper floor took significant damage, those errors land on exactly the rooms with the most repair work.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Detached Structures Omitted Entirely
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Detached garages, workshops, sheds, pool houses, gazebos, and fences are covered under most homeowner policies as other structures, yet they are routinely absent from the sketch &mdash; and therefore absent from the estimate &mdash; when the estimator&apos;s attention stays on the dwelling. A detached structure that never enters the sketch generates zero line items. This is the sketch error in its purest form: not a room drawn small, but a building drawn not at all. Reviewing the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">scope of loss</Link>{' '}
        against the property as a whole &mdash; not just the interior rooms &mdash; is the check that catches it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Bathrooms Drawn as Plain Rectangles
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bathrooms are small, but they are the most geometrically dense rooms in a house. A tub or shower enclosure creates wet walls that carry backer board and tile rather than painted drywall. A shower surround has its own walls, often to a different height than the room. Soffits, niches, half-walls at the toilet, and vanity backsplashes all add surfaces that a plain rectangle does not capture. When a bathroom is sketched as a simple box with generic wall treatment, the estimate loses the distinction between painted drywall and tiled wet-wall assemblies &mdash; and tiled assemblies cost several times more per square foot. In a bathroom water loss, which is one of the most common residential claims, this simplification can cut the room&apos;s estimate substantially.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Ceiling Geometry: Flat, Vaulted, and Tray
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ceiling shape deserves special attention because it affects two large quantities at once and because the default assumption &mdash; a flat ceiling at standard height &mdash; is wrong in a significant share of modern homes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate supports multiple ceiling geometries: flat, vaulted (following the roof slope), cathedral, tray (a raised center panel with a stepped border), and combinations. Each geometry changes the calculated surface areas:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>A vaulted ceiling</strong> is larger than the room&apos;s footprint because the drywall follows the slope. The sloped planes of a vault over a 20-by-24 great room can exceed the flat footprint by a substantial margin, and the walls beneath the vault &mdash; including triangular gable-end sections &mdash; add wall area a flat-ceiling sketch never generates.</li>
        <li><strong>A tray ceiling</strong> adds the vertical faces of the step plus the crown or trim detail that typically runs along it. Drawn flat, the estimate loses those surfaces and the trim.</li>
        <li><strong>High flat ceilings</strong> (10, 12, or more feet in entries and living rooms) multiply wall area as described above and frequently require ladders, scaffolding, or lifts that generate their own line items.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        A vaulted great room priced as a flat 8-foot room is one of the more expensive single sketch errors a residential estimate can contain. The understated surfaces hit the costliest trades in an interior repair &mdash; drywall and paint &mdash; and they hit the largest room in the house. Between the missing ceiling area, the missing upper wall area, the missing gable-end triangles, and the missing access equipment for work performed 12 or 14 feet off the floor, the gap on that one room alone can reach thousands of dollars. And because the printed estimate still shows a ceiling line item with a specific-looking quantity, nothing flags the error for a reader who has not stood in the room and looked up.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Check the Sketch Against the House
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The good news is that sketch errors are among the most verifiable problems in an estimate. Prices require market data to challenge. Dimensions require a tape measure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Read the Dimensions on the Printed Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most Xactimate estimate printouts include the calculated dimensions for each room, either directly beneath the room heading or on a sketch page appended to the estimate. The room header typically shows the room name and its overall dimensions, and beneath or beside it a block of calculated values: square feet of walls, square feet of ceiling, square feet of walls and ceiling combined, square feet of floor, square yards of flooring, and linear feet of floor and ceiling perimeter. Many estimates also include the sketch diagram itself, showing each room&apos;s shape with dimension labels.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        These numbers are the sketch, translated to print. If the printed estimate omits the dimension blocks or the sketch pages, the policyholder can request a complete copy that includes them &mdash; and can request the ESX file, which contains the full sketch geometry rather than a summary of it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Measure the Actual Rooms
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The comparison itself is straightforward. With a tape measure or an inexpensive laser measure, each affected room&apos;s length, width, and ceiling height can be recorded and compared to the estimate&apos;s printed dimensions, room by room. Points worth particular attention, based on the error patterns above:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Ceiling heights in every room, not just one &mdash; main floors and upper floors often differ.</li>
        <li>Whether every closet, hallway, alcove, and bump-out in the affected area appears in the sketch.</li>
        <li>Ceiling shape in each room &mdash; whether vaults, trays, and slopes are reflected or drawn flat.</li>
        <li>The stairwell, and whether its tall walls are captured at their real height.</li>
        <li>Bathrooms &mdash; whether wet walls, surrounds, and soffits appear as distinct surfaces.</li>
        <li>Detached structures and exterior items, and whether they appear in the estimate at all.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Independent Takeoffs and 3D Scans
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor preparing a repair bid performs their own takeoff &mdash; their own measurement of the areas and quantities the job requires. That takeoff is an independent set of numbers generated by someone with a financial incentive to measure accurately, because a contractor who under-measures loses money on the job. When a contractor&apos;s measured quantities exceed the carrier estimate&apos;s printed quantities for the same rooms, the discrepancy points directly at the sketch.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Three-dimensional scanning tools offer another independent check. Several widely available technologies can capture a home&apos;s interior and produce a measured floor plan with wall heights and room dimensions derived from the scan itself rather than from anyone&apos;s tape measure or assumptions. A scan-derived floor plan compared against the estimate&apos;s sketch page makes dimension disputes concrete: two documents, two sets of numbers, one house. No particular product is necessary for this &mdash; what matters is that the measurement is independent, documented, and repeatable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Sketch Errors Compound with Everything Else
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A dimension error never stays contained to the surfaces it directly measures. It propagates into every calculation that uses those surfaces as an input.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Waste Factors
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Materials like flooring, carpet, and tile carry waste factors &mdash; additional material beyond the measured area to account for cuts, pattern matching, and layout. A waste factor is a percentage of the base quantity. When the base quantity comes from an undersized sketch, the waste allowance shrinks proportionally: 10% waste on 195 square feet is less material than 10% waste on 224 square feet. The error compounds &mdash; the estimate is short on the field material <em>and</em> short on the waste that real installation requires. The same mathematics drives roof estimates, where the waste factor applies to sketch-derived roof area; that analog is covered in detail in{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] underline">Roof Waste Factors in Xactimate Estimates</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Matching and Continuous-Surface Quantities
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When damaged flooring must be replaced across a continuous area to achieve a reasonably uniform appearance, or when paint must be carried to a natural break point, the quantities involved depend on how much continuous surface the sketch says exists. An undersized sketch understates not only the damaged area but the matching area connected to it. A missing hallway in the sketch can sever the connection between two rooms that share continuous flooring, changing the entire matching analysis.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage-Based Line Items
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Paint, primer, sealers, and similar coatings are calculated from surface area. So are cleaning line items in smoke and soot claims, which often apply per square foot of wall and ceiling. In a whole-house smoke claim, where cleaning line items run across every surface of every room, a sketch that understates total surface area by even a modest percentage removes that percentage from one of the largest categories in the entire estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Sketch errors also stack with the other estimate problems discussed elsewhere on this site &mdash; outdated price lists, wrong labor efficiency settings, and omitted line items. Each error is a separate multiplier applied to the same claim. A survey of the most frequent problems and how they interact appears in{' '}
        <Link href="/resources/common-xactimate-errors" className="text-[#2E74B5] underline">Common Xactimate Errors</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Policyholder Can Do About a Bad Sketch
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The realistic goal here is worth stating plainly: a corrected sketch and a re-run estimate. Because quantities flow from the sketch automatically, fixing the sketch fixes every affected line item at once. When the carrier corrects the room dimensions, the wall heights, and the ceiling geometry, and then re-prices the estimate, the software itself recalculates every surface-driven quantity. The policyholder does not need to argue about each line item individually &mdash; the geometry argument, once won, wins them all.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who believes the sketch is wrong might consider the following steps:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Requesting the dimensions in writing.</strong> A written request for the complete estimate with all dimension blocks and sketch pages &mdash; and for the ESX file &mdash; puts the measurements on the table where they can be checked.</li>
        <li><strong>Providing measured dimensions and photographs.</strong> Room-by-room measurements, photographs showing ceiling heights and shapes, closets, bump-outs, stairwells, and any detached structures, all submitted in writing, give the carrier the specific corrections and the documentation supporting them.</li>
        <li><strong>Asking the carrier to correct the sketch and reissue the estimate.</strong> The request is concrete and easy to act on: revise the sketch to the documented dimensions and geometry, re-run the estimate, and provide the corrected version. Because the correction is mechanical once the dimensions are agreed, this is a request a carrier can fulfill quickly when it is inclined to.</li>
        <li><strong>Supporting the correction with an independent takeoff.</strong> A contractor&apos;s measured takeoff or a scan-derived floor plan turns a disagreement about numbers into a comparison of documents.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations bear on this issue in two ways. First, 10 CCR &sect;2695.9(d) requires that when an insurer prepares a written estimate, the estimate must be one that would allow the damaged property to be restored to its pre-loss condition, in accordance with accepted trade standards, at costs that are accurate for the local market area. An estimate built on dimensions smaller than the actual building arguably cannot satisfy that standard &mdash; the quantities it prices are not the quantities restoration of the real structure requires.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Second, 10 CCR &sect;2695.1(g) provides that an insurer&apos;s reliance on estimating software or data supplied by third parties does not absolve the insurer of responsibility for the estimate. A carrier cannot deflect a documented dimension error by pointing at the software. Xactimate calculated the quantities, but a person drew the sketch, and the insurer remains responsible for what its estimate says. When measured dimensions and photographs demonstrate that the sketch understates the building, the responsibility for correcting it sits with the insurer, not with the software vendor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this requires accusations or theories about intent. Sketch errors are often ordinary human mistakes made under time pressure. The point is not why the room was drawn small &mdash; the point is that it was, that the error is documented, and that the estimate should be corrected to match the building it purports to price.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How can a policyholder tell if the square footage in an Xactimate estimate is wrong?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        By comparing the printed dimensions to the actual rooms. Most Xactimate printouts show each room&apos;s dimensions and calculated areas &mdash; square feet of walls, square feet of ceiling, linear feet of perimeter &mdash; beneath the room heading or on an attached sketch page. Measuring the real rooms with a tape or laser measure and comparing room by room reveals discrepancies directly. Particular attention to ceiling heights, ceiling shapes, closets, hallways, and stairwells catches the most common errors.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why does a small dimension error matter so much?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because the sketch drives every surface-based quantity in the estimate simultaneously. A room drawn one foot short in each direction loses roughly 7&ndash;13% of its floor, ceiling, and wall quantities, and every line item calculated from those surfaces &mdash; drywall, paint, flooring, baseboard, insulation, cleaning &mdash; shrinks with them. Waste factors and coverage-based items shrink proportionally on top of that. Across a whole house, small per-room errors accumulate into a shortfall measured in thousands of dollars.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What are the most common sketch errors in insurance estimates?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Rounded-down room dimensions; missing closets, hallways, and bump-outs; the default 8-foot wall height applied to 9- or 10-foot rooms; vaulted or tray ceilings drawn as flat; missing or flattened stairwells; over-deducted window and door openings; second-story rooms sketched from first-floor assumptions; bathrooms drawn as plain rectangles without wet-wall assemblies; and detached structures omitted from the estimate entirely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can a policyholder ask the insurance company to fix the sketch?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. A policyholder can submit measured dimensions and photographs in writing and ask the carrier to correct the sketch and reissue the estimate. Because Xactimate recalculates quantities automatically from the sketch, correcting the geometry corrects every affected line item at once. Under 10 CCR &sect;2695.9(d), an insurer&apos;s written estimate must be one that would restore the property to its pre-loss condition in accordance with accepted trade standards at local-market-accurate costs &mdash; a standard that arguably cannot be met by an estimate priced from dimensions smaller than the actual building.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is the insurance company responsible if the software calculated the wrong quantities?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect;2695.1(g), an insurer&apos;s reliance on estimating software or third-party data does not absolve the insurer of responsibility for the estimate. The software calculates quantities from whatever sketch it is given; the insurer remains responsible for the accuracy of the estimate it issues. A documented dimension error is the insurer&apos;s to correct, regardless of which tool produced the numbers.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The sketch sits beneath everything else in an Xactimate estimate. Arguments about prices assume the quantities are right. Arguments about line items assume the rooms are right. When the sketch is wrong, both assumptions fail at once &mdash; and the failure is invisible on the face of a document filled with precise-looking numbers.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The remedy is unusually accessible. Unlike pricing disputes, which require market data, a dimension dispute requires only measurement. A tape measure, a camera, a written request, and a room-by-room comparison are enough to document the problem, and a corrected sketch fixes every affected line item in a single pass. For policyholders reviewing a carrier estimate that seems too small for the house it describes, the dimensions page is one of the first places worth looking &mdash; and one of the few places where the answer can be checked against physical reality rather than argued about.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For the broader landscape of estimate problems and how they interact, see{' '}
        <Link href="/resources/common-xactimate-errors" className="text-[#2E74B5] underline">Common Xactimate Errors</Link>{' '}
        and{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">Understanding the Scope of Loss</Link>.
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
