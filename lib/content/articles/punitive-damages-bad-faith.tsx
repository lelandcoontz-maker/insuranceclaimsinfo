import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Punitive Damages in California Insurance Bad Faith Cases",
  description:
    "When and how punitive damages are available in California insurance bad faith cases, including the legal standards under Civil Code section 3294, landmark cases like Neal v. Farmers and Egan v. Mutual of Omaha, constitutional limits, the managing agent requirement, and the practical settlement leverage a viable punitive damages claim creates.",
  summary:
    'Punitive damages in a California bad-faith case require clear and convincing proof of malice, oppression, or fraud under Civil Code 3294, plus a managing agent\'s involvement. Cases like Neal and Egan show the standard, and a viable claim creates strong settlement leverage.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance disputes are about money. The insurer underpaid. The estimate is wrong.
        A coverage was overlooked. Those disputes can be resolved through negotiation, appraisal,
        or litigation over contract damages. But some disputes are about something worse than
        money &mdash; they are about <em>how</em> the insurer behaved. When an insurance
        company&rsquo;s conduct crosses the line from mere unreasonableness into something
        willful, despicable, or fraudulent, California law provides a remedy that goes beyond
        compensating the policyholder for what was lost. That remedy is punitive damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Punitive damages &mdash; also called exemplary damages &mdash; exist to punish the
        wrongdoer and deter similar conduct in the future. In the insurance context, they serve
        a critical function: they are the mechanism by which juries tell insurance companies
        that certain conduct will not be tolerated, no matter how many premiums the company
        collects. Without the threat of punitive damages &mdash; on top of contract damages,
        tort damages, emotional distress, Brandt fees, and prejudgment interest &mdash; the
        economic incentive for an insurer to systematically underpay claims would be
        substantially greater.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains when punitive damages are available in California insurance bad
        faith cases, what standards must be met, how they are calculated, and what they mean
        in practice for policyholders and their attorneys.
      </p>

      <CalloutBox variant="tip" title="The Short Version">
        <p>
          Punitive damages in California insurance bad faith cases require proof by clear and
          convincing evidence that the insurer acted with malice, oppression, or fraud under
          Civil Code section 3294. The conduct must be &ldquo;despicable&rdquo; &mdash; not
          merely unreasonable, but willful, conscious, and egregious. You must also show that
          an officer, director, or managing agent of the insurer authorized or ratified the
          conduct. While punitive damages are rarely awarded at trial, a viable punitive damages
          claim creates enormous settlement leverage because the potential exposure dwarfs the
          contract damages at stake.
        </p>
      </CalloutBox>

      {/* ── The Legal Foundation ──────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Legal Foundation: Civil Code Section 3294
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s punitive damages statute is Civil Code section 3294. It provides
        that in an action for breach of an obligation not arising from contract, a plaintiff
        may recover damages &ldquo;for the sake of example and by way of punishing the
        defendant&rdquo; where the defendant has been guilty of oppression, fraud, or malice.
        The plaintiff must prove this by <strong>clear and convincing evidence</strong> &mdash;
        a standard significantly higher than the preponderance of the evidence standard that
        applies to most civil claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statute defines each of the three grounds:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Malice:</strong> Conduct intended to cause injury to the plaintiff, or
          &ldquo;despicable conduct which is carried on by the defendant with a willful and
          conscious disregard of the rights or safety of others.&rdquo;
        </li>
        <li>
          <strong>Oppression:</strong> &ldquo;Despicable conduct that subjects a person to
          cruel and unjust hardship in conscious disregard of that person&rsquo;s rights.&rdquo;
        </li>
        <li>
          <strong>Fraud:</strong> &ldquo;An intentional misrepresentation, deceit, or
          concealment of a material fact known to the defendant with the intention on the
          part of the defendant of thereby depriving a person of property or legal rights
          or otherwise causing injury.&rdquo;
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The word &ldquo;despicable&rdquo; is doing significant work in these definitions. It
        was added by the Legislature in 1987 to raise the bar for punitive damages. Courts
        have interpreted it to mean conduct that is &ldquo;so vile, base, contemptible,
        miserable, wretched or loathsome that it would be looked down upon and despised by
        ordinary decent people.&rdquo; In insurance cases, this means that a mere
        disagreement over the value of a claim &mdash; even an unreasonable one &mdash; is
        generally not enough. Something more is required: a pattern of willful disregard, a
        conscious decision to harm the policyholder, or a fraudulent scheme to avoid paying
        what is owed.
      </p>

      {/* ── Neal v. Farmers ──────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Breakthrough: <em>Neal v. Farmers Insurance Exchange</em> (1978)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court first authorized punitive damages in an insurance bad
        faith case in <em>Neal v. Farmers Insurance Exchange</em> (1978) 21 Cal.3d 910. The
        case involved Frances Neal, who was severely injured by an uninsured motorist. She
        filed a claim under the uninsured motorist provisions of her Farmers policy. Farmers
        refused to settle the claim fairly, instead using Mrs. Neal&rsquo;s desperate financial
        circumstances &mdash; she was seriously injured and needed the money to survive &mdash;
        as leverage to force a settlement far below the claim&rsquo;s value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Supreme Court found substantial evidence from which the jury could have concluded
        that Farmers &ldquo;acted maliciously, with an intent to oppress, and in conscious
        disregard of the rights of its insured.&rdquo; Critically, the Court found that
        Farmers&rsquo; conduct was not an isolated mistake by a rogue adjuster. It was, in the
        Court&rsquo;s words, &ldquo;a conscious course of conduct, firmly grounded in
        established company policy, designed to utilize the lamentable circumstances in which
        Mrs. Neal and her family found themselves, and the exigent financial situation resulting
        from it, as a lever to force a settlement more favorable to the company.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The jury returned a verdict of $1,548,211.35. The trial court reduced it to
        $749,011.48. The Supreme Court upheld the award. <em>Neal</em> established three
        principles that still govern today: (1) punitive damages are available in insurance
        bad faith cases; (2) the insurer&rsquo;s conduct must rise to the level of malice,
        oppression, or fraud; and (3) the availability of punitive damages reflects the
        special relationship between insurer and insured &mdash; a relationship in which the
        insurer holds vastly superior bargaining power.
      </p>

      {/* ── Egan v. Mutual of Omaha ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Landmark: <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Just one year after <em>Neal</em>, the California Supreme Court decided{' '}
        <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809 &mdash; arguably
        the most important punitive damages case in California insurance law. Michael Egan
        had received disability benefits for three prior back injuries arising out of his
        employment. When he submitted a fourth claim in May 1970 for an accidental back injury,
        Mutual of Omaha denied the claim &mdash; asserting that the condition was an illness
        rather than a permanent disability &mdash; without conducting a fair investigation of
        the supporting medical evidence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The jury found bad faith and awarded $45,600 in contract damages, $78,000 in general
        damages, and $5 million in punitive damages against Mutual of Omaha. The California
        Supreme Court&rsquo;s actual disposition was nuanced: it affirmed the compensatory
        damages and the underlying legal holdings on bad-faith liability, but{' '}
        <strong>reversed the $5 million punitive damages award as excessive as a matter of
        law</strong> &mdash; finding it more than forty times the compensatory damages and
        &ldquo;the result of passion and prejudice.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What survives <em>Egan</em> as binding precedent are the legal holdings, not the
        dollar figure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          An insurer <strong>cannot reasonably deny a claim without first conducting a
          thorough investigation</strong>. The duty to investigate exists independently of
          the outcome &mdash; even if the claim turns out to be invalid, the insurer can
          be liable for bad faith if it did not investigate adequately before denying it.
        </li>
        <li>
          The relationship between insurer and insured is &ldquo;inherently
          unbalanced&rdquo; &mdash; the adhesive nature of insurance contracts places the
          insurer in a superior bargaining position. Punitive damages help restore balance.
        </li>
        <li>
          The court addressed the &ldquo;managing agent&rdquo; question in the insurance
          context, holding that a claims adjuster who had the authority to{' '}
          &ldquo;dispose of insureds&rsquo; claims with little if any supervision&rdquo;
          was acting in a &ldquo;managerial capacity&rdquo; under the pre-1980 standard.
          The California Supreme Court refined this test two decades later in{' '}
          <em>White v. Ultramar, Inc.</em> (1999) 21 Cal.4th 563, narrowing &ldquo;managing
          agent&rdquo; under Civil Code &sect; 3294(b) to corporate employees whose
          decisions &ldquo;ultimately determine corporate policy.&rdquo; Under the modern
          test, regional claims managers and above are typically the focus, though the
          analysis remains fact-specific. See our companion article on{' '}
          <Link href="/resources/managing-agent-punitive-damages" className="text-blue-700 underline hover:text-blue-900">
            managing agent liability and punitive damages
          </Link>{' '}
          for the detailed framework.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Egan</em> remains the starting point for any discussion of bad-faith liability
        and punitive damages in California insurance litigation. Its holding that an
        insurer&rsquo;s failure to investigate is independently actionable has been cited in
        hundreds of subsequent decisions. The $5 million dollar amount, by contrast, is not
        precedent for any particular punitive damages ceiling &mdash; that figure was held
        excessive and reversed.
      </p>

      {/* ── The Managing Agent Requirement ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Managing Agent Requirement: Civil Code Section 3294(b)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most significant hurdles in seeking punitive damages against an insurance
        company is the &ldquo;managing agent&rdquo; requirement of Civil Code section 3294(b).
        Because insurance companies are corporations that act through employees, the statute
        requires that the plaintiff show the wrongful conduct was authorized, ratified, or
        committed by an &ldquo;officer, director, or managing agent&rdquo; of the corporation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a mere formality. It means that proving an individual claims adjuster
        acted badly is not enough by itself. The plaintiff must connect the conduct to someone
        with enough authority that their actions can be treated as the actions of the company
        itself. The Legislature intended the term &ldquo;managing agent&rdquo; to include
        &ldquo;only those corporate employees who exercise substantial independent authority
        and judgment in their corporate decision making so that their decisions ultimately
        determine corporate policy.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Who Qualifies as a Managing Agent?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The determination does not turn on an employee&rsquo;s job title. It turns on the
        degree of discretion the employee exercises in making decisions that determine
        corporate policy. In the insurance context, courts have found that:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          In <em>Egan</em>, the Supreme Court held that both a claims manager and a claims
          adjuster who had authority to dispose of claims with little supervision were acting
          in a &ldquo;managerial capacity.&rdquo;
        </li>
        <li>
          In <em>Mazik v. GEICO General Insurance Co.</em> (2019) 35 Cal.App.5th 455, the
          Court of Appeal held that a regional liability administrator who had &ldquo;wide
          regional authority over the settlement of claims&rdquo; &mdash; with over 100
          claims adjusters funneled up to him for settlement approval &mdash; was a
          &ldquo;managing agent&rdquo; whose ratification of bad faith conduct supported
          punitive damages.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical implication: plaintiffs must conduct targeted discovery early in
        litigation to identify the individuals within the insurer&rsquo;s hierarchy who
        made or approved the key claim-handling decisions. This means deposing not just the
        assigned adjuster, but the supervisors, managers, and regional leaders who set the
        policies under which the adjuster operated. If the adjuster was following company
        protocol, the question becomes: who created that protocol? If the adjuster&rsquo;s
        decision was reviewed and approved by a supervisor, was that supervisor a managing
        agent?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Ratification as an Alternative Path
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the initial wrongful conduct was committed by a low-level adjuster, punitive
        damages can still be available if a managing agent later <strong>ratified</strong>{' '}
        that conduct. Under <em>Cruz v. HomeBase</em> (2000) 83 Cal.App.4th 160, ratification
        requires that the officer, director, or managing agent had{' '}
        <strong>actual knowledge</strong> of the misconduct and its malicious character,
        and either explicitly approved it or failed to repudiate it after learning of it. In
        the insurance claims context, this requires more than routine supervisory review; the
        plaintiff must show the managing agent knew the underlying facts that made the
        adjuster&rsquo;s handling improper. Mere approval of a file in the ordinary course
        is not, by itself, ratification.
      </p>

      {/* ── What Conduct Triggers Punitive Damages ────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Conduct Triggers Punitive Damages in Insurance Cases
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every bad faith claim supports punitive damages. The conduct must cross the line
        from unreasonable to despicable. Courts have found the following types of conduct
        sufficient to support punitive damages awards:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Systematic denial patterns:</strong> Institutionalized practices designed
          to underpay or deny claims as a matter of corporate policy, rather than based on
          individual claim evaluation. As noted in <em>Mock v. Michigan Millers Mutual
          Insurance Co.</em> (1992) 4 Cal.App.4th 306, there is &ldquo;a greater chance for
          an award of punitive damages where there are established policies or practices
          in claims handling which are harmful to insureds.&rdquo;
        </li>
        <li>
          <strong>Ignoring evidence that supports the claim:</strong> Selectively relying
          on facts that support denial while disregarding facts that support coverage. As the
          Court of Appeal stated in <em>Mazik</em>, &ldquo;An insurer is not permitted to
          rely selectively on facts that support its position and ignore those facts that
          support a claim. Doing so may constitute bad faith. When sufficiently egregious,
          an insurer&rsquo;s intentional disregard of facts supporting a claim also meets
          the standard for punitive damages.&rdquo;
        </li>
        <li>
          <strong>Failure to investigate:</strong> Denying a claim without conducting a
          thorough, fair, and objective investigation &mdash; particularly where the insurer
          ignores or discounts the insured&rsquo;s own evidence and medical records, as in{' '}
          <em>Egan</em>.
        </li>
        <li>
          <strong>Exploiting policyholder vulnerability:</strong> Using the insured&rsquo;s
          financial distress, health crisis, or disaster circumstances as leverage to force
          an unfavorable settlement, as in <em>Neal</em>.
        </li>
        <li>
          <strong>Unreasonable delay:</strong> Dragging out the claims process with endless
          requests for redundant documentation, repeated inspections, or unexplained periods
          of inactivity &mdash; not to investigate the claim, but to wear the policyholder
          down into accepting less than what is owed.
        </li>
        <li>
          <strong>Misrepresenting policy provisions:</strong> Telling the policyholder that
          their policy does not cover a loss when it does, or mischaracterizing exclusions
          to avoid paying a covered claim.
        </li>
        <li>
          <strong>Retaliating against policyholders:</strong> Taking adverse action &mdash;
          such as canceling a policy or referring the claim to the Special Investigations
          Unit without a good-faith basis &mdash; in response to the policyholder asserting
          their rights, hiring a public adjuster, or retaining an attorney.
        </li>
        <li>
          <strong>Using &ldquo;cherry-picked&rdquo; data:</strong> Relying on selectively
          chosen comparable sales, estimates, or expert reports while ignoring contradictory
          data that would support a higher valuation.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Institutional Practice vs. Individual Error">
        <p>
          The distinction between an individual adjuster&rsquo;s mistake and an
          institutional practice matters enormously. A single adjuster who makes a bad
          judgment call may expose the insurer to compensatory bad faith damages, but
          punitive damages become far more likely when the evidence shows that the
          adjuster was following company protocols &mdash; that the bad faith was baked
          into the system, not a one-off error. Attorneys pursuing punitive damages
          claims should focus discovery on claims-handling guidelines, training
          materials, internal memoranda, and patterns of similar conduct across multiple
          claims.
        </p>
      </CalloutBox>

      {/* ── How Punitive Damages Are Calculated ──────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Punitive Damages Are Calculated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike compensatory damages, which are measured by the plaintiff&rsquo;s actual losses,
        punitive damages are measured by what is necessary to punish the defendant and deter
        similar conduct. There is no fixed formula. California courts consider several factors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>The reprehensibility of the defendant&rsquo;s conduct</strong> &mdash;
          how egregious, willful, and harmful was the behavior?
        </li>
        <li>
          <strong>The defendant&rsquo;s financial condition</strong> &mdash; specifically
          net worth, because a punitive damages award must be large enough to &ldquo;sting&rdquo;
          a defendant of the company&rsquo;s size. A $1 million award would be devastating
          to a small company but meaningless to a major insurer with billions in assets.
        </li>
        <li>
          <strong>The relationship between the compensatory and punitive damages</strong>{' '}
          &mdash; the ratio between what the plaintiff lost and what the jury awards as
          punishment.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Constitutional Limits: The Single-Digit Multiplier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. Supreme Court has imposed constitutional limits on punitive damages through
        the Due Process Clause of the Fourteenth Amendment. Two cases are essential:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>BMW of North America, Inc. v. Gore</em> (1996) 517 U.S. 559, the Court
        established three &ldquo;guideposts&rdquo; for evaluating whether a punitive damages
        award is constitutionally excessive: (1) the degree of reprehensibility of the
        defendant&rsquo;s conduct; (2) the ratio between the compensatory damages and the
        punitive damages; and (3) the difference between the punitive damages and civil
        penalties authorized for comparable conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>State Farm Mutual Automobile Insurance Co. v. Campbell</em> (2003) 538 U.S.
        408, the Court went further, holding that &ldquo;in practice, few awards exceeding a
        single-digit ratio between punitive and compensatory damages, to a significant degree,
        will satisfy due process.&rdquo; The case arose from an insurance bad faith dispute
        in which the jury awarded $2.6 million in compensatory damages and $145 million in
        punitive damages; the trial court reduced the award by remittitur to $1 million
        compensatory and $25 million punitive; the Utah Supreme Court then reinstated the
        $145 million punitive figure against the $1 million remitted compensatory, producing
        the 145:1 ratio the U.S. Supreme Court ultimately reviewed. The Court struck down
        the award as unconstitutionally excessive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>State Farm</em> single-digit guideline is just that &mdash; a guideline, not
        a bright-line rule. The Court acknowledged that higher ratios might be permissible
        where the compensatory damages are small but the conduct is particularly egregious.
        And in California, the Supreme Court in <em>Roby v. McKesson Corp.</em> (2009)
        47 Cal.4th 686 embraced an even more restrictive approach, holding that where
        compensatory damages are &ldquo;substantial,&rdquo; a 1:1 ratio may be the
        constitutional maximum.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect: in a case where the compensatory damages are $500,000 &mdash;
        a level California courts treat as &ldquo;substantial&rdquo; under <em>Roby</em>
        and <em>Simon v. San Paolo U.S. Holding Co.</em> (2005) 35 Cal.4th 1159 &mdash;
        sustainable punitive damages typically land in the low single digits, often closer
        to 1:1 where the compensatory award already includes a significant emotional-distress
        or noneconomic component. Ratios approaching 9:1 are available only where the
        conduct is particularly egregious; defense counsel will challenge anything close to
        that ceiling under <em>State Farm</em> and <em>Simon</em>. Where compensatory damages
        are in the millions, the constitutional ceiling drops further. Where they are small
        &mdash; say, $50,000 in contract damages &mdash; a higher ratio may be permissible
        because a 1:1 award would not serve the punishment and deterrence functions, but the
        award still must survive due-process review.
      </p>

      {/* ── The Discovery Fight ──────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Discovery Fight: Financial Condition Evidence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most contested procedural battles in any punitive damages case is access
        to the defendant&rsquo;s financial condition &mdash; its net worth, assets, revenues,
        and profits. This information is essential because the whole point of punitive damages
        is to impose a penalty that is meaningful relative to the defendant&rsquo;s wealth.
        But insurers aggressively resist disclosure, and California law gives them significant
        procedural protections.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Civil Code Section 3295: The Gatekeeper Statute
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Civil Code section 3295 controls both pretrial discovery and trial presentation of
        financial condition evidence:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Pretrial discovery (subdivision (c)):</strong> A plaintiff who seeks
          pretrial discovery of the defendant&rsquo;s financial condition must file a motion
          with the court and demonstrate a &ldquo;substantial probability&rdquo; that the
          punitive damages claim will succeed. The motion must be supported by affidavits
          and admissible evidence. By statute, the court&rsquo;s order on a &sect; 3295(c)
          motion is expressly <em>not</em> a determination on the merits of the punitive
          damages claim and may not be admitted at trial &mdash; but the showing required to
          obtain the order is meaningful, and a granted order signals the court&rsquo;s
          preliminary view that the claim has substance. If the motion is denied, the
          plaintiff proceeds to trial without having seen the defendant&rsquo;s financial
          records.
        </li>
        <li>
          <strong>Trial bifurcation (subdivision (d)):</strong> Even if pretrial discovery
          is permitted, the defendant has the right to bifurcate the trial so that
          financial condition evidence is not presented until <em>after</em> the jury
          has returned a verdict on liability, compensatory damages, and a finding of
          malice, oppression, or fraud. This prevents the jury from being influenced
          by the defendant&rsquo;s wealth when deciding the underlying merits of the
          case. Only after the jury makes these threshold findings does the trial proceed
          to a second phase in which the jury hears evidence of the insurer&rsquo;s
          financial condition and determines the amount of punitive damages.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Insurance Company Exception
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a practical shortcut in insurance cases that does not exist in other punitive
        damages litigation. All admitted insurance companies in California are required to
        file annual financial statements with the Department of Insurance. These are public
        records. An insurer&rsquo;s net worth, surplus, assets, and liabilities are available
        without any discovery at all. This significantly reduces the discovery fight over
        financial condition, though insurers may still contest the interpretation or
        presentation of the financial data.
      </p>

      {/* ── Mock v. Michigan Millers ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        <em>Mock v. Michigan Millers Mutual Insurance Co.</em> (1992)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Mock v. Michigan Millers Mutual Insurance Co.</em> (1992) 4 Cal.App.4th 306
        involved a homeowner&rsquo;s insurance claim in which the insurer unreasonably
        delayed its investigation, adjustment, and payment, and improperly attempted to
        condition the ultimate payment. The jury found that Michigan Millers breached the
        covenant of good faith and fair dealing and violated provisions of Insurance Code
        section 790.03(h). The jury found malice and awarded both compensatory and punitive
        damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Mock</em> is significant for several reasons. First, it addressed the definition
        of &ldquo;despicable conduct&rdquo; as it relates to malice under the post-1987
        version of Civil Code section 3294, helping to clarify the heightened standard the
        Legislature had imposed. Second, it stands for the principle that established
        policies or practices in claims handling that are harmful to insureds create a
        &ldquo;greater chance for an award of punitive damages&rdquo; &mdash; reinforcing
        that institutional bad faith is more damning than individual error.
      </p>

      {/* ── Practical Reality ────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Reality: How Often Are Punitive Damages Actually Awarded?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The honest answer: rarely. Punitive damages are difficult to prove, procedurally
        burdensome to litigate, and subject to post-trial reduction. The clear and convincing
        evidence standard is demanding. The managing agent requirement adds a layer of
        complexity that does not exist in other tort cases. Bifurcation means the jury must
        cross multiple thresholds before even considering the amount. And even after a jury
        award, the trial court and appellate courts can reduce the amount under the
        constitutional ratio analysis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance bad faith cases that include a punitive damages claim settle before
        trial. Of those that go to trial, the majority result in either no punitive damages
        or an award that is subsequently reduced. Large punitive damages verdicts against
        insurers make the news precisely because they are unusual.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But this does not mean punitive damages claims are unimportant. Quite the opposite.
        The value of a punitive damages claim is not primarily in the verdict &mdash; it is
        in the leverage it creates before and during litigation.
      </p>

      {/* ── Settlement Leverage ──────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Settlement Leverage: The Real Value of a Viable Punitive Damages Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders and their attorneys, an important practical point about punitive
        damages is this: <strong>a credible punitive damages claim materially changes the
        economics of a case</strong> &mdash; though the constitutional cap discussed above
        limits the leverage in cases with substantial compensatory damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without punitive damages, the insurer&rsquo;s worst-case exposure at trial is the
        unpaid policy benefits plus emotional distress damages, Brandt fees (the attorney
        fees recoverable in bad-faith cases under <em>Brandt v. Superior Court</em> (1985)
        37 Cal.3d 813), and prejudgment interest &mdash; already a substantial figure. With
        punitive damages on the table, the potential exposure expands further, subject to
        the constitutional single-digit ratio (and often lower) discussed above. The exposure
        increase tends to be largest in cases with relatively small compensatories where
        higher ratios may be sustainable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why the procedural milestones in a punitive damages case matter so much.
        Each milestone changes the settlement dynamics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Surviving a motion to strike the punitive damages claim</strong> &mdash;
          Defendants frequently file motions to strike the punitive damages allegations from
          the complaint. Surviving this motion signals to the insurer that the court takes
          the claim seriously.
        </li>
        <li>
          <strong>Obtaining pretrial discovery of financial condition</strong> &mdash;
          If the court grants a motion under Civil Code section 3295(c) allowing discovery
          of the insurer&rsquo;s financial records, this is often a turning point in
          settlement negotiations. It means the court has found a &ldquo;substantial
          probability&rdquo; that the punitive damages claim will succeed.
        </li>
        <li>
          <strong>Surviving summary judgment or summary adjudication</strong> &mdash;
          If the insurer&rsquo;s motion for summary adjudication on the punitive damages
          claim is denied, the claim is going to trial. The insurer must now evaluate its
          settlement position with punitive damages exposure fully in the picture.
        </li>
        <li>
          <strong>Phase one verdict</strong> &mdash; If the jury finds liability,
          compensatory damages, and malice/oppression/fraud in the first phase of a
          bifurcated trial, the insurer faces imminent entry into the financial condition
          phase. This is often the point at which cases settle, sometimes during the
          overnight recess between phase one and phase two.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For attorneys evaluating a potential bad faith case, the question is not just &ldquo;can
        I prove bad faith?&rdquo; but &ldquo;can I make a credible case for punitive
        damages?&rdquo; Even if the ultimate trial odds are uncertain, the settlement value
        of a viable punitive damages claim can be substantial.
      </p>

      {/* ── What Policyholders Should Know ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Policyholders Should Know
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a policyholder dealing with an insurer that you believe is acting in bad
        faith, here are the key takeaways regarding punitive damages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Document everything.</strong> Punitive damages require evidence of willful,
          conscious wrongdoing. The best evidence is a paper trail: letters, emails, written
          summaries of phone calls (made immediately after the call), claim notes, and
          timelines showing a pattern of unreasonable conduct. Every time the insurer ignores
          your evidence, misrepresents your policy, delays without explanation, or reverses
          a prior commitment, document it in writing. (Note: California Penal Code &sect; 632
          generally requires the consent of all parties to record a phone call. Do not
          record carrier calls without consulting an attorney about the consent requirements
          and admissibility issues.)
        </li>
        <li>
          <strong>Punitive damages are not a DIY project.</strong> The legal standards,
          procedural requirements, and strategic considerations involved in pursuing punitive
          damages require an experienced insurance bad faith attorney. This is not a claim
          you can handle through a Department of Insurance complaint or a small claims court
          filing.
        </li>
        <li>
          <strong>The threat matters as much as the verdict.</strong> Even if punitive damages
          are never awarded at trial, the mere existence of a credible claim changes the
          power dynamic in your favor. An insurer that knows punitive damages are on the
          table approaches settlement negotiations very differently than one that faces only
          contract damages.
        </li>
        <li>
          <strong>Not every bad faith case warrants punitive damages.</strong> An insurer
          can be wrong &mdash; even unreasonably wrong &mdash; without crossing the line
          into despicable conduct. Punitive damages require something more: willfulness,
          consciousness, a pattern, or a policy. An honest disagreement about claim value,
          even if the insurer&rsquo;s position is ultimately found to be unreasonable, may
          not support punitive damages.
        </li>
      </ul>

      {/* ── What Attorneys Should Focus On ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Attorneys Should Focus On
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaintiffs&rsquo; counsel evaluating or litigating a punitive damages claim against an insurer typically focus on the following areas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Identifying the managing agent early.</strong> Discovery in this area typically begins by mapping the insurer&rsquo;s claims-handling hierarchy &mdash; who assigned the adjuster, who approved the denial or the reserve, who set the claims-handling guidelines. The goal is to connect the conduct to someone who qualifies as a managing
          agent under section 3294(b).
        </li>
        <li>
          <strong>Looking for institutional patterns.</strong> Discovery in this area typically requests documents showing how the insurer handles similar claims. Training materials, claims manuals, internal
          audits, and performance metrics can reveal whether the bad faith conduct in your
          case is part of a broader corporate practice. Pattern evidence is powerful on
          the punitive damages question.
        </li>
        <li>
          <strong>Preserving the claim file.</strong> The insurer&rsquo;s own claim file is often the best evidence of bad faith. Plaintiffs&rsquo; counsel typically serve a litigation hold notice early in the case to preserve internal notes, adjuster emails, reserve entries, and supervisor comments that may reveal the insurer&rsquo;s true reasoning.
        </li>
        <li>
          <strong>Timing the section 3295(c) motion.</strong> The motion for pretrial financial discovery is a high-value event in the litigation; counsel typically file it when there is enough evidence to demonstrate a &ldquo;substantial probability&rdquo; of prevailing on
          the punitive damages claim. Winning this motion significantly enhances settlement
          leverage.
        </li>
        <li>
          <strong>Preparing for bifurcation.</strong> Counsel typically assume the trial will be bifurcated and structure the phase one presentation &mdash; liability,
          compensatory damages, and the malice/oppression/fraud finding &mdash; is as
          compelling as possible standing alone. The phase two presentation on financial
          condition and the appropriate amount of punitive damages should be prepared
          in advance but may never be needed if the case settles after a phase one
          verdict.
        </li>
      </ul>

      {/* ── The Insurer's Perspective ─────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Insurer&rsquo;s Perspective
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In fairness, insurers have legitimate defenses to punitive damages claims, and not
        every punitive damages allegation is meritorious. Common insurer defenses include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>The genuine dispute doctrine:</strong> If the insurer&rsquo;s coverage
          position was based on a genuine dispute over the law or the facts, its conduct
          may not rise to the level of bad faith, let alone malice or oppression. See{' '}
          <Link href="/resources/genuine-dispute-doctrine" className="text-blue-700 underline hover:text-blue-900">
            the genuine dispute doctrine
          </Link>.
        </li>
        <li>
          <strong>Reliance on expert opinions:</strong> If the insurer relied on a
          professional engineer, independent adjuster, or other expert whose conclusions
          supported the coverage denial, this may negate the element of willfulness or
          conscious disregard.
        </li>
        <li>
          <strong>No managing agent involvement:</strong> If the conduct was limited to a
          low-level adjuster acting outside company policy, the insurer may argue that
          section 3294(b)&rsquo;s managing agent requirement is not satisfied.
        </li>
        <li>
          <strong>Constitutional ratio arguments:</strong> Even if punitive damages are
          warranted, the insurer will argue that the amount should be limited to a
          single-digit ratio &mdash; or a 1:1 ratio &mdash; under <em>State Farm</em>{' '}
          and <em>Roby</em>.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These defenses are real, and policyholders&rsquo; attorneys must be prepared to
        address them. But they should not deter the pursuit of punitive damages where the
        facts warrant it. The defenses narrow the claim &mdash; they do not eliminate it.
      </p>

      {/* ── Key Statutes ─────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Statutes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-[#1F3964] mb-2">Civil Code</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Civil Code &sect; 3294 &mdash; Punitive damages: malice, oppression, or fraud</li>
            <li>Civil Code &sect; 3294(b) &mdash; Managing agent requirement for corporate defendants</li>
            <li>Civil Code &sect; 3295 &mdash; Discovery and evidence of financial condition</li>
            <li>Civil Code &sect; 3295(c) &mdash; Pretrial discovery of financial condition</li>
            <li>Civil Code &sect; 3295(d) &mdash; Trial bifurcation of financial evidence</li>
            <li>Civil Code &sect; 3295(e) &mdash; Bars stating a specific punitive damages amount in the complaint without prior court order</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-[#1F3964] mb-2">Insurance Code</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Insurance Code &sect; 790.03(h) &mdash; Unfair claims settlement practices (note: under <em>Moradi-Shalal v. Fireman&rsquo;s Fund Ins. Co.</em> (1988) 46 Cal.3d 287, there is no private cause of action under &sect; 790.03(h); it is now used as evidence of the standard of care in common-law bad-faith actions)</li>
            <li>10 CCR &sect; 2695.7 &mdash; Fair claims settlement practices regulations (same: no private right of action, but used as evidence of the standard of care)</li>
          </ul>
        </div>
      </div>

      {/* ── Key Cases Cited ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Cases Cited
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <em>Neal v. Farmers Insurance Exchange</em> (1978) 21 Cal.3d 910 &mdash; First
          California Supreme Court case authorizing punitive damages in insurance bad faith;
          established that insurers who exploit policyholder vulnerability through company
          policy face punitive liability
        </li>
        <li>
          <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809 &mdash;
          Landmark case establishing the duty to investigate, the &ldquo;managing
          agent&rdquo; analysis for claims personnel, and the public policy rationale for
          punitive damages in the insurer-insured relationship
        </li>
        <li>
          <em>Mock v. Michigan Millers Mutual Insurance Co.</em> (1992) 4 Cal.App.4th 306
          &mdash; Addressed &ldquo;despicable conduct&rdquo; standard under post-1987
          Civil Code section 3294; recognized heightened punitive damages risk where
          institutional claims-handling practices are harmful to insureds
        </li>
        <li>
          <em>BMW of North America, Inc. v. Gore</em> (1996) 517 U.S. 559 &mdash; U.S.
          Supreme Court established three guideposts for constitutional review of punitive
          damages: reprehensibility, ratio to compensatory damages, and comparison to civil
          penalties
        </li>
        <li>
          <em>State Farm Mutual Automobile Insurance Co. v. Campbell</em> (2003) 538 U.S.
          408 &mdash; U.S. Supreme Court held that punitive damages awards should generally
          not exceed a single-digit ratio to compensatory damages
        </li>
        <li>
          <em>Roby v. McKesson Corp.</em> (2009) 47 Cal.4th 686 &mdash; California Supreme
          Court held that where compensatory damages are substantial, a 1:1 ratio may be
          the constitutional maximum
        </li>
        <li>
          <em>Mazik v. GEICO General Insurance Co.</em> (2019) 35 Cal.App.5th 455 &mdash;
          Affirmed punitive damages against insurer where regional claims administrator
          qualified as &ldquo;managing agent&rdquo; and insurer relied on
          &ldquo;cherry-picked&rdquo; data to deny claim
        </li>
        <li>
          <em>White v. Western Title Insurance Co.</em> (1985) 40 Cal.3d 870 &mdash;
          Held that an insurer&rsquo;s duties of good faith do not end once litigation
          begins
        </li>
        <li>
          <em>Jordan v. Allstate Insurance Co.</em> (2007) 148 Cal.App.4th 1062 &mdash;
          Held that an insurer&rsquo;s failure to conduct a full, fair, and thorough
          investigation can support bad faith and punitive damages even where the
          coverage interpretation was reasonable
        </li>
      </ul>

      {/* ── Sources and Further Reading ───────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources and Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          California Civil Code{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=3294.&lawCode=CIV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            section 3294
          </a>{' '}
          and{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=3295.&lawCode=CIV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            section 3295
          </a>{' '}
          (full text at California Legislative Information)
        </li>
        <li>
          Gianelli &amp; Morris, LLP, &ldquo;Punitive Damages for Wrongful Insurance Claim
          Denials in California&rdquo; ({' '}
          <a
            href="https://www.gmlawyers.com/resources-and-info/punitive-damages/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            gmlawyers.com
          </a>)
        </li>
        <li>
          <em>Advocate Magazine</em>, &ldquo;Does Egan&rsquo;s &lsquo;Managing Agent&rsquo;
          Rule Survive 40 Years Later?&rdquo; (September 2019) ({' '}
          <a
            href="https://www.advocatemagazine.com/article/2019-september/does-case-egan-case-s-managing-agent-rule-survive-40-years-later"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            advocatemagazine.com
          </a>)
        </li>
        <li>
          McKennon Law Group, &ldquo;Court Finds Regional Claims Administrator Qualifies as
          a &lsquo;Managing Agent&rsquo; of an Insurance Company&rdquo; ({' '}
          <a
            href="https://mslawllp.com/court-finds-regional-claims-administrator-qualifies-as-a-managing-agent-of-an-insurance-company-justifying-an-award-of-punitive-damages/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            mslawllp.com
          </a>)
        </li>
        <li>
          Haffner Law, &ldquo;Obtaining Punitive Damages Against an Insurance Company Under
          California Law&rdquo; ({' '}
          <a
            href="https://www.haffnerlawyers.com/obtaining-punitive-damages-against-an-insurance-company-under-california-law/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            haffnerlawyers.com
          </a>)
        </li>
        <li>
          Impact Attorneys, &ldquo;Civil Code &sect; 3295 &mdash; Punitive Damages Discovery
          and Evidence&rdquo; ({' '}
          <a
            href="https://impactattorneys.com/civil-code-%C2%A7-3295-punitive-damages-discovery-and-evidence/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            impactattorneys.com
          </a>)
        </li>
        <li>
          <em>Advocate Magazine</em>, &ldquo;Financial-Condition Discovery &mdash;
          Don&rsquo;t Wait Until Trial!&rdquo; (January 2026) ({' '}
          <a
            href="https://www.advocatemagazine.com/article/2026-january/financial-condition-discovery-don-t-wait-until-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            advocatemagazine.com
          </a>)
        </li>
        <li>
          CACI No. 3947, Punitive Damages &mdash; Individual and Entity Defendants ({' '}
          <a
            href="https://www.justia.com/trials-litigation/docs/caci/3900/3947/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            justia.com
          </a>)
        </li>
      </ul>

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Bad Faith Insurance Practices in California
          </Link>
        </li>
        <li>
          <Link href="/resources/bad-faith-damages" className="text-blue-700 underline hover:text-blue-900">
            Damages Available in Insurance Bad Faith Cases
          </Link>
        </li>
        <li>
          <Link href="/resources/genuine-dispute-doctrine" className="text-blue-700 underline hover:text-blue-900">
            The Genuine Dispute Doctrine
          </Link>
        </li>
        <li>
          <Link href="/resources/brandt-fees" className="text-blue-700 underline hover:text-blue-900">
            Brandt Fees: Recovering Attorney Fees in Bad Faith Cases
          </Link>
        </li>
        <li>
          <Link href="/resources/history-of-bad-faith" className="text-blue-700 underline hover:text-blue-900">
            The History of Insurance Bad Faith Law
          </Link>
        </li>
        <li>
          <Link href="/resources/california-insurance-case-law" className="text-blue-700 underline hover:text-blue-900">
            Key California Insurance Case Law
          </Link>
        </li>
        <li>
          <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
            When to Hire an Attorney for Your Insurance Claim
          </Link>
        </li>
        <li>
          <Link href="/resources/discovery-insurance-litigation" className="text-blue-700 underline hover:text-blue-900">
            Discovery in Insurance Litigation
          </Link>
        </li>
      </ul>

      {/* ── Disclaimer ────────────────────────────────────────────── */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          Disclaimer
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This article is for informational and educational purposes only and does not
          constitute legal advice. The information presented is based on California law as
          of the date of publication and may not reflect subsequent legislative or judicial
          developments. Punitive damages claims involve complex procedural requirements,
          heightened evidentiary standards, and strategic considerations that require the
          guidance of an experienced attorney. If you believe your insurer has acted in bad
          faith, consult a licensed California attorney who specializes in insurance
          coverage litigation.
        </p>
        <p className="text-sm text-gray-500 italic mt-4">
          Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
        </p>
      </div>
    </>
  )
}
