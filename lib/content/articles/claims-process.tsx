import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Insurance Claims Process Step by Step',
  description:
    'A complete walkthrough of the insurance claims process from filing your first notice of loss through settlement or dispute resolution.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing an insurance claim can feel overwhelming, especially when you are already dealing with
        damage to your home. Understanding the process from start to finish puts you in control and
        helps you avoid costly mistakes. Here is how the insurance claims process works, step by
        step.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 1: First Notice of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claims process begins when you notify your insurance company that a loss has occurred.
        This is called the &ldquo;first notice of loss&rdquo; or FNOL. You can typically file by
        phone, online, or through your agent. Report the loss as soon as possible. Under most
        policies, you have a duty to provide prompt notice, and unnecessary delays can give the
        insurer grounds to question your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file, keep it factual and brief. State what happened, when it happened, and the
        general nature of the damage. You do not need to provide a dollar estimate at this stage. Get
        your claim number and the name of the person you spoke with, and confirm everything in
        writing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 2: Assignment of an Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After you file, the insurance company assigns an adjuster to your claim. This is the
        company&rsquo;s adjuster, sometimes called a &ldquo;staff adjuster&rdquo; or an
        &ldquo;independent adjuster&rdquo; hired by the company. Despite the name, an independent
        adjuster works for and is paid by the insurer. Their job is to investigate the loss and
        determine how much the insurer should pay under the policy. Remember, they represent the
        insurance company, not you.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 3: Initial Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The assigned adjuster will schedule an inspection of your property. During this visit, they
        will assess the visible damage, take photos, and begin developing their scope of work. Be
        present for this inspection if at all possible. Walk the property with the adjuster and point
        out all areas of damage. If you notice something they miss, say so. Take your own photos and
        notes during the inspection for your records.
      </p>

      <CalloutBox variant="tip" title="Before the Inspection">
        <p>
          Do not make permanent repairs before the adjuster inspects. You may make temporary,
          emergency repairs to prevent further damage (like tarping a roof), but document everything
          with photos and keep all receipts.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 4: Documentation Phase
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the inspection, you enter the documentation phase. This is where you gather and submit
        evidence supporting your claim. Depending on the loss, this may include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Photographs and video of the damage</li>
        <li>Receipts and records of personal property</li>
        <li>Contractor estimates for repairs</li>
        <li>Inventory of damaged or destroyed contents</li>
        <li>Receipts for additional living expenses if you are displaced</li>
        <li>Police or fire department reports, if applicable</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Thorough documentation is the single most important factor in getting a fair settlement. The
        more organized and complete your evidence, the harder it is for the insurer to undervalue
        your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 5: Proof of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers will request a formal sworn proof of loss. This is a document where you state,
        under oath, the amount of your claimed loss and the circumstances surrounding it. If your
        insurer requests one, take it seriously and complete it carefully. In California, the proof of
        loss is not technically required even if the policy says so, but submitting one demonstrates
        good faith and keeps your claim moving.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 6: Estimate and Evaluation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s adjuster will prepare an estimate of the damage. This is the
        insurer&rsquo;s valuation of what it will cost to repair or replace the damaged property.
        Review this estimate carefully. Compare it to contractor estimates you have obtained
        independently. Common issues include missed line items, low material pricing, insufficient
        labor costs, and failure to account for code upgrades required by local building
        authorities.
      </p>

      <CalloutBox variant="warning" title="Do Not Accept the First Number">
        <p>
          The insurer&rsquo;s initial estimate is often a starting point, not a final offer. You have
          the right to negotiate, provide competing estimates, and challenge any line item you
          believe is incorrect.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 7: Negotiation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you disagree with the insurer&rsquo;s estimate, negotiation begins. This is a back and
        forth process where you present your evidence, the insurer presents theirs, and you work
        toward an agreed amount. Stay professional, stick to the facts, and put everything in
        writing. If the gap between your position and the insurer&rsquo;s position is significant,
        consider hiring a licensed Public Adjuster to represent you. Public Adjusters are licensed
        professionals who work exclusively for policyholders.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 8: Settlement or Dispute Resolution
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ideally, negotiation leads to an agreed settlement. The insurer issues payment and you begin
        repairs. But if you cannot reach an agreement, you have options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Appraisal:</strong> Most homeowner policies include an appraisal clause. Either
          party can invoke it. Each side selects an appraiser, the two appraisers select an umpire,
          and the panel determines the amount of loss. Appraisal resolves disputes over the dollar
          amount, not coverage questions.
        </li>
        <li>
          <strong>CDI Complaint:</strong> If the insurer has violated California&rsquo;s Fair Claims
          Settlement Practices Act, you can file a complaint with the California Department of
          Insurance.
        </li>
        <li>
          <strong>Litigation:</strong> When all else fails, you may need to pursue legal action. This
          can include breach of contract claims and, in some cases, bad faith claims against the
          insurer.
        </li>
      </ul>

      <CalloutBox variant="important" title="Do Not Wait Too Long">
        <p>
          Statutes of limitation apply to insurance claims. In California, you generally have two
          years from the date the claim is denied (or one year for some policy provisions). Consult
          with an attorney if you are approaching these deadlines.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The claims process rewards preparation, documentation, and persistence. Understanding each
        step before you need to take it gives you a significant advantage. If the process feels
        overwhelming, remember that licensed Public Adjusters exist specifically to guide
        policyholders through every phase of the claim.
      </p>
    </>
  )
}
