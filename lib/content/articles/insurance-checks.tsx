import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Insurance Checks: What to Do and What to Watch For',
  description:
    'When you receive a check from your insurance company, don\'t just cash it blindly — and don\'t leave it sitting on the counter either. Learn what restrictive language means, when it\'s safe to deposit, and how to protect your right to dispute.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You receive a check from your insurance company. Maybe it is the first payment on your
        claim. Maybe it is a supplemental payment after you disputed the original estimate. Either
        way, before you do anything with it, look at the check carefully. What it says — and what
        you do next — can affect your ability to fight for the rest of what you are owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Look for Restrictive Language
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurance checks include language on the back or in the endorsement area that says
        something like &ldquo;full and final settlement,&rdquo; &ldquo;payment in full,&rdquo;
        &ldquo;accord and satisfaction,&rdquo; or similar language. This is designed to turn your
        endorsement of the check into an agreement that the claim is settled and closed.
      </p>

      <CalloutBox variant="warning" title="Read the Back of the Check Before Signing">
        <p>
          If the check contains &ldquo;full and final settlement&rdquo; language and you endorse
          and deposit it, the carrier may argue you accepted that amount as the complete resolution
          of your claim. This can create legal complications if you later want to dispute the
          amount. <strong>Always read the entire check — front and back — before endorsing.</strong>
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do With Each Type of Check
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Check With No Restrictive Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the check does not contain &ldquo;full and final&rdquo; or similar language, it is
        generally safe to cash or deposit it as a partial payment on your claim. Depositing a
        partial payment does not waive your right to dispute the remaining amount, file a
        supplement, or pursue additional payments. You should deposit these checks promptly —
        insurance checks typically have a validity period (often 90 or 180 days), and you do not
        want to deal with requesting a reissued check.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Check With &ldquo;Full and Final&rdquo; Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you see restrictive language, you have several options:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request reissuance without the restrictive language.</strong> Contact the insurer
          in writing and ask them to reissue the check without &ldquo;full and final
          settlement&rdquo; language. Many insurers will do this if you ask.
        </li>
        <li>
          <strong>Cash it with a written reservation of rights.</strong> Before depositing the
          check, send the insurer a letter (certified mail, return receipt) stating that you are
          depositing the check as a <strong>partial payment only</strong> and that you do not
          accept the amount as full and final settlement. Reference the check number, date, and
          amount. Keep a copy of the letter and the certified mail receipt. This creates a written
          record that your endorsement was not intended as an accord and satisfaction.
        </li>
        <li>
          <strong>Cross out the restrictive language.</strong> Some policyholders cross out the
          &ldquo;full and final&rdquo; language before endorsing. Write &ldquo;Partial payment
          only — rights reserved&rdquo; above your signature. This is less reliable than a
          separate letter because the bank may reject the altered check, and the legal effect of
          crossing out restrictive language varies.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Checks With the Mortgage Company&apos;s Name
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property has a mortgage, dwelling damage checks (Coverage A and Coverage B) will
        typically be made payable to both you and the mortgage company. This is because the lender
        has a financial interest in ensuring the property (their collateral) is rebuilt. You will
        need to endorse the check and send it to your lender&apos;s loss draft department for their
        endorsement. The lender will typically hold the funds and release them in stages as
        construction progresses. See our guide on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          mortgage company holds
        </Link>{' '}
        for details.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Important:</strong> Personal property checks (Coverage C) and ALE checks (Coverage
        D) should <em>not</em> have the mortgage company&apos;s name on them. The lender has no
        interest in your furniture or living expenses. If these checks include the lender&apos;s
        name, contact your insurer and request reissuance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ACV Checks vs. RCV Checks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a replacement cost value (RCV) policy, the insurer typically pays in two stages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>First check: ACV (Actual Cash Value)</strong> — the replacement cost minus
          depreciation. This is the initial payment. You can deposit this and begin work.
        </li>
        <li>
          <strong>Second check: Depreciation recovery (holdback)</strong> — the withheld
          depreciation is paid after you complete the repairs or replacement and submit proof.
          You must actually incur the expense to collect the holdback. See our guide on{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
            ACV vs. RCV
          </Link>.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depositing the ACV check does not waive your right to the depreciation holdback. It is a
        partial payment by design.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supplemental Checks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you file a{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
          supplemental claim
        </Link>{' '}
        for items the original estimate missed, the insurer issues a separate supplemental check.
        Review it the same way — check for restrictive language, verify the amount matches the
        agreed supplement, and deposit it. Filing a supplement and accepting payment on it does
        not prevent you from filing additional supplements if more missed items are discovered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What If the Check Amount Is Wrong?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the check amount does not match what you expected or what was agreed upon:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify the math.</strong> Check whether the deductible was subtracted, whether
          depreciation was withheld, and whether the payment covers only part of the estimate
          (e.g., only the undisputed amount).
        </li>
        <li>
          <strong>Request the payment breakdown.</strong> Ask the insurer for a detailed breakdown
          showing how the check amount was calculated — gross amount, minus deductible, minus
          depreciation, minus any prior payments.
        </li>
        <li>
          <strong>You can still deposit it.</strong> If there is no restrictive language, depositing
          a check that is less than what you believe you are owed does not waive your right to
          dispute the difference. It is a partial payment.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Keep Every Check Stub and Payment Letter">
        <p>
          Maintain a complete record of every payment you receive from the insurer — check copies
          (front and back), payment letters, coverage breakdowns, and any correspondence about
          the payment. This record is essential if you later need to prove what was paid, when,
          and under which coverage.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Questions About a Payment From Your Insurer?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can review your insurance checks, verify the amounts, and ensure
          you are not inadvertently waiving your rights.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
    </>
  )
}
