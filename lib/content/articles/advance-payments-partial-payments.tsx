import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Advance Payments and Partial Payments: Your Right to Money Before the Claim Is Resolved',
  description:
    'Insurance companies used to issue generous advance payments as a strategic tool. Now they rarely pay anything until a precise amount is calculated. Learn why that shift happened, what the law requires, and how to demand the money you are owed before your claim is fully resolved.',
  summary:
    'Insurers once advanced money freely but now often pay nothing until an exact figure is set. California law still requires prompt payment of undisputed amounts, so you can demand partial payment now and keep adjusting the rest.',
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
        You have a covered loss. Your home is damaged or destroyed. You need money now &mdash; not
        in three months, not after the carrier has completed its investigation, not after six rounds
        of supplemental estimates. You need money to secure temporary housing, begin emergency
        repairs, replace essential belongings, and keep your life from unraveling while the insurance
        company takes its time processing paperwork.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is exactly the scenario insurance was designed for. You paid premiums for years, and
        the implicit promise was that when disaster struck, the carrier would be there with financial
        support when you needed it most. But the reality of modern claims handling is far more
        complicated. The days when a field adjuster could exercise discretion and cut a check to help
        a displaced family get back on its feet are largely over. What replaced that system is a
        bureaucratic process designed around precision, documentation, and delay &mdash; a process
        that often leaves policyholders waiting for money they desperately need while the carrier
        methodically determines the exact amount it believes is owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines the critical distinction between advance payments, partial payments,
        and undisputed-amount payments. It explains the legal framework that governs when carriers
        must pay before a claim is fully resolved, the historical shift that changed how carriers
        approach early payments, and the practical strategies you can use to get money flowing when
        you need it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Are Advance Payments?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An advance payment is money the insurance company pays you before the final amount of the
        claim has been determined. It is not a settlement. It is not a final payment. It is money
        issued against the anticipated total, meant to bridge the gap between the date of loss and
        the date the carrier eventually calculates its final number. Think of it as a draw against
        what the carrier expects it will owe.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Advance payments serve a critical function in catastrophic losses. When a family is displaced
        by a fire, they cannot wait eight weeks for the carrier to complete its estimate before they
        secure a rental. When a business suffers major water damage, the owner cannot wait three
        months for the carrier to finalize the building estimate before starting demolition and
        drying. The purpose of an advance is to get money into the hands of the insured quickly
        enough that the coverage actually does what it is supposed to do &mdash; help the policyholder
        recover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Advance payments are typically issued as checks that are later credited against the total
        claim payment. If the carrier advances $15,000 and later determines that the total claim is
        $85,000, the remaining payment would be $70,000 (minus any deductible not already applied).
        The advance is not &ldquo;extra&rdquo; money &mdash; it is money you were going to receive
        anyway, paid earlier because the circumstances demanded it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Difference Between Advance Payments and Partial Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These two terms are often used interchangeably, but they are not identical, and the
        distinction matters.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An <strong>advance payment</strong> is issued before the carrier has completed its
        investigation and determined the amount owed. The carrier does not yet have a final number.
        It is paying an estimated amount in anticipation of a larger payment to follow. Advances
        are inherently imprecise &mdash; the carrier is acknowledging that it does not know the
        exact total yet, but it knows enough to pay something now.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>partial payment</strong> is issued after the carrier has calculated a specific
        amount that it believes is owed. The carrier may have completed its estimate and determined
        that $50,000 is owed under the building coverage, but it is issuing only $30,000 because
        the remaining $20,000 is being held as recoverable depreciation until repairs are completed.
        Or the carrier may be issuing a partial payment on one coverage (like the building) while it
        continues to investigate another coverage (like contents or ALE). Either way, the carrier has
        reached a conclusion about at least part of the claim and is paying based on that conclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters because of how each type of payment relates to the carrier&apos;s
        obligations. Partial payments on determined amounts are governed by specific timing
        requirements under California&apos;s Fair Claims regulations. Advance payments operate in a
        different space &mdash; one where the carrier has not yet reached a final determination but
        may still be obligated to pay based on what is already known.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Historical Shift: How Carriers Used to Handle Advances
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how advance payments used to work is essential to understanding why the current
        system is so frustrating for policyholders. The shift was not accidental. It was strategic.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Era of Generous Advances
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        It used to be far more common for insurance companies to issue substantial advance payments
        early in the claim process. Not long ago &mdash; within the last ten to fifteen years &mdash;
        a field adjuster who responded to a fire loss might issue a $10,000 or $20,000 advance check
        within days of the loss, well before any formal estimate was prepared. The adjuster had the
        authority and discretion to assess the situation, recognize that the insured needed money, and
        issue a check on the spot.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was not charity. It was a deliberate claims-handling strategy, and it was taught by
        consultants who advised insurance companies on how to manage their claims operations. The
        theory behind generous advances was straightforward and, from the carrier&apos;s perspective,
        remarkably effective.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reasoning went like this: a policyholder who receives a significant advance early in the
        claim process feels relieved. The immediate financial pressure is reduced. The policyholder
        feels that the insurance company is taking care of them. That sense of goodwill and relief
        makes the insured far less likely to hire a public adjuster or an attorney. The policyholder
        thinks, &ldquo;They sent me a check right away &mdash; they must be handling this
        fairly.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The advance also made the insured more cooperative with the rest of the claims process. A
        policyholder who has received $15,000 within the first week is more patient, more willing to
        provide documentation, more willing to accept the adjuster&apos;s timeline, and less likely
        to become adversarial. The advance created a dynamic where the insured felt grateful &mdash;
        and grateful policyholders are easier to manage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the part that matters most: consultants who advised this strategy were explicit that
        generous advances would help carriers pay less money in the long run. The advance was not a
        path to a fair outcome &mdash; it was a path to a compliant insured. Policyholders who
        received early advances were statistically less likely to challenge lowball estimates, less
        likely to engage professionals to review the carrier&apos;s scope and pricing, and less
        likely to push back on depreciation calculations. The $15,000 advance might cost the carrier
        nothing in the end (it was deducted from the final payment anyway), but the goodwill it
        purchased saved the carrier tens of thousands of dollars in claims that went unchallenged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is something deeply instructive about this history. The same industry that now insists
        it cannot issue a single dollar before completing a thorough investigation used to hand out
        substantial advances as a deliberate tactic to reduce overall claim costs. The carrier was
        not paying early because it was generous. It was paying early because it was shrewd. The
        advance was an investment in policyholder compliance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Changed
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Over the last decade, the insurance industry appears to have moved away from this approach.
        The era of the field adjuster with discretion and authority to issue meaningful advances has
        been replaced by a system in which no money moves until a bureaucratic process has been
        completed. The adjuster on the ground may see a family living in their car, may understand
        perfectly well that $30,000 in ALE is inevitable, and may want to issue an advance &mdash;
        but they no longer have the authority to do so. The decision is made at a desk, by someone
        who has never visited the property, after a process that takes weeks or months.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier now insists on determining a precise number before issuing any payment at all.
        The first check arrives not as an advance but as a calculated payment based on a preliminary
        estimate. That preliminary estimate may itself be preliminary &mdash; subject to supplements
        and revisions &mdash; but the carrier treats it as a floor below which it will not pay until
        it has done its own analysis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What this means in practice is that the policyholder receives nothing during the most critical
        phase of the claim: the first weeks after the loss, when emergency spending is highest, when
        temporary housing must be secured, when decisions about mitigation and temporary repairs must
        be made immediately. The carrier has replaced a system that was designed to keep the insured
        cooperative with a system that offers nothing until its own process is complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth asking why the industry abandoned a strategy that, by its own consultants&apos;
        analysis, saved money in the long run. One possible explanation is that the rise of
        professional representation &mdash;{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjusters
        </Link>{' '}
        and policyholder attorneys &mdash; has changed the calculus. If advances no longer prevent
        policyholders from hiring professionals (because more policyholders now know to hire
        professionals regardless), the advance no longer serves its purpose as a compliance tool.
        Another possibility is that the shift reflects a broader industry move toward centralized
        claims processing, where individual adjuster discretion has been systematically eliminated
        in favor of standardized workflows that prioritize consistency and cost control over
        responsiveness.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whatever the reason, the result is the same: policyholders today are far less likely to
        receive advance payments than they were a decade ago, and the consequences fall entirely on
        the people who can least afford to wait.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Obligation to Pay Undisputed Amounts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of whether a carrier chooses to issue advances, California law creates a separate
        and independent obligation that functions like a mandatory advance payment in many situations.
        This is the duty to pay undisputed amounts promptly, even while disputed amounts are still
        being negotiated.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect;2695.7(h): The Undisputed-Amount Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.7(h) of the California Code of Regulations (Title 10) is one of the most
        important and most frequently violated provisions in{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California&apos;s Fair Claims Settlement Practices regulations
        </Link>
        . It provides that when a claim has both disputed and undisputed components,
        the insurer must pay the undisputed amount without delay, even if the disputed portion is
        still being negotiated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is why this matters: in most first-party property claims, there is
        some amount that is clearly owed even if the total is in dispute. The carrier and the
        policyholder may disagree about whether the claim is worth $80,000 or $120,000, but neither
        side disputes that it is worth at least $80,000. Under Section 2695.7(h), the carrier must
        pay that $80,000 promptly &mdash; it cannot hold the entire payment hostage while it
        negotiates about the remaining $40,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This rule creates what is functionally an advance payment mechanism, even in situations where
        the carrier is not voluntarily issuing advances. The carrier does not have the option to
        withhold all payment until it has resolved every dispute. If any portion of the claim is
        undisputed, that portion must be paid now.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, carriers violate this requirement constantly. They present a take-it-or-leave-it
        number and refuse to issue any payment until the insured agrees to the total. Or they
        condition payment on the insured signing a release or accepting the estimate as final. Or
        they simply claim that the entire amount is &ldquo;in dispute&rdquo; because the insured has
        challenged the estimate &mdash; a position that conflates a dispute over the total with a
        dispute over every dollar. The undisputed-amount rule is clear: the carrier must pay what is
        not in dispute, regardless of what is in dispute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Invoke the Undisputed-Amount Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Invoking this rule requires precision. You cannot simply tell the carrier &ldquo;pay me
        something.&rdquo; You need to frame your demand in terms the regulation supports:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Identify the undisputed amount specifically.</strong> If the carrier&apos;s own
          estimate says $52,000 and your estimate says $87,000, the undisputed amount is $52,000.
          The carrier has already determined that $52,000 is owed. Demand payment of the carrier&apos;s
          own number immediately, while reserving your right to dispute the difference.
        </li>
        <li>
          <strong>Cite the regulation by number.</strong> Reference 10 CCR &sect;2695.7(h) specifically
          in your written demand. This puts the carrier on notice that you know the rule and that any
          continued withholding may constitute an unfair claims practice.
        </li>
        <li>
          <strong>Make clear that accepting payment is not accepting the total.</strong> State
          explicitly that your acceptance of the undisputed amount does not constitute agreement with
          the carrier&apos;s estimate and that you reserve all rights to pursue the disputed balance.
          See our article on{' '}
          <Link href="/resources/insurance-checks" className="text-[#2E74B5] underline">
            insurance checks
          </Link>{' '}
          for how to handle restrictive language on payments.
        </li>
        <li>
          <strong>Follow up in writing if payment is not forthcoming.</strong> If the carrier does not
          pay the undisputed amount within 30 days of your demand, document the delay. This delay is
          itself a potential{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith
          </Link>{' '}
          violation &mdash; the carrier is now withholding money it has determined is owed, without
          any coverage dispute to justify the withholding.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ALE Advance: A Case Study in Why Advances Matter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nowhere is the advance payment issue more urgent &mdash; or more frequently mishandled &mdash;
        than in{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          Additional Living Expenses (ALE)
        </Link>{' '}
        coverage. ALE is the coverage that pays for temporary housing and increased living costs when
        a covered loss renders your home uninhabitable. It is, by its nature, a coverage that
        requires money upfront.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Reimbursement Paradox
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policies describe ALE as a reimbursement for expenses &ldquo;incurred&rdquo; by the
        insured. Carriers seize on this language to argue that ALE is strictly a reimbursement
        benefit &mdash; meaning the insured must first spend the money and then submit receipts for
        reimbursement. They refuse to advance any ALE funds until the insured has already paid rent,
        hotel bills, or other housing costs out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical absurdity of this position is obvious. A homeowner whose house has just burned
        down needs first month&apos;s rent, last month&apos;s rent, and a security deposit to secure
        a temporary apartment. Everyone involved in the claim &mdash; the adjuster, the examiner,
        the carrier&apos;s management &mdash; knows that this policyholder is going to have $30,000
        or more in rental costs over the coming year because reconstruction will take that long. The
        ultimate ALE obligation is not in dispute. Yet the carrier refuses to advance the $6,000 or
        $8,000 the insured needs right now to secure the rental, insisting instead that the insured
        must first find the money somewhere, pay the landlord, obtain a receipt, submit the receipt,
        wait for it to be processed, and then receive reimbursement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a family that has just lost its home &mdash; along with many of the financial resources
        that home represented &mdash; this position is not just bureaucratic. It renders the coverage
        inaccessible. The insured cannot &ldquo;incur&rdquo; the cost because they do not have the
        money to incur it. The coverage exists precisely for this situation, yet the carrier&apos;s
        interpretation of &ldquo;incurred&rdquo; means the coverage is available only to people who
        do not need it &mdash; people who can afford to front the money and wait to be reimbursed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Reimbursement Position Is Often Wrong
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Like many disputes in insurance claims, the reimbursement question ultimately comes down to
        reasonableness. Even if the policy language can be read to support a reimbursement-only
        interpretation, the carrier&apos;s{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          duty of good faith and fair dealing
        </Link>{' '}
        imposes a standard of reasonableness on every aspect of claims handling. Is it reasonable for
        the carrier to insist that the insured rent a place &mdash; knowing the insured has no money
        to do so &mdash; and then submit a receipt for reimbursement, when the rental advance is a
        fraction of the total ALE that everyone agrees will be owed over the course of the claim?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer, in any common-sense analysis, is no. An insurer that acknowledges a loss has
        rendered the home uninhabitable, that acknowledges ALE coverage applies, and that can
        reasonably estimate the displacement period has no good-faith basis for refusing to advance
        ALE. The policy language may use the word &ldquo;incurred,&rdquo; but the implied covenant
        of good faith and fair dealing does not permit the carrier to interpret that language in a
        way that makes the coverage practically unavailable to the insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney Chip Merlin of Merlin Law Group has written extensively about how the failure to
        advance ALE payments can itself constitute bad faith. The analysis is straightforward: the
        carrier knows the insured needs housing, knows housing costs money upfront, knows the insured
        cannot access those funds without the carrier&apos;s payment, and refuses to pay. That
        refusal is not a neutral policy interpretation &mdash; it is a claims-handling decision that
        prioritizes the carrier&apos;s cash flow over the insured&apos;s immediate needs, in a
        context where the carrier has already collected years of premiums to cover exactly this risk.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&apos;s Declared-Disaster Advance Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has addressed the ALE advance issue directly for declared disasters. Under
        California Insurance Code &sect;2061(a), when a total loss results from a declared state of
        emergency, the insurer must advance no less than four months of ALE upon the insured&apos;s
        request. The insured does not need to submit receipts first. The insured does not need to
        prove what they have &ldquo;incurred.&rdquo; The advance is mandatory.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This statutory requirement exists because the legislature recognized the absurdity of the
        reimbursement-only position in disaster situations. But note the limitation: this requirement
        applies specifically to total losses in declared disasters. For partial losses, for
        non-disaster claims, and for losses in states without similar statutes, the advance payment
        battle often must be fought on the grounds of good faith and the undisputed-amount regulation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed discussion of the specific California statutory requirements, including CDI
        Bulletin 2025-2 and SB 872, see our companion articles on{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          ALE and Fair Rental Value
        </Link>{' '}
        and{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
          recoverable depreciation deadlines
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Carriers Resist Paying Early
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the carrier&apos;s motivations for resisting advance payments helps
        policyholders counter the arguments they will encounter. The carrier&apos;s stated reasons
        are rarely the real ones.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Stated Reasons
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers typically offer some version of these justifications for not paying advances:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;We need to complete our investigation.&rdquo;</strong> The carrier says it
          cannot pay until it knows the exact amount owed. This sounds reasonable in the abstract, but
          it ignores the fact that the carrier does not need to know the exact total to know that a
          significant amount is clearly owed. An investigation may determine whether the claim is
          $60,000 or $90,000, but no investigation is needed to determine that a family whose home
          burned down needs housing money now.
        </li>
        <li>
          <strong>&ldquo;We might overpay.&rdquo;</strong> The carrier argues that issuing advances
          creates a risk of overpayment if the final total turns out to be lower than the advance. In
          practice, this risk is trivially small in most catastrophic losses. A $10,000 advance on a
          fire claim that will obviously exceed $100,000 does not create a meaningful overpayment risk.
          The carrier is using a theoretical risk to justify inaction.
        </li>
        <li>
          <strong>&ldquo;Our process doesn&apos;t allow it.&rdquo;</strong> The carrier points to its
          own internal procedures and claims that it has no mechanism for issuing advance payments. This
          is a policy the carrier created. It can change it. The absence of an internal process is not
          a justification for failing to meet external obligations.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Structural Incentives
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Behind the stated reasons lie structural incentives that favor delay. Every day the carrier
        holds onto your money is a day the carrier earns{' '}
        <Link href="/resources/time-pressure-negotiation-weapon" className="text-[#2E74B5] underline">
          investment income on those reserves
        </Link>
        . Over thousands of claims, this float represents significant revenue. The carrier is not
        just indifferent to your urgent need for money &mdash; it has an affirmative financial
        incentive to keep your money as long as possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Delay also shifts leverage. A policyholder who has been without money for two months is
        more likely to accept a low settlement than a policyholder who received an advance and is
        not under immediate financial pressure. The carrier&apos;s refusal to advance money is
        itself a negotiation tactic &mdash; it creates precisely the kind of{' '}
        <Link href="/resources/time-pressure-negotiation-weapon" className="text-[#2E74B5] underline">
          time pressure
        </Link>{' '}
        that benefits the carrier at the bargaining table.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why the historical shift matters so much. Carriers did not stop issuing advances
        because they discovered it was the wrong thing to do. They stopped because the environment
        changed, and the old strategy of buying compliance through generosity was replaced with a
        new strategy of weaponizing delay. The tactics changed; the goal did not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bad Faith Implications of Refusing to Advance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The refusal to issue advance payments does not exist in a legal vacuum. When the
        circumstances make an advance both reasonable and necessary, the carrier&apos;s refusal can
        cross the line from aggressive claims handling into{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Failure to Advance Becomes Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The bad faith analysis turns on several factors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The carrier knows the insured has an urgent need.</strong> A displaced family, a
          business that cannot operate, an insured who has communicated in writing that they cannot
          secure housing without an advance &mdash; these are situations where the carrier is on
          notice that its refusal to pay is causing concrete harm.
        </li>
        <li>
          <strong>The eventual obligation is not in genuine dispute.</strong> If the carrier
          acknowledges coverage and has a reasonable estimate of the total, the question is not
          whether to pay but when. Refusing to pay early when the total is known (or knowable) serves
          no purpose other than preserving the carrier&apos;s cash position at the insured&apos;s
          expense.
        </li>
        <li>
          <strong>The advance is a small fraction of the total.</strong> Requesting an advance of
          $10,000 on a claim that will clearly exceed $100,000 is not asking the carrier to take a
          risk. It is asking the carrier to pay a fraction of an undisputed amount. The carrier cannot
          credibly claim uncertainty about whether it owes at least $10,000.
        </li>
        <li>
          <strong>The carrier&apos;s own conduct creates the need.</strong> If the carrier&apos;s
          delayed investigation is the reason no payment has been made, and the insured is suffering
          harm because of that delay, the carrier has created the very problem it is now refusing to
          solve. This circular dynamic &mdash; &ldquo;we cannot pay you because we have not finished
          our investigation, but we control when the investigation finishes&rdquo; &mdash; is the
          kind of claims practice that courts scrutinize closely.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Documenting the Bad Faith Case
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a carrier is refusing to advance money you need, every communication matters. Here is how
        to build the record:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Put every request in writing.</strong> Demand the advance in a letter or email that
          specifically cites 10 CCR &sect;2695.7(h) and explains why the amount is undisputed. Keep
          a copy. See our article on{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims regulations
          </Link>{' '}
          for the full text and context of these requirements.
        </li>
        <li>
          <strong>Document your financial hardship.</strong> If you cannot afford temporary housing
          without an advance, say so in writing. &ldquo;I am unable to secure comparable housing
          without an advance of ALE. My family has been displaced for [X] weeks and we do not have
          the resources to front the costs of temporary housing that your policy was designed to
          cover.&rdquo;
        </li>
        <li>
          <strong>Document the carrier&apos;s response.</strong> If the carrier refuses in writing,
          preserve that refusal. If the carrier refuses verbally, follow up with a confirming email:
          &ldquo;This confirms that during our conversation on [date], you stated that [carrier] is
          unable or unwilling to advance ALE payments at this time.&rdquo;
        </li>
        <li>
          <strong>Document the consequences.</strong> If you are forced to move in with family, accept
          substandard housing, or return to a home that is not safe or habitable because the carrier
          refused to advance money, document that as well. These consequences are directly attributable
          to the carrier&apos;s conduct, and they are relevant to a bad faith claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Partial Payments and the &ldquo;All or Nothing&rdquo; Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond advance payments, policyholders frequently encounter a related problem: the carrier
        treats the claim as an all-or-nothing proposition, refusing to pay anything on one coverage
        until every coverage has been resolved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a typical homeowner&apos;s claim, there are multiple coverages at play: Coverage A
        (dwelling), Coverage B (other structures), Coverage C (personal property), and Coverage D
        (ALE). Each coverage is separate. The carrier may have completed its investigation of the
        building damage and arrived at a Coverage A number, while still investigating the contents
        claim or the ALE. Under the undisputed-amount rule, the carrier must pay the completed
        coverages promptly. It cannot hold the dwelling payment hostage until the contents inventory
        is finalized.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yet carriers routinely do exactly that. They hold back the building payment &ldquo;until the
        full scope is determined.&rdquo; They wait to issue the ALE advance &ldquo;until they have
        a clearer picture of the construction timeline.&rdquo; They refuse to pay contents
        &ldquo;until the inventory is complete and verified.&rdquo; Each delay is individually
        justified by the carrier as prudent claims management. Taken together, they represent a
        systematic withholding of money that is owed and undisputed, in violation of the
        carrier&apos;s own regulatory obligations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage-by-Coverage Payment Obligations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each coverage in the policy creates an independent payment obligation. The carrier must
        evaluate and pay each coverage on its own timeline:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Dwelling (Coverage A):</strong> Once the carrier has completed its building
          estimate, the actual cash value of the building damage is due promptly &mdash; less the
          deductible and any{' '}
          <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
            recoverable depreciation
          </Link>
          . The carrier cannot delay this payment because it is still working on contents or ALE.
        </li>
        <li>
          <strong>Personal Property (Coverage C):</strong> The carrier must pay undisputed contents
          amounts as they are determined. If the insured has submitted a partial inventory covering
          half their belongings, the carrier should pay on those items while the inventory continues.
          Waiting for a &ldquo;complete&rdquo; inventory before paying anything on contents is a
          common tactic that violates the undisputed-amount rule.
        </li>
        <li>
          <strong>ALE (Coverage D):</strong> As discussed above, ALE is inherently a coverage that
          requires timely payment. The carrier cannot wait for the construction to be complete before
          paying for the housing the insured needs during construction.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Advance Payments vs. Accommodation Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not confuse an advance payment with an{' '}
        <Link href="/resources/accommodation-payments" className="text-[#2E74B5] underline">
          accommodation payment
        </Link>
        . They are fundamentally different, and the distinction affects your rights.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An <strong>advance payment</strong> is money issued against a claim that the carrier
        acknowledges it will owe. The carrier is not disputing coverage &mdash; it is simply paying
        early, before the final total is determined. An advance does not affect your rights to
        dispute the final amount, and it does not come with any suggestion that the carrier is
        doing you a favor. It is simply a timing decision about when to release money that everyone
        agrees will be owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An <strong>accommodation payment</strong> is something entirely different. An accommodation
        is money the carrier pays while simultaneously claiming it may not owe the money at all.
        The carrier frames it as a &ldquo;courtesy&rdquo; or &ldquo;goodwill gesture&rdquo; and
        accompanies it with language reserving its right to deny coverage. Accommodation payments
        are designed to protect the carrier, not the insured, and they often come with releases
        or settlement language that can compromise your ability to fight for the full amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier offers an accommodation payment, it is worth asking: if the carrier genuinely
        believes it does not owe this money, why is it paying? Often, the answer is that the carrier
        believes it does owe the money but wants to pay less than the full amount while insulating
        itself from a bad faith claim. The &ldquo;accommodation&rdquo; label lets the carrier
        underpay while claiming generosity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are offered an accommodation payment, treat it with skepticism. Read everything that
        comes with it. Consider whether the carrier is offering it in lieu of the advance or partial
        payment it is actually obligated to make. And consult with a professional before signing
        anything that accompanies the check. See our detailed article on{' '}
        <Link href="/resources/accommodation-payments" className="text-[#2E74B5] underline">
          accommodation payments
        </Link>{' '}
        for a thorough discussion.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Use Partial Payments Strategically
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all partial payments are favorable to the policyholder. Carriers have learned to use
        partial payments as a claims-handling tool that serves their interests, not yours. Being
        aware of these strategies helps you respond appropriately.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Lowball Partial Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier issues a partial payment based on a deliberately low estimate, then treats
        that estimate as a baseline that the insured must overcome. The psychological dynamic is
        powerful: the insured has money in hand and feels that the claim is &ldquo;mostly
        settled.&rdquo; Fighting for the additional $30,000 or $50,000 that is actually owed feels
        like going backward. Many policyholders accept the partial payment and never pursue the
        supplement, which is precisely what the carrier intended.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For guidance on recognizing and responding to lowball offers, see our article on{' '}
        <Link href="/resources/insurance-checks" className="text-[#2E74B5] underline">
          insurance checks
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Restrictive-Language Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier issues a partial or advance payment accompanied by a check that contains
        &ldquo;full and final settlement&rdquo; language, or by a letter that frames the payment as
        a complete resolution of the claim. If the insured deposits the check without objecting to
        the language, the carrier later argues that the claim is settled. This tactic converts what
        should be a routine partial payment into a trap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Always examine both sides of any{' '}
        <Link href="/resources/insurance-checks" className="text-[#2E74B5] underline">
          insurance check
        </Link>{' '}
        before endorsing it. If the check contains restrictive language, write &ldquo;accepted as
        partial payment only &mdash; all rights reserved&rdquo; above your signature. Better yet,
        demand that the carrier reissue the check without the restrictive language before you
        deposit it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Advance That Is Not Really an Advance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers issue what they call an &ldquo;advance&rdquo; but which is actually the only
        payment they intend to make. The carrier issues $15,000 as an &ldquo;advance,&rdquo; then
        completes its estimate and determines that the total claim is $15,200. The &ldquo;advance&rdquo;
        was, in reality, the entire payment &mdash; the carrier just called it an advance to create
        the impression that more money was coming.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can protect yourself by confirming in writing that the advance is a draw against the
        final total and that the carrier acknowledges additional payments will follow based on the
        completed investigation. If the carrier is unwilling to make that confirmation, the
        &ldquo;advance&rdquo; may be the only money you will see without a fight.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Strategies for Getting Money Sooner
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing your rights is essential, but knowing how to exercise them effectively is what gets
        money in your hands. Here are the strategies that experienced professionals use to
        accelerate payment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Demand Advances in Writing on Day One
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not wait for the carrier to volunteer an advance. The moment you have a covered loss that
        will require significant spending before the claim is resolved, send a written demand for an
        advance. Cite your policy, cite 10 CCR &sect;2695.7(h), and explain specifically what you
        need the money for. The written demand starts the clock and creates a record.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Use the Carrier&apos;s Own Numbers Against Them
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier has prepared any estimate &mdash; even a preliminary one &mdash; use it.
        &ldquo;Your own adjuster&apos;s preliminary estimate shows $45,000 in building damage.
        Even if you adjust this number through your investigation, you have acknowledged that a
        significant amount is owed. I am requesting immediate payment of the undisputed portion of
        this amount.&rdquo; The carrier cannot easily argue that its own estimate is wrong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Provide Documentation That Makes Payment Easy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers often use &ldquo;we don&apos;t have enough information&rdquo; as a reason to delay
        payment. Remove that excuse. Submit lease agreements, hotel receipts, contractor estimates,
        and contents inventories proactively. The more documentation you provide, the less
        justification the carrier has for claiming it cannot determine the undisputed amount.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Frame Every Request in Terms of the Undisputed Amount
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The phrase &ldquo;undisputed amount&rdquo; carries legal weight in California. When you
        frame your request as a demand for the undisputed amount, you are invoking a specific
        regulatory obligation that the carrier knows it must comply with. Do not ask for
        &ldquo;some money&rdquo; or an &ldquo;advance.&rdquo; Ask for &ldquo;the undisputed
        amount, as required by 10 CCR &sect;2695.7(h).&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Escalate Strategically
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the frontline adjuster says they cannot issue an advance, escalate. Ask for a supervisor.
        Ask for a manager. Ask for the name and contact information of the person who has authority
        to approve advance payments. Document every level of the organization that refuses your
        request. The more people who say no, the stronger your eventual bad faith case.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Hire a Professional
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a reason the advance-payment strategy used to work for carriers: policyholders who
        received early money were less likely to hire professionals. The inverse is also true.
        Policyholders who hire a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        or attorney are more likely to receive advance payments, because the professional knows how
        to demand them effectively and the carrier knows that refusing a professional&apos;s request
        carries different consequences than refusing an unrepresented insured.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of the Mortgage Company
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One complication that policyholders often do not anticipate: even when the carrier issues
        an advance or partial payment, the check may be made payable jointly to the insured and the
        mortgage company. The mortgage company has its own process for endorsing insurance checks,
        and that process can add weeks or months to the timeline.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a situation where the carrier has technically issued the payment, but the
        insured cannot access the money because the mortgage company is holding it. The carrier
        points to the mortgage company and says, &ldquo;We paid. Take it up with your lender.&rdquo;
        The mortgage company says, &ldquo;We will release funds as repairs are completed.&rdquo;
        The insured is caught between two institutions, both of which have the insured&apos;s money
        and neither of which is in a hurry to release it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property has a mortgage, factor this into your advance payment strategy. Request that
        ALE and contents payments &mdash; which are not secured by the property &mdash; be issued
        directly to you, without the mortgage company as a payee. Building payments will typically
        include the mortgage company, but there is no reason for ALE or contents checks to be held
        up by the lender&apos;s process.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Advance Payments in Commercial Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything discussed above applies to commercial claims as well, but the stakes are often
        higher and the dynamics more complex. A business that suffers a major loss needs immediate
        cash flow to survive. Business income coverage is analogous to ALE &mdash; it replaces
        income the business cannot earn while it is closed or impaired &mdash; and the need for
        advance payments is just as urgent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial policyholders face an additional challenge: the business income calculation is
        often more complex than an ALE calculation, which gives the carrier more room to delay.
        The carrier may argue that it cannot determine the business income loss until the
        policyholder provides tax returns, profit and loss statements, and other financial
        documentation. Meanwhile, the business is bleeding cash.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same undisputed-amount principle applies. If the carrier acknowledges that the business
        is closed and that business income coverage applies, some amount is undisputed. The carrier
        cannot withhold all business income payments while it refines its calculation of the exact
        monthly loss. A reasonable advance, based on the business&apos;s most recent financial
        statements, should be paid while the detailed analysis continues.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Advance Payments Are Not Available
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are situations where the carrier&apos;s refusal to advance money is defensible.
        Understanding these situations helps you calibrate your expectations and focus your efforts
        where they will be most productive.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage is genuinely in dispute.</strong> If the carrier has raised a legitimate
          coverage question &mdash; for example, whether the loss was caused by a covered peril or an
          excluded one &mdash; it may be justified in withholding payment until the coverage question
          is resolved. But even here, the carrier should be paying the undisputed portion of any
          coverage that is not in question.
        </li>
        <li>
          <strong>The claim is under investigation for fraud.</strong> If the carrier&apos;s Special
          Investigations Unit (SIU) has referred the claim for a fraud investigation, payment may be
          delayed pending the outcome. However, the carrier cannot delay payment indefinitely on a
          pretext &mdash; the investigation must be conducted in good faith and with reasonable speed.
        </li>
        <li>
          <strong>The insured has not cooperated with reasonable requests.</strong> If the carrier has
          made legitimate requests for documentation or access and the insured has not cooperated,
          the carrier may condition payment on the insured fulfilling their duties after loss. But
          &ldquo;cooperation&rdquo; does not mean agreeing to everything the carrier demands &mdash;
          the insured&apos;s obligation is to cooperate reasonably, not to submit to every request
          without question.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Emotional Dimension: Why Money Matters Beyond the Dollars
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The advance payment issue is not purely financial. It is deeply emotional. A policyholder
        who has just lost their home is in crisis. They are dealing with grief, displacement,
        uncertainty about the future, and the overwhelming task of rebuilding a life. Receiving
        money from the insurance company &mdash; even a partial advance &mdash; is a signal that
        the system is working, that someone is going to help, that the premiums they paid were
        worth something.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, waiting weeks or months for any payment while the carrier processes paperwork
        sends the opposite signal. It tells the insured that they are alone, that the system does
        not care about their circumstances, and that the insurance company&apos;s internal processes
        matter more than the insured&apos;s immediate needs. That emotional impact has real
        consequences: it drives policyholders toward depression, toward accepting lowball
        settlements out of desperation, and toward abandoning claims altogether.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This emotional dynamic is not lost on carriers. The question is whether they account for
        it as a factor that should motivate earlier payment, or as a factor that makes delay an
        even more effective claims-management tool.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: What You Need to Know
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Advance payments are money issued before the final claim amount is determined. They are
          credited against the eventual total &mdash; they are not extra money.
        </li>
        <li>
          Carriers used to issue generous advances as a deliberate strategy to keep policyholders
          compliant and less likely to hire professionals. That strategy has largely been abandoned,
          and the result is that policyholders now wait much longer for any payment at all.
        </li>
        <li>
          California law (10 CCR &sect;2695.7[h]) requires carriers to pay undisputed amounts
          promptly, even while disputed amounts are being negotiated. This effectively creates a
          mandatory advance payment mechanism in most claims.
        </li>
        <li>
          The carrier&apos;s refusal to advance ALE payments can constitute bad faith when the
          insured cannot afford temporary housing without the advance and the eventual ALE obligation
          is not in genuine dispute.
        </li>
        <li>
          Do not confuse advance payments with{' '}
          <Link href="/resources/accommodation-payments" className="text-[#2E74B5] underline">
            accommodation payments
          </Link>
          . Advances are money the carrier acknowledges it will owe. Accommodations are money the
          carrier pays while claiming it may not owe anything.
        </li>
        <li>
          Each coverage in the policy (dwelling, contents, ALE) creates an independent payment
          obligation. The carrier cannot withhold payment on one coverage because it has not finished
          investigating another.
        </li>
        <li>
          Demand advances in writing, cite the regulation, use the carrier&apos;s own numbers, and
          escalate when necessary. Document every refusal.
        </li>
        <li>
          Hiring a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            public adjuster
          </Link>{' '}
          or attorney significantly increases your chances of receiving advance payments, because
          professionals know how to demand them and carriers know the consequences of refusing.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Final Thought
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies hold all the structural advantages in the claims process: time, money,
        expertise, and institutional patience. Advance payments are one of the few mechanisms that
        partially level the playing field. When a carrier pays money early, it reduces the financial
        pressure on the insured, which reduces the carrier&apos;s leverage, which leads to fairer
        outcomes. That is exactly why carriers resist paying early, and it is exactly why you should
        insist on it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The law is on your side. The regulations require it. The duty of good faith supports it.
        The only question is whether you will demand it &mdash; and whether the carrier will have
        to answer to a court or the Department of Insurance for its refusal.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property Insurance Coverage Law Blog (Merlin Law Group)</strong> &mdash; Attorney Chip Merlin has written extensively on how the failure to advance ALE and partial payments can itself constitute bad faith. Search the blog for &ldquo;advance payment&rdquo; and &ldquo;partial payment.&rdquo;
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; Consumer-advocacy resources on advance payments and additional living expense after a disaster (uphelp.org).
        </li>
        <li>
          <strong>CDI Bulletin 2025-2</strong> &mdash; California Department of Insurance guidance on wildfire consumer protections and advance payments.
        </li>
      </ul>
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
