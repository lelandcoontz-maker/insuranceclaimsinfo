import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Wildfire Claims: A Complete Guide',
  description:
    'A comprehensive guide to California wildfire insurance claims — from immediate steps after a fire to understanding smoke contamination, coverage details, and common insurer tactics.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        California wildfires have become larger, more frequent, and more destructive. Whether you
        were affected by the Palisades fire, the Eaton fire, or another wildfire, the insurance
        claims process that follows is complex, stressful, and often adversarial. After the 2025
        Los Angeles wildfires, nearly 80% of victims reported serious insurance claim issues —
        delays, underpayments, and outright denials. Nationally, the American Policyholder
        Association found that 40% of claims were underpaid, with households receiving
        $200,000–$300,000 less than they were entitled to. This guide walks you through the critical
        steps, coverages, and pitfalls specific to California wildfire claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Immediate Steps After a Wildfire
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the days immediately following a wildfire, take these steps to protect yourself and your
        claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Report the claim immediately.</strong> Contact your insurer as soon as it is safe
          to do so. Timely reporting is a policy condition and protects your rights.
        </li>
        <li>
          <strong>Document everything.</strong> If you can safely access your property, photograph
          and video the damage from every angle. If you cannot access it, photograph what you can
          see from a safe distance. Aerial drone footage, if available, is extremely valuable.
        </li>
        <li>
          <strong>Keep all receipts.</strong> Every dollar you spend as a result of the
          displacement — hotels, meals, clothing, transportation, storage — is potentially
          reimbursable under Coverage D (Additional Living Expenses). Save every receipt from day
          one.
        </li>
        <li>
          <strong>Do not sign anything from the insurer</strong> without reading it carefully. Early
          in the process, insurers sometimes present documents that limit your rights or lock you
          into a scope of loss.
        </li>
        <li>
          <strong>Begin your contents inventory.</strong> Start listing the personal property you
          lost. This is an enormous task and you do not need to complete it immediately, but begin
          while your memory is fresh.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Forest Fire Smoke vs. Urban Wildfire Smoke: A Critical Distinction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all wildfire smoke is the same, and this distinction has enormous implications for your
        claim, your health, and the remediation required for your home.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Forest Fire Smoke
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Traditional forest fire smoke consists primarily of particulate matter, soot, and ash from
        burning trees, brush, and vegetation. It is hazardous — causing respiratory irritation and
        coating surfaces with soot and ash — but the contaminants are relatively straightforward
        and well understood. Standard smoke remediation protocols (cleaning, ozone treatment, HEPA
        filtration) are generally effective for forest fire smoke.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Urban Wildfire Smoke
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a wildfire burns through a populated area — through neighborhoods, commercial
        districts, and infrastructure — the smoke contains everything from a forest fire plus a
        cocktail of toxic contaminants released by burning man-made structures, vehicles, and
        materials:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Silica</strong> from concrete, ceramics, and glass
        </li>
        <li>
          <strong>Arsenic</strong> from treated wood and industrial materials
        </li>
        <li>
          <strong>Mercury</strong> from fluorescent lighting, electronics, and thermostats
        </li>
        <li>
          <strong>Cadmium</strong> from batteries, pigments, and coatings
        </li>
        <li>
          <strong>Lithium</strong> from burning lithium-ion batteries in vehicles, electronics, and
          power storage systems
        </li>
        <li>
          <strong>Dioxins</strong> from burning and melting PVC (polyvinyl chloride) — dioxins are
          among the most toxic man-made chemicals and are classified as cancer-causing agents
        </li>
        <li>
          <strong>Asbestos fibers</strong> from older structures that contained asbestos in
          insulation, flooring, or siding
        </li>
        <li>
          <strong>Heavy metals and petrochemicals</strong> from burning vehicles, fuel storage, and
          household chemicals
        </li>
      </ul>

      <CalloutBox variant="important" title="Demand Contamination Testing After an Urban Wildfire">
        <p>
          If your area experienced an urban wildfire — one that burned through developed
          neighborhoods and structures — do not move back into your home without professional
          contamination testing. Standard smoke remediation may not be sufficient for the toxic
          compounds present in urban wildfire smoke. Your home may require specialized testing for
          heavy metals, dioxins, and other hazardous materials, followed by professional
          decontamination if elevated levels are found.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Total Loss vs. Partial Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claims process differs significantly depending on whether your home was completely
        destroyed or partially damaged:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>total loss</strong> means the structure is completely destroyed or damaged beyond
        repair. The claim will involve full dwelling replacement under Coverage A, complete contents
        replacement under Coverage C, extended displacement under Coverage D, and potentially
        significant Ordinance or Law costs for rebuilding to current codes. Total loss claims are
        the most complex and highest-value claims most homeowners will ever file.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>partial loss</strong> involves damage that can be repaired — structural smoke
        damage, heat damage, partial burning, or contamination. Partial loss claims often involve
        intense disputes about the scope of damage, the extent of smoke penetration, and whether
        items can be cleaned or must be replaced. For more on smoke damage specifically, see our
        guide to{' '}
        <Link href="/types-of-claims/smoke" className="text-blue-700 underline hover:text-blue-900">
          smoke damage claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Each Coverage Applies to Wildfire Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling):</strong> Pays to repair or rebuild your home. In a total
          loss, this is the full cost to rebuild to the same square footage and quality.
        </li>
        <li>
          <strong>Coverage B (Other Structures):</strong> Covers detached structures — fences,
          sheds, detached garages, retaining walls, and driveways.
        </li>
        <li>
          <strong>Coverage C (Personal Property):</strong> Covers the replacement of all personal
          belongings destroyed in the fire. Documenting your contents is one of the most
          time-consuming parts of a wildfire claim.
        </li>
        <li>
          <strong>Coverage D (Loss of Use / ALE):</strong> Pays for additional living expenses
          while your home is uninhabitable. This includes temporary housing, increased food costs,
          storage, and other necessary expenses.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Coverages That Apply
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the four main coverage sections, several additional coverages can add substantial
        value to a wildfire claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Debris removal:</strong> The cost of removing fire debris, ash, and destroyed
          materials from your property — often 5 percent of Coverage A as additional coverage
        </li>
        <li>
          <strong>Ordinance or Law (code upgrades):</strong> The increased cost of rebuilding to
          current building codes, which can be substantial for older homes. See our detailed guide
          to{' '}
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            Ordinance or Law coverage
          </Link>.
        </li>
        <li>
          <strong>Extended replacement cost:</strong> An additional 25 to 50 percent above your
          Coverage A limit if reconstruction costs exceed the stated amount — critical when
          post-disaster construction costs spike due to demand
        </li>
        <li>
          <strong>Trees, shrubs, and landscaping:</strong> Coverage for destroyed landscaping,
          typically capped at 5 percent of Coverage A
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ALE Timeline: How Long Can You Stay Displaced?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional Living Expenses coverage continues for the reasonable time required to repair
        or rebuild your home. For a total loss, this can be two years or more. California law
        provides significant protections here — after declared disasters, the minimum ALE period
        is 24 months, and extensions are available if rebuilding is delayed by circumstances beyond
        your control such as permitting delays, contractor shortages, or debris removal timelines.
        Document every delay and its cause to support any extension request.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Statutory Rights After a Declared Disaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the Governor declares a state of emergency &mdash; as with every major California
        wildfire &mdash; a series of California Insurance Code provisions activate that override
        restrictive policy language. Out-of-state adjusters routinely misrepresent these rights.
        The California Department of Insurance has issued formal notices requiring that all
        adjusters, California-licensed or not, be properly trained on these protections. Know them:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>24-month replacement cost deadline (IC &sect;2051.5(b)(1)):</strong> After a
          declared disaster, you have at least 24 months from the date of your first ACV payment
          to collect the full replacement cost of your loss. Additional six-month extensions must
          be granted for good cause. If an adjuster tells you that you have less than 24 months,
          they are wrong.
        </li>
        <li>
          <strong>24-month ALE period (IC &sect;2051.5(b)(2)):</strong> Additional Living Expenses
          coverage extends for at least 24 months after a declared disaster, regardless of the
          shorter period in your policy. The extended time does not increase the dollar limit &mdash;
          it extends the period over which you can use it.
        </li>
        <li>
          <strong>Right to rebuild at a new location (IC &sect;2051.5(c)):</strong> After a total
          loss, you may use your replacement cost coverage to rebuild on the same lot, build on a
          different lot, or purchase an already-built home elsewhere. The insurer cannot reduce your
          payment because you choose to relocate. If your policy includes extended or guaranteed
          replacement cost, it applies at the new location too.
        </li>
        <li>
          <strong>Appraisal cannot be compelled (IC &sect;2071):</strong> After a government-declared
          disaster, neither you nor the insurer can force the other into appraisal. This prevents
          insurers from using appraisal to cap damages before all damage is discovered.
        </li>
        <li>
          <strong>Policy copy within 30 days (IC &sect;2084):</strong> The insurer must provide a
          complete copy of your policy free of charge within 30 days of your request. Your copy
          burned &mdash; request a new one immediately.
        </li>
        <li>
          <strong>No cancellation during rebuilding (IC &sect;675.1(b)):</strong> The insurer cannot
          cancel your coverage while your home is being rebuilt, and cannot use the damaged condition
          of the home as a basis for cancellation.
        </li>
        <li>
          <strong>Mandatory renewal after a declared disaster (IC &sect;675.1(c)):</strong> If your
          total loss was caused by a declared disaster and not your own negligence, the insurer must
          offer at least one policy renewal.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete breakdown of every California claim deadline and disaster-specific
        protection, see our{' '}
        <Link href="/resources/california-claim-deadlines" className="text-blue-700 underline hover:text-blue-900">
          California Insurance Claim Deadlines guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics in Wildfire Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be aware of these common tactics that insurers use to reduce wildfire claim payments:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Undervaluing the cost to rebuild by using pre-fire material and labor costs rather than
          current post-disaster prices, which are typically inflated due to overwhelming demand
        </li>
        <li>
          Pressuring policyholders into early, lowball settlements before the full scope of the
          loss is understood
        </li>
        <li>
          Denying or limiting smoke and contamination claims for homes that were not directly burned
          but were exposed to toxic urban wildfire smoke
        </li>
        <li>
          Cutting off ALE payments prematurely by arguing the home should have been rebuilt faster,
          even when delays were caused by factors outside the homeowner&rsquo;s control
        </li>
        <li>
          Applying excessive depreciation to contents claims or disputing the replacement cost of
          items
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Wildfire claims are among the most complex insurance claims you will ever face. The
        combination of dwelling damage, contents loss, displacement costs, code upgrade
        requirements, and potential contamination issues creates a claim with many moving parts and
        many opportunities for the insurer to underpay. A licensed{' '}
        <Link href="/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        who specializes in wildfire claims can manage the entire process on your behalf, ensuring
        that every applicable coverage is identified and every dollar you are owed is pursued. For
        more on{' '}
        <Link href="/types-of-claims/fire" className="text-blue-700 underline hover:text-blue-900">
          fire damage claims
        </Link>{' '}
        generally, see our dedicated guide.
      </p>
    </>
  )
}
