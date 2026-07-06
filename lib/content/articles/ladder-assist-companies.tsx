import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Ladder Assist Companies: The Third Party on Your Roof',
  description:
    "Ladder assist companies climb the roof when the adjuster won't. Who they are, what their reports quietly decide, and how to get the report, the photos, and the name.",
  summary:
    "When a carrier's adjuster cannot or will not climb a roof, a ladder assist vendor sends a technician to photograph and measure it, and the adjuster writes the estimate from that report without seeing the roof. The insured is rarely told who the technician was or what they were qualified to judge — but the investigation remains the insurer's, and the report — along with the photographs behind it — can be requested as claim-related documentation.",
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
        <em>
          A guide for policyholders, Public Adjusters, and attorneys on ladder assist
          companies &mdash; the third-party inspection services carriers hire to climb
          the roof when the assigned adjuster cannot or will not, what their reports
          are scoped to contain, how those reports quietly shape the coverage
          decision, and how an insured finds out who was actually on the roof.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        On many roof claims, the person who climbs the roof is not the adjuster. A
        pickup arrives, a technician in a branded polo sets an extension ladder,
        spends twenty or forty minutes on the shingles with a camera and a chalk
        stick, climbs down, and leaves. The homeowner often assumes that person was
        the insurance adjuster. Frequently they were not. They were a{' '}
        <strong>ladder assist technician</strong> &mdash; an employee or contractor of
        a third-party inspection service the carrier hired to access the roof on the
        adjuster&apos;s behalf.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The arrangement exists for understandable reasons. Steep roofs, high roofs,
        two-story walk-ups, tile that cracks underfoot, and carrier safety policies
        all mean that the adjuster assigned to the claim may be prohibited &mdash; or
        simply unwilling &mdash; from climbing. So the carrier orders a ladder assist:
        the vendor supplies the ladder, the harness, and the person, and the adjuster
        either watches from the ground or never attends at all. The adjuster of
        record may experience the roof exclusively through the vendor&apos;s
        photographs and notes, and then write the estimate &mdash; and sometimes the
        coverage position &mdash; from that file.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article is about that gap: the distance between the person who saw the
        roof and the person who decided the claim. It is a companion to the{' '}
        <Link href="/resources/adjuster-types" className="text-[#2E74B5] underline">
          types of insurance adjusters
        </Link>{' '}
        guide, which maps who each adjuster works for, and to the{' '}
        <Link href="/resources/aerial-roof-measurement-disputes" className="text-[#2E74B5] underline">
          aerial roof measurement
        </Link>{' '}
        article, which covers the other way a roof gets evaluated by someone who
        never stood on it. Aerial reports outsource the <em>measurements</em>; ladder
        assist outsources the <em>eyes</em>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Shows Up, and Why It Is Not the Adjuster
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ladder assist companies are inspection-support vendors. Carriers and
        independent adjusting firms hire them on a per-inspection basis, most
        commonly when the roof exceeds internal safety thresholds &mdash; pitch above
        a set steepness, eaves above a set height, second-story sections, wet or
        fragile surfaces &mdash; or when the assigned adjuster is a desk adjuster who
        was never going to attend the property in the first place. The vendor
        dispatches a technician with ladders and fall-protection equipment to do the
        climbing the adjuster will not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The staffing logic compounds during catastrophe seasons. When a storm
        generates thousands of roof claims at once, carriers surge independent
        adjusters into the area, and many of those adjusters &mdash; whatever their
        experience level &mdash; are subject to the same safety rules. A single
        technician from an inspection vendor may climb several roofs a day for
        several different adjusters, none of whom go up themselves. The result is a
        claim file in which the inspection photographs were taken by one person, the
        estimate was written by a second, and the coverage decision may have been
        reviewed by a third &mdash; and only the first of them ever touched the
        shingles.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this is hidden, exactly. It is simply never explained. The homeowner
        who watched someone climb the roof reasonably believes the insurance company
        inspected the roof. In a narrow sense that is true. In the sense that matters
        &mdash; that a person with authority over the claim personally examined the
        damage &mdash; it often is not. The{' '}
        <Link href="/resources/adjuster-types" className="text-[#2E74B5] underline">
          adjuster-types
        </Link>{' '}
        guide describes desk handling as reviewing a property through photographs;
        ladder assist is the mechanism that supplies those photographs for the roof.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Ladder Assist Is Scoped to Do
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        On paper, a ladder assist assignment is narrow. The vendor is hired to
        provide access and documentation, and a typical work product includes:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Access:</strong> setting the ladder, providing fall protection, and
          physically getting eyes on roof sections the adjuster cannot reach.
        </li>
        <li>
          <strong>Photographs:</strong> overview shots of each slope, close-ups of
          damaged areas, and photos of roof components &mdash; vents, flashings,
          ridge, valleys, penetrations.
        </li>
        <li>
          <strong>Measurements:</strong> slope dimensions, pitch readings, and edge
          lengths, sometimes supplementing or replacing an aerial report.
        </li>
        <li>
          <strong>Test squares:</strong> chalked squares on designated slopes with
          hail hits or wind damage circled and counted inside each square.
        </li>
        <li>
          <strong>A condition report:</strong> a form or narrative describing what
          the technician observed, delivered to the adjuster or carrier with the
          photo set.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Everything on that list is documentation &mdash; facts about the roof,
        gathered and recorded. If the assignment stopped there, ladder assist would
        be nothing more than a camera on a long pole, and there would be little to
        write about.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Quietly Happens Instead
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The assignment rarely stops there. Condition report forms ask the technician
        to characterize what they saw, and characterization is where documentation
        crosses into judgment. A circled mark on a shingle is a fact. Labeling that
        mark &ldquo;mechanical damage&rdquo; rather than hail is an opinion about
        causation. Noting granule loss is a fact. Writing &ldquo;wear and
        deterioration consistent with age&rdquo; is an opinion about cause and
        timing. And the phrase that ends roof claims &mdash; &ldquo;no storm-related
        damage observed&rdquo; &mdash; is not a photograph of anything. It is a
        conclusion.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Those phrases migrate. The technician&apos;s wording flows into the
        adjuster&apos;s inspection notes, the notes flow into the estimate rationale
        or the denial letter, and by the time the insured reads &ldquo;our inspection
        found no storm-related damage,&rdquo; the sentence has changed authors twice
        without changing words. The adjuster who adopted the characterization never
        saw the roof. The technician who wrote it does not handle the claim and will
        never have to defend the conclusion to the insured. The judgment belongs to
        everyone and no one.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                What the Work Order Asks For
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                The Judgment That Rides Along
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Photograph damage on each slope
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Deciding what counts as damage worth photographing &mdash; and what
                gets no photo at all
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Chalk test squares and count hits
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Choosing which slopes get squares, and classifying each mark as hail,
                mechanical, or blister
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Describe roof condition
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Attributing the condition to wear, age, installation, or storm &mdash;
                a causation opinion
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Note pre-existing conditions
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Dating damage the technician did not see occur
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Complete the report form
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Checking &ldquo;storm-related: yes/no&rdquo; &mdash; the box the
                coverage decision leans on
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read the right-hand column and the pattern is clear: each entry is a
        causation or classification judgment, the kind of call that determines
        whether a roof claim is paid, partially paid, or denied. Whether a particular
        technician is well qualified to make those calls varies from person to
        person &mdash; some are former roofers or experienced inspectors, some are
        recently hired climbers &mdash; and that is precisely the problem. The
        insured has no way to know which one was on their roof, because nobody tells
        them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Accountability Question
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what the insured typically knows about the person whose observations
        drove the roof decision: nothing. Not the name. Not the employer &mdash; the
        polo may carry the vendor&apos;s brand, but the report may reach the insured,
        if it ever does, stripped of it. Not the technician&apos;s training or
        background. Not the instructions on the work order &mdash; what the vendor
        was asked to look for, what form it was asked to complete, what
        characterizations the form invited. The claim file contains a report; the
        insured&apos;s file contains a memory of a stranger on the roof.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The structural problem is a split between judgment and accountability. The
        report&apos;s author does not answer for the claim decision &mdash; the
        vendor delivers its work product and moves to the next roof, and no
        policyholder ever gets to ask the technician why a mark was called
        mechanical. The decision-maker, meanwhile, did not see the roof &mdash; the
        adjuster adopts the report&apos;s characterizations at the exact moments they
        matter, and if pressed can point to the vendor as the source. Each party
        holds the piece the other lacks. Neither holds both.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not, in the main, a story about bad actors. It is a story about a
        process that works smoothly for everyone inside it and opaquely for the one
        person outside it. The carrier gets a safe, cheap, scalable inspection. The
        adjuster gets photos without climbing. The vendor gets paid per roof. The
        insured gets a decision that rests on the judgment of an unnamed person with
        unstated qualifications, filtered through an adjuster who never saw the
        thing being judged. The questions that follow are not accusations; they are
        the obvious ones: <em>who was on the roof, what are their qualifications,
        and whose judgment is the carrier actually relying on?</em>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What California&apos;s Rules Say About Outsourced Eyes
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Three provisions frame the ladder assist arrangement in California, and none
        of them prohibits it. What they do &mdash; together &mdash; is keep the
        responsibility and the paper trail where they belong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Investigation Belongs to the Insurer: 10 CCR &sect;2695.7(d)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect;2695.7(d), every insurer must conduct and diligently
        pursue a thorough, fair, and objective investigation of the claim. The
        subsection does not say who must climb the ladder, and nothing in it
        prevents a carrier from hiring an inspection vendor. But the duty runs to
        the <em>insurer</em>, and it describes the <em>investigation</em> &mdash;
        the whole of it, however staffed. If the roof evaluation consists of a
        third-party technician&apos;s twenty minutes on the shingles and an
        adjuster&apos;s review of the resulting photos, then that, in total, is the
        insurer&apos;s investigation, and it is that total product which has to be
        thorough, fair, and objective. A carrier cannot make the investigation
        someone else&apos;s by making the climbing someone else&apos;s.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Third-Party Information Does Not Shift Responsibility: 10 CCR &sect;2695.1(g)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        10 CCR &sect;2695.1(g) addresses the deflection directly: the fact that
        information relevant to the claim was obtained through a third-party source
        does not absolve the insurer of its own obligations under the regulations.
        The ladder assist company sold an inspection; the insurer adjusted the
        claim. If the vendor&apos;s report mischaracterizes damage, misses a slope,
        or draws a causation conclusion its author was not positioned to draw, the
        insurer that adopted the report owns those defects the same as if its own
        employee had written them. &ldquo;That is what the inspection company
        reported&rdquo; describes where the information came from. It does not
        answer for what the insurer did with it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Report and Photos Are Claim Documents: Ins. Code &sect;2071
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The vendor&apos;s condition report, its photographs, and its measurements
        were created to evaluate the claim, which places them comfortably within
        claim-related documents. The standard form fire policy language set out in
        Insurance Code &sect;2071 requires the insurer to provide the insured,
        upon request, copies of claim-related documents, with production within 15
        calendar days of receiving the request. The statute is triggered by a
        request; making that request in writing, identifying the claim, and asking
        specifically for all claim-related documents &mdash; including any
        third-party inspection reports, condition reports, photographs, and the
        instructions or assignment forms sent to the inspection vendor &mdash; is
        the clean way to invoke it. The mechanics of what counts as claim-related
        and how the request is framed are covered in{' '}
        <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
          the claim-file documents article
        </Link>{' '}
        and{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
          the guide to requesting claim documents
        </Link>
        .
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Taken together, the three provisions replace the shrug with a structure. The
        carrier may hire whoever it likes to climb; the investigation remains the
        carrier&apos;s; the vendor&apos;s work product is discoverable to the
        insured on request; and the insured is entitled to evaluate &mdash; and
        contest &mdash; the report the decision actually rests on.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Moves at the Inspection and After
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Be Present, and Watch the Process
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The single most valuable thing an insured can do about a ladder assist
        inspection costs nothing: be home for it, and watch it. From the ground, an
        observer can see which slopes the technician walked and which they skipped,
        whether test squares were chalked and where, roughly how many photographs
        were taken and of what, and how long the inspection actually lasted. Many
        policyholders photograph the inspection process itself from the yard &mdash;
        openly, without interfering with the work &mdash; so that the claim file&apos;s
        version of the inspection can later be compared against a record of what
        actually happened. An inspection that skipped the back slope reads very
        differently once there is a timestamped photo of the technician never
        walking it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Get the Name and the Company
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A polite question at the door &mdash; the technician&apos;s name, the company
        they work for, and whether they are the adjuster on the claim &mdash;
        answers in thirty seconds what might otherwise take a document request to
        establish. Most technicians answer readily; the arrangement is routine to
        them even when it is news to the homeowner. Writing the answers down, along
        with the date and the time on the roof, turns a stranger on a ladder into an
        identified participant in the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Request the Full Report and Every Photo
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        After the decision arrives &mdash; especially a partial payment or denial
        that cites the inspection &mdash; the &sect;2071 request described above
        brings the vendor&apos;s actual work product into the insured&apos;s hands:
        the condition report as written, every photograph taken (not the curated
        subset attached to the estimate), the measurements, and the assignment
        instructions. The full photo set matters more than it might seem. A
        technician who took eighty photos and a denial letter that references four
        of them invites an obvious question about the other seventy-six.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When the Report Characterizes Causation, Ask Who Judged It
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Where the report goes beyond documentation into characterization &mdash;
        &ldquo;mechanical damage,&rdquo; &ldquo;wear,&rdquo; &ldquo;not
        storm-related&rdquo; &mdash; a written question to the carrier puts the
        accountability split on the record: <em>who</em> made that determination,
        and <em>what are that person&apos;s qualifications</em> to make it? The
        question is fair on its face, and every available answer is informative. If
        the judgment was the technician&apos;s, the carrier is resting causation on
        a vendor employee it may know little about. If it was the adjuster&apos;s,
        the carrier is resting causation on someone who never saw the roof. If
        nobody can say, that is an answer too &mdash; and under &sect;2695.7(d) the
        investigation that cannot identify its own reasoning has a thoroughness
        problem, not just a paperwork one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Put a Competing Written Estimate in Play
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The vendor&apos;s report ultimately feeds an estimate, and California
        regulates that estimate directly. Under 10 CCR &sect;2695.9(d), when a claim
        is settled on the basis of a written scope or estimate prepared by or for
        the insurer, the estimate must be prepared in accordance with the applicable
        policy provisions, for an amount that will restore the property to its
        pre-loss condition, in a manner consistent with accepted trade standards.
        Separately, the same subsection requires the insurer to take reasonable
        steps to verify that the repair costs it uses are accurate and
        representative of the local market. An estimate scoped from a report that
        undercounted damage fails the first standard on its own terms, whatever the
        unit pricing says.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And the regulation supplies a specific lever, with a specific trigger. If
        the insured subsequently contends, <em>based on a written estimate the
        insured obtains</em> &mdash; a roofing contractor&apos;s written estimate is
        the natural example &mdash; that the necessary repairs will exceed the
        insurer&apos;s written estimate, &sect;2695.9(d) requires the insurer to do
        one of three things: pay the difference between its estimate and the higher
        estimate; provide, on the claimant&apos;s request, the name of at least one
        contractor who will actually perform the repairs for the insurer&apos;s
        estimated amount; or reasonably adjust the estimate prepared by the
        insured&apos;s contractor and provide the adjusted copy. The menu is not
        available on demand &mdash; it is the competing written estimate that opens
        it. A homeowner holding a roofer&apos;s written bid is therefore holding the
        trigger, not just a second opinion. Broader patterns for presenting scope
        disputes in writing are covered in the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss
        </Link>{' '}
        guide, and the roofing-specific scope issues in the{' '}
        <Link href="/resources/roofing-systems-claims" className="text-[#2E74B5] underline">
          roofing systems claims
        </Link>{' '}
        article.
      </p>

      <CalloutBox variant="tip" title="The Questions That Do the Work">
        <p>
          Most of the leverage in a ladder assist dispute comes from questions, not
          arguments: Who was on the roof? What company employed them? What were they
          instructed to evaluate? Where is the full report and photo set? And when
          the report characterizes causation &mdash; whose judgment was that, and
          what qualified them to make it? Each question has a factual answer the
          carrier possesses, and each answer either supports the decision or
          exposes what it rests on.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When It Goes Right
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It should be said plainly: a good deal of ladder assist work is competent,
        and some of it actively helps the insured. An experienced technician who
        walks every slope, chalks honest test squares, and takes a hundred
        well-composed photographs may document damage more thoroughly than a hurried
        adjuster ever would have &mdash; and that photo set, once requested, becomes
        the insured&apos;s evidence as much as the carrier&apos;s. There are roof
        claims that get paid <em>because</em> the ladder assist photos showed
        bruising the desk adjuster could not have seen from the estimate software.
        The vendor model also solves a real problem: adjusters genuinely are injured
        falling off roofs, and nobody&apos;s claim benefits from that.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The point of this article is verification, not vilification. The arrangement
        is not the defect. The defect is opacity &mdash; a judgment-bearing report
        by an unidentified author, adopted sight-unseen by the decision-maker, and
        never shown to the person it decided against. Every practical move above is
        aimed at the opacity, not at the technician. When the report is accurate,
        obtaining it costs the insured a stamp and confirms the claim was handled
        properly. When it is not, obtaining it is how anyone finds out.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Who is the ladder assist inspector who came to the house &mdash; is that the
        insurance adjuster?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Usually not. A ladder assist technician works for a third-party inspection
        company the carrier or adjusting firm hired to access and document the roof
        &mdash; typically because the assigned adjuster cannot climb it under safety
        policies or is handling the claim from a desk. The technician photographs,
        measures, and completes a condition report; the adjuster then writes the
        estimate from that material. Asking the person at the door for their name,
        their employer, and whether they are the adjuster on the claim settles it in
        seconds. The{' '}
        <Link href="/resources/adjuster-types" className="text-[#2E74B5] underline">
          adjuster-types guide
        </Link>{' '}
        maps where each of these roles sits.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can the insured get a copy of the ladder assist report and photos?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Generally, yes. A third-party inspection report and its photographs were
        created to evaluate the claim, which fits them within the claim-related
        documents that the standard form fire policy language in Insurance Code
        &sect;2071 requires an insurer to provide upon request, with production
        within 15 calendar days of the request. The practical approach is a written
        request identifying the claim and asking for all claim-related documents,
        expressly including third-party inspection reports, all photographs, and the
        vendor assignment instructions. See{' '}
        <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
          the claim-file documents article
        </Link>{' '}
        for the full framework.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The ladder assist report says &ldquo;no storm-related damage&rdquo; but a
        roofer disagrees. What now?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two moves work together. First, a written question to the carrier: who made
        the &ldquo;no storm-related damage&rdquo; determination, and what are that
        person&apos;s qualifications &mdash; because under 10 CCR &sect;2695.7(d)
        the investigation must be thorough, fair, and objective, and it remains the
        insurer&apos;s investigation regardless of who climbed. Second, if the
        roofer&apos;s view comes with a written estimate for the repairs, the
        insured who contends on that basis that repairs will exceed the
        insurer&apos;s estimate opens the &sect;2695.9(d) menu: the insurer pays the
        difference, names a contractor who will do the work at its number, or
        reasonably adjusts the roofer&apos;s estimate in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can the carrier blame the ladder assist company if the inspection was wrong?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pointing at the vendor does not change the carrier&apos;s obligations. Under
        10 CCR &sect;2695.1(g), the fact that claim information came through a
        third-party source does not absolve the insurer of its responsibilities
        under the Fair Claims Settlement Practices Regulations, and under
        &sect;2695.7(d) the investigation the insurer must conduct thoroughly,
        fairly, and objectively is the whole investigation &mdash; including the
        parts it hired out. The vendor answers to the carrier that hired it; the
        carrier answers to the insured.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is a ladder assist inspection a bad sign for the claim?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not by itself. It usually signals nothing more than a steep or high roof and
        a safety policy, and a thorough technician&apos;s photo set can help the
        claim as easily as hurt it. The sensible response is attention rather than
        alarm: be present for the inspection, note who came and what they did,
        and &mdash; if the decision leans on the report &mdash; request the report
        and every photograph behind it. Where the roof&apos;s dimensions are also in
        play, the{' '}
        <Link href="/resources/aerial-roof-measurement-disputes" className="text-[#2E74B5] underline">
          aerial measurement article
        </Link>{' '}
        covers the parallel verification for the numbers.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ladder assist companies exist because adjusters increasingly do not climb
        roofs, and the model itself is defensible: someone qualified to climb does
        the climbing, and the claim gets photographs it might otherwise never have.
        The trouble begins where the vendor&apos;s documentation shades into
        judgment &mdash; causation labels and &ldquo;no storm damage&rdquo;
        conclusions written by a person the insured cannot name, adopted by an
        adjuster who never saw the roof, and delivered as though the carrier itself
        had inspected and decided.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s framework keeps that arrangement honest, for the insured
        who invokes it. The investigation remains the insurer&apos;s under 10 CCR
        &sect;2695.7(d), no matter whose boots were on the shingles. Third-party
        sourcing absolves nothing under &sect;2695.1(g). The report and its
        photographs are claim documents the insured can request under Insurance
        Code &sect;2071. And a contractor&apos;s competing written estimate opens
        the &sect;2695.9(d) menu when the insured contends the repairs exceed the
        carrier&apos;s number. The stranger on the roof is not the problem. The
        strangeness &mdash; who they were, what they judged, and what became of it
        &mdash; is exactly what the paper trail exists to answer.
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
