import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: "36-Month ALE: What California Law Requires",
  description:
    "After a declared California disaster, insurers must provide at least 24 months of ALE with a 12-month extension for delays beyond the policyholder's control.",
  summary:
    'After a declared disaster in California, insurers must provide at least 24 months of Additional Living Expenses, plus a 12-month extension for delays beyond your control, for up to 36 months total. The CDI Commissioner\'s Opinion sets the requirements.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <CalloutBox variant="warning" title="Statutory Citation Update: §2060(b)(1), Not §2051.5(b)(2)">
        <p>
          The Commissioner&rsquo;s Opinion reproduced below was issued September 10, 2019 and
          correctly cites Insurance Code <strong>§2051.5(b)(2)</strong> as it existed at that
          time. SB 872 (Chapter 261, Statutes of 2020, signed September 29, 2020) restructured
          the Insurance Code and <strong>moved the 24/36-month ALE rule from §2051.5(b)(2) to{' '}
          §2060(b)(1)</strong>. The current statutory authority for the same rule is{' '}
          <strong>California Insurance Code §2060(b)(1)</strong>. Verified against leginfo (2025
          codification). The substance of the rule did not change &mdash; only the section
          number. This article uses §2060(b)(1) in its modern narrative and preserves the 2019
          Opinion verbatim as a historical document.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ALE Is Where Carriers Cut Corners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional Living Expenses is one of the most disputed coverage areas after a total loss.
        Rebuilding a home takes years, not months. During that time you are paying rent, covering
        increased commute costs, feeding your family without a kitchen, and dealing with every other
        expense that comes from being displaced. Your policy is supposed to cover all of that. And
        carriers routinely try to shut it off early.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the devastating 2017 wildfires in Northern California, the Legislature recognized what
        policyholders already knew: 24 months is not enough time to rebuild when thousands of homes
        are destroyed simultaneously. Permit offices are overwhelmed. Contractors are booked solid.
        Materials are back-ordered for months. The rebuild timeline is not in the policyholder&apos;s
        control, and cutting off ALE while someone is still displaced is unconscionable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2018, Governor Brown signed three bills &mdash; AB 1800 (Levine), SB 894 (Dodd and
        McGuire), and AB 1772 (Aguiar-Curry and Wood) &mdash; that extended ALE coverage to 36
        months for losses arising from a declared state of emergency. The structure is 24 months
        minimum, plus a 12-month extension that the insurer <em>must</em> grant when the policyholder
        is acting in good faith and delays are beyond their control. Beyond that, additional 6-month
        extensions must be provided for good cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Commissioner&apos;s Opinion below establishes several critical points: the law took
        effect September 21, 2018 as an urgency statute; it applies to any covered loss relating to a
        Governor-declared state of emergency; the extension is mandatory when the policyholder
        encounters delays from permit backlogs, material shortages, or contractor unavailability; and
        additional 6-month extensions are required for good cause. This is not discretionary. The
        statute says &ldquo;shall.&rdquo; If your carrier is trying to cut off ALE at 24 months
        while you are still fighting permit delays or waiting for a contractor, this opinion is your
        ammunition.
      </p>

      <CalloutBox variant="tip" title="The 36-Month Rule">
        <p>
          For losses arising from a Governor-declared state of emergency: <strong>24 months
          minimum</strong> ALE from inception of the loss, plus a <strong>12-month mandatory
          extension</strong> when good-faith delays are beyond your control (permits, materials,
          contractors), plus <strong>additional 6-month extensions</strong> for good cause. The
          insurer does not get to decide whether your delays are legitimate &mdash; the standard
          is objective: circumstances beyond the control of the insured.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: Commissioner&apos;s Opinion on 36-Month ALE
      </h2>

      <DocumentEmbed
        title="Effective Date of 36 Month Additional Living Expenses Requirement"
        source="California Department of Insurance"
        date="September 10, 2019"
        type="opinion"
        sourceUrl="https://www.insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/GeneralCounsel-sLegalOpinonRegardingEffectiveDateOf36MonthAdditionalLivingExpensesRequirement.pdf"
      >
        <p><strong>CALIFORNIA DEPARTMENT OF INSURANCE</strong></p>
        <p><strong>September 10, 2019</strong></p>
        <p><strong>SUBJECT:</strong> Effective Date of 36 Month Additional Living Expenses Requirement</p>

        <p><strong>I. Issue Presented</strong></p>
        <p>
          What is the effective date of the amendment to California Insurance Code section 2051.5(b)(2)
          that requires insurers, in the event of a covered loss relating to a state of emergency
          declared by the California Governor, to provide coverage for additional living expenses
          (&ldquo;ALE&rdquo;) for a period of not less than 24 months from the inception of the loss
          and to grant an extension of up to 12 additional months, for a total of 36 months, if an
          insured acting in good faith and with reasonable diligence encounters a delay or delays in
          the reconstruction process that are the result of circumstances beyond the control of the
          insured?
        </p>

        <p><strong>II. Summary Conclusion</strong></p>
        <p>
          Effective as of September 21, 2018, in the event of a covered loss relating to a state of
          emergency declared by the California Governor, coverage for additional living expenses must
          be for a period of not less than 24 months from the inception of the loss and an insurer is
          required to grant an extension of up to 12 additional months, for a total of 36 months, if
          an insured acting in good faith and with reasonable diligence encounters a delay or delays
          in the reconstruction process as a result of circumstances beyond the control of the insured.
          Additional extensions of six months must be provided to policyholders for good cause.
        </p>

        <p><strong>III. Background</strong></p>
        <p>
          In 2017 and 2018, California experienced several devastating wildfires, destroying thousands
          of homes and businesses, causing multiple fatalities, and leaving thousands homeless. Due to
          circumstances beyond the control of the affected survivors of these catastrophic wildfires,
          because of the extensive widespread damage resulting from these wildfires, it has taken longer
          than anticipated to repair and rebuild the destroyed and damaged homes.
        </p>
        <p>
          For several years prior to 2017, Insurance Code section 2051.5(b)(2) provided that, in the
          event of a declared state of emergency declared by the California Governor, coverage for ALE
          was required to be at least 24 months. In the aftermath of the 2017 wildfires, the
          Department and the California State Legislature recognized that, in these large scale natural
          disasters, 24 months does not provide sufficient time to remove debris, obtain all necessary
          building permits, locate and hire a contractor and multiple subcontractors, and completely
          rebuild these destroyed homes.
        </p>
        <p>
          As a result, the Department, the California Legislature, and Governor Edmund G. Brown Jr.,
          with the passage of Senate Bill 894 (Dodd and McGuire, Chapter 618, Statutes of 2018),
          Assembly Bill 1772 (Aguiar-Curry and Wood, Chapter 627, Statutes of 2018), and Assembly Bill
          1800 (Levine, Chapter 628, Statutes of 2018), increased the 24 month mandatory ALE coverage
          period to a minimum of 36 months if a policyholder acting in good faith and with reasonable
          diligence encounters delays in the reconstruction process that are the result of
          circumstances beyond their control. Circumstances beyond the control of the insured include,
          but are not limited to, unavoidable construction permit delays, lack of necessary
          construction materials, and lack of available contractors to perform the necessary work.
          Additional ALE coverage period extensions of six months must be provided by the insurance
          company to affected policyholders for good cause.
        </p>

        <p><strong>IV. Discussion</strong></p>
        <p>
          SB 894 sought to amend paragraph (2) of subdivision (b) of section 2051.5 to extend the
          time to collect the coverage limit for ALE from 24 to 36 months, for good cause, where the
          policyholder has suffered a total loss resulting from a &ldquo;state of emergency&rdquo;
          declared by the California Governor. AB 1772 sought to amend paragraph (1) of subdivision
          (b) to extend the time to collect full replacement cost from 24 to 36 months. AB 1800
          sought to amend subdivision (c) to clarify a policyholder&apos;s right to collect full
          replacement cost whether they rebuild or replace at another location.
        </p>
        <p>
          AB 1772, SB 894 and AB 1800 were each enacted on September 21, 2018 when Governor Brown
          signed all three bills. SB 894 was assigned Chapter 618, AB 1772 was assigned Chapter 627,
          and AB 1800 was assigned Chapter 628. Because AB 1800 has the highest chapter number, it is
          presumed that AB 1800 was enacted after both AB 1772 and SB 894.
        </p>
        <p>
          Section 1.7 of AB 1800 provides in relevant part: &ldquo;(b)(2) In the event of a covered
          loss relating to a state of emergency, as defined in Section 8558 of the Government Code,
          coverage for additional living expenses shall be for a period of no less than 24 months from
          the inception of the loss, but shall be subject to other policy provisions. An insurer shall
          grant an extension of up to 12 additional months, for a total of 36 months, if an insured
          acting in good faith and with reasonable diligence encounters a delay or delays in the
          reconstruction process that are the result of circumstances beyond the control of the
          insured. Circumstances beyond the control of the insured include, but are not limited to,
          unavoidable construction permit delays, lack of necessary construction materials, and lack of
          available contractors to perform the necessary work. Additional extensions of six months
          shall be provided to policyholders for good cause.&rdquo;
        </p>
        <p>
          Section 3 of AB 1800 provides that it is an urgency statute necessary for the immediate
          preservation of the public peace, health, or safety and shall go into immediate effect.
          Because AB 1800 was an urgency statute approved by Governor Brown on September 21, 2018, the
          amendment to Insurance Code section 2051.5 became effective immediately as of September 21,
          2018.
        </p>

        <p><strong>V. Conclusion</strong></p>
        <p>
          Based on the foregoing, effective as of September 21, 2018, in the event of a covered loss
          relating to a state of emergency declared by the California Governor, coverage for additional
          living expenses must be for a period of no less than 24 months from the inception of the
          loss, but shall be subject to other policy provisions. An insurer is required to grant an
          extension of up to 12 additional months, for a total of 36 months, if an insured acting in
          good faith and with reasonable diligence encounters a delay or delays in the reconstruction
          process that are the result of circumstances beyond the control of the insured. Additional
          extensions of six months must be provided to policyholders for good cause.
        </p>
        <p>
          Very truly yours,<br />
          Kenneth B. Schnoll<br />
          General Counsel &amp; Deputy Commissioner
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document &ldquo;Circumstances Beyond Your Control&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 12-month extension is not automatic. You have to show that you are acting in good faith
        and with reasonable diligence, and that the delays are beyond your control. But the standard
        is not difficult to meet if you keep records. Here is what to document:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Permit Delays
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Save every communication with your local building department. If your permit application sat
        in a queue for three months because the department is processing thousands of fire-loss
        permits simultaneously, get that in writing. A letter or email from the planning department
        confirming the backlog timeline is strong evidence. Keep copies of your application
        submission dates, any correction notices, and approval dates.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Material Shortages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your contractor reports that lumber, roofing materials, windows, or other components are
        back-ordered, get it documented. Ask for written confirmation from suppliers showing lead
        times. If you ordered materials six weeks ago and delivery is not expected for another three
        months, that documentation proves the delay is not your doing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contractor Unavailability
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a catastrophe, every licensed contractor in the area is booked for years. Document your
        efforts to find a contractor: keep records of the contractors you contacted, when you
        contacted them, and when they said they could start. If you contacted five general
        contractors and the earliest availability was 14 months out, that is evidence of
        circumstances beyond your control.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Other Qualifying Delays
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statute says &ldquo;include, but are not limited to&rdquo; &mdash; meaning the three
        categories above are examples, not an exhaustive list. Debris removal delays (especially when
        government agencies are managing the cleanup), utility reconnection timelines, environmental
        remediation requirements, and HOA or design review board approvals can all qualify. Document
        everything.
      </p>

      <CalloutBox variant="important" title="Do Not Wait Until Month 23">
        <p>
          Start documenting delays from day one. If you wait until your 24-month ALE period is about
          to expire to request the extension, you will be scrambling to prove what happened months
          ago. Keep a running log of every delay, every communication with your city, contractor, and
          suppliers. When you submit your extension request, you want a clear paper trail that shows
          continuous good-faith effort on your part.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Carrier Says No
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer denies the 12-month extension or refuses to grant a 6-month good-cause
        extension, they are violating <strong>California Insurance Code §2060(b)(1)</strong>{' '}
        (which is where SB 872 placed the same rule the 2019 Commissioner&rsquo;s Opinion
        interpreted under the former §2051.5(b)(2) citation). The statute uses the word
        &ldquo;shall&rdquo; &mdash; not &ldquo;may.&rdquo; The insurer does not have
        discretion to deny an extension when the qualifying conditions are met. Document the
        denial in writing, cite the current statutory authority (§2060(b)(1)) along with this
        Commissioner&apos;s Opinion, and file a complaint with the California Department of
        Insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Related Resources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
            Additional Living Expenses &amp; Fair Rental Value
          </Link>
        </li>
        <li>
          <Link href="/resources/wildfire-guide" className="text-[#2E74B5] hover:underline">
            California Wildfire Claims Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/total-loss" className="text-[#2E74B5] hover:underline">
            Total Loss Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            How to File a CDI Complaint
          </Link>
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            Insurance Bad Faith in California
          </Link>
        </li>
        <li>
          <Link href="/resources/california-claim-deadlines" className="text-[#2E74B5] hover:underline">
            California Claim Deadlines
          </Link>
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          ALE Being Cut Off Too Early?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer is trying to terminate your Additional Living Expenses before your home is
          rebuilt, you may be entitled to 36 months or more under California law. A Public Adjuster
          can help you document qualifying delays and enforce the statutory extension.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
