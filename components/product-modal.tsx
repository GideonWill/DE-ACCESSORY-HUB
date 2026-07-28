'use client'

import React, { useState, useEffect } from 'react'
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
  const [trackLength, setTrackLength] = useState('')
  const [motorSpec, setMotorSpec] = useState('Silent Wi-Fi Motor (220V)')
  const [bulkNotes, setBulkNotes] = useState('')

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProduct) {
        closeProductModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProduct, closeProductModal])

  if (!activeProduct) return null

  const isFav = isFavorite(activeProduct.id)

  const nameLower = activeProduct.name.toLowerCase()
  const catLower = (activeProduct.categorySlug || '').toLowerCase()
  const isAutomatedHardware =
    catLower.includes('automated') ||
    catLower.includes('track') ||
    catLower.includes('motor') ||
    nameLower.includes('track') ||
    nameLower.includes('motor') ||
    nameLower.includes('automated') ||
    nameLower.includes('tuya') ||
    nameLower.includes('drive')

  const validQty = Math.max(1, quantity || 1)
  const totalPrice = activeProduct.price * validQty

  const handleAddToCart = () => {
    addItem(
      {
        id: activeProduct.id,
        name: activeProduct.name,
        brand: activeProduct.brand,
        price: activeProduct.price,
        image: activeProduct.image,
        trackLength,
        motorSpec,
        bulkNotes,
      },
      validQty
    )
    closeProductModal()
  }

  const handleBuyNow = () => {
    buyNow(
      {
        ...activeProduct,
        trackLength,
        motorSpec,
        bulkNotes,
      },
      validQty
    )
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={closeProductModal} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row rounded-2xl bg-card shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={closeProductModal}
          className="absolute right-3 top-3 z-30 rounded-full bg-background/80 p-2 text-foreground shadow backdrop-blur-sm transition-all hover:scale-110 hover:bg-background"
          aria-label="Close modal (Esc)"
          title="Close (Esc)"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Column: Image */}
        <div className="relative w-full md:w-1/2 min-h-[260px] md:min-h-[480px] bg-muted flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-border/70">
          {activeProduct.sale && (
            <span className="absolute left-4 top-4 z-20 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground shadow-md">
              SALE
            </span>
          )}
          <img
            src={activeProduct.image || '/placeholder.svg'}
            alt={activeProduct.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Column: Details & Custom Specifications */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto p-5 sm:p-6 md:p-8 space-y-5 max-h-[90vh]">
          <div className="space-y-4">
            {/* Header / Brand & Favorite */}
            <div className="flex items-center justify-between gap-3 pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground/75">
                {activeProduct.brand}
              </span>
              <button
                onClick={() => toggleFavorite(activeProduct.id)}
                className={`rounded-full p-2 transition-all ${
                  isFav ? 'bg-rose-50 text-rose-500 ring-1 ring-rose-200' : 'bg-muted text-muted-foreground hover:text-rose-500'
                }`}
                aria-label="Favorite product"
              >
                <Heart className={`h-5 w-5 ${isFav ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Title & Dynamic Price Display */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-foreground">
                {activeProduct.name}
              </h2>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  {formatPrice(activeProduct.price)}
                </span>
                <span className="text-xs text-muted-foreground font-semibold">/ unit</span>
                {validQty > 1 && (
                  <span className="ml-auto rounded-xl bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 shadow-sm">
                    Calculated Total ({validQty} pcs): {formatPrice(totalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-2 border-y border-border/70 py-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Custom made-to-measure window fitting available</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>Free doorstep measurement &amp; nationwide supply across Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent shrink-0" />
                <span>Factory-direct wholesale pricing &amp; premium hardware warranty</span>
              </div>
            </div>

            {/* Wholesale Hardware Specifications Box (Only for Automated Tracks & Motors) */}
            {isAutomatedHardware ? (
              <div className="space-y-3 rounded-2xl bg-muted/40 p-4 border border-border/80 text-xs">
                <p className="font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <span>Automated Hardware Specifications</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block font-semibold text-foreground/80">Track Length (Meters)</label>
                    <input
                      type="text"
                      placeholder="e.g. 4.5m / Custom"
                      value={trackLength}
                      onChange={(e) => setTrackLength(e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-foreground/80">Motor Spec / Drive Type</label>
                    <select
                      value={motorSpec}
                      onChange={(e) => setMotorSpec(e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    >
                      <option value="Silent Wi-Fi Motor (220V)">Silent Wi-Fi Motor (220V)</option>
                      <option value="Zigbee Smart Drive">Zigbee Smart Drive</option>
                      <option value="Battery Rechargeable Motor">Battery Rechargeable Motor</option>
                      <option value="Standard RF Remote Motor">Standard RF Remote Motor</option>
                      <option value="Manual / Non-Motorized">Manual / Non-Motorized</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-semibold text-foreground/80">Bulk / Special Requirements</label>
                  <input
                    type="text"
                    placeholder="e.g. 2500 pcs for commercial project, custom bracket colors..."
                    value={bulkNotes}
                    onChange={(e) => setBulkNotes(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2 rounded-2xl bg-muted/30 p-3.5 border border-border/70 text-xs">
                <label className="font-bold uppercase tracking-wider text-foreground block">
                  Wholesale Bulk Order Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Custom finish preference, packaging requirements..."
                  value={bulkNotes}
                  onChange={(e) => setBulkNotes(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
                />
              </div>
            )}

            {/* Quantity Selector with Unconstrained Presets (Supports beyond 1000+ pcs, non-negative) */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                    Order Quantity (Pcs / Packs)
                  </span>
                  <span className="text-[11px] text-muted-foreground">Type custom amount or select bulk preset</span>
                </div>

                <div className="flex items-center rounded-xl border border-border bg-background shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted rounded-l-xl"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value)
                      setQuantity(isNaN(val) ? 1 : Math.max(1, val))
                    }}
                    className="w-24 text-center text-sm font-bold text-foreground outline-none bg-transparent"
                  />
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted rounded-r-xl"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Bulk Presets */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mr-1">
                  Bulk Quick Presets:
                </span>
                {[10, 50, 100, 500, 1000, 2500, 5000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setQuantity(preset)}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                      quantity === preset
                        ? 'bg-primary text-primary-foreground shadow'
                        : 'bg-muted/70 text-foreground hover:bg-muted'
                    }`}
                  >
                    {preset} pcs
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons with Dynamic Total Calculation */}
          <div className="space-y-2.5 pt-2 border-t border-border/80">
            <button
              onClick={handleBuyNow}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-serif text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.01] hover:brightness-105 active:scale-95"
            >
              <span>Buy Now &amp; Checkout ({formatPrice(totalPrice)})</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary/5 px-6 py-3 font-serif text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add {validQty} to Cart ({formatPrice(totalPrice)})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
