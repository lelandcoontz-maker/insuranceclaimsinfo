import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: 'Rebuilding at a Different Location: Your Rights Under California Law',
  description:
    'California law guarantees that total loss policyholders can rebuild or purchase at a new location without losing benefits. The CDI Commissioner\'s Opinion on CIC 2051.5(c) answers three critical questions about this right.',
  summary:
    'California law lets total-loss policyholders rebuild or buy at a new location without forfeiting replacement-cost benefits. The CDI Commissioner\'s Opinion on Insurance Code 2051.5(c) confirms you do not have to rebuild on the same lot to be paid in full.',
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
        You Do Not Have to Rebuild in a Fire Zone
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, many policyholders decide they do not want to rebuild at the same
        location. Maybe the area burned twice in five years. Maybe the neighborhood never recovered.
        Maybe the family needs to be closer to work or schools. Whatever the reason, the decision
        to relocate is yours — and California law protects it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely tell policyholders they will lose benefits if they do not
        rebuild at the original address. Some adjusters say it directly. Others bury it in
        letters full of qualifications. Either way, it is wrong. California Insurance Code section
        2051.5(c) explicitly prohibits any policy provision that &quot;limits or denies payment of
        the replacement cost&quot; because the policyholder chose a different location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not ambiguous. The statute uses mandatory language. No policy &quot;issued or
        delivered in this state&quot; can penalize you for relocating. If your adjuster says
        otherwise, they are either uninformed or deliberately misleading you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2008, the CDI General Counsel issued a formal opinion answering three questions that
        come up constantly after total losses. The opinion is clear: you can buy an existing home
        instead of building from scratch. Your extended or guaranteed replacement cost applies at
        the new location. And the measure of indemnity is still based on what it would cost to
        rebuild at the original location — you just cannot pocket the difference if the new place
        costs less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The leading case on this issue is <em>Conway v. Farmers Home Mutual Insurance Co.</em>{' '}
        (1994) 26 Cal.App.4th 1185. The court held that an insured homeowner may recover
        replacement cost by purchasing another home at another location. That was 1994. The statute
        codified it. The Commissioner confirmed it. There is no excuse for a carrier to still be
        fighting this in 2026.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One more thing carriers try: deducting land value at the new location. Section 2051.5(c)(2)
        prohibits that too. The measure of indemnity is the replacement cost of the insured
        structure. Land is not part of the calculation — not at the original location, and not at
        the new one.
      </p>

      <CalloutBox variant="tip" title="Three Questions, Three Answers">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Can you buy an already-built home instead of rebuilding?</strong> Yes. The statute says &quot;rebuild or replace&quot; — purchasing an existing home qualifies as replacement.</li>
          <li><strong>Does extended/guaranteed replacement cost apply at the new location?</strong> Yes. You paid premiums for that coverage. Eliminating it because you relocated would be a forfeiture.</li>
          <li><strong>Can you pocket the difference if the new location costs less?</strong> No. You recover what you actually and reasonably spend, up to replacement cost at the original location.</li>
        </ul>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Commissioner&apos;s Opinion on CIC 2051.5(c)
      </h2>

      <CalloutBox variant="info" title="Note on Statutory Language">
        <p>
          The 2008 Commissioner&apos;s Opinion below quotes &sect; 2051.5 as it read at the time,
          using the phrase &ldquo;the thing lost or injured.&rdquo; The parallel
          &sect; 2051(b)(2) framework was later restructured by AB 188 (Stats. 2019, ch. 59),
          effective January 1, 2020, which replaced &ldquo;the thing lost or injured&rdquo;
          with &ldquo;the damaged or destroyed property&rdquo; throughout the modern statutory
          scheme. The Opinion&apos;s substantive analysis of rebuilding at a different location
          (the actual subject of the Opinion) remains good guidance.
        </p>
      </CalloutBox>

      <DocumentEmbed
        title="Legal Opinion of the General Counsel Regarding Application of California Insurance Code Section 2051.5(c)"
        source="California Department of Insurance"
        date="April 3, 2008"
        type="opinion"
        sourceUrl="https://insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/435314CICSection2015.pdf"
      >
        <p><strong>STATE OF CALIFORNIA</strong></p>
        <p><strong>DEPARTMENT OF INSURANCE</strong></p>
        <p>Legal Division, Office of the Commissioner</p>
        <p>April 3, 2008</p>
        <p>
          Re: Request for Legal Opinion of the General Counsel of the California Department of
          Insurance Regarding Application of California Insurance Code Section 2051.5(c)
        </p>
        <p>Three questions were presented:</p>
        <p>
          1. Does replacement cost insurance provide coverage if a homeowner decides to purchase an
          already built home at a new location?
        </p>
        <p>
          2. If a homeowner has an extended or guaranteed replacement cost policy and rebuilds in a
          new location, is the homeowner entitled to the &quot;extended&quot; or &quot;guaranteed&quot;
          portion of the coverage?
        </p>
        <p>
          3. If a homeowner purchases a home at a new location for less than the cost to rebuild at
          the original location, is the homeowner entitled to recover the full amount it would cost
          to rebuild at the original location?
        </p>
        <p><strong>I. Statutory Interpretation</strong></p>
        <p>
          The starting point of the analysis is the language of the statute. A statute must be read
          as a whole, its parts in the context of the entire statute.
        </p>
        <p>
          Insurance Code Section 2051.5 addresses the measure of indemnity under a fire insurance
          policy. Subsection (a) defines replacement cost: &quot;Under an open policy that requires
          payment of the replacement cost for a loss, the measure of indemnity is the amount that it
          would cost the insured to repair, rebuild, or replace the thing lost or injured, without
          deduction for physical depreciation, or the policy limit, whichever is less.&quot;
        </p>
        <p>
          Subsection (c) addresses replacement cost where a homeowner chooses to replace at a new
          location: &quot;In the event of a total loss of the insured structure, no policy issued or
          delivered in this state may contain a provision that limits or denies payment of the
          replacement cost in the event the insured decides to rebuild or replace the property at a
          location other than the insured premises. However, the measure of indemnity shall be based
          upon the replacement cost of the insured property and shall not be based upon the cost to
          repair, rebuild, or replace at a location other than the insured premises.&quot;
        </p>
        <p><strong>II. Discussion</strong></p>
        <p>
          <strong>Question 1: Does replacement cost insurance provide coverage if a homeowner
          decides to purchase an already built home at a new location?</strong>
        </p>
        <p><strong>Answer: Yes.</strong></p>
        <p>
          Section 2051.5 requires that replacement cost coverage allow a homeowner to &quot;rebuild
          or replace&quot; at a new location. The word &quot;replace&quot; means &quot;to take the
          place of: serve as a substitute for or successor of.&quot; Nothing in the definition
          requires a homeowner to build from scratch. Purchasing an already built home &quot;takes
          the place of&quot; the destroyed home as much as constructing afresh.
        </p>
        <p>
          The use of the separate words &quot;rebuild&quot; and &quot;replace&quot; establishes that
          a homeowner either can build a new home (rebuild) or purchase an already built home
          (replace) at the new location.
        </p>
        <p>
          In Conway v. Farmers Home Mutual Insurance Co. (1994) 26 Cal.App.4th 1185, 1187, the
          court held that under a replacement cost policy &quot;an insured homeowner may recover
          the replacement cost of fire damage to an insured home by purchasing another home at
          another location.&quot;
        </p>
        <p>
          <strong>Question 2: If a homeowner has an extended or guaranteed replacement cost policy
          and rebuilds in a new location, is the homeowner entitled to the &quot;extended&quot; or
          &quot;guaranteed&quot; portion of the coverage?</strong>
        </p>
        <p><strong>Answer: Yes.</strong></p>
        <p>
          &quot;Replacement cost&quot; as used in Section 2051.5(c) is not limited to
          &quot;replacement cost&quot; in distinction from &quot;extended&quot; or
          &quot;guaranteed&quot; replacement cost. The purpose of that section is to ensure that a
          homeowner is not penalized for rebuilding or replacing a destroyed home at a new location.
          Thus, if a policy provides for extended or guaranteed replacement cost, the full scope of
          that coverage is available whether the homeowner rebuilds at an original or a new location.
        </p>
        <p>
          Any other reading would deprive the homeowner of the benefit of his or her bargain with
          the insurer. A homeowner with an extended or guaranteed replacement cost policy paid
          premiums for the extended or guaranteed portion of coverage. Eliminating that portion if a
          homeowner chose to rebuild at a new location effectively would work a forfeiture and
          penalize the homeowner for exercising that right in violation of Section 2051.5(c).
        </p>
        <p>
          <strong>Question 3: If a homeowner purchases a home at a new location for less than the
          cost to rebuild at the original location, is the homeowner entitled to recover the full
          amount it would cost to rebuild at the original location?</strong>
        </p>
        <p><strong>Answer: No.</strong></p>
        <p>
          Subsections (c) and (a) of Section 2051.5 must be read together. Subsection (a)
          establishes that amounts paid above actual cash value must cover amounts actually paid by
          the homeowner (and those amounts must be reasonable). Section 2051.5 does not authorize
          the homeowner to recover cash unrelated to the actual cost of building. Whether replacing
          at an original or a new location, the homeowner may not recover amounts above actual cash
          value not actually and reasonably spent to rebuild.
        </p>
        <p>Very truly yours,</p>
        <p>Adam M. Cole</p>
        <p>General Counsel</p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When Your Adjuster Says You Cannot Relocate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your adjuster tells you that rebuilding at a different location will reduce or eliminate
        your benefits, respond in writing. Do not argue on the phone. Put it in an email or letter
        and cite the statute directly:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cite the statute:</strong> California Insurance Code section 2051.5(c) prohibits
          any policy provision that limits or denies replacement cost payment because the insured
          chose a new location.
        </li>
        <li>
          <strong>Cite the opinion:</strong> The CDI General Counsel confirmed in April 2008 that
          extended and guaranteed replacement cost applies at the new location. This is the
          Department&apos;s official position.
        </li>
        <li>
          <strong>Cite the case:</strong> Conway v. Farmers Home Mutual (1994) 26 Cal.App.4th 1185
          held that purchasing an already-built home at a new location satisfies the replacement
          cost requirement.
        </li>
        <li>
          <strong>Ask for their authority:</strong> If they claim your policy says otherwise, ask
          them to identify the specific provision. Section 2051.5(c) voids any such provision.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier does not reverse its position after you put them on notice, file a complaint
        with the California Department of Insurance. The CDI has already told carriers what the law
        requires. A carrier that ignores the statute and the Commissioner&apos;s own opinion is
        not making an honest coverage determination — it is banking on the policyholder not knowing
        their rights.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Related Resources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/total-loss" className="text-[#2E74B5] hover:underline">
            Total Loss Claims in California
          </Link>
        </li>
        <li>
          <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] hover:underline">
            Replacement Cost vs. Guaranteed Replacement Cost
          </Link>
        </li>
        <li>
          <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] hover:underline">
            Underinsured After a Wildfire
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
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
            ACV vs. Replacement Cost Value
          </Link>
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Being Told You Cannot Relocate?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurance company is limiting your benefits because you chose to rebuild or
          purchase at a new location, they are violating California law. A Public Adjuster can
          help you enforce your rights under CIC 2051.5(c) and recover the full replacement cost
          you are owed.
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
