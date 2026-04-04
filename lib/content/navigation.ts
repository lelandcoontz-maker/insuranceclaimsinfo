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
    heading: 'California Law',
    links: [
      { href: '/regulations', label: 'Rules & Regulations' },
      { href: '/insurer-tactics', label: 'Games Insurers Play' },
      { href: '/resources/bad-faith', label: 'Bad Faith Practices' },
      { href: '/resources/cdi-complaint', label: 'Filing a CDI Complaint' },
      { href: '/resources/california-insurance-crisis', label: 'CA Insurance Crisis' },
      { href: '/resources/sb49-contents-rule', label: 'SB 49 Contents Rule' },
      { href: '/resources/inverse-condemnation', label: 'Suing Utilities (Inverse Cond.)' },
      { href: '/resources/duty-to-investigate', label: 'Insurer Duty to Investigate' },
      { href: '/cdi-notices', label: 'CDI Notices & Guides' },
    ],
  },
  {
    heading: 'Your Policy & Claims',
    links: [
      { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
      { href: '/resources/declarations-page', label: 'Reading Your Dec Page' },
      { href: '/resources/claims-process', label: 'The Claims Process' },
      { href: '/resources/coverage-disputes', label: 'Coverage Disputes' },
      { href: '/resources/dealing-with-adjuster', label: 'Dealing With the Adjuster' },
    ],
  },
  {
    heading: 'Disputes & Estimates',
    links: [
      { href: '/resources/xactimate', label: 'Xactimate Estimates' },
      { href: '/resources/first-offer-lowball', label: 'Never Accept First Offer' },
      { href: '/resources/matching', label: 'Matching Requirements' },
      { href: '/resources/appraisal', label: 'Insurance Appraisal' },
      { href: '/resources/scope-of-loss', label: 'Scope of Loss' },
      { href: '/resources/cosmetic-damage-denials', label: 'Cosmetic Damage Denials' },
      { href: '/resources/biased-insurance-experts', label: 'Biased Insurance Experts' },
      { href: '/resources/insurance-mediation', label: 'Insurance Mediation' },
      { href: '/resources/force-placed-insurance', label: 'Force-Placed Insurance' },
    ],
  },
  {
    heading: 'Specialized Topics',
    links: [
      { href: '/resources/wildfire-guide', label: 'Wildfire Claims Guide' },
      { href: '/resources/smoke-damage-claims', label: 'Smoke Damage Claims' },
      { href: '/resources/california-fair-plan', label: 'The FAIR Plan' },
      { href: '/resources/fire-claim-denied', label: 'Fire Claim Denied?' },
      { href: '/resources/underinsured-after-wildfire', label: 'Underinsured After Wildfire' },
      { href: '/resources/total-loss', label: 'Total Loss Claims' },
      { href: '/types-of-claims', label: 'Types of Claims' },
    ],
  },
  {
    heading: 'More Resources',
    links: [
      { href: '/faq', label: 'Frequently Asked Questions' },
      { href: '/other-claims', label: 'Other Claim Types' },
      { href: '/free-guides', label: 'Free PDF Guides' },
      { href: '/guides', label: 'Paid Guides & Toolkits' },
      { href: '/books', label: 'Recommended Books' },
    ],
  },
]

export const FOOTER_RESOURCE_LINKS: NavLink[] = [
  { href: '/regulations', label: 'CA Rules & Regulations' },
  { href: '/insurer-tactics', label: 'Games Insurers Play' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
  { href: '/resources/wildfire-guide', label: 'Wildfire Claims Guide' },
  { href: '/resources/xactimate', label: 'Xactimate Estimates' },
  { href: '/types-of-claims', label: 'Types of Claims' },
  { href: '/other-claims', label: 'Other Claim Types' },
  { href: '/resources/public-adjuster', label: 'Working With a PA' },
  { href: '/resources/total-loss', label: 'Total Loss Claims' },
  { href: '/resources/california-insurance-crisis', label: 'CA Insurance Crisis' },
  { href: '/resources/smoke-damage-claims', label: 'Smoke Damage Claims' },
  { href: '/resources/california-fair-plan', label: 'The FAIR Plan' },
  { href: '/cdi-notices', label: 'CDI Notices & Guides' },
  { href: '/free-guides', label: 'Free Guides' },
  { href: '/guides', label: 'Guides & Toolkits' },
  { href: '/books', label: 'Recommended Books' },
]
