import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Maximizing Your Loss of Use (ALE) Claim',
  description:
    'Coverage D pays your additional living expenses when you can\'t live in your home. Most policyholders leave thousands on the table. Here\'s how to claim what you\'re owed.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D &mdash; Loss of Use or Additional Living Expenses (ALE) &mdash; is one
        of the most underutilized coverages in a homeowner&apos;s policy. When a covered loss
        makes your home uninhabitable, the insurance company pays for your additional living
        expenses until repairs are complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is &quot;additional.&quot; ALE covers the difference between your normal
        living expenses and what you are spending because you are displaced. If you
        normally spend $500 per month on groceries and you are now spending $800 because
        you are eating at restaurants, the carrier owes you the $300 difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What ALE Covers</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hotel or temporary rental housing</li>
        <li>Restaurant meals (above your normal food budget)</li>
        <li>Laundry and dry cleaning (if you do not have access to your washer/dryer)</li>
        <li>Storage for your belongings</li>
        <li>Pet boarding if your temporary housing does not allow pets</li>
        <li>Extra mileage and gas from a longer commute</li>
        <li>Temporary kitchen setup or appliance rental</li>
        <li>Moving costs to and from temporary housing</li>
        <li>Utility connections at temporary housing</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Mistakes</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Not claiming ALE at all</strong> &mdash; many homeowners stay with family or
          squeeze into part of a damaged home without claiming any expenses
        </li>
        <li>
          <strong>Minimizing expenses</strong> &mdash; you are entitled to maintain your
          normal standard of living, not live like a monk to save the carrier money
        </li>
        <li>
          <strong>Not keeping receipts</strong> &mdash; save every receipt for meals, gas,
          laundry, and incidentals
        </li>
        <li>
          <strong>Accepting the carrier&apos;s ALE timeline</strong> &mdash; ALE should last
          until repairs are actually complete, not until the carrier decides they should be
        </li>
      </ul>

      <CalloutBox variant="tip" title="You Deserve Normal Living">
        <p>
          The purpose of ALE is to make you whole &mdash; to put you back in the position
          you were in before the loss. If you were living in a four-bedroom house, you are
          entitled to comparable temporary housing. Do not let the carrier put you in a
          cramped studio apartment and call it adequate.
        </p>
      </CalloutBox>

    </>
  )
}
