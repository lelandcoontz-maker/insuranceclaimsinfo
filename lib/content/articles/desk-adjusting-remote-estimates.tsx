import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Desk Adjusting: When Your Insurance Company Writes an Estimate Without Seeing the Damage',
  description:
    'How insurance companies use desk adjusting to write repair estimates without inspecting your property, why remote estimates lead to systematic underpayment, and how policyholders can challenge inadequate investigations under California law.',
  summary:
    'Desk adjusting means the insurer writes your estimate without ever inspecting the property, which systematically underpays by missing damage. California law requires a reasonable investigation, so an estimate written sight-unseen can be challenged as inadequate.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Imagine hiring a doctor who diagnoses you by looking at a photograph someone else took of
        your symptoms. No examination. No questions. No stethoscope. Just a photo and a billing
        code. That is what happens when an insurance company &quot;desk adjusts&quot;
        your property damage claim. The adjuster assigned to evaluate your loss never visits your
        property, never walks through the damaged rooms, never touches the warped flooring or smells
        the smoke trapped in the insulation. Instead, they sit at a desk &mdash; sometimes hundreds
        or thousands of miles away &mdash; and write an estimate based on whatever limited
        information happens to be in the file.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting has become one of the insurance industry&apos;s most widespread cost-reduction
        practices, and it is one of the most significant contributors to underpaid property damage
        claims. Understanding what desk adjusting is, why carriers rely on it so heavily, and how it
        affects your settlement is essential for any policyholder navigating a property damage claim
        &mdash; and for any attorney evaluating whether a carrier conducted an adequate investigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Desk Adjusting?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting is the practice of writing or revising a damage estimate from a remote
        location without physically inspecting the property. The adjuster &mdash; sometimes called
        an inside adjuster, remote adjuster, or virtual adjuster &mdash; may rely on photographs
        submitted by the policyholder, images taken by a separate field inspector or independent
        adjuster, satellite imagery, drone footage, or in some cases little more than the
        policyholder&apos;s own description of the damage. The defining characteristic is that the
        person making decisions about what damage exists, what repairs are needed, and how much the
        carrier will pay has never set foot on the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, desk adjusting takes several forms. Sometimes the carrier sends a field
        inspector whose sole job is to take photographs and measurements, then routes those photos
        to a separate desk adjuster who writes the actual estimate. Other times, the carrier asks
        the policyholder to submit their own photographs through an app or online portal, and an
        adjuster reviews those photos to write an estimate sight unseen. In catastrophe situations,
        carriers may use aerial or satellite imagery to estimate roof damage without anyone ever
        climbing onto the roof or even entering the home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The common thread in all of these scenarios is the same: the person making the financial
        decisions about your claim has no firsthand knowledge of the damage. They did not see it,
        hear it, smell it, or touch it. They are working from a curated, incomplete set of
        information &mdash; and they are making determinations that directly affect how much money
        you receive to repair your home.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Carriers Rely on Desk Adjusting
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The motivation behind desk adjusting is straightforward: it saves the insurance company
        money. A field inspection requires an adjuster to travel to the property, spend time on site,
        and often incur per-diem expenses, mileage costs, and lodging fees if the property is far
        from the adjuster&apos;s base. A desk review requires only the adjuster&apos;s time at a
        computer. The cost differential per claim is substantial, and it multiplies across thousands
        of claims into enormous operational savings.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Volume and Throughput
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting allows carriers to handle a dramatically higher volume of claims with fewer
        adjusters. A field adjuster who drives to properties, conducts physical inspections, and
        writes estimates on-site can typically handle two to four inspections per day, depending on
        geographic spread and claim complexity. A desk adjuster, working from their computer, can
        review photos and produce estimates for ten to twenty files per day. During catastrophe
        surges &mdash; when wildfires, earthquakes, or other large-scale events generate thousands
        of claims simultaneously &mdash; carriers face enormous pressure to process claims quickly.
        Desk adjusting allows them to move files through the system at speed, even when they lack
        the field staff to inspect every property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lower Adjuster Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Field adjusters command higher compensation than desk adjusters. They require vehicles, fuel,
        equipment, and travel time &mdash; all of which the carrier pays for directly or indirectly.
        Desk adjusters need a computer, an Xactimate license, and an internet connection. During
        catastrophe events, carriers historically deployed large numbers of independent adjusters at
        significant per-claim cost. Desk adjusting allows carriers to handle surge volume without
        proportionally increasing field staff expenditures.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Less Discussed Advantage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is also a less openly discussed advantage for carriers. When an adjuster physically
        inspects a property, they develop firsthand knowledge. They see the extent of the damage.
        They talk to the policyholder. They may feel a professional obligation to document everything
        they observe. A desk adjuster, by contrast, only knows what is in the file. If the photos
        don&apos;t capture certain damage &mdash; and photos almost never capture the full picture
        &mdash; that damage may simply not appear in the estimate. The distance between the adjuster
        and the property creates a built-in filter that tends to reduce what gets documented and
        what gets paid. Whether this outcome is the deliberate intent or merely a predictable
        consequence of the methodology, the financial result is the same: policyholders receive less
        money than their claims warrant.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Problems with Desk Adjusting
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problems with desk adjusting are not theoretical. They are concrete, well-documented,
        and they recur across virtually every type of property damage claim. Each of the following
        issues represents a way in which desk adjusting systematically undermines the accuracy of
        the carrier&apos;s damage assessment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hidden Damage That Photos Cannot Capture
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property damage frequently extends well beyond what is visible to the naked eye &mdash; and
        photographs capture even less than what the eye can see in person. Water damage behind
        drywall, mold growth inside wall cavities, smoke residue in attic spaces, structural damage
        beneath flooring, compromised insulation, rotting framing members &mdash; none of these are
        visible in a standard photograph. They require hands-on inspection, often with specialized
        equipment such as moisture meters, thermal imaging cameras, or borescopes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a desk adjuster writes an estimate based solely on photographs, they are evaluating
        only the surface-level damage. The hidden damage &mdash; which is often the most extensive
        and most expensive component of the loss &mdash; goes unrecognized and unpaid. This is not
        a minor omission. In water damage claims, for example, the damage behind the walls
        frequently costs more to remediate than the visible damage on the surface. A desk-adjusted
        estimate that addresses only what photographs show may capture as little as 30 to 50 percent
        of the actual loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scale and Scope Distortion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photographs are inherently limited in their ability to convey scale. A crack that appears
        minor in a wide-angle photo may be structurally significant. Soot deposits that look faint
        on a camera screen may be pervasive throughout a room. Water staining that seems contained
        in an image may extend well beyond the frame. Without standing in the room and seeing the
        damage in three dimensions, an adjuster cannot accurately assess how extensive the damage
        actually is.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distortion is compounded when the policyholder is the one taking the photographs.
        Policyholders are not trained to document damage for estimating purposes. They may photograph
        the most dramatic damage while failing to capture more subtle but equally important damage
        elsewhere. They may take photos at angles that minimize the appearance of damage, not because
        they intend to, but because they simply do not know what an adjuster would need to see. The
        result is a photographic record that systematically understates the actual condition of the
        property. This is a{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss problem
        </Link>{' '}
        that begins before the estimate is even written.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Missing Items That Would Be Obvious in Person
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an adjuster walks through a damaged property, they notice things that no photograph
        captures. The door that no longer closes properly because the frame shifted. The cabinet
        drawer that sticks because the subfloor beneath the cabinet swelled with moisture. The slight
        bow in a ceiling that indicates water pooling above. The discoloration on a baseboard that
        suggests moisture wicking from beneath the floor. These are observations that come from
        physically being present in the space &mdash; moving through it, opening doors and drawers,
        looking up and down and behind furniture.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A desk adjuster reviewing photographs will miss these items not because they are careless,
        but because the information simply is not in the photographs. No amount of diligence at a
        computer screen can substitute for the sensory information that comes from a physical
        inspection. The result is an estimate that systematically omits items that any competent
        field adjuster would include &mdash; items that represent real damage requiring real repairs
        that the policyholder is entitled to recover.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inability to Assess Moisture, Odor, and Structural Integrity
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some of the most critical aspects of property damage assessment simply cannot be captured in
        any photograph or video. Moisture content in building materials requires a moisture meter
        pressed against the surface. Odor &mdash; particularly smoke odor, which permeates soft
        goods, insulation, and HVAC systems &mdash; can only be detected by a person physically
        present in the space. Structural integrity requires hands-on evaluation: pressing on walls,
        walking on floors, checking whether surfaces flex or give, examining connections and
        load-bearing elements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A desk adjuster cannot take a moisture reading. A desk adjuster cannot smell smoke in the
        attic. A desk adjuster cannot feel the soft spot in the subfloor under the kitchen linoleum.
        These are not luxuries of inspection &mdash; they are fundamental components of an adequate
        damage assessment. When a carrier skips these steps by desk adjusting a claim, the resulting
        estimate is not just incomplete; it is built on a foundation of ignorance about the actual
        condition of the property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No Firsthand Knowledge
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most fundamental problem with desk adjusting is epistemological: the adjuster
        making the decisions has no firsthand knowledge of the property or the damage. Everything
        they know is secondhand, filtered through photographs, reports, and descriptions written by
        other people. If those sources are incomplete &mdash; and they almost always are &mdash; the
        adjuster&apos;s conclusions will be incomplete as well.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters not only for the accuracy of the estimate but also for the adjuster&apos;s
        ability to defend their conclusions. When a dispute arises and the carrier cites its
        adjuster&apos;s estimate as the basis for the payment, the policyholder is entitled to ask:
        did the adjuster actually see the damage? If the answer is no, the evidentiary weight of
        that estimate is significantly diminished. An adjuster who never visited the property is
        testifying about conditions they never observed, based on evidence they did not personally
        gather.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Regulatory Framework and the Duty to Investigate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law imposes specific obligations on insurance companies regarding how they
        investigate claims. These obligations exist precisely because inadequate investigations
        lead to inadequate payments &mdash; and desk adjusting raises serious questions about
        whether a carrier has met its legal duties.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Conduct a Thorough Investigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        10 CCR &sect; 2695.7(d) requires that every insurer conduct a thorough,
        fair, and objective investigation sufficient to determine its liability under the policy.
        The California Fair Claims Settlement Practices Regulations (Cal. Code Regs., tit. 10,
        &sect;&sect; 2695.1&ndash;2695.17) further elaborate on what constitutes an adequate
        investigation. The{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          duty to investigate
        </Link>{' '}
        is not discretionary. It is a mandatory obligation that the carrier must fulfill before
        making a claims decision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical question is whether a desk review &mdash; without a physical inspection &mdash;
        can ever constitute a &quot;thorough&quot; investigation of a property damage claim. For
        minor claims involving straightforward, surface-level damage with clear photographic
        documentation, a desk review may arguably suffice. But for claims involving hidden damage,
        complex repairs, significant dollar amounts, or any situation where the full extent of the
        damage is not apparent from photographs alone, a desk review falls short of what California
        law requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Constitutes a &quot;Reasonable&quot; Investigation?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have consistently held that an insurer&apos;s investigation must be
        reasonable under the circumstances. What is reasonable depends on the facts of the claim.
        For a broken window with clear photographic documentation and an undisputed cause of loss,
        a desk review may be reasonable. For a fire loss affecting multiple rooms with potential
        smoke damage throughout the structure, or a water loss with likely moisture migration behind
        walls, refusing to physically inspect the property is difficult to justify as reasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard is not whether the carrier&apos;s investigation was convenient or cost-effective
        for the carrier. The standard is whether the investigation was adequate to determine the
        carrier&apos;s full liability. When a carrier chooses desk adjusting over a field inspection
        for reasons of cost or efficiency, it is prioritizing its own operational preferences over
        the quality of its investigation. That choice has consequences for the policyholder, and it
        may have legal consequences for the carrier as well.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fair Claims Settlement Practices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California Fair Claims Settlement Practices Act
        </Link>{' '}
        establishes minimum standards for how insurers must handle claims. Among those standards is
        the requirement that the insurer&apos;s investigation be sufficient to determine the full
        extent of its obligation to the policyholder. California Insurance Code &sect; 790.03(h)
        prohibits a range of unfair claims settlement practices, including the failure to adopt and
        implement reasonable standards for the prompt investigation and processing of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a desk adjuster writes an estimate that omits hidden damage, misses items that would
        have been apparent in person, and fails to account for conditions that only a physical
        inspection could reveal, the investigation is not sufficient. The carrier may have
        technically &quot;investigated&quot; the claim, but it has not investigated it thoroughly.
        The statute also prohibits failing to attempt in good faith to effectuate prompt, fair, and
        equitable settlements when liability has become reasonably clear. An estimate that is
        predictably low because the adjuster never visited the property may fall short of the
        &quot;fair and equitable&quot; standard.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CDI Complaints and Regulatory Enforcement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) accepts complaints from policyholders who
        believe their insurer has failed to properly investigate a claim. An insurer&apos;s refusal
        to physically inspect a property &mdash; particularly when the policyholder has requested an
        inspection or when the nature of the damage warrants one &mdash; is the type of conduct that
        may form the basis for a{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
          CDI complaint
        </Link>. The CDI has the authority to investigate these complaints, contact the insurer, and
        in some cases take enforcement action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a CDI complaint does not guarantee a particular outcome, but it creates a regulatory
        record and puts the carrier on notice that its investigation methods are being scrutinized.
        Carriers take CDI inquiries seriously because patterns of complaints can lead to market
        conduct examinations and regulatory penalties. A complaint specifically noting that the
        carrier refused to inspect the property before writing an estimate puts the carrier&apos;s
        investigation practices squarely at issue.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Desk Adjusting Is Especially Harmful
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While desk adjusting presents problems in virtually any property damage claim of meaningful
        complexity, certain types of losses are particularly ill-suited to remote evaluation. In
        these situations, the gap between what a desk adjuster can determine and what the actual
        damage entails is widest, and the resulting underpayment is most severe.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Water Damage Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage is perhaps the worst candidate for desk adjusting. Water follows gravity, wicks
        through porous materials, and travels along hidden pathways &mdash; inside wall cavities,
        beneath flooring, along framing members, and through insulation. The visible evidence of
        water damage &mdash; staining on a ceiling, warping on a floor, discoloration on a wall
        &mdash; typically represents only a fraction of the actual moisture intrusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Properly assessing water damage requires moisture meters, thermal imaging, and often
        destructive investigation &mdash; removing portions of drywall, pulling up flooring, or
        opening ceiling cavities to determine how far the water traveled. A desk adjuster reviewing
        photographs of surface staining has no ability to determine the extent of moisture behind
        the walls, whether mold growth has begun in concealed areas, or whether structural framing
        has been compromised. The resulting estimate will almost certainly understate the actual
        damage and the cost of proper remediation and repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a common scenario: a supply line breaks in a second-floor bathroom. The visible
        damage is a wet spot on the bathroom floor and a water stain on the first-floor ceiling
        below. The policyholder photographs these two areas and submits them through the carrier&apos;s
        app. The desk adjuster writes an estimate for drywall repair on the ceiling and flooring
        replacement in the bathroom. But the water also saturated the subfloor, traveled along the
        floor joists, soaked the insulation in the joist bays, wicked into the wall cavity between
        the first and second floors, and began promoting microbial growth in areas that will not be
        visible until demolition begins. None of this appears in the photographs. None of it appears
        in the estimate. The policyholder discovers the full extent during repairs and faces the
        burden of supplementing the claim &mdash; a process that can take weeks or months.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fire and Smoke Damage Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire and smoke damage presents unique challenges for remote assessment. Smoke is insidious
        &mdash; it penetrates every opening, seeps through HVAC systems, permeates soft goods, and
        deposits residue in areas far from the fire origin. Smoke odor, one of the most significant
        and costly components of fire damage, cannot be photographed. An adjuster must physically be
        present in the structure to smell the smoke, assess its intensity, and determine which areas
        and materials require cleaning, deodorization, or replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Soot deposits are similarly difficult to assess from photographs. What appears as a thin film
        in a photo may be a heavy, acidic residue that requires professional cleaning or replacement
        of the affected material. Char damage to structural elements, heat damage to wiring and
        plumbing, and smoke contamination of insulation and HVAC ductwork all require physical
        inspection to properly evaluate. A desk-adjusted fire or smoke claim is almost guaranteed
        to underestimate the scope of the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Complex Roofing Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing claims have become a frequent target for desk adjusting, particularly through the
        use of aerial and satellite imagery. Carriers increasingly rely on services that provide
        overhead images of roofs, which are then used by desk adjusters to determine damage and
        write estimates. While aerial imagery can identify some types of obvious damage &mdash;
        missing shingles, visible debris impact, large areas of displacement &mdash; it cannot
        detect many common forms of roof damage that are only apparent upon close physical
        inspection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage, for example, often presents as granule loss, bruising, or fracturing of
        shingles that is not visible from aerial photographs. Wind damage may loosen shingles
        without displacing them, creating a condition that is only apparent when an inspector
        physically lifts and examines individual shingles. Flashing damage, valley deterioration,
        and compromised underlayment are all conditions that require a hands-on roof inspection to
        identify. When a carrier relies on satellite imagery to desk adjust a roof claim, it is
        evaluating the roof from a perspective that cannot detect many of the most common and
        consequential forms of damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Large Losses Where Scope Is the Primary Dispute
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In large losses &mdash; those involving extensive damage to a significant portion of the
        property &mdash; the primary dispute is almost always about{' '}
        <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
          scope rather than price
        </Link>. The question is not whether a particular line item costs $50 or $75 per unit; the
        question is whether the carrier has identified all the damage and all the repairs needed
        to restore the property to its pre-loss condition. Desk adjusting a large loss is
        particularly problematic because the scope of damage in a large loss is inherently complex,
        involves multiple systems and areas of the property, and requires a comprehensive in-person
        evaluation to properly assess.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier desk adjusts a large loss, the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope gap
        </Link>{' '}
        between the carrier&apos;s estimate and the actual damage is typically enormous. This is not
        a matter of a few missed line items; it is a matter of entire categories of damage going
        unrecognized because no one from the carrier bothered to walk through the property and see
        the full extent of what happened.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Desk Adjusting Leads to Systematic Underpayment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting does not produce random errors that sometimes favor the carrier and sometimes
        favor the policyholder. It produces systematic underpayment. The reason is structural: every
        limitation of desk adjusting works in the same direction. Hidden damage is missed &mdash;
        that favors the carrier. Scale is understated &mdash; that favors the carrier. Items that
        would be obvious in person go undocumented &mdash; that favors the carrier. Moisture, odor,
        and structural conditions go unassessed &mdash; that favors the carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no corresponding mechanism by which desk adjusting leads to overestimation. A desk
        adjuster reviewing photos does not accidentally discover hidden damage that isn&apos;t in the
        photos. They do not add items that they cannot see. The information deficit created by remote
        adjusting is a one-way street: it can only reduce the scope of recognized damage, never
        expand it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that every time a carrier chooses to desk adjust a claim instead of conducting a
        field inspection, the likely outcome is a lower estimate. Across thousands of claims, this
        produces enormous savings for the carrier &mdash; and corresponding losses for policyholders
        who receive less than they are owed. The savings are not incidental to the practice; they are
        inseparable from it. A methodology that systematically prevents the identification of
        legitimate damage will systematically reduce the amount the carrier pays.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should understand that when they receive a desk-adjusted estimate, the number
        on that estimate is almost certainly lower than what a field-adjusted estimate would produce.
        The difference is not a matter of opinion or judgment; it is a predictable consequence of the
        information deficit inherent in desk adjusting. The carrier knows this. The practice persists
        not because it produces more accurate assessments, but because it serves the carrier&apos;s
        financial interests.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Duty to Investigate vs. the Right to Desk Adjust
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes argue that nothing in California law explicitly prohibits desk adjusting.
        This is technically true &mdash; no statute specifically says &quot;the insurer must
        physically inspect every property.&quot; But this argument misses the point. The law does not
        need to prohibit desk adjusting by name because it already requires something that desk
        adjusting frequently fails to achieve: a thorough and adequate investigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          duty to investigate
        </Link>{' '}
        is not satisfied by going through the motions of reviewing a file. It requires the carrier
        to gather sufficient information to make an informed decision about the claim. When the
        nature of the loss is such that a physical inspection is necessary to gather that
        information &mdash; and for most property damage claims of any significance, it is &mdash;
        the carrier cannot satisfy its duty to investigate by staying at its desk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question is not whether the carrier has a &quot;right&quot; to desk adjust. The question
        is whether the carrier has met its obligation to the policyholder. Those are different
        questions with different answers. A carrier may choose desk adjusting for its own operational
        convenience, but that choice does not relieve it of the duty to conduct an investigation
        adequate to determine the full scope of the policyholder&apos;s loss. If the desk review
        missed damage that a field inspection would have found, the carrier&apos;s investigation was
        not adequate &mdash; regardless of whether it was permitted by some narrow reading of the
        regulations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters because it shifts the burden of the argument. The carrier cannot
        simply say &quot;we desk adjusted and that is our right.&quot; The carrier must demonstrate
        that its desk adjustment was sufficient to identify all covered damage and arrive at an
        accurate estimate. When the policyholder can show that damage was missed &mdash; damage that
        would have been found during a physical inspection &mdash; the carrier&apos;s claim that its
        investigation was adequate becomes very difficult to sustain.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Separation of Inspector from Estimator
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One particularly problematic variant of desk adjusting involves splitting the inspection
        and estimating functions between two different people. The carrier sends a field inspector
        &mdash; sometimes a licensed independent adjuster, sometimes a less-qualified inspector or
        even a contractor &mdash; to the property to take photos and measurements. Those photos and
        measurements are then transmitted to a separate desk adjuster who writes the actual estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a disconnect that magnifies the problems of desk adjusting. The person who saw
        the damage does not write the estimate. The person who writes the estimate did not see the
        damage. The field inspector may have observed conditions &mdash; odor, moisture, structural
        concerns, damage in areas they did not photograph &mdash; that never make it into the file
        because documenting those conditions was not part of their limited assignment. The desk
        adjuster then writes an estimate based on whatever the field inspector chose to photograph
        and document, without any way to know what was left out.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This separation also creates accountability gaps. When the policyholder challenges the
        estimate, the desk adjuster can say they relied on the field inspector&apos;s documentation.
        The field inspector can say they only took photos &mdash; they did not write the estimate.
        Neither takes full responsibility for the accuracy of the result. If your claim has been
        subject to{' '}
        <Link href="/resources/adjuster-changes-mid-claim" className="text-[#2E74B5] underline">
          multiple adjuster changes
        </Link>, the separation between inspector and estimator becomes even more pronounced, as
        institutional knowledge about your claim is further diluted with each handoff.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Technology Is Not a Substitute for Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers increasingly point to technology as justification for desk adjusting. Drone
        imagery, satellite photography, 3D scanning apps, AI-powered damage detection &mdash; these
        tools are presented as making physical inspections unnecessary. Some carriers have invested
        heavily in these technologies and use them to argue that their remote assessments are just
        as good as, or even better than, traditional field inspections.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These arguments overstate what technology can do. Drones can photograph a roof from above,
        but they cannot detect bruising beneath the surface of a shingle. Satellite imagery can
        show whether a roof is missing shingles, but it cannot assess whether the underlayment is
        compromised. Apps that allow policyholders to scan their rooms generate useful dimensional
        data, but they cannot detect moisture, odor, or structural compromise. AI-powered tools can
        identify certain types of damage in photographs, but they cannot identify damage that
        isn&apos;t visible in photographs &mdash; and that is precisely the category of damage where
        desk adjusting falls shortest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Technology is a tool that can supplement a field inspection. It is not a replacement for one.
        When a carrier uses technology to justify the elimination of physical inspections, it is
        using innovation as a cost-cutting measure, not as a means of improving the accuracy of its
        assessments. Policyholders should not be persuaded by a carrier&apos;s technological
        arguments when the fundamental issue remains the same: the person writing the estimate has
        never seen the damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Desk Adjusting During Catastrophe Events
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Catastrophe events &mdash; wildfires, earthquakes, hurricanes, widespread flooding &mdash;
        create conditions that make desk adjusting both more tempting for carriers and more harmful
        for policyholders. When thousands of claims flood in simultaneously, carriers face
        legitimate logistical challenges in deploying enough field adjusters to inspect every
        property promptly. Desk adjusting allows them to begin processing claims immediately, even
        before they have the personnel to conduct field inspections.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But catastrophe events are precisely the situations where physical inspections matter most.
        The damage is typically more extensive, more complex, and more likely to include hidden
        components that photographs cannot capture. A wildfire-damaged home may have structural
        damage, smoke and soot contamination throughout, heat damage to systems, and environmental
        hazards that require careful on-site assessment. A flood-damaged property may have moisture
        throughout the structure that requires comprehensive testing to fully map. These are not
        claims that can be adequately evaluated from a desk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s staffing challenges during a catastrophe event are real, but they are the
        carrier&apos;s challenges, not the policyholder&apos;s. An insurer that collects premiums in
        an area prone to catastrophic events has an obligation to be prepared to handle claims when
        those events occur. Using desk adjusting as a response to staffing shortages may be
        understandable from a logistical perspective, but it does not reduce the carrier&apos;s
        obligation to conduct adequate investigations or pay the full amount owed on each claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Desk Adjusting and Supplemental Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting creates a downstream problem that extends well beyond the initial estimate.
        When the initial estimate is inadequate because the adjuster never visited the property, the
        policyholder must file supplemental claims for the missed damage. These supplements then
        require additional review, additional documentation, and often additional disputes &mdash;
        all of which could have been avoided if the carrier had conducted a proper inspection in the
        first place.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, the carrier desk adjusts the supplemental claim as well, creating a cycle
        in which the policyholder submits documentation of additional damage, the carrier reviews
        it from a desk, misses or disputes portions of it, and the policyholder must submit yet
        another supplement. This cycle can extend the claims process by months or even years, and
        it is deeply frustrating for policyholders who simply want their damage properly assessed
        and their claim properly paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The supplemental claim process also shifts the burden of investigation from the carrier to
        the policyholder. Instead of the carrier sending an adjuster to identify all the damage,
        the policyholder must repeatedly identify damage the carrier missed and submit evidence to
        prove it exists. This is the opposite of how the claims process is supposed to work. The
        carrier has the{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          duty to investigate
        </Link>; the policyholder should not have to serve as the carrier&apos;s field inspector.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Challenge a Desk-Adjusted Estimate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who receive a desk-adjusted estimate are not required to accept it. There are
        several concrete steps you can take to challenge an estimate that was written without a
        physical inspection of your property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Demand an On-Site Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most direct response to a desk-adjusted estimate is to demand that the carrier send a
        qualified adjuster to physically inspect your property. Put this demand in writing. Be
        specific: state that the estimate you received was written without a physical inspection,
        that you believe the estimate does not reflect the full extent of your damage, and that you
        are requesting an on-site inspection so the carrier can conduct an adequate investigation
        pursuant to its obligations under 10 CCR &sect; 2695.7(d).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier refuses, document that refusal carefully. A carrier&apos;s refusal to inspect
        a property when the policyholder has requested an inspection is significant evidence of an
        inadequate investigation. It is also the type of conduct that the CDI takes seriously in
        complaint proceedings. Your written demand and the carrier&apos;s written refusal create a
        record that may be important later if the dispute escalates to appraisal,
        mediation, or litigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Document What Photos Cannot Show
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While you are challenging the carrier&apos;s failure to inspect, take steps to document the
        damage that photographs alone cannot capture. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Moisture readings.</strong> If your claim involves water damage, have a qualified
          professional take moisture readings throughout the affected areas. Moisture meters provide
          objective, numerical data about the presence and extent of moisture in building materials
          &mdash; data that a desk adjuster cannot obtain from photos.
        </li>
        <li>
          <strong>Odor documentation.</strong> If smoke or other odors are present, document them in
          writing with specific descriptions of location, intensity, and type. Have other people
          &mdash; neighbors, contractors, restoration professionals &mdash; confirm the odor in
          signed statements if possible.
        </li>
        <li>
          <strong>Thermal imaging.</strong> Infrared thermal imaging can reveal moisture, heat loss,
          and other conditions hidden behind walls and ceilings. A thermal imaging report provides
          visual evidence of conditions that standard photographs cannot show.
        </li>
        <li>
          <strong>Video walkthroughs.</strong> While not a substitute for a professional inspection,
          a narrated video walkthrough of the damage can convey scale and context that still
          photographs cannot. Walk slowly through each affected area, narrating what you see, feel,
          and smell. Point out damage that may not photograph well.
        </li>
        <li>
          <strong>Detailed written descriptions.</strong> Create a room-by-room written description
          of all damage, including conditions that cannot be photographed: odors, soft spots in
          floors, doors that don&apos;t close properly, windows that don&apos;t seal, drafts, and
          any other sensory observations.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Get Your Own Professional Inspection and Estimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most effective ways to challenge a desk-adjusted estimate is to obtain your own
        estimate from a professional who has physically inspected the property. This may be a
        licensed public adjuster, a qualified contractor, or another estimating professional. The
        key is that the person writing the estimate has actually seen the damage firsthand.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you present your own estimate alongside the carrier&apos;s desk-adjusted estimate, the
        contrast often speaks for itself. Your estimate, based on a physical inspection, will
        typically include items and categories of damage that are entirely absent from the
        carrier&apos;s estimate. This comparison demonstrates concretely what desk adjusting misses
        and puts the carrier in the position of explaining why its adjuster &mdash; who never
        visited the property &mdash; produced a more accurate assessment than the professional who
        actually inspected it. Learning{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          how to challenge an Xactimate estimate
        </Link>{' '}
        is particularly valuable in this context, as it allows you to identify specific line items
        and categories that the desk adjuster omitted or underscoped.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. File a CDI Complaint if the Carrier Refuses to Inspect
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier refuses your request for a physical inspection and maintains its desk-adjusted
        estimate despite your documented evidence of additional damage, consider filing a complaint
        with the California Department of Insurance. Your{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
          CDI complaint
        </Link>{' '}
        should specifically address:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The fact that the carrier&apos;s estimate was written without a physical inspection of the
          property
        </li>
        <li>
          Your written request for an inspection and the carrier&apos;s refusal or failure to respond
        </li>
        <li>
          Specific damage that the desk-adjusted estimate missed, supported by your professional
          inspection or other documentation
        </li>
        <li>
          The specific California Insurance Code and regulatory provisions you believe the carrier
          has violated, including &sect; 2695.7(d)&apos;s requirement for a thorough investigation
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI complaint process is free, and you do not need an attorney to file one. While the
        CDI cannot force the carrier to pay a specific amount, a CDI inquiry can prompt the carrier
        to re-examine its investigation and reconsider its position. The regulatory record also
        becomes part of the carrier&apos;s complaint history, which the CDI monitors for patterns.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Attorneys Should Know About Desk-Adjusted Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For attorneys representing policyholders in coverage disputes or bad faith litigation, desk
        adjusting is a significant issue that deserves close attention during claim evaluation and
        discovery. Several aspects of desk adjusting are particularly relevant to legal analysis.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Discovery on investigation methods.</strong> Interrogatories and requests for
          production should specifically address who inspected the property, when, for how long,
          what equipment was used, and what the inspector&apos;s qualifications were. If the
          estimate was desk adjusted, these questions will reveal that fact clearly and establish
          the foundation for challenging the adequacy of the investigation.
        </li>
        <li>
          <strong>Adjuster deposition testimony.</strong> A desk adjuster who is deposed about
          their estimate faces a fundamental credibility problem. They must testify about conditions
          they never observed, in a property they never visited, based on documentation they did
          not personally gather. Careful deposition questioning can effectively demonstrate the
          limitations of the adjuster&apos;s knowledge and the inadequacy of the investigation.
        </li>
        <li>
          <strong>Reasonableness of the investigation.</strong> Whether the carrier&apos;s
          investigation was reasonable is both a claims handling issue under the{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            Fair Claims Settlement Practices Act
          </Link>{' '}
          and a potential bad faith issue. A carrier that desk adjusts a complex claim, pays an
          inadequate amount, and then refuses to re-inspect when presented with evidence of
          additional damage may face exposure for unreasonable investigation practices.
        </li>
        <li>
          <strong>Pattern evidence.</strong> If the carrier desk adjusts claims as a matter of
          routine policy, that pattern may be relevant to showing that the carrier&apos;s
          underpayment was not an isolated mistake but a predictable result of its chosen
          methodology. Internal carrier guidelines, training materials, and claims handling manuals
          may reveal whether desk adjusting is an intentional cost-reduction strategy.
        </li>
        <li>
          <strong>Comparative estimates.</strong> The contrast between a desk-adjusted estimate and
          an estimate prepared after a physical inspection is powerful evidence. When the
          field-inspected estimate consistently identifies damage categories that the desk-adjusted
          estimate missed entirely, the inadequacy of the desk review becomes self-evident.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Desk Adjuster&apos;s Perspective &mdash; and Its Limits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth acknowledging that individual desk adjusters are often doing the best they can
        within the constraints imposed by their employers. Many desk adjusters are experienced
        professionals who would prefer to inspect properties in person but are required by their
        carriers or adjusting firms to handle claims remotely. They are given a stack of photos,
        told to write an estimate, and expected to close the file. The systemic problem is not that
        desk adjusters are incompetent; it is that the system they work within prevents them from
        doing their job properly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, understanding the desk adjuster&apos;s constraints does not change the
        policyholder&apos;s rights. The policyholder purchased a policy that entitles them to
        indemnification for covered losses. The carrier&apos;s operational decision to use desk
        adjusting does not reduce the policyholder&apos;s entitlement by a single dollar. If the
        desk adjuster&apos;s estimate is inadequate because the desk adjuster lacked the information
        that a physical inspection would have provided, the carrier &mdash; not the policyholder
        &mdash; bears the consequence of that choice.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself Against Desk-Adjusted Underpayment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you suspect that your claim has been desk adjusted, or if you have already received an
        estimate that seems low and was not preceded by an in-person inspection, consider the
        following steps to protect your interests.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ask your adjuster directly.</strong> Ask the adjuster who wrote your estimate
          whether they personally inspected your property. If the answer is no, ask who did inspect
          it, what their qualifications are, and what documentation was provided to the estimator.
          Document these answers in writing.
        </li>
        <li>
          <strong>Review the estimate carefully.</strong> Compare the estimate against the actual
          damage you can observe. Look for entire rooms or areas that are not mentioned. Look for
          damage categories &mdash; moisture remediation, odor removal, structural repairs &mdash;
          that are absent. Look for measurements that do not match your property. Any of these
          discrepancies may indicate that the estimate was written without adequate information.
        </li>
        <li>
          <strong>Document everything.</strong> Take your own comprehensive photos and videos. Keep
          a written log of all damage you observe, including conditions that cannot be photographed.
          This documentation will be essential if you need to challenge the carrier&apos;s estimate
          and demonstrate what the desk adjuster missed.
        </li>
        <li>
          <strong>Engage a professional.</strong> A licensed public adjuster or qualified contractor
          who physically inspects your property can provide an independent assessment and estimate
          that serves as a counterweight to the carrier&apos;s desk-adjusted figure. This
          professional opinion, based on firsthand observation, carries significantly more weight
          than a remote estimate.
        </li>
        <li>
          <strong>Demand a re-inspection in writing.</strong> Cite the specific damage you believe
          the desk adjuster missed and explain why a physical inspection is necessary to properly
          assess it. Reference the carrier&apos;s duty to conduct a thorough investigation under
          &sect; 2695.7(d). If the carrier agrees to re-inspect, ensure that the re-inspection is
          thorough and that the inspector addresses the specific concerns you raised.
        </li>
        <li>
          <strong>Escalate when necessary.</strong> If the carrier refuses to inspect and refuses to
          adjust its estimate to reflect the actual damage, you have options: a{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
            CDI complaint
          </Link>, appraisal (if your policy provides for it), or consultation with an attorney
          experienced in insurance coverage disputes. Do not simply accept an inadequate
          desk-adjusted estimate because the carrier insists it is correct.
        </li>
        <li>
          <strong>Keep every communication in writing.</strong> Document your request for an
          in-person inspection, the carrier&apos;s response, any explanations they offer for why
          a desk review is sufficient, and your objections. This paper trail is critical if the
          dispute escalates to formal proceedings.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusting is not a neutral claims handling methodology. It is a practice that
        systematically limits the information available to the person writing the estimate, and it
        systematically produces estimates that understate the actual damage to the property. Carriers
        use it because it reduces their costs &mdash; both the direct costs of field inspections and
        the indirect costs that come from paying claims at their actual value. Policyholders bear
        the consequences in the form of inadequate payments for legitimate damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim has been desk adjusted, you are not powerless. You have the right to demand a
        physical inspection. You have the right to obtain your own professional assessment. You have
        the right to challenge an estimate that was written by someone who never saw your property.
        And you have access to regulatory mechanisms &mdash; including the California Department of
        Insurance &mdash; that exist specifically to hold carriers accountable for inadequate
        investigation practices.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier chose to write your estimate from a desk. You do not have to accept it from
        that same distance. Get the facts. Get them documented. And hold the carrier to the standard
        its policy &mdash; and the law &mdash; requires.
      </p>
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
