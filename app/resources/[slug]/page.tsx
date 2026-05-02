import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/content/ArticleLayout'
import { RelatedArticles } from '@/components/content/RelatedArticles'
import { JsonLd } from '@/components/seo/JsonLd'

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  'california-fair-claims': { title: 'California Fair Claims Settlement Practices Regulations (10 CCR 2695)', description: 'A section-by-section analysis of California\'s Fair Claims Settlement Practices Regulations — every rule your insurer must follow on a property claim, explained in plain English.' },
  'policy-types-overview':  { title: 'Types of Insurance Policies: A Complete Guide to Residential, Commercial, and Specialty Coverage', description: 'A comprehensive overview of every major property insurance policy type — HO-3, HO-4, HO-5, HO-6, HO-8, dwelling fire, commercial property, businessowners, flood, earthquake, DIC, builder\'s risk, and inland marine.' },
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
  'vandalism-claims':       { title: 'Vandalism Claims: When Insurers Call It Wear and Tear', description: 'How to prove vandalism and push back when insurers relabel your claim as wear and tear.' },
  'wildfire-guide':         { title: 'California Wildfire Claims: A Complete Guide', description: 'Forest fire vs urban wildfire smoke, contamination testing, coverage, and step-by-step wildfire claims guidance.' },
  'scope-of-loss':          { title: 'Scope of Loss Disputes: When the Adjuster Misses Damage', description: 'When the insurer\'s scope misses damage — how to document and dispute.' },
  'equitable-tolling':      { title: 'Equitable Tolling of the Statute of Limitations', description: 'The one-year suit limitation is not as simple as it appears. Learn how equitable tolling pauses the clock while your insurer investigates.' },
  'debris-removal':         { title: 'Debris Removal Coverage — More Than Just the Dwelling', description: 'Debris removal coverage applies to more than the dwelling. Learn how it works for other structures, trees, and personal property — and how to maximize your recovery.' },
  'dealing-with-adjuster':  { title: 'How to Deal with the Insurance Company\'s Adjuster', description: 'What to expect when the insurer sends their adjuster, your rights during the inspection, common tactics to watch for, and when to get professional help.' },
  'total-loss':             { title: 'Total Loss Insurance Claims — When Your Home Is a Complete Loss', description: 'A comprehensive guide to total loss insurance claims in California — every coverage that activates, rebuilding vs. cashing out, contents claims, common problems, and California-specific protections.' },
  'examination-under-oath': { title: 'Examination Under Oath (EUO) — What It Is and How to Prepare', description: 'What an Examination Under Oath is, when insurers request one, your rights, how to prepare, and what to expect — written by a California Licensed Public Adjuster.' },
  'roof-damage':            { title: 'Roof Damage Insurance Claims in California', description: 'How to handle a roof damage insurance claim in California — common causes, what\'s covered, insurer inspections, matching disputes, and how to get the full settlement you\'re owed.' },
  'public-adjuster-fees':   { title: 'Public Adjuster Fees — What They Cost and When They\'re Worth It', description: 'How Public Adjuster fees work in California — contingency percentages, the disaster fee cap, when hiring a PA is worth it, and questions to ask before signing.' },
  'california-insurance-crisis': { title: 'California\'s Insurance Crisis: What Homeowners Need to Know', description: 'Why California insurers are cancelling policies, leaving the market, and raising rates — and what homeowners can do to protect themselves.' },
  'california-fair-plan':  { title: 'The California FAIR Plan: What It Covers, What It Doesn\'t, and How to Apply', description: 'A complete guide to the California FAIR Plan — the insurer of last resort for homeowners who can\'t get coverage in the private market.' },
  'smoke-damage-claims':   { title: 'Smoke Damage Insurance Claims in California', description: 'How to handle a smoke damage insurance claim — testing, remediation standards, coverage, the new Smoke Damage Recovery Act, and common insurer tactics.' },
  'fire-claim-denied':     { title: 'Fire Damage Insurance Claim Denied? Here\'s What to Do', description: 'What to do when your fire damage insurance claim is denied or underpaid — common denial reasons, your appeal rights, and how to fight back under California law.' },
  'force-placed-insurance': { title: 'Force-Placed Insurance: What It Is and Why It\'s a Problem', description: 'What happens when your mortgage lender force-places insurance on your property — what it covers, what it doesn\'t, and how to avoid it.' },
  'first-offer-lowball':   { title: 'Why You Should Never Accept the Insurer\'s First Offer', description: 'Why the insurance company\'s initial settlement offer is almost always too low — and how to respond to get a fair payout.' },
  'sb49-contents-rule':    { title: 'SB 495: California\'s New Contents Payment Rule for Disaster Victims', description: 'How SB 495 changes personal property claims after declared disasters — automatic 60% contents payments, no inventory required for 100 days.' },
  'underinsured-after-wildfire': { title: 'Underinsured After a Wildfire: What to Do When Your Policy Isn\'t Enough', description: 'Why so many California homeowners are underinsured after a wildfire — and strategies to maximize recovery when your policy limits fall short.' },
  'overhead-and-profit':    { title: 'Overhead & Profit: When Your Claim Should Include O&P', description: 'Insurance companies routinely refuse to include overhead and profit in their estimates. Learn what O&P is, when you\'re entitled to it, and how to fight for it.' },
  'water-damage-claims':    { title: 'Water Damage Insurance Claims: A Complete Guide', description: 'How to handle water damage insurance claims — from emergency response to final settlement.' },
  'accidental-discharge-overflow': { title: 'Accidental Discharge or Overflow: The Most Important Water Damage Peril in Your Policy', description: 'A detailed guide to the accidental discharge or overflow peril in homeowners insurance — the ISO HO-3 language, the 14-day endorsement trap, tear-out coverage, carrier denial tactics, and how to fight for full payment.' },
  'right-to-repair':        { title: 'Right to Repair Clauses: Your Rights When the Carrier Sends Their Contractor', description: 'Insurance companies increasingly use right to repair clauses to control repairs.' },
  'insurance-delay-tactics': { title: 'Insurance Company Delay Tactics and Your Rights', description: 'How insurance companies use delay to pressure you into accepting less.' },
  'labor-depreciation':     { title: 'Labor Depreciation: Why Your Insurance Company Can\'t Depreciate Work Costs', description: 'A growing number of states have ruled that insurance companies cannot depreciate labor.' },
  'supplemental-claims':    { title: 'Filing Supplemental Claims: Getting Paid for What They Missed', description: 'How to file a supplement when the insurance company\'s estimate missed damage.' },
  'adjuster-types':         { title: 'Types of Insurance Adjusters: Who You\'re Really Dealing With', description: 'Staff adjusters, independent adjusters, desk adjusters, Public Adjusters — learn who each one works for.' },
  'policyholder-rights':    { title: 'Know Your Rights as a Policyholder', description: 'Your insurance company has obligations under the policy, state law, and regulations.' },
  'clue-database':          { title: 'The CLUE Database: How Your Claims History Follows You', description: 'What the CLUE database is and how insurance companies use it against you.' },
  'coinsurance-penalty':    { title: 'Coinsurance Penalties: When Being Underinsured Costs You Extra', description: 'What coinsurance is and how the penalty works.' },
  'agreed-value-policies':  { title: 'Agreed Value vs. Stated Value vs. Replacement Cost: Three Valuation Methods That Are Not the Same', description: 'Agreed value, stated value, and replacement cost are three different insurance valuation methods. Understanding the differences determines whether your claim gets paid in full or reduced.' },
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
  'california-appraisal-case-law': { title: 'California Appraisal Case Law and the Arbitration Code: What Policyholders Need to Know', description: 'Key California case law on insurance appraisal — Sharma, Kacha, Lee, Doan, Lambert, Mahnke — and the California Arbitration Code provisions that apply to every appraisal proceeding in the state.' },
  'xactimate-user-manual': { title: 'The Xactimate User Manual: What It Is, Why It Matters, and How to Use It', description: 'A practitioner\'s guide to Xactimate — the industry-standard estimating software. Pricing database, line items, overhead and profit, depreciation, certification levels, and practical tips.' },
  'xactimate-training-guide': { title: 'Xactimate Training and Certification: What You Need to Know', description: 'A guide to Xactimate training and certification — what the certification levels mean, what quality training looks like, and why understanding the \'why\' behind the software matters more than passing a test.' },
  'where-you-reside-exclusion': { title: 'Where You Reside: The Hidden Killer Exclusion in Your Homeowner Policy', description: 'The three words \'where you reside\' in your homeowner policy definition can eliminate your coverage entirely — especially if you move to a nursing home. Learn how this hidden exclusion works and how to protect yourself.' },
  'surprising-coverages': { title: 'Surprising Coverages Most Policyholders Don\'t Know They Have', description: 'Your homeowner policy covers more than you think — gravestones, college dorm belongings, unlicensed farm vehicles, worker injuries, and more. Learn about the hidden coverages in your HO-3 policy.' },
  'vandalism-vs-wear-and-tear': { title: 'Vandalism Claims: When Insurers Call It Wear and Tear', description: 'How to handle vandalism insurance claims, push back when insurers mischaracterize vandalism as wear and tear, and document damage from break-ins, marijuana grows, and tenant destruction.' },
  'scoping-the-loss': { title: 'Scoping the Loss: A Field Manual for Property Claims Inspection', description: 'A comprehensive field manual for property claims inspection — tools, methodology, measuring equipment, thermal imaging, moisture meters, material identification, and systematic inspection protocol.' },
  'recording-insurance-inspections': { title: 'Can You Record Insurance Company Inspectors? A California Guide', description: 'California is a two-party consent state — but that doesn\'t mean you can\'t record the insurer\'s adjusters, engineers, and hygienists during a property inspection. Learn the law, the case law, and how to do it right.' },
  'policyholder-death-coverage': { title: 'What Happens to Your Insurance If the Policyholder Dies?', description: 'When the named insured dies before or during a claim, insurers sometimes deny coverage to surviving family members. Learn how the Death clause, insurable interest, and trust ownership affect your rights.' },
  'policy-vs-law': { title: 'Is Your Insurance Policy Illegal? When Policy Language Conflicts with California Law', description: 'A California court ruled the FAIR Plan\'s fire policy "unlawful." But the problem goes far beyond one insurer. Here are the ways your policy may conflict with California statutes, case law, and regulations — and why the law wins.' },
  'insurable-interest': { title: 'Insurable Interest and Life Estates: Why Your Trust Could Cost You a Full Claim Payment', description: 'When a home is transferred into a family trust with a retained life estate, the policyholder may only have a partial insurable interest — not the full value of the property. Learn how life estates are valued, what experts are needed, and the estate-planning mistake that can cost you hundreds of thousands of dollars.' },
  'excessive-depreciation': { title: 'Excessive Depreciation: How Insurance Companies Shortchange Your Claim and How to Fight Back', description: 'Insurance companies routinely apply excessive depreciation to reduce claim payments. Learn the rules they violate — no depreciation on labor, long-life components, or undamaged matching areas — and how to push back under California law.' },
  'mortgage-company-public-adjuster': { title: 'When a Mortgage Company Tries to Hire a Public Adjuster: Understanding the Legal Boundaries', description: 'The lender\'s loss payable endorsement, mortgagee rights, privacy laws, and why a mortgage company cannot hire a Public Adjuster unless it is an insured. A real-world case study.' },
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
  'white-waiver': { title: 'The White Waiver: California\'s Settlement-Privilege Waiver Explained', description: 'What the California White waiver is, where it comes from (White v. Western Title, 1985), why insurers ask you to sign one, and what to do when presented with one.' },
  'silica-contamination': { title: 'Silica Contamination in Property Insurance Claims: What You Need to Know', description: 'Crystalline silica exposure during property damage repairs is a serious OSHA-regulated hazard. Learn what silica is, why it matters for your insurance claim, and what remediation your insurer should be paying for.' },
  'replacement-cost-vs-guaranteed': { title: 'Replacement Cost vs. 100% Replacement Cost (Guaranteed, Extended, or Unlimited): The Difference That Could Cost You Hundreds of Thousands', description: 'Standard replacement cost, extended replacement cost, and guaranteed (100% or unlimited) replacement cost are not the same thing. Learn how each one works, what California law requires, and why the distinction matters most after a disaster.' },
  'vacancy-unoccupancy': { title: 'Vacancy and Unoccupancy Clauses: How an Empty Home Can Cost You Your Coverage', description: 'Vacancy and unoccupancy clauses can eliminate coverage for vandalism, fire, and other perils if your home is empty too long. Learn the critical difference between vacant and unoccupied.' },
  'pair-and-set': { title: 'Pair and Set Clauses in Property Insurance: What Happens When Only Part of a Match Is Destroyed', description: 'Understand the pair and set clause in your homeowner policy, how it applies to jewelry, furniture, cabinets, and building components, and how California matching regulations protect policyholders.' },
  'condo-hoa-claims': { title: 'Condo and HOA Insurance Claims: Master Policy, HO-6, and the Coverage Gap Nobody Explains', description: 'Two policies cover your condo — the HOA master policy and your HO-6. Learn how CC&Rs determine who pays for what, the tenant improvement trap, and what to do when the HOA refuses to act.' },
  'loss-assessment-coverage': { title: 'Loss Assessment Coverage: Why $1,000 Is Not Enough for Condo and HOA Owners', description: 'Loss assessment coverage pays your share of HOA special assessments after a covered loss. Learn why the default $1,000 limit is dangerously inadequate in California.' },
  'subrogation': { title: 'Subrogation in Property Insurance: Your Right to Recover What the Insurer Won\'t', description: 'How subrogation works in California property insurance claims, your insurer\'s duty to notify you, deductible recovery, the made-whole doctrine, and what happens when the insurance company sits on its hands.' },
  'anti-concurrent-causation': { title: 'Anti-Concurrent Causation Clauses: What They Are, Why They Matter, and Why California Ignores Them', description: 'Anti-concurrent causation clauses let insurers deny claims when any excluded peril contributes. In California, these clauses are unenforceable under the efficient proximate cause doctrine.' },
  'ensuing-loss': { title: 'Ensuing Loss: The Clause Your Insurer Hopes You Never Read', description: 'The ensuing loss savings clause can restore coverage for damage caused by an excluded peril. Carriers routinely leave it out of denial letters. Learn what ensuing loss means, how it works in California alongside the efficient proximate cause doctrine, and how it differs from concurrent causation.' },
  'assignment-of-benefits': { title: 'Assignment of Benefits, Work Authorizations, and Claims After Selling Your Home', description: 'How insurance claim assignments work — work authorizations, direction of payment, preferred vendors, selling a damaged home, and protecting your rights when someone else has a stake in your claim.' },
  'building-permits-claims': { title: 'Building Permits and Insurance Claims: What Your Insurer Owes and When', description: 'The insurance company owes for building permits even if they haven\'t been pulled. How to calculate permit fees, the insurer\'s good-faith obligation, and items that actually must be incurred.' },
  'earthquake-insurance': { title: 'Earthquake Insurance in California: CEA, Private Carriers, and What You Need to Know', description: 'You can buy earthquake insurance from private carriers, not just the CEA. How claims are handled, deductible structures, and why your choice of carrier matters.' },
  'flood-insurance-nfip-vs-private': { title: 'Flood Insurance: NFIP vs. Private Flood — The Legal Difference That Changes Everything', description: 'Private flood carriers often use the NFIP form but adjust claims under state law, not federal. More consumer protections, bad faith remedies, and flexible proof of loss rules.' },
  'lightning-damage': { title: 'Lightning Damage Insurance Claims: Hidden Wiring Damage, Breakers, and the Power Surge Trap', description: 'Lightning damage goes far beyond what you can see. Hidden wiring damage, failed breakers, destroyed low-voltage systems, and why insurers try to reclassify lightning as a power surge.' },
  'foundation-damage': { title: 'Foundation Damage Insurance Claims: Earth Movement, Efficient Proximate Cause, and Repair Methods', description: 'When a water leak causes foundation settlement, the earth movement exclusion may not apply. Heaving vs. settlement, repair methods, and key California case law.' },
  'landlord-vs-tenant-claims': { title: 'Landlord vs. Tenant Insurance Claims: Who Files What, Coverage Gaps, and How to Avoid Getting Caught in the Middle', description: 'Understanding landlord DP-3 and tenant HO-4 policies, who files which claim, how coverage gaps leave damage unpaid, subrogation risks, and practical steps for coordinating two separate insurance claims on the same property.' },
  'reserves-and-authority': { title: 'Insurance Reserves and Adjuster Authority Levels: What Policyholders Should Know', description: 'How insurance company reserves work, what adjuster authority levels mean for your claim, and why your claim may be reassigned to a different adjuster as damages increase.' },
  'social-media-claims': { title: 'Social Media and Insurance Claims: What Policyholders Need to Know', description: 'How insurance companies use social media, satellite imagery, and digital evidence to investigate property claims — and what policyholders should know to protect themselves.' },
  'swimming-pool-damage': { title: 'Swimming Pool Damage Insurance Claims: Coverage, Exclusions, and How to Maximize Your Recovery', description: 'How swimming pool damage is covered under homeowners insurance — Coverage B limits, scheduled endorsements, coverage stacking, pool pop-outs, wildfire ash damage, freeze damage, equipment breakdown, and common insurer disputes.' },
  'roofing-systems-claims': { title: 'Roofing Systems and Materials: A Deep Dive for Insurance Claims', description: 'Technical guide to roofing types — TPO, EPDM, metal, asphalt shingles, and wood shake — and the claim issues each creates. California Title 24 cool roof requirements, multiple layers, space decking conversions, and solar panel complications.' },
  'equitable-tolling-nuances': { title: 'Equitable Tolling Edge Cases: When the Statute of Limitations Gets Complicated', description: 'A deep dive into the tricky edge cases of equitable tolling in California insurance claims — closed files without notice, partial closures, claim reopening, clock calculations, and strategic moves to preserve your right to sue.' },
  'hailstone-damage-research': { title: 'What Hailstone Research Tells Us About Insurance Claims', description: 'IBHS research on 2,500+ hailstones proves hail damage is far more complex than insurers claim. Real hailstones are not perfect spheres, maximum sizes far exceed the average, and lab tests overstate impact force.' },
  'sub-severe-hail-cumulative-damage': { title: 'Sub-Severe Hail: Why Small Hailstones Cause Big Problems', description: 'IBHS research proves shingles hit by small hail become ten times more vulnerable to future storms. Your insurer cannot dismiss too-small hail.' },
  'hail-damage-threshold-sizes': { title: 'Hail Damage Thresholds: What Size Hail Actually Damages Your Roof', description: 'Haag Engineering research establishes the minimum hail sizes needed to damage common roofing materials - the same thresholds insurers use internally.' },
  'ricowi-hail-field-investigations': { title: 'RICOWI Field Investigations: What Hail Actually Does to Roofs', description: 'The Roofing Industry Committee on Weather Issues sends expert teams to document real hail damage after major storms. Their findings often contradict carrier assessments.' },
  'nist-camp-fire-investigation': { title: 'NIST Camp Fire Investigation: What Government Scientists Found', description: 'NIST investigation of the 2018 Camp Fire - which destroyed over 19,000 structures - reveals how wildfire damages buildings and why insurers underestimate repair costs.' },
  'nist-witch-fire-case-study': { title: 'NIST Witch Fire Study: House-by-House Wildfire Damage Analysis', description: 'NIST documented 274 homes after the 2007 Witch Fire, proving that wildfire damage depends on exposure conditions - not just whether flames reached the structure.' },
  'nist-wui-hazard-methodology': { title: 'The WUI Hazard Scale: How Scientists Measure Wildfire Risk to Buildings', description: 'NIST, CAL FIRE, and IBHS developed a science-based framework for measuring wildfire exposure. It proves damage depends on measurable conditions, not guesswork.' },
  'epa-mold-remediation-guide': { title: 'EPA Mold Remediation Guide: The Standard Your Insurer Should Follow', description: 'The EPA official mold remediation guide establishes the 24-48 hour mold growth timeline and remediation protocols that insurers are required to follow.' },
  'mold-growth-prediction-research': { title: 'Mold Growth Science: How Fast Does Mold Really Develop?', description: 'Research from VTT and Oak Ridge National Laboratory establishes mathematical models for mold growth rates - the science insurers hope you never see.' },
  'nfip-sandy-claims-underpayment': { title: 'Government Report: 80% of Sandy Flood Appeals Got More Money', description: 'The Department of Homeland Security found that nearly 80% of NFIP Sandy claims appeals resulted in additional payments - proving systematic initial underpayment.' },
  'fema-nfip-oversight-failures': { title: 'Government Report: FEMA Fails to Oversee Flood Insurance Companies', description: 'The DHS Inspector General found FEMA does not adequately oversee the companies handling flood insurance claims - leaving policyholders without protection.' },
  'reservation-of-rights': { title: 'Reservation of Rights Letters: What They Mean and How to Respond', description: 'What a reservation of rights letter means for your insurance claim, why carriers send them, how to respond, and when an ROR letter signals potential bad faith under California law.' },
  'deductibles-guide': { title: 'Insurance Deductibles: Types, Calculations, and When They\'re Misapplied', description: 'A complete guide to insurance deductibles — flat dollar, percentage-based, earthquake, wind/hurricane, how they interact with ACV and depreciation, and how to spot when your carrier has misapplied yours.' },
  'vehicle-impact-claims': { title: 'Vehicle Impact Insurance Claims: When a Car Hits Your Building', description: 'How to handle an insurance claim when a vehicle strikes your home or commercial building — first-party vs. third-party strategies, scope disputes, engineering assessments, code upgrades, loss of use, and subrogation.' },
  'betterment-and-improvement': { title: 'Betterment and Improvement: When Your Insurer Demands You Pay the Difference', description: 'Learn when insurance companies can legitimately apply betterment deductions, when they misuse them to underpay claims, and how California law protects policyholders from improper betterment charges.' },
  'nonrenewal-cancellation': { title: 'Insurance Non-Renewal and Cancellation in California: Your Rights When Your Carrier Drops You', description: 'California law gives homeowners significant protections when an insurer cancels or non-renews their policy. Learn the notice requirements, moratorium rules, and your options when your carrier drops you.' },
  'catastrophe-claims': { title: 'Catastrophe Claims: Why Disaster Claims Are Handled Differently and What It Means for You', description: 'Catastrophe claims are processed faster, by less experienced adjusters, under enormous volume pressure. Learn why CAT claims are chronically underpaid and what you can do about it.' },
  'tenant-landlord-claims': { title: 'Tenant vs. Landlord Insurance Claims: Who Files, Who Pays, and Who Gets Left Out', description: 'Landlord policies and renter\'s policies cover different things. When a loss occurs at a rental property, who files for what? Learn the coverage gaps, CA Civil Code duties, and how to avoid being the one left without a check.' },
  'construction-defect-claims': { title: 'Construction Defects and Insurance Claims in California: The Right to Repair Act and Beyond', description: 'Construction defects are excluded from most property insurance policies, but the resulting damage often is not. Learn how California\'s SB 800 Right to Repair Act, the ensuing loss doctrine, and the efficient proximate cause doctrine interact to determine coverage for defect-related property damage.' },
  'business-interruption': { title: 'Business Interruption Insurance Claims: Recovering Lost Income After Property Damage', description: 'Business interruption coverage pays for income you lose when property damage shuts down your operations. Learn how the period of restoration works, how carriers minimize projections, and what California law requires of commercial insurers.' },
  'contents-inventory-guide': { title: 'How to Document a Contents Inventory After a Total Loss', description: 'A step-by-step guide for policyholders who have lost everything in a fire or disaster. How to build a room-by-room personal property inventory, establish replacement values, and maximize your contents claim under California law.' },
  'pool-spa-claims': { title: 'Swimming Pool and Spa Insurance Claims: Coverage, Exclusions, and Common Disputes', description: 'How swimming pools and spas are covered under homeowners insurance in California — Coverage B limits, equipment breakdown endorsements, earth movement disputes, freeze damage, resurfacing fights, and the efficient proximate cause doctrine.' },
  'asbestos-lead-claims': { title: 'Asbestos and Lead Paint in Insurance Claims: How They Increase Repair Costs and Who Pays', description: 'When a covered loss requires disturbing asbestos or lead paint, abatement costs are part of the repair — not betterment. Learn the CA regulations, EPA rules, AQMD requirements, and how to include abatement costs in your insurance claim from day one.' },
  'polybutylene-cpvc-pipes': { title: 'Polybutylene and CPVC Pipe Failures: The Plumbing Time Bombs in Your Walls', description: 'Polybutylene and CPVC pipes fail without warning, causing catastrophic water damage. Learn how these pipe types affect insurance claims in California — coverage analysis, ensuing loss, code upgrades, and the sudden vs. gradual dispute.' },
  'adjuster-compensation': { title: 'How Insurance Adjusters Get Paid: Compensation Models and Why They Matter for Your Claim', description: 'Staff adjusters, independent adjusters, and Public Adjusters are all paid differently — and those compensation models create different incentives on your claim. Learn how adjuster pay works and what it means for you.' },
  'slab-leak-claims': { title: 'Slab Leak Insurance Claims: Hidden Damage, Fill Dirt, and the Underground Pipe Myth', description: 'Why a slab leak causes far more damage than the surface reveals, why the \'underground pipe\' exclusion usually doesn\'t apply, and how to fight for full coverage on your slab leak insurance claim in California.' },
  'theft-burglary-claims': { title: 'Theft and Burglary Insurance Claims: What Policyholders Need to Know', description: 'A comprehensive guide to filing theft and burglary claims under homeowner insurance policies. Covers Coverage A, B, and C, sublimits, mysterious disappearance, vacancy exclusions, SIU investigations, and California-specific rules.' },
  'dic-policies': { title: 'Difference in Conditions (DIC) Insurance: The Policy That Makes the FAIR Plan Work', description: 'What a DIC policy is, how it coordinates with the California FAIR Plan, what it covers, and the catastrophic mistake of dropping your underlying fire coverage.' },
  'glass-breakage-claims': { title: 'Glass Breakage Insurance Claims: Coverage, Exclusions, and the Arguments Carriers Hope You Never Make', description: 'How glass breakage is covered under homeowner and commercial policies, the vandalism glass exclusion, tempered glass code upgrades, thermal stress denials, and creative coverage arguments your adjuster should know.' },
  'collapse-coverage': { title: 'Collapse Coverage in Homeowner Insurance: The Hidden Additional Coverage Carriers Hope You Overlook', description: 'Collapse coverage is not a basic peril in the HO-3 — it is an Additional Coverage with strict qualifying causes. Learn how carriers define collapse, why the definition matters, and how California policyholders can fight denials.' },
  'animal-pest-damage': { title: 'Animal and Pest Damage Insurance Claims: What Is Covered and What Is Not', description: 'How animal and pest damage is handled under homeowner insurance policies in California — the rodent exclusion, raccoon contamination, resulting damage doctrine, and how to fight common denials.' },
  'stucco-eifs-claims': { title: 'Stucco and EIFS Insurance Claims: Traditional Plaster vs. Synthetic Stucco in California', description: 'Traditional stucco and EIFS are completely different systems with different failure modes, coverage issues, and repair requirements. Learn how each one affects your insurance claim.' },
  'soft-costs-claims': { title: 'Soft Costs in Insurance Claims: The Hidden Expenses Carriers Strip From Your Estimate', description: 'Soft costs like engineering fees, permits, supervision, and design services can add 15-25% to a claim. Learn what they are, why carriers fight them, and how to recover every dollar you are owed.' },
  'tree-falling-object-damage': { title: 'Tree and Falling Object Damage Insurance Claims', description: 'How homeowners insurance covers tree damage, falling objects, branch impacts, and debris removal — who pays, coverage limits, carrier tactics, and how to maximize your claim.' },
  'carrier-claims-tactics': { title: 'How Insurance Carriers Systematically Underpay Claims: The Consulting Industry Behind It', description: 'The documented history of how McKinsey & Company and other consulting firms redesigned insurance claims handling to maximize carrier profits at the expense of policyholders.' },
  'scheduled-personal-property': { title: 'Scheduled Personal Property, Floaters & Exotic Item Coverage', description: 'How to schedule high-value items on your insurance policy, what personal articles floaters cover, and how to insure exotic items like racehorses, collector cars, fine art, and appreciating collectibles.' },
  'large-commercial-losses': { title: 'Large and Complex Commercial Property Insurance Losses', description: 'How large commercial property claims differ from residential losses, what coverage parts are triggered, how carriers staff them differently, and why professional representation is critical on claims exceeding $500,000.' },
  'earth-movement-landslide': { title: 'Earth Movement and Landslide: When the Exclusion Does Not Apply', description: 'Earth movement is excluded from standard homeowner policies — but not when it results from wildfire, vehicle impact, or water discharge. California\'s efficient proximate cause doctrine changes everything.' },
  'disaster-preparedness': { title: 'Disaster Preparedness and Pre-Loss Mitigation: What Your Insurance Actually Covers', description: 'Your insurance policy may reimburse mitigation efforts before and during a disaster. Learn what\'s covered, how to document your property, and how to prepare for a claim before one happens.' },
  'builders-risk': { title: 'Builder\'s Risk Insurance: Coverage During Construction, Renovation, and Remodeling', description: 'What builder\'s risk insurance covers, who needs it, common claim scenarios, soft costs, and how to avoid coverage gaps during construction projects.' },
  'inland-marine': { title: 'Inland Marine Insurance: Not What You Think It Is', description: 'Inland marine insurance has nothing to do with water. It covers specialized, mobile, and high-value property — from cell towers and bridges to contractor equipment and fine art floaters.' },
  'crop-agricultural-insurance': { title: 'Crop and Agricultural Insurance Claims in California', description: 'How crop insurance works in the nation\'s largest agricultural state — federal MPCI, revenue protection, smoke taint on wine grapes, livestock mortality, and why these claims can exceed $1 million.' },
  'how-to-read-your-policy': { title: 'How to Read Your Entire Insurance Policy: A Section-by-Section Walkthrough', description: 'Open your policy booklet and follow along. A practical guide to every section of an HO-3 homeowner policy — declarations, insuring agreement, definitions, coverages, exclusions, conditions, and endorsements.' },
}

