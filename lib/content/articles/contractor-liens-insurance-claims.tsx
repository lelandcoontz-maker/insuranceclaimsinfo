import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Contractor Liens When the Insurance Company Won’t Pay: A Property Owner’s Guide to Mechanics Liens in California",
  description:
    'When your insurance company delays or denies payment and a contractor files a mechanics lien on your property, you need to know your rights. This guide covers California mechanics lien law, preliminary notices, subcontractor liens, inflated lien defenses, and strategies for property owners caught between insurers and contractors.',
  summary:
    'When your insurer delays payment and a contractor files a mechanics lien on your home, you are caught in the middle. Know California\'s lien rules, preliminary notice requirements, and defenses to inflated liens to protect your property.',
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
        You had a covered loss. Your property was damaged by fire, water, wind, or some other peril.
        You hired a contractor to make repairs. The contractor started the work &mdash; maybe even
        finished some of it &mdash; but your insurance company has been dragging its feet on payment.
        Maybe the carrier is disputing the scope. Maybe they are holding back on supplements. Maybe
        they have gone silent altogether. And now your contractor is threatening to file a mechanics
        lien on your property &mdash; or worse, one has already been recorded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are not a deadbeat property owner. You are not refusing to pay because you want to keep
        the money. You are caught in the middle between an insurance company that is not meeting its
        obligations and a contractor who understandably wants to be paid for work performed. This is
        one of the most stressful situations a property owner can face during a claim, and it is far
        more common than most people realize.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what mechanics liens are under California law, how they work, what
        rights and defenses property owners have, and how the insurance claim process intersects
        with contractor payment disputes. Whether you own a single-family home, a commercial
        building, or a multi-unit investment property, the principles discussed here apply to you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>A note on terminology:</strong> This article uses &ldquo;property owner&rdquo;
        rather than &ldquo;homeowner&rdquo; throughout. Mechanics lien law applies to all types
        of real property &mdash; residential, commercial, industrial, and mixed-use. If you own
        a building that was damaged and is being repaired through an insurance claim, this article
        is for you regardless of property type.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Mechanics Lien?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A mechanics lien (sometimes spelled &ldquo;mechanic&apos;s lien&rdquo;) is a legal claim
        against real property that secures payment for labor, materials, equipment, or services
        furnished in connection with a work of improvement. In California, mechanics liens are
        governed by Civil Code &sect;8000 et seq., which replaced older lien statutes effective
        July 1, 2012.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The concept behind a mechanics lien is straightforward: if someone contributes labor or
        materials to improve your property, and they are not paid, the law gives them a security
        interest in the property itself. The lien attaches to the real property, not to you
        personally. If the lien is valid and the amount remains unpaid, the claimant can
        ultimately force a sale of the property through a foreclosure action &mdash; the same
        basic mechanism that a mortgage lender uses when a borrower defaults.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a powerful remedy, and it can feel deeply unfair when you, as the property owner,
        have been waiting for your insurance company to pay for the very work the contractor
        performed. But the law does not care why you have not paid the contractor. The
        contractor&apos;s right to lien your property exists independently of your insurance
        claim. Your dispute with your carrier is between you and the carrier. The contractor&apos;s
        right to be paid for work performed is between you and the contractor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Mechanics Liens Come Up in Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a typical non-insurance construction project, the property owner is paying for the
        work out of pocket. If the owner does not pay, the contractor files a lien. Simple enough.
        But insurance claims introduce a third party &mdash; the insurance company &mdash; and that
        third party&apos;s conduct often creates the very situation that leads to the lien.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the common pattern. The property owner hires a contractor. The contractor
        submits an estimate or bid. The insurance company&apos;s adjuster reviews the estimate
        and disputes many of the line items. The property owner&apos;s public adjuster or
        attorney submits a{' '}
        <Link href="/resources/supplement-process-insurance-claims" className="text-[#2E74B5] underline">
          supplement
        </Link>{' '}
        with additional documentation. The carrier takes weeks or months to respond. Meanwhile,
        the contractor has workers on the job, materials to pay for, and subcontractors waiting
        for checks. The contractor cannot wait indefinitely. At some point, the contractor needs
        to be paid or the contractor needs to protect their legal rights &mdash; and a mechanics
        lien is the primary tool for doing so.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property owners sometimes feel blindsided by this. They assume that because the insurance
        company owes the money, the contractor should be patient and wait. But the contractor did
        not sign a contract with the insurance company. The contractor signed a contract with the
        property owner. And the property owner is the one who owes the contractor, regardless of
        whether the insurance company has paid the property owner.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When a Lien Can Actually Help Your Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is something that most property owners do not consider: a contractor&apos;s lien &mdash;
        or even the threat of one &mdash; can sometimes <em>nudge</em> the insurance company toward
        settling the claim. When a carrier knows that a lien has been filed or is imminent, it
        changes the dynamic. The carrier understands that the property owner is now facing a real
        and immediate consequence of the carrier&apos;s delay. A lien on the property affects the
        owner&apos;s ability to refinance, sell, or obtain additional credit. It creates urgency
        that a politely worded supplement request does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some experienced public adjusters and attorneys recognize this dynamic and factor it into
        their strategy. A carrier that has been sitting on a{' '}
        <Link href="/resources/supplement-process-insurance-claims" className="text-[#2E74B5] underline">
          supplement
        </Link>{' '}
        for months may suddenly find the motivation to respond when the property owner can
        demonstrate that a mechanics lien has been recorded and that the property owner is facing
        potential foreclosure because of the carrier&apos;s failure to pay. This does not mean
        you should encourage a contractor to file a lien as a negotiation tactic &mdash; but
        when one happens naturally because of carrier delays, it can create leverage. It is worth
        understanding this reality, particularly in connection with{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California&apos;s Fair Claims Settlement Practices Regulations
        </Link>
        , which impose specific timelines on insurers for investigating and paying claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preliminary Notice vs. Actual Lien: Two Very Different Things
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property owners frequently confuse two distinct concepts: the <strong>preliminary
        notice</strong> (sometimes called a &ldquo;20-day notice&rdquo; or &ldquo;pre-lien
        notice&rdquo;) and the <strong>actual mechanics lien</strong> (the recorded claim of
        lien). Understanding the difference is critical because the legal implications, deadlines,
        and appropriate responses are entirely different.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Preliminary Notice (Civil Code &sect;8200&ndash;8216)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A preliminary notice is <em>not</em> a lien. It is not a threat to file a lien. It is a
        legally required notification that certain parties must serve to preserve their
        right to file a lien later if they are not paid. Think of it as a &ldquo;heads up&rdquo;
        to the property owner that someone is providing labor or materials to the project and
        wants the owner to know they exist.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Civil Code &sect;8200, a preliminary notice must generally be served
        within 20 days of the claimant first furnishing labor, services, equipment, or
        materials to the work of improvement. The service requirements depend on the
        claimant&rsquo;s relationship to the owner:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Subcontractors and material suppliers</strong> (claimants without a direct
          contract with the owner) must serve the preliminary notice on the property owner,
          the direct contractor (general contractor), and the construction lender (if any).
        </li>
        <li>
          <strong>Direct contractors</strong> (claimants with a direct contract with the
          owner) generally do not need to serve a preliminary notice on the owner to
          preserve lien rights, but must serve the construction lender (if any).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key points about the preliminary notice:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It is routine and expected.</strong> Receiving a preliminary notice does not
          mean the contractor or supplier is unhappy. It is standard practice and required by law.
          Many property owners panic when they receive one, but there is no reason to &mdash; it
          simply means someone is working on your project and is preserving their legal rights.
        </li>
        <li>
          <strong>Late notices limit lien rights.</strong> If a subcontractor or supplier serves
          the preliminary notice late (more than 20 days after first furnishing labor or materials),
          their lien rights are limited to labor and materials furnished during the 20 days
          immediately preceding the date the notice was served, plus all work performed afterward
          (Civil Code &sect;8204).
        </li>
        <li>
          <strong>It provides valuable information.</strong> The preliminary notice identifies who
          is working on your project. This is important for understanding who might have lien
          rights &mdash; especially subcontractors and material suppliers you may not have known
          about.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Recorded Claim of Lien (Civil Code &sect;8410&ndash;8424)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The actual mechanics lien is a document recorded with the county recorder&apos;s office
        in the county where the property is located. Once recorded, the lien becomes a cloud on
        the property&apos;s title. This is a far more serious event than receiving a preliminary
        notice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the deadlines for recording a mechanics lien depend on whether
        the claimant is a direct contractor or a subcontractor/supplier:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Direct contractors</strong> must record their claim of lien after completing
          the direct contract, and before the earlier of: (a) 90 days after completion of the
          work of improvement, or (b) 60 days after the property owner records a notice of
          completion or cessation (Civil Code &sect;8412).
        </li>
        <li>
          <strong>Subcontractors and suppliers</strong> must record their claim of lien before
          the earlier of: (a) 90 days after completion of the work of improvement, or (b) 30 days
          after the property owner records a notice of completion or cessation (Civil Code &sect;8414).
        </li>
        <li>
          <strong>Foreclosure deadline:</strong> After recording a mechanics lien, the claimant
          must commence a foreclosure action (lawsuit) within 90 days of recording the lien. If
          the claimant fails to file suit within 90 days, the lien expires and is unenforceable
          (Civil Code &sect;8460).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Practical takeaway for property owners:</strong> If a contractor records a lien
        and then fails to file a foreclosure lawsuit within 90 days, the lien expires by
        operation of law. You can petition the court for a release order under Civil Code &sect;8480
        to formally clear the lien from your title. However, you should not simply wait and hope
        the contractor misses the deadline &mdash; consult with an attorney immediately upon
        learning that a lien has been recorded.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Notice of Completion: A Timing Tool for Property Owners
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property owners have a strategic tool available to them: the <strong>notice of
        completion</strong>. By recording a notice of completion with the county recorder&apos;s
        office within 15 days after the work of improvement is completed (Civil Code &sect;8182),
        the property owner shortens the time that subcontractors and suppliers have to record a
        mechanics lien &mdash; from 90 days down to 30 days. The direct contractor&apos;s deadline
        is shortened from 90 days to 60 days.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This can be particularly useful when the work is done but payments are still being sorted
        out through the insurance claim process. Filing the notice of completion starts a shorter
        clock, reducing the window during which surprise liens can appear.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Subcontractor Liens: The Surprise That Catches Property Owners Off Guard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most alarming scenarios for a property owner is receiving a mechanics lien
        from a subcontractor or material supplier they have never met, never contracted with,
        and may not have even known was working on the project. How can someone you never hired
        put a lien on your property?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer lies in the structure of California mechanics lien law. The right to lien is
        not limited to parties who have a direct contract with the property owner. Subcontractors,
        sub-subcontractors, material suppliers, and equipment lessors all have the right to record
        a mechanics lien against the property if they contributed labor or materials to the work
        of improvement and were not paid &mdash; even if the reason they were not paid is that
        the general contractor failed to pass along the money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the scenario that plays out repeatedly in insurance claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The property owner hires a general contractor to perform the repairs.
        </li>
        <li>
          The general contractor hires subcontractors for specific trades &mdash; roofing,
          plumbing, electrical, drywall, painting.
        </li>
        <li>
          The insurance company issues a payment to the property owner (and possibly the
          mortgage company as a co-payee on the check).
        </li>
        <li>
          The property owner pays the general contractor.
        </li>
        <li>
          The general contractor does <em>not</em> pay one or more of the subcontractors.
        </li>
        <li>
          The unpaid subcontractor files a mechanics lien against the property owner&apos;s
          property.
        </li>
        <li>
          The property owner now potentially owes the subcontractor even though the property
          owner already paid the general contractor for that work.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a hypothetical scenario. It happens regularly. The property owner can end
        up paying twice &mdash; once to the general contractor (who kept the money) and again
        to the subcontractor (who has a valid lien). This is one of the most important reasons
        why{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          choosing your contractor carefully
        </Link>{' '}
        matters enormously in an insurance claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Protecting Yourself Against Subcontractor Liens
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are several practical steps property owners can take to minimize the risk of
        subcontractor liens:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request a list of all subcontractors and suppliers.</strong> Before work begins,
          ask your general contractor for a complete list of every subcontractor, sub-subcontractor,
          and material supplier who will be working on or furnishing materials for your project.
          This allows you to track who has lien rights.
        </li>
        <li>
          <strong>Track preliminary notices.</strong> When you receive preliminary notices from
          subcontractors or suppliers, file them carefully. These notices tell you who has
          preserved their right to lien your property.
        </li>
        <li>
          <strong>Use joint checks.</strong> When paying your general contractor for work
          performed by a subcontractor who has served a preliminary notice, consider issuing
          a joint check payable to both the general contractor and the subcontractor. This
          ensures the subcontractor gets paid directly, eliminating the risk that the general
          contractor pockets the money. The California Contractors State License Board (CSLB)
          specifically recommends this practice.
        </li>
        <li>
          <strong>Request lien waivers with each payment.</strong> California Civil Code
          &sect;8132&ndash;8138 provides standardized lien waiver forms. Before making progress
          payments, request conditional lien waivers from the general contractor and all
          subcontractors and suppliers. A conditional waiver becomes effective upon payment. An
          unconditional waiver is effective immediately. Use the correct form for the situation.
        </li>
        <li>
          <strong>Record a notice of completion promptly.</strong> This
          shortens the window for subcontractor liens from 90 days to 30 days.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Checking the Contractor&apos;s License, Bond, and Workers&apos; Compensation Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you worry about whether a contractor&apos;s lien is valid, you should verify
        whether the contractor is even entitled to file one. In California, a contractor who is
        not properly licensed may have no legal right to collect payment &mdash; let alone file
        a lien on your property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Licensing Requirement: Business and Professions Code &sect;7031
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Business and Professions Code &sect;7031 is one of the most powerful consumer
        protection statutes on the books. It provides, in relevant part, that no person engaged
        in the business or acting in the capacity of a contractor may bring or maintain any
        action, or recover in law or equity in any action, for compensation for the performance
        of any act or contract where a license is required, without alleging and proving that
        the person was a duly licensed contractor <em>at all times during the performance of
        the act or contract</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that carefully. The contractor must have been licensed at <strong>all times</strong>{' '}
        during performance. If the contractor&apos;s license lapsed for even a single day during
        the project, the contractor cannot recover compensation. This means the contractor cannot
        enforce a mechanics lien, cannot sue for breach of contract, and cannot recover in quantum
        meruit (the legal theory for recovering the reasonable value of services even without a
        contract).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But &sect;7031 goes even further. Subsection (b) provides the &ldquo;sword&rdquo; in
        addition to the &ldquo;shield&rdquo;: a property owner who utilizes the services of an
        unlicensed contractor may bring an action to <em>recover all compensation paid</em> to
        the unlicensed contractor for performance of any act or contract. In other words, not
        only can the unlicensed contractor not collect what is owed, but the property owner can
        sue to get back every dollar already paid. This is known as &ldquo;disgorgement.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a narrow &ldquo;substantial compliance&rdquo; exception under &sect;7031(e),
        but it requires the contractor to prove they had been duly licensed prior to the
        performance, acted reasonably and in good faith to maintain licensure, and acted
        promptly to remedy the lapse upon learning of it. This exception does not apply if
        the contractor was <em>never</em> licensed in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Practical step:</strong> You can verify any contractor&apos;s license status
        on the{' '}
        <a href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          CSLB license lookup tool
        </a>
        . Check that the license was active and in good standing during the entire period the
        contractor performed work on your property. Also check for any disciplinary actions,
        complaints, or bond claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Work Outside the License Classification
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California contractor licenses are issued in specific classifications &mdash; Class A
        (General Engineering), Class B (General Building), and numerous specialty classifications
        (C-2 Insulation, C-10 Electrical, C-17 Glazing, C-33 Painting, C-36 Plumbing, C-39
        Roofing, C-43 Sheet Metal, and so on). A contractor who performs work outside the scope
        of their license classification may be treated as &ldquo;unlicensed&rdquo; for that work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This has direct implications for mechanics liens. A contractor cannot file a valid lien
        for work that falls outside their license classification. If a painting contractor
        (C-33) performs plumbing work that requires a C-36 license, the contractor is considered
        unlicensed for that plumbing work and cannot lien for it. The same principle applies
        across all specialty classifications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When reviewing a contractor&apos;s lien, check the scope of work described in the lien
        against the contractor&apos;s license classification. If the lien includes work outside
        the contractor&apos;s classification, those amounts may be unenforceable. This is
        particularly relevant in insurance claim repairs, where a contractor may be performing
        work across multiple trades. The{' '}
        <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
          estimate, bid, and invoice
        </Link>{' '}
        should be reviewed carefully against the contractor&apos;s specific license classifications.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Workers&apos; Compensation Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Labor Code &sect;3700, every employer must secure workers&apos;
        compensation insurance for their employees. For licensed contractors, this requirement
        is enforced through the CSLB. A contractor who has employees but lacks workers&apos;
        compensation insurance is operating illegally, and this fact can undermine the
        contractor&apos;s lien rights.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who fails to maintain workers&apos; compensation insurance when required
        can be considered &ldquo;unlicensed&rdquo; for purposes of Business and Professions
        Code &sect;7031, even if the contractor holds a CSLB license number. The CSLB can
        suspend or revoke the contractor&apos;s license for failure to maintain required
        insurance, and the contractor may not be able to enforce lien rights during any period
        of non-compliance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, the penalties for operating without workers&apos; compensation insurance
        are severe: Labor Code &sect;3700.5 makes it a misdemeanor punishable by a fine of not
        less than $10,000 or imprisonment in the county jail for up to one year, or both.
        The Division of Labor Standards Enforcement can issue a stop order prohibiting the
        use of employee labor until coverage is obtained. These enforcement mechanisms provide
        additional leverage for property owners dealing with uninsured contractors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Practical step:</strong> When you{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          choose a contractor
        </Link>
        , verify their workers&apos; compensation insurance status through the CSLB license
        lookup. If the contractor has employees, the lookup will show whether workers&apos;
        compensation coverage is in place. Request a certificate of insurance directly from
        the contractor&apos;s insurance carrier and confirm it is current.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inflated and Improper Liens: When the Lien Amount Is Wrong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all mechanics liens are filed in good faith, and not all lien amounts are accurate.
        Property owners should scrutinize every mechanics lien carefully to determine whether
        the amount claimed is supported by work that was actually performed. There are several
        common problems with lien amounts in the insurance claim context.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Liens for Work Not Yet Completed or Started
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common abuses occurs when a contractor includes in the lien amount
        charges for work that has not been completed &mdash; or has not even been started. A
        mechanics lien secures payment for labor, services, equipment, or materials that have
        been <em>furnished</em> for the work of improvement. The operative word is
        &ldquo;furnished.&rdquo; A contractor cannot lien for work that was merely planned,
        estimated, or contracted for but never actually performed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if a contractor&apos;s contract price was $150,000 for a full scope of
        repairs, and the contractor completed $80,000 worth of work before the project stalled
        due to insurance payment delays, the contractor&apos;s valid lien should be for
        approximately $80,000 (adjusted for any payments already received) &mdash; not $150,000.
        Filing a lien for the full contract amount when only a portion of the work has been
        performed is improper.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Willful Exaggeration Penalty: Civil Code &sect;8422
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law takes a hard line on inflated liens. Civil Code &sect;8422 provides that
        any person who willfully includes in a claim of lien labor, services, equipment, or
        materials not furnished for the property described in the claim shall <strong>forfeit
        their right to the lien entirely</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an all-or-nothing penalty. If the court determines that the contractor willfully
        included amounts for work not furnished, the contractor does not simply have the lien
        reduced to the correct amount &mdash; the contractor <em>forfeits the entire lien</em>.
        This is a significant deterrent, and property owners and their attorneys should be aware
        of it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is &ldquo;willfully.&rdquo; Honest mistakes or good-faith disputes about
        the value of work performed will generally not trigger the forfeiture penalty. But a
        contractor who knowingly inflates a lien by including work never started, materials
        never delivered, or charges for labor never furnished risks losing the entire lien &mdash;
        not just the inflated portion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note that Civil Code &sect;8422 also addresses erroneous information in a lien more
        broadly. Errors in the lien relating to the claimant&apos;s demand, credits and offsets,
        the work provided, or the property description do <em>not</em> automatically invalidate
        the lien &mdash; unless the court finds that the errors were made with intent to defraud.
        But the willful inclusion of unfurnished labor or materials triggers the harsher
        forfeiture provision.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Challenge an Inflated Lien Amount
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe a contractor has filed an inflated lien, you should take the following
        steps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Compare the lien amount to the actual work performed.</strong> Review the
          contractor&apos;s original{' '}
          <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
            estimate, bid, and invoice
          </Link>{' '}
          against the scope of work actually completed. Walk through the property and document
          which items from the scope have been completed, which are in progress, and which have
          not been started.
        </li>
        <li>
          <strong>Obtain an independent assessment.</strong> Consider hiring an independent
          contractor or estimator to assess the value of work actually performed. This provides
          an objective basis for disputing the lien amount. An{' '}
          <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
            independent estimate using sub-bids or Xactimate pricing
          </Link>{' '}
          can establish the fair value of the work completed.
        </li>
        <li>
          <strong>Document everything.</strong> Photograph the current condition of the property.
          Note any incomplete work, areas where materials were delivered but not installed, and
          any work that was never started. Date-stamped photographs are powerful evidence.
        </li>
        <li>
          <strong>Consult an attorney.</strong> If you believe the lien includes willfully
          exaggerated amounts, discuss the forfeiture provision under Civil Code &sect;8422 with
          your attorney. This is a defense that can eliminate the lien entirely.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reviewing the Invoice: Is the Contractor Liening for Work Never Performed?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the issue of inflated lien amounts, property owners should conduct a line-by-line
        review of the contractor&apos;s invoice against the work actually completed. This is
        more granular than simply comparing the total lien amount to the overall project &mdash;
        it requires looking at individual line items.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In insurance claim repairs, the scope of work is typically defined by the carrier&apos;s
        estimate or the{' '}
        <Link href="/resources/supplement-process-insurance-claims" className="text-[#2E74B5] underline">
          supplemented estimate
        </Link>
        . The contractor&apos;s invoice should correspond to items within that scope. Common
        discrepancies to look for include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Line items for work never started.</strong> The contractor&apos;s invoice may
          include charges for demolition, framing, roofing, or other trades that were never
          begun. If the work was not performed, the contractor should not be invoicing for it
          and cannot properly include it in a lien.
        </li>
        <li>
          <strong>Materials not yet delivered or installed.</strong> Check whether materials
          listed on the invoice &mdash; flooring, cabinetry, fixtures, roofing materials &mdash;
          have actually been delivered to the job site and installed. Materials that were ordered
          but never delivered or installed should not be included in the lien.
        </li>
        <li>
          <strong>Overhead and profit on work not completed.</strong> A contractor may attempt to
          include overhead and profit on the entire contract value even though only a portion of
          the work was completed. Overhead and profit should be calculated on the value of work
          actually performed, not on future or uncompleted work.
        </li>
        <li>
          <strong>Duplicate charges.</strong> Check for duplicate line items or charges that
          appear on both the original invoice and a change order or supplement.
        </li>
        <li>
          <strong>Charges outside the scope of insurance-covered repairs.</strong> The contractor
          may have included work that was not related to the insurance claim, such as pre-existing
          upgrades, cosmetic improvements unrelated to the loss, or work on areas of the property
          not affected by the covered peril.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is neither fair nor reasonable for a contractor to file a lien for amounts on items
        the contractor did not complete. A careful line-item review, compared against the
        actual condition of the property, is one of the most effective tools a property owner
        has for defending against an improper lien.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Property Owner&apos;s Counterclaim: When the Contractor Caused Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A mechanics lien is not a one-way street. While the contractor may have a claim against
        the property owner for unpaid work, the property owner may have a <strong>counterclaim</strong>{' '}
        against the contractor for defective work, damage to the property, or other problems
        arising from the contractor&apos;s performance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the insurance claim context, counterclaims are common. Repairs performed during
        an active insurance claim are often done under time pressure, and the results are not
        always acceptable. Common counterclaim scenarios include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Damage to undamaged areas.</strong> A contractor performing demolition or
          repairs may damage portions of the property that were not affected by the original
          loss. Broken tiles in adjacent rooms, scratched hardwood floors, damaged landscaping,
          and cracked drywall in areas outside the scope of work are all common examples.
        </li>
        <li>
          <strong>Improper installation.</strong> Roofing installed incorrectly, plumbing that
          leaks, electrical work that does not meet code, cabinetry that is misaligned, or
          flooring that buckles or separates &mdash; these are all items where the property
          owner may have a claim against the contractor for the cost of correction. Related
          issues can arise when{' '}
          <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
            incomplete repairs create new problems
          </Link>
          .
        </li>
        <li>
          <strong>Failure to protect the property.</strong> If the contractor failed to properly
          protect the property during construction &mdash; for example, failing to tarp an open
          roof before rain, failing to contain dust during demolition, or failing to secure the
          property against theft &mdash; the resulting damage is the contractor&apos;s
          responsibility.
        </li>
        <li>
          <strong>Use of inferior materials.</strong> If the contractor substituted inferior
          materials for those specified in the scope of work or estimate, the property owner may
          have a claim for the cost difference and any resulting damage.
        </li>
        <li>
          <strong>Delay damages.</strong> If the contractor&apos;s delays caused additional
          costs to the property owner &mdash; extended rental of temporary housing, extended
          loss of business income, or additional storage fees for personal property &mdash;
          these may be recoverable as counterclaims.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A valid counterclaim can offset the amount owed under the mechanics lien. In some cases,
        the counterclaim may exceed the lien amount, meaning the contractor owes the property
        owner rather than the other way around. Document all defects and damages thoroughly &mdash;
        with photographs, videos, independent inspections, and written reports &mdash; and discuss
        the counterclaim with your attorney before responding to the lien.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Removing an Invalid or Improper Lien
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a mechanics lien is invalid, improper, or expired, the property owner has several
        options for removing it from the property&apos;s title.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Petition for Release Order (Civil Code &sect;8480&ndash;8488)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Civil Code &sect;8480, the property owner (or any person with an interest in the
        property) may petition the court for an order to release the lien if the claimant has
        not commenced a foreclosure action within the time required by law, if the lien was
        not properly created, or for other grounds specified by statute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The petition process is relatively streamlined compared to a full trial. The court
        holds a hearing, and if the property owner meets the burden of proving that the lien
        is invalid, the court orders it released. Under Civil Code &sect;8488, the{' '}
        <strong>prevailing party is entitled to reasonable attorney&apos;s fees</strong>. This
        is an important provision &mdash; it means that if the property owner successfully
        petitions to remove an improper lien, the contractor must pay the property owner&apos;s
        legal costs. This serves as a meaningful deterrent against contractors who file liens
        they know to be invalid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the attorney&apos;s fees provision cuts both ways. If the property owner
        files a petition and loses, the contractor may recover their attorney&apos;s fees from
        the property owner. This shows the importance of consulting with an experienced
        construction attorney before filing a petition to release a mechanics lien.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lien Release Bond (Civil Code &sect;8424)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you need to clear the lien from your property&apos;s title quickly &mdash; for
        example, because you are trying to sell or refinance the property &mdash; you can
        record a lien release bond under Civil Code &sect;8424. The bond must be in an amount
        equal to 125% of the lien amount. Once the bond is recorded, the lien is released from
        the property and transferred to the bond. The contractor&apos;s claim is then against
        the bond, not against the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a practical solution when the property owner cannot afford to wait for
        litigation to resolve the lien dispute but does not want to pay the contractor the
        disputed amount. The downside is that obtaining a bond at 125% of the lien amount
        can be expensive, particularly for large liens.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Criminal Liability for False Liens
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In extreme cases involving fraud, forged documents, or completely fabricated claims,
        the filing of a false instrument with the county recorder may constitute a felony
        under California Penal Code &sect;115, punishable by up to three years in state prison.
        While criminal prosecution is rare in ordinary contractor disputes, it is available as
        a remedy in cases involving truly fraudulent liens &mdash; and the existence of this
        statute can provide additional motivation for a contractor to voluntarily release an
        improper lien.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Company&apos;s Role: What Carriers Owe and When
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth stepping back to examine why the property owner is in this predicament in
        the first place. In most contractor lien situations arising from insurance claims, the
        root cause is the insurance company&apos;s failure to pay what it owes in a timely
        manner. The property owner hired a contractor to perform repairs that are covered under
        the policy. The contractor performed the work. The insurance company has not paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (California Code of Regulations, Title 10, &sect;2695.1 et seq.) impose specific
        obligations on insurance companies regarding the timing of claim payments. Under these
        regulations, once an insurer has determined that a claim is payable, the insurer must
        tender payment within 30 days. The insurer cannot simply sit on a payment indefinitely
        while a property owner&apos;s contractor goes unpaid and liens accumulate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier unreasonably delays payment on a claim and that delay causes a mechanics
        lien to be filed against the property owner, the property owner should document the
        timeline carefully: when the claim was filed, when the contractor was hired, when the
        carrier received the estimate or supplement, when the carrier responded (or failed to
        respond), and when the lien was filed. This timeline may become important in a subsequent
        bad faith claim against the carrier, where the property owner can demonstrate that the
        carrier&apos;s unreasonable delay directly caused concrete harm to the property owner &mdash;
        including the cloud on title from the lien, the cost of removing the lien, and the
        stress and expense of the entire situation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property owners dealing with carrier delays on{' '}
        <Link href="/resources/supplement-process-insurance-claims" className="text-[#2E74B5] underline">
          supplements
        </Link>{' '}
        should be aware that the longer the carrier takes to pay, the greater the risk that
        contractor liens will follow. This is another reason why having a public adjuster or
        attorney involved early in the process can be critical &mdash; not just for negotiating
        the claim amount, but for keeping pressure on the carrier to pay within the regulatory
        timelines.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps When a Contractor Threatens or Files a Lien
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a property owner in the middle of an insurance claim and a contractor has
        either threatened to file a lien or has already recorded one, here is a practical
        framework for responding.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Do Not Panic, But Do Not Ignore It
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A mechanics lien is a serious legal matter, but it is not an emergency that requires
        immediate payment. The contractor cannot seize your property, evict you, or force a sale
        without first filing a lawsuit and obtaining a court judgment. You have time to respond
        thoughtfully. However, you should not ignore the lien &mdash; there are deadlines for
        the contractor to file suit, and your failure to respond can result in a default judgment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Verify the Contractor&apos;s Credentials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Check the contractor&apos;s license status, license classification,
        workers&apos; compensation insurance, and bond. If the contractor was unlicensed at any
        point during the work, the lien may be unenforceable under Business and Professions Code
        &sect;7031. If the contractor performed work outside their license classification, the
        lien may be partially or wholly invalid.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Review the Scope and the Invoice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compare the lien amount against the contractor&apos;s invoice, the original{' '}
        <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
          estimate or bid
        </Link>
        , and the actual work performed. Identify any discrepancies. Note any work that was
        included in the lien but was not completed. Document the current state of the property
        with photographs and written notes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Evaluate Any Counterclaims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assess whether the contractor damaged your property, performed work incorrectly, used
        inferior materials, or otherwise caused harm that gives rise to a counterclaim. Document
        these issues with photographs, independent inspections, and repair estimates. A strong
        counterclaim can offset or even exceed the lien amount.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Consult with an Attorney
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This step is not optional. If a contractor has filed a mechanics lien on your property,
        you need legal counsel. Mechanics lien law involves strict deadlines, specific procedural
        requirements, and significant financial consequences. An experienced construction or real
        estate attorney can evaluate the validity of the lien, identify your defenses, assess
        your counterclaims, and advise on the best course of action &mdash; whether that is
        negotiating a resolution, petitioning for a release order, posting a lien release bond,
        or defending against a foreclosure action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you also have a dispute with your insurance company, you may need both a construction
        attorney (for the lien issues) and an insurance coverage attorney (for the claim dispute).
        In some cases, one attorney may handle both. In other cases, you may need specialists in
        each area. Your public adjuster can help coordinate these different aspects of the
        situation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Communicate with the Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the reason you have not paid the contractor is that your insurance company has not paid
        you, make sure the carrier is aware of the lien situation. Put it in writing. Explain that
        the carrier&apos;s delay in processing the claim or paying the supplement has directly
        resulted in a mechanics lien being filed against your property. Request immediate payment
        of the undisputed amounts. This documentation becomes part of the record if you later
        pursue a bad faith claim against the carrier.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Property Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything discussed in this article applies to commercial properties as well as
        residential. However, commercial property owners face additional considerations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Larger projects, more subcontractors.</strong> Commercial repairs often involve
          more trades, more subcontractors, and higher dollar amounts. The risk of subcontractor
          liens is correspondingly greater. Tracking preliminary notices and managing payments
          is more complex.
        </li>
        <li>
          <strong>Business income losses.</strong> A lien on commercial property can affect the
          owner&apos;s ability to refinance, which may have downstream effects on the business
          operating in the building. Extended repair disputes can compound business income losses
          that may themselves be the subject of an insurance claim.
        </li>
        <li>
          <strong>Tenant considerations.</strong> If the property has tenants, a mechanics lien
          can create complications with lease obligations, tenant improvements, and the
          landlord-tenant relationship. Tenants may become aware of the lien through title
          searches or notifications, which can affect their confidence in the property.
        </li>
        <li>
          <strong>Multiple insurance policies.</strong> Commercial properties may have separate
          policies for the building, business personal property, business income, and builder&apos;s
          risk (during construction). Understanding which policy covers which portion of the
          contractor&apos;s work is important for structuring payments and resolving lien
          disputes.
        </li>
        <li>
          <strong>Payment and performance bonds.</strong> On larger commercial projects, the
          property owner may have required the general contractor to post payment and performance
          bonds. A payment bond provides a fund from which unpaid subcontractors and suppliers
          can be paid, potentially eliminating the need for subcontractor liens. If you have a
          payment bond in place, subcontractors may be directed to make a claim against the bond
          rather than filing a lien on the property.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preventing Lien Problems Before They Start
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best approach to contractor liens in insurance claims is prevention. While you
        cannot always avoid a lien &mdash; especially when the insurance company is the source
        of the delay &mdash; you can take steps to minimize the risk and protect yourself.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Vet the contractor thoroughly.</strong> Before hiring a contractor for
          insurance claim repairs, verify their license, check their CSLB record for complaints
          and disciplinary actions, confirm workers&apos; compensation and general liability
          insurance, and check references from recent projects. A{' '}
          <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
            careful contractor selection process
          </Link>{' '}
          is your best defense against lien problems.
        </li>
        <li>
          <strong>Get the contract in writing.</strong> Every contractor agreement should be in
          writing and should clearly specify the scope of work, the contract price, the payment
          schedule (tied to milestones or progress), and what happens if insurance payments are
          delayed. A well-drafted contract can include provisions requiring the contractor to
          wait a reasonable period for insurance payments before exercising lien rights.
        </li>
        <li>
          <strong>Align the scope with the insurance estimate.</strong> Make sure the contractor&apos;s
          scope of work corresponds to the{' '}
          <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
            insurance estimate
          </Link>{' '}
          and any approved supplements. Discrepancies between the contractor&apos;s scope and
          the carrier&apos;s approved scope are a primary source of payment disputes that lead
          to liens.
        </li>
        <li>
          <strong>Communicate with the contractor about insurance timelines.</strong> Be honest
          with your contractor about where the insurance claim stands. If the carrier is delaying
          payment, tell the contractor. Contractors who understand the situation may be willing to
          work with you &mdash; but only if you keep them informed. Silence breeds suspicion, and
          a contractor who suspects the property owner is sitting on insurance money is far more
          likely to file a lien than one who understands the carrier is the source of the delay.
        </li>
        <li>
          <strong>Make partial payments when possible.</strong> If the insurance company has paid
          a portion of the claim but is disputing the supplement, consider paying the contractor
          for the work corresponding to the amount the carrier has already paid. This demonstrates
          good faith and reduces the outstanding balance, lowering the risk of a lien.
        </li>
        <li>
          <strong>Use lien waivers consistently.</strong> Request conditional lien waivers with
          every progress payment. This creates a clear paper trail showing what has been paid and
          what lien rights have been waived. Use the statutory forms provided in Civil Code
          &sect;8132&ndash;8138.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key California Statutes for Property Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following California statutes are relevant to property owners dealing with contractor
        liens in the context of insurance claims. This is not an exhaustive list, but it covers
        the most important provisions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Civil Code &sect;8000 et seq.</strong> &mdash; The comprehensive statutory
          framework governing mechanics liens, stop payment notices, and payment bonds for
          private works of improvement.
        </li>
        <li>
          <strong>Civil Code &sect;8200&ndash;8216</strong> &mdash; Preliminary notice
          requirements, including who must serve them, when, and on whom.
        </li>
        <li>
          <strong>Civil Code &sect;8410&ndash;8424</strong> &mdash; Conditions to enforcing a
          mechanics lien, including the claim of lien requirements, deadlines, and the willful
          exaggeration forfeiture penalty.
        </li>
        <li>
          <strong>Civil Code &sect;8460</strong> &mdash; The 90-day deadline for commencing a
          lien foreclosure action after recording the claim of lien.
        </li>
        <li>
          <strong>Civil Code &sect;8480&ndash;8488</strong> &mdash; The petition for release
          order process, including the attorney&apos;s fees provision for the prevailing party.
        </li>
        <li>
          <strong>Civil Code &sect;8132&ndash;8138</strong> &mdash; Statutory lien waiver forms
          (conditional and unconditional, progress and final).
        </li>
        <li>
          <strong>Civil Code &sect;8182</strong> &mdash; Notice of completion, which shortens
          the lien recording deadlines for subcontractors and suppliers.
        </li>
        <li>
          <strong>Business and Professions Code &sect;7031</strong> &mdash; The prohibition on
          unlicensed contractors recovering compensation, including the disgorgement remedy.
        </li>
        <li>
          <strong>Labor Code &sect;3700</strong> &mdash; The requirement that employers secure
          workers&apos; compensation insurance.
        </li>
        <li>
          <strong>Penal Code &sect;115</strong> &mdash; Criminal liability for filing a false
          or forged instrument with the county recorder.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Intersection of Lien Rights and the Insurance Claim Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The core tension in every contractor lien situation during an insurance claim is this:
        the property owner hired the contractor to perform covered repairs, the contractor
        performed the work (or part of it), and the insurance company has not paid. The
        property owner is stuck in the middle.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are a few important principles to keep in mind as you navigate this situation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Your insurance policy is a contract between you and the carrier.</strong> The
          contractor is not a party to your insurance policy. The carrier&apos;s obligation is to
          you, not to the contractor. When the carrier fails to pay, the carrier has breached its
          obligation to you &mdash; but that does not relieve your obligation to the contractor.
        </li>
        <li>
          <strong>The contractor&apos;s lien rights exist independently of the insurance claim.</strong>{' '}
          The contractor does not need to wait for the insurance company to pay before exercising
          lien rights. Whether the carrier pays in 30 days or 300 days, the contractor&apos;s
          deadlines for serving preliminary notices, recording liens, and filing foreclosure
          actions continue to run.
        </li>
        <li>
          <strong>Carrier delays can create lien risk.</strong> When a carrier takes months to
          process supplements, respond to correspondence, or issue payments, the property owner
          faces increasing risk of contractor liens. Documenting these delays is essential &mdash;
          both for the lien dispute and for any subsequent bad faith claim against the carrier.
        </li>
        <li>
          <strong>The{' '}
          <Link href="/resources/supplement-process-insurance-claims" className="text-[#2E74B5] underline">
            supplement process
          </Link>{' '}
          and lien deadlines often collide.</strong> A property owner may be in the middle of
          a supplement negotiation when the contractor&apos;s lien deadlines arrive. This creates
          enormous pressure. The property owner cannot pay what the carrier has not yet approved.
          The contractor cannot wait indefinitely. Something has to give &mdash; and it is
          usually the property owner who bears the consequences.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Choosing the Right Contractor to Minimize Lien Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many lien problems can be avoided by{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          choosing the right contractor
        </Link>{' '}
        from the beginning. A contractor who has experience with insurance claim repairs
        understands the delays inherent in the process. An experienced contractor knows that
        the carrier may take weeks or months to process supplements, and builds that reality
        into their business model.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors who do not regularly handle insurance work may not understand why they are
        not being paid and may default to filing a lien as their first recourse. This does not
        make them dishonest &mdash; they may simply be accustomed to commercial or private
        projects where payment follows a predictable schedule. The mismatch between their
        expectations and the reality of insurance claim timelines creates friction that can
        escalate to a lien.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When selecting a contractor for insurance claim repairs, look for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Experience working on insurance claims specifically, not just general construction
        </li>
        <li>
          A track record of{' '}
          <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
            understanding Xactimate pricing
          </Link>{' '}
          and the insurance estimate format
        </li>
        <li>
          Willingness to work with the property owner and the public adjuster or attorney during
          the supplement process
        </li>
        <li>
          A clear, written contract that addresses insurance-specific payment timelines
        </li>
        <li>
          Proper licensing, bonding, and workers&apos; compensation insurance verified through
          the CSLB
        </li>
        <li>
          References from prior insurance claim projects that you can verify
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Both the Carrier and the Contractor Are Part of the Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the situation is more complicated than a good contractor waiting for a slow
        carrier. Sometimes the contractor has performed substandard work, inflated the invoice,
        or failed to complete the scope &mdash; and the carrier is also disputing legitimate
        items, delaying payments, or lowballing the estimate. The property owner is caught
        between two parties, neither of whom is acting entirely reasonably.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In these situations, it is essential to separate the two disputes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The dispute with the contractor</strong> is about the quality and scope of
          work performed, the accuracy of the invoice, the validity of the lien, and any
          counterclaims for damage or defective work. This is a construction law matter.
        </li>
        <li>
          <strong>The dispute with the insurance company</strong> is about the scope of covered
          repairs, the amount owed under the policy, the timeliness of payment, and compliance
          with{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            fair claims settlement regulations
          </Link>
          . This is an insurance coverage matter.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keeping these disputes separate &mdash; even though they involve the same property and
        the same repairs &mdash; will help you and your legal team develop the right strategy
        for each. The resolution of one dispute may influence the other, but they should be
        analyzed and addressed independently.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can a contractor file a lien if the insurance company hasn&apos;t paid me yet?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. The contractor&apos;s right to lien your property is based on the contractor&apos;s
        contract with you, not on your insurance policy. Whether or not the insurance company
        has paid you has no effect on the contractor&apos;s lien rights. If the contractor
        performed work and was not paid, the contractor can file a lien regardless of the reason
        for non-payment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does the insurance company have any obligation to pay the contractor directly?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Generally, no. The insurance company&apos;s obligation is to the policyholder (the
        property owner), not to the contractor. The carrier typically issues payment to the
        named insured and any mortgage company listed as a loss payee. Some policies may allow
        direct payment to the contractor under certain circumstances, but this is the exception
        rather than the rule. The property owner is responsible for paying the contractor from
        the insurance proceeds.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What happens if I pay the contractor and the insurance company later disputes the amount?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the risks property owners face. If you pay the contractor the full
        invoice amount and the carrier later approves only a lesser amount, you may be out of
        pocket for the difference. This is why it is generally advisable to align the
        contractor&apos;s scope and pricing with the insurance estimate and supplements before
        work begins, and to have a contract that addresses this scenario. The{' '}
        <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
          relationship between estimates, bids, and invoices
        </Link>{' '}
        should be clearly understood by both parties.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can I sue my insurance company for the cost of removing a contractor&apos;s lien?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Potentially, yes. If the insurance company&apos;s unreasonable delay in paying your
        claim directly caused the contractor to file a lien, the costs you incurred to remove
        that lien (attorney&apos;s fees, bond costs, court costs) may be recoverable as
        damages in a bad faith action against the carrier. However, proving the causal connection
        between the carrier&apos;s delay and the lien can be complex. Thorough documentation of
        the timeline is essential. Discuss this with your insurance coverage attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How long does a mechanics lien last?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recorded mechanics lien is enforceable for 90 days from the date it was recorded.
        Within that 90-day period, the claimant must file a lawsuit to foreclose the lien. If
        no lawsuit is filed within 90 days, the lien expires by operation of law and is no
        longer enforceable (Civil Code &sect;8460). However, the expired lien may still appear
        on the property&apos;s title record. The property owner can petition the court under
        Civil Code &sect;8480 for an order releasing the expired lien.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What if the contractor who filed the lien was not licensed?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Business and Professions Code &sect;7031, an unlicensed contractor cannot recover
        compensation for work performed. This effectively bars the contractor from enforcing a
        mechanics lien. The property owner may be entitled to disgorgement &mdash;
        the return of all compensation already paid to the unlicensed contractor. This is a
        powerful defense and potential counterclaim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Final Thoughts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A mechanics lien in the middle of an insurance claim is one of the most stressful
        situations a property owner can face. You are dealing with a damaged property, a
        carrier that is not paying promptly, and a contractor who is understandably concerned
        about getting paid. The law does not pause for insurance delays &mdash; lien deadlines
        run on their own schedule, and the consequences of ignoring them are real.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But you are not powerless. You have defenses. You have rights. You may have counterclaims.
        The law provides tools for challenging invalid liens, punishing willfully exaggerated
        claims, and holding both contractors and insurance companies accountable. The key is to
        act early, document everything, and get the right professional help &mdash; a public
        adjuster for the insurance claim, a construction attorney for the lien dispute, and an
        insurance coverage attorney if the carrier&apos;s conduct rises to the level of bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not wait until the contractor files a foreclosure lawsuit to take action. By that
        point, your options are narrower and the costs are higher. Address the lien early,
        understand your rights, and use every legal tool available to protect your property.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
            Choosing Your Contractor for Insurance Claim Repairs
          </Link>
        </li>
        <li>
          <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
            Understanding Estimates, Bids, Invoices, and Xactimate
          </Link>
        </li>
        <li>
          <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
            Sub-Bids vs. Xactimate Pricing
          </Link>
        </li>
        <li>
          <Link href="/resources/supplement-process-insurance-claims" className="text-[#2E74B5] underline">
            The Supplement Process in Insurance Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims Settlement Practices
          </Link>
        </li>
        <li>
          <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
            When Incomplete Repairs Create New Problems
          </Link>
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
