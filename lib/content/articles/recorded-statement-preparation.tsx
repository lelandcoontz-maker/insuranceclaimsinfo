import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "How to Prepare for a Recorded Statement or Examination Under Oath",
  description:
    "What to expect when your insurer requests a recorded statement or examination under oath, how to prepare, alternatives to consider, and when to involve an attorney.",
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
        At some point during your insurance claim, the adjuster may ask you for a recorded
        statement. In some cases, the insurer may go further and demand a formal examination
        under oath. These are different processes with different legal weight, different
        consequences, and different levels of risk. Understanding the distinction &mdash; and
        knowing how to prepare for either one &mdash; can make a significant difference in
        the outcome of your claim.
      </p>

      {/* ── The Distinction ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Recorded Statement vs. Examination Under Oath: They Are Not the Same Thing
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="p-3 text-left font-semibold w-1/3">&nbsp;</th>
              <th className="p-3 text-left font-semibold w-1/3">Recorded Statement</th>
              <th className="p-3 text-left font-semibold w-1/3">Examination Under Oath</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700 font-semibold">What it is</td>
              <td className="p-3 text-gray-700">Informal phone or in-person interview, recorded by the adjuster</td>
              <td className="p-3 text-gray-700">Formal sworn proceeding, often with a court reporter</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700 font-semibold">Who conducts it</td>
              <td className="p-3 text-gray-700">The claims adjuster</td>
              <td className="p-3 text-gray-700">The insurer&apos;s attorney, typically</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700 font-semibold">Under oath</td>
              <td className="p-3 text-gray-700">No</td>
              <td className="p-3 text-gray-700">Yes &mdash; testimony is sworn</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700 font-semibold">Policy condition</td>
              <td className="p-3 text-gray-700">Generally no &mdash; not a standard policy requirement</td>
              <td className="p-3 text-gray-700">Yes &mdash; most policies include an EUO provision</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700 font-semibold">Consequence of refusal</td>
              <td className="p-3 text-gray-700">Insurer may escalate to EUO demand</td>
              <td className="p-3 text-gray-700">May be grounds for coverage denial</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700 font-semibold">Attorney involvement</td>
              <td className="p-3 text-gray-700">Optional but advisable</td>
              <td className="p-3 text-gray-700">Strongly recommended &mdash; insurer&apos;s attorney will be present</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700 font-semibold">Formality</td>
              <td className="p-3 text-gray-700">Low &mdash; usually a phone call</td>
              <td className="p-3 text-gray-700">High &mdash; similar to a deposition</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        The key distinction is this: an examination under oath is a policy condition. If the
        insurer properly demands one and you refuse without justification, you may forfeit
        coverage. A recorded statement, by contrast, is an informal request. The insurer&apos;s
        duty to investigate your claim under 10 CCR &sect; 2695.7(b) is not contingent on
        your agreement to be recorded. But as a practical matter, how you handle a recorded
        statement request matters enormously. For the full discussion of EUOs, see our
        article on{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          examination under oath
        </Link>.
      </p>

      {/* ── Why They Want It ──────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why the Insurer Wants a Recorded Statement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies request recorded statements for several reasons, and not all
        of them are adversarial:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Documenting the facts of the loss.</strong> The adjuster wants your account
          of what happened, when it happened, when you discovered it, and what you did
          afterward. This is a legitimate part of the claims investigation.
        </li>
        <li>
          <strong>Establishing the timeline.</strong> When did you first notice the damage?
          When did you report it? What happened between discovery and the call? The timeline
          matters for coverage analysis.
        </li>
        <li>
          <strong>Assessing cooperation.</strong> The insurer is evaluating whether you are
          being forthcoming. Evasive or inconsistent answers can trigger an SIU referral.
        </li>
        <li>
          <strong>Creating a record.</strong> Once recorded, your statements become part of
          the claim file. If you later say something different, the inconsistency may be
          used against you. This is the primary risk.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-6">
        The Key Question: What Is the Insurer Actually Trying to Find Out?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before agreeing to any statement &mdash; recorded or sworn &mdash; try to discern
        what the insurer is focused on. Are they asking routine questions about the facts of
        the loss? Are they probing for inconsistencies in your account? Are they investigating
        a specific coverage question, like whether the damage was sudden or gradual? Or are
        they looking for evidence of fraud or misrepresentation?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the insurer&apos;s objective helps you prepare. If the questions are
        routine &mdash; when did the loss occur, what did you observe, what mitigation did
        you perform &mdash; there is little reason for concern. If the insurer is focused on
        a narrow coverage issue, knowing that in advance lets you review the relevant facts.
        If the tone suggests an SIU investigation, that is a signal to involve an attorney
        before the interview, not after.
      </p>

      {/* ── Non-Insureds ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Statements from Non-Insureds: Boyfriends, Girlfriends, and Household Members
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers will sometimes attempt to demand recorded statements or examinations under
        oath from people who are not named on the policy &mdash; a boyfriend, girlfriend,
        roommate, or other household member who is not a named insured or a resident
        relative qualifying as an unnamed insured under the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Generally, these individuals have no contractual obligation to the insurer. The
        cooperation clause and the EUO provision in the policy apply to the
        &ldquo;insured&rdquo; &mdash; the named insured and, depending on the policy
        language, resident relatives who qualify as insureds. Someone who merely lives in
        the household but is not an insured under the policy has not agreed to the policy
        conditions and cannot be compelled to provide a statement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That does not mean the insurer will not ask. They may pressure the named insured to
        &ldquo;produce&rdquo; the household member for a statement, or imply that the claim
        cannot proceed without one. If the insurer insists on a statement from a non-insured
        household member, consult an attorney about whether the request has any contractual
        basis.
      </p>

      {/* ── The Practical Risk of Refusing ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Outright Refusal Is Risky
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While you are not contractually required to give a recorded statement in most cases,
        refusing one outright is a dangerous move. Here is what typically happens:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          You decline the recorded statement.
        </li>
        <li>
          The insurer interprets this as a cooperation concern &mdash; fairly or not.
        </li>
        <li>
          The claim is referred to the Special Investigations Unit (SIU) or the insurer&apos;s
          attorney.
        </li>
        <li>
          The insurer demands a formal examination under oath &mdash; which <em>is</em> a
          policy condition.
        </li>
        <li>
          You now need an attorney for a formal, adversarial proceeding that is significantly
          more expensive and stressful than the informal recorded statement you declined.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The recorded statement, for all its risks, is the easier of the two processes. The
        goal is not to avoid it entirely but to manage it on terms that protect you.
      </p>

      {/* ── Negotiation Strategies ────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Strategies for Managing the Request
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The better approach is negotiation, not refusal. Here are strategies that can protect
        you while maintaining cooperation:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-6">
        Strategy 1: Written Questions First, Recorded Interview to Follow
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the insurer to submit their questions in writing. You answer them at your own
        pace, with time to be accurate and thorough. Once the written questions are complete,
        you agree to a recorded follow-up interview. This approach has several advantages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>You know in advance what the insurer is focused on</li>
        <li>Many questions are already answered before the recording begins</li>
        <li>The recorded session is shorter and less exhausting</li>
        <li>You have demonstrated full cooperation at every step</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This sequence is especially reasonable &mdash; and harder for the insurer to refuse
        &mdash; when the insured has a legitimate basis for needing the accommodation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Limited English proficiency or not a native English speaker</li>
        <li>Hearing difficulties</li>
        <li>Cognitive issues or early-onset dementia</li>
        <li>Mental confusion or emotional distress from a recent catastrophic loss</li>
        <li>Advanced age or medical conditions that make extended phone interviews difficult</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurer that refuses a reasonable accommodation for a willing, cooperating
        policyholder &mdash; particularly one with documented health or language challenges
        &mdash; may be creating a record that an attorney could later use to the
        policyholder&apos;s advantage. Consult with an attorney about your specific situation.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-6">
        Strategy 2: Consult an Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recorded statement is an informal process &mdash; it is not a deposition or an
        examination under oath. With an EUO, the insurer&apos;s attorney is present, you
        typically need your own attorney on the record, and everyone knows the lawyers are
        in the room. A recorded statement is different. It is usually a phone call between
        the adjuster and the insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nothing prevents a policyholder from consulting with an attorney beforehand to
        understand what to expect. And because a recorded statement is not a deposition,
        there is no procedural rule governing who may be sitting next to you in your own
        home during an informal phone call &mdash; or whether you happen to be taking the
        call from your attorney&apos;s office. Whether that matters is a conversation to
        have with your attorney.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3 mt-6">
        Strategy 3: Unrecorded Interview
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can offer to cooperate fully and answer every question the adjuster has &mdash;
        without consenting to the recording itself. Some adjusters will accept this. Others
        will push back. If the adjuster insists on recording and you are uncomfortable,
        the written-questions-first approach (Strategy 1) is a reasonable middle ground.
      </p>

      {/* ── What to Expect ────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What to Expect During a Recorded Statement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you proceed with a recorded statement, here is what typically happens:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>The adjuster identifies themselves and asks for your consent to record.</strong>{' '}
          They will typically state the date, your name, the claim number, and ask you to
          confirm that you are aware the conversation is being recorded and that you consent.
        </li>
        <li>
          <strong>Background questions.</strong> Your name, address, how long you have lived
          at the property, who else lives there, your occupation.
        </li>
        <li>
          <strong>Discovery of loss.</strong> When did you first notice the damage? What did
          you see? Where were you? Were there any witnesses?
        </li>
        <li>
          <strong>Timeline.</strong> What happened between discovery and reporting? Did you
          take any steps to mitigate further damage? When did you first contact the insurer?
        </li>
        <li>
          <strong>Scope of damage.</strong> What areas of the property are damaged? What
          personal property was affected? Have you had any prior claims for similar damage?
        </li>
        <li>
          <strong>Prior damage or repairs.</strong> Have you had any previous claims on this
          property? Any prior water damage, fire damage, or other losses? Any recent repairs
          or renovations?
        </li>
        <li>
          <strong>Insurance history.</strong> How long have you been insured? Have you ever
          been cancelled or non-renewed? Do you have any other insurance that might apply?
        </li>
      </ol>

      {/* ── Preparation Tips ──────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Prepare
      </h2>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-green-900 mb-3">Do</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Tell the truth.</strong> This is the single most important rule.
            Inaccurate statements &mdash; even unintentional ones &mdash; become
            inconsistencies that the insurer can use to question your credibility or even
            deny your claim. If you do not know the answer, say so.
          </li>
          <li>
            <strong>Answer the question that was asked.</strong> Do not volunteer information
            beyond what the adjuster specifically asked. If they ask when you discovered the
            damage, give them the date. Do not offer a theory about what caused it, what you
            think should be covered, or what your neighbor told you.
          </li>
          <li>
            <strong>Prepare your timeline.</strong> Before the interview, write down the
            key dates: when the loss occurred, when you discovered it, when you reported it,
            what mitigation steps you took and when. Having this written down prevents
            confusion during the interview.
          </li>
          <li>
            <strong>Review your policy.</strong> Know what coverages you have. Know your
            deductible. Know your limits. The adjuster knows your policy &mdash; you should
            too.
          </li>
          <li>
            <strong>Take notes during the call.</strong> Record what questions were asked
            and what you said. Your notes are your own record of the conversation.
          </li>
          <li>
            <strong>Request a copy of the recording.</strong> You are entitled to a copy of
            claim-related documents, and your own recorded statement is a claim-related
            document. Ask for it in writing.
          </li>
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-red-900 mb-3">Do Not</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Do not guess or speculate.</strong> If you do not know the exact date,
            say &ldquo;I don&apos;t recall the exact date, but it was approximately&hellip;&rdquo;
            Do not make up a specific answer to appear cooperative.
          </li>
          <li>
            <strong>Do not offer opinions about causation.</strong> You are not an engineer,
            a roofer, or a building scientist. If the adjuster asks what caused the damage,
            describe what you observed. Do not diagnose it.
          </li>
          <li>
            <strong>Do not discuss prior claims in detail without preparation.</strong> If
            you have had prior claims, know the basics (what year, what type, was it resolved)
            so you are not caught off guard.
          </li>
          <li>
            <strong>Do not let the adjuster rush you.</strong> You are entitled to take your
            time. If you need a moment to think, take it. If the interview is going too long
            and you are fatigued, ask to continue at another time.
          </li>
          <li>
            <strong>Do not agree to characterizations.</strong> If the adjuster says
            &ldquo;So what you&apos;re saying is&hellip;&rdquo; and it does not accurately
            reflect what you said, correct it immediately. Do not let a mischaracterization
            stand on the recording.
          </li>
        </ul>
      </div>

      {/* ── When It Escalates to EUO ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When It Escalates to an Examination Under Oath
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer demands a formal examination under oath, the stakes are materially
        higher. An EUO is a policy condition &mdash; meaning unreasonable refusal to submit
        to one can be grounds for coverage denial. The examination is conducted under oath,
        typically by the insurer&apos;s attorney, with a court reporter present. Your
        testimony is transcribed and can be used in litigation. This is a fundamentally
        different process from a recorded statement, and it requires different preparation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike a recorded statement &mdash; which is typically a phone call &mdash; an
        examination under oath is conducted in person. It is normally held at an
        attorney&apos;s office: either the insurer&apos;s defense attorney&apos;s office
        or, in some cases, the insured&apos;s attorney&apos;s office. The insurer&apos;s
        attorney asks the questions. A court reporter transcribes the proceedings. The
        insured&apos;s attorney is present and on the record.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive an EUO demand, you should retain an attorney. The insurer&apos;s
        attorney will be asking questions designed to create a record, and you need someone
        in your corner who understands the process and can protect your rights during the
        examination. The insured is entitled to receive a copy of the transcript or
        recording of the examination under oath.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        EUO demands are most common in claims involving:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Large dollar amounts</li>
        <li>Suspected fraud or material misrepresentation</li>
        <li>Inconsistencies in the insured&apos;s account of the loss</li>
        <li>SIU referrals</li>
        <li>Claims where the insurer has issued a reservation of rights</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete discussion of EUOs, including preparation, your rights, and what to
        expect, see our article on{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          examination under oath
        </Link>.
      </p>

      {/* ── California Recording Law ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        A Note on California&apos;s Recording Laws
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because recorded statements are typically conducted over the telephone,
        California&apos;s two-party consent law is directly relevant. Under Penal Code
        Section 632, both parties must consent to the recording of a confidential
        communication. When the insurer asks for your consent to record at the beginning
        of the call, that is the consent requirement being satisfied. You have the right
        to decline the recording while still agreeing to the interview.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, if you want to record the call yourself, you must inform the adjuster
        and obtain their consent. Recording without consent is a criminal offense in
        California. For more on recording during insurance inspections, see our article on{' '}
        <Link href="/resources/recording-insurance-inspections" className="text-blue-700 underline hover:text-blue-900">
          recording insurance company inspectors
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This two-party consent issue does not arise with examinations under oath, which are
        conducted in person&mdash;typically at an attorney&apos;s office&mdash;with a court
        reporter creating an official transcript of the proceedings.
      </p>

      {/* ── Summary ───────────────────────────────────────────────── */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          The Bottom Line
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A recorded statement is not something to fear, but it is something to prepare for.
          The goal is to be truthful, accurate, and concise &mdash; and to avoid volunteering
          information that goes beyond what was asked. If the process can be managed through
          written questions first, that is often the best approach. If it escalates to an
          EUO, get an attorney. And regardless of which process you face, remember: the
          insurer is building a record. So should you.
        </p>
      </div>

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
            Examination Under Oath (EUO): What It Is and How to Prepare
          </Link>
        </li>
        <li>
          <Link href="/resources/recorded-statements-siu" className="text-blue-700 underline hover:text-blue-900">
            Recorded Statements and SIU Investigations
          </Link>
        </li>
        <li>
          <Link href="/resources/insurance-myths-debunked" className="text-blue-700 underline hover:text-blue-900">
            Insurance Myths Exposed: What Your Adjuster Won&apos;t Correct
          </Link>
        </li>
        <li>
          <Link href="/resources/recording-insurance-inspections" className="text-blue-700 underline hover:text-blue-900">
            Can You Record Insurance Company Inspectors?
          </Link>
        </li>
        <li>
          <Link href="/resources/dealing-with-adjuster" className="text-blue-700 underline hover:text-blue-900">
            How to Deal with the Insurance Company&apos;s Adjuster
          </Link>
        </li>
      </ul>
    </>
  )
}
