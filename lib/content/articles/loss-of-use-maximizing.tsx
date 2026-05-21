import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Maximizing Your Loss of Use (ALE) Claim',
  description:
    'Coverage D pays your additional living expenses when you can\'t live in your home. Most policyholders leave thousands on the table. Here\'s how to claim what you\'re owed.',
  summary:
    'Coverage D (loss of use / ALE) pays your additional living expenses when you cannot live at home, and most people under-claim it. Track every increased cost, rent, meals, storage, mileage, to claim the full amount you are owed.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D — Loss of Use or Additional Living Expenses (ALE) — is one of the most
        underutilized coverages in a homeowner&apos;s policy. When a covered loss makes your
        home uninhabitable, the insurance company pays for your additional living expenses
        until repairs are complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is &ldquo;additional.&rdquo; ALE covers the difference between your
        normal living expenses and what you are spending because you are displaced. If you
        normally spend $500 per month on groceries and you are now spending $800 because you
        are eating at restaurants, the carrier owes you the $300 difference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders do not claim everything they are entitled to. Some do not claim
        ALE at all. This article explains what qualifies, how to document it, and how to
        push back when the insurer tries to cut you short.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What ALE Covers</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE covers any reasonable expense you incur because you cannot live in your home
        that exceeds your normal costs. Common examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hotel stays or temporary rental housing</li>
        <li>Restaurant meals (above your normal food budget)</li>
        <li>Laundry and dry cleaning (if your washer/dryer is inaccessible)</li>
        <li>Storage for your belongings</li>
        <li>Pet boarding if your temporary housing does not allow pets</li>
        <li>Extra mileage and gas from a longer commute</li>
        <li>Temporary kitchen appliance rental</li>
        <li>Moving costs to and from temporary housing</li>
        <li>Utility connections and deposits at temporary housing</li>
        <li>Internet and cable setup at your temporary location</li>
        <li>Extra childcare costs due to changed circumstances</li>
        <li>Parking fees if your temporary housing lacks the parking you had at home</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Long ALE Lasts</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE coverage lasts for the shortest reasonable time required to repair or replace
        your home. That is not the same as when the carrier wants you to be done. If repairs
        take 14 months because of permit delays or contractor availability, your ALE
        continues for 14 months — not the 6 months the insurer estimated.
      </p>

      <CalloutBox variant="legal" title="California Disaster Minimum — 24 Months">
        <p>
          After a declared disaster in California, Insurance Code &sect;2051.5(c) guarantees
          a minimum 24-month ALE period — even if your policy states a shorter limit. This
          applies to wildfire, earthquake (if you have earthquake coverage), and other
          declared disasters. The 24 months runs from the date of the disaster declaration,
          not from when you filed your claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Standard of Living Rule</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are entitled to maintain your normal standard of living during displacement.
        This is explicitly stated in most policies and reinforced by California regulation.
        What it means in practice:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          If you lived in a 4-bedroom house, you are entitled to comparable temporary
          housing — not a studio apartment.
        </li>
        <li>
          If your neighborhood had good schools, your temporary housing should allow your
          children to continue at the same school or equivalent.
        </li>
        <li>
          If you had a yard for your dogs, the carrier cannot force you into a no-pets
          apartment and then refuse to pay boarding costs.
        </li>
        <li>
          If you commuted 15 minutes to work and now commute 45 minutes, the extra mileage
          is an additional living expense.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Fair Rental Value (FRV)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a landlord and your rental property becomes uninhabitable, your loss is
        the fair rental value of the property — the rent you would have received during
        the repair period. This is sometimes called Coverage D on a dwelling fire policy
        or a landlord&apos;s policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        FRV is not limited to what the tenant was actually paying. If the fair market rental
        value exceeds the lease amount, you claim the fair market rate. Document comparable
        rentals in the area.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Document ALE</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Establish your baseline.</strong> Document your normal monthly expenses
          before the loss: mortgage/rent (you do not pay this while displaced, so it is
          not an &ldquo;additional&rdquo; expense — but you still pay it if you have a
          mortgage), groceries, utilities, gas, childcare. Bank statements and credit card
          records work for this.
        </li>
        <li>
          <strong>Save every receipt.</strong> Meals, gas, laundry, Uber rides, storage
          unit payments, pet boarding — everything. If you do not have a receipt, note the
          expense in a log the same day.
        </li>
        <li>
          <strong>Submit monthly.</strong> Do not wait until your claim is resolved to
          submit ALE. Send the insurer a monthly summary with receipts. This keeps the
          reimbursements flowing and creates a regular paper trail.
        </li>
        <li>
          <strong>Document why repairs are taking time.</strong> If the insurer pushes back
          on the duration, have documentation showing the real timeline: permit delays,
          contractor scheduling, material backorders, re-inspection requirements.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Insurer Tactics on ALE</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Cutting ALE before repairs are done.</strong> The insurer sends a letter
          saying ALE will end in 30 days because repairs &ldquo;should&rdquo; be complete.
          If repairs are not complete, ALE continues. Respond in writing citing the policy
          language and explain why repairs remain ongoing.
        </li>
        <li>
          <strong>Refusing to pay for comparable housing.</strong> The adjuster says your
          3-bedroom rental is &ldquo;too expensive&rdquo; and offers a 1-bedroom.
          Comparable means comparable. Document what comparable housing actually costs in
          your area.
        </li>
        <li>
          <strong>Deducting your mortgage from ALE.</strong> Some insurers try to offset ALE
          by arguing you are &ldquo;saving&rdquo; on your mortgage while displaced. This
          is wrong in most cases — you still owe your mortgage payment whether you are
          living in the home or not.
        </li>
        <li>
          <strong>Requiring you to find housing yourself.</strong> The insurer has an
          obligation to assist with temporary housing. While you can find your own, they
          cannot simply say &ldquo;go find a place&rdquo; and leave you to figure it out.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Mistakes Policyholders Make</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Not claiming ALE at all.</strong> Staying with family or cramming into part
          of a damaged home without claiming any expenses. You are still entitled to ALE
          even if you stay with relatives — the &ldquo;expense&rdquo; is the fair rental
          value of comparable housing.
        </li>
        <li>
          <strong>Minimizing expenses to &ldquo;be reasonable.&rdquo;</strong> You are
          entitled to maintain your normal standard of living. Do not live like a monk to
          save the carrier money.
        </li>
        <li>
          <strong>Not keeping receipts.</strong> After a loss, you are exhausted and
          overwhelmed. Force yourself to save every receipt from day one. Use your phone
          camera if nothing else.
        </li>
        <li>
          <strong>Accepting the carrier&apos;s timeline.</strong> ALE lasts until repairs
          are actually complete — not until the carrier decides they should be.
        </li>
      </ul>

      <CalloutBox variant="tip" title="ALE Can Be a Large Number">
        <p className="mb-2">
          On a significant loss — especially one that takes 12 to 24 months to repair —
          ALE can easily reach $30,000 to $80,000 or more. That is money you are owed
          under your policy. The insurer does not get to cut it short because they would
          prefer to close the file.
        </p>
        <p>
          If the insurer disputes your ALE claim, this is a dollar dispute that can be
          resolved through{' '}
          <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">
            appraisal
          </Link>{' '}
          — just like a dispute over the dwelling repair amount.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When to Get Help</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        If the insurer is cutting your ALE before repairs are done, refusing comparable
        housing, or demanding you &ldquo;move back in&rdquo; before the home is truly
        habitable, you have a dispute. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
          Public Adjuster
        </Link>{' '}
        can document the remaining repair timeline and fight for the full ALE period. If
        the insurer&apos;s conduct is egregious — forcing you out of temporary housing
        with no alternative — that may constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#1F3964] underline font-medium">
          bad faith
        </Link>.
      </p>
    </>
  )
}
