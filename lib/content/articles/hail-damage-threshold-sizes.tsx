import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Hail Damage Thresholds: What Size Hail Actually Damages Your Roof',
  description:
    'Haag Engineering research establishes the minimum hail sizes needed to damage common roofing materials — the same thresholds insurers use internally.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company sends an engineer to inspect your roof after a hailstorm, there
        is a good chance that engineer works for Haag Engineering. Haag is the most widely used
        forensic engineering firm in the property insurance industry. Their inspectors examine
        thousands of roofs every year, and their reports are routinely used to justify claim
        decisions &mdash; including denials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What most homeowners do not know is that Haag&apos;s own researchers published a study
        establishing the <strong>minimum hail sizes needed to cause functional damage</strong> to
        common roofing and siding materials. These thresholds are based on controlled testing and
        field observation. They are the same benchmarks Haag trains its own field inspectors on.
        And they often contradict the conclusions in the very reports Haag produces for insurance
        companies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Damage Thresholds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2002, Haag Engineering researchers presented their findings at the 21st American
        Meteorological Society Conference on Severe Local Storms. They tested and documented the
        minimum hail sizes required to cause <strong>functional damage</strong> &mdash; meaning
        damage that compromises the material&apos;s ability to do its job &mdash; for the most
        common roofing and siding materials in North America.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Roofing Material</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Minimum Damaging Hail Size</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Common Size Comparison</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">3-Tab Asphalt Shingles</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">1 inch</td>
              <td className="border border-gray-300 px-4 py-2">Quarter</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Dimensional / Architectural Shingles</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">1.25 inches</td>
              <td className="border border-gray-300 px-4 py-2">Half-dollar</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Wood Shakes</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">1.25 &ndash; 1.5 inches</td>
              <td className="border border-gray-300 px-4 py-2">Half-dollar to ping-pong ball</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Clay Tile</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Varies widely</td>
              <td className="border border-gray-300 px-4 py-2">Depends on tile profile and age</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Vinyl Siding</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">1.25 inches</td>
              <td className="border border-gray-300 px-4 py-2">Half-dollar</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Aluminum Siding</td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">0.75 &ndash; 1 inch</td>
              <td className="border border-gray-300 px-4 py-2">Penny to quarter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Look at the first row. Standard 3-tab asphalt shingles &mdash; the most common roofing
        material in America &mdash; can sustain functional damage from hail as small as{' '}
        <strong>one inch</strong>. That is quarter-sized hail. When your insurer tells you
        quarter-sized hail cannot damage your roof, Haag&apos;s own published research says
        otherwise.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        &ldquo;Functional Damage&rdquo; vs. &ldquo;Cosmetic Damage&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is at the heart of many hail claim disputes. Insurance companies
        increasingly argue that hail damage is &ldquo;cosmetic only&rdquo; &mdash; meaning it
        affects the appearance of the roof but does not compromise its performance. Some policies
        now include cosmetic damage exclusions that allow the insurer to deny claims for dents,
        bruises, and granule loss that do not immediately cause leaks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Haag study defines <strong>functional damage</strong> as damage that compromises the
        material&apos;s ability to shed water and protect the structure &mdash; even if the damage
        does not look dramatic to an untrained eye. A shingle with a fractured mat beneath the
        surface may still appear intact from a distance. But the fracture allows water
        infiltration, and the shingle will fail prematurely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is important because many hail damage denials are based on a visual inspection from
        the ground or a brief walk on the roof. Functional damage often requires close inspection,
        including pressing on the shingle to feel for mat fractures beneath the granule surface.
        An inspector who does not perform this test may miss the damage entirely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Impact Angle Changes Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Haag researchers noted that the angle at which hail strikes the roof significantly
        affects whether damage occurs. In a real thunderstorm, hail rarely falls straight down.
        Wind drives the stones at an angle &mdash; sometimes a steep angle. This is called
        &ldquo;windblown hail,&rdquo; and it is the norm, not the exception.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When hail hits at an angle, the force is concentrated differently than a vertical drop.
        Depending on the angle and the roof slope, an angled impact can be more damaging than a
        direct vertical strike because the hailstone may slide and gouge the surface rather than
        bouncing cleanly. This means that{' '}
        <strong>the threshold sizes in the table above are based on controlled vertical
        drops</strong> &mdash; in a real storm with wind, damage can occur from hailstones even
        smaller than the listed thresholds.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Using the Carrier&apos;s Own Expert Against Them
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where this research becomes a powerful tool for homeowners. When an insurance
        company hires Haag Engineering to inspect your roof, and the Haag engineer reports that
        the hail was &ldquo;not large enough to cause damage,&rdquo; you can ask a pointed
        question: does that finding align with Haag&apos;s own published damage thresholds?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the weather data shows quarter-sized hail (one inch) and your roof has 3-tab
        shingles, Haag&apos;s own research says damage is possible. If the engineer&apos;s report
        says no damage occurred, the engineer needs to explain the discrepancy &mdash; not just
        say &ldquo;I didn&apos;t see any.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same logic applies to aged shingles. Older shingles have less granule adhesion, more
        brittle mats, and reduced flexibility. The thresholds published by Haag apply to shingles
        in reasonable condition. A twenty-year-old shingle may sustain functional damage from hail
        even smaller than the published minimums.
      </p>

      <CalloutBox variant="tip" title="How to Use This in Your Claim Dispute">
        <p className="mb-2">
          When your insurer uses a Haag Engineering report to deny your claim, you can reference
          Haag&apos;s own published research to challenge the findings:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Obtain the weather data for your area on the date of the storm &mdash; local
            hail reports, SPC storm reports, and radar-estimated hail sizes.
          </li>
          <li>
            Compare the reported hail size to the damage thresholds Haag published for your
            specific roofing material.
          </li>
          <li>
            If the hail size meets or exceeds the threshold, ask the insurer to explain why
            their own expert&apos;s company says damage is expected, but their inspector says it
            is not.
          </li>
          <li>
            Ask whether the inspector tested for functional damage (mat fractures) or only
            looked for visible surface damage.
          </li>
          <li>
            Ask whether the inspector accounted for the age and condition of your roofing
            material, which lowers the damage threshold.
          </li>
        </ul>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Insurers Rarely Mention This Research
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Haag Engineering is the insurance industry&apos;s go-to firm for forensic roof
        inspections. Their reports carry significant weight in claim decisions, appraisals, and
        litigation. But when a Haag report favors the insurer, the insurer rarely mentions that
        Haag&apos;s own published research may support the homeowner&apos;s position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a conspiracy. It is simply how adversarial claim handling works. The insurer
        presents the evidence that supports their position. It is your job &mdash; or your public
        adjuster&apos;s job, or your attorney&apos;s job &mdash; to present the evidence that
        supports yours. And Haag&apos;s own threshold research is some of the strongest evidence
        available, precisely because it comes from the firm the insurer chose to hire.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        About This Research
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The findings discussed in this article are based on the paper:{' '}
        <strong>
          &ldquo;Hail Damage Threshold Sizes for Common Roofing and Siding Materials&rdquo;
        </strong>{' '}
        by Timothy P. Marshall, Richard F. Herzog, Scott J. Morrison, and Steven R. Smith (Haag
        Engineering Co., Dallas, Texas). The paper was presented at the{' '}
        <em>21st Conference on Severe Local Storms</em>, hosted by the American Meteorological
        Society, in 2002.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Haag Engineering has been providing forensic engineering services to the property
        insurance industry since 1924. Their damage threshold research remains one of the most
        widely referenced studies in hail damage assessment and is used by engineers, adjusters,
        and attorneys on both sides of claim disputes.
      </p>
    </>
  )
}
