import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Smoke Damage Insurance Claims in California',
  description:
    'How to handle a smoke damage insurance claim — testing, remediation standards, coverage, the new Smoke Damage Recovery Act, and common insurer tactics.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke damage is one of the most disputed areas in California property insurance. Unlike
        fire damage — which is visible and relatively straightforward to assess — smoke damage is
        invisible, pervasive, and its health consequences are poorly understood by many adjusters.
        Insurers routinely minimize smoke claims, apply arbitrary sublimits, or deny them outright.
        This guide explains what you&apos;re entitled to, how to document smoke damage, and what
        California law requires.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Smoke Damage Is Direct Physical Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the foundational legal point, and insurers sometimes try to obscure it. Under
        California law, smoke, soot, and ash infiltration constitutes direct physical damage to
        property. Your homeowner policy covers direct physical loss — it does not require that
        your home be destroyed or structurally compromised. If wildfire smoke has permeated your
        home, your HVAC system, your soft goods, and your personal property, that is a covered loss
        under a standard fire policy.
      </p>

      <CalloutBox variant="warning" title="Don't Let the Adjuster Minimize Smoke Damage">
        <p>
          A common tactic: the insurer sends an adjuster who walks through the home, doesn&apos;t
          see visible soot, and writes a report saying &ldquo;no damage observed.&rdquo; Smoke damage
          is largely invisible. It requires air quality testing, surface wipe samples, and HVAC
          inspection by qualified professionals — not a visual walk-through.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Smoke Damage
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Structure contamination.</strong> Smoke particles (particulate matter, volatile
          organic compounds, polycyclic aromatic hydrocarbons) penetrate drywall, insulation, ductwork,
          attic spaces, and crawl spaces. These contaminants can off-gas for months or years.
        </li>
        <li>
          <strong>HVAC system contamination.</strong> Your HVAC system circulates air through
          ductwork that may be heavily contaminated with soot and toxic residue. Running a
          contaminated system spreads contaminants throughout the home.
        </li>
        <li>
          <strong>Personal property.</strong> Soft goods (clothing, upholstery, bedding, curtains)
          absorb smoke deeply. Hard goods can often be cleaned, but porous materials frequently
          cannot be restored.
        </li>
        <li>
          <strong>Health hazard contamination.</strong> Wildfire smoke is not ordinary wood smoke.
          Urban wildfire smoke contains burned plastics, electronics, building materials, vehicles,
          chemicals, and other toxins. The health risk from residual contamination is significant,
          particularly for children, elderly, and immunocompromised individuals.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Microscopic Soot: The Damage You Cannot See
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important developments in smoke damage litigation is the recognition that
        microscopic soot contamination constitutes real, measurable property damage — even when
        nothing is visible to the naked eye. In <em>Maxus, Inc. v. Travelers Indemnity Co.</em>
        (8th Cir.), the court held that soot contamination can constitute property damage even
        when the contamination is not visible. This is a critical precedent for policyholders,
        because it dismantles the insurer&apos;s favorite argument: &ldquo;we don&apos;t see any
        damage.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wildfire smoke produces extraordinarily fine particulate matter. PM2.5 particles — those
        2.5 microns or smaller — are roughly 30 times smaller than the width of a human hair.
        These particles do not sit conveniently on surfaces waiting to be wiped up. They penetrate
        deep into HVAC systems, settle in ductwork joints and duct liner, embed in porous soft
        goods (upholstery, carpet padding, clothing fibers), infiltrate wall cavities through
        electrical outlets and plumbing penetrations, and adsorb onto surfaces at the molecular
        level. The contamination is real. It is measurable. And it is property damage under
        California law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Proving Microscopic Soot Contamination
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The presence of microscopic soot is established through environmental testing — not visual
        inspection. A qualified Certified Industrial Hygienist (CIH) uses surface wipe sampling,
        air cassette sampling, micro-vacuum sampling, and other laboratory-analyzed methods to
        detect and quantify contamination that no adjuster could ever identify by walking through
        your home. The sampling methodology matters enormously: improper collection, inappropriate
        sample locations, or insensitive analytical methods can produce misleadingly low results.
        This is why independent testing is essential. For a detailed discussion of proper sampling
        protocols, see our{' '}
        <Link href="/resources/environmental-sampling-methods" className="text-blue-700 underline hover:text-blue-900">
          guide to environmental sampling methods
        </Link>.
      </p>

      <CalloutBox variant="important" title="Microscopic Does Not Mean Insignificant">
        <p>
          Carriers will argue that if you cannot see the contamination, it is not real damage.
          This is scientifically wrong and legally insufficient. Courts have recognized that
          invisible contamination constitutes direct physical loss to property. The question is
          not whether an adjuster can see soot on a wall — the question is whether laboratory
          analysis confirms the presence of harmful particulate contamination. If testing shows
          elevated levels of char, soot, or combustion byproducts, that is covered property damage
          regardless of visibility.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document Smoke Damage
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Hire an independent environmental testing firm.</strong> Do not rely on the
          insurer&apos;s testing. Hire a Certified Industrial Hygienist (CIH) or environmental
          consultant to perform air quality testing, surface wipe samples, and HVAC inspection.
          Testing and remediation should follow the IICRC S520 Standard for Professional Mold
          Remediation and the IICRC S540 Standard for Cleaning and Decontamination of Wildfire
          Residues — these are the recognized industry standards. If the insurer&apos;s testing
          company is not following these protocols, that is a red flag. An independent test creates
          a defensible record.
        </li>
        <li>
          <strong>Test before cleaning.</strong> If you clean before testing, you destroy the
          evidence of contamination. This is critical — do not let anyone (including the insurer&apos;s
          restoration company) begin cleaning until baseline testing is complete.
        </li>
        <li>
          <strong>Document everything photographically.</strong> Even though smoke damage is often
          invisible, photograph any visible soot, discoloration, or residue. Photograph air filters,
          HVAC returns, and attic spaces.
        </li>
        <li>
          <strong>Keep contaminated items.</strong> Do not dispose of personal property until the
          insurer has had the opportunity to inspect and you have documented everything. If items
          are hazardous, photograph and document before disposal.
        </li>
        <li>
          <strong>Get a post-remediation clearance test.</strong> After cleaning and remediation,
          re-test to confirm that contamination levels have returned to acceptable levels. If they
          haven&apos;t, further remediation is needed — at the insurer&apos;s expense.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Evolving Smoke Damage Standards
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has been at the forefront of addressing smoke damage claims standards:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CDI Smoke Claims Task Force.</strong> The California Department of Insurance
          convened a task force to develop uniform, science-based standards for evaluating and
          remediating smoke damage. The task force&apos;s report addresses inspection protocols,
          testing standards, and remediation requirements.
        </li>
        <li>
          <strong>AB 1795 — The Smoke Damage Recovery Act.</strong> This proposed legislation would
          create the nation&apos;s first statewide framework for smoke damage claims, including
          mandatory inspection timelines (30 days from notice), uniform testing and remediation
          standards, ALE protections during remediation, and mandatory timelines for claim payments.
        </li>
        <li>
          <strong>CDI Bulletin 2025-7.</strong> The Department of Insurance issued guidance requiring
          insurers to comply with fair claims settlement practices on smoke damage claims, including
          making good faith efforts to promptly and fairly settle claims.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The $5,000 Smoke Damage Cap Is Gone">
        <p>
          Some older policies included a $5,000 sublimit on smoke damage. California law no longer
          permits insurers to enforce these caps. If your insurer tries to limit your smoke damage
          claim to a sublimit, push back — this practice has been prohibited.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        CDI and Wildland-Urban Interface (WUI) Smoke Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has increasingly focused on smoke damage from
        wildland-urban interface (WUI) fires — the massive blazes that push smoke into residential
        communities miles from the fire perimeter. CDI has issued bulletins specifically addressing
        WUI smoke damage, making clear that carriers cannot deny smoke claims simply because
        there was no direct flame contact with the insured property. This is a critical regulatory
        position: smoke from a nearby wildfire is a covered peril under standard California
        homeowner policies, period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CDI&apos;s March 2025 guidance reinforces several key principles for WUI smoke claims:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>No direct flame contact required.</strong> A home does not need to have been
          touched by fire to have a valid smoke damage claim. Smoke migrates far beyond the fire
          perimeter, and the resulting contamination is covered as direct physical loss from fire.
        </li>
        <li>
          <strong>Prompt and fair handling required.</strong> CDI expects carriers to investigate
          and pay smoke damage claims promptly, even for homes that were not directly burned.
          Delays, lowball offers, and blanket denials violate California&apos;s Fair Claims
          Settlement Practices Regulations.
        </li>
        <li>
          <strong>FAIR Plan violations.</strong> CDI has identified violations in how the California
          FAIR Plan has handled smoke damage claims, including delays and improper denials. If you
          are a{' '}
          <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
            FAIR Plan policyholder
          </Link>{' '}
          with a smoke damage claim, be aware that CDI is scrutinizing the FAIR Plan&apos;s claims
          practices in this area.
        </li>
        <li>
          <strong>Science-based assessment.</strong> CDI&apos;s position supports the use of
          environmental testing and scientific methods — not visual walkthroughs — to evaluate
          smoke contamination. This aligns with the testing standards discussed throughout this
          guide.
        </li>
      </ul>

      <CalloutBox variant="legal" title="CDI Authority on Smoke Claims">
        <p>
          The California Department of Insurance has regulatory authority over all admitted
          carriers operating in the state. CDI bulletins and guidance documents do not have the
          force of statute, but they establish the Department&apos;s enforcement position. When
          a carrier ignores CDI guidance on smoke claims, that conduct can be cited in bad faith
          complaints, DOI complaints, and litigation as evidence that the insurer knew what was
          expected and chose not to comply. For more on your rights under wildfire-related claims,
          see our{' '}
          <Link href="/resources/wildfire-guide" className="text-blue-700 underline hover:text-blue-900">
            comprehensive wildfire claims guide
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics on Smoke Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;No visible damage.&rdquo;</strong> As noted above, smoke damage is largely
          invisible. A visual inspection is meaningless — demand testing.
        </li>
        <li>
          <strong>Using their own testing company.</strong> The insurer hires a &ldquo;preferred&rdquo;
          industrial hygienist who tests only limited areas, uses less sensitive methods, or
          interprets results favorably for the insurer. Always get independent testing.
        </li>
        <li>
          <strong>Offering &ldquo;ozone treatment&rdquo; as a cure-all.</strong> Ozone treatment
          can help with odor but does not remove particulate contamination from surfaces, ductwork,
          or materials. It is not a substitute for proper remediation.
        </li>
        <li>
          <strong>Denying HVAC replacement.</strong> When ductwork and the HVAC system are
          contaminated, cleaning may be insufficient. If post-cleaning tests show continued
          contamination, replacement is warranted.
        </li>
        <li>
          <strong>Separating the smoke claim from the fire claim.</strong> If your home also suffered
          fire damage, the insurer may try to handle the smoke damage as a separate, lesser claim.
          Smoke damage from a wildfire is part of the same loss event.
        </li>
        <li>
          <strong>Rushing you to move back in.</strong> The insurer is paying ALE (additional living
          expenses) while you&apos;re displaced. They have a financial incentive to declare your
          home habitable before remediation is complete. Do not move back until clearance testing
          confirms the home is safe.
        </li>
        <li>
          <strong>&ldquo;No flame contact, no coverage.&rdquo;</strong> Some carriers argue that
          because your home was not directly burned, smoke damage is not covered. This is wrong.
          CDI has explicitly stated that direct flame contact is not required — smoke from a
          nearby wildfire is a covered peril under standard homeowner policies. If your insurer
          uses this argument, file a complaint with CDI immediately.
        </li>
        <li>
          <strong>Using insensitive testing methods.</strong> The insurer&apos;s preferred testing
          company may use sampling methods designed to minimize results — testing only easily
          accessible surfaces, using less sensitive analytical techniques, or sampling too few
          locations. Proper environmental sampling requires{' '}
          <Link href="/resources/environmental-sampling-methods" className="text-blue-700 underline hover:text-blue-900">
            appropriate methodology
          </Link>{' '}
          including micro-vacuum sampling, aggressive air sampling, and testing of concealed
          spaces like wall cavities and duct interiors. If the insurer&apos;s testing protocol
          would not detect microscopic soot contamination, the testing is inadequate.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Coverages for Smoke Damage
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling).</strong> Structural remediation — duct cleaning or
          replacement, drywall sealing or replacement, insulation replacement, repainting.
        </li>
        <li>
          <strong>Coverage B (Other Structures).</strong> Detached garages, sheds, fences if
          contaminated.
        </li>
        <li>
          <strong>Coverage C (Personal Property).</strong> Cleaning or replacement of contaminated
          contents — clothing, furniture, electronics, kitchenware. See our{' '}
          <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">contents claims guide</Link>.
        </li>
        <li>
          <strong>Coverage D (ALE).</strong> If your home is not habitable due to smoke contamination,
          you&apos;re entitled to{' '}
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">additional living expenses</Link>{' '}
          while remediation is performed.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Your Home Didn&apos;t Burn But Was Smoke-Damaged
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        This is an increasingly common scenario: your home survived the wildfire but was saturated
        with smoke. You absolutely have a claim. Your policy covers direct physical loss from fire,
        and smoke from a wildfire is a direct consequence of fire. You do not need flames to have
        touched your home. The key is documenting the contamination through professional testing
        and demanding proper remediation — not a cosmetic wipe-down.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Months Later: Is Your Home Truly Clean?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners accept an initial cleanup and assume the problem is solved. But smoke
        contamination is persistent &mdash; it hides in places that standard cleaning never
        reaches. If your home was remediated after a wildfire and you still notice odors, if your
        family is experiencing unexplained health symptoms, or if you simply want to verify that
        the work was done correctly, the following self-tests can reveal whether contamination
        remains. These tests do not replace professional industrial hygiene testing, but they can
        give you initial evidence to justify reopening or supplementing your claim.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Test 1: The High &amp; Low Wipe Test
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Take a clean white cloth or paper towel and wipe surfaces that cleaners typically miss:
        the top of door frames, the upper edges of kitchen cabinets, the top of the refrigerator,
        inside closet shelves, behind toilets, and underneath bathroom vanities. These high and
        low surfaces are rarely addressed during a standard cleaning. If the cloth comes back gray
        or black, residual contamination is present. Photograph the cloth against a white
        background for documentation.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Test 2: The &ldquo;Smoke Reservoir&rdquo; Smell Test
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your HVAC ductwork acts as a reservoir for smoke contamination. Remove a supply vent
        cover, wipe the inside of the duct opening with a clean white cloth, and seal the cloth
        in a zip-lock bag. Wait 30 minutes, then open the bag and smell it. If you detect a
        smoky, acrid, or chemical odor, the duct system is still contaminated. This test is
        especially telling in homes where the HVAC was only &ldquo;cleaned&rdquo; rather than
        replaced &mdash; surface cleaning does not reach contamination embedded in duct liner,
        joints, and insulation.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Test 3: The Cavity Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Turn off the power to a wall outlet on an exterior wall. Remove the outlet cover plate
        and use a flashlight to look inside the wall cavity. A black, oily film on the interior
        of the drywall or on the wiring insulation indicates that smoke migrated into the wall
        cavities during the fire event. Standard surface cleaning does not address contamination
        inside wall cavities. If you find it, the remediation was incomplete.
      </p>

      <CalloutBox variant="tip" title="Use These Tests to Reopen or Supplement Your Claim">
        <p>
          If any of these tests reveal residual contamination, you have evidence that the initial
          remediation was insufficient. Document your findings with photographs, then contact your
          insurer to file a supplemental claim. Under California law, you have the right to demand
          that remediation continue until post-clearance testing confirms the home is safe. A{' '}
          <Link href="/resources/supplemental-claims" className="text-sky-700 underline hover:text-sky-900">
            supplemental claim
          </Link>{' '}
          is not a new claim &mdash; it is part of the original loss, and your insurer must
          investigate it. If your claim was already closed, these findings are grounds to reopen it.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Smoke Damage Claim Being Minimized?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Smoke damage claims are among the most under-paid in the industry. A Public Adjuster
          can ensure proper testing, documentation, and settlement.
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
