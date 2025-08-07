'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Phone, Calendar } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const logoSrc = '/logos/cortado-logo-dark.svg'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The Cortado Barbershop</span>
            <Image
              className="h-12 w-auto sm:h-14 lg:h-16"
              src={logoSrc}
              alt="Cortado Barbershop"
              width={320}
              height={100}
              priority
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="tel:503-967-0304"
            className="inline-flex items-center gap-x-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gold/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            503-967-0304
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-x-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu rendered via portal */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  )
}