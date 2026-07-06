import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: 'The Claim File You Never See: Field Notes, Photos, Texts, and Earlier Estimates',
  description:
    "The insurer's claim file holds far more than the estimate — field notes, photos, texts, and earlier estimate versions. What's in it and how insureds obtain it.",
  summary:
    "The estimate a policyholder receives is a fraction of the claim file. Field notes, activity logs, photographs, text messages, and earlier estimate versions all exist — and under California law, most of it must be produced on request. This article covers what lives in the file, why carriers resist producing it, and the practical techniques for getting it.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about a specific
          situation &mdash; including any question about discovery in litigation &mdash;
          the reader should consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A practitioner&apos;s guide to what actually lives inside an insurance
          company&apos;s claim file &mdash; the field notes, activity logs, photographs,
          text messages, and earlier estimate versions that policyholders rarely see
          &mdash; and the documented, lawful techniques for obtaining them under
          California Insurance Code section 2071 and the California Department of
          Insurance&apos;s August 2025 Notice.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier sends its estimate, most policyholders assume they are looking
        at the claim file. They are not. They are looking at one output of the claim
        file &mdash; usually the most polished, most reviewed, and most carefully
        worded document in it. Behind that estimate sits everything else: the field
        adjuster&apos;s handwritten or app-entered notes, the activity log recording
        every touch on the claim, dozens or hundreds of photographs, text messages
        between the adjuster and vendors, internal desk-review comments, and &mdash;
        in many claims &mdash; an earlier version of the estimate that was revised
        before the insured ever saw a number.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California law gives insureds a right to nearly all of it. This site&apos;s
        companion article,{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
          Your Right to Claim Documents Under California Law
        </Link>
        , covers the foundation: Insurance Code section 2071 requires insurers to
        notify claimants that claim-related documents are available on request and to
        provide copies within 15 calendar days of a request &mdash; best made in
        writing. That article
        reproduces the Department of Insurance&apos;s 2016 Notice and walks through the
        basic request process. This article picks up where that one leaves off. It is
        about the documents carriers resist producing even after a proper request
        &mdash; and the practical techniques, drawn from claims-adjusting practice,
        that make those documents hard to withhold.
      </p>

      <CalloutBox variant="tip" title="Start With the Companion Article">
        <p>
          Readers who have not yet made a basic claim-file request may want to start
          with{' '}
          <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
            Your Right to Claim Documents Under California Law
          </Link>
          , which covers the section 2071 request itself &mdash; the sample language,
          the 15-day deadline, and what to do when the deadline passes. This article
          assumes that ground and focuses on what should come back and what to do when
          it does not.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Actually Lives in a Claim File
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A modern property claim file is not a folder with an estimate in it. It is a
        sprawling electronic record spread across the carrier&apos;s claims-management
        system, the field adjuster&apos;s mobile devices, vendor platforms, and email
        and text threads. In the author&apos;s experience handling California property
        claims, the categories below exist in nearly every file of any size &mdash;
        and most of them never appear in the carrier&apos;s first production.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Adjuster Field Notes
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The field adjuster who walks the property takes notes &mdash; observations
        about damage, measurements, statements the insured made, conditions that
        struck the adjuster as significant. Those notes are the raw material from
        which the estimate and the coverage evaluation are built. When the notes say
        one thing and the estimate says another &mdash; when the field notes record
        smoke odor throughout the house and the estimate treats two rooms &mdash; the
        discrepancy is the single most useful fact in the claim. Field notes relate
        directly to the evaluation of damages, which places them squarely within
        section 2071&apos;s definition of claim-related documents discussed below.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Activity Log
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every mainstream claims-management system keeps a running activity log: dated
        entries recording calls, inspections, internal referrals, reserve changes,
        supervisor instructions, and file notes. The log is the claim&apos;s diary. It
        shows who touched the file, when, and often why. Entries that evaluate damage
        or discuss the amount of loss fall within the claim-related-documents
        definition; entries that are purely administrative may not. A carrier that
        produces nothing from the log at all is almost certainly over-withholding.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Photographs &mdash; Usually Far More Than Are Produced
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Field adjusters photograph heavily. A typical inspection of a significantly
        damaged home generates dozens to hundreds of images. Yet the photo set that
        accompanies a produced estimate is often a curated fraction &mdash; the images
        that support the estimate as written. The photographs that show damage the
        estimate did not address tend not to make the cut. Photographs of the loss are
        documents that relate to the evaluation of damages; there is no obvious basis
        for producing twelve of them and withholding twenty.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Text Messages and Emails About the Claim
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Modern adjusting runs through phones. Field adjusters text desk adjusters,
        independent-adjusting firms text their carrier contacts, and vendors text
        everyone. When those messages discuss the damage, the scope, or the numbers
        &mdash; &ldquo;roof is worse than reported, will need full replacement,&rdquo;
        or &ldquo;desk wants this under $50K&rdquo; &mdash; they relate to the
        evaluation of damages just as much as a formal report does. The medium does
        not change the analysis. A text message evaluating the loss is a claim-related
        document that happens to be short.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tablet-App Inspection Records
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most field inspections now run through mobile applications &mdash; sketching
        tools, guided-inspection apps, moisture-mapping software, aerial-imagery
        platforms. These apps generate structured records: room-by-room entries,
        measurements, condition checklists, embedded photos, timestamps. Those records
        frequently contain damage observations that never migrate into the final
        estimate. They exist, they are retrievable, and they evaluate the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Internal Desk-Review Notes
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        After the field adjuster submits an estimate, it commonly goes to a desk
        reviewer &mdash; an in-house examiner or a review vendor &mdash; who audits it
        against the carrier&apos;s guidelines. The reviewer&apos;s notes explain what
        was cut and why: line items removed, quantities reduced, pricing overridden.
        Those notes are loss-adjustment calculations and findings about the amount of
        loss. They are also, not coincidentally, the documents that explain why the
        insured&apos;s estimate is smaller than the damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Earlier Versions of the Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the category that prompted the Department of Insurance to act in 2025,
        and it deserves its own section.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Revised-Estimate Problem
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the pattern as it plays out in practice. The field adjuster inspects
        the property and writes an estimate &mdash; call it version one. Version one
        goes to desk review. The reviewer cuts it: line items deleted, roof repair
        substituted for roof replacement, general demolition reduced, overhead and
        profit removed. The revised estimate &mdash; version two &mdash; is the only
        document the insured ever receives. As far as the policyholder knows, version
        two is <em>the</em> estimate. The insured never learns that the carrier&apos;s
        own field professional, standing on the property, scoped the loss higher.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For years, carriers responded to requests for earlier versions by treating
        them as drafts &mdash; internal work papers outside the file. After the
        January 2025 Southern California wildfires, enough survivors reported exactly
        this experience that the Insurance Commissioner addressed it directly. On
        August 25, 2025, Commissioner Ricardo Lara issued a Notice to all property and
        casualty insurers handling California property claims. The Notice describes
        the complaint pattern in the Department&apos;s own words:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;My Department is hearing from wildfire survivors that some insurance
        adjusters are creating estimates of repair, remediation, or replacement that
        are not included in the claims documents provided by insurers upon the
        survivors&apos; request.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        And it resolves the draft-versus-document question without ambiguity:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;Based on the definition cited above, &lsquo;claim-related
        documents&rsquo; include <em>all</em> estimates, reports, findings, and
        calculations&mdash;whether preliminary or final&mdash;that in any way relate
        to the loss and evaluation of damages (including all loss estimates) so that
        claimants have sufficient information to determine whether they have received
        all the benefits due under their policies.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Whether preliminary or final.&rdquo; That phrase is the Department&apos;s
        answer to the revised-estimate problem. A field estimate that was later cut in
        desk review is a preliminary estimate that relates to the evaluation of
        damages. Under the Commissioner&apos;s stated reading of section 2071, it must
        be produced on request, within the same 15 calendar days as everything else.
        An insured comparing version one against version two can see, line by line,
        exactly what desk review removed &mdash; which is precisely the information
        the Notice says claimants need in order to determine whether they have
        received all the benefits due under their policies. Readers reviewing a
        produced estimate line by line may find this site&apos;s guide to{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] underline">
          Xactimate line items
        </Link>{' '}
        useful for that comparison.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Notice of August 25, 2025
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The full Notice is short, and it is worth reading in its entirety. It
        expressly supplements the Department&apos;s September 9, 2016 Notice on
        claim-related documents, which is reproduced in the{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
          companion article
        </Link>
        .
      </p>

      <DocumentEmbed
        title="Insurer Duty to Provide Claim-Related Documents to Claimants Upon Request"
        source="California Department of Insurance"
        date="August 25, 2025"
        type="notice"
        sourceUrl="https://www.insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/Notice-August-25-2025-Claims-Related-Documents-Notice-2.pdf"
      >
        <p><strong>RICARDO LARA</strong></p>
        <p><strong>CALIFORNIA INSURANCE COMMISSIONER</strong></p>
        <p><strong>NOTICE</strong></p>
        <p>
          <strong>TO:</strong> All Property and Casualty Insurance Companies Handling
          Property Insurance Claims relating to the 2025 Wildfires and Other
          Interested Persons
        </p>
        <p><strong>FROM:</strong> Insurance Commissioner Ricardo Lara</p>
        <p><strong>DATE:</strong> August 25, 2025</p>
        <p>
          <strong>RE:</strong> Insurer Duty to Provide Claim-Related Documents to
          Claimants Upon Request
        </p>
        <p>
          <em>
            This Notice further supplements the California Department of
            Insurance&apos;s Notice regarding insurers&apos; duty to provide
            claim-related documents to claimants that was issued on September 9, 2016.
          </em>
        </p>
        <p>
          While the devastating Southern California fires earlier this year were
          extinguished, residential property owners whose homes were damaged or
          destroyed by the wildfires continue to experience difficulties as they
          navigate the complex process of rebuilding, replacing, or repairing their
          homes. Over the past several months, my Department staff have been working
          hard with policyholders often overwhelmed by the process of calculating an
          estimate to rebuild, replace, or repair their homes as well as those who may
          not have all the information necessary to accurately assess whether all
          benefits due under their policy have been or will be properly paid by their
          insurance companies. My Department has received complaints from wildfire
          survivors and other sources that policyholders are unable to obtain copies
          of all claim-related documents from their insurers.
        </p>
        <p>
          I am issuing this Notice to require all insurers handling property insurance
          claims in California to completely comply with California Insurance Code
          section 2071 with respect to the disclosure of claims-related documents to
          claimants.
        </p>
        <p>
          Insurance Code section 2071 requires, among other duties, insurers to: (1)
          provide notice to claimants that they may obtain copies of claim-related
          documents upon request, and (2) provide copies of claim-related documents to
          the claimant within 15 calendar days of the request.
        </p>
        <p>&ldquo;Claim-related documents&rdquo; is defined as:</p>
        <p>
          &ldquo;&hellip;[A]ll documents that relate to the evaluation of damages,
          including, but not limited to, repair and replacement estimates and bids,
          appraisals, scopes of loss, drawings, plans, reports, third-party findings
          on the amount of loss, covered damages and costs of repairs, and all other
          valuation, measurement, and loss adjustment calculations of the amount of
          loss, covered damage, and cost of repairs.&rdquo; (Emph. added.)
        </p>
        <p>
          Only four categories of documents are exempt from the definition of
          &ldquo;claim-related documents&rdquo; under Insurance Code section 2071:
          &ldquo;attorney work product and attorney-client privileged documents, and
          documents that indicate fraud by the insured or that contain medically
          privileged information.&rdquo;
        </p>
        <p>
          My Department is hearing from wildfire survivors that some insurance
          adjusters are creating estimates of repair, remediation, or replacement that
          are not included in the claims documents provided by insurers upon the
          survivors&apos; request. Based on the definition cited above,
          &ldquo;claim-related documents&rdquo; include <em>all</em> estimates,
          reports, findings, and calculations&mdash;whether preliminary or
          final&mdash;that in any way relate to the loss and evaluation of damages
          (including all loss estimates) so that claimants have sufficient information
          to determine whether they have received all the benefits due under their
          policies.
        </p>
        <p>
          Importantly, Insurance Code section 2071 requires that insurers provide a
          claimant with copies of all claim-related documents that are not exempt (as
          outlined above) within 15 calendar days after receiving a request from an
          insured for such documents.
        </p>
        <p>
          I expect insurers to fully comply with their obligation to timely provide
          all claim-related documents upon request to policyholders affected by these
          devastating Southern California wildfires.
        </p>
        <p>
          And as wildfires continue to ravage California today, I will continue to
          monitor insurers&apos; practices for providing copies of claim-related
          documents to ensure that policyholders receive all the benefits they are due
          under their policies and to hold insurers accountable under the law.
        </p>
        <p>
          Insurer inquiries regarding this Notice may be directed to: Jully Pae,
          Consumer Law Unit, jully.pae@insurance.ca.gov
        </p>
        <p>
          Consumer inquiries regarding this Notice should be directed to: California
          Department of Insurance Hotline, (800) 927-4357
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Privilege Exception Is Narrower Than Carriers Suggest
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier withholds documents from a section 2071 production, the stated
        reason is usually some variation of &ldquo;privileged&rdquo; or
        &ldquo;internal work product.&rdquo; The statutory exception is much narrower
        than that language implies. As the August 2025 Notice puts it, only four
        categories of documents are exempt: attorney work product, attorney-client
        privileged documents, documents that indicate fraud by the insured, and
        documents containing medically privileged information.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Note what is <em>not</em> on that list. There is no exemption for
        &ldquo;drafts.&rdquo; There is no exemption for &ldquo;internal notes.&rdquo;
        There is no exemption for documents the carrier finds embarrassing, for
        desk-review comments, or for adjuster work product &mdash; the exception
        covers <em>attorney</em> work product, which in the ordinary claim (where no
        attorney is directing the adjustment) describes little or nothing in the file.
        A carrier claiming that its field adjuster&apos;s notes are &ldquo;work
        product&rdquo; is stretching a term that belongs to lawyers over documents
        written by adjusters. Whether any particular document actually qualifies for
        an exemption is a legal question an insured might ultimately put to counsel,
        but the burden of explaining the withholding sensibly sits with the party
        doing the withholding &mdash; and a request that asks the carrier to identify
        each withheld document and the claimed exemption tends to shrink the withheld
        pile considerably.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The production duty also does not float free of the carrier&apos;s
        investigation duties. California&apos;s Fair Claims Settlement Practices
        Regulations, at 10 CCR section 2695.7(d), require every insurer to conduct and
        diligently pursue a &ldquo;thorough, fair and objective investigation.&rdquo;
        An investigation whose documentation cannot survive being shown to the insured
        invites an obvious question about whether it was thorough, fair, and objective
        in the first place. For the broader set of carrier disclosure duties &mdash;
        including the obligations that attach before any request is made &mdash; see{' '}
        <Link href="/resources/insurer-disclosure-obligations" className="text-[#2E74B5] underline">
          Insurer Disclosure Obligations
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Photo-Count Technique
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Photographs are the easiest category to under-produce, because the insured
        usually has no idea how many exist. There is a simple documentation practice
        that fixes that &mdash; one the author uses on inspections as a matter of
        routine.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        During any inspection, the insured or the insured&apos;s representative can
        lawfully photograph and film the carrier&apos;s inspector at work on the
        insured&apos;s own property &mdash; and, more to the point, can simply count.
        Every time the inspector raises the camera or taps the tablet, that is a
        frame. A running tally, noted room by room, takes no special skill. So does a
        contemporaneous note: <em>inspector photographed all four elevations, the
        attic, and every room on the second floor; approximately 32 photos taken;
        inspection ran 10:15 to 11:40.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now the section 2071 request has teeth. When the produced file contains 12
        photographs and the inspection log says roughly 32 were taken, the follow-up
        request is no longer a vague demand for &ldquo;everything.&rdquo; It is
        specific: the insured&apos;s representative documented approximately 32
        photographs taken at the March 12 inspection; 12 were produced; the request is
        renewed as to the remainder. A carrier can argue with a generality. It has a
        much harder time arguing with arithmetic.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The framing matters here. This is not a gotcha game, and it should not be
        conducted like one &mdash; no hovering, no interference with the inspection,
        no commentary. It is the same discipline the carrier itself applies:
        documenting what happened, when, and by whom. An inspector who knows the
        inspection is being documented tends to inspect more carefully, which serves
        everyone. And an insured who documents the inspection has, at minimal cost,
        converted an unverifiable production into a verifiable one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Subcontractor Problem: &ldquo;We Don&apos;t Have Those&rdquo;
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Much of modern claims handling is outsourced. Carriers assign field work to
        independent-adjusting firms, engineering questions to consulting firms,
        contents inventories to specialty vendors, and mitigation oversight to
        third-party administrators. Each of those entities generates photographs,
        notes, measurements, and reports. And when the insured requests the file, some
        carriers respond that they &ldquo;don&apos;t have&rdquo; the vendor&apos;s
        photographs or the independent adjuster&apos;s field notes &mdash; those
        belong to the vendor, the argument goes, not the insurer.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That position is difficult to square with section 2071&apos;s purpose. The
        statute&apos;s definition expressly reaches &ldquo;third-party findings on the
        amount of loss&rdquo; &mdash; the drafters plainly contemplated that documents
        evaluating the loss would sometimes originate outside the carrier&apos;s own
        walls. And the independent adjuster is not a stranger to the claim; it is the
        carrier&apos;s agent, inspecting the property because the carrier sent it. A
        rule under which a carrier could place the entire evaluation beyond the
        insured&apos;s reach simply by outsourcing it would hollow out the production
        duty &mdash; the more of the adjustment the carrier farmed out, the less the
        insured could see. Whether a regulator or court would accept the
        carrier&apos;s narrower reading in any given dispute is a question for
        counsel; as a practical matter, the position deserves to be tested rather than
        accepted.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is also a practical technique that makes the dispute largely
        unnecessary &mdash; one the author uses when a carrier pleads empty hands. The
        insured or their representative writes directly to the third party &mdash; the
        independent-adjusting firm, the engineer, the mitigation vendor &mdash; and
        asks it, in writing, to transmit its photographs, notes, and reports for the
        claim to the carrier. Vendors, whose business depends on carrier
        relationships and who have no stake in a production fight, generally comply.
        Once the materials sit in the carrier&apos;s claim system, they are
        unambiguously in the carrier&apos;s possession, unambiguously documents that
        relate to the evaluation of damages, and unambiguously subject to the 15-day
        production duty. The &ldquo;we don&apos;t have those&rdquo; argument does not
        get answered; it simply collapses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Texts and Tablet Apps: Name the Electronic Records Expressly
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A request for &ldquo;the claim file&rdquo; invites a narrow response: the
        estimate, the correspondence, maybe a photo set. Claims handling no longer
        lives in a file, and requests should reflect that. In the author&apos;s
        practice, document requests expressly name the electronic categories, because
        a category that is named is much harder to overlook &mdash; innocently or
        otherwise:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Text messages and instant messages</strong> concerning the claim,
          between and among the carrier&apos;s adjusters, examiners,
          independent-adjusting firms, and vendors, to the extent they relate to the
          evaluation of damages
        </li>
        <li>
          <strong>Mobile and tablet application records</strong> from any
          inspection, sketching, moisture-mapping, or estimating application used on
          the loss, including room-by-room entries, measurements, checklists, and
          embedded photographs
        </li>
        <li>
          <strong>All photographs and video</strong> taken at any inspection of the
          property, by any person acting for the carrier, whether or not attached to
          an estimate or report
        </li>
        <li>
          <strong>Activity log and file notes</strong> to the extent the entries
          relate to the evaluation of damages, the scope of loss, or the amount of
          loss
        </li>
        <li>
          <strong>All versions of every estimate</strong>, whether preliminary or
          final, including field estimates submitted for desk review and the
          desk-review comments, audit notes, or correction sheets applied to them
        </li>
        <li>
          <strong>Reports and findings of any third party</strong> engaged on the
          claim &mdash; independent adjusters, engineers, consultants, contents
          vendors, mitigation reviewers &mdash; on the amount of loss, covered
          damages, or cost of repairs
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this expands section 2071 &mdash; every category above is either
        named in the statutory definition or falls comfortably within &ldquo;all
        other valuation, measurement, and loss adjustment calculations.&rdquo; Naming
        the categories simply removes the carrier&apos;s ability to read the request
        narrowly and produce the same curated packet it would have sent anyway.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Well-Built Request Looks Like
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pulling the threads together, a thorough claim-file request in California
        tends to share a handful of features. It is written &mdash; email works, but
        a dated letter creates a cleaner record. It cites Insurance Code section 2071
        and its 15-calendar-day deadline, and &mdash; since August 2025 &mdash; the
        Commissioner&apos;s Notice of August 25, 2025, quoting the
        &ldquo;whether preliminary or final&rdquo; language. It names the electronic
        categories listed above rather than asking generically for &ldquo;the
        file.&rdquo; It asks the carrier, for any document withheld, to identify the
        document and the specific statutory exemption claimed. And it is{' '}
        <em>renewed after every inspection and every new estimate</em>, because each
        inspection generates a fresh set of photographs, app records, and notes that
        did not exist when the last request was made. A single request early in the
        claim does not capture documents created afterward; a standing habit of
        re-requesting does.
      </p>

      <CalloutBox variant="important" title="Renew the Request After Every Inspection">
        <p>
          The most common gap in claim-file productions is timing: the insured
          requested documents in month two, the carrier reinspected in month four,
          and no one ever asked for the second inspection&apos;s photographs and
          notes. A policyholder might consider treating every inspection, every
          reinspection, and every revised estimate as a trigger for a fresh section
          2071 request.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        What comes back is read against what is known. If the inspection ran ninety
        minutes and produced eight photographs, something is missing. If the estimate
        is version two of anything &mdash; and a revision number, a
        &ldquo;rev,&rdquo; or an estimate dated weeks after the inspection often
        signals exactly that &mdash; version one exists. If an engineer visited and
        no engineering report appears, the report exists somewhere. The
        carrier&apos;s letters themselves often reveal what the file contains;
        this site&apos;s guide to{' '}
        <Link href="/resources/reading-insurer-letters" className="text-[#2E74B5] underline">
          reading insurer letters
        </Link>{' '}
        covers the phrases &mdash; &ldquo;our consultant has advised,&rdquo;
        &ldquo;based on our review of the file&rdquo; &mdash; that point to documents
        that should have been produced and were not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Honest Framing: What Getting the File Actually Wins
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A candid word about where this all leads. Once a claim goes into litigation,
        the question of what counts as a &ldquo;claim-related document&rdquo; largely
        stops mattering &mdash; litigation discovery is broader than section 2071,
        and subpoenas reach third parties directly, including the
        independent-adjusting firm and every vendor that touched the loss. The field
        notes, the texts, the earlier estimate versions: in a lawsuit, all of it
        comes out. Any question about what discovery would reach in a particular
        case, and when, belongs with a licensed attorney &mdash; that is a
        litigation-strategy decision, not a claims-handling one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But litigation is slow, stressful, and expensive, and the point of the
        techniques in this article is that most claims should never need it.
        Demanding and receiving the claim file is often the step that resolves a
        claim <em>without</em> suit. The realistic win is not a dramatic confrontation
        over a withheld document. It is quieter than that: the carrier, knowing the
        insured now holds the field estimate, the full photo set, and the desk-review
        notes, re-reviews the claim with the complete record in front of everyone.
        Positions that were easy to hold against a policyholder who had seen nothing
        become hard to hold against one who has seen everything. Many disputed
        line items get restored at exactly that moment, with no courtroom involved.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And where the file reveals something worse than a scoping disagreement &mdash;
        an investigation that ignored its own evidence, an estimate cut without any
        documented basis &mdash; the file itself becomes the record of how the claim
        was handled. What that means legally is beyond this article; the site&apos;s
        overview of{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          insurance bad faith in California
        </Link>{' '}
        covers the framework, and questions about any specific claim belong with
        counsel. For present purposes, the point is simpler: the insured cannot
        evaluate any of it without the documents, and section 2071 says the documents
        are the insured&apos;s to see.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Are an insurance adjuster&apos;s field notes discoverable, or can the insured
        get them without a lawsuit?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both, in California &mdash; and the second path is usually faster. In
        litigation, discovery generally reaches adjuster notes, though how and when
        is a question for the insured&apos;s attorney. Outside litigation, field
        notes that relate to the evaluation of damages fall within Insurance Code
        section 2071&apos;s definition of claim-related documents, which the insurer
        must produce within 15 calendar days of a request (best made in writing,
        so the clock is provable). The statutory
        exemptions cover attorney work product, attorney-client privileged documents,
        documents indicating fraud by the insured, and medically privileged
        information &mdash; a list that does not naturally describe an
        adjuster&apos;s own damage observations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What is actually in an insurance claim file?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Far more than the estimate: adjuster field notes, the activity log recording
        every action on the claim, all inspection photographs (typically several
        times the number produced), text messages and emails discussing the loss,
        mobile-app inspection records, internal desk-review notes explaining what was
        cut from the estimate and why, earlier versions of the estimate itself, and
        the reports of every third party the carrier engaged &mdash; independent
        adjusters, engineers, contents vendors. Under the August 2025 CDI Notice,
        claim-related documents include &ldquo;all estimates, reports, findings, and
        calculations&mdash;whether preliminary or final&mdash;that in any way relate
        to the loss and evaluation of damages.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The adjuster took dozens of photos but only a few are in the produced file.
        Is the insured entitled to the rest?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Photographs of the loss relate to the evaluation of damages, and nothing in
        section 2071&apos;s exemptions distinguishes the photographs a carrier finds
        convenient from the ones it does not. The practical problem is proof &mdash;
        which is why counting photographs during the inspection matters. An insured
        who documented roughly 32 photos taken and received 12 can make a specific,
        renewed request for the remainder, and can identify the discrepancy in a
        Department of Insurance complaint if the carrier still refuses.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can the insured get an earlier version of the insurance estimate &mdash; the
        one written before it was revised?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is precisely what the Commissioner&apos;s August 25, 2025 Notice
        addresses. Issued after wildfire survivors reported that adjusters&apos;
        repair estimates were being left out of productions, the Notice states that
        claim-related documents include all estimates &ldquo;whether preliminary or
        final.&rdquo; A field estimate that desk review later cut is a preliminary
        estimate relating to the evaluation of damages. A request that expressly asks
        for &ldquo;all versions of every estimate, whether preliminary or final,
        including field estimates submitted for review&rdquo; puts the question
        squarely and cites authority the carrier&apos;s compliance department will
        recognize.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What if the carrier says its independent adjuster or vendor &mdash; not the
        carrier &mdash; has the photos and notes?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The position that an agent&apos;s claim documents sit outside the file is
        difficult to square with section 2071&apos;s purpose &mdash; the definition
        expressly includes third-party findings on the amount of loss, and a
        production duty that could be defeated by outsourcing would not be much of a
        duty. Rather than litigate the point, an insured might consider a simpler
        move: write to the vendor directly and ask it to transmit its photographs and
        notes to the carrier. Vendors generally comply, and once the materials are in
        the carrier&apos;s possession they are unambiguously claim-related documents
        subject to the 15-day deadline. If the carrier still refuses, the refusal is
        now indefensible on its own terms &mdash; and well documented for a CDI
        complaint.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
            Your Right to Claim Documents Under California Law
          </Link>{' '}
          &mdash; the companion article: the basic section 2071 request, the 2016 CDI
          Notice, and the step-by-step process
        </li>
        <li>
          <Link href="/resources/insurer-disclosure-obligations" className="text-[#2E74B5] underline">
            Insurer Disclosure Obligations
          </Link>{' '}
          &mdash; the broader set of disclosures California requires from carriers
          during a claim
        </li>
        <li>
          <Link href="/resources/reading-insurer-letters" className="text-[#2E74B5] underline">
            Reading Insurer Letters
          </Link>{' '}
          &mdash; the phrases in carrier correspondence that reveal documents the
          file should contain
        </li>
        <li>
          <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] underline">
            Xactimate Line Items
          </Link>{' '}
          &mdash; how to read the estimate line by line, including when comparing an
          earlier version against the one produced
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            Insurance Bad Faith in California
          </Link>{' '}
          &mdash; the framework that applies when claims handling goes beyond a
          scoping disagreement
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The estimate a policyholder receives is one document from a file built by
        many hands. California law &mdash; through section 2071, reinforced by the
        Commissioner&apos;s August 2025 Notice &mdash; treats the rest of that file
        as the insured&apos;s to see: the field notes, the full photo set, the texts
        and app records, and every version of every estimate, preliminary or final.
        The carriers that resist producing it are usually the ones whose files are
        most worth reading.
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
