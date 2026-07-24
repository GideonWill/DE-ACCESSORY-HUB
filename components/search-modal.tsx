'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Search, X, ShoppingBag, Eye, ArrowRight, Sparkles, Tag } from 'lucide-react'
import { useCart, type ProductView } from '@/lib/cart-context'
import { categories, formatPrice } from '@/lib/catalog'
import { productSections } from '@/lib/products'

export function SearchModal() {
  const { isSearchOpen, closeSearch, openProductModal, addItem } = useCart()
  const [query, setQuery] = useState('')

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isSearchOpen) closeSearch()
        else {
          // Open search if trigger is fired
        }
      }
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen, closeSearch])

  // Aggregate all products across catalog categories & featured sections
  const allProducts = useMemo(() => {
    const list: ProductView[] = []
    const seen = new Set<string>()

    // Catalog categories
    categories.forEach((cat) => {
      cat.products.forEach((p, i) => {
        const id = `search-cat-${cat.slug}-${i}-${p.name}`
        if (!seen.has(id)) {
          seen.add(id)
          list.push({
            id,
            name: p.name,
            brand: p.brand,
            price: p.price,
            image: p.image,
            sale: p.sale,
          })
        }
      })
    })

    // Featured product sections
    productSections.forEach((sec) => {
      sec.products.forEach((p, i) => {
        const numericPrice = p.price
          ? parseFloat(p.price.replace(/[^0-9.]/g, '')) || 200
          : 200
        const id = `search-sec-${sec.id}-${i}-${p.name}`
        if (!seen.has(id)) {
          seen.add(id)
          list.push({
            id,
            name: p.name,
            brand: p.brand,
            price: numericPrice,
            image: p.image,
            sale: p.sale,
          })
        }
      })
    })

    return list
  }, [])

  // Filter products based on search query
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.price.toString().includes(q)
    )
  }, [query, allProducts])

  if (!isSearchOpen) return null

  const popularTags = [
    'Honeycomb Blinds',
    'Blackout Curtains',
    'Zebra Blinds',
    'Wooden Blinds',
    'Curtain Motors',
    'Cotton Curtains',
    'Tie Backs',
    'Upholstery',
  ]

  const handleSelectProduct = (product: ProductView) => {
    closeSearch()
    openProductModal(product)
  }

  const handleAddToCart = (product: ProductView) => {
    addItem(product)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-start justify-center pt-16 px-4 pb-10">
      <div className="relative w-full max-w-3xl rounded-2xl bg-card shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in duration-200">
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 border-b border-border bg-white px-5 py-4 text-[#5d1019]">
          <Search className="h-5 w-5 text-primary shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search curtains, blinds, motors, accessories or brands..."
            className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="rounded-lg bg-muted px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-border"
          >
            Esc
          </button>
        </div>

        {/* Search Content Body */}
        <div className="max-h-[70vh] overflow-y-auto p-5">
          {!query.trim() ? (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    <Tag className="h-3 w-3 text-primary" />
                    <span>{tag}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Quick Catalog Categories
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setQuery(cat.title)}
                      className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-4 text-center transition-all hover:border-primary hover:shadow-md"
                    >
                      <img
                        src={cat.hero}
                        alt={cat.title}
                        className="h-12 w-12 rounded-lg object-cover mb-2"
                      />
                      <span className="text-xs font-bold text-foreground">{cat.title}</span>
                      <span className="text-[10px] text-muted-foreground">{cat.products.length} products</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <Search className="mx-auto h-10 w-10 text-muted-foreground/40 mb-3" />
              <p className="text-base font-bold text-foreground">No products found for &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-xs">Try searching for &quot;Blinds&quot;, &quot;Curtains&quot;, &quot;Motors&quot;, or &quot;Aartex&quot;</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Found <span className="text-primary font-bold">{searchResults.length}</span> {searchResults.length === 1 ? 'result' : 'results'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-border bg-background p-3 transition-all hover:border-primary hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={product.image || '/placeholder.svg'}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        {product.sale && (
                          <span className="absolute left-1 top-1 rounded bg-primary px-1 text-[9px] font-bold text-primary-foreground">
                            SALE
                          </span>
                        )}
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {product.brand}
                        </span>
                        <h4 className="line-clamp-1 text-xs font-bold text-foreground group-hover:text-primary">
                          {product.name}
                        </h4>
                        <p className="text-xs font-bold text-primary">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToCart(product)
                        }}
                        className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSelectProduct(product)
                        }}
                        className="rounded-lg bg-muted p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label="View product"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
