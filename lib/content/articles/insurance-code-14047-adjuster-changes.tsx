import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: 'Insurance Code Section 14047: Your Rights When a Third Adjuster Takes Over',
  description:
    "California Insurance Code § 14047 gives residential policyholders on state-of-emergency claims a right to a primary point of contact when a third adjuster is assigned within six months. What the statute actually says — and does not say.",
  summary:
    "When a third or subsequent adjuster is assigned to a residential state-of-emergency claim within six months, California Insurance Code § 14047 requires the insurer to provide a written status report, establish a primary point of contact, and keep that contact assigned until the claim closes or litigation is filed. This article quotes the statute verbatim, corrects a common overstatement about what the report must contain, and explains how § 14047 sits alongside the Fair Claims Settlement Practices Regulations.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. Whether Insurance Code section 14047 was
          triggered on a particular claim, and what remedy &mdash; if any &mdash;
          follows from a violation, are legal questions that belong with a licensed
          California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A close reading of California Insurance Code section 14047 &mdash; the
          one statute written specifically for adjuster churn on disaster claims
          &mdash; setting out exactly what triggers it, quoting its operative
          language word for word, and separating what the statute actually requires
          from what it is sometimes said to require.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Anyone who has carried a residential wildfire or disaster claim for the
        better part of a year knows the churn: a first adjuster who engages, then
        disappears; a second who arrives with no memory of the file and a fresh set
        of duplicate document requests; a third, then a fourth, each handoff resetting
        the conversation and quietly reopening decisions the last handler had seemed
        to settle. The full tactical picture &mdash; why the reassignments cluster
        around substantive acknowledgments, and how the pattern reinforces the other
        games insurers play &mdash; is covered in this site&apos;s companion article,{' '}
        <Link href="/resources/games-insurers-play-adjuster-musical-chairs" className="text-[#2E74B5] underline">
          Games Insurers Play: Musical Chairs With Adjusters
        </Link>
        . This article is narrower and more technical. It is about the single
        California statute the Legislature aimed directly at that problem &mdash;
        Insurance Code section 14047 &mdash; and about reading it precisely, because
        the statute&apos;s real value lies in provisions that are easy to overlook and
        its scope is easy to overstate.
      </p>

      <CalloutBox variant="tip" title="Read the Companion Article for the Full Pattern">
        <p>
          Readers who want the broader picture of how adjuster reassignment is used
          &mdash; the walked-back acknowledgments, the reset document requests, the
          lost file &mdash; may want to start with{' '}
          <Link href="/resources/games-insurers-play-adjuster-musical-chairs" className="text-[#2E74B5] underline">
            Musical Chairs With Adjusters
          </Link>
          . This article assumes that context and focuses on one thing: what section
          14047 says, and what it does not.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Section 14047 Came From
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 14047 was added by Senate Bill 240 (Stats. 2019, ch. 502) and took
        effect in late 2019. It is a targeted, emergency-specific provision, not a
        general claims-handling rule. The Legislature had watched a decade of major
        California wildfires generate the exact adjuster-churn pattern described above,
        and it wrote a statute for one slice of that problem: the residential
        policyholder whose disaster claim is passed from adjuster to adjuster to
        adjuster in a short window. The remedy it chose is not a penalty or a damages
        provision. It is a continuity requirement &mdash; a right to a stable, named,
        accountable point of contact once the churn crosses a defined threshold.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because the statute is narrow, reading it precisely matters. A policyholder
        who cites it on a claim it does not cover invites an easy rebuttal, and a
        policyholder who describes it as requiring things it does not require invites
        the same. The sections that follow track the statute&apos;s own structure:
        first the trigger, then the duties, then the limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Exactly What Triggers It: Three Elements
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 14047 is triggered only when three elements are present at once. Each
        is worth stating plainly, because the omission of any one takes the claim
        outside the statute entirely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. A Residential Property Insurance Claim
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The statute applies to a claim &ldquo;under a policy of residential property
        insurance,&rdquo; which subdivision (d) defines by reference to Insurance Code
        section 10087. A commercial property claim does not qualify. The homeowner,
        condominium-unit, or renters-style residential claim is the intended subject.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. A Loss Arising From a Declared State of Emergency
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The claim must arise &ldquo;as a result of a state of emergency, as defined in
        subdivision (b) of Section 8558 of the Government Code.&rdquo; That is the
        Governor-declared state of emergency &mdash; the declaration that follows a
        major wildfire, earthquake, or flood. An ordinary residential water loss with
        no emergency declaration behind it is not within section 14047, however many
        adjusters cycle through it. This is the element most often missed. The statute
        is a disaster-claims statute; the emergency declaration is the gate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. A Third or Subsequent Adjuster Within Six Months
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The operative trigger is the assignment, &ldquo;within a six-month period,&rdquo;
        of a &ldquo;third or subsequent first-party real or personal property claims
        adjuster to be primarily responsible for a claim.&rdquo; The count is of
        adjusters made <em>primarily responsible</em> for the claim, not of every
        person who touches the file. The duty attaches on the third such assignment
        within a six-month window &mdash; not the second. A claim that has seen two
        primary adjusters has not yet crossed the threshold; the third assignment is
        what turns the statute on.
      </p>

      <CalloutBox variant="warning" title="All Three Elements, or the Statute Does Not Apply">
        <p>
          Section 14047 reaches only a residential claim, arising from a declared
          state of emergency, on which a third or subsequent primary adjuster is
          assigned within six months. A non-emergency claim, a commercial claim, or a
          claim still on its second adjuster falls outside it. That does not leave a
          policyholder without recourse &mdash; other duties and regulations, discussed
          below, apply regardless of section 14047 &mdash; but the specific
          continuity right in this statute depends on all three elements being present.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Statute Actually Requires
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the trigger is met, subdivision (a) imposes three duties on the insurer,
        in the statute&apos;s own words:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;For a claim under a policy of residential property insurance arising as
        a result of a state of emergency, as defined in subdivision (b) of Section 8558
        of the Government Code, if, within a six-month period, an insurer assigns a
        third or subsequent first-party real or personal property claims adjuster to be
        primarily responsible for a claim, the insurer, in a timely manner, shall
        provide the insured with a written status report, establish a primary point of
        contact for the insured, and provide the insured with one or more direct means
        of communication with the primary point of contact.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        Three things, then: a written status report, a primary point of contact, and a
        direct means of reaching that contact &mdash; all &ldquo;in a timely manner.&rdquo;
        Each deserves a careful word, because the ordering of their importance is not
        obvious on a first read.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Written Status Report &mdash; and What the Statute Does Not Say About It
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Subdivision (a) requires that the insurer &ldquo;provide the insured with a
        written status report.&rdquo; That is the entire textual command about the
        report. This point matters, because the report is frequently described &mdash;
        in circulating summaries and even in some well-meaning guidance &mdash; as
        having to itemize specific contents: the amount of losses to structures and
        contents, the professionals retained, the coverage available, the items in
        dispute. Read against the actual text, that description overstates the statute.
        <strong> Section 14047 does not enumerate any required contents of the written
        status report.</strong> It says a written status report must be provided; it
        does not specify what the report must contain. A reader relying on the statute
        is on solid ground asking for the report, and on much softer ground insisting
        the report take a particular itemized form, because that itemized form is not in
        the words the Legislature enacted.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a correction of the record worth making plainly. It is easy to
        embellish a helpful statute into a more powerful one than it is, and doing so
        tends to backfire: an insurer whose compliance department reads the statute
        will notice the gap between what a demand claims section 14047 requires and
        what section 14047 actually says. The accurate statement is the more useful
        one. The report is required; its contents are left to the insurer, subject to
        the ordinary claims-handling duties that apply to every communication a carrier
        sends.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Primary Point of Contact &mdash; and the Duty to Stay Assigned
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The status report is the visible half of the statute. The quieter half &mdash;
        and, in practice, the more valuable one &mdash; is the primary point of contact
        and the duty that attaches to it. Subdivision (b) provides:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;The primary point of contact shall be available to respond to inquiries
        by the insured related to the residential property insurance claim. Other
        claims personnel, vendors, or professionals, including clerical staff members
        and call center staff members, may work on portions of the insured&apos;s
        claim. Once assigned, the primary point of contact shall remain assigned to the
        insured&apos;s claim until the insurer determines that the residential property
        claim is closed or litigation has been filed.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        That last sentence is the real anti-churn mechanism in the statute. A written
        status report is a snapshot; it documents a moment and then goes stale. The
        stay-assigned duty is continuous. Once the insurer establishes a primary point
        of contact, subdivision (b) requires that person to &ldquo;remain assigned to
        the insured&apos;s claim until the insurer determines that the residential
        property claim is closed or litigation has been filed.&rdquo; The statute still
        permits other personnel, vendors, and staff to work portions of the claim
        &mdash; it does not freeze the whole team &mdash; but it fixes one accountable
        point of contact for the insured through the life of the claim. On a claim
        whose defining problem is that no one stays on it, a durable named contact is
        the point.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Subdivision (d) defines who that contact must be:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;&lsquo;Primary point of contact&rsquo; means a first-party real or
        personal property claims adjuster or team employed as a member or members of
        the insurer&apos;s staff who are knowledgeable about the claim and its current
        status.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        The definition sets a floor: the contact is an adjuster or team on the
        insurer&apos;s staff who is knowledgeable about the claim and its current
        status &mdash; not a call-center queue and not a rotating general line.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Direct Means of Communication and the Supervisor Referral
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Subdivision (a) also requires the insurer to provide &ldquo;one or more direct
        means of communication with the primary point of contact&rdquo; &mdash; a
        direct line, in some form, rather than a general intake number. And subdivision
        (c) adds a supervisor-referral duty:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;The insurer shall ensure that the primary point of contact refers and
        transfers an insured to the appropriate supervisor with a span of control over
        the primary point of contact upon the request of the insured. This process
        shall be satisfied by a referral to a first-tier or second-tier manager with
        authority over claim handling.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        Together these give the insured a stable contact, a direct way to reach that
        contact, and, on request, a path up to a manager with authority over the file.
        That is the whole of what section 14047 provides: continuity and a documented
        record of who is accountable. It is a modest set of rights, but on a churned
        disaster claim it is aimed squarely at the missing piece.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text of the Statute
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 14047 is short, and the accurate reading depends on the words
        themselves. The full text is reproduced below so it can be checked directly.
      </p>

      <DocumentEmbed
        title="California Insurance Code Section 14047"
        source="California Legislative Information"
        date="Added by Stats. 2019, Ch. 502 (SB 240)"
        type="publication"
        sourceUrl="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=14047"
      >
        <p>
          (a) For a claim under a policy of residential property insurance arising as a
          result of a state of emergency, as defined in subdivision (b) of Section 8558
          of the Government Code, if, within a six-month period, an insurer assigns a
          third or subsequent first-party real or personal property claims adjuster to
          be primarily responsible for a claim, the insurer, in a timely manner, shall
          provide the insured with a written status report, establish a primary point
          of contact for the insured, and provide the insured with one or more direct
          means of communication with the primary point of contact.
        </p>
        <p>
          (b) The primary point of contact shall be available to respond to inquiries
          by the insured related to the residential property insurance claim. Other
          claims personnel, vendors, or professionals, including clerical staff members
          and call center staff members, may work on portions of the insured&apos;s
          claim. Once assigned, the primary point of contact shall remain assigned to
          the insured&apos;s claim until the insurer determines that the residential
          property claim is closed or litigation has been filed.
        </p>
        <p>
          (c) The insurer shall ensure that the primary point of contact refers and
          transfers an insured to the appropriate supervisor with a span of control
          over the primary point of contact upon the request of the insured. This
          process shall be satisfied by a referral to a first-tier or second-tier
          manager with authority over claim handling.
        </p>
        <p>(d) For purposes of this section:</p>
        <p>
          (1) &ldquo;Policy of residential property insurance&rdquo; has the same
          meaning as defined in Section 10087.
        </p>
        <p>
          (2) &ldquo;Primary point of contact&rdquo; means a first-party real or
          personal property claims adjuster or team employed as a member or members of
          the insurer&apos;s staff who are knowledgeable about the claim and its
          current status.
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Section 14047 Does Not Do
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Reading the statute accurately also means being clear about its limits. Several
        things section 14047 is sometimes assumed to do, it does not.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It does not cap the number of adjusters.</strong> Nothing in the
          statute limits how many adjusters an insurer may assign. The third assignment
          triggers duties; it does not forbid a fourth, fifth, or tenth. The mechanism
          is continuity of a point of contact, not a ceiling on reassignment.
        </li>
        <li>
          <strong>It does not specify the contents of the status report.</strong> As
          discussed above, the statute requires that a written status report be
          provided but says nothing about what it must contain. Any list of mandatory
          report contents is an addition to the text, not a feature of it.
        </li>
        <li>
          <strong>It does not, in its own text, create a private damages remedy.</strong>{' '}
          Section 14047 states duties. It does not, within its own words, spell out a
          private right of action or a measure of damages for a violation. Whether a
          breach of section 14047 supports any remedy &mdash; and through what legal
          theory &mdash; is a question that belongs with a licensed attorney, not one
          this article can answer. What a policyholder can do without counsel is create
          a clean record and, where a carrier ignores a properly grounded request,
          raise it with the regulator.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        On that last point, the California Department of Insurance takes complaints
        about claims-handling conduct and investigates patterns across a carrier&apos;s
        book of business. A documented failure to comply with a correctly triggered
        section 14047 request &mdash; a residential state-of-emergency claim, a third
        primary adjuster within six months, a written request, and no compliant
        response &mdash; is the kind of specific, verifiable fact that a complaint can
        rest on. This site&apos;s{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
          guide to filing a CDI complaint
        </Link>{' '}
        walks through that channel. Whether to pursue a private remedy on top of a
        regulatory complaint is a separate decision for counsel.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Policyholder Might Use It
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Used accurately, section 14047 is a quiet, low-cost tool. When a third primary
        adjuster appears on a residential claim arising from a declared emergency, a
        policyholder might note the statute in writing &mdash; identifying the claim as
        residential, tied to the declared emergency, and now on its third or subsequent
        primary adjuster within six months &mdash; and ask the insurer to do the three
        things subdivision (a) requires: provide the written status report, identify
        the primary point of contact, and confirm the direct means of reaching that
        person. The request might also ask the insurer to confirm, in the words of
        subdivision (b), that the primary point of contact will remain assigned to the
        claim until the claim is closed or litigation is filed.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The value of doing this is not dramatic and it is honest to say so. The statute
        does not force a settlement or resolve a coverage dispute. What it produces is
        continuity and a documented record: a named, accountable contact the insured
        can reach, and a paper trail showing the statute was invoked and how the carrier
        responded. In practice, that continuity is frequently what matters most on a
        churned claim. In this author&apos;s experience, getting a stable and accountable
        contact assigned &mdash; someone who knows the file and stays with it &mdash; is
        often the single change that moves a claim that had been stalled by reassignment.
        The mechanics of the reassignment game, and how a durable contact defuses it, are
        covered in{' '}
        <Link href="/resources/adjuster-changes-mid-claim" className="text-[#2E74B5] underline">
          When Your Adjuster Changes Mid-Claim
        </Link>
        .
      </p>

      <CalloutBox variant="tip" title="Keep the Request Grounded in the Actual Text">
        <p>
          A request that tracks the statute&apos;s real words &mdash; asking for the
          written status report, the primary point of contact, the direct means of
          communication, and confirmation of the stay-assigned duty &mdash; is harder
          for a carrier to brush aside than one that claims the statute requires things
          it does not. Accuracy is the leverage here. The overstated demand is the one a
          compliance reviewer can dismiss on its own terms.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How It Fits With the Fair Claims Regulations
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 14047 does not stand alone, and it does not displace the general
        claims-handling clocks. The California Fair Claims Settlement Practices
        Regulations keep running regardless of how many times the adjuster changes. A
        reassignment does not pause the insurer&apos;s deadlines; the obligations run
        against the insurer, not against whichever individual happens to hold the file
        that week. Three of those duties are the ones a churned claim tends to test:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>10 CCR &sect; 2695.5(b)</strong> requires the insurer to respond to
          communications from the claimant that reasonably suggest a response is
          expected within fifteen calendar days. A new adjuster who has not answered a
          pending question does not reset that clock.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.7(b)</strong> requires the insurer to accept or
          deny the claim, in whole or in part, within forty calendar days of receiving
          a properly documented proof of claim. Adjuster turnover is not an exception to
          that deadline.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.7(c)</strong> requires the insurer to provide the
          claimant with written notice of the need for additional time, and to continue
          providing status updates, at thirty-calendar-day intervals while the claim
          remains open. This is the ongoing status-update duty that applies to every
          open claim, emergency or not.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The relationship is additive, not substitutive. Section 14047 layers an
        emergency-specific continuity right &mdash; the primary point of contact and
        the stay-assigned duty &mdash; on top of the ordinary regulatory clocks; it does
        not replace them. For a residential state-of-emergency claim on its third
        adjuster, both sets of authorities apply, and they address different problems:
        section 14047 addresses who is handling the file and whether that person stays;
        the Fair Claims Regulations address whether the file is actually moving and
        whether the insurer is meeting its response, decision, and status-update
        deadlines. A fuller walkthrough of the regulatory framework appears in this
        site&apos;s guide to the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California Fair Claims Settlement Practices Regulations
        </Link>
        . For non-emergency and commercial claims &mdash; where section 14047 does not
        reach &mdash; those regulations are the framework that governs adjuster churn.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What is California Insurance Code 14047?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance Code section 14047 is a California statute, added by Senate Bill 240
        in 2019, that applies to residential property insurance claims arising from a
        declared state of emergency. When an insurer assigns a third or subsequent
        adjuster to be primarily responsible for such a claim within a six-month
        period, the statute requires the insurer to provide a written status report,
        establish a primary point of contact for the insured, and provide a direct means
        of reaching that contact. The primary point of contact must remain assigned to
        the claim until the insurer determines the claim is closed or litigation has been
        filed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What does the 14047 third-adjuster status report have to contain?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The statute requires only that a written status report be provided; it does not
        specify what the report must contain. Descriptions that list mandatory report
        contents &mdash; a required breakdown of structure and contents losses, retained
        professionals, coverage amounts, and disputed items &mdash; go beyond the text
        of section 14047, which does not enumerate the report&apos;s contents. The
        accurate reading is narrower: the report is required; its form and detail are not
        specified by the statute, though the insurer&apos;s general claims-handling
        duties continue to apply to whatever it sends.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is there a California law for when the adjuster keeps changing?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For one specific situation, yes. Section 14047 addresses adjuster churn on
        residential claims arising from a declared state of emergency, triggering on the
        third or subsequent primary adjuster within six months. Outside that narrow
        situation &mdash; a non-emergency residential claim, or any commercial claim
        &mdash; there is no statute aimed specifically at adjuster changes, and a
        policyholder&apos;s recourse runs instead through the Fair Claims Settlement
        Practices Regulations, which impose response, decision, and status-update
        deadlines on the insurer no matter how often the handler changes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What is a primary point of contact on an insurance claim?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under section 14047(d), a primary point of contact is a first-party property
        claims adjuster or team, employed on the insurer&apos;s staff, who is
        knowledgeable about the claim and its current status. Once the statute is
        triggered and the insurer establishes that contact, subdivision (b) requires the
        contact to remain assigned to the claim until the insurer determines the claim is
        closed or litigation has been filed. Other personnel and vendors may still work
        parts of the claim, but the insured is entitled to one accountable, reachable
        point of contact, along with a direct means of communication and, on request, a
        referral to a supervising manager.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does section 14047 give the policyholder a right to sue for damages?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The statute itself states duties; it does not, in its own text, spell out a
        private right of action or a measure of damages for a violation. Whether a
        breach of section 14047 supports any remedy, and under what theory, is a legal
        question for a licensed California attorney. Without counsel, a policyholder can
        still build a clean documentary record and, where a properly triggered request is
        ignored, raise the conduct with the California Department of Insurance through the{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
          complaint process
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/games-insurers-play-adjuster-musical-chairs" className="text-[#2E74B5] underline">
            Games Insurers Play: Musical Chairs With Adjusters
          </Link>{' '}
          &mdash; the companion article: the full tactical picture of how adjuster
          reassignment is used on long-duration claims
        </li>
        <li>
          <Link href="/resources/adjuster-changes-mid-claim" className="text-[#2E74B5] underline">
            When Your Adjuster Changes Mid-Claim
          </Link>{' '}
          &mdash; why carriers rotate adjusters, the practical costs, and how a durable
          contact defuses the pattern
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims Settlement Practices Regulations
          </Link>{' '}
          &mdash; the response, decision, and status-update clocks that run regardless of
          adjuster changes
        </li>
        <li>
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
            How to File a Complaint With the California Department of Insurance
          </Link>{' '}
          &mdash; the regulatory channel for a carrier that ignores a properly grounded
          request
        </li>
        <li>
          <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
            The Claim File You Never See
          </Link>{' '}
          &mdash; what lives in the claim file beyond the estimate, and how a
          policyholder obtains it under California law
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 14047 is a small statute with one clear purpose: on a residential
        disaster claim that has been passed among too many adjusters too quickly, it
        gives the insured a right to a stable, named, accountable point of contact who
        stays with the file. Its power lies in the stay-assigned duty, not in a
        report-contents requirement it does not contain. Read for what it actually says,
        it is a genuinely useful continuity tool. Read for what it is sometimes said to
        say, it invites an easy rebuttal. The accurate reading is the one that holds up.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Statutes and regulations change, and their application depends on the specific facts of a
        claim. The text of Insurance Code section 14047 quoted here should be confirmed against the
        current version at leginfo.legislature.ca.gov before being relied upon in formal
        communications, and any question about a remedy for a violation should be directed to a
        licensed California attorney.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
