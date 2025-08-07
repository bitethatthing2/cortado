'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { X, Phone, Calendar } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted || !isOpen) return null

  return createPortal(
    <>
      <div 
        className="fixed inset-0 bg-black/50" 
        style={{ zIndex: 9998 }}
        onClick={onClose} 
      />
      <div 
        className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        style={{ zIndex: 9999 }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5" onClick={onClose}>
            <span className="sr-only">The Cortado Barbershop</span>
            <Image
              className="h-12 w-auto"
              src="/logos/cortado-logo-dark.svg"
              alt="Cortado Barbershop"
              width={320}
              height={100}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-200"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/20">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 space-y-3">
              <Link
                href="tel:503-967-0304"
                className="flex items-center gap-x-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-white shadow-sm"
                onClick={onClose}
              >
                <Phone className="h-4 w-4" />
                503-967-0304
              </Link>
              <Link
                href="/book"
                className="flex items-center gap-x-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black shadow-sm"
                onClick={onClose}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}