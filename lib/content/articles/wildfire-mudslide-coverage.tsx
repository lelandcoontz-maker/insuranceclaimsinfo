import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Mudslide After Wildfire: Why Earth Movement Is Covered When Fire Is the Cause',
  description:
    'When a wildfire strips vegetation and the next rain triggers a mudslide, the earth movement exclusion does not apply. Learn how the efficient proximate cause doctrine and the California Department of Insurance protect policyholders.',
  summary:
    'When a wildfire strips vegetation and the next rain triggers a mudslide, the earth-movement exclusion does not apply, because fire is the efficient proximate cause. California\'s doctrine and the CDI confirm the resulting mudslide damage is covered.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California&rsquo;s efficient proximate cause doctrine as it applies to post-wildfire
          mudslide and earth-movement losses, as a Licensed California Public Adjuster. It is
          not legal advice. The doctrine&rsquo;s application to a specific claim depends on the
          facts of the loss, the precise policy language, and current California law. For legal
          questions about a specific post-wildfire claim, consult a licensed California
          attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A wildfire burns through the hills above your home. Weeks or months later, the first heavy rain arrives &mdash; and with it, a wall of mud, debris, and boulders. The hillside, stripped of the vegetation that held it together, collapses onto your property. Your home is damaged or destroyed &mdash; not by flame, but by earth movement triggered by the fire that came before it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You file a claim. The adjuster reviews your policy and points to the earth movement exclusion &mdash; the standard language that excludes landslides, mudflow, and earth settling from coverage. On the face of the policy, it looks like the insurer has a textbook basis to deny.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But in California, this is not how it works. When a wildfire is the reason the hillside failed &mdash; when fire is the event that set the entire chain in motion &mdash; the earth movement exclusion does not control. The California Department of Insurance has taken this position formally, California courts have established the legal framework that supports it, and insurers operating in this state have largely followed that reasoning. This article explains why.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Earth Movement Exclusion: What the Policy Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies exclude earth movement. The language varies slightly between carriers, but the typical exclusion reads something like:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure for loss caused directly or indirectly by&hellip; earth movement, including but not limited to earthquake, landslide, mudflow, mudslide, sinkhole, subsidence, erosion, or any other earth movement&hellip;&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read in isolation, this language appears to exclude exactly the kind of loss we are discussing: a mudslide or debris flow that damages your home. And in many states, this exclusion would end the conversation. But California is not most states, and the analysis does not stop at the exclusion language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical question is not <em>what</em> caused the damage in the final moment of impact. The question is <em>what set the chain of events in motion</em>. If the answer to that question is a wildfire &mdash; a covered peril under every standard homeowner policy &mdash; then California law dictates that the loss is covered despite the earth movement exclusion.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Efficient Proximate Cause Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal foundation for this result is the <strong>efficient proximate cause doctrine</strong> &mdash; a principle deeply embedded in California insurance law. Under this doctrine, when a covered peril sets in motion a chain of events that ultimately produces a loss through an excluded peril, the loss is covered. The covered peril need not be the last event in the chain. It need not be the event that physically struck the house. It must be the <em>predominant</em> or <em>moving</em> cause &mdash; the event that set everything else in motion.
      </p>

      <CalloutBox variant="important" title="The Efficient Proximate Cause Doctrine">
        <p>
          Under California law, when a covered peril (wildfire) sets in motion a chain of events that leads to a loss through an otherwise-excluded peril (earth movement), the loss is covered &mdash; so long as the covered peril was the predominant cause. The earth movement exclusion does not override this analysis. Fire burned the hillside. Rain mobilized the soil. Mud hit the house. The efficient proximate cause of that entire sequence was fire.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The foundational California authorities are well established:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21:</strong> The California Supreme Court established the efficient proximate cause doctrine in the insurance context. Where a covered peril is the moving cause of a loss, coverage exists even when an excluded peril is part of the causal chain.
        </li>
        <li>
          <strong><em>Garvey v. State Farm Fire &amp; Casualty Co.</em> (1989) 48 Cal.3d 395:</strong> The California Supreme Court reinforced and refined the doctrine. The court confirmed that the efficient proximate cause analysis applies even when the policy contains an explicit exclusion for one of the concurring causes &mdash; and that insurers cannot use policy language to override this rule.
        </li>
        <li>
          <strong><em>Howell v. State Farm Fire &amp; Cas. Co.</em> (1990) 218 Cal.App.3d 1446:</strong> The California Court of Appeal directly applied <em>Sabella</em> and <em>Garvey</em> to post-fire mudslide facts: where rainfall mobilized fire-destabilized soil onto the insured property, the court held the earth-movement exclusion unenforceable because fire was the efficient proximate cause. <em>Howell</em> is the cleanest California authority for the exact factual pattern this article addresses.
        </li>
        <li>
          <strong>California Insurance Code &sect; 530:</strong> &ldquo;An insurer is liable for a loss of which a peril insured against was the proximate cause, although a peril not contemplated by the contract may have been a remote cause of the loss; but he is not liable for a loss of which the peril insured against was only a remote cause.&rdquo;
        </li>
        <li>
          <strong>California Insurance Code &sect; 530.5</strong> (added 2018): The Legislature codified the wildfire-as-efficient-proximate-cause rule after the Montecito debris flows. The statute affirms that when a fire is the predominating cause of a subsequent mudslide or other earth movement, the resulting loss is covered.
        </li>
        <li>
          <strong><em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) 35 Cal.4th 747:</strong> The California Supreme Court restated the general rule that policy exclusions are unenforceable to the extent they conflict with &sect; 530 and the efficient proximate cause doctrine. (Important nuance: on <em>Julian</em>&rsquo;s facts the Court ultimately enforced the carrier&rsquo;s weather-conditions/earth-movement exclusion as targeting a distinct peril; the case is most useful for its statement of the rule, not for its disposition. The directly controlling California case on ACC language in the post-fire-mudslide context is <em>Howell</em>, above.) The single-causal-chain framing remains important because insurers sometimes argue rainfall was an &ldquo;independent&rdquo; cause rather than a link in the chain fire started.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of the efficient proximate cause doctrine and how it applies across different types of claims, see our article on{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-blue-700 underline hover:text-blue-900">
          engineering reports vs. coverage determinations
        </Link>, which includes detailed analysis of <em>Sabella</em>, <em>Garvey</em>, Insurance Code &sect; 530, and CACI 2306.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Causal Chain: Fire to Mudslide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The factual pattern in post-wildfire mudslide claims follows a clear and well-documented sequence:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Wildfire burns through hillside terrain.</strong> The fire destroys vegetation, root systems, and organic material that hold soil in place. Intense heat can also create a hydrophobic (water-repellent) layer in the soil, which prevents water from absorbing into the ground as it normally would.
        </li>
        <li>
          <strong>The hillside becomes unstable.</strong> Without vegetation to anchor the soil and with a hydrophobic layer preventing water infiltration, the burn scar area becomes extraordinarily vulnerable to erosion and mass movement.
        </li>
        <li>
          <strong>Rainfall arrives.</strong> Precipitation that the hillside would have absorbed before the fire now runs off the surface, picking up soil, rock, and debris as it moves downhill.
        </li>
        <li>
          <strong>Mudslide, debris flow, or earth movement strikes the property.</strong> The resulting flow &mdash; which can include boulders, fallen trees, sediment, and flood water &mdash; damages or destroys homes in its path.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a single causal chain. Fire was the event that destabilized the hillside. Rain was the mechanism that mobilized the destabilized soil. The mud, debris, and earth movement were the physical results. Without the fire, the hillside would not have failed. The efficient proximate cause of the loss was the wildfire &mdash; a covered peril.
      </p>

      <CalloutBox variant="warning" title="Documenting the Causal Chain Is Critical">
        <p>
          The burden of establishing that wildfire was the efficient proximate cause typically falls on the policyholder. Document the burn history of the area: when the fire occurred, which slopes were affected, what the pre-fire vegetation conditions were, and what post-fire geological assessments show. County and state geological surveys, USGS debris flow hazard maps, and National Weather Service burn scar flash flood warnings all provide evidence that the mudslide was a direct consequence of the preceding fire.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CDI&rsquo;s Position: Earth Movement Claims After Wildfire
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has formally addressed this issue. Following the catastrophic January 2018 Montecito debris flows &mdash; which killed 23 people and destroyed over 100 homes after the December 2017 Thomas Fire denuded the hillsides above the community &mdash; then-Commissioner Dave Jones issued a formal Notice on January 29, 2018 (CDI Release 012-18) directing insurers that claims for debris flow and mudslide damage should be evaluated under the efficient proximate cause doctrine. The CDI&rsquo;s position is straightforward: if the Thomas Fire was the efficient proximate cause of the vegetation loss that led to the debris flows, those claims should be covered under the fire and wildfire coverage in the homeowner policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was not a novel legal theory. The CDI was articulating what <em>Sabella</em>, <em>Garvey</em>, <em>Howell</em>, and Insurance Code &sect; 530 already required. The Legislature then codified the rule for wildfire-related mudslides by enacting Insurance Code &sect; 530.5 in 2018. The formal CDI guidance and the statutory codification together put insurers on notice that improper denials based on the earth movement exclusion &mdash; when wildfire was the efficient proximate cause &mdash; would be treated as potential violations of the Fair Claims Settlement Practices Regulations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI has reinforced this position after subsequent wildfire seasons. Following the 2018 Camp Fire and Woolsey Fire, the 2020 fire season, and most recently after the January 2025 Palisades and Eaton fires, the Department has reaffirmed that the efficient proximate cause doctrine applies to post-wildfire earth movement claims. Commissioner Ricardo Lara issued <strong>CDI Bulletin 2025-3</strong> on February 4, 2025 (in the immediate aftermath of the LA-area fires), reminding insurers that California&rsquo;s anti-concurrent causation framework cannot be used to defeat coverage where a covered peril (the wildfire) was the efficient proximate cause of the subsequent earth-movement loss. Insurers denying these claims on earth movement exclusion grounds face scrutiny under California&rsquo;s unfair claims practices laws.
      </p>

      <CalloutBox variant="tip" title="Insurers Have Largely Followed This Reasoning">
        <p>
          To their credit, most insurers operating in California have respected the CDI&rsquo;s position and the underlying case law. Post-wildfire mudslide and debris flow claims are generally being evaluated under the efficient proximate cause framework, and many have been covered. This is not to say that every claim is handled smoothly &mdash; coverage disputes, valuation disagreements, and processing delays still occur &mdash; but the threshold question of <em>whether</em> these losses are covered has largely been resolved in the policyholder&rsquo;s favor in California.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Anti-Concurrent Causation Clauses: Why They Don&rsquo;t Apply Here
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have read other articles on this site, you have seen the anti-concurrent causation (ACC) clause discussed in several contexts. The standard ACC language appears at the beginning of the exclusions section in most modern homeowner policies:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        &ldquo;We do not insure for loss caused directly or indirectly by any of the following. Such loss is excluded regardless of any other cause or event that contributes concurrently or in any sequence to the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        In states that enforce this language, an insurer could argue that because earth movement was &ldquo;in the sequence&rdquo; of events, the entire loss is excluded &mdash; even though fire started the chain. The ACC clause would override the causal analysis and deny coverage based solely on the presence of an excluded peril somewhere in the sequence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California does not enforce anti-concurrent causation clauses in a manner that overrides the efficient proximate cause doctrine.</strong> The California Court of Appeal in <em>Howell v. State Farm Fire &amp; Cas. Co.</em> (1990) 218 Cal.App.3d 1446 directly held that ACC language cannot defeat coverage where a covered peril is the efficient proximate cause of the loss &mdash; on facts essentially identical to a post-fire mudslide claim. The California Supreme Court restated the general rule in <em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) 35 Cal.4th 747, although on <em>Julian</em>&rsquo;s specific facts the Court enforced the carrier&rsquo;s exclusion as targeting a distinct peril. Read together, <em>Howell</em> and <em>Julian</em> establish that ACC clauses are unenforceable in California to the extent they conflict with the efficient proximate cause rule established in <em>Sabella</em> and <em>Garvey</em> and codified in Insurance Code &sect;&sect; 530 and 530.5. An insurer cannot contractually eliminate the efficient proximate cause analysis by inserting ACC language into the policy.
      </p>

      <CalloutBox variant="important" title="California Does Not Enforce Anti-Concurrent Causation Language">
        <p>
          This is one of the most significant policyholder protections in California insurance law. In states that enforce ACC clauses, the presence of an excluded peril &mdash; anywhere in the chain of events, in any sequence &mdash; can defeat coverage entirely. In California, the analysis always returns to the same question: what was the predominant cause? If it was a covered peril, the claim is covered, regardless of what the ACC clause says.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed discussion of ACC clauses, their enforceability in different states, and why California rejects them, see our articles on{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-blue-700 underline hover:text-blue-900">
          engineering reports vs. coverage
        </Link>{' '}
        and{' '}
        <Link href="/resources/wear-and-tear-cause-of-loss" className="text-blue-700 underline hover:text-blue-900">
          wear and tear as a cause of loss
        </Link>. Both articles explain the ACC framework and why California&rsquo;s rejection of it matters for policyholders. Our guide on{' '}
        <Link href="/resources/pre-existing-vs-storm-damage" className="text-blue-700 underline hover:text-blue-900">
          pre-existing damage vs. storm damage
        </Link>{' '}
        also discusses the concurrent causation analysis in the context of storm claims where insurers attempt to attribute damage to pre-existing conditions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Is California-Specific
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This analysis reflects <strong>California law</strong>. The efficient proximate cause doctrine as described here, and particularly the unenforceability of ACC clauses, is not universal. A handful of other states &mdash; including Washington, West Virginia, and North Dakota &mdash; have similarly refused to enforce ACC language. But in the majority of states, ACC clauses are enforceable. In those jurisdictions, an insurer can deny a post-wildfire mudslide claim based on the earth movement exclusion, and the ACC language prevents the policyholder from arguing that fire was the predominant cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This difference is enormous. In an ACC-enforcing state, the insurer does not need to prove that earth movement was the predominant cause. It only needs to show that an excluded peril contributed &ldquo;in any sequence&rdquo; to the loss &mdash; a far lower bar. The efficient proximate cause analysis that protects California policyholders does not exist in those jurisdictions. If you are dealing with a post-wildfire earth movement claim outside of California, consult with a qualified attorney in your state who understands your jurisdiction&rsquo;s position on concurrent causation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Beyond Mudslides: Other Post-Wildfire Secondary Perils
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause analysis is not limited to mudslides. The same framework applies to other forms of damage that occur in the aftermath of a wildfire when the fire was the event that created the conditions for the subsequent loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Debris flows:</strong> Faster-moving and more destructive than mudslides, debris flows carry boulders, trees, and structural debris down burn-scarred slopes. The same causal chain applies: fire destroyed the vegetation, rain mobilized the material, the debris flow struck the property.
        </li>
        <li>
          <strong>Boulder strikes:</strong> Large rocks that were held in place by vegetation and root systems can be dislodged after a fire removes that natural anchoring. A boulder rolling downhill and striking a home after a wildfire is earth movement with fire as the efficient proximate cause.
        </li>
        <li>
          <strong>Erosion and hillside failure:</strong> Gradual or sudden erosion of burn-scarred slopes that undermines foundations, retaining walls, or driveways. If the erosion would not have occurred but for the fire, the same analysis applies.
        </li>
        <li>
          <strong>Flooding from burn scars:</strong> Hydrophobic soil conditions created by intense fire heat can cause flash flooding in areas that were not previously flood-prone. While flood is separately excluded, the efficient proximate cause analysis may apply when fire created the conditions that made flooding possible.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each case, the framework is the same: identify the event that set the chain in motion. If it was a covered peril, the loss should be covered under California law. For more on wildfire claims generally &mdash; including smoke contamination, coverage breakdowns, and insurer tactics &mdash; see our{' '}
        <Link href="/resources/wildfire-guide" className="text-blue-700 underline hover:text-blue-900">
          California wildfire claims guide
        </Link>. For claims involving heat and radiant damage from nearby fires without direct flame contact, see our article on{' '}
        <Link href="/resources/thermal-heat-damage" className="text-blue-700 underline hover:text-blue-900">
          thermal and heat damage from nearby wildfires
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Post-Wildfire Earth Movement Claim Is Denied
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While most California insurers are handling these claims consistently with the CDI&rsquo;s position, denials still occur. If your post-wildfire mudslide or earth movement claim is denied based on the earth movement exclusion, take these steps:
      </p>
      <CalloutBox variant="important" title="Professional Guidance Recommended">
        <p>
          The legal strategies discussed in this section should be pursued with the guidance of
          a licensed attorney experienced in insurance coverage disputes. A Public Adjuster can
          assist with the claims-handling, documentation, and negotiation aspects of your claim.
          If you need help finding a qualified professional,{' '}
          <Link href="/contact" className="text-[#2E74B5] hover:underline">
            contact us
          </Link>{' '}
          for a referral.
        </p>
      </CalloutBox>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the denial in writing with specific policy language cited.</strong> Under California&rsquo;s{' '}
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            Fair Claims Settlement Practices Regulations
          </Link>, the insurer must identify the specific policy provision it is relying on. A blanket denial referencing &ldquo;earth movement&rdquo; without addressing the efficient proximate cause doctrine is inadequate.
        </li>
        <li>
          <strong>Document the fire-to-mudslide causal chain.</strong> Gather evidence that the wildfire denuded the hillside and created the conditions for the subsequent earth movement. USGS debris flow hazard assessments, county geological surveys, Cal Fire burn perimeter maps, and National Weather Service post-fire warnings are all relevant evidence.
        </li>
        <li>
          <strong>Cite the efficient proximate cause doctrine with the assistance of an attorney.</strong> An attorney experienced in insurance coverage disputes can reference <em>Sabella v. Wisler</em>, <em>Garvey v. State Farm</em>, Insurance Code &sect; 530, and the CDI&rsquo;s guidance in your response to the denial, making clear that California law requires the insurer to evaluate the predominant cause of the loss, not merely identify the last peril in the chain.
        </li>
        <li>
          <strong>Address the ACC clause directly with attorney guidance.</strong> If the denial relies on anti-concurrent causation language, an attorney can respond that ACC clauses are unenforceable in California and cannot override the efficient proximate cause analysis.
        </li>
        <li>
          <strong>File a CDI complaint if the insurer persists.</strong> If the insurer maintains its denial despite the applicable law, a complaint to the California Department of Insurance is appropriate. See our guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            filing a CDI complaint
          </Link>. The CDI has been particularly attentive to post-wildfire earth movement denials.
        </li>
        <li>
          <strong>Engage a licensed Public Adjuster or attorney.</strong> These claims involve the intersection of complex causation analysis, policy interpretation, and regulatory requirements. A professional who understands both the technical and legal dimensions can build the case needed to overturn an improper denial.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Montecito Example
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The January 9, 2018 Montecito debris flows remain the most significant example of this issue in California. The Thomas Fire &mdash; at the time the largest wildfire in modern California history &mdash; burned through the mountains above Montecito in December 2017. Weeks later, an intense rainstorm struck the burn scar area. The result was catastrophic: massive debris flows carrying boulders the size of cars destroyed over 100 homes, damaged hundreds more, and killed 23 people.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These losses were caused by earth movement. There is no dispute about that. Mud, rock, and debris physically struck and destroyed the homes. But the earth movement would not have occurred without the Thomas Fire. The hillsides had held for decades through comparable rainstorms because intact vegetation and root systems stabilized the soil. Once the fire removed that vegetation, the hillsides were a catastrophe waiting for the next rain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI&rsquo;s guidance following Montecito made clear that these claims should be evaluated under the efficient proximate cause doctrine with fire as the predominant cause. Insurers largely complied. The Montecito example established the practical template for how post-wildfire earth movement claims are handled in California &mdash; a template that has been applied in subsequent fire seasons and that remains in effect today.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Looking Ahead: The 2025 Fires and Burn Scar Risks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Following the January 2025 Palisades and Eaton fires in Los Angeles, thousands of acres of hillside terrain are now burn-scarred and vulnerable to post-fire earth movement. The USGS has already published debris flow hazard assessments for the affected areas, and the National Weather Service has issued post-fire flash flood and debris flow watches in advance of anticipated rainfall.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Homeowners in and below these burn scar areas should understand that if debris flows, mudslides, or other earth movement damage their property, the efficient proximate cause of that damage is the wildfire that destabilized the hillside. California law protects your right to coverage in this scenario. The CDI has reaffirmed its position, and the legal framework is well established. Do not accept a denial based solely on the earth movement exclusion without understanding your rights.
      </p>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal advice. Nothing in this article should be construed as a legal opinion or as a substitute for consultation with a qualified attorney. The efficient proximate cause doctrine, the unenforceability of anti-concurrent causation clauses, and the case law discussed here reflect <strong>established California statutory and case law</strong> &mdash; not legal theory or argument. These are settled legal principles in California. However, other states may follow fundamentally different causation frameworks, and the analysis in this article may not apply outside California. Always consult with a licensed attorney in your jurisdiction about your specific claim.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Post-Wildfire Mudslide or Debris Flow Damage?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your home was damaged by a mudslide, debris flow, or other earth movement after a wildfire, you likely have coverage under your homeowner policy. A licensed Public Adjuster can document the causal chain, present the efficient proximate cause argument, and ensure your claim is handled under the correct legal framework.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
