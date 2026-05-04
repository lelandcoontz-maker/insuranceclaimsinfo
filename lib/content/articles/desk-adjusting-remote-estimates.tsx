import Link from 'next/link'

export const meta = {
  title: 'Desk Adjusting: When the Person Writing Your Estimate Has Never Seen Your Property',
  description:
    'Insurance carriers increasingly use desk adjusters and virtual adjusters who write Xactimate estimates from photos or satellite imagery without ever visiting your property. Learn what gets missed, your rights, and how to challenge a remote estimate.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Somewhere in an office building &mdash; possibly thousands of miles from your damaged home &mdash; a
        person is writing the estimate that will determine how much money you receive for your
        insurance claim. They have never walked through your front door. They have never touched
        your walls, looked behind your cabinets, or felt the soft give of water-damaged subfloor
        under their feet. They are working from photographs, satellite images, and perhaps a brief
        video call. And the estimate they produce will almost certainly miss things that only
        a physical inspection would reveal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is desk adjusting &mdash; also called virtual adjusting, inside adjusting, or remote
        estimating &mdash; and it has become one of the insurance industry&apos;s preferred methods
        for handling property claims. What carriers describe as an &quot;efficiency innovation&quot;
        is, for many policyholders, a process that systematically underpays claims by substituting
        technology for the irreplaceable act of actually looking at the damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Desk Adjusting?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A desk adjuster &mdash; sometimes called an inside adjuster or remote adjuster &mdash; is a
        claims professional who evaluates property damage and writes repair estimates without
        physically visiting the property. Instead of conducting an on-site inspection, the desk
        adjuster relies on some combination of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Policyholder-submitted photographs:</strong> The carrier asks you to take photos of
          the damage and upload them through an app or portal. The adjuster then uses these photos
          as the basis for their estimate.
        </li>
        <li>
          <strong>Satellite and aerial imagery:</strong> Services like EagleView and similar platforms
          provide high-resolution aerial photographs and measurements of roofs and exterior structures.
          The adjuster may never see the property from ground level.
        </li>
        <li>
          <strong>Video calls:</strong> In some cases, the adjuster will schedule a video call and ask
          you to walk through the property with your phone camera, pointing it at damage as they direct.
        </li>
        <li>
          <strong>Third-party field reports:</strong> Some carriers send a &quot;ladder assist&quot; or
          &quot;field inspector&quot; to take photos and basic measurements, then send those materials
          to a desk adjuster who writes the actual estimate. The person who visited your property has
          no authority to evaluate the claim.
        </li>
        <li>
          <strong>Prior inspection data:</strong> Underwriting photos, previous claim files, or
          property data from public records may be referenced to fill in gaps that the remote
          review cannot address.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The desk adjuster then opens Xactimate &mdash; the industry-standard estimating software &mdash; and
        builds an estimate based on what they can see in these materials. The resulting estimate is
        presented to you as though it represents the full scope of your loss. In many cases, it does not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Desk Adjusting Became the Norm
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting existed before the COVID-19 pandemic, but it was generally limited to small,
        straightforward claims &mdash; a stolen bicycle, a broken window, minor vandalism. The
        industry understood that complex property losses required boots on the ground. A competent
        adjuster needed to see, touch, and measure the damage. This was considered basic claims
        handling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Then the pandemic arrived. In March 2020, stay-at-home orders and social distancing
        requirements made in-person inspections impractical or impossible. Carriers pivoted rapidly
        to virtual inspections out of necessity, and the technology worked well enough to keep
        claims moving. Some carriers saw virtual claims adoption leap from single-digit percentages
        to over fifty percent of their total claims volume in a matter of weeks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But here is the part that should concern every policyholder: when the pandemic restrictions
        lifted and in-person inspections became safe again, most carriers never went back. They
        had discovered something remarkable &mdash; not that virtual adjusting was better for
        policyholders, but that it was dramatically cheaper for the company. A desk adjuster
        working from an office can process three to five times more claims per day than a field
        adjuster who must drive to each property, conduct a hands-on inspection, and travel to the
        next appointment. The cost savings were enormous, and the claims were settling for less money.
        From a carrier&apos;s perspective, this was the best of both worlds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What started as a temporary pandemic accommodation became a permanent business model. Today,
        desk adjusting is the default approach for many carriers across a wide range of claim types
        and values &mdash; including complex losses that genuinely require in-person evaluation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Gets Missed When Nobody Visits Your Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental problem with desk adjusting is straightforward: photographs and video cannot
        capture everything that matters. A trained adjuster physically present at the property
        uses all of their senses and professional judgment to evaluate damage. A desk adjuster
        is limited to what a camera lens happened to capture &mdash; and cameras are remarkably
        poor at documenting the full scope of property damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hidden Damage Behind Walls and Ceilings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water intrusion does not stay visible. It migrates through wall cavities, wicks up through
        drywall, saturates insulation, and damages framing members &mdash; all behind finished
        surfaces that look fine in a photograph. A field adjuster can use moisture meters to detect
        elevated moisture levels in walls, floors, and ceilings. They can identify staining
        patterns that suggest concealed migration. They can feel soft drywall, notice musty odors,
        and observe subtle warping that a photograph will never reveal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A desk adjuster working from photos sees only what is visible on the surface. If the
        drywall has not yet bubbled or stained, the damage behind it simply does not exist in their
        estimate. This is how water losses routinely get underscoped &mdash; the adjuster
        documents the visible water stain on the ceiling but misses the saturated insulation,
        damaged joists, and compromised subfloor above it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Measurements That Photos Cannot Provide
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate estimates are built on measurements &mdash; room dimensions, wall heights,
        cabinet linear footage, countertop square footage, and dozens of other quantified values.
        A field adjuster takes these measurements on-site with a laser measure or tape. A desk
        adjuster must estimate dimensions from photographs, use satellite measurements for exterior
        features, or rely on whatever the policyholder can provide. The result is frequently
        inaccurate, and the inaccuracies almost always favor the carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a desk adjuster underestimates room dimensions by a few square feet per room, the
        compounding effect across an entire property can reduce the estimate by thousands of
        dollars. The adjuster is not deliberately lying about measurements &mdash; they simply
        cannot measure what they have not visited.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conditions That Affect Repair Complexity
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all repairs are created equal. A field adjuster can observe conditions that significantly
        affect repair costs but are invisible in photographs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Access limitations:</strong> Tight staircases, narrow hallways, limited parking, or
          properties on hillsides that require special equipment or additional labor to access work areas.
        </li>
        <li>
          <strong>Existing construction methods:</strong> Older homes with plaster-and-lath walls,
          custom millwork, or unusual framing that require more labor-intensive repair techniques
          than standard drywall replacement.
        </li>
        <li>
          <strong>Matching challenges:</strong> Discontinued flooring, custom tile patterns, or
          textured ceilings that cannot be patched &mdash; requiring replacement of larger areas to
          achieve a{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] underline">
            uniform appearance
          </Link>.
        </li>
        <li>
          <strong>Code compliance issues:</strong> Visible electrical, plumbing, or structural
          conditions that will trigger code upgrade requirements once a repair permit is pulled.
        </li>
        <li>
          <strong>Asbestos and lead paint:</strong> Older homes may contain materials that require
          testing and special handling before any demolition or repair work can begin. A photograph
          cannot identify asbestos-containing materials or lead-based paint.
        </li>
        <li>
          <strong>Secondary and consequential damage:</strong> Warped doors that no longer close
          properly, cracked grout from structural movement, misaligned cabinets, or electrical
          issues caused by water intrusion &mdash; all observable on-site but easily missed
          in photos.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Human Senses That Technology Cannot Replace
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A photograph is a two-dimensional snapshot of a three-dimensional problem. It cannot convey
        the smell of mold behind a wall. It cannot communicate the spongy feel of water-damaged
        subfloor. It cannot capture the sound of a joist creaking under compromised load capacity.
        Experienced field adjusters rely on these sensory cues constantly. The musty odor in a
        closed room tells them to look further. The slightly uneven floor suggests subfloor damage
        that extends beyond the visible stain. The hollow sound when tapping drywall indicates
        delamination that the surface does not yet show.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of this information reaches a desk adjuster. They work in a sensory vacuum, making
        decisions about damage they can only partially perceive.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Photo Inspection Trap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most consequential aspects of desk adjusting is how carriers gather the
        photographic evidence they rely upon. Rather than sending a trained professional to
        document the damage, many carriers now ask the policyholder to serve as their own
        inspector. You receive an email or text message directing you to download an app, take
        photographs of the damage from specified angles, and upload them for the adjuster to review.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates an inherent problem: you are not a trained claims professional. You do not
        know which angles matter, where to look for hidden damage indicators, what conditions
        are relevant to the estimate, or how to document damage in a way that ensures nothing
        is overlooked. The carrier is asking you to perform a function that requires training
        and expertise, then using your incomplete documentation as the definitive record of
        your loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider what happens in practice. The carrier asks you to photograph &quot;all visible
        damage.&quot; You take photos of the obvious water stain on the ceiling, the buckled
        section of flooring, and the peeling paint near the window. What you do not photograph
        &mdash; because you do not know to look for it &mdash; is the moisture wicking up behind
        the baseboard on the adjacent wall, the early signs of microbial growth in the cabinet
        toe kick, or the fact that the subfloor extends well beyond the area of visible buckling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The desk adjuster then writes an estimate based exclusively on what your photos show.
        When you later discover additional damage during repairs, you face the burden of
        supplementing the claim &mdash; a process that can take weeks or months and that many
        policyholders do not know how to navigate effectively. The carrier has effectively shifted
        both the investigative burden and the risk of an incomplete inspection onto the policyholder.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier&apos;s Motivation: Follow the Money
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding why carriers have embraced desk adjusting requires understanding the
        economics. The math is not complicated, and it overwhelmingly favors the insurance company.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Volume and Throughput
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A field adjuster who drives to properties, conducts physical inspections, and writes
        estimates on-site can typically handle two to four inspections per day, depending on
        geographic spread and claim complexity. A desk adjuster, working from their computer,
        can review photos and produce estimates for ten to twenty claims per day. The productivity
        multiplier is staggering &mdash; the carrier can process the same volume of claims with
        a fraction of the adjusting staff.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lower Adjuster Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Field adjusters command higher compensation than desk adjusters. They require vehicles,
        fuel, equipment, and travel time &mdash; all of which the carrier pays for directly or
        indirectly. Desk adjusters need only a computer, an Xactimate license, and an internet
        connection. During catastrophe events, carriers historically deployed armies of independent
        adjusters at significant per-claim cost. Desk adjusting allows carriers to handle surge
        volume without proportionally increasing field staff.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lower Claim Payments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the factor that carriers rarely discuss publicly. When an adjuster does not visit
        the property, they inevitably miss damage. Missed damage means a smaller estimate. A
        smaller estimate means a smaller payment. Across thousands of claims, even modest per-claim
        underpayments compound into enormous savings for the carrier. Whether this outcome is the
        deliberate intent or merely a predictable consequence of the desk adjusting model, the
        financial result is the same: policyholders receive less money than their claims warrant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier will never frame it this way, of course. The official narrative emphasizes
        &quot;speed,&quot; &quot;convenience,&quot; and &quot;getting you paid faster.&quot; These
        benefits are real in some cases &mdash; nobody wants to wait three weeks for an adjuster
        to show up for a simple claim. But when &quot;faster&quot; also means &quot;less
        thorough,&quot; the policyholder should ask who is truly benefiting from the acceleration.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Desk Adjusting Is Appropriate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every claim requires an in-person inspection. Desk adjusting can be a reasonable
        approach for certain types of losses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Very minor, surface-level damage:</strong> A single broken window, a small
          section of damaged siding from a thrown rock, or a toilet overflow that was cleaned
          up immediately and affected only a small area of visible flooring.
        </li>
        <li>
          <strong>Theft claims with no property damage:</strong> When items were stolen but the
          property itself was not damaged, a desk review of the police report and receipts may be
          sufficient.
        </li>
        <li>
          <strong>Claims where damage is fully visible and self-contained:</strong> A fallen tree
          limb that damaged a fence section, with no potential for hidden or secondary damage.
        </li>
        <li>
          <strong>Supplemental reviews for previously inspected claims:</strong> When a field adjuster
          already conducted an initial inspection and a supplement involves clearly documented
          additional items, a desk review of the supplemental documentation may be reasonable.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The common thread is that these are simple, small, and transparent losses where photos
        can reasonably capture the full scope of damage and there is little risk of hidden or
        secondary damage being missed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Desk Adjusting Is Not Appropriate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem arises when carriers apply the desk adjusting model to claims that demand
        physical inspection. These include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Water losses of any significant scope:</strong> Water migrates. It travels through
          wall cavities, along electrical conduits, and underneath flooring. The visible damage
          is almost never the full extent of the problem. Moisture mapping requires physical
          presence and instrumentation.
        </li>
        <li>
          <strong>Fire and smoke losses:</strong> Smoke travels through the entire HVAC system and
          permeates soft goods, insulation, and concealed spaces. Char depth and structural
          integrity cannot be assessed from photographs.
        </li>
        <li>
          <strong>Roof claims with potential interior damage:</strong> Satellite imagery can show
          missing shingles but cannot reveal underlayment condition, decking integrity, attic
          moisture intrusion, or interior water staining that has not yet become visible.
        </li>
        <li>
          <strong>Large losses:</strong> Any claim of significant value warrants the investment of
          an in-person inspection. The stakes are simply too high for both parties to rely on
          photographs as the sole basis for the estimate.
        </li>
        <li>
          <strong>Losses with potential hidden damage:</strong> Impact damage to walls that may have
          compromised framing. Foundation movement that may have affected plumbing. Hail damage
          to a roof system where the full extent of granule loss and mat damage requires close
          inspection of individual shingles.
        </li>
        <li>
          <strong>Older homes with non-standard construction:</strong> Properties built before
          modern building codes may contain materials, construction methods, and configurations
          that significantly affect repair costs and cannot be identified remotely.
        </li>
        <li>
          <strong>Any loss where the{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
            scope of damage
          </Link>{' '}
          is disputed:</strong> If you believe the carrier&apos;s estimate is missing damage,
          the resolution requires someone to look at the property &mdash; not at pictures of
          the property.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Regulatory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law does not explicitly prohibit desk adjusting. However, the Fair Claims
        Settlement Practices Regulations establish standards for claim investigation that a
        desk-only approach may fail to satisfy, depending on the circumstances.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Investigate Thoroughly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.7(d), every insurer must &quot;conduct and diligently pursue a
        thorough, fair and objective investigation.&quot; The regulation does not specify the
        form that investigation must take, but it does require that the investigation be
        &quot;thorough.&quot; When the nature of a loss is such that a remote review cannot
        reasonably capture the full scope of damage, relying exclusively on photos and satellite
        imagery may not satisfy this duty.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question is always whether the investigation conducted was adequate given the
        circumstances of the particular claim. For a small, straightforward loss, a photo review
        may constitute a thorough investigation. For a complex water intrusion claim with potential
        concealed damage, it almost certainly does not. The regulation demands that the
        investigation fit the claim &mdash; not that every claim fit the carrier&apos;s preferred
        investigation method.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Unfair Claims Settlement Practices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 790.03(h) prohibits a range of unfair claims settlement
        practices, including the failure to adopt and implement reasonable standards for the prompt
        investigation and processing of claims. When desk adjusting produces systematically
        inadequate investigations &mdash; because the method is inherently incapable of
        capturing the full scope of certain types of losses &mdash; it raises the question
        of whether the carrier&apos;s investigation standards are &quot;reasonable&quot; within
        the meaning of the statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statute also prohibits not attempting in good faith to effectuate prompt, fair, and
        equitable settlements when liability has become reasonably clear. An estimate that is
        predictably low because the adjuster never visited the property may fall short of the
        &quot;fair and equitable&quot; standard. For a deeper analysis of these obligations, see
        our article on the{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          insurer&apos;s duty to investigate
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Other States Are Doing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several states have begun addressing virtual adjusting directly. Vermont issued a consumer
        advisory in 2026 reminding policyholders that they have the right to request an in-person
        inspection at any time during the claims process. Florida&apos;s statute permits electronic
        inspection methods but still requires that any physical inspection occur within 30 days of
        receiving proof of loss. The regulatory landscape is evolving, and more states are likely
        to establish explicit standards as complaints about desk-adjusted estimates continue to mount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even in the absence of a state-specific regulation prohibiting desk adjusting, the
        general duty to conduct an adequate investigation provides a legal foundation for
        challenging a remote estimate that missed damage. The standard is adequacy &mdash; did
        the insurer do enough to identify the full scope of loss? When the answer is no, the
        method of investigation becomes relevant to a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>{' '}
        analysis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Satellite Imagery Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers have invested heavily in aerial imagery platforms that provide overhead
        photographs and dimensional measurements of properties. These tools &mdash; including
        EagleView, which claims measurement accuracy within inches and is used by nine of the
        top ten insurance carriers &mdash; can provide roof dimensions, pitch calculations, and
        surface area measurements without anyone setting foot on the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For roof measurements alone, this technology can be remarkably accurate. But
        measurements are only one component of a roof estimate. What aerial imagery cannot
        provide is equally important:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The condition of individual shingles &mdash; granule loss, cracking, lifting, or
          hail impact marks that can only be identified at close range.
        </li>
        <li>
          Flashing condition around penetrations, valleys, and wall-to-roof transitions, where
          many leaks originate.
        </li>
        <li>
          The condition of the roof decking beneath the shingles, which may be rotted, warped,
          or otherwise compromised.
        </li>
        <li>
          Attic conditions &mdash; water staining on the underside of the decking, damaged
          insulation, or signs of prolonged moisture exposure.
        </li>
        <li>
          The condition of gutters, downspouts, fascia, and soffit components that are not
          clearly visible from overhead angles.
        </li>
        <li>
          Steep-slope or multi-story access challenges that significantly affect repair labor costs.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A desk adjuster who writes a roof estimate from aerial imagery and ground-level photos
        is making assumptions about every condition they cannot directly observe. In many cases,
        those assumptions result in a scope of work that does not match the reality of the damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bad Faith Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a desk-adjusted estimate systematically underpays because the adjuster never saw the
        property, the question of bad faith inevitably arises. California courts have long held
        that an insurer has a duty to conduct a thorough investigation before making claim
        decisions, as established in the landmark case{' '}
        <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809. The Supreme Court
        held that insurance companies have an obligation to conduct a thorough, unbiased
        investigation &mdash; and that the duty to investigate exists independently of the
        outcome of the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several patterns in desk adjusting raise potential bad faith concerns:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Choosing not to inspect when the claim warrants inspection:</strong> If the
          nature and complexity of the loss make a physical inspection the only reasonable way to
          assess the full scope, the deliberate choice to skip that inspection may constitute a
          failure to adequately investigate.
        </li>
        <li>
          <strong>Ignoring the policyholder&apos;s request for an on-site inspection:</strong> When
          a policyholder specifically asks the carrier to send someone to look at the property and
          the carrier refuses, the carrier is documenting its own unwillingness to investigate
          thoroughly.
        </li>
        <li>
          <strong>Using desk adjusting as a cost-containment strategy:</strong> If internal carrier
          communications reveal that desk adjusting was adopted primarily to reduce claim payouts
          rather than to improve claim handling, that motive is relevant to a bad faith analysis.
        </li>
        <li>
          <strong>Systematic underpayment across a category of claims:</strong> If desk-adjusted
          claims consistently result in lower payments than comparable field-inspected claims, the
          pattern itself may indicate that the process is not producing &quot;fair and equitable&quot;
          settlements as required by law.
        </li>
        <li>
          <strong>Refusing to supplement after hidden damage is discovered:</strong> When a
          contractor begins repairs and discovers damage that the desk adjuster missed &mdash; damage
          that a field inspection would have identified &mdash; the carrier&apos;s response to the
          supplement request becomes critical. Denying or delaying supplements for damage the carrier
          chose not to look for compounds the original investigation failure.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the most egregious cases &mdash; those in which field adjusters&apos; reports have
        been modified by desk adjusters who never visited the property &mdash; investigations
        have revealed estimates cut by orders of magnitude. In Hurricane Ian litigation, one
        adjuster reported that 44 of his 46 field reports were adjusted downward by desk personnel,
        with one estimate reduced from $488,000 to just $13,051. While not every case involves
        such dramatic manipulation, the structural incentives that enabled it remain embedded
        in the desk adjusting model.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Challenge a Desk-Adjusted Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim was handled by a desk adjuster and you believe the estimate is inadequate,
        you have several options.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Demand an On-Site Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put your request in writing. Inform the carrier that you do not believe a remote review
        can adequately assess the damage to your property and that you are requesting a physical,
        on-site inspection by a qualified adjuster. Cite the carrier&apos;s duty to conduct a
        thorough investigation under 10 CCR &sect; 2695.7(d) and the requirement for fair and
        equitable settlements under Insurance Code &sect; 790.03(h). Make clear that you are
        documenting the request and will consider a refusal as part of the claim file if a
        dispute arises later.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many carriers will comply when confronted with a written demand that references specific
        regulatory provisions. The carrier knows that refusing a reasonable inspection request
        looks problematic in litigation and before the Department of Insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Document What Photos Cannot Show
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While waiting for a reinspection or as part of your challenge to the desk estimate,
        document everything that the remote review missed. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Moisture meter readings showing elevated moisture behind walls and under flooring. A
          qualified water mitigation company can provide these readings with documentation.
        </li>
        <li>
          Odors or sensory conditions that photographs cannot convey. Describe them in writing
          as specifically as possible.
        </li>
        <li>
          Damage that was not visible when photos were taken but has since manifested &mdash;
          staining, warping, microbial growth, or structural movement.
        </li>
        <li>
          Code compliance issues that will affect the repair, identified by a licensed contractor
          who has visited the property.
        </li>
        <li>
          Access limitations, matching requirements, or construction complexities that affect
          repair costs and are not apparent from photographs.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Get Your Own Contractor&apos;s In-Person Assessment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Retain a licensed, qualified contractor to physically inspect the property and provide
        a detailed repair estimate. This estimate should be written in{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        whenever possible, as it allows a line-by-line comparison with the carrier&apos;s estimate
        and eliminates the carrier&apos;s common objection that &quot;we can&apos;t compare
        estimates written in different formats.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your contractor&apos;s in-person estimate significantly exceeds the desk-adjusted
        estimate, you have powerful evidence that the remote review was inadequate. The
        difference between the two estimates represents, in tangible dollar terms, what the desk
        adjuster missed by not visiting the property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Request Supplemental Review for Discovered Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If repairs have already begun and the contractor discovers damage that the desk estimate
        did not include, submit a supplement immediately. Document the discovered damage with
        photographs, a description of where it was found and why it was not visible before
        demolition, and a revised estimate reflecting the additional work. The carrier has an
        obligation to evaluate supplemental claims in good faith &mdash; and the fact that the
        damage was hidden in areas a desk adjuster never examined strengthens your position.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Engage Professional Representation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For significant claims where the desk-adjusted estimate appears materially deficient,
        consider engaging a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        or consulting with an attorney who handles insurance coverage disputes. A public adjuster
        will physically inspect the property, prepare a comprehensive estimate, and negotiate with
        the carrier on your behalf. If the claim involves potential bad faith based on the
        carrier&apos;s investigation failures, an attorney can evaluate whether litigation or a
        Department of Insurance complaint is warranted.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier&apos;s Preferred Contractors and Desk Adjusting
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting often works in tandem with another cost-containment strategy: the
        carrier&apos;s &quot;preferred&quot; or &quot;managed repair&quot; contractor program.
        When the carrier writes a desk-adjusted estimate and then directs you to one of their
        network contractors, the contractor may feel pressure to perform the work for the amount
        the carrier authorized &mdash; even if the scope is inadequate. The contractor who pushes
        back on an insufficient scope risks losing their position in the carrier&apos;s network.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This dynamic can lead to situations where the{' '}
        <Link href="/resources/carrier-contractor-admits-failure" className="text-[#2E74B5] underline">
          carrier&apos;s own contractor acknowledges that the scope is insufficient
        </Link>{' '}
        but feels constrained in what they can document or charge. The policyholder ends up
        caught between a desk-adjusted estimate that misses damage and a contractor who may not
        be fully advocating for a complete repair.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        AI and the Future of Desk Adjusting
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The trajectory of desk adjusting points toward even less human involvement in the
        inspection process. Carriers are increasingly deploying artificial intelligence systems
        that analyze photographs and automatically generate preliminary damage assessments.
        These AI tools can process photographs in minutes, identify common damage patterns, and
        produce initial estimates with no human adjuster involvement at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For straightforward claims &mdash; a clearly damaged fence section, a single broken
        window &mdash; AI-assisted estimation may prove both faster and sufficiently accurate.
        But for complex losses, AI amplifies the fundamental limitation of desk adjusting: the
        system can only evaluate what it can see. An AI analyzing photographs of a kitchen with
        a water stain on the ceiling will not detect the saturated insulation above it, the
        compromised joist beyond the stain&apos;s perimeter, or the early mold colonization in
        the wall cavity. It will produce a fast, confident, and incomplete estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Industry commentary suggests that the most effective systems will be &quot;hybrid
        models, using AI for speed and human adjusters for empathy, complex judgment, and
        customer advocacy.&quot; The concern for policyholders is whether carriers will invest
        in that hybrid approach or whether cost pressures will push them toward AI-only
        processing of claims that genuinely require human inspection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your carrier proposes to handle your claim through desk adjusting, take the following
        steps to protect your interests:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ask how the claim will be inspected.</strong> Before the process begins, ask
          whether the carrier intends to send an adjuster to your property. If they indicate a
          virtual or desk review, you know what you are dealing with from the outset.
        </li>
        <li>
          <strong>Take your own thorough documentation.</strong> Do not rely solely on the
          carrier&apos;s photo app. Take comprehensive photographs and video of all damage from
          multiple angles. Include wide shots for context and close-ups for detail. Document
          conditions that photos handle poorly &mdash; describe odors, soft spots, and unusual
          sounds in writing.
        </li>
        <li>
          <strong>Request an in-person inspection for any non-trivial claim.</strong> Put the
          request in writing. If the carrier resists, escalate to a supervisor and cite the
          regulatory standards discussed above.
        </li>
        <li>
          <strong>Have your property independently inspected.</strong> Do not wait for the
          carrier&apos;s estimate to learn whether the damage is more extensive than photos suggest.
          Engage a licensed contractor or{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
            qualified professional
          </Link>{' '}
          to conduct their own assessment.
        </li>
        <li>
          <strong>Compare the desk estimate against reality.</strong> When you receive the
          carrier&apos;s estimate, review it carefully against what you can observe at the
          property. Note every item of damage that the estimate does not address. This
          comparison becomes the foundation for your challenge.
        </li>
        <li>
          <strong>Keep every communication in writing.</strong> Document your request for an
          in-person inspection, the carrier&apos;s response, any explanations they offer for why
          a desk review is sufficient, and your objections. This paper trail is critical if the
          dispute escalates.
        </li>
        <li>
          <strong>Do not accept the first estimate as final.</strong> A desk-adjusted estimate is
          a starting point for negotiation, not a final determination of your loss. Supplement
          requests, reinspection demands, and independent estimates are all legitimate tools for
          ensuring you receive a fair settlement.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting is not inherently improper. For simple, small, fully visible claims, it
        can be a reasonable and efficient approach. The problem is not the existence of desk
        adjusting &mdash; it is the expansion of desk adjusting into claim categories where it
        is predictably inadequate. When a carrier applies a remote review to a complex loss
        that requires physical inspection, the result is a predictably incomplete estimate that
        predictably underpays the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance contract requires the carrier to pay for the damage to your property. The
        Fair Claims Settlement Practices Regulations require the carrier to conduct a thorough
        investigation to determine the extent of that damage. When the carrier&apos;s chosen
        investigation method is structurally incapable of identifying all of the damage, the
        investigation is not thorough, the estimate is not accurate, and the settlement is not
        fair. That is not an efficiency innovation &mdash; it is an investigation shortcut that
        benefits the carrier at the policyholder&apos;s expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You paid for coverage. You are entitled to an investigation that actually looks at what
        happened to your property. If the person writing your estimate has never seen your home,
        you should be asking why &mdash; and what they missed.
      </p>
    </>
  )
}
