import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Someone Broke Into My House — Filing a Vandalism or Theft Claim',
  description:
    'How to file a homeowner\'s insurance claim after a burglary or vandalism: police reports, documenting stolen items, sublimits, the SIU process, and how to avoid common mistakes that get theft claims denied.',
  summary:
    'After a break-in or vandalism, file a police report, document and value what was taken or damaged, and check your policy for sublimits on items like jewelry and electronics. Avoid the common mistakes, such as gaps in your inventory, that get theft claims denied.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Someone broke into your home. They stole your things. They may have trashed what they
        did not take. You feel violated. You are angry. And now you have to deal with insurance.
        This guide walks you through the claim process for theft and vandalism — what to do first,
        what your policy covers, what sublimits apply, how to document losses, and what to expect
        from the insurer&rsquo;s investigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 1: Call the Police
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        File a police report immediately. This is not optional. Your insurance policy requires a
        police report for theft claims. Without one, the insurer will likely deny your claim. Call
        the non-emergency line (or 911 if the intruder may still be present) and file a report.
        Get the report number and the name of the responding officer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the officer arrives, walk through the home and identify everything that appears
        stolen or damaged. You do not need a complete list at this point — you can supplement
        the police report later as you discover additional missing items. But get the initial
        report filed the same day you discover the break-in.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 2: Document the Scene
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before cleaning up or repairing the point of entry, document everything:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Photograph the forced entry point (broken window, kicked-in door, pried lock)</li>
        <li>Photograph ransacked rooms showing drawers pulled out, items strewn about</li>
        <li>Photograph any vandalism damage (graffiti, broken fixtures, holes in walls)</li>
        <li>Photograph empty spaces where stolen items were kept (empty jewelry box, bare shelf where TV stood)</li>
        <li>Video a walkthrough of the entire home showing the condition the burglar left it in</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 3: Secure the Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the break-in compromised your home&rsquo;s security — a smashed window, a broken door —
        make temporary repairs immediately. Board up the window. Replace the door lock. This is
        your duty to mitigate further loss. Keep receipts for these emergency repairs; they are
        part of your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Step 4: File the Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call your insurer and report the loss. Provide the police report number. They will assign
        an adjuster. For theft claims, the adjuster will typically ask for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A copy of the police report</li>
        <li>A detailed inventory of stolen items with descriptions, values, and documentation</li>
        <li>An estimate for vandalism damage repairs</li>
        <li>Photos of the scene</li>
        <li>Receipts, appraisals, or other proof of ownership for high-value items</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting Stolen Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where theft claims get difficult. You must prove two things for each item: (1) you
        owned it, and (2) it is gone. For expensive items, the insurer will want documentation.
        Here is how to build your proof:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Purchase receipts.</strong> Amazon order history, credit card statements, bank
          records showing purchases.
        </li>
        <li>
          <strong>Photos.</strong> Old photos of your home showing items in the background. Holiday
          photos showing jewelry being worn. Social media posts showing electronics.
        </li>
        <li>
          <strong>Serial numbers.</strong> If you have serial numbers recorded for electronics,
          tools, or firearms, provide them. This also helps police recovery.
        </li>
        <li>
          <strong>Appraisals.</strong> For jewelry, art, antiques, or collectibles, prior
          appraisals are powerful evidence of value.
        </li>
        <li>
          <strong>Warranty registrations.</strong> If you registered products with the manufacturer,
          that proves ownership.
        </li>
        <li>
          <strong>Testimony.</strong> Your own sworn statement that you owned items is evidence.
          The insurer cannot demand receipts for every single item — most people do not keep
          receipts for everyday possessions.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The 72-Hour Rule: Keep Adding Items">
        <p>
          You will not remember everything immediately. Over the next days and weeks, you will
          realize additional items are missing. Keep a running list. Most adjusters expect supplemental
          submissions. There is no strict cutoff — but the sooner you identify missing items, the
          more credible your claim. Set aside time each day for a week to walk through your home
          mentally, room by room, and add to your list.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sublimits: The Hidden Caps on Your Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        shows your total Coverage C (personal property) limit — but that is not the whole story.
        Buried in your policy are <strong>sublimits</strong> — lower caps on specific categories of
        property. Common sublimits include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Cash and currency:</strong> typically $200</li>
        <li><strong>Securities, accounts, deeds:</strong> typically $1,500</li>
        <li><strong>Jewelry, watches, furs:</strong> typically $1,500 total for theft</li>
        <li><strong>Firearms:</strong> typically $2,500</li>
        <li><strong>Silverware and goldware:</strong> typically $2,500</li>
        <li><strong>Business property:</strong> typically $2,500</li>
        <li><strong>Electronics (some policies):</strong> varies</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These sublimits are devastatingly low. If a thief stole $30,000 in jewelry, your standard
        policy may only pay $1,500 unless you purchased a <strong>scheduled personal property
        endorsement</strong> (also called a &ldquo;rider&rdquo; or &ldquo;floater&rdquo;). Scheduled
        items are listed individually on the policy with appraised values and receive full coverage
        up to that stated amount. See our guide on{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
          contents claims
        </Link>{' '}
        for more on how sublimits work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scheduled vs. Unscheduled Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Unscheduled property</strong> is everything covered under your standard Coverage C.
        It is subject to sublimits and pays on either an Actual Cash Value (ACV) or Replacement
        Cost Value (RCV) basis depending on your policy. Most theft losses fall here.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Scheduled property</strong> is individually listed on your policy with a specific
        insured value. It typically has no deductible, covers broader perils (including mysterious
        disappearance — discussed below), and pays the full scheduled value. If you own jewelry,
        fine art, collectibles, musical instruments, or firearms worth more than the sublimit, you
        should have had them scheduled. If they were not scheduled, you are stuck with the sublimit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mysterious Disappearance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard Coverage C does <em>not</em> cover &ldquo;mysterious disappearance&rdquo; — items
        that vanished without evidence of a specific theft event. If you simply cannot find your
        watch and have no evidence it was stolen (no break-in, no witnesses), the standard policy
        will not pay. You must prove a theft actually occurred.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Scheduled personal property endorsements typically <em>do</em> cover mysterious disappearance.
        This is one of the key advantages of scheduling high-value items.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ACV vs. Replacement Cost on Stolen Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost policy (most modern policies), here is how payment works
        for stolen items. See{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">ACV vs. RCV</Link>{' '}
        for full details:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Initial payment:</strong> The insurer pays Actual Cash Value (replacement cost
          minus depreciation) for each item.
        </li>
        <li>
          <strong>Replacement cost holdback:</strong> When you actually replace the item (purchase
          a comparable replacement), you submit the receipt and the insurer pays the difference
          between ACV and the actual replacement cost.
        </li>
        <li>
          <strong>Deadline:</strong> Most policies give you 180 days to two years to replace items
          and claim the holdback. Check your policy for the specific deadline.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The SIU Referral: When the Insurer Suspects Fraud
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Theft claims have a higher rate of referral to the insurer&rsquo;s Special Investigations
        Unit (SIU) than most other claim types. This does not mean you did anything wrong. Insurers
        flag theft claims for investigation based on factors like:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>High-value losses relative to coverage</li>
        <li>Recent policy changes (increased limits shortly before the theft)</li>
        <li>No signs of forced entry</li>
        <li>Financial stress (the insurer may check credit reports)</li>
        <li>Prior claims history</li>
        <li>Inconsistencies in statements</li>
      </ul>

      <CalloutBox variant="warning" title="If SIU Gets Involved">
        <p>
          If the insurer refers your claim to SIU or requests an Examination Under Oath (EUO), take
          this seriously. You are required to cooperate, but you have the right to have an attorney
          present. An EUO is a sworn, recorded statement — anything you say can be used to deny
          your claim. Do not go into an EUO without legal counsel. Common traps include asking you
          to recall exact details months later (any inconsistency with your earlier statements can
          be characterized as &ldquo;fraud&rdquo;), asking leading questions about your financial
          situation, and requesting documents designed to overwhelm you. An attorney experienced in
          insurance claims can protect you through this process.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Vandalism Without Theft
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was vandalized but nothing was stolen — broken windows, graffiti, smashed
        fixtures, holes punched in walls — this is still a covered loss under a standard HO-3
        policy. Vandalism and malicious mischief are named perils. The repair costs are covered
        just like any other property damage claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One exception: if the dwelling has been vacant for more than 60 consecutive days, most
        policies exclude vandalism coverage. &ldquo;Vacant&rdquo; means devoid of contents and
        not being used for its intended purpose. A furnished home where you are temporarily away
        is not vacant.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tips for a Successful Theft or Vandalism Claim
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>File the police report the same day.</strong> Delays between discovery and
          reporting raise red flags.
        </li>
        <li>
          <strong>Be specific but honest.</strong> Describe items accurately. Do not inflate values.
          Do not claim items you did not actually own. Exaggeration — even on one item — can be
          used to void your entire claim under the policy&rsquo;s concealment or fraud provision.
        </li>
        <li>
          <strong>Provide documentation for high-value items.</strong> Receipts, photos, appraisals.
          The more documentation, the smoother the process.
        </li>
        <li>
          <strong>Keep a copy of everything you submit.</strong> Every document, every list, every
          photo you send to the insurer — keep your own copy.
        </li>
        <li>
          <strong>Read your policy for sublimits.</strong> Know the caps before you submit your
          list so you understand what to expect.
        </li>
        <li>
          <strong>Do not guess at serial numbers.</strong> If you do not know a serial number,
          say so. Making one up — even innocently — can look like fabrication.
        </li>
        <li>
          <strong>Replace items promptly if you want full replacement cost.</strong> The holdback
          has a deadline. Do not let it expire.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Most straightforward theft claims — documented items, clear evidence of break-in, values
        within policy limits — resolve without major battles. But if the insurer refers you to SIU,
        requests an EUO, denies based on &ldquo;no evidence of forced entry,&rdquo; or dramatically
        underpays your contents, you need professional help. A public adjuster can help prepare and
        negotiate the claim. An attorney is essential if fraud allegations are raised or if the
        insurer demands an EUO. Do not face SIU alone. For more on the{' '}
        <Link href="/resources/first-72-hours-after-loss" className="text-[#2E74B5] hover:underline">
          first 72 hours after a loss
        </Link>, see our detailed guide.
      </p>
    </>
  )
}
