import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Understanding Your Insurance Policy',
  description:
    'A comprehensive guide to reading and understanding your homeowners insurance policy, including declaration pages, endorsements, HO3 vs named peril coverage, and commercial co-insurance clauses.',
  summary:
    'Reading your policy means understanding the declarations, the insuring agreement, definitions, exclusions, conditions, and endorsements, plus concepts like HO-3 open vs. named perils and commercial coinsurance. This is the foundation for knowing what you can claim.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Insurance Policy Is a Contract — Read It Like One
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy is a legally binding contract between you and your insurance company. It
        spells out exactly what is covered, what is excluded, and what your obligations are as a
        policyholder. Unfortunately, most people never read their policy until they have a claim —
        and by then, they are often confused by the language and structure. This guide will walk you
        through the key components of a typical insurance policy so you know what you are looking at
        when a loss occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three Parts of Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance policy is not a single document — it is a collection of documents that work
        together. Understanding each part is critical to knowing what your coverage actually says.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        1. The Declaration Page (Dec Page)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The declaration page is the summary sheet at the front of your policy. It contains the key
        facts about your coverage at a glance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The named insured (who is covered under the policy)</li>
        <li>The policy period (effective dates)</li>
        <li>The property address</li>
        <li>Coverage amounts — dwelling limit, personal property limit, loss of use limit, liability limit, and any sub-limits</li>
        <li>Your deductible(s)</li>
        <li>The premium you paid</li>
        <li>A list of all endorsements attached to the policy</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The endorsement list on the declaration page is especially important. Every endorsement
        listed there modifies your policy in some way — adding coverage, removing coverage, or
        changing the terms. If an endorsement is listed on your dec page, it is part of your
        contract whether you have read it or not.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        2. The Main Policy Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The main policy form is the body of your insurance contract. It contains the insuring
        agreement (the promise to pay for covered losses), the definitions, the exclusions, the
        conditions, and your duties after a loss. For residential policies, the most common form is
        the HO3, sometimes called a &quot;special form&quot; or &quot;all-risk&quot; policy. We will
        discuss the difference between policy types below.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        3. The Endorsements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Endorsements are additional documents that modify, add to, or replace language in the main
        policy form. They are just as enforceable as the main policy. In California, you will often
        see state-specific endorsements that delete certain sections of the standard policy language
        and replace them with California-compliant language. These California endorsements can
        significantly change your coverage — sometimes for the better.
      </p>

      <CalloutBox variant="tip" title="Request Your Complete Policy">
        <p>
          Always request the <strong>complete</strong> policy from your insurance company, including
          every endorsement listed on the declaration page. Do not rely on a summary or the dec page
          alone. If your insurer cannot or will not provide the full policy, that itself may be a
          problem. You need to read the entire policy — including all endorsements — to understand
          what you actually have.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HO3 (All-Risk) vs. Named Peril Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The type of policy you have fundamentally determines how coverage disputes play out. The two
        most common residential policy types work in opposite ways.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        HO3 — Open Peril / All-Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An HO3 policy covers all causes of loss (called &quot;perils&quot;) unless the policy
        specifically excludes them. This is the most common homeowners policy and the most favorable
        for the policyholder. If you have an HO3, the <strong>burden of proof is on the insurance
        company</strong> to show that an exclusion applies to deny your claim. You do not have to
        prove what caused the loss — you only have to show that a loss occurred. The insurer then
        has to prove it falls under an exclusion.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Named Peril Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A named peril policy only covers losses caused by perils specifically listed in the policy —
        such as fire, lightning, windstorm, hail, explosion, and so on. If your cause of loss is not
        on the list, it is not covered. With a named peril policy, the <strong>burden of proof is on
        you, the insured</strong>, to demonstrate that the cause of your loss matches one of the
        named perils. The California FAIR Plan is a well-known example of a named peril policy. If
        you have a FAIR Plan policy, you need to understand this distinction.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Policies and Co-Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property policies often contain a co-insurance clause that residential policies
        typically do not. Co-insurance requires the policyholder to insure their property to a
        certain percentage of its full replacement value — usually 80%, 90%, or 100%. If you fail to
        carry enough insurance, the co-insurance clause penalizes you at the time of a claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is how the penalty works: suppose you have a building worth $1,000,000 and a
        co-insurance requirement of 80%. You are required to carry at least $800,000 in coverage. If
        you only purchased $600,000 in coverage and suffer a $200,000 loss, the insurer will not pay
        the full $200,000. Instead, they apply the co-insurance formula:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 font-mono bg-gray-50 p-4 rounded-lg border">
        (Amount carried / Amount required) x Loss = Payment<br />
        ($600,000 / $800,000) x $200,000 = $150,000
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this example, you would only receive $150,000 on a $200,000 loss — a 25% penalty for
        being underinsured. This is a trap many commercial policyholders fall into, especially when
        property values increase over time but coverage limits are not updated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Liability vs. First-Party Coverage — Do Not Confuse Them
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy has two major sections: first-party coverage (which pays for damage to your own
        property) and liability coverage (which pays when you are legally responsible for someone
        else&apos;s injuries or property damage). These sections have their own separate exclusions.
        Do not assume that an exclusion in the liability section applies to your first-party property
        claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common example: many policies have an asbestos exclusion in the liability section. Some
        adjusters mistakenly point to this exclusion to deny asbestos-related costs under a
        first-party property claim. But a liability exclusion does not apply to first-party coverage
        unless the same exclusion also appears in the property coverage section. Always check which
        section of the policy an exclusion actually applies to.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Lender&apos;s Loss Payable Endorsement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a mortgage, you have probably noticed that your insurance claim check is made out
        to both you and your mortgage company. This is not random — it is the result of the
        lender&apos;s loss payable endorsement attached to your policy. When you took out your
        mortgage or refinanced, you signed documents agreeing that your insurance policy would name
        the lender as an additional payee. The endorsement requires the insurer to include the
        lender on any claim payment. The lender has a financial interest in your property and wants
        to make sure the insurance proceeds are used to repair the home that secures their loan.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This can create practical headaches — the mortgage company may hold the funds in escrow and
        release them in stages as repairs are completed. Understanding this process early will help
        you plan your repairs and cash flow.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy is only useful if you understand what it says. Request the full policy,
        read every endorsement, and know whether you have an all-risk or named peril form. If you
        are dealing with a claim and the policy language is confusing, consider consulting with
        a <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">Public Adjuster</Link> or
        an attorney who specializes in insurance claims. The more you understand your policy, the
        better positioned you will be to hold your insurance company to its promises.
      </p>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
