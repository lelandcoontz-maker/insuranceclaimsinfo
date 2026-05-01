import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Mediation of Insurance Disputes: When and How to Use It',
  description:
    'Mediation can resolve insurance claim disputes faster and cheaper than litigation. Learn when it works, when it doesn\'t, and how to prepare for a strong outcome.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have fought with your insurance company for months. Your claim is underpaid,
        the adjuster will not budge, and you are stuck. Before jumping to a lawsuit —
        which can take years and cost thousands in legal fees — there is an intermediate
        option that resolves many insurance disputes effectively: <strong>mediation</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mediation is a voluntary, non-binding negotiation facilitated by a neutral third party (the
        mediator). It is faster, cheaper, and less adversarial than litigation. Both sides
        present their positions, the mediator helps identify common ground, and — in many cases —
        a settlement is reached in a single day.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurance Mediation Works
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Both sides agree to mediate.</strong> Mediation is voluntary — neither side can
          force the other. However, some policies contain mediation clauses, and some courts order
          mediation before trial. After a major disaster, the California Department of Insurance
          sometimes arranges mediation programs for affected policyholders.
        </li>
        <li>
          <strong>A mediator is selected.</strong> The mediator is a neutral professional —
          typically a retired judge or experienced attorney — who has no stake in the outcome.
          Both sides must agree on the mediator. For insurance disputes, select someone with
          insurance or construction experience.
        </li>
        <li>
          <strong>Pre-mediation briefs.</strong> Each side submits a written summary of their
          position to the mediator before the session. This includes the claim history, the
          dispute, the dollar figures, and supporting documentation.
        </li>
        <li>
          <strong>Joint session.</strong> The mediation typically begins with both sides in the
          same room. Each presents their case directly. This is often the first time the insurer&apos;s
          decision-maker hears the full story from the policyholder&apos;s perspective.
        </li>
        <li>
          <strong>Caucuses (private sessions).</strong> The mediator then meets separately with
          each side to explore settlement ranges, identify pressure points, and test the strength
          of each party&apos;s position. The mediator shares information between sides only with
          permission.
        </li>
        <li>
          <strong>Settlement or impasse.</strong> If both sides can reach an acceptable number,
          the settlement is documented in a binding written agreement. If not, the mediation ends
          in impasse, and both sides retain all their legal rights.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Mediation Works Best
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Disputes about the amount of loss.</strong> Both sides agree the loss is covered,
          but disagree on the dollar amount. This is the ideal scenario for mediation — the mediator
          can help bridge the gap.
        </li>
        <li>
          <strong>The insurer has decision-making authority present.</strong> Mediation only works
          if the person on the other side can actually authorize a settlement. Insist that the
          insurer send someone with full settlement authority, not just the field adjuster.
        </li>
        <li>
          <strong>Both sides want resolution.</strong> If both sides are genuinely tired of fighting
          and want to move on, mediation provides a structured way to get there.
        </li>
        <li>
          <strong>The claim involves substantial money.</strong> Mediation costs ($2,000–$10,000
          for a day session, often split between the parties) make sense when the dispute is over
          tens or hundreds of thousands of dollars.
        </li>
        <li>
          <strong>Complex claims with multiple coverages.</strong> When a claim involves dwelling,
          contents, ALE, ordinance or law, debris removal, and other coverages, the insurer may
          have underpaid on several fronts. Mediation allows a global resolution.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Mediation Does not Work
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage denials.</strong> If the insurer is denying coverage entirely (not just
          disputing the amount), mediation is unlikely to resolve a fundamental legal dispute
          about policy interpretation. This typically requires{' '}
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">litigation</Link>{' '}
          or at least the credible threat of it.
        </li>
        <li>
          <strong>Bad faith is the primary issue.</strong> If your goal is to pursue{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>{' '}
          damages (emotional distress, punitive damages), mediation alone will not get you there.
          Bad faith claims usually require litigation or the serious threat of it.
        </li>
        <li>
          <strong>The insurer sends someone without authority.</strong> If the insurer&apos;s
          representative cannot agree to anything without calling the home office, the
          mediation is a waste of time.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Mediation vs. Appraisal">
        <p>
          Do not confuse mediation with{' '}
          <Link href="/resources/appraisal" className="underline font-semibold">appraisal</Link>.
          Appraisal is a contractual right under your policy that produces a <em>binding</em>{' '}
          determination of the amount of loss. Mediation is voluntary and non-binding. Appraisal
          is limited to valuation disputes. Mediation can address any issue — coverage, process,
          timing, and amount. They can be used together or separately depending on your situation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Free CDI Mediation Program
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Senate Bill 64 (2003), the California Department of Insurance operates the{' '}
        <strong>Residential Property and Earthquake Claims Mediation Program</strong> — a free,
        informal alternative to private mediation or litigation. Key features:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Free to the policyholder.</strong> The insurer pays the mediator&apos;s fees,
          up to $1,500 maximum. You pay nothing.
        </li>
        <li>
          <strong>Eligibility.</strong> Your residential property loss must have occurred after
          September 30, 2003, and the Governor must have declared a &ldquo;state of emergency&rdquo;
          for the event that caused your loss (most major wildfires, earthquakes, and storms qualify).
        </li>
        <li>
          <strong>Informal and non-adversarial.</strong> The CDI describes the program as
          an &ldquo;informal, non-adversarial, and timely way to resolve a claim dispute.&rdquo;
        </li>
        <li>
          <strong>How to request it.</strong> Contact the CDI Consumer Hotline at 1-800-927-4357.
          After reviewing your situation, the Department will determine if the mediation program
          is appropriate and send you a Request for Assistance (RFA) form.
        </li>
      </ul>

      <CalloutBox variant="important" title="CDI Mediation Is Separate from Private Mediation">
        <p>
          The CDI program is a good first step for smaller disputes or where the cost of private
          mediation ($2,000–$10,000+) is prohibitive. However, it has limitations: the mediator fee
          cap of $1,500 may limit the pool of available mediators for complex, high-value claims.
          For large claims, private mediation with an experienced insurance mediator — or the{' '}
          <Link href="/resources/appraisal" className="underline font-semibold">appraisal process</Link>{' '}
          — may be more effective.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Prepare for Insurance Mediation
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Organize your documentation.</strong> Bring your policy, all correspondence with
          the insurer, your contractor&apos;s estimate, the insurer&apos;s estimate, photos, and
          a clear timeline of the claim. The better organized you are, the more credible your
          position.
        </li>
        <li>
          <strong>Know your numbers.</strong> Have a clear picture of what you believe the claim is
          worth, broken down by coverage: dwelling, contents, ALE, debris removal, ordinance or
          law. Also know your walk-away number — the minimum you&apos;ll accept.
        </li>
        <li>
          <strong>Prepare a mediation brief.</strong> A 3–5 page written summary of your position,
          with exhibits, gives the mediator context and demonstrates that you are prepared to
          litigate if necessary.
        </li>
        <li>
          <strong>Bring your Public Adjuster or attorney.</strong> Having professional
          representation at mediation signals to the insurer that you are serious and
          knowledgeable. Your representative can also identify weaknesses in the insurer&apos;s
          position during caucuses.
        </li>
        <li>
          <strong>Be prepared for a full day.</strong> Most insurance mediations take 6–10 hours.
          The process involves rounds of offers and counter-offers with significant waiting time
          between caucuses.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of the Mediator
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mediator does not decide who is right. They facilitate a negotiation. A good insurance
        mediator will:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Help each side understand the strengths and weaknesses of their position</li>
        <li>Reality-test unrealistic expectations on both sides</li>
        <li>Identify creative solutions (structured payments, phased repairs, etc.)</li>
        <li>Keep the process moving when negotiations stall</li>
        <li>Maintain confidentiality of private communications during caucuses</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cost of Mediation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mediator fees in California typically range from $300–$600/hour for a full-day session,
        totaling $2,000–$6,000. The cost is usually split equally between the parties, so your
        share might be $1,000–$3,000. Compare this to litigation, which can cost $20,000–$100,000+
        in attorney fees and take 1–3 years.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After Mediation
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>If you settle:</strong> The agreement is put in writing and signed by both
          parties. It is binding and enforceable. Payment typically follows within 30 days.
        </li>
        <li>
          <strong>If you do not settle:</strong> Nothing said in mediation can be used against
          you in court. Your legal rights are fully preserved. You can proceed with appraisal,
          CDI complaint, or litigation.
        </li>
        <li>
          <strong>Partial resolution:</strong> Sometimes mediation resolves some issues but not
          others. You can settle the agreed portions and continue disputing the rest.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Stuck With Your Insurance Company?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can help you exhaust every avenue before mediation — and represent
          you at the table if it comes to that.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
    </>
  )
}
