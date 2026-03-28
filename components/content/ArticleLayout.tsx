import Link from 'next/link'

interface TocItem {
  id: string
  label: string
}

interface ArticleLayoutProps {
  title: string
  description?: string
  backLink?: { href: string; label: string }
  toc?: TocItem[]
  children: React.ReactNode
}

export function ArticleLayout({ title, description, backLink, toc, children }: ArticleLayoutProps) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {backLink && (
            <Link href={backLink.href} className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
              ← {backLink.label}
            </Link>
          )}
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          {description && (
            <p className="text-blue-200 max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {toc && toc.length > 0 ? (
          <div className="flex gap-10">
            {/* Sidebar TOC — desktop only */}
            <nav className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">On This Page</p>
                <ul className="space-y-1.5 border-l border-gray-200 pl-3">
                  {toc.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-gray-500 hover:text-[#1F3964] transition-colors block py-0.5"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Main content */}
            <div className="flex-1 min-w-0 prose-content">
              {children}
            </div>
          </div>
        ) : (
          <div className="prose-content">
            {children}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#EFF4FB] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">Need Help With Your Claim?</h2>
          <p className="text-gray-600 mb-6">
            If your insurer is giving you trouble, a licensed Public Adjuster can review your
            file and represent you in negotiations — at no upfront cost.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
