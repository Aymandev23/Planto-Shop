'use client'

import { useState } from 'react'
import { useCart } from "@/components/CartContext"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function CheckoutPage() {
  const { cart, getCartTotal } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { ...formData, cart, total: getCartTotal() })
    // You could then redirect to a confirmation page or show a success message
  }

  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg border-0 text-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>Rs. {item.price * item.quantity}/-</span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-xl font-semibold">Rs. {getCartTotal()}/-</span>
              </div>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-0 text-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                Place Order
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

