import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Insurance Code 790.03 and the 790 Letter: How to Put Your Insurer on Notice',
  description:
    'California Insurance Code 790.03 defines unfair claims settlement practices. Learn what the statute prohibits, how to write a 790 letter putting your insurer on formal notice, and why this letter changes the dynamic of your claim.',
  summary:
    'California Insurance Code 790.03 lists unfair claims settlement practices. A \'790 letter\' formally puts your insurer on notice that it is violating the statute, which can shift the dynamic of your claim and lay groundwork for a bad-faith case.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company misrepresents your policy, ignores your communications, refuses
        to investigate, or offers a settlement that bears no relationship to your actual loss, that
        conduct is not just frustrating — it may violate California statutory law. Insurance Code
        Section 790.03 is the statute that defines unfair claims settlement practices in California,
        and a &ldquo;790 letter&rdquo; is the tool policyholders use to put their insurer on formal
        notice that specific violations are being documented.
      </p>

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
        Section 790.03(h) lists sixteen specific practices that constitute unfair claims settlement
        practices when committed by an insurer. Every policyholder should know what these are, because
        they describe — with remarkable precision — the exact tactics that insurance companies use
        every day to underpay and deny claims:
      </p>

      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Misrepresenting pertinent facts or insurance policy provisions.</strong> This
          includes telling you something is not covered when it is, misquoting policy language,
          or mischaracterizing the facts of your loss to justify a denial or reduced payment.
        </li>
        <li>
          <strong>Failing to acknowledge and act reasonably promptly upon communications.</strong>{' '}
          When you call, email, or write to your insurance company about your claim, they are
          required to respond. Ignoring your communications or letting them sit unanswered for weeks
          is a violation.
        </li>
        <li>
          <strong>Failing to adopt and implement reasonable standards for the prompt investigation
          of claims.</strong> The insurer must have actual procedures in place to investigate claims
          promptly. Assigning an adjuster who has 200 open files and cannot get to yours for
          six weeks is a failure to implement reasonable investigation standards.
        </li>
        <li>
          <strong>Refusing to pay claims without conducting a reasonable investigation.</strong>{' '}
          An insurer cannot deny your claim, or pay you less than what is owed, without first
          conducting a thorough and fair investigation of the loss. A desk denial based on satellite
          imagery when the adjuster never inspected the property is a textbook violation.
        </li>
        <li>
          <strong>Not attempting in good faith to effectuate prompt, fair, and equitable settlements
          of claims in which liability has become reasonably clear.</strong> This is the big one.
          When the insurer knows the claim is valid and the amount is reasonably determinable, they
          must attempt to settle it promptly and fairly — not delay, underpay, or pressure you into accepting less.
        </li>
        <li>
          <strong>Compelling insureds to institute litigation to recover amounts due under an
          insurance policy by offering substantially less than the amounts ultimately
          recovered.</strong> If the insurer offers $30,000 on a claim that is ultimately resolved
          for $120,000, the insurer may have compelled you to litigate to recover what was owed all
          along.
        </li>
        <li>
          <strong>Attempting to settle a claim on the basis of an application which was altered
          without notice to, or knowledge or consent of, the insured.</strong>
        </li>
        <li>
          <strong>Attempting to settle claims for less than the amount to which a reasonable person
          would have believed he or she was entitled by reference to written or printed advertising
          material accompanying or made part of an application.</strong>
        </li>
        <li>
          <strong>Attempting to settle claims on the basis of an application which was materially
          altered without notice to, or knowledge or consent of, the insured, his or her
          representative, or agent.</strong>
        </li>
        <li>
          <strong>Making claims payments to insureds or beneficiaries not accompanied by a
          statement setting forth the coverage under which payments are being made.</strong> Every
          check should come with documentation explaining what it covers. A payment with no
          explanation of what it is for violates the statute.
        </li>
        <li>
          <strong>Making known to insureds or claimants a practice of the insurer of appealing from
          arbitration awards in favor of insureds or claimants for the purpose of compelling them to
          accept settlements or compromises less than the amount awarded.</strong> In other words,
          using the threat of endless appeals to bully policyholders into taking less.
        </li>
        <li>
          <strong>Delaying the investigation or payment of claims by requiring that a claimant
          submit a preliminary claim report, and then requiring submission of formal proof of loss
          forms, both of which contain substantially the same information.</strong> Asking for the
          same documentation repeatedly — or requiring you to fill out redundant forms — to slow
          down the process is a violation.
        </li>
        <li>
          <strong>Failing to settle claims promptly, where liability has become apparent, under one
          portion of the insurance policy coverage in order to influence settlements under other
          portions of the insurance policy coverage.</strong> This is the &ldquo;hold one part
          hostage&rdquo; tactic. The insurer agrees that your dwelling damage is $80,000 but
          refuses to pay it until you agree to accept their $15,000 contents offer.
        </li>
        <li>
          <strong>Directly advising a claimant not to obtain the services of an attorney.</strong>{' '}
          If your adjuster tells you &ldquo;you do not need a lawyer&rdquo; or &ldquo;hiring
          an attorney will just slow things down,&rdquo; that statement is itself a statutory
          violation.
        </li>
        <li>
          <strong>Misleading a claimant as to the applicable statute of limitations.</strong> Telling
          you that you have more time than you actually do — or less time — to protect the
          insurer&apos;s position is a violation.
        </li>
        <li>
          <strong>Not providing promptly a reasonable explanation of the basis relied on in the
          insurance policy, in relation to the facts or applicable law, for the denial of a claim or
          for the offer of a compromise settlement.</strong> If the insurer denies your claim or
          offers a reduced payment, they must tell you why in writing, with reference to the policy
          and the facts. A vague denial letter that says &ldquo;not covered&rdquo; without
          explanation violates the statute.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Most Commonly Violated Subsections">
        <p className="mb-2">
          In property insurance claims, the subsections most frequently violated are:
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Subsection (1):</strong> Misrepresenting policy provisions to deny coverage</li>
          <li><strong>Subsection (2):</strong> Failing to respond to communications</li>
          <li><strong>Subsection (4):</strong> Denying claims without a reasonable investigation</li>
          <li><strong>Subsection (5):</strong> Failing to attempt a fair settlement when liability is clear</li>
          <li><strong>Subsection (12):</strong> Requiring duplicative documentation to delay the claim</li>
          <li><strong>Subsection (13):</strong> Withholding payment on undisputed portions of the claim</li>
          <li><strong>Subsection (16):</strong> Failing to provide a written explanation for a denial</li>
        </ul>
        <p className="mt-2">
          If any of these sound familiar, you may be dealing with a statutory violation — and you
          should put your insurer on notice.
        </p>
      </CalloutBox>

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
        The adjuster who receives this letter knows that it will be read by their supervisor, the
        claims manager, and potentially the legal department. It changes the dynamic of the claim
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
          <strong>It establishes the foundation for a bad faith claim.</strong> Under <em>Egan v.
          Mutual of Omaha</em> (1979) and <em>Jordan v. Allstate</em> (2007), the insurer&apos;s
          response — or failure to respond — to a 790 letter is relevant to whether the insurer
          acted in bad faith. An insurer that receives a detailed 790 letter identifying specific
          violations and continues the same conduct has a much harder time claiming its behavior was
          reasonable.
        </li>
        <li>
          <strong>It escalates the claim internally.</strong> A 790 letter typically gets escalated
          to a supervisor, claims manager, or in-house counsel — people who have more authority to
          resolve the dispute than the adjuster who has been handling the file. The frontline adjuster
          may be following a script; the supervisor reading the 790 letter is evaluating exposure.
        </li>
        <li>
          <strong>Insurance companies track 790 letters.</strong> They take them seriously because
          they signal potential litigation, potential CDI complaints, and potential bad faith exposure.
          The insurer&apos;s internal systems flag these letters, and the claim file gets elevated
          attention.
        </li>
      </ul>

      {/* ====== SECTION V ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Write an Effective 790 Letter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A 790 letter is only effective if it is specific, factual, and professional. A vague letter
        that simply says &ldquo;you are violating the Insurance Code&rdquo; without identifying the
        specific violations carries very little weight. Here is how to write one that gets results:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Be Specific About the Violations</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cite the exact subsection(s) of 790.03(h) that apply to the insurer&apos;s conduct. Do not
        simply say &ldquo;you violated the Insurance Code&rdquo; — say &ldquo;your conduct violates
        Insurance Code Section 790.03(h)(5) in that you have failed to attempt in good faith to
        effectuate a prompt, fair, and equitable settlement of this claim despite liability being
        reasonably clear.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Be Factual</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Describe what the insurer did or failed to do, with dates. &ldquo;On March 15, I submitted
        a supplement request with three contractor estimates documenting $47,000 in additional damage.
        As of April 28, forty-four days later, I have received no response to that submission. This
        constitutes a violation of Insurance Code Section 790.03(h)(2).&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Reference Specific Documents</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Point to the estimate, the denial letter, the adjuster&apos;s email, the inspection report,
        the contractor&apos;s scope — whatever documents support your position. The more specific
        your references, the harder it is for the insurer to dismiss your letter.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Be Professional, Not Emotional</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not the place for anger or frustration. The 790 letter should read like a document
        that could be presented to a judge — because it may be. Be precise, be factual, and let the
        statute do the work. The statutory language itself is powerful enough; you do not need to
        add editorial commentary.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">State What You Expect</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tell the insurer specifically what you want them to do: pay the claim, issue the supplement,
        correct the estimate, provide the documentation they are withholding, respond to your
        communications, or explain their position in writing with reference to the policy. Give
        them a reasonable deadline to respond.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Preserve Your Proof of Delivery</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep a copy and send the letter by certified mail with return receipt requested, or by email
        with delivery/read confirmation. If you send it by email, consider also sending a hard copy
        by certified mail. The delivery confirmation becomes part of the record.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Consider Multiple Recipients</h3>
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
          <li>If you are working with a{' '}
            <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>,
            they should be drafting or reviewing these letters — this is part of managing the claim
          </li>
          <li>A 790 letter can also be sent in conjunction with a{' '}
            <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">CDI complaint</Link>{' '}
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
        reasonably clear and the insurer refuses to attempt a fair settlement, that is a violation
        of subsection (5).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Refusing to Pay Undisputed Portions — Subsection (13)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your dwelling claim has $80,000 in damage that both sides agree to, plus $40,000 in
        disputed items. The insurer refuses to pay the $80,000 until you agree to accept their
        position on the disputed $40,000. This is one of the most aggressive — and most common —
        tactics in claims handling. The statute explicitly prohibits it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Requiring Duplicative Documentation — Subsection (12)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You submit a contents inventory. The insurer acknowledges receipt. Three weeks later, a new
        adjuster is assigned and asks you to resubmit the same inventory on a different form. Then
        a third request comes for &ldquo;additional documentation&rdquo; that you already provided.
        This cycle of redundant requests is designed to exhaust you, and it violates the statute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Denying Claims Without Investigation — Subsection (4)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer denies your claim based on a desk review, satellite imagery, or a phone call —
        without ever sending an adjuster to inspect the property. Or they send an adjuster who
        spends 20 minutes at a property with $200,000 in damage. The{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] hover:underline">
          duty to investigate
        </Link>{' '}
        is not optional, and a denial based on an inadequate investigation violates subsection (4).
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
        is &ldquo;not owed&rdquo; when it clearly is. Any misrepresentation of what your policy
        says or means is a violation of subsection (1).
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
        Not Providing Written Denial With Reasons — Subsection (16)
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

      <CalloutBox variant="legal" title="Moradi-Shalal: No Private Right of Action Under 790.03">
        <p className="mb-2">
          In <em>Moradi-Shalal v. Fireman&apos;s Fund Insurance Companies</em> (1988), the
          California Supreme Court held that Insurance Code Section 790.03 does <strong>not</strong>{' '}
          create a direct private right of action. This means you cannot sue your insurance company
          solely for violating 790.03 — the statute itself does not give you standing to bring a
          claim in court based on that violation alone.
        </p>
        <p>
          However — and this is critical — the conduct described in 790.03(h) <strong>is the same
          conduct</strong> that constitutes bad faith under the common law. The statute defines what
          unfair claims practices look like; the cause of action comes from the implied covenant of
          good faith and fair dealing.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect of <em>Moradi-Shalal</em> is not that 790.03 is meaningless — far from
        it. The statute remains critically important because:
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
          It is sometimes possible, in lawsuits filed by insureds against their carriers, to prove
          that an insurance company had a <strong>pattern and practice</strong> of mistreating
          numerous homeowners in the same way. The <em>Colonial</em> case in California illustrates
          how plaintiff attorneys can demand this kind of discovery to show that the insurer&apos;s
          conduct toward the policyholder was not an isolated incident but part of a company-wide
          pattern. This is not legal advice — consult an attorney about whether such discovery is
          appropriate in your case.
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
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
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
          Your Insurer Is not Following the Rules — Now What?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can identify statutory violations, draft 790 letters, and build the
          documentation record that protects your rights throughout the claims process.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
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
