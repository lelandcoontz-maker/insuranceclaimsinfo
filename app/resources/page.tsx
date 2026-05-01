import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'California Insurance Claim Resources',
  description:
    'Free guides on California insurance law, policy interpretation, claim negotiation, bad faith, appraisal, Xactimate estimates, mold claims, and more.',
}

const CATEGORIES = [
  {
    label: 'Understanding Your Policy',
    color: 'bg-amber-50 border-amber-200',
    headingColor: 'text-amber-900',
    articles: [
      {
        icon: '📋',
        title: 'Policy Interpretation Guide',
        desc: 'Coverages A, B, C, D explained. HO3 vs named peril, commercial vs residential, co-insurance, endorsements, and how to read your entire policy.',
        href: '/resources/policy-interpretation',
        tag: 'Start Here',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📄',
        title: 'How to Read Your Declarations Page',
        desc: 'Your dec page walkthrough: coverages, limits, deductibles, and hidden coverages like debris removal and extended replacement cost.',
        href: '/resources/declarations-page',
        tag: 'Fundamentals',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🔍',
        title: 'Exclusions: What\'s Not Covered',
        desc: 'Earth movement, flood, ordinance & law, mold, wear & tear — how to identify exclusions and when they may not apply.',
        href: '/resources/exclusions',
        tag: 'Policy',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🛡️',
        title: 'Wear and Tear: The Most Misused Exclusion',
        desc: 'Your policy excludes wear and tear as a CAUSE of loss — not damage to property that happens to be worn. If wind blew the shingles off, the cause is wind.',
        href: '/resources/wear-and-tear-cause-of-loss',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '💲',
        title: 'ACV vs. RCV: Actual vs. Replacement Cost',
        desc: 'The most important distinction in a contents claim. How depreciation is calculated and how to get full replacement cost.',
        href: '/resources/acv-rcv',
        tag: 'Contents',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🏗️',
        title: 'Building Code & Ordinance or Law Coverage',
        desc: 'Code upgrade coverage, historical requirements, zoning, and how O&L can add 25–50% to your claim.',
        href: '/resources/ordinance-law',
        tag: 'Policy',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🔧',
        title: 'Code Upgrades: Electrical, Structural, Title 24 & More',
        desc: 'California-specific code upgrade requirements — electrical, structural, Title 24 energy, plumbing, roofing, zoning, and how to maximize L&O recovery.',
        href: '/resources/code-upgrade-coverage',
        tag: 'Deep Dive',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📑',
        title: 'Loss Settlement Provisions',
        desc: 'How your payout is actually calculated — ACV, RCV, holdback, rebuilding requirements, and what "like kind and quality" means.',
        href: '/resources/loss-settlement-provisions',
        tag: 'Policy',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🏠',
        title: 'Replacement Cost vs. 100% Replacement Cost (Guaranteed, Extended, Unlimited)',
        desc: 'Standard RC, extended RC, and guaranteed RC are not the same. Learn the difference and why it matters most after a disaster.',
        href: '/resources/replacement-cost-vs-guaranteed',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📊',
        title: 'Coinsurance Penalties',
        desc: 'What coinsurance is, how the penalty works, and how being underinsured can cost you more than you think.',
        href: '/resources/coinsurance-penalty',
        tag: 'Policy',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🏢',
        title: 'Vacancy and Unoccupancy Clauses',
        desc: 'An empty home can lose coverage. The difference between vacant and unoccupied — and why a mattress might save your claim.',
        href: '/resources/vacancy-unoccupancy',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '💎',
        title: 'Pair and Set Clauses',
        desc: 'When only part of a matched pair or set is destroyed, insurers try to pay for only the damaged item. Building components and personal property.',
        href: '/resources/pair-and-set',
        tag: 'Policy',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '🏘️',
        title: 'Condo and HOA Insurance Claims',
        desc: 'Two policies cover your condo. CC&Rs control the split. The tenant improvement trap, and what to do when the HOA refuses to act.',
        href: '/resources/condo-hoa-claims',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🔒',
        title: 'Special Limits of Liability',
        desc: 'Hidden dollar caps on jewelry, firearms, coins, and collectibles. The sub-limits that silently reduce your claim — and how scheduling overcomes them.',
        href: '/resources/special-limits-of-liability',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🏠',
        title: 'Insurable Interest & Life Estates',
        desc: 'When a home is in a trust with a retained life estate, the policyholder may only recover a fraction of the property value. Learn how life estates are valued and the estate-planning mistake that creates the gap.',
        href: '/resources/insurable-interest',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'Filing & Managing Your Claim',
    color: 'bg-green-50 border-green-200',
    headingColor: 'text-green-900',
    articles: [
      {
        icon: '🗂',
        title: 'Step-by-Step Claims Guide',
        desc: 'From first notice of loss to final settlement. What happens at each stage, who does what, and how to protect yourself.',
        href: '/resources/claims-process',
        tag: 'Start Here',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📝',
        title: 'Proof of Loss',
        desc: 'What a sworn proof of loss is, when it\'s required, deadlines, and how to complete one correctly.',
        href: '/resources/proof-of-loss',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '📂',
        title: 'Duties After Loss',
        desc: 'Your obligations after a loss — reporting, exhibiting damages, proof of loss — and how failure to comply can affect your claim.',
        href: '/resources/duties-after-loss',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🤝',
        title: 'Dealing with the Insurance Adjuster',
        desc: 'The insurer\'s adjuster works for them, not you. Your rights, what to do before and during the inspection, and common tactics to watch for.',
        href: '/resources/dealing-with-adjuster',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🛋',
        title: 'Documenting Personal Property',
        desc: 'How to create a defensible contents inventory. Room-by-room methodology, cleaning vs total loss, pack-out and storage.',
        href: '/resources/contents-claims',
        tag: 'Contents',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🏨',
        title: 'Additional Living Expenses (ALE) & Fair Rental Value',
        desc: 'What ALE and FRV cover, how to document expenses, what insurers try to limit, and how to fight termination.',
        href: '/resources/ale-frv',
        tag: 'ALE / FRV',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '💻',
        title: 'Electronics & Specialty Items',
        desc: 'TVs, computers, jewelry, art, instruments — how these are valued differently and when you need a specialist.',
        href: '/resources/specialty-items',
        tag: 'Contents',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🌳',
        title: 'Electronics, Rugs & Landscaping: Special Considerations',
        desc: 'Surge damage, smoke-damaged electronics, Oriental rug valuations, and the tree sub-limit trap — three categories insurers consistently underpay.',
        href: '/resources/personal-property-special-considerations',
        tag: 'Deep Dive',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🚛',
        title: 'Debris Removal Coverage',
        desc: 'More than just the dwelling — debris removal applies to other structures, trees, and personal property. The additional 5% provision.',
        href: '/resources/debris-removal',
        tag: 'Coverage',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🔧',
        title: 'Emergency Repairs: Your Duty to Protect Property',
        desc: 'Your policy requires you to prevent further damage. What emergency repairs are covered and how to document them.',
        href: '/resources/temporary-emergency-repairs',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '📋',
        title: 'Filing Supplemental Claims',
        desc: 'How to file a supplement when the insurance company\'s estimate missed damage — hidden damage, code upgrades, and more.',
        href: '/resources/supplemental-claims',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🏠',
        title: 'Maximizing Your Loss of Use (ALE) Claim',
        desc: 'Coverage D pays your additional living expenses. Most policyholders leave thousands on the table.',
        href: '/resources/loss-of-use-maximizing',
        tag: 'ALE',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🗣️',
        title: 'Examination Under Oath (EUO)',
        desc: 'What an EUO is, when insurers request one, your rights during the process, how to prepare, and what happens after.',
        href: '/resources/examination-under-oath',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🎙️',
        title: 'Recorded Statements and SIU Investigations',
        desc: 'What to expect when your insurance company requests a recorded statement or launches an SIU review.',
        href: '/resources/recorded-statements-siu',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '💵',
        title: 'Insurance Checks: What to Do',
        desc: 'Restrictive "full and final" language, mortgage company names, ACV vs. holdback payments — what to watch for before you cash that check.',
        href: '/resources/insurance-checks',
        tag: 'Know This',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🏦',
        title: 'Mortgage Company Holds',
        desc: 'Your lender\'s name is on the check. How the hold and release process works, what lenders can and cannot do, and the 2025 interest law.',
        href: '/resources/mortgage-company-holds',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🚨',
        title: 'Avoiding Post-Disaster Scams',
        desc: 'Contractor fraud, deductible waiver schemes, unlicensed claim negotiators, AOB abuse — protect yourself after a loss.',
        href: '/resources/post-disaster-scams',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'Carrier Tactics & Real Stories',
    color: 'bg-red-50 border-red-200',
    headingColor: 'text-red-900',
    articles: [
      {
        icon: '🎯',
        title: 'Games Insurance Companies Play',
        desc: '15 common insurer tactics on property claims — how to identify them and how to defeat them.',
        href: '/insurer-tactics',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📖',
        title: 'Real Stories from the Claims Trenches',
        desc: '35 true stories from both sides of the insurance desk — lowball offers, delay tactics, depreciation tricks, and more.',
        href: '/stories',
        tag: '35 Stories',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🚫',
        title: 'Never Accept the Insurer\'s First Offer',
        desc: 'Why the initial settlement offer is almost always too low — incomplete scope, low pricing, missing coverages — and how to respond.',
        href: '/resources/first-offer-lowball',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '⏳',
        title: 'Insurance Company Delay Tactics',
        desc: 'How insurance companies use delay to pressure you into accepting less — and what California law says about it.',
        href: '/resources/insurance-delay-tactics',
        tag: 'Tactics',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🎭',
        title: 'Biased Insurance Experts',
        desc: 'How to identify and challenge the insurer\'s hired engineers, hygienists, and estimators who consistently minimize claims.',
        href: '/resources/biased-insurance-experts',
        tag: 'Tactics',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🔍',
        title: 'Insurer\'s Duty to Investigate',
        desc: 'Your insurer must conduct a thorough, fair investigation. When they don\'t, it\'s bad faith.',
        href: '/resources/duty-to-investigate',
        tag: 'Bad Faith',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🏦',
        title: 'Force-Placed Insurance',
        desc: 'What lender-placed insurance is, why it\'s expensive, what it doesn\'t cover, and how to avoid it.',
        href: '/resources/force-placed-insurance',
        tag: 'Coverage Gap',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📁',
        title: 'The CLUE Database',
        desc: 'What the CLUE database is, how insurance companies use your claims history, and what you can do about it.',
        href: '/resources/clue-database',
        tag: 'Know This',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🎨',
        title: 'Cosmetic Damage Denials',
        desc: 'Insurers increasingly deny "cosmetic" damage. Why this argument fails and how to fight back.',
        href: '/resources/cosmetic-damage-denials',
        tag: 'Disputes',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '⚔️',
        title: 'Pre-Existing vs. Storm Damage',
        desc: 'Fighting the "wear and tear" denial — directional patterns, timeline evidence, and California\'s efficient proximate cause doctrine.',
        href: '/resources/pre-existing-vs-storm-damage',
        tag: 'Disputes',
        tagColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'Disputes & Fighting Back',
    color: 'bg-orange-50 border-orange-200',
    headingColor: 'text-orange-900',
    articles: [
      {
        icon: '♟',
        title: 'Claim Negotiation Tactics',
        desc: 'The chess game with your adjuster. Responding to lowball offers, reservation of rights letters, and delay tactics.',
        href: '/resources/negotiation',
        tag: 'Strategy',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '🎯',
        title: 'Multiple Reasons to Replace',
        desc: 'Don\'t get stuck arguing one reason when you have seven. If only one of seven reasons is valid, the item may still need to go.',
        href: '/resources/multiple-reasons-to-replace',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '✉️',
        title: 'How to Write an Effective Claim Letter',
        desc: 'Your written communications become the record of your claim. Templates, structure, and what to include.',
        href: '/resources/claim-negotiation-letters',
        tag: 'Strategy',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '📐',
        title: 'Xactimate Estimates: What You Need to Know',
        desc: 'How to read a scope of loss, identify missing line items, understand labor and material rates, and dispute underpayment.',
        href: '/resources/xactimate',
        tag: 'Estimates',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '🔎',
        title: 'Commonly Missed Items on Total Loss Claims',
        desc: 'Light bulbs, low-voltage wiring, house numbers, thresholds, scribe moldings, pressure-treated sole plates — a checklist of items adjusters routinely miss.',
        href: '/resources/commonly-missed-items',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🪞',
        title: 'Matching: Achieving Uniform Appearance',
        desc: 'When partial repairs don\'t match — your right to a uniform appearance under the Model Fair Claims Act.',
        href: '/resources/matching',
        tag: 'Disputes',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '📏',
        title: 'Scope of Loss Disputes',
        desc: 'When the insurer misses damage — how to document, dispute, and recover the full cost of repairs.',
        href: '/resources/scope-of-loss',
        tag: 'Disputes',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '❓',
        title: 'Coverage Disputes',
        desc: 'The most fundamental question: is your loss covered at all? How to fight a denial and establish coverage.',
        href: '/resources/coverage-disputes',
        tag: 'Disputes',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '🔨',
        title: 'Insurance Appraisal in California',
        desc: 'The standard fire policy, the arbitration code, key case law, and how to protect your rights in appraisal.',
        href: '/resources/appraisal',
        tag: 'California',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '🤝',
        title: 'Insurance Mediation',
        desc: 'How mediation works, when it resolves disputes faster and cheaper than litigation, and how to prepare.',
        href: '/resources/insurance-mediation',
        tag: 'Dispute Resolution',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '💰',
        title: 'Overhead & Profit',
        desc: 'Insurance companies routinely refuse to include overhead and profit. Learn what O&P is and when you\'re entitled to it.',
        href: '/resources/overhead-and-profit',
        tag: 'Estimates',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '👷',
        title: 'Labor Depreciation',
        desc: 'A growing number of states have ruled that insurance companies cannot depreciate labor costs. California is one of them.',
        href: '/resources/labor-depreciation',
        tag: 'Depreciation',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '📉',
        title: 'Excessive Depreciation: How to Fight Back',
        desc: 'No depreciation on labor, long-life components, or undamaged matching areas. The rules insurers break and how to challenge every one.',
        href: '/resources/excessive-depreciation',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🔧',
        title: 'Right to Repair Clauses',
        desc: 'Insurance companies increasingly use right to repair clauses to control repairs. Know your rights.',
        href: '/resources/right-to-repair',
        tag: 'Policy',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '🔬',
        title: 'Defeating Carrier Engineer Reports',
        desc: 'How carrier engineers operate, common report flaws, and a step-by-step rebuttal process to overturn engineer-based denials.',
        href: '/resources/defeating-carrier-engineers',
        tag: 'Roof Claims',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '📐',
        title: 'When Engineering Reports Cross the Line',
        desc: 'Engineers determine how things failed — not whether damage is covered. The difference between engineering causation and legal causation under California law.',
        href: '/resources/engineering-reports-vs-coverage',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🛡️',
        title: 'Know Your Rights as a Policyholder',
        desc: 'Your insurance company has obligations under the policy, state law, and regulations. Here\'s what they owe you.',
        href: '/resources/policyholder-rights',
        tag: 'Your Rights',
        tagColor: 'bg-orange-100 text-orange-700',
      },
    ],
  },
  {
    label: 'Types of Damage',
    color: 'bg-teal-50 border-teal-200',
    headingColor: 'text-teal-900',
    articles: [
      {
        icon: '🔥',
        title: 'Common Types of Claims',
        desc: 'Fire, water, vandalism, vehicle impact, sewage, flood, smoke — how each type of claim has unique considerations.',
        href: '/types-of-claims',
        tag: 'Overview',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🌲',
        title: 'Wildfire Claims Guide',
        desc: 'Forest fire vs urban wildfire smoke, contamination testing, coverage, and step-by-step wildfire claims guidance.',
        href: '/resources/wildfire-guide',
        tag: 'Wildfire',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '💨',
        title: 'Smoke Damage Claims',
        desc: 'Testing, remediation standards, the Smoke Damage Recovery Act, and why a visual walk-through is not enough.',
        href: '/resources/smoke-damage-claims',
        tag: 'Wildfire',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '💧',
        title: 'Water Damage Claims',
        desc: 'From emergency response to final settlement — burst pipes, leaks, mitigation, and fighting for full payment.',
        href: '/resources/water-damage-claims',
        tag: 'Water',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🚿',
        title: 'Blockage & Overflow vs. Sewer Backup',
        desc: 'A plumbing blockage is not a backup. Learn the mechanical difference, why using the wrong word can cost you coverage, and what the courts say.',
        href: '/resources/blockage-vs-backup',
        tag: 'Water',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '❌',
        title: 'Fire Claim Denied? Here\'s What to Do',
        desc: 'Common denial reasons, your appeal rights, steps to fight back, and when a denial becomes bad faith.',
        href: '/resources/fire-claim-denied',
        tag: 'Denied Claims',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🏠',
        title: 'Roof Damage Insurance Claims',
        desc: 'The most common homeowner claim — causes, coverage, matching disputes, repair vs. replacement, and getting full payment.',
        href: '/resources/roof-damage',
        tag: 'Roof Claims',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🧊',
        title: 'Hail Damage Claims',
        desc: 'Documenting hail damage, fighting for matching, and getting full replacement when your roof needs it.',
        href: '/resources/hail-damage-claims',
        tag: 'Hail',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🔬',
        title: 'The Science of Hail Damage',
        desc: 'Test square methodology, impact patterns, collateral evidence, and how to counter carrier engineer mischaracterizations.',
        href: '/resources/hail-damage-science',
        tag: 'Hail',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🌬️',
        title: 'Wind Damage Claims',
        desc: 'How wind damage claims work and disputes over wind vs. wear-and-tear damage.',
        href: '/resources/wind-damage-claims',
        tag: 'Wind',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🦠',
        title: 'Mold Losses',
        desc: 'Is mold covered? Ensuing loss doctrine, mold limits, and why the insurance company\'s mold argument may be wrong.',
        href: '/resources/mold-losses',
        tag: 'Mold',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🧫',
        title: 'The Mold Coverage Paradox',
        desc: 'Covered, excluded, and everything in between. Cause-vs-result, proper cost allocation, and why the difference is $14,000 on a single claim.',
        href: '/resources/mold-coverage-paradox',
        tag: 'Deep Dive',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🔨',
        title: 'Vandalism Claims',
        desc: 'How to prove vandalism and push back when insurers relabel your claim as wear and tear.',
        href: '/resources/vandalism-claims',
        tag: 'Vandalism',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🏚️',
        title: 'Total Loss Claims',
        desc: 'When your home is a complete loss — every coverage that activates, rebuilding vs. cashing out, and California protections.',
        href: '/resources/total-loss',
        tag: 'Total Loss',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📉',
        title: 'Underinsured After a Wildfire',
        desc: 'Why so many homeowners are underinsured, and strategies to maximize recovery when policy limits fall short.',
        href: '/resources/underinsured-after-wildfire',
        tag: 'Wildfire',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🌡️',
        title: 'Thermal & Heat Damage from Nearby Wildfires',
        desc: 'Your home survived — but radiant heat can warp siding, compromise windows, damage wiring, and degrade roofing without any flame contact.',
        href: '/resources/thermal-heat-damage',
        tag: 'Wildfire',
        tagColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'Getting Professional Help',
    color: 'bg-purple-50 border-purple-200',
    headingColor: 'text-purple-900',
    articles: [
      {
        icon: '🧑‍💼',
        title: 'Working With a Public Adjuster',
        desc: 'What a PA does, how fees work, when to hire one, and how the process works alongside your insurer.',
        href: '/resources/public-adjuster',
        tag: 'Professional Help',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '💰',
        title: 'Public Adjuster Fees',
        desc: 'What PAs cost, how contingency fees work, California\'s disaster fee cap, and questions to ask before signing.',
        href: '/resources/public-adjuster-fees',
        tag: 'Fees & Costs',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '👔',
        title: 'Types of Insurance Adjusters',
        desc: 'Staff adjusters, independent adjusters, desk adjusters, public adjusters — learn who each one works for.',
        href: '/resources/adjuster-types',
        tag: 'Know This',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '🏗️',
        title: 'Choosing Your Own Contractor',
        desc: 'You have the right to choose your own contractor. How to evaluate one and why the carrier\'s preferred vendor may not be best.',
        href: '/resources/choosing-your-contractor',
        tag: 'Contractors',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '⚖️',
        title: 'When to Hire an Attorney',
        desc: 'Not every claim needs a lawyer — but some absolutely do. How to know when it\'s time.',
        href: '/resources/when-to-hire-attorney',
        tag: 'Legal',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '🏦',
        title: 'When a Mortgage Company Tries to Hire a PA',
        desc: 'Mortgagee rights, the loss payable endorsement, privacy laws, and why a lender cannot hire a public adjuster unless it is an insured.',
        href: '/resources/mortgage-company-public-adjuster',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'California Law & Regulations',
    color: 'bg-blue-50 border-blue-200',
    headingColor: 'text-blue-900',
    articles: [
      {
        icon: '⚖️',
        title: 'Fair Claims Settlement Practices Act (10 CCR 2695)',
        desc: 'The California regulation that governs every step of your claim. Deadlines, required disclosures, and prohibited practices.',
        href: '/resources/california-fair-claims',
        tag: 'Essential Reading',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🚨',
        title: 'Bad Faith Insurance Practices',
        desc: 'What constitutes bad faith in California, your remedies, and how to document violations for leverage or litigation.',
        href: '/resources/bad-faith',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '📜',
        title: 'Insurance Code 790.03 and the 790 Letter',
        desc: 'What the statute prohibits, how to write a 790 letter putting your insurer on formal notice, and why it changes the dynamic of your claim.',
        href: '/resources/insurance-code-790',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '✍️',
        title: 'The White Waiver: California\'s Settlement-Privilege Waiver',
        desc: 'What the White waiver is, why insurers ask you to sign one, and why signing too quickly can give up your most powerful bad-faith evidence.',
        href: '/resources/white-waiver',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '📁',
        title: 'Filing a CDI Complaint',
        desc: 'How to file a complaint with the California Department of Insurance — when to do it and how to write one that gets results.',
        href: '/resources/cdi-complaint',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '⏱️',
        title: 'Equitable Tolling of the Statute of Limitations',
        desc: 'The one-year suit limitation is not as simple as it appears. How equitable tolling pauses the clock.',
        href: '/resources/equitable-tolling',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '🏚️',
        title: 'California\'s Insurance Crisis',
        desc: 'Why insurers are cancelling policies, leaving the market, and raising rates — and what homeowners can do.',
        href: '/resources/california-insurance-crisis',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '🏛️',
        title: 'The California FAIR Plan',
        desc: 'Last-resort fire coverage: what it covers, what it doesn\'t, how to apply, and the DIC policy you need alongside it.',
        href: '/resources/california-fair-plan',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '🚫',
        title: 'Is Your Policy Illegal? When Policy Language Conflicts with Law',
        desc: 'A court ruled the FAIR Plan\'s fire policy "unlawful." Here are 10 ways your policy may conflict with California statutes, case law, and regulations.',
        href: '/resources/policy-vs-law',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '📜',
        title: 'SB 49: New Contents Payment Rule',
        desc: 'How SB 49 changes personal property claims in disasters — automatic 60% contents payments, no inventory for 100 days.',
        href: '/resources/sb49-contents-rule',
        tag: 'New Law',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '⚡',
        title: 'Inverse Condemnation: Suing Utilities',
        desc: 'When a utility causes a wildfire, you may have a strict-liability claim beyond insurance.',
        href: '/resources/inverse-condemnation',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '📅',
        title: 'California Claim Deadlines & Timeframes',
        desc: 'Every deadline your California insurance company must meet — and what happens when they miss them.',
        href: '/resources/california-claim-deadlines',
        tag: 'Deadlines',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '🔗',
        title: 'Anti-Concurrent Causation Clauses',
        desc: 'ACC clauses let insurers deny claims when any excluded peril contributes. In California, these clauses are unenforceable.',
        href: '/resources/anti-concurrent-causation',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🔄',
        title: 'Subrogation: Your Right to Recover',
        desc: 'How subrogation works, the regulation requiring your insurer to notify you, deductible recovery, and the made-whole doctrine.',
        href: '/resources/subrogation',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">
            California Insurance Claim Resources
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Plain-English guides written for California policyholders. No jargon,
            no paywalls. Everything you need to understand your policy, navigate
            the claims process, and fight for what you&apos;re owed.
          </p>
        </div>
      </div>

      {/* Quick links */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/regulations"
            className="bg-[#1F3964] text-white rounded-xl p-5 hover:bg-[#162847] transition-colors"
          >
            <span className="text-2xl mb-2 block">📜</span>
            <h3 className="font-bold mb-1">CA Rules & Regulations</h3>
            <p className="text-blue-200 text-sm">
              Insurance Code 790 and Fair Claims Regulations.
            </p>
          </Link>
          <Link
            href="/stories"
            className="bg-red-700 text-white rounded-xl p-5 hover:bg-red-800 transition-colors"
          >
            <span className="text-2xl mb-2 block">📖</span>
            <h3 className="font-bold mb-1">Real Claims Stories</h3>
            <p className="text-red-200 text-sm">
              35 true stories from both sides of the insurance desk.
            </p>
          </Link>
          <Link
            href="/faq"
            className="bg-[#C9A84C] text-white rounded-xl p-5 hover:bg-[#A8872E] transition-colors"
          >
            <span className="text-2xl mb-2 block">❓</span>
            <h3 className="font-bold mb-1">Frequently Asked Questions</h3>
            <p className="text-amber-100 text-sm">
              30+ answers to common insurance claim questions.
            </p>
          </Link>
          <Link
            href="/types-of-claims"
            className="bg-[#2E74B5] text-white rounded-xl p-5 hover:bg-[#1F3964] transition-colors"
          >
            <span className="text-2xl mb-2 block">🔥</span>
            <h3 className="font-bold mb-1">Types of Claims</h3>
            <p className="text-blue-100 text-sm">
              Fire, water, mold, vandalism, flood, smoke — by type.
            </p>
          </Link>
        </div>
      </div>

      {/* Jump-to nav */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href={`#${cat.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#1F3964] hover:text-[#1F3964] transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Resource grid */}
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-12">
        {CATEGORIES.map((cat) => (
          <section
            key={cat.label}
            id={cat.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          >
            <h2 className={`text-xl font-bold mb-5 ${cat.headingColor}`}>
              {cat.label}
              <span className="text-sm font-normal text-gray-400 ml-2">
                {cat.articles.length} guides
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  aria-label={`Read ${article.title}`}
                  className={`block rounded-xl border p-5 hover:shadow-md transition-shadow ${cat.color}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">
                      {article.icon}
                    </span>
                    <div>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${article.tagColor}`}
                      >
                        {article.tag}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-1 leading-tight">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {article.desc}
                  </p>
                  <p className="text-[#2E74B5] text-sm font-medium mt-3" aria-hidden="true">
                    Read guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#1F3964] text-white py-12 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Need Help With Your Specific Claim?
          </h2>
          <p className="text-blue-200 mb-6">
            Every claim is different. If your insurer is giving you trouble, a
            licensed Public Adjuster can review your file, identify what&apos;s being
            underpaid, and represent you in negotiations.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
