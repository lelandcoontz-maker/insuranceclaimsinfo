import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Post-Disaster Fraud and Scams: Protecting Yourself After a Loss',
  description:
    'After a disaster, scammers target vulnerable homeowners. Learn how to identify contractor fraud, unlicensed claim negotiators, deductible waiver schemes, and other common scams — and how to protect yourself.',
  summary:
    'After a disaster, scammers target homeowners with contractor fraud, unlicensed \'claim negotiators,\' and deductible-waiver schemes. Verify licenses, never sign under pressure, and know the warning signs to protect yourself and your claim.',
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
        After a wildfire, flood, or other major disaster, scammers descend on affected communities.
        They know you are displaced, stressed, and desperate to rebuild. They offer quick fixes,
        discount prices, and promises that sound too good to be true — because they are.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Losing your home to a disaster is devastating. Losing tens of thousands of dollars to a
        scammer on top of that is something you may never recover from. Knowing the most common
        scams is the first step in protecting yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contractor Fraud
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contractor fraud is the most common and most costly post-disaster scam. It takes several
        forms:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Excessive Advance Deposits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law limits contractor deposits to <strong>10% of the contract price or $1,000,
        whichever is less</strong> (Business and Professions Code &sect; 7159.5). Any contractor
        who asks for more than this up front is either ignorant of the law or deliberately
        violating it. Contractors who take $20,000, $40,000, or more in advance deposits and then
        disappear or abandon the project are a recurring pattern after every major disaster.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Unlicensed Contractors
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a disaster, unlicensed individuals flood the area offering construction services.
        They may present themselves as general contractors, roofers, or restoration specialists.
        Without a license, they carry no bond, no workers&apos; compensation insurance, and no
        accountability to the Contractors State License Board (CSLB). If they abandon the job or
        do substandard work, you have very limited recourse.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Always verify:</strong> Check the contractor&apos;s license at{' '}
        <strong>cslb.ca.gov</strong> before signing anything. Verify their workers&apos;
        compensation coverage and general liability insurance. Ask for references from recent
        projects — not just disaster work.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Deductible Waiver Scheme
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor offers to &ldquo;waive your deductible&rdquo; — meaning they will inflate the
        scope of work on the insurance estimate to absorb the deductible amount, so you do not
        pay anything out of pocket. This is insurance fraud. Both the contractor and the homeowner
        can face criminal charges. Beyond the legal risk, contractors who inflate estimates to cover
        deductibles typically cut corners on the actual work to maintain their margin.
      </p>

      <CalloutBox variant="warning" title="If a Contractor Offers to Waive Your Deductible, Walk Away">
        <p>
          The deductible is your contractual obligation under your policy. A contractor who offers
          to &ldquo;eat&rdquo; your deductible is proposing fraud. If the insurance company
          discovers it — and they increasingly investigate this — both you and the contractor face
          consequences including claim denial, policy cancellation, and potential prosecution.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Assignment of Benefits (AOB) Abuse
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some contractors ask you to sign an &ldquo;Assignment of Benefits&rdquo; (AOB), which
        transfers your insurance claim rights to the contractor. The contractor then deals directly
        with the insurance company and controls the claim. The problem: once you assign your
        benefits, you lose control of your claim. The contractor may inflate the claim, settle for
        less than you are owed, or abandon the project after collecting payment. In the worst
        cases, the contractor collects from the insurer and disappears, leaving you with an
        unfinished project and no insurance proceeds to hire someone else.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Unlicensed Claim &ldquo;Negotiators&rdquo; and Consultants
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a disaster, individuals and companies may approach you offering to &ldquo;negotiate
        your claim&rdquo; or &ldquo;get you more money from the insurance company.&rdquo; Some of
        these are legitimate, licensed professionals — Public Adjusters and attorneys. Others are
        unlicensed individuals operating illegally.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, anyone who negotiates insurance claims on behalf of a policyholder for
        compensation must be either a licensed Public Adjuster or a licensed attorney. Unlicensed
        claim negotiators are violating the law and have no regulatory oversight, no bond, and no
        accountability.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify Public Adjuster licenses</strong> at the California Department of
          Insurance website (insurance.ca.gov)
        </li>
        <li>
          <strong>Verify attorney licenses</strong> at the State Bar of California website
          (calbar.ca.gov)
        </li>
        <li>
          <strong>Be wary of anyone</strong> who contacts you unsolicited and pressures you to
          sign immediately
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Other Common Post-Disaster Scams
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>FEMA impersonators:</strong> Scammers pose as FEMA representatives and ask for
          personal information, bank account numbers, or upfront fees. FEMA never charges fees for
          disaster assistance and will never ask for your banking information by phone.
        </li>
        <li>
          <strong>Fake charities:</strong> Fraudulent charities solicit donations for disaster
          relief but pocket the money. Verify any charity at charitynavigator.org or guidestar.org
          before donating.
        </li>
        <li>
          <strong>Price gouging:</strong> California Penal Code &sect; 396 prohibits raising prices
          more than 10% on essential goods and services after a declared emergency. This includes
          building materials, temporary housing, gas, food, and emergency supplies.
        </li>
        <li>
          <strong>Debris removal scams:</strong> Unlicensed operators offer cut-rate debris removal
          but dump hazardous materials illegally, potentially creating environmental liability for
          the property owner.
        </li>
        <li>
          <strong>&ldquo;Insurance buyout&rdquo; offers:</strong> Companies offer to buy your
          insurance claim for a lump sum — typically a fraction of its value. Once you sell, they
          collect the full amount from the insurer. Never sell your claim rights.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Red Flags to Watch For
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Anyone who pressures you to sign immediately or says the &ldquo;offer expires
          today&rdquo;</li>
        <li>Requests for advance deposits exceeding 10% or $1,000</li>
        <li>Contractors who refuse to provide a written contract before starting work</li>
        <li>Anyone who asks you to make checks payable to an individual rather than a business</li>
        <li>Claims negotiators who cannot provide a valid California license number</li>
        <li>Contractors who want to deal directly with your insurance company without your
          involvement</li>
        <li>Offers that sound too good to be true — &ldquo;no deductible,&rdquo; &ldquo;free
          roof,&rdquo; &ldquo;guaranteed settlement&rdquo;</li>
        <li>Door-to-door solicitation immediately after a disaster</li>
        <li>Out-of-state contractors with no local references</li>
      </ul>

      <CalloutBox variant="tip" title="Take Your Time">
        <p>
          Scammers rely on urgency. They know you are stressed and want to start rebuilding. But
          a legitimate contractor, Public Adjuster, or attorney will give you time to review
          contracts, verify credentials, and make an informed decision. Anyone who pressures you
          to sign on the spot is not looking out for your interests. See our guide on{' '}
          <Link href="/resources/choosing-your-contractor" className="underline font-semibold">
            choosing your contractor
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where to Report Fraud
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contractor fraud:</strong> Contractors State License Board (CSLB) — 800-321-CSLB
        </li>
        <li>
          <strong>Insurance fraud:</strong> California Department of Insurance — 800-927-4357
        </li>
        <li>
          <strong>Price gouging:</strong> Local District Attorney&apos;s office or California
          Attorney General — 800-952-5225
        </li>
        <li>
          <strong>FEMA impersonation:</strong> FEMA Helpline — 800-621-3362
        </li>
        <li>
          <strong>General fraud:</strong> Federal Trade Commission — reportfraud.ftc.gov
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Not Sure Who to Trust After a Disaster?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster works for you — not the insurance company and not a
          contractor. We can help you handle the claims process, vet contractors, and protect
          you from bad actors.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
