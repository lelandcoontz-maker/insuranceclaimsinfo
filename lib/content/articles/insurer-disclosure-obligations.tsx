import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "What Your Insurer Is Required to Tell You",
  description:
    "California law imposes affirmative disclosure obligations on insurers - things they must proactively tell you. Most never do. What they owe and how to ask.",
  summary:
    'California law requires insurers to proactively tell you certain things about your claim and your rights, but most never do. Knowing these affirmative disclosure duties lets you demand the information the carrier conveniently omits.',
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
        When you file an insurance claim, the adjuster&rsquo;s job is to evaluate the loss and
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
        insurers &mdash; the things they are required to tell you and routinely do not. Each
        section below identifies the legal authority, explains the practical reality, and
        provides direction on how to respond when the obligation is not met.
      </p>

      {/* ── The Core Regulation ────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Core Regulation: 10 CCR &sect; 2695.4(a) &mdash; The Affirmative Disclosure Duty
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Individual disclosure obligations all trace back to one regulation. California Code
        of Regulations, Title 10, Section 2695.4(a) states:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-6 py-2 mb-6 bg-slate-50 rounded-r-lg">
        <p className="text-gray-700 italic leading-relaxed">
          &ldquo;Every insurer shall disclose to a first party claimant or beneficiary, all
          benefits, coverage, time limits or other provisions of any insurance policy issued
          by that insurer that may apply to the claim presented by the claimant.&rdquo;
        </p>
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that carefully. The word is &ldquo;shall.&rdquo; Not &ldquo;may.&rdquo; Not
        &ldquo;should consider.&rdquo; The insurer <strong>shall disclose</strong>. And the
        scope is sweeping: <strong>all benefits, coverage, time limits or other provisions</strong>{' '}
        that <strong>may apply</strong>. The regulation does not say &ldquo;benefits the
        claimant specifically asked about.&rdquo; It says benefits that may apply to the claim.
        This is an affirmative, proactive duty. The burden is on the insurer to identify and
        communicate every applicable coverage &mdash; not on the policyholder to guess which
        coverages exist.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.4(a) continues with a second critical requirement: when additional
        benefits might reasonably be payable under the policy upon receipt of additional proofs
        of claim, the insurer must &ldquo;immediately communicate this fact to the insured and
        cooperate with and assist the insured in determining the extent of the insurer&rsquo;s
        additional liability.&rdquo; The insurer is not permitted to simply wait and see if
        the policyholder figures out that more coverage exists. If the insurer sees a potential
        for additional benefits, it must say so and must help.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This regulation is reinforced by California Insurance Code Section 790.03(h)(1),
        which defines it as an unfair claims settlement practice to misrepresent &ldquo;pertinent
        facts or insurance policy provisions relating to any coverages at issue.&rdquo; Silence
        about applicable coverages functions &mdash; many plaintiff attorneys argue &mdash; as a
        misrepresentation by omission. If the policy provides
        a benefit and the insurer never mentions it, the policyholder is left with a false
        understanding of what the policy covers. For a detailed discussion of Insurance Code
        Section 790.03, see our article on{' '}
        <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
          Insurance Code 790.03 and the 790 letter
        </Link>.
      </p>

      <CalloutBox variant="important" title="Why This Regulation Matters">
        <p>
          10 CCR &sect; 2695.4(a) transforms the claims process from a transaction where the
          policyholder must independently discover what they are owed into one where the insurer
          bears the affirmative burden of telling them. Each disclosure failure discussed in this
          article maps back to this regulation &mdash; and in a CDI complaint, this is the
          regulation to cite.
        </p>
      </CalloutBox>

      {/* ── The 790 Letter ────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The 790 Letter: The Disclosure Letter Your Insurer Sends (or Should Send)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the claims industry, the &ldquo;790 letter&rdquo; refers to the written notice
        insurers send to the insured at the outset of a claim in California &mdash; the
        acknowledgment package that 10 CCR &sect; 2695.5(e) requires within 15 days, typically
        accompanied by notices of the insured&apos;s consumer rights. The name comes from
        California Insurance Code Section 790.03, which
        defines unfair claims settlement practices. The letter informs the insured of basic
        consumer rights on the claim &mdash; including the right to claim-related documents,
        the right to a prompt investigation, applicable deadlines, and other protections
        under California law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The quality of these letters varies enormously.
        Some are thorough. Others are boilerplate that checks a compliance box without
        meaningfully informing the policyholder of anything useful. The letter may run several
        pages, printed in small type, and arrive alongside a stack of other claim paperwork
        during one of the most stressful periods of the policyholder&rsquo;s life. Even when
        the letter is sent, its contents may not be absorbed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A 790 letter received at the start of a claim is worth reading carefully &mdash;
        it may reference rights the insured did not know existed. If no acknowledgment ever
        arrived, that gap is itself worth noting in any CDI complaint: acknowledgment within
        15 days is a regulatory duty under &sect; 2695.5(e). The obligations discussed below
        apply regardless of whether the insurer sent the letter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a discussion of how policyholders can send their <em>own</em> 790 letter to put
        the carrier on notice, see our article on{' '}
        <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
          Insurance Code 790.03 and the 790 letter
        </Link>.
      </p>

      {/* ── The Gap ───────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Gap Between the Law and What Actually Happens
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulations are clear. The practice is not. Here is what typically happens
        when a policyholder files a claim in California:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster contacts the policyholder, takes a recorded statement or initial report,
        inspects the property, writes an estimate for the damage reported, and issues a payment
        based on that estimate. If the policyholder accepts the payment without question, the
        claim closes. The adjuster processes what was reported. Not what was available.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At no point in this process does the typical adjuster sit down with the policyholder
        and say: &ldquo;Here are all the coverages in your policy that apply to this loss. Let
        me walk you through each one.&rdquo; The adjuster does not hand the policyholder a list
        of every benefit that may be triggered. The adjuster does not mention coverages the
        policyholder did not ask about. The adjuster does not explain the difference between
        actual cash value and replacement cost, or mention that depreciation can be recovered,
        or point out that the policy includes debris removal coverage separate from the dwelling
        limit, or explain that ordinance or law coverage exists for code upgrades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not necessarily malicious on the part of the individual adjuster. Many
        adjusters are processing dozens or hundreds of claims simultaneously, particularly
        after catastrophe events. They may be independent adjusters brought in from out of
        state who are unfamiliar with California&rsquo;s specific regulatory requirements.
        Some genuinely may not know all the coverages available under the policy they are
        adjusting.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the regulation does not care about the adjuster&rsquo;s intent, workload, or
        knowledge gaps. The obligation is on the insurer &mdash; the company, not the
        individual &mdash; and the regulation states it without qualification. The insurer chose to issue the policy. The
        insurer collected the premium. The insurer has the duty to explain what the
        policyholder is paying for. Every coverage the adjuster does not mention is money
        the carrier does not pay, and the system, as designed, incentivizes that silence.
      </p>

      {/* ── Obligation 1: Explain All Policy Benefits ────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        1. The Duty to Explain All Benefits Available Under the Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.4(a), the insurer must disclose all benefits, coverages,
        time limits, and other policy provisions that may apply to the claim. This is not
        limited to the coverage the policyholder specifically reported. If you filed a fire
        claim, the insurer cannot address only dwelling damage and ignore the fact that your
        policy also provides for contents replacement, additional living expenses, debris
        removal, ordinance or law, other structures, and any applicable endorsements. All of
        those coverages &ldquo;may apply&rdquo; and must be disclosed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this obligation is routinely violated. The following are coverages that
        adjusters commonly fail to mention:
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-900 mb-3">
          Coverages Adjusters Frequently Fail to Mention
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Additional Living Expenses (ALE) / Loss of Use:</strong>{' '}
            One of the most commonly overlooked coverages. If your home is uninhabitable or
            under repair, you are entitled to temporary housing, meals above your normal cost,
            storage, pet boarding, additional commuting costs, and other expenses necessary to
            maintain your household. Adjusters sometimes fail to mention this entirely, or
            mention it only in the most limited terms. See our article on{' '}
            <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
              additional living expenses and fair rental value
            </Link>.
          </li>
          <li>
            <strong>Ordinance or Law Coverage:</strong>{' '}
            When repairs trigger building code upgrades, the additional cost is covered under
            most policies. Adjusters rarely volunteer this information, even when it is obvious
            that the home predates current building codes. The cost of bringing a 1960s home
            into compliance with modern codes can add tens of thousands of dollars to a claim.
            See{' '}
            <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
              ordinance or law coverage
            </Link>.
          </li>
          <li>
            <strong>Debris Removal:</strong>{' '}
            A separate coverage that provides an additional 5% of the dwelling limit when
            the cost of direct damage plus debris removal exceeds the dwelling limit. This is
            particularly significant in total loss and wildfire claims where debris removal
            costs can exceed $100,000. See{' '}
            <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
              debris removal coverage
            </Link>.
          </li>
          <li>
            <strong>Replacement Cost Recovery (Recoverable Depreciation):</strong>{' '}
            Under California Insurance Code &sect; 2051.5, the insurer initially pays actual
            cash value and withholds depreciation until repairs are completed. Many policyholders
            never learn they can recover the withheld depreciation, and many do not realize
            they have at least 12 months from the date of the first ACV payment to complete
            repairs and collect it, with extensions available for delays beyond their control.
            See{' '}
            <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
              ACV vs. RCV
            </Link>{' '}
            and{' '}
            <Link href="/resources/recoverable-depreciation-deadline" className="text-blue-700 underline hover:text-blue-900">
              recoverable depreciation deadlines
            </Link>.
          </li>
          <li>
            <strong>Other Structures:</strong>{' '}
            Fences, detached garages, sheds, retaining walls, driveways, patios, and pool
            equipment are covered under a separate limit &mdash; typically 10% of the dwelling limit
            &mdash; that many policyholders never hear about. In declared disasters, California
            Insurance Code &sect; 10103.7(a) allows policyholders to combine dwelling and Other
            Structures limits toward rebuilding the primary dwelling if the dwelling limits
            are insufficient.
          </li>
          <li>
            <strong>Appraisal Rights:</strong>{' '}
            If you disagree with the insurer&rsquo;s valuation, your policy almost certainly
            contains an appraisal provision &mdash; a binding process for resolving the dispute
            over the amount of loss. Adjusters rarely mention it. Most homeowners have never
            heard of insurance appraisal at all. See{' '}
            <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
              insurance appraisal in California
            </Link>.
          </li>
          <li>
            <strong>Endorsements and Additional Coverages:</strong>{' '}
            Many policyholders carry endorsements they do not know about &mdash; scheduled
            personal property, equipment breakdown, identity theft recovery, water backup,
            service line coverage &mdash; because no one ever explained what their premium was
            paying for. These endorsements are part of the policy. They are &ldquo;benefits
            &hellip; that may apply to the claim&rdquo; and must be disclosed. See{' '}
            <Link href="/resources/endorsement-overrides-exclusions" className="text-blue-700 underline hover:text-blue-900">
              when endorsements override exclusions
            </Link>.
          </li>
        </ul>
      </div>

      {/* ── Obligation 2: Claim-Related Documents ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        2. The Duty to Notify You That Claim-Related Documents Are Available
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 2071 requires insurers to notify every claimant
        that claim-related documents are available upon request. This is an affirmative duty.
        The insurer must tell you. You should not have to discover this right on your own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The definition of &ldquo;claim-related documents&rdquo; under Section 2071 is
        deliberately broad:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Repair and replacement estimates</li>
        <li>Bids obtained by the insurer</li>
        <li>Appraisals</li>
        <li>Scopes of loss</li>
        <li>Drawings and plans</li>
        <li>Reports by third parties (engineers, hygienists, cause-and-origin investigators)</li>
        <li>All valuation, measurement, and loss adjustment calculations</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you submit a written request, the insurer has <strong>15 calendar days</strong>{' '}
        to produce copies. The only exemptions are attorney-client privilege, attorney work
        product, documents indicating fraud by the insured, and medically privileged
        information.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also, Section 2071 entitles every policyholder to a complete, current copy of
        their policy &mdash; free of charge &mdash; within 30 calendar days of a written
        request after a covered loss. Even without a loss, policyholders are entitled to one
        free copy of their complete policy per year. If you have never seen the full text of
        your policy &mdash; only the declarations page and perhaps a summary &mdash; you have
        the right to obtain the entire contract.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders never learn these rights exist because the insurer never tells
        them, despite being required to. For the full discussion, see our article on{' '}
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
        <li>The applicable law or regulation, if the denial rests on a legal interpretation</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A verbal denial over the phone does not satisfy this obligation. A denial letter
        that cites a general exclusion without connecting it to the specific facts of your
        claim does not satisfy this obligation. A letter that states &ldquo;this loss is not
        covered under your policy&rdquo; without identifying the exclusion, the policy
        provision, and the factual basis is inadequate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation requires specificity because specificity enables the policyholder
        to respond. An insured who does not know <em>why</em> the claim was denied cannot
        effectively challenge the denial. A vague or conclusory denial letter is not just
        unhelpful &mdash; it may itself fall short of &sect; 2695.7(b)(1), and documenting
        that deficiency in writing often prompts the carrier to restate its position with the
        specificity the regulation requires &mdash; which is where weak denials start to
        unravel. See our articles on{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith insurance practices
        </Link>{' '}
        and{' '}
        <Link href="/resources/reading-insurer-letters" className="text-blue-700 underline hover:text-blue-900">
          reading insurer letters
        </Link>.
      </p>

      {/* ── Obligation 4: Timelines ───────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        4. The Duty to Acknowledge Your Claim and Respond Within Deadlines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations impose specific time
        limits on every step of the claims process. These are not guidelines. They are
        regulatory requirements:
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
              <td className="p-3 text-gray-700">Respond to communications from claimant</td>
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
              <td className="p-3 text-gray-700">Provide complete policy copy after request</td>
              <td className="p-3 text-gray-700">30 calendar days</td>
              <td className="p-3 text-gray-700">CIC &sect; 2071</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Pay undisputed portion of accepted claim</td>
              <td className="p-3 text-gray-700">30 calendar days after agreement</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(h)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Provide status update if more time needed</td>
              <td className="p-3 text-gray-700">Every 30 calendar days</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(c)(1)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer needs more time to investigate, it must notify you in writing,
        explain why, specify what additional information it needs, and provide that notice
        every 30 days until a determination is made. The insurer cannot simply go silent.
        Silence itself is a violation. For a complete timeline, see our article on{' '}
        <Link href="/resources/california-claim-deadlines" className="text-blue-700 underline hover:text-blue-900">
          California insurance claim deadlines
        </Link>.
      </p>

      {/* ── Obligation 5: Advance Payments ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        5. The Duty to Make Advance Payments After a Declared Disaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a governor-declared state of emergency resulting in a total loss of a primary
        dwelling, California law requires insurers to make advance payments to policyholders
        while the claim is being processed. These are not optional. They are not discretionary
        goodwill gestures. They are statutory requirements.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The 60% Contents Advance (Insurance Code &sect; 10103.7(b)(1))
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a furnished primary dwelling suffers a covered total loss in a declared
        emergency, the insurer must offer a payment under the contents (personal property)
        coverage in an amount no less than <strong>60% of the policy limit applicable to the
        personal property covered under the policy</strong>, up to a maximum of $350,000,
        without requiring the insured to file an itemized inventory. (These thresholds were
        raised from 30% / $250,000 to 60% / $350,000 by SB 495, Stats. 2025, ch. 542,
        effective January 1, 2026, with policy forms required to comply by July 1, 2026.)
        This provision exists because the Legislature recognized that policyholders who have
        lost everything cannot reasonably be expected to produce a room-by-room inventory
        before receiving any money for personal property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders are never told this. They spend weeks or months compiling a
        detailed contents inventory &mdash; a painful and time-consuming process after a
        total loss &mdash; before receiving a single dollar for personal property, when the
        law requires the carrier to pay up front. After receiving the advance, the
        policyholder may recover additional amounts up to the full policy limit by filing a
        detailed claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Four-Month ALE Advance (Insurance Code &sect; 2061)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a total loss results from a declared state of emergency, the insurer must,
        upon request, advance at least <strong>four months of additional living expenses</strong>.
        This advance is designed to provide immediate housing stability during the most
        disruptive period after a catastrophic loss. Policyholders should not have to submit
        hotel receipts one at a time and wait for reimbursement while they are sleeping in
        their car.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        See our articles on{' '}
        <Link href="/resources/cdi-advance-payments" className="text-blue-700 underline hover:text-blue-900">
          advance payments after a wildfire
        </Link>{' '}
        and{' '}
        <Link href="/resources/sb495-contents-rule" className="text-blue-700 underline hover:text-blue-900">
          the contents payment rule
        </Link>.
      </p>

      {/* ── Obligation 6: ALE / Temporary Housing ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        6. The Duty to Advise You of Temporary Housing Benefits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss of Use coverage &mdash; Additional Living Expenses &mdash; is one of the most valuable
        coverages in a homeowner policy, and one of the most frequently left unexplained.
        When your home is uninhabitable due to a covered loss, the insurer owes the
        reasonable additional costs you incur to maintain your household while repairs are
        completed or while you secure a new permanent residence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE covers a wide range of expenses that many policyholders never learn about:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Temporary rental housing comparable to the insured home</li>
        <li>Hotel costs during the initial displacement</li>
        <li>Increased meal expenses above the household&rsquo;s normal food budget</li>
        <li>Pet boarding and kenneling</li>
        <li>Laundry services</li>
        <li>Storage of salvaged personal property</li>
        <li>Additional commuting costs if the temporary residence is farther from work or school</li>
        <li>Moving expenses to and from temporary housing</li>
        <li>Other reasonable expenses necessary to maintain the household&rsquo;s normal standard of living</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Duration: The 24-Month / 36-Month Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code Section 2060, after a declared state of emergency,
        ALE coverage must extend for at least <strong>24 months</strong> from the inception of
        the loss. The insurer must grant an extension of up to 12 additional months &mdash;
        for a total of 36 months &mdash; if the policyholder, acting in good faith and with
        reasonable diligence, encounters delays beyond their control. These include
        unavoidable construction permit delays, lack of necessary construction materials, and
        unavailability of contractors. Additional six-month extensions must be granted for
        good cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusters sometimes mention ALE in passing or authorize only a fraction of what the
        policyholder is entitled to. Some never mention it at all, particularly on claims
        where the home is partially damaged and the policyholder could arguably remain during
        repairs &mdash; but would be living in an active construction zone with no kitchen,
        with dust and noise, or with safety hazards. Under the duty to explain all applicable
        benefits, the adjuster should be proactively explaining Loss of Use coverage and its
        full scope. When that conversation never happened, the insured has a documented
        &sect; 2695.4(a) issue to raise &mdash; and raising it often gets the benefit paid. See
        our articles on{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          additional living expenses and fair rental value
        </Link>{' '}
        and{' '}
        <Link href="/resources/cdi-36-month-ale" className="text-blue-700 underline hover:text-blue-900">
          36-month ALE requirements in California
        </Link>.
      </p>

      {/* ── Obligation 7: Right to Choose Contractor ──────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        7. The Duty to Inform You of Your Right to Choose Your Own Contractor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer recommends or suggests a contractor, 10 CCR &sect; 2695.9(b)
        requires that the policyholder be informed <strong>in writing</strong> that they
        have the right to select their own repair individual or entity. The insurer cannot
        simply show up with a preferred vendor and create the impression that using their
        contractor is required or that choosing a different contractor will result in a
        lower payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation goes further: if the policyholder accepts the insurer&rsquo;s
        recommended contractor, the insurer guarantees that the damaged property will be
        restored to no less than its pre-loss condition, repaired in a manner that meets
        accepted trade standards for good and workmanlike construction, at no additional
        cost to the policyholder beyond what the policy provides. This is the trade-off.
        When the insurer controls the repair, the insurer assumes the risk that the repair
        is done properly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On residential property claims, the controlling source for this protection is the
        Fair Claims Settlement Practices Regulations. 10 CCR &sect; 2695.9(b) prohibits an
        insurer from requiring the insured to have the property repaired by a specific
        entity, and &sect; 2695.9(c) limits an insurer&apos;s ability to suggest or recommend
        a particular repairer absent the claimant&apos;s express request or a written
        disclosure of the right to choose. (California Insurance Code Section 758.5 is the
        analogous anti-steering statute on the auto-insurance side; it applies to automotive
        repair dealers, not residential property contractors.) The insurer must tell the
        insured that there is a choice. If the insurer did not, and the insured ended up
        using a preferred vendor without knowing an alternative existed, the insurer may
        have failed its disclosure obligation. See our articles on{' '}
        <Link href="/resources/choosing-your-contractor" className="text-blue-700 underline hover:text-blue-900">
          choosing your own contractor
        </Link>{' '}
        and{' '}
        <Link href="/resources/preferred-vendor-problems" className="text-blue-700 underline hover:text-blue-900">
          preferred vendor problems
        </Link>.
      </p>

      {/* ── Obligation 8: Ordinance or Law ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        8. The Duty to Explain Ordinance or Law Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies include ordinance or law coverage &mdash; an endorsement or
        built-in provision that pays for the increased cost of construction required to
        bring a damaged home into compliance with current building codes. When you repair a
        home built in the 1970s, for example, current codes may require upgraded electrical
        panels, modern plumbing materials, energy-efficient windows, seismic reinforcement,
        and fire-resistant roofing. These upgrades are not part of the original dwelling
        estimate, but they are covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders do not know this coverage exists. Adjusters typically write
        estimates based on replacing what was damaged with like kind and quality, without
        accounting for code upgrades. The cost of compliance can add 10% to 30% or more
        to the total repair or rebuild cost. If the adjuster never mentions ordinance or law
        coverage, the policyholder may absorb those costs out of pocket &mdash; paying for
        something the policy already covers. See our article on{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>.
      </p>

      {/* ── Obligation 9: Debris Removal ──────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        9. The Duty to Explain Debris Removal Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard homeowners form, debris removal is included in the dwelling
        limit of liability. But here is the critical detail many policyholders miss: if the
        total of direct physical damage plus debris removal costs exceeds the dwelling limit
        limit, an additional 5% of the dwelling limit becomes available specifically for
        debris removal. In a total loss where the dwelling limit is $500,000, that is an
        additional $25,000 above the policy limit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After wildfires and other catastrophic losses, debris removal can be extraordinarily
        expensive &mdash; hazardous materials abatement, ash and soot removal, foundation
        demolition, tree clearing, and hauling can easily run $50,000 to $150,000 or more.
        If the insurer does not explain that additional debris removal coverage exists beyond
        the dwelling limit, the policyholder may not claim it. See our article on{' '}
        <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
          debris removal coverage
        </Link>.
      </p>

      {/* ── Obligation 10: RCV and Depreciation Holdback ─────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        10. The Duty to Explain Replacement Cost and the Depreciation Holdback
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code Section 2051.5, when a policy provides replacement
        cost coverage, the insurer initially pays actual cash value (replacement cost minus
        depreciation) and withholds the depreciation until the insured actually repairs,
        rebuilds, or replaces the damaged property. This withheld amount is called
        &ldquo;recoverable depreciation&rdquo; or the &ldquo;holdback.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer is required to explain this process. The policyholder needs to know:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>That the initial payment is only ACV, not the full replacement cost</li>
        <li>That additional money (the withheld depreciation) is available upon completion of repairs</li>
        <li>That there is a time limit to collect the holdback &mdash; no less than 12 months from the
            date of the first ACV payment, with extensions of six months available for delays
            beyond the policyholder&rsquo;s control</li>
        <li>That the policyholder may rebuild or replace at a different location without losing
            replacement cost benefits (Insurance Code &sect; 2051.5(c))</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders cash the ACV check, assume the claim is settled, and never realize
        there is more money available. Others complete repairs but miss the deadline because
        no one told them the clock was running. Both outcomes trace directly back to the
        insurer&rsquo;s disclosure obligation under 10 CCR &sect; 2695.4(a).
      </p>

      {/* ── Obligation 11: Rebuild at Different Location ─────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        11. The Duty to Inform You of Your Right to Rebuild at a Different Location
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, California Insurance Code Section 2051.5(c) guarantees that
        policyholders may rebuild or purchase a replacement home at a different location
        without losing replacement cost benefits. Many policyholders assume &mdash;
        because no one tells them otherwise &mdash; that they must rebuild on the same lot
        to recover replacement cost. That is not the law in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This right is particularly important after wildfire losses, where the original
        property may be in a high-risk area, local infrastructure may be destroyed, and
        rebuilding may take years. A policyholder who does not know they can relocate may
        make a decision to rebuild in a fire zone based on incomplete information &mdash;
        information the insurer was required to provide but did not. See our article on{' '}
        <Link href="/resources/cdi-rebuild-new-location" className="text-blue-700 underline hover:text-blue-900">
          rebuilding at a different location
        </Link>.
      </p>

      {/* ── Obligation 12: Appraisal Rights ──────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        12. The Duty to Inform You of Your Right to Appraisal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nearly every California homeowner policy contains an appraisal clause, derived from
        the standard fire policy under Insurance Code Section 2071. The appraisal provision
        allows either party &mdash; the insurer or the policyholder &mdash; to invoke a
        binding process to resolve disputes over the <em>amount</em> of the loss. Each side
        selects an independent appraiser. If the two appraisers cannot agree, they select
        a neutral umpire, and the decision of any two of the three is binding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Appraisal is one of the strongest tools available to a policyholder who believes
        the insurer&rsquo;s estimate is too low, and it is far less expensive and time-consuming
        than litigation. Yet most homeowners have never heard of it. Adjusters are not in
        the habit of telling policyholders: &ldquo;If you disagree with our number, you can
        invoke appraisal and get a binding determination from a neutral panel.&rdquo; Yet
        appraisal is a benefit of the policy that &ldquo;may apply to the claim&rdquo; &mdash;
        squarely within &sect; 2695.4(a)&apos;s disclosure language. See our article on{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          insurance appraisal in California
        </Link>.
      </p>

      {/* ── Obligation 13: Statute of Limitations ────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        13. The Duty Not to Mislead You About Deadlines and Time Limits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 790.03(h)(1) makes it an unfair claims practice
        to &ldquo;misrepresent pertinent facts or insurance policy provisions relating to
        any coverages at issue.&rdquo; Section 790.03(h)(14) specifically prohibits
        &ldquo;directly advising a claimant not to obtain the services of an attorney.&rdquo;
        Together, these provisions mean that the insurer cannot mislead you about the
        deadlines that apply to your claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Suit Limitation Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard fire policy (Insurance Code &sect; 2071), the suit limitation
        period is ordinarily 12 months from the inception of the loss. In losses related to
        a declared state of emergency, the period extends to 24 months. But here is the
        critical detail many policyholders are not told: under the California Supreme
        Court&rsquo;s decision in <em>Prudential-LMI Commercial Insurance v. Superior
        Court</em> (1990) 51 Cal.3d 674, the suit limitation period is equitably
        tolled &mdash; paused &mdash; from the time the insured gives notice of the loss
        to the insurer until the insurer formally denies the claim in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means the clock is not running while the insurer is investigating and processing
        your claim. If the insurer tells you &mdash; or implies &mdash; that you have
        &ldquo;missed the deadline&rdquo; when equitable tolling applies, or when the insurer
        has never issued a formal written denial, that is precisely the kind of misleading
        statement these statutory provisions are designed to prevent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the disclosure obligation of 10 CCR &sect; 2695.4(a), the insurer must disclose
        all &ldquo;time limits&rdquo; that apply to the claim. The suit limitation period is
        a time limit. The insurer should be advising you of applicable deadlines &mdash; not
        weaponizing them after the fact. See our articles on{' '}
        <Link href="/resources/equitable-tolling" className="text-blue-700 underline hover:text-blue-900">
          equitable tolling
        </Link>{' '}
        and{' '}
        <Link href="/resources/california-claim-deadlines" className="text-blue-700 underline hover:text-blue-900">
          California claim deadlines
        </Link>.
      </p>

      {/* ── Obligation 14: CDI Complaint ──────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        14. The Right to File a CDI Complaint
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every policyholder in California has the right to file a complaint with the
        California Department of Insurance (CDI). The CDI investigates complaints, audits
        insurer claim files, and can take enforcement action against carriers with patterns
        of noncompliance. A CDI complaint creates a regulatory record that follows the
        carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While there is no specific statutory provision requiring the insurer to tell you
        about your right to file a CDI complaint in every claim interaction, the CDI
        has made clear that insurer conduct which discourages policyholders from exercising
        their rights is itself an unfair practice under Insurance Code &sect; 790.03.
        At minimum, insurers should not create the impression that their determination
        is final and unreviewable. The adjuster&rsquo;s decision is not the last word.
        The insurer&rsquo;s offer is not a take-it-or-leave-it proposition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, no insurer is going to volunteer: &ldquo;By the way, if you think
        we&rsquo;re handling this unfairly, you can report us to the state regulator.&rdquo;
        But the insured can &mdash; and when the circumstances warrant it, the complaint is
        cheap, fast, and creates a record. CDI complaints are one
        of the most underutilized tools available to California policyholders. Complaints can
        be filed online at{' '}
        <a
          href="https://cdiapps.insurance.ca.gov/CP/create-complaint-page/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          insurance.ca.gov
        </a>{' '}
        or by calling 1-800-927-HELP (4357). See our article on{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-blue-700 underline hover:text-blue-900">
          filing a CDI complaint
        </Link>.
      </p>

      {/* ── Obligation 15: Duplicative Proofs ────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        15. The Prohibition on Requiring Duplicative Proofs of Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        10 CCR &sect; 2695.4(g) provides that no insurer shall require a first party
        claimant to submit duplicate proofs of claim where coverage may exist under more
        than one policy issued by that insurer. If you have both a homeowner policy and a
        separate scheduled personal property policy with the same carrier, the insurer
        cannot make you submit the same documentation twice. This is a small but meaningful
        protection that prevents the insurer from creating administrative obstacles to
        payment.
      </p>

      {/* ── Obligation 16: No Misleading Releases ────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        16. The Prohibition on Misleading Releases
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.4(f), no insurer shall issue checks or drafts in partial
        settlement that contain or are accompanied by language releasing the insurer from
        total liability unless the policy limit has been paid or there has been a compromise
        settlement agreed to by the claimant. This means your insurer cannot slip release
        language onto a partial payment check and then argue that you settled the entire
        claim by cashing it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders do not read the fine print on their claim checks. They do not
        notice that the check memo line or accompanying letter contains language that could
        be interpreted as a release. This is another area where the insurer&rsquo;s disclosure
        obligation is critical. For more on this issue, see our article on{' '}
        <Link href="/resources/cashing-insurance-checks" className="text-blue-700 underline hover:text-blue-900">
          cashing insurance checks
        </Link>{' '}
        and{' '}
        <Link href="/resources/release-trap-insurance-claims" className="text-blue-700 underline hover:text-blue-900">
          the release trap
        </Link>.
      </p>

      {/* ── Why This Happens ──────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Insurers Do Not Comply: The Practical Reality
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding why these obligations are routinely violated does not excuse the
        violations, but it does help explain the systemic nature of the problem.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Adjusters Are Trained to Process, Not to Educate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters &mdash; whether staff adjusters employed by the carrier or
        independent adjusters brought in during catastrophe events &mdash; are trained to
        process claims efficiently: inspect the loss, document the damage, write an estimate,
        issue a payment, close the file. Their performance metrics typically emphasize speed,
        file volume, and accuracy of estimates &mdash; not the thoroughness with which they
        explain the policyholder&rsquo;s rights. No adjuster has ever received a bonus for
        telling a policyholder about a coverage the policyholder did not ask about.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Silence Saves Money
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every coverage the adjuster does not mention is money the carrier does not pay.
        This is not necessarily a directive from management to hide coverages. It is a
        structural incentive. When the system rewards efficiency and cost containment, and
        when there is no internal accountability for disclosure failures, the predictable
        result is that disclosures do not happen. The system is designed in a way that produces
        consistent underpayment through omission.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Many Adjusters Genuinely Do Not Know
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In catastrophe situations, carriers deploy hundreds of independent adjusters who
        may be licensed in other states but unfamiliar with California&rsquo;s specific
        regulatory framework. These adjusters may not know about the 60% contents advance,
        the 24-month ALE minimum, the right to rebuild at a different location, or the
        anti-steering requirements. They may not have read 10 CCR &sect; 2695.4(a). They
        may not know that California imposes affirmative disclosure obligations that go
        beyond what is required in their home state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the regulation does not require the adjuster to know. It requires the
        <strong> insurer</strong> to disclose. The insurer chose to deploy that adjuster.
        The insurer is responsible for training, supervising, and ensuring compliance. The
        adjuster&rsquo;s ignorance is the insurer&rsquo;s failure, and the policyholder
        bears the cost.
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
            <strong>Read your entire policy.</strong> Do not rely on the adjuster&rsquo;s
            summary of your coverage. Read the declarations page, every coverage section,
            every endorsement, and every exclusion. Your policy is a contract, and the only
            way to know what you are owed is to read it. See our articles on{' '}
            <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
              understanding your declarations page
            </Link>{' '}
            and{' '}
            <Link href="/resources/policy-interpretation" className="text-blue-700 underline hover:text-blue-900">
              interpreting your insurance policy
            </Link>.
          </li>
          <li>
            <strong>Send a written request to identify all applicable coverages.</strong>{' '}
            Many policyholders send the adjuster an email or letter that says, in substance:
            &ldquo;Please
            identify all coverages, benefits, time limits, and other provisions of my policy
            that may apply to this claim, as required by 10 CCR &sect; 2695.4(a).&rdquo;
            This puts the insurer on notice that the policyholder knows the regulation exists
            and creates a documented record of the request. A response that never comes &mdash;
            or comes back incomplete &mdash; is itself evidence on the disclosure issue.
          </li>
          <li>
            <strong>Put the failure in writing.</strong> When a coverage surfaces that the
            adjuster never mentioned, a letter identifying the specific disclosure
            obligation and citing the applicable regulation creates a
            record &mdash; and often produces immediate results.
          </li>
          <li>
            <strong>Send a 790 letter.</strong> If the failure is part of a broader pattern
            of unreasonable conduct, a formal letter citing California Insurance Code
            &sect; 790.03 puts the carrier on notice that you are aware of your rights and
            prepared to escalate. See our article on{' '}
            <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
              the 790 letter
            </Link>.
          </li>
          <li>
            <strong>File a CDI complaint.</strong> The California Department of Insurance
            tracks complaints and investigates carriers with patterns of noncompliance.
            A complaint creates a regulatory record. When multiple policyholders file similar
            complaints about the same carrier, CDI may initiate a market conduct examination.
            File online at{' '}
            <a
              href="https://cdiapps.insurance.ca.gov/CP/create-complaint-page/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900"
            >
              insurance.ca.gov
            </a>{' '}
            or see our article on{' '}
            <Link href="/resources/file-cdi-complaint-guide" className="text-blue-700 underline hover:text-blue-900">
              filing a CDI complaint
            </Link>.
          </li>
          <li>
            <strong>Document the gap.</strong> Create a simple record: what coverages did the
            adjuster tell you about, and what coverages apply under the policy that were
            never mentioned? This gap analysis is powerful evidence if the claim escalates
            to litigation. It demonstrates a pattern of nondisclosure that goes beyond a
            single coverage oversight.
          </li>
          <li>
            <strong>Consult a professional.</strong> A licensed Public Adjuster or an
            insurance coverage attorney can review your policy, identify which coverages
            were overlooked, and pursue the full value of your claim. If the insurer&rsquo;s
            failure to disclose resulted in measurable harm &mdash; a missed
            deadline, a low payment accepted because a coverage was never mentioned &mdash;
            that is the kind of harm an attorney can evaluate for a potential bad faith claim.
          </li>
        </ol>
      </div>

      <CalloutBox variant="tip" title="The Written Request That Changes Everything">
        <p>
          In our experience, one of the most effective steps a policyholder can take is to send a written request
          to the adjuster asking them to identify <strong>all</strong> coverages, benefits,
          time limits, and provisions that apply to the claim, citing 10 CCR &sect; 2695.4(a).
          This forces the insurer to either comply &mdash; which means you learn about
          coverages you may not have known about &mdash; or refuse to comply, which creates
          evidence of a regulatory violation. Either outcome benefits the policyholder.
        </p>
      </CalloutBox>

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
              <td className="p-3 text-gray-700">All benefits, coverages, and time limits that may apply to your claim</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.4(a)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Additional benefits that may be payable upon additional proofs</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.4(a)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Claim-related documents are available upon request</td>
              <td className="p-3 text-gray-700">CIC &sect; 2071</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Complete policy copy available upon request</td>
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
              <td className="p-3 text-gray-700">Written notice every 30 days if more time needed</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.7(c)(1)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">60% contents advance without inventory (declared disaster, total loss), up to $350,000</td>
              <td className="p-3 text-gray-700">CIC &sect; 10103.7(b)(1)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Four-month ALE advance (declared disaster, total loss)</td>
              <td className="p-3 text-gray-700">CIC &sect; 2061</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">24-month minimum ALE coverage after declared disaster</td>
              <td className="p-3 text-gray-700">CIC &sect; 2060</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Right to choose your own contractor (written notice)</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.9(b)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Right to rebuild at a different location (total loss)</td>
              <td className="p-3 text-gray-700">CIC &sect; 2051.5(c)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Replacement cost holdback process and time limits</td>
              <td className="p-3 text-gray-700">CIC &sect; 2051.5</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Appraisal rights when there is a dispute over the amount of loss</td>
              <td className="p-3 text-gray-700">CIC &sect; 2071 (standard fire policy)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">Accurate information about deadlines and time limits</td>
              <td className="p-3 text-gray-700">CIC &sect; 790.03(h)(1); 10 CCR &sect; 2695.4(a)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">No duplicative proofs of claim required</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.4(g)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700">No release language on partial payment checks</td>
              <td className="p-3 text-gray-700">10 CCR &sect; 2695.4(f)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-white">
              <td className="p-3 text-gray-700">Combination of dwelling and Other Structures limits toward dwelling (declared disaster)</td>
              <td className="p-3 text-gray-700">CIC &sect; 10103.7</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── A Final Point ─────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        A Final Point: The Regulation Is the Floor, Not the Ceiling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything discussed in this article represents the <em>minimum</em> standard
        of conduct California requires. An insurer that discloses all applicable coverages,
        explains the holdback process, provides claim documents on request, meets every
        deadline, and treats the policyholder fairly is not doing anything exceptional. It
        is doing the bare minimum the law requires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fact that so many policyholders experience something so far below this minimum
        is not a reflection of ambiguous law. The law is clear. It is a reflection of
        inadequate enforcement and a claims culture that has drifted far from what the
        regulations demand. When you understand what the law requires, you can recognize
        the gap. And when you recognize the gap, you can hold the carrier accountable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholders who come out whole are the ones who read the policy, know the
        regulations, put requests in writing, and document
        everything. And when the insurer falls short of what California law requires, the
        tools are there &mdash; a written demand, a{' '}
        <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
          790 letter
        </Link>
        , a{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-blue-700 underline hover:text-blue-900">
          CDI complaint
        </Link>
        , a licensed professional, or an attorney &mdash; to close that gap.
      </p>

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            California Fair Claims Settlement Practices Regulations
          </Link>
        </li>
        <li>
          <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">
            Insurance Code 790.03 and the 790 Letter
          </Link>
        </li>
        <li>
          <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
            Additional Living Expenses and Fair Rental Value
          </Link>
        </li>
        <li>
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            Ordinance or Law Coverage
          </Link>
        </li>
        <li>
          <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
            Debris Removal Coverage
          </Link>
        </li>
        <li>
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            Insurance Appraisal in California
          </Link>
        </li>
        <li>
          <Link href="/resources/choosing-your-contractor" className="text-blue-700 underline hover:text-blue-900">
            Choosing Your Own Contractor
          </Link>
        </li>
        <li>
          <Link href="/resources/policyholder-rights" className="text-blue-700 underline hover:text-blue-900">
            Your Rights as a California Policyholder
          </Link>
        </li>
        <li>
          <Link href="/resources/insurer-obligations-cheat-sheet" className="text-blue-700 underline hover:text-blue-900">
            What Your Insurance Company Is Required to Do &mdash; The Cheat Sheet
          </Link>
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Bad Faith Insurance Practices in California
          </Link>
        </li>
        <li>
          <Link href="/resources/insurance-myths-debunked" className="text-blue-700 underline hover:text-blue-900">
            Insurance Myths Exposed: What Your Adjuster Won&rsquo;t Correct
          </Link>
        </li>
      </ul>

      <p className="text-sm text-gray-500 italic mt-12">
        Written by Leland Coontz III, Licensed Public Adjuster (CA License #2B53445).
        This article is for educational purposes only and does not constitute legal advice.
        Last updated May 2026.
      </p>
    </>
  )
}
