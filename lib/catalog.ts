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
    slug: 'blinds',
    title: 'Window Blinds',
    heading: 'Window Blinds — Custom-Made With Free Installation',
    intro:
      'Widest range of custom window blinds. All blinds are made to measure and installed free at your home. Types available: Zebra, Roller, Wooden, Honeycomb, Vertical & Roman Blinds.',
    hero: '/images/wooden-blinds.png',
    types: [
      { slug: 'honeycomb-blinds', label: 'Honeycomb Blinds' },
      { slug: 'roller-blinds', label: 'Roller Blinds' },
      { slug: 'roman-blinds', label: 'Roman Blinds' },
      { slug: 'vertical-blinds', label: 'Vertical Blinds' },
      { slug: 'wooden-blinds', label: 'Wooden Blinds' },
      { slug: 'zebra-blinds', label: 'Zebra Blinds' },
    ],
    products: [
      { name: 'Honeycomb Cellular Blinds', brand: 'Aartex Furnishings', image: '/images/honeycomb-blinds.png', price: 320, type: 'honeycomb-blinds' },
      { name: 'Honeycomb Blind for Light & Noise Control', brand: 'Aartex Furnishings', image: '/images/honeycomb-blinds.png', price: 350, type: 'honeycomb-blinds', sale: true },
      { name: 'Honeycomb Blind in Charcoal Grey Shade', brand: 'Aartex Furnishings', image: '/images/honeycomb-blinds.png', price: 380, type: 'honeycomb-blinds' },
      { name: 'Honeycomb Blind in Ice White Duo Design', brand: 'Aartex Furnishings', image: '/images/honeycomb-blinds.png', price: 410, type: 'honeycomb-blinds' },
      { name: 'Roller Blinds', brand: 'Aartex Furnishings', image: '/images/roller-blinds.png', price: 190, type: 'roller-blinds' },
      { name: 'Cordless Bamboo Roller Wooden Blind', brand: 'Aartex Furnishings', image: '/images/roller-blinds.png', price: 260, type: 'roller-blinds' },
      { name: 'Blackout Roller Blind for Bedrooms', brand: 'Aartex Furnishings', image: '/images/roller-blinds.png', price: 220, type: 'roller-blinds', sale: true },
      { name: 'Roman Blinds', brand: 'Aartex Furnishings', image: '/images/roman-blinds.png', price: 240, type: 'roman-blinds' },
      { name: 'Adjustable Roman Blinds', brand: 'Aartex Furnishings', image: '/images/roman-blinds.png', price: 280, type: 'roman-blinds' },
      { name: 'Dimensional Roman Shades — Layered Texture', brand: 'Aartex Furnishings', image: '/images/roman-blinds.png', price: 310, type: 'roman-blinds' },
      { name: 'Vertical Blinds', brand: 'Aartex Furnishings', image: '/images/vertical-blinds.png', price: 210, type: 'vertical-blinds' },
      { name: 'Elegant Blackout Vertical Blinds', brand: 'Aartex Furnishings', image: '/images/vertical-blinds.png', price: 250, type: 'vertical-blinds', sale: true },
      { name: 'Wooden Blinds', brand: 'Aartex Furnishings', image: '/images/wooden-blinds.png', price: 340, type: 'wooden-blinds' },
      { name: 'Custom Wooden Blinds for Windows — Walnut Finish', brand: 'Aartex Furnishings', image: '/images/wooden-blinds.png', price: 420, type: 'wooden-blinds' },
      { name: 'Cordless Vinyl Mini Wooden Blinds for Windows', brand: 'Aartex Furnishings', image: '/images/wooden-blinds.png', price: 360, type: 'wooden-blinds', sale: true },
      { name: 'Zebra Blinds', brand: 'Aartex Furnishings', image: '/images/zebra-blinds.png', price: 230, type: 'zebra-blinds' },
      { name: 'Brown Zebra Window Blind for Day & Night Use', brand: 'Aartex Furnishings', image: '/images/zebra-blinds.png', price: 270, type: 'zebra-blinds' },
      { name: 'Dual Layer Zebra Window Blind Indoor Use', brand: 'Aartex Furnishings', image: '/images/zebra-blinds.png', price: 290, type: 'zebra-blinds', sale: true },
    ],
    seo: [
      { title: 'Tailored Elegance', body: 'Check out our exclusive catalogue of window blinds to take your interior design to the next level. Every room will have a touch of class with items ranging from stylish chic roller blinds to timeless Venetians crafted with great care and detail.' },
      { title: 'Versatility Redefined', body: 'Our window blinds ensure that there is something for everyone. Select from a range of materials, patterns, and colours that will blend effortlessly with your interior decor.' },
      { title: 'Innovative Features', body: 'Our blinds are powered by state-of-the-art technology for you to experience the comfort of modern living. Motorised features offer convenience for lighting and privacy.' },
      { title: 'Durability Meets Design', body: 'We always place a high premium on quality. The durability of our window blinds is beyond doubt as they are made from strong materials that stand the test of time.' },
    ],
  },
  {
    slug: 'curtains',
    title: 'Curtains',
    heading: 'Custom Curtains — Free Home Visit & Installation',
    intro:
      'Discover a vast collection of made-to-measure curtains — sheer, blackout, cotton and kids designs. Free home measurement, free installation and fast service.',
    hero: '/images/blue-floral-blackout.png',
    types: [
      { slug: 'sheer-curtains', label: 'Sheer Curtains' },
      { slug: 'blackout-curtains', label: 'Blackout Curtains' },
      { slug: 'kids-design-curtains', label: 'Kids Design Curtains' },
      { slug: 'cotton-curtains', label: 'Cotton Curtains' },
    ],
    products: [
      { name: 'Butta Sheer Curtain Fabric for Windows', brand: 'KC Fabrics', image: '/images/butta-sheer.png', price: 120, type: 'sheer-curtains' },
      { name: 'Geometric Sheer Curtain Fabric for Living Room', brand: 'KC Fabrics', image: '/images/geometric-sheer.png', price: 150, type: 'sheer-curtains' },
      { name: 'Oval Patta Sheer Curtain Fabric', brand: 'KC Fabrics', image: '/images/butta-sheer.png', price: 110, type: 'sheer-curtains' },
      { name: 'Bolvia Timeless Fusion Sheer', brand: "D'Decor", image: '/images/geometric-sheer.png', price: 180, type: 'sheer-curtains' },
      { name: 'Blue Floral Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/blue-floral-blackout.png', price: 240, type: 'blackout-curtains', sale: true },
      { name: 'Mustard Floral Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/mustard-floral.png', price: 240, type: 'blackout-curtains', sale: true },
      { name: 'Plain Grey Blackout Curtains 9ft', brand: 'Shivanaa Homes', image: '/images/grey-blackout.png', price: 210, type: 'blackout-curtains', sale: true },
      { name: 'Geometric Blackout Blinds for Modern Homes', brand: 'Shivanaa Homes', image: '/images/blue-floral-blackout.png', price: 250, type: 'blackout-curtains' },
      { name: 'Football Print Curtain Fabric for Kids Room', brand: 'KC Fabrics', image: '/images/kids-curtains.png', price: 160, type: 'kids-design-curtains' },
      { name: 'Hot Air Balloon Vintage Curtain Fabric', brand: 'KC Fabrics', image: '/images/kids-curtains.png', price: 170, type: 'kids-design-curtains', sale: true },
      { name: 'Cori Cotton Curtains for Home Decor', brand: 'Beautiful Homes With Asian Paints', image: '/images/cotton-drapery.png', price: 200, type: 'cotton-curtains' },
      { name: 'Cotton Drapery Fabric for Curtains', brand: 'Beautiful Homes With Asian Paints', image: '/images/cotton-drapery.png', price: 190, type: 'cotton-curtains' },
      { name: 'Isabella Cotton Curtains for Elegant Decor', brand: 'Beautiful Homes With Asian Paints', image: '/images/cotton-drapery.png', price: 220, type: 'cotton-curtains' },
      { name: 'Carousell Emerald Embroidered Curtains', brand: 'Beautiful Homes With Asian Paints', image: '/images/emerald-embroidered.png', price: 290, type: 'cotton-curtains', sale: true },
    ],
    seo: [
      { title: 'Made To Measure', body: 'Every curtain is custom made to your exact window size. Our team visits your home, measures every window and delivers a perfect fit with free professional installation.' },
      { title: 'Fabrics For Every Home', body: 'From light and airy sheers to complete blackout drapes, choose from hundreds of premium fabrics, patterns and colours that suit your interior and lifestyle.' },
      { title: 'Complete Light Control', body: 'Blackout curtains block sunlight for restful bedrooms and glare-free living rooms, while sheers diffuse soft daylight for an elegant look.' },
      { title: 'Free Installation Included', body: 'Professional installation is free with every order. Our trained team hangs, adjusts and cleans up so your curtains look flawless from day one.' },
    ],
  },
  {
    slug: 'accessories',
    title: 'Curtain & Blind Accessories',
    heading: 'Curtain & Blind Accessories — Rods, Brackets, Motors & Tie Backs',
    intro:
      'Complete your windows with premium accessories — decorative curtain rods, sturdy brackets, motorised systems and elegant tie backs. All fitted free at your home.',
    hero: '/images/brass-rods.png',
    types: [
      { slug: 'brackets', label: 'Brackets' },
      { slug: 'curtain-motors', label: 'Curtain & Blind Motors' },
      { slug: 'curtain-rods', label: 'Curtain Rods' },
      { slug: 'tie-backs', label: 'Tie Backs' },
    ],
    products: [
      { name: 'Heavy Duty Curtain Rod Brackets', brand: 'DE-ACCESSORIES', image: '/images/brackets.png', price: 45, type: 'brackets' },
      { name: 'Adjustable Wall Mount Brackets', brand: 'DE-ACCESSORIES', image: '/images/brackets.png', price: 55, type: 'brackets' },
      { name: 'Ceiling Mount Bracket Set', brand: 'DE-ACCESSORIES', image: '/images/brackets.png', price: 65, type: 'brackets', sale: true },
      { name: 'M102QT Smart Curtain Motor System', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 1450, type: 'curtain-motors', sale: true },
      { name: 'M112QT Advanced Curtain Motor System', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 1850, type: 'curtain-motors', sale: true },
      { name: 'RM 6/28 Tubular Motor for Blinds', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 1150, type: 'curtain-motors' },
      { name: 'Terra Silent Curtain Motor System', brand: 'Terra Automation', image: '/images/curtain-motor.png', price: 1550, type: 'curtain-motors', sale: true },
      { name: 'Brass Curtain Rods', brand: 'DE-ACCESSORIES', image: '/images/brass-rods.png', price: 140, type: 'curtain-rods' },
      { name: 'Antique Gold Curtain Rod with Finials', brand: 'DE-ACCESSORIES', image: '/images/brass-rods.png', price: 180, type: 'curtain-rods' },
      { name: 'Matte Black Curtain Rod Set', brand: 'DE-ACCESSORIES', image: '/images/brass-rods.png', price: 160, type: 'curtain-rods', sale: true },
      { name: 'Black Curtain Tie Back Set for Home Décor', brand: 'DE-ACCESSORIES', image: '/images/tie-back.png', price: 40, type: 'tie-backs', sale: true },
      { name: 'Elegant Curtain Tie Back Tassels', brand: 'DE-ACCESSORIES', image: '/images/tie-back.png', price: 50, type: 'tie-backs', sale: true },
      { name: 'Pearl Magnetic Curtain Tie Back Set', brand: 'DE-ACCESSORIES', image: '/images/tie-back.png', price: 55, type: 'tie-backs', sale: true },
    ],
    seo: [
      { title: 'Finishing Touches', body: 'The right accessories transform good curtains into a stunning window. Choose from decorative rods, finials, brackets and tie backs in a range of finishes.' },
      { title: 'Smart Motorisation', body: 'Control your curtains and blinds with a remote, smartphone app, Alexa or Google Home. Silent motors ideal for large windows.' },
      { title: 'Built To Last', body: 'Our hardware is engineered from premium metals and finishes that resist wear, so your window treatments stay smooth and secure for years.' },
      { title: 'Free Fitting', body: 'Every accessory is professionally installed free of charge. Our team ensures rods are level, motors are calibrated and everything works perfectly.' },
    ],
  },
  {
    slug: 'upholstery',
    title: 'Upholstery',
    heading: 'Upholstery Fabrics & Services',
    intro:
      'Refresh your sofas, chairs and headboards with premium upholstery fabrics. Choose from luxurious textures and patterns, with expert measurement and fitting at your home.',
    hero: '/images/upholstery-sofa.png',
    types: [
      { slug: 'sofa-fabric', label: 'Sofa Fabric' },
      { slug: 'chair-fabric', label: 'Chair Fabric' },
      { slug: 'headboard-fabric', label: 'Headboard Fabric' },
    ],
    products: [
      { name: 'Vincent Upholstery Fabric', brand: "D'Decor", image: '/images/upholstery-fabric.png', price: 220, type: 'sofa-fabric' },
      { name: 'Textured Weave Sofa Fabric', brand: "D'Decor", image: '/images/upholstery-fabric.png', price: 250, type: 'sofa-fabric', sale: true },
      { name: 'Premium Chenille Sofa Fabric', brand: 'KC Fabrics', image: '/images/upholstery-fabric.png', price: 230, type: 'sofa-fabric' },
      { name: 'Velvet Chair Upholstery Fabric', brand: "D'Decor", image: '/images/upholstery-fabric.png', price: 270, type: 'chair-fabric' },
      { name: 'Linen Blend Chair Fabric', brand: 'KC Fabrics', image: '/images/upholstery-fabric.png', price: 200, type: 'chair-fabric' },
      { name: 'Emerald Embroidered Headboard Fabric', brand: 'Beautiful Homes With Asian Paints', image: '/images/emerald-embroidered.png', price: 310, type: 'headboard-fabric', sale: true },
      { name: 'Tufted Velvet Headboard Fabric', brand: "D'Decor", image: '/images/upholstery-fabric.png', price: 330, type: 'headboard-fabric' },
      { name: 'Cotton Drapery Upholstery Blend', brand: 'Beautiful Homes With Asian Paints', image: '/images/cotton-drapery.png', price: 190, type: 'sofa-fabric' },
    ],
    seo: [
      { title: 'Transform Your Furniture', body: 'Give tired sofas and chairs a brand new life with premium upholstery fabrics chosen and fitted by our experts, right at your home.' },
      { title: 'Luxurious Textures', body: 'From plush velvets to durable weaves and soft linens, our upholstery range offers texture and colour for every style of interior.' },
      { title: 'Expert Craftsmanship', body: 'Our skilled team measures, cuts and fits every piece with precision so your furniture looks tailor-made and lasts for years.' },
      { title: 'Home Service', body: 'Free home consultation and measurement. We bring the fabric library to you for easy selection.' },
    ],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function formatPrice(n: number) {
  if (n === 0) return 'GH₵0.00'
  return 'GH₵' + cedi(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
