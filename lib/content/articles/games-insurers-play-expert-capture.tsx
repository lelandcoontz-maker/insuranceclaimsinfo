import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Games Insurers Play: How Carriers Capture, Limit, and Selectively Disclose Their Own Experts',
  description:
    'Insurance companies retain "independent" experts — engineers, industrial hygienists, contractors — to evaluate claims. Two recurring patterns shape what those experts actually produce: scope-limiting instructions kept secret from the insured, and selective disclosure when a first expert produces a report the carrier does not want to use. Both practices are widely observed, both violate the California Fair Claims Settlement Practices Regulations in many cases, and both have specific procedural remedies the policyholder can invoke.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not
          constitute legal advice. Insurance policies, regulations, and case law can vary
          significantly based on individual circumstances. Consult a licensed attorney for
          advice about your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a property insurance claim is contested, the insurance company retains experts
        to evaluate the loss. These experts are presented to the policyholder as
        independent professionals giving honest opinions: the engineer says the roof damage
        is not from the storm; the industrial hygienist says the contamination is below
        regulatory thresholds; the general contractor writes an estimate that comes in
        well under what the policyholder&rsquo;s own contractor wrote. The reports look
        clean. The credentials are real. The opinions seem to settle the question.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two recurring patterns shape what those experts actually produce, and both are
        widely observed by policyholder-side practitioners across California. The first is
        <strong> scope capture</strong>: the carrier&rsquo;s engagement letter to the
        expert quietly narrows the assignment to a subset of the questions the policyholder
        would expect a full investigation to cover. The second is <strong>selective
        disclosure</strong>: when a first expert produces a report the carrier does not want
        to rely on, the carrier hires a second expert and tries to bury the existence of the
        first. Both patterns matter because both can be remedied &mdash; if the policyholder
        knows to look for them and knows how to invoke the procedural rules that already
        exist to address them.
      </p>

      <CalloutBox variant="important" title="The Common Thread">
        <p>
          The pattern across all four expert categories &mdash; engineers, hygienists,
          contractors, and adjusters &mdash; is that the carrier presents itself as having
          conducted an honest, broad, complete investigation while the actual instructions
          to the expert constrained or shaped the work in ways the policyholder cannot see.
          The policyholder reads what looks like a comprehensive professional opinion. The
          expert wrote within a narrower frame than the report appears to address. The
          carrier relies on the report as if the narrow frame did not exist.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pattern One: Scope Capture
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Scope capture is the practice of writing the expert&rsquo;s engagement letter in a
        way that quietly narrows the assignment. The expert is competent. The expert is
        credentialed. The expert may even be acting in subjective good faith within the
        scope they were given. The problem is the scope itself: the carrier tells the
        expert what to look at and what not to look at, what to test for and what not to
        test for, what to opine on and what to leave aside. The resulting report is
        accurate within its frame and misleading outside of it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Example: The Hygienist Asked to Test for Two Contaminants
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner in an area affected by an urban wildfire files a smoke contamination
        claim. The carrier retains an industrial hygienist to evaluate. The hygienist
        arrives, performs the sampling, sends the samples to a laboratory, and produces a
        report. The report says levels of two specific compounds &mdash; let us say
        polycyclic aromatic hydrocarbons and one heavy metal &mdash; are below detection
        limits. The carrier then writes to the policyholder: &ldquo;Based on the expert
        evaluation, your property does not show contamination above applicable
        thresholds.&rdquo; The claim is denied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the policyholder is not told is that urban wildfire smoke contains dozens of
        compounds of concern: heavy metals from incinerated electronics and appliances,
        plastic byproducts from melted siding and HVAC components, asbestos from older
        building materials, lead from older paint, dioxins and furans from chlorinated
        plastics, volatile organic compounds across multiple classes. A complete hygienist
        evaluation of an urban wildfire smoke claim would test for the full suite of
        compounds reasonably present given the burn profile. The hygienist who tested for
        two compounds did so because the engagement letter from the carrier limited the
        scope of analysis to two compounds. The hygienist&rsquo;s report is accurate as to
        what was tested. It is misleading as a basis for any conclusion about overall
        contamination, because the testing covered a small fraction of the relevant
        contaminants.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Example: The Engineer Asked Only About Structural Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner reports hail damage to a tile roof. The carrier retains a structural
        engineer. The engineer goes on the roof, takes photographs, writes a report.
        Conclusion: the roof is not structurally compromised. The carrier writes:
        &ldquo;Our engineer has determined that there is no covered damage.&rdquo; The
        policyholder, reading the report, sees a credentialed professional concluding there
        is no damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the policyholder does not know is that the engineer&rsquo;s assignment was
        explicitly limited to <em>structural</em> damage. Cosmetic damage &mdash; chipped
        tiles, cracked glaze, dimpled metal flashing, fractured ridge caps, granule loss on
        composition shingles &mdash; was outside the scope of the engagement. The engineer
        may not have even rendered an opinion on cosmetic damage because the engineer was
        not asked to. The carrier&rsquo;s reliance on the report to deny the entire claim,
        as if the engineer had concluded there was no damage of any kind, is a
        misrepresentation by selective reference: the report says nothing about cosmetic
        damage because the engineer was instructed to say nothing about cosmetic damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Example: The Contractor Estimating Within a Pre-Set Frame
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier sends a general contractor to write an estimate. The estimate comes in
        at $42,000. The policyholder&rsquo;s independent contractor wrote $96,000 for the
        same project. The discrepancy is enormous, and the policyholder demands to
        understand why. The carrier points to its contractor&rsquo;s estimate as the
        reasonable cost of repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the carrier does not say is that its contractor was instructed to write the
        estimate within the scope set by an earlier carrier-side opinion &mdash; the
        engineer&rsquo;s narrow finding, the hygienist&rsquo;s limited testing, the
        adjuster&rsquo;s initial scoping document. The contractor is estimating the work
        that the carrier&rsquo;s prior expert framework says needs to be done, not the work
        that an independent assessment of the loss says needs to be done. The
        contractor&rsquo;s number is accurate for the scope of work assigned. It is
        misleading as a measure of the actual cost of repair, because the scope of work
        itself was narrowed before the contractor was even retained.
      </p>

      <CalloutBox variant="warning" title="The Hidden Engagement Letter">
        <p>
          The instructions that narrow the scope are almost always in writing &mdash; an
          engagement letter, a scope-of-work memo, or an email from the claims handler to
          the expert. The carrier does not voluntarily produce that document to the
          policyholder. If the policyholder requests &ldquo;all communications between the
          carrier and the expert&rdquo; in writing, citing the carrier&rsquo;s duty under
          the Fair Claims Settlement Practices Regulations to conduct a thorough
          investigation, the engagement letter sometimes surfaces. More often, the carrier
          deflects on work-product or proprietary grounds. The deflection itself is useful
          information: a carrier confident that its expert was given a full and fair scope
          would have no reason to refuse to produce the engagement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pattern Two: The Two-Report Game and Selective Disclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The second pattern is even more pointed. The carrier retains an expert. The expert
        does the work, draws conclusions, writes a report. The conclusions are not what the
        carrier wanted. Rather than accepting the conclusions and adjusting the claim
        accordingly, the carrier&rsquo;s claims handler or counsel contacts the expert and
        asks for revisions: change this conclusion, delete this paragraph, soften this
        finding, remove this attachment. The expert may comply &mdash; many do, particularly
        when the carrier is a repeat client &mdash; and produces a revised report with the
        conclusions the carrier preferred. The carrier then sends the policyholder the
        revised report only and treats it as if it were the original work product.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Alternatively, the carrier may not bother revising the first report. The carrier
        retains a second expert &mdash; sometimes from a different firm &mdash; and asks
        the second expert to render an opinion on the same issue. The second expert,
        sometimes selected precisely because of a known willingness to give carrier-friendly
        opinions, produces a report that supports the position the carrier wants to take.
        The carrier sends the policyholder the second report. The existence of the first
        report is not mentioned. If the policyholder asks whether any other experts have
        been retained, the carrier may deflect on work-product privilege, attorney-client
        privilege (if the first expert was nominally retained through coverage counsel), or
        simply pretend the inquiry was answered.
      </p>

      <CalloutBox variant="legal" title="This Is a Violation, Not a Strategy">
        <p>
          The California Fair Claims Settlement Practices Regulations (10 CCR &sect;&sect;
          2695.1&ndash;2695.17) impose specific obligations on insurers during the claims
          process. Insurers must conduct thorough and reasonable investigations (10 CCR
          &sect; 2695.7(d)); they must not misrepresent pertinent facts or policy
          provisions (Cal. Ins. Code &sect; 790.03(h)(1)); and they must document material
          claim-investigation activity in the claim file (10 CCR &sect; 2695.3). When an
          insured requests claim-related documents under California Insurance Code section
          2071, the insurer must produce the requested materials within fifteen days. The
          combined effect of these provisions is that an insurer cannot selectively
          disclose a revised expert report while pretending an earlier version does not
          exist. The earlier version is part of the claim-investigation record; the
          insurer has documented it (or should have); the policyholder has a statutory
          right to request it; and concealing it would be a misrepresentation of pertinent
          facts and a breach of the duty of good faith and fair dealing (
          <em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24 Cal.3d 809). A carrier that
          has suppressed an unfavorable expert report is in violation of the regulations
          and potentially exposed to{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            bad faith
          </Link>{' '}
          liability.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        How to Surface the Hidden Report
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most direct way to surface a suppressed report is a written request to the
        carrier, sent by email and confirmed by certified mail, that does the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Identifies the expert by name and the specific report the policyholder has
          received.
        </li>
        <li>
          Requests a written confirmation that the version produced is the only version
          generated by that expert, that no prior drafts or earlier-dated reports exist, and
          that no other experts were retained to evaluate the same issue.
        </li>
        <li>
          If other experts were retained, requests the full set of reports from each.
        </li>
        <li>
          Cites 10 CCR &sect; 2695.5(b) (timely response to communications) and 10 CCR
          &sect; 2695.7(b) (the duty to provide a written basis for any denial or partial
          denial) as the regulatory framework for the request.
        </li>
        <li>
          Notes that the request is being made under the carrier&rsquo;s duty to conduct a
          thorough investigation and to communicate the basis for its position in good
          faith.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&rsquo;s response is informative whichever direction it goes. A carrier
        that affirms in writing that no prior drafts or alternative experts exist has
        either told the truth or made a written misrepresentation that becomes a serious
        bad-faith exhibit if a different report later surfaces (which it sometimes does
        through litigation discovery, through the expert&rsquo;s own files, or through a
        subsequent regulatory action). A carrier that refuses to confirm or that asserts
        privilege over the existence of prior versions has effectively conceded that
        something was suppressed, and the basis for escalating to the Department of
        Insurance becomes much stronger.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Why the &ldquo;Work Product&rdquo; Excuse Generally Fails
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers often resist producing earlier expert versions by claiming the prior
        drafts are protected as &ldquo;work product&rdquo; or as &ldquo;work in
        progress&rdquo; not yet finalized. The argument generally fails in the claims-handling
        context, for several reasons. First, work-product doctrine is a litigation
        privilege that applies to materials prepared in anticipation of litigation, not to
        documents created in the ordinary course of claims investigation. Most expert
        reports retained during the claims-handling phase are not prepared in anticipation
        of litigation &mdash; they are prepared as part of the carrier&rsquo;s investigation
        of coverage. Second, even where work-product privilege might apply, the privilege
        does not extend to the underlying facts the expert observed and reported; it
        protects mental impressions and litigation strategy. The factual content of an
        expert report on the condition of the property is not litigation strategy. Third,
        the policyholder&rsquo;s right to a complete claims-handling investigation under
        the Fair Claims Settlement Practices Regulations supersedes any soft assertion of
        work-product privilege over the investigative materials themselves.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cross-Cutting Patterns
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Scope capture and selective disclosure are distinct games, but they share a common
        underlying logic: the carrier wants to present an objective-looking expert
        determination to the policyholder while retaining behind-the-scenes control over
        what the expert actually evaluates and what the policyholder is allowed to see. The
        policyholder&rsquo;s response in both cases turns on the same principle:{' '}
        <strong>treat the expert&rsquo;s report as the output of a process you are entitled
        to examine</strong>, not as a finished and unreviewable verdict.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Concretely, that means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the engagement letter.</strong> Every time the carrier relies on
          an expert report, ask in writing for a copy of the engagement letter or scope of
          work the carrier provided to the expert. The request often goes unanswered;
          submit the request anyway, because the unanswered request becomes evidence of
          incomplete disclosure if the matter later escalates.
        </li>
        <li>
          <strong>Compare scope to the actual loss.</strong> Read the report against the
          actual scope of the loss and identify what the report does <em>not</em> address.
          If the hygienist tested for two compounds and a complete wildfire-smoke
          evaluation would address dozens, the gap is the story. If the engineer opined on
          structural damage and the actual claim turns on cosmetic damage, the gap is the
          story.
        </li>
        <li>
          <strong>Demand any prior versions of the report.</strong> Ask in writing for any
          earlier drafts, working versions, preliminary findings, or alternative reports.
          Cite California Insurance Code &sect; 2071 (the policyholder&rsquo;s statutory
          right to claim-related documents within fifteen days of a written request) and
          10 CCR &sect; 2695.3 (the insurer&rsquo;s obligation to document material
          claim-investigation activity in the claim file) as the legal basis for the
          request.
        </li>
        <li>
          <strong>Retain your own expert with a deliberately broad scope.</strong> The most
          powerful counter to a scope-captured carrier expert is a policyholder-retained
          expert whose engagement letter explicitly addresses the full set of issues the
          claim involves. The contrast between the carrier&rsquo;s narrow report and a
          full-scope independent report is the entire ball game when the matter reaches
          litigation or appraisal. For the broader framework on policyholder-retained
          industrial hygienists, see our article on{' '}
          <Link href="/resources/when-to-hire-industrial-hygienist" className="text-[#2E74B5] hover:underline">
            when to hire an industrial hygienist
          </Link>.
        </li>
        <li>
          <strong>Document everything.</strong> Every communication with the carrier about
          experts, every refusal to produce an engagement letter, every assertion of
          privilege over prior drafts, every request that goes unanswered &mdash; all of
          it goes into the file. If the matter later escalates to a bad-faith dispute or a
          Department of Insurance complaint, the pattern of selective disclosure is what
          establishes the violation.
        </li>
        <li>
          <strong>Consider professional representation.</strong> Both of these patterns
          are easier to identify, document, and counter when a licensed Public Adjuster or
          insurance coverage attorney is involved. Carriers behave differently when they
          know a credentialed professional is reviewing their work.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Carrier Sometimes Backs Down When It Realizes You Know">
        <p>
          A surprising number of these disputes resolve not in litigation but in the
          ordinary claims-handling process, once the policyholder makes clear that they
          understand the patterns at play. A well-drafted demand letter that cites the
          engagement-letter issue, the prior-version issue, and the Fair Claims
          Settlement Practices Regulations often produces a substantially different
          second offer from the carrier without any need to escalate further. Carriers
          escalate when the policyholder appears uninformed. They sometimes settle on
          terms much closer to the policyholder&rsquo;s number when the policyholder
          appears to understand the playbook.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Department of Insurance Complaints
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who believes a carrier has engaged in scope capture, suppressed an
        earlier expert report, or otherwise violated the Fair Claims Settlement Practices
        Regulations can file a complaint with the California Department of Insurance at
        insurance.ca.gov. The Department investigates patterns of conduct across a
        carrier&rsquo;s book, not just individual disputes; a single complaint contributes
        to the regulatory record on a carrier even if it does not produce immediate relief
        in the individual claim. The complaint should be specific, factual, and
        documentary: name the expert, identify the report, attach the carrier&rsquo;s
        written communications, identify the discrepancy between the report&rsquo;s scope
        and the actual loss, and cite the applicable regulatory provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the broader regulatory framework, see our article on the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          California Fair Claims Settlement Practices Regulations
        </Link>{' '}
        and the related discussion of{' '}
        <Link href="/resources/insurance-code-790" className="text-[#2E74B5] hover:underline">
          California Insurance Code &sect; 790.03
        </Link>{' '}
        and the &ldquo;790 letter&rdquo; that policyholders can use to put a carrier on
        notice of unfair claims-handling practices.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Expert capture and selective disclosure are not isolated incidents. They are
        recurring patterns that policyholder-side practitioners across California observe
        across multiple carriers and across multiple expert categories. The patterns work
        because most policyholders do not know to ask about the engagement letter, do not
        know that earlier versions of a report exist or are entitled to be produced, and
        treat the carrier&rsquo;s expert report as a finished verdict rather than as the
        output of a contestable process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who understands the patterns &mdash; or who works with a Public
        Adjuster or insurance attorney who does &mdash; can dismantle them with a handful
        of direct written requests, a willingness to retain their own broad-scope expert,
        and a clear-eyed reading of what the carrier&rsquo;s report does and does not
        actually say. The policyholder does not need to win an industry-wide reform
        campaign to win their own claim. They just need to refuse to be the audience the
        captured-expert game is designed to fool.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute
          legal advice. The patterns described here are observed across the California
          insurance industry by policyholder-side practitioners; whether any specific
          carrier or expert has engaged in any specific conduct in any specific claim is a
          factual question that must be evaluated on the record of that claim. Always
          consult with a licensed California attorney or a licensed Public Adjuster about
          the specifics of your situation before relying on any of the framework discussed
          here.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Suspect the Carrier&rsquo;s Expert Was Working Within a Narrow Frame?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster can read the carrier&rsquo;s expert report against the
          actual scope of your loss, identify the gaps, request the engagement letter and
          any prior drafts on the record, and coordinate a policyholder-retained expert
          whose scope matches what your claim actually requires. The earlier in the process
          this happens, the easier the patterns are to expose.
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
