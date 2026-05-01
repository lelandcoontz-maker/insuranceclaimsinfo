import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Videos & Media — Leland Coontz on Insurance Claims | InsuranceClaimsInfo',
  description:
    'Watch videos by Leland Coontz, California Licensed Public Adjuster — Xactimate estimating, fire and smoke damage, claims strategy, insurance law, and media appearances including NPR Planet Money.',
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface MediaAppearance {
  title: string
  outlet: string
  date: string
  description: string
  links: { label: string; url: string }[]
  highlight?: boolean
}

interface Video {
  id: string
  title: string
  date: string
  description: string
  category: string
  /** YouTube embed ID — leave empty until uploaded */
  youtubeId?: string
  /** Placeholder status — true means not yet on YouTube */
  pending?: boolean
}

const MEDIA_APPEARANCES: MediaAppearance[] = [
  {
    title: 'After the Fires',
    outlet: 'NPR Planet Money',
    date: '2025-01-23',
    description:
      'NPR reporter Nick Fountain follows Leland through the LA wildfire burn zone as he works claims for displaced homeowners. The episode explores how insurance adjusters value homes and possessions after they\'ve been reduced to rubble — and why the system is so dysfunctional that most people can\'t navigate it without professional help. "Is it a good system? No. Very dysfunctional system... the average person can\'t figure it out and they get taken advantage of."',
    links: [
      { label: 'Listen on NPR', url: 'https://www.npr.org/2025/01/22/1226038390/la-fires-altadena-pacific-palisades-insurance-recovery-rebuild' },
      { label: 'Read Transcript', url: 'https://www.npr.org/transcripts/1226038390' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/after-the-fires/id290783428?i=1000685102673' },
      { label: 'Spotify', url: 'https://open.spotify.com/episode/4cx4oHRFYZByFxxwms8YpJ' },
    ],
    highlight: true,
  },
  {
    title: 'How Do Insurance Companies Determine the Value of Homes Destroyed by Wildfires?',
    outlet: 'NPR',
    date: '2025-01-31',
    description:
      'Companion article to the Planet Money episode. Leland explains that when he worked for an insurance company, the system incentivized clearing cases fast — not getting homeowners fair settlements. Now as a Public Adjuster, he "really sweats the details" and regularly gets his clients larger payouts.',
    links: [
      { label: 'Read on NPR', url: 'https://www.npr.org/2025/01/31/nx-s1-5265992/how-do-insurance-companies-determine-the-value-of-homes-destroyed-by-wildfires' },
    ],
  },
  {
    title: 'Can a Policyholder Profit From a Loss?',
    outlet: 'Property Insurance Coverage Law Blog (Merlin Law Group)',
    date: '2019-12-03',
    description:
      'Leland\'s provocative post in the "Level The Playing Field" Facebook group challenged the insurance industry assertion that policyholders cannot profit from their claim. The post generated over 130 comments and was featured on Chip Merlin\'s nationally-read insurance law blog.',
    links: [
      { label: 'Read Article', url: 'https://www.propertyinsurancecoveragelaw.com/blog/can-a-policyholder-profit-from-a-loss/' },
    ],
  },
]

const VIDEOS: Video[] = [
  // ── Xactimate & Estimating ──
  {
    id: 'xact-electrical',
    title: 'Tens of Thousands in Electrical Damage Left on the Table',
    date: '2021-04-10',
    description: 'How adjusters consistently miss electrical damage on property claims — and the line items you need to capture it.',
    category: 'Xactimate & Estimating',
    pending: true,
  },
  {
    id: 'xact-wall-heights',
    title: 'Plaster Wall Heights: That Extra 3 Inches Means More Money',
    date: '2021-12-11',
    description: '8\'3" walls instead of 8\' standard? That extra 3% in painting estimates adds up. A detail most adjusters miss.',
    category: 'Xactimate & Estimating',
    pending: true,
  },
  {
    id: 'xact-new-vs-old',
    title: 'New vs. Old Construction Pricing in Xactimate',
    date: '2022-06-23',
    description: 'Why old construction labor is slower, harder, and more expensive — and how to price it correctly in Xactimate.',
    category: 'Xactimate & Estimating',
    pending: true,
  },
  {
    id: 'xact-line-item-reports',
    title: 'How to Save and Print Xactimate Line Item Reports',
    date: '2021-09-08',
    description: 'A practical walkthrough of saving and printing detailed reports that explain each line item in your Xactimate estimate.',
    category: 'Xactimate & Estimating',
    pending: true,
  },
  {
    id: 'xact-fire-escape-underlay',
    title: 'Using Fire Escape Drawings as Xactimate Underlay',
    date: '2022-10-23',
    description: 'A time-saving technique: import fire escape drawings as a floor plan underlay in Xactimate.',
    category: 'Xactimate & Estimating',
    pending: true,
  },

  // ── Fire & Smoke Damage ──
  {
    id: 'fire-asbestos-appliances',
    title: 'Why Smoke and Asbestos Damage Means Total Loss Appliances',
    date: '2022-11-13',
    description: 'When a fire releases asbestos, every appliance in the home is contaminated. Here\'s why cleaning isn\'t enough and replacement is the standard.',
    category: 'Fire & Smoke Damage',
    pending: true,
  },
  {
    id: 'fire-burn-learn',
    title: 'Burn & Learn: Fire Cause and Origin Training',
    date: '2015-09-17',
    description: 'Hands-on fire cause and origin training — understanding burn patterns, char depth, and how investigators determine where a fire started.',
    category: 'Fire & Smoke Damage',
    pending: true,
  },
  {
    id: 'fire-efficient-proximate',
    title: 'Efficient Proximate Cause: When Meth Addicts Damage a Property After a Fire',
    date: '2022-05-02',
    description: 'A real coverage question: if a fire leads to vacancy which leads to meth addict damage, is the fire the efficient proximate cause? Insurance law deep dive.',
    category: 'Fire & Smoke Damage',
    pending: true,
  },
  {
    id: 'fire-mudslide-causation',
    title: 'Mudslide Covered as Fire Loss: Anti-Concurrent Causation Explained',
    date: '2025-05-23',
    description: 'When a wildfire strips vegetation and the next rain causes a mudslide — how efficient proximate cause and anti-concurrent causation determine coverage.',
    category: 'Fire & Smoke Damage',
    pending: true,
  },
  {
    id: 'fire-smoke-pressure',
    title: 'Smoke Is Pressurized: How It Travels Through Walls and Attics',
    date: '2025-03-08',
    description: 'Smoke doesn\'t just float through open doors. It\'s pressurized and forces its way through outlets, plumbing penetrations, and wall cavities. Here\'s why that matters for your claim.',
    category: 'Fire & Smoke Damage',
    pending: true,
  },

  // ── Water Damage ──
  {
    id: 'water-interior-scoping',
    title: 'Interior Water Damage Scoping',
    date: '2021-11-05',
    description: 'How to properly scope interior water damage — what to look for, what adjusters miss, and how to document it.',
    category: 'Water Damage',
    pending: true,
  },
  {
    id: 'water-scoping-suggestions',
    title: 'Suggestions for Scoping a Water Loss',
    date: '2022-07-23',
    description: 'Practical field tips for scoping water losses — moisture readings, affected areas, and building a complete estimate.',
    category: 'Water Damage',
    pending: true,
  },
  {
    id: 'water-forensic-architects',
    title: 'How Forensic Architects Check Water Intrusion',
    date: '2023-05-19',
    description: 'Watch a forensic architect use professional techniques to check for water intrusion patterns that standard inspections miss.',
    category: 'Water Damage',
    pending: true,
  },
  {
    id: 'water-cross-contamination',
    title: 'Cross-Contamination on Condo and Rental Policy Claims',
    date: '2025-02-04',
    description: 'When water damage crosses unit boundaries in condos — who pays what, and how coverage allocation works between policies.',
    category: 'Water Damage',
    pending: true,
  },

  // ── Claims Strategy & Insurance Law ──
  {
    id: 'law-when-must-pay',
    title: 'When Must an Insurer Pay? Contract, Statute, Case Law, and Trade Standard',
    date: '2024-09-08',
    description: 'The four sources of authority that determine when a carrier is obligated to pay: the policy contract, state statutes, case law, and industry trade standards.',
    category: 'Claims Strategy & Insurance Law',
    pending: true,
  },
  {
    id: 'law-matching-acv',
    title: 'State Insurance Codes: Matching Not Required for ACV Policies',
    date: '2023-04-17',
    description: 'A nuanced point most adjusters get wrong: matching requirements under the Model Fair Claims Act may not apply to actual cash value policies.',
    category: 'Claims Strategy & Insurance Law',
    pending: true,
  },
  {
    id: 'law-carriers-taking-back',
    title: 'Newest Trend: Carriers Taking Money Back',
    date: '2025-06-22',
    description: 'A disturbing new pattern: insurance companies paying claims and then demanding the money back. What\'s driving this and what to do about it.',
    category: 'Claims Strategy & Insurance Law',
    pending: true,
  },
  {
    id: 'law-psychology-claims',
    title: 'The Psychology of Insurance Claims',
    date: '2025-03-06',
    description: 'Understanding the psychological dynamics at play in claims handling — why adjusters behave the way they do, and how to use that knowledge strategically.',
    category: 'Claims Strategy & Insurance Law',
    pending: true,
  },

  // ── Contractors & Bad Faith ──
  {
    id: 'bf-contractor-sue',
    title: 'Contractors Can Sue Insurers for Bad Faith and O&P on Mitigation',
    date: '2023-02-15',
    description: 'A legal exposure most contractors are unaware of: courts have held that insurers can be liable for bad faith and overhead & profit disputes on mitigation work.',
    category: 'Contractors & Bad Faith',
    pending: true,
  },
  {
    id: 'bf-restoration-sue',
    title: 'Insurance Restoration Contractors Can Sue for Bad Faith',
    date: '2023-02-15',
    description: 'The legal landscape surrounding contractor standing in bad faith disputes — what courts have held when insurers systematically underpay mitigation invoices.',
    category: 'Contractors & Bad Faith',
    pending: true,
  },

  // ── The Public Adjuster Profession ──
  {
    id: 'pa-tile-grade',
    title: 'Why Public Adjusters Are Needed: Standard vs. Above Average Tile',
    date: '2024-02-26',
    description: 'A simple tile grade dispute that illustrates exactly why homeowners need professional representation. The adjuster says standard tile; the home has above-average. That difference is real money.',
    category: 'The Public Adjuster Profession',
    pending: true,
  },
  {
    id: 'pa-more-than-roofs',
    title: 'PA Work Is More Than Wind Damage to Residential Roofs',
    date: '2022-03-26',
    description: 'The public adjusting profession handles far more than roof claims. Water, fire, smoke, contents, commercial, code upgrades — a look at the full scope.',
    category: 'The Public Adjuster Profession',
    pending: true,
  },
  {
    id: 'pa-slab-yard',
    title: 'The Public Adjuster Visits the Slab Yard',
    date: '2023-02-27',
    description: 'Why a Public Adjuster visits a stone slab yard: understanding material costs, quality differences, and how to properly price countertop replacements.',
    category: 'The Public Adjuster Profession',
    pending: true,
  },

  // ── Construction Details for Claims ──
  {
    id: 'const-tilt-wall',
    title: 'Tilt Wall Construction: Saw Cutting, OSHA Silica, and Cold Joints',
    date: '2022-06-18',
    description: 'Understanding tilt-wall commercial construction — saw cutting, silica exposure regulations, and cold joints. Critical knowledge for commercial claims.',
    category: 'Construction Details for Claims',
    pending: true,
  },
  {
    id: 'const-asbestos-testing',
    title: 'Asbestos Testing: Every Layer of Flooring, Mastic, and Drywall',
    date: '2022-11-13',
    description: 'Where to test for asbestos in fire and water losses: every flooring layer, mastic, popcorn ceiling, pipe wrap, and drywall joint compound.',
    category: 'Construction Details for Claims',
    pending: true,
  },
  {
    id: 'const-tile-types',
    title: 'Porcelain vs. Ceramic Tile: Rectified Tile and Lippage',
    date: '2021-10-07',
    description: 'Understanding the difference between porcelain and ceramic, what rectified tile is, and why lippage matters for insurance claim scoping.',
    category: 'Construction Details for Claims',
    pending: true,
  },
  {
    id: 'const-shear-panel',
    title: 'Shear Panel for Seismic Strength in California',
    date: '2024-01-12',
    description: 'Shear panels are a California building code requirement for seismic resistance. Here\'s what they are and why they matter for your insurance claim.',
    category: 'Construction Details for Claims',
    pending: true,
  },
  {
    id: 'const-craftsman-home',
    title: 'Damaged Old Craftsman Home: $200K Restoration',
    date: '2021-03-14',
    description: 'A walk-through of a severely damaged Craftsman home hit by a vehicle — $200,000 in restoration to period-correct specifications.',
    category: 'Construction Details for Claims',
    pending: true,
  },

  // ── AI & Technology ──
  {
    id: 'ai-letters',
    title: 'Using AI to Write Letters to Insurance Companies',
    date: '2022-12-14',
    description: 'How to use artificial intelligence tools to draft demand letters, position letters, and correspondence to insurance companies.',
    category: 'AI & Technology in Claims',
    pending: true,
  },
  {
    id: 'ai-free-app',
    title: 'Free AI App for Writing Insurance Letters',
    date: '2022-12-14',
    description: 'A walkthrough of free AI tools that can help you draft professional letters to your insurance company.',
    category: 'AI & Technology in Claims',
    pending: true,
  },

  // ── Conference & Presentations ──
  {
    id: 'conf-umpire',
    title: 'WTS Conference: Finding Expert Umpires for Appraisal Panels',
    date: '2021-04-03',
    description: 'From the Windstorm Insurance Network conference — how to find qualified umpires for insurance appraisal panels and what to look for.',
    category: 'Conferences & Presentations',
    pending: true,
  },
  {
    id: 'conf-xactimate-breakout',
    title: 'Xactimate Breakout: Practical Interior Estimating and Strategy',
    date: '2021-03-29',
    description: 'A conference breakout session on practical Xactimate interior estimating — strategy, common pitfalls, and how to build defensible scopes.',
    category: 'Conferences & Presentations',
    pending: true,
  },
]

const VIDEO_CATEGORIES = [...new Set(VIDEOS.map(v => v.category))]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function VideosPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Videos & Media</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Educational videos, media appearances, and presentations by Leland Coontz,
            California Licensed Public Adjuster — drawing from decades of experience handling
            property insurance claims across every major carrier.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* ── Featured: NPR & Media ── */}
        <section>
          <h2 className="text-xl font-bold text-[#1F3964] mb-2">Media Appearances</h2>
          <p className="text-sm text-gray-500 mb-6">
            Leland has been featured on national media discussing insurance claims, wildfire recovery,
            and the systemic problems with how insurance companies handle property damage.
          </p>
          <div className="space-y-5">
            {MEDIA_APPEARANCES.map((item, i) => (
              <div
                key={i}
                className={`border rounded-xl p-5 ${
                  item.highlight
                    ? 'bg-amber-50 border-[#C9A84C] shadow-sm'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">
                    {item.highlight ? '\uD83C\uDFA4' : '\uD83D\uDCF0'}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-gray-900 leading-tight">{item.title}</h3>
                      {item.highlight && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.outlet} &middot; {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#EFF4FB] text-[#1F3964] hover:bg-[#1F3964] hover:text-white transition-colors"
                        >
                          {link.label} &rarr;
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick-jump nav ── */}
        <div className="flex flex-wrap gap-2">
          <a
            href="#media-appearances"
            className="text-xs bg-gray-100 hover:bg-[#EFF4FB] text-gray-600 hover:text-[#1F3964] px-3 py-1.5 rounded-full transition-colors"
          >
            Media
          </a>
          {VIDEO_CATEGORIES.map(cat => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-xs bg-gray-100 hover:bg-[#EFF4FB] text-gray-600 hover:text-[#1F3964] px-3 py-1.5 rounded-full transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* ── Video Library by Category ── */}
        {VIDEO_CATEGORIES.map(category => (
          <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <h2 className="text-xl font-bold text-[#1F3964] mb-5">{category}</h2>
            <div className="space-y-4">
              {VIDEOS.filter(v => v.category === category).map(video => (
                <div
                  key={video.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{'\uD83C\uDFAC'}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-gray-900 leading-tight text-sm">
                          {video.title}
                        </h3>
                        {video.pending && (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mb-1">
                        {new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{video.description}</p>
                      {video.youtubeId && (
                        <a
                          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-xs font-medium px-3 py-1.5 rounded-full bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
                        >
                          Watch on YouTube &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ── Upload notice ── */}
        <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-5">
          <h3 className="font-bold text-[#1F3964] mb-2">More Videos Coming</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Leland has recorded over 100 educational videos covering Xactimate estimating,
            fire and smoke damage, water losses, insurance law, construction details, and claims
            strategy. These videos are being organized and uploaded — check back regularly for
            new content, or{' '}
            <Link href="/contact" className="text-[#2E74B5] underline">
              contact us
            </Link>{' '}
            to be notified when new videos are posted.
          </p>
        </div>

        {/* ── About the Editor ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-bold text-amber-900 mb-2">About These Videos</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            These videos are recorded by <strong>Leland Coontz</strong>, the editor of
            InsuranceClaimsInfo.com and a California Licensed Public Adjuster (License #2B53445).
            Leland has worked property insurance claims for over 20 years on both sides of the
            industry — first as a company adjuster handling catastrophe claims for Hurricane
            Katrina, Ike, Sandy, and numerous California disasters, and now as a Public Adjuster
            advocating for homeowners and commercial property owners. His experience spans every
            major carrier and every type of property loss.
          </p>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="border-t pt-8">
          <h3 className="font-bold text-[#1F3964] mb-3">Have a Claim You Need Help With?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Videos can teach you the concepts, but every claim is different. If you need someone
            to evaluate your specific situation and fight for a fair settlement, a licensed
            Public Adjuster can help.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <hr className="my-8 border-gray-300" />
        <p className="text-sm text-gray-500 italic">
          This article is for informational purposes only and does not constitute legal advice. Insurance
          policies and applicable law vary by state and by policy form. Consult with a licensed
          professional regarding your specific situation.
        </p>
      </div>
    </>
  )
}
