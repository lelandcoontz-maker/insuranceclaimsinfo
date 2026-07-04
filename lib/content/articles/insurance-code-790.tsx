import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Insurance Code 790.03 and the 790 Letter",
  description:
    "California Insurance Code 790.03 defines unfair claims practices. What the statute prohibits, when a 790 letter fits, and how it links to common-law bad faith.",
  summary:
    'California Insurance Code 790.03 lists unfair claims settlement practices. A 790 letter, typically drafted by counsel, formally puts an insurer on notice of conduct that may violate the statute. Because of Moradi-Shalal, no private right of action exists under §790.03 itself, but the same conduct may evidence common-law bad faith.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company misrepresents the policy, ignores communications, refuses to
        investigate, or offers a settlement that bears no relationship to the actual loss, that
        conduct may overlap with California&rsquo;s statutory definition of unfair claims
        settlement practices. Insurance Code Section 790.03 sets out that definition. A
        &ldquo;790 letter&rdquo; &mdash; a formal written notice citing specific statutory
        subsections &mdash; is one tool that counsel use to put an insurer on notice that
        specific conduct is being documented against the statutory standards.
      </p>

      <CalloutBox variant="legal" title="What This Article Is, and What It Is Not">
        <p>
          This article explains the framework around California Insurance Code &sect; 790.03 and
          describes how 790 letters are commonly used by counsel and adjusters as a notice and
          documentation tool. It is <strong>not</strong> legal advice. California&rsquo;s Public
          Insurance Adjusters Act (Cal. Ins. Code &sect;&sect; 15000&ndash;15062) regulates
          Public Adjusters as a specialized claims-handling profession and does not authorize
          the practice of law. A public
          adjuster&rsquo;s role in the 790 process centers on developing and documenting the
          factual record &mdash; the missed responses, the inadequate investigation, the
          cherry-picked estimate. The construction of formal legal arguments and the conduct of
          litigation are the work of a California-licensed attorney. (An insured handling their
          own claim, of course, can reference the statute and regulations directly in their own
          correspondence.)
        </p>
      </CalloutBox>

      {/* ====== SECTION I ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Insurance Code 790.03?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 790.03 is part of the Unfair Insurance Practices Act
        (UIPA). The statute defines specific acts that constitute unfair or deceptive practices in the
        business of insurance. Section 790.03(h) is the subsection that matters most to policyholders:
        it specifically identifies and prohibits unfair claims settlement practices.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theory or an argument — it is California statutory law that every insurer doing
        business in this state is required to follow. The California Department of Insurance (CDI)
        enforces these provisions, and violations can result in administrative penalties, license
        actions, and orders to change business practices.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 790.03 works in tandem with the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR 2695), which implement and provide detailed procedural requirements for the standards
        set out in 790.03. Where 790.03 establishes the broad statutory prohibitions, the regulations
        provide specific timelines, documentation requirements, and claims handling procedures that
        insurers must follow. Together, these provisions define the minimum standard of conduct
        California expects from every insurance company.
      </p>

      {/* ====== SECTION II ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Prohibited Practices Under 790.03(h)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 790.03(h) lists sixteen specific practices that, when committed by an insurer,
        constitute unfair claims settlement practices &mdash; but only when the acts are committed{' '}
        <strong>&ldquo;knowingly&rdquo;</strong> or{' '}
        <strong>&ldquo;with such frequency as to indicate a general business
        practice.&rdquo;</strong> A single mishandled claim is generally not, by itself, a
        statutory UIPA violation; the threshold targets knowing conduct or patterns reflecting
        company-wide practice. Below is the verbatim list of the sixteen prohibited practices
        from the current statute:
      </p>

      <CalloutBox variant="legal" title="Cal. Ins. Code § 790.03(h) — Sixteen Prohibited Practices (verbatim)">
        <p className="italic">
          Knowingly committing or performing with such frequency as to indicate a general
          business practice any of the following unfair claims settlement practices:
        </p>
        <ol className="list-decimal pl-6 mt-2 space-y-2 italic">
          <li>Misrepresenting to claimants pertinent facts or insurance policy provisions relating to any coverages at issue.</li>
          <li>Failing to acknowledge and act reasonably promptly upon communications with respect to claims arising under insurance policies.</li>
          <li>Failing to adopt and implement reasonable standards for the prompt investigation and processing of claims arising under insurance policies.</li>
          <li>Failing to affirm or deny coverage of claims within a reasonable time after proof of loss requirements have been completed and submitted by the insured.</li>
          <li>Not attempting in good faith to effectuate prompt, fair, and equitable settlements of claims in which liability has become reasonably clear.</li>
          <li>Compelling insureds to institute litigation to recover amounts due under an insurance policy by offering substantially less than the amounts ultimately recovered in actions brought by the insureds, when the insureds have made claims for amounts reasonably similar to the amounts ultimately recovered.</li>
          <li>Attempting to settle a claim by an insured for less than the amount to which a reasonable person would have believed he or she was entitled by reference to written or printed advertising material accompanying or made part of an application.</li>
          <li>Attempting to settle claims on the basis of an application that was altered without notice to, or knowledge or consent of, the insured, his or her representative, agent, or broker.</li>
          <li>Failing, after payment of a claim, to inform insureds or beneficiaries, upon request by them, of the coverage under which payment has been made.</li>
          <li>Making known to insureds or claimants a practice of the insurer of appealing from arbitration awards in favor of insureds or claimants for the purpose of compelling them to accept settlements or compromises less than the amount awarded in arbitration.</li>
          <li>Delaying the investigation or payment of claims by requiring an insured, claimant, or the physician of either, to submit a preliminary claim report, and then requiring the subsequent submission of formal proof of loss forms, both of which submissions contain substantially the same information.</li>
          <li>Failing to settle claims promptly, where liability has become apparent, under one portion of the insurance policy coverage in order to influence settlements under other portions of the insurance policy coverage.</li>
          <li>Failing to provide promptly a reasonable explanation of the basis relied on in the insurance policy, in relation to the facts or applicable law, for the denial of a claim or for the offer of a compromise settlement.</li>
          <li>Directly advising a claimant not to obtain the services of an attorney.</li>
          <li>Misleading a claimant as to the applicable statute of limitations.</li>
          <li>Delaying the payment or provision of hospital, medical, or surgical benefits for services provided with respect to acquired immune deficiency syndrome or AIDS-related complex for more than 60 days after the insurer has received a claim for those benefits, where the delay in claim payment is for the purpose of investigating whether the condition preexisted the coverage.</li>
        </ol>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Plain English: What the Most Commonly Cited Subsections Mean in Practice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In property insurance claims, the subsections most frequently cited by plaintiff
        attorneys are (1), (2), (3), (5), (6), (11), (12), and (13). Plain-language
        explanations of each (and how they intersect with the duty-to-investigate cases like
        <em> Egan</em>):
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Subsection (1) &mdash; Misrepresenting policy provisions.</strong> Many
          plaintiff attorneys argue this covers an adjuster telling an insured something is
          not covered when it is, misquoting policy language, or mischaracterizing the facts
          of the loss to justify a denial or reduced payment.
        </li>
        <li>
          <strong>Subsection (2) &mdash; Failing to acknowledge or respond promptly.</strong>{' '}
          Read alongside 10 CCR &sect;&sect; 2695.5(b) and 2695.5(e), which set specific
          response and acknowledgment deadlines, this subsection often supports a record of
          unreasonable delay.
        </li>
        <li>
          <strong>Subsection (3) &mdash; Failing to adopt and implement reasonable
          investigation standards.</strong> This is the subsection that connects most directly
          to the duty-to-investigate framework established in{' '}
          <em>Egan v. Mutual of Omaha</em> (1979) 24 Cal.3d 809. An insurer that denies a
          claim without a thorough investigation may run afoul of this subsection (and of the
          common-law duty).
        </li>
        <li>
          <strong>Subsection (5) &mdash; Failing to attempt good-faith settlement when
          liability is reasonably clear.</strong> The big one for property claims. Note that
          the statutory threshold is &ldquo;liability has become reasonably clear&rdquo;
          &mdash; a valuation dispute is not, by itself, a (5) violation.
        </li>
        <li>
          <strong>Subsection (6) &mdash; Compelling litigation by offering substantially
          less than ultimately recovered.</strong> The statutory trigger is amounts
          &ldquo;ultimately recovered in actions&rdquo; with claim and recovery amounts
          &ldquo;reasonably similar.&rdquo; A settlement, appraisal, or supplement that
          increased the payout does not automatically satisfy the trigger.
        </li>
        <li>
          <strong>Subsection (11) &mdash; Duplicative documentation requests.</strong>{' '}
          Cycling an insured through preliminary claim reports and then formal proof-of-loss
          forms requesting the same information.
        </li>
        <li>
          <strong>Subsection (12) &mdash; Holding one coverage portion hostage to influence
          settlement of another.</strong> The classic &ldquo;we&rsquo;ll pay the agreed
          dwelling figure when you accept our contents offer&rdquo; tactic.
        </li>
        <li>
          <strong>Subsection (13) &mdash; Failing to provide a reasonable written
          explanation for denial.</strong> The denial letter must reference the policy and
          the facts &mdash; a form letter saying &ldquo;not covered&rdquo; without
          explanation generally falls short.
        </li>
      </ul>

      {/* ====== SECTION III-A: Terminology Clarification ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Adjuster Jargon: What &ldquo;790 Letter&rdquo; Usually Means &mdash; and How This Article Uses It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before going further, a terminology clarification, because the phrase{' '}
        &ldquo;790 letter&rdquo; is California adjuster jargon and gets used in more than
        one way:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>The standard adjuster usage.</strong> In California claims-handling
          practice, a &ldquo;790 letter&rdquo; is the <strong>initial acknowledgment letter
          the insurance adjuster sends to the insured at the start of a claim</strong>{' '}
          &mdash; telling the insured what coverages apply and what their rights are. The
          carrier sends it because &sect; 790.03 and the Fair Claims Settlement Practices
          Regulations (10 CCR &sect;&sect; 2695.4 and 2695.5) require the insurer to
          acknowledge the claim and disclose applicable coverages. That acknowledgment
          letter is what most adjusters mean when they say &ldquo;the 790 letter went
          out.&rdquo;
        </li>
        <li>
          <strong>What a denial letter is &mdash; and is not.</strong> A denial letter
          written to conform with the &sect; 790.03 statute (specifically the
          reasoned-denial requirement at &sect; 790.03(h)(13) and 10 CCR &sect; 2695.7(b)(1))
          is a separate, later document. Adjusters do <em>not</em> generally refer to a
          denial letter as a &ldquo;790 letter,&rdquo; even though it has to comply with
          the same statute.
        </li>
        <li>
          <strong>How this article uses the term.</strong> In plaintiff-side bad-faith
          practice, the phrase &ldquo;790 letter&rdquo; is sometimes used differently
          &mdash; to describe a <em>notice letter the insured or their counsel sends to
          the carrier</em>, citing specific subsections of &sect; 790.03(h) and documenting
          conduct that may violate the statute. That is the usage the rest of this article
          describes. It is a real practice tool, but it is plaintiff-bar shorthand, not the
          adjuster-side meaning. Where this article says &ldquo;790 letter&rdquo; below, we
          mean the insured-side notice letter, not the carrier&rsquo;s initial
          acknowledgment.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The two usages of the same term do create confusion. If you are searching for
        information about the acknowledgment letter you received from the carrier at the
        start of your claim, the right reference points are the Fair Claims Settlement
        Practices Regulations at 10 CCR &sect;&sect; 2695.4 (representation of policy
        provisions and benefits &mdash; the affirmative-disclosure duty in (a)) and
        2695.5(e) (acknowledgment timelines). The rest of this article is
        about the second usage &mdash; the insured-side notice letter citing
        &sect; 790.03(h) violations.
      </p>

      {/* ====== SECTION III ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a &ldquo;790 Letter&rdquo;?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A 790 letter is a formal written communication to the insurance company that cites specific
        violations of Insurance Code Section 790.03(h). It is not a lawsuit. It is not a threat. It
        is a notice letter that documents the insurer&apos;s conduct and puts them on formal notice
        that their handling of your claim is being tracked against the specific statutory standards
        they are required to follow.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 790 letter creates a written record of the policyholder&apos;s objections and identifies
        the specific statutory provisions the insurer has violated. It connects the insurer&apos;s
        specific conduct — the missed communications, the lowball estimate, the failure to
        investigate, the denial without explanation — to the exact subsection of 790.03(h) that
        prohibits that conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps most importantly, the 790 letter puts the insurer on notice that their conduct is
        being documented and may constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>.
        In our experience, a letter like this gets read above the adjuster&apos;s desk &mdash; by
        the supervisor, the claims manager, and sometimes the legal department. It changes the dynamic of the claim
        because it signals that the policyholder understands the law and is building a record.
      </p>

      {/* ====== SECTION IV ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the 790 Letter Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 790 letter matters for several reasons, each of which strengthens the policyholder&apos;s
        position:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It creates a contemporaneous written record.</strong> The letter documents the
          insurer&apos;s violations in real time — not months later when memories fade and details
          are disputed. This contemporaneous record is far more powerful than a policyholder&apos;s
          recollection at deposition.
        </li>
        <li>
          <strong>It demonstrates awareness of rights.</strong> An insurer treats a policyholder who
          cites specific subsections of 790.03(h) very differently from one who simply says &ldquo;I
          disagree with your estimate.&rdquo; The 790 letter signals that the policyholder knows what
          the law requires and is tracking the insurer&apos;s compliance.
        </li>
        <li>
          <strong>It establishes the foundation for a bad faith claim.</strong> Under{' '}
          <em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24 Cal.3d 809 and the broader
          California bad-faith case law, an insurer&apos;s knowledge of specific conduct
          alleged to violate &sect; 790.03(h) &mdash; and its decision to continue that conduct
          anyway &mdash; can be powerful evidence of unreasonableness. An insurer that receives
          a detailed 790 letter identifying specific violations and continues the same conduct
          has a much harder time claiming at deposition or trial that it was acting reasonably.
          <em>Jordan v. Allstate Ins. Co.</em> (2007) 148 Cal.App.4th 1062 &mdash; which held that
          a reasonable position on one coverage does not excuse an insurer&apos;s failure to
          investigate other potentially applicable coverages &mdash; illustrates why a
          documented record of the carrier&apos;s conduct matters.
        </li>
        <li>
          <strong>It escalates the claim internally.</strong> A 790 letter typically gets escalated
          to a supervisor, claims manager, or in-house counsel — people who have more authority to
          resolve the dispute than the adjuster who has been handling the file. The frontline adjuster
          may be following a script; the supervisor reading the 790 letter is evaluating exposure.
        </li>
        <li>
          <strong>Insurance companies take 790 letters seriously.</strong> In our experience they
          signal potential litigation, potential CDI complaints, and potential bad faith exposure
          &mdash; the kind of letter that gets a claim file elevated attention rather than
          routine handling.
        </li>
      </ul>

      {/* ====== SECTION V ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Well-Drafted 790 Letter Typically Contains
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Effective 790 letters tend to share several characteristics. The summary below describes what counsel typically include &mdash; not a template a non-lawyer should attempt to draft from scratch.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Specificity About the Violations</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A 790 letter drafted by counsel typically cites the exact subsection(s) of 790.03(h)
        and connects the specific facts to the statutory language. For example, counsel might
        write: &ldquo;Your conduct appears to violate Insurance Code Section 790.03(h)(5) in
        that, despite liability having become reasonably clear, you have failed to attempt in
        good faith to effectuate a prompt, fair, and equitable settlement of this claim.&rdquo;
        The point of the specificity is to create a record that ties the insurer&rsquo;s
        conduct to the exact statutory prohibition.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Factual Detail</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Describe what the insurer did or failed to do, with dates. &ldquo;On March 15, I submitted
        a supplement request with three contractor estimates documenting $47,000 in additional damage.
        As of April 28, forty-four days later, I have received no response to that submission. This
        constitutes a violation of Insurance Code Section 790.03(h)(2).&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Reference to Specific Documents</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Point to the estimate, the denial letter, the adjuster&apos;s email, the inspection report,
        the contractor&apos;s scope — whatever documents support your position. The more specific
        your references, the harder it is for the insurer to dismiss your letter.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Professional Tone</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not the place for anger or frustration. The 790 letter should read like a document
        that could be presented to a judge — because it may be. Be precise, be factual, and let the
        statute do the work. The statutory language itself is powerful enough; you do not need to
        add editorial commentary.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Clear Statement of Remedy Sought</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tell the insurer specifically what you want them to do: pay the claim, issue the supplement,
        correct the estimate, provide the documentation they are withholding, respond to your
        communications, or explain their position in writing with reference to the policy. Give
        them a reasonable deadline to respond.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Proof of Delivery Preservation</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep a copy and send the letter by certified mail with return receipt requested, or by email
        with delivery/read confirmation. If you send it by email, consider also sending a hard copy
        by certified mail. The delivery confirmation becomes part of the record.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Distribution to Multiple Recipients</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sending the letter to the adjuster alone may not be sufficient. Consider also sending it to
        the adjuster&apos;s supervisor, the claims department manager, or the insurer&apos;s home
        office. The wider the distribution within the insurer&apos;s organization, the harder it is
        for anyone to claim they were unaware of the issues.
      </p>

      <CalloutBox variant="tip" title="Practical Tips for 790 Letters">
        <ul className="list-disc pl-4 space-y-1">
          <li>Keep each letter focused on one to three specific violations — a letter citing every subsection looks scattershot</li>
          <li>Include your claim number, policy number, date of loss, and the adjuster&apos;s name in the header</li>
          <li>Attach copies (not originals) of the documents you reference</li>
          <li>If a Public Adjuster is involved, the PA typically develops the factual record &mdash; documenting missed deadlines, inadequate investigations, communications history &mdash; that supports the statutory analysis; when the matter rises to formal statutory accusation, an attorney typically handles the letter drafting and signs the letter</li>
          <li>A 790 letter can also be sent in conjunction with a{' '}
            <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] hover:underline">CDI complaint</Link>{' '}
            — the complaint addresses the regulatory violation while the 790 letter addresses the statutory violation</li>
        </ul>
      </CalloutBox>

      {/* ====== SECTION VI ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common 790.03(h) Violations in Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are the most common violations seen in real-world property insurance claims, with
        examples of how they play out:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lowball Estimates That Ignore Documented Damage — Subsection (5)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&apos;s adjuster writes a scope for $35,000. Your contractor&apos;s estimate is
        $95,000. The insurer ignores your contractor&apos;s documentation, refuses to discuss the
        discrepancy, and issues payment based solely on their own estimate. When liability is
        reasonably clear and the insurer refuses to attempt a fair settlement, that is exactly
        the conduct subsection (5) prohibits.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Holding One Coverage Portion Hostage — Subsection (12)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your dwelling claim has $80,000 in damage that both sides agree to, plus $40,000 in
        disputed items. The insurer refuses to pay the $80,000 until you agree to accept their
        position on the disputed $40,000. This is one of the most aggressive — and most common —
        tactics in claims handling. The statute explicitly prohibits it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Requiring Duplicative Documentation — Subsection (11)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You submit a contents inventory. The insurer acknowledges receipt. Three weeks later, a new
        adjuster is assigned and asks you to resubmit the same inventory on a different form. Then
        a third request comes for &ldquo;additional documentation&rdquo; that you already provided.
        This cycle of redundant requests wears claimants down &mdash; and it is the kind of
        duplicative-documentation conduct subsection (11) targets.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Denying Claims Without Adequate Investigation — Subsection (3) (and duty-to-investigate case law)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer denies your claim based on a desk review, satellite imagery, or a phone call —
        without ever sending an adjuster to inspect the property. Or they send an adjuster who
        spends 20 minutes at a property with $200,000 in damage. The{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] hover:underline">
          duty to investigate
        </Link>{' '}
        is not optional, and a denial based on an inadequate investigation may violate subsection (3) and the duty-to-investigate framework in Egan and progeny.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Misrepresenting Policy Provisions — Subsection (1)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster tells you that your policy does not cover &ldquo;cosmetic damage&rdquo;
        when the policy contains no such exclusion. Or they claim your deductible is higher than it
        actually is. Or they tell you that{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
          overhead and profit
        </Link>{' '}
        is &ldquo;not owed&rdquo; when it clearly is. Misrepresenting what the policy
        says or means is precisely what subsection (1) prohibits &mdash; and done knowingly, or
        as a matter of practice, it is a statutory violation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Failing to Respond to Communications — Subsection (2)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You send three emails over six weeks. None are answered. You leave voicemails. No callback.
        You send a certified letter. Nothing. The statute requires the insurer to acknowledge and act
        reasonably promptly upon communications — not ignore them until the policyholder gives up.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Not Providing a Reasonable Written Explanation for Denial — Subsection (13)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer denies your claim or offers a reduced amount but provides no written explanation
        of why. Or the denial letter is so vague that it does not actually explain the basis for the
        denial. The statute requires a reasonable explanation with reference to the policy and the
        facts — not a form letter that says &ldquo;coverage has been denied.&rdquo;
      </p>

      {/* ====== SECTION VII ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Relationship Between 790.03 and Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most important — and most misunderstood — areas of California insurance
        law. Understanding the relationship between 790.03 and{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>{' '}
        is essential for any policyholder dealing with an insurer that is not handling their claim
        fairly.
      </p>

      <CalloutBox variant="legal" title="Moradi-Shalal and Zhang: No Private Right of Action Under §790.03">
        <p className="mb-2">
          In <em>Moradi-Shalal v. Fireman&apos;s Fund Insurance Companies</em> (1988) 46 Cal.3d
          287, the California Supreme Court held that Insurance Code Section 790.03 does{' '}
          <strong>not</strong> create a direct private right of action. An insured cannot sue an
          insurer solely for violating 790.03 &mdash; the statute itself does not give the
          insured standing to bring a claim in court based on that violation alone. CDI enforces
          the statute through administrative proceedings.
        </p>
        <p className="mb-2">
          Two decades later, the California Supreme Court in{' '}
          <em>Zhang v. Superior Court</em> (2013) 57 Cal.4th 364 confirmed{' '}
          <em>Moradi-Shalal</em>&rsquo;s bar on direct private UIPA enforcement but held that
          policyholders can pursue Unfair Competition Law (UCL, Bus. &amp; Prof. Code &sect; 17200)
          claims based on conduct that violates the Insurance Code &mdash; provided the UCL
          claim does not rely on a private right of action under &sect; 790.03 itself.
        </p>
        <p>
          The conduct described in 790.03(h) often overlaps with the conduct that may constitute
          bad faith under the common law. The statute defines what unfair claims practices look
          like; the common-law cause of action comes from the implied covenant of good faith and
          fair dealing. A statutory or regulatory violation alone does not automatically equate
          to bad faith, and bad faith can exist even without a statutory violation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect of <em>Moradi-Shalal</em> is not that 790.03 is meaningless — far from
        it. The statute remains important because:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The conduct prohibited by 790.03(h) is often the same conduct that constitutes bad
          faith under <em>Egan v. Mutual of Omaha</em> (1979) and <em>Gruenberg v. Aetna Insurance
          Co.</em> (1973). When an insurer violates 790.03(h), that violation <strong>may serve as
          powerful evidence</strong> that the insurer breached the implied covenant of good faith
          and fair dealing — though a statutory or regulatory violation alone does not automatically
          equate to bad faith, and bad faith can exist even without a statutory or regulatory violation.
          See our{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith guide</Link>{' '}
          for a full discussion of this nuance.
        </li>
        <li>
          In litigation, plaintiff counsel sometimes demonstrate that an insurance company had a{' '}
          <strong>pattern and practice</strong> of mistreating numerous homeowners similarly.{' '}
          <em>Colonial Life &amp; Accident Insurance Co. v. Superior Court</em> (1982) 31 Cal.3d
          785 is often cited for the proposition that pattern-and-practice discovery can be
          available to show that the insurer&rsquo;s conduct toward an individual policyholder
          was not an isolated incident but part of a company-wide pattern. The scope and
          availability of such discovery is fact-specific and a question for counsel.
        </li>
        <li>
          The 790 letter documents violations of the exact same standards that courts use to evaluate
          whether an insurer acted in bad faith. A claim file that contains a 790 letter identifying
          specific statutory violations — followed by continued bad conduct — tells a compelling story
          to a judge or jury.
        </li>
        <li>
          The{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            Fair Claims Settlement Practices Regulations
          </Link>{' '}
          (10 CCR 2695), which implement 790.03, are independently enforceable through{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] hover:underline">
            CDI complaints
          </Link>. Even though you cannot sue directly under 790.03, the regulatory violations that
          flow from the same conduct can be reported to the Department of Insurance.
        </li>
      </ul>

      {/* ====== SECTION VIII ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Send a 790 Letter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every disagreement with your insurer warrants a 790 letter. But when the insurer&apos;s
        conduct crosses the line from a legitimate dispute into conduct that the statute specifically
        prohibits, a 790 letter is appropriate — and often necessary. Consider sending one in these
        situations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The insurer has ignored your communications</strong> for an unreasonable period —
          emails go unanswered, voicemails are not returned, supplement requests sit for weeks with
          no response.
        </li>
        <li>
          <strong>The estimate is clearly deficient</strong> and the insurer refuses to correct it —
          documented damage is omitted, materials are downgraded, labor rates are below market, and
          the insurer will not engage with your contractor&apos;s estimate.
        </li>
        <li>
          <strong>The insurer denies coverage without adequate investigation</strong> — the denial is
          based on a cursory review, a desk adjustment, or an expert report that contradicts the
          physical evidence.
        </li>
        <li>
          <strong>The insurer demands an EUO or SIU investigation without apparent justification</strong>{' '}
          — there is no indication of fraud, but the insurer is using the investigation as a delay
          tactic or intimidation tool. See our guide on{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">
            recorded statements and SIU investigations
          </Link>.
        </li>
        <li>
          <strong>The insurer misrepresents what the policy covers</strong> — the adjuster tells you
          something is excluded when it is not, or misquotes the policy language to justify
          their position.
        </li>
        <li>
          <strong>Before demanding appraisal</strong> — to establish the record of the insurer&apos;s
          conduct before invoking the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
            appraisal process
          </Link>.
        </li>
        <li>
          <strong>Before retaining an attorney</strong> — to establish the record so that if litigation
          becomes necessary, the attorney has a documented foundation to work with.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The 790 Letter as Part of Your Overall Strategy">
        <p>
          A 790 letter is not a standalone tactic — it is one tool in a broader strategy of
          documentation and advocacy. It works best when combined with detailed{' '}
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] hover:underline">
            claim correspondence
          </Link>,
          independent damage documentation, and a thorough understanding of your policy. A Public
          Adjuster or attorney can help you determine when a 790 letter is appropriate and how to
          draft one that maximizes its impact.
        </p>
      </CalloutBox>

      {/* ───────── CTA ───────── */}
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Your Insurer Is Not Following the Rules &mdash; Now What?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster can identify the factual conduct that may overlap with the
          statutory standards and build the documentation record that supports the analysis.
          When statutory accusations are appropriate, an attorney is the right person to draft
          and sign a formal 790 letter. Many Public Adjusters and attorneys provide a free
          initial consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      {/* ───────── Legal Disclaimer ───────── */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          <strong>Legal Disclaimer:</strong> This article provides general information about
          California Insurance Code Section 790.03 and is intended for educational purposes only. It
          does not constitute legal advice and should not be relied upon as a substitute for
          consultation with a qualified attorney. The application of any statute or case law depends
          on the specific facts of your situation. If you are involved in an insurance dispute,
          consult with an attorney experienced in California insurance law.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          <em>
            Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
          </em>
        </p>
      </div>
    </>
  )
}
