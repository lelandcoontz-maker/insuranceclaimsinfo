import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Filing Supplemental Claims: Getting Paid for What They Missed',
  description:
    'How to file a supplement when the insurance company\'s estimate missed damage, and how to maximize your recovery through the supplement process.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s first estimate is rarely the last word. As repairs proceed,
        additional damage is often discovered that wasn&apos;t visible during the initial inspection.
        A supplemental claim &mdash; or &quot;supplement&quot; &mdash; is your request for additional
        payment to cover damage or repair costs that weren&apos;t included in the original estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing supplements is a normal and expected part of the claims process. Experienced
        adjusters know that complex claims often require multiple supplements. Don&apos;t feel
        like you&apos;re asking for a favor &mdash; you&apos;re exercising your right to full
        indemnification under your policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When to File a Supplement</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hidden damage discovered during demolition (water behind walls, mold under flooring)</li>
        <li>Items the adjuster missed during the initial inspection</li>
        <li>Price increases for materials since the original estimate</li>
        <li>Code upgrades required by the building department</li>
        <li>Additional trades needed that weren&apos;t in the original scope</li>
        <li>
          <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
            Overhead and profit
          </Link>{' '}
          that was excluded from the original estimate
        </li>
        <li>Matching requirements (new materials don&apos;t match existing)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to File a Supplement</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the additional damage</strong> with photos and video before any
          repairs are made to those areas
        </li>
        <li>
          <strong>Get a written estimate</strong> for the additional work from your contractor
          or public adjuster
        </li>
        <li>
          <strong>Submit in writing</strong> to the adjuster handling your claim, with photos
          and a detailed explanation of why the additional work is needed
        </li>
        <li>
          <strong>Reference the original estimate</strong> and explain what was missed or
          what has changed
        </li>
        <li>
          <strong>Follow up</strong> if you don&apos;t receive a response within a reasonable
          time (check your state&apos;s regulations for specific deadlines)
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Multiple Supplements Are Normal</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On complex claims, it&apos;s not unusual to file three, four, or even five supplements.
        Each time new damage is discovered or additional costs arise, you have the right to
        submit for additional payment. I&apos;ve handled claims where the final settlement was
        double or triple the carrier&apos;s initial estimate &mdash; all through legitimate
        supplements documenting real damage.
      </p>

      <CalloutBox variant="tip" title="Keep the Adjuster in the Loop">
        <p>
          The best approach is to notify the adjuster as soon as additional damage is discovered.
          Invite them to re-inspect if possible. The more they see with their own eyes, the
          harder it is to deny the supplement. If the carrier is telling you that the delays
          are your fault for filing supplements, remember: the supplement exists because they
          missed the damage in the first place.
        </p>
      </CalloutBox>

    </>
  )
}
