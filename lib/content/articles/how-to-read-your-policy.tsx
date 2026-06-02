import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Read Your Entire Insurance Policy Document',
  description:
    'A section-by-section walkthrough of your homeowners insurance policy booklet — what each part is, where to find it, and how to navigate the document when you have a claim.',
  summary:
    'Your policy booklet has distinct parts: declarations, insuring agreement, definitions, coverages, exclusions, conditions, and endorsements. Knowing where each lives lets you navigate the document quickly when a claim arises.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders have never opened their insurance policy. It arrives in a thick
        envelope &mdash; or as a PDF buried in an email &mdash; and goes straight into a
        drawer. Then a loss happens, and they crack it open for the first time and try to
        make sense of fifty to eighty pages of dense, structured language. This article is
        your guide to that document &mdash; not a conceptual overview of what insurance
        covers, but a practical walkthrough of the physical policy booklet, section by
        section, so you know what each part is and how to find what you need.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We will use the standard HO-3 Special Form as our reference. This is the most
        common homeowners policy in the United States. Your policy may differ in details,
        but the overall structure is nearly universal.
      </p>

      <CalloutBox variant="tip" title="Get Your Policy Out Now">
        <p>
          This article works best if you have your actual policy in front of you. If you
          only have a declarations page, contact your insurer and request a complete copy,
          including all endorsements. You are entitled to it under California Insurance
          Code &sect;381 and &sect;2071.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Overall Structure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard homeowners policy is assembled from several components, typically in
        this order:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Declarations Page (the &ldquo;dec page&rdquo;)</li>
        <li>Insuring Agreement</li>
        <li>Definitions</li>
        <li>Section I &mdash; Property Coverages (Coverages A through D, plus Additional Coverages)</li>
        <li>Section I &mdash; Perils Insured Against</li>
        <li>Section I &mdash; Exclusions</li>
        <li>Section I &mdash; Conditions</li>
        <li>Section II &mdash; Liability Coverages</li>
        <li>Section II &mdash; Exclusions and Conditions</li>
        <li>General Conditions (applying to both sections)</li>
        <li>Endorsements and Amendments</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        These sections work together as a single contract. A coverage grant in one section
        can be limited by a definition in another, removed by an exclusion in a third, and
        restored by an endorsement at the back. You cannot understand any one section in
        isolation.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        1. The Declarations Page
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dec page is the first thing you see &mdash; typically one to three pages
        containing everything specific to you: your name, property address, policy period,
        coverage limits, deductible, premium, and a list of every endorsement attached to
        your policy. Think of it as the table of contents and settings page combined. The
        rest of the policy is generic; the dec page makes it yours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We have a dedicated article that walks through the dec page in detail:{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] underline">
          How to Read Your Insurance Declarations Page
        </Link>.
      </p>

      <CalloutBox variant="warning" title="The Endorsement List Matters">
        <p>
          The endorsement list on your dec page is easy to overlook &mdash; often just a
          column of form numbers in small print. But those endorsements modify everything
          else in the policy. Always cross-reference this list against the endorsement
          pages at the back.
        </p>
      </CalloutBox>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        2. The Insuring Agreement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Immediately after the declarations page, you will find a short paragraph &mdash;
        sometimes just two or three sentences &mdash; called the insuring agreement:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        &ldquo;We will provide the insurance described in this policy in return for the
        premium and compliance with all applicable provisions of this policy.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This sentence is the foundation of the entire contract &mdash; the insurer&rsquo;s
        promise to pay. It establishes that the policy is a two-way agreement: coverage in
        exchange for premium and compliance with the policy&rsquo;s conditions. Do not skip
        it because it is short. Every coverage dispute ultimately traces back to whether the
        insurer fulfilled its promise to provide the insurance &ldquo;described in this
        policy.&rdquo;
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        3. Definitions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The definitions section appears right after the insuring agreement. It defines words
        and phrases that have specific meanings throughout the policy. In most policies,
        defined terms appear in <strong>bold</strong> or in quotation marks wherever they
        are used. When you see a bolded or quoted word, it does not carry its everyday
        meaning &mdash; it carries the policy&rsquo;s specific definition, and that
        definition controls. Key defined terms include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Residence premises&rdquo;</strong> &mdash; The specific property
          covered. Typically means the one-family dwelling where you reside, as identified
          on the dec page. A second home is not your &ldquo;residence premises&rdquo; unless
          the policy specifically says so.
        </li>
        <li>
          <strong>&ldquo;Insured&rdquo;</strong> &mdash; Who is covered. Includes the named
          insured, their spouse if a resident of the household, and resident relatives. This
          is narrower than most people assume &mdash; your adult child who moved out last
          year is likely not an &ldquo;insured.&rdquo;
        </li>
        <li>
          <strong>&ldquo;Occurrence&rdquo;</strong> &mdash; An accident, including continuous
          or repeated exposure to the same harmful conditions. Matters for determining
          whether multiple events constitute one loss or several.
        </li>
        <li>
          <strong>&ldquo;Business&rdquo;</strong> &mdash; Any trade, profession, or
          occupation, full-time or part-time. Most HO-3 policies exclude
          &ldquo;business&rdquo; property, so if you run a business from home, your
          equipment may not be covered under Coverage C.
        </li>
      </ul>

      <CalloutBox variant="important" title="Definitions Can Make or Break a Claim">
        <p>
          Example: A fire destroys a detached shed and its contents. The insurer pays for
          the shed under Coverage B but denies the contents, arguing the items were used for
          a home-based woodworking business. Whether that denial holds depends entirely on
          how the policy defines &ldquo;business&rdquo; &mdash; not the everyday meaning of
          the word, but the policy&rsquo;s specific definition.
        </p>
      </CalloutBox>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        4. Section I &mdash; Property Coverages
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the heart of the policy for property claims. Section I describes what
        property is covered and up to what limits. It is divided into four main coverage
        categories and a set of Additional Coverages.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage A &mdash; Dwelling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers the physical structure of your home, including attached structures like an
        attached garage, and materials on site intended for construction or repair. The
        limit is the dollar amount on your dec page next to &ldquo;Coverage A.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage B &mdash; Other Structures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers structures separated from the dwelling by clear space &mdash; detached
        garages, fences, sheds, pool houses, retaining walls. Standard limit is 10% of
        Coverage A (e.g., $50,000 on a $500,000 dwelling). Can be increased by endorsement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage C &mdash; Personal Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers your belongings &mdash; furniture, clothing, electronics, appliances. Standard
        limit is 50% of Coverage A. This section also contains &ldquo;special limits of
        liability&rdquo; &mdash; sub-limits for categories like jewelry ($1,500), firearms
        ($2,500), cash ($200), and securities ($1,500). These sub-limits are almost always
        inadequate for policyholders who own significant amounts of these items.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage D &mdash; Loss of Use
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pays additional living expenses (ALE) when a covered loss makes your home
        uninhabitable &mdash; temporary housing, meals, storage, pet boarding, and other
        reasonable costs above your normal expenses. Standard limit is 20% of Coverage A.
        If your home is rented to others, Coverage D provides fair rental value instead.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Additional Coverages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the four main coverages, Section I includes a list of &ldquo;Additional
        Coverages&rdquo; that provide limited coverage for specific situations. These are
        often overlooked by policyholders and sometimes by adjusters. Common additional
        coverages include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Debris Removal</strong> &mdash; up to an additional 5% of the coverage limit to remove debris after a loss</li>
        <li><strong>Reasonable Repairs</strong> &mdash; costs to protect property from further damage (tarping, boarding up)</li>
        <li><strong>Trees, Shrubs, and Other Plants</strong> &mdash; typically 5% of Coverage A, $500 per-item cap</li>
        <li><strong>Fire Department Service Charge</strong> &mdash; fire department charges to protect covered property</li>
        <li><strong>Property Removed</strong> &mdash; extends coverage for 30 days to property you move to protect from a peril</li>
        <li><strong>Collapse</strong> &mdash; coverage for collapse caused by hidden decay, hidden insect damage, weight of contents</li>
        <li><strong>Glass or Safety Glazing Material</strong> &mdash; breakage of glass that is part of the building</li>
        <li><strong>Landlord&rsquo;s Furnishings</strong> &mdash; appliances and furnishings you provide to a tenant</li>
      </ul>

      <CalloutBox variant="tip" title="Additional Coverages Are Often Outside Your Main Limits">
        <p>
          Most additional coverages provide coverage <em>in addition to</em> your Coverage A
          or Coverage C limits, not within them. Debris removal, for example, provides up
          to an additional 5% beyond the main limit. You may have more coverage available
          than you realize. Read each one carefully &mdash; some are truly additional, while
          others are subject to the main limit.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper look at how Coverages A through D work together, see our article on{' '}
        <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline">
          Understanding Your Insurance Policy
        </Link>.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        5. Section I &mdash; Perils Insured Against
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This section tells you <em>what events</em> trigger coverage. It is one of the most
        important sections in your policy, and it operates differently depending on which
        coverage you are looking at.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage A and B &mdash; Open Perils
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For Coverage A (Dwelling) and Coverage B (Other Structures), the HO-3 provides
        &ldquo;open perils&rdquo; coverage &mdash; also called &ldquo;all risk.&rdquo; The
        policy covers damage from <em>any</em> cause of loss <em>unless</em> a specific
        exclusion removes it. You do not need to prove which covered peril caused the loss
        &mdash; you only need to prove that a loss occurred. The burden then shifts to the
        insurer to prove an exclusion applies. This is an enormous advantage for
        policyholders.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage C &mdash; Named Perils
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For Coverage C (Personal Property), the standard HO-3 policy is a <em>named
        perils</em> policy. Your personal property is only covered if the loss is caused by
        one of the 16 specifically listed perils:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Fire or lightning</li>
        <li>Windstorm or hail</li>
        <li>Explosion</li>
        <li>Riot or civil commotion</li>
        <li>Aircraft</li>
        <li>Vehicles</li>
        <li>Smoke</li>
        <li>Vandalism or malicious mischief</li>
        <li>Theft</li>
        <li>Falling objects</li>
        <li>Weight of ice, snow, or sleet</li>
        <li>Accidental discharge or overflow of water or steam</li>
        <li>Sudden and accidental tearing apart, cracking, burning, or bulging of certain systems</li>
        <li>Freezing of plumbing, heating, air conditioning, or fire protective systems</li>
        <li>Sudden and accidental damage from artificially generated electrical current</li>
        <li>Volcanic eruption</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the cause of your personal property loss is not on this list, it is not covered
        &mdash; regardless of whether it would have been covered if it had damaged the
        building instead. For example, an accidental chemical spill that ruins your flooring
        is covered under Coverage A (open perils), but the clothing it destroys in a nearby
        closet may not be covered under Coverage C because &ldquo;chemical spill&rdquo; is
        not a named peril.
      </p>

      <CalloutBox variant="info" title="HO-5 Policies Eliminate This Gap">
        <p>
          If your policy is an HO-5 (Comprehensive Form), Coverage C is also open perils.
          Check the form number on your dec page &mdash; it will say &ldquo;HO 00 03&rdquo;
          or &ldquo;HO 00 05.&rdquo; Some insurers also offer a &ldquo;Special Personal
          Property Coverage&rdquo; endorsement that upgrades Coverage C to open perils on
          an HO-3 form.
        </p>
      </CalloutBox>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        6. Section I &mdash; Exclusions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusions section is where the policy takes away coverage. For open-perils
        coverage (Coverages A and B), this section is the primary battleground in coverage
        disputes. Common exclusions in the HO-3 include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Ordinance or law (covered separately by endorsement in most policies)</li>
        <li>Earth movement (earthquake, landslide, sinkhole, mudflow)</li>
        <li>Water damage (flood, surface water, waves, overflow of a body of water)</li>
        <li>Power failure originating away from the residence premises</li>
        <li>Neglect (failure to use reasonable means to save and preserve property)</li>
        <li>War</li>
        <li>Nuclear hazard</li>
        <li>Intentional loss</li>
        <li>Governmental action</li>
        <li>Weather conditions contributing to any of the above excluded perils</li>
        <li>Acts or decisions of any person, organization, or governmental body</li>
        <li>Faulty, inadequate, or defective planning, design, materials, or maintenance</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Read an Exclusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Exclusions are not simple one-line statements. Most follow a specific structure:
        the exclusion itself, followed by <em>exceptions</em> to the exclusion. You must
        read both parts. For example, the water damage exclusion bars coverage for flood,
        surface water, and overflow of a body of water. But the exceptions state that the
        exclusion does not apply to fire, explosion, or theft <em>resulting from</em> the
        excluded water event. A flood that causes a gas leak and explosion? The explosion
        damage may be covered even though the flood is not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claim denials rely on the exclusion while ignoring the exceptions. Always read
        the full exclusion, including sub-paragraphs and cross-references to endorsements.
        For a comprehensive analysis, see{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          Policy Exclusions in California Homeowner Insurance
        </Link>.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        7. Section I &mdash; Conditions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The conditions section establishes the rules both parties must follow when a claim
        arises. This section is dense and procedural, but it contains provisions that
        directly affect your rights. Key conditions include:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Duties After Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This subsection lists everything you are required to do after a covered loss:
        give prompt notice, protect the property from further damage, cooperate with the
        insurer&rsquo;s investigation, prepare an inventory of damaged personal property,
        submit to examination under oath if requested, and submit a signed sworn proof of
        loss if requested. Failure to comply with these duties can jeopardize your claim.
        For a detailed walkthrough, see{' '}
        <Link href="/resources/duties-after-loss" className="text-[#2E74B5] underline">
          Duties After Loss: What You&rsquo;re Required to Do
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Loss Settlement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Determines how the insurer calculates what it owes you &mdash; actual cash value
        (replacement cost minus depreciation) or replacement cost (no deduction for
        depreciation). Most HO-3 policies provide replacement cost for the dwelling if you
        carry at least 80% of the dwelling&rsquo;s replacement cost, and actual cash value
        for personal property initially, with depreciation withheld until you complete
        repairs or replacement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Appraisal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Provides a mechanism for resolving disputes over the <em>amount</em> of loss. Either
        party can demand appraisal. Each side selects an appraiser, the two appraisers
        select an umpire, and any two of the three make a binding determination. Appraisal
        is a powerful tool, but it only resolves amount disputes &mdash; not coverage
        disputes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Suit Against Us
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sets the deadline for filing a lawsuit against the insurer. California Insurance
        Code &sect; 2071&rsquo;s standard form contains a 12-month suit-limitation
        provision, but for <em>residential</em> property losses, California has statutorily
        extended that period to 24 months from the inception of loss. The clock is then{' '}
        <strong>equitably tolled (paused) during the carrier&rsquo;s active investigation and
        adjustment of the claim</strong> &mdash; the rule from <em>Prudential-LMI Commercial
        Insurance v. Superior Court</em> (1990) 51 Cal.3d 674. The endpoint of tolling is
        fact-specific; California courts have looked to when the carrier&rsquo;s position
        becomes clear and final (a formal written denial, an unequivocal repudiation, or the
        end of the carrier&rsquo;s adjustment activity), and the precise endpoint depends on
        the facts of the file. In practical terms, residential claims that remain in active
        adjustment for many months or years often have an effective suit-limitation period
        considerably later than 24 months from the inception of loss &mdash; in some cases
        several years later. Other statutes and doctrines may also apply. Don&rsquo;t assume
        the clock is running, and don&rsquo;t assume it is still tolled; the precise timing on
        a specific claim is a question for counsel.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mortgage Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a mortgage, this condition makes your lender a party to the policy.
        Structural damage checks are typically issued jointly to you and your mortgage
        company, and the lender can impose conditions on how repair funds are disbursed.
        This can create significant delays in accessing your own insurance proceeds.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        8. Section II &mdash; Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section II covers personal liability and medical payments to others &mdash; injuries
        on your property, accidental damage to others&rsquo; property. It has its own
        coverage grants, exclusions, and conditions, operating independently from Section I.
        Because this site focuses on property claims, we will note only that it exists. If
        you have a liability question, consult your agent or an attorney.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        9. Endorsements and Amendments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The endorsement pages are at the back of your policy &mdash; and they are where the
        real surprises hide. Endorsements <strong>modify</strong> the base policy form:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Add coverage</strong> the base policy does not provide (earthquake, water backup, ordinance or law, scheduled jewelry)</li>
        <li><strong>Remove coverage</strong> the base policy would otherwise provide (excluding mold, limiting theft, excluding certain dog breeds from liability)</li>
        <li><strong>Change limits</strong> (increasing Coverage B, adding a wind/hail deductible, raising special limits for jewelry)</li>
        <li><strong>Alter conditions</strong> (changing roof loss settlement to actual cash value, modifying the appraisal provision, adding managed repair requirements)</li>
        <li><strong>Modify definitions</strong> (expanding or restricting who qualifies as an &ldquo;insured&rdquo;)</li>
      </ul>

      <CalloutBox variant="warning" title="Endorsements Override the Base Policy">
        <p>
          When an endorsement conflicts with the base policy, the endorsement controls.
          Common example: the base HO-3 provides replacement cost for the dwelling, but
          many insurers attach a &ldquo;Roof Surfacing Payment Schedule&rdquo; endorsement
          that pays roof damage on actual cash value if the roof exceeds a certain age. The
          endorsement wins.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each endorsement has a form number (e.g., HO 04 90, HO 06 36) and a title. These
        should match the endorsement list on your dec page. If your dec page lists an
        endorsement not included in the pages you received, request it immediately.
      </p>

      <CalloutBox variant="tip" title="Common Endorsements to Look For">
        <p>
          <strong>Ordinance or Law Coverage</strong> (pays for code upgrades during
          rebuilding), <strong>Water Backup and Sump Overflow</strong>,{' '}
          <strong>Scheduled Personal Property</strong> (higher limits for jewelry, art,
          valuables), and any endorsement that changes your roof coverage, adds a percentage
          deductible for wind or earthquake, or modifies the loss settlement method.
        </p>
      </CalloutBox>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        10. How to Use Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing the structure is only useful if you know how to apply it. Here is a
        practical framework for using your policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When You Have a Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Follow this sequence every time:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Identify the peril.</strong> What caused the loss? The cause determines which provisions apply and whether the peril is covered.</li>
        <li><strong>Check the coverage grant.</strong> Find the applicable coverage (A, B, C, or D) in Section I. Confirm the property falls within it and check the limit.</li>
        <li><strong>Check the exclusions.</strong> Read every exclusion that could apply &mdash; <em>and</em> the exceptions to each exclusion. An exclusion that looks fatal at first glance may contain an exception that restores coverage.</li>
        <li><strong>Check the endorsements.</strong> Look for any endorsement that modifies the coverage, exclusion, or condition at issue. Endorsements can add or remove coverage.</li>
        <li><strong>Check the conditions.</strong> Know what you are required to do &mdash; and when &mdash; to preserve your claim.</li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Before a Loss Occurs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best time to read your policy is before you need it:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Keep a copy accessible.</strong> Store a digital copy &mdash; including all endorsements &mdash; in cloud storage or email it to yourself. Do not rely on the only copy being in the house that might burn down or flood.</li>
        <li><strong>Review endorsements annually.</strong> Every renewal, compare the new dec page and endorsement list to the prior year. Insurers sometimes add or remove endorsements without prominent notice.</li>
        <li><strong>Ask your agent questions now.</strong> If you do not understand something, ask <em>before</em> a loss. Agents are more helpful when there is no claim on the line.</li>
        <li><strong>Verify your Coverage A limit.</strong> If construction costs have increased, your limit may be inadequate. If it falls below 80% of replacement cost, you may face a coinsurance penalty.</li>
        <li><strong>Document your personal property.</strong> Take a video walkthrough of your home, opening drawers and closets. Store it in the cloud. This will be invaluable for a Coverage C claim.</li>
      </ul>

      <CalloutBox variant="important" title="Your Policy Is the Contract &mdash; Not the Brochure">
        <p>
          Marketing materials, agent statements, and online summaries are not your policy.
          The actual policy document is the legally binding contract. If there is a conflict
          between what your agent told you and what the policy says, the policy language
          controls. Read the policy itself &mdash; it is the only document that matters when
          a claim is filed.
        </p>
      </CalloutBox>

      {/* ------------------------------------------------------------------ */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy is a legal contract with a specific structure, and every
        section serves a purpose. The dec page makes it specific to you. The insuring
        agreement creates the promise. The definitions control the meaning of words. The
        coverage sections tell you what is protected. The perils section tells you what
        events trigger coverage. The exclusions take coverage away. The conditions impose
        obligations on both sides. And the endorsements modify everything that came before.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim is denied or underpaid, the answer is almost always somewhere in these
        pages. The policyholder who knows where to look &mdash; the coverage grant, the
        exclusion, the exception to the exclusion, the endorsement that modifies all of it
        &mdash; is in a far stronger position than the policyholder who has never opened
        the document.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read your policy. All of it. Including the endorsements.
      </p>
    </>
  )
}
