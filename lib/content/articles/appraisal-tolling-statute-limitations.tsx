import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Does Invoking Appraisal Toll the Statute of Limitations? (In California, the Safer Assumption Is No.)',
  description:
    'Invoking appraisal does not toll the one-year suit limitation in California. Prudential-LMI tolls during the insurer’s investigation, but Singh, Marselis, and Doheny show courts have refused to extend tolling beyond that. Protect yourself: file a protective lawsuit and request a stay pending appraisal.',
  summary:
    'In California, the safer assumption is that invoking appraisal does NOT toll the one-year suit limitation. Prudential-LMI tolling stops when the insurer denies the claim; courts have repeatedly refused to extend tolling further. The practical fix: file a protective lawsuit before the deadline and request a stay pending appraisal.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public Adjuster on
          how California courts have treated the question of whether invoking appraisal tolls
          the one-year suit limitation. It is not legal advice. The California Supreme Court
          has not issued a decision squarely on point, but the published Court of Appeal
          authority has consistently declined to extend tolling beyond the
          notice-to-denial window. Limitations-period questions can be irreversibly costly
          if missed. If your deadline is approaching, consult a licensed California attorney
          immediately &mdash; do not rely on this article or any equitable tolling argument
          as your only protection.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Problem: A Ticking Clock and a Slow Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most California property insurance policies contain a one-year suit limitation
        provision. This provision originates from California&apos;s standard fire policy,
        codified in California Insurance Code &sect;&sect; 2070&ndash;2071.
        The statutory language requires the policyholder to commence suit within twelve months
        after the &ldquo;inception of the loss.&rdquo; That clock starts running on the date
        of the loss &mdash; not the date the claim is denied, not the date negotiations break
        down, and not the date you decide you need a lawyer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now consider what happens when{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal
        </Link>{' '}
        is invoked. The policyholder and insurer disagree on the amount of loss. One side
        demands appraisal under the policy. Each side selects an appraiser. The appraisers try
        to agree on an umpire. If they cannot agree, a court appoints one. The panel inspects
        the property, reviews estimates, and eventually issues an award. This process routinely
        takes three to six months &mdash; and in complex cases involving large losses,
        contested causation issues, or disagreements over scope, it can take a year or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question is straightforward: while the appraisal process is pending, does the
        one-year suit limitation clock keep running? Or does invoking appraisal{' '}
        <strong>toll</strong> &mdash; meaning pause &mdash; the statute of limitations?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The safer answer in California is that invoking appraisal does <strong>not</strong> toll
        the suit limitation. There is no California Supreme Court decision squarely on point, but
        the published Court of Appeal authority that does address tolling outside the insurer&apos;s
        active investigation has consistently <em>refused</em> to extend the doctrine. The pattern
        from <em>Singh</em>, <em>Marselis</em>, and <em>Doheny Park Terrace</em> is one of courts
        limiting tolling, not expanding it. Experienced California insurance litigators reflect
        this in practice: they treat appraisal as <em>not</em> tolling, and they protect the
        deadline by filing a protective lawsuit and requesting a stay. This article explains why
        the rule comes out that way, the policyholder-side arguments that have nonetheless been
        raised, and the steps every policyholder should take to make sure the suit clock cannot
        quietly run out during a months-long appraisal.
      </p>

      <CalloutBox variant="warning" title="The Working Rule in California: Appraisal Does Not Toll">
        <p>
          The safer assumption &mdash; and the one experienced insurance litigators operate
          under &mdash; is that invoking appraisal does <strong>not</strong> toll the one-year
          suit limitation in California. <em>Prudential-LMI</em> tolls the clock while the
          insurer is actively investigating, but that tolling ends when the insurer denies the
          claim, and California courts have repeatedly declined to extend it further. The
          practical protection is to <strong>file a protective lawsuit before the deadline and
          request a stay pending appraisal</strong>. A written tolling agreement from the carrier
          is a useful supplement but is not a substitute for filing &mdash; many carriers will
          refuse. If your deadline is approaching, consult an{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            attorney
          </Link>{' '}
          immediately.
        </p>
      </CalloutBox>

      {/* ====== INS. CODE 2071 AND THE STATUTORY FRAMEWORK ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Statutory Framework: Insurance Code &sect; 2071 and the Standard Fire Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand the problem, you need to understand the source of the one-year suit
        limitation. Insurance Code &sect; 2071 sets out the California Standard Form Fire Insurance Policy,
        which every fire insurance policy issued in the state must contain or incorporate. Two
        provisions in this statutory policy are relevant here, and they sit side by side in
        the same document without any express connection between them:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        <strong>The Appraisal Provision:</strong> &ldquo;In case the insured and this company
        shall fail to agree as to the actual cash value or the amount of loss, then, on the
        written request of either, each shall select a competent and disinterested appraiser
        and notify the other of the appraiser selected within 20 days of the request.&rdquo;
      </blockquote>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        <strong>The Suit Limitation Provision:</strong> &ldquo;No suit or action on this
        policy for the recovery of any claim shall be sustainable in any court of law or
        equity unless all the requirements of this policy shall have been complied with, and
        unless commenced within 12 months next after inception of the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Notice the problem. The statute gives both sides the right to invoke appraisal when
        they disagree on the amount. It also says the policyholder must file suit within twelve
        months. But it says nothing about what happens to the suit limitation while the
        appraisal process is pending. The appraisal clause does not reference the suit
        limitation clause. The suit limitation clause does not reference the appraisal clause.
        This silence is the source of the entire debate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some scholars have pointed out that Insurance Code &sect; 2071 dates to an era when insurance
        disputes were resolved much more quickly. The idea that appraisal might consume so much
        of the limitations period that the policyholder would lose the right to sue may not
        have been contemplated by the original drafters. Whatever the historical explanation,
        the silence persists &mdash; and policyholders bear the risk.
      </p>

      {/* ====== WHY COURTS HAVE REFUSED TO EXTEND TOLLING ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why California Courts Have Refused to Extend Tolling Beyond the Investigation Phase
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The starting point is{' '}
        <em>Prudential-LMI Commercial Ins. v. Superior Court</em> (1990) 51 Cal.3d 674. The
        California Supreme Court held that the one-year suit limitation in standard fire
        insurance policies is{' '}
        <Link href="/resources/equitable-tolling" className="text-[#2E74B5] underline">
          equitably tolled
        </Link>{' '}
        &ldquo;from the time the insured files a timely notice [of his claim], pursuant to
        policy notice provisions, to the time the insurer formally denies the claim in
        writing.&rdquo; The rationale was specific and narrow: the policyholder should not be
        penalized for the time consumed by the insurer&apos;s investigation, but the central
        idea of the limitation provision &mdash; that the insured will only have twelve months
        to institute suit &mdash; is preserved by ending the tolling at denial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The published Court of Appeal decisions that have addressed extending <em>Prudential-LMI</em>
        beyond the notice-to-denial window have consistently <strong>refused</strong> to extend it.
        That pattern matters because it is the doctrinal foundation any pro-tolling argument has to
        get past.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Singh v. Allstate Ins. Co.</em> (1998) 63 Cal.App.4th 135 &mdash; Reconsideration Requests Do Not Extend Tolling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Singh</em>, after the insurer issued an unequivocal denial, the insureds asked
        the carrier to reconsider. The Court of Appeal held that the reconsideration request
        did <em>not</em> re-engage the tolling period. &ldquo;The justifications for equitable
        tolling are absent, once the carrier has initially denied the claim,&rdquo; the court
        wrote, because by that point the insured has the information needed to file suit. The
        court framed an unequivocal denial as the &ldquo;definitive demarcation point for
        limitations purposes&rdquo; &mdash; tolling stops, and the clock runs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Singh</em> has been applied repeatedly to reject attempts to push <em>Prudential-LMI</em>
        beyond its narrow scope. Federal courts applying California law continue to cite it for
        the rule that &ldquo;once an unequivocal denial has been made, the insured&apos;s later
        requests for reconsideration ... do not extend the period of equitable tolling.&rdquo;
        See, e.g., <em>Barbey v. State Farm Gen. Ins. Co.</em> (9th Cir. Dec. 9, 2025, No.
        24-5424) (mem.).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Marselis v. Allstate Ins. Co.</em> (2004) 121 Cal.App.4th 122 &mdash; The Court Rejected an Effort to Extend Tolling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Marselis</em> is even more direct on the question of whether <em>Prudential-LMI</em>
        should be expanded. The insured argued the limitation period should be tolled even after
        the insurer paid the claim, on the theory that no unequivocal written denial had ever
        issued. The Court of Appeal rejected the argument and affirmed judgment for Allstate,
        writing: &ldquo;Nothing justifies judicial extension of the equitable tolling rule to
        create a right to reopen claims that have been paid.&rdquo; The court explained that
        the existing tolling during investigation already gives the insured &ldquo;ample
        opportunity to press a further claim,&rdquo; and that the limitations provision&apos;s
        twelve-month purpose must be respected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Marselis</em> is the published California authority closest to an explicit
        instruction not to invent new tolling categories. That instruction applies just as
        much to a proposed &ldquo;tolling during appraisal&rdquo; category as it did to the
        proposed post-payment category the <em>Marselis</em> court rejected.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Doheny Park Terrace Homeowners Assn. v. Truck Ins. Exchange</em> (2005) 132 Cal.App.4th 1076 &mdash; Equitable Tolling Rejected on the Facts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Doheny Park</em> is often cited as a pro-policyholder case because the Court of
        Appeal reinstated a Northridge earthquake claim on equitable <em>estoppel</em> grounds.
        But on the equitable <em>tolling</em> question &mdash; which is what matters for the
        appraisal-tolling analysis &mdash; the court ruled the other way. It held that equitable
        tolling could <em>not</em> apply once the insurer had made an unequivocal denial.
        Equitable estoppel and equitable tolling are different doctrines that require different
        proof: tolling pauses the clock during a defined period (notice to denial); estoppel
        prevents the insurer from raising the limitation defense because of conduct the insured
        reasonably relied on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For appraisal tolling, the takeaway is that <em>Doheny Park</em>, like <em>Singh</em>
        and <em>Marselis</em>, treats <em>Prudential-LMI</em>&apos;s tolling rule as having
        fixed endpoints &mdash; it does not get re-engaged by later events.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Ashou v. Liberty Mutual Fire Ins. Co.</em> (2006) 138 Cal.App.4th 748 &mdash; A Narrow Exception When the Insurer Reopens the File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Ashou</em> is the case policyholder-side attorneys most often invoke when arguing
        that tolling should re-engage after denial. It does extend tolling in one specific
        situation: when the insurer affirmatively agrees to reopen the file and actively
        reinvestigates the claim, the insured may reasonably expect the claim is again under
        active consideration, and that period can be tolled. But <em>Ashou</em> is careful to
        limit the rule. The court emphasized that &ldquo;a mere request does not automatically
        reopen the claim, nor does it impose an obligation on the insurer to respond.&rdquo;
        The insurer&apos;s conduct &mdash; not the insured&apos;s &mdash; is what triggers
        renewed tolling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Importantly, invoking appraisal is not the same as the insurer agreeing to reopen the
        file. Appraisal is a discrete, statutory dispute-resolution mechanism for valuation;
        it does not by its terms put the underlying coverage determination back into active
        reinvestigation. Treating appraisal as triggering a new <em>Ashou</em>-style tolling
        period would require extending <em>Ashou</em> well beyond its facts &mdash; in a
        direction <em>Singh</em>, <em>Marselis</em>, and <em>Doheny Park</em> all counsel
        against.
      </p>

      <CalloutBox variant="warning" title="Two §2071 Deadlines, Not Just One">
        <p>
          A common mistake when running this analysis is to think of &sect;&nbsp;2071 as a
          flat 12-month clock. For residential losses related to a state of emergency declared
          by the Governor under Government Code &sect;&nbsp;8558(b), &sect;&nbsp;2071 extends
          the suit-limitation period from 12 months to <strong>24 months</strong>. The
          24-month extension lives in &sect;&nbsp;2071 itself, triggered by the &sect;&nbsp;8558(b)
          declaration. Before assuming the 12-month clock controls, confirm whether the loss
          is connected to a declared state of emergency &mdash; for the 2025 Los Angeles
          wildfires and similar events, the longer clock applies.
        </p>
      </CalloutBox>

      {/* ====== POLICYHOLDER ARGUMENTS THAT HAVE BEEN RAISED ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policyholder Arguments That Have Been Raised (And Why They Have Not Prevailed)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholder-side attorneys have constructed several arguments for tolling during
        appraisal. They are not frivolous. But none has produced a published California
        appellate decision squarely adopting them, and the existing <em>Singh / Marselis /
        Doheny Park</em> line of authority cuts against them. The arguments worth knowing
        about &mdash; mainly so an insured can recognize them if an attorney evaluates them
        on specific facts &mdash; are:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Extending <em>Prudential-LMI</em>&apos;s Equitable Logic to Appraisal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The argument runs that if the policyholder should not be penalized for time consumed by
        the insurer&apos;s investigation, the policyholder should also not be penalized for
        time consumed by appraisal &mdash; another policy-authorized process both parties are
        participating in. The weakness is that <em>Marselis</em> rejected exactly this kind of
        &ldquo;extension by analogy&rdquo; reasoning, holding that the existing tolling rule
        already balances the insured&apos;s interests against the limitation provision&apos;s
        twelve-month purpose, and that judicial extension is not justified.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Implied Waiver from the Insurer&apos;s Participation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policyholder briefs argue that an insurer that demands appraisal &mdash; or that
        actively participates in one the insured demanded &mdash; cannot consistently insist
        that the suit-limitation clock continued to run. This is a fairness argument, not a
        doctrinal one. It has more traction where the insurer was the party that invoked
        appraisal, and even more if the insurer also made statements that could be argued to
        induce reliance (which would more naturally be framed as equitable estoppel under
        <em> Doheny Park</em>). On a clean record, however, mere participation in an appraisal
        the policy authorizes is unlikely to be treated as a waiver of the suit-limitation
        defense.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Appraisal&apos;s Procedural Classification Under the Arbitration Code
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California places insurance appraisal under the procedural framework of the California
        Arbitration Act, CCP &sect;&sect; 1280&ndash;1294.2. The mechanism is a 1961 amendment
        to CCP &sect; 1280(a) that expanded &ldquo;agreement to arbitrate&rdquo; to include
        &ldquo;agreements providing for valuations, appraisals and similar proceedings,&rdquo;
        applied to insurance appraisal in <em>Appalachian Ins. Co. v. Rivcom Corp.</em> (1982)
        130 Cal.App.3d 818. Policyholder-side attorneys sometimes argue that this classification
        supports tolling by analogy to arbitration. The weakness is that the <em>Appalachian</em>
        framework concerns procedural rules for enforcing and confirming appraisal awards
        &mdash; it does not by its terms create a tolling rule, and no published decision has
        used it to override the <em>Singh / Marselis</em> limits.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. The Impracticality of Parallel Proceedings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The remaining argument is policy-based: requiring a policyholder to file a protective
        lawsuit while appraisal is pending creates duplicative work and expense. This is true.
        But California courts have not treated impracticality as a sufficient reason to invent
        a new tolling category &mdash; the answer the case law actually gives is the
        file-and-stay procedure discussed later in this article. Filing a protective complaint
        and immediately requesting a stay is the established mechanism for avoiding the
        duplicative proceedings.
      </p>

      <CalloutBox variant="important" title="The Bottom Line on the Pro-Tolling Arguments">
        <p>
          These arguments are sometimes raised by policyholder-side counsel as additional
          protection layered on top of a protective filing. As the standalone basis for missing
          a deadline, they are weak. <strong>Do not bet a claim on equitable tolling during
          appraisal in California.</strong> The published authority points the other way, and
          the cost of a protective lawsuit is small compared to losing the right to sue.
        </p>
      </CalloutBox>

      {/* ====== WHY THE RULE COMES OUT THIS WAY ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Rule Comes Out This Way: Statute, Policy, and Doctrine All Align
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case-law pattern in <em>Singh / Marselis / Doheny Park</em> is not an accident. It
        reflects how California treats statutes of limitations, equitable tolling, and the
        relationship between contractual dispute resolution and the right to sue.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Appraisal Is Not &ldquo;Suit&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy&apos;s suit-limitation provision &mdash; which comes directly from Insurance
        Code &sect;&nbsp;2071 &mdash; requires the insured to commence suit within twelve months.
        Appraisal is not suit. It is a statutory dispute-resolution mechanism for determining
        the amount of loss. Invoking it does not commence an action, does not stop the
        limitations clock by its own force, and does not relieve the insured of the obligation
        to file a complaint within the limitations window.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 2071 Is Silent on Tolling During Appraisal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both the appraisal provision and the suit-limitation provision are set out in the same
        statutory standard fire policy in &sect;&nbsp;2071. The Legislature could have included
        express language tolling the suit limitation during appraisal. It did not. California
        courts have not treated that silence as ambiguity inviting them to read tolling in.
        Contra proferentem does not apply &mdash; the language comes from the statute, not the
        insurer&apos;s drafting.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Equitable Tolling Is Discretionary and Narrowly Drawn
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equitable tolling is a discretionary doctrine. Even where it has been recognized, the
        California Supreme Court in <em>Prudential-LMI</em> defined it narrowly &mdash; from
        notice of claim to denial &mdash; and tied that to a specific rationale (the
        policyholder should not be penalized for time consumed by the insurer&apos;s
        investigation). Extending the doctrine to appraisal requires expanding both the
        endpoints and the rationale, which is exactly what <em>Marselis</em> said California
        courts will not do.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The File-and-Stay Procedure Is the Built-In Answer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts that have addressed the question note that the policyholder is not
        trapped &mdash; the policyholder can file a protective lawsuit and request a stay
        pending appraisal. That option, discussed in detail below, is the established mechanism
        for avoiding the cost and waste of parallel proceedings while preserving the right to
        sue. The availability of file-and-stay weakens any argument that equitable tolling is
        necessary to avoid unfairness.
      </p>

      <CalloutBox variant="important" title="The Bottom Line">
        <p>
          California courts have consistently declined to extend equitable tolling beyond the
          notice-to-denial window <em>Prudential-LMI</em> defined. Treat appraisal as <strong>not</strong>
          tolling the suit limitation. Protect the deadline by filing a protective lawsuit and
          requesting a stay pending appraisal &mdash; the procedure California courts treat as
          the answer to this problem. Do not rely on equitable tolling as your only protection.
        </p>
      </CalloutBox>

      {/* ====== ADDITIONAL CASE-LAW CONTEXT ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Case-Law Context: Appraisal&apos;s Limited Scope and the Arbitration Overlay
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several other California cases come up in this analysis, mostly because they define
        what appraisal is and how it relates to the rest of the claim. They do not change the
        core rule from <em>Singh / Marselis / Doheny Park</em> &mdash; appraisal does not toll
        the suit limitation in California &mdash; but they are worth understanding because
        attorneys evaluating these claims will reference them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Appalachian Ins. Co. v. Rivcom Corp.</em> (1982) 130 Cal.App.3d 818
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Appalachian</em> placed California insurance appraisal under the procedural
        framework of the California Arbitration Act &mdash; not as a general arbitration
        capable of deciding coverage, but as a statutory proceeding governed by CCP
        &sect;&sect; 1280&ndash;1294.2 for purposes of enforcement, judicial review, vacatur,
        and umpire disclosures. Appraisal awards are subject to confirmation, vacatur, and
        correction under CCP &sect;&sect; 1285&ndash;1288. This procedural overlay is sometimes
        invoked by policyholder-side attorneys as supporting a tolling-by-analogy argument, but
        no published decision has used <em>Appalachian</em> to override the <em>Singh /
        Marselis</em> limits on equitable tolling.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Safeco Ins. Co. of America v. Sharma</em> (1984) 160 Cal.App.3d 1060
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Sharma</em> defines the scope of appraisal: appraisers determine the <em>amount</em>
        of loss and cannot resolve coverage questions. That matters for the tolling analysis
        only indirectly &mdash; because appraisal is narrowly limited to valuation, a
        policyholder with broader claims (coverage disputes, causation issues, bad faith)
        cannot rely on appraisal to substitute for litigation on those issues. The
        right-to-sue clock still has to be preserved for the broader claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full discussion of <em>Sharma</em> and the scope of appraisal generally, see
        our article on{' '}
        <Link href="/resources/california-appraisal-case-law" className="text-[#2E74B5] underline">
          California appraisal case law
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Kacha v. Allstate Ins. Co.</em> (2006) 140 Cal.App.4th 1023
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Kacha</em> reinforces <em>Sharma</em>: appraisers may not make causation
        determinations absent a clear and convincing showing that both parties stipulated to
        expand the appraisal&apos;s scope. The case also illustrates the practical complexity
        of contested appraisal proceedings &mdash; the <em>Kacha</em> appraisal arose from a
        Cedar Fire claim and required panel selection, umpire appointment, property
        inspection, and contested estimate evaluation. The longer the appraisal takes, the
        more important it becomes to have already filed protectively, because the limitations
        clock is still running.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Brehm v. 21st Century Ins. Co.</em> (2008) 166 Cal.App.4th 1225
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Brehm</em> was an underinsured-motorist arbitration case, not a property appraisal
        case. It addressed the insurer&apos;s good-faith duties during arbitration but did not
        decide a suit-limitation tolling question. Policyholder-side attorneys sometimes argue
        <em>Brehm</em>&apos;s good-faith framework supports a fairness argument that appraisal
        should toll the limitations period, but the analogy is contested and <em>Brehm</em>
        has not been cited by any published California decision to extend tolling to appraisal.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Trial Court Decisions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Trial courts have addressed the tolling question in individual cases, and outcomes
        have varied with the facts. Because trial-court rulings are not published, they do
        not create binding precedent. The reliable guidance comes from the published Court of
        Appeal authority &mdash; which, as discussed above, has been consistent in declining
        to extend <em>Prudential-LMI</em>&apos;s tolling rule beyond the notice-to-denial
        window.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of how equitable tolling works in the insurance context
        generally, including edge cases and clock calculation issues, see our articles on{' '}
        <Link href="/resources/equitable-tolling" className="text-[#2E74B5] underline">
          equitable tolling
        </Link>{' '}
        and{' '}
        <Link href="/resources/equitable-tolling-nuances" className="text-[#2E74B5] underline">
          equitable tolling edge cases
        </Link>.
      </p>

      {/* ====== OTHER STATES ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Other States: A Different Analysis
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article focuses on California, but policyholders in other states should be aware
        that the analysis may differ significantly depending on jurisdiction.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Florida:</strong> Florida treats appraisal as a contractual process, not as
          arbitration. Florida&apos;s statute of limitations for insurance claims is typically
          five years, which reduces the urgency of the tolling question &mdash; but it does not
          eliminate it. Florida courts have generally not extended equitable tolling to the
          appraisal context as broadly as California courts have in the investigation context.
        </li>
        <li>
          <strong>Texas:</strong> Texas also treats appraisal as a contractual mechanism rather
          than arbitration. Texas courts have addressed the relationship between appraisal and
          the statute of limitations, but the analysis is governed by Texas-specific doctrines
          and a different statutory framework.
        </li>
        <li>
          <strong>New York:</strong> New York generally treats appraisal as a contractual
          process. The statute of limitations for first-party insurance claims is six years
          under New York law, giving policyholders more time &mdash; but the interaction
          between appraisal and the limitations period is still fact-specific.
        </li>
        <li>
          <strong>States with express tolling provisions:</strong> Some states have statutes
          or case law that expressly address whether the statute of limitations is tolled during
          appraisal or arbitration proceedings. If your claim is in a state other than
          California, research the specific rules that apply.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key difference for California policyholders is that the <em>Appalachian</em>
        decision classifies appraisal as arbitration, which gives the tolling argument
        additional doctrinal support not available in most other jurisdictions. But this also
        means California precedent on appraisal tolling may not be persuasive in states that
        treat appraisal differently.
      </p>

      {/* ====== EQUITABLE TOLLING VS. APPRAISAL TOLLING ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Equitable Tolling, Appraisal Tolling, and Contractual Tolling: Three Different Things
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broader framework of{' '}
        <Link href="/resources/equitable-tolling" className="text-[#2E74B5] underline">
          equitable tolling in California insurance claims
        </Link>{' '}
        has three distinct pieces. Conflating them is how policyholders lose deadlines.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Equitable tolling during the insurer&apos;s investigation</strong> is the
          rule from <em>Prudential-LMI</em>. The clock is tolled from timely notice of claim to
          the insurer&apos;s formal written denial. This much is well-established and applied
          routinely &mdash; but it has clear endpoints.
        </li>
        <li>
          <strong>&ldquo;Tolling during appraisal&rdquo;</strong> is not an established
          California rule. Published Court of Appeal authority has gone the other way &mdash;
          <em>Singh</em>, <em>Marselis</em>, and <em>Doheny Park Terrace</em> all declined to
          extend <em>Prudential-LMI</em>&apos;s tolling beyond its notice-to-denial window.
          Treating appraisal as tolling is a litigation argument with weak support, not a
          rule an insured can plan around.
        </li>
        <li>
          <strong>Contractual tolling</strong> &mdash; a written tolling agreement signed by
          the carrier &mdash; is different from both. It pauses the limitations period by
          contract, not by judicial discretion. Where the carrier will sign one, it solves the
          problem. But many carriers will refuse, so an insured cannot rely on getting one.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical takeaway: <em>Prudential-LMI</em> tolling during the insurer&apos;s
        investigation gives more time than the raw twelve months suggests, but that extra time
        ends at the formal written denial. Nothing in current California law guarantees more
        tolling after that. The protective move is to file a complaint and request a stay
        &mdash; the procedure California courts treat as the answer.
      </p>

      {/* ====== FILE AND STAY (PRIMARY RECOMMENDATION) ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Primary Protection: File a Protective Lawsuit and Request a Stay
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because California courts have not extended equitable tolling to appraisal, the
        established protective measure is to file a complaint before the limitations period
        expires and ask the court to stay the case pending the outcome of appraisal. Many
        experienced insurance litigators do this as a matter of course whenever appraisal is
        pending and the suit-limitation deadline is approaching &mdash; they do not wait for a
        tolling agreement and they do not rely on equitable tolling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanics are straightforward. Counsel files a complaint alleging breach of the
        insurance contract (and potentially bad faith, depending on the facts). At the same
        time &mdash; often in the same filing &mdash; counsel requests that the court stay all
        proceedings pending completion of the appraisal. Courts routinely grant these stays.
        The appraisal was invoked under the policy, both parties are participating, and there
        is no reason to proceed with litigation discovery until the panel has determined the
        amount of loss. The lawsuit does not need to advance to discovery, depositions, or
        trial while appraisal is pending &mdash; the court puts everything on hold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the appraisal award is issued, the parties evaluate whether the lawsuit needs to
        continue. If the appraisal award resolves the dispute, the case can be dismissed. If
        issues remain &mdash; coverage disputes, bad-faith claims, disputes over the appraisal
        process itself &mdash; the lawsuit is already filed and the stay can be lifted. The
        cost of filing a protective complaint is trivial compared to losing the right to sue
        entirely.
      </p>

      <CalloutBox variant="tip" title="File and Stay Is the Default for Experienced Counsel">
        <p>
          Many California insurance litigators file a protective lawsuit as a matter of course
          whenever appraisal is invoked and the suit limitation is within a year of expiring.
          They do not wait to see if the carrier will agree to a tolling agreement. They do not
          rely on equitable tolling. They file the complaint, request the stay, and then focus
          on the appraisal. This eliminates the tolling question entirely and costs relatively
          little. If an attorney handling an insured&apos;s claim is <em>not</em> doing this
          and is instead relying on equitable tolling or a verbal understanding with the
          carrier, that is a question worth raising with the attorney directly.
        </p>
      </CalloutBox>

      {/* ====== TOLLING AGREEMENT (SECONDARY PROTECTION) ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supplemental Protection: A Written Tolling Agreement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A written tolling agreement from the carrier is a useful supplement to a protective
        filing &mdash; not a substitute for it. A tolling agreement is a contract in which the
        insurer agrees in writing to pause the limitations clock for a specified period
        (typically through the appraisal process plus a reasonable window afterward, often
        ninety days, to evaluate the award and decide whether to push forward with
        litigation).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where the carrier will sign one, a tolling agreement removes the deadline pressure on
        the appraisal without requiring an immediate complaint. Some carriers will sign;
        others have blanket policies against signing them. An insured cannot count on getting
        a tolling agreement, which is why the protective lawsuit is the primary protection
        and the tolling agreement is the supplement.
      </p>

      <CalloutBox variant="tip" title="When to Request a Tolling Agreement">
        <p>
          Request the tolling agreement <strong>before or at the time appraisal is
          invoked</strong>. If the insured is the party invoking appraisal, include the
          request in the appraisal demand letter. If the insurer invokes appraisal, respond
          with the appraiser selection and a tolling-agreement request in the same
          communication. Making it part of the initial correspondence signals that the
          insured is organized, informed, and protecting rights from day one &mdash; and
          starts the clock on the carrier&apos;s response so the insured can decide whether
          to file a protective complaint instead.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Request a Tolling Agreement From the Carrier
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The request does not need to be complicated. A written communication &mdash; letter or
        email &mdash; to the carrier&apos;s claims department or assigned adjuster is
        sufficient. The request should:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Identify the claim number, policy number, and date of loss.
        </li>
        <li>
          Reference the pending or recently invoked appraisal.
        </li>
        <li>
          State that the policyholder is requesting a written tolling agreement to preserve
          the right to file suit while the appraisal process is completed.
        </li>
        <li>
          Propose specific terms: the limitations period is tolled from the date of the
          appraisal demand through a specified number of days after the appraisal award is
          issued (ninety days is common and reasonable).
        </li>
        <li>
          Request that the tolling agreement be signed by someone with binding authority
          &mdash; a claims manager, supervisor, or coverage counsel, not just a field adjuster
          or independent adjuster who may lack the authority to bind the company.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep the request matter-of-fact. You are not accusing the carrier of anything. You are
        proposing a reasonable administrative arrangement that allows both sides to focus on
        appraisal without the policyholder being forced to file a protective lawsuit. Frame it
        as mutually beneficial.
      </p>

      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">Sample Tolling Agreement Request Language</h4>
        <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
          &ldquo;In connection with the appraisal proceeding currently pending under the
          above-referenced policy, the insured requests that [Carrier Name] enter into a
          written tolling agreement with respect to the policy&apos;s suit limitation
          provision. Specifically, the insured requests that the parties agree in writing that
          the twelve-month suit limitation period set forth in the policy is tolled from the
          date of the appraisal demand through ninety (90) days after the issuance of the
          appraisal award, to allow both parties to focus on the appraisal process without the
          need for protective litigation. This agreement should be signed by an authorized
          representative of [Carrier Name] with binding authority.&rdquo;
        </p>
        <p className="text-gray-700 text-sm leading-relaxed italic">
          Note: This is sample language for general reference only. Consult an attorney to
          draft or review any tolling agreement specific to a claim.
        </p>
      </div>

      <CalloutBox variant="warning" title="If the Carrier Refuses, File Promptly">
        <p>
          Most carriers will refuse or simply not respond within the time the insured has to
          spare. If a signed tolling agreement is not in hand and the deadline is approaching,
          do not wait. File the protective complaint and request a stay. The cost of filing is
          a fraction of the cost of losing the right to sue. Consult an{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            attorney experienced in insurance litigation
          </Link>{' '}
          to file the complaint and request the stay.
        </p>
      </CalloutBox>

      {/* ====== CARRIER REFUSAL AS BAD FAITH ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier&apos;s Refusal as Evidence of Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier&apos;s refusal to enter into a tolling agreement while simultaneously
        participating in appraisal may be relevant to a{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          fair claims settlement practices
        </Link>{' '}
        analysis. Participating in a process that consumes time while refusing to pause the
        clock is not reasonable behavior. The carrier is effectively saying: &ldquo;We want
        to resolve this through appraisal, but we will not protect your right to sue if
        appraisal fails.&rdquo; That position is difficult to reconcile with the insurer&apos;s
        duty to deal fairly and in good faith with its policyholders.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document any refusal in writing and preserve it. It may support both a tolling
        argument and a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>{' '}
        claim later. Specifically, California Insurance Code &sect; 790.03(h) and the Fair
        Claims Settlement Practices Regulations (10 CCR &sect; 2695.7) require insurers to
        deal with claims reasonably and in good faith. An insurer that invokes or participates
        in appraisal while deliberately allowing the suit limitation to lapse may be violating
        these obligations.
      </p>

      {/* ====== PRACTICAL CHECKLIST ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Checklist: Protecting Yourself During Appraisal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are invoking appraisal or responding to the insurer&apos;s demand, protect
        yourself by following these steps:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Calculate the suit-limitation deadline.</strong> Start with the date of loss
          and count forward twelve months &mdash; or twenty-four months if the loss is related
          to a Governor-declared state of emergency under &sect;&nbsp;2071. Then apply
          <em>Prudential-LMI</em> tolling for the period from timely notice of claim to formal
          written denial. The calculation is not always straightforward; consult an attorney
          for the specific tolled deadline.
        </li>
        <li>
          <strong>Plan to file a protective lawsuit before the deadline.</strong> Consult an
          attorney well in advance &mdash; not in the final weeks. The attorney can file a
          complaint and request a stay pending appraisal. This is the protection California
          case law actually supports.
        </li>
        <li>
          <strong>Also request a written tolling agreement.</strong> A signed tolling agreement
          is useful supplemental protection where the carrier will sign one. Request it in
          writing at the time appraisal is invoked. But do not wait for it &mdash; if it does
          not come, file the protective complaint.
        </li>
        <li>
          <strong>Document every request and non-response.</strong> If the carrier refuses or
          ignores a tolling-agreement request, preserve the documentation. It may be relevant
          to bad-faith analysis later.
        </li>
        <li>
          <strong>Do not rely on equitable tolling to extend through appraisal.</strong> The
          published California authority is against extending <em>Prudential-LMI</em> tolling
          beyond the notice-to-denial window. A protective filing is the reliable protection.
        </li>
        <li>
          <strong>Keep a detailed timeline.</strong> Date of loss, claim filing, denial,
          appraisal demand, every communication about tolling, every step in the appraisal
          process. The timeline matters both for calculating the deadline and as evidence in
          any later litigation.
        </li>
        <li>
          <strong>If a Public Adjuster is handling the claim, raise the deadline issue
          directly.</strong> A Public Adjuster cannot provide legal advice about statutes of
          limitations but should be aware of the issue and able to refer to an attorney if the
          deadline is approaching. If a Public Adjuster invokes appraisal without addressing
          the tolling question, ask about it.
        </li>
        <li>
          <strong>If an attorney is handling the claim, confirm the deadline plan.</strong>
          Experienced insurance attorneys handle the protective-filing question as a matter
          of course. If an attorney was retained after appraisal was already underway, confirm
          they are tracking the limitations deadline and have a plan for the protective
          complaint.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">Timeline Example: How the Deadline Can Sneak Up on You</h4>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          <strong>January 10:</strong> Fire damages your home. The one-year suit limitation
          clock starts running.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          <strong>January 15:</strong> You file a claim. The insurer begins investigating.
          Equitable tolling likely pauses the clock during the investigation.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          <strong>June 1:</strong> The insurer makes a payment you consider inadequate. You
          disagree with the insurer&apos;s valuation. The insurer&apos;s active investigation
          arguably ends here &mdash; equitable tolling may stop.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          <strong>July 1:</strong> You invoke appraisal. Under the published California
          authority discussed above, the clock does <em>not</em> pause again &mdash; appraisal
          is not within the <em>Prudential-LMI</em> tolling window, and <em>Singh</em>,
          <em> Marselis</em>, and <em>Doheny Park</em> have declined to extend tolling further.
          Plan as if the clock is running.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          <strong>October 15:</strong> The appraisal panel has been selected and is scheduling
          the inspection. Meanwhile, the raw twelve-month deadline (January 10 of the following
          year) is approaching. Because tolling stopped on June 1 and did not resume for
          appraisal, the remaining time is roughly the difference between January 10 and the
          calendar &mdash; not whatever the appraisal-completion date turns out to be. This is
          when a protective complaint should already be filed or in preparation.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed italic">
          This example is simplified. The exact tolling calculation depends on the specific
          facts of your claim. Consult an attorney for your specific situation.
        </p>
      </div>

      {/* ====== KEY TAKEAWAYS ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The working rule in California is that invoking appraisal does not toll the
          one-year suit limitation.</strong> The California Supreme Court has not issued a
          decision squarely on point, but the published Court of Appeal authority
          (<em>Singh</em>, <em>Marselis</em>, <em>Doheny Park</em>) has consistently declined
          to extend <em>Prudential-LMI</em>&apos;s tolling rule beyond the notice-to-denial
          window. Experienced California insurance litigators operate under the rule that
          appraisal does not toll.
        </li>
        <li>
          <em>Prudential-LMI</em> tolls the suit limitation from timely notice of claim to
          formal written denial. That window is well-established. Anything beyond it &mdash;
          tolling for reconsideration requests, tolling for settlement disputes, tolling for
          appraisal &mdash; has been rejected by published California authority.
        </li>
        <li>
          For losses related to a Governor-declared state of emergency under Gov. Code
          &sect;&nbsp;8558(b), Ins. Code &sect;&nbsp;2071 extends the suit-limitation period
          from twelve months to twenty-four months. Confirm whether the longer clock applies
          before any deadline calculation.
        </li>
        <li>
          <strong>The primary protection is to file a protective lawsuit before the deadline
          and request a stay pending appraisal.</strong> This is standard practice among
          experienced insurance litigators. It eliminates the tolling question entirely and
          costs relatively little compared to losing the right to sue.
        </li>
        <li>
          A written tolling agreement signed by the carrier is useful supplemental protection
          where available. Request it at the time appraisal is invoked. But many carriers
          will refuse or not respond, so do not rely on getting one &mdash; file the
          protective complaint if the agreement does not come.
        </li>
        <li>
          The policyholder-side arguments for tolling during appraisal &mdash; analogy to
          <em>Prudential-LMI</em>, implied waiver from insurer participation, the
          <em>Appalachian</em> arbitration-overlay framework, the impracticality of parallel
          proceedings &mdash; are not frivolous, but no published California decision has
          adopted them. They are litigation positions, not deadline planning.
        </li>
        <li>
          A carrier&apos;s refusal to enter into a tolling agreement while participating in
          appraisal does not change the deadline analysis &mdash; the protective filing is
          still the answer &mdash; but the refusal may be relevant to a later bad-faith
          analysis.
        </li>
        <li>
          Other states analyze this differently. California&apos;s case law pattern is
          consistent in declining to extend tolling, but if the claim is in another state,
          consult counsel familiar with that state&apos;s rules.
        </li>
      </ul>

      {/* ====== RELATED ARTICLES ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
            Insurance Appraisal in California: The Complete Guide
          </Link>{' '}
          &mdash; How appraisal works, the standard fire policy, and what to expect from the
          process.
        </li>
        <li>
          <Link href="/resources/equitable-tolling" className="text-[#2E74B5] underline">
            Equitable Tolling of the Statute of Limitations
          </Link>{' '}
          &mdash; How the one-year suit limitation clock is paused during the insurer&apos;s
          investigation.
        </li>
        <li>
          <Link href="/resources/california-appraisal-case-law" className="text-[#2E74B5] underline">
            California Appraisal Case Law and the Arbitration Code
          </Link>{' '}
          &mdash; Key cases including <em>Sharma</em>, <em>Kacha</em>, <em>Lee</em>,{' '}
          <em>Doan</em>, <em>Lambert</em>, and <em>Mahnke</em>.
        </li>
        <li>
          <Link href="/resources/california-claim-deadlines" className="text-[#2E74B5] underline">
            California Insurance Claim Deadlines and Timeframes
          </Link>{' '}
          &mdash; Every deadline your California insurance company must meet.
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            Insurance Bad Faith
          </Link>{' '}
          &mdash; What constitutes bad faith and how it relates to the carrier&apos;s handling
          of the appraisal and tolling question.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is provided for general educational purposes only and does not
          constitute legal advice. While the published California Court of Appeal authority is
          consistent in declining to extend equitable tolling beyond the Prudential-LMI
          notice-to-denial window, application to any specific claim still depends on the facts,
          the policy language, and the procedural posture. Consult a licensed attorney
          experienced in California insurance litigation for advice about your specific
          situation. If your suit limitation deadline is approaching, seek legal counsel
          immediately &mdash; missing the deadline is irreversible.
        </p>
      </CalloutBox>

      <p className="text-gray-500 text-sm mt-8 italic">
        Written by Leland Coontz, licensed California Public Adjuster
      </p>
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
