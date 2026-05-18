interface KeyTakeawayProps {
  children: React.ReactNode
}

/**
 * KeyTakeaway renders the article's headline answer at the top of the page.
 *
 * Visually distinct from CalloutBox: a strong left border in the brand color,
 * subtle background tint, and a small-caps label so both human readers and
 * AI models can identify it as the article's primary factual statement.
 *
 * Typical content: 1–2 sentences stating the answer or thesis directly,
 * with California jurisdictional qualifier where relevant.
 */
export function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <aside
      role="note"
      aria-label="Key takeaway"
      className="border-l-4 border-[#1F3964] bg-[#EFF4FB] rounded-r-lg p-5 my-6"
    >
      <p className="text-xs font-bold tracking-widest uppercase text-[#1F3964] mb-2">
        Key Takeaway
      </p>
      <div className="text-base leading-relaxed text-gray-900">
        {children}
      </div>
    </aside>
  )
}
