'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

interface SearchEntry {
  slug: string
  title: string
  description: string
}

interface SearchResult {
  slug: string
  title: string
  snippet: string
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [index, setIndex] = useState<any>(null)
  const [articles, setArticles] = useState<SearchEntry[]>([])

  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Load the search index and FlexSearch on mount
  useEffect(() => {
    let cancelled = false

    async function loadIndex() {
      try {
        // Dynamic import of flexsearch
        const FlexSearch = await import('flexsearch')

        // Fetch the pre-built search index
        const response = await fetch('/data/search-index.json')
        const data: SearchEntry[] = await response.json()

        if (cancelled) return

        // Create a FlexSearch index
        const searchIndex = new FlexSearch.Index({
          tokenize: 'forward',
          resolution: 9,
        })

        // Add each article to the index (combined title + description for search)
        data.forEach((entry, i) => {
          searchIndex.add(i, `${entry.title} ${entry.description}`)
        })

        setArticles(data)
        setIndex(searchIndex)
      } catch (err) {
        console.error('Failed to load search index:', err)
      }
    }

    loadIndex()
    return () => { cancelled = true }
  }, [])

  // Perform search with debounce
  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!index || !searchQuery.trim()) {
        setResults([])
        setIsOpen(false)
        return
      }

      const matchedIds: number[] = index.search(searchQuery, { limit: 10 })

      const searchResults: SearchResult[] = matchedIds.map((id: number) => {
        const article = articles[id]
        // Create a snippet from the description (first 120 chars)
        const snippet =
          article.description.length > 120
            ? article.description.slice(0, 120) + '...'
            : article.description
        return {
          slug: article.slug,
          title: article.title,
          snippet,
        }
      })

      setResults(searchResults)
      setIsOpen(searchResults.length > 0)
      setActiveIndex(-1)
    },
    [index, articles]
  )

  // Handle input change with 300ms debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    debounceTimer.current = setTimeout(() => {
      performSearch(value)
    }, 300)
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' && query.trim()) {
        // If user presses down arrow with text, trigger search immediately
        performSearch(query)
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case 'Enter':
        e.preventDefault()
        if (activeIndex >= 0 && activeIndex < results.length) {
          navigateToResult(results[activeIndex].slug)
        }
        break
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        setActiveIndex(-1)
        inputRef.current?.focus()
        break
    }
  }

  // Navigate to a result
  const navigateToResult = (slug: string) => {
    setIsOpen(false)
    setQuery('')
    setResults([])
    window.location.href = `/resources/${slug}`
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
        setActiveIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Scroll active result into view
  useEffect(() => {
    if (activeIndex >= 0 && resultsRef.current) {
      const activeEl = resultsRef.current.children[activeIndex] as HTMLElement
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [activeIndex])

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="article-search" className="sr-only">
          Search articles
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            id="article-search"
            type="search"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (results.length > 0) setIsOpen(true)
            }}
            placeholder="Search all articles..."
            aria-label="Search articles"
            aria-expanded={isOpen}
            aria-controls="search-results"
            aria-activedescendant={
              activeIndex >= 0 ? `search-result-${activeIndex}` : undefined
            }
            autoComplete="off"
            className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1F3964] focus:ring-2 focus:ring-[#1F3964]/20 transition-all text-base"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setResults([])
                setIsOpen(false)
                inputRef.current?.focus()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-700 rounded p-0.5"
              aria-label="Clear search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </form>

      {/* Results dropdown */}
      <div
        id="search-results"
        role="region"
        aria-live="polite"
        aria-label="Search results"
      >
        {isOpen && results.length > 0 && (
          <ul
            ref={resultsRef}
            role="listbox"
            aria-label="Search results"
            className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-96 overflow-y-auto"
          >
            {results.map((result, i) => (
              <li
                key={result.slug}
                id={`search-result-${i}`}
                role="option"
                aria-selected={i === activeIndex}
                className={`border-b border-gray-100 last:border-b-0 ${
                  i === activeIndex
                    ? 'bg-[#EFF4FB]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Link
                  href={`/resources/${result.slug}`}
                  onClick={() => {
                    setIsOpen(false)
                    setQuery('')
                  }}
                  className={`block px-5 py-3.5 no-underline focus:outline-none focus:bg-[#EFF4FB] ${
                    i === activeIndex
                      ? 'ring-2 ring-inset ring-[#1F3964]/30'
                      : ''
                  }`}
                  tabIndex={-1}
                >
                  <p className="font-semibold text-[#1F3964] text-sm leading-tight mb-1">
                    {result.title}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {result.snippet}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {isOpen && results.length === 0 && query.trim() && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg px-5 py-4">
            <p className="text-gray-500 text-sm">
              No articles found for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isOpen && results.length > 0
          ? `${results.length} result${results.length !== 1 ? 's' : ''} found. Use arrow keys to navigate.`
          : ''}
      </div>
    </div>
  )
}
