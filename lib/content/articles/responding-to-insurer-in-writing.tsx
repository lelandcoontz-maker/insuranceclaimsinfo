import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "How to Respond to Your Insurance Company in Writing",
  description:
    "A practical guide to written correspondence with your carrier: responding to ROR letters, cure letters, denials, and lowball payments - and what never to say.",
  summary:
    'Written correspondence with your insurer is strategy: respond to ROR, cure, denial, and lowball letters in writing, state facts and requests clearly, and avoid careless phrasing. A calm, documented paper trail protects your rights and your claim.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law and claims practice as a Licensed Public Adjuster. It is not
          legal advice. If you are facing a significant coverage dispute or denial, consult with
          a licensed attorney who specializes in insurance coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our article on{' '}
        <Link href="/resources/reading-insurer-letters" className="text-[#2E74B5] underline">
          reading the insurer&rsquo;s letters
        </Link>{' '}
        explains what every type of carrier correspondence means and why it exists. This article
        covers the other side: how to write back. Every letter your insurer sends deserves a
        written response, and the quality of those responses can determine whether your claim
        settles fairly, drags on for years, or ends up in litigation on favorable terms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders either do not respond at all &mdash; which the insurer treats as
        acquiescence &mdash; or respond with emotional, unfocused letters that the insurer&rsquo;s
        claims department files and ignores. Effective claim correspondence requires a specific
        tone, a specific structure, and a strategic understanding of what you are building with
        every letter you send: a claim file that tells a story. If the claim goes to a CDI
        complaint, appraisal, or litigation, your written correspondence is exhibit evidence.
        Write every letter as though a judge will read it.
      </p>

      {/* ───────── SECTION: GOLDEN RULE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Golden Rule: Frame Everything Around Harm
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most effective technique in claim correspondence is one that experienced
        plaintiff attorneys teach their clients early: every request to the insurer should be
        framed in terms of the <strong>harm that will result</strong> if the insurer does not
        act. Do not simply state what you want. State what will happen to you if you do not
        get it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compare these two approaches:
      </p>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <p className="text-sm font-semibold text-red-800 mb-2">Weak:</p>
        <p className="text-gray-700 italic">
          &ldquo;Please approve and pay for the emergency tarping of my roof.&rdquo;
        </p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm font-semibold text-green-800 mb-2">Strong:</p>
        <p className="text-gray-700 italic">
          &ldquo;The roof was damaged in the December 14 windstorm. Without emergency tarping,
          the next rain event will cause interior water damage to areas of the home that are
          currently undamaged, including the master bedroom ceiling, the upstairs hallway, and
          the attic insulation. This will expand the scope of the loss, increase the cost of
          repairs, delay the restoration timeline, and extend the period during which my family
          is displaced from our home &mdash; increasing the additional living expense claim
          under Coverage D. I am requesting immediate approval and payment for emergency tarping
          to prevent these foreseeable additional losses.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The second version does three things the first one does not. It creates a written record
        that the insurer was <strong>put on notice</strong> of specific, foreseeable harm. It
        connects the requested action to the insurer&rsquo;s own financial interest &mdash; paying
        for tarping now is cheaper than paying for expanded water damage later. And it documents
        that the policyholder acted reasonably by requesting mitigation, which matters if the
        insurer later tries to argue that the policyholder failed to protect the property.
      </p>

      <CalloutBox variant="important" title="Why Harm Framing Matters Legally">
        <p>
          Under California law, an insurer that is on notice of foreseeable harm to its policyholder
          and fails to act has a harder time defending against a bad faith claim. The policyholder&rsquo;s
          letter documenting the foreseeable harm becomes evidence that the insurer knew what would
          happen and chose not to prevent it. This is especially powerful when the foreseeable harm
          includes consequences that may exceed policy limits &mdash; such as{' '}
          <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
            additional living expenses
          </Link>{' '}
          approaching the Loss of Use limit because the insurer&rsquo;s delay extended the displacement
          period, or damage to personal property in categories where the policyholder has already
          exhausted sublimits. When the harm crosses into territory the policy does not fully cover,
          the insurer&rsquo;s exposure to extracontractual damages increases.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Examples of Harm Framing for Common Situations
      </h3>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Delayed payment for temporary housing:</strong> &ldquo;My family has been
          displaced since [date]. Without ALE advance payment, we will be forced to use personal
          savings and credit to cover housing costs, creating financial hardship that compounds
          with each week of delay. The current monthly cost of comparable temporary housing is
          $[amount], which will consume our Loss of Use limit by [date] if the restoration timeline
          is not accelerated.&rdquo;
        </li>
        <li>
          <strong>Delayed scope approval:</strong> &ldquo;The contractor cannot begin work until
          the supplemental scope is approved. Each week of delay extends the restoration timeline
          by approximately one week, extends our displacement, increases the ALE claim, and
          risks additional deterioration of the exposed structural framing, which the contractor
          has noted is beginning to show signs of moisture absorption.&rdquo;
        </li>
        <li>
          <strong>Disputed contents claim:</strong> &ldquo;The items I am claiming were essential
          household items that my family needs to function. Without timely payment, we are unable
          to replace [specific items] and are living without [specific necessities], which is
          causing ongoing hardship during an already difficult displacement period.&rdquo;
        </li>
        <li>
          <strong>Unreasonable document demands:</strong> &ldquo;You have requested that I produce
          [documents] within five business days. Assembling these records will require [specific
          steps]. I am willing to cooperate fully, but the timeline you have proposed is not
          reasonable given the scope of the request. I propose [alternative timeline]. Please be
          aware that any delay in your coverage determination caused by an unreasonable compliance
          deadline extends the period during which my family remains displaced and my property
          remains unrepaired.&rdquo;
        </li>
      </ul>

      {/* ───────── SECTION: BAD FAITH LANGUAGE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Think Twice Before Using the Phrase &ldquo;Bad Faith&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is counterintuitive advice, but many experienced plaintiff attorneys who litigate
        insurance bad faith cases recommend that policyholders <strong>avoid accusing the insurer
        of &ldquo;bad faith&rdquo; in claim correspondence</strong>, at least until the situation
        has deteriorated to the point where it is obvious and the policyholder is ready to act on
        it. It is not necessarily wrong to use the phrase &mdash; there are situations where the
        insurer&rsquo;s conduct is so egregious that calling it what it is becomes appropriate.
        But in most claim disputes, there is a better approach.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The better approach is to <strong>describe the behavior</strong> and let the reader draw
        the conclusion. A CDI examiner, a mediator, or a judge can recognize bad faith conduct
        without the policyholder having to label it. And if you need to signal the concern without
        using the loaded phrase, there are alternatives: you can note that the insurer&rsquo;s
        conduct &ldquo;does not reflect good faith claims handling,&rdquo; or that you are
        &ldquo;concerned about the lack of good faith in the handling of this claim.&rdquo; These
        formulations make the same point with less inflammatory language and are harder for the
        insurer&rsquo;s defense team to weaponize.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why Many Plaintiff Attorneys Recommend This Approach
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are several strategic reasons to be cautious with the phrase &ldquo;bad faith&rdquo;
        in claim correspondence:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>It can be thrown back at you in litigation.</strong> If the claim eventually goes
          to court, the insurer&rsquo;s defense attorney will comb through every letter you sent.
          A premature or poorly supported accusation of bad faith gives the defense material to
          argue that you were unreasonable, adversarial, or making legal conclusions you were not
          qualified to make. Your own correspondence becomes a defense exhibit.
        </li>
        <li>
          <strong>It escalates without accomplishing anything.</strong> The moment you accuse an
          insurer of bad faith, the claim file gets flagged, the adjuster&rsquo;s authority to
          settle may be restricted, and the file may be transferred to a coverage litigation unit
          or outside defense counsel. The people who were handling your claim and might have
          resolved it are replaced by people whose job is to defend the company against the
          accusation you just made. You have not gained leverage &mdash; you have triggered a
          defensive response that makes settlement harder.
        </li>
        <li>
          <strong>It tips your hand prematurely.</strong> If a bad faith lawsuit is warranted,
          your attorney wants to file it at the right time, with the right evidence, and without
          having previewed the theory in claim correspondence that the insurer&rsquo;s defense
          team has already read. A policyholder who spends months writing letters that say
          &ldquo;this is bad faith&rdquo; has given the insurer months to prepare its defense
          before the complaint is ever filed.
        </li>
        <li>
          <strong>It can undermine your credibility.</strong> Adjusters see &ldquo;bad faith&rdquo;
          accusations on routine claim disputes every day. When a policyholder labels a $2,000
          depreciation disagreement as &ldquo;bad faith,&rdquo; the adjuster dismisses the
          policyholder as someone who does not understand what the term means. The letter loses
          its persuasive power.
        </li>
        <li>
          <strong>Describing the behavior is more powerful than labeling it.</strong> A letter
          that says &ldquo;You are acting in bad faith&rdquo; is a conclusion. A letter that
          says &ldquo;I submitted my proof of loss on March 3. It is now June 15. I have not
          received a coverage determination. I have sent three follow-up letters, none of which
          have received a substantive response. My family has been displaced for 104 days&rdquo;
          tells a story that any reader will recognize as problematic &mdash; without the
          policyholder having to attach a legal label to it.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, this is not a universal rule. When the insurer&rsquo;s conduct becomes
        genuinely egregious &mdash; repeated regulatory violations, documented lies, refusal
        to communicate for months &mdash; there comes a point where the policyholder or their
        representative may decide the situation warrants direct language. The point is to be
        strategic about when and how you use it, not to treat it as something that can never
        be said.
      </p>

      <CalloutBox variant="warning" title="What to Write Instead">
        <p>
          Instead of: &ldquo;Your handling of this claim constitutes bad faith under California
          law.&rdquo;
        </p>
        <p className="mt-2">
          Consider: &ldquo;I submitted my proof of loss on [date]. Under the Fair Claims Settlement
          Practices Regulations, a coverage determination was due within 40 days. It has now been
          [number] days, and I have not received an acceptance, denial, or written explanation for
          the delay. My family remains displaced, and the delay is causing ongoing financial harm
          as described in my previous correspondence. I am concerned that the handling of this
          claim does not reflect good faith claims practices.&rdquo;
        </p>
        <p className="mt-2">
          The first version gives the insurer a label to argue about. The second version creates a
          documented regulatory violation with specific dates, a specific regulation, specific
          harm, and a measured expression of concern &mdash; exactly what a CDI examiner or a
          judge needs to see.
        </p>
      </CalloutBox>

      {/* ───────── SECTION: TONE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Right Tone: Professional, Specific, Relentless
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most effective claim correspondence reads like it was written by someone who is calm,
        informed, and not going away. It is not angry, not emotional, not threatening, and not
        pleading. It is factual, specific, and persistent. Every letter should demonstrate three
        things:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You know your policy.</strong> Reference specific coverage provisions, limits,
          and conditions by name. &ldquo;Under Coverage A of my policy, number [policy number]&rdquo;
          carries more weight than &ldquo;my insurance should cover this.&rdquo;
        </li>
        <li>
          <strong>You know the regulations.</strong> Reference specific Fair Claims regulation
          sections when the insurer is in violation. You do not need to be a lawyer to cite 10
          CCR &sect; 2695.7(b) (40-day decision deadline) or &sect; 2695.7(c)(1) (30-day status
          updates). Our article on the{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            Fair Claims regulations
          </Link>{' '}
          provides the section numbers.
        </li>
        <li>
          <strong>You are documenting everything.</strong> A letter that says &ldquo;as I noted
          in my letter of April 3, which referenced my earlier letter of March 12&rdquo; tells
          the insurer that this policyholder has a complete file and a running timeline. That
          alone changes the dynamic.
        </li>
      </ol>

      {/* ───────── SECTION: STRUCTURE ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Structure Every Letter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of the type of insurer letter you are responding to, every response should
        follow the same basic structure:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Identify the claim.</strong> Policy number, claim number, date of loss, property
          address. Put this in the first paragraph or in a reference line at the top. The adjuster
          handling your claim may be handling dozens of files. Make it impossible to misfile your
          letter.
        </li>
        <li>
          <strong>Acknowledge what you received.</strong> &ldquo;I am writing in response to your
          letter dated [date] regarding [subject].&rdquo; This creates a clear paper trail linking
          your response to their correspondence.
        </li>
        <li>
          <strong>State the facts.</strong> What happened, when, and what the current status is.
          Use dates, dollar amounts, and specific descriptions. Facts are harder to argue with
          than characterizations.
        </li>
        <li>
          <strong>State your position.</strong> What you are requesting, what you disagree with,
          or what you need the insurer to do. Be specific. &ldquo;I dispute the $14,200
          depreciation deduction on line items 47 through 63 of your estimate&rdquo; is actionable.
          &ldquo;Your estimate is too low&rdquo; is not.
        </li>
        <li>
          <strong>State the harm.</strong> What will happen, or what is already happening, as a
          result of the insurer&rsquo;s action or inaction. Connect the harm to specific,
          foreseeable consequences.
        </li>
        <li>
          <strong>State your expectation and timeline.</strong> &ldquo;I am requesting a
          substantive response within 15 calendar days.&rdquo; Give a specific date. This creates
          a documented deadline that you can reference in your next letter if the insurer does
          not respond.
        </li>
      </ol>

      {/* ───────── SECTION: RESPONDING TO SPECIFIC LETTERS ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Respond to Specific Types of Insurer Letters
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Responding to a Reservation of Rights Letter
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Acknowledge receipt. State that you have reviewed the cited policy provisions and that
        you reserve your own rights. If any of the cited provisions are inapplicable or misstated,
        identify them specifically: &ldquo;You have cited the earth movement exclusion on page 14
        of my policy. The damage to my property was caused by a broken water main, not earth
        movement. I do not agree that this exclusion applies to my claim.&rdquo; If you are not
        sure whether the cited provisions apply, say you are reviewing the letter with your
        Public Adjuster or attorney and will respond substantively within a stated timeframe.
        Do not ignore the letter and do not concede any of the cited provisions through silence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Responding to a Cure Letter
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Respond immediately, even if you cannot fully comply. If you can comply, do so and
        confirm compliance in writing: &ldquo;Enclosed please find the completed proof of loss
        you requested in your letter of [date].&rdquo; If you cannot comply within the stated
        deadline, explain why and propose an alternative: &ldquo;You have requested a complete
        household inventory within five business days. Given that my home was destroyed and I
        am reconstructing this inventory from memory, purchase records, and photographs, I will
        need approximately 30 days to compile a thorough and accurate inventory. I am committed
        to cooperating fully and will provide the inventory by [specific date].&rdquo; Frame the
        alternative timeline around accuracy &mdash; rushing will produce an incomplete inventory
        that harms both parties.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Responding to a Denial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A denial requires the most careful response. Read the denial letter alongside your actual
        policy &mdash; not a summary, the policy itself. Identify the exact exclusion, condition,
        or limitation cited. Then respond on three levels: (1) Is the policy language actually
        what the insurer says it is? (2) Do the facts actually support the insurer&rsquo;s
        application of that language? (3) What harm is resulting from the denial?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A strong denial response might read: &ldquo;Your letter of [date] denies my claim
        under the [specific exclusion]. I have reviewed this exclusion in my policy booklet at
        page [X]. The exclusion applies to [what it actually says]. The damage to my property
        was caused by [what actually happened], which does not fall within the scope of this
        exclusion because [specific reason]. While my claim remains unpaid, my family continues
        to be displaced from our home, incurring temporary housing costs of $[amount] per month,
        and the unrepaired property is deteriorating, with [specific description of ongoing
        damage].&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Notice what this response does not say: it does not say &ldquo;bad faith.&rdquo; It
        describes the regulatory context (the specific exclusion cited), disputes the factual
        and legal basis, and documents the ongoing harm. A CDI examiner reading this letter
        knows exactly what is happening without the policyholder having to attach a label to it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Responding to a Lowball Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer pays less than you believe is owed, the response should identify the
        specific items in dispute, the dollar amount of the discrepancy, and the harm caused
        by the underpayment. Do not simply say the payment is too low. Say: &ldquo;Your payment
        of $[amount] does not include [specific items]. The{' '}
        <Link href="/resources/excessive-depreciation" className="text-[#2E74B5] underline">
          depreciation
        </Link>{' '}
        applied to line items [X through Y] exceeds what is fair and reasonable under California
        Insurance Code &sect; 2051 because [specific reason &mdash; labor was depreciated,
        percentages are excessive relative to actual condition, etc.]. The underpayment of
        $[amount] means I am unable to complete the repairs to [specific areas], leaving my
        property in a partially repaired state that is exposed to [specific ongoing risk].&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Responding to Silence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer stops responding, your letters become even more important. Each
        unanswered letter is a documented instance of the insurer failing to communicate.
        Write follow-up letters that reference every prior unanswered communication by date:
        &ldquo;This is my fourth written communication regarding [subject]. My previous letters
        of [date], [date], and [date] have not received a substantive response. Under 10 CCR
        &sect; 2695.5(b), you are required to respond to communications from a claimant
        reasonably promptly. [Number] days have passed since my initial inquiry. During this
        period, [description of ongoing harm].&rdquo; Each of these letters adds another brick
        to the wall of a regulatory violation or bad faith pattern that any reader can see
        without you having to name it.
      </p>

      {/* ───────── SECTION: DELIVERY ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Send Your Letters
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Email is fine for routine correspondence</strong> &mdash; it creates a
          timestamped record and is harder for the insurer to claim it never received. Send to
          the adjuster and copy the adjuster&rsquo;s supervisor if you have their email.
        </li>
        <li>
          <strong>Use certified mail for anything critical</strong> &mdash; denial responses,
          proof of loss submissions, cure letter responses, formal demands. Certified mail with
          return receipt creates proof of delivery that the insurer cannot dispute.
        </li>
        <li>
          <strong>Keep a correspondence log.</strong> A simple spreadsheet tracking the date of
          every letter sent and received, the subject, and whether it received a response. This
          becomes invaluable if the claim escalates to a CDI complaint or litigation.
        </li>
        <li>
          <strong>Send both.</strong> For important letters, send by email and by certified mail.
          The email ensures immediate receipt; the certified mail ensures legal proof of delivery.
        </li>
      </ul>

      {/* ───────── SECTION: WHAT NOT TO DO ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Never to Put in Writing
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Do not threaten litigation you are not prepared to follow through on.</strong> Empty
          threats erode credibility. If you are going to retain an attorney, do it &mdash; do not
          announce it.
        </li>
        <li>
          <strong>Do not exaggerate your damages.</strong> Every number you put in writing is a
          sworn representation if you later sign a proof of loss or testify. Inflated claims
          give the insurer a basis to question your credibility on everything.
        </li>
        <li>
          <strong>Do not admit fault or causation.</strong> If the cause of loss is in dispute,
          do not speculate about what caused the damage in your correspondence. State what
          happened factually and let the experts determine causation.
        </li>
        <li>
          <strong>Do not accept the insurer&rsquo;s characterization of facts you have not
          verified.</strong> If the insurer&rsquo;s letter states &ldquo;as you acknowledged
          during the inspection&rdquo; something you did not actually say, correct it immediately
          in writing. Uncorrected mischaracterizations become the insurer&rsquo;s version of
          events.
        </li>
        <li>
          <strong>Do not discuss the claim on social media.</strong> Everything you post is
          discoverable. A photo of you on vacation while claiming you are too displaced to live
          in your home will appear in the insurer&rsquo;s file.
        </li>
      </ul>

      {/* ───────── SECTION: WHEN TO STOP WRITING ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When to Stop Writing and Get Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Written correspondence is powerful, but it has limits. If you have sent multiple
        well-documented letters and the insurer is not responding substantively, not changing
        its position, or not paying, you have built a strong paper trail &mdash; now it is time
        to use it. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed Public Adjuster
        </Link>{' '}
        can take over the claim negotiation and bring technical expertise to the dispute. An{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
          insurance attorney
        </Link>{' '}
        can evaluate the claim file you have built and determine whether litigation is warranted.
        In either case, the work you did in your written correspondence &mdash; the documented
        timeline, the specific regulatory citations, the harm framing &mdash; becomes the
        foundation of a stronger professional response.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Every
        claim involves unique facts, policy language, and circumstances. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
