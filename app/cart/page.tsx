'use client'

import { useCart } from "@/components/CartContext"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart()

  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Your Cart</h1>
        
        {cart.length === 0 ? (
          <p className="text-white">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-white/20 last:border-b-0 last:mb-0 last:pb-0">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <p className="text-gray-300">Quantity: {item.quantity}</p>
                    <p className="text-gray-300">Price: Rs. {item.price}/-</p>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Total: Rs. {getCartTotal()}/-</h2>
              <Button variant="destructive" onClick={clearCart}>Clear Cart</Button>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

