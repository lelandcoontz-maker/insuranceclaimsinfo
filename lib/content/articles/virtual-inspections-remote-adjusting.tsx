import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Virtual Inspections and Remote Adjusting: How Desk Claims Affect Your Payout',
  description:
    'How the shift to virtual inspections, desk adjusting, and remote claim handling affects property insurance claim outcomes — and what policyholders can do to protect their interests.',
  summary:
    'Virtual inspections and desk adjusting let carriers assess damage without visiting, which often misses or understates damage. Insist on a thorough inspection, supply your own detailed photos and documentation, and challenge a payout based on remote review.',
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
        Before 2020, the expectation for a property damage claim was simple: an adjuster
        would physically come to the property, walk the site, inspect the damage firsthand,
        and prepare an estimate based on what they saw and touched. The in-person inspection
        was the foundation of the claims process &mdash; because property damage is a physical
        reality that requires physical observation to assess accurately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The COVID-19 pandemic changed that. Carriers that had been slowly experimenting with
        remote adjusting suddenly accelerated the transition, framing it as a public health
        necessity. Virtual inspections, video calls, drone imagery, satellite photography,
        and desk reviews became the norm. What began as a temporary accommodation has become
        a permanent feature of the claims landscape &mdash; and policyholders are paying
        the price.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Rise of Desk Adjusting
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Desk adjusting&rdquo; refers to the practice of evaluating a property damage
        claim without physically visiting the property. The adjuster reviews photographs,
        video, satellite imagery, and other documentation from a remote location &mdash;
        often hundreds or thousands of miles from the damaged property &mdash; and prepares
        an estimate based on that remote review.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers have embraced desk adjusting for reasons that are transparent: it is cheaper,
        faster, and more efficient than sending an adjuster to every property. One desk adjuster
        can process claims from multiple states in a single day without ever leaving an office.
        The cost savings to the carrier are substantial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But &ldquo;cheaper and faster for the carrier&rdquo; is not the same thing as
        &ldquo;fair to the policyholder.&rdquo; When the carrier saves money on the inspection
        process, those savings often come at the expense of accuracy &mdash; and accuracy is
        what determines whether the policyholder is paid what they are owed.
      </p>

      <CalloutBox variant="warning" title="Remote Does Not Mean Reasonable">
        <p>
          Policyholders are not required to accept a remote inspection as the sole basis for
          their claim. Under California&rsquo;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            Fair Claims Settlement Practices Regulations
          </Link>
          , the insurer must conduct a reasonable investigation. If a remote review is
          insufficient to accurately assess the damage, the policyholder can and should request
          an in-person inspection.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Technology Behind Remote Adjusting
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern remote adjusting relies on several technologies, each with capabilities and
        limitations that affect claim outcomes:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Satellite and Aerial Imagery
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers use satellite imagery providers to obtain before-and-after aerial photographs
        of properties. These images can show gross changes &mdash; a missing roof section, a
        toppled tree, standing water &mdash; but they cannot show the detail needed for an
        accurate damage assessment. Satellite imagery does not show the condition of shingles
        at close range, interior water intrusion, hidden structural damage, or the quality and
        condition of materials. At best, aerial imagery provides a starting point. At worst,
        it becomes the only basis for an estimate that misses the majority of the damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Drone Inspections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Drone photography provides higher-resolution imagery than satellite photos and can be
        deployed to specific properties. Drones are particularly useful for roof inspections,
        where they can capture detailed images of shingle damage, flashing failures, and
        missing components without requiring someone to walk the roof.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, drones have significant limitations. They photograph surfaces &mdash; they
        cannot see underneath shingles, inside walls, under flooring, or in any area not
        visible from the exterior. A drone cannot detect water damage behind siding, mold
        growing inside a wall cavity, structural cracking beneath roofing materials, or the
        condition of decking under a shingle layer. For claims involving water intrusion,
        fire damage, or any loss with hidden components, drone imagery captures only a
        fraction of the story.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Video Call Inspections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers ask policyholders to conduct their own inspections via video call,
        using a smartphone to walk the adjuster through the property remotely. The adjuster
        watches the feed and directs the policyholder to point the camera at specific areas
        of damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problems with this approach are numerous. The policyholder is not a trained
        damage inspector. They do not know what to look for, where to look, or what
        constitutes relevant damage. The camera angle and resolution may not capture detail
        that would be obvious to an inspector standing in front of the damage. The
        policyholder may inadvertently skip areas of significant damage simply because they
        do not realize those areas are relevant. And the adjuster, watching on a screen, is
        making assessments based on limited, uncontrolled visual information.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Policyholder-Submitted Photographs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The simplest form of remote inspection is asking the policyholder to take photographs
        and submit them. While photographs are an important component of any claim, relying
        exclusively on policyholder-submitted photos to evaluate a claim puts an unreasonable
        burden on the homeowner. Policyholders photograph what they see and understand &mdash;
        which is typically a fraction of the actual damage. A trained inspector will identify
        damage that a homeowner would never notice: hairline cracks, improper moisture levels,
        compromised structural connections, damaged mechanical systems, and problems hidden
        behind finished surfaces.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Remote Adjusting Affects Claim Outcomes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental problem with remote adjusting is straightforward: you cannot accurately
        assess what you cannot see. And remote inspections, by definition, cannot see what an
        in-person inspection would reveal.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Missed Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most direct impact is damage that simply does not make it into the estimate because
        it was never observed. Hidden damage &mdash; inside walls, under floors, above ceilings,
        behind siding, beneath roofing materials &mdash; is invisible to any remote inspection
        method. Interior moisture that has not yet manifested as visible staining, structural
        connections compromised by impact or movement, and mechanical system damage that requires
        testing and observation are all commonly missed when the adjuster never sets foot on the
        property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For claims involving water damage, fire damage, or wind damage, the visible surface
        damage is often only a fraction of the total loss. The{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss
        </Link>{' '}
        typically expands significantly as demolition and repairs reveal hidden conditions.
        A desk adjuster who evaluates only what is visible from satellite imagery or
        photographs will almost always produce a lower estimate than an adjuster who inspects
        the property firsthand.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inaccurate Measurements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Accurate damage estimates require accurate measurements. An adjuster on-site can
        measure rooms, roof sections, damaged areas, and material quantities precisely.
        Remote adjusters rely on property records, satellite measurement tools, and
        policyholder-reported dimensions &mdash; all of which introduce potential for error.
        Property records may reflect original construction rather than additions or
        modifications. Satellite measurements have inherent margin of error. Policyholder
        measurements may be imprecise. These errors compound throughout the estimate,
        resulting in totals that may be significantly off in either direction &mdash; but
        more often, in the insurer&rsquo;s favor.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inability to Assess Material Quality and Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A core component of any damage estimate is identifying the materials present and
        assessing their pre-loss condition. The difference between standard-grade laminate
        and premium hardwood flooring, between builder-grade fixtures and custom installations,
        between basic roofing and architectural shingles &mdash; these distinctions affect
        both the{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          actual cash value and replacement cost
        </Link>{' '}
        of the loss. A desk adjuster working from photographs may default to standard
        materials, producing an estimate that does not reflect what was actually in the home.
      </p>

      <CalloutBox variant="info" title="The Measurement Problem">
        <p>
          Property records, satellite data, and policyholder-reported measurements are all
          approximations. An in-person inspection with physical measurements is the only
          reliable way to ensure the estimate reflects the actual dimensions and conditions
          of the damaged property. Errors in measurement translate directly to errors in the
          payout.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policyholder Rights Regarding Inspections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders are not powerless in the face of remote adjusting. Several legal and
        regulatory frameworks protect the right to a proper inspection:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&rsquo;s Reasonable Investigation Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the Fair Claims Settlement Practices Regulations (10 CCR &sect;2695.7(b)),
        insurers must conduct a &ldquo;reasonable investigation&rdquo; of every claim. What
        constitutes a &ldquo;reasonable investigation&rdquo; depends on the nature and
        complexity of the claim. For a minor claim with limited, visible damage, a remote
        review might be adequate. For a significant property loss with potential hidden
        damage, a desk review is unlikely to satisfy the regulatory standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;790.03(h)(3) prohibits insurers from &ldquo;failing
        to adopt and implement reasonable standards for the prompt investigation of claims.&rdquo;
        If the carrier&rsquo;s &ldquo;standard&rdquo; for investigating a major property loss
        is a desk review based on satellite photos, that standard may not be reasonable within
        the meaning of the statute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Request an In-Person Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders have the right to request an in-person inspection. While no California
        statute explicitly requires in-person inspections for every claim, the duty to conduct
        a reasonable investigation effectively requires one whenever the damage cannot be
        adequately assessed remotely. A policyholder who believes the remote inspection was
        inadequate should request an in-person inspection in writing, specifying the areas of
        damage that the remote review failed to capture.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Investigate Fully
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809, the
        insurer has an affirmative{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          duty to investigate
        </Link>{' '}
        the claim thoroughly before making a coverage determination. An insurer that relies on
        a remote review despite knowing &mdash; or having reason to know &mdash; that the
        remote review is insufficient has arguably failed to meet this duty. The question is
        not whether the remote review was convenient for the insurer, but whether it was
        adequate to fairly evaluate the policyholder&rsquo;s loss.
      </p>

      <CalloutBox variant="tip" title="Put the Request in Writing">
        <p>
          If you want an in-person inspection, request it in writing. State specifically that
          you believe the remote inspection was inadequate and identify the areas of damage that
          were not properly evaluated. The written request creates a record that the insurer was
          on notice of the inspection&rsquo;s deficiency. If the insurer refuses, document the
          refusal in writing as well.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Virtual Inspections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a virtual inspection is occurring &mdash; either by choice or because the insurer
        insists &mdash; policyholders can take steps to maximize the information captured:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document everything yourself first</strong> &mdash; Before the virtual
          inspection, take comprehensive photographs and videos of all damage, including areas
          that may not be visible in a brief video call. This creates an independent record
          that supplements whatever the adjuster captures remotely.
        </li>
        <li>
          <strong>Prepare a written list of all damage areas</strong> &mdash; Do not rely on
          the adjuster to ask about every room or area. Prepare a room-by-room, area-by-area
          list of all damage you have identified, and work through it systematically during
          the virtual inspection.
        </li>
        <li>
          <strong>Use the best available technology</strong> &mdash; Good lighting and a
          stable internet connection make a meaningful difference in video quality. If
          possible, use a newer smartphone with a high-resolution camera. Use a flashlight
          to illuminate dark areas such as attics, crawl spaces, and closets.
        </li>
        <li>
          <strong>Show scale and context</strong> &mdash; Place a ruler, tape measure, or
          other reference object next to damage to convey size. Show the relationship between
          damaged areas and surrounding structures so the adjuster can understand the scope.
        </li>
        <li>
          <strong>Point out hidden damage indicators</strong> &mdash; Staining on ceilings,
          bubbling paint, warped flooring, musty odors (describe them verbally), soft spots
          in drywall &mdash; these indicators of hidden damage should be specifically
          identified during the virtual inspection.
        </li>
        <li>
          <strong>Record the virtual inspection</strong> &mdash; If legally permissible in
          your jurisdiction, record the virtual inspection from your end. California is a
          two-party consent state for audio recording, so notify the adjuster that you are
          recording. A recording preserves what was shown and discussed.
        </li>
        <li>
          <strong>Follow up in writing</strong> &mdash; After the virtual inspection, send
          the adjuster a written summary of all damage areas discussed, including any areas
          you believe were not adequately captured. Attach your own photographs and note any
          damage that requires in-person evaluation to assess properly.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Insist on In-Person Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While virtual inspections may be adequate for minor, surface-level damage, certain
        claim types should almost always involve an in-person inspection:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Water damage claims</strong> &mdash; Water travels through structures in
          unpredictable ways. Surface-visible water damage typically represents a fraction
          of the actual intrusion. Moisture mapping, material testing, and destructive
          evaluation are necessary to identify the full extent of water damage.
        </li>
        <li>
          <strong>Fire and smoke damage</strong> &mdash; Smoke permeates porous materials,
          HVAC systems, and hidden cavities in ways that are invisible in photographs. Char
          patterns, structural compromise, and the extent of smoke contamination require
          hands-on assessment.
        </li>
        <li>
          <strong>Structural damage</strong> &mdash; Cracking, shifting, settlement, and
          structural compromise require physical inspection and often engineering evaluation.
          Photographs cannot convey whether a crack is cosmetic or structural.
        </li>
        <li>
          <strong>Roof damage</strong> &mdash; While drones can capture surface conditions,
          a comprehensive roof inspection includes evaluating the condition of underlayment,
          flashing, decking, and ventilation &mdash; none of which are visible from above.
        </li>
        <li>
          <strong>Large or complex claims</strong> &mdash; Any claim where the total expected
          value is significant warrants an in-person inspection. The margin of error in remote
          adjusting increases with claim complexity.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of Public Adjusters in the Remote Adjusting Era
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The shift to remote adjusting has made professional policyholder representation more
        important than ever. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed Public Adjuster
        </Link>{' '}
        conducts their own in-person inspection of the property, prepares an independent
        damage estimate, and advocates for the policyholder throughout the claims process.
        When the carrier&rsquo;s desk adjuster produces an estimate based on satellite
        photos and a 10-minute video call, the Public Adjuster&rsquo;s detailed, in-person
        assessment provides the documented basis for challenging the inadequate estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many cases, the gap between a desk adjuster&rsquo;s remote estimate and a Public
        Adjuster&rsquo;s in-person assessment is substantial &mdash; not because of differing
        opinions about pricing, but because the in-person inspection identifies damage that
        the remote review simply missed.
      </p>

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>United Policyholders</strong> &mdash; Consumer advocacy resources on
          remote adjusting trends and policyholder rights during virtual inspections.
          Search for &ldquo;virtual inspections&rdquo; and &ldquo;desk adjusting&rdquo;
          at uphelp.org.
        </li>
        <li>
          <strong>National Association of Public Insurance Adjusters (NAPIA)</strong> &mdash;
          Industry perspective on the impact of remote adjusting on claim outcomes and
          policyholder rights. Search for NAPIA publications on remote adjusting practices.
        </li>
        <li>
          <strong>California Department of Insurance</strong> &mdash; Regulatory guidance on
          claims handling standards and investigation requirements under 10 CCR &sect;2695
          et seq. Available at insurance.ca.gov.
        </li>
        <li>
          <strong>Merlin Law Group</strong> &mdash; Policyholder advocacy firm that has
          published analysis of remote adjusting practices and their effect on claim
          valuations. Search for Merlin Law Group resources on desk adjusting and virtual
          inspections.
        </li>
        <li>
          <strong>California Insurance Code &sect;790.03(h)</strong> &mdash; Statutory
          prohibitions on unfair claims settlement practices, including the duty to adopt
          reasonable investigation standards. Available through leginfo.legislature.ca.gov.
        </li>
        <li>
          <strong>Insurance Journal</strong> &mdash; Industry trade publication that has
          reported on the acceleration of remote adjusting during and after the pandemic.
          Search for &ldquo;desk adjusting&rdquo; and &ldquo;virtual inspections&rdquo;
          at insurancejournal.com.
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Nothing in this article should be construed as a legal opinion or as a
          substitute for consultation with a qualified attorney. The statutes, regulations, and
          case law discussed reflect California law as of the date of publication. Insurance
          claims are fact-specific &mdash; consult a licensed attorney or a licensed Public
          Adjuster for guidance on your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Did Your Carrier Skip the In-Person Inspection?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster will physically inspect your property, identify damage
          that remote reviews miss, and prepare a comprehensive estimate based on what the
          damage actually costs to repair &mdash; not what a satellite photo suggests.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
