import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Mold Claims: Coverage, Limits, and Insurer Tactics',
  description:
    'An overview of mold as an insurance claim type, the difference between mold as a direct cause versus an ensuing loss, and how to approach a mold claim with your insurance company.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mold as an Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mold is one of the most contested issues in homeowners insurance. It can arise as a
        standalone claim type — you discover mold growing in your home — or it can develop as a
        secondary consequence of another covered loss, most commonly water damage. How mold fits
        into your claim dramatically affects your coverage, and insurance companies frequently
        exploit this complexity to minimize what they pay.
      </p>

      <CalloutBox variant="tip" title="Read Our Full Mold Article">
        <p>
          This page provides an overview of mold claims. For a comprehensive discussion of mold
          coverage, the ensuing loss doctrine, how insurers misapply mold sub-limits, and how to
          protect your claim when mold is involved, read our{' '}
          <Link href="/resources/mold-losses" className="underline hover:text-sky-950">
            detailed article on mold losses
          </Link>
          .
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mold as a Direct Cause vs. Ensuing Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When mold is the direct cause of loss — meaning mold simply grows due to humidity, poor
        ventilation, or deferred maintenance — most homeowners policies exclude coverage entirely.
        This exclusion is generally straightforward.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The far more common and more important scenario is mold as an <strong>ensuing
        loss</strong>. When mold develops as a result of a covered water loss — a burst pipe, an
        appliance leak, or storm-related water intrusion — the mold may be covered under the
        ensuing loss provision in your policy. The water loss is the covered peril, and the mold
        that grew because of the water is covered as a consequence, typically subject to a
        sub-limit. This is the area where most disputes occur, and where understanding your
        rights makes the biggest financial difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Points for Mold Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ensuing loss doctrine:</strong> Many policies provide coverage for mold that
          results from a covered peril, even though mold as a standalone cause is excluded.
          Insurance companies do not always volunteer this information.
        </li>
        <li>
          <strong>Mold sub-limits:</strong> Most policies cap mold coverage at $5,000 to $10,000.
          However, insurers frequently misapply this limit by charging water damage remediation
          costs against the mold cap. Only work specifically attributable to mold — antimicrobial
          treatments, HEPA air scrubbing, mold-specific containment — should count against this
          limit.
        </li>
        <li>
          <strong>The &quot;long-term&quot; argument:</strong> Insurance companies often use mold
          as evidence that a water loss was ongoing for an extended period, arguing the loss
          therefore is not sudden and accidental. Mold can begin growing in 24 to 48 hours — its
          presence alone does not prove the loss is old.
        </li>
        <li>
          <strong>Independent testing:</strong> Hire your own qualified mold assessor, not one
          recommended by the insurance company, to document the type and extent of mold present.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Mold Remediation Is Needed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional mold remediation is needed whenever mold growth extends beyond a minor,
        surface-level issue. If mold has colonized drywall, insulation, framing, or other
        building materials, professional remediation is required — not just surface cleaning.
        Proper mold remediation involves containment of the affected area, removal of
        contaminated materials, HEPA air filtration, antimicrobial treatment, and
        post-remediation testing to confirm that mold levels have returned to acceptable levels.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your water damage claim involves mold, frame the claim correctly from the start. It is
        a water loss with mold as a secondary consequence — not a &quot;mold claim.&quot; How the
        claim is characterized can significantly affect your coverage and the insurer&apos;s
        response. A licensed{' '}
        <Link href="/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        experienced with mold-related claims can help you navigate this process and ensure the
        insurer applies the mold sub-limit properly.
      </p>
    </>
  )
}
