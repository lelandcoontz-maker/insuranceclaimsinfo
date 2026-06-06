import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Earth Movement Exclusion: When It Applies, When It Does Not, and How California Law Protects You',
  description:
    'Earth movement is excluded from standard homeowner policies, but California\'s efficient proximate cause doctrine means landslides, mudslides, and subsidence caused by a covered peril are still covered. Learn what triggers coverage and how to fight a wrongful denial.',
  summary:
    'Earth movement is excluded from standard homeowner policies, but California\'s efficient proximate cause doctrine covers landslides, mudslides, and subsidence when a covered peril set them in motion. Identify the triggering cause to fight a wrongful denial.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If you believe the earth movement exclusion has been improperly applied to your claim, consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The earth movement exclusion is one of the broadest exclusions in a standard homeowner policy. It removes coverage for damage caused by earthquake, landslide, mudflow, mudslide, sinkhole, subsidence, erosion, settling, and virtually any other movement of earth or soil. Read on its own, the exclusion appears absolute &mdash; if earth moved and your home was damaged, you are out of luck.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the exclusion is not absolute. In California, when a <strong>covered peril</strong> is the reason the earth moved in the first place, the earth movement exclusion does not control. A wildfire strips vegetation from a hillside, and the next rainstorm sends mud into your home &mdash; that is a fire loss, not an earth movement loss. A vehicle strikes a hillside and triggers a slide onto your property &mdash; that is a vehicle impact loss. A broken water pipe saturates the soil beneath your foundation and the ground shifts &mdash; that is an accidental discharge loss. In each of these situations, the earth movement exclusion does not apply because the <em>predominant cause</em> of the loss was a peril your policy covers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains the earth movement exclusion, the California legal doctrine that limits it, the specific situations where earth movement is covered, and the tactics insurers use to deny these claims improperly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Earth Movement Exclusion Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 homeowner policy excludes earth movement under Section I &mdash; Exclusions. The typical language reads:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure for loss caused directly or indirectly by any of the following&hellip; Earth Movement, meaning earthquake, including land shock waves or tremors before, during, or after a volcanic eruption; landslide; mudflow; mudslide; sinkhole; subsidence; erosion or any other earth movement including earth sinking, rising, or shifting. This exclusion applies regardless of whether any of the above is caused by an act of nature or is otherwise caused.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusion is intentionally broad. It covers movement of earth by any mechanism &mdash; natural or man-made &mdash; and it names virtually every form of earth movement a homeowner might encounter. Let&rsquo;s break down what each term actually means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Earthquake:</strong> Sudden shaking or displacement of the ground caused by tectonic forces, including foreshocks and aftershocks.</li>
        <li><strong>Landslide:</strong> A mass of earth, rock, or debris moving downslope under the force of gravity.</li>
        <li><strong>Mudflow / Mudslide:</strong> A river of mud, water, and debris flowing downhill. The policy uses both terms and treats them as earth movement regardless of the water content.</li>
        <li><strong>Sinkhole:</strong> A depression or hole in the ground caused by the collapse of underlying soil, rock, or cavities.</li>
        <li><strong>Subsidence:</strong> Gradual sinking or settling of the ground surface, often caused by changes in underground water levels, mining, or soil compaction.</li>
        <li><strong>Erosion:</strong> The gradual wearing away of soil or rock by water, wind, or other natural forces.</li>
        <li><strong>Earth sinking, rising, or shifting:</strong> A catch-all provision covering any vertical or lateral movement of ground that does not fit neatly into the categories above.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusion also typically includes volcanic eruption, though some policies list that separately. Volcanic eruption is a named peril under Coverage C (personal property) of most HO-3 policies, creating a situation where your personal property may be covered for volcanic damage even though your dwelling is not &mdash; unless the ensuing loss or fire provisions apply.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Anti-Concurrent Causation Clause
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most modern HO-3 policies precede the earth movement exclusion with an <strong>anti-concurrent causation (ACC) clause</strong>. This language reads:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We do not insure for loss caused directly or indirectly by any of the following. Such loss is excluded regardless of any other cause or event contributing concurrently or in any sequence to the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        In plain English, the ACC clause says: if earth movement is involved in any way &mdash; even if it was the last link in a chain of events started by a covered peril &mdash; the entire loss is excluded. The insurer does not care that a wildfire caused the hillside to fail. The insurer does not care that a burst pipe saturated the soil. The ACC clause says that if earth moved, the claim is denied, period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That is what the policy says. But in California, the ACC clause is <strong>unenforceable</strong> when it conflicts with the efficient proximate cause doctrine. For a comprehensive analysis of ACC clauses and why California courts reject them, see our article on{' '}
        <Link href="/resources/anti-concurrent-causation" className="text-[#2E74B5] underline">anti-concurrent causation clauses</Link>.
      </p>

      <CalloutBox variant="important" title="California Rejects Anti-Concurrent Causation Clauses">
        <p>
          In California, insurers cannot use anti-concurrent causation language to override the efficient proximate cause doctrine. If a covered peril set the chain of events in motion and was the predominant cause of the loss, the earth movement exclusion does not bar coverage &mdash; regardless of what the ACC clause says. This is established law under California Insurance Code &sect;530 and has been upheld by the California Supreme Court.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Earth Movement IS Covered: The Efficient Proximate Cause Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause doctrine is the single most important legal principle for any California policyholder whose claim involves earth movement. Under this doctrine, when a <strong>covered peril</strong> sets in motion a chain of events that ultimately produces a loss through an <strong>excluded peril</strong>, the loss is covered. The key question is not what happened last in the causal chain. The question is: <em>what was the predominant, moving cause &mdash; the event that set everything else in motion?</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;530 establishes the statutory foundation:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;An insurer is liable for a loss of which a peril insured against was the proximate cause, although a peril not contemplated by the contract may have been a remote cause of the loss; but he is not liable for a loss of which the peril insured against was only a remote cause.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full discussion of this doctrine and how California courts have applied it, see our detailed article on the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">efficient proximate cause doctrine</Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following are the most common scenarios where earth movement resulting from a covered peril is covered under a standard California homeowner policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Earth Movement Resulting from Wildfire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is by far the most common and consequential application of the efficient proximate cause doctrine to earth movement claims in California. The pattern repeats after every major wildfire season:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>A wildfire burns through a hillside area, destroying vegetation and altering soil composition.</li>
        <li>The fire creates a hydrophobic (water-repellent) layer in the soil that prevents normal water absorption.</li>
        <li>When rain arrives &mdash; sometimes weeks or months later &mdash; the water runs across the hardened surface instead of soaking in.</li>
        <li>The destabilized hillside fails. Mud, debris, boulders, and ash flow downslope onto homes below.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer looks at the final event &mdash; a mudslide &mdash; and invokes the earth movement exclusion. But the predominant cause of the entire sequence was <strong>wildfire</strong>, a covered peril under every standard homeowner policy. The fire destroyed the root systems that held the soil in place. The fire created the hydrophobic soil layer. The fire made the hillside unstable. The rain was simply the triggering event for a failure that the fire made inevitable. Under the efficient proximate cause doctrine, this is a fire loss, and it is covered.
      </p>

      <CalloutBox variant="warning" title="Post-Wildfire Mudslide Claims Are Time-Sensitive">
        <p>
          If your home was damaged by a mudslide or debris flow in a post-wildfire burn area, file your claim immediately and identify the wildfire as the originating cause of the loss. Do not wait for the insurer to characterize the loss &mdash; the initial characterization can shape the entire claim. For detailed guidance, see our article on{' '}
          <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] underline">mudslide coverage after wildfire</Link>.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has taken this position formally. After the 2018 Montecito debris flow (which followed the Thomas Fire), the 2020 and 2021 post-fire mudslides, and most recently after the 2025 Palisades and Eaton fires, CDI has consistently maintained that earth movement caused by wildfire is a covered loss under the efficient proximate cause doctrine.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Earth Movement Resulting from Vehicle Impact
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vehicle impact is a covered peril under the HO-3 policy &mdash; it is specifically listed as a named peril for personal property and is not excluded under the open-perils dwelling coverage. When a vehicle strikes a hillside, retaining wall, or embankment and causes earth to move onto or under a home, the predominant cause of that earth movement is the vehicle impact, not the earth movement itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Example: A truck loses control on a road above your property, crashes into the hillside, and dislodges soil and rock that slides onto your home. The insurer may argue this is earth movement. But the efficient proximate cause &mdash; the event that set the chain in motion &mdash; was the vehicle impact. Under California law, this loss is covered. For more on vehicle impact claims generally, see our{' '}
        <Link href="/resources/vehicle-impact-claims" className="text-[#2E74B5] underline">vehicle impact claims guide</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Earth Movement Resulting from Accidental Discharge of Water
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a plumbing failure, burst pipe, or other accidental discharge of water saturates the soil beneath or around a home and causes the ground to move, the predominant cause of the loss is the water discharge &mdash; a covered peril &mdash; not the resulting earth movement. This scenario is particularly common in slab-on-grade homes where a slab leak goes undetected for weeks or months, saturating expansive clay soils that then swell and shift, cracking the foundation and damaging the structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The causal chain is clear: the pipe failed (covered peril), water discharged into the soil (covered peril), the soil expanded or shifted (earth movement), and the home was damaged. The efficient proximate cause of the entire sequence was the plumbing failure, not the earth movement. For related guidance, see our articles on{' '}
        <Link href="/resources/accidental-discharge-overflow" className="text-[#2E74B5] underline">accidental discharge and overflow claims</Link> and{' '}
        <Link href="/resources/slab-leak-claims" className="text-[#2E74B5] underline">slab leak claims</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Earth Movement Resulting from Other Covered Perils
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The principle extends to any situation where a covered peril is the predominant cause. Less common but recognized scenarios include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Explosion:</strong> A gas line explosion destabilizes soil or a hillside, causing earth movement and structural damage.</li>
        <li><strong>Weight of ice and snow:</strong> Accumulated ice or snow causes a retaining wall to fail, resulting in a landslide.</li>
        <li><strong>Falling objects:</strong> A large tree topples onto a hillside and triggers a slide. If the tree fell due to windstorm (a covered peril), the resulting earth movement traces back to a covered cause.</li>
        <li><strong>Negligent construction:</strong> A contractor improperly graded or compacted the soil during construction, and years later the ground shifts. Under the HO-3&rsquo;s open-perils dwelling coverage, third-party negligence is a covered cause of loss (it is not excluded), making the resulting earth movement potentially covered.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Earth Movement Is NOT Covered
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause doctrine is not a magic wand that makes every earth movement claim covered. Earth movement is excluded when the earth movement itself is the predominant cause and no covered peril set the chain in motion. The most common truly excluded scenarios include:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Earthquake
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Earthquake damage is the prototypical excluded earth movement. An earthquake is not caused by a covered peril &mdash; it is a natural tectonic event. Unless your home catches fire after the earthquake (in which case the fire damage may be covered under the standard policy as a separate covered peril), earthquake damage requires separate earthquake insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, earthquake insurance is typically obtained through the <strong>California Earthquake Authority (CEA)</strong> or through a <strong>Difference in Conditions (DIC) policy</strong> from the private market. CEA policies have high deductibles (typically 5&ndash;25% of dwelling coverage) and limited contents coverage. DIC policies may offer broader terms but are more expensive. For detailed guidance, see our articles on{' '}
        <Link href="/resources/earthquake-insurance" className="text-[#2E74B5] underline">earthquake insurance</Link> and{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">DIC policies</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Natural Landslide (No Covered Peril Trigger)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A landslide caused purely by natural geological processes &mdash; soil composition, slope angle, natural erosion over time, or rainfall on an otherwise stable hillside that simply reaches its failure point &mdash; is excluded. There is no covered peril in the causal chain. Rainfall alone is not a covered peril under the HO-3.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Gradual Subsidence and Settling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Homes slowly settling over time due to soil compaction, natural consolidation, or changes in the water table is excluded earth movement. This type of damage develops over years or decades and is not triggered by a sudden covered peril. Insurers often distinguish between sudden, accidental earth movement (which may have a covered proximate cause) and gradual, long-term movement (which almost never does).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Natural Erosion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coastal erosion, riverbank erosion, and hillside erosion caused by natural weathering processes over time are excluded. These are gradual, predictable geological processes without a covered peril trigger.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mudflow vs. Flood: A Critical Distinction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The relationship between mudflow, earth movement, and flood insurance is one of the most confusing areas in property insurance. Here is how it breaks down:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Your homeowner policy</strong> excludes mudflow as earth movement. However, if the mudflow was caused by a covered peril (wildfire, accidental discharge, etc.), the efficient proximate cause doctrine restores coverage in California.
        </li>
        <li>
          <strong>FEMA&rsquo;s National Flood Insurance Program (NFIP)</strong> covers &ldquo;mudflow&rdquo; under its definition of flood. However, the NFIP defines mudflow very specifically: &ldquo;a river of liquid and flowing mud on the surfaces of normally dry land areas, as when earth is carried by a current of water.&rdquo; This means the mud must be transported <em>by water</em> along normally dry land. A slow-moving mass of earth sliding down a hillside under gravity may not meet this definition.
        </li>
        <li>
          <strong>Post-wildfire debris flows</strong> create a coverage overlap. When mud flows down a hillside stripped by fire, it may qualify as mudflow under the NFIP and may also be covered under the homeowner policy as fire-caused earth movement. Policyholders with both policies should file under both and let the insurers sort out the coverage.
        </li>
      </ul>

      <CalloutBox variant="tip" title="File Under Both Policies If You Have Them">
        <p>
          If you have both a homeowner policy and NFIP flood insurance and your loss involves mud or debris flow, file a claim under both policies. Do not let either insurer tell you the other policy is the &ldquo;primary&rdquo; coverage. File under both and advocate for payment under each.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hillside Properties in California: Heightened Risk, Heightened Disputes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has tens of thousands of homes built on hillsides, in canyons, and at the base of slopes. These properties are particularly vulnerable to earth movement losses, and they generate a disproportionate number of claim disputes. The reasons are straightforward:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Post-wildfire vulnerability:</strong> Hillside homes in fire-prone areas face a double threat &mdash; the fire itself and the mudslides that follow. The 2018 Montecito debris flow killed 23 people and destroyed over 100 homes, all in the burn scar of the Thomas Fire. The January 2025 Palisades Fire created similar post-fire landslide risk across Pacific Palisades, Topanga, and Malibu.</li>
        <li><strong>Heavy rain events:</strong> Even without a preceding wildfire, unusually heavy rain on steep terrain can trigger slides. The question for coverage is always whether the rain itself was the cause (not covered &mdash; rain is not a named peril and is not an excluded peril under the open-perils dwelling coverage, so the analysis depends on whether the loss is characterized as earth movement or water damage) or whether a covered peril preceded and caused the instability.</li>
        <li><strong>Retaining wall failures:</strong> Many hillside properties depend on retaining walls. When a retaining wall fails, the resulting earth movement can be catastrophic. The coverage question turns on <em>why</em> the wall failed &mdash; if a covered peril caused the failure (such as accidental water discharge undermining the wall), the earth movement that follows is covered.</li>
        <li><strong>Grading and compaction issues:</strong> Improperly graded or compacted hillside lots can experience earth movement years after construction. If the cause is third-party negligence during construction (a covered cause under open-perils policies), the resulting earth movement may be covered.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Settling vs. Earth Movement vs. Construction Defect: Overlapping Issues
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Claims involving foundation cracks, uneven floors, and structural shifting often land in a gray zone where the insurer must determine whether the cause is earth movement (excluded), settling (excluded), construction defect (potentially covered under open perils as third-party negligence), or something else entirely. These distinctions matter because they determine coverage.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Settling</strong> is usually listed within the earth movement exclusion. It refers to the gradual downward movement of a structure as soil beneath it compacts over time. If settling is caused solely by natural soil consolidation, it is excluded.
        </li>
        <li>
          <strong>Construction defect</strong> is a different animal. If a builder improperly prepared the building pad, failed to compact fill soil, used the wrong type of fill, or failed to install proper drainage, and these defects cause the soil to move or the foundation to shift, the <em>cause</em> is the builder&rsquo;s negligence &mdash; not earth movement in the excluded sense. Under an open-perils policy, third-party negligence is not excluded.
        </li>
        <li>
          <strong>Water-related soil movement</strong> can look like settling or earth movement but may have its efficient proximate cause in a plumbing failure, irrigation system malfunction, or other accidental water discharge. The characterization of the cause determines coverage.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The challenge is that by the time damage is visible, it is often difficult to determine the original cause. A cracked foundation could be from settling, earth movement, construction defect, or water intrusion &mdash; and the insurer will almost always pick the explanation that results in a denial. This is where a geotechnical engineer becomes essential. For more on how engineering reports interact with coverage determinations, see our article on{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-[#2E74B5] underline">engineering reports vs. coverage</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sinkholes: State-Specific Rules
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sinkholes are explicitly listed in the earth movement exclusion. However, some states have enacted specific sinkhole legislation that modifies or overrides the standard policy language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Florida</strong> is the most prominent example. Florida law requires insurers to cover &ldquo;catastrophic ground cover collapse&rdquo; in all homeowner policies and gives policyholders the option to purchase sinkhole coverage. The statute (Fla. Stat. &sect;627.706) defines both terms and establishes specific investigation and payment procedures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California</strong> does not have specific sinkhole legislation. Sinkholes in California are excluded under the standard earth movement exclusion unless a covered peril caused the sinkhole (for example, a burst water main washing away underground soil and creating a void that collapses). Sinkholes can occur in California in areas with historical mining activity, karst terrain, or significant groundwater withdrawal &mdash; but they are far less common than in Florida.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Carrier Tactics: How Insurers Misuse the Earth Movement Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The earth movement exclusion is one of the most abused provisions in property insurance. Because it is so broad, insurers invoke it in situations where it should not apply &mdash; and many policyholders accept the denial without realizing they have a strong argument for coverage. Here are the most common tactics:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Ignoring the Covered Peril That Started the Chain
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common tactic. The insurer looks only at the final event &mdash; earth movement &mdash; and ignores the covered peril that caused the earth to move. The denial letter says the loss is excluded as earth movement without any analysis of what caused the earth movement. In California, this approach violates the efficient proximate cause doctrine and the California Fair Claims Settlement Practices Regulations (Cal. Code Regs. tit. 10, &sect;2695.7), which require the insurer to conduct a thorough investigation of the cause of loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Relying on the Anti-Concurrent Causation Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When confronted with the efficient proximate cause argument, some insurers fall back on the ACC clause. They argue that the policy language specifically says earth movement is excluded &ldquo;regardless of any other cause or event contributing concurrently or in any sequence to the loss.&rdquo; As discussed above, this clause is unenforceable in California. An insurer that relies solely on the ACC clause to deny a claim where a covered peril was the efficient proximate cause is making a denial that cannot be sustained under California law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Characterizing Every Soil-Related Loss as Earth Movement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers apply the earth movement exclusion any time soil is involved in the loss, even when the soil did not &ldquo;move&rdquo; in any meaningful sense. A foundation crack caused by a plumbing leak is not earth movement &mdash; it is water damage. Soil swelling due to water intrusion is a consequence of the water, not independent earth movement. But insurers routinely characterize these losses as earth movement to trigger the exclusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hiring Biased Engineers to Support the Denial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In complex earth movement claims, the insurer will retain a geotechnical engineer or geologist. These insurer-retained experts often produce reports that attribute the earth movement to natural geological processes (excluded) rather than the covered peril that actually caused the instability. The reports may acknowledge the covered peril but minimize its role, framing natural conditions as the &ldquo;predominant&rdquo; cause. For guidance on how to evaluate and challenge these reports, see our article on{' '}
        <Link href="/resources/defeating-carrier-engineers" className="text-[#2E74B5] underline">defeating carrier engineers</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Delaying Investigation Until Evidence Degrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a wildfire or water event, the physical evidence of what caused the earth to move degrades over time. Burn scars revegetate. Plumbing leaks get repaired. Soil dries out. Insurers that delay their investigation &mdash; or delay retaining a geotechnical expert &mdash; may do so knowing that the evidence supporting the policyholder&rsquo;s causal argument will weaken as time passes. This is why early documentation is critical.
      </p>

      <CalloutBox variant="important" title="Document the Chain of Causation Immediately">
        <p>
          If your loss involves earth movement that you believe was caused by a covered peril, document the causal chain as early as possible. Photograph the hillside or soil conditions. Photograph any burn scars, broken pipes, vehicle damage, or other evidence of the covered peril. Note dates, times, and the sequence of events in writing. This evidence may be difficult or impossible to recreate later.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Earth Movement Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are dealing with an earth movement claim &mdash; or an earth movement denial &mdash; here is what you need to do:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Identify the chain of causation.</strong> Work backward from the earth movement to determine what started the chain. Was there a wildfire in the area? A vehicle impact? A plumbing failure? An explosion? If a covered peril is at the beginning of the chain, you have an argument for coverage.
        </li>
        <li>
          <strong>Hire a geotechnical engineer.</strong> This is not optional in significant earth movement claims. You need an independent expert who can evaluate the soil conditions, identify the cause of the earth movement, and provide a professional opinion that the covered peril was the predominant cause. Do not rely on the insurer&rsquo;s engineer to do this for you &mdash; the insurer&rsquo;s engineer works for the insurer.
        </li>
        <li>
          <strong>Document everything.</strong> Photograph the site from multiple angles. Photograph any evidence of the covered peril (burn scars, broken pipes, vehicle damage). Record the sequence of events with dates. Keep all communications with the insurer in writing.
        </li>
        <li>
          <strong>Review your policy carefully.</strong> Identify the exact earth movement exclusion language, the ACC clause (if present), and any ensuing loss provisions. Some policies have exceptions built into the earth movement exclusion itself &mdash; for example, an exception for fire resulting from earth movement, or an exception for explosion resulting from earth movement.
        </li>
        <li>
          <strong>File promptly and characterize the loss correctly.</strong> When you file the claim, identify the covered peril as the cause of loss. Do not describe the loss as &ldquo;a landslide&rdquo; or &ldquo;earth movement.&rdquo; Describe it as &ldquo;damage resulting from [wildfire/vehicle impact/plumbing failure] that caused earth movement.&rdquo; The initial characterization matters.
        </li>
        <li>
          <strong>Challenge improper denials.</strong> If the insurer denies based on the earth movement exclusion without addressing the covered peril that started the chain, respond in writing citing the efficient proximate cause doctrine and California Insurance Code &sect;530. Request that the insurer explain why the covered peril is not the predominant cause. If the insurer refuses to reconsider, file a complaint with the California Department of Insurance.
        </li>
        <li>
          <strong>Consider hiring a public adjuster or attorney.</strong> Earth movement claims are among the most complex in property insurance. The interplay between the exclusion, the efficient proximate cause doctrine, the ACC clause, and the factual causation evidence requires expertise. A licensed public adjuster can manage the claim, retain experts, and negotiate with the insurer. If bad faith is involved, an insurance coverage attorney may be appropriate.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Ensuing Loss Exception
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies include an ensuing loss clause within or following the earth movement exclusion. This clause typically says something like:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Any ensuing loss to property described in Coverages A and B not precluded by any other provision in this policy is covered.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This clause means that even if the earth movement itself is excluded, damage that <em>results from</em> the earth movement may be covered if the resulting damage is a type that the policy would otherwise cover. For example: earth movement causes a gas line to rupture, and the gas ignites, causing a fire. The earth movement is excluded, but the fire &mdash; an ensuing covered peril &mdash; is covered for the damage it caused.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ensuing loss doctrine is separate from the efficient proximate cause doctrine, and the two operate in different directions. Efficient proximate cause looks <em>backward</em> in the chain &mdash; was a covered peril the originating cause? The ensuing loss doctrine looks <em>forward</em> &mdash; did the excluded event produce a subsequent covered loss? Both can apply in the same claim, and both can independently create coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Earthquake Insurance: Filling the Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For earth movement caused by earthquake &mdash; where no covered peril triggered the event &mdash; the only path to coverage is a separate earthquake policy. In California, the two primary options are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Earthquake Authority (CEA):</strong> A publicly managed, privately funded organization that offers earthquake insurance through participating insurers. CEA policies have high deductibles (typically 5%, 10%, 15%, or 25% of the dwelling limit), limited personal property coverage ($5,000&ndash;$200,000), and limited loss of use coverage ($1,500&ndash;$100,000). Coverage is more affordable than private alternatives but significantly more restrictive.
        </li>
        <li>
          <strong>Difference in Conditions (DIC) policies:</strong> Private market earthquake and flood policies that fill the gap between what the standard homeowner policy covers and what it excludes. DIC policies typically offer lower deductibles and broader coverage than CEA but at a higher premium. They are particularly popular for high-value homes where the CEA&rsquo;s coverage limits are inadequate.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed comparison of earthquake coverage options, see our articles on{' '}
        <Link href="/resources/earthquake-insurance" className="text-[#2E74B5] underline">earthquake insurance in California</Link> and{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">DIC policies</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: The Rules That Matter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Earth movement claims in California come down to a few fundamental principles:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Earth movement is excluded</strong> from standard homeowner policies. The exclusion is broad and covers earthquake, landslide, mudflow, mudslide, sinkhole, subsidence, erosion, settling, and all related earth movement.
        </li>
        <li>
          <strong>But earth movement is covered when a covered peril caused it.</strong> Under the efficient proximate cause doctrine, if a covered peril &mdash; wildfire, vehicle impact, accidental discharge of water, explosion, or any other insured cause &mdash; set the chain of events in motion and was the predominant cause, the earth movement exclusion does not bar coverage.
        </li>
        <li>
          <strong>Anti-concurrent causation clauses do not change this result in California.</strong> Insurers cannot use ACC language to override the efficient proximate cause doctrine. California Insurance Code &sect;530 and California Supreme Court precedent make this clear.
        </li>
        <li>
          <strong>The burden is on the insurer</strong> to prove the exclusion applies. Under an open-perils policy, the insurer must demonstrate that the earth movement exclusion bars coverage. The policyholder does not need to prove coverage exists &mdash; only that a loss occurred.
        </li>
        <li>
          <strong>Documentation and expert analysis are essential.</strong> The single most important thing you can do in an earth movement claim is establish the chain of causation with evidence: photographs, professional reports, and a clear written narrative connecting the covered peril to the earth movement.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Know When to Get Help">
        <p>
          Earth movement claims are technically and legally complex. If your claim has been denied under the earth movement exclusion and you believe a covered peril caused the earth to move, consider hiring a licensed public adjuster to manage the claim or a coverage attorney to review the denial. The efficient proximate cause argument is well-established in California, but winning the argument requires evidence, expertise, and persistence.
        </p>
      </CalloutBox>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
