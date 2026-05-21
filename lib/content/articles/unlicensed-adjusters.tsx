import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Unlicensed Adjusters: When Your Claim Is Handled by Someone Without a License',
  description:
    'The problem of unlicensed adjusters handling California insurance claims — what the law requires, why insurers use unlicensed personnel, how it affects your claim, and what you can do about it.',
  summary:
    'California requires adjusters to be licensed, yet insurers sometimes use unlicensed personnel to handle claims. An unlicensed adjuster handling your claim is a violation you can raise, and it can undermine the carrier\'s positions.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Is Adjusting Your Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file an insurance claim in California, you expect the person evaluating your damage,
        determining your coverage, and calculating your payment to be a qualified, licensed
        professional. In many cases, they are not. The use of unlicensed adjusters &mdash;
        particularly out-of-state independent contractors brought in during catastrophe events &mdash;
        is a widespread problem that the California Department of Insurance (CDI) has historically
        failed to address despite having a legal duty to do so.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Adjuster Licensing Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California requires insurance adjusters to hold a valid license. The licensing framework
        distinguishes between several types:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Staff adjusters</strong> &mdash; employed directly by the insurance company. Their
          employer&apos;s license covers their adjusting activity.
        </li>
        <li>
          <strong>Independent adjusters</strong> &mdash; hired by insurers on a contract basis to
          handle claims. These individuals must hold their own California adjuster license or work
          under a licensed firm.
        </li>
        <li>
          <strong>Public Adjusters</strong> &mdash; licensed by CDI to represent policyholders (not
          insurers) in the claims process. Public Adjusters are the only type of adjuster who works
          exclusively for the policyholder.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;14021 et seq. governs adjuster licensing. An individual who
        adjusts claims in California without a proper license is operating illegally. The insurance
        company that hires them is also potentially in violation for using unlicensed personnel to
        handle claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Catastrophe Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most serious unlicensed adjuster problems occur after major catastrophes &mdash;
        wildfires, earthquakes, hurricanes &mdash; when insurers need hundreds or thousands of
        adjusters deployed quickly. California does not have enough locally licensed independent
        adjusters to handle a major event, so insurers bring in contractors from other states.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many of these out-of-state adjusters:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Hold licenses in their home state but not in California
        </li>
        <li>
          Have no familiarity with California insurance law, the Fair Claims Settlement Practices
          Regulations, or California-specific coverage issues
        </li>
        <li>
          Are paid on a per-claim or time-based basis that incentivizes speed over thoroughness
        </li>
        <li>
          Have minimal supervision from the carrier&apos;s licensed staff
        </li>
        <li>
          May have limited experience with the specific type of loss (a hail adjuster from Texas
          handling a California wildfire claim)
        </li>
      </ul>

      <CalloutBox variant="warning" title="Emergency Licensing Waivers">
        <p>
          After declared disasters, the Insurance Commissioner sometimes issues emergency orders
          waiving or relaxing licensing requirements to allow out-of-state adjusters to operate
          temporarily. These waivers are controversial because they prioritize speed of claims
          processing over quality &mdash; and the &ldquo;temporary&rdquo; unlicensed adjusters
          often remain for months or years after the initial emergency.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An unlicensed adjuster handling your claim creates several concrete problems:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        They May Not Know California Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s insurance regulations are among the most consumer-protective in the
        country. The{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        impose specific duties on insurers regarding timelines, documentation, communication, and
        payment. An adjuster from Florida or Texas may not know that California requires the insurer
        to pay undisputed amounts within 30 days, or that the insurer cannot condition payment on a
        release of other claims, or that the policyholder has the right to choose their own
        contractor.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        They May Underpay Systematically
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Out-of-state adjusters typically write estimates using Xactimate at their home-state pricing
        or at rates the insurer has pre-set &mdash; rates that may not reflect California&apos;s
        significantly higher labor and material costs. A Texas-based adjuster writing a scope for a
        Los Angeles wildfire claim may apply pricing that is 30-40% below what the work actually
        costs in that market.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        They Have No Accountability
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed California adjuster can have their license disciplined or revoked by CDI for
        misconduct. An unlicensed out-of-state contractor has no California license to lose. Once
        they finish the catastrophe deployment and return to their home state, there is no practical
        mechanism for holding them accountable for errors or misconduct on your claim.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        They May Miss California-Specific Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has unique coverage requirements and policyholder protections that out-of-state
        adjusters may not be aware of &mdash; including{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>, extended replacement cost provisions, the prejudice requirement for policy condition
        violations, and specific debris removal and landscaping provisions in the standard fire
        policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        CDI&apos;s Duty to Act
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has a statutory duty to enforce adjuster licensing
        requirements. This is not discretionary &mdash; it is a mandatory obligation. Despite this,
        CDI has historically failed to enforce licensing requirements against insurers who deploy
        unlicensed adjusters during catastrophes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Eisenberg v. Jones</em>, a lawsuit was filed against CDI arguing that the Department
        had a mandatory duty to act against the widespread use of unlicensed adjusters and had failed
        to do so for years. The complaint alleged that CDI&apos;s failure to enforce licensing
        requirements was not a matter of prosecutorial discretion but a dereliction of a mandatory
        statutory duty. The use of out-of-state independent contractors was described as &ldquo;rife
        with problems for insureds.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This lawsuit highlighted a systemic problem: the regulatory agency charged with protecting
        policyholders was allowing insurers to use unqualified, unaccountable personnel to handle
        claims worth hundreds of thousands or millions of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Identify an Unlicensed Adjuster
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ask for their California license number.</strong> Every licensed adjuster should be
          able to provide one. If they cannot, or if they say their &ldquo;company&rdquo; is licensed
          but they personally are not, that is a red flag.
        </li>
        <li>
          <strong>Check the CDI license lookup tool.</strong> You can verify any adjuster&apos;s
          license status at the CDI website.
        </li>
        <li>
          <strong>Note their contact information.</strong> An adjuster with an out-of-state phone
          number, no local office, and a temporary address is likely deployed for a catastrophe
          and may not hold a California license.
        </li>
        <li>
          <strong>Ask if they are a staff adjuster or independent contractor.</strong> Staff adjusters
          operate under the carrier&apos;s license. Independent adjusters need their own.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Can Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you discover that an unlicensed adjuster is handling your claim:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Request a licensed adjuster.</strong> Put the request in writing to the insurance
          company. State that you want your claim handled by a properly licensed California adjuster
          who is familiar with California insurance law and the Fair Claims regulations.
        </li>
        <li>
          <strong>File a CDI complaint.</strong> Report the use of unlicensed adjusters to the
          California Department of Insurance. While CDI&apos;s enforcement has been inconsistent,
          complaints create a record and can trigger investigation. See our guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            filing a CDI complaint
          </Link>.
        </li>
        <li>
          <strong>Get independent representation.</strong> A licensed{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          working on your behalf can ensure that California law is properly applied to your claim
          regardless of who the insurer assigns on their side.
        </li>
        <li>
          <strong>Document everything the unlicensed adjuster does.</strong> If the claim is later
          disputed, the fact that it was handled by an unlicensed adjuster who missed California-
          specific coverage or applied incorrect pricing can support a bad faith argument.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Licensing Issue Supports Bad Faith">
        <p>
          If your claim was underpaid or mishandled by an unlicensed adjuster who was unfamiliar
          with California law, that fact strengthens a bad faith argument. The insurer has a duty
          to handle claims in compliance with California regulations &mdash; and deploying
          unqualified personnel who do not know those regulations is itself a claims-handling
          failure. It demonstrates that the insurer prioritized cost and speed over proper
          investigation and fair treatment of your claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broader Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The unlicensed adjuster problem is part of a larger pattern in which insurers treat claims
        handling as a cost center to be minimized rather than a contractual obligation to be fulfilled.
        Using unlicensed, out-of-state contractors saves the insurer money (these adjusters typically
        work for lower day-rates than California-licensed professionals), accelerates file closure
        (because the adjusters are incentivized to close files quickly, not thoroughly), and reduces
        accountability (because there is no license for CDI to discipline).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders, the consequences are underpayment, missed coverage, improper denials, and
        the feeling that the person handling their claim does not know what they are doing &mdash;
        because in many cases, they do not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is educational and does not constitute legal advice. Adjuster licensing
        requirements vary by state and by the type of adjusting being performed. If you believe your
        claim was mishandled by an unlicensed adjuster, consult with a licensed attorney or Public
        Adjuster in California.
      </p>
    </>
  )
}
