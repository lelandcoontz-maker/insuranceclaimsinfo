import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Kurach v. Truck Insurance and Overhead & Profit",
  description:
    "In Kurach (Pa. 2020), the court upheld policy language withholding GC overhead and profit until the policyholder actually pays for it. Here is how it works.",
  summary:
    'In Kurach v. Truck Insurance Exchange (Pa. 2020), the court upheld policy language withholding general contractor overhead and profit until the policyholder actually pays for it. Check whether your own policy contains a similar O&P restriction.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If you believe your insurer has improperly withheld overhead and profit, consult with a licensed attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For decades, the law in most states has been clear: when a property repair requires a general contractor, the insurer owes <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">overhead and profit</Link> as part of the claim payment. Courts across the country have held that O&amp;P is owed whenever a general contractor is &ldquo;reasonably likely&rdquo; to be needed &mdash; regardless of whether the policyholder has actually hired one yet.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Then the insurance industry found a workaround. Instead of fighting the legal standard in court, certain carriers began writing policy language that explicitly withholds O&amp;P from actual cash value payments until the policyholder actually incurs and pays those costs. In 2020, the Pennsylvania Supreme Court validated this approach in a 4&ndash;3 decision that sent shockwaves through policyholder advocacy circles.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case was <em>Kurach v. Truck Insurance Exchange</em>. Understanding it is essential for anyone with a property insurance claim &mdash; because the policy language it approved is designed to strip policyholders of a benefit they have been entitled to for decades.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Background: Gilderman, Mee, and the &ldquo;Reasonably Likely&rdquo; Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand Kurach, you need to understand the two Pennsylvania cases that preceded it.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Gilderman v. State Farm Insurance Co. (Pa. Super. 1994)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        State Farm had a routine practice of deducting a flat 20% from all repair estimates for overhead and profit. The Pennsylvania Superior Court struck this down, holding that repair or replacement costs include &ldquo;any cost that an insured is reasonably likely to incur,&rdquo; including general contractor O&amp;P. The court found that when multiple trades are required, it is &ldquo;reasonably likely&rdquo; that general contractor services will be needed. The insurer may not automatically deduct O&amp;P from actual cash value payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        649 A.2d 941 (Pa. Super. 1994). <a href="https://law.justia.com/cases/pennsylvania/superior-court/1994/437-pa-super-217-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, the State Farm policy in <em>Gilderman</em> was <strong>silent</strong> on O&amp;P. It neither defined actual cash value nor addressed whether contractor fees were included or excluded. The court was interpreting undefined policy terms.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Mee v. Safeco Insurance Co. of America (Pa. Super. 2006)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Safeco denied O&amp;P on a claim arising from a toilet overflow. The Pennsylvania Superior Court held that O&amp;P should be included when the extent of damage is substantial, multiple trades are required, and expert testimony supports that a general contractor&rsquo;s involvement is &ldquo;reasonably likely.&rdquo; The court established a three-factor test: (1) the scope of the damage, (2) the number of trades involved, and (3) whether expert testimony supports the need for a general contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        908 A.2d 344 (Pa. Super. 2006). <a href="https://law.justia.com/cases/pennsylvania/superior-court/2006/a14003-06.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Again, the Safeco policy was <strong>silent</strong> on O&amp;P. The court was filling in a gap where the policy did not speak.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Farmers &ldquo;Next Generation&rdquo; Policy: Filling the Silence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After <em>Gilderman</em> and <em>Mee</em> established that O&amp;P was owed under policies that were silent on the issue, Farmers Insurance &mdash; through its subsidiary Truck Insurance Exchange &mdash; drafted new policy language designed to address the gap. The &ldquo;Farmers Next Generation&rdquo; homeowners policy contained two key provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, the policy acknowledged O&amp;P in the context of replacement cost:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;General contractor fees and charges for general contractor&rsquo;s services will be included in the estimated reasonable replacement costs if it is reasonably likely that the services of a general contractor will be required to manage, supervise and coordinate the repairs.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        That sounds reasonable. But then the policy imposed a critical condition on actual cash value payments:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Actual cash value settlements will not include estimated general contractor fees or charges for general contractor&rsquo;s services unless and until you actually incur and pay such fees and charges, unless the law of your state requires that such fees and charges be paid with the actual cash value settlement.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read the second provision carefully. It says: <em>we will not pay you O&amp;P up front, as part of your actual cash value payment, unless you first spend the money to hire a general contractor &mdash; unless the law of your state forces us to.</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a Catch-22 for policyholders. Many homeowners cannot afford to hire a general contractor without the insurance money to pay for it. The policy withholds the money until the homeowner spends it &mdash; but the homeowner cannot spend money they do not have. The result is that O&amp;P, which can represent 20% of the total repair cost, is effectively eliminated from the initial payment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Kurach v. Truck Insurance Exchange: The 4&ndash;3 Decision
      </h2>
      <CalloutBox variant="important" title="Pennsylvania Case — Persuasive Only, Not Binding in California">
        <p>
          <em>Kurach</em> is a decision of the Pennsylvania Supreme Court. It is not binding on
          California courts. California courts may consider it as persuasive authority on the
          construction of similar policy language, but the actual rule of decision for a California
          claim is set by California statutes (Insurance Code &sect;&sect; 2051, 2051.5), California
          regulations (10 CCR &sect; 2695.9(f)), and California appellate authority. If a California
          carrier cites <em>Kurach</em> as binding precedent for an O&amp;P withholding under a
          California policy, that framing overstates its weight in this jurisdiction.
        </p>
        <p className="mt-3">
          California Insurance Code &sect; 2051(b) defines actual cash value for either a
          total or partial loss as &ldquo;the amount it would cost the insured to repair,
          rebuild, or replace the thing lost or injured less a fair and reasonable deduction
          for physical depreciation based upon its condition at the time of the injury or
          the policy limit, whichever is less.&rdquo; (AB 188 (Stats. 2019, ch. 59),
          effective January 1, 2020, restructured the section, eliminating the prior
          &sect; 2051(b)(1)/(b)(2) bifurcation between total and partial losses.) Whether
          General Contractor Overhead and Profit (GCOP) is part of that calculation has been
          treated differently in California than in Pennsylvania &mdash; the relevant
          California authority comes from California cases interpreting &sect; 2051(b) and
          the &ldquo;like kind and quality&rdquo; standard, not from Kurach.
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        Konrad Kurach and Mark Wintersteen each purchased the Farmers Next Generation policy from Truck Insurance Exchange. Both sustained property damage, filed claims, and had O&amp;P withheld from their actual cash value payments under the &ldquo;unless and until&rdquo; provision. They sued, and the cases were consolidated before the Pennsylvania Supreme Court.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Kurach v. Truck Ins. Exchange, 235 A.3d 1106 (Pa. 2020); consolidated with Wintersteen v. Truck Ins. Exchange, Nos. 12 &amp; 13 EAP 2019, decided August 18, 2020. <a href="https://law.justia.com/cases/pennsylvania/supreme-court/2020/12-eap-2019-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on Justia</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Majority: Policy Language Controls
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Justice Todd authored the majority opinion, joined by Chief Justice Saylor and Justices Baer and Donohue. The majority held that under the specific language of the Farmers Next Generation policy, Truck Insurance was permitted to withhold O&amp;P from actual cash value payments &ldquo;unless and until&rdquo; the policyholder actually incurred and paid those costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The majority&rsquo;s reasoning turned on a single point: <em>Gilderman</em> and <em>Mee</em> had interpreted policies that were <strong>silent</strong> on O&amp;P. The Farmers Next Generation policy was not silent &mdash; it explicitly addressed the issue. Because the language was clear and unambiguous, the court enforced it as written.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The majority further held that Pennsylvania law contains &ldquo;no requirement in statute, regulation, or caselaw&rdquo; mandating O&amp;P inclusion in every actual cash value payment. Since no law required it, the policy&rsquo;s conditional exclusion was valid.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Justice Wecht&rsquo;s Dissent: &ldquo;Manufactured Ambiguity&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Justice Wecht filed a concurring and dissenting opinion that focused on a phrase in the policy that the majority largely ignored: &ldquo;unless the law of your state requires that such fees and charges be paid with the actual cash value settlement.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wecht&rsquo;s argument was elegant. He agreed that no Pennsylvania statute explicitly mandates O&amp;P in ACV payments. But he pointed out that both <em>Gilderman</em> and <em>Mee</em> were &ldquo;reasonably susceptible of different constructions&rdquo; &mdash; the lower courts and parties in those very cases disagreed about what Pennsylvania law required. If the meaning of &ldquo;the law of your state&rdquo; was genuinely uncertain at the time the policyholder purchased the policy, then the phrase was ambiguous. And under the doctrine of <em>contra proferentem</em>, ambiguous insurance policy language must be construed against the drafter &mdash; the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the law firm of Wheeler, DiUlio &amp; Barnabei (who represented the plaintiffs) characterized Wecht&rsquo;s position: it was &ldquo;Farmers itself that chose to manufacture the ambiguity&rdquo; by including a conditional clause that depended on a legal question no one could answer with certainty.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Justice Mundy&rsquo;s Dissent
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Justice Mundy filed a separate concurring and dissenting opinion, joined by Justice Dougherty, raising additional grounds for reversal. The 4&ndash;3 split reflects how closely contested this issue was &mdash; one vote the other way and the result would have been reversed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Kurach Did <em>Not</em> Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        What Kurach did not hold:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Kurach did not overrule Gilderman or Mee.</strong> Both remain good law for policies that are <em>silent</em> on O&amp;P. If your policy does not contain explicit language excluding O&amp;P from ACV payments, the &ldquo;reasonably likely&rdquo; standard still applies in Pennsylvania.</li>
        <li><strong>Kurach applies only to policies with explicit O&amp;P-withholding language.</strong> The court emphasized that <em>Gilderman</em> and <em>Mee</em> &ldquo;defined the term [ACV] in the absence of any definition in the policy itself.&rdquo; Kurach&rsquo;s holding is limited to policies that explicitly address O&amp;P.</li>
        <li><strong>Kurach does not eliminate O&amp;P entirely.</strong> Even under the Farmers Next Generation policy, O&amp;P is still owed as part of the <em>replacement cost</em> payment once the policyholder actually incurs the expense. The restriction applies to the initial ACV payment only.</li>
        <li><strong>Kurach is a Pennsylvania decision.</strong> It does not bind courts in other states. Jurisdictions with their own O&amp;P case law or regulations &mdash; like <Link href="/resources/50-state-op-map" className="text-[#2E74B5] underline">Florida, Texas, Arizona, and Oklahoma</Link> &mdash; are not affected by Kurach.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the law firm Cozen O&rsquo;Connor warned in its analysis of the decision: &ldquo;insurers in Pennsylvania should be cautious in determining whether general contractor overhead and profit expenses can be withheld where the policy language is <strong>silent or vague</strong> regarding such payments.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.cozen.com/news-resources/publications/2020/pa-supreme-court-holds-general-contractor-overhead-and-profit-can-be-withheld-from-acv-payments" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Cozen O&rsquo;Connor, &ldquo;PA Supreme Court Holds General Contractor Overhead and Profit Can Be Withheld from ACV Payments&rdquo;</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The $794 Million Farmers Settlement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Farmers Next Generation policy was not only challenged in Pennsylvania. A national class action led by the firm Nix Patterson resulted in a <strong>$794 million settlement</strong> covering over 1.8 million Farmers policyholders who filed structural loss claims and had O&amp;P withheld. The settlement was one of the largest in insurance class action history.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The existence of this massive settlement shows the scale of the practice. Farmers did not withhold O&amp;P from a handful of claims. The company built a policy form that systematically excluded O&amp;P from ACV payments across its entire book of business. Millions of policyholders were affected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://nixlaw.com/ourresults/farmers-overhead-and-profit-litigation/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Nix Patterson &mdash; Farmers Overhead and Profit Litigation</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Real-World Impact on Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect of O&amp;P-withholding language is devastating for policyholders who cannot self-fund repairs. Consider a homeowner with $100,000 in fire damage. With O&amp;P included, the ACV payment (replacement cost minus depreciation) might be $72,000. Without O&amp;P, that payment drops to roughly $60,000 &mdash; a $12,000 shortfall that the homeowner must somehow fund out of pocket before the insurer will reimburse it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a family already displaced by a fire, finding $12,000 to front for general contractor services is often impossible. The result is that many policyholders either perform inadequate repairs, serve as their own general contractor (without the training or licensing to do so), or simply abandon the repair entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        United Policyholders, which filed an amicus brief in Kurach prepared pro bono by attorneys from Merlin Law Group and Reed Smith LLP, warned that &ldquo;withheld amounts could prevent access to full premium-purchased benefits&rdquo; and that &ldquo;reduced settlements might create financial hardship when entering repair contracts.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://uphelp.org/amicus-briefs/kurach-v-truck-insurance-exchange/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">United Policyholders &mdash; Amicus Brief in Kurach v. Truck Insurance Exchange</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Which Carriers Use This Language?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Farmers Insurance / Truck Insurance Exchange is the carrier confirmed through litigation to have used the specific &ldquo;unless and until you actually incur and pay&rdquo; O&amp;P-withholding language in the Farmers Next Generation homeowners policy. This policy was the subject of the Kurach litigation in Pennsylvania, the <em>Burgess v. Farmers</em> class action in Oklahoma, and the $794 million national class action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Kurach decision creates an obvious incentive for other carriers to adopt similar language. When a state supreme court validates a policy form that allows withholding 20% of repair costs from initial payments, other insurers take notice. Chip Merlin of Merlin Law Group characterized the ruling as creating &ldquo;open season&rdquo; on Pennsylvania policyholders and questioned why insurance regulators permitted such policy terms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether and how quickly other carriers have adopted similar O&amp;P-withholding provisions is difficult to track because policy forms are not publicly available in most states until they become the subject of litigation or regulatory action. The practical advice for policyholders is to <strong>read your policy before you have a loss</strong>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do: Check Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a property insurance claim &mdash; or are shopping for coverage &mdash; look for the following language in the Loss Settlement or Conditions section of your policy:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Any reference to &ldquo;general contractor fees&rdquo; or &ldquo;overhead and profit&rdquo; in the context of actual cash value payments.</li>
        <li>Conditional language using phrases like &ldquo;unless and until,&rdquo; &ldquo;actually incurred,&rdquo; or &ldquo;paid such fees and charges.&rdquo;</li>
        <li>Language that distinguishes how O&amp;P is handled at the ACV stage versus the replacement cost stage.</li>
        <li>A savings clause referencing &ldquo;the law of your state&rdquo; &mdash; the same clause Justice Wecht identified as creating ambiguity.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your policy contains O&amp;P-withholding language and you are filing a claim:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>Document the need for a general contractor early.</strong> Get a written assessment from a licensed GC explaining why the scope of work requires their services.</li>
        <li><strong>Request the full replacement cost estimate including O&amp;P.</strong> Even if the insurer withholds O&amp;P from the ACV payment, the replacement cost estimate should include it. This establishes the amount you can recover once repairs are complete.</li>
        <li><strong>Consider the Wecht argument.</strong> If you are in a state where the O&amp;P question is not settled &mdash; and many states have no specific authority on point &mdash; the ambiguity argument from Justice Wecht&rsquo;s dissent may be persuasive.</li>
        <li><strong>Consult a <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">coverage attorney</Link>.</strong> The interaction between policy language and state law is precisely the kind of dispute that benefits from legal analysis. An attorney can evaluate whether the withholding language in your specific policy is enforceable under the law of your state.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kurach represents a broader trend in the insurance industry: using policy drafting to eliminate benefits that courts have found policyholders are entitled to. When a court holds that a particular cost is part of replacement cost, the carrier responds by writing policy language that excludes it. The policyholder, who does not draft the policy and typically does not read it before purchasing, discovers the exclusion only after a loss occurs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three dissenters in Kurach understood this dynamic. Justice Wecht recognized that the policy was designed to take advantage of legal uncertainty &mdash; to impose a condition that depended on a legal question no one could answer definitively. The majority allowed this tactic to succeed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders, the lesson is clear: your policy is a contract, and the words in it matter. If the carrier has written language designed to reduce your payment, the time to discover that is before you have a loss &mdash; not after.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">Overhead &amp; Profit: When Your Claim Should Include O&amp;P</Link></li>
        <li><Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">The Three-Trade Rule: Why Your Insurance Company Owes O&amp;P</Link></li>
        <li><Link href="/resources/50-state-op-map" className="text-[#2E74B5] underline">50-State Overhead &amp; Profit Map: Where the Law Stands</Link></li>
        <li><Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">Loss Settlement Provisions</Link></li>
        <li><Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">ACV vs. RCV: Actual vs. Replacement Cost Value</Link></li>
        <li><Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">When to Hire an Attorney for Your Insurance Claim</Link></li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>United Policyholders</strong> &mdash; Filed an amicus brief in Kurach (prepared pro bono by attorneys from Merlin Law Group and Reed Smith LLP) warning that withheld overhead-and-profit amounts could prevent policyholders from completing repairs.
        </li>
        <li>
          <strong>Merlin Law Group / Reed Smith LLP</strong> &mdash; Co-authored the United Policyholders amicus brief in Kurach; Chip Merlin publicly characterized the ruling and its consequences for Pennsylvania policyholders.
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
