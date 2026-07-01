import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Drone and Satellite Surveillance by Insurance Companies",
  description:
    "How insurers use drone and satellite imagery to assess roofs, spot hazards, and non-renew policies, often without notice, plus how to challenge aerial findings.",
  summary:
    'Insurers increasingly use drone and satellite imagery to inspect roofs and find hazards, sometimes driving non-renewals without your knowledge. Aerial findings can be inaccurate, and you have the right to see and challenge them.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies are watching from above &mdash; and most policyholders have no idea.
        Over the past several years, insurers have dramatically expanded their use of drone
        photography, satellite imagery, and aerial analytics to assess properties without ever
        setting foot on the premises. What was once a niche technology used for catastrophe response
        has become a routine part of underwriting, renewal decisions, and claims investigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders, this shift raises serious questions about accuracy, fairness, and
        transparency. Homes are being non-renewed based on aerial photographs that the policyholder
        never sees. Roofs are being rated as damaged based on images taken from hundreds or
        thousands of feet away. And claims are being disputed based on pre-loss aerial imagery
        that the insurer obtained without the policyholder&rsquo;s knowledge.
      </p>

      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article provides general information about how insurers use aerial surveillance
          technology. It is not legal advice. Insurance regulations regarding surveillance and
          non-renewal vary by state. If aerial imagery has been used to deny a claim or non-renew
          a policy, consult with a licensed attorney or Public Adjuster in the applicable
          jurisdiction.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurers Use Aerial Imagery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurer use of aerial technology falls into several categories, each with different
        implications for policyholders:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Roof Condition Assessment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most widespread use of aerial imagery is{' '}
        <Link href="/resources/roof-damage" className="text-[#2E74B5] underline">
          roof condition assessment
        </Link>
        . Insurers contract with aerial analytics companies that fly drones or use satellite and
        fixed-wing aircraft imagery to photograph residential roofs across entire regions. The
        images are then analyzed &mdash; often by AI systems &mdash; to identify signs of
        deterioration: missing shingles, moss growth, curling or cupping, granule loss, ponding
        water, and structural sagging.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Based on this analysis, the insurer may assign the roof a condition score. That score
        can influence whether the policy is renewed, what deductible applies, or whether coverage
        is offered at all. In many cases, the policyholder is never informed that the assessment
        took place until a non-renewal notice arrives.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Property Hazard Identification
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond roofs, aerial imagery is used to identify property-level hazards: overgrown
        vegetation near the structure, debris accumulation, trampolines, swimming pools without
        fences, detached structures in poor condition, and properties located in wildfire-prone
        brush areas. Insurers use this information for both underwriting new policies and evaluating
        whether to continue existing ones.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        NPR and other news organizations have reported on insurers using aerial scanning to
        evaluate roofs across Texas and other states, issuing non-renewals to homeowners who had
        no prior claims and no notice that their property was being inspected. Policyholders
        received non-renewal letters citing &ldquo;roof condition&rdquo; without any on-site
        inspection having been conducted.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Claims Investigation Surveillance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim is filed, insurers may review historical aerial imagery to compare the
        property&rsquo;s condition before and after the claimed loss. If satellite imagery from
        before the loss date shows pre-existing roof damage, the insurer may argue that the damage
        predates the covered event. This use of aerial imagery in claims is distinct from the
        pre-underwriting surveillance described above, and it raises different legal issues regarding
        the admissibility and reliability of the images.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Scale of Adoption: FAA Approvals and Industry Growth
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The scale of drone operations has expanded dramatically. FAA Beyond Visual Line of Sight
        (BVLOS) approvals &mdash; which allow drones to fly extended distances without a pilot
        maintaining visual contact &mdash; surged from approximately 1,229 in 2020 to 26,870 in
        2023. The insurance industry is one of the largest commercial users of drone technology,
        alongside agriculture and infrastructure inspection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This growth means aerial surveillance of residential properties is no longer an occasional
        tool deployed after major catastrophes. It is a systematic, ongoing practice that affects
        millions of policyholders every year. Major insurers have partnered with or invested in
        aerial analytics firms, embedding the technology directly into their underwriting and claims
        workflows.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Accuracy Concerns: When the View From Above Is Wrong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental problem with aerial-based property assessment is accuracy. Images taken
        from altitude &mdash; whether by drone, satellite, or fixed-wing aircraft &mdash; have
        inherent limitations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Resolution limitations.</strong> Satellite imagery, in particular, may lack the
          resolution needed to accurately assess roof condition. What appears as roof deterioration
          from above may be discoloration, lichen, leaf debris, or shadow. Conversely, significant
          damage in small areas may not be visible at lower resolutions.
        </li>
        <li>
          <strong>Seasonal and weather-related distortions.</strong> Images taken after autumn leaf
          fall may show debris on a roof that is not a permanent condition. Snow coverage can obscure
          damage or create shadows that mimic structural problems. Wet roofs reflect light
          differently than dry roofs, potentially leading to misidentification of conditions.
        </li>
        <li>
          <strong>Angle and perspective issues.</strong> Aerial images capture roofs from directly
          above or at oblique angles. Neither perspective reveals what a ground-level inspection
          would show: the condition of flashing, the state of gutters and downspouts, the integrity
          of sealant around penetrations, or damage visible only from certain angles.
        </li>
        <li>
          <strong>AI misidentification.</strong> When aerial images are processed by automated
          analysis software, the system may misidentify normal roof features as damage. HVAC
          equipment shadows, roof vents, skylights, and normal color variation have all been
          reported as false positives in automated roof assessment systems.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Aerial Images Are Not Inspections">
        <p>
          An aerial photograph &mdash; no matter how high the resolution &mdash; is not a
          substitute for a physical inspection by a qualified roofing professional. It cannot
          assess the underlayment condition, measure remaining shingle life, identify leaks, or
          evaluate the structural integrity of the roof deck. Policyholders who receive adverse
          decisions based on aerial imagery should insist on a ground-level inspection before
          accepting the insurer&rsquo;s characterization.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Non-Renewal Based on Aerial Findings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most concerning uses of aerial imagery is as the sole basis for{' '}
        <Link href="/resources/nonrenewal-cancellation" className="text-[#2E74B5] underline">
          policy non-renewal
        </Link>
        . Homeowners who have maintained continuous coverage for years, with no claims history and
        no complaints, have received non-renewal notices citing roof condition identified through
        aerial assessment. In many of these cases, the policyholder had no opportunity to dispute
        the findings, arrange for repairs, or even see the images the insurer relied upon before
        the non-renewal decision was final.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This practice is particularly harmful in areas where the insurance market is already
        stressed. A homeowner non-renewed by one insurer based on an aerial roof assessment may
        find that the same aerial data has been shared with or independently obtained by other
        insurers, making it difficult to find replacement coverage at any price. The alternative
        may be the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan
        </Link>{' '}
        or other market of last resort, at significantly higher premiums with reduced coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pre-Underwriting vs. Claims Investigation Surveillance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers use aerial surveillance in two primary contexts:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Pre-underwriting and renewal surveillance</strong> occurs before or during the
        policy period, as the insurer evaluates whether to issue, renew, or modify coverage. This
        type of surveillance is proactive &mdash; the insurer is assessing risk, not investigating
        a specific claim. The legal framework governing this use relates primarily to underwriting
        fairness, non-renewal notification requirements, and the policyholder&rsquo;s right to
        dispute adverse underwriting decisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Claims investigation surveillance</strong> occurs after a loss has been reported.
        The insurer may use aerial imagery to establish pre-loss conditions, compare damage before
        and after the loss date, or assess the extent of damage. This type of surveillance is
        directly relevant to the claims process and implicates{' '}
        <Link href="/resources/recording-insurance-inspections" className="text-[#2E74B5] underline">
          inspection rights
        </Link>
        , evidence standards, and the insurer&rsquo;s duty to conduct a fair investigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters because the legal rules, the policyholder&rsquo;s rights, and
        the available remedies differ depending on the context. A non-renewal based on a flawed
        aerial assessment is challenged differently than a claim denial supported by pre-loss
        satellite imagery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Consumer Rights: How to Challenge Aerial Findings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who receive adverse decisions based on aerial imagery have several avenues
        for challenge:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Demand the Images and Analysis
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The first step is to request &mdash; in writing &mdash; copies of the actual aerial images
        the insurer relied upon and any analysis or scoring derived from those images. If the
        insurer used a third-party aerial analytics firm, request the name of that firm and the
        specific report. The policyholder cannot effectively dispute findings without seeing the
        evidence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Obtain an Independent Roof Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hire a licensed roofing contractor or inspector to conduct a physical, ground-level
        inspection of the{' '}
        <Link href="/resources/roof-damage" className="text-[#2E74B5] underline">roof</Link>.
        The inspection report should include detailed photographs, measurements, and a professional
        assessment of the roof&rsquo;s actual condition. If the aerial assessment identified
        conditions that the physical inspection does not confirm, the independent report provides
        concrete evidence that the aerial findings were inaccurate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Request Re-Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Formally request that the insurer conduct an on-site inspection before making or
        maintaining any adverse decision. Many states require insurers to offer an opportunity
        for re-inspection before finalizing a non-renewal based on property condition. Even where
        this is not explicitly required, making the request in writing creates a record of the
        insurer&rsquo;s refusal to verify its own findings.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Challenge Non-Renewals Based on Flawed Data
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the aerial findings are demonstrably inaccurate &mdash; for example, if the images
        show debris that has since been cleared, or if the roof has been repaired or replaced
        since the images were taken &mdash; challenge the non-renewal with documentation of the
        current condition. Provide before-and-after photographs, contractor invoices for repairs,
        and any independent inspection reports.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        File a Regulatory Complaint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer refuses to reconsider an adverse decision based on inaccurate aerial
        findings, a complaint to the state insurance department is appropriate. Regulators are
        increasingly aware of the accuracy concerns surrounding aerial assessments and may
        intervene, particularly when the insurer refused to conduct a physical inspection or
        failed to provide the images to the policyholder.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Protections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California provides several protections relevant to aerial surveillance in insurance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Non-renewal notice requirements.</strong> California Insurance Code &sect;
          678(c)(1) requires the insurer to give at least 75 days&rsquo; advance written notice
          of non-renewal for residential property insurance policies expiring on or after July 1,
          2020. The non-renewal notice must state the reasons for the decision, giving the
          policyholder an opportunity to respond. Wildfire-related non-renewals do not have a
          separate (shorter) notice rule &mdash; they are governed by the moratorium framework
          in Insurance Code &sect; 675.1, which prohibits cancellation or non-renewal for one
          year on residential policies for properties within or adjacent to a fire perimeter
          after a Governor-declared state of emergency, and requires insurers to offer renewal
          for at least two annual renewal periods after a total loss from a declared disaster.
        </li>
        <li>
          <strong>Right to request inspection.</strong> Policyholders who receive non-renewal
          notices based on property condition have the right to request that the insurer conduct
          an actual on-site inspection rather than relying solely on remote assessment.
        </li>
        <li>
          <strong>CDI complaint process.</strong> The California Department of Insurance accepts
          complaints regarding unfair non-renewal practices, including those based on inaccurate
          or unverified aerial assessments.
        </li>
        <li>
          <strong>Fair Claims Settlement Practices Regulations.</strong> When aerial imagery is
          used in claims investigation, the insurer must still comply with California&rsquo;s
          Fair Claims Settlement Practices Regulations, which require thorough investigation,
          good faith evaluation, and fair dealing. Reliance on inaccurate aerial imagery that
          results in a claim denial or underpayment may constitute a violation of these
          regulations.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself: Practical Steps
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document your property proactively.</strong> Maintain dated photographs of
          your roof and property exterior. Annual documentation creates a record that can
          counter inaccurate aerial assessments.
        </li>
        <li>
          <strong>Maintain your roof.</strong> Address minor repairs promptly and keep
          documentation of all maintenance. A professional roof inspection report showing good
          condition is powerful evidence against an adverse aerial finding.
        </li>
        <li>
          <strong>Respond immediately to any non-renewal notice.</strong> Do not accept a{' '}
          <Link href="/resources/nonrenewal-cancellation" className="text-[#2E74B5] underline">
            non-renewal
          </Link>{' '}
          based on aerial findings without challenging it. Request the images, obtain an
          independent inspection, and respond in writing within the notice period.
        </li>
        <li>
          <strong>Know your state&rsquo;s notification requirements.</strong> Understand what
          your state requires the insurer to disclose when non-renewing a policy, including
          whether the insurer must identify the data sources it relied upon.
        </li>
        <li>
          <strong>Consider consulting a licensed Public Adjuster or attorney.</strong> If an
          aerial assessment is being used to deny a claim or non-renew a policy, professional
          help can make a significant difference in the outcome.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Insurer&rsquo;s View Is Not the Final Word">
        <p>
          Aerial imagery is a tool, not a verdict. It provides one perspective &mdash; literally
          &mdash; on a property&rsquo;s condition. It cannot replace a physical inspection, it
          cannot account for context that is not visible from above, and it is frequently wrong.
          When an insurer relies on aerial imagery to make an adverse decision, the policyholder
          has every right to challenge that decision with better evidence.
        </p>
      </CalloutBox>
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
