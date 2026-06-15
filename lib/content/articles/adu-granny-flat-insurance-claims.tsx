import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "Insurance Claims on ADUs and Granny Flats: The Coverage Gap Most California Families Don’t Know About",
  description:
    "California’s ADU boom has created a massive insurance coverage gap. Learn how Coverage A vs. Coverage B applies, why the 10% other structures limit is almost never enough, and what happens when your ADU is damaged but your insurer didn’t know it existed.",
  summary:
    'When an ADU or granny flat is damaged, coverage usually falls under the small \'other structures\' (Coverage B) limit, typically 10% of the dwelling, which rarely covers a rebuild, especially if the insurer never knew the unit existed. Insure it properly in advance.',
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
        California has seen an explosion in accessory dwelling unit (ADU) construction over the last
        several years. Hundreds of thousands of families have built backyard cottages, converted
        garages, or added units above their existing structures &mdash; often for aging parents, adult
        children returning home, or tenants whose rent helps cover the mortgage. The state actively
        encouraged this construction through a series of landmark laws designed to streamline
        permitting and remove local barriers. What the state did not do &mdash; and what almost nobody
        talks about &mdash; is address the insurance implications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a coverage gap that affects an enormous number of California families. They
        built an ADU in good faith, following the law, often spending $150,000 to $400,000 or more on
        construction. They assumed their homeowners insurance would cover it. Many never told their
        insurer. Some told their insurer and were told &ldquo;it&rsquo;s covered under your existing
        policy.&rdquo; Others were never asked. And now, when the ADU is damaged by fire, water, wind,
        or any other peril, these families are discovering that their coverage is a fraction of what
        they need &mdash; or that the insurer is disputing coverage entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how homeowners insurance actually applies to ADUs and granny flats in
        California. It covers the specific policy provisions that create coverage problems, the legal
        landscape that governs ADU construction, and &mdash; most importantly &mdash; the practical
        steps homeowners should take to protect themselves before a loss occurs, and the arguments
        available when a loss has already happened and the coverage is inadequate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&rsquo;s ADU Boom: The Legislative Background
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the insurance problem requires understanding why so many ADUs now exist. California
        has faced a housing crisis for decades, and beginning in 2016 the legislature enacted a series of
        laws specifically designed to make ADU construction faster, cheaper, and harder for local
        governments to block. The key legislation includes:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>AB 2299 (2016):</strong> Required local governments to ministerially approve ADUs
          that meet basic standards, removing the discretionary review process that had allowed cities
          to effectively block ADU construction through zoning hearings and design review boards.
        </li>
        <li>
          <strong>SB 1069 (2016):</strong> Reduced parking requirements and restricted the fees that
          local agencies could charge for ADU construction, making it financially feasible for more
          homeowners.
        </li>
        <li>
          <strong>AB 68 (2019):</strong> Dramatically expanded ADU rights by allowing ADUs on any
          residential lot, reducing setback requirements, and limiting local agency review timelines
          to 60 days. This law also created the framework for Junior ADUs (JADUs) &mdash; units of
          500 square feet or less created within the existing footprint of a home.
        </li>
        <li>
          <strong>SB 13 (2019):</strong> Reduced or eliminated impact fees for ADUs under 750 square
          feet, required local agencies to approve ADUs within 60 days, and &mdash; critically &mdash;
          created a pathway to legalize existing unpermitted ADUs.
        </li>
        <li>
          <strong>AB 881 (2019):</strong> Further limited local government&rsquo;s ability to impose
          barriers on ADU construction, including removing owner-occupancy requirements for new ADUs
          (through January 1, 2025) and restricting lot coverage limitations.
        </li>
        <li>
          <strong>AB 1033 (2023):</strong> Allowed local jurisdictions to permit ADUs to be sold
          separately from the primary residence as condominiums, creating a new form of ownership
          that raises additional insurance considerations.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The governing statute for ADU construction is California Government Code &sect; 65852.2, which
        sets the statewide standards that local agencies must follow. For JADUs, the governing statute
        is Government Code &sect; 65852.22.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result of this legislative push has been extraordinary. According to the California
        Department of Housing and Community Development, ADU permit applications surged from
        approximately 6,000 in 2018 to over 20,000 per year by 2022. In Los Angeles County alone,
        ADUs have become the single largest category of new housing construction. These are not
        speculative investments by developers &mdash; most are built by homeowners, on
        their own property, often for family members.
      </p>

      <CalloutBox variant="info" title="The Family Context Matters">
        <p>
          Most ADUs in California are built for family reasons: an aging parent who needs to live
          nearby but independently, an adult child who cannot afford local rent, a family member with
          a disability who needs accessible housing. This family context matters for insurance
          purposes because it affects ALE coverage, fair rental value calculations, and the
          insurable interest analysis. When an insurer denies or underpays a claim on a family
          ADU, the human cost goes far beyond the structure itself.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage A vs. Coverage B: Where Does the ADU Fall?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important coverage question for any ADU is whether it falls under
        <strong> Coverage A (Dwelling)</strong> or <strong>Coverage B (Other Structures)</strong> of
        the homeowners policy. The answer determines how much insurance applies to the ADU, and for
        most families, it determines whether the coverage is adequate or catastrophically insufficient.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage A &mdash; Dwelling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard ISO HO-3 policy form (and its California variants), Coverage A applies to
        the <strong>dwelling on the residence premises</strong>, including structures attached to the
        dwelling. This means the main house plus anything physically connected to it &mdash; an
        attached garage, an enclosed porch, a room addition. If the ADU is <em>attached</em> to the
        primary dwelling &mdash; for example, a unit built as an addition to the main house, a second
        story above an attached garage, or a conversion of an attached portion of the home &mdash; it
        should fall under Coverage A.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A is the largest coverage on the policy. If your Coverage A limit is $600,000, that
        full limit (subject to the terms and conditions of the policy) applies to the dwelling and
        all attached structures. An attached ADU draws from that pool. It is not limited to a
        percentage. It is part of the dwelling.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage B &mdash; Other Structures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B applies to structures on the residence premises that are <strong>separated from
        the dwelling by clear space</strong> or that are connected to the dwelling only by a fence,
        utility line, or similar connection. A detached garage, a freestanding shed, a swimming pool
        &mdash; these are other structures. And critically, a <strong>detached ADU</strong> &mdash;
        the freestanding backyard cottage that is the most common ADU configuration in California
        &mdash; is an other structure under the standard policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the problem begins. Coverage B is typically set at <strong>10% of
        Coverage A</strong>. If your Coverage A limit is $600,000, your Coverage B limit is $60,000.
        That $60,000 covers <em>all</em> other structures on the property &mdash; the detached ADU,
        the fence, the patio cover, the tool shed, everything. It is not $60,000 per structure. It is
        $60,000 total.
      </p>

      <CalloutBox variant="important" title="The 10% Trap">
        <p>
          A detached ADU that cost $250,000 to build sits on a property with a $500,000 Coverage A
          limit. Coverage B is 10% of Coverage A: $50,000. The ADU is destroyed in a fire. The
          maximum the insurer will pay under Coverage B &mdash; for the ADU, the fence, the patio,
          and every other detached structure combined &mdash; is $50,000. The homeowner is
          $200,000+ short. This is the coverage gap, and it affects an enormous number of California
          families who built ADUs without adjusting their insurance.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the 10% Limit Is Almost Never Enough
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 10% other structures limit was designed decades ago for a different era of homeownership.
        It was meant to cover the replacement cost of a detached garage, a fence, and perhaps a
        storage shed. It was never designed to cover a fully finished, code-compliant dwelling unit
        with a kitchen, bathroom, HVAC, plumbing, electrical, and finished interior. The economics of
        ADU construction in California make the inadequacy obvious:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          A basic detached ADU of 400&ndash;600 square feet in the Los Angeles or Bay Area market
          typically costs $150,000&ndash;$300,000 to build.
        </li>
        <li>
          A larger ADU of 800&ndash;1,200 square feet can cost $250,000&ndash;$500,000 depending on
          finishes, site conditions, and local permitting requirements.
        </li>
        <li>
          Garage conversions are on the lower end &mdash; typically $80,000&ndash;$200,000 &mdash;
          but still far exceed the 10% Coverage B limit on most policies.
        </li>
        <li>
          The replacement cost to rebuild an ADU after a loss is typically <em>higher</em> than the
          original construction cost, because rebuilding after a loss involves demolition, debris
          removal, updated code compliance, and a contractor market that is often inflated after
          widespread events.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 10% limit can be increased. Most carriers offer the option to raise Coverage B to 20%,
        30%, 50%, or even a specific dollar amount &mdash; but only if the policyholder requests it
        and pays the additional premium. The problem is that most homeowners do not know they need to
        make this request, and many insurance agents do not ask.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Attached vs. Detached: Different Coverage Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether an ADU is &ldquo;attached&rdquo; or &ldquo;detached&rdquo; for insurance purposes is
        not always as straightforward as it sounds. The standard policy defines the dwelling as
        including structures &ldquo;attached to the dwelling.&rdquo; But what constitutes
        &ldquo;attached&rdquo;?
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Clearly attached:</strong> An ADU built as a room addition to the main house,
          sharing a wall, a roofline, or a continuous foundation. A second-story unit built above the
          existing attached garage. A conversion of part of the main house into a separate living
          unit. These are all part of the dwelling under Coverage A.
        </li>
        <li>
          <strong>Clearly detached:</strong> A freestanding backyard cottage with its own foundation,
          walls, and roof, separated from the main house by open space. This is an other structure
          under Coverage B.
        </li>
        <li>
          <strong>The gray area:</strong> An ADU connected to the main house by a covered breezeway,
          an enclosed walkway, or a shared wall of a converted garage that was once attached. A unit
          built over a detached garage. A structure connected to the dwelling by more than just a
          fence or utility line but less than a continuous roofline. These situations require careful
          analysis of the policy language and the physical configuration of the property.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Policy Language Controls">
        <p>
          When there is ambiguity about whether a structure is &ldquo;attached&rdquo; or
          &ldquo;detached,&rdquo; California law interprets the policy in favor of the
          policyholder. Under the well-established rule of contra proferentem, ambiguous
          insurance policy language is construed against the insurer who drafted it. If the
          physical connection between the ADU and the main dwelling creates a reasonable question
          about whether the unit is &ldquo;attached,&rdquo; that ambiguity should be resolved in
          favor of Coverage A &mdash; the broader, more protective coverage. See{' '}
          <Link href="/resources/policy-interpretation" className="text-[#2E74B5] hover:underline">
            Policy Interpretation
          </Link>{' '}
          for a detailed discussion of how California courts interpret ambiguous policy language.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Failure to Notify the Insurer: Material Change in Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most dangerous situations for ADU owners is the failure to notify their insurance
        company that the ADU exists. This happens frequently. A homeowner builds an ADU, moves a
        family member in, and never thinks to call the insurer. Or the homeowner assumes the existing
        policy covers it automatically. Or the homeowner worries that reporting the ADU will increase
        the premium and decides to wait.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss occurs and the insurer discovers an unreported ADU on the property, the insurer
        may raise several arguments to limit or deny coverage:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Material Change in Risk&rdquo; Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers may argue that the construction of an ADU constitutes a <strong>material change
        in risk</strong> that the policyholder was obligated to disclose. The reasoning goes like
        this: the insurer underwrote a policy for a single-family home. The homeowner then added a
        second dwelling unit &mdash; increasing the property&rsquo;s replacement value, adding
        occupants, creating new liability exposures, and potentially changing the property&rsquo;s
        use classification. The insurer would have charged a higher premium, required higher limits,
        or possibly declined to insure the additional structure if it had known.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument has some legitimate basis &mdash; adding a dwelling unit <em>does</em>
        change the risk profile of the property. However, policyholders should be aware that
        California law places significant limits on an insurer&rsquo;s ability to deny coverage
        based on a failure to disclose a material change:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Materiality must be proven.</strong> Under California Insurance Code &sect; 331,
          concealment &ldquo;whether intentional or unintentional&rdquo; can support rescission,
          but only if the concealed fact was material. Materiality is defined in &sect; 336 by
          the probable and reasonable influence of the fact on the insurer in forming its
          estimate of the risk &mdash; not by what actually happened later. The insurer must
          prove that knowing about the ADU would have changed its underwriting decision in a
          specific way.
        </li>
        <li>
          <strong>The duty to disclose typically arises at application or renewal.</strong>
          California concealment law (Ins. Code &sect;&sect; 330&ndash;336) is built around the
          insured&rsquo;s duty to communicate material facts &ldquo;in good faith&rdquo; during
          the contract-formation process. Most homeowners policies do not contain a specific
          provision requiring the policyholder to affirmatively notify the insurer of every
          construction or improvement during the policy period.
        </li>
        <li>
          <strong>Waiver and estoppel through acceptance of premiums.</strong> If the insurer
          renewed the policy and collected premiums after the ADU was built &mdash; particularly
          where aerial imagery, county-assessor data, or other underwriting sources would have
          disclosed the ADU &mdash; the insurer may have waived the right to assert
          concealment, or be estopped from doing so, even if statutory rescission is otherwise
          available.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Increase in Hazard&rdquo; Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A related argument insurers use is the <strong>&ldquo;increase in hazard&rdquo;</strong>
        provision found in many homeowners policies. Standard policy language typically states that
        the insurer does not provide coverage for a loss if the policyholder has &ldquo;increased
        the hazard&rdquo; by any means within the policyholder&rsquo;s control or knowledge.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers may argue that constructing an ADU increased the hazard because it added fuel
        load to the property (more building materials that can burn), created additional ignition
        sources (a second kitchen, second electrical panel, second HVAC system), or increased
        occupancy (more people on the property means higher liability risk and potentially slower
        evacuation).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are strong counterarguments to the increase in hazard position:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The increase in hazard provision is typically aimed at situations where the policyholder
          has done something that <em>creates a new danger</em> &mdash; storing gasoline in the
          house, running an illegal manufacturing operation, leaving the property vacant for an
          extended period. Building a code-compliant dwelling unit with proper permits is not the
          kind of hazard increase this provision was designed to address.
        </li>
        <li>
          A permitted, inspected ADU built to current California building code standards may
          actually <em>reduce</em> certain hazards compared to the pre-existing condition of the
          property. A converted garage that was previously used for storage of flammable materials
          may be safer as a finished, code-compliant dwelling unit.
        </li>
        <li>
          California courts generally interpret &ldquo;increase in hazard&rdquo; narrowly, and
          the insurer bears the burden of proving that the specific change materially increased the
          risk of the specific type of loss that occurred.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Volunteer This Argument">
        <p>
          If your insurer has not raised the &ldquo;increase in hazard&rdquo; or &ldquo;material
          change in risk&rdquo; argument, do not raise it yourself. Do not volunteer information
          about when the ADU was built relative to the policy inception unless specifically asked.
          Let the insurer make its coverage determination based on the information it requests.
          Your obligation is to answer questions honestly when asked &mdash; not to build the
          insurer&rsquo;s coverage defense for them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Converted Garages: A Special Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Garage conversions are one of the most common types of ADUs in California, and they present
        a unique coverage puzzle. Before conversion, the garage was covered under the policy &mdash;
        either under Coverage A (if attached) or Coverage B (if detached). After conversion to a
        dwelling unit, the same physical structure now has a fundamentally different use, a
        significantly higher replacement value, and potentially a different coverage classification.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Attached Garage Conversion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the garage was attached to the main house, it was covered under Coverage A as part of
        the dwelling. Converting it to an ADU does not change its coverage classification &mdash;
        it remains an attached structure, still part of the dwelling under Coverage A. However, the
        conversion dramatically increases the structure&rsquo;s replacement value. A basic attached
        garage might have a replacement cost of $30,000&ndash;$50,000. Once converted to a finished
        ADU with a kitchen, bathroom, flooring, HVAC, insulation, and drywall, the replacement cost
        could be $120,000&ndash;$200,000 or more. If the Coverage A limit was not increased to
        reflect this added value, the entire dwelling may be underinsured.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Detached Garage Conversion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the garage was detached, it was covered under Coverage B at 10% of Coverage A. Before
        conversion, this was probably adequate &mdash; a detached garage with a replacement cost
        of $25,000&ndash;$40,000 fits within most Coverage B limits. After conversion to an ADU,
        the same structure now has a replacement cost of $150,000&ndash;$250,000, far exceeding
        the Coverage B limit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer might take the position that the converted garage is still covered as an other
        structure, but only to the Coverage B limit. The policyholder&rsquo;s position should be
        that the coverage is inadequate and that the insurer &mdash; which accepted premiums while
        the property was being transformed &mdash; cannot now disclaim the coverage gap that its
        own policy structure created. The specific arguments available will depend on the facts of
        each case, but the principle of reasonable expectations and the duty to advise (where the
        agent was aware of the conversion) are relevant here.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Rental Income from ADUs: Coverage D Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners rent out their ADU to a tenant, and the rental income from the ADU is often
        a significant part of the household budget &mdash; sometimes the difference between being
        able to afford the mortgage or not. When the ADU is damaged and the tenant must move out,
        the homeowner loses that rental income. This is where <strong>Coverage D &mdash; Loss of
        Use</strong> comes into play.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard homeowners policy, Coverage D provides two types of benefits:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Additional Living Expenses (ALE):</strong> Covers the increased costs the
          policyholder incurs to maintain their normal standard of living while the insured
          premises is uninhabitable due to a covered loss.
        </li>
        <li>
          <strong>Fair Rental Value (FRV):</strong> Covers the rental income the policyholder
          loses when a <em>rented</em> portion of the insured premises becomes uninhabitable due
          to a covered loss.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are renting the ADU to a tenant and a covered loss makes the ADU uninhabitable,
        you should be entitled to Fair Rental Value for the lost rental income &mdash; the amount
        the tenant was paying (or would have been paying at market rates) for the period the ADU
        cannot be occupied. This continues until the ADU is repaired or until the Coverage D limit
        is exhausted.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, insurers may push back on FRV claims for ADU rental income if they did not know
        the ADU existed or did not know it was being rented. Some policies require that rental
        activity be disclosed and endorsed onto the policy. If the rental was not disclosed, the
        insurer may argue that FRV does not apply. For a deeper analysis of ALE and FRV,
        including common insurer tactics to minimize these benefits, see our guide on{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
          Additional Living Expenses &amp; Fair Rental Value
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ALE When a Family Member Lives in the ADU
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ALE analysis becomes more nuanced when the ADU is occupied not by a paying tenant but
        by a <strong>family member</strong> &mdash; which is the reality for a large percentage of
        California ADUs. This is the parent who moved into the backyard cottage, the adult child
        living in the converted garage, or the grandparent in the guest house.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the ADU is damaged and a family member must relocate, several questions arise:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Is the family member an &ldquo;insured&rdquo; under the policy?</strong> The
          standard homeowners policy defines &ldquo;insured&rdquo; to include the named insured
          and relatives who are <em>residents of the named insured&rsquo;s household</em>. If
          your mother lives in the ADU on your property, she is arguably a resident of your
          household and therefore an insured. Her displacement from the ADU triggers ALE
          coverage for the increased costs she (or you, on her behalf) incur to maintain her
          normal standard of living.
        </li>
        <li>
          <strong>What if the family member pays reduced rent?</strong> Many families charge a
          below-market &ldquo;rent&rdquo; to a family member. In this case, there may be both
          an ALE component (the displaced family member&rsquo;s increased living costs) and a
          partial FRV component (the rental income lost). The insurer will likely take the
          position that if the rent was below market value, the FRV is limited to the actual
          amount being charged. The policyholder&rsquo;s position should be that FRV covers
          the <em>fair rental value</em> of the unit &mdash; what it would rent for at market
          rates &mdash; not what was actually being charged.
        </li>
        <li>
          <strong>What if no rent is charged?</strong> When a family member lives in the ADU
          rent-free, there is no rental income to lose &mdash; so FRV may not apply. But ALE
          still applies if the displaced family member is an insured under the policy. The
          increased costs of that person&rsquo;s temporary living situation are additional living
          expenses covered under Coverage D.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Document the Living Arrangement">
        <p>
          If a family member lives in your ADU, document the arrangement now &mdash; before any
          loss occurs. Keep records of any rent paid (even below-market rent), utility bills in
          the occupant&rsquo;s name, mail delivered to the ADU address, and any written agreement
          between you and the occupant. This documentation will be critical if you need to prove
          to the insurer that the ADU was occupied, that the occupant is a household member, and
          that the displacement caused real financial harm.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Junior ADUs (JADUs): Different Rules
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>Junior ADU (JADU)</strong> is a specific category of accessory dwelling unit
        defined under California Government Code &sect; 65852.22. A JADU must be no more than
        500 square feet in size and must be created within the existing footprint of a
        single-family residence. It may include a basic cooking facility (an efficiency kitchen)
        and must include a separate entrance. JADUs may share a bathroom with the primary
        dwelling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From an insurance perspective, JADUs present a different situation than standard ADUs:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Coverage classification:</strong> Because a JADU is created within the existing
          footprint of the primary dwelling, it is part of the dwelling structure. It is not a
          separate, detached building. It should fall squarely under <strong>Coverage A</strong>,
          not Coverage B. There should be no &ldquo;other structures&rdquo; issue with a JADU.
        </li>
        <li>
          <strong>Replacement cost:</strong> Converting a portion of the main house into a JADU
          adds value to that portion of the dwelling &mdash; adding a kitchenette, possibly a
          bathroom, a separate entrance, and interior finishes. The total dwelling replacement
          cost increases, but the increase is modest compared to building a detached ADU. The
          Coverage A limit may still be adequate, but it should be reviewed.
        </li>
        <li>
          <strong>Owner-occupancy:</strong> Government Code &sect; 65852.22(a)(1) requires that
          the owner occupy either the primary dwelling or the JADU as their principal residence.
          This means the JADU is always on an owner-occupied property, which is consistent with
          standard homeowner policy requirements.
        </li>
        <li>
          <strong>Deed restriction:</strong> A JADU requires a deed restriction that prohibits
          the sale of the JADU separately from the primary dwelling (unlike standard ADUs, which
          may be sold separately under AB 1033 if the local jurisdiction allows it). This deed
          restriction confirms that the JADU is part of the same property &mdash; further
          supporting Coverage A treatment.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Unpermitted ADUs: Does Insurance Still Cover Them?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has a large number of unpermitted ADUs &mdash; units that were built without
        the required building permits, or that were converted from garages, basements, or other
        spaces without going through the permitting process. SB 13 (2019) specifically created a
        pathway for owners to legalize these units, but many remain unpermitted. The question is
        whether insurance covers an unpermitted structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The short answer is: <strong>the permit status of a structure does not, by itself,
        determine whether insurance covers it</strong>. Homeowners policies insure
        &ldquo;structures&rdquo; on the &ldquo;residence premises&rdquo; &mdash; they do not
        condition coverage on the structure having been built with a permit. The key points:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The structure exists on the property.</strong> If a detached ADU is standing on
          the property at the time of the loss, it is an &ldquo;other structure&rdquo; under
          Coverage B (or part of the dwelling under Coverage A, if attached). The policy covers
          structures, not permits.
        </li>
        <li>
          <strong>The insurer inspected (or could have inspected) the property.</strong> Most
          insurers conduct an inspection at the time of underwriting &mdash; either an in-person
          inspection or a review of aerial and satellite imagery. If the ADU was visible and the
          insurer chose to issue or renew the policy anyway, the insurer accepted the risk of the
          property as it existed.
        </li>
        <li>
          <strong>The policy does not contain a &ldquo;permit exclusion.&rdquo;</strong> Standard
          homeowners policies do not exclude coverage for unpermitted structures. There is no
          standard ISO exclusion that says &ldquo;we do not cover structures built without a
          building permit.&rdquo;
        </li>
      </ul>

      <CalloutBox variant="warning" title="Ordinance or Law Complications">
        <p>
          While the absence of a permit does not eliminate coverage for the physical damage to the
          ADU, it can create significant complications when it comes time to rebuild. If the
          unpermitted ADU cannot be rebuilt to its pre-loss condition because the city will not
          issue a permit for the same configuration, the homeowner may need to rely on{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law coverage
          </Link>{' '}
          to cover the additional costs of building to current code and obtaining proper permits.
          If the property does not have adequate Ordinance or Law coverage, the homeowner may face
          a gap between what the insurer pays and what it actually costs to rebuild legally.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is one scenario where the permit status becomes more problematic: if the insurer can
        show that it specifically asked about structures on the property during the application
        process and the homeowner failed to disclose the unpermitted ADU. This brings the
        concealment and misrepresentation statutes into play (Insurance Code &sect;&sect; 330&ndash;339
        for concealment; &sect;&sect; 350&ndash;361 for representations). The insurer must show
        that the concealed or misrepresented fact was <em>material</em> under the &sect; 336
        standard &mdash; that knowing it would have probably and reasonably influenced the
        insurer&rsquo;s decision to write the policy, decline it, or write it on different
        terms.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When the ADU Is Damaged but the Insurer Didn&rsquo;t Know It Existed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the scenario that plays out most often: a homeowner built an ADU (permitted or not),
        never told the insurer, and now the ADU has been damaged or destroyed. The homeowner files a
        claim and the insurer discovers the ADU for the first time during the claims inspection.
        What happens next?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurer&rsquo;s Likely Response
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer will typically take one or more of the following positions:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Coverage B limit applies:</strong> If the ADU is detached, the insurer will pay
          only up to the Coverage B (other structures) limit &mdash; typically 10% of Coverage A.
          This is often $50,000&ndash;$80,000 against an ADU replacement cost of $200,000 or more.
        </li>
        <li>
          <strong>Material misrepresentation:</strong> The insurer may argue that the homeowner
          failed to disclose a material change in the risk profile of the property and that the
          policy should be reformed or rescinded.
        </li>
        <li>
          <strong>Increase in hazard:</strong> The insurer may invoke the increase in hazard
          provision to deny coverage for the ADU entirely.
        </li>
        <li>
          <strong>No FRV or ALE for the ADU occupant:</strong> If the ADU was rented, the insurer
          may deny Fair Rental Value on the grounds that the rental activity was never disclosed
          or endorsed. If a family member was living there, the insurer may dispute that the
          occupant was a &ldquo;resident of the household&rdquo; for ALE purposes.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Policyholder&rsquo;s Counterarguments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of the insurer&rsquo;s positions has vulnerabilities:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The Coverage B limit is a coverage amount issue, not a coverage exclusion.</strong>
          {' '}The insurer is not denying that the ADU is covered &mdash; it is saying the coverage
          amount is limited. This is an important distinction. The structure <em>is</em> covered.
          The dispute is about the adequacy of the limit. In some situations, the insurer&rsquo;s
          agent may have had a duty to advise the policyholder about the inadequacy of the
          Coverage B limit, particularly if the agent was aware of the ADU.
        </li>
        <li>
          <strong>Concealment requires materiality, not just an omission.</strong> Under
          Insurance Code &sect; 331 concealment supports rescission &ldquo;whether intentional
          or unintentional,&rdquo; but only if the concealed fact was material. Section 336
          defines materiality by the probable and reasonable influence of the fact on the
          insurer&rsquo;s underwriting decision. The insurer cannot rescind merely because the
          ADU was not reported &mdash; it must affirmatively prove that knowing about the ADU
          would have probably and reasonably changed its decision to write the policy or the
          terms on which it would have written it.
        </li>
        <li>
          <strong>The insurer had constructive knowledge.</strong> If the insurer (or its agent)
          conducted any inspection of the property &mdash; physical or aerial &mdash; after the
          ADU was built, the insurer may have had constructive knowledge of the ADU&rsquo;s
          existence. An insurer that renewed the policy with knowledge (or the ability to obtain
          knowledge) of the ADU cannot later claim surprise.
        </li>
        <li>
          <strong>The insurer accepted premiums.</strong> The insurer continued to collect premiums
          on the property after the ADU was built. Under the doctrine of waiver and estoppel, an
          insurer that accepts premiums with knowledge of a condition cannot later use that
          condition to deny coverage. Even without actual knowledge, accepting premiums while the
          risk existed creates equitable arguments.
        </li>
        <li>
          <strong>Increase in hazard is a narrow defense.</strong> Building a
          code-compliant dwelling unit is not the type of hazard increase that this provision
          targets. The insurer must prove a causal connection between the alleged increase in
          hazard and the specific loss that occurred.
        </li>
      </ul>

      <CalloutBox variant="important" title="Get Professional Help Early">
        <p>
          If you have an undisclosed ADU that has been damaged, the coverage analysis is complex
          and the stakes are high. This is not a situation to navigate alone. A licensed public
          adjuster or an attorney experienced in insurance coverage disputes can evaluate the
          specific facts, identify the strongest arguments, and ensure that the insurer does not
          use the nondisclosure to avoid paying a legitimate claim. For more on handling coverage
          disputes, see our guide on{' '}
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
            Coverage Disputes
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Duty to Investigate the Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An increasingly important argument in ADU coverage disputes involves the insurer&rsquo;s
        own underwriting practices. Modern insurance underwriting relies heavily on aerial and
        satellite imagery, property data from county assessor records, and periodic inspections.
        Carriers routinely use services that provide overhead photographs of insured properties,
        often updated annually or more frequently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an ADU was built &mdash; particularly a detached backyard unit with its own roofline
        &mdash; it is almost certainly visible in aerial imagery. If the insurer had access to
        this imagery (and virtually all carriers do), and if the insurer renewed the policy
        without asking about the new structure, there is a strong argument that the insurer either
        knew about the ADU or was willfully blind to it. The insurer cannot claim ignorance of a
        structure that was plainly visible in the same imagery the insurer uses to assess roof
        condition, lot size, and other underwriting factors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Similarly, if the county assessor&rsquo;s records reflect the ADU (because the homeowner
        pulled a permit), that information is publicly available and routinely accessed by
        insurance underwriters. An insurer that had access to assessor data showing a permitted
        ADU and still renewed the policy at existing limits has a very difficult time arguing that
        the homeowner&rsquo;s failure to disclose the ADU was material.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ADUs and the Replacement Cost Calculation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when coverage exists, the calculation of the replacement cost for an ADU raises
        specific issues:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Separate structure, separate estimate:</strong> The ADU should be estimated
          separately from the main dwelling. It has its own foundation (if detached), its own
          roof, its own plumbing and electrical systems, its own kitchen and bathroom. A line
          item in the main dwelling estimate that says &ldquo;backyard unit &mdash; $30,000&rdquo;
          is almost certainly inadequate. The ADU needs its own complete scope of loss with
          its own line items for every trade.
        </li>
        <li>
          <strong>Current building code requirements:</strong> ADUs built to 2019 or 2020
          standards may need to be rebuilt to current standards, which could include updated
          energy efficiency requirements (Title 24), fire-resistant construction materials,
          seismic upgrades, and accessibility features. These code upgrades are covered under{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law coverage
          </Link>{' '}
          if the policy includes it.
        </li>
        <li>
          <strong>Site work and utilities:</strong> A detached ADU has its own utility connections
          &mdash; water, sewer, gas, and electrical service from the main panel or a sub-panel.
          Rebuilding the ADU may require re-trenching for utilities, rebuilding the sub-panel,
          and restoring site work (concrete pathways, landscaping, drainage). These items are
          part of the replacement cost and should not be excluded from the estimate.
        </li>
        <li>
          <strong>Soft costs:</strong> ADU construction in California requires architectural
          plans, engineering, permit fees, Title 24 energy compliance documentation, and
          potentially soils reports or structural calculations. These soft costs are part of the
          replacement cost.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ADUs and Liability Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While this article focuses primarily on property coverage, the liability implications of
        ADUs deserve mention. The standard homeowners policy provides liability coverage (Coverage E)
        and medical payments coverage (Coverage F) for bodily injury and property damage occurring
        on the &ldquo;insured location.&rdquo; If the ADU is on the residence premises and the
        policyholder has not changed the nature of the property&rsquo;s use in a way that triggers
        a policy exclusion (such as a business use exclusion), the liability coverage should extend
        to incidents involving the ADU.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, if the ADU is rented to a tenant, some policies may treat the policyholder as a
        &ldquo;landlord&rdquo; for the rented portion, and the standard HO-3 policy is not designed
        for landlord operations. The policyholder may need a landlord endorsement or a separate
        landlord policy (DP-3) for the ADU to ensure full liability protection for tenant-related
        incidents. If a tenant is injured in the ADU and the insurer discovers the rental was
        undisclosed, the liability coverage dispute could be far more consequential than a property
        coverage dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ADUs Sold as Condominiums Under AB 1033
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 1033, which took effect January 1, 2024, allows local jurisdictions to permit ADUs to be
        sold separately from the primary residence as condominiums. Where a local jurisdiction has
        adopted an ordinance allowing this, the ADU can be subdivided and sold as a separate parcel.
        This creates a fundamentally different insurance situation:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The ADU owner is no longer the same person as the primary dwelling owner. The ADU
          needs its own insurance policy &mdash; likely an HO-6 (condo policy) if the
          condominium form of ownership applies.
        </li>
        <li>
          The primary dwelling owner&rsquo;s homeowners policy would no longer cover the ADU,
          because it is no longer the same &ldquo;residence premises.&rdquo;
        </li>
        <li>
          Shared elements (walkways, utility connections, common walls if the ADU is attached)
          may require a shared insurance arrangement similar to a small HOA.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a new and evolving area of California real estate and insurance law. Homeowners
        considering selling an ADU as a condominium should consult with both a real estate
        attorney and an insurance professional to ensure proper coverage structures are in place.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps: How to Properly Insure an ADU
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you have an existing ADU or are planning to build one, the following steps will
        help ensure that your insurance coverage is adequate before a loss occurs:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Notify Your Insurer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contact your insurance company or agent and inform them that you have built (or are
        building) an ADU on the property. Do this in writing &mdash; email is fine &mdash; so you
        have documentation. Describe the ADU: its size, construction type, whether it is attached
        or detached, whether it has a kitchen and bathroom, and whether it is occupied by a family
        member or a tenant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Request a Coverage Review
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the insurer to review your current coverage in light of the ADU. Specifically ask:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Is the ADU covered under Coverage A (dwelling) or Coverage B (other structures)?
        </li>
        <li>
          Is the current Coverage A or Coverage B limit sufficient to cover the replacement
          cost of the ADU?
        </li>
        <li>
          If the ADU is under Coverage B, can the Coverage B limit be increased to reflect
          the ADU&rsquo;s replacement cost?
        </li>
        <li>
          Does the policy need an endorsement for the ADU or for the rental activity?
        </li>
        <li>
          Is Coverage D (Loss of Use) adequate to cover both ALE for the main dwelling and
          FRV for the ADU if both are damaged simultaneously?
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Get the ADU&rsquo;s Replacement Cost Appraised
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not rely on the insurer&rsquo;s replacement cost estimator for the ADU. These tools
        are designed for main dwellings and often fail to accurately capture the cost of a small,
        standalone structure with full residential systems. Get an independent estimate of the
        ADU&rsquo;s replacement cost from a licensed contractor or a Public Adjuster. This number
        is what your Coverage B limit (or your Coverage A limit, if the ADU is attached) needs
        to cover.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Increase Coverage B if Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your ADU is detached and falls under Coverage B, you will almost certainly need to
        increase the Coverage B limit. Most carriers allow you to increase Coverage B to a
        specific dollar amount or a higher percentage of Coverage A. The additional premium is
        usually modest &mdash; often $100&ndash;$300 per year &mdash; but the protection it
        provides is enormous.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Consider a Separate Policy for the ADU
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, particularly when the ADU is rented to a non-family tenant, the best
        approach may be a <strong>separate dwelling fire policy (DP-3)</strong> or a landlord
        policy specifically for the ADU. This provides dedicated coverage limits for the
        structure, dedicated liability coverage for tenant-related incidents, and dedicated
        Fair Rental Value coverage for lost rental income. It avoids the complications of
        trying to force a single homeowner policy to cover what is effectively a two-unit
        property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Document Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep complete records of the ADU construction: the building permit, plans, contractor
        invoices, inspection records, certificate of occupancy, photographs of the completed
        unit, and correspondence with your insurer about the ADU. If a loss occurs, these
        records will be essential for establishing the replacement cost, proving the ADU was
        permitted, and demonstrating that you attempted to properly insure the structure.
      </p>

      <CalloutBox variant="tip" title="Annual Policy Review">
        <p>
          Review your insurance coverage annually, especially if you have made improvements to
          the ADU or if construction costs have increased. What was adequate coverage three
          years ago may not be adequate today. Ask your agent for a replacement cost review
          every year at renewal.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics in ADU Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim involves an ADU, insurers tend to follow predictable patterns. Understanding
        these patterns helps policyholders prepare:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Applying the Coverage B limit without discussion:</strong> The insurer pays the
          10% Coverage B limit and closes the claim, without explaining that the homeowner could
          have had higher limits or that the Coverage B limit may not be appropriate for the
          specific structure. The policyholder should not accept this without challenging the
          adequacy of the limit and asking whether the insurer or its agent had a duty to
          recommend higher coverage.
        </li>
        <li>
          <strong>Treating the ADU as an afterthought in the estimate:</strong> The insurer&rsquo;s
          adjuster includes the ADU as a few line items within the main dwelling estimate rather
          than preparing a separate, detailed scope for the ADU. This consistently results in
          underestimation of the ADU&rsquo;s replacement cost.
        </li>
        <li>
          <strong>Denying ALE/FRV for the ADU occupant:</strong> The insurer pays ALE for the
          primary dwelling occupants but refuses to pay ALE or FRV for the person displaced from
          the ADU, arguing that the ADU &ldquo;wasn&rsquo;t on the policy&rdquo; or that the
          occupant is not an insured.
        </li>
        <li>
          <strong>Using the nondisclosure as leverage:</strong> Even when the insurer does not
          formally deny coverage based on nondisclosure, it uses the policyholder&rsquo;s failure
          to report the ADU as a negotiating tactic &mdash; implying that the policyholder
          &ldquo;should be grateful&rdquo; for any coverage at all and pressuring a quick,
          low settlement.
        </li>
        <li>
          <strong>Excluding soft costs and site work:</strong> The insurer includes the cost of
          the physical structure but excludes architectural plans, engineering, permits, Title 24
          compliance, utility trenching, and site preparation from the replacement cost calculation.
          These are legitimate replacement costs and should be included.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Bring in a Professional
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ADU insurance claims are among the more complex residential property claims because they
        involve coverage classification questions, potential nondisclosure issues, replacement cost
        disputes, and ALE/FRV complications &mdash; often all in the same claim. If your ADU has
        been damaged and you are facing any of the following situations, professional help is
        warranted:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The insurer is paying only the 10% Coverage B limit and the ADU replacement cost
          exceeds that amount significantly.
        </li>
        <li>
          The insurer is raising nondisclosure or material misrepresentation arguments to
          reduce or deny coverage.
        </li>
        <li>
          The insurer is denying ALE or FRV for the ADU occupant.
        </li>
        <li>
          The ADU was unpermitted and the insurer is using the permit status to dispute coverage.
        </li>
        <li>
          The insurer&rsquo;s estimate for the ADU is far below the actual replacement cost.
        </li>
        <li>
          The ADU and the main dwelling were both damaged, and the insurer is applying the
          total Coverage A or Coverage B limit in a way that shortchanges one or both structures.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Public Adjuster can prepare a detailed, standalone replacement cost estimate for
        the ADU, negotiate the coverage classification, and present the legal arguments for maximum
        coverage. An attorney experienced in insurance coverage can handle formal disputes,
        including bad faith claims if the insurer&rsquo;s conduct warrants it. For an overview of
        how coverage disputes are handled and the legal framework that governs them, see our guide
        on{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
          Coverage Disputes
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Insurance Has Not Kept Up with California&rsquo;s ADU Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California spent years crafting legislation to make ADU construction easier. The state
        reduced fees, streamlined permitting, eliminated local barriers, and created pathways to
        legalize unpermitted units. What the state did not do is require insurers to address the
        coverage gap that ADU construction creates. There is no California statute requiring
        insurers to ask about ADUs during underwriting, no requirement to offer adequate Coverage B
        limits when an ADU is known to exist, and no mandate that insurance agents advise
        policyholders about the coverage implications of building an ADU.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is predictable: hundreds of thousands of California families have ADUs that are
        dramatically underinsured. The 10% other structures limit &mdash; a coverage amount
        designed for garages and fences &mdash; is being applied to fully finished dwelling units
        that cost $200,000 or more to build. Families who followed the law, pulled permits, and
        built ADUs for their aging parents or their adult children are discovering, only after a
        loss, that their insurance falls far short.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are one of those families, understand that the coverage gap is not your fault. The
        insurance industry failed to adapt its products to a major shift in California housing
        policy. The arguments for coverage &mdash; contra proferentem, reasonable expectations,
        constructive knowledge, waiver and estoppel &mdash; are real and well-grounded in
        California law. Do not accept the 10% limit without a fight. Get professional help.
        Know your rights.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <Link href="/resources/policy-interpretation" className="text-[#2E74B5] hover:underline">
            Policy Interpretation
          </Link>{' '}
          &mdash; How California courts interpret ambiguous insurance policy language, including the
          contra proferentem rule and the doctrine of reasonable expectations.
        </li>
        <li>
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
            Additional Living Expenses &amp; Fair Rental Value
          </Link>{' '}
          &mdash; A detailed guide to ALE and FRV coverage, including how to maximize benefits and
          counter insurer tactics.
        </li>
        <li>
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law Coverage
          </Link>{' '}
          &mdash; Understanding the three parts of Ordinance or Law coverage and why it can add
          25&ndash;50% to your claim, especially relevant for ADUs that must be rebuilt to current
          code.
        </li>
        <li>
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
            Coverage Disputes
          </Link>{' '}
          &mdash; The legal framework for challenging insurer coverage denials and underpayments in
          California.
        </li>
      </ul>
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
