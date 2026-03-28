'use client'

/**
 * useInventory
 * Central state for the contents inventory tool.
 * Abstracted into a hook so the storage layer can be swapped later:
 *   Phase 1 → in-memory (current)
 *   Phase 2 → localStorage (persist across sessions)
 *   Phase 3 → server-side user accounts
 */

import { useReducer, useCallback, useMemo } from 'react'
import type { InventoryState, ItemDetail } from '@/lib/types'

// ─── Actions ─────────────────────────────────────────────────────────────────

type Action =
  | { type: 'TOGGLE'; id: string }
  | { type: 'SET_DETAIL'; id: string; field: keyof ItemDetail; value: string }
  | { type: 'CHECK_ALL'; ids: string[] }
  | { type: 'UNCHECK_ALL'; ids: string[] }
  | { type: 'CLEAR' }
  // FUTURE: | { type: 'LOAD'; state: InventoryState }

const emptyDetail: ItemDetail = { qty: '1', value: '', notes: '' }

function reducer(state: InventoryState, action: Action): InventoryState {
  switch (action.type) {
    case 'TOGGLE': {
      const checked = new Set(state.checked)
      checked.has(action.id) ? checked.delete(action.id) : checked.add(action.id)
      return { ...state, checked }
    }
    case 'SET_DETAIL': {
      return {
        ...state,
        details: {
          ...state.details,
          [action.id]: { ...emptyDetail, ...state.details[action.id], [action.field]: action.value },
        },
      }
    }
    case 'CHECK_ALL': {
      const checked = new Set(state.checked)
      action.ids.forEach(id => checked.add(id))
      return { ...state, checked }
    }
    case 'UNCHECK_ALL': {
      const checked = new Set(state.checked)
      action.ids.forEach(id => checked.delete(id))
      return { ...state, checked }
    }
    case 'CLEAR':
      return { checked: new Set(), details: {} }
    default:
      return state
  }
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useInventory() {
  const [state, dispatch] = useReducer(reducer, { checked: new Set<string>(), details: {} })

  const toggleItem    = useCallback((id: string) => dispatch({ type: 'TOGGLE', id }), [])
  const setDetail     = useCallback((id: string, field: keyof ItemDetail, value: string) =>
    dispatch({ type: 'SET_DETAIL', id, field, value }), [])
  const checkAll      = useCallback((ids: string[]) => dispatch({ type: 'CHECK_ALL', ids }), [])
  const uncheckAll    = useCallback((ids: string[]) => dispatch({ type: 'UNCHECK_ALL', ids }), [])
  const clearAll      = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const totalChecked = state.checked.size

  const totalValue = useMemo(() =>
    Array.from(state.checked).reduce((sum, id) => {
      const d = state.details[id]
      if (!d) return sum
      const qty = parseInt(d.qty) || 1
      const val = parseFloat(d.value) || 0
      return sum + qty * val
    }, 0),
  [state])

  return { state, toggleItem, setDetail, checkAll, uncheckAll, clearAll, totalChecked, totalValue }
}
