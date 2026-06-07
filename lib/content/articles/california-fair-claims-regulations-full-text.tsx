import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Fair Claims Settlement Practices Regulations — Verbatim Text (Property Provisions) and Practical Guide',
  description:
    'The verbatim text of the property-relevant provisions of 10 CCR §§ 2695.1–2695.14, the California Fair Claims Settlement Practices Regulations, with history, enforcement, interplay with the Standard Fire Policy, and how practitioners use them. A reference for policyholders, Public Adjusters, and attorneys.',
  summary:
    'A practitioner reference to California\'s Fair Claims Settlement Practices Regulations (10 CCR §§ 2695.1–2695.14), with the verbatim text of the property-relevant provisions and the history, enforcement framework, and case law context behind them. The automobile-specific sections (§§ 2695.8, 2695.8.1, 2695.8.2, 2695.8.5) are outside the scope of this property-focused site and are linked to the CDI primary source.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public Adjuster.
          It is not legal advice. The regulations reproduced below have been transcribed
          from the California Department of Insurance and Cornell Legal Information
          Institute publications. For any specific claim or legal question, verify the
          current text against the California Department of Insurance&rsquo;s official
          publication at{' '}
          <a
            href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            insurance.ca.gov
          </a>{' '}
          and consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations &mdash; codified at Title 10
        of the California Code of Regulations, sections 2695.1 through 2695.14 &mdash; are the
        rules every insurance company doing business in California must follow when handling
        claims. They establish deadlines, documentation requirements, disclosure obligations,
        and prohibited practices. They apply to every line of insurance and every type of
        claim except for narrow categories carved out by the regulations themselves. They
        are why a California claims department has to respond, acknowledge, investigate,
        decide, and pay on a defined schedule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article serves two purposes. The first is to provide the verbatim full text of
        each section on a single page so a policyholder, Public Adjuster, or attorney can
        cite them precisely without hunting through the Department of Insurance website.
        The second is to explain the practical context: where these regulations came from,
        how they interact with the Insurance Code, who enforces them, and why a public
        adjuster citing a specific subsection in a letter often moves a stalled claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        A Short History of the Fair Claims Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code section 790.03(h) was added in 1959 as part of the Unfair
        Insurance Practices Act, originally modeled on the National Association of Insurance
        Commissioners&rsquo; model act. The statute enumerated sixteen specific claims
        settlement practices that, when knowingly committed or performed with such frequency
        as to indicate a general business practice, are unfair. The statute established the
        substantive prohibition but did not say what compliance with each prohibition
        actually looked like in practice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Insurance Commissioner was authorized under section 790.10 to promulgate
        regulations interpreting and implementing section 790.03(h). The first version of
        the Fair Claims Settlement Practices Regulations was adopted in 1992 and has been
        amended substantially several times since. A significant rewrite occurred in
        2003. Emergency amendments followed in 2009. Further amendments have been made
        as recently as the late 2010s and early 2020s, including provisions tailored to
        disaster-related claims handling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The amendments matter for citation purposes. When subsections are added or
        reorganized, every letter downstream of the change shifts. A reference book or
        article published before a particular amendment can cite what is now an incorrect
        subsection letter for the same provision. That is why the regulations have to be
        verified against the current text every time a specific subsection is cited.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Statutes, Regulations, Case Law &mdash; Where the Regulations Fit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California insurance law has three sources: statutes enacted by the Legislature
        (primarily the Insurance Code), regulations adopted by the Insurance Commissioner
        under statutory authority (Title 10 of the California Code of Regulations), and
        case law interpreting both. The Fair Claims regulations sit in the middle layer.
        They are not enacted by the Legislature, but they have the force of law because
        the Legislature authorized the Commissioner to promulgate them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California administrative law, quasi-legislative regulations adopted by an
        agency to which the Legislature has confided regulatory authority generally have
        the force of law. The California Supreme Court restated this principle in{' '}
        <em>Yamaha Corp. of America v. State Bd. of Equalization</em> (1998) 19 Cal.4th
        1, 7&ndash;8, explaining that quasi-legislative regulations &ldquo;may not be
        set aside unless the agency&rsquo;s determination is plainly without reasonable
        foundation.&rdquo; California Government Code section 11342.2 imposes the
        substantive limit: a regulation is &ldquo;valid&rdquo; only if it is
        &ldquo;consistent and not in conflict with the statute and reasonably necessary
        to effectuate the purpose of the statute.&rdquo; If a regulation went beyond
        what the enabling statute authorized, a court could invalidate it. Within those
        limits, however, a properly adopted regulation is binding on every party subject
        to the regulator&rsquo;s authority &mdash; here, every insurer licensed in
        California.
      </p>
      <CalloutBox variant="info" title="Force of Law &mdash; in Plain English">
        <p>
          The Fair Claims regulations have the force of law. An insurer that violates
          them violates a binding regulatory standard. But the question of whether a
          regulatory violation creates a private cause of action &mdash; whether a
          policyholder can sue directly under the regulation &mdash; is a separate
          question, addressed below in the discussion of <em>Moradi-Shalal v.
          Fireman&rsquo;s Fund</em>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Interplay with the Standard Fire Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code sections 2070&ndash;2071 set forth the Standard Fire
        Policy, the statutory form of fire insurance that every fire policy issued in
        California must conform to. Section 2070 requires that every fire insurance policy
        shall be in the standard form specified in the statute. Section 2071 sets out the
        actual policy form, including the suit-limitation clause, the appraisal clause,
        the proof-of-loss requirement, and the loss-settlement provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Standard Fire Policy is the floor. A carrier&rsquo;s policy may add protections
        for the insured &mdash; broader coverage, more generous time limits, fewer
        exclusions &mdash; but it may not subtract from the Standard Fire Policy&rsquo;s
        baseline. Where a carrier&rsquo;s proprietary policy form attempts to impose a
        condition or limitation that conflicts with the Standard Fire Policy, the statute
        controls.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Fair Claims regulations interact with the Standard Fire Policy in two
        practical ways. First, the regulations apply to the handling of a claim under any
        policy in California, including a Standard Fire Policy. The 40-day decision
        deadline, the 30-day payment deadline, the disclosure duty, and every other
        regulatory standard apply to a fire claim just as they apply to any other claim.
        Second, several regulatory standards reinforce or operationalize provisions in the
        Standard Fire Policy. The appraisal-procedure constraint in &sect; 2695.9(e), for
        example, expressly cross-references Insurance Code &sect; 2071, the Standard Fire
        Policy&rsquo;s appraisal clause.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Who Enforces the Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI), headed by the elected Insurance
        Commissioner, enforces the Fair Claims regulations. Enforcement runs through
        several mechanisms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Market conduct examinations</strong> are scheduled examinations of an
        insurer&rsquo;s claims handling practices. CDI examiners review a sample of claim
        files, evaluate compliance with each regulatory standard, and issue findings.
        Patterns of non-compliance can result in formal enforcement action, including
        administrative fines, mandated corrective action plans, and in extreme cases
        license restrictions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Consumer complaints</strong> are CDI&rsquo;s most common enforcement
        trigger. A policyholder who believes an insurer has violated the regulations may
        file a complaint with the Department, which investigates and, depending on the
        circumstances, mediates a resolution, issues a formal finding of violation, or
        refers the matter for administrative enforcement. See our guide on{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
          filing a CDI complaint
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Administrative penalties</strong> are addressed in &sect; 2695.12 and in
        Insurance Code &sect; 790.035, which sets maximum civil penalties of $5,000 per
        act for unintentional violations and $10,000 per act for willful violations. The
        Commissioner determines penalty amounts based on the fourteen factors listed in
        &sect; 2695.12(a), including the willfulness of the conduct, prior violations,
        remedial measures, and the harm caused.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These penalties are payable to the State of California, not to the policyholder
        whose claim was mishandled. Under <em>Moradi-Shalal v. Fireman&rsquo;s Fund
        Insurance Companies</em> (1988) 46 Cal.3d 287, there is no private right of
        action under &sect; 790.03 or the regulations promulgated under it, so a
        regulatory violation does not by itself give the insured a direct lawsuit for
        damages. What the violation does for the insured is supply leverage in the
        claim and, if the dispute escalates, supply evidence in a separate common-law
        bad-faith action or other independently actionable theory pursued by coverage
        counsel.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CDI Bulletins and Notices &mdash; The Layer Between Regulation and Enforcement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the formal regulations, the Department of Insurance issues frequent
        guidance documents commonly called bulletins or, more formally, notices. These
        are not themselves regulations. They are the Commissioner&rsquo;s interpretation
        of how existing regulatory standards apply to particular situations: post-wildfire
        smoke-damage claims, COVID-19 business interruption claims, post-mudslide
        coverage analysis, ALE handling during prolonged displacement, and many others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bulletins do not have the force of law in the same way a properly adopted
        regulation does. A bulletin cannot create a new substantive obligation. But
        bulletins do represent the Commissioner&rsquo;s announced enforcement position,
        and an insurer that ignores a bulletin on a particular topic increases its
        regulatory exposure. In a CDI complaint or market conduct exam, the Department
        will weigh whether the carrier&rsquo;s handling was consistent with the
        Department&rsquo;s published guidance on that topic.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Examples include the 2025 CDI bulletin on flood, mudslide, and earth movement
        claims following wildfires; the post-2017&ndash;2018 wildfire bulletins on
        ALE handling and advance payments; and various smoke-damage and wildfire-related
        coverage guidance documents. Public adjusters and plaintiff attorneys cite
        these bulletins alongside the formal regulations when pressing a carrier on a
        specific issue.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Public Adjusters and Plaintiff Attorneys Use the Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a public adjuster representing a policyholder, the Fair Claims regulations
        are the working framework of nearly every carrier interaction. A demand letter
        might cite &sect; 2695.7(b) for the 40-day decision deadline, &sect; 2695.5(e)
        for the 15-day acknowledgment requirement, &sect; 2695.4(a) for the affirmative
        disclosure duty, and &sect; 2695.9(a)(2) for the matching requirement. The
        regulation citations do several practical things at once.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, they signal that the policyholder&rsquo;s representative knows the rules.
        A carrier that receives a letter citing the specific subsection it is violating
        will often respond differently than to a generic complaint. Second, they create
        a documented record. Each cite, each missed deadline, each unanswered request is
        evidence the Department of Insurance can examine if a complaint is later filed.
        Third, they preserve the issue for litigation. If the dispute eventually reaches
        court, every documented regulatory violation becomes evidence of unreasonable
        claims handling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaintiff attorneys use the regulations similarly in correspondence and in
        court. Demand letters frequently catalog each regulatory violation the carrier
        has committed during the life of the claim. In trial, regulatory violations
        may be admitted, subject to the usual rules on pleading, foundation, relevance,
        and Evidence Code objections, as evidence of unreasonable conduct and of
        failure to meet the trade standards governing claims handling, and, where
        otherwise supported by the facts and law, may be argued in connection with
        bad-faith damages issues.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every regulatory violation translates into harm an insured can recover for.
        A carrier can breach the 15-day acknowledgment requirement under
        &sect; 2695.5(e), or any of several other procedural standards, and still pay
        the claim in full and on time. In that situation the procedural violation
        existed but the insured has no damages flowing from it, and the violation by
        itself is unlikely to support a lawsuit. The violations that matter most for
        an individual claim are the ones tied to underpayment, denial, or delayed
        payment &mdash; the violations the insured can point to as the cause of
        measurable harm.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even violations that did not directly cost the insured anything can still
        matter as pattern evidence. A series of procedural violations in a single file
        can reflect a carrier&rsquo;s recklessness or institutional disregard for the
        regulatory framework. That kind of pattern can be relevant when a jury
        evaluates overall reasonableness in a bad-faith case, and it is the kind of
        pattern the Department of Insurance examines in market conduct examinations,
        where the inquiry is about the carrier&rsquo;s claims handling as a whole
        rather than the damages on any one file.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Regulatory Violations Are Not &ldquo;Bad Faith Per Se&rdquo; &mdash; But They Are Strong Evidence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court decided in <em>Moradi-Shalal v. Fireman&rsquo;s Fund
        Insurance Companies</em> (1988) 46 Cal.3d 287 that there is no private right of
        action under Insurance Code &sect; 790.03 for either first-party or third-party
        claimants. That decision overruled <em>Royal Globe Insurance Co. v. Superior
        Court</em> (1979) 23 Cal.3d 880, which had created a private cause of action.
        After <em>Moradi-Shalal</em>, a policyholder cannot sue an insurer directly
        under section 790.03 or the regulations promulgated under it. A claim has to be
        brought, if at all, under a different theory &mdash; most commonly breach of
        contract and common-law bad faith (breach of the implied covenant of good faith
        and fair dealing), and in some cases an Unfair Competition Law claim under
        Business &amp; Professions Code &sect; 17200. The California Supreme Court in{' '}
        <em>Zhang v. Superior Court</em> (2013) 57 Cal.4th 364 confirmed
        <em> Moradi-Shalal</em>&rsquo;s bar on direct private enforcement of &sect; 790.03
        but held that a policyholder may pursue a UCL claim based on conduct that is
        independently actionable under another body of law, even where that conduct
        also violates the UIPA. <em>Zhang</em> does not allow a plaintiff to use
        &sect; 790.03 itself as the basis for a UCL claim &mdash; that would simply
        recreate the private right of action <em>Moradi-Shalal</em> eliminated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That does not mean the regulations are toothless in private litigation. They
        remain enforceable by the Insurance Commissioner through the administrative
        mechanisms above, and a documented regulatory violation may be admissible in
        court as evidence in a bad faith claim brought under the common law breach of
        the implied covenant of good faith and fair dealing, subject to the usual rules
        on pleading, foundation, and relevance. The bad faith claim itself rests on
        contract and tort principles. Whether the insurer&rsquo;s conduct was reasonable
        is the central question, and a documented regulatory violation is among the
        most persuasive forms of evidence that the conduct was unreasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts have framed this in several ways. Regulatory violations are evidence of
        the trade standards that govern reasonable claims handling. They may help rebut
        a carrier&rsquo;s assertion of good faith under the genuine dispute doctrine.
        Where they are admitted into evidence at trial, juries evaluating bad faith
        under the California Civil Jury Instructions (CACI 2330 et seq.) commonly hear
        regulatory standards argued alongside the bad-faith reasonableness standard.
        Testimony that explains a carrier&rsquo;s non-compliance with a specific
        regulatory standard can be significant evidence for a jury evaluating
        reasonableness.
      </p>
      <CalloutBox variant="important" title="The Key Distinction">
        <p>
          A regulatory violation is not by itself bad faith. The plaintiff still has to
          prove the elements of a bad faith claim: a contract, a duty to act reasonably,
          conduct that was unreasonable under the circumstances, and resulting damages.
          But a documented regulatory violation is among the strongest single pieces of
          evidence on the unreasonableness element. That is the practical reason every
          experienced California claims practitioner &mdash; on both sides &mdash; takes
          these regulations seriously.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Citations Must Be Verified Against the Current Text
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Fair Claims regulations have been amended repeatedly since 1992. When a
        new subsection is inserted in the middle of a section, every subsection letter
        downstream of the insertion shifts. An older article that cited &sect; 2695.5(b)
        for a particular requirement may be citing what is now &sect; 2695.5(e) after a
        later amendment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This kind of drift is the most common source of incorrect citations in published
        material. A practitioner pulls a citation from a 2010 secondary source, copies
        it into a 2023 letter, and the carrier&rsquo;s coverage counsel responds that
        the cited subsection does not say what the letter claims. The substantive
        provision is still there but has moved to a different subsection letter. The
        citation should be corrected promptly so the underlying regulatory point is
        not obscured by an avoidable formal error.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every citation in this article&rsquo;s verbatim text below was verified against
        Cornell Legal Information Institute&rsquo;s publication of the California Code of
        Regulations and cross-checked against the CDI&rsquo;s published version as of the
        date noted in the verification section at the bottom of the article. Anyone using
        these citations in a letter or pleading should re-verify against the canonical
        source before relying on them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The canonical source is the Department of Insurance&rsquo;s own publication of
        the regulations at{' '}
        <a
          href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          insurance.ca.gov
        </a>
        . The official California Code of Regulations published by the Office of
        Administrative Law is also authoritative. Cornell&rsquo;s Legal Information
        Institute (law.cornell.edu/regulations/california/10-CCR-2695) is a clean
        secondary source.
      </p>

      <h2 className="text-3xl font-bold text-[#1F3964] mb-6 mt-12 border-t pt-8 border-gray-300">
        The Verbatim Text of 10 CCR &sect;&sect; 2695.1 &ndash; 2695.14 (Property Provisions)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The text below reproduces the property-relevant provisions of the Fair Claims
        Settlement Practices Regulations. The automobile-specific sections
        (&sect;&sect; 2695.8, 2695.8.1, 2695.8.2, and 2695.8.5) are outside the scope
        of this property-focused site and are linked to authoritative sources below.
        Section 2695.2 (Definitions) reproduces the four most frequently cited
        definitions verbatim and lists the remaining twenty-one defined terms by name
        with a pointer to the CDI primary source for the full text.
      </p>

      {/* § 2695.1 — Preamble */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.1 &mdash; Preamble
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.1">
        <p className="italic">
          <strong>(a)</strong> Section 790.03(h) of the California Insurance Code enumerates
          sixteen claims settlement practices that, when either knowingly committed on a
          single occasion, or performed with such frequency as to indicate a general
          business practice, are considered to be unfair claims settlement practices and
          are, thus, prohibited by this section of the California Insurance Code. The
          Insurance Commissioner has promulgated these regulations in order to accomplish
          the following objectives:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> To delineate certain minimum standards for the settlement
          of claims which, when violated knowingly on a single occasion or performed with
          such frequency as to indicate a general business practice shall constitute an
          unfair claims settlement practice within the meaning of Insurance Code Section
          790.03(h);
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> To promote the good faith, prompt, efficient and equitable
          settlement of claims on a cost effective basis;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> To discourage and monitor the presentation to insurers of
          false or fraudulent claims; and,
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> To encourage the prompt and thorough investigation of
          suspected fraudulent claims and ensure the prompt and comprehensive reporting
          of suspected fraudulent claims as required by Insurance Code Section 1872.4.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> These regulations are not meant to provide the exclusive
          definition of all unfair claims settlement practices. Other methods, act(s), or
          practices not specifically delineated in this set of regulations may also be
          unfair claims settlement practices and subject to California Insurance Code
          Section 790.03(h) and/or California Insurance Code Section 790.06. These
          regulations are applicable to the handling or settlement of all claims subject
          to Article 6.5 of Division 1, Part 2, Chapter 1 of the California Insurance
          Code, commencing with Section 790, except as specifically provided below:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> Workers&rsquo; compensation insurance;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> Liability insurance for the professional malpractice of
          health care providers as defined in California Code of Civil Procedure Section
          364(f)(1);
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> Self insured or self funded plans which are bona fide
          Employee Retirement Income Security Act (&ldquo;ERISA&rdquo;) plans which are
          not also multiple employer welfare arrangements, to the extent that these ERISA
          plans are not covered by insurance;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> Any other self funded or self insured plan, to the extent
          it is not covered by insurance, which is lawfully conducting business in this
          state.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> In recognition of both the unique relationship which exists
          under a surety bond between the surety, the obligee or beneficiary, and the
          principal, and the fact that the processing of surety claims is subject to the
          Unfair Practices Act, beginning with California Insurance Code Section 790,
          only sections 2695.1 through 2695.6, inclusive, section 2695.10, and sections
          2695.12, 2695.13 and 2695.14, inclusive, shall apply to the handling or
          settlement of claims brought under surety bonds.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> These regulations apply to home protection contracts and
          home protection companies defined in California Insurance Code Section 12740.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> All licensees, as defined in these regulations, shall have
          thorough knowledge of the regulations contained in this subchapter.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> Policy provisions relating to the investigation, processing
          and settlement of claims shall be consistent with or more favorable to the
          insured than the provisions of these regulations.
        </p>
        <p className="italic mt-2">
          <strong>(g)</strong> The California Insurance Code provides the commissioner
          with access to all records of an insurer and the power to examine the affairs
          of every person engaged in the business of insurance to determine if such
          person is engaged in any unfair or deceptive act or practice. California
          Insurance Code Section 790.03(h) requires all persons engaged in the business
          of insurance to effectuate prompt, fair and equitable settlements of claims and
          to otherwise process claims in a fair and reasonable manner. The Department
          considers the use of reliable information to be an essential element of the
          fair and equitable settlement of claims. The fact that information, data or
          statistical methods used or relied upon by a licensee to process or establish
          the value of insurance claims is obtained through a third party source shall
          not absolve the licensee of its legal responsibility to comply with these
          regulations or to effectuate prompt, fair and equitable settlements of claims.
          Failure of a licensee to provide the commissioner with requested information
          sufficient to examine the licensee&rsquo;s claims handling practices may
          justify a finding that the licensee was in non-compliance with these
          regulations or other applicable insurance code provisions. Any and all
          information received pursuant to the Department&rsquo;s request shall be given
          confidential treatment, as provided in California Insurance Code section 735.5
          and California Government Code Section 11180 et seq. When processing or
          establishing the value of a claim, a licensee shall not be responsible for the
          accuracy of information provided by a governmental entity, unless the licensee
          has discovered or been notified of the inaccuracy and has continued to use the
          information.
        </p>
      </CalloutBox>

      {/* § 2695.2 — Definitions */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.2 &mdash; Definitions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.2 supplies the definitions used throughout the regulations.
        Twenty-five defined terms cover the parties, the time concepts, and the operative
        phrases. The most frequently litigated definitions are reproduced verbatim below.
        For the full text of every defined term, see the CDI primary source.
      </p>
      <CalloutBox variant="legal" title="10 CCR § 2695.2 — Selected Definitions (Verbatim)">
        <p className="italic">
          <strong>(f) First party claimant</strong> means any person asserting a right
          under an insurance policy as a named insured, other insured or beneficiary
          under the terms of that insurance policy, and including any person seeking
          recovery of uninsured motorist benefits.
        </p>
        <p className="italic mt-2">
          <strong>(k) Investigation</strong> means all activities of an insurer or its
          claims agent related to the determination of coverage, liabilities, or nature
          and extent of loss or damage for which benefits are afforded by an insurance
          policy, obligations or duties under a bond, and other obligations or duties
          arising from an insurance policy or bond.
        </p>
        <p className="italic mt-2">
          <strong>(n) Notice of claim</strong> means any written or oral notification to
          an insurer or its agent that reasonably apprises the insurer that the claimant
          wishes to make a claim against a policy or bond issued by the insurer and that
          a condition giving rise to the insurer&rsquo;s obligations under that policy
          or bond may have arisen. For purposes of these regulations the term
          &ldquo;notice of claim&rdquo; shall not include any written or oral
          communication provided by an insured or principal solely for informational or
          incident reporting purposes.
        </p>
        <p className="italic mt-2">
          <strong>(s) Proof of claim</strong> means any evidence or documentation in the
          possession of the insurer, whether as a result of its having been submitted by
          the claimant or obtained by the insurer in the course of its investigation, that
          provides any evidence of the claim and that reasonably supports the magnitude
          or the amount of the claimed loss.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        The remaining defined terms in &sect; 2695.2 are: (a) Beneficiary, (b) Calendar
        days, (c) Claimant, (d) Claims agent, (e) Extraordinary circumstances, (g) Gross
        settlement amount, (h) Insurance agent, (i) Insurer, (j) Insurance policy/policy,
        (l) Knowingly committed, (m) Licensee, (o) Notice of legal action, (p) Obligee,
        (q) Person, (r) Principal, (t) Remedial measures, (u) Replacement crash part,
        (v) Single act, (w) Surety bond/bond, (x) Third party claimant, and (y) Willful
        or Willfully. The full text of each appears at the CDI primary source.
      </p>

      {/* § 2695.3 — File and Record Documentation */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.3 &mdash; File and Record Documentation
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.3">
        <p className="italic">
          <strong>(a)</strong> Every licensee&rsquo;s claim files shall be subject to
          examination by the Commissioner or by the Commissioner&rsquo;s duly appointed
          designees. These files shall contain all documents, notes and work papers
          (including copies of all correspondence) which reasonably pertain to each
          claim in such detail that pertinent events and the dates of the events can be
          reconstructed and the licensee&rsquo;s actions pertaining to the claim can be
          determined.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> To assist in such examination all insurers shall:
          (1) maintain claim data that are accessible, legible and retrievable for
          examination so that an insurer shall be able to provide the claim number, line
          of coverage, date of loss and date of payment of the claim, date of acceptance,
          denial or date closed without payment. This data must be available for all
          open and closed files for the current year and the four preceding years;
          (2) record in the file the date the licensee received, date(s) the licensee
          processed and date the licensee transmitted or mailed every material and
          relevant document in the file; and (3) maintain hard copy files or maintain
          claim files that are accessible, legible and capable of duplication to hard
          copy; files shall be maintained for the current year and the preceding four
          years.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> The requirements of this section shall be satisfied where
          the licensee provides documentation evidencing inability to obtain data,
          nonexistence of data, or difficulty in obtaining clear documentary support for
          actions due to catastrophic losses, or other unusual circumstances providing
          the licensee establishes to the satisfaction of the Commissioner that the
          circumstances alleged by the licensee do exist and have materially affected the
          licensee&rsquo;s ability to comply with this regulation. Any licensee that
          alleges an inability to comply with this section shall establish and submit to
          the Commissioner a plan for file and record documentation to be used by such
          licensee while the circumstances alleged to preclude compliance with this
          subsection continue to exist.
        </p>
      </CalloutBox>

      {/* § 2695.4 — Representation of Policy Provisions and Benefits */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.4 &mdash; Representation of Policy Provisions and Benefits
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.4">
        <p className="italic">
          <strong>(a)</strong> Every insurer shall disclose to a first party claimant or
          beneficiary, all benefits, coverage, time limits or other provisions of any
          insurance policy issued by that insurer that may apply to the claim presented
          by the claimant.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> No insurer shall misrepresent or conceal benefits,
          coverages, time limits or other provisions of the bond which may apply to the
          claim presented under a surety bond.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> No insurer shall deny a claim on the basis of the
          claimant&rsquo;s failure to exhibit property, unless there is documentation in
          the file (1) of reasonable demand by the insurer, and unfounded refusal by the
          claimant, to exhibit property, or (2) of the breach of any policy provision
          providing for the exhibition of property.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> Except where a time limit is specified in the policy, no
          insurer shall require a first party claimant under a policy to give
          notification of a claim or proof of claim within a specified time.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> No insurer shall:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> request that a claimant sign a release that extends beyond
          the subject matter which gave rise to the claim payment unless, prior to
          execution of the release, the legal effect of the release is disclosed and
          fully explained by the insurer to the claimant in writing.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> be precluded from including in any release a provision
          requiring the claimant to waive the provisions of California Civil Code Section
          1542 provided that, prior to execution of the release, the legal effect of the
          release is disclosed and fully explained by the insurer to the claimant in
          writing.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> No insurer shall issue checks or drafts in partial
          settlement of a loss or claim that contain or are accompanied by language
          releasing the insurer, the insured, or the principal on a surety bond from
          total liability unless the policy or bond limit has been paid, or there has
          been a compromise settlement agreed to by the claimant and the insurer as to
          coverage and amount payable under the insurance policy or bond.
        </p>
        <p className="italic mt-2">
          <strong>(g)</strong> No insurer shall require a first party claimant or
          beneficiary to submit duplicative proofs of claim where coverage may exist
          under more than one policy issued by that insurer.
        </p>
      </CalloutBox>

      {/* § 2695.5 — Duties Upon Receipt of Communications */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.5 &mdash; Duties Upon Receipt of Communications
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.5">
        <p className="italic">
          <strong>(a)</strong> Upon receiving any written or oral inquiry from the
          Department of Insurance concerning a claim, every licensee shall immediately,
          but in no event more than twenty-one (21) calendar days of receipt of that
          inquiry, furnish the Department of Insurance with a complete written response
          based on the facts as then known by the licensee.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> Upon receiving any communication from a claimant, regarding
          a claim, that reasonably suggests that a response is expected, every licensee
          shall immediately, but in no event more than fifteen (15) calendar days after
          receipt of that communication, furnish the claimant with a complete response
          based on the facts as then known by the licensee.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> The designation specified in subsection 2695.2(c) shall
          be in writing, signed and dated by the claimant, and shall indicate that the
          designated person is authorized to handle the claim. All designations shall be
          transmitted to the insurer and shall be valid from the date of execution
          until the claim is settled or the designation is revoked. A designation may
          be revoked by a writing transmitted to the insurer, signed and dated by the
          claimant, indicating that the designation is to be revoked and the effective
          date of the revocation.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> Upon receiving notice of claim, every licensee or claims
          agent shall immediately transmit notice of claim to the insurer.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> Upon receiving notice of claim, every insurer shall
          immediately, but in no event more than fifteen (15) calendar days later, do
          the following unless the notice of claim is received within the period
          specified by law for proof of claim:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> acknowledge receipt of such notice to the claimant unless
          payment is made within that period of time. If the acknowledgement is not in
          writing, a notation of acknowledgement shall be made in the insurer&rsquo;s
          claim file and dated. Failure of an insurance agent or claims agent to
          promptly transmit notice of claim to the insurer shall be imputed to the
          insurer except where the subject policy was issued pursuant to the California
          Automobile Assigned Risk Program.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> provide to the claimant necessary forms, instructions, and
          reasonable assistance, including but not limited to, specifying the information
          the claimant must provide for proof of claim.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> begin any necessary investigation of the claim.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> An insurer may not require that the notice of claim under
          a policy be provided in writing unless such requirement is specified in the
          insurance policy or an endorsement thereto.
        </p>
      </CalloutBox>

      {/* § 2695.6 — Training and Certification */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.6 &mdash; Training and Certification
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.6">
        <p className="italic">
          <strong>(a)</strong> Every insurer shall adopt and communicate to all its claims
          agents written standards for the prompt investigation and processing of claims,
          and shall do so within ninety (90) days after the effective date of these
          regulations or any revisions thereto.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> All licensees shall provide thorough and adequate training
          regarding the regulations to all their claims agents. Licensees shall certify
          that their claims agents have been trained regarding these regulations and any
          revisions thereto. However, licensees need not provide such training or
          certification to duly licensed attorneys.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> Where the licensee is an individual, the licensee shall
          annually certify in writing under penalty of perjury that the licensee has
          read and understands the regulations and any and all amendments thereto.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> Where the licensee is an entity, annual written
          certification shall be executed under penalty of perjury by a principal
          confirming: (A) that the claims adjusting manual contains a copy of the
          regulations and amendments, and (B) that clear written instructions regarding
          the procedures to be followed to effect proper compliance with this subchapter
          were provided to all its claims agents.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> Where the licensee retains insurance adjusters as defined
          in California Insurance Code Section 14021, the licensee must provide training
          to the insurance adjusters regarding these regulations and annually certify,
          in a declaration executed under penalty of perjury, that such training is
          provided.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> Certification copies shall be maintained at all times at
          the principal place of business of the licensee, to be provided to the
          Commissioner only upon request.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(5)</strong> The annual certification required by this subsection shall
          be completed on or before September 1 of each calendar year.
        </p>
      </CalloutBox>

      {/* § 2695.7 — Standards for Prompt, Fair and Equitable Settlements */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.7 &mdash; Standards for Prompt, Fair and Equitable Settlements
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.7">
        <p className="italic">
          <strong>(a)</strong> No insurer shall discriminate in its claims settlement
          practices based upon the claimant&rsquo;s age, race, gender, income, religion,
          language, sexual orientation, ancestry, national origin, or physical
          disability, or upon the territory of the property or person insured.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> Upon receiving proof of claim, every insurer, except as
          specified in subsection 2695.7(b)(4) below, shall immediately, but in no event
          more than forty (40) calendar days later, accept or deny the claim, in whole
          or in part. The amounts accepted or denied shall be clearly documented in the
          claim file unless the claim has been denied in its entirety.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> Where an insurer denies or rejects a first party claim,
          in whole or in part, it shall do so in writing and shall provide to the
          claimant a statement listing all bases for such rejection or denial and the
          factual and legal bases for each reason given for such rejection or denial
          which is then within the insurer&rsquo;s knowledge. Where an insurer&rsquo;s
          denial of a first party claim is based, in whole or in part, on a specific
          statute, applicable law or policy provision, condition or exclusion, the
          written denial shall include reference thereto and provide an explanation of
          the application of the statute, applicable law or provision, condition or
          exclusion to the claim.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> Subject to the provisions of subsection 2695.7(k),
          nothing contained in subsection 2695.7(b)(1) shall require an insurer to
          disclose any information that could reasonably be expected to alert a
          claimant to the fact that the subject claim is being investigated as a
          suspected fraudulent claim.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> Written notification pursuant to this subsection shall
          include a statement that, if the claimant believes all or part of the claim
          has been wrongfully denied or rejected, the claimant may have the matter
          reviewed by the California Department of Insurance, and shall include the
          address and telephone number of the unit of the Department which reviews
          complaints regarding claims practices.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> The time frame specified in subsection 2695.7(b) above
          shall not apply to claims arising from policies of disability insurance
          subject to Section 10123.13 of the California Insurance Code, disability
          income insurance subject to Section 10111.2 of the California Insurance Code,
          or mortgage guaranty insurance subject to Section 12640.09(a) of the
          California Insurance Code.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong>
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> If more time is required than is allotted in subsection
          2695.7(b) to determine whether a claim should be accepted and/or denied in
          whole or in part, every insurer shall provide the claimant, within the time
          frame specified in subsection 2695.7(b), with written notice of the need for
          additional time. This written notice shall specify any additional information
          the insurer requires in order to make a determination and state any continuing
          reasons for the insurer&rsquo;s inability to make a determination. Thereafter,
          the written notice shall be provided every thirty (30) calendar days until a
          determination is made or notice of legal action is served. If the
          determination cannot be made until some future event occurs, then the insurer
          shall comply with this continuing notice requirement by advising the claimant
          of the situation and providing an estimate as to when the determination can be
          made.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> Subject to the provisions of subsection 2695.7(k), nothing
          contained in subsection 2695.7(c)(1) shall require an insurer to disclose any
          information that could reasonably be expected to alert a claimant to the fact
          that the claim is being investigated as a possible suspected fraudulent claim.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> Every insurer shall conduct and diligently pursue a
          thorough, fair and objective investigation and shall not persist in seeking
          information not reasonably required for or material to the resolution of a
          claim dispute.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> No insurer shall delay or deny settlement of a first party
          claim on the basis that responsibility for payment should be assumed by others,
          except as may otherwise be provided by policy provisions, statutes or
          regulations, including those pertaining to coordination of benefits.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> Except where a claim has been settled by payment, every
          insurer shall provide written notice of any statute of limitation or other
          time period requirement upon which the insurer may rely to deny a claim. Such
          notice shall be given to the claimant not less than sixty (60) days prior to
          the expiration date; except, if notice of claim is first received by the
          insurer within that sixty days, then notice of the expiration date must be
          given to the claimant immediately. With respect to a first party claimant in a
          matter involving an uninsured motorist, this notice shall be given at least
          thirty (30) days prior to the expiration date; except, if notice of claim is
          first received by the insurer within that thirty days, then notice of the
          expiration date must be given to the claimant immediately. This subsection
          shall not apply to a claimant represented by counsel on the claim matter.
        </p>
        <p className="italic mt-2">
          <strong>(g)</strong> No insurer shall attempt to settle a claim by making a
          settlement offer that is unreasonably low. The Commissioner shall consider any
          admissible evidence offered regarding the following factors in determining
          whether or not a settlement offer is unreasonably low:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> the extent to which the insurer considered evidence
          submitted by the claimant to support the value of the claim;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> the extent to which the insurer considered legal authority
          or evidence made known to it or reasonably available;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> the extent to which the insurer considered the advice of
          its claims adjuster as to the amount of damages;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> the extent to which the insurer considered the advice of
          its counsel that there was a substantial likelihood of recovery in excess of
          policy limits;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(5)</strong> the procedures used by the insurer in determining the
          dollar amount of property damage;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(6)</strong> the extent to which the insurer considered the probable
          liability of the insured and the likely jury verdict or other final
          determination of the matter;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(7)</strong> any other credible evidence presented to the Commissioner
          that demonstrates that (i) any amount offered by the insurer in settlement of
          a first-party claim to an insured not represented by counsel, or (ii) the final
          amount offered in settlement of a first-party claim to an insured who is
          represented by counsel, or (iii) the final amount offered in settlement of a
          third party claim by the insurer is below the amount that a reasonable person
          with knowledge of the facts and circumstances would have offered in settlement
          of the claim.
        </p>
        <p className="italic mt-2">
          <strong>(h)</strong> Upon acceptance of the claim in whole or in part and,
          when necessary, upon receipt of a properly executed release, every insurer,
          except as specified in subsection 2695.7(h)(1) and (2) below, shall
          immediately, but in no event more than thirty (30) calendar days later,
          tender payment or otherwise take action to perform its claim obligation. The
          amount of the claim to be tendered is the amount that has been accepted by
          the insurer as specified in subsection 2695.7(b). In claims where multiple
          coverage is involved, and where the payee is known, amounts that have been
          accepted by the insurer shall be paid immediately, but in no event more than
          thirty (30) calendar days, if payment would terminate the insurer&rsquo;s
          known liability under that individual coverage, unless impairment of the
          insured&rsquo;s interests would result. The time frames specified in this
          subsection shall not apply where the policy provides for a waiting period
          after acceptance of claim and before payment of benefits.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> The time frame specified in subsection 2695.7(h) shall not
          apply to claims arising from policies of disability insurance subject to
          Section 10123.13 of the California Insurance Code, disability income insurance
          subject to Section 10111.2 of the California Insurance Code, or of mortgage
          guaranty insurance subject to Section 12640.09(a) of the California Insurance
          Code, and shall not apply to automobile repair bills subject to Section 560 of
          the California Insurance Code.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> Any insurer issuing a title insurance policy shall either
          tender payment pursuant to subsection 2695.7(h) or take action to resolve the
          problem which gave rise to the claim immediately upon, but in no event more
          than thirty (30) calendar days after, acceptance of the claim.
        </p>
        <p className="italic mt-2">
          <strong>(i)</strong> No insurer shall inform a claimant that the
          claimant&rsquo;s rights may be impaired if a form or release is not completed
          within a specified time period unless the information is given for the purpose
          of notifying the claimant of the applicable statute of limitations or policy
          provision or the time limitation within which claims are required to be brought
          against state or local entities.
        </p>
        <p className="italic mt-2">
          <strong>(j)</strong> No insurer shall request or require an insured to submit
          to a polygraph examination unless authorized under the applicable insurance
          contract and state law.
        </p>
        <p className="italic mt-2">
          <strong>(k)</strong> Subject to the provisions of subsection 2695.7(c), where
          there is a reasonable basis, supported by specific information available for
          review by the California Department of Insurance, for the belief that the
          claimant has submitted or caused to be submitted to an insurer a suspected
          false or fraudulent claim as specified in California Penal Code Section 550 or
          California Insurance Code Section 1871.4(a), the number of calendar days
          specified in subsection 2695.7(b) shall be:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> increased to eighty (80) calendar days; or,
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> suspended until otherwise ordered by the Commissioner,
          provided the insurer has complied with California Insurance Code Section
          1872.4 and the insurer can demonstrate to the Commissioner that it has made
          a diligent attempt to determine whether the subject claim is false or
          fraudulent within the eighty day period specified by subsection
          2695.7(k)(1).
        </p>
        <p className="italic mt-2">
          <strong>(l)</strong> No insurer shall deny a claim based upon information
          obtained in a telephone conversation or personal interview with any source
          unless the telephone conversation or personal interview is documented in the
          claim file.
        </p>
        <p className="italic mt-2">
          <strong>(m)</strong> No insurer shall make a payment to a provider, pursuant
          to a policy provision to pay medical benefits, and thereafter seek recovery or
          set-off from the insured on the basis that the amount was excessive and/or the
          services were unnecessary, except in the event of a proven false or fraudulent
          claim, subject to the provisions of Section 10123.145 of the California
          Insurance Code.
        </p>
        <p className="italic mt-2">
          <strong>(n)</strong> Every insurer requesting a medical examination for the
          purpose of determining liability under a policy provision shall do so only
          when the insurer has a good faith belief that such an examination is
          reasonably necessary.
        </p>
        <p className="italic mt-2">
          <strong>(o)</strong> No insurer shall require that a claimant withdraw, rescind
          or refrain from submitting any complaint to the California Department of
          Insurance regarding the handling of a claim or any other matter complained of
          as a condition precedent to the settlement of any claim.
        </p>
        <p className="italic mt-2">
          <strong>(p)</strong> Every insurer shall provide written notification to a
          first party claimant as to whether the insurer intends to pursue subrogation
          of the claim. Where an insurer elects not to pursue subrogation, or
          discontinues pursuit of subrogation, it shall include in its notification a
          statement that any recovery to be pursued is the responsibility of the first
          party claimant. This subsection does not require notification if the
          deductible is waived, the coverage under which the claim is paid requires no
          deductible to be paid, the loss sustained does not exceed the applicable
          deductible, or there is no legal basis for subrogation.
        </p>
        <p className="italic mt-2">
          <strong>(q)</strong> Every insurer that makes a subrogation demand shall
          include in every demand the first party claimant&rsquo;s deductible. Every
          insurer shall share subrogation recoveries on a proportionate basis with the
          first party claimant, unless the first party claimant has otherwise recovered
          the whole deductible amount. No insurer shall deduct legal or other expenses
          from the recovery of the deductible unless the insurer has retained an outside
          attorney or collection agency to collect that recovery. The deduction may only
          be for a pro rata share of the allocated loss adjustment expense. This
          subsection shall not apply when multiple policies have been issued to the
          insured(s) covering the same loss and the language of these contracts
          prescribe alternative subrogation rights. Further, this subsection shall not
          apply to disability and health insurance as defined in California Insurance
          Code Section 106.
        </p>
      </CalloutBox>

      {/* §§ 2695.8 — Automobile Insurance (out of scope; referenced) */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect;&sect; 2695.8, 2695.8.1, 2695.8.2, 2695.8.5 &mdash; Automobile Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sections 2695.8 (additional standards for automobile insurance), 2695.8.1 (the
        standardized auto body repair labor rate survey), 2695.8.2 (the questionnaire
        for that survey), and 2695.8.5 (the auto body repair consumer bill of rights)
        govern automobile insurance claims and are outside the scope of this
        property-focused site. A reader looking for the verbatim text of those sections
        can find it at several authoritative sources:
      </p>
      <ul className="text-gray-700 leading-relaxed mb-4 list-disc pl-6 space-y-1">
        <li>
          California Department of Insurance, Fair Claims Settlement Practices
          Regulations index page:{' '}
          <a
            href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm
          </a>
        </li>
        <li>
          California Office of Administrative Law, official California Code of
          Regulations:{' '}
          <a
            href="https://oal.ca.gov/publications/ccr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            oal.ca.gov/publications/ccr
          </a>
        </li>
        <li>
          Cornell Legal Information Institute (clean text, section-by-section):
          law.cornell.edu/regulations/california/10-CCR-2695.8 (and 2695.8.1, 2695.8.2,
          2695.8.5)
        </li>
      </ul>

      {/* § 2695.9 — First Party Property */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.9 &mdash; Additional Standards Applicable to First Party Residential and
        Commercial Property Insurance Policies
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.9">
        <p className="italic">
          <strong>(a)</strong> When a residential or commercial property insurance policy
          provides for the adjustment and settlement of first party losses based on
          replacement cost, the following standards apply:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> When a loss requires repair or replacement of an item or
          part, any consequential physical damage incurred in making the repair or
          replacement not otherwise excluded by the policy shall be included in the
          loss. The insured shall not have to pay for depreciation nor any other cost
          except for the applicable deductible.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> When a loss requires replacement of items and the replaced
          items do not match in quality, color or size, the insurer shall replace all
          items in the damaged area so as to conform to a reasonably uniform appearance.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> No insurer shall require that the insured have the
          property repaired by a specific individual or entity.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> No insurer shall suggest or recommend that the insured
          have the property repaired by a specific individual or entity unless:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> the referral is expressly requested by the claimant; or
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> the claimant has been informed in writing of the right to
          select a repair individual or entity and, if the claimant accepts the
          suggestion or recommendation, the insurer shall cause the damaged property to
          be restored to no less than its condition prior to the loss and repaired in a
          manner which meets accepted trade standards for good and workmanlike
          construction at no additional cost to the claimant other than as stated in the
          policy or as otherwise allowed by these regulations.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> If losses are settled on the basis of a written scope
          and/or estimate prepared by or for the insurer, the insurer shall supply the
          claimant with a copy of each document upon which the settlement is based. If
          the claimant subsequently presents the insurer with an estimate that exceeds
          the insurer&rsquo;s written estimate, the insurer shall, within a reasonable
          period of time:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> pay the difference between its written estimate and a
          higher estimate obtained by the claimant; or,
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> if requested by the claimant, promptly provide the
          claimant with the name of at least one repair individual or entity that will
          make the repairs for the amount of the written estimate. The insurer shall
          cause the damaged property to be restored to no less than its condition prior
          to the loss and which will allow for repairs in a manner which meets accepted
          trade standards for good and workmanlike construction at no additional cost
          to the claimant other than as stated in the policy or as otherwise allowed by
          these regulations; or
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> reasonably adjust any written estimates prepared by the
          repair individual or entity of the insured&rsquo;s choice and provide a copy
          of the adjusted estimate to the claimant.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> Once the appraisal provision under an insurance policy is
          invoked, the appraisal process shall not include any legal proceeding or
          procedure not specified under California Insurance Code Section 2071. Nothing
          herein is intended to preclude separate legal proceedings on issues unrelated
          to the appraisal process.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> When the amount claimed is adjusted because of betterment,
          depreciation, or salvage, all justification for the adjustment shall be
          contained in the claim file. Any adjustments shall be discernable, measurable,
          itemized, and specified as to dollar amount, and shall accurately reflect the
          value of any adjustments. Any adjustments for betterment, depreciation, or
          salvage shall be measurable. Where the insurer is depreciating either the
          structure or its contents:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> the expense of labor necessary to repair, rebuild or
          replace covered property is not a component of physical depreciation and shall
          not be subject to depreciation or betterment.
        </p>
      </CalloutBox>

      {/* § 2695.10 — Surety */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.10 &mdash; Additional Standards Applicable to Surety Insurance
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.10">
        <p className="italic">
          <strong>(a)</strong> No insurer shall base or vary its claims settlement
          practices, or its standard of scrutiny and review, upon the claimant&rsquo;s
          age, gender, income, religion, language, sexual orientation, ancestry,
          national origin, or physical disability, or upon the territory of the property
          or person insured.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> As soon as possible, but in no event later than forty (40)
          calendar days after receipt by the insurer of proof of claim, and provided the
          claim is not in litigation or arbitration, the insurer shall accept or deny
          the claim, in whole or in part, and affirm or deny liability. Every insurer
          that denies or rejects a claim in whole or in part, or disputes liability or
          damages, shall provide to the claimant a written statement listing all bases
          for such rejection or denial, and the factual and legal bases for each reason
          given for each rejection or denial, which are within the insurer&rsquo;s
          knowledge. If an insurer&rsquo;s denial of a claim in whole or in part is
          based on a specific statute or specific bond provisions, the denial shall
          include reference thereto and provide an explanation of the application of the
          statute or bond provision to the claim. Written notification pursuant to this
          subsection shall also include a notification that the claimant may have the
          matter reviewed by the California Department of Insurance and shall provide
          the address and telephone number of the unit of the Department which reviews
          complaints regarding claims practices.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> A principal&rsquo;s absence, non-cooperation, or failure
          to meet the bonded obligation shall not excuse unreasonable delay by the
          insurer in determining whether a claim should be accepted or denied.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> While an insurer may consider all information provided by
          a principal, absent reasonable factual and/or legal bases for denying a claim,
          no insurer shall deny a claim based solely upon a principal&rsquo;s protest of
          a claim or denial of liability for a claim.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> In the event an insurer requires more time than is
          allotted in subsection 2695.10(b) to determine whether a claim should be
          accepted and/or denied, in whole or in part, the insurer shall provide the
          claimant with written notice of the need for such additional time within the
          time specified in subsection 2695.10(b). Such written notice shall specify the
          reasons for the need for such additional time, including specification of any
          additional information the insurer requires in order to make such
          determination. The insurer shall provide the claimant with written notice as
          to the continuing reasons for the insurer&rsquo;s inability to make such a
          determination. Except in cases where extraordinary circumstances are present
          which materially affect the insurer&rsquo;s ability to comply, such written
          notice shall be provided within 30 calendar days of the date of the initial
          notification, and every 30 calendar days thereafter until such determination
          is made or notice of legal action is received. If the determination cannot be
          made until some event, process, or third party determination is made, then the
          insurer shall comply with this requirement by advising the claimant of the
          situation and provide an estimate as to when the determination can be made.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> No insurer shall fail to pursue diligently an
          investigation of a claim, or persist in seeking information not reasonably
          required for or material to resolution of a claim dispute.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> No insurer shall deny a claim upon information obtained
          in a telephone conversation or personal interview with any source unless the
          telephone conversation or personal interview is documented in the claim file
          pursuant to the provisions of section 2695.3.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> Where the claim is to be settled by payment, and where
          neither the claim nor the amount is in dispute, such payment shall be tendered
          (1) within 15 calendar days following affirmation of liability where the
          insurer does not require the claimant to execute a release, or (2) within 15
          calendar days following the insurer&rsquo;s receipt of a release properly
          executed by the claimant, where such release is required by the insurer. Such
          release shall be provided to the claimant within ten (10) calendar days
          following affirmation of liability. Where multiple claimants are involved,
          payment shall be made pursuant to this subsection, provided such payment
          shall not increase the insurer&rsquo;s liability, or impair the rights of
          other claimants under the bond.
        </p>
        <p className="italic mt-2">
          <strong>(g)</strong> Except where a claim has been settled by payment, every
          insurer shall provide written notice of any statute of limitations or other
          time period requirement upon which the insurer may rely to deny a claim. Such
          notice shall be given to the claimant no less than sixty (60) days prior to
          the expiration date. If notice of claim is first received by the insurer
          within sixty (60) days of the expiration date and such date is known to the
          insurer, then notice of the expiration date must be given to the claimant
          immediately. This subsection shall not apply to a claimant represented by
          counsel on the claim matter or to a claim already time barred when first
          received by the insurer.
        </p>
        <p className="italic mt-2">
          <strong>(h)</strong> No insurer shall attempt to settle a claim by making a
          settlement offer that is unreasonably low. The Commissioner shall consider any
          admissible evidence offered regarding the following factors in determining
          whether or not a settlement offer is unreasonably low:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> the extent to which the insurer considered evidence
          submitted by the claimant to support the value of the claim;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> the extent to which the insurer considered legal authority
          or evidence made known to it or reasonably available;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> the procedures used by the insurer in determining the
          dollar amount of damages;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> any other credible evidence presented to the Commissioner
          that demonstrates that the final amount offered by the insurer in settlement
          of a claim is below the amount that a reasonable person with knowledge of the
          facts and circumstances would have offered in settlement of the claim.
        </p>
      </CalloutBox>

      {/* § 2695.11 — Life and Disability */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.11 &mdash; Additional Standards Applicable to Life and Disability Insurance Claims
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.11">
        <p className="italic">
          <strong>(a)</strong> No insurer shall seek reimbursement of an overpayment or
          withhold any portion of any benefit payable as a result of a claim on the
          basis that the sum withheld or reimbursement sought is an adjustment or
          correction for an overpayment made under the same policy unless:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> the insurer&rsquo;s files contain clear, documented
          evidence of an overpayment and written authorization from the insured or
          assignee, if applicable, permitting the reimbursement or withholding
          procedure, or
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> the insurer&rsquo;s files contain clear, documented
          evidence pursuant to section 2695.3 of all of the following:
        </p>
        <p className="italic mt-2 pl-8">
          <strong>(A)</strong> The overpayment was erroneous under the provisions of
          the policy.
        </p>
        <p className="italic mt-2 pl-8">
          <strong>(B)</strong> The error which resulted in the payment is not a mistake
          of the law.
        </p>
        <p className="italic mt-2 pl-8">
          <strong>(C)</strong> The insurer notifies the insured within six (6) months
          of the date of the error, except that in instances of error prompted by
          representations or nondisclosure of claimants or third parties, the insurer
          notifies the insured within fifteen (15) calendar days after the date of
          discovery of such error. For the purpose of this subsection, the date of the
          error shall be the day on which the draft for benefits is issued.
        </p>
        <p className="italic mt-2 pl-8">
          <strong>(D)</strong> Such notice states clearly the cause of the error and
          states the amount of the overpayment.
        </p>
        <p className="italic mt-2 pl-8">
          <strong>(E)</strong> The procedure set forth above in (a)(2)(A) through (D)
          above may not be used if the overpayment is the subject of a reasonable
          dispute as to facts.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> With each claim payment, the insurer shall provide to the
          claimant and assignee, if any, an explanation of benefits which shall include,
          if applicable, the name of the provider or services covered, dates of service,
          and a clear explanation of the computation of benefits.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> An insurer may not impose a penalty upon any insured for
          noncompliance with insurer requirements for precertification of benefits
          unless such penalties are specifically and clearly set forth in writing in the
          policy or certificate of insurance.
        </p>
        <p className="italic mt-2">
          <strong>(d)</strong> An insurer that contests a claim under California
          Insurance Code Section 10123.13 shall subsequently affirm or deny the claim
          within thirty (30) calendar days from the original notification. In the event
          an insurer requires additional time to affirm or deny the claim, it shall
          notify the claimant and assignee in writing. This notice shall be given
          within thirty (30) calendar days of the notice (required under Insurance Code
          Section 10123.13) that the claim is being contested and every thirty (30)
          calendar days thereafter until a determination is made or legal action is
          served. If the determination cannot be made until some future event occurs,
          the insurer shall comply with this continuing notice requirement by advising
          the claimant and assignee of the situation and providing an estimate as to
          when the determination can be made.
        </p>
        <p className="italic mt-2">
          <strong>(e)</strong> When a policy requires preauthorization of non-emergency
          medical services, the preauthorization must be given immediately but in no
          event more than five (5) calendar days after the request for preauthorization.
          The preauthorization shall be communicated or confirmed in writing to the
          insured and the medical service provider, and shall explain the scope of the
          preauthorization and whether the preauthorization is or is not a guarantee of
          acceptance of the claim. In the event the preauthorization is denied, the
          reason(s) for the denial shall be communicated in writing to the insured and
          the medical service provider.
        </p>
        <p className="italic mt-2">
          <strong>(f)</strong> No preauthorization shall be required by an insurer for
          emergency medical services.
        </p>
        <p className="italic mt-2">
          <strong>(g)</strong> An insurer shall reimburse the insured or medical service
          provider for reasonable expenses incurred in copying medical records requested
          by the insurer.
        </p>
      </CalloutBox>

      {/* § 2695.12 — Penalties */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.12 &mdash; Penalties
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.12">
        <p className="italic">
          <strong>(a)</strong> In determining whether to assess penalties and if so the
          appropriate amount to be assessed, the Commissioner shall consider admissible
          evidence on the following:
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(1)</strong> the existence of extraordinary circumstances;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(2)</strong> whether the licensee has a good faith and reasonable
          basis to believe that the claim or claims are fraudulent or otherwise in
          violation of applicable law and the licensee has complied with the provisions
          of Section 1872.4 of the California Insurance Code;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(3)</strong> the complexity of the claims involved;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(4)</strong> gross exaggeration of the value of the property or
          severity of the injury, or amount of damages incurred;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(5)</strong> substantial mischaracterization of the circumstances
          surrounding the loss or the alleged default of the principal;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(6)</strong> secreting of property which has been claimed as lost or
          destroyed.
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(7)</strong> the relative number of claims where the noncomplying
          act(s) are found to exist, the total number of claims handled by the licensee
          and the total number of claims reviewed by the Department during the relevant
          time period;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(8)</strong> whether the licensee has taken remedial measures with
          respect to the noncomplying act(s);
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(9)</strong> the existence or nonexistence of previous violations by
          the licensee;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(10)</strong> the degree of harm occasioned by the noncompliance;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(11)</strong> whether, under the totality of circumstances, the
          licensee made a good faith attempt to comply with the provisions of this
          subchapter;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(12)</strong> the frequency of occurrence and/or severity of the
          detriment to the public caused by the violation of a particular subsection of
          this subchapter;
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(13)</strong> whether the licensee&rsquo;s management was aware of
          facts that apprised or should have apprised the licensee of the act(s) and
          the licensee failed to take any remedial measures; and
        </p>
        <p className="italic mt-2 pl-4">
          <strong>(14)</strong> the licensee&rsquo;s reasonable mistakes or opinions as
          to valuation of property, losses or damages.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> This section shall not bar, obstruct or restrict any
          right to administrative due process an insurer may be afforded under
          California Insurance Code Sections 790.05, 790.06, and 790.07.
        </p>
      </CalloutBox>

      {/* § 2695.13 — Severability */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.13 &mdash; Severability
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.13">
        <p className="italic">
          If any provision or clause of this rule or the application thereof to any
          person or situation is held invalid, such invalidity shall not affect any
          other provision or application of this rule which can be given effect without
          the invalid provision or application, and to this end the provisions of this
          rule are declared to be severable.
        </p>
      </CalloutBox>

      {/* § 2695.14 — Compliance Date */}

      <h3 className="text-2xl font-semibold text-[#1F3964] mb-4 mt-10">
        &sect; 2695.14 &mdash; Compliance Date
      </h3>
      <CalloutBox variant="legal" title="10 CCR § 2695.14">
        <p className="italic">
          <strong>(a)</strong> Any amendments to these regulations shall be complied with
          within ninety (90) calendar days after they are filed with the Secretary of
          State.
        </p>
        <p className="italic mt-2">
          <strong>(b)</strong> Prior to the compliance date of these regulations,
          licensees shall, pursuant to Section 2695.6, adopt and communicate to their
          claims agents standards for the prompt investigation and processing of claims,
          and provide training and instruction on these regulations.
        </p>
        <p className="italic mt-2">
          <strong>(c)</strong> These regulations shall apply to any claims handling that
          takes place on or after the compliance date set forth under subsection
          2695.14(a).
        </p>
      </CalloutBox>

      {/* Verification Note */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-12 border-t pt-8 border-gray-300">
        Verification Note
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The text above was transcribed from Cornell Legal Information Institute&rsquo;s
        publication of the California Code of Regulations and cross-checked against the
        California Department of Insurance&rsquo;s published version. Last verified on
        June 6, 2026.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The verbatim text of every property-relevant subsection of &sect;&sect; 2695.1
        through 2695.14 is reproduced above. The only sections not reproduced are the
        automobile-specific &sect;&sect; 2695.8, 2695.8.1, 2695.8.2, and 2695.8.5, which
        are out of scope for this property-focused site. The full text of those sections
        is available at the CDI primary source.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For any specific legal matter, verify the current text against the California
        Department of Insurance&rsquo;s official publication at{' '}
        <a
          href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm
        </a>
        . Subsection letters drift when amendments are adopted. A citation that was
        correct in 2020 may point to a different subsection letter after a later
        amendment. For claims-handling letters or legal pleadings, always verify the
        current text before citing a specific subsection.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal
        advice. Insurance regulations are amended periodically. Consult a licensed
        California attorney for advice on any specific claim or legal question.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
