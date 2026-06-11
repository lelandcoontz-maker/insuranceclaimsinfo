import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'New California Insurance Laws 2025–2026: What Every Policyholder Needs to Know',
  description:
    'A guide to California insurance laws enacted and pending in 2025–2026: SB 495 (contents payments), SB 547 (non-renewal protections), AB 226 (FAIR Plan bonding), SB 876 (disaster recovery reform), SB 877 (claims transparency), SB 878 (20% payment penalties), AB 1680 (FAIR Plan overhaul), SB 1301 (180-day nonrenewal notice), and more.',
  summary:
    'California enacted and proposed major insurance laws in 2025-2026, including SB 495 (contents), SB 547 (non-renewal), AB 1680 and AB 226 (FAIR Plan), and SB 876-878 (disaster recovery, transparency, payment penalties). Know the ones that affect your claim.',
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
        <Link href="/resources/sb495-contents-rule" className="text-[#2E74B5] underline">
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

      {/* ====== Pending Legislation ====== */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pending Legislation: Bills That Could Reshape Insurance in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following bills have advanced through committee and are actively moving through the
        legislature. None are yet signed into law, and their final form may change. But their scope
        signals a legislative intent to fundamentally restructure the insurer-policyholder relationship
        in California.
      </p>

      {/* ====== SB 876 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        SB 876: The Disaster Recovery Reform Act
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Senator Steve Padilla (D-San Diego), Chair, Senate
        Insurance Committee &mdash; in partnership with Insurance Commissioner Ricardo Lara.
        <br />
        <strong>Status (last update available to us):</strong> Passed the Senate (30&ndash;9)
        and advanced to the Assembly; in the Assembly Appropriations Committee as of June
        2026. Not yet enacted. Verify current status at{' '}
        <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB876" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          leginfo.legislature.ca.gov
        </a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 876 would impose new requirements on insurers to plan for and respond to large-scale
        disasters. The bill has two primary components: proactive planning requirements and
        enhanced penalty provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurer disaster recovery plans.</strong> SB 876 would require every insurer
        writing property insurance in California to develop, maintain, and file a disaster
        recovery plan with the California Department of Insurance. Plans would have to address:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Staffing surge capacity.</strong> How the insurer would scale up its claims
          handling workforce after a large-scale event, including the use of independent
          adjusters and catastrophe response teams.
        </li>
        <li>
          <strong>Communication protocols.</strong> How the insurer would reach affected
          policyholders, including provisions for situations where normal communication
          infrastructure (mail, phone, internet) may be disrupted.
        </li>
        <li>
          <strong>Advance payment procedures.</strong> How the insurer would expedite initial
          payments and emergency funds to disaster-affected policyholders.
        </li>
        <li>
          <strong>Claims handling timelines.</strong> Specific commitments for inspection
          timelines, initial contact, and payment benchmarks during catastrophe events.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Doubled penalties during declared emergencies.</strong> SB 876 would double the
        administrative penalties that CDI can impose on insurers for violations of California
        insurance laws during a declared state of emergency. Under existing law, CDI already has
        authority to fine insurers for unfair claims settlement practices. SB 876 would increase
        the financial consequences during the specific window when policyholders are most
        vulnerable and insurer misconduct is most harmful &mdash; counteracting the cost-cutting
        pressure carriers face when handling tens of thousands of simultaneous claims after a
        disaster.
      </p>

      {/* ====== SB 877 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        SB 877: Residential Property Insurance: Loss Estimate Transparency
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Senator Sasha Ren&eacute;e P&eacute;rez (D-Pasadena)
        <br />
        <strong>Status (last update available to us):</strong> Passed Senate Insurance
        Committee (April 2026); in Senate Appropriations as of mid-2026. Verify current
        status at{' '}
        <a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB877" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          leginfo.legislature.ca.gov
        </a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 877 targets the opacity of the claims adjustment process. If enacted, it would require insurers to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Disclose to claimants <strong>every version of every claims-related document</strong> within
          15 calendar days of creating it.
        </li>
        <li>
          Include <strong>what changed between versions, who approved the change, and why</strong>.
        </li>
        <li>
          Disclose the <strong>full name and title</strong> of every person who created, ordered,
          reviewed, or approved a document.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This directly addresses the &ldquo;black box&rdquo; problem &mdash; where the insurer produces
        a number, the policyholder disagrees, and there is no way to see how the number was derived, who
        approved it, or what changed between the initial estimate and the final offer. When an
        insurer&rsquo;s estimate drops between versions, the policyholder would know who made the change
        and what justification was given.
      </p>

      {/* ====== SB 878 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        SB 878: Insurance Business Practices (Payment Accountability Act)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Senator Sasha Ren&eacute;e P&eacute;rez
        <br />
        <strong>Status (last update available to us):</strong> Recommended &ldquo;do pass
        as amended&rdquo; by committee (4&ndash;2) on April 22, 2026; re-referred to Senate
        Appropriations. Verify current status at{' '}
        <a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB878" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          leginfo.legislature.ca.gov
        </a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This bill gives California&rsquo;s claims handling deadlines real financial consequences:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Codifies existing regulatory deadlines for insurer response, acceptance/denial, and payment.
        </li>
        <li>
          Imposes a <strong>20% annual penalty</strong> on insurers who miss deadlines.
        </li>
        <li>
          Penalty includes the overdue claim amount plus 20% annual interest plus{' '}
          <strong>reasonable and necessary attorney&rsquo;s fees</strong>.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s fair claims settlement regulations already impose deadlines &mdash; 15 days
        to acknowledge a claim, 40 days to accept or deny, 30 days to pay after acceptance. But the
        consequences for violation are diffuse: a CDI complaint, a potential bad faith lawsuit,
        regulatory action that may or may not materialize. SB 878 would attach a direct, automatic
        financial penalty. An insurer that sits on your claim for six months would owe the claim amount
        plus 10% in interest penalties plus your attorney&rsquo;s fees.
      </p>

      {/* ====== AB 1680 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        AB 1680: Make It FAIR Act
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Assembly Member Lisa Calderon (Chair, Assembly Insurance Committee)
        <br />
        <strong>Sponsor:</strong> Insurance Commissioner Ricardo Lara
        <br />
        <strong>Status (last update available to us):</strong> Passed the Assembly
        Third Reading 62&ndash;8 on May 21, 2026 and has moved to the Senate. Verify
        current status at{' '}
        <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1680" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          leginfo.legislature.ca.gov
        </a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan currently offers bare-bones fire coverage. Policyholders who need water damage
        coverage, personal injury liability, theft protection, or other standard homeowner&rsquo;s
        coverages must purchase a separate &ldquo;difference in conditions&rdquo; (DIC) policy &mdash;
        often at significant additional cost and from a different carrier. AB 1680 would require the
        FAIR Plan to offer <strong>comprehensive homeowner&rsquo;s coverage</strong> comparable to
        standard HO-3 policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional provisions include climate risk assessments, public access to Governing Committee
        meetings, annual reporting requirements, and implementation of reforms identified in CDI&rsquo;s
        Report of Examination, which found the FAIR Plan failed to comply with 17 recommendations
        regarding financial condition, corporate governance, and consumer protections.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Over 450,000 California homeowners are now on the FAIR Plan &mdash; many involuntarily, after
        being nonrenewed by their standard carrier. Requiring them to buy a second policy to get
        coverage that standard market policyholders receive in a single policy is an additional financial
        burden on families who are already paying more for less. For more on the FAIR Plan&rsquo;s
        current coverage and limitations, see the full article on{' '}
        <Link href="/resources/fair-plan-claims-limitations" className="text-[#2E74B5] underline">
          FAIR Plan claims
        </Link>.
      </p>

      {/* ====== SB 1301 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        SB 1301: Nonrenewal Guardrails to Preserve Coverage Act
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Senator Ben Allen
        <br />
        <strong>Status:</strong> Passed Senate Insurance Committee (April 2026); now in Senate Appropriations
        <br />
        <strong>Would take effect:</strong> July 1, 2027
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>180-day nonrenewal notice</strong> &mdash; up from the current 75 days for most
          homeowner&rsquo;s policies.
        </li>
        <li>
          Insurers must provide <strong>detailed, specific explanations</strong> for nonrenewals,
          referencing the specific underwriting guideline provision justifying the decision.
        </li>
        <li>
          Must <strong>disclose all information used</strong> in the nonrenewal decision.
        </li>
        <li>
          <strong>Prohibits nonrenewal or cancellation</strong> for merely inquiring about filing a
          claim or for filing claims within the deductible amount.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The current 75-day nonrenewal notice is often insufficient for homeowners in fire-prone areas to
        find replacement coverage &mdash; particularly when multiple carriers are simultaneously pulling
        out of the same regions. Six months gives families meaningful time to shop alternatives, harden
        their homes, or pursue regulatory relief. The prohibition on retaliation for claim inquiries
        addresses a real and documented practice: policyholders who call to ask whether something is
        covered, without filing a claim, and then receive a nonrenewal notice. For more on your rights
        when your carrier drops you, see the full article on{' '}
        <Link href="/resources/nonrenewal-cancellation" className="text-[#2E74B5] underline">
          non-renewal and cancellation
        </Link>.
      </p>

      {/* ====== SB 1076 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        SB 1076: Insurance Coverage for Fire-Safe Homes Act (Failed)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Senator Sasha Renee Perez
        <br />
        <strong>Co-sponsors:</strong> Eaton Fire Survivors Network, Consumer Watchdog
        <br />
        <strong>Status:</strong> Died in Senate Insurance Committee, April 23, 2026 &mdash; one vote short
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 1076 would have prohibited admitted insurers from refusing to offer, sell, or renew
        residential property insurance for homes meeting minimum home hardening and wildfire mitigation
        standards. Violators would have faced a five-year ban from both home and auto insurance markets
        in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was the <strong>fourth time since 2020</strong> that legislation requiring insurers to cover
        fire-hardened homes has failed. The concept represents the most direct legislative approach to
        the availability crisis &mdash; if you harden your home, you get coverage. Period. Its repeated
        failure, despite overwhelming public support, illustrates the limits of legislative reform when
        industry opposition is concentrated and sustained. The concept will return.
      </p>

      {/* ====== AB 597 ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        AB 597: Public Adjuster Fee Caps During Disasters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Author:</strong> Assembly Member John Harabedian
        <br />
        <strong>Status:</strong> Held in committee (status uncertain)
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        AB 597 would cap Public Adjuster fees at 15% of insurance payouts for claims arising from
        declared disasters and prohibit Public Adjuster solicitation while emergency conditions are
        present. It also includes a right to rescind contracts solicited during prohibited periods.
        For more on this bill, see the full article on{' '}
        <Link href="/resources/ab-597-public-adjuster-regulations" className="text-[#2E74B5] underline">
          AB 597 and Public Adjuster regulations
        </Link>.
      </p>

      {/* ====== Regulatory Actions ====== */}
      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Regulatory Actions (Not Legislation)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Legislation is only part of the picture. CDI&rsquo;s regulatory actions are reshaping the market
        in parallel:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Forward-looking catastrophe models:</strong> CDI completed evaluation of the first
          forward-looking wildfire catastrophe models, allowing insurers to factor in climate change
          when setting rates &mdash; but requiring them to also credit mitigation efforts.
        </li>
        <li>
          <strong>Proposition 103 intervenor process reforms:</strong> CDI announced reforms to enhance
          transparency and accountability in rate reviews.
        </li>
        <li>
          <strong>Public catastrophe model:</strong> SB 429 funds the development of the nation&rsquo;s
          first publicly available wildfire catastrophe model, giving consumers and regulators an
          independent baseline for challenging rate increases.
        </li>
      </ul>

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
          <strong>Accountability (pending).</strong> SB 876 would require insurers to plan for
          disasters and double the consequences for misconduct during emergencies.
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
          <strong>SB 876</strong> (pending) would require insurer disaster recovery plans and
          double penalties for claims handling violations during declared emergencies.
        </li>
        <li>
          <strong>Building code upgrade coverage</strong> of at least 10% of the dwelling limit
          is mandatory on all homeowner policies issued or renewed after July 1, 2026.
        </li>
        <li>
          <strong>SB 877</strong> (pending) would require insurers to disclose every version of every
          claims document within 15 days, including who approved changes and why.
        </li>
        <li>
          <strong>SB 878</strong> (pending) would impose a 20% annual penalty plus attorney&rsquo;s
          fees on insurers who miss claims handling deadlines.
        </li>
        <li>
          <strong>AB 1680</strong> (pending) would require the FAIR Plan to offer comprehensive
          homeowner&rsquo;s coverage comparable to standard HO-3 policies.
        </li>
        <li>
          <strong>SB 1301</strong> (pending) would extend nonrenewal notice to 180 days and require
          specific written justifications.
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
