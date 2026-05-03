import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Short-Term Rental and Airbnb Insurance Coverage Gaps: What Your Homeowner Policy Does Not Cover',
  description:
    'Standard homeowner policies were not designed for short-term rentals. Learn how business-use exclusions, Airbnb host guarantees, and undisclosed STR activity create coverage gaps that can leave you uninsured when a guest causes damage or gets injured.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you rent your home on Airbnb, VRBO, or any other short-term rental platform, there is
        a very good chance your homeowner&rsquo;s insurance policy does not cover what you think
        it covers. The standard HO-3 policy was designed for an owner-occupied primary residence.
        When that residence is regularly rented to paying strangers for short stays, the coverage
        assumptions break down in ways that most hosts do not discover until they file a claim
        and get denied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theoretical problem. It is happening across California right now. A guest
        starts a kitchen fire. A guest slips on the stairs and breaks their hip. A guest throws
        a party and the neighbors sue. In each scenario, the homeowner files a claim, and the
        carrier responds with two words that change everything: <em>business use</em>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Problem: HO-3 Policies Are for Owner-Occupied Homes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 policy &mdash; the form used by the majority of homeowner&rsquo;s
        insurance carriers in the United States &mdash; is explicitly designed for{' '}
        <strong>owner-occupied primary residences</strong>. The policy language, the underwriting,
        the premium calculation, and the coverage assumptions all flow from one central premise:
        the named insured lives in the home and uses it as their residence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Short-term rental activity changes that premise. When you rent your home to paying guests
        on a regular basis, you are operating a hospitality business out of your residence. The
        risk profile is fundamentally different: strangers are in your home, unfamiliar with the
        property, using your appliances, your pool, your stairs. The frequency of occupant
        turnover increases wear and liability exposure. The nature of the use has changed from
        residential to commercial, even if the structure itself has not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Business Use&rdquo; Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most HO-3 policies contain an exclusion for <strong>business activities</strong>. Under
        the standard ISO form, Section II (Liability) excludes bodily injury or property damage
        &ldquo;arising out of or in connection with a &lsquo;business&rsquo; engaged in by an
        &lsquo;insured.&rsquo;&rdquo; The policy defines &ldquo;business&rdquo; as &ldquo;a
        trade, profession, or occupation engaged in on a full-time, part-time, or occasional
        basis&rdquo; or &ldquo;any other activity engaged in for money or other compensation.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Renting your home to paying guests for compensation fits squarely within that definition.
        If a guest is injured on your property while you are being compensated for their stay,
        the carrier can &mdash; and routinely does &mdash; invoke the business-use exclusion to
        deny the liability claim. The same exclusion can apply to property damage caused by
        guests: if the damage arose &ldquo;in connection with&rdquo; your short-term rental
        business, it may be excluded.
      </p>

      <CalloutBox variant="warning" title="The Business Exclusion Applies to Occasional Use Too">
        <p>
          The policy definition of &ldquo;business&rdquo; includes activities engaged in on an
          &ldquo;occasional basis.&rdquo; You do not need to be a full-time Airbnb host for the
          exclusion to apply. Even renting your home a few weekends a year for compensation can
          trigger it. The question is not how often you rent &mdash; it is whether you receive
          compensation.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The &ldquo;Incidental Business&rdquo; Exception
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some HO-3 policies include a carve-out for &ldquo;incidental business occupancies&rdquo;
        &mdash; activities like a home office, tutoring, or occasional childcare. The question is
        whether short-term rental activity qualifies as &ldquo;incidental.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most cases, the answer is no. Short-term rental hosting involves paying guests
        staying overnight in your home, using your kitchen, bathroom, and living spaces. It
        generates significant revenue. It creates liability exposure that goes well beyond
        a home office. Carriers generally do not treat STR activity as &ldquo;incidental&rdquo;
        to residential use &mdash; they treat it as a change in the nature of the occupancy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Airbnb&rsquo;s Host Protection Insurance and Host Guarantee
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Airbnb offers two programs that hosts often rely on as a substitute for proper insurance
        coverage: <strong>Host Protection Insurance</strong> (now called Host Liability Insurance)
        and <strong>AirCover for Hosts</strong> (formerly the Host Guarantee). These programs are
        better than nothing, but they are not a substitute for your own insurance policy.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Host Liability Insurance provides up to $1 million in liability coverage, but only
        for claims arising from Airbnb-platform bookings. Direct bookings, other-platform
        bookings, and incidents involving non-guests are excluded. Airbnb controls the entire
        claims process &mdash; you do not choose your adjuster or attorney, and you cannot
        dispute decisions the way you can with a regulated insurance carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        AirCover provides up to $3 million for guest-caused property damage, but you must report
        within 14 days after checkout and before the next guest arrives. Airbnb routinely
        undervalues damage, offers lowball settlements, and denies claims it categorizes as
        wear-and-tear. Most importantly, AirCover is not an insurance policy &mdash; it is a
        platform guarantee with no state insurance department oversight, no bad-faith remedies,
        and no formal dispute resolution comparable to what a regulated carrier must provide.
      </p>

      <CalloutBox variant="tip" title="AirCover Is Not Insurance">
        <p>
          Do not treat Airbnb&rsquo;s AirCover as a substitute for your own homeowner&rsquo;s
          or landlord policy. It is a platform guarantee with its own terms, exclusions, and
          claims process. You have no contractual right to challenge Airbnb&rsquo;s coverage
          decisions the way you can challenge your insurance carrier under California Insurance
          Code &sect;790.03 (Unfair Claims Settlement Practices Act).
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s insurance market has been particularly volatile in recent years, and
        short-term rental properties face additional scrutiny:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Carriers That Offer STR Endorsements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some California carriers offer endorsements that extend HO-3 coverage to include
        short-term rental activity. CSAA, State Farm, and a handful of others have created
        specific STR endorsements or rider options that modify the business-use exclusion to
        permit rental activity. These endorsements typically add to the premium and may impose
        conditions &mdash; maximum number of rental days per year, minimum stay requirements,
        or platform restrictions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your carrier offers an STR endorsement, get it. The additional premium is almost
        always worth the coverage it provides. Check your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        to confirm whether the endorsement is actually on the policy after you request it.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Carriers That Will Cancel for STR Use
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other carriers take the opposite position: they will cancel or non-renew your policy
        if they discover you are using the home as a short-term rental. Some carriers include
        specific policy language prohibiting STR use; others rely on the general requirement
        that the home be &ldquo;owner-occupied&rdquo; as a primary residence. Either way, the
        result is the same &mdash; your policy gets cancelled, often at the worst possible time.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Discovery Problem: How Carriers Find Out
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many hosts operate under the assumption that their carrier will not find out about the
        short-term rental use. This is increasingly naive. Carriers have become sophisticated
        at identifying undisclosed STR activity:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Listing scrapers.</strong> Insurance companies and their data vendors
          routinely scrape Airbnb, VRBO, Booking.com, and other platforms to identify
          properties listed for short-term rental. They match listing addresses against
          policyholder addresses.
        </li>
        <li>
          <strong>Social media monitoring.</strong> Posts advertising your rental property
          on Instagram, Facebook, or other platforms can be flagged. As discussed in our
          article on{' '}
          <Link href="/resources/social-media-claims" className="text-blue-700 underline hover:text-blue-900">
            social media and insurance claims
          </Link>, what you post online can and will be used in the claims process.
        </li>
        <li>
          <strong>Claims investigation.</strong> The most common time carriers discover
          STR use is during a claims investigation. The adjuster inspects the property,
          finds a lockbox on the door, a guest book on the counter, or commercial-grade
          linens on the beds. Neighbors mention the revolving door of guests. The adjuster
          asks directly, and the homeowner either admits the use or gets caught lying &mdash;
          which makes everything worse.
        </li>
        <li>
          <strong>County records and tax filings.</strong> If you report STR income on your
          taxes (as you are legally required to), or if you have a local STR permit or
          Transient Occupancy Tax registration, that information may be accessible to
          insurers or their data vendors.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Guest Damage: Vandalism or Business Loss?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a guest trashes your property &mdash; punches holes in walls, stains the carpet,
        breaks furniture, damages appliances &mdash; is that a covered insurance claim? The
        answer depends on how the damage is classified.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard HO-3, <strong>vandalism and malicious mischief</strong> is a named
        peril that is covered. If a random stranger broke into your home and caused the same
        damage, it would be covered without question. But when a paying guest causes the damage,
        the carrier may argue that the loss arose &ldquo;in connection with&rdquo; your business
        use of the property and is therefore excluded under the business-use provision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a genuinely difficult coverage question, and carriers do not always handle it
        consistently. Some will cover guest damage as vandalism. Others will deny it as a
        business loss. The outcome often depends on the specific policy language, the
        circumstances of the damage, and &mdash; frankly &mdash; how aggressively the
        homeowner pushes back on a denial. A{' '}
        <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
          coverage dispute
        </Link>{' '}
        over guest damage is exactly the kind of situation where having an advocate matters.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Guest Injuries: The Liability Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The liability exposure from short-term rental use is arguably more dangerous than the
        property damage exposure. A guest slips on a wet floor and breaks their hip. A child
        drowns in the pool. Under the standard HO-3, Section II provides bodily injury
        coverage &mdash; but the business-use exclusion can eliminate it entirely if the injury
        occurred during a paid rental stay. If the carrier successfully invokes the exclusion,
        you are personally liable for the full judgment amount.
      </p>

      <CalloutBox variant="warning" title="Personal Liability Is on the Line">
        <p>
          A denied liability claim does not make the injured guest&rsquo;s lawsuit go away. It
          just means you are defending it &mdash; and paying any judgment &mdash; out of your
          own pocket. A single serious guest injury can result in a judgment that exceeds your
          home&rsquo;s value.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        DP-3 vs. HO-3: The Right Policy for the Right Use
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property is primarily used as a rental &mdash; whether short-term or long-term
        &mdash; you may need a <strong>DP-3 (Dwelling Property &ndash; Special Form)</strong>{' '}
        rather than an HO-3. The DP-3 is designed for investment and rental properties. It does
        not have the owner-occupancy requirement of the HO-3, and it does not contain the same
        business-use exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the DP-3 has its own limitations. It typically does not include liability
        coverage &mdash; you need a separate commercial general liability (CGL) policy or a
        landlord liability endorsement. It may not include ALE or Fair Rental Value coverage
        by default. And the property coverage may be written on a named-peril basis rather than
        the open-peril coverage provided by the HO-3. For more on how{' '}
        <Link href="/resources/vacancy-unoccupancy" className="text-blue-700 underline hover:text-blue-900">
          vacancy and occupancy status
        </Link>{' '}
        affects coverage, see our detailed guide.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Specialty Short-Term Rental Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The market has responded to the STR coverage gap with specialty insurance products
        designed specifically for short-term rental properties. Companies like Proper Insurance,
        CBIZ, and Safely offer policies that include guest-caused property damage, commercial-grade
        liability ($1M&ndash;$5M limits), lost rental income coverage, and coverage for amenities
        like pools and hot tubs that standard policies may exclude. These products cost 2 to 3
        times more than a standard HO-3, but they are underwritten for the actual risk profile
        of a short-term rental. The premium is a cost of doing business.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California &ldquo;Homesharing&rdquo; Ordinances and Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most California cities and counties have adopted short-term rental or
        &ldquo;homesharing&rdquo; ordinances that regulate STR activity. Los Angeles, San
        Francisco, San Diego, Palm Springs, and dozens of other jurisdictions have specific
        rules covering permits, maximum rental days, primary residence requirements, and
        Transient Occupancy Tax obligations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These local regulations interact with insurance in several ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Permit requirements.</strong> Many jurisdictions require an STR permit
          or business license. Operating without one is a violation of local law. While
          this does not automatically void insurance coverage (for the same reasons discussed
          in our article on{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            building code and permit issues
          </Link>), it gives the carrier additional ammunition if they are looking for reasons
          to deny a claim.
        </li>
        <li>
          <strong>Primary residence requirements.</strong> Los Angeles, for example, requires
          that STR hosts use the property as their primary residence and rent it out only
          while they are present or temporarily away. If you are renting a property that is
          not your primary residence, you may be violating both the local ordinance and
          your HO-3 policy&rsquo;s owner-occupancy requirement simultaneously.
        </li>
        <li>
          <strong>Insurance requirements.</strong> Some STR ordinances require hosts to
          maintain minimum insurance coverage &mdash; typically $500,000 to $1 million in
          liability. If your HO-3 carrier has excluded STR liability via the business-use
          exclusion, you may be violating the local ordinance&rsquo;s insurance requirement
          without knowing it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Liability Waivers: Limited Effectiveness in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some STR hosts require guests to sign liability waivers. In California, these have
        limited effectiveness. Civil Code &sect;1668 voids contracts that exempt a party from
        responsibility for fraud, willful injury, or violation of law. Courts have extended
        this principle to invalidate residential liability waivers, particularly where there is
        unequal bargaining power &mdash; and a guest presented with a waiver at check-in is not
        negotiating from a position of equal power. A waiver is not a substitute for insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Short-Term Rental Hosts
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Disclose STR use to your carrier immediately.</strong> Call your carrier
          and tell them you are renting (or plan to rent) your home on a short-term basis.
          Ask specifically whether your policy covers STR activity and get the answer in
          writing. If the answer is no, ask about endorsements.
        </li>
        <li>
          <strong>Review your policy for the business-use exclusion.</strong> Read Section II
          of your HO-3 and identify the business-use exclusion. Understand what it excludes
          and whether any exceptions apply to your situation. Read your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>{' '}
          for endorsements that may modify this exclusion.
        </li>
        <li>
          <strong>Do not rely on Airbnb&rsquo;s coverage programs.</strong> Treat AirCover
          and Host Liability Insurance as supplemental, not primary. They are platform
          guarantees, not regulated insurance products, and they do not respond to claims
          the same way an insurance policy does.
        </li>
        <li>
          <strong>Consider a specialty STR policy.</strong> If your carrier will not endorse
          STR use on your HO-3, consider a specialty policy from a company that underwrites
          specifically for short-term rentals. The premium is higher, but the coverage matches
          the risk.
        </li>
        <li>
          <strong>If you are primarily renting, consider a DP-3.</strong> If the property is
          a dedicated rental rather than an occasionally-rented primary residence, a{' '}
          <Link href="/resources/landlord-vs-tenant-claims" className="text-blue-700 underline hover:text-blue-900">
            landlord/rental dwelling policy
          </Link>{' '}
          may be more appropriate than an HO-3.
        </li>
        <li>
          <strong>Comply with local STR ordinances.</strong> Get the required permits, pay
          the Transient Occupancy Tax, and comply with rental-day limits. Non-compliance
          creates legal exposure and gives carriers additional grounds to dispute claims.
        </li>
        <li>
          <strong>Maintain adequate liability limits.</strong> Whether through your
          homeowner&rsquo;s policy, a separate CGL policy, or a specialty STR policy, carry
          at least $1 million in liability coverage. Consider an umbrella policy for
          additional protection.
        </li>
        <li>
          <strong>Document the property before each guest.</strong> Take timestamped photos
          or video of the property before each check-in and after each checkout. This
          documentation is essential for both Airbnb damage claims and insurance claims.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Short-term rental hosting can be profitable, but it changes the risk profile of your
        property in ways that your standard homeowner&rsquo;s policy was not designed to handle.
        The business-use exclusion in most HO-3 policies creates a coverage gap that can leave
        you personally exposed to property damage claims, guest injury lawsuits, and lost
        income &mdash; exactly the kinds of losses that insurance is supposed to protect
        against.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is straightforward, even if it costs money: disclose your STR activity to
        your carrier, get appropriate coverage in place, and stop assuming that Airbnb&rsquo;s
        programs or your existing HO-3 will protect you when something goes wrong. The time to
        find out you are uninsured is <em>not</em> when a guest is being loaded into an
        ambulance.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">Renting Your Home on Airbnb or VRBO?</h3>
        <p className="text-gray-600 text-sm mb-4">
          We can review your current homeowner&rsquo;s policy and identify the coverage gaps
          created by short-term rental use. Whether you need an endorsement, a specialty STR
          policy, or a different policy form entirely, the first step is understanding what
          your current policy does and does not cover.
        </p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
