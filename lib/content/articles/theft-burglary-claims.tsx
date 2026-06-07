import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Theft and Burglary Insurance Claims: What Policyholders Need to Know',
  description:
    'A guide to filing theft and burglary claims under homeowner insurance policies. Covers Coverage A, B, and C, sublimits, mysterious disappearance, vacancy exclusions, SIU investigations, and California-specific rules.',
  summary:
    'Theft and burglary claims involve Coverage C limits and sub-limits on items like jewelry and cash, the \'mysterious disappearance\' issue, vacancy exclusions, and possible SIU scrutiny. File a police report and document losses to support the claim.',
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
        Theft claims are among the most contested claims in homeowner insurance. While theft is a
        covered peril under the standard HO-3 policy, insurance companies scrutinize these claims
        more aggressively than almost any other type of loss. The combination of sublimits on
        high-value items, the &ldquo;mysterious disappearance&rdquo; exclusion, vacancy provisions,
        and the inherently difficult task of proving that a theft occurred makes these claims uniquely
        challenging. This article explains how theft coverage works, what exclusions and limitations
        apply, and how to position your claim for the best possible outcome.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Theft Coverage Works Under the HO-3 Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Theft is a named peril under the standard HO-3 homeowner&rsquo;s policy, and it applies
        across multiple coverage sections. Understanding which coverage applies &mdash; and how
        &mdash; is the first step in evaluating any theft claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage A (Dwelling) and Coverage B (Other Structures)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverages A and B of the HO-3 are open-perils forms, meaning they cover all risks of
        physical loss unless specifically excluded. Theft itself is not excluded, so damage to the
        dwelling or other structures caused during a theft is covered &mdash; broken doors, smashed
        windows, damaged locks, kicked-in door frames, and pried-open garage doors. In many
        burglary claims, the structural damage actually exceeds the value of the stolen personal
        property. A thief who kicks in a front door, ransacks the house, and breaks windows on the
        way out may cause $5,000 or more in structural damage while stealing $1,500 worth of
        electronics.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The structural damage is handled under Coverage A (or Coverage B for detached structures)
        and is <strong>not subject to the personal property sublimits</strong> discussed below.
        This is a distinction policyholders often overlook. For more on vandalism-related damage
        that accompanies theft, see our{' '}
        <Link href="/resources/vandalism-claims" className="text-[#2E74B5] underline">
          vandalism claims guide
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage C (Personal Property)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage C covers personal property &mdash; your belongings &mdash; against theft. Under
        the HO-3, Coverage C is a named-perils form, and theft is one of the listed perils. Coverage
        C applies to personal property stolen from your home, from your vehicle, or from virtually
        any location. If your laptop is stolen from a hotel room, your bicycle is taken from a park,
        or your luggage is stolen at the airport, Coverage C of your homeowner policy may cover the
        loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, off-premises theft &mdash; theft that occurs away from the insured premises &mdash;
        is typically limited to 10% of the Coverage C limit. If your Coverage C limit is $150,000,
        off-premises theft coverage is capped at $15,000. This is a policy limitation, not a
        sublimit, and it applies to the total of all personal property stolen off-premises, not per
        item or per occurrence.
      </p>

      <CalloutBox variant="info" title="On-Premises vs. Off-Premises Theft">
        <p>
          A theft from your home is covered up to the full Coverage C limit (subject to sublimits on
          specific categories). A theft that occurs away from home &mdash; from your car, a storage
          unit, a hotel room, or anywhere else &mdash; is limited to 10% of the personal property limit. Always
          identify where the theft occurred, because this determines the available coverage limit.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sublimits on Theft: The Hidden Caps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when theft is covered, the standard homeowner policy imposes internal sublimits that
        cap the amount payable for certain categories of personal property. These sublimits apply
        specifically to theft losses and can dramatically reduce your recovery. The most common
        sublimits include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Jewelry, watches, and furs:</strong> Typically $1,500 total for theft. This is not
          per item &mdash; it is the aggregate limit for all jewelry stolen. A single engagement ring
          can exceed this limit.
        </li>
        <li>
          <strong>Cash, bank notes, and coins:</strong> Usually $200. If a burglar takes the cash you
          keep at home, this is the maximum the policy will pay.
        </li>
        <li>
          <strong>Firearms and related equipment:</strong> Commonly $2,500 for theft.
        </li>
        <li>
          <strong>Silverware, goldware, and pewterware:</strong> Typically $2,500 for theft.
        </li>
        <li>
          <strong>Electronics:</strong> Some policies impose sublimits on portable electronics or
          computer equipment, particularly for off-premises losses. Check your specific policy.
        </li>
        <li>
          <strong>Business property:</strong> Usually $2,500 for business property on the insured
          premises, and $500 away from the premises.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These sublimits are one of the most common sources of underinsurance in theft claims.
        Policyholders who own valuable jewelry, firearms, or silverware should consider scheduling
        those items on their policy or purchasing a separate inland marine floater <em>before</em> a
        loss occurs. For a detailed discussion of sublimits and how to address them, see our{' '}
        <Link href="/resources/specialty-items" className="text-[#2E74B5] underline">
          specialty items guide
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Sublimits Are Per Category, Not Per Occurrence">
        <p>
          A common misunderstanding is that sublimits apply per theft event. They do not. If your
          policy has a $1,500 sublimit on jewelry, that is the most the insurer will pay for jewelry
          theft regardless of how many items were taken or how many separate thefts occur during the
          policy period. The only way to increase this limit is to schedule individual items or
          purchase an endorsement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Mysterious Disappearance Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important &mdash; and most frequently misunderstood &mdash; limitations on
        theft coverage is the &ldquo;mysterious disappearance&rdquo; exclusion. Many homeowner
        policies exclude coverage for items that simply vanish without evidence that a theft actually
        occurred. The policy language typically reads something like:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        We do not insure for loss caused by theft in or to a dwelling under construction, or of
        materials and supplies for use in the construction until the dwelling is finished and
        occupied. This coverage does not include loss caused by mysterious disappearance.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        What constitutes &ldquo;mysterious disappearance&rdquo; versus &ldquo;theft&rdquo; is often
        the central dispute in these claims. If you come home to find your door kicked in, your
        drawers ransacked, and your television missing, that is clearly theft. But if you simply
        notice that a piece of jewelry is no longer in your jewelry box and you cannot identify when
        or how it disappeared, the insurer will likely characterize that as a mysterious
        disappearance rather than a theft.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters because theft requires evidence of a <strong>felonious
        taking</strong> &mdash; the wrongful taking of another person&rsquo;s property with the
        intent to permanently deprive them of it. If there is no evidence of forced entry, no
        evidence that an unauthorized person was in the home, and no identifiable time frame during
        which the item went missing, the insurer has a plausible basis to deny the claim under the
        mysterious disappearance exclusion. This is why documenting every detail of the
        circumstances surrounding a theft is critical.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Vacancy Exclusion: 30 and 60 Day Provisions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies contain a vacancy provision that eliminates theft coverage entirely
        if the dwelling has been vacant beyond a specified period &mdash; typically 30 or 60
        consecutive days. The standard ISO policy language states that the insurer will not pay for
        loss caused by theft if the dwelling has been vacant for more than 60 consecutive days
        immediately before the loss. Some policies use a 30-day period instead.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This exclusion is particularly relevant for landlords between tenants, homeowners traveling
        for extended periods, homeowners displaced by a prior loss, and properties in probate. If a
        property sits empty for two months and is then burglarized, the insurer may deny the entire
        claim &mdash; including both the stolen property and the structural damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between &ldquo;vacant&rdquo; and &ldquo;unoccupied&rdquo; is critical. A
        vacant dwelling is empty of both people and contents. An unoccupied dwelling still contains
        the owner&rsquo;s personal property but no one is currently living there. Many policies
        only trigger the vacancy exclusion for truly vacant properties, not merely unoccupied ones.
        For a detailed analysis, see our{' '}
        <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] underline">
          vacancy and unoccupancy guide
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Vacancy Can Eliminate Theft Coverage Entirely">
        <p>
          Unlike some other perils where vacancy merely reduces coverage, theft is completely
          excluded once the vacancy period expires. There is no partial coverage. If the dwelling
          qualifies as vacant under the policy definition and the vacancy period has lapsed, the
          insurer owes nothing for theft &mdash; not for the stolen property, and potentially not
          for the structural damage either.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Theft by a Household Member
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies exclude theft committed by an insured or by any person to whom
        property is entrusted. If a family member, roommate, or other household member steals your
        property, the loss is not covered. The exclusion also extends to situations where property
        is entrusted to someone who fails to return it &mdash; lending a valuable item to a friend
        who refuses to give it back is a civil dispute, not a covered theft. The policy covers{' '}
        <strong>felonious taking</strong>, not breach of trust.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Burden of Proof in Theft Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder bears the burden of proving that a covered theft occurred. However, the
        standard of proof is <strong>preponderance of the evidence</strong> &mdash; meaning more
        likely than not &mdash; not &ldquo;beyond a reasonable doubt,&rdquo; which is the criminal
        standard. This is an important distinction that insurers sometimes blur. You do not need to
        prove who committed the theft, how they gained entry, or where the stolen items are now. You
        need to establish that property was present, that it is now missing, and that the most likely
        explanation is theft. Supporting evidence includes signs of forced entry, a police report,
        witness statements, surveillance footage, and proof of the items&rsquo; existence prior to
        the loss (photos, receipts, appraisals).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing a Police Report
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most carriers require a police report as a condition of processing a theft claim. Even when
        the policy does not explicitly require one, filing a police report is always advisable:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Creates a contemporaneous record</strong> of the date and circumstances before
          memory fades or details are questioned.
        </li>
        <li>
          <strong>Establishes a case number</strong> that the insurer will request, along with the
          investigating officer&rsquo;s name and agency.
        </li>
        <li>
          <strong>Demonstrates good faith</strong> &mdash; failing to file a police report raises
          suspicion and may be used as a basis for denial.
        </li>
        <li>
          <strong>May trigger recovery</strong> &mdash; police investigation occasionally leads to
          recovery of stolen property, which supports the claim.
        </li>
      </ul>

      <CalloutBox variant="tip" title="File the Police Report Immediately">
        <p>
          File the police report as soon as you discover the theft. A delay in reporting raises
          questions about whether the theft actually occurred. Even if the police tell you they are
          unlikely to investigate a property crime, you need the report number for your insurance
          claim. If you cannot file in person, most agencies allow online reporting for non-emergency
          property crimes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        SIU Investigations and Carrier Skepticism
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers refer theft claims to their Special Investigation Unit (SIU) at a higher rate than
        most other perils. This is not necessarily an accusation of fraud &mdash; it reflects the
        inherent difficulty of verifying theft losses. Unlike fire or water damage, theft claims rely
        heavily on the policyholder&rsquo;s representation of what was taken. Common SIU triggers
        include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>High-value claims relative to the policyholder&rsquo;s income or lifestyle</li>
        <li>Claims filed shortly after policy inception or a coverage increase</li>
        <li>No evidence of forced entry</li>
        <li>Delayed reporting of the theft</li>
        <li>The policyholder&rsquo;s inability to provide documentation for claimed items</li>
        <li>A history of prior theft claims</li>
        <li>Financial stress &mdash; bankruptcy, foreclosure, or significant debt</li>
        <li>Inconsistencies between the police report and the claim submission</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim is referred to SIU, expect a{' '}
        <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] underline">
          recorded statement or Examination Under Oath
        </Link>,
        requests for financial records, and independent verification of claimed items. The duty to
        cooperate is a policy condition, but cooperation must be reasonable &mdash; the insurer
        cannot demand records that go beyond what is necessary to investigate the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics on Theft Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers use several recurring strategies to minimize or deny theft claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Questioning whether a theft occurred:</strong> Arguing items were lost, misplaced,
          or never existed. Remember: the standard is preponderance of the evidence, not beyond a
          reasonable doubt. Mere suspicion is not a sufficient basis for denial under California law.
        </li>
        <li>
          <strong>Demanding excessive documentation:</strong> Requiring original purchase receipts
          for every household item. Cal. Code Regs., tit. 10, &sect; 2695.7(d) requires the insurer
          to accept &ldquo;all reasonable proof&rdquo; and prohibits demands that effectively
          prevent recovery.
        </li>
        <li>
          <strong>Misclassifying items under sublimits:</strong> A smart watch classified as
          &ldquo;jewelry&rdquo; rather than &ldquo;electronics,&rdquo; or a designer handbag
          classified as a &ldquo;fur&rdquo; item. Review policy definitions carefully and push back
          on misclassifications.
        </li>
        <li>
          <strong>Invoking the vacancy exclusion:</strong> Arguing an unoccupied dwelling was
          &ldquo;vacant.&rdquo; If personal property remains in the home, the dwelling is
          unoccupied, not vacant, and the vacancy exclusion should not apply.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Vandalism Accompanying Theft
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Burglars rarely leave a property undisturbed. Broken doors, shattered windows, damaged walls,
        and overturned furniture can equal or exceed the value of the stolen items. This damage is
        covered as a dwelling loss (vandalism or malicious mischief under the open-perils form) and is
        not subject to personal property sublimits. Always document and claim structural damage separately
        from stolen property &mdash; failing to separate them can result in the insurer applying the
        wrong limits. For more, see our{' '}
        <Link href="/resources/vandalism-claims" className="text-[#2E74B5] underline">
          vandalism claims guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Identity Theft vs. Property Theft
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies cover physical property theft, not identity theft. Many insurers
        offer identity theft coverage as an optional endorsement, which typically covers expenses
        related to restoring your identity &mdash; credit monitoring, legal fees, lost wages, and
        document replacement &mdash; but not the actual financial losses from fraudulent charges. If
        a burglar steals documents containing personal information, the physical theft is covered
        under the standard policy, but any subsequent identity fraud requires the endorsement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Rules and Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Fair Claims Settlement Practices Regulations (Cal. Code Regs., tit. 10,
        &sect;&sect; 2695.1&ndash;2695.12) impose strict requirements on how insurers handle theft
        claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Acknowledgment within 15 days:</strong> The insurer must acknowledge receipt of the
          claim within 15 calendar days (Cal. Code Regs., tit. 10, &sect; 2695.5(e)).
        </li>
        <li>
          <strong>Accept or deny within 40 days:</strong> The insurer must accept or deny the claim
          within 40 calendar days of receiving proof of claim, unless additional investigation is
          reasonably necessary (Cal. Code Regs., tit. 10, &sect; 2695.7(b)).
        </li>
        <li>
          <strong>Reasonable proof of loss:</strong> The insurer must accept all reasonable proof
          submitted by the policyholder and cannot demand documentation that is unreasonable or
          impossible to produce (Cal. Code Regs., tit. 10, &sect; 2695.7(d)).
        </li>
        <li>
          <strong>No unreasonable delays:</strong> The insurer cannot impose unnecessary delays in
          the investigation or payment of the claim. Each delay tactic must be justified by a
          legitimate investigative need.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Penal Code &sect;&sect; 484 and 459 define theft and burglary, respectively.
        Burglary is the entry into a structure with the intent to commit a felony or theft inside.
        A police report classifying the incident as a burglary under Penal Code &sect; 459
        supports the insurance claim by establishing that the loss resulted from a criminal act,
        not a mysterious disappearance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documentation Strategies for Theft Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because theft claims face heightened scrutiny, thorough documentation is essential. Take
        these steps immediately after discovering a theft:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Call the police immediately.</strong> Obtain the report number, officer&rsquo;s
          name and badge number, and agency.
        </li>
        <li>
          <strong>Photograph the scene.</strong> The point of entry, damage to doors, windows, and
          locks, the state of the interior (open drawers, overturned items, empty spaces where items
          were), and any tools or evidence left behind.
        </li>
        <li>
          <strong>Do not clean up</strong> until the police and insurance adjuster have inspected.
        </li>
        <li>
          <strong>Create a detailed stolen-item inventory.</strong> Description, approximate
          purchase date, original price, estimated replacement cost, and serial number if known.
        </li>
        <li>
          <strong>Gather supporting documentation.</strong> Receipts, credit card statements, photos
          showing items in your home, appraisals, warranty cards, and product registration emails.
        </li>
        <li>
          <strong>Photograph empty spaces.</strong> A wall bracket with no television, a desk with
          power cables connected to nothing &mdash; these images corroborate that items were present
          and are now missing.
        </li>
        <li>
          <strong>Preserve surveillance footage.</strong> Home security cameras, neighbor cameras,
          and doorbell cameras may have captured the burglar.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Pre-Loss Documentation Saves Your Claim">
        <p>
          The best time to document your personal property is before a loss occurs. Walk through your
          home with a camera and record a video inventory of every room, opening drawers and closets.
          Store it in the cloud. If a theft occurs, this video becomes powerful evidence of what you
          owned. Update it annually or after significant purchases.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Replacement Cost vs. Actual Cash Value for Stolen Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether stolen items are valued at replacement cost or actual cash value (ACV) depends on
        your policy. Most modern homeowner policies provide replacement cost coverage, but the
        insurer typically pays ACV first and withholds the depreciation until the policyholder
        actually replaces the item. In California, Senate Bill 49 requires insurers to provide a
        detailed written explanation of how depreciation was calculated for each item. For more on
        this critical distinction, see our{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          ACV vs. RCV guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Theft Claim Is Denied
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your theft claim is denied, the insurer must provide a written explanation citing the
        specific policy provisions (Cal. Code Regs., tit. 10, &sect; 2695.7(b)(1)). Review the
        denial letter and identify the exact basis. Common denial bases and responses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Mysterious disappearance&rdquo;:</strong> Provide evidence of forced entry,
          police report, witness statements, and a timeline of when items were last seen.
        </li>
        <li>
          <strong>&ldquo;Vacancy exclusion&rdquo;:</strong> Demonstrate the dwelling was unoccupied,
          not vacant &mdash; personal property present, utilities active, owner visiting regularly.
        </li>
        <li>
          <strong>&ldquo;Insufficient documentation&rdquo;:</strong> Provide additional documentation
          and cite the insurer&rsquo;s obligation under &sect; 2695.7(d) to accept reasonable proof.
        </li>
        <li>
          <strong>&ldquo;Theft by household member&rdquo;:</strong> Demand the evidence supporting
          that conclusion. The burden of proving an exclusion applies rests with the insurer.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the denial is unjustified, consider filing a complaint with the California Department of
        Insurance, retaining a licensed Public Adjuster, or consulting an attorney if bad faith is
        involved.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Theft is covered across Coverage A (structural damage), Coverage B (other structures), and
          Coverage C (personal property) &mdash; each with different limits and conditions.
        </li>
        <li>
          Sublimits on jewelry ($1,500), cash ($200), firearms ($2,500), and other categories can
          drastically reduce recovery. Schedule high-value items before a loss.
        </li>
        <li>
          The &ldquo;mysterious disappearance&rdquo; exclusion is the most common denial basis.
          Evidence of forced entry, a police report, and a clear timeline defeats it.
        </li>
        <li>
          The vacancy exclusion eliminates theft coverage entirely after 30 or 60 days. Know the
          difference between vacant and unoccupied.
        </li>
        <li>
          File a police report immediately, photograph everything, and build a detailed inventory.
        </li>
        <li>
          The burden of proof is preponderance of the evidence &mdash; not beyond a reasonable
          doubt. You do not need to identify the thief.
        </li>
        <li>
          Structural damage from a burglary is covered as a dwelling loss, not subject to personal
          property sublimits. Always claim it separately.
        </li>
      </ul>

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
