import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "AB 597: Proposed Public Adjuster Regulations in California",
  description:
    "AB 597 would cap California Public Adjuster fees at 15% for catastrophe claims and add new contract and solicitation rules. Held in Senate Appropriations.",
  summary:
    'AB 597 is a pending California bill that would cap Public Adjuster fees at 15% on catastrophic-disaster claims and add new contract and solicitation rules. As of August 2025 it is held in Senate Appropriations and is not yet law.',
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

      <CalloutBox variant="warning" title="AB 597 Status: Pending — Not Enacted">
        <p>
          AB 597 (Assemblymember John Harabedian, D-Pasadena, &ldquo;The Insurance Payment
          Protection Act,&rdquo; sponsored by the California Department of Insurance) is a
          pending California bill. It is <strong>not law</strong>. As of the last status
          update available to us (August 29, 2025), the bill was held under submission in the
          California Senate Appropriations Committee suspense file and had not been signed by
          the Governor. The 2025&ndash;2026 legislative session continues through September
          2026, so the status may have changed. Verify current status at the legislature
          link below before relying on this snapshot.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This page describes a bill that has been introduced in the California Legislature but
        has not become law. Until AB 597 is enacted, none of the provisions described below
        are enforceable, and current law continues to govern Public Adjuster contracts and
        fees.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What AB 597 Would Do, If Enacted
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Cap Public Adjuster fees at <strong>15%</strong> of insurer payments received after
          the contract date, for claims arising from a catastrophic disaster or declared state
          of emergency.
        </li>
        <li>
          Prohibit fees calculated on amounts the insurer paid <em>before</em> the contract
          date.
        </li>
        <li>
          Require PA contracts to specify the services performed and the specific coverages
          addressed.
        </li>
        <li>
          Extend the existing five-calendar-day post-signing cancellation window (which
          currently applies only to catastrophic-disaster-area losses) to also cover losses
          in a declared state-of-emergency area.
        </li>
        <li>
          Restrict solicitation during active loss-producing occurrences and between 6 p.m.
          and 8 a.m.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Current California Law (Not AB 597)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Public adjuster contracts remain governed by California Insurance Code &sect; 15027 and
        related sections. There is <strong>no statutory percentage cap</strong> on PA fees
        under current law &mdash; the percentage is whatever the written contract specifies.
        Common contract practice in catastrophe contexts is 10%, but that is industry custom,
        not statutory law. For current-law guidance see{' '}
        <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] underline">
          Public Adjuster fees
        </Link>{' '}
        and{' '}
        <Link href="/resources/what-public-adjuster-does" className="text-[#2E74B5] underline">
          what a Public Adjuster does
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Track AB 597
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <a
            href="https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260AB597"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            California Legislative Information AB-597 status page
          </a>{' '}
          &mdash; authoritative source for current bill status, amendments, and committee
          actions.
        </li>
        <li>
          <Link
            href="/resources/new-california-insurance-laws-2025-2026"
            className="text-[#2E74B5] underline"
          >
            Omnibus 2025&ndash;2026 California insurance-laws tracker
          </Link>{' '}
          &mdash; covers AB 597 alongside other pending insurance legislation.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Editorial Note">
        <p>
          This page will be expanded into a full explainer once AB 597 is enacted, killed, or
          substantially amended. The page was previously published with framing that
          incorrectly described AB 597 as enacted law taking effect January 1, 2026. That
          framing was corrected on 2026-05-17 to match the bill&rsquo;s actual status
          (pending, held in Senate Appropriations) after primary-source verification at the
          California Legislature&rsquo;s bill information site.
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
