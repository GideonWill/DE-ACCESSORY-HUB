'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type CartItem = {
  id: string
  name: string
  brand: string
  price: number
  image: string
  quantity: number
}

export type ProductView = {
  id: string
  name: string
  brand: string
  price: number
  image: string
  sale?: boolean
  description?: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>, qty?: number, openDrawer?: boolean) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  clearCart: () => void
  totalCount: number
  subtotal: number
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  isCheckoutOpen: boolean
  openCheckout: () => void
  closeCheckout: () => void
  isSearchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  activeProduct: ProductView | null
  openProductModal: (product: ProductView) => void
  closeProductModal: () => void
  buyNow: (product: ProductView) => void
  favorites: string[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'the_interior_hub_cart'
const FAVORITES_STORAGE_KEY = 'the_interior_hub_favs'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<ProductView | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) setItems(JSON.parse(savedCart))
      const savedFavs = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (savedFavs) setFavorites(JSON.parse(savedFavs))
    } catch (e) {
      console.error('Failed to load storage', e)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
      } catch (e) {
        console.error('Failed to save cart', e)
      }
    }
  }, [items, mounted])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
      } catch (e) {
        console.error('Failed to save favorites', e)
      }
    }
  }, [favorites, mounted])

  const addItem = (newItem: Omit<CartItem, 'quantity'>, qty = 1, openDrawer = true) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === newItem.id)
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += qty
        return updated
      }
      return [...prev, { ...newItem, quantity: qty }]
    })
    if (openDrawer) {
      setIsCartOpen(true)
    }
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const openProductModal = (product: ProductView) => {
    setActiveProduct(product)
  }

  const closeProductModal = () => {
    setActiveProduct(null)
  }

  const buyNow = (product: ProductView) => {
    addItem(
      {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
      },
      1,
      false
    )
    setActiveProduct(null)
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const isFavorite = (id: string) => favorites.includes(id)

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        activeProduct,
        openProductModal,
        closeProductModal,
        buyNow,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
