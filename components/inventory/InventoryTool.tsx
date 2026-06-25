'use client'

/**
 * InventoryTool — main client component for the personal property inventory.
 *
 * Architecture notes for future phases:
 *   • Item data is passed as props from a server component (swap data source without touching this component)
 *   • useInventory() is the single source of truth for state (swap storage without touching rendering)
 *   • LeadGateModal is isolated — swap for a different gate (SMS, account, etc.) without changes here
 *   • exportToExcel() lives in a utility — swap for PDF, Google Sheets, etc. independently
 *
 * Future features to add here:
 *   • Phase 2: PhotoSwipeView — show item image, user swipes left/right (Tinder-style)
 *   • Phase 3: AIInterviewPanel — chat interface that adds items to inventory via conversation
 *   • Phase 4: Persistent state — save/load via user account API
 */

import { useState, useMemo, useCallback } from 'react'
import type { ContentRoom, ItemDetail } from '@/lib/types'
import { useInventory } from '@/lib/hooks/useInventory'
import { LeadGateModal } from './LeadGateModal'
import { exportToExcel } from '@/lib/utils/excel-export'
import { trackEvent } from '@/lib/analytics'

interface Props {
  rooms: ContentRoom[]
}

// ─── Sub-components ──────────────────────────────────────────────────────────

interface ItemRowProps {
  id: string
  name: string
  context?: string
  isChecked: boolean
  detail: ItemDetail | undefined
  onToggle: (id: string) => void
  onDetail: (id: string, field: keyof ItemDetail, val: string) => void
}

function ItemRow({ id, name, context, isChecked, detail, onToggle, onDetail }: ItemRowProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${isChecked ? 'bg-blue-50/60' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggle(id)}
        className="w-4 h-4 flex-shrink-0 accent-[#1F3964] cursor-pointer"
        aria-label={name}
      />
      <span className={`flex-1 text-sm leading-tight ${isChecked ? 'font-medium text-[#1F3964]' : 'text-gray-700'}`}>
        {name}
        {context && <span className="ml-1.5 text-xs text-gray-500">({context})</span>}
      </span>
      {isChecked && (
        <div className="flex items-center gap-2 flex-shrink-0">
          <input
            type="number"
            placeholder="Qty"
            value={detail?.qty ?? '1'}
            onChange={e => onDetail(id, 'qty', e.target.value)}
            min="1"
            className="w-14 text-xs border border-gray-200 rounded px-1.5 py-1 text-center focus:outline-none focus:ring-1 focus:ring-[#1F3964]"
            aria-label="Quantity"
          />
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">$</span>
            <input
              type="number"
              placeholder="Value"
              value={detail?.value ?? ''}
              onChange={e => onDetail(id, 'value', e.target.value)}
              min="0"
              className="w-24 text-xs border border-gray-200 rounded pl-5 pr-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#1F3964]"
              aria-label="Estimated value"
            />
          </div>
        </div>
      )}
    </div>
  )
}

interface CategorySectionProps {
  categoryId: string
  name: string
  items: ContentRoom['categories'][0]['items']
  state: ReturnType<typeof useInventory>['state']
  onToggle: (id: string) => void
  onDetail: (id: string, field: keyof ItemDetail, val: string) => void
  onCheckAll: (ids: string[]) => void
  onUncheckAll: (ids: string[]) => void
}

