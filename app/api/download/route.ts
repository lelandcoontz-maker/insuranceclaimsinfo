import { NextRequest, NextResponse } from 'next/server'
import { getProduct } from '@/lib/products'

/**
 * Validates a Stripe checkout session and returns the PDF download URL.
 * Called from the success page after payment.
 */

const PRODUCT_FILES: Record<string, string> = {
  'appraisal-handbook': '/guides/paid/appraisal-handbook.pdf',
  'xactimate-dispute-guide': '/guides/paid/xactimate-dispute-guide.pdf',
  'wildfire-recovery-guide': '/guides/paid/wildfire-recovery-guide.pdf',
  'bad-faith-documentation-kit': '/guides/paid/bad-faith-documentation-kit.pdf',
  'contents-claim-workbook': '/guides/paid/contents-claim-workbook.pdf',
}

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session ID.' }, { status: 400 })
  }

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed.' }, { status: 403 })
    }

    const productId = session.metadata?.productId
    if (!productId) {
      return NextResponse.json({ error: 'No product found for this session.' }, { status: 404 })
    }

    const product = getProduct(productId)
    const filePath = PRODUCT_FILES[productId]

    if (!product || !filePath) {
      return NextResponse.json({ error: 'Product file not found.' }, { status: 404 })
    }

    return NextResponse.json({
      productName: product.name,
      downloadUrl: filePath,
      customerEmail: session.customer_details?.email || null,
    })
  } catch (err) {
    console.error('[DOWNLOAD ERROR]', err)
    return NextResponse.json({ error: 'Unable to verify purchase.' }, { status: 500 })
  }
}
