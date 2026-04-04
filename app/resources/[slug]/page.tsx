import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { JsonLd } from '@/components/seo/JsonLd'

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  'california-fair-claims': { title: 'California Fair Claims Settlement Practices Act (10 CCR 2695)', description: 'Your rights under California\'s fair claims regulation.' },
  'policy-interpretation':  { title: 'Understanding Your Insurance Policy', description: 'Coverages A–D, exclusions, and conditions explained.' },
  'claims-process':         { title: 'The Insurance Claims Process Step by Step', description: 'From first notice of loss to final settlement.' },
  'contents-claims':        { title: 'Personal Property & Contents Claims', description: 'How to document and value personal property for your claim.' },
  'ale-frv':                { title: 'Additional Living Expenses & Fair Rental Value', description: 'ALE and FRV: what you\'re entitled to and how to document it.' },
  'appraisal':              { title: 'Insurance Appraisal in California: The Complete Guide', description: 'How insurance appraisal works in California — the standard fire policy, the arbitration code, key case law, and how to protect your rights.' },
  'negotiation':            { title: 'Insurance Claim Negotiation Tactics', description: 'How to respond to lowball offers and delay tactics.' },
  'bad-faith':              { title: 'Bad Faith Insurance Practices in California', description: 'What constitutes bad faith and your remedies under California law.' },
  'xactimate':              { title: 'Xactimate Estimates: What You Need to Know', description: 'How to read and dispute Xactimate scopes of loss.' },
  'public-adjuster':        { title: 'Working With a Public Adjuster', description: 'What a PA does, fees, and when to hire one.' },
  'cdi-complaint':          { title: 'Filing a CDI Complaint', description: 'How to file a complaint with the California Department of Insurance.' },
  'exclusions':             { title: 'Policy Exclusions: What\'s Not Covered', description: 'Common exclusions and when they may not apply.' },
  'acv-rcv':                { title: 'ACV vs. RCV: Actual vs. Replacement Cost Value', description: 'The most important distinction in a contents claim.' },
  'proof-of-loss':          { title: 'Proof of Loss: What It Is and How to Complete It', description: 'Requirements, deadlines, and how to file a sworn proof of loss.' },
  'specialty-items':        { title: 'Electronics, Jewelry & Specialty Item Claims', description: 'How high-value and specialty items are valued differently.' },
  'mold-losses':            { title: 'Mold Losses: What Your Insurance Actually Covers', description: 'Ensuing loss, mold limits, and common insurer tactics with mold claims.' },
  'duties-after-loss':      { title: 'Duties After Loss: What You\'re Required to Do', description: 'Your obligations after a loss and how they affect your claim.' },
  'ordinance-law':          { title: 'Building Code & Ordinance or Law Coverage', description: 'Code upgrade coverage, historical requirements, zoning, and how O&L can add 25-50% to your claim.' },
  'matching':               { title: 'Matching: Achieving Reasonable Uniform Appearance', description: 'When partial repairs don\'t match — your right to a uniform appearance under the Model Fair Claims Act.' },
  'coverage-disputes':      { title: 'Coverage Disputes: Is Your Loss Covered at All?', description: 'The most fundamental dispute — establishing that your loss is covered before arguing about the amount.' },
  'declarations-page':      { title: 'How to Read Your Insurance Declarations Page', description: 'A walkthrough of your dec page: coverages, limits, deductibles, and hidden coverages you may not know about.' },
  'vandalism-claims':       { title: 'Vandalism Claims: When Insurers Call It Wear and Tear', description: 'How to prove vandalism and fight back when insurers relabel your claim.' },
  'wildfire-guide':         { title: 'California Wildfire Claims: A Complete Guide', description: 'Forest fire vs urban wildfire smoke, contamination testing, coverage, and step-by-step wildfire claims guidance.' },
  'scope-of-loss':          { title: 'Scope of Loss Disputes: Fighting for Full Repairs', description: 'When the insurer\'s scope misses damage — how to document and dispute.' },
  'equitable-tolling':      { title: 'Equitable Tolling of the Statute of Limitations', description: 'The one-year suit limitation is not as simple as it appears. Learn how equitable tolling pauses the clock while your insurer investigates.' },
  'debris-removal':         { title: 'Debris Removal Coverage — More Than Just the Dwelling', description: 'Debris removal coverage applies to more than the dwelling. Learn how it works for other structures, trees, and personal property — and how to maximize your recovery.' },
  'dealing-with-adjuster':  { title: 'How to Deal with the Insurance Company\'s Adjuster', description: 'What to expect when the insurer sends their adjuster, your rights during the inspection, common tactics to watch for, and when to get professional help.' },
  'total-loss':             { title: 'Total Loss Insurance Claims — When Your Home Is a Complete Loss', description: 'A comprehensive guide to total loss insurance claims in California — every coverage that activates, rebuilding vs. cashing out, contents claims, common problems, and California-specific protections.' },
  'examination-under-oath': { title: 'Examination Under Oath (EUO) — What It Is and How to Prepare', description: 'What an Examination Under Oath is, when insurers request one, your rights, how to prepare, and what to expect — written by a California Licensed Public Adjuster.' },
  'roof-damage':            { title: 'Roof Damage Insurance Claims in California', description: 'How to handle a roof damage insurance claim in California — common causes, what\'s covered, insurer inspections, matching disputes, and how to get the full settlement you\'re owed.' },
  'public-adjuster-fees':   { title: 'Public Adjuster Fees — What They Cost and When They\'re Worth It', description: 'How public adjuster fees work in California — contingency percentages, the disaster fee cap, when hiring a PA is worth it, and questions to ask before signing.' },
  'california-insurance-crisis': { title: 'California\'s Insurance Crisis: What Homeowners Need to Know', description: 'Why California insurers are cancelling policies, leaving the market, and raising rates — and what homeowners can do to protect themselves.' },
  'california-fair-plan':  { title: 'The California FAIR Plan: What It Covers, What It Doesn\'t, and How to Apply', description: 'A complete guide to the California FAIR Plan — the insurer of last resort for homeowners who can\'t get coverage in the private market.' },
  'smoke-damage-claims':   { title: 'Smoke Damage Insurance Claims in California', description: 'How to handle a smoke damage insurance claim — testing, remediation standards, coverage, the new Smoke Damage Recovery Act, and common insurer tactics.' },
  'fire-claim-denied':     { title: 'Fire Damage Insurance Claim Denied? Here\'s What to Do', description: 'What to do when your fire damage insurance claim is denied or underpaid — common denial reasons, your appeal rights, and how to fight back under California law.' },
  'force-placed-insurance': { title: 'Force-Placed Insurance: What It Is and Why It\'s a Problem', description: 'What happens when your mortgage lender force-places insurance on your property — what it covers, what it doesn\'t, and how to avoid it.' },
  'first-offer-lowball':   { title: 'Why You Should Never Accept the Insurer\'s First Offer', description: 'Why the insurance company\'s initial settlement offer is almost always too low — and how to respond to get a fair payout.' },
  'sb49-contents-rule':    { title: 'SB 49: California\'s New Contents Payment Rule for Disaster Victims', description: 'How SB 49 changes personal property claims after declared disasters — automatic 60% contents payments, no inventory required for 100 days.' },
  'underinsured-after-wildfire': { title: 'Underinsured After a Wildfire: What to Do When Your Policy Isn\'t Enough', description: 'Why so many California homeowners are underinsured after a wildfire — and strategies to maximize recovery when your policy limits fall short.' },
  'overhead-and-profit':    { title: 'Overhead & Profit: When Your Claim Should Include O&P', description: 'Insurance companies routinely refuse to include overhead and profit in their estimates. Learn what O&P is, when you\'re entitled to it, and how to fight for it.' },
  'water-damage-claims':    { title: 'Water Damage Insurance Claims: A Complete Guide', description: 'How to handle water damage insurance claims — from emergency response to final settlement.' },
  'right-to-repair':        { title: 'Right to Repair Clauses: Your Rights When the Carrier Sends Their Contractor', description: 'Insurance companies increasingly use right to repair clauses to control repairs.' },
  'insurance-delay-tactics': { title: 'Insurance Company Delay Tactics and Your Rights', description: 'How insurance companies use delay to pressure you into accepting less.' },
  'labor-depreciation':     { title: 'Labor Depreciation: Why Your Insurance Company Can\'t Depreciate Work Costs', description: 'A growing number of states have ruled that insurance companies cannot depreciate labor.' },
  'supplemental-claims':    { title: 'Filing Supplemental Claims: Getting Paid for What They Missed', description: 'How to file a supplement when the insurance company\'s estimate missed damage.' },
  'adjuster-types':         { title: 'Types of Insurance Adjusters: Who You\'re Really Dealing With', description: 'Staff adjusters, independent adjusters, desk adjusters, public adjusters — learn who each one works for.' },
  'policyholder-rights':    { title: 'Know Your Rights as a Policyholder', description: 'Your insurance company has obligations under the policy, state law, and regulations.' },
  'clue-database':          { title: 'The CLUE Database: How Your Claims History Follows You', description: 'What the CLUE database is and how insurance companies use it against you.' },
  'coinsurance-penalty':    { title: 'Coinsurance Penalties: When Being Underinsured Costs You Extra', description: 'What coinsurance is and how the penalty works.' },
  'temporary-emergency-repairs': { title: 'Emergency Repairs: Your Duty to Protect Your Property', description: 'Your policy requires you to prevent further damage. Learn what emergency repairs are covered.' },
  'loss-of-use-maximizing': { title: 'Maximizing Your Loss of Use (ALE) Claim', description: 'Coverage D pays your additional living expenses. Most policyholders leave thousands on the table.' },
  'when-to-hire-attorney':  { title: 'When to Hire an Insurance Claim Attorney', description: 'Not every claim needs a lawyer — but some absolutely do.' },
  'california-claim-deadlines': { title: 'California Insurance Claim Deadlines and Timeframes', description: 'Every deadline your California insurance company must meet.' },
  'hail-damage-claims':     { title: 'Hail Damage Insurance Claims', description: 'How to handle a hail damage claim — documenting damage, fighting for matching, and full replacement.' },
  'wind-damage-claims':     { title: 'Wind Damage Insurance Claims', description: 'How wind damage claims work and disputes over wind vs. wear-and-tear.' },
  'choosing-your-contractor': { title: 'Choosing Your Own Contractor vs. the Insurance Company\'s', description: 'You have the right to choose your own contractor in most states.' },
  'recorded-statements-siu': { title: 'Recorded Statements and SIU Investigations', description: 'What to expect when your insurance company requests a recorded statement or SIU investigation.' },
  'claim-negotiation-letters': { title: 'How to Write an Effective Insurance Claim Letter', description: 'Your written communications become the record of your claim.' },
  'inverse-condemnation':    { title: 'Inverse Condemnation: Suing Utilities After a California Wildfire', description: 'When a utility causes a wildfire, you may have a claim beyond your insurance policy. Learn how inverse condemnation works — strict liability, damages, and how it differs from negligence.' },
  'biased-insurance-experts': { title: 'Biased Insurance Experts: How to Challenge the Insurer\'s Hired Professionals', description: 'Insurance companies hire engineers, hygienists, and estimators who consistently minimize claims. Learn how to identify bias and demand fair evaluations.' },
  'loss-settlement-provisions': { title: 'Loss Settlement Provisions: How Your Insurance Payout Is Actually Calculated', description: 'The loss settlement clause determines everything about how you get paid. Learn how ACV, RCV, holdback, and rebuilding requirements work.' },
  'cosmetic-damage-denials': { title: 'Cosmetic Damage Denials: When Insurers Refuse to Fix What They Broke', description: 'Insurance companies increasingly deny claims for "cosmetic" damage. Learn why this argument often fails and how to fight back.' },
  'duty-to-investigate':     { title: 'The Insurer\'s Duty to Investigate: When a Sloppy Investigation Becomes Bad Faith', description: 'California insurers have a legal duty to thoroughly and fairly investigate every claim. When they don\'t, it can constitute bad faith.' },
  'insurance-mediation':     { title: 'Mediation of Insurance Disputes: When and How to Use It', description: 'Mediation can resolve insurance claim disputes faster and cheaper than litigation. Learn when it works and how to prepare.' },
}

