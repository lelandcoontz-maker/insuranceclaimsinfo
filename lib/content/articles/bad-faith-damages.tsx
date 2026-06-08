import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Bad Faith Damages in California: What You Can Actually Recover',
  description:
    'A detailed guide to the damages available when a California insurer acts in bad faith — contract damages, consequential losses, emotional distress, punitive damages, Brandt fees, and elder abuse enhancements.',
  summary:
    'When a California insurer acts in bad faith, you can recover more than the policy benefit: contract damages, consequential losses, emotional distress, attorney fees under Brandt, and in serious cases punitive damages or elder-abuse enhancements.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal advice.
          Bad faith litigation is complex and fact-specific. A Public Adjuster&apos;s role is to
          document the carrier&apos;s conduct and handle the claim; the development of legal
          arguments, the selection of legal theories, and the conduct of litigation are the work
          of a California-licensed attorney. Consult a licensed California attorney before
          pursuing any legal action.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Introduction: What Can You Actually Recover?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have read our article on{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith insurance practices
        </Link>
        , you understand what bad faith <em>is</em> &mdash; the unreasonable denial, delay, or
        underpayment of a claim in violation of the implied covenant of good faith and fair
        dealing. This article answers the next question: <strong>what can you actually
        recover?</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is more expansive than most policyholders realize. A policyholder who proves
        bad faith can potentially recover not just the unpaid policy benefits, but also
        consequential economic losses, emotional distress damages, attorney&rsquo;s fees,
        prejudgment interest, and &mdash; in egregious cases &mdash; punitive damages. For
        elder or dependent adult policyholders, additional statutory remedies may apply.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contract Damages: The Policy Benefits Themselves
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most straightforward category is the money the insurer should have paid in the
        first place. If an insurer unreasonably denies or underpays a claim, the policyholder
        can recover the full amount owed under the policy as contract damages &mdash; dwelling
        repairs, personal property replacement, additional living expenses, debris removal,
        code upgrades, and any other benefits provided by the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contract damages are the foundation. Every other category of bad faith damages builds
        on top of this base.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Consequential and Economic Damages
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer fails to pay a claim, the policyholder often incurs real, additional
        costs because the money was not there when it was needed. These are consequential
        damages &mdash; the downstream economic harm caused by the insurer&rsquo;s conduct.
        California courts have recognized a wide range:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Temporary housing costs beyond ALE limits.</strong> If the insurer&rsquo;s
          delay forced the policyholder to pay for housing out of pocket, or if displacement
          lasted longer because the insurer stalled repairs, those costs are recoverable beyond
          what{' '}
          <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
            Additional Living Expenses
          </Link>{' '}
          coverage would have paid.
        </li>
        <li>
          <strong>Emergency repairs paid out of pocket.</strong> When the insurer refuses to
          advance funds for emergency mitigation, the policyholder may pay contractors directly
          to prevent further damage.
        </li>
        <li>
          <strong>Interest on loans taken to cover the gap.</strong> Personal loans, credit card
          interest, or home equity draws necessitated by the insurer&rsquo;s nonpayment are
          recoverable as consequential damages.
        </li>
        <li>
          <strong>Lost rental income.</strong> For landlords, the insurer&rsquo;s delay may
          extend the vacancy period beyond what the policy&rsquo;s loss-of-rents coverage
          provides.
        </li>
        <li>
          <strong>Damaged credit.</strong> If the policyholder could not pay bills or mortgages
          because the insurer withheld payments, resulting credit damage is a recognized harm.
        </li>
        <li>
          <strong>Additional property deterioration.</strong> A water loss not promptly
          remediated because the insurer stalled, leading to mold growth, is a consequential
          loss attributable to the insurer&rsquo;s conduct.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key is <strong>causation</strong>. The policyholder must show that the additional
        costs were caused by the insurer&rsquo;s bad faith, not by some other factor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Emotional Distress Damages
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California allows recovery of emotional distress damages in first-party bad faith
        cases without requiring physical injury &mdash; a significant distinction, as many
        other states do not allow this.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court addressed this in <em>Gruenberg v. Aetna Ins. Co.</em>{' '}
        (1973) 9 Cal.3d 566, recognizing that the insurer-insured relationship is one where
        emotional distress is a foreseeable consequence of breach &mdash; policyholders buy
        insurance for peace of mind, and when the insurer betrays that relationship after a
        loss, the emotional harm is real and predictable. This case is referenced for educational
        context only.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recoverable emotional distress includes anxiety, sleeplessness, depression, and
        stress-related health effects. A psychiatric diagnosis is not required, though medical
        evidence can strengthen the claim. Testimony from the policyholder and family members
        about the impact on daily life is often sufficient.
      </p>

      <CalloutBox variant="important" title="Emotional Distress Is a Tort Damage">
        <p>
          Emotional distress damages are available because bad faith is a <em>tort</em> in
          California, not merely a breach of contract. In a pure breach of contract case,
          emotional distress is generally not recoverable. But because bad faith gives rise
          to tort liability, the full range of tort damages &mdash; including emotional distress
          and punitive damages &mdash; becomes available.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Crisci Doctrine: Emotional Distress Without Physical Injury
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The foundational case for emotional distress in insurance bad faith is{' '}
        <em>Crisci v. Security Insurance Co. of New Haven</em> (1967) 66 Cal.2d 425. In <em>Crisci</em>,
        the California Supreme Court held that an insurer&apos;s refusal to settle a third-party
        liability claim within policy limits &mdash; which exposed the insured to a devastating
        excess judgment &mdash; gave rise to liability for the emotional distress that followed.
        The insured, Rosina Crisci, was an elderly landlord who lost everything and attempted
        suicide after the excess verdict. The court awarded damages for her mental suffering
        without requiring proof of physical injury.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While <em>Crisci</em> arose in the third-party (liability) context, California courts
        extended the same principle to first-party property claims through <em>Gruenberg</em> and
        its progeny. The reasoning is the same: insurance is purchased for security and peace of
        mind, the insurer knows that its bad faith will cause emotional harm, and that harm is
        therefore a foreseeable consequence of the tort. The <em>Crisci</em> doctrine means that
        California courts applying the <em>Crisci</em> doctrine have permitted recovery of
        emotional distress damages without requiring proof of physical manifestation, a
        psychiatric diagnosis, or independent corroboration &mdash; though all of these can
        strengthen the claim. Many plaintiff attorneys have prevailed on the policyholder&rsquo;s
        own testimony about the impact on their life. Whether testimony alone is sufficient in
        any specific case depends on the trier of fact.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Practically, emotional distress damages in insurance bad-faith cases can be substantial.
        In our experience, the human story behind a long, contested claim &mdash; the
        displacement, the financial pressure, the health effects &mdash; carries real weight at
        trial when documented well. Where emotional distress is fully developed in the record,
        it can in some cases approach or exceed contract damages. Outcomes vary widely with the
        facts.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Punitive Damages
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Punitive damages are available where the insurer&rsquo;s conduct meets the standards
        in California Civil Code &sect; 3294. Section 3294(c) provides the statutory definitions:
      </p>

      <CalloutBox variant="legal" title="Cal. Civ. Code § 3294(c) — Definitions">
        <p className="italic mt-2">
          (1) &ldquo;Malice&rdquo; means conduct which is intended by the defendant to cause
          injury to the plaintiff or despicable conduct which is carried on by the defendant
          with a willful and conscious disregard of the rights or safety of others.
        </p>
        <p className="italic mt-2">
          (2) &ldquo;Oppression&rdquo; means despicable conduct that subjects a person to cruel
          and unjust hardship in conscious disregard of that person&rsquo;s rights.
        </p>
        <p className="italic mt-2">
          (3) &ldquo;Fraud&rdquo; means an intentional misrepresentation, deceit, or concealment
          of a material fact known to the defendant with the intention on the part of the
          defendant of thereby depriving a person of property or legal rights or otherwise
          causing injury.
        </p>
      </CalloutBox>

      <CalloutBox variant="info" title="In plain language">
        <p>
          Many plaintiff attorneys read &sect; 3294(c) as requiring more than a careless or
          mistaken denial. The conduct generally must rise to &ldquo;despicable&rdquo; behavior
          carried out with intent or with conscious disregard for the insured&apos;s rights.
          Whether specific insurer conduct meets this standard is a fact-intensive legal
          question for the courts and attorneys involved.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        For educational context, <em>Neal v. Farmers Ins. Exchange</em> (1978) 21 Cal.3d 910
        established the framework for punitive damages in insurance bad faith. The court held
        that an insurer&rsquo;s conduct must go beyond mere unreasonableness &mdash; it must
        reflect a conscious disregard of the policyholder&rsquo;s rights. An insurer that knows
        a claim is valid but deliberately refuses to pay, hoping the policyholder will accept
        a lowball offer or give up, may be engaging in conduct that supports punitive damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Punitive damages in California are not capped by statute, but federal due-process
        principles do constrain them. The U.S. Supreme Court&rsquo;s decisions in <em>BMW of
        North America v. Gore</em> (1996) 517 U.S. 559 and <em>State Farm Mut. Auto. Ins. Co.
        v. Campbell</em> (2003) 538 U.S. 408, 425 set out three constitutional guideposts for
        reviewing punitive awards: (1) the degree of reprehensibility of the defendant&rsquo;s
        conduct; (2) the ratio between punitive damages and the actual or potential harm; and
        (3) a comparison between the punitive award and civil or criminal penalties for
        comparable conduct. Within the first guidepost, reprehensibility is itself evaluated
        through a set of sub-factors (physical vs. economic harm, indifference or reckless
        disregard for health or safety, financial vulnerability of the target, repeated conduct
        vs. an isolated incident, and intentional malice or trickery vs. mere accident). On the
        ratio guidepost, the Supreme Court in <em>Campbell</em> said that &ldquo;few awards
        exceeding a single-digit ratio between punitive and compensatory damages, to a
        significant degree, will satisfy due process,&rdquo; with a 4:1 ratio sometimes cited
        as instructive. California courts apply these federal due-process constraints alongside
        California&apos;s reprehensibility, ratio, and financial-condition analysis. Punitive
        awards in insurance bad-faith cases can substantially exceed compensatory damages, but
        the ratio is a litigated question and outcomes vary widely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Brandt Fees: The Attorney&rsquo;s Fee Exception
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California generally follows the &ldquo;American Rule&rdquo; &mdash; each party pays
        its own attorney&rsquo;s fees regardless of outcome. Bad faith insurance cases are an
        important exception.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Brandt v. Superior Court</em> (1985) 37 Cal.3d 813, attorney&rsquo;s fees
        incurred to recover policy benefits that were wrongfully withheld are recoverable as
        contract damages. The rationale: if the insurer had paid when it should have, the
        policyholder would never have needed an attorney. Brandt fees cover the fees incurred
        specifically to obtain policy benefits &mdash; not all litigation costs generally.
        This case is referenced for educational context only.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical significance is substantial. Without Brandt fees, a policyholder owed
        $100,000 who spent $40,000 in attorney&rsquo;s fees would net only $60,000. Brandt fees
        prevent the insurer from effectively reducing the policyholder&rsquo;s recovery by
        forcing litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contract Damages and Tort Damages: You Can Recover Both
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder can pursue both contract and tort damages in the same action &mdash;
        they are cumulative, not alternative. <strong>Contract damages</strong> include unpaid
        policy benefits and Brandt fees. <strong>Tort damages</strong> include consequential
        losses, emotional distress, and punitive damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, a policyholder might recover $150,000 in unpaid benefits, $30,000 in
        Brandt fees, $50,000 in consequential losses, $75,000 in emotional distress, and
        $500,000 in punitive damages &mdash; totaling $805,000 on a $150,000 claim. This
        illustrates why bad faith cases can result in recoveries far exceeding policy limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Prejudgment Interest
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California provides for prejudgment interest under several statutes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Civil Code &sect; 3287(a)</strong> &mdash; interest as a matter of right on
          damages that are &ldquo;certain, or capable of being made certain by calculation.&rdquo;
          Unpaid policy benefits typically qualify.
        </li>
        <li>
          <strong>Civil Code &sect; 3288</strong> &mdash; discretionary interest on uncertain
          damages such as emotional distress in tort actions.
        </li>
        <li>
          <strong>Civil Code &sect; 3289(b)</strong> &mdash; the 10% per annum rate for breach of
          contract where the contract does not stipulate a rate.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Which rate applies depends on the legal theory. Many plaintiff attorneys argue 10% per
        annum applies to the contract-component damages under &sect; 3289(b); the general 7%
        legal rate under California Constitution Article XV, Section 1 applies to other
        categories. Whether and at what rate prejudgment interest applies in a specific case
        is a legal question for an attorney. On a claim wrongfully withheld for years,
        prejudgment interest can add a substantial sum to the recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Elder Abuse Enhancement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder is 65 or older, or is a dependent adult, the California Elder
        Abuse and Dependent Adult Civil Protection Act may trigger additional remedies beyond
        standard bad faith. The framework spans several Welfare and Institutions Code sections:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&sect; 15610.30 (definition).</strong> Defines &ldquo;financial abuse&rdquo; of
          an elder or dependent adult &mdash; conduct that takes, secretes, appropriates,
          obtains, or retains real or personal property of the elder for a wrongful use, with
          intent to defraud, or by undue influence. Many plaintiff attorneys argue that an
          insurer&apos;s unreasonable retention of policy benefits owed to an elder can fall
          within this definition.
        </li>
        <li>
          <strong>&sect; 15657.5 (financial-abuse remedies).</strong> Where financial abuse is
          proven by clear and convincing evidence and the defendant acted with recklessness,
          oppression, fraud, or malice, the court shall award reasonable attorney&rsquo;s fees
          and costs &mdash; potentially covering the full cost of litigation, not just fees
          attributable to recovering policy benefits.
        </li>
        <li>
          <strong>&sect; 15657 (physical-abuse / neglect remedies).</strong> Where physical abuse
          or neglect is proven by the same standard, the court may award attorney&rsquo;s fees,
          and certain limitations on pre-death pain-and-suffering damages are lifted.
        </li>
        <li>
          <strong>Survival actions.</strong> If the elder dies during the claim, the cause of
          action survives under Code Civ. Proc. &sect; 377.34 (subject to its limits) and can be
          pursued by the estate. The interplay between elder-abuse remedies and survival-action
          limits is a legal question for an attorney.
        </li>
        <li>
          <strong>Potentially larger punitive damages.</strong> Many plaintiff attorneys observe
          that juries and courts view insurer conduct as more reprehensible when directed at a
          vulnerable population &mdash; one of the three reprehensibility factors under{' '}
          <em>BMW v. Gore</em>.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed discussion, see our article on{' '}
        <Link href="/resources/elder-abuse-insurance" className="text-blue-700 underline hover:text-blue-900">
          Elder Abuse and Insurance Claims
        </Link>
        .
      </p>

      <CalloutBox variant="tip" title="Age Matters in Bad Faith Cases">
        <p>
          Where the policyholder is 65 or older, the elder-abuse framework can materially
          change the calculus of a bad-faith case. Many plaintiff attorneys evaluate whether
          the Welfare and Institutions Code remedies apply at intake, since they can open
          additional avenues of recovery and shift settlement leverage. Whether the framework
          applies in a specific case is a legal evaluation for counsel.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Does NOT Count as Bad Faith Damages
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every loss after an insurer&rsquo;s bad faith is recoverable:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Speculative losses.</strong> Damages must be proven with reasonable certainty.
          Hypothetical business opportunities are not recoverable unless concretely quantifiable.
        </li>
        <li>
          <strong>Damages not caused by the insurer&rsquo;s conduct.</strong> Pre-existing
          financial problems or emotional distress not attributable to the insurer are not
          recoverable. However, <em>aggravation</em> of pre-existing conditions may be.
        </li>
        <li>
          <strong>Amounts exceeding policy limits (as contract damages).</strong> Contract
          damages are limited to the policy&rsquo;s terms. Tort damages (emotional distress,
          punitive damages, consequential losses) are not subject to policy limits.
        </li>
        <li>
          <strong>Losses the policyholder failed to mitigate.</strong> A policyholder must take
          reasonable steps to minimize damages.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Putting It All Together
      </h2>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">Summary of Recoverable Bad Faith Damages</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>
            <strong>Contract damages:</strong> Unpaid policy benefits (dwelling, contents, ALE,
            debris removal, code upgrades, etc.)
          </li>
          <li>
            <strong>Brandt fees:</strong> Attorney&rsquo;s fees incurred to recover policy
            benefits
          </li>
          <li>
            <strong>Consequential damages:</strong> Out-of-pocket costs, loan interest, lost
            rent, credit damage, additional property deterioration
          </li>
          <li>
            <strong>Emotional distress:</strong> Anxiety, depression, sleeplessness,
            stress-related health effects (no physical injury required)
          </li>
          <li>
            <strong>Punitive damages:</strong> Available for oppressive, fraudulent, or
            malicious conduct (Civil Code &sect; 3294); no statutory cap
          </li>
          <li>
            <strong>Prejudgment interest:</strong> Up to 10% per year on contract-component
            damages under Civ. Code &sect; 3289(b); 7% on other categories where available
          </li>
          <li>
            <strong>Elder abuse enhancements:</strong> Broader attorney&rsquo;s fees, survival
            actions, enhanced punitive damages for policyholders 65+
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Public Adjuster&rsquo;s Role vs. the Attorney&rsquo;s Role
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster handles the insurance claim &mdash; documenting the loss, preparing
        estimates, negotiating with the insurer, and maximizing the contractual recovery under
        the policy. An attorney handles the bad faith lawsuit. These roles are complementary.
        The PA&rsquo;s contemporaneous records of the insurer&rsquo;s conduct are among the
        most powerful evidence in a bad faith case.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If bad faith has occurred, consult an attorney who specializes in insurance bad faith.
        For guidance, see our article on{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
          when to hire an attorney
        </Link>
        .
      </p>

      <CalloutBox variant="tip" title="The PA Builds the Claim; the Attorney Pursues the Lawsuit">
        <p>
          A Public Adjuster cannot file a bad faith lawsuit and an attorney generally does not
          handle the day-to-day claims process. The PA&rsquo;s job is to get every dollar owed
          under the policy. If the insurer&rsquo;s conduct constitutes bad faith, the
          documentation the PA created becomes the foundation of the attorney&rsquo;s case.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Considerations
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Bad faith cases take time.</strong> Litigation can take years, though many
          cases settle before trial.
        </li>
        <li>
          <strong>Not every underpayment is bad faith.</strong> The standard is
          unreasonableness, not merely being wrong. A legitimate coverage dispute is not bad
          faith even if the insurer&rsquo;s position is ultimately rejected.
        </li>
        <li>
          <strong>Documentation is everything.</strong> The policyholder who kept meticulous
          records &mdash; or whose{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          did &mdash; is in a fundamentally different position than one who relies on memory.
        </li>
        <li>
          <strong>Attorneys typically take these cases on contingency.</strong> The policyholder
          does not fund litigation out of pocket, but the attorney must believe the case has
          sufficient value.
        </li>
        <li>
          <strong>Brandt fees offset the contingency.</strong> Because Brandt fees are
          recoverable in addition to other damages, the policyholder recovers more of the
          policy benefits even after paying the attorney.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Next Steps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe your insurer has acted in bad faith, start by understanding whether the
        conduct qualifies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Review{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith insurance practices
          </Link>{' '}
          to understand the legal standard.
        </li>
        <li>
          Learn about{' '}
          <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
            Insurance Code &sect; 790.03
          </Link>{' '}
          and the statutory violations that may support your case.
        </li>
        <li>
          If the policyholder is 65 or older, review{' '}
          <Link href="/resources/elder-abuse-insurance" className="text-blue-700 underline hover:text-blue-900">
            elder abuse protections
          </Link>
          .
        </li>
        <li>
          Consult our guide on{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
            when to hire an attorney
          </Link>
          .
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The damages available in a California bad faith case are broad and can be substantial.
        But they require proof &mdash; proof of the insurer&rsquo;s unreasonable conduct, proof
        of the damages caused, and proof that the two are connected. Build that proof from day
        one.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Concerned About How Your Claim Is Being Handled?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster can review an insurance claim file to identify underpaid
          items and may be able to use regulatory violations to support negotiation for a more
          complete settlement. A Public Adjuster may also identify issues that warrant
          consultation with an attorney. Most Public Adjusters and attorneys will provide a
          free consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
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
