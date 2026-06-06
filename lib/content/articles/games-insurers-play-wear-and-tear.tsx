import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Games Insurers Play: The ‘Wear and Tear’ Relabeling Game",
  description:
    "How insurance companies relabel legitimate covered damage as ‘wear and tear’ to deny claims — and how to fight back using the correct legal distinction between condition and causation.",
  summary:
    'Insurers relabel covered sudden damage as excluded \'wear and tear\' to deny claims. The correct distinction is between condition and causation: a covered event that caused the damage is payable even on an older component. Frame the cause, not just the condition.',
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
        Let me paint you a picture. You come home one day and find water pouring through your
        ceiling. You call your insurance company, file a claim, and wait for the adjuster. They come
        out, poke around, take some photos. A week later, you get a letter in the mail.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Dear Policyholder, following our investigation, we have determined that the damage to
        your property is the result of long-term wear and tear, deterioration, and pre-existing
        conditions. As you know, your policy excludes wear and tear. We regret to inform you that
        your claim is denied.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And you&rsquo;re standing there holding this letter, staring at the ceiling that collapsed
        two days ago from a burst pipe, thinking: what the hell?
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to the wear and tear relabeling game. It&rsquo;s one of the most infuriating, most
        common, and most effective tactics insurance companies use to deny or minimize legitimate
        claims. And I&rsquo;ve been fighting it for decades.
      </p>

      {/* ── The Game: Confusing Condition with Causation ────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Game: Confusing Condition with Causation
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s what you need to understand. Every house has pre-existing conditions. Every
        single one. Your roof is 15 years old. Your plumbing is copper from 1972. Your stucco has
        hairline cracks. Your windows have some weathering. That&rsquo;s called &ldquo;owning a
        house.&rdquo; Things age. Things deteriorate. That&rsquo;s normal.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But there&rsquo;s a critical legal distinction between the <em>condition</em> of your
        property and the <em>cause</em> of the damage. And insurance companies deliberately blur
        that line to deny claims.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy covers sudden and accidental losses &mdash; a pipe burst, a tree falling on your
        roof, a fire, a windstorm. It excludes gradual wear and tear, maintenance issues, and
        long-term deterioration. Fair enough. Nobody expects their insurance to pay for a new roof
        just because the old one is 20 years old.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But here&rsquo;s where the game gets dirty. An adjuster shows up at your house after a
        legitimate covered loss &mdash; say, a wind event that tears shingles off your roof &mdash;
        and instead of acknowledging the wind damage, they point to the overall condition of the roof
        and say: &ldquo;Well, this roof is old. These shingles show signs of wear. The granule loss
        is consistent with aging. This isn&rsquo;t wind damage. This is wear and tear.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        They&rsquo;re confusing the condition of the component with the cause of the loss. Yes, the
        roof is old. Yes, the shingles have some wear. But the wind ripped them off. The wind is
        the covered peril. The age of the roof doesn&rsquo;t change the cause of the damage.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It&rsquo;s like saying, &ldquo;Your 2015 Honda got rear-ended at a red light, but we&rsquo;re
        not paying because the car had 80,000 miles on it. That&rsquo;s just wear and tear.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Absurd, right? But they do it every single day on property claims.
      </p>

      {/* ── How They Execute the Play ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">How They Execute the Play</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The wear and tear relabeling game has a few variations, and I&rsquo;ve seen every single one
        of them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Version 1: The Blanket Denial Letter
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most brazen. The adjuster barely looks at the property, takes some photos of
        the most weathered areas, and sends a denial letter attributing everything to &ldquo;long-term
        deterioration and wear and tear.&rdquo; The letter is a template. They&rsquo;ve sent the same
        letter to a thousand other homeowners.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I had a case where a homeowner had clear wind damage to their roof. Shingles were torn off
        in a documented wind event. Creased shingles, lifted shingles, missing shingles &mdash;
        classic wind damage pattern. The insurance company sent a letter saying: &ldquo;Our
        investigation revealed that the cause of loss appears to be wear and tear, following failure
        of the roofing material.&rdquo; They stuck in some policy language about the wear and tear
        exclusion and closed the file.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The problem? There was a verified wind event. The National Weather Service data showed
        sustained winds above the threshold for shingle damage. Neighboring properties had identical
        damage patterns. This wasn&rsquo;t wear and tear. This was wind. But the adjuster never
        bothered to check the weather data, never talked to the neighbors, and never actually
        analyzed the damage pattern. They saw an old roof and reached for the denial template.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Version 2: The Contamination Sleight of Hand
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This one is more sophisticated and I see it constantly on water damage claims. A pipe bursts
        or a supply line fails &mdash; that&rsquo;s a sudden, accidental, covered loss. But when the
        adjuster comes out, they notice some discoloration around the baseboards, or some staining
        on the subfloor, or maybe there&rsquo;s some evidence of past moisture in a corner.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        So they write in their report: &ldquo;Upon inspection, we observed discoloration consistent
        with long-term moisture exposure, as well as evidence of termite damage and pre-existing
        deterioration. The damage observed appears to be the result of long-term seepage over a
        period of weeks or months. Wear and tear and long-term seepage are excluded under your
        policy.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s the sleight of hand: they&rsquo;ve taken a legitimate covered loss (the pipe
        burst) and contaminated it with observations about unrelated pre-existing conditions. The
        discoloration by the baseboard might be from a spill three years ago. The termite evidence
        might be in a completely different part of the house. But they throw it all into the same
        report to create the impression that everything is &ldquo;long-term&rdquo; and
        &ldquo;pre-existing.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I tell my clients it&rsquo;s like this: imagine you go to a fast food counter and hand the
        cashier a $20 bill for your order. You sit down and wait. Thirty minutes later, no food.
        You go back up and say, &ldquo;Hey, I gave you twenty bucks. Where&rsquo;s my food?&rdquo;
        And the cashier looks you dead in the eye and says, &ldquo;I don&rsquo;t recognize you. You
        never gave me twenty dollars.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You wouldn&rsquo;t expect it. It wouldn&rsquo;t be on your radar that someone would just
        brazenly deny something that clearly happened. But that&rsquo;s exactly what insurance
        companies do with the wear and tear label. They take your sudden, obvious, covered loss and
        just... relabel it. Like it never happened.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Version 3: The Expert Report Ambush
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For bigger claims or when they know they might face pushback, the insurance company brings
        in a hired expert &mdash; an engineer, a materials consultant, a forensic specialist. These
        experts know who&rsquo;s paying them, and their reports reliably support the insurance
        company&rsquo;s position.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The expert shows up and writes a lengthy, technical report full of jargon. They&rsquo;ll
        talk about &ldquo;granule erosion consistent with UV degradation&rdquo; or &ldquo;oxidative
        deterioration of the piping material&rdquo; or &ldquo;evidence of cyclical thermal
        expansion.&rdquo; It all sounds very scientific and authoritative.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But strip away the jargon and what they&rsquo;re really saying is: &ldquo;This stuff is
        old.&rdquo; No kidding. Everything is old. The question isn&rsquo;t whether the material has
        aged &mdash; it&rsquo;s whether the covered peril caused the damage you&rsquo;re claiming.
        These reports frequently dodge that question entirely, or they dismiss the covered peril with
        a single sentence while spending 15 pages describing the pre-existing condition of every
        component in the house.
      </p>

      {/* ── The Legal Framework ────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Legal Framework: Why They&rsquo;re Wrong
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, and in many other states, the law is actually on your side &mdash; if you
        know how to use it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Efficient Proximate Cause doctrine.</strong> Under California law, when a loss
        results from a combination of covered and non-covered causes, the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
          efficient proximate cause
        </Link>{' '}
        &mdash; the primary or predominant cause &mdash; determines coverage. If wind damage is the
        efficient proximate cause of your roof damage, it doesn&rsquo;t matter that the roof was old
        or had some pre-existing wear. The wind caused the loss. The wear and tear exclusion
        doesn&rsquo;t apply to the covered peril.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Anti-concurrent causation language doesn&rsquo;t fly in California.</strong> Many
        policies contain anti-concurrent causation (ACC) language that says if a loss involves both
        covered and excluded causes, the whole loss is excluded. California courts have consistently
        held that this language is unenforceable when it conflicts with the efficient proximate cause
        doctrine. The insurance company can put that language in the policy, but it doesn&rsquo;t
        override California case law.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The burden of proof on exclusions.</strong> In California, the insured has the
        initial burden of showing a loss occurred. But once you&rsquo;ve shown that a covered peril
        caused damage, the burden shifts to the insurance company to prove that an exclusion
        applies. They have to prove the damage is actually wear and tear, not just assert it in a
        template denial letter.
      </p>

      {/* ── Case Study ─────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        A Composite Case Study: Wind, a Roof, and a Bogus Denial
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Let me walk you through a composite case that illustrates how I handle this tactic.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner in a semi-rural California area calls me after getting a denial letter. They had
        a documented wind event. Several houses in the area lost shingles. My client&rsquo;s roof
        had multiple areas of missing and damaged shingles.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company sent an adjuster, who looked at the roof for about 20 minutes, then
        denied the claim. The denial letter was classic: &ldquo;Further investigation revealed that
        the cause of loss appears to be wear and tear, following failure of the roofing
        material.&rdquo; They attached some blurry photos and a copy of the policy exclusion.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s what I did.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Step 1: Documented the actual cause.</strong> I pulled the National Weather Service
        data showing the wind event. I photographed the damage patterns &mdash; creased shingles,
        shingles ripped from nail heads, shingles found in the yard. This is classic wind damage, not
        aging. Aging doesn&rsquo;t rip shingles off and throw them into the neighbor&rsquo;s driveway.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Step 2: Challenged the logic.</strong> I wrote a letter to the adjuster pointing out
        that they were confusing condition with causation. Yes, the roof was older. Yes, an older
        roof may be more susceptible to wind damage. But susceptibility is not causation. A
        70-year-old person is more susceptible to breaking a hip in a fall. That doesn&rsquo;t mean
        the fall was caused by aging. The fall caused the broken hip. The wind caused the roof
        damage.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Step 3: Pushed on their investigation.</strong> I asked the adjuster: Did you check
        weather data? Did you inspect neighboring properties? Did you identify the specific failure
        mechanism that caused the shingle loss? Did you differentiate between aging-related granule
        loss and impact or wind-related damage patterns? In most cases, they did none of this. Their
        &ldquo;investigation&rdquo; was looking at old shingles and reaching a conclusion they&rsquo;d
        already decided on before they got out of the car.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Step 4: Invoked the regulations.</strong> Under California&rsquo;s Fair Claims
        Settlement Practices Regulations, the insurance company has a duty to conduct a thorough
        investigation before denying a claim. A 20-minute roof inspection followed by a template
        denial letter doesn&rsquo;t qualify. I cited the specific regulations and put the carrier on
        notice.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The result? After several weeks of back-and-forth, the carrier reversed the denial and paid
        the claim. Not because they suddenly discovered the truth &mdash; the truth was obvious from
        the beginning. They paid because they realized someone was watching who knew the law and
        wasn&rsquo;t going away.
      </p>

      {/* ── How to Fight ───────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Fight the Wear and Tear Denial
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        1. Don&rsquo;t accept the denial at face value
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners get a denial letter and assume the insurance company must be right. After
        all, they&rsquo;re the professionals, right? Wrong. Denial letters are often generated from
        templates with minimal actual investigation behind them. Challenge it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        2. Get an independent inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hire your own contractor, engineer, or Public Adjuster to evaluate the damage and identify
        the actual cause of loss. Their report will carry weight, especially if the insurance
        company&rsquo;s inspection was superficial.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        3. Document the covered peril
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your damage was caused by wind, water, fire, or another covered peril, gather evidence
        of that event. Weather data, news reports, photos taken immediately after the event, reports
        from neighbors with similar damage &mdash; all of this supports causation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        4. Separate condition from causation in your response
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you write back to the insurance company, explicitly address the distinction. &ldquo;We
        acknowledge that the roof is [X] years old. However, the cause of the shingle loss was the
        wind event on [date], not the age of the roofing material. The wear and tear exclusion does
        not apply to damage caused by a covered peril.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">5. Cite the law</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, reference the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
          efficient proximate cause doctrine
        </Link>
        , the insurer&rsquo;s duty to investigate thoroughly (10 CCR 2695.7), and the requirement
        that the insurer prove an exclusion applies rather than simply asserting it. In other
        states, research your state&rsquo;s equivalent regulations and case law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">6. Escalate when necessary</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster won&rsquo;t budge, consider filing a Department of Insurance complaint,
        invoking the{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal process
        </Link>{' '}
        under your policy, or consulting with a{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>{' '}
        attorney. Insurance companies change their tune remarkably fast when they realize
        they&rsquo;re facing regulatory scrutiny or litigation.
      </p>

      {/* ── The Pattern You Need to See ─────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">The Pattern You Need to See</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s what I want you to take away from this. The wear and tear relabeling game is not
        about the insurance company genuinely believing your damage is from aging. It&rsquo;s about
        creating a plausible-sounding reason to deny or reduce your claim. It works because most
        homeowners don&rsquo;t know the difference between condition and causation. They don&rsquo;t
        know that California law puts the burden on the insurer to prove an exclusion. They
        don&rsquo;t know that a template denial letter doesn&rsquo;t constitute a thorough
        investigation.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company is banking on your ignorance. They&rsquo;re banking on you reading that
        letter, feeling defeated, and walking away.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Don&rsquo;t walk away.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every house has wear and tear. Every roof ages. Every pipe corrodes over time. That
        doesn&rsquo;t mean your covered loss isn&rsquo;t real. Don&rsquo;t let them relabel your
        legitimate claim with a five-cent legal trick.
      </p>

      <p className="text-sm text-gray-500 italic">
        Leland Coontz is a California Licensed Public Adjuster and the founder of
        InsuranceClaimsInfo.com. He has worked on both sides of the insurance claims process and
        has decades of experience advocating for policyholders. The scenarios described in this
        article are based on real events with identifying details changed. This article is for
        informational purposes and does not constitute legal advice.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
