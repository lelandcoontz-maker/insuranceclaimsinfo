import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Workers\' Compensation Claims: What Injured Workers Need to Know',
  description:
    'Workers\' compensation claims require specialized legal representation. Learn about workplace injuries, employer obligations, and how we can connect you with a workers\' comp attorney.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Workers&rsquo; Compensation Claims Require an Attorney">
        <p>
          Workers&rsquo; compensation claims are handled through a specialized legal system that is
          separate from standard insurance claims. A Public Adjuster does not handle workers&rsquo;
          comp cases &mdash; you need a workers&rsquo; compensation attorney who understands this
          specific area of law. We can connect you with experienced workers&rsquo; comp attorneys in
          California at no cost to you.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Workers&rsquo; Compensation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Workers&rsquo; compensation is a state-mandated insurance program that provides benefits to
        employees who are injured or become ill as a result of their job. In California, nearly all
        employers are required to carry workers&rsquo; comp insurance. The system is designed to
        provide medical treatment, disability payments, and rehabilitation services to injured workers
        without requiring them to prove their employer was at fault.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Covered Injuries and Illnesses
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Acute workplace injuries:</strong> Injuries from a specific incident at work, such
          as falls, equipment accidents, lifting injuries, burns, or being struck by objects.
        </li>
        <li>
          <strong>Repetitive stress injuries:</strong> Conditions that develop over time from
          repetitive work activities, including carpal tunnel syndrome, tendonitis, and back problems
          from repeated lifting.
        </li>
        <li>
          <strong>Occupational diseases:</strong> Illnesses caused by exposure to hazardous
          substances or conditions in the workplace, such as asbestosis, hearing loss from noise
          exposure, respiratory conditions, and chemical exposures.
        </li>
        <li>
          <strong>Psychological injuries:</strong> In some cases, work-related stress, trauma, or
          harassment can result in compensable psychological injuries, though these claims face
          higher legal hurdles in California.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Workers&rsquo; Comp Benefits in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California workers&rsquo; compensation provides several types of benefits:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Medical treatment:</strong> All reasonable and necessary medical care related to
          the work injury, with no out-of-pocket cost to the employee.
        </li>
        <li>
          <strong>Temporary disability (TD):</strong> Payments to partially replace lost wages while
          you are recovering and unable to work, typically about two-thirds of your average weekly
          wage, subject to state minimums and maximums.
        </li>
        <li>
          <strong>Permanent disability (PD):</strong> Compensation for lasting impairments that
          affect your ability to work, calculated based on the nature and severity of the disability.
        </li>
        <li>
          <strong>Supplemental job displacement benefit:</strong> A voucher for retraining or skill
          enhancement if you cannot return to your previous job due to permanent restrictions.
        </li>
        <li>
          <strong>Death benefits:</strong> Payments to the surviving dependents of a worker who dies
          from a work-related injury or illness.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Employer Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California employers are required to provide workers&rsquo; compensation insurance, report
        workplace injuries to their insurer, provide the injured employee with a claim form (DWC-1)
        within one working day of being notified of the injury, and authorize up to $10,000 in
        medical treatment while the claim is being investigated. Employers who fail to meet these
        obligations can face penalties from the state.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why You Need a Workers&rsquo; Comp Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While some straightforward workers&rsquo; comp claims are resolved without legal
        representation, many claims are disputed by employers or their insurance companies. Common
        disputes include denial of the claim, disputes over the cause of the injury, disagreements
        about the appropriate medical treatment, low permanent disability ratings, and premature
        termination of temporary disability payments. A workers&rsquo; comp attorney understands the
        complex regulations, can represent you at hearings before the Workers&rsquo; Compensation
        Appeals Board (WCAB), and works on a contingency basis &mdash; meaning no fees unless you
        receive benefits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        We Can Connect You With a Workers&rsquo; Comp Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Leland Coontz III maintains relationships with experienced workers&rsquo; compensation
        attorneys in California. If you have been injured on the job and need legal help, we can
        provide a free referral at no cost or obligation to you.
      </p>

      <LeadCaptureForm
        claimType="workers-comp"
        heading="Get Connected With a Workers' Comp Attorney"
        description="Tell us about your workplace injury and we'll connect you with an experienced workers' comp attorney. Free referral, no obligation."
      />
    </>
  )
}
