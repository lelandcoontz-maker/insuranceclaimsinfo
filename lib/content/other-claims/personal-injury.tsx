import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Personal Injury Claims: What You Need to Know',
  description:
    'Personal injury claims require legal representation from an attorney. Learn about auto accidents, slip and fall, medical malpractice, and how we can connect you with a trusted attorney.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Personal Injury Claims Require Legal Representation">
        <p>
          Personal injury claims are legal matters that require an attorney &mdash; not a Public
          Adjuster. A Public Adjuster handles first-party property damage claims (damage to your own
          property). Personal injury claims involve bodily harm caused by another party&apos;s
          negligence and are pursued through the legal system. While we do not handle personal injury
          claims directly, we can connect you with trusted personal injury attorneys in California.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Personal Injury Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A personal injury claim is a legal case filed when someone is physically or psychologically
        injured due to another person&apos;s or entity&apos;s negligence, recklessness, or
        intentional wrongdoing. The injured party (plaintiff) seeks compensation from the responsible
        party (defendant) or their insurance company for medical expenses, lost wages, pain and
        suffering, and other damages.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Types of Personal Injury Cases
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Auto accidents:</strong> The most common type of personal injury claim. Covers
          injuries from car, truck, motorcycle, pedestrian, and bicycle accidents caused by another
          driver&apos;s negligence.
        </li>
        <li>
          <strong>Slip and fall (premises liability):</strong> Injuries caused by hazardous
          conditions on someone else&apos;s property, such as wet floors, uneven surfaces, poor
          lighting, or inadequate maintenance.
        </li>
        <li>
          <strong>Medical malpractice:</strong> Injuries resulting from a healthcare provider&apos;s
          failure to meet the accepted standard of care, including surgical errors, misdiagnosis,
          medication errors, and birth injuries.
        </li>
        <li>
          <strong>Product liability:</strong> Injuries caused by defective or dangerous products,
          including manufacturing defects, design defects, and failure to provide adequate warnings
          or instructions.
        </li>
        <li>
          <strong>Dog bites and animal attacks:</strong> In California, dog owners are strictly liable
          for bite injuries, meaning the victim does not need to prove the owner was negligent.
        </li>
        <li>
          <strong>Wrongful death:</strong> When negligence or wrongdoing results in a person&apos;s
          death, surviving family members may file a wrongful death claim for compensation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why You Need an Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal injury cases involve complex legal principles including negligence, liability,
        comparative fault, and damages calculations. Insurance companies that cover the at-fault party
        employ experienced adjusters and defense attorneys whose job is to minimize the payout. Without
        your own legal representation, you are at a significant disadvantage in negotiations and in
        court.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most personal injury attorneys work on a <strong>contingency fee</strong> basis, meaning they
        do not charge any upfront fees. They only get paid if they win your case or reach a
        settlement, typically receiving a percentage (usually 33% to 40%) of the recovery. This makes
        legal representation accessible regardless of your financial situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California follows a <strong>pure comparative negligence</strong> rule, meaning you can
        recover damages even if you were partially at fault for your injury &mdash; your recovery is
        simply reduced by your percentage of fault. California also has a two-year statute of
        limitations for most personal injury claims, meaning you must file your lawsuit within two
        years of the date of injury or you may lose your right to sue entirely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        We Can Connect You With a Trusted Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While personal injury is outside the scope of what a Public Adjuster handles, Leland Coontz
        III maintains a network of trusted personal injury attorneys in California. If you have been
        injured and need legal representation, we can provide a free referral to an experienced
        attorney who can evaluate your case. There is no cost or obligation for the referral.
      </p>

      <LeadCaptureForm
        claimType="personal-injury"
        heading="Get Connected With a Personal Injury Attorney"
        description="Tell us about your situation and we'll connect you with a trusted personal injury attorney. Free referral, no obligation."
      />
    </>
  )
}
