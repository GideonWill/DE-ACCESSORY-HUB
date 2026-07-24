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
    label: 'BLINDS',
    href: '/products/blinds',
    children: [
      { label: 'Honeycomb Blinds', href: '/products/blinds?type=honeycomb-blinds', image: '/images/honeycomb-blinds.png' },
      { label: 'Roller Blinds', href: '/products/blinds?type=roller-blinds', image: '/images/roller-blinds.png' },
      { label: 'Roman Blinds', href: '/products/blinds?type=roman-blinds', image: '/images/roman-blinds.png' },
      { label: 'Vertical Blinds', href: '/products/blinds?type=vertical-blinds', image: '/images/vertical-blinds.png' },
      { label: 'Wooden Blinds', href: '/products/blinds?type=wooden-blinds', image: '/images/wooden-blinds.png' },
      { label: 'Zebra Blinds', href: '/products/blinds?type=zebra-blinds', image: '/images/zebra-blinds.png' },
    ],
  },
  {
    label: 'CURTAINS',
    href: '/products/curtains',
    children: [
      { label: 'Sheer Curtains', href: '/products/curtains?type=sheer-curtains', image: '/images/butta-sheer.png' },
      { label: 'Blackout Curtains', href: '/products/curtains?type=blackout-curtains', image: '/images/blue-floral-blackout.png' },
      { label: 'Kids Design Curtains', href: '/products/curtains?type=kids-design-curtains', image: '/images/kids-curtains.png' },
      { label: 'Cotton Curtains', href: '/products/curtains?type=cotton-curtains', image: '/images/cotton-drapery.png' },
      { label: 'Curtain Motors', href: '/products/accessories?type=curtain-motors', image: '/images/curtain-motor.png' },
    ],
  },
  {
    label: 'ACCESSORIES',
    href: '/products/accessories',
    children: [
      { label: 'Brackets', href: '/products/accessories?type=brackets', image: '/images/brackets.png' },
      { label: 'Curtain & Blind Motors', href: '/products/accessories?type=curtain-motors', image: '/images/curtain-motor.png' },
      { label: 'Curtain Rods', href: '/products/accessories?type=curtain-rods', image: '/images/brass-rods.png' },
      { label: 'Tie Backs', href: '/products/accessories?type=tie-backs', image: '/images/tie-back.png' },
    ],
  },
  { label: 'UPHOLSTERY', href: '/products/upholstery' },
]
