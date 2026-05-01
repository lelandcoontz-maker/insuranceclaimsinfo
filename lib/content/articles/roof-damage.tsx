import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Roof Damage Insurance Claims in California',
  description:
    'How to handle a roof damage insurance claim in California — common causes, what\'s covered, insurer inspections, matching disputes, and how to get the full settlement you\'re owed.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roof damage is the single most common homeowner insurance claim in the United States.
        In California, the causes are distinct from the rest of the country: wildfire and ember
        exposure, powerful Santa Ana winds, falling trees and branches, and the gradual failure
        of aging tile and shake roofs. Whether your claim gets paid — and how much you receive —
        depends on the cause of the loss, the type of policy you carry, and how well you document
        and present the damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Causes of Roof Damage
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fire and wildfire.</strong> Embers can travel miles ahead of the fire front,
          landing on roofs and igniting combustible materials. Radiant heat from a nearby fire
          can warp, blister, or melt roofing materials even without direct flame contact.
        </li>
        <li>
          <strong>Wind — especially Santa Ana winds.</strong> Santa Ana winds can reach 80+ mph,
          lifting shingles, cracking and displacing tiles, peeling back flashing, and creating
          entry points for water. Even winds below hurricane thresholds can cause significant
          damage to an older roof.
        </li>
        <li>
          <strong>Falling objects.</strong> Trees, large branches, and storm debris striking the
          roof can cause punctures, cracked tiles, broken sheathing, and structural damage to
          the framing underneath.
        </li>
        <li>
          <strong>Water intrusion.</strong> Failed flashing around chimneys, vents, and skylights;
          deteriorated valley flashing; and ice dams in mountain areas can allow water to enter
          the roof assembly and damage the decking, insulation, and interior finishes below.
        </li>
        <li>
          <strong>Hail.</strong> Less common in California than in the Midwest or South, but
          certain areas — particularly inland valleys and foothills — do experience hail events
          that can crack tiles, dent metal roofing, and bruise asphalt shingles.
        </li>
        <li>
          <strong>Weight of materials or equipment.</strong> Improperly installed solar panels,
          HVAC units, or satellite equipment can create point loads that crack tiles, compress
          underlayment, and cause leaks over time.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What&rsquo;s Covered vs. What&rsquo;s Not
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard HO-3 homeowners policy covers your roof against sudden, accidental damage
        from a covered peril — fire, wind, falling objects, vandalism, and so on. What it does
        not cover is wear and tear, gradual deterioration, maintenance issues, and neglect. This
        distinction sounds simple, but in practice it creates a large gray area that insurers
        use to their advantage routinely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common gray area: a covered peril (wind) damages a roof that was already aging.
        The insurer acknowledges the wind event but argues that most of the damage is pre-existing
        wear and tear. Under California law, the insurer owes for the damage caused by the covered
        peril — but not for the pre-existing condition. The dispute then becomes: how much of the
        damage is attributable to the wind vs. the age of the roof? This is where documentation,
        contractor opinions, and sometimes engineering reports become critical.
      </p>

      <CalloutBox variant="warning" title="FAIR Plan and DP-1 Policies">
        <p>
          If you carry a California FAIR Plan policy or a DP-1 (Dwelling Property 1) policy,
          your coverage is <strong>named peril only</strong>. That means only the specific perils
          listed in the policy are covered — everything else is excluded. Check your policy
          carefully to confirm that the cause of your roof damage is a listed peril before filing.
          If you are unsure, a{' '}
          <Link href="/resources/public-adjuster" className="text-sky-700 underline hover:text-sky-900">
            Public Adjuster
          </Link>{' '}
          can review your policy and advise you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After you file a roof damage claim, the insurer will send an adjuster — and in some cases
        a forensic engineer — to inspect the roof. How that inspection is conducted can make or
        break your claim.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ground-level and drone inspections.</strong> Many insurance company adjusters
          inspect roofs from the ground using binoculars or fly a drone overhead. While this may
          be sufficient for obvious damage, it is inadequate for identifying cracked tiles that
          are not displaced, compromised underlayment, damaged flashing details, and soft spots
          in the sheathing. Insist on a physical rooftop inspection for a thorough assessment.
        </li>
        <li>
          <strong>Engineering reports.</strong> Insurers sometimes hire forensic engineers to
          inspect the roof and issue a report on the cause and extent of damage. These reports
          can go either way — some support your claim, while others are written to minimize the
          insurer&rsquo;s exposure. If the insurer relies on an engineering report to reduce or
          deny your claim, you have the right to get your own engineer&rsquo;s opinion.
        </li>
        <li>
          <strong>Your right to your own inspection.</strong> You are not required to rely on the
          insurer&rsquo;s adjuster&rsquo;s findings. Hire a licensed roofing contractor to
          perform a thorough inspection and prepare a detailed written report of the damage.
          Get at least 2&ndash;3 contractor estimates so you have a range of professional opinions.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Disputes in Roof Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roof damage claims generate more disputes than almost any other type of property claim.
        Here are the ones I see most often:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Repair vs. replacement.</strong> When is a full roof replacement warranted
          instead of patching? If the damage is extensive enough that spot repairs will not
          restore the roof to its pre-loss condition — or if the remaining useful life of the
          undamaged portion is so short that a repair would be wasted money — a full replacement
          may be appropriate. Insurers almost always argue for repair.
        </li>
        <li>
          <strong>Matching.</strong> If only part of the roof is damaged, does the insurer owe
          for the entire roof to achieve a uniform appearance? Under California&rsquo;s{' '}
          <Link href="/resources/matching" className="text-blue-700 underline hover:text-blue-900">
            matching standards
          </Link>, the answer is often yes — particularly for tile and shake roofs where partial
          replacement creates a visible mismatch.
        </li>
        <li>
          <strong>Cosmetic vs. functional damage.</strong> Some policies contain endorsements
          that exclude &quot;cosmetic&quot; damage — dents in metal roofing, granule loss on
          asphalt shingles, etc. The dispute becomes whether the damage is truly cosmetic or
          whether it has reduced the functional life or performance of the roofing material.
        </li>
        <li>
          <strong>Depreciation.</strong> Insurers depreciate roofing materials based on age and
          condition. That is generally permissible. However, labor should not be depreciated — it
          costs the same to install a new shingle as an old one. The California Department of
          Insurance has addressed this issue. See the{' '}
          <Link href="/cdi-notices" className="text-blue-700 underline hover:text-blue-900">
            CDI guide
          </Link>{' '}
          for details.
        </li>
        <li>
          <strong>Scope disputes.</strong> The adjuster&rsquo;s estimate misses damaged areas —
          failing to include damaged ridge caps, deteriorated underlayment, damaged sheathing
          beneath the roofing material, or flashing that needs replacement. See our{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss guide
          </Link>{' '}
          for how to respond effectively.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Roof Matching
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Matching is one of the most significant issues in roof claims, especially in California
        where tile and shake roofs are common. If only a portion of the roof is damaged and the
        replacement tiles or shakes do not match the existing roof in color, profile, size, or
        weathered appearance, you may be entitled to far more than the insurer initially offers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR 2695.9(d) — California&rsquo;s matching regulation — the insurer must pay
        enough to achieve a <em>reasonable uniform appearance</em>. Depending on the roofing
        material and the extent of the mismatch, this can mean replacing an entire roof slope,
        multiple slopes, or even the entire roof if matching is impossible. Discontinued tile
        profiles, color shifts from decades of sun exposure, and unique clay or concrete tile
        shapes all make matching difficult or impossible, which strengthens your argument for
        broader replacement.
      </p>

      <CalloutBox variant="tip" title="Read the Full Matching Guide">
        <p>
          Matching is a complex topic with its own set of regulations, case law, and negotiation
          strategies. Read our{' '}
          <Link href="/resources/matching" className="text-sky-700 underline hover:text-sky-900">
            complete guide to matching
          </Link>{' '}
          for a deep dive into how to maximize your claim when partial repairs create a visible
          mismatch.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing Your Roof Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        How you handle the first days after discovering roof damage can significantly impact your
        settlement. Here is what to do:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document before repairs.</strong> Take extensive photos and video of the damage
          from every angle — on the roof, from the ground, and inside the attic or any areas
          where water has entered. Do this before any temporary repairs if it is safe to do so.
        </li>
        <li>
          <strong>Make emergency repairs to prevent further damage.</strong> You have a duty to
          mitigate further damage. Tarping the roof, boarding up openings, and addressing active
          leaks is not only smart — it is required by your policy. Keep all receipts for these
          emergency repairs; they are reimbursable under your claim.
        </li>
        <li>
          <strong>Do not let a contractor tear off the old roof before the insurer inspects.</strong>{' '}
          If the old roofing material is removed before the insurer has a chance to examine it,
          you lose critical evidence. Wait for the inspection, or at minimum, document every
          square foot of the existing roof in detail before removal begins.
        </li>
        <li>
          <strong>Get written estimates from licensed California contractors.</strong> Obtain at
          least 2&ndash;3 written estimates from licensed, insured roofing contractors. These
          estimates should detail the full scope of work, materials, labor, and any code upgrade
          requirements.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed walkthrough of the entire claims process from start to finish, see our{' '}
        <Link href="/resources/claims-process" className="text-blue-700 underline hover:text-blue-900">
          step-by-step claims guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roof claims can be straightforward when the damage is obvious and the insurer is
        cooperating. But when disputes arise over matching, repair vs. replacement, depreciation,
        or scope — and they arise frequently — a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can level the playing field. A PA can inspect the roof independently, prepare a
        comprehensive estimate, handle communication with the insurer, and negotiate on your
        behalf for the amount you are owed under the policy. If your claim has been underpaid, delayed, or denied, do not
        accept the insurer&rsquo;s final word —{' '}
        <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
          contact us
        </Link>{' '}
        for a free claim review.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
