import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Builder&rsquo;s Risk Insurance Claims: Coverage for Properties Under Construction, Renovation Losses, and Common Disputes',
  description:
    'Builder&rsquo;s risk policies insure properties during construction or major renovation. Learn what these policies cover, how they differ from standard property insurance, and the most common claim disputes including faulty workmanship, soft costs, and delay in completion.',
  summary:
    'Builder\'s risk policies insure a property during construction or major renovation and differ from standard property insurance. Common disputes involve faulty workmanship, soft costs, and delay in completion. Know what your policy covers before a loss on the jobsite.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A property under construction or undergoing major renovation faces risks that a
        standard property insurance policy was never designed to cover. Materials stored on
        site can be stolen or damaged by weather. Partially completed structures are
        vulnerable to wind, fire, and vandalism. Delays caused by covered losses can result
        in carrying costs, loan interest, and lost rental income that dwarf the physical
        damage itself. Builder&rsquo;s risk insurance &mdash; sometimes called course of
        construction insurance &mdash; exists to address these unique exposures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies are fundamentally different from standard property
        policies in their structure, scope, and the disputes they generate. This article
        explains what builder&rsquo;s risk policies cover, how they work, and the most
        common claim disputes that arise under these policies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Builder&rsquo;s Risk Policies Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A builder&rsquo;s risk policy is a specialized form of property insurance that covers
        a structure during the course of construction, renovation, or rehabilitation. The
        policy typically covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The structure itself:</strong> The building as it is being constructed,
          including all permanent materials and fixtures that have been incorporated into the
          structure
        </li>
        <li>
          <strong>Building materials and supplies:</strong> Materials stored on the
          construction site that are intended for use in the project, including lumber,
          steel, roofing materials, plumbing fixtures, and similar items
        </li>
        <li>
          <strong>Materials in transit:</strong> Many policies cover building materials while
          being transported to the construction site, subject to a sublimit
        </li>
        <li>
          <strong>Temporary structures:</strong> Scaffolding, temporary fencing, construction
          trailers, and other temporary structures used in connection with the project
        </li>
        <li>
          <strong>Foundations and underground work:</strong> Foundations, footings, and
          underground utilities that are part of the construction project
        </li>
        <li>
          <strong>Landscaping and site work:</strong> Some policies cover hardscape,
          landscaping, and site improvements, though these are often subject to sublimits
        </li>
      </ul>

      <CalloutBox variant="info" title="Who Purchases Builder&rsquo;s Risk Coverage?">
        <p>
          Builder&rsquo;s risk policies can be purchased by the property owner, the general
          contractor, or both. In many construction contracts, the parties agree on which
          party will obtain the builder&rsquo;s risk policy, and the policy is written to
          cover the interests of both the owner and the contractor (and often subcontractors
          as well) as named or additional insureds. Reviewing the construction contract to
          understand who is responsible for obtaining builder&rsquo;s risk coverage &mdash;
          and confirming that the coverage is actually in place &mdash; is an essential step
          before construction begins.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Builder&rsquo;s Risk Policies Differ from Standard Property Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies differ from standard property policies in several
        important ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurable value increases over time.</strong> Unlike a standard property
          policy where the insured value is relatively stable, a builder&rsquo;s risk policy
          covers a project whose value increases as construction progresses. The policy is
          typically written for the completed value of the project, but the insurable interest
          at any given time is only the value of work completed to date plus materials on site.
          Some policies use a reporting form where the insured reports the value of work
          completed at regular intervals.
        </li>
        <li>
          <strong>The policy has a defined term.</strong> Builder&rsquo;s risk policies are
          not ongoing like standard property policies. They are written for a specific
          construction period and expire when the project is completed, when the structure
          is occupied, or when a permanent property policy takes effect &mdash; whichever
          occurs first. Extensions may be available if construction takes longer than
          anticipated, but they are not automatic and often require additional premium.
        </li>
        <li>
          <strong>Named perils vs. all risk.</strong> Builder&rsquo;s risk policies come in
          both named perils and all risk (sometimes called &ldquo;special form&rdquo; or
          &ldquo;open perils&rdquo;) versions. An all risk builder&rsquo;s risk policy
          covers all causes of loss unless specifically excluded, which provides significantly
          broader protection. Named perils policies cover only the specific perils listed in
          the policy. Given the variety of risks on a construction site, an all risk policy
          is strongly preferred.
        </li>
        <li>
          <strong>Multiple insured parties.</strong> A standard homeowner&rsquo;s policy
          typically insures only the property owner and household members. A builder&rsquo;s
          risk policy often insures the owner, the general contractor, and subcontractors,
          reflecting the multiple parties with an insurable interest in the project.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Soft Costs Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most valuable and most frequently underinsured components of a builder&rsquo;s
        risk policy is soft costs coverage. &ldquo;Soft costs&rdquo; are the indirect financial
        losses that result from a covered delay in construction &mdash; costs that are not part
        of the physical repair but that the owner or developer incurs because the project takes
        longer to complete than planned.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Soft costs can include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Construction loan interest:</strong> The additional interest that accrues on
          the construction loan during the delay period. On a large project, this can amount to
          tens or hundreds of thousands of dollars per month.
        </li>
        <li>
          <strong>Real estate taxes:</strong> Property taxes that continue to accrue during
          the delay period
        </li>
        <li>
          <strong>Architectural and engineering fees:</strong> Redesign costs, re-engineering,
          and additional inspections required as a result of the loss
        </li>
        <li>
          <strong>Permit and inspection fees:</strong> Costs of obtaining new or revised
          building permits and additional inspections necessitated by the damage
        </li>
        <li>
          <strong>Legal and accounting fees:</strong> Professional fees incurred as a direct
          result of the loss
        </li>
        <li>
          <strong>Lost rental income:</strong> Income that the completed project would have
          generated during the delay period
        </li>
        <li>
          <strong>Advertising and leasing costs:</strong> Additional marketing expenses
          resulting from delayed project completion
        </li>
      </ul>

      <CalloutBox variant="warning" title="Soft Costs Are Often Underinsured">
        <p>
          Many builder&rsquo;s risk policies either do not include soft costs coverage at
          all or include it with a sublimit that is far too low. A significant construction
          delay on a project with a multimillion-dollar construction loan can generate soft
          costs that exceed the physical damage. Property owners and developers should ensure
          that their builder&rsquo;s risk policy includes adequate soft costs coverage with
          limits that reflect the actual financial exposure of a construction delay.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Delay in Completion Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Closely related to soft costs is delay in completion coverage, which provides broader
        protection against the financial consequences of a covered delay. While soft costs
        coverage focuses on specific categories of ongoing expenses, delay in completion
        coverage may also address the loss of anticipated revenue or profit that results
        from the delayed opening or occupancy of the project.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a developer building a commercial property or a residential development, the
        difference between completing the project on time and completing it six months late
        can represent millions of dollars in lost revenue. Delay in completion coverage is
        designed to bridge that gap, but the policy terms must be carefully reviewed to
        understand what triggers the coverage, how the delay period is measured, and what
        costs are included.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Claim Disputes Under Builder&rsquo;s Risk Policies
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Testing&rdquo; Exclusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many builder&rsquo;s risk policies contain an exclusion for damage that occurs during
        testing of equipment, machinery, or building systems. This exclusion is intended to
        address the risk that newly installed systems may fail during commissioning, but
        carriers sometimes apply it more broadly than intended &mdash; for example, denying
        coverage for a fire that starts during the testing of an HVAC system, even though
        the fire damage to the structure itself had nothing to do with whether the HVAC
        system passed its test.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The proper application of the testing exclusion should focus on damage to the item
        being tested, not on consequential damage to other property caused by a covered peril
        (such as fire) that happened to originate during testing. Policyholders facing a
        testing exclusion denial should carefully analyze whether the exclusion applies only
        to the tested equipment or to all resulting damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Faulty Workmanship vs. Resulting Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The faulty workmanship exclusion is one of the most disputed provisions in builder&rsquo;s
        risk insurance. Virtually every builder&rsquo;s risk policy excludes the cost of
        correcting faulty workmanship itself &mdash; the policy is not a construction warranty.
        However, the resulting damage caused by faulty workmanship may be covered, depending on
        the policy language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if a plumber installs a pipe incorrectly and the pipe fails, the cost to
        reinstall the pipe correctly is excluded as faulty workmanship. But the water damage to
        the floors, walls, and electrical systems caused by the pipe failure may be covered as
        resulting damage from a covered peril (water damage). The distinction between the
        defective work and the resulting damage is critical, and carriers frequently attempt to
        apply the faulty workmanship exclusion more broadly than the policy language supports.
      </p>

      <CalloutBox variant="legal" title="California&rsquo;s Ensuing Loss Doctrine">
        <p>
          California courts have long recognized the ensuing loss doctrine, which holds that
          when a policy excludes a particular cause of loss but includes an ensuing loss
          savings clause, damage resulting from the excluded cause may still be covered. In
          the builder&rsquo;s risk context, this means that while the cost of correcting
          faulty workmanship is excluded, the physical damage that results from the faulty
          workmanship &mdash; water damage, fire damage, structural damage &mdash; may be
          covered under the ensuing loss provision. For more on this doctrine, see our{' '}
          <Link href="/resources/construction-defect-claims" className="text-[#2E74B5] underline">
            Construction Defects and Insurance Claims
          </Link>{' '}
          article.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Completed Operations&rdquo; Cutoff
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk coverage ends when the project is completed. But determining
        exactly when a project is &ldquo;completed&rdquo; can be surprisingly difficult and
        is a frequent source of disputes. Policies typically define the end of coverage as
        the earliest of several events: the date the building is put to its intended use,
        the date the owner accepts the building, the date a certificate of occupancy is
        issued, or the policy expiration date.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Disputes arise when a loss occurs during the transition period &mdash; after
        substantial completion but before final completion, during a phased occupancy where
        some units are occupied while others are still under construction, or after the
        certificate of occupancy is issued but before punch list work is finished. Carriers
        may argue that coverage ended before the loss occurred, while the policyholder may
        argue that the project was not truly complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should pay careful attention to the policy&rsquo;s definition of
        completion and ensure that a permanent property policy is in place before or
        simultaneous with the termination of the builder&rsquo;s risk policy. A gap between
        the expiration of builder&rsquo;s risk coverage and the inception of permanent
        coverage leaves the property uninsured.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Theft and Vandalism on Construction Sites
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction sites are targets for theft of materials and equipment, as well as
        vandalism. Builder&rsquo;s risk policies generally cover theft and vandalism, but
        may impose conditions &mdash; such as requirements for site security, fencing,
        or locked storage &mdash; that must be met for coverage to apply. A carrier that
        denies a theft claim based on inadequate site security should be required to
        demonstrate that the policy contains a specific security requirement that was
        violated, not simply that the carrier believes the site should have been more secure.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s construction regulatory environment creates additional
        considerations for builder&rsquo;s risk claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Title 24 compliance:</strong> California&rsquo;s Building Standards Code
          (Title 24) is updated on a triennial cycle. If a covered loss requires repairs
          that trigger code upgrades under the current edition of Title 24, the additional
          cost of compliance may be covered under the builder&rsquo;s risk policy&rsquo;s{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] underline">
            ordinance or law coverage
          </Link>
          , if included. However, many builder&rsquo;s risk policies do not include
          ordinance or law coverage, which can leave the policyholder responsible for
          code upgrade costs.
        </li>
        <li>
          <strong>Cal/OSHA requirements:</strong> If a covered loss exposes hazardous
          materials (such as asbestos in a renovation project) or creates workplace safety
          hazards that must be remediated before construction can resume, the cost of
          compliance with Cal/OSHA requirements may be an additional expense that should
          be included in the claim.
        </li>
        <li>
          <strong>Permit reissuance costs:</strong> In California, a significant loss during
          construction may require the owner to obtain revised building permits and undergo
          additional plan review by the local building department. These costs can be
          substantial and should be documented and claimed.
        </li>
        <li>
          <strong>Wildfire and seismic risk:</strong> California&rsquo;s exposure to
          wildfire and earthquakes affects builder&rsquo;s risk coverage. Wildfire coverage
          is typically included in an all risk builder&rsquo;s risk policy, but earthquake
          coverage is usually excluded and must be added by endorsement for an additional
          premium. For projects in wildfire-prone areas, confirm that the policy does not
          contain a wildfire sublimit or a separate wildfire deductible.
        </li>
        <li>
          <strong>Contractor licensing:</strong> California&rsquo;s Contractors State License
          Board (CSLB) requires that contractors performing repair work after a covered loss
          be properly licensed. Using unlicensed contractors can create legal and insurance
          complications.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documentation Strategies for Builder&rsquo;s Risk Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk claims require documentation that goes beyond what is needed for
        a standard property claim. The following strategies can help maximize recovery:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Maintain contemporaneous progress records.</strong> Regular progress
          photographs, daily construction logs, and weekly progress reports establish the
          condition of the project before the loss and the value of work completed to date.
          These records are invaluable when the carrier disputes the extent of damage.
        </li>
        <li>
          <strong>Preserve the construction schedule.</strong> The original construction
          schedule, as well as any updates, is essential for documenting delay claims. A
          comparison of the pre-loss schedule to the actual completion timeline establishes
          the length of the delay and the resulting soft costs.
        </li>
        <li>
          <strong>Document all soft costs from day one.</strong> Begin tracking soft costs
          immediately after the loss. Loan interest, tax payments, professional fees, and
          other carrying costs add up quickly, and contemporaneous documentation is far
          more persuasive than after-the-fact reconstruction.
        </li>
        <li>
          <strong>Separate damaged from undamaged work.</strong> The carrier will want to
          determine what work was damaged and what was not. Detailed progress records help
          establish this boundary and prevent the carrier from undervaluing the loss by
          claiming that work was incomplete or not yet performed.
        </li>
        <li>
          <strong>Obtain a forensic analysis of the cause.</strong> For losses involving
          faulty workmanship, fire, or structural failure, an independent forensic analysis
          by a qualified engineer or investigator can establish the cause of loss and help
          overcome carrier objections based on the faulty workmanship or testing exclusions.
        </li>
        <li>
          <strong>Track the delay in detail.</strong> Document the timeline from the date of
          loss through the completion of repairs, including all the intermediate steps:
          investigation, engineering, plan revision, permit reissuance, rebidding, and
          reconstruction. Each step contributes to the total delay and the associated soft
          costs.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Engage Professionals Early">
        <p>
          Builder&rsquo;s risk claims are complex, involving construction, finance, and
          insurance expertise. Engaging a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            licensed Public Adjuster
          </Link>{' '}
          and, if necessary, a construction attorney early in the process ensures that all
          covered components of the loss are identified and documented from the outset.
          Waiting until the carrier has issued an inadequate payment makes it significantly
          harder to recover what is owed.
        </p>
      </CalloutBox>

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Peckar &amp; Abramson, P.C.</strong> &mdash; A national construction law
          firm that has published analyses of builder&rsquo;s risk policy provisions,
          including the faulty workmanship exclusion, soft costs coverage, and delay in
          completion disputes. As the firm has noted, &ldquo;the builder&rsquo;s risk policy
          is often the most important insurance document on a construction project, yet it
          is frequently the least understood.&rdquo; Search for their construction insurance
          publications.
        </li>
        <li>
          <strong>Pillsbury Winthrop Shaw Pittman LLP</strong> &mdash; A firm with a
          significant construction and insurance practice that has addressed builder&rsquo;s
          risk coverage issues, including the completed operations cutoff and phased
          occupancy disputes. Search for their construction insurance articles.
        </li>
        <li>
          <strong>Merlin Law Group</strong> &mdash; Policyholder attorneys who have written
          on builder&rsquo;s risk claims, including the distinction between faulty
          workmanship and resulting damage. Search for their blog posts on builder&rsquo;s
          risk insurance.
        </li>
        <li>
          <strong>International Risk Management Institute (IRMI)</strong> &mdash; IRMI
          publishes detailed reference materials on builder&rsquo;s risk coverage, including
          policy form analysis and coverage comparison guides. Search for &ldquo;builder&rsquo;s
          risk&rdquo; on irmi.com.
        </li>
        <li>
          <strong>Anderson Kill P.C.</strong> &mdash; The policyholder-side firm has addressed
          builder&rsquo;s risk coverage disputes in the commercial construction context.
          Search for their construction insurance publications.
        </li>
        <li>
          <strong>FC&amp;S / National Underwriter</strong> &mdash; The insurance industry&rsquo;s
          authoritative coverage interpretation resource addresses builder&rsquo;s risk policy
          provisions, including the testing exclusion and completion triggers.
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          or insurance advice. Nothing in this article should be construed as a legal opinion
          or as a substitute for consultation with a qualified attorney or insurance
          professional. Builder&rsquo;s risk policies vary significantly in their terms,
          conditions, and exclusions. The specific language of your policy controls. Consult
          a licensed attorney or insurance professional for advice on your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing with a Builder&rsquo;s Risk Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster experienced in construction losses can document the full
          scope of damage, quantify soft costs and delay impacts, and negotiate with the
          carrier to maximize recovery.
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
