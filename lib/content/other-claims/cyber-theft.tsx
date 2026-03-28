import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Cyber Theft Claims: Protecting Your Business After a Cyber Attack',
  description:
    'Cyber theft claims cover business losses from ransomware, wire fraud, data breaches, and social engineering attacks. Learn how a Public Adjuster can help with your cyber insurance claim.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Growing Threat of Business Cyber Theft
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cyber theft is one of the fastest-growing risks facing businesses of all sizes. From small
        companies targeted by phishing emails to large corporations hit with sophisticated ransomware
        attacks, the financial impact of cybercrime can be devastating. When your business suffers a
        cyber loss, your insurance policy may provide coverage &mdash; but recovering that money
        requires navigating a complex and relatively new area of insurance claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Cyber Losses Covered
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depending on your policy, business cyber coverage may apply to a range of loss scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ransomware attacks:</strong> When hackers encrypt your systems and demand payment
          to restore access. Coverage may include the ransom payment itself, data recovery costs,
          and business income lost during the downtime.
        </li>
        <li>
          <strong>Wire fraud and funds transfer fraud:</strong> Losses from unauthorized electronic
          transfers, often triggered by compromised email accounts or spoofed payment instructions.
        </li>
        <li>
          <strong>Social engineering fraud:</strong> When an employee is tricked into sending money or
          sensitive data to a criminal posing as a vendor, executive, or client.
        </li>
        <li>
          <strong>Data breaches:</strong> Costs associated with a breach of customer or employee
          data, including notification requirements, credit monitoring, forensic investigation, and
          legal defense.
        </li>
        <li>
          <strong>Business interruption from cyber events:</strong> Lost income when a cyber attack
          forces your business to shut down or operate at reduced capacity.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cyber Liability Policies vs. Traditional Commercial Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standalone cyber liability policy provides the broadest coverage for cyber-related losses.
        However, many businesses rely on endorsements added to their traditional commercial property
        or general liability policies. These endorsements often have significant limitations &mdash;
        lower sublimits, narrower definitions, and exclusions that may not be immediately obvious.
        Understanding exactly what your policy covers before a loss occurs is critical, but even after
        a loss, a thorough policy review can reveal coverage your insurer may not voluntarily disclose.
      </p>

      <CalloutBox variant="tip" title="Document Everything Immediately">
        <p>
          If your business experiences a cyber attack, preserve all evidence before taking corrective
          action. Screenshot error messages, save emails related to the fraud, document the timeline
          of events, and keep records of all expenses incurred in response to the incident. Report the
          attack to law enforcement (FBI&apos;s IC3 and local police) and notify your insurance
          company promptly. The quality of your documentation directly affects your claim outcome.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reporting and Documentation Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cyber insurance policies typically have strict reporting requirements. Many require you to
        notify the insurer within a specific timeframe &mdash; sometimes as short as 48 to 72 hours
        after discovering the incident. Failing to meet these deadlines can jeopardize your coverage.
        Additionally, insurers often require you to use their approved forensic investigators and
        legal counsel, so check your policy requirements before engaging outside vendors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key documentation includes: the date and time the incident was discovered, how the breach or
        theft occurred, what systems and data were affected, financial records showing the amount of
        loss, all expenses related to the response and recovery, and any communications with law
        enforcement or regulatory agencies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Public Adjuster Helps With Cyber Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cyber insurance is a newer and rapidly evolving area, and many business owners are unfamiliar
        with the claims process. A licensed Public Adjuster can review your policy to identify all
        applicable coverages, prepare and document the claim to meet your insurer&apos;s requirements,
        calculate all covered losses including business interruption and extra expenses, and negotiate
        with the insurance company on your behalf. Because cyber policies vary widely in their terms
        and conditions, having a professional who understands these policies can help ensure you
        receive the full benefit of your coverage.
      </p>

      <LeadCaptureForm
        claimType="cyber-theft"
        heading="Get Help With Your Cyber Theft Claim"
        description="Tell us about your cyber loss and we'll review your coverage. Free consultation, no obligation."
      />
    </>
  )
}
