import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Soot and Char Lab Testing: The Evidence That Wins Smoke Claims After Aliff',
  description:
    "How laboratory testing for soot, char, and combustion byproducts proves a smoke claim — and why the post-Aliff, post-Another Planet standard makes lab-detectable contamination the evidence that matters.",
  summary:
    "For years carriers denied smoke claims on the theory that if nothing was visible, nothing was damaged. Two California developments — the Supreme Court's Another Planet standard and the trial-court Aliff ruling — reframed the question to demonstrable physical alteration, which is exactly what soot and char lab testing measures. This article covers what testing looks at, the legal frame, how testing enters a claim on both sides, and the documents an insured may request.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster on the role of laboratory testing in smoke-damage claims. It is
          not legal advice, and it does not analyze coverage on any specific policy.
          Whether a particular loss is covered, and whether any particular test
          result meets a legal standard, are questions that depend on the policy
          language, the facts, and current case law &mdash; which on smoke damage is
          evolving. For legal questions about a specific claim, the reader should
          consult a licensed California attorney who handles insurance coverage
          disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A practitioner&apos;s guide to what soot and char laboratory testing
          actually measures, why two recent California developments &mdash; the
          Supreme Court&apos;s decision in <span className="not-italic">Another
          Planet</span> and the trial-court ruling in <span className="not-italic">
          Aliff v. California FAIR Plan</span> &mdash; made that measurement the
          center of gravity in smoke-damage disputes, and how testing evidence enters
          a claim on both sides.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke damage has always been the hardest property loss to prove, for one
        stubborn reason: the damage that matters most is usually the damage no one
        can see. Fire leaves char and collapse. Water leaves stains and swelling.
        Wildfire smoke leaves a deposition of fine particulate &mdash; soot, char
        fragments, ash, and combustion residues &mdash; that settles into ductwork,
        insulation, soft goods, and wall cavities and often reveals nothing to a
        walk-through inspection. For years, that invisibility was the whole ballgame.
        A carrier could send an adjuster who saw no soot on the walls, wrote
        &ldquo;no damage observed,&rdquo; and closed the file. This site&apos;s
        parent article on{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          smoke damage insurance claims
        </Link>{' '}
        covers the coverage framework, the remediation standards, and the common
        minimizing tactics in depth. This article is narrower and more technical: it
        is about the evidence &mdash; laboratory testing &mdash; that answers the
        &ldquo;we don&apos;t see anything&rdquo; denial on its own terms.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Testing Became the Battleground
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The old denial had a certain surface logic. If the policy covers physical
        damage, and nothing physical is visible, then &mdash; the argument ran
        &mdash; there is nothing to pay. The trouble was that the argument confused
        two different things: what a person can <em>see</em>, and what has physically
        <em> happened</em> to the property. Smoke deposition is a physical event
        whether or not it registers on the human eye. What changed the landscape is
        that California law now frames the coverage question around demonstrable
        physical alteration rather than visibility &mdash; and demonstrable physical
        alteration is precisely what laboratory testing exists to measure.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That reframing is recent, and it is the reason testing moved from a
        nice-to-have to the center of the dispute. Before 2024, an insured with a
        smoke claim and a carrier saying &ldquo;we see nothing&rdquo; was often stuck
        in an argument about perception. After the developments described below, the
        argument shifted to data: is there a distinct, demonstrable physical
        alteration of the property, and does the testing show it? That is a question
        with an answer, and the answer lives in a laboratory report rather than in an
        adjuster&apos;s visual impression. The rest of this article follows that
        shift &mdash; first into what the testing looks at, then into the legal frame
        that gives it weight.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Soot and Char Lab Testing Actually Looks At
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It helps to be concrete about what &ldquo;testing&rdquo; means, described at
        the level any practitioner in this field would recognize. The categories
        below reflect general industry practice as the author has encountered it on
        California smoke claims; the specifics of any protocol are for the qualified
        professional performing the work, and results always depend on how, where,
        and by whom samples were collected.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Surface Sampling
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Much smoke testing begins at surfaces, because that is where settled
        particulate accumulates. In general practice, samples are collected from
        representative surfaces &mdash; commonly by wipe sampling or by lifting
        deposited material with an adhesive medium &mdash; and sent to a laboratory
        for analysis under magnification. The point is not that a surface looks dirty;
        it is that a laboratory can examine what was collected and characterize it.
        Sample location matters enormously. Material collected from a high ledge, the
        top of a door casing, or inside a closet tends to tell a different story than
        material wiped from a frequently cleaned countertop, because routine
        housekeeping removes the record from the surfaces people touch and leaves it on
        the surfaces they do not.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Particle Identification Under Microscopy
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The analytical heart of soot and char testing is looking at the collected
        particles under magnification and identifying what they are. Combustion
        produces characteristic byproducts &mdash; soot, charred and partially
        combusted fragments, ash &mdash; that a trained analyst can distinguish from
        the ordinary mix of skin cells, fibers, pollen, and mineral dust that makes up
        everyday household settled dust. That distinction is the whole question in many
        smoke claims. A home always contains <em>some</em> dust; the issue is whether
        the material present includes the fingerprints of combustion at levels beyond
        what a comparable un-impacted environment would show. Describing the categories
        this way is deliberate: the specific analytical methods and any numerical
        thresholds are matters for the qualified laboratory and industrial hygienist,
        not something a public adjuster or a website should present as a legal
        standard.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Distinguishing Wildfire Combustion Byproducts From Ordinary Residue
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A recurring dispute in wildfire smoke claims is whether what testing found is
        &ldquo;just normal dust&rdquo; or the residue of a specific fire event. This is
        exactly the kind of question laboratory analysis is built to address, because
        wildfire combustion &mdash; particularly the urban-interface fires that burn
        structures, vehicles, and their contents &mdash; produces a particle profile
        that is not the same as ordinary indoor soot from cooking or candles. Whether a
        given sample reflects a wildfire event, ordinary living, or some combination is
        a professional judgment for the analyst, informed by particle morphology,
        composition, and the pattern across sample locations. The practical point for a
        claim is that the &ldquo;it&apos;s just dust&rdquo; response is testable rather
        than something either side has to assert.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HVAC, Insulation, and Contents
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because fine particulate travels and settles in concealed places, testing on a
        thorough smoke claim generally reaches beyond finished surfaces. HVAC systems
        circulate air through ductwork and are, in effect, reservoirs and distribution
        networks for whatever entered the home. Attic and wall-cavity insulation traps
        particulate that never reaches an occupied room. Porous contents &mdash;
        upholstery, textiles, carpet and padding &mdash; hold deposited material deep in
        their fibers. A testing scope that samples only easily reached, frequently
        cleaned surfaces can miss the places where contamination concentrates, which is
        one reason the <em>location and breadth</em> of sampling &mdash; not just the
        headline result &mdash; is so often where these disputes actually turn.
      </p>

      <CalloutBox variant="tip" title="Test Before Cleaning">
        <p>
          Testing measures what is present at the moment of sampling. Cleaning a
          surface, running the HVAC system, or beginning remediation before baseline
          samples are collected removes the very record the testing would have
          documented. As a matter of general practice, the sequence that preserves the
          evidence is to establish a baseline first &mdash; a point discussed further
          in the{' '}
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
            parent smoke-damage article
          </Link>
          .
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Frame: Why the Standard Now Fits the Evidence
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of the testing above would matter to a claim if California law still asked
        only whether damage was visible. Two developments changed the question being
        asked &mdash; and it is worth being scrupulous about exactly what each one is,
        because the honest version is more persuasive than an overstated one. This
        site&apos;s article on{' '}
        <Link href="/resources/policy-vs-law" className="text-[#2E74B5] underline">
          how policy language conflicts with California law
        </Link>{' '}
        covers both in the broader context of when a policy provision falls below what
        the law requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Another Planet</em>: The Standard (From a Case the Insurer Won)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The doctrinal engine is <em>Another Planet Entertainment, LLC v. Vigilant
        Insurance Co.</em> (2024) 15 Cal.5th 1106, a decision of the{' '}
        <strong>California Supreme Court</strong>. It is important to be candid about
        what that case decided: it was a COVID-19 business-interruption dispute, and
        the <em>insurer won</em>. The Court held that the pandemic&apos;s interference
        with the use of the insured&apos;s property was not &ldquo;direct physical loss
        or damage,&rdquo; and it rejected the policyholder&apos;s claim. Smoke
        claimants do not cite <em>Another Planet</em> for its result. They cite it for
        the <em>standard</em> it announced along the way &mdash; a standard that, read
        honestly, helps them.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In defining &ldquo;direct physical loss or damage,&rdquo; the Court held that
        the phrase requires a <strong>&ldquo;distinct, demonstrable, physical
        alteration&rdquo;</strong> of property &mdash; but that the alteration{' '}
        <strong>need not be permanent</strong> and <strong>need not be visible to the
        naked eye</strong>. Microscopic or otherwise lab-detectable alteration can
        satisfy the standard, provided it works some injury to or impairment of the
        property as property. The reason the pandemic claim failed was not that the
        alteration was invisible; it was that loss of <em>use</em> from a virus in the
        air did not physically alter the premises at all. That distinction is exactly
        why the same standard cuts the other way for smoke: soot and char deposition is
        a physical alteration of the surfaces and materials it lands on and penetrates,
        even when &mdash; especially when &mdash; it is detectable only by testing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Aliff v. California FAIR Plan</em>: The Standard Applied to Smoke
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If <em>Another Planet</em> supplies the standard, <em>Aliff v. California FAIR
        Plan Association</em> is the ruling that applied it to a smoke-damage policy
        head-on. In <em>Aliff</em> (Los Angeles Superior Court, Case No. 21STCV20095,
        Judge Stuart M. Rice, ruling June 2025), the court &mdash; in a summary
        adjudication in part &mdash; addressed the California FAIR Plan&apos;s
        definition of covered smoke damage. That definition required damage to be
        &ldquo;visible to the unaided human eye&rdquo; or detectable &ldquo;by the
        unaided human nose of an average person, and not by&hellip; laboratory
        testing.&rdquo; In other words, the policy tried to write laboratory-detectable
        contamination <em>out</em> of coverage by definition.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that this restriction unlawfully narrowed coverage below the
        California standard form fire policy prescribed by Insurance Code
        &sect;&sect;&nbsp;2070&ndash;2071. Reasoning from the <em>Another Planet</em>
        standard, the court explained that a physical alteration detectable by
        laboratory testing &mdash; a microscopic alteration &mdash; can qualify as
        physical loss, so a policy that excluded exactly that category was offering less
        than the law requires. The practical effect for testing is direct: a policy
        definition designed to make lab results irrelevant was held to run below the
        statutory floor, which turns the lab result back into evidence that counts.
      </p>

      <CalloutBox variant="warning" title="Aliff Is a Trial-Court Ruling, Not Binding Precedent">
        <p>
          It matters to state this plainly. <em>Aliff</em> is a{' '}
          <strong>trial-court ruling</strong> &mdash; a summary adjudication in part
          from the Los Angeles Superior Court. It is <strong>not published appellate
          authority and does not bind other courts</strong>. It is persuasive
          authority only. Another policyholder facing the same policy language may have
          to make the same arguments in their own case rather than simply pointing to{' '}
          <em>Aliff</em> as settled law. The binding piece of the analysis is the{' '}
          <em>Another Planet</em> standard from the California Supreme Court;{' '}
          <em>Aliff</em> is a well-reasoned application of it to smoke, not a
          substitute for it. Whether either authority controls a particular claim is a
          legal question for an attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Put the two together and the logic is straightforward. The binding standard
        does not require visible damage; it requires a distinct, demonstrable physical
        alteration, which need not be permanent and need not be seen with the eye. Soot
        and char deposition that a laboratory can identify and characterize is squarely
        the kind of evidence that speaks to that standard. The testing does not
        <em> prove coverage</em> by itself &mdash; coverage is a legal conclusion that
        depends on the whole policy and the facts &mdash; but it supplies the factual
        showing the standard now asks for, in a form a visual walk-through never could.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Testing Enters the Claim From Both Sides
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A point that gets lost in advocacy writing is that testing is a tool, not a
        team. Laboratories analyze what they are given; the analysis is only as good as
        the sampling plan behind it, and a sampling plan reflects the judgment &mdash;
        and sometimes the incentives &mdash; of whoever designed it. On a contested
        smoke claim, testing typically shows up from two directions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Carrier-Commissioned Testing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers commission testing too, and often. That is not inherently a problem
        &mdash; testing is exactly what a thorough investigation should include. The
        systemic issue, when it arises, is not that testing was done but <em>how it was
        scoped</em>. A protocol that pulls a handful of samples from readily accessible,
        frequently cleaned surfaces, skips the HVAC interior and concealed cavities, and
        omits porous contents can produce a &ldquo;no significant contamination&rdquo;
        conclusion that says more about where the samples were taken than about the
        condition of the home. Framed at the level of the industry rather than any one
        company: a testing scope narrow enough to be unlikely to find contamination will
        tend not to find it, and a &ldquo;no damage&rdquo; letter resting on that kind of
        scope is only as strong as the sampling design underneath it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Independent Testing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insured can commission independent testing as well, through a qualified
        industrial hygienist or environmental consultant. Independent testing is
        valuable not because it is guaranteed to reach a different conclusion, but
        because it puts a second, differently designed sampling plan on the record.
        When two qualified analyses examine the same home and reach different results,
        the disagreement is usually traceable to methodology &mdash; where samples were
        taken, how many, from which materials, and analyzed how. That kind of
        disagreement is not a stalemate; it is a defined scope dispute, which is a
        problem California&apos;s claim process already knows how to handle.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Where the disagreement is genuinely about the amount of loss rather than
        whether the peril is covered at all, it can fall within the kind of dispute the
        policy&apos;s appraisal mechanism is built for. This site covers the boundaries
        of that process in its guides to the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss
        </Link>{' '}
        and to{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal
        </Link>
        . Whether a particular smoke dispute is an amount-of-loss question suited to
        appraisal, or a coverage question that is not, is itself a frequently contested
        line &mdash; and one worth running past counsel before assuming either answer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Documents Angle: A &ldquo;No Damage&rdquo; Result Is Testable
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier&apos;s testing does not exist in a vacuum, and its conclusion is not
        the end of the inquiry &mdash; because the underlying work is documented, and in
        California the insured can generally ask for it. The laboratory report itself,
        the sampling protocol, the chain-of-custody records, the map or list of sample
        locations, the analyst&apos;s findings: these are documents that relate to the
        evaluation of the loss, which places them within the claim-related documents an
        insured may request under Insurance Code &sect;&nbsp;2071. This site&apos;s
        article on{' '}
        <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
          the claim file you never see
        </Link>{' '}
        covers that production duty and the techniques for exercising it in detail. The
        production obligation runs on a request &mdash; the insurer must provide
        claim-related documents within 15 calendar days of a request &mdash; and while
        putting the request in writing is sound practice for creating a clean record,
        the statutory trigger is the request itself, not the writing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Once the underlying data is in hand, a &ldquo;no damage&rdquo; conclusion built
        on a thin or badly placed sample set becomes testable rather than
        take-it-or-leave-it. If the report rests on a small number of samples drawn from
        undamaged or frequently cleaned areas, and never touched the HVAC interior,
        the insulation, or the contents, that is visible on the face of the sample
        locations. The insured &mdash; or a qualified consultant reviewing the file
        &mdash; can evaluate whether the sampling supports the conclusion the letter
        drew from it. A conclusion is only as reliable as the sampling design and data
        behind it, and California law generally lets the insured see that design and
        data.
      </p>

      <CalloutBox variant="important" title="Third-Party Testing Does Not Shift the Insurer's Responsibility">
        <p>
          Carriers sometimes treat a lab&apos;s conclusion as the final word &mdash;
          the reasoning being that an independent laboratory reached it, so the
          disagreement belongs with the lab. California&apos;s claim-handling
          regulations do not support that deflection. The investigation duty stays
          with the insurer: under 10 CCR &sect;&nbsp;2695.7(d), an insurer must conduct
          and diligently pursue a <em>thorough, fair and objective</em> investigation,
          and it may not deny a claim on the basis of an inadequate one. And under 10
          CCR &sect;&nbsp;2695.1(g), the fact that information relied upon in valuing a
          claim came from a third party &mdash; here, a testing laboratory &mdash; does
          not absolve the insurer of its own responsibilities under the regulations. A
          carrier that commissioned a narrowly scoped test still owns the investigation
          the test was part of.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Honest Framing: What Testing Evidence Actually Wins
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth being candid about what independent testing does and does not
        accomplish, because overselling it does no one any favors. A lab report does not
        flip a denied claim to paid by itself, and it does not settle the legal question
        of coverage. What it changes is the nature of the conversation. A denial that
        rested on &ldquo;we don&apos;t see anything&rdquo; is answered, on its own
        terms, by data showing that something is measurably there. The realistic outcome
        is not a dramatic reversal; it is a re-evaluation with real evidence on the
        table &mdash; a re-inspection, a supplemental review, a second look at a file
        that was closed on a visual impression.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, that is often enough to move a claim. A carrier holding a
        &ldquo;no visible damage&rdquo; position that is easy to maintain against a
        policyholder with no data finds the same position much harder to maintain once
        qualified testing documents combustion byproducts in the ductwork and the wall
        cavities. Positions soften; scopes get revisited; disputed items get a second
        review. The point of testing, in the post-<em>Another Planet</em>,
        post-<em>Aliff</em> landscape, is that it supplies exactly the kind of showing
        the governing standard now asks for &mdash; which is why a claim backed by
        credible independent testing tends to be evaluated on its merits rather than
        dismissed at the threshold.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Where the dispute is not really about the evidence but about what the policy
        covers &mdash; whether a definition is enforceable, whether a limitation falls
        below the standard form, whether a given loss meets the legal standard &mdash;
        those are legal questions, and they belong with a licensed California attorney
        who handles coverage disputes. Testing builds the factual record. What that
        record means as a matter of coverage law is a separate question, and a lawyer
        is the right person to answer it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does a soot or char lab test prove a smoke insurance claim?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Testing supplies evidence; it does not, by itself, prove coverage. A laboratory
        can identify and characterize soot, char, and combustion byproducts in samples
        collected from a home, which speaks directly to the standard California law now
        uses for &ldquo;direct physical loss or damage&rdquo; &mdash; a distinct,
        demonstrable physical alteration that need not be visible to the naked eye. But
        whether a given loss is covered is a legal conclusion that depends on the whole
        policy and the facts, and it is a question for an attorney rather than a
        laboratory. What testing does is convert a &ldquo;we see nothing&rdquo; denial
        into a factual question with a measurable answer, which is where these claims
        are increasingly decided.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How can smoke damage be proven when nothing is visible?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Through laboratory analysis rather than visual inspection. Fine wildfire
        particulate settles into ductwork, insulation, soft goods, and wall cavities and
        frequently leaves nothing for the eye to catch. Samples collected from
        representative surfaces and concealed areas can be examined under magnification,
        where a trained analyst can distinguish combustion byproducts from ordinary
        household dust. Under the standard the California Supreme Court announced in{' '}
        <em>Another Planet Entertainment, LLC v. Vigilant Insurance Co.</em> (2024) 15
        Cal.5th 1106, a physical alteration need not be visible to the naked eye to
        count &mdash; lab-detectable alteration can qualify &mdash; which is why testing
        is the tool suited to invisible contamination.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What did the <em>Aliff</em> ruling say about laboratory testing for smoke
        damage?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Aliff v. California FAIR Plan Association</em> (Los Angeles Superior
        Court, Case No. 21STCV20095, Judge Stuart M. Rice, ruling June 2025), the court
        addressed a policy definition that required smoke damage to be visible to the
        unaided human eye or detectable by the unaided human nose of an average person,
        and not by laboratory testing. The court held, in a summary adjudication in
        part, that this restriction unlawfully narrowed coverage below the California
        standard form fire policy under Insurance Code &sect;&sect;&nbsp;2070&ndash;2071,
        reasoning that a lab-detectable, microscopic alteration can qualify as physical
        loss. Two cautions matter: <em>Aliff</em> is a trial-court ruling and is
        persuasive authority only, not binding precedent; and the binding piece of the
        reasoning is the <em>Another Planet</em> standard it applied. Whether it
        controls any specific claim is a legal question for counsel.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The carrier&apos;s testing found no damage. Can that be challenged?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A &ldquo;no damage&rdquo; conclusion is only as reliable as the sampling behind
        it, and in California the insured can generally see that sampling. The
        laboratory report, the sampling protocol, chain-of-custody records, and the list
        of sample locations relate to the evaluation of the loss and fall within the
        claim-related documents an insured may request under Insurance Code
        &sect;&nbsp;2071, which the insurer must provide within 15 calendar days of a
        request. If the underlying data shows a handful of samples from undamaged or
        frequently cleaned areas with no testing of the HVAC interior, insulation, or
        contents, the conclusion can be evaluated against the sampling that produced it.
        Reliance on a third-party laboratory does not absolve the insurer of its
        investigation duty under 10 CCR &sect;&nbsp;2695.7(d) or its responsibility
        under 10 CCR &sect;&nbsp;2695.1(g).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Should the insured get independent testing, or rely on the carrier&apos;s?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        That is a practical judgment rather than a legal rule, and this article does not
        give directions &mdash; but the general logic is that independent testing puts a
        second, differently designed sampling plan on the record. When two qualified
        analyses reach different results, the disagreement usually traces to methodology,
        and a defined methodological dispute is one the claim process is equipped to
        work through, sometimes including the policy&apos;s{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal
        </Link>{' '}
        mechanism where the dispute is genuinely about the amount of loss. Timing also
        matters: testing measures what is present when samples are taken, so a baseline
        established before cleaning or remediation preserves a record that a later test
        cannot recover.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
            Smoke Damage Insurance Claims in California
          </Link>{' '}
          &mdash; the parent article: coverage, remediation standards, and the common
          minimizing tactics on smoke claims
        </li>
        <li>
          <Link href="/resources/policy-vs-law" className="text-[#2E74B5] underline">
            When Insurance Policy Language Conflicts with California Law
          </Link>{' '}
          &mdash; the broader framework, including the standard form fire policy floor
          and the <em>Aliff</em> ruling in context
        </li>
        <li>
          <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
            The Claim File You Never See
          </Link>{' '}
          &mdash; how to obtain the carrier&apos;s testing reports, protocols, and
          sample data under Insurance Code &sect;&nbsp;2071
        </li>
        <li>
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
            Scope of Loss
          </Link>{' '}
          &mdash; how competing evaluations of what a loss includes get resolved
        </li>
        <li>
          <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
            Appraisal
          </Link>{' '}
          &mdash; the mechanism for amount-of-loss disputes, and where it does and does
          not reach
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a long time, the invisibility of smoke damage was the carrier&apos;s best
        argument. The reframing of the coverage question &mdash; from what an adjuster
        can see to whether the property has been demonstrably, physically altered
        &mdash; turned that invisibility from a defense into a testing problem. Soot and
        char laboratory analysis is the tool built for exactly that question, and in the
        post-<em>Another Planet</em>, post-<em>Aliff</em> landscape, it is increasingly
        the evidence that decides whether a smoke claim is evaluated on its merits or
        dismissed at the door.
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
