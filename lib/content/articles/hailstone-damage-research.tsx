import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Hailstone Research Tells Us About Insurance Claims',
  description:
    'IBHS research on 2,500+ hailstones proves hail damage is far more complex than insurers claim. Real hailstones are not perfect spheres, maximum sizes far exceed the average, and lab tests overstate impact force.',
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
        ran the most comprehensive hailstone measurement program ever conducted. Researchers
        collected and measured more than <strong>2,500 individual hailstones</strong> from{' '}
        <strong>33 separate thunderstorms</strong> across the Great Plains. What they found
        should change how every insurance adjuster, engineer, and homeowner thinks about hail
        damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hailstones Are Not Perfect Spheres
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you picture a hailstone, you probably imagine a round ball of ice &mdash; like a
        marble or a golf ball. That is not what falls from the sky. The IBHS research found
        that <strong>84% of hailstones are spheroidal</strong> (roughly egg-shaped or slightly
        flattened), <strong>10% are conical</strong> (pointed on one end like a spinning top),
        and <strong>6% are completely irregular</strong> (jagged, lobed, or asymmetric).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why does this matter? Because <em>every standard impact test</em> used by roofing
        manufacturers and insurance engineers uses perfectly round ice spheres. The test
        standard &mdash; UL 2218, also known as FM 4473 &mdash; fires machine-made ice balls
        at roofing materials from a controlled height. These ice balls are smooth, uniform,
        and dense. Real hailstones are none of those things.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Maximum Is Typically Twice the Mean
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the finding that should keep every insurance adjuster honest: within a single
        hailstorm, the <strong>maximum hailstone size is typically about twice the mean
        (average) size</strong>. That means if a storm produces an average hailstone diameter
        of one inch, individual stones in that same storm likely reached two inches.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about what this means in practice. When a weather report says &ldquo;quarter-sized
        hail&rdquo; (roughly one inch), that is describing the <em>typical</em> stone
        size &mdash; not the largest ones. The same storm almost certainly produced stones
        closer to two inches. And a two-inch hailstone carries dramatically more energy than a
        one-inch stone.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        So when your insurance company says &ldquo;the reported hail size in your area was only
        one inch, which is not large enough to damage your shingles,&rdquo; the correct response
        is: the <em>average</em> was one inch. Some of the stones that hit your roof were likely
        twice that size.
      </p>

      <CalloutBox variant="important" title="Key Takeaway for Homeowners">
        <p>
          Weather reports describe <strong>average or representative</strong> hail sizes, not
          the maximum. IBHS research proves that the largest hailstones in a storm are
          typically <strong>twice the reported average</strong>. When an insurer uses a weather
          report to argue the hail was &ldquo;too small&rdquo; to cause damage, they are
          misrepresenting what the data actually shows.
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
        The IBHS researchers calculated a &ldquo;natural hail equivalent&rdquo; for each
        standard test ball size. In other words, they figured out what size of real hailstone
        has the same mass as the perfect ice balls used in lab testing. Here is what they found:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Lab Ice Ball Diameter</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Equivalent Natural Hail Diameter</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Common Size Comparison</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">1.0 inch</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">~1.18 inches</td>
              <td className="border border-gray-300 px-4 py-2">Quarter &rarr; slightly larger</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">1.25 inches</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">~1.56 inches</td>
              <td className="border border-gray-300 px-4 py-2">Half-dollar &rarr; golf ball</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">1.5 inches</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">~1.96 inches</td>
              <td className="border border-gray-300 px-4 py-2">Ping-pong ball &rarr; egg</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">2.0 inches</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">~2.65 inches</td>
              <td className="border border-gray-300 px-4 py-2">Hen egg &rarr; baseball</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read the table carefully. A roofing product rated to withstand a 1-inch ice ball in the
        lab would be expected to resist natural hailstones up to about 1.18 inches &mdash; not
        much more than a quarter. But because the maximum hail size in a storm is typically
        twice the mean, a storm reporting &ldquo;quarter-sized hail&rdquo; likely produced
        individual stones well beyond what that rating covers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And at the 2-inch test level, the gap gets even wider: a 2-inch lab ice ball has the
        same mass as a natural hailstone of approximately 2.65 inches. The larger the hailstone,
        the more oblong and irregular it becomes, and the greater the difference between lab
        conditions and reality.
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
          But the maximum stones in that storm were likely twice the reported average size.
          Quarter-sized average means some stones were likely half-dollar to golf ball sized.
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
            The IBHS research proving that maximum hail size is typically twice the mean
            reported size.
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
        The IBHS research proves that this simplification is scientifically indefensible.
        Hailstorms produce a wide range of stone sizes. The largest stones are far bigger
        than the average. Real hailstones behave differently from lab test projectiles. And
        the farther you get from controlled laboratory conditions, the less predictable the
        damage becomes.
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
        The findings discussed in this article are based on the peer-reviewed paper:{' '}
        <strong>
          &ldquo;Observations of Hailstone Sizes and Shapes from the IBHS Hail Measurement
          Program: 2012&ndash;2014&rdquo;
        </strong>{' '}
        by Ian M. Giammanco and Tanya M. Brown (Insurance Institute for Business &amp; Home
        Safety), Matthew R. Kumjian (The Pennsylvania State University), and Andrew J.
        Heymsfield (National Center for Atmospheric Research). The study was published in
        the <em>Journal of Atmospheric and Oceanic Technology</em> (American Meteorological
        Society).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        IBHS is a nonprofit research organization funded by property insurers and reinsurers.
        Notably, this research was funded by the insurance industry itself &mdash; which makes
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
