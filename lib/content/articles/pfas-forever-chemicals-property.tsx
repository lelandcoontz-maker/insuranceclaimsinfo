import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "PFAS 'Forever Chemicals' and Property Insurance: An Emerging Coverage Crisis",
  description:
    'How PFAS contamination affects property values and insurance coverage, the new ISO PFAS exclusions appearing on policies, EPA reporting requirements, and what property owners should do to protect themselves.',
  summary:
    'PFAS \'forever chemicals\' contamination can hurt property value, and insurers are adding PFAS exclusions to policies while EPA reporting rules expand. Property owners should know whether their policy now excludes PFAS and document any contamination.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Per- and polyfluoroalkyl substances &mdash; commonly known as PFAS or &ldquo;forever
        chemicals&rdquo; &mdash; are quietly becoming one of the most significant property
        insurance issues in the country. These manufactured chemicals, used for decades in
        products ranging from firefighting foam to nonstick cookware to waterproof clothing,
        do not break down in the environment. They persist in soil, accumulate in groundwater,
        and contaminate drinking water systems serving millions of people. For property owners,
        the implications are enormous: diminished property values, potential cleanup liability,
        and an insurance industry that is moving rapidly to exclude PFAS-related claims from
        coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The collision between PFAS contamination and property insurance is still in its early
        stages, but the trajectory is clear. Insurers are adding PFAS-specific exclusions to
        policies at an accelerating pace. Property owners who do not understand these
        exclusions risk discovering &mdash; after contamination is found &mdash; that their
        insurance provides no protection at all.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What PFAS Are and Why They Matter for Property Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        PFAS are a class of thousands of synthetic chemicals characterized by strong
        carbon-fluorine bonds that make them extraordinarily resistant to degradation. This
        chemical stability is what made them useful in manufacturing &mdash; and what makes
        them an environmental disaster. PFAS do not break down through natural processes.
        They accumulate in water, soil, and living organisms over time, earning the
        &ldquo;forever chemical&rdquo; designation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The primary pathways of PFAS contamination for property owners include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contaminated water supplies:</strong> PFAS have been detected in public
          and private water systems across the country. The contamination often originates
          from manufacturing facilities, military installations, airports, and fire training
          sites where aqueous film-forming foam (AFFF) was used extensively. Water systems
          serving communities near these sites have recorded PFAS concentrations far
          exceeding safe levels.
        </li>
        <li>
          <strong>Soil contamination:</strong> Properties located near PFAS sources can
          have contaminated soil, which creates both health risks and cleanup obligations.
          Agricultural land irrigated with contaminated water can accumulate PFAS in the
          soil, affecting land use and property value.
        </li>
        <li>
          <strong>Firefighting foam residue:</strong> AFFF, the firefighting foam used at
          airports, military bases, and industrial facilities for decades, is one of the
          most significant sources of PFAS contamination. Properties downwind or downstream
          of areas where AFFF was used may have PFAS in their soil and groundwater.
        </li>
        <li>
          <strong>Biosolids application:</strong> Municipal sewage sludge (biosolids) applied
          to agricultural land as fertilizer has been found to contain PFAS, contaminating
          farmland and leaching into groundwater.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Scope of the Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The scale of PFAS contamination is staggering. More than $11 billion in settlements
        have been reached with public water systems alone, and additional litigation involving
        private property owners, agricultural operations, and other affected parties continues
        to grow. The EPA has been expanding its PFAS regulatory framework, adding 205 PFAS
        chemicals to reporting requirements as of 2025. This regulatory expansion signals that
        the government recognizes the scope of the problem &mdash; but it also means that
        more properties will be identified as contaminated, more cleanup obligations will be
        imposed, and more property owners will turn to their insurance policies for help.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property value diminution is one of the most immediate and tangible consequences of
        PFAS contamination for homeowners and commercial property owners. Properties located
        near known PFAS contamination sites have experienced measurable declines in market
        value. Buyers are increasingly aware of PFAS risks, and disclosure requirements in
        many states mean that known contamination must be disclosed at the time of sale. A
        property that tests positive for PFAS in its well water or that sits within a
        contamination plume may be significantly harder to sell &mdash; and worth significantly
        less when it does sell.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Coverage Questions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        PFAS contamination raises several difficult insurance coverage questions. The answers
        depend on the specific policy language, the type of contamination, and the
        jurisdiction &mdash; but the key issues are consistent across most cases.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is PFAS a &ldquo;Pollutant&rdquo; Under the Pollution Exclusion?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most property insurance policies contain a{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-[#2E74B5] underline">
          pollution exclusion
        </Link>{' '}
        that bars coverage for losses caused by the discharge, dispersal, release, or escape
        of pollutants. The typical pollution exclusion defines &ldquo;pollutant&rdquo; broadly
        to include any solid, liquid, gaseous, or thermal irritant or contaminant, including
        smoke, vapor, soot, fumes, acids, alkalis, chemicals, and waste. PFAS would almost
        certainly fall within this broad definition, and insurers are expected to invoke the
        pollution exclusion as a primary defense against PFAS-related claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the pollution exclusion has been the subject of extensive litigation, and
        courts in many states have limited its application. Some jurisdictions have held that
        the pollution exclusion was designed to address traditional industrial pollution
        events &mdash; not the gradual accumulation of chemicals that a property owner did
        not release. The argument that a homeowner whose drinking water was contaminated by
        a distant manufacturing facility should be barred from coverage under a
        &ldquo;pollution exclusion&rdquo; is one that some courts have found unpersuasive.
        But the outcome varies significantly by state and by the specific policy language.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is Cleanup a &ldquo;Covered Loss&rdquo;?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the pollution exclusion does not apply, a property owner must still
        demonstrate that the PFAS contamination constitutes a covered loss under the policy.
        Standard homeowners and commercial property policies cover &ldquo;direct physical
        loss&rdquo; to covered property. Whether chemical contamination that does not cause
        visible physical damage qualifies as &ldquo;direct physical loss&rdquo; is a question
        that courts have answered differently in different contexts. The argument for
        coverage is that contamination renders the property unsafe for its intended use and
        diminishes its value &mdash; which is a tangible, measurable loss. The argument
        against is that the property has not been physically altered in a way that the policy
        contemplates.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does the Policy Cover Property Value Diminution?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proximity to PFAS contamination can reduce property values even if the property
        itself is not directly contaminated. Whether insurance covers this type of
        diminished value depends on the policy language and the jurisdiction. Most standard
        property policies do not explicitly cover market-based value diminution unrelated to
        physical damage to the insured property. This is a gap that leaves many property
        owners without recourse through their insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ISO PFAS Exclusions: The Industry Response
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rather than litigate the application of existing{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          policy exclusions
        </Link>{' '}
        to PFAS claims, the insurance industry is taking a more direct approach: writing
        PFAS-specific exclusions into policies. The Insurance Services Office (ISO) has
        developed PFAS exclusion endorsements that are now appearing on commercial general
        liability (CGL), business owners policies (BOP), and umbrella/excess policies.
        These endorsements specifically exclude coverage for bodily injury, property damage,
        or cleanup costs arising out of or related to PFAS.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The significance of these endorsements cannot be overstated. While the application
        of the general pollution exclusion to PFAS claims is debatable and varies by
        jurisdiction, a PFAS-specific exclusion leaves little room for argument. If a
        policy contains an endorsement that explicitly excludes losses &ldquo;arising out
        of, resulting from, caused by, or contributed to by per- and polyfluoroalkyl
        substances,&rdquo; the insurer&rsquo;s denial will be on much stronger footing.
      </p>

      <CalloutBox variant="important" title="Check Your Policy for PFAS Exclusions Now">
        <p>
          PFAS-specific exclusions may be added to a policy at renewal without prominent
          notice. Property owners &mdash; particularly those in areas near military bases,
          airports, manufacturing sites, or fire training facilities &mdash; should review
          their current policies and any renewal endorsements carefully. If a PFAS exclusion
          has been added, the policyholder should understand that any future claim related
          to PFAS contamination will almost certainly be denied.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific PFAS Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has been among the most aggressive states in regulating PFAS. The state
        has established notification levels and response levels for PFAS in drinking water
        that are among the lowest (most protective) in the nation. California has banned
        PFAS in certain consumer products, including food packaging and cosmetics, and has
        imposed disclosure requirements on manufacturers. The state has also invested in
        monitoring and cleanup of contaminated water systems.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For California property owners, this regulatory framework has practical implications.
        Properties served by water systems that exceed California&rsquo;s PFAS notification
        levels may face disclosure obligations, potential cleanup orders, and diminished
        market values. At the same time, California&rsquo;s generally policyholder-friendly
        insurance jurisprudence may provide a more favorable environment for coverage claims
        than other states &mdash; particularly with respect to the interpretation of the
        pollution exclusion and the definition of &ldquo;direct physical loss.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Environmental Sampling and Documentation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For property owners concerned about PFAS contamination, proactive{' '}
        <Link href="/resources/environmental-sampling-methods" className="text-[#2E74B5] underline">
          environmental sampling and documentation
        </Link>{' '}
        is critical. Testing should be conducted by qualified environmental professionals
        using EPA-approved methods. Key steps include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Test drinking water:</strong> If the property is served by a private
          well, testing for PFAS should be a priority &mdash; especially if the property is
          located within several miles of a known contamination source. Public water systems
          are increasingly required to test and report PFAS levels, but private wells are
          typically the owner&rsquo;s responsibility.
        </li>
        <li>
          <strong>Test soil if indicated:</strong> If the property is near a known source of
          PFAS contamination (manufacturing site, military base, fire training area), soil
          testing may be warranted to determine whether contamination has migrated to the
          property.
        </li>
        <li>
          <strong>Document everything:</strong> Keep copies of all test results, government
          notices, correspondence with the water system, and any communications with the
          insurance company. If a coverage dispute arises, this documentation will be
          essential.
        </li>
        <li>
          <strong>Monitor regulatory developments:</strong> PFAS regulations are evolving
          rapidly. What is not a reportable contamination level today may become one
          tomorrow as the EPA and state agencies tighten standards.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Property Owners Should Do Now
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        PFAS contamination is not a problem that is going away. The chemicals are
        persistent, the sources are widespread, and the regulatory framework is expanding.
        Property owners should take the following steps to protect themselves:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review insurance policies for PFAS and pollution exclusions:</strong>{' '}
          Understand what the current policy covers and does not cover. Look specifically
          for{' '}
          <Link href="/resources/pollution-exclusion-claims" className="text-[#2E74B5] underline">
            pollution exclusions
          </Link>{' '}
          and any PFAS-specific endorsements. If the policy has been renewed recently,
          review the renewal endorsements carefully &mdash; new exclusions may have been
          added.
        </li>
        <li>
          <strong>Test water and soil:</strong> Proactive testing provides a baseline. If
          contamination is found later, having pre-existing test results can help establish
          when the contamination occurred and whether it was present when the policy was in
          effect.
        </li>
        <li>
          <strong>Understand the local contamination landscape:</strong> Research whether
          the property is located near known PFAS sources. The EPA, state environmental
          agencies, and local health departments maintain databases of contamination sites.
        </li>
        <li>
          <strong>Consider environmental insurance:</strong> Specialized environmental
          insurance products are available that specifically cover pollution-related
          losses, including PFAS contamination. These policies are separate from standard
          property insurance and may be worth investigating for properties in high-risk
          areas.
        </li>
        <li>
          <strong>Preserve rights against responsible parties:</strong> If PFAS
          contamination is traced to a specific source &mdash; a manufacturer, a military
          installation, an airport authority &mdash; the property owner may have claims
          against the responsible party. These claims are separate from insurance coverage
          and should be evaluated by an attorney experienced in environmental litigation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Path Forward
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        PFAS contamination represents a slow-moving crisis for property insurance. The
        contamination already exists &mdash; it has been accumulating for decades. What is
        changing is the awareness, the regulation, and the insurance industry&rsquo;s
        response. Insurers are racing to exclude PFAS from coverage before the wave of
        claims arrives. Property owners who wait until contamination is discovered on their
        property to check their insurance coverage may find that the exclusion was added
        at the last renewal and the door to coverage is already closed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The time to review policies, test water and soil, and understand PFAS exposure is
        now &mdash; before a loss occurs and before the insurer has the opportunity to
        point to an{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          exclusion
        </Link>{' '}
        that the policyholder never noticed.
      </p>

      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article provides general educational information about PFAS contamination
          and property insurance. It is not legal, environmental, or insurance advice.
          PFAS regulation, insurance coverage, and environmental liability vary significantly
          by jurisdiction and by the specific facts of each situation. Property owners
          facing PFAS contamination should consult with qualified environmental
          professionals and attorneys experienced in environmental and insurance law.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
