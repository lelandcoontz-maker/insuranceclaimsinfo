import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Elder Abuse Statutes in Insurance Bad Faith Claims",
  description:
    "When insurers act in bad faith against elderly policyholders, California's Elder Abuse Act triggers attorney's fees, punitive damages, and survival actions.",
  summary:
    'When an insurer acts in bad faith against an elderly or dependent-adult policyholder, California\'s Elder Abuse Act can trigger enhanced remedies, including attorney\'s fees, punitive damages, and survival actions, on top of normal bad-faith damages.',
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

      {/* ───────── Introduction ───────── */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders who have been mistreated by their insurance company know about{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>{' '}
        &mdash; the legal doctrine that holds insurers liable when they unreasonably deny, delay,
        or underpay claims. What most policyholders do not know is that when the person being
        mistreated is an elder or a dependent adult, California law provides a separate and
        significantly more powerful cause of action: the <strong>Elder Abuse and Dependent Adult
        Civil Protection Act</strong>, codified at Welfare and Institutions Code Section 15600
        et seq.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This statute was enacted because the California Legislature recognized that elders and
        dependent adults are particularly vulnerable to financial exploitation &mdash; and that
        existing remedies were often inadequate to deter the conduct or compensate the victims.
        In the insurance context, this means that the same bad faith conduct that might result
        in a standard breach of contract and tort claim against an insurer can, when directed at
        a qualifying policyholder, trigger <strong>enhanced remedies</strong> that are not
        available in ordinary insurance litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders and their families, understanding the Elder Abuse Act is critical. For
        attorneys evaluating insurance bad faith cases involving elderly clients, it can
        transform the economics of the case entirely.
      </p>

      <CalloutBox variant="important" title="Why This Matters">
        <p>
          Elder abuse claims in the insurance context trigger remedies that are otherwise
          difficult or impossible to obtain in standard bad faith litigation &mdash; including
          mandatory attorney&rsquo;s fees, enhanced damages, and the ability for the estate to
          recover damages even if the policyholder dies during litigation. Insurance companies
          know this, and the threat of an elder abuse claim changes the calculus of every
          settlement negotiation.
        </p>
      </CalloutBox>

      {/* ───────── Who Qualifies ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Qualifies for Protection Under the Elder Abuse Act
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statute protects two categories of individuals:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Elders:</strong> Any person who is 65 years of age or older (Welfare &amp;
          Institutions Code &sect; 15610.27). There is no requirement that the person be frail,
          cognitively impaired, or dependent on others. A sharp, independent 68-year-old
          policyholder qualifies just as much as a 90-year-old in assisted living. The only
          criterion is age.
        </li>
        <li>
          <strong>Dependent Adults:</strong> Any person between the ages of 18 and 64 who has
          physical or mental limitations that restrict their ability to carry out normal
          activities or to protect their rights, including persons who have physical or
          developmental disabilities or whose physical or mental abilities have diminished
          because of age (Welfare &amp; Institutions Code &sect; 15610.23). This includes
          individuals admitted to hospitals, assisted living facilities, or other care
          facilities.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Age Is the Only Requirement for Elders">
        <p>
          A common misconception &mdash; one that insurance defense attorneys sometimes try to
          leverage &mdash; is that the policyholder must appear vulnerable, confused, or
          dependent to qualify as an &ldquo;elder&rdquo; under the Act. This is wrong. The
          statute defines &ldquo;elder&rdquo; solely by age: 65 or older. Whether the
          policyholder is a retired judge, a practicing physician, or someone who needs daily
          care assistance, the protections apply equally. The vulnerability is presumed by the
          Legislature &mdash; it does not need to be proven case by case.
        </p>
      </CalloutBox>

      {/* ───────── What Constitutes Elder Abuse in Insurance Context ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Constitutes Elder Abuse in the Insurance Context
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Elder Abuse Act covers several forms of abuse, but the most relevant to insurance
        claims are <strong>financial abuse</strong> (Welfare &amp; Institutions Code
        &sect; 15610.30) and <strong>neglect</strong> (Welfare &amp; Institutions Code
        &sect; 15610.57). In the insurance context, these concepts map directly onto common
        bad faith practices:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Financial Abuse (&sect; 15610.30)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Financial abuse of an elder or dependent adult occurs when a person or entity takes,
        secretes, appropriates, obtains, or retains real or personal property of an elder or
        dependent adult for a wrongful use or with intent to defraud, or both. In the insurance
        context, this can include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Withholding benefits owed under the policy</strong> &mdash; When an insurer
          knows that benefits are due and refuses to pay them, or deliberately delays payment to
          pressure the policyholder into accepting less, the insurer is effectively retaining
          money that belongs to the policyholder. For an elderly policyholder whose home has been
          damaged or destroyed, delayed payment can mean the difference between being able to
          rebuild and being displaced indefinitely.
        </li>
        <li>
          <strong>Lowball settlements designed to take advantage of vulnerability</strong> &mdash; Making
          an initial offer far below the actual value of the claim, knowing that an elderly
          policyholder may lack the energy, resources, or sophistication to fight for more. Many
          elderly policyholders accept inadequate settlements because they cannot endure the
          physical and emotional toll of a prolonged dispute.
        </li>
        <li>
          <strong>Pressuring elderly policyholders to accept inadequate settlements</strong>
          &mdash; Using high-pressure tactics, artificial deadlines, or implied threats that the
          claim will be denied entirely unless the policyholder accepts a lowball offer. This is
          particularly egregious when directed at someone who may be isolated, ill, or
          recovering from a loss.
        </li>
        <li>
          <strong>Confusing or misleading elderly policyholders about their rights</strong>
          &mdash; Burying important information in complex correspondence, using technical jargon
          to obscure what is happening, or failing to clearly explain the basis for a claim
          decision. When this conduct is directed at an elderly policyholder, it can constitute
          financial abuse.
        </li>
        <li>
          <strong>Using complicated processes designed to frustrate the claimant</strong>
          &mdash; Requiring multiple forms, repeated submissions of documentation already
          provided, unnecessary examinations under oath, or other procedural obstacles that
          serve no legitimate purpose but are designed to wear down the policyholder until they
          give up or accept less than they are owed.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Unreasonable Delays as Elder Abuse
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Delay is one of the most common{' '}
        <Link href="/resources/insurance-delay-tactics" className="text-blue-700 underline hover:text-blue-900">
          insurance company tactics
        </Link>
        , and it disproportionately harms elderly policyholders. A 35-year-old policyholder
        who has to wait 18 months for a fair settlement is frustrated and inconvenienced. A
        75-year-old policyholder who has to wait 18 months may never see the resolution of
        their claim. The claims-handling system tends to reward delay in the aggregate &mdash;
        prolonged disputes statistically produce more accepted-under-pressure settlements and,
        with older claimants, a greater likelihood that incapacity or death intervenes before
        resolution. Those outcomes are a function of how the process is designed and measured,
        and they fall hardest on elderly claimants.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When delay is used as a tool against an elderly policyholder, it is not merely bad
        faith &mdash; it is conduct that can constitute elder abuse under the Act, with all
        the enhanced remedies that entails.
      </p>

      {/* ───────── Enhanced Remedies ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Enhanced Remedies: Why Elder Abuse Claims Change Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The real power of the Elder Abuse Act lies in the remedies it provides. In a standard
        insurance{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith case
        </Link>
        , a policyholder can recover the unpaid policy benefits, consequential damages, and
        &mdash; if they can prove oppression, fraud, or malice &mdash; punitive damages. But
        the Elder Abuse Act goes further in several critical ways:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mandatory Attorney&rsquo;s Fees (W&amp;I Code &sect; 15657.5(a))
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a successful financial-abuse action, the court <strong>shall</strong> award reasonable
        attorney&rsquo;s fees and costs. Under &sect; 15657.5(a), this remedy turns on proof of the
        financial abuse by a <strong>preponderance of the evidence</strong> &mdash; the ordinary
        civil standard, not the heightened clear-and-convincing showing that some other remedies
        require. It is not discretionary; it is mandatory.
        In standard bad faith litigation, attorney&rsquo;s fees are generally not recoverable
        unless a specific statute or contract provision provides for them. The availability of
        fee-shifting fundamentally changes the economics of the case: it makes it financially
        viable for attorneys to take cases that might otherwise not justify the investment, and
        it increases the insurer&rsquo;s exposure significantly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pain and Suffering Damages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Elder abuse claims allow recovery for the emotional distress, pain, and suffering
        caused by the abusive conduct. While emotional distress damages are theoretically
        available in bad faith cases as well, the elder abuse framework provides a clearer
        and more direct path to these damages, particularly when the conduct involves financial
        exploitation of a vulnerable person.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Punitive Damages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Punitive damages are available under both standard bad faith and elder abuse theories.
        However, the elder abuse framework can make punitive damages easier to obtain in
        practice because the jury is evaluating the conduct through the lens of its impact on
        a vulnerable person &mdash; conduct that might appear merely aggressive in a commercial
        dispute looks very different when directed at a 78-year-old policyholder whose home
        just burned down.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Survival Action: Damages Do Not Die with the Plaintiff
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most significant remedy unique to elder abuse claims. Under
        California&rsquo;s general survival statute (Code of Civil Procedure &sect; 377.34),
        when a plaintiff dies during litigation, the estate can recover only the economic
        damages that the decedent would have been entitled to &mdash; pain and suffering
        damages generally die with the plaintiff. (SB 447 temporarily allowed pre-death
        pain-and-suffering recovery in general survival actions for cases filed January 1,
        2022 through December 31, 2025, but that window has now closed and &sect; 377.34
        has reverted to its longstanding economic-damages-only rule.) But under the Elder
        Abuse Act (Welfare &amp; Institutions Code &sect; 15657.5(b)), where the plaintiff proves
        the financial abuse by a preponderance of the evidence <em>and</em> proves by clear and
        convincing evidence that the defendant acted with recklessness, oppression, fraud, or
        malice, the &sect; 377.34 limitation is lifted and the decedent&rsquo;s estate can
        recover <strong>all damages that the decedent would have been entitled to</strong>,
        including pain and suffering and punitive damages &mdash; making the &sect; 15657.5(b)
        survival advantage materially more valuable now that the SB 447 window has expired.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies understand the significance of this provision. In standard bad
        faith litigation, if the elderly policyholder dies before trial, much of the
        insurer&rsquo;s exposure evaporates. The elder abuse survival action removes that
        incentive entirely &mdash; meaning the insurer cannot benefit from delay that results
        in the policyholder&rsquo;s death. This is a powerful deterrent against the very delay
        tactics that disproportionately harm elderly claimants.
      </p>

      <CalloutBox variant="warning" title="The Survival Action Changes Settlement Dynamics">
        <p>
          In a standard bad faith case, the economics of delay can cut against an elderly
          claimant: because pain-and-suffering damages generally do not survive the plaintiff,
          the potential exposure shrinks the longer a case involving an aging claimant remains
          unresolved. That is a structural feature of how survival law prices these claims, not a
          judgment about any individual adjuster&rsquo;s intent &mdash; but it is an incentive the
          system creates. The elder abuse survival action removes that structural discount. When
          a financial-abuse claim is properly pled, the full range of damages survives the
          policyholder&rsquo;s death, which can meaningfully change settlement dynamics.
        </p>
      </CalloutBox>

      {/* ───────── The Legal Standard ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Standards: Two Different Burdens
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The financial-abuse remedies under the Act operate on two distinct burdens, and courts
        appear to treat them separately. Under Welfare &amp; Institutions Code
        &sect; 15657.5(a), the mandatory award of attorney&rsquo;s fees and costs requires only
        that the plaintiff prove the financial abuse itself by a <strong>preponderance of the
        evidence</strong> &mdash; the ordinary civil standard. The heightened showing enters at
        &sect; 15657.5(b): to lift the &sect; 377.34 limitation and reach the survival
        enhancement, the plaintiff must additionally prove by <strong>clear and convincing
        evidence</strong> that the defendant acted with &ldquo;recklessness, oppression, fraud,
        or malice.&rdquo; Conflating the two &mdash; treating the clear-and-convincing standard
        as a gate on the fee award &mdash; overstates what &sect; 15657.5(a) requires. The
        clear-and-convincing recklessness standard is higher than ordinary negligence but is
        generally understood to be a standard that systematic insurer misconduct can meet.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Recklessness&rdquo; in this context means a deliberate disregard of the high
        degree of probability that the conduct will cause harm to the elder. When an insurance
        company has a pattern and practice of delaying claims, lowballing settlements, or using
        procedural obstacles to wear down claimants &mdash; and when the company knows or
        should know that this conduct is being directed at elderly policyholders &mdash; the
        recklessness standard can be met.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider: when an adjuster knows the policyholder is 80 years old, knows the claim
        has been pending for a year, knows the policyholder is living in temporary housing,
        and still issues a lowball offer designed to pressure a quick settlement &mdash; that
        is not mere negligence. That is conduct undertaken with knowledge that it will cause
        harm to a vulnerable person. That is the kind of conduct the Elder Abuse Act was
        designed to address.
      </p>

      {/* ───────── Key Case Law ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Case Law: Elder Abuse in the Insurance Context
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether an insurer&rsquo;s claims handling can support an elder financial abuse claim
        remains a <strong>contested</strong> theory rather than settled law. The leading published
        insurance decision, <em>Paslay v. State Farm</em> (discussed below), rejected the elder
        abuse claim on genuine-dispute grounds &mdash; the insurer prevailed. Plaintiffs continue
        to argue that reckless or knowing withholding of clearly owed benefits from an elderly
        policyholder can constitute financial abuse under the Act, but the reported case law to
        date has been cautious, and outcomes are highly fact-dependent.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Recklessness Standard in Practice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Delaney v. Baker</em> (1999) 20 Cal.4th 23, the California Supreme Court
        clarified the standard for enhanced remedies under the Elder Abuse Act. The Court held
        that the plaintiff must show by clear and convincing evidence that the defendant was
        guilty of &ldquo;recklessness, oppression, fraud, or malice in the commission of
        [the] abuse.&rdquo; The Court emphasized that &ldquo;recklessness&rdquo; refers to a
        subjective state of culpability greater than simple negligence &mdash; a deliberate
        disregard of a high degree of probability that harm will result. This standard, while
        meaningful, is regularly met in cases involving systematic insurer misconduct.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Corporate Liability and the Managing Agent Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For enhanced remedies against a corporate defendant like an insurance company, the
        plaintiff must show that an officer, director, or managing agent of the corporation
        was involved in the abuse, authorized or ratified it, or was personally guilty of
        oppression, fraud, or malice (Civil Code &sect; 3294(b)). In practice, this means
        establishing that the claims handling decisions were made or approved at a supervisory
        level &mdash; which is often demonstrable when the insurer has company-wide policies
        or practices that systematically disadvantage elderly claimants.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Covenant Care, Inc. v. Superior Court</em> (2004) 32 Cal.4th 771, the
        California Supreme Court analyzed the &ldquo;neglect&rdquo; theory of elder abuse
        under W&amp;I Code &sect; 15610.57, distinguishing it from professional negligence
        and discussing the standard for enhanced &sect; 15657 remedies in a custodial-care
        context. The &ldquo;responsible for meeting basic needs&rdquo; formulation that
        appears in <em>Covenant Care</em> tracks the statutory definition of <em>neglect</em>
        in &sect; 15610.57 specifically &mdash; it is not a universal element of every elder
        abuse claim. <em>Financial</em> abuse claims under &sect; 15610.30 follow that
        statute&rsquo;s separate elements (taking, secreting, appropriating, obtaining, or
        retaining property for a wrongful use or with intent to defraud), and do not require
        proof that the defendant was responsible for the elder&rsquo;s basic needs in the
        custodial sense.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Financial Abuse in the Insurance Context
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The financial abuse provision of the Elder Abuse Act (&sect; 15610.30) has been tested in
        the insurance context, but the leading published decision cut <em>against</em> the
        policyholder. In <em>Paslay v. State Farm General Ins. Co.</em> (2016) 248 Cal.App.4th
        639, the Court of Appeal <strong>affirmed summary judgment for State Farm on both the bad
        faith and the elder abuse causes of action</strong>, applying the genuine dispute doctrine;
        only the breach of contract claim was revived for trial. The court reasoned that, under
        &sect; 15610.30(b), wrongful conduct occurs only where the insurer actually knows &mdash;
        or reasonably should be aware &mdash; that it is engaging in a harmful breach, and it found
        no evidence State Farm acted in subjective bad faith in denying the disputed benefits.
        <em> Paslay</em> is therefore a cautionary precedent for policyholders: it shows that an
        elder abuse claim against an insurer can be defeated on the same genuine-dispute grounds
        that defeat a bad faith claim. The argument that knowing, reckless withholding of clearly
        owed benefits from an elderly policyholder can constitute financial abuse remains available
        &mdash; but it is contested, and a plaintiff must be prepared to overcome the
        genuine-dispute defense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Das v. Bank of America, N.A.</em> (2010) 186 Cal.App.4th 727, the court
        addressed what constitutes &ldquo;wrongful use&rdquo; under &sect; 15610.30. <em>Das</em>
        is a defense-oriented decision that <em>limits</em> financial elder abuse liability for
        neutral financial intermediaries: it held that routine, authorized banking transactions
        do not constitute &ldquo;wrongful use&rdquo; absent evidence that the defendant
        <em> knew or should have known</em> the transactions were wrongful as to the elder.
        The principle that follows from <em>Das</em> for the insurance context is the converse
        of how it cuts against banks: where an insurer <em>knows</em> benefits are owed and
        nonetheless retains them, the knowledge element <em>Das</em> identified is satisfied.
        That is essentially the same knowledge element a bad-faith claim already requires.
        <em> Das</em> therefore does not lower the bar for elder financial abuse against
        insurers &mdash; it reinforces that the plaintiff must prove the insurer knew or
        should have known its conduct was wrongful as to the elder.
      </p>

      {/* ───────── When to Assert Elder Abuse ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When and How to Assert Elder Abuse in an Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Asserting elder abuse is not just a litigation strategy &mdash; it can and should be
        raised during the claims process itself. The earlier the insurer knows that its
        conduct may give rise to elder abuse liability, the more likely it is to change
        course.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        During Claim Negotiations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When negotiating a claim on behalf of an elderly policyholder, the policyholder&rsquo;s
        representative &mdash; whether a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or an attorney &mdash; should ensure the insurer is aware of the policyholder&rsquo;s
        age and any vulnerabilities. This is not about playing a sympathy card; it is about
        putting the insurer on notice that its conduct will be evaluated through the lens of
        the Elder Abuse Act. An insurer that knows enhanced remedies are in play will think
        twice before engaging in the delay tactics, lowball offers, and procedural obstacles
        that might otherwise be standard operating procedure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        In Demand Letters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A demand letter that formally asserts a statutory elder abuse cause of action is legal
        advocacy, and it is generally best drafted and sent by (or through) the policyholder&rsquo;s
        attorney rather than a non-lawyer representative. Where a{' '}
        <Link href="/resources/claim-negotiation-letters" className="text-blue-700 underline hover:text-blue-900">
          demand letter
        </Link>{' '}
        is prepared through counsel on behalf of an elderly policyholder, it will typically
        reference the Elder Abuse and Dependent Adult Civil Protection Act (Welfare &amp;
        Institutions Code &sect; 15600 et seq.) and identify the specific conduct that may
        constitute elder financial abuse under &sect; 15610.30. The letter can point to the
        enhanced remedies potentially available under &sect; 15657.5 &mdash; including mandatory
        attorney&rsquo;s fees and the survival enhancement &mdash; so that the insurer&rsquo;s
        claims department and legal team confront the potential exposure in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Filing a CDI Complaint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When filing a complaint with the California Department of Insurance, specifically note
        the policyholder&rsquo;s elder or dependent adult status. The CDI takes complaints
        involving vulnerable populations seriously, and identifying the policyholder as an
        elder puts additional regulatory pressure on the insurer. See our guide on{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-blue-700 underline hover:text-blue-900">
          filing a CDI complaint
        </Link>{' '}
        for the step-by-step process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When to Involve an Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an insurance company is engaging in conduct that may constitute elder abuse &mdash;
        systematic delays, lowball offers, pressure tactics, or withholding of benefits &mdash;
        and the policyholder is 65 or older (or a qualifying dependent adult), it is critical
        to consult with an attorney who has experience with both insurance bad faith and elder
        abuse litigation. These cases require specific pleading, specific evidence, and a
        specific litigation strategy. A Public Adjuster can identify the conduct and build the
        claims file, but the legal claims require an attorney. See our guide on{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
          when to hire an insurance claim attorney
        </Link>
        .
      </p>

      {/* ───────── The 790 / Fair Claims Connection ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Connection to Unfair Claims Practices
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California{' '}
        <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
          Insurance Code &sect; 790.03
        </Link>{' '}
        prohibits a range of unfair claims settlement
        practices, including misrepresenting policy provisions, failing to acknowledge
        communications promptly, failing to adopt reasonable standards for investigating
        claims, and not attempting in good faith to reach a fair and equitable settlement when
        liability is reasonably clear. The{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          Fair Claims Settlement Practices Regulations (10 CCR 2695)
        </Link>{' '}
        implement these prohibitions with specific, detailed requirements for how insurers
        must handle claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When these unfair practices are directed at elderly or dependent adult policyholders,
        the regulatory violations become evidence supporting the elder abuse claim. A pattern
        of violating the Fair Claims Settlement Practices Regulations &mdash; failing to meet
        statutory deadlines, failing to provide written explanations for claim decisions,
        failing to conduct adequate investigations &mdash; when directed at an elderly
        policyholder, demonstrates the reckless disregard for the elder&rsquo;s rights that
        the Elder Abuse Act requires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In other words, the same regulatory violations that would support a bad faith claim
        also serve as evidence of elder abuse when the policyholder is 65 or older. The
        conduct is the same &mdash; but the remedies are dramatically enhanced. Every
        regulatory violation documented in the claims file becomes a building block for the
        elder abuse cause of action.
      </p>

      {/* ───────── Bad Faith Connection ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Elder Abuse and Bad Faith: Complementary Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Elder abuse and{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          insurance bad faith
        </Link>{' '}
        are not alternative theories &mdash; they are complementary claims that should be
        asserted together when the facts support both. The bad faith claim addresses the
        insurer&rsquo;s breach of the implied covenant of good faith and fair dealing. The
        elder abuse claim addresses the enhanced culpability of directing that same misconduct
        at a vulnerable person.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a claim involving a 72-year-old policyholder whose home was destroyed in a
        wildfire. The insurer delays the investigation for six months, issues a lowball
        estimate that covers only 60% of the actual rebuilding cost, refuses to pay adequate
        additional living expenses while the policyholder lives in a hotel, and then pressures
        the policyholder to accept a settlement by implying that a &ldquo;take it or leave
        it&rdquo; offer is the insurer&rsquo;s final position. This conduct supports:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Breach of contract</strong> &mdash; The insurer failed to pay the benefits
          owed under the policy.
        </li>
        <li>
          <strong>Breach of the implied covenant of good faith and fair dealing</strong> &mdash;
          The delay, lowballing, and pressure tactics were unreasonable.
        </li>
        <li>
          <strong>Violation of Insurance Code &sect; 790.03</strong> &mdash; The insurer violated
          multiple unfair claims practices statutes.
        </li>
        <li>
          <strong>Elder financial abuse under Welfare &amp; Institutions Code
          &sect; 15610.30</strong> &mdash; The insurer withheld benefits and used pressure tactics
          against an elderly policyholder with reckless disregard for the harm caused.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each cause of action adds a layer of liability. But it is the elder abuse claim that
        triggers the mandatory attorney&rsquo;s fees, the enhanced survival action, and the
        additional leverage in settlement negotiations. For cases involving elderly
        policyholders, this fourth cause of action can be the most important one in the
        complaint.
      </p>

      {/* ───────── Documenting the Claim ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting the Elder Abuse Claim: Building the Record
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        As with any insurance dispute, the strength of an elder abuse claim depends on the
        quality of the documentation. When handling a claim for an elderly policyholder, it is
        essential to build the record from day one:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Document the policyholder&rsquo;s age and status</strong> &mdash; Ensure that
          every communication with the insurer identifies the policyholder as an elder (65+).
          This puts the insurer on notice that the Elder Abuse Act applies.
        </li>
        <li>
          <strong>Document every delay</strong> &mdash; Keep a detailed timeline of every
          communication, every missed deadline, every unanswered phone call. The{' '}
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            Fair Claims Settlement Practices Regulations
          </Link>{' '}
          impose specific deadlines on insurers. Every violation is evidence.
        </li>
        <li>
          <strong>Document the impact on the policyholder</strong> &mdash; Record how the
          insurer&rsquo;s conduct is affecting the elderly policyholder: physical health
          deterioration, emotional distress, displacement from home, financial hardship,
          isolation from community. The human cost of the insurer&rsquo;s conduct is central
          to the elder abuse claim.
        </li>
        <li>
          <strong>Preserve all written communications</strong> &mdash; Every letter, email, and
          text message between the policyholder (or their representative) and the insurer
          becomes evidence. Follow up every phone call with a written summary sent to the
          adjuster confirming what was discussed.
        </li>
        <li>
          <strong>Document lowball tactics</strong> &mdash; When the insurer makes an offer,
          document not just the number but the circumstances: Was the offer presented as
          &ldquo;final&rdquo;? Was there pressure to accept quickly? Was the basis for the
          offer explained? Did the insurer{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-blue-700 underline hover:text-blue-900">
            adjuster
          </Link>{' '}
          know the policyholder&rsquo;s age and circumstances?
        </li>
        <li>
          <strong>Obtain medical records if relevant</strong> &mdash; If the insurer&rsquo;s
          conduct has caused or exacerbated health problems for the elderly policyholder,
          medical records documenting the decline become powerful evidence of damages.
        </li>
      </ul>

      {/* ───────── Practical Considerations ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Considerations for Families and Representatives
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many elderly policyholders do not handle their own insurance claims. Adult children,
        spouses, trustees, or other representatives often manage the claim on their behalf.
        If you are handling a claim for an elderly family member, keep the following in mind:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Get proper authorization</strong> &mdash; Ensure you have a signed
          authorization (or power of attorney) allowing you to communicate with the insurer
          on the policyholder&rsquo;s behalf. Insurers may refuse to speak with unauthorized
          representatives.
        </li>
        <li>
          <strong>Do not let the insurer bypass you</strong> &mdash; If you are the authorized
          representative, insist that all communications go through you. Some adjusters will
          attempt to contact the elderly policyholder directly, hoping to obtain statements or
          settlements without the representative&rsquo;s involvement.
        </li>
        <li>
          <strong>Be aware of cognitive changes</strong> &mdash; Even policyholders who are
          generally sharp may have moments of confusion or may be more susceptible to pressure
          when stressed. If the insurer insists on an{' '}
          <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
            examination under oath
          </Link>
          , ensure the policyholder is represented and prepared.
        </li>
        <li>
          <strong>Act promptly</strong> &mdash; Statutes of limitations for elder abuse
          claims depend on the theory pled. By its own terms, the Elder Abuse Act&rsquo;s
          four-year limitations period at W&amp;I Code &sect; 15657.7 governs actions for damages
          for financial abuse under <em>both</em> &sect; 15657.5 <em>and</em> &sect; 15657.6,
          running from when the plaintiff discovered or, through reasonable diligence, should
          have discovered the facts constituting the financial abuse. (Physical abuse and
          neglect claims sit outside &sect; 15657.7 and are generally subject to the general
          two-year personal-injury statute at Code of Civil Procedure &sect; 335.1, or
          MICRA&rsquo;s special rules in the medical-malpractice context.) Other deadlines &mdash;
          including policy suit-limitation clauses on the underlying insurance claim &mdash;
          may also apply. Statutes of limitations involve complex legal analysis. Consult a
          licensed attorney to determine the applicable deadline. Do not wait.
        </li>
      </ul>

      {/* ───────── What to Do Right Now ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If You Suspect Elder Abuse in an Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe that an insurance company is engaging in conduct that may constitute
        elder abuse &mdash; whether through unreasonable delay, pressure tactics, lowball
        offers, or outright denial of benefits owed to an elderly or dependent adult
        policyholder &mdash; take these steps:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Document everything</strong> &mdash; Keep a detailed log of all
          communications, deadlines, offers, and the impact on the policyholder.
        </li>
        <li>
          <strong>Put the insurer on notice</strong> &mdash; In writing, identify the
          policyholder as an elder (stating their age) and reference the Elder Abuse and
          Dependent Adult Civil Protection Act. This alone can change the insurer&rsquo;s
          behavior.
        </li>
        <li>
          <strong>File a CDI complaint</strong> &mdash; Note the policyholder&rsquo;s elder
          status in the complaint. The{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="text-blue-700 underline hover:text-blue-900">
            CDI complaint process
          </Link>{' '}
          creates a regulatory record.
        </li>
        <li>
          <strong>Consult with an attorney</strong> &mdash; An attorney experienced in elder
          abuse and insurance bad faith can evaluate the facts, determine whether the enhanced
          remedies are available, and pursue the claim aggressively.
        </li>
        <li>
          <strong>Consider hiring a Public Adjuster</strong> &mdash; A{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            licensed Public Adjuster
          </Link>{' '}
          can manage the day-to-day claims process, build the documentation, and work alongside
          an attorney to maximize the recovery.
        </li>
      </ol>

      {/* ───────── Disclaimer ───────── */}
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Nothing in this article should be construed as a legal opinion or as a
          substitute for consultation with a qualified attorney. The Elder Abuse and Dependent
          Adult Civil Protection Act, the case law discussed, and the remedies described reflect
          California law as of the date of publication. Elder abuse claims in the insurance
          context are legally complex and fact-specific &mdash; the availability of enhanced
          remedies depends on the specific circumstances of each case. Always consult with a
          licensed attorney experienced in California elder abuse and insurance bad faith
          litigation before pursuing legal claims.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is Your Elderly Family Member Being Mistreated by an Insurance Company?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Insurance companies that engage in bad faith against elderly policyholders face
          enhanced liability under California&rsquo;s Elder Abuse Act. A Licensed Public
          Adjuster can help document the misconduct and build the record needed to hold
          the insurer accountable.
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
