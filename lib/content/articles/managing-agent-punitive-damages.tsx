import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Managing Agent Liability in California Bad Faith Cases",
  description:
    "Identifying managing agents under Civil Code 3294(b), the White v. Ultramar test, ratification doctrine, and settlement leverage in bad faith cases.",
  summary:
    'Punitive damages against an insurer require proving a \'managing agent\' acted with malice or oppression under Civil Code 3294(b) and the White v. Ultramar test. Identifying the right managing agent, and ratification, creates real settlement leverage.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Managing agent liability and punitive damages involve complex legal
          standards that depend on the specific facts of your case. Only a licensed California
          attorney can advise you on whether managing agent liability applies to your situation
          and how to pursue punitive damages in litigation. Nothing in this article should be
          construed as establishing an attorney-client relationship or as a substitute for
          consultation with qualified legal counsel.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Managing Agent Liability Matters in Insurance Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company handles a claim in bad faith, the policyholder may be entitled
        to more than just the unpaid policy benefits. California law authorizes{' '}
        <Link href="/resources/punitive-damages-bad-faith" className="text-blue-700 underline hover:text-blue-900">
          punitive damages
        </Link>{' '}
        &mdash; damages designed not to compensate the policyholder, but to punish the insurer
        for egregious conduct and deter similar behavior in the future. But punitive damages
        against a corporation like an insurance company are not automatic. They require proof
        that the wrongful conduct was committed, authorized, or ratified by a specific category
        of corporate actor: an officer, director, or <strong>managing agent</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This requirement &mdash; found in California Civil Code section 3294, subdivision (b) &mdash;
        is one of the most important gatekeeping mechanisms in bad faith litigation. It determines
        whether a case involves only compensatory damages (the benefits owed plus consequential
        losses) or whether the insurer faces potentially massive punitive exposure. Understanding
        who qualifies as a managing agent, how to identify that person within the insurer&rsquo;s
        corporate hierarchy, and how to prove their involvement is essential for any policyholder
        or attorney contemplating a bad faith action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines the legal framework for managing agent liability in California
        insurance bad faith cases, the landmark cases that define the standard, the discovery
        tools available to identify the managing agent, and the practical settlement leverage
        that comes from establishing this element early in litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Statutory Framework: Civil Code Section 3294(b)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Civil Code section 3294, subdivision (a), provides that a plaintiff may recover
        punitive damages where the defendant has been guilty of oppression, fraud, or malice.
        Subdivision (b) addresses the specific question of when a corporate employer &mdash; such
        as an insurance company &mdash; can be held liable for punitive damages based on the
        conduct of its employees. It provides three pathways:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Advance knowledge and conscious disregard:</strong> The employer had advance
          knowledge of the unfitness of the employee and employed him or her with a conscious
          disregard of the rights or safety of others.
        </li>
        <li>
          <strong>Authorization or ratification:</strong> An officer, director, or managing agent
          of the corporation authorized or ratified the wrongful conduct.
        </li>
        <li>
          <strong>Personal guilt:</strong> An officer, director, or managing agent was personally
          guilty of oppression, fraud, or malice.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        In insurance bad faith cases, the second and third pathways are most commonly at issue.
        The question becomes: Was the person who made the claims decision &mdash; the person who
        denied the claim, set the reserves, or approved the lowball settlement offer &mdash; a
        &ldquo;managing agent&rdquo; of the insurance company? Or alternatively, did an officer,
        director, or managing agent later learn of and approve the adjuster&rsquo;s conduct?
      </p>

      <CalloutBox variant="important" title="Section 3294(b) Punishes the Corporation, Not Just the Employee">
        <p>
          A critical point often missed: Civil Code section 3294, subdivision (b), does not
          impose punitive damages on an employer vicariously for an employee&rsquo;s wrongful
          conduct. It conditions corporate punitive exposure on the corporation&rsquo;s own
          wrongful conduct &mdash; as manifested through the actions, authorization, or
          ratification of its officers, directors, or managing agents. This principle is reflected
          in <em>Weeks v. Baker &amp; McKenzie</em> (1998) 63 Cal.App.4th 1128. The managing
          agent&rsquo;s conduct is treated as the corporation&rsquo;s conduct for punitive
          damages purposes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is a &ldquo;Managing Agent&rdquo;? The Statutory Definition
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The term &ldquo;managing agent&rdquo; is not defined in the text of Civil Code section 3294
        itself. Its meaning has been shaped by decades of case law, beginning with the California
        Supreme Court&rsquo;s seminal decision in <em>Egan v. Mutual of Omaha Insurance Co.</em>{' '}
        (1979) 24 Cal.3d 809 and refined through subsequent decisions, most importantly{' '}
        <em>White v. Ultramar, Inc.</em> (1999) 21 Cal.4th 563.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 1980 amendment that added subdivision (b) to section 3294 was, as California courts
        have since recognized, designed to limit corporate punitive damages exposure to
        misconduct traceable to individuals with genuine policy-making authority. The managing
        agent requirement functions as a gatekeeping mechanism: only when an officer, director,
        or managing agent &mdash; not a low-level employee &mdash; is personally guilty of
        oppression, fraud, or malice, or has knowingly authorized or ratified such conduct, can
        the corporation itself be exposed to punitive damages.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The <em>Egan v. Mutual of Omaha</em> Foundation (1979)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The managing agent concept in insurance bad faith cases traces back to{' '}
        <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809. Michael Egan had
        received disability benefits for three prior back-related injuries under his Mutual of
        Omaha disability policy. When he submitted a fourth claim in May 1970 for a back injury
        suffered during the course of his employment, Mutual of Omaha denied coverage, asserting
        that his condition was an illness rather than a permanent disability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Writing for the California Supreme Court, Justice Stanley Mosk addressed whether the
        conduct of two Mutual of Omaha claims personnel &mdash; agency claims manager McEachen
        and agency claims adjuster Segal &mdash; could be imputed to the corporation for
        punitive damages purposes. The court rejected the insurer&rsquo;s argument that
        liability for punitive damages should turn on any official corporate title. Instead, the
        court held that the relevant inquiry depends on{' '}
        <strong>&ldquo;the degree of discretion the employees possess in making decisions that
        will ultimately determine corporate policy.&rdquo;</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The record demonstrated that both individuals exercised broad discretion in the
        disposition of Egan&rsquo;s claim. The court found that{' '}
        <em>&ldquo;When employees dispose of insureds&rsquo; claims with little if any
        supervision, they possess sufficient discretion for the law to impute their actions
        concerning those claims to the corporation.&rdquo;</em>
      </p>

      <CalloutBox variant="warning" title="What Survives Egan as Precedent">
        <p>
          The jury in <em>Egan</em> awarded $5 million in punitive damages against Mutual of
          Omaha. On appeal, the California Supreme Court{' '}
          <strong>reversed the punitive damages award as excessive as a matter of law</strong>
          {' '}&mdash; the award was over forty times the compensatory damages and was deemed{' '}
          &ldquo;the result of passion and prejudice on the part of the jurors.&rdquo; The
          compensatory damages award of $123,600 against Mutual was affirmed.
        </p>
        <p className="mt-2">
          What survives <em>Egan</em> as binding precedent is the{' '}
          <strong>managing-agent analysis</strong> &mdash; the holding that employees who
          dispose of insureds&rsquo; claims with broad discretion can expose the corporation to
          punitive damages. One caution on chronology: <em>Egan</em> (1979) predates the 1980
          amendment that added subdivision (b) to section 3294, so <em>Egan</em> applied the
          common-law managerial-capacity standard that the Legislature later codified &mdash;
          and that <em>White v. Ultramar</em> (1999) 21 Cal.4th 563 subsequently narrowed. The dollar amount of the jury
          verdict, by contrast, is not precedent for any particular punitive damages ceiling.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The <em>White v. Ultramar</em> Test (1999)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two decades after <em>Egan</em>, the California Supreme Court provided the definitive
        framework for managing agent analysis in <em>White v. Ultramar, Inc.</em> (1999) 21
        Cal.4th 563. Although the case arose in an employment context rather than insurance bad
        faith, the <em>White</em> test applies across all contexts in which managing agent
        status must be determined under section 3294(b).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court articulated the standard as follows: to demonstrate that an employee is a
        &ldquo;managing agent&rdquo; under section 3294, subdivision (b), a plaintiff must show
        that the employee <strong>&ldquo;exercised substantial discretionary authority over
        significant aspects of a corporation&rsquo;s business.&rdquo;</strong> More specifically,
        the court stated that the Legislature intended the term &ldquo;managing agent&rdquo; to
        include <strong>&ldquo;only those corporate employees who exercise substantial independent
        authority and judgment in their corporate decisionmaking so that their decisions
        ultimately determine corporate policy.&rdquo;</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>White</em> decision also clarified an important limitation: the mere fact that an
        employee has supervisory authority or the power to hire and fire subordinates does not,
        standing alone, make that employee a managing agent. The supervisory power must be
        connected to decisions that &ldquo;ultimately determine corporate policy&rdquo; in a
        significant area of the company&rsquo;s business. The test is functional, not
        title-based &mdash; it looks at what the employee actually does, not what their business
        card says.
      </p>

      <CalloutBox variant="tip" title="The Two-Part White v. Ultramar Test">
        <p>
          The <em>White v. Ultramar</em> test for managing agent status has two components:
          (1) the employee must exercise <strong>substantial discretionary authority</strong>,
          and (2) that authority must be exercised over <strong>decisions that ultimately
          determine corporate policy</strong>. Both elements must be satisfied. An employee
          with broad discretion over trivial matters does not qualify. An employee with
          corporate-policy responsibilities but no discretion (a mere rule-follower) also
          does not qualify.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Applying the Test to Insurance Companies: Who Is the Managing Agent?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies are hierarchical organizations with multiple layers of claims
        personnel. A typical first-party property damage claim might pass through the hands of
        a field adjuster, a desk adjuster, a unit manager, a claims examiner, a regional claims
        manager, and potentially a home office executive. The question of which of these
        individuals qualifies as a &ldquo;managing agent&rdquo; is critical &mdash; and the
        answer is not always obvious.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Who Typically Qualifies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the <em>White</em> framework, the following categories of insurance company
        employees are most likely to qualify as managing agents:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Regional claims managers and directors</strong> who set claims-handling
          standards for their region, supervise adjusters and unit managers, and exercise
          authority over coverage decisions and settlement amounts.
        </li>
        <li>
          <strong>Claims supervisors with settlement authority</strong> who have the
          discretionary power to approve or deny claims, set reserves, and authorize settlement
          offers without requiring approval from superiors &mdash; though under <em>White</em>{' '}
          and <em>Cruz</em>, settlement authority alone does not establish the policy-level
          discretion the statute requires.
        </li>
        <li>
          <strong>Special investigation unit (SIU) managers</strong> who exercise independent
          authority to direct investigations, refer claims for denial, and determine the
          insurer&rsquo;s litigation posture on disputed claims.
        </li>
        <li>
          <strong>Vice presidents and directors of claims operations</strong> who establish
          corporate-level claims-handling policies and procedures that govern how adjusters
          throughout the company process claims.
        </li>
        <li>
          <strong>Third-party claims administrators acting as the insurer&rsquo;s agent</strong>{' '}
          &mdash; as demonstrated in <em>Major v. Western Home Insurance Co.</em> (2009) 169
          Cal.App.4th 1197, even an employee of a separate third-party administrator can qualify
          as the insurer&rsquo;s managing agent.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Who Typically Does Not Qualify
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, the following personnel will generally not qualify as managing agents under
        the <em>White</em> test:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Field adjusters and independent adjusters</strong> who investigate and assess
          losses but lack authority to make final coverage decisions or set reserves beyond
          threshold amounts.
        </li>
        <li>
          <strong>Customer service representatives</strong> who process paperwork and
          communicate the insurer&rsquo;s decisions but do not exercise independent judgment
          over those decisions.
        </li>
        <li>
          <strong>Low-level supervisors</strong> whose authority is limited to overseeing
          day-to-day workflow without the power to set or alter claims-handling policy for
          the region or company.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The boundary between these categories is not always clear, and much depends on the
        specific facts. An adjuster at a small insurer with broad settlement authority might
        qualify, while a claims manager at a large insurer with limited discretion (because all
        significant decisions require home-office approval) might not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The <em>Major v. Western Home</em> Decision: Managing Agents in Third-Party
        Claims Administration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Major v. Western Home Insurance Co.</em> (2009) 169 Cal.App.4th 1197 is one of the
        most important decisions applying the managing agent standard in the insurance context.
        Western Home Insurance Company hired Cambridge Integrated Services Group, a third-party
        claims administrator, to handle all claims under Western&rsquo;s policies. The
        plaintiffs&rsquo; home was destroyed by fire, and although Western ultimately paid the
        full policy limits, the jury found that the company acted in bad faith. The verdict
        included $34,417.52 in unpaid policy benefits, $400,000 for emotional distress, and
        $646,472 in punitive damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical question was whether a Cambridge employee &mdash; who served as regional
        manager, supervisor, and claims adjuster &mdash; qualified as Western&rsquo;s
        &ldquo;managing agent&rdquo; for punitive damages purposes, even though she was
        technically employed by a separate company. The court held that she did. The evidence
        showed that this employee managed 35 people in Cambridge&rsquo;s Minnesota office,
        handled claims from across the country including California, oversaw the claims
        operation, supervised subordinate supervisors, trained adjusters, worked on the office
        budget, supervised the handling of certain files, and authorized payment of benefits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court&rsquo;s reasoning was straightforward: Western had retained Cambridge to handle
        &ldquo;a significant aspect of Western&rsquo;s business: its claims handling
        functions.&rdquo; Because the Cambridge employee exercised substantial discretionary
        authority to pay or deny claims, she exercised &ldquo;substantial discretionary authority
        over decisions that ultimately determine corporate policy.&rdquo; The jury&rsquo;s
        verdict &mdash; which included $646,472 in punitive damages &mdash; was affirmed.
      </p>

      <CalloutBox variant="important" title="Third-Party Administrators Are Not a Shield Against Punitive Damages">
        <p>
          Some insurers outsource their claims-handling functions to independent third-party
          administrators (TPAs). As <em>Major v. Western Home</em> makes clear, this
          outsourcing does not insulate the insurer from punitive damages. If the TPA
          employee exercises the kind of substantial discretionary authority over claims
          decisions that ultimately determines the insurer&rsquo;s corporate policy, that
          employee can be deemed the insurer&rsquo;s managing agent. The insurer cannot
          escape accountability by interposing a corporate intermediary between itself and
          the claims-handling decisions.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Ratification Alternative
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Identifying a managing agent who personally committed the bad faith conduct is the most
        direct route to punitive damages. But it is not the only route. Civil Code section
        3294(b) also permits punitive damages when an officer, director, or managing agent{' '}
        <strong>authorized or ratified</strong> the wrongful conduct of a lower-level employee.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ratification occurs when an officer, director, or managing agent acquires{' '}
        <strong>actual knowledge</strong> of the employee&rsquo;s wrongful conduct &mdash; and
        of its malicious character &mdash; and approves or adopts it (see <em>Cruz v.
        HomeBase</em>, discussed below). This doctrine reflects a practical reality of how
        insurance companies operate: the adjuster who handled day-to-day interactions with the
        policyholder may not personally qualify as a managing agent, but a regional claims
        manager who reviews the file, learns of the underlying facts, approves the denial, and
        makes no effort to correct the course of conduct can be found to have ratified the bad
        faith.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        What Constitutes Ratification
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ratification can be shown through several types of evidence:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Affirmative approval:</strong> A manager reviews the adjuster&rsquo;s
          handling of the claim and expressly approves the denial, delay, or lowball offer.
        </li>
        <li>
          <strong>Knowledge without correction:</strong> A managing agent learns that an
          adjuster denied a clearly covered claim or unreasonably delayed payment and takes
          no action to correct the problem or discipline the adjuster.
        </li>
        <li>
          <strong>Adoption of benefits:</strong> The insurer retains the financial benefits of
          the adjuster&rsquo;s bad faith conduct &mdash; for example, by refusing to reopen a
          claim that was improperly denied even after learning of the improper denial.
        </li>
        <li>
          <strong>Pattern and practice:</strong> Evidence that similar bad faith conduct has
          occurred across multiple claims, suggesting that the conduct reflects corporate
          policy rather than an individual adjuster&rsquo;s mistake.
        </li>
        <li>
          <strong>After-the-fact endorsement:</strong> A managing agent testifies at deposition
          that the adjuster&rsquo;s handling was appropriate and that the company stands behind
          the claim decision, even when the evidence demonstrates the handling was unreasonable.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Ratification Can Occur After the Fact">
        <p>
          A common misconception is that the managing agent must have been involved in the
          original claims decision. Not so. Ratification can occur well after the wrongful
          conduct &mdash; even during litigation. If a managing agent reviews the claim file
          during the course of a lawsuit, recognizes that the denial was unreasonable, and
          nevertheless instructs the insurer&rsquo;s counsel to continue defending the
          denial, that can constitute ratification. This is why the discovery process is so
          important: it can generate ratification evidence in real time.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Knowledge Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have made clear that ratification requires actual knowledge, not
        merely constructive knowledge. <em>Cruz v. HomeBase</em> (2000) 83 Cal.App.4th 160
        explains that ratification is &ldquo;confirmation and acceptance of a previous
        act,&rdquo; and that &ldquo;a corporation cannot confirm and accept that which it
        does not actually know about.&rdquo; Read together with Civil Code &sect; 3294(b)
        &mdash; which limits corporate punitive exposure to acts committed, authorized, or
        ratified by an officer, director, or managing agent &mdash; the practical rule is
        that ratification supporting punitive damages requires a qualifying actor who had
        actual knowledge both of the conduct and of its wrongful character. The plaintiff
        must establish not only that the managing agent knew of the conduct, but that the
        managing agent understood the wrongful nature of that conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practical terms, this means the managing agent must have had sufficient information
        to understand that the claim was being handled improperly. If the managing agent relied
        on a biased summary from the adjuster &mdash; one that omitted material facts supporting
        coverage &mdash; the question becomes whether the managing agent had access to the full
        claim file and whether a reasonable managing agent would have looked beyond the
        adjuster&rsquo;s summary. Discovery into what information was available to the managing
        agent, and what the managing agent actually reviewed, is essential.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Discovery Strategies: Finding and Proving the Managing Agent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Identifying the managing agent is not something that happens at trial. It must begin in
        discovery &mdash; and it should begin early. The insurer has every incentive to obscure
        who made the critical decisions and to portray the claims-handling process as a
        collaborative, committee-driven exercise in which no single person exercised the kind of
        independent discretionary authority that the <em>White</em> test requires. Effective
        discovery is designed to cut through this fog and identify the real decision-maker.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Written Discovery: Interrogatories and Document Demands
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a bad faith case, plaintiffs' counsel typically serve targeted written discovery to map the insurer&rsquo;s
        corporate hierarchy and identify every person who was involved in the handling of the
        claim. Discovery requests in this area typically include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Corporate hierarchy interrogatories:</strong> Identify the complete
          organizational chart for the claims department, including the reporting chain from
          the field adjuster through the regional claims manager to the home office. Identify
          each person&rsquo;s title, job description, scope of authority, settlement authority
          limits, and supervisory responsibilities.
        </li>
        <li>
          <strong>Decision-maker identification:</strong> Identify every person who participated
          in, approved, reviewed, or had authority over the coverage determination, reserve
          setting, benefit payment decisions, and settlement offers on the plaintiff&rsquo;s
          claim.
        </li>
        <li>
          <strong>Authority threshold interrogatories:</strong> Identify the settlement
          authority limits for each person in the claims chain &mdash; at what dollar amount
          must the adjuster seek supervisory approval? Who approves reserves above a certain
          threshold? Who has authority to deny a claim outright?
        </li>
        <li>
          <strong>Claims manual and guidelines demands:</strong> Produce the insurer&rsquo;s
          claims-handling manual, best practices guidelines, training materials, and any
          internal memoranda that establish the standards and procedures adjusters are required
          to follow when handling claims of this type.
        </li>
        <li>
          <strong>Organizational chart demands:</strong> Produce the complete organizational
          chart for the claims department, both at the regional level and the home office level,
          as it existed during the relevant claims-handling period.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Judicial Council Form Interrogatory No. 15.1 (seeking the factual basis for each denial
        and affirmative defense) provides useful baseline information, but it is typically
        insufficient to fully develop the managing-agent theory on its own. Carefully tailored
        special interrogatories targeting the corporate hierarchy and the claims-handling chain
        of command are generally where the substantive managing-agent evidence is developed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Person Most Qualified Depositions (CCP &sect; 2025.230)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The person most qualified (PMQ) deposition is one of the strongest tools available
        for identifying the managing agent. Under Code of Civil Procedure section 2025.230, when
        the deponent is an organization rather than a natural person, the deposition notice must
        &ldquo;describe with reasonable particularity the matters on which examination is
        requested.&rdquo; The organization then has a legal duty to &ldquo;designate and produce
        at the deposition those of its officers, directors, managing agents, employees, or agents
        who are most qualified to testify on its behalf as to those matters.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A well-crafted PMQ deposition notice typically covers topics such as:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          The identity and responsibilities of each person who participated in the
          investigation, evaluation, and coverage determination of the plaintiff&rsquo;s claim.
        </li>
        <li>
          The insurer&rsquo;s corporate hierarchy for the claims department, including the chain
          of command from the assigned adjuster to the home office.
        </li>
        <li>
          The scope of settlement authority for each level of the claims department hierarchy.
        </li>
        <li>
          The process by which coverage determinations are made, including who has final
          authority to deny, approve, or settle claims of the type at issue.
        </li>
        <li>
          The insurer&rsquo;s policies and procedures regarding reserve setting, including who
          sets initial reserves, who reviews them, and who has authority to increase or
          decrease reserves.
        </li>
        <li>
          The identity and role of any supervisory, management, or executive-level personnel who
          reviewed, approved, or had knowledge of the handling of the plaintiff&rsquo;s claim.
        </li>
        <li>
          The insurer&rsquo;s claims-handling guidelines, training materials, and performance
          metrics for adjusters and claims supervisors.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The PMQ deposition serves a dual purpose: it identifies the managing agent, and it
        forces the insurer to designate someone who is &ldquo;most qualified&rdquo; to testify
        on these topics. The person designated has an affirmative duty to take reasonable efforts
        to discover the information requested, even if that person does not have personal
        knowledge of all matters. This can generate powerful testimony about the company&rsquo;s
        claims-handling structure and who wielded real decision-making authority.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Individual Depositions of Claims Personnel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Following the PMQ deposition, plaintiffs' counsel typically depose the individuals identified as
        decision-makers. When plaintiffs' counsel depose insurance company claims personnel, a
        common approach is to begin with generally applicable principles &mdash; the duty of
        good faith and fair dealing, the obligation to conduct a thorough investigation, the
        requirement to give the insured&rsquo;s interests equal weight with the insurer&rsquo;s
        own &mdash; and then examine the witness about their authority and the specific decisions
        they made or approved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common areas of inquiry include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          The witness&rsquo;s title, role, and reporting structure within the claims department.
        </li>
        <li>
          The scope of the witness&rsquo;s authority to approve or deny claims, set reserves,
          and authorize settlement offers without further supervisory approval.
        </li>
        <li>
          What review the witness conducted of the claim file before making or approving the
          decision at issue.
        </li>
        <li>
          Whether the witness was aware of any facts supporting coverage, and if so, why those
          facts were not given weight in the coverage determination.
        </li>
        <li>
          Whether the witness&rsquo;s decisions on this claim were consistent with, or departed
          from, the insurer&rsquo;s internal claims-handling guidelines.
        </li>
        <li>
          How many adjusters and claims the witness supervises, and the geographic scope of
          their authority.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Claims File Review
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s complete claim file is an indispensable discovery tool. Insurance
        companies maintain electronic claims diaries (often called &ldquo;claim notes&rdquo; or
        &ldquo;activity logs&rdquo;) that document every internal and external communication
        regarding the claim &mdash; from the initial report of loss through final resolution.
        These notes typically record:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>When supervisors reviewed the file and what instructions they gave.</li>
        <li>When and why reserves were set, increased, or decreased.</li>
        <li>Who approved coverage determinations and settlement offers.</li>
        <li>Internal communications between the adjuster and management about the claim.</li>
        <li>References to internal guidelines, authority limits, and escalation protocols.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These notes often contain the clearest evidence of who made the real decisions. A claim
        note entry such as &ldquo;Reviewed file with [Regional Claims Manager]. Confirmed denial
        approach. RCM authorized denial letter&rdquo; can be powerful evidence that the regional
        claims manager exercised discretionary authority over the coverage decision.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Defeating Common Carrier Defenses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies employ several recurring arguments to resist managing agent findings.
        Understanding these arguments is essential for any policyholder or attorney contemplating
        a bad faith action.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        &ldquo;The Adjuster Was Just Following Procedures&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers frequently argue that the individual adjuster was merely applying established
        company guidelines and exercising no independent discretion. This argument can cut both
        ways. If the adjuster truly was following procedures, the question becomes:{' '}
        <em>who established those procedures?</em> If the procedures themselves are unreasonable
        &mdash; if they systematically lead to underpayment or denial of valid claims &mdash;
        then the managing agents who designed and implemented those procedures may bear punitive
        damages liability. The argument: a claims-handling system designed to produce unfair
        outcomes is itself corporate policy, and a court could find that the people who
        designed it are the managing agents.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, if the adjuster deviated from reasonable procedures to deny a claim, the
        question becomes whether a managing agent knew of and ratified that deviation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        &ldquo;No Single Person Made the Decision&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers structure their claims-handling processes to diffuse responsibility across
        multiple individuals, creating the impression that no single person exercised sufficient
        authority to qualify as a managing agent. The claims decision may pass through a
        committee, a review panel, or a chain of approvals in which each participant claims to
        have played only a limited role.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This diffusion of responsibility does not defeat managing agent liability. If each member
        of a claims committee exercises discretionary authority over a significant aspect of the
        decision &mdash; one person controls the reserve, another approves the coverage
        determination, a third authorizes the settlement offer &mdash; each may independently
        qualify as a managing agent with respect to their area of authority. Plaintiffs' counsel commonly probe the actual decision-making authority of each participant, not simply accept the
        insurer&rsquo;s characterization of the process as collaborative.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Someone must have had final authority. Claims committees do not operate without
        leadership, and someone either chairs the committee, has final say when members disagree,
        or has the authority to override the committee&rsquo;s recommendation. Identifying that person is generally the discovery objective.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        &ldquo;The Adjuster Had Limited Settlement Authority&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers sometimes argue that the adjuster had a settlement authority limit &mdash; say,
        $25,000 &mdash; and therefore lacked the discretionary authority to qualify as a
        managing agent. But this argument often backfires. If the adjuster lacked authority to
        approve settlements above $25,000, <em>who did have that authority?</em> The person who
        approved the lowball offer, who set the inadequate reserve, or who authorized the denial
        is likely the managing agent. The adjuster&rsquo;s limited authority simply points
        upward in the chain of command to the real decision-maker.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        &ldquo;There Was a Genuine Dispute&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/genuine-dispute-doctrine" className="text-blue-700 underline hover:text-blue-900">
          genuine dispute doctrine
        </Link>
        , articulated by the California Supreme Court in{' '}
        <em>Wilson v. 21st Century Ins. Co.</em> (2007) 42 Cal.4th 713, is the insurer&rsquo;s
        primary defense against bad faith liability generally. It operates independently of the
        managing-agent analysis. <em>Wilson</em> holds that an insurer&rsquo;s position
        constitutes a genuine dispute only where it is &ldquo;maintained in good faith and on
        reasonable grounds&rdquo; &mdash; the defense does not relieve the insurer of its duty to
        thoroughly and fairly investigate the claim. Even if a managing agent is identified, the
        insurer may argue that there was a reasonable basis for the coverage determination; if
        the investigation was inadequate or the denial was pretextual, many courts have held the
        defense fails.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The genuine dispute defense addresses whether bad faith occurred at all &mdash; it does
        not address the managing-agent requirement. Conversely, establishing managing-agent
        status does not establish bad faith. Both elements must be proven, and punitive damages
        require clear and convincing evidence of oppression, fraud, or malice under Civil Code
        &sect; 3294(a).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Motion to Amend: CCP &sect; 425.13 and Insurance Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An important procedural question arises in connection with punitive damages pleading:
        Must the plaintiff obtain court permission before including punitive damages allegations
        in the complaint?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Code of Civil Procedure section 425.13, subdivision (a), provides that &ldquo;in any
        action for damages arising out of the professional negligence of a health care provider,
        no claim for punitive damages shall be included in a complaint or other pleading unless
        the court enters an order allowing an amended pleading that includes a claim for punitive
        damages to be filed.&rdquo; Under this provision, the plaintiff must demonstrate a
        &ldquo;substantial probability&rdquo; of prevailing on the punitive damages claim before
        the court will permit the amended pleading. This standard was examined in{' '}
        <em>College Hospital Inc. v. Superior Court</em> (1994) 8 Cal.4th 704.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, section 425.13 applies <strong>only to health care providers</strong>. It does
        not apply to insurance bad faith cases. The distinction is important: in a bad faith
        action, no &sect; 425.13 motion-to-amend procedure stands between the plaintiff and an
        original-complaint punitive damages claim.
      </p>

      <CalloutBox variant="important" title="CCP Section 425.13 Does Not Apply to Insurance Bad Faith">
        <p>
          Section 425.13 restricts the initial pleading of punitive damages only in actions
          arising out of the professional negligence of a health care provider. Insurance
          companies are not health care providers. In a standard first-party insurance bad faith
          action, the plaintiff may plead punitive damages in the original complaint without
          obtaining prior court approval. There is no motion-to-amend requirement for punitive
          damages in insurance bad faith cases.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction has practical significance. In insurance bad faith cases, punitive
        damages can be pled from the outset, which means the insurer faces punitive exposure from
        the moment the complaint is filed. This early pleading creates immediate pressure on the
        insurer&rsquo;s claims and litigation strategy, and it opens up discovery into the
        managing agent&rsquo;s identity and conduct from the beginning of the case.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One important procedural note: under <strong>Civil Code &sect; 3295</strong>, the
        defendant in a punitive damages case may move to bifurcate the trial so that the jury
        first determines liability and compensatory damages, and only then (if liability is
        found) considers the punitive damages question. Section 3295(d) provides:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">
        The court shall, on application of any defendant, preclude the admission of evidence of
        that defendant&rsquo;s profits or financial condition until after the trier of fact
        returns a verdict for the plaintiff awarding actual damages and finds that a defendant
        is guilty of malice, oppression, or fraud in accordance with Section 3294&hellip;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s civil jury instructions (CACI Nos. 3943 through 3949) provide the
        framework for how punitive damages issues &mdash; including managing agent status
        &mdash; are presented to the jury.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Case Law: Lessons from the Courts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The managing agent standard has been applied and refined across numerous California
        decisions. The following cases illustrate how courts have applied the <em>White</em>{' '}
        test in practice:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24 Cal.3d 809
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Egan</em> established the foundational principle that
        managing agent status depends on the &ldquo;degree of discretion the employees
        possess in making decisions that will ultimately determine corporate policy,&rdquo;
        not on official titles. The Court found that claims employees who exercised broad
        discretion in disposing of the plaintiff&rsquo;s disability claim with &ldquo;little
        if any supervision&rdquo; were acting in a managerial capacity for purposes of
        corporate punitive damages liability. (Note: the jury&rsquo;s $5 million punitive
        damages award was{' '}<strong>reversed</strong>{' '}as excessive as a matter of law;
        what survives <em>Egan</em> as binding precedent is the legal analysis on
        managerial capacity and the duty to investigate, not the dollar figure. The
        managing-agent test was then substantially narrowed by{' '}
        <em>White v. Ultramar, Inc.</em> (1999) 21 Cal.4th 563, discussed next.)
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>White v. Ultramar, Inc.</em> (1999) 21 Cal.4th 563
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>White</em> refined the <em>Egan</em> standard and established the modern two-part
        test. The employee in question &mdash; Ultramar regional manager Salla &mdash; managed
        eight convenience stores and had broad discretionary powers to hire and fire employees
        and to determine the manner in which the stores were run. Despite the court&rsquo;s
        clarification that supervision alone is insufficient, it found that Salla qualified as
        a managing agent because she &ldquo;exercised substantial discretionary authority over
        decisions that ultimately determined corporate policy in a most crucial aspect of
        Ultramar&rsquo;s business.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Major v. Western Home Ins. Co.</em> (2009) 169 Cal.App.4th 1197
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Major</em> extended the managing agent concept to third-party
        claims administrators. The court affirmed $646,472 in punitive damages based on the
        conduct of a regional claims administrator employed by a TPA, holding that claims
        managers who exercise substantial discretionary authority to pay or deny claims exercise
        authority over decisions that &ldquo;ultimately determine corporate policy.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Cruz v. HomeBase</em> (2000) 83 Cal.App.4th 160
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Cruz</em> illustrates the limits of managing agent status. A security supervisor
        at a home improvement store whose authority was limited to detaining and prosecuting
        low-level offenders was held <em>not</em> to be a managing agent, despite having some
        supervisory responsibilities. The court emphasized that the critical question is not
        the severity of the consequences of the employee&rsquo;s actions, but whether the
        employee &ldquo;belongs to the leadership group of &lsquo;officers, directors, and
        managing agents.&rsquo;&rdquo; The case also confirmed that ratification requires
        actual knowledge of the misconduct <em>and</em> its malicious character.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Downey Savings &amp; Loan Assn. v. Ohio Casualty Ins. Co.</em> (1987) 189 Cal.App.3d 1072
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Downey Savings</em> is a leading California Court of Appeal punitive-damages decision
        in the insurance bad-faith context. The court affirmed a punitive damages award against
        Ohio Casualty Insurance Company on substantial evidence that the insurer&rsquo;s conduct
        &mdash; through its officers, directors, or managing agents &mdash; rose to the level of
        oppression, fraud, or malice required for punitive damages under Civil Code &sect; 3294.
        The decision is frequently cited for its treatment of the institutional dimension of
        insurer punitive liability.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Weeks v. Baker &amp; McKenzie</em> (1998) 63 Cal.App.4th 1128
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Although arising in a sexual harassment context, <em>Weeks</em> contains important
        reasoning about the nature of corporate punitive damages liability. The court affirmed a
        $3.5 million punitive damages award against the law firm and explained that section
        3294(b) ties corporate punitive exposure to the employer&rsquo;s own wrongful conduct
        &mdash; through authorization, ratification, or advance knowledge of an unfit employee
        &mdash; rather than imposing vicarious liability for the employee&rsquo;s malice. This
        principle is directly applicable to insurance bad faith cases: the managing agent&rsquo;s
        conduct is treated as the insurer&rsquo;s conduct.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CACI Jury Instructions on Managing Agent Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Civil Jury Instructions (CACI) provide the framework for how managing
        agent issues are presented to the jury. The key instructions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>CACI No. 3943</strong> &mdash; Punitive Damages Against Employer or Principal
          for Conduct of a Specific Agent or Employee (Trial Not Bifurcated). This instruction
          is used when the plaintiff seeks to hold the insurer liable based on the conduct of
          a specific employee, and the trial is not bifurcated.
        </li>
        <li>
          <strong>CACI No. 3944</strong> &mdash; Same instruction, but for a bifurcated trial
          (first phase).
        </li>
        <li>
          <strong>CACI No. 3945</strong> &mdash; Punitive Damages Against an Entity Defendant
          (Trial Not Bifurcated). This instruction is used when punitive damages are sought
          against a corporation for the conduct of its directors, officers, and managing agents.
        </li>
        <li>
          <strong>CACI No. 3946</strong> &mdash; Same instruction, but for a bifurcated trial
          (first phase).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        An important distinction in these instructions: CACI No. 3945 provides that an act of
        oppression, fraud, or malice by an officer, director, or managing agent, acting on
        behalf of the employer, is <strong>sufficient</strong> to impose punitive damages
        liability on the corporate employer <strong>without any additional showing of
        ratification</strong>. In other words, if the person who committed the bad faith conduct
        is a managing agent, the corporation is liable for punitive damages directly &mdash; no
        separate proof of ratification is needed. Ratification is an <em>alternative</em> path,
        applicable when the bad faith actor is a lower-level employee rather than a managing
        agent.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Claims-Handling Systems Design Can Constitute Corporate Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A sophisticated understanding of managing agent liability requires looking beyond
        individual decisions to the systems and structures that produce those decisions.
        Insurance companies do not handle claims through individual improvisation. They use
        structured processes &mdash; claims manuals, automated valuation tools, authority
        hierarchies, performance metrics, and quality assurance protocols &mdash; that shape
        how every claim is handled.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When these systems are designed in ways that systematically disadvantage policyholders
        &mdash; when the claims manual sets artificially restrictive interpretations of coverage,
        when adjuster performance is measured by claims closure rate or average payout rather
        than accuracy, when authority limits are structured to create bureaucratic barriers to
        fair payment &mdash; the managing agents who designed, implemented, and oversee those
        systems may bear liability. Their decisions about how to structure the claims process
        are themselves decisions that &ldquo;ultimately determine corporate policy.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This systemic perspective is particularly important in cases where the insurer argues
        that the individual adjuster was simply following established procedures. If the
        procedures themselves are the problem, the focus shifts from the adjuster to the
        managing agents who designed the system. Discovery into the insurer&rsquo;s
        claims-handling manuals, training programs, and performance evaluation criteria is
        essential to developing this theory.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Practical Settlement Leverage of Identifying the Managing Agent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the legal requirements, there is a powerful practical dimension to managing agent
        identification. The presence of a viable punitive damages claim fundamentally changes the
        economic calculus of the case for both sides.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without punitive damages, a first-party bad faith case is essentially a contract dispute
        with tort damages: the unpaid policy benefits, consequential damages, emotional distress,
        and attorney fees. These damages, while significant, are bounded. With punitive damages
        on the table, the insurer faces substantially expanded exposure &mdash; subject to the
        federal constitutional limits discussed below.
      </p>

      <CalloutBox variant="legal" title="Constitutional Limits on Punitive Damages">
        <p>
          California has no statutory cap on punitive damages in insurance bad faith cases. But
          federal due process imposes a meaningful ceiling. In{' '}
          <em>State Farm Mut. Auto. Ins. Co. v. Campbell</em> (2003) 538 U.S. 408, 425, the
          United States Supreme Court held that &ldquo;few awards exceeding a single-digit ratio
          between punitive and compensatory damages, to a significant degree, will satisfy due
          process.&rdquo;
        </p>
        <p className="mt-2">
          The California Supreme Court applied this principle in{' '}
          <em>Simon v. San Paolo U.S. Holding Co.</em> (2005) 35 Cal.4th 1159, 1182, treating
          ratios significantly greater than 9 or 10 to 1 as suspect under federal due process
          absent special justification.
        </p>
        <p className="mt-2">
          In practice, this means punitive-to-compensatory ratios in California insurance bad
          faith cases tend to land in the low single digits, particularly where compensatory
          damages are themselves substantial. The leverage from a viable punitive damages claim
          is real, but the &ldquo;unlimited exposure&rdquo; framing should be tempered by the
          constitutional ceiling.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even with the constitutional limit, a credible punitive damages claim materially changes
        the economic calculus of the case. An insurer evaluating its litigation exposure must
        consider not just the likely compensatory damages verdict but also the risk of a
        substantial punitive damages award stacked on top. As the California Supreme Court has
        recognized, without the possibility of tort damages, an insurance company could
        arbitrarily deny a claim, gambling that if it guessed wrong, it would be no worse off
        than if it had honored the claim in the first place.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Early Identification Creates Maximum Pressure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The settlement leverage from managing agent identification is most effective when it is
        established early in the litigation. Key milestones include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Pleading stage:</strong> Include punitive damages allegations in the original
          complaint (permissible in insurance bad faith cases without prior court approval).
          This immediately signals to the insurer that its punitive exposure is at issue.
        </li>
        <li>
          <strong>Early discovery:</strong> Serve interrogatories and document demands directed
          at the corporate hierarchy and claims decision-making process within the first round
          of written discovery. Promptly notice the PMQ deposition on claims authority topics.
        </li>
        <li>
          <strong>Pre-mediation:</strong> Before the first mediation, develop sufficient
          evidence of managing agent identity and involvement to present a credible punitive
          damages theory to the mediator and opposing counsel. A well-documented managing
          agent case can shift the insurer&rsquo;s settlement posture dramatically.
        </li>
        <li>
          <strong>Summary judgment:</strong> Be prepared to oppose the insurer&rsquo;s inevitable
          motion for summary adjudication on the punitive damages claim with deposition testimony
          and documentary evidence identifying the managing agent and their role.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Deposition of the Managing Agent
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the managing agent is identified, their individual deposition can be one of the most
        consequential events in the litigation. This deposition serves multiple strategic
        purposes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          It establishes on the record that the individual exercised substantial discretionary
          authority over significant aspects of the insurer&rsquo;s business &mdash; satisfying
          the <em>White</em> test.
        </li>
        <li>
          It forces the individual to defend or explain the claims-handling decisions under oath.
        </li>
        <li>
          If the managing agent testifies that the claims handling was appropriate, that
          testimony itself may constitute ratification &mdash; the managing agent has now, on
          the record, approved the conduct at issue.
        </li>
        <li>
          It creates a named, identifiable person for the jury &mdash; transforming the
          defendant from an abstract corporate entity into a decision-maker with a face, a
          title, and a record of conduct the jury can evaluate.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Role of the Public Adjuster in Laying the Foundation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While managing agent liability is ultimately a litigation issue, the groundwork for it
        is often laid during the claims process &mdash; well before any lawsuit is filed. This is
        where a skilled{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can provide significant value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        During the claims process, the Public Adjuster interacts directly with the insurer&rsquo;s
        claims personnel. In those interactions, the PA naturally documents:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Who is making decisions:</strong> The PA can identify whether the adjuster has
          authority to approve settlements or must seek supervisory approval, and at what dollar
          thresholds.
        </li>
        <li>
          <strong>Chain of command:</strong> Correspondence and phone calls reveal the reporting
          structure &mdash; who the adjuster&rsquo;s supervisor is, who is copied on important
          communications, and who signs off on coverage determinations.
        </li>
        <li>
          <strong>Supervisory involvement:</strong> Claim notes and correspondence often reveal
          when a supervisor or manager reviewed the file and what direction was given.
        </li>
        <li>
          <strong>Unreasonable conduct:</strong> The PA documents regulatory violations, missed
          deadlines, lowball offers, and other conduct that may support bad faith allegations &mdash;
          the substantive basis for the claims that make punitive damages relevant.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This real-time documentation, created in the ordinary course of the PA&rsquo;s work, can
        be invaluable to an attorney later evaluating whether to pursue a bad faith action with
        punitive damages. The PA&rsquo;s file provides a contemporaneous record of the
        insurer&rsquo;s conduct &mdash; who did what, when, and at whose direction &mdash; that
        is far more persuasive than after-the-fact reconstruction.
      </p>

      <CalloutBox variant="tip" title="Building the Record During the Claims Process">
        <p>
          The Public Adjuster does not file lawsuits or pursue punitive damages. But by doing
          the job thoroughly &mdash; documenting who is involved in the claims decisions,
          keeping detailed correspondence records, noting when supervisory approval is required,
          and identifying the chain of command &mdash; the PA creates a factual foundation that
          an attorney can later use to identify the managing agent and develop the punitive
          damages theory. The best time to build this record is during the claims process, not
          after litigation has begun.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Plaintiffs&rsquo; Counsel Typically Build a Managing-Agent Case
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Litigating a managing-agent theory is attorney work. The roadmap below describes what
        experienced plaintiffs&rsquo; counsel typically do in a bad faith case where punitive
        damages are at issue. None of these steps are tasks a Public Adjuster or pro-se insured
        should attempt &mdash; pleading, written discovery, depositions, and motion practice are
        all functions of licensed counsel. The list is presented to help an insured understand
        what the litigation process looks like when an attorney evaluates and pursues a bad
        faith claim.
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Pleading.</strong> In a standard insurance bad faith case, counsel typically
          plead punitive damages in the original complaint &mdash; section 425.13 does not apply,
          so no prior court approval is required.
        </li>
        <li>
          <strong>Early written discovery.</strong> Counsel typically serve interrogatories and
          document demands directed at the corporate hierarchy, settlement-authority limits, and
          the identity of every person who participated in the claims decision.
        </li>
        <li>
          <strong>The claim file.</strong> A complete claim file production &mdash; including
          claims diary entries, internal memos, reserve worksheets, and adjuster-management
          communications &mdash; is generally requested early.
        </li>
        <li>
          <strong>Manuals and training materials.</strong> The insurer&rsquo;s claims-handling
          manual, training materials, and best-practices guidelines are typically requested to
          reveal the standards adjusters are expected to follow.
        </li>
        <li>
          <strong>PMQ deposition.</strong> A &sect; 2025.230 deposition of the insurer&rsquo;s
          person most qualified on topics relating to the claims hierarchy, settlement authority,
          and decision-maker identity is one of the standard tools for identifying the managing
          agent.
        </li>
        <li>
          <strong>Individual depositions.</strong> Once decision-makers are identified, counsel
          typically depose them on their discretionary authority, what they knew, what they
          reviewed, and what they approved.
        </li>
        <li>
          <strong>Claims-notes analysis.</strong> Claims notes are mined for entries showing
          when managers reviewed the file, set direction, approved reserves, or authorized
          coverage determinations.
        </li>
        <li>
          <strong>Ratification preservation.</strong> When a managing agent defends the claims
          handling at deposition, that testimony is preserved as potential ratification evidence.
        </li>
        <li>
          <strong>Summary adjudication response.</strong> Insurers almost always move to dismiss
          the punitive damages claim before trial; counsel prepares deposition testimony and
          documents establishing managing-agent status and involvement to oppose the motion.
        </li>
        <li>
          <strong>Mediation presentation.</strong> A well-documented managing-agent case,
          supported by specific evidence, typically enhances settlement leverage at mediation.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Resources
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Managing agent liability is one component of a broader framework for holding insurers
        accountable for bad faith conduct. For additional information on related topics, see:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <Link href="/resources/punitive-damages-bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Punitive Damages in California Insurance Bad Faith Cases
          </Link>{' '}
          &mdash; A comprehensive overview of when and how punitive damages may be recovered in
          bad faith litigation, including the oppression, fraud, and malice standards.
        </li>
        <li>
          <Link href="/resources/genuine-dispute-doctrine" className="text-blue-700 underline hover:text-blue-900">
            The Genuine Dispute Doctrine
          </Link>{' '}
          &mdash; Understanding the insurer&rsquo;s primary defense against bad faith claims,
          how courts evaluate whether a &ldquo;genuine dispute&rdquo; existed, and when the
          defense fails.
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Bad Faith Insurance Practices
          </Link>{' '}
          &mdash; An overview of what constitutes bad faith in California, the legal standards
          involved, and the importance of documentation from day one.
        </li>
        <li>
          <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
            California Insurance Code Section 790.03
          </Link>{' '}
          &mdash; The statutory framework for unfair claims settlement practices, which often
          forms the evidentiary basis for bad faith allegations.
        </li>
        <li>
          <Link href="/resources/duty-to-investigate" className="text-blue-700 underline hover:text-blue-900">
            The Duty to Investigate
          </Link>{' '}
          &mdash; Understanding the insurer&rsquo;s obligation to conduct a thorough and
          unbiased investigation before denying or limiting a claim.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Consult an Attorney">
        <p>
          Pursuing punitive damages and establishing managing agent liability requires careful
          legal analysis, targeted discovery, and experienced litigation counsel. The standards
          described in this article are complex and fact-specific. If you believe your insurance
          company has acted in bad faith and you are considering whether punitive damages may be
          available, consult with an attorney who specializes in California insurance bad faith
          litigation. Only a licensed attorney can evaluate whether the facts of your case
          support managing agent liability and advise you on the best litigation strategy.
        </p>
      </CalloutBox>

      <p className="text-sm text-gray-500 italic mt-12">
        Written by Leland Coontz III, Licensed Public Adjuster (CA License #2B53445). This
        article is for general educational purposes only and does not constitute legal advice.
        For legal questions about managing agent liability, punitive damages, or insurance bad
        faith litigation, consult a qualified California attorney.
      </p>
    </>
  )
}
