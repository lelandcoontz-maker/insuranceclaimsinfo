import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Mold Coverage Paradox: Covered, Excluded, and Everything In Between',
  description:
    'Mold is simultaneously covered and excluded under most homeowner policies. Learn the cause-vs-result distinction, how to properly allocate costs between dwelling coverage and the mold sublimit, and stop leaving money on the table.',
  summary:
    'Mold is both covered and excluded: covered when it results from a covered cause like a sudden leak, but capped by a mold sublimit. Properly allocate costs between dwelling coverage and the sublimit so you do not leave money on the table.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Mold is one of the most misunderstood topics in homeowner insurance. Policyholders hear &ldquo;mold is excluded&rdquo; and assume they have no coverage. Insurance companies reinforce that assumption because it saves them money. But the truth is far more nuanced: <strong>mold is simultaneously covered and excluded under most homeowner policies</strong>, depending entirely on what caused it and how the remediation costs are allocated. Understanding this paradox is worth tens of thousands of dollars on a water damage claim where mold is present.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Distinction: Cause vs. Result
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The entire mold coverage question turns on a single distinction: <strong>is mold the cause of the loss, or the result of the loss?</strong> That distinction determines whether your claim is excluded or covered, and the insurance industry relies on policyholders not understanding the difference.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mold as an Excluded Cause of Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When mold is the <em>cause</em> of the damage, it is excluded under virtually every homeowner policy. This scenario involves slow, progressive mold growth &mdash; typically from chronic humidity, poor ventilation, deferred maintenance, or a long-term undetected moisture source &mdash; that gradually deteriorates building materials over months or years. In this case, mold is what <em>caused</em> the structural deterioration. The mold was not the result of a sudden, accidental event. It was the problem itself, growing unchecked over time. This type of loss is excluded as a maintenance issue, and that exclusion is generally uncontroversial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Examples of mold as an excluded cause of loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Mold growing behind walls due to years of high indoor humidity and inadequate ventilation</li>
        <li>Mold in a crawl space caused by persistent groundwater intrusion that was never addressed</li>
        <li>Mold on bathroom surfaces caused by a chronically leaking shower pan that the homeowner knew about but did not repair</li>
        <li>Mold growth in an attic caused by improper ventilation that has existed since the home was built</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mold as a Covered Ensuing Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the coverage paradox emerges. When mold develops as a <em>result</em> of a covered peril &mdash; a burst pipe, a sudden appliance failure, storm-driven rain, an accidental discharge of water &mdash; the mold is considered an <strong>ensuing loss</strong>. The covered peril (the water event) caused the mold, and the policy covers the ensuing consequences of covered perils.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the timeline: a supply line to a washing machine bursts on Monday. Water saturates the laundry room floor, the subfloor, and the adjacent wall cavities. Within 24 to 48 hours, mold begins to colonize the wet building materials. The mold did not cause the water damage &mdash; the burst pipe caused the water damage, and the mold is a biological consequence of the moisture that the covered peril introduced. The mold is an ensuing loss from a covered cause.
      </p>

      <CalloutBox variant="important" title="The Cause-vs-Result Distinction Is Everything">
        <p>
          If the mold <em>caused</em> the damage, it is excluded. If a covered peril caused water damage and mold <em>resulted</em> from that water damage, the mold remediation is covered &mdash; subject to any applicable sublimit. United Policyholders, the leading nonprofit policyholder advocacy organization, has repeatedly emphasized that ensuing loss provisions protect policyholders when mold develops as a consequence of a covered water loss. The key question is always: what started the chain of events?
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Examples of mold as a covered ensuing loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A pipe burst inside a wall cavity, soaking insulation and drywall, and mold developed within days</li>
        <li>A water heater failed catastrophically, flooding the garage and adjacent rooms, with mold appearing before the structure could be dried</li>
        <li>Wind-driven rain entered through a damaged roof during a storm, saturating attic insulation and ceiling materials, leading to mold growth</li>
        <li>An ice dam caused water backup under the roof shingles, penetrating the roof deck and creating conditions for mold in the attic</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Critical Importance of Policy Language
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all mold exclusions are created equal. The specific language your policy uses to define what is excluded matters enormously because it determines the scope of what the insurer can refuse to cover. There are four common variations, each progressively broader:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A. &ldquo;Mold and Fungi&rdquo; &mdash; The Narrowest Exclusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The narrowest version excludes only &ldquo;mold&rdquo; and &ldquo;fungi.&rdquo; This is the most policyholder-friendly language because it limits the exclusion to organisms that are specifically and scientifically classified as mold or fungi. It does not reach bacteria, viruses, or other microorganisms that may be present in a water loss. When sewage backup introduces bacterial contamination, a policy that only excludes &ldquo;mold and fungi&rdquo; cannot use the mold exclusion to deny the bacterial remediation component.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        B. &ldquo;Mold, Fungi, and Bacteria&rdquo; &mdash; The Broader Version
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adding &ldquo;bacteria&rdquo; to the exclusion significantly expands its reach. Bacterial contamination is present in virtually every Category 2 (gray water) and Category 3 (black water) loss, as defined by the IICRC. A sewage backup, a dishwasher overflow with food residue, or water that has contacted soil all introduce bacteria. When the exclusion captures bacteria, the insurer can argue that a much larger portion of the remediation work falls under the sublimit &mdash; including work that might otherwise be classified as water damage mitigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        C. &ldquo;Microorganisms&rdquo; &mdash; The Broadest Traditional Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies use the term &ldquo;microorganisms,&rdquo; which is a biological catch-all that encompasses bacteria, viruses, algae, protozoa, and fungi (including mold). This is the broadest traditional exclusion language and gives the insurer the widest possible basis for applying the sublimit or denying coverage. Any biological contamination &mdash; regardless of type &mdash; can potentially be swept into the exclusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        D. Grouping Viruses with Microorganisms &mdash; Post-COVID Amendments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Following the COVID-19 pandemic, many insurers amended their policies to explicitly include viruses within the microorganism or biological contamination exclusion. While this change was driven by concerns about pandemic-related claims, it has broader implications for property claims involving any viral contamination. Some post-COVID policy forms now use language like &ldquo;virus, bacterium, fungus, or other microorganism&rdquo; &mdash; leaving virtually no biological agent outside the exclusion&rsquo;s reach.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The takeaway:</strong> Read your specific policy language carefully. The difference between &ldquo;mold and fungi&rdquo; and &ldquo;microorganisms&rdquo; can determine whether thousands of dollars in remediation costs are covered under your dwelling coverage or shoved under a $5,000 sublimit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sublimits for Mold Remediation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies that provide any mold coverage do so through a sublimit &mdash; a cap on the total amount the policy will pay for mold-related remediation on a given claim. Typical sublimits range from $1,000 to $10,000, with $5,000 being the most common figure in standard policies. Some carriers offer optional endorsements that increase the mold sublimit to $15,000, $25,000, or higher for an additional premium.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now consider reality: the average whole-house mold remediation project costs between $15,000 and $30,000. For large-scale remediation &mdash; multiple rooms, structural cavities, HVAC system involvement &mdash; costs can exceed $50,000. The gap between a $5,000 sublimit and a $25,000 remediation is enormous, and it is in that gap where improper cost allocation creates the biggest coverage losses for policyholders.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Proper Cost Allocation: The Key to Maximizing Recovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important section of this article. The difference between a $5,000 claim payment and a $19,000 claim payment often comes down to a single question: <strong>how are the remediation costs allocated between dwelling coverage and the mold sublimit?</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The governing rule is straightforward: <strong>work that would be performed on a wet structure regardless of whether mold is present is water damage mitigation, not mold remediation.</strong> That work belongs under dwelling coverage (dwelling), not the mold sublimit. Only work that is specifically and exclusively attributable to the presence of mold should count against the mold sublimit.
      </p>

      <CalloutBox variant="important" title="The Allocation Rule That Saves Thousands">
        <p>
          If the work would be done on a wet structure even if no mold were present, it is water damage mitigation &mdash; not mold remediation. It belongs under dwelling coverage, not the mold sublimit. Insurers who lump everything under the mold cap are misapplying the policy.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Costs Properly Allocated to Dwelling Coverage (NOT the Mold Sublimit)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following categories of work are water damage mitigation activities that must be performed on any wet structure to prevent further damage, regardless of whether mold is present. Under the IICRC S500 Standard for Professional Water Damage Restoration, these activities are standard protocol for Category 2 and Category 3 water losses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Wet drywall removal:</strong> Saturated drywall must be removed because it cannot be effectively dried and will lose structural integrity. This is a water damage requirement under IICRC S500 &mdash; it would be done even if no mold were present.</li>
        <li><strong>Wet insulation removal:</strong> Fiberglass and cellulose insulation that has absorbed water must be removed and replaced. Wet insulation does not dry effectively in place, and leaving it creates ongoing moisture problems. This is water damage mitigation.</li>
        <li><strong>Wet flooring and subfloor removal:</strong> Saturated carpet, pad, laminate, and engineered flooring must be removed. Subfloor materials (OSB, particleboard) that have swollen or delaminated from water absorption must be removed and replaced. This work addresses water damage, not mold.</li>
        <li><strong>Structural drying and dehumidification:</strong> Setting up air movers, dehumidifiers, and monitoring moisture levels until the structure reaches acceptable drying goals is the core of water damage mitigation. This equipment and labor are water damage costs.</li>
        <li><strong>Antimicrobial treatments applied during normal water mitigation:</strong> Applying antimicrobial agents to exposed framing and surfaces during the water mitigation process is standard IICRC S500 protocol for Category 2 and Category 3 losses. This is a preventive measure within water mitigation, not mold remediation.</li>
        <li><strong>Demolition labor:</strong> The labor cost of removing wet building materials &mdash; tearing out drywall, pulling up flooring, removing baseboards and cabinetry affected by water &mdash; is demolition labor attributable to the water loss. The materials are being removed because they are wet, not because they have mold on them.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Costs Properly Allocated to the Mold Sublimit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following categories of work are specifically and exclusively attributable to the presence of mold. These activities go beyond standard water mitigation and are performed under the IICRC S520 Standard for Professional Mold Remediation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>HEPA air filtration and negative air containment:</strong> Setting up negative air pressure containment barriers with HEPA-filtered air scrubbers is an IICRC S520 mold remediation protocol. Standard water mitigation uses air movers for drying, not HEPA containment for spore control.</li>
        <li><strong>Enhanced PPE beyond S500 requirements:</strong> Mold remediation requires full Tyvek suits, half-face or full-face respirators with P100 cartridges, and other enhanced personal protective equipment that goes beyond what IICRC S500 requires for standard water mitigation.</li>
        <li><strong>Post-remediation mold clearance testing:</strong> Air sampling and surface sampling after remediation to verify that mold levels have returned to acceptable ranges is a mold-specific cost. Water mitigation concludes with moisture readings, not biological testing.</li>
        <li><strong>HEPA vacuuming and wire brushing for mold removal:</strong> Physically removing mold colonies from structural surfaces through HEPA vacuuming, wire brushing, sanding, or media blasting is mold remediation work.</li>
        <li><strong>Encapsulant sealants on framing:</strong> Applying mold-inhibiting encapsulant coatings to framing members after mold removal is a mold-specific cost. Standard water mitigation does not include encapsulation.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Practical Illustration: The $21,000 Remediation Invoice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a real-world scenario that plays out on hundreds of claims every month. A supply line bursts inside a wall cavity, saturating drywall, insulation, and flooring in two rooms. Mold develops within 48 hours. A remediation contractor performs the necessary work and submits a $21,000 invoice that includes both water mitigation and mold remediation activities.
      </p>

      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">Improper Allocation (How Many Insurers Handle It)</h4>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          The insurer applies the entire $21,000 invoice to the $5,000 mold sublimit. Result:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Mold sublimit: $5,000</li>
          <li>Dwelling coverage payment: $0</li>
          <li><strong>Total payment: $5,000</strong></li>
          <li className="text-red-700 font-semibold">Policyholder shortfall: $16,000</li>
        </ul>
      </div>

      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-[#1F3964] mb-3">Proper Allocation (Correct Reading of the Policy)</h4>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          The costs are properly separated between water mitigation and mold-specific work:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Wet drywall removal, insulation removal, flooring removal, demolition labor: $8,000 &rarr; <strong>Dwelling coverage</strong></li>
          <li>Structural drying, dehumidification, antimicrobial treatment: $5,000 &rarr; <strong>Dwelling coverage</strong></li>
          <li>General conditions, supervision, waste disposal for water damage: $2,000 &rarr; <strong>Dwelling coverage</strong></li>
          <li>HEPA containment, negative air, enhanced PPE: $2,500 &rarr; <strong>Mold sublimit</strong></li>
          <li>HEPA vacuuming, wire brushing, encapsulant: $1,500 &rarr; <strong>Mold sublimit</strong></li>
          <li>Post-remediation clearance testing: $2,000 &rarr; <strong>Mold sublimit (partially &mdash; $1,000 against remaining sublimit)</strong></li>
        </ul>
        <div className="mt-3 pt-3 border-t border-blue-200">
          <p className="text-gray-700 text-sm">Dwelling coverage payment: <strong>$15,000</strong></p>
          <p className="text-gray-700 text-sm">Mold sublimit payment: <strong>$4,000</strong> (of $5,000 available)</p>
          <p className="text-gray-700 text-sm font-bold text-green-700">Total payment: $19,000</p>
          <p className="text-gray-700 text-sm">Policyholder shortfall: $2,000</p>
        </div>
      </div>

      <CalloutBox variant="warning" title="$19,000 vs. $5,000 &mdash; Same Claim, Same Invoice">
        <p>
          The difference between proper and improper cost allocation on this single claim is <strong>$14,000</strong>. The remediation work is identical. The invoice is identical. The only difference is whether the insurer correctly allocates water mitigation costs to dwelling coverage or incorrectly dumps everything under the mold sublimit. Properly separating water damage costs from mold-specific remediation costs is the basic discipline of correctly applying the policy &mdash; not aggressive advocacy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Obligation to Properly Allocate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proper cost allocation is not just a matter of policyholder advocacy &mdash; it is the correct application of the insurance contract. The mold sublimit applies to mold remediation costs. It does not apply to water damage mitigation costs. When an insurer applies the entire remediation invoice to the mold sublimit, they are misapplying the policy by charging costs against a coverage sublimit that does not govern those costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, this misapplication implicates several regulatory and statutory provisions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>California Insurance Code &sect; 790.03(h):</strong> Unfair claims settlement practices, including misrepresenting pertinent facts or policy provisions relating to coverages at issue, and failing to attempt in good faith to effectuate prompt, fair, and equitable settlements of claims in which liability has become reasonably clear.</li>
        <li><strong>10 CCR &sect; 2695.7:</strong> The Fair Claims Settlement Practices Regulations require insurers to conduct thorough investigations and to disclose all benefits, coverages, and provisions that may apply to a claim. Improperly lumping water damage costs under the mold sublimit is the opposite of thorough investigation &mdash; it is a failure to correctly apply the policy to the facts.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer misallocates costs, the policyholder (or their{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>)
        should demand a line-by-line breakdown of the remediation invoice, identify which activities are water mitigation and which are mold-specific, and require the insurer to properly allocate each category to the correct coverage. If the insurer refuses, that refusal itself may support a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>{' '}
        claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        State Regulatory Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mold coverage regulation varies significantly by state. Some states mandate that insurers offer mold coverage, while others leave it entirely to the market. Understanding your state&rsquo;s regulatory framework helps you know what protections are available and what additional coverage to purchase.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>New Jersey:</strong> NJ Department of Banking and Insurance Bulletin 02-14 (August 2002) rejects total mold exclusions and requires carriers to offer mold/fungi coverage at a <strong>minimum $10,000 aggregate limit</strong>, with optional higher limits of $25,000 and $50,000 to be made available. The $10,000 minimum must cover loss to property caused by mold, removal costs, tear-out and replacement to gain access, and testing to confirm presence or absence. Coverage applies only when the mold loss results from a covered peril.</li>
        <li><strong>Texas:</strong> After the early-2000s mold litigation wave, Texas restructured its homeowner forms and moved to company-filed forms. Insurers must file mold endorsements and disclosures with the Texas Department of Insurance, and many carriers offer mold sublimits commonly starting at $5,000. <strong>There is no TDI regulation mandating a specific minimum mold limit</strong> on every policy &mdash; the $5,000 figure reflects common market practice, not a regulatory floor. Texas policyholders should ask their carrier about available mold endorsements and confirm the specific sublimit on the declarations page.</li>
        <li><strong>California:</strong> The California Department of Insurance has emphasized clear disclosure of mold-related limits and exclusions and fair claims handling on water and mold losses under the Unfair Insurance Practices Act and the Fair Claims Settlement Practices Regulations. <strong>California has not adopted a numeric statewide minimum mold coverage requirement</strong> &mdash; unlike New Jersey&rsquo;s $10,000 floor. Most California carriers offer a default mold sublimit (commonly $5,000) with endorsements to increase that amount to $10,000, $25,000, or higher.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you live in a mold-prone state &mdash; anywhere with high humidity, significant rainfall, or frequent water losses &mdash; purchasing an endorsement that increases your mold sublimit above the standard $5,000 is one of the most cost-effective coverage enhancements available. The premium for a $25,000 mold sublimit is typically modest (often $50 to $150 per year), and the protection it provides is disproportionately valuable given the cost of actual mold remediation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mold coverage paradox is not really a paradox at all &mdash; it is a predictable consequence of policy language that most policyholders do not read and many insurers misapply. Mold caused by a covered water loss is a covered ensuing loss, subject to the mold sublimit. But the mold sublimit only applies to costs that are specifically attributable to mold remediation. Water mitigation costs &mdash; removing wet drywall, drying the structure, pulling up saturated flooring &mdash; belong under dwelling coverage regardless of whether mold is present.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most valuable thing a policyholder can do on a water loss claim with mold involvement is ensure that costs are properly allocated. Demand a line-by-line breakdown. Identify which activities are IICRC S500 (water mitigation) and which are IICRC S520 (mold remediation). Require the insurer to apply each category to the correct coverage. The difference can easily be $10,000 to $20,000 on a single claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more information on water damage claims and mold-specific issues, see our guides on{' '}
        <Link href="/resources/mold-losses" className="text-[#2E74B5] hover:underline">mold losses</Link>{' '}
        and{' '}
        <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">water damage claims</Link>.
      </p>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article provides general educational information about mold coverage under homeowner insurance policies and is not legal advice. Policy language, sublimits, and mold coverage provisions vary by insurer, state, and policy edition. The cost allocation principles discussed here are based on standard IICRC protocols and general insurance policy interpretation. Always review your specific policy language and consult with a licensed professional about your particular claim.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Mold on Your Water Damage Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Don&rsquo;t let the insurer dump your entire remediation invoice under the mold sublimit. A Public Adjuster can ensure costs are properly allocated between dwelling coverage and the mold cap &mdash; recovering thousands more than you would on your own.
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
