import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'
import { ReferralButton } from '@/components/content/ReferralButton'

export const meta = {
  title: 'Medical Insurance Claims: Disputes, Denials, and Your Options',
  description:
    'Health insurance disputes, denied procedures, and medical billing issues are different from property and casualty claims. Learn about your options and how we can help connect you with the right professional.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Medical Claims Are Different From Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Medical insurance claims &mdash; disputes with your health insurer over denied procedures,
        coverage determinations, or billing issues &mdash; are fundamentally different from the
        property and casualty claims that a Public Adjuster handles. Health insurance is regulated
        under a separate set of laws and involves different dispute resolution processes. While a
        Public Adjuster specializes in property damage claims (homeowners, commercial, auto physical
        damage), medical claim disputes require professionals with expertise in health insurance
        regulations and healthcare law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Medical Insurance Disputes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Denied claims and procedures:</strong> Your insurer refuses to pay for a procedure,
          treatment, or medication that your doctor has recommended, often citing medical necessity or
          policy exclusions.
        </li>
        <li>
          <strong>Prior authorization disputes:</strong> The insurer denies or delays authorization
          for a procedure, test, or specialist referral that your doctor has ordered.
        </li>
        <li>
          <strong>Out-of-network billing:</strong> You receive a bill for out-of-network charges
          that you did not expect, often from an anesthesiologist, radiologist, or other specialist
          who was not in your plan&apos;s network even though the facility was.
        </li>
        <li>
          <strong>Balance billing (surprise billing):</strong> A provider bills you for the
          difference between their charges and what your insurer paid. California and federal law
          provide protections against many forms of surprise billing.
        </li>
        <li>
          <strong>Coordination of benefits:</strong> Disputes when you have coverage under two or
          more health plans about which plan pays first and how much each plan covers.
        </li>
        <li>
          <strong>Claim processing errors:</strong> Incorrect coding, missing information, or
          administrative errors that result in a claim being denied or underpaid.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Rights in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California provides strong protections for health insurance consumers. If your claim is
        denied, you have the right to an internal appeal through your insurance company and, if that
        is unsuccessful, an independent medical review (IMR) through the California Department of
        Managed Health Care (DMHC) or the California Department of Insurance (CDI), depending on
        your plan type. The IMR process is free and the decision is binding on the insurer.
      </p>

      <CalloutBox variant="tip" title="Always File an Appeal">
        <p>
          If your health insurer denies a claim or procedure, do not accept the denial without
          challenging it. Data from the American Medical Association and state insurance regulators
          shows that a substantial percentage of denied health insurance claims are overturned when
          appealed. Despite this, fewer than 1% of denied claims are ever formally appealed, which
          means many valid claims go unpaid simply because the policyholder did not challenge the
          denial. Request the specific reason for the denial in writing, ask your doctor to provide
          a letter of medical necessity, and file a formal appeal within the timeframe specified in
          your denial letter. Under the Affordable Care Act, most non-grandfathered plans must give
          you at least 180 days to file an internal appeal, but confirm the deadline in your denial
          letter before relying on any specific number.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Can Help With Medical Claims?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depending on the nature of your dispute, several types of professionals may be able to help:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Patient advocates:</strong> Professionals who specialize in navigating the health
          insurance system, helping with appeals, resolving billing disputes, and communicating with
          insurers on your behalf.
        </li>
        <li>
          <strong>Medical billing advocates:</strong> Specialists who review medical bills for errors,
          negotiate with providers and insurers, and help reduce your out-of-pocket costs.
        </li>
        <li>
          <strong>Health insurance attorneys:</strong> Lawyers who specialize in health insurance law
          and can represent you in disputes involving significant amounts, bad faith denials, or ERISA
          (Employee Retirement Income Security Act) plan disputes.
        </li>
        <li>
          <strong>State regulators:</strong> The California DMHC and CDI both accept complaints and
          can intervene in disputes between consumers and their health insurers.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How We Can Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While medical insurance claims are outside the scope of what a Public Adjuster handles,
        Leland Coontz III can help point you in the right direction. If you are dealing with a health
        insurance dispute, reach out and we will do our best to connect you with a patient advocate,
        medical billing specialist, or attorney who can assist with your specific situation.
        We receive no compensation for these referrals.
      </p>

      <LeadCaptureForm
        claimType="medical"
        heading="Get Help With Your Medical Claim"
        description="Tell us about your medical insurance dispute and we'll help connect you with the right professional. No cost or obligation."
      />

      <div className="mt-8 bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need a Different Kind of Help?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Medical disputes vary widely. If you&apos;d prefer to go directly to a patient
          advocate, a medical billing specialist, or a health-insurance attorney, we can
          connect you with a trusted referral partner at no cost.
        </p>
        <ReferralButton
          options={[
            {
              label: 'Patient Advocate',
              href: '/contact',
              description: "Navigate the insurer's appeal process, resolve denials, and handle communications.",
            },
            {
              label: 'Medical Billing Specialist',
              href: '/contact',
              description: 'Review bills for errors, negotiate balances, reduce out-of-pocket costs.',
            },
            {
              label: 'Health Insurance Attorney',
              href: '/contact',
              description: 'Bad-faith denials, ERISA plan disputes, or high-dollar coverage fights.',
            },
            {
              label: 'California IMR / DMHC / CDI',
              href: 'https://www.dmhc.ca.gov/FileaComplaint/IndependentMedicalReviewComplaintForms.aspx',
              description: 'Free independent medical review — binding on the insurer. Start here if internal appeal failed.',
            },
          ]}
        />
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
