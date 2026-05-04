import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When Fires Start Themselves: Unexpected Ignition Sources, Misdiagnosed Origins & Subrogation',
  description:
    'Crystal doorknobs, oily rags, pyrolysis, defective panels, recalled vehicles — unexpected fire causes that get misdiagnosed and the subrogation claims your insurer may be ignoring.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every fire starts the way you&rsquo;d expect. There&rsquo;s no dramatic moment &mdash; no
        grease splashing on a burner, no candle falling off a nightstand. Some fires start silently,
        from causes so unlikely that the fire department, the insurance adjuster, and even a hired
        forensic expert may never identify the true origin. And when no one can explain how a fire
        started, suspicion often lands on the homeowner.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        I&rsquo;ve worked fire claims for years, and I can tell you: the gap between what actually
        causes fires and what investigators assume caused them is one of the most dangerous spaces in
        property insurance. Homeowners have been denied claims &mdash; or worse, accused of arson
        &mdash; because the real cause of their fire was something no one in the room had ever
        encountered. A glass doorknob. A pile of rags in the garage. A truck full of hay on a highway.
        A fireplace that worked perfectly for fifteen years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the unexpected, the overlooked, and the misunderstood causes of
        residential and vehicle fires. It also covers something just as important: what happens after
        the fire, when the cause and origin investigation either gets it right or gets it
        catastrophically wrong &mdash; and how subrogation against a negligent third party may be the
        key to making the homeowner whole.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fires Nobody Sees Coming
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Sunlight Through Glass: The Crystal Doorknob Fire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This one sounds like an urban legend. It isn&rsquo;t.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A crystal glass doorknob, a decorative glass sphere, a fishbowl filled with water, or even a
        glass wind chime can act as a converging lens &mdash; the same principle as a magnifying glass
        focusing sunlight onto a leaf. If a curved glass object sits in direct sunlight and its focal
        point happens to land on a curtain, a pile of paper, or a robe hanging on the back of a door,
        the concentrated heat can ignite the material.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The London Fire Brigade documented approximately 125 light-refraction fire incidents over a
        five-year period. In one well-publicized case, a crystal glass doorknob refracted sunlight
        onto a robe and set it on fire. These aren&rsquo;t anomalies. They&rsquo;re physics.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Objects known to start fires this way include crystal doorknobs, glass paperweights, crystal
        balls, glass fishbowls (when filled with water), shaving mirrors, and glass ornaments placed
        near windows. The London Fire Brigade has issued formal advisories telling residents to keep
        crystal and glass objects out of direct sunlight.
      </p>
      <CalloutBox variant="warning" title="Why This Gets Misdiagnosed">
        <p>
          An investigator arrives at a burned room and finds no electrical fault, no open flame, no
          appliance malfunction. There&rsquo;s no obvious ignition source. The glass doorknob or
          decorative object may have been destroyed in the fire itself or simply overlooked. Without a
          clear cause, the report may read &ldquo;undetermined&rdquo; &mdash; or worse, the
          investigator may suspect the homeowner.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Oily Rags in a Container: Spontaneous Combustion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you&rsquo;ve ever stained a deck or applied linseed oil to a piece of furniture,
        you&rsquo;ve handled one of the most common spontaneous fire hazards in a residential setting.
        Linseed oil, tung oil, Danish oil, and many wood stains cure through oxidation &mdash; a
        chemical reaction with oxygen in the air that produces heat as a byproduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a rag soaked in one of these oils is hung on a clothesline, it dries safely because the
        heat dissipates into the air. But when that same rag is crumpled up and tossed into a trash
        can, a bucket, or a pile in the corner of the garage, the fabric traps the heat. The interior
        temperature climbs. If the heat generation outpaces the dissipation, the rag can reach
        auto-ignition temperature &mdash; roughly 120 degrees Fahrenheit for linseed oil on fabric
        &mdash; and burst into flames without anyone touching it, without a spark, without a match.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>This can happen in as little as thirty minutes.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spontaneous heating of oily rags accounts for approximately 22% of fires caused by
        spontaneous heating or chemical reaction. It&rsquo;s one of the most well-documented fire
        causes in the forensic literature, and yet homeowners are routinely blindsided by it.
      </p>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          If a professional painter or contractor left oily rags in your home or garage without proper
          disposal &mdash; or if the product&rsquo;s labeling failed to adequately warn about
          spontaneous combustion &mdash; there may be a viable subrogation claim against the
          contractor or the product manufacturer.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Wet Hay: The Barn Fire and the Highway Inferno
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Anyone in agriculture knows this one, but most suburban homeowners have never heard of it: hay
        baled at moisture content above 20&ndash;25% can spontaneously combust.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s the science. When hay is baled wet, bacteria and fungi begin breaking down the
        plant matter. This microbial activity generates heat &mdash; an initial temperature peak of
        130 to 150 degrees Fahrenheit. At that point, the Maillard Reaction kicks in, a chemical
        process that generates additional heat independent of the biological activity. If the internal
        temperature exceeds 175 degrees, the reaction becomes self-sustaining and accelerates. The hay
        can reach ignition temperature of 450 degrees or higher and burst into flame &mdash; sometimes
        two to six weeks after baling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This doesn&rsquo;t just happen in barns. Tractor-trailers hauling hay loads down the highway
        have had loads spontaneously ignite mid-transit. A semi rolling down the freeway with its
        trailer fully engulfed makes the evening news, but rarely does anyone explain the mechanism
        behind it.
      </p>
      <CalloutBox variant="warning" title="Why This Matters for Claims">
        <p>
          If a hay fire in a barn spreads to a nearby house, or if a burning tractor-trailer ignites
          vehicles or property near the highway, the property owner&rsquo;s claim will hinge on the
          cause and origin investigation correctly identifying spontaneous combustion as the mechanism
          &mdash; not arson, not carelessness with an open flame.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Pyrolysis: The Fireplace That Worked Fine for Fifteen Years
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most insidious fire causes I&rsquo;ve encountered, and one of the most
        frequently misunderstood by investigators.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pyrolysis is the chemical decomposition of wood through prolonged exposure to heat. Normal
        wood ignites at approximately 400 to 450 degrees Fahrenheit. But when wood framing adjacent to
        a heat source &mdash; like a fireplace, a chimney, or a wood stove &mdash; is subjected to
        repeated heating over months or years, the wood undergoes a gradual chemical transformation.
        It dries. It breaks down at the molecular level. And its ignition temperature drops.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Pyrolyzed wood can ignite at temperatures as low as 200 degrees Fahrenheit</strong>
        &mdash; roughly half the normal threshold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Zero-clearance fireplaces (also called prefabricated fireplaces) are designed to be installed
        with minimal separation from combustible framing, relying on insulated fireboxes and air gaps
        for safety. But if the installation was even slightly improper, or if the insulation degrades
        over time, the adjacent wood framing is subjected to low-level heating every time the fireplace
        is used. Over years &mdash; sometimes a decade or more &mdash; the framing pyrolyzes until one
        day, during a perfectly normal fire in the fireplace, the wood behind the wall spontaneously
        ignites.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are no visible warning signs. The wood looks normal until it catches fire. The homeowner
        did nothing wrong.
      </p>
      <CalloutBox variant="warning" title="Why This Gets Misdiagnosed">
        <p>
          The investigator sees a fire that started in or near the fireplace area, but the fireplace
          itself appears to be functioning properly. There&rsquo;s no obvious malfunction, no
          accelerant, no electrical fault. If the investigator doesn&rsquo;t understand pyrolysis
          &mdash; and many don&rsquo;t &mdash; the fire may be classified as &ldquo;undetermined
          origin&rdquo; or, in the worst case, the homeowner&rsquo;s use of the fireplace may be
          characterized as negligent.
        </p>
      </CalloutBox>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          If the zero-clearance fireplace was improperly installed, or if the manufacturer&rsquo;s
          design or insulation was defective, there&rsquo;s a strong subrogation case against the
          installer or the manufacturer. Evidence preservation is critical &mdash; once the fire
          debris is cleared, this becomes much harder to prove.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Dryer Lint: 15,000 Fires a Year
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dryer lint is one of the most combustible materials in your home, and it accumulates in the
        one place you&rsquo;d rather not think about: inside the dryer itself, in the exhaust duct,
        and behind the machine where you can&rsquo;t see it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        According to the National Fire Protection Association, U.S. fire departments respond to an
        estimated 15,970 home fires per year involving clothes dryers. Dryers account for 92% of
        these fires. The annual toll: up to 30 civilian deaths, 440 civilian injuries, and $238
        million in property damage. &ldquo;Failure to clean&rdquo; &mdash; primarily lint buildup
        &mdash; was the factor in 33% of dryer fires and was associated with 50% of dryer fire
        deaths.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This isn&rsquo;t exotic. It&rsquo;s mundane. And that&rsquo;s precisely why it belongs in
        this article: dryer fires are common enough that most people dismiss the risk, and frequent
        enough that investigators sometimes don&rsquo;t dig deeper into whether a defective vent
        installation, a recalled dryer model, or a faulty heating element was the real culprit.
      </p>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          If the dryer was defective, if the exhaust duct was improperly installed by a contractor, or
          if a dryer vent cleaning service was hired and failed to do the job properly, there&rsquo;s
          a potential subrogation claim. Check whether your dryer model has been subject to a CPSC
          recall.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Electrical Fires: Old Wiring, Dangerous Panels, and the Overloaded Kitchen
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical fires are the single largest category of residential fires that get misdiagnosed,
        underinvestigated, or attributed to the wrong cause. The reason is simple: electrical systems
        are hidden behind walls, and the evidence is often destroyed in the fire itself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Aluminum Wiring: 55 Times the Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Between approximately 1965 and the mid-1970s, aluminum wiring was used extensively in
        residential construction as a cheaper alternative to copper. It was in millions of homes. It
        was in new construction and additions and rewires. And it is a documented fire hazard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that aluminum expands and contracts at a significantly greater rate than copper
        when it heats up. Over time, the connections at outlets, switches, and junction boxes loosen.
        Loose connections create increased resistance, which creates heat, which creates arcing.
        Aluminum also oxidizes, and unlike copper oxide (which still conducts electricity), aluminum
        oxide is an insulator &mdash; meaning corroded connections become progressively more dangerous
        over time.
      </p>
      <CalloutBox variant="important" title="55 Times More Likely">
        <p>
          According to a study conducted by the Franklin Research Institute for the Consumer Product
          Safety Commission, homes built before 1972 with aluminum wiring are <strong>55 times more
          likely</strong> to have wire connections reach fire-hazard conditions than copper-wired
          homes.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        The accepted remediation methods are COPALUM crimp connectors (the CPSC&rsquo;s preferred
        method, where a copper pigtail is cold-welded to the aluminum wire), AlumiConn set-screw lug
        connectors (a newer alternative, UL-listed in 2007), or a full copper rewire. Standard wire
        nuts used to connect aluminum to copper are not considered safe and will continue to loosen and
        overheat.
      </p>
      <CalloutBox variant="warning" title="Why This Gets Misdiagnosed">
        <p>
          A fire starts in the wall behind an outlet. The outlet itself may look fine. If the
          investigator doesn&rsquo;t pull the wire connections and identify aluminum wiring &mdash; or
          doesn&rsquo;t know the significance of it &mdash; the fire may be attributed to a generic
          &ldquo;electrical fault&rdquo; without ever identifying the underlying hazard.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Knob and Tube Wiring: The 1920s Kitchen Meets the Modern Renovation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knob and tube wiring was the standard residential wiring method from the late 1800s through
        the 1940s. It was designed for a world where a home&rsquo;s electrical load consisted of a few
        lights and maybe a radio. The circuits are typically rated for just 15 amps.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The wiring itself &mdash; when left alone, in its original configuration &mdash; isn&rsquo;t
        inherently dangerous. The danger comes from what happens when a homeowner or contractor tries
        to modernize around it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s a scenario I&rsquo;ve seen repeatedly: someone buys a charming 1920s bungalow
        and renovates the kitchen. They add recessed can lights in the ceiling, new under-cabinet
        lighting, a high-draw dishwasher, a garbage disposal, and a microwave on the countertop. The
        electrician &mdash; or sometimes a handyman &mdash; ties the new circuits into the existing
        knob and tube wiring because a full rewire isn&rsquo;t in the budget. The system is now
        carrying five or ten times the load it was designed for.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knob and tube wiring relies on air gaps around the conductors for heat dissipation. When
        insulation is blown into walls and attics during renovation &mdash; a common upgrade &mdash;
        it buries the wiring and eliminates the air gap that was the only thermal safety margin. The
        wiring overheats. The original rubberized cloth insulation, which may be 80 or 100 years old,
        has become brittle and cracked, exposing bare copper. Add an overloaded circuit to degraded
        insulation with no air gap, and you have the conditions for a fire.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurance companies now refuse to write or renew homeowners policies on properties with
        active knob and tube wiring. They know the numbers.
      </p>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          If a licensed electrician or contractor tied new circuits into existing knob and tube wiring
          without bringing the system up to code, there&rsquo;s a negligence claim. If a home
          inspector failed to identify active knob and tube during a pre-purchase inspection, there
          may be a claim there as well.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Electrical Panels That Start Fires
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all electrical panels are created equal. Several brands manufactured during the
        mid-twentieth century have been identified as serious fire hazards, and some are still
        installed in millions of American homes.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2">
        Federal Pacific Electric (FPE) Stab-Lok Panels
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Federal Pacific Electric manufactured Stab-Lok circuit breaker panels from approximately 1954
        through the 1980s. Over 100 million Stab-Lok breakers were installed in homes across the
        United States and Canada.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When FPE went bankrupt and was acquired by Reliance Electric in 1979, Reliance discovered that
        FPE had fraudulently obtained its UL certification through what the New Jersey Superior Court
        later described as &ldquo;deceptive and improper practices.&rdquo; Put plainly: FPE cheated on
        its safety testing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        How bad is it? A Consumer Product Safety Commission investigation found that 51% of tested FPE
        breakers failed to trip during overcurrent conditions. Independent testing by Dr. Jess
        Aronstein found failure rates up to 80% for certain breaker types. A breaker that
        doesn&rsquo;t trip when it should doesn&rsquo;t protect you &mdash; it lets the wire overheat
        until something catches fire.
      </p>
      <CalloutBox variant="important" title="Still in 25 Million Homes">
        <p>
          The estimated annual toll from FPE panels: 2,800 fires, 13 deaths, and $40 million in
          property damage. There are still an estimated 25 million FPE panels in U.S. homes.
          <strong> No product recall was ever issued.</strong>
        </p>
      </CalloutBox>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2 mt-6">
        Zinsco Panels
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Zinsco panels were manufactured from 1943 and widely installed during the 1960s and 1970s,
        particularly in the western United States. Breakers in these panels fail to trip approximately
        25% of the time under overcurrent conditions. The aluminum alloy bus bar clips are prone to
        oxidation, which causes arcing, melting, and chain-reaction panel fires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most California insurance companies now refuse to insure homes with Zinsco panels or require
        replacement as a condition of coverage. If you have one, you probably already know about it
        &mdash; because your insurance company told you to replace it, or declined to renew your
        policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Other panels to watch for:</strong> Pushmatic/Bulldog panels, Challenger panels, and
        GTE-Sylvania panels (many of which are rebranded Zinsco panels with the same defective
        design).
      </p>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          The original manufacturers of FPE and Zinsco panels are defunct, which complicates direct
          product liability claims. However, if a home seller or real estate agent failed to disclose
          a known panel hazard, or if a home inspector missed it, there may be a claim. And if a
          newer panel was involved &mdash; Schneider Electric recalled certain Square D QO
          plug-on-neutral panels manufactured between 2020 and 2022 &mdash; the subrogation path is
          much more direct.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Vehicle Fires: The Car in Your Attached Garage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A vehicle fire in a detached carport is bad. A vehicle fire in an attached garage can be
        catastrophic &mdash; because by the time anyone notices, the fire has spread into the house
        through the shared wall.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vehicle fires aren&rsquo;t limited to high-speed collisions. Many occur while the vehicle is
        parked, turned off, and sitting in the driveway or garage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Manufacturer Defects and Recalls
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Ford F-150.</strong> The Ford F-150 has been the best-selling vehicle in America for
        decades, and it has also been the subject of repeated fire-related recalls. A recall covering
        2015&ndash;2018 model years affected 1.6 million trucks due to seat belt pretensioners that
        created excessive sparks. More recently, certain 2024&ndash;2025 F-150s with 3.5L engines were
        recalled for a misaligned engine component causing rapid oil leaks near hot engine and exhaust
        surfaces.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Hyundai and Kia.</strong> The Hyundai/Kia fire problem is staggering in scope. Over 60
        individual fire-related recalls since 2015, covering 2006&ndash;2021 model years across more
        than 20 models. More than 10 million vehicles recalled in total. Since 2010, more than 3,100
        Hyundai and Kia vehicles have caught fire, injuring at least 103 people and killing at least
        one. Both manufacturers were fined a combined $210 million by NHTSA for delaying recalls and
        inaccurately reporting recall information. For certain models, NHTSA advised owners to park
        outside and away from structures &mdash; a stark acknowledgment that the vehicles could ignite
        while parked.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Chevrolet Bolt EV.</strong> Every Chevrolet Bolt EV from the 2017&ndash;2022 model
        years and every 2022 Bolt EUV was recalled for battery fire risk. The root cause was traced to
        two simultaneous rare manufacturing defects in battery cells produced by LG. GM advised owners
        not to charge indoors overnight and to park outside. LG agreed to reimburse GM up to $1.9
        billion &mdash; one of the largest automotive supplier settlements in history.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>BMW.</strong> BMW has recalled approximately 575,000 vehicles for a starter defect
        causing fires while driving, and roughly 200,000 additional 2019&ndash;2022 models with a
        &ldquo;park outside&rdquo; advisory due to engine starter relay corrosion. In 2018, BMW was
        fined $10 million by South Korea after 50 BMWs caught fire in a single year &mdash; and the
        investigation revealed BMW had attempted to conceal the issue and delayed recalling 172,000
        vehicles.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Aftermarket Installations and DIY Wiring
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all vehicle fires trace back to the manufacturer. A common cause &mdash; and one
        that&rsquo;s frequently overlooked &mdash; is aftermarket electrical work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        I&rsquo;ve seen fires caused by aftermarket stereo installations where the installer tapped
        into the dome light circuit because it was easy to reach. The dome light circuit isn&rsquo;t
        designed to handle the amperage a stereo draws. The wiring overheats. Similarly, wires routed
        under seats can get pinched and abraded by the seat track moving back and forth, eventually
        wearing through the insulation and creating a short circuit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Any time a vehicle catches fire after recent electrical work &mdash; a stereo installation, an
        alarm system, auxiliary lighting, a dashcam hardwired into the electrical system &mdash; the
        aftermarket work should be investigated as a potential cause.
      </p>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          Vehicle manufacturer recalls provide some of the strongest subrogation cases in fire claims.
          The defect is documented, the recall is public record, and there&rsquo;s often a pattern of
          prior incidents. For aftermarket installations, the installer or the shop that performed the
          work may be liable. Evidence preservation is essential &mdash; if the vehicle is scrapped
          before it&rsquo;s inspected by a qualified fire investigator or electrical engineer, the
          subrogation claim may be lost.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Appliances, Electronics, and Everyday Hazards
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Heating Elements and Overloaded Circuits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Any appliance with a heating element &mdash; space heaters, toasters, toaster ovens, curling
        irons, electric blankets, portable radiators &mdash; is a potential ignition source. Most of
        the time they work fine. But when a cord gets pinched under a rug and the insulation frays, or
        when too many high-draw appliances are plugged into the same circuit through a power strip, or
        when a heating appliance is left running and forgotten, the risk changes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Extension cords and power strips routed under rugs are a particularly common hazard. Foot
        traffic compresses the cord. The insulation wears. The exposed conductor contacts the rug
        fibers. The rug fibers ignite. This happens gradually, and by the time anyone notices, the
        fire has spread.
      </p>
      <CalloutBox variant="info" title="Check for Recalls">
        <p>
          Always check whether your appliances are subject to a recall. The Consumer Product Safety
          Commission (CPSC) maintains a searchable database at cpsc.gov/Recalls. Recent recalls
          include 174,800 Frigidaire gas ranges for delayed oven ignition, 191,390 Aroeve air
          purifiers for overheating, and various power strips sold on Amazon that posed fire and
          electrocution hazards. If you have a specific appliance brand and model number, a quick
          search on the CPSC website &mdash; or even a Google search of the brand name followed by
          &ldquo;recall&rdquo; or &ldquo;fire&rdquo; &mdash; may reveal a known defect.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Laptop Fires and Lithium-Ion Batteries
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lithium-ion batteries power nearly every portable electronic device in your home: laptops,
        tablets, phones, power tools, e-bikes, hoverboards. They&rsquo;re efficient and powerful.
        They also contain flammable electrolyte, and if a manufacturing defect causes an internal
        short circuit, the battery can enter thermal runaway &mdash; a self-reinforcing cycle of
        increasing temperature that can exceed 1,000 degrees Fahrenheit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some of the largest consumer electronics recalls in history have involved lithium-ion battery
        fires. In 2006, Dell recalled 4.1 million laptops &mdash; the largest computer-related recall
        in CPSC history at the time &mdash; due to Sony-manufactured batteries that overheated. Apple
        recalled roughly 458,000 MacBook Pros in 2019 for the same reason. HP issued multiple recalls
        covering 192,000 batteries. And Samsung&rsquo;s Galaxy Note 7 debacle in 2016 &mdash; where
        replacement phones also caught fire, leading Samsung to kill the entire product line and the
        FAA to ban the devices from all U.S. flights &mdash; demonstrated just how catastrophic
        lithium-ion failures can be.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s a scenario that comes up more often than you&rsquo;d think: a laptop that&rsquo;s
        recently been serviced or had its battery replaced is left running on a couch or a bed. The
        soft surface blocks the air vents. The laptop overheats. If the battery is defective or
        degraded, the restricted airflow can push it into thermal runaway. The couch cushion ignites.
        The homeowner comes home to a fire, and nobody can explain how it started &mdash; because the
        laptop is melted beyond recognition.
      </p>
      <CalloutBox variant="tip" title="Subrogation Potential">
        <p>
          Laptop and battery fires often have very strong subrogation potential because the defect is
          typically traceable to a specific manufacturer (Dell recovered from Sony, GM recovered from
          LG). If the device or its remains can be preserved, a forensic electrical engineer can often
          identify the failure mode.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Solvents Near Pilot Lights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This one is straightforward but worth mentioning because it still happens. Homeowners use
        volatile solvents in the garage &mdash; paint thinner, mineral spirits, acetone, carburetor
        cleaner &mdash; to clean parts, strip finishes, or degrease tools. The fumes, which are
        heavier than air, drift along the floor to the water heater&rsquo;s pilot light and ignite.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Newer water heaters are designed with sealed combustion chambers specifically to prevent this.
        But in older homes with older water heaters &mdash; and there are millions of them &mdash; the
        open-flame pilot light at the base of the tank is a standing ignition source in a space where
        people routinely use flammable materials.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Smoking, Drug Use, and Fires Set by Trespassers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some fire causes are straightforward but carry social stigma that makes them harder to
        discuss. They still need to be discussed, because they affect real claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Smoking Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cigarettes remain one of the leading causes of fatal residential fires in the United States.
        The scenario is predictable: someone falls asleep on a couch or in bed while smoking. The
        cigarette ignites the upholstery or bedding. By the time the person wakes up &mdash; if they
        wake up &mdash; the fire has spread.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a known, well-documented ignition source, and it rarely presents problems in cause and
        origin investigation. Where it gets complicated is when the smoking was accompanied by drug or
        alcohol use, and the insured is deceased or incapacitated and can&rsquo;t provide a statement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Drug Paraphernalia and Improvised Heating
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fires have been started by drug paraphernalia, improvised heating methods, and other
        substance-related activity. These fires present unique challenges in the claims process
        because the insured may be reluctant to disclose what was happening, and the presence of
        drug-related items at the scene can shift the tenor of the entire investigation &mdash;
        sometimes unfairly. A fire caused by an accidentally dropped pipe or improperly used lighter
        is still an accidental fire. It&rsquo;s covered under the policy. But the stigma can
        influence how investigators and adjusters approach the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Fires Started by Trespassers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vacant and occupied properties alike can be affected by fires started by unauthorized
        individuals. This is particularly common in urban areas where people may seek shelter in or
        near structures. Fires may be started for warmth, for cooking, through careless smoking, or,
        in some cases, through intentional acts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From a claims standpoint, a fire set by a trespasser is not the homeowner&rsquo;s fault.
        It&rsquo;s a covered peril under virtually every homeowners policy. But the investigation can
        be complicated when there&rsquo;s evidence of unauthorized entry and fire, because the
        investigator has to distinguish between a trespasser&rsquo;s fire and an incendiary fire set
        by someone with a financial motive &mdash; which, inevitably, means looking at the homeowner.
      </p>
      <CalloutBox variant="info" title="Protect Your Claim">
        <p>
          If your property has been damaged by a fire that appears to have been set by a trespasser,
          document everything. If there&rsquo;s a police report, get a copy. If there are witnesses
          &mdash; neighbors who saw someone near the property, security camera footage &mdash;
          preserve that evidence. The stronger the evidence that a third party started the fire, the
          faster the claim moves.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Which Fires Are Most Likely to Be Misdiagnosed?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the heart of the problem. A fire investigator&rsquo;s job is to determine the origin
        (where the fire started) and the cause (what started it). When the cause is obvious &mdash; a
        space heater next to a curtain, a grease fire on the stove &mdash; the investigation is
        straightforward. But when the cause is unusual, the investigation can go sideways.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are the fire causes most likely to result in a misdiagnosis or an
        &ldquo;undetermined&rdquo; finding, ranked roughly by how often I&rsquo;ve seen them create
        problems in the claims process:
      </p>
      <ol className="list-decimal pl-6 space-y-4 mb-6">
        <li className="text-gray-700 leading-relaxed">
          <strong>Pyrolysis near fireplaces and chimneys.</strong> This is the most commonly
          misdiagnosed fire cause I&rsquo;m aware of. The fire starts in a wall or ceiling near the
          fireplace, but the fireplace itself appears to be functioning normally. There&rsquo;s no
          obvious malfunction. There&rsquo;s no accelerant. Many fire investigators &mdash; including
          some who carry credentials &mdash; don&rsquo;t fully understand how pyrolysis works or how
          dramatically it can lower wood&rsquo;s ignition temperature over time. Result: the fire gets
          classified as &ldquo;undetermined&rdquo; or the homeowner&rsquo;s use of the fireplace is
          questioned.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Sunlight refraction through glass objects.</strong> This one barely registers in most
          investigators&rsquo; training. The glass object may be destroyed in the fire, and even if it
          survives, the investigator has to make the leap that a doorknob or a fishbowl could focus
          enough solar energy to ignite fabric or paper. If the fire started during daylight hours in
          a room with a window and a glass object, and no other ignition source can be identified,
          this possibility should be considered.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Aluminum wiring connections.</strong> The fire starts behind a wall at a connection
          point, but the evidence is often destroyed in the fire. If the investigator doesn&rsquo;t
          pull wiring and identify the aluminum conductors &mdash; or doesn&rsquo;t understand the
          significance of aluminum-to-copper connections &mdash; the cause gets attributed to a
          generic &ldquo;electrical fault&rdquo; without identifying the systemic hazard.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Spontaneous combustion of oily rags.</strong> The homeowner insists they
          didn&rsquo;t use any open flame. There&rsquo;s no electrical fault in the area where the
          fire started. The investigator finds no ignition source. If there&rsquo;s a can of wood
          stain or a bottle of linseed oil in the garage but no one connects it to the pile of rags
          nearby, the fire may remain &ldquo;undetermined&rdquo; &mdash; and an undetermined fire, in
          the insurance world, is one step away from a denied claim.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Aftermarket vehicle wiring.</strong> The car burns in the driveway or garage. The
          manufacturer has no active recalls for fire hazard. No one asks whether the vehicle had
          recent electrical work done. The fire gets attributed to an &ldquo;electrical fault in the
          vehicle&rdquo; and the subrogation potential against the installer is never explored.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Defective electrical panels (FPE, Zinsco).</strong> The panel is located in the
          garage or a utility closet, and the fire destroys the evidence. If the panel&rsquo;s brand
          isn&rsquo;t identified before the debris is cleared, a critical piece of causation evidence
          &mdash; and a potential subrogation claim &mdash; disappears.
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Subrogation: When Someone Else Should Be Paying
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation is the legal mechanism by which your insurance company, after paying your claim,
        steps into your shoes and pursues recovery against the third party whose product, negligence,
        or defective work caused the fire. It&rsquo;s also the mechanism by which you can recover your
        deductible and any uninsured losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every fire has subrogation potential. A grease fire caused by your own cooking
        doesn&rsquo;t involve a third party. But many unexpected fire causes do:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li className="text-gray-700 leading-relaxed">
          <strong>Vehicle fires from manufacturer defects</strong> &mdash; the vehicle manufacturer
          and, in some cases, the component supplier (battery manufacturer, wiring harness supplier)
          are potential targets. These cases are strengthened by the existence of recalls.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Defective appliances</strong> &mdash; the manufacturer and, in some cases, the
          retailer are liable under product liability law.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Faulty electrical panels</strong> &mdash; the manufacturer (if still in business),
          the installer, or the home seller (if they failed to disclose a known hazard).
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Improper electrical work</strong> &mdash; the electrician or contractor who
          performed substandard wiring, connected new circuits to knob and tube, or used improper
          connectors on aluminum wiring.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Fireplace installation defects</strong> &mdash; the manufacturer of a zero-clearance
          fireplace or the contractor who installed it improperly.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Laptop and battery fires</strong> &mdash; the device manufacturer and the battery
          cell manufacturer.
        </li>
      </ul>
      <CalloutBox variant="important" title="Evidence Preservation Is Everything">
        <p>
          Once fire debris is cleared, a vehicle is scrapped, or an appliance is thrown away, the
          physical evidence needed to prove a defect may be gone. If you suspect your fire was caused
          by a product or someone else&rsquo;s negligence, tell your insurance company and your public
          adjuster immediately. Request that the item be preserved. If your insurer is conducting a
          cause and origin investigation, make sure the investigator examines and documents the
          suspected item before anything is removed from the scene.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        How to Check for Recalls
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a product or vehicle was involved in your fire, check these resources:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li className="text-gray-700 leading-relaxed">
          <strong>Vehicles:</strong> The National Highway Traffic Safety Administration (NHTSA) at
          nhtsa.gov/recalls. Enter your VIN for a vehicle-specific recall check.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Consumer products and appliances:</strong> The Consumer Product Safety Commission
          (CPSC) at cpsc.gov/Recalls.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>General search:</strong> Google the product brand, model, and the word
          &ldquo;recall&rdquo; or &ldquo;fire.&rdquo; You may find news articles, class action
          lawsuits, or CPSC notices that confirm a known defect.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovering that your appliance or vehicle was subject to a recall for fire hazard
        doesn&rsquo;t just strengthen your insurance claim &mdash; it creates a documented, established
        basis for subrogation that your insurer should be pursuing on your behalf.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Cause and Origin Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s what I want homeowners to understand: when a fire investigator can&rsquo;t
        determine a cause, the default finding of &ldquo;undetermined&rdquo; does not mean &ldquo;the
        homeowner didn&rsquo;t do it.&rdquo; It means the investigator couldn&rsquo;t figure it out.
        But in the insurance world, an undetermined fire origin often triggers additional scrutiny
        &mdash;{' '}
        <Link href="/resources/euo-guide" className="text-[#2E74B5] underline">
          Examination Under Oath
        </Link>{' '}
        requests, Special Investigation Unit referrals, and delays that can stretch a claim out for
        months or years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And when an investigator gets it wrong &mdash; attributes the fire to the wrong cause,
        overlooks a product defect, misses the aluminum wiring, doesn&rsquo;t understand pyrolysis
        &mdash; the consequences fall on the homeowner. The subrogation claim that should have been
        pursued against a manufacturer goes unfiled. The insurer may try to limit the payout. In
        extreme cases, an incorrect finding can lead to an arson accusation against the homeowner.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you&rsquo;ve had a fire and you believe the cause and origin finding is wrong &mdash; or if
        the investigator couldn&rsquo;t determine a cause and you know what happened &mdash;
        don&rsquo;t accept it quietly. Get a second opinion from an independent fire investigator.
        Talk to a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        who has handled fire claims. Consult with an attorney if the insurer is denying the claim or
        alleging fraud.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire investigation is part science and part experience. The unusual causes described in this
        article aren&rsquo;t theoretical &mdash; they happen every day, in homes and garages and barns
        across the country. The question isn&rsquo;t whether they&rsquo;ll happen. The question is
        whether the people investigating the fire will recognize what they&rsquo;re looking at.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fires don&rsquo;t always start the way people expect. Glass doorknobs, oily rags, wet hay,
        overloaded knob and tube wiring, defective electrical panels, recalled vehicles sitting in
        attached garages, laptop batteries on soft surfaces &mdash; these are documented,
        well-understood fire causes that continue to catch investigators off guard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you&rsquo;ve experienced a fire loss, three things matter:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li className="text-gray-700 leading-relaxed">
          <strong>Preserve the evidence.</strong> Don&rsquo;t let anyone clear the scene until the
          cause has been thoroughly investigated. If a product or vehicle is suspected, preserve it.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Check for recalls.</strong> A recalled product strengthens your claim and opens the
          door to subrogation recovery.
        </li>
        <li className="text-gray-700 leading-relaxed">
          <strong>Question the finding.</strong> If the cause and origin report says
          &ldquo;undetermined&rdquo; or attributes the fire to a cause that doesn&rsquo;t match what
          you know happened, push back. Get an independent investigation. The finding drives the
          entire claim.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fires are traumatic enough without having to fight your insurance company over whether the fire
        was legitimate. Understanding how fires actually start &mdash; including the ways that surprise
        even the experts &mdash; puts you in a stronger position to protect your claim, pursue the
        responsible party, and recover what you&rsquo;ve lost.
      </p>

      <hr className="my-8 border-gray-300" />

      <p className="text-sm text-gray-500 italic">
        Leland Coontz is a California Licensed Public Adjuster who represents homeowners &mdash; not
        insurance companies &mdash; in property damage claims. If you&rsquo;ve experienced a fire loss
        and need help navigating the claims process,{' '}
        <Link href="/contact" className="text-[#2E74B5] underline">
          contact us
        </Link>{' '}
        for a free consultation.
      </p>
    </>
  )
}
