import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recommended Books for Insurance Claims — InsuranceClaimsInfo',
  description:
    'Curated book recommendations for policyholders, Public Adjusters, and anyone navigating an insurance claim. Property damage, bad faith, California insurance law, and claims negotiation.',
}

/**
 * Amazon affiliate tag — set this to your Amazon Associates ID.
 * Sign up at https://affiliate-program.amazon.com/
 */
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || 'insurclaimsinfo-20'

interface Book {
  title: string
  author: string
  description: string
  asin: string        // Amazon Standard Identification Number
  category: string
}

const BOOKS: Book[] = [
  {
    title: 'Pay Up! Preventing a Disaster with Your Own Insurance Company',
    author: 'Chip Merlin',
    description:
      'Written by one of the most prominent policyholder attorneys in the country. Covers how insurance companies handle claims, common tactics, and how to fight back. Accessible to homeowners.',
    asin: '0983172102',
    category: 'For Policyholders',
  },
  {
    title: 'The Claims Game: An Insider\'s Guide Through the Insurance Claims Process',
    author: 'Ina DeLong',
    description:
      'A former insurance adjuster explains how claims work from the inside. Practical advice on documenting losses, understanding the adjuster\'s perspective, and maximizing your settlement.',
    asin: '0988457407',
    category: 'For Policyholders',
  },
  {
    title: 'Insurance Claim Secrets Revealed!',
    author: 'Russell D. Longcore',
    description:
      'A straightforward guide to the property and casualty claims process. Covers how adjusters think, how to document your claim, and negotiation strategies.',
    asin: '1440486980',
    category: 'For Policyholders',
  },
  {
    title: 'Property Insurance Litigator\'s Handbook',
    author: 'Scott M. Seaman & Jason R. Schulze',
    description:
      'A comprehensive legal reference covering first-party property insurance disputes, coverage analysis, bad faith, and appraisal. For attorneys and advanced practitioners.',
    asin: '1641058951',
    category: 'For Professionals',
  },
  {
    title: 'California Insurance Law Handbook',
    author: 'Harvey Levine',
    description:
      'The standard reference for California insurance law. Covers policy interpretation, claims handling regulations, bad faith, and the Fair Claims Settlement Practices Act.',
    asin: 'B0BXPFML29',
    category: 'For Professionals',
  },
  {
    title: 'Xactimate 28 Beginner to Advanced Training Workbook',
    author: 'Ernie Daingerfield',
    description:
      'If you want to understand how Xactimate estimates are built — and how to challenge them — this workbook walks through the software from beginner to advanced. Essential for anyone disputing an estimate.',
    asin: 'B0DFL66WF6',
    category: 'Xactimate & Estimating',
  },
  {
    title: 'Storm Profit$: How to Make Money on Insurance Claims',
    author: 'Chris Smith',
    description:
      'Written for contractors and adjusters working property claims. Covers estimating, supplements, and getting paid fairly for restoration work.',
    asin: '1733139702',
    category: 'Xactimate & Estimating',
  },
  {
    title: 'Mold: The War Within',
    author: 'Kurt & Lee Ann Billings',
    description:
      'A deep dive into mold contamination — health effects, remediation, and the insurance claim implications. Useful background for anyone dealing with a mold loss.',
    asin: '0977913406',
    category: 'Specialized Topics',
  },
]

const CATEGORIES = [...new Set(BOOKS.map(b => b.category))]

function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
}

export default function BooksPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Recommended Books</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Curated reading for policyholders, Public Adjusters, attorneys, and anyone navigating
            an insurance claim. These are books we reference in our own practice.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Disclosure */}
        <p className="text-xs text-gray-400 italic">
          Disclosure: As an Amazon Associate, we earn from qualifying purchases. This does not
          affect our recommendations — we only list books we have read and would recommend to
          our own clients. Prices are set by Amazon and may change.
        </p>

        {CATEGORIES.map(category => (
          <section key={category}>
            <h2 className="text-xl font-bold text-[#1F3964] mb-5">{category}</h2>
            <div className="space-y-5">
              {BOOKS.filter(b => b.category === category).map(book => (
                <a
                  key={book.asin}
                  href={amazonUrl(book.asin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-[#C9A84C] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">&#128214;</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 leading-tight">{book.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{book.description}</p>
                    </div>
                    <span className="text-[#C9A84C] text-sm font-medium flex-shrink-0 hidden sm:block">
                      View on Amazon →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom note */}
        <div className="border-t pt-8">
          <h3 className="font-bold text-[#1F3964] mb-3">Want Hands-On Help Instead?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Books are great for education, but every claim is different. If you need someone to
            handle your claim directly, a licensed Public Adjuster can evaluate your situation,
            prepare your estimate, and negotiate with the insurer on your behalf.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
