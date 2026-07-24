import { SiteHeader } from '@/components/site-header'
import { HeroCarousel } from '@/components/hero-carousel'
import { PromoBanner } from '@/components/promo-banner'
import { ProductSection } from '@/components/product-section'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { ConsultationSection } from '@/components/consultation-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { productSections } from '@/lib/products'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroCarousel />
        <PromoBanner />

        {productSections.slice(0, 4).map((section) => (
          <ProductSection key={section.id} section={section} />
        ))}

        {productSections.slice(4).map((section) => (
          <ProductSection key={section.id} section={section} />
        ))}

        <HowItWorks />
        <Testimonials />
        <ConsultationSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}
