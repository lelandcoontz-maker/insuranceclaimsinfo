import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The Efficient Proximate Cause Doctrine: When the Real Cause of Your Loss Is Covered",
  description:
    "When multiple perils combine to cause a loss, the efficient proximate cause doctrine looks at the predominant cause. If it is covered, the entire loss is covered. Here is how the doctrine works, what California law requires, and how insurers try to get around it.",
  summary:
    'When several perils combine to cause a loss, the efficient proximate cause doctrine asks which one predominated. If that predominant cause is covered, the entire loss is covered. California law mandates this, and insurers try to evade it by blaming an excluded contributor.',
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
        Most insurance claims involve a single, clear cause. A pipe bursts. A tree falls.
        Lightning strikes. The cause is covered or it isn&rsquo;t, and the policy language
        resolves the question.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But many losses &mdash; particularly the most significant ones &mdash; are not that
        simple. A covered peril sets an excluded peril in motion, or an excluded peril leads
        to a covered one, or multiple perils operate together in a chain of events that
        produces a single, indivisible loss. When that happens, how does insurance determine
        whether the claim is covered?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer, in the majority of American jurisdictions, is the Efficient Proximate
        Cause doctrine &mdash; a legal principle that looks past the superficial labels and
        asks a deeper question: what was the predominant cause of the loss? If the answer is
        a covered peril, the entire loss is covered, even if excluded perils played a role
        along the way.
      </p>

      {/* ── What the Doctrine Means ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the Doctrine Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Efficient Proximate Cause doctrine holds that when a loss results from a chain
        of events involving both covered and excluded perils, coverage is determined by
        identifying the cause that was <strong>most important</strong> &mdash; the one that
        set the others in motion or that predominated in producing the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the efficient proximate cause is a covered peril, the loss is covered &mdash;
        even though excluded perils also contributed. If the efficient proximate cause is an
        excluded peril, the loss is not covered &mdash; even though covered perils may have
        been involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The doctrine does not ask which cause was first in time, or which cause was last in
        time, or which cause the insurer prefers to focus on. It asks which cause was
        the <strong>dominant</strong> one.
      </p>

      {/* ── California's Framework ───────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California&rsquo;s Framework: A Statutory and Case-Law-Based Approach
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has the most developed and policyholder-protective efficient proximate
        cause framework of any state. It is grounded in statute, reinforced by decades of
        Supreme Court decisions, and cannot be overridden by policy language.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Statutory Foundation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code Section 530:</strong> &ldquo;An insurer is liable for a loss
        of which a peril insured against was the proximate cause, although a peril not
        contemplated by the contract may have been a remote cause of the loss; but he is not
        liable for a loss of which the peril insured against was only a remote cause.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code Section 530.5</strong> (added in 2018 by SB 917): Specifically
        provides that when a loss results from a combination of perils including a landslide,
        mudslide, mudflow, or debris flow, coverage exists if an insured peril is the
        efficient proximate cause. The Legislature declared this &ldquo;does not constitute a
        change in, but is declaratory of, existing law.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These provisions make the efficient proximate cause doctrine statutory law in
        California &mdash; not merely a judicial creation, but a legislative mandate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Foundational Case: <em>Sabella v. Wisler</em> (1963)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The modern efficient proximate cause doctrine in California begins
        with <em>Sabella</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A builder constructed a house on inadequately compacted ground and negligently
        installed a sewer line. The sewer broke. Water infiltrated the unstable soil beneath
        the foundation, causing severe settlement &mdash; up to seven inches of subsidence in
        places. The resulting damage was extensive.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The homeowner&rsquo;s policy covered negligence but excluded earth movement and
        subsidence. The insurer denied the claim, pointing to the subsidence exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court disagreed. The Court held that the efficient proximate
        cause of the loss was the builder&rsquo;s negligence &mdash; a covered peril. The
        subsidence was not an independent cause; it was the mechanism through which the
        negligence caused the damage. The covered peril set the chain in motion, and the
        excluded peril was merely the means by which the damage manifested.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court adopted a formulation (quoting 6 Couch, Insurance (1930) &sect; 1466) that has
        been cited in hundreds of decisions since: &ldquo;[I]n determining whether a loss is
        within an exception in a policy, where there is a concurrence of different causes, the
        efficient cause &mdash; the one that sets others in motion &mdash; is the cause to
        which the loss is to be attributed, though the other causes may follow it, and operate
        more immediately in producing the disaster.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Sabella v. Wisler</em>, 59 Cal.2d 21, 377 P.2d 889 (1963).{' '}
        <a
          href="https://scocal.stanford.edu/opinion/sabella-v-wisler-29936"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Read the opinion at Stanford SCOCal.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Garvey v. State Farm</em> (1989): The Clarification
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After <em>Sabella</em>, some lower courts began expanding the doctrine beyond its
        intended scope, applying a &ldquo;concurrent causation&rdquo; theory that granted
        coverage whenever a covered peril contributed meaningfully to a loss &mdash;
        regardless of whether it was the predominant cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court put an end to this in <em>Garvey</em>. The
        Garveys&rsquo; Fairfax home sustained damage from structural separation caused by a
        combination of contractor negligence and earth movement. The Court firmly established
        that for first-party property insurance claims, the efficient proximate cause
        doctrine &mdash; not concurrent causation &mdash; governs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rule the Court announced (later quoted authoritatively in <em>State Farm Fire &amp;
        Casualty Co. v. Von Der Lieth</em> (1991) 54 Cal.3d 1123, 1131&ndash;1132, and in{' '}
        <em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) 35 Cal.4th 747, 750):
        &ldquo;[W]hen a loss is caused by a combination of a covered and specifically excluded
        risks, the loss is covered if the covered risk was the efficient proximate cause of the
        loss, but the loss is not covered if the covered risk was only a remote cause of the
        loss, or the excluded risk was the efficient proximate, or predominate cause.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters. Concurrent causation (which applies only to third-party
        liability claims in California) asks whether a covered peril contributed meaningfully.
        Efficient proximate cause asks whether the covered peril was the <strong>dominant</strong>{' '}
        cause. The bar is higher, but when it is met, the entire loss is covered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Garvey v. State Farm Fire &amp; Casualty Co.</em>, 48 Cal.3d 395, 770 P.2d 704
        (1989).{' '}
        <a
          href="https://scocal.stanford.edu/opinion/garvey-v-state-farm-fire-casualty-co-30811"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Read the opinion at Stanford SCOCal.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Julian v. Hartford Underwriters</em> (2005): The Limit of the Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Heavy rains caused a slope failure above the Julians&rsquo; West Hills home, sending
        a tree crashing into their house. Hartford denied the claim, citing exclusions for
        earth movement, design and construction defects, and weather conditions that combine
        with an excluded cause. <em>Julian</em> is often described as a policyholder
        victory &mdash; but it is actually the case that marks the doctrine&rsquo;s outer limit,
        and the policyholder lost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court confirmed the core rule on one side and its limit on the
        other. On one side: where a <strong>covered</strong> peril is the efficient proximate
        cause, an insurer cannot use policy language to exclude the loss &mdash; the doctrine is
        rooted in Insurance Code Section 530, and an exclusion is unenforceable to the extent it
        conflicts with that rule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the other side &mdash; and this is what <em>Julian</em> actually held on its
        facts &mdash; where the efficient proximate cause is an <strong>excluded</strong> peril,
        an insurer <em>may</em> enforce the exclusion, including an exclusion written in terms of
        a relationship between two perils (such as weather conditions that combine with earth
        movement). The predominant cause of the Julians&rsquo; loss was a rain-induced landslide,
        an excluded earth-movement peril, so the Court <strong>upheld Hartford&rsquo;s exclusion
        and the denial of coverage</strong>. The doctrine protects a policyholder when a covered
        peril predominates; it does not manufacture coverage when the predominant cause is
        excluded, and it does not void every combined-peril exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court also confirmed that identifying the efficient proximate cause is generally a{' '}
        <strong>question of fact</strong> &mdash; decided on the evidence, not on the
        insurer&rsquo;s preferred characterization of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Julian v. Hartford Underwriters Insurance Co.</em>, 35 Cal.4th 747, 110 P.3d 903
        (2005).{' '}
        <a
          href="https://scocal.stanford.edu/opinion/julian-v-hartford-underwriters-33519"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Read the opinion at Stanford SCOCal.
        </a>
      </p>

      {/* ── Anti-Concurrent Causation Clauses ────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Anti-Concurrent Causation Clauses: The Insurer&rsquo;s Attempted Workaround
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After courts began applying the efficient proximate cause doctrine to expand
        coverage, the insurance industry responded with a contractual device: the
        anti-concurrent causation (ACC) clause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ACC language, found in most modern homeowner&rsquo;s and commercial
        property policies, reads something like this:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
        &ldquo;We do not insure for loss caused directly or indirectly by any of the
        following. Such loss is excluded regardless of any other cause or event that
        contributes concurrently or in any sequence to the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The purpose is unmistakable: if an excluded peril contributes to the loss in any
        way &mdash; whether as the primary cause, a secondary cause, or the last link in a
        chain &mdash; the insurer disclaims coverage for the entire loss. The clause is
        designed to eliminate the efficient proximate cause analysis entirely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        California&rsquo;s Response: ACC Clauses Are Unenforceable
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have consistently held that anti-concurrent causation clauses
        cannot override the efficient proximate cause doctrine.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Howell v. State Farm Fire &amp; Casualty Co.</em> (1990), the Court of Appeal
        directly confronted the ACC clause and refused to enforce it. The court held that an
        insurer cannot &ldquo;contract out&rdquo; of the efficient proximate cause doctrine
        because the doctrine is grounded in statute &mdash; Insurance Code Section 530 &mdash;
        and reflects public policy that parties cannot contractually override.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court has confirmed the underlying principle: a policy exclusion
        is unenforceable to the extent it conflicts with Insurance Code Section 530 and the
        efficient proximate cause doctrine. But as <em>Julian v. Hartford</em> (2005) shows, that
        protection applies when a <em>covered</em> peril is the predominant cause &mdash; it does
        not bar an exclusion where the predominant cause is itself an excluded peril. The
        anti-concurrent-causation clause cannot defeat coverage when a covered peril is the
        efficient proximate cause (<em>Howell</em>); it is not a guarantee of coverage whenever
        any covered peril happens to be present.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Howell v. State Farm Fire &amp; Casualty Co.</em>, 218 Cal.App.3d 1446, 267
        Cal.Rptr. 708 (1990).{' '}
        <a
          href="https://law.justia.com/cases/california/court-of-appeal/3d/218/1446.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Read the opinion on Justia.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Other States That Refuse to Enforce ACC Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is not alone, though it is in the minority:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Washington</strong> follows the same rule. In{' '}
        <em>Safeco Insurance Co. v. Hirschmann</em> (1989), the Washington Supreme Court held
        that the efficient proximate cause rule &ldquo;may not be circumvented by exclusionary
        clause language.&rdquo; This was reinforced in <em>Key Tronic Corp. v. Aetna</em>{' '}
        (1994), which confirmed that &ldquo;an exclusionary clause drafted to circumvent the
        rule will not defeat recovery.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Safeco Insurance Co. v. Hirschmann</em>, 773 P.2d 413 (Wash. 1989).{' '}
        <a
          href="https://law.justia.com/cases/washington/supreme-court/1989/55638-5-1.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Read the opinion on Justia.
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>West Virginia</strong> reached the same conclusion in{' '}
        <em>Murray v. State Farm Fire &amp; Casualty Co.</em> (1998), holding that ACC
        language does not preclude the use of the efficient proximate cause doctrine to
        determine coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Murray v. State Farm Fire &amp; Casualty Co.</em>, 509 S.E.2d 1 (W. Va. 1998).{' '}
        <a
          href="https://law.justia.com/cases/west-virginia/supreme-court/1998/24759.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Read the opinion on Justia.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Majority of States Enforce ACC Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most states do enforce anti-concurrent causation
        clauses under freedom-of-contract principles. States that have upheld ACC clauses
        include Alabama, Alaska, Arizona, Colorado, Delaware, Florida, Georgia, Idaho,
        Illinois, Indiana, Louisiana, Maryland, Massachusetts, New Jersey, New York, North
        Carolina, Ohio, Pennsylvania, South Carolina, Texas, and Utah, among others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In these states, the presence of an ACC clause can be outcome-determinative. If the
        policy contains one and an excluded peril contributed to the loss in any way,
        coverage may be denied regardless of which peril was the predominant cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This makes California&rsquo;s rejection of ACC clauses especially significant for
        California policyholders.
      </p>

      {/* ── Common Scenarios ─────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Scenarios Where the Doctrine Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause doctrine is not an abstract legal principle. It arises
        in real claims with real consequences.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Wind Damage Leading to Water Intrusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A windstorm &mdash; a covered peril &mdash; damages the roof or breaks a window.
        Rain enters through the opening and causes interior water damage. The insurer points
        to a water damage exclusion and denies the interior damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under efficient proximate cause analysis, the wind was the dominant cause. It created
        the opening through which the water entered. Without the wind, there would have been
        no water intrusion. On those facts, California&rsquo;s EPC framework would typically
        treat the entire loss &mdash; including the interior water damage &mdash; as covered.
        How the doctrine applies to any particular policy and set of facts is a question for
        a California-licensed attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Plumbing Failure Leading to Mold
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A covered sudden plumbing break releases water that saturates building materials.
        Over the following days or weeks, mold develops. The insurer denies the mold damage
        under a mold exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the sudden plumbing failure is the efficient proximate cause &mdash; and the mold
        is merely the natural consequence of the water exposure &mdash; the mold damage may
        be covered under the EPC framework. The plumbing break set the chain in motion.
        However, if the
        &ldquo;plumbing failure&rdquo; is actually a gradual leak that developed over months
        (excluded as maintenance or wear and tear), the analysis changes &mdash; the
        efficient proximate cause may be the gradual deterioration, not a sudden event.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Negligent Construction Leading to Water Intrusion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A builder&rsquo;s negligent waterproofing &mdash; covered under an all-risk
        policy &mdash; allows water to infiltrate the structure, causing wood rot, structural
        damage, and mold. The insurer denies the claim under exclusions for faulty
        workmanship or construction defects.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Sabella</em>, the builder&rsquo;s negligence is the efficient proximate
        cause. The water intrusion and resulting damage are the mechanism through which the
        negligence manifested, not independent causes. This distinction between the peril
        that set the chain in motion and the perils that followed is at the heart of the
        doctrine.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Earthquake Causing Fire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has a specific statutory rule for this scenario. Insurance Code Section
        10088.5 provides that a fire insurer is not exempt from covering losses caused by
        fire that results from or follows an earthquake, even if the policy excludes
        earthquake damage. If an earthquake ruptures a gas line and the gas ignites, the fire
        damage is covered under the fire policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Faulty Maintenance Leading to Sudden Collapse
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Deferred maintenance &mdash; excluded as wear, tear, or neglect &mdash; weakens a
        structural member over time. A storm applies force to the weakened structure, causing
        it to collapse suddenly. The insurer argues the deferred maintenance was the real
        cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The analysis depends on which cause is predominant. If the storm&rsquo;s force would
        not have caused the collapse in a properly maintained structure, the deferred
        maintenance may be the efficient proximate cause &mdash; and the loss may be
        excluded. But if the storm&rsquo;s force was substantial enough to be the dominant
        cause, and the deferred maintenance merely increased vulnerability, the storm may be
        the efficient proximate cause &mdash; and the loss may be covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Negligent Repairs Leading to Fire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor performs negligent electrical work. A wiring defect causes an electrical
        fire months later. The insurer denies the claim under an exclusion for faulty
        workmanship.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On those facts, the negligent workmanship is the efficient proximate cause &mdash; it
        set in motion the chain that led to the fire. The fire is the mechanism through which
        the negligence caused the loss. Under all-risk policies, California&rsquo;s EPC
        framework would typically treat the entire loss as covered. Coverage analysis on any
        specific claim depends on the policy language and the facts.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Storm Damage Leading to Theft
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A covered windstorm breaks windows or doors, leaving the building unsecured. Thieves
        enter through the storm-damaged opening. The insurer denies the theft, or the storm
        damage, or both.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The storm is the efficient proximate cause &mdash; it created the conditions that
        made the theft possible. On those facts, California&rsquo;s EPC framework would
        typically treat both the storm damage and the theft as covered, though application
        to a particular policy depends on the policy language and the facts.
      </p>

      {/* ── How California Courts Determine ──────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How California Courts Determine the Efficient Proximate Cause
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California uses what courts call the &ldquo;predominant cause&rdquo; test, reflected
        in CACI Jury Instruction No. 2306:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
        &ldquo;When a loss is caused by a combination of covered and excluded risks under the
        policy, the loss is covered only if the most important or predominant cause is a
        covered risk.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The determination is a question of fact &mdash; meaning it is decided by the jury
        based on the evidence, not by the insurer based on its preferred characterization of
        the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Burden of Proof
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The allocation of the burden depends on the type of policy:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>All-risk policies:</strong> The insurer bears the burden of proving the loss
        resulted from an excluded peril. The policyholder need only show that a loss
        occurred. If the insurer claims the efficient proximate cause is an excluded peril,
        the insurer must prove it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Named-peril policies:</strong> The policyholder bears the burden of proving
        the loss resulted from a specified covered peril.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, most homeowner&rsquo;s policies are all-risk (technically &ldquo;risks
        of direct physical loss&rdquo; with specified exclusions), which means the burden of
        proving the excluded peril was the efficient proximate cause falls on the insurer.
      </p>

      {/* ── How Other States Handle the Doctrine ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Other States Handle the Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        States generally fall into one of three approaches:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Efficient Proximate Cause (Majority Rule):</strong> Coverage depends on
        whether the predominant cause is covered. The covered peril must be the dominant,
        most important cause in the causal chain. This is the majority approach, followed by
        most states.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Concurrent Causation (Minority &mdash; Florida):</strong> Coverage exists
        whenever a covered peril contributes meaningfully to the loss, even if an excluded
        peril is the predominant cause. This approach, adopted by Florida in{' '}
        <em>Sebo v. American Home Assurance Co.</em> (Fla. 2016), is the most
        policyholder-friendly &mdash; but it applies in Florida only when the policy does not
        contain an ACC clause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Apportionment (Texas):</strong> When covered and excluded perils combine, the
        insured recovers only for the portion attributable to the covered peril.
        Under <em>Lyons v. Millers Casualty Insurance Co. of Texas</em>, 866 S.W.2d 597
        (Tex. 1993), the insured bears the burden of presenting evidence that allows a jury
        to allocate the damage between covered and uncovered causes. This is the most
        insurer-friendly approach.
      </p>

      {/* ── Common Insurer Tactics ───────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What to Watch For: Common Insurer Tactics
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Characterizing the Loss as Single-Cause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer attributes the entire loss to a single excluded peril, denying that
        multiple causes exist. &ldquo;This is earth movement.&rdquo; &ldquo;This is wear and
        tear.&rdquo; &ldquo;This is water damage.&rdquo; By collapsing the causal chain into
        a single excluded peril, the insurer avoids the efficient proximate cause analysis
        entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The response: investigate independently. Retain experts who can identify the full
        causal chain and determine whether a covered peril initiated the sequence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Focusing on the Last Link in the Chain
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer points to the excluded peril that was the final event before the damage
        occurred. &ldquo;The immediate cause of the damage was earth movement, which is
        excluded.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Sabella</em>, the &ldquo;efficient cause&rdquo; is not the cause immediate
        in time to the damage &mdash; it is the one that sets others in motion. The last link
        in the chain may be the least important cause in the analysis.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Deploying ACC Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer relies on anti-concurrent causation language to deny the entire claim
        whenever an excluded peril contributed in any way.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, Washington, and West Virginia, this clause is unenforceable. In other
        states, its enforceability depends on the jurisdiction.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Refusing to Investigate the Full Causal Chain
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer conducts a superficial investigation, identifies the excluded peril, and
        stops looking. It does not investigate whether a covered peril was the efficient
        proximate cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This can constitute bad faith. An insurer has a duty to investigate the claim
        thoroughly, which includes analyzing the efficient proximate cause doctrine&rsquo;s
        potential application to the facts.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Using Expert Reports That Address Only the Excluded Cause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer retains an engineer or expert who opines only on the excluded
        peril &mdash; &ldquo;the foundation damage was caused by earth movement&rdquo;
        &mdash; without analyzing whether a covered peril set the earth movement in motion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The response: retain your own expert who addresses the full causal chain and can
        testify about which cause was predominant.
      </p>

      {/* ── CDI Has Weighed In ───────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The California Department of Insurance Has Weighed In
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The efficient proximate cause doctrine is not merely a legal principle applied by
        courts after the fact. The California Department of Insurance has actively reminded
        insurers of their obligations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2018, following the Thomas Fire and Montecito mudslides, then-Commissioner Dave
        Jones issued a formal notice to insurers reminding them that the efficient proximate
        cause doctrine requires coverage for mudslide damage when wildfire is the efficient
        proximate cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2025, following the Los Angeles wildfires, Commissioner Ricardo Lara issued
        Bulletin 2025-3 reminding insurers of their legal duty to cover flood, mudslide, and
        earth movement damage when a recent wildfire was the efficient proximate cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These bulletins do not create new law &mdash; they restate existing law. But they put
        insurers on notice that the Department is watching, and that denials based on excluded
        secondary perils may trigger regulatory scrutiny.
      </p>

      {/* ── Cases Cited ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Cases Cited
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-2">California Supreme Court</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>
              <em>Sabella v. Wisler</em>, 59 Cal.2d 21, 377 P.2d 889 (1963) &mdash;{' '}
              <a href="https://scocal.stanford.edu/opinion/sabella-v-wisler-29936" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Stanford SCOCal</a>
            </li>
            <li>
              <em>State Farm Mutual Auto Insurance Co. v. Partridge</em>, 10 Cal.3d 94, 514 P.2d 123 (1973) &mdash;{' '}
              <a href="https://scocal.stanford.edu/opinion/state-farm-mut-auto-ins-co-v-partridge-32954" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Stanford SCOCal</a>
            </li>
            <li>
              <em>Garvey v. State Farm Fire &amp; Casualty Co.</em>, 48 Cal.3d 395, 770 P.2d 704 (1989) &mdash;{' '}
              <a href="https://scocal.stanford.edu/opinion/garvey-v-state-farm-fire-casualty-co-30811" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Stanford SCOCal</a>
            </li>
            <li>
              <em>State Farm Fire &amp; Casualty Co. v. Von Der Lieth</em>, 54 Cal.3d 1123, 820 P.2d 285 (1991) &mdash;{' '}
              <a href="https://scocal.stanford.edu/opinion/state-farm-fire-casualty-co-v-von-der-lieth-31381" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Stanford SCOCal</a>
            </li>
            <li>
              <em>Julian v. Hartford Underwriters Insurance Co.</em>, 35 Cal.4th 747, 110 P.3d 903 (2005) &mdash;{' '}
              <a href="https://scocal.stanford.edu/opinion/julian-v-hartford-underwriters-33519" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Stanford SCOCal</a>
            </li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-2">California Court of Appeal</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>
              <em>Howell v. State Farm Fire &amp; Casualty Co.</em>, 218 Cal.App.3d 1446, 267 Cal.Rptr. 708 (1990) &mdash;{' '}
              <a href="https://law.justia.com/cases/california/court-of-appeal/3d/218/1446.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Justia</a>
            </li>
            <li>
              <em>Chadwick v. Fire Insurance Exchange</em>, 17 Cal.App.4th 1112, 21 Cal.Rptr.2d 871 (1993) &mdash;{' '}
              <a href="https://law.justia.com/cases/california/court-of-appeal/4th/17/1112.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Justia</a>
            </li>
            <li>
              <em>Vardanyan v. AMCO Insurance Co.</em>, 243 Cal.App.4th 779 (2015) &mdash;{' '}
              <a href="https://law.justia.com/cases/california/court-of-appeal/2016/f069953.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Justia</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <h3 className="font-bold text-[#1F3964] mb-2">Other Jurisdictions</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
          <li>
            <em>Safeco Insurance Co. v. Hirschmann</em>, 773 P.2d 413 (Wash. 1989) &mdash;{' '}
            <a href="https://law.justia.com/cases/washington/supreme-court/1989/55638-5-1.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Justia</a>
          </li>
          <li>
            <em>Key Tronic Corp. v. Aetna (CIGNA) Fire Underwriters Insurance Co.</em>, 881 P.2d 201, 124 Wash.2d 618 (1994) &mdash;{' '}
            <a href="https://law.justia.com/cases/washington/supreme-court/1994/59616-6-1.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Justia</a>
          </li>
          <li>
            <em>Murray v. State Farm Fire &amp; Casualty Co.</em>, 509 S.E.2d 1 (W. Va. 1998) &mdash;{' '}
            <a href="https://law.justia.com/cases/west-virginia/supreme-court/1998/24759.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">Justia</a>
          </li>
          <li>
            <em>Lyons v. Millers Casualty Insurance Co. of Texas</em>, 866 S.W.2d 597 (Tex. 1993)
          </li>
        </ul>
      </div>

      {/* ── Additional Resources ─────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Additional Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <a
            href="https://www.propertyinsurancecoveragelaw.com/blog/a-primer-on-the-efficient-proximate-cause-doctrine-in-california/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            A Primer on the Efficient Proximate Cause Doctrine in California &mdash; Property Insurance Coverage Law Blog
          </a>
        </li>
        <li>
          <a
            href="https://www.insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/Bulletin-2025-3-Coverage-of-Flood-Mudslide-and-Earth-Movement-Claims-Relating-to-Recent-Wildfires.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            CDI Bulletin 2025-3: Coverage of Flood, Mudslide, and Earth Movement Claims Relating to Recent Wildfires
          </a>
        </li>
        <li>
          <a
            href="https://www.insurance.ca.gov/0400-news/0100-press-releases/2018/upload/FINAL-Prox-Cause-NOTICE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            CDI 2018 Formal Notice on Proximate Cause
          </a>
        </li>
        <li>
          <a
            href="https://www.hkr.law/survey-of-state-law-on-enforceability-of-anti-concurrent-causation-clauses/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Survey of State Law on Enforceability of Anti-Concurrent Causation Clauses &mdash; HKR Law
          </a>
        </li>
        <li>
          California Insurance Code Sections{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=INS&division=1.&title=&part=1.&chapter=6.&article=2."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            530
          </a>,{' '}
          <a
            href="https://law.justia.com/codes/california/code-ins/division-1/part-1/chapter-6/article-2/section-530-5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            530.5
          </a>, and{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=INS&division=1.&title=&part=1.&chapter=6.&article=2."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            532
          </a>
        </li>
        <li>
          <a
            href="https://crowdsourcelawyers.com/judicial-council-california-civil-jury-instructions-caci/caci-2306-covered-and-excluded-risks-predominant-cause-of-loss/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            CACI No. 2306: Covered and Excluded Risks &mdash; Predominant Cause of Loss
          </a>
        </li>
      </ul>

      {/* ── Disclaimer ───────────────────────────────────────────── */}

      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance law varies by jurisdiction. Consult a licensed attorney for advice about
        your specific situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property Insurance Coverage Law Blog (Merlin Law Group)</strong> &mdash; Merlin Law Group has written on the efficient proximate cause doctrine and its application to first-party property claims. Search the blog for &ldquo;efficient proximate cause.&rdquo;
        </li>
        <li>
          <strong>Garvey v. State Farm Fire &amp; Cas. Co. (1989) 48 Cal.3d 395</strong> &mdash; The California Supreme Court decision establishing the efficient proximate cause doctrine for first-party property coverage.
        </li>
      </ul>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
