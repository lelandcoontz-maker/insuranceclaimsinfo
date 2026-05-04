import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Fortuity Doctrine in Insurance: When Carriers Claim Your Loss Was Not an Accident',
  description:
    'The fortuity doctrine requires that a covered loss be accidental and unforeseen. Learn how insurance companies misuse the known loss doctrine, loss-in-progress doctrine, and pre-existing damage arguments to deny legitimate claims in California.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If your insurer has denied your claim based on the fortuity doctrine, the known loss doctrine, or arguments that the loss was &ldquo;expected or intended,&rdquo; consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every property insurance policy in the United States rests on a foundational principle: the loss must be fortuitous. That word &mdash; fortuitous &mdash; means the event causing the damage must be accidental, unexpected, and beyond the policyholder&rsquo;s control. Insurance exists to transfer the financial risk of uncertain future events, not to guarantee payment for losses that are certain to occur or that the policyholder deliberately caused.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On its face, the fortuity requirement seems reasonable. No one expects an insurance company to pay for damage that a homeowner intentionally inflicts on their own property. But in practice, carriers have stretched the fortuity doctrine far beyond its intended scope, using it as a weapon to deny claims that are plainly accidental. When a tree falls on a roof during a windstorm, the loss is fortuitous. When a pipe bursts inside a wall, the loss is fortuitous. Yet insurers routinely argue otherwise &mdash; reframing negligent maintenance as &ldquo;expected&rdquo; damage, characterizing gradual deterioration as a &ldquo;known loss,&rdquo; or claiming that the policyholder should have foreseen the failure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what the fortuity doctrine actually requires under California law, how the related doctrines of known loss and loss-in-progress operate, and how policyholders can defend against illegitimate fortuity-based denials.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Fortuity Doctrine Actually Requires
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fortuity requirement is not found in a single statutory provision. It is a bedrock principle of insurance law derived from the nature of the insurance contract itself. As the California Supreme Court has recognized, insurance is fundamentally a mechanism for distributing the costs of fortuitous losses among a pool of similarly situated policyholders. Without the requirement that losses be accidental, the entire actuarial foundation of insurance collapses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In first-party property insurance, the fortuity requirement operates at two levels:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>At inception:</strong> When the policy is purchased, the loss must not already be in progress. A homeowner cannot buy fire insurance while the house is burning. This is the <em>known loss doctrine</em>.
        </li>
        <li>
          <strong>At the time of loss:</strong> When the damage occurs, it must result from an accident or unforeseen event, not from a deliberate act of the policyholder. This is the <em>expected or intended</em> requirement reflected in most policy exclusions.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical distinction &mdash; and the one carriers frequently blur &mdash; is between <strong>negligence</strong> and <strong>intent</strong>. A homeowner who fails to maintain a water heater and suffers a tank rupture has been negligent. But the loss is still fortuitous, because the homeowner did not expect or intend for the tank to burst. Negligence does not defeat fortuity. Only intentional conduct does.
      </p>

      <CalloutBox variant="important" title="Negligence Is Not the Same as Intent">
        <p>
          This is the single most important concept in fortuity disputes. An insurance policy covers accidental losses, and negligence is, by definition, accidental. A homeowner who forgets to clean the gutters, who fails to replace aging plumbing, or who does not notice a slow roof leak has not <em>intended</em> for the resulting damage to occur. Carriers that deny claims because the homeowner &ldquo;should have known&rdquo; or &ldquo;failed to maintain&rdquo; the property are not applying the fortuity doctrine &mdash; they are applying a maintenance exclusion and calling it something else.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Known Loss Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The known loss doctrine provides that an insurer is not obligated to cover a loss that has already occurred or is substantially certain to occur at the time the insurance policy is purchased or renewed. The doctrine is codified in California Insurance Code &sect;22, which defines insurance as &ldquo;a contract whereby one undertakes to indemnify another against loss, damage, or liability arising from a contingent or unknown event.&rdquo; If the event is neither contingent nor unknown, it falls outside the definition of insurance itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Court of Appeal addressed the known loss doctrine in <em>Montrose Chemical Corp. v. Admiral Insurance Co.</em> (1995) 10 Cal.4th 645, where the Supreme Court examined whether an insured&rsquo;s awareness of potential liability defeated coverage. The court held that the known loss doctrine requires <strong>actual knowledge</strong> that a specific loss has occurred or is substantially certain to occur. General awareness of a risk is not enough. The policyholder must have known, at the time the policy was purchased, that the particular loss in question was already happening or was virtually inevitable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For first-party property claims, the known loss doctrine rarely applies legitimately. A homeowner who purchases a new policy or renews an existing one typically does not know that a pipe is about to burst, that a tree root is undermining the foundation, or that wind damage has compromised the roof. Carriers sometimes invoke the known loss doctrine when the property had a prior claim for similar damage, arguing that the policyholder &ldquo;knew&rdquo; the condition existed. But a prior claim that was repaired does not establish knowledge of a new, different loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Loss-in-Progress Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Closely related to the known loss doctrine is the loss-in-progress doctrine (sometimes called the &ldquo;ongoing loss&rdquo; or &ldquo;continuing loss&rdquo; doctrine). This principle holds that insurance does not cover a loss that was already in progress at the time the policy was bound. The classic illustration is the homeowner who discovers an active roof leak, does nothing about it, and then purchases a new policy hoping to cover the resulting interior damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The loss-in-progress doctrine is related to but distinct from the known loss doctrine. The known loss doctrine focuses on the policyholder&rsquo;s subjective knowledge at the time of policy inception. The loss-in-progress doctrine focuses on the objective fact that the damaging process was already underway.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the loss-in-progress doctrine has been applied most frequently in liability insurance contexts, but carriers increasingly invoke it in property claims. The argument typically goes like this: the policyholder had water staining in the ceiling before the policy period began, therefore the water intrusion was already &ldquo;in progress,&rdquo; and the carrier has no obligation to cover the damage.
      </p>

      <CalloutBox variant="warning" title="Carriers Conflate Old Staining with New Damage">
        <p>
          Evidence of prior water staining does not automatically mean the current loss is a &ldquo;loss in progress.&rdquo; Old staining may reflect a prior event that was resolved. A new storm, a new pipe failure, or a new appliance malfunction is a separate occurrence &mdash; even if it affects the same area of the home. Policyholders should document the timeline carefully and, when possible, obtain a contractor&rsquo;s assessment confirming that the current damage results from a new event rather than a continuation of a prior one.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Expected or Intended&rdquo; Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most property insurance policies contain an exclusion for damage that the policyholder &ldquo;expected or intended.&rdquo; This exclusion is the contractual expression of the fortuity doctrine. In a standard ISO HO-3 homeowners policy, the exclusion is found in the general exclusions section and typically states that the policy does not cover loss caused intentionally by the insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California courts have interpreted this exclusion narrowly. In <em>Shell Oil Co. v. Winterthur Swiss Insurance Co.</em> (1993) 12 Cal.App.4th 715, the Court of Appeal held that the &ldquo;expected or intended&rdquo; exclusion requires the insurer to prove that the policyholder subjectively expected or intended the specific harm that occurred. It is not enough to show that the policyholder engaged in conduct that a reasonable person would recognize as risky. The question is whether the particular policyholder actually foresaw and intended the particular damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an intentionally high bar. Insurance exists to cover the consequences of human error, poor judgment, and carelessness. If the &ldquo;expected or intended&rdquo; exclusion could be triggered by mere negligence, the policy would provide almost no protection &mdash; because virtually every loss can be traced, in some way, to an act or omission by the policyholder.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Misuse the Fortuity Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear legal standards, insurance carriers routinely stretch the fortuity doctrine to deny claims that should be covered. The following are the most common misapplications:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Recharacterizing Negligence as &ldquo;Expected&rdquo; Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most widespread abuse. The carrier argues that because the policyholder failed to maintain a building component &mdash; a roof, a plumbing system, a water heater, an HVAC unit &mdash; the resulting failure was &ldquo;expected&rdquo; and therefore not fortuitous. The argument goes: &ldquo;You knew this water heater was 15 years old. You should have expected it to fail. Therefore the resulting water damage is not an accident.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument collapses under the weight of California case law. Knowing that something <em>might</em> eventually fail is not the same as expecting or intending the specific failure at the specific time it occurred. Every roof will eventually leak. Every pipe will eventually corrode. Every appliance will eventually break. If the possibility of future failure defeated fortuity, property insurance would cover nothing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pre-Existing Damage Arguments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers frequently argue that the damage pre-dates the policy period or the claimed event. The insurer&rsquo;s adjuster or engineer examines the property and concludes that some portion of the damage was &ldquo;pre-existing&rdquo; &mdash; meaning it existed before the claimed loss occurred. From there, the carrier denies the entire claim or reduces the payout significantly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pre-existing damage arguments are not technically fortuity arguments &mdash; they are causation arguments. The carrier is saying that the current loss was not caused by the claimed event but by an earlier, undisclosed condition. However, carriers often package these arguments under the fortuity umbrella, telling the policyholder that the loss was &ldquo;not sudden and accidental&rdquo; or was &ldquo;long-term in nature.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The appropriate response depends on the facts. If the damage truly pre-dates the policy period and the policyholder knew about it, the known loss doctrine may legitimately apply. But if the carrier is simply using the age of a building component to infer pre-existing damage without actual evidence, that is a different matter entirely. A 20-year-old roof can sustain storm damage just as a 2-year-old roof can. Age does not disqualify a loss from being fortuitous.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conflating &ldquo;Gradual&rdquo; with &ldquo;Not Fortuitous&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many property policies exclude damage from &ldquo;wear and tear,&rdquo; &ldquo;deterioration,&rdquo; or &ldquo;gradual&rdquo; processes. Carriers sometimes invoke these exclusions alongside fortuity arguments, treating them as synonymous. But they are conceptually distinct. The wear and tear exclusion addresses the natural aging of building materials &mdash; paint fading, wood weathering, appliances wearing out from normal use. Fortuity addresses whether the policyholder expected or caused the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A slow pipe leak behind a wall is gradual, but it is also accidental. The homeowner did not know the pipe was leaking and did not intend for it to happen. Many policies contain an ensuing loss provision that preserves coverage for the resulting damage (such as water damage to drywall, flooring, and framing) even when the initiating cause (the pipe corrosion) is excluded. Carriers that deny these claims on fortuity grounds are conflating two separate policy provisions.
      </p>

      <CalloutBox variant="tip" title="Check for the Ensuing Loss Provision">
        <p>
          If your insurer denies a claim by characterizing the loss as gradual or wear-related, check your policy for an ensuing loss or &ldquo;resulting loss&rdquo; provision. Under California law, this provision can preserve coverage for the <em>resulting</em> damage even when the initial cause is excluded. For more on how this works, see our article on{' '}
          <Link href="/resources/exclusions" className="text-[#2E74B5] underline">policy exclusions</Link>{' '}
          and the{' '}
          <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">efficient proximate cause doctrine</Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Case Law on Fortuity
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have addressed fortuity in numerous published decisions. The following cases establish the key principles policyholders should understand:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Montrose Chemical Corp. v. Admiral Insurance Co. (1995)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court&rsquo;s decision in <em>Montrose</em>, 10 Cal.4th 645, remains the leading case on the known loss doctrine. Although <em>Montrose</em> involved a liability insurance dispute over environmental contamination, the Supreme Court&rsquo;s analysis of what constitutes &ldquo;knowledge&rdquo; of a loss applies broadly. The court held that the known loss doctrine requires proof that the insured was actually aware, at the time of policy inception, that a specific loss had occurred or was substantially certain to occur. Mere awareness of general risk factors does not suffice.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Delgado v. Interinsurance Exchange of the Automobile Club of Southern California (2009)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Delgado</em>, 47 Cal.4th 302, the California Supreme Court examined the &ldquo;expected or intended&rdquo; exclusion in the homeowners insurance context. The court adopted a subjective standard, holding that the exclusion applies only when the insured actually expected or intended the injury. The carrier must prove the insured&rsquo;s subjective state of mind &mdash; objective foreseeability alone does not trigger the exclusion. This decision reinforced the principle that negligent conduct, even grossly negligent conduct, does not defeat coverage under the expected or intended exclusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fire Insurance Exchange v. Superior Court (Altus) (2010)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Fire Insurance Exchange v. Superior Court</em>, 181 Cal.App.4th 388, the Court of Appeal addressed the distinction between accidental and intentional conduct in the context of a homeowners policy. The court confirmed that an insured&rsquo;s negligent or reckless conduct does not transform a loss from accidental to intentional. The &ldquo;accident&rdquo; inquiry focuses on whether the resulting harm was expected or intended by the insured, not on whether the insured&rsquo;s underlying conduct was careless.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Burden of Proof
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the allocation of the burden of proof in fortuity disputes depends on which doctrine is at issue:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Known loss doctrine:</strong> The insurer bears the burden of proving that the policyholder knew of the loss at the time the policy was purchased. This is an affirmative defense, and the carrier must establish it by a preponderance of the evidence.
        </li>
        <li>
          <strong>Expected or intended exclusion:</strong> Because this is a policy exclusion, the insurer bears the burden of proving that it applies. Under California law, once the policyholder establishes a prima facie claim for coverage (a loss occurred during the policy period), the burden shifts to the carrier to prove the applicability of any exclusion. The carrier must demonstrate that the policyholder subjectively expected or intended the specific damage that occurred.
        </li>
        <li>
          <strong>Initial grant of coverage:</strong> The policyholder has the initial burden of demonstrating that the loss falls within the insuring agreement. For an HO-3 &ldquo;open perils&rdquo; policy, this burden is relatively light &mdash; the policyholder need only show that a direct physical loss occurred during the policy period. For a &ldquo;named perils&rdquo; policy, the policyholder must identify the specific peril that caused the loss.
        </li>
      </ul>

      <CalloutBox variant="info" title="Open Perils vs. Named Perils and Fortuity">
        <p>
          The type of policy matters in fortuity disputes. Under an <strong>open perils</strong> (also called &ldquo;all risk&rdquo;) policy, all accidental losses are covered unless specifically excluded. The policyholder&rsquo;s burden is minimal: show the loss happened. Under a <strong>named perils</strong> policy, only losses caused by listed perils (fire, windstorm, hail, etc.) are covered. The policyholder must prove the peril. In both cases, however, the insurer bears the burden of proving any exclusion &mdash; including the expected or intended exclusion.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Implications for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the fortuity doctrine matters because it determines how policyholders should frame and document their claims. The following practical steps can help protect against illegitimate fortuity-based denials:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the sudden nature of the loss.</strong> When reporting a claim, emphasize that the damage was unexpected. Note the date and time you discovered it. If neighbors, family members, or contractors can confirm that the affected area was in good condition before the loss event, preserve those statements.
        </li>
        <li>
          <strong>Distinguish prior conditions from the current loss.</strong> If the property has a history of maintenance issues or prior claims in the same area, proactively address the distinction. A contractor&rsquo;s report confirming that the current damage is new and unrelated to prior conditions is invaluable.
        </li>
        <li>
          <strong>Do not concede that the damage was &ldquo;expected.&rdquo;</strong> During a{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] underline">recorded statement</Link>{' '}
          or in any written communication with the insurer, avoid language suggesting that the loss was foreseeable. Statements like &ldquo;I knew the roof was getting old&rdquo; or &ldquo;I was meaning to replace the water heater&rdquo; can be used to support a fortuity-based denial.
        </li>
        <li>
          <strong>Challenge maintenance-based denials.</strong> If the carrier denies coverage based on lack of maintenance, demand that they identify the specific policy provision they are relying on. The &ldquo;expected or intended&rdquo; exclusion requires proof of the policyholder&rsquo;s subjective intent, not evidence of deferred maintenance. A separate &ldquo;neglect&rdquo; or &ldquo;maintenance&rdquo; exclusion may apply to the cause of loss itself, but the ensuing loss provision may still preserve coverage for the resulting damage.
        </li>
        <li>
          <strong>Obtain expert opinions on causation.</strong> When a carrier alleges that damage is pre-existing or was caused by a gradual process rather than a sudden event, a qualified expert &mdash; a plumber, a roofing contractor, a structural engineer &mdash; can provide an independent assessment of when the damage occurred and what caused it.
        </li>
        <li>
          <strong>Review the denial letter carefully.</strong> Insurers sometimes invoke fortuity concepts without clearly identifying which policy provision supports the denial. Under California&rsquo;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">Fair Claims Settlement Practices Regulations</Link>
          , a carrier must provide a clear explanation of the factual and legal basis for any denial. A vague reference to the loss not being &ldquo;sudden and accidental&rdquo; without citing a specific exclusion may itself constitute a violation.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Intersection with Other Coverage Doctrines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fortuity doctrine does not exist in isolation. It intersects with several other coverage principles that policyholders should understand:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Efficient proximate cause:</strong> When a loss involves multiple causes &mdash; some covered, some excluded &mdash; California&rsquo;s{' '}
          <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">efficient proximate cause doctrine</Link>{' '}
          determines coverage based on the predominant cause. A carrier cannot use the fortuity doctrine to avoid analyzing the causal chain.
        </li>
        <li>
          <strong>Contra proferentem:</strong> Under California law, ambiguities in insurance policy language are construed against the insurer and in favor of coverage. If the policy&rsquo;s &ldquo;expected or intended&rdquo; exclusion is ambiguous as applied to the facts, the ambiguity is resolved in the policyholder&rsquo;s favor.
        </li>
        <li>
          <strong>Reasonable expectations:</strong> Even if the literal policy language supports a fortuity-based denial, the doctrine of reasonable expectations may preserve coverage if a reasonable policyholder would have expected the loss to be covered based on the nature of the policy purchased. For more on how this works, see our article on{' '}
          <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline">policy interpretation</Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Seek Professional Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fortuity-based denials are among the most frustrating for policyholders because they feel fundamentally unfair. The homeowner did not cause the damage intentionally. The loss was an accident. Yet the carrier is using legal doctrines and technical arguments to characterize the loss as something the policyholder should have prevented.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer has denied a claim on fortuity grounds, consider involving a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">licensed Public Adjuster</Link>{' '}
        or an insurance coverage attorney. Key warning signs that professional help is needed include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The carrier denies the claim as &ldquo;not sudden and accidental&rdquo; without identifying a specific exclusion</li>
        <li>The denial is based on the age or condition of a building component rather than evidence of the policyholder&rsquo;s intent</li>
        <li>The insurer invokes the known loss doctrine without proof that the policyholder had actual knowledge of the loss before the policy was bound</li>
        <li>The carrier characterizes negligent maintenance as &ldquo;expected&rdquo; damage</li>
        <li>The insurer&rsquo;s engineer or adjuster attributes damage to &ldquo;pre-existing conditions&rdquo; without performing adequate testing or investigation</li>
        <li>The denial conflates wear and tear with the expected or intended exclusion</li>
      </ul>

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pillsbury &amp; Coleman, LLP</strong> &mdash; A California policyholder advocacy firm that has published analysis of the fortuity doctrine and its application to property insurance claims, including discussion of the known loss and loss-in-progress doctrines.
        </li>
        <li>
          <strong>Shernoff Bidart Echeverria LLP</strong> &mdash; One of the leading California insurance bad faith litigation firms, whose attorneys have written extensively on the &ldquo;expected or intended&rdquo; exclusion and carrier misapplication of fortuity principles.
        </li>
        <li>
          <strong>Cozen O&rsquo;Connor</strong> &mdash; A national insurance law firm whose property insurance coverage publications address the known loss and loss-in-progress doctrines in detail, providing useful background on how these defenses are litigated.
        </li>
        <li>
          <strong>Merlin Law Group</strong> &mdash; A policyholder-side firm whose blog and publications frequently address fortuity issues in first-party property claims, including the distinction between negligence and intent.
        </li>
        <li>
          <strong>California Insurance Code &sect;22</strong> &mdash; The statutory definition of insurance, which establishes that the contract covers &ldquo;contingent or unknown&rdquo; events, forming the statutory foundation for the fortuity requirement.
        </li>
        <li>
          <strong>Witkin, Summary of California Law</strong> &mdash; The insurance chapters of Witkin&rsquo;s treatise provide comprehensive analysis of the fortuity doctrine, the known loss defense, and the expected or intended exclusion under California law.
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal advice. Nothing in this article should be construed as a legal opinion or as a substitute for consultation with a qualified attorney. Insurance policies and applicable law vary by state and by policy form. Consult a licensed professional for advice regarding your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Claim Denied as Not &ldquo;Sudden and Accidental&rdquo;?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer is using the fortuity doctrine, the known loss defense, or maintenance arguments to deny your claim, a Licensed Public Adjuster can help evaluate the denial, document the accidental nature of the loss, and advocate for the coverage you purchased.
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
