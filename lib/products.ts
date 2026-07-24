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
    q: 'Do you offer a free home visit in Gurgaon & South Delhi?',
    a: 'Yes \u2014 completely free home visits across Gurgaon and South Delhi. Our designer visits your home, measures every window, and shows you the full collection of fabrics and blinds on the spot. No charges, no commitment. We serve DLF Phase 1\u20135, Sohna Road, Golf Course Road, Sector 65, Dwarka Expressway, Vasant Kunj, Vasant Vihar, Saket, Hauz Khas, Greater Kailash, Defence Colony, and all NCR. Call or WhatsApp +91 98101 29384 to book.',
  },
  {
    q: 'Do you install curtains and blinds?',
    a: 'Yes. Free professional installation is included with every single order at Kingdom of Curtains. Our trained team visits your home with all tools and hardware, installs curtain rods or blind tracks, hangs and adjusts everything, and does a complete cleanup before leaving. No installation charges. No hidden fees.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'All of Gurgaon \u2014 DLF Phase 1 to 5, Sohna Road, Golf Course Road, Sector 65, South City, Palam Vihar, Dwarka Expressway, Nirvana Country, Vatika City and all surrounding sectors. South Delhi \u2014 Vasant Kunj, Vasant Vihar, Saket, Hauz Khas, Greater Kailash, Defence Colony, Malviya Nagar, South Extension, New Friends Colony, Chattarpur. Also Noida, Greater Noida, and Faridabad.',
  },
  {
    q: 'How long does delivery and installation take?',
    a: 'Standard orders are ready within 7\u201310 working days from measurement to installation. Our team measures your windows on the home visit, fabricates everything to exact size, and returns for professional installation. For urgent requirements WhatsApp us at +91 98101 29384.',
  },
  {
    q: 'Do you sell motorised curtains?',
    a: 'Yes. Kingdom of Curtains is one of the few stores in Gurgaon offering motorised curtain and blind systems. Control with remote, smartphone app, Alexa, or Google Home. Silent motors. Ideal for high-rise apartments with large windows. Free demo available on home visit. Free installation included.',
  },
  {
    q: 'Can I get curtains custom-made to my window size?',
    a: 'Yes. Every curtain and blind at Kingdom of Curtains is made to measure. Nothing is ready-made or generic. Our team visits your home, takes exact measurements of every window, and delivers a perfect custom fit with free professional installation.',
  },
]
