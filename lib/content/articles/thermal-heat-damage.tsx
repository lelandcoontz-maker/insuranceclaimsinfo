import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Thermal and Heat Damage from Nearby Wildfires: The Hidden Damage Your Insurer May Miss',
  description:
    'Your home survived the wildfire — but it may still be damaged. Extreme heat from a nearby fire can warp siding, compromise windows, damage roofing underlayment, and degrade wiring — all without visible flame contact. Learn what to look for.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your home did not burn down. The fire came close — maybe it burned the house next door,
        or it stopped at the edge of your property — but your structure is still standing. The
        insurance company sends an adjuster who does a quick walk-around and says there is minimal
        damage. Maybe they pay for some exterior smoke cleaning and call it done.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But extreme radiant heat from a nearby wildfire can cause extensive damage to a structure
        without any direct flame contact. Much of this damage is hidden — it is inside walls,
        behind siding, underneath roofing materials, and in components you cannot see without
        destructive testing. If no one looks for it, it does not get found. And if it does not get
        found, it does not get paid.
      </p>

      <CalloutBox variant="warning" title="Heat Damage Is Often Invisible">
        <p>
          Radiant heat from a nearby fire can reach temperatures of 1,000&deg;F or more at the
          exterior surface of a home. Many building materials begin to degrade, warp, or lose
          structural properties at temperatures well below that. The exterior may look intact
          while the materials behind it have been compromised. A visual walk-through is not
          sufficient to assess heat damage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Heat Damage Looks Like
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Heat damage from a nearby wildfire is often uneven — concentrated on the elevations
        (sides of the house) that faced the fire and diminishing on the sides that were shielded.
        This directional pattern is itself evidence of fire exposure. Common heat damage includes:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Siding and Exterior</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Vinyl siding:</strong> Warps, buckles, or melts at relatively low temperatures
          (165&ndash;220&deg;F). Even siding that appears intact may have lost its shape or
          become brittle.
        </li>
        <li>
          <strong>Stucco:</strong> May develop hairline cracks from thermal stress. The wire lath
          behind the stucco can lose temper (structural strength) from heat exposure.
        </li>
        <li>
          <strong>Wood siding:</strong> Charring, discoloration, or checking (small surface cracks)
          on the fire-facing side. Wood may also dry out and become more vulnerable to future
          moisture problems.
        </li>
        <li>
          <strong>Composite decking:</strong> Warps or melts. If your composite deck shows heat
          damage, that is evidence that other materials on the same elevation were exposed to
          similar temperatures — which may mean vinyl window seals, flashing, and other components
          on that side are also compromised.
        </li>
        <li>
          <strong>Paint:</strong> Blistering, peeling, or discoloration on the fire-facing
          elevations.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Windows and Doors</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Dual-pane window seal failure:</strong> Heat can compromise the thermal seal
          between dual-pane glass. The window may look fine initially but develop fogging or
          condensation between the panes weeks or months later as the broken seal allows
          moisture in.
        </li>
        <li>
          <strong>Vinyl window frames:</strong> Warping or distortion. Even slight warping can
          prevent proper operation and compromise the weather seal.
        </li>
        <li>
          <strong>Weather stripping:</strong> Heat degrades rubber and foam weather stripping on
          doors and windows, reducing their thermal and moisture performance.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Roofing</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Asphalt shingles:</strong> Extreme heat accelerates granule loss, causes
          premature aging of the asphalt, and can melt or deform shingles. The damage may not
          be visible from the ground.
        </li>
        <li>
          <strong>Roofing underlayment:</strong> The felt or synthetic underlayment beneath the
          shingles can degrade from heat, losing its waterproofing properties. This damage is
          completely hidden — you cannot see it without removing the shingles.
        </li>
        <li>
          <strong>Flashing and sealants:</strong> Heat can cause sealants to fail and flashing
          to lose its adhesion or shape.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Behind the Walls</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Electrical wiring:</strong> Wire insulation (typically rated to 140&ndash;194&deg;F
          depending on type) can degrade from heat exposure, creating a hidden fire risk. The wire
          may function normally at first but fail under load later.
        </li>
        <li>
          <strong>Plumbing:</strong> PVC and CPVC pipes inside walls facing the fire can soften,
          warp, or lose structural integrity from heat conducted through the exterior wall.
        </li>
        <li>
          <strong>Insulation:</strong> Fiberglass insulation is heat-resistant, but the kraft paper
          facing can char. Foam insulation (spray foam, rigid board) can melt or off-gas.
        </li>
        <li>
          <strong>HVAC components:</strong> Exterior condenser units, refrigerant lines, and
          ductwork in attics or crawl spaces can be damaged by radiant heat.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Concrete and Masonry</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Concrete:</strong> At extreme temperatures, concrete can spall (surface layer
          flakes off), crack, or lose structural strength. Foundation walls, retaining walls, and
          concrete patios facing the fire may be affected.
        </li>
        <li>
          <strong>Mortar joints:</strong> Heat can degrade mortar between bricks or blocks, even
          if the bricks themselves appear undamaged.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Insurance Company Misses It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Heat damage goes undetected for several reasons:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Visual inspection is not enough.</strong> A carrier adjuster doing a walk-around
          may see a house that looks intact and conclude there is minimal damage. Many forms of
          heat damage are behind surfaces and require destructive testing to discover.
        </li>
        <li>
          <strong>Delayed manifestation.</strong> Some heat damage — particularly window seal
          failure and wiring degradation — does not become apparent until weeks or months after
          the event.
        </li>
        <li>
          <strong>Focus on homes that burned.</strong> After a wildfire, insurance resources are
          concentrated on total losses. Homes that survived are given less attention, and their
          claims are processed quickly with minimal inspection.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document and Prove Heat Damage
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Hire a structural engineer.</strong> A licensed structural engineer can perform a
          thermal damage assessment. They will examine the fire-facing elevations, identify
          materials that were exposed to heat, and determine what testing is needed. Structural
          engineering inspections typically run approximately $100 per hour, and a detailed report
          may cost several thousand dollars — but it is the foundation of your claim.
        </li>
        <li>
          <strong>Use comparative evidence.</strong> If composite decking on the fire-facing side
          of the house melted (melting point approximately 170&ndash;200&deg;F), that is evidence
          that vinyl window components on the same elevation (similar melting point) were also
          exposed to damaging temperatures. One visible form of damage supports the inference of
          hidden damage to materials with similar or lower heat tolerances on the same elevation.
        </li>
        <li>
          <strong>Request destructive testing.</strong> In some cases, siding must be removed to
          inspect wiring, insulation, and sheathing behind it. Shingles may need to be lifted to
          inspect underlayment. The cost of testing is a legitimate claim expense.
        </li>
        <li>
          <strong>Document the directional pattern.</strong> Photograph all four elevations. The
          damage pattern should correspond to the direction of the fire — heaviest on the
          fire-facing sides, lightest on the shielded sides. This pattern proves the damage is
          from the fire, not from pre-existing conditions.
        </li>
        <li>
          <strong>Monitor for delayed damage.</strong> Check windows for fogging between panes
          over the following months. Test electrical circuits under load. Watch for new leaks or
          moisture problems. Report any delayed-onset damage to your insurer promptly as a{' '}
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            supplemental claim
          </Link>.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Your Claim Is Not Closed Just Because You Accepted Initial Payment">
        <p>
          If the insurer paid for exterior cleaning and you later discover hidden heat damage,
          you can file a supplemental claim. Accepting an initial payment does not waive your
          right to claim additional damage that is discovered later. Document it, report it, and
          demand it be added to the scope.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Home Survived a Nearby Wildfire?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Don&apos;t assume your home is undamaged just because it didn&apos;t burn. A Public
          Adjuster can identify hidden heat damage and build a claim for the full scope of loss.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
    </>
  )
}
