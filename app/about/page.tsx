import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Planto</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-300 mb-6">
              Welcome to Planto, your one-stop destination for all things green and growing. We are passionate about bringing the beauty and benefits of plants into your life, whether you are a seasoned plant parent or just starting your botanical journey.
            </p>
            <p className="text-gray-300 mb-6">
              Founded in 2020, Planto has quickly grown into a thriving community of plant enthusiasts. Our mission is to make plant care accessible, enjoyable, and rewarding for everyone.
            </p>
            <Button className="bg-green-500 hover:bg-green-600">
              Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Image
            src="/about.jpg?text=About+Planto"
            alt="About Planto"
            width={600}
            height={200}
            className="rounded-lg"
          />
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Quality", description: "We source only the healthiest, highest-quality plants and products." },
            { title: "Sustainability", description: "We're committed to eco-friendly practices in all aspects of our business." },
            { title: "Education", description: "We believe in empowering our customers with knowledge about plant care." },
          ].map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Our Sustainability Efforts</h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Growing a Greener Future</h3>
              <p className="text-gray-300">
                At Planto, we are committed to sustainability in every aspect of our business. From eco-friendly packaging to partnering with local growers, we are constantly working to reduce our environmental impact.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>100% recyclable packaging</li>
                <li>Carbon-neutral shipping options</li>
                <li>Supporting reforestation projects</li>
                <li>Promoting water-efficient plant species</li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2213&q=80"
                alt="Sustainability Efforts"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Meet Our Plant Experts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Leaf Greenthumb", role: "Head Botanist", image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" },
            { name: "Fern Plantlover", role: "Plant Care Specialist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" },
            { name: "Rooty McStemface", role: "Rare Plant Hunter", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
          ].map((expert, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <div className="relative h-48 mb-4">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{expert.name}</h3>
              <p className="text-gray-300">{expert.role}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

