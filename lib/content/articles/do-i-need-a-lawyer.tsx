import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Do I Need a Lawyer for My Insurance Claim?',
  description:
    'A decision framework for California policyholders: when a public adjuster is enough, when you need an attorney, how fees work, and what to look for when hiring.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every insurance claim needs a lawyer. Some need a public adjuster. Some you can handle
        yourself. But some absolutely require legal representation — and the cost of getting that
        decision wrong can be enormous. This guide gives you a clear framework for deciding who to
        hire and when.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two Types of Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance claim dispute falls into one of two categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Amount disputes:</strong> The insurer agrees the loss is covered but disagrees
          about how much it should pay. The scope is too narrow. The price is too low. Depreciation
          is excessive. Overhead and profit are excluded. These are factual disagreements about
          money.
        </li>
        <li>
          <strong>Coverage disputes:</strong> The insurer says the loss is not covered at all — an
          exclusion applies, a condition was not met, the policy was not in force, or the cause of
          loss is not covered. These are legal disagreements about what the policy means.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The type of dispute determines who you need.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Public Adjuster Is Enough
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/what-public-adjuster-does" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        (PA) is a licensed professional who represents policyholders in insurance claims. PAs are
        experts in documenting damage, preparing estimates, reading policies, and negotiating with
        insurers. A PA is the right choice when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The insurer accepts coverage but the offer is too low</li>
        <li>You need help documenting the full scope of damage</li>
        <li>The claim is complex (large loss, multiple coverages, extensive contents)</li>
        <li>You do not have time to manage the claim yourself</li>
        <li>You need someone to prepare supplements and negotiate line items</li>
        <li>You want to invoke appraisal and need an experienced appraiser</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        PAs handle amount disputes. They cannot file lawsuits, cannot pursue bad faith damages, and
        cannot represent you in coverage disputes that require legal interpretation. But for what
        they do — maximizing the dollar recovery on a covered claim — they are often more effective
        than an attorney because claims negotiation is their entire focus.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When You Need an Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance attorney is necessary when the dispute goes beyond the dollar amount of damages.
        Hire an attorney when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage is denied:</strong> The insurer says the loss is not covered. This is a
          legal question that requires legal expertise to challenge.
        </li>
        <li>
          <strong>Bad faith is present:</strong> The insurer&apos;s conduct is unreasonable —
          extended delay, refusal to investigate, misrepresentation of the policy. An attorney can
          pursue{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>{' '}
          damages including emotional distress and punitive damages.
        </li>
        <li>
          <strong>You receive an EUO demand:</strong> An Examination Under Oath is a formal,
          sworn proceeding where the insurer&apos;s attorney asks you questions under penalty of
          perjury. Never attend an EUO without your own attorney.
        </li>
        <li>
          <strong>SIU is involved:</strong> The Special Investigations Unit investigates suspected
          fraud. If SIU contacts you, the insurer is considering whether your claim is fraudulent.
          You need legal protection immediately.
        </li>
        <li>
          <strong>The policy language is ambiguous:</strong> When the insurer and you disagree about
          what the policy means, this is a legal interpretation question that may require litigation
          to resolve.
        </li>
        <li>
          <strong>Statute of limitations is approaching:</strong> If the policy&apos;s suit
          limitation period is running out and the dispute is unresolved, only an attorney can
          protect your right to sue.
        </li>
        <li>
          <strong>The claim involves third-party liability:</strong> Subrogation disputes,
          contribution claims, or situations where your insurer is not defending you properly.
        </li>
      </ul>

      <CalloutBox variant="important" title="EUO and SIU — Do Not Go Alone">
        <p>
          An Examination Under Oath (EUO) is functionally a deposition. Anything you say can and will
          be used to deny your claim. An SIU referral means the insurer suspects fraud — even if
          your claim is entirely legitimate. In both situations, hire an attorney before responding.
          The cost of a mistake here is catastrophic.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Attorney Fees Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance attorneys handling policyholder claims work on contingency — they take a
        percentage of what they recover for you and charge nothing upfront. Typical contingency
        percentages range from 25 to 40 percent, depending on the stage of the case and complexity.
        Some attorneys offer a lower percentage if the case settles before litigation and a higher
        percentage if it goes to trial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means hiring an attorney costs you nothing out of pocket. If the attorney recovers
        $200,000 on a 33 percent contingency, they receive $66,000 and you receive $134,000. If they
        recover nothing, you owe nothing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Brandt Fees: The Insurer Pays Your Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, if you bring a successful bad faith claim, the insurer must pay your attorney
        fees incurred to recover the policy benefits that should have been paid in the first place.
        These are called &quot;Brandt fees&quot; (<em>Brandt v. Superior Court</em> (1985) 37 Cal.3d
        813). Brandt fees are recoverable as an element of damages — meaning the jury can award them
        on top of your policy benefits and other damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a powerful incentive structure: the worse the insurer&apos;s behavior, the more
        likely you are to recover your attorney fees from the insurer rather than paying them from
        your recovery. This is one reason why insurance bad faith attorneys are willing to take cases
        on contingency — there are multiple sources of recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The PA-to-Attorney Pipeline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claims start as amount disputes and evolve into coverage disputes or bad faith. Here is
        how it typically works:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>You hire a PA to negotiate the claim amount</li>
        <li>The PA documents the damage and submits a demand</li>
        <li>The insurer responds by raising a coverage defense it never mentioned before</li>
        <li>Or the insurer stops responding, delays unreasonably, or engages in other bad faith conduct</li>
        <li>The PA recognizes this has crossed from amount dispute into legal dispute</li>
        <li>The PA refers you to an attorney they work with regularly</li>
        <li>The attorney takes over the legal fight; the PA may continue handling the technical scope</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Good PAs know when a claim has exceeded their scope. They have relationships with insurance
        attorneys and can make warm referrals. This handoff is common and effective — you get the
        PA&apos;s technical expertise combined with the attorney&apos;s legal firepower.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Look For in an Insurance Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all attorneys handle insurance claims. Not all who do are good at it. Look for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Plaintiff-side only:</strong> You want an attorney who exclusively represents
          policyholders, not one who also defends insurance companies. The skills and mindset are
          different.
        </li>
        <li>
          <strong>California-specific experience:</strong> Insurance law is state-specific. California
          has unique statutes, regulations, and case law. Your attorney must know them.
        </li>
        <li>
          <strong>First-party experience:</strong> &quot;First-party&quot; means your own policy
          (as opposed to &quot;third-party&quot; liability claims). Make sure the attorney handles
          the type of dispute you have.
        </li>
        <li>
          <strong>Trial experience:</strong> An attorney who has actually tried insurance cases is
          more effective in negotiation. Insurers know which attorneys will actually go to court and
          which will settle cheap.
        </li>
        <li>
          <strong>Clear fee structure:</strong> Get the contingency percentage in writing before
          signing. Understand what expenses you may be responsible for (filing fees, expert costs)
          regardless of outcome.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Interview Questions for Your Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask these questions during your initial consultation:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Do you represent only policyholders, or do you also defend insurers?</li>
        <li>How many first-party property insurance cases have you handled in California?</li>
        <li>Have you tried cases to verdict, or do you primarily settle?</li>
        <li>What is your assessment of my claim — is this a coverage issue, bad faith, or both?</li>
        <li>What is your contingency percentage, and does it change based on stage of resolution?</li>
        <li>What costs am I responsible for if the case is unsuccessful?</li>
        <li>What is the realistic timeline for resolution?</li>
        <li>Will you personally handle my case, or will it be delegated to an associate?</li>
      </ol>

      <CalloutBox variant="tip" title="Get Multiple Consultations">
        <p>
          Talk to at least two or three attorneys before deciding. Initial consultations for insurance
          claims are almost always free. Different attorneys will have different assessments of your
          case strength, different strategies, and different fee structures. Choose the one whose
          approach and communication style you trust.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When You Can Handle It Yourself
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For small, straightforward claims — a broken window, a minor water leak, a stolen bicycle —
        you may not need professional help at all. If the insurer is paying promptly, communicating
        clearly, and the amount is close to what you expected, accept the payment and move on. Not
        every claim is a fight.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the moment you feel the insurer is not acting fairly — the moment the process stalls,
        the numbers do not add up, or the communication goes dark — get help. The cost of waiting
        too long is almost always higher than the cost of acting early.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Decision Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To summarize:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Amount dispute, covered claim:</strong> Public Adjuster</li>
        <li><strong>Coverage denial:</strong> Attorney</li>
        <li><strong>Bad faith conduct:</strong> Attorney</li>
        <li><strong>EUO or SIU:</strong> Attorney (immediately)</li>
        <li><strong>Amount dispute that becomes coverage dispute:</strong> PA first, attorney when it escalates</li>
        <li><strong>Small, straightforward, fairly handled claim:</strong> Handle it yourself</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        For more on what a public adjuster does, see our{' '}
        <Link href="/resources/what-public-adjuster-does" className="text-blue-700 underline hover:text-blue-900">
          public adjuster guide
        </Link>. For more on{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          the appraisal process
        </Link>{' '}
        that PAs often use to resolve amount disputes, see our detailed walkthrough.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        The right professional turns an unfair fight into a fair one. Insurance companies have
        adjusters, managers, engineers, attorneys, and unlimited resources working to minimize your
        payment. You deserve someone working just as hard to maximize it.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
