import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Commercial Cause of Loss Forms: Basic, Broad, and Special — What Your Policy Actually Covers',
  description:
    'The cause of loss form attached to your commercial property policy determines whether your claim is covered. Learn the critical differences between the Basic (CP 10 10), Broad (CP 10 20), and Special (CP 10 30) forms and why the wrong form can leave you uninsured.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your commercial property policy does not cover every type of loss. What it covers depends
        almost entirely on which <strong>cause of loss form</strong> is attached to the policy.
        There are three standard ISO cause of loss forms, and the difference between them is the
        difference between a covered claim and a denial letter. Most business owners have no idea
        which form they have until they file a claim and discover the answer the hard way.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike residential HO-3 policies &mdash; which cover the dwelling on an open-peril basis
        and contents on a named-peril basis &mdash; commercial property policies separate the
        cause of loss coverage into a standalone form that is attached to the Commercial Property
        Coverage Part. The property form (CP 00 10, CP 00 20, or CP 00 30) describes <em>what</em>{' '}
        is covered. The cause of loss form describes <em>what perils</em> are covered. You need
        both to have a complete picture. For an overview of how commercial policies are structured
        differently from residential, see our article on{' '}
        <Link href="/resources/commercial-vs-residential-claims" className="text-[#2E74B5] underline hover:text-blue-900">
          how commercial claims differ from residential
        </Link>.
      </p>

      <CalloutBox variant="important" title="Check Your Declarations Page Now">
        <p>
          Pull out your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] underline hover:text-blue-900 font-semibold">
            declarations page
          </Link>{' '}
          and look for the cause of loss form number. You will see <strong>CP 10 10</strong>{' '}
          (Basic), <strong>CP 10 20</strong> (Broad), or <strong>CP 10 30</strong> (Special).
          If you see CP 10 10 or CP 10 20, you have named-peril coverage &mdash; meaning if the
          cause of your loss is not on the list, you have no coverage. If you see CP 10 30, you
          have open-peril coverage &mdash; meaning everything is covered unless specifically
          excluded.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How the Three Forms Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental distinction is between <strong>named peril</strong> and{' '}
        <strong>open peril</strong> (sometimes called &ldquo;all risk&rdquo;) coverage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Named peril</strong> (Basic and Broad forms): The policy lists specific perils
          that are covered. If the cause of your loss is not on the list, there is no coverage.
          The burden of proof is on the insured to show that the loss was caused by a listed peril.
        </li>
        <li>
          <strong>Open peril</strong> (Special form): The policy covers all causes of loss{' '}
          <em>unless</em> specifically excluded. The burden of proof shifts to the insurer &mdash;
          the insurer must prove that an exclusion applies. This is a fundamentally different
          starting point and it matters enormously when a claim is disputed.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CP 10 10 &mdash; Basic Form (Named Peril)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Basic form provides the narrowest coverage. It covers loss caused by only the
        following perils:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Fire</strong></li>
        <li><strong>Lightning</strong></li>
        <li><strong>Explosion</strong></li>
        <li><strong>Windstorm or hail</strong></li>
        <li><strong>Smoke</strong></li>
        <li><strong>Aircraft or vehicles</strong></li>
        <li><strong>Riot or civil commotion</strong></li>
        <li><strong>Vandalism</strong></li>
        <li><strong>Sprinkler leakage</strong></li>
        <li><strong>Sinkhole collapse</strong></li>
        <li><strong>Volcanic action</strong></li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        That is the entire list. If the cause of your loss is not one of those eleven perils,
        the Basic form provides no coverage. Some of the most common commercial losses &mdash;
        burst pipes, accidental water discharge, falling objects, weight of snow or ice, collapse
        &mdash; are <strong>not covered</strong> under the Basic form.
      </p>

      <CalloutBox variant="warning" title="What the Basic Form Does NOT Cover">
        <p>
          The Basic form excludes many common losses that business owners assume are covered:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Water damage from burst pipes or plumbing failures</li>
          <li>Falling objects (trees, debris, construction materials)</li>
          <li>Weight of snow, ice, or sleet causing roof collapse</li>
          <li>Water damage from ice dams or freezing</li>
          <li>Accidental discharge or overflow from any system</li>
          <li>Collapse from any cause</li>
          <li>Theft</li>
        </ul>
        <p className="mt-2">
          If your policy has a Basic cause of loss form and a pipe bursts in your building, you
          likely have no coverage for the resulting water damage.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Limitations Within the Basic Perils
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even the listed perils come with limitations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Windstorm or hail:</strong> Does not include frost, cold weather, ice (other
          than hail), or snow, whether driven by wind or not. Does not cover damage to the
          interior of the building or its contents unless the building first sustains damage to
          the roof or walls from wind/hail that allows the elements in.
        </li>
        <li>
          <strong>Vandalism:</strong> The insurer will not pay for vandalism damage if the
          building has been vacant for more than 60 consecutive days before the vandalism
          occurred. See our article on{' '}
          <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] underline hover:text-blue-900">
            vacancy and unoccupancy clauses
          </Link>.
        </li>
        <li>
          <strong>Sprinkler leakage:</strong> Does not cover the cost of repairing the sprinkler
          system itself, only the damage caused by the discharge.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CP 10 20 &mdash; Broad Form (Named Peril)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Broad form includes all eleven Basic form perils <em>plus</em> the following
        additional perils:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6" start={12}>
        <li><strong>Falling objects</strong></li>
        <li><strong>Weight of snow, ice, or sleet</strong></li>
        <li><strong>Water damage</strong> (accidental discharge or leakage from plumbing, HVAC, fire protection, or other systems)</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Broad form also adds <strong>collapse</strong> as an additional coverage (not a
        listed peril &mdash; an important distinction). Collapse coverage under the Broad form
        applies only when the collapse is caused by specific listed causes, including the
        listed perils, hidden decay, hidden insect or vermin damage, weight of people or
        personal property, weight of rain on a roof, and use of defective materials or methods
        in construction or renovation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Limitations in the Broad Form Additions
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Falling objects:</strong> Does not cover damage to the interior of the building
          or its contents unless the falling object first damages the roof or exterior wall. A
          tree branch that smashes through the roof and damages inventory inside is covered. An
          object that falls <em>inside</em> the building is not.
        </li>
        <li>
          <strong>Weight of snow, ice, or sleet:</strong> Only covers damage to personal property
          inside the building if the roof or exterior wall is first damaged by the weight.
        </li>
        <li>
          <strong>Water damage:</strong> Specifically limited to accidental discharge or leakage
          from plumbing, heating, air conditioning, fire protection systems, or household
          appliances. Does not cover continuous or repeated seepage over a period of 14 days or
          more. Does not cover water that backs up from a sewer or drain.
        </li>
      </ul>

      <CalloutBox variant="info" title="The Broad Form Still Has Gaps">
        <p>
          The Broad form is significantly better than Basic, but it is still a named-peril form.
          The insured still bears the burden of proving the loss was caused by a listed peril.
          Losses from theft, mysterious disappearance, power failure, mechanical breakdown, and
          many other causes remain uncovered. For comprehensive protection, you need the Special
          form.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CP 10 30 &mdash; Special Form (Open Peril)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Special form is fundamentally different from the Basic and Broad forms. Instead of
        listing which perils are covered, it covers <strong>all causes of loss unless
        specifically excluded</strong>. This is called &ldquo;open peril&rdquo; or
        &ldquo;all risk&rdquo; coverage, and it is the gold standard for commercial property
        insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect is enormous. Under the Basic or Broad form, if a loss occurs and
        the cause is ambiguous &mdash; the insured has the burden of proving the loss was caused
        by a listed peril. Under the Special form, the burden shifts to the insurer. The insured
        only needs to prove that a covered loss occurred. The insurer must then prove that a
        specific exclusion applies. If the cause of loss is genuinely unknown, the insured wins
        under the Special form and loses under the Basic or Broad form.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Exclusions in the Special Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Special form achieves its broad coverage by covering everything and then carving out
        exclusions. The major exclusion categories include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Ordinance or law</strong> (unless covered by endorsement)</li>
        <li><strong>Earth movement</strong> (earthquake, landslide, mine subsidence, earth sinking/shifting)</li>
        <li><strong>Governmental action</strong> (seizure, confiscation, destruction by government order)</li>
        <li><strong>Nuclear hazard</strong></li>
        <li><strong>Utility services</strong> (failure of power, water, gas, telephone, or other utility if the failure originates off-premises)</li>
        <li><strong>War and military action</strong></li>
        <li><strong>Water</strong> (flood, surface water, waves, tidal water, overflow from bodies of water, mudslide/mudflow, and sewer/drain backup)</li>
        <li><strong>Fungus, wet rot, dry rot, and bacteria</strong> (with limited exceptions)</li>
        <li><strong>Virus or bacteria</strong> (added by CP 01 40 endorsement after COVID-19)</li>
        <li><strong>Wear and tear, deterioration, rust, corrosion, decay</strong></li>
        <li><strong>Mechanical breakdown</strong> (unless covered by equipment breakdown endorsement)</li>
        <li><strong>Settling, cracking, shrinking, bulging, or expansion</strong></li>
        <li><strong>Theft in certain circumstances</strong> (from open buildings, uncompleted buildings)</li>
        <li><strong>Rain, snow, sand, or dust</strong> to the interior unless the exterior is first damaged by a covered cause</li>
        <li><strong>Missing property</strong> where the only evidence of loss is unexplained shortfall in inventory</li>
        <li><strong>Voluntary parting with property</strong> through trick, scheme, or false pretense</li>
        <li><strong>Artificially generated electrical, magnetic, or electromagnetic energy</strong> (power surge)</li>
        <li><strong>Delay, loss of use, or loss of market</strong></li>
        <li><strong>Smoke, vapor, or gas from agricultural or industrial operations</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even with this long list of exclusions, the Special form covers vastly more than the
        Basic or Broad forms. Theft from a secured building is covered. Accidental damage from
        construction or renovation is covered. Damage from causes that cannot be precisely
        identified is covered &mdash; so long as no exclusion applies.
      </p>

      <CalloutBox variant="tip" title="The Burden of Proof Advantage">
        <p>
          Under the Special form, the insured proves a loss occurred and the insurer proves an
          exclusion applies. Under the Basic or Broad form, the insured proves the loss was
          caused by a specific listed peril. This burden shift is the single most valuable
          feature of the Special form. When the cause of a loss is disputed, ambiguous, or
          difficult to prove, the Special form protects the insured. The Basic and Broad forms
          leave the insured exposed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Side-by-Side Comparison
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-3 text-left font-semibold">Cause of Loss</th>
              <th className="px-4 py-3 text-center font-semibold">Basic<br/>(CP 10 10)</th>
              <th className="px-4 py-3 text-center font-semibold">Broad<br/>(CP 10 20)</th>
              <th className="px-4 py-3 text-center font-semibold">Special<br/>(CP 10 30)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Fire</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Lightning</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Explosion</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Windstorm / Hail</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Smoke</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Aircraft / Vehicle Impact</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Riot / Civil Commotion</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Vandalism</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Sprinkler Leakage</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Sinkhole Collapse</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Volcanic Action</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t-2 border-gray-300 bg-amber-50">
              <td className="px-4 py-2 font-semibold">Falling Objects</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-amber-50">
              <td className="px-4 py-2 font-semibold">Weight of Snow / Ice / Sleet</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-amber-50">
              <td className="px-4 py-2 font-semibold">Water Damage (Burst Pipes, Leaks)</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-amber-50">
              <td className="px-4 py-2 font-semibold">Collapse (Additional Coverage)</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t-2 border-gray-300 bg-red-50">
              <td className="px-4 py-2 font-semibold">Theft (from secured building)</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-red-50">
              <td className="px-4 py-2 font-semibold">Accidental Damage (Unknown Cause)</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes</td>
            </tr>
            <tr className="border-t border-gray-200 bg-red-50">
              <td className="px-4 py-2 font-semibold">Power Surge (internal to building)</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-red-600 font-bold">No</td>
              <td className="px-4 py-2 text-center text-green-700 font-bold">Yes*</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">
          * The Special form excludes &ldquo;artificially generated electrical, magnetic, or
          electromagnetic energy&rdquo; from utility sources but may cover internal power surges
          depending on the specific facts and policy language.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why the Cause of Loss Form Matters More Than You Think
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Burden of Proof
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the Basic and Broad forms, the insured must prove that the loss was caused by a
        listed peril. If the cause is ambiguous &mdash; the damage could be from wind, could be
        from settling, could be from water &mdash; the insured loses unless they can affirmatively
        prove it was a listed peril. Under the Special form, the insured proves a loss occurred,
        and the insurer must prove an exclusion applies. If the cause is ambiguous, the insured
        wins.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Concurrent Causation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss involves multiple causes &mdash; some covered, some not &mdash; the cause of
        loss form determines the analysis. Under the Special form, insurers often include{' '}
        <Link href="/resources/anti-concurrent-causation" className="text-[#2E74B5] underline hover:text-blue-900">
          anti-concurrent causation (ACC) clauses
        </Link>{' '}
        that attempt to deny the entire claim if any excluded cause contributed. In California,
        ACC clauses are unenforceable under the efficient proximate cause doctrine. Under the
        Basic and Broad forms, the insured must still prove the loss was caused by a listed peril
        even if concurrent causes exist.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Theft Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Neither the Basic nor the Broad form covers theft. Only the Special form includes theft
        as a covered cause of loss (with certain limitations for open buildings, uncompleted
        construction, and inventory shortages). A business that relies on its commercial property
        policy for theft protection and has a Basic or Broad form has no coverage. This is a
        gap that many business owners discover only after a break-in.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Claim Scenarios by Form
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Pipe Bursts and Floods the Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Basic form:</strong> Denied. Water damage from plumbing failure is not a listed
        peril. <strong>Broad form:</strong> Covered, subject to the 14-day continuous seepage
        limitation. <strong>Special form:</strong> Covered, unless the water damage exclusion
        for continuous seepage applies.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Tree Falls on the Roof During a Calm Day
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Basic form:</strong> Denied. Falling objects is not a listed peril, and the
        windstorm peril requires wind.{' '}
        <strong>Broad form:</strong> Covered under the falling objects peril (if it damaged the
        exterior first). <strong>Special form:</strong> Covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Inventory Stolen in a Night Break-In
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Basic form:</strong> Denied. Theft is not a listed peril.{' '}
        <strong>Broad form:</strong> Denied. Theft is still not a listed peril.{' '}
        <strong>Special form:</strong> Covered, provided the building was secured and the theft
        was not from an open or uncompleted building.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Damage from Unknown Cause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A business owner discovers cracking in a wall. The cause is not immediately apparent.{' '}
        <strong>Basic and Broad forms:</strong> Denied. The insured cannot prove a listed peril
        caused the damage. <strong>Special form:</strong> Potentially covered. The insured proves
        a loss occurred, and the insurer must prove that settling, earth movement, wear and tear,
        or another specific exclusion applies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How the Cause of Loss Form Interacts with Other Coverage Parts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cause of loss form does not stand alone. It works in conjunction with the property
        coverage form and the commercial property conditions form:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property coverage form</strong> (CP 00 10 for buildings and BPP) describes
          <em> what</em> is covered &mdash; the building, business personal property, or both.
        </li>
        <li>
          <strong>Cause of loss form</strong> (CP 10 10, 10 20, or 10 30) describes{' '}
          <em>what perils</em> trigger coverage.
        </li>
        <li>
          <strong>Commercial property conditions</strong> (CP 00 90) sets out the rules &mdash;
          duties after loss, vacancy limitations, loss payment procedures.
        </li>
        <li>
          <strong>Business income form</strong> (CP 00 30 or CP 00 32) uses the same cause of
          loss form to determine whether a business income claim is covered. If the property
          damage cause of loss is not covered, the resulting business income loss is not covered
          either.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Your Business Income Claim Depends on This Form Too">
        <p>
          If your commercial property policy includes{' '}
          <Link href="/resources/business-interruption" className="text-[#2E74B5] underline hover:text-blue-900 font-semibold">
            business income coverage
          </Link>, the cause of loss form attached to the policy also controls whether business
          income losses are covered. A burst pipe that floods your warehouse and forces you to
          close for three months is a business income loss &mdash; but only if the cause of loss
          form covers water damage from burst pipes. Under the Basic form, it does not. The
          property damage is denied, and the business income claim is denied with it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Premium Difference and the Cost-Benefit Reality
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Special form costs more than the Broad form, which costs more than the Basic form.
        The premium difference reflects the broader coverage. But the cost difference is often
        surprisingly small relative to the coverage difference. A business paying $15,000 per
        year for a Basic form policy might pay $17,000 to $19,000 for the Special form &mdash;
        a 15 to 25 percent increase for a fundamentally different level of protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost-benefit analysis is straightforward: a single uncovered loss under the Basic or
        Broad form will cost far more than a lifetime of premium differences for the Special form.
        A $200,000 water damage claim denied because the Basic form does not cover burst pipes
        makes the $2,000 annual premium difference irrelevant. Talk to your broker about upgrading
        to the Special form at your next renewal.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What to Do If You Have the Wrong Form
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Check your declarations page now.</strong> Look for the cause of loss form
          number. If you see CP 10 10 or CP 10 20, understand the limitations.
        </li>
        <li>
          <strong>Request a quote for the Special form.</strong> Ask your broker to quote the
          premium difference. You may be surprised how small it is.
        </li>
        <li>
          <strong>If you cannot get the Special form</strong>, make sure you understand exactly
          what is and is not covered. Adjust your risk management and loss prevention practices
          accordingly.
        </li>
        <li>
          <strong>Consider supplemental coverage.</strong> Equipment breakdown endorsements,
          inland marine policies, and crime policies can fill specific gaps left by the Basic
          or Broad forms.
        </li>
        <li>
          <strong>If your broker placed you on a Basic or Broad form without explanation</strong>,
          you may have a{' '}
          <Link href="/resources/broker-agent-liability" className="text-[#2E74B5] underline hover:text-blue-900">
            claim against the broker
          </Link>{' '}
          if a loss occurs that would have been covered under a Special form.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          The cause of loss form (CP 10 10, CP 10 20, or CP 10 30) is the single most important
          factor in determining whether your commercial property claim is covered.
        </li>
        <li>
          The Basic form (CP 10 10) covers only 11 named perils. Burst pipes, theft, falling
          objects, and snow loads are not covered.
        </li>
        <li>
          The Broad form (CP 10 20) adds falling objects, weight of snow/ice, water damage, and
          collapse to the Basic perils. Theft is still not covered.
        </li>
        <li>
          The Special form (CP 10 30) covers all causes of loss unless specifically excluded.
          The burden of proof shifts to the insurer.
        </li>
        <li>
          The cause of loss form also determines whether your business income and extra expense
          claims are covered.
        </li>
        <li>
          The premium difference between forms is often small relative to the coverage difference.
          A single uncovered loss will cost more than years of premium differences.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Policy language varies between carriers and editions. Some carriers use
          proprietary cause of loss forms with different terms. Always read the specific form
          attached to your policy and consult with a licensed public adjuster or attorney for
          questions about your coverage.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Not Sure What Cause of Loss Form You Have?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If you have a commercial property claim and are unsure whether your policy covers the
          cause of your loss, a licensed public adjuster can review your policy, identify your
          cause of loss form, and determine your coverage options.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
