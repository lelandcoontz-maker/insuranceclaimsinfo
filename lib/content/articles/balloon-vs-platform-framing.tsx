import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Balloon Framing vs. Platform Framing: Why Your Home’s Construction Method Matters for Insurance Claims",
  description:
    "Understanding balloon framing vs. platform framing — how your home’s construction method affects fire spread, water damage, mold growth, and why carriers routinely underestimate damage in balloon-framed homes.",
  summary:
    'Whether your home is balloon-framed or platform-framed changes how fire, water, and mold spread through the structure, and carriers routinely underestimate hidden damage in balloon-framed homes. Knowing your framing helps you argue for the full scope of repair.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal, engineering, or insurance advice. Every home is different, and building construction
          details should be evaluated by a qualified professional. If you believe your insurance
          claim has been underpaid because the carrier failed to account for your home&rsquo;s
          framing type, consult a licensed Public Adjuster or an attorney experienced in insurance
          coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was built before the 1950s, there is a good chance it uses a construction
        method called <strong>balloon framing</strong>. If it was built after the 1950s, it almost
        certainly uses <strong>platform framing</strong>. Most homeowners have never thought about
        the difference &mdash; but if you ever file an insurance claim for fire, water, or mold
        damage, the distinction can mean the difference between a properly paid claim and one that
        is dramatically underpaid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason is simple: balloon framing creates continuous open cavities inside your walls
        that run from the foundation all the way to the roof. Fire, water, and mold can travel
        through these cavities in ways that are invisible from the surface and far more extensive
        than most insurance adjusters account for. If the carrier scopes your damage as if your
        home is platform-framed when it is actually balloon-framed, they will almost certainly
        underestimate the extent of the loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Balloon Framing?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Balloon framing was the dominant construction method in the United States from the 1830s
        through the 1950s. In balloon framing, the wall studs are continuous &mdash; they run the
        full height of the building, from the sill plate at the foundation all the way up to the
        roof rafters. In a two-story home, this means the studs are typically 20 feet long or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical detail is what is <em>not</em> there. In balloon framing, there are no
        horizontal blocking members &mdash; called <strong>fireblocks</strong> or{' '}
        <strong>firestops</strong> &mdash; between the floors. The stud bays are wide open from
        bottom to top. The floor joists for the second story are nailed to the sides of the studs
        and rest on a horizontal ledger board, but the stud cavity itself remains continuous and
        unobstructed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of each stud bay as a vertical tunnel running from the basement or crawlspace all
        the way up into the attic. These tunnels are completely hidden behind the wall finish
        &mdash; drywall or plaster &mdash; and are invisible during a normal inspection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Platform Framing?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Platform framing became the standard construction method after the 1950s and is used in
        virtually all wood-frame residential construction today. In platform framing, each floor
        is built as a separate &ldquo;platform.&rdquo; The first-floor walls are erected on the
        first-floor deck, capped with a double top plate, and then the second-floor deck is built
        on top of those walls. The second-floor walls are then erected on the second-floor deck.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key difference is that each story&rsquo;s studs are only one story tall &mdash;
        typically 8 to 9 feet. At each floor level, the double top plates and the floor deck
        assembly create a natural <strong>fireblock</strong> that interrupts the stud cavities.
        Fire, water, and air cannot travel freely from one floor to the next through the wall
        cavities the way they can in balloon framing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Fire Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the distinction becomes critical. In a balloon-framed home, the open stud
        bays act as chimneys. When fire reaches a wall cavity &mdash; through an outlet box, a
        gap around a pipe penetration, or a breach in the wall finish &mdash; it enters a
        vertical tunnel with a natural draft. The fire races up through the cavity, spreading
        from the floor of origin to every floor above, and into the attic, in a matter of
        minutes.
      </p>

      <CalloutBox variant="warning" title="The Chimney Effect">
        <p>
          In a balloon-framed home, a small kitchen fire that breaches the wall can travel
          through the stud cavities to the second floor and attic before the fire department
          arrives. What looks like a one-room fire from the outside may be a structural fire
          on every level. This is why balloon-framed homes are statistically more likely to
          become total losses from fires that would be containable in platform-framed homes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a platform-framed home, fire that enters a wall cavity is blocked at the floor level
        by the plates and floor deck. It may still spread, but the spread is slower and more
        limited, giving firefighters more time and making the damage easier to contain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For insurance claims, this means that fire damage in a balloon-framed home is almost
        never limited to the room where the fire started. The adjuster needs to open walls on
        every floor &mdash; including floors that appear undamaged from the surface &mdash; to
        check for{' '}
        <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
          fire extension through the stud cavities
        </Link>
        . If the adjuster only scopes the room of origin, the estimate will dramatically
        understate the damage. For more on fire claims, see our{' '}
        <Link href="/resources/wildfire-guide" className="text-blue-700 underline hover:text-blue-900">
          wildfire claims guide
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Water Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water behaves similarly. In a balloon-framed home, water that enters a wall cavity at
        the roof level &mdash; from a roof leak, ice dam, or wind-driven rain &mdash; can travel
        down through the continuous stud bays all the way to the foundation. The water follows
        gravity through the open cavities, potentially saturating insulation, framing, and wall
        finishes on every floor it passes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a platform-framed home, water entering a wall at the roof level is typically stopped
        or redirected at the next floor level by the plates and floor deck. It may still cause
        damage, but the damage tends to be more localized and predictable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical impact for{' '}
        <Link href="/resources/water-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          water damage claims
        </Link>{' '}
        is significant. A roof leak in a balloon-framed home may cause water damage in the attic,
        on the second floor, on the first floor, and in the basement &mdash; all from a single
        point of entry. The damage may be invisible on the surface because the water traveled
        inside the wall cavity. Moisture readings, thermal imaging, and in some cases destructive
        testing are essential to identify the full extent of the damage.
      </p>

      <CalloutBox variant="important" title="Surface Inspections Are Not Enough">
        <p>
          In a balloon-framed home, a visual inspection of a water loss will almost always
          understate the damage. Water can travel the full height of the building inside the wall
          cavities without leaving visible evidence on the surface until days or weeks later, when
          staining, bubbling, or mold growth finally appears. Insist on moisture readings at every
          floor level.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Mold Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mold needs three things to grow: moisture, an organic food source, and time. Balloon-framed
        walls provide all three. When water enters a balloon-framed wall cavity, it can sit
        undetected for weeks or months, keeping the wood framing and any cellulose insulation
        consistently damp. The enclosed cavity is dark, still, and humid &mdash; ideal conditions
        for mold colonization.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because the cavities are continuous, mold that starts in one area can spread through the
        wall to other floors. By the time visible{' '}
        <Link href="/resources/mold-losses" className="text-blue-700 underline hover:text-blue-900">
          mold
        </Link>{' '}
        appears on the surface &mdash; if it ever does &mdash; the infestation behind the walls may
        be extensive. This hidden mold is a major reason why some mold claims in older homes come
        back with unexpectedly high remediation costs: what looked like a small area of surface mold
        turns out to be extensive contamination running through the wall cavities across multiple
        floors.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Code Upgrade Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the framing distinction creates an additional coverage issue. Current
        building codes require fireblocking in wall cavities. When a contractor opens up
        balloon-framed walls to make repairs, the local building department will typically require
        that fireblocks be installed in any wall cavities that are exposed during the repair. This
        is not optional &mdash; it is a code requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of adding fireblocks is not part of the direct damage repair. It is a code
        upgrade &mdash; bringing the existing structure into compliance with current building
        standards that did not exist when the home was originally built. This cost should be
        covered under your policy&rsquo;s{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Ordinance or Law coverage
        </Link>
        , which pays for code-required upgrades triggered by a covered loss.
      </p>

      <CalloutBox variant="tip" title="Check Your Ordinance or Law Limits">
        <p>
          Many homeowners policies include Ordinance or Law coverage, but the limits vary. Some
          policies include it as a percentage of the Dwelling limit, while others require it to be
          purchased separately. If your home is balloon-framed, the cost of
          adding fireblocks throughout the structure during a major repair can be substantial.
          Review your{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            code upgrade coverage
          </Link>{' '}
          limits before a loss occurs to make sure they are adequate.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier denies coverage for fireblocking on the grounds that it is a
        &ldquo;betterment&rdquo; or &ldquo;upgrade,&rdquo; push back. The fireblocking is not
        something you chose &mdash; it is something the building code requires. That is exactly
        what Ordinance or Law coverage is designed to pay for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Identify Your Home&rsquo;s Framing Type
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing whether your home is balloon-framed or platform-framed is important &mdash; both
        for fire safety and for ensuring your insurance claim is properly scoped. Here are several
        ways to identify your framing type:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Age of the home:</strong> If your home was built before 1950, there is a strong
          probability it is balloon-framed. Homes built after 1960 are almost certainly
          platform-framed. The transition period from roughly 1940 to 1960 could go either way
          depending on the builder and the region.
        </li>
        <li>
          <strong>Basement or crawlspace inspection:</strong> Look at the bottom of an exterior
          wall from the basement or crawlspace. In balloon framing, you can often look up into the
          wall cavity and see it extending upward without any horizontal blocking. In platform
          framing, the wall sits on top of the floor deck, and the stud cavity is blocked at the
          bottom by the sill plate and subfloor.
        </li>
        <li>
          <strong>Attic inspection:</strong> From the attic, look at where the exterior walls
          meet the roof. In balloon framing, the studs extend up to the rafters and the stud
          cavities are open from below. In platform framing, the top plates cap the wall studs
          and the attic floor deck blocks the cavity.
        </li>
        <li>
          <strong>Stud length:</strong> If you can see an exposed stud &mdash; perhaps during a
          renovation or in an unfinished area &mdash; measure its length. If a stud runs two
          full stories (roughly 18 to 22 feet), the home is balloon-framed. If the studs are
          only one story tall (roughly 8 to 9 feet), it is platform-framed.
        </li>
        <li>
          <strong>Permit records and original plans:</strong> Your local building department may
          have the original construction drawings on file, which will show the framing method.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Estimating Problems
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When insurance carriers scope damage in balloon-framed homes, several estimating problems
        come up repeatedly:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scoping only the room of origin:</strong> The adjuster inspects the room where
          the fire or water damage is visible and writes an estimate for that room only. In a
          balloon-framed home, the damage almost certainly extends to other floors through the
          wall cavities, but the adjuster never checks.
        </li>
        <li>
          <strong>No allowance for exploratory demolition:</strong> To determine the full extent
          of damage in a balloon-framed home, you often need to open walls on multiple floors.
          This exploratory or{' '}
          <Link href="/resources/commonly-missed-items" className="text-blue-700 underline hover:text-blue-900">
            investigative demolition
          </Link>{' '}
          is a legitimate claim cost that carriers frequently refuse to include in their initial
          estimates.
        </li>
        <li>
          <strong>Ignoring fireblock requirements:</strong> The estimate repairs the walls but
          does not include the cost of installing fireblocks as required by current building
          code. This is an Ordinance or Law cost that should be covered.
        </li>
        <li>
          <strong>Treating the home as platform-framed:</strong> Some adjusters &mdash;
          particularly younger ones who have only worked with modern construction &mdash; do not
          recognize balloon framing when they see it. They scope the loss based on assumptions
          about fire and water containment that apply to platform framing but not to balloon
          framing.
        </li>
        <li>
          <strong>Denying hidden damage without investigation:</strong> The carrier denies that
          damage extends beyond the visible area without performing any testing &mdash; no
          moisture readings, no thermal imaging, no wall openings. In a balloon-framed home,
          the absence of visible surface damage does not mean the wall cavities are clean.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Claim Is Underscoped
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you suspect your insurance adjuster has not accounted for your home&rsquo;s balloon
        framing, take these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Identify the framing type</strong> using the methods above. Document it with
          photographs showing the continuous studs, the absence of fireblocks, and the open stud
          cavities.
        </li>
        <li>
          <strong>Request exploratory demolition.</strong> Ask the carrier to authorize opening
          walls on adjacent floors to check for fire extension, water migration, or mold growth
          in the stud cavities. Document the request in writing.
        </li>
        <li>
          <strong>Hire qualified inspectors.</strong> For water losses, a qualified restoration
          contractor should take moisture readings at every level of the building, not just the
          floor with visible damage. For fire losses, a fire investigator or forensic engineer
          can trace the path of fire travel through the wall cavities.
        </li>
        <li>
          <strong>Document the code upgrade requirement.</strong> Get a letter from the local
          building department or your contractor confirming that current code requires
          fireblocking in any wall cavities exposed during repair. Submit this as part of your
          Ordinance or Law claim.
        </li>
        <li>
          <strong>Get an independent estimate.</strong> Have a licensed contractor or a{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          prepare a competing estimate that accounts for the balloon framing &mdash; including
          exploratory demolition, multi-floor damage, and code-required fireblocking.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your home&rsquo;s framing type is not a minor construction detail &mdash; it
        fundamentally changes how fire, water, and mold travel through the structure. Balloon
        framing creates hidden pathways that allow damage to spread far beyond what is visible
        on the surface. If your insurance carrier does not account for this, you will receive an
        estimate that does not come close to covering the actual cost of repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was built before 1950, make sure your adjuster knows it is balloon-framed.
        Make sure walls are opened on every floor to check for damage migration. Make sure the
        estimate includes code-required fireblocking under Ordinance or Law coverage. And if the
        carrier pushes back, get professional help. A licensed Public Adjuster who understands
        older construction methods can make sure the full scope of your loss is documented and
        paid.
      </p>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        This article is for educational purposes only and does not constitute legal or insurance
        advice. Every claim is different, and your recovery depends on your specific policy
        language, the facts of your loss, and applicable state law. For guidance on your
        particular situation, consult a licensed Public Adjuster or an attorney experienced in
        insurance coverage.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
