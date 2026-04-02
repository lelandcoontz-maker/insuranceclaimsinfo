export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number            // in cents
  priceDisplay: string     // formatted for display
  stripePriceId: string    // set in Stripe dashboard, referenced here
  icon: string
  tag: string
  tagColor: string
  features: string[]
}

/**
 * PDF guide products.
 *
 * To activate purchases:
 * 1. Create each product in your Stripe dashboard (https://dashboard.stripe.com/products)
 * 2. Copy the price ID (starts with "price_") into the stripePriceId field below
 * 3. Set STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your Vercel env vars
 *
 * Until Stripe is configured, the shop page shows products with a "Coming Soon" state.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'appraisal-handbook',
    name: 'The California Appraisal Handbook',
    description: 'Everything you need to know about insurance appraisal in California — from invoking it to winning it.',
    longDescription:
      'A 40+ page guide covering the standard fire policy appraisal provision, the arbitration code framework, ' +
      'key case law (Sharma, Kacha, Devonwood, Lee), Sharma waivers, White waivers, choosing your appraiser, ' +
      'the umpire selection process, and step-by-step strategy for maximizing your appraisal award. ' +
      'Includes sample demand letters and award form language to watch for.',
    price: 2900,
    priceDisplay: '$29',
    stripePriceId: process.env.STRIPE_PRICE_APPRAISAL || '',
    icon: '🔨',
    tag: 'Best Seller',
    tagColor: 'bg-red-100 text-red-700',
    features: [
      '40+ pages of California-specific appraisal guidance',
      'Key case law summaries (Sharma, Kacha, Devonwood, Lee)',
      'Sample appraisal demand letter',
      'Award form language red flags checklist',
      'White waiver response template',
      'Appraiser selection criteria worksheet',
    ],
  },
  {
    id: 'xactimate-dispute-guide',
    name: 'Xactimate Dispute Guide: Line by Line',
    description: 'How to read, challenge, and supplement an Xactimate estimate to fight underpayment.',
    longDescription:
      'Most insurance claim payments are based on Xactimate estimates — and most Xactimate estimates from insurers ' +
      'are missing line items. This guide teaches you how to read an Xactimate scope page by page, identify the ' +
      'most commonly omitted line items, understand labor and material pricing, challenge O&P exclusions, and ' +
      'prepare a detailed supplement that the insurer must address.',
    price: 3900,
    priceDisplay: '$39',
    stripePriceId: process.env.STRIPE_PRICE_XACTIMATE || '',
    icon: '📐',
    tag: 'Most Popular',
    tagColor: 'bg-blue-100 text-blue-700',
    features: [
      '50+ pages with annotated Xactimate examples',
      '25 most commonly omitted line items checklist',
      'O&P inclusion argument template',
      'Supplement letter template',
      'Labor rate and material pricing guidance',
      'Room-by-room scope review methodology',
    ],
  },
  {
    id: 'wildfire-recovery-guide',
    name: 'California Wildfire Claims Recovery Guide',
    description: 'Step-by-step guidance for total and partial wildfire losses in California.',
    longDescription:
      'Wildfire claims are among the most complex property insurance claims. This guide covers the critical ' +
      'distinction between forest fire and urban wildfire smoke (and why it matters for contamination), ' +
      'Coverage A through D walkthrough for wildfire losses, ALE documentation and timeline management, ' +
      'contents inventory for total losses, working with contractors in a post-disaster market, and ' +
      'the unique regulatory protections California provides after a declared disaster.',
    price: 2400,
    priceDisplay: '$24',
    stripePriceId: process.env.STRIPE_PRICE_WILDFIRE || '',
    icon: '🔥',
    tag: 'California',
    tagColor: 'bg-orange-100 text-orange-700',
    features: [
      '35+ pages of wildfire-specific claim guidance',
      'Forest fire vs. urban wildfire smoke contamination',
      'Coverage A–D walkthrough for wildfire losses',
      'ALE documentation checklist and timeline',
      'Contents inventory methodology for total losses',
      'Post-disaster regulatory protections summary',
    ],
  },
  {
    id: 'bad-faith-documentation-kit',
    name: 'Bad Faith Documentation Kit',
    description: 'Templates and checklists for building a bad faith case from day one of your claim.',
    longDescription:
      'Bad faith cases are won or lost on the paper trail. This kit gives you the tools to build that trail ' +
      'from the first day of your claim. Includes a communication log template, regulatory deadline tracker, ' +
      'violation documentation worksheets, sample follow-up letters for missed deadlines, and a comprehensive ' +
      'checklist of the most common bad faith indicators in California property claims.',
    price: 2900,
    priceDisplay: '$29',
    stripePriceId: process.env.STRIPE_PRICE_BADFAITH || '',
    icon: '📋',
    tag: 'Essential',
    tagColor: 'bg-amber-100 text-amber-700',
    features: [
      'Communication log template (printable + digital)',
      'Regulatory deadline tracker (10 CCR 2695)',
      'Violation documentation worksheets',
      'Sample follow-up letters for missed deadlines',
      'Bad faith indicators checklist',
      'Guide to the interplay of regulations, statutes, and bad faith',
    ],
  },
  {
    id: 'contents-claim-workbook',
    name: 'The Complete Contents Claim Workbook',
    description: 'Room-by-room methodology for documenting, valuing, and claiming personal property losses.',
    longDescription:
      'Personal property claims are where most policyholders leave the most money on the table. This workbook ' +
      'walks you through the entire contents claim process: room-by-room inventory methodology, cleaning vs. ' +
      'replacement determination, ACV vs. RCV calculations, electronics and specialty item valuation, ' +
      'pack-out and storage documentation, and how to present your inventory to the insurance company ' +
      'in a format they cannot easily dismiss.',
    price: 1900,
    priceDisplay: '$19',
    stripePriceId: process.env.STRIPE_PRICE_CONTENTS || '',
    icon: '🛋',
    tag: 'Starter',
    tagColor: 'bg-green-100 text-green-700',
    features: [
      'Room-by-room inventory worksheets',
      'Cleaning vs. replacement decision framework',
      'ACV vs. RCV calculation examples',
      'Electronics and specialty item valuation guide',
      'Pack-out and storage documentation checklist',
      'Sample contents claim submission format',
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function isStripeConfigured(): boolean {
  return !!(process.env.STRIPE_SECRET_KEY && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
}
