import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Roof Waste Factor: Why Insurance Companies Get It Wrong",
  description:
    "Every roofing job wastes material at hips, valleys, ridges, and penetrations. How Xactimate handles waste and why carrier estimates underpay for roofing.",
  summary:
    'Every roof job wastes material on cuts around hips, valleys, ridges, and penetrations, so estimates need an adequate waste factor. Carrier estimates routinely set it too low; know how Xactimate handles waste so you are paid for the materials actually needed.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Consult a licensed attorney for advice about your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every roofing job generates waste. When a roofer installs shingles, pieces must be cut to
        fit around hips, valleys, ridges, vents, pipes, skylights, dormers, and edges. The cut-off
        portions go into the dumpster. This discarded material is called &ldquo;waste,&rdquo; and
        the percentage of extra material required to account for it is the{' '}
        <strong>waste factor</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Waste factor matters on insurance claims because the carrier&rsquo;s estimate must include
        enough material to actually complete the roof. If the waste factor in the estimate is too
        low, the estimate underpays for materials &mdash; and the homeowner or contractor is left
        covering the difference. This is one of the most common and least understood ways that{' '}
        <Link href="/resources/roof-damage" className="text-blue-700 underline hover:text-blue-900">
          roof damage claims
        </Link>{' '}
        get underpaid.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Waste Factor Actually Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A waste factor of 15% means you need to purchase 15% more material than the net roof area
        requires. If a roof measures 30 squares (3,000 square feet of roofing area), a 15% waste
        factor means you need to buy material for 34.5 squares. The extra 4.5 squares of shingles
        will be cut, trimmed, and discarded during installation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every roof generates waste. There is no such thing as a zero-waste roofing job. The
        question is how much waste a particular roof generates &mdash; and that depends entirely
        on the roof&rsquo;s geometry.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Calculate Waste Factor by Roof Type
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Waste factor is driven by the number of cuts required. The more cuts, the more waste.
        The traditional adjuster baseline most field references use is{' '}
        <strong>10% on a gable roof and 15% on a hip roof</strong>, with the understanding
        that the actual waste on a specific roof may be higher or lower than the baseline.
        HAAG&apos;s roof-inspection materials, the ARMA (Asphalt Roofing Manufacturers
        Association), and NRCA (National Roofing Contractors Association) generally use the
        same baseline numbers. The bands below describe how those numbers move with roof
        complexity:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Simple gable roof (10% baseline):</strong> Two rectangular planes meeting at
          a single ridge. The only cuts happen along the rake edges and at the ridge. Minimal
          valleys, no hips, few penetrations. 10% is the traditional adjuster starting point.
        </li>
        <li>
          <strong>Hip roof (15% baseline):</strong> Once a roof has hip sections, valleys
          where planes intersect, and typical residential penetrations (plumbing vents,
          exhaust fans, furnace flue), 15% is the traditional starting point. The mechanical
          reason waste climbs on a hip roof is straightforward: hips and valleys force the
          shingles along those lines to be cut on an angle. Every course that runs into a
          hip or valley loses the angled cut-off piece, and that cut material is rarely
          usable elsewhere on the roof. The more linear feet of hip and valley, the more
          angled cuts, the more discarded material. Most standard residential roofs sit at
          or above this 15% baseline.
        </li>
        <li>
          <strong>Complex roof with dormers, multiple penetrations, and irregular geometry
          (20&ndash;25%+):</strong> Roofs with dormers, turrets, multiple skylights, satellite
          dishes, cricket flashings, chimney step flashings, and irregular plan shapes
          generate the most waste. Each penetration forces cuts on the surrounding shingles,
          and each dormer adds its own set of hips, valleys, and rake edges.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the rule-of-thumb baseline, there are two ways to get the actual number for a
        specific roof. Several measurement-software products (EagleView, GAF QuickMeasure,
        Hover, and similar) calculate waste more precisely from satellite or photogrammetric
        data &mdash; they count the actual hips, valleys, rakes, and penetrations and feed
        that into a waste number tied to the geometry rather than to a category. The other
        method is post-hoc: a roofing contractor can calculate the actual waste on the job
        from the materials ordered versus the materials installed. The materials a contractor
        actually purchased and the waste materials generated at the end of the job are the
        most defensible record of what the roof really required.
      </p>

      <CalloutBox variant="info" title="A general principle of waste-factor calculation">
        <p>
          As a general principle &mdash; not just on roofs but in estimating across construction
          trades &mdash; the larger the continuous field, the lower the waste factor tends to
          run as a percentage. Tile on a 400-square-foot living-room floor wastes a smaller
          percentage of material than tile on a 30-square-foot bathroom floor with the same
          geometry, because the cut-offs from the field shrink in proportion to the field as
          the field gets bigger. The same principle applies to shingles: a large continuous
          slope wastes a lower percentage than several small slopes that add up to the same
          area. The waste percentage does not go to zero on a large field, however. Even on the
          biggest continuous run, the rake-edge and ridge cuts still produce some discarded
          material.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Exposure: A Separate Quantity Issue (Not a Waste Factor)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A separate quantity issue often confused with waste factor is{' '}
        <strong>exposure</strong> &mdash; the visible portion of each course of shingles after
        the next course is installed over it. Standard asphalt shingles are typically
        installed at a 5 to 5-5/8 inch exposure depending on the product. Some products and
        installation specifications call for tighter exposure (sometimes called a
        &ldquo;reduced exposure&rdquo; or a &ldquo;closer reveal&rdquo;), which means each
        shingle overlaps the next one more, and more shingles per square are required to
        cover the same area.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reduced exposure is not a waste factor &mdash; it is simply <em>more material
        needed</em> to cover the same surface area. The shingles are not being cut off and
        discarded; they are being installed with greater overlap. When an estimate accounts
        only for standard exposure and the actual installation requires a reduced exposure,
        the material quantity is short before any waste calculation enters the picture. This
        is one of the easier issues to miss because the estimate&apos;s waste factor may
        look reasonable while the underlying material count is wrong.
      </p>

      <CalloutBox variant="important" title="Starter Strip Is Not a Shingle &mdash; And It Is Not Covered by the Waste Factor">
        <p>
          Starter strip is the first course installed along the eaves and (on some
          manufacturers&apos; specifications) along the rakes. Most major asphalt-shingle
          manufacturers either <strong>require</strong> a starter strip product (or explicitly
          allow shingles cut down to function as starters) as part of the installation
          specification that backs the warranty. Starter strip looks similar to a shingle but
          it is a <strong>distinct product</strong>, sold separately, with its own SKU, its
          own price, and its own Xactimate line item.
        </p>
        <p className="mt-2">
          The recurring adjuster argument worth naming: adjusters often try to refuse a
          separate line item for starter strip on the theory that &ldquo;the waste factor
          already covers it&rdquo; &mdash; i.e., that the waste percentage applied to the
          roof shingles is sufficient to pay for the starter material as well. That argument
          conflates two different things. Waste factor accounts for cut-off material thrown
          away during installation. Starter strip is an entirely separate product the roofer
          had to buy. Bundling starter strip into the waste percentage produces an estimate
          that is wrong twice: the waste factor is artificially inflated to justify the
          bundling, and the actual starter material is not paid for as the product it is.
        </p>
        <p className="mt-2">
          The same analysis applies to ridge cap shingles (the pieces that cover the ridge
          and hips), which are also a separate product with their own SKU and their own
          Xactimate line item. Ridge cap material is not what the waste percentage is for.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Xactimate Handles Waste
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
          Xactimate
        </Link>{' '}
        &mdash; the estimating software used by virtually every property insurance carrier &mdash;
        has a built-in default waste factor for roofing line items. When an adjuster enters a
        roofing quantity, Xactimate automatically adds a waste percentage. The default value is
        region- and version-dependent (historically around 10%, with several recent Verisk price
        lists raising it into the 12&ndash;15% band in some regions), and in many estimates the
        default is left unchanged regardless of the actual roof geometry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default is a starting point, not a final answer. The software allows the adjuster to
        override it and enter the actual waste percentage for the specific roof. A competent
        estimator examines the roof&rsquo;s geometry and adjusts accordingly. A lazy or
        cost-cutting estimator leaves the default and moves on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When reviewing a carrier&apos;s estimate, the waste percentage shows up on each roofing
        line item &mdash; typically as a column or notation next to the quantity. A 10% waste
        factor applied to a cut-up hip-and-valley roof is one of the most common sources of
        material underpayment on a roof claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Pitch Factor: Slope Multiplier
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you even get to waste, there is another critical factor that affects roofing material
        quantities: the <strong>pitch factor</strong> (also called the slope multiplier). A roof
        that is pitched at a steep angle has more surface area than the same footprint would have
        if it were flat. The steeper the roof, the more material it takes to cover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pitch is expressed as rise over run &mdash; a 6/12 pitch rises 6 inches for every 12
        inches of horizontal distance. To convert footprint area to actual sloped area, multiply
        by the pitch factor:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Roof Pitch</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Pitch Multiplier</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Extra Material vs. Flat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">4/12</td>
              <td className="border border-gray-300 px-4 py-2">1.054</td>
              <td className="border border-gray-300 px-4 py-2">+5.4%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">6/12</td>
              <td className="border border-gray-300 px-4 py-2">1.118</td>
              <td className="border border-gray-300 px-4 py-2">+11.8%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">8/12</td>
              <td className="border border-gray-300 px-4 py-2">1.202</td>
              <td className="border border-gray-300 px-4 py-2">+20.2%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">10/12</td>
              <td className="border border-gray-300 px-4 py-2">1.302</td>
              <td className="border border-gray-300 px-4 py-2">+30.2%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">12/12 (45&deg;)</td>
              <td className="border border-gray-300 px-4 py-2">1.414</td>
              <td className="border border-gray-300 px-4 py-2">+41.4%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        If a roof has a 2,000 square foot footprint and a 10/12 pitch, the actual roofing area is
        2,000 &times; 1.302 = 2,604 square feet. That is an extra 604 square feet of material. If
        the carrier measures only the footprint and forgets to apply the pitch multiplier &mdash;
        or applies the wrong one &mdash; the estimate is short before waste is even considered.
      </p>

      <CalloutBox variant="tip" title="Verify Both Factors">
        <p>
          When reviewing a roof estimate, check two things separately: (1) the pitch multiplier to
          confirm the total roof area is correct, and (2) the waste factor to confirm enough extra
          material is included for cuts and discards. These are independent calculations. Getting
          either one wrong means the estimate underpays.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Items Commonly Missing from Carrier Roof Estimates
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Waste factor is only one part of the problem. Carrier roof estimates routinely omit entire
        line items that are required for a proper roof installation. For a comprehensive list, see
        our guide to{' '}
        <Link href="/resources/commonly-missed-items" className="text-blue-700 underline hover:text-blue-900">
          commonly missed items
        </Link>. For roofing specifically, watch for these:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ridge cap shingles:</strong> The shingles that cover the ridge and hips. These
          are a separate product, not part of the field shingle quantity. Many carrier estimates
          either omit ridge cap entirely or bury it in the waste factor.
        </li>
        <li>
          <strong>Starter strip:</strong> The first course of shingles along the eaves and rakes.
          Starter strip is a manufactured product designed for this purpose and is a separate line
          item.
        </li>
        <li>
          <strong>Ice and water shield:</strong> A self-adhering waterproof underlayment required
          by code in many jurisdictions along eaves, valleys, around penetrations, and on low-slope
          sections. It is significantly more expensive than standard synthetic underlayment.
        </li>
        <li>
          <strong>Drip edge:</strong> Metal flashing installed along the eaves and rakes. Code
          requires drip edge in most jurisdictions. It is a separate line item from the roofing
          material.
        </li>
        <li>
          <strong>Step flashing and counter flashing:</strong> The metal pieces that waterproof
          the junction between the roof and vertical surfaces like walls, chimneys, and dormers.
        </li>
        <li>
          <strong>Pipe jack boots / pipe collars:</strong> The rubber and metal flashings around
          plumbing vent pipes. Every pipe penetration needs one, and they must be replaced with
          the roof.
        </li>
        <li>
          <strong>Valley metal:</strong> Pre-formed metal installed in valleys before shingles are
          laid. Required in many specifications and by some manufacturers for warranty compliance.
        </li>
        <li>
          <strong>High-nail zone / steep application:</strong> On roofs above a certain pitch
          (typically 8/12 or higher), shingle manufacturers require additional nails per shingle
          and sometimes adhesive application, adding labor and material cost.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these is a legitimate cost that belongs in the estimate. When multiple items are
        missing, the combined underpayment can be thousands of dollars &mdash; before{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>{' '}
        are applied.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bundles vs. Squares: Understanding Roofing Material Quantities
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing material is sold in <strong>bundles</strong> but measured in{' '}
        <strong>squares</strong>. One &ldquo;square&rdquo; equals 100 square feet of roof area.
        For standard 3-bundle architectural shingles (the most common residential profile in
        California: GAF Timberline, CertainTeed Landmark, Owens Corning Duration, and similar
        lines), one square requires three bundles &mdash; so a 30-square roof needs 90 bundles
        before waste. Some heavyweight or premium lines are 4-bundle and require four bundles
        per square. A roofer cannot buy a fraction of a bundle, so the real-world purchase is
        always rounded up. Xactimate allows fractional squares in its math, but the roofer at
        the supply house is buying whole bundles.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Measure a Roof
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Measurement is the foundation of any waste-factor argument. If the underlying
        measurement is wrong, every percentage applied on top of it is wrong too. There are
        two methods used in the field, and they are not interchangeable in the way many modern
        adjusters treat them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tape-Measurement on the Roof &mdash; the Gold Standard
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The traditional method for measuring a roof is to climb onto it with a tape measure
        and measure every plane &mdash; rake length, eave length, ridge length, the rise over
        the run for the slope, and the geometry of each hip and valley. A photograph of the
        tape extended against the framing creates contemporaneous evidence of the dimension
        as measured on the actual roof. This is the gold standard because it captures the
        actual roof, not a model of it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tape measurement does not require that every single dimension be taken individually.
        Framing constrains the geometry: on a gable roof, the rafters on both sides of the
        ridge are cut to the same length, so if one slope measures 16 feet 3 inches, the
        opposite slope is essentially certain to be the same. A roofer or PA who tape-measures
        four or five key dimensions has effectively measured the whole roof because the
        framing dictates the rest. &ldquo;Not every dimension was taped&rdquo; is not the
        gotcha an adjuster sometimes treats it as. What was taped creates a highly accurate
        baseline; the rest follows from the framing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Satellite and Photogrammetric Reports &mdash; Useful, With Documented Blind Spots
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Services like EagleView, GAF QuickMeasure, and Hover use satellite or photogrammetric
        imagery to generate roof reports with total area, pitch, facet count,
        hip/valley/ridge/rake lengths, and penetration count. These reports are widely used
        in the industry, often accurate down to the inch, and they are far easier to obtain
        than putting a roofer on the roof. As a tool, they are useful. As an authoritative
        substitute for tape measurement, they have known limitations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Slope/pitch interpretation can be wrong.</strong> The software infers pitch
          from shadow, parallax, or a 3D model fit to the image. Sometimes the inference is
          off, and a wrong pitch propagates into every area, length, and material-quantity
          line on the report.
        </li>
        <li>
          <strong>Cornice returns and other small features can be missed.</strong> Architectural
          features hidden from the satellite&apos;s overhead angle &mdash; cornice returns,
          small dormers tucked behind other roof planes, eyebrow features &mdash; may not appear
          in the report, even though the roofer has to install them.
        </li>
        <li>
          <strong>Tree cover obscures portions of the roof.</strong> Where mature trees overhang
          the structure, the satellite physically cannot see the roof underneath. The report
          either estimates the obscured area or simply omits it.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of this makes satellite reports useless &mdash; they are an excellent
        second-source check and, when disputing a carrier&apos;s low estimate, an independent
        satellite report is one of the more cost-effective steps an insured might consider.
        A report showing 25 facets, 180 linear feet of hip, and 12 penetrations is hard to
        credibly argue against. The point is that the report is one piece of evidence about
        the roof, not the only piece.
      </p>

      <CalloutBox variant="warning" title="When an Adjuster Refuses to Accept On-Site Tape Measurements">
        <p>
          A pattern worth surfacing: some adjusters now treat their preferred measurement
          software as authoritative and refuse to accept on-site tape measurements as
          evidence. That refusal has the analysis backwards. Tape measurement is not a
          competing data source against the software; it is the underlying reality that the
          software is trying to model. Where the software disagrees with a documented tape
          measurement of the actual roof, the software is the one in tension with reality
          &mdash; not the other way around. When an adjuster declines to accept on-site
          measurements taken by a licensed roofer or public adjuster, that refusal itself is
          worth documenting in writing for the claim file.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics on Waste Factor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roof-claim underpayment tends to follow recurring patterns on the waste-factor axis.
        Recognizing them is the precondition to surfacing them in writing. For more on how
        carriers build low estimates, see the{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss disputes
        </Link>{' '}
        guide.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Using the Xactimate default waste on every roof:</strong> This is the most
          common tactic. The adjuster leaves the default waste factor (often 10%) regardless of
          the roof&rsquo;s actual complexity. A 10% waste factor may be appropriate for a simple
          gable roof, but it is grossly insufficient for a cut-up residential roof with hips,
          valleys, dormers, and multiple penetrations.
        </li>
        <li>
          <strong>Claiming the default is &ldquo;standard&rdquo;:</strong> When challenged, the
          adjuster may say the waste factor is &ldquo;per Xactimate.&rdquo; Xactimate does not
          mandate any waste percentage &mdash; it provides a default the estimator is expected to
          adjust based on actual conditions.
        </li>
        <li>
          <strong>Ignoring roof geometry:</strong> The carrier may measure the area correctly but
          ignore the complexity. A 30-square hip roof and a 30-square gable roof use the same base
          material, but the hip roof generates far more waste from all the angled cuts.
        </li>
        <li>
          <strong>Bundling starter and cap into waste:</strong> Some adjusters inflate the waste
          percentage and claim it &ldquo;includes&rdquo; starter and cap. Starter strip and ridge
          cap are separate products purchased separately &mdash; they belong as individual line
          items.
        </li>
        <li>
          <strong>Applying the wrong pitch factor:</strong> Using a lower pitch multiplier than
          the actual roof pitch, understating total area and reducing every material line item.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Surfacing a Low Waste Factor with the Carrier
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier&apos;s estimate uses a waste factor that does not reflect the actual
        roof complexity, a homeowner might consider the following documentation patterns:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Roof-geometry documentation.</strong> Photographing every hip, valley, dormer,
          skylight, vent, pipe, and chimney, and counting them. A photo showing 12 pipe
          penetrations on one slope tends to make a stronger argument than a paragraph of text.
        </li>
        <li>
          <strong>An independent satellite measurement report.</strong> EagleView and similar
          services provide objective data on facet count, hip/valley lengths, and penetrations
          &mdash; which tends to remove subjectivity from the conversation.
        </li>
        <li>
          <strong>A licensed roofer&apos;s material estimate.</strong> Asking a licensed roofer
          how many bundles they would actually order, and comparing that number to the
          carrier&apos;s estimate, surfaces the dollar size of any underpayment.
        </li>
        <li>
          <strong>The carrier&apos;s own diagram as a reference point.</strong> Most Xactimate
          estimates include a roof diagram. The hips, valleys, and penetrations in the
          carrier&apos;s own drawing are a useful anchor for asking why the waste factor does
          not reflect that complexity.
        </li>
        <li>
          <strong>Written follow-up.</strong> A written supplement request with documentation
          asking for the waste factor to be adjusted is the standard next step. For guidance on
          written follow-up patterns, see the{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss disputes
          </Link>{' '}
          guide.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Matching and Waste: When Partial Replacement Creates More Waste
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When only part of a roof is being replaced, waste can actually be <em>higher</em> than on
        a full replacement. The roofer must cut and fit new shingles to tie into existing shingles
        at transition lines, generating additional cuts. This is especially relevant on{' '}
        <Link href="/resources/hail-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          hail damage claims
        </Link>{' '}
        where the carrier approves only certain slopes. The carrier should account for this
        additional waste &mdash; but rarely does. And if the new shingles do not match the existing
        ones in color or profile, the entire roof may need replacement under{' '}
        <Link href="/resources/matching" className="text-blue-700 underline hover:text-blue-900">
          matching requirements
        </Link>, changing the waste calculation entirely.
      </p>

      <CalloutBox variant="tip" title="The Real-World Test">
        <p>
          Here is a simple way to think about waste: if the roofer orders exactly the number of
          squares shown in the carrier&rsquo;s estimate, will they have enough material to finish
          the roof? If the answer is no &mdash; and on a complex roof with a 10% waste factor, it
          almost certainly is no &mdash; then the estimate does not cover the actual cost of the
          repair. That is the conversation to have with the insurance company.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Putting It All Together: A Sample Calculation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a residential roof with the following characteristics: 2,200 square foot
        footprint, 8/12 pitch, hip-and-valley design with two dormers and 8 penetrations.
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Apply the pitch factor:</strong> 2,200 SF &times; 1.202 = 2,644 SF of actual
          roof area = 26.44 squares.
        </li>
        <li>
          <strong>Determine the waste factor:</strong> Hip-and-valley roof with dormers and multiple
          penetrations &mdash; this is a 20% waste roof, minimum.
        </li>
        <li>
          <strong>Apply waste:</strong> 26.44 squares &times; 1.20 = 31.73 squares.
        </li>
        <li>
          <strong>Convert to bundles:</strong> 31.73 squares &times; 3 bundles per square = 95.19
          bundles, rounded up to 96 bundles.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now compare that to what a carrier might estimate using a 10% default waste on the same
        roof: 26.44 &times; 1.10 = 29.08 squares = 87.24 bundles, rounded to 88 bundles. That is
        8 bundles short &mdash; roughly 2.67 squares of material. At current shingle prices, that
        difference can easily be $500 to $1,000+ in materials alone, before{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          O&amp;P
        </Link>{' '}
        and tax.
      </p>

      {/* ───────── Legal Disclaimer ───────── */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          <strong>Legal Disclaimer:</strong> This article provides general information about
          roofing waste factors and insurance claim estimating practices. It is intended for
          educational purposes only and does not constitute legal advice. Insurance policies,
          building codes, and material specifications vary by jurisdiction and individual
          circumstances. Consult a licensed contractor for material calculations and a licensed
          attorney for advice about your specific claim.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          <em>
            Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
          </em>
        </p>
      </div>
    </>
  )
}
