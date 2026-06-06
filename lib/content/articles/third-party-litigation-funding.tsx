import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Third-Party Litigation Funding: What Policyholders Should Know Before Suing Their Insurer',
  description:
    'How third-party litigation funding works in insurance disputes, who qualifies, the costs involved, recent legislation like the NY Consumer Litigation Funding Act, and when it makes sense for policyholders facing well-funded insurers.',
  summary:
    'Third-party litigation funding lets a financier cover the cost of suing your insurer in exchange for a share of any recovery. It can level the field against a well-funded carrier, but understand the costs, eligibility, and evolving regulation before using it.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a lawsuit against an insurance company is expensive. Depositions, expert
        witnesses, document review, court reporters, filing fees &mdash; the costs add up
        quickly, and the insurance company knows it. Carriers have entire legal departments,
        panels of outside defense firms, and functionally unlimited litigation budgets. The
        policyholder, meanwhile, is already financially strained &mdash; because the insurer
        has denied or underpaid the very claim that was supposed to make them whole. This
        asymmetry is not accidental. It is a feature of the system that benefits insurers,
        and it is the reason many legitimate claims are never litigated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third-party litigation funding &mdash; sometimes called legal funding, lawsuit
        lending, or litigation finance &mdash; is a mechanism that addresses this imbalance.
        A third-party funder provides capital to a plaintiff (or the plaintiff&rsquo;s law
        firm) to cover the costs of pursuing a lawsuit. In exchange, the funder receives a
        portion of any recovery. If the case is lost, the policyholder typically owes
        nothing. For policyholders facing{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith insurance practices
        </Link>{' '}
        and lacking the resources to fight back, litigation funding can be the difference
        between accepting a lowball settlement and pursuing the full value of a claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Third-Party Litigation Funding Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The basic structure of litigation funding is straightforward. A policyholder (or
        their attorney) applies to a litigation funding company. The funder evaluates the
        merits of the case &mdash; the strength of the legal claims, the likely damages,
        the defendant&rsquo;s ability to pay, and the expected timeline. If the funder
        determines that the case has sufficient merit and potential recovery, it offers to
        advance capital in exchange for a contractually defined share of any settlement or
        verdict.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two primary models. In the first, the funder provides money directly to
        the plaintiff for living expenses and personal needs while the case is pending. This
        is sometimes called &ldquo;consumer litigation funding&rdquo; or &ldquo;pre-settlement
        funding.&rdquo; In the second model, the funder provides capital directly to the law
        firm to cover case costs &mdash; expert fees, deposition expenses, court filing fees,
        and the other expenses of prosecuting the case. This is sometimes called
        &ldquo;commercial litigation funding&rdquo; or &ldquo;portfolio funding&rdquo; when
        applied across multiple cases.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In both models, the defining feature is that the funding is non-recourse. If the
        case is lost &mdash; if the policyholder recovers nothing &mdash; the funder
        typically receives nothing, and the policyholder does not owe the money back. The
        funder bears the risk of loss. This is what distinguishes litigation funding from a
        traditional loan: there is no obligation to repay if the case does not succeed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Scale of the Litigation Funding Industry
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Litigation funding is no longer a niche product. The global litigation finance market
        was projected to reach $18.9 billion in 2025 and is expected to exceed $67 billion by
        2037. Major institutional funders now include publicly traded companies, hedge funds,
        and private equity firms. The growth of the industry reflects a simple economic
        reality: there is enormous unmet demand from plaintiffs who have meritorious claims
        but lack the resources to pursue them against well-capitalized defendants &mdash;
        and insurance companies are among the most well-capitalized defendants in existence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For insurance disputes specifically, litigation funding has become increasingly
        relevant as claim denials and underpayments have grown more aggressive. When an
        insurer knows that a policyholder cannot afford to litigate, it has every incentive
        to lowball the claim or deny it outright. Litigation funding removes that leverage.
        A funded policyholder can retain top-tier counsel, hire the best experts, and pursue
        the case through trial if necessary &mdash; and the insurer knows it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Funders Evaluate Insurance Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every insurance claim will attract litigation funding. Funders are investors,
        and they evaluate cases the way any investor evaluates an opportunity: by assessing
        the risk-adjusted return. For an insurance dispute, a funder will typically consider:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Claim strength:</strong> Is there clear evidence that the insurer breached
          the policy or acted in{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith
          </Link>? The stronger the documentation, the more attractive the case is to a
          funder.
        </li>
        <li>
          <strong>Potential recovery:</strong> Is the claim large enough to justify the
          funder&rsquo;s involvement after accounting for the funder&rsquo;s share, attorney
          fees, and costs? Funders generally look for cases with potential recoveries
          significantly above the expected litigation costs.
        </li>
        <li>
          <strong>Insurer solvency:</strong> Can the insurance company pay a judgment?
          For most standard carriers, solvency is not an issue, which makes insurance
          disputes attractive to funders compared to cases against undercapitalized defendants.
        </li>
        <li>
          <strong>Timeline:</strong> How long will the case take? Funders prefer cases that
          will resolve within a reasonable timeframe, because their return is affected by how
          long their capital is deployed.
        </li>
        <li>
          <strong>Jurisdiction:</strong> Some jurisdictions are more favorable to
          policyholders than others. A{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith
          </Link>{' '}
          claim in California, where extracontractual damages and attorney fees are
          available, will be more attractive to a funder than the same claim in a state
          with more limited remedies.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Recent Legislation and Regulatory Developments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rapid growth of litigation funding has drawn significant legislative attention.
        Several states have enacted or proposed laws regulating the industry, and the
        insurance industry itself has pushed aggressively for disclosure requirements and
        restrictions. Policyholders should understand the current regulatory landscape
        because it directly affects how &mdash; and whether &mdash; they can access funding.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        New York Consumer Litigation Funding Act (December 2025)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        New York signed the Consumer Litigation Funding Act into law in December 2025. The
        Act imposes registration requirements on litigation funding companies, caps fees and
        charges, requires clear written disclosures to consumers about the terms of the
        funding agreement, and establishes a right of rescission. The law is designed to
        protect consumers who may not fully understand the cost of funding or the portion
        of their recovery that will go to the funder. For policyholders in New York
        considering litigation funding, this law provides a meaningful layer of consumer
        protection that did not previously exist.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Georgia SB 69: Financier Registration
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Georgia enacted SB 69, which requires litigation funding companies to register with
        the state and comply with disclosure requirements. The law establishes oversight of
        the industry while preserving access to funding for plaintiffs who need it. This
        type of registration-based approach &mdash; rather than an outright ban &mdash;
        reflects the growing consensus that litigation funding serves a legitimate purpose
        but requires regulatory guardrails.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        ISO Litigation Funding Disclosure Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Insurance Services Office (ISO) has introduced a litigation funding disclosure
        endorsement that can be attached to insurance policies. This endorsement requires
        policyholders to disclose whether they have obtained litigation funding as a
        condition of coverage or claims handling. The insurance industry&rsquo;s interest in
        these endorsements is transparent: insurers want to know when a policyholder has
        the financial backing to litigate, because it changes the insurer&rsquo;s
        risk calculus. Policyholders should review their policies carefully for any such
        endorsement and understand its implications before entering into a funding
        arrangement.
      </p>

      <CalloutBox variant="warning" title="Disclosure Requirements May Affect Strategy">
        <p>
          Some policies now include endorsements or conditions requiring disclosure of
          third-party litigation funding arrangements. Before signing any funding agreement,
          a policyholder should have their attorney review the policy for disclosure
          requirements. Failure to disclose could theoretically give the insurer an argument
          that the policyholder violated a policy condition &mdash; and disclosing could
          alter the insurer&rsquo;s litigation strategy. This is a decision that should be
          made with legal counsel, not unilaterally.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Advantages of Litigation Funding for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders facing a well-funded insurance company, litigation funding offers
        several significant advantages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Access to justice:</strong> The most fundamental advantage is that it
          allows policyholders who cannot afford litigation costs to pursue claims they
          would otherwise have to abandon. A policyholder whose home was destroyed and
          whose claim was denied may not have the resources to pay for expert witnesses
          and depositions &mdash; litigation funding makes the case possible.
        </li>
        <li>
          <strong>Leveling the playing field:</strong> Insurance companies routinely use
          their financial advantage to outlast policyholders. They file motions, take
          depositions, retain multiple experts, and drag out proceedings knowing that the
          policyholder is under financial pressure to settle cheaply. A funded policyholder
          can match the insurer&rsquo;s litigation resources.
        </li>
        <li>
          <strong>No risk of repayment if the case is lost:</strong> Because funding is
          non-recourse, the policyholder does not face the risk of owing money if the case
          is unsuccessful. The funder absorbs the loss.
        </li>
        <li>
          <strong>Better settlement leverage:</strong> When an insurer knows that a
          policyholder has funding and will not be forced to settle early out of financial
          desperation, the insurer is more likely to negotiate seriously and offer fair value.
        </li>
        <li>
          <strong>Ability to hire top counsel:</strong> Some attorneys will only take cases
          on a contingency basis if the costs are covered. Litigation funding can attract
          attorneys who would otherwise decline the case due to the cost burden.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Disadvantages and Risks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Litigation funding has costs and risks. A policyholder considering this
        option should weigh the following carefully:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Substantial cost:</strong> The funder takes a significant portion of any
          recovery. Depending on the terms and the duration of the case, the funder&rsquo;s
          share can be substantial. After the funder&rsquo;s cut, the attorney&rsquo;s
          contingency fee, and litigation costs, the policyholder&rsquo;s net recovery may
          be considerably less than the gross settlement or verdict amount.
        </li>
        <li>
          <strong>Potential influence on litigation strategy:</strong> While ethical rules
          generally prohibit funders from controlling litigation decisions, the practical
          reality is more nuanced. A funder with a significant financial interest in the
          outcome may have opinions about settlement timing, case strategy, and which claims
          to pursue. The policyholder&rsquo;s attorney has an ethical duty to the client, not
          the funder &mdash; but the dynamic can create tension.
        </li>
        <li>
          <strong>Disclosure risks:</strong> As noted above, some policies and jurisdictions
          require disclosure of funding arrangements. Disclosure alerts the insurer that the
          policyholder has resources to litigate, which can be a double-edged sword &mdash;
          it may lead to better settlement offers, or it may cause the insurer to litigate
          more aggressively.
        </li>
        <li>
          <strong>Selective case acceptance:</strong> Funders only accept cases they believe
          they will profit from. This means that smaller claims, claims with uncertain
          liability, or claims in less favorable jurisdictions may not attract funding even
          if they are meritorious.
        </li>
        <li>
          <strong>Complexity of funding agreements:</strong> Funding agreements can be
          complex financial instruments with terms that are not always intuitive. The
          effective cost of funding can be difficult to calculate without careful analysis.
          A policyholder should never sign a funding agreement without having their attorney
          review it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Litigation Funding Makes Sense for Insurance Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every insurance dispute is a good candidate for litigation funding. The cases
        where funding makes the most sense share certain characteristics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Large bad faith claims with strong evidence:</strong> A{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith claim
          </Link>{' '}
          with clear documentation of unreasonable conduct &mdash; internal adjuster notes,
          lowball offers well below proven damages, repeated{' '}
          <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
            delay tactics
          </Link>{' '}
          &mdash; is exactly the type of case funders are looking for. The potential for
          extracontractual damages and punitive damages in bad faith cases makes the expected
          recovery attractive.
        </li>
        <li>
          <strong>Total loss disputes with clear underpayment:</strong> When an insurer has
          denied or significantly underpaid a total loss claim and the policyholder has
          strong evidence of the actual loss value, the gap between what was paid and what
          is owed creates the recovery potential that funders need to justify their
          investment.
        </li>
        <li>
          <strong>Cases where the policyholder cannot afford to wait:</strong> If a
          policyholder needs funds for living expenses, temporary housing, or other
          necessities while the case is pending, consumer litigation funding can provide a
          financial bridge.
        </li>
        <li>
          <strong>Cases where litigation costs are prohibitive:</strong> Some insurance
          disputes require expensive experts &mdash; forensic engineers, building
          consultants, financial analysts. If the cost of proving the case exceeds what the
          policyholder or attorney can bear, commercial litigation funding targeted at case
          costs can make the difference.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Alternatives to Litigation Funding
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before pursuing litigation funding, policyholders should consider alternatives that
        may be less costly:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contingency fee attorneys:</strong> Many{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            insurance dispute attorneys
          </Link>{' '}
          work on a contingency fee basis, meaning they advance case costs and collect
          their fee only if the case is successful. If a contingency attorney is willing to
          absorb the case costs, the policyholder may not need separate litigation funding.
          The attorney&rsquo;s contingency fee alone &mdash; while significant &mdash; is
          typically less than the combined cost of a contingency fee plus a litigation
          funder&rsquo;s share.
        </li>
        <li>
          <strong>Public adjuster representation:</strong> For many first-party property
          claims, hiring a licensed public adjuster can resolve the dispute without
          litigation altogether. A public adjuster works directly with the insurance company
          to negotiate a fair settlement and charges a fee based on the recovery. If the
          claim can be resolved through negotiation, appraisal, or other pre-litigation
          methods, the cost is substantially less than litigation &mdash; funded or otherwise.
        </li>
        <li>
          <strong>Appraisal:</strong> Many property insurance policies include an appraisal
          provision that allows disputes over the amount of loss to be resolved through a
          binding appraisal process. This process is faster and cheaper than litigation,
          and it does not require litigation funding.
        </li>
        <li>
          <strong>Department of Insurance complaints:</strong> Filing a complaint with the
          state Department of Insurance can sometimes prompt an insurer to re-evaluate a
          claim without litigation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Industry&rsquo;s Perspective on Litigation Funding
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It should not surprise anyone that the insurance industry is the most vocal opponent
        of litigation funding. Insurers and their trade groups have lobbied aggressively for
        mandatory disclosure requirements, fee caps, and in some cases outright bans on
        litigation funding. The industry frames its opposition in terms of consumer
        protection &mdash; arguing that funders charge excessive fees and may exert undue
        influence over litigation &mdash; but the underlying concern is economic. Litigation
        funding threatens the business model that depends on policyholders being unable to
        afford to fight back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer denies a legitimate claim worth $200,000 and the policyholder does
        not have the resources to litigate, the insurer saves $200,000 (minus whatever
        nominal settlement it might offer to make the claim go away). Litigation funding
        disrupts this calculus. A funded policyholder can pursue the claim to its full
        value, and the insurer faces not just the original claim amount but potential{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith damages
        </Link>{' '}
        and attorney fees on top of it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Discovery and Litigation Funding
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most contested issues in litigation funding is whether the existence and
        terms of a funding agreement must be disclosed to the opposing party during{' '}
        <Link href="/resources/discovery-insurance-litigation" className="text-[#2E74B5] underline">
          discovery
        </Link>. Insurers routinely seek discovery of funding agreements, arguing that the
        agreements are relevant to the plaintiff&rsquo;s credibility, potential bias, and
        the funder&rsquo;s influence over litigation decisions. Policyholders and their
        attorneys typically resist disclosure, arguing that the agreements are irrelevant to
        the merits of the claim and that forced disclosure chills access to funding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts have reached different conclusions on this issue. Some have ordered disclosure
        of the existence of funding arrangements (but not the financial terms), while others
        have denied discovery altogether. The trend in many jurisdictions is toward some level
        of disclosure, particularly in federal courts. Policyholders should discuss this issue
        with their attorney before entering into a funding arrangement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Policyholders Considering Litigation Funding
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Consult an attorney first:</strong> Before approaching any litigation
          funder, a policyholder should{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">
            consult with an attorney
          </Link>{' '}
          experienced in insurance disputes. The attorney can assess whether litigation
          funding is necessary, whether the case is likely to attract funding, and whether
          better alternatives exist.
        </li>
        <li>
          <strong>Compare multiple funders:</strong> Litigation funding is a competitive
          market, and terms vary significantly between funders. A policyholder should compare
          offers from multiple funders before committing.
        </li>
        <li>
          <strong>Understand the total cost:</strong> The policyholder should calculate the
          net recovery after the funder&rsquo;s share, the attorney&rsquo;s fee, and case
          costs. If the combined deductions would leave the policyholder with a recovery that
          does not meaningfully address their loss, funding may not be worthwhile.
        </li>
        <li>
          <strong>Read the agreement carefully:</strong> Funding agreements should be
          reviewed by the policyholder&rsquo;s attorney. Key terms to scrutinize include the
          funder&rsquo;s percentage or multiplier, whether the funder&rsquo;s share increases
          over time, what triggers repayment, and what rights the funder has regarding
          settlement decisions.
        </li>
        <li>
          <strong>Check the funder&rsquo;s track record:</strong> Not all funders are
          reputable. A policyholder should verify that the funder is established, registered
          where required, and has a track record of transparent dealing with plaintiffs.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article provides general educational information about third-party litigation
          funding and is not legal or financial advice. Litigation funding agreements are
          complex financial instruments with significant implications for a
          policyholder&rsquo;s net recovery. Any policyholder considering litigation funding
          should consult with a qualified attorney who can evaluate the specific
          circumstances of their case, the terms of the proposed funding agreement, and
          the applicable laws in their jurisdiction.
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
