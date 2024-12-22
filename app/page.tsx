'use client'
import { Play, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { useCart } from "@/components/CartContext"
import { useState } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const { addToCart } = useCart()

  const products = [
    { id: 1, name: "Calathea Ornata", price: 359, image: "/plant-1.png?text=Calathea", description: "The Calathea Ornata, also known as the Pinstripe plant, is a beautiful tropical plant known for its distinctive pink stripes on dark green leaves." },
    { id: 2, name: "Monstera Deliciosa", price: 499, image: "/plant-2.png?text=Monstera", description: "The Monstera Deliciosa, or Swiss Cheese Plant, is famous for its large, glossy leaves with natural holes, adding a tropical feel to any space." },
    { id: 3, name: "Ficus Lyrata", price: 599, image: "/plant-3.png?text=Ficus", description: "The Ficus Lyrata, commonly called the Fiddle Leaf Fig, is loved for its large, violin-shaped leaves and its ability to grow into an indoor tree." },
    { id: 4, name: "Sansevieria", price: 299, image: "https://placehold.co/300x300/3F51B5/FFFFFF.png?text=Sansevieria", description: "The Sansevieria, or Snake Plant, is a hardy succulent known for its tall, sword-like leaves and air-purifying qualities." },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="min-h-screen bg-[#0A2416] flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16 md:pb-32 relative flex-grow">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Breath Natural
            </h1>
            <p className="text-gray-300 max-w-md">
              Bring the beauty of nature into your home with our curated collection of plants.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/shop">Explore</Link>
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                <Play className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute right-0 top-0 bg-white/5 backdrop-blur-lg rounded-lg p-4 w-64 hidden md:block">
            <Image
                  src="/plant-2.png?text=Monstera"
                  alt="Monstera Deliciosa"
                  width={240}
                  height={80}
                  className="rounded-lg"
                />
              
              <div className="flex justify-between items-center mt-2  ">
                <div>
                  <h3 className="text-white font-medium  h-8">Monstera Deliciosa</h3>
                  <p className="text-sm text-gray-300 h-8 ">Swiss Cheese Plant</p>
                  <Button variant="outline" className="bg-transparent  text-white border-white/20 hover:bg-white/10" asChild>
                    <Link href="/product/2">Explore</Link>
                  </Button>
                </div>
               
              </div>
            </div>
            <div className="absolute left-0 bottom-24 bg-white/5 backdrop-blur-lg rounded-lg p-4 w-64 hidden md:block">
              <div className="flex items-start gap-3">
                <Image
                  src="/avis-1.png?text=Avatar"
                  alt="Jenna Patel"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white font-medium">Jenna Patel</p>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="/plant-1.png?text=Hero+Plant"
              alt="Hero Plant"
              width={600}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Trendy Plants Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">
            <span className="border border-white/20 px-6 py-2 rounded-full">Our Trendy plants</span>
          </h2>


          <div className="relative bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 overflow-hidden">
              <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <div className="relative z-10 space-y-4 max-w">
                  <h3 className="text-2xl font-semibold text-white">Ficus Lyrata</h3>
                  <p className="text-gray-300">
                    The Ficus Lyrata, commonly called the Fiddle Leaf Fig, is loved for its large, violin-shaped leaves and its ability to grow into an indoor tree.
                  </p>
                  <p className="text-3xl font-bold text-white">Rs. 599/-</p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                      <Link href="/product/3">Explore</Link>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10"
                      onClick={() => addToCart({ id: 3, name: "Ficus Lyrata", price: 599, quantity: 1 })}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Image
                  src="/plant-3.png?text=Ficus"
                  alt="Ficus Lyrata"
                  width={300}
                  height={300}
                  className="relative z-10"
                />
              </div>
            </div>





          <div className="space-y-6">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="relative z-10 space-y-4 max-w">
                  <h3 className="text-2xl font-semibold text-white">Monstera Deliciosa</h3>
                  <p className="text-gray-300">
                    The Monstera Deliciosa, or Swiss Cheese Plant, is famous for its large, glossy leaves with natural holes, adding a tropical feel to any space.
                  </p>
                  <p className="text-3xl font-bold text-white">Rs. 499/-</p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                      <Link href="/product/2">Explore</Link>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10"
                      onClick={() => addToCart({ id: 2, name: "Monstera Deliciosa", price: 499, quantity: 1 })}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Image
                  src="/plant-2.png?text=Monstera"
                  alt="Monstera Deliciosa"
                  width={300}
                  height={300}
                  className="relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-white mb-8">Our Top Selling</h2>
        <ProductGrid />
      </motion.section>

      {/* Customer Reviews */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-white mb-8">Customer Review</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Mavn Raval", rating: 5 },
            { name: "venely k", rating: 4 },
            { name: "Lil thakur", rating: 5 },
          ].map((review, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur-lg border-0 text-white p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={`/avis-5.png?text=Avatar+${i + 1}`}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Our Best 02 Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-white mb-8">Our Best 02</h2>
        <Card className="bg-white/10 backdrop-blur-lg border-0 text-white p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                {products[currentProductIndex].name}
              </h3>
              <p className="text-gray-300">
                {products[currentProductIndex].description}
              </p>
              <div className="flex gap-4">
                <Button  variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                  <Link href={`/product/${products[currentProductIndex].id}`}>Explore</Link>
                </Button>
                <Button
                  size="icon"
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => addToCart({ 
                    id: products[currentProductIndex].id, 
                    name: products[currentProductIndex].name, 
                    price: products[currentProductIndex].price, 
                    quantity: 1 
                  })}
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={products[currentProductIndex].image}
                alt={products[currentProductIndex].name}
                width={450}
                height={400}
                className="rounded-lg justify-self-center	"
              />
              <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={handlePrevProduct}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={handleNextProduct}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      <Footer />
    </div>
  )
}

