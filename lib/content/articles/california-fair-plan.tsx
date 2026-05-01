import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The California FAIR Plan: What It Covers, What It Doesn\'t, and How to Apply',
  description:
    'A complete guide to the California FAIR Plan — the insurer of last resort for homeowners who can\'t get coverage in the private market.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan (Fair Access to Insurance Requirements) was created in 1968 as a
        last-resort option for property owners who cannot obtain fire insurance through the private
        market. Originally designed for a small number of high-risk properties, the FAIR Plan has
        ballooned to over 680,000 policies as major carriers have pulled back from California. If
        you have been non-renewed or denied coverage, the FAIR Plan may be your most realistic
        option — but you need to understand exactly what it does and does not cover.
      </p>

      <CalloutBox variant="warning" title="FAIR Plan ≠ Full Homeowner Coverage">
        <p>
          The FAIR Plan only covers fire and a few named perils. It does <strong>not</strong> include
          theft, water damage, liability, or personal property at replacement cost. You almost
          certainly need a separate DIC (Difference in Conditions) policy to fill the gaps. More on
          that below.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the FAIR Plan Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard FAIR Plan homeowner policy covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Fire</strong> — including wildfire</li>
        <li><strong>Lightning</strong></li>
        <li><strong>Internal explosion</strong></li>
        <li><strong>Smoke</strong> — from a hostile fire (not fireplaces or cooking)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Optional endorsements are available for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Windstorm and hail</li>
        <li>Vandalism and malicious mischief</li>
        <li>Extended coverage (riot, civil commotion, aircraft, vehicles, volcanic eruption)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the FAIR Plan Does NOT Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where most homeowners get an unpleasant surprise. The FAIR Plan does not provide:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Water damage</strong> — including burst pipes, rain intrusion, and appliance leaks</li>
        <li><strong>Theft</strong></li>
        <li><strong>Personal liability</strong> — if someone is injured on your property</li>
        <li><strong>Additional living expenses (ALE)</strong> — unless you add the endorsement, and even then the limits are modest</li>
        <li><strong>Replacement cost coverage for personal property</strong> — contents are covered at actual cash value (ACV) only under the base policy</li>
        <li><strong>Ordinance or law coverage</strong> — code upgrade costs after a loss</li>
        <li><strong>Debris removal</strong> — beyond a basic sublimit</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage Limits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan increased its maximum dwelling coverage limit to $3 million in recent years
        (previously $1.5 million). However, high-value homes in coastal or hillside areas may still
        be underinsured at this limit. Personal property (contents) coverage is available but is
        typically a percentage of the dwelling limit — review the specific amounts on your policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Apply
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get declined by the private market first.</strong> The FAIR Plan requires proof
          that you were unable to obtain coverage through a standard or surplus lines carrier. Your
          agent or broker should provide a declination letter documenting the denials.
        </li>
        <li>
          <strong>Work through a licensed agent or broker.</strong> You cannot apply directly to the
          FAIR Plan. Any California-licensed property/casualty agent can submit an application on
          your behalf.
        </li>
        <li>
          <strong>Schedule the inspection.</strong> The FAIR Plan requires a property inspection before
          issuing coverage. The inspector will evaluate the condition of the property, clearance
          around structures, and basic habitability.
        </li>
        <li>
          <strong>Receive your quote and bind coverage.</strong> Once the inspection is approved,
          you&apos;ll receive a quote. If you accept, coverage is bound and the policy is issued.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Apply Early — Processing Times Are Long">
        <p>
          With the surge in applications, the FAIR Plan&apos;s processing times have stretched
          significantly. If you know your current policy is being non-renewed, apply at least 45–60
          days before expiration to avoid a lapse in coverage. A gap in coverage can trigger your
          mortgage lender to force-place insurance — which is far more expensive and covers only the
          lender&apos;s interest.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The DIC Policy: Making the FAIR Plan Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Difference in Conditions (DIC) policy is a companion policy designed to &ldquo;wrap
        around&rdquo; the FAIR Plan and fill its gaps. A good DIC policy adds:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Water damage and burst pipe coverage</li>
        <li>Theft protection</li>
        <li>Personal liability</li>
        <li>Additional living expenses (ALE)</li>
        <li>Broader personal property coverage</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several carriers offer DIC policies specifically designed to pair with the FAIR Plan. Your
        broker should be able to quote this as a package. The combined cost (FAIR Plan + DIC) will
        almost always exceed what a standard homeowner policy would have cost — but it provides
        something close to equivalent coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        FAIR Plan Financial Stability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan is backed by all admitted property/casualty insurers in California on a
        proportional basis. If the FAIR Plan&apos;s losses exceed its reserves, it can assess
        member companies to cover the shortfall. After the 2025 LA fires, questions arose about
        whether the FAIR Plan&apos;s exposure (estimated at nearly $5 billion) could trigger assessments
        that ripple through the entire insurance market. The Legislature has considered various
        backstop mechanisms, but as of now, the assessment model remains the primary funding
        mechanism.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing a Claim on a FAIR Plan Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claims process on a FAIR Plan policy follows the same California{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices regulations
        </Link>{' '}
        as any other insurer. The FAIR Plan must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Acknowledge your claim within 15 days</li>
        <li>Accept or deny within 40 days of receiving necessary documentation</li>
        <li>Pay undisputed amounts within 30 days of determination</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, after a large-scale event, the FAIR Plan — like any insurer — can be overwhelmed.
        Adjuster quality varies, and the same tactics used by standard carriers (lowball estimates,
        scope disputes, delayed payments) can occur with the FAIR Plan.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Aliff v. California FAIR Plan (2025): Smoke-Damage Limitations Struck Down
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For years, the FAIR Plan&apos;s policy form limited smoke-damage coverage to damage that
        caused a &ldquo;permanent physical change&rdquo; that was visible to the unaided eye. On
        that theory, the FAIR Plan routinely denied or minimized smoke claims — even when
        independent testing confirmed real contamination — because an adjuster could not see soot
        on a wall. In <em>Aliff v. California FAIR Plan Association</em> (2025), a California court
        held that this restrictive language was narrower than the coverage required by{' '}
        <strong>California Insurance Code &sect; 2070</strong>, the Standard Fire Policy statute
        that sets the floor for fire-insurance coverage in this state. An insurer can write broader
        coverage than &sect; 2070 requires — but it cannot write narrower coverage. Following{' '}
        <em>Aliff</em>, the FAIR Plan agreed to strike much of the restrictive smoke-damage language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What this means for FAIR Plan policyholders with smoke-damage claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The &ldquo;visible, permanent change&rdquo; hurdle is gone. Smoke, soot, and ash
          contamination is direct physical damage whether or not an adjuster can see it.
        </li>
        <li>
          Claims that were previously denied or closed on the old language may be eligible to be
          reopened or supplemented. See our guide to{' '}
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            supplemental claims
          </Link>.
        </li>
        <li>
          The ruling&apos;s rationale — that policy language cannot dip below &sect; 2070 — is
          not limited to the FAIR Plan. Any California admitted carrier that uses similar narrowing
          language on smoke claims is exposed to the same legal challenge.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        This summary is general information, not legal advice. Only a licensed California attorney
        can advise you on whether <em>Aliff</em> applies to your specific policy and claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Problems With FAIR Plan Claims
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>ACV-only personal property payments.</strong> The base FAIR Plan policy pays
          contents at actual cash value, which means depreciation is applied. If your 5-year-old
          couch cost $2,000 new, the ACV payment might be $800. See our guide on{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">ACV vs. RCV</Link>.
        </li>
        <li>
          <strong>No ordinance or law coverage.</strong> If your home must be rebuilt to current
          building codes, the additional cost is not covered under the base FAIR Plan. This can add
          tens of thousands to your rebuild. See{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">Ordinance or Law Coverage</Link>.
        </li>
        <li>
          <strong>Limited ALE.</strong> Even with the ALE endorsement, limits may be insufficient
          for extended displacement in high-cost areas.
        </li>
        <li>
          <strong>Underinsurance.</strong> If your dwelling limit does not reflect actual rebuild
          costs, you&apos;ll face a significant gap. The FAIR Plan does not automatically adjust
          limits to keep pace with construction cost inflation.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With a FAIR Plan Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can help you navigate the FAIR Plan&apos;s limitations and maximize
          your recovery under every available coverage. Free consultation, no fee unless we
          recover more.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>
    </>
  )
}
