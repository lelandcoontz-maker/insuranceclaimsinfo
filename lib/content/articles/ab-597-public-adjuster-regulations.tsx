import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'AB 597 (Pending): Proposed Public Adjuster Regulations in California',
  description:
    'California AB 597 is a pending bill that would cap public adjuster fees at 15% for catastrophic-disaster claims and impose new contract and solicitation requirements. Currently held in Senate Appropriations as of August 2025.',
  summary:
    'AB 597 is a pending California bill that would cap public adjuster fees at 15% on catastrophic-disaster claims and add new contract and solicitation rules. As of August 2025 it is held in Senate Appropriations and is not yet law.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="warning" title="AB 597 Status: Pending — Not Enacted">
        <p>
          AB 597 (Harabedian, &ldquo;The Insurance Payment Protection Act&rdquo;) is a pending
          California bill. It is <strong>not law</strong>. The bill has been held under
          submission in the California Senate Appropriations Committee suspense file since
          August 29, 2025, and has not been signed by the Governor.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This page describes a bill that has been introduced in the California Legislature but
        has not become law. Until AB 597 is enacted, none of the provisions described below
        are enforceable, and current law continues to govern public adjuster contracts and
        fees.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What AB 597 Would Do, If Enacted
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Cap public adjuster fees at <strong>15%</strong> of insurer payments received after
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
          Extend the post-signing cancellation window to <strong>five calendar days</strong>{' '}
          during a state of emergency.
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
        Public adjuster contracts remain governed by California Insurance Code &sect;15027 and
        related sections. There is <strong>no statutory percentage cap</strong> on PA fees
        under current law &mdash; the percentage is whatever the written contract specifies.
        Common contract practice in catastrophe contexts is 10%, but that is industry custom,
        not statutory law. For current-law guidance see{' '}
        <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] underline">
          public adjuster fees
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
    </>
  )
}
