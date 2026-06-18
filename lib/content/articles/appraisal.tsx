import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Insurance Appraisal in California: The Complete Guide',
  description:
    'How insurance appraisal works in California — the standard fire policy, the arbitration code, key case law (Kacha, Sharma, Devonwood, Lee v. California Capital), and how to protect your rights.',
  summary:
    'Insurance appraisal is a contractual process to resolve disputes over the amount of loss, using each side\'s appraiser and a neutral umpire. This guide covers California\'s standard fire policy, the arbitration code, key case law, and how to protect your rights.',
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

      {/* Lead capture — top of page */}
      <div className="bg-[#1F3964] text-white rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-2">Do You Have an Insurance Appraisal — in California or Another State?</h2>
        <p className="text-blue-200 text-sm mb-4">
          Whether you have received an appraisal demand from your insurer or you are
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

      <CalloutBox variant="info" title="About This Article">
        <p>
          This article discusses the insurance appraisal process in California, including relevant case
          law as analyzed by California insurance attorneys. This is educational information, not legal
          advice. The appraisal process has both procedural and legal components &mdash; consult with a licensed
          attorney regarding any legal questions specific to your claim.
        </p>
      </CalloutBox>

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
        insurance policy issued in the state must contain or incorporate. Section 2071 includes
        a mandatory appraisal provision that reads in full:
      </p>

      <CalloutBox variant="legal" title="Cal. Ins. Code § 2071 — Appraisal Provision">
        <p className="italic">
          In case the insured and this company shall fail to agree as to the actual cash value
          or the amount of loss, then, on the written request of either, each shall select a
          competent and disinterested appraiser and notify the other of the appraiser selected
          within 20 days of the request. Where the request is accepted, the appraisers shall
          first select a competent and disinterested umpire; and failing for 15 days to agree
          upon the umpire, then, on request of the insured or this company, the umpire shall be
          selected by a judge of a court of record in the state in which the property covered
          is located. Appraisal proceedings are informal unless the insured and this company
          mutually agree otherwise. For purposes of this section, &ldquo;informal&rdquo; means
          that no formal discovery shall be conducted, including depositions, interrogatories,
          requests for admission, or other forms of formal civil discovery, no formal rules of
          evidence shall be applied, and no court reporter shall be used for the proceedings.
          The appraisers shall then appraise the loss, stating separately actual cash value and
          loss to each item; and, failing to agree, shall submit their differences, only, to
          the umpire. An award in writing, so itemized, of any two when filed with this company
          shall determine the amount of actual cash value and loss. Each appraiser shall be
          paid by the party selecting him or her and the expenses of appraisal and umpire shall
          be paid by the parties equally. In the event of a government-declared disaster, as
          defined in the Government Code, appraisal may be requested by either the insured or
          this company but shall not be compelled.
        </p>
      </CalloutBox>
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
        The California Rule: Appraisal Is Its Own Process, Governed in Part by the Arbitration
        Code
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Appraisal is not arbitration. It is its own dispute resolution mechanism, with a narrower
        function and a more limited scope than a general arbitration. But California has done
        something most other states have not: it has placed insurance appraisal under the
        procedural framework of the California Arbitration Act for purposes of enforcement,
        judicial review, umpire disclosures, and the conduct of the proceeding itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanism is a 1961 amendment to the California Arbitration Act. Code of Civil
        Procedure &sect; 1280(a) was rewritten to expand the definition of an
        &ldquo;agreement to arbitrate&rdquo; to include &ldquo;agreements providing for
        valuations, appraisals and similar proceedings.&rdquo; That amendment is what brings
        insurance appraisal into the arbitration code&rsquo;s procedural reach.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The leading California case applying this to insurance appraisal is{' '}
        <em>Appalachian Ins. Co. v. Rivcom Corp.</em> (1982) 130 Cal.App.3d 818, where the
        court held that an appraisal agreement in a standard fire insurance policy constitutes
        an &ldquo;agreement&rdquo; within the meaning of CCP &sect; 1280(a) and is therefore
        subject to the statutory contractual arbitration law. Later cases &mdash;{' '}
        <em>Klubnikin v. California Fair Plan Assn.</em> (1978) 84 Cal.App.3d 393,{' '}
        <em>Louise Gardens of Encino Homeowners Assn., Inc. v. Truck Ins. Exchange, Inc.</em>{' '}
        (2000) 82 Cal.App.4th 648, <em>Lambert v. Carneghi</em> (2008) 158 Cal.App.4th 1120,
        and <em>Mahnke v. Superior Court</em> (2009) 180 Cal.App.4th 565 &mdash; applied
        that framework to specific procedural questions: arbitral immunity for appraisers,
        statutory disclosure requirements for the umpire, judicial confirmation and vacatur
        deadlines, and the like.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some of those opinions use the shorthand &ldquo;an appraisal proceeding pursuant to
        section 2071 is an arbitration.&rdquo; <em>Lambert</em>, for example, uses that exact
        phrase. Read in context, the shorthand means &ldquo;appraisal is treated as arbitration
        for purposes of the Arbitration Act&rsquo;s procedural rules&rdquo; &mdash; not that
        appraisal becomes a full-scope arbitration capable of deciding any issue the parties
        might want decided. Appraisal remains, in California as elsewhere, a narrower valuation
        process. The distinction matters for what the panel can and cannot do at the hearing,
        and for how the award is challenged afterward.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This procedural classification has major practical consequences:
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
          <strong>Grounds for vacating are limited.</strong> Under CCP § 1286.2(a), a court shall
          vacate an arbitration (including appraisal) award if it determines: (1) the award was
          procured by corruption, fraud or other undue means; (2) there was corruption in any of
          the arbitrators; (3) the rights of the party were substantially prejudiced by
          misconduct of a neutral arbitrator; (4) the arbitrators exceeded their powers and the
          award cannot be corrected without affecting the merits; (5) the rights of the party
          were substantially prejudiced by refusal to postpone the hearing on sufficient cause
          or refusal to hear material evidence, or other conduct contrary to the arbitration
          title; or (6) an arbitrator failed to disclose disqualification grounds or failed to
          disqualify upon demand. These are narrow grounds; an unfavorable award alone is not a
          basis for vacatur.
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
        How Appraisal Differs From a General Arbitration
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even though California treats insurance appraisal as a form of contractual arbitration
        for procedural purposes, the two processes differ substantively in ways that matter at
        the hearing and after the award. Calling appraisal &ldquo;arbitration&rdquo; is
        convenient shorthand for the procedural treatment &mdash; it is not an accurate
        description of the proceeding itself.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scope of the panel&rsquo;s authority.</strong> An appraisal panel determines
          only the actual cash value or amount of loss for items submitted to it. A general
          arbitration panel can decide whatever the parties have agreed to submit, including
          legal questions, coverage questions, contract interpretation, fraud, and bad faith.
          An appraisal panel cannot decide any of those things &mdash; and an award that tries
          to is vulnerable to vacatur (<em>Kacha</em>, <em>Lee</em>).
        </li>
        <li>
          <strong>What is being adjudicated.</strong> Appraisal is a valuation process.
          Arbitration is binding dispute resolution that may include valuation but is not
          limited to it. An appraisal award answers a single question: how much is the loss
          worth? An arbitration award can answer questions of liability, coverage, causation,
          damages, equitable relief, and any combination of those.
        </li>
        <li>
          <strong>Procedure.</strong> Section 2071 declares appraisal proceedings
          &ldquo;informal&rdquo; by default &mdash; no formal discovery, no formal rules of
          evidence, no court reporter unless both parties agree. A general arbitration is less
          formal than litigation but typically involves discovery, structured evidentiary
          presentation, and a more deliberative hearing process. The two feel different in
          practice even when experienced professionals are involved.
        </li>
        <li>
          <strong>Panel composition.</strong> An appraisal panel consists of two party-selected
          appraisers (each required by &sect; 2071 to be &ldquo;competent and disinterested,&rdquo;
          although in practice each commonly advances the position of the selecting party) and
          one neutral umpire (who carries the statutory disclosure obligations of a neutral
          arbitrator under CCP &sect; 1281.9). A general arbitration panel is typically one
          neutral arbitrator or three neutral arbitrators &mdash; not the party-appointed /
          neutral hybrid that &sect; 2071 prescribes.
        </li>
        <li>
          <strong>Decision rule.</strong> Any two of the three appraisal panel members can
          sign the award (the umpire plus either party appraiser, or both party appraisers
          agreeing without the umpire). General arbitration decisions are usually unanimous or
          by majority of a neutral panel.
        </li>
        <li>
          <strong>Statutory source.</strong> The appraisal provision is mandated by Cal. Ins.
          Code &sect;&sect; 2070&ndash;2071 and is built into every fire insurance policy
          issued in California. Arbitration is purely contractual &mdash; the parties must
          have agreed to it, and the terms of that agreement set the scope.
        </li>
        <li>
          <strong>Finality of the award.</strong> An appraisal award determines the amount of
          loss only; it does not resolve coverage, deductibles, policy limits, or whether the
          insurer must pay (<em>Devonwood</em>). An arbitration award typically resolves all
          submitted issues with finality.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The procedural overlay from the arbitration code applies the same way to both
        proceedings &mdash; enforcement under CCP &sect; 1285, judicial review under
        &sect; 1286.2, the 100-day vacatur deadline under &sect; 1288, the umpire&rsquo;s
        disclosure obligations under &sect; 1281.9, and so on. But the substance of what the
        panel can decide is fundamentally different. Treating those two layers as a single
        thing &mdash; &ldquo;appraisal is arbitration&rdquo; &mdash; is exactly how
        policyholders end up surprised by what their appraisal panel cannot do, and by what
        they still need a court to resolve after the award is signed.
      </p>

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

      <CalloutBox variant="warning" title="The 100-Day Deadline to Challenge an Appraisal Award">
        <p>
          Because appraisal in California is treated as a form of arbitration, the deadline to
          challenge an award is governed by California Code of Civil Procedure § 1288, which
          provides:
        </p>
        <p className="italic mt-2">
          A petition to confirm an award shall be served and filed not later than four years
          after the date of service of a signed copy of the award on the petitioner. A petition
          to vacate an award or to correct an award shall be served and filed not later than
          100 days after the date of the service of a signed copy of the award on the
          petitioner.
        </p>
        <p className="mt-2">
          <strong>In plain language:</strong> once the appraisal award is served, the window
          to petition a court to vacate or correct it closes at 100 days. Courts apply this
          deadline strictly. An insured who is considering challenging an award should consult
          an attorney well before that window closes.
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
      <p className="text-gray-700 leading-relaxed mb-4">
        Put the demand in writing, reference the specific policy provision authorizing appraisal,
        state the items in dispute, identify your appraiser, and serve it on the other side in a
        way you can prove (email with read receipt, certified mail, or a carrier-portal upload
        that timestamps the submission). California courts treat the written demand as the
        effective invocation, so preserve a clean record of what was demanded and when.
      </p>

      <CalloutBox variant="important" title="Suit-Limitation Period: 12 Months — or 24 Months for State-of-Emergency Losses">
        <p>
          California Insurance Code &sect; 2071 &mdash; the Standard Fire Policy &mdash; contains
          a suit-limitation clause requiring the insured to file suit within{' '}
          <strong>12 months</strong> after &ldquo;inception of the loss.&rdquo;{' '}
          <strong>For losses related to a state of emergency, as defined in Government Code
          &sect; 8558(b), the period extends to 24 months.</strong> Most wildfire and major
          disaster claims involve a declared state of emergency and therefore fall under the
          24-month extension. The shorter 12-month period applies to ordinary, non-emergency
          losses.
        </p>
        <p className="mt-3">
          Because California treats insurance appraisal as a form of contractual arbitration
          for procedural purposes (see <em>Appalachian Ins. Co. v. Rivcom Corp.</em> (1982) 130
          Cal.App.3d 818), the California Arbitration Act&rsquo;s procedural overlay applies to
          appraisal. Under CCP &sect; 1281.4, a court must stay an action pending the outcome of
          a related arbitration. The published California Court of Appeal authority, however, is
          consistent in <em>declining</em> to extend equitable tolling beyond the
          notice-to-formal-denial window recognized in <em>Prudential-LMI Commercial Ins. v.
          Superior Court</em> (1990) 51 Cal.3d 674. See <em>Singh v. Allstate</em> (1998) 63
          Cal.App.4th 135; <em>Marselis v. Allstate</em> (2004) 121 Cal.App.4th 122; <em>Doheny
          Park Terrace HOA v. Truck Ins.</em> (2005) 132 Cal.App.4th 1076. The safer working
          assumption is that invoking appraisal does NOT toll the &sect; 2071 suit-limitation
          period.
        </p>
        <p className="mt-3">
          <strong>That said, whether tolling applies to a specific claim is a legal question
          for an attorney.</strong> Deadline analysis is fact-specific and tolling has limits.
          If an insured is approaching either the 12- or 24-month deadline, consulting an
          attorney about whether a protective lawsuit is necessary is the safer course — and
          can avoid the worst-case scenario where a missed deadline turns a covered claim into
          a barred one.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Step 2: Selecting Appraisers (20 Days)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once appraisal is invoked, each side selects a &ldquo;competent and disinterested&rdquo;
        appraiser and notifies the other party within 20 days. The &sect; 2071 standard is
        impartiality, and the <em>Lambert v. Carneghi</em> court (2008) 158 Cal.App.4th 1120
        reaffirmed it. In practice, party-appointed appraisers commonly take positions favorable
        to the side that appointed them, and the appraiser&rsquo;s familiarity with your
        position will materially affect the award. You want someone experienced in your specific
        type of loss &mdash; a licensed Public Adjuster, a contractor with Xactimate expertise,
        or another qualified professional.
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
      <p className="text-gray-700 leading-relaxed mb-4">
        It is no exaggeration to say that <strong>the umpire is the single most important person
        in the appraisal process</strong>. Because the two party appraisers rarely agree on
        everything, the disputed items almost always go to the umpire for resolution. The
        umpire&apos;s professional background, experience, and approach to valuation will shape the
        outcome more than any other single factor. An umpire with hands-on construction or property
        loss experience will evaluate a repair estimate very differently than an umpire whose
        background is purely legal or administrative. Understanding this dynamic is essential to
        getting a fair result.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common approaches to umpire selection include exchanging lists of proposed candidates,
        using a strike-and-rank process, or agreeing on specific qualifications (such as a licensed
        contractor, a retired judge, or an experienced adjuster with no financial ties to either
        party). If the appraisers cannot agree within 15 days, either side can petition the court
        to appoint an umpire — and in many cases, a court-appointed umpire may actually be
        preferable for the policyholder, because the court is more likely to select someone
        genuinely neutral rather than someone from the insurance company&apos;s preferred
        roster.
      </p>

      <CalloutBox variant="tip" title="Do Not Be Passive on Umpire Selection">
        <p>
          The insurance company&apos;s appraiser will push for umpire candidates who are familiar
          and favorable to the carrier&apos;s position. Do not let this happen by default. Your
          appraiser should be actively proposing candidates, researching potential umpires&apos;
          backgrounds and prior awards, and pushing back against candidates who have a history of
          working primarily with insurance companies. For a deeper discussion of umpire selection
          tactics, see our{' '}
          <Link href="/resources/appraisal-practitioner-guide" className="text-[#2E74B5] underline">
            Practitioner&apos;s Guide to Appraisal
          </Link>.
        </p>
      </CalloutBox>

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
        Step 5: The Award (the &ldquo;Memorandum of Appraisal&rdquo;)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The panel issues a written award &mdash; sometimes titled &ldquo;Appraisal Award,&rdquo;
        sometimes &ldquo;Memorandum of Appraisal,&rdquo; sometimes &ldquo;Award of Appraisers and
        Umpire.&rdquo; An agreement between any two of the three &mdash; both appraisers or one
        appraiser and the umpire &mdash; sets the amount of loss. In California, the award is
        treated as an arbitration award and can be confirmed by a court, becoming an enforceable
        judgment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A well-drafted memorandum should clearly state:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The parties, the policy number, the date of loss, and the property or items submitted.
        </li>
        <li>
          The <strong>Replacement Cost Value (RCV)</strong> determined by the panel, if the policy
          pays on an RCV basis, and the <strong>Actual Cash Value (ACV)</strong> determined by the
          panel &mdash; listed separately, not as a single blended number.
        </li>
        <li>
          A clear separation of <strong>dwelling / structure</strong>, <strong>other
          structures</strong>, <strong>contents / personal property</strong>, and <strong>ALE /
          Loss of Use</strong> if submitted &mdash; each with its own line.
        </li>
        <li>
          Which panel members signed, and an express statement that the award does not decide
          coverage, causation, or any question of law &mdash; to avoid the kind of ultra vires
          problem discussed in <em>Kirkwood</em> and <em>Lee</em> below.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A vague award &mdash; &ldquo;$X total&rdquo; with no breakdown &mdash; invites downstream
        disputes over how the carrier should apply deductibles, sublimits, coinsurance, and the
        RCV holdback. Insist that the memorandum itemize the categories the policy actually
        reimburses separately.
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
        This narrow scope traces back to <em>Jefferson Ins. Co. v. Superior Court</em> (1970)
        3 Cal.3d 398, 403, in which the California Supreme Court limited appraisal to the
        amount-of-loss inquiry and held that coverage and policy-interpretation questions are
        not for appraisers. The Court of Appeal more recently summarized the same rule in{' '}
        <em>Lee v. California Capital Ins. Co.</em> (2015) 237 Cal.App.4th 1154, 1166 (citing{' '}
        <em>Jefferson</em>): &ldquo;The function of appraisers is to determine the amount of
        damage resulting to various items submitted for their consideration. It is certainly
        not their function to resolve questions of coverage and interpret provisions of the
        policy.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the line between &ldquo;amount of loss&rdquo; and &ldquo;coverage&rdquo; is not
        always clear — and this ambiguity has generated the most significant California case law
        on the subject.
      </p>

      {/* ====== SCOPE VS. VALUE ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scope vs. Value: Understanding the Real Dispute
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common sources of confusion in insurance appraisal is the distinction
        between <strong>scope</strong> and <strong>value</strong>. These are two fundamentally
        different questions, and understanding the difference is critical to navigating the
        appraisal process effectively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Scope</strong> refers to <em>what is damaged</em> — which rooms, which building
        components, which personal property items were affected by the covered loss. <strong>Value</strong>{' '}
        refers to <em>what it costs to repair or replace</em> those damaged items. In a perfect
        world, the insurance company and the policyholder would agree on scope (yes, the kitchen,
        bathroom, and hallway were all damaged by the water loss) and only disagree on value (the
        cost to repair those areas). In that scenario, appraisal is straightforward — the panel
        determines the dollar amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In reality, most appraisal disputes involve disagreements about <em>both</em> scope and
        value. The insurance company may acknowledge that the kitchen was damaged but deny that
        the hallway or bathroom were affected — even though all three areas show clear signs of
        damage from the same event. This is a scope dispute. The insurance company is not arguing
        about what the repairs cost; it is arguing about whether certain damage exists at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies sometimes try to use appraisal strategically by limiting the scope
        of what the panel considers. They may argue that the panel should only price the items
        the insurer already acknowledged — in effect, asking the appraiser to rubber-stamp the
        carrier&apos;s scope determination while putting a slightly different dollar figure on it.
        This approach denies the policyholder the full benefit of the appraisal process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the appraisal panel&apos;s role is to independently evaluate the damage
        and determine the amount of loss. This necessarily requires the appraiser to assess the{' '}
        <em>extent</em> of damage — which means looking at what was actually damaged, not merely
        repricing the insurance company&apos;s limited scope. Your appraiser should be conducting
        an independent evaluation of the property and documenting every item of damage, regardless
        of whether the insurer acknowledged it. The appraiser is not there to price the carrier&apos;s
        estimate — the appraiser is there to determine the actual loss.
      </p>

      <CalloutBox variant="important">
        <strong>Your appraiser should independently evaluate the damage — not just reprice the
        insurer&apos;s scope.</strong> If your insurance company acknowledged damage to three rooms
        but you believe five rooms were damaged, your appraiser should be documenting and valuing
        all five rooms. The appraisal panel determines the amount of loss for the items submitted
        to it — do not let the insurer dictate what gets submitted. For detailed strategies on
        handling scope disputes in appraisal, see our{' '}
        <Link href="/resources/appraisal-practitioner-guide" className="text-[#2E74B5] underline">
          Practitioner&apos;s Guide
        </Link>.
      </CalloutBox>

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
        However, the <em>Lee</em> court recognized a limit: an appraisal panel may not use a
        zero-value assignment as a back-door way to decide causation disputes, fraud
        accusations, or whether covered property ever existed. Those are coverage and
        credibility determinations many courts treat as reserved for litigation. The line
        between &ldquo;extent of damage&rdquo; (which the panel can decide) and
        &ldquo;causation&rdquo; (which generally it cannot) is fact-specific and is exactly
        where awards get challenged.
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
          <strong><em>Kirkwood v. California State Automobile Association Inter-Insurance Bureau</em> (2011) 193 Cal.App.4th 49</strong> —
          Held that appraisers have authority &ldquo;to determine only a question of fact, namely
          the actual cash value or amount of loss of a given item,&rdquo; and distinguished
          appraisers from arbitrators who exercise broader judicial functions.
        </li>
        <li>
          <strong><em>Maslo v. Ameriprise Auto &amp; Home Ins.</em> (2014) 227 Cal.App.4th 626</strong> —
          A UIM (uninsured/underinsured motorist) arbitration case, not a first-party property
          appraisal. Many plaintiff attorneys cite <em>Maslo</em> by analogy for the proposition
          that insurers cannot escape{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
          liability simply by using a dispute-resolution process built into the policy. The
          analogy is fact-specific and a property appraisal is procedurally distinct from UIM
          arbitration; whether <em>Maslo</em>&apos;s reasoning extends to a particular property
          appraisal situation is a question for an attorney.
        </li>
        <li>
          <strong><em>Brehm v. 21st Century Ins. Co.</em> (2008) 166 Cal.App.4th 1225</strong> —
          A UIM arbitration / bad-faith case, not a first-party property appraisal. Many plaintiff
          attorneys cite <em>Brehm</em> by analogy for the proposition that arbitration-type
          dispute-resolution rights in an insurance contract include an implied obligation of
          good-faith participation. As with <em>Maslo</em>, the analogy to property appraisal
          is fact-specific.
        </li>
      </ul>

      {/* ====== SHARMA WAIVER ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Sharma Waiver&rdquo;: Expanding Appraiser Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Although appraisers are generally limited to valuation, California law recognizes that
        parties can <em>agree</em> to expand the panel&apos;s authority to include other issues —
        such as causation or the extent of damage. This agreement is known as a &ldquo;Sharma
        waiver,&rdquo; after <em>Safeco v. Sharma</em> (1984). By signing one, you consent to
        let the appraisers decide issues they would not otherwise have the power to decide.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As <em>Kacha</em> (2006) made clear, a valid Sharma waiver requires{' '}
        <strong>clear and convincing evidence</strong> that both parties knowingly agreed to
        expand the panel&apos;s scope. Boilerplate language in an award form does not qualify.
        The standard evidence is a <strong>separate written stipulation</strong>, signed by
        both parties, that expressly references and waives Insurance Code § 2071 and the{' '}
        <em>Sharma/Kacha</em> limitations. Many plaintiff attorneys advise policyholders to
        approach a Sharma waiver with significant caution — agreeing to one allows the panel
        to make coverage or causation determinations in an informal proceeding with no
        discovery, no rules of evidence, and limited appellate review. Whether to sign a
        Sharma waiver in a specific case is a legal decision that should involve an attorney.
      </p>

      <CalloutBox variant="warning" title="Watch the Award Form Language">
        <p>
          Defense-side attorneys sometimes draft appraisal award forms with embedded coverage or
          causation language — for example, a preamble characterizing the damage as
          &ldquo;attributable to the fire of October 26, 2003&rdquo; (the tactic in{' '}
          <em>Kacha</em>), or labeling award sections with policy terms of art like
          &ldquo;Coverage A — Dwelling&rdquo; or &ldquo;ALE — Shortest Time to Repair.&rdquo;
          If this language goes unchallenged and the award is confirmed, the insurer can argue the
          panel resolved those coverage issues — foreclosing future challenges. As attorneys Cohen
          and Bederman have{' '}
          <a
            href="https://www.advocatemagazine.com/article/2022-november/first-party-insurance-appraisals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            warned in <em>Advocate Magazine</em>
          </a>
          , this can &ldquo;hamstring a future lawsuit for bad faith.&rdquo; Always scrutinize
          the award form and object to any language that goes beyond valuation.
        </p>
      </CalloutBox>

      {/* ====== WHITE WAIVER ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;White Waiver&rdquo;: California&apos;s Unique Insurance Waiver
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 italic text-sm">
        For a focused, standalone walkthrough of this topic, see our{' '}
        <Link href="/resources/white-waiver" className="text-[#2E74B5] underline">
          dedicated White Waiver article
        </Link>
        . The summary below is included for readers working through the appraisal guide in order.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;White waiver&rdquo; is a legal concept unique to California insurance claims.
        It has nothing to do with the Sharma waiver or the scope of appraiser authority. It is
        a fundamentally different kind of waiver — one that arises from the intersection of
        settlement negotiations and{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
        law — and understanding it is essential for any California policyholder involved in a
        disputed claim.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Case: <em>White v. Western Title Ins. Co.</em> (1985) 40 Cal.3d 870
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver gets its name from a 1985 California Supreme Court decision. The Whites
        purchased property and obtained a title insurance policy from Western Title. The policy
        failed to disclose a recorded water easement on the property. When the Whites discovered
        the easement and filed a claim, Western Title retained an appraiser who estimated the
        loss at $2,000. Based on this estimate, Western offered to settle for $3,000 — and later
        $5,000 — without ever providing the Whites with a copy of the appraisal supporting
        those figures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Whites sued for breach of contract and bad faith. At trial, the jury found bad faith
        and awarded $8,400 for breach of contract plus $20,000 for breach of the covenant of good
        faith and fair dealing. Western Title appealed, arguing that its settlement offers should
        not have been admitted as evidence of bad faith because of the{' '}
        <strong>settlement privilege</strong> — the general legal rule that settlement
        communications are inadmissible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court rejected this argument and established a rule that changed
        California insurance practice permanently:{' '}
        <strong>
          an insurance company&apos;s lowball settlement offers made to its own policyholder —
          whether before or during litigation — are admissible as evidence of bad faith
        </strong>
        , notwithstanding the settlement privilege. The court held that the contractual
        relationship between an insured and insurer does not end when litigation begins, and that
        the insurer&apos;s duty of good faith and fair dealing continues throughout.
      </p>

      <CalloutBox variant="legal" title="Why White Matters">
        <p>
          Before <em>White</em>, insurers could make absurdly low settlement offers during
          litigation with impunity — the offers were protected by the settlement privilege and
          could never be shown to a jury. After <em>White</em>, those lowball offers became
          evidence. A jury could see them and conclude: this insurer was not negotiating in good
          faith. This created real consequences for insurers who stonewalled their own
          policyholders.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What a White Waiver Is
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the <em>White</em> decision, insurers had a problem. Every settlement offer they
        made to a policyholder could potentially be used against them as evidence of bad faith in
        the same case. If they offered $50,000 on a $200,000 claim, that $50,000 offer could be
        introduced at trial to show the jury how unreasonably the insurer was behaving.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry&apos;s response was to create the <strong>White
        waiver</strong> — a written agreement that the insurer asks the policyholder to sign
        before the insurer will communicate a settlement offer. By signing the White waiver, the
        policyholder agrees that the insurer&apos;s offer <strong>cannot later be used as
        evidence of bad faith</strong> against the insurer. The waiver essentially restores the
        settlement privilege that <em>White</em> stripped away — but only if the policyholder
        voluntarily agrees to it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, a White waiver typically states that the insurer&apos;s settlement
        communications are made in confidence, that the policyholder acknowledges the offer is
        made for settlement purposes only, and that the policyholder agrees not to introduce the
        offer, the amount, or the circumstances of the negotiation as evidence of bad faith in
        any subsequent proceeding.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How Insurers Use White Waivers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver typically appears at a specific moment in the claims process: when the
        insurer is ready to present a settlement offer but wants to shield that offer from being
        used against it. The insurer — usually through its adjuster or attorney — presents the
        waiver and says, in effect: <em>&ldquo;We&apos;d like to make you a settlement offer,
        but before we do, we need you to sign this agreement.&rdquo;</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the insurer conditions the entire settlement discussion on the waiver — refusing
        to talk numbers until it is signed. Other times the waiver is presented more casually,
        as though it were routine paperwork. Either way, the purpose is the same: to prevent
        the policyholder from using the insurer&apos;s offer as evidence in a bad faith case.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates an inherent tension. The insurer is asking you to give up a legal right —
        the right to use their offer as evidence — before you even know what the offer is. If the
        offer turns out to be reasonable, the waiver may not matter much. But if the offer is
        unreasonably low, you have already agreed not to use it against them.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What the White Waiver Tells You
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many plaintiff attorneys view a White waiver request as informative on its own — even
        when the insurer does not intend it that way. The reasoning: an insurer that believes
        its handling and offer are reasonable has less practical reason to shield those
        communications from later evidentiary use. A White waiver request can be consistent
        with a carrier&apos;s routine risk-management practice; it can also be consistent with
        a carrier&apos;s awareness that its handling may not withstand bad-faith scrutiny.
        Reasonable people read the signal differently depending on context.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Either way, the practical response many plaintiff attorneys recommend is the same:
        <strong>pause and investigate</strong> before signing. Useful questions include: what
        does the carrier believe the case is worth, and on what basis? What scope or coverage
        issues are still open? What part of the claim file would the carrier prefer not to
        have in front of a jury? Whether to sign a White waiver is a legal decision that
        warrants attorney input.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bringing that information to light — through a detailed review of the claim file, the
        insurer&apos;s estimates, the{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate scope</Link>
        , the adjuster&apos;s notes, and the history of the claim handling — may accomplish two
        things at once: it may help establish the foundation for a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
        claim, and it may result in an increased offer from the insurer{' '}
        <em>without</em> signing the White waiver and giving up any rights.
      </p>

      <CalloutBox variant="tip" title="The White Waiver as a Tactical Signal">
        <p>
          Do not view the White waiver as a bureaucratic formality. View it as a tell. The insurer
          is worried enough about its own conduct to ask you to waive your right to use it as
          evidence. Before you sign anything, figure out <em>why</em> they are worried. That
          information is more valuable than whatever offer they are about to make.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        You Do Not Have to Sign Immediately — or at All
      </h3>

      <CalloutBox variant="important" title="Professional Guidance Recommended">
        <p>
          Decisions about whether and when to sign a White waiver have significant legal
          implications and should be made with the guidance of a licensed attorney experienced
          in insurance coverage disputes. A Public Adjuster can assist with the claims-handling,
          documentation, and negotiation aspects of your claim.
          If you need help finding a qualified professional,{' '}
          <Link href="/contact" className="text-[#2E74B5] hover:underline">
            contact us
          </Link>{' '}
          for a referral.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is usually no compelling reason to sign a White waiver immediately. The insurer may
        present it with urgency, as though the settlement discussion cannot proceed without it.
        But you are under no legal obligation to sign, and there is no deadline. The waiver is a
        request, not a requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is entirely possible — and often tactically advisable — to <strong>set the White
        waiver aside</strong>, continue investigating the claim, and return to the waiver later
        if and when it becomes advantageous to do so. If at some point you determine that signing
        the waiver will trigger a settlement discussion that genuinely serves your interests, you
        can sign it then. But signing it before you understand the full picture gives up leverage
        you may never get back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the meantime, if the insurer refuses to discuss settlement without the waiver, document
        that refusal in writing. The insurer&apos;s conditioning of settlement discussions on
        waiving your rights may itself be relevant in a bad faith analysis.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Enforceability Issues: Carriers Make Mistakes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when a policyholder does sign a White waiver, the waiver may not be enforceable.
        Carriers and their attorneys frequently make mistakes in the drafting and presentation
        of White waivers that can undermine their enforceability. These mistakes fall into two
        general categories:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Defects in the waiver language itself.</strong> The waiver may be overbroad,
          ambiguous, or drafted in a way that does not comply with applicable legal requirements.
          Vague language about what is being waived, missing specifics about which communications
          are covered, or overly sweeping terms that attempt to waive rights beyond what
          <em> White</em> contemplated may render the waiver unenforceable or subject to
          challenge.
        </li>
        <li>
          <strong>Promises and statements made in connection with the waiver.</strong> The
          circumstances surrounding the presentation of the waiver matter. If the adjuster or
          attorney made verbal or written promises, representations, or assurances when presenting
          the waiver — about the nature of the upcoming offer, the insurer&apos;s intentions, or
          the purpose of the waiver — those statements may create independent grounds to challenge
          the waiver&apos;s enforceability. Misrepresentations or inducements used to obtain the
          policyholder&apos;s signature can undermine the voluntariness of the agreement.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Consult an Attorney on Enforceability">
        <p>
          Whether a signed White waiver is actually enforceable depends on the specific language
          of the waiver, the circumstances of its presentation, and the statements made by the
          insurer&apos;s representatives. An attorney experienced in California insurance bad
          faith law can evaluate whether the waiver has defects that render it unenforceable or
          subject to challenge. If you have already signed a White waiver and are concerned about
          its effect on your rights, consult an attorney — the waiver may not be as airtight as
          the insurer believes.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How to Handle a White Waiver Proposal
      </h3>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-sm">
          <li>
            <strong>Recognize the signal.</strong> The insurer is presenting a White waiver
            because it is concerned about its own conduct. Before signing anything, investigate
            what the insurer may be underpaying or mishandling.
          </li>
          <li>
            <strong>Do not sign immediately.</strong> There is no deadline and no obligation to
            sign. Set it aside while you gather information about the claim.
          </li>
          <li>
            <strong>Investigate the underpayment.</strong> Review the insurer&apos;s estimate,
            scope of loss, claim file, and handling timeline. Identify what they are underpaying
            and why. This information may be more valuable than the settlement offer the waiver
            is designed to protect.
          </li>
          <li>
            <strong>Consult an attorney.</strong> White waivers have legal consequences that
            extend beyond the current negotiation. An attorney can evaluate the waiver language,
            advise on whether to sign, and identify any defects that could affect enforceability.
          </li>
          <li>
            <strong>Preserve the insurer&apos;s statements.</strong> Document everything the
            insurer says or writes when presenting the waiver — the promises, assurances, and
            representations made in connection with the waiver may be independently significant.
          </li>
          <li>
            <strong>Sign later only if advantageous.</strong> If you determine at some point that
            signing the waiver will genuinely advance your interests — because the insurer is
            prepared to make a reasonable offer — you can sign it then. But do so on your
            timeline, not the insurer&apos;s.
          </li>
        </ol>
      </div>

      <CalloutBox variant="important" title="Key Takeaway on White Waivers">
        <p>
          A White waiver is not a neutral document — it exists because <em>White v. Western
          Title</em> gave policyholders a useful tool, and insurers want to take it back. When
          an insurer presents a White waiver, it is often a sign they know the claim has been
          underpaid. Rather than signing immediately and giving up rights, investigate what the
          insurer is trying to shield from scrutiny. There is no rush. You can always sign later
          if the circumstances warrant it — but you cannot unsign a waiver once it is executed.
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
        California Insurance Code § 2071 includes a provision that — in the event of a
        government-declared disaster as defined in the Government Code — appraisal{' '}
        <strong>may be requested by either party but shall not be compelled</strong>. In
        practice this ties to a &ldquo;state of emergency&rdquo; declared under Government
        Code § 8558. The provision is part of the §2071 standard fire policy form and applies
        to fire policies subject to that form &mdash; both residential and commercial &mdash;
        unless a specific carve-out under §2070 removes a particular policy from the standard
        form&rsquo;s reach. After a wildfire, earthquake, or other declared disaster affecting
        a policyholder, the insurer cannot force that policyholder into appraisal to resolve a
        valuation dispute. You retain the option to invoke appraisal yourself if you choose, but
        the insurer cannot compel it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This exception exists because disaster situations create unique power imbalances —
        displaced policyholders dealing with total losses should not be forced into an unfamiliar
        dispute resolution process while they are still in crisis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        &quot;Shall not be compelled&quot; does not mean appraisal cannot happen at all. If the homeowner requests appraisal, the
        carrier may well agree to participate — and in many cases, the carrier may actually{' '}
        <em>prefer</em> appraisal over the alternative, which is the policyholder going straight to a
        lawsuit. From the carrier&apos;s perspective, appraisal is typically faster, cheaper, and more
        predictable than litigation. So while the carrier cannot force you into appraisal after a
        declared disaster, do not assume the carrier will refuse if you are the one requesting it.
      </p>

      <CalloutBox variant="legal" title="An Untested Theory: Policies That Omit This Provision">
        <p>
          Many California plaintiff-side litigators have argued that when a carrier has{' '}
          <strong>not</strong> adopted the Insurance Code § 2071 government-declared disaster
          provision into its policy, the carrier may have effectively offered a policy{' '}
          <strong>more generous</strong> than the statutory floor — one that still allows appraisal even
          in a declared disaster. The reasoning is that the insurer is permitted to offer a policy
          more generous than the statutory minimum, and they are held to the terms they offer. Under
          this theory, if the policy&apos;s appraisal clause does not include the disaster
          exception, neither party&apos;s right to compel appraisal is limited by a declared
          disaster. As of early 2026, there does not appear to be published California case law
          testing this theory, so it remains untested. However, it is a theory worth understanding
          and raising when applicable.
        </p>
      </CalloutBox>

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

      {/* ====== PREPARING FOR APPRAISAL ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preparing for Appraisal: Building a Strong Case
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The outcome of an appraisal is often determined before the umpire ever sees the property.
        A well-prepared submission package makes it easy for the umpire to rule in your favor. A
        disorganized or incomplete submission forces the umpire to guess — and when the umpire is
        guessing, the insurance company&apos;s polished (but lowball) presentation may carry
        the day.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your appraisal submission should include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>A detailed, line-item estimate.</strong> Every disputed item should be broken
          out individually with quantities, unit pricing, and totals. An{' '}
          <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate</Link>{' '}
          estimate is the gold standard because it uses the same software and pricing database the
          insurance industry uses — making it difficult for the carrier to argue your pricing is
          unreasonable.
        </li>
        <li>
          <strong>Photographs documenting each disputed item.</strong> Before-and-after photos when
          available, close-up photos of damage, wide-angle photos showing context, and photos that
          correspond directly to the line items in your estimate. The umpire may not visit the
          property — your photos may be the primary evidence.
        </li>
        <li>
          <strong>Expert reports where applicable.</strong> If the damage involves structural
          issues, hidden moisture, hazardous materials, or specialized systems, expert reports from
          engineers, industrial hygienists, or other qualified professionals strengthen your
          position significantly.
        </li>
        <li>
          <strong>A clear summary that ties everything together.</strong> The umpire is reviewing
          two competing sets of numbers. Make it easy to understand your position: what is damaged,
          what it costs to repair or replace, and why your figure — not the insurance company&apos;s
          figure — reflects the actual loss.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Presentation Matters">
        <p>
          The umpire is a busy professional reviewing competing submissions. A clear, organized
          presentation — with labeled photos, a well-structured estimate, and a concise summary —
          is far more persuasive than a box of loose documents. Do not assume the umpire will sort
          through disorganized materials to find the evidence supporting your position. Make your
          case easy to follow. For detailed guidance on building an appraisal package, see the{' '}
          <Link href="/resources/appraisal-practitioner-guide" className="text-[#2E74B5] underline">
            Practitioner&apos;s Guide to Appraisal
          </Link>.
        </p>
      </CalloutBox>

      {/* ====== AFTER THE AWARD ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After the Appraisal Award: What Happens Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the appraisal panel issues its award, the process is not necessarily over. The award
        determines the amount of loss, but several important steps remain — and the insurance
        company does not always make those steps easy.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Award Is Binding
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, an appraisal award is treated as an arbitration award and is binding on
        both parties. Once issued, the insurance company is obligated to pay the award amount
        (less any applicable deductibles and prior payments) promptly. The award can be confirmed
        by a court under CCP &sect; 1285, at which point it becomes an enforceable judgment — with
        the same force as any other court judgment.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        When the Insurance Company Challenges the Award
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the insurance company receives an appraisal award that is significantly higher
        than its original payment — and rather than simply paying the difference, it looks for
        reasons to challenge the award. The grounds for vacating an appraisal award are narrow
        (discussed in the case law section above), but that does not always stop insurers from
        trying. Common challenges include arguing the panel exceeded its authority by making
        causation determinations, claiming procedural irregularities, or alleging that the umpire
        was biased.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe the insurer may challenge the award, consult an attorney immediately. The
        100-day deadline for filing a petition to vacate or correct an award under CCP &sect; 1288
        applies to both sides — so the insurer must act quickly, and so must you if you need to
        respond.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        If the Insurer Delays Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After receiving an appraisal award, the insurer is obligated to pay. But some insurers
        drag their feet — requesting additional documentation, raising new objections, or simply
        failing to process the payment in a timely manner. This delay can be particularly harmful
        to policyholders who need funds to complete repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer does not pay the award within a reasonable time, the policyholder has
        several options: filing a petition to confirm the award in court (which converts it to an
        enforceable judgment), filing a complaint with the California Department of Insurance, or
        pursuing a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
        claim for the insurer&apos;s unreasonable delay in honoring a binding award. The
        insurer&apos;s failure to promptly pay a valid appraisal award can itself constitute
        evidence of bad faith — the award determined the amount of loss, and the insurer&apos;s
        continued refusal to pay has no reasonable basis.
      </p>

      <CalloutBox variant="warning" title="Do Not Let the Insurer Run Out the Clock">
        <p>
          If the insurer is delaying payment after an appraisal award, do not wait indefinitely.
          Document every communication, demand payment in writing with a specific deadline, and
          consult an attorney about confirming the award in court. An unreasonable delay in paying
          a binding appraisal award is not a minor procedural issue — it is potential evidence of{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
          that may entitle you to damages well beyond the amount of the award itself.
        </p>
      </CalloutBox>

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
        <h3 className="text-xl font-bold mb-2">Considering Appraisal?</h3>
        <p className="text-blue-200 text-sm mb-4">
          A licensed California Public Adjuster can review an insurance claim file to identify
          underpaid items and may serve as the policyholder&apos;s appraiser, preparing detailed
          Xactimate estimates and advocating for the full value of the loss through the
          appraisal process. A Public Adjuster may also identify issues that warrant
          consultation with an attorney. Most Public Adjusters and attorneys will provide a
          free consultation.
        </p>
        <Link href="/contact" className="btn-gold inline-block">
          Request a Free Appraisal Consultation →
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
