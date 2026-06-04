import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Insurer\'s Duty to Investigate: When a Sloppy Investigation Becomes Bad Faith',
  description:
    'California insurers have a legal duty to thoroughly and fairly investigate every claim. When they don\'t, it can constitute bad faith — even if the claim might not have been covered.',
  summary:
    'California insurers must investigate every claim thoroughly and fairly. A one-sided or sloppy investigation can itself be bad faith, even if the claim might ultimately not have been covered. Document the gaps in their investigation.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance company in California has a legal obligation to conduct a thorough, fair,
        and objective investigation appropriate to the claim &mdash; calibrated to the facts, the
        coverage, and the documentation, but never reduced to a cursory review that fails to
        develop the facts material to coverage. This is not optional — it is mandated
        by the California Insurance Code, the Fair Claims Settlement Practices Regulations, and
        decades of case law. When an insurer fails to properly investigate and denies or underpays
        your claim as a result, that failure can itself constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>{' '}
        — regardless of whether the claim would ultimately have been covered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Foundation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&apos;s duty to investigate is grounded in several overlapping authorities:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance Code &sect; 790.03(h)(3):</strong> It is an unfair claims settlement
          practice to fail to adopt and implement reasonable standards for the prompt
          investigation and processing of claims.
        </li>
        <li>
          <strong>Insurance Code &sect; 790.03(h)(4):</strong> Failing to affirm or deny coverage
          within a reasonable time after proof of loss has been completed.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.7(d):</strong> Every insurer shall conduct and diligently
          pursue a thorough, fair and objective investigation and shall not persist in seeking
          information not reasonably required for or material to the resolution of a claim
          dispute.
        </li>
        <li>
          <strong>The implied covenant of good faith and fair dealing:</strong> Every insurance
          contract includes an implied promise that the insurer will deal fairly with the insured.
          A shoddy investigation can breach that promise.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Moradi-Shalal v. Fireman&apos;s Fund Ins. Co.</em> (1988) 46 Cal.3d 287, an
        insured cannot sue directly under &sect; 790.03 or the Fair Claims Settlement Practices
        Regulations &mdash; those provisions do not create a private cause of action. They inform
        the standard of care for a common-law bad-faith claim brought under the implied covenant.
        The duty to investigate, then, is enforced in private litigation through the common-law
        bad-faith framework that the statutory and regulatory standards help define.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California cases applying these standards add an important balance: under{' '}
        <em>Wilson v. 21st Century Ins. Co.</em> (2007) 42 Cal.4th 713, an insurer is not liable
        for bad faith when its position rests on a genuine, good-faith dispute &mdash; but only
        when the position was reached through a thorough and fair investigation. The duty to
        investigate is the gateway: if the investigation was inadequate, the genuine-dispute
        defense generally does not protect the insurer; if the investigation was thorough and the
        position reached was objectively reasonable, the doctrine often does. The standards below
        are evaluated in that framework.
      </p>

      <CalloutBox variant="warning" title="Bad-Faith Liability Can Arise From Investigation Failures Alone">
        <p>
          California cases, beginning with <em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24
          Cal.3d 809, have recognized that an inadequate investigation can support a bad-faith
          claim independently of whether the underlying claim was ultimately covered &mdash;
          provided the investigation failure caused the claim to be wrongly denied, delayed, or
          underpaid. The duty to investigate is independent of the duty to pay, but bad-faith
          damages still require proof of causation and resulting harm; investigation flaws alone,
          without causation or harm, generally do not produce tort liability.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Proper Investigation Looks Like
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A thorough investigation means the insurer must:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Timely acknowledge and begin investigating.</strong> Under 10 CCR § 2695.5(e),
          the insurer must acknowledge the claim and begin investigation within 15 calendar days
          of receiving notice.
        </li>
        <li>
          <strong>Inspect the property.</strong> The insurer must physically inspect the damage —
          not just rely on photos, satellite imagery, or desk reviews. For complex losses, this
          may require multiple inspections, destructive testing, or specialized experts.
        </li>
        <li>
          <strong>Consider all available evidence.</strong> The insurer cannot cherry-pick evidence
          that supports a denial while ignoring evidence that supports coverage. They must consider
          the policyholder&apos;s documentation, contractor estimates, expert reports, and any other
          evidence submitted.
        </li>
        <li>
          <strong>Disclose all applicable coverages.</strong> Under 10 CCR &sect; 2695.4(a), the
          insurer must disclose to a first-party claimant or beneficiary all benefits, coverages,
          time limits, or other provisions that may apply to the claim. The insurer cannot stay
          silent about a coverage that might benefit the policyholder.
        </li>
        <li>
          <strong>Communicate findings.</strong> The insurer must explain what they found, what
          they are paying, what they are not paying, and why — in writing, with specific
          policy references.
        </li>
        <li>
          <strong>Not seek irrelevant information.</strong> The insurer cannot use the investigation
          as a fishing expedition — demanding years of financial records, unrelated medical history,
          or other information not material to the claim.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Signs of an Inadequate Investigation
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Drive-by or cursory inspection.</strong> The adjuster spent 20 minutes on a
          six-figure loss. They did not go in the attic, crawl space, or behind walls. They
          took a few photos and left.
        </li>
        <li>
          <strong>Desk review only.</strong> The insurer made a coverage decision based on photos
          or a Google Earth review without ever sending someone to the property.
        </li>
        <li>
          <strong>Ignoring your evidence.</strong> You submitted a contractor estimate, an
          engineer&apos;s report, or photos of damage. The insurer&apos;s estimate does not
          address or even mention this evidence.
        </li>
        <li>
          <strong>Using{' '}
          <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] hover:underline">biased experts</Link>
          .</strong> The insurer hired an engineer or hygienist who always produces insurer-favorable
          results, and relied on that report without independent verification.
        </li>
        <li>
          <strong>Failing to investigate promptly.</strong> Months pass with no inspection, no
          communication, no progress. Delay is itself an investigation failure.
        </li>
        <li>
          <strong>Premature denial.</strong> The insurer denied the claim before completing the
          investigation — sometimes before even inspecting the property.
        </li>
        <li>
          <strong>Failing to disclose applicable coverages.</strong> The insurer pays on Coverage A
          but never mentions that{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">ordinance or law</Link>,{' '}
          <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">debris removal</Link>,
          or other coverages also apply.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Rights During the Investigation
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You can be present during inspections.</strong> Do not let the adjuster
          inspect alone. Be there (or have your representative there) to point out damage and
          ensure it is documented.
        </li>
        <li>
          <strong>You can have your own expert present.</strong> Bring your contractor, Public
          Adjuster, or other professional to the inspection. They can identify damage the
          insurer&apos;s adjuster might miss or minimize.
        </li>
        <li>
          <strong>You can request claim file documentation.</strong> California regulations
          require the insurer to provide certain claim-related documentation upon request &mdash;
          including the carrier&apos;s estimate, written denials with specific factual and
          policy bases (10 CCR &sect; 2695.7(b)(1)), and disclosure of applicable coverages
          (10 CCR &sect; 2695.4(a)). The scope of what the insurer must produce varies; some
          materials (such as attorney-client communications or work product prepared in
          anticipation of litigation) may be withheld. Where the insurer refuses to produce
          documents that should be available, raising the issue in writing &mdash; and, if
          necessary, in a CDI complaint &mdash; is the standard path.
        </li>
        <li>
          <strong>You can submit your own evidence at any time.</strong> The insurer must
          consider material evidence you submit. If you get a contractor estimate after the
          insurer&apos;s initial inspection, submit it in writing and request that it be
          considered as part of the carrier&apos;s analysis. &ldquo;Consider&rdquo; is not the
          same as &ldquo;adopt&rdquo; &mdash; the insurer is required to evaluate the evidence,
          not necessarily accept it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If the Investigation Is Inadequate
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document the deficiency in writing.</strong> Send a letter (email or certified
          mail) to the adjuster and their supervisor identifying specifically what was inadequate:
          areas not inspected, evidence not considered, damage not documented.
        </li>
        <li>
          <strong>Demand a re-inspection.</strong> Request that the insurer send a more experienced
          adjuster or a qualified expert to conduct a proper inspection.
        </li>
        <li>
          <strong>Submit your own documentation.</strong> Hire your own contractor, engineer, or
          professional to inspect and document the damage. Submit their report to the insurer with
          a demand that it be considered.
        </li>
        <li>
          <strong>File a CDI complaint.</strong> A complaint with the California Department of
          Insurance creates an official record that the insured raised concerns about the
          investigation. CDI may investigate and act on systemic issues; the complaint itself
          documents the allegation rather than proves the failure. See{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">filing a CDI complaint</Link>.
        </li>
        <li>
          <strong>Consider professional representation.</strong> A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>{' '}
          can take over the claims process and document any investigation deficiencies in real
          time. If the facts suggest bad faith, an attorney can evaluate whether the conduct
          supports a claim for damages beyond the policy benefits.
        </li>
      </ol>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Insurer&apos;s Investigation Falling Short?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Inadequate investigation is one of the most common patterns of insurer conduct that
          informs bad-faith analysis. A licensed public adjuster can document the gaps in the
          investigation in real time &mdash; the documentation an attorney would need if the
          facts later support a legal claim. Many public adjusters provide a free initial
          consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. California Insurance Code &sect; 15002 expressly provides that the Public
          Adjuster Act does not authorize the practice of law &mdash; whether the facts of a
          specific claim support a bad-faith action, and what damages may be recoverable, is a
          question for a licensed California attorney. The public adjuster&apos;s role in this
          area is to document the carrier&apos;s investigation conduct during the claim; the
          attorney&apos;s role is the legal claim. Insurance policies, regulations, and case law
          can vary significantly based on individual circumstances; consult a licensed attorney
          for advice about your specific situation.
        </p>
      </CalloutBox>
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
