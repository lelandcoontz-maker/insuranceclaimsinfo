import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'My Roof Is Leaking After a Storm — Will Insurance Pay?',
  description:
    'Will your homeowner\'s insurance pay for a roof leak after a storm? Covers storm damage vs. wear and tear, when to file, the matching rule, cosmetic damage exclusions, the EPC doctrine, and how to document wind damage.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A storm just blew through. Now your ceiling has a water stain — or worse, water is actively
        dripping into your home. Your first question: will insurance pay for this? The short answer
        is usually yes, if the storm caused the damage. But insurers deny or underpay roof claims
        more aggressively than almost any other type. They have developed an entire playbook around
        the word &ldquo;wear and tear.&rdquo; This guide explains how roof claims work, what the
        insurer will argue, and how to protect yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Core Principle: Cause of Loss Matters, Not Age
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard HO-3 homeowner&rsquo;s policy is an &ldquo;open perils&rdquo; policy on the
        dwelling. That means it covers all causes of loss <em>unless</em> specifically excluded.
        Wind is not excluded. Hail is not excluded. These are covered perils. If wind or hail
        damaged your roof, the insurer must pay to repair or replace it — regardless of the
        roof&rsquo;s age.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer will try to reframe this. They will say: &ldquo;Your roof is 15 years old. It
        was already worn.&rdquo; This is irrelevant. A 15-year-old roof that was performing its
        function before the storm, and is no longer performing after the storm, was damaged by the
        storm. The{' '}
        <Link href="/resources/wear-and-tear-cause-of-loss" className="text-[#2E74B5] hover:underline">
          cause of loss
        </Link>{' '}
        is what matters — not the age or condition of the roof before the event.
      </p>

      <CalloutBox variant="warning" title="The 'Pre-Existing Damage' Trap">
        <p>
          Insurers routinely claim that roof damage is &ldquo;pre-existing&rdquo; or the result of
          &ldquo;normal wear and aging.&rdquo; They send an engineer or inspector who writes a report
          attributing every crack, every lifted shingle, every granule loss to &ldquo;age-related
          deterioration.&rdquo; This is often wrong. Wind lifts shingles. Hail fractures them. These
          are sudden events that cause specific, identifiable damage patterns that a trained inspector
          can distinguish from aging. If the insurer denies based on wear and tear, get your own
          roofing expert&rsquo;s opinion. Do not accept their engineer&rsquo;s report as gospel.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to File a Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        File a claim if you have visible storm damage and your repair cost is likely to exceed your
        deductible. Signs of storm damage include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Missing or displaced shingles</li>
        <li>Active roof leak that started during or after the storm</li>
        <li>Hail impact marks on shingles, gutters, or metal components</li>
        <li>Fallen branches that struck the roof</li>
        <li>Ridge cap shingles lifted or torn off</li>
        <li>Flashing damaged or displaced</li>
        <li>Interior water stains on ceilings or walls after the storm</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are unsure whether damage exists, have a roofer inspect before filing. But do not wait
        too long —{' '}
        <Link href="/resources/should-i-file-a-claim" className="text-[#2E74B5] hover:underline">
          prompt reporting
        </Link>{' '}
        is a policy requirement, and delay gives the insurer ammunition to argue you cannot prove
        the damage came from this storm rather than a prior one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Matching Issue: You Cannot Patch Half a Roof
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Storm damage often affects scattered areas of a roof slope — not a neat, contained section.
        The insurer may offer to pay for replacing only the specific shingles that show impact marks.
        The problem: shingles fade and weather differently over time. You cannot replace 30% of a
        roof slope with new shingles and have them match the remaining 70%. The result looks terrible,
        may violate manufacturer warranty requirements, and can reduce your home&rsquo;s value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law and industry standards support the principle of{' '}
        <Link href="/resources/wind-damage-claims" className="text-[#2E74B5] hover:underline">
          matching
        </Link>{' '}
        — when damaged materials cannot be repaired to match undamaged adjacent materials, the entire
        contiguous area must be replaced to maintain a reasonably uniform appearance. The insurer
        does not get to leave you with a patchwork roof that advertises its own inadequacy to every
        prospective buyer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Cosmetic Damage Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some newer policies — particularly in hail-prone regions — contain a &ldquo;cosmetic
        damage&rdquo; exclusion for roofs. This exclusion says the insurer does not owe for damage
        that affects only the appearance of the roof, not its function. Insurers use this to deny
        hail claims, arguing that dented or bruised shingles still &ldquo;function.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Challenge this aggressively. Hail damage fractures the shingle mat, displaces protective
        granules, and accelerates deterioration. These are functional impacts — the shingle&rsquo;s
        weather resistance is compromised, its useful life is shortened, and it becomes more
        vulnerable to future storms. A proper roofing expert can document functional impairment
        that goes beyond mere &ldquo;cosmetic&rdquo; appearance. Check your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        to see if this exclusion exists in your policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Efficient Proximate Cause Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California follows the <strong>Efficient Proximate Cause (EPC)</strong> doctrine. When a
        loss results from a chain of events involving both covered and excluded causes, the loss is
        covered if the <em>predominant</em> cause is a covered peril. This matters for roof claims
        because insurers often argue that &ldquo;wear and tear&rdquo; (excluded) contributed to the
        failure. Under EPC, if the storm (covered) was the efficient proximate cause that triggered
        the failure, the entire resulting loss is covered — even if some pre-existing wear existed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court established this framework in Garvey v. State Farm (1989) 48 Cal.3d 395. The court later limited it in Julian v. Hartford Underwriters (2005) 35 Cal.4th 747, where it allowed a weather-conditions exclusion to defeat coverage when weather interacted with an excluded peril. The insurer cannot dissect a loss into covered and excluded components if the covered
        peril set the chain in motion. If wind blew your shingles off, the fact that those shingles
        were 12 years old does not negate coverage.
      </p>

      <CalloutBox variant="tip" title="Anti-Concurrent Causation Clauses">
        <p>
          Some policies contain &ldquo;anti-concurrent causation&rdquo; (ACC) language attempting to
          override EPC. These clauses say that if an excluded cause contributes to the loss in any
          way, the loss is excluded — even if a covered cause also contributed. California courts
          have not fully resolved whether ACC clauses can override the EPC doctrine established in
          Garvey, and the enforceability of these clauses remains disputed. If your insurer cites an
          ACC clause, consult an attorney — this is a live legal issue.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting Wind Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proper documentation is critical. Here is how to build your case:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Weather data.</strong> Pull the official weather reports for the date of the storm.
          The National Weather Service archives wind speed, gust data, hail reports, and storm
          warnings. Peak gusts above 50-60 mph cause widespread roof damage.
        </li>
        <li>
          <strong>Photos of the roof surface.</strong> Have your roofer photograph specific damage —
          lifted shingles, missing tabs, exposed nail heads, creased shingles, torn flashing. Close-up
          photos showing the damage pattern.
        </li>
        <li>
          <strong>Photos of context.</strong> Other homes on your street with damage. Fallen tree
          limbs in the neighborhood. Fence panels blown down. This establishes that a damaging storm
          actually occurred.
        </li>
        <li>
          <strong>Interior damage photos.</strong> Water stains on ceilings, wet insulation in the
          attic, water running down walls. These prove the roof breach allowed water intrusion.
        </li>
        <li>
          <strong>Roofer&rsquo;s report.</strong> A written report from a licensed roofing contractor
          identifying storm damage patterns, distinguishing them from normal aging, and recommending
          full repair scope.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Interior Water Damage From a Roof Breach
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a storm damages your roof and water enters the home, you have two claims in one: the
        roof damage (exterior) and the resulting interior water damage. The interior damage — wet
        drywall, damaged ceilings, ruined insulation, stained paint, warped flooring — is all part
        of the same covered loss. The insurer must pay for both the roof repair and the interior
        restoration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not let the insurer separate these into different claims or argue that interior water
        damage is somehow not related to the roof breach. One storm, one loss, one claim. The
        interior damage is the direct and proximate result of the covered roof damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Choosing Your Contractor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You choose the roofer. The insurer cannot force you to use their &ldquo;preferred&rdquo;
        vendor, their &ldquo;network contractor,&rdquo; or anyone else. Under California law, you have the right to hire any licensed contractor you wish (10 CCR &sect;2695.9(b)).
        See our guide on{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] hover:underline">
          choosing your contractor
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tips for selecting a roofer for an insurance claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Licensed, bonded, and insured (verify at the Contractors State License Board)</li>
        <li>Experience with insurance restoration work — they know how to write a scope</li>
        <li>Willing to meet with the adjuster on the roof and advocate for proper scope</li>
        <li>Will provide a detailed written estimate broken into labor, materials, and overhead</li>
        <li>Does not demand money upfront before insurance pays (a common storm-chaser red flag)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Denial Tactics
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Normal wear and tear.&rdquo;</strong> The blanket excuse. Challenge with
          expert evidence showing specific storm damage patterns (creased shingles, directional
          damage, missing shingles in a pattern consistent with wind direction).
        </li>
        <li>
          <strong>&ldquo;We&rsquo;ll only pay for the damaged area.&rdquo;</strong> Invoke matching.
          You cannot put new shingles next to 15-year-old shingles and call it a repair.
        </li>
        <li>
          <strong>&ldquo;The roof needs replacement anyway.&rdquo;</strong> Irrelevant. If the storm
          damaged it, the storm caused the need for replacement — regardless of whether it would
          have needed replacement in five years from aging.
        </li>
        <li>
          <strong>&ldquo;Our engineer says it&rsquo;s not storm damage.&rdquo;</strong> Their
          engineer works for them. Get your own expert opinion. A roofer with 20 years of experience
          knows storm damage when they see it.
        </li>
        <li>
          <strong>&ldquo;You didn&rsquo;t report promptly.&rdquo;</strong> Many people do not
          discover roof damage until the next rain causes an interior leak. Late discovery is not
          late reporting. Report as soon as you discover the damage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Should You File a Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider your deductible. If the roof repair will cost $3,000 and your deductible is $2,500,
        the net recovery is only $500. In that case, paying out-of-pocket may make more sense to
        avoid a claim on your record. But if the damage is significant — a full roof replacement
        running $15,000 to $40,000 — filing is appropriate. Read our{' '}
        <Link href="/resources/should-i-file-a-claim" className="text-[#2E74B5] hover:underline">
          should I file a claim
        </Link>{' '}
        guide for a complete analysis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        One more thing: if your roof leak caused interior damage, the total claim value includes both
        the exterior roof repair and the interior restoration. A $5,000 roof repair paired with
        $8,000 of interior water damage is a $13,000 claim — well worth filing even with a high
        deductible. Do not evaluate the roof damage in isolation.
      </p>
    </>
  )
}
