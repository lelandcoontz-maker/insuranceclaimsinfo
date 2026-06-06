import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Discovery in Insurance Property Litigation: Getting the Evidence You Need',
  description:
    'How discovery works in insurance lawsuits, what documents and electronic records policyholders can demand, how to obtain the carrier’s claims file, and the landmark Colonial Life case allowing pattern-and-practice discovery of other claim files.',
  summary:
    'In an insurance lawsuit, discovery lets you demand the carrier\'s claim file, internal records, and electronic data. The landmark Colonial Life case even allows discovery of other claim files to prove a pattern and practice of bad faith.',
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
        Insurance litigation is fundamentally asymmetric. The insurance company has
        everything &mdash; the claims file, the adjuster&rsquo;s notes, the internal communications,
        the expert reports it commissioned, the reserve history, the authority levels, the training
        manuals, the claims-handling guidelines. The policyholder has almost nothing except their own
        documents and the memory of what happened. Discovery is the legal process that corrects this
        imbalance. It is how you force the insurance company to hand over the information it has been
        keeping from you &mdash; and in many cases, that information is what wins the case.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Discovery Is and Why It Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovery is the pre-trial phase of litigation where each side has the right to request
        documents, ask written questions (interrogatories), and take depositions of the other
        side&rsquo;s witnesses. In insurance litigation, discovery is where the real battle happens.
        The carrier&rsquo;s{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>{' '}
        is rarely visible from the outside. The insurer does not send you a letter saying &ldquo;we
        are intentionally underpaying your claim.&rdquo; The evidence of bad faith lives inside the
        carrier&rsquo;s own files &mdash; in adjuster diaries, internal emails, reserve decisions,
        and communications with the experts the carrier hired to support its position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without discovery, a policyholder is litigating blind. With it, the entire picture changes.
        Discovery has uncovered adjuster notes admitting that a claim was valid but instructing a
        lowball offer anyway. It has produced internal emails showing that an insurer&rsquo;s own
        engineer disagreed with the denial before the carrier hired a different engineer who would
        say what they wanted. It has revealed reserve histories proving that the carrier internally
        valued a claim at far more than it offered. These are the kinds of facts that turn an
        underpayment dispute into a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith case
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Claims File &mdash; The Heart of Every Insurance Case
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important category of discovery in insurance litigation is the
        carrier&rsquo;s claims file. This is the insurer&rsquo;s own record of how it handled your
        claim, and it often contains evidence that directly contradicts the carrier&rsquo;s stated
        reasons for denying or underpaying.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Adjuster Diaries and Notes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusters are required to maintain diaries &mdash; running notes documenting their activity on
        the claim. These notes often contain the adjuster&rsquo;s real-time impressions of the damage,
        candid assessments of coverage, and notations about instructions received from supervisors.
        The diary frequently tells a very different story than the official correspondence the
        policyholder received. An adjuster might note that the damage appears to exceed $200,000 in
        the diary, then send the policyholder an estimate for $85,000 &mdash; because the supervisor
        told them to cut it.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Internal Emails and Communications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Internal emails between the adjuster, the adjuster&rsquo;s supervisor, the claims manager,
        and the home office are often the most revealing documents in discovery. These communications
        show the decision-making process &mdash; who decided to deny or reduce the claim, what
        reasons were discussed internally, and whether anyone raised concerns about the decision.
        Carriers know these emails are discoverable, so experienced adjusters are trained to be
        careful about what they put in writing. But the training is not always followed, and candid
        emails slip through regularly.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Reserve Information and Authority Levels
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reserves are the internal dollar amount the insurer sets aside for a claim &mdash; their own
        estimate of what the claim is likely to cost. Reserve information is powerful evidence because
        it reflects the insurer&rsquo;s own assessment of the claim&rsquo;s value. If the carrier set
        reserves at $350,000 but offered you $120,000, that gap is difficult to explain away. Authority
        levels &mdash; the dollar amount the adjuster was authorized to settle for &mdash; tell a
        similar story. If the adjuster had authority for $200,000 but offered you $80,000, that raises
        serious questions about the insurer&rsquo;s good faith. For more on how{' '}
        <Link href="/resources/reserves-and-authority" className="text-[#2E74B5] underline">
          reserves and authority
        </Link>{' '}
        work in insurance claims, see our detailed article.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Expert Reports Commissioned by the Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely hire{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
          engineers, hygienists, and other experts
        </Link>{' '}
        to support their position. The carrier&rsquo;s claims file should contain all expert reports,
        including drafts. Draft reports are particularly valuable &mdash; they sometimes show that the
        expert&rsquo;s initial findings were favorable to the policyholder before the carrier directed
        changes. The file should also contain all communications between the carrier and the expert,
        including the engagement letter that defined the scope of the assignment.
      </p>

      <CalloutBox variant="important" title="Carriers Will Fight to Withhold the Claims File">
        <p>
          Do not expect the insurer to produce the claims file voluntarily or completely. Carriers
          routinely withhold documents by claiming attorney-client privilege or work product
          protection, often on materials that were created before any attorney was involved in the
          claim. Your attorney will likely need to file a motion to compel and challenge the
          carrier&rsquo;s privilege log line by line. Courts frequently order production of documents
          the carrier claimed were privileged &mdash; because claims handling and litigation
          preparation are two different things, and the carrier cannot retroactively cloak
          claims-handling documents with privilege by sending them to a lawyer after the fact.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Electronic Discovery (ESI) &mdash; The Digital Trail
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern insurance claims handling is almost entirely digital, which means that an enormous
        amount of evidence exists in electronic form. Electronically stored information (ESI) can
        reveal things that paper documents cannot &mdash; including metadata, system logs, and
        communications the carrier may not have anticipated would be discoverable.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Claims Management Software Systems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies use sophisticated claims management platforms &mdash; systems like
        Guidewire ClaimCenter, Xactanalysis, Symbility, and proprietary internal systems &mdash; to
        track every action taken on a claim. These systems log who accessed the claim, when they
        accessed it, what changes were made, and what decisions were entered. The system logs can
        show, for example, that a supervisor overrode the field adjuster&rsquo;s estimate at
        2:47 PM on a Tuesday &mdash; a level of specificity that adjuster diaries rarely capture.
        Requesting data exports from these systems is a critical part of ESI discovery.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Email Archives &mdash; Beyond the Adjuster
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovery of email should not be limited to the assigned adjuster&rsquo;s mailbox. Request
        emails from supervisors, claims managers, regional directors, and anyone in the chain of
        command who was involved in decisions about your claim. Also request emails to and from the
        carrier&rsquo;s retained experts &mdash; the communications between the carrier and its hired
        engineer often reveal exactly what the carrier wanted the expert to find.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Text Messages and Instant Messages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusters, especially independent adjusters working catastrophe claims, frequently
        communicate by text message and internal messaging platforms. These messages are often more
        candid than emails because the participants do not expect them to be discovered. Text
        messages between adjusters &mdash; or between an adjuster and a supervisor &mdash; can
        contain admissions, complaints about being told to lowball claims, or discussions about how
        to justify a number the adjuster knows is inadequate.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Recorded Phone Calls
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurance companies record phone calls with policyholders. These recordings are
        discoverable and should be requested. If the carrier took a{' '}
        <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] underline">
          recorded statement
        </Link>{' '}
        from you, you are entitled to a copy. But also request any internal calls that were recorded
        &mdash; calls between the adjuster and the supervisor, calls with retained experts, and calls
        with independent adjusting firms. Not all internal calls are recorded, but when they are,
        the content can be devastating.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Electronic Notes vs. the Formal Claims Diary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Claims management systems often have multiple fields for notes &mdash; the formal diary
        entries that become part of the official claims file, and informal notes, task lists, and
        status fields that may not appear in the standard diary printout. Requesting the full
        database export of the claim record &mdash; not just the diary &mdash; can reveal notes and
        entries the carrier did not include in its initial production. The metadata associated with
        these entries (who created them, when, and whether they were edited) adds another layer of
        evidence.
      </p>

      <CalloutBox variant="tip" title="Preservation Letters Matter">
        <p>
          Before litigation even begins, your attorney should send a litigation hold or preservation
          letter to the carrier demanding that all ESI related to your claim be preserved. This
          prevents the carrier from claiming that emails, text messages, or system logs were deleted
          in the ordinary course of business. If the carrier destroys evidence after receiving a
          preservation letter, it can face sanctions &mdash; including adverse inference instructions
          telling the jury to assume the destroyed evidence was unfavorable to the carrier.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Independent Adjusters, Engineers, and Other Experts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies do not handle everything in-house. They hire independent adjusting firms,
        engineering companies, industrial hygienists, and other experts to inspect properties and
        produce reports. These third parties maintain their own files &mdash; separate from the
        carrier&rsquo;s claims file &mdash; and those files are independently discoverable.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The IA Firm&rsquo;s Own File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The independent adjusting (IA) firm that inspected your property maintains its own claim file.
        This file may contain the field adjuster&rsquo;s original notes, photographs, measurements,
        and &mdash; critically &mdash; the adjuster&rsquo;s original estimate before it was revised
        by the carrier or the IA firm&rsquo;s desk review team. Subpoenaing the IA firm&rsquo;s
        complete file often reveals discrepancies between the field findings and the final report
        sent to the carrier.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Engagement Letters and Scope of Assignment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier hires an engineer or expert, it sends an engagement letter defining the scope
        of the assignment. These letters are critical because they often reveal what the carrier was
        looking for &mdash; and what it told the expert to focus on. An engagement letter that asks
        the engineer to &ldquo;evaluate whether the damage is consistent with the reported cause of
        loss&rdquo; is very different from one that asks the engineer to &ldquo;determine whether the
        damage could be attributed to pre-existing conditions or deferred maintenance.&rdquo; The
        framing of the question often predetermines the answer. Your attorney should demand production
        of every engagement letter, scope of work document, and instruction given to every expert the
        carrier retained on your claim. For more on this topic, see our article on{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
          biased insurance experts
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Draft Reports vs. Final Reports
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful areas of discovery involves obtaining draft expert reports. When an
        engineer or other expert produces a draft report and the carrier requests changes before the
        final version is issued, that revision history is potentially discoverable. If the
        engineer&rsquo;s draft found that the roof damage was caused by hail and the final report
        attributes it to &ldquo;wear and tear,&rdquo; the change speaks for itself. The carrier will
        assert work product protection over drafts, but courts have increasingly recognized that
        when the expert is performing a claims-handling function (as opposed to being retained
        specifically for litigation), the work product doctrine does not apply.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Billing Records and the Financial Relationship
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        How much money has the carrier&rsquo;s expert received from this carrier over the past five
        years? How many assignments has the firm handled for this insurer? What percentage of the
        expert&rsquo;s revenue comes from this single carrier? Billing records and business volume
        data are discoverable and directly relevant to expert bias. An engineer who receives $2
        million per year from a single carrier has a financial incentive to produce findings favorable
        to that carrier &mdash; and a jury can evaluate that relationship when assessing the
        expert&rsquo;s credibility. This information goes to the heart of the{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
          repeat-player expert problem
        </Link>{' '}
        that pervades the insurance industry.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pattern and Practice Discovery &mdash; The <em>Colonial Life</em> Case
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful discovery tools in insurance bad faith litigation is the right to
        obtain information about <em>other</em> claim files &mdash; not just yours. The landmark
        California case establishing this right is <em>Colonial Life &amp; Accident Insurance Co. v.
        Superior Court</em>, 31 Cal.3d 785 (1982).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Colonial Life</em>, the policyholder (Louise Perry) sued the carrier for bad faith.
        She sought discovery of the names, addresses, and records of other claimants whose claims
        were handled by the same adjuster &mdash; an adjuster named Sharkey &mdash; to establish
        a pattern of unfair settlement practices. Colonial resisted, arguing that the
        information was irrelevant and that disclosing other insureds&rsquo; information would violate
        their privacy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court rejected Colonial&rsquo;s arguments and allowed the discovery.
        The Court held that evidence of other instances of unfair settlement practices by the same
        adjuster or the same carrier is directly relevant to establishing bad faith &mdash; and
        especially relevant to the claim for punitive damages. As the Court explained, a plaintiff
        may establish a claim by showing either that the acts that harmed her were knowingly committed
        or were &ldquo;engaged in with such frequency as to indicate a general business
        practice.&rdquo; Discovery aimed at determining the frequency of alleged unfair settlement
        practices is therefore likely to produce evidence directly relevant to the action.
      </p>

      <CalloutBox variant="important" title="Why Pattern and Practice Discovery Is So Powerful">
        <p>
          <em>Colonial Life</em> discovery transforms a bad faith case from a dispute about one
          claim into evidence of a systemic problem. If discovery reveals that the same adjuster
          underpaid 50 other claims using the same tactics, the carrier can no longer argue that
          your claim was a reasonable, good-faith disagreement. It becomes evidence of a deliberate
          pattern &mdash; which is exactly what a jury needs to hear when considering punitive
          damages. This is the kind of evidence that changes settlement dynamics entirely.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Court addressed Colonial&rsquo;s privacy concerns by allowing the discovery to proceed
        with appropriate protective measures. Other insureds&rsquo; identifying information could be
        protected, and the court could fashion protective orders as needed. But the carrier could
        not use privacy as a blanket shield to prevent discovery of evidence showing a pattern of
        bad faith conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Colonial Life</em> and its progeny have established that other-claim-file discovery is
        relevant to multiple purposes: showing the insurer&rsquo;s bad faith and past misconduct by
        the claims representative; showing the insurer&rsquo;s knowledge of particular facts or
        relevant legal standards; clarifying ambiguities in the policy by showing how the carrier
        interpreted the same language in other claims; and &mdash; most critically &mdash;
        establishing a basis for punitive damages by showing a course of conduct reflecting malice,
        oppression, or fraud. In practice, this means your attorney can seek data on every claim the
        same adjuster handled, every claim where the carrier used the same{' '}
        <Link href="/resources/carrier-claims-tactics" className="text-[#2E74B5] underline">
          claims-handling tactics
        </Link>, and every claim where the same expert produced a report minimizing damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Privilege Issues in Insurance Discovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies fight discovery at every step, and their primary weapon is privilege. Two
        doctrines dominate the battle: the work product doctrine and attorney-client privilege. Both
        are legitimate protections, but carriers routinely overassert them to withhold documents that
        should be produced.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Work Product Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The work product doctrine protects materials prepared in anticipation of litigation. In
        insurance cases, the key question is: when did the carrier transition from investigating and
        adjusting the claim (a contractual duty) to preparing for litigation? Documents created during
        the normal claims-handling process are not work product &mdash; even if the carrier later
        uses them in litigation. The adjuster&rsquo;s initial investigation, the field notes, the
        damage assessment, the reserve decision, and communications about whether coverage exists
        are all claims-handling activities, not litigation preparation. Only materials created after
        the carrier reasonably anticipated litigation, and created primarily for litigation purposes,
        qualify for work product protection.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Attorney-Client Privilege
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney-client privilege protects confidential communications between the carrier and its
        attorneys. However, the privilege does not attach simply because the carrier routed documents
        through an attorney. If the carrier sent claims-handling documents to outside counsel for
        review and then stamped them &ldquo;privileged,&rdquo; that does not make them privileged.
        The communication must be made for the purpose of obtaining legal advice, and the privilege
        does not cover the underlying facts &mdash; only the legal advice itself. Carriers
        frequently try to cloak ordinary claims-handling decisions in privilege by involving an
        attorney after the fact. Courts have consistently rejected this tactic.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The &ldquo;Dual Purpose&rdquo; Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most contested privilege issue in insurance litigation is the &ldquo;dual
        purpose&rdquo; document &mdash; a document created both for claims-handling purposes and in
        anticipation of litigation. Carriers argue that any document touching on coverage should be
        protected once litigation is anticipated. But courts have recognized that an insurer has a
        continuing duty to investigate and adjust the claim even after litigation has been filed.
        Documents created in furtherance of that duty are not privileged simply because a lawsuit is
        also pending. The test is the <em>primary purpose</em> of the document &mdash; if it was
        created primarily for claims handling, it is discoverable regardless of whether it also serves
        a litigation purpose.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Crime-Fraud Exception
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Neither attorney-client privilege nor work product protection applies when the communication
        or document was made in furtherance of a crime or fraud. In insurance bad faith cases, the
        crime-fraud exception can pierce privilege if the policyholder can show that the carrier used
        its attorney to facilitate the bad faith conduct &mdash; for example, by having an attorney
        draft a denial letter that the carrier knew was based on false or misleading grounds. This is
        a high bar, but when it applies, it strips away the carrier&rsquo;s most powerful shield.
      </p>

      <CalloutBox variant="warning" title="Challenge Every Privilege Claim">
        <p>
          Insurers routinely over-designate documents as privileged on their privilege logs. Do not
          accept a blanket privilege assertion. Your attorney should review the privilege log line
          by line, challenge any document that appears to be a claims-handling document cloaked in
          privilege, and if necessary, ask the court to conduct an in camera review &mdash; where
          the judge examines the documents privately to determine whether the privilege claim is
          valid. Courts frequently order production of documents the carrier withheld, often with
          sanctions for frivolous privilege assertions.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Depositions in Insurance Cases
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document discovery is essential, but depositions bring the evidence to life. In insurance
        litigation, there are several key witnesses whose testimony can make or break the case.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Person Most Knowledgeable (PMK) Depositions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A PMK deposition (sometimes called a &ldquo;person most qualified&rdquo; deposition) is a
        deposition noticed under California Code of Civil Procedure &sect; 2025.230. Instead of
        naming a specific individual, the notice identifies topics, and the carrier must designate
        the person most knowledgeable about each topic. This is a useful tool because it forces the
        carrier to produce a witness who can testify authoritatively about claims-handling procedures,
        training, guidelines, reserve-setting practices, and the specific decisions made on your
        claim. The carrier cannot hide behind &ldquo;I don&rsquo;t know&rdquo; &mdash; the designated
        witness has a duty to prepare.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Deposing the Assigned Adjuster
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster who handled your claim is the most important fact witness. The adjuster made the
        day-to-day decisions &mdash; what to inspect, what to document, what to include in the
        estimate, what to exclude, and ultimately what to offer. In deposition, the adjuster must
        explain each of those decisions and identify who, if anyone, instructed them to handle the
        claim in a particular way. If the adjuster was told by a supervisor to cut the estimate or
        deny coverage, that testimony is directly relevant to bad faith. Your attorney should have
        the adjuster walk through the entire{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          investigation
        </Link>{' '}
        step by step, comparing the adjuster&rsquo;s testimony to the claims file and diary entries.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Deposing the Supervisor
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The supervisor who set reserves, established authority levels, and reviewed the adjuster&rsquo;s
        work is a critical witness. The supervisor&rsquo;s testimony can reveal the gap between what
        the carrier internally valued the claim at and what it offered the policyholder. It can also
        reveal whether the supervisor directed the adjuster to take specific actions &mdash; reduce
        the estimate, deny a portion of the claim, or decline to inspect certain areas. If the
        supervisor overrode the field adjuster&rsquo;s findings based on a desk review alone, that
        testimony is powerful evidence.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Deposing the Carrier&rsquo;s Expert
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The engineer, industrial hygienist, or other expert who wrote a report for the carrier is a
        key deposition target. The expert must explain their methodology, defend their conclusions,
        and &mdash; critically &mdash; disclose their financial relationship with the carrier. How
        many assignments have they received from this carrier? What percentage of their income comes
        from insurance company work? Were their findings changed between the draft and final report?
        Who asked for the changes? These questions go directly to the credibility of the{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
          carrier&rsquo;s expert
        </Link>{' '}
        and the reliability of the report on which the carrier based its coverage decision.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Policyholders Should Document Before Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovery is a litigation tool. But the policyholder&rsquo;s own evidence starts long before
        any lawsuit is filed. The best time to begin building your record is the day you file your
        claim &mdash; not the day you hire an attorney. Every piece of documentation you create during
        the claims process becomes potential evidence if litigation becomes necessary.
      </p>

      <CalloutBox variant="tip" title="Start Documenting From Day One">
        <p>
          The evidence that wins insurance litigation is not created by attorneys during discovery.
          It is created by policyholders who kept meticulous records from the beginning. The claims
          process is where the insurer&rsquo;s bad faith occurs &mdash; and if you are not
          documenting what is happening in real time, you will be relying on memory later. Memory is
          not evidence. Documents are evidence.
        </p>
      </CalloutBox>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Keep every written communication.</strong> Every email, letter, text message, and
          written notice you send to or receive from the insurance company should be saved. Create a
          dedicated folder &mdash; physical and digital &mdash; and file everything chronologically.
          See our guide on{' '}
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] underline">
            claim negotiation letters
          </Link>{' '}
          for guidance on written correspondence with carriers.
        </li>
        <li>
          <strong>Document every phone call.</strong> For every phone conversation with the carrier,
          note the date, the time, who you spoke with (get their full name and title), and what was
          said. Write it down immediately after the call while the details are fresh. Then send a
          follow-up email to the adjuster confirming what was discussed. This creates a
          contemporaneous written record that is far more persuasive than trying to remember the
          conversation months or years later.
        </li>
        <li>
          <strong>Save every estimate and report.</strong> Every damage estimate, engineering report,
          scope of loss, and repair proposal &mdash; whether produced by the carrier, your
          contractor, or your{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            public adjuster
          </Link>{' '}
          &mdash; should be preserved. If the carrier revises an estimate, save both the original and
          the revision. The changes between versions are often evidence of underpayment.
        </li>
        <li>
          <strong>Photograph and video everything.</strong> Document the damage to your property
          thoroughly with photographs and video before any repairs begin. Take wide shots and close-ups.
          Include measurements where possible. Date-stamp everything. This evidence is your baseline
          and prevents the carrier from later arguing that the damage was less extensive than you claim.
        </li>
        <li>
          <strong>Track deadlines and response times.</strong> California&rsquo;s Fair Claims Settlement
          Practices Regulations impose specific deadlines on insurers &mdash; 15 days to acknowledge
          a claim, 40 days to accept or deny coverage, and other time limits. Document every deadline
          and whether the carrier met it. A pattern of missed deadlines is evidence of bad faith.
        </li>
        <li>
          <strong>Do not throw anything away.</strong> Even documents that seem routine or unimportant
          during the claims process can become critical evidence in litigation. Preserve everything.
          Let your attorney decide what is relevant &mdash; that is not a decision you can make in
          the moment.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The combination of the policyholder&rsquo;s own contemporaneous records and the evidence
        obtained through discovery of the carrier&rsquo;s files creates the complete picture of how
        the claim was handled. One side shows what the policyholder experienced; the other shows what
        the carrier was doing internally. When those two pictures do not match &mdash; when the
        adjuster&rsquo;s diary says one thing and the carrier&rsquo;s formal correspondence says
        something very different &mdash; that inconsistency is the foundation of a bad faith case.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Working With Your Attorney on Discovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovery in insurance litigation is technical, expensive, and contentious. The carrier will
        resist producing documents, assert privilege over everything it can, and delay at every step.
        An experienced insurance litigation attorney knows what to ask for, how to fight for it, and
        how to use it once obtained. The policyholder&rsquo;s role is to provide the attorney with
        every document in their possession, identify every person they communicated with at the
        insurance company, and describe every interaction they had during the claims process. The more
        information the policyholder provides, the more targeted and effective the attorney&rsquo;s
        discovery requests will be.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are still in the claims process and have not yet filed a lawsuit, working with a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed public adjuster
        </Link>{' '}
        can build the factual foundation and contemporaneous record that an attorney will need if
        litigation becomes necessary. A public adjuster documents the insurer&rsquo;s conduct in
        real time &mdash; missed deadlines, lowball offers, unreasonable positions, and regulatory
        violations &mdash; all in the normal course of handling the claim. That record becomes
        invaluable evidence if the case moves to litigation and discovery.
      </p>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Discovery procedures, privilege rules, and case law discussed here are presented
          for informational purposes to help policyholders understand how the litigation process
          works in insurance disputes. The applicability of specific cases, rules, and procedures
          depends on the facts of your situation and the jurisdiction in which your case is filed.
          Always consult with a qualified attorney experienced in insurance litigation for advice
          specific to your case.
        </p>
        <p className="mt-2">
          Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
        </p>
      </CalloutBox>
    </>
  )
}
