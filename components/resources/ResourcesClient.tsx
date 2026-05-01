'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import type { Category } from '@/lib/content/categories'
import { slugForCategory } from '@/lib/content/categories'

interface Props {
  categories: Category[]
}

export function ResourcesClient({ categories }: Props) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>(
    slugForCategory(categories[0]?.label ?? '')
  )
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const allTags = Array.from(
    new Set(categories.flatMap(c => c.articles.map(a => a.tag)))
  ).sort()

  const isFiltering = !!(search || activeTag)

  const filteredCategories = categories
    .map(cat => ({
      ...cat,
      articles: cat.articles.filter(article => {
        const q = search.toLowerCase()
        const matchesSearch =
          !search ||
          article.title.toLowerCase().includes(q) ||
          article.desc.toLowerCase().includes(q)
        const matchesTag = !activeTag || article.tag === activeTag
        return matchesSearch && matchesTag
      }),
    }))
    .filter(cat => cat.articles.length > 0)

  const totalResults = filteredCategories.reduce(
    (sum, c) => sum + c.articles.length,
    0
  )

  const setSectionRef = useCallback(
    (label: string) => (el: HTMLElement | null) => {
      sectionRefs.current[slugForCategory(label)] = el
    },
    []
  )

  useEffect(() => {
    if (isFiltering) return

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60%' }
    )

    for (const ref of Object.values(sectionRefs.current)) {
      if (ref) observer.observe(ref)
    }

    return () => observer.disconnect()
  }, [isFiltering, filteredCategories.length])

  function scrollToSection(slug: string) {
    const el = sectionRefs.current[slug]
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Search + tag filters */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-2">
        <div className="relative mb-4">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3964] focus:border-transparent text-gray-900"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Tag filter buttons */}
        <div className="flex flex-wrap gap-2 mb-2">
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs px-3 py-1.5 rounded-full border-2 border-[#1F3964] bg-[#1F3964] text-white font-semibold"
            >
              Clear filter &times;
            </button>
          )}
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeTag === tag
                  ? 'border-[#1F3964] bg-[#1F3964] text-white font-semibold'
                  : 'border-gray-200 text-gray-600 hover:border-[#1F3964] hover:text-[#1F3964]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {isFiltering && (
          <p className="text-sm text-gray-500 mt-2">
            {totalResults} article{totalResults !== 1 ? 's' : ''} found
            {activeTag && <> tagged &ldquo;{activeTag}&rdquo;</>}
            {search && <> matching &ldquo;{search}&rdquo;</>}
          </p>
        )}
      </div>

      {/* Main content area with sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Sticky sidebar — desktop only */}
          {!isFiltering && (
            <nav
              aria-label="Category navigation"
              className="hidden lg:block w-52 flex-shrink-0"
            >
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Categories
                </p>
                <ul className="space-y-1 border-l-2 border-gray-200">
                  {categories.map(cat => {
                    const slug = slugForCategory(cat.label)
                    const isActive = activeSection === slug
                    return (
                      <li key={slug}>
                        <button
                          onClick={() => scrollToSection(slug)}
                          className={`block w-full text-left text-sm py-1.5 pl-4 -ml-px border-l-2 transition-colors ${
                            isActive
                              ? 'border-[#1F3964] text-[#1F3964] font-semibold'
                              : 'border-transparent text-gray-500 hover:text-[#1F3964] hover:border-gray-400'
                          }`}
                        >
                          {cat.label}
                          <span className="text-gray-400 text-xs ml-1">
                            ({cat.articles.length})
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </nav>
          )}

          {/* Mobile category bar */}
          {!isFiltering && (
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 overflow-x-auto">
              <div className="flex gap-1 px-3 py-2">
                {categories.map(cat => {
                  const slug = slugForCategory(cat.label)
                  const isActive = activeSection === slug
                  return (
                    <button
                      key={slug}
                      onClick={() => scrollToSection(slug)}
                      className={`whitespace-nowrap text-xs px-3 py-1.5 rounded-full border transition-colors flex-shrink-0 ${
                        isActive
                          ? 'border-[#1F3964] bg-[#1F3964] text-white'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Article grid */}
          <div className="flex-1 min-w-0 space-y-12">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No articles match your search.</p>
                <button
                  onClick={() => {
                    setSearch('')
                    setActiveTag(null)
                  }}
                  className="mt-4 text-[#2E74B5] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredCategories.map(cat => (
                <section
                  key={cat.label}
                  id={slugForCategory(cat.label)}
                  ref={setSectionRef(cat.label)}
                >
                  <h2 className={`text-xl font-bold mb-5 ${cat.headingColor}`}>
                    {cat.label}
                    <span className="text-sm font-normal text-gray-400 ml-2">
                      {cat.articles.length} guide{cat.articles.length !== 1 ? 's' : ''}
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.articles.map(article => (
                      <Link
                        key={article.href}
                        href={article.href}
                        aria-label={`Read ${article.title}`}
                        className={`block rounded-xl border p-5 hover:shadow-md transition-shadow ${cat.color}`}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span
                            className="text-2xl flex-shrink-0"
                            aria-hidden="true"
                          >
                            {article.icon}
                          </span>
                          <div>
                            <span
                              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${article.tagColor}`}
                            >
                              {article.tag}
                            </span>
                            <h3 className="font-bold text-gray-900 mt-1 leading-tight">
                              {article.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {article.desc}
                        </p>
                        <p
                          className="text-[#2E74B5] text-sm font-medium mt-3"
                          aria-hidden="true"
                        >
                          Read guide &rarr;
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}
