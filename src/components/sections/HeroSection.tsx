import Link from 'next/link'
import { ArrowRight, Star, Calendar } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gray-900 h-[70vh] sm:h-[80vh] lg:h-[90vh]">
      {/* Background video - Mobile first responsive */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-h-full min-w-full object-cover opacity-70 scale-125 sm:scale-110 lg:scale-100"
        >
          <source src="/logos/hero-video-cortado.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-32 lg:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm leading-6 text-gold ring-1 ring-gold/20 hover:ring-gold/30">
              <span className="hidden sm:inline">**Master Barber** • **23 Years Experience** • **All Hair Types**{' '}</span>
              <span className="sm:hidden">**23 Years Experience** • **All Hair Types**{' '}</span>
              <span className="ml-1 sm:ml-2 inline-flex items-center gap-x-1">
                130+ <Star className="h-3 w-3 fill-gold" /> Reviews
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
            The Cortado Barbershop
          </h1>
          
          <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-light text-gold">
            Luxury Cuts. Elite Style. Precision and Atmosphere.
          </p>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4 sm:px-0">
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
          
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-y-1 py-2 sm:py-0">
              <span className="font-semibold text-white text-sm sm:text-base">Open 7 Days</span>
              <span>10am - 6pm</span>
            </div>
            <div className="flex flex-col items-center gap-y-1 py-2 sm:py-0">
              <span className="font-semibold text-white text-sm sm:text-base">Suite 150B</span>
              <span>Clear Location</span>
            </div>
            <div className="flex flex-col items-center gap-y-1 py-2 sm:py-0">
              <span className="font-semibold text-white text-sm sm:text-base">**23 Years Experience**</span>
              <span>**All Hair Types**</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}