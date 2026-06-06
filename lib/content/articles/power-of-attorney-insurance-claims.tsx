import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Power of Attorney and Conservatorship in Insurance Claims: Managing the Claim of an Incapacitated Policyholder',
  description:
    'When a policyholder becomes incapacitated, someone else must take over the claim — either through a previously executed Power of Attorney or, if no POA exists, through a court-supervised conservatorship. The full guide to both paths: how durable POA works in insurance claims, what conservatorship requires under California Probate Code, how insurers resist each, and what families should do before incapacity strikes.',
  summary:
    'If a policyholder becomes incapacitated, a durable Power of Attorney lets someone manage the claim; without one, a court conservatorship is required under California Probate Code. Insurers resist both, so set up a POA before incapacity strikes.',
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
        There are two paths to authority over an incapacitated policyholder&rsquo;s claim. The
        easy path is a <strong>Power of Attorney (POA)</strong> &mdash; a document the
        policyholder executed while they still had capacity, authorizing someone else to act on
        their behalf in legal and financial matters. The hard path is a <strong>court-supervised
        conservatorship</strong> &mdash; a formal legal proceeding, requiring a petition,
        notice, a court investigator, a hearing, a surety bond, and the appointment of a judge.
        Conservatorship is what families end up with when no POA was executed before the
        policyholder lost capacity. It is significantly more expensive, takes weeks to months,
        and never feels good to anyone involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers both paths. The first half covers POA: what it is, how it applies
        to insurance claims, what obstacles insurers throw in the way, and what every family
        should do &mdash; ideally long before incapacity occurs &mdash; to make sure the
        policyholder&rsquo;s claim rights are protected. The second half covers
        conservatorship: when it is needed, how the California process works under Probate Code
        &sect; 1800 et seq., what authority a conservator has over insurance matters, what
        court approvals are required, and how to protect the claim during the weeks or months
        it takes to get a conservator appointed.
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
          A Power of Attorney is only valid if the principal had legal capacity when they signed
          it. If the policyholder is already incapacitated &mdash;
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
        Probate Code &sect; 4451: Real Property Transactions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 4451 provides that, under a statutory form power of attorney, an agent with
        authority over &ldquo;real property transactions&rdquo; may &ldquo;insure, the interest
        of the principal against casualty, liability, or loss&rdquo; and &ldquo;prosecute,
        defend, submit to arbitration, settle, and propose or accept a compromise with respect
        to any claim existing in favor of, or against, the principal based on or involving any
        real property transaction.&rdquo; This
        language is broad enough to encompass filing and settling an insurance claim on the
        principal&rsquo;s property. An insurance claim arising from damage to the insured
        dwelling is fundamentally a claim &ldquo;based on or involving&rdquo; a real property
        transaction &mdash; the insurance contract that protects that real property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Code &sect; 4457: Insurance and Annuity Transactions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 4457 specifically addresses insurance and annuity transactions under a statutory
        form power of attorney. An agent with authority over &ldquo;insurance and annuity
        transactions&rdquo; may, among other things:
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
        This is the statutory backbone. A California statutory form POA that grants authority
        over insurance transactions under &sect; 4457 provides the agent with express statutory
        authority to file the claim, submit proofs of loss, collect proceeds, settle, and take
        all actions necessary to manage the insurance claim on the principal&rsquo;s behalf.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Code &sect;&sect; 4303 and 4406: Safe Harbor and Duty to Accept
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two Probate Code sections work together to govern how third parties &mdash; including
        insurance companies &mdash; must respond when an agent presents a power of attorney.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 4303</strong> is the <em>safe harbor</em>: a third party who acts in good
        faith reliance on a power of attorney is not liable to the principal or any other party
        for so acting, provided the POA is presented by the named attorney-in-fact, appears valid
        on its face, and includes a notary&rsquo;s certificate of acknowledgment or two witness
        signatures. The legislative point of &sect; 4303 is to remove the third party&rsquo;s
        liability risk &mdash; it encourages acceptance by protecting the insurer from being sued
        later if the POA turns out to have a defect the insurer could not reasonably have known
        about.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Section 4406</strong> is the <em>duty to accept</em>, and it is the provision with
        teeth. It applies specifically to <strong>statutory form</strong> powers of attorney
        executed under Probate Code &sect; 4401. Section 4406 provides that a third party
        presented with a properly executed statutory form POA may be <strong>compelled by court
        order</strong> to honor the agent&rsquo;s authority, and &mdash; critically &mdash; the
        court <em>shall</em> award attorney&rsquo;s fees to the agent if it finds that the third
        party acted unreasonably in refusing to accept. The statute treats refusals as
        unreasonable when they are based solely on the form of the POA, with limited exceptions
        where state or federal law authorizes the refusal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a <em>custom (non-statutory) durable</em> POA, the &sect; 4406 compulsion mechanism
        does not apply by its terms. The duty-to-accept analysis there rests on general agency
        principles and the &sect; 4303 safe harbor &mdash; meaning the practical leverage is
        weaker. If the POA was drafted by the principal&rsquo;s attorney rather than using the
        statutory form, agents have fewer enforcement tools, and the carrier&rsquo;s incentive to
        accept rests primarily on the &sect; 4303 safe harbor encouraging cooperation.
      </p>

      <CalloutBox variant="legal" title="Check Whether You Have a Statutory Form POA">
        <p>
          If your power of attorney was drafted using the California statutory form (Probate Code
          &sect; 4401), &sect; 4406 gives you the right to petition the court to compel acceptance
          and obtain attorney&rsquo;s fees against an unreasonably-refusing third party. If you
          have a custom-drafted durable POA, the &sect; 4303 safe harbor still encourages
          acceptance, but the &sect; 4406 attorney&rsquo;s-fees remedy may not be available by
          its terms. Either way, when an insurer refuses to deal with your POA agent, document
          the refusal in writing and consult counsel &mdash; the right enforcement tool depends
          on which kind of POA the principal executed.
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
        Also, the Restatement (Third) of Agency &sect; 3.02 provides that an agent has
        authority to take actions that are &ldquo;incidental to&rdquo; or &ldquo;reasonably
        necessary&rdquo; to accomplish the authorized objective. If the agent is authorized to
        manage and settle insurance claims, signing the proof of loss is incidental to that
        authority &mdash; the claim cannot proceed without it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have consistently held that &ldquo;substantial compliance&rdquo; with
        proof of loss requirements is sufficient, and that the purpose of the proof of loss
        &mdash; to provide the insurer with adequate notice and information &mdash; must be
        viewed practically, not as a technical trap. A proof of loss signed by a duly authorized
        agent on behalf of the principal satisfies this standard.
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
        The Restatement (Third) of Agency &sect; 2.02 establishes that an agent&rsquo;s actual
        authority includes not only what the principal explicitly grants but also what the agent
        reasonably believes is necessary or incidental to carrying out the principal&rsquo;s
        instructions. When a durable POA grants authority to manage real property and insurance
        matters, filing proofs of loss, negotiating with adjusters, and making settlement
        decisions are all incidental to that grant. An insurer that refuses to deal with a
        properly authorized agent is not enforcing a legitimate policy condition &mdash; it is
        obstructing the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s statutory POA framework, codified in the Uniform Durable Power of
        Attorney Act (Probate Code &sect;&sect; 4000&ndash;4545), is designed to be construed
        broadly in favor of the agent&rsquo;s authority. The legislative purpose is to allow
        individuals to plan for incapacity by designating a trusted agent. Courts that
        interpret the agent&rsquo;s authority narrowly undermine this purpose. When the POA
        grants general authority over real property and insurance transactions under Probate
        Code &sect;&sect; 4264 and 4265, the agent has statutory authority to do everything the
        principal could do &mdash; including filing claims, signing documents, and invoking
        contractual remedies.
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
        If There Is No POA: The Conservatorship Path
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything above assumes the policyholder executed a durable POA while they still had
        capacity. If they did not &mdash; and this is far more common than people realize
        &mdash; the family is left in a legal gap. The policyholder cannot act, and no one
        else has been authorized to act on their behalf. The solution, in most cases, is a
        <strong> conservatorship</strong>: a court-supervised arrangement in which a judge
        appoints a responsible person (the &ldquo;conservator&rdquo;) to manage the
        incapacitated person&rsquo;s (the &ldquo;conservatee&rsquo;s&rdquo;) financial affairs,
        personal care, or both. In the insurance context, the conservator becomes the person
        who files the claim, provides documentation, negotiates with the adjuster, and &mdash;
        with appropriate court approval &mdash; settles.
      </p>

      <CalloutBox variant="important" title="The Claim Does Not Wait for the Court">
        <p>
          Insurance deadlines, mitigation obligations, and statute of limitations periods do
          not pause just because the policyholder is incapacitated and no conservator has been
          appointed yet. One of the most common and costly mistakes families make is assuming
          that &ldquo;the insurance company will understand&rdquo; and waiting to take action
          until the conservatorship is finalized. They will not understand &mdash; they will
          use the delay against the policyholder. Protective measures must begin immediately,
          even before the conservatorship petition is filed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Conservatorship Becomes Necessary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A conservatorship is needed when all three of the following conditions exist:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The policyholder lacks the mental capacity to manage their own financial and legal
          affairs &mdash; they cannot understand the nature of their insurance claim, cannot
          provide informed consent to a settlement, and cannot direct their own
          representatives.
        </li>
        <li>
          No valid, pre-existing durable power of attorney exists that grants someone the
          authority to manage insurance and financial matters on the policyholder&rsquo;s
          behalf.
        </li>
        <li>
          There is no other legal mechanism &mdash; such as a fully funded revocable living
          trust with an active successor trustee &mdash; that already grants someone the
          necessary authority.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The scenarios that give rise to this situation include an elderly policyholder with
        advancing dementia or Alzheimer&rsquo;s disease who never executed estate planning
        documents; a policyholder who suffered a stroke or traumatic brain injury and is now
        in a long-term care facility; a policyholder in a medically induced coma after an
        accident; a younger adult with a severe mental health crisis; or an adult with a
        developmental disability who cannot independently manage financial and legal matters.
        In each case, the policyholder may have a valid insurance claim, but no one has the
        legal authority to prosecute it. The family member who is physically present, dealing
        with contractors and fielding the adjuster&rsquo;s calls, may have no legal standing
        whatsoever. And the insurer knows it.
      </p>

      <CalloutBox variant="warning" title="A Common Trap: Signing Documents Without Authority">
        <p>
          Family members who do not have legal authority sometimes sign claim forms, proofs of
          loss, or settlement releases on behalf of the incapacitated policyholder. This
          creates serious problems. The insurer may later argue that the settlement is void
          because the person who signed had no authority, or &mdash; worse &mdash; the insurer
          may accept the signature when it benefits them (such as on a lowball settlement
          release) and then argue it was unauthorized when the policyholder&rsquo;s
          representative tries to reopen the claim. Never sign insurance documents on behalf
          of an incapacitated person unless you have proper legal authority to do so.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Conservatorship in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides several types of conservatorship, each designed for different
        circumstances. Understanding which type applies is essential because the
        conservator&rsquo;s authority &mdash; including authority over insurance claims
        &mdash; depends on the type of conservatorship and the specific powers granted by the
        court.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Conservatorship (Probate Code &sect; 1800 et seq.)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common type and the one most relevant to insurance claims. A probate
        conservatorship is established when an adult cannot properly provide for their
        personal needs (food, clothing, shelter, health care) or cannot manage their own
        financial affairs. The petition is filed in the Superior Court under California
        Probate Code &sect; 1800 et seq. A probate conservatorship can be:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Conservatorship of the Person:</strong> Grants authority over the
          conservatee&rsquo;s personal care &mdash; where they live, what medical treatment
          they receive, their daily care. This type alone does <strong>not</strong> grant
          authority to manage insurance claims.
        </li>
        <li>
          <strong>Conservatorship of the Estate:</strong> Grants authority over the
          conservatee&rsquo;s financial and property matters &mdash; including managing real
          property, paying bills, collecting debts owed to the conservatee, and{' '}
          <strong>managing insurance claims</strong>. This is the type that gives authority
          over insurance matters.
        </li>
        <li>
          <strong>Conservatorship of Both Person and Estate:</strong> Grants the conservator
          authority over both personal care and financial matters. This is the most common
          appointment when the conservatee is significantly incapacitated.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Estate Conservator Has Claim Authority">
        <p>
          For insurance claim purposes, the critical appointment is the{' '}
          <strong>conservator of the estate</strong>. Under Probate Code &sect; 2401, the
          conservator of the estate has management and control of the conservatee&rsquo;s
          estate and must, in managing and controlling it, use ordinary care and diligence.
          This authority includes filing insurance claims, providing documentation, negotiating
          claim amounts, and &mdash; with court approval where required &mdash; settling
          claims and receiving payment. A conservator of the person only, without estate
          authority, does not have the legal standing to manage insurance claims.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        LPS Conservatorship (Lanterman-Petris-Short Act)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An LPS conservatorship is established under Welfare and Institutions Code &sect; 5350
        et seq. for individuals who are &ldquo;gravely disabled&rdquo; as a result of a mental
        health disorder. LPS conservatorships are initiated by the county public guardian or a
        treatment facility, not by family members. They are primarily concerned with
        involuntary mental health treatment, not financial management. An LPS conservatorship,
        by itself, generally does not grant authority over the conservatee&rsquo;s financial
        affairs or insurance claims. If a person under an LPS conservatorship also needs
        someone to manage their financial matters, a separate probate conservatorship of the
        estate must be established.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Limited Conservatorship for Developmental Disabilities
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A limited conservatorship (Probate Code &sect; 1801(d)) is designed for adults with
        developmental disabilities &mdash; intellectual disability, cerebral palsy, epilepsy,
        autism, and certain related conditions as defined by Welfare and Institutions Code
        &sect; 4512. Unlike a general conservatorship, a limited conservatorship removes only
        those specific rights that the conservatee cannot exercise, preserving as much
        autonomy as possible. Whether a limited conservator has authority over insurance
        claims depends entirely on the specific powers granted in the court order. The
        <strong> Letters of Conservatorship</strong> issued by the court will specify exactly
        which powers have been granted.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Court Petition Process: Probate Code &sect; 1800 et seq.
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Establishing a probate conservatorship is a formal legal proceeding that requires
        filing a petition with the Superior Court, providing notice to specified parties, and
        appearing at a hearing. The process is governed by California Probate Code
        &sect;&sect; 1800 through 1898.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Filing the Petition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Any interested person &mdash; typically a spouse, adult child, sibling, or other
        family member &mdash; may file a petition for conservatorship under Probate Code
        &sect; 1820. The petition must include the proposed conservatee&rsquo;s name, age,
        address, and a description of their incapacity; the name and relationship of the
        proposed conservator; whether conservatorship of the person, the estate, or both is
        requested; a description of the conservatee&rsquo;s assets, including real property
        and insurance policies; the names and addresses of the conservatee&rsquo;s nearest
        relatives (Probate Code &sect; 1821); and a capacity declaration from a licensed
        physician or psychologist (Probate Code &sect; 1823), or a declaration explaining why
        one cannot yet be obtained.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Notice and Investigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the petition is filed, the proposed conservatee must be personally served with a
        citation and a copy of the petition at least 15 days before the hearing (Probate Code
        &sect; 1824). Notice must also be mailed to the proposed conservatee&rsquo;s spouse or
        domestic partner, relatives within the second degree, and any person who has requested
        special notice. The court will appoint a <strong>court investigator</strong> to
        interview the proposed conservatee, explain the nature of the proceeding, determine
        whether the proposed conservatee objects, and evaluate the need for a conservatorship
        (Probate Code &sect; 1826). The investigator files a report with the court before the
        hearing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: The Hearing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the hearing, the court determines whether the proposed conservatee lacks capacity
        and whether a conservatorship is the least restrictive alternative available. The
        proposed conservatee has the right to be present, to be represented by an attorney
        (the court will appoint one if necessary under Probate Code &sect; 1471), and to
        object. If the court grants the petition, it issues <strong>Letters of
        Conservatorship</strong> &mdash; the official document that proves the
        conservator&rsquo;s authority. These Letters are what the conservator will present to
        the insurance company, banks, and other institutions to establish their right to act
        on the conservatee&rsquo;s behalf.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Bond and Inventory
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before Letters of Conservatorship are issued, the court typically requires the
        conservator to post a <strong>surety bond</strong> (Probate Code &sect; 2320). The
        bond protects the conservatee&rsquo;s assets by ensuring that a bonding company will
        cover any losses caused by the conservator&rsquo;s mismanagement or malfeasance.
        Within 90 days of appointment, the conservator must also file an inventory and
        appraisal of the conservatee&rsquo;s estate (Probate Code &sect; 2610).
      </p>

      <CalloutBox variant="info" title="Timeline: How Long Does It Take?">
        <p>
          From filing the petition to obtaining Letters of Conservatorship, the standard
          process typically takes <strong>six to eight weeks</strong> in California. This
          timeline assumes no objections are filed and the court&rsquo;s calendar is not
          significantly backed up. In busy jurisdictions (Los Angeles, for example), the
          timeline can stretch to 10&ndash;12 weeks. If a family member or the proposed
          conservatee objects, contested proceedings can take several months or longer. During
          this entire period, the insurance claim remains unresolved &mdash; and the
          insurer&rsquo;s deadlines continue to run.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Conservator&rsquo;s Authority to Manage Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a conservator of the estate is appointed and Letters of Conservatorship are
        issued, the conservator steps into the conservatee&rsquo;s shoes for purposes of
        managing their financial and property affairs. Under Probate Code &sect; 2401, the
        conservator of the estate has management and control of the conservatee&rsquo;s
        estate, subject to a duty of ordinary care and diligence. This authority specifically
        includes:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Filing insurance claims</strong> on the conservatee&rsquo;s behalf for
          damage to the conservatee&rsquo;s property
        </li>
        <li>
          <strong>Providing sworn proof of loss</strong> and other documentation required by
          the insurance policy
        </li>
        <li>
          <strong>Granting access for inspections</strong> &mdash; permitting the
          insurer&rsquo;s adjusters, engineers, and other experts to inspect the
          conservatee&rsquo;s property
        </li>
        <li>
          <strong>Hiring professionals</strong> &mdash; retaining Public Adjusters, attorneys,
          contractors, engineers, and other experts to assist with the claim
        </li>
        <li>
          <strong>Negotiating with the insurer</strong> over coverage, scope of loss, and
          valuation
        </li>
        <li>
          <strong>Receiving insurance proceeds</strong> &mdash; collecting checks and
          directing payments into the conservatorship estate account
        </li>
        <li>
          <strong>Directing emergency repairs</strong> to mitigate further damage to the
          insured property
        </li>
        <li>
          <strong>Settling the claim</strong> &mdash; with court approval where required (see
          below)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When dealing with the insurance company, the conservator should present a
        <strong> certified copy</strong> of the Letters (not a photocopy) along with a
        certified copy of the court order granting conservatorship.
      </p>

      <CalloutBox variant="tip" title="Get Multiple Certified Copies">
        <p>
          When Letters of Conservatorship are issued, request at least five or six certified
          copies from the court clerk. You will need to provide certified copies to the
          insurance company, the mortgagee (if there is a mortgage), banks, utility companies,
          and potentially contractors. Each institution typically requires its own original
          certified copy. The cost is nominal (usually $25&ndash;$30 per certified copy), and
          having them on hand avoids delays later.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Court Approval Requirements for Settlements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most significant differences between managing a claim as a conservator
        versus managing it under a POA is the requirement for <strong>court approval of
        settlements</strong>. A conservator does not have unlimited authority to settle claims
        on behalf of the conservatee. Under Probate Code &sect; 2505, a conservator must
        obtain court approval before compromising or settling any claim belonging to the
        conservatee&rsquo;s estate. This includes insurance claims. The conservator files a
        petition for approval of the compromise, and the court evaluates whether the proposed
        settlement is reasonable and in the conservatee&rsquo;s best interest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The requirement applies to: any settlement of a disputed insurance claim where the
        insurer is paying less than the full amount demanded; any release or waiver of claims
        against the insurer; and any settlement that includes a release of future claims or a
        waiver of additional policy benefits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Court approval is generally <em>not</em> required for receiving insurance proceeds
        that are not the product of a compromise (advance payments, partial payments on
        undisputed portions, payments that reflect the full amount owed for a particular
        coverage category); for routine claim management (filing the claim, providing
        documentation, granting access for inspections, negotiating); or for emergency repairs
        to preserve and protect the property.
      </p>

      <CalloutBox variant="important" title="This Protects the Policyholder">
        <p>
          The court approval requirement is not an obstacle &mdash; it is a safeguard. It
          prevents a conservator from accepting a lowball settlement that does not fully
          compensate the policyholder. In practice, the court&rsquo;s involvement can
          actually strengthen the policyholder&rsquo;s bargaining position: the conservator
          can truthfully tell the insurer, &ldquo;I cannot accept this offer &mdash; I have a
          fiduciary duty to the conservatee, and the court will not approve a settlement that
          is not in the conservatee&rsquo;s best interest.&rdquo;
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Surety Bond Requirements and Insurance Proceeds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a conservator of the estate is appointed, the court requires the conservator to
        post a <strong>surety bond</strong> in an amount determined by the court (Probate Code
        &sect; 2320). The bond is designed to protect the conservatee&rsquo;s assets. If the
        conservator mismanages or misappropriates the conservatee&rsquo;s assets, the bonding
        company pays for the loss, up to the amount of the bond.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The bond amount is typically set at the total value of the conservatee&rsquo;s
        personal property (including anticipated income for one year) plus the value of any
        real property that the conservator has the power to sell, convey, or encumber. When
        large insurance proceeds are received into the conservatorship estate, the total
        assets under the conservator&rsquo;s control increase &mdash; and the bond may need
        to be <strong>increased</strong> to reflect the new, higher value. The conservator
        has an affirmative duty to petition the court to increase the bond, and the court
        may increase it on its own motion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The conservator does not pay the full bond amount out of pocket. Instead, the
        conservator pays an <strong>annual premium</strong> to a surety company, typically
        ranging from 0.5% to 1.5% of the bond amount. This premium is paid from the
        conservatorship estate. In some cases, the court may waive or reduce the bond
        requirement if the conservator deposits the conservatee&rsquo;s funds into a
        <strong> blocked account</strong> &mdash; a bank account that cannot be accessed
        without a court order (Probate Code &sect; 2328). This is a practical alternative
        when the conservatorship estate consists primarily of liquid assets, such as
        insurance proceeds.
      </p>

      <CalloutBox variant="tip" title="Blocked Accounts Can Reduce Bond Costs">
        <p>
          If a large insurance settlement is expected, discuss the possibility of a blocked
          account with the conservatorship attorney before the funds arrive. Having the court
          order a blocked account in advance can avoid the need to increase the bond and save
          the estate significant premium costs over the life of the conservatorship. The
          trade-off is that accessing funds in a blocked account requires a court order,
          which takes time &mdash; so it is important to keep sufficient unblocked funds
          available for ongoing expenses, including repairs to the insured property.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Duty to Deal with a Properly Appointed Conservator
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a conservator of the estate has been appointed and presents valid Letters of
        Conservatorship, the insurer has a legal obligation to recognize and deal with the
        conservator as the authorized representative of the policyholder. The conservator
        <strong> is</strong> the policyholder for purposes of the claim. The insurer cannot
        refuse to communicate with the conservator, refuse to provide claim documents, insist
        on dealing directly with the incapacitated conservatee, deny the claim solely on the
        basis that the &ldquo;insured&rdquo; is not the person presenting the claim, or
        impose additional requirements or delays on the claim because a conservator is
        involved rather than the policyholder directly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the California Fair Claims Settlement Practices Regulations (10 CCR &sect;
        2695.1 et seq.), an insurer must deal fairly and in good faith with any claimant,
        which includes a conservator acting on behalf of the policyholder. If the insurer
        delays or denies the claim because a conservator is managing it rather than the
        policyholder personally, this may constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>{' '}
        and a violation of the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>. Where the policyholder is an{' '}
        <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
          elder or dependent adult
        </Link>, such conduct may also give rise to claims under the Elder Abuse Act.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Temporary Conservatorship: Emergencies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because the standard conservatorship process takes six to twelve weeks &mdash; and
        sometimes longer &mdash; California law provides a mechanism for emergency situations:
        the <strong>temporary conservatorship</strong> (Probate Code &sect; 2250). A temporary
        conservatorship can be granted on an expedited basis, typically within days of filing,
        when the court finds that the proposed conservatee&rsquo;s person or estate will
        suffer immediate and irreparable harm without the appointment of a temporary
        conservator.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the insurance claim context, a temporary conservatorship may be appropriate when
        the insured property has been damaged and emergency repairs are needed; the
        insurer&rsquo;s proof-of-loss deadline or other policy deadline is approaching; the
        insurer is making a time-limited settlement offer that will expire before a permanent
        conservatorship can be established; the property is at risk of further damage; or
        the insurer is threatening to close the claim file due to lack of communication.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The petition for temporary conservatorship is typically filed at the same time as
        the petition for permanent conservatorship. The court can hear the temporary petition
        on shortened notice (as little as five days under Probate Code &sect; 2250(e)) and can
        grant temporary Letters of Conservatorship that give the temporary conservator
        authority to act immediately. However, the temporary conservator&rsquo;s powers are
        more limited than those of a permanent conservator; they are typically restricted to
        what is necessary to address the emergency. A temporary conservatorship expires when
        the permanent conservatorship is established or when the court orders it terminated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting the Claim While the Court Process Is Pending
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between when the policyholder becomes incapacitated and when the conservator
        is officially appointed is the most dangerous period for the insurance claim. The
        damage has occurred. The insurer&rsquo;s clock is running. And no one yet has formal
        legal authority. Here is what families and their counsel should know about protecting
        the claim during this window.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Notify the Insurer Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even without a conservator in place, someone should notify the insurance company in
        writing that a loss has occurred. This is not the same as filing a formal claim
        &mdash; it is putting the insurer on notice. The notification should state the
        policyholder&rsquo;s name and policy number; the date and nature of the loss; that
        the policyholder is incapacitated and unable to manage the claim personally; that a
        conservatorship proceeding is being initiated and the family member anticipates being
        appointed conservator; and a request that the insurer preserve its right to accept the
        claim and not take any adverse action pending the appointment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mitigate the Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance policy requires the policyholder to take reasonable steps to prevent
        further damage to the property after a loss. This obligation does not pause because
        the policyholder is incapacitated. Family members who take emergency actions to
        protect the property &mdash; boarding up broken windows, tarping the roof, stopping a
        water leak &mdash; are doing what any reasonable person would do. They should
        document everything: take photographs before and after, keep receipts, and get written
        descriptions of the emergency work performed. These costs are generally recoverable
        under the policy&rsquo;s emergency repair or mitigation provisions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Document the Damage Thoroughly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photographs, video, and written descriptions of the damage should be created as soon
        as possible after the loss, regardless of whether a conservator has been appointed.
        Evidence degrades over time. Repairs may obscure the original damage. The person
        documenting the damage does not need to be the conservator.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Consult an Attorney Early
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The family should consult both a conservatorship attorney (probate/estate planning
        law) and, separately, an attorney experienced in{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          insurance bad faith
        </Link>{' '}
        litigation or a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          Public Adjuster
        </Link>{' '}
        as early as possible. The conservatorship attorney handles the court proceeding. The
        insurance professional advises on how to protect the claim and positions the
        conservator to maximize the recovery once authority is established.
      </p>

      <CalloutBox variant="tip" title="Consider Equitable Tolling">
        <p>
          If the policyholder becomes incapacitated and no one has authority to act, certain
          deadlines &mdash; including the statute of limitations &mdash; may be subject to{' '}
          <Link href="/resources/equitable-tolling" className="text-[#2E74B5] hover:underline">
            equitable tolling
          </Link>. California courts have recognized that when a party is prevented from
          taking legal action by circumstances beyond their control, including legal
          incapacity, the running of the limitations period may be suspended. This is not
          automatic &mdash; it requires the party to demonstrate diligence in pursuing their
          rights once the disability was removed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conservatorship and Cognitive Decline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many conservatorship cases in the insurance context involve elderly policyholders
        with{' '}
        <Link href="/resources/cognitive-decline-insurance" className="text-[#2E74B5] hover:underline">
          progressive cognitive decline
        </Link>{' '}
        &mdash; dementia, Alzheimer&rsquo;s disease, or other conditions that gradually erode
        the policyholder&rsquo;s ability to manage their affairs. These cases present unique
        challenges:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The loss may have been caused or worsened by the cognitive decline
          itself</strong> &mdash; a policyholder with dementia may have forgotten to turn off
          the stove, left a faucet running, or failed to maintain the property.
        </li>
        <li>
          <strong>The insurer may argue the policyholder failed to mitigate</strong> &mdash;
          claiming that the policyholder should have taken steps to prevent further damage
          after the initial loss. This argument is particularly offensive when directed at
          someone who lacks the cognitive capacity to understand the loss has occurred.
        </li>
        <li>
          <strong>The policyholder may have signed documents they did not
          understand</strong> &mdash; if the insurer obtained a recorded statement, a proof of
          loss, or a settlement release from a policyholder whose cognitive capacity was
          impaired, the validity of those documents is subject to challenge.
        </li>
        <li>
          <strong>The timeline of incapacity becomes critical</strong> &mdash; the
          conservator and the insurer may disagree about when the policyholder lost capacity,
          which affects whether prior claim activity (including any prior settlements or
          releases) is valid.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Recorded Statements from Impaired Policyholders">
        <p>
          If the insurer obtained a{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">
            recorded statement
          </Link>{' '}
          from the policyholder before the conservatorship was established, the conservator
          should immediately obtain a copy and have it reviewed. If the policyholder lacked
          capacity at the time the statement was taken, the statement may be unreliable, and
          any admissions or inconsistencies should not be held against the conservatee. In
          some cases, the insurer&rsquo;s conduct in taking a statement from an impaired
          person may itself be evidence of bad faith.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Conservatee Dies During the Conservatorship
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the conservatee dies while the conservatorship is active and the insurance claim
        is still pending, the conservatorship terminates by operation of law (Probate Code
        &sect; 1860). The conservator&rsquo;s authority ends, and the claim transfers to the
        probate estate. The executor or administrator of the decedent&rsquo;s estate then
        takes over management of the insurance claim. The former conservator should notify
        the insurer of the conservatee&rsquo;s death and inform them that authority will be
        transitioning. A probate proceeding must be initiated (if not already in progress) to
        appoint an executor or administrator, and the new estate representative should present
        their Letters Testamentary or Letters of Administration to the insurer as soon as
        they are issued. Any pending court approval for settlement in the conservatorship
        case will need to be refiled in the probate proceeding. For more, see{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to insurance when the policyholder dies
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conservatorship Special Considerations for Attorneys
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorneys involved in conservatorship cases that include insurance claims should be
        aware of several issues at the intersection of probate law and insurance law:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Conflict of Interest Screening:</strong> The conservator has a fiduciary
          duty to act in the conservatee&rsquo;s best interest. If the conservator is also a
          beneficiary of the conservatee&rsquo;s estate (for example, an adult child who
          stands to inherit the insured property), there is an inherent tension between the
          conservator&rsquo;s duty to the conservatee and their personal financial interest.
          The court is aware of this tension, and it is one reason why court approval is
          required for settlements.
        </li>
        <li>
          <strong>Fee Arrangements and Court Oversight:</strong> Attorney fees in a
          conservatorship case are subject to court approval (Probate Code &sect; 2640 et
          seq.). Public adjuster fees are an expense of the conservatorship estate and should
          be disclosed to the court. If the insurance claim is large and the professional
          fees are significant, the conservator should include fee arrangements in the
          petition for approval of the settlement so that the court can evaluate the net
          recovery to the conservatee&rsquo;s estate.
        </li>
        <li>
          <strong>Coordination Between Probate Counsel and Insurance Counsel:</strong> In
          complex cases, the conservatorship attorney and the insurance attorney (or bad
          faith litigation attorney) may be different people. The probate attorney ensures
          the conservator has proper legal authority and that all court requirements are met.
          The insurance attorney or Public Adjuster handles the substance of the claim. When
          settlements are reached, both need to coordinate on the petition for court approval.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conservatorship and Insurance Claim Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For families and attorneys navigating a conservatorship that involves an insurance
        claim:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Secure the property and mitigate further damage immediately</strong> &mdash;
          do not wait for the conservatorship to be established.
        </li>
        <li>
          <strong>Document all damage</strong> with photographs, video, and written
          descriptions as soon as possible after the loss.
        </li>
        <li>
          <strong>Notify the insurer in writing</strong> that a loss has occurred and that
          the policyholder is incapacitated.
        </li>
        <li>
          <strong>Check for existing estate planning documents</strong> &mdash; durable power
          of attorney, trust, or other instruments that might provide authority without a
          conservatorship.
        </li>
        <li>
          <strong>Consult a conservatorship attorney</strong> and begin the petition process
          immediately.
        </li>
        <li>
          <strong>File for temporary conservatorship</strong> if there is an emergency
          &mdash; property at risk, approaching deadlines, or the insurer threatening adverse
          action.
        </li>
        <li>
          <strong>Consult an insurance professional</strong> &mdash; a Public Adjuster or
          insurance attorney &mdash; to begin building the claim file in parallel with the
          conservatorship proceeding.
        </li>
        <li>
          <strong>Once Letters of Conservatorship are issued,</strong> provide certified
          copies to the insurer and formally file or take over the claim.
        </li>
        <li>
          <strong>Post the required surety bond</strong> and file the inventory and appraisal
          within 90 days.
        </li>
        <li>
          <strong>Manage the claim</strong> &mdash; file documentation, negotiate with the
          insurer, authorize repairs, and collect payments.
        </li>
        <li>
          <strong>Before settling any disputed claim,</strong> petition the court for
          approval of the compromise under Probate Code &sect; 2505.
        </li>
        <li>
          <strong>If the bond needs to be increased</strong> after receiving insurance
          proceeds, petition the court or arrange for a blocked account.
        </li>
        <li>
          <strong>File annual accountings</strong> with the court showing how insurance
          proceeds and all other estate funds have been managed (Probate Code &sect; 2620).
        </li>
      </ol>

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
        family is left with the expensive, time-consuming conservatorship process as their
        only option. If you have an elderly parent or family member who owns property, the
        conversation about a durable power of attorney should happen today &mdash; not after
        the diagnosis, not after the fall, not after the fire. Today.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And if the window has already closed &mdash; if no POA was executed and capacity is
        already gone &mdash; the conservatorship path is still available. It is more
        expensive, slower, and more invasive than a POA would have been, but it works. The
        family has options. Begin protective measures immediately, file the
        conservatorship petition (with a temporary petition if there is an emergency), and
        position the conservator to manage the claim once Letters of Conservatorship issue.
        The court&rsquo;s involvement is not an obstacle &mdash; it is a check that protects
        the incapacitated person from being railroaded into a bad settlement.
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
