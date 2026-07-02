import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Insurance Myths Debunked: What Adjusters Won't Correct",
  description:
    "Common property insurance myths debunked with California case law, statutes, and regulations. What the law actually says vs. what most policyholders believe.",
  summary:
    'Many common beliefs about property insurance are wrong. This guide corrects frequent myths, from both carriers and policyholders, using California statutes, regulations, and case law to show what the law actually requires.',
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
        Insurance claims are fertile ground for misinformation. Some of it comes from
        the insurance company itself &mdash; adjusters who tell policyholders things that are
        misleading, incomplete, or flatly wrong. Some of it comes from policyholders who
        have absorbed common beliefs about how insurance works that have never been true.
        Both categories cost people money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article addresses both. Part One covers things your insurance company&apos;s
        adjuster may tell you that are not accurate under California law. Part Two covers
        misconceptions that policyholders commonly hold about their own coverage. Every
        myth is debunked with specific statutes, regulations, or case law &mdash; because
        the answer to misinformation is not opinion. It is authority.
      </p>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  PART ONE: CARRIER MYTHS                                    */}
      {/* ──────────────────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-2 mt-10">
        Part One: Things Your Insurance Company Tells You That Are Not True
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        These are statements adjusters make &mdash; sometimes in writing, sometimes on the
        phone &mdash; that lead policyholders to accept less than they are owed, waive rights
        they did not know they had, or abandon claims they should have pursued.
      </p>

      {/* ── Myth 1: PA Communication ──────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #1: &ldquo;Now That You&apos;ve Hired a Public Adjuster, We Can Only Talk to Them &mdash; Not You&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is one of the most common things adjusters say when a policyholder retains a
          Public Adjuster. The insurer&apos;s adjuster will tell the homeowner, sometimes with a
          tone of regret, that they are no longer permitted to communicate directly with the
          insured &mdash; that all communication must now go through the PA.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is false. A Public Adjuster is the policyholder&apos;s representative, not
          their replacement. The insured retains every right they had before hiring a PA,
          including the right to speak directly with their own insurance company. There is no
          statute, regulation, or policy provision in California that prohibits an insurer from
          communicating with its own insured simply because the insured has retained a PA.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In fact, California law says the opposite. California Insurance Code Section 15027
          requires that every Public Adjuster contract include a provision stating that
          &ldquo;the insured has the right to initiate direct communications with the
          insured&apos;s attorney, the insurer, the insurer&apos;s adjuster, the insurer&apos;s
          attorney, and any other person regarding the settlement of the insured&apos;s
          claim.&rdquo; The Legislature specifically anticipated this tactic and wrote the
          insured&apos;s right to communicate directly into the statute.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The confusion the adjuster exploits stems from a superficial analogy to attorney
          representation, where ethical rules under the California Rules of Professional
          Conduct (Rule 4.2) prohibit an attorney from communicating with a represented
          party about the subject of the representation without consent of the party&apos;s
          attorney. But Public Adjusters are not attorneys. The Rules of Professional Conduct
          do not apply to insurance adjusters or to the insurer-insured relationship. An
          insurer communicating with its own policyholder is not a &ldquo;represented
          party&rdquo; scenario under any legal framework.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What the insurer is actually doing is strategic. By refusing to talk directly to the
          homeowner, the adjuster isolates the policyholder from the process and creates the
          impression that the PA is a barrier rather than an advocate. If the homeowner becomes
          frustrated &mdash; &ldquo;Why can&apos;t I even talk to my own insurance
          company?&rdquo; &mdash; the seed is planted to fire the PA and go back to dealing
          directly with the adjuster. That is the point.
        </p>
        <CalloutBox variant="important" title="Your Right to Communicate">
          <p>
            You hired your Public Adjuster. You can still call your insurance company any time
            you want. If the insurer refuses to speak with you, ask them to cite the specific
            statute or policy provision that prohibits it. They will not be able to, because it
            does not exist.
          </p>
        </CalloutBox>
      </div>

      {/* ── Myth 2: Work Product Privilege ────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #2: &ldquo;Those Documents Are Work Product Privilege &mdash; We Can&apos;t Share Them With You&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Insurers commonly refuse to provide policyholders with copies of estimates, engineering
          reports, scope-of-loss documents, and other claim-related materials, citing
          &ldquo;work product privilege&rdquo; or &ldquo;attorney-client privilege.&rdquo;
          In California, this is contrary to the express terms of the standard form policy
          codified in the Insurance Code.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          California Insurance Code Section 2071 &mdash; the standard form fire insurance
          policy that governs every fire policy issued in the state &mdash; contains explicit
          provisions requiring insurers to make claim-related documents available to the insured.
          Under 2018 amendments to the standard form, insurers must
          (1) <strong>notify claimants that claim-related documents are available upon
          request</strong>, and (2) <strong>provide copies within 15 calendar days</strong>{' '}
          of receiving a request.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Section 2071 itself defines &ldquo;claim-related documents&rdquo; broadly &mdash;
          all documents that relate to the evaluation of damages, including
          repair and replacement estimates, bids, appraisals, scopes of loss, drawings, plans,
          third-party findings on the amount of loss, and all other valuation, measurement,
          and loss adjustment calculations.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The exemptions are narrow: actual attorney-client privileged communications, actual
          attorney work product, documents indicating fraud by the insured, and medically
          privileged information. An engineering report the carrier hired is not attorney work
          product unless it was prepared at the specific direction of counsel in anticipation
          of litigation &mdash; and even then, the factual findings (as opposed to
          attorney-directed analysis) are typically discoverable.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          When an adjuster tells you their estimate is &ldquo;work product&rdquo; or their
          engineer&apos;s report is &ldquo;privileged,&rdquo; they are almost certainly
          misapplying the privilege. The report they commissioned to evaluate your roof is a
          claim-related document, and unless one of the narrow exemptions above actually
          applies, the insured is entitled to a copy. For a detailed discussion of
          this right and how to enforce it, see our article on{' '}
          <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
            your right to claim documents under California law
          </Link>.
        </p>
        <CalloutBox variant="warning" title="What to Do When They Refuse">
          <p>
            An insured might consider sending a written request (email is fine) citing
            California Insurance Code &sect; 2071 and requesting all claim-related documents.
            If the insurer refuses or fails to respond within 15 days, a complaint with the
            California Department of Insurance documents the failure, and a{' '}
            <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
              790 letter
            </Link>{' '}
            putting the carrier on notice &mdash; withholding claim-related documents may
            implicate California Insurance Code &sect; 790.03(h)(3) (failure to adopt and
            implement reasonable standards for prompt investigation and processing) &mdash;
            often prompts a more careful review.
          </p>
        </CalloutBox>
      </div>

      {/* ── Myth 3: Preferred Vendor ──────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #3: &ldquo;You Have to Use Our Preferred Contractor&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          After a loss, the insurance company often shows up with a mitigation company already
          in tow, or insists that you use their &ldquo;preferred vendor&rdquo; or
          &ldquo;network contractor&rdquo; for repairs. They may tell you that using someone
          else will jeopardize your claim, slow payment, or void coverage.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In California, the policyholder has the right to choose their own contractor on a
          residential property claim. The Fair Claims Settlement Practices Regulations make
          this explicit: 10 CCR &sect; 2695.9(b) provides that &ldquo;no insurer shall require
          that the insured have the property repaired by a specific individual or entity&rdquo;
          (the anti-forced-vendor rule). Under 10 CCR &sect; 2695.9(c), an insurer may
          generally not even suggest or recommend a specific repairer unless the claimant has
          expressly requested a referral or the claimant has been informed in writing of the
          right to select their own repairer. And 10 CCR &sect; 2695.9(d)(2) requires the
          insurer to provide, on the claimant&apos;s request, the name of at least one repair
          entity that will perform the work for the insurer&apos;s estimate amount. The
          insurer&apos;s recommendation is a convenience &mdash; the policyholder may select
          their own contractor.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          (California Insurance Code Section 758.5 is the analogous anti-steering statute on
          the auto-insurance side; it applies to automotive repair dealers, not residential
          property contractors. For residential property claims, the controlling authority is
          the &sect; 2695.9 regulations described above.)
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The reason insurers push preferred vendors is financial, not quality-based. Preferred
          vendors have contractual relationships with the carrier. They agree to use the
          carrier&apos;s pricing, follow the carrier&apos;s scope, and &mdash; in many cases
          &mdash; keep costs as low as possible. Their financial incentive runs to the insurance
          company, not to you. For a deeper look at how preferred vendor arrangements work and
          the problems they cause, see our article on{' '}
          <Link href="/resources/preferred-vendor-problems" className="text-blue-700 underline hover:text-blue-900">
            preferred vendor problems
          </Link>{' '}
          and our guide on{' '}
          <Link href="/resources/choosing-your-contractor" className="text-blue-700 underline hover:text-blue-900">
            choosing your own contractor
          </Link>.
        </p>
        <CalloutBox variant="warning" title="Important Exception: Right to Repair Policies">
          <p>
            Some policies contain a &ldquo;right to repair&rdquo; clause that gives the
            insurer the contractual right to make repairs using their own selected contractor.
            When this clause exists and the insurer exercises it, they <em>can</em> pick
            the contractor and force it on the insured. The trade-off is that the insurer
            then assumes full responsibility for the quality and completeness of the work
            &mdash; and if the repairs are deficient, the insurer owns the problem. Check
            your policy for this endorsement. If it is not there, you choose your contractor.
            See our article on{' '}
            <Link href="/resources/right-to-repair" className="text-blue-700 underline hover:text-blue-900">
              right to repair clauses
            </Link>{' '}
            for a complete discussion.
          </p>
        </CalloutBox>
      </div>

      {/* ── Myth 4: Only Owe ACV ──────────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #4: &ldquo;We Only Owe You Actual Cash Value&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Adjusters sometimes present the actual cash value (ACV) payment as the final
          settlement &mdash; as though depreciation is a permanent deduction and the
          policyholder is not entitled to anything more.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your policy provides replacement cost coverage &mdash; and most HO-3 policies
          do &mdash; the ACV payment is only the first installment. The insurer pays ACV
          upfront (replacement cost minus depreciation), and then owes the remaining
          depreciation (called the &ldquo;recoverable depreciation&rdquo; or
          &ldquo;holdback&rdquo;) once you complete repairs or replacement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Insurance Code Section 2051.5 and the policy&apos;s own loss-settlement provisions
          establish the framework: when a policy provides replacement cost coverage, the
          insurer pays actual cash value first and owes the balance when the insured completes
          the repair or replacement &mdash; and &sect; 2051.5(b) guarantees at least 12 months
          to collect it (36 months after a declared state of emergency). The insurer cannot
          treat ACV as the final word.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Also, following a declared state of emergency in California, insurers must
          provide advance payments under specific statutory provisions: Insurance Code
          &sect; 2061 (added by SB 872, 2020) requires a four-month ALE advance for total
          losses, and Insurance Code &sect; 10103.7 (added by AB 3012, amended by SB 495)
          requires a 60% contents advance (up to $350,000) for total losses, effective
          January 2026. These are not optional. The carrier must make partial payments while
          the claim is being processed &mdash; the policyholder does not need to wait for a
          complete estimate. For a complete discussion
          of ACV versus replacement cost, see our article on{' '}
          <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
            ACV vs. RCV
          </Link>{' '}
          and{' '}
          <Link href="/resources/loss-settlement-provisions" className="text-blue-700 underline hover:text-blue-900">
            loss settlement provisions
          </Link>.
        </p>
      </div>

      {/* ── Myth 5: Must Accept Their Estimate ────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #5: &ldquo;Our Estimate Is What the Claim Is Worth &mdash; Take It or Leave It&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The insurer presents a Xactimate estimate and treats it as a final determination of
          value. If the policyholder objects, the adjuster implies there is no recourse &mdash;
          or that disputing the estimate will only delay things further.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The carrier&apos;s estimate is their opening position, not the objective value of
          the loss. Xactimate is an estimating tool &mdash; it produces a cost projection
          based on the inputs the user selects. Different users can produce dramatically
          different results for the same loss depending on what line items they include, what
          measurements they take, and what options they select. The software itself disclaims
          pricing accuracy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Under 10 CCR &sect; 2695.7(d), an insurer may not deny a claim without conducting a
          thorough, fair, and objective investigation. If the estimate is based on a 15-minute
          drive-by inspection, or if it omits damage the adjuster never bothered to document, the
          estimate itself is evidence of an inadequate investigation. Policyholders have the
          right to obtain their own estimates, hire their own experts, and dispute every line
          item. If the parties cannot agree, most California homeowner policies contain an{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal provision
          </Link>{' '}
          that provides a binding process for resolving valuation disputes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For a detailed analysis of how Xactimate estimates can understate claim values, see
          our articles on{' '}
          <Link href="/resources/xactimate-pricing-gap" className="text-blue-700 underline hover:text-blue-900">
            why your insurance estimate is lower than your contractor&apos;s quote
          </Link>{' '}
          and{' '}
          <Link href="/resources/common-xactimate-errors" className="text-blue-700 underline hover:text-blue-900">
            common Xactimate estimating errors
          </Link>.
        </p>
      </div>

      {/* ── Myth 6: Recorded Statement Required ───────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #6: &ldquo;We Can&apos;t Process Your Claim Until You Give a Recorded Statement&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Adjusters frequently present the recorded statement as a prerequisite to claim
          processing &mdash; as though the claim cannot move forward without one.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is technically true &mdash; a recorded statement is not a standard policy
          condition, and the insurer&apos;s duty to investigate your claim under 10 CCR
          &sect; 2695.7(d) is not contingent on your agreement to be recorded. Most standard
          homeowner policies require the insured to &ldquo;cooperate&rdquo; with the
          insurer&apos;s investigation and to submit to an{' '}
          <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
            examination under oath
          </Link>{' '}
          if requested &mdash; but a recorded statement and an examination under oath are
          different things. A recorded statement is an informal interview conducted by the
          adjuster. An EUO is a formal, sworn proceeding that <em>is</em> a policy condition.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          However, while technically you are not required to give a recorded statement,
          refusing one outright is a dangerous move. If you refuse the informal recorded
          interview, the insurer will very often pivot to demanding a formal examination
          under oath &mdash; which <em>is</em> a policy condition, which requires sworn
          testimony, and which will almost certainly require the assistance of an attorney.
          An EUO is a significantly more adversarial and expensive process than a recorded
          statement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The better approach is not refusal but negotiation. Consider these alternatives:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Ask the insurer to submit their questions in writing first, then agree
            to a recorded interview to follow.</strong> This is often the strongest approach.
            The insured answers written questions at their own pace, with time to be accurate
            and thorough. Once the written questions are complete, the insured agrees to a
            recorded follow-up interview. By that point, the insured already knows what the
            insurer is asking about, many questions are already resolved, and the recorded
            session is shorter and less exhausting. This sequence is especially reasonable
            when the insured has a legitimate basis for needing written questions first &mdash;
            limited English proficiency, hearing difficulties, cognitive issues, early-onset
            dementia, or the emotional toll of a recent catastrophic loss. An insurer that
            refuses a reasonable accommodation for a policyholder who is willing to cooperate
            and has agreed to a recorded interview afterward may be creating a record that an
            attorney could later use to the policyholder&apos;s advantage. Consult with an
            attorney about your specific situation.
          </li>
          <li>
            <strong>Consult an attorney.</strong> A recorded statement is an informal
            process &mdash; it is not an examination under oath. With an EUO, the
            insurer&apos;s attorney is present, you typically need your own attorney on the
            record, and everyone knows the lawyers are in the room. A recorded statement is
            different. It is usually a phone call between the adjuster and the insured.
            Nothing prevents a policyholder from consulting with an attorney beforehand to
            understand what to expect. And because a recorded statement is not a deposition,
            there is no procedural rule governing who may be sitting next to you in your
            own home during an informal phone call &mdash; or whether you happen to be
            taking the call from your attorney&apos;s office. Whether that matters is a
            conversation to have with your attorney.
          </li>
          <li>
            <strong>Agree to an unrecorded interview.</strong> You can cooperate and answer
            every question without consenting to the recording itself.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The myth is not that you must give a recorded statement &mdash; the myth is that
          the claim cannot proceed without one. It can. But the practical question is how
          you handle the request, not whether you can technically refuse it. For a thorough
          discussion, see our article on{' '}
          <Link href="/resources/recorded-statements-siu" className="text-blue-700 underline hover:text-blue-900">
            recorded statements and SIU investigations
          </Link>.
        </p>
      </div>

      {/* ── Myth 7: Missed Deadline ───────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #7: &ldquo;You Missed the Deadline to File Your Claim&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Adjusters sometimes tell policyholders they reported the claim too late, or that the
          one-year suit limitation in the policy has expired, and therefore the claim is dead.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The one-year suit limitation in the standard fire policy (California Insurance Code
          &sect; 2071) is equitably tolled while the claim is pending. The California Supreme
          Court established this in <em>Prudential-LMI Commercial Insurance v. Superior
          Court</em> (1990) 51 Cal.3d 674: the period runs from inception of the loss, but it
          is tolled from the time the insured gives timely notice until the insurer formally
          denies the claim in writing. As long as the insurer is still investigating,
          negotiating, or processing the claim, the clock is paused &mdash; and for losses
          related to a declared state of emergency, &sect; 2071 extends the limitation period
          to 24 months.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Prompt notice provisions are not strict filing deadlines. Late notice
          alone is generally not sufficient to deny a claim in California. The insurer must
          show it was actually prejudiced by the late notice &mdash; that the delay caused
          a concrete disadvantage in investigating the claim. <em>Shell Oil Co. v. Winterthur
          Swiss Ins. Co.</em> (1993) 12 Cal.App.4th 715 is a leading California case on the
          notice-prejudice rule in the liability-insurance context, articulating that an
          insurer asserting late notice as a defense must prove actual, substantial prejudice
          &mdash; not merely the possibility of prejudice. California courts have applied that
          framework broadly.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For a detailed treatment, see our articles on{' '}
          <Link href="/resources/equitable-tolling" className="text-blue-700 underline hover:text-blue-900">
            equitable tolling of the statute of limitations
          </Link>{' '}
          and{' '}
          <Link href="/resources/california-claim-deadlines" className="text-blue-700 underline hover:text-blue-900">
            California insurance claim deadlines
          </Link>.
        </p>
      </div>

      {/* ── Myth 8: No O&P ────────────────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #8: &ldquo;Overhead and Profit Is Only Owed When Three or More Trades Are Involved&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the most widespread carrier myth in the industry. Adjusters routinely
          strip overhead and profit (O&amp;P) from estimates, citing the so-called &ldquo;three
          trade rule&rdquo; &mdash; the claim that O&amp;P is only owed when a general
          contractor must coordinate three or more subcontractor trades.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The number of trades involved is one factor some courts have considered when
          evaluating whether the complexity of a repair justifies the involvement of a
          general contractor &mdash; and therefore the inclusion of O&amp;P. There is case
          law in several states that has discussed the number of trades as part of a broader
          analysis of job complexity. But carriers have extracted that single factor, stripped
          it of context, and turned it into a bright-line rule: fewer than three trades means
          no O&amp;P. That rule does not exist in any insurance policy, California statute,
          regulation, or reported decision. It is a carrier-created guideline dressed up as
          an industry standard.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The actual question is whether the scope of work requires a general contractor.
          A two-trade job can absolutely require a GC &mdash; if it involves coordination,
          sequencing, permitting, supervision, warranty responsibility, or any of the other
          functions a general contractor provides. Overhead and profit represent the real
          cost of hiring a contractor to manage and perform the repair. If the scope of work
          requires a contractor &mdash; and most residential insurance claims do &mdash; then
          O&amp;P is a component of the cost to repair. Stripping it from the estimate means
          the policyholder is being underpaid by 20% or more. For the full analysis, see our
          article on{' '}
          <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
            overhead and profit
          </Link>.
        </p>
      </div>

      {/* ── Myth 9: Wear and Tear ─────────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #9: &ldquo;That Damage Was Pre-Existing / Wear and Tear&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the single most overused denial in property insurance. The adjuster looks at
          damaged property, notes that it was not brand new, and attributes the damage to wear
          and tear rather than the claimed peril.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The wear and tear exclusion is a <em>cause of loss</em> exclusion, not a
          <em> condition of property</em> exclusion. Your policy excludes damage
          <em> caused by</em> wear and tear. It does not exclude damage <em>to</em> property
          that happens to be old or worn. If a windstorm blew shingles off a 15-year-old
          roof, the cause of loss was wind &mdash; a covered peril. The fact that the roof
          was 15 years old does not transform the cause of loss into wear and tear. The
          insurer addresses the age of the property through depreciation, not through denial.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          California courts have consistently held that the burden is on the insurer to prove
          that an exclusion applies. <em>Aydin Corp. v. First State Insurance Co.</em> (1998)
          18 Cal.4th 1183 established that the insured bears the initial burden of showing a
          loss within the policy&apos;s coverage, and the insurer bears the burden of proving
          an exclusion applies. For a thorough treatment, see our article on{' '}
          <Link href="/resources/wear-and-tear-cause-of-loss" className="text-blue-700 underline hover:text-blue-900">
            wear and tear as a cause of loss exclusion
          </Link>{' '}
          and{' '}
          <Link href="/resources/pre-existing-vs-storm-damage" className="text-blue-700 underline hover:text-blue-900">
            pre-existing damage vs. storm damage
          </Link>.
        </p>
      </div>

      {/* ── Myth 10: Can't Depreciate Labor ───────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #10: &ldquo;We Depreciate Both Materials and Labor&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Insurers routinely apply depreciation to the full cost of repairs, including the
          labor component. They treat labor as though it ages and loses value the way a
          roof shingle does.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <CalloutBox variant="important" title="California-Specific Rule">
          <p>
            The prohibition on labor depreciation discussed below is California law. Many
            other states still permit insurers to depreciate labor. If your claim is governed
            by a state other than California, check that state&apos;s statutes and case law
            before relying on this analysis.
          </p>
        </CalloutBox>
        <p className="text-gray-700 leading-relaxed mb-4">
          In California, this issue is settled &mdash; by regulation. Title 10, Section
          2695.9(f)(1) of the California Code of Regulations provides that &ldquo;[e]xcept
          for the intrinsic labor costs that are included in the cost of manufactured
          materials or goods, the expense of labor necessary to repair, rebuild or replace
          covered property is not a component of physical depreciation and shall not be
          subject to depreciation or betterment.&rdquo; The narrow exception is the labor
          cost embedded in factory-made products; the labor to install, build, or repair
          cannot be depreciated. This is not a gray area in California &mdash; the Department
          of Insurance wrote it into the Fair Claims regulations in plain language.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outside California, the picture is mixed. A growing number of states have reached the
          same conclusion through case law or regulation &mdash; Arkansas, Kentucky, and
          Oklahoma among them &mdash; though the rule and its scope vary by jurisdiction. In
          many states, insurers are still permitted to depreciate labor, and the issue remains
          actively litigated. In California, ACV is now defined by statute: Insurance Code
          &sect; 2051(b), as amended effective January 1, 2020, prescribes a uniform measure
          &mdash; replacement cost less a fair and reasonable deduction for physical depreciation
          &mdash; for both total and partial losses, structure and contents, while 10 CCR
          &sect; 2695.9(f)(1) supplies the labor rule. The statute superseded the
          broad-evidence / fair-market-value
          approach earlier California cases such as <em>Cheeks v. California FAIR Plan Assn.</em>{' '}
          (1998) 61 Cal.App.4th 423 had applied. California also has &sect; 2051.5 addressing
          replacement-cost coverage. The point: the labor-depreciation question is settled in
          California by regulation. For a full discussion, see our article on{' '}
          <Link href="/resources/labor-depreciation" className="text-blue-700 underline hover:text-blue-900">
            labor depreciation
          </Link>{' '}
          and{' '}
          <Link href="/resources/excessive-depreciation" className="text-blue-700 underline hover:text-blue-900">
            excessive depreciation
          </Link>.
        </p>
      </div>

      {/* ── Myth 11: Earth Movement Exclusion ─────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #11: &ldquo;The Earth Movement Exclusion Bars Your Claim&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          After a water leak causes soil erosion and foundation damage, or after a wildfire
          triggers a mudslide, the insurer points to the earth movement exclusion and
          denies the claim.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In California, the earth movement exclusion does not control when a covered peril
          set the chain of events in motion. Under the <strong>efficient proximate cause
          doctrine</strong>, if a covered peril (such as fire, water discharge, or vehicle
          impact) was the predominant cause that initiated a chain of events leading to earth
          movement, the loss is covered &mdash; despite the exclusion. The California Supreme
          Court established this in <em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21 and
          reaffirmed it in <em>Garvey v. State Farm Fire &amp; Casualty Co.</em> (1989) 48
          Cal.3d 395. The doctrine is codified in California Insurance Code &sect; 530.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For specific application to wildfire-triggered mudslides, see our article on{' '}
          <Link href="/resources/wildfire-mudslide-coverage" className="text-blue-700 underline hover:text-blue-900">
            mudslide after wildfire coverage
          </Link>{' '}
          and our guide to{' '}
          <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
            the efficient proximate cause doctrine
          </Link>.
        </p>
      </div>

      {/* ── Myth 12: No Code Upgrades ─────────────────────────────── */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-red-900 mb-3">
          Myth #12: &ldquo;We Don&apos;t Pay for Code Upgrades&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Adjusters frequently tell policyholders that the carrier only owes to restore the
          property to its pre-loss condition &mdash; and that any code-mandated upgrades are
          the homeowner&apos;s problem.
        </p>
        <p className="font-bold text-red-800 mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most homeowner policies include Ordinance or Law coverage (sometimes called
          &ldquo;building code upgrade&rdquo; coverage) as either a built-in coverage
          or an available endorsement. When the policy includes that coverage, code-compliance
          costs are part of the covered cost of repair, and an estimate that omits them does
          not reflect what the repair will actually cost &mdash; the written scope 10 CCR
          &sect; 2695.9(d) requires must be &ldquo;of an amount that will restore the property
          to pre-loss condition&rdquo; meeting accepted trade standards, and repairs that
          cannot lawfully be permitted without code compliance do not meet that standard. And
          under Insurance Code &sect; 2051.5(c)(1), an insurer cannot deny otherwise-covered
          building-code upgrade costs merely because the insured rebuilds at a new location.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Building code upgrades can add 25&ndash;50% to the cost of a claim. Electrical
          rewiring to current NEC standards, Title 24 energy compliance, ADA requirements,
          structural upgrades to current seismic standards, and modern plumbing code
          compliance are all costs the insurer may owe. See our articles on{' '}
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            ordinance or law coverage
          </Link>{' '}
          and{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            code upgrade coverage
          </Link>.
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  PART TWO: POLICYHOLDER MYTHS                               */}
      {/* ──────────────────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-2 mt-12">
        Part Two: Things Policyholders Believe That Are Not True
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        These are misconceptions that homeowners commonly hold about their insurance
        coverage. Unlike the myths above, these are not things the insurer tells you.
        They are things you tell yourself &mdash; and they can be just as costly.
      </p>

      {/* ── Myth 13: Filing Raises Premiums ───────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #13: &ldquo;Filing a Claim Will Definitely Raise My Premiums&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many homeowners avoid filing legitimate claims because they believe any claim will
          automatically trigger a premium increase or even a nonrenewal.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether a claim affects your premium depends on multiple factors: the type of claim,
          your claims history, and your carrier. In California, Proposition 103 restricts
          the factors insurers can use to set rates. Under California Insurance Code &sect;
          1861.02, rates must be primarily based on the insured&apos;s driving record (for
          auto) or claims history, but the insurer cannot increase your premium solely because
          you filed a single claim &mdash; the increase must be actuarially justified.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          More importantly, the CLUE (Comprehensive Loss Underwriting Exchange) and A-PLUS
          databases record even <em>inquiries</em> about claims, not just filed claims. So
          the damage to your claims history may already be done the moment you called to
          ask about coverage. Once the inquiry is recorded, you may as well follow through
          with the claim and collect what you are owed. For more on how claims history
          databases work, see our article on{' '}
          <Link href="/resources/clue-database" className="text-blue-700 underline hover:text-blue-900">
            CLUE and A-PLUS databases
          </Link>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The calculation is practical: if you have $40,000 in covered damage, absorbing
          that cost to &ldquo;protect&rdquo; a premium that might increase by $200 per year
          is rarely rational. You paid for insurance. Use it.
        </p>
      </div>

      {/* ── Myth 14: Flood Coverage ───────────────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #14: &ldquo;My Homeowners Insurance Covers Floods&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is one of the most dangerous misconceptions in property insurance. Homeowners
          assume that because they have &ldquo;full coverage,&rdquo; they are protected
          against flooding.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Standard homeowner policies &mdash; the HO-3, the HO-5, and the California FAIR
          Plan &mdash; all exclude flood. The ISO HO-3 form explicitly excludes &ldquo;flood,
          surface water, waves, tidal water, overflow of a body of water, or spray from any
          of these, whether or not driven by wind.&rdquo; This exclusion has been in the
          standard form for decades.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Flood coverage requires a separate policy, either through the National Flood
          Insurance Program (NFIP) or a private flood insurer. Private flood policies often
          offer broader coverage and higher limits than the NFIP, and they are adjusted under
          state law rather than federal regulations &mdash; which means California&apos;s
          consumer protections apply. See our article on{' '}
          <Link href="/resources/flood-insurance-nfip-vs-private" className="text-blue-700 underline hover:text-blue-900">
            NFIP vs. private flood insurance
          </Link>.
        </p>
        <CalloutBox variant="warning" title="Water Damage vs. Flood">
          <p>
            &ldquo;Water damage&rdquo; and &ldquo;flood&rdquo; are not the same thing. Your
            homeowner policy covers water damage from internal sources &mdash; burst pipes,
            appliance failures, accidental discharge or overflow. It does not cover water that
            enters your home from outside ground-level sources. The distinction is the origin,
            not the result.
          </p>
        </CalloutBox>
      </div>

      {/* ── Myth 15: Market Value ─────────────────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #15: &ldquo;I Should Insure My Home for Its Market Value&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many homeowners equate their coverage limit with their home&apos;s real estate
          value. Some even reduce coverage when property values decline.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Insurance coverage should be based on the <strong>replacement cost</strong> of the
          structure &mdash; what it would cost to rebuild the home from the ground up at
          current material and labor prices. This has nothing to do with real estate market
          value, which reflects land, location, supply and demand, and market conditions.
          A home in a declining market might sell for $400,000 but cost $600,000 to rebuild.
          A home in a hot market might sell for $1.2 million but only cost $500,000 to
          reconstruct.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Insuring for market value can leave you catastrophically underinsured after a total
          loss. No California statute requires insurers to provide a replacement cost estimate
          at policy inception &mdash; the statutory obligation, under Insurance Code &sect;
          10103.4, kicks in only at renewal, and the renewal estimate is generally required
          only every other policy year. The estimate that exists, when it exists, is frequently
          wrong &mdash; and if the insurer provided one and the resulting limits proved
          inadequate at total loss, the insurer may bear some responsibility.
          See our articles on{' '}
          <Link href="/resources/replacement-cost-vs-guaranteed" className="text-blue-700 underline hover:text-blue-900">
            replacement cost vs. guaranteed replacement cost
          </Link>{' '}
          and{' '}
          <Link href="/resources/underinsured-after-wildfire" className="text-blue-700 underline hover:text-blue-900">
            being underinsured after a wildfire
          </Link>.
        </p>
      </div>

      {/* ── Myth 16: Everything Is Covered ────────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #16: &ldquo;I Have Full Coverage &mdash; Everything Is Protected&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The phrase &ldquo;full coverage&rdquo; is the most misleading term in insurance.
          Policyholders assume it means everything they own is covered for everything that
          could happen to it.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          No homeowner policy covers everything. The standard HO-3 covers the dwelling on
          an &ldquo;open perils&rdquo; basis (everything except what is specifically excluded),
          but it covers personal property on a &ldquo;named perils&rdquo; basis (only the
          16 listed perils). This means your building is covered for most things, but your
          <em> contents</em> are only covered for fire, lightning, windstorm, hail, explosion,
          riot, aircraft, vehicles, smoke, vandalism, theft, volcanic eruption, falling
          objects, weight of ice or snow, accidental discharge or overflow, and sudden
          tearing apart of systems. Anything not on that list &mdash; including accidental
          breakage, mysterious disappearance, or pet damage &mdash; is not covered for
          personal property unless you have an HO-5 policy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Also, every policy has sub-limits &mdash; hidden dollar caps on specific
          categories of property like jewelry ($1,500 typical), firearms ($2,500), cash
          ($200), and silverware ($2,500). These caps apply regardless of your overall
          personal property limit. See our article on{' '}
          <Link href="/resources/special-limits-of-liability" className="text-blue-700 underline hover:text-blue-900">
            special limits of liability
          </Link>{' '}
          and{' '}
          <Link href="/resources/contents-coverage-gaps" className="text-blue-700 underline hover:text-blue-900">
            contents coverage gaps
          </Link>.
        </p>
      </div>

      {/* ── Myth 17: Insurer Pays Automatically ───────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #17: &ldquo;The Insurance Company Will Figure Out What I&apos;m Owed and Pay It&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Policyholders trust that the adjuster will do a thorough job, identify all the
          damage, calculate the correct value, and send a check that makes them whole.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The insurance company&apos;s adjuster works for the insurance company. Their job
          is to evaluate the claim, and their employer has a financial incentive to minimize
          what it pays. This is not a conspiracy &mdash; it is a structural reality. The
          adjuster may be honest and competent, but they are working within systems, authority
          levels, and corporate guidelines designed to control costs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The public record supports this pattern. The McKinsey &amp; Company claims-process
          consulting of the 1990s &mdash; made public through litigation discovery and analyzed
          in David Berardinelli&apos;s <em>From Good Hands to Boxing Gloves</em> &mdash; advised
          carriers on claims systems that reduced payouts and made it harder for policyholders
          to dispute settlements. The result was an industry-wide shift toward &ldquo;three
          touchpoints&rdquo; claims handling &mdash; shorter inspections, faster closures,
          and lower payments. Multiple state attorney general investigations and class action
          lawsuits have targeted these practices. See our article on{' '}
          <Link href="/resources/carrier-claims-tactics" className="text-blue-700 underline hover:text-blue-900">
            how insurance carriers systematically underpay claims
          </Link>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The practical takeaway: document your own damage, get your own estimates, and do
          not assume the adjuster&apos;s scope is complete or that their numbers are correct.
          They are a starting point for negotiation, not a final answer.
        </p>
      </div>

      {/* ── Myth 18: Don't Need Documentation ─────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #18: &ldquo;I Don&apos;t Need to Document My Belongings Before a Loss&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most homeowners assume they will remember what they owned, or that receipts and
          purchase records will be available when needed.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          After a total loss, policyholders consistently underestimate what they owned by
          40&ndash;60%. You will not remember the contents of every drawer, closet, shelf,
          and cabinet. Receipts are gone. Store records may not go back far enough. And
          without documentation, the insurer has no obligation to take your word for the
          value of any particular item.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          California does provide some protection after declared disasters: Insurance Code
          &sect; 10103.7(b)(1) requires insurers to pay at least 60% of the personal property
          policy limit toward contents (capped at $350,000) without requiring an itemized
          inventory during the first 100 days. (SB 495, Stats. 2025, ch. 542, raised the
          floor from the prior 30% / $250,000 figure under AB 3012, effective January 1,
          2026, with policy forms required to comply by July 1, 2026.)
          But that is a floor, not a ceiling. A thorough home inventory &mdash; photos,
          video walkthroughs, receipts stored off-site or in the cloud &mdash; can mean the
          difference between a $50,000 contents settlement and a $200,000 one. See our
          guide on{' '}
          <Link href="/resources/contents-inventory-guide" className="text-blue-700 underline hover:text-blue-900">
            how to document a contents inventory
          </Link>{' '}
          and our article on{' '}
          <Link href="/resources/sb495-contents-rule" className="text-blue-700 underline hover:text-blue-900">
            SB 495 and California&apos;s contents payment rule
          </Link>.
        </p>
      </div>

      {/* ── Myth 19: Earthquake Coverage ──────────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #19: &ldquo;My Homeowners Policy Covers Earthquake Damage&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Like flood, earthquake is an exclusion that catches homeowners off guard &mdash;
          particularly in California, where the risk is significant.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The standard HO-3 policy excludes earthquake. Coverage requires a separate
          earthquake policy, either through the California Earthquake Authority (CEA) or
          a private carrier. CEA policies have high deductibles (typically 5&ndash;25% of
          the dwelling limit) and limited contents and ALE coverage. Private earthquake
          carriers may offer lower deductibles and broader coverage but at higher premiums.
          See our article on{' '}
          <Link href="/resources/earthquake-insurance" className="text-blue-700 underline hover:text-blue-900">
            earthquake insurance in California
          </Link>.
        </p>
      </div>

      {/* ── Myth 20: Once Settled, It's Over ──────────────────────── */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1F3964] mb-3">
          Myth #20: &ldquo;Once I Cash the Check, I Can&apos;t Reopen My Claim&rdquo;
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Policyholders often believe that depositing a claim payment means accepting it as
          final &mdash; that they have no right to go back and dispute the amount.
        </p>
        <p className="font-bold text-[#1F3964] mb-3">The Truth:</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cashing an insurance check does not constitute a release of your claim. The check
          is a payment of benefits owed under a contract. Depositing it does not waive your
          right to dispute the amount, file supplemental claims for additional damage, or
          invoke the appraisal provision.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Some insurers attempt to turn their checks into releases by printing restrictive
          endorsement language on the back &mdash; phrases like &ldquo;full and final
          settlement,&rdquo; &ldquo;payment in full,&rdquo; or &ldquo;endorsement constitutes
          acceptance of all amounts owed.&rdquo; Courts have consistently found this practice
          problematic. California Civil Code &sect; 1526 limits the effect of restrictive
          endorsements, and courts have protected policyholders who cash partial payments out
          of financial necessity. The legal principle is straightforward: the insurer already
          owes these benefits under the policy contract. Demanding a release in exchange for
          performing a pre-existing contractual obligation lacks independent consideration. As
          insurance attorney Chip Merlin has documented extensively, placing accord and
          satisfaction language on claim checks is itself an unfair claims practice in many
          jurisdictions &mdash; the insurer is attempting to extract a release by exploiting
          the policyholder&apos;s need for funds that are already owed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The insurer&apos;s obligation is to pay the full amount owed under the policy.
          If additional damage is discovered, if the initial scope was incomplete, or
          if repair costs exceed the estimate, you have the right to submit a supplemental
          claim. Cashing the initial check does not close the door. For practical guidance,
          see our articles on{' '}
          <Link href="/resources/cashing-insurance-checks" className="text-blue-700 underline hover:text-blue-900">
            insurance checks
          </Link>{' '}
          and{' '}
          <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
            filing supplemental claims
          </Link>.
        </p>
      </div>

      {/* ── Summary ───────────────────────────────────────────────── */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          The Common Thread
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every myth on this list has the same effect: it reduces what the policyholder
          receives. Some myths do it by discouraging the policyholder from pursuing a
          legitimate claim. Others do it by causing the policyholder to accept an
          inadequate settlement. And some do it by preventing the policyholder from
          understanding what they purchased in the first place.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The antidote is knowledge. Read your policy. Understand your rights under
          California law. And when someone &mdash; whether it is the insurance company
          or a well-meaning neighbor &mdash; tells you something about how insurance
          works, ask them to cite the statute, regulation, or case law that supports
          their statement. If they cannot, it is probably a myth.
        </p>
      </div>

      {/* ── Quick Reference Table ─────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Quick Reference: Myth vs. Reality
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="p-3 text-left font-semibold w-1/2">The Myth</th>
              <th className="p-3 text-left font-semibold w-1/2">The Law</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;We can&apos;t talk to you after you hire a PA&rdquo;</td>
              <td className="p-3 text-gray-700">No statute or regulation prohibits insurer-insured communication. CA Rules of Prof. Conduct Rule 4.2 applies to attorneys, not adjusters.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;These documents are work product&rdquo;</td>
              <td className="p-3 text-gray-700">CIC &sect; 2071 requires disclosure of claim-related documents within 15 days of request.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;You must use our contractor&rdquo;</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.9(b) &mdash; policyholder may select their own contractor.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;We only owe ACV&rdquo;</td>
              <td className="p-3 text-gray-700">CIC &sect; 2051.5 and the policy&apos;s loss-settlement terms &mdash; replacement cost owed upon completion of repairs.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;Take it or leave it&rdquo;</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(d) &mdash; thorough investigation required. Appraisal available for valuation disputes.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;We need a recorded statement first&rdquo;</td>
              <td className="p-3 text-gray-700">Not a policy condition, but refusing may trigger a formal EUO. Negotiate: written questions, attorney present, or unrecorded interview.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;You missed the deadline&rdquo;</td>
              <td className="p-3 text-gray-700"><em>Prudential-LMI</em> (1990) 51 Cal.3d 674 &mdash; suit limitation tolled while claim is being processed. Notice-prejudice rule applies.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;O&amp;P requires three trades&rdquo;</td>
              <td className="p-3 text-gray-700">Trade count is one factor in complexity analysis, not a bright-line rule. No statute or regulation establishes a &ldquo;three trade rule.&rdquo;</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;That&apos;s wear and tear&rdquo;</td>
              <td className="p-3 text-gray-700">Wear and tear is a cause-of-loss exclusion, not a condition-of-property exclusion. <em>Aydin Corp.</em> (1998) 18 Cal.4th 1183.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;We depreciate labor&rdquo;</td>
              <td className="p-3 text-gray-700"><strong>California:</strong> 10 CCR &sect; 2695.9(f)(1) &mdash; &ldquo;[E]xcept for the intrinsic labor costs that are included in the cost of manufactured materials or goods, the expense of labor necessary to repair, rebuild or replace covered property is not a component of physical depreciation and shall not be subject to depreciation or betterment.&rdquo; The statutory ACV framework is at Cal. Ins. Code &sect; 2051(b). Other states may differ.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;Earth movement exclusion bars your claim&rdquo;</td>
              <td className="p-3 text-gray-700">EPC doctrine: <em>Sabella</em> (1963), <em>Garvey</em> (1989), CIC &sect; 530.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;We don&apos;t pay for code upgrades&rdquo;</td>
              <td className="p-3 text-gray-700">O&amp;L coverage is standard on most HO-3 policies; 10 CCR &sect; 2695.9(d) requires a scope that restores to pre-loss condition per accepted trade standards.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;Filing will raise my premiums&rdquo;</td>
              <td className="p-3 text-gray-700">Prop 103 / CIC &sect; 1861.02 restricts rating factors. CLUE records inquiries too &mdash; damage may already be done.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;My policy covers floods&rdquo;</td>
              <td className="p-3 text-gray-700">Standard HO-3 excludes flood. Requires separate NFIP or private flood policy.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;Insure for market value&rdquo;</td>
              <td className="p-3 text-gray-700">Coverage should match replacement cost, not market value. CIC &sect; 10103.4 requires insurers to provide RC estimates at renewal every other year.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;I have full coverage&rdquo;</td>
              <td className="p-3 text-gray-700">No policy covers everything. HO-3 Coverage C is named-peril only. Sub-limits apply to jewelry, firearms, cash, etc.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;The insurer will figure it out&rdquo;</td>
              <td className="p-3 text-gray-700">Structural incentives favor underpayment. McKinsey-era reforms documented. Self-advocacy is essential.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;I don&apos;t need pre-loss documentation&rdquo;</td>
              <td className="p-3 text-gray-700">CIC &sect; 10103.7(b)(1) provides a 60% floor (cap $350K, 100 days) effective January 1, 2026 per SB 495 (formerly 30% / $250K under AB 3012). Documentation still maximizes recovery; post-loss recall underestimates 40&ndash;60%.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">&ldquo;My policy covers earthquakes&rdquo;</td>
              <td className="p-3 text-gray-700">Standard HO-3 excludes earthquake. Requires separate CEA or private earthquake policy.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">&ldquo;Cashing the check ends my claim&rdquo;</td>
              <td className="p-3 text-gray-700">Cashing a check is not a release. CC &sect; 1526 limits restrictive endorsements. Courts have invalidated &ldquo;full and final&rdquo; check language. Supplementals and appraisal remain available.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Key California Authorities ────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key California Authorities Referenced
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-2">Statutes</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>California Insurance Code &sect; 530 (proximate cause)</li>
            <li>California Insurance Code &sect; 758.5 (anti-steering)</li>
            <li>California Insurance Code &sect; 790.03 (unfair practices)</li>
            <li>California Insurance Code &sect; 2051.5 (no labor depreciation)</li>
            <li>California Insurance Code &sect; 2071 (standard fire policy)</li>
            <li>California Insurance Code &sect; 2060(b)(1) (24/36-month ALE for declared emergencies, per SB 872)</li>
            <li>California Insurance Code &sect; 2061 (4-month ALE advance after total loss in declared emergency, per SB 872)</li>
            <li>California Insurance Code &sect; 10103.4 (RC estimates at renewal)</li>
            <li>California Insurance Code &sect; 10103.7(b)(1) (60% contents advance up to $350,000 per SB 495; formerly 30%/$250,000 per AB 3012)</li>
            <li>California Insurance Code &sect; 15027 (PA contract / insured communication rights)</li>
            <li>California Insurance Code &sect; 1861.02 (Prop 103 rating)</li>
            <li>California Civil Code &sect; 1526 (restrictive endorsements)</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-2">Regulations</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>10 CCR &sect; 2695.7(b) (40-day claim decision; written denial bases)</li>
            <li>10 CCR &sect; 2695.7(d) (thorough, fair, objective investigation)</li>
            <li>10 CCR &sect; 2695.9(b) (contractor selection)</li>
            <li>10 CCR &sect; 2695.9(d) (written scope/estimate standards)</li>
            <li>10 CCR &sect; 2695.9(f)(1) (labor not depreciable)</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:col-span-2">
          <h3 className="font-bold text-[#1F3964] mb-2">Case Law</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li><em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21 (efficient proximate cause)</li>
            <li><em>Garvey v. State Farm</em> (1989) 48 Cal.3d 395 (EPC cannot be overridden by policy language)</li>
            <li><em>Prudential-LMI v. Superior Court</em> (1990) 51 Cal.3d 674 (equitable tolling)</li>
            <li><em>Shell Oil Co. v. Winterthur</em> (1993) 12 Cal.App.4th 715 (notice-prejudice rule)</li>
            <li><em>Aydin Corp. v. First State</em> (1998) 18 Cal.4th 1183 (burden of proof on exclusions)</li>
            <li><em>Cheeks v. California FAIR Plan Assn.</em> (1998) 61 Cal.App.4th 423 (historical ACV=fair-market-value rule; superseded by Ins. Code &sect; 2051(b))</li>
          </ul>
        </div>
      </div>

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/policyholder-rights" className="text-blue-700 underline hover:text-blue-900">
            Know Your Rights as a Policyholder
          </Link>
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            California Fair Claims Settlement Practices Regulations
          </Link>
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Bad Faith Insurance Practices in California
          </Link>
        </li>
        <li>
          <Link href="/resources/carrier-claims-tactics" className="text-blue-700 underline hover:text-blue-900">
            How Insurance Carriers Systematically Underpay Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/policyholder-rights" className="text-blue-700 underline hover:text-blue-900">
            Your Rights as a California Policyholder
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property Insurance Coverage Law Blog (Merlin Law Group)</strong> &mdash; Chip Merlin has documented numerous common insurance myths and unfair claims practices, including accord-and-satisfaction tactics on claim checks. Search the blog by topic.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; Consumer-education resources that debunk common policyholder misconceptions (uphelp.org).
        </li>
      </ul>
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
