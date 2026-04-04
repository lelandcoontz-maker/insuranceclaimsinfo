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
        How to Document Smoke Damage
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Hire an independent environmental testing firm.</strong> Do not rely on the
          insurer&apos;s testing. Hire a Certified Industrial Hygienist (CIH) or environmental
          consultant to perform air quality testing, surface wipe samples, and HVAC inspection.
          This creates an independent, defensible record.
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
