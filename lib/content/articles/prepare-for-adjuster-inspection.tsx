import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Adjuster Is Coming to My House — How to Prepare',
  description:
    'What to have ready, what to show, what to say, and what NOT to sign when the insurance adjuster inspects your property damage.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster&rsquo;s inspection is one of the most important moments in your claim. What
        they see, document, and write in their report directly determines your initial payment. You
        get one shot at a first impression. This guide helps you make it count.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster works for the insurance company. They may be a staff adjuster (a company
        employee) or an independent adjuster (a contractor hired by the company). Either way, their
        job is to evaluate the damage and write an estimate. Your job is to make sure they see
        everything.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Before the Inspection: Your Preparation Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start preparing the moment you schedule the appointment. Here is what to have ready:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Your damage list:</strong> Write down every area of damage you have found, room by
          room, exterior area by exterior area. Do not rely on memory during the inspection. You will
          forget things.
        </li>
        <li>
          <strong>Photos and video:</strong> Have your documentation organized and accessible on your
          phone or tablet. You will reference these during the walkthrough.
        </li>
        <li>
          <strong>Access to all damaged areas:</strong> Clear paths to attics, crawl spaces, closets,
          and any area with damage. Move furniture away from damaged walls. If the adjuster cannot
          reach it, they will not document it.
        </li>
        <li>
          <strong>Your policy declarations page:</strong> Know your coverage limits, deductible, and
          any endorsements that apply to your loss.
        </li>
        <li>
          <strong>Contractor estimates (if you have them):</strong> If a contractor has already looked
          at the damage, bring their written estimate. This gives the adjuster a reference point.
        </li>
        <li>
          <strong>A notepad or your phone for notes:</strong> Write down everything the adjuster says
          during the inspection.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Record the Inspection">
        <p>
          In California, you have the right to record your own conversations as long as you are a
          party to the conversation (Cal. Penal Code Section 632 allows one-party consent for
          recordings where you are a participant). Tell the adjuster you are recording. If they
          object, note that objection, but you are within your rights. A recording protects you from
          &ldquo;I never said that&rdquo; disputes later. See our{' '}
          <Link href="/resources/recording-insurance-inspections" className="text-blue-700 underline hover:text-blue-900">
            guide to recording inspections
          </Link>{' '}
          for details.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Show the Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not let the adjuster wander your property alone. Walk with them. Lead the tour. Show them
        every item on your damage list. Adjusters are human. They work fast. They handle dozens of
        claims simultaneously. If you do not point something out, there is a real chance they will
        miss it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Things adjusters commonly miss or minimize:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Damage behind furniture or inside cabinets</li>
        <li>Moisture in walls that is not yet visible on the surface</li>
        <li>Attic damage and insulation contamination</li>
        <li>Crawl space issues</li>
        <li>Garage and outbuilding damage</li>
        <li>Landscaping, fencing, and hardscape damage</li>
        <li>Matching issues (where undamaged areas must be replaced to match repaired areas)</li>
        <li>Code upgrade requirements triggered by the repair scope</li>
        <li>Contents damage in rooms they did not enter</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Point to specific damage. Say, &ldquo;This crack runs from the ceiling to the floor and was
        not here before the loss. Here is a photo from last month showing this wall intact.&rdquo;
        Be specific and factual.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Say During the Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be honest, direct, and concise. Stick to facts. Good phrases:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>&ldquo;This damage was not here before the [loss event].&rdquo;</li>
        <li>&ldquo;I first noticed this on [date].&rdquo;</li>
        <li>&ldquo;I have photos from before the loss showing this area undamaged.&rdquo;</li>
        <li>&ldquo;My contractor said this will require [specific repair].&rdquo;</li>
        <li>&ldquo;Can you explain what you are writing down?&rdquo;</li>
        <li>&ldquo;I want to make sure you document [specific area] before we move on.&rdquo;</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For guidance on handling adjuster phone conversations, see our{' '}
        <Link href="/resources/what-to-say-adjuster-calls" className="text-blue-700 underline hover:text-blue-900">
          guide on what to say when the adjuster calls
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What NOT to Say
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Avoid these common mistakes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not speculate about causes.</strong> If you say &ldquo;I think the pipe was
          old,&rdquo; you just gave the insurer an argument for pre-existing damage. Stick to what
          happened: &ldquo;Water was coming through the ceiling on [date].&rdquo;
        </li>
        <li>
          <strong>Do not minimize damage.</strong> Avoid phrases like &ldquo;it&rsquo;s not that
          bad&rdquo; or &ldquo;it could be worse.&rdquo; The adjuster may quote you.
        </li>
        <li>
          <strong>Do not agree to a scope on the spot.</strong> If the adjuster says &ldquo;I think
          we&rsquo;re looking at a patch and paint here,&rdquo; do not nod along unless you agree.
          Say, &ldquo;I&rsquo;ll wait to see the written estimate before I comment on scope.&rdquo;
        </li>
        <li>
          <strong>Do not discuss policy limits or deductibles.</strong> Let the adjuster do their job
          of documenting damage. Settlement discussions come later.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do NOT Sign Anything at the Inspection">
        <p>
          The adjuster may ask you to sign a &ldquo;scope agreement,&rdquo; an authorization form,
          or a direction-to-pay document. Do not sign anything at the inspection. Ask for a copy to
          review. You have the right to read any document before signing. Any form that limits your
          rights or locks in a scope of repairs should be reviewed carefully, and ideally by a{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-blue-700 underline hover:text-blue-900">
            public adjuster
          </Link>{' '}
          or attorney, before you sign.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Questions to Ask the Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspection is your opportunity to gather information. Ask:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>What is your timeline for sending me the written estimate?</li>
        <li>How do I submit additional damage I find after today?</li>
        <li>Will you be the adjuster handling this claim going forward, or will it transfer?</li>
        <li>Are you recommending any further inspections (engineer, hygienist, etc.)?</li>
        <li>How are you handling [specific area] in your scope?</li>
        <li>What is the process if my contractor&rsquo;s estimate differs from yours?</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Write down their answers. If they say &ldquo;we&rsquo;ll take care of it,&rdquo; ask what
        that means specifically and note the response.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After the Inspection: Follow Up in Writing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Within 24 hours of the inspection, send the adjuster an email summarizing what happened.
        This creates a written record. Include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The date and time of the inspection</li>
        <li>The areas you showed them</li>
        <li>Any statements they made about scope or coverage</li>
        <li>Any areas they said they would follow up on</li>
        <li>Any additional damage you pointed out that they initially overlooked</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        End with: &ldquo;Please confirm receipt and let me know if I&rsquo;ve missed anything from
        our discussion.&rdquo; This email becomes part of your claim file and protects you if the
        adjuster later claims they did not see certain damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What If the Adjuster Misses Damage?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It happens constantly. When you receive the estimate, compare it against your damage list.
        If items are missing, you have the right to request a re-inspection or submit a supplement.
        Under California&rsquo;s Fair Claims Settlement Practices Regulations (10 CCR 2695.7), the
        insurer must provide a written explanation for any items they exclude from their estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not accept an incomplete estimate. Your first week after receiving it is critical for
        identifying gaps and pushing back. See our{' '}
        <Link href="/resources/first-week-of-claim" className="text-blue-700 underline hover:text-blue-900">
          first week of your claim guide
        </Link>{' '}
        for the next steps.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Situations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Multiple adjusters:</strong> On large losses, you may see a building adjuster, a
        contents adjuster, and possibly a specialist (engineer, hygienist). Keep track of who is
        responsible for what. Get business cards and direct contact information for each.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Adjuster wants to bring a contractor:</strong> The insurer&rsquo;s preferred vendor
        is not your contractor. They may bring their own restoration company or roofer to look at
        the damage. You are not obligated to use them. Let them look, but remember: their contractor
        works for the insurer&rsquo;s interests, not yours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Tenant vs. landlord inspections:</strong> If you are a tenant, your landlord&rsquo;s
        insurer may inspect the building damage while your renter&rsquo;s insurer inspects your
        personal property. Coordinate schedules but understand these are separate claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The inspection is not the end of the process. It is the beginning. What matters most is what
        happens after: the estimate they write, the negotiations that follow, and your willingness
        to push back when the numbers do not add up. Being prepared for the inspection puts you in
        the strongest possible position for everything that comes next.
      </p>
    </>
  )
}
