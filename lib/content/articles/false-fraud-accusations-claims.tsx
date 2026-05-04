import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'False Fraud Accusations in Insurance Claims: When Carriers Weaponize the SIU Process',
  description:
    'How insurers use false or pretextual fraud accusations to deny legitimate claims, the Special Investigations Unit process, policyholder rights during fraud investigations, burden of proof requirements, and practical defense strategies under California law.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a point during some insurance claims where the process shifts from an evaluation
        of damages to something far more hostile. The adjuster stops asking about the scope of the
        loss and starts asking about the policyholder&rsquo;s finances. The questions become
        accusatory. Requests for documentation escalate beyond anything remotely related to the
        claim. The policyholder receives a letter stating that the claim has been &ldquo;referred
        to our Special Investigations Unit for further review.&rdquo; And then, sometimes without
        ever explicitly using the word &ldquo;fraud,&rdquo; the carrier denies the claim based on
        alleged &ldquo;material misrepresentations&rdquo; or &ldquo;inconsistencies&rdquo; in the
        policyholder&rsquo;s sworn statements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the policyholder who has suffered a genuine loss &mdash; whose home burned, flooded,
        or was burglarized &mdash; being treated as a suspected criminal by the company they have
        been paying premiums to for years is devastating. It is also, in far too many cases,
        deliberate. The insurance industry&rsquo;s fraud investigation apparatus, while serving
        a legitimate purpose in identifying actual fraud, can be and is misused as a coverage
        denial tool. Understanding how this process works, what rights policyholders retain, and
        how to defend against pretextual fraud accusations is essential for anyone whose claim
        has entered{' '}
        <Link href="/resources/siu-referral-investigation" className="text-[#2E74B5] underline">
          SIU territory
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Difference Between Legitimate Investigation and Pretextual Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance company has a legal right &mdash; and under California Insurance Code
        section 1875.24, a statutory obligation &mdash; to investigate claims that present
        legitimate indicators of fraud. This right is not disputed. Actual insurance fraud exists
        and imposes real costs on the system. The problem arises when the fraud investigation
        process is deployed not because genuine indicators of fraud exist, but because the claim
        is large, the policyholder has pushed back on a lowball offer, or the carrier simply
        wants to create a pretext for denial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Distinguishing between a legitimate investigation and a pretextual one requires looking
        at the circumstances, the timing, and the pattern of the carrier&rsquo;s conduct. Several
        indicators suggest that a fraud investigation is being used as a weapon rather than a
        genuine inquiry:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The SIU referral coincides with the policyholder&rsquo;s rejection of a
          lowball offer.</strong> When the claim was proceeding normally until the policyholder
          disputed the carrier&rsquo;s valuation, and only then was referred to SIU, the timing
          is revealing. Legitimate fraud indicators do not suddenly materialize because the
          policyholder disagreed with the estimate.
        </li>
        <li>
          <strong>The carrier has not identified any specific factual inconsistency.</strong> A
          legitimate fraud investigation is triggered by something concrete &mdash; a statement
          that contradicts the evidence, documentation that appears altered, a timeline that does
          not add up. A pretextual investigation often proceeds on vague characterizations like
          &ldquo;concerns about the claim&rdquo; without identifying what those concerns
          actually are.
        </li>
        <li>
          <strong>The investigation demands are disproportionate to the claim.</strong> Requests
          for five years of tax returns, bank statements, credit card records, phone records,
          and employment history on a straightforward property damage claim suggest the carrier
          is fishing for something to use against the policyholder rather than investigating a
          genuine fraud concern.
        </li>
        <li>
          <strong>The carrier has hired a &ldquo;cause and origin&rdquo; expert who
          consistently finds for insurers.</strong> In fire claims, some carriers retain
          engineers or fire investigators who have a well-documented pattern of reaching
          conclusions favorable to the insurer. When the same expert appears repeatedly in a
          carrier&rsquo;s denials, it may suggest that the investigation was outcome-driven
          from the start.
        </li>
        <li>
          <strong>The adjuster&rsquo;s demeanor changed abruptly.</strong> A sudden shift from
          a cooperative, professional claims process to an adversarial, hostile posture &mdash;
          often triggered by the policyholder hiring a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Public Adjuster
          </Link>{' '}
          or attorney &mdash; can indicate that the carrier has decided to fight rather than
          pay.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Fraud Accusations Carry Long-Term Consequences">
        <p>
          A fraud-based denial is not like an ordinary coverage denial. If an insurer denies a
          claim on the basis of alleged fraud, it may report the denial to the National Insurance
          Crime Bureau (NICB) and to industry databases. This can make it difficult for the
          policyholder to obtain insurance in the future, regardless of whether the fraud
          allegation was ever substantiated. The stakes of fighting a pretextual fraud
          accusation extend far beyond the immediate claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Burden of Proof: What the Carrier Must Establish
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most important legal principle for policyholders facing fraud
        accusations: in California, the insurer bears the burden of proving fraud, and the
        standard of proof is &ldquo;clear and convincing evidence&rdquo; &mdash; a significantly
        higher threshold than the &ldquo;preponderance of the evidence&rdquo; standard that
        applies to most civil disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code section 2071 and the case law interpreting it, when an
        insurer denies a claim on the ground that the policyholder committed fraud or made
        material misrepresentations, the insurer must prove:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          That the policyholder made a false statement or misrepresentation
        </li>
        <li>
          That the false statement was material to the claim &mdash; meaning it was relevant to
          the insurer&rsquo;s investigation or valuation, not merely a minor inaccuracy
        </li>
        <li>
          That the false statement was made with knowledge that it was false and with the intent
          to deceive the insurer
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        All three elements must be established by clear and convincing evidence. This is a
        demanding standard that requires proof producing a &ldquo;reasonable certainty of the
        truth of the fact asserted.&rdquo; An honest mistake, a faulty recollection, an
        immaterial discrepancy in dates or amounts, or a misunderstanding of a question during
        a recorded statement does not constitute fraud under this standard. The insurer must
        prove deliberate, knowing deception about a matter that actually affected the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Materiality Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The materiality element is often where pretextual fraud denials fail. A policyholder
        who inadvertently overstates the number of shirts in a contents claim, or who
        misremembers the exact date they last serviced the furnace, has not made a
        &ldquo;material&rdquo; misrepresentation even if the statement is technically
        inaccurate. Materiality requires that the misrepresentation relate to a matter that
        would actually influence the insurer&rsquo;s determination of the claim. Carriers
        that seize on trivial inconsistencies to deny entire claims are engaged in exactly the
        kind of pretextual behavior that{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith law
        </Link>{' '}
        is designed to address.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Intent Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proving that a policyholder intended to deceive the insurer is the carrier&rsquo;s
        most difficult burden. People under the stress of a major loss routinely make mistakes
        in their recollections. They confuse dates, forget details, estimate quantities
        imprecisely, and mix up the sequence of events. None of this constitutes intentional
        fraud. The insurer must show that the policyholder knew the statement was false when they
        made it and made the statement specifically to mislead the carrier. A reasonable
        alternative explanation for the inaccuracy &mdash; stress, confusion, honest error,
        ambiguity in the question &mdash; undermines the insurer&rsquo;s claim of intentional
        deception.
      </p>

      <CalloutBox variant="legal" title="Concealment Is Not Fraud Without Intent">
        <p>
          California Insurance Code section 331 defines concealment in insurance contracts, and
          section 359 provides that concealment entitles the insurer to rescind the policy. But
          these provisions apply to concealment at the time of contracting (the application
          stage), not to statements made during claims. The fraud defense to a claim &mdash;
          sometimes called the &ldquo;fraud and concealment&rdquo; provision in the policy
          conditions &mdash; requires proof of willful, intentional misrepresentation during
          the claims process. Inadvertent omissions or unintentional inaccuracies do not
          satisfy this requirement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Examination Under Oath: Rights and Risks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A central tool in the SIU process is the{' '}
        <Link href="/resources/examination-under-oath" className="text-[#2E74B5] underline">
          Examination Under Oath (EUO)
        </Link>. The standard homeowners policy includes a cooperation clause that requires the
        policyholder to submit to an EUO when the insurer requests it. Refusal to submit to an
        EUO can, in some circumstances, provide grounds for the insurer to deny the claim based
        on breach of the cooperation condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An EUO is a formal proceeding, conducted by an attorney representing the insurer, in
        which the policyholder answers questions under oath. A court reporter creates a
        transcript. The examination can cover virtually any topic the insurer deems relevant to
        the claim &mdash; the circumstances of the loss, the policyholder&rsquo;s financial
        condition, the history of the property, the contents inventory, prior insurance claims,
        and more. The scope is often far broader than what would be relevant in a straightforward
        damage assessment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Have an Attorney Present
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders have an absolute right to be represented by their own attorney at an EUO.
        This is not optional for any policyholder facing a potential fraud accusation &mdash; it
        is essential. The insurer&rsquo;s attorney conducting the EUO is an experienced litigator
        whose goal is to elicit testimony that supports a denial. The questions may be designed
        to confuse, to create apparent inconsistencies, or to lead the policyholder into
        statements that can be taken out of context. An unrepresented policyholder in an EUO is
        at a severe disadvantage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Preparation Is Critical
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before attending an EUO, the policyholder should review all documentation they have
        submitted to the carrier, including the{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] underline">
          proof of loss
        </Link>,{' '}
        <Link href="/resources/recorded-statement-preparation" className="text-[#2E74B5] underline">
          recorded statements
        </Link>, contents inventories, and any correspondence with the carrier. Familiarity with
        their own prior statements is critical because the insurer&rsquo;s attorney will compare
        EUO testimony against earlier statements looking for discrepancies. The goal is not to
        memorize a script &mdash; it is to understand what was said before and be prepared to
        explain any differences accurately and honestly.
      </p>

      <CalloutBox variant="tip" title="Answer Only What Is Asked">
        <p>
          During an EUO, answer the question that was asked &mdash; nothing more. Volunteering
          additional information, speculating about matters not specifically asked about, or
          attempting to explain the entire claim narrative in response to a narrow factual
          question gives the insurer&rsquo;s attorney more material to work with. Brief,
          truthful, direct answers are the safest approach. If the question is unclear, ask for
          clarification before answering.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Chilling Effect of Fraud Accusations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most insidious aspects of the pretextual fraud investigation is its chilling
        effect on legitimate claims. When a carrier accuses a policyholder of fraud &mdash; even
        implicitly, through the language of denial letters and the adversarial posture of the SIU
        process &mdash; many policyholders abandon their claims entirely. They are afraid of
        criminal prosecution, embarrassed by the implication, or simply exhausted by a process
        that was designed to exhaust them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This abandonment is not an accidental byproduct of the investigation. It is, in many
        cases, the intended result. The economics are straightforward: for every policyholder who
        walks away from a $100,000 claim because the SIU process made them feel like a criminal,
        the carrier saves $100,000. Even if the fraud allegation would never survive judicial
        scrutiny, the carrier wins if the policyholder gives up before getting to court.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should understand that an SIU investigation, a fraud-based denial, or even
        a referral to the district attorney does not mean they will be prosecuted. District
        attorneys in California have limited resources and generally pursue insurance fraud cases
        only when the evidence is overwhelming and the dollar amount is substantial. An insurer
        referring a claim to the DA is often a pressure tactic &mdash; designed to frighten the
        policyholder &mdash; rather than an indication that prosecution is forthcoming.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Regulatory Protections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law imposes significant constraints on how insurers may conduct investigations
        and the timeframes within which they must act. These protections apply even when a claim
        is under SIU investigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fair Claims Settlement Practices Regulations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Fair Claims Settlement Practices regulations (10 CCR sections 2695.1
        through 2695.17) apply to all claims, including those under investigation. An SIU
        referral does not suspend the insurer&rsquo;s regulatory obligations. The carrier
        must still acknowledge the claim within 15 days of receipt, communicate with the
        policyholder within prescribed timeframes, and either accept or deny the claim within
        40 days of receiving proof of loss &mdash; or provide a written explanation of why
        additional time is needed. Policyholders who believe their carrier is using the SIU
        process to indefinitely delay a claim decision can file a complaint with the{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
          California Department of Insurance
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code Section 790.03
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code section 790.03(h) defines unfair claims settlement practices,
        and several of its provisions directly address the misuse of fraud investigations.
        Conduct that constitutes an unfair practice includes: not attempting in good faith to
        effectuate a prompt and fair settlement when liability has become reasonably clear,
        compelling policyholders to institute litigation to recover amounts due under the policy
        by offering substantially less than the amounts ultimately recovered, and failing to
        promptly provide a reasonable explanation for the denial of a claim. A fraud-based denial
        that lacks factual support may violate one or more of these provisions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Defending Against a Fraud-Based Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier denies a claim on fraud grounds, the policyholder has several avenues of
        response. The appropriate strategy depends on the specific facts, the dollar amount at
        stake, and the strength of the carrier&rsquo;s stated basis for the denial.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Demand the Carrier&rsquo;s Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California&rsquo;s Fair Claims Settlement Practices regulations, the carrier must
        provide a written explanation of its denial that specifies the factual and legal basis.
        A fraud-based denial that simply cites the policy&rsquo;s fraud and concealment provision
        without identifying the specific misrepresentation, explaining how it is material, and
        articulating the basis for believing it was intentional is facially deficient. Demand
        specifics. What statement is the carrier claiming was false? What evidence contradicts it?
        How is the alleged misrepresentation material to the claim? Without answers to these
        questions, the denial is conclusory and potentially actionable as{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Retain an Attorney Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fraud-based denial is qualitatively different from an ordinary coverage dispute. The
        carrier is not just saying the loss is not covered &mdash; it is accusing the policyholder
        of a crime. This changes the nature of the dispute and the stakes involved. An attorney
        experienced in{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
          insurance coverage litigation
        </Link>{' '}
        can assess the strength of the carrier&rsquo;s position, protect the policyholder&rsquo;s
        rights in any ongoing investigation, and pursue bad faith claims if the denial was
        pretextual.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        File a Department of Insurance Complaint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A complaint to the California Department of Insurance places the carrier&rsquo;s conduct
        under regulatory scrutiny. The CDI has authority to investigate unfair claims settlement
        practices and to take enforcement action against carriers that engage in them. While a CDI
        complaint alone will not resolve the claim, it creates a regulatory record and may prompt
        the carrier to reconsider a pretextual denial.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Preserve All Communications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every letter, email, voicemail, and text message exchanged between the policyholder and
        the carrier should be preserved. The timing, tone, and content of these communications
        can be critical evidence in a subsequent bad faith lawsuit. If the claims file shows that
        the carrier was processing the claim normally, then abruptly shifted to an SIU
        investigation after the policyholder disputed the valuation, that pattern is relevant to
        proving that the fraud investigation was pretextual.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bad Faith Dimension
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pretextual fraud accusation is not just an unfair denial &mdash; it is one of the
        strongest bases for a{' '}
        <Link href="/resources/bad-faith-damages" className="text-[#2E74B5] underline">
          bad faith claim
        </Link>. When an insurer accuses a policyholder of fraud without adequate evidence, the
        insurer is engaging in conduct that California courts have found constitutes a breach
        of the implied covenant of good faith and fair dealing. The resulting damages can include
        not only the policy benefits owed but also emotional distress damages and, in egregious
        cases,{' '}
        <Link href="/resources/punitive-damages-bad-faith" className="text-[#2E74B5] underline">
          punitive damages
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The elements that transform a fraud-based denial into a bad faith case include:
        the absence of genuine evidence supporting the fraud allegation, the timing of the
        investigation relative to the policyholder&rsquo;s challenge to the carrier&rsquo;s
        valuation, the carrier&rsquo;s failure to adequately investigate the claim before
        alleging fraud, and the carrier&rsquo;s failure to consider evidence that contradicts
        the fraud theory. When these elements are present, the fraud accusation is not just
        wrong &mdash; it is evidence of the carrier&rsquo;s own bad faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Policyholders Under Investigation
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not panic.</strong> An SIU referral or fraud accusation does not mean
          criminal charges are coming. It means the carrier has decided to fight the claim, and
          the policyholder must now fight back strategically.
        </li>
        <li>
          <strong>Do not make statements without preparation.</strong> Any statement made to
          the carrier &mdash; whether in a{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] underline">
            recorded statement
          </Link>, an EUO, or even a phone call &mdash; can be used to support a fraud
          allegation. Consult an attorney before providing further statements.
        </li>
        <li>
          <strong>Comply with reasonable investigation requests.</strong> Refusing to cooperate
          gives the carrier additional grounds for denial. Provide documents that are reasonably
          related to the claim. But &ldquo;reasonable&rdquo; has limits &mdash; requests for
          personal financial records, medical history, or other materials unrelated to the
          property loss may be objectionable.
        </li>
        <li>
          <strong>Keep your own detailed records.</strong> Document every interaction with the
          carrier. Note dates, times, what was said, and who said it. These records become
          evidence in any subsequent bad faith action.
        </li>
        <li>
          <strong>Do not let shame or fear drive the decision.</strong> Carriers rely on the
          social stigma of fraud accusations to pressure policyholders into silence and
          abandonment. A policyholder with a legitimate claim should not walk away because the
          carrier chose to accuse rather than pay.
        </li>
      </ul>

      {/* ── Sources and Further Reading ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Shernoff Bidart Echeverria LLP</strong> &mdash; As one of California&rsquo;s
          leading policyholder-side firms, Shernoff Bidart Echeverria has extensively litigated
          cases involving pretextual fraud denials and SIU abuse. As the attorneys at Shernoff
          Bidart Echeverria have observed, &lsquo;The fraud defense is the nuclear option in
          insurance claims handling, and when it is deployed without adequate factual support,
          it becomes evidence of the insurer&rsquo;s own bad faith rather than the
          policyholder&rsquo;s misconduct.&rsquo; Search for their publications on SIU
          practices and fraud-based denials.
        </li>
        <li>
          <strong>Anderson Kill P.C.</strong> &mdash; Anderson Kill&rsquo;s policyholder-side
          insurance recovery practice has published analysis on the misuse of fraud
          investigations as claims-handling tools, including the legal standards governing
          the burden of proof and the bad faith implications of unsupported fraud allegations.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; This nonprofit consumer advocacy
          organization has documented patterns of SIU misuse across the industry and provides
          resources for policyholders navigating fraud investigations. Their materials on
          policyholder rights during claim investigations are particularly useful.
        </li>
        <li>
          <strong>Coalition Against Insurance Fraud</strong> &mdash; While primarily an
          industry-funded organization focused on combating actual fraud, the Coalition&rsquo;s
          publications provide insight into how the fraud investigation process is intended to
          operate, which serves as a useful benchmark for identifying when the process has
          been misused.
        </li>
        <li>
          <strong>California Department of Insurance</strong> &mdash; The CDI&rsquo;s Fair
          Claims Settlement Practices regulations (10 CCR sections 2695.1&ndash;2695.17) and
          enforcement actions provide the regulatory framework governing insurer conduct during
          investigations. Search the CDI&rsquo;s enforcement records for actions related to
          unfair investigation practices.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Insurance policies, regulations, and case law vary based on individual
          circumstances. The legal principles discussed here reflect California law as of the
          date of publication and may not apply in other jurisdictions. If your insurer has
          accused you of fraud or denied your claim based on alleged misrepresentations, consult
          a licensed attorney experienced in California insurance bad faith litigation
          immediately.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Facing a Fraud Accusation on a Legitimate Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer has referred your claim to SIU or denied it based on alleged fraud,
          you need professional representation. A licensed Public Adjuster can review the
          claim handling, document the carrier&rsquo;s conduct, and coordinate with legal
          counsel to protect your rights.
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
