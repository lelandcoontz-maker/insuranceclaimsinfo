import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Types of Insurance Policies: A Complete Guide to Residential, Commercial, and Specialty Coverage',
  description:
    'A comprehensive overview of every major property insurance policy type — HO-3, HO-4, HO-5, HO-6, HO-8, dwelling fire, commercial property, businessowners, flood, earthquake, DIC, builder\'s risk, and inland marine — with coverage details, exclusions, and California-specific considerations.',
  summary:
    'Property insurance comes in many forms, HO-3, HO-4, HO-5, HO-6, HO-8, dwelling fire, commercial, BOP, flood, earthquake, DIC, builder\'s risk, and inland marine, each with different coverage, exclusions, and California considerations. Know which type you actually hold.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all insurance policies are created equal. The type of policy you have determines what
        perils are covered, how your loss is valued, and what exclusions apply. Most homeowners have
        an HO-3 and assume it covers everything &mdash; it does not. Landlords, tenants, condo
        owners, business owners, and property investors each need a different policy form, and
        choosing the wrong one (or not understanding the one you have) can leave you with tens or
        hundreds of thousands of dollars in uncovered damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is a reference guide to every major property insurance policy type you are
        likely to encounter. For each one, we explain what it covers, who needs it, and where the
        gaps are. If you are filing a claim, start by identifying which policy type you have &mdash;
        it will tell you more about your coverage than anything else.
      </p>

      <CalloutBox variant="info" title="Open Perils vs. Named Perils">
        <p>
          Before diving in, understand the single most important distinction in property insurance.
          An <strong>open-perils</strong> (sometimes called &ldquo;all-risk&rdquo;) policy covers
          any cause of loss <em>unless it is specifically excluded</em>. A{' '}
          <strong>named-perils</strong> policy covers <em>only</em> the causes of loss that are
          specifically listed. The burden of proof is different: under open perils, the insurer must
          prove an exclusion applies; under named perils, the policyholder must prove the loss was
          caused by a listed peril. This distinction runs through every policy type discussed below.
        </p>
      </CalloutBox>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: THE CALIFORNIA STANDARD FIRE POLICY
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Foundation: California Standard Fire Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every fire insurance policy issued in California must conform to the California Standard
        Fire Policy, codified at Insurance Code &sect; 2070&ndash;2071. This statutory form sets
        the minimum terms for fire coverage in the state. Your homeowner or commercial policy is
        built on top of this foundation &mdash; it can add coverage, but it cannot take away the
        protections that the Standard Fire Policy provides.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance Code &sect; 2070 requires that every fire insurance policy &ldquo;shall be in
        the standard form&rdquo; set forth in the statute. This means carriers cannot quietly
        delete basic fire coverage protections through endorsements or policy amendments. The
        Standard Fire Policy covers direct loss by fire and lightning, and it establishes
        fundamental policyholder rights that apply regardless of what the carrier&rsquo;s
        proprietary policy language says.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding this matters because in a coverage dispute, the statutory standard can
        override conflicting policy language. If your carrier&rsquo;s policy form attempts to
        impose a condition or limitation that conflicts with the Standard Fire Policy, the statute
        controls. This is a powerful tool in the hands of a knowledgeable policyholder or public
        adjuster.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: RESIDENTIAL POLICIES
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Residential Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Residential insurance policies are designated by the Insurance Services Office (ISO) with
        &ldquo;HO&rdquo; form numbers. Each form is designed for a specific type of occupancy and
        ownership. Using the wrong form &mdash; or not understanding which form you have &mdash;
        is one of the most common sources of coverage disputes.
      </p>

      {/* ───────── HO-3 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO-3: Special Form (The Standard Homeowner Policy)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-3 is the most common homeowner policy in the United States. If you own a
        single-family home and have insurance, you almost certainly have some version of an HO-3.
        It is the policy form that most articles on this site reference, and it is the baseline
        against which all other residential forms should be compared.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling)</strong> &mdash; Open perils. Covers the structure of your
          home against all causes of loss unless specifically excluded. This is the broadest
          standard coverage available for a dwelling.
        </li>
        <li>
          <strong>Coverage B (Other Structures)</strong> &mdash; Open perils. Covers detached
          structures like garages, fences, sheds, and retaining walls. Typically set at 10% of
          your Coverage A limit.
        </li>
        <li>
          <strong>Coverage C (Personal Property)</strong> &mdash; Named perils only. Your
          belongings are covered only against the 16 perils specifically listed in the policy:
          fire, lightning, windstorm, hail, explosion, riot, aircraft, vehicles, smoke, vandalism,
          theft, falling objects, weight of ice/snow/sleet, accidental discharge of water,
          sudden tearing/cracking/burning of certain systems, and volcanic eruption. If the cause
          of loss is not on this list, your personal property is not covered under a standard HO-3.
        </li>
        <li>
          <strong>Coverage D (Loss of Use / ALE)</strong> &mdash; Additional living expenses if
          your home is uninhabitable due to a covered loss.
        </li>
        <li>
          <strong>Coverage E (Personal Liability)</strong> &mdash; Liability protection if someone
          is injured on your property or you damage someone else&rsquo;s property.
        </li>
        <li>
          <strong>Coverage F (Medical Payments)</strong> &mdash; Medical payments to others
          regardless of fault, subject to a per-person limit.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it does not cover:</strong> Standard HO-3 exclusions include flood, earthquake,
        earth movement, ordinance or law (unless endorsed), mold (often sublimited or excluded),
        neglect, intentional loss, war, nuclear hazard, and government action. The exclusions
        section is just as important as the coverage section &mdash; read it carefully.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The critical gap:</strong> The split between open perils on the dwelling and named
        perils on personal property catches many policyholders off guard. Your roof might be
        covered for water damage from a burst pipe (open perils), but the furniture ruined by the
        same water may not be covered unless &ldquo;accidental discharge or overflow of water or
        steam&rdquo; is one of the named perils &mdash; and even then, the named-peril language
        often has restrictions that the open-peril dwelling coverage does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed walkthrough of how to read your HO-3 policy, see our{' '}
        <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline">
          Policy Interpretation Guide
        </Link>.
      </p>

      {/* ───────── HO-4 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO-4: Tenants Form (Renters Insurance)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-4 is designed for tenants who rent their living space. Because the tenant does not
        own the building, there is no Coverage A (dwelling) or Coverage B (other structures). The
        HO-4 covers the tenant&rsquo;s personal property, liability, and additional living
        expenses &mdash; nothing else.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage C (Personal Property)</strong> &mdash; Named perils. The same 16 perils
          listed in the HO-3 Coverage C. This is the core of a renter&rsquo;s policy.
        </li>
        <li>
          <strong>Coverage D (Loss of Use / ALE)</strong> &mdash; If the rental unit becomes
          uninhabitable due to a covered loss, the HO-4 pays for temporary housing, meals, and
          related expenses.
        </li>
        <li>
          <strong>Coverage E (Personal Liability)</strong> &mdash; Liability protection, typically
          $100,000 to $300,000. This is often the most valuable part of a renter&rsquo;s policy.
        </li>
        <li>
          <strong>Coverage F (Medical Payments)</strong> &mdash; Medical payments to others.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it does not cover:</strong> The building itself. If a pipe bursts and damages
        the walls, floors, and cabinets, that is the landlord&rsquo;s claim under the
        landlord&rsquo;s dwelling fire policy (DP-3). The tenant&rsquo;s HO-4 only covers the
        tenant&rsquo;s personal belongings damaged by the same event. This split creates
        coordination problems that are discussed in detail in our{' '}
        <Link href="/resources/landlord-vs-tenant-claims" className="text-[#2E74B5] underline">
          Landlord vs. Tenant Claims
        </Link>{' '}
        article.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Who needs it:</strong> Every renter. Renters insurance is inexpensive &mdash;
        typically $15 to $30 per month &mdash; and provides critical protection for personal
        property and liability. Many landlords require tenants to carry an HO-4 as a condition of
        the lease, and they should.
      </p>

      {/* ───────── HO-5 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO-5: Comprehensive Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-5 is the broadest standard homeowner policy available. Unlike the HO-3, which
        provides open-perils coverage only on the dwelling and named-perils coverage on personal
        property, the HO-5 provides <strong>open-perils coverage on both the dwelling and
        personal property</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling)</strong> &mdash; Open perils, same as HO-3.
        </li>
        <li>
          <strong>Coverage B (Other Structures)</strong> &mdash; Open perils, same as HO-3.
        </li>
        <li>
          <strong>Coverage C (Personal Property)</strong> &mdash; <strong>Open perils</strong>.
          This is the key difference. Under an HO-5, your belongings are covered against any cause
          of loss unless specifically excluded. You do not have to prove the loss was caused by one
          of the 16 named perils &mdash; the burden shifts to the insurer to prove an exclusion
          applies.
        </li>
        <li>
          <strong>Coverages D, E, and F</strong> &mdash; Same as HO-3.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Why it matters:</strong> The HO-5 eliminates the most frustrating coverage gap in
        the HO-3 &mdash; the named-perils limitation on personal property. Under an HO-3, if your
        laptop is damaged by a cause of loss not on the named-perils list (such as a power surge
        from utility work), you have no coverage. Under an HO-5, the same loss is covered unless
        the insurer can point to a specific exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The trade-off:</strong> HO-5 policies cost more than HO-3 policies &mdash;
        typically 5% to 15% more in premium. Not every carrier offers them, and some carriers
        offer them only for newer or higher-value homes. But for policyholders who want the
        broadest available coverage with the fewest gaps, the HO-5 is the gold standard for
        residential insurance.
      </p>

      {/* ───────── HO-6 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO-6: Condo Unit Owners Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-6 is designed specifically for condominium unit owners. Condos present a unique
        insurance challenge: the homeowners association (HOA) carries a master policy on the
        building&rsquo;s common elements and structure, while individual unit owners need their own
        coverage for the interior of their unit, personal property, and liability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling / Unit Improvements)</strong> &mdash; Covers the interior
          of your unit, often described as &ldquo;walls-in&rdquo; coverage. This includes
          flooring, cabinets, countertops, fixtures, built-in appliances, and any improvements or
          upgrades you have made. Named perils in the standard form, though many carriers offer
          open-perils endorsements.
        </li>
        <li>
          <strong>Coverage C (Personal Property)</strong> &mdash; Named perils. Same 16 perils as
          the HO-3.
        </li>
        <li>
          <strong>Coverage D (Loss of Use / ALE)</strong> &mdash; Additional living expenses if
          the unit is uninhabitable.
        </li>
        <li>
          <strong>Loss Assessment Coverage</strong> &mdash; This is unique to the HO-6. If the
          HOA levies a special assessment against unit owners to cover a loss that exceeds the
          master policy&rsquo;s limits, your HO-6 can help pay your share. The standard loss
          assessment limit is often $1,000, but it can and should be endorsed higher.
        </li>
        <li>
          <strong>Coverages E and F (Liability and Medical Payments)</strong> &mdash; Same as
          other HO forms.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The coordination problem:</strong> The biggest issue with condo claims is figuring
        out where the HOA&rsquo;s master policy stops and the unit owner&rsquo;s HO-6 begins. The
        CC&amp;Rs (Covenants, Conditions &amp; Restrictions) for the association usually define
        this boundary, and it varies. Some CC&amp;Rs make the HOA responsible for everything
        except the unit owner&rsquo;s personal property and improvements. Others make the unit
        owner responsible for everything inside the drywall. Getting this wrong means either a gap
        in coverage or a fight between two insurers over who pays.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on condo-specific claim issues, see{' '}
        <Link href="/resources/condo-hoa-claims" className="text-[#2E74B5] underline">
          Condo and HOA Claims
        </Link>{' '}
        and{' '}
        <Link href="/resources/loss-assessment-coverage" className="text-[#2E74B5] underline">
          Loss Assessment Coverage
        </Link>.
      </p>

      {/* ───────── HO-8 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO-8: Modified Coverage Form (Older and Historic Homes)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-8 is designed for older or historic homes where the cost to replace the home using
        original materials and construction methods would far exceed the home&rsquo;s market value.
        Think Victorian-era homes with hand-carved moldings, plaster walls, and obsolete
        construction techniques. A standard replacement cost policy on such a home would be
        prohibitively expensive, so the HO-8 modifies how losses are valued.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A (Dwelling)</strong> &mdash; Named perils only (not open perils like
          the HO-3). Losses are typically paid on an actual cash value (ACV) basis or a
          &ldquo;functional replacement cost&rdquo; basis, meaning the insurer will pay to replace
          the damaged component with modern materials that serve the same function &mdash; not to
          replicate the original craftsmanship.
        </li>
        <li>
          <strong>Coverage C (Personal Property)</strong> &mdash; Named perils, similar to other
          HO forms.
        </li>
        <li>
          <strong>Coverages D, E, and F</strong> &mdash; Same as other HO forms, though limits
          may be lower.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The key limitation:</strong> The HO-8 is significantly narrower than the HO-3. It
        uses named perils instead of open perils for the dwelling, and it does not guarantee
        replacement with identical materials. If your 1920s bungalow has original hardwood floors
        and plaster walls, an HO-8 policy may only pay to replace them with laminate and drywall.
        The functional replacement cost approach can leave a homeowner with a very different house
        than the one that was damaged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Who has one:</strong> HO-8 policies are most common on pre-war homes, historic
        properties, and homes in older urban neighborhoods where replacement cost exceeds market
        value. If you own such a home, check your policy form number carefully &mdash; you may
        have been placed in an HO-8 without fully understanding the trade-offs.
      </p>

      <CalloutBox variant="warning" title="Check Your Policy Form Number">
        <p>
          The form number of your policy &mdash; HO-3, HO-5, HO-6, HO-8, etc. &mdash; is
          printed on the policy itself, usually in the footer or header of the main policy
          booklet. It may also appear on your declarations page. If you do not know what form
          you have, look it up before you have a claim. The difference between an HO-3 and an
          HO-8, for example, could mean the difference between full replacement cost coverage
          and a check that barely covers half the damage.
        </p>
      </CalloutBox>

      {/* ───────── DP Policies ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        DP-1, DP-2, DP-3: Dwelling Fire Policies (Landlord Policies)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dwelling fire policies &mdash; designated DP-1, DP-2, and DP-3 &mdash; are designed for
        properties that are not owner-occupied. If you own a rental property, a vacant property,
        or a property used seasonally, you likely need a dwelling fire policy rather than a
        standard homeowner policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>DP-1 (Basic Form):</strong> The most limited dwelling fire policy. Named perils
        only, and the list is short: fire, lightning, and internal explosion. Extended coverage
        endorsements can add windstorm, hail, riot, smoke, aircraft, vehicles, and volcanic
        eruption. Losses are typically paid on an ACV basis. The DP-1 is bare-bones coverage,
        often used for vacant properties or properties in high-risk areas where broader coverage
        is unavailable or unaffordable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>DP-2 (Broad Form):</strong> A step up from the DP-1. Named perils, but the list
        is longer &mdash; similar to the named perils in an HO-3&rsquo;s Coverage C. Can be
        written on either an ACV or replacement cost basis. More commonly used for occupied rental
        properties where the landlord wants decent coverage without paying for an open-perils form.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>DP-3 (Special Form):</strong> The broadest dwelling fire policy. Open perils on
        the dwelling, named perils on personal property (if any is covered &mdash; most landlord
        DP-3 policies do not cover tenant belongings). The DP-3 is the landlord&rsquo;s
        equivalent of the HO-3 and is the standard recommendation for any landlord who wants
        meaningful protection for a rental property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What dwelling fire policies do not cover:</strong> Tenant personal property. The
        landlord&rsquo;s DP policy covers the building and the landlord&rsquo;s property inside it
        (appliances the landlord provides, for example), but it does <em>not</em> cover anything
        belonging to the tenant. The tenant needs a separate{' '}
        <Link href="/resources/landlord-vs-tenant-claims" className="text-[#2E74B5] underline">
          HO-4 renter&rsquo;s policy
        </Link>{' '}
        for that.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dwelling fire policies also typically do not include personal liability coverage for the
        landlord. A separate landlord liability policy or umbrella policy is usually needed.
      </p>

      {/* ───────── Endorsements ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Guaranteed and Extended Replacement Cost Endorsements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are not separate policy types but rather endorsements that modify the loss settlement
        provisions of an existing policy. They are critically important, and the difference
        between having one and not having one can amount to hundreds of thousands of dollars after
        a major loss.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Extended Replacement Cost</strong> &mdash; Provides a buffer above your Coverage
          A limit, typically 25% to 50%. If your dwelling limit is $500,000 and you have a 50%
          extended replacement cost endorsement, the insurer will pay up to $750,000 to rebuild.
          This is the most common upgrade and is included by default in many California homeowner
          policies.
        </li>
        <li>
          <strong>Guaranteed (100% or Unlimited) Replacement Cost</strong> &mdash; The insurer
          agrees to pay whatever it actually costs to rebuild your home, regardless of the Coverage
          A limit. This is the strongest protection available, and it was more widely offered
          before the California wildfire crises of 2017, 2018, 2020, and 2025. Many carriers have
          since pulled back or stopped offering guaranteed replacement cost altogether.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051.5 and &sect; 2051 govern how replacement cost is
        calculated. Under &sect; 2051.5(b), if the insurer does not offer a guaranteed or extended
        replacement cost endorsement, it must provide specific disclosures about the limitations of
        standard replacement cost coverage. These disclosures are required at policy inception and
        renewal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full breakdown of how these endorsements work and why they matter, see{' '}
        <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] underline">
          Replacement Cost vs. Guaranteed Replacement Cost
        </Link>.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: COMMERCIAL POLICIES
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property insurance uses a different set of ISO forms than residential coverage.
        The forms are modular &mdash; a commercial policy is assembled from separate coverage
        forms, causes of loss forms, and conditions forms, rather than being a single integrated
        document like an HO-3. This modular structure gives more flexibility but also more
        complexity.
      </p>

      {/* ───────── CP 10 00 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 10 00: Building and Personal Property Coverage Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CP 10 00 is the standard commercial property coverage form. It defines what property
        is covered &mdash; the building, business personal property, and personal property of
        others &mdash; but it does <em>not</em> define which perils are covered. For that, a
        separate &ldquo;causes of loss&rdquo; form is attached to the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building</strong> &mdash; The structure, permanently installed fixtures,
          outdoor fixtures, machinery and equipment used for building maintenance, and additions
          under construction.
        </li>
        <li>
          <strong>Business Personal Property</strong> &mdash; Furniture, equipment, stock,
          supplies, and all other property owned by the insured and used in the business. This
          category also includes tenant improvements and betterments if the insured is a tenant.
        </li>
        <li>
          <strong>Personal Property of Others</strong> &mdash; Property belonging to others that
          is in the insured&rsquo;s care, custody, or control. Coverage is limited and typically
          only provides protection while the property is on the insured premises.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Causes of loss forms:</strong> The CP 10 00 is paired with one of three causes of
        loss forms:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CP 10 10 (Basic Form)</strong> &mdash; Named perils: fire, lightning, explosion,
          windstorm, hail, smoke, aircraft, vehicles, riot, vandalism, sprinkler leakage, sinkhole
          collapse, and volcanic action.
        </li>
        <li>
          <strong>CP 10 20 (Broad Form)</strong> &mdash; Adds several perils to the basic list,
          including falling objects, weight of snow/ice/sleet, and water damage from certain
          sources.
        </li>
        <li>
          <strong>CP 10 30 (Special Form)</strong> &mdash; Open perils. Covers all causes of loss
          unless specifically excluded. This is the commercial equivalent of the HO-3&rsquo;s
          open-perils dwelling coverage and is the form most commercial policyholders should want.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Always Request CP 10 30">
        <p>
          If you are a business owner purchasing commercial property insurance, ask for the
          CP 10 30 (Special Form) causes of loss form. The difference in premium between the
          basic and special forms is often modest, but the difference in coverage is enormous.
          Under the special form, the insurer must prove an exclusion applies &mdash; under the
          basic form, you must prove the loss was caused by a listed peril. In a contested claim,
          that burden of proof difference is everything.
        </p>
      </CalloutBox>

      {/* ───────── CP 10 30 ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CP 10 30: Causes of Loss &mdash; Special Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CP 10 30 deserves its own discussion because it is the most important causes of loss
        form in commercial insurance. It provides open-perils coverage, meaning it covers all
        risks of direct physical loss unless a specific exclusion applies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Key exclusions in the CP 10 30:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Ordinance or law (unless endorsed)</li>
        <li>Earth movement (earthquake, landslide, mine subsidence)</li>
        <li>Governmental action</li>
        <li>Nuclear hazard</li>
        <li>Power failure originating off-premises</li>
        <li>War and military action</li>
        <li>Water &mdash; including flood, surface water, tidal water, and sewer backup (unless endorsed)</li>
        <li>Fungus, wet rot, dry rot, and bacteria (often sublimited)</li>
        <li>Virus or bacteria (added in recent years to many forms)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CP 10 30 also includes several important coverage extensions for things like debris
        removal, preservation of property, fire department service charges, pollutant cleanup,
        and increased cost of construction. These extensions are built into the form but are
        subject to sublimits that may be inadequate for a large loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Coinsurance:</strong> Commercial property policies almost always include a
        coinsurance clause, which requires the insured to maintain coverage equal to a specified
        percentage (usually 80%, 90%, or 100%) of the property&rsquo;s value. If you are
        underinsured, the coinsurance penalty reduces your claim payment proportionally &mdash;
        even on a partial loss. This is one of the most punishing provisions in commercial
        insurance and catches many business owners off guard.
      </p>

      {/* ───────── Businessowners Policy ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        BP: Businessowners Policy (BOP)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The businessowners policy &mdash; commonly called a BOP &mdash; is a package policy
        designed for small to mid-sized businesses. It combines property coverage, general
        liability coverage, and business income/extra expense coverage into a single policy,
        similar to how a homeowner policy bundles property and liability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building and Business Personal Property</strong> &mdash; The property coverage
          in a BOP is similar to the CP 10 00 form but uses special-form (open perils) coverage
          as the default. This is a significant advantage over buying a standalone commercial
          property policy, which may default to basic or broad form.
        </li>
        <li>
          <strong>Business Income and Extra Expense</strong> &mdash; Included by default. Covers
          lost income and extra costs to continue operations during a covered loss.
        </li>
        <li>
          <strong>General Liability</strong> &mdash; Bodily injury and property damage liability,
          personal and advertising injury liability, and medical payments.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Advantages:</strong> Simplicity and cost. A BOP is easier to understand than a
        custom commercial package policy, and it is typically less expensive because the coverages
        are bundled. For a small retail store, office, or restaurant, a BOP often provides
        adequate coverage without the complexity of assembling separate forms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Limitations:</strong> BOPs are not available to all businesses. They are typically
        limited to businesses under a certain size (measured by revenue, square footage, or
        employee count). Larger or more complex operations &mdash; manufacturing facilities,
        contractors, businesses with significant inventory &mdash; usually need a custom
        commercial package policy instead. BOPs also offer less flexibility in tailoring coverage
        limits and endorsements.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: SPECIALTY POLICIES
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Specialty Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner and commercial policies exclude certain perils entirely &mdash; most
        notably flood and earthquake. Other types of property or construction activities require
        coverage forms that do not fit neatly into the standard residential or commercial
        frameworks. The following specialty policies fill those gaps.
      </p>

      {/* ───────── Flood ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Flood Insurance: NFIP and Private Flood Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Flood damage is <strong>always excluded</strong> from standard homeowner and commercial
        property policies. This is not optional, and there is no endorsement that adds flood
        coverage to your HO-3 or commercial property form. If you want flood coverage, you need a
        separate flood policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>NFIP (National Flood Insurance Program):</strong> The federal program administered
        by FEMA. NFIP policies are available to any property in a community that participates in
        the program (most communities do). Coverage limits are $250,000 for a residential
        dwelling and $100,000 for contents. Commercial limits are $500,000 for the building and
        $500,000 for contents. NFIP policies have a 30-day waiting period from purchase before
        coverage begins.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Limitations of NFIP:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Maximum coverage of $250,000 for dwelling &mdash; far below the value of many California homes</li>
        <li>Basement coverage is severely limited (only structural elements, not finished spaces)</li>
        <li>No coverage for additional living expenses</li>
        <li>No coverage for loss of use or business income</li>
        <li>Contents are covered at ACV only, not replacement cost</li>
        <li>Detached structures are not covered under the dwelling limit (they must be insured separately)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Private Flood Insurance:</strong> Private carriers have entered the flood market
        offering policies with higher limits, broader coverage, replacement cost valuation, and
        shorter waiting periods. Private flood policies may also cover additional living expenses,
        pool repairs, and landscaping that NFIP does not. However, private flood carriers can
        non-renew or change terms, while NFIP coverage is backed by the federal government and
        is generally always available.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed comparison, see our{' '}
        <Link href="/resources/flood-insurance-nfip-vs-private" className="text-[#2E74B5] underline">
          Flood Insurance: NFIP vs. Private
        </Link>{' '}
        article.
      </p>

      <CalloutBox variant="warning" title="Flood Is Always a Separate Policy">
        <p>
          No matter what type of property policy you have &mdash; HO-3, HO-5, DP-3, commercial,
          or BOP &mdash; flood is excluded. If your home was damaged by rising water, mudflow from
          a wildfire burn scar, storm surge, or any other flood-type event, you need a flood
          policy to be covered. Do not assume your homeowner policy will pay.
        </p>
      </CalloutBox>

      {/* ───────── Earthquake ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Earthquake Insurance: CEA and Private Earthquake Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Like flood, earthquake is <strong>always excluded</strong> from standard property
        policies. In California, this exclusion is particularly consequential given the
        state&rsquo;s seismic risk. Earthquake coverage must be purchased separately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>CEA (California Earthquake Authority):</strong> The CEA is a publicly managed,
        privately funded organization that provides residential earthquake insurance through
        participating carriers. It is the largest provider of residential earthquake insurance in
        California. CEA policies cover:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Dwelling damage from earthquake and aftershocks</li>
        <li>Personal property (with a separate deductible)</li>
        <li>Loss of use / additional living expenses (limited)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>CEA limitations:</strong> CEA policies have high deductibles &mdash; typically 5%
        to 25% of the dwelling coverage limit. On a $700,000 home with a 15% deductible, the
        first $105,000 of damage comes out of your pocket. CEA policies also exclude many items
        that homeowners might expect to be covered: pools, patios, fences, detached structures,
        driveways, retaining walls, and masonry veneer are typically excluded or sublimited.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Private Earthquake Insurance:</strong> Private carriers offer earthquake policies
        with lower deductibles, broader coverage, and fewer exclusions than the CEA. Private
        earthquake policies may cover pools, detached structures, and landscaping. They may also
        offer higher loss-of-use limits and replacement cost valuation for contents. The trade-off
        is higher premiums and the risk that a private carrier may pull out of the market or become
        insolvent after a major earthquake.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 10081&ndash;10089.4 requires every residential property
        insurer to offer earthquake coverage or provide a written notice that the policyholder has
        declined it. This is a mandatory offer requirement, not a mandatory purchase requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more detail, see our{' '}
        <Link href="/resources/earthquake-insurance" className="text-[#2E74B5] underline">
          Earthquake Insurance
        </Link>{' '}
        article.
      </p>

      {/* ───────── DIC ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        DIC: Difference in Conditions Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Difference in Conditions (DIC) policy is a gap-filling policy designed to supplement a
        limited primary policy. In California, DIC policies are most commonly paired with{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          FAIR Plan
        </Link>{' '}
        policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan only covers fire and a few related perils. It does not cover theft, water
        damage, liability, or many other perils that a standard homeowner policy would cover. A
        DIC policy fills these gaps by providing the coverages that the FAIR Plan excludes,
        effectively assembling a coverage package that approximates a standard homeowner policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What a DIC typically covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Theft</li>
        <li>Water damage (burst pipes, appliance leaks, rain intrusion)</li>
        <li>Personal liability</li>
        <li>Additional living expenses beyond the FAIR Plan&rsquo;s limits</li>
        <li>Personal property at replacement cost</li>
        <li>Falling objects, weight of ice/snow, vehicle damage, and other standard HO-3 perils</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Important considerations:</strong> DIC policies are non-standard &mdash; there is
        no single ISO form. Each carrier writes its own DIC form, and the terms can vary
        significantly. Some DIC policies are very broad; others have exclusions and limitations
        that leave unexpected gaps. Read the DIC policy just as carefully as you would read any
        other policy. Also, DIC policies and FAIR Plan policies are issued by different companies,
        which creates coordination challenges during a claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on DIC coverage and how it works with the FAIR Plan, see our{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">
          DIC Policies
        </Link>{' '}
        guide.
      </p>

      {/* ───────── Builder's Risk ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Builder&rsquo;s Risk Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk insurance &mdash; also called course of construction coverage
        &mdash; is a specialized property policy that covers buildings and materials during
        construction, renovation, or remodeling. It is a temporary policy that covers the
        project from groundbreaking (or renovation start) through completion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The structure under construction (including foundations, framing, and partially completed work)</li>
        <li>Materials and supplies on-site or in transit to the site</li>
        <li>Temporary structures used during construction (scaffolding, construction trailers)</li>
        <li>Soft costs (architectural fees, permits, financing costs) if endorsed</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it typically excludes:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Faulty workmanship or defective materials (the resulting damage may be covered, but not the cost to redo the defective work itself)</li>
        <li>Theft of materials left unsecured (some policies require fencing or security)</li>
        <li>Damage from earth movement or flood (same as standard property policies)</li>
        <li>Wear and tear, gradual deterioration, or weather damage to exposed materials</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Who needs it:</strong> Homeowners doing major renovations, contractors building
        new homes, and developers constructing commercial buildings. Standard homeowner policies
        typically exclude or limit coverage for construction activities, and a standard commercial
        policy does not cover a building that does not yet exist. Builder&rsquo;s risk fills that
        gap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more detail, see our{' '}
        <Link href="/resources/builders-risk" className="text-[#2E74B5] underline">
          Builder&rsquo;s Risk
        </Link>{' '}
        article.
      </p>

      {/* ───────── Inland Marine ───────── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inland Marine Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine insurance is one of the most misunderstood types of property coverage. Despite
        the name, it has nothing to do with boats. &ldquo;Marine&rdquo; refers to the historical
        origin of the coverage in ocean marine (cargo) insurance. Inland marine evolved to cover
        property that moves, property in transit, or property that does not fit neatly into standard
        property policy categories.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What it covers:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contractors&rsquo; equipment and tools</strong> &mdash; Tools and equipment
          that travel from job site to job site are typically excluded or sublimited under
          standard commercial property policies. An inland marine &ldquo;contractors&rsquo;
          equipment&rdquo; floater covers them wherever they go.
        </li>
        <li>
          <strong>Fine arts, jewelry, musical instruments, and collectibles</strong> &mdash;
          High-value personal property that exceeds the special limits of liability in a standard
          homeowner policy.
        </li>
        <li>
          <strong>Electronic data processing equipment</strong> &mdash; Computers and tech
          equipment with values that exceed standard personal property sublimits.
        </li>
        <li>
          <strong>Property in transit</strong> &mdash; Goods being shipped or transported.
        </li>
        <li>
          <strong>Installation floaters</strong> &mdash; Materials being installed at a customer
          site.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine policies are typically written on an open-perils basis with very few
        exclusions, making them some of the broadest property coverage available. They are also
        &ldquo;floater&rdquo; policies, meaning coverage follows the property wherever it goes
        rather than being tied to a specific location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more information, see our{' '}
        <Link href="/resources/inland-marine" className="text-[#2E74B5] underline">
          Inland Marine
        </Link>{' '}
        article.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: CALIFORNIA FAIR PLAN
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California FAIR Plan: Insurer of Last Resort
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan deserves special mention in any discussion of policy types because
        an increasing number of California homeowners are being forced onto it. As major carriers
        like State Farm, Allstate, and USAA have pulled back from high-risk areas, the FAIR Plan
        has grown to over 680,000 policies &mdash; more than double its size from just a few years
        ago.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan is <em>not</em> a standard homeowner policy. It is a bare-bones fire
        insurance policy that covers fire, lightning, internal explosion, and smoke from a hostile
        fire. It does not cover theft, water damage, liability, or many other perils that a
        standard HO-3 would cover. If you have a FAIR Plan policy, you almost certainly need a{' '}
        <Link href="/resources/dic-policies" className="text-[#2E74B5] underline">
          DIC (Difference in Conditions)
        </Link>{' '}
        policy to fill the gaps.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan is funded by assessments on all property insurers doing business in
        California, proportional to their market share. It is not funded by taxpayers. However,
        after a catastrophic loss, the assessments on private carriers can be passed through to
        policyholders as surcharges &mdash; meaning every California property insurance customer
        ultimately helps pay for FAIR Plan losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete guide, see our{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan
        </Link>{' '}
        article.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: CHOOSING THE RIGHT POLICY
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Choose the Right Policy Type
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The right policy depends on your situation. Here is a quick reference:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Owner-occupied single-family home:</strong> HO-3 (standard) or HO-5
          (comprehensive). Add extended or guaranteed replacement cost, ordinance or law, and
          scheduled personal property endorsements as needed.
        </li>
        <li>
          <strong>Renter:</strong> HO-4. Make sure the personal property limit reflects what you
          actually own, and choose replacement cost valuation over ACV.
        </li>
        <li>
          <strong>Condo owner:</strong> HO-6. Review your CC&amp;Rs to understand the boundary
          between the HOA master policy and your unit owner policy. Increase the loss assessment
          limit above the standard $1,000.
        </li>
        <li>
          <strong>Older or historic home:</strong> Check whether you have an HO-8. If so,
          understand the ACV or functional replacement cost limitations. Consider whether you can
          obtain an HO-3 from a specialty carrier instead.
        </li>
        <li>
          <strong>Landlord (rental property):</strong> DP-3 (open perils). Require tenants to
          carry HO-4 policies as a condition of the lease.
        </li>
        <li>
          <strong>Small business:</strong> BOP for simplicity, or a custom commercial package
          (CP 10 00 + CP 10 30) for more control.
        </li>
        <li>
          <strong>FAIR Plan policyholder:</strong> Pair with a DIC policy. Do not assume the FAIR
          Plan alone provides adequate coverage.
        </li>
        <li>
          <strong>Everyone in California:</strong> Consider separate flood and earthquake policies.
          Both perils are excluded from every standard property policy &mdash; residential and
          commercial.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Review Your Policy Before a Loss">
        <p>
          The worst time to learn what type of policy you have is after a loss. Pull out your
          policy, find the form number (HO-3, HO-5, HO-6, HO-8, DP-3, etc.), and read the
          coverages and exclusions now. If you find gaps, talk to your agent about endorsements
          or supplemental policies before you need them. If you need help understanding what you
          have, a licensed public adjuster can review your policy and explain the coverage in
          plain English.
        </p>
      </CalloutBox>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: QUICK REFERENCE TABLE
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Quick Reference: Policy Types at a Glance
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Policy Form</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Designed For</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Dwelling Coverage</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Personal Property</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">HO-3</td>
              <td className="border border-gray-300 px-4 py-2">Owner-occupied homes</td>
              <td className="border border-gray-300 px-4 py-2">Open perils</td>
              <td className="border border-gray-300 px-4 py-2">Named perils</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">HO-4</td>
              <td className="border border-gray-300 px-4 py-2">Renters / tenants</td>
              <td className="border border-gray-300 px-4 py-2">None</td>
              <td className="border border-gray-300 px-4 py-2">Named perils</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">HO-5</td>
              <td className="border border-gray-300 px-4 py-2">Owner-occupied homes</td>
              <td className="border border-gray-300 px-4 py-2">Open perils</td>
              <td className="border border-gray-300 px-4 py-2">Open perils</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">HO-6</td>
              <td className="border border-gray-300 px-4 py-2">Condo unit owners</td>
              <td className="border border-gray-300 px-4 py-2">Named perils (walls-in)</td>
              <td className="border border-gray-300 px-4 py-2">Named perils</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">HO-8</td>
              <td className="border border-gray-300 px-4 py-2">Older / historic homes</td>
              <td className="border border-gray-300 px-4 py-2">Named perils (ACV / functional)</td>
              <td className="border border-gray-300 px-4 py-2">Named perils</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">DP-1</td>
              <td className="border border-gray-300 px-4 py-2">Rental / vacant properties</td>
              <td className="border border-gray-300 px-4 py-2">Named perils (basic)</td>
              <td className="border border-gray-300 px-4 py-2">Not included</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">DP-3</td>
              <td className="border border-gray-300 px-4 py-2">Rental properties</td>
              <td className="border border-gray-300 px-4 py-2">Open perils</td>
              <td className="border border-gray-300 px-4 py-2">Named perils</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">CP 10 00 + CP 10 30</td>
              <td className="border border-gray-300 px-4 py-2">Commercial property</td>
              <td className="border border-gray-300 px-4 py-2">Open perils</td>
              <td className="border border-gray-300 px-4 py-2">Open perils</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">BOP</td>
              <td className="border border-gray-300 px-4 py-2">Small businesses</td>
              <td className="border border-gray-300 px-4 py-2">Open perils (default)</td>
              <td className="border border-gray-300 px-4 py-2">Open perils (default)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">FAIR Plan</td>
              <td className="border border-gray-300 px-4 py-2">Last resort (CA)</td>
              <td className="border border-gray-300 px-4 py-2">Named perils (fire only)</td>
              <td className="border border-gray-300 px-4 py-2">ACV only</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION: FINAL NOTES
          ═══════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on Endorsements and Manuscripted Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO form numbers discussed in this article &mdash; HO-3, CP 10 00, CP 10 30, and so
        on &mdash; are standardized forms used by most carriers. However, many carriers issue
        proprietary or &ldquo;manuscripted&rdquo; policies that use different form numbers and
        modified language. State Farm, for example, does not use ISO forms &mdash; its homeowner
        policy is a proprietary form that is similar to but not identical to an HO-3. USAA,
        Amica, and other carriers also use their own forms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when a carrier uses ISO forms, the policy is almost always modified by dozens of
        endorsements &mdash; some broadening coverage, others restricting it. Two HO-3 policies
        from different carriers can have very different effective coverage once endorsements are
        factored in. Never assume that your policy covers what a &ldquo;standard HO-3&rdquo;
        covers without actually reading the endorsements attached to your specific policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, state-mandated endorsements further modify standard ISO forms to comply
        with California Insurance Code requirements. These California-specific endorsements often
        provide stronger policyholder protections than the base ISO language, particularly
        regarding claims handling timelines under California Code of Regulations, Title 10,
        &sect; 2695.1 et seq. (the Fair Claims Settlement Practices Regulations).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy type is the single most important factor in determining your coverage. An HO-3
        and an HO-8 can insure the same house for the same dollar amount, but the HO-3 provides
        dramatically broader protection. A commercial policy with the CP 10 30 special form and
        the same policy with the CP 10 10 basic form cover fundamentally different risks.
        Knowing which policy type you have &mdash; and what that type does and does not cover
        &mdash; is the foundation of every successful insurance claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are unsure what type of policy you have, or if you suspect your coverage is
        inadequate, consult a licensed public adjuster or an independent insurance agent who can
        review your policy and identify gaps before a loss occurs. The time to fix coverage
        problems is before you need to file a claim &mdash; not after.
      </p>
    </>
  )
}
