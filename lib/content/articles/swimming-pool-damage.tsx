import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Swimming Pool Damage Insurance Claims: Coverage, Exclusions, and How to Maximize Your Recovery',
  description:
    'How swimming pool damage is covered under homeowners insurance — Coverage B limits, scheduled endorsements, coverage stacking, pool pop-outs, wildfire ash damage, freeze damage, equipment breakdown, and common insurer disputes.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Swimming pools are expensive to build, expensive to repair, and frequently underinsured.
        When a pool is damaged &mdash; whether by a wildfire, a freeze, earth movement, or the
        homeowner&apos;s own decision to drain it at the wrong time &mdash; the insurance claim
        that follows is often more complicated than the damage itself. Pool claims involve
        Coverage B limits, scheduled endorsements, equipment breakdown questions, and exclusions
        that many policyholders have never read. This guide explains how pool damage coverage
        actually works, the most common types of pool damage claims, and how to get the full
        recovery you are owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Pool Coverage Lives in Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first question on any pool claim is which coverage applies. The answer depends on
        how the pool is constructed and where it sits relative to the dwelling.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage B &mdash; Other Structures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a standard HO-3 policy, an in-ground swimming pool is typically classified as an
        &ldquo;other structure&rdquo; under Coverage B. This is the same coverage that applies
        to detached garages, fences, retaining walls, and sheds. Coverage B is an open-peril
        coverage &mdash; it covers all causes of loss unless a specific exclusion removes
        coverage &mdash; but it comes with a significant limitation: the default limit is
        only <strong>10% of your Coverage A (dwelling) limit</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That means if your dwelling is insured for $600,000, your total Coverage B limit for
        all other structures combined is typically $60,000. That $60,000 has to cover the pool,
        the fence, the detached garage, the retaining walls, and any other structures on the
        property. For a homeowner with a $75,000 pool and a detached garage, the default
        Coverage B limit is almost certainly inadequate. Check your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        to see your current Coverage B limit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage A &mdash; Attached Pool Equipment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool equipment that is physically attached to the dwelling &mdash; for example, a pool
        heater, pump, or filtration system housed in a utility room that shares a wall with the
        house &mdash; may fall under Coverage A (dwelling) rather than Coverage B. This distinction
        matters because Coverage A limits are much higher. If your pool pump is bolted to the
        side of the house or located in an attached equipment room, make sure the adjuster is not
        automatically lumping it into Coverage B.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Detached pool equipment &mdash; a freestanding pump house, a separate equipment pad, or
        a standalone heater &mdash; falls under Coverage B along with the pool itself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scheduled Endorsements for Pools
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurers offer the option to <strong>schedule</strong> a swimming pool as a
        separately listed structure with its own specific dollar limit. This is done through
        an endorsement &mdash; sometimes called &ldquo;Other Structures &mdash; Increased
        Limits&rdquo; or a similar name. Scheduling the pool assigns a dedicated coverage
        amount to that specific structure, so it is not competing with the detached garage
        and the fence for the same 10% pot of money.
      </p>

      <CalloutBox variant="tip" title="Coverage Stacking: Scheduled Amount Plus Coverage B">
        <p>
          On most policies, if a pool is separately scheduled for a specific dollar amount,
          the total available coverage for that pool may be the <strong>scheduled amount
          plus</strong> up to 10% of Coverage A from the general Coverage B allocation. You can
          pull from both lines. Here is an example:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Coverage A (dwelling): $500,000</li>
          <li>Coverage B (other structures, 10% of A): $50,000</li>
          <li>Pool scheduled endorsement: $80,000</li>
          <li><strong>Total available for the pool: up to $130,000</strong> ($80,000 scheduled + $50,000 from Coverage B)</li>
        </ul>
        <p className="mt-3">
          This stacking principle is important on large losses. If the pool rebuild costs
          $110,000, the scheduled endorsement alone would fall short &mdash; but adding the
          Coverage B allocation covers the full amount. Review your policy language carefully,
          and if the adjuster treats the scheduled limit as a hard cap, push back. Check the
          endorsement language and the base Coverage B provisions to confirm whether stacking
          applies to your policy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pool Pop-Out: The Catastrophic Drainage Mistake
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most devastating &mdash; and least understood &mdash; forms of pool damage
        is a <strong>pool pop-out</strong>. This occurs when a pool is drained and hydrostatic
        pressure from groundwater pushes the empty pool shell upward, literally lifting it out
        of the ground. The pool may rise a foot or more above grade. Even if the concrete shell
        remains structurally intact, the pool is now &ldquo;proud&rdquo; of the surrounding
        grade and will not settle back down on its own. The result is a total loss of the pool
        as an in-ground structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool pop-outs are particularly common in areas with <strong>clay soils</strong>,
        including large parts of California. Clay is relatively impermeable &mdash; water does
        not drain through it quickly &mdash; so when rain saturates the surrounding soil while
        the pool is empty, pressure builds rapidly. Expansive clay soils can exert pressures of
        5,000 to 10,000 pounds per square foot or more on the pool shell. Without the
        counterweight of thousands of gallons of water inside the pool, the shell cannot
        resist the upward force.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The damage from a pop-out goes beyond the pool shell itself. Underground supply lines
        and drain pipes connected to the pool are torn, shifted, or broken when the shell
        moves. These pipes run under concrete decking, through the yard, and into the
        house&apos;s plumbing system. When they break, repair becomes extremely difficult
        and often impossible without complete excavation and replacement. The surrounding
        deck, coping, and tile are destroyed. The total cost to remediate a pop-out &mdash;
        if the pool can be saved at all &mdash; routinely exceeds $100,000.
      </p>

      <CalloutBox variant="warning" title="The Coverage Fight on Pool Pop-Outs">
        <p>
          Insurance companies frequently deny pool pop-out claims on the theory that the
          homeowner caused the loss by draining the pool, or that the damage is excluded as
          &ldquo;earth movement.&rdquo; Both arguments are contestable. If the pop-out was
          triggered by a covered peril &mdash; for example, a sudden plumbing failure that
          caused the pool to lose water, or a contractor&apos;s error during maintenance &mdash;
          the loss may be covered. The earth movement exclusion is also narrower than insurers
          claim, particularly in California where the{' '}
          <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">
            efficient proximate cause doctrine
          </Link>{' '}
          can override exclusions when a covered peril set the chain of events in motion.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Prevent a Pool Pop-Out
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Never drain a pool completely</strong> without consulting a pool professional
          who understands your local soil conditions and water table.
        </li>
        <li>
          <strong>Do not drain during or after heavy rain.</strong> The surrounding soil is
          already saturated, and the hydrostatic pressure is at its highest.
        </li>
        <li>
          <strong>Check the hydrostatic relief valve.</strong> Most in-ground pools have a
          relief valve at the deepest point of the pool. This valve allows groundwater to
          enter the pool (relieving pressure) rather than pushing the shell up. If this
          valve is clogged or missing, the risk of a pop-out increases dramatically.
        </li>
        <li>
          <strong>Consider a French drain system</strong> around the pool perimeter to manage
          groundwater and reduce pressure buildup.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wildfire Ash and Soot Damage to Pool Plaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a wildfire, many homeowners discover that their pool plaster has been severely
        damaged by ash and soot &mdash; even if the fire never reached their property directly.
        Airborne ash settles into pool water in massive quantities during a wildfire, and the
        chemical interaction between the ash and the plaster surface can require a complete
        re-plastering of the pool.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Chemistry: Why Ash Destroys Pool Plaster
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool plaster is a cementite finish made primarily of white Portland cement and marble
        aggregate. Its durability depends on stable water chemistry &mdash; particularly
        balanced pH, alkalinity, and calcium hardness. Wildfire ash disrupts all three.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wood and structural ash is highly alkaline, with a pH above 9.0. When large volumes
        of ash enter the pool, the pH and alkalinity spike rapidly. This alkaline shock
        destabilizes the calcium compounds in the plaster surface. The plaster finish is
        composed largely of calcium hydroxide (Ca(OH)&#8322;) and calcium carbonate
        (CaCO&#8323;). When the water chemistry swings dramatically, these compounds become
        soluble and begin to dissolve out of the plaster surface &mdash; a process called
        <strong> etching</strong>. The plaster becomes rough, pitted, and discolored.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But chemical etching is only part of the problem. Urban wildfire ash &mdash; from
        burned homes, vehicles, plastics, and treated lumber &mdash; contains a cocktail of
        contaminants including phosphates, nitrates, heavy metals, and hydrocarbons. These
        compounds stain the plaster deeply. Phosphates in particular promote aggressive algae
        growth that further degrades the surface. Fire retardant chemicals that may have been
        dropped in the area introduce additional phosphates and surfactants into the water.
        The combined effect &mdash; chemical etching, deep staining, and biological
        contamination &mdash; frequently makes the plaster unsalvageable. An acid wash may
        address surface staining, but etched and pitted plaster cannot be restored. The pool
        requires a complete re-plaster, which can cost $10,000 to $25,000 or more depending
        on the pool size and finish type.
      </p>

      <CalloutBox variant="tip" title="Document Pool Damage After a Wildfire Immediately">
        <p>
          If wildfire smoke or ash has affected your pool, document the condition before
          any cleanup. Photograph the waterline, plaster surface, and any discoloration.
          Have the water tested professionally for pH, alkalinity, calcium hardness, and
          contaminant levels. This documentation is critical for your claim. For more on
          wildfire-related damage, see our{' '}
          <Link href="/resources/wildfire-guide" className="text-[#2E74B5] hover:underline">
            wildfire claims guide
          </Link>{' '}
          and{' '}
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] hover:underline">
            smoke damage claims guide
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Freeze Damage to Pool Equipment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A hard freeze can destroy pool pumps, filters, heaters, plumbing lines, and valves.
        When water inside this equipment freezes, it expands and cracks pump housings, filter
        tanks, heat exchangers, and PVC piping. The damage is often hidden &mdash; hairline
        cracks in a pump housing or a heat exchanger may not become apparent until the system
        is pressurized in the spring.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether freeze damage to pool equipment is covered depends heavily on your policy
        language and what you did to prevent it. Most homeowner policies cover freeze damage
        as a named peril, but they include a critical condition: <strong>the policyholder
        must have taken reasonable precautions to prevent freezing</strong>. If you failed to
        winterize the pool, failed to drain exposed equipment, or failed to run the pump
        during a freeze event, the insurer will likely deny the claim for failure to protect
        property.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Covered:</strong> A sudden, unexpected freeze damages properly winterized
          equipment. You drained exposed lines, ran the pump during the cold snap, or hired
          a professional to winterize &mdash; and the equipment still froze. This is a
          covered loss under most policies.
        </li>
        <li>
          <strong>Disputed:</strong> You did not winterize, but the freeze was unusually
          severe and unprecedented for your area. The insurer will argue lack of reasonable
          care. You will argue that no reasonable precaution would have prevented the damage
          given the severity of the event. These claims are fought on the facts.
        </li>
        <li>
          <strong>Denied:</strong> The pool sat un-winterized through a normal winter and
          equipment cracked. This is maintenance neglect, not a sudden and accidental loss.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Keep Your Winterization Records">
        <p>
          Professional winterization records &mdash; invoices from a pool service company
          showing that equipment was drained, lines were blown out, and antifreeze was added
          &mdash; are powerful evidence on a freeze damage claim. If you winterize the pool
          yourself, photograph the process and keep notes. The adjuster will ask what steps
          you took.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Equipment Breakdown Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies cover damage <em>caused by</em> equipment failure &mdash;
        for example, water damage to the deck caused by a burst pump &mdash; but they do not
        cover the cost of <strong>replacing the failed equipment itself</strong> when the
        failure is mechanical or electrical rather than caused by a covered peril. Your pool
        pump burns out due to an electrical surge. Your pool heater&apos;s heat exchanger
        cracks from thermal stress. Your variable-speed pump&apos;s motor fails. Under a
        standard policy, the insurer pays for the resulting damage but not for the pump or
        heater replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where <strong>equipment breakdown coverage</strong> becomes important. This
        optional endorsement &mdash; sometimes called &ldquo;mechanical breakdown&rdquo;
        or &ldquo;service line coverage&rdquo; depending on the insurer &mdash; covers the
        cost of repairing or replacing equipment that fails due to mechanical or electrical
        breakdown. It typically covers pool pumps, heaters, filters, chlorinators, automation
        systems, and other mechanical equipment. The endorsement usually costs less than $10
        per month and provides $50,000 to $100,000 of coverage with a $500 deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a pool with significant mechanical equipment &mdash; variable-speed pumps,
        gas or electric heaters, salt chlorine generators, automated controls &mdash; this
        endorsement is worth adding. Without it, you are self-insuring every mechanical
        failure. Check your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        to see whether you already have it. Many insurers include it automatically on newer
        policies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Earth Movement and Pool Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The earth movement exclusion in a standard homeowner policy removes coverage for
        damage caused by earthquake, landslide, mudflow, sinkhole, subsidence, and similar
        ground movement. Swimming pools are particularly vulnerable to earth movement &mdash;
        a shift of even a few inches can crack the shell, shear plumbing connections, and
        destroy the deck and coping. And because the earth movement exclusion is broad,
        pool damage from these causes is almost always excluded under the base policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two important exceptions to be aware of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Earthquake insurance.</strong> If you carry a separate earthquake policy
          (through the California Earthquake Authority or a private carrier), pool damage
          from an earthquake <em>may</em> be covered &mdash; but not always. Some earthquake
          policies exclude outdoor structures including pools. Others cover pools but apply
          a separate, higher deductible. Read your earthquake policy carefully.
        </li>
        <li>
          <strong>Efficient proximate cause.</strong> In California, if a <em>covered</em>{' '}
          peril set the chain of events in motion that ultimately caused earth movement,
          the earth movement{' '}
          <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">
            exclusion
          </Link>{' '}
          may not apply. For example, if a wildfire stripped vegetation from a hillside and
          the subsequent rain caused a mudslide that damaged the pool, the efficient
          proximate cause of the loss was the fire &mdash; a covered peril. The earth
          movement is a consequence, not the cause. This is a fact-intensive legal argument,
          but it is well-established in California law and has been applied to pool damage
          claims. See our{' '}
          <Link href="/resources/wildfire-guide" className="text-[#2E74B5] hover:underline">
            wildfire claims guide
          </Link>{' '}
          for more detail on post-fire mudslide coverage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pool Leaks That Damage the House
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pool leak creates an unusual coverage situation: the pool itself is covered under
        Coverage B, but the water from the leak may damage the dwelling (Coverage A) and
        personal property (Coverage C). When a pool supply line bursts underground and water
        migrates under the foundation, causing settlement, cracking, and interior damage,
        you may have a claim under multiple coverages simultaneously.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key distinction is whether the leak was <strong>sudden and accidental</strong> or
        <strong> gradual</strong>. A sudden pipe failure &mdash; a supply line that bursts or
        a fitting that fails catastrophically &mdash; is a covered cause of loss. The
        resulting water damage to the house is covered under Coverage A. However, a pool
        that has been slowly leaking for months, saturating the soil and causing gradual
        foundation movement, is likely to be denied as a maintenance issue. Insurers will
        argue the leak was &ldquo;gradual&rdquo; and therefore excluded, and they will argue
        the foundation damage is excluded under the earth movement exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you suspect your pool is leaking, act immediately. Have a professional leak
        detection company locate the leak and document whether it appears sudden (a broken
        pipe, a failed fitting) or gradual (corroded line, deteriorated joint). This
        characterization will likely determine whether your claim is paid. For more on
        how water damage claims work, see our{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
          coverage disputes guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pump, Filter, and Heater Coverage: A Summary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool equipment coverage depends on three factors: where the equipment is located,
        what caused the damage, and whether you have optional endorsements.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Scenario</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Coverage</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Equipment attached to house (pump in attached utility room)</td>
              <td className="border border-gray-300 px-4 py-2">Coverage A</td>
              <td className="border border-gray-300 px-4 py-2">Higher limits; same coverage as dwelling</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Detached equipment pad or pump house</td>
              <td className="border border-gray-300 px-4 py-2">Coverage B</td>
              <td className="border border-gray-300 px-4 py-2">Subject to 10% limit unless scheduled</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Lightning strike destroys pump motor</td>
              <td className="border border-gray-300 px-4 py-2">Covered (A or B)</td>
              <td className="border border-gray-300 px-4 py-2">Lightning is a covered peril &mdash; equipment replacement covered</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Pump motor burns out from wear</td>
              <td className="border border-gray-300 px-4 py-2">Not covered (unless equipment breakdown endorsement)</td>
              <td className="border border-gray-300 px-4 py-2">Standard policy excludes mechanical failure</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Freeze cracks pump housing (properly winterized)</td>
              <td className="border border-gray-300 px-4 py-2">Covered</td>
              <td className="border border-gray-300 px-4 py-2">Freeze is a covered peril if reasonable precautions taken</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Freeze cracks pump housing (not winterized)</td>
              <td className="border border-gray-300 px-4 py-2">Likely denied</td>
              <td className="border border-gray-300 px-4 py-2">Failure to protect property from further damage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Disputes on Pool Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pool claims are heavily disputed. Here are the arguments you are most likely to
        encounter:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;The pool is cosmetic damage only.&rdquo;</strong> Insurers sometimes
          characterize plaster damage, tile cracking, or coping separation as
          &ldquo;cosmetic&rdquo; and refuse to pay for repair. Plaster damage from chemical
          etching is not cosmetic &mdash; it is structural deterioration of the pool&apos;s
          waterproof barrier. Cracked tile and separated coping can allow water behind the
          shell, leading to further structural damage.
        </li>
        <li>
          <strong>&ldquo;This is wear and tear, not a covered loss.&rdquo;</strong> An older
          pool with some existing wear does not forfeit coverage for new damage from a covered
          peril. Wear and tear is a cause-of-loss exclusion, not a condition-of-property
          exclusion. If a wildfire, freeze, or sudden event caused the damage, the age of
          the pool does not eliminate coverage.
        </li>
        <li>
          <strong>&ldquo;Coverage B is exhausted.&rdquo;</strong> If the adjuster tells you
          there is no money left in Coverage B because it was used for other structures, check
          whether your pool is separately scheduled. If it is, the scheduled amount is
          <em> in addition to</em> the base Coverage B, not deducted from it.
        </li>
        <li>
          <strong>&ldquo;Earth movement exclusion applies.&rdquo;</strong> The earth movement
          exclusion is real, but it does not apply to every situation involving ground
          movement. If a covered peril (fire, water leak, explosion) caused the ground to
          move, the efficient proximate cause doctrine may override the exclusion.
        </li>
        <li>
          <strong>&ldquo;You caused the loss by draining the pool.&rdquo;</strong> This is
          the most common defense on pop-out claims. But if the draining was done on advice
          of a contractor, or if the pop-out was triggered by an unexpected weather event
          that saturated soils, the causation argument is more complex than the insurer
          suggests.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document a Pool Damage Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thorough documentation is essential on pool claims because the damage is often
        underground, underwater, or otherwise difficult to observe after repairs begin. For
        guidance on proper documentation methodology, see our{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
          scope of loss field manual
        </Link>.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photograph everything before cleanup.</strong> Waterline staining, plaster
          discoloration, cracked tile, shifted coping, displaced decking, and any visible
          equipment damage. Include wide shots showing the pool&apos;s relationship to
          surrounding structures and close-ups of specific damage.
        </li>
        <li>
          <strong>Get professional water testing.</strong> If ash, soot, or chemical
          contamination is involved, have a pool professional test pH, alkalinity, calcium
          hardness, phosphate levels, and metals. Keep the lab report.
        </li>
        <li>
          <strong>Hire a pool contractor for a damage assessment.</strong> Get a written
          report from a licensed pool contractor documenting the type, extent, and cause of
          damage, along with a repair estimate. This serves as your{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
            scope of loss
          </Link>.
        </li>
        <li>
          <strong>Document underground pipe damage.</strong> If supply or drain lines are
          broken, pressure testing and camera inspection by a plumber or pool specialist will
          confirm the extent of the damage. This evidence is critical because once the pool
          is repaired, the underground damage is no longer visible.
        </li>
        <li>
          <strong>Preserve damaged equipment.</strong> Do not discard broken pumps, cracked
          filter housings, or failed heaters until the adjuster has inspected them or you
          have photographed and documented them thoroughly.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Pool Claim Is Denied or Underpaid
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your pool damage claim has been denied or the settlement offer does not cover the
        cost of repair, you have options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the denial in writing</strong> with specific policy language cited.
          The insurer is required to identify the exact exclusion or limitation they are
          relying on. A vague denial is not sufficient under California&apos;s Fair Claims
          Settlement Practices Regulations.
        </li>
        <li>
          <strong>Review the cited exclusion carefully.</strong> Many pool claim denials cite
          exclusions that do not actually apply to the facts of the loss. The{' '}
          <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">
            exclusions guide
          </Link>{' '}
          explains how exclusions work and when they can be challenged.
        </li>
        <li>
          <strong>Get an independent estimate.</strong> If the insurer&apos;s offer is too
          low, get your own repair estimate from a licensed pool contractor. The gap between
          the two estimates becomes the basis for your{' '}
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
            coverage dispute
          </Link>.
        </li>
        <li>
          <strong>Consider hiring a Public Adjuster.</strong> Pool claims involve technical
          construction issues, coverage questions across multiple policy sections, and
          potential stacking of scheduled and unscheduled coverages. A licensed public
          adjuster can identify coverage you may not know you have and negotiate a
          significantly higher settlement.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Pool Damage Claim Denied or Underpaid?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Swimming pool claims involve Coverage B limits, scheduled endorsements, equipment
          breakdown questions, and exclusions that require expert analysis. We review pool
          damage claims at no cost and help policyholders recover the full amount they are owed.
        </p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not
          constitute legal advice.
        </p>
      </CalloutBox>
    </>
  )
}
