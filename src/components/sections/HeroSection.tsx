import Link from 'next/link'
import { ArrowRight, Star, Calendar } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/logos/hero-video-cortado.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-20 pt-20 sm:pb-32 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-gold ring-1 ring-gold/20 hover:ring-gold/30">
              **Master Barber** • **23 Years Experience** • **All Hair Types**{' '}
              <span className="ml-2 inline-flex items-center gap-x-1">
                130+ <Star className="h-3 w-3 fill-gold" /> Reviews
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
            The Cortado Barbershop
          </h1>
          
          <p className="mt-4 text-2xl font-light text-gold">
            Luxury Cuts. Elite Style. Precision and Atmosphere.
          </p>
          
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Where **precision meets passion**, and every cut is a masterpiece. 
            Experience **Michael's 23 years of expertise** specializing in **all hair types** at Salem&apos;s most trusted barbershop.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-x-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-black shadow-sm hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-all"
            >
              <Calendar className="h-5 w-5" />
              Book with Michael
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-x-2 text-base font-semibold leading-6 text-white hover:text-gold transition-colors"
            >
              View Our Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-400 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-y-1">
              <span className="font-semibold text-white">Open 7 Days</span>
              <span>10am - 6pm</span>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <span className="font-semibold text-white">Suite 150B</span>
              <span>Clear Location</span>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <span className="font-semibold text-white">**23 Years Experience**</span>
              <span>**All Hair Types**</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}