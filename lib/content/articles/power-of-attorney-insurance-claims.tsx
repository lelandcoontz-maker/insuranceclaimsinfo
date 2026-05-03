import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Power of Attorney and Insurance Claims: Protecting an Incapacitated Policyholder’s Rights',
  description:
    'When a policyholder becomes incapacitated, a Power of Attorney may be the only way to file a claim, negotiate with adjusters, sign a proof of loss, or invoke appraisal. Learn how durable POA works in insurance claims, how insurers resist it, and what families should do before incapacity strikes.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a homeowner suffers a stroke, develops advanced dementia, or is otherwise rendered
        incapable of managing their own affairs, someone must step in to handle the insurance
        claim on the damaged property. The policyholder cannot call the insurer, cannot meet
        with the adjuster, cannot sign a{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
          proof of loss
        </Link>
        , cannot sit for an{' '}
        <Link href="/resources/examination-under-oath" className="text-[#2E74B5] hover:underline">
          examination under oath
        </Link>
        , and cannot invoke the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
          appraisal
        </Link>{' '}
        process. The claim does not wait for the policyholder to recover. Water damage spreads.
        Mold grows. Deadlines run. The insurer&rsquo;s adjuster shows up, looks around, writes
        a lowball estimate, and moves on &mdash; while the family scrambles to figure out who
        has authority to do anything about it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer, in most cases, is a <strong>Power of Attorney (POA)</strong>. But the answer
        is only as good as the document itself, the scope of authority it grants, and the
        family&rsquo;s willingness to enforce it against an insurer that may resist at every
        turn. This article covers what a POA is, how it applies to insurance claims, what
        obstacles insurers throw in the way, and what every family should do &mdash; ideally
        long before incapacity occurs &mdash; to make sure the policyholder&rsquo;s claim rights
        are protected.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Power of Attorney?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Power of Attorney is a legal document in which one person (the <strong>principal</strong>)
        authorizes another person (the <strong>agent</strong> or <strong>attorney-in-fact</strong>)
        to act on their behalf in specified legal and financial matters. The principal must have
        legal capacity at the time they sign the POA &mdash; meaning they must understand what
        they are signing and the consequences of granting the authority. This is the critical
        point that trips up many families: <strong>you cannot create a POA after the principal
        has already lost capacity</strong>. If the policyholder already has advanced dementia or
        is in a coma, it is too late for a POA. The family&rsquo;s only option at that point is
        a court-supervised conservatorship &mdash; a far more expensive, time-consuming, and
        invasive process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the insurance claims context, the POA agent steps into the shoes of the policyholder
        for purposes of managing the claim. The agent can report the loss, communicate with the
        insurer&rsquo;s adjuster, provide documentation, negotiate the claim amount, sign
        required forms, and &mdash; if the POA is properly drafted &mdash; make binding decisions
        about the claim on the principal&rsquo;s behalf.
      </p>

      <CalloutBox variant="important" title="POA Must Be Created While the Principal Has Capacity">
        <p>
          This cannot be overstated. A Power of Attorney is only valid if the principal had legal
          capacity when they signed it. If the policyholder is already incapacitated &mdash;
          whether from dementia, traumatic brain injury, stroke, or any other condition that
          impairs their ability to understand the document &mdash; a POA cannot be created. The
          family must pursue a conservatorship through the courts. Plan ahead.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Power of Attorney: Which One Works for Insurance Claims?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all Powers of Attorney are created equal. The type of POA matters enormously in the
        insurance claims context, because the insurer will scrutinize the document&rsquo;s scope,
        durability, and effective date before recognizing the agent&rsquo;s authority.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        General Power of Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A general POA grants the agent broad authority to act on the principal&rsquo;s behalf in
        a wide range of legal and financial matters. This typically includes managing real
        property, conducting banking transactions, filing and managing insurance claims, signing
        documents, and entering into contracts. A general POA is effective immediately upon
        signing. <strong>However, a standard general POA terminates automatically when the
        principal becomes incapacitated</strong> &mdash; which is precisely when you need it
        most. For insurance claims involving an incapacitated policyholder, a general
        (non-durable) POA is inadequate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Durable Power of Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>durable</strong> POA contains specific language stating that the agent&rsquo;s
        authority survives &mdash; or is not affected by &mdash; the principal&rsquo;s subsequent
        incapacity. In California, Probate Code &sect; 4124 provides that a power of attorney is
        durable if it contains the words: <em>&ldquo;This power of attorney shall not be affected
        by subsequent incapacity of the principal&rdquo;</em> or <em>&ldquo;This power of attorney
        shall become effective upon the incapacity of the principal&rdquo;</em> or similar words
        showing the principal&rsquo;s intent that the authority conferred shall be exercisable
        notwithstanding the principal&rsquo;s subsequent incapacity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>This is the POA you need for insurance claims.</strong> A durable POA remains
        effective even after the principal loses the ability to manage their own affairs. It
        allows the agent to file claims, negotiate with insurers, sign proofs of loss, respond
        to coverage demands, and take all other actions that the principal could take if they
        were competent.
      </p>

      <CalloutBox variant="tip" title="The Durable POA Is the Gold Standard">
        <p>
          For insurance claims purposes, a <strong>durable general power of attorney</strong> is
          the most effective instrument. It is effective immediately (so the agent can act even
          while the principal still has capacity, with the principal&rsquo;s consent), and it
          survives incapacity. Every adult who owns property should have one. The cost of having
          an attorney prepare a durable POA is typically a few hundred dollars. The cost of a
          conservatorship proceeding when no POA exists can be $5,000 to $15,000 or more &mdash;
          and takes months.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Springing Power of Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A springing POA does not become effective until a specified triggering event occurs &mdash;
        typically the principal&rsquo;s incapacity, as certified by one or more physicians. The
        idea is appealing in theory: the agent has no authority until the principal actually needs
        help, preserving the principal&rsquo;s autonomy until then.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, springing POAs create significant problems in the insurance claims context:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The triggering event must be proven.</strong> The agent must provide evidence
          that the principal is incapacitated before the POA becomes effective. This usually
          requires a physician&rsquo;s written certification of incapacity. Obtaining this
          certification takes time &mdash; time the claim may not have.
        </li>
        <li>
          <strong>Insurers will challenge the triggering event.</strong> The insurer may demand
          to see the physician&rsquo;s certification, may question whether the certification
          meets the POA&rsquo;s requirements, or may argue that the incapacity is not
          sufficiently established. This adds delay and dispute at the front end of the claim.
        </li>
        <li>
          <strong>Third parties may refuse to honor it.</strong> Banks, title companies, and
          insurers are more reluctant to accept a springing POA than a durable POA, because the
          third party must independently verify that the triggering condition has been met.
        </li>
        <li>
          <strong>HIPAA complications.</strong> The physician who must certify incapacity may
          be reluctant to release medical information to the agent without a separate HIPAA
          authorization &mdash; creating a circular problem where the agent needs the medical
          certification to activate their authority but cannot obtain the certification without
          authority to access the medical records.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Springing POAs Create Unnecessary Delay">
        <p>
          While a springing POA is better than no POA at all, it introduces an additional hurdle
          that insurers will exploit. The agent must first prove that the triggering condition
          has been met before the insurer will even begin discussing the claim. In a time-sensitive
          situation &mdash; active water damage, a{' '}
          <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
            proof of loss deadline
          </Link>{' '}
          approaching, an insurer demanding an{' '}
          <Link href="/resources/examination-under-oath" className="text-[#2E74B5] hover:underline">
            examination under oath
          </Link>{' '}
          &mdash; the delay can be devastating. If your family member is considering a springing
          POA, strongly recommend a durable POA instead.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Limited (Special) Power of Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A limited or special POA restricts the agent&rsquo;s authority to specific acts or
        specific transactions. For example, a limited POA might authorize the agent to handle
        only the insurance claim on a specific property, or only to sign a specific document.
        Limited POAs can work in insurance claims, but they require careful drafting. If the
        limited POA authorizes the agent to &ldquo;manage and settle insurance claims on the
        property at [address]&rdquo; but does not specifically authorize the agent to sign a
        sworn proof of loss or submit to an examination under oath, the insurer will argue that
        those specific acts fall outside the scope of the agent&rsquo;s authority.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Probate Code: The Statutory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Uniform Durable Power of Attorney Act, codified at Probate Code
        &sect;&sect; 4000&ndash;4545, governs the creation, scope, and enforcement of Powers of
        Attorney in California. Several provisions are directly relevant to insurance claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Code &sect; 4264: Real Property Transactions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 4264 provides that an agent with authority over &ldquo;real property
        transactions&rdquo; may &ldquo;insure, the interest of the principal against casualty,
        liability, or loss&rdquo; and &ldquo;prosecute, defend, submit to arbitration, settle,
        and propose or accept a compromise with respect to any claim existing in favor of, or
        against, the principal based on or involving any real property transaction.&rdquo; This
        language is broad enough to encompass filing and settling an insurance claim on the
        principal&rsquo;s property. An insurance claim arising from damage to the insured
        dwelling is fundamentally a claim &ldquo;based on or involving&rdquo; a real property
        transaction &mdash; the insurance contract that protects that real property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Code &sect; 4265: Insurance and Annuity Transactions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 4265 specifically addresses insurance transactions. An agent with authority over
        &ldquo;insurance and annuity transactions&rdquo; may, among other things:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Continue, pay the premium on, modify, or rescind any contract of insurance procured
          by or on behalf of the principal
        </li>
        <li>
          Procure new contracts of insurance for the principal
        </li>
        <li>
          Submit claims, collect proceeds, and make elections under any insurance contract
        </li>
        <li>
          Submit to and settle insurance claims
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the statutory backbone. A California durable POA that grants authority over
        insurance transactions under &sect; 4265 provides the agent with express statutory
        authority to file the claim, submit proofs of loss, collect proceeds, settle, and take
        all actions necessary to manage the insurance claim on the principal&rsquo;s behalf.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Code &sect; 4303: Third-Party Duty to Accept
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the provision that has teeth. Section 4303 requires a third party who is
        presented with a power of attorney to accept it &mdash; or refuse it within a specified
        period and provide a written explanation for the refusal. If a third party refuses to
        honor a valid POA without reasonable cause, the agent can petition the court for an order
        requiring acceptance, and the court may award attorney&rsquo;s fees and damages against
        the refusing party.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Specifically, Probate Code &sect; 4303(b) provides that a third party who refuses to
        accept a properly executed statutory form power of attorney may be subject to liability
        for <strong>attorney&rsquo;s fees</strong> incurred in any action or proceeding to
        confirm the validity of the power of attorney or mandate its acceptance. This creates
        a meaningful deterrent against insurers who reflexively reject POA authority.
      </p>

      <CalloutBox variant="legal" title="The Statute Protects the Agent Against Unreasonable Refusal">
        <p>
          California Probate Code &sect; 4303 imposes a duty on third parties &mdash; including
          insurance companies &mdash; to honor a validly executed power of attorney. If the
          insurer unreasonably refuses to deal with the POA agent, the agent can petition the
          court for an order compelling acceptance, and the insurer may be liable for the
          agent&rsquo;s attorney&rsquo;s fees. This is a powerful tool, but it requires the
          agent to know the statute exists and be willing to enforce it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics to Resist POA Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers routinely resist dealing with POA agents. Some of these objections are
        legitimate concerns about fraud prevention. Many are not. They are delay tactics designed
        to slow down the claim, frustrate the family, and create leverage for a low settlement.
        Here are the most common tactics and how to address them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 1: Demanding the &ldquo;Original&rdquo; Document
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most common objection. The insurer demands the original POA document
        &mdash; not a copy, not a certified copy, but the ink-signed original. The stated reason
        is usually fraud prevention: the insurer wants to verify that the document is genuine.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that there is only one original. If the agent surrenders it to the insurer,
        they cannot use it with the bank, the mortgage company, the contractor, or any other
        party. Families are rightly reluctant to part with the original document.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law does not require the original. Probate Code &sect; 4307 provides that a
        photocopy or electronically transmitted copy of a power of attorney has the same force
        and effect as the original. The insurer may request a <strong>certified copy</strong>
        &mdash; a copy certified by the agent under penalty of perjury as a true and correct copy
        of the original &mdash; and under &sect; 4307, this must be accepted. If the insurer
        insists on the original after being provided with a certified copy and a citation to
        &sect; 4307, that refusal is unreasonable and potentially actionable under &sect; 4303.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 2: Questioning the Scope of Authority
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer reviews the POA and argues that it does not specifically authorize the agent
        to handle insurance claims, sign a proof of loss, or make settlement decisions. This
        objection is sometimes valid &mdash; a poorly drafted POA that grants only &ldquo;banking
        authority&rdquo; may genuinely lack the scope to cover insurance transactions. But
        insurers also raise this objection against well-drafted POAs as a delay tactic.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The response: point the insurer to the specific provisions of the POA that grant
        authority over insurance transactions, property management, or claims. If the POA uses
        the California statutory form (which tracks the authority categories in Probate Code
        &sect;&sect; 4260&ndash;4265), the relevant boxes will be checked or the relevant
        categories will be listed. If the POA grants &ldquo;all powers&rdquo; or uses a broad
        general grant, cite Probate Code &sect; 4261, which provides that a general grant of
        authority &ldquo;to act on my behalf in all matters&rdquo; is sufficient to authorize
        the agent to exercise all powers listed in &sect;&sect; 4260&ndash;4265.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 3: Requiring the Insurer&rsquo;s Own Authorization Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurers have their own &ldquo;authorization to represent&rdquo; or
        &ldquo;third-party representative&rdquo; forms. They present these forms to the POA
        agent and insist that the agent complete them &mdash; sometimes requiring the
        <em> principal&rsquo;s</em> signature on the insurer&rsquo;s form. This is circular:
        the whole reason the agent is acting under a POA is that the principal cannot sign
        documents.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The POA agent should complete the insurer&rsquo;s form to the extent possible, signing
        as &ldquo;[Principal&rsquo;s Name], by [Agent&rsquo;s Name], Attorney-in-Fact.&rdquo;
        If the insurer refuses to accept the agent&rsquo;s signature on the authorization form,
        the agent should provide a written response stating that the POA grants authority to
        execute all documents on the principal&rsquo;s behalf, citing the relevant provisions
        of the POA and Probate Code &sect;&sect; 4264&ndash;4265. The insurer&rsquo;s internal
        forms do not override a validly executed statutory power of attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 4: Claiming the POA Has Been Revoked or Is Stale
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer may argue that the POA is &ldquo;too old&rdquo; and demand a more recent
        document, or may claim that it has reason to believe the POA has been revoked. Some
        financial institutions have informal policies rejecting POAs older than a certain number
        of years (often cited as six months to two years).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law does not impose a shelf life on a durable POA. A durable POA executed
        twenty years ago is just as valid as one executed last week, provided it was properly
        executed and has not been formally revoked. If the insurer claims the POA is stale, the
        agent should provide a <strong>Certificate of Agent</strong> under Probate Code
        &sect; 4128, in which the agent certifies under penalty of perjury that the POA has
        not been revoked and that the principal&rsquo;s death has not been reported to the agent.
        This certification satisfies the insurer&rsquo;s legitimate concern about revocation
        without requiring a new POA.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tactic 5: Refusing to Communicate with the Agent Entirely
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the most egregious cases, the insurer simply refuses to speak with the agent.
        The adjuster says they can only discuss the claim with the named insured. The claims
        representative asks to &ldquo;speak with the policyholder directly.&rdquo; The insurer
        sends correspondence addressed to the incapacitated principal and ignores the agent&rsquo;s
        responses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is stonewalling, and it is potentially{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>
        . The insurer has a duty to investigate and adjust the claim. If the policyholder is
        incapacitated and the only person who can provide information and documentation is the
        POA agent, refusing to deal with the agent is refusing to investigate the claim. Under
        California&rsquo;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (Cal. Code Regs., tit. 10, &sect; 2695.1 et seq.), the insurer must conduct a thorough
        and timely investigation. Refusing to communicate with the only available representative
        of the policyholder violates this duty.
      </p>

      <CalloutBox variant="important" title="Document Every Refusal">
        <p>
          Every time the insurer refuses to deal with the POA agent, that refusal should be
          documented in writing. Send a letter or email stating: &ldquo;On [date], your
          representative [name] refused to discuss the claim with me despite my having provided
          a valid durable power of attorney. This refusal impedes the investigation of the claim
          and harms the interests of the principal.&rdquo; These communications become evidence
          of{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            bad faith
          </Link>{' '}
          if litigation becomes necessary.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Proof of Loss Signature Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
          proof of loss
        </Link>{' '}
        is one of the most consequential documents in an insurance claim. It is a sworn statement
        &mdash; signed under oath or penalty of perjury &mdash; in which the policyholder sets
        forth the facts of the loss, the amount of the claim, and other material information.
        The standard proof of loss form requires the <strong>signature of the insured</strong>.
        When the insured is incapacitated, the question arises: can the POA agent sign the
        proof of loss on the principal&rsquo;s behalf?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer should be yes, and the law supports it &mdash; but insurers routinely
        challenge this.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurer&rsquo;s Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers argue that a proof of loss is a <em>sworn statement</em> &mdash; equivalent to
        testimony under oath. They contend that the signature verifies the signer&rsquo;s
        personal knowledge of the facts stated in the document. Because the POA agent was not
        present at the loss and does not have the principal&rsquo;s personal knowledge of the
        circumstances, the insurer claims the agent cannot swear to the truth of the statements
        in the proof of loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument is a red herring. The proof of loss is not trial testimony. It is a
        contractual document required by the insurance policy. Its purpose is to provide the
        insurer with a formal statement of the claim amount and supporting facts, not to serve
        as the principal&rsquo;s sworn deposition. The agent signs the proof of loss in their
        capacity as the principal&rsquo;s authorized representative, based on the information
        available to the agent. The agent is not swearing to facts based on personal observation
        &mdash; they are presenting the claim on behalf of the principal, just as an attorney
        signs a complaint on behalf of a client.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Legal Authority
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Probate Code &sect; 4265 expressly authorizes an agent with insurance
        transaction authority to &ldquo;submit claims&rdquo; under insurance contracts. A proof
        of loss is the mechanism by which a claim is formally submitted. If the legislature
        intended to exclude sworn proofs of loss from the agent&rsquo;s authority, it would have
        said so.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, the Restatement (Third) of Agency &sect; 3.02 provides that an agent has
        authority to take actions that are &ldquo;incidental to&rdquo; or &ldquo;reasonably
        necessary&rdquo; to accomplish the authorized objective. If the agent is authorized to
        manage and settle insurance claims, signing the proof of loss is incidental to that
        authority &mdash; the claim cannot proceed without it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Richardson v. Allstate Insurance Co.</em>, 117 Cal.App.3d 8
        (1981):</strong> While this case addresses the substantial compliance doctrine in the
        proof of loss context, the broader principle is relevant: California courts do not
        allow insurers to use proof of loss technicalities to defeat otherwise valid claims.
        The court held that &ldquo;substantial compliance&rdquo; with the proof of loss
        requirement is sufficient, and that the purpose of the proof of loss &mdash; to provide
        the insurer with adequate notice and information &mdash; must be viewed practically,
        not as a technical trap.
      </p>

      <CalloutBox variant="tip" title="How the Agent Should Sign the Proof of Loss">
        <p>
          The agent should sign as: <strong>&ldquo;[Principal&rsquo;s Name], by [Agent&rsquo;s
          Name], Attorney-in-Fact under Durable Power of Attorney dated [date].&rdquo;</strong>{' '}
          Attach a certified copy of the POA to the proof of loss. In a cover letter, state that
          the agent is submitting the proof of loss on behalf of the incapacitated principal
          pursuant to the authority granted in the attached POA and California Probate Code
          &sect; 4265. This creates a clear record and makes it difficult for the insurer to
          argue that the submission was unauthorized.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Examination Under Oath Issues with POA Holders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/examination-under-oath" className="text-[#2E74B5] hover:underline">
          examination under oath (EUO)
        </Link>{' '}
        is a post-loss policy condition that allows the insurer to question the policyholder,
        under oath, about the circumstances of the loss, the claimed damages, and the
        policyholder&rsquo;s financial condition. Failure to submit to an EUO when properly
        demanded can be grounds for the insurer to deny the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder is incapacitated, the EUO creates a unique problem. The insurer
        demands to examine &ldquo;the insured&rdquo; under oath. The insured cannot participate.
        The question becomes: can the insurer examine the POA agent instead? And if so, what
        is the scope?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Agent Can and Should Submit to the EUO
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes, the POA agent can be examined under oath as the principal&rsquo;s representative.
        The agent testifies in their capacity as the person managing the claim on behalf of
        the principal, not as the principal personally. The agent can testify about:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The facts of the loss as the agent understands them</li>
        <li>The condition of the property before and after the loss</li>
        <li>The claimed damages and the basis for the claim amount</li>
        <li>The steps taken to mitigate the loss</li>
        <li>The principal&rsquo;s medical condition (to the extent relevant to the claim)</li>
        <li>The agent&rsquo;s authority under the POA</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The agent cannot be expected to testify about matters known only to the principal &mdash;
        such as the principal&rsquo;s personal recollection of the moment the loss occurred, or
        conversations the principal had with third parties that the agent was not part of. The
        insurer may attempt to use this limitation to argue that the EUO was &ldquo;incomplete&rdquo;
        and deny the claim on that basis. That argument should be rejected. The insurer cannot
        demand the impossible &mdash; it cannot demand testimony from a person who is incapable
        of testifying &mdash; and then deny the claim because the impossible was not accomplished.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Protect the Agent&rsquo;s Rights During the EUO
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The POA agent should be represented by an attorney at the EUO, just as the principal
        would be. The attorney can object to questions that exceed the proper scope, protect
        privileged information, and ensure that the insurer does not use the EUO as a fishing
        expedition into the agent&rsquo;s personal affairs rather than the principal&rsquo;s
        insurance claim. The agent should also bring a certified copy of the POA to the EUO
        and make it an exhibit to the transcript.
      </p>

      <CalloutBox variant="warning" title="Do Not Refuse the EUO">
        <p>
          Even though the insurer&rsquo;s demand to examine the incapacitated policyholder is
          technically impossible, the POA agent should not simply refuse the EUO. A blanket
          refusal gives the insurer a textbook basis to deny the claim for non-cooperation.
          Instead, the agent should respond in writing: &ldquo;The principal is incapacitated
          and cannot personally appear for examination. As the principal&rsquo;s
          attorney-in-fact under a durable power of attorney, I am authorized and willing to
          appear for examination on the principal&rsquo;s behalf.&rdquo; This puts the burden
          on the insurer to either accept the agent&rsquo;s testimony or explain why it will not.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Duty of Good Faith When Dealing with a POA Agent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s implied covenant of good faith and fair dealing runs to the
        policyholder &mdash; the principal. The fact that the principal is incapacitated and
        the claim is being managed by an agent does not reduce or eliminate the insurer&rsquo;s
        duty. If anything, the insurer&rsquo;s duty is heightened when dealing with a vulnerable
        policyholder, because California&rsquo;s{' '}
        <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
          Elder Abuse and Dependent Adult Civil Protection Act
        </Link>{' '}
        (Welf. &amp; Inst. Code &sect; 15600 et seq.) may apply.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Good Faith Duty Does Not Change Because a POA Agent Is Involved
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Conduct a thorough and timely investigation</strong> of the claim, working
          with the POA agent as the principal&rsquo;s authorized representative
        </li>
        <li>
          <strong>Communicate claim decisions promptly</strong> to the POA agent, in writing,
          with explanations for any partial payment or denial
        </li>
        <li>
          <strong>Not impose unreasonable documentation requirements</strong> beyond what is
          necessary to evaluate the claim
        </li>
        <li>
          <strong>Not use the incapacity as a basis to delay</strong> &mdash; the insurer
          cannot take the position that it will &ldquo;wait until the policyholder recovers&rdquo;
          before processing the claim
        </li>
        <li>
          <strong>Not attempt to contact the incapacitated principal directly</strong> in an
          effort to obtain statements, admissions, or signatures, bypassing the POA agent
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Egan v. Mutual of Omaha Insurance Co.</em>, 24 Cal.3d 809
        (1979):</strong> The California Supreme Court held that the insurer&rsquo;s duty of good
        faith requires it to act reasonably in processing, investigating, and resolving claims.
        Unreasonable conduct &mdash; including delay, obstruction, and failure to communicate
        &mdash; supports a bad faith action. This duty applies with full force when the claim
        is presented by a POA agent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Wilson v. 21st Century Insurance Co.</em>, 42 Cal.4th 713
        (2007):</strong> The California Supreme Court reaffirmed that the covenant of good
        faith requires the insurer to refrain from doing anything to injure the insured&rsquo;s
        right to receive the benefits of the policy. Stonewalling a POA agent, demanding the
        impossible (the incapacitated principal&rsquo;s personal appearance), or using the
        incapacity as a pretext for delay all violate this standard.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Elder Abuse Exposure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the incapacitated policyholder is an elder (age 65 or older) or a dependent adult,
        the insurer&rsquo;s bad faith may constitute{' '}
        <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
          financial abuse of an elder or dependent adult
        </Link>{' '}
        under Welfare and Institutions Code &sect; 15610.30. Financial abuse includes taking or
        retaining the property of an elder for a wrongful use, or with intent to defraud, or by
        undue influence. An insurer that wrongfully withholds benefits owed to an incapacitated
        elderly policyholder is, in effect, retaining property (the claim proceeds) that belongs
        to the elder. This can expose the insurer to enhanced remedies including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Attorney&rsquo;s fees (not normally available in contract actions)</li>
        <li>Damages for pain, suffering, and emotional distress</li>
        <li>Punitive damages</li>
        <li>
          Survival actions that preserve the claim even if the elder passes away during
          litigation
        </li>
      </ul>

      <CalloutBox variant="important" title="The Elder Abuse Angle Is Powerful">
        <p>
          Insurers pay close attention when elder abuse is alleged. The enhanced remedies &mdash;
          particularly attorney&rsquo;s fees and punitive damages &mdash; change the economics
          of the case dramatically. If the insurer is stonewalling a claim involving an
          incapacitated elderly policyholder, the POA agent should consult with an attorney
          experienced in both insurance bad faith and{' '}
          <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
            elder abuse litigation
          </Link>
          . For more on how these claims work, see our detailed article on{' '}
          <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
            Elder Abuse Statutes in Insurance Claims
          </Link>
          .
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Invoking Appraisal Under a Power of Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies contain an{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
          appraisal clause
        </Link>{' '}
        that allows either party to demand appraisal when there is a disagreement about the
        amount of the loss. Appraisal is a quasi-arbitration process in which each side selects
        an appraiser, the two appraisers select an umpire, and the panel determines the amount
        of the loss (though not coverage questions).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question: can a POA agent invoke appraisal on behalf of the incapacitated principal?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. The right to demand appraisal is a contractual right under the insurance policy.
        The POA agent, who is authorized to manage the insurance claim and exercise the
        principal&rsquo;s rights under the policy, can invoke appraisal just as the principal
        could. California Probate Code &sect; 4264 specifically authorizes an agent to
        &ldquo;submit to arbitration, settle, and propose or accept a compromise&rdquo; with
        respect to claims involving real property transactions. Appraisal is a form of
        alternative dispute resolution analogous to arbitration, and it falls squarely within
        this authority.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The agent can also select and retain an appraiser on the principal&rsquo;s behalf,
        participate in the umpire selection process, and accept or challenge the appraisal
        award. If the insurer objects to the agent&rsquo;s invocation of appraisal, the
        agent should respond with a letter citing the POA authority and the applicable Probate
        Code provisions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When No Power of Attorney Exists: Conservatorship
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder is already incapacitated and no POA was ever executed, the family
        has no choice but to seek a <strong>conservatorship</strong> through the California
        Probate Court. A conservatorship is a court-supervised arrangement in which the court
        appoints a conservator to manage the incapacitated person&rsquo;s (the conservatee&rsquo;s)
        personal and/or financial affairs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Two Types of Conservatorship
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Conservatorship of the person:</strong> Grants authority over the conservatee&rsquo;s
        personal care decisions &mdash; medical treatment, living arrangements, daily care.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Conservatorship of the estate:</strong> Grants authority over the conservatee&rsquo;s
        financial affairs &mdash; managing property, paying bills, filing and managing insurance
        claims, entering into contracts. <strong>This is the conservatorship that matters for
        insurance claims.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The conservator of the estate has essentially the same authority as a POA agent with
        respect to managing insurance claims, but with an important difference: the conservator
        is subject to ongoing court oversight. The conservator must file an initial inventory and
        appraisal of the estate, file periodic accountings with the court, and in some cases
        obtain court approval before making significant decisions (such as settling a large
        insurance claim).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Conservatorship Process
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Obtaining a conservatorship is not quick or simple:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A petition must be filed with the Probate Court in the county where the proposed
          conservatee resides
        </li>
        <li>
          The proposed conservatee must be given notice and may have the right to contest the
          conservatorship
        </li>
        <li>
          The court typically appoints an attorney to represent the proposed conservatee&rsquo;s
          interests
        </li>
        <li>
          A court investigator conducts an investigation and files a report
        </li>
        <li>
          A hearing is held at which the court determines whether conservatorship is necessary
          and who should serve as conservator
        </li>
        <li>
          The process typically takes <strong>60 to 90 days minimum</strong>, and contested
          conservatorships can take much longer
        </li>
        <li>
          Costs range from $5,000 to $15,000 or more in attorney&rsquo;s fees, filing fees,
          investigation costs, and bonding requirements
        </li>
      </ul>

      <CalloutBox variant="warning" title="Conservatorship Is the Last Resort">
        <p>
          Conservatorship is expensive, time-consuming, invasive, and strips the conservatee of
          significant personal autonomy. It requires ongoing court supervision and periodic
          accountings. A properly drafted durable POA avoids all of this. The message is
          simple: <strong>get the POA done while your family member still has capacity</strong>.
          Do not wait for a crisis.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Emergency (Temporary) Conservatorship
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an insurance claim requires immediate action &mdash; a proof of loss deadline is
        approaching, emergency repairs are needed, or the insurer is threatening to close the
        file &mdash; the family can petition for a <strong>temporary conservatorship</strong>
        under Probate Code &sect; 2250. A temporary conservatorship can be granted on an
        expedited basis (sometimes within days) and provides the temporary conservator with
        authority to act on the conservatee&rsquo;s behalf pending the full conservatorship
        proceeding. This is a stopgap, not a long-term solution, but it can prevent a claim
        from being lost due to timing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Intersection with the &ldquo;Where You Reside&rdquo; Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Families dealing with an incapacitated policyholder often face a double problem: the
        policyholder has been moved to a care facility, and the property has suffered a loss.
        The insurer may not only resist the POA agent&rsquo;s authority but also invoke the{' '}
        <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
          &ldquo;where you reside&rdquo; exclusion
        </Link>{' '}
        &mdash; arguing that because the policyholder no longer resides at the insured premises,
        the property does not qualify as a &ldquo;residence premises&rdquo; and coverage does
        not exist.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the compound nightmare scenario: the insurer refuses to deal with the agent
        <em> and</em> denies coverage on the merits. The family must fight on two fronts
        simultaneously. The POA and the residency issues are legally distinct, but they are
        factually intertwined &mdash; the same incapacity that necessitated the POA is the same
        event that caused the policyholder to leave the residence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our comprehensive article on the{' '}
        <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
          &ldquo;where you reside&rdquo; exclusion
        </Link>{' '}
        details the case law, the ISO endorsements (HO 06 48 and HO 06 49), and the practical
        steps to preserve coverage when a policyholder moves to a care facility. If you are
        dealing with both a POA situation and a residency challenge, that article is essential
        reading.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Intersection with Policyholder Death
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the incapacitated policyholder dies during the pendency of the claim, the POA
        terminates. A POA&rsquo;s authority ends at the moment of the principal&rsquo;s death.
        At that point, authority over the claim transfers to the executor, administrator, or
        successor trustee of the deceased&rsquo;s estate. The claim continues &mdash; it does
        not die with the policyholder &mdash; but the person authorized to manage it changes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This transition must be handled carefully. The insurer should be notified promptly of
        the policyholder&rsquo;s death and provided with documentation of the new representative&rsquo;s
        authority (Letters Testamentary, Letters of Administration, or successor trustee
        certification). For a detailed discussion of what happens to the claim after the
        policyholder&rsquo;s death, see our article on{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to your insurance if the policyholder dies
        </Link>
        .
      </p>

      <CalloutBox variant="info" title="The Claim Survives the Policyholder">
        <p>
          An insurance claim is a chose in action &mdash; a legally enforceable right that
          belongs to the estate. The policyholder&rsquo;s death does not extinguish the claim.
          The standard homeowner policy&rsquo;s Death clause (Condition 9) extends insured
          status to the legal representative of the deceased. If the insurer has been dealing
          with a POA agent and the principal dies, the insurer must transition to dealing with
          the estate&rsquo;s representative &mdash; it cannot use the death as an excuse to
          close the file.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps: What Families Should Do Before Incapacity Occurs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best time to prepare for an incapacity scenario is before it happens. The following
        steps can save months of delay, thousands of dollars in legal fees, and potentially the
        entire claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Execute a Durable Power of Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every adult homeowner should have a durable power of attorney that specifically includes
        authority over:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance and annuity transactions</strong> (Probate Code &sect; 4265)
        </li>
        <li>
          <strong>Real property transactions</strong> (Probate Code &sect; 4264)
        </li>
        <li>
          <strong>Claims and litigation</strong> &mdash; authority to file, manage, settle,
          and compromise claims, and to submit to alternative dispute resolution including
          appraisal and arbitration
        </li>
        <li>
          <strong>Banking and financial transactions</strong> &mdash; to receive and deposit
          insurance claim payments
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The POA should use a <strong>durable</strong> form &mdash; not a springing form &mdash;
        and should be executed with the formalities required under California law (notarization
        is strongly recommended for a POA that will be used for real property and insurance
        transactions, and some third parties will refuse to accept a non-notarized POA).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Name a Trusted Agent
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The agent should be someone who is capable of managing a complex insurance claim &mdash;
        someone organized, assertive, and willing to push back against the insurer. Insurance
        claims, particularly large property claims, require persistence, documentation skills,
        and often months or years of follow-up. The agent should also name a successor agent
        in case the primary agent is unable or unwilling to serve when the time comes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Give the Agent a Copy of the Insurance Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The POA agent needs access to the actual policy &mdash; not just the{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>
        , but the complete policy including all endorsements. If a loss occurs and the principal
        is incapacitated, the agent must be able to identify the coverages, limits, deductibles,
        and conditions of the policy. The agent should also have the insurer&rsquo;s contact
        information, the policy number, and the name of the insurance agent or broker who placed
        the policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Execute a HIPAA Authorization
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A separate HIPAA authorization allows the agent to access the principal&rsquo;s medical
        records. This is relevant for two reasons: (1) if the POA is a springing POA (which we
        do not recommend), the agent needs a physician&rsquo;s certification of incapacity to
        activate the POA; and (2) the insurer may demand medical documentation to verify the
        principal&rsquo;s incapacity, particularly if the insurer is challenging the agent&rsquo;s
        authority. A HIPAA authorization executed at the same time as the POA eliminates the
        circular problem of needing medical records to prove the authority needed to obtain
        medical records.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Notify the Insurance Agent or Broker
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider notifying the insurance agent or broker that a POA is in place and providing
        them with a copy. Some carriers allow the POA agent to be listed as an authorized
        contact on the account, which can prevent delays at the initial claim reporting stage.
        At a minimum, the POA agent should introduce themselves to the insurance agent and
        confirm that the agent has a copy of the POA on file.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Review the Insurance Policy for Adequacy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While you are handling the POA planning, review the insurance policy itself. Is the
        coverage adequate? Has the home been reappraised for replacement cost recently? Is the
        policy a homeowner form (HO-3) or a more limited form? Are the ISO residence premises
        endorsements (HO 06 48 and HO 06 49) on the policy? If the policyholder is elderly and
        may transition to a care facility in the foreseeable future, these endorsements should
        be requested now &mdash; not after the move. See our article on the{' '}
        <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
          &ldquo;where you reside&rdquo; exclusion
        </Link>{' '}
        for a complete discussion of these endorsements and why they matter.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 7: Consider Hiring a Public Adjuster Immediately After a Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a loss occurs and the policyholder is incapacitated, the POA agent does not have to
        handle the claim alone. A licensed Public Adjuster can be retained by the POA agent to
        manage the claim on the principal&rsquo;s behalf. The Public Adjuster handles the
        documentation, the damage assessment, the estimate preparation, and the negotiation
        with the insurer &mdash; bringing professional expertise to a process that can be
        overwhelming for a family member who is simultaneously managing a loved one&rsquo;s
        medical crisis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Case Law: POA Authority in Insurance Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While there are relatively few published California appellate decisions addressing POA
        authority in the specific context of first-party property insurance claims, the general
        principles are well established in the broader agency and fiduciary law context, and
        several decisions from other jurisdictions are instructive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Torrez v. Consolidated Fire Ins. Co.</em> (Tex. Ct. App. 1913):</strong> In
        an early case that remains relevant, the Texas Court of Appeals held that an authorized
        agent could file a proof of loss on behalf of the insured and that the insurer could not
        reject the agent&rsquo;s submission solely because it was not signed by the insured
        personally. The court noted that requiring personal action by the insured when the
        insured was incapable of acting would render the insurance contract meaningless.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>In re Estate of Skinner</em>, 236 Cal.App.4th 1280 (2015):</strong> While
        this case involved a dispute over the scope of a POA agent&rsquo;s authority in the
        estate context, the court reaffirmed that California&rsquo;s statutory POA framework is
        designed to be construed broadly in favor of the agent&rsquo;s authority. The court noted
        that the purpose of the Uniform Durable Power of Attorney Act is to allow individuals
        to plan for incapacity by designating a trusted agent, and that interpreting the
        agent&rsquo;s authority narrowly would undermine this legislative purpose.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Hasso v. Hapke</em>, 227 Cal.App.4th 107 (2014):</strong> The court
        addressed the scope of an agent&rsquo;s authority under a broad general grant of power.
        The court held that when a POA grants general authority, the agent may take actions that
        are &ldquo;reasonably required&rdquo; to accomplish the purposes for which the authority
        was granted. Filing and managing an insurance claim on the principal&rsquo;s property is
        a classic example of an action reasonably required to protect the principal&rsquo;s
        financial interests.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Colburn v. Mid-Century Insurance Co.</em> (Cal. App. 2006):</strong> While
        the primary holding involved uninsured motorist coverage, the court&rsquo;s discussion
        of the insurer&rsquo;s obligations when dealing with an insured&rsquo;s representative
        is broadly applicable. The court emphasized that the insurer cannot use procedural
        requirements to avoid its substantive obligations under the policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Also Demands to Deal with the &ldquo;Insured&rdquo; Directly
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers take the position that the policy requires the &ldquo;insured&rdquo; to
        personally perform certain duties &mdash; such as protecting the property from further
        damage, separating damaged from undamaged property, providing a complete inventory of
        damaged items, or cooperating with the investigation &mdash; and that the POA agent
        cannot fulfill these duties because they are personal to the insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument confuses <em>personal</em> duties with <em>delegable</em> duties. The
        duties listed in the standard policy &mdash; protecting property, providing inventories,
        cooperating with the investigation &mdash; are practical obligations that any authorized
        representative can fulfill. They are not personal in the sense that only the named
        insured can physically perform them. An incapacitated policyholder cannot climb on the
        roof to cover a hole with a tarp, cannot catalog 500 items of damaged personal property,
        and cannot sit across a table from the adjuster to answer questions. These duties can
        and must be performed by whoever is authorized to act on the policyholder&rsquo;s behalf
        &mdash; which is precisely the POA agent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s interpretation would create an absurd result: the policy requires
        the insured to perform certain duties, the insured is physically incapable of performing
        them, the insurer refuses to accept performance by the authorized agent, and the insurer
        then denies the claim for &ldquo;failure to cooperate.&rdquo; No court should tolerate
        this. The duty to cooperate is satisfied when the POA agent cooperates on the
        principal&rsquo;s behalf.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Considerations: The POA Agent&rsquo;s Fiduciary Duties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A POA agent is a fiduciary. This means the agent has a legal duty to act in the
        principal&rsquo;s best interests, to avoid self-dealing, to maintain careful records, and
        to manage the principal&rsquo;s affairs with the care of a reasonably prudent person.
        In the insurance claims context, this means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not accept a lowball settlement without proper evaluation.</strong> The
          agent has a duty to maximize the claim recovery for the principal. Accepting the
          insurer&rsquo;s first offer without question may breach the agent&rsquo;s fiduciary
          duty. Obtain independent estimates, hire a Public Adjuster or attorney if appropriate,
          and negotiate the claim as vigorously as the principal would.
        </li>
        <li>
          <strong>Maintain detailed records of all claim-related activity.</strong> Every
          communication with the insurer, every payment received, every expense incurred, and
          every decision made should be documented. The agent may be required to account for
          these transactions if the conservatorship court, a co-agent, a successor agent, or
          a beneficiary of the principal&rsquo;s estate demands an accounting.
        </li>
        <li>
          <strong>Deposit claim proceeds into the principal&rsquo;s account, not your own.</strong>{' '}
          Insurance claim payments should be deposited into the principal&rsquo;s bank account
          or an account maintained by the agent solely for the principal&rsquo;s benefit.
          Commingling claim proceeds with the agent&rsquo;s personal funds is a fiduciary
          violation.
        </li>
        <li>
          <strong>Use claim proceeds for their intended purpose.</strong> If the insurer pays
          for repairs, the money should be used for repairs (or held in trust for that purpose).
          If the insurer pays ALE, the money should be used for the principal&rsquo;s temporary
          living expenses. Diverting claim proceeds for other purposes may constitute financial
          abuse of the principal.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Drafting Tips: What the POA Should Specifically Include
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are working with an attorney to draft a durable POA that will be used for
        insurance claims, make sure the document includes the following:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Express durability language</strong> per Probate Code &sect; 4124 &mdash;
          &ldquo;This power of attorney shall not be affected by subsequent incapacity of the
          principal.&rdquo;
        </li>
        <li>
          <strong>Authority over insurance transactions</strong> per Probate Code &sect; 4265
          &mdash; specifically including authority to submit claims, collect proceeds, settle
          claims, and execute all documents related to insurance.
        </li>
        <li>
          <strong>Authority over real property transactions</strong> per Probate Code &sect; 4264
          &mdash; including authority to insure the principal&rsquo;s property, manage claims
          involving real property, and submit to alternative dispute resolution.
        </li>
        <li>
          <strong>Express authority to sign sworn documents</strong> &mdash; including proofs of
          loss, sworn statements, and any other documents that require the principal&rsquo;s
          signature under oath or penalty of perjury.
        </li>
        <li>
          <strong>Express authority to submit to examination under oath</strong> &mdash; on
          behalf of the principal, in connection with any insurance claim.
        </li>
        <li>
          <strong>Express authority to invoke appraisal, arbitration, or other alternative
          dispute resolution</strong> under any insurance policy, and to select appraisers,
          arbitrators, and other professionals in connection with such proceedings.
        </li>
        <li>
          <strong>Authority to retain professionals</strong> &mdash; including Public Adjusters,
          attorneys, contractors, engineers, and other experts necessary to evaluate and present
          the insurance claim.
        </li>
        <li>
          <strong>Notarization</strong> &mdash; while not always legally required, a notarized
          POA will encounter far less resistance from insurers and other third parties.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Use the California Statutory Form as a Starting Point">
        <p>
          California Probate Code &sect; 4401 provides a statutory form power of attorney that
          includes checkboxes for the authority categories defined in &sect;&sect; 4260&ndash;4265.
          This form is widely recognized and accepted by California institutions. An attorney can
          customize it with the additional express provisions listed above &mdash; particularly
          the authority to sign sworn documents, submit to EUOs, and invoke appraisal &mdash; to
          create a POA that is purpose-built for insurance claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An incapacitated policyholder&rsquo;s claim rights do not disappear because the
        policyholder cannot personally manage the claim. A properly drafted durable power of
        attorney gives the agent full authority to file the claim, communicate with the insurer,
        sign proofs of loss, submit to examinations under oath, invoke appraisal, negotiate
        settlements, and take all other actions necessary to protect the principal&rsquo;s
        interests. California&rsquo;s Probate Code provides the statutory framework, and
        &sect; 4303 gives the agent teeth to enforce that authority against reluctant third
        parties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers will resist. They will demand originals. They will question scope. They will
        insist on their own forms. They will claim they need to speak with the policyholder
        personally. Every one of these tactics is either legally unfounded or can be overcome
        with the right documentation and the right statutory citations. The POA agent&rsquo;s
        job is to push through these obstacles &mdash; methodically, in writing, with the law
        on their side.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But none of this works without advance planning. The POA must be executed while the
        principal still has capacity. Once incapacity strikes, the window closes, and the
        family is left with the expensive, time-consuming conservatorship process as their only
        option. If you have an elderly parent or family member who owns property, the
        conversation about a durable power of attorney should happen today &mdash; not after the
        diagnosis, not after the fall, not after the fire. Today.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Insurance policies, Powers of Attorney, and applicable law vary by state and
          by document. The case law and statutory provisions discussed in this article are
          current as of the date of publication, but outcomes in any individual case will depend
          on the specific POA language, the policy language, the facts, and the applicable state
          law. Always consult with a licensed attorney in your jurisdiction about your specific
          situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing with an Insurer That Won&rsquo;t Recognize Your POA Authority?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer is refusing to deal with you as the authorized agent for an
          incapacitated policyholder, a licensed Public Adjuster can help you assert your
          authority, manage the claim, and push the insurer to fulfill its obligations. Don&rsquo;t
          let the carrier stall while the claim deteriorates.
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
