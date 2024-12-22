import { Inter } from 'next/font/google'
import "./globals.css"
import { CartProvider } from '@/components/CartContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Planto - Natural Plant Store",
  description: "Find the perfect plants for your space",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

