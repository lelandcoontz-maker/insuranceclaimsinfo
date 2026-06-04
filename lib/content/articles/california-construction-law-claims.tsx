import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Construction Law and Insurance Claims: Contract Requirements, Licensing, and Consumer Protections',
  description:
    'California imposes strict requirements on residential construction contracts under Business & Professions Code 7159. Learn how these requirements affect insurance claims, what distinguishes residential from commercial construction law, and how non-compliant contracts can undermine your repair project.',
  summary:
    'California Business and Professions Code 7159 imposes strict requirements on residential construction contracts. A non-compliant repair contract can undermine your project and your claim, so confirm your contractor and contract meet the law before work begins.',
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
        When your home is damaged and you hire a contractor to make repairs, you are entering
        into a legal relationship governed by California construction law &mdash; a body of
        statutes that is far more protective of homeowners than most people realize. These laws
        exist because the legislature recognized that homeowners are at a significant
        disadvantage when dealing with construction professionals, and that the potential for
        abuse in the contractor-homeowner relationship is substantial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For insurance claims, these laws matter in two directions. First, they protect you from
        contractors who might take advantage of a disaster situation. Second, they create
        requirements that can affect your claim if they are not followed &mdash; because
        insurance companies sometimes use non-compliant contracts as a basis to dispute repair
        costs or delay payment. Understanding California construction law is essential whether
        you are hiring your own contractor or evaluating the insurer&apos;s preferred vendor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the legal framework for construction contracts in California,
        the critical differences between residential and commercial rules, and how all of it
        intersects with the insurance claims process.
      </p>

      <CalloutBox variant="info" title="California-Specific Law">
        <p>
          This article addresses California law exclusively. Construction contract requirements
          vary dramatically by state. If your property is not in California, the specific
          statutes discussed here do not apply to you, although many states have similar
          consumer protection frameworks. The core concepts &mdash; written contracts, licensing
          requirements, and down payment limits &mdash; exist in many jurisdictions but with
          different thresholds and requirements.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Home Improvement Contract: Business &amp; Professions Code &sect;7159
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business &amp; Professions Code &sect;7159 is the central statute governing residential
        construction contracts in California. It applies to any &ldquo;home improvement
        contract&rdquo; &mdash; meaning a contract between a contractor and a homeowner (or
        tenant) for work on residential property where the aggregate contract price exceeds
        $500. This includes virtually all insurance repair work on homes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The requirements under &sect;7159 are not suggestions. They are mandatory. A contractor
        who fails to comply with these requirements faces potential discipline from the
        Contractors State License Board (CSLB), and more importantly, may not be able to
        enforce the contract against the homeowner. That enforceability issue is what makes
        this statute so powerful for policyholders dealing with insurance repairs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Written Contract Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For any home improvement project where the contract price (including labor and
        materials) exceeds $500, the contract must be in writing. There is no exception for
        insurance work. There is no exception for emergency repairs after the immediate
        emergency has passed. There is no exception because the homeowner and contractor have
        a prior relationship. If the price exceeds $500, it must be in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The written contract must be legible, in a minimum 10-point type, and must be presented
        to the homeowner in a language in which the contractor negotiated the contract. If the
        contract was negotiated in Spanish, for example, the written contract must be provided
        in Spanish (Civil Code &sect;1632).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Required Contract Contents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A compliant home improvement contract under B&amp;P Code &sect;7159 must include all of
        the following:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contract price stated in dollars and cents.</strong> The total price of the
          project must be clearly stated. &ldquo;Time and materials&rdquo; contracts are
          permitted only under limited circumstances and have their own requirements under
          &sect;7159(d)(5).
        </li>
        <li>
          <strong>Contractor&apos;s name, address, and license number.</strong> The contract must
          include the contractor&apos;s legal name, business address, telephone number, and
          CSLB license number.
        </li>
        <li>
          <strong>Approximate start and completion dates.</strong> The contract must state when
          the work will begin and approximately when it will be substantially complete.
        </li>
        <li>
          <strong>Description of the work and materials.</strong> The scope of work must be
          described in reasonable detail, including the materials to be used where those
          materials are a significant component of the project.
        </li>
        <li>
          <strong>Three-day right of rescission notice.</strong> The contract must include a
          prominent notice advising the homeowner of the right to cancel the contract within
          three business days without penalty.
        </li>
        <li>
          <strong>Mechanics lien warning.</strong> The contract must include a notice that the
          contractor&apos;s employees, subcontractors, and suppliers may record liens against the
          property if they are not paid.
        </li>
        <li>
          <strong>Information about the CSLB.</strong> The contract must include the CSLB&apos;s
          toll-free telephone number and a statement directing the homeowner to contact the CSLB
          if they have questions or complaints.
        </li>
        <li>
          <strong>Payment terms and schedule.</strong> The contract must specify when payments are
          due and what progress milestones trigger each payment.
        </li>
        <li>
          <strong>Change order procedures.</strong> The contract must describe how changes to the
          scope of work will be handled and priced.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Non-Compliant Contracts May Be Unenforceable">
        <p>
          If a contractor&apos;s contract does not substantially comply with B&amp;P Code
          &sect;7159, the contractor may not be able to enforce it in court. This means that if a
          dispute arises over payment, scope, or quality of work, the contractor may be unable to
          sue the homeowner for payment or to enforce any arbitration clause. For insurance claims,
          this cuts both ways &mdash; it protects you from a bad contractor, but it can also create
          problems if the insurance company argues that the contract is unreliable evidence of
          repair costs because it does not comply with state law.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three-Day Right of Rescission
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under B&amp;P Code &sect;7159(e), the homeowner has three business days after signing a
        home improvement contract to cancel it without penalty. This right cannot be waived by
        the homeowner. The contractor must provide a &ldquo;Notice of the Three-Day Right to
        Cancel&rdquo; as a separate, easily detachable form that is part of the contract.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rescission period is calculated from the date the homeowner signs the contract. If
        the homeowner signs on a Monday, the three business days are Tuesday, Wednesday, and
        Thursday. The homeowner may cancel at any time during those three days by providing
        written notice to the contractor at the address stated in the contract.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the contractor fails to provide the three-day cancellation notice, the homeowner&apos;s
        right to cancel does not expire &mdash; it continues indefinitely until the proper notice
        is given. This is a powerful protection that many homeowners do not know they have.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Exceptions to the Three-Day Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are limited exceptions where the three-day rescission right does not apply:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          When the homeowner initiates the contact and the work is to be performed on the same
          day the contract is signed (the &ldquo;same-day start&rdquo; exception requires a
          separate signed acknowledgment)
        </li>
        <li>
          Emergency or disaster repairs where a delay would cause additional damage to the
          property (discussed in more detail below)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance repair context creates an interesting tension here. If your home was
        damaged by fire and needs immediate board-up or tarping, that qualifies as emergency
        work. But once the emergency is stabilized, the permanent repair contract is subject to
        the full three-day rescission requirement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Down Payment Limitations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law strictly limits how much a contractor can collect as a down payment
        before work begins. Under B&amp;P Code &sect;7159.5, the maximum down payment a
        contractor may request or accept is the lesser of $1,000 or 10% of the contract price.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          On a $50,000 repair contract, the maximum down payment is $1,000 (not $5,000, which
          would be 10%)
        </li>
        <li>
          On a $8,000 repair contract, the maximum down payment is $800 (10% of $8,000, which
          is less than $1,000)
        </li>
        <li>
          A contractor who demands $5,000 or $10,000 up front to &ldquo;order materials&rdquo;
          is violating California law, regardless of how reasonable the request may sound
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        After work begins, progress payments must be tied to actual work performed. The
        contractor cannot bill ahead of the work. Each payment (other than the down payment)
        must be for work that has actually been completed or materials that have been delivered
        to the job site.
      </p>

      <CalloutBox variant="warning" title="Red Flag: Large Down Payment Demands">
        <p>
          After a disaster, unscrupulous contractors frequently demand large down payments from
          desperate homeowners &mdash; sometimes 25%, 33%, or even 50% of the contract price.
          This is illegal in California for residential work. Any contractor who asks for more
          than $1,000 or 10% (whichever is less) as a down payment is either ignorant of
          California law or intentionally violating it. Either way, it is a serious red flag.
          For more on avoiding contractor fraud after disasters, see our article on{' '}
          <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] hover:underline">
            choosing your contractor
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Home Improvement Salesperson (HIS) Registration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law requires that any person who solicits, sells, negotiates, or executes
        contracts for home improvement on behalf of a contractor must be registered with the
        CSLB as a Home Improvement Salesperson (HIS). This requirement is found in B&amp;P
        Code &sect;7152.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HIS registration is relevant to insurance claims because after a disaster, many
        contractors send employees or agents door-to-door soliciting repair work. If the person
        knocking on your door is not a registered HIS, the contractor is in violation of
        California law. The HIS must carry their registration card and show it to you upon
        request.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Important points about HIS registration:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The HIS registration number must appear on the contract alongside the contractor&apos;s
          license number
        </li>
        <li>
          The contractor is responsible for ensuring their salespersons are properly registered
        </li>
        <li>
          If the contractor&apos;s licensee personally negotiates and executes the contract, a
          separate HIS registration is not required for that person
        </li>
        <li>
          Violation of HIS requirements can result in discipline against the contractor&apos;s
          license
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Home Improvement Contracts vs. Service and Repair Contracts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all work on a residential property is a &ldquo;home improvement.&rdquo; California
        law distinguishes between a home improvement contract (governed by &sect;7159) and a
        service and repair contract (governed by &sect;7159.14). The distinction matters because
        service and repair contracts have somewhat less onerous requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A &ldquo;service and repair&rdquo; contract covers work where:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The work is for repair, restoration, or maintenance of existing systems or conditions
        </li>
        <li>
          The total contract price does not exceed $750 (note: this threshold is lower than
          the $500 threshold for home improvements)
        </li>
        <li>
          The work is initiated by the homeowner (not solicited by the contractor)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For most insurance repair work, the contract price will far exceed $750, and the work
        will involve improvement or restoration of the home rather than simple maintenance.
        This means that in the vast majority of insurance claim situations, the full
        requirements of &sect;7159 apply, not the lighter requirements of &sect;7159.14.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, some small repairs &mdash; such as a plumber fixing a single leaking pipe, or
        an electrician repairing an outlet damaged in a storm &mdash; may qualify as service and
        repair work. The key factors are the total price and the nature of the work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Emergency and Disaster Exceptions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law recognizes that after a fire, flood, earthquake, or other disaster, the
        normal contract requirements can create dangerous delays. When a homeowner faces an
        immediate threat of additional damage &mdash; a damaged roof that will allow rain
        intrusion, a broken gas line, or structural instability &mdash; waiting three business
        days to begin work could cause further loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        B&amp;P Code &sect;7159.14 provides a limited exception for emergency work. Under this
        exception:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The three-day rescission right may be waived if the homeowner provides a separate
          signed and dated statement describing the emergency and requesting immediate
          commencement of work
        </li>
        <li>
          The waiver must be in the homeowner&apos;s own handwriting (not pre-printed on the
          contract)
        </li>
        <li>
          The emergency must be a genuine emergency &mdash; an actual threat of imminent
          additional damage, not merely urgency or inconvenience
        </li>
        <li>
          The exception applies only to the work necessary to address the emergency, not to
          the entire permanent repair project
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is critical for insurance claims. After a fire or storm, you may need immediate
        board-up, tarping, or debris removal to prevent further damage. Those emergency
        measures can proceed without the full contract formalities. But once the emergency is
        stabilized, the permanent reconstruction contract must comply with all requirements of
        &sect;7159 &mdash; including the three-day rescission right.
      </p>

      <CalloutBox variant="tip" title="Separate Emergency and Permanent Repair Contracts">
        <p>
          Best practice after a disaster: have one contract for emergency mitigation work
          (board-up, tarping, debris removal, water extraction) and a separate contract for the
          permanent repair work. The emergency contract can proceed immediately. The permanent
          repair contract should comply with all &sect;7159 requirements, including the three-day
          right to cancel. This separation also aligns with how insurance companies typically
          handle claims &mdash; emergency mitigation and permanent repairs are often treated as
          separate line items or even separate claim payments.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Construction: Different Rules Entirely
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything discussed above applies to residential construction &mdash; work performed
        on owner-occupied homes and residential rental properties. Commercial construction
        operates under a fundamentally different legal framework. If your insurance claim
        involves a commercial property (office building, retail space, warehouse, industrial
        facility, or apartment complex over four units), the rules are substantially different.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No Three-Day Rescission Right
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property owners do not have the three-day right to cancel a construction
        contract. Once you sign a commercial construction contract, you are bound by its terms
        immediately. The legislature determined that commercial property owners are
        sophisticated enough to protect themselves without the consumer protections afforded to
        homeowners.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No Down Payment Limitations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $1,000 / 10% down payment limit does not apply to commercial construction. A
        commercial contractor may request any amount as a deposit or mobilization payment, and
        the property owner must negotiate those terms at the contract stage. It is common for
        commercial contractors to request 10-20% mobilization fees, and for large projects,
        even larger advances for material procurement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Less Prescriptive Contract Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial construction contracts are not required to follow the rigid format of
        &sect;7159. While they still must be in writing for amounts exceeding $500 (Civil Code
        &sect;1624, the Statute of Frauds), the specific disclosure requirements, notice
        provisions, and formatting rules of &sect;7159 do not apply. Commercial parties are
        expected to negotiate contract terms appropriate to their circumstances.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Indemnification and Hold Harmless Agreements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial construction contracts routinely include indemnification provisions that
        would be unenforceable in the residential context. These provisions may require one
        party to indemnify (hold harmless) the other for losses arising from the construction
        work. In the insurance claims context, these provisions matter because they determine
        who bears the risk if something goes wrong during repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Civil Code &sect;2782 places some limits on indemnification in construction
        contracts &mdash; a contractor cannot be required to indemnify the property owner for
        the owner&apos;s own active negligence. But beyond that statutory floor, indemnification
        terms in commercial contracts are largely negotiable.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Waiver of Subrogation Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial construction contracts frequently include waiver of subrogation clauses.
        These provisions state that the parties waive their respective insurance carriers&apos;
        rights to subrogate against the other party for damages covered by insurance. This is
        significant because it means that if a contractor causes damage during the repair work,
        and that damage is covered by the property owner&apos;s insurance, the property owner&apos;s
        insurer cannot pursue the contractor to recover its payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For insurance claims, waiver of subrogation clauses require careful consideration.
        Your insurer may object to a contract that includes a waiver of subrogation because it
        eliminates the insurer&apos;s right to recover from a negligent contractor.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Additional Insured Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial contracts almost always require the contractor to add the property owner as
        an additional insured on the contractor&apos;s general liability policy. This ensures
        that if the contractor&apos;s work causes injury to a third party or damage to adjacent
        property, the property owner has coverage under the contractor&apos;s policy in addition
        to their own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While additional insured requirements are less common in residential contracts, they
        are still a good practice. If you are hiring a contractor for major insurance repair
        work on your home, asking to be named as an additional insured on their policy is not
        unreasonable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contractor Licensing Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California requires that any person or entity performing construction work valued at
        $500 or more in combined labor and materials must hold a valid contractor&apos;s
        license issued by the Contractors State License Board (CSLB). This requirement is found
        in B&amp;P Code &sect;7028.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The licensing requirement is absolute. There is no exception for insurance work, no
        exception for &ldquo;small jobs,&rdquo; and no exception for &ldquo;handyman&rdquo; work
        that exceeds the $500 threshold. The consequences of hiring an unlicensed contractor
        are severe:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>No right to sue for payment.</strong> Under B&amp;P Code &sect;7031, an
          unlicensed contractor cannot bring an action to collect compensation for any work
          requiring a license. The contract is void as against public policy.
        </li>
        <li>
          <strong>Disgorgement.</strong> Under &sect;7031(b), the person who paid an unlicensed
          contractor may recover all compensation paid, regardless of whether the work was
          satisfactory. This is a complete disgorgement &mdash; the unlicensed contractor must
          return everything.
        </li>
        <li>
          <strong>Criminal penalties.</strong> Performing work without a license is a
          misdemeanor under B&amp;P Code &sect;7028, punishable by fine and/or imprisonment.
        </li>
        <li>
          <strong>No insurance coverage implications.</strong> If an unlicensed contractor
          causes damage to your property during repairs, they likely carry no liability
          insurance. You may have no practical recourse.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more information on verifying contractor licensing, see our guide on{' '}
        <Link href="/resources/cslb-licensing-requirements" className="text-[#2E74B5] hover:underline">
          CSLB licensing requirements
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        License Classifications That Matter for Insurance Repairs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CSLB issues licenses in multiple classifications. For insurance repair work, the
        most relevant are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Class B &mdash; General Building Contractor.</strong> Can perform or supervise
          the construction of any structure, including framing, concrete, and finish work. This
          is the most common license for residential fire or water damage restoration.
        </li>
        <li>
          <strong>Class C-33 &mdash; Painting and Decorating.</strong> Required for contractors
          whose primary work is painting, wallcovering, or decorative finishing.
        </li>
        <li>
          <strong>Class C-36 &mdash; Plumbing.</strong> Required for plumbing installation and
          repair.
        </li>
        <li>
          <strong>Class C-39 &mdash; Roofing.</strong> Required for roof installation, repair,
          and maintenance.
        </li>
        <li>
          <strong>Class C-10 &mdash; Electrical.</strong> Required for electrical wiring and
          fixture installation.
        </li>
        <li>
          <strong>Class C-20 &mdash; HVAC.</strong> Required for heating, ventilation, and air
          conditioning work.
        </li>
        <li>
          <strong>Class C-21 &mdash; Building Moving/Demolition.</strong> Relevant for major
          fire losses requiring structural demolition.
        </li>
        <li>
          <strong>ASB &mdash; Asbestos Abatement.</strong> Required for any work involving
          asbestos-containing materials (common in pre-1980 homes).
        </li>
        <li>
          <strong>HAZ &mdash; Hazardous Substance Removal.</strong> Required for lead, mold, or
          other hazardous material remediation work.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A General Building (B) contractor can perform work in any specialty classification as
        part of a larger project, provided the specialty work is incidental and supplemental to
        the general building project. However, if the only work being performed is specialty
        work (for example, only re-roofing), then the appropriate specialty license is required.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Construction Law Affects Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The intersection of construction law and insurance claims creates several practical
        issues that policyholders must understand.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Choose Your Own Contractor
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, you have the absolute right to choose your own contractor for insurance
        repairs. The insurance company cannot require you to use their preferred vendor or
        managed repair network. California Insurance Code &sect;2071 and California Code of
        Regulations, Title 10, &sect;2695.9(d) make clear that the insurer cannot condition
        payment on the policyholder&apos;s use of a particular contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the insurer can dispute the reasonableness of your contractor&apos;s pricing.
        This is where having a compliant contract under &sect;7159 becomes strategically
        important &mdash; a fully compliant contract from a properly licensed contractor is
        much harder for the insurer to dismiss than a handshake deal or a one-page estimate
        that lacks required disclosures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of this right, see our article on{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] hover:underline">
          choosing your own contractor vs. the insurance company&apos;s
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Companies Using Non-Compliant Contracts Against You
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a tactic some insurance adjusters use: if your contractor provides a contract
        or estimate that does not comply with &sect;7159, the adjuster may argue that the
        contractor is &ldquo;not legitimate,&rdquo; that the pricing is unreliable, or that the
        contract cannot be used as evidence of repair costs. While this argument has limited
        legal merit (the insurer owes for reasonable repair costs regardless of contract
        formalities), it can delay your claim and force you into unnecessary disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best defense is to ensure your contractor provides a fully compliant contract from
        the beginning. A detailed, &sect;7159-compliant contract with itemized pricing,
        proper disclosures, and all required elements is much harder for an insurer to
        challenge than a one-page bid with a lump-sum price.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Change Orders and Supplemental Work
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance repairs almost always involve change orders. Once a contractor opens up walls,
        removes roofing, or begins demolition, hidden damage is frequently discovered that was
        not visible during the initial inspection. This additional damage requires a supplement
        to both the construction contract and the insurance claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, change orders to a home improvement contract must be in writing
        and must state the additional cost in dollars and cents. Oral change orders are not
        enforceable. This requirement aligns well with the insurance claims process, where
        supplements must also be documented in writing for the insurer to consider additional
        payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Best practice for change orders during insurance repairs:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Document the additional damage with photographs before any work is performed
        </li>
        <li>
          Obtain a written change order from the contractor stating the additional scope and
          cost
        </li>
        <li>
          Submit a supplement request to the insurance company with the change order and
          photographs
        </li>
        <li>
          Do not authorize the additional work until the change order is signed by both parties
        </li>
        <li>
          Keep copies of all change orders as part of your claim file
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mechanics Liens and Insurance Claim Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A mechanics lien is a legal claim against your property filed by a contractor,
        subcontractor, or material supplier who has not been paid for work performed or
        materials furnished. In the insurance claims context, mechanics liens create a
        dangerous situation where a subcontractor or supplier can place a lien on your home
        even if you paid the general contractor in full &mdash; if the general contractor
        failed to pay their subcontractors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Civil Code &sect;8400 et seq. governs mechanics liens. Key points for
        insurance claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Subcontractors and suppliers must serve a &ldquo;preliminary notice&rdquo; within 20
          days of first furnishing labor or materials to preserve their lien rights (Civil Code
          &sect;8200)
        </li>
        <li>
          A mechanics lien must be recorded within 90 days of completion of the work (Civil
          Code &sect;8412)
        </li>
        <li>
          The property owner can protect themselves by requiring lien releases from all
          subcontractors before making progress payments to the general contractor
        </li>
        <li>
          Joint checks (made payable to both the general contractor and the subcontractor) are
          another protective measure
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When insurance proceeds are involved, the situation becomes more complex. If the
        insurance company issues payment jointly to you and a mortgage lender (as is common for
        large losses), the mortgage lender typically holds the funds in escrow and releases
        them in stages as work progresses. This can actually protect against mechanics liens
        because the funds are controlled and disbursed against verified work completion.
      </p>

      <CalloutBox variant="tip" title="Demand Unconditional Lien Releases">
        <p>
          Before making any progress payment to your contractor, demand unconditional lien
          releases from the general contractor and all known subcontractors and suppliers for
          the previous payment period. A conditional release (conditioned on the check clearing)
          is appropriate for the current payment, but you should have unconditional releases for
          all prior payments. This is your best protection against a subcontractor later filing
          a lien because the general contractor did not pay them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Department Requirements and Insurance Repairs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When insurance repair work requires a building permit, it triggers the jurisdiction of
        the local building department. This intersection of construction law and insurance
        claims creates both obligations and opportunities for policyholders.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The building department will enforce current building codes, which may be more stringent
        than the codes in effect when your home was originally built. This means the repair work
        may need to comply with standards that exceed what previously existed. The additional
        cost of bringing the work up to current code is typically covered under the
        &ldquo;Ordinance or Law&rdquo; provision of your policy (if you have one) or may be
        argued as a necessary cost of the covered repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on this topic, see our articles on{' '}
        <Link href="/resources/building-permits-claims" className="text-[#2E74B5] hover:underline">
          building permits and insurance claims
        </Link>
        {' '}and{' '}
        <Link href="/resources/construction-defect-claims" className="text-[#2E74B5] hover:underline">
          construction defect claims
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inspections and Final Sign-Off
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a permit is pulled, the building department will require inspections at various
        stages of the work. Common inspection points include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Foundation/slab inspection (before concrete is poured)</li>
        <li>Framing inspection (before walls are closed up)</li>
        <li>Electrical rough-in inspection</li>
        <li>Plumbing rough-in inspection</li>
        <li>Mechanical (HVAC) rough-in inspection</li>
        <li>Insulation inspection</li>
        <li>Final inspection (before occupancy)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These inspections can delay the work timeline if the inspector finds non-compliant
        conditions. However, they also protect you by ensuring the work is done correctly. If
        an inspection failure requires additional work, that additional work may be a
        legitimate supplement to the insurance claim &mdash; depending on whether the failure
        relates to the original damage or to the contractor&apos;s error.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CSLB Complaint Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a contractor dispute arises during insurance repair work, the Contractors State
        License Board (CSLB) is the primary regulatory body with jurisdiction over the
        contractor. Filing a CSLB complaint does not resolve your insurance claim, but it can
        provide leverage and documentation that supports your position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CSLB complaint process works as follows:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Filing the complaint.</strong> You can file online at the CSLB website or by
          mail. The complaint should include a description of the problem, copies of the
          contract, payment records, photographs of defective work, and any correspondence
          with the contractor.
        </li>
        <li>
          <strong>CSLB investigation.</strong> A CSLB investigator will contact the contractor
          and may inspect the work. The investigation can take several months.
        </li>
        <li>
          <strong>Mediation.</strong> The CSLB may offer mediation between you and the
          contractor. This is voluntary and non-binding.
        </li>
        <li>
          <strong>Disciplinary action.</strong> If the CSLB finds a violation, it can take
          action against the contractor&apos;s license, ranging from a citation (fine) to
          suspension or revocation of the license.
        </li>
        <li>
          <strong>Contractor&apos;s bond.</strong> If the contractor has a surety bond (required
          for licensure), you may be able to make a claim against the bond for damages up to
          the bond amount (currently $25,000 for most contractors).
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common Grounds for CSLB Complaints in Insurance Repairs
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Abandoning the project without completing the work</li>
        <li>Performing work without required permits</li>
        <li>Exceeding the down payment limit</li>
        <li>Failing to provide a compliant written contract</li>
        <li>Willful departure from plans or specifications without consent</li>
        <li>Using materials of a lesser quality than specified in the contract</li>
        <li>Failure to prosecute the work diligently (excessive delays)</li>
        <li>Performing work beyond the scope of the contractor&apos;s license classification</li>
        <li>Failing to pay subcontractors (resulting in mechanics liens against your property)</li>
      </ul>

      <CalloutBox variant="info" title="CSLB Complaint vs. Lawsuit">
        <p>
          A CSLB complaint is a regulatory action &mdash; it can result in discipline against
          the contractor&apos;s license but does not directly award you money damages (except
          through the bond claim process). If your losses exceed the bond amount ($25,000),
          you may need to pursue a separate civil lawsuit. However, a CSLB finding of violation
          can be powerful evidence in a subsequent civil action. Additionally, the CSLB&apos;s
          investigation file can provide documentation and an independent assessment of
          whether the contractor&apos;s work was deficient.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Putting It All Together: A Checklist for Insurance Repair Contracts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before signing a construction contract for insurance repair work in California, verify
        the following:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The contractor holds a valid, active CSLB license in the appropriate classification
          for the work &mdash; verify at{' '}
          <Link href="/resources/cslb-licensing-requirements" className="text-[#2E74B5] hover:underline">
            the CSLB website
          </Link>
        </li>
        <li>
          The contract is in writing and states the total price in dollars and cents
        </li>
        <li>
          The contract includes the contractor&apos;s name, address, phone number, and license
          number
        </li>
        <li>
          Approximate start and completion dates are stated
        </li>
        <li>
          The scope of work is described in reasonable detail
        </li>
        <li>
          The three-day right of rescission notice is included as a detachable form
        </li>
        <li>
          The mechanics lien warning is included
        </li>
        <li>
          The CSLB contact information is included
        </li>
        <li>
          The down payment does not exceed $1,000 or 10% of the contract price, whichever is
          less
        </li>
        <li>
          Progress payments are tied to work completion milestones, not arbitrary dates
        </li>
        <li>
          Change order procedures are clearly described
        </li>
        <li>
          The contractor carries workers&apos; compensation insurance and general liability
          insurance
        </li>
        <li>
          If any salesperson was involved in soliciting or negotiating the contract, their HIS
          registration number appears on the contract
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Considerations After Declared Disasters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a governor-declared disaster (wildfire, earthquake, flood), additional
        protections and considerations come into play:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Price gouging laws.</strong> California Penal Code &sect;396 prohibits
          contractors from charging more than 10% above the pre-disaster price for repair
          services. This applies for 30 days after the disaster declaration (and can be
          extended by proclamation).
        </li>
        <li>
          <strong>Unlicensed contractor surge.</strong> After disasters, out-of-state and
          unlicensed contractors flood affected areas. The CSLB typically sets up field offices
          and conducts stings in disaster zones.
        </li>
        <li>
          <strong>Expedited permitting.</strong> Many jurisdictions offer expedited permitting
          processes after declared disasters. Your building department may have special
          procedures, reduced fees, or streamlined plan review for disaster repairs.
        </li>
        <li>
          <strong>Extended filing deadlines.</strong> Some regulatory deadlines may be extended
          after a declared disaster, including mechanics lien filing periods and CSLB complaint
          deadlines.
        </li>
        <li>
          <strong>Insurance company obligations.</strong> California Insurance Code &sect;790.03
          and the Fair Claims Settlement Practices Regulations impose additional obligations on
          insurers after declared disasters, including accelerated claim handling timelines and
          advance payments.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California construction law provides significant protections for homeowners that
        directly affect the insurance claims process. Understanding these protections allows
        you to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Recognize when a contractor is violating state law and protect yourself accordingly
        </li>
        <li>
          Ensure your construction contract is fully compliant so the insurance company cannot
          use it against you
        </li>
        <li>
          Properly document change orders and supplemental work to support your insurance
          supplement claims
        </li>
        <li>
          Understand the different rules that apply to commercial vs. residential properties
        </li>
        <li>
          Protect your property from mechanics liens during the claims process
        </li>
        <li>
          Use the CSLB complaint process when a contractor fails to perform
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The construction contract is not just a formality &mdash; it is a legal document that
        establishes the scope and cost of your repairs, and it is often the primary evidence
        your insurance company uses to evaluate what they owe. Making sure that document
        complies with California law protects you on every front.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        California construction law is complex and subject to change. The statutes discussed
        here are current as of the date of publication but may be amended by the legislature.
        Consult with a licensed California attorney for advice regarding your specific
        situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
