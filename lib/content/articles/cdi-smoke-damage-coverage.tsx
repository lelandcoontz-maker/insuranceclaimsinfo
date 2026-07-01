import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: "CA Smoke Damage Claims: CDI Bulletin 2025-7 Explained",
  description:
    "The California Department of Insurance confirmed smoke damage is covered under homeowner policies. Full Bulletin 2025-7 text with practical claim guidance.",
  summary:
    'The California Department of Insurance confirmed in Bulletin 2025-7 that smoke damage is covered under homeowner policies and cannot be brushed off as cosmetic. Use the bulletin to push back when a carrier minimizes a smoke claim.',
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
        Why This Bulletin Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the January 2025 Southern California wildfires, insurance companies started denying
        smoke damage claims at an alarming rate. Their argument was simple: smoke is not
        &quot;direct physical loss or damage&quot; to property. The California Department of
        Insurance disagreed, and issued Bulletin 2025-7 to make that disagreement official.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carriers were relying on a misreading of two recent court cases. The California
        Supreme Court&apos;s 2024 decision in <em>Another Planet Entertainment v. Vigilant
        Insurance Co.</em> addressed COVID-19 business interruption coverage, not smoke damage
        &mdash; but the standard the court adopted (&ldquo;distinct, demonstrable, physical
        alteration of property&rdquo;) is the standard that applies to smoke damage too. And
        smoke damage, unlike the theoretical viral presence at issue in <em>Another Planet</em>,
        routinely satisfies that standard when soot deposition, particulate contamination, or
        VOC absorption can be documented as a physical change to building materials. The case
        did not &ldquo;confirm&rdquo; smoke damage is excluded, and it did not categorically
        confirm it is included &mdash; but the framework it established is one that documented
        smoke claims regularly meet. The carriers then pointed to <em>Gharibian v. Wawanesa
        General Insurance Co.</em> (2025) 108 Cal.App.5th 730 (Cal. Ct. App., Second Dist.,
        Div. 2) as support for blanket denials. But that case was decided on its specific
        facts &mdash; the plaintiffs simply did not present enough evidence of actual damage.
        It was not a ruling that smoke damage is never covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Gharibian</em>&rsquo;s standing as binding authority has also been challenged.
        United Policyholders and the Consumer Federation of America petitioned the California
        Supreme Court for depublication (case no. S289700) on the grounds that the Court of
        Appeal improperly analogized wildfire smoke to the COVID-19 virus and departed from
        settled California direct-physical-loss doctrine. The request was effectively denied
        &mdash; the opinion remains published &mdash; but denial of a depublication request
        is not an endorsement of the underlying reasoning (Cal. Rules of Court 8.1125(d)),
        and the California Department of Insurance&rsquo;s own bulletin treats{' '}
        <em>Gharibian</em> and <em>Bottega, LLC v. National Surety Corp.</em> (N.D. Cal.
        2025) as fact-specific decisions rather than as a categorical rule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Department saw carriers using these cases to justify denial letters that said, in
        effect, &quot;smoke damage is not covered, period.&quot; That is not what the law says.
        Whether your smoke damage claim is covered depends on your specific policy language and the
        facts of your loss — not a blanket rule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This bulletin also makes something else clear: it is the insurance company&apos;s job to
        investigate your smoke damage claim, not yours. If professional testing is needed, the
        insurer pays for it. They cannot deny your claim because you did not hire your own
        environmental consultant out of pocket.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Bulletin 2025-7
      </h2>

      <DocumentEmbed
        title="Insurance Coverage for Smoke Damage and Guidance for Proper Handling of Smoke Damage Claims for Properties Located in or near California Wildfire Areas"
        source="California Department of Insurance"
        date="March 7, 2025"
        type="bulletin"
        sourceUrl="https://www.insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/Bulletin-2025-7-Insurance-Coverage-for-Smoke-Damage-and-Guidance-for-Proper-Handling-of-Smoke-Damage-Claims-for-Properties-Located-in-or-near-California-Wildfire-Areas.pdf"
      >
        <p><strong>BULLETIN 2025-7</strong></p>
        <p>
          <strong>TO:</strong> All Property and Casualty Insurance Companies Handling Smoke Damage
          Claims for Residential and/or Commercial Properties Located in California Wildfire Areas
          and Other Interested Persons
        </p>
        <p><strong>FROM:</strong> Teresa Campbell, Deputy Commissioner and General Counsel</p>
        <p><strong>DATE:</strong> March 7, 2025</p>
        <p>
          <strong>RE:</strong> Insurance Coverage for Smoke Damage and Guidance for Proper Handling
          of Smoke Damage Claims for Properties Located in or near California Wildfire Areas
        </p>
        <p>
          This Bulletin states the California Department of Insurance&apos;s position on coverage
          for smoke damage claims in light of recent court cases and the Department&apos;s
          expectations with regard to how insurance companies process and pay smoke damage claims
          as a result of wildfires, including the recent Southern California wildfires.
        </p>
        <p><strong>Recent Cases Did Not Remove Coverage for Smoke Damage Claims</strong></p>
        <p>
          The Department is aware of recent cases interpreting &quot;direct physical loss of or
          damage to&quot; property, or similar insuring language, in the context of claims for
          smoke damage. These recent cases do not support the position that smoke damage is never
          covered as a matter of law. Rather, the California Supreme Court&apos;s decision in
          Another Planet confirms that smoke damage can be covered where a policy insures against
          &quot;direct physical loss of or damage to&quot; property, or substantially similar terms.
          The California Court of Appeal&apos;s holding in Gharibian is limited to the facts
          presented in that case, and therefore does not conflict with Another Planet. The
          Gharibian decision held that the plaintiffs&apos; smoke damage evidence was not
          sufficient to establish coverage based on the specific facts of plaintiffs&apos; claim,
          and should not be interpreted as supporting denial of coverage for smoke damage in all
          instances as a matter of law.
        </p>
        <p>
          Whether a particular claim for smoke damage is covered depends on the specific policy
          language and the unique facts of each claim. The Department will safeguard consumers by
          requiring insurers to handle smoke damage claims in compliance with all applicable laws,
          regulations, and best practices for remediation of smoke damage. This expectation applies
          to all insurance companies, including the California FAIR Plan.
        </p>
        <p><strong>Guidance to Insurers for Proper Handling of Smoke Damage Claims</strong></p>
        <p>
          The Department expects insurers handling smoke damage claims to comply with California
          Insurance Code provisions that govern claims settlement practices, including without
          limitation California Insurance Code section 790.03(h), and all other applicable laws
          and regulations. In particular, insurers must adopt and implement reasonable standards
          for processing smoke damage claims. Also, an insurer must make good faith efforts to
          effectuate prompt, fair, and equitable settlements of smoke damage claims where liability
          is reasonably clear. Further, section 2695.7(d) of the Fair Claims Settlement Practices
          Regulations requires every insurer to conduct and diligently pursue a thorough, fair,
          and objective investigation of a claim.
        </p>
        <p>
          According to the Los Angeles County Department of Public Health, fire debris and ash from
          wildfires may contain asbestos, heavy metals, chemicals, and other hazardous substances.
          Fire debris and ash also pose significant threats to public health through inhalation of
          dust particles and contamination of drinking water. The improper handling of fire debris
          and ash can expose residents to toxic materials and can spread hazardous substances
          throughout the community.
        </p>
        <p>
          Evidence that smoke has caused such damage to a policyholder&apos;s property must be
          fully and fairly investigated. When a policyholder makes a claim for smoke damage, the
          insurer is required to act reasonably and promptly, and to adopt and implement reasonable
          standards for the prompt investigation and processing of the claim. It is not reasonable
          to deny a smoke damage claim without conducting an appropriate investigation, nor is it
          reasonable for the insurer to require the insured to incur substantial costs to
          investigate their own claim. If professional testing is warranted for a specific claim,
          the Department expects the insurance company to contract and pay for these services. The
          Department has found that there are a number of low-cost, commercially available at-home
          test kits for asbestos and other smoke damage contaminants, and encourages insurers to
          consider the distribution of such kits to insureds as a reasonable first step in
          responding to and investigating certain smoke damage claims where professional testing
          may not be initially warranted. Depending on the results of such at-home test kits,
          additional investigation and processing may of course be warranted.
        </p>
        <p>
          The Department will be carefully monitoring how insurance companies handle smoke claims
          to ensure that all laws are complied with and that policyholders receive the full
          benefits owed under their insurance policies.
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Means for You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer denied your smoke damage claim — or told you smoke damage is not covered
        as a matter of law — they are wrong. The CDI has publicly stated that this position is
        not supported by the case law. A denial letter that says &quot;smoke is not direct physical
        loss&quot; without any investigation of your specific property is a violation of California
        Insurance Code section 790.03(h) and the Fair Claims Settlement Practices Regulations at
        10 CCR section 2695.7(d).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need to hire your own environmental consultant to prove your claim. The bulletin
        makes clear that the insurer must pay for professional testing if it is warranted. If they
        are demanding that you test at your own expense before they will even consider your claim,
        that is unreasonable under the regulations. Document everything in writing. If you already
        paid for testing out of pocket because the insurer refused to investigate, those costs
        should be part of your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI is watching. If your carrier is stonewalling you on smoke damage, file a{' '}
        <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
          complaint with the Department of Insurance
        </Link>. Reference Bulletin 2025-7 specifically in your complaint. The Department has said
        it will be &quot;carefully monitoring&quot; how insurers handle these claims, and a
        complaint on file gives them a reason to look at your carrier&apos;s practices.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Regulatory and Legislative Developments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bulletin 2025-7 is part of a broader California response to smoke-damage claims
        handling failures after the January 2025 Los Angeles wildfires. Two related
        developments to be aware of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CDI Smoke Claims and Remediation Task Force.</strong> Commissioner Lara
          convened this nine-month task force in May 2025 &mdash; comprising public-health
          experts, fire-safety experts, industrial hygienists, consumer advocates, and
          industry representatives &mdash; to develop science-based statewide standards for
          smoke-damage inspection, testing, and remediation. The task force released its
          report in March 2026.
        </li>
        <li>
          <strong>AB 1795 &mdash; The Smoke Damage Recovery Act</strong> (Asm. Mike Gipson,
          backed by Commissioner Lara). This proposed legislation would create the
          nation&rsquo;s first statewide framework for smoke-damage claims, including a
          30-day inspection deadline, insurer responsibility for the cost of California EPA-
          guided sampling and testing, ALE continuation until the property has been cleared,
          and uniform timelines for claim payments. As of mid-2026 the bill remains in the
          legislative process and has not been enacted; confirm current status before
          relying on its provisions.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Key Takeaways">
        <ul className="list-disc pl-4 space-y-1">
          <li>Smoke damage is coverable — carriers cannot deny it as a blanket rule.</li>
          <li>The insurer must investigate your claim at their expense, not yours.</li>
          <li>A denial without proper investigation violates California regulations.</li>
          <li>This applies to all carriers including the California FAIR Plan.</li>
          <li>File a CDI complaint if your insurer is not complying.</li>
        </ul>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Related Resources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] hover:underline">
            Smoke Damage Insurance Claims in California (umbrella article)
          </Link>
        </li>
        <li>
          <Link href="/resources/wildfire-smoke-physical-loss" className="text-[#2E74B5] hover:underline">
            Wildfire Smoke and &ldquo;Direct Physical Loss&rdquo;: The Coverage Debate
          </Link>
        </li>
        <li>
          <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] hover:underline">
            The Insurer&apos;s Duty to Investigate
          </Link>
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            Insurance Bad Faith in California
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
          <Link href="/resources/silica-contamination" className="text-[#2E74B5] hover:underline">
            Silica Contamination Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/asbestos-lead-claims" className="text-[#2E74B5] hover:underline">
            Asbestos and Lead Claims
          </Link>
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Smoke Damage Claim Denied or Underpaid?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurance company denied your smoke damage claim without a proper investigation,
          you may have grounds for a bad faith claim. A Public Adjuster can help ensure your
          carrier complies with Bulletin 2025-7 and the Fair Claims Settlement Practices.
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
