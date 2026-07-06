import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "EagleView and Aerial Roof Reports: When the Measurements Are Wrong",
  description:
    "Aerial roof measurement reports drive every roofing number in the carrier's estimate. The known failure modes, how to check a report, and how to ask for reconciliation.",
  summary:
    'Carriers import aerial roof reports into Xactimate as the roof\'s dimensions, so a measurement error repeats through every roofing line item. Aerial reports are reliable on simple geometry but have known failure modes; the report can be requested, checked against a physical measurement, and reconciled in writing.',
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
        <em>
          A guide for policyholders, Public Adjusters, and attorneys on aerial roof
          measurement reports &mdash; what they contain, how they silently become the
          dimensional foundation of the entire roofing estimate, the known ways they go
          wrong, and how a measurement dispute gets resolved when the report and the
          actual roof disagree.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Somewhere near the back of many carrier roof estimates sits a document the
        policyholder never ordered and often never sees: an aerial roof measurement
        report. EagleView is the best-known provider, and carriers also use similar
        products from other measurement services. The report is generated from aerial or
        satellite imagery of the property, and it arrives looking authoritative &mdash;
        a rendered diagram of the roof, dimensions labeled to the inch, a table of
        areas, and page after page of computed lengths.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That appearance of precision is exactly why the report deserves scrutiny. The
        adjuster typically imports the report&apos;s numbers into Xactimate as the
        roof&apos;s dimensions, and from that moment forward, every roofing quantity in
        the estimate is built on the report. If the report is right, the estimate starts
        from solid ground. If the report is wrong &mdash; and there are well-understood
        ways it can be wrong &mdash; the error does not sit quietly in one line item. It
        repeats through the shingles, the underlayment, the starter, the ridge cap, the
        drip edge, the valley metal, and the labor pricing, because all of them are
        computed from the same measurement set.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article is about that failure chain: how the report drives the estimate,
        where aerial measurements are known to miss, and what the correction process
        looks like. It is a companion to the{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] underline">
          roof waste factor
        </Link>{' '}
        article, which covers the percentage applied on top of the measurements, and to
        the broader{' '}
        <Link href="/resources/roofing-systems-claims" className="text-[#2E74B5] underline">
          roofing systems claims
        </Link>{' '}
        guide. This one is about the measurements themselves.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What an Aerial Roof Report Actually Is
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        An aerial roof measurement report is a dimensional model of a roof built from
        overhead imagery &mdash; aerial photography, satellite capture, or a combination
        &mdash; processed through photogrammetric software and, depending on the
        product, human technicians. The property owner is not involved in its creation.
        Nobody climbs the roof. The report is ordered by address, generated from
        whatever imagery the service has for that location, and delivered as a PDF and
        as a data file that estimating software can ingest directly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A typical report contains:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Total roof area,</strong> expressed in square feet and in roofing
          squares (one square equals 100 square feet), often broken out by pitch.
        </li>
        <li>
          <strong>A facet map</strong> &mdash; a diagram identifying every distinct
          roof plane, with the area of each.
        </li>
        <li>
          <strong>Pitch determinations</strong> for each facet or group of facets,
          expressed as rise over run (4/12, 8/12, and so on).
        </li>
        <li>
          <strong>Lineal footage of every edge type:</strong> ridges, hips, valleys,
          eaves, rakes, and wall flashings, each totaled separately.
        </li>
        <li>
          <strong>Suggested waste tables,</strong> showing recommended material
          quantities at various waste percentages based on the measured geometry.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each of those categories exists because it drives a different part of a roofing
        estimate. Squares drive field material. Pitch drives labor pricing. Each edge
        type drives its own accessory product. The report is not trivia about the roof
        &mdash; it is a complete input package for an estimate, and that is precisely
        how it gets used.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Report Becomes the Estimate
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate can import an aerial roof report directly. When the adjuster does
        this, the report&apos;s measurements populate the roof model in the
        estimate&apos;s sketch: the facets, the areas, the pitches, and the edge
        lengths all come from the report. The adjuster then attaches line items to
        those dimensions &mdash; remove and replace shingles, underlayment, starter
        course, ridge cap, drip edge &mdash; and the software computes the quantities
        from the imported geometry.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The consequence is worth stating plainly: in a typical carrier roof estimate,
        the measurements were never taken by the person who wrote the estimate, and
        frequently were never verified by anyone who stood on the roof. The adjuster
        may have inspected the roof for damage, but the dimensions in the estimate
        &mdash; the numbers that determine how much material and labor the carrier
        pays for &mdash; usually came from the aerial report, imported wholesale.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this is inherently improper. Aerial measurement is a legitimate
        technology, widely used on the contractor side as well, and on a simple roof
        with clean sightlines it is generally reliable. Roofers order these reports
        themselves to prepare bids. The problem is not the technology. The problem
        arises when the report is treated as unquestionable &mdash; when its numbers
        flow into the estimate without verification, and when a documented conflict
        between the report and the physical roof is resolved by default in favor of
        the report. A measurement product has failure modes like any other tool.
        Reliance on it without verification is a process choice, and it is the process
        choice, not the product, that produces the underpaid estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Readers familiar with interior estimates will recognize the pattern: this is
        the roof-level version of the same dimensional problem covered in{' '}
        <Link href="/resources/xactimate-sketch-errors" className="text-[#2E74B5] underline">
          Xactimate sketch errors
        </Link>
        . Inside the house, a sketch drawn with the wrong room dimensions understates
        every quantity computed from those walls and floors. On the roof, an imported
        measurement report plays the same role the sketch plays inside &mdash; it is
        the dimensional layer under every line item, and errors in it are invisible on
        the face of the estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Known Failure Modes
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        What follows is not a list of accusations against any measurement vendor. It
        is the checklist a practitioner runs when deciding whether an aerial report
        can be trusted on a particular roof. These are the categories where aerial
        measurement is known to struggle, for reasons inherent in measuring a
        three-dimensional object from overhead imagery.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Imagery Age: The Roof in the Report May Not Be the Roof on the House
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The report is only as current as the imagery behind it, and the imagery may
        predate the report by months or longer depending on when the location was last
        captured. If the roof has been altered since capture &mdash; an addition
        built, a patio cover attached, a section reframed, solar equipment installed
        or removed &mdash; the report measures a roof that no longer exists. Most
        reports disclose the imagery date somewhere in the document. Comparing that
        date against the property&apos;s recent history is the first check, and one of
        the easiest.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Tree Canopy: The Camera Cannot Measure What It Cannot See
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Where mature trees overhang the structure, portions of the roof are physically
        hidden from overhead view. The software must either interpolate the obscured
        geometry from what it can see or leave it out. On a property with heavy
        canopy, entire facets can be estimated rather than measured &mdash; and the
        report will still print those facets with the same confident, to-the-inch
        formatting as the facets that were actually visible. Nothing on the summary
        page distinguishes a measured dimension from an inferred one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Complex, Cut-Up Roofs: Small Facets Are Where the Model Strains
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A simple gable roof is an easy photogrammetry problem: two large planes, long
        clean edges, unambiguous geometry. A cut-up roof &mdash; multiple dormers,
        intersecting wings, turret sections, cricket flashings, small porch roofs
        tucked under larger planes &mdash; is a hard one. Small facets offer fewer
        pixels to measure, their edges are shorter and easier to misplace, and
        features hidden behind taller roof planes may not appear at all. Cornice
        returns and eyebrow features are classic omissions. On complex roofs, the
        error rate rises exactly where the roof generates the most accessory
        quantities and the most waste &mdash; which is to say, exactly where accuracy
        matters most.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Low-Slope Sections Misread
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Low-slope and flat sections &mdash; a porch roof, a rear addition, a section
        over a garage &mdash; are difficult to distinguish from overhead. A 1/12 and a
        3/12 pitch look nearly identical in plan view. Misreading a low-slope section
        matters more than the small pitch numbers suggest, because low-slope roofing
        is frequently a different roofing <em>system</em> entirely: rolled roofing,
        modified bitumen, or a membrane rather than shingles, with different
        materials, different labor, and different pricing. A report that folds a
        low-slope section into the shingle area misstates not just the quantity but
        the product.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Pitch Errors on Steep and Mixed-Pitch Roofs
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pitch is not measured directly from a photograph; it is inferred &mdash; from
        parallax between images, from shadows, from a three-dimensional model fitted
        to the imagery. On most roofs the inference is correct. On steep roofs, and on
        roofs that mix several pitches across different sections, it is one of the
        more common places for the report to be off by a step &mdash; reporting 6/12
        where a pitch gauge on the roof reads 8/12, or averaging a mixed-pitch roof
        into a single value.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A pitch error is uniquely expensive because pitch drives two things at once.
        First, it drives area: the steeper the roof, the more surface area sits over
        the same footprint, so an understated pitch understates every square of
        material. Second, and often larger, pitch drives <em>labor pricing</em>.
        Estimating platforms price roofing labor in pitch bands, and above certain
        thresholds add steep-slope charges reflecting the slower, harder, more
        dangerous work. A roof misread one pitch band low can lose the steep charge on
        every labor line item &mdash; a reduction that never appears as a visible
        deduction anywhere on the estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Missing Structures
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Aerial reports are ordered by address, and the measurement typically targets
        the primary structure. A detached garage, a workshop, a pool house, a carport,
        or an attached patio cover may be excluded from the report entirely &mdash;
        either because the order specified only the main dwelling or because the
        software did not associate the outbuilding with the parcel. If those
        structures suffered the same windstorm or hail event and the estimate is built
        solely on the report, their roofs simply are not in the claim numbers. This is
        less a measurement error than a scope omission, but it enters the estimate
        through the same door: an unverified report treated as a complete inventory of
        the property&apos;s roofing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        7. Overhang and Eave Assumptions
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        From directly overhead, the roof edge and the wall below it are hard to
        separate. Reports handle eave overhangs through modeling assumptions, and a
        standard overhang assumption applied to a house with deep eaves &mdash; or to
        a style where rafter tails extend well past the wall line &mdash; understates
        every plane along its full width. An error of even a foot of overhang, run
        along the entire eave and rake perimeter of a house, adds up to real area, and
        it also shortens the reported eave and rake lengths that drive drip edge,
        starter course, and gutter-related quantities.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        8. Measured Geometry vs. Installed Reality
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Finally, there is a category of gap that is not an error in the report at all:
        the report measures the roof&apos;s <em>geometry</em>, not its{' '}
        <em>installed condition</em>. The report cannot see how many layers of
        roofing are on the deck &mdash; a second layer changes tear-off labor and
        disposal quantities. It cannot see the exposure at which the existing
        shingles were installed &mdash; and a reduced exposure means more material
        per square than the standard assumption, an issue covered in detail in the{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] underline">
          roof waste factor
        </Link>{' '}
        article. It cannot see deteriorated decking, the condition of flashings, or
        code-driven components like ice-and-water barrier that depend on what is
        under the shingles. A perfectly accurate aerial report still describes only
        the shape of the roof. The estimate has to describe the job.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Small Measurement Errors Are Big Money
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A measurement error never stays in one place, because a roofing estimate is a
        web of quantities all computed from the same few dimensions. The report&apos;s
        numbers are the trunk; the line items are the branches.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Report Element
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                Line Items It Drives
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Total squares / facet areas</td>
              <td className="border border-gray-300 px-4 py-2">
                Field shingles (tear-off and install), underlayment, ice-and-water
                barrier, debris disposal
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Pitch per facet</td>
              <td className="border border-gray-300 px-4 py-2">
                Sloped area computed from footprint, labor pricing band, steep-slope
                charges, safety/staging items
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Eave length</td>
              <td className="border border-gray-300 px-4 py-2">
                Starter course, drip edge, ice-and-water barrier at eaves, gutter
                quantities
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Rake length</td>
              <td className="border border-gray-300 px-4 py-2">
                Drip edge / rake metal, starter along rakes where specified
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ridge and hip length</td>
              <td className="border border-gray-300 px-4 py-2">
                Ridge cap shingles, ridge vent, hip cap
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Valley length</td>
              <td className="border border-gray-300 px-4 py-2">
                Valley metal or valley lining, ice-and-water barrier in valleys
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Facet count / complexity</td>
              <td className="border border-gray-300 px-4 py-2">
                Suggested waste percentage applied to all field material
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read the table from left to right and the propagation problem becomes obvious.
        An eave length that is short by 40 lineal feet does not cost the policyholder
        one line item &mdash; it shorts the starter course, the drip edge, the eave
        ice-and-water barrier, and the gutter line simultaneously. A hip length that
        is short shorts the hip cap, which is a separate product with its own price.
        An understated pitch shrinks the computed area of every affected facet{' '}
        <em>and</em> drops the labor into a cheaper pricing band across every labor
        line item on the roof.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And every one of those understated quantities then has the waste factor, tax,
        and overhead and profit computed on top of it &mdash; so the shortfall
        compounds through the arithmetic of the estimate. This is the same
        multiplication dynamic described in the{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] underline">
          roof waste factor
        </Link>{' '}
        article, where a percentage applied to the whole roof turns a modest-sounding
        setting into thousands of dollars. Waste is a percentage applied to the
        measurements; this article is about the measurements the percentage is applied
        to. Getting the waste factor corrected accomplishes little if the underlying
        squares, pitches, and edge lengths are wrong &mdash; and vice versa. They are
        two halves of the same quantity problem.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The dollar mechanics do not require an extreme example. On a mid-sized
        residential roof, a report that runs a few squares short, misses one pitch
        band, and understates the edge lengths by a modest percentage will quietly
        remove a four-figure or five-figure sum from the estimate &mdash; spread so
        thinly across so many line items that no single line looks wrong on its face.
        That is what makes measurement disputes different from missing-line-item
        disputes: there is nothing visibly absent. The estimate looks complete. It is
        simply built on a smaller roof than the one on the house.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Check the Report
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step One: Get the Report Itself
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The starting point is obtaining the actual aerial report the carrier used
        &mdash; not just the estimate built from it. The full report shows the imagery
        date, the facet map, the per-facet pitches, and the edge-length tables, all of
        which are needed to check the measurements against reality. Sometimes the
        report is attached to the estimate; often it is not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, an aerial measurement report used to evaluate a claim fits
        comfortably within the category of claim-related documents. The standard form
        fire policy language set out in Insurance Code &sect;2071 requires the insurer
        to provide the insured, upon request, copies of claim-related documents &mdash;
        and the standard form language requires production within 15 calendar days of
        receiving the request. A written request that identifies the claim and asks for
        all claim-related documents, including any roof measurement reports and the
        estimates built from them, is the clean way to invoke it. The full mechanics of
        that request &mdash; what counts as claim-related, what insurers may withhold,
        and how to word the letter &mdash; are covered in{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
          the claim-file documents guide
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Two: Put a Physical Measurement Against It
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A report is checked by comparison, and the most direct comparison is a
        physical measurement of the roof by the roofing contractor who will actually
        perform the work. A roofer on the roof with a tape measures the real eaves,
        the real rakes, the real ridge, and reads the real pitch with a gauge set on
        the shingles. Where the contractor&apos;s measurements and the aerial report
        agree, the report is corroborated and the dispute narrows to other issues.
        Where they diverge, the divergence is now documented, dimension by dimension.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A second option &mdash; useful when nobody wants to argue about whose tape is
        right &mdash; is a competing aerial report. These reports are commercially
        available to anyone, including policyholders and their representatives, for a
        modest cost. When two independent measurement products disagree about the same
        roof, that disagreement is itself evidence that the measurements need
        verification, and it removes the framing that the policyholder is simply
        arguing against objective data. The dispute becomes data versus data.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Three: Photograph the Installed Reality
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The conditions the aerial report cannot see are documented with a camera at
        the roof:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Layers:</strong> a photograph at a cut edge or eave showing the
          number of roofing layers on the deck, which drives tear-off and disposal.
        </li>
        <li>
          <strong>Exposure:</strong> a tape laid vertically across several courses
          showing the actual reveal of the installed shingles, which drives material
          per square.
        </li>
        <li>
          <strong>Pitch gauge readings:</strong> a level or pitch gauge photographed
          in place on each distinct roof section, which either confirms or contradicts
          the report&apos;s inferred pitch &mdash; particularly on the steep and
          mixed-pitch sections where inference is weakest.
        </li>
        <li>
          <strong>Features the report missed:</strong> the detached garage, the patio
          cover, the cornice returns, the low-slope rear section &mdash; photographed
          so that their existence is not a matter of argument.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        A dated photograph of a pitch gauge reading 8/12 on a roof the report calls
        6/12 is worth more than any paragraph of disagreement. It converts a
        measurement dispute from opinion into a documented factual conflict that the
        carrier has to engage with.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Reconciliation Ask
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Once a documented conflict exists between the aerial report and the physical
        roof, the request to the carrier is specific, and it is worth framing
        precisely. The ask is not &ldquo;pay more.&rdquo; The ask is:{' '}
        <em>reconcile the two measurement sets.</em> The carrier&apos;s estimate is
        built on dimensions that a physical measurement of the property contradicts,
        and the carrier is asked, in writing, to resolve that contradiction and re-run
        the estimate on whichever measurements survive verification.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two provisions of California&apos;s Fair Claims Settlement Practices
        Regulations frame why the reconciliation request has force. First, 10 CCR
        &sect;2695.9(d) requires that when a claim is settled on the basis of a written
        scope or estimate prepared by or for the insurer, the estimate be for an
        amount that will actually restore the property to its pre-loss condition, in a
        manner consistent with accepted trade standards &mdash; and the same subsection
        separately requires the insurer to take reasonable steps to verify that the
        repair costs it uses are accurate and representative of the local market. An estimate computed from a roof
        smaller than the real one &mdash; fewer squares, shorter edges, a shallower
        pitch band &mdash; does not, by definition, price the work the trade actually
        has to perform on the real roof. The measurement error is not a technicality;
        it goes directly to whether the estimate can restore the property at all.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Second, 10 CCR &sect;2695.1(g) addresses the deflection that measurement
        disputes tend to draw &mdash; some version of &ldquo;that is what the report
        says.&rdquo; Under &sect;2695.1(g), the fact that an insurer relies on data or
        information obtained from a third party does not absolve the insurer of its
        own claims-handling obligations. The measurement service sold a data product;
        the insurer adjusted the claim. Responsibility for the estimate &mdash;
        including the accuracy of the dimensions it is built on &mdash; stays with the
        insurer regardless of which vendor supplied the numbers. A carrier cannot
        outsource its measurements and then treat the outsourcing as a defense to
        verifying them.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A written reconciliation request, then, typically contains: the specific
        dimensions in dispute, side by side (report value versus measured value); the
        supporting documentation (the contractor&apos;s measurement sheet, the pitch
        gauge photographs, the competing report if one was ordered); a statement of
        what the dimensional differences do to the estimate&apos;s quantities; and a
        request that the carrier either verify its measurements against the physical
        roof or correct the estimate to the verified dimensions. Broader patterns for
        presenting scope disputes in writing are covered in the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss
        </Link>{' '}
        guide.
      </p>

      <CalloutBox variant="tip" title="Keep the Dispute About Dimensions">
        <p>
          Measurement disputes are winnable precisely because they are objective. A
          roof has one actual eave length, one actual pitch, one actual number of
          squares. The strongest position is the one that stays on that ground:
          specific dimensions, specific documentation, and a specific request to
          reconcile. Arguments about fairness invite negotiation; a photograph of a
          pitch gauge invites correction.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Realistic Win Looks Like
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It helps to be clear-eyed about the outcome being pursued. The realistic win
        in an aerial measurement dispute is not a penalty, an admission, or a fight
        about the measurement vendor. It is a <strong>corrected measurement set and a
        re-run estimate.</strong> Once the carrier accepts &mdash; or cannot refute
        &mdash; the verified dimensions, the correction is mechanical: the roof model
        in the estimate is updated, and every quantity computed from it updates with
        it. The same propagation that spread the error through the estimate now
        spreads the correction.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, reconciliation tends to arrive by one of two routes. The first is
        a <strong>joint re-inspection:</strong> the adjuster and the contractor (or
        Public Adjuster) meet at the property and measure the disputed dimensions
        together, so there is no later argument about method. Carriers often agree to
        this once the conflict is documented, because it resolves the question
        cheaply and finally. The second is the carrier{' '}
        <strong>ordering an updated report</strong> &mdash; current imagery, corrected
        structure selection, the outbuildings included &mdash; which addresses the
        imagery-age and missing-structure categories directly. Either route ends in
        the same place: an estimate rebuilt on dimensions both sides have verified.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And because measurement is the foundation rather than the finish, a corrected
        measurement set is also the moment to re-check everything computed on top of
        it: the waste factor against the roof&apos;s actual complexity (the{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] underline">
          roof waste factor
        </Link>{' '}
        article covers that analysis), the accessory line items against the corrected
        edge lengths, and the labor pricing against the corrected pitch. A measurement
        correction that stops at the squares leaves money in every branch of the
        table above.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can a policyholder get a copy of the EagleView or aerial report the insurance
        company used?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Generally, yes. In California, a roof measurement report used to evaluate the
        claim fits within the claim-related documents that the standard form fire
        policy language in Insurance Code &sect;2071 requires an insurer to provide on
        request, with production within 15 calendar days of the request. The request
        should be in writing, identify the claim, and ask for all claim-related
        documents including any roof measurement reports. See{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
          the claim-file documents guide
        </Link>{' '}
        for the full framework.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Are aerial roof reports accurate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        On simple roofs with clean sightlines, they are generally quite accurate, and
        contractors use them routinely for bidding. The accuracy question is
        roof-specific: reports are least reliable where imagery is stale, trees
        obscure the roof, the geometry is cut-up with small facets, sections are
        low-slope, or the roof mixes pitches. The practical answer is that a report is
        a measurement claim to be verified, not a fact to be accepted &mdash; and on a
        complex roof, verification against a physical measurement is worth the effort.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The contractor&apos;s measurements and the carrier&apos;s report disagree.
        Whose numbers control?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Neither automatically. The roof itself controls &mdash; and the productive
        move is a written request that the carrier reconcile the two measurement sets,
        supported by the contractor&apos;s documented measurements and photographs.
        Under 10 CCR &sect;2695.9(d), an insurer-prepared estimate must be for an
        amount that will actually restore the property per accepted trade standards
        &mdash; with costs the insurer has taken reasonable steps to verify against the
        local market &mdash; and under 10 CCR &sect;2695.1(g), the insurer&apos;s
        reliance on a third-party measurement product does not absolve it of
        responsibility for the estimate. A documented conflict between the report and
        the physical roof is the insurer&apos;s to resolve, often through a joint
        re-inspection or an updated report.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does a correct aerial report mean the roof estimate is correct?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        No. The report describes the roof&apos;s geometry &mdash; areas, pitches, edge
        lengths. It says nothing about the installed conditions that also drive the
        estimate: the number of layers to tear off, the exposure of the existing
        shingles, deck condition, flashing condition, or code-required components. And
        even with perfect measurements, the estimate can still understate the job
        through the waste factor, missing accessory line items, or labor settings.
        Accurate measurements are the foundation of a correct estimate, not a
        guarantee of one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is it worth ordering an independent aerial report?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Often, yes. These reports are commercially available to policyholders and
        their representatives at modest cost, and a second report is particularly
        useful when the carrier treats its own report as beyond question. If the two
        reports agree, the dispute narrows to the installed-reality issues a camera
        can document. If they disagree, the disagreement itself demonstrates that the
        measurements require verification against the physical roof &mdash; which is
        the point the policyholder was making all along.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Aerial roof reports are a useful technology that has quietly become the
        dimensional foundation of most carrier roof estimates. They are generally
        reliable on simple geometry and have known, well-understood failure modes on
        everything else: stale imagery, tree cover, cut-up roofs, low-slope sections,
        inferred pitch, missing structures, overhang assumptions, and the permanent
        gap between measured geometry and installed reality. Because every roofing
        quantity in the estimate is computed from the report, a measurement error is
        never one error &mdash; it is a systematic understatement spread invisibly
        across the entire roof scope.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The response is process, not outrage: obtain the report, verify it against the
        physical roof, document the conflicts, and put a specific reconciliation
        request in writing. The realistic and regularly achievable outcome is a
        corrected measurement set and a re-run estimate &mdash; at which point the
        rest of the roof analysis, from the{' '}
        <Link href="/resources/roof-waste-factor" className="text-[#2E74B5] underline">
          waste factor
        </Link>{' '}
        to the accessory line items covered in the{' '}
        <Link href="/resources/roofing-systems-claims" className="text-[#2E74B5] underline">
          roofing systems claims
        </Link>{' '}
        guide, finally has accurate numbers to stand on.
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