// Map slugs to dynamic imports of content modules
const ARTICLE_CONTENT: Record<string, () => Promise<{ meta: { title: string; description: string }; default: React.ComponentType }>> = {
  'california-fair-claims': () => import('@/lib/content/articles/california-fair-claims'),
  'policy-interpretation':  () => import('@/lib/content/articles/policy-interpretation'),
  'claims-process':         () => import('@/lib/content/articles/claims-process'),
  'contents-claims':        () => import('@/lib/content/articles/contents-claims'),
  'ale-frv':                () => import('@/lib/content/articles/ale-frv'),
  'appraisal':              () => import('@/lib/content/articles/appraisal'),
  'negotiation':            () => import('@/lib/content/articles/negotiation'),
  'bad-faith':              () => import('@/lib/content/articles/bad-faith'),
  'xactimate':              () => import('@/lib/content/articles/xactimate'),
  'public-adjuster':        () => import('@/lib/content/articles/public-adjuster'),
  'cdi-complaint':          () => import('@/lib/content/articles/cdi-complaint'),
  'exclusions':             () => import('@/lib/content/articles/exclusions'),
  'acv-rcv':                () => import('@/lib/content/articles/acv-rcv'),
  'proof-of-loss':          () => import('@/lib/content/articles/proof-of-loss'),
  'specialty-items':        () => import('@/lib/content/articles/specialty-items'),
  'mold-losses':            () => import('@/lib/content/articles/mold-losses'),
  'duties-after-loss':      () => import('@/lib/content/articles/duties-after-loss'),
  'ordinance-law':          () => import('@/lib/content/articles/ordinance-law'),
  'matching':               () => import('@/lib/content/articles/matching'),
  'coverage-disputes':      () => import('@/lib/content/articles/coverage-disputes'),
  'declarations-page':      () => import('@/lib/content/articles/declarations-page'),
  'vandalism-claims':       () => import('@/lib/content/articles/vandalism-claims'),
  'wildfire-guide':         () => import('@/lib/content/articles/wildfire-guide'),
  'scope-of-loss':          () => import('@/lib/content/articles/scope-of-loss'),
  'equitable-tolling':      () => import('@/lib/content/articles/equitable-tolling'),
  'debris-removal':         () => import('@/lib/content/articles/debris-removal'),
  'dealing-with-adjuster':  () => import('@/lib/content/articles/dealing-with-adjuster'),
  'total-loss':             () => import('@/lib/content/articles/total-loss'),
  'examination-under-oath': () => import('@/lib/content/articles/examination-under-oath'),
  'roof-damage':            () => import('@/lib/content/articles/roof-damage'),
  'public-adjuster-fees':   () => import('@/lib/content/articles/public-adjuster-fees'),
  'california-insurance-crisis': () => import('@/lib/content/articles/california-insurance-crisis'),
  'california-fair-plan':  () => import('@/lib/content/articles/california-fair-plan'),
  'smoke-damage-claims':   () => import('@/lib/content/articles/smoke-damage-claims'),
  'fire-claim-denied':     () => import('@/lib/content/articles/fire-claim-denied'),
  'force-placed-insurance': () => import('@/lib/content/articles/force-placed-insurance'),
  'first-offer-lowball':   () => import('@/lib/content/articles/first-offer-lowball'),
  'sb49-contents-rule':    () => import('@/lib/content/articles/sb49-contents-rule'),
  'underinsured-after-wildfire': () => import('@/lib/content/articles/underinsured-after-wildfire'),
  'overhead-and-profit':    () => import('@/lib/content/articles/overhead-and-profit'),
  'water-damage-claims':    () => import('@/lib/content/articles/water-damage-claims'),
  'right-to-repair':        () => import('@/lib/content/articles/right-to-repair'),
  'insurance-delay-tactics': () => import('@/lib/content/articles/insurance-delay-tactics'),
  'labor-depreciation':     () => import('@/lib/content/articles/labor-depreciation'),
  'supplemental-claims':    () => import('@/lib/content/articles/supplemental-claims'),
  'adjuster-types':         () => import('@/lib/content/articles/adjuster-types'),
  'policyholder-rights':    () => import('@/lib/content/articles/policyholder-rights'),
  'clue-database':          () => import('@/lib/content/articles/clue-database'),
  'coinsurance-penalty':    () => import('@/lib/content/articles/coinsurance-penalty'),
  'temporary-emergency-repairs': () => import('@/lib/content/articles/temporary-emergency-repairs'),
  'loss-of-use-maximizing': () => import('@/lib/content/articles/loss-of-use-maximizing'),
  'when-to-hire-attorney':  () => import('@/lib/content/articles/when-to-hire-attorney'),
  'california-claim-deadlines': () => import('@/lib/content/articles/california-claim-deadlines'),
  'hail-damage-claims':     () => import('@/lib/content/articles/hail-damage-claims'),
  'wind-damage-claims':     () => import('@/lib/content/articles/wind-damage-claims'),
  'choosing-your-contractor': () => import('@/lib/content/articles/choosing-your-contractor'),
  'recorded-statements-siu': () => import('@/lib/content/articles/recorded-statements-siu'),
  'claim-negotiation-letters': () => import('@/lib/content/articles/claim-negotiation-letters'),
  'inverse-condemnation':    () => import('@/lib/content/articles/inverse-condemnation'),
  'biased-insurance-experts': () => import('@/lib/content/articles/biased-insurance-experts'),
  'loss-settlement-provisions': () => import('@/lib/content/articles/loss-settlement-provisions'),
  'cosmetic-damage-denials': () => import('@/lib/content/articles/cosmetic-damage-denials'),
  'duty-to-investigate':     () => import('@/lib/content/articles/duty-to-investigate'),
  'insurance-mediation':     () => import('@/lib/content/articles/insurance-mediation'),
}

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = ARTICLE_META[slug]
  return meta
    ? { title: meta.title, description: meta.description }
    : { title: 'Resource Article' }
}

