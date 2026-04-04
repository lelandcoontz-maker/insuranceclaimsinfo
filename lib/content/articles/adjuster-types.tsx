import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Types of Insurance Adjusters: Who You\'re Really Dealing With',
  description:
    'Staff adjusters, independent adjusters, desk adjusters, field adjusters, public adjusters — learn who each one works for and how it affects your claim.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all adjusters are the same. Understanding who the adjuster works for and what
        motivates them is critical to navigating your claim effectively.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Staff Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Staff adjusters are employees of the insurance company. They receive a salary, benefits,
        and job security from the carrier. Their loyalty is to their employer. While many staff
        adjusters are honest professionals, the reality is that adjusters who consistently write
        generous estimates don&apos;t last long at insurance companies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Independent Adjusters (IAs)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent adjusters work for IA firms that contract with insurance companies. They&apos;re
        not direct employees of the carrier, but the carrier is their client. During catastrophes
        (hurricanes, wildfires, large storms), carriers bring in hundreds of independent adjusters
        to handle the surge of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        IAs are paid per claim or per inspection. This creates an incentive to close claims
        quickly. In California, adjusters must be individually licensed and are required to include
        their license number or their supervising adjuster&apos;s license number on all written
        communications.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Desk Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusters handle claims remotely &mdash; they never visit your property. They
        review photos, estimates, and documentation from their office. The obvious limitation
        is that they can&apos;t see damage that isn&apos;t in the photos, can&apos;t smell mold,
        and can&apos;t feel soft drywall. Remote adjusting has become more common since COVID
        and has led to more disputes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Field Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Field adjusters physically inspect the property. They may be staff adjusters or
        independent adjusters. Having a field adjuster inspect your property is almost always
        better than a desk review, because they can observe damage that photos miss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Public Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        is the only type of adjuster who works exclusively for the policyholder. Public adjusters
        are licensed by the state and are legally prohibited from working for insurance companies.
        They document damage, prepare estimates, negotiate with the carrier, and handle the
        entire claims process on your behalf.
      </p>

      <CalloutBox variant="tip" title="Who Works for Whom">
        <p>
          Staff adjusters and independent adjusters work for the insurance company. Desk adjusters
          work for the insurance company. The only adjuster who works for YOU is a public adjuster.
          Understanding this distinction is the first step to protecting yourself.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">SIU Investigators</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Special Investigation Unit (SIU) investigators are not adjusters in the traditional
        sense. They investigate claims the carrier suspects may involve fraud or misrepresentation.
        If your claim is referred to SIU, take it seriously &mdash; but don&apos;t panic. Many
        SIU referrals are routine, triggered by dollar thresholds rather than actual suspicion
        of fraud. If SIU contacts you, consider consulting an attorney before providing a{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          recorded statement or EUO
        </Link>.
      </p>

    </>
  )
}
