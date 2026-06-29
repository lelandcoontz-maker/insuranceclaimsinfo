import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Why New Materials Never Match: Color Matching, Material Aging, and What Your Insurance Company Owes',
  description:
    'Materials age through UV degradation, oxidation, and thermal cycling, making matching impossible after partial repairs. Learn the line of sight standard, state regulations, and case law that require insurers to restore visual uniformity.',
  summary:
    'New materials never perfectly match aged ones because of UV degradation, oxidation, and weathering. Many states and the line-of-sight standard require insurers to restore visual uniformity, meaning they may owe replacement of undamaged matching areas, not just the damaged spot.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of insurance matching standards as a Licensed California Public Adjuster. It is not
          legal advice. Matching regulations and case law vary by state, and the application of
          any specific rule to a particular claim depends on facts and policy language that
          should be evaluated by a licensed professional. If your insurer has refused to
          replace enough material to achieve a reasonably uniform appearance, consult a
          licensed attorney who specializes in insurance coverage disputes in your state.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A hailstorm damages the south-facing slope of your roof. Your insurance company agrees to replace the shingles on that slope. The contractor tears off the damaged shingles, installs new ones, and leaves. You walk to the curb and look up.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The south slope is a crisp, uniform charcoal. The north slope &mdash; the one the carrier refused to touch &mdash; is faded, weathered, and several shades lighter. The ridge line where the two slopes meet draws a sharp, visible boundary between old and new. Your home no longer looks like a home that was properly repaired. It looks like a home that was half-repaired. Because that is exactly what happened.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the matching problem, and it is one of the most common &mdash; and most consequential &mdash; disputes in residential property insurance claims. The carrier agrees that damage occurred. It agrees to pay for repairs. But it refuses to pay enough to restore the property to the condition it was in before the loss. Instead, it patches the damaged area and walks away, leaving the homeowner with a patchwork result that is visible from the street, obvious to neighbors, and damaging to property value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The matching problem is not a matter of aesthetic preference. It is a matter of contract performance. Your insurance policy promises to restore your property to its pre-loss condition. A home with mismatched materials is not in pre-loss condition. Before the storm, your roof was a single, uniform color. After the carrier&apos;s &quot;repair,&quot; it is two colors. That is not restoration. That is a breach.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Science of Material Aging</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every building material installed on the exterior of a home begins changing the moment it is exposed to the environment. This process is continuous, irreversible, and affects every component of the building envelope. By the time a loss occurs &mdash; whether it is five years, ten years, or twenty years after installation &mdash; the existing materials have undergone changes that no manufacturer can replicate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Ultraviolet Degradation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sunlight is the primary driver of color change in exterior building materials. Ultraviolet radiation &mdash; particularly UVA rays, which account for roughly 95% of the UV radiation reaching a rooftop &mdash; penetrates the surface of roofing, siding, paint, and other materials and breaks down the chemical bonds in pigments at the molecular level. UVB rays cause additional surface-level fading by degrading the outermost layer of color.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In asphalt shingles, UV radiation attacks the colored ceramic granules that give shingles their appearance. Over time, the pigments in the granule coatings degrade, and the granules themselves loosen and shed. The result is a progressive lightening or dulling of the shingle color that occurs unevenly across the roof &mdash; south-facing and west-facing slopes, which receive the most direct sunlight, fade faster than north-facing slopes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In vinyl siding, UV exposure breaks down the titanium dioxide and other stabilizers that manufacturers use to resist fading. Within a few years, the original factory color has shifted measurably. Within a decade, the shift is visible to the naked eye. This is not a defect in the material. It is physics. No pigment is immune to photodegradation. The only question is how fast it occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Oxidation and Thermal Cycling</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Metals, wood, and composite materials undergo chemical reactions with atmospheric oxygen that permanently alter their surface characteristics. In asphalt shingles, oxidation is one of the most significant aging mechanisms. UV radiation accelerates the oxidation of the asphalt binder, causing it to lose its volatile oils and plasticizers. The shingle becomes harder, more brittle, and darker or lighter depending on the original formulation. This process cannot be reversed, and it cannot be replicated by a manufacturer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Exterior building materials expand when heated and contract when cooled. This daily cycle &mdash; which can produce temperature swings of 100 degrees or more on a sun-exposed roof surface over a 24-hour period &mdash; creates cumulative stress that subtly alters the physical characteristics of the material. Surface textures change. Micro-cracking develops. The way light reflects off a thermally cycled material is different from the way it reflects off a new one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Biological Growth and Environmental Exposure</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Algae, lichen, moss, and mildew colonize exterior surfaces over time, creating organic staining patterns that become part of the visual character of the material. The dark streaks commonly seen on roofs in humid climates are caused by <em>Gloeocapsa magma</em>, a cyanobacterium that feeds on the calcium carbonate filler in shingle granules. Even after cleaning, biological growth leaves behind residual staining and surface etching.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salt air in coastal environments corrodes metals and degrades coatings. Industrial pollution deposits sulfur compounds and particulate matter on building surfaces. Acid rain etches stone and concrete. These environmental exposures are specific to each building&apos;s microclimate and cannot be replicated by installing new material.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Matching Problem in Practice</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Roofing:</strong> Roofing is the single most common context for matching disputes. A ten-year-old architectural shingle that was originally &quot;Weathered Wood&quot; no longer looks like a new shingle in the same color. The granule colors have shifted through UV exposure. Some granules have been lost. When new &quot;Weathered Wood&quot; shingles are installed on one slope of the same roof, the difference is immediately apparent. Anyone standing in the yard, walking down the sidewalk, or driving past the house can see it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Siding:</strong> Vinyl siding fades continuously from the day it is installed. Even if the manufacturer still produces the same color, the factory formulation may have changed, the pigment batch will be different, and the new panels will not have undergone years of UV degradation. Fiber cement siding is also subject to UV-driven color change &mdash; replacement panels will not match panels that have been on the building for a decade.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Hardwood Flooring:</strong> Hardwood flooring changes color with exposure to sunlight. Cherry darkens dramatically. Maple yellows. Oak shifts from golden to amber. When a water loss damages flooring in one room and the flooring is continuous through adjacent rooms, the new flooring will not match the aged flooring it abuts. The transition from new to old will be visible at every doorway and threshold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Countertops and Natural Stone:</strong> Natural stone countertops are quarried from specific veins and cut from specific blocks. Each slab has unique patterning, coloration, and veining. When a countertop is damaged, finding a replacement slab that matches a fifteen-year-old stone is often impossible. The original quarry may be depleted. The carrier&apos;s obligation is not to find the closest approximation &mdash; it is to restore the kitchen to its pre-loss appearance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Carrier&apos;s Position &mdash; and Why It Fails</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies have a standard response to matching claims: &quot;We owe only for the damaged portion. We are not responsible for upgrading or replacing undamaged property.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is in the policy. Every standard homeowners policy contains language requiring the carrier to pay the cost to repair or replace damaged property. Most policies use the phrase &quot;repair or replace with material of like kind and quality.&quot; Many promise to restore the property to its &quot;pre-loss condition.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pre-loss condition does not mean the physical condition of each individual component in isolation. It means the overall condition of the property as a unified whole. Before the storm, the roof was one color. After the carrier&apos;s partial repair, it is two colors. The property has not been restored to its pre-loss condition. A visible repair line is not pre-loss condition. It is evidence of an incomplete repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policy requires repair or replacement with materials of &quot;like kind and quality,&quot; the word &quot;like&quot; does not mean merely the same product category. It means materials that are comparable in appearance, performance, and character to the materials being replaced. New shingles that are a different shade than the existing shingles are not &quot;like&quot; the existing shingles in any meaningful sense.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When the Carrier&apos;s Own Contractor Proves Your Case</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful &mdash; and underutilized &mdash; pieces of evidence in a matching dispute is a statement from the carrier&apos;s own contractor, preferred vendor, or managed repair network that matching cannot be achieved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier sends its preferred vendor to perform the work. The contractor arrives at the property, looks at the existing roof, pulls out a new bundle of shingles, and tells the homeowner: &quot;These aren&apos;t going to match. The existing shingles have faded too much.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier&apos;s own chosen contractor confirms that matching is impossible, the carrier&apos;s position collapses. The carrier cannot claim there is a &quot;genuine dispute&quot; about whether matching is achievable when its own expert has confirmed it is not. The carrier cannot claim the homeowner is being unreasonable or demanding perfection when the contractor&apos;s admission confirms the mismatch is an objective, observable fact.
      </p>

      <CalloutBox variant="tip" title="Preserve This Evidence">
        <p>
          If a carrier&apos;s contractor acknowledges that matching cannot be achieved, request written confirmation immediately. Ask the contractor to hold a new shingle or siding panel next to the existing material and photograph the difference. This visual evidence is compelling to adjusters, appraisers, judges, and juries.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What the Policyholder Is Entitled To</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When matching cannot be achieved &mdash; and it often cannot &mdash; the policyholder is entitled to replacement of enough material to restore visual uniformity. The scope of that replacement depends on the specific circumstances, but the principle is consistent: what is visible together must match.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Line of Sight Standard</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most widely applied framework for determining the scope of matching is the &quot;line of sight&quot; test. The principle is straightforward: if a person can stand in one location and see both the repaired area and the unreplaced area at the same time, those areas must match.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Iowa&apos;s Administrative Code provides one of the clearest articulations of this standard. Iowa Admin. Code r. 191-15.44 states: &quot;When a loss requires replacement of items and the replaced items do not match in quality, color or size, the insurer shall replace as much of the item as is necessary to result in a reasonably uniform appearance within the same line of sight.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Applied to a roof, this means that if new shingles on the south slope do not match the existing shingles on the west slope, and both slopes are visible from the same vantage point, the carrier owes replacement of the west slope as well. Applied to siding, all elevations visible from a single vantage point must be uniform. Applied to flooring, all flooring visible from a single standing position must match.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">State Regulations and Legal Authority</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal framework for matching claims varies by state, but the trend is clearly in the policyholder&apos;s favor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The NAIC Model Regulation:</strong> The National Association of Insurance Commissioners adopted model language stating: &quot;When a loss requires replacement of items and the replaced items do not match in quality, color or size, the insurer shall replace all items in the area so as to conform to a reasonably uniform appearance.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California</strong> &mdash; California has adopted the NAIC matching language almost verbatim in its Fair Claims Settlement Practices Regulations. 10 CCR &sect; 2695.9(a)(2) provides: &ldquo;When a loss requires replacement of items and the replaced items do not match in quality, color or size, the insurer shall replace all items in the damaged area so as to conform to a reasonably uniform appearance.&rdquo; Note that California&rsquo;s operative phrase is &ldquo;the damaged area,&rdquo; NOT the explicit &ldquo;line of sight&rdquo; language adopted by Iowa and Texas. The contested term in California practice is &ldquo;the damaged area&rdquo; &mdash; carriers typically argue for a narrower scope (immediate area, slope section, single elevation), while policyholders argue for the scope actually required to achieve a reasonably uniform appearance, including, where the facts support it, the line-of-sight scope adopted in other jurisdictions. For a deeper analysis of how California depreciation interacts with matching scope &mdash; including the strong (but not appellate-settled) argument that undamaged items replaced solely for matching should not be depreciated on a replacement-cost policy &mdash; see our article on{' '}
        <Link href="/resources/broad-evidence-rule-acv" className="text-blue-700 underline hover:text-blue-900">
          how depreciation is calculated under California law
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Iowa</strong> &mdash; Iowa Admin. Code r. 191-15.44 adopts a &quot;line of sight&quot; standard requiring insurers to &quot;replace as much of the item as is necessary to result in a reasonably uniform appearance within the same line of sight.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Connecticut</strong> &mdash; Conn. Gen. Stat. Section 38a-316e provides: &quot;When a covered loss for real property requires the replacement of an item or items and the replacement item or items do not match adjacent items in quality, color or size, the insurer shall replace all such items with material of like kind and quality so as to conform to a reasonably uniform appearance.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Florida</strong> &mdash; Fla. Stat. Section 626.9744(2) states: &quot;When a loss requires replacement of items and the replaced items do not match in quality, color, or size, the insurer shall make reasonable repairs or replacement of items in adjoining areas.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Texas</strong> &mdash; Texas applies a &quot;line of sight&quot; standard under its unfair claims practices regulations. If a person can stand in one spot and see both the repaired area and the original area at the same time, those areas must match.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Key Case Law</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Cedar Bluff Townhome Condominium Association, Inc. v. American Family Mutual Insurance Co.</em></strong> (Minn. 2014) &mdash; This Minnesota Supreme Court decision is the most important matching case in the country. The court held that &quot;comparable material and quality&quot; means material that is suitable for matching, and that a reasonable match &mdash; not an identical match &mdash; is required. Because the replacement siding could not achieve a reasonable match with the faded existing siding, Cedar Bluff was entitled to full replacement of all siding panels on all twenty buildings.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Windridge of Naperville Condominium Association v. Philadelphia Indemnity Insurance Co.</em></strong>, 932 F.3d 1035 (7th Cir. 2019) &mdash; The Seventh Circuit affirmed summary judgment in favor of the condominium association. The court held that each building suffered a &quot;direct physical loss&quot; that required Philadelphia to pay to return the buildings to their pre-storm status &mdash; meaning uniform, matching siding on all four elevations. The court resolved ambiguity in the term &quot;covered property&quot; in favor of the policyholder.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Manufacturer Documentation Proves Your Case</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturers routinely discontinue product lines, colors, and profiles. Even when the same product is still in production, manufacturers cannot guarantee consistency between production runs. Shingle granules are sourced from natural minerals whose color varies by quarry and extraction batch. Most major shingle manufacturers include language in their product documentation acknowledging that color samples and prior installations should be understood as approximations, not guarantees.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a manufacturer&apos;s own documentation confirms that matching is unreliable, the carrier&apos;s argument that &quot;we&apos;ll just replace the damaged section with the same product&quot; is exposed as inadequate. The carrier is proposing a solution that the product&apos;s own manufacturer says will not work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting and Proving a Matching Claim</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Winning a matching dispute requires evidence. The policyholder or their representative should build a record that makes the mismatch undeniable.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Photography:</strong> Photograph the existing material in natural daylight. Photograph new replacement material next to existing material. Take photos at different times of day to capture worst-case lighting conditions.</li>
        <li><strong>Material samples:</strong> Obtain a sample of the existing material and place it side by side with the proposed replacement. The visual comparison is often more persuasive than any written argument.</li>
        <li><strong>Expert opinions:</strong> Contractors, roofing consultants, and materials specialists can provide written opinions on whether matching is achievable.</li>
        <li><strong>Manufacturer documentation:</strong> Obtain product specifications, color charts, and any disclaimers regarding color consistency or lot-to-lot variation. If the product has been discontinued, obtain documentation confirming that fact.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Related Reading</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the California-specific legal treatment under 10 CCR &sect; 2695.9(a)(2) and the
        depreciation-on-undamaged-items question, see our{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
          California matching article
        </Link>. For situations where the original materials cannot be replicated &mdash;
        asbestos cement siding, lead paint, discontinued products, or custom artisan work
        &mdash; see{' '}
        <Link href="/resources/matching-impossible-banned-materials" className="text-[#2E74B5] hover:underline">
          When Matching Is Impossible
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Conclusion</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The matching problem is fundamentally a question of contract performance. The insurance company sold a policy that promises to restore the property to its pre-loss condition. A partial repair that leaves the homeowner with mismatched materials, visible repair lines, and a diminished property does not fulfill that promise. The science is clear: materials age in ways that cannot be reversed or replicated. The law is clear: policies requiring repair with materials of &quot;like kind and quality&quot; or restoration to &quot;pre-loss condition&quot; encompass visual uniformity, not merely functional replacement. When a carrier proposes to replace only the damaged section and leave the homeowner with a patchwork result, the response should be equally clear: the policy requires more. Document the mismatch. Preserve the evidence. Invoke the applicable regulation. And hold the carrier to the bargain it made when it accepted the premium.
      </p>

      <CalloutBox variant="warning" title="Key Legal Citations">
        <p>
          NAIC Unfair Property/Casualty Claims Settlement Practices Model Regulation, Section 9.A(2); Iowa Admin. Code r. 191-15.44; Conn. Gen. Stat. Section 38a-316e; Fla. Stat. Section 626.9744(2); <em>Cedar Bluff Townhome Condo. Ass&apos;n v. American Family Mut. Ins. Co.</em>, 857 N.W.2d 290 (Minn. 2014); <em>Windridge of Naperville Condo. Ass&apos;n v. Philadelphia Indem. Ins. Co.</em>, 932 F.3d 1035 (7th Cir. 2019).
        </p>
      </CalloutBox>
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