export function generateStaticParams() {
  return Object.keys(ARTICLE_META).map(slug => ({ slug }))
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const meta = ARTICLE_META[slug]
  const title = meta?.title ?? 'Resource Article'

  // Try to load article content
  const loader = ARTICLE_CONTENT[slug]
  if (loader) {
    try {
      const mod = await loader()
      const Content = mod.default
      return (
        <>
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: meta?.description,
            author: {
              '@type': 'Person',
              name: 'Leland Coontz III',
              jobTitle: 'Licensed Public Adjuster',
            },
            publisher: {
              '@type': 'Organization',
              name: 'InsuranceClaimsInfo.com',
              url: 'https://insuranceclaimsinfo.com',
            },
            mainEntityOfPage: `https://insuranceclaimsinfo.com/resources/${slug}`,
          }} />
          <ArticleLayout
            title={title}
            description={meta?.description}
            backLink={{ href: '/resources', label: 'Back to Resources' }}
          >
            <Content />
          </ArticleLayout>
        </>
      )
    } catch {
      // Fall through to "coming soon" placeholder
    }
  }

  // Coming soon fallback
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-3xl font-bold">{title}</h1>
          {meta?.description && (
            <p className="text-blue-200 mt-3">{meta.description}</p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-xl font-bold text-amber-900 mb-3">Full Guide Coming Soon</h2>
          <p className="text-amber-800 leading-relaxed mb-6">
            This article is being written. In the meantime, if you have questions about{' '}
            <strong>{title.toLowerCase()}</strong>, contact us for a free consultation —
            we&#39;re happy to answer questions about your specific situation.
          </p>
          <Link href="/contact" className="btn-primary">
            Ask a Question — Free →
          </Link>
        </div>

        <div className="mt-10 border-t pt-8">
          <h3 className="font-bold text-[#1F3964] mb-4">While You Wait — Use the Free Tool</h3>
          <Link href="/inventory" className="card flex items-center gap-4 hover:border-[#1F3964]">
            <span className="text-3xl">📋</span>
            <div>
              <p className="font-semibold text-[#1F3964]">Personal Property Inventory Tool</p>
              <p className="text-sm text-gray-600">3,750+ items, room by room. Free Excel download.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
