import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Ensuing Loss: The Clause Your Insurer Hopes You Never Read',
  description:
    'The ensuing loss savings clause can restore coverage for damage caused by an excluded peril. Carriers routinely leave it out of denial letters. Learn what ensuing loss means, how it works in California alongside the efficient proximate cause doctrine, and how it differs from concurrent causation.',
  summary:
    'An ensuing loss clause restores coverage for damage that follows an excluded peril, and carriers routinely omit it from denial letters. In California it works alongside efficient proximate cause and can revive a claim the insurer says is excluded.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of insurance causation doctrines as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If you believe an ensuing loss provision applies to your claim, consult with a licensed attorney who specializes in insurance coverage disputes in your state.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have a water loss. A pipe corrodes and fails inside a wall. Water pours out and damages your floors, cabinets, drywall, and baseboards throughout the first floor. You file a claim. The insurance company sends you a coverage determination letter quoting the exclusion for &ldquo;faulty, inadequate or defective maintenance&rdquo; or &ldquo;wear and tear, deterioration&rdquo; and denies the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What they did not include in that letter &mdash; what they almost never include &mdash; is the sentence that comes right after the exclusion in your policy. It usually reads something like this:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;However, any ensuing loss to property described in Coverages A and B not precluded by any other provision in this policy is covered.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        That sentence is the <strong>ensuing loss provision</strong>, sometimes called the ensuing loss &ldquo;savings clause.&rdquo; It is one of the most important and most frequently ignored provisions in all of property insurance. When a carrier quotes an exclusion in a denial letter and leaves out the ensuing loss clause that immediately follows it, they are showing you half the policy and hoping you do not read the other half.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Does &ldquo;Ensuing&rdquo; Mean?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The word <strong>ensuing</strong> means &ldquo;to take place afterward or as a result of.&rdquo; An ensuing loss is a loss that follows an excluded event. The excluded event itself is never covered. But the damage it causes to other parts of the property &mdash; when that damage is caused by a peril not otherwise excluded &mdash; is covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Go back to the pipe example. The corroded pipe is the excluded cause. The insurance company does not owe you for the pipe repair. But the water damage to your floors, walls, and cabinets? That damage was caused by water &mdash; a covered peril. It <em>ensued</em> from the excluded event. Under the ensuing loss provision, it is covered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Two Purposes of the Ensuing Loss Clause</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Federal courts have identified two purposes that the ensuing loss clause serves:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It reaffirms that what is not excluded is covered.</strong> The clause reminds both parties that an exclusion only excludes what it specifically addresses. Damage caused by a peril that is not excluded remains covered under the policy.
        </li>
        <li>
          <strong>It establishes a chronological sequence.</strong> The word &ldquo;ensuing&rdquo; requires that the covered damage occur <em>after</em> the excluded event. You need an excluded peril first, followed by damage from a covered peril.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        To use the ensuing loss provision, you must show that the damage you are claiming is <strong>separate and distinct</strong> from the excluded cause of loss. The damage must be attributable to a peril that is not otherwise excluded under the policy.
      </p>

      <CalloutBox variant="warning" title="Ensuing Loss vs. Consequential Damages: Not the Same Thing">
        <p>
          Some online forums and even some coverage letters use &ldquo;consequential loss&rdquo; and &ldquo;ensuing loss&rdquo; interchangeably. They should not. Ensuing loss is a <strong>coverage</strong> concept &mdash; a savings clause in the policy that restores coverage for damage resulting from an excluded event. Consequential damages are a <strong>remedy</strong> concept &mdash; additional losses you can recover when the insurer breaches its obligations (like lost rent, emotional distress, or business losses caused by the insurer&apos;s delay). They operate at different stages of a claim and have different legal requirements. See our{' '}
          <Link href="/resources/consequential-vs-ensuing-damages" className="text-[#2E74B5] hover:underline">detailed comparison</Link>
          {' '}for the full analysis.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why California Policyholders Have Triple Protection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, policyholders dealing with multi-peril losses have three overlapping layers of protection that work together. Understanding all three is critical because carriers may try to defeat one while ignoring the others:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The ensuing loss savings clause in the policy itself.</strong> This is a contractual provision. Even in states that enforce policy language strictly, the ensuing loss clause preserves coverage for resulting damage caused by a non-excluded peril. It is part of the contract the insurer wrote.
        </li>
        <li>
          <strong>The efficient proximate cause doctrine.</strong> Under California Insurance Code &sect; 530 and the line of cases from <em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21 through <em>Garvey v. State Farm</em> (1989) 48 Cal.3d 395, the question in every multi-peril loss is: which peril was the predominating cause that set the others in motion? If the covered peril predominated, the entire loss is covered. This goes further than ensuing loss, which only covers the resulting damage from the covered peril.
        </li>
        <li>
          <strong>The unenforceability of anti-concurrent causation clauses.</strong> In <em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) 35 Cal.4th 747, the California Supreme Court held that &ldquo;policy exclusions are unenforceable to the extent that they conflict with section 530 and the efficient proximate cause doctrine.&rdquo; This means the ACC language that precedes certain exclusions in the ISO forms cannot be used to override the EPC analysis. The policy language designed to eliminate these doctrines does not work in California.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        For detailed discussions of these protections, see our companion articles on the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
          efficient proximate cause doctrine
        </Link>{' '}
        and{' '}
        <Link href="/resources/anti-concurrent-causation" className="text-blue-700 underline hover:text-blue-900">
          anti-concurrent causation clauses
        </Link>.
      </p>

      <CalloutBox variant="important" title="Why Ensuing Loss Still Matters in California">
        <p>
          If California&rsquo;s EPC doctrine and ACC unenforceability already provide broad protection, why does the ensuing loss savings clause matter? Because it is a <em>contractual</em> argument, not just a statutory or doctrinal one. Even if a carrier disputes the applicability of the EPC doctrine to specific facts, the ensuing loss clause is part of the policy the insurer drafted. It is harder for a carrier to argue against its own contract language. Also, the ensuing loss analysis is sometimes simpler and more straightforward than a full EPC chain-of-causation argument &mdash; which can be valuable in claims handling before litigation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Statutory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s approach to multi-peril losses is grounded in two provisions of the Insurance Code:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code &sect; 530:</strong>
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;An insurer is liable for a loss of which a peril insured against was the proximate cause, although a peril not contemplated by the contract may have been a remote cause of the loss; but he is not liable for a loss of which the peril insured against was only a remote cause.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code &sect; 532:</strong>
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;If a peril is specially excepted in a contract of insurance and there is a loss which would not have occurred but for such peril, such loss is thereby excepted even though the immediate cause of the loss was a peril which was not excepted.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read together, these sections establish that the critical question is always: <em>which cause was the proximate, predominating cause, and which was merely remote?</em> If the covered peril was the proximate cause and the excluded peril was remote, coverage exists under &sect; 530. If the excluded peril was the proximate cause and the covered peril was remote, coverage is denied under &sect; 532.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This statutory framework provides the foundation for both the EPC doctrine and the ensuing loss analysis in California. When a pipe corrodes (excluded) and the resulting water (covered) damages the interior, &sect; 530 supports coverage because the covered peril &mdash; water &mdash; was the proximate cause of the damage being claimed. The corrosion was a remote cause.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Fair Claims Settlement Practices Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier issues a denial letter that quotes an exclusion but omits the ensuing loss savings clause that follows it, the carrier may be violating California&rsquo;s claim-handling rules:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>10 CCR &sect; 2695.7(b)(1):</strong> When an insurer denies or rejects a first-party claim, it must do so in writing and provide a statement &ldquo;listing all bases for such rejection or denial and the factual and legal bases for each reason given for such rejection or denial which is then within the insurer&rsquo;s knowledge.&rdquo; A denial that references an exclusion while omitting the ensuing loss savings clause that modifies that exclusion is arguably an incomplete statement of the bases for denial.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.4(a):</strong> Requires the insurer to disclose to a first-party claimant all benefits, coverage, time limits or other provisions of the policy that may apply to the claim. The ensuing loss savings clause is a policy provision that may apply &mdash; selectively quoting only the exclusion arguably fails this disclosure duty.
        </li>
        <li>
          <strong>Cal. Ins. Code &sect; 790.03(h)(1):</strong> Lists &ldquo;[m]isrepresenting to claimants pertinent facts or insurance policy provisions relating to any coverages at issue&rdquo; as a prohibited unfair claims practice. Omitting the savings clause from a denial that quotes the exclusion could be characterized as a misrepresentation of policy provisions.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive analysis of these regulations, see our article on the{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          California Fair Claims Settlement Practices Regulations
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Where the Policy Language Hides</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the difficulties with ensuing loss is that the policy almost never uses the words &ldquo;ensuing loss&rdquo; as a defined term or section heading. Instead, you will see language like:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          &ldquo;We do not insure for loss to property described in Coverage A or B caused by [list of excluded perils]. <strong>However, any ensuing loss to property described in Coverages A and B not precluded by any other provision in this policy is covered.</strong>&rdquo;
        </li>
        <li>
          &ldquo;If an excluded cause of loss results in a covered cause of loss, the Company will be liable only for such resulting loss or damage.&rdquo;
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The second version does not even use the word &ldquo;ensuing,&rdquo; but it means the same thing. When you read this language in your policy, you should recognize it for what it is: a provision that preserves coverage for the resulting damage, even when the initial cause is excluded.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Anti-Concurrent Causation Complication
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the standard ISO HO-3 Special Form policy, anti-concurrent causation (ACC) language precedes the <strong>first group</strong> of exclusions, covering eight specific perils: ordinance or law, earth movement, water (flood/surface water/waves), neglect, war, nuclear hazard, utility services, and certain government actions. The ACC clause states that the insurer will not pay for loss caused directly or indirectly by those perils &ldquo;regardless of any other cause or event that contributes concurrently or in any sequence to the loss.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That language is designed to override the ensuing loss analysis, the EPC doctrine, and concurrent causation. However, three critical points:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>In California, ACC clauses are unenforceable.</strong> Under <em>Howell v. State Farm</em> (1990) 218 Cal.App.3d 1446 and Insurance Code &sect; 530, ACC language cannot be used to expand exclusions beyond what the efficient proximate cause analysis allows. The California Supreme Court restated the general rule in <em>Julian v. Hartford Underwriters</em> (2005) 35 Cal.4th 747, although on <em>Julian</em>&rsquo;s facts the Court enforced the carrier&rsquo;s exclusion. This means that even when the ISO form contains ACC language, California policyholders can still invoke both the EPC doctrine and the ensuing loss savings clause.
        </li>
        <li>
          <strong>ACC language only precedes specific exclusions.</strong> It does not apply to every exclusion in the policy. If the excluded cause at issue is not one of the eight perils in the first exclusion group, the ACC clause does not apply, and the ensuing loss analysis proceeds normally &mdash; in every state.
        </li>
        <li>
          <strong>Even within the ACC section, look for ensuing loss savings language.</strong> Some policies include an ensuing loss provision within the same ACC exclusion group. The ACC clause bars coverage for the excluded peril, but the savings clause preserves coverage for resulting damage caused by a non-excluded peril. Carriers count on policyholders not reading that far.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Ensuing Loss vs. Efficient Proximate Cause vs. Concurrent Causation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These three causation doctrines are closely related but operate differently. Understanding the distinctions is critical because it determines what you are entitled to recover and how you frame your claim.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Ensuing Loss</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Timing:</strong> The covered peril occurs <em>after</em> the excluded peril.</li>
        <li><strong>Sequence:</strong> Excluded cause first, then resulting damage from a covered peril.</li>
        <li><strong>What the insurer owes:</strong> Only the damage caused by the covered peril &mdash; not the excluded cause itself.</li>
        <li><strong>Example:</strong> Defective pipe (excluded) fails &rarr; water (covered) damages interior. Insurer owes for the water damage, not the pipe.</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Efficient Proximate Cause</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Timing:</strong> Two perils combine in a chain &mdash; one sets the other in motion.</li>
        <li><strong>Key question:</strong> Which peril was the <strong>predominant cause</strong> that initiated the chain?</li>
        <li><strong>What the insurer owes:</strong> If the covered peril was the efficient cause, the <em>entire</em> loss is covered. If the excluded peril was the efficient cause, there is no coverage.</li>
        <li><strong>California authority:</strong> <em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21; <em>Garvey v. State Farm</em> (1989) 48 Cal.3d 395; Insurance Code &sect; 530.</li>
        <li>
          <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
            Read the full article on efficient proximate cause &rarr;
          </Link>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Concurrent Causation</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Timing:</strong> Two perils act <em>simultaneously</em> &mdash; neither alone caused the loss.</li>
        <li><strong>Key question:</strong> Did the perils combine in a way that makes it impossible to identify which was predominant?</li>
        <li><strong>What the insurer owes:</strong> In California and most jurisdictions, if at least one cause is covered and the causes cannot be separated, the <em>entire</em> loss is covered. This is the broadest of the three doctrines.</li>
        <li><strong>California authority:</strong> <em>State Farm Mut. Auto. Ins. Co. v. Partridge</em> (1973) 10 Cal.3d 94.</li>
        <li>
          <Link href="/resources/anti-concurrent-causation" className="text-blue-700 underline hover:text-blue-900">
            Read the full article on anti-concurrent causation &rarr;
          </Link>
        </li>
      </ul>

      <CalloutBox variant="important" title="The Recovery Difference Matters">
        <p>
          Under <strong>ensuing loss</strong>, the insurer only owes for the damage caused by the covered peril. Under <strong>efficient proximate cause</strong> or <strong>concurrent causation</strong>, the insurer may owe for the <em>entire</em> loss. This distinction drives how you frame your claim and your estimate. In California, where the EPC doctrine is well-established, you often have the stronger argument for entire-loss coverage. But ensuing loss remains a valuable fallback &mdash; and in other states where EPC is weaker, it may be the primary path to any recovery at all.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Roof Leak Example: How the Analysis Works in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner&rsquo;s roof was improperly installed by a contractor. Rain enters through leaks at the joints, runs down the wall cavity, and damages the drywall, flooring, baseboards, and personal property in multiple rooms. The carrier&rsquo;s adjuster concludes the leak was caused by improper installation and denies the claim, citing the faulty workmanship exclusion and the anti-concurrent causation language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, this claim should be covered under multiple theories:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Ensuing loss:</strong> The claim is not for the roof repair. The claim is for the interior water damage. The water damage ensued from rain &mdash; a covered peril. The faulty workmanship is excluded, but the ensuing loss savings clause preserves coverage for the resulting damage.
        </li>
        <li>
          <strong>Efficient proximate cause:</strong> Under Insurance Code &sect; 530, the question is which peril was the proximate cause of the claimed damage. The claimed damage is water damage to the interior. The proximate cause of that damage is rain &mdash; a covered peril. The faulty workmanship was a remote cause (it created the <em>condition</em> that allowed the rain to enter, but the rain caused the actual damage).
        </li>
        <li>
          <strong>ACC clause inapplicable:</strong> Even if the carrier points to ACC language, faulty workmanship is not in the first group of eight perils that ACC language precedes in the standard ISO form. ACC does not apply to this exclusion.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not argue about the roof. Argue about the interior. The roof is excluded. The interior water damage is an ensuing loss from a covered peril.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Carriers Misuse Ensuing Loss to Deny Claims</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common carrier tactic is simple omission: they quote the exclusion and stop. But there are other approaches:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Omitting the savings clause from the denial letter.</strong> The carrier quotes the exclusion in the coverage determination letter and leaves out the &ldquo;however, any ensuing loss&rdquo; sentence that immediately follows. In California, this may violate 10 CCR &sect; 2695.7(b)(1), which requires the denial to list all bases with the factual and legal bases for each; 10 CCR &sect; 2695.4(a), which requires affirmative disclosure of policy provisions that may apply; and Cal. Ins. Code &sect; 790.03(h)(1), which prohibits misrepresenting pertinent facts or policy provisions.
        </li>
        <li>
          <strong>Framing the excluded peril as the &ldquo;direct or indirect&rdquo; cause of all damage.</strong> The carrier invokes ACC-style language to sweep the ensuing damage in with the excluded cause. In California, this tactic fails under <em>Julian</em>. In other states, the response is to identify whether ACC language actually applies to the specific exclusion at issue.
        </li>
        <li>
          <strong>Arguing the ensuing peril is not &ldquo;truly independent.&rdquo;</strong> Some carriers argue that ensuing loss only applies when the resulting peril would have caused damage even without the excluded event &mdash; that is, the rain would have damaged the interior even without the defective roof. This is a minority position. The majority view is that ensuing loss applies whenever the resulting damage is caused by a peril not otherwise excluded, regardless of whether the excluded cause was a necessary precondition.
        </li>
        <li>
          <strong>Conflating the source with the resulting damage.</strong> In a water loss, the carrier denies the entire claim &mdash; including all interior damage &mdash; by pointing to the corroded pipe. But the claim is not for the pipe. It is for the water damage that ensued from the pipe failure.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Other States Differ from California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ensuing loss analysis works differently depending on the jurisdiction. The following comparisons highlight the most significant differences from California law.
      </p>

      <CalloutBox variant="warning" title="Out-of-State Claims Require Different Analysis">
        <p>
          If you have a claim in a state other than California, do not assume the California framework applies. The same physical loss can produce entirely different coverage outcomes depending on the state. The distinctions below are summaries, not substitutes for consultation with counsel in the applicable jurisdiction.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Florida</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida follows the concurrent causation doctrine and is generally policyholder-friendly on ensuing loss. The burden is on the <strong>insurer</strong> to prove that the damage was caused by an excluded peril. If neither the insurer nor the insured can establish the cause of damage, the insurer may be unable to meet its burden, and coverage applies. The Florida Supreme Court addressed concurrent causation in <em>Sebo v. American Home Assurance Co.</em> (Fla. 2016) 208 So.3d 694, where rainwater and hurricane winds combined with defective construction to cause damage. The court found no reasonable way to distinguish the proximate cause, and held the loss covered even though one cause was excluded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key difference from California:</strong> Florida enforces ACC clauses as written. Unlike California, Florida courts have not held that ACC language is categorically unenforceable. However, Florida&rsquo;s burden-of-proof framework &mdash; which places the exclusion burden on the insurer &mdash; can produce similar outcomes in practice, because the insurer must affirmatively prove the excluded peril caused the loss.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Texas</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Texas is the most difficult jurisdiction for policyholders on causation issues. Under Texas law, the burden is on the <strong>policyholder</strong> to allocate losses between covered and non-covered perils. If the policyholder cannot segregate the damage, the exclusion is triggered and the claim is not paid. Failure to segregate is fatal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Texas Supreme Court addressed this framework in <em>JAW The Pointe, L.L.C. v. Lexington Ins. Co.</em> (2015) 460 S.W.3d 597, the leading Texas case on ACC clauses in property insurance. The court held that when covered and excluded perils combine and the damage cannot be separated, the exclusion wins. This is the opposite of the majority rule followed in Florida and California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key difference from California:</strong> Everything is reversed. In California, the burden is on the insurer; in Texas, it is on the policyholder. In California, ACC clauses are unenforceable; in Texas, they are enforced. In California, if the causes cannot be separated, the covered peril presumptively controls; in Texas, if the causes cannot be separated, the exclusion controls.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates practical requirements for anyone handling claims in Texas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Weather forensics reports specific to the property location.</strong> Not from a weather station miles away. Location-specific reports can show that a property received different hail sizes or wind speeds than surrounding properties.
        </li>
        <li>
          <strong>Photographs, Ring camera footage, neighbor interviews, and prior claim documentation</strong> &mdash; anything that establishes which damage came from which event, especially in multiple-storm situations.
        </li>
        <li>
          <strong>Establish coverage through segregation <em>before</em> invoking appraisal.</strong> Texas appraisal is binding on the amount of loss but does not resolve coverage disputes. If you invoke appraisal before establishing coverage, the carrier can accept the appraisal award and then deny coverage &mdash; leaving you with a number you cannot collect.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Illinois</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Illinois recognizes ensuing loss but frames it differently from both California and Florida. Rather than saying &ldquo;what is not excluded is covered&rdquo; (as in Florida), Illinois courts hold that the ensuing loss clause operates to <strong>limit the scope</strong> of what is excluded &mdash; carving out an exception to the exclusion for resulting damage. The uncovered event itself is never covered, but any ensuing loss otherwise covered by the policy remains covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key difference from California:</strong> Illinois has identified four positions on the causation spectrum, from broadest to narrowest: (1) minimally sufficient causation (coverage if a covered cause contributes at all); (2) efficient proximate causation (coverage if the covered peril set the chain in motion); (3) immediate causation (coverage only if the covered cause was the last in the chain); and (4) the narrowest rule (if any excluded cause contributes, no coverage). California follows position 2 &mdash; the efficient proximate cause test. The position a given Illinois court applies may vary depending on the case.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">Other States</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Washington:</strong> Follows the efficient proximate cause doctrine. Washington courts have addressed ensuing loss in the context of earth movement exclusions, holding that water damage resulting from a landslide-caused pipe break was an ensuing covered loss even though earth movement was excluded.
        </li>
        <li>
          <strong>New Jersey:</strong> Generally policyholder-friendly. Courts have recognized ensuing loss provisions in the context of construction defects and resulting water damage.
        </li>
        <li>
          <strong>New York:</strong> Generally follows EPC but has been inconsistent. Some New York courts have enforced ACC clauses as written.
        </li>
        <li>
          <strong>Louisiana:</strong> Does not follow common law causation doctrines. Louisiana uses a Civil Code &ldquo;cause-in-fact&rdquo; analysis. Do not assume the frameworks discussed in this article apply to Louisiana claims.
        </li>
        <li>
          <strong>Colorado:</strong> Has enforced ACC clauses but also recognizes ensuing loss savings clauses within those ACC sections.
        </li>
      </ul>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 p-3 text-left">Factor</th>
              <th className="border border-gray-300 p-3 text-left">California</th>
              <th className="border border-gray-300 p-3 text-left">Florida</th>
              <th className="border border-gray-300 p-3 text-left">Texas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">Burden of proof on exclusions</td>
              <td className="border border-gray-300 p-3">Insurer</td>
              <td className="border border-gray-300 p-3">Insurer</td>
              <td className="border border-gray-300 p-3">Policyholder (must segregate)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-semibold">ACC clauses enforceable?</td>
              <td className="border border-gray-300 p-3">No &mdash; <em>Julian</em> / &sect; 530</td>
              <td className="border border-gray-300 p-3">Yes</td>
              <td className="border border-gray-300 p-3">Yes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">If causes cannot be separated</td>
              <td className="border border-gray-300 p-3 text-green-700">Covered (EPC / concurrent)</td>
              <td className="border border-gray-300 p-3 text-green-700">Likely covered (insurer&rsquo;s burden)</td>
              <td className="border border-gray-300 p-3 text-red-700">Excluded (policyholder failed to segregate)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-semibold">EPC doctrine recognized?</td>
              <td className="border border-gray-300 p-3">Yes &mdash; statutory (&sect; 530)</td>
              <td className="border border-gray-300 p-3">Yes &mdash; case law (<em>Sebo</em>)</td>
              <td className="border border-gray-300 p-3">Limited &mdash; ACC overrides when applicable</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">Ensuing loss savings clause</td>
              <td className="border border-gray-300 p-3">Honored + reinforced by EPC</td>
              <td className="border border-gray-300 p-3">Honored (contractual provision)</td>
              <td className="border border-gray-300 p-3">Honored but limited by segregation burden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Situations Where Ensuing Loss Applies
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Water losses from corroded or deteriorated pipes.</strong> The corrosion is excluded, but the water damage to the interior ensues from a covered peril (the water itself). This is the single most common ensuing loss scenario.
        </li>
        <li>
          <strong>Roof leaks from faulty workmanship.</strong> The defective installation is excluded. The interior water damage from rain entering through the defective area ensues from rain, a covered peril. In California, faulty workmanship is not in the ACC exclusion group, so even carriers that argue ACC in other contexts cannot use it here.
        </li>
        <li>
          <strong>Settling or earth movement causing a pipe break.</strong> Earth movement is excluded (and subject to ACC language in HO-3 policies). But in California, where ACC clauses are unenforceable under <em>Julian</em>, the water damage resulting from the broken pipe may still be covered under the EPC doctrine. In other states, look for an ensuing loss savings clause within the ACC section of the policy.
        </li>
        <li>
          <strong>Mold resulting from a covered water loss.</strong> The initial water damage is covered. Mold develops as a result. The{' '}
          <Link href="/resources/mold-coverage-paradox" className="text-blue-700 underline hover:text-blue-900">
            mold
          </Link>{' '}
          is an ensuing loss from the covered water event, though it is often subject to a sublimit.
        </li>
        <li>
          <strong>Electrical failure causing a fire.</strong> If the electrical defect is excluded as maintenance or wear and tear, the fire damage that ensues is covered because fire is a covered peril under every property policy.
        </li>
        <li>
          <strong>Wildfire followed by mudslide.</strong> Fire (covered) destroys vegetation; rain triggers a mudslide (excluded). In California, fire is the efficient proximate cause under <em>Howell v. State Farm</em> (1990) 218 Cal.App.3d 1446 and CDI Bulletin 2025-3. See our article on{' '}
          <Link href="/resources/wildfire-mudslide-coverage" className="text-blue-700 underline hover:text-blue-900">
            mudslide coverage after wildfire
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Investigation Is Everything</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You cannot apply any causation doctrine without knowing the chain of events. That requires investigation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Interview the policyholder in detail. What happened first? When did they notice the damage? Were there prior events?</li>
        <li>Document the property with photographs and video before any remediation begins.</li>
        <li>Obtain weather forensics for weather-related claims, specific to the property&rsquo;s location &mdash; not from a weather station miles away.</li>
        <li>Review any available surveillance footage, Ring camera recordings, or neighbor documentation.</li>
        <li>Obtain expert opinions when the cause is disputed &mdash; plumbers for pipe failures, roofers or engineers for roof damage, hydrologists for water intrusion.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The goal is to establish the chronological chain of events and identify which peril caused the specific damage being claimed. Without that foundation, you cannot effectively argue that the damage ensued from a covered peril rather than the excluded one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Read Your Policy for Ensuing Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Identifying whether ensuing loss applies to your claim starts with reading the policy &mdash; the actual policy, not the carrier&rsquo;s summary in a denial letter:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Identify the post-loss obligations</strong> and make sure you have complied with them. If you have not, the carrier may not have to pay you regardless of causation. See our article on{' '}
          <Link href="/resources/duties-after-loss" className="text-blue-700 underline hover:text-blue-900">
            duties after loss
          </Link>.
        </li>
        <li>
          <strong>Identify the coverages that apply to your specific loss.</strong> Only the coverages relevant to the peril you are claiming for.
        </li>
        <li>
          <strong>Read past the exclusion.</strong> When you find the exclusion the carrier cited, do not stop. Read the next sentence, the next paragraph, and the endorsements that follow. Look for &ldquo;however,&rdquo; &ldquo;but if,&rdquo; or &ldquo;any ensuing loss&rdquo; language.
        </li>
        <li>
          <strong>Determine whether ACC language applies.</strong> ACC language in the ISO form only precedes the first group of eight perils. If the carrier is citing an exclusion outside that group (such as faulty workmanship or wear and tear), ACC does not apply.
        </li>
        <li>
          <strong>Check endorsements.</strong> Endorsements can modify the ensuing loss provision or the ACC language for your specific policy.
        </li>
        <li>
          <strong>Identify time limits.</strong> One-year suit provisions, 180-day clauses, and other deadlines can affect your ability to pursue the claim.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What to Do If Your Claim Was Denied</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you received a denial citing an exclusion and the carrier did not address the ensuing loss provision:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Read your actual policy. Find the exclusion the carrier cited. Read everything that follows it.</li>
        <li>Determine whether the damage you are claiming is separate and distinct from the excluded cause. Are you claiming the pipe or the water damage? The roof or the interior?</li>
        <li>Identify the covered peril that caused the damage you are actually claiming.</li>
        <li>Respond in writing, noting that the carrier&rsquo;s coverage determination did not address the ensuing loss provision in the same section of the policy they quoted. In California, note that 10 CCR &sect; 2695.7(b)(1) requires the denial to reference the specific policy provisions at issue &mdash; including provisions that limit the scope of the exclusion.</li>
        <li>If the carrier does not respond or reaffirms the denial, consider engaging a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          or an attorney who specializes in insurance coverage disputes. In California, you may also{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            file a complaint with the California Department of Insurance
          </Link>.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
              The Efficient Proximate Cause Doctrine
            </Link>{' '}
            &mdash; when the covered peril set the chain of events in motion
          </li>
          <li>
            <Link href="/resources/anti-concurrent-causation" className="text-blue-700 underline hover:text-blue-900">
              Anti-Concurrent Causation Clauses
            </Link>{' '}
            &mdash; the policy language designed to override these doctrines (and why California ignores it)
          </li>
          <li>
            <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
              Coverage Disputes
            </Link>{' '}
            &mdash; establishing that your loss is covered before arguing about amount
          </li>
          <li>
            <Link href="/resources/water-damage-claims" className="text-blue-700 underline hover:text-blue-900">
              Water Damage Insurance Claims
            </Link>{' '}
            &mdash; the most common claim type where ensuing loss applies
          </li>
          <li>
            <Link href="/resources/wildfire-mudslide-coverage" className="text-blue-700 underline hover:text-blue-900">
              Mudslide After Wildfire
            </Link>{' '}
            &mdash; California&rsquo;s EPC doctrine applied to post-fire earth movement
          </li>
        </ul>
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
