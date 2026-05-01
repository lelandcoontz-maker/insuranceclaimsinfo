import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Deal with the Insurance Company\'s Adjuster',
  description:
    'What to expect when the insurer sends their adjuster, your rights during the inspection, common tactics to watch for, and when to get professional help.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file an insurance claim, the insurance company sends <em>their</em> adjuster to
        evaluate your loss. This person works for the insurer, not for you. They may be a staff
        adjuster — a full-time employee of the company — or an independent adjuster hired as a
        contractor. Either way, their job is to assess your claim on behalf of the company that is
        paying them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not automatically make them your adversary. Many adjusters are fair, professional,
        and competent. But you need to understand the dynamic. They are not your advocate. Their
        employer has a financial interest in the outcome of your claim. Knowing this, and knowing your
        rights, will put you in a much stronger position from day one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Adjusters You May Encounter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all adjusters are the same. Understanding who you are dealing with helps you calibrate
        your expectations and your approach.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Staff adjusters</strong> are full-time employees of the insurance company. They are
          salaried, handle claims as their daily job, and typically have access to the company&rsquo;s
          internal systems and authority structures. They know the company&rsquo;s standard practices because
          they work inside it every day.
        </li>
        <li>
          <strong>Independent adjusters (IAs)</strong> are contractors hired by the insurer, especially
          after catastrophes and disasters when claim volume overwhelms the company&rsquo;s staff.
          IAs are often paid per file or by the hour. They may be less familiar with your specific
          type of loss, and their sheer workload after a disaster can result in rushed inspections.
        </li>
        <li>
          <strong>Desk adjusters</strong> handle claims remotely and never visit the property. They
          review photos, documents, and estimates from behind a screen. This is increasingly common
          in the industry, and it is a major red flag for complex claims. At a May 2025 Senate
          Homeland Security subcommittee hearing, testimony described how one major insurer has
          turned field adjusters into &ldquo;picture takers and estimate writers&rdquo; who submit
          their work to desk reviewers who approve or deny claims and dictate revisions — without
          ever visiting the property. Allstate&apos;s own executive acknowledged at the same
          hearing that 27% of field adjuster estimates were reduced through desk review, while only
          9% were increased. A desk adjuster cannot see what they do not look for, and they cannot
          look for what they are not physically present to find.
        </li>
        <li>
          <strong>Public adjusters</strong> work for <em>you</em>, the policyholder. They are licensed
          separately from company adjusters and are retained by the homeowner, not the insurer. A
          public adjuster advocates for your interests, prepares your claim, and negotiates directly
          with the insurance company on your behalf. This is what I do.{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Learn more about working with a Public Adjuster
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Rights When Dealing with the Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have more rights than most policyholders realize. Know them before the adjuster arrives.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You have the right to be present during inspections.</strong> Do not let anyone tell
          you otherwise. It is your property and your claim.
        </li>
        <li>
          <strong>You have the right to have your own representative present</strong> — a public
          adjuster, an attorney, or a contractor of your choosing. The insurer cannot exclude them.
        </li>
        <li>
          <strong>You have the right to record conversations.</strong> California is a two-party
          consent state, which means you must inform the adjuster that you are recording. Once you do,
          they cannot refuse to speak with you solely because you are recording. And the recording
          protects you both.
        </li>
        <li>
          <strong>You have the right to request the adjuster&rsquo;s name, license number, and the
          entity they work for.</strong> Get this information at the start of every interaction. Write
          it down.
        </li>
        <li>
          <strong>You have the right to a copy of the adjuster&rsquo;s estimate and all
          claim-related documents.</strong> Under 10 CCR 2695.7(d), the insurer must provide a written
          explanation for any denial or partial payment. The California Department of Insurance (CDI)
          notice of rights also requires that you be told what additional documentation, if any, is
          needed and what your rights are under the policy.
        </li>
        <li>
          <strong>You do NOT have to accept their first offer.</strong> The initial estimate is a
          starting point, not a final answer. You have every right to dispute it.
        </li>
        <li>
          <strong>You do NOT have to sign anything on the spot.</strong> Any document the adjuster
          asks you to sign can be taken home, reviewed, and discussed with your own representative
          before you commit.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Get It in Writing">
        <p>
          If the adjuster tells you something verbally — that a particular damage is covered, that
          they will send a supplement, that additional payment is coming — follow up with an email
          confirming what was said. If it is not in writing, it did not happen.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do Before the Adjuster Arrives
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The work you do before the inspection is just as important as what happens during it.
        Preparation is the difference between a policyholder who gets pushed around and one who
        drives the process.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document everything yourself first.</strong> Walk every room, every exterior wall,
          every attic space, every crawlspace. Take photos and videos with timestamps. Measure
          affected areas. Create your own written record of every area of damage you can identify.
        </li>
        <li>
          <strong>Make a written list of all damage you have identified.</strong> This is your
          roadmap for the inspection. You will use it to make sure the adjuster sees everything.
        </li>
        <li>
          <strong>Have your policy available.</strong> Know your coverages, your limits, and your
          deductible. If you do not understand something in your policy, that is fine — but know
          what is in there so you can ask informed questions.
        </li>
        <li>
          <strong>Secure the property but do NOT begin permanent repairs.</strong> You have a duty
          to mitigate further damage (board up broken windows, tarp the roof, stop the water), but
          you should not start permanent reconstruction until the insurer has had an opportunity to
          inspect. Keep all receipts for any emergency repairs.
        </li>
        <li>
          <strong>Keep all damaged items if possible.</strong> The insurer has the right to inspect
          damaged personal property. Do not throw anything away until the adjuster has had a chance
          to see it and you have documented it thoroughly.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        During the Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspection is the single most important event in the early life of your claim. What the
        adjuster documents (and what they miss) will shape the entire trajectory of your settlement.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Walk the property WITH the adjuster.</strong> Do not let them inspect alone. You
          need to be there to point out damage, answer questions, and see what they are (and are not)
          looking at.
        </li>
        <li>
          <strong>Point out ALL damage</strong>, including areas that are not immediately obvious —
          behind walls, in attics, under flooring, inside cabinets, on the backside of the house.
          If you do not point it out, there is a good chance they will not find it.
        </li>
        <li>
          <strong>Take notes on what they examine and what they skip.</strong> If the adjuster never
          goes in the attic, never looks behind the drywall, or never opens certain rooms, document
          that. It matters later.
        </li>
        <li>
          <strong>Ask questions.</strong> What are they including in their scope? What are they
          excluding? Why? You do not need to argue on the spot, but you need to understand what
          they are documenting and what they are leaving out.
        </li>
        <li>
          <strong>Be honest but do not volunteer information that was not asked.</strong> Answer
          questions truthfully and completely. But you are not required to narrate your life story or
          speculate about causes. Stick to what you know and what you observed.
        </li>
        <li>
          <strong>Do not sign a release or accept a check on the spot.</strong> If the adjuster
          offers you a check or asks you to sign something during the inspection, decline politely.
          Tell them you need to review it first. This is standard — do not let anyone pressure you
          into making immediate decisions about your claim.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The 20-Minute Inspection">
        <p>
          If the adjuster spends 20 minutes on a complex claim that involves multiple rooms, hidden
          damage, or structural issues, that is a problem. A thorough inspection of a significant
          loss takes hours, not minutes. If the inspection feels rushed, note the start and end times
          and raise the issue in writing afterward.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Adjuster Tactics to Watch For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most adjusters are not bad people. But many of them use approaches — whether by habit,
        training, or corporate pressure — that work against policyholders. Here are the most common
        patterns that emerge after two decades of claims handling:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Rushing the inspection.</strong> Spending 15 to 20 minutes on a claim that should
          take half a day. This almost always results in missed damage and an artificially low
          estimate.
        </li>
        <li>
          <strong>Only examining easily visible damage.</strong> If it is not obvious from the middle
          of the room, they may skip it. Hidden damage — behind walls, under flooring, in attic
          framing — is where the real money often is, and it is exactly what gets left out.
        </li>
        <li>
          <strong>Labeling damage as &ldquo;pre-existing&rdquo; without real evidence.</strong> This
          is one of the most common tactics. The adjuster sees wear and writes it off as unrelated to
          the loss. Unless they have documentation from before the loss proving the condition
          pre-existed, this is speculation — and you should push back.
        </li>
        <li>
          <strong>Recommending repairs when replacement is warranted.</strong> Patching drywall
          instead of replacing it. Cleaning carpet that needs to be pulled. Repainting one wall
          instead of the whole room for matching purposes. Repairs are cheaper than replacement, and
          that is exactly why they push for them.
        </li>
        <li>
          <strong>Discouraging you from hiring a public adjuster or attorney.</strong> &ldquo;That
          will just slow things down&rdquo; or &ldquo;You do not need that, we will take care of
          you.&rdquo; The reason they say this is because professional representation consistently
          results in higher settlements. They know this.
        </li>
        <li>
          <strong>Lowballing the initial estimate.</strong> The first number is almost never the
          right number. Many insurers start low hoping the policyholder will accept it out of
          frustration, financial pressure, or simply not knowing better.
        </li>
        <li>
          <strong>Being overly friendly to build trust before delivering a low number.</strong> There
          is nothing wrong with a pleasant adjuster. But if the charm offensive is followed by an
          insultingly low estimate, the friendliness was a negotiation strategy, not genuine
          concern.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After the Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspection is not the end of the process. It is the beginning. What you do next
        determines whether the adjuster&rsquo;s estimate becomes your settlement or just the
        opening number in a negotiation.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request a copy of their estimate.</strong> You are entitled to the full,
          line-by-line estimate. Do not settle for a summary or a lump-sum number. You need to see
          every line item so you can compare it to reality.
        </li>
        <li>
          <strong>Compare it to your own documentation.</strong> Go through the estimate item by item.
          What did they include? What did they leave out? Does the scope match the damage you
          documented? Are the quantities accurate?
        </li>
        <li>
          <strong>Get independent estimates from licensed contractors.</strong> Have at least one
          (preferably two) licensed contractors walk the property and provide written estimates for
          the repair or replacement work. These are your evidence that the insurer&rsquo;s number
          is low.
        </li>
        <li>
          <strong>If the estimate is low, dispute it.</strong> You have every right to challenge the
          insurer&rsquo;s estimate. Respond in writing, identify each discrepancy, and attach your
          contractor estimates and supporting documentation.
        </li>
        <li>
          <strong>Consider hiring a public adjuster if the gap is significant.</strong> If the
          difference between the insurer&rsquo;s number and the actual cost of repairs is substantial,
          professional representation can make a significant difference. A public adjuster will
          prepare a proper scope, document all damage, and negotiate on your behalf.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Your Right to the Estimate">
        <p>
          Under 10 CCR 2695.7(d), when the insurer denies or partially denies a claim, they must
          provide a written explanation citing the specific policy provisions or factual basis for
          the decision. You are also entitled to copies of all claim-related documents. If the
          insurer refuses to provide their estimate or explain their numbers, that itself is a
          regulatory violation you can cite in a CDI complaint.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Adjuster Carousel
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most frustrating tactics some insurers use is reassigning your claim to a new
        adjuster multiple times — three, four, sometimes five different adjusters on a single claim.
        Each new adjuster has to &ldquo;get up to speed,&rdquo; which means your claim stalls while
        they review the file. And many of them start the process over from scratch as if nothing
        before them happened.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not always intentional — adjusters leave, get promoted, or are reassigned. But when
        it happens repeatedly on a contested claim, the pattern speaks for itself. The delay wears
        the policyholder down and increases the pressure to accept a lower settlement just to be done
        with it.
      </p>

      <CalloutBox variant="legal" title="California Law on Adjuster Reassignment (Emergency Claims)">
        <p>
          Under California Insurance Code Section 14047 (enacted by SB 240, effective January 1,
          2020), if three or more adjusters are assigned to a <em>residential property claim arising
          from a declared state of emergency</em> within a six-month period, the insurer must provide
          the policyholder with a written status report within five business days of the latest
          reassignment. This report must include the current status of the claim and a statement of
          any issues still outstanding. Note that this requirement applies specifically to
          emergency-declared residential property losses &mdash; it does not apply to all claims. If
          you are experiencing the adjuster carousel on an emergency claim, document every
          reassignment &mdash; the date, the name of the new adjuster, and whether you received the
          required status report.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Professional Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need professional help on every claim. A straightforward, small claim with a
        reasonable adjuster can often be resolved directly. But there are situations where trying to
        handle the claim yourself puts you at a serious disadvantage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The claim is large</strong> — generally over $50,000 in damages. The larger the
          claim, the more the insurer has at stake, and the more sophisticated their approach will
          be. You need equally sophisticated representation.
        </li>
        <li>
          <strong>The adjuster&rsquo;s estimate seems significantly low.</strong> If licensed
          contractors are telling you the repairs will cost two or three times what the insurer is
          offering, something is wrong with the insurer&rsquo;s scope.
        </li>
        <li>
          <strong>The insurer is delaying or not responding.</strong> Missing regulatory deadlines,
          failing to return calls, repeatedly requesting documents you have already provided — these
          are signs that the insurer is not handling your claim in good faith.
        </li>
        <li>
          <strong>You are being asked to submit to an Examination Under Oath (EUO).</strong> An EUO
          is a formal, recorded examination conducted by the insurer&rsquo;s attorney. If the insurer
          is requesting one, the claim has escalated and you should not attend without your own
          professional representation.
        </li>
        <li>
          <strong>The claim is denied and you believe it should be covered.</strong> A denial is not
          the final word. But fighting a denial requires a detailed understanding of policy language,
          California insurance law, and the specific facts of your loss.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If any of these apply to your situation, consider reaching out for a consultation. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        can evaluate your claim and tell you whether professional representation is likely to make a
        meaningful difference. If your situation involves potential bad faith or a coverage dispute
        that may lead to litigation, an{' '}
        <Link href="/contact" className="text-[#2E74B5] underline">
          insurance attorney
        </Link>{' '}
        may also be appropriate.
      </p>

      <CalloutBox variant="tip" title="Free Consultation">
        <p>
          Not sure if you need help? Most public adjusters, including myself, offer a free initial
          claim review. There is no obligation and no cost to find out where you stand.{' '}
          <Link href="/contact" className="text-[#2E74B5] underline font-semibold">
            Request a free claim review
          </Link>.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
    </>
  )
}
