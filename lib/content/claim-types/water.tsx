import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Water Leak Claims: Sudden vs. Gradual and Why It Matters',
  description:
    'Learn how insurance companies handle water damage claims, the critical distinction between sudden and gradual leaks, water damage categories, and how to protect your claim from common insurer tactics.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Sudden vs. Gradual Distinction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage is one of the most common homeowners insurance claims, but coverage depends
        heavily on how the damage occurred. Most homeowners policies cover water damage that is
        &quot;sudden and accidental&quot; — a pipe that bursts unexpectedly, an appliance hose that
        fails, or a hot water heater that ruptures. What policies typically do not cover is damage
        from water that has been leaking gradually over time, which the insurer characterizes as a
        maintenance issue rather than a covered loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is where most disputes arise. The reality is that many water leaks go
        undetected for some period of time before the homeowner discovers them — a slow leak behind
        a wall, under a cabinet, or in a crawl space. The water damage may be sudden in the sense
        that it resulted from an unexpected failure, even if it was not discovered immediately. The
        insurance company, however, will often argue that any damage showing signs of prolonged
        moisture exposure is &quot;long-term&quot; and therefore excluded.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Sources of Water Damage
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pipe bursts:</strong> Caused by freezing, corrosion, water pressure, or physical damage
        </li>
        <li>
          <strong>Appliance failures:</strong> Washing machines, dishwashers, refrigerators with ice
          makers, and water heaters
        </li>
        <li>
          <strong>Roof leaks:</strong> Storm damage allowing water intrusion — covered if caused by a
          covered peril, but not if caused by wear and tear
        </li>
        <li>
          <strong>Plumbing failures:</strong> Supply lines, drain lines, toilet connections, and
          slab leaks
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &quot;Long-Term Loss&quot; Defense
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely use the &quot;long-term loss&quot; argument to deny or
        reduce water damage claims. Their adjuster or inspector finds evidence of prolonged
        moisture — staining, mineral deposits, mold growth, or deteriorated materials — and
        concludes that the damage has been occurring over an extended period. They then deny the
        claim on the grounds that it is a maintenance issue, not a sudden and accidental loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument often oversimplifies the situation. Many plumbing failures are genuinely
        sudden events, but the resulting water may accumulate in hidden areas before the
        homeowner becomes aware. The fact that damage went undetected does not automatically
        make the cause of the loss gradual or foreseeable.
      </p>

      <CalloutBox variant="tip" title="Mold and Water Claims">
        <p>
          Mold frequently develops as a secondary issue in water loss claims. If mold is present,
          it does not necessarily mean the loss was long-term — mold can begin growing within 24 to
          48 hours of water exposure. See our{' '}
          <Link href="/resources/mold-losses" className="underline hover:text-sky-950">
            detailed article on mold losses
          </Link>{' '}
          for more on how mold affects your claim and how to prevent insurers from using it against you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Water Damage Categories
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The water restoration industry classifies water damage into three categories, which
        affect the scope and cost of remediation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Category 1 (Clean Water):</strong> Water from a clean source such as a broken
          supply line or faucet. Poses no substantial health risk at the time of exposure.
        </li>
        <li>
          <strong>Category 2 (Gray Water):</strong> Water containing significant contamination that
          could cause illness — sources include washing machine overflow, dishwasher discharge, or
          toilet overflow with urine but no feces.
        </li>
        <li>
          <strong>Category 3 (Black Water):</strong> Grossly contaminated water containing
          pathogenic agents — includes{' '}
          <Link href="/types-of-claims/sewage" className="text-blue-700 underline hover:text-blue-900">
            sewage
          </Link>
          , flooding from rivers or streams, and any standing water that has begun to support
          bacterial growth. Category 3 water requires the most extensive remediation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documentation and Your Duty to Mitigate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you discover water damage, take immediate photos and video before any cleanup begins.
        Keep damaged materials when possible — the insurance company may want to inspect them, and
        disposing of evidence can weaken your claim. Document the source of the water if you can
        identify it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have a duty to mitigate further damage, which means taking reasonable steps to stop
        the water and prevent the damage from getting worse. Turn off the water supply if the
        source is a plumbing failure. Move belongings out of standing water. If the damage is
        extensive, call a water mitigation company to begin extraction and drying. Your policy
        requires you to take these reasonable steps, and the cost of emergency mitigation is
        typically covered. However, do not begin permanent repairs until the insurance company
        has had the opportunity to inspect the damage.
      </p>
    </>
  )
}
