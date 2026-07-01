import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Policy Reformation: When the Policy Doesn't Match the Sale",
  description:
    "Policy reformation is a court remedy that rewrites the policy to match what was agreed or represented. The grounds, standard of proof, and when it saves claims.",
  summary:
    'Reformation is a court remedy that rewrites a policy to match what was actually agreed or represented, when the written policy does not. It requires clear proof, but it can save a claim where the document does not reflect the real agreement.',
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
        You bought a homeowners policy. Your agent told you the dwelling was insured for $800,000.
        You paid premiums based on that understanding. Then your house burns down and you discover
        the policy only says $500,000. The agent made a mistake on the application &mdash; or worse,
        the insurer changed the limits at renewal without telling you. You are now $300,000 short
        on a total loss, and the insurance company says the policy is the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where <strong>policy reformation</strong> comes in. Reformation is a court remedy
        that literally rewrites the insurance policy to match what was actually agreed upon or
        represented to you. Courts can change limits, add coverages, or delete exclusions. It is
        not a common remedy &mdash; it requires strong evidence and a willingness to litigate &mdash;
        but when the facts support it, reformation can be the difference between a devastating
        shortfall and a full recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Policy Reformation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation is an equitable remedy that allows a court to modify a written contract so
        that it accurately reflects the actual agreement between the parties. In the insurance
        context, it means the court rewrites the policy &mdash; changing the terms, limits,
        coverages, or exclusions &mdash; to match what the policyholder and the insurer (or the
        insurer&apos;s agent) actually intended or represented.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation does not create a new contract. It corrects an existing one. The court is
        saying: &quot;This is what the contract should have said all along, and we are fixing the
        written document to reflect that.&quot; The reformed policy is treated as if it had always
        contained the corrected terms.
      </p>

      <CalloutBox variant="important" title="Reformation Rewrites the Policy Itself">
        <p>
          Unlike other remedies that work around policy language, reformation changes the policy.
          If a court reforms your policy to increase the dwelling limit from $500,000 to $800,000,
          your policy now <strong>says</strong> $800,000. The insurer must pay based on the
          reformed terms. This is a powerful remedy &mdash; and insurers fight it aggressively.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation is distinct from{' '}
        <Link href="/resources/policy-rescission" className="text-blue-700 underline hover:text-blue-900">
          rescission
        </Link>{' '}
        (which voids the policy entirely as if it never existed, typically based on a material
        misrepresentation by the insured &mdash; see{' '}
        <Link href="/resources/material-misrepresentation-nondisclosure" className="text-blue-700 underline hover:text-blue-900">
          Material Misrepresentation vs. Innocent Nondisclosure
        </Link>{' '}
        for the underlying doctrine). Reformation keeps the policy in force but rewrites its
        terms; rescission unwinds the policy and returns premiums. The defenses are different,
        and a carrier cannot use reformation as a backdoor to achieve what rescission law does
        not allow.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Grounds for Reformation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts do not reform contracts lightly. You must establish one of the following grounds:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        1. Mutual Mistake
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both parties intended one thing, but the written policy says something different. This can
        happen when an application is filled out correctly, but a clerical error during policy
        issuance results in the wrong limits, wrong address, or wrong coverage form being printed
        on the policy. Neither you nor the insurer intended the policy to say what it says &mdash;
        the written document simply does not reflect the actual agreement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mutual mistake is the most straightforward basis for reformation because both sides agree
        on what the contract was supposed to say. The dispute is only about whether the written
        document accurately reflects that agreement.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        2. Unilateral Mistake Combined with Fraud or Inequitable Conduct
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You made a mistake about what the policy said, and the insurer knew about it &mdash; or
        caused it &mdash; but said nothing. This is more common than mutual mistake in insurance
        disputes. The insurer or its agent represented certain coverage, the policyholder relied
        on that representation, and the written policy does not match. The insurer knew (or should
        have known) about the discrepancy and failed to correct it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This ground does not require outright fraud in the traditional sense. Inequitable conduct
        &mdash; including silence when the insurer had a duty to speak &mdash; is sufficient. If
        the insurer knew you believed you had $800,000 in coverage and collected premiums based on
        that understanding without correcting your belief, that silence can support reformation.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        3. Misrepresentation by the Broker or Agent
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance agent or broker told you that a specific coverage was included, a specific
        limit applied, or a specific exclusion did not exist &mdash; and you purchased the policy
        in reliance on those representations. When the policy arrives and says something different,
        the agent&apos;s representations can serve as the basis for reforming the policy to match
        what you were told.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is particularly important in California, where insurance agents are considered agents
        of the insurer, not agents of the policyholder (with some exceptions for independent
        brokers). When the insurer&apos;s own agent makes a representation about coverage, that
        representation can bind the insurer &mdash; and can support reformation of the policy to
        match.
      </p>

      <CalloutBox variant="tip" title="Save Every Email and Text From Your Agent">
        <p>
          If your agent made representations about your coverage &mdash; in emails, text messages,
          marketing materials, or handwritten notes &mdash; preserve all of it. These communications
          are the evidence that supports a reformation claim. If the representation was made verbally,
          write down what was said, when, and where as soon as possible. Your agent&apos;s words are
          the foundation of your case.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Standard of Proof: Clear and Convincing Evidence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation requires proof by <strong>clear and convincing evidence</strong>. This is a
        higher standard than the &quot;preponderance of the evidence&quot; (more likely than not)
        standard used in most civil cases, but lower than the &quot;beyond a reasonable doubt&quot;
        standard used in criminal cases.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practical terms, this means you cannot simply say &quot;my agent told me I had more
        coverage.&quot; You need to prove it convincingly &mdash; with documents, communications,
        premium payment records, application materials, or testimony that clearly establishes what
        was represented and what was intended. The evidence must leave the court with a firm belief
        that the written policy does not reflect the actual agreement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This higher standard exists because reformation involves rewriting a written contract,
        which courts are generally reluctant to do. Written agreements are presumed to accurately
        reflect the parties&apos; intent. To overcome that presumption, you need strong, specific,
        and credible evidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        You Are Not Required to Read Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important principles in California reformation law is this: <strong>the
        policyholder&apos;s failure to read the policy is not a defense for the insurer</strong>.
        Insurance companies will almost always argue that you should have read your policy, caught
        the discrepancy, and raised it before a loss occurred. California courts have repeatedly
        rejected this argument.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reasoning is straightforward. Insurance policies are complex, lengthy, and filled with
        technical language that most consumers do not understand. Policyholders rely on their agents
        to explain what the policy covers. When an agent represents that a policy provides specific
        coverage, the policyholder is entitled to rely on that representation without independently
        reading and parsing the policy document. Requiring every consumer to read and fully
        understand a 60-page insurance contract would defeat the purpose of having licensed agents
        in the first place.
      </p>

      <CalloutBox variant="legal" title="The Duty to Read Is Not What Insurers Claim">
        <p>
          California courts have held that an insured who relies on an agent&apos;s representations
          about coverage is not required to independently read and understand the policy. The insurer
          cannot use the policyholder&apos;s reasonable reliance on its own agent as a defense against
          reformation. This principle is critical because &quot;you should have read your policy&quot;
          is the single most common argument insurers make against reformation claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Reformation Applies in Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation can apply in a wide range of insurance claim scenarios. Here are the most
        common situations where policyholders seek reformation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Dwelling limits that don&apos;t match what was represented:</strong> Your agent
          told you the home was insured for $800,000 based on a replacement cost estimate, but the
          policy was issued at $500,000. After a{' '}
          <Link href="/resources/underinsured-after-wildfire" className="text-blue-700 underline hover:text-blue-900">
            total loss in a wildfire
          </Link>
          , the $300,000 gap is catastrophic.
        </li>
        <li>
          <strong>Coverages that were promised but excluded:</strong> Your agent said flood damage
          was covered, or that your detached workshop was included, but the policy excludes it. You
          relied on the representation and did not purchase separate coverage.
        </li>
        <li>
          <strong>Limits reduced at renewal without your knowledge or consent:</strong> The insurer
          reduced your dwelling limit, increased your deductible, or removed an endorsement at
          renewal without clearly notifying you. You continued paying premiums believing your
          coverage was unchanged. Check your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>{' '}
          at every renewal to catch these changes.
        </li>
        <li>
          <strong>Application errors made by the agent:</strong> Your agent filled out the
          application incorrectly &mdash; entering the wrong square footage, wrong construction
          type, or wrong property use &mdash; and the insurer issued a policy based on that
          incorrect information. When a loss occurs, the insurer may try to void the policy or
          reduce coverage based on the application error that its own agent caused.
        </li>
        <li>
          <strong>Endorsements that were requested but never added:</strong> You asked for
          earthquake coverage, increased jewelry limits, or an additional insured, and your agent
          confirmed it was done &mdash; but the endorsement was never actually added to the policy.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Statute of Limitations for Reformation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the statute of limitations for a reformation claim is <strong>three years
        from the date of discovery</strong> of the mistake &mdash; not from the date the policy was
        issued. This is a distinction that matters. You do not lose your right to seek reformation simply
        because the policy was issued years ago. The clock starts when you actually discover (or
        reasonably should have discovered) that the policy does not match what was represented.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most cases, discovery happens when a loss occurs and the policyholder files a claim. That
        is when you first learn that the coverage you thought you had does not match what the policy
        says. The three-year limitations period runs from that point &mdash; giving you time to
        evaluate the discrepancy, gather evidence, and decide whether to pursue reformation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, do not assume you have unlimited time. If you received clear written notice of a
        change to your policy &mdash; for example, a renewal declaration page showing reduced limits
        &mdash; a court could find that the discovery clock started when you received that notice,
        even if you did not read it. The &quot;failure to read&quot; protection discussed above
        applies to agent representations, not necessarily to clear written changes on your
        declarations page.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reformation vs. Estoppel: Different Remedies, Sometimes Pled Together
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation and estoppel are related but distinct legal remedies, and they are often
        confused. Understanding the difference matters because each has different requirements
        and produces different results.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Reformation</strong> rewrites the contract. The court changes the policy language
        so that it matches the actual agreement or representation. After reformation, the policy
        itself says what it should have said all along.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Estoppel</strong> prevents the insurer from enforcing the policy as written. The
        court does not change the policy language &mdash; instead, it stops the insurer from relying
        on that language to deny coverage. The policy still says what it says, but the insurer is
        barred from using it against you because of its own conduct or representations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, attorneys often plead both reformation and estoppel in the same lawsuit as
        alternative theories. If the court finds the evidence sufficient for reformation, it will
        rewrite the policy. If the evidence falls short of the clear and convincing standard
        required for reformation but still establishes that the insurer&apos;s conduct was
        inequitable, estoppel may provide relief even when reformation does not.
      </p>

      <CalloutBox variant="tip" title="Reformation and Estoppel Are Not Mutually Exclusive">
        <p>
          If you believe your policy does not reflect what you were sold, your attorney should
          evaluate both reformation and estoppel as potential remedies. They serve different
          functions and have different evidentiary requirements, but they can be &mdash; and
          often are &mdash; pursued together. Having both available gives you the strongest
          possible position.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation is a powerful remedy, but it is not a simple one. There are important practical
        realities to consider before pursuing it:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Litigation is expensive.</strong> Reformation is an equitable remedy that
          typically requires a trial. You will need an attorney experienced in insurance coverage
          litigation, and the case may take years to resolve. The cost of litigation must be
          weighed against the potential recovery &mdash; but when the gap between what you were
          told and what the policy says is $300,000 or more, the cost is often justified.
        </li>
        <li>
          <strong>Evidence is everything.</strong> The clear and convincing evidence standard means
          you need strong proof of what was represented. Emails, text messages, written proposals,
          illustrations, application documents, premium payment records, and testimony from the
          agent are all critical. If the representation was entirely verbal with no corroborating
          documentation, the case becomes much harder.
        </li>
        <li>
          <strong>The agent may be a key witness &mdash; or a co-defendant.</strong> If the agent
          made the misrepresentation, they may be called as a witness. In some cases, the agent
          (or their errors and omissions insurer) may also be named as a defendant. The agent&apos;s
          testimony about what they told you and what they intended to place is often the most
          important evidence in the case.
        </li>
        <li>
          <strong>Insurers fight reformation aggressively.</strong> Because reformation literally
          changes the contract and can increase the insurer&apos;s exposure by hundreds of thousands
          of dollars, insurers defend these cases vigorously. Expect the insurer to argue that you
          should have read your policy, that the agent&apos;s representations were not binding, and
          that your evidence does not meet the clear and convincing standard.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself Before a Loss Occurs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best protection against needing reformation is to verify your coverage before a loss
        happens. While the law protects policyholders who rely on agent representations, prevention
        is always better than litigation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Review your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>{' '}
          at every renewal. Check that the dwelling limit, deductible, and listed endorsements
          match what you expect.
        </li>
        <li>
          When your agent makes representations about coverage, ask for written confirmation.
          An email saying &quot;your policy includes X coverage at Y limit&quot; is powerful
          evidence if a dispute arises later.
        </li>
        <li>
          Keep copies of every application, proposal, illustration, and communication with your
          agent or broker. These documents establish the &quot;meeting of the minds&quot; that
          reformation seeks to restore.
        </li>
        <li>
          If you notice a discrepancy between what you were told and what the policy says, raise
          it immediately in writing. Do not wait for a loss to discover the problem.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Carrier Uses Reformation Against You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reformation is normally a policyholder&apos;s remedy &mdash; the court rewrites a
        policy that does not match the deal that was sold. But insurers sometimes try to
        use the same doctrine in reverse. After a loss, a carrier may claim the issued
        policy contains a &ldquo;mistake&rdquo; and ask the court to retroactively shrink
        the coverage. This is a far more difficult argument for the insurer than the
        opposite scenario, but it does come up.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common Carrier-Initiated Scenarios
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Broader coverage than intended.</strong> The carrier claims an exclusion
          or limitation was omitted by oversight and asks the court to read it back into
          the policy.
        </li>
        <li>
          <strong>Higher limits than intended.</strong> The carrier claims a dwelling limit
          or sublimit was a data-entry mistake and seeks to reduce the figure after a large
          loss.
        </li>
        <li>
          <strong>Different coverage form than intended.</strong> An open-peril policy was
          issued when the carrier claims it meant to issue a named-peril form. After a loss
          that would be covered under open-peril but excluded under named-peril, the
          carrier seeks reformation to downgrade.
        </li>
        <li>
          <strong>Wrong or missing endorsement.</strong> The carrier seeks to add a missing
          coverage-restricting endorsement or remove a coverage-enhancing one.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Post-Loss Timing Is Revealing">
        <p>
          In almost every case where an insurer seeks reformation, the &ldquo;mistake&rdquo;
          is discovered only after a loss that triggers the coverage the carrier wants to
          eliminate. The carrier collected premiums on the policy as written, often for
          years, without ever seeking to correct the alleged error. The timing of the
          reformation claim &mdash; coinciding precisely with the carrier&rsquo;s obligation
          to pay &mdash; is itself evidence that the claim is pretextual.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Carrier&apos;s Heightened Burden
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law imposes a particularly demanding burden on a carrier seeking to
        reform a policy to reduce coverage. By clear and convincing evidence, the insurer
        must establish: (1) a specific prior agreement existed between the parties that
        differed from the written policy; (2) the written policy deviates from that
        agreement due to a mistake in drafting, transcription, or data entry &mdash; not a
        change of heart after the loss; and (3) the mistake was mutual, or the
        carrier&rsquo;s unilateral mistake was coupled with fraud or inequitable conduct
        by the policyholder. Mere silence by a policyholder who may not have known the
        policy differed from what the carrier intended is not fraud.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s most common theory &mdash; mutual mistake &mdash; faces a
        fundamental problem in the insurance context. Insurance policies are{' '}
        <Link href="/resources/contra-proferentem" className="text-blue-700 underline hover:text-blue-900">
          adhesion contracts
        </Link>{' '}
        prepared entirely by the insurer. A policyholder who received the policy, paid
        premiums on it, and relied on its terms did not share a &ldquo;mutual mistake&rdquo;
        with the carrier. The policyholder&rsquo;s understanding matched the policy. The
        carrier&rsquo;s after-the-fact claim that it intended to issue a different policy
        is not a mutual mistake &mdash; it is the carrier&rsquo;s own error.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Agent or Broker File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier claims a &ldquo;mistake&rdquo; occurred, the insurance agent or
        broker&apos;s role becomes critical evidence. If the agent represented to the
        policyholder that the policy would include certain coverage, and the issued policy
        includes that coverage, the carrier&apos;s mistake theory is undermined. A
        disconnect between the carrier&apos;s sales arm and its underwriting arm is the
        carrier&apos;s internal problem, not a mutual mistake. An attorney defending a
        reformation claim should subpoena the agent or broker&apos;s complete file for the
        policy &mdash; the application, correspondence with the underwriter, coverage
        proposals, and the agent&apos;s notes often contain evidence that directly
        contradicts the carrier&apos;s reformation theory.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Defense Arguments
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The carrier drafted the policy.</strong> Insurance policies are contracts
          of adhesion. The carrier had exclusive control over the drafting. If the policy
          contains terms the carrier did not intend, that is a failure of the carrier&apos;s
          own processes. Reformation should not bail out the drafter&apos;s carelessness.
        </li>
        <li>
          <strong>The carrier accepted premiums on the policy as written.</strong> Acceptance
          of premiums on a policy for years &mdash; without ever seeking to correct the
          alleged mistake &mdash; can constitute waiver or estoppel, barring reformation
          after a loss. If the mistake was so obvious, why did the carrier accept payment
          on it for years?
        </li>
        <li>
          <strong>There was no mutual mistake.</strong> The policyholder understood the
          policy to say what it says. The carrier&apos;s unilateral regret that the policy
          provides coverage it must now pay is not a mutual mistake.
        </li>
        <li>
          <strong>The reasonable expectations doctrine.</strong> California&apos;s{' '}
          <Link href="/resources/reasonable-expectations-doctrine" className="text-blue-700 underline hover:text-blue-900">
            reasonable expectations doctrine
          </Link>{' '}
          honors the objectively reasonable expectations of the policyholder regarding the
          terms of the contract. Reformation to eliminate the coverage a policyholder
          reasonably expected based on the policy language, the agent&apos;s
          representations, and the premiums charged is fundamentally at odds with this
          doctrine.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Practical Steps When the Carrier Seeks Reformation
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Retain a coverage attorney.</strong> Reformation is a complex equitable
          remedy litigated in court, not something to resolve through the ordinary claims
          process or appraisal.
        </li>
        <li>
          <strong>Preserve every document from the policy procurement process.</strong>
          Applications, proposals, agent correspondence, coverage comparisons, marketing
          materials, and declarations pages from every policy period are all relevant.
        </li>
        <li>
          <strong>Obtain prior-year policies.</strong> A consistent pattern of issuing the
          same terms year after year suggests the terms were intentional, not accidental.
        </li>
        <li>
          <strong>Examine the carrier&apos;s underwriting file in discovery.</strong> The
          carrier&apos;s internal underwriting file often reveals what the underwriter
          actually knew and intended at the time the policy was issued.
        </li>
        <li>
          <strong>Challenge the timing.</strong> Demand an explanation of why the
          &ldquo;error&rdquo; was not identified during any prior renewal, audit, or
          underwriting review. The longer the carrier accepted premiums on the policy as
          written, the weaker its reformation argument.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Consult an Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have suffered a loss and discovered that your policy does not match what you were
        told by your agent or broker, consult an attorney experienced in insurance coverage
        disputes as soon as possible. Reformation cases are fact-intensive and require careful
        evidence preservation from the outset. An attorney can evaluate whether your facts
        support reformation, estoppel, or both &mdash; and whether the potential recovery
        justifies the cost of litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
          insurance attorney
        </Link>{' '}
        can also help you identify and preserve evidence early in the process, before documents
        are lost or memories fade. If the{' '}
        <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
          coverage dispute
        </Link>{' '}
        involves a significant dollar amount &mdash; and reformation cases almost always do &mdash;
        legal representation is not optional. It is essential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding your{' '}
        <Link href="/resources/policy-interpretation" className="text-blue-700 underline hover:text-blue-900">
          policy language
        </Link>{' '}
        is the first step in any coverage dispute. But when the policy language itself is the
        problem &mdash; when the words on the page do not match the deal you were sold &mdash;
        reformation may be the remedy that makes you whole.
      </p>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Reformation is a complex equitable remedy that requires
          legal representation. Consult a licensed attorney experienced in insurance coverage
          litigation for advice about your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
