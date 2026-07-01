import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The First Adjuster Call: What to Say and Hold Back",
  description:
    "What policyholders share and hold back on the first adjuster call - and why an early dollar guess or casual maintenance comment can follow the claim.",
  summary:
    'On the first adjuster call after a property loss, the pattern that tends to work for policyholders is cooperative-but-brief: factual description of what happened and what mitigation was done, without speculation about cause or dollar amount, and without agreeing to a recorded statement or final figure on the spot.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about a specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster will call. It might be within hours of the loss, it might be a few days
        later. Either way, the conversation is with someone whose job is to investigate the claim
        and determine how much the insurance company will pay. What gets said in that
        conversation tends to matter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders aim for truthful, cooperative, and factual on that first call &mdash;
        without volunteering information that the carrier can later use to reduce the claim. The
        sections below describe the patterns that tend to work and the patterns that tend to
        backfire.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The First Call: What to Expect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster will typically ask:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>What happened?</li>
        <li>When did it happen?</li>
        <li>What is the extent of the damage?</li>
        <li>Is the property habitable?</li>
        <li>What mitigation has been done?</li>
        <li>When can the adjuster inspect the property?</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most of those questions are reasonable. Many policyholders answer them factually and
        briefly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Some Policyholders Choose to Share
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Bare facts of the loss.</strong> Some policyholders stick to a bare description
          on the first call &mdash; something along the lines of: &ldquo;There was a fire in the
          kitchen on Tuesday around 3pm. The fire department responded. The kitchen and dining
          room are destroyed and there is smoke damage throughout.&rdquo;
        </li>
        <li>
          <strong>Mitigation steps already taken.</strong> Mitigation tends to be worth surfacing
          on the first call. Phrasing some insureds use: &ldquo;I tarped the roof opening and
          hired a board-up company.&rdquo;
        </li>
        <li>
          <strong>An honest acknowledgment of what isn&apos;t known yet.</strong> Many
          policyholders find it useful to acknowledge what they don&apos;t yet know &mdash;
          something like: &ldquo;I don&apos;t know the full extent of the damage yet. I&apos;ll
          know more after a thorough inspection.&rdquo;
        </li>
        <li>
          <strong>A request for written confirmation.</strong> A written-confirmation request
          &mdash; for example, &ldquo;Can you email me a confirmation of this call with my claim
          number and your direct contact?&rdquo; &mdash; is something many policyholders ask for
          at the end of a first call.
        </li>
        <li>
          <strong>A clarifying question about what comes next.</strong> Some insureds close the
          call by asking what documentation the carrier needs and by when.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Some Policyholders Hold Back
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Early dollar estimates.</strong> Early dollar guesses can become anchors. A
          policyholder who volunteers &ldquo;maybe $20,000&rdquo; when the real number turns out
          to be $80,000 has a guess that follows the claim. Some insureds simply note that they
          don&apos;t have an estimate yet.
        </li>
        <li>
          <strong>Speculation about cause.</strong> Speculation about cause can create coverage
          issues, because some perils are covered and others are excluded. Many insureds limit
          themselves to what they directly observed and leave causation to the investigation.
        </li>
        <li>
          <strong>Minimizing language.</strong> Politeness instincts can lead some insureds to
          downplay damage on the first call &mdash; &ldquo;it&apos;s not that bad&rdquo; &mdash;
          which the carrier may quote back later.
        </li>
        <li>
          <strong>Pre-existing-condition narratives that weren&apos;t asked for.</strong>
          Maintenance-history questions, when asked, deserve honest answers. Volunteering
          pre-existing conditions that weren&apos;t asked about &mdash; &ldquo;well, the roof was
          pretty old,&rdquo; &ldquo;we had a small leak there before&rdquo; &mdash; can hand the
          carrier a wear-and-tear or prior-loss argument it wasn&apos;t otherwise going to
          develop.
        </li>
        <li>
          <strong>A recorded statement on the spot.</strong> Recorded statements are typically
          scheduled rather than taken on the first call. A common phrasing some insureds use to
          defer: &ldquo;I&apos;d prefer to schedule that for later this week when I have my
          documents together.&rdquo;
        </li>
        <li>
          <strong>Self-characterizations of fault.</strong> Fault and causation are legal and
          forensic determinations, often made well after the first call by investigators,
          engineers, and (sometimes) counsel. Many policyholders avoid characterizing their own
          conduct one way or the other until that work is done.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Recorded Statements">
        <p className="mb-2">
          The adjuster may ask to record the call or schedule a formal recorded statement. Most
          homeowners policies contain a duty-to-cooperate condition; cooperation does not
          generally require submitting to a recorded statement at the exact moment of first
          contact.
        </p>
        <p>
          Many insureds use the gap between first contact and the scheduled statement &mdash;
          often a few days &mdash; to review the policy and organize documents. For more, see{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#1F3964] underline font-medium">
            Recorded Statements &amp; SIU
          </Link>
          {' '}and{' '}
          <Link href="/resources/recorded-statement-preparation" className="text-[#1F3964] underline font-medium">
            How to Prepare for a Recorded Statement or EUO
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Quick Settlement&rdquo; Offer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will offer a fast payment on the first call &mdash; something like
        &ldquo;we can cut a check for $5,000 today to get things started.&rdquo; That isn&apos;t
        necessarily a trick. Advance payments &mdash; sometimes labeled &ldquo;undisputed
        amounts&rdquo; under 10 CCR &sect; 2695.7(h) &mdash; are generally not releases and are
        commonly paid early in larger claims. The document accompanying the payment, however, is
        what controls.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Documents labeled &ldquo;full and final settlement,&rdquo; or that contain release
        language, are functionally different from an interim advance payment. That distinction is
        worth surfacing with counsel before signing. Final settlements signed before the full
        extent of the damage is known tend to leave money on the table, particularly in the first
        few days after a loss when the scope is still developing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Documentation Habit Tends to Look Like
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders fall into a similar pattern after every adjuster call:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Write down what was discussed while it is fresh.</li>
        <li>
          Send a confirmation email opening with something like: &ldquo;Per our call today, you
          stated that &hellip;&rdquo;
        </li>
        <li>
          Note promises made on the call (inspection dates, callback commitments, document
          requests).
        </li>
        <li>Note any deadlines given or agreed to.</li>
        <li>Save the email in the claim file along with the rest of the record.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This confirmation habit is, in many experienced policyholders&apos; files, the most
        valuable single step taken after each call. It creates a contemporaneous written record
        that often matters more later than it does in the moment. See{' '}
        <Link href="/resources/claim-negotiation-letters" className="text-[#1F3964] underline font-medium">
          How to Write Effective Claim Letters
        </Link>
        {' '}for more on the broader written-record habit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Patterns That Tend to Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The pattern most policyholders settle into: truthful, factual, brief; no guessing or
        speculation; no volunteering beyond what is asked; everything documented in writing after
        the call. The adjuster is not the insured&apos;s enemy, but neither is the adjuster the
        insured&apos;s advocate &mdash; the adjuster works for the insurance company. Each side
        looks out for its own interest.
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding a specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
