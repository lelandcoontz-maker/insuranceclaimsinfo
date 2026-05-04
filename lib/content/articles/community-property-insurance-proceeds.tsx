import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Community Property and Insurance Proceeds in California: Who Owns the Claim Money?',
  description:
    'California community property law directly affects who owns insurance proceeds after a loss. Learn how Family Code 760 applies to insurance claims, what happens when one spouse is on the mortgage and the other is the named insured, and how to protect your rights during separation, divorce, or disputed claims.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a California home is damaged by fire, water, or any other covered peril, the
        insurance claim can involve tens or hundreds of thousands of dollars. In most cases,
        policyholders are focused on the scope of the loss, the insurer&rsquo;s estimate, and
        the settlement amount. But there is a threshold question that many policyholders &mdash;
        and even some attorneys &mdash; overlook entirely: <strong>who actually owns the
        insurance proceeds?</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is a community property state. That designation has profound consequences for
        insurance claims on residential property. Whether the proceeds are community property or
        separate property determines who has the right to negotiate the claim, who must endorse
        the settlement check, who controls how the money is spent, and what happens if the
        spouses disagree. And when one spouse is on the mortgage while the other spouse is the
        named insured on the policy &mdash; a surprisingly common arrangement &mdash; the
        complications multiply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains the community property rules that apply to insurance proceeds in
        California, with particular attention to the mortgage/named insured mismatch, the
        practical realities of claim handling, and the legal framework that governs disputes
        between spouses, between policyholders and insurers, and between policyholders and
        lenders.
      </p>

      {/* ───────────────── SECTION 1 ───────────────── */}

      <h2
        id="california-community-property-basics"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        California Community Property: The Foundation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Family Code &sect; 760 establishes the fundamental rule: &ldquo;Except as
        otherwise provided by statute, all property, real or personal, wherever situated,
        acquired by a married person during the marriage while domiciled in this state is
        community property.&rdquo; This is a broad presumption. Unless property falls into one
        of the recognized exceptions, it belongs to the marital community &mdash; meaning both
        spouses own it equally, regardless of whose name appears on the title, the deed, the
        loan, or the insurance policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The recognized exceptions under Family Code &sect; 770 include property owned before
        marriage, property acquired during marriage by gift or inheritance, and the rents,
        issues, and profits of separate property. Everything else is presumed community.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This presumption is not merely a default that shifts when convenient. It is a powerful
        legal rule that requires clear and convincing evidence to overcome. And it applies with
        full force to insurance proceeds.
      </p>

      <CalloutBox variant="legal" title="Family Code &sect; 760 &mdash; The Community Property Presumption">
        <p>
          All property acquired during marriage while domiciled in California is community
          property. This includes the family home (if purchased during the marriage), the
          insurance policy on that home (if purchased with community funds), and the insurance
          proceeds paid on a claim against that policy. The presumption applies regardless of
          which spouse&rsquo;s name appears on the deed, the mortgage, or the policy.
        </p>
      </CalloutBox>

      {/* ───────────────── SECTION 2 ───────────────── */}

      <h2
        id="insurance-proceeds-follow-the-property"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Insurance Proceeds Follow the Character of the Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental rule in California is that <strong>insurance proceeds take on the same
        character as the property they are designed to protect</strong>. This is sometimes called
        the &ldquo;replacement theory&rdquo; or &ldquo;substitution theory&rdquo; of community
        property. The insurance payment steps into the shoes of the damaged property. If the
        property was community property, the proceeds are community property. If the property
        was separate property, the proceeds are separate property.
      </p>

      <h3 id="community-property-home" className="text-xl font-semibold text-[#1F3964] mb-3">
        Community Property Home &rarr; Community Property Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a married couple purchased a home during the marriage using community funds, that
        home is community property. When the home is damaged, the insurance proceeds paid for
        that damage are also community property &mdash; even if the insurance policy is in only
        one spouse&rsquo;s name, even if only one spouse filed the claim, and even if only one
        spouse negotiated the settlement. The proceeds belong to the community.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means both spouses have an equal ownership interest in the proceeds. Neither spouse
        can unilaterally decide to pocket the money, use it for a non-repair purpose, or refuse
        to apply it to the restoration of the community property home. Family Code &sect; 1100
        governs the management and control of community personal property (which includes
        insurance proceeds once they are paid), and it requires that each spouse act in good
        faith with respect to the other in managing community assets.
      </p>

      <h3
        id="separate-property-home"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Separate Property Home &rarr; Separate Property Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If one spouse owned a home before the marriage and maintained it as separate property
        throughout the marriage &mdash; meaning no transmutation, no commingling of title, and
        no community funds used for acquisition &mdash; then insurance proceeds for damage to
        that home are the separate property of the owning spouse. The other spouse generally has
        no ownership interest in those proceeds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, there are important nuances. If community funds were used to pay the insurance
        premiums on a separate property home, the non-owning spouse may have a reimbursement
        claim. And if community funds were used to pay down the mortgage, make improvements, or
        maintain the property, the community may have a reimbursement interest under Family Code
        &sect; 2640. These reimbursement claims do not convert the proceeds into community
        property, but they can give the community a financial interest in the settlement.
      </p>

      <h3
        id="mixed-character-property"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Mixed Character: The Pro Rata Approach
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many marriages, the home has a mixed character. Perhaps one spouse owned the property
        before the marriage but community funds were used to pay the mortgage during the
        marriage. Or perhaps a separate property down payment was combined with a community
        property mortgage. In these situations, the insurance proceeds are allocated pro rata
        between the separate and community interests based on the relative contributions to the
        property&rsquo;s equity. This allocation can be complex, and it often requires a
        forensic accountant or family law attorney to trace the funds.
      </p>

      {/* ───────────────── SECTION 3 ───────────────── */}

      <h2
        id="transmutation"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Transmutation: When Separate Property Becomes Community Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Transmutation is the legal process by which the character of property changes &mdash;
        from separate to community, from community to separate, or from one spouse&rsquo;s
        separate property to the other spouse&rsquo;s separate property. Under Family Code
        &sect; 852, a transmutation of real property is not valid unless it is made in writing
        by an express declaration that is made, joined in, consented to, or accepted by the
        spouse whose interest in the property is adversely affected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters for insurance claims because the character of the property at the time of
        the loss determines the character of the proceeds. If a spouse owned a home before
        marriage but later executed a valid transmutation (for example, by adding the other
        spouse to the deed with an express written agreement that the property is now community
        property), then the home &mdash; and by extension, the insurance proceeds &mdash; is
        community property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Importantly, simply adding a spouse to the title deed does <em>not</em> automatically
        constitute a transmutation. Under Family Code &sect; 852(a), the writing must contain
        an &ldquo;express declaration&rdquo; that is &ldquo;made, joined in, consented to, or
        accepted by the spouse whose interest in the property is adversely affected.&rdquo; A
        deed that merely adds a spouse&rsquo;s name without any language about changing the
        character of the property may not meet the statutory requirement.
      </p>

      <CalloutBox variant="warning" title="The Title Deed Alone Is Not Enough">
        <p>
          A common misconception is that putting both spouses&rsquo; names on the deed converts
          separate property into community property. Under California law, that is not
          necessarily true. Family Code &sect; 852 requires an express written declaration
          changing the character of the property. Without that declaration, the property may
          retain its original separate property character &mdash; even if both names appear on
          the title. This can have significant consequences for insurance claims if the property
          is later damaged.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, if a community property home is transmuted to one spouse&rsquo;s separate
        property through a valid written agreement, the insurance proceeds after a loss would be
        that spouse&rsquo;s separate property. However, courts scrutinize interspousal
        transmutation agreements carefully, particularly when one spouse claims the other gave
        up a community interest. The burden of proof falls on the spouse claiming the benefit
        of the transmutation.
      </p>

      {/* ───────────────── SECTION 4 ───────────────── */}

      <h2
        id="mortgage-named-insured-mismatch"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        The Mortgage/Named Insured Mismatch: One Spouse on the Loan, the Other on the Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most commonly encountered &mdash; and most poorly understood &mdash;
        complications in community property insurance claims. Here is the scenario: Spouse A is
        the borrower on the mortgage. Spouse B is the named insured on the homeowner&rsquo;s
        insurance policy. The home is community property. Both spouses live in the home. Then
        the home is damaged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This arrangement arises for many practical reasons. Perhaps Spouse A had better credit
        and qualified for the mortgage alone. Perhaps Spouse B handled the household insurance
        decisions and obtained the policy in their name. Perhaps the arrangement was suggested
        by a loan officer, an insurance agent, or an estate planner. Whatever the reason, the
        result is a three-way mismatch: the mortgage lender expects to deal with Spouse A (the
        borrower), the insurance company considers Spouse B its contractual counterpart (the
        named insured), and the law says both spouses own the home and the proceeds equally.
      </p>

      <CalloutBox variant="important" title="The Mismatch Creates Real Problems">
        <p>
          When one spouse is on the mortgage and the other is the named insured on the policy,
          the claim process becomes significantly more complicated. The lender, the insurer, and
          the spouses themselves may all have different expectations about who controls the
          process, who endorses the check, and how the money is applied. Understanding the legal
          framework is critical to avoiding costly mistakes.
        </p>
      </CalloutBox>

      <h3
        id="who-can-file-the-claim"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Who Has Authority to File the Claim?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance policy is a contract between the insurer and the named insured. In a
        standard homeowner&rsquo;s policy (such as the ISO HO-3 form), the &ldquo;named
        insured&rdquo; is the person or persons identified on the declarations page. If only
        Spouse B is the named insured, then Spouse B is the insurer&rsquo;s contractual
        counterpart and has the clearest authority to file the claim, communicate with the
        adjuster, submit documentation, and negotiate the settlement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the spouse of a named insured is typically an &ldquo;insured&rdquo; under the
        policy as well. Most homeowner&rsquo;s policies define &ldquo;insured&rdquo; to include
        the named insured&rsquo;s spouse if the spouse is a resident of the same household.
        This means Spouse A &mdash; even though not the <em>named</em> insured &mdash; is still
        an insured under the policy and has coverage rights. Spouse A has the right to make a
        claim for their own covered losses and to participate in the claims process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, either spouse can initiate the claim. Insurance companies generally accept
        a claim reported by any household member, particularly when the loss is obvious (such as
        a fire or flood). The named insured has primary authority over the policy&rsquo;s
        contractual provisions &mdash; such as the duty to cooperate, the duty to submit a proof
        of loss, and the right to invoke appraisal &mdash; but both spouses have substantive
        coverage rights as insureds.
      </p>

      <CalloutBox variant="info" title="Named Insured vs. An Insured">
        <p>
          There is a critical distinction between the &ldquo;named insured&rdquo; and &ldquo;an
          insured&rdquo; under a homeowner&rsquo;s policy. The named insured has the primary
          contractual relationship with the insurer. A resident spouse is typically &ldquo;an
          insured&rdquo; with coverage rights but not the same level of contractual authority.
          For a detailed explanation of this distinction, see{' '}
          <Link
            href="/resources/named-insured-vs-an-insured"
            className="text-[#2E74B5] hover:underline"
          >
            Named Insured vs. An Insured
          </Link>.
        </p>
      </CalloutBox>

      <h3
        id="lenders-loss-payable-endorsement"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        The Lender&rsquo;s Loss Payable Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the mismatch really matters. The mortgage lender required Spouse A (the
        borrower) to maintain insurance on the property as a condition of the loan. The deed of
        trust or mortgage agreement contains a covenant to insure, and the lender protects its
        interest through a <strong>loss payable endorsement</strong> (also called a
        &ldquo;mortgagee clause&rdquo; or &ldquo;lender&rsquo;s loss payable clause&rdquo;)
        attached to the insurance policy. That endorsement names the lender as a loss payee,
        meaning the lender is entitled to be included on claim payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The loss payable endorsement creates a separate, independent contract between the
        insurer and the lender. It survives even if the insurer could deny the claim against
        the named insured (for example, due to fraud or misrepresentation by the policyholder).
        The lender&rsquo;s interest is protected regardless of what happens between the insurer
        and the insured spouses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means the claim check will typically be made payable to three parties: the named
        insured (Spouse B), the borrower/mortgagor (Spouse A, because they are a resident
        insured and a community property co-owner), and the mortgage lender. All three must
        endorse the check before anyone can deposit it. For a full explanation of lender loss
        payable endorsements, see{' '}
        <Link
          href="/resources/lenders-loss-payable-endorsement"
          className="text-[#2E74B5] hover:underline"
        >
          Lender&rsquo;s Loss Payable Endorsement
        </Link>.
      </p>

      <h3
        id="joint-check-complications"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        How the Insurer Handles the Check
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer issues the claim payment, it typically issues a joint check. The
        question is: who gets named on it? Common practice varies by insurer, but the most
        conservative approach &mdash; and the one most insurers follow &mdash; is to include
        the named insured, any additional insureds, and the mortgage lender.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the mismatch scenario, the check will typically be made out to some combination of:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Spouse B</strong> (the named insured on the policy)
        </li>
        <li>
          <strong>Spouse A</strong> (the resident spouse/insured, and in many cases named as a
          co-owner on the claim file)
        </li>
        <li>
          <strong>The mortgage lender</strong> (by virtue of the loss payable endorsement)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        All parties named on the check must endorse it. If the check is above the lender&rsquo;s
        threshold (often $10,000 to $40,000, depending on the lender and the loan servicer),
        the lender may require the check to be sent to its loss draft department, where the
        funds are held in escrow and disbursed in stages as repairs are completed. The lender
        does this to protect its collateral &mdash; the home securing the loan.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete guide to how insurance claim checks work, including lender holds and
        endorsement requirements, see{' '}
        <Link
          href="/resources/insurance-checks"
          className="text-[#2E74B5] hover:underline"
        >
          Understanding Insurance Claim Checks
        </Link>.
      </p>

      <h3
        id="spouses-disagree"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        What Happens When the Spouses Disagree
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the scenario that turns a property insurance claim into a legal quagmire. Spouse
        A wants to use the insurance proceeds to repair the home &mdash; after all, their name
        is on the mortgage, and if the home isn&rsquo;t repaired, they remain liable for a
        mortgage on a damaged property. Spouse B wants to take the cash and move on &mdash;
        perhaps the marriage is strained, perhaps they want to relocate, or perhaps they believe
        the home isn&rsquo;t worth repairing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several legal rules come into play when spouses disagree about how to use insurance
        proceeds on a community property home:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Family Code &sect; 1100 &mdash; Good Faith Management:</strong> Each spouse
          has the right to manage and control community personal property (which includes
          insurance proceeds once paid). But each spouse must act in good faith with respect to
          the other. Using community insurance proceeds for personal purposes &mdash; instead of
          repairing the community property home &mdash; could be a breach of fiduciary duty.
        </li>
        <li>
          <strong>Family Code &sect; 1102 &mdash; Joinder Requirement:</strong> Both spouses
          must join in any transaction that involves the sale, conveyance, or encumbrance of
          community real property. While spending insurance proceeds is not technically a sale
          of real property, a failure to repair a damaged community property home effectively
          diminishes its value &mdash; which arguably implicates the same protective principles.
        </li>
        <li>
          <strong>The Mortgage Obligation:</strong> If Spouse A is on the mortgage, they are
          personally liable for the debt regardless of whether the home is repaired. Refusing
          to use insurance proceeds for repairs could expose Spouse A to financial harm &mdash;
          a damaged home with a full mortgage balance. This may give Spouse A standing to
          compel the use of proceeds for repairs.
        </li>
        <li>
          <strong>The Lender&rsquo;s Position:</strong> The mortgage lender has an independent
          interest in seeing the property restored. If the lender is holding the insurance
          proceeds in its loss draft escrow, it may simply refuse to release the funds for
          anything other than documented repairs. This effectively forces the issue &mdash; the
          money cannot be &ldquo;cashed out&rdquo; while the lender controls it.
        </li>
      </ol>

      <CalloutBox variant="warning" title="The Lender Can Force Repairs">
        <p>
          If the mortgage lender is holding insurance proceeds in a loss draft escrow account,
          neither spouse can unilaterally cash out the claim. The lender will release funds only
          for documented repairs to protect its collateral. This is true regardless of which
          spouse is the named insured and regardless of which spouse is on the mortgage. The
          lender&rsquo;s security interest in the property takes priority.
        </p>
      </CalloutBox>

      <h3
        id="community-property-presumption-applies"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        The Community Property Presumption Applies Regardless of Who Is on What Document
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the critical point that many people &mdash; including some insurance adjusters
        and loan officers &mdash; fail to grasp. If the home was acquired during the marriage
        as community property, then <strong>it does not matter</strong> which spouse is on the
        mortgage and which spouse is on the insurance policy. The community property presumption
        applies to both the home and the insurance proceeds regardless of how the paperwork is
        arranged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurer cannot refuse to pay a claim because the &ldquo;wrong spouse&rdquo; filed
        it. A lender cannot refuse to release funds because the named insured is not the
        borrower. These are common misconceptions, and when they arise, they need to be
        addressed firmly and with citations to the applicable law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 760 does not contain an exception for insurance policies or mortgage
        agreements. The community property presumption applies to all property acquired during
        the marriage, including the rights under an insurance contract purchased with community
        funds. The named insured designation on the policy is an administrative detail; it does
        not determine ownership of the proceeds.
      </p>

      <h3
        id="practical-tips-mismatch"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Navigating the Claim When There Is a Mismatch
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are in the situation where one spouse is on the mortgage and the other is the
        named insured, here are the practical steps to take:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Both spouses should be involved from day one.</strong> Do not let the insurer
          treat the claim as belonging exclusively to the named insured. Both spouses are
          insureds, both own the property, and both own the proceeds. Make sure the insurer has
          contact information for both spouses and that both are copied on all correspondence.
        </li>
        <li>
          <strong>Notify the lender immediately.</strong> The lender needs to know about the
          loss so it can track the claim and protect its collateral interest. Contact the
          lender&rsquo;s loss draft department (not the regular customer service line) and
          provide the claim number, the date of loss, and the insurance company&rsquo;s contact
          information.
        </li>
        <li>
          <strong>Request that the claim check be made payable to both spouses and the
          lender.</strong> If the insurer proposes to issue the check only to the named insured
          and the lender, object in writing. Both spouses have a community property interest in
          the proceeds and both should be named on the check.
        </li>
        <li>
          <strong>Understand the lender&rsquo;s loss draft process.</strong> If the claim
          exceeds the lender&rsquo;s threshold, the lender will likely hold the funds and
          release them in stages. Both spouses should understand this process and cooperate
          with the lender&rsquo;s inspection and disbursement requirements.
        </li>
        <li>
          <strong>If the spouses disagree about repairs, get legal advice before taking
          action.</strong> Neither spouse should unilaterally negotiate a settlement, cash out
          proceeds, or refuse to cooperate with repairs without understanding their legal
          obligations under community property law.
        </li>
        <li>
          <strong>Consider adding both spouses as named insureds.</strong> This is a prospective
          fix. If the policy currently names only one spouse, contact the insurance agent or
          company and ask to add the other spouse as a named insured. This eliminates the
          mismatch going forward and simplifies future claims.
        </li>
      </ol>

      {/* ───────────────── SECTION 4B: NAMED INSURED DIES ───────────────── */}

      <h2
        id="named-insured-dies"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        When the Named Insured Dies: The Insurer&rsquo;s Most Unconscionable Argument
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a scenario that plays out with disturbing regularity in the mortgage/named
        insured mismatch context, and it exposes one of the most aggressive positions an
        insurance company will take against a grieving family.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spouse A is the named insured on the homeowner&rsquo;s policy. Spouse B is on the
        mortgage, lives in the home, and has paid the premiums with community funds for years.
        The home is damaged. A claim is filed. Then Spouse A &mdash; the named insured &mdash;
        dies. Perhaps from the stress of the loss. Perhaps from an unrelated illness. Perhaps
        long after the loss occurred but before the claim is resolved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s response, in cases that have been reported across the country:
        <strong> the named insured is dead, the policy covered the named insured, and we have
        no obligation to the surviving spouse.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that again. The insurer collected premiums &mdash; paid with community funds &mdash;
        for years. The insurer insured a community property home. The surviving spouse lived in
        the home, maintained it, and may have been listed on the policy as a &ldquo;resident
        spouse&rdquo; or &ldquo;insured resident.&rdquo; And the insurer&rsquo;s position is
        that because the named insured died, the claim dies too.
      </p>

      <CalloutBox variant="warning" title="This Position Has No Basis in California Law">
        <p>
          An insurer that refuses to pay a surviving spouse on a community property claim because
          the named insured died is ignoring California&rsquo;s community property framework,
          the survival statutes under Code of Civil Procedure &sect;&sect; 377.20&ndash;377.34,
          the policy&rsquo;s own definition of &ldquo;insured,&rdquo; and decades of California
          law holding that insurance rights are property rights that survive death. This position
          should be challenged aggressively.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Insurer&rsquo;s Position Fails
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s argument collapses on multiple grounds:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>First: the surviving spouse is an insured under the policy.</strong> Standard
        homeowner&rsquo;s policies define &ldquo;insured&rdquo; to include the named insured
        and their spouse if a resident of the same household. Most HO-3 policies use language
        such as: &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to the named insured shown in
        the declarations and, if a resident of the same household, the spouse of the named
        insured. The surviving spouse who lived in the home was an insured in their own right
        &mdash; not through the deceased spouse, but independently, by operation of the policy
        language. The death of the named insured does not retroactively strip the surviving
        spouse of their status as an insured at the time of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Second: the insurance claim is a community property asset that survives
        death.</strong> Under Family Code &sect; 760, the rights under an insurance policy
        purchased with community funds during the marriage are community property. When a
        covered loss occurs, the right to receive insurance proceeds vests at the time of
        the loss &mdash; not at the time of payment. The surviving spouse owns a community
        property interest in that vested right. Code of Civil Procedure &sect; 377.20
        provides that &ldquo;a cause of action for or against a person is not lost by reason
        of the person&rsquo;s death.&rdquo; The insurance claim &mdash; whether characterized
        as a contract claim or a property right &mdash; survives.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Third: the surviving spouse has an independent insurable interest.</strong>{' '}
        California Insurance Code &sect; 281 defines insurable interest broadly: every interest
        in property, or any relation to it, that would cause the holder to suffer financial loss
        from its damage or destruction. The surviving spouse who lives in the community property
        home, holds title (or holds a community property interest regardless of whose name is on
        title), and depends on the home for shelter has a direct, independent insurable interest.
        The insurer cannot claim that this interest evaporated because the other spouse died.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Fourth: the insurer accepted premiums for the coverage.</strong> This is
        perhaps the most fundamental point. The insurer knew &mdash; or should have known
        &mdash; that it was insuring a community property home occupied by both spouses. It
        accepted community funds as premium payments. It issued a policy that by its own terms
        covered the resident spouse. Having accepted those premiums and issued that coverage,
        the insurer cannot disclaim its obligations because one of the two people it was
        covering has died. That is not how insurance works. That is not how contracts work.
        And in California, it may constitute a violation of the implied covenant of good faith
        and fair dealing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Practical Reality: What Happens and What to Do
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the named insured dies during a pending claim, the insurer may take several
        positions, ranging from the defensible to the unconscionable:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Requiring documentation of authority.</strong> The insurer may ask who has
          legal authority to act on behalf of the deceased insured&rsquo;s estate. This is
          legitimate. The surviving spouse should provide a copy of the death certificate and,
          depending on how title was held, either an affidavit of survivorship (for joint
          tenancy or community property with right of survivorship), the trust documents and
          successor trustee certification (for trust-held property), or letters testamentary
          or letters of administration (for property passing through probate). See our article
          on{' '}
          <Link href="/resources/pending-claim-policyholder-dies" className="text-[#2E74B5] hover:underline">
            pending claims when the policyholder dies
          </Link>{' '}
          for the full procedural guide.
        </li>
        <li>
          <strong>Issuing the check in the deceased&rsquo;s name.</strong> Some insurers will
          process the claim but issue the settlement check payable to the deceased insured. This
          creates a practical problem &mdash; the surviving spouse cannot deposit a check made
          out to a dead person &mdash; but it is not a denial. The surviving spouse should
          contact the insurer immediately and request reissuance in the appropriate name: the
          surviving spouse as an insured, the estate, or the successor trustee, as applicable.
        </li>
        <li>
          <strong>Denying the claim outright.</strong> This is the unconscionable position
          described above. If the insurer denies the claim on the ground that the named insured
          is dead, the surviving spouse should respond in writing, citing the policy&rsquo;s
          definition of &ldquo;insured&rdquo; (which includes the resident spouse), Family Code
          &sect; 760 (community property), Code of Civil Procedure &sect; 377.20 (survival of
          causes of action), and Insurance Code &sect; 281 (insurable interest). The surviving
          spouse should also file a complaint with the California Department of Insurance and
          consult both a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            public adjuster
          </Link>{' '}
          and an attorney.
        </li>
        <li>
          <strong>Attempting to re-underwrite the policy.</strong> Some insurers use the death
          of the named insured as a pretext to re-examine the policy, looking for grounds to
          rescind or void coverage based on alleged misrepresentations that the deceased can no
          longer explain or defend. This is particularly aggressive and may constitute{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            bad faith
          </Link>{' '}
          under California Insurance Code &sect; 790.03(h). The deceased insured&rsquo;s
          application representations were made when the policy was issued; the insurer accepted
          those representations and collected premiums for years. It does not get to re-litigate
          them after the insured is no longer alive to respond.
        </li>
      </ul>

      <CalloutBox variant="legal" title="The Surviving Spouse&rsquo;s Legal Position">
        <p>
          The surviving spouse&rsquo;s claim rests on independent grounds: (1) they are an
          &ldquo;insured&rdquo; under the policy&rsquo;s own definition, (2) they have an
          independent insurable interest under Insurance Code &sect; 281, (3) the insurance
          proceeds are community property under Family Code &sect; 760, and (4) the claim
          survives death under Code of Civil Procedure &sect; 377.20. The insurer must overcome
          all four of these independent bases to deny the claim &mdash; and it cannot overcome
          any of them.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Unmarried Partner Problem &mdash; and Common Law Marriage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The situation is far more dangerous for unmarried partners. If one partner is the named
        insured and the other is not &mdash; and they are not legally married &mdash; the
        surviving partner may have no status as an insured under the policy at all. Standard
        HO-3 policies extend &ldquo;insured&rdquo; status to a &ldquo;spouse,&rdquo; but not
        to an unmarried domestic partner. An unmarried partner who is not on the policy may
        have no contractual right to the insurance proceeds &mdash; even if they co-own the
        property, live in the home, and paid every premium.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the word &ldquo;spouse&rdquo; in the policy does not always mean what the insurer
        thinks it means. In states that recognize common law marriage, a couple who has lived
        together, held themselves out as married, and agreed to be married may be legally
        married &mdash; with all the rights of a ceremonial marriage &mdash; even though they
        never obtained a marriage license or had a wedding. And if they are legally married
        under common law, the surviving partner is a &ldquo;spouse&rdquo; under the policy,
        entitled to all the protections that status provides.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common Law Marriage: Which States Recognize It?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As of 2025, the following states recognize common law marriage created within their
        borders:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>Colorado</strong> &mdash; no specific duration required</li>
        <li><strong>Iowa</strong> &mdash; requires cohabitation and public declaration</li>
        <li><strong>Kansas</strong> &mdash; requires capacity, agreement, and holding out</li>
        <li><strong>Montana</strong> &mdash; requires capacity and cohabitation with reputation</li>
        <li><strong>New Hampshire</strong> &mdash; recognized only for inheritance purposes after
        three years of cohabitation</li>
        <li><strong>Oklahoma</strong> &mdash; recognized by case law</li>
        <li><strong>Rhode Island</strong> &mdash; recognized by case law</li>
        <li><strong>South Carolina</strong> &mdash; recognized by case law</li>
        <li><strong>Texas</strong> &mdash; called &ldquo;informal marriage&rdquo; under
        Texas Family Code &sect; 2.401</li>
        <li><strong>Utah</strong> &mdash; may be established by court order or administrative
        order under Utah Code &sect; 30-1-4.5</li>
        <li><strong>District of Columbia</strong> &mdash; recognized by case law</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several other states &mdash; including Alabama, Georgia, Idaho, Ohio, and Pennsylvania
        &mdash; previously recognized common law marriage but have since abolished it
        prospectively. However, common law marriages validly created in those states before
        the abolition date remain valid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical point for insurance purposes: <strong>the IRS recognizes common law
        marriages if the state where the couple resides (or where the marriage was created)
        recognizes them.</strong> If the IRS treats a couple as married, there is a strong
        argument that the insurance company must too. The policy says &ldquo;spouse.&rdquo;
        The state says they are married. The IRS agrees. The insurer does not get to apply
        a more restrictive definition of marriage than the state that governs the policy.
      </p>

      <CalloutBox variant="important" title="Full Faith and Credit: A Common Law Marriage Travels">
        <p>
          Under the Full Faith and Credit Clause of the U.S. Constitution, a common law marriage
          that is validly created in one state must generally be recognized by every other state
          &mdash; even states that do not themselves allow the creation of common law marriages.
          If a couple established a valid common law marriage in Colorado and then moved to
          California, California must recognize that marriage. This means the surviving partner
          in a common law marriage may have &ldquo;spouse&rdquo; status under a California
          homeowner&rsquo;s policy &mdash; if the common law marriage was validly created in a
          state that recognizes it.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California Does Not Recognize Common Law Marriage &mdash; With an Important Exception
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California abolished common law marriage in 1895. Family Code &sect; 300 requires a
        license and solemnization for a valid marriage. Two people who live together in California
        for decades, share everything, and hold themselves out as married are not legally married
        under California law &mdash; no matter how long they have been together or how married
        they appear to the outside world.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The exception:</strong> California will recognize a common law marriage that was
        validly created in another state. If a couple lived together in Texas, met the requirements
        for an informal marriage under Texas Family Code &sect; 2.401, and then relocated to
        California, California treats them as married. The marriage is valid. The surviving partner
        is a spouse. The policy&rsquo;s definition of &ldquo;insured&rdquo; includes them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For couples who have always lived in California and never established a common law
        marriage elsewhere, there are two alternative paths to &ldquo;spouse&rdquo; status
        under a homeowner&rsquo;s policy:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Registered Domestic Partnership.</strong> California Family Code &sect; 297.5
          provides that registered domestic partners have the same rights, protections, and
          benefits as married spouses. A registered domestic partner is a &ldquo;spouse&rdquo;
          for purposes of the policy&rsquo;s definition of insured. This applies regardless
          of the partners&rsquo; genders &mdash; California opened registered domestic
          partnerships to all couples effective January 1, 2020 (Senate Bill 30).
        </li>
        <li>
          <strong>The Putative Spouse Doctrine.</strong> Under Family Code &sect; 2251, a person
          who has a good faith belief that they are validly married &mdash; even if the marriage
          turns out to be void or voidable &mdash; has the rights of a spouse with respect to
          &ldquo;quasi-marital property.&rdquo; This is a narrow doctrine, but in the right
          circumstances, it can provide spouse-equivalent status for insurance purposes.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What This Means for Insurance Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The interaction between common law marriage and insurance claims plays out differently
        depending on where the couple lives:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>In a common law marriage state:</strong> If the couple meets the requirements
        for common law marriage, the surviving partner is a spouse. The policy covers them.
        The insurer&rsquo;s argument that &ldquo;they weren&rsquo;t married&rdquo; fails
        if the couple can demonstrate agreement to be married, cohabitation, and holding
        themselves out as married (the specific elements vary by state). The IRS recognizes
        the marriage. The state recognizes the marriage. The insurer must too.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>In California (or another state that does not create common law marriages):</strong>{' '}
        Unless the couple established a common law marriage in another state before moving to
        California, or unless they are registered domestic partners, or unless the putative spouse
        doctrine applies, the unmarried partner is not a &ldquo;spouse&rdquo; under the policy.
        This means they may not be an &ldquo;insured&rdquo; at all &mdash; and if the named
        insured dies, the surviving partner may have no contractual right to the insurance
        proceeds under the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The surviving partner may still have an{' '}
        <Link href="/resources/named-insured-vs-an-insured" className="text-[#2E74B5] hover:underline">
          insurable interest
        </Link>{' '}
        under Insurance Code &sect; 281 if they co-own the property or have a financial
        relationship with it. But insurable interest alone does not make someone an insured
        under the policy &mdash; it is a necessary condition for obtaining insurance, not a
        sufficient condition for collecting on someone else&rsquo;s policy.
      </p>

      <CalloutBox variant="tip" title="The Bottom Line for Unmarried Couples">
        <p>
          If you are an unmarried couple in California and only one partner is on the
          homeowner&rsquo;s policy, the other partner is likely not covered. Do not assume
          that living together is enough. Either get married, register as domestic partners
          under Family Code &sect; 297.5, or &mdash; at minimum &mdash; make sure both
          partners are listed as named insureds on the policy. This is a simple endorsement
          that most insurers will add for free. The cost of not doing it can be the entire
          claim.
        </p>
      </CalloutBox>

      {/* ───────────────── SECTION 5 ───────────────── */}

      <h2
        id="family-code-1100"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Family Code &sect; 1100: Management and Control of Community Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 1100 is the primary statute governing how community property is
        managed during an intact marriage. Subdivision (a) provides that either spouse has the
        management and control of the community personal property, with certain exceptions. But
        subdivision (e) imposes a critical limitation: each spouse must act in &ldquo;good
        faith&rdquo; with respect to the other spouse in the management and control of
        community property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Applied to insurance claims, this means either spouse can communicate with the insurer,
        provide documentation, negotiate the settlement, and take reasonable steps to protect
        the property. But neither spouse can act against the other&rsquo;s interest &mdash; for
        example, by settling a claim for less than its value, by diverting proceeds to personal
        use, or by refusing to cooperate with legitimate repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 1100(b) adds another important rule: a spouse may not make a gift of
        community personal property without the written consent of the other spouse. If one
        spouse settles an insurance claim for substantially less than its value &mdash; perhaps
        to speed up the process or avoid conflict &mdash; the other spouse could argue that the
        undervalued settlement constituted a constructive gift of community assets.
      </p>

      {/* ───────────────── SECTION 6 ───────────────── */}

      <h2
        id="family-code-1102"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Family Code &sect; 1102: Joinder in Real Property Transactions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 1102 requires that both spouses must join in executing any instrument
        by which community real property or any interest therein is leased for a longer period
        than one year, sold, conveyed, or encumbered. While an insurance claim settlement is not
        a sale or conveyance of real property, the underlying principle &mdash; that both
        spouses must participate in significant decisions affecting community real property
        &mdash; is directly relevant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this scenario: the community property home sustains major fire damage. The
        insurer offers a settlement. One spouse wants to accept the settlement, take the money,
        and sell the damaged property. The other spouse wants to reject the settlement, demand
        more, and rebuild. The decision about how to handle the insurance claim directly affects
        the community real property &mdash; its value, its condition, and its future. While
        &sect; 1102 technically applies to instruments of sale or conveyance, the spirit of the
        statute supports the position that both spouses must be involved in major claim
        decisions that affect the community home.
      </p>

      <CalloutBox variant="legal" title="Both Spouses Must Participate">
        <p>
          Under Family Code &sect;&sect; 1100 and 1102, both spouses have rights and obligations
          regarding community property. In the insurance claim context, this means both spouses
          should be involved in major claim decisions, both should review settlement offers, and
          neither should accept or reject a settlement without consulting the other. An insurer
          that negotiates exclusively with one spouse while ignoring the other is creating a
          potential liability issue.
        </p>
      </CalloutBox>

      {/* ───────────────── SECTION 7 ───────────────── */}

      <h2
        id="endorsement-requirements"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Claim Check Endorsement: Do Both Spouses Have to Sign?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer issues a claim payment on a community property home, the check should
        be made payable to both spouses (as community property co-owners and insureds) and the
        mortgage lender (if there is a loss payable endorsement). All named payees must endorse
        the check before it can be negotiated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer issues the check payable only to the named insured and the lender &mdash;
        omitting the non-named spouse &mdash; this creates a problem. The non-named spouse has
        a community property interest in the proceeds. If the named insured endorses the check
        and deposits it without the other spouse&rsquo;s knowledge or consent, the non-named
        spouse may have a claim against the named insured for breach of fiduciary duty under
        Family Code &sect; 1100, and potentially against the insurer for failing to protect the
        community interest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, most insurers will include both spouses on the check if they are aware that
        both are involved in the claim. To protect yourself, make sure the insurer knows from
        the outset that both spouses are insureds with a community property interest in the
        proceeds. Put this in writing. If necessary, cite Family Code &sect; 760 and the
        policy&rsquo;s definition of &ldquo;insured.&rdquo;
      </p>

      {/* ───────────────── SECTION 8 ───────────────── */}

      <h2
        id="separation-and-divorce"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Insurance Proceeds During Separation and Divorce
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When spouses are separated or in the process of divorcing, insurance claims on the
        community property home become dramatically more complicated. The community property
        presumption still applies until the date of separation (as defined in Family Code
        &sect; 70), but several additional rules come into play.
      </p>

      <h3
        id="date-of-separation"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        The Date of Separation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 771 provides that the earnings and accumulations of a spouse after
        the date of separation are the separate property of that spouse. But insurance proceeds
        are not &ldquo;earnings&rdquo; &mdash; they are compensation for damage to property.
        The character of insurance proceeds is determined by the character of the property, not
        by when the proceeds are received. If the home was community property at the time of the
        loss, the proceeds are community property regardless of whether the spouses have since
        separated.
      </p>

      <h3
        id="automatic-temporary-restraining-orders"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Automatic Temporary Restraining Orders (ATROs)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a petition for dissolution of marriage is filed in California, automatic temporary
        restraining orders (ATROs) take effect under Family Code &sect; 2040. These orders
        prohibit both spouses from transferring, encumbering, hypothecating, concealing, or
        disposing of any property (real or personal) &mdash; except in the usual course of
        business or for necessities of life &mdash; without the written consent of the other
        spouse or a court order.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a dissolution petition has been filed, neither spouse can unilaterally settle an
        insurance claim, negotiate away proceeds, or divert claim funds without potentially
        violating the ATROs. The insurance proceeds are community property, and the ATROs
        protect both spouses&rsquo; interests in those proceeds. A spouse who violates the
        ATROs by, for example, settling a claim without the other spouse&rsquo;s knowledge and
        pocketing the money, can face serious sanctions from the family court.
      </p>

      <h3
        id="pending-claims-in-divorce"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Pending Insurance Claims as Marital Assets
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance claim that has been filed but not yet resolved is itself a community asset.
        The right to receive insurance proceeds &mdash; a chose in action &mdash; is property
        that must be disclosed and divided in the dissolution proceedings. If one spouse is
        handling the insurance claim, they have a fiduciary duty under Family Code &sect; 1100
        to manage the claim in good faith and to keep the other spouse informed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are going through a divorce and there is a pending insurance claim on the
        community property home, make sure your family law attorney knows about the claim. The
        claim should be listed in the preliminary declaration of disclosure (Family Code
        &sect; 2104) and should be addressed in the marital settlement agreement or tried as
        part of the dissolution proceeding.
      </p>

      <CalloutBox variant="tip" title="Coordinate Your Attorneys">
        <p>
          If you are going through a divorce and have a pending insurance claim, you may need
          both a family law attorney and an insurance claim attorney (or a licensed public
          adjuster). The family law attorney handles the division of community property; the
          insurance professional handles the claim against the insurer. Make sure they are
          communicating with each other. A settlement of the insurance claim without input from
          the family law side &mdash; or a property division without considering the pending
          claim &mdash; can cost you significantly.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed guide to handling insurance claims during separation and divorce, see{' '}
        <Link
          href="/resources/divorce-separation-insurance-claims"
          className="text-[#2E74B5] hover:underline"
        >
          Insurance Claims During Divorce and Separation
        </Link>.
      </p>

      {/* ───────────────── SECTION 9 ───────────────── */}

      <h2
        id="putative-spouse-doctrine"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        The Putative Spouse Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California recognizes the putative spouse doctrine, which protects a person who has a
        good faith belief that they are lawfully married, even if the marriage is later
        determined to be void or voidable. Under Family Code &sect; 2251, a putative spouse
        acquires the same rights in property acquired during the putative marriage as a lawful
        spouse would have acquired as community property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This has direct implications for insurance claims. If a person is living in a home with
        someone they genuinely believe is their legal spouse, and the home is damaged, the
        putative spouse has the same community property rights in the insurance proceeds as a
        lawful spouse would have. The property acquired during the putative marriage is called
        &ldquo;quasi-marital property,&rdquo; and it is divided under the same rules as
        community property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key requirement is good faith: the putative spouse must have a genuine, objectively
        reasonable belief that they are married. If both parties knew the marriage was invalid,
        the doctrine does not apply. But if only one party knew (for example, if one spouse had
        a prior undissolved marriage), the innocent putative spouse is still protected.
      </p>

      {/* ───────────────── SECTION 10 ───────────────── */}

      <h2
        id="domestic-partners"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Registered Domestic Partners: The Same Rules Apply
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Family Code &sect; 297.5, registered domestic partners in California have the
        same rights, protections, and benefits as married spouses. This includes the community
        property rules. Property acquired during a registered domestic partnership while
        domiciled in California is community property, subject to the same presumptions and the
        same rules that apply to married couples.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means everything discussed in this article applies equally to registered domestic
        partners. Insurance proceeds on a community property home owned by domestic partners are
        community property. Both partners have the right to participate in the claim. Both must
        act in good faith. The mortgage/named insured mismatch creates the same complications.
        And the separation/dissolution rules are the same.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One practical issue that domestic partners may encounter more frequently than married
        spouses is the insurer&rsquo;s failure to recognize the partnership. A homeowner&rsquo;s
        policy that defines &ldquo;insured&rdquo; to include a &ldquo;spouse&rdquo; may or may
        not automatically extend that definition to a domestic partner, depending on the policy
        language and the insurer&rsquo;s practices. If your domestic partner is not recognized
        as an insured under your policy, contact your insurer or agent to correct this. Under
        California law, the coverage rights should be identical.
      </p>

      {/* ───────────────── SECTION 11 ───────────────── */}

      <h2
        id="reimbursement-claims"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Reimbursement Claims: Community Funds Paying for Separate Property Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When community funds are used to pay the insurance premiums on a separate property home,
        the community may have a reimbursement claim. This does not convert the insurance
        proceeds into community property, but it does create a community interest that must be
        accounted for.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The logic is straightforward: insurance premiums paid from community earnings reduce the
        community estate. If those premiums protect a separate property asset, the community has
        effectively subsidized the separate property owner&rsquo;s insurance coverage. When a
        claim is paid, the community has a right to be reimbursed for the premiums it funded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This reimbursement principle also extends to other community expenditures that benefit
        separate property. Under Family Code &sect; 2640, contributions to the acquisition or
        improvement of property in which the community or the other spouse has no ownership
        interest are subject to reimbursement. While &sect; 2640 is most commonly applied in
        divorce proceedings, the underlying principle &mdash; that community funds used to
        benefit separate property should be accounted for &mdash; applies in any context where
        the characterization of insurance proceeds is at issue.
      </p>

      <h3
        id="tracing-premiums"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Tracing Premium Payments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        To establish a community reimbursement claim, you must be able to trace the premium
        payments to a community property source. This typically means showing that the premiums
        were paid from a joint bank account funded by community earnings, or from one
        spouse&rsquo;s separate bank account that was funded with community income. Bank
        statements, cancelled checks, and automatic payment records are the key evidence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the premiums were paid from a commingled account &mdash; one that contains both
        community and separate funds &mdash; the tracing becomes more complex. California
        courts use established tracing methods (such as the exhaustion method and the direct
        tracing method) to determine whether a particular expenditure came from community or
        separate funds. A forensic accountant may be necessary in complicated cases.
      </p>

      {/* ───────────────── SECTION 12 ───────────────── */}

      <h2
        id="joint-ownership-scenarios"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Joint Ownership Beyond Marriage: Additional Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Community property rules apply specifically to married couples and registered domestic
        partners. But joint ownership of property occurs in many other contexts &mdash;
        siblings who co-own a family home, business partners who co-own commercial property,
        parent and adult child co-owners, and unrelated co-investors. These situations involve
        different legal frameworks (tenancy in common, joint tenancy, etc.) but raise similar
        practical questions about who controls the insurance claim and who owns the proceeds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive discussion of insurance claims involving jointly owned property
        outside the community property context, see{' '}
        <Link
          href="/resources/joint-ownership-insurance"
          className="text-[#2E74B5] hover:underline"
        >
          Joint Ownership and Insurance Claims
        </Link>.
      </p>

      {/* ───────────────── SECTION 13 ───────────────── */}

      <h2
        id="insurer-obligations"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        The Insurer&rsquo;s Obligations in Community Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies operating in California are charged with knowledge of California
        law, including community property law. An insurer cannot claim ignorance of the
        community property presumption as an excuse for mishandling a claim. Several specific
        obligations apply:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Duty to investigate ownership:</strong> When an insurer receives a claim on a
          residential property, it should determine who owns the property and what property
          regime applies. If the insureds are married and the property is in California, the
          community property presumption should be part of the analysis.
        </li>
        <li>
          <strong>Duty to communicate with all insureds:</strong> If both spouses are insureds
          under the policy (either as named insureds or as resident spouses), the insurer should
          communicate with both. Excluding one spouse from the claims process &mdash; even if
          the other spouse is the named insured &mdash; risks violating the excluded
          spouse&rsquo;s rights.
        </li>
        <li>
          <strong>Duty to issue payment appropriately:</strong> Claim payments on community
          property should be made payable to both community property owners (and the lender, if
          applicable). Issuing a check solely to the named insured when the insurer knows the
          proceeds are community property could facilitate a breach of the non-named
          spouse&rsquo;s community property rights.
        </li>
        <li>
          <strong>California Fair Claims Settlement Practices Regulations:</strong> California
          Code of Regulations, Title 10, &sect; 2695.7 requires insurers to disclose all
          benefits, coverages, and time limits that may apply to a claim. This includes any
          endorsement requirements or conditions that affect how proceeds are paid and to whom.
        </li>
      </ul>

      <CalloutBox variant="important" title="Hold the Insurer Accountable">
        <p>
          If an insurance company issues a claim check solely to the named insured spouse and
          excludes the other spouse who has a community property interest, document the issue in
          writing and demand a corrected check. Cite Family Code &sect; 760 (community property
          presumption), the policy&rsquo;s definition of &ldquo;insured,&rdquo; and the
          California Fair Claims Settlement Practices Regulations. If the insurer refuses to
          correct the issue, contact a licensed public adjuster or an attorney.
        </p>
      </CalloutBox>

      {/* ───────────────── SECTION 14 ───────────────── */}

      <h2
        id="special-scenarios"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Special Scenarios
      </h2>

      <h3
        id="premarital-home-postmarital-loss"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Premarital Home, Postmarital Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If one spouse owned the home before the marriage and the home is damaged after the
        marriage, the insurance proceeds are generally the separate property of the owning
        spouse &mdash; because the proceeds follow the character of the property. However, if
        community funds were used during the marriage to pay the mortgage, make improvements,
        or pay insurance premiums, the community may have reimbursement claims that attach to
        the proceeds.
      </p>

      <h3
        id="inheritance-home"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Home Received by Gift or Inheritance During Marriage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property received by one spouse as a gift or inheritance during the marriage is that
        spouse&rsquo;s separate property under Family Code &sect; 770. If the inherited home is
        damaged, the insurance proceeds are the inheriting spouse&rsquo;s separate property.
        Again, community reimbursement claims may apply if community funds were used to maintain,
        improve, or insure the property.
      </p>

      <h3
        id="refinanced-property"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Refinanced Property with Changed Borrower
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common scenario involves a home that was originally purchased by one spouse, then
        refinanced during the marriage with both spouses on the new loan. The refinancing does
        not by itself change the character of the property. Adding a spouse to the mortgage does
        not create a transmutation under Family Code &sect; 852 unless there is an accompanying
        express written declaration changing the character of the property. However, if the
        refinancing involved adding the second spouse to the title deed with appropriate
        transmutation language, the character may have changed.
      </p>

      <h3
        id="insurance-policy-changes"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Mid-Marriage Insurance Policy Changes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the named insured on the policy changes during the marriage. Perhaps the
        policy was originally in one spouse&rsquo;s name and was later changed to the other
        spouse&rsquo;s name, or to both names, or to a trust. These changes affect who is the
        contractual counterpart of the insurer but do not change the community property
        character of the proceeds. The named insured designation is relevant for policy
        administration, but the community property presumption controls ownership of the
        proceeds.
      </p>

      {/* ───────────────── SECTION 15 ───────────────── */}

      <h2
        id="liability-coverage-distinction"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Property Damage Proceeds vs. Liability Proceeds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article focuses on first-party property damage claims &mdash; Coverage A
        (dwelling), Coverage B (other structures), Coverage C (personal property), and Coverage
        D (loss of use). The community property analysis for these coverages is straightforward:
        the proceeds follow the character of the property insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Liability coverage (Coverage E in a standard homeowner&rsquo;s policy) presents
        different questions. If one spouse is liable for negligence that causes injury to a
        third party, the liability payment protects the insured spouse from personal liability.
        Whether the underlying liability is a community or separate obligation depends on
        whether the negligent act occurred within the scope of the marital community &mdash;
        which is a separate and complex analysis beyond the scope of this article.
      </p>

      {/* ───────────────── SECTION 16 ───────────────── */}

      <h2
        id="contents-claims"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Personal Property (Contents) Claims and Community Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The community property analysis applies not just to the dwelling but also to personal
        property (contents) inside the home. Items acquired during the marriage with community
        funds are community property. Items owned before the marriage or received by gift or
        inheritance are separate property. When a loss destroys both community and separate
        personal property, the insurance proceeds must be allocated accordingly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this allocation is often made during the contents inventory process. Each
        item should be classified as community or separate property. Community property items
        generate community property insurance proceeds; separate property items generate
        separate property proceeds. This classification is particularly important during a
        divorce, where the contents claim may be the largest liquid asset in the marital estate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For guidance on documenting and claiming personal property losses, see{' '}
        <Link
          href="/resources/contents-claims"
          className="text-[#2E74B5] hover:underline"
        >
          Contents Claims
        </Link>.
      </p>

      {/* ───────────────── SECTION 17 ───────────────── */}

      <h2
        id="loss-of-use"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Loss of Use (Coverage D) and Community Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D (loss of use or additional living expense) provides funds for temporary
        housing and increased living costs while the home is being repaired. If the damaged home
        is community property, the Coverage D benefits are community property. Both spouses have
        an equal right to the additional living expense payments, and both spouses&rsquo; living
        expenses during the displacement period are covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This becomes contentious when spouses separate during the displacement period. If one
        spouse moves out and the other remains in temporary housing, questions arise about who
        is entitled to the ALE payments. The answer depends on the circumstances, but the
        starting point is that ALE benefits are community property &mdash; they exist because
        the community property home is uninhabitable. Both spouses may need temporary housing,
        and the policy may cover both sets of expenses up to the Coverage D limits.
      </p>

      {/* ───────────────── SECTION 18 ───────────────── */}

      <h2
        id="practical-recommendations"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Practical Recommendations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a married homeowner in California &mdash; or a registered domestic partner
        &mdash; here are the steps you should take to protect your community property interest
        in insurance proceeds:
      </p>

      <h3
        id="before-a-loss"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        Before a Loss Occurs
      </h3>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Review your policy declarations page.</strong> Confirm who is listed as the
          named insured. If only one spouse is named, consider adding the other. Having both
          spouses as named insureds eliminates confusion about who has authority over the claim.
        </li>
        <li>
          <strong>Compare the policy to the mortgage.</strong> If one spouse is on the mortgage
          and the other is the named insured, understand that this mismatch will create
          complications in a claim. Consider whether it makes sense to align the two &mdash;
          either by refinancing to add the named insured to the mortgage, or by changing the
          named insured to match the borrower, or (best practice) by listing both spouses on
          both documents.
        </li>
        <li>
          <strong>Understand your property&rsquo;s character.</strong> Is the home community
          property, separate property, or mixed? If you&rsquo;re unsure, consult a family law
          attorney. The characterization determines who owns the insurance proceeds.
        </li>
        <li>
          <strong>Keep records of premium payments.</strong> Document how insurance premiums are
          paid &mdash; from which account, with whose funds. This establishes the community or
          separate character of the insurance contract itself and may support a reimbursement
          claim later.
        </li>
        <li>
          <strong>Verify the loss payable endorsement.</strong> If there is a mortgage, confirm
          that the loss payable endorsement correctly identifies the lender. An outdated
          endorsement (naming a prior lender after a refinance) can delay claim payments.
        </li>
      </ol>

      <h3
        id="after-a-loss"
        className="text-xl font-semibold text-[#1F3964] mb-3"
      >
        After a Loss Occurs
      </h3>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Both spouses should be involved from the start.</strong> File the claim
          together. Attend the adjuster&rsquo;s inspection together. Review all correspondence
          together. Make claim decisions together. This protects both spouses&rsquo; community
          property interests and prevents one spouse from unilaterally settling for less than
          the claim is worth.
        </li>
        <li>
          <strong>Notify the lender.</strong> Contact the lender&rsquo;s loss draft department
          promptly. Provide the claim number and insurer contact information. Ask about the
          lender&rsquo;s disbursement process and threshold amounts.
        </li>
        <li>
          <strong>Insist that the claim check include both spouses.</strong> If the insurer
          proposes to issue the check only to the named insured, object in writing. Both
          spouses have a community property interest in the proceeds.
        </li>
        <li>
          <strong>Document everything.</strong> Keep copies of all correspondence, estimates,
          inspections, checks, and settlement documents. In a community property dispute, the
          paper trail is critical.
        </li>
        <li>
          <strong>If the marriage is in trouble, get legal advice immediately.</strong> An
          insurance claim on a community property home during a separation or divorce requires
          coordination between the family law process and the insurance claim process. Do not
          try to handle this on your own.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Hire a Licensed Public Adjuster">
        <p>
          A licensed public adjuster works exclusively for the policyholder &mdash; never for
          the insurance company. In community property disputes, a public adjuster can serve
          as a neutral claims professional who maximizes the total recovery for the marital
          community, regardless of which spouse is the named insured. This is particularly
          valuable when the spouses disagree, because the public adjuster&rsquo;s focus is on
          getting the highest possible settlement from the insurer, which benefits both spouses.
        </p>
      </CalloutBox>

      {/* ───────────────── SECTION 19 ───────────────── */}

      <h2
        id="common-insurer-mistakes"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Common Insurer Mistakes in Community Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Based on years of claim handling experience, these are the most common mistakes
        insurers make in community property claims &mdash; and the arguments you should make
        in response:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>&ldquo;We can only deal with the named insured.&rdquo;</strong> Incorrect.
          The non-named spouse is an insured under the policy (as a resident spouse) and a
          community property co-owner of the proceeds. The insurer is obligated to communicate
          with all insureds.
        </li>
        <li>
          <strong>&ldquo;The check goes to the named insured only.&rdquo;</strong> Incorrect
          for community property. The proceeds are community property, and both spouses have an
          ownership interest. The check should be payable to both spouses (and the lender, if
          applicable).
        </li>
        <li>
          <strong>&ldquo;Only the person on the mortgage can authorize repairs.&rdquo;</strong>
          {' '}Incorrect. Either spouse can authorize repairs to community property under Family
          Code &sect; 1100. The mortgage borrower designation does not determine who can make
          repair decisions.
        </li>
        <li>
          <strong>&ldquo;We need both spouses to agree before we can proceed.&rdquo;</strong>
          {' '}This one is more nuanced. The insurer has valid concerns about paying on a claim
          where the insureds disagree. But the insurer cannot use a spousal disagreement as an
          excuse to delay or deny the claim. The insurer&rsquo;s obligation is to investigate
          promptly, determine coverage, and pay the amount owed. Disputes between the spouses
          about how to use the proceeds are a family law matter, not a coverage matter.
        </li>
        <li>
          <strong>&ldquo;We settled with the named insured; the claim is closed.&rdquo;</strong>
          {' '}If the non-named spouse did not agree to the settlement and the proceeds are
          community property, the claim is not necessarily resolved. The non-named spouse may
          have a separate right to challenge the settlement or seek additional compensation.
        </li>
      </ul>

      {/* ───────────────── SECTION 20 ───────────────── */}

      <h2
        id="when-you-need-an-attorney"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        When You Need an Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every community property insurance claim requires legal representation. If both
        spouses agree on how to handle the claim and there are no complications, the claim can
        proceed normally with both spouses participating. But there are several situations where
        legal representation is essential:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The spouses are separated or divorcing, and they disagree about the insurance claim
        </li>
        <li>
          One spouse has settled the claim without the other spouse&rsquo;s knowledge or consent
        </li>
        <li>
          The insurer is refusing to include both spouses on the claim check
        </li>
        <li>
          There is a dispute about whether the property is community or separate
        </li>
        <li>
          A transmutation may have occurred, and the character of the property is unclear
        </li>
        <li>
          Community funds were used to pay premiums or make improvements on separate property,
          and a reimbursement claim may exist
        </li>
        <li>
          The insurer is using the spousal disagreement as a pretext to delay or deny the claim
        </li>
        <li>
          One spouse suspects the other of diverting or concealing insurance proceeds
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In these situations, you may need a family law attorney, an insurance bad faith
        attorney, or both. A licensed public adjuster can also help by handling the claim
        negotiation with the insurer while the legal issues are resolved.
      </p>

      {/* ───────────────── SECTION 21 ───────────────── */}

      <h2
        id="statutory-summary"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Key Statutes at a Glance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following California statutes are most relevant to community property and insurance
        proceeds. All citations are to the California Family Code unless otherwise noted.
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Family Code &sect; 760</strong> &mdash; Community property presumption: all
          property acquired during marriage is community property
        </li>
        <li>
          <strong>Family Code &sect; 770</strong> &mdash; Separate property defined: property
          owned before marriage, acquired by gift or inheritance, rents and profits of separate
          property
        </li>
        <li>
          <strong>Family Code &sect; 771</strong> &mdash; Earnings after separation are separate
          property
        </li>
        <li>
          <strong>Family Code &sect; 852</strong> &mdash; Transmutation requirements: express
          written declaration required
        </li>
        <li>
          <strong>Family Code &sect; 1100</strong> &mdash; Management and control of community
          personal property; good faith duty
        </li>
        <li>
          <strong>Family Code &sect; 1102</strong> &mdash; Joinder required for transactions
          involving community real property
        </li>
        <li>
          <strong>Family Code &sect; 2040</strong> &mdash; Automatic temporary restraining
          orders upon filing for dissolution
        </li>
        <li>
          <strong>Family Code &sect; 2104</strong> &mdash; Preliminary declaration of
          disclosure requirements
        </li>
        <li>
          <strong>Family Code &sect; 2251</strong> &mdash; Putative spouse doctrine
        </li>
        <li>
          <strong>Family Code &sect; 2640</strong> &mdash; Reimbursement of separate property
          contributions
        </li>
        <li>
          <strong>Family Code &sect; 297.5</strong> &mdash; Domestic partners have the same
          rights as spouses
        </li>
        <li>
          <strong>California Insurance Code &sect; 281</strong> &mdash; Definition of insurable
          interest in property
        </li>
        <li>
          <strong>California Code of Regulations, Title 10, &sect; 2695.7</strong> &mdash; Fair
          Claims Settlement Practices
        </li>
      </ul>

      {/* ───────────────── SECTION 22 ───────────────── */}

      <h2
        id="conclusion"
        className="text-2xl font-bold text-[#1F3964] mb-4"
      >
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Community property law and insurance claims intersect in ways that many policyholders
        &mdash; and many insurance professionals &mdash; do not anticipate. The fundamental
        rule is simple: insurance proceeds take on the character of the property they replace.
        Community property home, community property proceeds. But the practical application of
        that rule can be extraordinarily complex, particularly when one spouse is on the
        mortgage and the other is the named insured, when the spouses are separating or
        divorcing, or when the character of the property itself is disputed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important takeaway is that <strong>both spouses must be involved in the
        insurance claim process</strong>. Neither spouse should be excluded, and neither should
        act unilaterally. The community property presumption protects both spouses equally, and
        the insurer has an obligation to respect that presumption. If the insurer is not
        cooperating, or if the spouses cannot agree, get professional help &mdash; whether
        that is a licensed public adjuster, a family law attorney, an insurance bad faith
        attorney, or all three.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For related topics, see:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <Link
            href="/resources/divorce-separation-insurance-claims"
            className="text-[#2E74B5] hover:underline"
          >
            Insurance Claims During Divorce and Separation
          </Link>
        </li>
        <li>
          <Link
            href="/resources/joint-ownership-insurance"
            className="text-[#2E74B5] hover:underline"
          >
            Joint Ownership and Insurance Claims
          </Link>
        </li>
        <li>
          <Link
            href="/resources/named-insured-vs-an-insured"
            className="text-[#2E74B5] hover:underline"
          >
            Named Insured vs. An Insured
          </Link>
        </li>
        <li>
          <Link
            href="/resources/lenders-loss-payable-endorsement"
            className="text-[#2E74B5] hover:underline"
          >
            Lender&rsquo;s Loss Payable Endorsement
          </Link>
        </li>
      </ul>
    </>
  )
}
