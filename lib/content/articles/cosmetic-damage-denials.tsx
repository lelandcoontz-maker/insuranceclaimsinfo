import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Cosmetic Damage Denials: When Insurers Refuse to Fix What They Broke',
  description:
    'Insurance companies increasingly deny claims for "cosmetic" damage — dents, discoloration, mismatched repairs. Learn why this argument often fails and what you can do.',
  summary:
    'Insurers increasingly deny \'cosmetic\' damage, claiming dented metal roofs, siding, or fixtures still function. But cosmetic damage is often still covered physical damage, and denials hinge on policy exclusions and matching, which you can challenge.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You file a claim for hail damage to your siding, wind damage to your fence, or smoke
        discoloration on your walls. The adjuster inspects, agrees the damage exists, and then
        tells you it is &ldquo;cosmetic only&rdquo; — meaning the insurer will not pay to
        fix it because the damaged component still &ldquo;functions.&rdquo; This is one of the
        most frustrating and increasingly common claim-handling tactics in the industry.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&apos;s Argument
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cosmetic damage argument goes like this: your policy covers &ldquo;direct physical
        loss.&rdquo; If the damaged component still performs its intended function (the dented
        siding still keeps water out, the discolored wall is still structurally sound, the
        chipped granite still works as a countertop), then there is no &ldquo;loss&rdquo; — only
        an aesthetic issue the insurer claims is not covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers have even added &ldquo;cosmetic damage exclusions&rdquo; to their policies
        — endorsements that explicitly exclude damage that is &ldquo;cosmetic in nature&rdquo;
        or that affects only the &ldquo;appearance&rdquo; of a surface without impairing its
        function.
      </p>

      <CalloutBox variant="warning" title="Check Your Policy for Cosmetic Exclusions">
        <p>
          Some newer policies contain endorsements that exclude cosmetic damage from specific
          materials (often metal roofing, gutters, or siding). If your policy has one, the fight
          is harder — but not impossible. If your policy does <em>not</em> have a cosmetic
          exclusion, the insurer&apos;s argument is weak.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the &ldquo;Cosmetic Only&rdquo; Argument Fails
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">1. &ldquo;Direct Physical Loss&rdquo; Includes Appearance</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Multiple courts have rejected the notion that &ldquo;direct physical loss&rdquo; requires
        a functional impairment. Physical damage to property is physical damage — it does not
        matter whether the property still &ldquo;works.&rdquo; A dent in your siding is a physical
        alteration to the property. Discoloration from smoke is a physical change. The policy
        does not say &ldquo;direct functional loss&rdquo; — it says &ldquo;direct physical
        loss.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">2. Diminished Value Is Real Damage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if a component still &ldquo;functions,&rdquo; cosmetic damage reduces the property&apos;s
        value. A home with dented siding, mismatched shingles, or smoke-stained walls is worth less
        than an undamaged home. The policyholder purchased insurance to be made whole — and being
        left with diminished property value is not whole.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">3. &ldquo;Like Kind and Quality&rdquo; Means Appearance Matters</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The loss settlement provision requires the insurer to restore your property with materials
        of &ldquo;like kind and quality.&rdquo; Courts have interpreted this to include aesthetic
        qualities — not just functional performance. In a D.C. case, <em>National Presbyterian
        Church, Inc. v. Maryland Casualty Co.</em>, the court held that restoration to pre-loss
        condition includes matching the appearance of repaired and unrepaired areas. While this
        is not California authority, the principle is consistent with California&rsquo;s own
        matching requirement under 10 CCR &sect; 2695.9(a)(2).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">4. Cosmetic Damage Often Masks Functional Damage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dented metal roofing may have micro-fractures that compromise its weather resistance over
        time. Cracked siding allows moisture intrusion. Smoke-discolored surfaces may harbor
        contaminants. What looks &ldquo;cosmetic&rdquo; on the surface may have functional
        consequences that are not immediately visible.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Types of Cosmetic Damage Disputes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hail dents on metal roofing, gutters, or siding.</strong> The insurer says the
          metal still sheds water. You say the dents are visible, affect property value, and may
          compromise the coating that prevents corrosion.
        </li>
        <li>
          <strong>Smoke discoloration on walls, ceilings, and surfaces.</strong> The insurer
          says the walls are structurally fine. You say the discoloration affects habitability,
          air quality (if residual contaminants are present), and appearance.
        </li>
        <li>
          <strong>Mismatched repairs.</strong> The insurer replaces damaged shingles but the new
          ones do not match the existing roof. See our guide on{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">matching requirements</Link>.
        </li>
        <li>
          <strong>Chipped or cracked stone, granite, or tile.</strong> The insurer says the chip
          does not affect function. You say it is visible, reduces value, and cannot
          be repaired to match.
        </li>
        <li>
          <strong>Faded, stained, or discolored finishes.</strong> After water damage, hardwood
          floors may warp slightly or develop water marks. The insurer says they are still
          walkable.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Fight a Cosmetic Damage Denial
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Read your policy carefully.</strong> Does it contain a cosmetic damage exclusion?
          If not, the insurer has no policy basis for denying cosmetic damage. If it does, review
          the exact language — these exclusions are often narrowly written and may not apply to
          your specific situation.
        </li>
        <li>
          <strong>Get a contractor&apos;s opinion.</strong> A qualified contractor can assess
          whether the &ldquo;cosmetic&rdquo; damage actually compromises function — cracked
          coatings, moisture pathways, weakened materials. This converts a &ldquo;cosmetic&rdquo;
          claim into a functional one.
        </li>
        <li>
          <strong>Get a real estate appraisal.</strong> If the insurer says the damage is cosmetic
          and does not affect value, prove them wrong. A real estate appraisal showing
          diminished property value due to the unrepaired damage is powerful evidence.
        </li>
        <li>
          <strong>Argue &ldquo;like kind and quality.&rdquo;</strong> Point to the loss settlement
          provision. Your policy promises to restore your property to pre-loss condition. Leaving
          cosmetic damage unrepaired violates that promise.
        </li>
        <li>
          <strong>Invoke appraisal.</strong> If the dispute is about the value/extent of the
          damage (not whether it is covered), invoke the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal clause</Link>.
          An independent umpire is less likely to adopt the insurer&apos;s &ldquo;cosmetic only&rdquo;
          position than the insurer&apos;s own adjuster.
        </li>
      </ol>

      <CalloutBox variant="tip" title="California Regulation Supports You">
        <p>
          Under California&apos;s Fair Claims Settlement Practices (10 CCR § 2695.9), the insurer
          must repair, rebuild, or replace damaged property so as to &ldquo;restore the property
          to no less than its condition at the time of the loss.&rdquo; Leaving visible,
          value-reducing damage unrepaired fails this standard.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Insurer Calling Your Damage &ldquo;Cosmetic&rdquo;?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can challenge the insurer&apos;s classification and fight for full
          repairs — including the damage they are trying to dismiss.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
    </>
  )
}
