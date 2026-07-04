import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "California Fair Claims Regulations (10 CCR 2695)",
  description:
    "A section-by-section analysis of California's Fair Claims Settlement Regulations - every rule your insurer must follow, with case law and real examples.",
  summary:
    'California\'s Fair Claims Settlement Practices Regulations (10 CCR 2695) set out, rule by rule, exactly how an insurer must handle your property claim, from communication deadlines to investigation duties. Each regulation is a standard you can hold the carrier to.',
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
        Title 10, California Code of Regulations, Sections 2695.1 through 2695.14 — commonly
        called the <strong>Fair Claims Settlement Practices Regulations</strong> — are the
        detailed rules that govern how every insurance company in California must handle your
        claim. They were promulgated by the Insurance Commissioner under the authority of
        Insurance Code Section 790.10 and carry the <strong>force and effect of law</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an important distinction. These are not guidelines or suggestions. They are
        binding administrative regulations adopted through California&apos;s formal rulemaking
        process under the Administrative Procedure Act (Government Code &sect; 11340 et seq.).
        Courts treat them with the same authority as statutes. An insurer that violates these
        regulations is violating California law — and those violations can form the basis of a{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] hover:underline">CDI complaint</Link>,
        evidence of{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>,
        or both.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulations work hand-in-hand with Insurance Code Section 790.03(h), which lists
        prohibited unfair claims settlement practices. Where Section 790 says what insurers{' '}
        <em>cannot</em> do in broad terms, 10 CCR 2695 fills in the operational details —
        specific deadlines, documentation requirements, disclosure obligations, and settlement
        standards. Think of Section 790 as the &ldquo;thou shalt not&rdquo; list and 10 CCR
        2695 as the operating manual that tells the insurer exactly how to comply. For the
        full Section 790 analysis alongside these regulations, see our{' '}
        <Link href="/regulations" className="text-[#2E74B5] hover:underline">California Insurance Regulations reference page</Link>.
      </p>

      <CalloutBox variant="important" title="Scope of This Analysis">
        <p>
          The Fair Claims Regulations contain sections that apply to automobile claims (2695.8),
          surety bonds (2695.10), and life and disability insurance (2695.11). This analysis
          covers only the sections that apply to <strong>residential and commercial property
          insurance claims</strong> — the regulations most relevant to homeowners, landlords,
          and business owners dealing with fire, water, wind, and other property losses in
          California.
        </p>
      </CalloutBox>

      <CalloutBox variant="important" title="Understanding Scope: Regulatory Citations vs. Legal Strategy">
        <p>
          This article explains how California&rsquo;s Fair Claims regulations work and how to
          cite them in written communications with your insurer. Citing specific regulatory
          provisions and holding your insurer accountable to procedural requirements is within
          the scope of what a licensed Public Adjuster can assist with. However, legal arguments,
          litigation strategy, and bad faith claims require the guidance of a licensed attorney
          experienced in insurance coverage disputes. If you need help with the claims-handling
          and documentation side of your claim, or a referral to a qualified attorney for legal
          strategy,{' '}
          <Link href="/contact" className="text-[#2E74B5] hover:underline">
            contact us
          </Link>.
        </p>
      </CalloutBox>

      {/* ───────── REGULATORY VIOLATIONS AND BAD FAITH ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Regulatory Violations and Bad Faith: Understanding the Relationship
      </h2>

      <CalloutBox variant="important" title="Two Key Principles Most Policyholders Get Wrong">
        <p className="mb-2">
          <strong>1. Regulatory or statutory violations do not automatically equal bad faith.</strong>
          An insurance company could violate numerous regulations on a claim that is ultimately{' '}
          <em>not covered</em> by the policy at all — and if there is no coverage, there is generally
          no bad faith, regardless of how many procedural rules were broken. Bad faith is about
          unreasonable conduct in handling a claim the insurer owed in the first place.
        </p>
        <p className="mb-2">
          <strong>2. Bad faith can exist even without any regulatory or statutory violation.</strong>
          An insurer can follow every procedural rule, hit every deadline, send every required letter
          — and still act in bad faith by, for example, offering an unreasonably low settlement with
          no rational basis on a clearly covered claim.
        </p>
        <p className="mb-2">
          The two are <strong>often</strong> related, but not inseparable. Insurance companies that
          fail to investigate, fail to respond timely, fail to pay undisputed amounts, or fail to
          turn over claim-related documents are typically engaged in behaviors that are part and
          parcel of bad faith conduct itself — the regulatory violations and the bad faith become
          intertwined and difficult to separate cleanly.
        </p>
        <p className="mb-2">
          One more critical point: <strong>insureds do not have a private right of action to sue
          for a regulatory violation alone.</strong> The California Department of Insurance can
          investigate and fine a carrier for violating a regulation, but a policyholder cannot
          collect money from the carrier based purely on a regulatory violation. The violation is
          evidence that supports a bad faith or breach of contract claim — it is not itself a money
          claim the insured can bring. See{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            our bad faith guide
          </Link>{' '}
          for a deeper discussion.
        </p>
        <p className="text-sm italic">
          This is a general explanation, not legal advice. The interplay between regulation, statute,
          coverage, and bad faith is fact-specific — consult an attorney about your situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important things to understand about these regulations is their
        relationship to{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>.
        A regulatory violation is <strong>not automatically bad faith</strong> — but it can be
        powerful evidence of it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Moradi-Shalal v. Fireman&apos;s Fund Insurance Companies</em> (1988) 46
        Cal.3d 287, the California Supreme Court held that there is no private right of action
        directly under Insurance Code Section 790.03. You cannot sue your insurer solely for
        violating the statute or its implementing regulations. Instead, violations of the Fair
        Claims regulations serve as <strong>evidence</strong> in a claim for breach of the
        implied covenant of good faith and fair dealing — the legal theory behind every
        insurance bad faith case in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Rattan v. United Services Automobile Assn.</em> (2000) 84 Cal.App.4th 715, 724,
        the Court of Appeal held that the Fair Claims regulations &ldquo;may be used by a jury
        to infer a lack of reasonableness&rdquo; on the insurer&apos;s part &mdash; though
        violation of the regulations is not automatically a breach of contract or per se bad
        faith. The regulations define the standard of conduct insurers are expected to meet,
        and failure to meet that standard, even where it does not automatically equal bad faith,
        is the kind of evidence that supports an inference of unreasonableness.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the <em>Wilson v. 21st Century Ins. Co.</em> (2007) 42 Cal.4th 713
        &ldquo;genuine dispute&rdquo; doctrine provides insurers with some protection.{' '}
        <em>Wilson</em> held that an insurer is not liable in bad faith when it denies or
        delays benefits due to a genuine dispute as to coverage or the amount payable. But this
        protection has limits. In <em>Chateau Chamberay Homeowners Assn. v. Associated
        International Insurance Co.</em> (2001) 90 Cal.App.4th 335, the court held that the
        genuine dispute doctrine does not relieve an insurer from its obligation to thoroughly
        and fairly investigate a claim, and that an insurer is not entitled to the
        doctrine&apos;s protection where the adequacy of its investigation is in dispute. Many
        plaintiff attorneys argue, based on <em>Chateau Chamberay</em>, that an insurer cannot
        conduct a sloppy or biased investigation, arrive at a low number, and then invoke the
        genuine-dispute doctrine to defend it. Whether the doctrine applies in a specific case
        is a legal question for an attorney.
      </p>

      <CalloutBox variant="legal" title="Why Documenting Violations Matters — Even If You Never Sue">
        <p className="mb-2">
          Even if a regulatory violation does not rise to the level of bad faith on its own,
          documenting every violation preserves your rights and strengthens your position in
          several ways:
        </p>
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>
            <strong>CDI complaints.</strong> The California Department of Insurance investigates
            complaints based on these specific regulations. A complaint citing regulation numbers,
            dates, and facts is far more effective than a general grievance.
          </li>
          <li>
            <strong>Pattern evidence.</strong> A single missed deadline may be excusable. A pattern
            of missed deadlines, ignored communications, and undisclosed coverages paints a very
            different picture — one that looks like systemic bad faith, not an honest mistake.
          </li>
          <li>
            <strong>Litigation leverage.</strong> If your claim eventually ends up in litigation or
            appraisal, a documented history of regulatory violations gives your attorney or public
            adjuster significant leverage in settlement negotiations.
          </li>
          <li>
            <strong>Punitive damages.</strong> In <em>Egan v. Mutual of Omaha</em> (1979) 24
            Cal.3d 809, the California Supreme Court held that an insurer&apos;s bad-faith
            denial of benefits may support tort damages and, where oppression, fraud, or malice
            is shown, punitive damages. Many plaintiff attorneys treat a documented record of
            multiple regulatory violations as supportive evidence in any punitive-damages
            analysis. Whether punitive damages are available in a specific case is a
            determination for the courts and attorneys involved.
          </li>
        </ul>
      </CalloutBox>

      {/* ───────── WRITTEN DEMANDS PRINCIPLE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        If You Do not Ask, You Do not Benefit: The Written Demand Principle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many of the regulations below are only triggered when the insured takes a specific
        action — typically making a <strong>written request or demand</strong>. The insurer may
        be in technical compliance simply because no one asked them to do something they are
        required to do upon request. But the moment you make that request in writing, the clock
        starts, and any failure to comply becomes a documented regulatory violation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most important practical lessons in claims handling:{' '}
        <strong>the insured who puts things in writing creates leverage; the insured who only
        makes phone calls does not.</strong> Consider these examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          If you never request the name of a contractor who can do the repairs for the
          insurer&apos;s estimate, the insurer has no obligation to provide one. But if you
          make that request in writing citing &sect; 2695.9(d)(2), and they fail to respond
          within 15 days, you now have a documented violation of both &sect; 2695.9(d)(2){' '}
          <em>and</em> &sect; 2695.5(b) (the 15-day response requirement).
        </li>
        <li>
          If an insured never asks the insurer for claim-related documents, the insurer is not
          required to send them proactively. The Fair Claims regulations give insureds defined
          rights to specific claim-related materials — for example, &sect; 2695.9(d) requires the
          insurer to supply a copy of any written scope or estimate the settlement is based on,
          &sect; 2695.7(b)(1) requires written denials to state the factual and legal bases, and
          &sect; 2695.4(a) requires affirmative disclosure of coverages. Once a written request
          for documents within these provisions is made, &sect; 2695.5(b) gives the insurer 15
          calendar days to respond. Failure to respond within that window may be documented as
          a violation of &sect; 2695.5(b).
        </li>
        <li>
          If an insured never challenges the insurer&apos;s estimate, the insurer has no
          operational reason to change its number. But once a written demand is made under{' '}
          &sect; 2695.9(d)(2) for the name of a contractor who will do the work for the
          insurer&apos;s estimated amount, the regulation requires the insurer to respond. If
          the insurer cannot name a contractor at that amount, many plaintiff attorneys argue
          the estimate may not meet the trade-standards and local-market requirements in{' '}
          &sect; 2695.9(d). In practice, this kind of written demand often prompts the carrier
          to re-evaluate the estimate or schedule a reinspection — which is usually where
          additional payment shows up.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The principle works like this: a written demand either produces a meaningful response
        from the carrier — sometimes a concession, sometimes a reinspection, sometimes an
        adjustment to the estimate — or, if the insurer fails to comply, it creates a
        documented record that may support a CDI complaint or any future bad-faith analysis an
        attorney conducts. <strong>Either way, the demand serves the insured&apos;s
        interest.</strong> A request that is never made in writing produces neither result.
      </p>

      <CalloutBox variant="tip" title="Every Written Demand Should Cite the Regulation">
        <p>
          When you make a request, cite the specific regulation number. &ldquo;Per 10 CCR
          &sect; 2695.9(d)(2), I am requesting the name of a contractor who will perform the
          repairs for the amount of your estimate&rdquo; is far more effective than
          &ldquo;please send me a contractor name.&rdquo; The regulation citation signals
          that you know the rules, you are creating a paper trail, and any failure to
          respond will be documented as a specific regulatory violation.
        </p>
      </CalloutBox>

      {/* ───────── 2695.1 PREAMBLE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Section 2695.1 — Preamble and Scope
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text (Summary):</p>
        <p className="mb-2">
          Section 790.03(h) of the California Insurance Code enumerates sixteen claims
          settlement practices that, when either knowingly committed on a single occasion, or
          performed with such frequency as to indicate a general business practice, are
          considered to be unfair claims settlement practices. The Insurance Commissioner has
          promulgated these regulations to: (1) delineate minimum standards for claim
          settlement; (2) promote good faith, prompt, efficient and equitable settlement of
          claims; (3) discourage fraudulent claims; and (4) encourage prompt investigation and
          reporting of suspected fraud.
        </p>
        <p className="mb-2">
          These regulations are not the exclusive definition of unfair claims settlement
          practices. Other acts not specifically listed may also violate Insurance Code
          &sect; 790.03(h). The regulations apply to all claims except: workers&apos;
          compensation, medical malpractice liability, bona fide ERISA plans not covered by
          insurance, and other lawful self-funded plans.
        </p>
        <p>
          Policy provisions relating to claims shall be consistent with or more favorable to the
          insured than these regulations. The use of third-party data or tools to value claims
          does not absolve the insurer of its obligation to comply.
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        The Preamble establishes several critical principles. First, a <strong>single knowing
        violation</strong> is enough — the insurer does not have to engage in a &ldquo;pattern
        or practice&rdquo; for a single act to constitute an unfair claims practice. Second,
        the regulations set <em>minimum</em> standards — any policy language that is less
        favorable to the insured than the regulations is unenforceable to that extent. Third,
        the insurer cannot hide behind third-party tools — if the tool produces an unfair
        result, the insurer is still responsible.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Real-World Examples</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>The Xactimate defense.</strong> An insurer pays a claim based on an
          Xactimate estimate that uses incorrect local pricing, omits line items, or applies
          depreciation to labor. When challenged, the adjuster says &ldquo;that is what
          Xactimate says.&rdquo; Section 2695.1(g) provides:
          <blockquote className="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">
            The fact that information, data or statistical methods used or relied upon by a
            licensee to process or establish the value of insurance claims is obtained through
            a third party source shall not absolve the licensee of its legal responsibility to
            comply with these regulations or to effectuate prompt, fair and equitable settlements
            of claims.
          </blockquote>
          <p className="mt-2">
            <strong>In plain language:</strong> the insurer cannot deflect responsibility for
            an inaccurate claim valuation by pointing at Xactimate, a third-party vendor, or
            any software tool. The duty stays with the insurer regardless of which tool
            produced the number.
          </p>
        </li>
        <li>
          <strong>Policy language less favorable than the regulations.</strong> Your policy says
          the insurer has 60 days to acknowledge your claim. The regulation says 15 days. The
          regulation controls — the insurer must meet the 15-day standard regardless of what
          the policy says.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How to Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        When the insurer cites Xactimate, a third-party valuation service, or any external
        tool to justify a low estimate, respond in writing: &ldquo;Per 10 CCR &sect; 2695.1(g),
        the use of a third-party source does not absolve you of your obligation to effectuate a
        prompt, fair and equitable settlement. Your estimate does not reflect actual local
        repair costs for the following reasons&hellip;&rdquo; Then list the specific
        deficiencies. This shifts the burden back to the insurer to justify their number on the
        merits, not by pointing at a software program.
      </p>

      {/* ───────── 2695.2 DEFINITIONS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section 2695.2 — Definitions
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Key Definitions (Selected):</p>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong>&ldquo;Calendar days&rdquo;</strong> — each and every day including
            weekends and holidays, but if the last day falls on a weekend or holiday, the
            deadline extends to the next business day.
          </li>
          <li>
            <strong>&ldquo;Claimant&rdquo;</strong> — includes the insured, an attorney, a{' '}
            <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>,
            or any family member properly designated in writing.
          </li>
          <li>
            <strong>&ldquo;Insurer&rdquo;</strong> — broadly defined to include admitted and
            non-admitted carriers, the California FAIR Plan, the California Earthquake
            Authority, home protection companies, and any entity subject to Insurance Code
            &sect; 790.03(h). Does <em>not</em> include agents and brokers.
          </li>
          <li>
            <strong>&ldquo;Knowingly committed&rdquo;</strong> — includes actual, implied, or
            constructive knowledge. Knowledge the insurer had <em>or should have had</em>.
          </li>
          <li>
            <strong>&ldquo;Proof of claim&rdquo;</strong> — any evidence or documentation,
            whether submitted by the claimant <em>or obtained by the insurer during its own
            investigation</em>, that provides evidence of the claim and reasonably supports the
            amount of the loss.
          </li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        The definitions section contains several terms with major practical significance.
        The definition of <strong>&ldquo;proof of claim&rdquo;</strong> is critical: it
        includes evidence the insurer already has from its own investigation. This means the
        40-day clock to accept or deny your claim (in &sect; 2695.7) can start ticking based on
        the insurer&apos;s own adjuster&apos;s report — the insurer cannot stall by claiming
        it is &ldquo;waiting for proof of claim&rdquo; when its own files contain the evidence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        The definition of <strong>&ldquo;knowingly committed&rdquo;</strong> includes
        constructive knowledge — meaning the insurer cannot claim ignorance of facts it should
        have known through reasonable investigation. This ties directly to{' '}
        <em>Chateau Chamberay</em> — an insurer that conducts a sloppy investigation and then
        claims it did not know the extent of the damage is charged with the knowledge a
        proper investigation would have revealed.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Real-World Examples</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>The &ldquo;we are waiting for your proof of loss&rdquo; stall.</strong>{' '}
          The insurer&apos;s own adjuster has inspected the property, taken photos, and written
          an estimate. Yet the insurer tells you they cannot make a decision because they
          have not received your sworn proof of loss. Under the definition of &ldquo;proof
          of claim,&rdquo; the insurer&apos;s own investigation data is proof of claim. The
          40-day clock may already be running.
        </li>
        <li>
          <strong>Refusing to communicate with your PA.</strong> You designate a Public Adjuster
          in writing. The insurer&apos;s adjuster continues contacting you directly, ignoring
          your PA&apos;s calls and emails. Under the definition of &ldquo;claimant,&rdquo; your
          properly designated PA has the same communication rights as you do. The insurer&apos;s
          refusal to communicate with your representative is a violation.
        </li>
        <li>
          <strong>The adjuster who does not look.</strong> The adjuster inspects only the
          first floor but never enters the attic, crawlspace, or detached garage — all of which
          have damage. The adjuster denies those portions of the claim. Under the definition of
          &ldquo;knowingly committed&rdquo; (which includes constructive knowledge), the insurer
          is charged with the knowledge a thorough investigation would have produced.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How to Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        If the insurer is stalling by demanding additional documentation when it already has
        enough information to make a decision, write: &ldquo;Per the definition of
        &lsquo;proof of claim&rsquo; in 10 CCR &sect; 2695.2(s), proof of claim includes
        evidence obtained by the insurer during its own investigation. Your adjuster inspected
        my property on [date] and prepared an estimate. The 40-day deadline under
        &sect; 2695.7(b) commenced no later than that date.&rdquo;
      </p>

      {/* ───────── 2695.3 FILE AND RECORD DOCUMENTATION ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section 2695.3 — File and Record Documentation
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text (Summary):</p>
        <p className="mb-2">
          Every licensee&apos;s claim files shall be subject to examination by the Commissioner.
          Files shall contain <strong>all documents, notes and work papers (including copies of
          all correspondence)</strong> in such detail that pertinent events and dates can be
          reconstructed and the licensee&apos;s actions can be determined. Insurers shall
          maintain claim data for all open and closed files for the current year and four
          preceding years. The date every material document was received, processed, and
          transmitted must be recorded.
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        The insurer must maintain a complete, detailed paper trail — every phone call note,
        every email, every internal memo, every estimate version, every supervisor instruction.
        The <strong>five-year retention requirement</strong> means these records are available
        for CDI investigations and litigation long after the claim is closed.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Real-World Example</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You request your claim file and discover internal notes showing the adjuster
        recommended paying $180,000, but a supervisor instructed the adjuster to reduce the
        estimate to $120,000 with no documented justification. These internal records —
        which the insurer is required to maintain — become powerful evidence in a bad faith
        case. In <em>Gruenberg v. Aetna Insurance Co.</em> (1973) 9 Cal.3d 566, the
        California Supreme Court established that the insurer owes a duty of good faith and
        fair dealing. Internal records showing a supervisor overriding a field adjuster&apos;s
        recommendation without justification is exactly the kind of evidence that demonstrates
        breach of that duty.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How to Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Request your complete claim file in writing.</strong> Cite &sect; 2695.3 and
        request all documents, notes, work papers, correspondence, internal emails, adjuster
        reports, supervisor notes, estimates (all versions), and photographs. The insurer must
        respond within 15 days under &sect; 2695.5(b). If they produce an incomplete file —
        missing internal notes or supervisor communications — that itself may be a violation.
        The claim file is the single most valuable discovery tool available to a policyholder
        short of litigation.
      </p>

      {/* ───────── 2695.4 REPRESENTATION OF POLICY PROVISIONS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section 2695.4 — Representation of Policy Provisions and Benefits
      </h2>

      <CalloutBox variant="legal" title="10 CCR §2695.4 — Verbatim Text (Selected Subsections)">
        <p className="font-semibold mt-2 mb-1">(a)</p>
        <p className="italic">
          Every insurer shall disclose to a first party claimant or beneficiary, all benefits,
          coverage, time limits or other provisions of any insurance policy issued by that
          insurer that may apply to the claim presented by the claimant. When additional
          benefits might reasonably be payable under an insured&apos;s policy upon receipt of
          additional proofs of claim, the insurer shall immediately communicate this fact to
          the insured and cooperate with and assist the insured in determining the extent of
          the insurer&apos;s additional liability.
        </p>
        <p className="font-semibold mt-3 mb-1">(d)</p>
        <p className="italic">
          Except where a time limit is specified in the policy, no insurer shall require a
          first party claimant under a policy to give notification of a claim or proof of
          claim within a specified time.
        </p>
        <p className="font-semibold mt-3 mb-1">(e)</p>
        <p className="italic">
          No insurer shall: (1) request that a claimant sign a release that extends beyond the
          subject matter which gave rise to the claim payment unless, prior to execution of the
          release, the legal effect of the release is disclosed and fully explained by the
          insurer to the claimant in writing. For purposes of this subsection, an insurer shall
          not be required to provide the above explanation or disclosure to a claimant who is
          represented by an attorney at the time the release is presented for signature; (2) be
          precluded from including in any release a provision requiring the claimant to waive
          the provisions of California Civil Code Section 1542 provided that, prior to
          execution of the release, the legal effect of the release is disclosed and fully
          explained by the insurer to the claimant in writing.
        </p>
        <p className="font-semibold mt-3 mb-1">(f)</p>
        <p className="italic">
          No insurer shall issue checks or drafts in partial settlement of a loss or claim that
          contain or are accompanied by language releasing the insurer, the insured, or the
          principal on a surety bond from total liability unless the policy or bond limit has
          been paid, or there has been a compromise settlement agreed to by the claimant and
          the insurer as to coverage and amount payable under the insurance policy or bond.
        </p>
      </CalloutBox>

      <CalloutBox variant="info" title="In plain language">
        <p className="mb-2">
          <strong>(a) Affirmative disclosure.</strong> The duty to identify coverages that may
          apply rests on the insurer, not on the insured to ask. Many policyholders never learn
          about coverages such as ordinance or law, debris removal beyond the dwelling, extended
          replacement cost, or separate Other Structures limits because the insurer never discloses
          them. The regulation puts that disclosure obligation on the carrier.
        </p>
        <p className="mb-2">
          <strong>(d) Time limits.</strong> The insurer cannot manufacture its own deadlines on
          the insured. Whatever the policy says about notice or proof of claim controls; the
          carrier cannot impose shorter or additional deadlines through claims correspondence.
        </p>
        <p className="mb-2">
          <strong>(e) Releases.</strong> If the carrier wants the insured to sign a release that
          reaches beyond the specific item being paid (or includes a Civil Code §1542 waiver of
          unknown claims), it must explain in writing what the insured is giving up first —
          unless the insured is represented by counsel. Many policyholders sign these documents
          without realizing the scope. The interpretation of any specific release is a legal
          question for an attorney.
        </p>
        <p>
          <strong>(f) Release language on partial-payment checks.</strong> An insurer cannot
          print &ldquo;full and final settlement&rdquo; or similar release language on a
          partial-payment check unless the policy limit is fully paid or both sides have actually
          agreed to compromise the rest of the claim. Many policyholders worry that endorsing
          such a check waives the rest of their claim; many plaintiff attorneys take the
          position that, under this regulation, the release language is not enforceable in the
          partial-payment context absent the listed conditions. For any release an insured is
          being asked to sign, consult an attorney.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Subsection (a) is one of the most important and most frequently violated
        regulations in the entire code.</strong> The insurer must affirmatively identify every
        coverage that <em>may</em> apply to the claim. The duty rests with the insurer; an
        insured does not have to ask for the carrier to be in compliance. As a practical
        matter, though, a written request from the insured creates a clear record of what was
        asked and what the insurer disclosed — which is often what makes any later
        non-disclosure provable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Subsection (f) prohibits &ldquo;full and final settlement&rdquo; language on partial
        payment checks. If the insurer sends a partial payment with release language, that
        language is unenforceable unless you have expressly agreed to a compromise or the
        policy limit has been exhausted.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Real-World Examples</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Failure to disclose coverages.</strong> After a total loss fire, the insurer
          processes your dwelling claim but never mentions{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">ordinance or law coverage</Link>,{' '}
          <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">debris removal coverage</Link>{' '}
          beyond the basic dwelling limit, extended replacement cost, or the separate
          Other Structures limit. Months later you discover these coverages existed.
          The insurer violated &sect; 2695.4(a) from day one. In a bad faith context, failing to
          tell you about coverages you are paying for is precisely the kind of conduct{' '}
          <em>Gruenberg</em> addresses — the insurer placed its financial interest above its
          duty to the policyholder.
        </li>
        <li>
          <strong>Broad release on a partial payment.</strong> You settle the dwelling
          portion of your claim for $200,000, but the insurer&apos;s release form says you
          are releasing &ldquo;any and all claims arising from the loss.&rdquo; You still have
          an open contents claim and an ALE claim. Under &sect; 2695.4(e), the insurer must
          explain the legal effect of this broad release in writing before you sign. And under
          &sect; 2695.4(f), release language on a partial settlement check is unenforceable if
          you did not agree to compromise the remaining coverages.
        </li>
        <li>
          <strong>The &ldquo;full and final&rdquo; check.</strong> You receive a check for
          $75,000 with &ldquo;full and final payment&rdquo; printed on it, but you believe your
          claim is worth $150,000 and you never agreed to settle. This violates &sect; 2695.4(f).
          See our guide on{' '}
          <Link href="/resources/cashing-insurance-checks" className="text-[#2E74B5] hover:underline">insurance checks</Link>{' '}
          for what to do.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How to Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Early in your claim, send a written request: &ldquo;Per 10 CCR &sect; 2695.4(a),
        please identify all benefits, coverages, time limits, and policy provisions that may
        apply to my claim, including but not limited to: Dwelling, Other Structures, Personal
        Property, Loss of Use, ordinance or law coverage, debris removal, extended replacement
        cost, and any other applicable endorsements.&rdquo; If the insurer fails to respond or omits coverages, the written
        request creates a documented record. The affirmative disclosure duty under §2695.4(a)
        exists regardless of whether the insured asks; what the written request adds is
        provability — a clear paper record of what was requested and what the carrier disclosed
        (or did not).
      </p>

      <CalloutBox variant="warning" title="The Duty to Disclose All Coverages">
        <p>
          In practice, many insurers fail to mention coverages like ordinance or law, extended
          replacement cost, debris removal beyond the dwelling, or the additional contents
          coverage available under some policies. If your insurer never mentioned a coverage and
          you later discover you were entitled to it, their failure to disclose is a regulatory
          violation under &sect; 2695.4(a) — and potentially evidence of bad faith. The insured
          who asks in writing forces the insurer to either disclose everything or create a
          documented violation.
        </p>
      </CalloutBox>

      {/* ───────── 2695.5 DUTIES UPON RECEIPT OF COMMUNICATIONS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section 2695.5 — Duties Upon Receipt of Communications
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text (Summary):</p>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong>(a)</strong> Upon receiving any inquiry from the CDI, the insurer must
            furnish a complete written response within <strong>21 calendar days</strong>.
          </li>
          <li>
            <strong>(b)</strong> Upon receiving any communication from a claimant that reasonably
            suggests a response is expected, the insurer must furnish a complete response within{' '}
            <strong>15 calendar days</strong>.
          </li>
          <li>
            <strong>(c)</strong> A claimant&apos;s designation of a Public Adjuster, attorney, or
            family member must be in writing, signed and dated, and is valid until the claim is
            settled or revoked in writing.
          </li>
          <li>
            <strong>(e)</strong> Upon receiving notice of claim, the insurer must within{' '}
            <strong>15 calendar days</strong>: (1) acknowledge receipt; (2) provide forms,
            instructions, and reasonable assistance; and (3) begin investigation. Failure of an
            agent to transmit notice is imputed to the insurer.
          </li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        The <strong>15-day response rule</strong> (&sect; 2695.5(b)) is one of the most
        frequently violated and most useful regulations. It applies to <em>every</em>
        communication from a claimant that reasonably suggests a response is expected. Each
        email, letter, or voicemail that asks a question, requests information, or submits
        documentation may trigger the 15-calendar-day response obligation. Continued
        non-response past the 15-day mark may be treated as an ongoing violation that supports
        a CDI complaint or future bad-faith analysis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        The <strong>15-day acknowledgment deadline</strong> (&sect; 2695.5(e)) starts the
        moment you file your claim. The insurer has 15 days to acknowledge it, tell you what
        they need, and begin investigating. An insurer that takes three weeks to assign an
        adjuster has already violated this regulation.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Real-World Examples</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>The silent adjuster.</strong> You send your contractor&apos;s estimate to the
          adjuster by email on March 1. By March 20, you have received no response. That is a
          violation of &sect; 2695.5(b). You send a follow-up on March 21 noting the missed
          deadline. By April 5, still no response — that is now a <em>second</em> violation
          (of the follow-up communication). Each unanswered communication is a separate,
          documentable violation.
        </li>
        <li>
          <strong>Slow claim acknowledgment.</strong> You file your claim on January 15 after a
          pipe burst. On February 10 — 26 days later — you finally receive a letter
          acknowledging the claim. The insurer violated the 15-day deadline by 11 days.
        </li>
        <li>
          <strong>Agent delay imputed to insurer.</strong> You report a fire loss to your
          insurance agent on Monday. The agent does not transmit the claim to the carrier
          until the following Friday. Under &sect; 2695.5(e)(1), the agent&apos;s delay is
          imputed to the insurer — the 15-day clock started Monday, not Friday.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How Some Policyholders Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Many policyholders keep a communication log.</strong> Every communication sent
        to the insurer is logged with the date and what was sent. If 15 calendar days pass
        without a response, a follow-up letter is one option some policyholders use, along
        these lines: &ldquo;On [date], I sent [description]. Per 10 CCR &sect; 2695.5(b), a
        response was due within 15 calendar days. No response has been received. This may
        constitute a regulatory violation. Please respond immediately.&rdquo; In our
        experience, this approach accomplishes two things: it tends to get the insurer&apos;s
        attention, and it creates a paper trail that may support a future CDI complaint or any
        bad-faith analysis an attorney later conducts.
      </p>

      {/* ───────── 2695.6 TRAINING AND CERTIFICATION ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section 2695.6 — Training and Certification
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text (Summary):</p>
        <p>
          Every insurer shall provide thorough and adequate training regarding these regulations
          to all claims agents and shall certify that training <strong>annually, under penalty of
          perjury, by September 1</strong>. Where independent adjusters are retained, the
          insurer must provide training and maintain certifications at its principal place of
          business.
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation and How to Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Every adjuster who handles your claim — including independent adjusters brought in
        after a catastrophe from other states — is required to have been trained on these
        regulations and to have certified under penalty of perjury that they understand them.
        When an adjuster tells you &ldquo;we do not have to do that&rdquo; or
        &ldquo;that is not how it works in California,&rdquo; they are either violating
        this regulation (by being insufficiently trained) or they are knowingly
        misrepresenting the regulations to you (which is itself a violation of
        &sect; 790.03(h)(1) — misrepresenting policy provisions). After a major wildfire,
        when carriers bring in hundreds of out-of-state adjusters, this regulation is
        particularly relevant. &ldquo;My adjuster did not know the rule&rdquo; is not a
        defense — it is a separate violation.
      </p>

      {/* ───────── 2695.7 STANDARDS FOR SETTLEMENT ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section 2695.7 — Standards for Prompt, Fair and Equitable Settlements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 italic">
        This is the longest and most important section of the regulations. It contains 17
        subsections (a through q). Each property-relevant subsection is addressed below with
        the regulation text, explanation, examples, and practical guidance.
      </p>

      {/* 2695.7(a) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-8">
        &sect; 2695.7(a) — Anti-Discrimination
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          No insurer shall discriminate in its claims settlement practices based upon the
          claimant&apos;s age, race, gender, income, religion, language, sexual orientation,
          ancestry, national origin, or physical disability, or upon the territory of the
          property or person insured.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> Every claim must receive the same investigation and
        settlement standards regardless of who the claimant is or where the property is
        located. A claim in a lower-income neighborhood must receive the same level of
        attention as one in a wealthy area. A non-English-speaking claimant must receive the
        same treatment as an English speaker.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If you observe that the insurer is providing lesser
        service — longer delays, less thorough investigations, lower estimates — in certain
        communities, this regulation provides a basis for a CDI complaint and may support a
        broader pattern-and-practice investigation.
      </p>

      {/* 2695.7(b) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(b) — 40-Day Accept/Deny Deadline
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="mb-2">
          Upon receiving proof of claim, every insurer shall immediately, but in no event more
          than <strong>forty (40) calendar days</strong> later, accept or deny the claim, in
          whole or in part. Where a claim is denied, the insurer shall do so <strong>in
          writing</strong>, listing <strong>all bases</strong> and the <strong>factual and
          legal bases</strong> for each reason. The denial shall cite specific policy provisions
          or law and explain their application. Written notification shall include the CDI&apos;s
          contact information and the claimant&apos;s right to CDI review.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> Once the insurer has proof of your loss — from your
        submissions or its own investigation — they have 40 calendar days to decide. A vague
        denial that says &ldquo;claim denied — insufficient documentation&rdquo; without citing
        the specific policy exclusion, the factual basis, and the CDI&apos;s contact
        information fails the regulatory standard on multiple grounds. Every denial must tell
        you <em>exactly why</em>, cite the <em>exact</em> policy language, explain how it
        applies, and tell you how to contact the CDI.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Real-world example:</strong> Your insurer denies your water damage claim with a
        one-paragraph letter stating: &ldquo;After review, we have determined this loss is not
        covered under your policy.&rdquo; This denial violates &sect; 2695.7(b)(1) in multiple
        ways: it does not list all bases for denial, does not cite the specific exclusion,
        does not provide the factual basis, and does not include CDI contact information. It
        also implicates Insurance Code &sect; 790.03(h)(13), which prohibits &ldquo;[f]ailing
        to provide promptly a reasonable explanation of the basis relied on in the insurance
        policy, in relation to the facts or applicable law, for the denial of a claim or for
        the offer of a compromise settlement.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If you receive a deficient denial, respond in writing:
        &ldquo;Your denial letter of [date] does not comply with 10 CCR &sect; 2695.7(b)(1).
        It fails to identify the specific policy provision, condition, or exclusion relied upon;
        fails to provide the factual basis for each reason; and fails to include CDI contact
        information. Please provide a compliant denial letter within 15 days per
        &sect; 2695.5(b).&rdquo; This either forces a proper explanation (which may reveal the
        denial is weak) or creates another documented violation.
      </p>

      {/* 2695.7(c) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(c) — 30-Day Written Status Updates
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          If the insurer needs more than 40 days, it must provide written notice within the
          40-day period specifying additional information needed and reasons for the delay.
          Thereafter, written notice shall be provided <strong>every thirty (30) calendar
          days</strong> until a determination is made.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> The insurer cannot leave the claim in limbo. Each 30-day
        period that passes without a written status update may be treated as a separate
        violation under §2695.7(c).
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Real-world example:</strong> Your wildfire claim has been open for six months.
        You received one status letter in month two and nothing since. That is potentially
        four separate 30-day violations — each one individually documentable in a CDI
        complaint.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> After 30 days without an update, write: &ldquo;Per
        10 CCR &sect; 2695.7(c)(1), you are required to provide written status updates every
        30 calendar days. The last written status was dated [date], more than 30 days ago.
        Please provide a written status update immediately, including any additional
        information you require and the reasons for the continued delay.&rdquo;
      </p>

      {/* 2695.7(d) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(d) — Thorough, Fair and Objective Investigation
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Every insurer shall conduct and diligently pursue a{' '}
          <strong>thorough, fair and objective investigation</strong> and shall not persist in
          seeking information not reasonably required for or material to the resolution of a
          claim dispute.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> This is a two-sided regulation. The insurer must
        investigate thoroughly — but it also cannot demand unnecessary information as a delay
        tactic. The investigation must be <strong>objective</strong>, not designed to support a
        predetermined outcome.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Real-world example and case law:</strong> The insurer sends a forensic engineer
        to inspect your fire-damaged roof. The engineer spends 20 minutes on-site, looks at two
        small areas, and writes a report attributing all damage to &ldquo;pre-existing wear and
        tear.&rdquo; Your contractor, who spent two full days on the property, documents
        extensive fire damage in areas the engineer never inspected. Under{' '}
        <em>Chateau Chamberay</em> (2001) 90 Cal.App.4th 335, the genuine dispute doctrine
        does not protect an insurer whose investigation was unreasonable. An insurer cannot
        conduct a 20-minute inspection, ignore contradicting evidence, and then claim the
        resulting low estimate is a &ldquo;genuine dispute.&rdquo; See our guide on{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] hover:underline">biased insurance experts and carrier engineer reports</Link>{' '}
        and the{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] hover:underline">insurer&apos;s duty to investigate</Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> When the insurer&apos;s investigation is
        superficial, document the deficiencies in writing: &ldquo;Your adjuster spent
        approximately [X] minutes on the property and did not inspect [list areas]. Per 10 CCR
        &sect; 2695.7(d), you are required to conduct a thorough, fair and objective
        investigation. The following areas of damage were not inspected: [list]. I request a
        reinspection that includes all damaged areas.&rdquo;
      </p>

      {/* 2695.7(e) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(e) — No Delay Based on Other Parties
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          No insurer shall delay or deny settlement of a first party claim on the basis that
          responsibility for payment should be assumed by others.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> Your insurer cannot tell you to &ldquo;go after the
        other guy first.&rdquo; If your neighbor&apos;s tree fell on your house and you have
        coverage, your insurer must pay — their right to subrogate does not delay their
        obligation to pay you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If your insurer says &ldquo;you should file a claim
        against your neighbor&apos;s insurance,&rdquo; respond: &ldquo;Per 10 CCR
        &sect; 2695.7(e), you may not delay or deny settlement of my first party claim on the
        basis that responsibility should be assumed by others. I am filing this claim under my
        own policy. Please process it accordingly.&rdquo;
      </p>

      {/* 2695.7(f) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(f) — Statute of Limitations Notice
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Every insurer shall provide written notice of any statute of limitation or time period
          requirement upon which it may rely to deny a claim. Notice must be given{' '}
          <strong>at least 60 days before the expiration date</strong>. Does not apply to
          claimants represented by counsel.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation and case law:</strong> An insurer that silently waits for a deadline
        to pass and then denies your claim as time-barred has committed one of the most
        clear-cut bad faith violations possible. This regulation reflects the principle
        established in cases like <em>Egan v. Mutual of Omaha</em> (1979) 24 Cal.3d 809 — the
        insurer has a duty of good faith that includes affirmatively protecting the
        insured&apos;s interests, not laying traps. See our guide on{' '}
        <Link href="/resources/equitable-tolling" className="text-[#2E74B5] hover:underline">equitable tolling</Link>{' '}
        for how the statute of limitations works in insurance disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How some policyholders use this:</strong> Many policies contain a one-year suit
        limitation provision, and certain statutes of limitation may also apply depending on
        the legal theory involved — CCP &sect; 339(1) is sometimes cited in this area.{' '}
        <strong>Identifying which statute(s) of limitation apply to a specific claim is a legal
        question for an attorney, not a Public Adjuster.</strong> That said, &sect; 2695.7(f)
        places the disclosure burden on the insurer. Some policyholders write to the carrier
        with language like: &ldquo;Per 10 CCR &sect; 2695.7(f), please identify in writing any
        statute of limitation or time period requirement that may apply to my claim and the
        applicable expiration dates.&rdquo; The point is to obtain the carrier&apos;s own
        written identification of any deadlines it intends to rely on, so the insured and the
        insured&apos;s attorney can evaluate them.
      </p>

      {/* 2695.7(g) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(g) — Prohibition on Unreasonably Low Offers
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="mb-2">
          No insurer shall attempt to settle a claim by making a settlement offer that is{' '}
          <strong>unreasonably low</strong>. The Commissioner considers: whether the insurer
          considered the claimant&apos;s evidence; legal authority reasonably available; the
          adjuster&apos;s own advice on damages; the procedures used to determine dollar
          amount; and whether the final amount is below what a reasonable person with knowledge
          of the facts would have offered.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation and case law:</strong> This is the regulation behind{' '}
        <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] hover:underline">lowball offers</Link>.
        The standard is objective: would &ldquo;a reasonable person with knowledge of the facts
        and circumstances&rdquo; have offered this amount? Under Insurance Code
        &sect; 790.03(h)(5), failing to attempt in good faith to effectuate a prompt, fair
        settlement when liability is reasonably clear is a statutory violation. Under
        &sect; 790.03(h)(6), compelling the insured to institute litigation by offering
        substantially less than the amount ultimately recovered is also prohibited. Together
        with &sect; 2695.7(g), these provisions create a powerful framework against lowball
        tactics.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Real-world example:</strong> You submit a contractor estimate for $175,000. The
        insurer offers $65,000 with no explanation of why your contractor&apos;s estimate is
        wrong — no competing line items, no analysis, just a lower number from their software.
        Under &sect; 2695.7(g), the Commissioner would look at whether the insurer considered
        your evidence (it ignored your contractor&apos;s estimate) and whether the procedures
        used were reasonable (running Xactimate with below-market pricing is not a reasonable
        procedure when local contractors are bidding 2.5x higher).
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> When you receive a lowball offer, respond in writing
        with your competing evidence: &ldquo;Your settlement offer of $[X] is unreasonably low
        under 10 CCR &sect; 2695.7(g). I have submitted written estimates from [number]
        licensed contractors totaling $[Y]. Your offer does not address or rebut the specific
        line items in my contractors&apos; estimates. A reasonable person with knowledge of
        local repair costs would not have offered $[X] for this scope of damage.&rdquo;
      </p>

      {/* 2695.7(h) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(h) — 30-Day Payment Deadline After Acceptance
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Upon acceptance, the insurer shall immediately, but in no event more than{' '}
          <strong>thirty (30) calendar days</strong>, tender payment. In multi-coverage claims,
          accepted amounts shall be paid within 30 days if payment would terminate liability
          under that individual coverage.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> Once the insurer agrees to pay — even a partial amount —
        they have 30 days to write the check. They cannot hold undisputed amounts hostage while
        other portions of the claim are still being evaluated. If they accepted your dwelling
        claim for $200,000 but are still working on contents, the $200,000 must be paid now.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If the insurer has accepted all or part of your claim
        and 30 days pass without payment, write: &ldquo;On [date], you accepted my [coverage]
        claim in the amount of $[X]. Per 10 CCR &sect; 2695.7(h), payment was due within 30
        calendar days. [X] days have elapsed without payment. Please tender payment
        immediately.&rdquo;
      </p>

      <CalloutBox variant="legal" title="The Complete Timeline at a Glance">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li><strong>15 days</strong> — Acknowledge claim, provide forms, begin investigation (&sect; 2695.5(e))</li>
          <li><strong>15 days</strong> — Respond to any claimant communication (&sect; 2695.5(b))</li>
          <li><strong>40 days</strong> — Accept or deny claim after receiving proof of claim (&sect; 2695.7(b))</li>
          <li><strong>30 days</strong> — Pay undisputed amounts after acceptance (&sect; 2695.7(h))</li>
          <li><strong>Every 30 days</strong> — Written status updates if claim remains open (&sect; 2695.7(c))</li>
          <li><strong>60 days</strong> — Notice before any time-bar deadline (&sect; 2695.7(f))</li>
        </ul>
      </CalloutBox>

      {/* 2695.7(i) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-8">
        &sect; 2695.7(i) — No False Urgency on Forms
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          No insurer shall inform a claimant that their rights may be impaired if a form or
          release is not completed within a specified time period unless the deadline is based on
          an applicable statute of limitations or policy provision.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> The insurer cannot create artificial urgency — telling you
        &ldquo;you must sign this release within 10 days or you&apos;ll lose your rights&rdquo;
        — unless there is an actual legal deadline. This prevents pressure tactics designed to
        rush claimants into signing unfavorable settlements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If the insurer imposes an artificial deadline on a
        release or form, respond: &ldquo;Per 10 CCR &sect; 2695.7(i), you may not inform me
        that my rights will be impaired if this form is not completed by [date] unless that
        deadline is based on an applicable statute of limitations or policy provision. Please
        identify the specific statute or policy provision that establishes this deadline.&rdquo;
      </p>

      {/* 2695.7(k) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(k) — Extended Timeline for Suspected Fraud
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Where there is a reasonable basis, supported by specific information available for
          CDI review, for belief that the claim is fraudulent, the 40-day deadline may be
          increased to <strong>80 calendar days</strong>, or suspended entirely if the insurer
          has filed a fraud report under Insurance Code &sect; 1872.4 and can demonstrate
          diligent investigation.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> The insurer gets extra time only with genuine,
        documented fraud suspicion — not a vague hunch. If the insurer is using fraud referral
        as a pretext to delay a legitimate claim, that is itself a violation. The abuse of SIU
        referrals to delay claims is a recognized bad faith tactic. See our guide on{' '}
        <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">SIU investigations</Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If your claim is sent to SIU without apparent
        justification, write: &ldquo;I understand my claim has been referred to your Special
        Investigations Unit. Per 10 CCR &sect; 2695.7(k), extension of the 40-day deadline
        requires a reasonable basis supported by specific information. Please identify the
        specific information that supports a fraud investigation, or confirm that the 40-day
        deadline in &sect; 2695.7(b) remains in effect.&rdquo;
      </p>

      {/* 2695.7(l) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(l) — Denials Must Be Based on Documented Evidence
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          No insurer shall deny a claim based upon information obtained in a telephone
          conversation or personal interview unless that conversation is documented in the
          claim file per &sect; 2695.3.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> If the adjuster denies part of your claim based on
        &ldquo;a contractor I spoke to said the damage is pre-existing,&rdquo; that
        conversation must be documented in the file — the contractor&apos;s name, the date,
        and what was said. Undocumented verbal evidence cannot be the basis for a denial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> When the insurer cites verbal information in a
        denial, request documentation: &ldquo;Your denial references information obtained from
        [source]. Per 10 CCR &sect; 2695.7(l), this information must be documented in the claim
        file. Please provide a copy of the documentation, including the date of the
        communication and the identity of the source.&rdquo;
      </p>

      {/* 2695.7(o) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(o) — No Retaliation for CDI Complaints
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          No insurer shall require that a claimant withdraw or refrain from submitting any CDI
          complaint as a condition of settlement.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Explanation and how to use this:</strong> The insurer cannot condition your
        settlement on dropping a CDI complaint. If an adjuster says &ldquo;we&apos;ll settle
        if you withdraw your complaint,&rdquo; that statement itself is a violation you should
        immediately document and report to the CDI. You have an absolute right to file and
        maintain a CDI complaint regardless of settlement status.
      </p>

      {/* 2695.7(p)-(q) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.7(p)&ndash;(q) — Subrogation and Deductible Recovery
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="mb-2">
          <strong>(p)</strong> The insurer shall notify you in writing whether it intends to
          pursue subrogation. If not, it shall tell you that recovery is your responsibility.
        </p>
        <p>
          <strong>(q)</strong> In subrogation, the insurer must include your deductible in its
          demand and share recoveries <strong>proportionately</strong>. Legal and collection
          expenses cannot be deducted from your deductible recovery unless an outside firm was
          retained.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> If someone else caused your damage, the insurer must tell
        you whether it will pursue that party. If it does, your deductible must be included,
        and any recovery is shared proportionately — the insurer cannot recover its full payout
        first and leave you with nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If a third party caused your loss, write: &ldquo;Per
        10 CCR &sect; 2695.7(p), please advise in writing whether you intend to pursue
        subrogation against [responsible party]. If you do not intend to pursue subrogation,
        please confirm that any recovery is my responsibility so that I may take appropriate
        action to recover my deductible and uninsured losses.&rdquo;
      </p>

      {/* ───────── 2695.9 PROPERTY STANDARDS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Section 2695.9 — Additional Standards for Residential and Commercial Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 italic">
        This section contains property-specific standards that supplement the general
        requirements in &sect; 2695.7. These are the rules that apply specifically to your
        homeowner, renter, condo, or commercial property insurance claim — and they contain
        some of the strongest tools available to policyholders.
      </p>

      {/* 2695.9(a) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-8">
        &sect; 2695.9(a) — Replacement Cost and Matching
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong>(a)(1)</strong> When a loss requires repair or replacement,{' '}
            <strong>any consequential physical damage incurred in making the repair</strong>{' '}
            shall be included in the loss. The insured shall not pay for depreciation nor any
            other cost except the deductible.
          </li>
          <li>
            <strong>(a)(2)</strong> When replaced items <strong>do not match in quality, color
            or size</strong>, the insurer shall replace all items in the damaged area to conform
            to a <strong>reasonably uniform appearance</strong>.
          </li>
        </ul>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> Subsection (a)(1) requires the insurer to pay for
        &ldquo;tear-out&rdquo; — the damage caused by making repairs. If the plumber cuts
        through drywall and tile, repairing the drywall and tile is part of the covered loss.
        Subsection (a)(2) is the <strong>matching regulation</strong> — if new materials
        do not match existing undamaged materials in the same area, the insurer must
        replace enough to achieve a uniform appearance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Real-world example:</strong> Your kitchen has hardwood flooring throughout. A
        water loss damages 30% of the floor. The insurer replaces the damaged section, but the
        new wood does not match the existing floor in color or grain pattern — even after
        staining. Under &sect; 2695.9(a)(2), the insurer must replace all items in the damaged
        area to achieve a reasonably uniform appearance &mdash; and the insured can argue the
        damaged area is the entire continuous floor, because replacing anything less leaves the
        visible mismatch the regulation exists to prevent. See our guide on{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">matching disputes</Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> When the insurer proposes a partial repair that
        will not match, write: &ldquo;Per 10 CCR &sect; 2695.9(a)(2), when replaced items do
        not match the existing items in quality, color, or size, you are required to replace
        all items in the damaged area to conform to a reasonably uniform appearance. The
        proposed partial replacement of [describe] will not match the existing [describe] in
        [color/size/quality]. I am requesting replacement of the entire [area] to achieve a
        uniform appearance as required by the regulation.&rdquo;
      </p>

      {/* 2695.9(b)-(c) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.9(b)&ndash;(c) — Right to Choose Your Own Contractor
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="mb-2">
          <strong>(b)</strong> No insurer shall require that the insured have the property
          repaired by a specific individual or entity.
        </p>
        <p>
          <strong>(c)</strong> No insurer shall suggest a specific repair entity unless:
          (1) the claimant expressly requests it; or (2) the claimant has been informed in
          writing of the right to select their own. If the claimant accepts the insurer&apos;s
          recommendation, the insurer shall guarantee the work meets trade standards at no
          additional cost.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> You have the absolute right to choose your own
        contractor. The insurer cannot require their preferred vendor or &ldquo;managed
        repair&rdquo; program. If the insurer recommends a contractor, they must first tell
        you in writing that you can choose someone else. If you use the insurer&apos;s
        contractor and the work is substandard, the insurer guarantees it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Real-world example:</strong> Your insurer says: &ldquo;We have a preferred
        vendor network. We can only guarantee payment if you use one of our contractors.&rdquo;
        This is a violation of &sect; 2695.9(b). The insurer cannot require you to use a
        specific contractor, and implying that payment depends on using their vendor is
        coercive. See our guides on{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] hover:underline">choosing your contractor</Link>{' '}
        and{' '}
        <Link href="/resources/right-to-repair" className="text-[#2E74B5] hover:underline">right to repair clauses</Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If the insurer pressures you to use their
        contractor, write: &ldquo;Per 10 CCR &sect; 2695.9(b), you may not require me to have
        my property repaired by a specific individual or entity. I will be selecting my own
        licensed contractor. Please process my claim accordingly.&rdquo;
      </p>

      {/* ───────── 2695.9(d) THE CONTRACTOR NAME REQUIREMENT ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.9(d) — The Contractor Name Requirement: The Strongest Tool for Property
        Policyholders
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text:</p>
        <p className="mb-2">
          If losses are settled on the basis of a written scope and/or estimate prepared by or
          for the insurer, the insurer shall supply the claimant with a copy. The estimate shall
          be <strong>in accordance with applicable policy provisions, of an amount which will
          restore the damaged property to no less than its condition prior to the loss and which
          will allow for repairs in a manner which meets accepted trade standards for good and
          workmanlike construction</strong>. The insurer shall take reasonable steps to verify
          that repair or rebuilding costs are <strong>accurate and representative of costs in
          the local market area</strong>.
        </p>
        <p className="mb-2">
          If the claimant contends, based on a written estimate, that necessary repairs will
          exceed the insurer&apos;s estimate, the insurer shall:
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>(1) pay the difference between its estimate and the claimant&apos;s higher estimate; or</li>
          <li>
            (2) if requested by the claimant, <strong>promptly provide the name of at least one
            repair individual or entity that will make the repairs for the amount of the
            insurer&apos;s estimate</strong>, and the insurer shall guarantee the work meets
            trade standards at no additional cost; or
          </li>
          <li>(3) reasonably adjust the claimant&apos;s repair estimate and provide a copy of the adjusted estimate.</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Why This Regulation Changes Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        In our experience, this is <strong>one of the most effective regulations available to
        property policyholders in California</strong>. It works because it tests whether the
        insurer&apos;s estimate can survive contact with the actual repair market — by asking
        the insurer to name a contractor who will perform the work for the estimated amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Here is how it works in practice: The insurer&apos;s adjuster — or a contractor hired
        by the insurer — writes an estimate for $80,000 to repair your fire-damaged home. You
        look at that estimate and you know the work cannot be done for that amount. You send a
        written demand: &ldquo;Per 10 CCR &sect; 2695.9(d)(2), provide me with the name of a
        licensed contractor who will perform the repairs described in your estimate, to accepted
        trade standards for good and workmanlike construction, for $80,000.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>The §2695.9(d) leverage rests on two independent requirements in the
        regulation.</strong> The first is in §2695.9(d)&apos;s opening paragraph: the
        insurer&apos;s estimate itself must be &ldquo;of an amount which will restore the
        damaged property to no less than its condition prior to the loss&rdquo; using
        &ldquo;accepted trade standards for good and workmanlike construction,&rdquo; and the
        insurer must take reasonable steps to verify that repair costs are &ldquo;accurate and
        representative of costs in the local market area.&rdquo; If no licensed contractor will
        do the scope for the insurer&apos;s number, many plaintiff attorneys argue the estimate
        may not meet that standard on its face — and an insured may have grounds to challenge
        it even without producing a separate written estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        The second is the §2695.9(d)(1)–(3) framework, which is triggered when the claimant
        does submit a written estimate showing higher costs. At that point the carrier has
        three options: pay the difference, name a contractor who will do the work for the
        insurer&apos;s number, or reasonably adjust the claimant&apos;s estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        In our experience, the insurer rarely produces a contractor. The estimate was usually
        generated by an adjuster using software, or by a contractor who wrote it for the
        carrier but has no intention of actually performing the work. Reputable licensed
        contractors do not agree to do repairs for a number that does not reflect actual
        construction cost in the local area.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer cannot produce a contractor at its number, many plaintiff attorneys
        argue the estimate may not satisfy the trade-standards and local-market requirements
        in §2695.9(d). In practice, this is often the point at which the carrier agrees to a
        reinspection or to adjust the estimate — which is usually where additional payment
        shows up.
      </p>

      <CalloutBox variant="tip" title="How to Write the Contractor Name Demand Letter">
        <p className="mb-2">
          Your letter should include all of the following elements:
        </p>
        <ol className="list-decimal pl-4 space-y-1 text-sm">
          <li>
            Cite <strong>10 CCR &sect; 2695.9(d)(2)</strong> by number.
          </li>
          <li>
            Reference the insurer&apos;s estimate by date and amount.
          </li>
          <li>
            Request the name, address, and telephone number of at least one repair individual
            or entity that will perform the repairs described in the insurer&apos;s estimate,
            for the amount of that estimate.
          </li>
          <li>
            Specify that the contractor must be willing to perform the work in accordance with
            accepted trade standards for good and workmanlike construction.
          </li>
          <li>
            Note that under the regulation, the insurer must guarantee the work at no
            additional cost to you beyond the deductible.
          </li>
          <li>
            Request a response within 15 calendar days per &sect; 2695.5(b).
          </li>
        </ol>
        <p className="mt-2 text-sm">
          You do not need to have your own competing estimate to make this demand. The
          insurer&apos;s own estimate is the trigger. If the insurer fails to respond within 15
          days, you now have two documented violations: the failure to comply with
          &sect; 2695.9(d)(2) and the failure to respond within 15 days under &sect; 2695.5(b).
          If they respond but cannot name a contractor, their estimate is rebutted on the
          merits. <strong>Either way, the demand letter advances your claim.</strong>
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-6">Real-World Results</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        In our experience, this regulation is used routinely by experienced Public Adjusters
        to support settlement increases — often by tens of thousands of dollars, and on large
        residential claims sometimes much more. The pattern we see is consistent: the insurer
        writes a low estimate, the contractor-name demand is sent, the insurer cannot produce a
        contractor who will do the work at that number, and the carrier often agrees to a
        reinspection or to adjust the estimate. Having a competing contractor estimate
        strengthens the demand. In our experience, the written demand itself — backed by the
        regulation&apos;s trade-standards and local-market requirements — is often what creates
        the leverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        The regulation also addresses the insurer&apos;s estimate quality independently. The
        first sentence requires the estimate to be &ldquo;accurate and representative of costs
        in the local market area.&rdquo; Many plaintiff attorneys argue that an insurer using
        Xactimate with default pricing that does not reflect Bay Area, Los Angeles, or other
        California local market costs may not satisfy this requirement — even before anyone
        challenges the estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Key point:</strong> This regulation requires you to take action. You need to
        make the written demand. If you never request a contractor name,{' '}
        <strong>you cannot benefit from this regulation</strong>. The insured who makes the
        written demand gets the settlement increase. The insured who accepts the
        insurer&apos;s number without challenging it gets the insurer&apos;s number. This is
        the clearest example of the principle: <em>if you do not ask, you do not
        benefit</em>.
      </p>

      {/* 2695.9(e) */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        &sect; 2695.9(e) — Appraisal Process Limitations
      </h3>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Once the appraisal provision is invoked, the appraisal process shall not include any
          legal proceeding or procedure not specified under Insurance Code Section 2071.
          Separate legal proceedings on unrelated issues are not precluded.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Explanation:</strong> The{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal process</Link>{' '}
        follows Insurance Code &sect; 2071 — nothing more, nothing less. The insurer cannot
        inject additional procedures like demanding an{' '}
        <Link href="/resources/examination-under-oath" className="text-[#2E74B5] hover:underline">EUO</Link>{' '}
        as a prerequisite. You retain the right to pursue separate legal action on coverage
        issues.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>How to use this:</strong> If the insurer attempts to delay or condition
        appraisal on additional proceedings, write: &ldquo;Per 10 CCR &sect; 2695.9(e), the
        appraisal process shall not include any legal proceeding or procedure not specified
        under Insurance Code Section 2071. Your requirement of [describe additional procedure]
        is not authorized under the appraisal provision. Please proceed with appraisal as
        provided in the policy.&rdquo;
      </p>

      {/* 2695.9(f) — LABOR DEPRECIATION */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.9(f) — Depreciation Standards and the Labor Depreciation Prohibition
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text:</p>
        <p className="mb-2">
          When the amount claimed is adjusted because of betterment, depreciation, or salvage,
          all justification shall be contained in the claim file. Adjustments shall be{' '}
          <strong>discernable, measurable, itemized, and specified as to dollar amount</strong>,
          reflect a measurable difference in market value attributable to condition and age,
          and apply only to property normally subject to repair and replacement during the
          useful life of the property. The basis shall be fully explained to the claimant in
          writing.
        </p>
        <p className="font-semibold mt-3">
          (f)(1) — The Labor Depreciation Prohibition:
        </p>
        <p>
          <strong>Except for the intrinsic labor costs included in the cost of manufactured
          materials or goods, the expense of labor necessary to repair, rebuild or replace
          covered property is not a component of physical depreciation and shall not be subject
          to depreciation or betterment.</strong>
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Explanation</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        This section contains two requirements. First, every depreciation deduction must
        be <strong>individually justified</strong> — not applied as a blanket percentage. The
        insurer cannot say &ldquo;we depreciated everything 30%.&rdquo; Each item must be
        depreciated separately, specified as a dollar amount, and explained in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Second — and this is one of the most commonly violated regulations —{' '}
        <strong>labor cannot be depreciated on California property claims</strong>. The only
        exception is labor &ldquo;intrinsic&rdquo; to manufactured materials (factory labor in
        a pre-made cabinet, for example). Field labor — the roofer, carpenter, painter,
        electrician, demolition crew — cannot be depreciated. Period.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Real-World Example</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        Your insurer writes a replacement cost estimate of $200,000 for your fire damage. The
        ACV (actual cash value) payment depreciates the total by 25%, paying you $150,000 as
        the initial check. But buried in the depreciation calculation, the insurer applied
        25% depreciation to <em>everything</em> — including $80,000 in labor costs (demolition,
        framing, roofing installation, painting, cleanup). Under &sect; 2695.9(f)(1), the
        $80,000 in labor should not have been depreciated at all. The correct ACV depreciation
        should have been applied only to the $120,000 in materials, producing an ACV payment
        of $170,000 — a $20,000 difference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        On large claims, the labor depreciation violation can mean $30,000, $50,000, or more
        in wrongfully withheld funds. See our detailed guide on{' '}
        <Link href="/resources/labor-depreciation-debate" className="text-[#2E74B5] hover:underline">labor depreciation</Link>.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How to Use This</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Review the insurer&apos;s ACV estimate line by line. Identify every line item where
        depreciation is applied to labor. Then write: &ldquo;Per 10 CCR &sect; 2695.9(f)(1),
        the expense of labor necessary to repair, rebuild or replace covered property is not a
        component of physical depreciation and shall not be subject to depreciation or
        betterment. Your ACV calculation applies depreciation to the following labor costs:
        [list items and amounts]. Please recalculate the ACV payment excluding labor from
        depreciation and issue a supplemental payment for the difference.&rdquo;
      </p>

      <CalloutBox variant="warning" title="Labor Depreciation Is Prohibited — But You Must Challenge It">
        <p className="mb-2">
          Many insurers apply depreciation to total line items (materials + labor) rather than
          separating labor. This is a violation, but the insurer will not correct it unless you
          challenge it. If you accept the ACV payment without reviewing the depreciation
          calculation, you leave money on the table. If you challenge it in writing citing
          &sect; 2695.9(f)(1), the insurer must either correct the calculation or explain in
          writing why they believe labor depreciation is appropriate — which they cannot do
          under this regulation.
        </p>
        <p>
          Again: <strong>if you do not ask, you do not benefit</strong>.
        </p>
      </CalloutBox>

      {/* ───────── 2695.12 PENALTIES ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Section 2695.12 — Penalties
      </h2>

      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-[#1F3964] mb-2">Regulation Text (Summary):</p>
        <p className="mb-2">
          The Commissioner considers: extraordinary circumstances; good faith fraud belief;
          claim complexity; claimant exaggeration; the number of violations relative to total
          claims; remedial measures taken; previous violations; degree of harm; good faith
          compliance attempts; frequency of detriment to the public; management awareness;
          and reasonable valuation mistakes.
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How This Affects You</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        These factors govern CDI enforcement decisions. Understanding them helps you build a
        stronger CDI complaint. The most impactful factors are: <strong>whether management
        was aware</strong> (showing the violations were not just one rogue adjuster),{' '}
        <strong>previous violations</strong> (the insurer&apos;s track record), and{' '}
        <strong>the degree of harm</strong> (the financial impact on you). When documenting
        violations, frame them in terms of these factors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        In litigation, many of the same factors that drive CDI penalty decisions can also
        influence a jury&apos;s damages analysis. Under <em>Egan v. Mutual of Omaha</em>, the
        California Supreme Court held that bad-faith conduct that is oppressive, fraudulent, or
        malicious may support punitive damages. Many plaintiff attorneys treat a documented
        record of regulatory violations — especially where management was aware — as
        supportive evidence in any punitive-damages analysis. Whether punitive damages are
        available in a specific case is a determination for the courts and attorneys involved.
      </p>

      {/* ───────── 2695.13–14 ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sections 2695.13–2695.14 — Severability and Compliance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>&sect; 2695.13 (Severability):</strong> If one section is struck down, the rest
        remain in force.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>&sect; 2695.14 (Compliance Date):</strong> Insurers have 90 days to comply with
        amendments. The regulations apply to all claims handling after the compliance date —
        not just claims filed after that date. If you have an existing claim and the regulations
        are amended, your insurer must comply with the new requirements on your existing claim.
      </p>

      {/* ───────── PUTTING IT ALL TOGETHER ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Putting It All Together
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        These regulations are not abstract legal theory. They are practical tools that
        policyholders and Public Adjusters use to advance claims. A common framework looks
        like this:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Written demands, citing the regulation.</strong> Carriers rarely volunteer
          compliance. Many policyholders make every meaningful request in writing, citing the
          specific section number. In our experience, a written demand either prompts a
          substantive response — sometimes a concession, sometimes a reinspection — or it
          creates a documented record that may support a CDI complaint or any future
          bad-faith analysis.
        </li>
        <li>
          <strong>Track every deadline.</strong> From the moment a claim is filed, a simple log
          tracking dates against the 15-day, 40-day, and 30-day deadlines builds a record. Each
          missed deadline may be a separately documentable violation.
        </li>
        <li>
          <strong>The contractor-name requirement.</strong> Once the insurer produces an
          estimate, an insured may request — under §2695.9(d)(2) — the name of a contractor
          who will do the work for that amount. Having a competing contractor estimate
          strengthens the request, but the trade-standards and local-market requirements in
          §2695.9(d)&apos;s opening paragraph give an insured independent grounds to challenge
          the estimate even without one.
        </li>
        <li>
          <strong>Labor depreciation.</strong> Many insureds review the ACV calculation line by
          line. Where labor is depreciated, citing §2695.9(f)(1) and requesting correction is a
          common approach — and the math here is straightforward: labor on field repairs is not
          subject to depreciation in California.
        </li>
        <li>
          <strong>Documents the insurer is required to provide.</strong> The Fair Claims
          regulations give insureds specific document rights — for example, §2695.9(d) requires
          the insurer to supply a copy of any written scope or estimate the settlement is
          based on; §2695.7(b)(1) requires written denials to state the factual and legal
          bases. A written request under §2695.5(b) starts the 15-day response clock for these
          materials.
        </li>
        <li>
          <strong>Document violations for the future.</strong> Even where a single violation
          does not amount to bad faith, a <em>pattern</em> of violations — especially with
          documented written demands that went unanswered — is the kind of record many
          plaintiff attorneys point to under <em>Jordan v. Allstate</em> when evaluating bad
          faith, and under <em>Egan v. Mutual of Omaha</em> when evaluating potential punitive
          damages. The real value of this documentation usually shows up later, if the dispute
          escalates to litigation.
        </li>
        <li>
          <strong>File CDI complaints when warranted.</strong> Cite specific regulation numbers,
          dates, and facts. A complaint that references &ldquo;violation of 10 CCR
          &sect; 2695.7(b) — failure to accept or deny within 40 days of proof of claim
          submitted on [date]&rdquo; carries far more weight than &ldquo;my insurer is being
          unfair.&rdquo; See our guide on{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] hover:underline">filing a CDI complaint</Link>.
        </li>
      </ol>

      <CalloutBox variant="important" title="Key Takeaway">
        <p className="mb-2">
          Regulatory violations are not automatically bad faith — but they are evidence of it.
          Even when they fall short of bad faith, they demonstrate the insurer&apos;s general
          disregard for doing things correctly, and they provide concrete leverage in
          negotiations and CDI complaints.
        </p>
        <p>
          The key is <strong>documentation through written demands</strong>. Many regulations
          are not violated until the insured makes a request and the insurer fails to comply.
          The insured who puts everything in writing forces the insurer to either follow the
          regulations or create a documented violation. Either outcome benefits the
          policyholder.
        </p>
      </CalloutBox>

      {/* ───────── Template Letters Link ───────── */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Free Template Demand Letters
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          We have created free, downloadable template letters for the most important
          regulatory demands discussed in this article — including the contractor name
          requirement, 15-day response demand, coverage disclosure request, and more.
          Each letter cites the specific regulation and is ready to customize with your
          claim details.
        </p>
        <Link
          href="/letters"
          className="inline-block text-[#2E74B5] hover:text-[#1F3964] font-semibold text-sm transition-colors"
        >
          Browse All Template Letters &rarr;
        </Link>
      </div>

      {/* ───────── CTA ───────── */}
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
