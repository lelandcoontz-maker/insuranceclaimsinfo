import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Retaining Wall and Hillside Damage Claims in California",
  description:
    "California retaining wall and hillside damage: Other Structures limits, earth movement exclusion, efficient proximate cause, and engineering reports.",
  summary:
    'Retaining-wall and hillside failures spark complex disputes over the limited Other Structures coverage, the earth-movement exclusion, and engineering causation. California\'s efficient proximate cause doctrine can restore coverage when a covered peril triggered the failure.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Educational Information Only">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Coverage for retaining wall and hillside damage depends entirely on your specific
          policy language, the cause of loss, and applicable California law. For guidance on your
          particular situation, consult a licensed Public Adjuster or an attorney experienced in
          insurance coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s topography is defined by hills, slopes, canyons, and coastal bluffs.
        From the Hollywood Hills to the Oakland hills, from the San Diego canyons to the Santa
        Cruz mountains, millions of California homes are built on slopes that require retaining
        walls to hold the earth in place. When those walls fail &mdash; or when the hillside
        itself moves &mdash; the resulting insurance claim is one of the most complex and
        contentious in all of property insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the coverage structure for retaining wall and hillside claims, the
        earth movement exclusion and how California&rsquo;s efficient proximate cause doctrine
        can overcome it, the engineering report battle, code requirements, and the practical
        steps you need to take to protect your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        I. Other Structures and the Limit Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard HO-3 homeowner policy, retaining walls are classified as &ldquo;other
        structures&rdquo; and covered under the Other Structures category. The Other Structures
        limit is typically set at 10% of the dwelling limit. On a $600,000 dwelling policy,
        that gives you $60,000 of Other Structures coverage for everything on the property
        combined &mdash; the retaining wall, the detached garage, the fence, the shed, the
        pool house, and anything else that is not the primary dwelling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is immediately apparent: a major retaining wall failure can cost $50,000 to
        $500,000 or more to repair or replace, depending on the wall&rsquo;s height, length,
        construction, accessibility, and the engineering required. A 6-foot-tall, 80-foot-long
        concrete block retaining wall supporting a hillside driveway in the Hollywood Hills,
        with limited equipment access and a need for caissons drilled into bedrock, can easily
        cost $200,000 to $400,000 to replace. The 10% Other Structures limit is grossly inadequate
        for these losses.
      </p>

      <CalloutBox variant="important" title="Review Your Other Structures Limits Now">
        <p>
          If your property has a retaining wall &mdash; particularly one that supports a
          driveway, a portion of the structure, or a significant elevation change &mdash; review
          your Other Structures limits immediately. Many carriers allow you to increase the Other Structures limit
          above the standard 10%. Some also offer endorsements that extend the dwelling coverage to include
          retaining walls that are structurally integral to the dwelling. The time to increase
          these limits is before a loss, not after.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A. When a Retaining Wall Is Part of the Dwelling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some configurations, a retaining wall is not a separate &ldquo;other structure&rdquo;
        but is structurally integrated with the dwelling itself. A basement wall that also retains
        the hillside, a foundation wall that serves a dual purpose, or a wall that is physically
        attached to and supports the structure may be considered part of the dwelling and covered
        under the dwelling coverage rather than Other Structures coverage. This distinction matters enormously because
        dwelling limits are typically 10 to 20 times higher than Other Structures limits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The classification depends on the specific wall, its structural relationship to the
        dwelling, and the policy language. A licensed structural engineer&rsquo;s report
        documenting that the wall is integral to the dwelling&rsquo;s structural system is
        critical evidence for this argument. If the wall were removed, would the dwelling be
        structurally compromised? If yes, the wall is arguably part of the dwelling.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        II. The Earth Movement Exclusion: The Carrier&rsquo;s First Defense
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a retaining wall fails or hillside damage occurs, the insurance carrier&rsquo;s
        first move is almost always a denial based on the earth movement exclusion. The standard
        HO-3 policy excludes loss caused by &ldquo;earth movement,&rdquo; typically defined to
        include earthquake, landslide, mudflow, mudslide, sinkhole, subsidence, erosion, and
        similar earth movements &mdash; whether naturally occurring or man-made. At first glance,
        a retaining wall failure looks like a textbook earth movement claim: the earth moved,
        the wall failed (or the wall failed and the earth moved), and the carrier denies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the critical question is not whether earth moved. Earth almost always moves in a
        retaining wall failure. The critical question is <em>why</em> the earth moved. And in
        California, the answer to that question determines coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A. Efficient Proximate Cause: What Made the Earth Move?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California applies the{' '}
        <Link href="/resources/efficient-proximate-cause-doctrine" className="text-blue-700 underline hover:text-blue-900">
          efficient proximate cause doctrine
        </Link>{' '}
        to determine coverage when a loss involves both covered and excluded perils in a chain
        of causation. Under this doctrine, if a covered peril sets in motion a chain of events
        that leads to an excluded peril, the loss is covered. Conversely, if an excluded peril
        is the efficient proximate cause, the loss is excluded even if a covered peril played a
        role somewhere in the chain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For retaining wall and hillside claims, efficient proximate cause analysis requires
        identifying the predominant cause of the earth movement. The earth movement exclusion
        only applies when earth movement itself &mdash; in its natural, excluded sense &mdash;
        is the efficient proximate cause. When something else caused the earth to move, the
        analysis changes entirely.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        B. Common Causation Scenarios
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of the following scenarios involves earth movement, but the coverage outcome depends
        on what caused the earth to move:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Water Leak Causing Soil Saturation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A broken water supply line, a leaking sewer lateral, a failed irrigation system, or a
        broken pool pipe saturates the soil behind or beneath a retaining wall. The saturated
        soil loses its structural integrity, increases hydrostatic pressure against the wall, and
        the wall fails or the hillside moves. In this scenario, the efficient proximate cause is
        the water leak &mdash; a covered peril under most HO-3 policies &mdash; not the earth
        movement that followed. The chain of causation is: covered peril (water leak) &rarr;
        soil saturation &rarr; earth movement &rarr; wall failure and property damage. The earth
        movement exclusion should not bar coverage because a covered peril set the chain in
        motion.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Third-Party Negligence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A neighbor&rsquo;s grading project removes lateral support from your hillside. The
        city&rsquo;s storm drain system fails and diverts water onto your slope. A construction
        project uphill changes drainage patterns. In these scenarios, the efficient proximate
        cause may be negligence by a third party, which creates a subrogation opportunity or a
        direct third-party claim rather than an earth movement exclusion issue. Your insurance
        may or may not cover the loss initially, but if it does, the carrier has subrogation
        rights against the negligent party.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Tree Root Intrusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tree roots can undermine retaining walls by growing into, through, or beneath the wall
        foundation, displacing soil and compromising structural integrity. Coverage for tree root
        damage varies by policy. Some policies specifically exclude damage caused by tree roots;
        others do not. If tree root intrusion is a covered peril under your policy and it caused
        the earth to move, the efficient proximate cause analysis may support coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Earthquake
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Seismic activity is excluded under the standard HO-3 policy and requires a separate{' '}
        <Link href="/resources/earthquake-insurance" className="text-blue-700 underline hover:text-blue-900">
          earthquake insurance policy
        </Link>. If earthquake is the efficient proximate cause of the retaining wall failure,
        the standard policy will not cover the loss. California Earthquake Authority (CEA)
        policies have their own coverage terms, including a percentage deductible (typically
        5% to 25% of the dwelling limit) that can leave the policyholder with a significant
        out-of-pocket cost.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Natural Soil Creep and Settlement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pure gravitational creep &mdash; the slow, continuous downslope movement of soil under
        its own weight &mdash; and natural settlement are excluded as earth movement under the
        standard policy. If no covered peril initiated or accelerated the movement, the loss
        is excluded. This is the carrier&rsquo;s preferred characterization of virtually every
        retaining wall claim, which is why the engineering report is so critical.
      </p>

      <CalloutBox variant="warning" title="Causation Is Everything">
        <p>
          In a retaining wall or hillside claim, the single most important question is: what
          caused the earth to move? Do not accept a blanket earth movement denial without
          demanding that the carrier investigate the actual cause. If the carrier denies based
          on earth movement without determining why the earth moved, the denial is premature
          and potentially in violation of California&rsquo;s fair claims settlement practices
          regulations, which require a thorough investigation before denial.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        III. Anti-Concurrent Causation Clauses in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many modern policies include{' '}
        <Link href="/resources/anti-concurrent-causation" className="text-blue-700 underline hover:text-blue-900">
          anti-concurrent causation (ACC) clauses
        </Link>{' '}
        that attempt to exclude coverage whenever an excluded peril (like earth movement)
        contributes to a loss, regardless of whether a covered peril also contributed. These
        clauses typically state something like: &ldquo;We do not insure for loss caused directly
        or indirectly by any of the following. Such loss is excluded regardless of any other cause
        or event contributing concurrently or in any sequence to the loss.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, ACC clauses are unenforceable when a covered peril is the efficient
        proximate cause of the loss. California Insurance Code &sect; 530 provides that an insurer
        is liable for a loss of which the covered peril is the proximate cause, even though the
        excluded peril may have been a remote cause. Courts have consistently held that
        contractual ACC language cannot override this statutory rule. This is a critical
        protection for California policyholders in retaining wall and hillside claims: even if
        the policy contains ACC language, the carrier cannot use it to deny coverage when a
        covered peril (such as a water leak) was the efficient proximate cause of the earth
        movement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IV. Foundation Damage vs. Retaining Wall Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hillside loss events frequently damage both the retaining wall and the dwelling&rsquo;s{' '}
        <Link href="/resources/foundation-damage" className="text-blue-700 underline hover:text-blue-900">
          foundation
        </Link>. These are different structures covered under different parts of the policy
        (retaining wall as Other Structures, foundation as dwelling), but they are damaged
        by the same event. The coverage analysis is the same &mdash; efficient proximate cause
        determines coverage for both &mdash; but the limits and deductibles may differ.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When filing a claim involving both retaining wall damage and foundation damage, it is
        essential to document each separately: separate scoping, separate estimates, separate
        engineering analyses. Do not let the carrier lump everything together and deny the entire
        claim under a single earth movement denial. The retaining wall and the foundation may
        have different causes of damage, different coverage parts, and different limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        V. The Engineering Report Battle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In virtually every retaining wall and hillside claim of significant value, the coverage
        dispute comes down to competing{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-blue-700 underline hover:text-blue-900">
          engineering reports
        </Link>. The carrier hires a geotechnical engineer or geologist to inspect the site and
        determine the cause of the wall failure or earth movement. The policyholder, to protect
        their claim, should hire their own independent geotechnical engineer to do the same.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A. What the Carrier&rsquo;s Engineer Will Typically Conclude
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier-retained geotechnical engineers have a well-documented tendency to attribute
        retaining wall failures to excluded causes. The most common conclusions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Natural settlement&rdquo; or &ldquo;soil creep&rdquo;:</strong> The
          engineer concludes that the wall failed due to the natural, gradual movement of soil
          over time &mdash; an excluded earth movement. This conclusion is often reached without
          investigating whether a water source, drainage failure, or other covered peril
          contributed to or accelerated the movement.
        </li>
        <li>
          <strong>&ldquo;Pre-existing condition&rdquo; or &ldquo;deferred maintenance&rdquo;:</strong>{' '}
          The engineer notes that the wall showed signs of age, cracking, or deterioration prior
          to the claimed failure and attributes the failure to the wall&rsquo;s pre-existing
          condition rather than any sudden event. While pre-existing deterioration may be a
          contributing factor, it does not answer the question of what caused the failure to
          occur when it did.
        </li>
        <li>
          <strong>&ldquo;Inadequate original design&rdquo;:</strong> The engineer concludes that
          the wall was not adequately designed or constructed for the soil conditions, surcharge
          loads, or hydrostatic pressures it was subjected to. This may be true &mdash; many
          older retaining walls were built without engineering &mdash; but it still does not
          explain the triggering event. A wall that was marginally adequate for decades may have
          failed because a new water source saturated the soil, not because of some sudden
          realization that it was poorly designed.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        B. Why You Need Your Own Geotechnical Assessment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who relies solely on the carrier&rsquo;s engineering report is bringing a
        knife to a gunfight. The carrier&rsquo;s engineer has a financial incentive to reach
        conclusions that support denial &mdash; that is the nature of repeat retention by
        insurance carriers, as discussed in our article on{' '}
        <Link href="/resources/biased-insurance-experts" className="text-blue-700 underline hover:text-blue-900">
          biased insurance experts
        </Link>. Your own independent geotechnical engineer should:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Investigate all potential water sources:</strong> Check for broken supply lines,
          sewer laterals, irrigation systems, pool or spa leaks, HVAC condensate lines, and any
          other source of water that could have saturated the soil. This includes subsurface
          investigation (borings or test pits) to determine soil moisture content and compare it
          to normal conditions.
        </li>
        <li>
          <strong>Evaluate drainage conditions:</strong> Assess whether surface drainage, subsurface
          drainage, weep holes, or French drains were functioning properly. Determine whether
          changes to uphill drainage &mdash; from a neighbor&rsquo;s construction, city grading,
          or other causes &mdash; altered the drainage pattern affecting the wall.
        </li>
        <li>
          <strong>Document the failure mechanism:</strong> Determine exactly how the wall failed
          (overturning, sliding, structural failure of the wall itself, foundation bearing failure)
          and what forces caused that failure mode. Different failure mechanisms point to different
          causes.
        </li>
        <li>
          <strong>Establish the timeline:</strong> When did the wall first show signs of distress?
          Was the failure sudden or gradual? Did it correlate with any identifiable event (heavy
          rain, a water leak, nearby construction, an earthquake)?
        </li>
        <li>
          <strong>Review the carrier&rsquo;s engineering report:</strong> Critically evaluate the
          carrier engineer&rsquo;s methodology, assumptions, and conclusions. Identify what the
          carrier&rsquo;s engineer did not investigate, did not test, and did not consider.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Hire Your Engineer Early">
        <p>
          Do not wait until the carrier denies the claim to hire your own geotechnical engineer.
          Evidence deteriorates over time: water sources dry up, soil moisture normalizes, cracks
          propagate, and the site conditions change. The earlier your engineer inspects the site,
          the more accurately they can determine the cause of the failure. If you are filing a
          retaining wall or hillside claim, engage an independent geotechnical engineer within
          days of the loss &mdash; not weeks or months.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VI. Code Requirements for Retaining Wall Replacement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a retaining wall must be replaced, current California Building Code requirements
        often impose significant additional costs beyond the cost of simply rebuilding what was
        there before. These additional costs trigger{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Ordinance or Law coverage
        </Link>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Walls over 4 feet require engineering:</strong> The California Building Code
          requires retaining walls over 4 feet in height (measured from the bottom of the
          footing to the top of the wall) to be designed by a licensed civil or structural
          engineer. Many older retaining walls were built without engineering, particularly in
          rural areas or before permit requirements were strictly enforced. A licensed engineer&rsquo;s
          design for a replacement wall adds $3,000 to $15,000 or more in engineering fees.
        </li>
        <li>
          <strong>Building permits:</strong> Replacement retaining walls over 4 feet require a
          building permit. The permit process involves plan check fees, permit fees, and
          inspections. Some jurisdictions also require a grading permit for the associated
          earthwork.
        </li>
        <li>
          <strong>Drainage requirements:</strong> Current code requires engineered drainage behind
          retaining walls, including gravel backfill, filter fabric, perforated drain pipe (weep
          system), and positive drainage outlets. Older walls were frequently built without
          adequate drainage, which may have contributed to the failure. The replacement wall must
          include code-compliant drainage &mdash; an additional cost.
        </li>
        <li>
          <strong>Geotechnical investigation:</strong> The building department may require a
          geotechnical investigation and soils report before issuing a permit for a replacement
          retaining wall, particularly on hillside properties or where the wall supports a
          structure or driveway. This investigation costs $3,000 to $10,000 or more.
        </li>
        <li>
          <strong>Seismic design requirements:</strong> Current seismic design standards for
          retaining walls are significantly more stringent than those in effect when many older
          walls were built. The replacement wall must be designed to current seismic standards,
          which may require deeper foundations, more reinforcing steel, larger footings, or
          tieback anchors.
        </li>
      </ul>

      <CalloutBox variant="important" title="Ordinance or Law Coverage Applies to Retaining Walls">
        <p>
          The increased cost of replacing a retaining wall to current code &mdash; including
          engineering, permits, drainage, geotechnical investigation, and seismic design &mdash;
          is covered under Ordinance or Law coverage, not Other Structures coverage. These are code-mandated
          costs that would not exist if the wall could simply be rebuilt to its original (often
          un-engineered) standard. Make sure these costs are separately documented and claimed
          under L&amp;O, not crammed into the Other Structures limit. See our{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            code upgrade coverage guide
          </Link>{' '}
          for the full framework.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VII. Practical Steps for Retaining Wall and Hillside Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are dealing with a retaining wall failure or hillside damage, take these steps
        to protect your claim:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. Document the Timeline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When did the wall first show signs of distress? Hairline cracks, leaning, bulging,
        separation at joints, or displacement at the top or base? Photograph these signs
        immediately. If possible, gather dated photographs from before the failure &mdash;
        Google Street View, real estate listing photos, prior inspection reports &mdash; to
        establish that the wall was previously intact. The timeline helps your engineer
        determine whether the failure was sudden (suggesting a triggering event) or gradual
        (suggesting ongoing movement).
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. Look for Water Sources Uphill
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water is the most common covered-peril cause of retaining wall failures. Investigate
        every potential water source above and behind the wall: water supply lines, sewer
        laterals, irrigation systems, pool or spa plumbing, HVAC condensate lines, roof
        drainage, and surface water flow patterns. Check your water meter for unexplained
        usage that could indicate a leak. Check with the water utility for any recorded line
        breaks in the area. A plumber with a camera can inspect sewer laterals for cracks
        or breaks. If a water source is found, it dramatically changes the coverage analysis.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. Check Neighbor&rsquo;s Drainage and Construction Activity
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Did a neighbor recently grade their property, add impervious surfaces (a patio, driveway,
        or structure), alter drainage patterns, or remove vegetation? Did the city perform work
        on drainage infrastructure, streets, or utilities that could have affected subsurface
        water flow? Third-party negligence may create both a coverage argument (the efficient
        proximate cause was not natural earth movement but human action) and a separate
        third-party claim for damages.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Get an Independent Geotechnical Report
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed in Section V above, an independent geotechnical report is not optional in
        a significant retaining wall claim. The carrier will have its own engineer; you need
        yours. Choose a licensed geotechnical engineer who is experienced in forensic
        investigation of retaining wall failures, not one who primarily designs new construction.
        Forensic expertise is different from design expertise &mdash; you need someone who knows
        how to investigate and determine the cause of a failure, not just design a replacement.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        5. File Under Both Property Damage and Ordinance or Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file the claim, explicitly invoke both Other Structures coverage for the
        wall damage and Ordinance or Law coverage for the increased cost of rebuilding to
        current code. Do not let the carrier evaluate the claim only under Other Structures coverage. The
        engineering, permits, drainage, and seismic design costs required by current code are
        separate L&amp;O costs that should not erode your Other Structures limit.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        6. Address the Foundation Separately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the same event that damaged the retaining wall also damaged the dwelling&rsquo;s{' '}
        <Link href="/resources/foundation-damage" className="text-blue-700 underline hover:text-blue-900">
          foundation
        </Link>, document and claim the foundation damage separately under the dwelling coverage. The
        retaining wall and the foundation are different structures under different coverage parts
        with different limits. Keeping them separate prevents the carrier from using the lower
        Other Structures limit to cap your entire recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VIII. Common Carrier Tactics in Retaining Wall Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be prepared for the following carrier strategies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Blanket earth movement denial without investigating cause:</strong> The carrier
          issues a denial letter citing the earth movement exclusion without ever investigating
          what caused the earth to move. This is the most common tactic and the most problematic.
          California&rsquo;s fair claims settlement practices (Cal. Code Regs., tit. 10,
          &sect; 2695.7(d)) require the carrier to conduct a thorough investigation before denying
          a claim. A denial based on the earth movement exclusion without investigating the cause
          of the earth movement is arguably a violation of these regulations.
        </li>
        <li>
          <strong>Hiring a known &ldquo;denial engineer&rdquo;:</strong> The carrier retains a
          geotechnical engineer who is known in the industry for consistently attributing retaining
          wall failures to natural causes. These engineers are retained repeatedly by insurers
          precisely because their conclusions support denial. Your independent engineer&rsquo;s
          report, if it reaches a different conclusion based on more thorough investigation, can
          be used to challenge the carrier&rsquo;s expert.
        </li>
        <li>
          <strong>Claiming the damage is &ldquo;cosmetic&rdquo; or &ldquo;minor&rdquo;:</strong>{' '}
          The carrier characterizes the wall failure as minor cracking or cosmetic damage rather
          than structural failure, and either denies the claim or offers an inadequate settlement.
          An independent structural engineer can assess whether the damage is truly cosmetic or
          represents a structural failure requiring replacement.
        </li>
        <li>
          <strong>Applying the earth movement exclusion to the foundation damage too:</strong>{' '}
          If the same event damaged both the retaining wall and the foundation, the carrier may
          deny the foundation damage under the same earth movement exclusion. But the efficient
          proximate cause analysis must be applied to each element of damage separately. The
          fact that earth moved does not automatically exclude all damage &mdash; only damage
          for which earth movement is the efficient proximate cause.
        </li>
        <li>
          <strong>Ignoring Ordinance or Law coverage entirely:</strong> The carrier evaluates
          the claim only under Other Structures coverage and ignores the policyholder&rsquo;s Ordinance or Law
          coverage. If the policyholder does not specifically invoke L&amp;O, the carrier may
          never evaluate it. Always invoke every potentially applicable coverage in your claim
          submission.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IX. When Coverage Is Denied: Next Steps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier denies your retaining wall or hillside claim based on the earth movement
        exclusion, you have several options:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Request the carrier&rsquo;s engineering report:</strong> You are entitled to
          a copy of the engineering report the carrier relied on for its denial. Review it with
          your own engineer and identify the deficiencies in the carrier&rsquo;s investigation.
        </li>
        <li>
          <strong>Submit your own engineering report:</strong> Provide the carrier with your
          independent geotechnical report that identifies a covered peril as the efficient
          proximate cause. Demand that the carrier re-evaluate the claim in light of the new
          evidence.
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance:</strong> If the
          carrier denied without investigating the cause of the earth movement, or if the
          carrier&rsquo;s investigation was materially deficient, a complaint to the CDI may
          prompt a more thorough review.
        </li>
        <li>
          <strong>Invoke the{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal process
          </Link>:</strong> If the dispute is about the amount of the loss rather than whether
          coverage exists, the appraisal clause in your policy provides a mechanism for
          resolving the valuation dispute through independent appraisers and an umpire. Note
          that appraisal generally resolves amount disputes, not coverage disputes.
        </li>
        <li>
          <strong>Consult an attorney:</strong> Retaining wall claims involving efficient
          proximate cause, competing engineering reports, and six-figure repair costs may
          require legal representation. An attorney experienced in first-party insurance
          coverage can evaluate whether the carrier&rsquo;s denial was proper and whether
          a bad faith claim exists.
        </li>
      </ol>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        This article is for educational purposes only and does not constitute legal or insurance
        advice. Every claim is different, and your recovery depends on your specific policy
        language, the facts of your loss, and applicable state law. For guidance on your particular
        situation, consult a licensed Public Adjuster and/or an attorney experienced in insurance
        coverage.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
