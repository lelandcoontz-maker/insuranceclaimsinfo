import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Waiver of Subrogation in Commercial Leases: Why Your Insurer Can\'t Recover from a Negligent Landlord',
  description:
    'When your commercial lease requires a waiver of subrogation, your insurer cannot recover from the landlord — even if the landlord\'s negligence caused your loss. Learn how waivers work, the ISO endorsement, the deductible trap, and how to negotiate better lease terms.',
  summary:
    'When your commercial lease requires a waiver of subrogation, your insurer cannot recover from the landlord even if the landlord\'s negligence caused your loss. Watch the deductible trap and negotiate the lease language carefully before signing.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Waiver of subrogation clauses interact with specific policy language, lease terms,
          and state law in ways that vary by situation. If you have a disputed claim involving
          a waiver of subrogation, consult with a licensed California attorney who specializes
          in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Somewhere in most commercial leases there is a clause that says, in effect: &ldquo;Each
        party waives all rights of recovery against the other party for any loss covered by
        insurance.&rdquo; It looks innocuous. Tenants sign it without a second thought.
        Landlords insist on it. Insurance agents attach an endorsement and move on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What most parties do not realize is that this clause fundamentally changes who bears the
        economic cost of negligence. When the landlord&rsquo;s failure to maintain the roof
        causes a water intrusion that destroys your inventory, your insurer pays your claim
        &mdash; but cannot recover from the landlord. When your employee&rsquo;s negligence
        causes a fire that damages the building, the landlord&rsquo;s insurer pays &mdash; but
        cannot recover from you. The waiver of subrogation makes each party&rsquo;s insurer the
        ultimate bearer of the loss, regardless of fault.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Subrogation Is and How It Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation is the legal principle that allows an insurer, after paying a claim, to
        &ldquo;step into the shoes&rdquo; of its insured and pursue recovery from the party
        who caused the loss. It is a fundamental mechanism of the insurance system &mdash; it
        keeps premiums lower by ensuring that the responsible party ultimately pays for the
        damage, not the insurer&rsquo;s premium pool.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed overview of subrogation principles, see our article on{' '}
        <Link href="/resources/subrogation" className="text-blue-700 underline hover:text-blue-900">
          subrogation in property insurance claims
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is how subrogation works in a commercial property context without a waiver:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A landlord fails to repair a known roof deficiency. Rain enters the building and
          damages the tenant&rsquo;s inventory worth $200,000.
        </li>
        <li>
          The tenant files a claim under the tenant&rsquo;s commercial property policy. The
          insurer pays $200,000 minus the deductible.
        </li>
        <li>
          The tenant&rsquo;s insurer then has a subrogation right against the landlord,
          because the landlord&rsquo;s negligence caused the loss. The insurer can sue the
          landlord to recover the $200,000 it paid.
        </li>
        <li>
          If the insurer recovers from the landlord, the tenant may also recover the
          deductible from the landlord as part of the same action.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subrogation allocates the cost of the loss to the negligent party. Without it, the
        tenant&rsquo;s insurer absorbs the loss permanently, even though the landlord caused it
        &mdash; and the landlord faces no financial consequence for the negligence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Waiver of Subrogation Does
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A waiver of subrogation eliminates the insurer&rsquo;s right to pursue the other party
        to the lease. When the lease requires both parties to waive subrogation rights, each
        party&rsquo;s insurer must absorb its own insured&rsquo;s loss without recovering from
        the other party &mdash; even if the other party was negligent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The typical lease language reads:
      </p>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <p className="text-gray-700 italic leading-relaxed">
          &ldquo;Landlord and Tenant each hereby release and waive all rights of recovery,
          claim, action, or cause of action against the other, its agents, officers, or
          employees, for any loss or damage that may occur to the Premises or personal
          property within the Premises, by reason of fire or the elements, regardless of
          cause or origin, including the negligence of Landlord or Tenant and their respective
          agents, officers, or employees. Each party shall cause its insurer to issue a waiver
          of subrogation endorsement on all property insurance policies carried in connection
          with the Premises.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        This language does two things: (1) it releases each party from direct liability to the
        other for insured property losses, and (2) it requires each party to obtain an
        endorsement from their insurer confirming the waiver. If the tenant&rsquo;s insurer
        does not issue the endorsement, the waiver in the lease may conflict with the
        insurer&rsquo;s subrogation rights under the policy, creating a coverage dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Waiver Is Actually Implemented: CP 00 90 and CG 24 04
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the general liability side, ISO provides a standard standalone endorsement &mdash;{' '}
        <strong>CG 24 04 (Waiver of Transfer of Rights of Recovery Against Others to Us)</strong>{' '}
        &mdash; that can be attached to the CGL policy to waive subrogation against a designated
        party.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the commercial property side, there is no equivalent standalone ISO endorsement
        (no &ldquo;CP 24 04&rdquo; exists). Instead, the mechanism lives inside the policy&rsquo;s
        Commercial Property Conditions form &mdash; <strong>CP 00 90</strong> &mdash; which
        includes a condition titled &ldquo;Transfer of Rights of Recovery Against Others to Us.&rdquo;
        That condition states that the insured may waive its rights of recovery against another
        party <strong>in writing before a loss occurs</strong>. In practice, the lease itself is
        the writing that effects the waiver &mdash; the lease provision that says &ldquo;each
        party waives its right of recovery against the other&rdquo; is the waiver, and it must
        be in place before a loss happens.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers also offer proprietary &ldquo;waiver of rights of recovery&rdquo;
        endorsements that explicitly identify the designated party on the policy schedule. These
        endorsements are useful documentation but are not strictly required when the lease
        language already satisfies the CP 00 90 pre-loss-written-waiver requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The waiver must be in writing and executed before the loss.</strong> A waiver
          executed after a loss is generally unenforceable because the insurer&rsquo;s
          subrogation rights vest at the time of loss.
        </li>
        <li>
          <strong>The waiver should specifically identify the protected party.</strong> The lease
          language should clearly name the landlord (and any related parties to be protected,
          such as the property manager or lender). Ambiguous language may not protect all
          intended parties.
        </li>
        <li>
          <strong>Confirm the carrier permits pre-loss waivers.</strong> Most standard ISO
          commercial property forms permit pre-loss waivers through CP 00 90. Some non-standard
          or surplus lines forms restrict or prohibit them. Get written confirmation from the
          carrier or broker.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Leases frequently require both property and liability waivers, so both the lease language
        (for property, satisfying CP 00 90) and the CG 24 04 endorsement (for liability) may be
        needed. For more on how these endorsements fit into the broader commercial lease
        insurance framework, see our article on{' '}
        <Link href="/resources/commercial-endorsements" className="text-blue-700 underline hover:text-blue-900">
          commercial policy endorsements
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Deductible Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the waiver of subrogation quietly hurts tenants in a way few anticipate.
        When your insurer pays a claim, it pays the covered loss minus your deductible. If
        someone else caused the loss, subrogation allows your insurer to recover from the
        responsible party &mdash; and your deductible is typically recovered as well, either by
        the insurer on your behalf or by you directly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With a waiver of subrogation in place, that recovery disappears. Consider this scenario:
      </p>
      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-5 mb-6">
        <p className="text-gray-700 leading-relaxed mb-3">
          The landlord&rsquo;s negligent maintenance causes a sewer backup that destroys
          $150,000 of the tenant&rsquo;s inventory and equipment. The tenant&rsquo;s policy
          has a $10,000 deductible. The insurer pays $140,000. Without a waiver, the insurer
          would pursue the landlord for $140,000 and the tenant could recover the $10,000
          deductible from the landlord as well.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With the waiver in place, the insurer cannot pursue the landlord. The tenant cannot
          pursue the landlord either &mdash; because the lease release waives the
          tenant&rsquo;s direct claims too. The tenant absorbs the $10,000 deductible
          permanently, with no recourse against the party whose negligence caused the loss.
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        For tenants with high deductibles &mdash; $25,000, $50,000, or more is common in
        commercial property policies &mdash; the waiver effectively makes the tenant a
        self-insurer for that amount, even when the landlord is entirely at fault. This is an
        economic cost that is rarely discussed during lease negotiations.
      </p>

      <CalloutBox variant="warning" title="Your Deductible Becomes Permanent">
        <p>
          When a waiver of subrogation is in effect, your deductible on any loss caused by the
          landlord&rsquo;s negligence is a permanent, non-recoverable cost. For tenants with
          $25,000 or $50,000 deductibles, this is a significant financial exposure that is
          buried in the lease and rarely quantified before signing.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Law on Waiver of Subrogation Validity
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have consistently upheld waiver of subrogation clauses in commercial
        leases. Unlike some consumer contracts where exculpatory clauses may be
        unenforceable under California Civil Code &sect; 1668 (which voids contracts that exempt
        a party from liability for fraud, willful injury, or violation of law), commercial lease
        waivers of subrogation are generally treated as valid, negotiated agreements between
        sophisticated parties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key principles under California law:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mutual waivers are enforceable.</strong> When both the landlord and tenant
          waive subrogation rights against each other for insured losses, California courts
          treat this as a risk-allocation mechanism that benefits both parties. Each party
          looks to its own insurer rather than litigating fault after a loss.
        </li>
        <li>
          <strong>The waiver must be supported by consideration.</strong> In a lease context,
          the mutual exchange of promises (including rent, the lease term, and the reciprocal
          waivers themselves) provides adequate consideration.
        </li>
        <li>
          <strong>The waiver does not extend beyond insured losses.</strong> Most waiver
          clauses are limited to losses covered by insurance (or required to be covered by
          insurance). If a loss falls outside the scope of insurance &mdash; for example, a
          loss excluded by the policy &mdash; the waiver may not apply, and the negligent
          party may still be liable. The specific language of the waiver controls.
        </li>
        <li>
          <strong>Willful misconduct is an exception.</strong> Under Civil Code &sect; 1668,
          a clause that purports to exempt a party from liability for willful misconduct,
          fraud, or intentional harm is void as against public policy. A waiver of subrogation
          covering only negligence-caused losses does not implicate this prohibition. But a
          waiver that attempts to excuse intentional or reckless conduct may be unenforceable
          to that extent.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court in <em>Tunkl v. Regents of University of California</em>
        (1963) 60 Cal.2d 92 established factors for determining when an exculpatory clause
        violates public policy, including whether the party seeking exculpation performs a
        service of great public importance and holds a decisive advantage in bargaining power.
        Commercial lease waivers of subrogation between business parties typically do not
        trigger <em>Tunkl</em> concerns, because both parties are presumed to have bargaining
        power and access to counsel.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mutual vs. One-Way Waivers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all waiver of subrogation clauses are created equal. The distinction between mutual
        and one-way waivers has significant practical consequences:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mutual waiver:</strong> Both the landlord and tenant waive subrogation
          rights against each other. Both parties&rsquo; insurers give up recovery rights.
          This is the most common structure and is generally considered fair &mdash; each
          party looks to its own insurance, and neither sues the other after a loss. The cost
          of negligence is absorbed by the negligent party&rsquo;s insurer through higher
          premiums over time.
        </li>
        <li>
          <strong>One-way waiver (tenant waives, landlord does not):</strong> The tenant
          waives subrogation rights against the landlord, but the landlord retains the right
          to subrogate against the tenant. This means if the landlord&rsquo;s negligence
          causes a loss to the tenant, the tenant&rsquo;s insurer cannot recover from the
          landlord. But if the tenant&rsquo;s negligence causes a loss to the building, the
          landlord&rsquo;s insurer <em>can</em> recover from the tenant. This structure is
          heavily favorable to the landlord and should be resisted during lease negotiation.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are presented with a one-way waiver, understand what you are giving up: the right
        to recover (through your insurer) from a landlord whose negligence damages your property,
        while the landlord retains the right to recover from you. At minimum, negotiate for
        mutual waivers. If the landlord insists on a one-way waiver, the tenant should
        negotiate a corresponding reduction in rent or other concessions to offset the
        asymmetric risk allocation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Insured vs. Waiver of Subrogation: Understanding the Difference
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These two concepts are frequently confused, but they serve entirely different purposes.
        Both commonly appear in the same lease, and both require separate endorsements.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Additional insured status</strong> adds the landlord as a covered party
          under the tenant&rsquo;s liability policy. If someone sues the landlord for an
          injury that occurred on the leased premises, the tenant&rsquo;s liability carrier
          may owe the landlord a defense and indemnity. Additional insured status is about
          <em> liability</em> coverage &mdash; it protects the landlord against third-party
          claims. It does not affect property coverage and does not involve subrogation.
        </li>
        <li>
          <strong>Waiver of subrogation</strong> prevents the insurer from recovering from
          the other party after paying a first-party property claim. It is about
          <em> property</em> coverage &mdash; it protects each party from being sued by the
          other&rsquo;s insurer after a property loss. It does not give the landlord coverage
          under the tenant&rsquo;s policy.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A lease that requires the tenant to name the landlord as an additional insured on the
        CGL policy <em>and</em> provide a waiver of subrogation on the property policy is
        asking for two different things. For a complete
        breakdown of additional insured mechanics, see our article on{' '}
        <Link href="/resources/named-vs-additional-insured" className="text-blue-700 underline hover:text-blue-900">
          Named Insured vs. Additional Insured
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mechanically, the additional insured endorsement (e.g., CG 20 11) goes on the liability
        policy. The waiver of subrogation on the property side is implemented by the lease
        language pursuant to CP 00 90 (no standalone ISO property endorsement exists). The
        liability waiver is implemented by the CG 24 04 endorsement on the CGL policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Waiver Helps vs. Hurts the Tenant
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The waiver of subrogation is not inherently good or bad for tenants. Whether it helps
        or hurts depends on the circumstances:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The waiver helps the tenant when the tenant is at fault.</strong> If the
          tenant&rsquo;s negligence causes a fire that damages the building, a mutual waiver
          prevents the landlord&rsquo;s insurer from pursuing the tenant for building repair
          costs. Without the waiver, the tenant could face a subrogation demand for hundreds
          of thousands of dollars. The waiver provides the tenant with protection against
          that liability exposure.
        </li>
        <li>
          <strong>The waiver hurts the tenant when the landlord is at fault.</strong> If the
          landlord&rsquo;s negligence causes water damage that destroys the tenant&rsquo;s
          inventory, the waiver prevents the tenant&rsquo;s insurer from recovering from the
          landlord. The tenant pays the deductible out of pocket, the tenant&rsquo;s insurer
          absorbs the rest, and the landlord faces no financial consequences.
        </li>
        <li>
          <strong>The waiver hurts the tenant when the loss is uninsured or underinsured.</strong>
          {' '}If the tenant&rsquo;s loss exceeds the policy limits or falls within an exclusion,
          the waiver may still bar the tenant from suing the landlord directly, depending
          on the waiver language. Some waivers apply to all losses &ldquo;whether insured or
          not&rdquo;; others apply only to losses &ldquo;to the extent covered by
          insurance.&rdquo; The language matters enormously.
        </li>
      </ul>

      <CalloutBox variant="important" title="Read the Exact Waiver Language">
        <p>
          A waiver that applies to losses &ldquo;to the extent covered by insurance&rdquo;
          preserves the tenant&rsquo;s right to pursue the landlord for uninsured or
          underinsured losses. A waiver that applies &ldquo;regardless of whether insured&rdquo;
          eliminates all recovery rights, even for losses the tenant&rsquo;s policy does not
          cover. Before signing, make sure you understand which version your lease contains.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance for Lease Negotiation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are negotiating a commercial lease that includes a waiver of subrogation clause,
        consider these strategies:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insist on mutual waivers.</strong> If the landlord wants the tenant to waive
          subrogation, the landlord should waive it too. A mutual waiver creates a level
          playing field &mdash; each party looks to its own insurer, and neither party bears
          disproportionate risk.
        </li>
        <li>
          <strong>Limit the waiver to insured losses.</strong> Negotiate language that limits
          the waiver to losses &ldquo;to the extent covered by the waiving party&rsquo;s
          insurance.&rdquo; This preserves the right to pursue claims for uninsured or
          underinsured losses.
        </li>
        <li>
          <strong>Negotiate the deductible issue.</strong> Consider lease language that
          requires the negligent party to reimburse the other party&rsquo;s deductible, even
          with the waiver in place. This is a compromise: the insurer still cannot subrogate,
          but the innocent party recovers its out-of-pocket deductible cost.
        </li>
        <li>
          <strong>Confirm your insurer will issue the endorsement.</strong> Before signing the
          lease, confirm with your agent or broker that the carrier will issue a waiver of
          subrogation endorsement on both the property and liability policies. Some carriers
          will not issue waivers to certain parties or in certain circumstances.
        </li>
        <li>
          <strong>Understand the premium impact.</strong> Waiver of subrogation endorsements
          add a modest cost to the insurance premium. Factor this into your total occupancy
          cost calculations.
        </li>
        <li>
          <strong>Address the endorsement timing requirement.</strong> The policy endorsement
          must be in place <em>before</em> a loss. If the lease is signed but the endorsement
          is not added until later, a loss during the gap may not be subject to the waiver.
          Request the endorsement immediately upon lease execution.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When the Endorsement Is Missing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A surprisingly common scenario: the lease requires a waiver of subrogation, the tenant
        signs the lease, but nobody ever adds the endorsement to the insurance policy. Then a
        loss occurs. The tenant&rsquo;s insurer pays the claim and discovers the landlord was
        at fault. The insurer initiates subrogation against the landlord. The landlord points
        to the lease and says, &ldquo;But we have a waiver.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal result depends on the jurisdiction and the specific facts, but the general
        principles in California are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The lease waiver binds the <em>parties to the lease</em> (landlord and tenant). It
          may not bind the <em>insurer</em>, which is not a party to the lease and did not
          agree to waive its subrogation rights.
        </li>
        <li>
          If the policy contains standard subrogation language (requiring the insured to
          preserve the insurer&rsquo;s subrogation rights), the tenant&rsquo;s agreement to
          waive subrogation without the insurer&rsquo;s consent may technically breach the
          policy. In practice, California courts have been reluctant to penalize insureds for
          this, particularly when the waiver is a standard commercial lease provision.
        </li>
        <li>
          The safest course is to always obtain the endorsement. It eliminates the conflict
          between the lease obligation and the policy requirement and ensures all three
          parties &mdash; landlord, tenant, and insurer &mdash; are aligned.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For tenants: if your lease requires a waiver of subrogation, confirm in writing with
        your agent that the endorsement has been added to your policy. Request a copy of the
        endorsement and keep it with your lease file. Do not rely on a certificate of insurance
        to prove the waiver is in place &mdash; the certificate is informational only and
        does not constitute the endorsement.
      </p>

      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/subrogation" className="text-blue-700 underline hover:text-blue-900">
              Subrogation in Property Insurance Claims
            </Link>{' '}
            &mdash; how subrogation works and what it means for your claim
          </li>
          <li>
            <Link href="/resources/commercial-lease-insurance" className="text-blue-700 underline hover:text-blue-900">
              Commercial Lease Insurance Requirements
            </Link>{' '}
            &mdash; the full picture of lease insurance provisions
          </li>
          <li>
            <Link href="/resources/tenant-roof-leak-coverage-gap" className="text-blue-700 underline hover:text-blue-900">
              Tenant Roof Leak Coverage Gap
            </Link>{' '}
            &mdash; a common scenario where waivers and coverage gaps collide
          </li>
          <li>
            <Link href="/resources/named-vs-additional-insured" className="text-blue-700 underline hover:text-blue-900">
              Named Insured vs. Additional Insured
            </Link>{' '}
            &mdash; the distinction between additional insured status and waiver of subrogation
          </li>
          <li>
            <Link href="/resources/commercial-endorsements" className="text-blue-700 underline hover:text-blue-900">
              Commercial Policy Endorsements
            </Link>{' '}
            &mdash; the endorsements that modify your commercial coverage
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
