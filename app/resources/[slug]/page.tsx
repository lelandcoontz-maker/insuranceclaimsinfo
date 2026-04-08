import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { JsonLd } from '@/components/seo/JsonLd'

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  'california-fair-claims': { title: 'California Fair Claims Settlement Practices Regulations (10 CCR 2695)', description: 'A section-by-section analysis of California\'s Fair Claims Settlement Practices Regulations — every rule your insurer must follow on a property claim, explained in plain English.' },
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
  'commonly-missed-items': { title: 'Commonly Missed Items on Total Loss and Large Insurance Claims', description: 'A comprehensive checklist of items that adjusters and estimators routinely overlook on total loss and large property insurance claims. From low-voltage wiring and light bulbs to scribe moldings and pressure-treated sole plates — if it\'s not in the estimate, you\'re not getting paid for it.' },
  'multiple-reasons-to-replace': { title: 'Multiple Reasons to Replace: Don\'t Get Stuck Arguing One When You Have Seven', description: 'One of the biggest mistakes in insurance claim negotiation is arguing one reason for replacement when you have several. If only one of seven reasons is valid, the item may still need to be replaced. Learn how to avoid the tunnel-vision trap and use every argument available.' },
  'wear-and-tear-cause-of-loss': { title: 'Wear and Tear Is a Cause of Loss Exclusion — Not a Condition of Property Exclusion', description: 'The most misunderstood exclusion in property insurance. Your policy excludes wear and tear as a CAUSE OF LOSS — it does not exclude damage to property that happens to be worn. If wind blew the shingles off, wear and tear didn\'t cause the loss. Wind did.' },
  'defeating-carrier-engineers': { title: 'Defeating Carrier Engineer Reports on Roof Claims', description: 'When your insurance company sends a forensic engineer to deny your roof claim, you need to know how to fight back. Learn how carrier engineers operate, common report flaws, and how to build a winning rebuttal.' },
  'hail-damage-science':     { title: 'The Science of Hail Damage: Test Squares, Impact Patterns, and What Engineers Get Wrong', description: 'Understand the forensic science behind hail damage identification on roofs. Learn how test squares work, what distinguishes real hail impacts from other damage, and how to counter carrier engineer mischaracterizations.' },
  'pre-existing-vs-storm-damage': { title: 'Pre-Existing Damage vs. Storm Damage: Fighting the "Wear and Tear" Denial', description: 'Insurance companies routinely attribute storm damage to pre-existing conditions. Learn how to distinguish legitimate storm damage from wear and tear, build your evidence, and defeat the most common denial tactic in property insurance.' },
  'mortgage-company-holds': { title: 'Mortgage Company Holds on Insurance Proceeds: Getting Your Money Released', description: 'When your insurance company pays a dwelling claim, the check often has your mortgage lender\'s name on it. Learn how mortgage holds work, what lenders can and cannot do, and how to get your rebuild funds released.' },
  'post-disaster-scams': { title: 'Post-Disaster Fraud and Scams: Protecting Yourself After a Loss', description: 'After a disaster, scammers target vulnerable homeowners. Learn how to identify contractor fraud, unlicensed claim negotiators, deductible waiver schemes, and other common scams.' },
  'insurance-checks': { title: 'Insurance Checks: What to Do and What to Watch For', description: 'When you receive a check from your insurance company, don\'t just cash it blindly. Learn what restrictive language means, when it\'s safe to deposit, and how to protect your right to dispute.' },
  'thermal-heat-damage': { title: 'Thermal and Heat Damage from Nearby Wildfires: The Hidden Damage Your Insurer May Miss', description: 'Your home survived the wildfire — but it may still be damaged. Extreme heat can warp siding, compromise windows, damage wiring, and degrade roofing — all without direct flame contact.' },
  'marine-cargo-claims': { title: 'Marine Cargo Insurance Claims: Why Importers and Exporters Need a Public Adjuster', description: 'Marine cargo claims are among the most complex in property insurance. Carrier liability, marine surveyors, General Average, COGSA, and why a PA with trade expertise changes outcomes.' },
  'foreclosure-insurance-claims': { title: 'Insurance Claims on Properties in Foreclosure: Full Credit Bids and What They Mean for Your Money', description: 'What happens to your insurance claim when your property is in foreclosure? How full credit bids can extinguish the lender\'s right to your insurance proceeds — and how underbids preserve it.' },
  'personal-property-special-considerations': { title: 'Special Considerations for Certain Types of Personal Property', description: 'Electronics, Oriental rugs, and landscaping present unique property insurance challenges. Learn about surge damage documentation, rug valuations, and the tree sub-limit trap.' },
  'code-upgrade-coverage': { title: 'Law and Ordinance Coverage: Building Code Upgrades, Zoning, and the Hidden Gap in Your Property Claim', description: 'When building codes have changed since your home was built, repairs can cost far more than the insurer\'s estimate. Learn how law and ordinance coverage works in California — electrical, structural, Title 24, plumbing, and roofing code upgrades.' },
  'special-limits-of-liability': { title: 'Special Limits of Liability: The Silent Traps in Every Homeowner Policy', description: 'Your homeowner policy has hidden dollar caps on jewelry, firearms, coins, collectibles, and more. Learn about the sub-limits that silently reduce your claim — and how scheduling overcomes them.' },
  'mold-coverage-paradox': { title: 'The Mold Coverage Paradox: Covered, Excluded, and Everything In Between', description: 'Mold is simultaneously covered and excluded under most homeowner policies. Learn the cause-vs-result distinction, how to properly allocate costs between dwelling coverage and the mold sublimit, and stop leaving money on the table.' },
  'engineering-reports-vs-coverage': { title: 'When Engineering Reports Cross the Line: Why Physical Findings Don\'t Determine Coverage', description: 'Insurance companies use engineering reports to deny claims — but engineers determine how something was built, not whether it\'s covered. Learn the difference between engineering causation and legal causation under California law.' },
  'california-insurance-case-law': { title: 'Key California Insurance Case Law: Bad Faith, Coverage, and Appraisal', description: 'A practitioner\'s guide to the most important California insurance cases — from Gruenberg and Egan to Kacha and Lambert. Bad faith, coverage disputes, and appraisal law explained.' },
  'appraisal-practitioner-guide': { title: 'How and When to Invoke Appraisal in California: A Practitioner\'s Guide', description: 'A comprehensive practitioner\'s guide to California insurance appraisal — statutory basis, when to demand, panel roles, causation issues, post-award remedies, and what to do when the process goes wrong.' },
  'xactimate-user-manual': { title: 'The Xactimate User Manual: What It Is, Why It Matters, and How to Use It', description: 'A practitioner\'s guide to Xactimate — the industry-standard estimating software. Pricing database, line items, overhead and profit, depreciation, certification levels, and practical tips.' },
  'xactimate-training-guide': { title: 'Xactimate Training and Certification: What You Need to Know', description: 'A guide to Xactimate training and certification — what the certification levels mean, what quality training looks like, and why understanding the \'why\' behind the software matters more than passing a test.' },
  'where-you-reside-exclusion': { title: 'Where You Reside: The Hidden Killer Exclusion in Your Homeowner Policy', description: 'The three words \'where you reside\' in your homeowner policy definition can eliminate your coverage entirely — especially if you move to a nursing home. Learn how this hidden exclusion works and how to protect yourself.' },
  'surprising-coverages': { title: 'Surprising Coverages Most Policyholders Don\'t Know They Have', description: 'Your homeowner policy covers more than you think — gravestones, college dorm belongings, unlicensed farm vehicles, worker injuries, and more. Learn about the hidden coverages in your HO-3 policy.' },
  'vandalism-vs-wear-and-tear': { title: 'Vandalism Claims: Drawing the Line Between Intentional Damage and Wear and Tear', description: 'Vandalism is covered — wear and tear is not. Learn how courts define vandalism, the intent requirement, the marijuana grow operation cases, and how to fight \'wear and tear\' denials.' },
  'scoping-the-loss': { title: 'Scoping the Loss: A Field Manual for Property Claims Inspection', description: 'A comprehensive field manual for property claims inspection — tools, methodology, measuring equipment, thermal imaging, moisture meters, material identification, and systematic inspection protocol.' },
  'recording-insurance-inspections': { title: 'Can You Record Insurance Company Inspectors? A California Guide', description: 'California is a two-party consent state — but that doesn\'t mean you can\'t record the insurer\'s adjusters, engineers, and hygienists during a property inspection. Learn the law, the case law, and how to do it right.' },
  'policyholder-death-coverage': { title: 'What Happens to Your Insurance If the Policyholder Dies?', description: 'When the named insured dies before or during a claim, insurers sometimes deny coverage to surviving family members. Learn how the Death clause, insurable interest, and trust ownership affect your rights.' },
  'policy-vs-law': { title: 'Is Your Insurance Policy Illegal? When Policy Language Conflicts with California Law', description: 'A California court ruled the FAIR Plan\'s fire policy "unlawful." But the problem goes far beyond one insurer. Here are the ways your policy may conflict with California statutes, case law, and regulations — and why the law wins.' },
  'insurable-interest': { title: 'Insurable Interest and Life Estates: Why Your Trust Could Cost You a Full Claim Payment', description: 'When a home is transferred into a family trust with a retained life estate, the policyholder may only have a partial insurable interest — not the full value of the property. Learn how life estates are valued, what experts are needed, and the estate-planning mistake that can cost you hundreds of thousands of dollars.' },
  'excessive-depreciation': { title: 'Excessive Depreciation: How Insurance Companies Shortchange Your Claim and How to Fight Back', description: 'Insurance companies routinely apply excessive depreciation to reduce claim payments. Learn the rules they violate — no depreciation on labor, long-life components, or undamaged matching areas — and how to push back under California law.' },
  'mortgage-company-public-adjuster': { title: 'When a Mortgage Company Tries to Hire a Public Adjuster: Understanding the Legal Boundaries', description: 'The lender\'s loss payable endorsement, mortgagee rights, privacy laws, and why a mortgage company cannot hire a public adjuster unless it is an insured. A real-world case study.' },
  'wildfire-mudslide-coverage': { title: 'Mudslide After Wildfire: Why Earth Movement Is Covered When Fire Is the Cause', description: 'When a wildfire strips vegetation and the next rain triggers a mudslide, the earth movement exclusion does not apply. Learn how the efficient proximate cause doctrine and the California Department of Insurance protect policyholders.' },
  'fire-sprinkler-water-contamination': { title: 'Fire Sprinkler Water Damage: Why It\'s Worse Than You Think', description: 'Fire sprinkler water is not clean water. Stagnant sprinkler discharge contains bacteria, heavy metals, and biological contaminants that make it a Category 3 water loss requiring professional remediation.' },
  'sewage-contamination-mitigation-failure': { title: 'When the Insurance Company\'s Mitigation Contractor Makes Everything Worse', description: 'A real case study: how a mitigation contractor\'s failure to remove sewage-contaminated carpet under a cabinet led to whole-home contamination, the total loss of all personal property, and a fight over temporary housing.' },
  'biohazard-drywall-fraud-threat': { title: 'When a Death Scene Becomes a Battleground: How an Insurance Adjuster Tried to Punish a Contractor for Doing the Right Thing', description: 'A real case study: a mitigation contractor removed blood-contaminated drywall from a death scene, and the insurance adjuster threatened to report him for fraud. A certified industrial hygienist proved the adjuster wrong — but the contractor still paid the price.' },
  'blockage-vs-backup': { title: 'Blockage & Overflow vs. Sewer Backup: Why the Distinction Matters', description: 'A plumbing blockage that causes water to overflow from your fixtures is not a sewer backup. Learn the mechanical difference, why it matters for coverage, and what the courts have said.' },
  'insurance-code-790': { title: 'Insurance Code 790.03 and the 790 Letter: How to Put Your Insurer on Notice', description: 'California Insurance Code 790.03 defines unfair claims settlement practices. Learn what the statute prohibits, how to write a 790 letter putting your insurer on formal notice, and why this letter changes the dynamic of your claim.' },
  'environmental-sampling-methods': { title: 'Environmental Sampling Methods in Insurance Claims', description: 'Understanding wipe, microvacuum, tape lift, and air sampling methods used in property damage claims — and how carrier-assigned experts often get it wrong.' },
  'elder-abuse-insurance': { title: 'Elder Abuse Statutes in Insurance Claims: Enhanced Remedies for Elderly and Dependent Adult Policyholders', description: 'When insurance companies engage in bad faith against elderly or dependent adult policyholders, California\'s Elder Abuse and Dependent Adult Civil Protection Act unlocks enhanced remedies including attorney\'s fees, punitive damages, and survival actions.' },
  'third-party-vs-first-party': { title: 'Third-Party Claim vs. First-Party Claim: Which Strategy Is Right for Your Property Damage?', description: 'When someone else damages your property, should you pursue their insurance or file with your own? A detailed comparison of both strategies — the pros, cons, and when to pivot.' },
  'caci-jury-instructions-insurance': { title: 'CACI Jury Instructions for Insurance Litigation in California', description: 'What CACI jury instructions are, how they relate to case law, whether they have the force of law, and why the Series 2300 insurance litigation instructions matter when policyholders sue their insurance company.' },
  'efficient-proximate-cause': { title: 'The Efficient Proximate Cause Doctrine: When Your Insurer Blames an Excluded Cause for a Covered Loss', description: 'California\'s efficient proximate cause doctrine requires insurers to cover a loss when a covered peril set the chain of events in motion, even if an excluded peril contributed. Learn the landmark cases, the Insurance Code, and how this doctrine works through a real-world case study.' },
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
  'commonly-missed-items': () => import('@/lib/content/articles/commonly-missed-items'),
  'multiple-reasons-to-replace': () => import('@/lib/content/articles/multiple-reasons-to-replace'),
  'wear-and-tear-cause-of-loss': () => import('@/lib/content/articles/wear-and-tear-cause-of-loss'),
  'defeating-carrier-engineers': () => import('@/lib/content/articles/defeating-carrier-engineers'),
  'hail-damage-science':     () => import('@/lib/content/articles/hail-damage-science'),
  'pre-existing-vs-storm-damage': () => import('@/lib/content/articles/pre-existing-vs-storm-damage'),
  'mortgage-company-holds': () => import('@/lib/content/articles/mortgage-company-holds'),
  'post-disaster-scams': () => import('@/lib/content/articles/post-disaster-scams'),
  'insurance-checks': () => import('@/lib/content/articles/insurance-checks'),
  'thermal-heat-damage': () => import('@/lib/content/articles/thermal-heat-damage'),
  'marine-cargo-claims': () => import('@/lib/content/articles/marine-cargo-claims'),
  'foreclosure-insurance-claims': () => import('@/lib/content/articles/foreclosure-insurance-claims'),
  'personal-property-special-considerations': () => import('@/lib/content/articles/personal-property-special-considerations'),
  'code-upgrade-coverage': () => import('@/lib/content/articles/code-upgrade-coverage'),
  'special-limits-of-liability': () => import('@/lib/content/articles/special-limits-of-liability'),
  'mold-coverage-paradox': () => import('@/lib/content/articles/mold-coverage-paradox'),
  'engineering-reports-vs-coverage': () => import('@/lib/content/articles/engineering-reports-vs-coverage'),
  'california-insurance-case-law': () => import('@/lib/content/articles/california-insurance-case-law'),
  'appraisal-practitioner-guide': () => import('@/lib/content/articles/appraisal-practitioner-guide'),
  'xactimate-user-manual': () => import('@/lib/content/articles/xactimate-user-manual'),
  'xactimate-training-guide': () => import('@/lib/content/articles/xactimate-training-guide'),
  'where-you-reside-exclusion': () => import('@/lib/content/articles/where-you-reside-exclusion'),
  'surprising-coverages': () => import('@/lib/content/articles/surprising-coverages'),
  'vandalism-vs-wear-and-tear': () => import('@/lib/content/articles/vandalism-vs-wear-and-tear'),
  'scoping-the-loss': () => import('@/lib/content/articles/scoping-the-loss'),
  'recording-insurance-inspections': () => import('@/lib/content/articles/recording-insurance-inspections'),
  'policyholder-death-coverage': () => import('@/lib/content/articles/policyholder-death-coverage'),
  'policy-vs-law': () => import('@/lib/content/articles/policy-vs-law'),
  'insurable-interest': () => import('@/lib/content/articles/insurable-interest'),
  'excessive-depreciation': () => import('@/lib/content/articles/excessive-depreciation'),
  'mortgage-company-public-adjuster': () => import('@/lib/content/articles/mortgage-company-public-adjuster'),
  'wildfire-mudslide-coverage': () => import('@/lib/content/articles/wildfire-mudslide-coverage'),
  'fire-sprinkler-water-contamination': () => import('@/lib/content/articles/fire-sprinkler-water-contamination'),
  'sewage-contamination-mitigation-failure': () => import('@/lib/content/articles/sewage-contamination-mitigation-failure'),
  'biohazard-drywall-fraud-threat': () => import('@/lib/content/articles/biohazard-drywall-fraud-threat'),
  'blockage-vs-backup': () => import('@/lib/content/articles/blockage-vs-backup'),
  'insurance-code-790': () => import('@/lib/content/articles/insurance-code-790'),
  'environmental-sampling-methods': () => import('@/lib/content/articles/environmental-sampling-methods'),
  'elder-abuse-insurance': () => import('@/lib/content/articles/elder-abuse-insurance'),
  'third-party-vs-first-party': () => import('@/lib/content/articles/third-party-vs-first-party'),
  'caci-jury-instructions-insurance': () => import('@/lib/content/articles/caci-jury-instructions-insurance'),
  'efficient-proximate-cause': () => import('@/lib/content/articles/efficient-proximate-cause'),
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
