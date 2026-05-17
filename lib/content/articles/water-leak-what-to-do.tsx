import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'I Had a Water Leak — What Do I Do Right Now?',
  description:
    'Step-by-step guide for handling a water leak in your home: emergency mitigation, what insurance covers, mold prevention timeline, documentation tips, and what NOT to do before the adjuster arrives.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water is pouring into your home. Maybe a pipe burst. Maybe the water heater failed. Maybe
        you came back from vacation to a soaked floor and a smell you cannot identify. Whatever
        happened, you need to act fast. The decisions you make in the next few hours will determine
        how much damage occurs, whether mold grows, and whether your insurance claim succeeds or
        gets denied.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This guide tells you exactly what to do, in order, and explains what your homeowner&rsquo;s
        insurance covers — and what it does not.
      </p>

      <CalloutBox variant="warning" title="The 48-Hour Mold Clock Is Real">
        <p>
          Mold can begin colonizing wet building materials within <strong>48 to 72 hours</strong>.
          Once mold establishes, your claim becomes exponentially more complex and expensive. Many
          policies cap mold coverage at $5,000 or $10,000. The single most important thing you can
          do is get the water extracted and drying equipment running immediately. Every hour counts.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 1: Stop the Water
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Find the source and shut it off. If a supply line burst, turn off the main water shutoff
        valve. If you cannot locate the source, shut off the main anyway. If it is a roof leak during
        an active storm, you cannot stop it — move to containment (buckets, tarps) and skip to Step 2.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Know where your main shutoff is <em>before</em> an emergency. Most homes have it near the
        front hose bib or at the meter box. If you are in a condo, your unit shutoff may be under
        the kitchen sink or in a utility closet.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 2: Call a Water Mitigation Company
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is your first phone call — not the insurance company. A mitigation company (also called
        a water extraction or emergency services company) will extract standing water, set up
        industrial dehumidifiers and air movers, and monitor moisture levels until materials reach
        acceptable dryness. This is called{' '}
        <Link href="/resources/mitigation" className="text-[#2E74B5] hover:underline">mitigation</Link>{' '}
        — your contractual duty to prevent further damage.
      </p>

      <CalloutBox variant="tip" title="You Choose the Mitigation Company">
        <p>
          Your insurer does not get to pick your mitigation company. You have the absolute right to
          hire whoever you want. The insurer may &ldquo;recommend&rdquo; their preferred vendor — that
          vendor works for them, not you. Choose a company that is IICRC-certified (Institute of
          Inspection, Cleaning and Restoration Certification) and will document everything with photos,
          moisture readings, and a detailed scope of work.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 3: Document Everything Before Cleanup
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before anyone moves a single item or rips out a single piece of drywall, document the scene:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photographs and video.</strong> Shoot wide-angle photos of every affected room.
          Then close-ups of water lines on walls, damaged flooring, affected contents. Video a
          walkthrough narrating what you see.
        </li>
        <li>
          <strong>The source.</strong> Photograph the failed pipe, appliance, or point of entry. If
          the plumber replaces the failed component, keep the old part. Put it in a bag and label it.
        </li>
        <li>
          <strong>Affected contents.</strong> Photograph damaged furniture, electronics, clothing,
          documents. Do not throw anything away yet.
        </li>
        <li>
          <strong>Moisture readings.</strong> Your mitigation company should take initial moisture
          readings with a meter and document them in their report.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 4: Call Your Insurance Company
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now call your insurer to report the claim. You have already started mitigation — good. Your
        policy requires you to protect the property from further damage (this is your{' '}
        <Link href="/resources/first-72-hours-after-loss" className="text-[#2E74B5] hover:underline">
          duty to mitigate
        </Link>
        ). You do not need the insurer&rsquo;s permission to begin emergency mitigation. In fact,
        if you wait for their permission and mold grows, they will blame you for the additional damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you call, state the facts simply: what happened, when you discovered it, what you have
        done so far. Do not speculate about causes. Do not volunteer that the pipe &ldquo;might have
        been old.&rdquo; Just report what you found.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Covered: Sudden and Accidental vs. Gradual
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the central coverage question for every water leak claim. A standard HO-3 homeowner&rsquo;s
        policy covers <strong>sudden and accidental</strong> discharge or overflow of water from a
        plumbing system, appliance, or household fixture. It does not cover <strong>gradual</strong>{' '}
        leaks — water that has been seeping for weeks or months.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters enormously:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Covered:</strong> A supply line behind your washing machine bursts while you are
          at work. You come home to two inches of water. This is sudden and accidental.
        </li>
        <li>
          <strong>Covered:</strong> Your water heater tank fails catastrophically overnight. Sudden
          and accidental.
        </li>
        <li>
          <strong>Disputed:</strong> A slow leak under your slab has been going for an unknown period.
          The insurer will argue this is gradual. But the &ldquo;resulting damage&rdquo; doctrine
          may still provide coverage for the consequences.
        </li>
        <li>
          <strong>Typically excluded:</strong> A dripping faucet you ignored for six months that
          eventually rotted the vanity cabinet. That is maintenance neglect.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Resulting Damage&rdquo; Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most important concepts in water damage claims. Even when the <em>cause</em>{' '}
        is excluded (like gradual seepage), the <em>resulting damage</em> to other property may still
        be covered. California courts have held that the &ldquo;resulting loss&rdquo; provision in
        standard policies means the insurer must pay for the downstream consequences of an excluded
        peril, even though it need not pay to repair the excluded condition itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Example: Your slab leak was gradual (excluded). But the resulting damage to your hardwood
        floors, baseboards, and drywall may be covered — because those items were damaged by the
        water, and water damage is a covered peril. The insurer does not have to pay to fix the pipe
        itself, but it must pay for what the water damaged. This is established in cases like{' '}
        <em>Efficient Proximate Cause</em> analysis under California law. See our guide on{' '}
        <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
          water damage claims
        </Link>{' '}
        for deeper analysis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Mold Risk: Why Speed Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mold spores are everywhere — in the air, on surfaces, in dust. They are harmless until they
        find moisture and an organic food source (drywall paper, wood, carpet backing). Once
        conditions are right, visible mold colonies can form in 48 to 72 hours. After that, the
        problem expands exponentially.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most California homeowner policies either exclude mold entirely or cap coverage at $5,000 to
        $10,000. If your water loss turns into a{' '}
        <Link href="/resources/mold-claims" className="text-[#2E74B5] hover:underline">mold claim</Link>,
        you may face remediation costs of $20,000 to $100,000 with minimal coverage. The solution is
        aggressive, immediate drying. Get air movers and dehumidifiers running within hours, not days.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What NOT to Do Before the Adjuster Arrives
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a tension here. You must mitigate (extract water, begin drying) — but you should
        not demolish or discard evidence before the adjuster inspects. Here is where to draw the line:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do:</strong> Extract standing water. Set up drying equipment. Remove saturated
          contents to a dry area. Cover damaged areas if there is ongoing risk (e.g., tarp a hole).
        </li>
        <li>
          <strong>Do not:</strong> Rip out drywall before the adjuster sees it (unless your mitigation
          company documents mold growth requiring immediate removal for health reasons).
        </li>
        <li>
          <strong>Do not:</strong> Throw away damaged items. Set them aside, photograph them, and
          wait for the adjuster to inspect or authorize disposal.
        </li>
        <li>
          <strong>Do not:</strong> Make permanent repairs. Temporary emergency repairs are fine.
          Permanent work before the adjuster inspects invites a denial.
        </li>
        <li>
          <strong>Do not:</strong> Clean up all evidence of the water line. The high-water mark on
          walls proves the extent of the loss. Let the adjuster see it first.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Exception: Health Hazards">
        <p>
          If your mitigation company identifies mold growth, sewage contamination, or other health
          hazards, do not wait for the adjuster. Document thoroughly with photos and video, then
          proceed with removal. Your health comes first. The insurer cannot deny coverage because
          you removed a health hazard — but the documentation must be airtight.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Water Extraction and Drying: What to Expect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional water mitigation follows the IICRC S500 standard. Here is the typical process:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Extract standing water</strong> using truck-mounted or portable extraction units.
          The faster water is removed, the less it penetrates into subfloors and wall cavities.
        </li>
        <li>
          <strong>Remove saturated materials</strong> that cannot be dried in place — carpet pad
          (almost always discarded), insulation, and sometimes carpet depending on contamination
          category.
        </li>
        <li>
          <strong>Set drying equipment.</strong> Industrial air movers (not regular fans) direct
          airflow across wet surfaces. Commercial dehumidifiers pull moisture from the air. The
          combination creates a drying chamber effect.
        </li>
        <li>
          <strong>Monitor daily.</strong> A proper mitigation company checks moisture levels daily
          with penetrating and non-penetrating meters and adjusts equipment placement as needed.
        </li>
        <li>
          <strong>Document drying to goal.</strong> Materials must reach acceptable moisture content
          before equipment is removed. This typically takes 3 to 5 days for a moderate loss.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Pays for Mitigation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy covers reasonable mitigation costs as part of the claim. This is not
        a separate coverage — it is part of the loss. The insurer may argue specific line items are
        excessive, but they cannot deny mitigation as a category. Your duty to mitigate is in the
        policy. The cost of fulfilling that duty is their obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer later denies the underlying claim (arguing the water damage is not covered),
        they may also refuse to pay mitigation. This is often wrong — if you had a reasonable belief
        the loss was covered and acted in good faith to mitigate, the insurer should pay those costs
        regardless. Keep all mitigation invoices.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics on Water Leak Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;That&rsquo;s a maintenance issue.&rdquo;</strong> The insurer argues the
          leak was gradual and therefore excluded. Challenge this: demand they prove the leak was
          ongoing. If you had no notice of the leak before discovery, it was sudden from your
          perspective.
        </li>
        <li>
          <strong>&ldquo;We only owe for the room where the pipe failed.&rdquo;</strong> Water
          travels. It wicks up drywall. It migrates through subfloor. If moisture readings show
          damage in adjacent rooms, those rooms are part of the loss.
        </li>
        <li>
          <strong>&ldquo;We don&rsquo;t owe for the tear-out.&rdquo;</strong> To dry wall cavities
          and repair water-damaged materials, you often must remove drywall, flooring, and
          baseboards. Demolition and removal of damaged materials are part of the covered repair —
          not separate &ldquo;extra&rdquo; costs.
        </li>
        <li>
          <strong>&ldquo;Mold is excluded.&rdquo;</strong> Even if mold coverage is capped, the
          insurer still owes for the water damage that caused the mold. And if timely mitigation
          would have prevented the mold, but the insurer delayed the claim, the insurer may owe
          for mold remediation as a consequence of its own delay.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Documentation Checklist
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>Photos and video of all affected areas before any cleanup begins</li>
        <li>Photos of the source of the leak (failed pipe, appliance, fixture)</li>
        <li>The failed component itself — keep it in a bag</li>
        <li>Mitigation company&rsquo;s moisture mapping and daily readings</li>
        <li>Mitigation company&rsquo;s invoice and scope of work</li>
        <li>Plumber&rsquo;s report identifying the cause of the failure</li>
        <li>A written timeline: when you discovered the leak, what you did, who you called, when</li>
        <li>All communications with the insurer — dates, names, what was said</li>
        <li>Receipts for any emergency expenses (hotel if displaced, meals, supplies)</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Most straightforward water leak claims — a burst supply line, a failed water heater — resolve
        without major disputes if you mitigate quickly and document well. But if the insurer denies
        the claim, calls it &ldquo;gradual,&rdquo; or dramatically underpays the repair estimate, you
        may need professional help. A{' '}
        <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
          public adjuster
        </Link>{' '}
        can re-scope the damage and negotiate on your behalf. For coverage denials or bad faith delay,
        consult an attorney. The{' '}
        <Link href="/resources/first-72-hours-after-loss" className="text-[#2E74B5] hover:underline">
          first 72 hours
        </Link>{' '}
        are the most critical — act fast, document everything, and do not let the insurer&rsquo;s
        delay become your mold problem.
      </p>
    </>
  )
}
