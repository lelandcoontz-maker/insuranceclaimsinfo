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
      { href: '/resources/california-fair-claims', label: 'Fair Claims Act Guide' },
      { href: '/resources/bad-faith', label: 'Bad Faith Practices' },
      { href: '/resources/cdi-complaint', label: 'Filing a CDI Complaint' },
    ],
  },
  {
    heading: 'Your Policy & Claims',
    links: [
      { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
      { href: '/resources/claims-process', label: 'The Claims Process' },
      { href: '/resources/duties-after-loss', label: 'Duties After Loss' },
      { href: '/resources/proof-of-loss', label: 'Proof of Loss' },
    ],
  },
  {
    heading: 'Disputes & Estimates',
    links: [
      { href: '/resources/xactimate', label: 'Xactimate Estimates' },
      { href: '/resources/appraisal', label: 'Insurance Appraisal' },
      { href: '/resources/negotiation', label: 'Negotiation Tactics' },
      { href: '/resources/acv-rcv', label: 'ACV vs. RCV' },
    ],
  },
  {
    heading: 'Specialized Topics',
    links: [
      { href: '/resources/mold-losses', label: 'Mold Losses' },
      { href: '/resources/contents-claims', label: 'Personal Property Claims' },
      { href: '/resources/ale-frv', label: 'Living Expenses (ALE)' },
      { href: '/types-of-claims', label: 'Types of Claims' },
    ],
  },
  {
    heading: 'Get Help',
    links: [
      { href: '/faq', label: 'Frequently Asked Questions' },
      { href: '/resources/public-adjuster', label: 'Working With a PA' },
      { href: '/resources/exclusions', label: 'Policy Exclusions' },
      { href: '/contact', label: 'Free Claim Review' },
    ],
  },
]

export const FOOTER_RESOURCE_LINKS: NavLink[] = [
  { href: '/regulations', label: 'CA Rules & Regulations' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/resources/california-fair-claims', label: 'CA Fair Claims Act' },
  { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
  { href: '/resources/claims-process', label: 'The Claims Process' },
  { href: '/resources/xactimate', label: 'Xactimate Estimates' },
  { href: '/types-of-claims', label: 'Types of Claims' },
  { href: '/resources/public-adjuster', label: 'Working With a PA' },
]
