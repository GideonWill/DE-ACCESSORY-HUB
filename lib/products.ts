export type Product = {
  name: string
  brand: string
  image: string
  price?: string
  sale?: boolean
}

export type ProductSection = {
  id: string
  title: string
  products: Product[]
}

export const productSections: ProductSection[] = [
  {
    id: 'automated-tracks',
    title: 'Automated Tracks',
    products: [
      { name: 'M100 Smart Motorized Aluminum Track Rail', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 'GH₵650.00', sale: true },
      { name: 'Heavy-Duty Electric Belt Drive Track System', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 'GH₵850.00', sale: true },
      { name: 'Custom Curved Smart Motorized Track Assembly', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 'GH₵980.00' },
      { name: 'Flush Recessed Ceiling Smart Track Channel', brand: 'DE-WHOLESALE', image: '/images/automated-tracks.png', price: 'GH₵720.00', sale: true },
    ],
  },
  {
    id: 'automated-motors',
    title: 'Automated Motors',
    products: [
      { name: 'M102QT Smart Wi-Fi Silent Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 'GH₵1,450.00', sale: true },
      { name: 'M112QT Ultra-Quiet High Torque Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 'GH₵1,850.00', sale: true },
      { name: 'RM 6/28 Tubular Electric Motor for Blinds', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 'GH₵1,150.00' },
      { name: 'Lithium Battery Rechargeable Curtain Motor', brand: 'Terra Automation', image: '/images/automated-motors.png', price: 'GH₵1,550.00', sale: true },
    ],
  },
  {
    id: 'tapes',
    title: 'Heading Tapes',
    products: [
      { name: '80mm S-Wave Fold Snap Tape (100m Roll)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 'GH₵280.00', sale: true },
      { name: 'Classic Deep Pinch Pleat Curtain Tape (50m Roll)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 'GH₵210.00' },
      { name: 'Heavy Weight Woven Buckram Heading Tape (100m)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 'GH₵340.00', sale: true },
      { name: 'Ultra-Clear Invisible Sheer Header Tape (100m)', brand: 'DE-WHOLESALE', image: '/images/curtain-tapes.png', price: 'GH₵290.00' },
    ],
  },
  {
    id: 'tie-hooks',
    title: 'Tie Hooks & Wall Mounts',
    products: [
      { name: 'Solid Brass Antique Gold Curtain Tie Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 'GH₵85.00', sale: true },
      { name: 'Modern Matte Black Metal Holdback Wall Mount', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 'GH₵75.00' },
      { name: 'Vintage Floral Carved Bronze Tie Back Hook Set', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 'GH₵95.00', sale: true },
      { name: 'Heavy Duty Commercial Drapery Wall Hook Brackets', brand: 'DE-WHOLESALE', image: '/images/tie-hooks.png', price: 'GH₵110.00' },
    ],
  },
  {
    id: 'tie-backs',
    title: 'Tie Backs & Tassels',
    products: [
      { name: 'Luxury Royal Tassel Curtain Tie Back Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 'GH₵65.00', sale: true },
      { name: 'Strong Pearl Magnetic Curtain Tie Back Set', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 'GH₵75.00', sale: true },
      { name: 'Hand-Woven Braided Rope Curtain Holdback Pair', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 'GH₵55.00' },
      { name: 'Faceted Crystal Bead Decorative Drapery Tie Back', brand: 'DE-WHOLESALE', image: '/images/tie-backs.png', price: 'GH₵90.00', sale: true },
    ],
  },
]

export const partneredBrands = [
  'Terra Automation',
  'DE-WHOLESALE Hardware',
  'Somfy Automation',
  'Tuya Smart Drapery',
  'Mista Accessories',
  'Aartex Wholesale',
]

export const faqs = [
  {
    q: 'Do you offer wholesale bulk pricing for contractors and retailers?',
    a: 'Yes! THE CURTAIN ACCESSORIES WHOLESALE HUB is Ghana’s direct wholesale distributor for automated tracks, motors, tapes, tie hooks, and tie backs. Contact us for bulk volume discounts and contractor pricing.',
  },
  {
    q: 'What types of curtain accessories do you stock?',
    a: 'We specialize in 5 main accessory lines: Automated Tracks, Automated Motors, Curtain Pleating & Wave Tapes, Decorative Tie Hooks, and Luxury Tie Backs.',
  },
  {
    q: 'Do you offer installation guidance and support for motorized systems?',
    a: 'Yes. Our technical team provides on-site and remote installation assistance for all automated smart track and motor systems across Ghana.',
  },
  {
    q: 'Which smart home ecosystems are your automated motors compatible with?',
    a: 'Our smart motors support Tuya Smart, Zigbee, Wi-Fi, RS485, Alexa, Google Home, and dedicated RF multi-channel wireless remotes.',
  },
  {
    q: 'How long does wholesale delivery take in Ghana?',
    a: 'Orders within Accra and Greater Accra are delivered same-day or next-day. Regional deliveries across Kumasi, Takoradi, Tamale, and other regions take 1–3 business days.',
  },
]
