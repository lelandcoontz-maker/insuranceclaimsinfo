'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RESOURCE_DROPDOWN_GROUPS } from '@/lib/content/navigation'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileResourcesOpen(false)
    setResourcesOpen(false)
  }, [pathname])

  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setResourcesOpen(false)
      ;(e.currentTarget as HTMLElement).querySelector('button')?.focus()
    }
  }, [])

  const handleDropdownButtonKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setResourcesOpen(true)
      setTimeout(() => {
        const firstLink = dropdownRef.current?.querySelector('a') as HTMLElement | null
        firstLink?.focus()
      }, 50)
    }
  }, [])

  const isResourcePage =
    pathname.startsWith('/resources') ||
    pathname.startsWith('/regulations') ||
    pathname.startsWith('/faq') ||
    pathname.startsWith('/types-of-claims') ||
    pathname.startsWith('/cdi-notices') ||
    pathname.startsWith('/letters')

  return (
    <header className="bg-[#1F3964] text-white sticky top-0 z-50 shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex flex-col leading-tight focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3964] rounded" aria-label="InsuranceClaimsInfo.com - Home">
            <span className="font-bold text-lg tracking-tight">InsuranceClaimsInfo</span>
            <span className="text-xs text-blue-200" aria-hidden="true">.com</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <Link
              href="/inventory"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3964] ${
                pathname === '/inventory'
                  ? 'bg-white/20 text-white'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              Inventory Tool
            </Link>

            <div ref={dropdownRef} className="relative" onKeyDown={handleDropdownKeyDown}>
              <button
                onClick={() => setResourcesOpen(o => !o)}
                onMouseEnter={() => setResourcesOpen(true)}
                onKeyDown={handleDropdownButtonKeyDown}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                aria-controls="resources-dropdown"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3964] ${
                  isResourcePage
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Resources
                <svg className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesOpen && (
                <div
                  id="resources-dropdown"
                  role="menu"
                  className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-200 p-5 z-50"
                  style={{ width: '680px', right: '-200px' }}
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {RESOURCE_DROPDOWN_GROUPS.map(group => (
                      <div key={group.heading} role="group" aria-label={group.heading}>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                          {group.heading}
                        </p>
                        <ul className="space-y-1">
                          {group.links.map(link => (
                            <li key={link.href} role="none">
                              <Link
                                href={link.href}
                                role="menuitem"
                                className="block text-sm text-gray-700 hover:text-[#1F3964] hover:bg-[#EFF4FB] px-2 py-1.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3964] focus:bg-[#EFF4FB]"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-4 pt-3">
                    <Link
                      href="/resources"
                      role="menuitem"
                      className="text-sm text-[#2E74B5] hover:text-[#1F3964] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F3964] rounded"
                    >
                      View All Resources
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3964] ${
                pathname === '/about'
                  ? 'bg-white/20 text-white'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3964] ${
                pathname === '/contact'
                  ? 'bg-white/20 text-white'
                  : 'bg-[#C9A84C] hover:bg-[#A8872E] text-white'
              }`}
            >
              Free Claim Review
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3964]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <nav id="mobile-nav" className="md:hidden pb-4 border-t border-white/20 pt-2 space-y-1" aria-label="Mobile navigation">
            <Link href="/inventory" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
              Inventory Tool
            </Link>

            <button
              onClick={() => setMobileResourcesOpen(o => !o)}
              aria-expanded={mobileResourcesOpen}
              aria-controls="mobile-resources"
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Resources
              <svg className={`w-3.5 h-3.5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileResourcesOpen && (
              <div id="mobile-resources" className="pl-4 space-y-1">
                {RESOURCE_DROPDOWN_GROUPS.map(group => (
                  <div key={group.heading} className="py-1">
                    <p className="text-xs text-blue-300 font-semibold uppercase tracking-wider px-4 py-1">
                      {group.heading}
                    </p>
                    {group.links.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-1.5 text-sm text-blue-100 hover:text-white hover:bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/resources"
                  className="block px-4 py-2 text-sm text-gold-text font-medium focus:outline-none focus:ring-2 focus:ring-[#C9A84C] rounded"
                >
                  View All Resources
                </Link>
              </div>
            )}

            <Link href="/about" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2.5 rounded-lg text-sm font-medium bg-[#C9A84C] text-white focus:outline-none focus:ring-2 focus:ring-white">
              Free Claim Review
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
