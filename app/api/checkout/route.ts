import { NextResponse } from 'next/server'
import { getProduct, isStripeConfigured } from '@/lib/products'

export async function POST(request: Request) {
  try {
    const { productId } = await request.json()

    const product = getProduct(productId)
    if (!product) {
      return NextResponse.json({ error: 'Product not found.' }, { status: 404 })
    }

    if (!isStripeConfigured() || !product.stripePriceId) {
      return NextResponse.json(
        { error: 'Checkout is not yet available. Please check back soon or contact us directly.' },
        { status: 503 }
      )
    }

    // Dynamic import to avoid errors when stripe key is not set
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const origin = request.headers.get('origin') || 'https://insuranceclaimsinfo.vercel.app'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: product.stripePriceId, quantity: 1 }],
      success_url: `${origin}/guides/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/guides`,
      metadata: {
        productId: product.id,
        productName: product.name,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[CHECKOUT ERROR]', err)
    return NextResponse.json(
      { error: 'Unable to create checkout session.' },
      { status: 500 }
    )
  }
}
