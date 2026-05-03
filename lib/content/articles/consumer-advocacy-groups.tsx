import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Consumer Advocacy Groups for Insurance Policyholders',
  description:
    'Organizations that help policyholders fight insurance companies — United Policyholders, American Policyholder Association, Consumer Watchdog, and other groups that provide free resources, advocacy, and legal support.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        You Are Not Alone in This Fight
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you are fighting an insurance company over a claim, it can feel like you are one person
        against a corporation with unlimited resources. But there are organizations &mdash; nonprofits,
        advocacy groups, and consumer watchdogs &mdash; that exist specifically to help policyholders
        like you. Some provide free educational resources. Some file legal briefs on your behalf in
        court cases that affect everyone&apos;s rights. Some challenge unfair rate increases. Some
        lobby for better laws.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of these organizations will handle your individual claim for you (that is what a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or attorney does), but they provide tools, education, and systemic advocacy that strengthens
        every policyholder&apos;s position.
      </p>

      {/* ── UNITED POLICYHOLDERS ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        United Policyholders (UP)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://uphelp.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          uphelp.org
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        United Policyholders is the most important consumer advocacy organization in insurance today.
        Founded in 1991 by Amy Bach and Ina DeLong, UP is a 501(c)(3) nonprofit whose mission is to
        be &ldquo;a trustworthy and useful information resource and an effective voice for consumers of
        all types of insurance in all 50 states.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        UP does not accept funding from insurance companies. Their work is supported by donations,
        foundation grants, and a volunteer network of over 200 professionals including disaster
        survivors, attorneys, insurance professionals, CPAs, construction experts, and retired judges.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        What UP Provides
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Roadmap to Recovery&trade; program</strong> &mdash; free tools and resources for
          navigating insurance claims after disasters. Includes sample letters, claim tips, contractor
          vetting guides, and step-by-step recovery timelines.
        </li>
        <li>
          <strong>Disaster-specific help pages</strong> &mdash; after major events (California wildfires,
          hurricanes, floods), UP creates dedicated resource pages with event-specific guidance,
          community meetings, and volunteer expert access.
        </li>
        <li>
          <strong>The Amicus Project</strong> &mdash; UP has filed over 600 &ldquo;friend of the
          court&rdquo; briefs in state, federal, and U.S. Supreme Court cases advocating for
          policyholder rights. Several courts have adopted UP&apos;s arguments. See our{' '}
          <Link href="/resources/up-amicus-briefs-california" className="text-blue-700 underline hover:text-blue-900">
            separate article on UP&apos;s California amicus briefs
          </Link>{' '}
          for a detailed list.
        </li>
        <li>
          <strong>NAIC consumer representative</strong> &mdash; UP has served as an official consumer
          representative to the National Association of Insurance Commissioners since 2009, giving
          policyholders a voice in national insurance regulation.
        </li>
        <li>
          <strong>Claim guidance publications</strong> &mdash; detailed guides on topics including
          bad faith, underinsurance, contractor selection, contents claims, and dealing with adjusters.
        </li>
        <li>
          <strong>Community meetings and workshops</strong> &mdash; free events (often after disasters)
          where policyholders can get advice from attorneys, Public Adjusters, and other professionals.
        </li>
      </ul>

      <CalloutBox variant="tip" title="UP's Wildfire Resources Are Exceptional">
        <p>
          After every major California wildfire, United Policyholders activates disaster-specific
          resources at uphelp.org. Their 2025 California Wildfires page includes claim tips, community
          meeting schedules, contractor vetting resources, and connections to volunteer professionals.
          If you are dealing with a wildfire claim, this should be your first stop after securing
          professional representation.
        </p>
      </CalloutBox>

      {/* ── AMERICAN POLICYHOLDER ASSOCIATION ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        American Policyholder Association (APA)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://apassociation.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          apassociation.org
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The American Policyholder Association is a 501(c)(4) nonprofit watchdog organization that
        focuses on exposing insurance fraud perpetrated <em>against</em> policyholders &mdash; not
        the kind of fraud insurers talk about (policyholder fraud), but the kind they commit:
        systematic underpayment, biased inspections, and vendor manipulation.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        What APA Provides
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Monitoring and reporting</strong> on insurer fraud affecting property owners
        </li>
        <li>
          <strong>Advocacy for legislative change</strong> targeting systemic issues in claims handling
        </li>
        <li>
          <strong>Policyholder membership portal</strong> with tools and resources for claim disputes
        </li>
        <li>
          <strong>Industry accountability campaigns</strong> highlighting patterns of underpayment
          and vendor bias
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The APA does not accept donations from insurance companies. Their focus is specifically on
        the property loss adjustment sector &mdash; making them particularly relevant for homeowners
        and commercial property policyholders dealing with claim underpayments.
      </p>

      {/* ── CONSUMER WATCHDOG ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Consumer Watchdog
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://consumerwatchdog.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          consumerwatchdog.org
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consumer Watchdog is a California-based nonprofit that advocates for consumer interests in
        insurance, health care, energy, and political reform. Their founder, Harvey Rosenfield, wrote
        Proposition 103 in 1988 &mdash; the landmark ballot measure that gave California&apos;s
        Insurance Commissioner the power to approve or reject insurance rate increases and required
        insurers to roll back rates by 20%.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        What Consumer Watchdog Does for Policyholders
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Rate increase challenges</strong> &mdash; Consumer Watchdog intervenes in insurance
          rate proceedings, challenging excessive rate hikes. Their advocacy has saved California
          policyholders over $53 million in recent rate challenges against 21st Century, USAA, and
          Liberty Insurance.
        </li>
        <li>
          <strong>Proposition 103 enforcement</strong> &mdash; they monitor and defend the rate
          regulation framework that keeps California insurance rates subject to public review
        </li>
        <li>
          <strong>Legislative advocacy</strong> &mdash; opposing industry attempts to weaken consumer
          protections and supporting measures that strengthen policyholder rights
        </li>
        <li>
          <strong>Ballot initiatives</strong> &mdash; filing and supporting ballot measures on
          insurance issues, including measures to guarantee coverage for homeowners who fireproof
          their properties
        </li>
      </ul>

      <CalloutBox variant="legal" title="Consumer Watchdog's Focus Is Systemic, Not Individual">
        <p>
          Consumer Watchdog fights at the regulatory and legislative level &mdash; challenging rate
          increases, defending Proposition 103, and opposing industry deregulation efforts. They do
          not handle individual claims. But their work affects every California policyholder by
          keeping the regulatory framework that protects you intact.
        </p>
      </CalloutBox>

      {/* ── CONSUMER FEDERATION OF AMERICA ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Consumer Federation of America (CFA)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://consumerfed.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          consumerfed.org
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Consumer Federation of America is a national nonprofit with a dedicated insurance program
        led by J. Robert Hunter, a former Texas Insurance Commissioner and Federal Insurance
        Administrator. CFA publishes research on insurance industry practices, testifies before
        Congress and state legislatures, and collaborates with United Policyholders on amicus briefs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CFA&apos;s insurance work focuses on rate transparency, coverage adequacy, and opposing
        industry practices that harm consumers. They publish annual reports on homeowners insurance
        availability and affordability that are frequently cited in policy discussions.
      </p>

      {/* ── NAPIA ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        National Association of Public Insurance Adjusters (NAPIA)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://napia.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          napia.com
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        NAPIA is the professional association for Public Adjusters &mdash; the only type of adjuster
        that exclusively represents policyholders. While NAPIA is primarily a professional
        organization (not a direct consumer advocacy group), their work benefits policyholders by:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Maintaining ethical standards and a code of conduct for Public Adjusters</li>
        <li>Advocating for Public Adjuster licensing laws that protect consumers</li>
        <li>Providing a directory of qualified, vetted Public Adjusters by state</li>
        <li>Educating legislators about the role Public Adjusters play in the claims process</li>
      </ul>

      {/* ── CDI ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Department of Insurance (CDI) &mdash; Consumer Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://www.insurance.ca.gov" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          insurance.ca.gov
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CDI is not an advocacy group &mdash; it is the state regulatory agency. But its Consumer
        Services Division provides important resources:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Complaint filing</strong> &mdash; you can file a complaint against your insurer for
          Fair Claims violations (see our{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            CDI complaint guide
          </Link>)
        </li>
        <li>
          <strong>License verification</strong> &mdash; verify that your adjuster, agent, or Public
          Adjuster holds a valid California license
        </li>
        <li>
          <strong>Company complaint ratios</strong> &mdash; compare how many complaints each insurer
          receives relative to their market share
        </li>
        <li>
          <strong>Consumer hotline</strong> &mdash; 1-800-927-4357 for questions about your rights
        </li>
        <li>
          <strong>Rate filing access</strong> &mdash; public access to insurer rate filings and
          financial data
        </li>
      </ul>

      {/* ── NAIC ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        National Association of Insurance Commissioners (NAIC)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Website:</strong>{' '}
        <a href="https://naic.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
          naic.org
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The NAIC is the national organization of state insurance regulators. While it primarily serves
        regulators and the industry, its consumer resources include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>State-by-state insurance department contact information</li>
        <li>Consumer guides on homeowners, auto, health, and life insurance</li>
        <li>Company financial strength data and complaint information</li>
        <li>The NAIC Consumer Information Source (CIS) database for researching insurers</li>
      </ul>

      {/* ── HOW TO USE THESE RESOURCES ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Use These Resources Effectively
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Before a disaster:</strong> Review UP&apos;s Roadmap to Preparedness. Make sure
          you are properly insured before you need to file a claim.
        </li>
        <li>
          <strong>After a loss:</strong> Check UP&apos;s disaster-specific pages for event-relevant
          guidance. Attend their community meetings if available in your area.
        </li>
        <li>
          <strong>During a claim dispute:</strong> Use UP&apos;s claim guidance publications and
          sample letters. Research whether your specific issue has been addressed in one of their
          amicus briefs. File a CDI complaint if your insurer is violating the Fair Claims
          regulations.
        </li>
        <li>
          <strong>For systemic issues:</strong> Support Consumer Watchdog&apos;s rate challenges and
          legislative advocacy. Report patterns of insurer misconduct to the APA.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article lists organizations that provide resources and advocacy for insurance
        policyholders. Inclusion on this list is not an endorsement of any specific legal position
        or guarantee of service quality. None of these organizations provide individual legal advice
        or handle individual claims. For help with your specific claim, consult a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or attorney in your jurisdiction.
      </p>
    </>
  )
}
