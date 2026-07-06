/**
 * POST /api/leads
 *
 * Receives lead data from the inventory tool and contact form.
 * Logs to console (Vercel Logs) and sends email notification via Resend.
 */

import { NextRequest, NextResponse } from 'next/server'
import type { Lead } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<Lead>

    // Honeypot: hidden "website" field — humans leave it empty, bots fill it.
    // Silently accept and drop (no log, no email) so bots can't tell.
    if (typeof body.website === 'string' && body.website !== '') {
      return NextResponse.json({ success: true })
    }

    const lead: Lead = {
      firstName:      body.firstName ?? '',
      lastName:       body.lastName,
      email:          body.email ?? '',
      phone:          body.phone,
      wantsReview:    body.wantsReview ?? false,
      source:         body.source ?? 'contact-form',
      state:          body.state,
      propertyAddress: body.propertyAddress,
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
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendKey)

        const lines = [
          `Name: ${lead.firstName}${lead.lastName ? ' ' + lead.lastName : ''}`,
          `Email: ${lead.email}`,
          lead.phone ? `Phone: ${lead.phone}` : '',
          lead.state ? `State: ${lead.state}` : '',
          lead.propertyAddress ? `Property Address: ${lead.propertyAddress}` : '',
          lead.claimType ? `Claim Type: ${lead.claimType}` : '',
          lead.message ? `Message: ${lead.message}` : '',
          lead.checkedCount ? `Inventory Items Checked: ${lead.checkedCount}` : '',
          lead.estimatedTotal ? `Estimated Total: $${lead.estimatedTotal.toLocaleString()}` : '',
          `Source: ${lead.source}`,
          `Time: ${lead.timestamp}`,
        ].filter(Boolean).join('\n')

        await resend.emails.send({
          from: 'InsuranceClaimsInfo Leads <onboarding@resend.dev>',
          to: process.env.LEAD_NOTIFY_EMAIL ?? 'leland.coontz@gmail.com',
          subject: `New Lead: ${lead.firstName}${lead.lastName ? ' ' + lead.lastName : ''} — ${lead.source}`,
          text: lines,
        })
      } catch (emailErr) {
        console.error('[LEAD EMAIL ERROR]', emailErr)
        // Don't fail the request if email fails — lead is already logged
      }
    }

    // ── Phase 3: Database (replace above with this pattern) ─────────────────
    // await db.insert(leads).values(lead)

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('[LEAD ERROR]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
