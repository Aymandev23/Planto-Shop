'use client'

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/components/CartContext"
import { useState, useEffect } from 'react'
import { ShopFilters } from "./shop-filters"

const products = [
  { id: 1, name: "Calathea Ornata", price: 359, image: "/plant-1.png?text=Calathea", category: "Indoor", size: "Medium", careLevel: "Moderate" },
  { id: 2, name: "Monstera Deliciosa", price: 499, image: "/plant-2.png?text=Monstera", category: "Indoor", size: "Large", careLevel: "Easy" },
  { id: 3, name: "Ficus Lyrata", price: 599, image: "/plant-3.png?text=Ficus", category: "Indoor", size: "Large", careLevel: "Moderate" },
  { id: 4, name: "Sansevieria", price: 299, image: "https://placehold.co/300x300/3F51B5/FFFFFF.png?text=Sansevieria", category: "Succulents", size: "Small", careLevel: "Easy" },
  { id: 5, name: "Pothos", price: 259, image: "https://placehold.co/300x300/2196F3/FFFFFF.png?text=Pothos", category: "Indoor", size: "Small", careLevel: "Easy" },
  { id: 6, name: "ZZ Plant", price: 379, image: "https://placehold.co/300x300/03A9F4/FFFFFF.png?text=ZZ+Plant", category: "Indoor", size: "Medium", careLevel: "Easy" },
  { id: 7, name: "Lavender", price: 289, image: "https://placehold.co/300x300/4CAF50/FFFFFF.png?text=Lavender", category: "Outdoor", size: "Small", careLevel: "Moderate" },
  { id: 8, name: "Rosemary", price: 279, image: "https://placehold.co/300x300/8BC34A/FFFFFF.png?text=Rosemary", category: "Outdoor", size: "Small", careLevel: "Easy" },
  { id: 9, name: "Echeveria", price: 199, image: "https://placehold.co/300x300/CDDC39/FFFFFF.png?text=Echeveria", category: "Succulents", size: "Small", careLevel: "Easy" },
]

interface ProductGridProps {
  category?: string;
  exclude?: number;
  searchQuery?: string;
  filters?: ShopFilters;
}

export default function ProductGrid({ category, exclude, searchQuery, filters }: ProductGridProps) {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products
        .filter(product => (!category || product.category.toLowerCase() === category.toLowerCase()) && product.id !== exclude)
        .filter(product => !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(product => {
          if (!filters) return true;
          
          const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
          const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
          const sizeMatch = filters.sizes.length === 0 || filters.sizes.includes(product.size);
          const careLevelMatch = filters.careLevel.length === 0 || filters.careLevel.includes(product.careLevel);

          return categoryMatch && priceMatch && sizeMatch && careLevelMatch;
        })
    );
  }, [category, exclude, searchQuery, filters]);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="bg-white/10 backdrop-blur-lg border-0 text-white p-6">
          <Link href={`/product/${product.id}`} className="block">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          </Link>
          <p className="text-gray-300 mb-4">
            {product.name} - A beautiful {product.category.toLowerCase()} plant.
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Rs. {product.price}/-</p>
            <Button 
              size="icon" 
              className="bg-green-500 hover:bg-green-600"
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

