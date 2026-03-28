/**
 * POST /api/leads
 *
 * Receives lead data from:
 *   - Inventory tool (after email/name gate)
 *   - Contact form
 *
 * Phase 1 (current): logs the lead to console (visible in Vercel dashboard → Logs)
 * Phase 2: Uncomment the Resend block below and add RESEND_API_KEY to Vercel env vars
 * Phase 3: Replace with database write (Vercel Postgres, Supabase, Airtable, etc.)
 *
 * To view leads right now: Vercel Dashboard → your project → Logs tab → search "LEAD"
 */

import { NextRequest, NextResponse } from 'next/server'
import type { Lead } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<Lead>

    const lead: Lead = {
      firstName:      body.firstName ?? '',
      email:          body.email ?? '',
      wantsReview:    body.wantsReview ?? false,
      source:         body.source ?? 'contact-form',
      state:          body.state,
      claimType:      body.claimType,
      message:        body.message,
      checkedCount:   body.checkedCount,
      estimatedTotal: body.estimatedTotal,
      timestamp:      new Date().toISOString(),
    }

    // Validate
    if (!lead.email || !lead.firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── Phase 1: Log (always runs) ──────────────────────────────────────────
    console.log('[LEAD]', JSON.stringify(lead))

    // ── Phase 2: Email via Resend ───────────────────────────────────────────
    // To enable: npm install resend && add RESEND_API_KEY to Vercel env vars
    // and set LEAD_NOTIFY_EMAIL to your email address.
    //
    // const resendKey = process.env.RESEND_API_KEY
    // if (resendKey) {
    //   const { Resend } = await import('resend')
    //   const resend = new Resend(resendKey)
    //   await resend.emails.send({
    //     from: 'leads@insuranceclaimsinfo.com',
    //     to: process.env.LEAD_NOTIFY_EMAIL ?? 'leland@example.com',
    //     subject: `New Lead: ${lead.firstName} (${lead.source})`,
    //     text: JSON.stringify(lead, null, 2),
    //   })
    // }

    // ── Phase 3: Database (replace above with this pattern) ─────────────────
    // await db.insert(leads).values(lead)

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('[LEAD ERROR]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
