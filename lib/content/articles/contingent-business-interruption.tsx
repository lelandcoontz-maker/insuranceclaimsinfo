import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Contingent Business Interruption Insurance",
  description:
    "CBI pays for income lost when damage at a supplier, customer, or dependent business shuts you down. Here is what triggers coverage and how to document it.",
  summary:
    'Contingent business interruption (CBI) covers income you lose when physical damage at a supplier, customer, or other dependent business disrupts you, even though your own property is fine. Know what triggers it and document the upstream loss.',
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
        Your business is running perfectly. Your building is undamaged. Your equipment is operational. Your employees are ready to work. But your doors are effectively closed &mdash; or your revenue has collapsed &mdash; because a fire destroyed the factory that makes the one component you cannot source anywhere else. Or because a tsunami wiped out the port where your raw materials ship from. Or because the anchor tenant in your shopping center burned down and foot traffic has dropped to nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the problem that <strong>contingent business interruption (CBI) insurance</strong> is designed to solve. Standard{' '}
        <Link href="/resources/business-interruption" className="text-[#2E74B5] hover:underline">
          business interruption coverage
        </Link>{' '}
        pays for income you lose when <em>your own</em> property is damaged. CBI extends that protection to income you lose when physical damage occurs at the property of a business you depend on &mdash; a supplier, a customer, a neighboring anchor tenant, or any other entity whose operations are critical to yours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI coverage is one of the most important and most overlooked coverages in commercial property insurance. When it works, it can save a business from collapse. When it is absent, inadequate, or disputed, the consequences can be catastrophic &mdash; because the policyholder has done nothing wrong, suffered no damage to their own property, and yet faces crippling financial losses entirely outside their control.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How CBI Differs from Standard Business Interruption
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard business interruption coverage and contingent business interruption coverage share the same fundamental purpose: replacing income lost due to a business shutdown or reduction in operations. The critical difference is <em>where the physical damage occurs</em>.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Standard BI:</strong> Physical damage occurs at <em>your</em> insured premises. Your building burns, your equipment is destroyed, your warehouse floods. Your own property loss forces the shutdown.
        </li>
        <li>
          <strong>Contingent BI:</strong> Physical damage occurs at <em>someone else&apos;s</em> premises &mdash; a supplier, customer, or other business that your operations depend on. Their property loss causes your income loss, even though your property is untouched.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction creates unique challenges in CBI claims. The policyholder must prove not only that physical damage occurred at a third-party location, but also that the damage directly caused a measurable reduction in the policyholder&apos;s own income. The chain of causation is longer, the documentation requirements are more complex, and the carrier has more points at which to contest the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Another important distinction: standard BI coverage is built into the ISO Business Income Coverage Form (CP 00 30). CBI coverage is not. It must be added by endorsement &mdash; typically the ISO Business Income from Dependent Properties endorsement (CP 15 08) &mdash; or provided through a manuscript policy. If you do not have the endorsement, you do not have CBI coverage, no matter how devastating the supply chain disruption.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Four Categories of Dependent Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI policies and endorsements define the types of third-party businesses whose damage can trigger your coverage. These are called &ldquo;dependent properties.&rdquo; Understanding the four categories is essential because the coverage trigger, documentation burden, and loss calculation differ for each.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. Contributing Property (Suppliers)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contributing property is any location that provides materials, components, parts, or services to your business. When physical damage at a supplier&apos;s facility prevents them from delivering the goods or services you need, your resulting income loss may be covered under CBI.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common and most valuable CBI coverage for manufacturing and retail businesses. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A restaurant that cannot operate because its sole food distributor&apos;s warehouse burned down</li>
        <li>An electronics manufacturer that cannot assemble products because a fire destroyed the factory that makes a proprietary circuit board</li>
        <li>A construction company that cannot complete projects because its lumber supplier&apos;s mill was damaged by a windstorm</li>
        <li>An auto dealership that cannot sell vehicles because flood damage at the manufacturer&apos;s assembly plant halted production</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. Recipient Property (Customers)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recipient property is any location that receives your goods or services. When physical damage at a customer&apos;s location prevents that customer from accepting or purchasing your products, the resulting income loss may be covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This coverage is particularly important for businesses with concentrated customer bases. If a manufacturer sells 60 percent of its output to a single buyer and that buyer&apos;s facility is destroyed, the manufacturer loses most of its revenue even though its own operations are unaffected. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A packaging company whose primary customer&apos;s factory is destroyed by fire, eliminating the demand for its products</li>
        <li>A trucking company that loses revenue because its largest client&apos;s distribution center was damaged by a tornado</li>
        <li>A janitorial service that loses contracts because the office buildings it services were damaged in an earthquake</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. Manufacturing Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A manufacturing property is a location that produces goods the insured sells but does not itself manufacture. This category is distinct from contributing property because the relationship is not one of supplying raw materials or components &mdash; rather, the manufacturing property produces the finished or semi-finished goods that the insured distributes, markets, or retails.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The classic example is a distributor or retailer that sells products manufactured at a third-party facility. If a fire destroys the manufacturing plant, the distributor has no product to sell even though its own warehouse and delivery fleet are untouched. Other examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A beverage distributor whose brewery partner&apos;s facility is destroyed by fire</li>
        <li>A branded clothing retailer whose overseas contract manufacturer&apos;s factory is damaged by flooding</li>
        <li>A pharmaceutical wholesaler whose drug manufacturer&apos;s production facility is shut down by explosion damage</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Leader Property (Anchor Tenants and Nearby Attractions)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A leader property &mdash; sometimes called <strong>attraction property</strong> &mdash; is a location that draws customers to your vicinity. This coverage recognizes that some businesses depend on foot traffic or customer flow generated by a nearby anchor business, even though they have no direct commercial relationship with that business.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The classic example is a small retail shop in a shopping center anchored by a major department store. If the department store burns down, the small shop loses most of its foot traffic and revenue &mdash; even though its own premises are undamaged and it has no contractual relationship with the department store. Other examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A coffee shop near a sports arena that loses revenue when fire damage closes the arena for a season</li>
        <li>A hotel near a convention center that loses bookings when the convention center is damaged by flooding</li>
        <li>Restaurants and shops near a university campus that lose revenue when earthquake damage forces the campus to close temporarily</li>
      </ul>

      <CalloutBox variant="info" title="Leader Property Coverage Is Often Sublimited or Excluded">
        <p>
          Leader property coverage is the narrowest and most restrictively written of the four CBI categories. Many standard CBI endorsements do not include leader property coverage at all, and those that do often impose significant sublimits. If your business depends on foot traffic from a nearby anchor, review your policy carefully &mdash; or have a broker review it &mdash; to determine whether this coverage exists and at what limit.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coverage Trigger: What Activates CBI
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI coverage, like standard BI coverage, requires <strong>direct physical loss of or damage to</strong> the dependent property. The income loss must result from a covered cause of loss (a covered peril) that physically damages the supplier&apos;s, customer&apos;s, manufacturer&apos;s, or leader&apos;s property. Three elements must align:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Physical damage must occur at the dependent property.</strong> A supplier&apos;s decision to stop producing a component for business reasons does not trigger CBI. A supplier&apos;s labor strike does not trigger CBI. A supplier&apos;s bankruptcy does not trigger CBI. The damage must be physical &mdash; fire, flood, windstorm, explosion, or another covered peril that alters or destroys the property.
        </li>
        <li>
          <strong>The cause of loss must be covered under your policy.</strong> If the dependent property is damaged by a peril excluded under your CBI policy (such as flood or earthquake, unless separately covered), there is no CBI coverage &mdash; even if the dependent property owner had its own flood or earthquake insurance. The covered peril analysis applies to <em>your</em> policy, not the dependent property&apos;s policy.
        </li>
        <li>
          <strong>The physical damage must cause your income loss.</strong> You must demonstrate a direct causal link between the physical damage at the dependent property and your own income reduction. If you could have obtained the same goods or services from an alternate source at comparable cost, the carrier may argue the physical damage did not cause your loss.
        </li>
      </ol>

      <CalloutBox variant="warning" title="The Alternate Source Trap">
        <p>
          Carriers frequently argue that the insured could have sourced materials from an alternate supplier, thereby breaking the causal chain. This argument can be powerful even when the &ldquo;alternate&rdquo; would have been more expensive, lower quality, or unavailable within a reasonable timeframe. Document every effort you make to find alternate sources &mdash; and every reason why those alternates were not feasible. The carrier&apos;s burden is to show a reasonable alternate existed. Your burden is to show you acted reasonably in response to the disruption.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World CBI Disasters: When Supply Chains Broke
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The importance of CBI coverage becomes most visible after catastrophic events that disrupt global or regional supply chains. Several major disasters have produced landmark CBI claims and fundamentally reshaped how insurers underwrite and adjust this coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The 2011 Tohoku Earthquake and Tsunami
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On March 11, 2011, a magnitude 9.0 earthquake struck off the Pacific coast of Japan, triggering a massive tsunami. The physical destruction was concentrated in northeastern Japan, but the economic impact rippled across the entire global manufacturing economy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Japan was &mdash; and remains &mdash; a critical hub for semiconductor manufacturing, automotive components, and specialty chemicals. The earthquake and tsunami damaged or destroyed factories operated by companies including Renesas Electronics (which at the time produced approximately 40 percent of the world&apos;s automotive microcontrollers) and Shin-Etsu Chemical (a dominant supplier of silicon wafers), along with numerous Tier 1 and Tier 2 automotive parts suppliers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cascading impact was staggering:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Toyota</strong> was forced to halt production at assembly plants worldwide. The company&apos;s global production dropped by roughly 800,000 vehicles in the months following the disaster. Toyota&apos;s lean, just-in-time manufacturing philosophy &mdash; long considered a competitive advantage &mdash; became a catastrophic vulnerability when the supply chain broke.
        </li>
        <li>
          <strong>Renesas Electronics</strong> operated the Naka fabrication plant, which produced a dominant share of the world&apos;s automotive microcontroller chips. The plant suffered severe structural damage from the earthquake. Renesas estimated it would take three months to restore production. During that period, automakers globally &mdash; not just Japanese ones &mdash; were forced to idle assembly lines because there was no practical alternate source for the specific chips Renesas produced.
        </li>
        <li>
          <strong>General Motors, Honda, Ford, and other automakers</strong> also idled plants in the United States, Canada, and Europe. GM alone reported losing production of approximately 250,000 vehicles.
        </li>
        <li>
          <strong>Paint and coatings manufacturers worldwide</strong> faced shortages of Xirallic, a specialty pigment produced exclusively at a Merck KGaA facility in Onahama that was damaged by the tsunami. This single-source dependency disrupted automotive paint supplies globally for months.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Industry estimates of insured CBI losses from the Tohoku disaster ranged from $5 billion to $10 billion globally &mdash; a significant portion of the overall insured loss. The event exposed a fundamental vulnerability in modern manufacturing: just-in-time inventory systems and single-source supplier dependencies create enormous CBI exposure that many businesses had not insured adequately.
      </p>

      <CalloutBox variant="warning" title="Single-Source Supplier Risk">
        <p>
          The Tohoku disaster revealed that many manufacturers did not even know how concentrated their supply chain risk was. A company might have multiple direct (Tier 1) suppliers, but those suppliers might all depend on the same sub-supplier for a critical component. The Renesas microcontroller shortage affected virtually every automaker because there was no practical alternative source. If your business depends on a component or material that comes from a limited number of sources, your CBI exposure is enormous &mdash; and you should insure accordingly.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The 2011 Thailand Floods
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Later that same year, severe flooding in Thailand inundated industrial estates in the Ayutthaya and Pathum Thani provinces north of Bangkok. Thailand was a major manufacturing hub for hard disk drives, accounting for roughly 25 percent of global production. The floods submerged factories operated by Western Digital, Toshiba, Nidec, and other hard drive component manufacturers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Western Digital&apos;s factory in the Bang Pa-In Industrial Estate was one of the hardest hit. The company produced approximately one-third of the world&apos;s hard disk drives, and the flooding destroyed critical clean-room environments that took months to rebuild. The downstream effects were immediate and severe:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Global hard drive prices doubled within weeks as supply dropped dramatically</li>
        <li>Computer manufacturers worldwide &mdash; Dell, HP, Lenovo, and others &mdash; faced supply shortages that lasted well into 2012</li>
        <li>Data center operators and cloud computing companies scrambled to find storage capacity</li>
        <li>The global shortage rippled into consumer electronics, gaming consoles, and any product that required digital storage</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insured losses from the Thailand floods exceeded $15 billion, making it one of the costliest flood events in insurance history. A substantial portion of those losses were CBI claims filed by companies in the United States, Europe, and elsewhere in Asia whose own properties were completely undamaged. The Thailand floods reinforced the lesson of Tohoku: geographic concentration of manufacturing creates systemic CBI risk that extends far beyond the flood zone.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Domestic Factory Fires and Regional Disruptions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI losses are not limited to international catastrophes. Domestic factory fires regularly produce significant CBI claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          In May 2018, a fire at Meridian Magnesium Products in Eaton Rapids, Michigan &mdash; a supplier of magnesium die-cast components to Ford, Fiat Chrysler, GM, and others &mdash; disrupted production at multiple auto assembly plants. Ford was forced to reduce production of the F-150, its most profitable vehicle, because Meridian was the sole supplier of specific instrument panel components.
        </li>
        <li>
          In September 2013, a fire and explosion at an SK Hynix semiconductor fabrication facility in Wuxi, China disrupted global DRAM memory chip supplies. The facility produced approximately 10 percent of the world&apos;s DRAM, and the loss sent memory prices surging, creating downstream CBI exposure for computer and smartphone manufacturers.
        </li>
        <li>
          In 1997, a fire at the Aisin Seiki brake valve factory in Kariya, Japan halted Toyota&apos;s entire Japanese production &mdash; 18 plants producing 14,000 vehicles per day &mdash; because Aisin was the sole supplier of a critical proportioning valve. The shutdown lasted only about a week due to extraordinary supplier network coordination, but the estimated cost exceeded $300 million.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scheduled vs. Blanket CBI Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI coverage is structured in one of two ways, and the distinction has major implications when a loss occurs.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Scheduled (Named) Dependent Properties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a scheduled approach, the insured identifies specific dependent properties by name and address on the policy endorsement. Each scheduled property may have its own coverage limit, and the categories (contributing, recipient, manufacturing, leader) are typically listed separately. The standard ISO endorsement (CP 15 08) uses a scheduled approach.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The advantage of scheduled coverage is clarity: if a scheduled property is damaged and your income drops as a result, the coverage trigger is straightforward. The disadvantage is equally clear: <strong>if a critical supplier is not on the schedule, there is no CBI coverage for losses caused by damage at that supplier&apos;s location</strong>. This creates a dangerous gap for businesses with complex or evolving supply chains. A new supplier added mid-policy-term, a sub-supplier the insured did not know existed, or a service provider not contemplated when the schedule was created &mdash; none of these would be covered.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Blanket (Unnamed) Dependent Properties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket CBI coverage does not require the insured to identify specific dependent properties. Instead, it provides coverage for income losses caused by physical damage at <em>any</em> property that meets the policy&apos;s definition of a dependent property. This is broader coverage, and it eliminates the risk of a gap caused by failing to schedule a specific supplier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, blanket coverage typically comes with lower sublimits. A policy might provide $5 million in CBI coverage for named dependent properties but only $500,000 for unnamed ones. The blanket coverage is still valuable because no business can anticipate every possible supply chain disruption, but the sublimit may be far below the actual exposure if a major unnamed dependency is disrupted.
      </p>

      <CalloutBox variant="tip" title="Use Both Scheduled and Blanket Coverage">
        <p>
          The best approach for most businesses is to schedule all known critical suppliers and customers with adequate individual limits, <em>and</em> also carry blanket coverage for unnamed dependent properties at a meaningful sublimit. This provides strong coverage for the known risks and a safety net for the unknown ones. Review and update the schedule at every renewal as your supply chain evolves.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        COVID-19 and Why Most Pandemic CBI Claims Failed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The COVID-19 pandemic created the largest volume of business interruption coverage disputes in insurance history, and CBI was a significant component of that litigation. Businesses that depended on suppliers or customers forced to close by government shutdown orders argued that CBI coverage should apply because their operations were disrupted by closures at dependent properties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental obstacle was the <strong>direct physical loss or damage</strong> requirement. Courts overwhelmingly held that government-ordered shutdowns, viral contamination, and the general presence of a pandemic did not constitute &ldquo;direct physical loss of or damage to&rdquo; property &mdash; whether that property was the insured&apos;s own or a dependent property. No building was burned. No warehouse was flooded. The factories and offices were physically intact &mdash; they were simply ordered closed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders attempted several creative CBI arguments, and nearly all failed:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Virus as physical damage:</strong> Arguing that the presence of SARS-CoV-2 on surfaces constituted physical damage to the dependent property. Most courts rejected this, holding that the virus did not alter the physical structure of the property and could be removed by cleaning.
        </li>
        <li>
          <strong>Government orders as the covered event:</strong> Arguing that government shutdown orders themselves caused &ldquo;loss of&rdquo; the property because the property could not be used. Some early trial court decisions accepted this theory, but appellate courts largely rejected it.
        </li>
        <li>
          <strong>Supply chain disruption as CBI trigger:</strong> Arguing that factory shutdowns in China and other countries constituted physical damage to contributing properties. This faced the same physical damage hurdle &mdash; the factories were not physically damaged; they were closed by government order.
        </li>
        <li>
          <strong>Loss of functionality:</strong> Arguing that a property that cannot be used for its intended purpose has suffered a &ldquo;loss&rdquo; within the policy&apos;s meaning. Courts generally held that &ldquo;direct physical loss&rdquo; requires tangible, physical alteration to the property, not merely a restriction on its use.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The COVID-19 litigation reinforced a fundamental principle: CBI coverage requires actual physical damage at the dependent property. Economic disruption, government orders, and supply chain chaos &mdash; no matter how devastating &mdash; do not trigger CBI coverage unless they result from physical damage to a dependent property from a covered cause of loss.
      </p>

      <CalloutBox variant="info" title="Post-COVID Policy Changes to Watch">
        <p>
          In the wake of the pandemic, many carriers added explicit virus and communicable disease exclusions to their commercial property policies, including CBI endorsements. Some also tightened the definition of &ldquo;direct physical loss&rdquo; to make clear that loss of use without physical alteration is not covered. If your CBI policy was renewed after 2020, read the endorsements carefully &mdash; the coverage you had in 2019 may be narrower now.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Denial Tactics in CBI Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI claims are contested more aggressively than most other commercial property claims. The longer chain of causation, the involvement of third-party properties, and the complexity of the financial calculations all give carriers more angles of attack. Here are the denial and reduction tactics you should expect:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        &ldquo;The Dependent Property Is Not on the Schedule&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policies that require scheduled dependent properties, carriers will strictly enforce the schedule. If the disrupted supplier is not listed by name and address, the carrier will deny coverage outright &mdash; regardless of how dependent the insured&apos;s operations were on that supplier. This is technically correct under many endorsement forms, which is why maintaining an accurate and comprehensive schedule is critical.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        &ldquo;You Could Have Found an Alternate Source&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers frequently argue that the insured failed to mitigate by sourcing materials from an alternate supplier. This argument is often made with the benefit of hindsight: the carrier identifies an alternate supplier months after the disruption and claims the insured should have used them. The reality is that switching suppliers during a crisis involves lead times, quality verification, tooling changes, minimum order requirements, and price premiums that can make &ldquo;alternate sourcing&rdquo; impractical or prohibitively expensive.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        &ldquo;Your Income Was Already Declining&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers will examine the insured&apos;s pre-loss financial history and argue that any revenue decline during the disruption was actually due to pre-existing business conditions &mdash; competition, economic downturn, seasonal patterns, or management decisions &mdash; rather than the supply chain disruption. This tactic shifts the burden to the insured to prove that the specific income loss was directly caused by the dependent property damage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        &ldquo;The Restoration Period Should Be Shorter&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Just as in standard BI claims, carriers argue that the dependent property &ldquo;should have been&rdquo; repaired faster than it actually was. The carrier hires an engineer or construction consultant who opines that the supplier&apos;s factory could have been restored in four months, when in reality it took ten. The insured has even less ability to push back on this than in a standard BI claim, because the insured has no control over &mdash; and often limited visibility into &mdash; the supplier&apos;s reconstruction efforts.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        &ldquo;The Peril Is Not Covered Under Your Policy&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the dependent property was damaged by flood or earthquake and the insured&apos;s CBI endorsement excludes those perils, the claim will be denied &mdash; even if the dependent property owner recovered under its own flood or earthquake policy. The covered peril analysis applies to the insured&apos;s policy, not the dependent property&apos;s policy.
      </p>

      <CalloutBox variant="warning" title="Demand a Written Denial with Specific Grounds">
        <p>
          When a carrier denies or reduces a CBI claim, demand that the denial be put in writing with specific reference to the policy language the carrier is relying on. Vague verbal denials are unacceptable and, in California, may violate fair claims settlement regulations. A written denial gives you something concrete to respond to and, if necessary, to present to a court or appraiser.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific CBI Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law imposes specific obligations on insurers handling commercial property claims, including CBI claims. Several California-specific considerations are worth understanding:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Fair Claims Settlement Practices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 790.03 and the implementing regulations (California Code of Regulations, Title 10, &sect; 2695.1 et seq.) impose affirmative duties on insurers to investigate claims promptly and fairly, communicate coverage positions in writing, and not misrepresent policy provisions. These requirements apply equally to CBI claims. A carrier that delays investigation of a CBI claim for months while the insured&apos;s business suffers ongoing losses may be in violation of California&apos;s fair claims settlement practices.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Policy Interpretation in the Insured&apos;s Favor
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, ambiguous policy language is construed in favor of the insured. This is the doctrine of <em>contra proferentem</em> &mdash; the drafter of the contract (the insurer) bears the cost of any ambiguity. If the CBI endorsement&apos;s definition of &ldquo;dependent property&rdquo; or &ldquo;direct physical loss&rdquo; is ambiguous, California courts will interpret it in the way that provides coverage, not the way that denies it.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Wildfire and Earthquake Exposure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California businesses face significant CBI exposure from the state&apos;s recurring wildfire and earthquake risks. A manufacturer in the Los Angeles basin whose sole supplier operates in a high-fire-risk area faces CBI exposure that may not be covered if the CBI endorsement excludes wildfire or if the fire damage triggers an earth movement exclusion (as in post-fire mudslide scenarios). Similarly, businesses dependent on suppliers in seismically active areas of California should verify that their CBI endorsement covers earthquake damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on California&apos;s unique insurance landscape, see our articles on{' '}
        <Link href="/resources/large-commercial-losses" className="text-[#2E74B5] hover:underline">
          large commercial losses
        </Link>{' '}
        and{' '}
        <Link href="/resources/commercial-vs-residential-claims" className="text-[#2E74B5] hover:underline">
          commercial vs. residential claims
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Bad Faith Exposure for Carriers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California recognizes a cause of action for insurance bad faith when a carrier unreasonably denies or delays a valid claim. In CBI cases, bad faith exposure is heightened because the financial consequences of delay are severe &mdash; every day a carrier delays investigation or payment, the insured&apos;s business is hemorrhaging income. If a carrier denies a CBI claim without conducting a reasonable investigation, misrepresents the policy language, or unreasonably delays processing, it may face extracontractual liability including emotional distress damages and punitive damages.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting and Proving a CBI Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CBI claims are inherently more difficult to document than standard BI claims because the physical damage occurred at someone else&apos;s property. You must prove several things simultaneously, and the documentation burden is substantial.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Proving Physical Damage at the Dependent Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You must demonstrate that the dependent property actually sustained physical damage from a covered cause of loss. In a major catastrophe like the Tohoku earthquake, this is usually undisputed. In a factory fire at a specific supplier, you may need to obtain documentation from the supplier &mdash; fire department reports, insurance claim records, repair estimates, photographs &mdash; to establish the fact and extent of the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This can be challenging. The supplier has no obligation to share its claim information with you. Your carrier may demand documentation that you cannot compel the supplier to provide. The best approach is to establish cooperative communication with the damaged supplier as early as possible and request written confirmation of the damage, cause, expected restoration timeline, and any interim supply arrangements.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Proving the Causal Link
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You must prove that the physical damage at the dependent property directly caused your income loss. To build this case, document:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Purchase orders that could not be filled due to the supply disruption</li>
        <li>Production shutdowns traced to specific missing components or materials</li>
        <li>Customer orders that were canceled, delayed, or redirected to competitors</li>
        <li>Written communications from the supplier confirming the disruption and its expected duration</li>
        <li>Efforts to locate alternate suppliers, including evidence of why alternates were unavailable, inadequate, or prohibitively expensive</li>
        <li>Inventory records showing when existing stock was depleted</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Quantifying the Income Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The financial calculation for a CBI loss follows the same general framework as a standard BI loss: you must establish what your income <em>would have been</em> during the period of restoration and compare it to what you actually earned. The difference is the CBI loss. However, CBI calculations have additional complexity:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Partial disruptions:</strong> Unlike a standard BI loss where the business is typically fully shut down, a CBI loss may only partially affect operations. A manufacturer that loses access to one component may continue producing other products. The loss calculation must isolate the income attributable to the disrupted supply line.
        </li>
        <li>
          <strong>Mitigation offsets:</strong> If you obtained materials from an alternate source at higher cost, the increased cost is part of the CBI loss &mdash; but the income earned from those operations offsets the loss. The calculation must net these figures.
        </li>
        <li>
          <strong>Ripple effects:</strong> A supply disruption can cause cascading losses. Delayed production can lead to missed delivery deadlines, which can trigger penalty clauses in contracts, which can lead to customer defections. How far down the chain of causation CBI coverage extends is a policy interpretation question that varies by endorsement language.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Engage a Forensic Accountant Early">
        <p>
          CBI loss calculations are complex enough that they almost always require a forensic accountant. Engage one as early as possible &mdash; ideally as soon as the supply disruption occurs &mdash; to begin tracking actual costs, lost sales, mitigation efforts, and the financial impact in real time. Reconstructing these figures months later from incomplete records is significantly harder and produces weaker claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Period of Restoration in CBI Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The period of restoration for a CBI claim is measured by the time it takes to repair or restore the <em>dependent property</em> &mdash; not the insured&apos;s own property (which, by definition, is undamaged in a pure CBI loss). This creates unique issues.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under most CBI endorsements, the period of restoration begins when the physical damage occurs at the dependent property and ends when that property &ldquo;should be&rdquo; repaired, rebuilt, or replaced with reasonable speed and similar quality. The &ldquo;should be&rdquo; language that carriers use to shorten the restoration period in standard BI claims applies here &mdash; but with an added complication: you have no control over the speed of repairs at someone else&apos;s property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the practical implications:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The supplier controls the timeline.</strong> If the damaged supplier decides to rebuild slowly, relocate to a new site, or shut down permanently, you have no ability to accelerate the process. Yet the carrier may argue that the restoration period should be based on how long the repairs &ldquo;should have&rdquo; taken if pursued with reasonable speed &mdash; regardless of what the supplier actually does.
        </li>
        <li>
          <strong>Extended indemnity periods may not apply.</strong> Some BI policies include an extended period of indemnity that continues coverage after the property is restored, recognizing that revenue takes time to return to pre-loss levels. Whether this extended period applies to CBI losses depends on the specific endorsement language.
        </li>
        <li>
          <strong>The duty to mitigate complicates the timeline.</strong> You have a duty to mitigate losses, which may include finding alternate suppliers. If you could have obtained alternate supply within 60 days but the damaged supplier took 180 days to rebuild, the carrier may argue the CBI restoration period should be capped at 60 days.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Evaluate Whether You Need CBI Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every business needs CBI coverage, but many more businesses need it than currently carry it. Use these questions to evaluate your CBI exposure:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do you have single-source suppliers?</strong> If any critical component, material, or service comes from only one source, you have significant CBI exposure. The more concentrated your supply chain, the greater the risk.
        </li>
        <li>
          <strong>Are your suppliers in disaster-prone areas?</strong> Suppliers in earthquake zones, flood plains, hurricane-prone coasts, or wildfire-risk areas present higher CBI risk than suppliers in geographically stable locations.
        </li>
        <li>
          <strong>How long could you operate without your primary supplier?</strong> If the answer is &ldquo;not long,&rdquo; estimate the income you would lose during a realistic disruption period. That figure is your CBI exposure.
        </li>
        <li>
          <strong>Do you depend on a small number of customers for a large share of revenue?</strong> If losing one or two customers would materially reduce your income, you have recipient-property CBI exposure.
        </li>
        <li>
          <strong>Does your business depend on foot traffic from a nearby anchor?</strong> If your revenue is tied to a neighboring business that draws customers to the area, you have leader-property CBI exposure.
        </li>
        <li>
          <strong>Do you carry just-in-time inventory?</strong> Businesses with minimal inventory on hand are more vulnerable to supply disruptions than businesses that maintain safety stock. If a supply interruption would shut you down within days rather than weeks, your CBI exposure is acute.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Advice for Business Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are purchasing CBI coverage for the first time or reviewing existing coverage, here are the steps that matter most:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Map your supply chain.</strong> Identify every supplier, customer, and neighboring business that your revenue depends on. Go beyond Tier 1 &mdash; understand who supplies your suppliers. The Tohoku and Thailand disasters showed that the most critical dependencies are often two or three tiers deep.
        </li>
        <li>
          <strong>Evaluate single-source dependencies.</strong> For any component, material, or service that comes from only one source, quantify the impact: what happens to your revenue if that source is unavailable for 30, 90, or 180 days? Use that figure to set your CBI sublimit.
        </li>
        <li>
          <strong>Review your CBI sublimits.</strong> The sublimit on your CBI endorsement should reflect the actual income at risk from supply chain disruptions. If 50 percent of your revenue depends on one supplier, your CBI sublimit should be adequate to cover that projected income for a realistic restoration period.
        </li>
        <li>
          <strong>Name your critical dependent properties on the schedule.</strong> If your policy requires scheduled dependent properties, make sure every critical supplier, customer, and leader property is listed. Update the schedule at every renewal as your supply chain evolves.
        </li>
        <li>
          <strong>Check geographic restrictions.</strong> If you have overseas suppliers, confirm that your CBI coverage applies to dependent properties outside the United States. Many standard endorsements have geographic limitations that can silently eliminate coverage for international supply chain risks.
        </li>
        <li>
          <strong>Verify covered perils.</strong> If your critical suppliers are in earthquake zones, flood plains, or hurricane-prone areas, confirm that your CBI endorsement covers those perils. If it does not, discuss additional coverage with your broker.
        </li>
        <li>
          <strong>Negotiate for blanket coverage at adequate limits.</strong> Even with thorough supply chain mapping, you cannot identify every dependency. Blanket coverage for unnamed dependent properties provides a safety net for the unknown risks.
        </li>
        <li>
          <strong>Maintain records that prove your dependencies.</strong> Keep purchase orders, supply contracts, invoices, and correspondence that document which suppliers and customers your business depends on. In a CBI claim, you will need to prove the dependency, and contemporaneous business records are the strongest evidence.
        </li>
        <li>
          <strong>Have a supply chain contingency plan.</strong> Before a loss occurs, identify potential alternate suppliers, understand the lead times and costs of switching, and maintain relationships with backup sources. This is good risk management and also strengthens your position in a CBI claim by showing you acted reasonably.
        </li>
        <li>
          <strong>Review your coverage annually with your broker.</strong> Supply chains evolve. Suppliers change. Customer concentrations shift. An annual review ensures your CBI coverage reflects your current risk profile, not the one from three years ago.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When CBI Coverage Is Not Enough: Beyond Traditional Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Traditional CBI coverage has limitations that the modern global supply chain often exceeds. Recognizing this, the insurance market has developed additional products:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Supply chain insurance:</strong> Specialized policies that provide broader coverage for supply chain disruptions, including non-physical perils like port closures, trade embargoes, and transportation disruptions that traditional CBI does not cover.
        </li>
        <li>
          <strong>Trade disruption insurance:</strong> Coverage for losses caused by disruptions to trade routes, including political risks, sanctions, and logistics failures.
        </li>
        <li>
          <strong>Extended CBI endorsements:</strong> Some carriers offer endorsements that extend CBI coverage to Tier 2 and Tier 3 suppliers, broaden the definition of covered perils, or increase the sublimit for unnamed dependent properties.
        </li>
        <li>
          <strong>Parametric insurance:</strong> A newer product that pays a predetermined amount when a specific triggering event occurs (such as an earthquake above a certain magnitude in a defined geographic area), regardless of whether the insured demonstrates a specific income loss. This can provide faster payments and avoid the documentation burden of traditional CBI claims.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These products tend to be expensive and complex, and they are primarily available to{' '}
        <Link href="/resources/large-commercial-losses" className="text-[#2E74B5] hover:underline">
          large commercial risks
        </Link>. For smaller businesses, the focus should be on maximizing the CBI coverage available within a standard commercial property policy by ensuring adequate sublimits, appropriate dependent property schedules, and broad peril coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>CBI coverage protects against income loss when physical damage at a supplier&apos;s, customer&apos;s, manufacturer&apos;s, or neighboring business&apos;s property disrupts your operations.</li>
        <li>Coverage requires actual physical damage at the dependent property from a covered cause of loss &mdash; economic disruptions, government orders, and business failures do not trigger CBI.</li>
        <li>CBI is not included in standard ISO business income forms &mdash; it must be added by endorsement (typically CP 15 08) or through a manuscript policy.</li>
        <li>Dependent properties fall into four categories: contributing (suppliers), recipient (customers), manufacturing, and leader (anchor tenants).</li>
        <li>Scheduled coverage provides clarity but creates gaps; blanket coverage is broader but typically has lower sublimits. Use both.</li>
        <li>Sublimits are almost always lower than your actual supply chain exposure. Review and adjust them annually.</li>
        <li>The Tohoku earthquake, Thailand floods, and domestic factory fires demonstrate that CBI losses can dwarf the direct physical damage at the dependent property.</li>
        <li>COVID-19 reinforced that CBI requires <em>physical</em> damage &mdash; government-ordered closures and viral contamination did not satisfy this trigger.</li>
        <li>Carriers contest CBI claims aggressively. Expect arguments about alternate sources, revenue trends, restoration timelines, and peril exclusions.</li>
        <li>Document your supply chain dependencies, name critical suppliers on your endorsement schedule, and engage a forensic accountant early if a loss occurs.</li>
      </ul>

      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/business-interruption" className="text-[#2E74B5] hover:underline">
              Business Interruption Insurance Claims
            </Link>{' '}
            &mdash; the foundational coverage that CBI extends to third-party property damage
          </li>
          <li>
            <Link href="/resources/large-commercial-losses" className="text-[#2E74B5] hover:underline">
              Large Commercial Losses
            </Link>{' '}
            &mdash; how major commercial claims are handled differently from residential claims
          </li>
          <li>
            <Link href="/resources/commercial-vs-residential-claims" className="text-[#2E74B5] hover:underline">
              Commercial vs. Residential Claims
            </Link>{' '}
            &mdash; key differences in process, documentation, and carrier approach
          </li>
        </ul>
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
