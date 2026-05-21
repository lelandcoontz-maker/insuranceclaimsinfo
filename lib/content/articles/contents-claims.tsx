import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Personal Property & Contents Claims',
  description:
    'How to handle the contents portion of your insurance claim, including inventory preparation, cleaning vs. total loss, and maximizing your settlement.',
  summary:
    'The contents portion of a claim covers your belongings. Build a thorough inventory, distinguish items that can be cleaned from those that are a total loss, and document replacement values to get a fair settlement for personal property.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your home is damaged, the building itself is only part of the story. Everything inside
        your home, your furniture, clothing, electronics, kitchenware, and personal belongings, falls
        under the &ldquo;contents&rdquo; or &ldquo;personal property&rdquo; portion of your
        insurance policy. Contents claims are often the most time-consuming and emotionally difficult
        part of the process, but they also represent a significant portion of your total recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Contents Claims Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your homeowner&rsquo;s policy typically provides a separate coverage limit for personal
        property, often set at a percentage of your dwelling coverage (commonly 50 to 75 percent).
        After a covered loss, the insurer will evaluate each item of damaged or destroyed personal
        property and determine a settlement amount based on your policy terms, whether that is actual
        cash value or replacement cost value.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cleaning, Total Loss, and Pack-Out
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all contents damage is the same, and the claim process differs depending on the category:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cleanable contents:</strong> Items that can be professionally cleaned and restored
          to pre-loss condition. This includes many clothing items, hard goods, and furniture that
          sustained smoke or soot damage. The insurer pays for professional cleaning rather than
          replacement.
        </li>
        <li>
          <strong>Total loss contents:</strong> Items that are destroyed, damaged beyond repair, or
          cannot be adequately cleaned. These items are valued at either actual cash value or
          replacement cost, depending on your policy.
        </li>
        <li>
          <strong>Pack-out, storage, and return:</strong> When your home needs extensive repairs, a
          restoration company may pack out your contents, store them in a climate-controlled facility,
          clean or restore them, and return them when repairs are complete. This process is typically
          covered under your policy.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Keep Everything Until the Claim Is Settled">
        <p>
          Do not throw away damaged items until the insurer has inspected and documented them. If the
          insurer has not yet seen an item, photograph it thoroughly from multiple angles with
          something for scale before discarding.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preparing Your Inventory
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The foundation of your contents claim is a detailed inventory of every damaged or destroyed
        item. For each item, you should document:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A description of the item (brand, model, size, color)</li>
        <li>The room or area where it was located</li>
        <li>The age of the item or approximate date of purchase</li>
        <li>The original purchase price, if known</li>
        <li>The current replacement cost (what it would cost to buy the same or similar item today)</li>
        <li>The condition of the item before the loss</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is painstaking work. A typical household has hundreds or even thousands of individual
        items. Go room by room, closet by closet, drawer by drawer. Use old photographs, online
        purchase histories, credit card statements, and any other records you can find to support your
        inventory.
      </p>

      <CalloutBox variant="important" title="Free Inventory Tool">
        <p>
          We built a{' '}
          <Link href="/inventory" className="underline font-semibold">
            free contents inventory tool
          </Link>{' '}
          specifically for policyholders preparing their contents claims. It helps you organize items
          by room, calculate values, and export a professional inventory for submission to your
          insurer.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inventory Professionals
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurance companies will hire an inventory service to help you document your contents.
        Better insurers cover this cost voluntarily, recognizing that professional inventory services
        produce more accurate results and reduce disputes. Other insurers leave the burden entirely on
        the policyholder. If your insurer does not offer inventory assistance, you can hire a
        professional inventory company yourself. A licensed Public Adjuster can also coordinate this
        process and ensure nothing is missed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ACV vs. RCV on Contents
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost value (RCV) policy, contents are paid in two stages. First,
        the insurer pays the actual cash value (ACV), which is the replacement cost minus
        depreciation. After you actually replace the item, you submit proof of purchase and the
        insurer pays the remaining &ldquo;recoverable depreciation&rdquo; or holdback. If you have
        an ACV-only policy, you receive only the depreciated value and nothing more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pay close attention to the depreciation applied to each item. Insurers sometimes
        over-depreciate items or apply depreciation incorrectly. A five-year-old high-end appliance
        should not be depreciated the same way as a five-year-old t-shirt.
      </p>

      <CalloutBox variant="warning" title="Replacement Deadlines">
        <p>
          Most policies give you a limited time, often 180 days to two years, to replace items and
          collect the recoverable depreciation. Check your policy for the specific deadline and
          request an extension in writing if you need more time.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tips for Maximizing Your Contents Claim
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Be thorough.</strong> The number one mistake policyholders make is forgetting items.
          Think about every room, every closet, every storage area, the garage, the attic, the
          pantry.
        </li>
        <li>
          <strong>Use &ldquo;like kind and quality&rdquo; replacement pricing.</strong> You are
          entitled to replace items with comparable quality, not the cheapest version available. If
          you had a solid wood dining table, the replacement is a solid wood dining table, not a
          particle board alternative.
        </li>
        <li>
          <strong>Do not round down.</strong> If you are unsure of the exact price, research it. Use
          online retailers to find current replacement costs for the same or similar items.
        </li>
        <li>
          <strong>Document matching sets.</strong> If one piece of a matching set is destroyed, you
          may be entitled to replace the entire set to maintain a match (e.g., a dining set, a
          bedroom set, or a set of pots and pans).
        </li>
        <li>
          <strong>Challenge unfair depreciation.</strong> If the insurer depreciates an item more than
          you believe is reasonable, push back with evidence of the item&rsquo;s remaining useful
          life.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Contents claims take patience and attention to detail. The effort you put into your inventory
        directly translates to dollars recovered. If the process feels overwhelming, a licensed
        Public Adjuster can manage it for you and ensure you recover every dollar you are owed.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
