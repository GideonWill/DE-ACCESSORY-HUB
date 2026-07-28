export type NavChild = {
  label: string
  href: string
  image?: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'AUTOMATED TRACKS & MOTORS',
    href: '/products/automation',
    children: [
      { label: 'Automated Tracks', href: '/products/automation?type=automated-tracks', image: '/images/automated-tracks.png' },
      { label: 'Automated Motors', href: '/products/automation?type=automated-motors', image: '/images/automated-motors.png' },
    ],
  },
  {
    label: 'TIE HOOKS & TIE BACKS',
    href: '/products/tie-hooks-backs',
    children: [
      { label: 'Tie Hooks', href: '/products/tie-hooks-backs?type=tie-hooks', image: '/images/tie-hooks.png' },
      { label: 'Tie Backs', href: '/products/tie-hooks-backs?type=tie-backs', image: '/images/tie-backs.png' },
    ],
  },
  { label: 'TAPES', href: '/products/tapes' },
  { label: 'CONTACT US', href: '/contact' },
]
