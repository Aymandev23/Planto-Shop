import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A2416]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              We are here to help! Whether you have questions about our products, need plant care advice, or want to collaborate, do not hesitate to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="mr-2 h-5 w-5" />
                <span>support@planto.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-2 h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-2 h-5 w-5" />
                <span>123 Green Street, Plantville, PL 12345</span>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Business Hours</h2>
              <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-300">Saturday: 10am - 4pm</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <Input id="name" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input id="email" type="email" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <Textarea id="message" rows={4} className="bg-white/5 border-white/10 text-white" />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164964!2d-73.98823492426385!3d40.75790563560563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1685153359069!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

