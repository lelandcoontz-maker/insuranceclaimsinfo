import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Subrogation in Property Insurance: Your Right to Recover What the Insurer Won’t',
  description:
    'How subrogation works in California property insurance claims, your insurer’s duty to notify you, deductible recovery, the made-whole doctrine, and what happens when the insurance company sits on its hands.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation is one of those insurance terms that most policyholders have heard but few
        truly understand &mdash; until they need it. And when they need it, many discover that
        their insurance company either never told them about it or quietly let the opportunity
        slip away. This article explains what subrogation is, how it works in California property
        insurance claims, what your insurer is required to tell you, and what can happen when they
        don&apos;t.
      </p>

      {/* ───────── What Is Subrogation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Subrogation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation is the legal process by which your insurance company, after paying your claim,
        &ldquo;stands in your shoes&rdquo; and pursues recovery from the person or entity that
        actually caused the loss. The idea is simple: if someone else is responsible for the damage
        to your property, your insurer pays you first, then goes after the responsible party to
        get reimbursed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters to you because subrogation is often the only way to recover your{' '}
        <strong>deductible</strong>. When your insurer pays a claim, they subtract the deductible
        from the payment. If they successfully subrogate against the responsible party, the
        deductible is typically recovered first &mdash; before the insurer recovers anything for
        itself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Simple Example
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your neighbor&apos;s tree falls on your roof during a storm, causing $40,000 in damage.
        Your homeowner&apos;s policy has a $2,500 deductible. Your insurer pays you $37,500
        (the $40,000 loss minus your $2,500 deductible). Your insurer then pursues your
        neighbor&apos;s liability insurance to recover the $40,000. If successful, you get your
        $2,500 deductible back, and the insurer recovers the $37,500 it paid.
      </p>

      {/* ───────── How Subrogation Works ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Subrogation Works Step by Step
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You file a claim with your insurer.</strong> A covered loss occurs, and you file
          under your own policy &mdash; this is your{' '}
          <Link href="/resources/third-party-vs-first-party" className="text-[#2E74B5] hover:underline">
            first-party claim
          </Link>.
        </li>
        <li>
          <strong>Your insurer pays the claim</strong> (minus the deductible). You are made
          reasonably whole under the terms of your policy.
        </li>
        <li>
          <strong>Your insurer investigates whether a third party is liable.</strong> If so, the
          insurer has the right &mdash; and, as we will see, potentially the duty &mdash; to pursue
          recovery from that party or their insurer.
        </li>
        <li>
          <strong>The insurer &ldquo;stands in your shoes.&rdquo;</strong> Through subrogation,
          the insurer acquires whatever legal rights you had against the responsible party, up to
          the amount the insurer paid.
        </li>
        <li>
          <strong>Recovery is shared.</strong> If the subrogation effort succeeds, your deductible
          is recovered first. The insurer then recovers the amount it paid on the claim.
          Collection costs (such as attorney fees) are shared proportionally.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Deductible Recovery Comes First">
        <p>
          Under California&apos;s Fair Claims Settlement Practices Regulations (10 CCR
          &sect;2695.7(q)), every insurer that makes a subrogation demand must include the
          insured&apos;s deductible in that demand, and must share subrogation recoveries on a
          proportionate basis with the insured. In plain English: your deductible gets recovered
          alongside the insurer&apos;s money &mdash; the insurer cannot keep the entire recovery
          and leave you empty-handed.
        </p>
      </CalloutBox>

      {/* ───────── The Regulation Most Adjusters Don't Know ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Regulation Most Adjusters Don&apos;t Know About
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where things get interesting &mdash; and where most policyholders (and frankly,
        most insurance adjusters) are unaware of a critical protection. California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        contain a provision that requires your insurer to tell you, in writing, whether it intends
        to pursue subrogation. This is not optional. It is a binding regulatory requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation is 10 CCR &sect;2695.7, subsection (p):
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;Every insurer shall provide written notification to a first party claimant as to
        whether the insurer intends to pursue subrogation of the claim. Where an insurer elects
        not to pursue subrogation, or discontinues pursuit of subrogation, it shall include in
        its notification a statement that any recovery to be pursued is the responsibility of the
        first party claimant.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that carefully. The regulation imposes two separate obligations:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Notification of intent:</strong> The insurer must tell you in writing whether
          it plans to subrogate.
        </li>
        <li>
          <strong>Notification of non-pursuit:</strong> If the insurer decides <em>not</em> to
          subrogate &mdash; or starts subrogating and then stops &mdash; it must tell you that
          recovering from the responsible party is now <em>your</em> responsibility.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation also specifies four exceptions where notification is not required: the
        deductible is waived; the coverage under which the claim is paid requires no deductible;
        the total loss sustained does not exceed the deductible; or there is no legal basis for
        subrogation.
      </p>

      <CalloutBox variant="important" title="Why This Matters So Much">
        <p>
          Your insurer is not required to subrogate. That is a business decision, and the insurer
          has the right to decide it is not worth pursuing. But whether the insurer subrogates or
          not, it <strong>must</strong> tell you. This notification is what preserves your right
          to pursue recovery on your own. Without it, you may not even know you have a recovery
          right &mdash; until it is too late.
        </p>
      </CalloutBox>

      {/* ───────── What Happens When They Don't ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When the Insurer Doesn&apos;t Notify You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where this becomes a real problem. Every legal claim has a{' '}
        <Link href="/resources/california-claim-deadlines" className="text-[#2E74B5] hover:underline">
          statute of limitations
        </Link>
        &mdash; a deadline after which you lose the right to sue. In California, the statute of
        limitations for property damage caused by negligence is generally three years from the
        date of injury (California Code of Civil Procedure &sect;338(b)). For breach of contract,
        it can be four years (CCP &sect;337).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer tells you it is handling subrogation, you have no reason to hire your own
        attorney or pursue the responsible party yourself. You are relying on the insurer to do
        it. But if the insurer sits on its hands &mdash; tells you it is subrogating but never
        actually does anything &mdash; and the statute of limitations runs out, you have
        permanently lost your right to recover your deductible and any uninsured losses from
        the responsible party.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a hypothetical concern. It happens. And when it does, it can constitute
        negligence, a violation of the Fair Claims regulations, and potentially{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>.
      </p>

      {/* ───────── Earthquake Example ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Scenario: The Earthquake and the Bad Contractor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this scenario, which illustrates exactly why subrogation notification matters.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner has earthquake insurance with a percentage deductible. An earthquake hits,
        and the brick veneer on the home&apos;s exterior wall collapses. The proximate cause of
        the damage is the earthquake &mdash; that is what set things in motion. But a contributing
        factor is that the contractor who installed the brick veneer years earlier did not install
        it correctly. The veneer was not properly tied to the wall structure, so it was
        significantly more vulnerable to seismic movement than it should have been.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company pays the earthquake claim. The total loss is $150,000, and the
        earthquake deductible (a percentage of the dwelling limit) is $50,000. So the insurer
        pays $100,000 and the homeowner absorbs the $50,000 deductible out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now &mdash; the insurer has a potential subrogation claim against the contractor&apos;s
        liability insurance. The contractor&apos;s faulty workmanship contributed to the severity
        of the loss. If the insurer pursues subrogation, it could potentially recover a
        significant portion of the loss from the contractor&apos;s insurer. And if it does, the
        homeowner&apos;s $50,000 deductible would be recovered first.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But here is the problem: the insurer decides not to pursue it. Maybe the insurer&apos;s
        subrogation department is overwhelmed. Maybe they calculate that the legal costs of
        pursuing the contractor outweigh the insurer&apos;s potential recovery. Whatever the
        reason, they sit on their hands and do nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Three years pass. The statute of limitations on the negligence claim against the
        contractor expires. And the homeowner never knew there was a potential recovery claim
        in the first place &mdash; because the insurer never told them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That homeowner just lost $50,000. And the insurer violated 10 CCR &sect;2695.7(p).
      </p>

      {/* ───────── Economic Decision ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Economic Decision Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a second scenario that is equally important to understand, because it reveals
        a perverse incentive built into the subrogation process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Take the same earthquake example, but change the numbers slightly. The insurer believes
        it could recover $55,000 from the contractor&apos;s liability carrier. Under the
        regulatory framework, the first $50,000 of that recovery would go to the homeowner
        (deductible recovery), and the insurer would keep only $5,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now the insurer does the math: pursuing the subrogation claim will require hiring outside
        counsel, conducting discovery, and potentially litigating. That could easily cost $30,000
        to $50,000 in legal fees. The insurer&apos;s share of any recovery would be $5,000.
        The economics make no sense for the insurer &mdash; they would spend far more than they
        would recover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And here is the uncomfortable truth: the insurer has the right to make that economic
        decision. No regulation requires them to pursue subrogation at a financial loss. But
        10 CCR &sect;2695.7(p) absolutely requires them to <strong>tell you</strong> they are
        not pursuing it, so that <strong>you</strong> can pursue the contractor on your own and
        potentially recover your $50,000 deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer makes this economic calculation, decides not to subrogate, and never tells
        you &mdash; and you lose the ability to pursue the claim because the statute of
        limitations expires &mdash; the insurer has not just violated a regulation. It has
        potentially caused you a $50,000 loss through its silence. That is the kind of conduct
        that can support a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith claim
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Watch for This Pattern">
        <p>
          The perverse incentive is real: when most of the subrogation recovery would go to you
          (deductible), and only a small portion would go to the insurer, the insurer has a
          financial disincentive to pursue subrogation. That is precisely why the notification
          requirement exists &mdash; to ensure the insurer&apos;s economic self-interest does not
          silently eliminate your recovery rights.
        </p>
      </CalloutBox>

      {/* ───────── Made Whole Doctrine ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Made-Whole Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California follows the &ldquo;made-whole&rdquo; doctrine, which provides a critical
        protection for policyholders in subrogation situations. The principle is straightforward:
        the insurer cannot collect on its subrogation rights until the insured has been fully
        compensated for all of their losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Court of Appeal explained this in{' '}
        <em>Sapiano v. Williamsburg National Insurance Co.</em> (1994) 28 Cal.App.4th 533:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;It is a general equitable principle of insurance law that, absent an agreement to
        the contrary, an insurance company may not enforce a right to subrogation until the
        insured has been fully compensated for [his or] her injuries, that is, has been made
        whole.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court reinforced and expanded this doctrine in{' '}
        <em>21st Century Insurance Co. v. Superior Court</em> (2009) 47 Cal.4th 511, holding
        that the made-whole rule prevents an insurer from exercising reimbursement rights until
        the insured has been fully compensated for non-covered damages &mdash; though the
        &ldquo;common fund doctrine&rdquo; allows the insurer to reduce its reimbursement
        obligation by a proportionate share of the insured&apos;s attorney fees and costs in
        obtaining the recovery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What does this mean in practice? If a third party caused your loss and you recover money
        from that party, your insurer cannot take their subrogation share out of the recovery
        until you have been made whole for <em>all</em> of your damages &mdash; including any
        amounts the policy did not cover. Your deductible, any amounts that exceeded policy
        limits, any uncovered damages &mdash; all of that comes out of the recovery first, before
        the insurer gets a dollar.
      </p>

      {/* ───────── Sharing Recovery ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Subrogation Recoveries Are Shared
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations address recovery sharing
        directly. Section 2695.7(q) provides:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;Every insurer that makes a subrogation demand shall include in every demand the
        first party claimant&apos;s deductible. Every insurer shall share subrogation recoveries
        on a proportionate basis with the first party claimant, unless the first party claimant
        has otherwise recovered the whole deductible amount.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means several things:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer must include your deductible in every subrogation demand it makes. It
          cannot pursue recovery for only its own payments and ignore your deductible.
        </li>
        <li>
          Recoveries must be shared proportionately. If the insurer recovers 50% of its
          subrogation demand, you get 50% of your deductible back.
        </li>
        <li>
          Legal expenses for collection (such as attorney fees for outside counsel) are
          allocated on a pro rata basis. The insurer cannot charge the entire legal bill against
          your deductible recovery.
        </li>
        <li>
          If you have already recovered your deductible through other means (such as a direct
          settlement with the responsible party), the insurer does not need to include it in
          its demand.
        </li>
      </ul>

      {/* ───────── Waiver of Subrogation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Waiver of Subrogation Clauses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A waiver of subrogation is a contract provision in which one party agrees to give up its
        insurer&apos;s right to pursue recovery against another party. These are extremely common
        in construction contracts, leases, and service agreements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, the standard AIA (American Institute of Architects) construction contract
        forms include subrogation waiver language requiring the property owner and general
        contractor to waive subrogation rights against each other. The idea is that if the
        building burns down during construction, the owner&apos;s builder&apos;s risk insurance
        pays the claim and nobody sues each other &mdash; even if a subcontractor&apos;s
        negligence caused the fire.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Waiver of subrogation clauses are important because they can eliminate both the
        insurer&apos;s right to subrogate <em>and</em> your right to pursue the responsible party
        independently. If you signed a contract with a subrogation waiver, your insurer generally
        cannot pursue the other party, and neither can you &mdash; because you contractually
        agreed to waive that right.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why it is critical to read contracts carefully before signing, particularly
        construction contracts, lease agreements, and vendor agreements. A subrogation waiver
        can mean you absorb your deductible permanently, with no path to recovery.
      </p>

      <CalloutBox variant="tip" title="Check Your Policy">
        <p>
          Many insurance policies require you to preserve the insurer&apos;s subrogation rights
          as a condition of coverage. If you sign a contract waiving subrogation <em>without</em>{' '}
          your insurer&apos;s knowledge, it could create a coverage issue. If you are entering
          into a contract that includes a subrogation waiver, notify your insurer and confirm it
          does not conflict with your policy terms.
        </p>
      </CalloutBox>

      {/* ───────── Your Rights & What To Do ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Your Subrogation Rights: What You Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a third party may have caused or contributed to your property loss, take these steps
        to protect your rights:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Demand Subrogation Notification in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As soon as your claim is paid, send your insurer a written request citing the regulation.
        Something like:
      </p>
      <div className="bg-gray-50 border-l-4 border-[#1F3964] p-4 mb-6 text-sm text-gray-700 leading-relaxed">
        <p>
          &ldquo;Per 10 CCR &sect;2695.7(p), please advise in writing whether you intend to
          pursue subrogation against [responsible party]. If you do not intend to pursue
          subrogation, please confirm in writing that any recovery is my responsibility so that
          I may take timely action to preserve my rights.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put it in writing. Get the answer in writing. Create a paper trail. If the insurer later
        claims it told you verbally, you want documentation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Track the Statute of Limitations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Know your{' '}
        <Link href="/resources/california-claim-deadlines" className="text-[#2E74B5] hover:underline">
          deadlines
        </Link>.
        In California, the statute of limitations for property damage caused by negligence is
        generally three years (CCP &sect;338(b)). For breach of a written contract, it is four
        years (CCP &sect;337). Do not rely on the insurer to track these deadlines for you. If
        the insurer says it is subrogating, follow up periodically to confirm it is actually
        doing something.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Follow Up Regularly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer says it is pursuing subrogation, ask for status updates. Who is handling
        it? Has a demand been sent? Has the responsible party&apos;s insurer responded? Is
        litigation being considered? If the insurer cannot or will not answer these questions,
        that is a red flag.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Consider Pursuing Recovery Independently
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer tells you it is not going to subrogate (or if you cannot get a straight
        answer), consult with an attorney about pursuing the responsible party yourself. You have
        the same legal rights the insurer would have had through subrogation &mdash; the
        difference is that you are exercising them directly. Do not wait until the statute of
        limitations is about to expire.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Do Not Sign Releases That Waive Your Subrogation Rights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the responsible party or their insurer offers you a settlement, read any release
        carefully. Make sure it does not require you to waive your insurer&apos;s subrogation
        rights &mdash; or your own right to pursue additional damages. Your own insurer may also
        need to consent to any direct settlement with the responsible party, depending on the
        policy terms.
      </p>

      {/* ───────── When Non-Notification Is Bad Faith ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Failure to Notify Becomes Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every failure to send a subrogation notification letter is bad faith. But the pattern
        that creates the most risk for policyholders &mdash; and the strongest case for bad
        faith &mdash; looks like this:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A third party clearly caused or contributed to the loss
        </li>
        <li>
          The insurer knows about the third party&apos;s involvement
        </li>
        <li>
          The insurer either tells the insured it is &ldquo;handling subrogation&rdquo; or says
          nothing at all
        </li>
        <li>
          The insurer never actually pursues recovery
        </li>
        <li>
          The statute of limitations expires
        </li>
        <li>
          The insured&apos;s deductible (and any uninsured losses) become permanently
          unrecoverable
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, an insurer that violates the Fair Claims Settlement Practices
        Regulations has violated the law. Regulatory violations do not automatically establish
        bad faith, but they are strong evidence of it &mdash; particularly when the violation
        directly causes the insured to suffer a financial loss. An insurer that silently lets a
        subrogation opportunity expire, causing the insured to lose their deductible recovery,
        has done exactly what the regulation was designed to prevent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If this has happened to you, consult an attorney. You may have a claim not only for the
        lost deductible, but for{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith damages
        </Link>{' '}
        arising from the insurer&apos;s failure to comply with its regulatory obligations. For
        more on when attorney involvement makes sense, see our guide on{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] hover:underline">
          when to hire an insurance claim attorney
        </Link>.
      </p>

      {/* ───────── Common Subrogation Scenarios ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Subrogation Scenarios in Property Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation can arise from any situation where a third party&apos;s negligence,
        defective product, or contractual breach caused or contributed to a covered loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Defective construction or renovation:</strong> A contractor installs plumbing
          incorrectly, and a pipe bursts two years later. The insurer pays the water damage claim
          and subrogates against the contractor.
        </li>
        <li>
          <strong>Product defects:</strong> A water heater or appliance malfunctions due to a
          manufacturing defect, causing a fire. The insurer subrogates against the manufacturer.
        </li>
        <li>
          <strong>Neighbor negligence:</strong> A neighbor&apos;s poorly maintained tree falls
          on your home. Your insurer pays and subrogates against the neighbor&apos;s homeowner
          policy.
        </li>
        <li>
          <strong>Utility company negligence:</strong> A power company&apos;s equipment causes
          a wildfire that damages your property. Your insurer pays and subrogates against the
          utility. (You may also have an{' '}
          <Link href="/resources/inverse-condemnation" className="text-[#2E74B5] hover:underline">
            inverse condemnation
          </Link>{' '}
          claim in this situation.)
        </li>
        <li>
          <strong>Tenant negligence:</strong> A tenant causes a fire through carelessness, and
          the landlord&apos;s property insurance pays. The insurer may subrogate against the
          tenant (although many courts and lease agreements limit this).
        </li>
        <li>
          <strong>Vehicle impact:</strong> A driver crashes into your building. Your property
          insurer pays the claim and subrogates against the driver&apos;s auto liability policy.
        </li>
      </ul>

      {/* ───────── Subrogation vs. Your Own Third-Party Claim ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Subrogation vs. Filing Your Own Third-Party Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation happens <em>after</em> your insurer pays your first-party claim. But you also
        have the option of filing a{' '}
        <Link href="/resources/third-party-vs-first-party" className="text-[#2E74B5] hover:underline">
          third-party claim
        </Link>{' '}
        directly against the responsible party&apos;s insurance &mdash; without filing under your
        own policy at all. Each approach has tradeoffs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing under your own policy gets you paid faster (your own insurer has regulatory
        deadlines to meet), but you pay your deductible up front and hope subrogation recovers
        it later. Filing a third-party claim avoids the deductible entirely, but the other
        party&apos;s insurer has no contractual obligation to you and may drag its feet
        indefinitely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many cases, the best approach is to file under your own policy to get paid promptly,
        then let subrogation handle the recovery. But if the subrogation recovery will be small
        relative to your deductible &mdash; or if you have reason to believe your insurer will
        not pursue it aggressively &mdash; you may want to pursue the third-party claim directly.
        See our detailed comparison in{' '}
        <Link href="/resources/third-party-vs-first-party" className="text-[#2E74B5] hover:underline">
          Third-Party Claim vs. First-Party Claim
        </Link>.
      </p>

      {/* ───────── Policyholder Obligations ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Obligations: Don&apos;t Sabotage the Subrogation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy almost certainly contains a subrogation clause that imposes obligations on
        you as well. Common requirements include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cooperate with the insurer&apos;s subrogation efforts.</strong> If the insurer
          asks for information about the responsible party, provide it.
        </li>
        <li>
          <strong>Do not release the responsible party without the insurer&apos;s consent.</strong>{' '}
          If you independently settle with the person who caused the damage and release them from
          liability, you may have destroyed the insurer&apos;s subrogation rights. This can
          create a coverage problem.
        </li>
        <li>
          <strong>Do not do anything that would prejudice the insurer&apos;s recovery.</strong>{' '}
          This is a broad obligation, but in practice it means: do not accept payments from the
          responsible party without telling your insurer, and do not sign anything that would
          limit the insurer&apos;s rights.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Violating these obligations can give the insurer a defense to your claim, so take them
        seriously. If you are approached by the responsible party or their insurer about a
        settlement, talk to your own insurer first. For more on{' '}
        <Link href="/resources/policyholder-rights" className="text-[#2E74B5] hover:underline">
          your rights and obligations
        </Link>{' '}
        as a policyholder, see our dedicated guide.
      </p>

      {/* ───────── Key Takeaways ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Subrogation is the process by which your insurer recovers from the party that caused
          your loss. It is also typically the only way to get your deductible back.
        </li>
        <li>
          Under 10 CCR &sect;2695.7(p), your insurer <strong>must</strong> notify you in writing
          whether it intends to subrogate &mdash; and if it chooses not to, it must tell you that
          recovery is your responsibility.
        </li>
        <li>
          The insurer is not required to subrogate. But it is absolutely required to tell you its
          decision so you can protect yourself.
        </li>
        <li>
          Under 10 CCR &sect;2695.7(q), the insurer must include your deductible in any
          subrogation demand and share recoveries with you proportionately.
        </li>
        <li>
          California follows the made-whole doctrine: the insurer cannot take its subrogation
          share until you have been fully compensated for all of your losses.
        </li>
        <li>
          If the insurer fails to notify you and the statute of limitations expires, you may have
          lost your recovery rights permanently &mdash; and the insurer may be liable for bad
          faith.
        </li>
        <li>
          Always demand the subrogation notification in writing. Track the statute of limitations
          yourself. Follow up regularly. And if the insurer is not pursuing subrogation, consult
          an attorney about pursuing recovery independently.
        </li>
      </ul>

      {/* ───────── CTA ───────── */}
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Concerned About Your Subrogation Rights?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If a third party caused your property damage and your insurer has not told you whether
          it plans to subrogate, a licensed Public Adjuster can help you understand your options
          and protect your recovery rights.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      {/* ───────── Legal Disclaimer ───────── */}
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly
          based on individual circumstances. Consult a licensed attorney for advice about your
          specific situation.
        </p>
      </CalloutBox>
    </>
  )
}
