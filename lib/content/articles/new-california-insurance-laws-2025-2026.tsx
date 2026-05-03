import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'New California Insurance Laws 2025–2026: What Every Policyholder Needs to Know',
  description:
    'A comprehensive guide to the major California insurance laws enacted in 2025 and 2026, including SB 495 (contents payments), SB 547 (non-renewal protections), AB 226 (FAIR Plan bonding), AB 888 (fire-safe roofs), SB 876 (disaster recovery reform), and building code upgrade minimums.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Legislature responded to the state&rsquo;s worsening insurance crisis with a
        wave of new legislation in 2025 and 2026. These laws touch virtually every aspect of property
        insurance &mdash; from how quickly disaster victims get paid, to who can be non-renewed, to
        how much building code upgrade coverage a policy must carry. Some of these laws took effect
        immediately; others phase in over the next year. Taken together, they represent the most
        significant expansion of policyholder protections in California in a generation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains each major bill, what it does, and &mdash; most importantly &mdash;
        what it means in practical terms for California property owners navigating the insurance
        market.
      </p>

      {/* ====== SB 495 ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        SB 495: The Eliminate The List Act &mdash; Faster Contents Payments After Disasters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Senate Bill 495, known as the &ldquo;Eliminate The List Act,&rdquo; is one of the most
        impactful policyholder protections in recent memory. After a total loss in a state-declared
        disaster, insurers must now automatically pay <strong>60% of the personal property
        (contents) coverage limit &mdash; up to $350,000</strong> &mdash; without requiring the
        policyholder to produce a detailed room-by-room inventory. The previous law required only
        30%, capped at $250,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Equally important, SB 495 establishes a <strong>minimum 100-day proof-of-loss
        period</strong>. Insurers cannot demand a sworn proof of loss or a detailed contents
        inventory for at least 100 days after the loss. This gives disaster victims time to focus on
        immediate survival needs &mdash; finding temporary housing, replacing essential items, and
        stabilizing their families &mdash; before having to begin the exhausting process of
        cataloging every possession that was destroyed.
      </p>

      <CalloutBox variant="tip" title="Why This Matters">
        <p>
          Before SB 495, insurers could demand detailed inventories almost immediately, creating an
          impossible burden for families who had just lost everything. The 100-day minimum and 60%
          automatic payment mean real money reaches policyholders when they need it most &mdash; not
          months later after a paperwork marathon.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed breakdown of how this law works in practice, including how it interacts with
        depreciation and recoverable holdback, see the full article on{' '}
        <Link href="/resources/sb49-contents-rule" className="text-[#2E74B5] underline">
          SB 495 and the contents payment rule
        </Link>.
      </p>

      {/* ====== SB 547 ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        SB 547: Non-Renewal Protections Extended to Commercial, HOA, Condo, and Nonprofit Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California already had protections requiring insurers to give advance notice before
        non-renewing residential homeowner policies, particularly after a declared disaster. However,
        those protections had a significant gap: they applied primarily to personal lines residential
        policies, leaving commercial properties, homeowners associations (HOAs), condominium
        associations, and nonprofit organizations without equivalent safeguards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Senate Bill 547 closes that gap. The bill extends the same non-renewal protections to
        commercial policies, HOA and condominium association master policies, and nonprofit
        organization policies. This means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Advance notice requirements.</strong> Insurers must provide adequate advance
          notice before non-renewing these policy types, giving policyholders time to find
          replacement coverage.
        </li>
        <li>
          <strong>Post-disaster non-renewal moratoriums.</strong> The same disaster-related
          non-renewal restrictions that apply to homeowner policies now extend to these
          categories, preventing insurers from mass non-renewing commercial and association
          policies in wildfire-affected areas immediately after a disaster.
        </li>
        <li>
          <strong>Disclosure obligations.</strong> Insurers must provide a written explanation for
          the non-renewal, which is essential for policyholders seeking alternative coverage or
          challenging the decision.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is particularly significant for HOAs and condominium associations, where a
        non-renewal of the master insurance policy can affect dozens or hundreds of unit owners
        simultaneously. For more on non-renewal rights generally, see the guide to{' '}
        <Link href="/resources/nonrenewal-cancellation" className="text-[#2E74B5] underline">
          non-renewal and cancellation protections in California
        </Link>.
      </p>

      {/* ====== AB 226 ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        AB 226: FAIR Plan Bonding Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan &mdash; the insurer of last resort for property owners who cannot
        obtain coverage through the private market &mdash; has grown dramatically. As of early 2026,
        it covers well over 400,000 policies with aggregate exposure exceeding $300 billion. The FAIR
        Plan&rsquo;s financial stability is critical: if it cannot pay claims after a major disaster,
        the shortfall would be assessed against every admitted insurer in California, which could
        destabilize the entire market.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assembly Bill 226 addresses this by expanding the FAIR Plan&rsquo;s bonding authority. The
        bill authorizes the FAIR Plan to issue revenue bonds and other debt instruments to raise
        capital, providing it with additional financial tools to ensure claim-paying capacity after
        catastrophic events. This is not a blank check &mdash; the bonds must be structured to be
        repaid from FAIR Plan premiums and assessments &mdash; but it gives the Plan access to
        capital markets rather than relying solely on after-the-fact assessments on other insurers.
      </p>

      <CalloutBox variant="info" title="What This Means for FAIR Plan Policyholders">
        <p>
          AB 226 does not change FAIR Plan coverage or premiums directly. Its significance is
          structural: it strengthens the FAIR Plan&rsquo;s ability to pay claims after large-scale
          disasters. For policyholders on the FAIR Plan, this is an important backstop &mdash; it
          reduces the risk that the Plan would be unable to pay claims in a catastrophic event
          scenario. For more on the FAIR Plan&rsquo;s coverage and limitations, see the full guide to
          the{' '}
          <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
            California FAIR Plan
          </Link>.
        </p>
      </CalloutBox>

      {/* ====== AB 888 ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        AB 888: The California Safe Homes Act &mdash; Grants for Fire-Safe Roofs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most cost-effective ways to protect a home from wildfire is to install a
        fire-resistant roof. Class A fire-rated roofing materials can dramatically reduce the
        likelihood of a structure igniting from airborne embers &mdash; the primary cause of home
        loss during wildfires. However, a full roof replacement costs tens of thousands of dollars,
        putting it out of reach for many homeowners, particularly in lower-income communities that
        are often the most fire-vulnerable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assembly Bill 888, the California Safe Homes Act, establishes a grant program to help
        homeowners install fire-safe roofing. The program provides direct financial assistance
        to qualified homeowners for the cost of replacing existing roofs with Class A fire-rated
        materials. Key features include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Income-based eligibility.</strong> The program prioritizes homeowners who
          demonstrate financial need, ensuring that the grants reach those who cannot otherwise
          afford the upgrade.
        </li>
        <li>
          <strong>Geographic targeting.</strong> Homes in high and very high fire hazard severity
          zones receive priority, directing resources where the risk &mdash; and the potential
          benefit &mdash; is greatest.
        </li>
        <li>
          <strong>Community-level impact.</strong> By hardening individual homes, the program
          reduces risk for entire neighborhoods. A single un-hardened structure in an otherwise
          fire-resistant neighborhood can serve as an ignition point for surrounding homes.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For homeowners who have been non-renewed due to wildfire risk, investing in fire-safe
        roofing and other mitigation measures can be a pathway back to the voluntary insurance
        market. Some carriers now offer premium discounts or restored eligibility for homes that
        meet specific wildfire hardening standards.
      </p>

      {/* ====== SB 876 ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        SB 876: The Disaster Recovery Reform Act
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Senate Bill 876, the Disaster Recovery Reform Act, imposes new requirements on insurers to
        plan for and respond to large-scale disasters. The bill has two primary components: proactive
        planning requirements and enhanced penalty provisions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurer Disaster Recovery Plans
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 876 requires every insurer writing property insurance in California to develop,
        maintain, and file a disaster recovery plan with the California Department of Insurance
        (CDI). These plans must address:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Staffing surge capacity.</strong> How the insurer will scale up its claims
          handling workforce after a large-scale event, including the use of independent
          adjusters and catastrophe response teams.
        </li>
        <li>
          <strong>Communication protocols.</strong> How the insurer will reach affected
          policyholders, including provisions for situations where normal communication
          infrastructure (mail, phone, internet) may be disrupted.
        </li>
        <li>
          <strong>Advance payment procedures.</strong> How the insurer will expedite initial
          payments and emergency funds to disaster-affected policyholders.
        </li>
        <li>
          <strong>Claims handling timelines.</strong> Specific commitments for inspection
          timelines, initial contact, and payment benchmarks during catastrophe events.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Doubled Penalties During Declared Emergencies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 876 doubles the administrative penalties that CDI can impose on insurers for violations
        of California insurance laws during a declared state of emergency. Under existing law, CDI
        already has authority to fine insurers for unfair claims settlement practices. SB 876
        increases the financial consequences during the specific window when policyholders are most
        vulnerable and insurer misconduct is most harmful.
      </p>

      <CalloutBox variant="important" title="Why Doubled Penalties Matter">
        <p>
          The doubled penalty provision creates a financial incentive for insurers to prioritize
          compliance during disasters. When an insurer is handling tens of thousands of claims
          simultaneously, the temptation to cut corners &mdash; rushing inspections, using
          automated lowball estimates, delaying communications &mdash; is at its highest. The
          enhanced penalties are designed to counteract that pressure.
        </p>
      </CalloutBox>

      {/* ====== Building Code Upgrade Coverage Minimum ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Code Upgrade Coverage: New 10% Minimum
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Starting with policies issued or renewed after July 1, 2026, California law requires every
        homeowner insurance policy to include <strong>building code upgrade coverage of at least
        10% of the dwelling limit</strong>. This is a mandatory minimum &mdash; insurers may offer
        more, but they cannot offer less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Building code upgrade coverage (also called &ldquo;ordinance or law&rdquo; coverage) pays
        the additional cost of bringing a damaged home into compliance with current building codes
        when those codes have changed since the home was originally built. This is critically
        important because building codes in California have become significantly more stringent over
        time, particularly regarding:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Seismic requirements.</strong> Updated foundation, framing, and structural
          connection standards.
        </li>
        <li>
          <strong>Wildfire hardening.</strong> Fire-resistant roofing, ember-resistant vents,
          tempered glass, and defensible space requirements under Chapter 7A of the California
          Building Code.
        </li>
        <li>
          <strong>Energy efficiency.</strong> Title 24 energy code requirements including
          insulation, HVAC, and in many cases solar panel mandates for new construction.
        </li>
        <li>
          <strong>ADA and accessibility.</strong> Updated accessibility standards that may apply
          when substantial reconstruction triggers compliance requirements.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without adequate code upgrade coverage, a policyholder can receive the full dwelling limit
        and still face a significant shortfall because code-compliant reconstruction costs more than
        simply replacing what was there before. For a home insured at $500,000, the new minimum
        guarantees at least $50,000 in code upgrade coverage. Whether that is sufficient depends on
        the age of the home and the specific code changes in the local jurisdiction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper analysis of how building code upgrade coverage works and common disputes, see
        the full article on{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] underline">
          building code upgrade coverage
        </Link>.
      </p>

      {/* ====== Big Picture ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: What This Legislative Wave Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These laws did not emerge in a vacuum. They are a direct response to the unprecedented
        challenges facing California property owners: the withdrawal of major carriers from the
        state, the explosive growth of the FAIR Plan, skyrocketing premiums, and the devastating
        wildfire seasons that have made California the most difficult property insurance market in
        the country.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legislative strategy has multiple prongs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Immediate relief.</strong> SB 495 puts money in disaster victims&rsquo; hands
          faster, and the code upgrade coverage minimum ensures policies carry a meaningful floor
          of protection.
        </li>
        <li>
          <strong>Market stability.</strong> AB 226 strengthens the FAIR Plan&rsquo;s financial
          structure, while SB 547 prevents the kind of mass non-renewals that destabilize
          communities.
        </li>
        <li>
          <strong>Prevention.</strong> AB 888 funds the physical hardening of homes, which
          reduces future losses and improves insurability.
        </li>
        <li>
          <strong>Accountability.</strong> SB 876 requires insurers to plan for disasters and
          doubles the consequences for misconduct during emergencies.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question that remains is whether these legislative protections, combined with the
        California Department of Insurance&rsquo;s{' '}
        <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] underline">
          Sustainable Insurance Strategy
        </Link>{' '}
        on the regulatory side, will be enough to stabilize the market and bring carriers back to
        California in meaningful numbers.
      </p>

      {/* ====== Key Takeaways ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>SB 495</strong> requires 60% of contents coverage (up to $350,000) paid
          automatically after a disaster total loss, with at least 100 days before an inventory
          can be required.
        </li>
        <li>
          <strong>SB 547</strong> extends non-renewal protections to commercial, HOA, condo, and
          nonprofit policies &mdash; categories that were previously unprotected.
        </li>
        <li>
          <strong>AB 226</strong> gives the FAIR Plan new bonding authority to strengthen its
          ability to pay claims after catastrophic events.
        </li>
        <li>
          <strong>AB 888</strong> creates a grant program for fire-safe roofs, prioritizing
          high-risk areas and lower-income homeowners.
        </li>
        <li>
          <strong>SB 876</strong> requires insurer disaster recovery plans and doubles penalties
          for claims handling violations during declared emergencies.
        </li>
        <li>
          <strong>Building code upgrade coverage</strong> of at least 10% of the dwelling limit
          is mandatory on all homeowner policies issued or renewed after July 1, 2026.
        </li>
        <li>
          Policyholders should review their current policies to understand how these laws affect
          their existing coverage and what changes to expect at renewal.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal advice.
          Insurance law is complex and fact-specific. While every effort has been made to
          accurately describe these statutes, the official text of each bill &mdash; available
          through the California Legislature&rsquo;s website at leginfo.legislature.ca.gov &mdash;
          is the authoritative source. Consult a licensed California attorney or insurance
          professional for advice specific to your situation.
        </p>
      </CalloutBox>
    </>
  )
}
