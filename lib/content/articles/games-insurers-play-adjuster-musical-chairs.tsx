import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Games Insurers Play: Musical Chairs With Adjusters — The Hidden Cost of Constant Reassignment',
  description:
    'On long-duration California claims — particularly urban wildfire smoke claims — it is not unusual for ten or more adjusters to cycle through a single file over a year or more. Each reassignment resets context, drops continuity, repeats document requests, and pushes back the resolution date. California has a specific regulatory remedy: 10 CCR 2695.7(c) requires a written status report when three or more adjusters are assigned within a six-month period. Most policyholders never hear about the rule, and most adjusters never invoke it.',
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
        Talk to anyone who has navigated a major California property claim for more than
        six months and you will hear some version of the same story. The first adjuster
        seemed engaged. They asked good questions, made an initial inspection, requested
        a reasonable batch of documents. Then they went on vacation, or got reassigned, or
        left the company. A second adjuster appeared, with no familiarity with the file
        and a fresh set of document requests, several of which were duplicates of what the
        first adjuster had already received. Around the time the second adjuster started
        to engage with the substance, they too were reassigned. A third adjuster picked up
        the file. Then a fourth. By the time the claim approaches a year, the policyholder
        has lost track of how many adjusters have been on the file and is repeating the
        same conversation about the same documents for the fifth or sixth time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On long-duration claims &mdash; particularly the urban wildfire smoke claims that
        have dominated the California insurance landscape since the wave of major
        wildfires in the late 2010s and early 2020s &mdash; it is not unusual for ten or
        more adjusters to cycle through a single file before the claim is resolved. The
        pattern has a real and measurable cost. Each handoff resets context. Each new
        adjuster starts behind on the file. Each transition is an opportunity for the
        carrier to revisit earlier scoping decisions, walk back earlier
        acknowledgments, and reset the negotiation. The clock runs the entire time.
      </p>

      <CalloutBox variant="important" title="The Procedural Remedy That Most Policyholders Never Hear About">
        <p>
          California Code of Regulations, Title 10, &sect; 2695.7(c) requires an insurer
          to provide the insured with a <strong>written status report</strong> when three
          or more adjusters have been assigned to the same claim within a six-month
          period. The report must be sent within thirty calendar days of the third
          assignment and must explain the reasons for the reassignments. Most carriers do
          not voluntarily issue this report. Most policyholders never request it because
          they do not know the rule exists. The single act of invoking the rule in writing
          is one of the most effective tools a policyholder has to slow down or reverse
          adjuster churn.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Adjuster Churn Happens
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are honest reasons that adjuster reassignment happens. Adjusters take vacations,
        get sick, change jobs, get promoted, retire. Catastrophic events like the
        Los Angeles area wildfires generate claim volumes that exceed any single
        adjuster&rsquo;s reasonable workload, and carriers do redistribute files to manage
        capacity. Some claims escalate in complexity over time and are appropriately
        reassigned from a junior adjuster to a more experienced one, or from a
        general-line adjuster to a specialty adjuster trained for smoke, structural, or
        commercial losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Those reasons account for a portion of the reassignment activity on any given
        claim. They do not account for the pattern that policyholder-side practitioners
        consistently observe on extended urban-wildfire and other long-duration claims,
        where a file may pass through five, eight, ten, or more adjusters in a single year.
        At that frequency, the reassignments are no longer about vacation coverage or
        workload management. They are about something else.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Patterns Practitioners Observe
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The reassignment after a substantive acknowledgment.</strong> A
          policyholder makes progress with an adjuster &mdash; the adjuster agrees that a
          particular scope of work is reasonable, that a particular cost is necessary,
          that a particular line item should be paid. Days or weeks later, the adjuster is
          reassigned and the file moves to a new handler who declines to honor what the
          prior adjuster acknowledged. The acknowledgment was never put in writing in a
          way that binds the carrier, and the new adjuster treats the question as still
          open.
        </li>
        <li>
          <strong>The reassignment that resets document production.</strong> The first
          adjuster requested documents A, B, and C. The policyholder produced them. The
          second adjuster, without any apparent acknowledgment of the earlier production,
          requests documents A, B, C, D, and E. The policyholder produces them again,
          adding D and E. The third adjuster requests A, B, C, D, E, F, and G. The cycle
          can repeat indefinitely. Each repetition extends the timeline, increases the
          burden on the policyholder, and gives the carrier additional opportunities to
          characterize the policyholder as &ldquo;uncooperative&rdquo; if any individual
          request is not fully satisfied.
        </li>
        <li>
          <strong>The reassignment that loses the file.</strong> Critical documents,
          inspection notes, expert reports, or recorded statements taken by an earlier
          adjuster simply vanish from the file the new adjuster sees. The new adjuster
          asks questions the policyholder already answered. The new adjuster has no
          knowledge of inspections that have already occurred. The earlier work product
          may still exist somewhere in the carrier&rsquo;s system, but it is not what the
          current handler is working from.
        </li>
        <li>
          <strong>The reassignment during litigation escalation.</strong> The claim moves
          toward an appraisal demand, a Department of Insurance complaint, or
          pre-litigation correspondence. The adjuster who handled the substantive claim
          activity is reassigned. The new adjuster has no involvement in the underlying
          history and tells the policyholder that any disputes will be handled by
          coverage counsel or by the appraisal process &mdash; effectively walling off the
          claims-handling record from the new escalation track.
        </li>
        <li>
          <strong>The retroactive disavowal.</strong> A policyholder cites something a
          prior adjuster said or agreed to. The current adjuster says they have no record
          of that conversation, that any prior representations are not binding on the
          carrier, or that the prior adjuster was mistaken. The pattern reaches its
          purest form when a policyholder has documented an early adjuster&rsquo;s
          agreement in writing, only to be told by a successor adjuster that the earlier
          email was &ldquo;not authorized&rdquo; or &ldquo;does not reflect the
          carrier&rsquo;s position.&rdquo;
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 10 CCR &sect; 2695.7(c) Status Report Requirement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Code of Regulations addresses adjuster churn directly. 10 CCR
        &sect; 2695.7(c) provides that when three or more adjusters have been assigned to
        a single claim within a six-month period, the insurer must provide the insured
        with a written status report explaining the reasons for the reassignments. The
        report must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Be provided within thirty calendar days of the assignment that triggers the
          rule (the third assignment within the six-month window).
        </li>
        <li>
          Identify each of the adjusters assigned to the file during that period.
        </li>
        <li>
          Explain why each reassignment occurred.
        </li>
        <li>
          Identify the current handler and the current status of the claim.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rule exists because the regulatory drafters understood, at the time the
        regulations were adopted, that adjuster churn was a meaningful problem in
        California claims handling and that policyholders needed a mechanism to compel
        the carrier to account for it. The rule is not new. It is also not, in practice,
        well-enforced. Carriers do not voluntarily issue these status reports on most
        claims that would qualify; the rule operates as something policyholders must
        affirmatively invoke.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        How to Invoke the Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Invoking the rule is straightforward, but it has to be done in writing and it has
        to be done explicitly. A model request looks like this:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
        <p className="text-gray-700 text-sm italic leading-relaxed">
          &ldquo;Three or more adjusters have been assigned to my claim within the past
          six months. Pursuant to 10 CCR &sect; 2695.7(c), I am requesting a written
          status report identifying each adjuster assigned to the file during that
          period, the dates of each assignment, the reason for each reassignment, the
          identity of the current handler, and the current status of the claim. I am also
          requesting confirmation that all materials produced to prior adjusters &mdash;
          including documents, recorded statements, inspection reports, and expert
          materials &mdash; are part of the file the current handler is working from.
          Please provide the status report within the thirty-day window required by the
          regulation.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The request is short, factual, and citation-anchored. Send it by email and by
        certified mail. Keep the receipt. The carrier&rsquo;s response &mdash; or
        failure to respond &mdash; is now part of the claims-handling record.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Status Report Accomplishes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The status report itself, even if produced in full, does not resolve the
        underlying claim. What it does is several things at once:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It forces the carrier to put the reassignment history on paper.</strong>{' '}
          The act of writing down who was on the file and why often produces an
          explanation that does not hold up well to scrutiny. A carrier that has to
          articulate, in writing, why nine adjusters cycled through a single file in
          eleven months often finds itself documenting a problem rather than excusing
          it.
        </li>
        <li>
          <strong>It puts the carrier on notice that the policyholder knows the
          regulations.</strong> Most claims are handled on the assumption that the
          policyholder is unfamiliar with the procedural framework. A claim where the
          policyholder cites the right regulation in the right tone is handled
          differently from a claim where the policyholder does not.
        </li>
        <li>
          <strong>It creates a bad-faith evidentiary anchor.</strong> If the matter
          escalates to a bad-faith dispute, the carrier&rsquo;s failure to comply with a
          properly invoked 2695.7(c) request becomes a discrete violation of the Fair
          Claims Settlement Practices Regulations &mdash; not just one factor in a
          broader pattern, but a specific regulatory failing on the documentary record.
        </li>
        <li>
          <strong>It often produces a stabilization in the handler assignment.</strong>{' '}
          Carriers that receive a 2695.7(c) demand sometimes respond by assigning the
          claim to a more senior or specialized handler and keeping that handler on the
          file through resolution. The reassignment pattern slows down or stops, simply
          because the carrier no longer wants to keep documenting it.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Pair the 2695.7(c) Request With a 2695.5(b) Cleanup">
        <p>
          A 2695.7(c) status report request pairs well with a 10 CCR &sect; 2695.5(b)
          demand that the carrier respond to any open communications within fifteen
          calendar days. The two regulations cover different aspects of the same
          underlying problem: 2695.7(c) addresses the structural issue of who is handling
          the file, and 2695.5(b) addresses the operational issue of whether the file is
          actually moving. A policyholder who is being run through the adjuster-churn
          treadmill typically has both problems at once, and both regulations should be
          cited in the same demand letter.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for the Policyholder
      </h2>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Keep a log of every adjuster on the file from day one.</strong> Date of
          first contact, name, title, phone, email, and the substance of any conversation
          or written communication. This log is the foundation of the 2695.7(c) request
          when the time comes; you cannot invoke a three-in-six-months rule if you have
          not kept track of the three-in-six-months.
        </li>
        <li>
          <strong>Confirm every significant adjuster statement in writing.</strong> A
          phone call with the adjuster where they agree to something becomes useless when
          the adjuster is reassigned. A follow-up email that says &ldquo;Confirming our
          conversation today: you agreed that [X]. Please let me know if I have
          misunderstood&rdquo; locks the acknowledgment into the documentary record.
        </li>
        <li>
          <strong>Build the file as if you will need to brief a new adjuster every
          month.</strong> Because you might. A well-organized claim file &mdash; with
          documents, photos, correspondence, expert reports, and a running narrative
          &mdash; lets you onboard a new handler quickly when one appears, and keeps the
          carrier&rsquo;s churn from costing you control of the substantive record.
        </li>
        <li>
          <strong>Invoke 2695.7(c) the moment the third adjuster is assigned.</strong>{' '}
          Do not wait for the fifth or sixth handler. The rule triggers at the third
          assignment within six months. Invoking it early establishes the documentary
          record at the moment the carrier is most exposed.
        </li>
        <li>
          <strong>Track the carrier&rsquo;s thirty-day response window.</strong> If the
          carrier fails to produce the status report within thirty days of the triggering
          assignment, that failure is itself a regulatory violation. Document it.
        </li>
        <li>
          <strong>Escalate to the Department of Insurance when warranted.</strong> A
          carrier that ignores a properly invoked 2695.7(c) request, combined with a
          documented pattern of adjuster churn on a long-duration claim, is a strong
          candidate for a Department of Insurance complaint. The Department investigates
          patterns of conduct across a carrier&rsquo;s book of business, and complaints
          documenting specific regulatory violations are more actionable than complaints
          framed as general dissatisfaction.
        </li>
        <li>
          <strong>Consider professional representation on long-duration claims.</strong>{' '}
          A claim that is approaching six months without resolution &mdash; particularly
          an urban wildfire smoke claim &mdash; is the kind of claim where a licensed
          Public Adjuster or insurance coverage attorney materially changes the dynamic.
          The adjuster-churn game works best on policyholders who lack continuity and
          professional support. When a credentialed representative is on the file, the
          churn pattern often eases simply because the carrier no longer has the same
          informational advantage.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Patterns
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjuster musical chairs rarely occurs in isolation. On long-duration claims, it
        usually co-occurs with the{' '}
        <Link href="/resources/games-insurers-play-expert-capture" className="text-[#2E74B5] hover:underline">
          expert capture and selective disclosure patterns
        </Link>{' '}
        described in our companion article, the{' '}
        <Link href="/resources/games-insurers-play-preferred-vendor" className="text-[#2E74B5] hover:underline">
          preferred-vendor steering game
        </Link>
        , and the broader{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] hover:underline">
          duty-to-investigate failures
        </Link>{' '}
        that{' '}
        <Link href="/resources/insurance-code-790" className="text-[#2E74B5] hover:underline">
          California Insurance Code &sect; 790.03
        </Link>{' '}
        and the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        were designed to address. The patterns reinforce each other. Adjuster churn lets
        the carrier walk back earlier scoping acknowledgments. Expert scope-limiting lets
        the carrier under-document the actual loss. Preferred-vendor steering lets the
        carrier rely on a contractor whose number does not reflect the real cost of
        repair. The combined effect on the policyholder is a sustained downward pressure
        on the claim value over a long timeline, with each game reinforcing the others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recognizing all of them as part of the same overall pattern &mdash; and invoking
        the procedural rules that exist for each &mdash; is the policyholder&rsquo;s most
        effective response.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjuster churn is one of the highest-cost, lowest-visibility games in long-duration
        California claims. It produces real economic damage to the policyholder &mdash;
        delayed resolution, repeated document production, walked-back acknowledgments,
        lost continuity &mdash; and it is largely invisible because each individual
        reassignment looks like a routine personnel matter rather than a pattern. The
        regulatory remedy exists: 10 CCR &sect; 2695.7(c) was written for exactly this
        situation. The remedy is also under-used because most policyholders never hear
        about it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim is approaching six months and you have been handed off to a third,
        fourth, or fifth adjuster, send the 2695.7(c) request today. It costs nothing. It
        takes ten minutes. It is one of the highest-leverage procedural moves available
        to a California policyholder, and almost no one outside the policyholder-advocate
        community knows the rule exists.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute
          legal advice. The regulatory citations are accurate as of the date of publication
          but should be confirmed against the current version of the California Code of
          Regulations before being relied upon in formal communications with a carrier.
          Always consult with a licensed California attorney or Public Adjuster about your
          specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Lost Count of How Many Adjusters Have Been on Your Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your claim has been running for more than six months and you have been
          handed off to three or more adjusters, the regulatory framework already provides
          a tool to slow the churn and force the carrier to account for it. A licensed
          Public Adjuster can document the reassignment history, send the 2695.7(c)
          request properly, and stabilize the claims-handling relationship for the rest of
          the file. Adjuster musical chairs is one of the easier games to disrupt once
          you know what you are looking at.
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
