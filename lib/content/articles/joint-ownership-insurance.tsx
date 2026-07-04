import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Joint Ownership and Insurance: Who Gets the Check?",
  description:
    "When property is co-owned by siblings, ex-spouses, or business partners, claim checks get complicated. Here is how ownership structure decides who gets paid.",
  summary:
    'When co-owners (siblings, ex-spouses, partners) share a property, claim payments get complicated over who controls the claim and gets the check. Severability clauses and the innocent co-insured doctrine, plus the ownership structure, determine the answer.',
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
        Most insurance claims involve a single policyholder, a single loss, and a single check.
        But when property is <strong>co-owned</strong> &mdash; by siblings who inherited together,
        ex-spouses who haven&rsquo;t yet divided assets, unmarried partners, business associates,
        or parents and adult children who bought a home jointly &mdash; the insurance claim becomes
        exponentially more complicated. Multiple people have interests in the same property. Multiple
        names may appear on the policy. Multiple signatures may be required to endorse a check. And
        when those co-owners disagree about whether to settle, how to repair, or who gets what share
        of the proceeds, the claim can grind to a halt &mdash; sometimes for years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines the legal and practical issues that arise when co-owned property
        suffers a loss. It covers the different ownership structures, how each affects the insurance
        claim, the insurable interest question for each co-owner, severability of interests clauses,
        the innocent co-insured doctrine, California community property rules, and practical
        strategies for co-owners who need to navigate a joint claim without losing their minds &mdash;
        or their money.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Joint Ownership Creates Problems in Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance policy is a contract. It has a named insured &mdash; the person (or persons)
        identified on the{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        as the policyholder. The insurer&rsquo;s obligations run to the named insured. The claim
        check is made payable to the named insured (and often the mortgage company). The{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
          proof of loss
        </Link>{' '}
        must be signed by the named insured. The duties after loss &mdash; protecting the property,
        cooperating with the investigation, submitting to an examination under oath &mdash; fall on
        the named insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When there is one named insured, the lines of authority are clear. When there are two or more,
        every one of those obligations, rights, and procedures must be shared &mdash; or fought over.
        The insurance company may not know who to talk to, who to pay, or whose instructions to
        follow. And if the co-owners are in conflict, the insurer may use that conflict as a reason
        to delay or withhold payment entirely.
      </p>

      <CalloutBox variant="important" title="The Core Problem">
        <p>
          Insurance companies issue <strong>one check</strong>. Co-owners have
          <strong> multiple interests</strong>. When those interests conflict &mdash; one co-owner
          wants to rebuild, the other wants to cash out; one co-owner cooperates with the insurer,
          the other refuses; one co-owner caused the loss, the other is innocent &mdash; the
          single-check system breaks down. Understanding your ownership structure, your policy
          rights, and California law is the only way to protect yourself.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Co-Ownership Structures and Their Insurance Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all co-ownership is the same. The legal structure under which you hold title to the
        property determines your rights, your share, and &mdash; critically &mdash; what happens
        when a claim is filed. There are four principal forms of co-ownership in California, each
        with distinct implications for insurance claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Joint Tenancy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a <strong>joint tenancy</strong>, two or more persons own an undivided interest in the
        entire property. Each joint tenant owns an equal share. The defining feature of joint tenancy
        is the <strong>right of survivorship</strong>: when one joint tenant dies, their interest
        passes automatically to the surviving joint tenant(s) &mdash; it does not go through probate
        and is not governed by the deceased tenant&rsquo;s will.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance implications:</strong> Each joint tenant has an{' '}
        <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
          insurable interest
        </Link>{' '}
        in the <em>entire</em> property, not merely their fractional share. This is because each
        joint tenant has an undivided right to possess and use the whole property. If two siblings
        hold a home as joint tenants, each has an insurable interest in the full value of the home.
        This does not mean each can collect the full value independently &mdash; it means the insurer
        cannot limit either sibling&rsquo;s interest to 50%. The claim payment should reflect the
        full value of the loss, payable to both joint tenants.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Joint tenancy is common among siblings who inherit property from parents when the deed was
        structured with survivorship rights, and among married couples in non-community-property
        states. In California, married couples more commonly hold title as community property or
        community property with right of survivorship, but joint tenancy remains available.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tenancy in Common
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a <strong>tenancy in common</strong>, two or more persons each own a defined share of the
        property &mdash; which need not be equal. One co-tenant might own 60% and the other 40%.
        There is <strong>no right of survivorship</strong>: when a tenant in common dies, their share
        passes through their estate (by will or intestate succession), not automatically to the
        surviving co-tenants.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance implications:</strong> Each tenant in common has an insurable interest
        proportional to their ownership share. If you own a 40% tenancy in common interest, your
        insurable interest is 40% of the property&rsquo;s value. This has enormous implications for
        claim payments. If only one co-tenant is named on the policy, the insurer may argue that it
        owes only the named insured&rsquo;s proportionate share &mdash; not the full loss. If both
        co-tenants are named, the check should reflect the full value, but disputes about division
        of the proceeds can still arise.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tenancy in common is the default form of co-ownership in California when the deed does not
        specify another form. It is extremely common in inherited property situations where a parent
        dies and leaves a home to multiple children, and in investment property partnerships.
      </p>

      <CalloutBox variant="warning" title="The Unequal Shares Problem">
        <p>
          When tenants in common have unequal ownership shares, the insurance claim becomes a
          division-of-proceeds dispute. Suppose three siblings inherit a home &mdash; one holds 50%
          and the other two hold 25% each. A fire destroys the home and the insurer pays the full
          replacement cost. Who gets what? The policy does not allocate proceeds among co-owners.
          If the co-owners cannot agree, the dispute may require legal action &mdash; a partition
          action, an interpleader, or a court order directing the allocation. The insurer does not
          resolve ownership disputes. It writes a check. What happens next is the co-owners&rsquo;
          problem.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Community Property (California)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is a <strong>community property</strong> state. Property acquired during a
        marriage is presumed to be community property, owned equally by both spouses, regardless
        of whose name is on the deed or whose income was used to purchase it. California also
        recognizes <strong>community property with right of survivorship</strong>, which combines
        the community property presumption with the automatic transfer feature of joint tenancy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance implications:</strong> Because community property is owned equally by
        both spouses, both spouses have an insurable interest in the full value of the property.
        In an intact marriage, this is rarely a problem &mdash; both spouses are typically named
        on the policy, the claim is handled jointly, and the check is issued to both. The real
        complications arise during and after <strong>divorce</strong>, discussed in detail below.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tenancy by the Entirety
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Tenancy by the entirety</strong> is a form of co-ownership available only to
        married couples in certain states. It functions similarly to joint tenancy &mdash; with a
        right of survivorship &mdash; but with the additional protection that neither spouse can
        unilaterally sever the tenancy or transfer their interest without the other&rsquo;s consent.
        <strong> California does not recognize tenancy by the entirety.</strong> However, if you own
        property in a state that does (approximately 25 states recognize this form), and the
        property is insured, both spouses have an insurable interest in the entire property and
        neither can act unilaterally on the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Controls the Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss occurs to co-owned property, one of the first questions is: <strong>who has
        the right to file the claim, communicate with the adjuster, make decisions about repairs,
        and accept or reject settlement offers?</strong> The answer depends on the policy language,
        the ownership structure, and whether the co-owners can agree.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Named Insured Question
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/named-vs-additional-insured" className="text-[#2E74B5] hover:underline">
          named insured
        </Link>{' '}
        is the person or entity identified on the declarations page. In a co-ownership situation,
        the critical question is whether <strong>all co-owners are named on the policy</strong>.
        If both siblings are named insureds, both have equal rights under the policy &mdash; the
        right to file a claim, submit a proof of loss, receive notices, and participate in
        settlement discussions. If only one sibling is named, the other may have no direct
        relationship with the insurer at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a common and devastating mistake. One co-owner obtains the insurance policy and lists
        only themselves as the named insured. When a loss occurs, the unnamed co-owner discovers they
        have no standing to communicate with the insurer, no right to receive claim payments, and no
        ability to enforce the policy. Their only recourse may be against the named co-owner &mdash;
        not the insurance company.
      </p>

      <CalloutBox variant="tip" title="Ensure All Co-Owners Are Named">
        <p>
          If you co-own property with anyone &mdash; a sibling, a partner, an ex-spouse, a business
          associate &mdash; confirm that <strong>all co-owners are named insureds</strong> on the
          policy. Review the declarations page. If your name is not on it, you are not a party to
          the insurance contract, and you may have no direct rights when a loss occurs. Getting added
          as a named insured is typically straightforward: contact the insurance agent, provide your
          information, and request a policy endorsement adding you. Do this <em>before</em> a loss
          occurs.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Signing the Proof of Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
          proof of loss
        </Link>{' '}
        is a sworn statement, signed under penalty of perjury, that documents the claim. Most
        policies require it to be signed by &ldquo;the insured.&rdquo; When there are multiple
        named insureds, the question is whether <em>all</em> must sign or whether <em>any one</em>
        can sign on behalf of all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The general rule is that <strong>each named insured must sign the proof of loss</strong>,
        because each is making a sworn statement about their own claim. An insurer can refuse to
        process a proof of loss that is missing a required signature. This becomes a serious
        problem when co-owners are in conflict: if one co-owner refuses to sign the proof of loss,
        the other co-owner&rsquo;s claim can be held hostage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, some insurers will accept a proof of loss signed by fewer than all named
        insureds, particularly when accompanied by an explanation of why the other insured cannot
        or will not sign. But others will insist on all signatures. If you are in this situation,
        document your efforts to obtain the co-owner&rsquo;s signature, put your request in writing,
        and consult with a Public Adjuster or attorney about how to proceed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Authority to Make Claim Decisions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Settlement authority is one of the most contentious issues in joint-ownership claims. If
        the insurer offers $200,000 to settle a claim on a co-owned property and one co-owner
        wants to accept while the other wants to negotiate for more, the insurer is caught in the
        middle. Most policies do not address this scenario explicitly. The insurer may refuse to
        pay until both insureds agree, creating a deadlock that can last months or years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under general agency law principles, one co-owner does not have authority to bind another
        co-owner to a settlement unless a formal agency relationship exists (such as a power of
        attorney). A settlement signed by only one co-owner may not release the insurer from
        liability to the other. This is why insurers often insist on all parties signing a
        settlement agreement before issuing final payment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Check Problem: Multiple Payees Who Cannot Agree
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the rubber meets the road. The insurer writes a check. It is made payable
        to &ldquo;John Doe AND Jane Doe AND First National Bank&rdquo; (the mortgage company).
        The check requires all payees&rsquo; endorsements to be deposited. John and Jane are
        siblings who inherited the property. They do not get along. Jane wants to rebuild. John
        wants to sell the lot and split the cash. Neither will endorse the check unless the other
        agrees to their terms. The mortgage company will not release its interest until the
        property is repaired or the loan is paid off. The check sits in a drawer. The damaged
        property deteriorates further. Everyone is stuck.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This scenario plays out with depressing frequency. The insurer has fulfilled its
        obligation &mdash; it issued the check. The problem is that the payees cannot agree on
        what to do with it. The insurer is not required to mediate between co-owners, allocate the
        proceeds, or issue separate checks to each co-owner based on their ownership share. It
        issues one check to all named insureds and walks away.
      </p>

      <CalloutBox variant="warning" title="The Check Can Sit Uncashed for Months or Years">
        <p>
          There is no requirement that co-owners agree within any particular time frame. A claim
          check can sit unendorsed for months while co-owners litigate or negotiate. Meanwhile,
          the property remains damaged. If the policy includes replacement cost provisions that
          require the repairs to be completed within a certain time period, the delay caused by
          co-owner conflict can result in the loss of replacement cost benefits &mdash; reducing
          the payout to actual cash value. The co-owners&rsquo; inability to agree can literally
          cost them money.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Breaking the Deadlock
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When co-owners cannot agree on the use of insurance proceeds, there are several legal
        mechanisms that can break the impasse:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Partition action:</strong> Under California Code of Civil Procedure &sect; 872.210,
          any co-owner of property can petition the court for a <strong>partition</strong> &mdash;
          a forced division or sale of the property. In the context of an insurance claim, a
          partition action can be used to force the sale of the damaged property and the division of
          the proceeds (including insurance proceeds) among the co-owners according to their
          respective interests.
        </li>
        <li>
          <strong>Interpleader:</strong> If the insurer is holding funds that multiple parties claim,
          the insurer can file an <strong>interpleader action</strong>, depositing the disputed funds
          with the court and asking the court to determine who is entitled to what share. This
          relieves the insurer of the obligation to choose sides.
        </li>
        <li>
          <strong>Court-ordered distribution:</strong> A co-owner can petition the court for an
          order directing the distribution of insurance proceeds according to each party&rsquo;s
          ownership interest. This is often faster than a full partition action.
        </li>
        <li>
          <strong>Mediation:</strong> Voluntary{' '}
          <Link href="/resources/insurance-mediation" className="text-[#2E74B5] hover:underline">
            mediation
          </Link>{' '}
          between co-owners can resolve disputes more efficiently and less expensively than
          litigation. Many family disputes over inherited property are resolved through mediation,
          particularly when a neutral third party can help the co-owners see the financial cost of
          continued conflict.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurable Interest Question for Co-Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every named insured must have an{' '}
        <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
          insurable interest
        </Link>{' '}
        in the property. For co-owners, the question is: <strong>what is the extent of each
        co-owner&rsquo;s insurable interest?</strong> Is it limited to their fractional ownership
        share, or does it extend to the full value of the property?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on the type of co-ownership and the jurisdiction. California Insurance
        Code &sect; 281 defines insurable interest broadly: &ldquo;Every interest in property, or
        any relation thereto, or liability in respect thereof, of such a nature that a
        contemplated peril might directly damnify the insured, is an insurable
        interest.&rdquo; Under this definition:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Joint tenants</strong> each have an insurable interest in the full value of the
          property, because each has an undivided right to possess and use the entire property.
        </li>
        <li>
          <strong>Tenants in common</strong> have an insurable interest at least equal to their
          proportionate share. However, a tenant in common may also have an insurable interest in
          the full value if they have a financial stake in the entire property &mdash; for example,
          if they are responsible for property taxes or maintenance on the whole property, or if the
          loss of the property would impair their right to use and enjoy it.
        </li>
        <li>
          <strong>Community property spouses</strong> each have an insurable interest in the full
          value of community property.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect; 281 and its broad any-relation-to-the-property
        definition,
        a co-owner&rsquo;s insurable interest is not necessarily limited to their fractional ownership
        share. A co-owner who resides in the property, pays the mortgage,
        and maintains the home can be directly damnified by loss to the
        <em> entire</em> property, not merely their percentage interest. This principle is significant
        for co-owners who are bearing the primary financial responsibility for the property.
      </p>

      <CalloutBox variant="legal" title="Insurable Interest Is Not Always a Fractional Calculation">
        <p>
          Do not assume that a 50% co-owner can only recover 50% of the loss. The insurable interest
          analysis examines the <strong>economic reality</strong> of the co-owner&rsquo;s stake in
          the property. A co-owner who lives in the home, pays the mortgage, covers insurance
          premiums, and maintains the property may have an insurable interest that exceeds their
          bare ownership percentage. Conversely, a co-owner who has never lived in the property, has
          never contributed to its maintenance, and has no financial exposure if it is destroyed may
          have a weaker claim to insurable interest. The analysis is fact-specific, and a qualified
          Public Adjuster or attorney should evaluate the specific circumstances.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Co-Owners Disagree About Settlement, Repairs, or Cashing Out
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Co-owner disputes in insurance claims fall into several recurring patterns:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Rebuild vs. Cash Out
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common dispute. One co-owner wants to rebuild the damaged property and continue
        living there or renting it out. The other wants to take the insurance money, sell the
        property as-is (or the lot, if it is a total loss), and walk away. This dispute is
        particularly common among siblings who inherited property and have different financial needs,
        different emotional attachments, and different visions for the property&rsquo;s future.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance policy does not resolve this dispute. The policy pays for the loss. How the
        co-owners use the proceeds is their decision &mdash; and if they cannot agree, it becomes
        a legal dispute among the co-owners, not a dispute with the insurer. The co-owner who wants
        to rebuild cannot compel the other to contribute their share of the proceeds toward
        construction. The co-owner who wants to cash out cannot force the other to accept a buyout.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Practical impact on the claim:</strong> Most homeowner policies with replacement
        cost coverage pay actual cash value (ACV) first and then pay the difference between ACV
        and replacement cost only after the repairs are actually completed. If the co-owners cannot
        agree to rebuild, the repairs will never be completed, and the replacement cost holdback will
        never be released. The co-owners will be stuck with the lower ACV payment. This means the
        co-owners&rsquo; dispute directly reduces the total payout.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scope of Repairs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when both co-owners agree to repair, they may disagree about the scope. One may want
        a comprehensive restoration to pre-loss condition. The other may want minimal repairs to
        reduce out-of-pocket costs. They may disagree about contractor selection, material choices,
        or whether to invoke{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
          ordinance or law coverage
        </Link>{' '}
        for code upgrades. These disputes can delay the start of repairs, increase interim housing
        costs (if applicable), and create additional damage from weathering or neglect of the
        damaged property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cooperation with the Insurer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance policies impose duties on the insured: protect the property from further damage,
        cooperate with the investigation, submit to an{' '}
        <Link href="/resources/examination-under-oath" className="text-[#2E74B5] hover:underline">
          examination under oath
        </Link>{' '}
        if requested, and provide documentation. When one co-owner fulfills these duties and the
        other refuses, the insurer may argue that the non-cooperating co-owner has breached the
        policy conditions, potentially jeopardizing the entire claim. Whether one co-owner&rsquo;s
        breach can void coverage for the other co-owner depends on the <strong>severability of
        interests clause</strong>, discussed below.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Severability of Interests: The Policy Provision That Matters Most
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>severability of interests</strong> clause (sometimes called the
        &ldquo;separation of insureds&rdquo; provision) is the single most important policy
        provision in any joint-ownership claim. It determines whether one co-owner&rsquo;s
        conduct can destroy coverage for the other.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 homeowner&rsquo;s policy includes a severability provision that
        reads, in relevant part:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the property side, the analysis turns on whether the policy&apos;s exclusionary
        language reads &ldquo;the insured&rdquo; or &ldquo;an insured&rdquo; &mdash; and under
        <em> Century-National v. Garcia</em>, the standard-form statutes protect the innocent
        insured even against &ldquo;an insured&rdquo; phrasing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The upshot: the policy is read as if each named insured has separate coverage. The acts, omissions, and conduct of one insured are not automatically attributed to
        the other. If co-owner A commits fraud &mdash; inflating the claim, misrepresenting damage,
        or submitting false documents &mdash; the severability clause means that co-owner B&rsquo;s
        coverage should not be voided by co-owner A&rsquo;s misconduct, provided co-owner B was not
        involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the scope of the severability clause is not unlimited. Some policy conditions are
        considered &ldquo;joint obligations&rdquo; that apply to all insureds collectively, while
        others are &ldquo;several obligations&rdquo; that apply to each insured individually.
        Courts have wrestled with which is which, and the results are not uniform.
      </p>

      <CalloutBox variant="info" title="Joint vs. Several Obligations">
        <p>
          <strong>Several obligations</strong> (apply individually to each insured): the duty not
          to commit fraud, the duty not to intentionally cause a loss, the duty to cooperate with
          the investigation (each insured cooperates for themselves). <strong>Joint
          obligations</strong> (apply to all insureds collectively): the duty to protect the
          property from further damage, the duty to maintain the property. When a policy condition
          is classified as &ldquo;several,&rdquo; one co-owner&rsquo;s breach does not affect the
          other. When it is classified as &ldquo;joint,&rdquo; one co-owner&rsquo;s breach can
          affect all.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Arson Problem: When One Co-Owner Caused the Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No joint-ownership scenario is more legally charged than the one where <strong>one co-owner
        is responsible for the loss</strong>. The most dramatic version is arson: one co-owner
        intentionally sets fire to the property. But intentional damage takes many forms &mdash;
        vandalism during a domestic dispute, deliberate neglect, or destruction driven by financial
        desperation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every homeowner&rsquo;s policy contains an intentional loss exclusion, typically worded:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure for loss caused intentionally by or at the direction of an
        &lsquo;insured.&rsquo;&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question is: when one co-owner intentionally causes the loss, does the exclusion
        bar <strong>all</strong> insureds from recovering, or only the one who committed the act?
        This is the <strong>innocent co-insured</strong> problem, and it has generated significant
        case law nationwide.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Innocent Co-Insured Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>innocent co-insured doctrine</strong> holds that when one insured intentionally
        causes a loss, the other insured &mdash; who had no knowledge of or involvement in the
        intentional act &mdash; should still be able to recover their share of the insurance
        proceeds. The doctrine is grounded in two principles: the severability of interests clause,
        and basic fairness.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where a policy contains a severability clause, courts in multiple states, including Illinois
        and Iowa, have addressed whether an innocent co-insured can recover when the other insured
        commits arson. The prevailing view holds that the &ldquo;intentional acts&rdquo; exclusion
        should be applied separately to each insured under the severability clause. The arsonist
        co-owner is barred. The innocent co-owner is not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Borman v. State Farm Fire &amp; Casualty Co.</em>, 446 Mich. 482, 521 N.W.2d 266 (1994)</strong>
        extended this analysis to domestic situations. The Michigan Supreme Court held that an
        innocent co-insured could recover their share of the proceeds under the severability clause.
        The court reasoned that the severability provision requires the policy to be read as providing
        separate coverage to each insured, and the guilty party&rsquo;s intentional act could not be
        imputed to the innocent co-insured.
      </p>

      <CalloutBox variant="important" title="The Innocent Co-Insured&rsquo;s Recovery Is Typically Limited to Their Share">
        <p>
          Even under the innocent co-insured doctrine, the innocent co-owner typically recovers only
          <strong> their proportionate interest</strong> in the property &mdash; not the full policy
          limits. If two co-owners each hold a 50% interest and one commits arson, the innocent
          co-owner can recover 50% of the loss. The guilty co-owner recovers nothing. The insurer
          does not pay the full value of the loss when one insured caused it intentionally. In
          <strong><em> Osbon v. National Union Fire Insurance Co.</em>, 632 So. 2d 1158 (La. 1994)</strong>,
          the Louisiana Supreme Court confirmed this proportionate recovery approach.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        States That Reject the Innocent Co-Insured Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all states follow the innocent co-insured doctrine. Some courts have held that the
        intentional loss exclusion bars recovery by <em>all</em> insureds when <em>any</em> insured
        intentionally causes the loss. The rationale is textual: the exclusion says &ldquo;caused
        intentionally by <strong>an</strong> insured,&rdquo; not &ldquo;by <strong>the</strong>
        insured seeking recovery.&rdquo; Under this reading, the use of the indefinite article
        &ldquo;an&rdquo; means that the intentional act of any one insured triggers the exclusion
        for all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between these approaches is significant enough that it can determine whether
        an innocent co-owner recovers hundreds of thousands of dollars or nothing. In California, the
        weight of authority favors the innocent co-insured, but the specific policy language always
        matters. Some policies have been drafted with express language to override the severability
        clause in intentional-loss situations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&rsquo;s Legislative and Judicial Response: Insurance Code &sect; 533
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has addressed the innocent co-insured problem through Insurance Code &sect; 533,
        which provides that an insurer is not liable for a loss caused by the &ldquo;willful act of
        the insured.&rdquo; California courts have interpreted the use of &ldquo;the insured&rdquo;
        &mdash; the definite article &mdash; as limiting the exclusion to the specific insured who
        committed the willful act, not to all insureds on the policy. This interpretation, read
        alongside severability clauses in standard homeowner policies, effectively protects the
        innocent co-insured in residential property claims in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under this framework, the innocent co-insured&rsquo;s recovery is limited to their
        proportionate interest in the property. The innocent co-insured is not entitled to the
        full policy limits &mdash; only their ownership share. But the intentional act of one
        insured cannot zero out the recovery of the other.
      </p>

      <CalloutBox variant="legal" title="California Insurance Code &sect;&sect; 2070-2071 and 533: The Standard-Form Floor">
        <p>
          The controlling California Supreme Court authority on innocent co-insured rights in
          residential fire insurance is <em>Century-National Ins. Co. v. Garcia</em> (2011) 51
          Cal.4th 564. The holding does not rest on &sect; 533 alone &mdash; it rests on the
          mandatory standard fire policy framework. Under <strong>Insurance Code
          &sect;&sect; 2070&ndash;2071</strong>, California fire policies must use the &sect; 2071
          standard form (or provide coverage &ldquo;substantially equivalent&rdquo; to it). The
          &sect; 2071 standard form uses &ldquo;the insured&rdquo; (severable, singular) in its
          willful-act exclusion language, consistent with <strong>Insurance Code
          &sect; 533</strong>&rsquo;s public-policy framing. A privately drafted policy exclusion
          that broadens this to &ldquo;any insured&rdquo; (collective) provides materially less
          coverage than the standard form requires &mdash; and is therefore invalid as to
          innocent co-insureds. The practical result: the innocent co-insured can recover
          regardless of another insured&rsquo;s willful conduct.
        </p>
        <p className="mt-3">
          The operative statutory mechanism is the &sect; 2071 standard-form floor, not &sect; 533
          standing alone. &sect; 533 supplies the public-policy framing that the standard form
          incorporates; the &sect; 2071 standard-form floor is what invalidates a broader
          privately drafted exclusion. For commercial co-ownership situations (business partners,
          LLCs), the innocent co-insured analysis relies on common law and the specific policy
          language &mdash; the mandatory &sect;&sect; 2070&ndash;2071 standard form applies to
          fire insurance on real property, not to commercial policies generally. If your
          co-ownership involves commercial property, consult with an attorney who can analyze
          the specific policy provisions.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Community Property and Insurance Claims During and After Divorce
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Divorce creates one of the most complicated insurance scenarios possible. A married
        couple&rsquo;s home is community property. Both spouses are named insureds. One spouse
        moves out. The other remains. The divorce is not yet final. A fire, a burst pipe, a tree
        falls on the roof. Who files the claim? Who gets the check? Does the spouse who moved out
        still have coverage?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        During the Divorce: Before the Final Judgment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Until the divorce is final and the property is awarded to one spouse by the court, both
        spouses remain co-owners of community property. Both remain named insureds on the policy
        (unless one has been removed, which requires the other&rsquo;s consent or a court order).
        Both have an insurable interest in the full value of the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates immediate practical problems. The spouse who moved out may have no access to the
        property, no ability to protect it from further damage, and no knowledge of what is happening
        with the claim. The spouse who remains may be dealing with the adjuster, making repair
        decisions, and controlling the claim proceeds without the other spouse&rsquo;s involvement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California family law provides some protection.</strong> Under Family Code
        &sect; 1101, each spouse has a fiduciary duty to the other with respect to community
        property. This means the spouse handling the insurance claim has a legal obligation to act
        in the best interest of both spouses &mdash; not just themselves. A spouse who accepts a
        lowball settlement, diverts claim proceeds, or fails to pursue available coverage may be
        liable for breach of fiduciary duty.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        After the Divorce: When the Property Is Awarded
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the divorce is final and the property is awarded to one spouse by the court, the other
        spouse&rsquo;s ownership interest terminates. But the <strong>insurance policy may not
        automatically update</strong> to reflect this change. If both spouses were named insureds
        before the divorce and the policy is not amended, the non-owning ex-spouse may still
        technically be a named insured &mdash; with no insurable interest in the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters for two reasons. First, the insurer may issue a claim check payable to both
        ex-spouses, even though only one owns the property. The ex-spouse who no longer has an
        ownership interest must endorse the check but has no entitlement to the proceeds &mdash;
        creating leverage that can be abused. Second, if the non-owning ex-spouse refuses to
        endorse, the owning ex-spouse may need a court order to access the insurance proceeds.
      </p>

      <CalloutBox variant="warning" title="Update Your Policy Immediately After Divorce">
        <p>
          The moment a divorce decree awards the property to one spouse, that spouse should contact
          the insurance agent and request that the policy be amended to remove the ex-spouse as a
          named insured. Failure to do this creates exactly the kind of check-endorsement deadlock
          described above. If the ex-spouse refuses to cooperate in removing themselves from the
          policy, a court order may be necessary. Do not wait for a loss to discover this problem.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Arson Scenario in Divorce
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Intentional destruction of the marital home during a contentious divorce is, tragically, not
        rare. When one spouse intentionally sets fire to or otherwise destroys community property,
        California Insurance Code &sect; 533, as interpreted by California courts alongside the
        policy&rsquo;s severability clause, protects the innocent spouse. The innocent spouse
        can recover their community property share (typically 50%) of the insurance proceeds. The
        guilty spouse&rsquo;s share is forfeited under the intentional loss exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also, the innocent spouse may have family law remedies. Under Family Code
        &sect; 1101(h), a spouse who intentionally destroys community property is liable for a
        penalty equal to the value of the destroyed asset. This means the guilty spouse may owe the
        innocent spouse <em>more</em> than the insurance proceeds &mdash; they may owe the full
        value of the property that was destroyed, regardless of insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inherited Property: The Sibling Nightmare
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inherited property is the most common source of joint-ownership insurance disputes. A parent
        dies and leaves the family home to two, three, or four children. The children may have
        dramatically different financial situations, different emotional attachments to the property,
        and different plans for its future. One may be living in the home (sometimes rent-free). One
        may live across the country and view the property purely as a financial asset. One may have
        sentimental attachment and refuse to sell at any price.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss occurs, all of these tensions explode simultaneously. The insurance claim forces
        decisions that the siblings have been avoiding: What is the property worth? Who is
        responsible for maintenance? Who should control the claim? How should the proceeds be divided?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common Inherited-Property Insurance Mistakes
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Failing to update the policy after the parent&rsquo;s death.</strong> If the
          parent was the sole named insured and the policy was never updated after their death, the
          children may discover that the policy provides limited or no coverage. The named insured
          is deceased. The children are not named on the policy. The insurer may issue payment to
          the estate &mdash; not the individual heirs &mdash; creating probate complications.
          See our article on{' '}
          <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
            what happens to insurance when the policyholder dies
          </Link>{' '}
          for a detailed analysis.
        </li>
        <li>
          <strong>Only one sibling obtaining insurance.</strong> Often, one sibling takes the
          initiative to get a new policy after the parent&rsquo;s death, lists only themselves as
          the named insured, and the other siblings assume they are covered. They are not. If the
          policy names only one sibling, the other siblings have no direct rights under the policy.
        </li>
        <li>
          <strong>Underinsuring the property.</strong> Inherited homes are often older, and families
          frequently maintain the same coverage limits the parent had &mdash; limits that may be
          decades out of date and far below current replacement cost.
        </li>
        <li>
          <strong>Not having any insurance at all.</strong> In some cases, the parent&rsquo;s
          homeowner policy lapses after death, and no one obtains replacement coverage. The property
          sits uninsured for months or years while the estate is being administered.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Unmarried Partners and Co-Owners Without Legal Formalities
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unmarried couples who buy property together, friends who invest in a home jointly, or
        family members who pool resources to purchase a property often do so without the legal
        infrastructure that married couples have. There may be no written co-ownership agreement,
        no defined ownership percentages, no designated decision-maker, and no legal framework for
        resolving disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss occurs, the lack of formality becomes a crisis. If the deed lists both parties
        but the insurance policy names only one, the unnamed co-owner has no policy rights. If the
        relationship ends and the parties separate, the insurance may remain in joint names long
        after the relationship is over &mdash; creating the same endorsement and control problems
        as a divorce, but without the family court framework to resolve them.
      </p>

      <CalloutBox variant="tip" title="Co-Ownership Agreement Is Essential">
        <p>
          If you co-own property with anyone other than a spouse, you should have a written
          <strong> co-ownership agreement</strong> that addresses, at minimum: (1) each party&rsquo;s
          ownership percentage; (2) who is responsible for obtaining and paying for insurance;
          (3) who is authorized to file claims and communicate with the insurer; (4) how insurance
          proceeds will be divided; (5) what happens if one party wants to sell or the relationship
          ends. This agreement should be prepared by an attorney and executed before or at the time
          of purchase. It can prevent years of litigation after a loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Partners and Investment Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When business partners co-own investment property, the insurance issues multiply. Business
        partnerships may hold property in individual names, in a general partnership, in an LLC, or
        in a corporation. Each structure has different implications for who is the named insured,
        what constitutes the insurable interest, and how claim proceeds are distributed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common mistake is holding property in individual names while the insurance is in
        the partnership or LLC name (or vice versa). This creates a mismatch between the legal owner
        and the named insured that the carrier can exploit at claim time. The correct approach is to
        ensure that the entity that holds legal title to the property is the named insured on the
        policy, and that the policy form matches the property&rsquo;s use (landlord policy for rental
        property, commercial policy for commercial use).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Partnership disputes add another layer. If one partner wants to settle the claim quickly at
        a lower amount and the other wants to hold out for full value, the partnership agreement
        should govern &mdash; but many small partnerships have no written agreement, or the
        agreement does not address insurance claims. In the absence of a governing agreement,
        partnership law (California Corporations Code &sect; 16401 et seq.) provides default rules,
        but those rules may not produce the outcome either partner expects.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Mortgage Company Complication
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most co-owned properties have a mortgage. The mortgage company is listed on the insurance
        policy as a <strong>loss payee</strong> or <strong>mortgagee</strong>. Under the standard
        mortgage clause, the insurer must include the mortgage company on all claim checks above a
        certain threshold (often $10,000 or $20,000, depending on the policy and the lender&rsquo;s
        requirements).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means the claim check is payable to &ldquo;Co-Owner A AND Co-Owner B AND Mortgage
        Company.&rdquo; Three-party checks require all three endorsements. The mortgage company
        will typically hold the proceeds in escrow and release them in stages as repairs are
        completed &mdash; a process that is cumbersome even in single-owner claims. When co-owners
        disagree about repairs, the mortgage company&rsquo;s involvement adds another layer of
        complexity: the lender has its own interest in seeing the property restored to protect its
        collateral, and it may refuse to release funds for anything other than repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If one co-owner wants to use the insurance proceeds to pay off the mortgage and walk away,
        the mortgage company will generally consent to this &mdash; it gets its loan repaid. But the
        other co-owner, who wanted to rebuild, may object to the mortgage being paid off with what
        they view as their repair money. The resulting three-way deadlock can be extraordinarily
        difficult to resolve without legal intervention.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Strategies for Co-Owners Navigating a Joint Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a co-owner facing an insurance claim on jointly owned property, the following
        steps can help protect your interests and move the claim forward:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Confirm Your Policy Status Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Request a copy of the current{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        and the full policy. Verify that all co-owners are named insureds. Verify the coverage
        limits. Identify the mortgage company and any other loss payees. If your name is not on the
        policy, understand that you may not have direct rights against the insurer &mdash; your
        recourse may be against your co-owner.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Communicate in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every communication between co-owners about the insurance claim should be in writing &mdash;
        email at minimum. If you and your co-owner disagree, you need a record of what was proposed,
        what was rejected, and why. If a dispute later ends up in court or mediation, the written
        record will be critical. Verbal agreements between co-owners are notoriously difficult to
        enforce.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Hire Your Own Public Adjuster or Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When co-owners have conflicting interests, a single representative cannot adequately
        represent both. One co-owner should not assume that the Public Adjuster or attorney hired
        by the other co-owner is looking out for their interests. If you have a significant
        ownership stake and the claim is substantial, retain your own professional. The cost of
        independent representation is far less than the cost of being marginalized in a claim that
        involves your property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Do Not Sign Anything Without Understanding It
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Settlement agreements, releases, and{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
          proofs of loss
        </Link>{' '}
        are legally binding documents. Once you sign a release, you may be giving up rights that
        cannot be recovered. If your co-owner or the insurer presents a document for your signature,
        have it reviewed by your own representative before signing. This is especially important for
        settlement agreements that purport to release the insurer from all further claims &mdash;
        you may be releasing rights to supplemental payments, replacement cost holdback, or other
        benefits that have not yet been calculated.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Consider a Buyout
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If one co-owner wants to rebuild and the other wants to cash out, a <strong>buyout</strong>
        may be the most practical solution. The co-owner who wants to keep the property offers to
        buy the other co-owner&rsquo;s interest at fair market value (or at an agreed price). The
        insurance proceeds are then used by the remaining owner to fund the repairs. This eliminates
        the conflict and allows the claim to proceed with a single decision-maker.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The buyout can happen before or after the insurance claim is settled. If it happens before,
        the parties need to agree on how to value the co-owner&rsquo;s interest (which may include
        their share of the expected insurance proceeds). If it happens after, the insurance proceeds
        are divided first, and then the buyout addresses the remaining property interest.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Address the Mortgage Company Early
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If there is a mortgage on the property, contact the lender early in the process to understand
        their requirements for releasing insurance proceeds. Many lenders will require the co-owners
        to submit a repair plan before releasing any funds. Knowing these requirements upfront allows
        the co-owners to plan accordingly &mdash; or to negotiate with the lender for a different
        arrangement if they plan to sell rather than repair.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        7. File Your Own Proof of Loss If Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your co-owner refuses to file a proof of loss or is unreachable, you should file your
        own. Under the severability of interests clause, the policy applies separately to each
        insured. You have an independent obligation to comply with the policy conditions &mdash;
        and an independent right to make a claim. File your own proof of loss documenting your
        interest, your share of the loss, and the basis for your claim. If the insurer refuses to
        accept it without the other co-owner&rsquo;s signature, document that refusal in writing
        and consult with an attorney about your options.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        8. Protect the Property Regardless of the Dispute
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The duty to protect the property from further damage applies to all co-owners. If you are
        in a dispute with your co-owner, do not let the property deteriorate while you argue. Board
        up openings, tarp the roof, remove standing water, and take whatever{' '}
        <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] hover:underline">
          emergency measures
        </Link>{' '}
        are necessary to prevent additional damage. Document everything with photographs and
        receipts. If the insurer later denies coverage for additional damage caused by failure to
        protect the property, you do not want to be the co-owner who failed to act.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Case Law Summary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following cases are particularly relevant to joint-ownership insurance disputes:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>California Insurance Code &sect; 281:</strong> Defines insurable interest broadly
          (every interest or relation to property such that a peril might directly damnify the
          insured). A co-owner&rsquo;s insurable interest is not necessarily limited to their
          fractional ownership share; the analysis examines the economic reality of the stake.
        </li>
        <li>
          <strong><em>Borman v. State Farm Fire &amp; Casualty Co.</em>, 446 Mich. 482, 521 N.W.2d
          266 (1994):</strong> The Michigan Supreme Court held the innocent co-insured could recover
          under the severability clause.
        </li>
        <li>
          <strong><em>Osbon v. National Union Fire Insurance Co.</em>, 632 So. 2d 1158
          (La. 1994):</strong> Confirmed proportionate recovery for innocent co-insured; the
          innocent party recovers their ownership share, not the full policy limits.
        </li>
        <li>
          <strong>California Insurance Code &sect; 533:</strong> Courts have interpreted &sect; 533,
          alongside severability clauses, to protect the innocent co-insured in residential property
          claims in California. An innocent co-insured recovers their proportionate share even when
          the other insured intentionally caused the loss.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preventing Joint-Ownership Claim Disasters: A Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are purchasing co-owned property, inheriting it, or currently holding it with
        another person, the following steps will help prevent the worst outcomes if a loss occurs:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Ensure all co-owners are named insureds on the policy.</strong> Review the
          declarations page annually. If a co-owner&rsquo;s name is missing, add them immediately.
        </li>
        <li>
          <strong>Match the policy to the ownership structure.</strong> If the property is held in
          a trust, the trust should be the named insured. If it is held in an LLC, the LLC should
          be the named insured. If title changes, the policy must change.
        </li>
        <li>
          <strong>Verify adequate coverage limits.</strong> Co-owners sometimes underinsure because
          each assumes the other is handling the insurance. Review replacement cost limits annually,
          particularly for inherited property where limits may be decades old.
        </li>
        <li>
          <strong>Execute a co-ownership agreement.</strong> For non-spousal co-owners, a written
          agreement that addresses insurance responsibilities, claim authority, and proceeds
          allocation is essential. Have an attorney prepare it.
        </li>
        <li>
          <strong>Update the policy after any life event.</strong> Death of a co-owner, divorce,
          marriage, addition of a co-owner, transfer to a trust, refinancing &mdash; each is a
          trigger to review and update the insurance.
        </li>
        <li>
          <strong>Maintain records of contributions.</strong> Keep records of who pays the mortgage,
          who pays the insurance premiums, who pays for maintenance and repairs. These records are
          relevant to the insurable interest analysis and to allocation of proceeds.
        </li>
        <li>
          <strong>Identify potential conflicts early.</strong> If you know that you and your
          co-owner have different plans for the property, address those differences before a loss
          forces the issue. A conversation about what to do &ldquo;if something happens&rdquo; is
          far easier than a conversation during a crisis.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Joint ownership of insured property is not inherently problematic. Millions of co-owners
        maintain insurance on shared property without incident. The problems arise when a loss
        occurs and the co-owners discover that their policy was not set up correctly, that their
        interests conflict, or that one co-owner&rsquo;s conduct has put the other&rsquo;s
        coverage at risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The severability of interests clause is the co-owner&rsquo;s most important protection,
        ensuring that the policy is read as providing separate coverage to each insured. California
        Insurance Code &sect; 533, as interpreted by California courts alongside severability clauses,
        provides protection for innocent co-insureds in residential property claims. And the case law
        &mdash; including <em>Borman</em> and decisions from multiple states &mdash; provides a
        substantial body of authority supporting co-owners who are caught in disputes not of their
        making.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the best protection is preparation. Ensure that all co-owners are named on the policy.
        Execute a written co-ownership agreement. Update the insurance every time ownership changes.
        And when a loss occurs, retain independent professional representation if your interests
        diverge from your co-owner&rsquo;s. The insurance claim is one check. Your job is to make
        sure you get your share of it.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Insurance policies and applicable law vary by state and by policy form. The
          case law and statutes discussed in this article reflect reported authorities as of the
          date of publication, but outcomes in any individual case will depend on the specific
          policy language, the facts, and the applicable state law. Always consult with a licensed
          attorney in your jurisdiction about your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Co-Owned Property Damaged? Multiple Names on the Check?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Joint-ownership insurance claims require careful handling to protect every co-owner&rsquo;s
          interest. Whether you are dealing with an inherited property dispute, a divorce-related
          claim, or a disagreement with a co-owner about how to handle the proceeds, a licensed
          Public Adjuster can help you understand your rights under the policy and fight for your
          share of the recovery.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
