import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'
import { ReferralButton } from '@/components/content/ReferralButton'

export const meta = {
  title: 'Auto Physical Damage Claims: Vehicle Damage Insurance Guide',
  description:
    'Auto physical damage claims cover vehicle damage from collisions, theft, vandalism, and weather. Learn about total loss, diminished value, and how a Public Adjuster can help.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Auto Physical Damage &mdash; Not Bodily Injury
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Auto physical damage claims cover damage to your vehicle itself &mdash; not injuries to
        people. This is an important distinction. If you have been injured in an auto accident, you
        need a personal injury attorney (see our{' '}
        <Link href="/other-claims/personal-injury" className="text-blue-700 underline hover:text-blue-900">
          personal injury page
        </Link>
        ). A licensed Public Adjuster handles the property damage side: the cost to repair or
        replace your vehicle and recover any additional losses related to the physical damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Auto Physical Damage Coverage
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Collision coverage:</strong> Pays to repair or replace your vehicle when it
          collides with another vehicle or object, regardless of fault. Subject to a deductible.
        </li>
        <li>
          <strong>Comprehensive coverage:</strong> Covers damage from non-collision events including
          theft, vandalism, hail, falling objects, animal strikes, fire, and flood. Also subject to
          a deductible.
        </li>
        <li>
          <strong>Uninsured/underinsured motorist property damage (UMPD):</strong> Covers damage to
          your vehicle when the at-fault driver has no insurance or insufficient coverage. Availability
          and rules vary by state.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Total Loss vs. Repairable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your vehicle is damaged, the insurer will determine whether it is a <strong>total
        loss</strong> or <strong>repairable</strong>. A vehicle is typically declared a total loss
        when the cost of repairs exceeds a certain percentage of the vehicle&apos;s actual cash value
        (ACV) &mdash; usually 70% to 80%, depending on the state and insurer. If your vehicle is
        totaled, the insurer pays you the ACV of the vehicle minus your deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Total loss valuations are one of the most common areas of dispute in auto claims. Insurers
        frequently undervalue vehicles by using comparable vehicles in poor condition, ignoring
        low mileage or upgrades, or failing to account for regional market conditions. You have the
        right to challenge the insurer&apos;s valuation with your own evidence of comparable sales.
      </p>

      <CalloutBox variant="warning" title="Diminished Value Claims">
        <p>
          Even after a vehicle is properly repaired, it may be worth less than it was before the
          accident simply because it now has an accident history. This loss in value is called{' '}
          <strong>diminished value</strong>. In many states, you can file a diminished value claim
          against the at-fault driver&apos;s insurance. This is frequently overlooked &mdash; insurers
          will not volunteer to pay diminished value. You must know to ask for it and support it with
          evidence, such as a diminished value appraisal.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Auto Damage Claim Disputes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Repair vs. replace:</strong> Disagreements about whether certain parts should be
          repaired or replaced, and whether aftermarket or OEM (original equipment manufacturer)
          parts should be used.
        </li>
        <li>
          <strong>Total loss valuation:</strong> The insurer&apos;s ACV determination may be lower
          than the true market value of your vehicle.
        </li>
        <li>
          <strong>Supplemental damage:</strong> Hidden damage discovered after the initial inspection
          that increases repair costs beyond the original estimate.
        </li>
        <li>
          <strong>Rental and loss of use:</strong> Disputes over how long the insurer will cover a
          rental vehicle while yours is being repaired or while a total loss is being settled.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Public Adjuster Helps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Public Adjuster can represent you in auto physical damage claims by reviewing
        the insurer&apos;s damage estimate and valuation, documenting damage including supplemental
        and hidden damage, challenging low total-loss valuations with comparable market data,
        pursuing diminished value claims where available, and negotiating with the insurance
        company on your behalf. Whether your vehicle was damaged in a collision, by hail, or through
        vandalism, having professional representation levels the playing field with the insurer.
      </p>

      <LeadCaptureForm
        claimType="auto-damage"
        heading="Get Help With Your Auto Damage Claim"
        description="Tell us about your vehicle damage and we'll review your claim. Free consultation, no obligation."
      />

      <div className="mt-8 bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need a Different Kind of Help?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Auto claims often involve more than vehicle damage. If you also need bodily-injury
          representation, workers&rsquo; comp help, or other specialized assistance, we can
          connect you with a trusted referral partner at no cost.
        </p>
        <ReferralButton
          options={[
            {
              label: 'Personal Injury Attorney',
              href: '/other-claims/personal-injury',
              description: 'If you were injured in the accident — bodily injury, medical bills, lost wages.',
            },
            {
              label: "Workers' Comp Attorney",
              href: '/other-claims/workers-comp',
              description: 'If the accident happened on the job.',
            },
            {
              label: 'Medical Billing Dispute',
              href: '/other-claims/medical',
              description: 'Insurance denied a medically necessary procedure, test, or specialist.',
            },
            {
              label: 'Property / Homeowner Claim',
              href: '/contact',
              description: 'Fire, water, smoke, vandalism, or other property damage to your home or business.',
            },
          ]}
        />
      </div>
    </>
  )
}
