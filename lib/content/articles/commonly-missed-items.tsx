import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Commonly Missed Items on Total Loss and Large Insurance Claims',
  description:
    'A comprehensive checklist of items that adjusters and estimators routinely overlook on total loss and large property insurance claims. From low-voltage wiring and light bulbs to scribe moldings and pressure-treated sole plates — if it\'s not in the estimate, you\'re not getting paid for it.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you have a total loss or a large property claim, the insurance company&apos;s estimate
        is generated in Xactimate — the industry-standard software for property insurance claims.
        That estimate must include every individual item needed to rebuild or restore your property.
        Every stud, every outlet, every light bulb, every piece of trim. If it is not in the
        estimate, you are not getting paid for it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem: Xactimate estimates on total loss claims routinely miss dozens — sometimes
        hundreds — of legitimate line items. Some are small. Some are not. But they add up. A
        missing scribe molding here, a missing countertop edge treatment there, missing low-voltage
        wiring, missing thresholds, missing light bulbs — individually these may be $20 to $200
        items, but across an entire house they can total thousands or tens of thousands of dollars.
      </p>

      <CalloutBox variant="important" title="How to Use This List">
        <p>
          <strong>Homeowners:</strong> You do not need to be an Xactimate expert to use this
          list. Walk through your property and compare what you see to what is in the
          insurer&apos;s estimate. If your house had a doorbell, the estimate needs doorbell wiring.
          If your house had house numbers on the front, the estimate needs detach and reset of house
          numbers. These are not subjective judgment calls — they are real items that cost real money
          to replace. Even identifying a few missing items reshapes the conversation: the adjuster
          can no longer claim the estimate is &ldquo;complete.&rdquo;
        </p>
        <p className="mt-2">
          <strong>Professionals:</strong> Use this as a scope audit checklist to cross-reference
          against carrier estimates and your own work. On a total loss, missing even 50 small line
          items at an average of $50 each is $2,500 before{' '}
          <Link href="/resources/overhead-and-profit" className="underline font-semibold">
            overhead and profit
          </Link>{' '}
          and tax.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Electrical
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical is one of the most under-scoped trades on total loss claims. The carrier&apos;s
        estimate may include &ldquo;rewire house&rdquo; as a single line item, but a proper estimate
        includes every component:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Wire drop</strong> from the utility pole to the house</li>
        <li><strong>Mast and weather head</strong> at the point of service entrance</li>
        <li><strong>Meter base/socket</strong></li>
        <li><strong>Breaker panel</strong> (the box itself)</li>
        <li><strong>Individual breakers</strong> — each is a separate line item, and the number must
          match what was in the original panel (or what code requires if upgrading)</li>
        <li><strong>Grounding rod</strong></li>
        <li><strong>Grounding rod clamp</strong></li>
        <li><strong>Grounding cable</strong> from the panel to the grounding rod</li>
        <li><strong>Low-voltage wiring</strong> — thermostat wire, doorbell wire, Cat6/network
          cabling, speaker wire, security system wiring. These are entirely separate systems from
          the electrical wiring and are almost always missed</li>
        <li><strong>GFI outlets</strong> — required by code in kitchens, bathrooms, garages, and
          exterior locations. Each GFI outlet is a separate, more expensive line item than a
          standard outlet</li>
        <li><strong>Arc fault breakers</strong> — current code requires arc fault circuit
          interrupters (AFCIs) in bedrooms and most living areas. These breakers cost significantly
          more than standard breakers</li>
        <li><strong>Code requirement: dedicated circuits</strong> — current code requires separate
          dedicated circuits for the refrigerator and garbage disposal (they cannot share a
          circuit). This means separate wiring runs and separate breakers</li>
        <li><strong>Code requirement: island outlets</strong> — outlets on kitchen islands must be
          on a stepped-up level, not at the counter edge</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Framing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Framing is complex and highly technical. Carrier estimates frequently use simplified framing
        line items that miss critical components:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Pressure-treated sole plate</strong> — the bottom plate of a wall that sits on
          concrete must be pressure-treated lumber. This is a separate, more expensive line item
          than standard framing lumber. It is missed on nearly every carrier estimate</li>
        <li><strong>Double top plate</strong></li>
        <li><strong>King studs and jack studs</strong> at door and window openings — these are
          additional studs beyond the standard stud spacing</li>
        <li><strong>End stud</strong> — when a wall length does not divide evenly by 16&rdquo; stud
          spacing, there is an additional stud at the end of the wall. It is there on the existing
          wall; it needs to be in the estimate</li>
        <li><strong>Seismic hold-down bolts</strong> — required in California seismic zones</li>
        <li><strong>Foam underlayment</strong> underneath the sole plate (sill seal gasket)</li>
        <li><strong>California corners</strong> and different corner framing configurations that
          require drywall clips for attachment</li>
        <li><strong>Simpson ties, straps, and nailing plates</strong> — metal connectors at
          structural intersections required by code</li>
        <li><strong>Rafters, purlins, ceiling joists, and outriggers</strong></li>
        <li><strong>Bird&apos;s mouth cuts</strong> on rafters where they sit on the wall plate</li>
        <li><strong>Rafter tails</strong></li>
        <li><strong>Wall height</strong> — older homes with plaster walls often have 8&apos;3&rdquo;
          walls, not 8&apos;0&rdquo;. That is roughly 3% more material and labor than what is
          estimated at standard height. Measure your actual wall height</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Drywall and Plaster
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Taping joints on drywall cuts</strong> — when drywall is cut for repairs, the
          cut edge must be taped and finished. This is a separate line item from drywall
          installation and is constantly overlooked</li>
        <li><strong>Three-coat plaster over wood lath</strong> — on older homes with original plaster
          walls, the correct line item is three-coat plaster over metal lath (the closest
          equivalent). Many adjusters incorrectly default to two-coat plaster over gypsum board,
          which is less expensive and not the same system</li>
        <li><strong>5/8&rdquo; drywall</strong> — some jurisdictions (including Los Angeles) require
          5/8&rdquo; drywall, not 1/2&rdquo;. This is a code upgrade that should be in the
          estimate</li>
        <li><strong>Skim coat</strong> for Level 5 drywall finish — a smooth wall finish requires a
          skim coat over the entire surface, not just the taped joints</li>
        <li><strong>Scaffolding</strong> for overhead work — sustained overhead work such as
          plastering, drywall finishing, and painting of ceilings often requires scaffolding or
          other stable work platforms for safe access. Scaffolding is a separate line item</li>
        <li><strong>Removal of damaged materials</strong> — tearing out old drywall or plaster is a
          separate operation from hauling it to the dumpster. Both must be in the estimate</li>
        <li><strong>Paper-faced insulation</strong> vs. unfaced — paper-faced costs more and is
          often what was actually in the wall. Check what you had</li>
        <li><strong>Priming the entire wall before texture</strong> — when shooting knockdown or
          other textures over a drywall repair, the texture that hits the mudded seam dries faster
          than texture that hits painted or bare paper surfaces. This difference telegraphs the
          seam through the finished texture. The correct practice is to prime the entire wall
          before texturing for a uniform appearance. This is a separate line item</li>
        <li><strong>Masking for texture — twice</strong> — the wall must be masked at the base and
          top before spraying texture. After texturing, the masking material becomes coated in
          overspray and is typically discarded. The wall is then masked a second time for painting.
          Two rounds of masking means double the material and labor</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Kitchen
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kitchens are the single most under-scoped room in insurance estimates. The number of small
        items that get missed is staggering:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Countertop edge treatment</strong> — each edge profile is a separate line item
          from the countertop itself. A double bullnose is actually <em>two</em> edge treatment
          line items (top bullnose and bottom bullnose). A Roman OG — one of the higher-end
          profiles — is an ogee <em>plus</em> a double bullnose, meaning three separate edge
          treatment line items on a single countertop. Carriers almost never get this right</li>
        <li><strong>Edge treatment around the sink cutout</strong> — this is separate from the front
          edge treatment and is almost always missed</li>
        <li><strong>Backsplash square edge treatment</strong> — the finished edge where the
          backsplash ends. Constantly overlooked</li>
        <li><strong>Backsplash outlet cutouts</strong> — each hole cut in a granite backsplash for
          an electrical outlet is a separate line item</li>
        <li><strong>Countertop depth</strong> — cabinets are 24&rdquo; deep, but the countertop
          itself is typically 25&rdquo;, and with the extra piece for the edge treatment underlap
          it becomes 26&ndash;27&rdquo;. That is roughly 12&ndash;16% more material than what
          adjusters estimate when they just measure cabinet depth</li>
        <li><strong>Granite slab rounding</strong> — granite is purchased in full slabs, not by
          the square foot. The estimate should round up to reflect actual slab usage</li>
        <li><strong>Undermount sink</strong> — an undermount installation is approximately $250 more
          than a drop-in. The line item exists in Xactimate but is frequently missed</li>
        <li><strong>Scribe moldings</strong> — the typically vertical moldings on upper and lower
          cabinets where they meet the wall. Every kitchen has them. They easily total $1,000+
          across a full kitchen when you include O&amp;P and sales tax. Almost never in carrier
          estimates</li>
        <li><strong>Cabinet side panels</strong> — the exposed side of an end cabinet must be
          finished. If you have a 10&apos; run of cabinets with a 2&apos; exposed side panel,
          that is 12&apos; of cabinet exterior to paint, not 10&apos;</li>
        <li><strong>Toe kicks</strong> — the recessed panel at the base of the cabinets. Often a
          separate line item, and some cabinets have a separate base molding as well</li>
        <li><strong>Lazy Susans and specialty cabinetry</strong> — corner lazy Susans, under-sink
          specialty cabinets, pull-out trash cabinets, and other specialty units cost more than
          standard cabinets and must be line-itemed separately</li>
        <li><strong>Light fixtures under upper cabinets</strong> — LED strips, fluorescent tubes, or
          puck lights mounted to the underside of upper cabinets. People do not look up under
          the cabinets</li>
        <li><strong>Drilling new holes for knobs/pulls</strong> — you cannot &ldquo;reset&rdquo; a
          knob into a new cabinet drawer face because the holes do not exist yet. Even if you
          are reusing the same hardware, new cabinets require drilling new holes using a jig. This
          is a completely different line item from detach/reset of existing knobs — and the D&amp;R
          line item does not apply when the cabinets are new</li>
        <li><strong>Roughing in the dishwasher</strong> — plumbing and electrical connections for
          the dishwasher are a separate line item</li>
        <li><strong>Dishwasher insulation blanket</strong> — the sound-deadening blanket around the
          dishwasher. No specific Xactimate line item exists; it must be created as a special
          item. On a smoke loss, the existing blanket is contaminated and must be replaced</li>
        <li><strong>Air gap for dishwasher</strong> — required by code in many jurisdictions, mounted
          on the sink or countertop. A separate small item that is always missed</li>
        <li><strong>Ice maker line</strong> — the water supply line to the refrigerator&apos;s ice
          maker. A detach and reset line item exists but is routinely missed</li>
        <li><strong>Gas stove flex line</strong> — the flexible gas connector for the range. Flex
          line diameter depends on the number of burners (a 6-burner range needs a larger line).
          Per the manufacturer label and plumbing trade standards, these should be replaced, not
          reused. Should be done by a licensed plumber</li>
        <li><strong>Angle stops</strong> — the shut-off valves under the sink must be removed when
          replacing drywall near plumbing. The contractor needs to cap the nipple (stub-out), do
          the drywall work, then reinstall a new angle stop</li>
        <li><strong>Escutcheon plates</strong> — the cosmetic trim plates around the angle stops.
          Cannot be put back on if the angle stop was not properly removed first. A separate item
          from the angle stop itself</li>
        <li><strong>Supply hoses</strong> — the flexible supply lines under the sink connecting the
          angle stops to the faucet. These are typically replaced, not reused</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bathroom
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Concrete shower curb</strong> — especially on older homes, the shower curb is
          poured concrete, not a wood frame. This is a different (more expensive) line item</li>
        <li><strong>Bullnose tile</strong> on all exposed tile edges — inside corners, outside
          corners, where tile meets drywall. Many adjusters only include field tile and forget that
          every exposed edge needs a finished bullnose piece</li>
        <li><strong>Diagonal tile on shower floors and walls</strong> — shower floors are often laid
          diagonally for drainage, and many showers feature diagonal tile on the walls as well.
          Diagonal installation requires additional labor (it is more time-consuming to set up the
          layout) and has a significantly higher waste factor than straight-lay tile. Both the extra
          labor and the extra waste must be in the estimate</li>
        <li><strong>Tile on mortar bed</strong> — many showers, especially older ones, have tile set
          on a mortar bed (also called a mud bed or float) rather than directly on cement board.
          This is more expensive than a standard thin-set installation and is a different line
          item</li>
        <li><strong>Chrome P-trap</strong> — a decorative exposed P-trap under a pedestal or
          wall-mount sink. There is no standard Xactimate line item for this; it must be created
          with pricing from a plumbing supply house</li>
        <li><strong>Mirror replacement</strong> — when a bathroom mirror is glued to the wall with
          mastic, it cannot be removed intact. It must be replaced</li>
        <li><strong>J-trim at mirror edges</strong> — the gold or silver anodized aluminum channel
          at the bottom edge of a wall-mounted mirror. Constantly overlooked</li>
        <li><strong>Steam generator</strong> and related components (controller, auto-flush valve) —
          if the bathroom had a steam shower, all components must be in the estimate</li>
        <li><strong>Toilet seat</strong> — on a fire or smoke loss, the toilet seat is contaminated
          and must be replaced. The toilet seat is <em>not</em> included in the toilet line item in
          Xactimate — it is a separate line item that is missed on virtually every fire estimate</li>
        <li><strong>Grout sealing</strong> — after tile is grouted, the grout must be sealed. This
          is a separate line item from the grouting itself and is routinely omitted</li>
        <li><strong>Epoxy grout</strong> — if the original tile had epoxy grout (common in showers
          and wet areas for its water resistance), the replacement must also be epoxy grout, which
          is significantly more expensive than standard cement grout. It is a different line item
          with a higher unit cost — do not let the adjuster default to standard grout pricing</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Flooring
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Extra coats of finish</strong> on hardwood floors — most hardwood floors have
          multiple coats of polyurethane. Each additional coat is a separate line item</li>
        <li><strong>Flooring both glued and nailed</strong> — some installations use both adhesive
          and fasteners. Both operations must be line-itemed</li>
        <li><strong>Moisture barrier</strong> for engineered wood or laminate on a concrete slab —
          often omitted from carrier estimates</li>
        <li><strong>Tack strip removal</strong> with carpet removal — a separate line item</li>
        <li><strong>Base shoe / quarter round</strong> at the floor-to-baseboard transition — the
          small molding at the very bottom. A separate item from the baseboard itself</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Doors and Hardware
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Thresholds</strong> — one of the most commonly overlooked items on any
          estimate. Every exterior door has one. Many interior transitions between flooring types
          have them. If you are replacing flooring, the threshold that overlaps it must be detached
          and reset. They are almost never in the carrier&apos;s estimate</li>
        <li><strong>Front door hardware — all of it</strong> — the door itself is usually included,
          but the latch set, deadbolt, peephole, mail slot, weather stripping, door sweep, and
          kick plate are each separate items. If the door is being painted or refinished, every one
          of these must be detached and reset. That is six or more separate D&amp;R line items on a
          single door</li>
        <li><strong>Door hardware detach and reset</strong> — on any door that is being painted,
          refinished, or replaced, the hardware must be removed and reinstalled. This includes the
          lockset or passage set, hinges, and door stop. This is overlooked on virtually every
          estimate, on virtually every door</li>
        <li><strong>Sliding glass doors</strong> — the line item with possibly the most add-on line
          items in the entire software. To correctly estimate a sliding glass door, you may need
          separate add-on line items for: dual-pane glass, argon fill, tempered glass, tinted or
          Low-E glass, the screen door, anodized finish, and a retrofit installation (which also
          applies to replacement windows). Missing even half of these add-ons significantly
          understates the cost</li>
        <li><strong>Retrofit windows and doors</strong> — when a window or door is replaced into an
          existing opening (rather than new construction), there is an additional line item for
          retrofit installation. This is separate from the window/door itself and is commonly
          missed</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Exterior / Siding
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>House numbers</strong> — if you are painting the exterior, re-stuccoing, or
          replacing siding, the house numbers must be detached and reset. A real item with a real
          line item</li>
        <li><strong>Detach and reset items mounted to exterior walls</strong> — electrical panel,
          light fixtures, hose bibs, exterior outlets, security cameras, address plaques. Anything
          mounted to a wall that is being repaired must come off and go back on</li>
        <li><strong>Trim around hose bib openings</strong> — the trim or escutcheon around where
          the hose bib penetrates the siding. Small, but it exists</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Trim and Moldings
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Built-up crown molding</strong> — in many homes, the crown molding is not a
          single piece. It is an assembly of 2&ndash;3 pieces: a 1x board, a small molding
          underneath, and the crown piece on top. A carrier that estimates one piece of crown is
          missing the other components</li>
        <li><strong>Two-piece door casings</strong> — older homes often have a flat casing with a
          backband molding applied on top. Two pieces, two line items</li>
        <li><strong>Base shoe / quarter round</strong> — the small molding at the floor line where
          the baseboard meets the floor. Separate from the baseboard</li>
        <li><strong>Scribe moldings</strong> — where cabinets, built-ins, or other millwork meets
          the wall or ceiling. Tiny pieces, real cost</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Painting
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Detach or mask light fixtures</strong> when painting ceilings — this is a
          separate operation from the painting itself and is missed on nearly every estimate</li>
        <li><strong>Priming before wallpaper</strong> — walls must be primed before wallpaper is
          applied so the paper can slide for positioning. A separate line item from the wallpaper
          installation</li>
        <li><strong>Wallpaper waste calculation</strong> — wallpaper is sold in double rolls (two
          rolls per package), so the estimate must always use even numbers. Wallpaper should be
          estimated by the roll based on wall height and pattern repeat — not by the square foot,
          which dramatically understates the actual quantity needed. A 10&apos; wall with a
          16.5&apos; roll yields only one usable cut per roll. The waste factor is far higher than
          what most adjusters calculate</li>
        <li><strong>Grass cloth wallpaper</strong> — requires a bid item or extra labor because
          adhesive cannot touch the face of the material. Standard wallpaper labor rates do not
          apply</li>
        <li><strong>Chandelier cleaning</strong> — if the chandelier is staying (not being replaced),
          it must be cleaned before painting around it. Cleaning a crystal chandelier is meticulous,
          piece-by-piece work. It is a separate line item</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Concrete and Foundation
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Moisture barrier</strong> under the slab — required by code</li>
        <li><strong>Sand and gravel bed</strong> under the slab</li>
        <li><strong>Soil compaction</strong> before pouring</li>
        <li><strong>Rebar</strong> — amount, spacing, and size must match code requirements</li>
        <li><strong>Slab thickness</strong> — verify the estimate matches actual thickness, not a
          default</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Roofing
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Patio cover detach and reset</strong> — if a patio cover is attached to the
          house and the roof is being replaced, the patio cover must be detached and reattached.
          This is a significant item that is frequently missing</li>
        <li><strong>Drip edge</strong> — metal flashing at the eaves and rakes</li>
        <li><strong>Ice and water shield</strong> — required by code in valleys and at eaves in many
          jurisdictions</li>
        <li><strong>Pipe boot/jack replacement</strong> — these should be replaced with a new roof,
          not reused</li>
        <li><strong>Satellite dish or antenna detach and reset</strong></li>
        <li><strong>Starter strip shingles</strong> — manufacturers require them for warranty
          compliance. Adjusters often try to bundle this into the waste factor, but it is a
          separate line item</li>
        <li><strong>Ridge cap / hip cap shingles</strong> — standard or high-profile, separate from
          field shingles</li>
        <li><strong>Step flashing</strong> at roof-to-wall transitions — labor-intensive and cannot
          be reused after tear-off</li>
        <li><strong>Chimney cricket</strong> — required by IRC code when the chimney is wider than
          30&rdquo;</li>
        <li><strong>Kick-out flashing</strong> — code-required at roof-to-wall transitions to
          direct water into the gutter</li>
        <li><strong>Synthetic underlayment</strong> — code upgrade from old felt in many
          jurisdictions</li>
        <li><strong>Ridge vent</strong> installation</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Plumbing
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Hose bibs</strong> (exterior faucets) — each one is a separate line item</li>
        <li><strong>Sewer cleanouts</strong> — access points in the sewer line, required by code</li>
        <li><strong>Water service line</strong> from the meter to the house</li>
        <li><strong>Sewer lateral</strong> from the house to the street connection</li>
        <li><strong>Gas piping</strong> throughout the structure — each run is a separate item</li>
        <li><strong>Gas appliance connectors</strong> — flexible gas lines for range, dryer, water
          heater, furnace. Each is separate. Gas stove flex line diameter depends on burner
          count</li>
        <li><strong>Water heater venting</strong> — the flue pipe from the water heater through the
          roof</li>
        <li><strong>Pressure testing</strong> of all plumbing systems after installation</li>
        <li><strong>Backflow preventer</strong> — required by code in many jurisdictions</li>
        <li><strong>Expansion tank</strong> on the water heater</li>
        <li><strong>Washing machine connections</strong> — hot, cold, and drain. Often assumed to be
          included in &ldquo;plumbing&rdquo; but must be line-itemed</li>
        <li><strong>Toilet supply lines and wax rings</strong></li>
        <li><strong>Shower/tub valve trim</strong> — the visible hardware, separate from the
          rough-in valve</li>
        <li><strong>Plumbing trim-out labor</strong> — installing fixtures, faucets, and trim is a
          separate operation from rough-in plumbing. Both must be in the estimate</li>
        <li><strong>Garbage disposal installation</strong></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HVAC
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Ductwork</strong> — in a fire loss, ductwork is often contaminated by smoke
          traveling through the HVAC system. Replacement or decontamination must be in the
          estimate</li>
        <li><strong>Thermostat and wiring</strong> — low-voltage wiring for the thermostat is
          separate from the HVAC unit itself</li>
        <li><strong>Refrigerant line sets</strong> — the copper lines between the condenser and
          evaporator coil</li>
        <li><strong>Condensate drain lines</strong></li>
        <li><strong>HVAC disconnect</strong> — the electrical disconnect box at the exterior
          condenser</li>
        <li><strong>Concrete equipment pad</strong> for the exterior condenser unit</li>
        <li><strong>Flue/venting</strong> for furnace and water heater</li>
        <li><strong>Dryer vent duct and exterior cap</strong></li>
        <li><strong>Bath exhaust fan ducting and exterior cap</strong> — each bathroom fan needs a
          duct run and a cap at the exterior wall or roof</li>
        <li><strong>Range hood exhaust duct and exterior cap</strong></li>
        <li><strong>Return air grilles, supply registers, and diffusers</strong> — each is a
          separate line item</li>
        <li><strong>Duct insulation</strong></li>
        <li><strong>HVAC system startup, testing, and commissioning</strong> — a separate line item
          from installation. Required to verify the system operates correctly</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Interior Small Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are the items that individually seem insignificant but collectively add up to real
        money. Every single one is a legitimate line item in Xactimate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Door stops</strong> — wall-mount and floor-mount. Every door has one</li>
        <li><strong>Door hinges</strong></li>
        <li><strong>Closet rods and shelving</strong> — wire or wood, in every closet</li>
        <li><strong>Closet door hardware</strong></li>
        <li><strong>Towel bars, toilet paper holders, grab bars</strong></li>
        <li><strong>Outlet covers and switch plates</strong> — every outlet and switch in the
          house</li>
        <li><strong>Window hardware</strong> — locks, operators (on casement windows), lifts</li>
        <li><strong>Window screens</strong></li>
        <li><strong>Caulking and sealant</strong> — tub/shower joints, window perimeters,
          countertop backsplash</li>
        <li><strong>Stair treads, risers, and nosing</strong></li>
        <li><strong>Handrails and guardrails</strong> — code requires specific heights and spacing
          that may differ from the original</li>
        <li><strong>Attic access panel or pull-down stairs</strong></li>
        <li><strong>Smoke detectors</strong> — hardwired, interconnected, with battery backup.
          Current code requires one in every bedroom plus hallways</li>
        <li><strong>Carbon monoxide detectors</strong></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Site Work and Utilities (Total Loss)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a total loss rebuild, the site itself requires work that is almost never in the initial
        carrier estimate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Contaminated soil remediation</strong> — the top 6&rdquo; of topsoil around a
          fire loss is often contaminated with heavy metals and toxins. Testing and removal may be
          required</li>
        <li><strong>Post-remediation soil testing</strong></li>
        <li><strong>Gas meter set and reconnection</strong></li>
        <li><strong>Electric meter set and reconnection</strong></li>
        <li><strong>Water meter / water service reconnection</strong></li>
        <li><strong>Sewer tap reconnection</strong></li>
        <li><strong>Utility impact fees</strong></li>
        <li><strong>Site grading and compaction</strong></li>
        <li><strong>Temporary power pole or generator rental</strong> during construction</li>
        <li><strong>Temporary fencing / security fencing</strong></li>
        <li><strong>Landscape replacement</strong> — trees, shrubs, plants (typically subject to a
          5% of dwelling limit cap, with $500 per tree/shrub sublimit)</li>
        <li><strong>Irrigation system</strong></li>
        <li><strong>Mailbox and post</strong></li>
        <li><strong>Fencing and gates</strong></li>
        <li><strong>Concrete flatwork</strong> — sidewalks, driveway, patio slab</li>
        <li><strong>Retaining walls</strong></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fire Loss Specific Items
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Light bulbs</strong> — on a fire loss, every single light bulb in the house is
          gone. LED bulbs cost $5&ndash;15 each. A typical house has 40&ndash;80+ light fixtures.
          This is a real cost that is almost never in the estimate. Light bulbs, light bulbs, light
          bulbs</li>
        <li><strong>Smoke testing</strong> — testing for lead, asbestos, silica, lithium, PCBs,
          arsenic, and other contaminants in smoke residue. Required to determine proper cleaning
          and remediation protocols</li>
        <li><strong>Contaminated refrigerator decontamination</strong> — a refrigerator that lost
          power during a fire develops H2S gas from rotting food. Opening it requires an acid gas
          respirator. The contents require hazmat disposal. California Penal Code 402(b) requires
          removal of doors/latches from abandoned refrigerators</li>
        <li><strong>Front and back porch cleaning</strong> — porches get scuff marks from
          firefighter hose drag, soot tracking, and water damage. These areas should be drawn in
          the estimate to capture the cleaning scope</li>
        <li><strong>Hazardous materials testing and abatement</strong> — asbestos testing (air and
          bulk samples), lead paint testing (required for pre-1978 homes under the EPA RRP Rule),
          and abatement with proper disposal manifests</li>
        <li><strong>Ash and debris removal</strong> — structural demolition labor is separate from
          debris hauling, which is separate from dumpster rental. Each is its own line item</li>
        <li><strong>Soot treatment to framing</strong> — if any framing remains in place, it must
          be HEPA vacuumed, chemically cleaned, and sealed. Each operation is a separate line
          item</li>
        <li><strong>Garage door, springs, tracks, and hardware</strong> — the garage door is often
          included but the springs, tracks, brackets, and opener with remote are separate items</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Firefighter Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Firefighters cause more damage than most people realize, and all of it is covered as part
        of the fire loss. Commonly overlooked firefighter damage includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Cutting of roof rafters</strong> — firefighters cut ventilation holes in the
          roof to release heat and smoke. This structural damage must be in the estimate</li>
        <li><strong>Damage to foundation vents</strong> — firefighters inspect foundation vents and
          crawlspace areas to verify the fire is completely out, often damaging the vent covers and
          screens in the process</li>
        <li><strong>Saw-cutting of gate locks and latches</strong> — firefighters cut locks and
          latches to gain access to the property. Gate hardware, padlocks, and latches must be
          replaced</li>
        <li><strong>Holes in otherwise unaffected areas</strong> — firefighters poke inspection
          holes in walls and ceilings in areas away from the main fire to verify it has not spread.
          These areas may appear undamaged from the outside but have holes that need repair</li>
        <li><strong>Cutting of the electrical service drop</strong> — firefighters may cut the
          electrical wire drop to the property for safety. Reconnection and replacement of the
          drop is a legitimate line item</li>
        <li><strong>Smoke detectors knocked off ceilings</strong> — it is standard fire department
          practice to knock smoke detectors off the ceiling during firefighting operations,
          necessitating their replacement. Do not assume missing smoke detectors were absent before
          the fire — the fire department removed them as a standard procedure, and they must be
          replaced (hardwired and interconnected per current code)</li>
        <li><strong>Hose drag damage</strong> — fire hoses dragged through the house damage
          flooring, baseboards, door frames, and walls along the path. Hoses dragged across
          porches, decks, and patios leave scuff marks and gouges</li>
        <li><strong>Water damage from firefighting</strong> — areas not touched by fire may have
          extensive water damage from the hoses. Flooring, drywall, insulation, and personal
          property in rooms below or adjacent to the fire area can be destroyed by water</li>
      </ul>

      <CalloutBox variant="tip" title="Review the Fire Department Report">
        <p>
          The fire department&apos;s incident report often includes an after-action summary
          describing what the firefighters did on the property — where they cut, what they opened,
          how they gained access, and where they directed water. This report can confirm or reveal
          damage in areas you might not have considered. Request a copy of the full report from
          your local fire department.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Plants, Trees, and Shrubs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plants, trees, and shrubs coverage is one of the most commonly overlooked coverage items
        on fire losses. It is a separate coverage (typically 5% of the dwelling limit, with a
        per-item sublimit of $500 per tree or shrub) and covers several categories of damage
        that people miss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Direct fire and heat damage</strong> — trees and shrubs adjacent to the burn
          structure often suffer heat damage, scorching, or complete loss even if not directly in
          the fire path</li>
        <li><strong>Firefighting vehicle and equipment damage</strong> — fire trucks, ambulances,
          and other emergency vehicles routinely drive over lawns, crush landscaping, and damage
          plants during firefighting operations. This is covered damage</li>
        <li><strong>Lawn and plant death during reconstruction</strong> — when a home is being
          rebuilt after a total loss, the water is typically turned off for a year or more. Lawns,
          plants, shrubs, and trees that depended on irrigation die during this period. This is a
          consequential loss from the fire</li>
        <li><strong>Irrigation system damage</strong> — the sprinkler system itself may be damaged
          by the fire, firefighting operations, or construction equipment during the rebuild</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        General Conditions and Overhead
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Progressive cleanup</strong> — daily job site cleanup during construction.
          Required by CSLB (Contractors State License Board) regulations. This is a separate line
          item from final cleanup</li>
        <li><strong>Final cleanup</strong> — a professional cleaning of the completed work.
          Typically $350&ndash;400+ for a full house</li>
        <li><strong>Permits</strong> — actual incurred permit costs are a reimbursable expense</li>
        <li><strong>Architectural/drafting fees</strong> — required for any total loss rebuild and
          many large repairs</li>
        <li><strong>Content protection and manipulation</strong> — moving, covering, and protecting
          personal property during interior repairs</li>
        <li><strong>Dumpster rental — plus pickup truck loads</strong> — the estimate may allow for
          one or more large dumpsters for heavy debris removal, but those dumpsters are often gone
          well before construction is finished. Dumpster companies or neighborhood associations may
          not allow dumpsters to remain more than a short period. The finished carpentry phase —
          weeks after the dumpsters leave — generates scrap baseboards, door casings, carpet
          remnants, empty paint cans, masking material, and other construction waste that still
          needs to go to the landfill. It is not unreasonable to estimate one or two pickup truck
          loads for construction waste hauling in addition to the dumpsters</li>
        <li><strong>Portable toilet</strong> — required on job sites where workers do not have
          access to facilities</li>
        <li><strong>Structural engineer fees</strong> — required on total loss rebuilds and many
          large structural repairs</li>
        <li><strong>Soils/geotechnical engineer report</strong> — often required before foundation
          work can begin</li>
        <li><strong>Special inspection fees</strong> — structural, welding, concrete inspections
          required by the building department</li>
        <li><strong>Scaffolding</strong> — often necessary for safe access to elevated work areas.
          A separate line item from the work itself</li>
        <li><strong>Course of construction insurance</strong> — required during rebuild. A
          legitimate soft cost</li>
        <li><strong>Material delivery charges</strong></li>
        <li><strong>Supervision / project management</strong> — the supervision line item in
          Xactimate is broader than most people realize. It includes not just on-site supervision
          but also the time to order and coordinate building materials and the time to pull building
          permits. On a fire loss or total loss, the permitting and material procurement process is
          substantial and is a legitimate part of the supervision scope</li>
        <li><strong>Cleaning of areas outside the main construction zone</strong> — during
          construction, areas adjacent to the work get dirty. Drywall dust settles on front and
          back patios. The garage gets scuffed and dirtied from staging materials, storing kitchen
          cabinets, or stockpiling supplies. These areas may need additional cleaning, power
          washing, or even repainting. They are easy to overlook because they are outside the
          primary scope, but they are real consequential costs</li>
        <li><strong>Overhead and Profit</strong> — the general contractor&apos;s 10% overhead and
          10% profit should be applied to the entire estimate when a GC is managing the project.
          Carriers routinely omit O&amp;P or argue it does not apply. See our guide on{' '}
          <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
            overhead and profit
          </Link></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Code Upgrades (Law and Ordinance Coverage)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Code upgrade items are payable under your{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
          Law and Ordinance coverage
        </Link>{' '}
        — a separate coverage with its own limit. These items are commonly missed entirely because
        the adjuster does not consider what current code requires vs. what was originally built:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Fire sprinkler system</strong> — required for new construction or major
          renovations in many jurisdictions, even if the original home did not have one</li>
        <li><strong>GFI outlets and arc fault breakers</strong> — current electrical code requires
          these in locations where they were not previously required</li>
        <li><strong>Dedicated circuits</strong> — separate circuits for refrigerator, dishwasher,
          microwave, and other appliances that may have shared circuits in the original wiring</li>
        <li><strong>5/8&rdquo; drywall</strong> — required in some jurisdictions; original home may
          have had 1/2&rdquo;</li>
        <li><strong>Insulation upgrades</strong> — current energy code may require higher R-values
          than what was originally installed</li>
        <li><strong>Plumbing upgrades</strong> — lead-free fittings, updated materials</li>
        <li><strong>Window upgrades</strong> — energy-efficient windows, tempered glass in locations
          now required by code</li>
        <li><strong>Roof sheathing thickness</strong> — older homes may have 3/8&rdquo; plywood or
          skip-sheathing that does not meet current code. The building department may require
          upgrade to 15/32&rdquo; or 1/2&rdquo;. See our guide on{' '}
          <Link href="/resources/multiple-reasons-to-replace" className="text-[#2E74B5] hover:underline">
            multiple reasons to replace
          </Link></li>
        <li><strong>Solar panels</strong> — some jurisdictions now require solar on new construction
          or major renovations. If required by code, this is a code upgrade cost</li>
        <li><strong>Low-VOC paint</strong> — California Green Building Standards require low-VOC
          coatings. This is a code upgrade if the original home used conventional paint</li>
        <li><strong>Hazardous materials testing and abatement</strong> — homes built before 1978
          require lead paint testing under the EPA RRP Rule before any renovation work. Asbestos
          testing is required before disturbing suspect materials. These are legitimate code and
          regulatory requirements</li>
      </ul>

      <CalloutBox variant="warning" title="Code Upgrades Are a Separate Coverage">
        <p>
          Code upgrade items should not come out of your dwelling coverage (Coverage A) limit. They
          are payable under Law and Ordinance coverage, which is a separate line on your
          declarations page with its own limit — typically 10% of dwelling coverage. If your
          adjuster is not writing code upgrade items, you are leaving that entire coverage
          untouched. On a $500,000 dwelling with 10% L&O, that is up to $50,000 in additional
          coverage that may be available to you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why These Items Get Missed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth understanding <em>why</em> carrier estimates are routinely incomplete:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Time pressure.</strong> Carrier adjusters handle high volumes of claims. They do
          not have time to spend three days writing a meticulous Xactimate estimate for one
          property. Items get missed because the adjuster is moving fast.
        </li>
        <li>
          <strong>Limited construction knowledge.</strong> Many adjusters — particularly desk
          adjusters and newer field adjusters — have limited hands-on construction experience.
          They do not know about pressure-treated sole plates or bird&apos;s mouth cuts or
          countertop edge treatments because they have never built anything.
        </li>
        <li>
          <strong>Template-based estimating.</strong> Some adjusters use templates or macros that
          cover the major items but miss dozens of smaller ones. The template becomes the estimate,
          and anything not in the template does not get included.
        </li>
        <li>
          <strong>Financial incentive.</strong> The carrier benefits from a lower estimate. There is
          no incentive for the carrier&apos;s adjuster to find items they missed. The incentive
          runs the other direction.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do About It
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get a copy of the carrier&apos;s Xactimate estimate.</strong> You are entitled to
          it. Request the full estimate — not just the summary page, but the complete line-by-line
          scope with quantities, unit prices, and line item descriptions.
        </li>
        <li>
          <strong>Walk through the estimate against this list.</strong> Compare what is in the
          estimate to what was actually in your house. Every missing item is money left on the
          table.
        </li>
        <li>
          <strong>Document what was there.</strong> Photos of your home before the loss are
          invaluable. They show the exact light fixtures, hardware, trim profiles, countertop edges,
          and small details that an adjuster would never know about.
        </li>
        <li>
          <strong>File a{' '}
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            supplement
          </Link>.</strong> Missing items can be added to the claim as a supplemental estimate.
          You do not have to accept the carrier&apos;s estimate as final.
        </li>
        <li>
          <strong>Hire a professional.</strong> A licensed{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            Public Adjuster
          </Link>{' '}
          or experienced contractor can write a competing Xactimate estimate that captures every
          item. On a total loss, the difference between the carrier&apos;s estimate and a properly
          scoped estimate can be tens of thousands of dollars.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Even Small Items Reshape the Narrative">
        <p>
          You may not be able to calculate the full dollar amount difference without Xactimate
          training. But you can identify specific, concrete items that are missing — house numbers,
          light bulbs, thresholds, doorbell wiring — and present them to the adjuster. The adjuster
          can no longer claim the estimate is &ldquo;complete&rdquo; when you have a list of real
          items that are not in it. That shifts the conversation from &ldquo;take it or leave
          it&rdquo; to &ldquo;what else did you miss?&rdquo;
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Think Your Estimate Is Missing Items?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can review your carrier&apos;s Xactimate estimate line by line,
          identify every missing item, and file a supplement to get your claim to the correct
          amount.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
    </>
  )
}
