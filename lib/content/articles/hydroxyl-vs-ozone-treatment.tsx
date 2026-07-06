import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Hydroxyl vs. Ozone Treatment: What the Claim Should Pay For',
  description:
    "Hydroxyl and ozone are both odor-remediation tools, but they are not interchangeable. What each does, the occupied-versus-unoccupied difference, and how the method choice shows up in a California smoke claim.",
  summary:
    "Hydroxyl generators and ozone machines both neutralize odor, but they differ on the one variable that drives a claim: occupancy. Ozone is a strong oxidizer that requires an unoccupied, sealed space and can degrade certain materials; hydroxyl runs slower but is generally regarded as safe to operate while people remain in the home. Neither removes embedded soot. This article covers the practitioner-level distinction, why the method drives cost, timeline, and displacement, and how a California policyholder can evaluate whether the chosen approach fits the loss.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster on how odor-remediation methods are scoped and paid in property
          claims. It is not legal advice, and it is not industrial-hygiene,
          medical, or safety advice. The descriptions of ozone and hydroxyl
          technology below reflect general understanding within the restoration
          industry and are not verified engineering or health findings. For legal
          questions about a specific claim &mdash; and for any question about the
          safe operation of any deodorization equipment &mdash; the reader should
          consult a licensed attorney and a qualified restoration or industrial
          hygiene professional.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          A practitioner&apos;s look at two odor-remediation technologies &mdash;
          ozone and hydroxyl generation &mdash; that carriers and restoration
          vendors reach for on smoke and fire claims, why the choice between them
          drives cost, timeline, and whether a family can stay in the home, and how
          a policyholder can tell whether the method that was scoped actually fits
          the loss.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        On a smoke claim, the word most likely to appear in a restoration proposal
        is not &ldquo;cleaning&rdquo; or &ldquo;sealing.&rdquo; It is
        &ldquo;deodorization.&rdquo; And the two machines most often named in that
        line are the ozone generator and the hydroxyl generator. Both are
        legitimate tools. Both neutralize odor. But they are not interchangeable,
        and the difference between them is not a technicality &mdash; it changes how
        long the work takes, what it costs, whether the household has to move out
        while it runs, and, in some cases, whether the treatment damages the very
        contents it is supposed to save. This article walks through the distinction
        at a practical level and then explains why, in the author&apos;s experience,
        the method that gets scoped is sometimes chosen for the carrier&apos;s
        convenience rather than the loss in front of it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a companion piece to this site&apos;s primary guide,{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          Smoke Damage Insurance Claims in California
        </Link>
        , which covers the foundational point that smoke, soot, and ash constitute
        direct physical damage and must be assessed through testing rather than a
        visual walk-through. The purpose here is narrower: to explain the
        deodorization step itself, where it belongs in a scope, and where it does
        not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Two Technologies, One Decisive Difference
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both machines attack odor by chemistry rather than by wiping surfaces, and
        both are commonly described in the restoration industry as
        &ldquo;oxidation&rdquo; approaches &mdash; they change the odor-causing
        molecules rather than merely covering them. That is where the similarity
        ends. The single most important practical difference between them is whether
        the space has to be empty of people, pets, and plants while the machine
        runs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Ozone (O&#8323;)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        An ozone generator produces ozone &mdash; a highly reactive form of oxygen
        that, as generally understood in the restoration industry, is a strong
        oxidizer. It is effective at neutralizing a wide range of odors, including
        the persistent, embedded odor of smoke. The tradeoff is that ozone is
        commonly understood to be hazardous to people, pets, and plants at the
        concentrations used for deodorization. For that reason, ozone treatment is
        conventionally performed in a space that has been <em>vacated and
        sealed</em>: the occupants leave, the area is closed off, the machine runs
        for a set period, and the space is then ventilated and allowed to clear
        before anyone re-enters. This is not an optional refinement; the
        unoccupied-and-sealed protocol is central to how the industry treats ozone.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ozone also carries a material-compatibility caution. It is commonly
        understood in the restoration industry that ozone, precisely because it is a
        strong oxidizer, can degrade or damage certain materials over the course of
        treatment &mdash; rubber and elastic components, some plastics, certain
        finishes, and delicate items such as artwork are the categories most often
        flagged. Whether any particular material is at risk in any particular
        protocol is a judgment for a qualified restoration professional, and the
        specifics vary with concentration and exposure time. The point for claims
        purposes is simply that ozone is not universally safe for all contents, and
        a contents-heavy loss may need the contents handled differently from the
        structure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hydroxyl Generation
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A hydroxyl generator works differently. It uses ultraviolet light to
        generate hydroxyl radicals from the humidity already in the air. Those
        radicals, as generally understood in the industry, break down odor-causing
        compounds in a manner broadly analogous to how the atmosphere neutralizes
        odors outdoors. The defining practical feature of hydroxyl technology is the
        one that matters most on a claim: it is generally regarded within the
        restoration industry as safe to operate in <em>occupied</em> spaces, which
        means the work can proceed while the household remains in the home rather
        than requiring everyone to leave.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The tradeoff runs the other direction. Hydroxyl generation is commonly
        understood to work more slowly than ozone. A job that ozone might address in
        a short, intense, unoccupied cycle may take a hydroxyl generator
        considerably longer &mdash; more days of run time, sometimes with multiple
        units placed around the affected area. Neither approach is
        &ldquo;better&rdquo; in the abstract. Each buys something at the other&apos;s
        expense: ozone buys speed at the cost of occupancy and material
        compatibility; hydroxyl buys occupancy and gentleness at the cost of time.
      </p>

      <CalloutBox variant="info" title="The Occupancy Question Comes First">
        <p>
          Before any argument about which machine is &ldquo;stronger,&rdquo; the
          threshold question is whether the household can remain in the home during
          treatment. That single fact &mdash; occupied or unoccupied &mdash; often
          decides the method more than any other consideration, because it drives
          both the safety protocol and the additional-living-expense exposure. A
          method that requires vacating the home is not just a different machine; it
          is a different displacement timeline.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Choice Shows Up in the Claim
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner might reasonably assume that the choice of odor machine is a
        technician&apos;s decision with no bearing on the claim. In practice, the
        method drives three things a policyholder cares about directly: what the
        deodorization costs, how long it takes, and whether the family can stay put
        while it happens.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Cost.</strong> The two approaches price differently. Equipment,
        run time, the number of units, setup and containment, and any material
        handling all vary between an ozone protocol and a hydroxyl protocol. A scope
        that assumes one method carries a different number than a scope that assumes
        the other &mdash; and the cheaper method on paper is not always the
        appropriate one for the loss.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Timeline.</strong> Because hydroxyl generally works more slowly, a
        hydroxyl protocol tends to occupy more calendar days than an intensive ozone
        cycle. That difference ripples through the rest of the schedule: the
        deodorization step sits in a sequence alongside cleaning, sealing, and
        HVAC work, and lengthening one step can push the others.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Displacement, and therefore additional living expenses.</strong>
        This is where the method choice touches the policy most directly. An ozone
        protocol that requires the home to be vacated and sealed adds displacement
        time by definition &mdash; the household cannot be present while the machine
        runs, and the space must clear before re-entry. If a home is otherwise
        habitable and the only reason the family cannot be there is an
        ozone-treatment protocol, that protocol is generating additional living
        expense that a hydroxyl approach might not. Where a home is not habitable for
        displacement purposes, the household&apos;s reasonable additional costs
        generally fall under the loss-of-use coverage discussed in this site&apos;s{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          guide to additional living expenses
        </Link>
        . Which method a carrier scopes can therefore change not only the
        deodorization line but the ALE exposure alongside it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of that makes either method wrong. It makes the <em>fit</em> of the
        method to the loss a scope question. The problem the author encounters is
        not a carrier choosing ozone or a carrier choosing hydroxyl; it is a carrier
        selecting whichever method is cheapest or fastest on paper without reference
        to occupancy, materials, or the mix of contents and structure in the loss.
        A method chosen for the vendor&apos;s convenience rather than the loss is a
        scope dispute, and it is best understood systemically &mdash; as the
        predictable result of scoping to a number rather than to the property
        &mdash; rather than as a personal failing of any one adjuster. The framing of
        that disagreement belongs with this site&apos;s discussion of{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          the scope of loss
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Caveat That Governs Every Deodorization Method
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the point that matters more than the choice between the two
        machines, and it is the same spine that runs through this site&apos;s
        articles on{' '}
        <Link href="/resources/thermal-fogging-odor-failure" className="text-[#2E74B5] underline">
          thermal fogging
        </Link>{' '}
        and{' '}
        <Link href="/resources/soot-char-lab-testing" className="text-[#2E74B5] underline">
          soot and char laboratory testing
        </Link>
        : deodorization technology, however good, addresses <em>odor</em>. It does
        not remove embedded soot, char, or particulate contamination from surfaces,
        ductwork, soft goods, or wall cavities.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ozone and hydroxyl both neutralize the smell. Neither reaches into duct
        liner and lifts out the settled particulate; neither pulls char residue out
        of porous contents; neither cleans a contaminated HVAC system. Those are
        source-removal tasks &mdash; cleaning, sealing, replacement of
        non-restorable materials, HVAC remediation &mdash; and they exist whether or
        not a deodorization machine ever runs. Running an odor generator over an
        unremediated loss can leave a home that smells acceptable for a time while
        the underlying contamination remains in place. When odor returns after
        treatment, the usual explanation is not that the wrong brand of machine was
        used. It is that the source was never removed &mdash; that the scope was
        deodorization where it should have been remediation.
      </p>

      <CalloutBox variant="warning" title="Odor Gone Is Not the Same as Contamination Gone">
        <p>
          A deodorization step that leaves the home smelling clean can create the
          impression that the loss is resolved when the embedded contamination is
          still there. If odor returns weeks or months after treatment, the issue is
          almost never which machine was used &mdash; it is whether the source of the
          contamination was ever removed. That is a question of scope adequacy, not
          of treatment brand.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is why deodorization belongs in a scope as <em>one step among
        several</em>, not as the smoke remedy in its own right. A defensible smoke
        scope typically pairs any odor treatment with the cleaning, sealing, HVAC
        work, and source removal that actually eliminate the contamination. A scope
        that lists an ozone or hydroxyl line and little else is not a remediation
        plan; it is a deodorization plan wearing the label of one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Policyholder Can Actually Evaluate
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner does not need to be a restoration technician to assess whether a
        deodorization approach makes sense. A handful of questions tend to surface
        the issues that matter.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Is the method appropriate to occupancy?</strong> If the household
          is living in the home, an ozone protocol that requires the space to be
          vacated and sealed has consequences a hydroxyl approach may not &mdash;
          added displacement and the ALE that comes with it. If the home is already
          unoccupied for other reasons, that particular concern falls away. The
          question is whether the method was matched to the actual living situation
          or chosen without regard to it.
        </li>
        <li>
          <strong>Is the method appropriate to the materials?</strong> Ozone&apos;s
          material-compatibility cautions matter more in a loss heavy with sensitive
          contents &mdash; rubber and elastic goods, certain plastics, artwork,
          delicate finishes. A scope that runs ozone across a room full of such items
          without addressing the compatibility question is worth a second look by a
          qualified professional.
        </li>
        <li>
          <strong>Is deodorization scoped as the whole remedy or as one step?</strong>{' '}
          The single most useful question. If the odor line appears alongside
          cleaning, sealing, HVAC remediation, and source removal, the scope is
          treating deodorization as what it is &mdash; a finishing step. If the odor
          line stands nearly alone, the scope has likely substituted deodorization
          for remediation.
        </li>
        <li>
          <strong>Are contents and structure both addressed?</strong> Structure
          deodorization and contents deodorization are different problems. Contents
          may need to be handled off-site, cleaned individually, or treated by a
          method compatible with the specific materials, rather than swept into a
          single whole-house machine cycle. A scope that names only the structure may
          be leaving the contents question unanswered.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of these questions requires the policyholder to declare a winner between
        ozone and hydroxyl. They simply test whether the chosen method fits the loss
        &mdash; occupancy, materials, contents, and sequence &mdash; or whether it was
        selected in the abstract.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Regulations and Documents in the Background
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Three pieces of California authority bear on how a deodorization scope should
        be built and documented. None of them names ozone or hydroxyl &mdash; they
        operate at the level of the estimate, not the machine &mdash; but each is
        worth understanding in general terms.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.9(d) &mdash; Two Distinct Duties
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Fair Claims Settlement Practices Regulations, at 10 CCR &sect;
        2695.9(d), speak to the written estimate an insurer prepares on a residential
        or commercial property claim. The provision is generally understood to impose
        two separate obligations, and it is worth keeping them separate rather than
        blending them into one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        First, the estimate the insurer prepares is to be of an amount that will
        restore the damaged property to no less than its condition before the loss,
        in a manner consistent with generally accepted trade standards. Second, and
        separately, the insurer is to take reasonable steps to verify that its
        estimate&apos;s costs are accurate and representative of the local market.
        These are two distinct duties. The first is about the <em>standard the
        estimate must meet</em> &mdash; pre-loss condition, accepted trade standards.
        The second is about the <em>market accuracy of the numbers</em> &mdash;
        whether the pricing reflects what the work actually costs where the property
        sits. A deodorization line can satisfy one and fail the other: a method
        priced accurately to the local market may still fall short of a scope that
        restores the property to pre-loss condition, and a scope aimed at the right
        standard may still be priced off the local market. How either duty applies to
        any specific estimate is a fact-specific question, and the characterization
        here is general rather than a legal conclusion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10 CCR &sect; 2695.1(g) &mdash; Reliance on a Vendor Does Not Absolve the Insurer
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Deodorization scopes frequently originate with a restoration vendor, and a
        carrier will sometimes present the vendor&apos;s recommended protocol as the
        answer to the odor question. The regulations, at 10 CCR &sect; 2695.1(g), are
        generally understood to provide that obtaining information through a
        third-party source does not absolve the insurer of its own responsibility to
        comply with the claims regulations &mdash; the basis for the
        familiar point that an insurer does not discharge its own obligations simply
        by relying on a third party&apos;s work. Characterized carefully: the fact
        that a vendor proposed a particular odor method does not, on its own, relieve
        the insurer of its duty to reach a scope that restores the property. Whether
        that principle resolves any particular dispute is a legal question beyond this
        article; the general point is that &ldquo;the vendor said so&rdquo; is not, by
        itself, a complete answer.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 2071 &mdash; The Protocol and Verification Are Claim Documents
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The deodorization protocol itself &mdash; the vendor&apos;s written scope
        describing the method, run time, and setup &mdash; and any air-quality or
        post-treatment verification associated with it are documents that relate to
        the evaluation of the loss. Under California Insurance Code &sect; 2071,
        claim-related documents must be provided to the claimant within 15 calendar
        days of a request &mdash; best made in writing, so the clock is provable. A
        policyholder who wants to understand why a particular odor method was chosen,
        or whether the treatment was verified as effective afterward, can request the
        protocol and any verification records through that channel. For the full
        mechanics of a section 2071 request, see this site&apos;s guide to{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
          smoke damage claims
        </Link>{' '}
        and its treatment of testing and documentation.
      </p>

      <CalloutBox variant="important" title="Ask for the Protocol and the Verification">
        <p>
          Two documents tend to tell the story on a deodorization scope: the written
          treatment protocol (which method, how long, what containment) and any
          post-treatment verification (air-quality readings, clearance results, or a
          professional sign-off). Both relate to the evaluation of the loss, and both
          fall within the claim-related documents an insurer generally must produce
          within 15 calendar days of a request under Insurance Code section 2071.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where This Lands in Practice
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The honest framing on a method-mismatch or deodorization-only scope is
        modest, and it is the same one that runs through this site&apos;s coverage of
        smoke work. The realistic win is not a finding that a carrier used the
        &ldquo;wrong&rdquo; machine. Ozone and hydroxyl are both legitimate tools,
        and reasonable professionals choose between them based on the loss in front of
        them. The realistic win is a <em>corrected scope on re-evaluation</em>
        &mdash; a scope that matches the method to occupancy and materials, that treats
        deodorization as one step alongside cleaning, sealing, HVAC work, and source
        removal, and that addresses contents and structure as the distinct problems
        they are.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The treatment method, in the end, is a means to an outcome: a home that is
        verifiably free of odor <em>and</em> free of the contamination that caused it.
        The deliverable is that verified result, not the machine that produced part of
        it. Where a scope has been built around the machine rather than the result
        &mdash; deodorization standing in for remediation &mdash; the odor tends to
        come back, and the return of the odor is itself the evidence that the source
        was never removed. A loss remediated this way often becomes a second problem
        later; this site&apos;s discussion of how{' '}
        <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
          incomplete repairs create new problems
        </Link>{' '}
        covers that pattern in detail. Documented well, a re-evaluation that corrects
        the scope is usually the quiet, out-of-court resolution &mdash; the carrier,
        looking at a protocol that treated odor instead of source, revising the scope
        to reach the result the policy actually owes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is hydroxyl or ozone better for smoke odor in an insurance claim?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Neither is universally better; the appropriate choice depends on the loss.
        The most important variable is occupancy. Ozone is a strong oxidizer that, as
        generally understood in the restoration industry, requires the space to be
        vacated and sealed while it runs and can degrade certain materials such as
        rubber, some plastics, and artwork. Hydroxyl generation is generally regarded
        as safe to run in occupied spaces, so the household can remain, but it
        commonly works more slowly. On a claim, the right question is not which
        machine is stronger but which one fits the occupancy, the materials, and the
        contents-versus-structure mix of the specific loss &mdash; and, critically,
        whether either is being used as a finishing step alongside proper remediation
        rather than as a substitute for it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Will an ozone or hydroxyl treatment remove smoke damage from my home?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        It will address the odor, not the damage. Both technologies are
        deodorization tools; neither removes embedded soot, char, or particulate
        contamination from surfaces, ductwork, soft goods, or wall cavities. Those are
        source-removal tasks &mdash; cleaning, sealing, replacement of non-restorable
        materials, and HVAC remediation &mdash; and they remain necessary regardless of
        which odor machine is used. If a scope offers deodorization as the smoke remedy
        with little or no cleaning, sealing, or source removal alongside it, the odor
        may improve temporarily while the contamination stays in place. This is the
        same limitation that applies to{' '}
        <Link href="/resources/thermal-fogging-odor-failure" className="text-[#2E74B5] underline">
          thermal fogging
        </Link>
        , and it is why{' '}
        <Link href="/resources/soot-char-lab-testing" className="text-[#2E74B5] underline">
          laboratory testing for soot and char
        </Link>{' '}
        matters more than a clean-smelling room.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The insurer&apos;s scope only lists ozone deodorization. Is that enough?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A deodorization-only scope is worth a careful second look. Odor treatment is
        ordinarily one step in a smoke remediation, not the whole of it, and a scope
        that names an ozone or hydroxyl line without cleaning, sealing, HVAC work, and
        source removal may be treating a symptom rather than the loss. Under 10 CCR
        &sect; 2695.9(d), an insurer&apos;s estimate is generally understood to be
        prepared in an amount that will restore the property to no less than its
        pre-loss condition consistent with accepted trade standards; separately, the
        insurer is to take reasonable steps to verify that its costs are accurate and
        representative of the local market. Whether a particular deodorization-only
        scope meets the restoration standard is a fact-specific question, but a scope
        built around a single odor line is a reasonable thing to raise on
        re-evaluation and, where appropriate, with a qualified restoration professional.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can ozone treatment damage my belongings?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is commonly understood within the restoration industry that ozone, because
        it is a strong oxidizer, can degrade or damage certain materials over the
        course of treatment &mdash; rubber and elastic components, some plastics,
        certain finishes, and delicate items such as artwork are the categories most
        often cited. Whether any specific item is at risk in any specific protocol
        depends on concentration, exposure time, and the material itself, and that is
        a judgment for a qualified restoration professional rather than a matter to
        assume either way. For claims purposes, the practical takeaway is that a
        contents-heavy loss may call for the contents to be handled separately from
        the structure &mdash; and that a scope running ozone across sensitive items
        without addressing compatibility is worth questioning.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does an ozone protocol that forces me to move out affect my ALE?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        It can. Because ozone treatment is conventionally performed with the home
        vacated and sealed, an ozone protocol adds displacement time by its nature. If
        a home is otherwise habitable and the household cannot be present solely
        because of an ozone cycle, that method is generating additional living expense
        that a hydroxyl approach &mdash; generally regarded as safe to run while people
        remain &mdash; might not. Where a loss makes a home genuinely uninhabitable, the
        household&apos;s reasonable additional costs generally fall under loss-of-use
        coverage; this site&apos;s{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          guide to additional living expenses
        </Link>{' '}
        covers how that coverage works. How the coverage applies to any particular
        displacement is fact-specific, but the method choice and the ALE exposure are
        connected, and it is reasonable to account for both together.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] underline">
            Smoke Damage Insurance Claims in California
          </Link>{' '}
          &mdash; the primary guide: why smoke is direct physical damage, why testing
          beats a visual walk-through, and how remediation should be scoped
        </li>
        <li>
          <Link href="/resources/thermal-fogging-odor-failure" className="text-[#2E74B5] underline">
            Thermal Fogging and Why Odor Comes Back
          </Link>{' '}
          &mdash; the companion odor article: another deodorization method that treats
          smell rather than source
        </li>
        <li>
          <Link href="/resources/soot-char-lab-testing" className="text-[#2E74B5] underline">
            Soot and Char Laboratory Testing
          </Link>{' '}
          &mdash; how contamination is actually measured, and why a clean-smelling room
          is not a cleared one
        </li>
        <li>
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
            The Scope of Loss
          </Link>{' '}
          &mdash; how scope disputes arise and how a corrected scope resolves them
        </li>
        <li>
          <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
            How Incomplete Repairs Create New Problems
          </Link>{' '}
          &mdash; what happens when a loss is deodorized rather than remediated and the
          contamination remains
        </li>
        <li>
          <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
            Additional Living Expenses
          </Link>{' '}
          &mdash; the loss-of-use coverage that a vacate-and-seal treatment protocol
          can implicate
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ozone and hydroxyl are both real tools with real uses, and the choice between
        them is a legitimate professional judgment turning on occupancy, materials,
        contents, and timeline. What is not a matter of judgment is the caveat that
        governs both: deodorization treats odor, not the embedded contamination behind
        it. A scope that respects that distinction &mdash; matching the method to the
        loss and pairing it with the cleaning, sealing, HVAC work, and source removal
        that actually remediate &mdash; is one that pays for a verified result rather
        than a temporary smell. Where a scope has substituted the machine for the
        remedy, the realistic path is a corrected scope on re-evaluation, and the
        returning odor is usually the reason to ask for one.
      </p>

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
