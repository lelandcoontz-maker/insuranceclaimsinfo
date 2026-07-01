import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The Science of Hail Damage: Test Squares and Impacts",
  description:
    "The forensic science behind hail damage on roofs: how test squares work, what distinguishes real hail impacts, and how to counter carrier engineer reports.",
  summary:
    'Forensic hail assessment uses test squares and impact-pattern analysis to distinguish real hail strikes from other marks. Knowing how this works lets you counter carrier engineers who mischaracterize or dismiss legitimate hail damage.',
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
        Hail damage is one of the most disputed causes of roof damage in property insurance. The
        reason is simple: hail damage is invisible from the ground, requires hands-on roof inspection
        to identify, and can be mischaracterized by anyone without proper training. Insurance
        carriers take advantage of this ambiguity by sending engineers who misidentify hail impacts, use
        flawed methodology, or apply manufacturer standards that do not reflect real-world
        conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide covers the actual science of hail damage identification — how it works, what to
        look for, and where carrier engineers routinely get it wrong.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Hail Does to a Roof
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When hailstones strike an asphalt shingle, the impact displaces or fractures the surface
        granules and can bruise or fracture the fiberglass mat beneath. The severity depends on
        several factors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hail size:</strong> Larger stones carry more kinetic energy. Terminal-velocity
          ranges published by NOAA/NWS place a 1-inch hailstone at roughly 30 to 50 mph and a
          2-inch stone at roughly 70 to 80 mph, with the actual impact speed varying by stone
          density, shape, and the updraft/downdraft conditions of the storm cell.
        </li>
        <li>
          <strong>Wind speed:</strong> Wind-driven hail strikes at an angle, increasing velocity and
          concentrating damage on the windward slopes of the roof.
        </li>
        <li>
          <strong>Shingle age and condition:</strong> New shingles absorb impacts better than aged,
          UV-degraded shingles. A shingle that passed impact resistance testing when installed may
          fail to resist the same impact 10 years later.
        </li>
        <li>
          <strong>Roof slope and orientation:</strong> Steeper slopes deflect more energy; flatter
          slopes absorb more direct impact. Windward-facing slopes receive more hits.
        </li>
        <li>
          <strong>Temperature:</strong> Cold shingles are more brittle and may fracture more
          readily under impact than warm shingles.
        </li>
        <li>
          <strong>Decking type:</strong> Solid plywood decking provides a firm backstop for impact
          energy. Spaced or skip-sheathing (common in older homes) allows shingles to flex on impact,
          sometimes reducing visible marks while still causing mat fractures.
        </li>
      </ul>

      <CalloutBox variant="important" title="Functional Damage vs. Cosmetic Damage">
        <p>
          Insurance companies increasingly try to classify hail damage as &ldquo;cosmetic
          only&rdquo; — meaning it looks bad but does not affect the shingle&apos;s ability to
          shed water. This is often wrong. Granule displacement exposes the asphalt layer to UV
          degradation, accelerating deterioration. Mat bruising compromises structural integrity.
          Even &ldquo;cosmetic&rdquo; damage shortens the roof&apos;s remaining life. See our
          guide on{' '}
          <Link href="/resources/cosmetic-damage-denials" className="underline font-semibold">
            cosmetic damage denials
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Hail Damage Is Identified: The Test Square Method
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The industry-standard method for documenting hail damage is the &ldquo;test square&rdquo; —
        a 10-foot by 10-foot area (100 square feet) marked off on the roof surface with chalk lines.
        The inspector counts and documents every hail impact within that square.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Proper Test Square Protocol</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Multiple squares per slope:</strong> A single test square is often
          insufficient on larger or complex roofs &mdash; hail is random by nature and hit
          density varies across the roof. At minimum, one test square per directional slope
          (north, south, east, west) is standard practice. Larger or more complex roofs
          generally call for additional squares.
        </li>
        <li>
          <strong>All directional faces:</strong> Because hail is wind-driven, different slopes
          receive different levels of impact. The windward slope typically shows the most damage.
          Inspecting only one slope and concluding &ldquo;no hail damage&rdquo; is methodologically
          unsound.
        </li>
        <li>
          <strong>Random placement:</strong> Test squares should be placed randomly, not
          cherry-picked. An honest inspector does not choose the best-looking area to minimize
          counts.
        </li>
        <li>
          <strong>Documentation:</strong> Each impact within the test square should be circled with
          chalk and photographed. The total count, impact sizes, and damage characteristics should
          be recorded.
        </li>
        <li>
          <strong>Threshold counts:</strong> There is no universal &ldquo;magic number,&rdquo;
          and asphalt-shingle manufacturers do not publish per-test-square hit-count
          replacement thresholds. A widely cited industry rule of thumb traceable to HAAG and
          roofing-forensics training materials places replacement-warranting damage in the
          range of 8 to 10 hail impacts per 100-square-foot test square on asphalt shingles,
          though the appropriate count varies by shingle product, age, and impact severity.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Carrier Engineers Do Wrong With Test Squares
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Single test square on one slope:</strong> The most common shortcut. The engineer
          places one test square on the least-damaged slope, counts low numbers, and concludes
          &ldquo;insufficient hail damage.&rdquo;
        </li>
        <li>
          <strong>Strategic placement:</strong> Placing the test square in an area shielded by trees,
          dormers, or other structures — areas less exposed to hail — to produce lower counts.
        </li>
        <li>
          <strong>Reclassifying hits:</strong> The engineer inspects the square but labels genuine hail
          impacts as &ldquo;blistering,&rdquo; &ldquo;granule erosion,&rdquo; or &ldquo;foot
          traffic,&rdquo; reducing the count of acknowledged hail strikes.
        </li>
        <li>
          <strong>Omitting test squares entirely:</strong> Some engineers skip formal test squares
          altogether, offering a &ldquo;general observation&rdquo; that the roof shows no hail
          damage. Without documented methodology, the conclusion is unsupported.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Distinguishing Hail Damage From Other Conditions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier engineers leverage the fact that several roof conditions can superficially resemble
        hail damage. Knowing the differences is critical for challenging their reports.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hail Damage vs. Blistering
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-2 text-left">Characteristic</th>
              <th className="px-4 py-2 text-left">Hail Impact</th>
              <th className="px-4 py-2 text-left">Blistering</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Shape</td>
              <td className="px-4 py-2">Circular or oval, indented</td>
              <td className="px-4 py-2">Irregular, raised or bubbled</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-medium">Edges</td>
              <td className="px-4 py-2">Sharp, defined edges</td>
              <td className="px-4 py-2">Soft, gradual edges</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Pattern</td>
              <td className="px-4 py-2">Random across the shingle</td>
              <td className="px-4 py-2">Often in rows or consistent areas</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-medium">Granule loss</td>
              <td className="px-4 py-2">Displaced outward from impact center</td>
              <td className="px-4 py-2">Granules may fall into the void</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Mat condition</td>
              <td className="px-4 py-2">Bruised or fractured beneath impact</td>
              <td className="px-4 py-2">Mat typically intact, void beneath</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-medium">Soft metals</td>
              <td className="px-4 py-2">Corresponding dents on vents/flashing</td>
              <td className="px-4 py-2">No collateral damage on metals</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hail Damage vs. Foot Traffic
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Foot traffic damage creates scuff marks — elongated, directional marks typically following
        walking paths (ridgeline, around pipe penetrations, near HVAC equipment). The granule
        displacement is linear and directional, not circular. Foot traffic marks do not have the
        characteristic indentation of hail and will not be accompanied by collateral damage to
        soft metals, as walking on the roof does not dent aluminum vents.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hail Damage vs. Normal Granule Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        All asphalt shingles lose granules over time. Normal granule erosion is uniform, gradual, and
        follows the drainage pattern of water flow on the roof. Hail-caused granule loss is localized
        at impact points, occurs suddenly (all at once during the storm event), and leaves exposed
        asphalt in distinct circular or oval patterns — not the diffuse, widespread thinning of
        normal aging.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hail Damage vs. Thermal Cracking
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thermal cycling (expansion and contraction from temperature changes) can crack shingle
        surfaces over time. These cracks are typically linear, follow the shingle&apos;s grain
        direction, and appear uniformly across the roof. Hail fractures, by contrast, radiate
        outward from an impact point, are accompanied by granule displacement at the impact site,
        and occur in random patterns rather than uniformly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Collateral Damage: The Evidence Carriers Ignore
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail does not discriminate — it hits everything. Soft metals and other exterior
        components provide powerful corroborating evidence that a hail event impacted the property.
        These items include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Aluminum gutters and downspouts:</strong> Fresh round dents on horizontal gutter
          surfaces are classic hail indicators.
        </li>
        <li>
          <strong>Exhaust vents and plumbing boots:</strong> Aluminum and lead pipe boots dent
          easily. Fresh, bright-metal dents indicate recent impact.
        </li>
        <li>
          <strong>HVAC units:</strong> The top panels and fins of exterior HVAC condensers collect
          hail dents that are easy to identify and difficult to attribute to anything else.
        </li>
        <li>
          <strong>Window screens and frames:</strong> Window screens on upper floors show dents and
          punctures from hail that cannot be caused by foot traffic or aging.
        </li>
        <li>
          <strong>Fence tops, mailboxes, and outdoor furniture:</strong> Horizontal surfaces on
          metal outdoor items show hail impact evidence.
        </li>
        <li>
          <strong>Vehicles:</strong> If vehicles parked outside during the storm show dents, that
          confirms hail occurred.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier engineers frequently ignore collateral damage entirely — or inspect it and omit it
        from their report. If the engineer&apos;s report says &ldquo;no hail damage to the
        roof&rdquo; but does not mention the dented gutters, dented vents, and dented HVAC unit,
        the report is incomplete at best and misleading at worst.
      </p>

      <CalloutBox variant="tip" title="Document Collateral Damage Before Any Repairs">
        <p>
          Photograph all soft metal damage immediately after the storm — before any contractor work
          or clean-up. Gutters, vents, pipe boots, HVAC units, window screens, fencing, and vehicles
          are all part of your evidence. If a contractor replaces damaged vents or gutters during a
          repair, that collateral evidence is gone.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Manufacturer Specs vs. Real-World Performance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier engineers frequently cite manufacturer testing standards — particularly the UL 2218
        impact resistance classification — to argue that a roof &ldquo;should have&rdquo; withstood
        the hail event. This argument has serious flaws:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Lab conditions vs. field conditions:</strong> UL 2218 tests new shingles under
          controlled lab conditions — consistent temperature, flat substrate, single impacts. Real
          hail hits aged, weathered shingles on sloped surfaces with varying temperatures and
          multiple impacts.
        </li>
        <li>
          <strong>New vs. aged materials:</strong> A shingle rated Class 4 (highest impact resistance)
          when installed does not maintain that rating after years of UV exposure, thermal cycling,
          and weathering. The asphalt layer hardens, granule adhesion weakens, and the fiberglass mat
          becomes more brittle.
        </li>
        <li>
          <strong>Steel ball vs. real hail:</strong> UL 2218 uses steel balls dropped from specific
          heights. Real hailstones are irregular, sometimes jagged, and can be denser than the test
          ball equivalent. A 2-inch hailstone does not behave identically to a 2-inch steel ball.
        </li>
        <li>
          <strong>Single impact vs. repeated impact:</strong> Lab tests apply a single impact per
          location. In an actual storm, the same area of roof can be struck multiple times,
          compounding damage.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The bottom line: manufacturer impact ratings tell you how a <em>new</em> shingle performs in
        a <em>lab</em>. They do not tell you whether a 12-year-old shingle on your roof survived
        last Tuesday&apos;s storm. An engineer who cites UL 2218 ratings to deny damage on an aged
        roof is misapplying the standard.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Weather Data: The Objective Evidence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Weather data is the most objective evidence in any hail claim dispute. Key sources include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>NOAA Storm Reports:</strong> The National Oceanic and Atmospheric Administration
          publishes storm event data including hail size, location, time, and reported damage.
        </li>
        <li>
          <strong>Local Storm Reports (LSR):</strong> Filed by National Weather Service offices,
          these document real-time reports of severe weather events including hail.
        </li>
        <li>
          <strong>HailTrace, HailWatch, CoreLogic:</strong> Commercial weather verification services
          that provide radar-based hail swath maps showing estimated hail size at specific addresses.
          These are widely used in the insurance industry.
        </li>
        <li>
          <strong>Airport METAR data:</strong> Automated weather stations at airports record
          precipitation type, including hail, with timestamps.
        </li>
        <li>
          <strong>Spotter Network reports:</strong> Trained storm spotters submit ground-truth reports
          of hail size with GPS coordinates and timestamps.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If multiple data sources confirm 1.5-inch hail at your location and the carrier&apos;s
        engineer says there is no hail damage, the weather data directly contradicts the
        engineer&apos;s conclusion. This is powerful rebuttal evidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Your Case
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When challenging a carrier engineer&apos;s hail damage findings, build your case
        systematically:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Hire an independent expert</strong> — a qualified roofing consultant or independent
          engineer who performs test squares on every slope, documents collateral damage, and
          provides a detailed written report with photographs.
        </li>
        <li>
          <strong>Obtain weather verification</strong> — commercial hail reports (HailTrace,
          CoreLogic) plus NOAA storm data confirming the hail event at your address.
        </li>
        <li>
          <strong>Compare methodologies</strong> — if the carrier&apos;s engineer used one test
          square on one slope while your expert used multiple squares on all slopes, the
          methodological difference alone undermines the carrier&apos;s conclusion.
        </li>
        <li>
          <strong>Challenge mischaracterizations</strong> — if the engineer called hail impacts
          &ldquo;blistering,&rdquo; have your expert explain the specific physical differences with
          close-up photographs.
        </li>
        <li>
          <strong>Present neighboring claims data</strong> — if homes on the same street received
          payment for hail damage from the same storm, that undermines the carrier&apos;s position
          that your roof was unaffected.
        </li>
        <li>
          <strong>Submit a formal rebuttal</strong> — a point-by-point response to the
          carrier&apos;s engineer report with your expert&apos;s findings, weather data, collateral
          evidence, and neighboring claims information. See our guide on{' '}
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] hover:underline">
            writing effective claim letters
          </Link>.
        </li>
        <li>
          <strong>Invoke appraisal if needed</strong> — the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
            appraisal process
          </Link>{' '}
          bypasses the carrier&apos;s engineer entirely and puts the damage determination in the
          hands of independent appraisers and an umpire.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Do not Wait to Document">
        <p>
          Hail damage evidence degrades over time. Granule loss from hail can be obscured by
          subsequent weathering. Soft metal dents can be attributed to other causes months later.
          Contractors may replace damaged components during repairs. Document everything as soon as
          possible after the storm — and before any repair work begins.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Hail Claim Disputed or Denied?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can perform a proper hail inspection with full test squares,
          collateral documentation, and weather verification to challenge the carrier&apos;s
          engineer report.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
