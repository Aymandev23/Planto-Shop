import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

export default function OutdoorPlantsPage() {
  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Outdoor Plants</h1>
        <p className="text-gray-300 mb-8">Explore our range of outdoor plants to enhance your garden or patio.</p>
        <ProductGrid category="outdoor" />
      </main>

      <Footer />
    </div>
  )
}

