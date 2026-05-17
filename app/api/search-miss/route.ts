import { NextResponse } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

const LOG_PATH = path.join(process.cwd(), 'data', 'search-misses.json')

interface MissEntry {
  query: string
  count: number
  lastSeen: string
}

function readMisses(): MissEntry[] {
  try {
    if (fs.existsSync(LOG_PATH)) {
      return JSON.parse(fs.readFileSync(LOG_PATH, 'utf-8'))
    }
  } catch { /* empty */ }
  return []
}

function writeMisses(misses: MissEntry[]) {
  const dir = path.dirname(LOG_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(LOG_PATH, JSON.stringify(misses, null, 2))
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json()
    if (!query || typeof query !== 'string' || query.trim().length < 2) {
      return NextResponse.json({ ok: true })
    }

    const normalized = query.trim().toLowerCase().slice(0, 100)
    const misses = readMisses()
    const existing = misses.find(m => m.query === normalized)

    if (existing) {
      existing.count++
      existing.lastSeen = new Date().toISOString()
    } else {
      misses.push({ query: normalized, count: 1, lastSeen: new Date().toISOString() })
    }

    // Keep only top 500 by count, pruning old low-count entries
    misses.sort((a, b) => b.count - a.count)
    writeMisses(misses.slice(0, 500))

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true })
  }
}

export async function GET() {
  const misses = readMisses()
  return NextResponse.json(misses.slice(0, 50))
}
