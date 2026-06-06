import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Water Damage and the "Continuous or Repeated Seepage" Exclusion: Sudden vs. Gradual',
  description:
    'California insurers routinely deny water-damage claims under the "continuous or repeated seepage or leakage" exclusion. Learn the sudden-versus-gradual distinction, who bears the burden of proof, and how the 2026 published decision Nargizyan v. State Farm limits this tactic.',
  summary:
    'The "continuous or repeated seepage or leakage" exclusion bars coverage for gradual, long-term water intrusion, not a sudden burst. The insurer bears the burden of proving the exclusion applies, and the 2026 published decision Nargizyan v. State Farm held that an after-the-fact "it must have been leaking a long time" opinion, with no proof of duration, does not establish the exclusion.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="What This Article Is, and What It Is Not">
        <p>
          This article is for educational purposes only and does not constitute legal advice.
          A Public Adjuster&rsquo;s role is to document the loss and handle the claim; the
          development of legal arguments, the selection of legal theories, and the conduct of
          litigation are the work of a California-licensed attorney. Coverage always turns on
          the specific policy language and the facts of the loss.
          Consult a licensed California attorney about a specific situation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Most Common Water-Damage Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water is the most disputed cause of loss in residential property claims. A pipe fails, a
        supply line lets go, a water heater ruptures &mdash; and the carrier denies the claim, not
        because water damage is excluded, but by pointing to a specific exclusion: loss caused by{' '}
        <strong>&ldquo;continuous or repeated seepage or leakage&rdquo;</strong> of water. The
        denial letter says the damage happened slowly, over weeks or months, and therefore falls
        outside coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That argument is correct in some cases and wrong in many others. The exclusion is real, but
        it is narrower than the way carriers often use it. Understanding what it actually covers
        &mdash; and who has to prove what &mdash; is the difference between an accepted claim and a
        denial that should not stand.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Exclusion Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common form of the exclusion in California homeowners policies bars loss caused by:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">
        continuous or repeated seepage or leakage of water or steam that occurs over a period of
        weeks, months, or years.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exact wording varies from policy to policy, so the controlling language is whatever
        appears in the specific policy at issue. But the structure is consistent: the exclusion is
        defined by <strong>time</strong>. It targets water that escapes <em>gradually and
        repeatedly over an extended period</em>. The phrase &ldquo;over a period of weeks, months,
        or years&rdquo; is not decoration &mdash; it is the heart of the exclusion.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sudden vs. Gradual: The Dividing Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard homeowners policy covers sudden and accidental direct physical loss. The seepage
        exclusion carves out the opposite: slow, ongoing intrusion that a reasonable homeowner
        could have discovered and addressed. So the dividing line is duration, not mechanism.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A sudden event is generally covered.</strong> A supply line that bursts and
          floods a kitchen overnight is a sudden, accidental discharge &mdash; not &ldquo;seepage
          &hellip; over a period of weeks, months, or years.&rdquo;
        </li>
        <li>
          <strong>Gradual, long-term seepage is generally excluded.</strong> A fitting that has
          been weeping behind a wall for a year, slowly rotting the framing, is the classic
          situation the exclusion was written for.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanism of failure &mdash; that it was a pipe &mdash; does not decide the question.
        A burst pipe usually produces a sudden discharge of water, even though &ldquo;the
        plumbing failed.&rdquo; What matters is <em>how long the water was actually escaping and
        causing damage</em>. Carriers frequently blur this point by treating any plumbing-related
        loss as &ldquo;seepage,&rdquo; but the policy language ties the exclusion to time, not to
        the type of component that failed.
      </p>

      <CalloutBox variant="important" title="Who Has to Prove It">
        <p>
          This is the part carriers count on insureds not knowing. Under California law, the
          policyholder proves the loss falls within the policy&rsquo;s basic coverage; the{' '}
          <strong>insurer bears the burden of proving that an exclusion applies</strong>. For the
          seepage exclusion, that means the carrier &mdash; not the homeowner &mdash; must show
          the water escaped gradually over an extended period. A denial that simply asserts the
          loss &ldquo;must have been&rdquo; long-term, without evidence of how long the water was
          actually leaking, has not carried that burden.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Nargizyan v. State Farm (2026): New California Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Nargizyan v. State Farm General Insurance Co.</em> (2026) ___ Cal.App.5th ___ (2d
        Dist., Div. 7, No. B342340), the California Court of Appeal addressed exactly this tactic
        &mdash; and reversed summary judgment that had been entered in the insurer&rsquo;s favor.
        The opinion was originally filed unpublished on April 15, 2026, then certified for
        publication by a publication order on May 14, 2026, which means it can now be cited as
        precedent in California. (Any attorney citing the case should confirm its current
        status, because the California Supreme Court&rsquo;s window for review or depublication
        runs after the publication order.)
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The homeowner noticed the tile on his kitchen floor was unusually warm, found water leaking
        from a hot-water pipe beneath the kitchen, and had a plumber locate and repair the leak. He
        reported the claim. State Farm denied it under the continuous-or-repeated-seepage exclusion,
        taking the position that the leak was gradual.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court of Appeal held that summary judgment was improper because there were triable
        issues of material fact about whether the loss was <strong>sudden</strong> (covered) or{' '}
        <strong>gradual</strong> (excluded). The court emphasized that the exclusion targets water
        intrusion that occurs over time, so the critical question is how long the water had been
        escaping &mdash; and the insurer&rsquo;s own expert could not say. With no evidence
        establishing the duration of the leak, and indicators consistent with a sudden event, the
        carrier had not proven the exclusion applied as a matter of law.
      </p>

      <CalloutBox variant="tip" title="Why This Decision Matters">
        <p>
          <em>Nargizyan</em> draws a clear line: a carrier cannot turn a sudden water loss into an
          excluded &ldquo;long-term&rdquo; loss with an after-the-fact opinion that never measures
          how long the water was actually leaking. Because the insurer carries the burden on the
          exclusion, the absence of duration evidence cuts <em>against</em> the carrier, not the
          homeowner. For policyholders facing a seepage denial, that is a meaningful shift in
          leverage &mdash; and the kind of authority that can move a carrier to reopen a claim or
          reconsider a denial.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bad Faith and the Failure to Investigate Duration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Nargizyan</em> went further than coverage. The Court of Appeal also revived the
        insured&rsquo;s claims for{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>{' '}
        and punitive damages, holding there were triable issues about whether the carrier
        investigated the claim fairly. The record allowed a jury to find that the insurer never
        analyzed how long the water had been escaping &mdash; the single fact that determined
        whether the exclusion even applied &mdash; and relied on an expert who did not address it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That connects to a basic principle of California claims handling: an insurer has a{' '}
        <Link href="/resources/duty-to-investigate" className="text-[#2E74B5] hover:underline">
          duty to investigate
        </Link>{' '}
        a claim thoroughly and fairly before denying it. When a denial rests on an exclusion whose
        central fact &mdash; duration &mdash; was never investigated, that gap is evidence both
        that the exclusion was not proven and that the investigation itself was unreasonable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What an Insured Facing a Seepage Denial Can Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a water claim has been denied under a seepage or &ldquo;continuous leakage&rdquo;
        exclusion, the facts that decide the dispute are usually about timing &mdash; and those
        facts are best captured early:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get the plumber&rsquo;s observations in writing.</strong> The plumber who found
          and repaired the leak is often the best witness on whether the failure was sudden. What
          failed, how it failed, and any indication of how recently &mdash; documented at the time
          &mdash; can be decisive.
        </li>
        <li>
          <strong>Preserve the failed component.</strong> The pipe, fitting, or supply line is
          physical evidence. Once it is discarded, the carrier&rsquo;s &ldquo;it leaked for
          months&rdquo; theory becomes harder to test.
        </li>
        <li>
          <strong>Photograph everything.</strong> The water, the affected area, the failed part,
          and the surrounding materials. Signs of clean, recent water versus long-term staining
          and deterioration speak directly to duration.
        </li>
        <li>
          <strong>Ask the carrier what evidence supports the exclusion.</strong> Because the
          insurer bears the burden, an insured may reasonably ask the carrier to identify the
          evidence showing the leak occurred over weeks, months, or years. A denial that cannot
          answer that question is vulnerable.
        </li>
        <li>
          <strong>Read the actual exclusion language.</strong> The controlling words are in the
          policy. Some forms include time qualifiers; the specific wording matters, and an insured
          is always free to read and rely on their own policy.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Developing this factual record is squarely within a Public Adjuster&rsquo;s role. Where a
        denial turns into a dispute over legal theories or litigation, that is the point to involve
        a California-licensed attorney.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Coverage Doctrines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seepage exclusion rarely operates alone. Two related doctrines often decide water
        claims alongside it:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] hover:underline">
            Efficient proximate cause
          </Link>{' '}
          &mdash; when a covered peril sets the chain of events in motion, California law can
          require coverage even if an excluded peril also contributed (see <em>Howell v. State
          Farm Fire &amp; Cas. Co.</em> (1990) 218 Cal.App.3d 1446).
        </li>
        <li>
          <Link href="/resources/wear-and-tear-exclusion" className="text-[#2E74B5] hover:underline">
            The wear-and-tear exclusion
          </Link>{' '}
          &mdash; carriers sometimes pair the seepage argument with a claim that the plumbing
          simply wore out. Like seepage, this exclusion is about cause, and the insurer bears the
          burden of proving it.
        </li>
        <li>
          <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
            Water damage claims (general framework)
          </Link>{' '}
          &mdash; the umbrella article on how California water-damage claims are handled,
          including tear-out, slab access, and the broader regulatory framework.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;continuous or repeated seepage&rdquo; exclusion applies to gradual, long-term
        water intrusion &mdash; not to a sudden burst that happens to involve a pipe. The insurer,
        not the insured, must prove the water escaped over an extended period, and after{' '}
        <em>Nargizyan v. State Farm</em>, a denial built on an after-the-fact assumption about
        duration &mdash; with no evidence of how long the water was actually leaking &mdash; is on
        weak ground. A water claim denied on this exclusion is worth a careful second look.
      </p>

      <p className="text-sm text-gray-500 mt-8 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
