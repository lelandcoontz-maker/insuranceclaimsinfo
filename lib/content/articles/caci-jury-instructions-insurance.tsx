import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "CACI Jury Instructions for California Insurance Litigation",
  description:
    "What CACI jury instructions are, how they relate to case law, and why the Series 2300 insurance instructions matter when policyholders sue their insurer.",
  summary:
    'CACI are California\'s official civil jury instructions. They restate the law from case law rather than create it, but they carry real weight. The Series 2300 instructions govern insurance bad-faith trials and shape how a jury decides a policyholder\'s case.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Version Note">
        <p>
          CACI instructions are periodically updated by the Judicial Council of California. The
          instruction numbers and content referenced in this article are current as of early 2026.
          Practitioners should verify instruction text against the most recent edition available
          from the Judicial Council.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance dispute goes to trial in California, the judge does not simply tell the
        jury to &ldquo;figure it out.&rdquo; Instead, the judge reads a specific set of instructions
        that tell the jury what the law is, what elements the plaintiff must prove, what defenses are
        available, and how to evaluate the evidence. These instructions are called{' '}
        <strong>CACI &mdash; California Civil Jury Instructions</strong>. They are the bridge between
        the statutes, the case law, and the people who actually decide the case.
      </p>

      <CalloutBox variant="info" title="About These Instructions">
        <p>
          The California Civil Jury Instructions (CACI) are public domain documents adopted and maintained
          by the{' '}
          <a href="https://courts.ca.gov/partners/california-jury-instructions/civil-jury-instructions-resource-center/civil-jury-instructions" className="text-[#2E74B5] hover:underline" target="_blank" rel="noopener noreferrer">Judicial Council of California</a>.
          This article summarizes select CACI instructions relevant to insurance disputes for educational
          purposes. It is not legal advice. If you are involved in insurance litigation, share these
          references with your attorney, who can advise you on how they apply to your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders disputing their insurance company&rsquo;s handling of a claim, the CACI Series 2300 instructions are
        the standard framework. They define what it means to breach a policy, what constitutes{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>
        , how causation works when covered and excluded perils combine, and what damages a jury can
        award. Understanding these instructions is not just useful for attorneys preparing for
        trial &mdash; it is useful for anyone who wants to understand what the law actually requires
        of an insurance company.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Are CACI Jury Instructions?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CACI stands for <strong>California Civil Jury Instructions</strong>. They are the
        officially approved set of instructions that California judges give to juries in civil cases.
        The Judicial Council of California publishes and periodically updates them. Before CACI was
        adopted in 2003, California used an older set called BAJI (Book of Approved Jury
        Instructions). CACI replaced BAJI because the older instructions were often written in dense
        legalese that confused jurors. CACI instructions are written in plain English and are
        designed to be understood by non-lawyers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each CACI instruction addresses a specific legal issue. In the insurance context, the{' '}
        <strong>Series 2300</strong> covers &ldquo;Insurance Litigation&rdquo; and includes
        instructions numbered from CACI 2300 through CACI 2361, plus verdict forms VF-2300 through
        VF-2304. These instructions cover:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Breach of the contractual duty to pay a covered claim (CACI 2300)</li>
        <li>Insurance binders and temporary coverage (CACI 2301&ndash;2302)</li>
        <li>Policy exclusions and the burden of proof (CACI 2303&ndash;2304)</li>
        <li>Lost or destroyed policies (CACI 2305)</li>
        <li>Concurrent causation and the predominant cause of loss (CACI 2306)</li>
        <li>Insurance agency disputes (CACI 2307)</li>
        <li>Misrepresentation in insurance applications (CACI 2308)</li>
        <li>Fraudulent claims and policy termination (CACI 2309)</li>
        <li>Late notice, cooperation, and voluntary payment defenses (CACI 2320&ndash;2322)</li>
        <li>The implied obligation of good faith and fair dealing (CACI 2330)</li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            Bad faith
          </Link>
          {' '}&mdash; failure to pay, failure to investigate, failure to inform (CACI 2331&ndash;2333)
        </li>
        <li>Third-party bad faith &mdash; refusal to settle and failure to defend (CACI 2334&ndash;2336)</li>
        <li>Factors for evaluating insurer conduct (CACI 2337)</li>
        <li>Bad faith damages (CACI 2350)</li>
        <li>Judgment creditor actions and negligent failure to obtain coverage (CACI 2360&ndash;2361)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Jury Instructions Relate to Case Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Jury instructions do not exist in a vacuum. Every CACI instruction is built on top of
        existing statutes and{' '}
        <Link href="/resources/california-insurance-case-law" className="text-[#2E74B5] underline">
          case law
        </Link>
        . Each instruction includes a &ldquo;Sources and Authority&rdquo; section that cites the
        statutes, appellate decisions, and Supreme Court opinions on which it is based. In this way,
        jury instructions are a <em>distillation</em> of the law &mdash; they take the holdings from
        dozens of cases and condense them into a single, readable statement that a jury can apply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, CACI 2331 &mdash; the instruction for bad faith failure or delay in
        payment &mdash; is built on the landmark holding in{' '}
        <em>Gruenberg v. Aetna Insurance Co.</em> (1973) 9 Cal.3d 566, which established that an
        insurer who unreasonably withholds payment is &ldquo;subject to liability in tort.&rdquo;
        The instruction also draws on <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24
        Cal.3d 809, which held that an insurer must give &ldquo;at least as much consideration to
        the [insured&rsquo;s] interests as it does to its own.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But there are important differences between jury instructions and case law:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Case law creates the rules.</strong> When the California Supreme Court decides a
          case, it establishes a binding legal principle. The holding in <em>Gruenberg</em> or{' '}
          <em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21 is the law itself.
        </li>
        <li>
          <strong>Jury instructions explain the rules to jurors.</strong> They translate judicial
          holdings into plain-English elements that a jury can follow. The instruction tells the jury{' '}
          <em>what to decide</em>, while the case law tells the judge <em>why the instruction is
          correct</em>.
        </li>
        <li>
          <strong>Case law is binding; jury instructions are not (technically).</strong> An appellate
          court is bound by Supreme Court precedent. A jury instruction approved by the Judicial
          Council carries significant weight, but it is not itself a source of law. Courts can modify
          or refuse to give a particular CACI instruction if the facts of the case warrant it.
        </li>
        <li>
          <strong>Jury instructions simplify; case law nuances.</strong> A CACI instruction states a
          clean, bright-line rule. The underlying cases often contain extensive discussion of
          exceptions, factual variations, and policy rationales that the instruction does not
          reproduce.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Do Jury Instructions Have the Force of Law?">
        <p>
          Technically, no. CACI instructions are not statutes, and they are not case law. They are
          approved by the Judicial Council of California as guidance for trial courts, and California
          Rule of Court 2.1050 strongly encourages judges to use CACI instructions, recommending
          that a judge use the applicable instruction &ldquo;unless the judge finds that a different
          instruction would more accurately state the law.&rdquo; In practice,
          CACI instructions carry enormous authority. Appellate courts regularly cite them, attorneys
          rely on them, and departing from an approved CACI instruction can be grounds for reversal
          on appeal. While they do not have the force of law in the way a statute or Supreme Court
          opinion does, they are the closest thing to an authoritative restatement of California civil
          law for the purpose of jury trials.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The But-For Causation Test and Efficient Proximate Cause (CACI 2306)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important &mdash; and most frequently litigated &mdash; issues in property
        insurance claims is causation. When a loss involves a combination of covered and excluded
        perils, who wins? The answer depends on a causation framework that traces back to two
        Insurance Code provisions and a critical line of case law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code Sections 530 and 532: The Statutory Foundation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code &sect; 530</strong> provides the general rule: an insurer is liable
        for a loss &ldquo;of which a peril insured against was the proximate cause, although a peril
        not contemplated by the contract may have been a remote cause of the loss.&rdquo; In other
        words, if the covered peril was the proximate cause, the loss is covered &mdash; even if
        something else also played a role.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code &sect; 532</strong> provides the flip side &mdash; the{' '}
        <strong>but-for causation</strong> rule for excluded perils: if a peril is specifically
        excepted from coverage, the insurer is not liable for a loss caused by that peril. This is
        sometimes called the <strong>&ldquo;but-for&rdquo; test</strong> because the question
        becomes: <em>but for the excluded peril, would the loss have occurred?</em> If the excluded
        peril is the but-for cause &mdash; the cause without which the loss would not have
        happened &mdash; then the exclusion may bar coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tension between these two statutes is exactly what CACI 2306 resolves.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CACI 2306: The Predominant Cause Test
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CACI 2306 instructs the jury that when a loss is caused by a combination of covered and
        excluded risks, <strong>the loss is covered only if the most important or predominant cause
        is a covered risk</strong>. This is the{' '}
        <strong>efficient proximate cause doctrine</strong>, established by the California Supreme
        Court in <em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21 and refined in{' '}
        <em>Garvey v. State Farm Fire &amp; Casualty Co.</em> (1989) 48 Cal.3d 395.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause is &ldquo;the one that sets others in motion&rdquo;
        (<em>Sabella</em>) &mdash; or more precisely, the <strong>predominating cause</strong>{' '}
        (<em>Garvey</em>). The California Supreme Court in <em>Garvey</em> deliberately moved away
        from the &ldquo;moving cause&rdquo; language because it could be &ldquo;misconstrued to deny
        coverage erroneously, particularly when it is understood literally to mean the
        &lsquo;triggering&rsquo; cause.&rdquo;
      </p>

      <CalloutBox variant="important" title="Why This Matters for Policyholders">
        <p>
          The but-for test, standing alone, would be devastating to policyholders. If all the insurer
          had to show was that an excluded peril was a but-for cause of the loss, then any time an
          excluded peril played <em>any</em> role in the chain of events, coverage would be denied.
          The efficient proximate cause doctrine prevents this. It asks not whether the excluded peril
          was <em>a</em> cause, but whether it was <em>the predominant</em> cause. If the covered
          peril was the predominant cause, the loss is covered &mdash; even if an excluded peril also
          contributed.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, insurers are prohibited from contracting around this doctrine. In{' '}
        <em>Vardanyan v. AMCO Ins. Co.</em> (2015) 243 Cal.App.4th 779, the court held that a
        policy provision attempting to deny coverage whenever any unlisted peril contributed to a
        loss &ldquo;in any way and to any degree&rdquo; was &ldquo;an unenforceable attempt to
        contract around the efficient proximate cause doctrine.&rdquo; The court confirmed that CACI
        2306 was the correct instruction for the jury.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Real-World Example: Wildfire Followed by Mudslide
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not theoretical. Consider a{' '}
        <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] underline">
          wildfire that strips hillside vegetation, followed by rain that triggers a mudslide
        </Link>{' '}
        into a home. The homeowner&rsquo;s policy covers fire but excludes earth movement. The
        insurer argues the earth movement exclusion bars coverage. But under the efficient proximate
        cause doctrine, the relevant question is: <em>what was the predominant cause of the
        loss?</em> The fire &mdash; which destroyed the vegetation and destabilized the
        hillside &mdash; was the force that set the other events in motion. The mudslide was a
        consequence. Fire is the predominant cause, and the loss is covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This framework matters any time a loss involves multiple causes. Wind (covered) followed by
        rain intrusion through a damaged roof (water damage &mdash; possibly excluded). A pipe
        burst (covered) that over time leads to mold growth (subject to a{' '}
        <Link href="/resources/mold-losses" className="text-[#2E74B5] underline">
          mold sub-limit or exclusion
        </Link>
        ). Fire sprinkler discharge (covered) that leads to secondary contamination. In each
        scenario, CACI 2306 tells the jury to identify the <em>predominant</em> cause and decide
        coverage based on that.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Breach of Contract: CACI 2300
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most straightforward insurance claim is a breach of the contractual duty to pay. CACI
        2300 lays out three elements that the policyholder must prove:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>The plaintiff suffered a loss covered under the insurance policy;</li>
        <li>The defendant was notified of the loss; and</li>
        <li>The amount of the covered loss that the defendant failed to pay.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        That is it. No need to prove bad faith. No need to prove the insurer was unreasonable. If
        the loss was covered, the insurer was notified, and it did not pay what it owed, the insurer
        is liable for breach of contract. The simplicity of this instruction is important because it
        reminds policyholders that before bad faith, before emotional distress, before punitive
        damages, the foundational claim is always:{' '}
        <em>you had a policy, you had a covered loss, and you were not paid</em>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policy Exclusions and the Burden of Proof: CACI 2303&ndash;2304
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The burden-shifting framework in{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          policy exclusion
        </Link>{' '}
        disputes is one of the most important things a policyholder can understand. CACI 2303 and
        2304, together with the case law from <em>Aydin Corp. v. First State Insurance Co.</em>{' '}
        (1998) 18 Cal.4th 1183, establish a three-step process:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The insured proves basic coverage.</strong> The policyholder must show that the
          occurrence falls within the basic scope of coverage.
        </li>
        <li>
          <strong>The insurer proves the exclusion applies.</strong> Once basic coverage is
          established, the burden shifts to the insurer to prove that a specific exclusion bars
          coverage (CACI 2303).
        </li>
        <li>
          <strong>The insured proves an exception to the exclusion.</strong> If the insurer
          establishes that an exclusion applies, the burden shifts back to the insured to prove
          that an exception to the exclusion reinstates coverage (CACI 2304).
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This burden-shifting framework is especially relevant in disputes over{' '}
        <Link href="/resources/wear-and-tear-cause-of-loss" className="text-[#2E74B5] underline">
          wear and tear
        </Link>
        ,{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
          coverage disputes
        </Link>
        , and claims where the insurer invokes an exclusion without adequately investigating whether
        the exclusion actually applies. For all-risk homeowner policies, the insurer &mdash; not the
        policyholder &mdash; bears the burden of proving an exclusion applies. This is a
        fundamentally pro-policyholder structure.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bad Faith: What the Jury Is Actually Told (CACI 2330&ndash;2337)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CACI instructions on bad faith are some of the strongest tools in insurance
        litigation. They translate the broad concept of{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>{' '}
        into specific, provable elements.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CACI 2330: What &ldquo;Good Faith&rdquo; Means
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The implied covenant of good faith and fair dealing is explained in CACI 2330. It tells the
        jury that the insurer must not do anything to &ldquo;unfairly interfere with the
        [insured&rsquo;s] right to receive the benefits of the contract.&rdquo; This instruction
        establishes the baseline: the insurer has a duty that goes beyond merely complying with the
        literal terms of the policy. It must deal fairly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CACI 2331: Bad Faith Failure or Delay in Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the instruction that applies to most first-party insurance disputes. The
        policyholder must prove five elements:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>The plaintiff suffered a loss covered under the policy;</li>
        <li>The defendant was notified of the loss;</li>
        <li>The defendant <strong>unreasonably</strong> failed to pay or delayed payment;</li>
        <li>The plaintiff was harmed; and</li>
        <li>The defendant&rsquo;s failure or delay was <strong>a substantial factor</strong> in causing the harm.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The word &ldquo;unreasonably&rdquo; is doing critical work in element three. The insurer
        does not have to be perfect, but it must have a reasonable basis for its actions. If the
        insurer{' '}
        <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
          delays payment
        </Link>{' '}
        without a legitimate reason, that element is satisfied.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CACI 2332: Bad Faith Failure to Investigate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CACI 2332 addresses one of the most common forms of bad faith: the{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] underline">
          failure to conduct a proper investigation
        </Link>
        . The instruction tells the jury that the insurer must conduct a &ldquo;full, fair, prompt,
        and thorough investigation of all of the bases of the plaintiff&rsquo;s claim.&rdquo; Note
        the word <strong>&ldquo;all.&rdquo;</strong> A sloppy, one-sided investigation designed to
        support a denial &mdash; or an investigation that{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
          relies entirely on biased experts
        </Link>{' '}
        hired by the carrier &mdash; fails this standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case law underlying this instruction is powerful. In <em>Egan</em>, the California
        Supreme Court held that an insurer &ldquo;cannot reasonably and in good faith deny payments
        to its insured without fully investigating the grounds for its denial.&rdquo; In{' '}
        <em>Wilson v. 21st Century Ins. Co.</em> (2007) 42 Cal.4th 713, the Court held that what
        the insurer &ldquo;could not do, consistent with the implied covenant of good faith and fair
        dealing, was ignore [the doctor&rsquo;s] conclusions without any attempt at adequate
        investigation, and reach contrary conclusions lacking any discernable medical foundation.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CACI 2333: Bad Faith Failure to Inform Insured of Rights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This instruction is particularly important for policyholders who do not have professional
        representation. CACI 2333 establishes that the insurer has an affirmative duty to inform
        the insured of their rights and obligations under the policy. The instruction derives from{' '}
        <em>Davis v. Blue Cross of Northern California</em> (1979) 25 Cal.3d 418, which held that
        when &ldquo;the insured does not have legal training and whose lack of knowledge may
        potentially result in a loss of benefits or a forfeiture of rights, an insurer [is]
        required to bring to the insured&rsquo;s attention relevant information.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a policyholder had the right to invoke{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal
        </Link>{' '}
        and the insurer never told them, that is a failure under CACI 2333. If the insurer denied a
        claim without explaining the policyholder&rsquo;s right to{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
          file a CDI complaint
        </Link>{' '}
        or to challenge the denial through dispute resolution, that is a failure under CACI 2333.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CACI 2337: Factors for Evaluating the Insurer&rsquo;s Conduct
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This instruction provides the jury with a detailed checklist of conduct that may constitute
        bad faith. It mirrors the prohibited practices listed in{' '}
        <Link href="/resources/insurance-code-790" className="text-[#2E74B5] underline">
          Insurance Code &sect; 790.03
        </Link>{' '}
        and the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>
        . Among the factors the jury may consider:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Misrepresenting relevant facts or policy provisions to the insured</li>
        <li>Failing to acknowledge or act promptly on communications about the claim</li>
        <li>Failing to adopt reasonable standards for prompt investigation and processing</li>
        <li>
          Refusing to pay claims without conducting a reasonable investigation based on all
          available information
        </li>
        <li>Not attempting in good faith to settle when liability is reasonably clear</li>
        <li>
          Compelling the insured to file a lawsuit to recover amounts due under the policy by
          offering substantially less than the amounts ultimately recovered
        </li>
        <li>Requiring unnecessary or duplicative documentation to delay the claim</li>
        <li>
          Delaying resolution of one coverage to influence settlements under other coverages
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This instruction is devastating in front of a jury because it puts concrete, recognizable
        conduct on the table. When the jury hears that the insurer demanded the same information in
        three different forms, or that it sat on a claim for months without communicating, these
        factors give the jury a framework to call that behavior what it is: bad faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Damages for Bad Faith: CACI 2350
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most significant differences between a breach of contract claim and a bad faith
        claim is the scope of damages. CACI 2350 instructs the jury that damages for bad faith must
        include <strong>&ldquo;all harm that was caused by the defendant, even if the particular
        harm could not have been anticipated.&rdquo;</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a much broader standard than breach of contract damages. Under CACI 2350, a jury
        can award:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The full policy benefits</strong> that should have been paid
        </li>
        <li>
          <strong>Attorney&rsquo;s fees</strong> the insured incurred to recover those benefits
          (under <em>Brandt v. Superior Court</em> (1985) 37 Cal.3d 813)
        </li>
        <li>
          <strong>Emotional distress damages</strong> caused by the insurer&rsquo;s bad faith
          conduct
        </li>
        <li>
          <strong>Consequential damages</strong> &mdash; including financial harm caused by the
          delay or denial
        </li>
        <li>
          <strong>Punitive damages</strong> in egregious cases, if the insurer&rsquo;s conduct was
          oppressive, fraudulent, or malicious (see Civil Code &sect; 3294)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For{' '}
        <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] underline">
          elderly or dependent adult policyholders
        </Link>
        , additional enhanced remedies may be available under the Elder Abuse and Dependent Adult
        Civil Protection Act, including automatic attorney&rsquo;s fees and survival actions.
      </p>

      <CalloutBox variant="tip" title="Why Damages Matter Even Before Trial">
        <p>
          Most insurance disputes settle before trial. But the scope of damages available at
          trial shapes every settlement negotiation. When an insurer knows that a jury could award
          not just the unpaid policy benefits but also emotional distress, attorney&rsquo;s fees, and
          potentially punitive damages, the calculus changes. CACI 2350 is the reason bad faith cases
          settle for more than the original claim &mdash; and it is the reason documenting bad faith
          from{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            day one
          </Link>{' '}
          matters.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Examples: How CACI Instructions Apply to Real Insurance Disputes
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 1: The Lowball Offer on a Fire Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner&rsquo;s property is destroyed in a wildfire. The insurance company sends an
        adjuster who prepares a scope of loss that misses half the damage. The insurer makes
        a{' '}
        <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
          lowball settlement offer
        </Link>{' '}
        that is 40% below the actual cost to rebuild. The policyholder hires a Public Adjuster and
        an attorney and eventually sues.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At trial, the jury receives CACI 2300 (breach of contract &mdash; the insurer failed to pay
        the full amount of the covered loss), CACI 2331 (bad faith failure to pay), CACI 2332 (bad
        faith failure to investigate &mdash; the insurer&rsquo;s own adjuster missed half the
        damage), and CACI 2337 (factors including offering substantially less than the amount
        ultimately recovered). Under CACI 2350, the jury can award the unpaid benefits, emotional
        distress, attorney&rsquo;s fees, and potentially punitive damages.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 2: Water Damage and Concurrent Causation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/water-damage-claims" className="text-[#2E74B5] underline">
          pipe bursts
        </Link>{' '}
        in a wall and floods the home. The insurer pays for the water damage but denies coverage for
        resulting{' '}
        <Link href="/resources/mold-losses" className="text-[#2E74B5] underline">
          mold
        </Link>{' '}
        growth, claiming the mold exclusion applies. The policyholder argues the pipe burst was the
        predominant cause, and the mold is an ensuing consequence. At trial, the jury receives CACI
        2306 and is asked: what was the most important or predominant cause of the loss? If the jury
        finds the pipe burst was the predominant cause, the insurer cannot use the mold exclusion
        to deny the entire loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 3: The Insurer Never Told You About Appraisal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder and their insurer disagree on the amount of a{' '}
        <Link href="/resources/roof-damage" className="text-[#2E74B5] underline">
          roof damage claim
        </Link>
        . The policy contains an{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal clause
        </Link>{' '}
        that would allow the dispute to be resolved by independent appraisers, but the insurer
        never mentions it. The policyholder, unaware of this option, accepts a reduced payment.
        Under CACI 2333, the insurer had a duty to inform the policyholder of their rights under
        the policy. The failure to disclose the appraisal option is a separate basis for a bad
        faith claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 4: The Biased Engineer Report
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurer sends a{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-[#2E74B5] underline">
          forensic engineer
        </Link>{' '}
        to inspect storm damage to a roof. The engineer &mdash; who does 90% of their work for
        insurance companies &mdash; writes a report attributing all damage to{' '}
        <Link href="/resources/pre-existing-vs-storm-damage" className="text-[#2E74B5] underline">
          pre-existing wear and tear
        </Link>
        . The insurer relies solely on this report to deny the claim without conducting any
        independent investigation. Under CACI 2332, the insurer failed to conduct a &ldquo;full,
        fair, prompt, and thorough investigation of <strong>all</strong> of the bases of the
        claim.&rdquo; The biased engineer report, standing alone, does not satisfy the insurer&rsquo;s
        duty.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Verdict Forms: How Juries Actually Decide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CACI series also includes model verdict forms (VF-2300 through VF-2304) that walk the
        jury through the elements in a step-by-step, yes-or-no format. For example, VF-2301 (bad
        faith failure to pay) asks:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Did the plaintiff suffer a loss covered under the policy? (Yes/No)</li>
        <li>If yes: Was the defendant notified? (Yes/No)</li>
        <li>If yes: Did the defendant fail to pay or delay payment? (Yes/No)</li>
        <li>If yes: Was the failure or delay unreasonable? (Yes/No)</li>
        <li>If yes: Was the plaintiff harmed? (Yes/No)</li>
        <li>If yes: Was the failure or delay a substantial factor in causing the harm? (Yes/No)</li>
        <li>If yes: What are the plaintiff&rsquo;s damages? ($____)</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        At each step, if the jury answers &ldquo;no,&rdquo; they stop and return a verdict for the
        insurer. If they answer &ldquo;yes&rdquo; to every element, they reach the damages
        question. This structure means that every insurance bad faith case comes down to concrete,
        answerable questions &mdash; and every element is an opportunity for the policyholder to
        present evidence of insurer misconduct.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Means for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need to be a lawyer to benefit from understanding jury instructions. The CACI
        Series 2300 instructions describe, in plain English, what a jury will be asked to decide if
        an insurance dispute goes to trial. Sharing these references with your attorney can help you
        have more informed conversations about your claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document everything.</strong> CACI 2331 requires proof that the insurer
          unreasonably failed to pay or delayed payment. Your attorney may advise you to maintain a
          paper trail of every communication, every missed deadline, and every unfulfilled promise.
          See our guide on{' '}
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] underline">
            writing effective claim letters
          </Link>
          .
        </li>
        <li>
          <strong>Biased investigations matter.</strong> CACI 2332 requires a &ldquo;full, fair,
          prompt, and thorough investigation of <em>all</em> of the bases.&rdquo; If the insurer
          relied on a single{' '}
          <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
            carrier-friendly engineer report
          </Link>{' '}
          and ignored contradictory evidence, discuss with your attorney whether the investigation
          met this standard.
        </li>
        <li>
          <strong>The burden of proof may favor you.</strong> For all-risk policies, the insurer must prove
          the exclusion applies (CACI 2303). The policyholder does not have to prove the exclusion
          does not apply. If the insurer denies a claim based on an{' '}
          <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
            exclusion
          </Link>
          , your attorney may consider whether the insurer has actually met that burden.
        </li>
        <li>
          <strong>Concurrent causation is nuanced.</strong> If a loss involved both covered and
          excluded perils, the question under CACI 2306 is not whether the excluded peril played a
          role, but whether it was the <em>predominant</em> cause. This is an area where legal
          counsel can make a significant difference.
        </li>
        <li>
          <strong>Consider professional help early.</strong> If you see the elements of bad faith
          forming &mdash; unreasonable delay, sloppy investigation, lowball offers &mdash; it may be
          time to consult a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Public Adjuster
          </Link>{' '}
          or{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            insurance attorney
          </Link>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Resources
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The full text of CACI jury instructions is publicly available. These are authoritative
        sources for anyone who wants to read the actual instructions or the case law behind them:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <a
            href="https://courts.ca.gov/partners/california-jury-instructions/civil-jury-instructions-resource-center/civil-jury-instructions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            California Courts &mdash; CACI Jury Instructions (Official)
          </a>{' '}
          &mdash; The Judicial Council of California&rsquo;s official page for the full text of all
          CACI instructions, including Series 2300.
        </li>
        <li>
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=530.&lawCode=INS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Insurance Code &sect; 530 &mdash; Proximate Cause
          </a>{' '}
          &mdash; The statute establishing that the insurer is liable when a covered peril is the
          proximate cause.
        </li>
        <li>
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=532.&lawCode=INS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Insurance Code &sect; 532 &mdash; Excluded Peril Causation
          </a>{' '}
          &mdash; The statute addressing but-for causation when a loss is caused by an excluded
          peril.
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/wex/proximate_cause"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Cornell Law Institute &mdash; Proximate Cause
          </a>{' '}
          &mdash; General legal background on causation standards in civil law.
        </li>
        <li>
          <a
            href="https://www.insurance.ca.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            California Department of Insurance
          </a>{' '}
          &mdash; For filing complaints and understanding the regulatory standards that parallel
          CACI 2337.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Jury Instructions Are Not Legal Advice">
        <p>
          This article explains what CACI jury instructions say and how they apply in insurance
          disputes. It is not legal advice. If you are considering litigation against your insurance
          company, consult with a California{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            insurance litigation attorney
          </Link>{' '}
          who can evaluate the specific facts of your case and advise you on your claims and
          remedies.
        </p>
      </CalloutBox>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
