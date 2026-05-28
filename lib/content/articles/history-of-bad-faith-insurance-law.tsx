import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How the Tort of Bad Faith Was Invented: The History That Changed Insurance Law Forever',
  description:
    'The legal principle that insurers can be held liable beyond the policy for unreasonably denying or delaying claims did not exist until California courts created it. Trace the history from Comunale to Egan and understand how bad faith law protects policyholders today.',
  summary:
    'The rule that insurers can be liable beyond the policy for unreasonably denying or delaying claims was created by California courts, traced from Comunale to Egan. That history is the foundation of modern policyholder protection.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        There was a time in America when an insurance company could deny your claim, drag out its investigation for months or years, lowball your payment, and face no meaningful consequence for any of it. If you were lucky enough to have a lawyer and the resources to fight, the most you could hope to recover was the policy benefit you were owed in the first place &mdash; the money the insurer should have paid you from the beginning. There was no penalty for the delay. No accountability for the suffering the insurer caused while you waited. No mechanism to punish the company for treating your family&rsquo;s financial ruin as an acceptable cost of doing business.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That world began to end in California, in a sequence of California Supreme Court
        decisions stretching from 1958 to 1979 &mdash; cases pressed by several plaintiff-side
        firms, but reaching their most influential expression in the landmark{' '}
        <em>Egan v. Mutual of Omaha</em> decision litigated by William M. Shernoff.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort of bad faith &mdash; the legal principle that an insurance company can be
        held liable in damages beyond the policy for unreasonably denying, delaying, or
        mishandling a claim &mdash; was built by the California Supreme Court case by case
        over two decades. Each case added a piece: <em>Comunale</em> (1958) established the
        implied covenant of good faith and fair dealing; <em>Crisci</em> (1967) added
        emotional-distress damages; <em>Gruenberg</em> (1973) extended the tort framework to
        first-party claims; <em>Neal</em> (1978) established the punitive-damages framework;
        and <em>Egan</em> (1979) cemented the duty to investigate and addressed the
        managing-agent question. William M. Shernoff and his firm Shernoff Bidart Echeverria
        LLP became influential bad-faith litigators by pressing these doctrines aggressively
        and successfully &mdash; <em>Egan</em> became one of the most-cited bad-faith
        decisions in American legal history. The doctrine itself was the work of the
        California Supreme Court and the lawyers, plaintiff-side and defense-side, who shaped
        the appellate record. The body of law has since been adopted in some form in at
        least twenty-five states.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article traces the history of that legal revolution &mdash; from the first tentative recognition that insurers owe their policyholders something more than a check, through the landmark decisions that transformed bad faith from a theory into a weapon, to the modern reality of how bad faith claims actually play out in litigation. It is a story of genuine legal innovation. It is also a story with a cautionary ending, because the existence of bad faith law and the ability to win a bad faith case are two very different things.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Before Bad Faith: A World Without Consequences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To appreciate what Shernoff and others accomplished, you need to understand what came before.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the late 1950s, an insurance company&rsquo;s obligation to its policyholder was treated as a simple contract. You paid premiums. The insurer agreed to pay covered losses. If the insurer refused to pay, your remedy was a breach of contract action &mdash; and the damages were limited to what the insurer should have paid under the policy, plus interest. That was it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There was no recognition that the insurance relationship was special. No acknowledgment that a family waiting for a claim payment might lose their home, their credit, their business, or their health while the insurer sat on the file. No mechanism to recover for the emotional devastation of watching your insurer betray the promise that was the entire reason you bought the policy. And critically, no punitive damages &mdash; nothing to deter the insurer from doing the same thing to the next policyholder, and the one after that.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer could deny your claim, force you into litigation, make you wait years for a trial, and then &mdash; if you won &mdash; pay you exactly what it owed you all along, plus some interest. The cost of wrongful denial was essentially zero. The insurer got to use your money for years, and the only penalty was giving it back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was the legal landscape that the California Supreme Court began to dismantle in 1958.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Foundation: <em>Comunale v. Traders &amp; General Insurance Co.</em> (1958)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case that planted the seed of bad faith law in California had nothing to do with a homeowner&rsquo;s claim. It involved a car accident.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mr. and Mrs. Comunale were struck in a crosswalk by a truck driven by Percy Sloan. Sloan carried liability insurance with Traders &amp; General Insurance Company, with policy limits of $10,000 per person and $20,000 per occurrence. When the Comunales sued Sloan, Traders denied coverage entirely &mdash; claiming the policy did not cover a truck Sloan did not own &mdash; and refused to defend the lawsuit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Comunales obtained a judgment against Sloan that exceeded his policy limits. The question before the California Supreme Court was whether Traders&rsquo; refusal to settle within policy limits, when settlement was the most reasonable course of action, created liability beyond those limits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Comunale v. Traders &amp; General Insurance Co.</em> (1958) 50 Cal.2d 654, the California Supreme Court answered yes. The court held that <strong>every insurance contract contains an implied covenant of good faith and fair dealing</strong>, and that neither party will do anything to injure the right of the other to receive the benefits of the agreement. When the most reasonable disposition of a claim is settlement within policy limits, the insurer&rsquo;s unwarranted refusal to settle constitutes a breach of that implied covenant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Comunale</em> was a third-party case &mdash; it dealt with the insurer&rsquo;s duty to protect its own insured from excess liability to someone else. It was framed as a contract action, not a tort. But the principle it established &mdash; that insurers owe their policyholders a duty of good faith and fair dealing that goes beyond simply paying the claim &mdash; was the foundation on which everything else would be built.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Emotional Cost: <em>Crisci v. Security Insurance Co.</em> (1967)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nine years after <em>Comunale</em>, the court took the next step. And this time, the human cost of bad faith was impossible to ignore.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rosina Crisci was an elderly property owner who held a $10,000 general liability policy with Security Insurance Company. After a tenant was injured in a fall, the tenant&rsquo;s attorney offered to settle the entire case for $9,000 &mdash; well within Crisci&rsquo;s policy limits. Security refused. The case went to trial, and the jury awarded $101,000. Security paid its $10,000 limit and walked away, leaving Crisci personally responsible for the remaining $91,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The financial devastation was total. Crisci lost nearly everything she owned. She became severely depressed, attempted suicide, and was committed to a state mental hospital.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Crisci v. Security Insurance Co.</em> (1967) 66 Cal.2d 425, the California Supreme Court affirmed the $91,000 excess judgment against Security and then went further. The court awarded Crisci <strong>$25,000 for mental suffering</strong>. The reasoning was direct: among the considerations in purchasing liability insurance is &ldquo;the peace of mind and security it will provide in the event of an accidental loss.&rdquo; When the insurer destroys that peace of mind through unreasonable conduct, emotional distress damages are a natural consequence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Legal scholars would later describe <em>Crisci</em> as marking &ldquo;the dawn of the modern era of insurance bad faith and emotional distress damages.&rdquo; It established that the harm from bad faith is not purely financial &mdash; it is deeply personal, and the law should recognize that.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Tort Is Born: <em>Gruenberg v. Aetna Insurance Co.</em> (1973)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Comunale</em> and <em>Crisci</em> dealt with third-party claims &mdash; situations where the insurer failed to protect its insured from liability to someone else. But what about first-party claims &mdash; where the policyholder is the one making the claim, seeking payment for their own loss?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before 1973, first-party bad faith barely existed as a concept. If your homeowner&rsquo;s insurer denied your fire claim, you could sue for breach of contract and recover the policy benefits. But you could not sue in tort. You could not recover emotional distress. And you could not seek punitive damages to punish the insurer for its conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Gruenberg v. Aetna Insurance Co.</em> (1973) 9 Cal.3d 566 changed that permanently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The facts were appalling. A bar and restaurant owner filed a property insurance claim after fire damage. His insurers allegedly implied to law enforcement that he had a motive to commit arson, triggering criminal charges. The criminal investigation prevented the insured from attending the examination under oath required by his policy. The insurers then denied his claim on the ground that he had failed to submit to the examination &mdash; an examination he could not attend because of the criminal charges the insurers themselves had helped instigate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court held that the insured had stated a cause of action <strong>in tort</strong> against the insurance companies for breach of their implied duty of good faith and fair dealing. The court explicitly stated that the duty of an insurer to act in good faith in handling third-party claims against the insured, and the duty in handling its own insured&rsquo;s first-party claim, were merely &ldquo;two different aspects of the same duty.&rdquo;
      </p>

      <CalloutBox variant="warning" title="Gruenberg: The Turning Point">
        <p>
          After <em>Gruenberg</em> (1973), policyholders could sue their own insurer in tort &mdash; not just in contract &mdash; for unreasonably denying, delaying, or mishandling their own claims. The tort framework unlocked compensatory damages without contract limitations, emotional distress, and punitive damages. Since 1973, at least twenty-five other states have adopted some form of first-party bad faith tort, many citing <em>Gruenberg</em> directly.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Punitive Damages Enter the Picture: <em>Neal v. Farmers Insurance Exchange</em> (1978)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        With <em>Gruenberg</em> establishing bad faith as a tort, the next question was inevitable: could a jury punish the insurer with punitive damages?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Neal v. Farmers Insurance Exchange</em> (1978) 21 Cal.3d 910, the answer was unequivocally yes. The California Supreme Court established the framework for punitive damages in bad faith cases. Punitive damages are available under California Civil Code section 3294 when the insurer acts with <strong>malice, oppression, or fraud</strong>, and the court articulated a three-factor test for assessing whether an award is excessive:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>The reprehensibility of the defendant&rsquo;s conduct</strong> in light of the entire record.</li>
        <li><strong>The relationship between the punitive damages award and the actual damages.</strong></li>
        <li><strong>The wealth of the defendant</strong> &mdash; &ldquo;the wealthier the wrongdoing defendant, the larger the award of exemplary damages need be in order to accomplish the statutory objective.&rdquo;</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This third factor was particularly significant. Insurance companies are among the wealthiest corporations in America. A punitive damages award that would devastate a small business is a rounding error to a major insurer. <em>Neal</em> recognized that the purpose of punitive damages &mdash; deterrence &mdash; requires that the award be large enough to actually be felt by the defendant. The <em>Neal</em> factors remain the governing standard for punitive damages in California bad faith cases today.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Man Who Made It Real: William Shernoff and <em>Egan v. Mutual of Omaha</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cases discussed above established the legal framework. But it was William M. Shernoff &mdash; a lawyer from Claremont, California &mdash; who turned that framework into a practical reality for policyholders across the country.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Shernoff was born in Chicago in 1937 and grew up in Crivitz, Wisconsin, a small town of roughly five hundred people about fifty miles north of Green Bay. His father was the town lawyer. His grandparents were Russian Jewish immigrants who ran pawnshops. He earned his law degree from the University of Wisconsin in 1962, served as a military defense lawyer in the U.S. Army, and then moved to California to practice personal injury law. In 1975, he founded his own firm, which became Shernoff Bidart Echeverria LLP &mdash; a firm that celebrated its fiftieth anniversary in 2025 and that has been called the birthplace of insurance bad faith law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case that made Shernoff&rsquo;s reputation &mdash; and the most-cited bad-faith
        decision in California history &mdash; was{' '}
        <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Michael Egan had received disability benefits from Mutual of Omaha for three prior
        back-related injuries arising out of his employment. When he submitted a fourth claim
        in May 1970 for a back injury suffered during the course of his employment, Mutual of
        Omaha denied coverage &mdash; reclassifying the condition as a non-covered illness
        rather than a covered accidental injury. The denial was reached without a fair
        investigation of the supporting medical evidence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At trial, Shernoff obtained the insurer&rsquo;s internal claim file and demonstrated
        the depth of the home office&rsquo;s involvement in the denial &mdash; demolishing
        any attempt to characterize the mishandling as mere negligence by a rogue adjuster.
        The jury returned a verdict that included $45,600 in compensatory damages, $78,000 in
        general damages, and $5 million in punitive damages against Mutual of Omaha.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On appeal, the California Supreme Court&rsquo;s disposition was nuanced:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Compensatory damages affirmed.</strong> The Court upheld the bad-faith
          liability finding and the compensatory and general damages award.
        </li>
        <li>
          <strong>Punitive damages reversed as excessive.</strong> The Court reversed the
          $5 million punitive damages award as &ldquo;the result of passion and prejudice on
          the part of the jurors&rdquo; &mdash; the award was more than forty times the
          compensatory damages and represented over two months of Mutual&rsquo;s entire 1973
          net income.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        What survives <em>Egan</em> as binding precedent are the legal holdings, not the
        $5 million dollar figure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          An insurer can be liable for bad faith based on its <strong>failure to adequately
          investigate</strong> a policyholder&rsquo;s claim. The insurer need not have
          outright denied the claim &mdash; a biased or inadequate investigation can support
          bad-faith liability where it caused the claim to be wrongly denied, delayed, or
          underpaid.
        </li>
        <li>
          The court addressed the &ldquo;managing agent&rdquo; question for the insurance
          context under the pre-1980 Civil Code &sect; 3294. The California Legislature
          amended &sect; 3294(b) in 1980 to add the express &ldquo;officer, director, or
          managing agent&rdquo; requirement, and the California Supreme Court in{' '}
          <em>White v. Ultramar, Inc.</em> (1999) 21 Cal.4th 563 substantially narrowed the
          test &mdash; requiring the employee to &ldquo;exercise substantial independent
          authority and judgment in their corporate decisionmaking so that their decisions
          ultimately determine corporate policy.&rdquo; Today&rsquo;s managing-agent
          analysis is the <em>White</em> test, not the broader <em>Egan</em> formulation.
          See our companion article on{' '}
          <Link href="/resources/managing-agent-punitive-damages" className="text-blue-700 underline hover:text-blue-900">
            managing agent liability and punitive damages
          </Link>{' '}
          for the modern framework.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Shernoff later described the impact of <em>Egan</em> in characteristically
        dramatic terms: &ldquo;There was no bad faith law before the <em>Egan</em> case. You
        couldn&rsquo;t really fight with insurance companies.&rdquo; The literal claim is
        an overstatement &mdash; <em>Comunale</em>, <em>Crisci</em>, <em>Gruenberg</em>, and{' '}
        <em>Neal</em> all preceded <em>Egan</em> and laid its foundation, as the chronology
        above reflects. But the practical impact Shernoff was describing is real:{' '}
        <em>Egan</em> consolidated the doctrine, made the punitive exposure unavoidable, and
        turned bad-faith litigation from an experimental theory into a working tool.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Egan</em> decision has been cited approximately eight thousand times in appellate arguments across the United States. Shernoff went on to author or co-author four books, including <em>Insurance Bad Faith Litigation</em> (1984, Matthew Bender) &mdash; which became the definitive legal treatise on the subject &mdash; and <em>Payment Refused</em> (1986, Richardson &amp; Steirman), a consumer-oriented book recounting his landmark cases that is now held by the American Museum of Tort Law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Brief Rise and Fall: Third-Party Bad Faith Under <em>Royal Globe</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Royal Globe Insurance Co. v. Superior Court</em> (1979) 23 Cal.3d 880, the California Supreme Court held that Insurance Code section 790.03(h) created a <strong>private cause of action</strong> against insurers. This meant that not just the insurer&rsquo;s own policyholder, but injured third-party claimants could sue the at-fault party&rsquo;s insurer directly for unfair claims practices and seek punitive damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nine years later, in <em>Moradi-Shalal v. Fireman&rsquo;s Fund Insurance Companies</em> (1988) 46 Cal.3d 287, the court reversed course. It overruled <em>Royal Globe</em>, concluding that the decision &ldquo;was incorrectly decided.&rdquo; Section 790.03(h) does not create a private cause of action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After <em>Moradi-Shalal</em>, the primary vehicle for bad faith claims returned to the common-law implied covenant of good faith and fair dealing. However, violations of section 790.03(h) remain relevant as <strong>evidence</strong> of bad faith in cases brought under the implied covenant, even though they no longer support an independent cause of action.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Evolution: From Denial to Delay
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Early Understanding: Bad Faith Required a Wrongful Denial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the early decades of bad faith law, the paradigm case was straightforward: the insurer denied a covered claim, the insured proved the denial was unreasonable, and the insurer was liable for bad faith.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Middle Period: Underpayment as Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts gradually recognized that bad faith could also arise from <strong>underpayment</strong> &mdash; where the insurer acknowledged the claim but paid far less than what was owed. An insurer that paid $20,000 on a $100,000 loss could still breach the implied covenant if the valuation was unreasonable and not supported by a genuine investigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Modern Understanding: Delay Alone Can Constitute Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern California cases have recognized that{' '}
        <strong>unreasonable delay in payment can support bad-faith liability even where the
        insurer ultimately pays everything it owes</strong>, provided the delay was
        unreasonable and without proper cause &mdash; not a delay attributable to a genuine
        dispute or a reasonable ongoing investigation. Money has a time value, and people&rsquo;s
        lives do not pause while they wait for their insurance company. A homeowner who waits
        eighteen months for a claim payment that should have been issued in sixty days may
        lose their home to foreclosure, destroy their credit, exhaust their savings, or
        suffer severe emotional distress. The fact that the insurer eventually writes the
        correct check does not undo any of that harm; bad-faith liability fills the gap that
        contract damages alone cannot.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations (Title 10, California
        Code of Regulations, &sect; 2695.7) impose specific timelines: the insurer must
        accept or deny the claim within forty days of receiving proof of claim, and payment
        must follow within thirty days of settlement. Although <em>Moradi-Shalal v. Fireman&apos;s
        Fund Ins. Co.</em> (1988) 46 Cal.3d 287 bars insureds from suing directly under
        Insurance Code &sect; 790.03 or the implementing regulations, violations of those
        timelines remain admissible as evidence that the insurer&rsquo;s conduct was
        unreasonable in a common-law bad-faith action.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Bad Faith Damages Are Calculated
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contract Damages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The starting point is always the policy benefits owed &mdash; the amount the insurer should have paid under the contract, plus prejudgment interest from the date payment should have been made.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Economic Losses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The real-world financial consequences of the insurer&rsquo;s bad faith: lost business profits, additional interest charges, fees incurred because benefits were not timely paid, foreclosure costs, credit damage, relocation expenses, storage costs, and any other economic harm proximately caused by the insurer&rsquo;s unreasonable conduct.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Emotional Distress
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith claims allow recovery for anxiety, frustration, humiliation, and mental suffering. Under <em>Waters v. United Services Auto. Assn.</em> (1996) 41 Cal.App.4th 1063, the plaintiff must prove some economic loss to validate the emotional distress claim. Under <em>Delos v. Farmers Group, Inc.</em> (1979) 93 Cal.App.3d 642, Brandt fees themselves constitute sufficient economic loss. Once economic loss is established, recovery extends to all emotional distress proximately caused by bad faith. <em>Clayton v. United Services Auto. Assn.</em> (1997) 54 Cal.App.4th 1158.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Brandt Fees (Attorney Fees)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Brandt v. Superior Court</em> (1985) 37 Cal.3d 813, the insured can recover attorney fees incurred to obtain the policy benefits the insurer wrongfully withheld. If the insurer&rsquo;s tortious conduct forced the insured to hire a lawyer just to get benefits already owed, the insurer bears that cost.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Punitive Damages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer&rsquo;s conduct rises to malice, oppression, or fraud &mdash; proven
        by clear and convincing evidence &mdash; punitive damages are available under Civil
        Code &sect; 3294. The <em>Neal</em> three-factor test governs the amount, subject to
        the federal due-process constitutional limits discussed below. Punitive damages
        against a corporate defendant require proof that the bad-faith conduct was authorized
        or ratified by an &ldquo;officer, director, or managing agent&rdquo; per Civil Code
        &sect; 3294(b) and <em>White v. Ultramar</em> (1999) 21 Cal.4th 563.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For claims brought on behalf of senior citizens, disabled persons, or veterans
        alleging unfair or deceptive practices &mdash; including financial elder-abuse claims
        under Welfare &amp; Institutions Code &sect; 15600 et seq. and Unfair Competition Law
        claims under Business &amp; Professions Code &sect; 17200 arising from insurance
        conduct &mdash; Civil Code &sect; 3345 authorizes the trier of fact to enhance certain
        statutorily authorized fines, penalties, or other punitive/deterrent remedies up to
        three times the amount otherwise available. Section 3345 is not a general trebling of
        common-law punitive damages in standard bad-faith cases; it is an enhancement of
        statutory punitive remedies in the narrow protected-class context.
      </p>

      <CalloutBox variant="legal" title="Constitutional Limits on Punitive Damages">
        <p>
          California has no statutory cap on punitive damages in insurance bad faith cases,
          but federal due process imposes a meaningful ceiling. In{' '}
          <em>State Farm Mut. Auto. Ins. Co. v. Campbell</em> (2003) 538 U.S. 408, 425, the
          U.S. Supreme Court held that &ldquo;few awards exceeding a single-digit ratio
          between punitive and compensatory damages, to a significant degree, will satisfy
          due process.&rdquo; The California Supreme Court applied this in{' '}
          <em>Simon v. San Paolo U.S. Holding Co.</em> (2005) 35 Cal.4th 1159, 1182 (ratios
          significantly over 9 or 10 to 1 are &ldquo;suspect&rdquo;) and in{' '}
          <em>Roby v. McKesson Corp.</em> (2009) 47 Cal.4th 686, 719 (where compensatory
          damages are &ldquo;substantial,&rdquo; a 1:1 ratio may be the constitutional
          maximum). In practice, sustainable punitive-to-compensatory ratios in California
          insurance bad-faith cases tend to land in the low single digits.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extra-Contractual Damages vs. Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Extra-contractual damages</strong> is the broader term &mdash; any damages
        beyond the policy benefits. Bad faith is the theory of liability that most commonly
        produces them, but plaintiff-side counsel sometimes evaluate other theories alongside
        bad faith depending on the facts:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fraud and promissory fraud.</strong> Where the insurer&rsquo;s
          misrepresentation about coverage rises to the level of actionable fraud, counsel
          may include a fraud claim. Fraud has its own statutory punitive-damages framework
          under Civil Code &sect; 3294.
        </li>
        <li>
          <strong>Intentional infliction of emotional distress.</strong> Where the
          insurer&rsquo;s behavior is sufficiently extreme and outrageous, an IIED claim is
          sometimes available alongside bad faith. The IIED standard is higher than bad
          faith.
        </li>
        <li>
          <strong>Unfair Competition Law (Business &amp; Professions Code &sect; 17200).</strong>{' '}
          UCL claims have been used in some insurance contexts where the conduct
          constitutes an unfair business practice; whether and how broadly they support
          company-wide discovery is fact- and judge-specific.
        </li>
        <li>
          <strong>Violations of Insurance Code &sect; 790.03(h).</strong> No longer an
          independent cause of action after <em>Moradi-Shalal</em>, but admissible as
          evidence of unreasonable conduct in a common-law bad-faith action.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Which theories to plead, and in what combination, is a question for the
        policyholder&rsquo;s attorney based on the specific facts of the case.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Realistic Perspective: Why Bad Faith Is Hard to Win
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proving bad faith in litigation, surviving the insurer&rsquo;s motion for summary judgment, and persuading a jury to award meaningful damages are three entirely different challenges.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Genuine Dispute Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s most potent defense is the <strong>genuine dispute doctrine</strong>, from <em>Opsal v. United Services Automobile Ass&rsquo;n</em> (1991) 2 Cal.App.4th 1197, expanded in <em>Chateau Chamberay Homeowners Ass&rsquo;n v. Associated International Insurance Co.</em> (2001) 90 Cal.App.4th 335. If the insurer maintained a genuine, good-faith dispute over coverage or the facts, it cannot be liable for bad faith &mdash; even if it turns out to be wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaintiff-bar commentators have labeled one application of the doctrine the
        &ldquo;expert safe harbor&rdquo; &mdash; arguing that the rule, as it has sometimes
        been applied, allows insurers to defeat bad-faith liability simply by retaining an
        expert whose report supports the carrier&rsquo;s position. The label is critical
        commentary, not a phrase the California courts have adopted. The actual test
        continues to require that the insurer&rsquo;s reliance on the expert be both
        reasonable and in good faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>only California Supreme Court decision</strong> directly addressing the doctrine is <em>Wilson v. 21st Century Insurance Co.</em> (2007) 42 Cal.4th 713, which held: &ldquo;The genuine dispute rule does not relieve an insurer from its obligation to thoroughly and fairly investigate, process and evaluate the insured&rsquo;s claim.&rdquo; An insurer cannot focus only on facts supporting denial while ignoring contradictory evidence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What This Means for Policyholders
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Bad-faith disputes are heavily defended.</strong> Where the carrier&rsquo;s
          exposure on a bad-faith theory exceeds the policy benefits, insurers typically
          deploy experienced coverage counsel.
        </li>
        <li>
          <strong>Documentation matters.</strong> The contemporaneous claim file,
          correspondence, adjuster notes, and timeline are the materials that frame any
          later legal analysis &mdash; whether the question is settlement leverage or
          summary-judgment posture.
        </li>
        <li>
          <strong>The genuine dispute doctrine has limits.</strong> California cases have
          recognized that the doctrine does not protect an insurer whose investigation was
          inadequate, whose reliance on experts was unreasonable, or whose conduct ignored
          contradictory evidence &mdash; though the application is fact-specific and
          ultimately a question for counsel.
        </li>
        <li>
          <strong>The factual record is built during the claim, not after.</strong>{' '}
          Plaintiff-side counsel routinely note that the strongest bad-faith records are the
          ones built in real time, with each unreasonable response or missed deadline
          captured in writing.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How This Benefits Homeowners and Property Owners
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Deterrent Effect
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith law&rsquo;s greatest benefit is not in the courtroom &mdash; it is in the claims department. Every adjuster operates knowing that unreasonable handling can expose the carrier to damages far exceeding policy limits. This knowledge changes behavior. The tort of bad faith is the reason insurance companies have compliance departments and internal deadlines.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Leverage in Negotiations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder&rsquo;s attorney raises the possibility of a bad-faith claim
        &mdash; supported by evidence of unreasonable delay, inadequate investigation, or
        lowball offers contradicted by the insurer&rsquo;s own evidence &mdash; the
        carrier&rsquo;s exposure calculation changes. The dispute is no longer weighing the
        cost of paying the claim against a breach-of-contract action; it includes the
        potential tort exposure subject to the constitutional ceiling discussed above.
        Raising the legal theory of bad faith is attorney work, but the factual record
        supporting it is often built during the claims process by the policyholder, the
        policyholder&rsquo;s public adjuster, and counsel.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Protection for the Most Vulnerable
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith law disproportionately protects policyholders whose financial survival depends on timely claim payment. A homeowner displaced by a fire, watching savings evaporate while the insurer investigates, faces catastrophic harm from delay. The recognition that delay itself can constitute bad faith gives that homeowner a legal remedy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort of bad faith was invented &mdash; case by case, verdict by verdict &mdash; by lawyers who recognized that the traditional contract remedy was grotesquely inadequate to address the harm that insurance companies could inflict. William Shernoff, standing before a jury in 1974, was making an argument that had essentially never been made before. The jury agreed. The California Supreme Court agreed. And the law changed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Today, the implied covenant of good faith and fair dealing, the availability of emotional distress damages, the right to Brandt fees, and the possibility of punitive damages are part of the fabric of insurance law in California and across the country. They exist because a handful of lawyers insisted that insurance companies should be accountable for how they treat the people who trust them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        For homeowners and property owners, the lesson is this: an insurance company&rsquo;s
        obligation to its insured goes beyond the dollar amount printed on the policy. The
        insurer owes a duty to handle claims fairly, promptly, and in good faith. Where that
        duty is breached, California law may provide remedies in addition to the policy
        benefits &mdash; though whether and how those remedies apply to a specific claim is a
        question for a licensed California attorney. The strength of any such remedy depends
        on the contemporaneous evidence built during the claims process and the realistic
        assessment of the road ahead.
      </p>

      <CalloutBox variant="tip" title="Key Cases Referenced">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li><em>Comunale v. Traders &amp; General Insurance Co.</em> (1958) 50 Cal.2d 654</li>
          <li><em>Crisci v. Security Insurance Co.</em> (1967) 66 Cal.2d 425</li>
          <li><em>Gruenberg v. Aetna Insurance Co.</em> (1973) 9 Cal.3d 566</li>
          <li><em>Neal v. Farmers Insurance Exchange</em> (1978) 21 Cal.3d 910</li>
          <li><em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809</li>
          <li><em>Brandt v. Superior Court</em> (1985) 37 Cal.3d 813</li>
          <li><em>Moradi-Shalal v. Fireman&rsquo;s Fund Insurance Companies</em> (1988) 46 Cal.3d 287</li>
          <li><em>Wilson v. 21st Century Insurance Co.</em> (2007) 42 Cal.4th 713</li>
        </ul>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-6 mt-6 text-sm italic">
        This article is for informational purposes only and does not constitute legal advice.
        California Insurance Code &sect; 15002 expressly provides that the Public Adjuster
        Act does not authorize the practice of law &mdash; pleading, litigation strategy,
        choice of legal theories, and bad-faith claim filing are attorney work. A public
        adjuster&rsquo;s role is to adjust the claim and document the carrier&rsquo;s
        conduct; an attorney&rsquo;s role is the legal claim. Policyholders facing disputed
        insurance claims should consult with both a licensed public adjuster and an attorney
        experienced in insurance coverage law as the situation warrants.
      </p>
    </>
  )
}
