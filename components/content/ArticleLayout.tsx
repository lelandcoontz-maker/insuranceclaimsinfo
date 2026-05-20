import Link from 'next/link'
import { Breadcrumbs } from './Breadcrumbs'
import { KeyTakeaway } from './KeyTakeaway'
import { ScrollCta } from './ScrollCta'
import { AuthorByline } from './AuthorByline'

interface TocItem {
  id: string
  label: string
}

interface BreadcrumbItem {
  label: string
  href?: string
}

export type CtaVariant = 'general' | 'denied' | 'wildfire' | 'commercial' | 'appraisal' | 'legal' | 'damage'

const CTA_CONTENT: Record<CtaVariant, { heading: string; body: string; button: string }> = {
  general: {
    heading: 'Need Help With Your Claim?',
    body: 'A licensed Public Adjuster can review your file and represent you in negotiations — at no upfront cost.',
    button: 'Request a Free Claim Review →',
  },
  denied: {
    heading: 'Has Your Claim Been Denied or Underpaid?',
    body: 'A licensed Public Adjuster can evaluate your denial, build a counter-argument, and negotiate on your behalf — you pay nothing unless we recover more.',
    button: 'Get a Free Denial Review →',
  },
  wildfire: {
    heading: 'Dealing With a Fire or Wildfire Claim?',
    body: 'Fire claims are complex and time-sensitive. A licensed Public Adjuster handles everything — documentation, negotiation, and settlement — so you can focus on your family.',
    button: 'Get Free Wildfire Claim Help →',
  },
  commercial: {
    heading: 'Need Help With a Commercial Claim?',
    body: 'Business interruption, commercial property, and specialty claims require experienced representation. We handle complex commercial losses nationwide.',
    button: 'Request a Commercial Claim Review →',
  },
  appraisal: {
    heading: 'Need an Experienced Appraiser?',
    body: 'Leland Coontz III has served as appraiser and umpire on hundreds of disputes. If your claim is stuck, appraisal may be the fastest path to a fair settlement.',
    button: 'Discuss Your Appraisal Options →',
  },
  legal: {
    heading: 'Think Your Insurer Acted in Bad Faith?',
    body: 'If your carrier violated California regulations or acted unreasonably, you may have legal remedies. We can evaluate your situation and refer you to a qualified attorney if needed.',
    button: 'Get a Free Claim Evaluation →',
  },
  damage: {
    heading: 'Have Property Damage You Need Documented?',
    body: 'Proper documentation is the foundation of every successful claim. A Public Adjuster can inspect the damage, prepare a professional scope of loss, and negotiate for what you are actually owed.',
    button: 'Schedule a Free Inspection →',
  },
}

interface ArticleLayoutProps {
  title: string
  description?: string
  summary?: string
  backLink?: { href: string; label: string }
  breadcrumbs?: BreadcrumbItem[]
  ctaVariant?: CtaVariant
  toc?: TocItem[]
  afterContent?: React.ReactNode
  publishedDate?: string
  modifiedDate?: string
  children: React.ReactNode
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function ArticleLayout({ title, description, summary, backLink, breadcrumbs, ctaVariant = 'general', toc, afterContent, publishedDate, modifiedDate, children }: ArticleLayoutProps) {
  const cta = CTA_CONTENT[ctaVariant]
  const showModified = modifiedDate && publishedDate && modifiedDate !== publishedDate

  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : backLink ? (
            <Link href={backLink.href} className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
              ← {backLink.label}
            </Link>
          ) : null}
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          {description && (
            <p className="text-blue-200 max-w-2xl leading-relaxed">{description}</p>
          )}
          {publishedDate && (
            <p className="text-blue-300 text-sm mt-3">
              By <Link href="/about" className="text-blue-200 hover:text-white underline">Leland Coontz III</Link>, Licensed Public Adjuster
              {' · '}{formatDate(publishedDate)}
              {showModified && <span className="text-blue-400"> · Updated {formatDate(modifiedDate)}</span>}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {toc && toc.length > 0 ? (
          <div className="flex gap-10">
            {/* Sidebar TOC — desktop only */}
            <nav aria-label="On this page" className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">On This Page</p>
                <ul className="space-y-1 border-l border-gray-200 pl-3">
                  {toc.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-gray-600 hover:text-[#1F3964] transition-colors block py-1 focus:text-[#1F3964] focus:outline-none focus:ring-2 focus:ring-[#1F3964] focus:ring-offset-1 rounded"
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
              {summary && <KeyTakeaway>{summary}</KeyTakeaway>}
              {children}
            </div>
          </div>
        ) : (
          <div className="prose-content">
            {summary && <KeyTakeaway>{summary}</KeyTakeaway>}
            {children}
          </div>
        )}
        {afterContent}
        <AuthorByline />
      </div>

      <ScrollCta />

      {/* Bottom CTA */}
      <div className="bg-[#EFF4FB] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">{cta.heading}</h2>
          <p className="text-gray-600 mb-6">{cta.body}</p>
          <Link href="/contact" className="btn-gold">
            {cta.button}
          </Link>
        </div>
      </div>
    </>
  )
}
