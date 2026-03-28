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
    ],
  },
  {
    heading: 'Your Policy & Claims',
    links: [
      { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
      { href: '/resources/declarations-page', label: 'Reading Your Dec Page' },
      { href: '/resources/claims-process', label: 'The Claims Process' },
      { href: '/resources/coverage-disputes', label: 'Coverage Disputes' },
    ],
  },
  {
    heading: 'Disputes & Estimates',
    links: [
      { href: '/resources/xactimate', label: 'Xactimate Estimates' },
      { href: '/resources/matching', label: 'Matching Requirements' },
      { href: '/resources/appraisal', label: 'Insurance Appraisal' },
      { href: '/resources/scope-of-loss', label: 'Scope of Loss' },
    ],
  },
  {
    heading: 'Specialized Topics',
    links: [
      { href: '/resources/ordinance-law', label: 'Code Upgrade / O&L' },
      { href: '/resources/wildfire-guide', label: 'Wildfire Claims Guide' },
      { href: '/resources/mold-losses', label: 'Mold Losses' },
      { href: '/types-of-claims', label: 'Types of Claims' },
    ],
  },
  {
    heading: 'More Resources',
    links: [
      { href: '/faq', label: 'Frequently Asked Questions' },
      { href: '/other-claims', label: 'Other Claim Types' },
      { href: '/resources/public-adjuster', label: 'Working With a PA' },
      { href: '/contact', label: 'Free Claim Review' },
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
]
