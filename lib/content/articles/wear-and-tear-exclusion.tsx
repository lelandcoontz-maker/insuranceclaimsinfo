import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Wear and Tear Exclusion: When Insurance Companies Confuse Condition with Causation',
  description:
    'The wear and tear exclusion is a cause of loss exclusion, not a condition exclusion. It excludes losses caused by wear and tear — not losses to property that happens to show wear and tear. Learn why "condition is not causation," how California\'s efficient proximate cause doctrine protects policyholders with older property, and how to fight improper wear and tear denials.',
  summary:
    'The wear and tear exclusion bars losses caused by wear and tear, not losses to property that merely shows wear. Insurers confuse condition with causation to deny; if a covered peril caused the damage, an old or worn component is still payable.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If you believe your insurer has improperly applied the wear and tear exclusion to your claim, consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is a sentence that appears in nearly every homeowner insurance denial letter involving an older roof, an aging pipe, or a weathered foundation: &ldquo;The damage is consistent with wear and tear.&rdquo; The insurer&rsquo;s adjuster walks the property, observes that components are aged, and writes a report concluding that the damage was caused by &ldquo;normal wear and tear, deterioration, and lack of maintenance&rdquo; &mdash; all excluded perils under the policy. Claim denied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This denial is wrong far more often than it is right. And the reason it is wrong comes down to a single principle that many adjusters either do not understand or choose to ignore: <strong>condition is not causation</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The wear and tear exclusion is a <em>cause of loss</em> exclusion. It excludes losses <em>caused by</em> wear and tear. It does not exclude losses where wear and tear is merely <em>present as a condition</em> at the time a covered peril strikes. Every roof ages. Every pipe corrodes. Every foundation settles. But when a windstorm tears shingles off a fifteen-year-old roof, the cause of the loss is <em>wind</em>, not the age of the shingles. The worn condition of the shingles did not rip them off the roof. The wind did.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains why the distinction between condition and causation matters, how the &ldquo;but for&rdquo; test clarifies causation, how California&rsquo;s efficient proximate cause doctrine protects policyholders, and what you can do when an insurer uses the wear and tear exclusion to deny a claim that should be covered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Policy Language: What the Exclusion Actually Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 Special Form homeowner policy excludes the following:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Wear and tear, marring, deterioration.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies expand this language slightly, adding references to &ldquo;inherent vice, latent defect, mechanical breakdown,&rdquo; or &ldquo;rust, rot, mold, or other fungi, or wet or dry rot.&rdquo; But the core exclusion is the same: damage caused by the gradual deterioration of property through normal use, aging, and exposure to the elements is not covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Notice the operative phrase: <em>caused by</em>. The exclusion applies when wear and tear is the <strong>cause</strong> of the loss. A rubber seal on a water heater that slowly degrades over the years until it fails and leaks &mdash; that is wear and tear causing a loss. Paint that peels from UV exposure over a decade &mdash; that is deterioration causing a loss. A roof that gradually loses granules from age and weather until it can no longer keep water out during ordinary rain &mdash; that is arguably wear and tear causing a loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what about that same roof when a windstorm with 70 mph gusts tears entire sections of shingles off? What about an old pipe that has been functioning for years but bursts when a pressure surge hits the system? What about an aging foundation that cracks during an earthquake? In each of these scenarios, a covered peril &mdash; wind, water pressure, earthquake &mdash; was the force that produced the damage. The aged condition of the component was just that: a condition. It was present. It was observable. But it was not the cause.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Core Principle: Condition Is Not Causation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the principle that every policyholder, every public adjuster, and every attorney handling a wear and tear dispute must understand at its core: <strong>the presence of a condition at the time of a loss does not make that condition the cause of the loss</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A condition is a state of being. It describes what something <em>is</em>. A cause is a force or event. It describes what <em>happened</em>. The shingles were worn &mdash; that is a condition. The wind tore them off &mdash; that is a cause. The pipe was corroded &mdash; that is a condition. The pressure surge ruptured it &mdash; that is a cause. The foundation was old &mdash; that is a condition. The earthquake cracked it &mdash; that is a cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer denies a claim by pointing to the condition of the damaged property, the insurer is conflating two fundamentally different concepts. It is observing that the property was not new and concluding that the property&rsquo;s age caused the damage. But age does not cause sudden damage. Age does not cause a roof to lose shingles on a single day during a storm. Age does not cause a pipe to burst on a specific afternoon. Age creates <em>vulnerability</em>. The covered peril exploits that vulnerability. Vulnerability is not causation.
      </p>

      <CalloutBox variant="important" title="The Critical Distinction">
        <p>
          Wear and tear exclusions are <strong>cause of loss</strong> exclusions. They exclude losses <em>caused by</em> wear and tear. They do not exclude losses where wear and tear is merely <em>present as a condition</em> at the time of the loss. If it has already been established that a covered peril &mdash; wind, hail, fire, accidental water discharge &mdash; is the cause of the loss, then the wear and tear exclusion does not apply. The condition of the property before the loss event is irrelevant to the question of what caused the loss.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this analogy. A person with osteoporosis &mdash; a pre-existing condition that weakens bones &mdash; slips on ice and breaks a hip. The osteoporosis made the bone more vulnerable to fracture. But the osteoporosis did not break the hip. The fall broke the hip. If that person has accident insurance, the insurer cannot deny the claim by saying &ldquo;the fracture was caused by osteoporosis.&rdquo; The fracture was caused by the fall. The osteoporosis was a condition, not the cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same logic applies to property insurance. A fifteen-year-old roof with some granule loss is more vulnerable to wind damage than a brand-new roof. But when a windstorm tears the shingles off, the wind tore the shingles off. The granule loss did not tear the shingles off. The insurer cannot point to the age and condition of the shingles and say &ldquo;wear and tear caused this.&rdquo; Wear and tear created the condition. Wind caused the damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;But For&rdquo; Test: Establishing Causation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorneys use a simple but powerful test to determine causation: the &ldquo;but for&rdquo; test. It asks a single question: <strong>but for the covered peril, would the damage have occurred?</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Apply this test to a worn roof damaged in a windstorm. But for the wind, would the shingles have torn off? The answer is no. The shingles had been sitting on that roof for fifteen years. They were worn, weathered, and past their prime. But they were <em>still on the roof</em>. They did not detach themselves. They did not slide off from gravity alone. They remained in place until the wind applied sufficient force to tear them free. Without the wind, the shingles would still be there &mdash; worn, but intact.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the answer to the &ldquo;but for&rdquo; question is &ldquo;no, the damage would not have occurred without the covered peril,&rdquo; then the covered peril is the cause of the loss. The condition of the property is relevant context, perhaps, but it is not the cause. And a cause of loss exclusion &mdash; which is what the wear and tear exclusion is &mdash; requires a <em>cause</em>, not a <em>condition</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now apply the same test in reverse. But for the wear and tear, would the damage have occurred? If the answer is &ldquo;yes &mdash; the wind would have torn these shingles off regardless of their age or condition,&rdquo; then wear and tear is entirely irrelevant. And even if the answer is &ldquo;the wind might not have torn off <em>brand-new</em> shingles, but it did tear off these aged ones&rdquo; &mdash; that still does not make wear and tear the cause. The wind was the force. The worn condition was a contributing factor at most. And in California, when a covered peril is the predominating cause, the entire loss is covered.
      </p>

      <CalloutBox variant="tip" title="Asking the Right Question">
        <p>
          When your claim is denied for &ldquo;wear and tear,&rdquo; ask this question: <em>But for the covered event &mdash; the storm, the pressure surge, the impact &mdash; would this damage have occurred on this day?</em> If the answer is no, then the covered event is the cause of the loss. The condition of the property is just the backdrop.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Efficient Proximate Cause Doctrine in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides an additional layer of protection for policyholders through the <strong>efficient proximate cause doctrine</strong>. Under this doctrine, when a loss involves both covered and excluded causes, the loss is covered if the covered peril was the <em>predominating</em> cause &mdash; the cause that set the others in motion. The insurer cannot isolate an excluded peril from the causal chain and use it to deny the entire claim. For a comprehensive discussion of this doctrine and its landmark cases, see our{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">
          efficient proximate cause guide
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The doctrine was established by the California Supreme Court in <em>Sabella v. Wisler</em> (1963) 59 Cal.2d 21, and its application to concurrent causation disputes was solidified in <em>Garvey v. State Farm Fire &amp; Casualty Co.</em> (1989) 48 Cal.3d 395. In <em>Garvey</em>, the Court held that when a covered peril is the efficient proximate cause of a loss, the loss is covered even if an excluded peril contributed to the chain of events. The Court further held that anti-concurrent causation clauses &mdash; policy language that attempts to deny coverage whenever <em>any</em> excluded peril is involved &mdash; are unenforceable in California to the extent they conflict with Insurance Code &sect;530.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance Code &sect;530 provides the statutory foundation:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;An insurer is liable for a loss of which a peril insured against was the proximate cause, although a peril not contemplated by the contract may have been a remote cause of the loss; but he is not liable for a loss of which the peril insured against was only a remote cause.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Applied to a wear and tear dispute, this statute is remarkably clear. If the peril insured against (wind, hail, accidental water discharge) was the proximate cause of the loss, the insurer is liable &mdash; even if wear and tear, deterioration, or lack of maintenance may have been a &ldquo;remote cause&rdquo; or contributing condition. The statute does not say &ldquo;the insurer is not liable if the property was old.&rdquo; It says the insurer is not liable only if the covered peril was &ldquo;only a remote cause.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practical terms, this means the insurer must do more than observe that components are worn. The insurer must demonstrate that wear and tear &mdash; not the covered peril &mdash; was the predominating cause of the loss. If the insurer cannot make that showing, and instead has merely documented a condition that was present at the time of a covered event, the exclusion does not apply.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Wear and Tear Exclusion Interacts With Anti-Concurrent Causation Clauses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many standard homeowner policies contain an{' '}
        <Link href="/resources/anti-concurrent-causation" className="text-[#2E74B5] underline">
          anti-concurrent causation (ACC) clause
        </Link>{' '}
        at the beginning of the exclusions section. This clause typically reads:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure for loss caused directly or indirectly by any of the following. Such loss is excluded regardless of any other cause or event contributing concurrently or in any sequence to the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ACC clause is designed to prevent the very analysis this article describes. It attempts to tell the court: &ldquo;Don&rsquo;t look at the causal chain. Don&rsquo;t ask what the predominating cause was. If an excluded peril was involved at all &mdash; in any way, in any sequence &mdash; the loss is excluded.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, this clause is unenforceable to the extent it conflicts with the efficient proximate cause doctrine. The California Supreme Court made this clear in <em>Garvey</em> and reaffirmed it in <em>Julian v. Hartford Underwriters Insurance Co.</em> (2005) 35 Cal.4th 747. Regardless of what the ACC clause says, if a covered peril was the predominating cause of the loss, coverage applies. The clause cannot override Insurance Code &sect;530, which is a statutory protection that policy language cannot contract around.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, it is worth noting that wear and tear is typically listed among the exclusions that appear <em>after</em> the ACC clause in many standard policies, meaning the ACC language is intended to apply to it. In states that enforce ACC clauses, this is a significant problem for policyholders because the insurer can argue that any involvement of wear and tear &mdash; however remote &mdash; bars the entire claim. In California, this argument fails because the ACC clause itself is not enforceable against a predominating covered cause. For a deeper analysis of how ACC clauses work across different jurisdictions, see our{' '}
        <Link href="/resources/anti-concurrent-causation" className="text-[#2E74B5] underline">
          detailed ACC guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Scenarios: Worn Components and Covered Perils
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The condition-versus-causation distinction arises in virtually every type of property claim involving older structures. Understanding the most common scenarios helps illustrate how the principle works in practice.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Worn Roof + Wind
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most frequently litigated scenario. A homeowner files a claim after a windstorm damages their roof. The insurer&rsquo;s adjuster inspects the roof, photographs granule loss, notes that the shingles are fifteen or twenty years old, and concludes that the damage is &ldquo;consistent with normal wear and tear&rdquo; rather than the reported wind event. The denial letter invokes the wear and tear exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the adjuster&rsquo;s own report often undermines this conclusion. If the damage is concentrated on the windward-facing slopes of the roof while the leeward slopes remain intact, that is a directional pattern caused by wind &mdash; not aging. If shingles are creased, lifted, or torn along the leading edge, those are mechanical damage signatures from wind uplift &mdash; not deterioration. If the damage appeared immediately after a documented wind event and no damage was reported before, the timing points to the storm.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;but for&rdquo; test resolves this cleanly. But for the windstorm, would the shingles have torn off on that particular day? No. The shingles were worn, but they were on the roof. The wind is what removed them. The cause of loss is wind. For a detailed discussion of how to distinguish storm damage from pre-existing conditions, see our{' '}
        <Link href="/resources/pre-existing-vs-storm-damage" className="text-[#2E74B5] underline">
          pre-existing damage vs. storm damage guide
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Old Pipes + Sudden Water Discharge
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner returns home to find water flooding the kitchen. A supply line behind the wall has burst. The insurer inspects and notes that the pipe is original to the home, shows signs of internal corrosion, and was &ldquo;at the end of its useful life.&rdquo; The claim is denied as wear and tear.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the policy covers &ldquo;accidental discharge or overflow of water&rdquo; from a plumbing system. That is a covered peril. The pipe may have been corroded &mdash; a condition &mdash; but it was still holding water and functioning until the moment it failed. Something triggered the failure on that specific day: a water pressure fluctuation, a temperature change, a minor vibration. The corrosion made the pipe vulnerable, but the immediate mechanical failure and resulting water discharge is what caused the damage to the home&rsquo;s interior. Corrosion was the condition. The discharge was the cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note an important nuance here. If the pipe had been gradually seeping for months, causing slow water damage over time with no sudden event, the wear and tear analysis becomes stronger for the insurer. The distinction between a sudden failure and a gradual leak is critical. Policies typically cover <em>sudden and accidental</em> discharge, not long-term seepage. But when a corroded pipe bursts suddenly, the suddenness of the discharge distinguishes it from gradual deterioration.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Aging Foundation + Earthquake
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A home built in the 1960s sustains foundation cracking during an earthquake. The earthquake insurance adjuster notes that the foundation shows evidence of prior hairline cracking and settlement &mdash; both consistent with decades of minor soil movement &mdash; and attributes the damage to &ldquo;pre-existing settlement and deterioration&rdquo; rather than the earthquake.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;but for&rdquo; test applies. But for the earthquake, would these specific cracks have appeared on this specific day? No. The foundation had hairline cracks that had been stable for years. The earthquake introduced sudden, intense ground motion that expanded those cracks and created new ones. The pre-existing hairline cracking was a condition. The earthquake was the cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This scenario is particularly important because earthquake policies are separate from standard homeowner policies, and the causation analysis may differ depending on the specific policy language. But the fundamental principle &mdash; condition is not causation &mdash; applies regardless of the policy type.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Weathered Siding + Hail Impact
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail claims generate some of the most contentious wear and tear disputes. Siding or roofing that has been exposed to UV radiation for years may show fading, chalking, or minor surface deterioration. When a hailstorm strikes and produces impact marks, fractures, or dents, the insurer&rsquo;s engineer may attribute the damage to &ldquo;prior weathering and UV degradation&rdquo; rather than hail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But hail impact damage has specific forensic signatures that distinguish it from weathering. Impact fractures radiate from a central point of contact. Dents in metal surfaces correspond to the size and velocity of the hailstones. Spatter marks from soft hail leave distinctive patterns on painted surfaces. These signatures are caused by kinetic energy transfer from a hailstone striking a surface &mdash; not by years of UV exposure. The chalking and fading are conditions. The impact damage is caused by hail.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Worn Electrical Wiring + Fire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Older homes sometimes experience electrical fires caused by deteriorated wiring insulation, overloaded circuits, or corroded connections. When the fire department identifies the fire&rsquo;s origin as an electrical panel or junction box with aged wiring, the insurer may be tempted to attribute the fire to &ldquo;deterioration&rdquo; or &ldquo;lack of maintenance&rdquo; rather than the fire itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But fire is a covered peril under essentially every homeowner policy. The cause of the <em>loss</em> is the fire. The deteriorated wiring may have been the cause of the <em>fire</em>, but the wear and tear exclusion applies to the cause of the <em>loss</em>, not to the origin of every contributing event in the chain. In California, even if the wiring deterioration is viewed as a cause in the chain, the efficient proximate cause doctrine would look to the predominating cause of the property damage &mdash; which is the fire itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Misuse the Wear and Tear Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the common patterns in how the wear and tear exclusion is applied allows policyholders and their representatives to recognize when the exclusion is being stretched beyond its proper scope. Several patterns appear consistently across claims files.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Observing a Condition and Calling It a Cause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most fundamental error &mdash; and the one this entire article is built around &mdash; is the practice of observing the worn condition of a damaged component and concluding that wear and tear is the cause of the damage. The adjuster photographs aged shingles, notes the age of the roof in the report, and writes &ldquo;damage is consistent with normal wear and tear.&rdquo; This conclusion leaps from observation to causation without any analysis of what actually happened to produce the damage on the date of loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A proper causation analysis would ask: what force acted on these shingles to produce this damage? Was there a documented weather event? Is the damage pattern directional? Are there impact marks, creases, or uplift signatures? Is the damage concentrated on specific slopes or elevations? What do the meteorological records show? An analysis that begins and ends with &ldquo;the shingles are old&rdquo; is not a causation analysis. It is a condition observation masquerading as one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conflating Vulnerability With Causation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Related to the above, some denial letters acknowledge that a covered event occurred but argue that the damage would not have happened if the property had been in better condition. The subtext is: &ldquo;Yes, there was a storm, but a newer roof would have survived it.&rdquo; This argument treats the property&rsquo;s vulnerability as the cause of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But insurance policies do not require policyholders to maintain their property in storm-proof condition as a prerequisite for coverage. Policies insure the property <em>as it is</em>, not as it would be if it were brand new. A policyholder pays premiums on the property they actually own, in its actual condition. If the insurer wanted to exclude coverage for properties with aged components, it could decline to write the policy, impose a maintenance requirement, or endorse specific condition-based exclusions. The wear and tear exclusion does not serve this function. It excludes damage <em>caused by</em> wear and tear &mdash; not damage that occurs <em>to</em> property that has experienced wear and tear.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Using Desk Reviews Instead of Field Inspections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An increasingly common practice is the &ldquo;desk review&rdquo; denial, in which an insurer&rsquo;s engineer reviews aerial photographs, satellite imagery, or the field adjuster&rsquo;s photos without ever visiting the property, and issues an opinion that the damage is &ldquo;consistent with wear and tear.&rdquo; These reviews frequently rely on pre-loss Google Earth images to argue that the roof already showed signs of aging, or on manufacturer specifications to argue that the roof was &ldquo;beyond its useful life.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem with this approach is that photographs alone cannot establish causation. A satellite image showing a darkened or mottled roof does not prove that the roof was about to fail. It shows a condition. Whether that condition became a cause &mdash; or whether a covered peril intervened and caused separate damage &mdash; requires on-site inspection, physical testing, and analysis of the damage patterns. Desk reviews that conclude &ldquo;wear and tear&rdquo; without this level of analysis are making causation determinations without adequate evidence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Relying on Roof Age as a Proxy for Causation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers use the age of the roof as a threshold: if the roof is over a certain age &mdash; fifteen years, twenty years, or beyond the manufacturer&rsquo;s warranty period &mdash; any damage is attributed to wear and tear, regardless of the circumstances. This is an underwriting shortcut, not a causation analysis. A twenty-year-old roof can sustain wind damage just as a five-year-old roof can. The age of the roof might affect how <em>easily</em> it sustains damage, but it does not determine <em>what caused</em> the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This approach is particularly problematic because it effectively converts the wear and tear exclusion from a cause-of-loss exclusion into a condition-of-property exclusion. The exclusion does not say &ldquo;we do not cover damage to components older than X years.&rdquo; It says &ldquo;we do not cover damage <em>caused by</em> wear and tear.&rdquo; Age is not a peril. Age is a condition.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of Expert Opinions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer denies a claim based on wear and tear, the policyholder&rsquo;s response almost always requires expert evidence. The insurer has framed its denial around a causation conclusion &mdash; &ldquo;wear and tear caused this damage&rdquo; &mdash; and the policyholder must counter with a causation analysis of their own. The types of experts and the type of evidence they provide depend on the nature of the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Roofing and Building Envelope Experts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For wind and hail claims involving roofing, a qualified roofing expert can distinguish between storm damage signatures and normal aging. Key indicators include directional damage patterns (storm-related damage concentrates on windward slopes), mechanical damage signatures (creasing, tearing, and lifting from wind uplift), hail impact marks (circular fractures radiating from a point of impact), and the absence of damage on sheltered areas (eaves, dormers, and leeward slopes). A roofing expert who walks the roof and documents these patterns can provide a causation opinion that directly rebuts the insurer&rsquo;s &ldquo;wear and tear&rdquo; conclusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Forensic Engineers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For plumbing failures, foundation damage, and structural claims, a forensic engineer can analyze the failure mode and determine whether the component failed from gradual deterioration or from a sudden event. Pipe failures, for example, leave metallurgical evidence: a pipe that failed from internal corrosion over time will show uniform thinning and pitting, while a pipe that burst from a sudden pressure event will show a different fracture pattern. A forensic engineer can identify the triggering event and distinguish it from the pre-existing condition.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Meteorologists
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Weather data is critical in challenging wear and tear denials for weather-related claims. A certified consulting meteorologist can provide a report documenting the wind speeds, hail size, precipitation intensity, and other weather conditions at the property&rsquo;s specific location on the date of loss. If the meteorological data confirms that the property was exposed to damaging weather, this establishes that a covered peril was present and capable of causing the type of damage observed &mdash; directly undermining the insurer&rsquo;s assertion that wear and tear alone was responsible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurer&rsquo;s Expert vs. Your Expert
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should be aware that the insurer&rsquo;s &ldquo;expert&rdquo; &mdash; typically an engineering firm retained on a repeat basis &mdash; is not a neutral party. These firms issue hundreds or thousands of reports per year for the same insurance companies. Their reports are generated in a context where the hiring party benefits from a &ldquo;wear and tear&rdquo; conclusion. This does not mean the reports are automatically wrong, but it does mean they should be scrutinized carefully. A policyholder who retains an independent expert to conduct a competing inspection is exercising the right to challenge the insurer&rsquo;s causation conclusion with evidence of equal or greater weight.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Challenging a Wear and Tear Denial: Step by Step
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer has denied your claim based on wear and tear, you are not without options. The following framework outlines the key steps to challenge the denial effectively.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Get the Denial in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer communicated the denial verbally, request a written denial letter that specifically identifies the policy language the insurer is relying on and explains the factual basis for the denial. California&rsquo;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        require insurers to provide written explanations for claim denials, including specific policy provisions and factual bases. A vague denial letter that simply says &ldquo;wear and tear&rdquo; without explaining <em>how</em> wear and tear caused the damage &mdash; as opposed to being present as a condition &mdash; may itself be a violation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Review the Insurer&rsquo;s Inspection Report and Engineering Report
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Request a copy of the field adjuster&rsquo;s inspection notes, photographs, and any engineering or expert reports the insurer relied on. Read these documents carefully. Look for whether the report actually analyzes causation or merely describes condition. Does the engineer explain <em>why</em> wear and tear &mdash; rather than the covered event &mdash; caused the specific damage observed? Or does the report simply note the age and condition of the components and assume that age equals causation? Reports that describe a condition without establishing causation are vulnerable to challenge.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Retain Your Own Expert
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hire a qualified, independent expert to inspect the property and provide a competing causation opinion. Your expert should specifically address the insurer&rsquo;s report, explain why the damage was caused by the covered peril rather than wear and tear, and identify the physical evidence supporting their conclusion. The expert report should directly confront the condition-versus-causation distinction: acknowledge the pre-existing condition, explain why it is not the cause, and identify the force or event that actually produced the damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Gather Supporting Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assemble every piece of evidence that supports the covered peril as the cause:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Weather data:</strong> NOAA reports, local weather station data, and meteorological reports documenting the specific weather event
        </li>
        <li>
          <strong>Before-and-after evidence:</strong> Prior inspection reports, real estate disclosures, pre-loss photographs, or satellite imagery showing the property&rsquo;s condition before the covered event
        </li>
        <li>
          <strong>Damage pattern analysis:</strong> Documentation of directional patterns, impact marks, or failure modes that are inconsistent with gradual deterioration
        </li>
        <li>
          <strong>Neighboring property damage:</strong> If neighboring properties sustained similar damage in the same event, that corroborates a weather cause rather than individual property deterioration
        </li>
        <li>
          <strong>Contractor estimates:</strong> Repair estimates from licensed contractors who can identify and describe the specific type of damage they observed
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Write a Detailed Dispute Letter
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Submit a formal written dispute that makes the condition-versus-causation argument explicitly. The letter should:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Identify the covered peril that caused the damage (wind, hail, accidental discharge, etc.)</li>
        <li>Acknowledge the pre-existing condition of the property components (this is not a concession &mdash; it is the foundation of the argument)</li>
        <li>Explain that the wear and tear exclusion is a <em>cause of loss</em> exclusion that requires wear and tear to be the <em>cause</em>, not merely a <em>condition</em></li>
        <li>Apply the &ldquo;but for&rdquo; test: but for the covered event, this damage would not have occurred on this date</li>
        <li>In California, invoke the efficient proximate cause doctrine and cite <em>Garvey v. State Farm</em></li>
        <li>Attach your expert report and supporting evidence</li>
        <li>Request that the insurer reconsider the denial and provide a substantive response</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For detailed guidance on writing effective dispute letters, see our{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
          coverage disputes guide
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Escalate If Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer does not reverse the denial after reviewing your expert evidence and dispute letter, additional options include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Appraisal:</strong> If the dispute involves the amount of loss rather than whether coverage exists, the appraisal clause in most homeowner policies provides a binding dispute resolution mechanism
        </li>
        <li>
          <strong>Department of Insurance complaint:</strong> California&rsquo;s Department of Insurance investigates complaints about unfair claims handling practices. An improper wear and tear denial may violate the{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            Fair Claims Settlement Practices Regulations
          </Link>
        </li>
        <li>
          <strong>Retain an attorney:</strong> If the claim is substantial, an insurance coverage attorney can pursue the claim through litigation. In California, an insurer that unreasonably denies a covered claim may be exposed to{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith liability
          </Link>, which can include consequential damages and, in egregious cases, punitive damages
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Betterment and Depreciation: The Legitimate Role of Pre-Existing Condition
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To be clear, the principle that &ldquo;condition is not causation&rdquo; does not mean that the pre-existing condition of the property is entirely irrelevant to the claim. It means the condition cannot be used to <em>deny</em> the claim. However, the condition of the property may legitimately affect the <em>amount</em> of the payment through depreciation or betterment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Depreciation</strong> is the reduction in the actual cash value (ACV) of a component based on its age, condition, and remaining useful life. Under an ACV policy &mdash; or during the initial ACV payment under a replacement cost policy &mdash; the insurer may deduct depreciation to account for the fact that the damaged component was not new at the time of the loss. A fifteen-year-old roof that is covered for wind damage may have depreciation deducted from the claim payment because the policyholder is not entitled to a brand-new roof at the insurer&rsquo;s full expense when the damaged roof was already partially used up.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Betterment</strong> is a related concept: the policyholder should not profit from a loss by receiving something materially better than what they had before the loss. If replacing a damaged twenty-year-old roof requires installing new shingles that will last thirty years, the insurer may argue that the policyholder is being &ldquo;bettered&rdquo; by the replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both depreciation and betterment are <em>valuation</em> issues, not <em>coverage</em> issues. They affect how much the insurer pays, not <em>whether</em> the insurer pays. An insurer that uses depreciation or betterment to reduce the claim payment is doing something fundamentally different from an insurer that uses wear and tear to <em>deny</em> the claim entirely. The first is a legitimate valuation adjustment. The second, when wear and tear is only a condition and not the cause, is an improper denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Burden of Proof: Who Must Prove What
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the burden of proof allocation strongly favors the policyholder. Under an open-peril (all-risk) policy like the standard HO-3:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The policyholder&rsquo;s burden:</strong> The policyholder must prove that a loss occurred during the policy period. That is the full extent of the initial burden. The policyholder does <em>not</em> need to prove the specific cause of loss.
        </li>
        <li>
          <strong>The insurer&rsquo;s burden:</strong> Once a loss is shown, the burden shifts to the insurer to prove that a specific exclusion applies. To invoke the wear and tear exclusion, the insurer must prove that wear and tear <em>caused</em> the loss &mdash; not merely that wear and tear was <em>present</em>.
        </li>
        <li>
          <strong>Back to the policyholder:</strong> If the insurer proves an exclusion applies, the policyholder may then invoke an exception (such as the ensuing loss doctrine or the efficient proximate cause doctrine) to restore coverage.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This burden allocation is critical because it means the insurer cannot simply point to worn components and declare the claim denied. The insurer must affirmatively prove that wear and tear was the cause &mdash; the predominating force that produced the damage. If the insurer&rsquo;s evidence establishes only a condition, the insurer has not met its burden, and the exclusion should not apply. For more on how exclusions work and the burden of proof framework, see our{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          comprehensive exclusions guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Wear and Tear Exclusion Legitimately Applies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the sake of completeness, it is worth identifying the types of losses where the wear and tear exclusion legitimately applies. These are losses where wear and tear is genuinely the <em>cause</em> &mdash; not merely a condition &mdash; and no covered peril intervened:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Gradual roof failure without a weather event:</strong> A roof that has deteriorated to the point where it leaks during ordinary rainfall &mdash; not storm conditions &mdash; because the shingles have simply worn out. No sudden event, no unusual weather, just gradual failure over time.
        </li>
        <li>
          <strong>Slow plumbing leaks with no sudden failure:</strong> A pipe that has been gradually seeping at a joint for months, causing progressive water damage to surrounding materials. No burst, no sudden discharge &mdash; just gradual deterioration and slow water intrusion.
        </li>
        <li>
          <strong>Foundation settlement over time:</strong> A foundation that has been slowly settling for years due to soil conditions, producing gradually worsening cracks that develop incrementally with no triggering event.
        </li>
        <li>
          <strong>Exterior paint failure:</strong> Paint or stain that peels, blisters, or chalks over time due to UV exposure and weathering. No impact, no fire, no covered event &mdash; just gradual deterioration.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these scenarios, wear and tear is doing the work. There is no intervening covered peril. The damage developed gradually over time as a direct result of aging, use, or environmental exposure. These are the types of losses the wear and tear exclusion was designed to address.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem arises when insurers take an exclusion designed for these gradual, causeless losses and apply it to sudden, event-driven losses where a covered peril clearly acted on the property. That is the conflation of condition and causation. That is the misapplication this article addresses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bad Faith Implications of Improper Wear and Tear Denials
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, an insurer that denies a claim without a reasonable basis and without a proper investigation may be liable for{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          insurance bad faith
        </Link>. The wear and tear context raises several bad faith concerns:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Failure to investigate causation:</strong> If the insurer denies a claim based on wear and tear without conducting a meaningful causation analysis &mdash; simply observing the condition of the property and calling it a cause &mdash; that denial may lack a reasonable basis.
        </li>
        <li>
          <strong>Ignoring evidence of a covered cause:</strong> If the policyholder provides expert evidence establishing a covered peril as the cause, and the insurer ignores that evidence or fails to rebut it substantively, the denial becomes more difficult to defend.
        </li>
        <li>
          <strong>Pattern and practice:</strong> If the insurer routinely applies the wear and tear exclusion to properties over a certain age without case-by-case causation analysis, that systematic approach may constitute an unfair claims practice.
        </li>
        <li>
          <strong>Desk review denials:</strong> Denying a claim based on a desk review when a field inspection would reveal evidence of a covered cause may reflect an inadequate investigation.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;790.03(h) prohibits unfair claims settlement practices, including &ldquo;not attempting in good faith to effectuate prompt, fair and equitable settlements of claims in which liability has become reasonably clear.&rdquo; An insurer that denies a wind damage claim solely because the roof was old &mdash; without analyzing whether wind was the cause &mdash; may be failing to meet this standard.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Ensuing Loss Doctrine and Wear and Tear
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies include an &ldquo;ensuing loss&rdquo; clause within the wear and tear exclusion itself. This clause typically reads something like:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure, however, for loss ... caused by ... wear and tear, marring, deterioration ... But if ... a covered loss ensues, we will pay for the ensuing covered loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This provision recognizes that even when wear and tear genuinely <em>is</em> the initial cause in a causal chain, a subsequent covered loss may still be payable. For example, if a water heater fails from deterioration (wear and tear, excluded) and the resulting water discharge damages flooring, walls, and personal property (accidental discharge of water, covered), the ensuing loss clause would restore coverage for the water damage &mdash; even though the initial cause was an excluded peril.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ensuing loss clause is a separate protection from the condition-versus-causation distinction, and it operates independently. A policyholder may not need to reach the ensuing loss clause if the covered peril was the cause in the first place. But when the causal chain genuinely begins with wear and tear, the ensuing loss clause provides a fallback that preserves coverage for the downstream damage caused by a covered peril.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Policyholders
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the event, not just the damage.</strong> When filing a claim after a storm or sudden event, document both the damage <em>and</em> the event itself. Photograph the damage, but also record the weather conditions, the timeline, and any observable patterns (directional damage, neighbor damage, debris fields) that connect the damage to the covered event.
        </li>
        <li>
          <strong>Do not concede that wear and tear caused the damage.</strong> If the adjuster points out that your roof is old, that your pipes are corroded, or that your foundation has settled, do not agree that these conditions caused the damage. Acknowledge the condition, but insist on a causation analysis. &ldquo;Yes, the roof is fifteen years old. But the wind tore the shingles off. The age of the roof did not tear the shingles off.&rdquo;
        </li>
        <li>
          <strong>Ask the adjuster to identify the specific covered peril they are ruling out.</strong> If the adjuster says &ldquo;wear and tear,&rdquo; ask them: &ldquo;Are you saying that no covered peril contributed to this damage? No wind? No hail? No accidental discharge?&rdquo; Force the adjuster to affirmatively state that no covered event occurred &mdash; a statement that may contradict the meteorological evidence, the damage patterns, and the timeline.
        </li>
        <li>
          <strong>Request and review the insurer&rsquo;s engineering report.</strong> If the insurer retained an engineer, get the report. Read it for whether it actually establishes causation or merely describes condition. A report that says &ldquo;the shingles exhibit granule loss, cupping, and thermal cracking consistent with aging&rdquo; is describing a condition. A report that says &ldquo;the damage was caused by normal weathering and not by the reported wind event based on the following forensic analysis&rdquo; is at least attempting to establish causation &mdash; and can be challenged on its methodology.
        </li>
        <li>
          <strong>Keep maintenance records.</strong> If you have documentation of regular roof inspections, plumbing maintenance, or property upkeep, these records can rebut the insurer&rsquo;s implication that the damage resulted from neglect. They can also establish that the property was in serviceable condition before the covered event.
        </li>
        <li>
          <strong>Know the difference between a coverage denial and a depreciation deduction.</strong> If the insurer <em>denies</em> the claim entirely based on wear and tear, that is a coverage dispute &mdash; and it may be wrong. If the insurer <em>accepts</em> the claim but deducts depreciation to account for the age of the components, that is a valuation issue &mdash; and it may be proper. Do not conflate the two, and do not accept a denial when the insurer should be paying the claim with appropriate depreciation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: The Questions That Matter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer denies a claim based on wear and tear, cut through the language and ask the fundamental questions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Was a covered peril present?</strong> Was there a windstorm, a hailstorm, an earthquake, an accidental water discharge, or another covered event?
        </li>
        <li>
          <strong>Did the covered peril act on the property?</strong> Is there physical evidence &mdash; directional patterns, impact marks, failure modes, timeline correlation &mdash; connecting the damage to the covered event?
        </li>
        <li>
          <strong>But for the covered peril, would the damage have occurred on this date?</strong> If the answer is no, the covered peril is the cause.
        </li>
        <li>
          <strong>Is the insurer describing a condition or establishing a cause?</strong> If the insurer&rsquo;s evidence shows only that the property was old or worn &mdash; without explaining how that condition, rather than the covered event, produced the specific damage &mdash; the insurer has described a condition, not a cause.
        </li>
        <li>
          <strong>Has the insurer met its burden of proof?</strong> Under an open-peril policy, the insurer must prove the exclusion applies. Observing a condition is not proving a cause.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Condition is not causation. The wear and tear exclusion excludes losses <em>caused by</em> wear and tear. It does not exclude losses that occur <em>to</em> property that has experienced wear and tear. If a covered peril caused the damage, the claim should be paid &mdash; regardless of how old the roof was, how corroded the pipe was, or how many years the foundation had been settling. The exclusion was not designed to relieve insurers of their obligation to pay for covered losses simply because the property was not brand new. It was designed to exclude losses where no covered event occurred and the damage resulted purely from aging and deterioration over time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who understand this distinction &mdash; and who insist on a proper causation analysis rather than accepting a condition-based denial at face value &mdash; are in a far stronger position to hold their insurers accountable. For additional resources on challenging denials and understanding your rights, explore our guides on{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          policy exclusions
        </Link>,{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">
          efficient proximate cause
        </Link>,{' '}
        <Link href="/resources/pre-existing-vs-storm-damage" className="text-[#2E74B5] underline">
          pre-existing vs. storm damage
        </Link>, and{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
          coverage disputes
        </Link>.
      </p>
    </>
  )
}
