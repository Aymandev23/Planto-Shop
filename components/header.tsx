'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Search, ShoppingCart, Menu, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/CartContext"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart()

 
  return (
    <header className="bg-[#0A2416] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png?text=P" alt="Planto Logo" width={180} height={24} />
         
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-gray-300">
          <Link href="/" className="text-white">Home</Link>
          <div className="relative group">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-white"
            >
              Plant-Type <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/indoor-plants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Indoor Plants</Link>
                  <Link href="/outdoor-plants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Outdoor Plants</Link>
                  <Link href="/succulents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Succulents</Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/shop" className="text-white">Shop</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/contact" className="text-white">Contact</Link>
       
        </nav>
        <div className="flex items-center gap-6">
          <form  className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search products..."
              className="pr-8 bg-white/10 border-white/20 text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 text-white">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Link href="/cart" className="text-white relative">
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <button className="text-white lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2416] py-4">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/shop" className="text-white">Shop</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/contact" className="text-white">Contact</Link>
            <Link href="/login" className="text-white">Login</Link>
            <Link href="/register" className="text-white">Register</Link>
            <form  className="relative mt-4">
              <Input
                type="search"
                placeholder="Search products..."
                className="pr-8 bg-white/10 border-white/20 text-white placeholder-gray-400 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 text-white">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </nav>
        </div>
      )}
    </header>
  )
}

