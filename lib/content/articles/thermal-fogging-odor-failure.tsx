import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When Thermal Fogging Fails: Smoke Odor That Comes Back',
  description:
    "When smoke odor returns weeks or months after a home was deodorized, it's often a sign the source was masked, not removed. What recurrence means for a California smoke claim.",
  summary:
    "Thermal fogging is a deodorization tool, not a source-removal method. When smoke odor returns after a home was fogged and the claim was closed, the recurrence is a signal that embedded soot, char, or contaminated materials were never addressed. This article explains why fogging alone commonly fails on real smoke damage, and how a documented recurrence supports reopening or supplementing the claim under California's Fair Claims Settlement Practices Regulations.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice, and it does not resolve coverage on any
          particular claim, which always depends on the actual policy language and the
          facts of the loss. For legal questions about a specific smoke-damage claim
          &mdash; including any question about a closed claim &mdash; the reader should
          consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A practitioner&apos;s look at why smoke odor so often returns after a home has
          been &ldquo;deodorized&rdquo; &mdash; the difference between neutralizing an
          odor at the surface and removing the contamination that produces it &mdash; and
          what a documented recurrence supports under California Insurance Code section
          2071 and the Fair Claims Settlement Practices Regulations at 10 CCR section
          2695.9.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The pattern is common enough to be predictable. A home takes on smoke damage from
        a nearby fire. A restoration crew is dispatched, the interior is cleaned, and at
        some point a technician performs a deodorization treatment &mdash; often thermal
        fogging, in which a deodorizing agent is heated into a dense fog and dispersed
        through the structure. The acrid smell fades. The claim is marked resolved. The
        family, relieved, moves back in.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Then, several weeks later &mdash; sometimes on the first hot afternoon, sometimes
        the first time the air conditioning runs for a full day &mdash; the smell is back.
        Faint at first, then unmistakable. It comes and goes with the weather. It seems
        worse in certain rooms, near certain vents, on humid days. And the policyholder is
        left wondering whether the remediation ever worked, or whether it simply covered
        the problem long enough for everyone to sign off and go home.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In restoration practice, returning odor is not a mystery. It is frequently the
        first honest signal that the treatment addressed the symptom rather than the
        source. This article explains why that happens, and what a documented recurrence
        supports when the claim has already been closed. It is a companion to this
        site&apos;s primary guide,{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          Smoke Damage Insurance Claims in California
        </Link>
        , which covers testing, remediation standards, and coverage in depth; readers new
        to smoke claims may want to start there.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Deodorization Is Not the Same as Source Removal
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Thermal fogging is one deodorization method among several. As it is generally
        understood in the restoration industry, the technique heats a petroleum- or
        water-based deodorizing compound into a fine fog that is intended to travel the
        same pathways the original smoke traveled &mdash; into cracks, around trim, along
        air currents &mdash; so that the deodorizer contacts and chemically neutralizes
        the odor-causing residues it reaches. The theory is sound as far as it goes: smoke
        odor is produced by residues, and a fog can follow smoke into places a cloth
        cannot.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Fogging is only one tool, though, and it was never meant to stand alone. A
        complete response to real smoke damage generally involves several distinct steps:
        physical cleaning of surfaces, removal or sealing of materials that cannot be
        cleaned, remediation of the HVAC system and ductwork, and often a controlled
        packout of contaminated contents for off-site cleaning. Deodorization sits at the
        end of that sequence &mdash; it is the finishing step that addresses residual
        odor after the sources of odor have been physically removed. When fogging is used
        as a substitute for that removal rather than a complement to it, the limitation of
        the method tends to reveal itself on a delay.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That limitation is straightforward. A deodorizing fog acts on the surfaces and the
        air it can reach. It does not extract soot and char that have embedded themselves
        in porous materials, migrated into wall cavities, settled in insulation, or lined
        the interior of ductwork. Where the odor-producing contamination has moved into
        places the fog cannot penetrate &mdash; or can penetrate only briefly &mdash; the
        treatment can suppress the smell for a period without removing what causes it. The
        residues remain. Given the right conditions, they announce themselves again.
      </p>

      <CalloutBox variant="warning" title="A Treated Smell and a Removed Source Are Different Outcomes">
        <p>
          A home can smell clean the week after fogging and smell like smoke again a month
          later without anything having gone wrong with the fog itself. Deodorization is
          designed to neutralize odor at the surface and in the air. It is not designed to
          remove embedded soot and char from porous materials, wall cavities, insulation,
          or the HVAC system. When those sources are left in place, the return of odor is
          the expected result, not an anomaly.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Porous-Materials and Cavity Problem
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke does not settle politely on visible surfaces. As this site&apos;s{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          smoke damage guide
        </Link>{' '}
        discusses, fine particulate penetrates drywall, insulation, ductwork, attic
        spaces, and crawl spaces, and it works its way into wall cavities through outlets,
        switch boxes, and plumbing penetrations. Porous materials &mdash; drywall paper,
        insulation, framing, carpet padding, upholstery foam, textiles &mdash; absorb and
        hold odor-bearing residues the way a sponge holds water. A fog that passes through
        a room for a matter of minutes reaches the exposed face of those materials. It
        does not reach the residue held deep inside them, or the residue sealed behind a
        painted wall.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is why restoration professionals distinguish, as a matter of routine, between
        materials that can be cleaned in place, materials that must be removed and
        replaced, and materials that can be sealed to lock residual contamination behind a
        barrier. Fogging performs none of those functions. A wall cavity that holds smoke
        residue is not emptied by a fog, and a section of contaminated insulation is not
        made clean by one. When the scope of the original work relied on deodorization to
        do what removal and sealing were supposed to do, the embedded sources are still
        present after the crew leaves &mdash; and the odor they produce is only waiting for
        a reason to become noticeable again.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why Heat, Humidity, and the HVAC Bring the Odor Back
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The timing of a recurrence usually tracks the conditions that reactivate residual
        residues. Smoke residues are understood, in restoration practice, to become more
        volatile &mdash; more inclined to release odor into the air &mdash; as temperature
        and humidity rise. A wall cavity or an attic that stayed cool and dry through a
        winter can begin off-gassing again with the first stretch of summer heat. A humid
        week can do the same. This is one reason a home can pass a casual sniff test in
        March and smell strongly of smoke in July, with no new event in between.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The HVAC system compounds the effect. Ductwork that was contaminated during the
        loss and cleaned only at the surface &mdash; or not cleaned at all &mdash; acts as
        a reservoir. When the system runs, it pulls air across residue-lined ducts,
        registers, and the interior of the air handler, and then distributes that air, and
        its odor, through the entire house. A deodorizing fog that touched the living
        spaces but did not resolve the contamination inside the duct system leaves that
        reservoir intact. The first sustained run of heating or cooling after the family
        moves back is, in many homes, exactly when the smell returns &mdash; because that
        is when the contaminated system starts moving air again.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this is a criticism of deodorization as such. Thermal fogging and related
        methods have a legitimate place at the end of a properly scoped remediation. The
        point is narrower and, in the author&apos;s experience, reliable: when odor
        returns with heat, humidity, or HVAC operation after a home was treated, the
        recurrence is generally pointing at a source that was never removed &mdash; not at
        a treatment that needs to be repeated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Recurrence Is a Claims Problem, Not Just a Nuisance
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        For the policyholder, returning smoke odor is an obvious inconvenience. For the
        claim, it is something more specific. In many of these files, the deodorization was
        treated as the smoke remedy &mdash; the line item that supposedly resolved the
        smoke component of the loss &mdash; and the claim was closed on the strength of it.
        When the odor comes back, it raises a direct question about whether the original
        scope of work was ever adequate to the damage. A remedy that has to be undone by
        the weather a month after it was performed did not restore the property; it
        deferred the problem.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That places recurrence squarely in the territory of the reopened or supplemental
        claim. A returning odor after a &ldquo;completed&rdquo; remediation is closely
        related to the situation described in this site&apos;s article on{' '}
        <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
          repairs that leave the property short of pre-loss condition
        </Link>
        : the covered work was performed, the file was closed, and yet the home is not
        actually restored. A house that smells of smoke is not in its pre-loss condition,
        whatever the closing letter says.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanics of raising it depend on where the claim stands. If the claim remains
        open, the recurrence supports a supplemental scope &mdash; additional work within
        the same loss, not a new claim. This site&apos;s guide to{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] underline">
          supplemental claims
        </Link>{' '}
        covers how that works and why a supplement is part of the original loss rather than
        a separate matter. If the claim has already been closed, the recurrence is grounds
        to ask that it be reopened; the companion article on{' '}
        <Link href="/resources/reopening-closed-claims" className="text-[#2E74B5] underline">
          reopening closed claims
        </Link>{' '}
        addresses the process and the documentation that tends to support such a request.
        A closed claim is not a barred claim, and a persuasive recurrence &mdash;
        documented rather than merely described &mdash; is one of the more common reasons
        a carrier agrees to look again.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Documented Recurrence Supports
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Recurring odor, on its own, is a subjective complaint, and a subjective complaint
        is easy for a carrier to discount. What converts it into something a carrier has to
        engage with is documentation and independent assessment. Three lines of support
        tend to matter most.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Request to Reopen or Supplement, Built on a Timeline
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The first thing recurrence supports is simply the request itself &mdash; and the
        request is stronger when it rests on a record rather than an impression. A dated
        log of when the odor returned, which rooms it is worst in, and what conditions
        bring it on (a hot day, a humid stretch, the first extended run of the air
        conditioning) turns &ldquo;the smell came back&rdquo; into a pattern that points at
        a physical cause. Photographs of any visible residue, and notes tying the odor to
        the HVAC cycling on, build the same record. A timeline that shows odor returning
        predictably with heat and system operation is far harder to dismiss as
        imagination than a single complaint made over the phone.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        An Independent Assessment of the Source
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The second thing recurrence supports is an independent assessment aimed at
        identifying the source rather than re-treating the symptom. Odor and air testing,
        surface sampling, and source identification by a qualified professional can
        establish whether odor-producing contamination remains in the materials, the
        cavities, or the duct system &mdash; the places a fog would not have reached. This
        is the difference between asking a carrier to pay for another round of fogging and
        showing the carrier where the untreated contamination actually sits. For how
        laboratory analysis distinguishes genuine embedded soot and char from a lingering
        surface smell, see this site&apos;s guide to{' '}
        <Link href="/resources/soot-char-lab-testing" className="text-[#2E74B5] underline">
          soot and char laboratory testing
        </Link>
        , and the testing and sampling discussion in the{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          primary smoke damage guide
        </Link>
        . Independent testing does what a recurring smell alone cannot: it names the source
        and locates it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Recommended-Vendor Guarantee
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The third line of support applies in a specific and common situation: where the
        carrier recommended or arranged the restoration vendor that performed the work.
        California&apos;s Fair Claims Settlement Practices Regulations attach a particular
        consequence to that arrangement. Under 10 CCR section 2695.9, subdivision (c), an
        insurer generally may not steer an insured to a specific repair vendor unless
        certain conditions are met; and where those conditions are met and the claimant
        accepts the carrier&apos;s recommendation, subdivision (c)(2) provides:
      </p>

      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-700 mb-4">
        &ldquo;the claimant has been informed in writing of the right to select a repair
        individual or entity and, if the claimant accepts the suggestion or recommendation,
        the insurer shall cause the damaged property to be restored to no less than its
        condition prior to the loss and repaired in a manner which meets accepted trade
        standards for good and workmanlike construction at no additional cost to the
        claimant other than as stated in the policy or as otherwise allowed by these
        regulations.&rdquo;
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-4">
        The operative words are &ldquo;the insurer <em>shall cause</em> the damaged
        property to be restored to no less than its condition prior to the loss &hellip; at
        no additional cost to the claimant.&rdquo; The duty runs to the result, not merely
        to the dispatch of a vendor. A home that smells of smoke because embedded
        contamination was fogged over rather than removed is not, on its face, restored to
        no less than its pre-loss condition. Where the carrier recommended the vendor and
        the accepted work left the property in that state, this provision is a reasonable
        basis for asking the carrier to cause the deficiency to be corrected at no
        additional cost &mdash; a point developed further in the article on{' '}
        <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
          repairs that fall short of pre-loss condition
        </Link>
        . Whether the subdivision applies to a given claim depends on the facts &mdash;
        principally whether the carrier actually recommended the vendor and whether the
        written-notice conditions were met &mdash; and that is ultimately a question for
        counsel; but where those facts are present, the guarantee is worth invoking by its
        terms.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Documents and Regulations Worth Knowing
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A recurrence conversation goes better when it is grounded in the specific
        authorities that apply. Three are worth understanding, each characterized carefully
        and none a substitute for legal advice on a particular claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Recommended-Vendor Correction Duty &mdash; 10 CCR &sect; 2695.9(c)(2)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        As set out above, where the carrier recommended the vendor and the claimant
        accepted after written notice of the right to choose, the regulation requires the
        insurer to cause the property to be restored to no less than its pre-loss condition
        and repaired to accepted trade standards, at no additional cost to the claimant.
        This is the provision most directly on point when a carrier-arranged deodorization
        did not hold. It is a correction duty tied to the recommended-vendor arrangement,
        and it operates independently of any argument about the policy&apos;s coverage
        terms.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Investigation Duty &mdash; 10 CCR &sect; 2695.7(d)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.7(d) requires every insurer to conduct and diligently pursue a
        &ldquo;thorough, fair and objective investigation&rdquo; of a claim, and forbids
        persisting in seeking information not reasonably required. When a policyholder
        reports that smoke odor has returned after a home was deodorized, that report is
        new information about the loss. A carrier that responds by pointing to a closed
        file &mdash; without inspecting the home, without any source assessment, without
        engaging the reported recurrence at all &mdash; invites the question whether its
        renewed handling was thorough, fair, and objective. The regulation does not
        guarantee a particular outcome; it does establish that a returning-odor report is
        entitled to an actual investigation rather than a reflexive denial.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Claim Documents &mdash; Insurance Code &sect; 2071
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The paper trail behind the original deodorization is often the most useful evidence
        about whether the smoke component was ever properly scoped &mdash; and the
        policyholder is entitled to most of it. California Insurance Code section 2071
        requires insurers to provide claim-related documents to the claimant within 15
        calendar days of a request, a request best made in writing so the timing is
        provable. The remediation protocol or work authorization that defined the original
        scope, the restoration vendor&apos;s invoice and line items, and any post-work
        verification &mdash; a clearance test, a completion certificate, a final
        walkthrough report &mdash; all relate to the evaluation of the loss and generally
        fall within the documents an insured may obtain on request. This site&apos;s{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          smoke damage guide
        </Link>{' '}
        discusses the value of a post-remediation clearance test; where no such test was
        ever performed, its absence from the produced file is itself telling. Requesting
        these documents is a practical step a policyholder may consider before or alongside
        a request to reopen, because they show what the carrier believed it was paying for.
      </p>

      <CalloutBox variant="important" title="Ask for the Verification That Was Supposed to Close the Loop">
        <p>
          Proper smoke remediation is generally confirmed by a post-remediation clearance
          test &mdash; independent verification that contamination has been brought down to
          acceptable levels. A file that contains a deodorization invoice but no clearance
          testing suggests the work was declared finished without ever being verified.
          Under Insurance Code section 2071, a policyholder may request the remediation
          protocol, the vendor&apos;s invoice, and any verification records, and the
          insurer generally must provide them within 15 calendar days of a written request.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Honest Framing: What a Recurrence Claim Realistically Wins
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth being candid about where this leads, because the goal is a corrected
        home rather than a dramatic confrontation. A documented recurrence &mdash; a dated
        odor timeline, photographs, the pattern of the smell tracking heat and HVAC
        operation, and, ideally, an independent assessment identifying where the
        contamination sits &mdash; supports a request that the carrier reopen its
        investigation and scope the work it should have scoped the first time: removal of
        the sources, not another pass of deodorizer over them. That is the substance of the
        ask.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The realistic win, though, is usually a re-inspection and a supplemental scope, not
        an automatic payment. A carrier presented with a credible, documented recurrence
        and a source assessment tends to agree to look again; what follows is an inspection
        and a negotiation over the corrected scope of work, the same as any other
        supplement. Framing the request that way &mdash; a reopened investigation and a
        source-removal scope, supported by the record &mdash; is both more accurate and more
        effective than demanding a number. The regulations that apply here define a
        standard of conduct and a correction duty; they do not write a check on their own.
        What they do is give a well-documented recurrence a place to stand.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The underlying reality is simpler than the regulatory framework around it. A home
        that smells of smoke months after it was declared clean was not restored; it was
        deodorized. The odor came back because the thing producing it never left. Naming
        that difference &mdash; between a treated smell and a removed source &mdash; and
        documenting it is what turns a frustrating recurrence into a claim the carrier has
        a reason to address.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The smoke smell came back weeks after thermal fogging. Does that mean the treatment
        was done wrong?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not necessarily &mdash; and that is the point. Thermal fogging is a deodorization
        method, understood in the restoration industry to neutralize odor at the surface
        and in the air. It is not designed to remove soot and char embedded in porous
        materials, wall cavities, insulation, or the HVAC system. When those sources remain
        in place, odor commonly returns as heat, humidity, or HVAC operation reactivates the
        residues &mdash; even if the fogging itself was performed competently. A recurrence
        generally signals that the underlying contamination was never removed, rather than
        that the fog was applied incorrectly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Smoke odor returned after cleaning and the insurance claim is already closed. Can it
        be reopened?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A closed claim is not a barred claim. Returning odor after a &ldquo;completed&rdquo;
        remediation is one of the more common grounds for asking a carrier to reopen,
        because it indicates the original scope did not restore the property. A request
        supported by a dated odor timeline, photographs, and &mdash; where possible &mdash;
        an independent source assessment is considerably stronger than a phone complaint.
        This site&apos;s guides to{' '}
        <Link href="/resources/reopening-closed-claims" className="text-[#2E74B5] underline">
          reopening closed claims
        </Link>{' '}
        and{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] underline">
          supplemental claims
        </Link>{' '}
        cover the process. Whether any particular claim can be reopened depends on the facts
        and the policy, and questions about a specific closed claim belong with a licensed
        attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The insurer&apos;s own restoration company did the fogging and it didn&apos;t work.
        Is the insurer responsible?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Where the carrier recommended or arranged the vendor and the insured accepted after
        being informed in writing of the right to choose, 10 CCR section 2695.9(c)(2)
        provides that the insurer shall cause the property to be restored to no less than
        its pre-loss condition, repaired to accepted trade standards, at no additional cost
        to the claimant. A home left smelling of smoke because contamination was fogged over
        rather than removed is not, on its face, restored to pre-loss condition, which is a
        reasonable basis for asking the carrier to correct the work. Whether the subdivision
        applies turns on the facts &mdash; principally whether the carrier actually
        recommended the vendor and gave the required written notice &mdash; and that
        determination is ultimately a legal question for counsel.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What documents help prove that the original smoke remediation was inadequate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most useful documents are the ones that define what the carrier paid for and
        whether it was ever verified: the remediation protocol or work authorization, the
        restoration vendor&apos;s invoice and line items, and any post-work verification
        such as a clearance test or completion report. Under California Insurance Code
        section 2071, an insured may request claim-related documents and the insurer
        generally must provide them within 15 calendar days of the request, which is best
        made in writing. A file that shows a deodorization charge but no clearance testing
        is itself evidence that the work was declared finished without being confirmed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why does the smell come back on hot or humid days, or when the air conditioning
        runs?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Smoke residues are understood, in restoration practice, to release odor more readily
        as temperature and humidity rise, so residual contamination in walls, attics, or
        insulation can begin off-gassing again with the first summer heat or a humid
        stretch. Contaminated ductwork adds a second mechanism: when the HVAC system runs,
        it moves air across residue-lined ducts and the air handler and distributes that odor
        through the house. A treatment that touched the living spaces but did not resolve the
        embedded sources or the duct contamination leaves both mechanisms intact, which is
        why the odor so often returns on exactly the days the home warms up or the system
        cycles on.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
            Smoke Damage Insurance Claims in California
          </Link>{' '}
          &mdash; the primary guide: testing, remediation standards, coverage, and common
          insurer tactics on smoke claims
        </li>
        <li>
          <Link href="/resources/soot-char-lab-testing" className="text-[#2E74B5] underline">
            Soot and Char Laboratory Testing
          </Link>{' '}
          &mdash; how laboratory analysis identifies and locates embedded contamination a
          deodorizing fog would not reach
        </li>
        <li>
          <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
            When the Carrier&apos;s Fix Creates a New Problem
          </Link>{' '}
          &mdash; the duty to restore to pre-loss condition when approved work falls short,
          including the recommended-vendor guarantee
        </li>
        <li>
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] underline">
            Supplemental Claims
          </Link>{' '}
          &mdash; how additional work within the same loss is handled when the original
          scope proves inadequate
        </li>
        <li>
          <Link href="/resources/reopening-closed-claims" className="text-[#2E74B5] underline">
            Reopening Closed Claims
          </Link>{' '}
          &mdash; the process and documentation that support asking a carrier to look at a
          closed claim again
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Smoke Odor Back After Your Home Was &ldquo;Cleaned&rdquo;?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A returning smell after deodorization often means the source was never removed. A
          Public Adjuster can help document the recurrence and press for a corrected,
          source-removal scope.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

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
