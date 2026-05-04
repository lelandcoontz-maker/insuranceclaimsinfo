import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Build Your Claim File: Documentation That Protects Your Recovery',
  description:
    'A well-documented claim is harder to deny and easier to settle fairly. Learn what to photograph, what to write down, how to organize your file, and the critical discoverability rules that determine what the insurer can access in litigation.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The burden of proving your loss falls on you, the policyholder. The insurance company
        will document your claim from its perspective &mdash; the adjuster&apos;s notes, the
        engineer&apos;s report, the estimator&apos;s scope. Those documents are designed to
        protect the insurer. Your claim file is designed to protect you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A well-organized claim file does more than support your claim at the adjustment stage.
        If the claim goes to{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal</Link>,{' '}
        <Link href="/resources/insurance-mediation" className="text-[#2E74B5] hover:underline">mediation</Link>,
        or litigation, your file becomes the foundation of your case. The time to build it is
        from day one &mdash; not after the insurer denies your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Immediately After the Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most valuable documentation is the documentation you create in the first hours and
        days after a loss. Damage gets cleaned up, repaired, weathered, and altered over time.
        What you capture now may be the only record of the original condition.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Photographs and Video</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photograph and video record everything <em>before</em> any cleanup, repair, or
        mitigation work begins. Your phone camera is fine. The goal is quantity and coverage,
        not artistic quality.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Wide shots.</strong> Photograph each room, each exterior wall, the roof (if
          accessible), the yard, and the overall property from multiple angles. These establish
          context.
        </li>
        <li>
          <strong>Close-ups.</strong> Photograph specific damage &mdash; cracks, water stains,
          char marks, broken items, displaced materials. Get close enough that the damage is
          clearly visible.
        </li>
        <li>
          <strong>Video walkthroughs.</strong> Walk through the entire property with your phone
          recording, narrating what you see. Video captures spatial relationships and scale that
          individual photographs miss.
        </li>
        <li>
          <strong>Date and time stamps.</strong> Ensure your phone&apos;s date and time settings
          are correct. The metadata embedded in your photos establishes when they were taken.
        </li>
        <li>
          <strong>Personal property.</strong> Photograph damaged contents in place before moving
          or discarding them. If items are destroyed beyond recognition, photograph what remains.
        </li>
        <li>
          <strong>Before-and-after.</strong> If you have pre-loss photos of the property (real
          estate listing photos, family photos, social media posts), save them. They establish
          the pre-loss condition.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Throw Anything Away">
        <p>
          Until the insurer has completed its investigation and you have reached a final
          settlement, do not discard damaged items. The insurer has the right to inspect the
          damaged property. If you throw items away before the insurer has had an opportunity
          to inspect them, the insurer may argue it was prejudiced by the inability to verify
          the damage.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Emergency Mitigation</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to take reasonable steps to protect the property from further
        damage. If a tree fell through your roof, you need to tarp it. If a pipe burst, you
        need to stop the water. Document your mitigation efforts:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Photograph the damage before and after emergency repairs</li>
        <li>Keep receipts for all materials and labor</li>
        <li>Note the date and time of all mitigation work</li>
        <li>If possible, get the insurer&apos;s approval before making non-emergency repairs</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Claim Diary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start a written log of every interaction with the insurance company from the moment you
        report the claim. This is your claim diary, and it is one of the most powerful tools in
        your file.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For every communication, record:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Date and time</li>
        <li>Who you spoke with (full name and title)</li>
        <li>Whether the communication was by phone, email, letter, or in person</li>
        <li>What was discussed &mdash; the key points, not a word-for-word transcript</li>
        <li>Any promises made, deadlines given, or next steps identified</li>
        <li>If by phone, follow up with a confirming email: &ldquo;Per our conversation
          today...&rdquo;</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claim diary serves two purposes. First, it keeps you organized and ensures nothing
        falls through the cracks. Second, if the insurer later claims it never made a particular
        promise or never received a particular document, your contemporaneous notes are evidence.
        A note written the same day carries far more weight than a recollection months later.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Written Correspondence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put important communications in writing. Phone calls are convenient, but they produce
        no record unless the call is recorded (which may require the other party&apos;s consent
        in California). A letter or email creates a permanent, dated record of what was
        communicated. For a detailed guide on how to write effectively to your insurer, see{' '}
        <Link href="/resources/responding-to-insurer-in-writing" className="text-[#2E74B5] hover:underline">
          How to Respond to Your Insurance Company in Writing
        </Link>.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Email AND certified mail.</strong> For important communications, send by both.
          Email gives you speed and a timestamp. Certified mail gives you proof of delivery that
          is difficult to dispute.
        </li>
        <li>
          <strong>Keep copies of everything you send.</strong> Save sent emails, keep copies of
          letters before mailing, and save the certified mail receipts.
        </li>
        <li>
          <strong>Save everything you receive.</strong> Every letter, every email, every text
          message from the insurer, the adjuster, or any vendor working on the claim.
        </li>
        <li>
          <strong>Organize chronologically.</strong> Your correspondence file should tell the
          story of your claim from beginning to end, in order.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Receipts and Financial Records
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep receipts for every expense related to the loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Additional Living Expenses (ALE).</strong> Hotel bills, restaurant meals,
          laundry, storage, pet boarding &mdash; anything you are spending because you cannot
          live in your home.
        </li>
        <li>
          <strong>Emergency repairs.</strong> Tarping, board-up, water extraction, emergency
          plumbing or electrical work.
        </li>
        <li>
          <strong>Temporary housing.</strong> Rental agreements, utility connections,
          furniture rental.
        </li>
        <li>
          <strong>Transportation.</strong> If you are displaced and your commute has increased,
          track the additional mileage.
        </li>
        <li>
          <strong>Personal property replacement.</strong> If you purchase essential items before
          the claim is settled (clothing, toiletries, medications, school supplies), keep the
          receipts.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When possible, get pre-approval from the insurer before incurring large expenses. If the
        insurer later disputes the expense, having written pre-approval eliminates the argument.
        If you cannot get pre-approval &mdash; because the expense is urgent or the insurer is
        unresponsive &mdash; document why you could not wait.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Personal Property Inventory
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim includes personal property &mdash; particularly after a fire, flood, or
        theft &mdash; you will need to compile a detailed inventory of what was lost or damaged.
        This is often the most time-consuming part of the claim.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Room by room.</strong> Walk through the property (or your memory of it) room
          by room. List every item that was damaged or destroyed.
        </li>
        <li>
          <strong>Description, quantity, age, and cost.</strong> For each item, provide a
          description, the quantity, approximately when it was purchased, and what you paid
          for it. If you do not remember the exact price, provide your best good-faith estimate.
        </li>
        <li>
          <strong>Reconstruct from available records.</strong> Check bank statements, credit
          card statements, online purchase history (Amazon, etc.), store loyalty programs, and
          warranty registrations. These can help you document purchases you might otherwise
          forget.
        </li>
        <li>
          <strong>Pre-loss photographs.</strong> Social media posts, family photos, and home
          videos can document items you owned and their condition before the loss.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For items with special value or unique characteristics, see our guides on{' '}
        <Link href="/resources/specialty-items" className="text-[#2E74B5] hover:underline">
          specialty items
        </Link>{' '}
        and{' '}
        <Link href="/resources/scheduled-personal-property" className="text-[#2E74B5] hover:underline">
          scheduled personal property
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Expert Opinions: The Discoverability Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Getting your own expert opinion &mdash; an independent engineer, a contractor&apos;s
        repair estimate, a hygienist&apos;s testing results &mdash; can be the single most
        important step in challenging the insurer&apos;s position. Our comprehensive guide on{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] hover:underline">
          biased insurance experts
        </Link>{' '}
        explains why an independent evaluation is often essential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But there is an important caveat that is rarely discussed: <strong>any document you
        create or obtain may become &ldquo;discoverable&rdquo; if the claim proceeds to
        litigation.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What does &ldquo;discoverable&rdquo; mean? If your claim ends up in a lawsuit, both
        sides have the right to demand documents from the other. This process is called
        &ldquo;discovery.&rdquo; The insurance company&apos;s defense attorneys can require you
        to turn over documents in your possession that are relevant to the dispute &mdash;
        including expert reports, correspondence, photographs, and other materials you gathered
        during the claim. If you have a document, and it is relevant, the insurer&apos;s lawyers
        can generally force you to hand it over &mdash; even if it hurts your case.
      </p>

      <CalloutBox variant="warning" title="Think Before You Hire">
        <p>
          If you hire an expert and the expert&apos;s opinion is unfavorable to your position,
          you may be required to turn that report over to the insurance company&apos;s defense
          attorneys during litigation. Their lawyers will ask in discovery: &ldquo;Have you
          obtained any expert reports regarding this loss?&rdquo; If you have, you generally
          must produce them &mdash; even the ones you wish you had never gotten.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean you should avoid getting expert opinions. An independent evaluation
        is often the difference between a fair settlement and an underpaid claim. But it means
        you should be strategic about how and when you retain experts:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Consider having your attorney hire the expert.</strong> If <em>your
          attorney</em> retains an expert as part of litigation preparation, the expert&apos;s
          report is generally protected as <em>attorney work product</em> and
          is <strong>confidential</strong> &mdash; the insurance company&apos;s defense
          attorneys cannot force you to turn it over. This protection exists because the law
          recognizes that attorneys need to be able to investigate a case and consult with
          experts without the other side looking over their shoulder. If you hire the same
          expert yourself, without going through your attorney, that protection may not
          apply &mdash; and the report could be fair game in discovery. That said, if you are
          confident that the expert&apos;s findings will support your position, having your
          attorney retain them is less critical &mdash; a favorable report helps your claim
          regardless of who hired the expert. The attorney-retention strategy is most important
          when the outcome is uncertain.
        </li>
        <li>
          <strong>Ask for a verbal report first.</strong> Before committing to a written report,
          ask the expert to give you a preliminary verbal assessment of their findings. This is
          a tactic that insurance companies routinely use with their own experts &mdash; the
          insured can do the same. If the verbal assessment is favorable, you can proceed with
          the written report with confidence. If it raises concerns, you have the opportunity to
          consult with an attorney before a potentially unfavorable opinion is committed to paper
          and becomes part of the record.
        </li>
        <li>
          <strong>Understand the limits of this protection.</strong> Attorney work product
          protection is strong but not absolute. If the expert is later designated as a
          <em>testifying</em> expert in litigation &mdash; meaning they will take the stand
          and offer opinions at trial &mdash; their opinions and the basis for them can
          generally be obtained by the insurer&apos;s defense attorneys regardless of who
          retained them. The protection is strongest for <em>consulting</em> experts who are
          retained to advise your attorney behind the scenes but are not expected to testify.
        </li>
        <li>
          <strong>Contractor estimates are generally low-risk.</strong> A licensed contractor&apos;s
          repair estimate is one of the safest forms of independent evidence you can obtain. It
          is a factual document &mdash; this is what the repairs will cost &mdash; and it
          supports your claim rather than expressing an opinion about causation or coverage.
          Even if the insurer&apos;s attorneys obtain it in discovery, it is almost always
          helpful to your case.
        </li>
        <li>
          <strong>Be cautious with causation opinions.</strong> The risk is greatest with experts
          who are asked to opine on the cause of damage. If you hire an engineer to determine
          whether your foundation damage was caused by the earthquake (covered) or by long-term
          settlement (not covered), and the engineer concludes it was settlement, you now have
          an unfavorable expert opinion in your file that the insurer may eventually see.
        </li>
        <li>
          <strong>Think carefully before hiring an unfamiliar expert.</strong> Before retaining
          any expert, consider their background and typical clientele. An expert whose style and
          methodology are unknown to you is a gamble &mdash; and an expert who has a business
          practice of assisting insurance companies in creating denials is worse than no expert at
          all. Do your research. Ask your public adjuster or attorney whether they have experience
          with the expert and what kind of reports they typically produce. The last thing you want
          is to pay for an &ldquo;independent&rdquo; opinion that reads like it was written for
          the insurance company.
        </li>
        <li>
          <strong>Do not ask an expert a question you are not prepared to hear the answer to.</strong>{' '}
          Before retaining an expert, think about whether you would be comfortable if the insurer
          read the report. If you are confident the facts support your position, an expert opinion
          will strengthen your claim. If the causation is genuinely uncertain, consult with an
          attorney first about how to structure the engagement &mdash; or at a minimum, request a
          verbal assessment before any written report is produced.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What NOT to Put in Your Claim File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything in your file could potentially be seen by the insurer, a judge, a jury, or
        an opposing attorney. With that in mind:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not write emotional accusations.</strong> Your claim diary should record
          facts, not opinions about the adjuster&apos;s character or motives. &ldquo;Adjuster
          called at 2:15 PM, said payment would be delayed another 30 days, no reason
          given&rdquo; is useful. &ldquo;This adjuster is a liar and is trying to screw
          us&rdquo; is not.
        </li>
        <li>
          <strong>Do not make legal conclusions.</strong> Recording that the insurer missed a
          regulatory deadline is useful. Writing &ldquo;this is bad faith&rdquo; in your notes
          is a legal conclusion that may not hold up and can undermine your credibility. See{' '}
          <Link href="/resources/responding-to-insurer-in-writing" className="text-[#2E74B5] hover:underline">
            our guide on written correspondence
          </Link>{' '}
          for more on this distinction.
        </li>
        <li>
          <strong>Do not exaggerate damage or inflate values.</strong> Every item on your
          personal property inventory, every repair cost, every expense must be honest and
          supportable. Inflating a single item can undermine the credibility of your entire
          claim and, in extreme cases, can be grounds for the insurer to void the policy under
          the fraud or concealment provisions.
        </li>
        <li>
          <strong>Do not include communications with your attorney.</strong> Keep
          attorney-client communications separate from your general claim file. If your claim
          file is produced in discovery, you do not want privileged communications mixed in
          with non-privileged documents.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Organizing Your File
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A disorganized file undermines even the strongest claim. Organize your documentation
        into clear categories:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Policy documents.</strong> Your declarations page, policy form, and all endorsements.</li>
        <li><strong>Claim diary.</strong> Your chronological log of all communications.</li>
        <li><strong>Correspondence.</strong> All letters and emails, organized by date.</li>
        <li><strong>Photographs and video.</strong> Organized by date and location (room, exterior area).</li>
        <li><strong>Financial records.</strong> Receipts, estimates, invoices, organized by category (ALE, repairs, personal property).</li>
        <li><strong>Personal property inventory.</strong> The complete list with supporting documentation.</li>
        <li><strong>Expert reports.</strong> Any independent evaluations you have obtained.</li>
        <li><strong>Insurer documents.</strong> Everything the insurer has sent you &mdash; acknowledgment letters, reservation of rights, estimates, engineer reports, denial letters.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you use physical folders, a digital filing system, or both, the goal is the same:
        anyone who picks up your file should be able to understand the complete history of the
        claim within an hour. If your claim goes to litigation, your attorney will thank you. If
        it goes to{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal</Link>,
        your appraiser will thank you.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Working with Professionals
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not have to build your claim file alone. Professionals who can help:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Public Adjuster.</strong> A licensed{' '}
          <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] hover:underline">
            Public Adjuster
          </Link>{' '}
          is trained to organize, document, and present insurance claims. They understand what
          the insurer needs to see, what the regulations require, and how to build a file that
          withstands scrutiny.
        </li>
        <li>
          <strong>Attorney.</strong> If the claim is likely to involve litigation, involving an
          attorney early can protect expert opinions under the work product doctrine and ensure
          your documentation strategy accounts for discoverability.
        </li>
        <li>
          <strong>Contractor.</strong> A licensed contractor&apos;s detailed repair estimate is
          both documentation and evidence. It establishes what the repairs will cost at current
          market rates.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Earlier You Start, the Stronger Your File">
        <p>
          Documentation decays. Memories fade, damage gets cleaned up, records get lost,
          witnesses move away. The strongest claim files are built from day one, when the
          evidence is fresh and the details are clear. Even if you think the claim will be
          straightforward, document everything as though it might end up in front of a judge.
          Because it might.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help Building Your Claim File?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can organize your documentation, identify gaps, and build a claim
          file that presents your loss clearly and persuasively.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. The discussion of discoverability and attorney work product
          is general in nature &mdash; consult a licensed attorney for advice about privilege and
          discovery in your specific situation.
        </p>
      </CalloutBox>
    </>
  )
}
