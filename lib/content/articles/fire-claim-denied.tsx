import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Fire Damage Insurance Claim Denied? Here\'s What to Do',
  description:
    'What to do when your fire damage insurance claim is denied or underpaid — common denial reasons, your appeal rights, and how to challenge the denial under California law.',
  summary:
    'If your fire claim is denied or underpaid, read the denial reason, gather evidence that rebuts it, and appeal in writing, escalating to a CDI complaint or professional help. Many fire denials rest on contestable causation or exclusion arguments you can challenge.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s practical
          experience handling fire-claim denials as a Licensed California Public Adjuster. It
          is not legal advice. Fire-claim denials raise complex legal questions about coverage,
          causation, exclusions, and statutory limitations periods that depend on the specific
          facts of the loss and the actual policy language. For legal questions about a
          denied fire claim, consult a licensed California attorney experienced in insurance
          coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have lost your home or suffered major fire damage, and now the insurance company is
        denying your claim — or offering a fraction of what it will actually cost to rebuild. This
        is devastatingly common. Insurers deny or underpay fire claims for a range of reasons, some
        legitimate and many not. This guide covers the most common denial reasons, your rights under
        California law, and the concrete steps you can take to protect your rights.
      </p>

      <CalloutBox variant="warning" title="Time Is Critical">
        <p>
          Under the California standard fire policy (Insurance Code &sect; 2071), the
          baseline suit-limitation period is 12 months from the inception of the loss, but
          for <strong>residential property losses California has statutorily extended that
          period to 24 months</strong>. The clock is then equitably tolled (paused) during
          the carrier&rsquo;s active investigation and adjustment of the claim, per the
          California Supreme Court&rsquo;s decision in{' '}
          <em>Prudential-LMI Commercial Insurance v. Superior Court</em> (1990) 51 Cal.3d 674
          (see our{' '}
          <Link href="/resources/equitable-tolling" className="underline font-semibold">
            equitable tolling
          </Link>{' '}
          guide). The endpoint of tolling is fact-specific &mdash; California courts have
          looked to when the carrier&rsquo;s position becomes clear and final (a formal
          denial, an unequivocal repudiation, or the end of adjustment activity), and the
          precise endpoint in any particular claim depends on the file. The practical effect
          is that residential claims in active adjustment for many months or years often have
          an effective deadline considerably later than 24 months from inception &mdash; in
          some cases several years later. Other statutes and doctrines may also apply.
          Because the deadline involves complex legal questions about when the clock starts,
          when it may be tolled, and what your specific policy says, consult an attorney
          promptly to understand your deadline. Do not sit on a denial &mdash; act
          immediately.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Reasons Insurers Deny Fire Claims
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">1. Alleged Policy Lapse or Non-Payment</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer claims your policy was not in force at the time of the fire. This can happen
        due to a missed premium payment, a bank error, or (in some cases) an insurer processing
        error. California law treats different ways of ending a policy under different statutes,
        and the notice requirements are not the same.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For <strong>cancellation based on non-payment of premium</strong>, Insurance Code &sect;677.2
        requires the insurer to deliver or mail written notice of cancellation at least{' '}
        <strong>10 days</strong> before the effective date of the cancellation. The notice must
        state the effective date and the reason for cancellation. If the insurer is asserting that
        your policy was cancelled for non-payment, ask in writing for proof that the &sect;677.2
        10-day notice was actually delivered to you and that the timing met the statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For <strong>non-renewal</strong> (the insurer declines to offer a new policy when the
        current term ends, rather than terminating mid-term), Insurance Code &sect;678 requires
        at least 45 days&apos; written notice before policy expiration, or 75 days for residential
        property policies expiring on or after July 1, 2020. Non-renewal is a different mechanism
        from cancellation &mdash; if the insurer is treating a non-payment situation as a
        non-renewal, or vice versa, the wrong notice period may have been used.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If proper notice was not given under whichever statute actually applies, the cancellation
        or non-renewal may be invalid and your claim should be covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">2. Arson or Fraud Allegations</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer suspects the fire was intentionally set by the policyholder (or at their
        direction), they will deny the claim. The insurer bears the burden of proving arson by a
        preponderance of the evidence. However, insurers sometimes raise arson suspicions as a delay
        tactic or pressure tool even without solid evidence. They may also allege concealment or
        misrepresentation — claiming you hid or inflated information on your application or in your
        claim. If you are facing arson or fraud allegations, you need an attorney immediately.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">3. &ldquo;Vacancy&rdquo; Exclusion</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner and commercial property policies exclude coverage if the property has been
        vacant for more than 60 consecutive days. If you were away — renovating, traveling, or in
        between tenants — the insurer may invoke this exclusion. The definition of &ldquo;vacant&rdquo;
        varies by policy and case law. A property with furniture and personal belongings is generally
        not &ldquo;vacant&rdquo; even if no one is physically sleeping there.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">4. Failure to Comply With Duties After Loss</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to take certain steps after a loss: report promptly, protect the
        property from further damage, submit to examination under oath if requested, and provide a{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">proof of loss</Link>{' '}
        within 60 days if demanded. Failure to comply with these{' '}
        <Link href="/resources/duties-after-loss" className="text-[#2E74B5] hover:underline">duties after loss</Link>{' '}
        can be used as a basis for denial. However, under California law, the insurer must show it
        was actually prejudiced by any late notice or non-compliance — a minor delay alone is
        usually not sufficient.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">5. Coverage Disputes and Exclusions</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer claims the cause of loss is not covered. For example: the fire originated
        from an electrical malfunction that the insurer attributes to an excluded cause, or they
        argue the damage was pre-existing. In California, ambiguities in the policy are resolved
        in favor of the policyholder. See our guide on{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">coverage disputes</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">6. Underinsurance / Policy Limits</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not technically a &ldquo;denial&rdquo; — but it is the most common source
        of underpayment. The insurer pays up to your policy limit, but your limit is far below actual
        rebuild cost. If you have an extended replacement cost endorsement, you may be entitled to
        an additional 25–50% above your Coverage A limit, but you must actually begin rebuilding
        to access it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Steps to Fight a Fire Claim Denial
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get the denial in writing.</strong> California law requires insurers to provide
          a written denial that specifies the factual and legal basis for the denial, including the
          specific policy provisions being relied upon (10 CCR § 2695.7(b)(1)). If you received only
          a verbal denial, demand it in writing.
        </li>
        <li>
          <strong>Read your policy — the actual policy, not the summary.</strong> Obtain a complete
          copy of your policy (including all endorsements and amendments). California Insurance
          Code &sect; 2084 requires the insurer to provide a complete copy of the policy free of
          charge within 30 days of a request. (After a declared disaster, the request typically
          comes up because the insured&rsquo;s copy was destroyed.) Compare the denial reason to
          the actual policy language.
        </li>
        <li>
          <strong>Document everything.</strong> Keep a log of every communication — dates, times,
          who you spoke with, what was said. Follow up all phone calls with a written summary sent
          via email or certified mail.
        </li>
        <li>
          <strong>Get independent estimates.</strong> If the denial is based on the cause or extent
          of damage, hire your own experts — contractors, engineers, fire investigators. Do not rely
          solely on the insurer&apos;s experts, who work for the insurer.
        </li>
        <li>
          <strong>File a complaint with the CDI.</strong> The California Department of Insurance
          investigates complaints about unfair claim handling. A CDI complaint puts the insurer on
          notice and creates an official record. See our guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">filing a CDI complaint</Link>.
        </li>
        <li>
          <strong>Invoke the appraisal clause.</strong> If the dispute is about the <em>amount</em>{' '}
          of loss (not whether the loss is covered), most California policies contain an{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal provision</Link>{' '}
          that allows either party to demand an independent appraisal.
        </li>
        <li>
          <strong>Hire a Public Adjuster or attorney.</strong> A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>{' '}
          can handle the entire claims process and negotiate on your behalf. If the denial involves
          coverage questions, fraud allegations, or potential bad faith, an insurance coverage
          attorney may be appropriate.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Denial Becomes Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every denial is{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>.
        Insurers are entitled to investigate and to deny claims they have a reasonable basis to
        believe are not covered. But a denial becomes bad faith when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The insurer denies without conducting a thorough investigation</li>
        <li>The denial misrepresents the policy language</li>
        <li>The insurer ignores evidence supporting coverage</li>
        <li>The denial is based on a policy interpretation that no reasonable insurer would adopt</li>
        <li>The insurer fails to provide the specific reasons for the denial in writing</li>
        <li>The insurer uses the claim process to pressure you into accepting less than you are owed</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, bad faith can give rise to damages beyond your policy limits —
        including emotional distress and, in egregious cases, punitive damages.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Public Adjuster vs. Attorney: Who Do You Need?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on the nature of the dispute:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Public Adjuster:</strong> Best when the loss is covered but the insurer is
          underpaying, the scope is wrong, or you need help documenting and negotiating. PAs handle
          the day-to-day claims process and are paid on contingency.
        </li>
        <li>
          <strong>Attorney:</strong> Best when there is a coverage denial, arson/fraud
          allegation, policy rescission, or you are contemplating a bad faith lawsuit. Attorneys
          can litigate; PAs cannot.
        </li>
        <li>
          <strong>Both:</strong> In complex claims, a PA handles the claims documentation and
          negotiation while the attorney handles coverage disputes and legal strategy. This
          combination is common and effective.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Fire Claim Denied or Underpaid?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Do not accept a denial without a fight. Contact us for a free review of your denial
          letter and policy — we&apos;ll tell you honestly whether you have a case.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
