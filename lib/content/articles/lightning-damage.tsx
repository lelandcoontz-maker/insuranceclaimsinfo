import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Lightning Damage Insurance Claims: What Homeowners Need to Know',
  description:
    'How lightning damages homes, the critical difference between lightning and power surge coverage, hidden wiring damage, and how to document and fight for a full settlement.',
  summary:
    'Lightning damage is covered, but insurers distinguish a direct lightning strike from a power surge, which may be treated differently. Hidden wiring and electronics damage is common, so document thoroughly and watch the lightning-versus-surge framing.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning damage is one of the most underestimated perils in property insurance. A single
        strike can destroy electronics, fry wiring hidden inside walls, damage HVAC systems, knock
        out pool equipment, ruin smart home devices, and create fire hazards that do not reveal
        themselves for weeks or months. The damage is often far more extensive than what is visible
        on the surface &mdash; and insurance companies know this.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning is a named peril on virtually every homeowner&apos;s policy, which means it is
        almost always covered. But carriers have developed a powerful tactic to limit or deny these
        claims: they characterize the damage as a &ldquo;power surge&rdquo; rather than a lightning
        strike. That distinction can mean the difference between full coverage and a denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Lightning Enters Your Home
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how lightning reaches your home is important because it explains why the
        damage is so widespread and why the insurer cannot dismiss it as a simple appliance failure.
        Lightning does not need to hit your roof directly to cause catastrophic damage. There are
        four primary ways lightning energy enters a structure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Direct strike.</strong> Lightning hits the home itself &mdash; the roof, chimney,
          antenna, or satellite dish. The energy travels through the structure&apos;s wiring,
          plumbing, and metal components. A direct strike can puncture shingles, crack masonry,
          blow apart ridge vents, and send massive current through every conductive path in the house.
        </li>
        <li>
          <strong>Through utility lines.</strong> A lightning strike on a power line &mdash; even
          one up to a mile away &mdash; sends a destructive surge directly into your electrical
          panel through the service entrance. Phone lines, cable TV lines, and fiber-optic service
          cables can carry surges into routers, televisions, security panels, and other connected
          devices.
        </li>
        <li>
          <strong>Ground current.</strong> When lightning strikes the ground near your home, the
          local ground voltage spikes dramatically. Because your electrical system is grounded to
          a rod driven into the earth, this creates a pathway for surge current to enter your panel
          from below. Copper plumbing can also conduct ground current into the home through bonding
          connections.
        </li>
        <li>
          <strong>Side flash.</strong> Lightning strikes a tall object near the home &mdash; a tree,
          a utility pole, a metal fence &mdash; and &ldquo;jumps&rdquo; to the structure because
          the house offers a lower-resistance path to ground. Side flash can enter through exterior
          metallic components, outdoor outlets, or conduit.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key takeaway: a lightning event does not require a direct hit to cause significant
        damage. Energy can enter through multiple paths simultaneously, which is why so many
        different systems in the home can be affected at once.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Critical Distinction: Lightning vs. Power Surge
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most important coverage issue in a lightning claim, and it is where
        many policyholders lose money they are entitled to.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Lightning</strong> is a named peril on standard homeowner&apos;s policies (HO-3,
        HO-5, and similar forms). Damage caused by lightning is covered under both the dwelling
        (Coverage A) and personal property (Coverage C) sections. There is typically no sublimit
        &mdash; your full policy limits apply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Power surge</strong>, on the other hand, is often excluded entirely or subject to
        a low sublimit. Many policies exclude damage caused by &ldquo;artificially generated
        electrical current,&rdquo; which is the language insurers use to exclude power surges from
        faulty wiring, utility fluctuations, or overloaded circuits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the dispute arises: when lightning strikes a power line and the surge
        travels into your home through the utility service, the insurer may argue that the damage
        was caused by a &ldquo;power surge&rdquo; &mdash; not by lightning. They point to the
        &ldquo;artificially generated electrical current&rdquo; exclusion and deny the claim or
        apply a restrictive sublimit.
      </p>

      <CalloutBox variant="warning" title="Watch for the &ldquo;Power Surge&rdquo; Reclassification">
        <p>
          If your insurer characterizes your lightning damage as a &ldquo;power surge,&rdquo; push
          back. The cause of the surge matters. If lightning caused the surge &mdash; whether it
          struck your home, a nearby power line, or the ground near your property &mdash; the
          proximate cause is lightning, which is a covered peril. The insurer cannot strip away
          coverage by relabeling the mechanism through which the lightning energy traveled. Obtain
          weather service data and a{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
            detailed scope of loss
          </Link>{' '}
          that traces the damage to the lightning event.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between a lightning-caused surge and an ordinary power surge is often
        straightforward to establish. A lightning-caused surge happens during a documented
        thunderstorm, affects multiple systems simultaneously, and may leave physical evidence
        such as scorched outlets, blown fuses, or tripped main breakers. An ordinary power surge
        from the utility grid typically affects fewer devices and occurs without any storm activity.
        Weather data from the National Weather Service or local lightning detection networks can
        confirm that lightning struck in your area at the time the damage occurred.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hidden Wiring Damage Inside Walls
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most dangerous and most frequently underpaid aspects of a lightning
        claim. When lightning energy flows through your home&apos;s electrical system, it can
        damage wiring that is concealed inside walls, ceilings, and attic spaces. The wiring
        may look fine from the outside &mdash; outlets work, lights turn on &mdash; but the
        insulation around the conductors may be cracked, melted, or weakened by the heat of the
        surge.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These hidden faults create a persistent fire risk. The damaged insulation may not cause
        an immediate failure, but over time &mdash; weeks or even months after the strike &mdash;
        the compromised wire can arc, overheat, and ignite surrounding materials inside the wall
        cavity. This is why the fire department recommends an immediate inspection after any
        known lightning strike, even when there are no visible signs of fire.
      </p>

      <CalloutBox variant="important" title="Your Insurer Should Pay to Open Walls for Inspection">
        <p>
          If an electrician identifies signs of lightning damage at the panel, at outlets, or at
          junction boxes, there is a reasonable basis to suspect that concealed wiring has also
          been damaged. The insurer should pay for exploratory opening of walls to allow a
          qualified electrician to inspect the wiring. This is part of the reasonable cost of
          investigating the loss &mdash; the same principle that applies to{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
            tear-out for inspection in any covered loss
          </Link>. If the insurer refuses to authorize this inspection, they are effectively
          asking you to close the claim without knowing the full extent of the damage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Circuit Breaker Damage: The Invisible Fire Hazard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Circuit breakers are designed to trip when current exceeds safe levels, protecting
        your wiring and preventing fires. A lightning strike can damage breakers in ways that
        are not visible during a normal inspection. The intense electrical charge can overwhelm
        internal components, weld contacts, damage trip mechanisms, or create scorching at the
        breaker-to-panel-bus connection that is hidden from view.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A damaged breaker may appear to work normally but trip at the wrong amperage &mdash;
        either too high or too low. Worse, it may fail to trip at all during an overcurrent
        event, which means it is no longer providing the safety function it was designed for.
        This is a serious fire hazard. A breaker that does not trip when it should can allow
        wiring to overheat and ignite.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a lightning strike, a licensed electrician should test every breaker in the panel
        for proper trip response. If breakers are found to be damaged, the entire panel may need
        to be replaced &mdash; not just the individual breakers that failed testing. The bus bars,
        connections, and other internal panel components may also be compromised.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Low-Voltage Systems: The Overlooked Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning does not just damage the 120/240-volt circuits in your home. It also destroys
        low-voltage wiring and the devices connected to it. Low-voltage systems operate at 50
        volts or less, and they are particularly vulnerable because they have minimal surge
        protection and their components are designed for much lower energy levels. A lightning
        surge that would merely trip a breaker on a 120-volt circuit can completely destroy a
        low-voltage system.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Low-voltage systems commonly damaged by lightning include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Doorbell systems</strong> &mdash; transformers, wiring, and smart doorbells
          (Ring, Nest, etc.)
        </li>
        <li>
          <strong>Thermostat wiring</strong> &mdash; the control wiring between your thermostat
          and HVAC system, including smart thermostats
        </li>
        <li>
          <strong>Security and alarm systems</strong> &mdash; control panels, sensors, keypads,
          and the wiring connecting them
        </li>
        <li>
          <strong>Structured network cabling</strong> &mdash; Ethernet (Cat5e/Cat6) runs to
          offices, media rooms, and access points
        </li>
        <li>
          <strong>Coaxial cable</strong> &mdash; cable TV and antenna wiring throughout the home
        </li>
        <li>
          <strong>Speaker wire</strong> &mdash; whole-house audio and home theater systems
        </li>
        <li>
          <strong>Landscape lighting transformers and wiring</strong> &mdash; low-voltage outdoor
          lighting circuits
        </li>
        <li>
          <strong>Intercom systems</strong> &mdash; wired intercom and gate entry systems
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners &mdash; and many insurance adjusters &mdash; overlook low-voltage damage
        because these systems are not part of the main electrical panel. But the replacement cost
        of structured wiring, security systems, and smart home infrastructure can add up to
        thousands of dollars. Make sure every low-voltage system in the home is tested and
        included in your{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
          scope of loss
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Appliances, Electronics, and Smart Home Systems
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning energy flowing through your electrical system does not discriminate. Everything
        plugged in or hardwired at the time of the strike is at risk. Common items damaged or
        destroyed by lightning include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Televisions, computers, routers, and modems</li>
        <li>Refrigerators, washers, dryers, dishwashers, and ovens with electronic controls</li>
        <li>Garage door openers &mdash; logic boards, capacitors, and remote receivers are
          extremely vulnerable; the opener may activate randomly, stop mid-cycle, or fail
          to respond to remotes after a strike</li>
        <li>Smart home hubs (Alexa, Google Home, Apple HomeTV) and connected devices</li>
        <li>Smart locks, smart light switches, and smart plugs</li>
        <li>Home automation controllers and whole-house lighting systems</li>
        <li>Irrigation controllers and smart sprinkler systems</li>
        <li>Electric vehicle chargers (Level 2 EVSE units)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        An important point about appliances: some may appear to work immediately after the
        strike but fail days or weeks later. The surge can weaken electronic components without
        causing immediate failure. If an appliance fails within a reasonable period after a
        documented lightning event, it should be included in the claim. Do not let the insurer
        argue that a delayed failure is unrelated to the strike.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HVAC Damage from Lightning
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC systems are particularly susceptible to lightning damage because they are connected
        to both the electrical system and low-voltage control wiring. A lightning surge can
        damage or destroy:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The compressor &mdash; the most expensive component, often requiring full system
          replacement if it fails</li>
        <li>The condenser fan motor and capacitors</li>
        <li>The control board (circuit board) in both the indoor and outdoor units</li>
        <li>The thermostat and thermostat wiring</li>
        <li>Variable-speed blower motors and their controllers</li>
        <li>Zone control boards and damper actuators in zoned systems</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC compressor failure is one of the most common delayed-onset lightning damage items.
        The system may run for days or weeks after the strike before the compressor fails. When
        it does, the insurer may argue the failure is due to wear and tear rather than lightning.
        Having the HVAC system professionally inspected immediately after the strike &mdash;
        and documenting that it was functioning normally before the event &mdash; is critical to
        connecting the failure to the lightning loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pool and Spa Equipment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool equipment is often located outdoors in a subpanel or equipment pad with its own
        electrical connections, making it a direct target for both lightning strikes and ground
        current. Components commonly damaged include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Variable-speed pool pumps and their controllers</li>
        <li>Salt chlorine generators (salt cells and control boards)</li>
        <li>Pool heaters and heat pumps</li>
        <li>Automated pool controls and remote systems</li>
        <li>Pool lighting transformers and LED fixtures</li>
        <li>Spa control packs and spa-side controllers</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool equipment can be expensive to replace, and insurers sometimes argue it is not part
        of the dwelling. However, permanently installed pool equipment is generally covered under
        Coverage A (dwelling) or Coverage B (other structures) depending on how and where it is
        installed. Make sure all pool and spa equipment is tested, documented, and included in
        the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Using Thermal Imaging to Find Hidden Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thermal imaging (infrared thermography) is one of the most effective tools for locating
        hidden electrical damage after a lightning strike. An infrared camera detects temperature
        variations on surfaces, and damaged wiring &mdash; even behind walls &mdash; often
        produces abnormal heat patterns that can be identified without any demolition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A qualified electrician or thermographer can scan walls, ceilings, the electrical panel,
        junction boxes, and outlets with a thermal camera to identify:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hot spots indicating damaged conductors or loose connections behind walls</li>
        <li>Overheating breakers that are not tripping properly</li>
        <li>Damaged connections at the panel bus bar</li>
        <li>Compromised wiring in attic spaces and crawl spaces</li>
        <li>Circuits drawing abnormal current due to insulation breakdown</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A thermal scan is non-invasive, does not require shutting off power, and can be completed
        in a few hours. The resulting images provide powerful visual evidence for your claim &mdash;
        an infrared image showing a hot spot behind a wall is difficult for an insurer to dismiss.
        If the thermal scan reveals anomalies, it strengthens the case for opening walls for
        physical inspection of the wiring.
      </p>

      <CalloutBox variant="tip" title="Request a Thermal Scan Before the Adjuster Visits">
        <p>
          Have a licensed electrician perform a thermal imaging scan as early as possible after the
          lightning event. The scan results give you documented evidence of hidden damage before
          the insurer&apos;s adjuster arrives. If the adjuster tries to limit the claim to visible
          damage, you can present infrared images showing concealed problems that require further
          investigation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document a Lightning Damage Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning claims require more documentation than most property losses because much of the
        damage is hidden, delayed, or both. Thorough documentation from the start can prevent
        disputes later. Here is what you should do immediately after a lightning event:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Call the fire department</strong> &mdash; even if there are no visible signs of
          fire. Lightning can start smoldering fires inside walls, in attic insulation, and in
          other hidden areas. A fire department response also creates an official record of the
          lightning event at your address.
        </li>
        <li>
          <strong>Photograph and video everything.</strong> Document all visible damage &mdash;
          scorched outlets, blown-out devices, burn marks, damaged shingles, cracked masonry &mdash;
          from multiple angles with close-ups. Photograph damaged appliances, electronics, and any
          devices that stopped working.
        </li>
        <li>
          <strong>Create a detailed inventory</strong> of every item that was damaged or destroyed,
          including the make, model, age, and estimated replacement cost. This includes appliances,
          electronics, low-voltage systems, HVAC components, pool equipment, and garage door openers.
        </li>
        <li>
          <strong>Hire a licensed electrician</strong> to perform a comprehensive inspection of the
          electrical panel, breakers, wiring (to the extent accessible), and all circuits. Request
          a written report documenting all findings. Ask about thermal imaging.
        </li>
        <li>
          <strong>Obtain weather data.</strong> Download records from the National Weather Service,
          local news stations, or commercial lightning detection networks (such as Vaisala) confirming
          lightning activity in your area at the time of the event. This data is critical if the
          insurer later disputes whether lightning actually struck.
        </li>
        <li>
          <strong>Preserve damaged items.</strong> Do not throw away damaged electronics or
          appliances until the insurer has had an opportunity to inspect them. If possible,
          photograph the serial number plates and model numbers.
        </li>
        <li>
          <strong>Have HVAC and pool equipment inspected</strong> by qualified technicians. Get
          written reports documenting the condition of each system.
        </li>
        <li>
          <strong>Report the claim promptly.</strong> Most policies require timely reporting. File
          the claim as soon as possible and keep written records of every communication with the
          insurer.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Document Everything Before Repairs">
        <p>
          Do not make permanent repairs or replace damaged items before the insurer has inspected
          the damage &mdash; unless emergency repairs are needed to prevent further loss (such as
          a roof breach from a direct strike). Take photos before and during any emergency repairs.
          See our guide to{' '}
          <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] hover:underline">
            temporary emergency repairs
          </Link>{' '}
          for more on protecting yourself while preserving the evidence.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics on Lightning Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies use several recurring strategies to minimize or deny lightning
        damage claims. Being aware of these tactics helps you respond effectively:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Reclassifying lightning as &ldquo;power surge.&rdquo;</strong> As discussed
          above, the insurer relabels the cause of loss to invoke the artificially generated
          electrical current exclusion. Counter this with weather data and documentation
          linking the damage to the lightning event. For more on how insurers manipulate
          exclusion language, see our guide to{' '}
          <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">
            policy exclusions
          </Link>.
        </li>
        <li>
          <strong>Limiting the scope to visible damage.</strong> The adjuster acknowledges
          obvious damage &mdash; a fried television, a scorched outlet &mdash; but refuses
          to investigate hidden wiring, low-voltage systems, or delayed-onset failures. Insist
          on a comprehensive electrical inspection. See our guide to{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
            scoping the loss
          </Link>.
        </li>
        <li>
          <strong>Attributing delayed failures to wear and tear.</strong> When an HVAC
          compressor or appliance fails weeks after the strike, the insurer claims it was
          a pre-existing condition. A technician&apos;s report linking the failure to surge
          damage &mdash; combined with proof the system was working before the storm &mdash;
          defeats this argument.
        </li>
        <li>
          <strong>Applying per-item sublimits.</strong> Some policies have internal limits on
          electronics or equipment. The insurer may try to apply a $1,000 or $2,500 sublimit
          to each damaged item. Review your policy carefully &mdash; these sublimits often
          apply to specific categories of personal property, not to dwelling components like
          wiring and built-in systems.
        </li>
        <li>
          <strong>Denying coverage for low-voltage systems.</strong> The adjuster may claim
          that doorbell wiring, thermostat wiring, or security system wiring is not covered
          because it is not part of the &ldquo;electrical system.&rdquo; These are permanently
          installed building components and are covered under dwelling coverage.
        </li>
        <li>
          <strong>Refusing to pay for wall opening and inspection.</strong> The insurer
          acknowledges surface-level electrical damage but refuses to authorize exploratory
          opening of walls to inspect concealed wiring. This is unreasonable when there is
          evidence of electrical damage at accessible points.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader discussion of insurer tactics and how to respond, see our guide to{' '}
        <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] hover:underline">
          dealing with the insurance adjuster
        </Link>{' '}
        and our article on{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
          coverage disputes
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing a Supplement for Delayed Discovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning damage is frequently discovered in stages. The initial claim may cover the
        obvious items &mdash; destroyed electronics, a damaged panel &mdash; but then additional
        damage appears over the following weeks: an HVAC system fails, a garage door opener
        starts behaving erratically, a security system stops communicating with sensors. Each
        new discovery should be reported to the insurer as a{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
          supplement to the existing claim
        </Link>, not as a new claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file a supplement, include documentation from a qualified technician
        explaining why the failure is consistent with lightning surge damage and inconsistent
        with normal wear and tear. The more specific the technician&apos;s report, the harder
        it is for the insurer to dismiss the connection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Prevention: Whole-House Surge Protection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While no device can fully protect a home from a direct lightning strike, a whole-house
        surge protector can significantly reduce the damage from indirect strikes, nearby
        strikes, and utility line surges. These devices are installed directly at your
        electrical panel and divert excess voltage to ground before it reaches your home&apos;s
        circuits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key facts about whole-house surge protectors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          They cost approximately $300 to $750 installed by a licensed electrician.
        </li>
        <li>
          They protect against surges entering through the main electrical service, but not
          surges entering through cable, phone, or data lines &mdash; those require separate
          surge protectors at each service entrance.
        </li>
        <li>
          They do not replace point-of-use surge protectors (power strips) for sensitive
          electronics. The best protection is a layered approach: whole-house protection at
          the panel plus point-of-use protection at individual devices.
        </li>
        <li>
          According to NEMA, up to 80% of electrical surges originate from inside the home
          (appliance cycling, motor startup, etc.), so a whole-house protector provides
          year-round protection beyond just lightning events.
        </li>
        <li>
          Some insurance companies offer premium discounts for homes with whole-house surge
          protection installed. Check with your carrier.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Surge Protection for All Service Entrances">
        <p>
          Lightning energy can enter through any conductive path &mdash; not just the electrical
          service. For comprehensive protection, install surge protection on your cable/coax
          entry, telephone/DSL entry, and any hardwired data lines entering the home. A
          licensed electrician can install all of these during a single visit.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Involve a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lightning damage claims often involve technical disputes about causation, scope, and
        the distinction between lightning and power surge. Consider involving a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          licensed Public Adjuster
        </Link>{' '}
        if:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer is characterizing your lightning damage as a power surge to deny or
          limit coverage
        </li>
        <li>
          The insurer&apos;s estimate covers only visible damage and ignores hidden wiring,
          low-voltage systems, or HVAC components
        </li>
        <li>
          The insurer refuses to authorize inspection of concealed wiring or other exploratory
          work
        </li>
        <li>
          Delayed equipment failures are being attributed to wear and tear rather than the
          lightning event
        </li>
        <li>
          The total damage is substantial and involves multiple systems throughout the home
        </li>
        <li>
          You are unsure whether specific items (pool equipment, smart home systems, low-voltage
          wiring) are covered under your policy
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster works exclusively for you &mdash; not the insurance company &mdash;
        and can coordinate electricians, HVAC technicians, and other specialists to build a
        comprehensive claim that captures the full extent of the damage. For more on what a
        Public Adjuster does, see our{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          complete guide
        </Link>.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Lightning Damage Claim Not Being Handled Fairly?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer is minimizing your lightning damage, calling it a &ldquo;power
          surge,&rdquo; or refusing to investigate hidden electrical damage, a licensed
          Public Adjuster can help you document the full scope of loss and fight for the
          settlement you are owed.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not
          constitute legal advice. Every insurance policy is different, and coverage
          determinations depend on your specific policy language, the facts of your loss,
          and applicable state law. Consult a licensed professional for advice about your
          individual situation.
        </p>
      </CalloutBox>
    </>
  )
}