// Map slugs to dynamic imports of content modules
const ARTICLE_CONTENT: Record<string, () => Promise<{ meta: { title: string; description: string }; default: React.ComponentType }>> = {
  'california-fair-claims': () => import('@/lib/content/articles/california-fair-claims'),
  'policy-types-overview':  () => import('@/lib/content/articles/policy-types-overview'),
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
  'california-appraisal-case-law': () => import('@/lib/content/articles/california-appraisal-case-law'),
  'xactimate-user-manual': () => import('@/lib/content/articles/xactimate-user-manual'),
  'xactimate-training-guide': () => import('@/lib/content/articles/xactimate-training-guide'),
  'where-you-reside-exclusion': () => import('@/lib/content/articles/where-you-reside-exclusion'),
  'surprising-coverages': () => import('@/lib/content/articles/surprising-coverages'),
  'vandalism-vs-wear-and-tear': () => import('@/lib/content/articles/vandalism-claims'),
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
  'white-waiver': () => import('@/lib/content/articles/white-waiver'),
  'silica-contamination': () => import('@/lib/content/articles/silica-contamination'),
  'replacement-cost-vs-guaranteed': () => import('@/lib/content/articles/replacement-cost-vs-guaranteed'),
  'vacancy-unoccupancy': () => import('@/lib/content/articles/vacancy-unoccupancy'),
  'pair-and-set': () => import('@/lib/content/articles/pair-and-set'),
  'condo-hoa-claims': () => import('@/lib/content/articles/condo-hoa-claims'),
  'loss-assessment-coverage': () => import('@/lib/content/articles/loss-assessment-coverage'),
  'subrogation': () => import('@/lib/content/articles/subrogation'),
  'anti-concurrent-causation': () => import('@/lib/content/articles/anti-concurrent-causation'),
  'ensuing-loss': () => import('@/lib/content/articles/ensuing-loss'),
  'assignment-of-benefits': () => import('@/lib/content/articles/assignment-of-benefits'),
  'building-permits-claims': () => import('@/lib/content/articles/building-permits-claims'),
  'earthquake-insurance': () => import('@/lib/content/articles/earthquake-insurance'),
  'flood-insurance-nfip-vs-private': () => import('@/lib/content/articles/flood-insurance-nfip-vs-private'),
  'lightning-damage': () => import('@/lib/content/articles/lightning-damage'),
  'foundation-damage': () => import('@/lib/content/articles/foundation-damage'),
  'landlord-vs-tenant-claims': () => import('@/lib/content/articles/landlord-vs-tenant-claims'),
  'reserves-and-authority': () => import('@/lib/content/articles/reserves-and-authority'),
  'social-media-claims': () => import('@/lib/content/articles/social-media-claims'),
  'swimming-pool-damage': () => import('@/lib/content/articles/swimming-pool-damage'),
  'roofing-systems-claims': () => import('@/lib/content/articles/roofing-systems-claims'),
  'equitable-tolling-nuances': () => import('@/lib/content/articles/equitable-tolling-nuances'),
  'hailstone-damage-research': () => import('@/lib/content/articles/hailstone-damage-research'),
  'sub-severe-hail-cumulative-damage': () => import('@/lib/content/articles/sub-severe-hail-cumulative-damage'),
  'hail-damage-threshold-sizes': () => import('@/lib/content/articles/hail-damage-threshold-sizes'),
  'ricowi-hail-field-investigations': () => import('@/lib/content/articles/ricowi-hail-field-investigations'),
  'nist-camp-fire-investigation': () => import('@/lib/content/articles/nist-camp-fire-investigation'),
  'nist-witch-fire-case-study': () => import('@/lib/content/articles/nist-witch-fire-case-study'),
  'nist-wui-hazard-methodology': () => import('@/lib/content/articles/nist-wui-hazard-methodology'),
  'epa-mold-remediation-guide': () => import('@/lib/content/articles/epa-mold-remediation-guide'),
  'mold-growth-prediction-research': () => import('@/lib/content/articles/mold-growth-prediction-research'),
  'nfip-sandy-claims-underpayment': () => import('@/lib/content/articles/nfip-sandy-claims-underpayment'),
  'fema-nfip-oversight-failures': () => import('@/lib/content/articles/fema-nfip-oversight-failures'),
  'reservation-of-rights': () => import('@/lib/content/articles/reservation-of-rights'),
  'deductibles-guide': () => import('@/lib/content/articles/deductibles-guide'),
  'vehicle-impact-claims': () => import('@/lib/content/articles/vehicle-impact-claims'),
  'betterment-and-improvement': () => import('@/lib/content/articles/betterment-and-improvement'),
  'nonrenewal-cancellation': () => import('@/lib/content/articles/nonrenewal-cancellation'),
  'catastrophe-claims': () => import('@/lib/content/articles/catastrophe-claims'),
  'tenant-landlord-claims': () => import('@/lib/content/articles/tenant-landlord-claims'),
  'construction-defect-claims': () => import('@/lib/content/articles/construction-defect-claims'),
  'business-interruption': () => import('@/lib/content/articles/business-interruption'),
  'contents-inventory-guide': () => import('@/lib/content/articles/contents-inventory-guide'),
  'pool-spa-claims': () => import('@/lib/content/articles/pool-spa-claims'),
  'asbestos-lead-claims': () => import('@/lib/content/articles/asbestos-lead-claims'),
  'polybutylene-cpvc-pipes': () => import('@/lib/content/articles/polybutylene-cpvc-pipes'),
  'adjuster-compensation': () => import('@/lib/content/articles/adjuster-compensation'),
  'slab-leak-claims': () => import('@/lib/content/articles/slab-leak-claims'),
  'theft-burglary-claims': () => import('@/lib/content/articles/theft-burglary-claims'),
  'dic-policies': () => import('@/lib/content/articles/dic-policies'),
  'glass-breakage-claims': () => import('@/lib/content/articles/glass-breakage-claims'),
  'collapse-coverage': () => import('@/lib/content/articles/collapse-coverage'),
  'animal-pest-damage': () => import('@/lib/content/articles/animal-pest-damage'),
  'stucco-eifs-claims': () => import('@/lib/content/articles/stucco-eifs-claims'),
  'tree-falling-object-damage': () => import('@/lib/content/articles/tree-falling-object-damage'),
  'soft-costs-claims': () => import('@/lib/content/articles/soft-costs-claims'),
  'carrier-claims-tactics': () => import('@/lib/content/articles/carrier-claims-tactics'),
  'scheduled-personal-property': () => import('@/lib/content/articles/scheduled-personal-property'),
  'large-commercial-losses': () => import('@/lib/content/articles/large-commercial-losses'),
  'earth-movement-landslide': () => import('@/lib/content/articles/earth-movement-landslide'),
  'disaster-preparedness': () => import('@/lib/content/articles/disaster-preparedness'),
  'builders-risk': () => import('@/lib/content/articles/builders-risk'),
  'inland-marine': () => import('@/lib/content/articles/inland-marine'),
  'crop-agricultural-insurance': () => import('@/lib/content/articles/crop-agricultural-insurance'),
  'how-to-read-your-policy': () => import('@/lib/content/articles/how-to-read-your-policy'),
  'accidental-discharge-overflow': () => import('@/lib/content/articles/accidental-discharge-overflow'),
  'agreed-value-policies': () => import('@/lib/content/articles/agreed-value-policies'),
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
            afterContent={<RelatedArticles currentSlug={slug} />}
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
            we&apos;re happy to answer questions about your specific situation.
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
