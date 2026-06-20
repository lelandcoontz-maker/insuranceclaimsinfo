import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Understanding Your Commercial Property Policy: The CP and BOP Forms Explained',
  description:
    'Commercial property policies do not use the Coverage A/B/C/D shorthand from homeowner policies. They use functional names — Building, Business Personal Property, Business Income, Extra Expense — across the ISO Commercial Property (CP) and Businessowners (BOP) form families. Here is what each form does and where the traps live in California claims.',
  summary:
    'Commercial property uses ISO CP forms (Building / BPP / Business Income) or the packaged BOP for smaller businesses. Different forms, different traps — coinsurance, 72-hour Business Income waiting periods, FAIR Plan limitations, and Prop 103 dynamics all shape California commercial claims.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about a specific
          commercial policy or claim, an insured should consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property policies look fundamentally different from the homeowner policies most readers know. Where a homeowner policy uses{' '}
        <Link href="/resources/coverage-lettering-explained" className="text-[#2E74B5] underline hover:text-blue-900">
          Coverage A, B, C, and D shorthand
        </Link>{' '}
        on the declarations page, an ISO commercial property policy uses descriptive coverage names &mdash; <strong>Building</strong>, <strong>Your Business Personal Property</strong>, <strong>Personal Property of Others</strong>, <strong>Business Income</strong>, <strong>Extra Expense</strong>. A business owner who comes to a commercial claim expecting to find a &ldquo;Coverage A&rdquo; line will not see one. The architecture is different, the forms are different, and the traps are different.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article walks through the two main families of commercial property coverage an insured will encounter in California &mdash; the standalone ISO Commercial Property (CP) program and the packaged Businessowners Policy (BOP) &mdash; explains the main forms in each, and flags the recurring problems that come up when commercial claims are handled.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Commercial Doesn&apos;t Use the A/B/C/D Letters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Coverage A/B/C/D lettering on a homeowner dec page comes from the ISO Homeowners form family &mdash; HO-3, HO-5, HO-6, and the related forms. The commercial property program developed independently. Instead of letters, the ISO Commercial Property forms use functional coverage names on the dec page:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Building.</strong> The building itself, completed additions, fixtures, permanently installed machinery and equipment.</li>
        <li><strong>Your Business Personal Property (BPP).</strong> The insured&apos;s contents &mdash; furniture, inventory, equipment, supplies &mdash; located in or on the building or within 100 feet.</li>
        <li><strong>Personal Property of Others.</strong> Property of others in the insured&apos;s care, custody, or control. Important for dry cleaners, repair shops, valet operations, storage facilities, and similar businesses.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business income, extra expense, and other time-element coverages are written on their own forms with their own limits, not bundled into the property dec page the way Coverage D bundles ALE and FRV on a homeowner policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Main ISO Commercial Property Forms
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most California commercial property policies are built on ISO forms or carrier-manuscripted versions of them. The following forms cover the bulk of what an insured will see on a commercial dec page.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 00 10 &mdash; Building and Personal Property Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The workhorse of the ISO Commercial Property program. CP 00 10 provides coverage for Building, Your Business Personal Property, and Personal Property of Others on a single form. Any one of those three coverages can be elected (with its own limit) or omitted. Most commercial dec pages will reference CP 00 10 as the underlying coverage form.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 00 17 &mdash; Condominium Association Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Used when the named insured is a condominium association. Provides building and property coverage tailored to the association&apos;s ownership interest &mdash; the building shell, common-area property, and certain personal property the association owns. The interplay between this form and the unit-owners&apos; individual policies is one of the more litigated areas in California condo claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 00 18 &mdash; Condominium Commercial Unit-Owners Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The commercial counterpart to a residential HO-6. Covers improvements and betterments inside a commercial condo unit plus the unit owner&apos;s business personal property. Used by businesses that own (rather than lease) their commercial condo space.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 00 30 &mdash; Business Income (and Extra Expense) Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers the net income the business would have earned plus continuing normal operating expenses (including payroll) during the period of restoration when a covered cause of loss suspends operations. Also covers extra expenses the insured incurs to avoid or minimize the suspension of operations or to continue operations elsewhere. This is the form most commercial insureds underweight in their coverage review and most claim handlers cut corners on.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 00 50 &mdash; Extra Expense Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Provides Extra Expense coverage alone, without Business Income. Used when an insured&apos;s primary exposure is the cost of continuing operations during a loss (rather than lost income) &mdash; for example, a service business that must keep operating at any cost.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 00 60 &mdash; Leasehold Interest Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers the financial loss a tenant suffers when a covered cause of loss results in cancellation of a favorable lease &mdash; the present value of below-market rent, lease bonus payments, prepaid rent, and similar interests. Easily overlooked at policy inception; potentially significant on a long-term lease in a rising rental market.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Causes of Loss Forms
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CP coverage forms above describe <em>what</em> is covered. The Causes of Loss forms describe <em>by which perils</em>. Every commercial property policy attaches one of three Causes of Loss forms:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>CP 10 10 &mdash; Causes of Loss Basic Form.</strong> Named perils only &mdash; fire, lightning, explosion, windstorm or hail, smoke, aircraft or vehicles, riot or civil commotion, vandalism, sprinkler leakage, sinkhole collapse, and volcanic action. Narrow coverage. Affordable but limiting.
        </li>
        <li>
          <strong>CP 10 20 &mdash; Causes of Loss Broad Form.</strong> Everything in Basic plus falling objects, weight of snow, ice, and sleet, and water damage from accidental discharge of plumbing or appliances. Adds collapse coverage.
        </li>
        <li>
          <strong>CP 10 30 &mdash; Causes of Loss Special Form.</strong> Open perils &mdash; coverage for direct physical loss unless the cause is specifically excluded. This is the broadest of the three and the form most policies use for the building and BPP. Coverage disputes on Special Form policies turn on whether an excluded peril applies, not whether the cause is on a covered list.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Causes of Loss form number is usually shown on the dec page right next to the CP 00 10. An insured comparing two policies should compare causes-of-loss forms as carefully as building limits &mdash; a Special Form policy and a Basic Form policy at the same building limit are very different products.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Businessowners Policy (BOP) Alternative
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For smaller and mid-sized businesses, the ISO Businessowners Policy (BOP) is the packaged alternative to assembling CP forms separately. The BOP combines property, business income, and general liability into a single policy with simplified structure and pricing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        BP 00 03 &mdash; Businessowners Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO BOP form. The Special Form version provides open-perils property coverage on the building and business personal property, business income with extra expense (typically included without a separate election), and commercial general liability coverage. Multiple editions exist (07 13, 07 22, and others); the edition on a particular policy depends on the carrier&apos;s filing and the state.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        BOP Eligibility
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether a business qualifies for a BOP is determined by each carrier&apos;s underwriting rules, not by statute. Industry norms vary, but typical BOP carriers will write businesses with:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Building size up to roughly <strong>25,000&ndash;35,000 square feet</strong> per location (some classes higher).</li>
        <li>Annual gross sales up to roughly <strong>$3&ndash;10 million</strong>, varying by class of business.</li>
        <li>Eligible occupancies including mercantile (retail), office, limited-service restaurants without heavy cooking, certain contractors, and small apartment buildings (lessors&apos; risk).</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common ineligibility categories include heavy manufacturing, large warehouses, bars and nightclubs, restaurants with extensive cooking exposure, and large habitational risks. A business that outgrows BOP eligibility (or operates in an ineligible class) typically moves to a standalone CP package with separate general liability and umbrella coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Beyond ISO: Other Forms Used for Commercial Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A meaningful share of California commercial property is not written on standard ISO CP or BOP forms at all. Larger accounts, unusual exposures, high-wildfire-risk locations, and businesses pushed out of the admitted market often end up on alternative form families. Each of these has its own coverage architecture and its own claim-handling quirks.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Commercial Package Policy (CPP)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CPP is a packaging mechanism, not a separate coverage form. It combines two or more ISO commercial coverage parts &mdash; typically property (CP 00 10 with a Causes of Loss form), commercial general liability, crime, sometimes inland marine and commercial auto &mdash; under a single policy with one declarations page. The property coverage inside a CPP is the same ISO CP form discussed above; the CPP is just the wrapper that bundles multiple lines together. An insured reading a CPP dec page should expect to see the CP 00 10 (or analog), the Causes of Loss form number, and additional coverage parts listed alongside.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Manuscript Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For large or unusual commercial accounts &mdash; national retail chains, hospitality groups, industrial manufacturers, real estate investment portfolios, technology companies with specialized exposures &mdash; the broker negotiates and drafts a custom policy form tailored to the insured&apos;s specific operations and exposures. Manuscript policies do not follow ISO wording, may not look like CP at all, and can vary radically from one insured to another even within the same industry. On a manuscript-policy claim, the controlling document is the actual policy text &mdash; not industry treatises, not the ISO CP form, not anything written about standard market practice. Coverage analysis must start with the manuscript wording and stay anchored to it throughout.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Surplus Lines Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Risks that admitted carriers will not write are placed in the <strong>surplus lines</strong> (also called &ldquo;non-admitted&rdquo; or &ldquo;excess and surplus&rdquo;) market through specialty brokers. In California, surplus lines placements have grown substantially in recent years for hospitality, cannabis, wildfire-exposed commercial property, large habitational risks, and certain contractor classes. Two features of surplus lines coverage matter on a claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>The forms are typically carrier-proprietary or Lloyd&apos;s market wordings,</strong> not standard ISO. Lloyd&apos;s of London subscription policies (where multiple underwriting syndicates each take a percentage of the risk) are common at the higher end. Coverage and exclusions can vary widely from one surplus lines placement to another.</li>
        <li><strong>Surplus lines carriers are not backed by the California Insurance Guarantee Association (CIGA).</strong> If an admitted carrier becomes insolvent, CIGA steps in to pay claims up to statutory limits. If a surplus lines carrier becomes insolvent, the insured generally has no guaranty fund protection. This is a meaningful difference that admitted-market policyholders often do not appreciate until something goes wrong.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inland Marine Forms
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine is a separate insurance program covering property that is movable, in transit, or otherwise specialized in ways the standard CP forms do not fit well. Common commercial inland marine classes include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Contractors equipment floater</strong> &mdash; tools and equipment used at jobsites away from the insured&apos;s premises. Closes a major coverage gap that standard CP and BOP property forms do not address.</li>
        <li><strong>Builder&apos;s risk</strong> &mdash; property under construction. (More on this below.)</li>
        <li><strong>Installation floater</strong> &mdash; equipment being installed at a project site.</li>
        <li><strong>Bailee policies</strong> &mdash; property of others in the insured&apos;s care, custody, or control (dry cleaners, repair shops, processors, storage facilities, valet operations).</li>
        <li><strong>Motor truck cargo</strong> &mdash; freight in transit.</li>
        <li><strong>Computer/EDP equipment floater, fine arts, jewelers block</strong> &mdash; specialized scheduled-property coverages.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine is historically one of the most proprietary lines in commercial insurance. While ISO and AAIS both publish inland marine templates, large and specialty carriers commonly use their own manuscript or proprietary forms, particularly for contractor equipment, installation, builder&apos;s risk, and fine arts.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Builder&apos;s Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&apos;s risk policies cover property during construction. There are two common approaches in California:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>ISO CP 00 20 (Builders Risk Coverage Form).</strong> The ISO commercial property approach. Used commonly on smaller construction projects insured through standard markets and CPPs.</li>
        <li><strong>Inland marine builder&apos;s risk (also called &ldquo;Course of Construction&rdquo;).</strong> Carrier-proprietary or manuscript forms written in the inland marine market. Used commonly on medium to large California construction projects, wrap-up policies, and surplus lines placements because the inland marine forms are more flexible for course-of-construction exposures.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage scope, valuation, and how the policy transitions to permanent property coverage at occupancy vary significantly between ISO CP 00 20 and the various inland marine builder&apos;s risk products. On any builder&apos;s risk claim, identifying the underlying form is the first step.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Difference-in-Conditions (DIC) Wraps
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Difference-in-Conditions (DIC) policy is a wrap-around that fills the gaps in a basic primary policy. The classic California use case is pairing FAIR Plan fire coverage (residential or commercial) with a DIC policy from the surplus lines market that covers water damage, theft, vandalism, business income, and (in some structures) liability. DIC policies are <strong>not standardized</strong>; they are typically manuscript or carrier-proprietary, with coverage terms that vary materially among carriers. On a DIC claim, the coverage analysis hinges on (1) what perils the underlying primary policy covers, (2) what the DIC excludes versus picks up, and (3) how the two policies coordinate at the limit boundaries.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        AAIS Forms
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The American Association of Insurance Services (AAIS) is the principal non-ISO advisory organization publishing standard commercial lines forms. Some California carriers, particularly regional mutuals, cooperatives, and farm mutuals, file AAIS forms instead of ISO. AAIS commercial property forms cover the same conceptual territory as ISO CP (building, business personal property, business income, causes of loss) but use different form numbers and different policy text. An AAIS policy must be read on its own terms; treatises and case law interpreting ISO CP wording may not control AAIS wording on the same coverage question.
      </p>

      <CalloutBox variant="warning" title="The General Rule for Non-ISO Forms">
        <p>
          When a California commercial policy is on something other than standard ISO CP or BOP &mdash; manuscript, surplus lines, inland marine, DIC, AAIS, or a hybrid &mdash; the controlling source of coverage analysis is the actual policy text. Industry treatises, ISO form commentary, and references to &ldquo;standard&rdquo; commercial property practice may not apply. The first step on any non-ISO commercial claim is identifying exactly what form the policy is written on and obtaining the complete policy document including all endorsements.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Recurring Traps in Commercial Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several structural features of the CP and BOP forms cause repeating problems on California commercial claims. Each is worth understanding before a loss occurs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The 80% Coinsurance Default
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        ISO CP forms typically include a coinsurance clause &mdash; most commonly <strong>80%</strong>, though 90% and 100% are also written. If the limit of insurance on the building or BPP is less than the coinsurance percentage multiplied by the property&apos;s actual value at the time of loss, the insurer applies a coinsurance penalty: the loss payment is reduced proportionally to reflect the shortfall in coverage. The penalty applies to <em>every</em> partial loss, not just total losses, and can dramatically cut claim payments on commercial buildings that have appreciated since the limit was last reviewed. The Agreed Value option (if the insured qualified and the underwriter approved it) waives coinsurance for a policy period in exchange for the insured certifying a current property value.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The 72-Hour Business Income Waiting Period
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard CP 00 30, business income coverage begins <strong>72 hours after the time of direct physical loss or damage</strong>, not at the moment of the loss. A business that is back up and running within three days may collect nothing on the Business Income line even though operations were genuinely disrupted. Extra Expense, by contrast, applies from the moment of loss with no waiting period. The 72-hour wait can be reduced to 24 hours or eliminated entirely by endorsement (subject to carrier and state approval), and this is often money well spent for businesses sensitive to short outages.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Ordinance or Law Gaps
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most base CP and BOP forms exclude or sharply limit coverage for the increased cost of construction required to comply with current building codes when an older building is damaged. In California, where building codes have evolved significantly over the past several decades, this gap is severe on older commercial buildings. Ordinance or Law coverage (CP 04 05 endorsement on a CP policy; usually limited built-in on a BOP) addresses three pieces: the loss to the undamaged portion of the building, the cost of demolition, and the increased cost of construction. Understanding which of the three is covered and at what limit is one of the most important pre-loss reviews on any older commercial building.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Business Personal Property Undervaluation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers and insureds routinely undervalue BPP. Inventory grows; equipment is added; tenant improvements accumulate; the BPP limit on the dec page is never adjusted. Then a loss happens and the BPP limit caps the recovery well below the actual loss. A periodic BPP inventory walkthrough is one of the simplest and most valuable pre-loss exercises a commercial insured can do.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Angle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California commercial property has several characteristics that distinguish it from coverage in other states.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No Mandated Commercial Standard Fire Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Standard Form Fire Insurance Policy at{' '}
        <Link href="/resources/standard-fire-policy-insurance-code-2070" className="text-[#2E74B5] underline hover:text-blue-900">
          Cal. Ins. Code &sect;2071
        </Link>{' '}
        sets a statutory baseline for residential fire policies. There is no parallel statutorily mandated commercial fire policy form. Commercial property policies in California are written on ISO and carrier-proprietary forms, subject to California&apos;s claims-handling regulations and minimum coverage standards but not to a single state-prescribed commercial form. The California Department of Insurance&apos;s commercial insurance guide explicitly notes that commercial property contracts are highly manuscripted and that policyholders must read declarations and endorsements carefully.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        FAIR Plan Commercial Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan, best known as the residual market for residential fire coverage in high-risk areas, also writes <strong>commercial property</strong> for businesses unable to obtain coverage in the voluntary market. FAIR Plan commercial coverage is written on a FAIR Plan <strong>proprietary Commercial Property policy</strong> approved by the California Department of Insurance &mdash; it is <em>not</em> the ISO CP 00 10 form. The structure is named-peril, basic-fire&ndash;level: fire, lightning, internal explosion, and a few additional perils, with optional extended coverage perils (wind/hail, vandalism, smoke, sprinkler leakage) available by endorsement. There is no liability coverage in the base policy. Maximum building limits are capped by FAIR Plan&apos;s Commercial Property Manual, typically in the low-to-mid seven figures per location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial FAIR Plan insureds almost always pair the FAIR Plan policy with a Difference-in-Conditions (DIC) policy from the surplus lines market to fill the gaps for water damage, theft, vandalism, business income, and other perils the FAIR Plan does not cover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>One important note on landlord rental properties:</strong> small residential rentals of 1&ndash;4 units that cannot obtain voluntary-market coverage are typically written on the FAIR Plan&apos;s <strong>residential dwelling</strong> program (a basic-fire policy on FAIR Plan proprietary dwelling forms), not on the FAIR Plan commercial form and not on ISO DP-1/2/3. The dividing line between the FAIR Plan&apos;s residential and commercial programs tracks the industry-standard cutoff: 1&ndash;4 unit residential buildings are dwelling-program risks; 5+ unit apartment buildings and mixed-use buildings are commercial-program risks. For more on the FAIR Plan residential dwelling treatment, see{' '}
        <Link href="/resources/coverage-lettering-explained" className="text-[#2E74B5] underline hover:text-blue-900">
          Coverage A, B, C, D Explained
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Prop 103 and Market Dynamics
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Proposition 103 imposes prior approval rate regulation on most admitted property and casualty lines, including commercial. Combined with sustained wildfire exposure, this regulatory dynamic has driven significant nonrenewals, premium increases, and capacity withdrawal in commercial property markets &mdash; particularly in the Wildland-Urban Interface. Many commercial property insureds in California have been pushed into the surplus lines market (where Prop 103&apos;s prior approval does not apply) or onto the FAIR Plan with DIC overlays. Understanding which market a policy is in matters: surplus lines carriers are not backed by the California Insurance Guarantee Association if they become insolvent, and the consumer protections that apply to admitted carriers do not all extend to surplus lines.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Wildfire Underwriting on Commercial Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many California commercial property policies in WUI areas now carry wildfire-specific deductibles, sublimits on outdoor property and landscaping, exclusions for certain debris removal, and limitations on smoke claims. These restrictions are not always obvious from the dec page; they typically live in endorsements. A pre-loss review of any commercial policy in a wildfire-exposed area should specifically identify what wildfire-related restrictions have been added.
      </p>

      <CalloutBox variant="important" title="Edition and Carrier Variation">
        <p>
          ISO has issued multiple editions of the CP and BOP forms. California carriers commonly file proprietary manuscripted versions that modify sublimits, definitions, or exclusions. The framework in this article reflects the standard ISO baseline. For any specific commercial claim, the controlling reference is the actual policy form, edition, and endorsements shown on the declarations page and the schedule of forms. Two policies with the same form number but different editions can produce materially different claim outcomes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters in a Real Commercial Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several patterns repeat in California commercial claims when the underlying policy form is misunderstood:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The retailer whose Business Income claim was cut by the coinsurance penalty.</strong> Sales grew over the policy term; the Business Income limit was based on an outdated worksheet. The coinsurance clause on the Business Income form (typically tied to a 12-month exposure projection) penalized the underreporting at claim time.
        </li>
        <li>
          <strong>The contractor whose BOP did not cover a tools-and-equipment loss away from the premises.</strong> Standard BOP property coverage is location-specific. Tools at a jobsite are typically not covered without an inland marine endorsement or a separate tools-and-equipment policy.
        </li>
        <li>
          <strong>The condo association whose CP 00 17 policy and a unit owner&apos;s CP 00 18 policy disagree about who owns the damaged improvements.</strong> The boundary between association property and unit-owner improvements is set by the CC&Rs, not by the insurance policies. Claim disputes often turn on the CC&R language, with both insurance carriers waiting for resolution.
        </li>
        <li>
          <strong>The FAIR Plan commercial insured who discovered after a loss that water damage was not covered.</strong> FAIR Plan commercial policies are basic-fire policies. The water-damage gap must be filled by a DIC or other separate coverage, and many small commercial insureds skip the DIC to save premium.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a parallel discussion of how the Coverage A/B/C/D system works on residential policies, see{' '}
        <Link href="/resources/coverage-lettering-explained" className="text-[#2E74B5] underline hover:text-blue-900">
          Coverage A, B, C, D: How Property Insurance Lettering Works
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Reading Your Own Commercial Declarations Page">
        <p>
          A commercial dec page typically shows the building and BPP limits, the coinsurance percentage, the Causes of Loss form number (CP 10 10, CP 10 20, or CP 10 30), the deductible, and a schedule of forms and endorsements. The schedule of forms is where most of the actual coverage detail lives &mdash; including any wildfire restrictions, water sublimits, or ordinance or law provisions. An insured should read the schedule of forms in full, not just the headline limits on the dec page, because two policies with the same building limit but different endorsement schedules can produce very different claim outcomes.
        </p>
      </CalloutBox>
    </>
  )
}
