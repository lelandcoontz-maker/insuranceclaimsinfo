import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Write an Effective Insurance Claim Letter',
  description:
    'Your written communications with the insurance company become the record of your claim. Learn how to write letters that protect your rights and move your claim forward.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Written communication is the backbone of any insurance claim. Phone calls are easily
        denied or misremembered. Emails and letters create a permanent record. Every important
        communication with your insurance company should be in writing or followed up in writing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Types of Letters You May Need</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Initial claim notification</strong> &mdash; reporting the loss in writing</li>
        <li><strong>Follow-up confirmation</strong> &mdash; &quot;Per our phone call today...&quot;</li>
        <li><strong>Supplement request</strong> &mdash; documenting additional damage found</li>
        <li><strong>Demand for payment</strong> &mdash; when the carrier has agreed but has not paid</li>
        <li><strong>Regulatory deadline reminder</strong> &mdash; citing specific timeframes</li>
        <li><strong>Response to denial</strong> &mdash; challenging a coverage or amount determination</li>
        <li><strong>Appraisal demand</strong> &mdash; invoking the appraisal clause</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Key Principles</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Be specific.</strong> Reference claim numbers, dates, adjuster names, and
          specific dollar amounts.
        </li>
        <li>
          <strong>Be factual.</strong> State what happened, what was said, and what the
          regulation requires. Avoid emotional language.
        </li>
        <li>
          <strong>Cite authority.</strong> Reference specific policy provisions, state
          regulations, or case law when applicable.
        </li>
        <li>
          <strong>Request specific action.</strong> Do not just complain &mdash; state
          exactly what you want the carrier to do and by when.
        </li>
        <li>
          <strong>Send via traceable method.</strong> Email with read receipt, certified mail,
          or both.
        </li>
      </ol>

      <CalloutBox variant="tip" title="The Paper Trail Is Everything">
        <p>
          If your claim eventually goes to{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>{' '}
          or litigation, the paper trail you built becomes your evidence. Every letter
          documenting a missed deadline, every email confirming what the adjuster said, every
          written request that went unanswered &mdash; these build the case for{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>{' '}
          if it comes to that. Write as if a judge will read it someday.
        </p>
      </CalloutBox>

    </>
  )
}
