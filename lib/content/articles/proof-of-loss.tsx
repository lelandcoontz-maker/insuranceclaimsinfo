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
        The proof of loss deadline depends on your specific policy language and the applicable law.
        Under the California Standard Fire Policy (Insurance Code Section 2071), the policyholder
        must submit a signed, sworn proof of loss within 60 days after the loss. However, individual
        policies may specify a different deadline &mdash; and some policies provide more time than
        the statute requires. Always check your specific policy language, which controls unless it
        conflicts with California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, California courts apply the <strong>notice-prejudice rule</strong>, which means
        an insurer generally cannot deny a claim solely because the proof of loss was submitted late
        unless the insurer can demonstrate it was actually prejudiced by the delay. This is a
        significant protection for policyholders, but it is not a reason to be careless with
        deadlines &mdash; proving the insurer suffered no prejudice requires time, expense, and
        potentially litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While a proof of loss is not always technically required, it is generally advisable to submit
        one when the insurer requests it. The legal right to refuse is rarely worth the time and
        expense of proving it. If you need more time, request an extension in writing before the
        deadline passes, and get written confirmation that the extension has been granted.
        Policyholders should check their specific policy and consult with a professional if there is
        any uncertainty about the applicable deadline.
      </p>

      <CalloutBox variant="warning" title="Do Not Ignore the Request">
        <p>
          Even though California law limits the insurer&rsquo;s ability to deny a claim solely for
          failure to submit a proof of loss, ignoring the request creates unnecessary friction. Treat
          it as an important step in the process and complete it promptly.
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
    </>
  )
}
