import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

export default function IndoorPlantsPage() {
  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Indoor Plants</h1>
        <p className="text-gray-300 mb-8">Discover our collection of beautiful indoor plants to bring nature into your home.</p>
        <ProductGrid category="indoor" />
      </main>

      <Footer />
    </div>
  )
}

