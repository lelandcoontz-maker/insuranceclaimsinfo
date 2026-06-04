import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Your Right to Know How Your Claim Was Calculated: The Insurer's Duty to Explain Every Payment",
  description:
    "California law requires your insurance company to explain the basis of every payment and share the documents it relied on. Most policyholders never exercise these rights. Here is how to use them.",
  summary:
    'California law requires your insurer to explain the basis of every payment and share the documents it relied on. Most policyholders never ask; demanding this explanation reveals how the number was built and where it falls short.',
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

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Introduction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders receive a check from their insurance company and have no idea how the
        number was calculated. They don&rsquo;t know what estimate the carrier used, what depreciation
        rates were applied, whether the deductible was placed correctly, or what documents the carrier
        relied on to reach its number. They accept the payment because they don&rsquo;t know they have
        the right to demand an explanation &mdash; or that the carrier has a legal obligation to
        provide one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has some of the strongest consumer protection regulations in the country when it
        comes to insurance claims handling. Among other things, those regulations require the carrier
        to explain every payment it makes and to share the documents it used to calculate that
        payment. These are not optional courtesies. They are legal obligations. And exercising them
        is the first step toward identifying whether you were underpaid.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Regulatory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations (10 CCR &sect;2695 et seq.)
        impose specific disclosure obligations on every insurer doing business in California. Three
        provisions are especially important for policyholders trying to understand how their claim
        was calculated.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        10 CCR &sect;2695.7(b)(1): The Duty to Explain Denials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier denies a claim in whole or in part, &sect;2695.7(b) requires that the
        denial be in writing, listing <strong>all bases</strong> for the denial with the factual
        and legal basis for each reason, citing the specific policy provisions relied upon. This
        applies to partial denials as well &mdash; if the carrier pays $200,000 on a claim the
        insured believes is worth $400,000, the carrier has effectively denied $200,000 and must
        explain why. A check accompanied by a vague letter that says &ldquo;enclosed is payment
        for your claim&rdquo; does not satisfy this obligation when the carrier has not paid the
        full amount claimed.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        10 CCR &sect;2695.9(d): The Insurer Must Share Its Estimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most powerful provisions in the California regulations for property
        claims. It provides that if losses are settled on the basis of a written scope and/or
        estimate prepared by or for the insurer, <strong>the insurer shall supply the claimant
        with a copy</strong>. If the carrier used an Xactimate estimate, a scope of loss, or any
        other written document to calculate the payment, the insured is entitled to a copy. The
        carrier cannot withhold the very documents it relied on to justify its number.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        10 CCR &sect;2695.4(a): The Duty to Disclose All Coverages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier must affirmatively disclose to the insured <strong>all benefits, coverage,
        time limits or other provisions</strong> of the policy that may apply to the claim. The
        duty is on the insurer to disclose &mdash; not on the insured to ask. If the carrier
        never mentions a coverage that applies to your loss, that silence is itself a regulatory
        violation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full section-by-section breakdown of these regulations, see our{' '}
        <Link
          href="/resources/california-fair-claims"
          className="text-blue-700 underline hover:text-blue-900"
        >
          California Fair Claims Settlement Practices guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Carrier Must Provide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under these regulations, the carrier should provide all of the documents that formed the
        basis of its payment. Specifically, that includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The Xactimate estimate</strong> (or whatever estimating tool was used) &mdash; this
          is the line-by-line calculation showing every repair item, its quantity, unit price, and
          total. See our guide on{' '}
          <Link
            href="/resources/xactimate-line-items"
            className="text-blue-700 underline hover:text-blue-900"
          >
            reading Xactimate line items
          </Link>.
        </li>
        <li>
          <strong>The depreciation schedule</strong> showing the useful life assumptions and
          depreciation rates applied to each item. This is where many underpayments hide &mdash;
          inflated depreciation rates, incorrect useful life figures, and depreciation applied to
          items that should not be depreciated at all.
        </li>
        <li>
          <strong>The statement of loss</strong> showing how payments were allocated across coverages
          (dwelling, other structures, personal property, loss of use). See our guide on{' '}
          <Link
            href="/resources/reading-statement-of-loss"
            className="text-blue-700 underline hover:text-blue-900"
          >
            reading your statement of loss
          </Link>.
        </li>
        <li>
          <strong>Any engineering reports, cause-and-origin reports, or expert reports</strong> the
          carrier relied on in evaluating the claim.
        </li>
        <li>
          <strong>The adjuster&rsquo;s notes or reports</strong> that formed the basis of the
          coverage determination.
        </li>
        <li>
          <strong>Any scope of loss documents</strong> prepared during the inspection.
        </li>
        <li>
          <strong>The policy provisions</strong> the carrier relied on for any exclusion, limitation,
          or coverage determination &mdash; not just a citation, but the actual language.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have not received these documents, you have not received what the law requires. For
        more on how insurance payments are structured, see our guide on{' '}
        <Link
          href="/resources/how-insurance-payments-calculated"
          className="text-blue-700 underline hover:text-blue-900"
        >
          how insurance payments are calculated
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Estimate Disclosure Requirement Actually Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.9(d) deserves a closer look because it is one of the most powerful and
        underused provisions in California insurance regulation. The principle is straightforward:
        if the carrier settled on the basis of a written scope or estimate, you are entitled to
        see that document. The carrier cannot hide behind claims of &ldquo;internal work
        product&rdquo; when the document was the basis of the settlement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what this means in practice:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          If the carrier&rsquo;s adjuster wrote an internal report recommending a lower payment, and
          the carrier used that recommendation to determine the settlement amount, the insured is
          entitled to see it.
        </li>
        <li>
          If the carrier used a depreciation schedule that assigned 25% depreciation to a 3-year-old
          roof, the insured is entitled to see that schedule and challenge those assumptions. A
          3-year-old roof on a 30-year shingle has consumed roughly 10% of its useful life &mdash;
          not 25%.
        </li>
        <li>
          If the carrier&rsquo;s Xactimate estimate omitted line items &mdash; for example, leaving
          out overhead and profit, or excluding removal and haul-off of damaged materials &mdash; the
          insured is entitled to see the estimate and identify what is missing.
        </li>
        <li>
          If the carrier hired an engineer to evaluate the cause of the damage, and the
          carrier&rsquo;s coverage decision was based on that engineer&rsquo;s report, the insured
          is entitled to a copy of the full report &mdash; not just a summary or conclusion.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation does not contain exceptions for documents the carrier considers
        &ldquo;proprietary&rdquo; or &ldquo;confidential.&rdquo; If it was used as the basis of
        the settlement, it must be shared. Period.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Right to Request Your Claim File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the specific regulatory requirements of &sect;2695.7, the insured has broader rights
        to request copies of documents in the claim file. California Insurance Code &sect;2071 and
        the Fair Claims Settlement Practices Regulations establish that the insured is entitled to
        examine the documents that relate to the handling of the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed guide on this right, see our article on{' '}
        <Link
          href="/resources/cdi-right-to-claim-documents"
          className="text-blue-700 underline hover:text-blue-900"
        >
          your right to request claim documents from your insurer
        </Link>.
      </p>

      <CalloutBox variant="tip" title="How to Request Your Claim File">
        <p>
          Send a written request &mdash; email is fine &mdash; specifically citing 10 CCR
          &sect;2695.9(d) (requirement to share estimates and scope documents) and
          &sect;2695.7(b)(1) (requirement to explain all bases for any denial), and requesting
          the complete claim file, including all estimates, reports, depreciation schedules,
          adjuster notes, and correspondence. Be specific about what you want. The carrier must
          respond within a reasonable time as specified in the regulations. If it does not,
          document the request and the lack of response &mdash; this becomes evidence of a
          regulatory violation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics to Avoid Disclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite these clear regulatory obligations, many carriers resist providing the documents
        that policyholders are entitled to. Watch for these common tactics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sending a check with no accompanying estimate or explanation.</strong> The carrier
          issues payment with a generic letter that states the amount but provides no breakdown of
          how it was calculated.
        </li>
        <li>
          <strong>Providing a vague &ldquo;settlement letter&rdquo;</strong> that states the payment
          amount and references the claim number but contains no actual calculation, no estimate, and
          no depreciation detail.
        </li>
        <li>
          <strong>Claiming the estimate or depreciation schedule is &ldquo;proprietary&rdquo; or
          &ldquo;internal.&rdquo;</strong> This is not a valid basis for withholding documents that
          formed the basis of the settlement under California law.
        </li>
        <li>
          <strong>Delaying the response to document requests.</strong> The carrier acknowledges the
          request but takes weeks or months to produce the documents, hoping the insured will give up
          or accept the payment without reviewing them.
        </li>
        <li>
          <strong>Providing the Xactimate estimate but withholding the depreciation schedule or scope
          notes.</strong> This gives the appearance of transparency while still hiding the most
          consequential parts of the calculation.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of these tactics are permissible under the California regulations. Every one of them
        constitutes a potential violation of the Fair Claims Settlement Practices Regulations and may
        be reported to the California Department of Insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Exercise Your Rights
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are the practical steps to obtain the documents you are entitled to:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Send a written request</strong> (email is fine) to your adjuster and the
          carrier&rsquo;s claims department specifically asking for:
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>The complete Xactimate estimate or repair cost document</li>
            <li>The depreciation schedule showing rates and methodology for each item</li>
            <li>The statement of loss and settlement breakdown</li>
            <li>Any engineering, cause-and-origin, or expert reports</li>
            <li>The adjuster&rsquo;s report or notes</li>
            <li>The policy provisions relied on for any coverage determination, exclusion, or limitation</li>
          </ul>
        </li>
        <li>
          <strong>Cite the regulations.</strong> Include specific references to 10 CCR
          &sect;2695.9(d) (estimate disclosure), &sect;2695.7(b)(1) (denial explanation), and
          &sect;2695.4(a) (duty to disclose all coverages). This signals to the carrier that you
          know your rights and that you are creating a record for potential regulatory action.
        </li>
        <li>
          <strong>Set a deadline.</strong> State that you expect a response within 10 to 14 calendar
          days. This is reasonable and consistent with the timing expectations in the regulations.
        </li>
        <li>
          <strong>Follow up in writing.</strong> If the carrier does not respond by your deadline,
          send a follow-up email reiterating the request and noting the original date. Every
          unanswered request strengthens a potential CDI complaint.
        </li>
        <li>
          <strong>File a CDI complaint if necessary.</strong> If the carrier refuses to provide the
          documents or continues to delay, file a complaint with the California Department of
          Insurance. The CDI investigates regulatory violations and can impose penalties. See our
          guide on{' '}
          <Link
            href="/resources/cdi-complaint"
            className="text-blue-700 underline hover:text-blue-900"
          >
            how to file a CDI complaint
          </Link>.
        </li>
        <li>
          <strong>Consider hiring a public adjuster.</strong> A licensed public adjuster can review
          the carrier&rsquo;s documents, identify errors in the estimate and depreciation schedule,
          and negotiate on your behalf. See our guide on{' '}
          <Link
            href="/resources/public-adjuster"
            className="text-blue-700 underline hover:text-blue-900"
          >
            what a public adjuster does and when to hire one
          </Link>.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You cannot dispute what you cannot see. That is the fundamental reason these regulations
        exist. The insurance company has all the information &mdash; the estimate, the depreciation
        assumptions, the adjuster&rsquo;s notes, the engineering reports, the policy analysis &mdash;
        and the insured has none of it. The duty to disclose levels the playing field.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have the underlying documents, you can identify the specific errors that result in
        underpayment:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Wrong depreciation rates</strong> &mdash; the carrier applied excessive
          depreciation that does not reflect the actual condition or remaining useful life of the
          damaged item.
        </li>
        <li>
          <strong>Missing line items</strong> &mdash; the carrier&rsquo;s estimate omitted repair
          items that are clearly necessary to restore the property to its pre-loss condition.
        </li>
        <li>
          <strong>Incorrect measurements</strong> &mdash; the square footage, linear footage, or
          quantities in the estimate do not match the actual dimensions of the damaged areas.
        </li>
        <li>
          <strong>Deductible applied incorrectly</strong> &mdash; the deductible was applied twice,
          applied to the wrong coverage, or calculated on the wrong basis.
        </li>
        <li>
          <strong>Coverage misapplied</strong> &mdash; items were placed under the wrong coverage
          category, resulting in a lower limit or different deductible.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These errors are only visible if you have the underlying documents. Without them, you are
        trusting the carrier&rsquo;s math &mdash; and the carrier has every financial incentive to
        pay less. For a detailed look at common estimating errors, see our guide on{' '}
        <Link
          href="/resources/common-xactimate-errors"
          className="text-blue-700 underline hover:text-blue-900"
        >
          common Xactimate errors that reduce your payment
        </Link>.
      </p>

      <CalloutBox variant="important" title="You Have the Right to Understand Your Payment">
        <p>
          Don&rsquo;t accept a check you can&rsquo;t verify. California law requires the carrier to
          explain its calculation and share the documents it relied on. Exercise these rights. Every
          undisclosed document is a potential underpayment hiding in plain sight. Request the
          estimate, the depreciation schedule, the adjuster&rsquo;s notes, and every report the
          carrier used. If the carrier won&rsquo;t provide them, that refusal is itself a regulatory
          violation &mdash; and it tells you everything you need to know about whether the payment
          was fair.
        </p>
      </CalloutBox>

      <CalloutBox variant="warning" title="Legal Disclaimer">
        <p>
          This article is for general informational purposes only and does not constitute legal
          advice. Insurance claims involve complex legal and factual issues. If you need legal advice,
          consult a licensed attorney. If you need help with the adjustment of your claim, consider
          hiring a licensed public adjuster.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
