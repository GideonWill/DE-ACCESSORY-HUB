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
    id: 'curtains',
    title: 'Curtains',
    products: [
      { name: 'Blue Floral Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/blue-floral-blackout.png', price: 'GH₵240.00', sale: true },
      { name: 'Butta Sheer Curtain Fabric for Windows', brand: 'KC Fabrics', image: '/images/butta-sheer.png', price: 'GH₵120.00', sale: true },
      { name: 'Carousell Emerald Embroidered Curtains', brand: 'Beautiful Homes With Asian Paints', image: '/images/emerald-embroidered.png', price: 'GH₵290.00', sale: true },
      { name: 'Cori Cotton Curtains for Home Decor', brand: 'Beautiful Homes With Asian Paints', image: '/images/cotton-drapery.png', price: 'GH₵200.00', sale: true },
    ],
  },
  {
    id: 'sheer-curtains',
    title: 'Sheer Curtains',
    products: [
      { name: 'Butta Sheer Curtain Fabric for Windows', brand: 'KC Fabrics', image: '/images/butta-sheer.png', price: 'GH₵120.00' },
      { name: 'Geometric Sheer Curtain Fabric for Living Room', brand: 'KC Fabrics', image: '/images/geometric-sheer.png', price: 'GH₵150.00' },
      { name: 'Oval Patta Sheer Curtain Fabric', brand: 'KC Fabrics', image: '/images/butta-sheer.png', price: 'GH₵110.00' },
      { name: 'Bolvia Timeless Fusion', brand: "D'Decor", image: '/images/geometric-sheer.png', price: 'GH₵180.00' },
    ],
  },
  {
    id: 'blackout-curtains',
    title: 'Blackout Curtains',
    products: [
      { name: 'Blue Floral Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/blue-floral-blackout.png', price: 'GH₵240.00', sale: true },
      { name: 'Floral Blackout Curtains for Living Room', brand: 'Shivanaa Homes', image: '/images/mustard-floral.png', price: 'GH₵240.00', sale: true },
      { name: 'Mustard Floral Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/mustard-floral.png', price: 'GH₵240.00', sale: true },
      { name: 'Plain Grey Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/grey-blackout.png', price: 'GH₵210.00', sale: true },
    ],
  },
  {
    id: 'motors',
    title: 'Curtain & Blind Motors',
    products: [
      { name: 'M102QT Smart Curtain Motor System', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 'GH₵1,450.00', sale: true },
      { name: 'M112QT Advanced Curtain Motor System', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 'GH₵1,850.00', sale: true },
      { name: 'RM 6/28 Tubular Motor for Blinds', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 'GH₵1,150.00' },
      { name: 'Terra Silent Curtain Motor System', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 'GH₵1,550.00', sale: true },
    ],
  },
  {
    id: 'blinds',
    title: 'Blinds',
    products: [
      { name: 'Zebra Blinds', brand: 'Aartex Furnishings', image: '/images/zebra-blinds.png', price: 'GH₵230.00' },
      { name: 'Roller Blinds', brand: 'Aartex Furnishings', image: '/images/roller-blinds.png', price: 'GH₵190.00' },
      { name: 'Wooden Blinds', brand: 'Aartex Furnishings', image: '/images/wooden-blinds.png', price: 'GH₵340.00' },
      { name: 'Roman Blinds', brand: 'Aartex Furnishings', image: '/images/roller-blinds.png', price: 'GH₵240.00' },
    ],
  },
  {
    id: 'upholstery',
    title: 'Upholstery',
    products: [
      { name: 'Carousell Emerald Embroidered Curtains', brand: 'Beautiful Homes With Asian Paints', image: '/images/emerald-embroidered.png', price: 'GH₵290.00' },
      { name: 'Cori Cotton Curtains for Home Decor', brand: 'Beautiful Homes With Asian Paints', image: '/images/cotton-drapery.png', price: 'GH₵200.00' },
      { name: 'Vincent Upholstery Fabric', brand: "D'Decor", image: '/images/upholstery-fabric.png', price: 'GH₵220.00' },
      { name: 'Isabella Cotton Curtains for Elegant Decor', brand: 'Beautiful Homes With Asian Paints', image: '/images/upholstery-fabric.png', price: 'GH₵220.00' },
    ],
  },
  {
    id: 'accessories',
    title: 'Curtain & Blind Accessories',
    products: [
      { name: 'Black Curtain Tie Back Set for Home Décor', brand: 'DE-ACCESSORIES', image: '/images/tie-back.png', price: 'GH₵40.00', sale: true },
      { name: 'Elegant Curtain Tie Back Tassels', brand: 'DE-ACCESSORIES', image: '/images/tie-back.png', price: 'GH₵50.00', sale: true },
      { name: 'Brass Curtain Rods', brand: 'DE-ACCESSORIES', image: '/images/brass-rods.png', price: 'GH₵140.00' },
      { name: 'Pearl Magnetic Curtain Tie Back Set', brand: 'DE-ACCESSORIES', image: '/images/tie-back.png', price: 'GH₵55.00', sale: true },
    ],
  },
]

export const partneredBrands = [
  'Asian Paints Beautiful Homes',
  "D'Decor",
  'Aartex Furnishings',
  'KC Fabrics',
  'Shivanaa Homes',
  'Mista Decor',
]

export const faqs = [
  {
    q: 'Do you offer a free home consultation?',
    a: 'Yes — completely free doorstep consultations across Ghana. Our design specialists visit your home or business, measure every window, and show you the full collection of fabrics, blinds, and motorized systems on the spot. No charges, no commitment. Call or WhatsApp +233 54647 8040 to book.',
  },
  {
    q: 'Do you install curtains and blinds?',
    a: 'Yes. Free professional installation is included with every single order at THE INTERIOR HUB. Our trained installation team handles all mounting, levels tracks/rods, and performs full operational checks. No hidden installation fees.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We serve residential and commercial clients across Accra and throughout Ghana. Contact us to schedule a home or office visit.',
  },
  {
    q: 'How long does delivery and installation take?',
    a: 'Standard orders are custom-crafted and installed within 5–7 working days from initial measurement. For urgent requirements, WhatsApp us at +233 54647 8040.',
  },
  {
    q: 'Do you offer smart motorised curtain and blind systems?',
    a: 'Yes. THE INTERIOR HUB provides state-of-the-art motorized curtain and blind automation. Control your window treatments via remote control, mobile app, or smart home assistants like Alexa and Google Home.',
  },
  {
    q: 'Can I get curtains and blinds custom-made to my exact window size?',
    a: 'Yes. Every curtain, blind, and accessory at THE INTERIOR HUB is custom made-to-measure. Nothing is generic. Our team ensures a precision fit for your space.',
  },
]
