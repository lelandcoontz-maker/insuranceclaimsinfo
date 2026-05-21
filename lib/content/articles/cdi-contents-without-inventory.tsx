import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: 'Personal Property Claims Without a Full Inventory: What California Law Requires',
  description:
    'After a total loss in a declared disaster, California law requires insurers to pay at least 30% of dwelling limits for contents without requiring an itemized inventory. The CDI has repeatedly directed carriers to comply.',
  summary:
    'After a total loss in a declared disaster, California law requires insurers to pay at least 30% of the dwelling limit for contents without demanding an itemized inventory. The CDI has repeatedly directed carriers to honor this.',
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

      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, creating a room-by-room inventory of everything you owned is an
        overwhelming task. You are grieving, displaced, and trying to figure out where you are going
        to live next week. The last thing you can handle is sitting down and trying to remember every
        fork, every towel, every book on the shelf, every tool in the garage. Insurers know this. And
        some of them use it to their advantage by delaying contents payments until a detailed
        inventory is submitted — knowing that many policyholders will never complete one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law (Insurance Code section 10103.7[b]) requires insurers to offer at least 30%
        of the dwelling policy limit — up to a maximum of $250,000 — for personal property
        (contents) coverage <strong>without requiring an itemized inventory</strong>. The insurer
        must also notify you of this option when you file your claim. Many do not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has issued this notice after every major wildfire
        since 2017 because carriers keep &quot;forgetting&quot; this requirement exists. After the
        2017 North Bay fires, after the 2018 Camp Fire, after the 2020 fires, and again after the
        2025 Palisades and Eaton fires. Every time, the CDI has to remind insurers of a law that has
        been on the books for years. That pattern tells you everything you need to know about how
        seriously some carriers take voluntary compliance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many carriers have voluntarily paid 75% to 100% of contents limits without requiring an
        inventory — the CDI publishes which carriers comply and at what level. If your carrier is
        only offering 30%, know that their competitors are paying significantly more. And if your
        carrier is not offering anything without an inventory, they are violating California law.
      </p>

      <CalloutBox variant="tip" title="Key Numbers to Know">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>30% of dwelling limit</strong> — the minimum the insurer must offer for contents</li>
          <li><strong>$250,000 maximum</strong> — the cap on the no-inventory advance</li>
          <li><strong>No inventory required</strong> — you do not need to submit an itemized list</li>
          <li><strong>You can still file a full inventory later</strong> — this advance does not waive your right to claim the remaining contents coverage</li>
        </ul>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Notice on Contents Coverage Without Inventory
      </h2>

      <DocumentEmbed
        title="Personal Property (Contents) Coverage for Wildfire Claims"
        source="California Department of Insurance"
        date="October 2, 2020"
        type="notice"
        sourceUrl="https://insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/Notice-Personal-Property-Contents-Coverage-for-Wildfire-Claims.pdf"
      >
        <p>
          Due to the large scale of the 2020 California wildfires, many policyholders are overwhelmed
          by challenging personal matters ranging from seeking temporary housing, focusing on family
          and health issues, and addressing reconstruction of their replacement house, among other
          major adverse changes in their daily lives.
        </p>
        <p>
          The recent California wildfires, taken together, are the largest and most destructive fires
          in California history and have destroyed entire neighborhoods and devastated several
          communities. The California Department of Insurance (Department) has received numerous
          complaints from policyholders about the monumental task of identifying every item of
          personal property they may have lost in the recent wildfires to collect the replacement cost
          of such items.
        </p>
        <p>
          In an effort to assist survivors of the 2020 California wildfires, I request all admitted
          and non-admitted residential property insurers to, consistent with past practice, provide
          relief to policyholders who suffered a total loss in the recent California wildfires by
          waiving the requirement of completing a personal property inventory to collect all or a
          significant portion of their personal property (or contents) policy coverage limits. In the
          past few years, the Department has sent similar requests and most residential property
          insurance companies provided at least 75%, and up to 100%, of Contents (Personal Property)
          coverage limits without requiring the policyholder to complete the onerous task of preparing
          a detailed personal property inventory.
        </p>
        <p>
          On September 29, 2020, Governor Gavin Newsom signed SB 872 and AB 3012 that provide, among
          other things, protections for policyholders who suffered a covered total loss resulting from
          a wildfire state of emergency. Portions of AB 3012 will be effective on July 1, 2021 and
          will require residential property insurance companies to offer a payment under the Contents
          (personal property) coverage in an amount no less than 30% of the policy limit applicable
          to the covered dwelling structure, up to a maximum of two hundred fifty thousand dollars
          ($250,000), without requiring the policyholder to file an itemized personal property
          inventory. Although this provision in AB 3012 will not become effective until July 1, 2021,
          I request all residential property insurers, at a minimum, to offer current wildfire
          claimants this same option.
        </p>
        <p>
          I recognize and appreciate that many residential property insurers have already agreed to
          the Voluntary Expedited Claims Handling Procedures requested in my August 26, 2020 Notice.
          These expedited procedures include a request for an initial advance payment for personal
          property of at least 25% of contents policy limits when there is a total loss of the
          primary residence in a wildfire disaster, and a request to forgo requiring a detailed
          inventory of personal property.
        </p>
        <p>
          For past major wildfires, many insurers went beyond the Voluntary Expedited Claims Handling
          Procedures and made significant efforts to accommodate their policyholders by offering 75%,
          80%, or, in some cases, 100% of Contents limits without an inventory, with the ability to
          recover additional benefits if the policyholder subsequently completes a full inventory.
        </p>
        <p>
          I applaud the insurers that previously provided accommodations to their policyholders by
          providing the requested relief and request all other insurers to provide a similar
          accommodation or, at a minimum, the amount that will be required to be paid under AB 3012.
          This request applies to all policyholder homes that suffered a total loss, unless the
          insurer has reason to believe the home was not furnished.
        </p>
        <p>
          All residential property insurers are requested to advise the Department by October 23,
          2020 regarding whether they will comply with the requests in this Notice and what percentage
          of total contents coverage they will provide without requiring a detailed personal property
          inventory.
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Means for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was a total loss in a declared disaster and your insurer is telling you they
        need a detailed inventory before they will pay anything on your contents claim, they are
        violating California law. Here is what you should do:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the advance in writing immediately.</strong> Cite California Insurance Code
          section 10103.7(b) by name. State that your primary dwelling was a total loss in a declared
          disaster, that the residence was furnished, and that you are requesting the contents advance
          payment without an inventory.
        </li>
        <li>
          <strong>Ask what percentage they will pay.</strong> The legal minimum is 30%, but most
          carriers have historically paid 75% or more. Ask your insurer directly what percentage they
          are offering and reference the CDI notice showing that their competitors paid higher amounts.
        </li>
        <li>
          <strong>Confirm they notified you of this option.</strong> The law requires the insurer to
          notify you of the right to receive this advance payment. If they did not, document that
          failure — it strengthens any subsequent CDI complaint.
        </li>
        <li>
          <strong>Set a deadline for payment.</strong> A reasonable demand period is 10 to 15 business
          days. Under the Fair Claims Settlement Practices regulations, the insurer cannot unreasonably
          delay payment on an undisputed claim.
        </li>
        <li>
          <strong>File a CDI complaint if they refuse.</strong> The Department of Insurance has
          specifically directed carriers to comply with this requirement. If your carrier ignores your
          written request, file a complaint at{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            insurance.ca.gov
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="warning" title="You Should Still Do Your Inventory">
        <p>
          The 30% advance (or whatever percentage your carrier agrees to pay) is the minimum — not
          your maximum recovery. Most homeowners have far more than 30% of their dwelling limit in
          personal property. A typical household contains $60,000 to $150,000 or more in contents at
          replacement cost, and larger homes can easily exceed $200,000. You are entitled to claim up
          to your full contents policy limit by filing a detailed inventory later. Do not leave money
          on the table by treating the advance as your final payment.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Related Resources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
            Contents Claims Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/contents-inventory-guide" className="text-[#2E74B5] hover:underline">
            Personal Property Inventory Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/sb49-contents-rule" className="text-[#2E74B5] hover:underline">
            SB 495: California&apos;s New Contents Payment Rule
          </Link>
        </li>
        <li>
          <Link href="/resources/cdi-advance-payments" className="text-[#2E74B5] hover:underline">
            Advance Payments After a Wildfire
          </Link>
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is Your Carrier Refusing to Pay Without an Inventory?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can ensure your carrier complies with California law and pays the
          contents advance you are owed. If your insurer is requiring a detailed inventory before
          releasing any funds, we can help.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review
        </Link>
      </div>
    </>
  )
}
