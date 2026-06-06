import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Waiver of Subrogation, Additional Insured, and Commercial Lease Insurance Requirements',
  description:
    'How waiver of subrogation, additional insured endorsements, and certificates of insurance actually work in commercial leases — and why the paperwork your landlord handed you may not mean what you think it means.',
  summary:
    'Waiver of subrogation, additional insured endorsements, and certificates of insurance in commercial leases often do not mean what tenants assume. Understand how each actually allocates risk before relying on the paperwork your landlord provided.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        This article is for educational purposes only and does not constitute legal or
        insurance advice. Commercial lease provisions and insurance requirements vary by
        jurisdiction and individual policy language. Consult a Licensed Public Adjuster,
        insurance coverage attorney, or qualified broker before making decisions about your
        commercial lease insurance obligations.
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every commercial lease contains an insurance section. Most tenants glance at it, hand it
        to their agent, and assume everything is covered. Most landlords accept a certificate of
        insurance and file it away, trusting it means what the lease required. Both sides are
        usually wrong &mdash; and neither finds out until there is a loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance provisions in a commercial lease involve several interlocking mechanisms:
        waiver of subrogation, additional insured status, certificates of insurance, and specific
        coverage requirements. Each one is commonly misunderstood, and the gap between what the
        lease says and what the policies actually provide is where disputes &mdash; and uninsured
        losses &mdash; live.
      </p>

      {/* ───────── Waiver of Subrogation on Property Policies ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Waiver of Subrogation on Commercial Property Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation is the insurer&rsquo;s right to step into its insured&rsquo;s shoes and
        pursue a third party who caused a loss. If a tenant&rsquo;s negligence causes a fire
        that damages the building, the landlord&rsquo;s insurer pays the claim and then sues
        the tenant to recover what it paid. That is subrogation in action &mdash; and it is
        exactly what a waiver of subrogation is designed to prevent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the general liability side, ISO provides a standard endorsement &mdash;{' '}
        <strong>CG 24 04</strong> (Waiver of Transfer of Rights of Recovery Against Others to
        Us) &mdash; that can be attached to the CGL policy. Commercial property, however, has
        no equivalent standalone endorsement. There is no &ldquo;CP 24 04&rdquo; you can simply
        add to a property policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Instead, the mechanism lives inside the policy&rsquo;s conditions form. The{' '}
        <strong>CP 00 90</strong> (Commercial Property Conditions) includes a condition titled{' '}
        <strong>&ldquo;Transfer of Rights of Recovery Against Others to Us.&rdquo;</strong> That
        condition states:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;If any person or organization to or for whom we make payment under this Coverage
        Part has rights to recover damages from another, those rights are transferred to us to the
        extent of our payment. That person or organization must do everything necessary to secure
        our rights and must do nothing after loss to impair them. But you may waive your rights
        against another party in writing before a loss occurs.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        That last sentence is the critical one. The insurer <em>permits</em> the insured to waive
        its rights of recovery, but only if the waiver is executed <strong>in writing before the
        loss occurs</strong>. In practice, this means the waiver of subrogation on property
        policies is accomplished through the lease language itself &mdash; not through a policy
        endorsement. The lease provision that says &ldquo;each party waives its right of recovery
        against the other&rdquo; <em>is</em> the waiver, and it must be in place before a loss
        happens.
      </p>

      <CalloutBox variant="warning" title="Pre-Loss Execution Is Essential">
        A waiver of subrogation executed after a loss has already occurred is generally
        unenforceable. The insurer&rsquo;s subrogation rights vest at the time of the loss.
        If the lease was not signed &mdash; or the waiver provision was not in effect &mdash;
        before the loss, the insurer can pursue the other party regardless of any post-loss
        agreement between landlord and tenant.
      </CalloutBox>

      {/* ───────── Mutual Waiver of Subrogation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Mutual Waiver of Subrogation in Commercial Leases
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard approach in commercial leases is a <strong>mutual waiver of subrogation
        </strong>. Both the landlord and the tenant release the other from liability for property
        damage <em>to the extent the damage is covered by the releasing party&rsquo;s insurance
        </em>. Each agrees to have its insurer waive its subrogation rights against the other.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rationale is straightforward: landlord and tenant occupy the same property. If a loss
        happens, litigation between them delays repairs, poisons the business relationship, and
        ultimately costs more in legal fees than the recovery is worth. The mutual waiver says:{' '}
        <em>let insurance handle it and move on</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A well-drafted mutual waiver of subrogation typically includes the following elements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Each party releases the other from liability for property damage to the extent covered
          by the releasing party&rsquo;s insurance (or the insurance required to be carried
          under the lease, whichever is broader)
        </li>
        <li>
          Each party agrees to have its insurer waive its right of subrogation against the other
        </li>
        <li>
          The waiver applies regardless of the cause of the loss, including the negligence of the
          released party
        </li>
        <li>
          The waiver is mutual &mdash; it protects both landlord and tenant
        </li>
      </ul>

      <CalloutBox variant="important" title="Uninsured Losses Are Not Waived">
        The mutual waiver only applies to losses covered by the waiving party&rsquo;s insurance.
        If the tenant causes a loss that is excluded under the landlord&rsquo;s property policy
        &mdash; say, a pollution event &mdash; the landlord&rsquo;s insurer does not pay, and
        the waiver does not protect the tenant. The landlord can pursue the tenant directly for
        the uninsured loss. Both parties should understand exactly what their policies cover and
        exclude, because the waiver&rsquo;s protection has the same boundaries as the coverage.
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both parties should notify their carriers about the mutual waiver provision and confirm
        that the waiver is permitted under the policy. Most standard commercial property policies
        allow pre-loss waivers through the CP 00 90 language described above, but some
        manuscript or non-standard policies may restrict or prohibit them. If the carrier will
        not allow the waiver, the tenant or landlord needs to know before the lease is signed
        &mdash; not after a fire.
      </p>

      {/* ───────── CP 12 19 Additional Insured ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CP 12 19 &mdash; Additional Insured (Building Owner)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some commercial leases require the tenant to provide property coverage on the building
        and name the landlord as an additional insured on that coverage. This is common in
        triple-net (NNN) leases, where the tenant is responsible for insuring the building in
        addition to its own contents and improvements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO endorsement that accomplishes this is <strong>CP 12 19 &mdash; Additional
        Insured &mdash; Building Owner</strong>. This endorsement adds the building owner as a
        named insured on the tenant&rsquo;s commercial property policy, but only with respect
        to <strong>direct physical loss or damage to the building</strong> described in the
        endorsement schedule. The building owner receives the same rights as the named insured
        for that specific coverage &mdash; including the right to file a claim and receive
        payment directly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What CP 12 19 does <em>not</em> do:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          It does not cover the building owner&rsquo;s personal property or business income
        </li>
        <li>
          It does not extend to other locations or properties the owner may have
        </li>
        <li>
          It does not convert the tenant&rsquo;s policy into the owner&rsquo;s policy &mdash;
          the tenant remains the first named insured with control over the policy
        </li>
        <li>
          It does not eliminate the need for the building owner to carry their own property
          insurance on the building as a backstop
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CP 12 19 endorsement is less common than the CGL additional insured endorsement
        (CG 20 11 or CG 20 26), but it fills a specific gap in NNN and similar lease structures
        where the tenant bears responsibility for building coverage. If your lease requires it,
        confirm with your broker that the endorsement has actually been added to the policy
        &mdash; not just referenced on a certificate.
      </p>

      {/* ───────── Certificate of Insurance Limitations ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Certificate of Insurance Limitations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The certificate of insurance is the most relied-upon and most misunderstood document in
        commercial leasing. It is a summary &mdash; nothing more. The two most common certificate
        forms are <strong>ACORD 25</strong> (for liability policies) and <strong>ACORD 28</strong>{' '}
        (for property policies). Both carry the same fundamental limitation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ACORD language states:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;This certificate is issued as a matter of information only and confers no rights
        upon the certificate holder. This certificate does not affirmatively or negatively amend,
        extend or alter the coverage afforded by the policies below.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        In plain language, this means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A certificate <strong>does not amend, extend, or alter</strong> the coverage provided
          by the actual policy
        </li>
        <li>
          A statement on a certificate that someone is an &ldquo;additional insured&rdquo;{' '}
          <strong>does not make them one</strong> &mdash; the actual policy must contain the
          endorsement
        </li>
        <li>
          A certificate cannot verify that a waiver of subrogation is in effect &mdash; only the
          policy language and the lease itself can establish that
        </li>
        <li>
          The certificate holder has <strong>no legal rights</strong> under the policies listed
          unless they are actually named on an endorsement attached to the policy
        </li>
        <li>
          Coverage can be cancelled or non-renewed without the certificate holder&rsquo;s
          knowledge, and the &ldquo;notice of cancellation&rdquo; language on most modern
          ACORD forms is aspirational at best
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Certificate Trap">
        One of the most common errors in commercial leasing is accepting a certificate of
        insurance as proof that lease requirements have been met. The certificate may say
        &ldquo;additional insured&rdquo; in the description field and reference a waiver of
        subrogation &mdash; but if the policy was never actually endorsed, those words on
        the certificate are meaningless. The only way to verify coverage is to review the
        actual policy and its endorsements.
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        E&amp;O Exposure for Insurance Agents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Agents who issue certificates stating that additional insured status or waiver of
        subrogation is in effect &mdash; when the policy has not actually been endorsed to
        provide those features &mdash; create significant errors and omissions exposure for
        themselves and their agency. If a loss occurs and the landlord discovers they are not
        actually an additional insured despite what the certificate says, the agent who issued
        the misleading certificate may be liable for the resulting damages. This is not a
        theoretical risk &mdash; it generates real E&amp;O claims with regularity.
      </p>

      {/* ───────── Standard Lease Insurance Requirements ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Standard Commercial Lease Insurance Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While every lease is different, most commercial leases require a similar set of insurance
        provisions. Understanding the standard framework helps you identify what your specific
        lease requires and whether your coverage actually matches.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Tenant&rsquo;s Insurance Obligations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tenant is typically required to carry:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial General Liability (CGL):</strong> Usually $1,000,000 per occurrence
          and $2,000,000 general aggregate, with the landlord named as an additional insured
          (typically via CG 20 11 or CG 20 26)
        </li>
        <li>
          <strong>Commercial Property:</strong> Coverage on the tenant&rsquo;s business personal
          property (BPP) and tenant improvements and betterments (TI&amp;B), typically on a
          replacement cost, special form (all-risk) basis
        </li>
        <li>
          <strong>Business Income and Extra Expense:</strong> To cover the tenant&rsquo;s lost
          income during a period of restoration
        </li>
        <li>
          <strong>Workers&rsquo; Compensation:</strong> Statutory limits as required by state
          law, plus employer&rsquo;s liability
        </li>
        <li>
          <strong>Umbrella or Excess Liability:</strong> Many leases require $1,000,000 to
          $5,000,000 in umbrella coverage, following form over the CGL
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Landlord&rsquo;s Insurance Obligations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The landlord is typically responsible for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building Coverage:</strong> Commercial property insurance on the building
          structure itself, on a replacement cost, special form basis
        </li>
        <li>
          <strong>Loss of Rents:</strong> Coverage for rental income lost during a period of
          restoration when the building is damaged and tenants cannot occupy their spaces
        </li>
        <li>
          <strong>Commercial General Liability:</strong> The landlord&rsquo;s own CGL policy
          covering premises liability
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In NNN lease structures, some of these obligations shift to the tenant, including
        building coverage. This is where CP 12 19 becomes relevant &mdash; the tenant insures
        the building and adds the landlord as additional insured on the property policy.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Additional Insured Status
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease will almost always require the tenant to name the landlord as an additional
        insured on the tenant&rsquo;s CGL policy. This gives the landlord coverage under the
        tenant&rsquo;s liability policy for claims arising out of the tenant&rsquo;s operations
        or use of the premises. Common endorsements include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CG 20 11:</strong> Additional Insured &mdash; Managers or Lessors of Premises
          (covers ongoing operations only)
        </li>
        <li>
          <strong>CG 20 26:</strong> Additional Insured &mdash; Designated Person or Organization
          (broader, but coverage depends on edition date)
        </li>
        <li>
          <strong>CG 20 37:</strong> Additional Insured &mdash; Owners, Lessees or Contractors
          &mdash; Completed Operations (adds completed operations coverage)
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Mutual Waiver of Subrogation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease should include a mutual waiver of subrogation applicable
        to property losses. Both parties agree to look to their own insurance first and release
        the other from liability for covered property damage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Certificate of Insurance as Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease will require the tenant (and sometimes the landlord) to provide a certificate
        of insurance as evidence that the required coverages are in place. Remember: the
        certificate is evidence, not proof. It is a starting point for verification, not the
        finish line.
      </p>

      {/* ───────── Coverage Gaps ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When the Lease Requires Coverage the Policy Does Not Provide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where commercial lease insurance goes wrong most often. The lease was drafted
        by an attorney. The insurance was placed by a broker. They did not talk to each other.
        The result is a gap between the contractual obligation in the lease and the actual
        coverage in the policy &mdash; and neither the landlord nor the tenant discovers it
        until a claim is filed.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Common Gaps Between Lease Requirements and Policy Coverage
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Lease requires &ldquo;all risk&rdquo; coverage, but the policy is named
          peril:</strong> The lease says the tenant must carry &ldquo;all risk&rdquo; or
          &ldquo;special form&rdquo; coverage, but the broker placed a basic or broad form
          policy. The tenant believes they are compliant because they have a property policy.
          They are not.
        </li>
        <li>
          <strong>Lease requires waiver of subrogation, but no pre-loss waiver was
          executed:</strong> The lease provision itself may serve as the waiver, but if the
          lease was signed after a loss &mdash; or if the relevant provision was in an amendment
          that was never finalized &mdash; the waiver may not be enforceable.
        </li>
        <li>
          <strong>Lease requires ordinance or law coverage, but no CP 04 05:</strong> Many
          commercial leases require the tenant to carry ordinance or law coverage to pay for
          code upgrades required during reconstruction. Without the{' '}
          <strong>CP 04 05</strong> endorsement (or its equivalent), that coverage does not
          exist on a standard commercial property form.
        </li>
        <li>
          <strong>Lease requires replacement cost, but the policy settles at ACV:</strong> If
          the policy&rsquo;s loss settlement condition defaults to actual cash value &mdash; or
          if the replacement cost option was never elected &mdash; the tenant may receive
          depreciated payments that are insufficient to meet the lease obligation to restore
          the premises.
        </li>
        <li>
          <strong>Lease requires coverage for landlord&rsquo;s property in tenant&rsquo;s care,
          custody, or control:</strong> The standard CGL policy excludes property in the
          insured&rsquo;s care, custody, or control. If the lease makes the tenant responsible
          for damage to the building (beyond the mutual waiver framework), this exclusion
          creates a gap.
        </li>
        <li>
          <strong>Certificate says &ldquo;additional insured&rdquo; but the endorsement was
          never issued:</strong> The agent noted it on the certificate to satisfy the landlord,
          but the endorsement was never actually attached to the policy. At claim time, the
          landlord discovers they have no coverage under the tenant&rsquo;s policy.
        </li>
      </ul>

      <CalloutBox variant="important" title="Breach of Lease Consequences">
        A tenant who fails to maintain the insurance required by the lease is in breach of the
        lease &mdash; even if the tenant has insurance they believe is adequate. The landlord may
        have the right to purchase insurance on the tenant&rsquo;s behalf and charge the tenant
        for it, declare a default, or even terminate the lease. This is true even if the coverage
        gap is the result of the broker&rsquo;s error rather than the tenant&rsquo;s intentional
        decision.
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Agent E&amp;O Exposure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a broker issues a certificate of insurance that purports to show coverage matching
        the lease requirements &mdash; but the policy does not actually provide that coverage
        &mdash; the broker has created E&amp;O exposure. If a loss occurs and the coverage gap
        is discovered, the broker may be liable for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The amount of the uninsured loss</li>
        <li>Consequential damages from the lease breach</li>
        <li>The landlord&rsquo;s attorneys&rsquo; fees in pursuing the coverage dispute</li>
        <li>The cost of any force-placed insurance the landlord obtained</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why a careful broker will ask for a copy of the lease&rsquo;s insurance
        requirements <em>before</em> placing coverage and issue an endorsement checklist
        against the lease provisions. Too many brokers never read the lease.
      </p>

      {/* ───────── Practical Advice ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Advice: What to Verify Before Signing the Lease
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are a tenant or a landlord, the time to audit insurance compliance is{' '}
        <em>before</em> the lease is executed &mdash; not after a loss. The following steps
        apply to both sides of the transaction.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        For Tenants
      </h3>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Give your broker a copy of the lease&rsquo;s insurance requirements before you
          sign.</strong> Not after. Not a summary. The actual lease language. Ask the broker to
          provide a written confirmation that the proposed coverage meets every requirement.
        </li>
        <li>
          <strong>Confirm the coverage form.</strong> If the lease requires &ldquo;special
          form&rdquo; or &ldquo;all risk,&rdquo; make sure you are getting CP 10 30 (Causes
          of Loss &mdash; Special Form), not CP 10 10 (Basic) or CP 10 20 (Broad).
        </li>
        <li>
          <strong>Confirm the loss settlement basis.</strong> If the lease requires replacement
          cost, confirm that the policy includes replacement cost valuation, not just ACV.
        </li>
        <li>
          <strong>Verify that the additional insured endorsement has been issued.</strong> Ask
          your broker for a copy of the actual endorsement &mdash; CG 20 11, CG 20 26, or
          whichever form the lease specifies &mdash; not just a certificate.
        </li>
        <li>
          <strong>Confirm your carrier permits pre-loss waiver of subrogation.</strong> Most
          standard ISO forms do. Some non-standard or surplus lines forms do not. Get written
          confirmation from the carrier or the broker.
        </li>
        <li>
          <strong>Check for ordinance or law coverage.</strong> If the lease requires it, you
          need CP 04 05 or equivalent. It is not included in the base form.
        </li>
        <li>
          <strong>Document everything.</strong> Keep copies of the endorsed policy, the
          certificate, and the broker&rsquo;s confirmation letter. If a dispute arises, you
          will need them.
        </li>
      </ol>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        For Landlords
      </h3>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not accept a certificate of insurance as sufficient proof.</strong> A
          certificate is a starting point. Request copies of the actual additional insured
          endorsement and confirm the policy form and coverage limits match the lease
          requirements.
        </li>
        <li>
          <strong>Calendar annual verification.</strong> Policies renew every year. An
          endorsement that was in place last year may not be on this year&rsquo;s renewal.
          Build an annual compliance audit into your property management process.
        </li>
        <li>
          <strong>Confirm that your own policy permits the mutual waiver of
          subrogation.</strong> If your carrier does not allow it, you could be in breach of
          your own lease provision, and your insurer may have subrogation rights you assumed
          were waived.
        </li>
        <li>
          <strong>Coordinate your insurance requirements with your attorney.</strong> The
          attorney drafting the lease should consult with an insurance professional to ensure
          that the requirements in the lease are actually achievable in the insurance market.
          Requiring coverage that does not exist or is not commercially available creates a
          compliance trap.
        </li>
        <li>
          <strong>Consider requiring the tenant to name you on an ACORD 28 (property
          certificate) in addition to the ACORD 25 (liability certificate).</strong> Many
          landlords only request the ACORD 25 and never verify the property coverage at all.
        </li>
        <li>
          <strong>Establish consequences for non-compliance.</strong> The lease should specify
          what happens if the tenant fails to maintain required coverage: notice, cure period,
          right to place coverage and charge the tenant, and potential default.
        </li>
      </ol>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What to Demand from Your Broker
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are the tenant or the landlord, your broker should be doing more than
        issuing a certificate. Demand the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A written lease compliance review comparing every insurance requirement in the lease
          against the actual policy provisions
        </li>
        <li>
          Copies of every endorsement referenced on the certificate &mdash; not just the
          certificate itself
        </li>
        <li>
          Written confirmation that the carrier permits the waiver of subrogation
        </li>
        <li>
          A renewal reminder system so that compliance is verified at every policy renewal, not
          just at lease inception
        </li>
        <li>
          Immediate notification if any required coverage is cancelled, non-renewed, or
          materially changed
        </li>
      </ul>

      <CalloutBox variant="info" title="How to Audit Compliance">
        <p className="mb-2">
          Create a simple compliance checklist based on your lease&rsquo;s insurance section.
          For each requirement, document whether it is met by the current policy and which
          endorsement or policy provision provides it. Update this checklist at every renewal.
          A basic checklist might include:
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>CGL limits match lease requirement? (endorsement or dec page reference)</li>
          <li>Landlord named as additional insured? (endorsement number and edition date)</li>
          <li>Waiver of subrogation confirmed by carrier? (letter or policy provision)</li>
          <li>Property coverage on special form, replacement cost? (causes of loss form number)</li>
          <li>Ordinance or law endorsement attached? (CP 04 05 or equivalent)</li>
          <li>Business income coverage in place? (limit and waiting period)</li>
          <li>Workers&rsquo; compensation certificate on file?</li>
        </ul>
      </CalloutBox>

      {/* ───────── Related Reading ───────── */}
      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link
              href="/resources/landlord-vs-tenant-claims"
              className="text-[#2E74B5] underline hover:text-blue-900"
            >
              Landlord vs. Tenant Insurance Claims
            </Link>{' '}
            &mdash; who files what and how residential rental claims work
          </li>
          <li>
            <Link
              href="/resources/commercial-endorsements"
              className="text-[#2E74B5] underline hover:text-blue-900"
            >
              Commercial Property Endorsements Explained
            </Link>{' '}
            &mdash; a guide to the most common CP endorsements
          </li>
          <li>
            <Link
              href="/resources/commercial-coinsurance"
              className="text-[#2E74B5] underline hover:text-blue-900"
            >
              Commercial Coinsurance Penalties
            </Link>{' '}
            &mdash; how the coinsurance clause works and when the penalty applies
          </li>
          <li>
            <Link
              href="/resources/cp-vs-bop-policies"
              className="text-[#2E74B5] underline hover:text-blue-900"
            >
              CP vs. BOP Policies
            </Link>{' '}
            &mdash; comparing standalone commercial property to business owner&rsquo;s policies
          </li>
        </ul>
      </CalloutBox>

      {/* ───────── CTA ───────── */}
      <div className="mt-12 p-6 bg-[#1F3964] rounded-lg text-center">
        <p className="text-white text-lg font-semibold mb-2">
          Lease Dispute Involving Insurance Coverage?
        </p>
        <p className="text-blue-100 text-sm mb-4">
          Whether you are a landlord or tenant, a Licensed Public Adjuster can help you navigate
          the intersection of lease requirements and insurance policy provisions.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] text-white font-bold py-3 px-8 rounded hover:bg-yellow-600 transition"
        >
          Request a Free Consultation
        </Link>
      </div>
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
