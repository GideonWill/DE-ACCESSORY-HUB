'use client'

import React, { useState } from 'react'
import { X, CheckCircle2, ShieldCheck, CreditCard, Smartphone, Truck, ChevronLeft, Lock } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/catalog'

type PaymentMethod = 'paystack' | 'cod'

export function CheckoutModal() {
  const {
    items,
    subtotal,
    isCheckoutOpen,
    closeCheckout,
    clearCart,
  } = useCart()

  const [step, setStep] = useState<'form' | 'success'>('form')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paystack')
  const [orderRef, setOrderRef] = useState('')

  // Form fields
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [region, setRegion] = useState('Greater Accra')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isCheckoutOpen) return null

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      const generatedRef = 'TH-GH-' + Math.floor(100000 + Math.random() * 900000)
      setOrderRef(generatedRef)
      setIsSubmitting(false)
      setStep('success')
    }, 1200)
  }

  const handleFinish = () => {
    clearCart()
    setStep('form')
    closeCheckout()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-card shadow-2xl overflow-hidden border border-border">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-white text-[#5d1019] px-6 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#5d1019]" />
            <h2 className="font-serif text-xl font-bold">
              {step === 'form' ? 'Checkout & Order' : 'Order Confirmed'}
            </h2>
          </div>
          <button
            onClick={closeCheckout}
            className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="p-6">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground border-b border-border pb-2">
                    1. Contact &amp; Delivery Information
                  </h3>

                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-foreground uppercase tracking-wide">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="kwame@example.com"
                          className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-foreground uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+233 54 647 8040"
                          className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground uppercase tracking-wide">
                        Street Address / Landmark *
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="House No., Street Name, Landmark"
                        className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-foreground uppercase tracking-wide">
                        Region *
                      </label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="Greater Accra">Greater Accra Region</option>
                        <option value="Ashanti">Ashanti Region (Kumasi)</option>
                        <option value="Western">Western Region (Takoradi)</option>
                        <option value="Central">Central Region (Cape Coast)</option>
                        <option value="Eastern">Eastern Region (Koforidua)</option>
                        <option value="Northern">Northern Region (Tamale)</option>
                        <option value="Volta">Volta Region (Ho)</option>
                        <option value="Bono">Bono Region (Sunyani)</option>
                        <option value="Other">Other Ghana Location</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground border-b border-border pb-2">
                    2. Payment Option
                  </h3>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex cursor-pointer flex-col rounded-xl border p-4 transition-all ${
                        paymentMethod === 'paystack'
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 font-semibold text-sm text-foreground">
                          <CreditCard className="h-4 w-4 text-primary" /> Paystack Online
                        </span>
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'paystack'}
                          onChange={() => setPaymentMethod('paystack')}
                          className="accent-primary"
                        />
                      </div>
                      <span className="mt-2 text-xs text-muted-foreground">
                        Card / Mobile Money (MTN MoMo, Telecel Cash, AT Money).
                      </span>
                    </label>

                    <label
                      className={`flex cursor-pointer flex-col rounded-xl border p-4 transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 font-semibold text-sm text-foreground">
                          <Truck className="h-4 w-4 text-primary" /> Pay on Delivery
                        </span>
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="accent-primary"
                        />
                      </div>
                      <span className="mt-2 text-xs text-muted-foreground">
                        Pay upon doorstep delivery &amp; free installation.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="flex flex-col justify-between rounded-xl border border-border bg-muted/40 p-5">
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground border-b border-border pb-2">
                    Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
                  </h3>

                  <div className="mt-4 max-h-60 overflow-y-auto space-y-3 pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.image || '/placeholder.svg'}
                            alt={item.name}
                            className="h-10 w-10 rounded-md object-cover border border-border"
                          />
                          <div>
                            <p className="font-semibold text-foreground line-clamp-1">{item.name}</p>
                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-bold text-foreground shrink-0">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-border pt-3 space-y-2 text-xs">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="font-semibold text-foreground">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery &amp; Installation</span>
                      <span className="font-semibold text-emerald-600">FREE</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between text-sm font-bold text-foreground">
                      <span>Total Amount</span>
                      <span className="text-base text-primary">{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-serif text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:brightness-105 disabled:opacity-50"
                  >
                    <Lock className="h-4 w-4" />
                    <span>
                      {isSubmitting
                        ? 'Processing Order...'
                        : paymentMethod === 'paystack'
                        ? `Pay ${formatPrice(subtotal)} with Paystack`
                        : 'Confirm & Place Order'}
                    </span>
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground">
                    🔒 SSL Encrypted &amp; Secured Purchase
                  </p>
                </div>
              </div>
            </div>
          </form>
        ) : (
          /* Order Success State */
          <div className="p-8 text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-12 w-12" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Thank You For Your Order!</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your order has been successfully created.
              </p>
              <div className="mt-4 inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary border border-primary/20">
                Order Reference: {orderRef}
              </div>
            </div>

            <div className="mx-auto max-w-md rounded-xl border border-border bg-muted/30 p-4 text-left text-xs space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground text-sm">What happens next?</p>
              <p>• A confirmation summary has been registered for <strong>{fullName || 'valued customer'}</strong>.</p>
              <p>• Our installation specialist will contact you shortly at <strong>{phone || '+233 ...'}</strong> to arrange your free doorstep measurement and installation.</p>
            </div>

            <button
              onClick={handleFinish}
              className="rounded-xl bg-primary px-8 py-3 font-serif text-sm font-bold text-primary-foreground shadow-md transition-all hover:brightness-110"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
