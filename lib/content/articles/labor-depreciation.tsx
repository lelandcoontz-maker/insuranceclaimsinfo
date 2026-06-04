import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Labor Depreciation: Why Your Insurance Company Can\'t Depreciate Work Costs',
  description:
    'In California, labor depreciation is prohibited by both statute (Cal. Ins. Code §2051(b)(2)) and regulation (10 CCR §2695.9(f)(1)). Learn what labor depreciation is, the California prohibition, and how to challenge it on your claim.',
  summary:
    'California prohibits labor depreciation by statute and by regulation. Cal. Ins. Code §2051(b)(2) (added by AB 188, eff. 1/1/2019) and 10 CCR §2695.9(f)(1) both bar carriers from depreciating the labor portion of a repair or replacement estimate. Challenge it on every claim where it appears.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California labor depreciation rules by a
          Licensed California Public Adjuster. It is not legal advice. California&rsquo;s ACV
          framework is statutory (Cal. Ins. Code &sect; 2051(b)) and regulatory (10 CCR
          &sect; 2695.9(f)). For legal questions, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Of all the ways insurance companies shortchange claim payouts, depreciating labor may
        be the most indefensible. The concept is simple: you cannot buy &quot;used labor.&quot;
        A roofer charges the same rate whether they are installing shingles on a new home
        or replacing 20-year-old shingles on yours. There is no &quot;depreciated&quot; version
        of a plumber&apos;s hourly rate. And in California, labor depreciation is not just a
        bad practice &mdash; it is expressly prohibited by both statute and regulation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Is Labor Depreciation?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company calculates your{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          actual cash value (ACV)
        </Link>{' '}
        payment, they subtract depreciation from the replacement cost. Properly done, depreciation
        should only apply to materials that have actually lost value due to age and wear. A
        20-year-old asphalt shingle has less useful life remaining than a new one &mdash; that
        depreciation makes sense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But many carriers apply depreciation to the labor portion of the estimate as well. They
        calculate a blanket percentage &mdash; say 25% or 40% &mdash; and apply it to the
        entire estimate, including all labor costs. This can represent thousands of dollars
        on a typical claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">California: Prohibited by Statute and Regulation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has resolved the labor depreciation question through both statute and
        regulation, and the two provisions point in the same direction.
      </p>

      <CalloutBox variant="legal" title="Cal. Ins. Code § 2051(b)(2) (added by AB 188, eff. Jan. 1, 2019)">
        <p className="italic">
          &ldquo;The deduction for physical depreciation shall not include any labor costs that
          would be incurred to repair, rebuild, or replace the damaged or destroyed property.&rdquo;
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="10 CCR § 2695.9(f)(1)">
        <p className="italic">
          &ldquo;Except for the intrinsic labor costs that are included in the cost of manufactured
          materials or goods, the expense of labor necessary to repair, rebuild or replace covered
          property is not a component of physical depreciation and shall not be subject to
          depreciation or betterment.&rdquo;
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read together, these two provisions establish a clear rule for California first-party
        property claims: the carrier may not depreciate the labor portion of a repair or
        replacement estimate. The only narrow exception is for &ldquo;intrinsic labor&rdquo; that
        is already embedded in the cost of a manufactured material &mdash; for example, the
        factory labor that went into producing a shingle or window unit is part of the material
        itself. The labor an insured will pay a contractor to install or replace the damaged
        component is not subject to depreciation, period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear statutory and regulatory text, some carriers and their estimating
        software still apply depreciation to combined material-plus-labor line items, which has
        the practical effect of depreciating labor. Where that happens, the carrier is in
        violation of both &sect; 2051(b)(2) and &sect; 2695.9(f)(1), and the insured has a
        direct statutory and regulatory citation for the challenge.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Out-of-State Context</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Outside California, a growing number of state courts and regulators have reached the
        same conclusion through different routes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Arkansas</strong> &mdash; <em>Shelter Mut. Ins. Co. v. Goodner</em></li>
        <li><strong>Georgia</strong> &mdash; multiple rulings</li>
        <li><strong>Kentucky</strong> &mdash; <em>Hicks v. State Farm</em></li>
        <li><strong>Oklahoma</strong> &mdash; <em>Redlin v. Grinnell Mut.</em></li>
        <li><strong>Illinois, Hawaii, and others</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s express statutory and regulatory prohibition is among the cleanest
        positions in the country. In states where the law is less clear, the underlying logic is
        the same: labor is a service, not a physical object, and it has no &ldquo;condition&rdquo;
        that degrades with age.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Challenge Labor Depreciation (California)</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Request the carrier&apos;s estimate with materials and labor itemized separately on
          each line. If the estimate uses a combined line-item rate without a labor breakout,
          request the breakout in writing.
        </li>
        <li>
          If the carrier applied a blanket depreciation percentage to combined line items,
          request a recalculation that excludes labor from the depreciation base &mdash; citing
          Cal. Ins. Code &sect; 2051(b)(2) and 10 CCR &sect; 2695.9(f)(1) directly.
        </li>
        <li>
          Document the labor-cost portion that the carrier improperly depreciated. The dollar
          impact is the labor portion multiplied by the depreciation percentage applied &mdash;
          and that dollar figure is what the insured is being underpaid.
        </li>
        <li>
          Put the challenge in writing, with the verbatim statutory and regulatory text quoted.
          A written record matters because a documented violation may support escalation,
          a complaint to the California Department of Insurance, or an attorney&apos;s later
          bad-faith evaluation.
        </li>
        <li>
          If the carrier refuses, consider{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            invoking appraisal
          </Link>{' '}
          or consulting a Public Adjuster for claim negotiation and documentation, or an
          attorney for legal advice.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Do the Math">
        <p>
          On a $30,000 repair estimate where labor represents 40% of the cost ($12,000),
          applying 25% depreciation to labor improperly reduces your ACV payment by $3,000.
          On larger claims, improper labor depreciation can cost you $10,000 or more.
          It is worth fighting.
        </p>
      </CalloutBox>
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
