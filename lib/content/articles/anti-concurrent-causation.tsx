import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Anti-Concurrent Causation Clauses: What They Are, Why They Matter, and Why California Ignores Them',
  description:
    'Anti-concurrent causation (ACC) clauses let insurers deny claims when any excluded peril contributes to a loss. In California, these clauses are unenforceable under the efficient proximate cause doctrine. Learn how ACC works, which policies contain it, and why your state matters more than your policy language.',
  summary:
    'Anti-concurrent causation clauses try to let insurers deny a loss if any excluded peril contributed. In California these clauses are unenforceable because the efficient proximate cause doctrine controls, so the predominant covered cause governs. Your state matters more than the policy wording.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If you believe an anti-concurrent causation clause has been improperly applied to your claim, consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Buried deep in the exclusions section of most standard homeowner policies is a clause that, in many states, gives insurance companies the power to deny an entire claim even when the primary cause of damage is a covered peril. It is called the <strong>anti-concurrent causation clause</strong> &mdash; or ACC clause &mdash; and it is one of the most insurer-friendly provisions in all of property insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The clause typically reads something like this:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure for loss caused directly or indirectly by any of the following. Such loss is excluded regardless of any other cause or event contributing concurrently or in any sequence to the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        In plain English, this means: if <em>any</em> excluded peril is involved in causing your loss &mdash; even if it was a minor contributing factor, even if it came at the end of a chain of events started by a covered peril &mdash; the entire claim is denied. No apportionment. No partial payment. Nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most states, courts enforce this language exactly as written. But in California, the story is fundamentally different. California courts have held that anti-concurrent causation clauses are <strong>unenforceable</strong> when they conflict with the state&rsquo;s efficient proximate cause doctrine. This article explains how ACC clauses work, why California rejects them, how other states treat them, and what this means for policyholders depending on where they live and what type of policy they have.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is an Anti-Concurrent Causation Clause?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An anti-concurrent causation clause is policy language that precedes certain exclusions &mdash; typically earth movement, water damage, neglect, government action, and nuclear hazard &mdash; and broadens them beyond their ordinary scope. Without an ACC clause, an exclusion applies only when the excluded peril is the actual cause of the loss. <em>With</em> an ACC clause, the exclusion applies whenever the excluded peril is involved in the causal chain at all, &ldquo;regardless of any other cause or event contributing concurrently or in any sequence to the loss.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ACC clause was introduced to standard ISO policy forms in 1986 as a direct response to the &ldquo;concurrent causation&rdquo; doctrine that courts in several states &mdash; including California &mdash; had developed in the 1970s and 1980s. Insurers saw courts ruling that when a covered and excluded peril combined to cause a loss, coverage existed. The ACC clause was designed to contract around those rulings and restore the insurer&rsquo;s ability to deny coverage whenever an excluded peril was even marginally involved.
      </p>

      <CalloutBox variant="important" title="Where You Find ACC Language">
        <p>
          ACC clauses are found in <strong>HO-3 Special Form</strong> homeowner policies and most commercial property policies. They are <strong>not</strong> found in DP-1 (Dwelling Fire &mdash; Basic Form) or DP-3 (Dwelling Fire &mdash; Special Form) policies. This distinction matters enormously for policyholders in high-risk areas, including those insured through the California FAIR Plan or surplus lines carriers.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Law: ACC Clauses Are Unenforceable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is one of a small number of states where anti-concurrent causation clauses simply do not work. The reason is statutory: California Insurance Code &sect; 530, which has been on the books for over a century, establishes the proximate cause rule for insurance:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;An insurer is liable for a loss of which a peril insured against was the proximate cause, although a peril not contemplated by the contract may have been a remote cause of the loss; but he is not liable for a loss of which the peril insured against was only a remote cause.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This statute means the question in every California claim is the same: <em>what was the proximate, predominating cause of the loss?</em> If a covered peril was the proximate cause, the loss is covered &mdash; even if an excluded peril also contributed. If the excluded peril was the proximate cause and the covered peril was merely a remote cause, the loss is not covered. The California Supreme Court calls this the <strong>efficient proximate cause doctrine</strong>, and it has been the law in California for over sixty years. For a detailed discussion of how this doctrine works, see our companion article on the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] hover:underline">efficient proximate cause doctrine</Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Landmark Cases
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several California decisions form the backbone of this area of law &mdash; two California Supreme Court decisions plus the Court of Appeal case that directly addressed anti-concurrent causation language:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21.</strong> This is the foundational case. A builder negligently installed a sewer line, causing the pipe to rupture. Water from the broken sewer, combined with seasonal rain, caused the foundation to settle. The insurer denied the claim under an earth movement exclusion. The California Supreme Court rejected the denial and held that &ldquo;in determining whether a loss is within an exception in a policy, where there is a concurrence of different causes, the efficient cause &mdash; the one that sets others in motion &mdash; is the cause to which the loss is attributed.&rdquo; Because the builder&rsquo;s negligence (a covered peril) set the chain in motion, the loss was covered despite the involvement of settling (an excluded peril).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Garvey v. State Farm Fire &amp; Casualty Co.</em> (1989) 48 Cal.3d 395.</strong> This is the California Supreme Court&rsquo;s definitive first-party property damage decision on efficient proximate cause. The Garvey family discovered structural damage caused by a combination of negligent construction (covered) and earth movement (excluded). State Farm denied the claim. The Supreme Court held that the &ldquo;efficient proximate cause&rdquo; &mdash; the predominating cause that set the others in motion &mdash; controls. If the covered peril predominated, the loss is covered. The Court remanded for a jury determination of which peril predominated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Howell v. State Farm Fire &amp; Cas. Co.</em> (1990) 218 Cal.App.3d 1446.</strong> This is the California decision that directly addressed anti-concurrent causation language &mdash; the very &ldquo;regardless of any other cause or event contributing concurrently or in any sequence to the loss&rdquo; phrasing at issue in this article. The State Farm policy in <em>Howell</em> contained that ACC language, and the Court of Appeal held that the insurer:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;... may not exclude coverage when a covered peril is the efficient proximate cause of loss even though an excluded peril has contributed to or is necessary for the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        That is the holding that controls ACC litigation in California: a contractual ACC clause cannot defeat coverage when a covered peril is the efficient proximate cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court has also stated the general rule. In <em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) 35 Cal.4th 747, the Court reaffirmed that &ldquo;policy exclusions are unenforceable to the extent that they conflict with section 530 and the efficient proximate cause doctrine.&rdquo; <strong>One important caveat about <em>Julian</em>:</strong> on the facts of that case, the Court actually <em>enforced</em> the carrier&rsquo;s exclusion, finding that a rain-induced landslide was a distinct excluded peril rather than a manifestation of the covered peril of rain alone. So the line between &ldquo;excluding a manifestation of a covered peril&rdquo; (which the ACC clause cannot do under <em>Howell</em>) and &ldquo;excluding a distinct peril altogether&rdquo; (which the insurer can still do) matters &mdash; and carriers will argue their exclusion falls on the &ldquo;distinct peril&rdquo; side of that line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Taken together, Insurance Code &sect; 530, <em>Sabella</em>, <em>Garvey</em>, and <em>Howell</em> establish California&rsquo;s rule that a contractual ACC clause cannot defeat coverage when a covered peril is the efficient proximate cause of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive discussion of these and other key California insurance decisions, see our article on{' '}
        <Link href="/resources/california-insurance-case-law" className="text-[#2E74B5] hover:underline">California insurance case law</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CDI Has Reinforced This Rule Repeatedly
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance (CDI) has not left this to the courts alone. The CDI has issued formal guidance &mdash; twice &mdash; reminding insurers that they cannot rely on earth movement or flood exclusions to deny claims when a covered peril was the efficient proximate cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>2018 Notice (Commissioner Dave Jones):</strong> After the 2017&ndash;2018 Thomas Fire and Montecito mudslides, the CDI issued a formal notice to all property and casualty insurance companies reminding them that mudflow exclusions are unenforceable where the efficient proximate cause of the mudslide was the wildfire. The notice referenced the holding in <em>Howell v. State Farm Fire &amp; Casualty Co.</em> (1990) 218 Cal.App.3d 1446, where the Court of Appeal concluded that an insurer providing coverage under a property insurance policy may not contractually exclude coverage when an insured peril (such as fire) is the efficient proximate cause of a loss, regardless of other contributing causes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Bulletin 2025-3 (Commissioner Ricardo Lara):</strong> Following the January 2025 Los Angeles wildfires, the CDI issued Bulletin 2025-3 on February 4, 2025, titled &ldquo;Coverage of Flood, Mudslide, and Earth Movement Claims Relating to Recent Wildfires.&rdquo; The bulletin states:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;If it is established that a recent wildfire or another peril covered by the applicable policy was the efficient proximate cause of the damage resulting from subsequent mudslides and other similar events following the fire, such damage is covered by the policy regardless of any exclusion in the applicable policy.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The phrase &ldquo;regardless of any exclusion&rdquo; is critical. It means that even if your policy has an earth movement exclusion preceded by anti-concurrent causation language, the CDI&rsquo;s position is that the exclusion cannot be used to deny coverage when fire set the chain of events in motion. For a detailed discussion of post-wildfire mudslide coverage, see our article on{' '}
        <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] hover:underline">mudslide coverage after wildfire</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policies Without ACC Language: DP-1 and DP-3 Forms
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all property insurance policies contain anti-concurrent causation clauses. Two common dwelling fire policy forms &mdash; the DP-1 (Basic Form) and the DP-3 (Special Form) &mdash; do not include ACC language. This is a significant advantage for policyholders insured under these forms. The reason matters.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        DP-1: The California FAIR Plan&rsquo;s Basic Fire Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The DP-1 is a named-peril policy &mdash; it covers only the specific perils listed in the policy, typically fire, lightning, internal explosion, and smoke. Because the DP-1 is a named-peril policy with a short list of covered perils, it does not need the broad exclusion structure found in HO-3 policies. There are no earth movement, water damage, or neglect exclusions preceded by ACC language because those perils were never covered in the first place. The DP-1 only pays when one of its listed perils causes the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan &mdash; the state&rsquo;s insurer of last resort for homeowners who cannot obtain coverage in the private market &mdash; issues DP-1 policies. For homeowners in wildfire-prone areas, this is often the only dwelling coverage available. For a detailed discussion of how the FAIR Plan works, see our guide to the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">California FAIR Plan</Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        DP-3: The Better Option in High-Risk Areas
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The DP-3 is a special form (open-peril) policy that covers all causes of loss to the dwelling unless a specific exclusion applies. Despite being an open-peril policy like the HO-3, the standard DP-3 form does not contain the anti-concurrent causation language found in HO-3 policies. This means the DP-3 has the broader coverage scope of an open-peril form without the ACC clause that allows insurers to weaponize their exclusions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, DP-3 policies are sometimes available from surplus lines carriers &mdash; including Lloyd&rsquo;s of London syndicates &mdash; for properties in fire zones where admitted carriers will not write an HO-3. A DP-3 from a surplus lines carrier actually provides a structural advantage over a standard HO-3 in one critical respect: even if the policyholder is in a state that enforces ACC clauses, the DP-3&rsquo;s lack of ACC language means the exclusion stands on its own terms, without the &ldquo;regardless of any other cause&rdquo; broadening effect.
      </p>

      <CalloutBox variant="tip" title="DP-3 vs. HO-3: The Hidden Advantage">
        <p>
          Many policyholders in fire zones view a DP-3 from a surplus lines carrier as inferior to a standard HO-3 because it lacks some of the endorsements and personal property coverages. But on the specific issue of causation and exclusions, the DP-3 is often <em>better</em>. Without ACC language, the insurer cannot use the earth movement exclusion to deny a claim where fire was the predominating cause &mdash; and the insurer cannot argue that the ACC clause makes the exclusion broader than its plain terms.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Examples: How ACC Clauses Affect Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The impact of anti-concurrent causation clauses is best understood through concrete examples. These scenarios illustrate how the same physical event can produce entirely different insurance outcomes depending on (1) whether the policy contains ACC language and (2) what state the property is in.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Example 1: Car Hits a Fire Hydrant and Collapses a Roof
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A car runs a stop sign and strikes a fire hydrant in front of a home. The hydrant shears off and sends a massive column of water into the air. The water lands on the roof, overwhelms the drainage, and the weight of the accumulated water causes a section of the roof to collapse. The vehicle never touched the building.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The causal chain is: <strong>vehicle impact &rarr; hydrant failure &rarr; water discharge &rarr; water accumulation on roof &rarr; roof collapse</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause of this loss is the vehicle impact. The vehicle is what set the entire chain of events in motion. Water accumulation on the roof was merely the mechanism through which the damage manifested &mdash; it was not the predominating cause. The vehicle did not need to physically strike the building for the vehicle to be the efficient proximate cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard HO-3 policy, vehicle impact is a covered peril. Even though water accumulation contributed to the collapse, the roof damage is covered because the vehicle started the chain. In California, this result holds regardless of whether the policy contains an ACC clause, because such clauses are unenforceable under <em>Howell</em> and &sect; 530 to the extent they conflict with the efficient proximate cause doctrine. In states that enforce ACC clauses, the result <em>still</em> likely favors the policyholder here, because the water did not come from a natural source &mdash; it came from a covered peril (vehicle damage to an artificial structure). But the analysis becomes more uncertain when the water issue is closer to an enumerated exclusion.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Example 2: Heavy Construction Vehicles Shake a Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Heavy construction vehicles &mdash; loaded dump trucks, bulldozers, excavators &mdash; travel down a residential street daily for months as part of a road widening project. The vehicles do not strike any of the adjacent buildings. But the repeated heavy vibrations from the vehicles transmit through the ground and cause the walls of a nearby home to crack, the foundation to shift, and interior finishes to separate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The causal chain is: <strong>vehicle operation &rarr; ground vibration (earth movement) &rarr; structural damage to the building</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most property policies exclude earth movement. The HO-3 policy excludes &ldquo;earth movement&rdquo; including &ldquo;earthquake, landslide, mudflow, mudslide, sinkhole, subsidence, erosion or movement of a body of mud or rock,&rdquo; and that exclusion is preceded by the anti-concurrent causation clause: &ldquo;regardless of any other cause or event contributing concurrently or in any sequence to the loss.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the policy form and the state law both matter:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>DP-1 or DP-3 policy (any state):</strong> These forms do not contain ACC language. The earth movement exclusion, if it exists at all, stands on its own terms. The policyholder argues that the efficient proximate cause was the vehicle operation &mdash; a covered peril &mdash; and that the earth movement was merely the mechanism through which the vehicle&rsquo;s energy reached the building. Without ACC language, the insurer cannot invoke the &ldquo;regardless of any other cause&rdquo; broadening. The analysis turns on standard causation principles.
        </li>
        <li>
          <strong>HO-3 policy in California:</strong> Even though the HO-3 contains ACC language, <em>Howell v. State Farm</em> and Insurance Code &sect; 530 make that language unenforceable to the extent it conflicts with the efficient proximate cause doctrine. The policyholder argues that the vehicle operation was the efficient proximate cause. If a trier of fact agrees, the loss is covered despite the earth movement exclusion and despite the ACC clause.
        </li>
        <li>
          <strong>HO-3 policy in a state that enforces ACC clauses (e.g., Texas, Florida, New York):</strong> The insurer points to the ACC clause and argues that because earth movement contributed to the loss &mdash; in any sequence &mdash; the entire claim is excluded. In most ACC-enforcing states, the insurer wins this argument. It does not matter that the vehicle was the predominating cause. The ACC clause eliminates the need for the insurer to prove that the excluded peril was the predominant cause &mdash; any involvement of the excluded peril, at any point in the chain, is enough.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Same Loss, Three Different Outcomes">
        <p>
          The physical facts are identical in all three scenarios above: construction vehicles caused ground vibrations that damaged a home. But the outcome depends entirely on the policy form and the state. On a DP-1 or DP-3 anywhere, or an HO-3 in California, the policyholder has a strong argument for coverage. On an HO-3 in Texas, the policyholder likely loses. This is why understanding your policy form and your state&rsquo;s law is critical.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Example 3: Wildfire Followed by Mudslide
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A wildfire burns through a hillside neighborhood, destroying vegetation and destabilizing the soil. Two months later, heavy rains arrive. Without the vegetation to hold the soil in place, a mudslide cascades down the hill and damages homes at the base. The homes were not damaged by the fire itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The causal chain is: <strong>wildfire &rarr; vegetation loss &rarr; soil destabilization &rarr; rain &rarr; mudslide &rarr; property damage</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire is a covered peril under every property policy. Earth movement (including mudslide) is excluded under most policies. The question is whether the fire&rsquo;s role as the event that stripped the hillside is enough to make it the efficient proximate cause of the mudslide damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the answer is yes &mdash; and both the courts and the CDI have said so. The Court of Appeal in <em>Howell v. State Farm</em> held that fire was the efficient proximate cause of a subsequent landslide, and CDI Bulletin 2025-3 explicitly states that mudslide damage following a wildfire is covered &ldquo;regardless of any exclusion in the applicable policy.&rdquo; The ACC clause cannot save the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a state that enforces ACC clauses, the insurer would argue that the earth movement exclusion &mdash; preceded by ACC language &mdash; eliminates coverage because a mudslide (an excluded peril) contributed to the loss &ldquo;in any sequence.&rdquo; In many of those states, the insurer wins. This is one of the most consequential differences in property insurance law between California and the majority of other states.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper analysis of this specific scenario, see our article on{' '}
        <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] hover:underline">wildfire and mudslide coverage</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California vs. Other States: A National Comparison
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The treatment of anti-concurrent causation clauses varies dramatically from state to state. Understanding where your state falls is essential to knowing whether your policy&rsquo;s ACC language has teeth.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        States That Refuse to Enforce ACC Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A small number of states have statutes or court decisions that prevent insurers from contracting around the proximate cause rule through ACC language. California is the most prominent, based on Insurance Code &sect; 530 and the <em>Julian</em> decision. Other states in this category include North Dakota, Washington, and West Virginia, where courts have held that ACC clauses violate public policy or conflict with state insurance statutes.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        States That Enforce ACC Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The majority of states enforce ACC clauses on the basis of freedom of contract. Courts in these states reason that the policyholder and insurer agreed to the policy terms, and the ACC clause unambiguously states the conditions under which the exclusion applies. States where courts have upheld ACC clauses include Texas, Florida, New York, Alabama, Arizona, Colorado, Indiana, Louisiana, Massachusetts, Michigan, New Jersey, Pennsylvania, South Carolina, and Tennessee, among others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In these states, the practical effect is severe: if 99% of a loss was caused by a covered peril (like wind) and 1% was attributable to an excluded peril (like flood), the ACC clause allows the insurer to deny the <em>entire</em> claim. No apportionment. No pro-rata payment. The involvement of the excluded peril, in any amount and at any point in the causal chain, is enough to trigger the exclusion.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Side-by-Side Comparison: The Same Loss in California vs. Texas
      </h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 p-3 text-left">Factor</th>
              <th className="border border-gray-300 p-3 text-left">California</th>
              <th className="border border-gray-300 p-3 text-left">Texas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">Scenario</td>
              <td className="border border-gray-300 p-3">Wildfire strips hillside; rain triggers mudslide that damages home</td>
              <td className="border border-gray-300 p-3">Same facts</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-semibold">Covered peril</td>
              <td className="border border-gray-300 p-3">Fire</td>
              <td className="border border-gray-300 p-3">Fire</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">Excluded peril</td>
              <td className="border border-gray-300 p-3">Earth movement / mudslide</td>
              <td className="border border-gray-300 p-3">Earth movement / mudslide</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-semibold">ACC clause in policy?</td>
              <td className="border border-gray-300 p-3">Yes (standard HO-3)</td>
              <td className="border border-gray-300 p-3">Yes (standard HO-3)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">Is ACC clause enforceable?</td>
              <td className="border border-gray-300 p-3">No &mdash; conflicts with &sect; 530 and <em>Howell</em></td>
              <td className="border border-gray-300 p-3">Yes &mdash; freedom of contract</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 font-semibold">Causation test applied</td>
              <td className="border border-gray-300 p-3">Efficient proximate cause (what set the chain in motion?)</td>
              <td className="border border-gray-300 p-3">ACC language (did an excluded peril contribute in any sequence?)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-semibold">Result</td>
              <td className="border border-gray-300 p-3 font-semibold text-green-700">Covered &mdash; fire was the efficient proximate cause</td>
              <td className="border border-gray-300 p-3 font-semibold text-red-700">Denied &mdash; earth movement contributed to the loss</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Misconceptions About ACC Clauses
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Misconception 1: &ldquo;If my policy says it&rsquo;s excluded, it&rsquo;s excluded.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most dangerous misconception. In California, the policy language is the starting point, not the final word. Insurance Code &sect; 530 is a mandatory rule of California insurance law. Insurers cannot contract around it. When the policy language conflicts with &sect; 530, the statute controls. The ACC clause is a contractual provision that attempts to override a statutory rule &mdash; and in California, the statute wins.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Misconception 2: &ldquo;The ACC clause only matters when two causes act simultaneously.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ACC clause explicitly covers causes acting &ldquo;concurrently or in any sequence.&rdquo; It is designed to capture both simultaneous causation (two causes acting at the same time) and sequential causation (one cause leading to another). The fire-then-mudslide scenario is a sequential causation case, and the ACC clause by its terms purports to exclude it. That is precisely why the clause is so dangerous in states that enforce it &mdash; and why California&rsquo;s refusal to enforce it is so significant.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Misconception 3: &ldquo;The efficient proximate cause doctrine only applies to fire.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The doctrine applies to any covered peril that sets a chain of events in motion. Fire is the most commonly litigated scenario because of the wildfire-mudslide sequence, but the doctrine has been applied in cases involving third-party negligence, defective construction, vehicle impacts, vandalism, and other covered perils. If a covered peril is the efficient proximate cause and an excluded peril is merely a link in the chain, the loss is covered in California regardless of what the excluded peril is.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What ACC Clauses Mean for{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">Coverage Disputes</Link>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a California policyholder and your insurer has denied a claim by citing an exclusion preceded by anti-concurrent causation language, the denial is not necessarily the final word. You should consider:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Identify the causal chain.</strong> What was the first event? What did it set in motion? What actually caused the physical damage to your property? If a covered peril started the chain, you have an efficient proximate cause argument.
        </li>
        <li>
          <strong>Check your policy form.</strong> Is your policy an HO-3, a DP-1, or a DP-3? If it is a DP-1 or DP-3, the ACC language may not be present at all, making your argument even more straightforward.
        </li>
        <li>
          <strong>Document the sequence of events.</strong> Photographs, videos, weather records, contractor reports, engineering assessments &mdash; anything that establishes the causal chain and supports the argument that the covered peril was the predominating cause.
        </li>
        <li>
          <strong>Know the key authorities.</strong> California courts have consistently upheld the efficient proximate cause doctrine over anti-concurrent causation clauses. As attorney John L. Corbett of Barnes &amp; Thornburg LLP has put it, &sect; 530 codifies the efficient proximate cause doctrine and California courts have repeatedly held that insurers cannot &ldquo;contract around&rdquo; this statutory mandate with an ACC clause. The key authorities are Insurance Code &sect; 530, <em>Sabella v. Wisler</em>, <em>Garvey v. State Farm</em>, and <em>Howell v. State Farm</em> (the Court of Appeal case that directly held ACC language cannot defeat EPC). <em>Julian v. Hartford Underwriters</em> also restates the general rule, although on its facts the Court enforced the carrier&rsquo;s exclusion. If the loss involves a post-wildfire mudslide, CDI Bulletin 2025-3 adds regulatory weight. If your insurer has denied coverage based on an ACC clause, discuss these authorities with your attorney.
        </li>
        <li>
          <strong>Get help early.</strong> Efficient proximate cause arguments are fact-intensive and often require expert analysis to establish the causal chain. A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">licensed Public Adjuster</Link>{' '}
          can help build the factual case, and an attorney may be needed if the insurer refuses to engage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding Policy{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">Exclusions</Link>{' '}
        With and Without ACC Language
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The presence or absence of ACC language changes how an exclusion operates. Consider the earth movement exclusion as an example:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Without ACC language</strong> (DP-1, DP-3): The exclusion applies when earth movement is the cause of the loss. If the policyholder can show that the earth movement was itself caused by a covered peril (like a vehicle, construction activity, or fire), the exclusion is analyzed under standard causation principles. The exclusion only bars coverage if the earth movement was the predominating cause.
        </li>
        <li>
          <strong>With ACC language, in California</strong> (HO-3): The exclusion contains the broadening ACC clause, but the clause is unenforceable under <em>Howell</em> and &sect; 530 to the extent it conflicts with the efficient proximate cause doctrine. The analysis is the same as above &mdash; the question is whether the covered peril was the efficient proximate cause.
        </li>
        <li>
          <strong>With ACC language, in an ACC-enforcing state</strong> (HO-3): The exclusion is broadened by the ACC clause. If earth movement contributed to the loss in any way, at any point in the sequence, the exclusion applies and coverage is denied &mdash; even if a covered peril was the predominating cause.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          Anti-concurrent causation clauses are designed to broaden exclusions by eliminating coverage whenever an excluded peril contributes to a loss &ldquo;in any sequence.&rdquo; In most states, they work exactly as intended.
        </li>
        <li>
          In California, ACC clauses are unenforceable under Insurance Code &sect; 530 and the Court of Appeal&rsquo;s decision in <em>Howell v. State Farm Fire &amp; Cas. Co.</em> (1990) 218 Cal.App.3d 1446. The California Supreme Court has also stated the general rule in <em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) 35 Cal.4th 747 (although <em>Julian</em> enforced the carrier&rsquo;s exclusion on the facts). The efficient proximate cause doctrine controls.
        </li>
        <li>
          DP-1 and DP-3 policy forms do not contain ACC language in the first place. If your policy is a DP-1 (like a California FAIR Plan policy) or a DP-3 (like policies sometimes available from surplus lines carriers in fire zones), the exclusions stand on their own terms without the ACC broadening.
        </li>
        <li>
          The California Department of Insurance has twice issued formal guidance &mdash; in 2018 and in Bulletin 2025-3 &mdash; confirming that mudslide and earth movement exclusions cannot be used to deny coverage when a wildfire was the efficient proximate cause.
        </li>
        <li>
          The same physical loss can be covered in California and denied in Texas, Florida, New York, and most other states, solely because of differences in how each state treats ACC language.
        </li>
        <li>
          If your insurer is relying on an ACC clause to deny your California claim, you have strong legal authority to push back. Document the causal chain and get professional help early.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">Was Your Claim Denied Because of an Anti-Concurrent Causation Clause?</h3>
        <p className="text-gray-600 text-sm mb-4">If your California insurer cited an earth movement, water damage, or other exclusion to deny a claim where a covered peril started the chain of events, you may have a strong case under the efficient proximate cause doctrine. A licensed Public Adjuster can help you build the factual and regulatory case to challenge the denial.</p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>This article is provided for general educational purposes only and does not constitute legal advice. Insurance policies, regulations, and case law can vary significantly based on individual circumstances. Consult a licensed attorney for advice about your specific situation.</p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
