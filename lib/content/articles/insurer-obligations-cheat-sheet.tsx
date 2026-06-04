import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Your Insurance Company Is Required to Do — The Cheat Sheet',
  description:
    'A pocket reference of every California deadline and obligation your insurer must meet during your claim, with the exact regulation citations.',
  summary:
    'California sets firm deadlines your insurer must meet: acknowledge the claim, begin investigating, accept or deny in writing, and pay promptly once liability is reasonably clear. Missing these deadlines violates the Fair Claims Settlement Practices Regulations.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance company has legal obligations. They are not doing you a favor by
        processing your claim — they are performing a duty imposed by the contract you paid
        for and the regulations that govern their license. Here is exactly what they must do,
        when they must do it, and what regulation requires it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Print this. Keep it next to your claim file. Every time a deadline passes without
        action, document it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Deadlines
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="text-left p-3 font-semibold">Deadline</th>
              <th className="text-left p-3 font-semibold">What They Must Do</th>
              <th className="text-left p-3 font-semibold">Regulation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="p-3 font-bold text-[#1F3964]">15 days</td>
              <td className="p-3">Acknowledge receipt of your claim in writing</td>
              <td className="p-3 text-gray-500">10 CCR &sect;2695.5(e)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-bold text-[#1F3964]">15 days</td>
              <td className="p-3">Begin investigation of the claim</td>
              <td className="p-3 text-gray-500">10 CCR &sect;2695.7(a)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 font-bold text-[#1F3964]">40 days</td>
              <td className="p-3">Accept or deny the claim (after receiving proof of claim)</td>
              <td className="p-3 text-gray-500">10 CCR &sect;2695.7(b)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-bold text-[#1F3964]">30 days</td>
              <td className="p-3">Pay undisputed amounts after agreement is reached</td>
              <td className="p-3 text-gray-500">10 CCR &sect;2695.7(h)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 font-bold text-[#1F3964]">Every 30 days</td>
              <td className="p-3">Provide written status update if claim remains open</td>
              <td className="p-3 text-gray-500">10 CCR &sect;2695.7(c)(1)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CalloutBox variant="legal" title="These Are Calendar Days">
        <p>
          All deadlines are calendar days, not business days. A 15-day deadline that starts
          on Monday expires two weeks from Tuesday — weekends and holidays count. If the
          deadline falls on a weekend or holiday, it extends to the next business day.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What They Must Do at Each Stage
      </h2>

      <h3 className="text-xl font-bold text-gray-900 mb-3">When You Report a Claim</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Acknowledge the claim within 15 days (in writing, or documented in the claim file).</li>
        <li>Provide you with claim number and adjuster contact information.</li>
        <li>Tell you what documentation they need from you.</li>
        <li>Begin investigating within 15 days.</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mb-3">During Investigation</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Conduct a reasonable and thorough investigation.</li>
        <li>Not deny a claim without first conducting an adequate investigation (10 CCR &sect;2695.7(d)).</li>
        <li>Not request documentation that is irrelevant to the claim.</li>
        <li>Provide written status updates every 30 days if investigation is ongoing.</li>
        <li>Complete the investigation and accept or deny within 40 days of receiving your proof of claim.</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mb-3">When They Make a Decision</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>If denied: provide a written denial citing the specific policy provision, statute, or factual basis (10 CCR &sect;2695.7(b)(1)).</li>
        <li>If partially denied: pay the undisputed portion immediately and explain in writing why the rest is disputed.</li>
        <li>If accepted: pay undisputed amounts within 30 days of agreement.</li>
        <li>Explain in writing how the payment amount was calculated (10 CCR &sect;2695.9).</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mb-3">When They Pay</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Provide itemized documentation showing how the amount was determined.</li>
        <li>Not condition payment on release of the entire claim if amounts remain in dispute.</li>
        <li>Not delay payment of undisputed amounts to pressure you on disputed amounts (Insurance Code &sect;790.03(h)(5); 10 CCR &sect;2695.7(h)).</li>
        <li>On replacement cost policies: pay ACV promptly, then pay the depreciation holdback after repairs are completed.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What They Are Prohibited From Doing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect;790.03 and 10 CCR &sect;2695, the insurer
        may not:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Misrepresent policy provisions to you.</li>
        <li>Fail to acknowledge and act promptly on your claim.</li>
        <li>Deny a claim without conducting a reasonable investigation.</li>
        <li>Offer substantially less than the reasonable value to force you into litigation.</li>
        <li>Delay payment to influence settlement of disputed amounts.</li>
        <li>Require unreasonable documentation demands not relevant to the claim.</li>
        <li>Force you to use their preferred contractor.</li>
        <li>Retaliate against you for hiring a Public Adjuster or attorney.</li>
        <li>Refuse to communicate with your authorized representative.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When They Violate a Deadline
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document it.</strong> Note the date the deadline expired and what action
          was due. Save any evidence (or absence of evidence — the letter that never came).
        </li>
        <li>
          <strong>Send a written reminder.</strong> Email the adjuster and their supervisor.
          Cite the specific regulation and the date it was violated. Request immediate
          compliance.
        </li>
        <li>
          <strong>If no response within 7 days:</strong> File a complaint with the California
          Department of Insurance (CDI). See{' '}
          <Link href="/resources/cdi-complaint" className="text-[#1F3964] underline font-medium">
            How to File a CDI Complaint
          </Link>.
        </li>
        <li>
          <strong>Keep a running log.</strong> Multiple violations create a pattern. A pattern
          of violations is evidence of{' '}
          <Link href="/resources/bad-faith" className="text-[#1F3964] underline font-medium">
            bad faith
          </Link>.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After a Declared Disaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a state or federal disaster declaration, additional requirements apply:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Minimum 24-month ALE period for state-of-emergency losses (Insurance Code &sect;2060(b)(1)).</li>
        <li>Cannot impose policy-deadline restrictions on collecting the depreciation holdback that are shorter than the statutory minimums in Insurance Code §2051.5 (12 months standard; 36 months for state-of-emergency losses, with 6-month extensions for good cause). Whether the insurer can also condition the holdback on a signed construction contract is policy-language specific — consult an attorney if your carrier insists on a contract you have not yet signed.</li>
        <li>Must offer a contents payment of at least 30% of the dwelling limit (up to $250,000) without requiring an itemized claim after a total loss from a state of emergency (Insurance Code &sect;10103.7).</li>
        <li>Must provide an advance payment of at least 4 months of living expenses upon request after a total loss (CDI Bulletin 2025-2).</li>
      </ul>

      <CalloutBox variant="tip" title="Keep This Somewhere Visible">
        <p>
          Print this page or save it to your phone. When the adjuster tells you something
          that contradicts these requirements, you can point to the exact regulation. You do
          not need to argue — just cite the rule. Adjusters who know you are tracking
          deadlines handle claims differently than adjusters who think you do not know the
          regulations exist.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
