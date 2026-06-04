import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Electronics, Jewelry & Specialty Item Claims',
  description:
    'How high-value and specialty items are treated in insurance claims, including sublimits, scheduling, and documentation strategies.',
  summary:
    'High-value items like electronics, jewelry, and collectibles face sub-limits under standard coverage. Scheduling them and keeping documentation (appraisals, receipts, photos) is how you ensure full payment rather than a capped amount.',
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
        Not all personal property is treated equally by your insurance policy. High-value items like
        jewelry, electronics, firearms, fine art, and collectibles are subject to special rules,
        sublimits, and documentation requirements that can significantly affect your recovery. If you
        own valuable items, understanding how your policy handles them is critical before a loss
        occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How High-Value Items Are Treated Differently
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies provide broad coverage for personal property, but they impose
        internal limits, called sublimits, on certain categories of high-value items. These sublimits
        cap the amount the insurer will pay for a specific category regardless of the actual value of
        the items lost. The sublimits exist because insurers price your policy premium based on
        &ldquo;typical&rdquo; household contents. If you own items that exceed typical values, the
        standard premium does not account for that additional risk.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Sublimits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While exact amounts vary by policy, here are sublimits commonly found in homeowner policies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Jewelry, watches, and furs:</strong> Typically $1,500 to $2,500 total for theft
          losses. This is not per item; it is the total limit for the entire category. A single
          stolen engagement ring can easily exceed this limit.
        </li>
        <li>
          <strong>Cash and currency:</strong> Usually $200 to $500.
        </li>
        <li>
          <strong>Firearms:</strong> Commonly $2,500 to $5,000 for theft.
        </li>
        <li>
          <strong>Silverware and goldware:</strong> Often $2,500.
        </li>
        <li>
          <strong>Business property at home:</strong> Typically $2,500 to $5,000.
        </li>
        <li>
          <strong>Electronics:</strong> Some policies impose sublimits on electronics, particularly
          for certain types of loss. Check your specific policy language.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Sublimits Can Leave You Underinsured">
        <p>
          Many policyholders do not discover these sublimits until after a loss, when it is too late
          to change them. Review your policy declarations page and the personal property section to
          identify all sublimits that apply.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scheduled vs. Unscheduled Personal Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution to sublimits is &ldquo;scheduling&rdquo; your high-value items. When you
        schedule an item, you add it to your policy individually with an appraised value. Scheduled
        items receive several advantages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Coverage up to the full appraised value, bypassing the sublimit</li>
        <li>Broader coverage that often includes &ldquo;mysterious disappearance&rdquo; (you lost it
          and do not know how)</li>
        <li>No deductible on scheduled items in many policies</li>
        <li>Agreed-value coverage, meaning the insurer has already accepted the item&rsquo;s value
          so there is less dispute at claim time</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unscheduled personal property is everything else, all of the items covered under your general
        contents limit and subject to the standard sublimits. For most household items, the general
        coverage is adequate. But for anything of significant value, scheduling is the way to ensure
        full protection.
      </p>

      <CalloutBox variant="tip" title="Schedule Before the Loss">
        <p>
          Scheduling items requires a current appraisal or receipt. The time to schedule high-value
          items is now, not after a loss. Contact your insurance agent to add a personal articles
          floater or inland marine endorsement for your valuable items.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document and Value Specialty Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have already experienced a loss and need to claim specialty items, documentation is
        everything. Here is how to build the strongest possible case for your high-value items:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Gather purchase records.</strong> Receipts, credit card statements, online order
          histories, and warranty registration cards all establish what you owned and what you paid.
        </li>
        <li>
          <strong>Obtain appraisals.</strong> For jewelry, art, antiques, and collectibles, a
          professional appraisal establishes value. If you had the items appraised before the loss,
          that documentation is invaluable. If not, an appraiser can sometimes provide a
          retrospective valuation based on descriptions and comparable items.
        </li>
        <li>
          <strong>Use photographs.</strong> Photos showing the items in your home establish ownership.
          Check your phone, social media, and cloud storage for photos that happen to show your
          valuables in the background.
        </li>
        <li>
          <strong>Provide detailed descriptions.</strong> For electronics, include the brand, model
          number, and specifications. For jewelry, describe the metal, stones, weight, and any
          designer or brand markings.
        </li>
        <li>
          <strong>Research current replacement cost.</strong> Find the current retail price for the
          same or comparable items from reputable retailers. For discontinued items, comparable
          replacements of like kind and quality are the standard.
        </li>
      </ul>

      <CalloutBox variant="important" title="Be Honest and Accurate">
        <p>
          Never inflate the value of items or claim items you did not own. Insurance fraud is a
          crime, and insurers have sophisticated methods for verifying claims. Stick to the truth,
          document thoroughly, and let the evidence support your claim.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Specialty items represent some of the most valuable personal property in your home. If the
        insurer&rsquo;s valuation seems low or if sublimits are capping your recovery unfairly, a
        licensed Public Adjuster can review your policy, challenge incorrect valuations, and help you
        recover the full amount you are owed.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
