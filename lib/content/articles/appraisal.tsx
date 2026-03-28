import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Insurance Appraisal in California: The Complete Guide',
  description:
    'How insurance appraisal works in California — the standard fire policy, the arbitration code, key case law (Kacha, Sharma, Devonwood, Lee v. California Capital), and how to protect your rights.',
}

export default function Content() {
  return (
    <>
      {/* Lead capture — top of page */}
      <div className="bg-[#1F3964] text-white rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-2">Do You Have an Insurance Appraisal — in California or Another State?</h2>
        <p className="text-blue-200 text-sm mb-4">
          Whether you&apos;ve received an appraisal demand from your insurer or you&apos;re
          considering invoking appraisal yourself, a licensed Public Adjuster can serve as your
          appraiser, prepare your estimate, and fight for the full value of your loss. Tell us
          about your situation — no cost, no obligation.
        </p>
      </div>
      <div className="mb-10">
        <LeadCaptureForm
          claimType="appraisal"
          heading="Get Help With Your Appraisal"
          description="Tell us about your appraisal situation — California or any other state. We'll review your claim and explain your options within 1 business day."
        />
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Insurance Appraisal?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance appraisal is a dispute resolution process built into nearly every property
        insurance policy in America. When you and your insurance company agree that a loss is
        covered but cannot agree on <strong>how much</strong> the loss is worth, either party can
        invoke appraisal. Each side selects an appraiser, the two appraisers select a neutral
        umpire, and the panel determines the amount of loss. An agreement by any two of the
        three — both appraisers, or one appraiser and the umpire — sets the value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance appraisal has nothing to do with real estate appraisals. A real estate appraisal
        determines market value for buying, selling, or lending. Insurance appraisal is a private
        dispute resolution mechanism for settling the dollar amount of a claim. They share a name
        and nothing else.
      </p>

      <CalloutBox variant="important">
        <strong>Appraisal resolves amount disputes, not coverage disputes.</strong> If your insurer
        says the loss is not covered at all, appraisal is not the right tool — that is a{' '}
        <Link href="/resources/coverage-disputes" className="underline">coverage dispute</Link>{' '}
        that may require an attorney. Appraisal is for situations where coverage is accepted but
        the insurer&apos;s payment is too low.
      </CalloutBox>

      {/* ====== CALIFORNIA LEGAL FOUNDATION ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Foundation: California&apos;s Standard Fire Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the right to appraisal is not merely a contractual provision — it is
        embedded in state law. California Insurance Code §§ 2070–2071 prescribe the{' '}
        <strong>California Standard Form Fire Insurance Policy</strong>, which every fire
        insurance policy issued in the state must contain or incorporate. Section 2071 includes a
        mandatory appraisal provision that reads, in relevant part:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;In case the insured and this company shall fail to agree as to the actual cash
        value or the amount of loss, then, on the written request of either, each shall select a
        competent and disinterested appraiser and notify the other of the appraiser selected
        within 20 days of the request. Where the request is accepted, the appraisers shall first
        select a competent and disinterested umpire; and failing for 15 days to agree upon the
        umpire, then, on request of the insured or this company, the umpire shall be selected
        by a judge of a court of record in the state in which the property covered is
        located.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means every California homeowner, renter, and commercial property policyholder has a
        statutory right to appraisal. The insurer cannot remove it from the policy — it is
        mandated by the Insurance Code.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Policy vs. the Statute: Wording Differences
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where things get complicated. While the Insurance Code mandates specific appraisal
        language, actual insurance policies often contain <em>different</em> wording. Insurers
        draft their own appraisal clauses, and these clauses do not always conform to the
        statutory language in § 2071. Some policies use different timelines (e.g., 30 days instead
        of 20 to select an appraiser). Some add conditions not found in the statute. Some omit
        language the statute requires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policy language conflicts with the statutory language, the statute controls. The
        California Standard Form Fire Insurance Policy is not a suggestion — it is a floor. The
        insurer can provide more favorable terms to the policyholder, but it cannot take away what
        the statute guarantees. If your policy&apos;s appraisal clause is more restrictive than
        § 2071, the statutory language governs.
      </p>

      <CalloutBox variant="tip" title="Read Both the Policy and the Statute">
        <p>
          When you are dealing with an appraisal, do not rely solely on the appraisal clause in
          your policy. Read California Insurance Code § 2071 as well. If the policy imposes
          conditions or limitations not found in the statute, the statute may override them. This
          is a point that many adjusters — and even some attorneys — miss.
        </p>
      </CalloutBox>

      {/* ====== ARBITRATION CODE ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Unique Rule: Appraisal as Arbitration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most important — and least understood — aspects of insurance appraisal
        in California. Unlike most other states, California courts have held that{' '}
        <strong>insurance appraisal is a form of contractual arbitration</strong> governed by the
        California Arbitration Act, Code of Civil Procedure §§ 1280–1294.2.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was established in <em>Appalachian Ins. Co. v. Rivcom Corp.</em> (1982) 130
        Cal.App.3d 818, where the court held that an appraisal agreement in a standard fire
        insurance policy constitutes an &ldquo;agreement&rdquo; within the meaning of CCP § 1280,
        subdivision (a), and is therefore subject to the statutory contractual arbitration law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This classification has major practical consequences:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Appraisal awards are treated like arbitration awards.</strong> Once issued, an
          appraisal award can be confirmed by a court and becomes an enforceable judgment — just
          like an arbitration award.
        </li>
        <li>
          <strong>100-day deadline to challenge.</strong> After service of the award, a party has
          only 100 days to file a petition to vacate or correct it under CCP § 1288. If you miss
          this window, the award becomes final and cannot be challenged, even if there were
          errors. This is a trap for policyholders who do not understand the timeline.
        </li>
        <li>
          <strong>Grounds for vacating are limited.</strong> Under CCP § 1286.2, an appraisal
          award can only be vacated on narrow grounds: the award was procured by corruption or
          fraud, the panel exceeded its authority, the rights of a party were substantially
          prejudiced by misconduct, or the panel refused to hear material evidence.
        </li>
        <li>
          <strong>Umpires must make neutrality disclosures.</strong> Because the process is
          governed by the arbitration code, umpires are subject to the same disclosure
          requirements as arbitrators. Failure to disclose conflicts of interest is grounds for
          vacating the award.
        </li>
        <li>
          <strong>Proceedings are informal by default.</strong> Under § 2071, appraisal
          proceedings are &ldquo;informal&rdquo; — no formal discovery, no depositions, no
          interrogatories, no formal rules of evidence, and no court reporter unless both
          parties agree otherwise.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How This Differs from Other States
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most states, insurance appraisal is treated as a purely contractual process — not as
        arbitration. This distinction matters. In states like New York, Florida, and Texas, the
        appraisal process is governed almost entirely by the policy language, not by a separate
        arbitration statute. The procedural protections of the arbitration code — the disclosure
        requirements, the specific grounds for vacating, the court confirmation process — do not
        automatically apply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s approach gives the appraisal process more legal structure but also more
        procedural requirements. It means California appraisals are sometimes conducted more
        formally than appraisals in other states, particularly when attorneys are involved. It
        also means the stakes of procedural compliance are higher — miss the 100-day deadline
        and you may lose your right to challenge an unfair award.
      </p>

      <CalloutBox variant="warning" title="The 100-Day Trap">
        <p>
          If you receive an appraisal award you believe is unfair, you have exactly 100 days from
          service of the award to file a petition to vacate or correct it. After 100 days, the
          award is final and cannot be challenged — even in a subsequent lawsuit. This deadline is
          governed by CCP § 1288 and it is strictly enforced. Do not wait.
        </p>
      </CalloutBox>

      {/* ====== HOW IT WORKS ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Appraisal Process Works
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 1: The Written Demand
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Either the insured or the insurer can demand appraisal in writing when there is a
        disagreement about the actual cash value or amount of loss. There is no requirement that
        you exhaust negotiation first, though in practice most appraisals are invoked after
        negotiations have stalled.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 2: Selecting Appraisers (20 Days)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once appraisal is invoked, each side selects a &ldquo;competent and disinterested&rdquo;
        appraiser and notifies the other party within 20 days. Despite the statutory requirement
        of &ldquo;disinterested,&rdquo; in practice each appraiser is selected by and advocates
        for the party that appointed them. Your appraiser represents your interests. The
        insurer&apos;s appraiser represents theirs. You want someone experienced in your specific
        type of loss — a licensed Public Adjuster, a contractor with Xactimate expertise, or
        another qualified professional.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 3: Selecting the Umpire (15 Days)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The two appraisers attempt to agree on a neutral umpire within 15 days. The umpire is the
        tiebreaker. If the appraisers cannot agree, either party can petition a court to appoint
        one. Umpire selection is critical — the umpire&apos;s views often determine the outcome.
        In California, the umpire must make neutrality disclosures required of arbitrators because
        the process is governed by the arbitration code.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 4: The Appraisal Hearing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The panel inspects the property (or reviews documentation if the property has already been
        repaired), reviews competing estimates, examines photographs, and considers any evidence
        the parties submit. The proceedings are informal by default — no court reporter, no formal
        rules of evidence, no discovery. However, when attorneys are involved in California
        appraisals, the process sometimes resembles a more formal arbitration hearing, with
        witnesses and structured presentations.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 5: The Award
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The panel issues a written award. An agreement between any two of the three — both
        appraisers or one appraiser and the umpire — sets the amount of loss. In California,
        the award is treated as an arbitration award and can be confirmed by a court, becoming
        an enforceable judgment.
      </p>

      {/* ====== SCOPE & LIMITATIONS ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Appraisers Can and Cannot Decide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where most appraisal disputes end up in court. The fundamental rule is that
        appraisers are authorized to determine only the <strong>actual cash value</strong> or
        the <strong>amount of loss</strong> of items submitted for their consideration. They
        cannot decide:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Coverage questions</strong> — whether a loss is covered under the policy</li>
        <li><strong>Policy interpretation</strong> — what the policy language means</li>
        <li><strong>Causation</strong> — what caused the damage (absent a separate agreement)</li>
        <li><strong>Fraud or misrepresentation</strong> — whether the insured lied about the loss</li>
        <li><strong>Legal questions</strong> — any question of law</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the California Supreme Court stated in <em>Jefferson Ins. Co. v. Superior Court</em>{' '}
        (1970) 3 Cal.3d 398: &ldquo;The function of appraisers is to determine the amount of
        damage resulting to the insured from a loss&hellip;It is certainly not their function to
        resolve questions of coverage and interpret provisions of the policy.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the line between &ldquo;amount of loss&rdquo; and &ldquo;coverage&rdquo; is not
        always clear — and this ambiguity has generated the most significant California case law
        on the subject.
      </p>

      {/* ====== CASE LAW ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key California Case Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several landmark California appellate decisions define what appraisers can and cannot do.
        If you are involved in an appraisal in California, these cases are essential reading.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Safeco Ins. Co. v. Sharma (1984) 160 Cal.App.3d 1060
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Sharma</em> is the foundational California case on the limits of appraiser authority.
        The insured claimed the theft of 36 18th-century Indian &ldquo;Bundi School&rdquo;
        miniature paintings. The appraisal panel concluded, based on expert testimony, that no
        such matched set existed and reduced the value accordingly. The Court of Appeal held that
        the appraisal panel <strong>exceeded its authority</strong> — determining whether the
        insured actually lost what he claimed to have lost was not a valuation question. It was a
        factual determination about the existence and nature of the loss, which is beyond the scope
        of appraisal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Sharma</em> established the principle that an appraisal panel cannot decide issues of
        misrepresentation or fraud — those matters are reserved for litigation. It also introduced
        the concept of a &ldquo;Sharma waiver,&rdquo; discussed further below.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Kacha v. Allstate Ins. Co. (2006) 140 Cal.App.4th 1023
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Kacha</em>, the insured&apos;s home suffered heat and smoke damage in the 2003
        Cedar Fire in San Diego. Allstate and the insured disagreed on the extent and value of
        damage, and appraisal was invoked. The appraisal panel issued an award using a preamble
        that characterized the damage as &ldquo;attributable to the fire of October 26,
        2003&rdquo; — effectively making a causation determination.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court of Appeal <strong>vacated the award</strong>, holding that the panel exceeded
        its authority by making causation determinations. The court reaffirmed that appraisers may
        determine only the &ldquo;amount of damage&rdquo; to items submitted for their
        consideration — they may not determine &ldquo;questions of coverage&rdquo; such as
        causation, absent a separate stipulation between the parties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Kacha</em> also addressed the &ldquo;Sharma waiver&rdquo; — the idea that parties can
        agree to expand the panel&apos;s authority beyond valuation. The court held that such a
        waiver requires <strong>clear and convincing evidence</strong> of agreement. Language in
        an award form preamble does not constitute a valid waiver of the statutory limitations on
        appraiser authority.
      </p>

      <CalloutBox variant="warning" title="Watch the Award Form Language">
        <p>
          <em>Kacha</em> demonstrates why the language of the appraisal award form matters.
          Defense-side attorneys sometimes draft award forms that include policy terms of art —
          language that, if the award is confirmed, can be used to argue that the appraisal panel
          resolved coverage or causation issues. If you are the insured, scrutinize the award form
          before the panel signs it. Object to language that goes beyond valuation. As attorneys
          Alexander Cohen and David Bederman of ACTS Law have{' '}
          <a
            href="https://www.advocatemagazine.com/article/2022-november/first-party-insurance-appraisals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            warned in <em>Advocate Magazine</em>
          </a>
          , if such an award is confirmed, it can &ldquo;hamstring a future lawsuit for bad
          faith&rdquo; because the court will treat challenges as impermissible collateral attacks
          on the award.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Devonwood Condo. Owners Assn. v. Farmers Ins. Exchange (2008) 162 Cal.App.4th 1498
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Devonwood</em>, a fire damaged a condominium unit in Hercules, California. The
        parties could not agree on the value of the loss, so Devonwood invoked appraisal. The
        panel held hearings, considered evidence, and issued a unanimous award. The trial court
        entered a judgment for the full award amount of $129,939.87.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court of Appeal <strong>reversed</strong>. The key holding: because the scope of
        insurance appraisal is limited to &ldquo;value&rdquo; and &ldquo;the amount of
        loss,&rdquo; an appraisal award <strong>cannot be deemed a determination of all issues
        affecting an insurer&apos;s liability</strong>. Where there are outstanding issues
        regarding coverage, deductibles, or policy limits, a trial court may not simply enter a
        money judgment for the full award amount. Those issues must be resolved separately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Devonwood</em> is critical because it clarifies the relationship between appraisal
        and the broader claim. An appraisal award determines the value of the loss — but it does
        not end the claim. The insurer may still contest coverage, apply deductibles, assert
        policy limits, or raise other defenses. The award is one piece of the puzzle, not the
        entire picture.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Lee v. California Capital Ins. Co. (2015) 237 Cal.App.4th 1154
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Lee</em> is one of the most detailed California appellate opinions on the scope of
        appraisal panel authority. An apartment building in Oakland was damaged by fire in
        November 2010. The insured claimed that fire or smoke damaged six of twelve apartments.
        California Capital argued the flames did not extend beyond one unit and that the insured
        was inflating the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court made a critical distinction: <strong>the existence of damage to an item and the
        nature of the damaged item are factors that directly bear upon valuation</strong>, and an
        appraisal panel may assign values to items where the extent of damage is disputed.
        However, an appraisal panel <strong>cannot assign zero value</strong> based on causation
        disputes, fraud accusations, or determinations that property was undamaged or never
        existed. Those are coverage and credibility determinations reserved for the courts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Lee</em> also reaffirmed that all fire policies in California must include an
        appraisal provision as set forth in Insurance Code § 2071, and that under this provision,
        the parties are required to participate in the appraisal when there is a disagreement
        about actual cash value or amount of loss.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Other Important Cases
      </h3>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong><em>Jefferson Ins. Co. v. Superior Court</em> (1970) 3 Cal.3d 398</strong> —
          The California Supreme Court case that established the foundational rule: appraisers
          determine the amount of damage, not questions of coverage or policy interpretation.
        </li>
        <li>
          <strong><em>Kirkwood v. California State Auto. Assn.</em> (2011) 193 Cal.App.4th 49</strong> —
          Held that appraisers have authority &ldquo;to determine only a question of fact, namely
          the actual cash value or amount of loss of a given item,&rdquo; and distinguished
          appraisers from arbitrators who exercise broader judicial functions.
        </li>
        <li>
          <strong><em>Maslo v. Ameriprise Auto &amp; Home Ins.</em> (2014) 227 Cal.App.4th 626</strong> —
          Established that insurers cannot escape{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
          liability simply by using the appraisal process. An insurer that lowballs a claim and
          then demands appraisal is not immunized from bad faith for the pre-appraisal conduct.
        </li>
        <li>
          <strong><em>Brehm v. 21st Century Ins. Co.</em> (2008) 166 Cal.App.4th 1225</strong> —
          Held that the arbitration rights in an appraisal include &ldquo;an implied obligation to
          honestly assess the claim.&rdquo; Both parties must participate in good faith.
        </li>
      </ul>

      {/* ====== SHARMA WAIVER — COMPREHENSIVE ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Sharma Waiver&rdquo;: What It Is, Why It Matters, and How to Handle It
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What Is a Waiver in Appraisal?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As established above, California law strictly limits what an appraisal panel can decide.
        Under Insurance Code § 2071 and the case law from <em>Sharma</em>, <em>Kacha</em>,
        and their progeny, the panel&apos;s authority is confined to one thing: determining the{' '}
        <strong>actual cash value or amount of loss</strong>. The panel cannot decide coverage,
        causation, fraud, policy interpretation, or any other legal question.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>&ldquo;Sharma waiver&rdquo;</strong> is an agreement — named after the 1984
        <em> Safeco v. Sharma</em> case — in which both parties consent to expand the appraisal
        panel&apos;s authority beyond its normal statutory limits. By signing a waiver, you are
        agreeing to let the appraisers decide issues they would not otherwise have the power to
        decide — such as what caused the damage, whether certain items were actually damaged, or
        how the policy should be interpreted.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In plain terms: <strong>a Sharma waiver gives away rights you currently
        have</strong>. Without the waiver, the insurer must prove coverage defenses in court,
        where you have the protections of formal legal proceedings — discovery, rules of evidence,
        a judge, and the right to appeal. With a waiver, those issues are decided by the appraisal
        panel in an informal proceeding with none of those protections.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How Insurers Propose Waivers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies propose waivers in several ways. Some are obvious. Some are not.
        Understanding how they appear is the first step to protecting yourself.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        1. The Explicit Written Stipulation
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most straightforward approach: the insurer&apos;s attorney or adjuster sends you (or
        your Public Adjuster or attorney) a written agreement — sometimes called a
        &ldquo;stipulation,&rdquo; &ldquo;appraisal protocol,&rdquo; or &ldquo;scope
        agreement&rdquo; — that asks both parties to agree that the appraisal panel will decide
        certain issues beyond valuation. For example, it might state that the panel will determine
        &ldquo;the cause and origin of the damage&rdquo; or &ldquo;which items of damage are
        attributable to the covered peril.&rdquo; This is a Sharma waiver. It is asking you to
        give the panel authority it does not have by default.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        2. The Award Form Preamble
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the more dangerous approach — and the one <em>Kacha</em> specifically addressed.
        Instead of asking for an explicit waiver up front, the insurer&apos;s side drafts the
        appraisal award form with language that embeds coverage or causation determinations into
        the award itself. For example, an award preamble that says the panel has determined
        &ldquo;damage attributable to the fire of October 26, 2003&rdquo; is making a causation
        finding — it is saying the panel decided <em>what caused</em> the damage, not just how
        much it is worth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you sign that award form without objecting, the insurer can later argue that you
        agreed to let the panel decide causation — a de facto Sharma waiver. And once the award
        is confirmed by a court, challenging it becomes nearly impossible.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        3. Policy Terms of Art in the Award
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        As attorneys Cohen and Bederman have{' '}
        <a
          href="https://www.advocatemagazine.com/article/2022-november/first-party-insurance-appraisals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          warned
        </a>
        , defense-side attorneys sometimes draft award forms using{' '}
        <strong>express policy language or related terms of art</strong> to describe portions of
        the award. For example, labeling an award section &ldquo;Coverage A — Dwelling&rdquo;
        or &ldquo;ALE — Shortest Time to Repair&rdquo; borrows language directly from the
        policy. If that award is confirmed, the insurer can argue that the panel made a
        determination about those specific coverage categories — and that any future lawsuit
        challenging those amounts is an impermissible &ldquo;collateral attack&rdquo; on a
        confirmed arbitration award. This effectively forecloses a bad faith lawsuit on those
        issues.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        4. Verbal Agreements or Informal Understandings
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the expansion of panel authority happens informally during the appraisal
        itself — the insurer&apos;s appraiser begins arguing causation before the umpire, and
        nobody objects. If the panel then makes causation findings in the award, the insurer may
        argue that all parties implicitly agreed to expand the scope. While <em>Kacha</em> held
        that a valid waiver requires clear and convincing evidence, it is far better to prevent
        the issue from arising than to litigate it afterward.
      </p>

      <CalloutBox variant="important" title="The Key Principle: A Waiver Gives Away Your Rights">
        <p>
          Without a waiver, the insurer must litigate coverage and causation disputes in court,
          where you have full legal protections. With a waiver, those issues are decided by the
          appraisal panel — informally, with no discovery, no rules of evidence, and limited
          grounds for appeal. There is almost never a reason for the policyholder to agree to
          expand the panel&apos;s authority. The waiver benefits the insurance company, not you.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What the Case Law Says About Waivers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have set a high bar for enforcing Sharma waivers:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong><em>Sharma</em> (1984):</strong> Recognized that parties <em>can</em> agree to
          expand the panel&apos;s authority, but established the default rule that appraisers are
          limited to valuation. The concept of a &ldquo;Sharma waiver&rdquo; originates here.
        </li>
        <li>
          <strong><em>Kacha</em> (2006):</strong> The most important waiver case. Allstate
          argued that the insured had waived the statutory limitations by agreeing to the award
          form&apos;s preamble language about damage &ldquo;attributable to the fire.&rdquo; The
          court rejected this argument. The insured testified he never intended to waive
          <em> Sharma</em> or § 2071, and the court agreed. The holding:{' '}
          <strong>a Sharma waiver requires clear and convincing evidence</strong> of a knowing,
          intentional agreement to expand the panel&apos;s scope. Boilerplate language in an
          award form — even language both parties signed — does not meet that standard. The best
          evidence of a valid waiver is a <strong>separate written stipulation</strong>,
          signed by both parties, that expressly references and waives Insurance Code § 2071
          and the <em>Sharma/Kacha</em> limitations.
        </li>
        <li>
          <strong><em>Lee v. California Capital</em> (2015):</strong> Further clarified the
          boundary. The court held that the panel can consider whether damage exists to an item
          (because existence of damage bears directly on valuation), but cannot make zero-value
          determinations based on causation disputes or fraud accusations. This shows how even
          without a waiver, the line between valuation and coverage can blur — making it all the
          more important to keep the panel&apos;s scope clearly defined from the start.
        </li>
        <li>
          <strong><em>Devonwood</em> (2008):</strong> Even when an appraisal award has been
          issued, it does not resolve all issues. The insurer can still raise coverage,
          deductible, and policy limit defenses. This means even a favorable award does not
          automatically result in payment — and a waiver that expanded the panel&apos;s authority
          could undermine your ability to fight coverage issues separately.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How to Handle a Waiver Proposal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company — or the insurer&apos;s appraiser, attorney, or adjuster —
        proposes any form of waiver or scope expansion, here is what you should do:
      </p>

      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">Step-by-Step Response to a Waiver Proposal</h4>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-sm">
          <li>
            <strong>Do not sign anything immediately.</strong> Any document that asks you to agree
            to expand the appraisal panel&apos;s authority — whether it is called a
            &ldquo;stipulation,&rdquo; &ldquo;protocol,&rdquo; &ldquo;scope agreement,&rdquo;
            or anything else — requires careful review before signing.
          </li>
          <li>
            <strong>Identify the expansion.</strong> Look for any language that asks the panel to
            determine causation, coverage, policy interpretation, the &ldquo;cause or origin&rdquo;
            of damage, whether items &ldquo;existed,&rdquo; or any issue beyond the actual cash
            value or amount of loss. If the document uses policy terms of art (Coverage A,
            Coverage B, &ldquo;period of restoration,&rdquo; &ldquo;shortest time to
            repair&rdquo;), it may be embedding coverage determinations into the award.
          </li>
          <li>
            <strong>Decline the waiver in writing.</strong> Respond with a clear written statement
            that you do not agree to expand the panel&apos;s authority beyond its statutory scope
            under Insurance Code § 2071 and the holdings of <em>Sharma</em> and <em>Kacha</em>.
            State that the appraisal panel&apos;s authority is limited to determining the actual
            cash value and amount of loss, and that all coverage, causation, and policy
            interpretation issues are reserved for separate resolution.
          </li>
          <li>
            <strong>Propose clean award form language.</strong> If the insurer has drafted an
            award form, review it carefully and object to any language that goes beyond valuation.
            Propose neutral language — for example, &ldquo;The panel has determined the actual cash
            value and amount of loss as follows&rdquo; — without causation findings, policy terms
            of art, or coverage determinations.
          </li>
          <li>
            <strong>Object on the record during the appraisal.</strong> If the insurer&apos;s
            appraiser begins arguing causation or coverage issues before the umpire during the
            appraisal hearing, object immediately. State on the record that these issues are
            beyond the panel&apos;s authority and that you do not consent to expanding the scope.
            Even though proceedings are informal, making your objection known prevents the insurer
            from later claiming you implicitly agreed.
          </li>
          <li>
            <strong>Consult a professional.</strong> If you are not represented by a{' '}
            <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
              Public Adjuster
            </Link>{' '}
            or attorney, get one involved before the appraisal proceeds. Waiver issues are
            consequential — they can determine whether you preserve or lose the right to litigate
            coverage and bad faith issues.
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        When (If Ever) a Waiver Might Make Sense
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In rare circumstances, a policyholder might <em>choose</em> to agree to a limited scope
        expansion — for example, if the only dispute is whether water damage was caused by a
        sudden pipe burst (covered) or a long-term leak (potentially excluded), and the
        policyholder is confident the evidence supports their position. In that scenario, letting
        the panel resolve causation during the appraisal could be faster and cheaper than
        litigating it separately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But this is the exception, not the rule. Agreeing to a waiver means giving up the
        procedural protections of court — discovery, rules of evidence, a judge, and meaningful
        appellate review. In most cases, if the insurer wants to dispute causation or coverage,
        they should have to do it in court, where the burden of proof is on them. Do not make it
        easier for them by waiving your rights in an informal appraisal proceeding.
      </p>

      <CalloutBox variant="warning" title="The Bottom Line on Waivers">
        <p>
          The default rule protects you: the appraisal panel decides how much, not whether or why.
          If the insurance company proposes a waiver, they are asking you to give up that
          protection. In the vast majority of cases, the answer should be no. Decline in writing,
          cite § 2071 and <em>Kacha</em>, and keep the panel focused on valuation.
        </p>
      </CalloutBox>

      {/* ====== CONSEQUENCES ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Consequences of Refusing to Participate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because appraisal is both a contractual obligation (written into the policy) and governed
        by statutory law (the arbitration code), refusing to participate has serious consequences.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>If the insured refuses:</strong> The insurer can argue the insured breached the
          policy conditions, potentially forfeiting the right to dispute the amount of loss and
          the right to sue.
        </li>
        <li>
          <strong>If the insurer refuses:</strong> The insured may have additional legal remedies,
          including a petition to compel appraisal under the arbitration code.
        </li>
        <li>
          <strong>Bad faith participation:</strong> Appointing an unqualified appraiser, refusing
          to cooperate on umpire selection, or obstructing the process can create liability for
          either party.
        </li>
      </ul>

      <CalloutBox variant="important" title="Do Not Ignore an Appraisal Demand">
        <p>
          If your insurance company sends you a written demand for appraisal, you must respond.
          Ignoring it can be treated as a breach of your policy. Even if you believe the demand is
          premature or that there are unresolved coverage issues, respond in writing — you can
          participate in appraisal while preserving your right to dispute coverage separately.
        </p>
      </CalloutBox>

      {/* ====== GOVERNMENT DISASTER EXCEPTION ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Government-Declared Disaster Exception
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code § 2071 includes a provision that appraisal{' '}
        <strong>cannot be compelled in the event of a government-declared disaster</strong>. This
        is a significant protection for California policyholders. After a wildfire, earthquake, or
        other declared disaster, the insurer cannot force you into appraisal to resolve a
        valuation dispute. You retain the option to invoke appraisal yourself if you choose, but
        the insurer cannot compel it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This exception exists because disaster situations create unique power imbalances —
        displaced policyholders dealing with total losses should not be forced into an unfamiliar
        dispute resolution process while they are still in crisis.
      </p>

      {/* ====== WHEN TO INVOKE ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Appraisal Makes Sense
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Appraisal is most effective when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Coverage is not in dispute — the insurer agrees the loss is covered but is underpaying
        </li>
        <li>
          The dispute is primarily about the{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">scope of loss</Link>{' '}
          or the dollar value of repairs
        </li>
        <li>
          Negotiations have stalled and the insurer is not budging from a lowball position
        </li>
        <li>
          You have a strong competing estimate (ideally an{' '}
          <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate estimate</Link>)
          that supports a higher value
        </li>
        <li>
          You want a faster and less expensive resolution than litigation
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Appraisal is generally <em>not</em> the right tool when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer is denying coverage entirely — that is a{' '}
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">coverage dispute</Link>{' '}
          requiring legal action
        </li>
        <li>
          You believe the insurer has acted in{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
          and want to pursue damages beyond the policy — appraisal only determines the loss
          amount, not bad faith damages
        </li>
        <li>
          The claim involves a government-declared disaster and the insurer is trying to compel
          appraisal to limit your options
        </li>
      </ul>

      {/* ====== CHOOSING YOUR APPRAISER ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Choosing Your Appraiser
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your choice of appraiser is the single most important decision in the appraisal process.
        The statute requires a &ldquo;competent and disinterested&rdquo; appraiser, but there is
        no licensing requirement or formal qualification standard. In practice, you want someone
        who:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Has extensive experience with your type of loss (fire, water, wind, etc.)</li>
        <li>
          Is proficient with{' '}
          <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate</Link>{' '}
          — the industry-standard estimating software
        </li>
        <li>Understands California appraisal law and the arbitration code framework</li>
        <li>Has experience with the appraisal process specifically, not just claims adjusting</li>
        <li>Can effectively advocate for your position before the umpire</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          Public Adjuster
        </Link>{' '}
        is often the best choice to serve as your appraiser. Public Adjusters work exclusively for
        policyholders, use the same estimating tools the insurance company uses, and understand the
        tactics insurers deploy in appraisal proceedings.
      </p>

      {/* ====== FURTHER READING ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Further Reading
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For attorneys and professionals who want to go deeper into California appraisal law:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <a
            href="https://www.advocatemagazine.com/article/2022-november/first-party-insurance-appraisals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            &ldquo;First-Party Insurance Appraisals&rdquo;
          </a>{' '}
          — Alexander Cohen &amp; David Bederman, <em>Advocate Magazine</em> (Nov. 2022). Detailed
          analysis of award form drafting tactics, the 100-day vacatur window, and bad faith
          implications.
        </li>
        <li>
          <a
            href="https://marinbar.org/news/article/?type=news&id=34"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            &ldquo;Insurance Policy Appraisal — Arbitrating a Property Claim&rdquo;
          </a>{' '}
          — Brendan J. Fogarty, Marin County Bar Association. Overview of the arbitration code
          framework and how California appraisals differ from other states.
        </li>
        <li>
          <a
            href="https://www.propertyinsurancecoveragelaw.com/blog/do-typical-insurance-appraisers-follow-california-code-of-civil-procedure-1282-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            &ldquo;Do Typical Insurance Appraisers Follow California Code of Civil Procedure
            1282.2?&rdquo;
          </a>{' '}
          — Chip Merlin, <em>Property Insurance Coverage Law Blog</em>. Discussion of whether
          California appraisals in practice follow the formal procedures the arbitration code
          technically requires.
        </li>
        <li>
          <a
            href="https://www.lawpipe.com/California/Insurance_Appraisals_Law_and_Landmark_California_Cases.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            &ldquo;Insurance Appraisals Law and Landmark California Cases&rdquo;
          </a>{' '}
          — LawPipe. Compilation of California appellate decisions defining the scope of appraiser
          authority.
        </li>
      </ul>

      {/* ====== BOTTOM CTA ====== */}
      <div className="bg-[#1F3964] text-white rounded-xl p-6 mt-8">
        <h3 className="text-xl font-bold mb-2">Need Help With an Appraisal?</h3>
        <p className="text-blue-200 text-sm mb-4">
          Whether you&apos;re the one invoking appraisal or your insurance company has demanded it,
          having an experienced professional on your side makes the difference. As a licensed
          California Public Adjuster, I serve as the policyholder&apos;s appraiser, prepare
          detailed Xactimate estimates, and advocate for the full value of your loss through the
          appraisal process.
        </p>
        <Link href="/contact" className="btn-gold inline-block">
          Request a Free Appraisal Consultation →
        </Link>
      </div>
    </>
  )
}
