'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match")
      return
    }
    // Here you would typically send the registration request to your backend
    console.log('Registration attempt:', formData)
    // For now, let's just redirect to the login page
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <Card className="bg-white/10 backdrop-blur-lg border-0 text-white p-6 max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              Register
            </Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-green-400 hover:text-green-300">
              Login here
            </Link>
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

