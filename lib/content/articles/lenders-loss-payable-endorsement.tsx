import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The Lender’s Loss Payable Endorsement: Why the Mortgage Company’s Name Is on Your Insurance Check",
  description:
    "The lender’s loss payable endorsement gives your mortgage company powerful rights over your insurance claim proceeds. Understanding what those rights are — and what they are not — is the first step to getting your money.",
  summary:
    'The lender\'s loss payable endorsement gives your mortgage company rights over your claim proceeds, which is why its name is on your check. Understanding the precise limits of those rights is the first step to getting your money released.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s perspective as a
          California Licensed Public Adjuster. It is not legal advice. The standard mortgage clause,
          loss payable endorsements, and related contractual provisions vary by state, by lender, and
          by policy form. For advice specific to your situation, consult a licensed attorney
          experienced in insurance coverage law.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners are surprised when their insurance claim check arrives with the mortgage
        company&rsquo;s name on it. They did not ask for it, they did not expect it, and they do
        not understand where the requirement comes from. The check is made out to both the
        homeowner and the lender, and the homeowner cannot deposit it without the lender&rsquo;s
        endorsement. For many people, this is the first time they realize their mortgage company
        has any involvement in their insurance claim at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer lies in a standard policy endorsement called the <strong>lender&rsquo;s loss
        payable endorsement</strong> &mdash; sometimes called the &ldquo;standard mortgage
        clause&rdquo; or simply the &ldquo;mortgage clause.&rdquo; This endorsement exists in
        both residential and commercial property insurance, and it gives the lender specific,
        enforceable rights over the claim proceeds. This article walks through the endorsement
        section by section, explains what rights it gives the bank, and &mdash; just as
        importantly &mdash; explains the limits of those rights.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Requirement Comes From
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The requirement that your mortgage company appears on your insurance policy does not come
        from the insurance company. It comes from your mortgage. When you took out your home loan,
        you signed a deed of trust (or mortgage, depending on your state) that includes a covenant
        requiring you to maintain hazard insurance on the property with the lender named as loss
        payee. This is a condition of the loan. No insurance listing, no loan funding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most borrowers agreed to this requirement when they signed their loan documents &mdash; and
        most do not remember doing so. It was one of dozens of provisions buried in the stack of
        papers signed at closing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance policy then implements this contractual requirement through a mortgage clause.
        In California, the standard fire policy&rsquo;s mortgage clause is codified in California
        Insurance Code &sect; 2071. The chain of authority looks like this:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The mortgage contract</strong> requires the borrower to maintain insurance and
          name the lender as loss payee.
        </li>
        <li>
          <strong>The insurance requirement</strong> is a condition of the loan, enforceable by
          the lender (including through{' '}
          <Link href="/resources/force-placed-insurance" className="text-blue-700 underline hover:text-blue-900">
            force-placed insurance
          </Link>{' '}
          if the borrower lets coverage lapse).
        </li>
        <li>
          <strong>The endorsement on the policy</strong> &mdash; the lender&rsquo;s loss payable
          endorsement &mdash; grants the lender specific rights as a third-party beneficiary.
        </li>
        <li>
          <strong>The lender&rsquo;s name on the check</strong> is the practical consequence of
          that endorsement.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not something the insurance company decided on its own. It is a contractual chain
        that starts with your loan documents.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Standard Mortgage Clause vs. the Simple Loss Payable Clause
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all loss payable provisions are the same. There are two fundamentally different types,
        and the distinction matters:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Simple Loss Payable Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a simple loss payable clause, the lender&rsquo;s rights are <em>derivative</em> of
        the insured&rsquo;s. This means that if the insured&rsquo;s coverage is void &mdash; due
        to fraud, misrepresentation, failure to cooperate, or any other policy violation &mdash;
        the lender&rsquo;s coverage is also void. The lender&rsquo;s rights rise and fall with
        the borrower&rsquo;s.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Standard Mortgage Clause (Lender&rsquo;s Loss Payable)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard mortgage clause, the lender&rsquo;s rights are <em>independent</em> of
        the insured&rsquo;s. Even if the borrower commits fraud, increases the hazard, fails to
        report a loss, or otherwise violates the policy, the lender&rsquo;s coverage remains
        intact. The standard mortgage clause essentially creates a separate, independent contract
        between the insurer and the lender.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why virtually every residential mortgage in the United States requires the standard
        mortgage clause rather than the simple loss payable clause. From the lender&rsquo;s
        perspective, a simple loss payable clause would leave their collateral unprotected any time
        the borrower did something to void coverage &mdash; which is precisely when the lender
        needs protection the most.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Standard Mortgage Clause Actually Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard mortgage clause contains several specific provisions. Each one gives the
        lender a particular right. Understanding these provisions helps you understand exactly what
        the mortgage company can and cannot do with your claim.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Lender&rsquo;s Interest Is Not Invalidated by the Borrower&rsquo;s Acts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The clause provides that the lender&rsquo;s interest shall not be invalidated by any act
        or neglect of the borrower. This is the core provision &mdash; the one that makes the
        standard mortgage clause &ldquo;standard.&rdquo; If the homeowner increases the hazard
        (for example, by storing flammable materials in the garage), fails to disclose a material
        change, or even commits arson, the lender&rsquo;s coverage survives. The insurer can deny
        the insured&rsquo;s claim and still owe the lender.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Real-world example:</strong> A homeowner commits arson. The insurer denies the
        homeowner&rsquo;s claim for obvious reasons. But the mortgage company still has a valid
        claim for the outstanding loan balance under the standard mortgage clause. The insurer
        pays the lender, then pursues subrogation against the borrower.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Lender Can File Its Own Proof of Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insured fails to file a{' '}
        <Link href="/resources/proof-of-loss" className="text-blue-700 underline hover:text-blue-900">
          sworn proof of loss
        </Link>
        , the lender has the right to file one on its own behalf. This protects the lender from a
        situation where the borrower abandons or neglects the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Real-world example:</strong> A borrower is in financial distress and stops
        communicating with the insurance company. The claim sits dormant. The lender, aware
        of the damage to its collateral, files a proof of loss to keep the claim moving. This
        ensures the lender can recover even if the borrower has walked away.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Lender Receives Advance Notice of Cancellation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard mortgage clause requires the insurer to provide the lender with at least 10
        days&rsquo; written notice before cancelling the policy (some states and some policies
        require 30 days). This gives the lender time to either ensure the borrower obtains
        replacement coverage or to take its own steps to protect its interest &mdash; including
        force-placing insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Real-world example:</strong> The insurer cancels a homeowner&rsquo;s policy for
        non-payment. The lender receives a 30-day advance notice. The lender contacts the
        borrower. If the borrower does not act, the lender force-places insurance and adds the
        premium to the borrower&rsquo;s escrow account.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Lender Can Pay the Premium
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insured defaults on the premium payment, the lender has the right to pay it and
        keep the coverage in force. The lender can then add that premium payment to the
        borrower&rsquo;s loan balance or escrow account.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Real-world example:</strong> A homeowner falls behind on premium payments and the
        policy is about to lapse. The lender pays the premium to keep the policy active, then
        bills the borrower. This is a less costly alternative to force-placed insurance and
        maintains the borrower&rsquo;s existing coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        After Paying the Lender, the Insurer Is Subrogated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer pays the lender under the standard mortgage clause &mdash; particularly
        in situations where the insured&rsquo;s own claim has been denied &mdash; the insurer
        steps into the lender&rsquo;s shoes and acquires the lender&rsquo;s rights against the
        borrower. This is called subrogation. It means the insurer can pursue the borrower for
        the amount it paid the lender.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Real-world example:</strong> The insurer denies the homeowner&rsquo;s claim for
        arson but pays the mortgage company $250,000 under the standard mortgage clause. The
        insurer is now subrogated to the lender&rsquo;s position and can pursue the borrower
        for $250,000.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Payment Is Made &ldquo;As Interests Appear&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a critical provision that many homeowners overlook. The standard mortgage clause
        provides that payment is to be made to the lender &ldquo;as interests may appear.&rdquo;
        This means the lender&rsquo;s interest is limited to the outstanding balance of the
        mortgage debt. The lender cannot claim more than what it is owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Real-world example:</strong> A home is destroyed with a $600,000 Coverage A limit.
        The outstanding mortgage balance is $200,000. The lender&rsquo;s interest &mdash; and the
        maximum it can claim under the endorsement &mdash; is $200,000. The remaining $400,000
        belongs to the insured. The lender has no right to hold, control, or benefit from the
        $400,000 that exceeds its debt.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Commercial Equivalent: CP 12 18
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In commercial property insurance, the equivalent mechanism is the ISO form CP 12 18
        &mdash; the <strong>Loss Payable Provisions</strong> endorsement. This endorsement offers
        three options for designating loss payees:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Option A &mdash; Loss Payable:</strong> A simple loss payable clause. The
          designated payee&rsquo;s rights are derivative of the insured&rsquo;s and can be
          defeated by any act of the insured that voids coverage.
        </li>
        <li>
          <strong>Option B &mdash; Lender&rsquo;s Loss Payable:</strong> This mirrors the
          residential standard mortgage clause. The lender&rsquo;s coverage is independent
          of the insured&rsquo;s acts or omissions. The endorsement specifically provides
          that coverage for the lender will not be invalidated by the borrower&rsquo;s acts,
          neglect, or breach of warranty.
        </li>
        <li>
          <strong>Option C &mdash; Contract of Sale:</strong> Used when property is being sold
          and the buyer has an insurable interest during the sale period.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial lenders almost universally require Option B. It is used for commercial
        mortgages, equipment financing, and any commercial lending arrangement where the lender
        wants its collateral protected regardless of what the borrower does. The principle is the
        same as in residential insurance: the lender wants its interest to survive the
        insured&rsquo;s mistakes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Lender Can Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard mortgage clause, the lender has the following rights:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>File its own proof of loss</strong> if the insured fails to do so.
        </li>
        <li>
          <strong>Receive joint payment</strong> on dwelling and other structures claims. Checks
          for structural damage (Coverage A and Coverage B) will typically be issued jointly to
          the insured and the lender.
        </li>
        <li>
          <strong>Receive cancellation and nonrenewal notices</strong> directly from the insurer,
          with advance notice before coverage terminates.
        </li>
        <li>
          <strong>Pay premiums</strong> to keep coverage in force if the insured defaults, then
          recover that cost from the borrower.
        </li>
        <li>
          <strong>Negotiate directly with the insurer</strong> regarding the claim on its own
          interest.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Lender Cannot Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The endorsement gives the lender specific rights, but those rights have limits.
        Understanding these limits is essential for any policyholder dealing with a mortgage
        company&rsquo;s loss draft department.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The lender cannot receive payment for more than the outstanding debt.</strong> Its
          interest is capped at the mortgage balance. Any proceeds above that amount belong
          entirely to the insured.
        </li>
        <li>
          <strong>The lender cannot hold excess proceeds indefinitely.</strong> When insurance
          proceeds exceed the outstanding loan balance, the lender has no right to retain the
          excess. California courts have addressed this principle &mdash; in{' '}
          <em>Schoolcraft v. Ross</em>, 81 Cal. App. 3d 75 (1978), the court recognized that a
          loss payee&rsquo;s interest is limited to the amount of its security interest, and
          proceeds beyond that belong to the property owner.
        </li>
        <li>
          <strong>The lender cannot require joint payment on coverages the endorsement does not
          apply to.</strong> The loss payable endorsement applies to the property &mdash; the
          dwelling and other structures. It does not apply to personal property (contents) or
          additional living expenses / fair rental value. If your insurer puts the lender&rsquo;s
          name on a contents check or an ALE check, that is an error and you should demand
          reissuance.
        </li>
        <li>
          <strong>The lender cannot hire a public adjuster on its own behalf</strong> to adjust
          the insured&rsquo;s claim. For more on this issue, see our article on{' '}
          <Link href="/resources/mortgage-company-public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            whether a mortgage company can hire a public adjuster
          </Link>.
        </li>
        <li>
          <strong>The lender is not an insured.</strong> This is a critical distinction. The lender
          is a third-party beneficiary with specific contractual rights under the endorsement. It
          is not a named insured, an additional insured, or an insured of any kind. It does not
          have the rights, duties, or protections that the policy grants to the insured. For more
          on the distinction between named insureds and other parties on the policy, see our
          article on{' '}
          <Link href="/resources/named-vs-additional-insured" className="text-blue-700 underline hover:text-blue-900">
            named insured vs. additional insured
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the endorsement&rsquo;s scope is critical because it determines which
        checks have the lender&rsquo;s name on them and which do not:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling)</strong> and <strong>Coverage B (Other Structures)</strong>{' '}
          checks will have the lender&rsquo;s name. These are the coverages the endorsement
          applies to, because these are the coverages that protect the lender&rsquo;s collateral.
        </li>
        <li>
          <strong>Coverage C (Personal Property / Contents)</strong> checks should{' '}
          <strong>not</strong> have the lender&rsquo;s name. Your personal belongings are not the
          lender&rsquo;s collateral. The endorsement does not extend to contents.
        </li>
        <li>
          <strong>Coverage D (Additional Living Expenses / Fair Rental Value)</strong> checks
          should <strong>not</strong> have the lender&rsquo;s name. ALE and FRV payments
          compensate the insured for living expenses and lost income &mdash; they have nothing
          to do with the lender&rsquo;s security interest in the structure.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company issues a contents check or an ALE check with the mortgage
        company&rsquo;s name on it, do not accept it. Contact the carrier and demand that the
        check be reissued in the insured&rsquo;s name only. This is not a matter of negotiation
        &mdash; it is a matter of the endorsement&rsquo;s plain language. The lender has no
        interest in your personal property or your living expenses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For dwelling and other structures payments, the mortgage company&rsquo;s loss draft
        department will control the release of funds. This process can be slow, frustrating, and
        bureaucratic. For a detailed look at how the loss draft process works and how to navigate
        it, see our article on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-blue-700 underline hover:text-blue-900">
          mortgage company holds on insurance proceeds
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Bank Files Its Own Proof of Loss &mdash; And Interests Conflict
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lender&rsquo;s right to file an independent proof of loss is a protective
        measure &mdash; but it can create a serious conflict of interest. The bank&rsquo;s
        proof of loss reflects the <em>bank&rsquo;s</em> interest, which is capped at the
        outstanding mortgage balance. The insured&rsquo;s interest is the full claim value.
        These numbers are often very different.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a homeowner who owes $200,000 on the mortgage and has $600,000 in dwelling
        damage. The insured&rsquo;s proof of loss should reflect $600,000 in damages. But the
        bank&rsquo;s interest is only $200,000 &mdash; and the bank may be willing to settle
        for that amount because once its loan is protected, it has no incentive to fight for
        the remaining $400,000 that belongs to the homeowner.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This misalignment is most dangerous when the bank files a proof of loss for a lower
        amount than the insured would claim. If the insurer settles with the bank at a
        reduced figure &mdash; perhaps in exchange for a release &mdash; the insured could
        find their claim compromised. The bank has no obligation to maximize the
        insured&rsquo;s recovery. It only needs to protect its own collateral interest.
      </p>

      <CalloutBox variant="warning" title="Protect Your Claim From the Bank's Settlement">
        <p>
          If you learn that your mortgage company has filed its own proof of loss or is
          communicating directly with the insurer about your claim, take immediate action.
          File your own proof of loss reflecting the full value of your damages. Notify the
          insurer in writing that the bank does not speak for you and that any settlement
          with the bank on its interest does not resolve your claim as the insured. Consult
          with a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            public adjuster
          </Link>{' '}
          or policyholder attorney to ensure your interests are protected independently of
          the lender&rsquo;s.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Common Misconception
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders assume that because the mortgage company&rsquo;s name is on the check,
        the mortgage company is somehow their partner or advocate on the claim. It is not. The
        mortgage company&rsquo;s interest is protecting its collateral &mdash; the physical
        property that secures the loan. The lender wants to make sure the building is rebuilt or
        repaired enough to protect its financial position. Whether you are fully compensated for
        your loss &mdash; whether you are &ldquo;made whole&rdquo; &mdash; is not the
        lender&rsquo;s concern.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a criticism of mortgage companies. It is a structural reality of the
        endorsement. The lender&rsquo;s loss payable endorsement exists to protect the lender,
        not the insured. The lender&rsquo;s rights under the endorsement are designed to
        safeguard the lender&rsquo;s investment. Your rights as the insured come from the
        policy itself and from the implied covenant of good faith and fair dealing &mdash; not
        from the mortgage clause.
      </p>

      <CalloutBox variant="important" title="The Lender Is Not Your Advocate">
        <p>
          The loss payable endorsement protects the lender. The insurer&rsquo;s duty of good
          faith runs to you, the insured &mdash; not to the mortgage company. When the carrier
          has discretion in how to allocate payments across coverage lines, that discretion
          should be exercised in your favor, not the lender&rsquo;s. How the insurer categorizes
          and allocates payments can directly affect how much money you receive free and clear
          versus how much gets routed through the lender&rsquo;s loss draft process. For more
          on how payment allocation can affect what money you receive free and clear, see our
          article on{' '}
          <Link href="/resources/coverage-allocation-over-limit-claims" className="text-blue-700 underline hover:text-blue-900">
            coverage allocation on over-limit claims
          </Link>.
        </p>
        <p className="mt-3">
          If the carrier is making allocation decisions that maximize the amount routed through
          the lender at your expense, that is a claims handling issue worth examining &mdash;
          and potentially a{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>{' '}
          issue.
        </p>
      </CalloutBox>

      <CalloutBox variant="important" title="Bottom Line">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The lender&rsquo;s name appears on your insurance check because of the standard
            mortgage clause in your policy &mdash; a requirement that traces back to your loan
            documents.
          </li>
          <li>
            The standard mortgage clause gives the lender independent rights that survive even
            if your own coverage is voided.
          </li>
          <li>
            The lender&rsquo;s interest is capped at the outstanding mortgage balance. Proceeds
            above that amount belong to you.
          </li>
          <li>
            The endorsement applies to structural coverages (Coverage A and B) &mdash; not to
            contents (Coverage C) or additional living expenses (Coverage D). If the lender&rsquo;s
            name appears on a contents or ALE check, demand reissuance.
          </li>
          <li>
            The lender is not your advocate. Its interest is in protecting its collateral, not in
            making you whole.
          </li>
          <li>
            Your rights come from the policy and the implied covenant of good faith &mdash; not
            from the mortgage clause. Know the difference.
          </li>
        </ul>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With Your Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your mortgage company is holding your insurance proceeds, if the carrier put the
          lender&rsquo;s name on a check it should not have, or if you need help navigating the
          loss draft process, contact us for guidance.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Consultation →
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, endorsements, and mortgage agreements vary by carrier,
          lender, and state. The standard mortgage clause language discussed in this article is
          representative of common industry provisions but may differ in your specific policy.
          California Insurance Code &sect; 2071 governs the standard fire policy mortgage clause
          in California; other states have their own statutory provisions. For advice about your
          specific situation, consult a licensed attorney. If you need a referral to an attorney
          experienced in insurance coverage disputes, a licensed Public Adjuster may be able to
          assist.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
