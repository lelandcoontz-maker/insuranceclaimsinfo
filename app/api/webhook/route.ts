import { NextResponse } from 'next/server'

/**
 * Stripe webhook endpoint.
 *
 * To activate:
 * 1. Set STRIPE_WEBHOOK_SECRET in Vercel env vars
 * 2. In Stripe dashboard → Developers → Webhooks, add endpoint:
 *    https://insuranceclaimsinfo.vercel.app/api/webhook
 * 3. Select event: checkout.session.completed
 *
 * For now, this logs completed purchases. Phase 2 will send the PDF
 * download link via email (Resend).
 */
export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!process.env.STRIPE_WEBHOOK_SECRET || !sig) {
    console.log('[WEBHOOK] Missing webhook secret or signature — skipping verification')
    return NextResponse.json({ received: true })
  }

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      console.log('[PURCHASE]', JSON.stringify({
        productId: session.metadata?.productId,
        productName: session.metadata?.productName,
        customerEmail: session.customer_details?.email,
        amountTotal: session.amount_total,
        currency: session.currency,
        timestamp: new Date().toISOString(),
      }))

      // Phase 2: Send download link via email using Resend
      // const resend = new Resend(process.env.RESEND_API_KEY)
      // await resend.emails.send({
      //   from: 'InsuranceClaimsInfo <noreply@insuranceclaimsinfo.com>',
      //   to: session.customer_details.email,
      //   subject: `Your download: ${session.metadata.productName}`,
      //   html: `<p>Thank you for your purchase! <a href="...">Download your guide here.</a></p>`,
      // })
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('[WEBHOOK ERROR]', err)
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
}
