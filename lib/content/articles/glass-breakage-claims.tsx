import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Glass Breakage Insurance Claims: Coverage, Exclusions, and the Arguments Carriers Hope You Never Make',
  description:
    'How glass breakage is covered under homeowner and commercial policies, the vandalism glass exclusion, tempered glass code upgrades, thermal stress denials, and creative coverage arguments your adjuster should know.',
  summary:
    'Glass breakage is generally covered, but watch the vandalism glass exclusion, thermal-stress denials, and tempered-glass code upgrades. Knowing these arguments, plus matching and code-upgrade angles, helps you get full replacement.',
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
        Glass breakage is one of the most common property insurance claims &mdash; and one of the
        most frequently mishandled. Whether it is a picture window shattered by a baseball, a
        sliding glass door cracked by thermal stress, or a storefront destroyed by vandalism, the
        coverage analysis is rarely as simple as it first appears. Insurance companies routinely
        deny or underpay glass claims by misapplying exclusions, ignoring building code requirements,
        and refusing to pay for the actual cost of proper replacement glass.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the coverage framework for glass breakage under both residential and
        commercial policies, the carrier tactics you need to watch for, and several powerful
        coverage arguments that most adjusters &mdash; on both sides &mdash; overlook entirely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Glass Coverage in the ISO HO-3 Homeowner Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 homeowner policy covers glass breakage in two distinct ways, and
        understanding both is essential to maximizing your claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Dwelling Coverage &mdash; Open Perils
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the dwelling coverage of the HO-3, the dwelling is covered on an open-perils (all-risk) basis.
        This means glass that is part of the building structure &mdash; windows, sliding glass
        doors, skylights, storm doors, fixed glass panels &mdash; is covered for any cause of loss
        unless the policy specifically excludes it. The burden is on the insurer to prove an
        exclusion applies. If a window breaks and the carrier cannot point to a specific exclusion,
        the loss is covered. Period.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Personal Property Coverage &mdash; Named Perils
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal property coverage on the HO-3 covers personal property on a named-perils basis. One of those
        named perils is &ldquo;breakage of glass or safety glazing.&rdquo; This peril applies
        to glass items that are personal property rather than part of the building &mdash; glass
        tabletops, mirrors (if freestanding or wall-hung but not built-in), glass shelving, and
        similar items. Under this named peril, the policyholder must show that the glass broke;
        the cause of the breakage does not need to be a separate covered peril like wind or fire.
        The breakage itself <em>is</em> the peril.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Glass Additional Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many HO-3 forms include an Additional Coverage specifically for glass breakage. This
        Additional Coverage typically provides that the insurer will pay for the replacement of
        building glass that is broken, including the cost of &ldquo;safety glazing&rdquo; where
        required by law. This is a critical provision that many adjusters overlook &mdash; and
        we will return to it in detail below when discussing building code upgrades for tempered
        glass.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Additional Coverage for glass also commonly includes a condition that if the glass
        is part of a storm door, storm window, or other exterior fixture, the carrier will pay
        for the full replacement cost, not just the glass itself, if the glass cannot be
        separated from the frame without destroying either.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Glass Commonly Involved in Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Glass is not all the same, and the type of glass involved directly affects both coverage
        and replacement cost. Carriers frequently try to pay for standard float glass when the
        damaged glass was something far more expensive:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Tempered (safety) glass:</strong> Heat-treated glass required by building codes
          near doors, in bathrooms, in stairways, and in any glazing within 18 inches of the floor.
          Costs significantly more than standard glass.
        </li>
        <li>
          <strong>Laminated glass:</strong> Two layers of glass with a plastic interlayer. Used in
          skylights, some sidelights, and increasingly required by code in impact-prone areas.
        </li>
        <li>
          <strong>Low-E (low emissivity) glass:</strong> Glass with a metallic coating that reflects
          heat. Standard in California under Title 24 energy requirements. Replacement Low-E glass
          is substantially more expensive than plain glass.
        </li>
        <li>
          <strong>Insulated glass units (IGUs):</strong> Dual-pane or triple-pane sealed units with
          air or argon gas between the panes. When the seal fails, moisture enters and causes
          fogging. When one pane breaks, the entire sealed unit must be replaced.
        </li>
        <li>
          <strong>Decorative and stained glass:</strong> Beveled, etched, leaded, stained, or art
          glass. Replacement can cost thousands of dollars per panel and may require custom
          fabrication.
        </li>
        <li>
          <strong>Wired glass:</strong> Glass with an embedded wire mesh, historically used for fire
          rating. Being phased out by newer building codes in favor of tempered and ceramic glazing.
        </li>
        <li>
          <strong>Picture windows and oversized glass:</strong> Large single-pane or multi-pane
          assemblies. The size alone drives up cost because oversized glass must be custom ordered,
          transported with special handling, and installed by experienced glaziers.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Carrier Tactic: Paying for the Wrong Type of Glass">
        <p>
          Insurance companies frequently estimate replacement glass at the cost of standard float
          glass, even when the broken glass was tempered, Low-E, laminated, or decorative. Always
          identify the exact type of glass that was damaged before accepting any estimate. If your
          broken window was a dual-pane Low-E insulated unit, the carrier owes for a dual-pane
          Low-E insulated unit &mdash; not a single pane of standard glass.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Vandalism and the Glass Breakage Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where glass claims get interesting &mdash; and where most adjusters stop thinking
        too soon.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowner and commercial property policies contain an exclusion under the vandalism
        peril that reads something like: &ldquo;We do not pay for loss caused by breakage of glass
        or safety glazing if the loss is caused by vandalism or malicious mischief.&rdquo; In
        other words, if someone throws a rock through your window as an act of vandalism, the
        policy may exclude the glass breakage &mdash; even though vandalism itself is a covered
        peril. This surprises many policyholders.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But this exclusion has limits, and there are creative and legitimate ways to find coverage
        even when the glass breakage vandalism exclusion appears to apply.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Gunshot Damage: The Explosion Peril Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If glass was damaged by a gunshot, the vandalism glass exclusion may not be the end of
        the analysis. A bullet impact is arguably an <strong>explosion-related event</strong>.
        The discharge of a firearm involves a rapid expansion of gases &mdash; which is, by
        definition, an explosion. On a named-peril policy form, the peril of &ldquo;explosion&rdquo;
        is separately listed and separately covered. If the glass was broken by a gunshot, you
        are not limited to arguing vandalism. You can argue that the loss falls under the
        explosion peril &mdash; which does not carry the glass breakage exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a reach. A firearm discharges a projectile through the rapid combustion of
        propellant, creating an explosive force that propels the bullet. The glass is damaged by
        the impact of that explosion-driven projectile. On a named-peril form where the
        policyholder must identify a covered peril, explosion is available &mdash; and the
        vandalism glass exclusion does not apply to losses caused by explosion.
      </p>

      <CalloutBox variant="tip" title="Practical Tip: Document the Bullet Impact">
        <p>
          If glass was broken by a gunshot, document the entry point, the fracture pattern, and any
          embedded projectile fragments. A bullet impact creates a distinctive small-diameter
          penetration point with radial and concentric fractures &mdash; entirely different from the
          pattern created by a thrown rock or blunt impact. Photograph the glass before any cleanup.
          If the bullet or fragments can be recovered, preserve them. File a police report. The more
          evidence you have that the damage was caused by a firearm discharge, the stronger your
          explosion peril argument.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Glass&rdquo; Exclusion Does Not Apply to Acrylic, Plexiglass, or Polycarbonate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policy excludes &ldquo;breakage of glass,&rdquo; that exclusion means what it says
        &mdash; it excludes <em>glass</em>. Glass is a specific material: an amorphous solid made
        from silica (sand) that has been heated and cooled. It is not the same material as acrylic,
        polycarbonate (Lexan), plexiglass, or any other synthetic glazing substitute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property has acrylic skylights, polycarbonate window inserts, plexiglass storm
        panels, Lexan security glazing, or any other plastic-based transparent panel, and those
        panels break, crack, or shatter, the &ldquo;glass&rdquo; exclusion does not apply. These
        materials are plastics or polymers &mdash; not glass. A broken plexiglass skylight is not
        &ldquo;breakage of glass.&rdquo; A cracked polycarbonate window insert is not
        &ldquo;breakage of glass.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters in two common scenarios:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Vandalism claims:</strong> If the vandalism glass exclusion applies but the
          damaged glazing is acrylic or polycarbonate, the exclusion does not bar coverage. The
          vandalism peril covers the loss, full stop.
        </li>
        <li>
          <strong>Policies with a glass exclusion endorsement:</strong> Some commercial policies
          or older residential policies endorse out glass breakage entirely. Even then, synthetic
          glazing remains covered because it is not glass.
        </li>
      </ol>

      <CalloutBox variant="info" title="Insurance Policies Are Interpreted Against the Insurer">
        <p>
          Under California law, ambiguous policy language is construed against the insurer and in
          favor of coverage. If the policy says &ldquo;glass&rdquo; and the damaged material is
          acrylic or polycarbonate, there is no ambiguity at all &mdash; the material is simply not
          glass. But even if a carrier tried to argue that &ldquo;glass&rdquo; was intended to
          include all transparent glazing materials, that interpretation would be construed against
          the insurer because the insurer wrote the policy and could have used broader language.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Code Upgrades: Tempered Glass and Safety Glazing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When glass breaks in certain locations, current building codes require that the replacement
        glass be tempered or safety glass &mdash; even if the original glass was plain annealed
        (non-tempered) glass. Under the California Building Code and the International Building
        Code, safety glazing is required in the following locations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>All glass in doors and within 24 inches of a door</li>
        <li>Glass in and adjacent to bathtubs and showers</li>
        <li>Glass panels in stairways and landings</li>
        <li>Glass within 18 inches of the floor (measured from the bottom edge of the glazing)</li>
        <li>Glass in guardrails and railings</li>
        <li>Glass in walls and fences enclosing swimming pools, hot tubs, and spas</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tempered glass costs more than standard annealed glass &mdash; sometimes significantly
        more, especially for custom sizes. The question is: who pays for the upgrade?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Glass Additional Coverage May Include Safety Glazing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the argument that changes the analysis. Many HO-3 policy forms include glass
        breakage as an Additional Coverage with language that specifically provides for the
        replacement of glass with &ldquo;safety glazing materials when required by ordinance
        or law.&rdquo; If your policy includes this language, the insurer owes for tempered
        glass as part of the glass replacement &mdash; <strong>even if the policy does not
        include a separate Ordinance or Law endorsement</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is significant. Many carriers will deny the cost of tempered glass replacement on
        the grounds that the policyholder does not have{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">
          Ordinance or Law coverage
        </Link>. But if the Glass Additional Coverage already provides for safety glazing as part
        of the glass replacement, the Ordinance or Law endorsement is not required. The glass
        coverage itself includes the upgrade. Read your policy carefully &mdash; the Glass
        Additional Coverage section, not just the Ordinance or Law endorsement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of building code requirements and how they interact with your
        policy, see our{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] underline">
          Law and Ordinance Coverage guide
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Do Not Accept Standard Glass When Code Requires Tempered">
        <p>
          If the carrier&rsquo;s estimate prices standard annealed glass for a location that
          requires tempered glass under current building code, do not accept that estimate. A
          contractor who installs non-tempered glass where tempered glass is required is violating
          the building code and creating a safety hazard. The insurer must pay for what is legally
          required to be installed &mdash; not what used to be there.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Thermal Stress Cracks: The Wear and Tear Battle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thermal stress cracks are one of the most commonly denied glass claims. A thermal stress
        crack occurs when one area of a glass pane is heated or cooled at a different rate than
        another area, creating internal stress that exceeds the glass&rsquo;s tensile strength.
        The result is a crack that typically starts at the edge of the glass and extends inward
        in a relatively straight or gently curved line &mdash; without the starburst or radial
        pattern that characterizes impact damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely deny thermal stress cracks as &ldquo;wear and tear,&rdquo;
        &ldquo;inherent vice,&rdquo; or &ldquo;maintenance.&rdquo; Whether this denial is proper
        depends on the specific cause and the policy language.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Thermal Stress Cracks May Be Covered
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sudden temperature change from a covered peril:</strong> If a fire, explosion,
          or sudden weather event caused a rapid temperature differential that cracked the glass,
          the crack is caused by a covered peril &mdash; not wear and tear.
        </li>
        <li>
          <strong>Open-perils dwelling coverage:</strong> Under the dwelling coverage of the HO-3, the dwelling
          is covered on an open-perils basis. A thermal stress crack is a direct physical loss. Unless
          the carrier can affirmatively prove that the crack falls within an exclusion &mdash; such as
          wear and tear, inherent vice, or latent defect &mdash; it is covered. The burden is on the
          carrier to prove the exclusion.
        </li>
        <li>
          <strong>Manufacturing defect:</strong> If the glass cracked due to improper tempering,
          edge finishing defects, or inclusions (nickel sulfide inclusions in tempered glass are a
          known manufacturing defect that causes spontaneous breakage), this may be a product
          defect claim rather than an insurance claim &mdash; but it is not &ldquo;wear and
          tear.&rdquo;
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Thermal Stress Cracks Are Likely Excluded
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the thermal stress crack resulted from the gradual effects of sun exposure over time,
        or from a known condition like dark window tinting that causes uneven heat absorption, the
        carrier has a reasonable argument for the wear and tear exclusion. Gradual thermal cycling
        that eventually fatigues the glass is, functionally, deterioration from normal conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key distinction is between a <em>sudden</em> thermal event and a <em>gradual</em> one.
        A sudden, identifiable temperature differential is a loss event. Years of thermal cycling
        is deterioration.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Seal Failure in Insulated Glass Units (IGUs)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insulated glass units &mdash; the dual-pane or triple-pane sealed windows found in most
        modern homes &mdash; have seals around the perimeter that keep moisture out of the airspace
        between the panes. When these seals fail, moisture enters and condenses between the panes,
        creating a foggy or hazy appearance that cannot be cleaned because the moisture is inside
        the sealed unit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies almost universally deny IGU seal failure as wear and tear or
        maintenance. In most cases, this denial is correct. Seal failure is a gradual process
        driven by repeated thermal expansion and contraction of the seal material, UV degradation,
        and desiccant saturation. It is not a sudden and accidental event.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, there are exceptions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Storm damage to the seal:</strong> If wind-driven debris, hail, or another covered
          peril physically damaged the seal &mdash; even without breaking the glass &mdash; the
          resulting fogging is caused by a covered peril, not wear and tear.
        </li>
        <li>
          <strong>Pressure changes from a covered event:</strong> Significant pressure changes from
          an explosion or severe wind event can compromise IGU seals. If the seal failure can be
          temporally connected to a specific covered event, there is an argument for coverage.
        </li>
        <li>
          <strong>Part of a larger covered loss:</strong> If a fire or other covered peril damaged
          the building and the IGU seals failed as a result of heat exposure, structural movement,
          or chemical exposure during the loss, the seal failure is consequential damage from a
          covered peril.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Separate Glass Deductible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some homeowner and commercial policies include a separate deductible for glass breakage,
        typically $100 or $250, that applies instead of the standard policy deductible. This
        separate glass deductible can actually work in the policyholder&rsquo;s favor: if your
        standard deductible is $1,000 or $2,500 but your glass deductible is $100, you pay far
        less out of pocket for a glass claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Check your declarations page to see if your policy includes a glass deductible. If it
        does, and the carrier is applying your standard deductible to a glass claim, push back.
        The glass deductible exists specifically to replace the standard deductible for glass
        losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, if the glass damage is part of a larger loss &mdash; a break-in, a storm, a
        vehicle impact &mdash; the standard policy deductible typically applies to the entire loss
        rather than a separate glass deductible applying only to the glass portion. The glass
        deductible is generally intended for standalone glass breakage events.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Matching: When One Window Breaks in a Set
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a single window in a matching set breaks, the replacement glass may not match the
        remaining windows in color, tint, thickness, texture, or appearance. This is especially
        common with older homes where the original glass has aged, where the manufacturer has
        changed formulations, or where the specific product has been discontinued.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Code of Regulations, Title 10, &sect; 2695.9(a)(2), insurers are required
        to pay enough to achieve a &ldquo;reasonable and uniform appearance&rdquo; when replaced
        items do not match in quality, color, or size. If replacing one window in a bank of five
        results in one visibly different window, the carrier may owe for all five to achieve
        matching. This applies to the glass itself, the frame, and the overall window unit if
        the original product is no longer available.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive discussion of matching requirements and how to argue them, see our{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">
          Matching guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Glass Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial properties face glass claims more frequently and at higher dollar amounts than
        residential properties. Storefronts, curtain walls, glass partitions, and display cases
        can cost tens of thousands of dollars to replace. Commercial glass coverage comes in
        several forms:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Building Coverage in the Commercial Property Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO commercial property form covers glass as part of the building on an
        open-perils or named-perils basis, depending on the causes of loss form attached to the
        policy. Under the Special (open-perils) form, glass is covered for all causes of loss
        unless excluded. Under the Basic or Broad form, glass breakage must be caused by a listed
        peril.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Plate Glass Coverage / Glass Coverage Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many commercial policies include a separate Glass Coverage endorsement (or the older
        &ldquo;Plate Glass&rdquo; policy). This endorsement typically provides broader coverage
        for glass than the base policy &mdash; often covering glass breakage from any cause,
        including accidental breakage, with its own limit and deductible. It may also cover the
        cost of temporary boarding-up, the installation of temporary replacement glass, and
        lettering or ornamentation on the glass.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your commercial policy includes a Glass Coverage endorsement, the coverage under that
        endorsement may be broader than the coverage under the base building coverage. Review both.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Replacement vs. Repair
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all glass damage requires full replacement. Small chips and cracks in some types of
        glass can be repaired with resin injection. However, there are important limitations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Tempered glass cannot be repaired.</strong> Tempered glass is under constant
          internal tension. Any crack or chip will cause the entire pane to shatter into small
          pieces. It must be replaced.
        </li>
        <li>
          <strong>Laminated glass repairs are limited.</strong> Small chips in the outer layer may
          be repairable, but cracks that penetrate the interlayer require full replacement.
        </li>
        <li>
          <strong>Insulated glass units (IGUs) with a broken seal or broken pane</strong> must be
          replaced as a complete unit. You cannot replace just one pane of a sealed dual-pane
          window.
        </li>
        <li>
          <strong>Cracks that extend to the edge of the glass</strong> generally require
          replacement because the structural integrity of the pane is compromised.
        </li>
        <li>
          <strong>Any glass in a location requiring safety glazing</strong> that is not currently
          tempered or laminated should be replaced with compliant safety glass &mdash; not repaired
          to maintain its non-compliant condition.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&rsquo;s estimate includes a repair for glass that should be replaced,
        get a written opinion from a licensed glazier explaining why replacement is necessary.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting Glass Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proper documentation of glass damage is essential because the fracture pattern tells the
        story of how the glass broke. Different causes of breakage create distinctly different
        patterns:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Impact damage:</strong> Creates a starburst or radial crack pattern emanating
          from a central impact point. The point of impact is usually visible as a small cone-shaped
          depression (the Hertzian cone). Concentric cracks may also form around the impact point.
        </li>
        <li>
          <strong>Thermal stress cracks:</strong> Start at the edge of the glass (often at a chip
          or flaw in the edge) and extend inward in a single, relatively straight or gently
          curving line. There is no starburst, no impact point, and no concentric cracking. The
          crack is usually perpendicular to the edge where it starts.
        </li>
        <li>
          <strong>Pressure or stress failure:</strong> Produces a pattern of multiple cracks
          radiating from a point of maximum stress, often near the center of a large pane, without
          a visible impact point.
        </li>
        <li>
          <strong>Bullet impact:</strong> Creates a small, clean penetration hole with radial
          cracks and often concentric (circular) cracks around the hole. The entry side typically
          shows a smaller hole than the exit side.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Photography Tips for Glass Damage">
        <p>
          Photograph glass damage before any cleanup or boarding-up. Take wide shots showing the
          entire window or door in context, then close-up shots of the fracture pattern, the point
          of origin (if identifiable), and any embedded debris. Photograph both sides of the glass
          if accessible. Use a ruler or tape measure in the frame for scale. If the glass is still
          partially intact, photograph the manufacturer&rsquo;s markings &mdash; they are usually
          etched or stamped in a corner and will identify the type, thickness, and manufacturer of
          the glass, which is essential for accurate replacement pricing.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics on Glass Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following carrier tactics appear repeatedly in glass breakage claims:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Classifying impact damage as thermal stress.</strong> Carriers will sometimes
          claim that an impact crack is actually a thermal stress crack to invoke the wear and
          tear exclusion. The fracture pattern is the evidence &mdash; an impact crack has a
          visible point of origin and radiating cracks; a thermal stress crack starts at the edge
          with no impact point.
        </li>
        <li>
          <strong>Pricing standard glass when specialty glass was damaged.</strong> The estimate
          prices single-pane float glass when the damaged window was a Low-E, tempered, or
          laminated insulated unit. Always check the glass specifications in the estimate against
          what was actually installed.
        </li>
        <li>
          <strong>Refusing to pay for tempered glass required by building code.</strong> The carrier
          argues that Ordinance or Law coverage is required for the tempered glass upgrade. Check
          whether the Glass Additional Coverage in your policy already includes safety glazing
          &mdash; if it does, Ordinance or Law coverage is not needed for this specific item.
        </li>
        <li>
          <strong>Denying matching.</strong> The carrier replaces one window in a set with glass
          that does not match the remaining windows, and refuses to pay for the additional
          replacements needed to achieve a uniform appearance.
        </li>
        <li>
          <strong>Omitting installation labor and related costs.</strong> Glass replacement is not
          just the cost of the glass. It includes removal and disposal of the broken glass,
          preparation of the frame, setting blocks, glazing tape or sealant, and the labor to
          install the new glass. For large or specialty glass, it may include crane or equipment
          rental, scaffolding, and premium labor rates for certified glaziers.
        </li>
        <li>
          <strong>Depreciating glass excessively.</strong> Glass does not lose its functional
          value over time the way a roof or carpet does. A 20-year-old window still functions
          as a window. Excessive depreciation on glass &mdash; particularly on the labor
          component, which cannot be depreciated under California law &mdash; should be challenged.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Regulations That Protect You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California policyholders have specific regulatory protections that apply to glass claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>10 CCR &sect; 2695.9(a)(2) &mdash; Matching:</strong> When replaced items do not
          match in quality, color, or size, the insurer must pay for whatever is necessary to
          achieve a reasonable and uniform appearance.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(b) &mdash; Replacement cost:</strong> The insurer must
          calculate replacement cost without deduction for depreciation, using competent evidence
          of actual repair or replacement costs.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.7(g) &mdash; Explanation of coverage:</strong> When the
          insurer denies or limits a glass claim, it must provide a written explanation of the
          specific policy provision and the factual basis for its decision.
        </li>
        <li>
          <strong>California Insurance Code &sect; 790.03(h) &mdash; Unfair practices:</strong>{' '}
          Failing to accept or deny coverage within a reasonable time, failing to provide a
          reasonable explanation for a denial, or offering substantially less than a reasonable
          settlement is an unfair claims practice.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Glass Claim Is Denied or Underpaid
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get the denial in writing</strong> with the specific policy language the carrier
          is relying on. Under California regulations, the carrier must provide this upon request.
        </li>
        <li>
          <strong>Identify the type of glass that was damaged.</strong> Have a licensed glazier
          inspect the remaining glass (or photographs of it) and provide a written report
          identifying the glass type, thickness, coatings, and whether it was part of a sealed
          insulated unit.
        </li>
        <li>
          <strong>Check the Glass Additional Coverage</strong> in your policy for safety glazing
          language. If the carrier denied a tempered glass upgrade, this may resolve the issue
          without needing Ordinance or Law coverage.
        </li>
        <li>
          <strong>Obtain a proper replacement estimate</strong> from a licensed glazier that
          includes the correct glass type, all installation labor, removal and disposal, frame
          preparation, sealants, and any required code upgrades.
        </li>
        <li>
          <strong>Review the fracture pattern</strong> if the carrier is claiming thermal stress
          or wear and tear. Impact damage and thermal stress produce different, identifiable
          patterns. If the carrier&rsquo;s characterization of the fracture pattern is wrong,
          document why.
        </li>
        <li>
          <strong>Argue matching</strong> if the replacement glass does not match adjacent windows.
          Cite 10 CCR &sect; 2695.9(a)(2) and request that the carrier pay for enough replacements
          to achieve a uniform appearance.
        </li>
        <li>
          <strong>Consider hiring a Public Adjuster</strong> if the glass claim is part of a larger
          loss or if the carrier is refusing to pay for specialty glass replacement. A PA can
          ensure the glass is properly scoped and priced in the overall claim.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Glass breakage claims are rarely as simple as &ldquo;the window broke, pay for a new
        one.&rdquo; The type of glass, the cause of breakage, the location within the building,
        the applicable building codes, and the specific policy language all affect coverage and
        the amount owed. Carriers rely on policyholders not knowing the difference between
        tempered and annealed glass, not checking whether their Glass Additional Coverage includes
        safety glazing, and not understanding that an exclusion for &ldquo;glass&rdquo; does not
        apply to acrylic or polycarbonate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Know your policy. Document the damage properly. Identify the glass correctly. And do not
        accept a denial or a lowball estimate without checking every angle &mdash; including the
        ones the carrier hopes you never think of.
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
