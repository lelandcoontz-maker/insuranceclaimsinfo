import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Roof Waste Factor: How to Calculate It and Why Insurance Companies Get It Wrong',
  description:
    'Every roofing job generates waste from cuts around hips, valleys, ridges, vents, and penetrations. Learn how waste factor is calculated, how Xactimate handles it, and why carrier estimates routinely underpay for roofing materials.',
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
        Waste factor is driven by the number of cuts required. The more cuts, the more waste. Here
        are general guidelines based on roof complexity:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Simple gable roof (5&ndash;10% waste):</strong> A straightforward gable roof has
          two rectangular planes meeting at a single ridge. The only cuts happen along the rake
          edges and at the ridge. Minimal valleys, no hips, few penetrations. This is the simplest
          roof to shingle and generates the least waste.
        </li>
        <li>
          <strong>Moderate roof with hips and valleys (15&ndash;20% waste):</strong> Once a roof
          has hip sections, valleys where planes intersect, multiple ridges, and typical residential
          penetrations (plumbing vents, exhaust fans, furnace flue), waste climbs significantly.
          Every hip and valley requires angled cuts on every course of shingles along that line.
          Most standard residential roofs fall in this range.
        </li>
        <li>
          <strong>Complex roof with dormers, multiple penetrations, and irregular geometry
          (20&ndash;25%+ waste):</strong> Roofs with dormers, turrets, multiple skylights, satellite
          dishes, cricket flashings, chimney step flashings, and irregular plan shapes generate the
          most waste. Each penetration forces cuts on the surrounding shingles, and each dormer
          adds its own set of hips, valleys, and rake edges.
        </li>
      </ul>

      <CalloutBox variant="important" title="Starter and Cap Shingles Are Not Waste">
        <p>
          Starter strip shingles (the first course along the eaves and rakes) and ridge cap shingles
          (the pieces that cover the ridge and hips) are <strong>separate line items</strong> in a
          proper estimate &mdash; they are not included in the waste factor. Starter and cap are
          distinct products purchased separately. If a carrier includes starter and cap inside the
          waste percentage rather than as individual{' '}
          <Link href="/resources/xactimate-line-items" className="text-blue-700 underline hover:text-blue-900">
            Xactimate line items
          </Link>, the estimate is wrong twice: the waste factor is artificially inflated and the
          actual starter and cap material is not accounted for properly.
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
        roofing quantity, Xactimate automatically adds a waste percentage. The problem is that
        the default is typically around 10%, and many adjusters never change it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default is a starting point, not a final answer. The software allows the adjuster to
        override it and enter the actual waste percentage for the specific roof. A competent
        estimator examines the roof&rsquo;s geometry and adjusts accordingly. A lazy or
        cost-cutting estimator leaves the default and moves on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When reviewing a carrier&rsquo;s estimate, look for the waste percentage on each roofing
        line item &mdash; typically shown as a column or notation next to the quantity. If you see
        10% waste on a cut-up hip-and-valley roof, the estimate is underpaying for materials.
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
        For standard architectural shingles, one square requires three bundles &mdash; so a
        30-square roof needs 90 bundles before waste. You cannot buy a fraction of a bundle, so
        the real-world purchase is always rounded up. Xactimate allows fractional squares in its
        math, but the roofer at the supply house is buying whole bundles.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Measure a Roof
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two primary methods for measuring a roof:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Physical measurement:</strong> Getting on the roof with a tape measure and
          measuring every plane, ridge, hip, valley, and rake. Each plane is calculated as a
          geometric shape (rectangle, triangle, trapezoid) and the areas are summed. This is the
          most accurate method but requires safe roof access.
        </li>
        <li>
          <strong>Satellite / aerial measurement:</strong> Services like EagleView and GAF
          QuickMeasure use satellite imagery to generate roof reports with total area, pitch,
          facet count, hip/valley/ridge/rake lengths, and penetration count. These reports are
          widely used in the industry and generally accurate for residential roofs.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When disputing a carrier&rsquo;s estimate, ordering an independent satellite report is
        one of the most cost-effective steps you can take. Beyond confirming total area, these
        reports document the number of facets, total hip and valley lengths, and penetration
        count &mdash; data that directly supports a higher waste factor. If a satellite report
        shows 25 facets, 180 linear feet of hip, and 12 penetrations, no one can credibly argue
        that 10% waste is adequate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics on Waste Factor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers underpay roof claims in predictable ways. Recognizing these tactics is
        the first step in fighting back. For more on how carriers build low estimates, see our
        guide to{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss disputes
        </Link>.
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
        How to Challenge a Low Waste Factor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&rsquo;s estimate uses a waste factor that does not reflect the actual roof
        complexity, here is how to build your case:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the roof geometry.</strong> Photograph every hip, valley, dormer,
          skylight, vent, pipe, and chimney. Count them. A photo showing 12 pipe penetrations on
          one slope makes a stronger argument than a paragraph of text.
        </li>
        <li>
          <strong>Order a satellite measurement report.</strong> EagleView and similar services
          provide objective data on facet count, hip/valley lengths, and penetrations &mdash;
          removing subjectivity from the conversation.
        </li>
        <li>
          <strong>Get a contractor&rsquo;s material estimate.</strong> Ask a licensed roofer how
          many bundles they would actually order. Compare to the carrier&rsquo;s estimate. The
          difference is the underpayment.
        </li>
        <li>
          <strong>Reference the carrier&rsquo;s own diagram.</strong> Most Xactimate estimates
          include a roof diagram. Point to the hips, valleys, and penetrations in their own
          drawing and ask why the waste factor ignores that complexity.
        </li>
        <li>
          <strong>Put it in writing.</strong> Submit a formal supplement request with documentation
          and ask for the waste factor to be adjusted. For guidance, see our article on{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss disputes
          </Link>.
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
