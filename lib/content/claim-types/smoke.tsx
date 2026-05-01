import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Smoke Damage & Contamination: What Homeowners Need to Know',
  description:
    'Learn the critical difference between wildfire smoke and urban wildfire smoke, why contamination IS damage, and how to protect your rights when your insurer tries to minimize a smoke damage claim.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wildfire Smoke vs. Urban Wildfire Smoke — A Critical Distinction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all smoke damage is the same, and understanding the difference can mean tens of
        thousands of dollars in your insurance claim. When people think of wildfire smoke, they
        picture smoke from burning trees and brush. That type of smoke is certainly harmful —
        it carries significant particulate matter, soot, and ash that can coat surfaces, penetrate
        HVAC systems, and cause respiratory problems. But it is primarily composed of organic
        combustion byproducts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Urban wildfire smoke is an entirely different hazard. When a wildfire burns through a
        developed area — through neighborhoods, commercial buildings, and parked vehicles — the
        resulting smoke contains all of the above <strong>plus</strong> a devastating array of
        toxic contaminants that are far more dangerous and far more difficult to remediate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Makes Urban Wildfire Smoke So Toxic
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When structures, vehicles, electronics, and plastics burn, they release hazardous
        substances that do not exist in ordinary wildfire smoke:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Silica</strong> — released from concrete, glass, and ceramic building materials
        </li>
        <li>
          <strong>Arsenic</strong> — found in treated lumber, certain pesticides, and building products
        </li>
        <li>
          <strong>Mercury</strong> — from thermostats, electronics, and fluorescent lighting
        </li>
        <li>
          <strong>Cadmium</strong> — from batteries, paint pigments, and plastic stabilizers
        </li>
        <li>
          <strong>Lithium</strong> — from lithium-ion batteries found in electric vehicles, laptops,
          phones, power tools, and home battery storage systems
        </li>
        <li>
          <strong>Dioxins</strong> — produced when PVC (polyvinyl chloride) burns or melts. PVC is
          found throughout residential construction in pipes, siding, window frames, vinyl flooring,
          and electrical wire insulation. Dioxins are classified as cancer-causing compounds and are
          among the most toxic man-made substances.
        </li>
        <li>
          <strong>Heavy metals</strong> — from burning electronics, appliances, vehicles, and
          industrial materials
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Indoor Air Quality and Surface Contamination Testing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was exposed to urban wildfire smoke — even if the structure itself did not
        burn — you need professional testing before anyone should be living in the home. There are
        two primary types of testing that should be performed:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Indoor air quality testing:</strong> Measures airborne particulates, volatile organic
          compounds, and other contaminants circulating in your home&apos;s air.
        </li>
        <li>
          <strong>Surface contamination testing (wipe testing):</strong> Detects toxic residue on
          surfaces such as countertops, walls, floors, and inside HVAC ductwork. This testing can
          identify specific hazardous chemicals and heavy metals.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both types of testing should be performed by an independent environmental testing firm —
        not one recommended or hired by the insurance company. Your results need to be defensible
        and unbiased.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Says Contamination Is Not &quot;Damage&quot;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most frustrating tactics homeowners encounter is an insurance company claiming
        that smoke contamination does not constitute &quot;physical damage&quot; to the property.
        The argument goes: your walls are still standing, your roof is intact, so there is no
        covered damage — just residue that needs cleaning.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is wrong. When toxic contaminants are embedded in porous surfaces like drywall,
        carpet, upholstery, and insulation, those materials are damaged. They cannot be restored
        to their pre-loss condition through ordinary cleaning. When your HVAC system has
        distributed contaminated air throughout every room, the ductwork and components are
        damaged. The presence of cancer-causing substances on the surfaces where your family
        lives constitutes real, physical damage to your property.
      </p>

      <CalloutBox variant="warning" title="Do Not Accept the Insurer's Claim That Contamination Is Not Damage">
        <p>
          If your insurance company tells you that smoke contamination is not covered because it
          does not constitute &quot;physical damage,&quot; do not accept that determination without
          a fight. Courts in multiple jurisdictions have found that contamination rendering a
          property unsafe or uninhabitable does constitute physical loss or damage. Get independent
          testing, document the contamination, and consider consulting a{' '}
          <Link href="/resources/public-adjuster" className="underline hover:text-amber-950">
            Public Adjuster
          </Link>{' '}
          who understands smoke contamination claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Remediation Standards and Protocols
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proper remediation of urban wildfire smoke contamination goes far beyond wiping down
        surfaces. It may include removal and replacement of all porous materials — drywall,
        insulation, carpet, and soft furnishings — along with professional cleaning of all
        hard surfaces, complete HVAC system cleaning or replacement, and post-remediation testing
        to confirm that contamination levels are below safe thresholds. Insurance companies
        frequently underestimate the scope and cost of proper remediation because they apply
        standards appropriate for ordinary smoke damage, not for the toxic contamination left by
        urban wildfire smoke. Make sure your remediation contractor understands the difference
        and documents the work accordingly.
      </p>
    </>
  )
}
