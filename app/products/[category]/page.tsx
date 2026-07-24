import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { PromoBanner } from '@/components/promo-banner'
import { CategoryListing } from '@/components/category-listing'
import { PartneredBrands } from '@/components/partnered-brands'
import { Testimonials } from '@/components/testimonials'
import { ConsultationSection } from '@/components/consultation-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { categories, getCategory } from '@/lib/catalog'

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) return { title: 'Not Found | THE INTERIOR HUB' }
  return {
    title: `${cat.title} | THE INTERIOR HUB`,
    description: cat.intro,
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<{ type?: string }>
}) {
  const { category } = await params
  const { type } = await searchParams
  const cat = getCategory(category)
  if (!cat) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        {/* Category hero */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              {cat.heading}
            </h1>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              {cat.intro}
            </p>
          </div>
        </section>

        <CategoryListing category={cat} initialType={type} />

        <PromoBanner />
        <PartneredBrands />

        {/* SEO content */}
        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Shop from a vast collection at THE INTERIOR HUB
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {cat.seo.map((block) => (
              <div key={block.title}>
                <h3 className="mb-2 font-serif text-xl font-semibold text-primary">
                  {block.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />
        <ConsultationSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}
