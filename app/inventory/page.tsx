/**
 * Inventory page — server component.
 * Reads the contents JSON and passes it to the client-side InventoryTool.
 *
 * To update the item list: re-run generate_contents_json.py and redeploy.
 * Future: replace fs.readFileSync with a database or CMS query — nothing in
 * InventoryTool.tsx needs to change.
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import type { ContentRoom } from '@/lib/types'
import { InventoryTool } from '@/components/inventory/InventoryTool'

export const metadata: Metadata = {
  title: 'Personal Property Inventory Tool',
  description:
    'Free interactive personal property inventory checklist — 3,750+ items organized by room. Check what you owned, add values, and download an Excel spreadsheet for your insurance claim.',
  alternates: { canonical: '/inventory' },
}

export default function InventoryPage() {
  const raw = readFileSync(join(process.cwd(), 'public', 'data', 'contents.json'), 'utf-8')
  const rooms: ContentRoom[] = JSON.parse(raw)

  return (
    <>
      {/* Page header */}
      <div className="bg-[#1F3964] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">
            Free Tool
          </div>
          <h1 className="text-3xl font-bold mb-3">Personal Property Inventory</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Go room by room, check off what you owned, add quantities and estimated values,
            then download your complete inventory as a formatted Excel file.
            <strong className="text-white"> 3,750+ items</strong> — including the small things
            most people forget.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-blue-200">
            <span>✓ 16 rooms &amp; categories</span>
            <span>✓ Search across all items</span>
            <span>✓ Qty &amp; value fields</span>
            <span>✓ Exports to Excel with 3 worksheets</span>
            <span>✓ Free — no account required</span>
          </div>
        </div>
      </div>

      {/* The interactive tool */}
      <InventoryTool rooms={rooms} />
    </>
  )
}
