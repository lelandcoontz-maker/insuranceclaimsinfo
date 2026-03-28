import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Fair Claims Settlement Practices Act',
  description:
    'A plain-English guide to the California Fair Claims Settlement Practices Act, the regulations that protect policyholders during the insurance claims process.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is the Fair Claims Settlement Practices Act?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Act is a set of regulations found in
        Title 10, Chapter 5, Subchapter 7.5 of the California Code of Regulations. It exists for one
        reason: to make sure insurance companies treat policyholders fairly after a loss. These
        regulations set minimum standards for how insurers must investigate, evaluate, and settle
        claims. If your insurer is dragging its feet, lowballing your claim, or refusing to
        communicate, these rules are your leverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulations are enforced by the California Department of Insurance (CDI). When an insurer
        violates them, the CDI can impose fines and corrective action. More importantly for you as a
        policyholder, documented violations strengthen your position in any dispute, whether
        you&rsquo;re negotiating with the carrier, filing a CDI complaint, or pursuing bad faith
        litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Protections You Should Know
      </h2>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Timelines That Bind Your Insurer</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful aspects of the Fair Claims Act is the strict timelines it imposes on
        insurers. Your insurance company must acknowledge your claim within 15 calendar days of
        receiving notice. Within that same period, they must provide you with the necessary claim
        forms and instructions. Once you submit a proof of loss or other documentation, the insurer
        has 40 calendar days to accept or deny the claim. If they need more time, they must notify
        you in writing every 30 days explaining why the delay exists and what additional information
        they need.
      </p>

      <CalloutBox variant="legal" title="The 40-Day Rule">
        <p>
          Under California Code of Regulations Section 2695.7(b), once all documentation is in, the
          insurer has 40 days to make a decision. Every day past that deadline is a potential
          regulatory violation. Keep a log of when you submit documents so you can track this
          timeline.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Communication Requirements</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers cannot simply go silent on your claim. The regulations require them to respond to
        your communications within 15 days. If your adjuster is not returning calls or emails, that
        is a violation. Every denial, whether partial or full, must be in writing and must explain the
        specific policy language or factual basis for the decision. Vague denials like
        &ldquo;insufficient documentation&rdquo; without specifying exactly what is missing do not
        meet the standard.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Investigation Standards</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer must conduct a thorough and fair investigation before making a claims decision.
        They cannot deny a claim based on incomplete information when they had the ability to obtain
        that information themselves. They must disclose all benefits, coverages, and time limits that
        may apply to your claim. If multiple coverages apply, the insurer must inform you of each
        one, not just the one they feel like paying.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Use These Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing the rules is only useful if you put them to work. Here is how:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document everything.</strong> Keep a written log of every phone call, email, and
          letter. Note the date, time, who you spoke with, and what was discussed. This creates the
          evidence trail you need if the insurer violates the regulations.
        </li>
        <li>
          <strong>Communicate in writing.</strong> Follow up every phone conversation with an email
          summarizing what was discussed. This eliminates &ldquo;he said, she said&rdquo; disputes
          later.
        </li>
        <li>
          <strong>Cite the regulations.</strong> When your insurer misses a deadline or fails to
          communicate, reference the specific regulation in your correspondence. A letter that says
          &ldquo;Per CCR Section 2695.5(e), you are required to respond within 15 days&rdquo; carries
          more weight than a general complaint.
        </li>
        <li>
          <strong>Escalate when necessary.</strong> If the insurer is not complying, file a complaint
          with the California Department of Insurance. The CDI takes these violations seriously, and
          a complaint often accelerates the claims process.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Public Adjuster Advantage">
        <p>
          A licensed Public Adjuster is trained to identify Fair Claims Act violations in real time
          and use them as leverage during negotiations. If you feel overwhelmed by the process,
          professional representation can make a significant difference.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Full Regulatory Reference
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article provides a conversational overview of the Fair Claims Act and how it protects
        you. For a complete, section-by-section breakdown of every regulation, including the exact
        language and requirements, visit our{' '}
        <Link href="/regulations" className="text-blue-700 underline hover:text-blue-900">
          California Insurance Regulations Reference
        </Link>
        . That page is designed as a lookup tool you can use when you need to cite a specific rule in
        your correspondence with your insurer.
      </p>

      <CalloutBox variant="important" title="Know Your Rights">
        <p>
          Insurance companies have teams of adjusters, attorneys, and consultants working on their
          side. The Fair Claims Settlement Practices Act exists to level the playing field. Learn it,
          use it, and do not let your insurer ignore it.
        </p>
      </CalloutBox>
    </>
  )
}
