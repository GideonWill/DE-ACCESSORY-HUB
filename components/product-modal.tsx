'use client'

import React, { useState } from 'react'
import { X, Heart, ShoppingBag, ArrowRight, ShieldCheck, Check, Sparkles, Plus, Minus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/catalog'

export function ProductModal() {
  const {
    activeProduct,
    closeProductModal,
    addItem,
    buyNow,
    isFavorite,
    toggleFavorite,
  } = useCart()

  const [quantity, setQuantity] = useState(1)

  if (!activeProduct) return null

  const isFav = isFavorite(activeProduct.id)

  const handleAddToCart = () => {
    addItem(
      {
        id: activeProduct.id,
        name: activeProduct.name,
        brand: activeProduct.brand,
        price: activeProduct.price,
        image: activeProduct.image,
      },
      quantity
    )
    closeProductModal()
  }

  const handleBuyNow = () => {
    buyNow(activeProduct)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-card shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={closeProductModal}
          className="absolute right-4 top-4 z-20 rounded-full bg-background/80 p-2 text-foreground shadow backdrop-blur-sm transition-transform hover:scale-110 hover:bg-background"
          aria-label="Close product view"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Container */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden bg-muted flex items-center justify-center">
            {activeProduct.sale && (
              <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                SALE
              </span>
            )}
            <img
              src={activeProduct.image || '/placeholder.svg'}
              alt={activeProduct.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Details Container */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground/75">
                  {activeProduct.brand}
                </span>
                <button
                  onClick={() => toggleFavorite(activeProduct.id)}
                  className={`rounded-full p-2 transition-all ${
                    isFav ? 'bg-rose-50 text-rose-500' : 'bg-muted text-muted-foreground hover:text-rose-500'
                  }`}
                  aria-label="Favorite product"
                >
                  <Heart className={`h-5 w-5 ${isFav ? 'fill-current' : ''}`} />
                </button>
              </div>

              <h2 className="mt-2 font-serif text-xl md:text-2xl font-bold leading-snug text-foreground">
                {activeProduct.name}
              </h2>

              <p className="mt-3 text-2xl font-bold text-primary">
                {formatPrice(activeProduct.price)}
              </p>

              <div className="mt-4 space-y-2 border-t border-b border-border/60 py-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Custom made-to-measure window fitting</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Free doorstep measurement &amp; installation across Ghana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span>Premium high-durability fabrics &amp; hardware</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-foreground">Quantity</span>
                <div className="flex items-center rounded-lg border border-border bg-background">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2.5">
              <button
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-serif text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:brightness-105"
              >
                <span>Buy Now &amp; Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary/5 px-6 py-3 font-serif text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