function CategorySection({ categoryId, name, items, state, onToggle, onDetail, onCheckAll, onUncheckAll }: CategorySectionProps) {
  const [expanded, setExpanded] = useState(true)
  const ids = items.map(i => i.id)
  const checkedCount = ids.filter(id => state.checked.has(id)).length
  const panelId = `cat-panel-${categoryId}`

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Category header */}
      <div className="flex items-center bg-[#EFF4FB] px-4 py-3">
        <button
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="flex-1 flex items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-[#1F3964] rounded"
        >
          <span className="font-semibold text-[#1F3964] text-sm">{name}</span>
          <span className="text-xs text-gray-500">({items.length} items)</span>
        </button>
        <div className="flex items-center gap-2">
          {checkedCount > 0 && (
            <span className="text-xs bg-[#1F3964] text-white px-2 py-0.5 rounded-full">
              {checkedCount} checked
            </span>
          )}
          {/* Check/uncheck all */}
          <button
            onClick={() => checkedCount === items.length ? onUncheckAll(ids) : onCheckAll(ids)}
            className="text-xs text-[#2E74B5] hover:underline px-2 py-0.5 hidden sm:block focus:outline-none focus:ring-2 focus:ring-[#2E74B5] rounded"
          >
            {checkedCount === items.length ? 'Uncheck all' : 'Check all'}
          </button>
          <button
            onClick={() => setExpanded(e => !e)}
            className="text-gray-500 w-5 text-center focus:outline-none focus:ring-2 focus:ring-[#1F3964] rounded"
            aria-label={expanded ? `Collapse ${name}` : `Expand ${name}`}
            aria-expanded={expanded}
          >
            <span aria-hidden="true">{expanded ? '▲' : '▼'}</span>
          </button>
        </div>
      </div>
      {/* Items */}
      {expanded && (
        <div id={panelId} role="region" aria-label={name} className="divide-y divide-gray-100">
          {items.map(item => (
            <ItemRow
              key={item.id}
              id={item.id}
              name={item.name}
              isChecked={state.checked.has(item.id)}
              detail={state.details[item.id]}
              onToggle={onToggle}
              onDetail={onDetail}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function InventoryTool({ rooms }: Props) {
  const { state, toggleItem, setDetail, checkAll, uncheckAll, totalChecked, totalValue } = useInventory()
  const [activeRoomId, setActiveRoomId]   = useState<string>(rooms[0]?.id ?? '')
  const [searchQuery,  setSearchQuery]    = useState('')
  const [showLeadGate, setShowLeadGate]   = useState(false)
  const [leadCaptured, setLeadCaptured]   = useState<{ name: string; email: string } | null>(null)

  const activeRoom = rooms.find(r => r.id === activeRoomId)

  // Search across all rooms
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return null
    const results: Array<{ roomName: string; catName: string; item: { id: string; name: string } }> = []
    for (const room of rooms) {
      for (const cat of room.categories) {
        for (const item of cat.items) {
          if (item.name.toLowerCase().includes(q)) {
            results.push({ roomName: room.name, catName: cat.name, item })
          }
        }
      }
    }
    return results
  }, [searchQuery, rooms])

  // Room checked count
  const roomCheckedCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const room of rooms) {
      counts[room.id] = room.categories.flatMap(c => c.items).filter(i => state.checked.has(i.id)).length
    }
    return counts
  }, [rooms, state.checked])

  const handleDownload = useCallback(() => {
    if (leadCaptured) {
      exportToExcel(rooms, state, leadCaptured.name)
      trackEvent('inventory_download', {
        checked_items: totalChecked,
        estimated_value: totalValue,
        returning_lead: true,
      })
    } else {
      setShowLeadGate(true)
    }
  }, [leadCaptured, rooms, state, totalChecked, totalValue])

  const handleLeadSubmit = useCallback(async (firstName: string, email: string, wantsReview: boolean) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email,
          wantsReview,
          source: 'inventory-tool',
          checkedCount: totalChecked,
          estimatedTotal: totalValue,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch {
      // Non-blocking — still download even if API fails
    }
    setLeadCaptured({ name: firstName, email })
    setShowLeadGate(false)
    exportToExcel(rooms, state, firstName)
    trackEvent('generate_lead', {
      source: 'inventory-tool',
      wants_review: wantsReview,
      checked_items: totalChecked,
      estimated_value: totalValue,
    })
    trackEvent('inventory_download', {
      checked_items: totalChecked,
      estimated_value: totalValue,
      returning_lead: false,
    })
  }, [rooms, state, totalChecked, totalValue])

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Sticky toolbar ────────────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">

          {/* Search */}
          <div className="relative flex-1 min-w-48 max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden="true">🔍</span>
            <label htmlFor="inventory-search" className="sr-only">Search all items</label>
            <input
              id="inventory-search"
              type="search"
              placeholder="Search all items..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
            />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-sm text-gray-600 flex-shrink-0">
            <span>
              <strong className="text-[#1F3964]">{totalChecked.toLocaleString()}</strong>{' '}
              <span className="text-gray-500">/ {rooms.reduce((n, r) => n + r.categories.reduce((m, c) => m + c.items.length, 0), 0).toLocaleString()} items</span>
            </span>
            {totalValue > 0 && (
              <span className="text-green-700 font-semibold">
                ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} est.
              </span>
            )}
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={totalChecked === 0}
            className="ml-auto flex-shrink-0 bg-[#C9A84C] hover:bg-[#A8872E] disabled:opacity-40 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C]"
          >
            <span aria-hidden="true">📥</span> Download Excel
          </button>
        </div>
      </div>

      {/* ── Main layout ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">

        {/* Sidebar: room navigation */}
        <aside className="w-52 flex-shrink-0 hidden lg:block">
          <div className="sticky top-32">
            <p id="rooms-heading" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Rooms</p>
            <nav aria-labelledby="rooms-heading" className="space-y-0.5">
              {rooms.map(room => {
                const n = roomCheckedCounts[room.id] ?? 0
                const active = room.id === activeRoomId && !searchQuery
                return (
                  <button
                    key={room.id}
                    onClick={() => { setActiveRoomId(room.id); setSearchQuery('') }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3964] ${
                      active ? 'bg-[#1F3964] text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="truncate">{room.emoji} {room.name}</span>
                    {n > 0 && (
                      <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                        active ? 'bg-white/20 text-white' : 'bg-[#EFF4FB] text-[#1F3964]'
                      }`}>
                        {n}
                      </span>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Mobile: horizontal room scroll */}
        <div className="lg:hidden -mx-4 px-4 mb-4 overflow-x-auto flex gap-2 pb-2 w-full" role="tablist" aria-label="Rooms" style={{ scrollbarWidth: 'none' }}>
          {rooms.map(room => {
            const n = roomCheckedCounts[room.id] ?? 0
            const active = room.id === activeRoomId && !searchQuery
            return (
              <button
                key={room.id}
                onClick={() => { setActiveRoomId(room.id); setSearchQuery('') }}
                role="tab"
                aria-selected={active}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3964] ${
                  active ? 'bg-[#1F3964] text-white' : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                {room.emoji} {room.name} {n > 0 ? `(${n})` : ''}
              </button>
            )
          })}
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0">

          {/* Search results */}
          {searchResults !== null ? (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                {searchResults.length === 0
                  ? `No items found for "${searchQuery}"`
                  : `${searchResults.length} results for "${searchQuery}"`}
              </p>
              <div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
                {searchResults.map(({ roomName, catName, item }) => (
                  <ItemRow
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    context={`${roomName} › ${catName}`}
                    isChecked={state.checked.has(item.id)}
                    detail={state.details[item.id]}
                    onToggle={toggleItem}
                    onDetail={setDetail}
                  />
                ))}
              </div>
            </div>
          ) : activeRoom ? (
            /* Room view */
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-2xl font-bold text-[#1F3964]">
                  {activeRoom.emoji} {activeRoom.name}
                </h1>
                <span className="text-sm text-gray-500">
                  {activeRoom.categories.reduce((n, c) => n + c.items.length, 0)} items
                </span>
              </div>
              <div className="space-y-4">
                {activeRoom.categories.map(cat => (
                  <CategorySection
                    key={cat.id}
                    categoryId={cat.id}
                    name={cat.name}
                    items={cat.items}
                    state={state}
                    onToggle={toggleItem}
                    onDetail={setDetail}
                    onCheckAll={checkAll}
                    onUncheckAll={uncheckAll}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </main>
      </div>

      {/* Lead Gate Modal */}
      {showLeadGate && (
        <LeadGateModal
          checkedCount={totalChecked}
          estimatedTotal={totalValue}
          onSubmit={handleLeadSubmit}
          onClose={() => setShowLeadGate(false)}
        />
      )}
    </div>
  )
}
