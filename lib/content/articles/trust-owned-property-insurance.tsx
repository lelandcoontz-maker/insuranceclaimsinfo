import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Trust-Owned Property and Insurance Claims: When the Named Insured Doesn’t Match the Trust",
  description: "Millions of California homes are held in revocable living trusts but insured in the individual’s name. This mismatch creates coverage disputes that insurers exploit to delay or deny claims. Learn how to properly insure trust-owned property, what to do after a loss, and the legal arguments that protect policyholders.",
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Millions of California homeowners have transferred their homes into revocable
        living trusts as part of routine estate planning. Their attorneys told them it
        would avoid probate, simplify administration, and protect their families. What
        those attorneys often failed to mention &mdash; and what most homeowners never
        think about &mdash; is what happens to the insurance policy when the deed
        changes hands from the individual to the trust. In a startling number of cases,
        the answer is: nothing. The deed is recorded in the name of the trust, but the
        homeowner&rsquo;s insurance policy stays in the individual&rsquo;s personal name.
        For years or even decades, no one notices. Then a fire, a flood, a burst pipe, or
        a tree through the roof forces a claim &mdash; and the mismatch between the
        trust name and the{' '}
        <Link href="/resources/named-insured-vs-an-insured" className="text-[#2E74B5] hover:underline">
          named insured
        </Link>{' '}
        on the policy becomes the insurance company&rsquo;s favorite weapon.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains the trust-insurance mismatch problem in detail: how it
        arises, why insurers exploit it, what the law actually says, and what policyholders
        and their attorneys can do to fight back when a carrier tries to use a trust
        transfer as grounds to reduce, delay, or deny a claim.
      </p>

      <CalloutBox variant="important" title="This Is Not a Rare Problem">
        <p>
          According to estate-planning professionals, the majority of California homeowners
          who create revocable living trusts never update the named insured on their
          homeowner&rsquo;s insurance policy. Carriers collect premiums for years without
          raising the issue &mdash; but the moment a large claim is filed, the mismatch
          suddenly becomes the centerpiece of a coverage defense.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="why-mismatch-happens" className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Mismatch Happens
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The typical sequence is straightforward and predictable. A homeowner &mdash;
        let&rsquo;s call her Maria &mdash; meets with an estate-planning attorney who
        recommends a revocable living trust. The attorney prepares the trust document,
        has Maria sign it, and then records a new deed transferring the home from
        &ldquo;Maria Rodriguez, an individual&rdquo; to &ldquo;Maria Rodriguez, Trustee
        of the Maria Rodriguez Living Trust dated March 15, 2018.&rdquo; The attorney
        may send a letter reminding Maria to notify her insurance company. Or the
        attorney may not mention insurance at all.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Maria&rsquo;s insurance policy, meanwhile, continues in the name of &ldquo;Maria
        Rodriguez.&rdquo; The premiums are still paid. The policy still renews. The
        carrier continues to accept payment without asking whether the property has
        changed hands. Years go by. Then a kitchen fire causes $200,000 in damage, and
        Maria files a claim. The adjuster pulls the title report. The property is owned
        by the trust. The policy names Maria individually. The adjuster circles the
        discrepancy and passes it to coverage counsel.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The reasons this happens are not mysterious:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Estate-planning attorneys focus on estates, not insurance.</strong> Many
          attorneys prepare excellent trust documents but give little thought to the
          insurance implications. Some include a reminder letter; many do not.
        </li>
        <li>
          <strong>Insurance agents are not notified of the trust transfer.</strong> The
          deed recording happens at the county recorder&rsquo;s office. No one sends
          a copy to the insurance agent. Unless the homeowner affirmatively calls the
          agent, the agent has no way to know.
        </li>
        <li>
          <strong>Carriers continue to accept premiums without objection.</strong> The
          insurance company never questions the ownership during the years it is
          collecting premiums. The mismatch becomes relevant only when the carrier has
          to write a check.
        </li>
        <li>
          <strong>Homeowners do not realize the policy needs to change.</strong> Most
          people think of the trust transfer as a legal formality. They still live in
          the house, still pay the mortgage, still pay the insurance premium. It does
          not occur to them that the named insured on the policy needs to be updated.
        </li>
      </ul>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="how-insurers-exploit" className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurers Use the Mismatch to Delay or Deny Claims
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company discovers that the property is owned by a trust but
        the policy names an individual, it has several lines of attack. None of them
        are raised during the premium-collection years. All of them appear only after a
        significant loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Argument 1: The Named Insured Has No Insurable Interest
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier may argue that because the property is titled in the trust&rsquo;s
        name, the individual named insured no longer owns the property and therefore
        lacks an insurable interest. Under California Insurance Code &sect; 281, an
        insurable interest requires &ldquo;any lawful and substantial economic interest
        in the safety or preservation of property from loss, destruction, or pecuniary
        damage.&rdquo; The carrier&rsquo;s argument is that Maria, as an individual, has
        no ownership stake in property that belongs to the trust.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument is usually wrong when the trust is revocable &mdash; but that
        does not stop carriers from making it, because it creates delay and puts
        the policyholder on the defensive.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Argument 2: The Trust Is Not an Insured Under the Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the carrier concedes that Maria has an insurable interest, it may argue
        that the trust itself is not covered. Since the trust owns the property and the
        trust is not named on the policy, the argument goes, any claim payment should be
        limited to Maria&rsquo;s personal interest, not the full value of the property.
        This is the same{' '}
        <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
          insurable interest
        </Link>{' '}
        argument repackaged: the carrier tries to pay only a fraction of the loss by
        distinguishing between the individual&rsquo;s interest and the trust&rsquo;s
        interest.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Argument 3: Material Misrepresentation or Concealment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers go further and argue that the failure to notify them of the trust
        transfer constitutes a material misrepresentation or concealment under California
        Insurance Code &sect;&sect; 330&ndash;338. The theory is that the ownership
        change was a material fact that the insured had a duty to disclose, and the
        failure to do so voids or voidable the policy entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an aggressive argument that rarely succeeds when the trust is revocable
        and the trustor is the same individual as the named insured &mdash; but it is a
        powerful delay tactic. The carrier issues a reservation of rights letter, launches
        an investigation into the trust transfer, demands copies of the trust documents,
        and stretches the timeline while the policyholder waits for repairs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Argument 4: The Loss Payable Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If there is a mortgage on the property, the carrier may argue about who the
        claim check should be made payable to &mdash; the individual, the trust, the
        mortgage lender, or some combination. This creates additional delay and confusion,
        particularly when the lender&rsquo;s records also do not reflect the trust
        transfer. For more on the complications of{' '}
        <Link href="/resources/insurance-checks" className="text-[#2E74B5] hover:underline">
          insurance claim checks
        </Link>
        , see our detailed article on the topic.
      </p>

      <CalloutBox variant="warning" title="The Pattern Is Always the Same">
        <p>
          Notice that the carrier never raises the trust mismatch when collecting your
          premium. It never sends a letter saying, &ldquo;We noticed your property
          transferred to a trust &mdash; would you like to update the named insured?&rdquo;
          The mismatch is raised only after a loss, only when the carrier would benefit
          from it, and only in the context of reducing or denying your claim. This tells
          you everything you need to know about the carrier&rsquo;s motives.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="revocable-vs-irrevocable" className="text-2xl font-bold text-[#1F3964] mb-4">
        Revocable vs. Irrevocable Trusts: Critically Different Insurance Implications
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The type of trust matters enormously when it comes to insurance claims. Revocable
        and irrevocable trusts are treated very differently under California law, and the
        distinction has direct consequences for coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Revocable Living Trusts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A revocable living trust is the most common estate-planning vehicle for California
        homeowners. The trustor (the person who creates the trust) retains full control
        over the trust assets during their lifetime. They can amend the trust, revoke it
        entirely, sell the property, move the property back into their individual name,
        or do anything else they could do as an individual owner. For all practical
        purposes during the trustor&rsquo;s lifetime, the trust is an alter ego of the
        individual.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not just a practical observation &mdash; it is a legal one. Under
        California Probate Code &sect; 15800, the trustor of a revocable trust retains
        the power to revoke and has the same control over trust property as if the trust
        did not exist. California Probate Code &sect; 18100.5 further provides that,
        during the lifetime of the trustor of a revocable trust, the trust is not a
        separate legal entity from the trustor. The trustor and the trust are one and the
        same.
      </p>

      <CalloutBox variant="legal" title="California Probate Code &sect; 18100.5">
        <p>
          &ldquo;During the time that a trust is revocable and the person holding the
          power to revoke the trust is competent&hellip; the person holding the power to
          revoke, and not the beneficiary, has the rights afforded beneficiaries under
          this division.&rdquo; The trustor of a revocable trust is, in the eyes of
          California law, the real party in interest during their lifetime. The trust is
          not a separate legal entity while the trustor is alive and competent.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This legal reality is the strongest argument against a carrier&rsquo;s attempt to
        treat the trust as a separate entity from the individual named insured. If
        California law itself treats the revocable trust and the trustor as one and the
        same, then a policy naming &ldquo;Maria Rodriguez&rdquo; effectively names the
        same person who owns the property through the trust. There is no true mismatch
        &mdash; there is only a nominal difference in how the same ownership interest is
        described on different documents.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Irrevocable Trusts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Irrevocable trusts are a fundamentally different situation. When a homeowner
        transfers property into an irrevocable trust, they genuinely give up ownership
        and control. The trustor cannot take the property back. The trustor cannot amend
        the trust to change the beneficiaries. The trust becomes a separate legal entity
        with its own tax identification number, and the trustee &mdash; who may or may
        not be the former homeowner &mdash; has legal control over the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this scenario, the carrier&rsquo;s arguments carry significantly more weight.
        If the property is owned by an irrevocable trust and the insurance policy names
        the former homeowner individually, there <em>is</em> a genuine disconnect between
        the owner of the property and the named insured on the policy. The former
        homeowner&rsquo;s insurable interest may be limited to a life estate, a right of
        occupancy, or whatever beneficial interest the trust document provides. This is
        the scenario where the{' '}
        <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
          insurable interest doctrine
        </Link>{' '}
        can genuinely limit recovery.
      </p>

      <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 my-6">
        <p className="font-semibold text-[#1F3964] mb-3">
          Revocable vs. Irrevocable: The Insurance Implications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 border border-sky-100">
            <p className="font-semibold text-green-700 mb-2">Revocable Trust</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-700">
              <li>Trustor retains full control during lifetime</li>
              <li>Not a separate legal entity (Probate Code &sect; 18100.5)</li>
              <li>Trustor = trust for all practical and legal purposes</li>
              <li>Named insured mismatch is nominal, not substantive</li>
              <li>Strong arguments to defeat carrier coverage defenses</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-sky-100">
            <p className="font-semibold text-red-700 mb-2">Irrevocable Trust</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-700">
              <li>Trustor gives up ownership and control</li>
              <li>Separate legal entity with own tax ID</li>
              <li>Trust and individual are genuinely different parties</li>
              <li>Named insured mismatch is substantive</li>
              <li>Insurable interest may be limited to partial interest</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="insurable-interest-argument" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurable Interest Argument: Why the Trustee Always Has Standing
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even when the carrier tries to argue that the named insured has no insurable
        interest, California law provides a powerful response. California Insurance
        Code &sect; 281 defines insurable interest broadly: it is &ldquo;any lawful and
        substantial economic interest in the safety or preservation of property from
        loss, destruction, or pecuniary damage.&rdquo; Notice what the statute does{' '}
        <em>not</em> require: it does not require ownership. It does not require that
        the insured hold legal title. It requires only a &ldquo;lawful and substantial
        economic interest&rdquo; in the property&rsquo;s preservation.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A trustee who holds legal title to property in trust has an obvious insurable
        interest in that property. The trustee has a fiduciary duty under California
        Probate Code &sect; 16006 to preserve and protect trust assets. The destruction
        or damage of the property would constitute a breach of that duty if the trustee
        failed to maintain adequate insurance. A trustee who is also the trustor of a
        revocable trust has both the fiduciary interest of a trustee <em>and</em> the
        beneficial interest of the trust&rsquo;s primary beneficiary. The idea that such
        a person lacks an insurable interest is difficult to maintain with a straight face.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even an individual who is merely the beneficiary of an irrevocable trust has an
        insurable interest in trust property &mdash; because the destruction of that
        property diminishes the value of their beneficial interest. The question is not
        whether an insurable interest exists, but how much it is worth. For a revocable
        trust where the trustor retains full control, the insurable interest is the full
        value of the property. For an irrevocable trust where the individual holds only a
        life estate or a partial beneficial interest, the insurable interest may be less
        than the full property value.
      </p>

      <CalloutBox variant="tip" title="IC &sect; 281 Is Your Best Friend">
        <p>
          Whenever a carrier argues that the named insured &ldquo;doesn&rsquo;t own the
          property&rdquo; because it&rsquo;s in a trust, respond with Insurance Code
          &sect; 281. Ownership is not the standard. Economic interest in the property&rsquo;s
          preservation is the standard. The trustor of a revocable trust has the maximum
          possible economic interest in the property &mdash; they live there, they control
          it, they can take it back, and they suffer the full financial loss if it is
          damaged or destroyed.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="trust-as-named-insured" className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Trust IS the Named Insured vs. When the Individual Is
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not all policies are structured the same way, and some policyholders (or their
        agents) have in fact named the trust on the policy. The way this is handled varies
        by carrier:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Trust as Named Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will name the trust directly on the declarations page &mdash; for
        example, &ldquo;Maria Rodriguez, Trustee of the Maria Rodriguez Living Trust
        dated March 15, 2018.&rdquo; This is the cleanest approach. The named insured
        matches the title holder. There is no mismatch for the carrier to exploit. The
        trust has a full insurable interest because it is the legal owner. Claim payments
        go to the trustee, who manages the funds as part of the trust administration.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Individual as Named Insured, Trust Endorsed
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers add the trust as an additional insured or additional named insured
        via endorsement. The policy might name &ldquo;Maria Rodriguez&rdquo; as the primary
        named insured and add &ldquo;Maria Rodriguez Living Trust&rdquo; as an additional
        insured. This is less clean but still provides a basis for full coverage. The trust
        has a direct relationship with the policy, and the carrier cannot credibly argue
        that it did not know about the trust ownership.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Individual Only &mdash; No Trust Mentioned
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the scenario that creates problems. The policy names only the individual.
        The trust is not mentioned anywhere in the policy documents. The carrier argues
        that it insured an individual, not a trust, and that the trust&rsquo;s interest
        in the property is not covered. As discussed above, this argument is weak for
        revocable trusts but potentially valid for irrevocable trusts.
      </p>

      <CalloutBox variant="info" title="Check Your Declarations Page Now">
        <p>
          Pull out your homeowner&rsquo;s insurance{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            declarations page
          </Link>{' '}
          and look at the named insured line. If your property is held in a trust and
          the trust is not reflected on the policy, call your agent today and request
          that the named insured be updated. This is a five-minute phone call that can
          prevent a six-figure coverage fight.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="properly-insuring" className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Properly Insure Trust-Owned Property
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The process for properly insuring trust-owned property is not complicated, but
        it requires coordination between the estate-planning attorney, the insurance
        agent, and the homeowner. Here is what should happen:
      </p>

      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>At the time of the trust transfer:</strong> When the estate-planning
          attorney prepares the deed transferring the property into the trust, the
          attorney should provide the homeowner with written instructions to contact
          their insurance agent and update the named insured on the policy. Some
          attorneys handle this step directly; others leave it to the client.
        </li>
        <li>
          <strong>Contact the insurance agent:</strong> Call your agent and explain
          that you have transferred the property into a revocable living trust. Provide
          the agent with the full legal name of the trust, including the date (e.g.,
          &ldquo;The Maria Rodriguez Living Trust dated March 15, 2018&rdquo;). Ask the
          agent to update the named insured to reflect the trust.
        </li>
        <li>
          <strong>Get the change in writing:</strong> Request a revised declarations page
          showing the trust as the named insured. Do not rely on a verbal confirmation.
          The declarations page is the document that controls who is insured, and you
          need to see the trust name in print.
        </li>
        <li>
          <strong>Review the policy language:</strong> Some carriers use specific trust
          endorsements that modify the policy to address trust-related issues. Ask your
          agent whether the carrier offers a trust endorsement and whether one has been
          added to your policy.
        </li>
        <li>
          <strong>Notify the mortgage lender:</strong> If there is a mortgage on the
          property, the lender should also be notified of the trust transfer. The lender
          may have its own requirements about how the insurance policy should be
          structured when the property is in a trust.
        </li>
      </ol>

      <CalloutBox variant="tip" title="What If Your Carrier Refuses?">
        <p>
          Some carriers resist naming a trust as the insured, particularly for standard
          homeowner&rsquo;s policies (HO-3, HO-5). If your carrier will not name the
          trust, ask the agent to add the trust as an additional insured via endorsement.
          If neither option is available, document the carrier&rsquo;s refusal in writing.
          A carrier that refuses to add the trust to the policy and later argues that the
          trust is not covered has a significant estoppel problem.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="loss-wrong-name" className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If a Loss Occurs and the Policy Is in the Wrong Name
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If a loss has already occurred and you discover that the policy names you
        individually while the property is in your trust, do not panic &mdash; but do
        take the situation seriously. Here is a strategic approach:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Determine the Type of Trust
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important threshold question. If the trust is revocable and you
        are the trustor, your legal position is strong. California law treats you and
        the trust as the same entity during your lifetime. The mismatch is nominal. If
        the trust is irrevocable, the analysis is more complex, and you should consult an
        insurance coverage attorney immediately.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: File the Claim Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not wait to sort out the named insured issue before filing the claim. File
        the claim in the name shown on the policy. You have duties after loss under the
        policy that begin running from the date of the loss, and those duties include
        prompt notice to the insurer. Delaying the claim while you try to fix the named
        insured problem only gives the carrier another argument.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Gather the Trust Documents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Obtain a complete copy of the trust document, all amendments, and the deed
        transferring the property into the trust. The carrier will eventually request
        these documents, and having them ready speeds the process. The trust document
        will confirm whether the trust is revocable or irrevocable, who the trustor and
        trustee are, and what powers the trustor retained.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Do Not Volunteer the Mismatch
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are not required to point out the mismatch to the carrier or to frame it
        as a problem. File the claim, cooperate with the investigation, and respond
        honestly to questions. If the carrier raises the trust issue, respond with
        the legal arguments outlined in this article. If the carrier does not raise it,
        there is no obligation to raise it yourself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Be Prepared With Legal Arguments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier raises the named insured issue, the policyholder has multiple
        lines of defense:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Probate Code &sect; 18100.5:</strong> The revocable trust is not a
          separate legal entity from the trustor during the trustor&rsquo;s lifetime.
          The named insured and the trust owner are the same person.
        </li>
        <li>
          <strong>Insurance Code &sect; 281:</strong> The named insured has a &ldquo;lawful
          and substantial economic interest&rdquo; in the preservation of the property,
          satisfying the insurable interest requirement.
        </li>
        <li>
          <strong>Waiver and estoppel:</strong> The carrier accepted premiums for years
          knowing (or having constructive notice) that the property was in a trust. It
          cannot accept the benefit of the premiums and then deny coverage based on a
          condition it could have raised at any time.
        </li>
        <li>
          <strong>Reasonable expectations doctrine:</strong> Under California law, the
          insured&rsquo;s objectively reasonable expectations of coverage should be
          honored. A homeowner who pays premiums on their home for years has a reasonable
          expectation that the home is covered, regardless of whether the deed is in
          their individual name or in their trust&rsquo;s name.
        </li>
        <li>
          <strong>No prejudice to the carrier:</strong> The trust transfer did not change
          the risk. The same person lives in the same house. The carrier&rsquo;s
          underwriting risk is identical whether the deed says &ldquo;Maria Rodriguez&rdquo;
          or &ldquo;Maria Rodriguez, Trustee.&rdquo; Under California law, a carrier
          generally must show prejudice before it can void coverage based on a breach of
          a policy condition (Insurance Code &sect; 533.5 does not apply here, but the
          general principle of prejudice applies to conditions precedent).
        </li>
      </ul>

      <CalloutBox variant="important" title="Get Professional Help Early">
        <p>
          If the carrier raises the trust mismatch as a coverage issue, this is not
          a problem you should try to resolve on your own. A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            licensed Public Adjuster
          </Link>{' '}
          or an insurance coverage attorney can frame the legal arguments properly and
          prevent you from making statements that the carrier can use against you. The
          earlier you get professional help, the stronger your position.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="successor-trustee-claims" className="text-2xl font-bold text-[#1F3964] mb-4">
        Successor Trustees Filing Claims After the Trustor Dies
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most difficult scenarios arises when the trustor dies and a successor
        trustee must file an insurance claim on trust property. This involves an
        intersection of trust law, insurance law, and probate law that catches many
        families completely off guard.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Happens to the Policy When the Trustor Dies?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner&rsquo;s insurance policies contain a &ldquo;death of the named
        insured&rdquo; provision &mdash; sometimes called the &ldquo;death clause.&rdquo;
        This provision typically extends coverage for a limited period (often 30 or 60
        days) after the named insured&rsquo;s death, but only for certain parties: the
        legal representative of the deceased, a resident spouse, or persons having custody
        of the insured property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policy names the trust as the insured, the death of the trustor does
        not necessarily trigger the death clause at all &mdash; because the named insured
        (the trust) has not &ldquo;died.&rdquo; Trusts do not die. The trust continues
        under the successor trustee, who steps into the trustee&rsquo;s role and has
        authority to manage the property, pay the premiums, and file claims. This is
        one of the significant advantages of having the trust properly named on the
        policy. For more on the death clause and its implications, see our article on{' '}
        <Link href="/resources/insuring-inherited-property" className="text-[#2E74B5] hover:underline">
          insuring inherited property
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policy names the individual and the individual dies, the death clause
        applies. The successor trustee may qualify as the &ldquo;legal representative
        of the deceased insured&rdquo; or as a person having &ldquo;custody&rdquo; of
        the property &mdash; but the limited time window creates urgency. The successor
        trustee needs to contact the insurance carrier immediately after the trustor&rsquo;s
        death, confirm that coverage is still in effect, and arrange for the policy to be
        continued or a new policy issued.
      </p>

      <CalloutBox variant="warning" title="The 30-Day Gap Is Real">
        <p>
          If the policy names the trustor individually and provides only 30 days of
          coverage after death, the successor trustee has exactly 30 days to secure
          replacement coverage before the property is uninsured. A fire or other loss
          on day 31 may not be covered. This is the same dangerous gap that affects{' '}
          <Link href="/resources/insurance-properties-probate" className="text-[#2E74B5] hover:underline">
            properties in probate
          </Link>
          , but it can be avoided entirely by naming the trust on the policy.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Successor Trustee&rsquo;s Authority to File Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A successor trustee has the authority to manage all trust assets, including
        filing insurance claims, under California Probate Code &sect; 16200 et seq.
        The successor trustee should be prepared to provide the insurance carrier with:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          A copy of the trust document (or the relevant sections showing the successor
          trustee provisions and the trustor&rsquo;s death)
        </li>
        <li>
          A death certificate for the trustor
        </li>
        <li>
          Identification showing the successor trustee&rsquo;s identity
        </li>
        <li>
          A Certification of Trust under California Probate Code &sect; 18100.5, which
          allows the trustee to prove their authority without revealing the full terms
          of the trust to third parties
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note that the successor trustee should use the Certification of Trust rather
        than providing the entire trust document. The full trust document contains
        distribution provisions, beneficiary information, and other private details
        that the insurance company has no right to see. Probate Code &sect; 18100.5
        was specifically enacted to allow trustees to prove their authority without
        exposing the trust&rsquo;s internal terms.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When the Trustor Dies and the Trust Becomes Irrevocable
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is an important nuance that many people miss: a revocable trust typically
        becomes irrevocable upon the trustor&rsquo;s death. During the trustor&rsquo;s
        lifetime, the trust was revocable, and the trustor and trust were treated as
        the same entity. After the trustor&rsquo;s death, the trust becomes irrevocable.
        The trust is now a separate legal entity. The beneficiaries have fixed interests.
        The successor trustee manages the assets for the benefit of those beneficiaries.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This transition is relevant because the insurance needs of an irrevocable trust
        are different from those of a revocable trust. The successor trustee should
        obtain a new insurance policy naming the trust as the insured, and should
        ensure that the policy provides coverage for the full value of the property
        &mdash; not just the successor trustee&rsquo;s personal interest.
      </p>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="california-specific-law" className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Legal Protections
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        California provides several legal protections that benefit policyholders
        facing trust-related coverage disputes. These protections arise from the
        Insurance Code, the Probate Code, and case law:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Trust Is Not a Separate Entity During the Trustor&rsquo;s Lifetime
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed above, California Probate Code &sect;&sect; 15800 and 18100.5
        establish that a revocable trust is not a separate legal entity from the
        trustor during the trustor&rsquo;s lifetime. This is the single most
        important statutory provision for policyholders facing the trust mismatch
        argument. If the trust is not a separate entity, there is no mismatch &mdash;
        the individual <em>is</em> the trust.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&rsquo;s Broad Definition of Insurable Interest
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance Code &sect; 281 defines insurable interest as &ldquo;any lawful and
        substantial economic interest in the safety or preservation of property from
        loss, destruction, or pecuniary damage.&rdquo; California courts have
        interpreted this definition broadly. In <em>Steadfast Insurance Co. v.
        Agricultural Insurance Co.</em> (2001) 87 Cal.App.4th 1070, the court confirmed
        that the insurable interest requirement is to be liberally construed. A trustor
        who lives in, controls, and can reclaim trust property plainly satisfies this
        standard.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty of Good Faith and Fair Dealing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance policy in California carries an implied covenant of good faith
        and fair dealing. Under <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24
        Cal.3d 809, a carrier that unreasonably denies or delays a claim is subject to
        tort damages for bad faith. A carrier that accepts premiums for years, never
        raises the trust issue, and then denies a claim based on the trust mismatch is
        on thin ice. The failure to investigate the trust issue before the loss &mdash;
        despite having ample opportunity to do so &mdash; can support a bad faith claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California Fair Claims Settlement Practices Regulations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations (California
        Code of Regulations, Title 10, &sect;&sect; 2695.1&ndash;2695.17) impose
        specific obligations on insurers during the claims process. Carriers must
        conduct thorough investigations before denying claims, must not misrepresent
        policy provisions, and must not create unreasonable barriers to the claims
        process. A carrier that seizes on the trust mismatch as a pretext to delay
        or underpay a claim may be violating these regulations. For more on these
        regulations, see our article on{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          California Fair Claims Settlement Practices
        </Link>
        .
      </p>

      <CalloutBox variant="legal" title="Insurance Code &sect; 790.03(h)">
        <p>
          California Insurance Code &sect; 790.03(h) prohibits unfair claims settlement
          practices, including &ldquo;not attempting in good faith to effectuate prompt,
          fair, and equitable settlements of claims in which liability has become
          reasonably clear.&rdquo; When a revocable trust trustor files a claim on
          property they live in, control, and can reclaim at any time, liability is
          reasonably clear. Seizing on the trust name as a basis for delay is precisely
          the type of practice this statute was designed to prevent.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="power-of-attorney" className="text-2xl font-bold text-[#1F3964] mb-4">
        Trust Issues Combined With Powers of Attorney
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Trust-related insurance issues become even more complicated when a power of
        attorney is involved. Consider this scenario: the trustor becomes incapacitated,
        and the successor trustee takes over management of the trust. But the insurance
        policy is still in the trustor&rsquo;s individual name, not the trust&rsquo;s
        name. The successor trustee may need a{' '}
        <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
          power of attorney
        </Link>{' '}
        to manage the policy on the trustor&rsquo;s behalf as an individual, while
        simultaneously having trustee authority to manage the property on the trust&rsquo;s
        behalf.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This dual-authority issue confuses carriers and their adjusters, who may not
        understand the difference between a trustee&rsquo;s authority over trust assets
        and an agent&rsquo;s authority under a power of attorney. The result is
        additional delay, additional document requests, and additional opportunities for
        the carrier to claim it does not know who has authority to manage the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is to have the trust properly named on the policy from the
        beginning. If the trust is the named insured, the successor trustee&rsquo;s
        authority derives directly from the trust document &mdash; no power of attorney
        is needed. The trustee manages the insurance claim just as they manage all
        other trust assets: under the authority granted by the trust instrument.
      </p>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="common-scenarios" className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Real-World Scenarios
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 1: Revocable Trust, Trustor Is Alive, Individual Is Named Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common scenario and the one with the strongest policyholder
        position. The trustor is alive, competent, and living in the home. The trust
        is revocable. The policy names the individual. Result: the carrier&rsquo;s
        mismatch argument is weak. Probate Code &sect; 18100.5 treats the trust and
        trustor as one entity. Insurance Code &sect; 281 confirms insurable interest.
        The carrier should pay the claim in full. If it does not, the policyholder has
        strong arguments for bad faith.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 2: Irrevocable Trust, Individual Has Life Estate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The individual transferred the property into an irrevocable trust and retained
        a life estate. The policy names the individual. Result: the carrier has a
        legitimate argument that the named insured&rsquo;s{' '}
        <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
          insurable interest
        </Link>{' '}
        is limited to the value of the life estate. This requires actuarial valuation
        and potentially limits recovery. However, the trust itself may also need coverage,
        and the carrier should have flagged this issue years ago.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 3: Trustor Has Died, Successor Trustee Files Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The trustor has died, the trust is now irrevocable, and the successor trustee
        is managing the property. A loss occurs. If the policy named the trust, the
        successor trustee files the claim as trustee &mdash; straightforward. If the
        policy named the deceased individual, the death clause applies, and the
        successor trustee must act quickly to file the claim within the policy&rsquo;s
        post-death coverage window and secure a new or updated policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 4: Joint Trust, One Trustor Dies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Married couples often create joint revocable trusts. When one spouse dies, the
        trust may split into sub-trusts (a survivor&rsquo;s trust and a decedent&rsquo;s
        trust, for example), and portions of the trust may become irrevocable. This
        creates additional insurance complexities: which sub-trust owns the home? Is the
        surviving spouse still a named insured? Does the surviving spouse have a full
        insurable interest or only a partial one? These questions require careful analysis
        of both the trust document and the insurance policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 5: Property Transferred Out of Trust Before Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes a trustor, exercising their right to amend or revoke the trust,
        transfers the property back into their individual name before a loss. If the
        policy names the trust, the carrier might argue a new mismatch in the other
        direction. This is another reason to update the policy every time ownership
        changes, regardless of the direction of the change.
      </p>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="checklist" className="text-2xl font-bold text-[#1F3964] mb-4">
        Pre-Loss Checklist: Protecting Trust-Owned Property
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are creating a new trust, have an existing trust, or are a
        successor trustee taking over after a trustor&rsquo;s death, use this
        checklist to ensure the insurance is properly aligned with the trust:
      </p>

      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Review the declarations page</strong> &mdash; Confirm that the named
          insured on the policy matches the current owner of the property. If the
          property is in a trust, the trust (or the trustee on behalf of the trust)
          should be the named insured.
        </li>
        <li>
          <strong>Provide the full trust name</strong> &mdash; The named insured should
          include the complete legal name of the trust, including the date of the trust
          instrument. &ldquo;The Rodriguez Trust&rdquo; is not sufficient. &ldquo;Maria
          Rodriguez, Trustee of the Maria Rodriguez Living Trust dated March 15,
          2018&rdquo; is correct.
        </li>
        <li>
          <strong>Check for trust endorsements</strong> &mdash; Ask your agent whether
          the carrier offers a trust endorsement and whether one has been applied to
          your policy.
        </li>
        <li>
          <strong>Review coverage amounts</strong> &mdash; Ensure that the policy provides
          coverage for the full replacement cost of the property. A trust that owns a
          $900,000 home should not be insured for $500,000.
        </li>
        <li>
          <strong>Update after any trust amendment</strong> &mdash; If the trust is
          amended, restated, or the property is transferred in or out of the trust,
          update the insurance policy to reflect the change.
        </li>
        <li>
          <strong>Notify the mortgage lender</strong> &mdash; Confirm that the lender
          is aware of the trust ownership and that the loss payable clause names the
          correct parties.
        </li>
        <li>
          <strong>Keep a copy of the trust with the policy</strong> &mdash; Store the
          trust document (or at least the Certification of Trust) with your insurance
          documents so they are readily available if a claim needs to be filed.
        </li>
        <li>
          <strong>Plan for successor trustee transition</strong> &mdash; If you are the
          trustor, make sure your successor trustee knows where the insurance policy is,
          who the agent is, and what steps to take if you die or become incapacitated.
        </li>
      </ol>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="post-loss-checklist" className="text-2xl font-bold text-[#1F3964] mb-4">
        Post-Loss Checklist: What to Do When the Mismatch Is Discovered After a Claim
      </h2>

      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>File the claim immediately</strong> &mdash; Do not delay the claim to
          fix the named insured issue. File in the name on the policy.
        </li>
        <li>
          <strong>Identify the trust type</strong> &mdash; Determine whether the trust
          is revocable or irrevocable. This controls the strength of your legal position.
        </li>
        <li>
          <strong>Gather trust documents</strong> &mdash; Obtain the trust instrument,
          amendments, deed of transfer, and a Certification of Trust.
        </li>
        <li>
          <strong>Engage a professional</strong> &mdash; Contact a licensed Public
          Adjuster or insurance coverage attorney before responding to any carrier
          inquiries about the trust mismatch.
        </li>
        <li>
          <strong>Do not sign anything that limits your claim</strong> &mdash; The
          carrier may ask you to sign documents acknowledging that the trust is the
          owner and that you, individually, have a limited interest. Do not sign anything
          without professional review.
        </li>
        <li>
          <strong>Document the carrier&rsquo;s knowledge</strong> &mdash; Gather evidence
          that the carrier knew or should have known about the trust. Did the agent
          know? Was the trust mentioned in any prior correspondence? Did the carrier
          receive a copy of the deed at any point? This evidence supports waiver and
          estoppel arguments.
        </li>
        <li>
          <strong>Review the carrier&rsquo;s premium history</strong> &mdash; Confirm
          that the carrier accepted premiums after the trust transfer. Premium acceptance
          with knowledge (or constructive knowledge) of the trust supports a waiver
          argument.
        </li>
        <li>
          <strong>Prepare for the coverage fight</strong> &mdash; If the carrier raises
          the trust issue as a defense, be prepared to respond with the legal arguments
          discussed in this article. Do not accept a reduced payment based solely on
          the carrier&rsquo;s assertion that the named insured does not match the owner.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Statute of Limitations Considerations">
        <p>
          If the carrier denies or significantly underpays the claim based on the trust
          mismatch, be mindful of the statute of limitations for breach of contract and
          bad faith claims. In California, the statute of limitations for breach of an
          insurance contract is generally four years (Code of Civil Procedure &sect; 337),
          and for bad faith (a tort claim), two years (Code of Civil Procedure
          &sect; 335.1). Do not let these deadlines pass while negotiating with the
          carrier.
        </p>
      </CalloutBox>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="related-issues" className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Issues and Cross-References
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Trust-owned property insurance intersects with several other important topics
        covered on this site. Each of these articles addresses a related scenario that
        commonly arises alongside trust issues:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <Link href="/resources/insuring-inherited-property" className="text-[#2E74B5] hover:underline">
            Insuring Inherited Property
          </Link>{' '}
          &mdash; What happens when the trustor dies and the beneficiaries inherit the
          home. Covers the death clause, the 30-day gap, and the critical steps to take
          immediately after a parent&rsquo;s death.
        </li>
        <li>
          <Link href="/resources/insurance-properties-probate" className="text-[#2E74B5] hover:underline">
            Insurance and Properties in Probate
          </Link>{' '}
          &mdash; Trust-owned property avoids probate, but when the trust is not properly
          funded (the property was never transferred in), the property may go through
          probate instead &mdash; creating a different set of insurance problems.
        </li>
        <li>
          <Link href="/resources/named-insured-vs-an-insured" className="text-[#2E74B5] hover:underline">
            Named Insured vs. &ldquo;An Insured&rdquo;
          </Link>{' '}
          &mdash; The distinction between the named insured and other insureds under
          the policy is critical in trust situations, particularly when multiple family
          members live in the home.
        </li>
        <li>
          <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
            Power of Attorney and Insurance Claims
          </Link>{' '}
          &mdash; When a trustor becomes incapacitated, the intersection of trustee
          authority and power of attorney authority creates additional complications.
        </li>
        <li>
          <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
            Insurable Interest and Life Estates
          </Link>{' '}
          &mdash; A deep dive into insurable interest valuation, including the actuarial
          and financial calculations required when the named insured holds only a
          partial interest in the property.
        </li>
      </ul>

      {/* ──────────────────────────────────────────────────────── */}
      <h2 id="key-takeaways" className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The trust-insurance mismatch is one of the most common and most preventable
        coverage problems in California. Here is what you need to remember:
      </p>

      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Always update your insurance when you create or fund a trust.</strong>{' '}
          The named insured on the policy should match the owner on the deed. If the
          trust owns the property, the trust should be the named insured.
        </li>
        <li>
          <strong>Revocable trusts are treated differently than irrevocable trusts.</strong>{' '}
          For revocable trusts, California law treats the trustor and trust as the same
          entity. This provides strong arguments against carrier coverage defenses.
        </li>
        <li>
          <strong>Carriers exploit the mismatch only after a loss.</strong> If the
          carrier never raised the issue during the premium-collection years, its
          post-loss objection is weaker and may support waiver, estoppel, and bad
          faith arguments.
        </li>
        <li>
          <strong>Insurance Code &sect; 281 protects you.</strong> Insurable interest
          is defined broadly in California. A trustor of a revocable trust has the
          maximum possible insurable interest in the trust property.
        </li>
        <li>
          <strong>Successor trustees must act quickly.</strong> When the trustor dies,
          the successor trustee needs to contact the insurance carrier immediately
          and either continue the existing coverage or obtain a new policy.
        </li>
        <li>
          <strong>Get professional help if the carrier raises the issue.</strong> A
          licensed Public Adjuster or insurance coverage attorney can frame the legal
          arguments properly and prevent the carrier from using the mismatch to
          reduce your recovery.
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-6">
        The bottom line is this: a revocable living trust is supposed to simplify
        your family&rsquo;s life, not create a coverage trap. The trap exists only
        because the insurance industry profits from the confusion between estate
        planning and insurance law. By understanding the issue, updating your policy,
        and knowing your legal rights, you can make sure that when you need your
        insurance the most, the trust that was supposed to protect your family does
        not become the reason your claim is denied.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal or
        insurance advice. Insurance policies and applicable law vary by carrier and by
        policy form. Trust documents vary by drafter and by purpose. Consult with a
        licensed Public Adjuster, insurance coverage attorney, and estate-planning
        attorney regarding your specific situation.
      </p>
    </>
  )
}
