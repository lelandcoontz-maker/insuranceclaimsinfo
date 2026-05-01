export interface NavLink {
  href: string
  label: string
}

export interface NavDropdownGroup {
  heading: string
  links: NavLink[]
}

export const NAV_LINKS = [
  { href: '/inventory', label: 'Inventory Tool' },
  { href: '/resources', label: 'Resources', hasDropdown: true },
  { href: '/free-guides', label: 'Free Guides' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Free Claim Review', isCta: true },
] as const

export const RESOURCE_DROPDOWN_GROUPS: NavDropdownGroup[] = [
  {
    heading: 'Understanding Your Policy',
    links: [
      { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
      { href: '/resources/declarations-page', label: 'Reading Your Dec Page' },
      { href: '/resources/exclusions', label: 'Policy Exclusions' },
      { href: '/resources/wear-and-tear-cause-of-loss', label: 'Wear & Tear Exclusion' },
      { href: '/resources/acv-rcv', label: 'ACV vs. RCV' },
      { href: '/resources/loss-settlement-provisions', label: 'Loss Settlement Provisions' },
      { href: '/resources/where-you-reside-exclusion', label: 'The "Where You Reside" Trap' },
      { href: '/resources/surprising-coverages', label: 'Surprising Coverages' },
      { href: '/resources/special-limits-of-liability', label: 'Special Limits & Sub-Limits' },
      { href: '/resources/policyholder-death-coverage', label: 'Policyholder Death & Coverage' },
      { href: '/resources/insurable-interest', label: 'Insurable Interest & Life Estates' },
    ],
  },
  {
    heading: 'Filing & Managing Your Claim',
    links: [
      { href: '/resources/claims-process', label: 'The Claims Process' },
      { href: '/resources/dealing-with-adjuster', label: 'Dealing With the Adjuster' },
      { href: '/resources/contents-claims', label: 'Personal Property Claims' },
      { href: '/resources/ale-frv', label: 'ALE & Fair Rental Value' },
      { href: '/resources/supplemental-claims', label: 'Supplemental Claims' },
      { href: '/resources/recorded-statements-siu', label: 'Recorded Statements & SIU' },
      { href: '/resources/insurance-checks', label: 'Insurance Checks' },
      { href: '/resources/mortgage-company-holds', label: 'Mortgage Company Holds' },
      { href: '/resources/foreclosure-insurance-claims', label: 'Foreclosure & Full Credit Bids' },
      { href: '/resources/post-disaster-scams', label: 'Avoiding Post-Disaster Scams' },
      { href: '/resources/recording-insurance-inspections', label: 'Recording Inspections' },
      { href: '/resources/third-party-vs-first-party', label: 'Third-Party vs. First-Party Claims' },
    ],
  },
  {
    heading: 'Carrier Tactics & Real Stories',
    links: [
      { href: '/insurer-tactics', label: 'Games Insurers Play' },
      { href: '/stories', label: 'Real Claims Stories (35)' },
      { href: '/resources/first-offer-lowball', label: 'Never Accept First Offer' },
      { href: '/resources/insurance-delay-tactics', label: 'Delay Tactics' },
      { href: '/resources/biased-insurance-experts', label: 'Biased Insurance Experts' },
      { href: '/resources/cosmetic-damage-denials', label: 'Cosmetic Damage Denials' },
    ],
  },
  {
    heading: 'Disputes & Fighting Back',
    links: [
      { href: '/resources/negotiation', label: 'Negotiation Tactics' },
      { href: '/resources/multiple-reasons-to-replace', label: 'Multiple Reasons to Replace' },
      { href: '/resources/xactimate', label: 'Xactimate Estimates' },
      { href: '/resources/xactimate-user-manual', label: 'Xactimate User Manual' },
      { href: '/resources/xactimate-training-guide', label: 'Xactimate Training Guide' },
      { href: '/resources/scoping-the-loss', label: 'Scoping the Loss Field Manual' },
      { href: '/resources/engineering-reports-vs-coverage', label: 'Engineering Reports & Coverage' },
      { href: '/resources/excessive-depreciation', label: 'Excessive Depreciation' },
      { href: '/resources/commonly-missed-items', label: 'Commonly Missed Items' },
      { href: '/resources/appraisal', label: 'Insurance Appraisal' },
      { href: '/resources/appraisal-practitioner-guide', label: 'Appraisal Practitioner Guide' },
      { href: '/resources/matching', label: 'Matching Requirements' },
      { href: '/resources/defeating-carrier-engineers', label: 'Defeating Carrier Engineers' },
    ],
  },
  {
    heading: 'Types of Damage',
    links: [
      { href: '/types-of-claims', label: 'Types of Claims' },
      { href: '/resources/wildfire-guide', label: 'Wildfire Claims Guide' },
      { href: '/resources/smoke-damage-claims', label: 'Smoke Damage Claims' },
      { href: '/resources/water-damage-claims', label: 'Water Damage Claims' },
      { href: '/resources/roof-damage', label: 'Roof Damage Claims' },
      { href: '/resources/total-loss', label: 'Total Loss Claims' },
      { href: '/resources/thermal-heat-damage', label: 'Thermal/Heat Damage' },
      { href: '/resources/mold-coverage-paradox', label: 'Mold Coverage Paradox' },
      { href: '/resources/vandalism-claims', label: 'Vandalism Claims' },
      { href: '/resources/personal-property-special-considerations', label: 'Specialty Property Claims' },
      { href: '/resources/code-upgrade-coverage', label: 'Code Upgrade Coverage' },
      { href: '/resources/marine-cargo-claims', label: 'Marine Cargo Claims' },
      { href: '/resources/environmental-sampling-methods', label: 'Environmental Sampling' },
    ],
  },
  {
    heading: 'California Law',
    links: [
      { href: '/regulations', label: 'Rules & Regulations' },
      { href: '/resources/bad-faith', label: 'Bad Faith Practices' },
      { href: '/resources/insurance-code-790', label: 'Insurance Code 790.03' },
      { href: '/resources/elder-abuse-insurance', label: 'Elder Abuse & Insurance' },
      { href: '/resources/cdi-complaint', label: 'Filing a CDI Complaint' },
      { href: '/resources/california-insurance-crisis', label: 'CA Insurance Crisis' },
      { href: '/resources/california-insurance-case-law', label: 'Key CA Case Law' },
      { href: '/resources/sb49-contents-rule', label: 'SB 49 Contents Rule' },
      { href: '/resources/caci-jury-instructions-insurance', label: 'CACI Jury Instructions' },
      { href: '/cdi-notices', label: 'CDI Notices & Guides' },
    ],
  },
  {
    heading: 'More Resources',
    links: [
      { href: '/resources/public-adjuster', label: 'Working With a PA' },
      { href: '/resources/when-to-hire-attorney', label: 'When to Hire an Attorney' },
      { href: '/faq', label: 'Frequently Asked Questions' },
      { href: '/letters', label: 'Template Demand Letters' },
      { href: '/free-guides', label: 'Free PDF Guides' },
      { href: '/guides', label: 'Paid Guides & Toolkits' },
      { href: '/books', label: 'Recommended Books' },
      { href: '/videos', label: 'Videos & Media' },
    ],
  },
]

export const FOOTER_RESOURCE_LINKS: NavLink[] = [
  { href: '/regulations', label: 'CA Rules & Regulations' },
  { href: '/insurer-tactics', label: 'Games Insurers Play' },
  { href: '/stories', label: 'Real Claims Stories' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
  { href: '/resources/wildfire-guide', label: 'Wildfire Claims Guide' },
  { href: '/resources/xactimate', label: 'Xactimate Estimates' },
  { href: '/types-of-claims', label: 'Types of Claims' },
  { href: '/other-claims', label: 'Other Claim Types' },
  { href: '/resources/marine-cargo-claims', label: 'Marine Cargo Claims' },
  { href: '/resources/public-adjuster', label: 'Working With a PA' },
  { href: '/resources/total-loss', label: 'Total Loss Claims' },
  { href: '/resources/california-insurance-crisis', label: 'CA Insurance Crisis' },
  { href: '/resources/smoke-damage-claims', label: 'Smoke Damage Claims' },
  { href: '/resources/california-fair-plan', label: 'The FAIR Plan' },
  { href: '/cdi-notices', label: 'CDI Notices & Guides' },
  { href: '/letters', label: 'Template Demand Letters' },
  { href: '/free-guides', label: 'Free Guides' },
  { href: '/guides', label: 'Guides & Toolkits' },
  { href: '/resources/scoping-the-loss', label: 'Scoping Field Manual' },
  { href: '/resources/california-insurance-case-law', label: 'CA Case Law Guide' },
  { href: '/books', label: 'Recommended Books' },
  { href: '/videos', label: 'Videos & Media' },
]
