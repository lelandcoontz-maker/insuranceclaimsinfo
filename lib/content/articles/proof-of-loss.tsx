import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Proof of Loss: What It Is and How to Complete It',
  description:
    'Everything you need to know about the sworn proof of loss form, including when it is required, how to fill it out, and important California-specific nuances.',
  summary:
    'A proof of loss is a sworn statement of your claim that insurers can require, with strict deadlines. Complete it accurately and fully, and understand California-specific nuances, because errors or omissions can limit what you recover.',
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
        If you have filed an insurance claim, there is a chance your insurer will ask you to submit a
        &ldquo;sworn proof of loss.&rdquo; This is a formal document that many policyholders find
        intimidating, but it does not need to be. Understanding what it is, why it matters, and how
        to complete it correctly will help you navigate this step with confidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Sworn Proof of Loss?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A sworn proof of loss is a formal, signed statement you provide to your insurance company
        detailing the facts of your loss and the amount you are claiming. It typically includes the
        date and cause of the loss, a description of the damaged property, the estimated value of the
        damage, and any other insurance that may cover the same property. Because it is sworn, you
        are signing it under penalty of perjury, which means the information must be truthful and
        accurate to the best of your knowledge.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Is It Required?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies include a provision requiring the policyholder to submit a proof of
        loss if the insurer requests it. The insurer typically sends you a blank form along with
        instructions and a deadline. Not every claim requires a proof of loss. Insurers tend to
        request them for larger or more complex claims, or when they want formal documentation on
        the record.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Deadlines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The proof of loss deadline depends on your specific policy language and the applicable
        law. Under the California Standard Fire Policy (Insurance Code &sect; 2071), the
        statutory clock for the sworn proof of loss runs from when the insurer provides the
        form, not from the date of the loss itself. The standard form language requires the
        insured to submit a signed and sworn proof of loss &ldquo;within 60 days after we
        provide you with a blank proof of loss form.&rdquo; Individual policies may specify a
        different deadline &mdash; and some policies provide more time than the statute
        requires. Always check your specific policy language, which controls unless it
        conflicts with California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, California courts apply a <strong>material-breach-plus-prejudice</strong>{' '}
        framework to cooperation-clause defenses, including failures to submit a timely proof
        of loss. To deny a claim on that basis, an insurer must generally show both that the
        insured&rsquo;s late or missing proof was a <em>material</em> breach of the policy
        condition and that the insurer was <em>actually prejudiced</em> by the breach. Either
        element alone is not enough. A short delay that did not impede the insurer&rsquo;s
        investigation typically will not support a denial, but the precise application is
        fact-specific, and proving no prejudice in litigation requires time and expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A proof of loss is not always technically required, but ignoring a written request is
        rarely wise. An insured generally should comply with a proper proof-of-loss request,
        request an extension in writing before the deadline passes if more time is needed,
        and get the extension confirmed in writing. There is, however, a timing consideration
        worth flagging. Under 10 CCR &sect; 2695.7(b), the insurer&rsquo;s 40-day window to
        accept or deny the claim runs from receipt of &ldquo;proof of claim,&rdquo; a broader
        regulatory term defined at 10 CCR &sect; 2695.2(s) that can include but does not
        require a formal sworn proof of loss. In many property losses, a completed sworn proof
        of loss will function as the proof of claim that starts that 40-day clock; submitting
        a sworn proof of loss while the claim is still being developed therefore tends to
        force the insurer&rsquo;s hand, which can cut both ways. A Public Adjuster or
        attorney can help evaluate the timing in a specific situation.
      </p>

      <CalloutBox variant="warning" title="Do Not Ignore the Request">
        <p>
          Even though California law limits the insurer&rsquo;s ability to deny a claim solely
          for failure to submit a proof of loss, ignoring the request creates unnecessary
          friction. Treat it as an important step in the process and complete it promptly.
        </p>
        <p className="mt-3">
          <strong>Legally correct is not always practically wise.</strong> Knowing that the
          prejudice rule may protect the insured is not the same as a license to skip the
          proof-of-loss request. If the insurer denies on procedural grounds, vindicating the
          insured&rsquo;s position usually means litigation &mdash; expensive, slow, and not
          assured of success. The safer path is to comply on time (or request an extension in
          writing before the deadline) and let the prejudice analysis be raised only if the
          insurer actually relies on the timing for denial. The specific deadline and procedural
          requirements are policy-dependent &mdash; read the actual policy in addition to the
          &sect; 2071 statutory floor.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Fill One Out Correctly
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The proof of loss form typically requires the following information:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Policy information:</strong> Your policy number, the name of the insured, and the
          property address.
        </li>
        <li>
          <strong>Date and cause of loss:</strong> When the loss occurred and what caused it (fire,
          water, wind, etc.).
        </li>
        <li>
          <strong>Description of damage:</strong> A summary of the damage to the dwelling, other
          structures, personal property, and any additional living expenses incurred.
        </li>
        <li>
          <strong>Amount claimed:</strong> The dollar amount you are claiming for each coverage
          category. This is the total amount of your loss, not the amount after the deductible.
        </li>
        <li>
          <strong>Other insurance:</strong> Whether any other insurance policy covers the same
          property.
        </li>
        <li>
          <strong>Signature and notarization:</strong> The form must be signed and, in most cases,
          notarized. The signature is made under oath.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Be Accurate, Not Conservative">
        <p>
          State the full amount of your claimed loss. Do not lowball yourself because you think the
          insurer will negotiate. The proof of loss establishes the ceiling of what you are claiming.
          If you discover additional damage later, you can submit a supplemental proof of loss, but
          it is easier to get it right the first time.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Nuance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is something many policyholders do not know: in California, the proof of loss is not
        technically required as a condition of coverage, even if your policy says it is. California
        Insurance Code and case law have established that an insurer cannot deny an otherwise valid
        claim solely because the policyholder failed to submit a proof of loss. The insurer must show
        that it was actually prejudiced by the failure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, you should still submit one when asked. Completing the proof of loss demonstrates
        good faith, creates a formal record of your claimed amount, and removes one potential
        argument the insurer could use to delay or complicate your claim. Think of it as protecting
        yourself rather than satisfying a technicality.
      </p>

      <CalloutBox variant="legal" title="California Insurance Code">
        <p>
          California courts have held that policy conditions requiring a proof of loss are subject to
          the &ldquo;notice-prejudice&rdquo; rule. This means the insurer cannot use your failure to
          submit a proof of loss as a basis for denial unless they can demonstrate actual prejudice
          from the failure. Submit it anyway to keep your claim clean and defensible.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Going Deeper
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two companion articles cover the proof of loss from different angles:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/proof-of-loss-signing-strategy" className="text-[#2E74B5] hover:underline">
            The Proof of Loss: What You Are Really Signing and How to Protect Yourself
          </Link>{' '}
          &mdash; when the carrier sends a pre-filled form: the trap, the partial proof of loss,
          state-by-state variation, and the NFIP flood policy.
        </li>
        <li>
          <Link href="/resources/strategic-proof-of-loss" className="text-[#2E74B5] hover:underline">
            The Strategic Proof of Loss
          </Link>{' '}
          &mdash; voluntarily filing a proof of loss even when the carrier has not asked, to start
          the contractual payment clock and strengthen a bad-faith record.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are unsure how to complete a proof of loss or what amounts to claim, a licensed
        Public Adjuster can prepare the document for you and ensure it accurately reflects the full
        scope of your loss.
      </p>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
