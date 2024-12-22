'use client'

import { notFound } from "next/navigation"
import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { useCart } from "@/components/CartContext"

const products = [
  { id: 1, name: "Calathea Ornata", price: 359, image: "/plant-1.png?text=Calathea", description: "The Calathea Ornata, also known as the Pinstripe plant, is a beautiful tropical plant known for its distinctive pink stripes on dark green leaves.", category: "indoor" },
  { id: 2, name: "Monstera Deliciosa", price: 499, image: "/plant-2.png?text=Monstera", description: "The Monstera Deliciosa, or Swiss Cheese Plant, is famous for its large, glossy leaves with natural holes, adding a tropical feel to any space.", category: "indoor" },
  { id: 3, name: "Ficus Lyrata", price: 599, image: "/plant-3.png?text=Ficus", description: "The Ficus Lyrata, commonly called the Fiddle Leaf Fig, is loved for its large, violin-shaped leaves and its ability to grow into an indoor tree.", category: "indoor" },
  { id: 4, name: "Sansevieria", price: 299, image: "https://placehold.co/300x300/3F51B5/FFFFFF.png?text=Sansevieria", description: "The Sansevieria, or Snake Plant, is a hardy succulent known for its tall, sword-like leaves and air-purifying qualities.", category: "succulents" },
  { id: 5, name: "Pothos", price: 259, image: "https://placehold.co/300x300/2196F3/FFFFFF.png?text=Pothos", description: "The Pothos is a versatile trailing plant with heart-shaped leaves, perfect for hanging baskets or climbing up a moss pole.", category: "indoor" },
  { id: 6, name: "ZZ Plant", price: 379, image: "https://placehold.co/300x300/03A9F4/FFFFFF.png?text=ZZ+Plant", description: "The ZZ Plant, or Zamioculcas zamiifolia, is a low-maintenance plant with glossy, dark green leaves that thrives in low light conditions.", category: "indoor" },
  { id: 7, name: "Lavender", price: 289, image: "https://placehold.co/300x300/4CAF50/FFFFFF.png?text=Lavender", description: "Lavender is a fragrant herb known for its calming properties and beautiful purple flowers. It's perfect for outdoor gardens and can also thrive indoors with proper care.", category: "outdoor" },
  { id: 8, name: "Rosemary", price: 279, image: "https://placehold.co/300x300/8BC34A/FFFFFF.png?text=Rosemary", description: "Rosemary is an aromatic evergreen shrub with needle-like leaves. It's not only a great culinary herb but also a beautiful addition to any garden or indoor herb collection.", category: "outdoor" },
  { id: 9, name: "Echeveria", price: 199, image: "https://placehold.co/300x300/CDDC39/FFFFFF.png?text=Echeveria", description: "Echeveria is a genus of succulent plants native to Central America. Known for their attractive rosette shape, they come in a variety of colors and are perfect for both indoor and outdoor settings.", category: "succulents" },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={0}
            className="rounded-lg"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-2xl font-bold text-white">Rs. {product.price}/-</p>
            <p className="text-gray-300">{product.description}</p>
            <Button 
              className="bg-green-500 hover:bg-green-600"
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
        <ProductGrid exclude={product.id} category={product.category} />
      </main>

      <Footer />
    </div>
  )
}

