import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Premium Haircuts', href: '/services/haircuts' },
    { name: 'Signature Fades', href: '/services/fades' },
    { name: 'Beard Grooming', href: '/services/beard-grooming' },
    { name: 'Hot Towel Shaves', href: '/services/hot-towel-shaves' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal dark:bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-20 w-auto sm:h-24"
              src="/logos/cortado-logo-dark.svg"
              alt="The Cortado Barbershop"
              width={320}
              height={100}
            />
            <p className="text-sm leading-6 text-gray-300">
              Salem's premier barbershop with Master Barber Michael's 23 years of experience. Specializing in all hair types, luxury cuts, signature fades, and hot towel shaves. Over 130 five-star reviews.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://facebook.com/cortadobarbershop" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/cortadobarbershop" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-gold transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-gold transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-x-3">
                    <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-gray-300">
                      2195 Hyacinth St NE <span className="font-semibold text-gold">Suite 150B</span><br />
                      Salem, OR 97301
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                    <a href="tel:503-967-0304" className="text-sm leading-6 text-gray-300 hover:text-gold transition-colors">
                      503-967-0304
                    </a>
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <a href="mailto:info@cortadobarbershop.com" className="text-sm leading-6 text-gray-300 hover:text-gold transition-colors break-all">
                      info@cortadobarbershop.com
                    </a>
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-gray-300">
                      7 Days a Week<br />
                      10:00 AM - 6:00 PM
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} The Cortado Barbershop. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs leading-5 text-gray-400 hover:text-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}