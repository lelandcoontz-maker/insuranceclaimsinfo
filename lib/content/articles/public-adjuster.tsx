import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Working With a Public Adjuster',
  description:
    'Understand what a Public Adjuster does, how their fees work, when to hire one vs an attorney or contractor, and how to choose the right Public Adjuster for your insurance claim.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Public Adjuster?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster is a licensed insurance professional who represents
        the <strong>policyholder</strong> — not the insurance company — in the claims process. While
        the insurance company has its own adjuster working on its behalf, a Public Adjuster works
        exclusively for you. They evaluate your damage, prepare and document your claim, and
        negotiate directly with the insurance company to reach a fair settlement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is important to understand the distinction between the different types of adjusters. The
        adjuster your insurance company sends works for them — their job is to adjust the claim on
        the insurer&apos;s behalf. An independent adjuster is hired by the insurance company as a
        contractor but still works at the insurer&apos;s direction. A Public Adjuster is the only
        type of adjuster who works for you and is legally obligated to represent your interests.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Public Adjuster Fees Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Public Adjusters typically work on a contingency fee basis, meaning they are paid a
        percentage of the insurance settlement they help you recover. In California, this percentage
        is usually between 10% and 15% of the claim proceeds, depending on the size and complexity
        of the claim. California law caps Public Adjuster fees in certain disaster situations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contingency model means there is no upfront cost to you — the Public Adjuster only gets
        paid when you get paid. This aligns their interests with yours: the more they recover for
        you, the more they earn. It also means that a Public Adjuster will generally not take a case
        unless they believe they can add value beyond what the insurance company has already offered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Hire a Public Adjuster vs. Other Professionals
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every claim requires a Public Adjuster, and not every situation calls for the same type
        of help. Here is a general guide:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Handle It Yourself
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Small, straightforward claims — a broken window, a minor appliance leak with limited
        damage — may not justify the cost of hiring a professional. If the damage is clearly
        documented, the repair cost is modest, and the insurance company is handling the claim
        fairly, you may be able to manage the process on your own.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Hire a Public Adjuster
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster is recommended for large, complex, or disputed claims. This includes
        significant fire, water, or storm damage; claims where the insurance company&apos;s initial
        estimate seems far too low; claims involving multiple types of damage (structure, contents,
        loss of use); and any situation where you feel overwhelmed by the process. Insurance claim
        underpayment is a well-documented problem — congressional testimony, regulatory
        investigations, and policyholder advocacy groups have consistently shown that insurers
        routinely reduce field adjusters&apos; damage estimates through desk reviews, sometimes
        cutting payments dramatically. After the 2025 Los Angeles wildfires, according to a January
        2026 survey of 2,443 adults in fire-impacted Los Angeles communities, commissioned by the
        Department of Angels, nearly 80% of victims reported serious insurance claim issues. Public
        Adjusters are especially valuable when you need someone to take over the day-to-day
        management of the claim so you can focus on your family and recovery.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Hire an Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An attorney is the right choice when the insurance company has denied your claim outright,
        when you suspect{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">bad faith</Link>,
        or when litigation is necessary. Attorneys can pursue legal remedies that Public Adjusters
        cannot — including filing lawsuits and seeking damages beyond the policy benefits.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Use an Expert Contractor
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the dispute is specifically about the repair scope or methodology — for example, the
        insurance company says the roof can be repaired but your roofer says it needs full
        replacement — an expert contractor&apos;s opinion and detailed estimate can be the evidence
        you need to support your position.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Public Adjuster + Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On large, complex claims — especially those involving bad faith, significant underpayment,
        or potential litigation — a Public Adjuster and an attorney can work together effectively.
        The Public Adjuster handles the technical claims work (documentation, estimating,
        negotiation), while the attorney handles the legal strategy and any litigation. This
        combination can be powerful for maximizing your recovery on serious claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Choose a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all Public Adjusters are equal. Choosing the right one for your claim is important. Here
        is what to look for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify their license.</strong> In California, Public Adjusters must be licensed by
          the California Department of Insurance. You can verify any Public Adjuster&apos;s license
          status on the CDI website. Never hire someone who is not properly licensed.
        </li>
        <li>
          <strong>Ask about experience with your type of loss.</strong> A Public Adjuster who
          specializes in fire claims may not be the best choice for a complex water or mold loss.
          Ask specifically about their experience with losses similar to yours.
        </li>
        <li>
          <strong>Ask for references.</strong> A reputable Public Adjuster should be willing to
          provide references from past clients with similar claims.
        </li>
        <li>
          <strong>Understand the fee agreement.</strong> Read the entire contract before signing.
          Make sure you understand the fee percentage, when the fee is calculated (on the total
          settlement or only on the increase above what the insurer already offered), and any other
          terms.
        </li>
        <li>
          <strong>Confirm they carry Errors and Omissions (E&amp;O) insurance.</strong> E&amp;O
          insurance protects you if the Public Adjuster makes a professional error. A legitimate
          Public Adjuster should carry this coverage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Expect When Working With a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you hire a Public Adjuster, here is what the working relationship typically looks like:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>They handle communication with the insurer.</strong> Your Public Adjuster becomes
          the primary point of contact for the insurance company on your claim. They send and
          receive correspondence, respond to requests, and manage the back-and-forth.
        </li>
        <li>
          <strong>They document the loss.</strong> A good Public Adjuster will thoroughly document
          your damage — photographing, measuring, inventorying contents, and preparing a detailed
          scope of the loss.
        </li>
        <li>
          <strong>They prepare and negotiate your claim.</strong> Using their documentation and
          knowledge of insurance policy language, they prepare your claim and negotiate with the
          insurer to reach a fair settlement.
        </li>
        <li>
          <strong>The insurer can still contact you directly.</strong> Some policyholders are told
          (or believe) that once they hire a Public Adjuster, the insurance company cannot contact
          them directly. This is not true. The insurer may still reach out to you. However, with a
          Public Adjuster on board, you can direct the insurer to communicate through your
          representative.
        </li>
      </ul>

      <CalloutBox variant="tip" title="A Good Public Adjuster Pays for Themselves">
        <p>
          Independent data supports the value of public adjuster representation. A 2010 study by
          OPPAGA, the research arm of the Florida Legislature, found that policyholders who used
          public adjusters for hurricane claims received settlements averaging 747% higher — before
          PA fees — than those who handled claims on their own. While results vary by claim size
          and complexity, public adjusters bring expertise in policy language, damage documentation,
          and negotiation that most policyholders lack. The increased settlement amount typically
          far exceeds the fee — in other words, you often end up with more money in your pocket
          even after paying the Public Adjuster than you would have received on your own.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting the Insurer&apos;s Conduct: A Critical PA Function
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster&apos;s primary objective is straightforward: obtain all the money due
        under the policy contract. But in the course of pursuing that objective, a skilled Public
        Adjuster performs another function that is often just as important:{' '}
        <strong>documenting the insurance company&apos;s behavior</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        During the claims process, the Public Adjuster is in direct, ongoing contact with the
        insurer — exchanging written correspondence, reviewing estimates, submitting supplements,
        tracking deadlines, and negotiating. Through these interactions, the PA is in a unique
        position to observe and create a contemporaneous record of how the insurer handles the
        claim. This record may capture:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Regulatory violations</strong> — missed{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            Fair Claims Regulations
          </Link>{' '}
          deadlines, failure to provide required disclosures, inadequate investigation
        </li>
        <li>
          <strong>Statutory violations</strong> — misrepresentation of policy provisions, failure
          to attempt a fair settlement (Insurance Code § 790.03)
        </li>
        <li>
          <strong>Breaches of contract</strong> — failure to pay covered losses, misapplication
          of deductibles or limits, refusal to honor policy terms
        </li>
        <li>
          <strong>
            <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">Bad faith</Link>
            {' '}conduct
          </strong> — unreasonable delays, lowball offers without basis, contradictory
          positions, stonewalling, refusal to provide written explanations
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This documentation is not manufactured for litigation — it is generated in the normal
        course of the PA&apos;s work. It is a real-time, professional record of the insurer&apos;s
        actual conduct. If a lawsuit ultimately becomes necessary, an attorney can use this file
        to build a case. Policyholders who handle claims on their own rarely create this kind of
        documentation, and when they later consult an attorney, there is often little evidence
        beyond their own recollection. A Public Adjuster&apos;s file changes that equation.
      </p>

      <CalloutBox variant="tip" title="The Record Your Attorney May Need Later">
        <p>
          A Public Adjuster is not an attorney and does not file lawsuits. But by putting
          everything in writing, tracking deadlines, and preserving the record of the insurer&apos;s
          responses and failures to respond, the PA builds a file that can be invaluable if
          litigation becomes necessary. The best time to build that record is from the beginning —
          not after the opportunity to capture it has passed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster is your advocate in the insurance claims process. They bring expertise in
        policy language, damage documentation, estimating, and negotiation — skills that most
        homeowners do not have. For significant claims, the value a Public Adjuster provides
        typically outweighs their fee many times over. If you are dealing with a large or complex
        insurance claim, or if you feel that your insurance company is not treating you fairly,
        consulting with a licensed Public Adjuster is one of the smartest steps you can take.
      </p>
    </>
  )
}
