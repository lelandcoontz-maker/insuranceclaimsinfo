import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "What Your Insurance Company Is Required to Tell You — And What They Conveniently Forget",
  description:
    "California law imposes affirmative disclosure obligations on insurers — things they must proactively tell you about your claim. Most never do. Here is what they owe you and how to demand it.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you file an insurance claim, the adjuster&apos;s job is to evaluate the loss and
        determine what the carrier owes. But the adjuster also has another obligation &mdash;
        one that is frequently ignored. Under California law, insurers are required to
        <em> proactively inform you</em> about your rights, your coverages, and the benefits
        available to you under your policy. They do not get to sit back and hope you never
        ask.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a suggestion. It is a legal duty imposed by statute and regulation.
        When your adjuster fails to mention that you are entitled to temporary housing, or
        neglects to tell you that claim-related documents are available on request, or never
        explains that your policy includes an appraisal provision &mdash; that silence is
        not an oversight. It is a failure to comply with California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article catalogs the specific disclosure obligations California imposes on
        insurers &mdash; the things they are required to tell you and routinely do not.
      </p>

      {/* ── The 790 Letter ────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The 790 Letter: The Disclosure Letter Your Insurer Sends (or Should Send)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the claims industry, the &ldquo;790 letter&rdquo; refers to a written notice the
        insurance company is required to send to the insured at the outset of a claim in
        California. The name comes from California Insurance Code Section 790.03, which
        defines unfair claims settlement practices. The letter informs you of your basic
        consumer rights on the claim &mdash; including your right to claim-related documents,
        your right to a prompt investigation, applicable deadlines, and other protections
        under California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While insurers are required to send this letter, the quality varies significantly.
        Some are thorough. Others are boilerplate that checks a compliance box without
        meaningfully informing the policyholder of anything. If you received a 790 letter
        at the start of your claim, read it carefully &mdash; it may reference rights you
        did not know you had. If you did not receive one, that itself is a compliance
        failure. The obligations discussed below apply regardless of whether the insurer
        sent the letter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a discussion of how policyholders can send their <em>own</em> 790 letter to put
        the carrier on notice, see our article on{' '}
        <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
          Insurance Code 790.03 and the 790 letter
        </Link>.
      </p>

      {/* ── Obligation 1: Explain Policy Benefits ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        1. The Duty to Explain All Benefits Available Under the Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Code of Regulations Title 10, Section 2695.7(b)(2) requires that every
        insurer, upon receiving a claim, must provide the insured with &ldquo;all benefits,
        coverages, time limits or other provisions of any insurance policy issued by that
        insurer that may apply to the claim presented by the claimant.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that again: <strong>all benefits</strong> that <strong>may apply</strong>. The
        insurer is not permitted to evaluate only the coverage you specifically asked about.
        If your fire claim triggers Coverage A (dwelling), Coverage B (other structures),
        Coverage C (contents), Coverage D (loss of use), debris removal, ordinance or law,
        and any applicable endorsements, the adjuster is required to tell you about all of
        them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this obligation is routinely violated. Here are coverages that adjusters
        commonly &ldquo;forget&rdquo; to mention:
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-900 mb-3">Coverages Adjusters Frequently Fail to Mention</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Additional Living Expenses (ALE) / Loss of Use (Coverage D):</strong>{' '}
            One of the most commonly overlooked coverages. If your home is uninhabitable or
            under repair, you are entitled to temporary housing, meals above your normal cost,
            storage, pet boarding, additional commuting costs, and other expenses necessary to
            maintain your household. Adjusters sometimes fail to mention this entirely, or
            mention it only in the most limited terms. See our article on{' '}
            <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
              additional living expenses and fair rental value
            </Link>{' '}
            and{' '}
            <Link href="/resources/loss-of-use-maximizing" className="text-blue-700 underline hover:text-blue-900">
              maximizing your loss of use claim
            </Link>.
          </li>
          <li>
            <strong>Ordinance or Law Coverage:</strong>{' '}
            When repairs trigger building code upgrades, the additional cost is covered under
            most policies. Adjusters rarely volunteer this information, even when it is obvious
            that the home predates current codes. See{' '}
            <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
              ordinance or law coverage
            </Link>.
          </li>
          <li>
            <strong>Debris Removal:</strong>{' '}
            A separate coverage that applies to the dwelling, other structures, trees, and
            personal property. Often omitted from initial estimates entirely. See{' '}
            <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
              debris removal coverage
            </Link>.
          </li>
          <li>
            <strong>Replacement Cost Recovery (Recoverable Depreciation):</strong>{' '}
            The adjuster pays ACV upfront but may not explain that you can recover the
            withheld depreciation once repairs are completed. See{' '}
            <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
              ACV vs. RCV
            </Link>.
          </li>
          <li>
            <strong>Coverage B (Other Structures):</strong>{' '}
            Fences, detached garages, sheds, retaining walls, driveways, and pool equipment
            are covered under a separate limit that many policyholders never hear about.
          </li>
          <li>
            <strong>Appraisal Rights:</strong>{' '}
            If you disagree with the insurer&apos;s valuation, your policy almost certainly
            contains an appraisal provision &mdash; a binding process for resolving the
            dispute. Adjusters rarely mention it. See{' '}
            <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
              insurance appraisal in California
            </Link>.
          </li>
          <li>
            <strong>Endorsements:</strong>{' '}
            Many policyholders carry endorsements they do not know about &mdash; scheduled
            personal property, equipment breakdown, identity theft, water backup &mdash;
            because no one ever explained what their premium was paying for. See{' '}
            <Link href="/resources/endorsement-overrides-exclusions" className="text-blue-700 underline hover:text-blue-900">
              when endorsements override exclusions
            </Link>.
          </li>
        </ul>
      </div>

      <CalloutBox variant="important" title="This Is Not Optional">
        <p>
          The insurer&apos;s duty to explain all applicable benefits is not a courtesy. It is
          a regulatory obligation under 10 CCR &sect; 2695.7(b)(2). A failure to advise you
          of coverages that apply to your claim is a violation of the Fair Claims Settlement
          Practices Regulations &mdash; and it is evidence of bad faith. If your adjuster
          never mentioned a coverage that clearly applies, that silence should be documented
          and raised.
        </p>
      </CalloutBox>

      {/* ── Obligation 2: Claim-Related Documents ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        2. The Duty to Notify You That Claim-Related Documents Are Available
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 2071 &mdash; the standard form fire insurance
        policy &mdash; requires insurers to <strong>notify every claimant</strong> that
        claim-related documents are available upon request. This is an affirmative duty.
        The insurer must tell you. You should not have to discover this right on your own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The definition of claim-related documents is broad: repair and replacement estimates,
        bids, appraisals, scopes of loss, drawings, plans, reports by third parties, and all
        other valuation, measurement, and loss adjustment calculations. Once you make a
        written request, the insurer has 15 calendar days to produce copies. The narrow
        exemptions are attorney-client privilege, attorney work product, documents indicating
        fraud, and medically privileged information.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders never learn this right exists because the insurer never tells
        them &mdash; despite being required to. For the full discussion, see our article on{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-blue-700 underline hover:text-blue-900">
          your right to claim documents under California law
        </Link>.
      </p>

      {/* ── Obligation 3: Written Denial Basis ────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        3. The Duty to Provide a Written Explanation for Any Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer denies or limits a claim, it cannot simply say &ldquo;no.&rdquo;
        California Code of Regulations Title 10, Section 2695.7(b)(1) requires the insurer
        to provide a written explanation that includes &ldquo;all bases for such rejection
        or denial and the factual and legal bases for each reason given for such rejection
        or denial.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means the insurer must tell you:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>The specific policy language they are relying on</li>
        <li>The factual findings that support the denial</li>
        <li>Every reason for the denial &mdash; not just the primary one</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A verbal denial over the phone does not satisfy this obligation. A denial letter
        that cites a general exclusion without connecting it to the facts of your claim does
        not satisfy this obligation. The regulation requires specificity. If the denial
        letter is vague, conclusory, or incomplete, the denial itself may be deficient. See
        our article on{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith insurance practices in California
        </Link>.
      </p>

      {/* ── Obligation 4: Timelines ───────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        4. The Duty to Acknowledge Your Claim and Respond Within Deadlines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations impose specific time
        limits on every step of the claims process:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="p-3 text-left font-semibold">Obligation</th>
              <th className="p-3 text-left font-semibold">Deadline</th>
              <th className="p-3 text-left font-semibold">Regulation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Acknowledge receipt of claim</td>
              <td className="p-3 text-gray-700">15 calendar days</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.5(e)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Respond to communications</td>
              <td className="p-3 text-gray-700">15 calendar days</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.5(b)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Accept or deny claim after proof of claim</td>
              <td className="p-3 text-gray-700">40 calendar days</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(b)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Provide claim-related documents after request</td>
              <td className="p-3 text-gray-700">15 calendar days</td>
              <td className="p-3 text-gray-700">CIC &sect; 2071</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Pay undisputed portion of claim</td>
              <td className="p-3 text-gray-700">30 calendar days after agreement</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(h)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers are also required to notify you if they need more time to investigate,
        explaining why and providing an estimated completion date. They cannot simply go
        silent. For a complete timeline, see our article on{' '}
        <Link href="/resources/california-claim-deadlines" className="text-blue-700 underline hover:text-blue-900">
          California insurance claim deadlines
        </Link>.
      </p>

      {/* ── Obligation 5: Advance Payments ───���────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        5. The Duty to Make Advance Payments After a Declared Disaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a governor-declared disaster resulting in a total loss, California Insurance
        Code Section 2051.6 requires insurers to make advance payments to policyholders
        while the claim is being processed. These are not optional. The carrier must pay
        partial amounts toward dwelling, contents, and additional living expenses without
        waiting for a complete estimate, a full inventory, or final documentation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, SB 495 (Insurance Code &sect; 10103.7) requires insurers to pay at
        least 30% of the dwelling coverage limit toward personal property without requiring
        an itemized inventory during the first 100 days after a declared disaster. Many
        policyholders are never told this. They spend weeks or months trying to compile a
        complete contents inventory before seeing a dollar &mdash; when the law requires
        the carrier to pay up front. See our articles on{' '}
        <Link href="/resources/cdi-advance-payments" className="text-blue-700 underline hover:text-blue-900">
          advance payments after a wildfire
        </Link>{' '}
        and{' '}
        <Link href="/resources/sb49-contents-rule" className="text-blue-700 underline hover:text-blue-900">
          SB 495 and the contents payment rule
        </Link>.
      </p>

      {/* ── Obligation 6: ALE / Temporary Housing ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        6. The Duty to Advise You of Temporary Housing Benefits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D &mdash; Additional Living Expenses &mdash; is one of the most valuable
        coverages in a homeowner policy, and one of the most frequently left unexplained.
        When your home is uninhabitable due to a covered loss, the insurer owes the
        reasonable additional costs you incur to maintain your household while repairs are
        completed or while you find a new permanent residence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This includes temporary rental housing, hotel costs, increased meal expenses above
        your normal food budget, pet boarding, laundry, storage, additional commuting
        costs, and other reasonable expenses. After a declared disaster in California,
        insurers must provide at least 24 months of ALE coverage with a 12-month extension
        available for delays beyond the policyholder&apos;s control.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusters sometimes mention ALE in passing or authorize only a fraction of what the
        policyholder is entitled to. Some never mention it at all, particularly on claims
        where the home is partially damaged and the policyholder could arguably remain in
        the home during repairs but would be living in an active construction zone. Under
        the regulation&apos;s duty to explain all applicable benefits, the adjuster should
        be proactively informing you of this coverage. If they did not, that is a problem.
        See our article on{' '}
        <Link href="/resources/cdi-36-month-ale" className="text-blue-700 underline hover:text-blue-900">
          36-month ALE requirements in California
        </Link>.
      </p>

      {/* ── Obligation 7: Right to Choose Contractor ──────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        7. The Duty to Inform You of Your Right to Choose Your Own Contractor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer recommends or provides a list of contractors, California Code of
        Regulations Title 10, Section 2695.9(b) requires that the policyholder be informed
        in writing that they have the right to select their own contractor. The insurer
        cannot simply show up with a preferred vendor and create the impression that using
        their contractor is required.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 758.5 &mdash; the anti-steering statute &mdash;
        reinforces this by prohibiting insurers from requiring use of a specific repair
        facility or penalizing policyholders who choose someone else. The insurer must tell
        you that you have a choice. If they did not, and you ended up using their preferred
        vendor without knowing you had an alternative, the insurer failed its disclosure
        obligation. See our articles on{' '}
        <Link href="/resources/choosing-your-contractor" className="text-blue-700 underline hover:text-blue-900">
          choosing your own contractor
        </Link>{' '}
        and{' '}
        <Link href="/resources/preferred-vendor-problems" className="text-blue-700 underline hover:text-blue-900">
          preferred vendor problems
        </Link>.
      </p>

      {/* ── Obligation 8: Rebuild at Different Location ───────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        8. The Duty to Inform You of Your Right to Rebuild at a Different Location
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, California Insurance Code Section 2051.5(c) guarantees that
        policyholders may rebuild or purchase a replacement home at a different location
        without losing replacement cost benefits. Many policyholders assume &mdash;
        because no one tells them otherwise &mdash; that they must rebuild on the same lot
        to recover replacement cost. That is not the law in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer should be proactively informing total-loss policyholders of this right.
        For a policyholder deciding whether to rebuild in a high-risk area or relocate,
        this information is critical. A failure to disclose it could lead the policyholder
        to make decisions based on incomplete information. See our article on{' '}
        <Link href="/resources/cdi-rebuild-new-location" className="text-blue-700 underline hover:text-blue-900">
          rebuilding at a different location
        </Link>.
      </p>

      {/* ── Obligation 9: Statute of Limitations ──────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        9. The Duty Not to Mislead You About Deadlines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 790.03(h)(15) makes it an unfair claims practice
        to &ldquo;knowingly misrepresent to a claimant pertinent facts or policy provisions
        relating to coverages at issue,&rdquo; and Section 790.03(h)(14) prohibits
        &ldquo;directly advising a claimant not to obtain the services of an attorney.&rdquo;
        Telling a policyholder they have &ldquo;missed the deadline&rdquo; when equitable
        tolling applies, or implying that the one-year suit limitation has expired when the
        insurer never issued a formal denial, is the kind of misleading statement these
        provisions are designed to prevent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer has an obligation to be accurate about deadlines and time limits. If
        anything, the insurer should be advising policyholders of the time limits that
        apply &mdash; not weaponizing them after the fact. See our articles on{' '}
        <Link href="/resources/equitable-tolling" className="text-blue-700 underline hover:text-blue-900">
          equitable tolling
        </Link>{' '}
        and{' '}
        <Link href="/resources/california-claim-deadlines" className="text-blue-700 underline hover:text-blue-900">
          California claim deadlines
        </Link>.
      </p>

      {/* ── Obligation 10: CDI Complaint Right ────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        10. The Duty to Inform You of Your Right to File a CDI Complaint
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While this is not a specific regulatory requirement in every claim interaction,
        the California Department of Insurance expects policyholders to know they can file
        complaints &mdash; and the CDI has made clear that insurer conduct that discourages
        policyholders from exercising their rights is itself an unfair practice. At minimum,
        insurers should not be creating the impression that their determination is final
        and unreviewable. See our article on{' '}
        <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
          filing a CDI complaint
        </Link>.
      </p>

      {/* ── What to Do ────────────────────────────────────────────── */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          What to Do When Your Insurer Fails to Disclose
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your insurer failed to explain a coverage that applied to your claim, failed
          to notify you that claim documents were available, or failed to provide a complete
          written explanation for a denial, you have several options:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>
            <strong>Put the failure in writing.</strong> Send the adjuster an email or letter
            identifying the specific disclosure obligation they missed and citing the
            applicable regulation. This creates a record and often produces immediate results.
          </li>
          <li>
            <strong>Send a 790 letter.</strong> If the failure is part of a broader pattern
            of unreasonable conduct, a formal letter citing California Insurance Code
            &sect; 790.03 puts the carrier on notice that you are aware of your rights.
            See our article on{' '}
            <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
              the 790 letter
            </Link>.
          </li>
          <li>
            <strong>File a CDI complaint.</strong> The California Department of Insurance
            tracks complaints and investigates carriers with patterns of noncompliance.
            A complaint creates a regulatory record.
          </li>
          <li>
            <strong>Consult a professional.</strong> A licensed Public Adjuster or an
            insurance attorney can identify which coverages were overlooked and pursue
            the full value of your claim.
          </li>
        </ol>
      </div>

      {/* ── Summary Table ─────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Quick Reference: What They Must Tell You
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="p-3 text-left font-semibold">Disclosure Obligation</th>
              <th className="p-3 text-left font-semibold">Authority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">All benefits and coverages that may apply to your claim</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(b)(2)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Claim-related documents are available upon request</td>
              <td className="p-3 text-gray-700">CIC &sect; 2071</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Written explanation with all bases for any denial</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(b)(1)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Claim acknowledgment within 15 days</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.5(e)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Accept or deny within 40 days of proof of claim</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(b)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Advance payments after declared disaster</td>
              <td className="p-3 text-gray-700">CIC &sect; 2051.6</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">30% contents payment without inventory (declared disaster)</td>
              <td className="p-3 text-gray-700">CIC &sect; 10103.7 (SB 495)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Right to choose your own contractor</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.9(b); CIC &sect; 758.5</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Right to rebuild at a different location (total loss)</td>
              <td className="p-3 text-gray-700">CIC &sect; 2051.5(c)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Accurate information about deadlines and time limits</td>
              <td className="p-3 text-gray-700">CIC &sect; 790.03(h)(14)&ndash;(15)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/insurance-myths-debunked" className="text-blue-700 underline hover:text-blue-900">
            Insurance Myths Exposed: What Your Adjuster Won&apos;t Correct
          </Link>
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            California Fair Claims Settlement Practices Regulations
          </Link>
        </li>
        <li>
          <Link href="/resources/policyholder-rights" className="text-blue-700 underline hover:text-blue-900">
            Know Your Rights as a Policyholder
          </Link>
        </li>
        <li>
          <Link href="/resources/your-rights-short-version" className="text-blue-700 underline hover:text-blue-900">
            Your Rights: The Short Version
          </Link>
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Bad Faith Insurance Practices in California
          </Link>
        </li>
      </ul>
    </>
  )
}
