// ─── Content / Inventory types ───────────────────────────────────────────────

export interface ContentItem {
  id: string
  name: string
  // FUTURE FIELDS (add without breaking existing code):
  // imageUrl?: string          — for the swipe-left/right photo feature
  // averageValue?: number      — suggested replacement cost
  // brands?: string[]          — common brands for this item
  // aiQuestions?: string[]     — AI interview follow-up prompts
  // tags?: string[]            — searchable tags
}

export interface ContentCategory {
  id: string
  name: string
  items: ContentItem[]
}

export interface ContentRoom {
  id: string
  name: string
  emoji: string
  categories: ContentCategory[]
}

// ─── Inventory state (managed by useInventory hook) ──────────────────────────

export interface ItemDetail {
  qty: string
  value: string
  notes: string   // placeholder — shown in Excel, available for future UI
}

export interface InventoryState {
  checked: Set<string>
  details: Record<string, ItemDetail>
}

// ─── Lead capture ─────────────────────────────────────────────────────────────

export interface Lead {
  firstName: string
  lastName?: string
  email: string
  phone?: string
  wantsReview: boolean
  source: 'inventory-tool' | 'contact-form' | 'resources'
  state?: string           // claimant's US state — for referral routing
  propertyAddress?: string // address of the loss / property
  claimType?: string
  message?: string
  checkedCount?: number
  estimatedTotal?: number
  timestamp: string
}

// ─── Article / resource content (future CMS integration) ─────────────────────

export interface ResourceArticle {
  slug: string
  title: string
  description: string
  category: ResourceCategory
  publishedAt?: string
  featured?: boolean
}

export type ResourceCategory =
  | 'california-law'
  | 'policy-interpretation'
  | 'claims-process'
  | 'contents-property'
  | 'negotiation'
  | 'xactimate'
  | 'bad-faith'
  | 'appraisal'
  | 'ale-frv'
  | 'general'
