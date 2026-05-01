import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'SB 495: California\'s New Contents Payment Rule for Disaster Victims',
  description:
    'How SB 495 changes personal property claims after declared disasters — automatic 60% contents payments, no inventory required for 100 days, and what it means for policyholders.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Senate Bill 495 (SB 495) is one of the most significant policyholder protections
        enacted in recent years. Effective in 2026, it requires insurers to automatically pay 60% of
        the personal property (contents) coverage limit — up to $350,000 — when a total loss occurs
        in a state-declared disaster, <strong>without requiring a detailed inventory</strong> for at
        least 100 days. This is a dramatic improvement over the prior law, which required only 30%
        and had a lower cap.
      </p>

      <CalloutBox variant="tip" title="Quick Summary">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Applies to:</strong> Total losses in state-declared disasters</li>
          <li><strong>Automatic payment:</strong> 60% of contents limit (up to $350,000)</li>
          <li><strong>No inventory required</strong> for at least 100 days after the loss</li>
          <li><strong>Previous law:</strong> 30% automatic payment, up to $250,000</li>
          <li><strong>Effective:</strong> 2026</li>
        </ul>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss — especially in a wildfire — everything is gone. Every piece of clothing,
        every kitchen utensil, every family photo, every piece of furniture, every tool in the garage.
        Traditionally, insurers required policyholders to produce a detailed room-by-room inventory
        of every single item before paying anything on the contents claim. This process takes months
        of painstaking, emotionally draining work at exactly the time when the policyholder needs
        money to survive — to buy clothes, replace essentials, and furnish temporary housing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 495 addresses this by requiring insurers to put money in the policyholder&apos;s hands
        immediately, with the detailed inventory process deferred until later.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Previous Law Worked (Pre-SB 495)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the prior California law (effective 2022), insurers were required to offer at least
        30% of the dwelling policy limit for personal property coverage, up to $250,000, without
        requiring an itemized claim. This was a step forward but had significant limitations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>30% was often not enough for immediate needs, especially for families</li>
        <li>The $250,000 cap left higher-value policies significantly short</li>
        <li>Some insurers interpreted &ldquo;offer&rdquo; loosely, making the process slow</li>
        <li>There was no clear timeline for how long the no-inventory period lasted</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What SB 495 Changes
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Higher Automatic Payment</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The automatic advance payment increases from 30% to 60% of the personal property coverage
        limit. For a policy with $200,000 in contents coverage, that is $120,000 paid
        automatically — up from $60,000 under the old law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Higher Cap</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cap increases from $250,000 to $350,000. Homeowners with higher-value contents coverage
        benefit proportionally more.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">100-Day No-Inventory Period</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer cannot require a detailed room-by-room inventory for at least 100 days after
        the loss. This gives policyholders breathing room to stabilize before undertaking the
        massive task of inventorying everything they owned.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Broad Categories Accepted</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the automatic payment, the policyholder can submit claims using broad categories of
        lost contents rather than individual item-by-item inventories. This recognizes the reality
        that after a total loss, you may not remember every single item but you know the general
        scope of what you had.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who It Applies To
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 495 applies specifically to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Total losses</strong> — the home must be a total loss (not a partial loss)
        </li>
        <li>
          <strong>Declared disasters</strong> — the loss must occur in an area covered by a
          state-declared disaster emergency
        </li>
        <li>
          <strong>Residential policies</strong> — homeowner and dwelling fire policies
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For partial losses outside of declared disasters, the standard contents claim process still
        applies — though our{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">contents claims guide</Link>{' '}
        and{' '}
        <Link href="/inventory" className="text-[#2E74B5] hover:underline">inventory tool</Link>{' '}
        can help with that process.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Still Need to Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 495 gets you an immediate advance, but it does not eliminate the need for a thorough
        inventory to claim the remaining 40% of your contents coverage. After the 100-day
        no-inventory period:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You&apos;ll still need to document your contents.</strong> Work room by room,
          category by category. Our free{' '}
          <Link href="/inventory" className="text-[#2E74B5] hover:underline">Personal Property Inventory Tool</Link>{' '}
          has over 3,750 items organized by room to help you remember what you had.
        </li>
        <li>
          <strong>Replacement cost matters.</strong> The remaining payment will be based on the
          replacement cost (or ACV if your policy is ACV-only) of the specific items you document.
          Many policyholders significantly underutilize their contents coverage, often because they
          fail to create a thorough inventory or accept the insurer&apos;s initial estimate without
          challenge. Detailed documentation of personal property losses consistently leads to
          substantially higher settlements than incomplete or rushed inventories.
        </li>
        <li>
          <strong>Keep receipts.</strong> When you buy replacement items, keep every receipt. Under a
          replacement cost policy, you receive the{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">holdback (depreciation) payment</Link>{' '}
          when you actually replace items.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The 60% Advance Isn't Free Money">
        <p>
          The automatic payment is an advance against your contents coverage limit — not a bonus
          on top of it. If your total documented contents loss is $150,000 and you received a
          $120,000 advance, you&apos;ll receive $30,000 more (minus depreciation holdback) after
          documenting the claim. If your documented loss is less than the advance, the insurer
          could theoretically seek to recover the overpayment — though this is rare in practice.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the advance payment immediately.</strong> Do not wait for the insurer
          to offer. Reference SB 495 and formally request the 60% advance in writing.
        </li>
        <li>
          <strong>Track how you spend the advance.</strong> While you do not need to account for
          every dollar, keeping general records of how you spent the advance helps if questions arise
          later.
        </li>
        <li>
          <strong>Use the 100-day breathing room wisely.</strong> Start your detailed inventory when
          you are ready — but do not wait until day 100. The sooner you begin, the more
          items you&apos;ll remember. Walk through photos, videos, social media posts, and purchase
          histories to jog your memory.
        </li>
        <li>
          <strong>Do not undervalue your contents.</strong> Most homeowners significantly
          underestimate the replacement value of their personal property. Industry estimates
          suggest that a typical household contains $60,000 to $150,000 or more in personal
          belongings at replacement cost, depending on home size and lifestyle. Larger or
          higher-value homes can easily exceed $200,000. Be thorough and use replacement cost
          (what it costs to buy a comparable item new today), not what you originally paid.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With Your Contents Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can maximize your contents recovery — ensuring every item is documented,
          properly valued, and that you receive the full amount your policy owes.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
