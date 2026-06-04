import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Insurance Requirements in Commercial Lease Negotiations: A Tenant&apos;s Checklist',
  description:
    'A practical, actionable guide for commercial tenants reviewing and negotiating insurance provisions in their lease. Covers required coverages, red flags, what is negotiable, certificate of insurance pitfalls, and a section-by-section markup guide for common lease insurance language.',
  summary:
    'Before signing a commercial lease, scrutinize its insurance provisions: required coverages, indemnity language, certificate pitfalls, and what is negotiable. This tenant checklist helps you mark up common lease insurance clauses and avoid taking on the landlord\'s risk.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Commercial lease terms, insurance requirements, and coverage obligations vary by
          agreement, jurisdiction, and specific policy forms. If you have a disputed claim
          involving lease insurance obligations or a coverage gap created by lease language,
          consult with a licensed California attorney who specializes in insurance coverage
          disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most commercial tenants spend weeks negotiating rent, tenant improvement allowances, and
        renewal options. Then they spend approximately fifteen minutes on the insurance exhibit
        attached to the lease. This is a mistake that can cost more than every rent negotiation
        combined &mdash; because the insurance provisions in a commercial lease determine who
        bears the financial risk when something goes catastrophically wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire, a burst pipe, an earthquake, a liability lawsuit &mdash; the lease&rsquo;s
        insurance provisions dictate who insures what, who is protected, who can subrogate
        against whom, and who absorbs the loss when coverage is inadequate or absent. Sign the
        wrong insurance provisions and you may find yourself responsible for a building you do
        not own, indemnifying a landlord for their own negligence, or discovering after a loss
        that your policy does not match what your lease requires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is a practical checklist for tenants &mdash; a section-by-section guide to
        reading, understanding, and marking up the insurance provisions in a commercial lease.
        It ties together the coverage concepts addressed in our articles on{' '}
        <Link href="/resources/nnn-lease-insurance-traps" className="text-blue-700 underline hover:text-blue-900">
          NNN lease insurance traps
        </Link>
        ,{' '}
        <Link href="/resources/waiver-of-subrogation-commercial-leases" className="text-blue-700 underline hover:text-blue-900">
          waivers of subrogation in commercial leases
        </Link>
        , and{' '}
        <Link href="/resources/landlord-duty-to-disclose" className="text-blue-700 underline hover:text-blue-900">
          the landlord&rsquo;s duty to disclose
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Lease Insurance Provisions Matter More Than Rent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you negotiate your rent down by $2 per square foot on a 3,000-square-foot space,
        you save $6,000 per year. If you fail to negotiate the insurance provisions and a
        covered loss exposes a gap, you could face $200,000 in uninsured liability, a lease
        default, eviction, or a lawsuit from the landlord &mdash; in addition to your own
        uninsured property losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance provisions determine:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Who insures the building shell vs. the tenant&rsquo;s improvements vs.
          contents.</strong> In a{' '}
          <Link href="/resources/nnn-lease-insurance-traps" className="text-blue-700 underline hover:text-blue-900">
            triple net lease
          </Link>
          , the tenant may be responsible for insuring the building itself &mdash; a structure
          the tenant does not own. The consequences of getting this wrong are severe.
        </li>
        <li>
          <strong>Who can sue whom after a loss.</strong> A{' '}
          <Link href="/resources/waiver-of-subrogation-commercial-leases" className="text-blue-700 underline hover:text-blue-900">
            waiver of subrogation
          </Link>{' '}
          prevents one party&rsquo;s insurer from pursuing the other party for causing a loss.
          Without mutual waivers, you could pay for your insurance, have your carrier pay your
          claim, and then have the landlord&rsquo;s carrier sue you to recover what it paid.
        </li>
        <li>
          <strong>Who absorbs the cost of a gap.</strong> If the lease requires you to carry
          $2 million in liability coverage and your policy only provides $1 million, you are
          personally responsible for the difference &mdash; and you are in breach of the lease.
        </li>
        <li>
          <strong>Whether you can rebuild after a loss.</strong> If the lease allocates building
          insurance to the landlord but the landlord fails to carry it, the building may not be
          rebuilt &mdash; and you have no premises, no business, and potentially no recourse.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Standard Insurance Clauses: What to Expect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial leases typically include an insurance exhibit or article that addresses the
        following topics. Each one deserves careful review.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Tenant&rsquo;s Required Coverages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease will specify the types and minimum limits of insurance the tenant must carry.
        Standard requirements include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial general liability (CGL).</strong> Typically $1 million per
          occurrence and $2 million aggregate. Some landlords require $5 million or more,
          which may require an umbrella or excess liability policy.
        </li>
        <li>
          <strong>Business personal property (contents) coverage.</strong> Covers the
          tenant&rsquo;s inventory, equipment, furniture, and fixtures. The lease may specify
          a minimum limit or simply require coverage for the full replacement cost of the
          tenant&rsquo;s property.
        </li>
        <li>
          <strong>Tenant improvements and betterments.</strong> Coverage for the tenant&rsquo;s
          build-out &mdash; walls, flooring, fixtures, and other improvements the tenant
          installed. This is distinct from the landlord&rsquo;s building coverage and can be
          a significant coverage gap if overlooked. See our{' '}
          <Link href="/resources/tenant-improvements-betterments" className="text-blue-700 underline hover:text-blue-900">
            tenant improvements and betterments article
          </Link>{' '}
          for a detailed analysis.
        </li>
        <li>
          <strong>Workers&rsquo; compensation.</strong> Required by law if the tenant has
          employees. The lease may specify minimum limits, but statutory requirements in
          California generally set the floor.
        </li>
        <li>
          <strong>Business income / loss of income.</strong> Some leases require the tenant to
          carry business interruption coverage sufficient to cover continuing lease obligations
          (rent) during a shutdown period.
        </li>
        <li>
          <strong>Automobile liability.</strong> If the tenant&rsquo;s operations involve
          vehicles on or near the premises.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Landlord&rsquo;s Insurance Obligations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease should also specify what the landlord insures. In a standard gross lease or
        modified gross lease, the landlord typically insures:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The building shell and structure</li>
        <li>Common areas</li>
        <li>The landlord&rsquo;s own liability</li>
        <li>Loss of rental income during restoration</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a{' '}
        <Link href="/resources/nnn-lease-insurance-traps" className="text-blue-700 underline hover:text-blue-900">
          triple net lease
        </Link>
        , some or all of these obligations may shift to the tenant. Read the lease carefully
        to determine exactly which party is responsible for which coverage. If the language is
        ambiguous, clarify it before signing &mdash; not after a loss.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Additional Insured Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nearly every commercial lease requires the tenant to name the landlord (and often the
        landlord&rsquo;s property manager, lender, and other parties) as an{' '}
        <Link href="/resources/named-vs-additional-insured" className="text-blue-700 underline hover:text-blue-900">
          additional insured
        </Link>{' '}
        on the tenant&rsquo;s CGL policy. This means the landlord is covered under the
        tenant&rsquo;s liability policy for claims arising out of the tenant&rsquo;s use and
        occupancy of the premises.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What to watch for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scope of additional insured status.</strong> The lease may require
          &ldquo;additional insured&rdquo; status that is broader than what standard ISO
          endorsements provide. Some leases require the landlord to be covered for the
          landlord&rsquo;s <em>own</em> negligence &mdash; not just claims arising from the
          tenant&rsquo;s operations. This may require a specific endorsement form and may
          not be available from all carriers.
        </li>
        <li>
          <strong>Primary and non-contributory.</strong> The lease may require that the
          tenant&rsquo;s policy respond as &ldquo;primary and non-contributory&rdquo; &mdash;
          meaning it pays first, without contribution from the landlord&rsquo;s own policy.
          This requires a specific endorsement on your policy.
        </li>
        <li>
          <strong>Multiple parties.</strong> Some leases require you to name the landlord, the
          property management company, the landlord&rsquo;s lender, and the landlord&rsquo;s
          parent company as additional insureds. Confirm that your carrier can accommodate all
          required parties.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Waiver of Subrogation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/waiver-of-subrogation-commercial-leases" className="text-blue-700 underline hover:text-blue-900">
          waiver of subrogation
        </Link>{' '}
        prevents one party&rsquo;s insurer from pursuing a recovery against the other party
        after paying a claim. In a commercial lease context, a mutual waiver of subrogation
        means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          If the tenant&rsquo;s negligence causes a fire that damages the building, the
          landlord&rsquo;s insurer cannot sue the tenant to recover what it paid the landlord
        </li>
        <li>
          If the landlord&rsquo;s negligence causes a water leak that damages the tenant&rsquo;s
          property, the tenant&rsquo;s insurer cannot sue the landlord to recover what it paid
          the tenant
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mutual waivers of subrogation are standard in commercial leases and generally benefit
        both parties. The critical issue is making sure the waiver is <em>mutual</em> &mdash;
        not one-sided &mdash; and that your insurance policy actually permits the waiver. If
        your policy prohibits waivers of subrogation and you sign a lease containing one, you
        may void your own coverage.
      </p>

      <CalloutBox variant="warning" title="Confirm Your Policy Permits the Waiver Before You Sign">
        <p>
          Your insurance policy must contain a waiver of subrogation endorsement that matches
          the lease requirement. If you sign a lease with a waiver of subrogation clause but
          your policy does not include the corresponding endorsement, two problems arise: your
          carrier may deny a claim based on the unauthorized waiver, and you are in breach of
          the lease for failing to deliver the required waiver. Ask your broker to confirm &mdash;
          in writing &mdash; that the endorsement is in place before you execute the lease.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Certificates of Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease will require you to provide a certificate of insurance (typically an ACORD 25
        or ACORD 28 form) to the landlord before taking possession and at each policy renewal.
        Understanding what a certificate proves &mdash; and what it does not &mdash; is
        essential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A certificate of insurance is a snapshot. It confirms that certain coverages existed at
        the time the certificate was issued. It does <strong>not</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Guarantee that the policy will remain in force</li>
        <li>Create any rights for the certificate holder beyond what the policy itself provides</li>
        <li>Modify the policy terms in any way</li>
        <li>Prove that the additional insured endorsement actually names the correct parties</li>
        <li>Prove that the waiver of subrogation endorsement has been added</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The certificate is a starting point, not proof of compliance. For the{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        and actual endorsement copies, you need to request the underlying policy documents. This
        applies equally when reviewing your <em>landlord&rsquo;s</em> insurance &mdash; do not
        accept a certificate as proof that the landlord actually carries the coverages the lease
        requires.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Red Flags in Lease Insurance Language
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following provisions are red flags that should trigger a conversation with your
        broker and potentially your attorney before you sign.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Unlimited or uncapped indemnification.</strong> The lease requires the tenant
          to indemnify, defend, and hold harmless the landlord for &ldquo;any and all
          claims&rdquo; arising from the tenant&rsquo;s use of the premises &mdash; without
          limit, without exclusion for the landlord&rsquo;s own negligence, and without a cap
          tied to available insurance. This can expose the tenant to liability far beyond what
          any insurance policy covers.
        </li>
        <li>
          <strong>One-way waivers of subrogation.</strong> The tenant waives subrogation rights
          against the landlord, but the landlord does not reciprocate. This means the
          landlord&rsquo;s insurer can sue you for any loss you cause, but your insurer
          cannot sue the landlord for any loss the landlord causes. Always insist on mutual
          waivers.
        </li>
        <li>
          <strong>Building coverage responsibility without building ownership.</strong> The
          lease requires the tenant to insure the building structure even though the tenant
          does not own the building. This is common in{' '}
          <Link href="/resources/nnn-lease-insurance-traps" className="text-blue-700 underline hover:text-blue-900">
            NNN leases
          </Link>{' '}
          and creates a significant coverage gap because most commercial property policies
          written for tenants do not include building coverage.
        </li>
        <li>
          <strong>&ldquo;Landlord may change requirements at any time.&rdquo;</strong> Some
          leases include a provision allowing the landlord to increase insurance requirements
          during the lease term at the landlord&rsquo;s sole discretion. This is a blank check.
          Negotiate a cap, a reasonableness standard, or a requirement that changes reflect
          actual risk changes.
        </li>
        <li>
          <strong>Requirement to carry coverage types that do not exist or are unavailable.</strong>{' '}
          Some leases require coverages that are not available in the commercial insurance market
          or that are prohibitively expensive. If you cannot obtain the required coverage, you
          are in perpetual breach of the lease.
        </li>
        <li>
          <strong>Tenant responsible for losses caused by other tenants.</strong> In
          multi-tenant buildings, some leases attempt to make each tenant responsible for losses
          caused by any other tenant. This is unreasonable and may not be insurable.
        </li>
        <li>
          <strong>No requirement for the landlord to carry insurance.</strong> If the lease is
          silent about the landlord&rsquo;s insurance obligations, the landlord may carry no
          property insurance at all. If the building is destroyed, there may be no coverage to
          rebuild &mdash; and the tenant loses their premises with no remedy. See our{' '}
          <Link href="/resources/landlord-duty-to-disclose" className="text-blue-700 underline hover:text-blue-900">
            landlord duty to disclose article
          </Link>{' '}
          for additional context.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Negotiable and What Is Not
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lease insurance provisions are more negotiable than most tenants realize. Landlords
        often start with a template drafted by their attorney to maximize the landlord&rsquo;s
        protection, and many tenants sign it without pushback. But most of the insurance
        provisions are negotiable within reasonable bounds.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Generally Negotiable
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Liability limits.</strong> If the lease requires $5 million and your business
          risk does not justify it, propose $2 million or $3 million. Support your position
          with your broker&rsquo;s assessment of adequate limits for your business type and
          premises size.
        </li>
        <li>
          <strong>Indemnification scope.</strong> Negotiate to exclude the landlord&rsquo;s own
          negligence from the tenant&rsquo;s indemnification obligation. California Civil Code
          Section 1668 voids provisions that attempt to exempt a party from responsibility for
          their own fraud, willful injury, or violation of law.
        </li>
        <li>
          <strong>Waiver of subrogation direction.</strong> Insist on mutual waivers. If the
          landlord resists, they are asking you to assume a risk they are unwilling to assume
          themselves.
        </li>
        <li>
          <strong>Insurance requirement escalation.</strong> Negotiate a cap on how much the
          landlord can increase requirements, or tie increases to an objective standard like
          inflation or industry benchmarks.
        </li>
        <li>
          <strong>Notice and cure periods.</strong> If you inadvertently lapse on coverage, the
          lease should provide a reasonable cure period (typically 10 to 30 days) before the
          lapse constitutes a default. Without a cure period, a carrier billing error could
          trigger eviction.
        </li>
        <li>
          <strong>Deductible limitations.</strong> Some leases specify maximum deductibles. If
          the required deductible is lower than what your policy carries, you may need to adjust
          your policy or negotiate the lease provision.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Generally Non-Negotiable
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Requirement to carry CGL and property coverage.</strong> Every commercial
          landlord will require basic liability and property coverage. The limits are negotiable;
          the requirement itself is not.
        </li>
        <li>
          <strong>Additional insured status for the landlord.</strong> This is a nearly universal
          requirement. The scope may be negotiable, but the basic requirement to name the
          landlord is standard.
        </li>
        <li>
          <strong>Certificate of insurance delivery.</strong> You will need to provide
          certificates at lease execution and at each renewal. This is administrative, not
          substantive.
        </li>
        <li>
          <strong>Workers&rsquo; compensation.</strong> Required by law if you have employees.
          No negotiation needed or possible.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Review the Landlord&rsquo;s Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most tenants focus exclusively on their own insurance obligations under the lease and
        never examine whether the landlord is actually carrying the coverage the lease promises.
        This is a critical oversight. If the landlord is supposed to insure the building and
        does not, you discover the gap only when the building is destroyed and there is no
        coverage to rebuild your premises.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request the landlord&rsquo;s{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>
          .</strong> A certificate of insurance tells you very little. Request the actual
          declarations page of the landlord&rsquo;s property policy, which shows covered
          property, limits, deductibles, and named insureds.
        </li>
        <li>
          <strong>Verify the building is covered at adequate limits.</strong> Confirm that the
          landlord&rsquo;s policy covers the building at replacement cost value, not actual
          cash value. If the building is underinsured, it may not be fully rebuilt after a loss.
        </li>
        <li>
          <strong>Check for coinsurance penalties.</strong> If the landlord&rsquo;s policy has
          a coinsurance clause and the building is underinsured, the landlord will collect less
          than the full loss &mdash; and the shortfall may affect your premises.
        </li>
        <li>
          <strong>Confirm loss of rental income coverage.</strong> If the building is destroyed
          and the landlord has no rental income coverage, the landlord may have no financial
          incentive to rebuild. You lose your premises and your business.
        </li>
        <li>
          <strong>Include a lease provision requiring the landlord to maintain coverage.</strong>{' '}
          The lease should affirmatively require the landlord to carry specified coverages at
          specified limits throughout the lease term. A lease that merely states what the
          landlord &ldquo;currently carries&rdquo; does not obligate the landlord to maintain
          that coverage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Matching Your Policy to Your Lease Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you understand what the lease requires, you must verify that your insurance policy
        actually delivers it. This is not a theoretical exercise &mdash; it is a line-by-line
        comparison between the lease&rsquo;s insurance exhibit and your policy&rsquo;s
        declarations page, endorsements, and coverage forms.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage types.</strong> Does your policy include every coverage type the
          lease requires? CGL, property, business income, umbrella, auto, workers&rsquo; comp?
        </li>
        <li>
          <strong>Limits.</strong> Does every coverage meet or exceed the lease&rsquo;s minimum
          limits? Check per-occurrence, aggregate, and any sublimits.
        </li>
        <li>
          <strong>Additional insured endorsement.</strong> Does your policy include an additional
          insured endorsement that names the correct parties with the correct scope? Does it
          provide primary and non-contributory coverage if the lease requires it?
        </li>
        <li>
          <strong>Waiver of subrogation endorsement.</strong> Is the waiver of subrogation
          endorsement actually on the policy? Does it name the correct parties?
        </li>
        <li>
          <strong>Tenant improvements and betterments.</strong> Does your policy cover your{' '}
          <Link href="/resources/tenant-improvements-betterments" className="text-blue-700 underline hover:text-blue-900">
            tenant improvements and betterments
          </Link>{' '}
          at replacement cost? Is the limit adequate to cover your full build-out?
        </li>
        <li>
          <strong>Building coverage (NNN leases).</strong> If the lease requires you to insure
          the building, does your policy actually include building coverage? Standard tenant
          policies typically do not. You may need a specific endorsement or a separate policy.
        </li>
        <li>
          <strong>Deductibles.</strong> Does the lease impose a maximum deductible? If so, does
          your policy comply?
        </li>
      </ul>

      <CalloutBox variant="info" title="The Compliance Gap Is More Common Than You Think">
        <p>
          A study by the International Risk Management Institute (IRMI) found that a significant
          percentage of commercial tenants have at least one gap between their lease&rsquo;s
          insurance requirements and their actual policy coverage. The most common gaps involve
          additional insured endorsements that do not match the lease requirements, missing
          waiver of subrogation endorsements, and tenant improvement limits that are far below
          the actual build-out cost. Annual compliance reviews can catch these gaps before a
          loss exposes them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Mistakes Tenants Make
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After reviewing hundreds of commercial leases and the insurance programs behind them,
        the same mistakes appear repeatedly. Every one of them is preventable.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Assuming the landlord has insurance.</strong> Unless the lease specifically
          requires it and you verify it, do not assume the landlord carries any coverage at
          all. Some landlords self-insure. Some let policies lapse. Some carry only liability
          with no property coverage.
        </li>
        <li>
          <strong>Not reading the insurance exhibit.</strong> The insurance provisions are
          typically buried in an exhibit or attachment at the back of the lease. Many tenants
          never read them. Many brokers never see them until after the lease is signed.
        </li>
        <li>
          <strong>Signing without broker review.</strong> Your insurance broker should review
          the lease&rsquo;s insurance provisions <em>before</em> you sign. The broker can
          identify requirements that are impossible, prohibitively expensive, or incompatible
          with available coverage. If you sign first and ask questions later, you may already
          be in breach.
        </li>
        <li>
          <strong>Failing to update coverage after build-out.</strong> You sign the lease, build
          out the space, and never update your tenant improvements coverage to reflect the
          actual build-out cost. Three years later, a fire destroys $400,000 in improvements
          and your policy covers $100,000.
        </li>
        <li>
          <strong>Treating the certificate as the policy.</strong> The certificate of insurance
          is a summary document. It does not modify the policy, does not guarantee coverage
          will continue, and does not prove that all lease requirements are met. Rely on
          the actual policy documents, not the certificate.
        </li>
        <li>
          <strong>Ignoring the insurance provisions at renewal.</strong> The lease renews or
          extends. Your business has grown. Your build-out has expanded. Your insurance
          requirements may have changed. But nobody reviews the insurance provisions at
          renewal because &ldquo;we already dealt with that.&rdquo;
        </li>
        <li>
          <strong>Not insuring{' '}
          <Link href="/resources/commercial-lease-insurance" className="text-blue-700 underline hover:text-blue-900">
            lease obligations
          </Link>{' '}
          as a whole.</strong> The lease creates financial obligations &mdash; rent, CAM charges,
          tax pass-throughs &mdash; that continue even if your business shuts down due to a
          covered loss. Business income coverage should account for these continuing lease
          obligations, not just lost revenue.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Section-by-Section Markup Guide for Lease Insurance Provisions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive a lease draft with an insurance exhibit, use this markup guide to
        identify provisions that need negotiation, clarification, or revision. For each
        provision, the guide identifies the standard language, the risk it creates, and the
        recommended response.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Indemnification Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Standard language:</strong> &ldquo;Tenant shall indemnify, defend, and hold
        harmless Landlord from and against any and all claims, damages, losses, costs, and
        expenses arising from Tenant&rsquo;s use and occupancy of the Premises.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Risk:</strong> As written, this could require the tenant to indemnify the
        landlord even for the landlord&rsquo;s own negligence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Markup:</strong> Add &ldquo;except to the extent caused by the negligence or
        willful misconduct of Landlord, its agents, employees, or contractors.&rdquo; This
        carves out the landlord&rsquo;s own fault. Also consider adding: &ldquo;Tenant&rsquo;s
        indemnification obligations shall be limited to the extent of available insurance
        proceeds under the coverages required by this Lease.&rdquo;
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Insurance Limits Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Standard language:</strong> &ldquo;Tenant shall maintain commercial general
        liability insurance with limits of not less than $5,000,000 per occurrence.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Risk:</strong> The required limit may be disproportionate to the tenant&rsquo;s
        actual risk exposure, making coverage unnecessarily expensive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Markup:</strong> Propose limits that match the actual risk. For a small retail
        or office tenant, $1 million per occurrence with a $2 million aggregate &mdash;
        supplemented by a $1 million to $3 million umbrella if needed &mdash; is typically
        adequate. Support your position with your broker&rsquo;s written assessment.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Waiver of Subrogation Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Standard language:</strong> &ldquo;Tenant waives all rights of subrogation
        against Landlord.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Risk:</strong> One-way waiver. The landlord&rsquo;s insurer can still pursue
        the tenant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Markup:</strong> Change to: &ldquo;Each party waives all rights of subrogation
        against the other party to the extent of insurance proceeds received or receivable under
        the insurance policies required by this Lease.&rdquo; This makes the waiver mutual.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Landlord&rsquo;s Right to Change Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Standard language:</strong> &ldquo;Landlord may, from time to time, require
        Tenant to increase insurance limits or obtain additional coverages as Landlord deems
        reasonably necessary.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Risk:</strong> &ldquo;Reasonably necessary&rdquo; is undefined and subjective.
        The landlord could require expensive additional coverages mid-lease.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Markup:</strong> Add objective standards: &ldquo;Any changes must be consistent
        with insurance requirements imposed on comparable tenants in comparable properties in
        the same market. Landlord shall provide 90 days&rsquo; written notice and reasonable
        documentation supporting the change. In no event shall required limits increase by more
        than 25% during any five-year period.&rdquo;
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Default and Cure Provisions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Standard language:</strong> &ldquo;Failure to maintain the required insurance
        shall constitute an immediate default under this Lease.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Risk:</strong> A carrier billing error, a one-day lapse during renewal, or a
        delayed certificate could trigger a lease default with no opportunity to cure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Markup:</strong> Add a cure period: &ldquo;In the event of a lapse in required
        coverage, Tenant shall have 15 business days after written notice from Landlord to
        reinstate the required coverage before such lapse constitutes an Event of Default.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Hire a Broker vs. an Attorney for Lease Review
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both insurance brokers and attorneys play important but distinct roles in reviewing
        lease insurance provisions. Understanding when to use each &mdash; or both &mdash;
        prevents gaps in your review process.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Your insurance broker</strong> should review the insurance exhibit before you
          sign. The broker can confirm whether the required coverages are available, what they
          will cost, whether your current policy complies, and what endorsements need to be
          added. The broker can also identify requirements that are impossible or prohibitively
          expensive in the current market.
        </li>
        <li>
          <strong>An attorney</strong> should review the indemnification provisions, liability
          allocation, default provisions, and the interplay between the insurance provisions
          and the rest of the lease. Legal issues like unlimited indemnification, one-way
          waivers, and building coverage obligations are legal questions, not insurance
          questions.
        </li>
        <li>
          <strong>Use both</strong> when the lease involves high-value premises, unusual
          insurance requirements, NNN structures, or any provision you do not fully understand.
          The broker reviews the insurance mechanics; the attorney reviews the legal
          implications. Neither alone covers the full picture.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Tenant&rsquo;s Insurance Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Use this checklist before signing any commercial lease. Each item should be confirmed
        by your broker, your attorney, or both.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>I have read the entire insurance exhibit and every referenced attachment</li>
        <li>My broker has reviewed the insurance provisions and confirmed that all required coverages are available and priced</li>
        <li>I know exactly which party insures the building shell, tenant improvements, contents, and common areas</li>
        <li>Liability limits are reasonable for my business type and premises size</li>
        <li>Indemnification is mutual &mdash; I do not indemnify the landlord for their own negligence</li>
        <li>Waivers of subrogation are mutual &mdash; both parties waive, not just me</li>
        <li>My policy includes the additional insured endorsement naming all required parties</li>
        <li>My policy includes the waiver of subrogation endorsement</li>
        <li>My policy provides primary and non-contributory coverage if the lease requires it</li>
        <li>
          My{' '}
          <Link href="/resources/tenant-improvements-betterments" className="text-blue-700 underline hover:text-blue-900">
            tenant improvements and betterments coverage
          </Link>{' '}
          reflects my actual build-out cost, not a placeholder number
        </li>
        <li>I have requested and reviewed the landlord&rsquo;s declarations page or proof of insurance</li>
        <li>The lease requires the landlord to maintain specified coverages throughout the term</li>
        <li>There is a reasonable cure period for insurance lapses before a lease default is triggered</li>
        <li>Any escalation clauses for insurance requirements are capped or tied to objective standards</li>
        <li>My business income coverage accounts for continuing lease obligations (rent, CAM, taxes) during a shutdown</li>
        <li>I have calendared annual insurance compliance reviews tied to my policy renewal and lease anniversary</li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Sign the Lease Until Your Broker Reviews the Insurance Exhibit">
        <p>
          The single most effective step a commercial tenant can take is to send the lease&rsquo;s
          insurance exhibit to their insurance broker <em>before</em> signing. Most of the
          coverage gaps, compliance failures, and costly surprises described in this article are
          preventable with a 30-minute broker review. If your broker identifies a requirement
          that your current policy does not meet, you can negotiate the lease provision, modify
          your policy, or both &mdash; but only if you do it before you sign. After you sign,
          your leverage disappears and your obligations are fixed.
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
