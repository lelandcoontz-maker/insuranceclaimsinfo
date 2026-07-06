import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When a TPA Handles Your Property Claim: Who Actually Has Authority?',
  description:
    'A third-party administrator may run every step of a property claim, but the policy duties stay with the insurer. Who holds authority and where to escalate.',
  summary:
    "When a company the policyholder has never heard of takes over claim communications, it is usually a third-party administrator (TPA) working for the insurer. Administration can be delegated; responsibility cannot. This article covers how TPAs enter the picture, why California claim deadlines don't pause while a handler waits for carrier authority, how settlement-authority caps work in practice, and why a CDI complaint names the carrier rather than the TPA.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about a specific
          situation &mdash; including any question about the remedies available on a
          particular policy &mdash; the reader should consult a licensed California
          attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A practitioner&apos;s guide to third-party administrators in California
          property claims &mdash; how a company whose name appears nowhere on the
          policy ends up controlling every inspection, estimate, and payment decision;
          which duties stay with the insurer no matter who administers the claim; and
          the practical habits that keep a TPA-handled claim from drifting.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It usually starts with a letter. A policyholder files a property claim with
        the insurance company named on the declarations page, and the acknowledgment
        arrives from a company with a different name entirely &mdash; often something
        generic, ending in &ldquo;Claims Services,&rdquo; &ldquo;Claims
        Solutions,&rdquo; or &ldquo;Claims Management.&rdquo; The letter says this
        company will be &ldquo;administering&rdquo; or &ldquo;handling&rdquo; the
        claim. From that point forward, every phone call, every inspection, every
        estimate, and every check may come from &mdash; or through &mdash; a company
        the insured has never heard of and never chose.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That company is a third-party administrator, or TPA: a claims-administration
        firm that handles claims on an insurer&apos;s behalf. The arrangement is
        common, lawful, and often invisible until the moment it matters &mdash; the
        moment the insured needs to know who can actually say yes to a number, who
        owes the duties the policy and California law impose, and who to name when
        the claim goes sideways. This article answers those questions. The short
        version: the TPA holds the pen, but the carrier owns the promise.
      </p>

      <CalloutBox variant="warning" title="The Name on the Letterhead Is Not the Name on the Policy">
        <p>
          The insurance contract is between the policyholder and the{' '}
          <strong>insurer</strong> named on the declarations page. A TPA is the
          insurer&apos;s hired administrator, not a party to the policy. Whatever the
          letterhead says, the duties &mdash; coverage, deadlines, payment &mdash;
          belong to the carrier, and the carrier cannot hand them off by hiring
          someone else to do the paperwork.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a TPA Ends Up on a Property Claim
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        TPAs appear on property claims through a handful of recurring channels, and
        knowing which one produced the TPA on a given claim tells the insured a great
        deal about how the claim will run.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Surplus Lines and Program Business
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A large and growing channel in California is the surplus lines market. Many
        non-admitted carriers write California homeowner risks through
        &ldquo;programs&rdquo; &mdash; blocks of business underwritten by a managing
        general agent (MGA) with delegated authority from the carrier. A carrier that
        delegates its underwriting to an MGA very often delegates its claims handling
        to a TPA as well; some MGAs run affiliated claims-administration arms, and
        some carriers writing program business have little or no claims staff of
        their own for that program. The result is a policy where the insured may
        never interact with the actual insurer at all: the broker placed it, the MGA
        underwrote it, and the TPA adjusts it. Policyholders in this market should
        read this article alongside its companion on{' '}
        <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] underline">
          surplus lines and non-admitted carriers
        </Link>
        , which covers what non-admitted status means for the policy itself &mdash;
        this article stays on the claims-handling side.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Self-Insured Entities
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Large businesses, public entities, and associations sometimes self-insure
        part of their property or liability exposure and hire a TPA to administer the
        claims. Here the TPA is standing in for the self-insured entity rather than
        for an insurance company. A claimant dealing with a self-insured
        entity&apos;s TPA is in a different legal posture than a first-party
        policyholder, and the details are beyond this article&apos;s scope &mdash;
        but the core structural point is the same: the TPA administers; the
        responsible party remains responsible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Catastrophe Surge and Overflow
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even fully staffed admitted carriers hire TPAs when volume outruns capacity
        &mdash; after a major wildfire, a windstorm, a freeze event. A carrier that
        normally handles claims in-house may route thousands of catastrophe claims
        to a TPA for intake, inspection coordination, and initial adjustment. These
        arrangements tend to be temporary and volume-driven, and the carrier&apos;s
        own examiners usually stay closer to the file than in program business. The
        practical significance for the insured is the same in every channel, though:
        one more layer between the person handling the claim and the person with
        authority to resolve it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A TPA Is Not the Same Thing as an Independent Adjuster
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The vocabulary here is easy to tangle. An independent adjuster is typically
        an individual (or the firm that deploys them) hired to perform adjusting
        work on a claim &mdash; most often the field inspection and estimate. A TPA
        is an administration company engaged to run the claim itself: intake,
        assignment, correspondence, reserve recommendations, coverage analysis
        drafts, payment processing. On a TPA-handled claim, the TPA&apos;s desk
        examiner may in turn assign an independent adjuster to inspect the property
        &mdash; a contractor hired by a contractor, both working for the carrier.
        This site&apos;s articles on{' '}
        <Link href="/resources/independent-adjuster-explained" className="text-[#2E74B5] underline">
          who independent adjusters actually work for
        </Link>{' '}
        and{' '}
        <Link href="/resources/adjuster-types" className="text-[#2E74B5] underline">
          the types of insurance adjusters
        </Link>{' '}
        cover the people; this article covers the company those people report to
        when the company is not the insurer.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        One consequence of the layering deserves emphasis. On a claim run by a TPA
        that assigns an independent adjuster, the insured&apos;s field contact works
        for a firm, which works for the TPA, which works for the carrier. Every
        opinion the field adjuster expresses passes upward through at least two
        review layers before it becomes a claim decision &mdash; and can be revised
        at each one. The friendly inspector who agrees the roof needs replacement
        has not committed anyone to anything. That is not cynicism; it is the org
        chart.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Core Principle: Administration Can Be Delegated, Responsibility Cannot
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important thing to understand about a TPA-handled claim is
        where the duties sit. The insurance contract is between the insured and the
        carrier. The duty to investigate, the duty to pay covered benefits, the duty
        of good faith and fair dealing that California law reads into every policy
        &mdash; all of it runs from the carrier to the insured. Hiring a TPA changes
        who performs the work. It does not change who owes it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations (10 CCR
        section 2695.1 and following) are built on the same structure. The
        regulations govern the conduct of &ldquo;licensees&rdquo; and reach the
        claims agents acting on their behalf &mdash; the regulations are written with
        claims agents in view, and the practical effect is that people and entities
        handling a claim for an insurer are handling it <em>as</em> the insurer for
        claim-handling purposes. And the
        regulations reflect, at 10 CCR section 2695.1(g), the principle that
        underlies this whole article: information used to process or establish the
        value of a claim does not lose its regulatory weight because it came from a
        third-party source &mdash; the responsible licensee answers for it either way.
        (The companion duty to maintain a complete claim file &mdash; all documents,
        notes, and work papers &mdash; lives in section 2695.3(a).) In substance, bringing a third party into the
        claims process does not absolve the responsible licensee of its obligations
        under the regulations. The carrier cannot point at the TPA; for
        claim-handling purposes, the TPA&apos;s conduct is the carrier&apos;s
        conduct.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a technicality. It is the answer to the question policyholders
        on TPA-handled claims ask most often &mdash; <em>who is actually responsible
        here?</em> &mdash; and it drives every practical recommendation in the rest
        of this article. The insured&apos;s rights do not shrink because the carrier
        outsourced the work, and the insured&apos;s remedies do not run against the
        outsourcing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Deadlines Run on the Claim, Not on the TPA&apos;s Process
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most common failure pattern on TPA-handled claims is drift. The file
        moves between the TPA&apos;s desk and the carrier&apos;s, each waiting on
        the other, while the insured waits on both. The handler says the estimate is
        &ldquo;with the carrier for approval.&rdquo; The carrier, if the insured can
        reach anyone there at all, says the claim is &ldquo;being handled by our
        administrator.&rdquo; Weeks pass in the seam.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s claim-handling deadlines were not written with an
        exception for that seam. Three of them do most of the work on a property
        claim:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>15 calendar days to respond to communications.</strong> Under 10
          CCR section 2695.5(b), a claimant communication that reasonably suggests a
          response is expected must be answered &mdash; completely &mdash; within 15
          calendar days.
        </li>
        <li>
          <strong>40 calendar days to accept or deny.</strong> Under 10 CCR section
          2695.7(b), once the insurer has received proof of claim, it has 40
          calendar days to accept or deny the claim in whole or in part; if it needs
          more time, section 2695.7(c) requires written status letters explaining
          why, at least every 30 calendar days.
        </li>
        <li>
          <strong>30 calendar days to pay what has been accepted.</strong> Under 10
          CCR section 2695.7(h), once a claim (or part of one) is accepted, payment
          of the accepted amount is due immediately, and in no event more than 30
          calendar days after acceptance.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        These deadlines run on the claim. They do not run on the TPA&apos;s internal
        workflow, and nothing in the regulations suggests that a handler awaiting
        &ldquo;carrier authority&rdquo; pauses them. A TPA that cannot respond
        within 15 calendar days because the file is sitting in a carrier
        examiner&apos;s queue has described an internal staffing arrangement, not a
        regulatory excuse. From the insured&apos;s side of the claim, the
        combination of TPA and carrier is a single obligation with two mailboxes.
      </p>

      <CalloutBox variant="important" title="&ldquo;Waiting on the Carrier&rdquo; Is Not a Pause Button">
        <p>
          When a TPA handler says a decision is pending carrier approval, the
          regulatory clocks keep running. A policyholder might consider noting, in
          writing, the date each request was made and each deadline passed &mdash;
          the drift between TPA and carrier is invisible unless someone documents
          it, and the person with the incentive to document it is the insured.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Authority Caps: The Handler Who Has to Send It Up
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        TPA desk examiners rarely hold unlimited settlement authority. The service
        agreement between a carrier and its TPA typically caps what the TPA can
        approve on its own &mdash; a dollar threshold per claim, per payment, or per
        reserve change &mdash; above which the file must go to the carrier for
        approval. The caps vary by program and are almost never disclosed
        voluntarily, but their fingerprints are easy to spot: the handler who agrees
        a supplement is reasonable but &ldquo;has to send it up&rdquo;; the payment
        that stalls precisely when the claim crosses a round number; the sudden
        appearance of a carrier examiner on a claim that had been TPA-only for
        months.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insured is not powerless in front of an authority cap &mdash; the
        insured simply needs to know it exists. Two practices help. First, the
        question can be asked directly, in writing: what is the handler&apos;s
        settlement authority on this claim, and who holds the next level of
        authority? Handlers are not always permitted to answer with a number, but
        even a refusal tells the insured something &mdash; and the question itself
        signals that the insured understands the structure. A written answer that
        names the carrier examiner who holds approval authority is worth more than
        a month of calls to the desk handler who does not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Second, demands should be sized and addressed with the cap in mind. A demand
        that exceeds the handler&apos;s authority is, by definition, a demand the
        handler cannot accept &mdash; only relay. Sending it solely to the TPA
        guarantees a delay while it climbs the chain, and guarantees the carrier
        receives it filtered through the TPA&apos;s summary. A demand of any real
        size on a TPA-handled claim is therefore sensibly addressed to <em>both</em>{' '}
        the TPA handler and the carrier &mdash; the party that actually owes the
        duty and, above the cap, the only party that can perform it. There is
        nothing improper about writing to one&apos;s own insurer; the insured&apos;s
        contract is with the carrier, whatever routing the carrier has arranged for
        itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Hygiene on a TPA-Handled Claim
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Identify the Actual Insurer &mdash; Early
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The first document worth pulling on any TPA-handled claim is the
        declarations page, because it names the entity that actually issued the
        policy. On program business the paper trail can be genuinely confusing
        &mdash; the broker&apos;s name, the MGA&apos;s brand, the program name, and
        the TPA&apos;s name may all appear on various documents, while the insurer
        appears once, in small print, on the dec page. That name is the counterparty.
        Every significant piece of correspondence &mdash; the proof of loss, the
        demand, the dispute of an estimate, the request for documents &mdash;
        sensibly carries the carrier&apos;s name in the caption and, where an
        address is available, goes to the carrier as well as the TPA. The habit
        costs a stamp and removes, permanently, the argument that the carrier never
        knew what its administrator was doing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Claim File Includes the TPA&apos;s File
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code section 2071 requires insurers to provide copies
        of claim-related documents within 15 calendar days of a request &mdash; best
        made in writing, so the clock is provable. The statutory definition turns on
        purpose, not authorship: it reaches documents that relate to the evaluation
        of damages, expressly including third-party findings on the amount of loss.
        On a TPA-handled claim, that purpose-based definition matters enormously,
        because most of the documents that evaluate the loss &mdash; the field
        estimate, the desk review, the reserve worksheets, and the TPA&apos;s
        communications with the carrier about scope and value &mdash; were written
        by the TPA, not the carrier. A TPA-carrier email recommending a number, or
        seeking authority for one, is a communication about the amount of loss; the
        insured requesting the claim file might consider naming that category
        expressly. How far the definition reaches any particular document is
        ultimately a question that can end up with a regulator or a court &mdash;
        the same hedge that applies to every category of withheld document &mdash;
        but the request costs nothing and the production duty belongs, as always, to
        the carrier. This site&apos;s companion article on{' '}
        <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
          the claim file policyholders never see
        </Link>{' '}
        covers the request technique in detail, including how to name electronic
        categories and what to do when the production comes back thin.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A CDI Complaint Names the Carrier
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a TPA-handled claim stalls badly enough to warrant a complaint to the
        California Department of Insurance, policyholders sometimes hesitate over
        the form: the company mistreating them is the TPA, but the TPA is not their
        insurance company. The hesitation resolves the same way everything else in
        this article does. The complaint names the <em>carrier</em> &mdash; the
        entity that issued the policy and owes the duties &mdash; and describes the
        TPA&apos;s conduct as the carrier&apos;s claims handling, which for
        regulatory purposes it is. Identifying the TPA by name in the narrative is
        useful; treating it as the respondent is a category error that can slow the
        Department&apos;s processing. The site&apos;s{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
          guide to filing a CDI complaint
        </Link>{' '}
        walks through the process step by step.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Surplus-Lines Wrinkle
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A substantial share of TPA-handled property claims in California sits in
        the surplus lines market.
        Non-admitted carriers are not licensed by the California Department of
        Insurance; they operate under a separate oversight structure, and the
        CDI&apos;s authority over their claims practices is more limited than its
        authority over admitted carriers. This article&apos;s deadline discussion is
        written with the admitted market in mind. How far any particular
        claim-handling regulation reaches a specific non-admitted carrier&apos;s
        claim &mdash; and what remedies follow when handling goes wrong on a
        surplus lines policy &mdash; are questions this article deliberately does
        not answer, because the answer depends on facts and law that vary by policy
        and by carrier. The reader should not assume the protections are identical,
        and should not assume they are absent either.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What survives the wrinkle intact is the structural point. Whoever regulates
        the carrier, the policy is still a contract, the carrier is still the party
        that made the promise, and the TPA is still the carrier&apos;s administrator
        rather than a substitute obligor. Correspondence still sensibly goes to
        both; demands above the handler&apos;s authority still sensibly reach the
        entity that holds it. For the coverage-side differences &mdash; guaranty
        fund protection, rate oversight, policy-form variation &mdash; the reader
        should see the{' '}
        <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] underline">
          surplus lines companion article
        </Link>
        ; for legal questions about remedies on a specific non-admitted policy, a
        licensed California attorney is the right resource.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When TPAs Work Fine &mdash; and What the Point Actually Is
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this should be read as an indictment of TPAs as a category. Many are
        professional operations staffed by experienced examiners, and plenty of
        TPA-handled claims are adjusted promptly and paid fairly &mdash; sometimes
        more promptly than a short-staffed carrier would have managed alone. A TPA
        that answers its phone, meets the regulatory deadlines, and holds sensible
        authority for the size of the claim is a non-event, and the insured on such
        a claim may never need anything in this article.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The article&apos;s point is narrower and survives the good TPAs: on a claim
        handled by a company that is not the insurer, the insured needs to know two
        things that the paperwork obscures &mdash; who holds the pen, and who owes
        the duties. The pen sits with the TPA handler, up to a cap the insured is
        rarely told about. The duties sit with the carrier, all of them, all the
        time. Every practical technique above &mdash; identifying the insurer,
        writing to both, requesting the file, asking about authority, naming the
        carrier at the CDI &mdash; is just that one distinction applied to a
        different piece of the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Who is the TPA on a claim, and why is its name different from the insurance
        company&apos;s?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A TPA &mdash; third-party administrator &mdash; is a claims-administration
        company the insurer hired to handle claims on its behalf. Its name differs
        from the insurer&apos;s because it is a different company: the insurer wrote
        the policy, and the TPA administers the claim under a service agreement the
        policyholder never sees. The actual insurer is named on the declarations
        page of the policy. TPAs are especially common on surplus lines and
        MGA-program policies, on self-insured programs, and during catastrophe
        surges when carriers outsource overflow volume.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is the insurance company still responsible when a TPA is handling the claim?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. The policy is a contract between the insured and the carrier, and the
        duties under it &mdash; investigation, timely decisions, payment of covered
        benefits &mdash; belong to the carrier regardless of who performs the work.
        California&apos;s Fair Claims Settlement Practices Regulations reflect the
        same structure: they govern licensees and the claims agents acting for
        them; 10 CCR section 2695.1(g) keeps the responsible licensee accountable
        for third-party-sourced information used to process or value the claim, and
        section 2695.3(a) separately requires a complete claim file &mdash; no matter
        who generated the contents. For claim-handling purposes, the TPA&apos;s conduct is the
        carrier&apos;s conduct.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Do California claim deadlines still apply when the TPA says it is waiting
        for carrier authority?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The regulatory deadlines run on the claim, not on the TPA&apos;s internal
        process, and nothing in the regulations treats &ldquo;awaiting carrier
        authority&rdquo; as a pause. The 15-calendar-day duty to respond to
        communications (10 CCR section 2695.5(b)), the 40-calendar-day duty to
        accept or deny after proof of claim (section 2695.7(b)), and the
        30-calendar-day duty to pay accepted amounts (section 2695.7(h)) all
        continue running while the file sits in the seam between TPA and carrier.
        An insured watching a deadline pass might consider documenting the dates in
        writing to both companies &mdash; drift is only provable if someone kept
        the calendar.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is a TPA the same as an independent adjuster?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        No. An independent adjuster is a contractor (or contracting firm) hired to
        perform adjusting work &mdash; typically the field inspection and estimate
        &mdash; while a TPA is a company engaged to administer the claim as a whole:
        correspondence, coverage analysis, payment processing, file management. The
        two frequently coexist on one claim, with the TPA assigning an independent
        adjuster to inspect. Both work for the carrier. This site&apos;s articles on{' '}
        <Link href="/resources/independent-adjuster-explained" className="text-[#2E74B5] underline">
          independent adjusters
        </Link>{' '}
        and{' '}
        <Link href="/resources/adjuster-types" className="text-[#2E74B5] underline">
          adjuster types
        </Link>{' '}
        map the individual roles in detail.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        If the TPA is mishandling the claim, does the CDI complaint name the TPA or
        the insurer?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer. The carrier is the licensed entity that owes the policy duties,
        and the TPA&apos;s handling is attributed to it for claim-handling purposes.
        The complaint narrative can &mdash; and usually should &mdash; identify the
        TPA by name and describe its conduct specifically, but the respondent is the
        company on the declarations page. One caveat: where the carrier is a
        non-admitted surplus lines insurer, the CDI&apos;s authority is more
        limited, and the practical value of a complaint differs; the surplus lines
        companion article covers that landscape, and remedy questions on a specific
        policy belong with counsel.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/surplus-lines-non-admitted-carriers" className="text-[#2E74B5] underline">
            Surplus Lines Insurance and Non-Admitted Carriers
          </Link>{' '}
          &mdash; the companion article: what non-admitted status means for the
          policy, the market that produces most TPA-handled claims
        </li>
        <li>
          <Link href="/resources/independent-adjuster-explained" className="text-[#2E74B5] underline">
            The Independent Adjuster: Who They Actually Work For
          </Link>{' '}
          &mdash; the individual contractor a TPA often sends to inspect the
          property
        </li>
        <li>
          <Link href="/resources/adjuster-types" className="text-[#2E74B5] underline">
            Types of Insurance Adjusters
          </Link>{' '}
          &mdash; staff, independent, desk, field, and Public Adjusters, and who
          each one works for
        </li>
        <li>
          <Link href="/resources/claim-file-documents-you-never-see" className="text-[#2E74B5] underline">
            The Claim File You Never See
          </Link>{' '}
          &mdash; the document-request techniques that reach the TPA&apos;s notes,
          estimates, and communications
        </li>
        <li>
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
            How to File a CDI Complaint
          </Link>{' '}
          &mdash; the step-by-step process, including how to describe a
          TPA-handled claim
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        A property claim handled by a TPA is still a claim against the insurer that
        wrote the policy. The administrator&apos;s name on the letterhead changes
        who does the work &mdash; the inspections, the estimates, the letters
        &mdash; but not who owes it, not when it is due, and not who answers for it
        when it goes wrong. The policyholder who identifies the carrier on day one,
        writes to both companies, asks who holds authority, and requests the file
        has converted an opaque arrangement into a documented one. On TPA-handled
        claims, that conversion is most of the battle.
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
