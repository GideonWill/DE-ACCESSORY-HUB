export type CatalogProduct = {
  name: string
  brand: string
  image: string
  price: number
  type: string
  sale?: boolean
}

export type CatalogType = {
  slug: string
  label: string
}

export type Category = {
  slug: string
  title: string
  heading: string
  intro: string
  hero: string
  types: CatalogType[]
  products: CatalogProduct[]
  seo: { title: string; body: string }[]
}

const cedi = (n: number) => n

export const categories: Category[] = [
  {
    slug: 'automation',
    title: 'Automated Tracks & Motors',
    heading: 'Wholesale Automated Tracks & Smart Curtain Motors',
    intro:
      'Complete window automation hardware — heavy duty motorized curtain tracks, curved smart rails, silent Wi-Fi drive motors, tubular blind motors, and wireless remote controllers.',
    hero: '/images/automated-tracks.png',
    types: [
      { slug: 'automated-tracks', label: 'Automated Tracks' },
      { slug: 'automated-motors', label: 'Automated Motors' },
    ],
    products: [
      { name: 'M100 Smart Motorized Aluminum Track Rail (3m–6m)', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 650, type: 'automated-tracks', sale: true },
      { name: 'M102QT Smart Wi-Fi Silent Curtain Motor Unit', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1450, type: 'automated-motors', sale: true },
      { name: 'Heavy-Duty Electric Belt Drive Curtain Track System', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 850, type: 'automated-tracks' },
      { name: 'M112QT Ultra-Quiet High Torque Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1850, type: 'automated-motors' },
      { name: 'Custom Curved Smart Motorized Track Assembly', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 980, type: 'automated-tracks' },
      { name: 'RM 6/28 Tubular Electric Motor for Blinds', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1150, type: 'automated-motors' },
      { name: 'Lithium Battery Rechargeable Cordless Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1550, type: 'automated-motors', sale: true },
      { name: 'Flush Recessed Ceiling Smart Track Channel', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 720, type: 'automated-tracks', sale: true },
    ],
    seo: [
      { title: 'Commercial Grade Window Automation', body: 'Engineered for smooth, silent operation under heavy drapery loads. Compatible with Tuya, Zigbee, RS485, Alexa, and Google Assistant.' },
      { title: 'Wholesale Warranty & Support', body: 'Includes a 5-year replacement warranty and dedicated technical installer support across Ghana.' },
    ],
  },
  {
    slug: 'automated-tracks',
    title: 'Automated Tracks',
    heading: 'Wholesale Automated & Smart Motorized Curtain Tracks',
    intro:
      'High-grade heavy duty motorized curtain tracks, curved smart tracks, belt-driven aluminum track assemblies, and ceiling-mount smart track systems built for commercial & residential installations.',
    hero: '/images/automated-tracks.png',
    types: [
      { slug: 'straight-tracks', label: 'Straight Motorized Tracks' },
      { slug: 'curved-tracks', label: 'Curved Smart Tracks' },
      { slug: 'heavy-duty-tracks', label: 'Heavy Duty Commercial Tracks' },
      { slug: 'recessed-tracks', label: 'Recessed Ceiling Tracks' },
    ],
    products: [
      { name: 'M100 Smart Motorized Aluminum Track Rail (3m–6m)', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 650, type: 'straight-tracks', sale: true },
      { name: 'Heavy-Duty Electric Belt Drive Curtain Track System', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 850, type: 'heavy-duty-tracks' },
      { name: 'Custom Curved Smart Motorized Track Assembly', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 980, type: 'curved-tracks' },
      { name: 'Flush Recessed Ceiling Smart Track Channel', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 720, type: 'recessed-tracks', sale: true },
      { name: 'Dual-Track Smart Motorized Drapery Rail Kit', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 1100, type: 'straight-tracks' },
      { name: 'Silent Ripple-Fold Automated Curtain Track Set', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 790, type: 'heavy-duty-tracks', sale: true },
    ],
    seo: [
      { title: 'Commercial Grade Quality', body: 'Engineered for smooth, silent operation under heavy drapery loads. Pre-assembled custom lengths up to 12 meters available for wholesale distribution.' },
      { title: 'Smart Home Compatible', body: 'Seamless integration with Tuya, Zigbee, RS485, Alexa, and Google Assistant automation controllers.' },
    ],
  },
  {
    slug: 'automated-motors',
    title: 'Automated Motors',
    heading: 'Wholesale Automated Motors for Curtains & Blinds',
    intro:
      'Explore high-torque silent curtain motors, tubular blind motors, battery-rechargeable Wi-Fi drives, and multi-channel RF remote automation control units.',
    hero: '/images/automated-motors.png',
    types: [
      { slug: 'curtain-motors', label: 'Curtain Drive Motors' },
      { slug: 'tubular-motors', label: 'Tubular Roller Motors' },
      { slug: 'battery-motors', label: 'Rechargeable Wireless Motors' },
      { slug: 'smart-gateways', label: 'RF Remotes & Smart Gateways' },
    ],
    products: [
      { name: 'M102QT Smart Wi-Fi Silent Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1450, type: 'curtain-motors', sale: true },
      { name: 'M112QT Ultra-Quiet High Torque Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1850, type: 'curtain-motors' },
      { name: 'RM 6/28 Tubular Electric Motor for Blinds', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1150, type: 'tubular-motors' },
      { name: 'Lithium Battery Rechargeable Cordless Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1550, type: 'battery-motors', sale: true },
      { name: '16-Channel Wireless RF Remote & Gateway Kit', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 380, type: 'smart-gateways' },
      { name: 'Zigbee 3.0 Smart Drapery Drive Motor Unit', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1620, type: 'curtain-motors' },
    ],
    seo: [
      { title: 'Silent & Powerful Operation', body: 'Ultra-quiet sound ratings under 30dB with heavy lifting load capacities suitable for high-ceiling drapery and commercial spaces.' },
      { title: 'Wholesale Warranty & Technical Support', body: 'All automated motors include a 5-year replacement warranty and dedicated installer technical guidance across Ghana.' },
    ],
  },
  {
    slug: 'tapes',
    title: 'Heading Tapes',
    heading: 'Wholesale Heading Tapes & Pleating Tapes',
    intro:
      'Industrial wholesale rolls of curtain heading tapes, S-wave pleat tapes, buckram stiffener tapes, transparent sheer tapes, and grommet reinforcement tapes.',
    hero: '/images/curtain-tapes.png',
    types: [
      { slug: 'wave-tapes', label: 'Wave Fold Tapes' },
      { slug: 'pleat-tapes', label: 'Pencil & Deep Pleat Tapes' },
      { slug: 'buckram-tapes', label: 'Buckram Heading Stiffeners' },
      { slug: 'sheer-tapes', label: 'Transparent Sheer Tapes' },
    ],
    products: [
      { name: '80mm S-Wave Fold Snap Tape (100m Roll)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 280, type: 'wave-tapes', sale: true },
      { name: 'Classic Deep Pinch Pleat Curtain Tape (50m Roll)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 210, type: 'pleat-tapes' },
      { name: 'Heavy Weight Woven Buckram Heading Tape (100m)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 340, type: 'buckram-tapes' },
      { name: 'Ultra-Clear Invisible Sheer Header Tape (100m)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 290, type: 'sheer-tapes', sale: true },
      { name: 'Multi-Pocket Pencil Pleat Curtain Tape (100m)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 260, type: 'pleat-tapes' },
      { name: 'Eyelet & Grommet Reinforcement Header Tape (50m)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 230, type: 'wave-tapes' },
    ],
    seo: [
      { title: 'Factory Direct Wholesale Bulk Rolls', body: 'High-density polyester and cotton woven tapes designed to withstand UV exposure and professional laundering without shrinkage.' },
      { title: 'Precision Drapery Hardware', body: 'Engineered pocket spacing for perfect uniform pleats, wave folds, and hotel-grade curtain finishes.' },
    ],
  },
  {
    slug: 'tie-hooks-backs',
    title: 'Tie Hooks & Tie Backs',
    heading: 'Wholesale Curtain Tie Hooks, Tie Backs & Holdbacks',
    intro:
      'Ghana’s finest wholesale collection of solid brass tie hooks, modern wall mounts, handcrafted royal tassels, magnetic pearl tie backs, and crystal holdbacks.',
    hero: '/images/tie-backs.png',
    types: [
      { slug: 'tie-hooks', label: 'Tie Hooks' },
      { slug: 'tie-backs', label: 'Tie Backs' },
    ],
    products: [
      { name: 'Solid Brass Antique Gold Curtain Tie Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 85, type: 'tie-hooks', sale: true },
      { name: 'Luxury Royal Tassel Curtain Tie Back Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 65, type: 'tie-backs', sale: true },
      { name: 'Modern Matte Black Metal Holdback Wall Mount (Pair)', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 75, type: 'tie-hooks' },
      { name: 'Strong Pearl Magnetic Curtain Tie Back Set (4-Pack)', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 75, type: 'tie-backs', sale: true },
      { name: 'Vintage Floral Carved Bronze Tie Back Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 95, type: 'tie-hooks' },
      { name: 'Hand-Woven Braided Rope Curtain Holdback Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 55, type: 'tie-backs' },
      { name: 'Heavy Duty Commercial Drapery Wall Hook Brackets', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 110, type: 'tie-hooks', sale: true },
      { name: 'Faceted Crystal Bead Decorative Drapery Tie Back', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 90, type: 'tie-backs' },
    ],
    seo: [
      { title: 'Premium Metal & Artisanal Finishes', body: 'Solid brass, zinc alloy electroplating, silk tassels, and rare earth magnets crafted for high-end drapery installations.' },
      { title: 'Bulk Wholesale Packs', body: 'Packaged in retail boxes or master contractor cartons for wholesale distribution.' },
    ],
  },
  {
    slug: 'tie-hooks',
    title: 'Tie Hooks',
    heading: 'Wholesale Decorative Curtain Tie Hooks & Holdbacks',
    intro:
      'Premium solid brass tie hooks, modern matte black drapery wall mounts, vintage antique bronze hooks, and heavy duty holdback brackets for curtains.',
    hero: '/images/tie-hooks.png',
    types: [
      { slug: 'brass-hooks', label: 'Solid Brass Tie Hooks' },
      { slug: 'black-hooks', label: 'Matte Black Holdbacks' },
      { slug: 'vintage-hooks', label: 'Antique Decorative Hooks' },
      { slug: 'heavy-duty-hooks', label: 'Heavy Duty Wall Hooks' },
    ],
    products: [
      { name: 'Solid Brass Antique Gold Curtain Tie Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 85, type: 'brass-hooks', sale: true },
      { name: 'Modern Matte Black Metal Holdback Wall Mount (Pair)', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 75, type: 'black-hooks' },
      { name: 'Vintage Floral Carved Bronze Tie Back Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 95, type: 'vintage-hooks' },
      { name: 'Heavy Duty Commercial Drapery Wall Hook Brackets', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 110, type: 'heavy-duty-hooks', sale: true },
      { name: 'Brushed Nickel Curved Holdback Hook Pair', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 90, type: 'brass-hooks' },
      { name: 'Minimalist Zinc Alloy Curtain Tie Hook Pack', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 65, type: 'black-hooks' },
    ],
    seo: [
      { title: 'Rust & Corrosion Resistant Finishes', body: 'Electroplated anti-tarnish metal finishes built to maintain lustre and strength under heavy curtain drapery weight.' },
      { title: 'Complete Installation Hardware', body: 'All tie hooks include matching mounting screws, wall anchors, and contractor bulk packaging.' },
    ],
  },
  {
    slug: 'tie-backs',
    title: 'Tie Backs',
    heading: 'Wholesale Premium Curtain Tie Backs & Holdbacks',
    intro:
      'Explore handcrafted tassel tie backs, strong magnetic pearl holdbacks, luxury braided rope tie backs, and crystal bead holdbacks in wholesale packs.',
    hero: '/images/tie-backs.png',
    types: [
      { slug: 'tassel-tiebacks', label: 'Tassel Tie Backs' },
      { slug: 'magnetic-tiebacks', label: 'Magnetic Pearl Tie Backs' },
      { slug: 'rope-tiebacks', label: 'Braided Rope Holdbacks' },
      { slug: 'crystal-tiebacks', label: 'Crystal Bead Tie Backs' },
    ],
    products: [
      { name: 'Luxury Royal Tassel Curtain Tie Back Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 65, type: 'tassel-tiebacks', sale: true },
      { name: 'Strong Pearl Magnetic Curtain Tie Back Set (4-Pack)', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 75, type: 'magnetic-tiebacks', sale: true },
      { name: 'Hand-Woven Braided Rope Curtain Holdback Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 55, type: 'rope-tiebacks' },
      { name: 'Faceted Crystal Bead Decorative Drapery Tie Back', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 90, type: 'crystal-tiebacks' },
      { name: 'Gold Cord Triple Knot Tassel Tie Back Set', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 80, type: 'tassel-tiebacks' },
      { name: 'Minimalist Wooden Bead Magnetic Tie Backs (Pair)', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 60, type: 'magnetic-tiebacks', sale: true },
    ],
    seo: [
      { title: 'Artisanal Craftsmanship', body: 'Crafted with premium silky cords, heavy-duty rare earth magnets, and high-shine electroplated beads for luxury interiors.' },
      { title: 'Wholesale Quantity Packs', body: 'Available in single set retail boxes or bulk master cartons for hotels, contractors, and interior retailers.' },
    ],
  },
  {
    slug: 'accessories',
    title: 'Curtain Accessories Wholesale Catalog',
    heading: 'Wholesale Curtain Accessories — Tracks, Motors, Tapes, Hooks & Tie Backs',
    intro:
      'Ghana’s ultimate wholesale hub for curtain hardware: automated track systems, smart motors, pleating & header tapes, decorative tie hooks, and luxury tie backs.',
    hero: '/images/automated-tracks.png',
    types: [
      { slug: 'automation', label: 'Automated Tracks & Motors' },
      { slug: 'tapes', label: 'Heading Tapes' },
      { slug: 'tie-hooks-backs', label: 'Tie Hooks & Tie Backs' },
    ],
    products: [
      { name: 'M100 Smart Motorized Aluminum Track Rail', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 650, type: 'automation', sale: true },
      { name: 'M102QT Smart Wi-Fi Silent Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1450, type: 'automation', sale: true },
      { name: '80mm S-Wave Fold Snap Tape (100m Roll)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 280, type: 'tapes', sale: true },
      { name: 'Solid Brass Antique Gold Curtain Tie Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 85, type: 'tie-hooks-backs', sale: true },
      { name: 'Luxury Royal Tassel Curtain Tie Back Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 65, type: 'tie-hooks-backs', sale: true },
      { name: 'Strong Pearl Magnetic Curtain Tie Back Set', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 75, type: 'tie-hooks-backs', sale: true },
      { name: 'Modern Matte Black Metal Holdback Wall Mount', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 75, type: 'tie-hooks-backs' },
      { name: 'RM 6/28 Tubular Electric Motor for Blinds', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1150, type: 'automation' },
    ],
    seo: [
      { title: 'The Wholesale Advantage', body: 'Direct factory pricing, massive stock availability in Ghana, doorstep delivery, and dedicated technical assistance for interior decorators.' },
      { title: 'Full Hardware Ecosystem', body: 'From smart motorized automation to small drapery fittings, get every curtain accessory under one roof.' },
    ],
  },
  {
    slug: 'blinds',
    title: 'Automated Motors & Tracks',
    heading: 'Wholesale Automated Tracks & Motors',
    intro: 'Looking for window automation? Explore our premium wholesale collection of motorized tracks and smart curtain motors.',
    hero: '/images/automated-tracks.png',
    types: [{ slug: 'automation', label: 'Automated Tracks & Motors' }],
    products: [
      { name: 'M100 Smart Motorized Aluminum Track Rail', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 650, type: 'automation', sale: true },
      { name: 'M102QT Smart Wi-Fi Silent Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 1450, type: 'automation', sale: true },
    ],
    seo: [{ title: 'Smart Automation', body: 'High performance motorized solutions for modern window treatments.' }],
  },
  {
    slug: 'curtains',
    title: 'Heading Tapes & Accessories',
    heading: 'Wholesale Heading Tapes & Hardware',
    intro: 'Explore our complete catalog of curtain heading tapes, pleating tapes, tie hooks, and luxury tie backs.',
    hero: '/images/curtain-tapes.png',
    types: [{ slug: 'tapes', label: 'Heading Tapes' }],
    products: [
      { name: '80mm S-Wave Fold Snap Tape (100m Roll)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 280, type: 'tapes', sale: true },
      { name: 'Luxury Royal Tassel Curtain Tie Back Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 65, type: 'tapes', sale: true },
    ],
    seo: [{ title: 'Drapery Accessories', body: 'Everything you need for perfect curtain creation and hanging.' }],
  },
  {
    slug: 'upholstery',
    title: 'Hooks & Tie Backs Wholesale',
    heading: 'Wholesale Curtain Tie Hooks & Holdbacks',
    intro: 'Discover solid brass tie hooks, wall mounts, and handcrafted tie backs for professional drapery installations.',
    hero: '/images/tie-hooks.png',
    types: [{ slug: 'tie-hooks-backs', label: 'Tie Hooks & Tie Backs' }],
    products: [
      { name: 'Solid Brass Antique Gold Curtain Tie Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 85, type: 'tie-hooks-backs', sale: true },
      { name: 'Strong Pearl Magnetic Curtain Tie Back Set', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 75, type: 'tie-hooks-backs', sale: true },
    ],
    seo: [{ title: 'Drapery Accessories', body: 'Decorative holdbacks and wall mounts for wholesale supply.' }],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function formatPrice(n: number) {
  if (n === 0) return 'GH₵0.00'
  return 'GH₵' + cedi(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
