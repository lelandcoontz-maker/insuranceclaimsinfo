import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Contractor Licensing and Insurance Claims: What Happens When Your Contractor Isn\'t Licensed',
  description:
    'Hiring an unlicensed contractor in California can destroy your insurance claim, expose you to liability, and cost you every dollar you paid. Learn the CSLB rules, contract requirements, and how to protect yourself.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. California contractor licensing law is complex, and the consequences of
          violations can be severe. Consult with a licensed attorney if you are involved in a
          dispute with an unlicensed contractor or if you are facing a licensing issue.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, contractor licensing is not optional. The Contractors State License Board
        (CSLB) regulates every person and business that performs construction work valued at $500
        or more in combined labor and materials. When you are rebuilding after an insurance loss,
        the contractor you choose matters enormously &mdash; not just for the quality of the work,
        but for your legal rights, your insurance claim, and your personal liability.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Contractors State License Board (CSLB)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CSLB is the state agency that licenses and regulates contractors in California. It
        operates under the Department of Consumer Affairs and is governed by Business and
        Professions Code &sect;7000 et seq. The CSLB issues licenses, investigates complaints,
        and disciplines contractors who violate the law. The California Attorney General acts as
        the prosecutor for CSLB enforcement actions, which means violations are taken seriously
        and can result in criminal prosecution, not just administrative penalties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are three main types of contractor licenses in California:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Class A &mdash; General Engineering Contractor:</strong> Infrastructure work
          such as roads, bridges, and utility systems
        </li>
        <li>
          <strong>Class B &mdash; General Building Contractor:</strong> The standard general
          contractor license for residential and commercial building construction and renovation
        </li>
        <li>
          <strong>Class C &mdash; Specialty Contractors:</strong> Specific trades such as
          C-10 (Electrical), C-20 (HVAC), C-33 (Painting), C-36 (Plumbing), C-39 (Roofing),
          and dozens of others
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For insurance restoration work, you will most commonly deal with Class B general
        contractors, who can perform or supervise multiple trades on a single project, or
        specialty contractors for targeted repairs like roofing or plumbing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business and Professions Code &sect;7031: No License, No Payment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most important statute in California contractor law, and every
        homeowner should understand it. Business and Professions Code &sect;7031 provides
        two absolute rules:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>An unlicensed contractor cannot sue for payment.</strong> If a contractor
          performs work without a valid license, they have no legal right to collect any
          compensation &mdash; not a single dollar. It does not matter if the work was
          excellent. It does not matter if the homeowner is thrilled with the result. The
          contractor simply cannot collect.
        </li>
        <li>
          <strong>The homeowner can recover all money already paid.</strong> Under &sect;7031(b),
          the person who paid an unlicensed contractor can bring an action to recover
          <em> all</em> compensation paid &mdash; the full amount, not just a portion. The
          contractor gets nothing.
        </li>
      </ol>

      <CalloutBox variant="important" title="This Rule Is Absolute">
        <p>
          The courts have made clear that &sect;7031 operates as a complete bar, regardless
          of the equities. In <em>Hydrotech Systems, Ltd. v. Oasis Waterpark</em> (1991),
          the California Supreme Court held that the licensing requirement is designed to
          protect the public and must be strictly enforced &mdash; even when the unlicensed
          contractor performed the work competently. In <em>MW Erectors, Inc. v. Niederhauser
          Ornamental and Metal Works Co.</em> (2005), the court reaffirmed that &sect;7031
          applies without exception. There is no &ldquo;substantial compliance&rdquo; defense,
          no &ldquo;the work was good&rdquo; defense, and no equitable exception. If the
          license was not valid at the time the work was performed, the contractor loses
          everything.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The practical consequences are enormous. If you hire a contractor for a $200,000
        insurance restoration project and they turn out to be unlicensed, you can recover
        every dollar you paid. The statute exists to protect consumers, and the courts
        enforce it without sympathy for the unlicensed party.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Workers&rsquo; Compensation: The Hidden License Killer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every contractor with employees is required to carry workers&rsquo; compensation
        insurance. This is not just a good idea &mdash; it is a legal requirement under
        California Labor Code &sect;3700. And here is the part that catches many people off
        guard: <strong>a contractor whose workers&rsquo; compensation insurance lapses or is
        cancelled has their license automatically suspended by operation of law.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that a contractor who had a perfectly valid license last month could be
        effectively unlicensed today if their workers&rsquo; comp policy was cancelled. There
        is no grace period. There is no notice requirement to the homeowner. The moment the
        WC coverage lapses, the license is suspended, and any work performed during that
        suspension is unlicensed work &mdash; triggering all of the consequences under
        &sect;7031.
      </p>

      <CalloutBox variant="warning" title="Homeowner Liability for Worker Injuries">
        <p>
          If you hire a contractor who does not carry workers&rsquo; compensation insurance
          and one of their workers is injured on your property, <strong>you could be held
          liable for those injuries.</strong> Under California Labor Code &sect;2750.5, a
          person who hires an unlicensed contractor is considered the employer of the
          contractor&rsquo;s workers for purposes of workers&rsquo; compensation. That means
          you &mdash; the homeowner &mdash; could be on the hook for medical bills, lost
          wages, and disability payments for a worker you never directly employed. This
          exposure can easily reach six figures.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Sole proprietors with no employees can file a WC exemption with the CSLB. But the
        exemption must be legitimate &mdash; if the contractor actually has employees
        despite the exemption, the consequences are the same as having no coverage at all.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three-Day Right of Rescission
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Business and Professions Code &sect;7159, every home improvement contract
        must include a notice informing the homeowner of their right to cancel the contract
        within three business days without any penalty or obligation. This is commonly
        referred to as the &ldquo;three-day right of rescission&rdquo; or the
        &ldquo;cooling-off period.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three-day period begins when the homeowner signs the contract. During this
        window, the homeowner can cancel for any reason &mdash; or no reason at all. The
        contractor must refund any payments within 10 days. This right exists because home
        improvement contracts are often signed under pressure &mdash; a contractor is
        standing in your living room, you just experienced a loss, and you feel urgency to
        get the work started. The three-day window gives you time to think, compare
        estimates, and verify the contractor&rsquo;s license.
      </p>

      <CalloutBox variant="tip" title="Missing Rescission Notice = Voidable Contract">
        <p>
          If the contract does not include the three-day rescission notice, the contract is
          voidable at the homeowner&rsquo;s option. This means the homeowner can cancel the
          contract at any time &mdash; not just within three days &mdash; because the
          required notice was never given. Contractors who skip this notice are handing
          homeowners an escape hatch that never expires.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Home Improvement Contract Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business and Professions Code &sect;7159 sets out detailed requirements for home
        improvement contracts. A contract that fails to comply with these requirements may
        be voidable, and the contractor may face CSLB discipline. Every home improvement
        contract must include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The total contract price in dollars and cents.</strong> The price must be
          a specific number. Vague language like &ldquo;insurance proceeds&rdquo; or
          &ldquo;whatever insurance pays&rdquo; does not satisfy this requirement.
        </li>
        <li>
          <strong>A clear description of the work</strong> to be performed, including
          materials to be used and a description of the scope.
        </li>
        <li>
          <strong>The contractor&rsquo;s license number</strong> printed on the contract.
        </li>
        <li>
          <strong>Approximate start and completion dates</strong> for the project.
        </li>
        <li>
          <strong>The three-day right of rescission notice</strong> in a form prescribed
          by statute.
        </li>
        <li>
          <strong>A payment schedule</strong> that complies with the deposit limitations
          (no more than $1,000 or 10% of the contract price, whichever is less, as the
          initial down payment).
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Insurance Proceeds&rdquo; Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In insurance restoration work, it is extremely common for contractors to write
        contracts that say the price is &ldquo;per insurance estimate&rdquo; or
        &ldquo;insurance proceeds&rdquo; or &ldquo;whatever insurance pays.&rdquo; This
        language is understandable from a practical standpoint &mdash; the insurance company
        has not finished adjusting the claim, the scope may change, and nobody knows the
        final number yet. On{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] hover:underline">
          mitigation contracts
        </Link>{' '}
        especially, the scope is genuinely unknown at the time of signing because emergency
        work needs to begin immediately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But &ldquo;insurance proceeds&rdquo; language is technically illegal under
        &sect;7159. The statute requires a specific dollar amount. More importantly, this
        language creates real problems:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Uncertainty:</strong> Neither party knows the actual contract price, which
          makes it impossible to evaluate whether the deal is fair.
        </li>
        <li>
          <strong>Shortfall risk:</strong> If the insurer pays less than the contractor
          expected, who eats the difference? The homeowner? The contractor? This is a
          recipe for a dispute.
        </li>
        <li>
          <strong>Overpayment risk:</strong> If the insurance proceeds exceed the actual
          cost of the work, the contractor may pocket the difference &mdash; money that
          should belong to the homeowner.
        </li>
        <li>
          <strong>Voidable contract:</strong> Because the contract does not comply with
          &sect;7159, the homeowner may have grounds to void it entirely.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The better approach is a detailed estimate with a specific dollar amount. If the
        scope changes, amend the contract with a written change order.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common CSLB Violations in Insurance Restoration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance restoration work attracts a disproportionate number of contractor
        violations because the money is large, the homeowners are stressed, and the work
        is often urgent. The most common violations include:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Working Without a License
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After every major disaster &mdash; wildfire, earthquake, flood &mdash; unlicensed
        individuals flood the affected area offering construction services. They may have
        business cards, a truck with a logo, and a convincing sales pitch, but no license.
        Working without a license is a misdemeanor in California (Business and Professions
        Code &sect;7028), punishable by fines and jail time. And as discussed above, the
        unlicensed contractor has no legal right to be paid. For more on recognizing these
        operators, see our article on{' '}
        <Link href="/resources/post-disaster-scams" className="text-[#2E74B5] hover:underline">
          post-disaster fraud and scams
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Contracting Beyond the Scope of the License
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A specialty contractor can only perform work within their licensed classification.
        A C-33 (Painting) contractor cannot do framing. A C-39 (Roofing) contractor
        cannot rewire your electrical panel. A C-36 (Plumbing) contractor cannot install
        your HVAC system. When a specialty contractor performs work outside their
        classification, they are considered unlicensed for that work &mdash; with all of
        the &sect;7031 consequences that entails. This is common in insurance restoration
        when a contractor tries to handle an entire project but only holds a specialty
        license.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Excessive Down Payments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law limits the initial down payment on a home improvement contract to
        <strong> $1,000 or 10% of the contract price, whichever is less</strong> (Business
        and Professions Code &sect;7159.5). Any contractor who asks for more than this is
        violating the law. After a disaster, it is especially common for contractors to
        demand large up-front payments &mdash; $10,000, $20,000, or more &mdash; claiming
        they need the money for materials. This is illegal, and it is one of the biggest
        red flags for{' '}
        <Link href="/resources/post-disaster-scams" className="text-[#2E74B5] hover:underline">
          contractor fraud
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Failing to Pull Permits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When{' '}
        <Link href="/resources/building-permits-claims" className="text-[#2E74B5] hover:underline">
          building permits
        </Link>{' '}
        are required, the contractor is generally responsible for pulling them. Contractors
        who skip permits are cutting corners, and the consequences fall on the homeowner:
        unpermitted work may not pass inspection, may not be covered by the contractor&rsquo;s
        bond, and may create problems when you sell the property or file a future insurance
        claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Abandoning the Job
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Job abandonment is both a CSLB violation and potentially a criminal offense. In the
        insurance restoration context, this often happens when the contractor collects a
        large payment, starts demolition or minimal work, and then disappears. The homeowner
        is left with a partially demolished home and a claim that has already been partially
        paid out.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Diversion of Funds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Diversion of funds occurs when a contractor takes money intended for your project
        and uses it on a different job or for personal expenses. Under Business and
        Professions Code &sect;7108, willful diversion is a cause for disciplinary action
        and can be prosecuted criminally. This is disturbingly common with contractors
        juggling multiple insurance restoration projects simultaneously.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        7. Working Without Workers&rsquo; Compensation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed above, contractors with employees must carry workers&rsquo;
        compensation insurance. Operating without it automatically suspends the
        contractor&rsquo;s license and exposes the homeowner to liability for worker
        injuries. This violation is particularly dangerous because it is invisible
        &mdash; the contractor&rsquo;s license may appear active on the CSLB website
        but the workers&rsquo; comp certificate may have lapsed. Always verify both
        the license <em>and</em> the workers&rsquo; comp status.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Check a Contractor&rsquo;s License
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CSLB provides a free online license lookup tool at{' '}
        <strong>www.cslb.ca.gov</strong>. You can search by the contractor&rsquo;s name,
        business name, or license number. Here is what to check:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>License status:</strong> Only &ldquo;active&rdquo; means currently licensed
        </li>
        <li>
          <strong>License classification:</strong> Does it match the work you need?
        </li>
        <li>
          <strong>Workers&rsquo; compensation status:</strong> Active WC coverage or a
          valid exemption on file
        </li>
        <li>
          <strong>Contractor&rsquo;s bond:</strong> Must maintain a $25,000 bond &mdash;
          confirm it is current
        </li>
        <li>
          <strong>Complaint history:</strong> Multiple complaints or disciplinary actions
          are a red flag
        </li>
        <li>
          <strong>Qualifying individual:</strong> If the person whose experience qualifies
          the license has left the company, the license may not be valid
        </li>
      </ul>

      <CalloutBox variant="tip" title="Verify Before You Sign">
        <p>
          Do not take the contractor&rsquo;s word for it. Do not accept a photocopy of a
          license. Go to the CSLB website and verify the license yourself before you sign
          anything. Check it again before work begins &mdash; a license can be suspended
          between the time you sign the contract and the time the contractor shows up to
          start work. You can also call the CSLB directly at (800) 321-CSLB (2752).
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Your Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Choosing an unlicensed or improperly licensed contractor does not just create
        problems with the contractor &mdash; it can create serious problems with your
        insurance claim, your mortgage lender, and your legal rights. Here is how:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Claim Complications
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          If the insurer issues payment and the contractor abandons the job, the insurer
          has already paid. Getting additional funds to hire a replacement contractor can
          be an uphill battle.
        </li>
        <li>
          Unpermitted or substandard work performed by an unlicensed contractor may not
          be accepted by the insurer&rsquo;s inspector, creating disputes about whether
          the repairs were properly completed.
        </li>
        <li>
          If you need to invoke your policy&rsquo;s{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law coverage
          </Link>{' '}
          for code upgrades, unpermitted work can complicate the code compliance process.
        </li>
        <li>
          The insurer may refuse to release the{' '}
          <Link href="/resources/deductibles-guide" className="text-[#2E74B5] hover:underline">
            recoverable depreciation
          </Link>{' '}
          holdback if the repairs were not performed by a licensed contractor.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mortgage Lender and Legal Issues
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a mortgage, your lender is typically named on the insurance claim check
        and generally requires licensed contractors and proper permits. An unlicensed
        contractor can cause the lender to refuse to endorse the check or withhold funds.
        Additionally, under California&rsquo;s{' '}
        <Link href="/resources/right-to-repair" className="text-[#2E74B5] hover:underline">
          Right to Repair Act
        </Link>{' '}
        (Civil Code &sect;895 et seq.), your legal remedies for construction defects are
        significantly more complicated &mdash; and in some cases impossible &mdash; when the
        work was performed by an unlicensed contractor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself: A Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you sign a contract with any contractor for insurance restoration work,
        take these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify the license</strong> on the CSLB website. Confirm it is active,
          the classification matches the work, and the bond is current.
        </li>
        <li>
          <strong>Verify workers&rsquo; compensation coverage.</strong> If the contractor
          has employees, confirm active WC insurance. If they claim an exemption, verify
          it is on file with the CSLB.
        </li>
        <li>
          <strong>Demand a written contract</strong> that complies with &sect;7159 &mdash;
          specific dollar amount, scope of work, start and completion dates, license
          number, and the three-day rescission notice.
        </li>
        <li>
          <strong>Refuse &ldquo;insurance proceeds&rdquo; pricing.</strong> Insist on a
          specific contract price. If the scope changes, handle it with written change
          orders.
        </li>
        <li>
          <strong>Never pay more than $1,000 or 10% down</strong> (whichever is less).
          Any contractor who demands more is violating the law.
        </li>
        <li>
          <strong>Confirm the contractor will pull all required{' '}
          <Link href="/resources/building-permits-claims" className="text-[#2E74B5] hover:underline">
            building permits
          </Link>.</strong> Get this commitment in writing.
        </li>
        <li>
          <strong>Check complaint history</strong> on the CSLB website and review online
          references.
        </li>
        <li>
          <strong>Do not let urgency override diligence.</strong> Even after a disaster,
          taking a few days to verify a contractor is better than spending months or years
          trying to recover from hiring the wrong one.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California contractor licensing laws exist to protect you. When you are rebuilding
        after an insurance loss, the stakes are too high to cut corners. An unlicensed
        contractor offers no legal protection, no bond, potentially no workers&rsquo;
        compensation coverage, and no accountability to the CSLB. Take the time to verify
        the license, read the contract, and understand your rights. The few hours you spend
        on due diligence could save you tens of thousands of dollars.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With Your Insurance Restoration Project?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can help you navigate the insurance claim process, review
          contractor estimates, and ensure your claim is handled properly from start to
          finish.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with
        a licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 italic mt-2">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
