import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Labor Depreciation: Why Your Insurance Company Can\'t Depreciate Work Costs',
  description:
    'A growing number of states have ruled that insurance companies cannot depreciate labor. Learn what labor depreciation is, which states prohibit it, and how to fight it.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Of all the ways insurance companies shortchange claim payouts, depreciating labor may
        be the most indefensible. The concept is simple: you cannot buy &quot;used labor.&quot;
        A roofer charges the same rate whether they&apos;re installing shingles on a new home
        or replacing 20-year-old shingles on yours. There is no &quot;depreciated&quot; version
        of a plumber&apos;s hourly rate.
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

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Legal Landscape</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A growing number of state courts have ruled that depreciating labor is improper.
        Notable decisions have come from:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Arkansas</strong> &mdash; <em>Shelter Mut. Ins. Co. v. Goodner</em></li>
        <li><strong>Georgia</strong> &mdash; multiple rulings</li>
        <li><strong>Kentucky</strong> &mdash; <em>Hicks v. State Farm</em></li>
        <li><strong>Oklahoma</strong> &mdash; <em>Redlin v. Grinnell Mut.</em></li>
        <li><strong>Illinois, Hawaii, and others</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the regulations require that depreciation be based on the &quot;condition&quot;
        of the damaged property. Labor doesn&apos;t have a &quot;condition&quot; &mdash; it&apos;s
        a service, not a physical object that wears out. This creates a strong argument against
        labor depreciation in California, though the issue hasn&apos;t been definitively resolved
        by the state&apos;s highest court.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Challenge Labor Depreciation</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Ask the carrier for an itemized depreciation schedule that separates materials
          from labor.
        </li>
        <li>
          If they applied a blanket percentage, demand they recalculate with labor excluded
          from depreciation.
        </li>
        <li>
          Research your state&apos;s case law on labor depreciation &mdash; this is an
          evolving area.
        </li>
        <li>
          Put your challenge in writing, citing the relevant case law or regulatory language.
        </li>
        <li>
          If the carrier refuses, consider{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            invoking appraisal
          </Link>{' '}
          or consulting an attorney.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Do the Math">
        <p>
          On a $30,000 repair estimate where labor represents 40% of the cost ($12,000),
          applying 25% depreciation to labor improperly reduces your ACV payment by $3,000.
          On larger claims, improper labor depreciation can cost you $10,000 or more.
          It&apos;s worth fighting.
        </p>
      </CalloutBox>

    </>
  )
}
