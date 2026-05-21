import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Why You Cannot Sue Your Insurer Under Insurance Code 790.03 — And What You Can Do Instead',
  description:
    'An explanation of why California policyholders cannot bring a private lawsuit under Insurance Code 790.03 after Moradi-Shalal v. Fireman\'s Fund, and the alternative legal remedies that are available — common law bad faith, breach of contract, CDI complaints, and Brandt fees.',
  summary:
    'After Moradi-Shalal, you cannot sue your insurer directly under Insurance Code 790.03. But you still have remedies: common-law bad faith, breach of contract, a CDI complaint, and Brandt fees. Use those instead of a private 790.03 suit.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal advice.
          The case law and statutes discussed below are provided for general educational
          context &mdash; they should not be cited in letters to insurance carriers, as doing
          so may constitute the unauthorized practice of law. Consult a licensed California
          attorney before pursuing any legal action.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Question Every Frustrated Policyholder Asks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 790.03 defines a detailed list of unfair claims
        settlement practices &mdash; the specific acts that constitute insurer misconduct. It
        prohibits insurers from misrepresenting policy provisions, failing to promptly
        investigate claims, lowballing settlements, and engaging in dozens of other specified
        bad acts. When a policyholder reads this statute and recognizes the insurer&rsquo;s
        conduct in its prohibitions, the natural assumption is: &ldquo;I can sue my insurance
        company for violating this law.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That assumption is wrong. Since 1988, California law has been clear: <strong>there is no
        private right of action under Insurance Code Section 790.03</strong>. A policyholder
        cannot file a lawsuit alleging a violation of the statute as an independent cause of
        action. This result surprises virtually every policyholder who encounters it &mdash; and
        many attorneys who do not specialize in insurance law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding why this is the law, and what alternatives exist, is essential for any
        policyholder navigating a disputed insurance claim in California.
      </p>

      {/* ====== Royal Globe ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Rise: <em>Royal Globe</em> and the Brief Era of Private 790.03 Lawsuits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Royal Globe Ins. Co. v. Superior Court</em> (1979) 23 Cal.3d 880, the California
        Supreme Court held that Insurance Code Section 790.03 did create an implied private right
        of action. This meant that individual policyholders &mdash; and even third-party
        claimants &mdash; could sue an insurer directly for violating the unfair claims
        settlement practices provisions of the statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Royal Globe</em> decision was controversial from the moment it was issued. It
        opened the door to a wave of litigation, including suits by third-party claimants (people
        injured by the insured, not the policyholder) who claimed that the insurer had violated
        790.03 in handling their claims. The insurance industry argued that the decision created
        an unmanageable flood of litigation, drove up costs, and went beyond the legislative
        intent of the statute. Policyholder advocates argued that private enforcement was
        necessary because CDI&rsquo;s administrative enforcement was too slow and too limited to
        deter widespread misconduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Royal Globe</em> remained the law for nearly a decade. During that period,
        policyholders and claimants routinely included 790.03 causes of action in their complaints
        against insurers.
      </p>

      {/* ====== Moradi-Shalal ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Reversal: <em>Moradi-Shalal v. Fireman&rsquo;s Fund</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Moradi-Shalal v. Fireman&rsquo;s Fund Insurance Companies</em> (1988) 46 Cal.3d
        287, the California Supreme Court reversed <em>Royal Globe</em> and held that Insurance
        Code Section 790.03 does <strong>not</strong> create a private right of action. The
        Court concluded that the Legislature intended the statute to be enforced exclusively by
        the Insurance Commissioner through administrative proceedings, not through private
        lawsuits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Moradi-Shalal</em> Court identified several reasons for overruling{' '}
        <em>Royal Globe</em>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Legislative intent.</strong> The Court found that the Unfair Insurance Practices
          Act (UIPA), of which Section 790.03 is a part, was modeled on the National Association
          of Insurance Commissioners (NAIC) Model Unfair Claims Settlement Practices Act, which
          was designed for administrative enforcement by the Insurance Commissioner &mdash; not
          for private litigation.
        </li>
        <li>
          <strong>Statutory scheme.</strong> The UIPA provides a comprehensive administrative
          enforcement mechanism through the Insurance Commissioner, including investigation,
          hearing, and penalty provisions. The Court concluded this indicated the Legislature
          intended that mechanism to be the exclusive enforcement avenue.
        </li>
        <li>
          <strong>Existing common law remedies.</strong> The Court noted that policyholders
          already had robust remedies through common law bad faith (breach of the implied
          covenant of good faith and fair dealing), which provided compensatory damages,
          emotional distress, and punitive damages &mdash; making a statutory private right
          of action unnecessary to protect policyholders.
        </li>
      </ul>

      <CalloutBox variant="important" title="This Has Been the Law for Over 35 Years">
        <p>
          <em>Moradi-Shalal</em> was decided in 1988 and has never been overturned. Multiple
          attempts to legislatively restore a private right of action under 790.03 have been
          introduced in the California Legislature; none have been enacted. The law on this
          point is well-settled, and any complaint alleging a private cause of action under
          790.03 will be subject to demurrer and dismissal.
        </p>
      </CalloutBox>

      {/* ====== Why This Misconception Persists ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Policyholders Wrongly Assume They Can Sue Under 790.03
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The misconception is understandable, and it persists for several reasons:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The statute reads like a list of actionable violations.</strong> Section
          790.03(h) enumerates specific prohibited acts in detail. When a policyholder reads
          that it is unlawful for an insurer to &ldquo;not attempt in good faith to effectuate
          prompt, fair, and equitable settlements of claims in which liability has become
          reasonably clear,&rdquo; the natural conclusion is that violating this prohibition
          creates a right to sue.
        </li>
        <li>
          <strong>The &ldquo;790 letter&rdquo; is widely used.</strong> Public adjusters,
          attorneys, and policyholder advocates routinely send{' '}
          <Link href="/resources/insurance-code-790" className="text-[#2E74B5] underline">
            790 letters
          </Link>{' '}
          citing specific provisions of the statute. This can create the impression that the
          statute provides a direct legal remedy, when in fact the 790 letter serves a different
          strategic purpose: documenting the insurer&rsquo;s conduct for a potential common law
          bad faith claim or CDI complaint.
        </li>
        <li>
          <strong>Other states allow it.</strong> Some states do permit private causes of action
          under their unfair claims settlement practices statutes. Policyholders who research
          insurance law generally may find information from other jurisdictions and assume
          California works the same way.
        </li>
        <li>
          <strong>The internet is full of incorrect information.</strong> Many online resources
          about California insurance law are outdated, inaccurate, or written by non-attorneys
          who do not understand the <em>Moradi-Shalal</em> distinction.
        </li>
      </ul>

      {/* ====== What You CAN Do ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Can Do Instead
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The elimination of the private right of action under 790.03 does not leave policyholders
        without recourse. California provides several powerful alternative remedies:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Common Law Bad Faith (Breach of the Implied Covenant of Good Faith and Fair Dealing)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the primary remedy for policyholders in California. Every insurance policy carries
        an implied covenant of good faith and fair dealing. When an insurer unreasonably denies,
        delays, or underpays a claim, the policyholder can bring a tort action for breach of this
        covenant &mdash; commonly known as a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>{' '}
        claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The remedies available in a common law bad faith action are extensive:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contract damages.</strong> The full policy benefits that were wrongfully
          withheld.
        </li>
        <li>
          <strong>Consequential economic damages.</strong> Financial losses caused by the
          insurer&rsquo;s delay or denial &mdash; loan defaults, lost rental income, additional
          costs incurred because benefits were not timely paid.
        </li>
        <li>
          <strong>Emotional distress damages.</strong> The anxiety, stress, and suffering caused
          by the insurer&rsquo;s misconduct.
        </li>
        <li>
          <strong>Punitive damages.</strong> Under Civil Code Section 3294, available when the
          insurer&rsquo;s conduct demonstrates oppression, fraud, or malice.
        </li>
        <li>
          <strong>Brandt fees.</strong> Attorney fees incurred to obtain the wrongfully withheld
          policy benefits, recoverable as compensatory damages under{' '}
          <Link href="/resources/brandt-fees" className="text-[#2E74B5] underline">
            <em>Brandt v. Superior Court</em>
          </Link>{' '}
          (1985) 37 Cal.3d 813.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many respects, the common law bad faith remedy is more powerful than a statutory 790.03
        claim would be, because it includes emotional distress and punitive damages &mdash;
        remedies that the UIPA administrative process does not provide.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Breach of Contract
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Separate from the tort of bad faith, a policyholder can always bring a breach of contract
        claim when the insurer fails to pay benefits owed under the policy. A breach of contract
        claim does not require proof that the insurer acted unreasonably &mdash; only that the
        insurer failed to perform its contractual obligations. However, breach of contract damages
        are more limited: they include the policy benefits owed and consequential damages, but
        generally do not include emotional distress or punitive damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, most insurance disputes that proceed to litigation include both breach of
        contract and bad faith causes of action. The breach of contract claim ensures recovery of
        the policy benefits even if the bad faith claim is not established.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. CDI Complaint (Administrative Remedy)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Although policyholders cannot sue under 790.03, the statute is enforced by the California
        Department of Insurance. Policyholders can file a complaint with the CDI alleging that
        their insurer has violated the unfair claims settlement practices provisions. The CDI
        investigates complaints and has authority to impose administrative penalties, issue cease
        and desist orders, and take enforcement action against insurers that violate the statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
          CDI complaint
        </Link>{' '}
        serves several purposes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          It creates an official record of the insurer&rsquo;s conduct with the regulatory
          agency that oversees them.
        </li>
        <li>
          The CDI&rsquo;s inquiry can sometimes prompt the insurer to re-evaluate its position,
          particularly on claims where the insurer&rsquo;s handling has been clearly deficient.
        </li>
        <li>
          A pattern of CDI complaints against an insurer can support broader enforcement action,
          even if no single complaint results in penalties.
        </li>
        <li>
          The fact that a CDI complaint was filed can become evidence in a subsequent bad faith
          lawsuit, demonstrating that the policyholder put the insurer on notice of the alleged
          violations.
        </li>
      </ul>

      <CalloutBox variant="info" title="CDI Complaints Are Not a Substitute for Legal Action">
        <p>
          A CDI complaint is an administrative remedy. The CDI cannot award damages to the
          policyholder, cannot order the insurer to pay the claim, and does not adjudicate
          individual disputes. For monetary recovery, the policyholder must pursue a legal
          claim &mdash; breach of contract and/or bad faith &mdash; through the courts or
          through the{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            assistance of an attorney
          </Link>.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Brandt Fees
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As noted above,{' '}
        <Link href="/resources/brandt-fees" className="text-[#2E74B5] underline">
          Brandt fees
        </Link>{' '}
        allow a policyholder who establishes bad faith to recover the attorney fees incurred to
        obtain the policy benefits that were wrongfully withheld. This is not a separate cause of
        action but rather an element of damages within the bad faith claim. It is listed here
        because it addresses one of the concerns that originally motivated the{' '}
        <em>Royal Globe</em> decision &mdash; the cost to policyholders of enforcing their
        rights against recalcitrant insurers.
      </p>

      {/* ====== The Role of 790.03 in Bad Faith Litigation ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of 790.03 in Bad Faith Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Although Section 790.03 does not provide a private right of action, it is far from
        irrelevant in litigation. Courts regularly look to the standards set out in 790.03 and
        the Fair Claims Settlement Practices Regulations (10 CCR 2695) as evidence of the
        standard of care that insurers must meet. In a common law bad faith case, an insurer&rsquo;s
        violation of 790.03 provisions can be powerful evidence that the insurer&rsquo;s conduct
        was unreasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the practical pathway: 790.03 defines what constitutes unfair claims settlement
        practices. Common law bad faith provides the cause of action and the damages. The two
        work together &mdash; the statute provides the standard, and the common law provides the
        remedy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed explanation of how 790.03 and the 790 letter function as tools in the
        claims process, see the full article on{' '}
        <Link href="/resources/insurance-code-790" className="text-[#2E74B5] underline">
          Insurance Code 790.03 and the 790 letter
        </Link>.
      </p>

      {/* ====== Practical Pathway ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Practical Pathway for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a policyholder dealing with an insurer that is acting unfairly, the practical pathway
        in California involves multiple tracks working simultaneously:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document everything.</strong> Keep written records of every communication,
          every delay, every lowball offer, and every misrepresentation. This documentation
          forms the foundation of both a CDI complaint and a potential bad faith lawsuit.
        </li>
        <li>
          <strong>Send a 790 letter.</strong> Even though the statute does not provide a private
          cause of action, a formal letter citing the specific provisions of 790.03 that the
          insurer is violating puts the insurer on notice, creates a paper trail, and can
          change the dynamics of the claim.
        </li>
        <li>
          <strong>File a CDI complaint.</strong> The administrative remedy creates an official
          record and may prompt the insurer to reconsider its position.
        </li>
        <li>
          <strong>Consult an attorney.</strong> If the insurer&rsquo;s conduct is egregious
          enough to constitute bad faith, the full range of common law remedies &mdash;
          including compensatory damages, emotional distress, punitive damages, and Brandt
          fees &mdash; may be available. An experienced insurance bad faith attorney can
          evaluate the claim and advise on whether litigation is warranted.
        </li>
      </ul>

      {/* ====== Key Takeaways ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <em>Royal Globe Ins. Co. v. Superior Court</em> (1979) briefly allowed private
          lawsuits under Insurance Code 790.03. <em>Moradi-Shalal v. Fireman&rsquo;s Fund</em>{' '}
          (1988) reversed that holding and eliminated the private right of action. This has been
          settled law for over 35 years.
        </li>
        <li>
          Policyholders <strong>cannot</strong> sue their insurer directly under Section 790.03.
          Any complaint alleging a standalone 790.03 cause of action will be dismissed.
        </li>
        <li>
          The primary remedy for insurer misconduct is a common law bad faith claim &mdash;
          breach of the implied covenant of good faith and fair dealing &mdash; which provides
          compensatory damages, emotional distress, punitive damages, and Brandt fees.
        </li>
        <li>
          Breach of contract claims are available when the insurer fails to pay benefits owed,
          regardless of whether bad faith is established.
        </li>
        <li>
          A CDI complaint is the administrative remedy for 790.03 violations. It creates an
          official record but does not award damages to the policyholder.
        </li>
        <li>
          Although 790.03 does not provide a private right of action, its standards are highly
          relevant in bad faith litigation as evidence of the insurer&rsquo;s standard of care.
        </li>
        <li>
          The practical pathway combines documentation, 790 letters, CDI complaints, and &mdash;
          when warranted &mdash; litigation through common law bad faith and breach of contract
          causes of action.
        </li>
      </ul>
    </>
  )
}
