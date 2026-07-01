import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Hailstone Research Tells Us About Insurance Claims',
  description:
    "IBHS research on 2,500+ hailstones shows hail damage is more complex than insurers claim. Real hailstones aren't spheres, and lab tests overstate impact force.",
  summary:
    'IBHS research on thousands of hailstones shows hail damage is more complex than insurers claim: real hailstones are irregular, far exceed average size, and lab tests can overstate impact force. This science supports challenging a quick hail denial.',
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
        When your insurance company denies a hail damage claim, they usually point to weather
        reports. &ldquo;The National Weather Service reported quarter-sized hail in your area.
        That&apos;s not large enough to damage your roof.&rdquo; It sounds reasonable. It is
        not. The actual science of hailstones &mdash; how big they really are, what shape they
        take, and how they behave on impact &mdash; tells a very different story.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Between 2012 and 2014, the Insurance Institute for Business &amp; Home Safety (IBHS)
        ran the most comprehensive hailstone measurement program of its kind, deploying a
        mobile field team that collected and measured <strong>2,557 individual hailstones</strong>
        from <strong>33 separate thunderstorms</strong> across the Great Plains. What they found
        should change how every insurance adjuster, engineer, and homeowner thinks about hail
        damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hailstones Are Not Perfect Spheres
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you picture a hailstone, you probably imagine a round ball of ice &mdash; like a
        marble or a golf ball. That is not what falls from the sky. The IBHS research documented
        that the great majority of measured hailstones were <strong>spheroidal</strong> (roughly
        egg-shaped or slightly flattened), with smaller proportions <strong>conical</strong>
        (pointed on one end) and <strong>fully irregular</strong> (jagged, lobed, or asymmetric).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why does this matter? Because <em>every standard impact test</em> used by roofing
        manufacturers and insurance engineers uses perfectly round ice spheres. The test
        standard &mdash; UL 2218, also known as FM 4473 &mdash; fires machine-made ice balls
        at roofing materials from a controlled height. These ice balls are smooth, uniform,
        and dense. Real hailstones are none of those things.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reported Hail Size Is Not the Whole Story
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Within a single hailstorm, the size distribution is wide. The IBHS field data shows
        stones ranging from sub-pea size to over 7 cm in a single dataset, with the largest
        stones substantially exceeding the typical or mean size in their respective storms.
        That means if a weather report describes a storm as producing roughly one-inch hail,
        individual stones in that same storm can be larger &mdash; sometimes much larger.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about what this means in practice. When a weather report says &ldquo;quarter-sized
        hail&rdquo; (roughly one inch), that is describing the <em>representative</em> stone
        size &mdash; not the largest ones. The same storm likely produced stones materially
        larger than that. And a larger hailstone carries dramatically more energy than a smaller
        one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        So when your insurance company says &ldquo;the reported hail size in your area was only
        one inch, which is not large enough to damage your shingles,&rdquo; the correct response
        is to ask what the upper tail of the size distribution at your address actually was,
        not just the reported size.
      </p>

      <CalloutBox variant="important" title="Key Takeaway for Homeowners">
        <p>
          Weather reports describe <strong>representative</strong> hail sizes, not the maximum
          stones that fell. IBHS field research consistently documents wide size distributions
          within a single storm, with the largest stones substantially exceeding the typical
          size. When an insurer uses a single reported hail size to argue the hail was
          &ldquo;too small&rdquo; to cause damage, they are oversimplifying what the actual
          size distribution shows.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real Hail Has Less Mass Than Lab Ice Balls
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The researchers weighed every hailstone they collected and compared the results to what
        a perfect ice sphere of the same diameter would weigh. The finding:{' '}
        <strong>natural hailstones consistently have less mass than a perfect ice sphere of the
        same maximum diameter</strong>. This makes sense &mdash; real hailstones have air
        pockets, irregular surfaces, and layered internal structures that reduce their density
        compared to solid lab ice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This has a critical implication for impact testing. When a roofing manufacturer tests
        their shingles against a 1.5-inch ice ball and the shingle passes, they are testing
        against a projectile that is <em>denser and heavier</em> than a real 1.5-inch hailstone.
        That sounds like it would make the test harder to pass &mdash; and it does. But here is
        what matters for your claim: it means the test results do not directly translate to
        real-world hail performance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What &ldquo;Impact Resistance&rdquo; Ratings Actually Mean
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because solid lab ice balls are denser than natural hailstones of the same diameter, the
        IBHS field data has been used to develop mass-equivalent calibrations &mdash; that is,
        figuring out what size of natural hailstone has roughly the same kinetic energy as the
        smaller, denser ice balls used in lab testing. The general direction of this calibration
        is consistent: a lab ice ball of a given diameter is mass-equivalent to a somewhat larger
        natural hailstone of the same kinetic energy. This is why a roofing product rated to
        withstand a 1-inch ice ball in a controlled lab test cannot be assumed to resist a real
        1-inch hailstorm. The lab test result and the field exposure are not directly equivalent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Specific mass-equivalent conversion factors are used by IBHS and ASCE in developing the
        new asphalt-shingle impact test protocol. The takeaway for policyholders does not depend
        on the precise conversion: whatever the exact ratios, the comparison favors policyholders
        on a typical hail claim. A storm reporting &ldquo;quarter-sized hail&rdquo; in a weather
        summary almost certainly included some larger stones, and those stones strike with more
        energy than the lab projectiles used to rate the roofing product. The larger the
        hailstone, the more oblong and irregular it becomes, and the greater the difference
        between lab conditions and reality.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bigger Hail Is More Oblong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The researchers measured the &ldquo;shape factor&rdquo; of each hailstone &mdash; the
        ratio of its shortest dimension to its longest. A perfect sphere has a shape factor of
        1.0. They found that <strong>as hailstones get larger, they become more oblong</strong>.
        Small hailstones are relatively round. Large hailstones are increasingly flattened or
        elongated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters because an oblong hailstone concentrates its impact energy differently than
        a round one. When a flattened stone hits a roof, the impact is not distributed evenly
        across a circular area &mdash; it may strike edge-first or with a smaller contact
        surface, focusing the force on a narrower point. Lab tests with perfect spheres do not
        replicate this effect.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters for Your Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies and their hired engineers use weather data and lab test results to
        make arguments about whether hail could have damaged your property. These arguments
        typically go like this:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Weather reports show only quarter-sized hail in your area.&rdquo;</strong>{' '}
          A reported size is representative, not maximum. Field data shows that within a single
          storm the size distribution is wide, with the largest stones substantially exceeding
          the reported typical size.
        </li>
        <li>
          <strong>&ldquo;Your shingles are rated Class 3 impact resistant &mdash; they can
          withstand 1.75-inch hail.&rdquo;</strong> That rating is based on perfectly round,
          solid ice spheres fired in a lab. Real hailstones of 1.75 inches are lighter, more
          irregular, and behave differently on impact. The rating does not mean your roof is
          undamaged &mdash; it means the shingles passed a specific lab test that does not
          perfectly replicate natural hail.
        </li>
        <li>
          <strong>&ldquo;Our engineer found no evidence of hail damage consistent with the
          reported hail sizes.&rdquo;</strong> If the engineer is comparing your roof damage
          to expected impacts from perfect ice spheres, they are using the wrong baseline.
          Natural hail impacts look different from lab impacts because the stones are shaped
          differently.
        </li>
        <li>
          <strong>&ldquo;The hail wasn&apos;t big enough to cause damage.&rdquo;</strong> Ask
          them: big enough according to what? The average from a weather report? A lab test
          with artificial ice balls? The actual peer-reviewed science says both of those
          metrics understate the real-world hail exposure your roof experienced.
        </li>
      </ul>

      <CalloutBox variant="tip" title="What to Do If Your Hail Claim Is Denied">
        <p className="mb-2">
          If an insurer or their engineer dismisses your hail damage based on reported hail
          sizes or impact resistance ratings, you have legitimate grounds to push back. Here is
          what to include in your response:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            The IBHS field research showing that hailstones within a single storm range widely
            in size, with the largest stones exceeding the reported representative size.
          </li>
          <li>
            The documented difference between lab ice spheres and natural hailstone mass and
            shape.
          </li>
          <li>
            A request for the engineer to explain how they accounted for natural hail
            variability in their analysis.
          </li>
          <li>
            A demand for the insurer to identify the specific scientific basis for their
            size-based denial.
          </li>
        </ul>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broader Point
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage claims are not simple. The interaction between hailstone size, shape, mass,
        velocity, angle of impact, and roofing material properties creates enormous variability
        in real-world damage. Insurance companies prefer to reduce this complexity to a single
        number &mdash; &ldquo;the hail was X inches&rdquo; &mdash; because a single number is
        easy to use in a denial letter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The IBHS field research undermines this simplification. Hailstorms produce a wide range
        of stone sizes, the largest of which can substantially exceed the typical or
        representative size used in weather reports. Real hailstones behave differently from
        lab test projectiles. And the farther you get from controlled laboratory conditions,
        the less predictable the damage becomes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of this means every hail claim is valid. But it does mean that a denial based
        solely on &ldquo;the reported hail size was too small&rdquo; is not supported by the
        science. If your insurer is making that argument, they owe you a better explanation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        About This Research
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The findings discussed in this article come from the Insurance Institute for Business
        &amp; Home Safety (IBHS) Hail Field Research Program, which conducted mobile field
        measurements of natural hailstones across the Great Plains between 2012 and 2014. The
        program&rsquo;s methods and results are documented in IBHS annual field summary reports
        and in conference papers presented at the American Meteorological Society Conference on
        Severe Local Storms by Tanya M. Brown-Giammanco, Ian M. Giammanco, and collaborators.
        Related lab impact-test calibration work has been published by IBHS researchers in
        ASCE&rsquo;s <em>Natural Hazards Review</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        IBHS is a nonprofit research organization funded by property insurers and reinsurers.
        This research was funded by the insurance industry itself &mdash; which makes
        its findings particularly difficult for insurers to dismiss when they contradict the
        simplistic arguments used in claim denials.
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
