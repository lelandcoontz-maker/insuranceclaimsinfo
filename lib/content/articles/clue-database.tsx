import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The CLUE Database: How Your Claims History Follows You',
  description:
    'What the CLUE database is, how insurance companies use it against you, and what to do if it contains errors about your claims history.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every time an insurance claim is filed, it gets reported to a database called CLUE &mdash;
        the Comprehensive Loss Underwriting Exchange. Operated by LexisNexis, CLUE is the
        insurance industry&apos;s equivalent of a credit report. It tracks your claims history
        and the claims history of your property, and it affects your ability to obtain insurance,
        what you pay for it, and how insurers evaluate your claims going forward.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What CLUE Is and How It Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CLUE stands for Comprehensive Loss Underwriting Exchange. It is a database maintained by
        LexisNexis Risk Solutions that collects and stores information about property insurance
        claims reported by participating insurance companies. Nearly every major insurance carrier
        in the United States contributes data to CLUE, making it the most widely used claims
        history database in the industry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CLUE maintains two separate databases: one for personal property (homeowners, renters, and
        similar policies) and one for auto insurance. This article focuses on the property
        database, which is the one that affects homeowners insurance claims and underwriting.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim is filed, the insurance carrier reports information about that claim to CLUE.
        The data is then stored and made available to other participating insurers when they
        underwrite new policies, renew existing policies, or evaluate claims. This means that a
        claim filed with one carrier is visible to every other carrier that participates in CLUE.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Information CLUE Reports Contain
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CLUE report includes up to seven years of claims history. The report contains
        information associated both with the individual policyholder and with the property itself.
        Specific data points typically include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Policyholder information:</strong> Name, date of birth, and Social Security
          number of the policyholder
        </li>
        <li>
          <strong>Property address:</strong> The physical location associated with the claim
        </li>
        <li>
          <strong>Date of loss:</strong> When the claimed event occurred
        </li>
        <li>
          <strong>Type of loss:</strong> The cause of the claim (fire, water, wind, theft, liability,
          etc.)
        </li>
        <li>
          <strong>Claim status:</strong> Whether the claim is open, closed, or denied
        </li>
        <li>
          <strong>Amount paid:</strong> The dollar amount the insurer paid on the claim
        </li>
        <li>
          <strong>Insurance company:</strong> The carrier that handled the claim
        </li>
        <li>
          <strong>Policy information:</strong> Policy number and coverage details
        </li>
        <li>
          <strong>Inquiries:</strong> In some cases, even inquiries that did not result in a filed
          claim may be recorded
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, the CLUE report follows both the person and the property. This means that
        claims filed by a previous owner of your home can appear on a CLUE report pulled on the
        property &mdash; and those prior claims can affect your premiums and insurability even
        though you had nothing to do with them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How CLUE Affects Underwriting and Renewals
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies use CLUE primarily during underwriting &mdash; the process of deciding
        whether to offer a policy and at what price. When you apply for homeowners insurance, the
        prospective carrier pulls a CLUE report on both you and the property. A history of
        claims &mdash; even legitimate, fully covered claims &mdash; can result in:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Higher premiums</li>
        <li>Reduced coverage options</li>
        <li>Higher deductibles</li>
        <li>Policy non-renewal at the end of the term</li>
        <li>Outright denial of coverage</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The impact of CLUE on renewals is equally significant. After filing a claim, some
        policyholders find that their carrier non-renews their policy at the end of the term, and
        other carriers are reluctant to write a new policy because of the claims history visible
        in CLUE. This can force policyholders into the surplus lines market or state-sponsored
        programs like the{' '}
        <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
          California FAIR Plan
        </Link>, where coverage is more limited and premiums are higher.
      </p>

      <CalloutBox variant="warning" title="Inquiries Can Be Recorded Too">
        <p>
          Some insurers report inquiries to CLUE even when no formal claim is filed. If you call
          your insurance company to ask about potential coverage for a problem &mdash; even if you
          decide not to file a claim &mdash; that contact may appear on your CLUE report as an
          inquiry. This is one reason to be cautious about casual calls to your insurer about
          potential claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How CLUE Data Can Be Used in a Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond underwriting, CLUE data can also be used during the claims process itself. When
        you file a new claim, the adjuster may review your CLUE history to look for patterns or
        prior claims that could affect the current claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Prior similar claims:</strong> If you filed a water damage claim two years ago
          and are now filing another, the adjuster may scrutinize the new claim more closely or
          argue that the damage is related to the prior loss rather than a new event.
        </li>
        <li>
          <strong>Pre-existing damage arguments:</strong> CLUE records of prior claims can be used
          to support an argument that damage to your property predates the current loss. For more
          on this tactic, see our guide to{' '}
          <Link href="/resources/pre-existing-vs-storm-damage" className="text-blue-700 underline hover:text-blue-900">
            pre-existing damage vs. storm damage
          </Link>.
        </li>
        <li>
          <strong>SIU referrals:</strong> A pattern of frequent claims may trigger a referral to
          the insurer&apos;s Special Investigations Unit, adding delays and scrutiny to an
          otherwise legitimate claim.
        </li>
        <li>
          <strong>Lowball leverage:</strong> An insurer may use a policyholder&apos;s CLUE history
          as informal leverage, knowing that a policyholder who has been non-renewed before may
          be more willing to accept a lower settlement to avoid another claim on their record.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Request Your Own CLUE Report
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the federal Fair Credit Reporting Act (FCRA), you have the right to request a free
        copy of your CLUE report once every 12 months. LexisNexis is required to provide it at
        no charge. To request your report:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Visit the LexisNexis consumer disclosure page at{' '}
          <strong>consumer.risk.lexisnexis.com</strong>
        </li>
        <li>
          You can request a report online, by phone (1-866-312-8076), or by mail
        </li>
        <li>
          You will need to provide personal identification information including your name,
          address, date of birth, and Social Security number
        </li>
        <li>
          The report typically arrives within 15 to 30 days if requested by mail, or can be
          accessed more quickly online
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Review the report carefully. Check every claim listed for accuracy &mdash; dates, loss
        types, amounts paid, and whether the claims are actually yours. Errors are more common
        than most people expect.
      </p>

      <CalloutBox variant="tip" title="Request Before You Shop for Insurance">
        <p>
          If you are considering switching insurance carriers, request your CLUE report first.
          Knowing what the prospective insurer will see allows you to address any errors before
          they affect your quote or application. It also helps you understand how your claims
          history may be perceived.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Have Misused CLUE
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There have been documented cases of carriers reporting inaccurate information to CLUE.
        In one lawsuit, Farmers Insurance was accused of reporting litigation expenses, settlement
        costs, and other carrier expenses as payments made to the policyholder &mdash; making it
        appear that the homeowner received millions in claim payments when they actually received
        a fraction of that amount. These inflated CLUE reports made it extremely difficult for
        those policyholders to obtain new insurance, because every prospective carrier saw what
        appeared to be an extraordinarily expensive claims history.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other common inaccuracies include claims attributed to the wrong person or property,
        incorrect loss types (listing a liability claim as a property claim, for example),
        incorrect amounts paid, and claims that remain listed as open long after they were
        closed. Each of these errors can negatively affect premiums, insurability, and how
        future claims are handled.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Dispute Errors on a CLUE Report
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you find inaccurate information on your CLUE report, you have the right to dispute it
        under the Fair Credit Reporting Act. The FCRA dispute process for CLUE reports works
        similarly to disputing errors on a credit report:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>File a dispute with LexisNexis.</strong> Contact LexisNexis in writing,
          identifying the specific information you believe is inaccurate and explaining why. Include
          any supporting documentation.
        </li>
        <li>
          <strong>LexisNexis investigates.</strong> Under the FCRA, LexisNexis must investigate
          your dispute within 30 days. They will contact the insurance company that reported the
          information and request verification.
        </li>
        <li>
          <strong>The insurer must respond.</strong> The reporting insurer must review the disputed
          information and either verify it, correct it, or agree to delete it.
        </li>
        <li>
          <strong>You receive the results.</strong> LexisNexis must notify you of the investigation
          results and provide an updated report if any changes are made.
        </li>
        <li>
          <strong>Dispute directly with the insurer as well.</strong> In addition to disputing with
          LexisNexis, contact the insurance company that reported the inaccurate information. Under
          the FCRA, the furnisher of information (the insurer) has independent obligations to
          investigate and correct errors.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the dispute process does not resolve the error, the FCRA gives you the right to add a
        brief statement to your file explaining the dispute. More importantly, if an insurer
        negligently or willfully reports inaccurate information to CLUE, the FCRA provides for
        statutory damages and, in cases of willful violation, potential punitive damages. An
        attorney experienced in FCRA litigation can evaluate whether you have a viable claim.
      </p>

      <CalloutBox variant="important" title="Document the Impact">
        <p>
          If inaccurate CLUE data has caused you to be denied coverage, non-renewed, or charged
          higher premiums, document that impact. Save denial letters, non-renewal notices, and
          premium quotes from other carriers. This documentation establishes the harm caused by
          the inaccurate reporting and strengthens any dispute or legal claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Should You Avoid Filing Claims to Protect Your CLUE Record?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common questions policyholders face, and there is no universal
        answer. Every claim leaves a record that follows you for seven years. A small claim
        &mdash; $1,500 for a broken window, for example &mdash; might cost far more in increased
        premiums and reduced insurability than the payout is worth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, insurance exists to cover losses, and policyholders should not be afraid to
        file legitimate claims for significant damage. The decision should be made with full
        awareness of the consequences. Consider the size of the loss relative to your deductible,
        your current claims history, and whether the loss is likely to affect your ability to
        maintain coverage. A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help evaluate whether filing a claim makes strategic sense in your specific situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        CLUE and Home Sales
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CLUE data is also relevant when buying or selling a home. A prospective buyer&apos;s
        insurer will pull a CLUE report on the property, revealing claims filed by prior owners.
        A property with a history of water damage claims, for example, may raise red flags that
        affect the buyer&apos;s ability to obtain affordable insurance &mdash; or insurance at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are purchasing a home, consider requesting a CLUE report on the property before
        closing. This can reveal past claims that may not have been disclosed by the seller and
        can help you anticipate any insurance challenges. If the property has a problematic claims
        history, you will want to shop for insurance before finalizing the purchase to ensure you
        can obtain adequate coverage at a reasonable price.
      </p>

      <CalloutBox variant="tip" title="Know Your CLUE History">
        <p>
          Request your free CLUE report annually and review it for accuracy. If you plan to file
          a claim, switch carriers, or sell your home, knowing what is in your CLUE report allows
          you to address errors proactively and make informed decisions. Information is power, and
          your CLUE report is one of the most consequential documents in your insurance profile
          that most policyholders never think to check.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
