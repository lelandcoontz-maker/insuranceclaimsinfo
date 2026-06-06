import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Salvage Rights in Property Insurance: Who Owns Damaged Property After a Claim?',
  description:
    'How salvage works in property insurance claims &mdash; who owns damaged property after a loss, how salvage value affects your settlement, the right to retain salvage, and California-specific rules policyholders need to know.',
  summary:
    'Salvage concerns who owns damaged property after a claim is paid and how its salvage value affects your settlement. You often have the right to retain salvage; know the California rules so the carrier does not both pay less and keep your property.',
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
        After an insurance loss, one of the least understood &mdash; and most practically
        important &mdash; questions is: who owns the damaged property? If your insurer pays to
        replace a fire-damaged roof, does the insurer now own the old roofing material? If the
        insurer declares your water-damaged furniture a total loss, do they get to keep the
        furniture? If your entire home is destroyed and the insurer pays a total loss claim, who
        owns the debris on the lot?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer involves a concept called <strong>salvage</strong> &mdash; and understanding
        how it works can directly affect the amount you receive on your claim. Salvage rights
        determine who gets to keep or sell damaged property after the insurer has paid the claim,
        and how the remaining value of that property (if any) is factored into your settlement.
        This article explains how salvage works for buildings, personal property, and automobiles,
        what your rights are as a policyholder, and where common disputes arise.
      </p>

      {/* ───────── What Is Salvage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Salvage in Insurance?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salvage, in the insurance context, refers to the remaining value of damaged property
        after the insurer has paid a claim. The term has its roots in maritime law, where a ship
        that ran aground still had value in its hull, cargo, and fittings &mdash; and the entity
        that paid the loss had a right to recover what it could from the wreck. The same
        principle applies in modern property insurance, though the application is very different
        depending on whether you are talking about a building, personal property, or a vehicle.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The core concept is straightforward: when an insurer pays you the full value of damaged
        property (a &ldquo;total loss&rdquo; payment), the insurer acquires a right to whatever
        residual value remains in that property. This prevents double recovery &mdash; you should
        not receive the full replacement value of an item <em>and</em> keep the damaged item to
        sell or use. The insurer paid for the loss; the insurer gets credit for whatever value
        remains.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But salvage is not as simple as the insurer just taking your stuff. The rules vary by
        the type of property, the type of loss settlement (actual cash value vs. replacement
        cost), and whether you choose to retain the salvage yourself. Understanding these
        distinctions is critical.
      </p>

      {/* ───────── How Salvage Works for Buildings ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Salvage Works for Dwelling and Building Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In dwelling and building claims, salvage works differently than most people expect. When
        your home is damaged and the insurer pays to repair it, the insurer does <em>not</em>{' '}
        take ownership of your house or the damaged building materials. You still own your home.
        The contractor tears off the damaged roof, installs a new one, and the old materials go
        into the dumpster. Nobody is claiming &ldquo;salvage&rdquo; on used shingles.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even in a{' '}
        <Link href="/resources/total-loss" className="text-[#2E74B5] hover:underline">
          total loss
        </Link>{' '}
        &mdash; where the entire structure is destroyed &mdash; the insurer does not take
        ownership of your land or the debris. You still own the property. The insurer pays the
        claim, and you use those funds to rebuild. The debris on the lot may have some scrap
        value (metal, copper wiring, etc.), but the insurer does not typically assert a salvage
        right to the physical remains of your home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are limited exceptions. If a building component has significant standalone value
        &mdash; custom architectural elements, high-end fixtures, or specialty equipment &mdash;
        the insurer may factor in salvage value when calculating the loss. For example, if a
        commercial building has a large HVAC system that was damaged but still partially
        functional, the insurer might argue that the system has salvage value that should be
        deducted from the replacement cost. But for typical residential claims, building salvage
        is not a major issue.
      </p>

      <CalloutBox variant="info" title="Building Salvage vs. Debris Removal">
        <p>
          Do not confuse salvage value with debris removal costs. Salvage is about the
          <em> remaining value</em> of damaged property. Debris removal is the{' '}
          <em>cost to remove</em> damaged property from the site. In most residential total
          losses, the debris has negative value &mdash; it costs money to remove, not the other
          way around. The insurer pays for debris removal as a separate coverage, and there is
          no salvage credit to offset it.
        </p>
      </CalloutBox>

      {/* ───────── How Salvage Works for Personal Property ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Salvage Works for Personal Property (Contents)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salvage becomes much more relevant in{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
          contents claims
        </Link>
        . When the insurer pays to replace a personal property item &mdash; your television,
        your sofa, your laptop &mdash; the insurer technically acquires a right to the damaged
        item. The principle is the same: the insurer paid the full replacement value, so the
        insurer gets the damaged item, which may still have some residual value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, here is how it typically works:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Items with no meaningful salvage value:</strong> Most household items that are
          declared a total loss have little or no resale value once damaged. Smoke-damaged
          clothing, water-damaged books, broken electronics &mdash; these items go in the trash.
          The insurer is not going to send a truck to collect your water-stained paperbacks. For
          most contents items, salvage is a non-issue because the damaged goods
          are worthless.
        </li>
        <li>
          <strong>Items with significant salvage value:</strong> Some items retain meaningful
          value even when damaged. A high-end appliance with cosmetic damage might still
          function perfectly. A piece of antique furniture with smoke damage might be restorable
          by a specialist. Electronics with repairable defects can be refurbished. In these
          cases, the insurer has a legitimate interest in salvage, because paying full
          replacement value and then recovering salvage reduces the insurer&apos;s net cost.
        </li>
        <li>
          <strong>Items the insurer takes possession of:</strong> Occasionally, the insurer will
          actually take physical possession of salvageable items. This is more common with
          high-value items &mdash; jewelry, electronics, appliances, or specialty equipment. The
          insurer (or a salvage company working on the insurer&apos;s behalf) may pick up the
          items and resell them through salvage channels.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Discard Items Without Documentation">
        <p>
          Never throw away damaged personal property before the insurer has had a chance to
          inspect and document it. If you discard items before the insurer evaluates them, you
          lose your evidence of the loss, and the insurer may dispute whether the items existed
          or were actually damaged. Photograph everything from multiple angles, and keep the
          damaged items until the claim on those items is resolved.
        </p>
      </CalloutBox>

      {/* ───────── The Right to Retain Salvage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Retain Salvage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important things policyholders need to understand is that you generally
        have the right to <strong>retain salvage</strong> &mdash; that is, to keep the damaged
        property yourself instead of surrendering it to the insurer. When you retain salvage,
        the insurer deducts the estimated salvage value from your settlement payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is how it works in practice. Suppose you have a high-end refrigerator that was
        damaged in a kitchen fire. The replacement cost is $3,500. The insurer determines the
        damaged refrigerator still has a salvage value of $500 (it still runs, but the exterior
        is heat-damaged and discolored). You have two options:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Surrender the salvage:</strong> The insurer pays you the full $3,500
          replacement cost and takes possession of the damaged refrigerator. The insurer resells
          it through a salvage channel and recoups some of its payment.
        </li>
        <li>
          <strong>Retain the salvage:</strong> You keep the damaged refrigerator and the insurer
          pays you $3,000 ($3,500 minus the $500 salvage value). You can continue using the
          damaged appliance, sell it yourself, donate it, or dispose of it however you choose.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The right to retain salvage is particularly useful when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The damaged item still has functional value to you, even if it is cosmetically
          impaired
        </li>
        <li>
          You believe the item&apos;s actual resale value is lower than what the insurer
          estimates as salvage value
        </li>
        <li>
          The item has sentimental value and you do not want the insurer to dispose of it
        </li>
        <li>
          You can repair the item yourself for less than the salvage deduction
        </li>
      </ul>

      <CalloutBox variant="tip" title="Negotiate the Salvage Value">
        <p>
          The salvage value the insurer assigns is an estimate &mdash; and it is negotiable. If
          the insurer says your damaged appliance has $800 in salvage value but you can
          demonstrate that comparable damaged units sell for $300 on the secondary market, push
          back. The insurer&apos;s salvage estimate should reflect the realistic resale value of
          the damaged item, not an inflated number designed to reduce the settlement.
        </p>
      </CalloutBox>

      {/* ───────── ACV, RCV, and Salvage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Salvage Interacts with ACV and RCV Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the relationship between salvage and your{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
          loss settlement method
        </Link>{' '}
        (actual cash value vs. replacement cost value) is important, because the two concepts
        can overlap in confusing ways.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Actual cash value (ACV)</strong> already accounts for the condition and age of
        the item through depreciation. If the insurer pays ACV on a damaged item, the payment
        reflects the item&apos;s pre-loss depreciated value &mdash; not its full replacement
        cost. In an ACV settlement, if the insurer also takes salvage, the math can work against
        the policyholder: you receive depreciated value, the insurer takes the damaged item, and
        the insurer may resell it. The policyholder is left with less money and no item.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Replacement cost value (RCV)</strong> pays the full cost of replacing the item
        with one of like kind and quality, without depreciation. When the insurer pays full
        replacement cost, the insurer&apos;s salvage interest is stronger because the insurer
        has paid more. In an RCV claim, the insurer is more likely to assert salvage rights
        on higher-value items.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In either case, the insurer should not be <em>both</em> depreciating an item heavily
        <em> and</em> claiming high salvage value. If an item is so worn out that it deserves
        heavy depreciation, it logically should not have much salvage value. If it has high
        salvage value, it logically was not as depreciated as the insurer claims. Watch for
        insurers who try to have it both ways.
      </p>

      {/* ───────── Auto Total Loss Salvage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Auto Total Loss Salvage vs. Property Salvage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most people are familiar with salvage from the auto insurance context, and it is worth
        explaining how it differs from property insurance salvage because the two are often
        confused.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an auto insurer declares a vehicle a total loss, the process is relatively
        standardized:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer determines the vehicle&apos;s pre-loss fair market value.
        </li>
        <li>
          The insurer offers the policyholder that value (minus the deductible, if applicable).
        </li>
        <li>
          If the policyholder accepts, the insurer takes title to the vehicle and sells it
          through a salvage auction. The vehicle receives a &ldquo;salvage title,&rdquo; which
          permanently marks it as having been declared a total loss.
        </li>
        <li>
          Alternatively, the policyholder can retain the salvage. The insurer deducts the
          estimated salvage value from the settlement. The policyholder keeps the vehicle but
          receives a branded (salvage) title from the DMV.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The auto salvage process is more formalized than property salvage because vehicles have
        titles, VIN numbers, and a well-established resale market (including dedicated salvage
        auctions like Copart and IAA). Property insurance salvage is less structured &mdash;
        there is no &ldquo;title&rdquo; to a sofa or a washing machine, and no standardized
        auction market for damaged household goods.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key difference that matters to policyholders: in auto total loss claims, the salvage
        value is typically determined by actual auction data and is relatively transparent. In
        property claims, salvage values are more subjective and more prone to dispute.
      </p>

      <CalloutBox variant="info" title="Retaining a Totaled Vehicle">
        <p>
          If you choose to retain a totaled vehicle, be aware that the salvage deduction can be
          substantial &mdash; often 20 to 30 percent of the vehicle&apos;s pre-loss value. You
          will also need to obtain a salvage title from the DMV, and the vehicle must pass a
          brake and lamp inspection (and in some states, a more comprehensive rebuilt vehicle
          inspection) before it can be re-registered for road use. The branded title will
          permanently reduce the vehicle&apos;s resale value.
        </p>
      </CalloutBox>

      {/* ───────── Abandoned Property ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Abandoned Property After a Total Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a catastrophic loss &mdash; particularly a wildfire or a severe fire &mdash;
        policyholders sometimes leave damaged personal property behind, either because the items
        appear worthless or because the emotional burden of sorting through destroyed belongings
        is overwhelming. This creates what the insurance industry calls &ldquo;abandoned
        property,&rdquo; and it raises important questions about ownership and salvage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The general rule is that you do not lose ownership of your property simply by leaving
        the loss site. Abandonment under the law requires more than just walking away &mdash; it
        typically requires an intent to permanently relinquish ownership. Simply evacuating after
        a disaster and not immediately returning does not constitute legal abandonment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, practical issues arise:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pack-out companies:</strong> When a restoration company performs a pack-out of
          your home, they take possession of your contents for cleaning and storage. Items
          deemed unsalvageable during the pack-out process may be discarded &mdash; and you need
          to ensure those items are documented and included in your contents claim{' '}
          <em>before</em> they are thrown away.
        </li>
        <li>
          <strong>Debris removal:</strong> In a total loss, the debris removal process may
          destroy any remaining personal property on the site. If government-sponsored debris
          removal (such as after a declared disaster) clears your lot, anything left on the
          property is typically gone. Make sure your contents claim accounts for items that were
          on the property at the time of the loss, even if those items were subsequently removed
          during cleanup.
        </li>
        <li>
          <strong>Insurer-directed disposal:</strong> Some insurers or their restoration
          vendors dispose of damaged property without adequate policyholder authorization. If
          the insurer or its vendor disposes of your property before you have had a chance to
          evaluate it, document what happened and ensure you receive credit for every item.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Document Before Debris Removal">
        <p>
          If your property will be subject to debris removal &mdash; whether by a private
          contractor or a government agency &mdash; walk the site first (if safe to do so) and
          document everything. Photograph and video-record damaged items in place. Create a list
          of everything you can identify. Once debris removal begins, evidence is permanently
          destroyed. Your contents claim depends on what you can document.
        </p>
      </CalloutBox>

      {/* ───────── Pack-Out and Salvage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pack-Out, Cleaning, and Salvage Decisions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In partial-loss claims &mdash; where the home is damaged but not destroyed &mdash; the
        insurer often hires a restoration company to pack out your contents, clean or restore
        them, and return them after repairs are complete. This process is where many salvage
        disputes begin.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        During a pack-out, the restoration company categorizes items into several groups:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cleanable/restorable:</strong> Items that can be professionally cleaned and
          returned to pre-loss condition. These are cleaned, stored, and returned. No salvage
          issue arises because the item is being repaired, not replaced.
        </li>
        <li>
          <strong>Non-restorable (total loss):</strong> Items that cannot be adequately cleaned
          or repaired. These are declared a total loss, and the insurer pays to replace them.
          The salvage question arises here: does the damaged item have any remaining value?
        </li>
        <li>
          <strong>Questionable items:</strong> Items where the restorability is debatable. This
          is where disputes frequently occur. The insurer wants to clean items rather than
          replace them (cleaning is cheaper). The policyholder may want items replaced because
          they do not trust that cleaning will fully restore them. For guidance on this dispute,
          see our article on{' '}
          <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
            contents claims
          </Link>.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A critical point: you have the right to be involved in decisions about which items are
        cleaned vs. replaced, and which items are discarded. Do not let the restoration company
        or the insurer make these decisions unilaterally. Insist on being present during the
        pack-out if possible, or at minimum, require a detailed inventory of every item packed
        out, its condition, and the recommended disposition (clean, replace, or discard).
      </p>

      {/* ───────── Who Decides Salvage Value ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Decides What Has Salvage Value?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most property insurance claims, the insurer determines salvage value &mdash; and this
        is where disputes commonly arise. The insurer has an obvious financial interest in
        assigning <em>higher</em> salvage values, because higher salvage values mean lower net
        payouts. The policyholder, conversely, has an interest in lower salvage values (or no
        salvage value at all), because that maximizes the settlement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&apos;s salvage valuation should reflect the realistic resale value of the
        damaged item in its damaged condition &mdash; not its pre-loss value, and not an
        optimistic estimate of what it might sell for in a best-case scenario. Factors that
        affect salvage value include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The type and extent of damage (cosmetic vs. functional)
        </li>
        <li>
          Whether the item is still usable in its damaged condition
        </li>
        <li>
          The availability of a secondary market for that type of item
        </li>
        <li>
          The cost to transport, store, and resell the item (which reduces net salvage value)
        </li>
        <li>
          Whether the item can be economically repaired for resale
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you disagree with the insurer&apos;s salvage valuation, you are not obligated to
        accept it. Request documentation of how they arrived at the number. Ask what comparable
        damaged items have actually sold for. If the insurer cannot support its valuation with
        market data, push back.
      </p>

      {/* ───────── California-Specific Rules ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Rules About Salvage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations (10 CCR &sect;2695 et
        seq.) do not contain a standalone section dedicated exclusively to salvage, but several
        provisions bear directly on how salvage must be handled:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>10 CCR &sect;2695.7(b):</strong> Requires the insurer to disclose all
          benefits, coverage, time limits, or other provisions of the policy that may apply to
          the claim. If salvage provisions in the policy affect the settlement calculation, the
          insurer must disclose them.
        </li>
        <li>
          <strong>10 CCR &sect;2695.7(g):</strong> Requires that no insurer shall attempt to
          settle a claim by making a settlement offer that is unreasonably low. An inflated
          salvage deduction that reduces the settlement below what the policyholder is owed would
          violate this provision.
        </li>
        <li>
          <strong>10 CCR &sect;2695.9(b):</strong> For residential property claims, the insurer
          must provide a written estimate of the amount for which the loss can be repaired or the
          property replaced, and must include in its settlement offer the applicable measure of
          damages under the policy. Any salvage deduction should be transparently documented as
          part of this calculation.
        </li>
        <li>
          <strong>10 CCR &sect;2695.9(d):</strong> When an insurer elects to repair, restore,
          or replace damaged property, the insurer must restore the property to at least its
          condition immediately before the loss. This is relevant because if the insurer claims
          an item has been &ldquo;restored&rdquo; through cleaning but the policyholder believes
          it has not been adequately restored, the salvage question re-emerges: is the item a
          total loss (triggering replacement and potential salvage), or was it properly repaired?
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, California Insurance Code &sect;2051(b) and &sect;2051.5 govern the
        measure of indemnity for property insurance claims. Under these sections, the insurer
        must pay the amount it would cost to repair, rebuild, or replace the thing lost or
        injured. If the insurer takes a salvage deduction, it must be based on the item&apos;s
        actual salvage value &mdash; not an arbitrary estimate.
      </p>

      <CalloutBox variant="tip" title="Request a Detailed Breakdown">
        <p>
          California regulations require the insurer to provide a clear explanation of how it
          calculated your settlement. If the insurer deducts salvage value from any item on your
          claim, ask for a written explanation of how that value was determined, including any
          market data, auction results, or comparable sales the insurer relied on. You have the
          right to understand &mdash; and challenge &mdash; every deduction.
        </p>
      </CalloutBox>

      {/* ───────── Common Disputes ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Salvage Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salvage disputes are more common than most policyholders realize. Here are the patterns
        that come up most frequently:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Insurer Overvalues Salvage to Reduce the Payout
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most common salvage dispute. The insurer assigns an inflated salvage
        value to damaged items, which reduces the net settlement. For example, the insurer
        declares a fire-damaged appliance has $1,200 in salvage value when comparable damaged
        units sell for $200 at auction. The policyholder&apos;s settlement is reduced by $1,200
        instead of $200 &mdash; a $1,000 difference on a single item. Multiply this across
        dozens of items on a large contents claim, and the overvaluation can cost thousands of
        dollars.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Insurer Fails to Credit Salvage Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer takes possession of salvage, it may resell those items through a
        salvage company. If the insurer sells salvage for <em>more</em> than the salvage
        deduction it took from your settlement, the insurer pockets the difference. While the
        insurer is not typically required to share excess salvage proceeds with the policyholder,
        the salvage deduction from your settlement should reflect the <em>actual</em> salvage
        value &mdash; not a lowball estimate that allows the insurer to profit on the back end.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Insurer Claims Items as Salvage Without Paying for Them
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Occasionally, an insurer or its vendor will take possession of damaged items without
        first paying the claim on those items. This can happen during a pack-out, where the
        restoration company discards items it deems non-restorable. If those items had value
        &mdash; or if the insurer does not include them on the contents claim &mdash; the
        policyholder loses both the item and the insurance payment. Insist that every item
        removed from your property is documented and accounted for in your claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Insurer Refuses to Let You Retain Salvage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers pressure policyholders to surrender damaged items rather than retain them.
        Unless your policy specifically requires you to surrender salvage (and most standard
        homeowner policies do not), you generally have the right to keep damaged property and
        accept a reduced settlement. Review your policy language carefully. If the insurer claims
        you must surrender salvage, ask them to point to the specific policy provision that
        requires it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Double-Dipping: Depreciation Plus Salvage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the dispute that should draw the most scrutiny. If the insurer pays{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
          actual cash value
        </Link>{' '}
        (already reduced by depreciation) and <em>also</em> takes a salvage deduction, the
        policyholder is being hit twice. The item was already depreciated to reflect its
        condition and remaining useful life. Taking a further salvage deduction on top of heavy
        depreciation can result in the policyholder receiving less than the item is worth in any
        realistic scenario. If you see this pattern, challenge it. The insurer cannot
        depreciate an item to minimal value and then claim the damaged item still has high
        salvage value &mdash; the two positions are inherently contradictory.
      </p>

      <CalloutBox variant="warning" title="Watch for Double Deductions">
        <p>
          Review your settlement carefully. If the insurer applies depreciation to reduce an
          item to ACV and then also deducts salvage value, you may be getting shortchanged. The
          combined effect of depreciation plus salvage deduction should not reduce the payment
          below the realistic value of the item. If the numbers do not make sense, request a
          detailed explanation and escalate if necessary.
        </p>
      </CalloutBox>

      {/* ───────── Salvage vs. Subrogation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Salvage vs. Subrogation: Different Concepts, Related Outcomes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salvage and{' '}
        <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
          subrogation
        </Link>{' '}
        are different legal concepts that serve a similar purpose &mdash; both are mechanisms
        the insurer uses to reduce its net cost after paying a claim. Understanding the
        distinction matters:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Salvage</strong> involves recovering value from the <em>damaged property
          itself</em>. The insurer pays for the loss and then recovers some value by selling
          or retaining the damaged goods.
        </li>
        <li>
          <strong>Subrogation</strong> involves recovering money from the <em>party responsible
          for the loss</em>. The insurer pays the claim and then pursues the at-fault third
          party (or their insurer) to recover what it paid.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some claims, both salvage and subrogation are in play. For example, if a
        neighbor&apos;s negligence causes a fire that damages your home and contents, the
        insurer might take salvage on damaged items <em>and</em> subrogate against the
        neighbor&apos;s liability insurance. The policyholder should understand both recovery
        mechanisms and how each one affects their settlement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One key difference: subrogation recoveries are shared with the policyholder (California
        requires the insurer to include your deductible in any subrogation demand and share
        recoveries proportionately). Salvage recoveries, by contrast, generally go entirely to
        the insurer &mdash; though the salvage deduction from your settlement should accurately
        reflect the item&apos;s actual salvage value.
      </p>

      {/* ───────── Policy Language to Watch For ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policy Language to Watch For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most standard homeowner policies contain some version of a salvage clause, though the
        specific language varies by policy form. Look for language in your policy addressing
        these topics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Our option&rdquo; clause:</strong> Many policies include language
          giving the insurer the option to repair, replace, or pay the actual cash value of
          damaged property. Some policies add a fourth option: to &ldquo;take all or any part
          of the property at the agreed or appraised value.&rdquo; This is the salvage clause,
          and it gives the insurer the right to take ownership of damaged property in exchange
          for paying its full value.
        </li>
        <li>
          <strong>&ldquo;Recovered property&rdquo; clause:</strong> Some policies address what
          happens if stolen or lost property is later recovered. If you have already been paid
          for the loss, you may need to return the insurance payment or surrender the recovered
          property to the insurer. This is conceptually related to salvage.
        </li>
        <li>
          <strong>Duties after loss:</strong> Your policy may require you to protect property
          from further damage, make damaged property available for inspection, and cooperate
          with the insurer&apos;s investigation. These duties relate to salvage because the
          insurer needs to inspect damaged property to assess its value (both the loss value
          and any salvage value).
        </li>
      </ul>

      {/* ───────── Practical Tips ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are concrete steps you can take to protect yourself on salvage issues:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photograph and document everything.</strong> Before any items are moved,
          cleaned, discarded, or surrendered to the insurer, photograph them from multiple
          angles. Create a written inventory with descriptions, conditions, and estimated
          values. This documentation is your evidence if a salvage dispute arises later.
        </li>
        <li>
          <strong>Read your policy&apos;s salvage provisions.</strong> Know what your policy
          says about the insurer&apos;s right to take damaged property, your right to retain
          salvage, and any conditions or procedures that apply. If you cannot find salvage
          language in your policy, ask the insurer to point you to the applicable provisions.
        </li>
        <li>
          <strong>Question every salvage deduction.</strong> If the insurer deducts salvage
          value from any item on your claim, ask for the basis of the valuation. What comparable
          sales data supports the number? Would the insurer actually be able to sell the item
          for that amount? If the answer is not convincing, negotiate.
        </li>
        <li>
          <strong>Consider retaining salvage strategically.</strong> For items you can still
          use, or items where the insurer&apos;s salvage estimate seems inflated, retaining the
          salvage and accepting the reduced payment may be a better deal. Run the math before
          deciding.
        </li>
        <li>
          <strong>Monitor the pack-out process closely.</strong> If a restoration company is
          packing out and cleaning your contents, insist on a detailed inventory of everything
          removed. Require written authorization before any item is discarded. Know which items
          the company is cleaning, which it is recommending for replacement, and which it is
          treating as having no value.
        </li>
        <li>
          <strong>Do not sign blanket authorizations.</strong> The insurer or restoration
          company may ask you to sign a general authorization to dispose of unsalvageable items.
          Be cautious. A blanket authorization can result in items being discarded without your
          knowledge. If you sign any authorization, make it as specific as possible and retain
          the right to approve dispositions on an item-by-item basis.
        </li>
        <li>
          <strong>Track what the insurer takes.</strong> If the insurer or its salvage company
          physically takes possession of any of your property, keep a detailed list. Note the
          date, what was taken, and the condition of each item. This creates a record if you
          later need to dispute the insurer&apos;s salvage valuation or assert that an item was
          taken without adequate compensation.
        </li>
      </ol>

      {/* ───────── When Salvage Becomes a Real Problem ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Salvage Becomes a Real Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For most residential property claims, salvage is a minor issue. The damaged items have
        little or no salvage value, the insurer does not bother asserting salvage rights, and the
        settlement is calculated based on the cost to repair or replace without any salvage
        deduction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But salvage can become a significant issue in certain situations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>High-value contents claims:</strong> When a loss involves expensive
          electronics, appliances, furniture, jewelry, artwork, or specialty items, the salvage
          values on individual items can be substantial, and the insurer is more likely to assert
          salvage rights.
        </li>
        <li>
          <strong>Commercial property claims:</strong> Commercial claims often involve
          equipment, inventory, and fixtures with significant salvage value. A restaurant&apos;s
          commercial kitchen equipment, a manufacturer&apos;s production machinery, or a
          retailer&apos;s undamaged inventory all create salvage considerations that can
          materially affect the settlement.
        </li>
        <li>
          <strong>Partial losses with functional but cosmetically damaged items:</strong> When
          items still work but look damaged &mdash; smoke-stained furniture, heat-discolored
          appliances, water-marked electronics &mdash; the insurer may argue the items have high
          salvage value because they are still functional, while the policyholder argues they
          need full replacement because they are no longer in pre-loss condition.
        </li>
        <li>
          <strong>
            <Link href="/resources/total-loss" className="text-[#2E74B5] hover:underline">
              Total loss
            </Link>{' '}
            claims with site cleanup complications:
          </strong>{' '}
          After a total loss, the interplay between debris removal, salvage, and the contents
          claim can create confusion. Items buried in rubble may be discarded during debris
          removal before anyone evaluates their salvage value &mdash; or their value as
          evidence supporting the contents claim.
        </li>
      </ul>

      {/* ───────── Key Takeaways ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Salvage</strong> is the residual value of damaged property after the insurer
          pays a claim. When the insurer pays a total loss, it acquires a right to the
          remaining value of the damaged item.
        </li>
        <li>
          For <strong>building claims</strong>, salvage is rarely a significant issue. The
          insurer pays to repair or rebuild your home and does not take ownership of the
          structure or the debris.
        </li>
        <li>
          For <strong>contents claims</strong>, salvage matters more. Items with significant
          remaining value may be subject to salvage deductions, and the insurer may take
          physical possession of high-value damaged items.
        </li>
        <li>
          You generally have the <strong>right to retain salvage</strong> and accept a reduced
          settlement. This can be advantageous when the item still has functional value to you
          or when the insurer&apos;s salvage estimate is inflated.
        </li>
        <li>
          Watch for <strong>common disputes</strong>: inflated salvage valuations, double
          deductions (depreciation plus salvage), items taken without compensation, and insurers
          refusing to let you retain salvage.
        </li>
        <li>
          Salvage and{' '}
          <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
            subrogation
          </Link>{' '}
          are different concepts. Salvage recovers value from the damaged property.
          Subrogation recovers money from the party responsible for the loss.
        </li>
        <li>
          <strong>Document everything.</strong> Photograph damaged items, monitor pack-out
          processes, track what the insurer takes, and question every salvage deduction on your
          settlement.
        </li>
      </ul>

      {/* ───────── CTA ───────── */}
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Questions About Salvage on Your Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If you believe the insurer is overvaluing salvage, taking items without proper
          compensation, or reducing your settlement unfairly through salvage deductions, a
          licensed Public Adjuster can review your claim and help you recover what you are owed.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      {/* ───────── Legal Disclaimer ───────── */}
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly
          based on individual circumstances. Consult a licensed attorney for advice about your
          specific situation.
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
