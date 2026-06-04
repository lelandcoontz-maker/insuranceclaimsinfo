import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Building Code & Ordinance or Law Coverage',
  description:
    'Understanding Ordinance or Law coverage — why it covers far more than just building codes, how its three coverage parts work, and why it can add 25-50% to your insurance claim.',
  summary:
    'Ordinance or law coverage pays the increased cost of meeting current building codes after a covered loss, across three parts: loss to the undamaged portion, demolition, and increased construction cost. It can add 25 to 50% to a claim.',
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
        Ordinance or Law coverage is one of the most valuable and most misunderstood coverages in a
        homeowners insurance policy. Many people call it &quot;code upgrade coverage,&quot; and while
        that is partly accurate, the name sells it short. This coverage is broader than just building
        codes. It covers any legally required changes to your property after a loss — including
        building codes, zoning requirements, historical district appearance standards, and any other
        city or county regulations that affect how your home must be rebuilt or repaired.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why &quot;Code Upgrade Coverage&quot; Is Too Narrow a Name
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When people hear &quot;Ordinance or Law,&quot; they immediately think of building codes —
        requirements for wiring, plumbing, insulation, structural standards, and similar
        construction specifications. Building codes are a major part of this coverage, but they are
        not the only part. The coverage applies to any ordinance or law that regulates the
        construction, repair, or demolition of a building. That includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building codes:</strong> Updated electrical, plumbing, structural, energy
          efficiency, and fire safety requirements adopted since your home was originally built
        </li>
        <li>
          <strong>Zoning requirements:</strong> Changes in setback requirements, lot coverage
          limits, height restrictions, or land use designations that affect how or whether your home
          can be rebuilt in its current configuration
        </li>
        <li>
          <strong>Historical district requirements:</strong> If your home is in a designated
          historical area, you may be required to use specific materials, maintain certain
          architectural features, or follow appearance standards that go well beyond typical building
          codes
        </li>
        <li>
          <strong>Any other city or county regulations:</strong> Flood zone requirements,
          seismic retrofit mandates, accessibility standards, and other local regulations that apply
          to reconstruction or major repair
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three Coverage Parts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or Law coverage is typically divided into three distinct parts, each addressing a
        different financial impact of having to comply with current laws during reconstruction:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage A — Loss in Value of the Undamaged Portion
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a law or ordinance requires demolition of the undamaged portion of your home, Coverage
        A compensates you for the value of that undamaged structure. For example, if a fire damages
        60 percent of your home but the local building code requires that any structure with more
        than 50 percent damage be completely demolished and rebuilt, you lose the remaining 40
        percent of undamaged structure not because of the fire, but because of the law. Coverage A
        pays for that additional loss.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage B — Demolition Cost
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you are legally required to tear down the undamaged portion, someone has to pay for
        that demolition. Coverage B covers the actual cost of demolishing the undamaged structure
        that would not have been demolished if the law did not require it.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage C — Increased Cost of Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the part most people think of when they hear &quot;code upgrade.&quot; Coverage C
        pays for the increased cost of rebuilding to comply with current codes and standards. If
        your home was built in 1970 and must now be rebuilt to 2025 standards, the additional cost
        of modern wiring, plumbing, insulation, fire-resistant materials, energy-efficient windows,
        and seismic reinforcement is covered under Coverage C. This is also where historical
        district appearance requirements and other non-code regulations are addressed — the
        increased cost of using period-appropriate materials, matching architectural details, or
        meeting any other legal standard that applies to the rebuild.
      </p>

      <CalloutBox variant="tip" title="O&L Can Add 25-50% to Your Claim">
        <p>
          Ordinance or Law coverage can add 25 to 50 percent or more to the total value of a
          claim, particularly for older homes. The gap between the code your home was built to and
          the code it must be rebuilt to grows every year. Always check whether you have Ordinance
          or Law coverage — and how much. If you are underinsured in this area, talk to your agent
          about increasing your limits before a loss occurs.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Different Cities, Different Codes, Different Timelines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An important detail that many homeowners overlook is that different cities and counties
        adopt building codes at different times. California has a statewide building code that is
        updated on a regular cycle, but individual municipalities may adopt local amendments or
        enforce different versions at different times. The code requirements in Los Angeles may
        differ from those in Sacramento, and both may differ from unincorporated county areas. This
        means the increased cost of construction varies significantly based on where your home is
        located and when the local jurisdiction last updated its adopted code.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Historical Districts: More Than Building Codes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property is located in a designated historical district, the requirements for
        reconstruction or major repair may go far beyond standard building codes. Historical
        districts often impose appearance requirements — specific materials, architectural styles,
        window types, roofing materials, and exterior finishes. These are not technically
        &quot;building codes&quot; in the traditional sense, but they are ordinances and laws that
        regulate how your building must be constructed. Ordinance or Law coverage applies to these
        requirements as well, which is why calling it simply &quot;code upgrade coverage&quot;
        misses a significant part of its value.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Do You Have This Coverage?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners do not know whether their policy includes Ordinance or Law coverage, and if
        it does, what the limits are. Some policies include a basic amount built in, while others
        offer it as an endorsement with selectable limits. Check
        your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        for an Ordinance or Law line item, and review your endorsement list carefully. If you do
        not see it, contact your agent and ask specifically.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have recently suffered a loss and are navigating this coverage for the first time,
        a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help you identify and maximize every dollar available under your Ordinance or Law
        coverage. This is complex coverage, and it is frequently underutilized because neither the
        homeowner nor the insurer&rsquo;s adjuster fully understands the local requirements that
        apply to the property.
      </p>

      <CalloutBox variant="important" title="Future Resource">
        <p>
          We are developing a downloadable PDF guide that walks through Ordinance or Law coverage
          in detail, including examples, checklists, and tips for documenting code upgrade costs.
          Check back for updates.
        </p>
      </CalloutBox>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
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
