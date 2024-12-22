import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

export default function SucculentsPage() {
  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Succulents</h1>
        <p className="text-gray-300 mb-8">Browse our diverse collection of low-maintenance succulents for any space.</p>
        <ProductGrid category="succulents" />
      </main>

      <Footer />
    </div>
  )
}

