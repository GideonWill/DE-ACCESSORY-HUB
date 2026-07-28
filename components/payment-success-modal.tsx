'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle2, ShoppingBag, Truck, ArrowRight, ShieldCheck } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { clearCart, openTrackModal } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [orderRef, setOrderRef] = useState('')

  useEffect(() => {
    const isPaymentSuccess = searchParams.get('payment') === 'success' || searchParams.get('trxref') || searchParams.get('reference')
    const ref = searchParams.get('orderRef') || searchParams.get('reference') || searchParams.get('trxref') || ''

    if (isPaymentSuccess) {
      setIsOpen(true)
      if (ref) setOrderRef(ref)
      clearCart()
    }
  }, [searchParams, clearCart])

  if (!isOpen) return null

  const handleContinueShopping = () => {
    setIsOpen(false)
    // Clear URL parameters
    router.replace('/', { scroll: false })
  }

  const handleTrackOrder = () => {
    setIsOpen(false)
    router.replace('/', { scroll: false })
    openTrackModal()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-card p-6 sm:p-8 shadow-2xl border border-border text-center animate-in fade-in zoom-in-95 duration-300">
        {/* Animated Green Check Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-12 w-12" />
        </div>

        {/* Title */}
        <h2 className="mt-5 font-serif text-2xl font-bold text-foreground">
          Payment Successful!
        </h2>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Thank you! Your payment to <strong className="text-foreground font-semibold">THE CURTAIN ACCESSORIES WHOLESALE HUB</strong> has been completed successfully.
        </p>

        {orderRef && (
          <div className="mt-4 rounded-xl bg-muted/60 p-3 text-xs border border-border/80">
            <span className="text-muted-foreground block font-medium">Order Reference</span>
            <span className="font-mono font-bold text-primary text-sm">{orderRef}</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          <span>Specifications logged to factory queue. Free doorstep measurement &amp; fitting included.</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2.5">
          <button
            onClick={handleContinueShopping}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-serif text-base font-bold text-primary-foreground shadow-lg transition-all hover:brightness-110 active:scale-95"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>

          <button
            onClick={handleTrackOrder}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-serif text-sm font-bold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <Truck className="h-4 w-4 text-emerald-600" />
            <span>Track Live Order Status</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function PaymentSuccessModal() {
  return (
    <Suspense fallback={null}>
      <PaymentSuccessContent />
    </Suspense>
  )
}
