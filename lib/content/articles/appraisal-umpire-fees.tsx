import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Who Pays the Appraisal Umpire? Fees, Selection, and Engagement',
  description:
    'Who pays the umpire in a property insurance appraisal, what umpires actually charge, and why naming an umpire early usually costs nothing. A working California appraiser explains the fee mechanics.',
  summary:
    "Under the standard appraisal clause, each party pays its own appraiser and the umpire's compensation is split equally. But here is what most participants miss: umpires generally charge nothing at selection. Fees begin only when the umpire is formally engaged — and in many appraisals, that day never comes.",
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

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>A focused guide to the money side of the insurance appraisal umpire &mdash; who
        pays, when the meter actually starts running, what umpires charge when they are
        engaged, and why the fear of umpire fees is one of the most overblown objections in
        the entire appraisal process. Written by a practicing California appraiser who works
        inside this process every week.</em>
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          THE SHORT ANSWER
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Short Answer: Each Side Pays Its Own Appraiser, and the Umpire Is Split
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The fee allocation in a property insurance appraisal is set by the appraisal clause
        itself. In California, that clause is prescribed by statute. Insurance Code &sect; 2071
        &mdash; the California Standard Form Fire Insurance Policy &mdash; contains a mandatory
        appraisal provision, and its fee sentence reads:
      </p>

      <CalloutBox variant="legal" title="Cal. Ins. Code &sect; 2071 &mdash; Fee Allocation (verbatim)">
        <p className="italic">
          Each appraiser shall be paid by the party selecting him or her and the expenses of
          appraisal and umpire shall be paid by the parties equally.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        In plain terms, under the standard-form clause:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The policyholder pays the policyholder&apos;s appraiser.</strong> Whatever
          arrangement the insured makes with their chosen appraiser &mdash; hourly, flat fee,
          or otherwise &mdash; that cost belongs to the insured alone.
        </li>
        <li>
          <strong>The insurer pays the insurer&apos;s appraiser.</strong> The same rule,
          mirrored on the carrier&apos;s side.
        </li>
        <li>
          <strong>The umpire&apos;s compensation is shared equally.</strong> The statutory
          language puts &ldquo;the expenses of appraisal and umpire&rdquo; on both parties
          in equal shares &mdash; a 50/50 split, regardless of which side demanded appraisal
          and regardless of which side the award ultimately favors.
        </li>
        <li>
          <strong>Other shared appraisal expenses follow the same split.</strong> Costs that
          belong to the process rather than to one party &mdash; a shared meeting facility,
          for example &mdash; fall under the same equal-division language.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        That is the whole rule, and most articles on this subject stop right there. But the
        allocation rule answers only half the question policyholders actually care about. The
        allocation says <em>who</em> pays. It says nothing about <em>when</em> anyone starts
        owing the umpire money &mdash; and that timing question is where nearly everyone
        outside the appraisal profession gets it wrong. For the complete treatment of the
        appraisal process itself &mdash; the statute, the demand, the panel, the award &mdash;
        see the parent guide,{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          Insurance Appraisal in California: The Complete Guide
        </Link>.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          THE CORE INSIGHT — SELECTION IS NOT ENGAGEMENT
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Selection Is Not Engagement: When the Umpire&apos;s Meter Actually Starts
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the point this article is built around, and it comes from working inside
        appraisals rather than reading about them: <strong>selecting an umpire and engaging
        an umpire are two different events, often separated by months &mdash; and sometimes
        the second one never happens at all.</strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The appraisal clause requires the two appraisers to select an umpire at the front end
        of the process, before they appraise the loss. That selection is a naming event. The
        appraisers agree on a person, and that person becomes the panel&apos;s designated
        tiebreaker. In practice, qualified umpires commonly charge nothing for being selected.
        There is no appointment fee, no reservation fee, no charge for having one&apos;s name
        written into the appraisal file. The umpire&apos;s fees begin when the umpire is{' '}
        <strong>formally engaged</strong> &mdash; when the two appraisers have finished their
        own work, actually submit their disputed items, and the umpire begins reviewing the
        dispute under an engagement letter or fee agreement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The statutory sequence explains why. Under &sect; 2071, the appraisers appraise the
        loss first and, &ldquo;failing to agree,&rdquo; submit &ldquo;their differences,
        only&rdquo; to the umpire. The umpire has no role &mdash; and no work to bill for
        &mdash; until there are actual differences to submit. Everything the appraisers
        resolve between themselves never touches the umpire&apos;s desk.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And here is the part that surprises almost everyone outside the profession: in a
        significant share of appraisals, the two appraisers resolve every disputed item
        between themselves, sign the award as the two concurring panel members, and the named
        umpire never bills a dollar. In some of those appraisals, the umpire is never even
        told they were selected. The appraisers exchanged candidate names, agreed on one,
        recorded the selection, worked the file &mdash; and closed it before the umpire&apos;s
        involvement was ever needed. The umpire&apos;s name sat in the file as an insurance
        policy of its own: there if needed, free if not.
      </p>

      <CalloutBox variant="important" title="The Practical Consequence">
        <p>
          Because selection costs nothing, there is no cost-based reason to delay naming an
          umpire. A party that resists umpire selection &ldquo;to save money&rdquo; is not
          saving money &mdash; the umpire is not charging anyone at that stage. Naming the
          umpire early removes one of the most common stall points in the process, keeps the
          statutory sequence moving, and costs neither side anything unless and until disputed
          items are actually submitted. Parties weighing whether to invoke appraisal might
          keep this in mind: the umpire step, standing alone, is not the expense it is often
          assumed to be.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction also reframes a tactic that appears in some appraisals: an
        appraiser who resists every proposed umpire candidate, month after month, on the
        theory that the process cannot move without one. Since selection is free, prolonged
        resistance to naming an umpire rarely has a legitimate cost justification. When
        umpire selection becomes a stalling exercise, the statute supplies the exit &mdash;
        court selection, discussed below. For the broader pattern of appraisal-process
        delay tactics, see{' '}
        <Link href="/resources/appraisal-trap-tactics" className="text-[#2E74B5] underline">
          The Carrier Appraisal Trap and How It Works
        </Link>.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          WHAT UMPIRES CHARGE
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Umpires Actually Charge When They Are Engaged
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When disputed items are submitted and the umpire is engaged, the umpire&apos;s
        compensation typically follows a familiar professional-services structure rather than
        any fixed schedule. There is no statutory rate, no fee cap in the standard clause, and
        no industry-wide price list. What the market actually produces looks like this:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>An engagement letter or fee agreement.</strong> A professional umpire
          reduces the engagement to writing before beginning work: the hourly rate, what
          activities are billable (document review, inspections, hearings, travel, award
          drafting), how the two parties will each be invoiced for their equal shares, and
          payment terms. Both parties&apos; appraisers ordinarily receive and approve this
          agreement before the umpire starts.
        </li>
        <li>
          <strong>Hourly billing at professional rates.</strong> Most umpires bill by the
          hour. Rates vary widely by umpire and by market &mdash; a retired judge, a
          practicing or retired attorney, a veteran appraiser, an engineer, and a
          construction professional will each command different rates, and the same umpire
          may command different rates in different regions. Anyone who quotes a single
          &ldquo;going rate&rdquo; for umpires is guessing.
        </li>
        <li>
          <strong>Sometimes a retainer.</strong> Some umpires require an advance deposit
          from each side before beginning work, applied against hourly billings. Others
          simply invoice as the work progresses.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The single biggest driver of the umpire&apos;s total bill is not the rate. It is the
        volume of work the appraisers hand over. An umpire who receives three cleanly framed
        disputed items &mdash; each with both appraisers&apos; positions, quantities, and
        supporting documentation &mdash; can resolve them in a fraction of the time required
        for an umpire who receives two complete competing estimates with a note that says
        &ldquo;we disagree about everything.&rdquo; Costs scale with what is submitted. A
        well-run appraisal narrows the dispute before it ever reaches the umpire, and the
        umpire&apos;s invoice reflects that discipline &mdash; or the lack of it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is also why the choice of party appraiser has a hidden cost dimension. An
        appraiser who works the file &mdash; who meets with the opposing appraiser, agrees
        what can be agreed, and documents it &mdash; is directly shrinking the half of the
        umpire&apos;s bill their client will eventually pay. An appraiser who treats the
        umpire as the first stop rather than the last resort is doing the opposite.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          SELECTION MECHANICS
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Umpire Is Selected Under &sect; 2071
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The selection mechanics come straight from the statutory clause. Under &sect; 2071,
        once appraisal has been demanded and the request accepted, the two appraisers
        &ldquo;shall first select a competent and disinterested umpire.&rdquo; The selection
        duty belongs to the appraisers, not to the parties &mdash; the insured and the
        insurer do not negotiate the umpire directly. And if the appraisers fail for 15 days
        to agree upon the umpire, then, on the request of either the insured or the insurer,
        the umpire &ldquo;shall be selected by a judge of a court of record in the state in
        which the property covered is located.&rdquo; In California practice, that means a
        petition to the superior court, typically in the county where the property sits.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two practical observations about how selection actually works between competent
        appraisers:
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Candidate lists are the standard mechanism.</strong> The common convention is
        an exchange of candidate lists &mdash; each appraiser proposes several names,
        typically with a brief background for each, and the appraisers look for a name both
        sides can accept. Experienced appraisers match the candidate&apos;s background to the
        dispute: a construction-heavy scope dispute points toward an umpire who reads
        estimates fluently; a dispute that is mostly about pricing or methodology may point
        elsewhere. The parent guide&apos;s discussion of umpire selection covers the
        strategic side of this in depth; the point here is narrower &mdash; exchanging lists
        and agreeing on a name costs nothing, so there is no fee-based reason to let this
        step drag.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Disclosure of prior relationships is part of a clean selection.</strong> The
        statutory standard for the umpire is &ldquo;competent and disinterested.&rdquo; In a
        well-run selection, candidates disclose prior work for either party, either
        appraiser, or their firms before accepting the role, and California&apos;s treatment
        of appraisal under the arbitration code&apos;s procedural rules adds formal
        disclosure obligations for the umpire once the process is underway &mdash; a subject
        covered in the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          parent appraisal guide
        </Link>. From a pure fee standpoint, disclosure matters for a second reason: an award
        signed by an umpire with an undisclosed conflict is an award at risk, and an award at
        risk can mean paying for parts of the process twice. The cheapest umpire engagement
        is the one that only has to happen once.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Court selection deserves one demystifying note. Petitioning a judge to select the
        umpire sounds expensive, and parties sometimes accept a questionable umpire candidate
        just to avoid it. But the petition is a limited proceeding with a narrow purpose, and
        the cost of a genuinely neutral umpire selected by a judge is often modest compared
        to the cost of an umpire who tilts the award. Where the two appraisers genuinely
        cannot agree on a neutral, the statute&apos;s court-selection route exists precisely
        for that situation, and using it is not an escalation &mdash; it is the clause
        working as written.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          COST CONTROL
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Keeping Umpire Costs Down: What Actually Works
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because the umpire bills for work performed, controlling umpire cost is mostly a
        matter of controlling how much work reaches the umpire. Three practices do most of
        the heavy lifting.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Confine the Umpire to Submitted Differences
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The statutory clause already points this direction: the appraisers, failing to agree,
        submit &ldquo;their differences, only&rdquo; to the umpire. A disciplined panel puts
        that into practice by defining, in writing, exactly which items are being submitted
        and what each appraiser&apos;s position is on each item. The umpire then decides
        those items &mdash; not the whole loss from scratch. This keeps the engagement
        focused, keeps the billable hours proportional to the actual disagreement, and keeps
        the umpire from re-opening items the appraisers already resolved. Whether a given
        disagreement is truly an amount dispute suitable for the panel &mdash; or something
        else wearing an amount dispute&apos;s clothing &mdash; is its own subject; see{' '}
        <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
          Scope vs. Price Disputes
        </Link>{' '}
        for that analysis.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Document Agreed Items So They Never Generate Umpire Time
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every item the two appraisers agree on should be recorded as agreed &mdash; item,
        quantity, and amount &mdash; before anything goes to the umpire. This is partly
        about award accuracy, but it is also directly about money: an agreed item that is
        documented is an item the umpire never reviews, never inspects, and never bills
        for. Appraisers who keep a running agreed-items schedule as they work routinely
        deliver the umpire a short dispute list instead of a full file. The difference shows
        up on both parties&apos; invoices.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Remember That the Award Needs Only Two Signatures
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard clause, an itemized award in writing &ldquo;of any two&rdquo;
        panel members determines the amount. The two appraisers alone can make a complete,
        binding award without the umpire signing anything &mdash; which is exactly how the
        no-bill umpire scenario described above comes to pass. Even after the umpire is
        engaged, the appraisers remain free to keep negotiating; every item they resolve
        while the umpire works is an item removed from the umpire&apos;s task. The
        two-signature rule is the structural reason umpire fees are, in practice, a
        contingent cost rather than a fixed one.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          WHO ULTIMATELY BEARS IT
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Ultimately Bears the Cost &mdash; Win or Lose
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One feature of the standard-form allocation catches people off guard: the 50/50
        split on umpire compensation and appraisal expenses applies <strong>regardless of
        outcome</strong>. There is no loser-pays mechanism in the standard clause. A
        policyholder whose position the award vindicates entirely still pays half the
        umpire&apos;s bill; an insurer whose figure the award adopts still pays the other
        half. The clause allocates the process cost as a shared expense of resolving the
        dispute, not as a penalty for being wrong.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders, this cuts both ways. It means appraisal carries a real,
        non-recoverable cost even when it succeeds &mdash; the party appraiser&apos;s fee
        plus half the umpire&apos;s. It also means the exposure is bounded and shared: the
        insurer is funding the same umpire at the same rate, which gives both sides a common
        interest in an efficient engagement. Whether that cost is worth incurring on a
        particular claim is a judgment call that depends on the size of the gap and the
        alternatives &mdash; the framework for that decision is laid out in{' '}
        <Link
          href="/resources/appraisal-mediation-litigation-decision"
          className="text-[#2E74B5] underline"
        >
          Appraisal, Mediation, or Litigation: How to Choose
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Read the Clause &mdash; Policies Can Vary">
        <p>
          The allocation described in this article is the standard-form rule, anchored in
          the &sect; 2071 language. Not every policy tracks the standard form. Some
          non-standard appraisal clauses use different wording on expenses; some policies
          issued outside the fire-policy framework, and some policies in other states, may
          allocate umpire costs differently. Before relying on any allocation rule, the
          actual appraisal clause in the actual policy should be read &mdash; and where the
          policy language appears to conflict with what California law requires, that is a
          question for a licensed attorney.
        </p>
      </CalloutBox>

      {/* ══════════════════════════════════════════════════════════════════
          FAQ
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Who pays the appraisal umpire&apos;s fee?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard-form appraisal clause &mdash; in California, the clause prescribed
        by Insurance Code &sect; 2071 &mdash; the umpire&apos;s compensation and the other
        expenses of the appraisal are paid by the parties equally: half by the policyholder,
        half by the insurer. Each side separately pays its own chosen appraiser in full.
        Non-standard policy forms can allocate these costs differently, so the specific
        clause always deserves a read.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How much does an insurance appraisal umpire cost?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is no standard rate. Engaged umpires generally bill hourly under a written
        engagement agreement, sometimes with a retainer, and rates vary widely with the
        umpire&apos;s background &mdash; retired judges, attorneys, and veteran appraisers
        command different rates &mdash; and with the local market. The total cost depends
        far more on how many disputed items the appraisers submit than on the rate itself.
        And if the two appraisers resolve everything, the umpire may cost nothing at all.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does selecting an umpire cost anything?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Commonly, no. Qualified umpires generally charge nothing to be named. Fees begin at
        formal engagement &mdash; when disputed items are actually submitted and the umpire
        begins work under a fee agreement. This is why there is rarely a cost-based reason
        to delay umpire selection: naming the umpire early keeps the process moving and
        costs nothing unless the umpire is eventually needed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is the umpire fee split even if one side wins?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard clause, yes. The equal split applies regardless of which side
        demanded appraisal and regardless of what the award says. There is no
        prevailing-party fee shift built into the standard-form appraisal provision. Whether
        any other basis for recovering appraisal costs exists on a particular claim is a
        legal question for an attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What happens if the appraisers cannot agree on an umpire?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The &sect; 2071 clause answers this directly: if the appraisers fail for 15 days to
        agree upon the umpire, then on the request of either the insured or the insurer, the
        umpire is selected by a judge of a court of record in the state where the property
        is located. In California practice this is a petition to the superior court. A
        court-selected umpire is often a good outcome for the policyholder, since the court
        has no stake in either side&apos;s preferred candidates.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          CLOSING
          ══════════════════════════════════════════════════════════════════ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The umpire fee question has a two-part answer, and both parts favor demystification.
        The allocation is simple: own appraiser, own cost; umpire and shared expenses, split
        equally, win or lose. The timing is the part almost nobody outside the process
        understands: the umpire costs nothing at selection, bills only when formally engaged,
        and in many appraisals never bills at all because the two appraisers finish the job
        themselves. A policyholder weighing appraisal should price the process on how it
        actually works &mdash; not on the assumption that a third professional starts
        charging the moment their name is written down.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For the full appraisal framework &mdash; the statutory clause, the demand, appraiser
        selection, the hearing, the award, and the deadlines that follow &mdash; see{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          Insurance Appraisal in California: The Complete Guide
        </Link>.
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
