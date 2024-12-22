import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#0A2416] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png?text=P" alt="Planto Logo" width={180} height={32} />
             
            </Link>
            <p className="text-gray-300">
              Bringing nature&apos;s beauty to your doorstep with our curated collection of plants.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter Email"
                className="bg-white/10 border-0 text-white"
              />
              <Button className="bg-green-500 hover:bg-green-600">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-green-500">FB</Link>
              <Link href="#" className="text-white hover:text-green-500">IG</Link>
              <Link href="#" className="text-white hover:text-green-500">TW</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-300">
          <p>© 2023 Planto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

