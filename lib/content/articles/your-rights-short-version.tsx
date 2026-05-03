import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Your Rights as a California Policyholder: The Short Version',
  description:
    'A plain-English summary of your most important rights under the California Fair Claims Settlement Practices Regulations — deadlines, payment rules, and what the insurer cannot do.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Insurance Company Must Do &mdash; and When
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has some of the strongest policyholder protections in the country. The Fair Claims
        Settlement Practices Regulations (Title 10, California Code of Regulations, Sections 2695.1
        through 2695.13) set specific rules for how insurance companies must handle your claim. These
        are not suggestions &mdash; they are legally enforceable obligations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is the short version. For the full regulation-by-regulation breakdown, see our{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          complete Fair Claims Settlement Practices guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Deadlines They Must Follow
      </h2>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead className="bg-[#1F3964] text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">What</th>
              <th className="px-4 py-3 text-left font-semibold">Deadline</th>
              <th className="px-4 py-3 text-left font-semibold">Regulation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">Acknowledge your claim</td>
              <td className="px-4 py-3 text-gray-900 font-medium">15 days</td>
              <td className="px-4 py-3 text-gray-500">&sect;2695.5(e)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">Begin investigation</td>
              <td className="px-4 py-3 text-gray-900 font-medium">15 days</td>
              <td className="px-4 py-3 text-gray-500">&sect;2695.7(a)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">Accept or deny your claim</td>
              <td className="px-4 py-3 text-gray-900 font-medium">40 days</td>
              <td className="px-4 py-3 text-gray-500">&sect;2695.7(b)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">Pay undisputed amounts after proof of claim</td>
              <td className="px-4 py-3 text-gray-900 font-medium">30 days</td>
              <td className="px-4 py-3 text-gray-500">&sect;2695.7(h)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">Respond to your communications</td>
              <td className="px-4 py-3 text-gray-900 font-medium">15 days</td>
              <td className="px-4 py-3 text-gray-500">&sect;2695.5(b)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">Provide written status if they need more time</td>
              <td className="px-4 py-3 text-gray-900 font-medium">Every 30 days</td>
              <td className="px-4 py-3 text-gray-500">&sect;2695.7(c)(1)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CalloutBox variant="tip" title="These Deadlines Are Measured From Receipt">
        <p>
          The 40-day accept/deny deadline runs from the date the insurer receives your proof of
          claim &mdash; not from the date of loss. A &ldquo;proof of claim&rdquo; is any
          documentation that supports your claim (estimates, invoices, proof of loss, photos). Once
          you provide enough information for the insurer to evaluate your claim, the clock starts.
          If you have submitted documentation and the insurer has not responded in 40 days, they are
          in violation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What They Cannot Do
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Cannot require you to use their contractor.</strong> You have the right to choose
          your own repair contractor. If you choose your own, the insurer must pay the reasonable
          cost of those repairs &mdash; or offer the three-option procedure under &sect;2695.9(d).
        </li>
        <li>
          <strong>Cannot condition payment on a release.</strong> The insurer cannot refuse to pay
          undisputed amounts unless you sign a release waiving your right to claim additional money
          later (&sect;2695.7(h)).
        </li>
        <li>
          <strong>Cannot pay less than their own estimate without explanation.</strong> If the
          insurer writes an estimate but then offers less than what their own estimate says, they
          must explain the difference in writing.
        </li>
        <li>
          <strong>Cannot ignore parts of your claim.</strong> Each element of your claim (structure,
          contents, ALE, debris removal, etc.) must be evaluated. The insurer cannot simply ignore
          components they find inconvenient.
        </li>
        <li>
          <strong>Cannot deny without a written explanation.</strong> Every denial or limitation must
          be in writing, must specify the policy language relied upon, and must state the factual
          basis (&sect;2695.7(b)(1)).
        </li>
        <li>
          <strong>Cannot force you to accept their valuation to get paid.</strong> If you disagree
          with the amount, you can demand{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>{' '}
          (a binding dispute resolution process in your policy). The insurer must still pay
          undisputed amounts while the disputed portion is being resolved.
        </li>
        <li>
          <strong>Cannot delay indefinitely by &ldquo;investigating.&rdquo;</strong> After 40 days,
          the insurer must accept, deny, or provide a written explanation of why more time is needed
          with a specific estimated completion date. An open-ended &ldquo;investigation&rdquo; that
          drags on for months without updates is a violation.
        </li>
        <li>
          <strong>Cannot lowball you based on software alone.</strong> The California Department of
          Insurance has admonished carriers not to rely blindly on computer database pricing
          (Xactimate) when actual market costs are higher. If your contractor&apos;s bid exceeds
          the insurer&apos;s Xactimate estimate, the insurer must address the discrepancy &mdash;
          not simply insist their number is correct.
        </li>
        <li>
          <strong>Cannot depreciate labor in California.</strong> Under &sect;2695.9(f)(1), the
          insurer cannot withhold depreciation on labor costs. Depreciation applies to materials
          (which physically wear out), not labor (which does not age). If your insurer deducted
          depreciation from labor line items, that is a violation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Are Entitled To
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Prompt payment of undisputed amounts.</strong> If the insurer agrees that $50,000
          of your $80,000 claim is owed, they must pay the $50,000 now &mdash; they cannot hold it
          hostage while disputing the remaining $30,000.
        </li>
        <li>
          <strong>Written explanations for everything.</strong> Denials, limitations, delays,
          valuation disputes &mdash; all must be documented in writing with specific policy and
          factual basis.
        </li>
        <li>
          <strong>The three-option repair procedure.</strong> When you choose your own contractor and
          their estimate exceeds the insurer&apos;s, the insurer must either: (1) pay your
          contractor&apos;s reasonable amount, (2) have the work done by their own contractor at no
          additional cost to you, or (3) if you haven&apos;t started repairs, pay based on a
          competitively bid estimate using comparable materials (&sect;2695.9(d)).
        </li>
        <li>
          <strong>Your choice of contractor.</strong> The insurer cannot require you to use their
          preferred vendor for repairs (though they can recommend one).
        </li>
        <li>
          <strong>Fair valuation of your loss.</strong> The insurer must use fair and reasonable
          methods to determine the value of your loss &mdash; not just the cheapest possible
          interpretation.
        </li>
        <li>
          <strong>A copy of your policy.</strong> If you ask for it, they must provide a complete
          copy of your policy within 15 days.
        </li>
        <li>
          <strong>The right to file a CDI complaint.</strong> If the insurer violates any of these
          rules, you can file a complaint with the California Department of Insurance. See our
          guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            filing a CDI complaint
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Prejudice Requirement &mdash; Your Safety Net
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides an important protection: the insurer generally cannot deny your claim
        for a technical policy violation (late notice, late proof of loss, missed deadline) unless
        they can prove your violation actually <strong>prejudiced</strong> them &mdash; meaning it
        caused them a real, material disadvantage in investigating or paying the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The burden of proving prejudice is on the <strong>insurer</strong>, not you. If they cannot
        show actual harm from your non-compliance, they cannot use it to deny your claim. See our
        detailed article on{' '}
        <Link href="/resources/duties-after-loss" className="text-blue-700 underline hover:text-blue-900">
          duties after loss
        </Link>{' '}
        for more on how this works.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When They Violate These Rules
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document every violation in writing.</strong> Send an email to the adjuster:
          &ldquo;It has been [X] days since I submitted [documentation]. Under 10 CCR
          &sect;2695.7(b), you were required to accept or deny my claim within 40 days. Please
          respond immediately.&rdquo;
        </li>
        <li>
          <strong>Keep a timeline.</strong> Note every date you submit documents, every date the
          insurer responds (or fails to respond), and every deadline they miss. This becomes your
          evidence.
        </li>
        <li>
          <strong>Cite the specific regulation.</strong> When you call out a violation, cite the
          section number. This tells the adjuster you know the rules and creates a written record
          that is hard to explain away later.
        </li>
        <li>
          <strong>File a CDI complaint.</strong> The California Department of Insurance investigates
          complaints about Fair Claims violations. A CDI complaint does not get you paid directly,
          but it creates regulatory pressure and a government record of the violation.
        </li>
        <li>
          <strong>Get professional help.</strong> If violations are piling up and the insurer is not
          responding, a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          can take over negotiations, or an attorney can evaluate whether the pattern rises to{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Violations Add Up">
        <p>
          A single missed deadline might be an oversight. A pattern of missed deadlines, ignored
          communications, unexplained denials, and lowball offers is not an oversight &mdash; it is
          a claims-handling strategy. Document everything. Each violation is a separate regulatory
          infraction that strengthens your position if the dispute reaches appraisal, CDI complaint,
          or litigation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Quick Reference: If Nothing Else, Remember These
      </h2>
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-5 mb-6">
        <ul className="space-y-2 text-gray-700">
          <li><strong>15 days</strong> &mdash; they must acknowledge your claim and respond to your
            communications</li>
          <li><strong>40 days</strong> &mdash; they must accept or deny after receiving your proof
            of claim</li>
          <li><strong>30 days</strong> &mdash; they must pay undisputed amounts</li>
          <li><strong>You choose your contractor</strong> &mdash; not them</li>
          <li><strong>No labor depreciation</strong> &mdash; in California, labor does not depreciate</li>
          <li><strong>No release required for payment</strong> &mdash; they cannot hold your money
            hostage</li>
          <li><strong>Everything in writing</strong> &mdash; denials, limitations, and delays must
            be documented</li>
          <li><strong>Undisputed = pay now</strong> &mdash; they cannot withhold agreed amounts while
            fighting over disputed ones</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a simplified summary of the California Fair Claims Settlement Practices Regulations.
        The full regulations contain additional provisions, exceptions, and details not covered here.
        For the complete regulation-by-regulation analysis, see our{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          full Fair Claims guide
        </Link>. This article is educational and does not constitute legal advice. If you are dealing
        with a specific claims dispute, consult with a licensed Public Adjuster or attorney in
        California.
      </p>
    </>
  )
}
