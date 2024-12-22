'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { ShopFilters, ShopFilters as ShopFiltersType } from "@/components/shop-filters"

export default function ShopPage() {
  const [filters, setFilters] = useState<ShopFiltersType>({
    categories: [],
    priceRange: [0, 1000],
    sizes: [],
    careLevel: [],
  })

  const handleFilterChange = (newFilters: ShopFiltersType) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Our Plant Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 backdrop-blur-lg border-0 text-white p-6 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Indoor Plants"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 opacity-50"
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4">Indoor Plants</h2>
              <p className="text-gray-300 mb-4">Discover our selection of beautiful indoor plants to bring nature into your home.</p>
              <Link href="/indoor-plants" className="text-green-400 hover:text-green-300">Explore Indoor Plants →</Link>
            </div>
          </Card>
          <Card className="bg-white/5 backdrop-blur-lg border-0 text-white p-6 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Outdoor Plants"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 opacity-50"
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4">Outdoor Plants</h2>
              <p className="text-gray-300 mb-4">Find the perfect plants to enhance your garden or patio with our outdoor collection.</p>
              <Link href="/outdoor-plants" className="text-green-400 hover:text-green-300">Explore Outdoor Plants →</Link>
            </div>
          </Card>
          <Card className="bg-white/5 backdrop-blur-lg border-0 text-white p-6 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
              alt="Succulents"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 opacity-50"
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4">Succulents</h2>
              <p className="text-gray-300 mb-4">Browse our diverse range of low-maintenance succulents for any space.</p>
              <Link href="/succulents" className="text-green-400 hover:text-green-300">Explore Succulents →</Link>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Filters</h2>
            <ShopFilters onFilterChange={handleFilterChange} />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-8">All Products</h2>
            <ProductGrid filters={filters} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

