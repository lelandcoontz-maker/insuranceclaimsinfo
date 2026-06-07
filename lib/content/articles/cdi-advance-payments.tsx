import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: 'Advance Payments After a Wildfire: What California Law Requires',
  description:
    'California law requires insurers to make advance payments after a total loss in a declared disaster. CDI Bulletin 2025-2 spells out these requirements — here is the full text with practical guidance.',
  summary:
    'After a total loss in a declared disaster, California law requires insurers to make advance payments. CDI Bulletin 2025-2 spells out what carriers must advance for the dwelling and contents so you can begin recovering immediately.',
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

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        You Are Entitled to Advance Payments — Most Policyholders Never Get Them
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss in a declared disaster, California law requires your insurance company to
        make advance payments on your claim without waiting for you to submit detailed documentation.
        These are not favors. They are not &quot;goodwill gestures.&quot; They are mandatory payments
        that insurers must make under existing California Insurance Code provisions. Many
        policyholders never receive them because they do not know to ask — and their carriers do not
        volunteer the information.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the January 2025 Palisades and Eaton fires, Insurance Commissioner Ricardo Lara issued
        Bulletin 2025-2 calling on all insurers to comply with these existing laws immediately. The
        Department had been hearing from policyholders at recovery workshops and through its Consumer
        Hotline that many carriers were simply not making the advance payments the law requires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key advance payment requirements are straightforward:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>ALE advance (CIC 2061[a]):</strong> Upon request, the insurer must advance no less
          than four months of additional living expenses after a total loss related to a state of
          emergency.
        </li>
        <li>
          <strong>Contents without inventory (CIC 10103.7(b)(1)):</strong> The insurer must offer
          at least 60% of the contents policy limit for personal property &mdash; up to $350,000
          &mdash; without requiring a detailed inventory. The insurer is also required to notify
          the policyholder of this option. (These thresholds were raised from 30% / $250,000 to
          60% / $350,000 by SB 495, Stats. 2025, ch. 542, effective January 1, 2026, with policy
          forms required to comply by July 1, 2026.)
        </li>
        <li>
          <strong>Rebuild at a new location (CIC 2051.5[c]):</strong> If you choose to rebuild or
          purchase elsewhere, you are due the full benefits you would have received rebuilding at the
          loss location — including extended replacement cost and building code upgrade coverage.
          No deduction for land value at the new site.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The full bulletin text is below. Read it. Know what you are owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Bulletin 2025-2
      </h2>

      <DocumentEmbed
        title="Important Existing Consumer Protections for Wildfire Survivors, Including Advance Claim Payments"
        source="California Department of Insurance"
        date="January 23, 2025"
        type="bulletin"
        sourceUrl="https://insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/Bulletin-2025-2-Wildfire-Consumer-Protections-and-Advanced-Payments.pdf"
      >
        <p><strong>BULLETIN 2025-2</strong></p>
        <p>
          <strong>TO:</strong> All Insurance Companies and Adjusters Handling Claims Resulting from
          Recent Wildfires in Southern California
        </p>
        <p><strong>FROM:</strong> Insurance Commissioner Ricardo Lara</p>
        <p><strong>DATE:</strong> January 23, 2025</p>
        <p>
          <strong>RE:</strong> Important Existing Consumer Protections for Wildfire Survivors,
          Including Advance Claim Payments
        </p>
        <p>
          As Insurance Commissioner, my top priority is ensuring that wildfire survivors affected by
          the devastating Palisades and Eaton fires, in addition to the other fires in the Southern
          California region that began as a result of windstorm conditions, receive the insurance
          benefits they are entitled to -- and that they receive them as soon as possible. I believe
          swift payment of claims is the first step to helping people recover and get back on their
          feet, and what I expect of all insurance companies, including the FAIR Plan, a
          statutorily-created consortium of the admitted insurance companies writing business in
          California.
        </p>
        <p>
          Due to the tragic loss of life and property from the current wildfires in Southern
          California, many consumers are overwhelmed with being evacuated and the tasks of dealing
          with finding temporary housing while ensuring the safety of their families, among other
          major adverse changes in their daily lives. Governor Gavin Newsom declared a state of
          emergency in Los Angeles and Ventura counties to address the fires in those counties as a
          result of windstorm conditions. Subsequently, the President issued a Presidential Major
          Disaster Declaration to support ongoing response efforts related to the major wildfires
          burning in the Los Angeles area.
        </p>
        <p>
          Under existing California law, policyholders that suffered a total loss are legally
          entitled to certain advance payments on their claims. My Department staff and I have
          received feedback from many policyholders at my recent Insurance Support Workshops, at
          Disaster Recovery Centers, via my Department&apos;s Consumer Hotline, and from public
          officials on how the insurance claims process is going so far. One major concern that we
          have heard to date is that, while some policyholders have received these advance upfront
          payments, many others have not. Policyholders need these advance funds to help cover the
          significant expenses relating to relocating, childcare, transportation, and many other
          unforeseen costs caused by these wildfires.
        </p>
        <p>
          In an effort to assist policyholders in recovering from these devastating wildfires,
          I&apos;m calling on all insurance companies to take immediate steps to determine total
          losses and process these advance payments as soon as possible in accordance with existing
          California law. I&apos;m aware that some insurance companies are able to quickly determine
          whether a property is a total loss quickly through satellite imagery, direct inspection by
          adjusters (where access to the area is permitted), and from other sources. However, other
          insurance companies have moved less quickly.
        </p>
        <p>
          Once a property is determined be a total loss, existing California insurance law requires
          certain advance payments to claimants which include:
        </p>
        <p>
          <strong>Additional Living Expense (ALE) Advance Payment:</strong> (Cal. Ins. Code section
          2061[a]) In the event of a covered loss relating to a state of emergency under a
          residential property insurance policy if a policyholder has made a claim for additional
          living expenses related to a total loss, an insurer shall, upon request by a policyholder,
          render an advance payment of no less than four months of living expenses. Additional
          payment for additional living expenses shall be payable upon proper proof following the
          advance period.
        </p>
        <p>
          <strong>Note:</strong> While the California FAIR Plan&apos;s Dwelling policy uses the term
          &quot;Fair Rental Value&quot; (versus Additional Living Expense), the requirement to advance
          no less than four months of Fair Rental Value also applies to the FAIR Plan&apos;s policies.
        </p>
        <p>
          <strong>Payment of Contents Without Inventory:</strong> (Cal. Ins. Code section
          10103.7(b)(1)) In the event of a covered total loss of a primary dwelling under a
          residential property insurance policy resulting from a state of emergency, if the
          residence was furnished at the time of the loss, the insurance company shall offer a
          payment under the contents (personal property) coverage in an amount no less than 60
          percent of the policy limit applicable to the personal property covered under the
          policy, up to a maximum of three hundred fifty thousand dollars ($350,000), without
          requiring the insured to file an itemized claim. (The previous floor was 30 percent /
          $250,000 under AB 3012; raised by SB 495, Stats. 2025, ch. 542, effective January 1,
          2026, with policy forms required to comply by July 1, 2026.)
        </p>
        <p>
          Also, after receiving the advance payment for contents, the policyholder may recover
          additional amounts up to the policy limit for contents coverage by filing a claim pursuant
          to the terms of the policy. When a policyholder files a claim relating to a
          state of emergency, the insurer is required to notify the policyholder of the option to
          receive this advance payment for loss of contents and of the policyholder&apos;s option to
          subsequently file a full itemized claim. Some policyholders we spoke to at my workshops
          advised that they were not notified of this option.
        </p>
        <p>
          I&apos;m aware that some insurance companies are providing these advance payments plus
          additional funds, with some automatically paying full policy limits on all or some of the
          coverages when a total loss has been determined. I commend these insurers for stepping up
          for their policyholders, and urge other insurers to follow suit so that all policyholders
          and these devastated communities can recover as quickly as possible.
        </p>
        <p>
          In addition to the concerns over advance payments, my staff and I are hearing about other
          misinformation being imparted to some policyholders who have suffered a total loss by some
          insurance company adjusters. One issue involves the requirements when a policyholder
          chooses not to rebuild their home, but instead chooses to rebuild or purchase a property at
          another location.
        </p>
        <p>These laws include:</p>
        <p>
          <strong>Rebuilding in Current Location or Rebuilding or Replacing in a New
          Location:</strong> Existing law requires, in the event of a total loss of the insured
          structure, that when a policyholder decides to rebuild at a new location or to purchase an
          already built home at a new location, they are due the full benefits that would have been
          payable had the policyholder rebuilt the property at the loss location. These full benefits
          include payment of replacement cost, including any extended replacement cost coverage, if
          the policy has those coverages. Existing law also requires payment of building code upgrade
          benefits (also known as building ordinance and law) associated with rebuilding the property
          at the loss location even though building code upgrade costs will not be
          &quot;incurred&quot; at the loss location. However, the measure of indemnity shall not
          exceed the replacement cost, including the building code upgrade cost and any extended
          replacement cost coverage, if applicable, to repair, rebuild, or replace the insured
          structure at its original location. (Cal. Ins. Code section 2051.5[c][1])
        </p>
        <p>
          Further, when a policyholder decides to rebuild at a new location or to purchase an already
          built home at a new location, current law prohibits deduction for the value of land at the
          new location from the measure of damages. (Cal. Ins. Code section 2051.5[c][2])
        </p>
        <p><strong>Additional protections in existing law:</strong></p>
        <p>
          <strong>Time Limit to Collect Full Replacement Cost:</strong> After a state of emergency, a
          policyholder will have a minimum of 36 months (from the date that the first actual cash
          value payment is made) to collect the full replacement cost of the loss, subject to
          the policy limits. Additional extensions of six months must be provided to policyholders for
          good cause (Cal. Ins. Code sections 2051.5[b][1] and [2]).
        </p>
        <p>
          <strong>Ability to Combine Structure Coverages to Rebuild:</strong> After a state of
          emergency, a residential property policyholder is allowed to combine payments for claims for
          losses up to the aggregate policy limits for the primary dwelling and other structures, for
          any of the covered expenses reasonably necessary to rebuild or replace the damaged or
          destroyed dwelling, if the policy limits for coverage to rebuild or replace the primary
          dwelling are insufficient. (Cal. Ins. Code section 10103.7[a]).
        </p>
        <p>
          <strong>Time Limit to Collect Additional Living Expenses (ALE):</strong> After a state of
          emergency, a policyholder shall have ALE coverage for a minimum of 24 months, plus an
          extension of 12 months if a policyholder encounters a delay in the reconstruction process
          that is the result of circumstances beyond their control. Additional extensions of six
          months must be provided to policyholders for good cause. However, some policies may have a
          dollar limit that could be exhausted prior to these time limits, so policyholders should be
          aware of this. (Cal. Ins. Code section 2060[b][1]).
        </p>
        <p>
          <strong>An Insurer Must Renew Certain Policies for Two Years after a Declared
          Disaster:</strong> After a total loss, the insurer must offer to renew a
          policyholder&apos;s policy for at least the next two renewal periods (for no less than 24
          months). (Cal. Ins. Code section 675.1[a][3]).
        </p>
        <p>
          Lastly, I&apos;m again reminding all insurers of their obligation to take steps to confirm
          that all appropriate insurance company staff and claims adjusters, including independent
          contract adjusters and any contracted out-of-state adjusters, are made aware of the above
          noted laws.
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What To Do If Your Carrier Has Not Made Advance Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was a total loss in a declared disaster and you have not received these advance
        payments, do not wait for your insurer to offer. They are required to notify you of these
        options, but many are not doing so. Take these steps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Put your request in writing.</strong> Send a written request (email is fine)
          specifically referencing California Insurance Code sections 2061(a) and 10103.7(b)(1).
          State that you are requesting the four-month ALE advance and the 60% contents advance.
          Do not
          call — get it in writing so there is a record.
        </li>
        <li>
          <strong>Reference Bulletin 2025-2 by name.</strong> Your adjuster may not be aware of this
          bulletin, or they may be hoping you are not. Cite it. It puts them on notice that the
          Department of Insurance is watching.
        </li>
        <li>
          <strong>Set a deadline.</strong> Under 10 CCR 2695.7(b), an insurer must accept or deny a
          claim within 40 days. An advance payment request is not a new claim — it is a payment on
          an existing covered total loss. A reasonable demand period is 10 to 15 business days.
        </li>
        <li>
          <strong>File a CDI complaint if they do not pay.</strong> If your carrier ignores your
          written request or refuses to make the advance payment, file a complaint with the
          California Department of Insurance immediately. The Commissioner has publicly stated that
          he is monitoring compliance with these requirements.
        </li>
        <li>
          <strong>Do not accept &quot;we need more documentation&quot; as an excuse.</strong> The
          entire point of these advance payment statutes is that the insurer pays before you submit
          detailed documentation. For ALE, you request and they pay. For contents, the only
          condition is that the residence was furnished at the time of loss — which it obviously was
          if it was your primary dwelling.
        </li>
      </ul>

      <CalloutBox variant="warning" title="FAIR Plan Policyholders">
        <p>
          The bulletin specifically states that the FAIR Plan must comply with the ALE advance
          requirement using the term &quot;Fair Rental Value&quot; from its dwelling policy. If you
          are a FAIR Plan policyholder and your adjuster tells you these rules do not apply to the
          FAIR Plan, they are wrong. The Commissioner addressed this explicitly.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Other Protections You Should Know About
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bulletin 2025-2 also consolidates several other critical protections. If your adjuster tells
        you any of the following, they are giving you incorrect information:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          &quot;You have to rebuild at the same location to get full replacement cost.&quot; —
          Wrong. CIC 2051.5(c) guarantees full benefits at a new location.
        </li>
        <li>
          &quot;We will deduct the land value at your new location from your payment.&quot; —
          Prohibited. CIC 2051.5(c)(2) explicitly bars this.
        </li>
        <li>
          &quot;You only have 12 months to collect replacement cost.&quot; — Wrong. After a
          declared disaster, you have 36 months minimum with extensions available for good cause.
        </li>
        <li>
          &quot;Your ALE coverage runs out after 12 months.&quot; — Wrong. After a declared
          disaster, the minimum is 24 months plus extensions.
        </li>
        <li>
          &quot;You cannot use your other structures coverage for your dwelling.&quot; — Wrong.
          CIC 10103.7(a) allows combining structure coverages when dwelling limits are insufficient.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Key Takeaways">
        <ul className="list-disc pl-4 space-y-1">
          <li>Four months ALE advance is mandatory upon request after a total loss in a declared disaster.</li>
          <li>30% of dwelling limit for contents must be offered without an inventory.</li>
          <li>The insurer must notify you of these options — many are not doing so.</li>
          <li>Full replacement cost benefits apply even if you rebuild at a new location.</li>
          <li>36 months minimum to collect replacement cost after a declared disaster.</li>
          <li>These rules apply to all carriers including the California FAIR Plan.</li>
        </ul>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Related Resources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
            Additional Living Expenses and Fair Rental Value
          </Link>
        </li>
        <li>
          <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
            Contents Claims Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/sb495-contents-rule" className="text-[#2E74B5] hover:underline">
            SB 495: California&apos;s New Contents Payment Rule
          </Link>
        </li>
        <li>
          <Link href="/resources/total-loss" className="text-[#2E74B5] hover:underline">
            Total Loss Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/wildfire-guide" className="text-[#2E74B5] hover:underline">
            California Wildfire Claims Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            How to File a CDI Complaint
          </Link>
        </li>
        <li>
          <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">
            Understanding the California FAIR Plan
          </Link>
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Not Receiving the Advance Payments You Are Owed?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can ensure your carrier complies with California law and makes the
          advance payments required under the Insurance Code. If your insurer is dragging its feet
          or refusing to pay, we can help.
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
