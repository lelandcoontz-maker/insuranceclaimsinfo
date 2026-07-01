import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The Insurance Claims File and Your Right to It",
  description:
    "What is in the carrier's claims file, your right to it under California law, and how reserves and diary entries reveal what your insurer really thinks.",
  summary:
    'The carrier\'s claims file, including the adjuster\'s diary, reserve history, and internal notes, reveals what the insurer really thinks about your claim. California law gives you the right to request it, and it can change the outcome.',
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
        Every insurance claim generates a file. From the moment you report a loss, the insurance
        company builds a detailed record of everything that happens &mdash; every phone call,
        every inspection, every internal decision, every dollar amount discussed. This is
        the <strong>claims file</strong>, and it is the single most important collection of
        documents in any insurance dispute. It contains the insurer&apos;s own words about your
        claim &mdash; what they found, what they think, and what they decided not to tell you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders never see their claims file. But when a claim goes wrong &mdash; when
        the payment is too low, the denial makes no sense, or the process drags on for months
        &mdash; the claims file is where the answers are.
      </p>

      {/* ───────── What Is the Claims File ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is the Claims File?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claims file is the complete record the insurance company maintains for every claim.
        It is not a single document &mdash; it is the entire collection of documents, notes,
        communications, reports, photographs, estimates, and internal records associated with
        your claim, from the first notice of loss to the final payment or denial. In the
        industry, it is sometimes called the &ldquo;claim jacket&rdquo; or the &ldquo;loss
        file.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When regulators audit an insurance company, they examine claims files. When attorneys
        litigate{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>{' '}
        cases, they demand claims files. When the California Department of Insurance investigates
        a complaint, the claims file is the first thing they request.
      </p>

      {/* ───────── What Is in the File ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is in the Claims File?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A complete claims file typically contains most or all of the following:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Claims Diary (Activity Log)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is arguably the most valuable part of the entire file. The claims diary is a
        chronological log of every action taken on the claim &mdash; every phone call the
        adjuster made or received, every note the adjuster entered, every time a supervisor
        reviewed the file, every time authority was requested or granted. Modern claims management
        systems automatically timestamp each entry, creating an unalterable record of who did
        what, when, and why.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Adjuster Field Notes and Inspection Reports
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the{' '}
        <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] hover:underline">
          adjuster
        </Link>{' '}
        inspects your property, they take notes about what they saw, what they measured, and what
        they included or excluded from their scope. These field notes often contain observations
        that never make it into the formal estimate &mdash; things like &ldquo;damage appears
        more extensive than initially reported&rdquo; or &ldquo;homeowner mentioned contractor
        estimate of $85,000.&rdquo; The gap between what the adjuster observed and what appeared
        in the final estimate can be revealing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Reserve Amounts and Changes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/reserves-and-authority" className="text-[#2E74B5] hover:underline">
          reserve
        </Link>{' '}
        is the amount of money the insurance company sets aside internally for the claim. Reserve
        history shows every time the reserve was set, increased, decreased, or closed &mdash;
        and the reason given for each change. If the carrier set a reserve of $120,000 but
        offered you $45,000, that discrepancy demands an explanation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Supervisor Instructions, Authority Levels, and Internal Communications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The file records when the adjuster sought authority from a supervisor, what instructions
        were given, and whether the supervisor overrode the field adjuster&apos;s recommendation.
        It also contains emails, internal memos, and messages between the adjuster, supervisors,
        and desk reviewers. These entries are often the most damaging in litigation &mdash; they
        reveal what the insurer actually thought the claim was worth versus what it offered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Expert and Engineer Reports
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Any reports commissioned by the insurance company from outside experts &mdash; engineers,
        forensic consultants, cause-and-origin investigators, environmental specialists. These
        reports sometimes contain findings the insurer chose not to share with the policyholder,
        or conclusions that contradict the insurer&apos;s stated basis for denial. For more on
        how carriers use these reports, see our article on{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] hover:underline">
          biased insurance experts
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Independent Adjuster Reports, Photographs, Estimates, and Correspondence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The file also contains: reports from any independent adjusting firm hired by the carrier
        (which sometimes show the IA recommended a higher payment than the carrier made); every
        photograph the adjuster took; the original estimate, every supplement and revision, and
        any desk review adjustments (comparing versions reveals where line items were removed or
        pricing was changed); and every letter, email, and written communication between the
        insurer and the policyholder, including denial letters, reservation-of-rights letters,
        and payment explanations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        SIU Referrals and Coverage Analysis Memos
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the claim was referred to the Special Investigations Unit &mdash; for suspected fraud,
        arson investigation, or an automated referral threshold &mdash; that referral and any
        resulting investigation will be documented. (See our article on{' '}
        <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">
          recorded statements and SIU
        </Link>.) The file also contains internal coverage analysis memos &mdash; which sometimes
        reveal the insurer&apos;s own analysis supported coverage before management decided to
        deny.
      </p>

      <CalloutBox variant="important" title="The File Contains What the Insurer Does Not Want You to See">
        <p>
          The most valuable information in the claims file is almost always the information the
          insurance company never volunteered. The adjuster&apos;s notes that say the damage was
          worse than the estimate reflects. The supervisor&apos;s instruction to &ldquo;hold the
          line&rdquo; on the offer. The reserve that was set at twice the amount that was offered.
          The engineer&apos;s report that contained findings inconsistent with the denial. None of
          this comes to light unless you request the file.
        </p>
      </CalloutBox>

      {/* ───────── History ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Claims Files Evolved: From Paper Folders to Electronic Systems
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For most of the twentieth century, the claims file was a physical folder &mdash; a manila
        jacket stuffed with handwritten notes, carbon copies of letters, printed photographs, and
        paper estimates. Adjusters carried the file to inspections, added notes by hand, and
        returned it to a filing cabinet at the branch office. There was no reliable audit trail.
        Notes could be added, removed, or altered without detection. Files sat in warehouses and
        were destroyed on retention schedules that varied by company.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The transition to electronic claims management began in the 1980s and accelerated through
        the 1990s as{' '}
        <Link href="/resources/carrier-claims-tactics" className="text-[#2E74B5] hover:underline">
          consulting firms redesigned claims operations
        </Link>. Modern claims management systems &mdash; Guidewire ClaimCenter, Duck Creek Claims,
        Majesco, and dozens of proprietary platforms &mdash; do far more than store documents.
        They automatically log every action, enforce workflow rules, flag claims that exceed
        certain thresholds, route files for supervisor review, and generate reports tracking
        adjuster performance metrics like cycle time and severity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This evolution cuts both ways. Modern systems create a far more complete record than paper
        files ever did &mdash; every keystroke logged, every entry timestamped. But they also
        make it easier for carriers to implement{' '}
        <Link href="/resources/carrier-claims-tactics" className="text-[#2E74B5] hover:underline">
          systematic claims reduction strategies
        </Link>{' '}
        &mdash; automated desk reviews, algorithmic severity scores, and management dashboards
        that pressure adjusters to close claims quickly and cheaply.
      </p>

      <CalloutBox variant="tip" title="Electronic Systems Help Policyholders Too">
        <p>
          The same electronic audit trail that helps the insurer manage claims also helps
          policyholders in disputes. Because modern systems log everything, it is much harder for
          an adjuster to claim they &ldquo;never received&rdquo; your email, or for a supervisor
          to deny they overrode a field recommendation. The electronic record either confirms or
          contradicts what the insurer says happened &mdash; and in litigation, that record is
          discoverable.
        </p>
      </CalloutBox>

      {/* ───────── Your Right to Request It ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Your Right to Request the Claims File Under California Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no single statute that says &ldquo;hand over the entire claims file on
        demand,&rdquo; but several overlapping provisions create a right to claim-related
        documents that, taken together, cover most of what the file contains.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.7(d): Written Explanations for Denials and Reductions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        require that when an insurer denies or reduces a claim, it must provide a written
        explanation of the factual and legal bases for its decision, including reference to
        specific policy provisions. This regulation effectively requires the insurer to disclose
        the substance of its coverage analysis &mdash; the reasoning behind the decision, not
        just the decision itself. A bare denial letter that says &ldquo;your claim is
        denied&rdquo; without explanation violates this regulation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 790.03(h): Unfair Claims Settlement Practices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/insurance-code-790" className="text-[#2E74B5] hover:underline">
          Insurance Code Section 790.03(h)
        </Link>{' '}
        prohibits a range of unfair claims settlement practices, several of which implicitly
        require disclosure of claim-related information. For example, 790.03(h)(13) prohibits
        failing to provide a reasonable explanation for a denial. Section 790.03(h)(3) prohibits
        failing to adopt reasonable standards for prompt investigation. When an insurer refuses
        to explain its decision or share the basis for its position, it is arguably violating
        these provisions.
      </p>

      <CalloutBox variant="legal" title="The CDI Notice of Rights">
        <p>
          The California Department of Insurance requires insurers to provide policyholders with
          a written notice of their rights, informing them that they may request copies of all
          documents relating to the evaluation of their claim &mdash; inspection reports, expert
          reports, estimates, photographs, and other materials the insurer relied upon. This is
          a regulatory obligation, not a courtesy. Refusal to comply can be reported through a{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            formal CDI complaint
          </Link>.
        </p>
      </CalloutBox>

      {/* ───────── The Claims Diary ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Claims Diary: The Most Valuable Part of the File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you could see only one part of the claims file, you would want the claims diary. This
        is the running log of every action, every conversation, and every decision made on the
        claim. The diary tells the story of the claim from the insurer&apos;s perspective &mdash;
        in the insurer&apos;s own words.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every time the adjuster makes a phone call, they are supposed to log it. Every time a
        supervisor reviews the file and gives instructions, that should be recorded. Every time
        the adjuster requests authority for a higher payment and is told no, that entry exists in
        the diary. Every time the adjuster notes that the policyholder&apos;s contractor estimate
        is &ldquo;within reason&rdquo; but the desk reviewer cuts it anyway &mdash; that is in
        the diary.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Typical diary entries include: &ldquo;PH states contractor bid is $87,000. Our estimate
        is $34,000&rdquo; ... &ldquo;Supervisor advises to hold at current offer&rdquo; ...
        &ldquo;Engineer states damage is consistent with reported cause of loss&rdquo; ...
        &ldquo;Reserve increased from $50,000 to $95,000. Claim reassigned to mid-loss
        unit&rdquo; ... &ldquo;Desk review completed. Reduced field estimate from $72,000 to
        $41,000. Removed overhead and profit.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these entries tells you something the insurance company would prefer you not know.
        The diary reveals whether the adjuster was acting on their own professional judgment or
        following instructions from above, whether the insurer&apos;s own investigation supported
        a higher payment, and whether the process was conducted in good faith or was managed to
        minimize the payout.
      </p>

      {/* ───────── Reserve Information ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Reserve Information: What the Carrier Really Thinks Your Claim Is Worth
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/reserves-and-authority" className="text-[#2E74B5] hover:underline">
          reserve
        </Link>{' '}
        is the insurance company&apos;s internal estimate of what the claim will ultimately cost.
        It is set by the adjuster (or the claims management system) and adjusted as the claim
        develops. Reserve amounts are not communicated to the policyholder during the normal
        claims process &mdash; but they can be highly revealing in a dispute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier reserved $150,000 for your claim but offered you $60,000, that gap raises
        an obvious question &mdash; why does the insurer&apos;s own internal assessment differ so
        dramatically from what it is willing to pay? Reserve changes over time tell their own
        story. A reserve that starts at $100,000, drops to $40,000 after a desk review, and
        climbs back to $110,000 after the policyholder hires a Public Adjuster suggests the desk
        review reduction was not a genuine reassessment &mdash; it was an attempt to reduce
        payment that was reversed once the policyholder pushed back with professional
        representation.
      </p>

      <CalloutBox variant="warning" title="Reserves Are Not Always What They Seem">
        <p>
          Insurance companies will argue that reserves are simply accounting estimates and do not
          reflect the &ldquo;true value&rdquo; of a claim. There is some truth to this &mdash;
          reserves include factors like litigation risk and defense costs that have nothing to do
          with the actual damages. But a large gap between the reserve and the offer is always
          worth investigating. If the insurer reserved $150,000 and offered $60,000, something
          in the file explains why &mdash; and it is usually not favorable to the insurer&apos;s
          position.
        </p>
      </CalloutBox>

      {/* ───────── How Attorneys Use Claims Files ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Attorneys Use Claims Files in Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In insurance litigation, the claims file is the centerpiece of{' '}
        <Link href="/resources/discovery-insurance-litigation" className="text-[#2E74B5] hover:underline">
          discovery
        </Link>. Attorneys demand the complete file early in the case because it contains the
        insurer&apos;s own contemporaneous record of how the claim was handled. Unlike trial
        testimony, which is crafted after the fact, the claims file was created in real time by
        people who did not know they were building a litigation record.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Internal communications showing knowledge of underpayment</strong> are often
        the most damaging evidence. When a jury sees an internal email that says &ldquo;field
        adjuster recommends $95,000 but we can settle this for $40,000 if we push back on
        contractor pricing,&rdquo; the insurer&apos;s claim of good faith becomes very difficult
        to maintain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Pattern-and-practice discovery</strong> takes it further. Attorneys sometimes
        seek claims files from <em>other</em> claims handled by the same insurer to show that
        systematic underpayment was not an isolated mistake but a deliberate practice. This type
        of discovery, allowed under cases like <em>Colonial Life &amp; Accident Insurance Co. v.
        Superior Court</em>, can transform an individual claim into a case exposing systemic
        misconduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Depositions built on the diary</strong> are devastating. With the claims file in
        hand, an attorney can ask: &ldquo;You wrote the damage was &apos;significant and
        extensive.&apos; Your estimate was $34,000. Explain.&rdquo; The claims diary turns the
        insurer&apos;s own words into cross-examination material.
      </p>

      {/* ───────── What Insurers Try to Withhold ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Insurers Try to Withhold: Privilege Claims and How to Challenge Them
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder or their attorney requests the claims file, the insurer will almost
        always produce a redacted version with certain documents withheld. The two primary
        grounds for withholding are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Attorney-client privilege.</strong> Communications between the insurer and its
          attorneys about the claim. This is a legitimate privilege, but insurers frequently
          overuse it &mdash; labeling documents as &ldquo;privileged&rdquo; simply because an
          attorney was copied on a routine claims communication, even when the attorney provided
          no legal advice.
        </li>
        <li>
          <strong>Work product doctrine.</strong> Documents prepared in anticipation of litigation.
          Insurers argue that once they reasonably anticipate a lawsuit, documents created after
          that point are protected work product. The key dispute is <em>when</em> litigation was
          reasonably anticipated &mdash; insurers try to push this date as early as possible to
          shield more documents.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These claims can be challenged. Policyholders can demand a &ldquo;privilege log&rdquo;
        &mdash; a detailed list of every withheld document and the basis for each claim. They can
        argue that documents created before litigation was anticipated are not work product, that
        routine claims communications do not become privileged just because an attorney was
        copied, and they can ask the court to conduct an in-camera review of disputed documents.
      </p>

      <CalloutBox variant="important" title="The Insurer Cannot Have It Both Ways">
        <p>
          There is an important legal principle at stake here: an insurer cannot use the
          investigation as both a shield and a sword. If the insurer relies on its investigation
          to justify a denial &mdash; &ldquo;we investigated and determined the damage was
          pre-existing&rdquo; &mdash; the policyholder has a right to see the investigation that
          led to that conclusion. The insurer cannot deny a claim based on its investigation
          and then refuse to disclose the investigation under a claim of privilege. Courts
          generally recognize that when the insurer puts its claims handling at issue, the
          privilege is waived to the extent necessary to evaluate the insurer&apos;s conduct.
        </p>
      </CalloutBox>

      {/* ───────── Practical Steps ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Steps: How to Request Your Claims File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need to be in litigation to request your claims file. Here is how to do it:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Put It in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Send a written request to the adjuster and claims manager &mdash; email is fine, but
        follow up with certified mail. Be specific: request the complete claims file including
        the claims diary, adjuster field notes, all correspondence, all estimates and revisions,
        all expert and engineering reports, photographs, reserve history, and any coverage
        analysis memos.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Cite the Regulatory Basis
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reference 10 CCR &sect; 2695.7(d) and Insurance Code &sect; 790.03(h)(13), and note that
        the CDI&apos;s notice of rights entitles you to copies of all documents that relate to
        the evaluation of your claim. You are not making a legal argument &mdash; you are putting
        the insurer on notice that you know what you are entitled to.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Set a Deadline and Review What You Receive
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Give the insurer 15 to 30 days and note that failure to respond will be documented
        and may form the basis of a CDI complaint. When the file arrives, look for the
        following red flags:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Gaps in the diary.</strong> If the diary jumps from &ldquo;inspected
          property&rdquo; to &ldquo;issued payment&rdquo; with nothing in between, key
          information has been omitted or the investigation was inadequate.
        </li>
        <li>
          <strong>Supervisor overrides.</strong> Look for entries showing the supervisor reduced
          the adjuster&apos;s recommendation. These are evidence that the field assessment was
          overridden for non-technical reasons.
        </li>
        <li>
          <strong>Reserve-to-offer gaps.</strong> If the reserve was significantly higher than
          the offer, that discrepancy needs to be explained.
        </li>
        <li>
          <strong>Desk review reductions.</strong> Compare the field estimate to the final
          estimate. If a desk reviewer reduced the estimate, find the justification &mdash; or
          the lack of one.
        </li>
        <li>
          <strong>Expert reports you never saw.</strong> If the insurer obtained an engineer
          report or specialist assessment and never shared it with you, find out why.
        </li>
        <li>
          <strong>SIU referral.</strong> If your claim was referred to SIU, you should know
          the basis for the referral and the outcome.
        </li>
        <li>
          <strong>Excessive redactions.</strong> If large portions of the file are redacted
          or withheld on privilege grounds, consider whether those claims are legitimate.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Follow Up on Missing Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the production is incomplete &mdash; no claims diary, no reserve history, excessive
        redactions &mdash; send a follow-up letter identifying what is missing. If the insurer
        continues to refuse, file a{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
          complaint with the CDI
        </Link>{' '}
        and consult with an attorney about whether litigation discovery may be necessary.
      </p>

      <CalloutBox variant="tip" title="Get Professional Help With File Review">
        <p>
          A licensed Public Adjuster or an attorney experienced in insurance disputes can review
          your claims file and identify issues you might miss. Claims files can be hundreds of
          pages long, full of industry jargon and internal codes. A professional knows what to
          look for &mdash; the entries that matter, the gaps that are suspicious, and the patterns
          that indicate bad faith.
        </p>
      </CalloutBox>

      {/* ───────── CTA ───────── */}
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help Obtaining or Reviewing Your Claims File?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster can request your claims file on your behalf, review it for
          red flags, and use what it reveals to negotiate a fair settlement.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      {/* ───────── Legal Disclaimer ───────── */}
      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article provides general information about insurance claims files and California
          insurance regulations. It is intended for educational purposes only and does not
          constitute legal advice. The application of any statute, regulation, or legal doctrine
          depends on the specific facts of your situation. If you are involved in an insurance
          dispute that may require litigation, consult with an attorney experienced in California
          insurance law.
        </p>
      </CalloutBox>

      <div className="mt-6">
        <p className="text-gray-500 text-sm leading-relaxed">
          <em>
            Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
          </em>
        </p>
      </div>
    </>
  )
}
