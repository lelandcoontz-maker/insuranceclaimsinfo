import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Marital Property and Insurance Claims in California: Divorce, Separation, Community Property, and Spousal Authority',
  description:
    'A comprehensive guide to the California rules that govern insurance claims on marital property — community property and separate property, the mortgage/named-insured mismatch, the innocent co-insured doctrine and spousal arson, what happens when the named insured dies, the rights of domestic partners and unmarried couples, and the practical steps to keep a claim alive when a marriage is ending.',
  summary:
    'Divorce and separation complicate property claims through community vs. separate property rules, named-insured mismatches, and the innocent co-insured doctrine. California law offers ways to keep a claim alive when a marriage is ending; act to protect your interest.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance claims are stressful enough on their own. Add a divorce or separation to the
        mix, and the process becomes exponentially more complicated &mdash; and more dangerous.
        When spouses are separating, neither party is thinking about the fine print of a
        homeowner&rsquo;s policy. But they should be. A pending insurance claim during a divorce
        can be worth tens or hundreds of thousands of dollars, and if neither spouse is paying
        attention, that money can be delayed, reduced, or lost entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the insurance issues that arise when marriages collide with property
        claims &mdash; not just at the moment of divorce, but throughout the life of any marital
        or quasi-marital property arrangement in California. It addresses the foundational
        community-property rules that govern who owns the insurance proceeds, the
        mortgage/named-insured mismatch that creates problems even in intact marriages, the
        spousal arson and innocent co-insured doctrine that protects the spouse who did nothing
        wrong, what happens to the claim if the named insured dies, the unique rights and
        vulnerabilities of unmarried partners and registered domestic partners, the
        community-reimbursement claims that arise when community funds maintain separate
        property, and the practical steps both spouses should take during separation and divorce
        to keep the claim alive. Whether you are a policyholder, a family law attorney, or an
        insurance coverage attorney, this is the landscape you need to understand.
      </p>

      <h2 id="pending-claims-during-divorce" className="text-2xl font-bold text-[#1F3964] mb-4">
        Pending Insurance Claims During Divorce Proceedings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A house fire, a burst pipe, a tree through the roof &mdash; any of these can happen
        while a divorce is pending. When they do, the insurance claim becomes a marital asset,
        and the claim itself becomes subject to the same property division rules as every other
        asset in the marriage. The problem is that insurance claims do not pause because a divorce
        is filed. The insurer has its own timelines, its own deadlines, and its own process. If
        neither spouse is managing the claim because each assumes the other is handling it &mdash;
        or because neither wants to cooperate with the other &mdash; the claim can stall, expire,
        or be settled for far less than it is worth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Family Code &sect; 2040, from the date a petition for dissolution is
        filed, neither party may dispose of community property without the written consent of
        the other party or a court order. This applies to insurance claim proceeds as well.
        Settling an insurance claim for a low amount or cashing an insurance check and spending
        the money without the other spouse&rsquo;s knowledge or consent can constitute a breach
        of fiduciary duty under Family Code &sect; 1101.
      </p>

      <CalloutBox variant="important" title="Automatic Temporary Restraining Orders (ATROs)">
        <p>
          In California, when a petition for dissolution is filed, automatic temporary
          restraining orders (ATROs) go into effect under Family Code &sect; 2040. Among other
          things, these orders prohibit both parties from destroying, transferring, concealing,
          or disposing of community property. Insurance claim proceeds from a community property
          home are community property. Settling a claim or endorsing a check without the other
          spouse&rsquo;s involvement may violate the ATROs.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is another timing problem. Insurance policies have deadlines baked into them &mdash;
        deadlines for reporting losses, deadlines for submitting proofs of loss, deadlines for
        completing repairs. The divorce court operates on its own schedule, which has nothing to
        do with the insurance policy&rsquo;s requirements. If the divorce drags on for months or
        years, the insurance claim deadlines do not wait. Both spouses have an obligation to
        preserve the value of the community estate, and allowing an insurance claim to lapse
        because of a marital dispute can result in liability to the spouse who let it happen.
      </p>

      <h2 id="who-has-authority" className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Has Authority to File, Negotiate, and Settle the Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common questions that arises when divorce and insurance claims
        intersect, and the answer depends on the policy language, the type of loss, and the
        stage of the divorce.
      </p>

      <h3 id="named-insured-authority" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Named Insured vs. &ldquo;An Insured&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies distinguish between the <strong>named insured</strong> (the
        person or persons listed on the declarations page) and <strong>&ldquo;an
        insured&rdquo;</strong> (which typically includes the named insured&rsquo;s spouse if
        they are a resident of the same household). This distinction matters enormously in the
        divorce context. The named insured typically has broad authority to file claims, submit
        documentation, negotiate with the adjuster, and accept settlement offers. A spouse who
        is merely &ldquo;an insured&rdquo; under the policy may have standing to file a claim
        and cooperate with the investigation, but the insurer will often look to the named
        insured as the primary point of contact for settlement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper analysis of the critical difference between the named insured and
        other insureds under the policy, see our article on{' '}
        <Link href="/resources/named-insured-vs-an-insured" className="text-[#2E74B5] hover:underline">
          Named Insured vs. &ldquo;An Insured&rdquo;: Why the Distinction Matters
        </Link>.
      </p>

      <h3 id="both-spouses-named" className="text-xl font-semibold text-[#1F3964] mb-3">
        When Both Spouses Are Named Insureds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If both spouses are listed as named insureds on the declarations page, both have equal
        authority under the policy to file claims, negotiate, and communicate with the insurer.
        This can create a practical nightmare during a contested divorce. One spouse may accept a
        settlement offer that the other spouse considers inadequate. One spouse may provide a
        recorded statement that contradicts the other spouse&rsquo;s account. One spouse may
        authorize repairs that the other spouse has not approved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When both spouses are named insureds and the marriage is dissolving, the insurer is
        caught in the middle. The carrier generally cannot settle with one named insured over
        the objection of the other, but it also cannot be expected to mediate a marital dispute.
        The practical solution is often for the divorce court to designate one spouse as having
        authority over the insurance claim, or for the spouses to agree on joint management of
        the claim as part of their temporary orders.
      </p>

      <h3 id="only-one-named" className="text-xl font-semibold text-[#1F3964] mb-3">
        When Only One Spouse Is the Named Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If only one spouse is the named insured, the other spouse&rsquo;s status depends on
        whether they are still a &ldquo;resident of the same household.&rdquo; Most standard
        homeowner policies define &ldquo;insured&rdquo; to include the named insured&rsquo;s
        spouse only if they reside in the same household. Once a spouse moves out &mdash; which
        frequently happens during a separation &mdash; they may lose their status as an insured
        under the policy entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean the non-named spouse loses their interest in the claim proceeds.
        If the home is community property, the insurance proceeds are community property
        regardless of whose name is on the policy. But the non-named spouse may find that the
        insurer refuses to deal with them directly, directing all communications and payments to
        the named insured. This is a dangerous situation that requires immediate attention in the
        divorce proceedings.
      </p>

      <CalloutBox variant="warning" title="Losing &ldquo;Insured&rdquo; Status by Moving Out">
        <p>
          If you move out of the marital home during a separation, you may lose your status as
          &ldquo;an insured&rdquo; under the homeowner&rsquo;s policy. This does not extinguish
          your community property interest in the claim proceeds, but it may limit your ability
          to communicate directly with the insurer, file a proof of loss, or contest a lowball
          settlement. If you are the non-named spouse and you are moving out, address the
          insurance claim in your temporary orders <em>before</em> you leave.
        </p>
      </CalloutBox>

      <h2 id="intentional-damage-estranged-spouse" className="text-2xl font-bold text-[#1F3964] mb-4">
        Intentional Damage by an Estranged Spouse: The Innocent Co-Insured Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most devastating scenarios in divorce-related insurance disputes is when one
        spouse intentionally damages or destroys the marital home &mdash; whether out of spite,
        to collect insurance proceeds, or to prevent the other spouse from getting the property.
        Every homeowner&rsquo;s policy excludes intentional loss. The standard ISO language
        states that the insurer will not pay for loss caused by &ldquo;intentional loss, meaning
        any loss arising out of any act an &lsquo;insured&rsquo; commits or conspires to commit
        with the intent to cause a loss.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question that immediately arises: if one spouse intentionally burns down the house,
        does the other spouse &mdash; the innocent spouse &mdash; also lose coverage? The answer,
        in California and most other states, is no. This is the{' '}
        <Link href="/resources/innocent-co-insured-doctrine" className="text-[#2E74B5] hover:underline">
          innocent co-insured doctrine
        </Link>, and it is one of the most important protections available to policyholders in
        divorce situations.
      </p>

      <h3 id="section-533" className="text-xl font-semibold text-[#1F3964] mb-3">
        California Insurance Code Section 533 and the Severability Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 533 provides the statutory foundation for the innocent
        co-insured doctrine. It states:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
        <p className="text-gray-700 text-sm italic leading-relaxed">
          &ldquo;An insurer is not liable for a loss caused by the wilful act of the insured;
          but he is not exonerated by the negligence of the insured, or of the insured&rsquo;s
          agents or others.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is &ldquo;the insured&rdquo; &mdash; singular. When there are multiple
        insureds on a policy, this provision only bars recovery by the insured who committed the
        willful act. It does not bar recovery by the innocent co-insured. California courts have
        consistently held that Section 533 applies to each insured individually, not collectively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The modern homeowner&rsquo;s policy reinforces this through the <strong>severability
        clause</strong> (sometimes called the &ldquo;Concealment or Fraud&rdquo; condition or
        &ldquo;Separation of Insureds&rdquo; provision). This clause provides that the policy
        applies separately to each insured. What this means in practice is that each
        insured&rsquo;s rights and obligations under the policy are evaluated independently.
        One insured&rsquo;s misconduct does not taint the other insured&rsquo;s coverage.
      </p>

      <CalloutBox variant="legal" title="Severability in Practice">
        <p>
          In <em>Fireman&rsquo;s Fund Insurance Co. v. Morse</em> (1989, unpublished but widely
          cited in secondary sources), the court addressed a situation where one spouse set fire
          to the marital home. The insurer denied the entire claim based on the intentional act
          exclusion. The court held that the severability clause required the policy to be read as
          if each insured had a separate policy. The innocent spouse was entitled to recover her
          share of the loss. This principle has been reaffirmed in numerous California decisions.
          See also California Insurance Code &sect; 533 and the standard ISO severability language.
        </p>
      </CalloutBox>

      <h3 id="what-innocent-spouse-recovers" className="text-xl font-semibold text-[#1F3964] mb-3">
        What the Innocent Spouse Recovers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the innocent co-insured doctrine, the innocent spouse can typically recover their
        proportionate share of the loss &mdash; generally 50% of the community property interest
        in a community property state like California. Some courts have gone further and allowed
        the innocent co-insured to recover up to the full policy limits, depending on the
        specific policy language and the equitable circumstances.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer, having paid the innocent co-insured, then has a right of subrogation against
        the wrongdoing spouse. The guilty spouse committed arson (a felony under California
        Penal Code &sect; 451), and the insurer can pursue them for the amounts paid out. The
        innocent spouse should not be penalized because the person they married decided to commit
        a crime.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive treatment of this doctrine and the case law supporting it, see our
        detailed article on the{' '}
        <Link href="/resources/innocent-co-insured-doctrine" className="text-[#2E74B5] hover:underline">
          Innocent Co-Insured Doctrine
        </Link>.
      </p>

      <h2 id="property-settlement-agreements" className="text-2xl font-bold text-[#1F3964] mb-4">
        Property Settlement Agreements That Ignore Open Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common &mdash; and most costly &mdash; mistakes in divorce
        cases involving insurance claims. The spouses negotiate a property settlement agreement
        (or the court enters a judgment) that divides the house, the bank accounts, the
        retirement funds, and the personal property. The agreement addresses who gets the house,
        who pays the mortgage, and who is responsible for maintenance. But it says nothing about
        the pending insurance claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An open insurance claim is a chose in action &mdash; a legal right to recover money. It
        is a community property asset if the loss occurred during the marriage and the property
        is community property. Under California Family Code &sect; 2550, the court is required
        to divide community property equally. If the insurance claim is not addressed in the
        property settlement agreement, several problems can result:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The claim may be treated as the sole property of the spouse who retains the
          home.</strong> If one spouse is awarded the house in the divorce, the other spouse may
          lose their interest in the claim proceeds unless the agreement specifically preserves it.
        </li>
        <li>
          <strong>The spouse who does not retain the home may have no standing to pursue the
          claim.</strong> If the divorce decree awards the home and &ldquo;all rights and
          interests therein&rdquo; to one spouse, the insurer may argue that this includes the
          insurance claim.
        </li>
        <li>
          <strong>The claim may fall between the cracks entirely.</strong> Neither spouse pursues
          the claim because each believes the other is handling it, or because neither wants to
          cooperate with the other.
        </li>
        <li>
          <strong>Statute of limitations issues may arise.</strong> By the time the oversight is
          discovered, it may be too late to pursue the claim or file suit against the insurer.
        </li>
      </ul>

      <CalloutBox variant="tip" title="For Divorce Attorneys">
        <p>
          Every property settlement agreement involving a home should include a specific provision
          addressing any pending or potential insurance claims. The provision should address: (1)
          who has authority to manage and settle the claim; (2) how the proceeds will be divided;
          (3) who is responsible for cooperating with the insurer; and (4) what happens if the
          claim is denied or underpaid. Do not leave this to implication. A one-paragraph
          provision can prevent a six-figure dispute.
        </p>
      </CalloutBox>

      <h2 id="coverage-gap" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coverage Gap Between Filing for Divorce and Final Decree
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The period between the filing of a divorce petition and the entry of a final judgment
        is one of the most dangerous periods for insurance coverage. This period can last six
        months (California&rsquo;s mandatory waiting period under Family Code &sect; 2339), but
        in contested cases it frequently stretches to a year, two years, or longer. During this
        entire period, the parties are legally still married but practically separated &mdash;
        and the insurance policy may not account for this limbo.
      </p>

      <h3 id="residency-requirement" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Residency Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard homeowner&rsquo;s policy defines &ldquo;insured&rdquo; to include the
        named insured&rsquo;s spouse, but only if they are a &ldquo;resident of the same
        household.&rdquo; The moment one spouse moves out of the home, the policy&rsquo;s
        definition of &ldquo;insured&rdquo; may no longer include that spouse. This creates
        a coverage gap: the departing spouse has a community property interest in the home and
        in any insurance proceeds, but they may not be an &ldquo;insured&rdquo; under the
        policy for purposes of filing claims, receiving notice of cancellation, or being
        protected by the policy&rsquo;s liability coverage.
      </p>

      <h3 id="duty-to-notify" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Notify the Insurer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies require the named insured to notify the insurer of material
        changes in the risk. A separation &mdash; where one spouse moves out and the home may
        be left vacant or occupied differently &mdash; is arguably a material change. If the
        home is left vacant for an extended period (most policies define &ldquo;vacant&rdquo;
        as unoccupied for 60 consecutive days or more), the vacancy exclusion may apply and
        certain coverages &mdash; particularly vandalism and malicious mischief &mdash; may be
        suspended.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Neither spouse wants to be the one who causes a coverage lapse. If you are the spouse
        who moves out, make sure someone is maintaining the property and that the insurer is
        aware the home is still occupied. If you are the spouse who stays, make sure the
        premiums are being paid. Both spouses have a fiduciary duty under Family Code
        &sect; 1100 to preserve community assets, and allowing the insurance policy to lapse
        through neglect is a breach of that duty.
      </p>

      <h3 id="premium-payments" className="text-xl font-semibold text-[#1F3964] mb-3">
        Who Pays the Premiums?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        During the separation period, the question of who pays the insurance premiums is both
        a practical and a legal issue. If the premiums were historically paid from a joint
        account that is now frozen, or if the spouse who handled the finances has stopped
        paying, the policy can lapse. A lapsed policy cannot be used to make a claim. If the
        home burns down the day after the policy lapses because the premium was not paid, there
        is no coverage &mdash; and both spouses lose.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides some protection. Under California Insurance Code &sect; 677.2,
        when a homeowner policy is canceled for nonpayment of premium, the insurer must provide
        at least 10 days&rsquo; written notice to the named insured. If there is a mortgage on
        the property (which there usually is), the mortgagee also receives notice. But if the
        departing spouse is not a named insured and has not arranged for independent notice, they
        may not learn about the cancellation until it is too late.
      </p>

      <CalloutBox variant="warning" title="Do Not Let the Policy Lapse">
        <p>
          If you are going through a divorce and you are concerned that your spouse may allow the
          homeowner&rsquo;s policy to lapse, take steps immediately. Contact the insurer and ask
          to be added as a named insured or at least request that you receive copies of all policy
          correspondence, including cancellation notices. Pay the premium yourself if necessary
          &mdash; you can seek reimbursement from the community estate or credit for the payment
          in the property division. The cost of a year&rsquo;s premium is trivial compared to the
          cost of being uninsured when a loss occurs.
        </p>
      </CalloutBox>

      <h2 id="removing-spouse-from-policy" className="text-2xl font-bold text-[#1F3964] mb-4">
        When One Spouse Removes the Other from the Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        During a contentious divorce, it is not uncommon for the named insured to contact the
        insurance company and remove the other spouse from the policy &mdash; or to cancel the
        policy entirely and take out a new one in their name alone. This is problematic on
        multiple levels.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, if the ATROs are in effect (and they are, from the moment the petition is served),
        removing a spouse from a community property insurance policy may violate Family Code
        &sect; 2040. The insurance policy protects a community asset &mdash; the home &mdash;
        and reducing coverage for that asset without the other spouse&rsquo;s consent or a court
        order could constitute a violation of the restraining order.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, removing a spouse from the policy eliminates their status as an insured,
        which affects their ability to file claims, receive loss payments directly, and be
        covered under the policy&rsquo;s liability provisions. If a loss occurs after the
        removal, the remaining spouse receives all the insurance proceeds &mdash; which may
        need to be accounted for in the property division, but the removed spouse is in a
        significantly weaker position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third, some insurers will not remove a spouse from a policy while the couple is still
        legally married and both names are on the deed. If the home is community property and
        both spouses are on title, the insurer may require both parties to consent to any
        changes to the policy. This provides some protection, but it depends on the
        insurer&rsquo;s internal practices, not on any legal requirement.
      </p>

      <CalloutBox variant="important" title="ATRO Violation">
        <p>
          Removing a spouse from a homeowner&rsquo;s policy while a divorce is pending,
          without consent or a court order, may violate the automatic temporary restraining
          orders (ATROs) under Family Code &sect; 2040. If your spouse has done this, bring
          it to the attention of your family law attorney immediately. The court can order the
          policy reinstated and may impose sanctions for the violation.
        </p>
      </CalloutBox>

      <h2 id="community-property-foundation" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Community Property Foundation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is a community property state. Under Family Code &sect; 760, property
        acquired during marriage is presumed to be community property. This includes the
        marital home (if purchased during the marriage or with community funds), improvements
        made to the home, and personal property inside the home. When a covered loss occurs,
        the insurance proceeds that flow from damage to community property are themselves
        community property. This means both spouses have an equal interest in the insurance
        proceeds, regardless of whose name is on the policy, who filed the claim, or who has
        been communicating with the adjuster. The community property characterization applies
        to all components of the claim &mdash; the dwelling payment, the personal property
        payment, the additional living expense (ALE) payments, and any other covered amounts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The recognized exceptions under Family Code &sect; 770 include property owned before
        marriage, property acquired during marriage by gift or inheritance, and the rents,
        issues, and profits of separate property. Everything else is presumed community. This
        presumption is not merely a default that shifts when convenient &mdash; it is a powerful
        legal rule that requires clear and convincing evidence to overcome, and it applies with
        full force to insurance proceeds.
      </p>

      <CalloutBox variant="legal" title="Family Code &sect; 760 — The Community Property Presumption">
        <p>
          All property acquired during marriage while domiciled in California is community
          property. This includes the family home (if purchased during the marriage), the
          insurance policy on that home (if purchased with community funds), and the insurance
          proceeds paid on a claim against that policy. The presumption applies regardless of
          which spouse&rsquo;s name appears on the deed, the mortgage, or the policy.
        </p>
      </CalloutBox>

      <h3 id="proceeds-follow-character" className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Proceeds Follow the Character of the Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental rule in California is that <strong>insurance proceeds take on the same
        character as the property they are designed to protect</strong>. This is sometimes called
        the &ldquo;replacement theory&rdquo; or &ldquo;substitution theory&rdquo; of community
        property. The insurance payment steps into the shoes of the damaged property. If the
        property was community property, the proceeds are community property. If the property
        was separate property, the proceeds are separate property.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2 mt-4">
        Community Property Home → Community Property Proceeds
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a married couple purchased a home during the marriage using community funds, that
        home is community property. When the home is damaged, the insurance proceeds paid for
        that damage are also community property &mdash; even if the insurance policy is in only
        one spouse&rsquo;s name, even if only one spouse filed the claim, and even if only one
        spouse negotiated the settlement. The proceeds belong to the community. Neither spouse
        can unilaterally decide to pocket the money, use it for a non-repair purpose, or refuse
        to apply it to the restoration of the community property home.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2 mt-4">
        Separate Property Home → Separate Property Proceeds
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        If one spouse owned a home before the marriage and maintained it as separate property
        throughout the marriage &mdash; meaning no transmutation, no commingling of title, and
        no community funds used for acquisition &mdash; then insurance proceeds for damage to
        that home are the separate property of the owning spouse. The other spouse generally
        has no ownership interest in those proceeds. However, even in a separate property home,
        the personal property contents may be community property (if acquired during the
        marriage with community funds), and the community may have a reimbursement interest
        under Family Code &sect; 2640 if community funds were used to pay the mortgage, make
        improvements, or pay insurance premiums.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2 mt-4">
        Mixed Character: The Pro Rata Approach
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many marriages, the home has a mixed character. Perhaps one spouse owned the
        property before the marriage but community funds were used to pay the mortgage during
        the marriage. Or perhaps a separate property down payment was combined with a community
        property mortgage. In these situations, the insurance proceeds are allocated pro rata
        between the separate and community interests based on the relative contributions to
        the property&rsquo;s equity. This allocation can be complex and often requires a
        forensic accountant or family law attorney to trace the funds.
      </p>

      <h3 id="transmutation" className="text-xl font-semibold text-[#1F3964] mb-3">
        Transmutation: When the Character of the Property Changes
      </h3>
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
        the loss determines the character of the proceeds. Importantly, simply adding a spouse
        to the title deed does <em>not</em> automatically constitute a transmutation. The
        writing must contain an &ldquo;express declaration&rdquo; that is &ldquo;made, joined
        in, consented to, or accepted by the spouse whose interest in the property is
        adversely affected.&rdquo; A deed that merely adds a spouse&rsquo;s name without any
        language about changing the character of the property may not meet the statutory
        requirement.
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

      <h3 id="reimbursement-claims" className="text-xl font-semibold text-[#1F3964] mb-3">
        Reimbursement Claims When Community Funds Maintain Separate Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When community funds are used to pay the insurance premiums on a separate property home,
        the community may have a reimbursement claim. This does not convert the insurance
        proceeds into community property, but it does create a community interest that must be
        accounted for. The logic: insurance premiums paid from community earnings reduce the
        community estate. If those premiums protect a separate property asset, the community
        has effectively subsidized the separate property owner&rsquo;s insurance coverage. When
        a claim is paid, the community has a right to be reimbursed for the premiums it funded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This reimbursement principle also extends to other community expenditures that benefit
        separate property. Under Family Code &sect; 2640, contributions to the acquisition or
        improvement of property in which the community or the other spouse has no ownership
        interest are subject to reimbursement. While &sect; 2640 is most commonly applied in
        divorce proceedings, the underlying principle applies in any context where the
        characterization of insurance proceeds is at issue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To establish a community reimbursement claim, you must be able to trace the premium
        payments to a community property source &mdash; typically by showing that the premiums
        were paid from a joint bank account funded by community earnings, or from one
        spouse&rsquo;s separate bank account that was funded with community income. Bank
        statements, cancelled checks, and automatic payment records are the key evidence. If
        the premiums were paid from a commingled account, the tracing becomes more complex,
        and a forensic accountant may be necessary.
      </p>

      <h3 id="management-and-control" className="text-xl font-semibold text-[#1F3964] mb-3">
        Management and Control: Family Code &sect;&sect; 1100 and 1102
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 1100 is the primary statute governing how community property is
        managed during an intact marriage. Either spouse has the management and control of
        community personal property (which includes insurance proceeds once paid), with certain
        exceptions. But subdivision (e) imposes a critical limitation: each spouse must act in
        <strong> &ldquo;good faith&rdquo;</strong> with respect to the other in the management
        and control of community property. Applied to insurance claims, this means either
        spouse can communicate with the insurer, provide documentation, negotiate the
        settlement, and take reasonable steps to protect the property. But neither spouse can
        act against the other&rsquo;s interest &mdash; for example, by settling a claim for
        less than its value, by diverting proceeds to personal use, or by refusing to cooperate
        with legitimate repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 1100(b) adds another important rule: a spouse may not make a gift
        of community personal property without the written consent of the other spouse. If one
        spouse settles an insurance claim for substantially less than its value &mdash; perhaps
        to speed up the process or avoid conflict &mdash; the other spouse could argue that
        the undervalued settlement constituted a constructive gift of community assets.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family Code &sect; 1102 requires that both spouses must join in executing any
        instrument by which community real property or any interest therein is leased for a
        longer period than one year, sold, conveyed, or encumbered. While an insurance claim
        settlement is not a sale or conveyance of real property, the underlying principle
        &mdash; that both spouses must participate in significant decisions affecting community
        real property &mdash; is directly relevant. A settlement that effectively determines
        whether the community home gets rebuilt, repaired, or sold for salvage value implicates
        the same protective principles.
      </p>

      <CalloutBox variant="legal" title="Both Spouses Must Participate">
        <p>
          Under Family Code &sect;&sect; 1100 and 1102, both spouses have rights and
          obligations regarding community property. In the insurance claim context, this means
          both spouses should be involved in major claim decisions, both should review
          settlement offers, and neither should accept or reject a settlement without
          consulting the other. An insurer that negotiates exclusively with one spouse while
          ignoring the other is creating a potential liability issue.
        </p>
      </CalloutBox>

      <h3 id="endorsement-requirements" className="text-xl font-semibold text-[#1F3964] mb-3">
        Claim Check Endorsement: Do Both Spouses Have to Sign?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer issues a claim payment on a community property home, the check should
        be made payable to both spouses (as community property co-owners and insureds) and the
        mortgage lender (if there is a loss payable endorsement). All named payees must endorse
        the check before it can be negotiated. If the insurer issues the check payable only to
        the named insured and the lender &mdash; omitting the non-named spouse &mdash; the
        non-named spouse may have a claim against the named insured for breach of fiduciary
        duty under Family Code &sect; 1100, and potentially against the insurer for failing to
        protect the community interest. In practice, most insurers will include both spouses on
        the check if they are aware that both are involved in the claim. To protect yourself,
        make sure the insurer knows from the outset that both spouses are insureds with a
        community property interest in the proceeds.
      </p>

      <h3 id="ale-during-separation" className="text-xl font-semibold text-[#1F3964] mb-3">
        Additional Living Expenses During Separation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional living expense (ALE) coverage &mdash; also called Coverage D or &ldquo;Loss
        of Use&rdquo; &mdash; pays for the increased cost of living when the insured home is
        uninhabitable. During a divorce, ALE raises unique questions. If both spouses were
        living in the home before the loss, both are displaced. The insurer is obligated to pay
        the increased cost of maintaining the household&rsquo;s standard of living. But if the
        spouses are now living separately, the &ldquo;household&rdquo; has effectively split
        into two.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers sometimes try to limit ALE to the cost of housing one household, arguing that
        the policy only covers one residence. This position is often wrong. If both spouses
        were residents of the insured premises at the time of the loss, both were displaced,
        and the policy should cover the reasonable additional living expenses for both &mdash;
        even if they are now living in two separate locations. The ALE calculation should
        account for the actual increased costs incurred by the family as a whole.
      </p>

      <h2 id="mortgage-named-insured-mismatch" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Mortgage/Named Insured Mismatch: One Spouse on the Loan, the Other on the Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most commonly encountered &mdash; and most poorly understood &mdash;
        complications in community property insurance claims. The scenario: Spouse A is the
        borrower on the mortgage. Spouse B is the named insured on the homeowner&rsquo;s
        insurance policy. The home is community property. Both spouses live in the home. Then
        the home is damaged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This arrangement arises for many practical reasons. Perhaps Spouse A had better credit
        and qualified for the mortgage alone. Perhaps Spouse B handled the household insurance
        decisions and obtained the policy in their name. Whatever the reason, the result is a
        three-way mismatch: the mortgage lender expects to deal with Spouse A (the borrower),
        the insurance company considers Spouse B its contractual counterpart (the named
        insured), and the law says both spouses own the home and the proceeds equally.
      </p>

      <CalloutBox variant="important" title="The Mismatch Creates Real Problems">
        <p>
          When one spouse is on the mortgage and the other is the named insured on the policy,
          the claim process becomes significantly more complicated. The lender, the insurer,
          and the spouses themselves may all have different expectations about who controls the
          process, who endorses the check, and how the money is applied. Understanding the
          legal framework is critical to avoiding costly mistakes.
        </p>
      </CalloutBox>

      <h3 id="mismatch-who-can-file" className="text-xl font-semibold text-[#1F3964] mb-3">
        Who Has Authority to File the Claim?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance policy is a contract between the insurer and the named insured. If only
        Spouse B is the named insured, then Spouse B is the insurer&rsquo;s contractual
        counterpart and has the clearest authority to file the claim, communicate with the
        adjuster, submit documentation, and negotiate the settlement. However, the spouse of
        a named insured is typically an &ldquo;insured&rdquo; under the policy as well &mdash;
        most homeowner policies define &ldquo;insured&rdquo; to include the named
        insured&rsquo;s spouse if the spouse is a resident of the same household. This means
        Spouse A &mdash; even though not the <em>named</em> insured &mdash; is still an
        insured under the policy and has coverage rights. Either spouse can initiate the claim
        in practice, and both have substantive coverage rights as insureds.
      </p>

      <h3 id="lenders-loss-payable" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Lender&rsquo;s Loss Payable Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the mismatch really matters. The mortgage lender required Spouse A (the
        borrower) to maintain insurance on the property as a condition of the loan. The deed
        of trust or mortgage agreement contains a covenant to insure, and the lender protects
        its interest through a <strong>loss payable endorsement</strong> (also called a
        &ldquo;mortgagee clause&rdquo; or &ldquo;lender&rsquo;s loss payable clause&rdquo;)
        attached to the insurance policy. That endorsement names the lender as a loss payee,
        meaning the lender is entitled to be included on claim payments. The loss payable
        endorsement creates a separate, independent contract between the insurer and the
        lender. It survives even if the insurer could deny the claim against the named insured
        (for example, due to fraud or misrepresentation by the policyholder). For a full
        explanation, see{' '}
        <Link href="/resources/lenders-loss-payable-endorsement" className="text-[#2E74B5] hover:underline">
          Lender&rsquo;s Loss Payable Endorsement
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claim check will typically be made payable to three parties: the named insured
        (Spouse B), the borrower/mortgagor (Spouse A, because they are a resident insured and
        a community property co-owner), and the mortgage lender. All three must endorse the
        check before anyone can deposit it. If the check is above the lender&rsquo;s threshold
        (often $10,000 to $40,000, depending on the lender and the loan servicer), the lender
        may require the check to be sent to its loss draft department, where the funds are
        held in escrow and disbursed in stages as repairs are completed.
      </p>

      <h3 id="mismatch-spouses-disagree" className="text-xl font-semibold text-[#1F3964] mb-3">
        What Happens When the Spouses Disagree
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spouse A wants to use the insurance proceeds to repair the home &mdash; after all,
        their name is on the mortgage, and if the home isn&rsquo;t repaired, they remain
        liable for a mortgage on a damaged property. Spouse B wants to take the cash and move
        on &mdash; perhaps the marriage is strained, perhaps they want to relocate. Several
        legal rules come into play:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Family Code &sect; 1100 &mdash; Good Faith Management:</strong> Each spouse
          has the right to manage and control community personal property (which includes
          insurance proceeds once paid). But each spouse must act in good faith with respect to
          the other. Using community insurance proceeds for personal purposes &mdash; instead
          of repairing the community property home &mdash; could be a breach of fiduciary duty.
        </li>
        <li>
          <strong>Family Code &sect; 1102 &mdash; Joinder Requirement:</strong> Both spouses
          must join in any transaction that involves the sale, conveyance, or encumbrance of
          community real property. A failure to repair a damaged community property home
          effectively diminishes its value &mdash; which arguably implicates the same
          protective principles.
        </li>
        <li>
          <strong>The Mortgage Obligation:</strong> If Spouse A is on the mortgage, they are
          personally liable for the debt regardless of whether the home is repaired. Refusing
          to use insurance proceeds for repairs could expose Spouse A to financial harm &mdash;
          a damaged home with a full mortgage balance. This may give Spouse A standing to
          compel the use of proceeds for repairs.
        </li>
        <li>
          <strong>The Lender&rsquo;s Position:</strong> If the lender is holding the insurance
          proceeds in its loss draft escrow, it may simply refuse to release the funds for
          anything other than documented repairs. This effectively forces the issue &mdash;
          the money cannot be &ldquo;cashed out&rdquo; while the lender controls it.
        </li>
      </ol>

      <CalloutBox variant="warning" title="The Lender Can Force Repairs">
        <p>
          If the mortgage lender is holding insurance proceeds in a loss draft escrow account,
          neither spouse can unilaterally cash out the claim. The lender will release funds
          only for documented repairs to protect its collateral. This is true regardless of
          which spouse is the named insured and regardless of which spouse is on the mortgage.
          The lender&rsquo;s security interest in the property takes priority.
        </p>
      </CalloutBox>

      <h3 id="mismatch-presumption-applies" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Community Property Presumption Applies Regardless of Who Is on What Document
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the critical point that many people &mdash; including some insurance adjusters
        and loan officers &mdash; fail to grasp. If the home was acquired during the marriage
        as community property, then <strong>it does not matter</strong> which spouse is on the
        mortgage and which spouse is on the insurance policy. The community property
        presumption applies to both the home and the insurance proceeds regardless of how the
        paperwork is arranged. An insurer cannot refuse to pay a claim because the
        &ldquo;wrong spouse&rdquo; filed it. A lender cannot refuse to release funds because
        the named insured is not the borrower. Family Code &sect; 760 does not contain an
        exception for insurance policies or mortgage agreements. The named insured designation
        on the policy is an administrative detail; it does not determine ownership of the
        proceeds.
      </p>

      <h2 id="named-insured-dies" className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Named Insured Dies: The Surviving Spouse&rsquo;s Position
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A scenario plays out with disturbing regularity in the mortgage/named insured mismatch
        context, and it exposes one of the most aggressive positions insurance companies take
        against grieving families. Spouse A is the named insured on the homeowner&rsquo;s
        policy. Spouse B is on the mortgage, lives in the home, and has paid the premiums with
        community funds for years. The home is damaged. A claim is filed. Then Spouse A &mdash;
        the named insured &mdash; dies. The insurer&rsquo;s response, in cases reported across
        the country: <strong>the named insured is dead, the policy covered the named insured,
        and we have no obligation to the surviving spouse.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that again. The insurer collected premiums &mdash; paid with community funds
        &mdash; for years. The insurer insured a community property home. The surviving spouse
        lived in the home, maintained it, and may have been listed on the policy as a
        &ldquo;resident spouse&rdquo; or &ldquo;insured resident.&rdquo; And the insurer&rsquo;s
        position is that because the named insured died, the claim dies too. This position has
        no basis in California law.
      </p>

      <CalloutBox variant="warning" title="The Insurer&rsquo;s Position Fails on Four Independent Grounds">
        <p>
          An insurer that refuses to pay a surviving spouse on a community property claim
          because the named insured died is ignoring California&rsquo;s community property
          framework, the survival statutes under Code of Civil Procedure &sect;&sect;
          377.20&ndash;377.34, the policy&rsquo;s own definition of &ldquo;insured,&rdquo; and
          decades of California law holding that insurance rights are property rights that
          survive death. This position should be challenged aggressively.
        </p>
      </CalloutBox>

      <h3 id="why-insurer-fails" className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Insurer&rsquo;s Position Fails
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>First: the surviving spouse is an insured under the policy.</strong> Standard
        homeowner policies define &ldquo;insured&rdquo; to include the named insured and their
        spouse if a resident of the same household. The surviving spouse who lived in the home
        was an insured in their own right &mdash; not through the deceased spouse, but
        independently, by operation of the policy language. The death of the named insured
        does not retroactively strip the surviving spouse of their status as an insured at the
        time of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Second: the insurance claim is a community property asset that survives
        death.</strong> Under Family Code &sect; 760, the rights under an insurance policy
        purchased with community funds during the marriage are community property. When a
        covered loss occurs, the right to receive insurance proceeds vests at the time of the
        loss &mdash; not at the time of payment. The surviving spouse owns a community
        property interest in that vested right. Code of Civil Procedure &sect; 377.20 provides
        that &ldquo;a cause of action for or against a person is not lost by reason of the
        person&rsquo;s death.&rdquo; The insurance claim survives.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Third: the surviving spouse has an independent insurable interest.</strong>{' '}
        California Insurance Code &sect; 281 defines insurable interest broadly: every interest
        in property, or any relation to it, that would cause the holder to suffer financial
        loss from its damage or destruction. The surviving spouse who lives in the community
        property home, holds title (or holds a community property interest regardless of whose
        name is on title), and depends on the home for shelter has a direct, independent
        insurable interest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Fourth: the insurer accepted premiums for the coverage.</strong> The insurer
        knew &mdash; or should have known &mdash; that it was insuring a community property
        home occupied by both spouses. It accepted community funds as premium payments. It
        issued a policy that by its own terms covered the resident spouse. Having accepted
        those premiums and issued that coverage, the insurer cannot disclaim its obligations
        because one of the two people it was covering has died. In California, doing so may
        constitute a violation of the implied covenant of good faith and fair dealing.
      </p>

      <CalloutBox variant="legal" title="The Surviving Spouse&rsquo;s Legal Position">
        <p>
          The surviving spouse&rsquo;s claim rests on independent grounds: (1) they are an
          &ldquo;insured&rdquo; under the policy&rsquo;s own definition, (2) they have an
          independent insurable interest under Insurance Code &sect; 281, (3) the insurance
          proceeds are community property under Family Code &sect; 760, and (4) the claim
          survives death under Code of Civil Procedure &sect; 377.20. The insurer must
          overcome all four of these independent bases to deny the claim &mdash; and it cannot
          overcome any of them.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For the broader analysis of what happens to an insurance claim when the policyholder
        dies &mdash; covering authority issues, deadlines that keep running, the standing of
        executors and successor trustees, and bad faith arguments &mdash; see our companion
        article on{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to insurance when the policyholder dies
        </Link>.
      </p>

      <h2 id="unmarried-partners" className="text-2xl font-bold text-[#1F3964] mb-4">
        Unmarried Partners, Domestic Partners, and Common Law Marriage
      </h2>
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
        never obtained a marriage license or had a wedding.
      </p>

      <h3 id="common-law-states" className="text-xl font-semibold text-[#1F3964] mb-3">
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
        <li>
          <strong>New Hampshire</strong> &mdash; recognized only for inheritance purposes after
          three years of cohabitation
        </li>
        <li><strong>Oklahoma</strong> &mdash; recognized by case law</li>
        <li><strong>Rhode Island</strong> &mdash; recognized by case law</li>
        <li><strong>South Carolina</strong> &mdash; recognized by case law</li>
        <li>
          <strong>Texas</strong> &mdash; called &ldquo;informal marriage&rdquo; under Texas
          Family Code &sect; 2.401
        </li>
        <li>
          <strong>Utah</strong> &mdash; may be established by court order or administrative
          order under Utah Code &sect; 30-1-4.5
        </li>
        <li><strong>District of Columbia</strong> &mdash; recognized by case law</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several other states &mdash; including Alabama, Georgia, Idaho, Ohio, and Pennsylvania
        &mdash; previously recognized common law marriage but have since abolished it
        prospectively. However, common law marriages validly created in those states before the
        abolition date remain valid. The critical point for insurance purposes:{' '}
        <strong>the IRS recognizes common law marriages if the state where the couple resides
        (or where the marriage was created) recognizes them.</strong> If the IRS treats a
        couple as married, there is a strong argument that the insurance company must too.
      </p>

      <CalloutBox variant="important" title="Full Faith and Credit: A Common Law Marriage Travels">
        <p>
          Under the Full Faith and Credit Clause of the U.S. Constitution, a common law
          marriage that is validly created in one state must generally be recognized by every
          other state &mdash; even states that do not themselves allow the creation of common
          law marriages. If a couple established a valid common law marriage in Colorado and
          then moved to California, California must recognize that marriage. This means the
          surviving partner in a common law marriage may have &ldquo;spouse&rdquo; status under
          a California homeowner&rsquo;s policy &mdash; if the common law marriage was validly
          created in a state that recognizes it.
        </p>
      </CalloutBox>

      <h3 id="california-doesnt-recognize" className="text-xl font-semibold text-[#1F3964] mb-3">
        California Does Not Create Common Law Marriages &mdash; But Recognizes Them
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California abolished common law marriage in 1895. Family Code &sect; 300 requires a
        license and solemnization for a valid marriage. Two people who live together in
        California for decades, share everything, and hold themselves out as married are not
        legally married under California law &mdash; no matter how long they have been
        together. <strong>The exception:</strong> California will recognize a common law
        marriage that was validly created in another state. If a couple lived together in
        Texas, met the requirements for an informal marriage under Texas Family Code
        &sect; 2.401, and then relocated to California, California treats them as married. The
        marriage is valid. The surviving partner is a spouse. The policy&rsquo;s definition of
        &ldquo;insured&rdquo; includes them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For couples who have always lived in California and never established a common law
        marriage elsewhere, there are two alternative paths to &ldquo;spouse&rdquo; status
        under a homeowner policy:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Registered Domestic Partnership.</strong> California Family Code
          &sect; 297.5 provides that registered domestic partners have the same rights,
          protections, and benefits as married spouses. A registered domestic partner is a
          &ldquo;spouse&rdquo; for purposes of the policy&rsquo;s definition of insured. This
          applies regardless of the partners&rsquo; genders &mdash; California opened
          registered domestic partnerships to all couples effective January 1, 2020 (Senate
          Bill 30). The community property rules then apply with full force.
        </li>
        <li>
          <strong>The Putative Spouse Doctrine.</strong> Under Family Code &sect; 2251, a
          person who has a good faith belief that they are validly married &mdash; even if the
          marriage turns out to be void or voidable &mdash; has the rights of a spouse with
          respect to &ldquo;quasi-marital property.&rdquo; This is a narrow doctrine, but in
          the right circumstances, it can provide spouse-equivalent status for insurance
          purposes. The key requirement is good faith: the putative spouse must have a
          genuine, objectively reasonable belief that they are married.
        </li>
      </ul>

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

      <CalloutBox variant="warning" title="This Is Not Legal Advice">
        <p>
          The discussion of common law marriage, domestic partnerships, marital status, and
          spousal rights under insurance policies involves complex questions of family law,
          contract law, and insurance law that vary significantly from state to state. This
          article is for informational purposes only and does not constitute legal advice.
          <strong> If you are an unmarried couple trying to determine your rights under an
          insurance policy &mdash; whether before or after a claim is filed &mdash; you
          should consult with an attorney</strong> who is licensed in your state and
          experienced in both family law and insurance coverage. The stakes are too high and
          the law too variable to rely on general information alone.
        </p>
      </CalloutBox>

      <h2 id="common-insurer-mistakes" className="text-2xl font-bold text-[#1F3964] mb-4">
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
          for community property. The proceeds are community property, and both spouses have
          an ownership interest. The check should be payable to both spouses (and the lender,
          if applicable).
        </li>
        <li>
          <strong>&ldquo;Only the person on the mortgage can authorize repairs.&rdquo;</strong>
          {' '}Incorrect. Either spouse can authorize repairs to community property under
          Family Code &sect; 1100. The mortgage borrower designation does not determine who
          can make repair decisions.
        </li>
        <li>
          <strong>&ldquo;We need both spouses to agree before we can proceed.&rdquo;</strong>
          {' '}The insurer has valid concerns about paying on a claim where the insureds
          disagree. But the insurer cannot use a spousal disagreement as an excuse to delay or
          deny the claim. Disputes between the spouses about how to use the proceeds are a
          family law matter, not a coverage matter.
        </li>
        <li>
          <strong>&ldquo;We settled with the named insured; the claim is closed.&rdquo;</strong>
          {' '}If the non-named spouse did not agree to the settlement and the proceeds are
          community property, the claim is not necessarily resolved. The non-named spouse may
          have a separate right to challenge the settlement or seek additional compensation.
        </li>
      </ul>

      <h2 id="spousal-arson-section-533" className="text-2xl font-bold text-[#1F3964] mb-4">
        Spousal Arson and the Severability Clause
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spousal arson is not a theoretical problem. It is a recurring fact pattern in insurance
        litigation, particularly during divorce proceedings. Emotions run high, financial
        pressures mount, and the marital home &mdash; the most valuable asset most couples own
        &mdash; becomes a target. The FBI and National Fire Protection Association data
        consistently show that a disproportionate number of residential arsons are committed
        by current or former intimate partners.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When one spouse commits arson, the insurer will deny the entire claim if it can. The
        carrier&rsquo;s preferred argument is that the intentional act exclusion bars all
        coverage for all insureds. This is where Insurance Code &sect; 533 and the severability
        clause become critical.
      </p>

      <h3 id="how-severability-works" className="text-xl font-semibold text-[#1F3964] mb-3">
        How the Severability Clause Works
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The severability clause (also called &ldquo;Separation of Insureds&rdquo;) provides
        that the insurance policy applies separately to each insured. The standard ISO language
        reads: &ldquo;This insurance applies separately to each &lsquo;insured.&rsquo; This
        condition shall not increase our limit of liability for any one
        &lsquo;occurrence.&rsquo;&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The effect of this clause is that each insured is treated as if they have their own
        separate policy. One insured&rsquo;s intentional act is evaluated only against that
        insured&rsquo;s coverage. The innocent insured&rsquo;s coverage is unaffected. The
        same principle applies to the concealment and fraud condition: if one spouse lies to
        the insurer during the claim, that fraud taints only the lying spouse&rsquo;s coverage
        &mdash; not the innocent spouse&rsquo;s coverage.
      </p>

      <h3 id="insurer-tactics" className="text-xl font-semibold text-[#1F3964] mb-3">
        How Insurers Try to Circumvent the Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers have tried multiple strategies to avoid paying innocent co-insureds in spousal
        arson cases. These include:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Arguing that the intentional act exclusion uses &ldquo;an insured&rdquo;
          rather than &ldquo;the insured.&rdquo;</strong> Some policy forms use the phrase
          &ldquo;an insured&rdquo; in the exclusion, which the carrier argues means that any
          insured&rsquo;s intentional act bars all insureds&rsquo; coverage. California courts
          have generally rejected this argument when a severability clause is present, holding
          that the severability clause modifies the exclusion.
        </li>
        <li>
          <strong>Claiming the innocent spouse knew about or participated in the arson.</strong>{' '}
          The insurer may investigate whether the &ldquo;innocent&rdquo; spouse truly had no
          knowledge or involvement. This is legitimate. If the spouse conspired in the arson,
          they are not an innocent co-insured.
        </li>
        <li>
          <strong>Denying the entire claim and forcing the innocent spouse to litigate.</strong>{' '}
          Some carriers will deny the claim outright, knowing that many policyholders &mdash;
          especially those already going through a financially devastating divorce &mdash;
          cannot afford to hire an attorney and pursue the claim.
        </li>
      </ul>

      <CalloutBox variant="legal" title="California Insurance Code &sect; 533">
        <p>
          Section 533 is the statutory foundation for the innocent co-insured doctrine in
          California. It uses the phrase &ldquo;the insured&rdquo; (singular), which California
          courts have interpreted to mean that the willful act defense applies only to the
          insured who committed the act &mdash; not to other insureds on the same policy.
          Combined with the severability clause in the standard homeowner policy, this creates
          strong protection for innocent co-insureds in spousal arson cases.
        </p>
      </CalloutBox>

      <h2 id="home-sold-pending-claim" className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When the Family Home Is Sold &mdash; Pending Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many divorces, the marital home is sold as part of the property division. This can
        happen by agreement or by court order under Family Code &sect; 2552. When the home is
        sold while an insurance claim is still pending, several important questions arise.
      </p>

      <h3 id="claim-survives-sale" className="text-xl font-semibold text-[#1F3964] mb-3">
        Does the Claim Survive the Sale?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes &mdash; generally, a pending insurance claim does survive the sale of the property,
        but the details matter. The insurance claim is a contractual right between the
        policyholders and the insurer. When the property is sold, the insurance policy
        terminates as to the new owner (the buyer gets their own policy), but the existing
        claim for a loss that occurred during the policy period remains viable. The former
        policyholders &mdash; the divorcing spouses &mdash; retain the right to pursue the
        claim to conclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, there are complications. If the claim involves dwelling damage (Coverage A),
        the insurer may argue that the policyholders no longer have an insurable interest in the
        property because they sold it. This argument is generally wrong &mdash; the insurable
        interest is measured at the time of loss, not at the time of settlement &mdash; but it
        is an argument carriers have raised. Under California Insurance Code &sect; 2051, the
        measure of indemnity is determined at the time of loss.
      </p>

      <h3 id="repair-vs-cash" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Repair vs. Cash Settlement Issue
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the home has been sold, the policyholders can no longer make repairs to the
        property. This raises the question of whether the insurer is obligated to pay
        replacement cost value (RCV) or only actual cash value (ACV). Most homeowner policies
        condition the payment of RCV on the actual repair or replacement of the damaged
        property. If the home has been sold &ldquo;as is&rdquo; (at a reduced price reflecting
        the unrepaired damage), the policyholders may be limited to ACV unless the policy
        language allows RCV payments without requiring repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an area where the property settlement agreement can make a critical difference.
        If the agreement specifies that the insurance claim proceeds will be used to compensate
        one or both spouses for the loss in property value, this can support an argument for full
        indemnity. If the agreement is silent, the insurer has more room to argue for a reduced
        payment.
      </p>

      <h3 id="sale-price-reduction" className="text-xl font-semibold text-[#1F3964] mb-3">
        When the Sale Price Reflects the Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the home is sold at a reduced price because of unrepaired damage from the insured
        loss, both spouses absorb that loss in the sale price. The insurance claim should then
        compensate for that reduction. The measure of the loss is the cost to repair the damage
        (or the diminution in value, depending on the policy and circumstances), and the fact
        that the home was sold does not eliminate the insurer&rsquo;s obligation to pay for the
        covered damage. Both spouses should ensure that the sale documentation reflects the price
        reduction attributable to the unrepaired damage, as this becomes evidence in the claim.
      </p>

      <CalloutBox variant="tip" title="Document the Price Reduction">
        <p>
          If you are selling the marital home with unrepaired damage from an insured loss, make
          sure the sale agreement documents the price reduction attributable to the damage. Get a
          repair estimate before the sale. Have the buyer acknowledge in writing that the reduced
          price reflects the condition of the property. This documentation is critical evidence
          for the insurance claim.
        </p>
      </CalloutBox>

      <h2 id="joint-ownership-considerations" className="text-2xl font-bold text-[#1F3964] mb-4">
        Joint Ownership and Insurance: Broader Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The divorce-and-insurance problem is a specific subset of a broader issue: how insurance
        policies handle jointly owned property. Whether the co-owners are spouses, domestic
        partners, family members, or business partners, the insurance questions are similar:
        who can file a claim, who receives payment, and what happens when co-owners disagree.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader discussion of these issues, see our article on{' '}
        <Link href="/resources/joint-ownership-insurance" className="text-[#2E74B5] hover:underline">
          Joint Ownership and Insurance Claims
        </Link>. The joint ownership article covers scenarios beyond divorce, including
        inherited property, business partnerships, and family co-ownership arrangements that
        present similar insurance complications.
      </p>

      <h2 id="practical-steps" className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps: Don&rsquo;t Let the Claim Fall Through the Cracks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common outcome in divorce-related insurance disputes is not a dramatic fight
        over the claim proceeds. It is something far more mundane and far more damaging: the
        claim simply falls through the cracks. Neither spouse pursues it aggressively because
        they are consumed by the divorce, because they do not trust the other spouse, or because
        their attorneys are focused on custody and support and have not thought about the
        insurance claim. By the time anyone realizes what has happened, the claim has been
        underpaid, the deadlines have passed, or the insurer has closed its file.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are the practical steps every policyholder going through a divorce should take to
        protect their insurance claim.
      </p>

      <h3 id="step-1-inventory" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Identify All Pending and Potential Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the outset of the divorce, both parties should identify any pending insurance claims
        and any conditions that might give rise to future claims. Has there been a fire, a water
        leak, a hail storm, a break-in? Is there mold in the walls? Is the roof damaged? Any
        damage that occurred during the marriage and is potentially covered by the policy is a
        community asset that needs to be identified and addressed.
      </p>

      <h3 id="step-2-preserve-evidence" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Preserve Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both spouses should document the condition of the property. Photographs, videos,
        inspection reports, contractor estimates &mdash; all of this evidence should be
        preserved. In a contentious divorce, there is a risk that one spouse will make
        unauthorized repairs (to conceal damage or to claim credit for improvements) or will
        allow conditions to worsen through neglect. Document everything before the situation
        deteriorates.
      </p>

      <h3 id="step-3-notify-insurer" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Notify the Insurer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If there is a pending claim, both spouses should ensure the insurer knows that both
        parties have an interest in the claim. If you are not the named insured, send a written
        notice to the insurer (by certified mail) advising them that you are a co-owner of the
        property, that a divorce is pending, and that you request copies of all correspondence
        and payments related to the claim. The insurer may or may not comply, but you have
        created a record that you asserted your rights.
      </p>

      <h3 id="step-4-address-in-court-orders" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Address the Claim in Court Orders
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the divorce court to include provisions in temporary orders (and eventually in the
        final judgment) that address the insurance claim. These provisions should specify:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Which spouse has primary responsibility for managing the claim (filing documents,
          attending inspections, communicating with the adjuster).
        </li>
        <li>
          That neither spouse may settle the claim without the other&rsquo;s written consent
          or a court order.
        </li>
        <li>
          How the claim proceeds will be divided or held (e.g., in escrow or in the
          attorney&rsquo;s trust account) pending the property division.
        </li>
        <li>
          That both spouses are required to cooperate fully with the insurer&rsquo;s
          investigation.
        </li>
        <li>
          That neither spouse may cancel or modify the insurance policy without the other&rsquo;s
          consent or a court order.
        </li>
      </ol>

      <h3 id="step-5-hire-professionals" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Consider Hiring a Public Adjuster or Insurance Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A public adjuster or insurance coverage attorney can serve as a neutral claims
        professional who manages the insurance claim on behalf of both spouses. This is
        particularly valuable when the spouses cannot cooperate with each other but both need
        the claim to be handled competently. The public adjuster works for the policyholders
        &mdash; not the insurer &mdash; and can ensure that the claim is properly documented,
        negotiated, and settled while the divorce proceeds on a separate track.
      </p>

      <h3 id="step-6-monitor-deadlines" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Monitor All Deadlines
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance claims have deadlines. Some are set by the policy (e.g., one year to file a
        proof of loss), some are set by statute (e.g., the statute of limitations for breach of
        contract is four years under California Code of Civil Procedure &sect; 337), and some
        are set by the insurer as part of the claims process. During a divorce, it is easy for
        these deadlines to slip. Create a tracking document. Share it with your family law
        attorney, your insurance attorney (if you have one), and your public adjuster (if you
        have one). Do not assume that anyone else is tracking the deadlines for you.
      </p>

      <h3 id="step-7-protect-personal-property" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 7: Protect the Personal Property Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insured loss includes damage to personal property (contents), both spouses need
        to participate in the inventory process. Each spouse knows what they owned, what it cost,
        and when it was acquired. If one spouse handles the contents claim alone, they may
        overlook the other spouse&rsquo;s items, undervalue community property, or (in adversarial
        situations) deliberately omit the other spouse&rsquo;s belongings. Both spouses should
        submit their own inventories, and the contents claim should reflect the full household.
      </p>

      <CalloutBox variant="info" title="The Contents Claim Is Often the Forgotten Asset">
        <p>
          In a divorce, the focus is usually on the house and the big-ticket items. But the
          personal property (contents) claim can easily run into the tens of thousands of dollars.
          Clothing, furniture, electronics, kitchen items, tools, sporting goods, artwork,
          collectibles &mdash; when you add it all up at replacement cost, the contents claim can
          be a significant community asset. Do not let it be overlooked.
        </p>
      </CalloutBox>

      <h3 id="step-8-ale-coordination" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 8: Coordinate Additional Living Expenses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If both spouses are displaced from the home, both should be tracking their additional
        living expenses. The ALE coverage under the policy pays for the difference between
        your normal living expenses and your actual living expenses while displaced. During a
        separation, these expenses will be incurred separately. Keep detailed records of every
        expense &mdash; temporary housing, meals, storage, laundry &mdash; and submit them to
        the insurer. Do not assume that only the named insured can claim ALE.
      </p>

      <h2 id="for-attorneys" className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note for Family Law and Insurance Coverage Attorneys
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The intersection of divorce law and insurance law is an area where family law attorneys
        and insurance coverage attorneys need to communicate. Family law attorneys are experts
        in property division, spousal support, and custody. Insurance coverage attorneys are
        experts in policy interpretation, bad faith, and claims handling. When a significant
        insurance claim is pending during a divorce, both types of expertise are needed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family law attorneys: if your client has a pending insurance claim or a recent loss to
        the marital home, consult with an insurance coverage attorney about the claim&rsquo;s
        value, the policy&rsquo;s deadlines, and the options for preserving the claim during
        the divorce proceedings. Do not treat the insurance claim as a minor issue &mdash; it
        can be worth more than the equity in the home itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance coverage attorneys: if your client is going through a divorce, coordinate with
        the family law attorney about the property settlement. Make sure the settlement
        agreement preserves the client&rsquo;s interest in the claim. Alert the family law
        attorney to policy deadlines that cannot be extended. And be aware that the insurer may
        try to exploit the marital conflict &mdash; playing one spouse against the other,
        using one spouse&rsquo;s recorded statement against the other, or settling with the
        cooperative spouse for less than the claim is worth.
      </p>

      <h2 id="key-statutes" className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Statutes and Legal Authorities
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following California statutes are most frequently implicated in divorce-related
        insurance disputes:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>California Insurance Code &sect; 533</strong> &mdash; Willful act defense
          applies only to &ldquo;the insured&rdquo; who committed the act; foundation for the
          innocent co-insured doctrine.
        </li>
        <li>
          <strong>California Insurance Code &sect; 2051</strong> &mdash; Measure of indemnity
          determined at the time of loss.
        </li>
        <li>
          <strong>California Insurance Code &sect; 677.2</strong> &mdash; Notice requirements
          for cancellation of homeowner policies.
        </li>
        <li>
          <strong>California Family Code &sect; 760</strong> &mdash; Community property
          presumption for property acquired during marriage.
        </li>
        <li>
          <strong>California Family Code &sect; 770</strong> &mdash; Definition of separate
          property.
        </li>
        <li>
          <strong>California Family Code &sect; 1100</strong> &mdash; Fiduciary duty of spouses
          to manage and control community property.
        </li>
        <li>
          <strong>California Family Code &sect; 1101</strong> &mdash; Remedies for breach of
          fiduciary duty between spouses.
        </li>
        <li>
          <strong>California Family Code &sect; 2040</strong> &mdash; Automatic temporary
          restraining orders (ATROs) upon filing of dissolution petition.
        </li>
        <li>
          <strong>California Family Code &sect; 2339</strong> &mdash; Six-month waiting period
          for dissolution of marriage.
        </li>
        <li>
          <strong>California Family Code &sect; 2550</strong> &mdash; Equal division of
          community property.
        </li>
        <li>
          <strong>California Family Code &sect; 2552</strong> &mdash; Court authority to order
          sale of community property.
        </li>
        <li>
          <strong>California Family Code &sect; 2640</strong> &mdash; Reimbursement for separate
          property contributions to community property.
        </li>
        <li>
          <strong>California Penal Code &sect; 451</strong> &mdash; Arson.
        </li>
        <li>
          <strong>California Code of Civil Procedure &sect; 337</strong> &mdash; Four-year
          statute of limitations for breach of written contract.
        </li>
      </ul>

      <h2 id="conclusion" className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Divorce is already one of the most financially and emotionally difficult experiences a
        person can go through. When an insurance claim is layered on top of it, the complexity
        multiplies. The stakes are high &mdash; a single insurance claim on a home can involve
        hundreds of thousands of dollars in dwelling repairs, contents replacement, and
        additional living expenses. Allowing that claim to be mishandled, undervalued, or
        abandoned because of a marital dispute is a loss that neither spouse can afford.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The law provides tools to protect both spouses. The innocent co-insured doctrine
        protects the spouse who did nothing wrong. The ATROs prevent either party from
        unilaterally disposing of community assets, including insurance claims. The severability
        clause ensures that one spouse&rsquo;s misconduct does not destroy the other
        spouse&rsquo;s coverage. But these protections only work if someone invokes them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are going through a divorce and you have a pending or potential insurance claim,
        take action now. Do not wait for the divorce to be finalized. Do not assume your spouse
        is handling the claim. Do not assume your divorce attorney knows about the insurance
        deadlines. Identify the claim, preserve the evidence, address it in your court orders,
        and make sure someone competent is managing the claim from start to finish.
      </p>

      <CalloutBox variant="important" title="The Claim Will Not Wait for the Divorce">
        <p>
          Insurance claims have their own timelines and deadlines. The insurer will not extend
          deadlines because you are going through a divorce. The statute of limitations will not
          be tolled because of marital proceedings. If you have a pending claim and a pending
          divorce, you must manage both simultaneously. The cost of neglecting the insurance
          claim can easily exceed the value of the assets being fought over in the divorce.
        </p>
      </CalloutBox>

      <h2 id="related-resources" className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <Link href="/resources/innocent-co-insured-doctrine" className="text-[#2E74B5] hover:underline">
            The Innocent Co-Insured Doctrine: Full Analysis
          </Link>
        </li>
        <li>
          <Link href="/resources/joint-ownership-insurance" className="text-[#2E74B5] hover:underline">
            Joint Ownership and Insurance Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/named-insured-vs-an-insured" className="text-[#2E74B5] hover:underline">
            Named Insured vs. &ldquo;An Insured&rdquo;: Why the Distinction Matters
          </Link>
        </li>
        <li>
          <Link href="/resources/lenders-loss-payable-endorsement" className="text-[#2E74B5] hover:underline">
            Lender&rsquo;s Loss Payable Endorsement
          </Link>
        </li>
        <li>
          <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
            What Happens to Insurance When the Policyholder Dies
          </Link>
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
