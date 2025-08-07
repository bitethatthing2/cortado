'use client'

import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 flex justify-center">
            <MapPin className="h-12 w-12 text-gold" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Visit Our Salem Location
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Find us at <span className="text-gold font-semibold">Suite 150B</span> with convenient parking and easy access
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.129887883635!2d-123.00411412367744!3d44.98167247107018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bfff82442b0a81%3A0x3a782d6fd6f00cf7!2sCortado%20Barbershop!5e0!3m2!1sen!2sus!4v1754531245145!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cortado Barbershop Location - Suite 150B, Salem, OR"
                className="w-full"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-gold/10 p-3 flex-shrink-0">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <div className="text-gray-200">
                  <p>2195 Hyacinth St NE</p>
                  <p className="font-semibold text-gold text-lg">Suite 150B</p>
                  <p>Salem, OR 97301</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=2195+Hyacinth+St+NE+Suite+150B+Salem+OR+97301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-gold/10 p-3 flex-shrink-0">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:503-967-0304"
                  className="text-2xl font-bold text-gold hover:text-gold/80 transition-colors"
                >
                  503-967-0304
                </a>
                <p className="mt-1 text-gray-300">Call to book or walk-in welcome</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-gold/10 p-3 flex-shrink-0">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                <div className="text-gray-200">
                  <p className="font-semibold text-lg">7 Days a Week</p>
                  <p>10:00 AM - 6:00 PM</p>
                  <p className="text-gold font-medium mt-1">Walk-ins Welcome</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 space-y-3">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-x-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                View Full Contact Info
              </a>
              <a
                href="tel:503-967-0304"
                className="w-full inline-flex items-center justify-center gap-x-2 rounded-md border border-gold px-6 py-3 text-base font-semibold text-gold hover:bg-gold hover:text-black transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Location Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gold/20">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="text-gray-200">
              Look for the <span className="text-gold font-semibold">Cortado sign</span> • 
              <span className="text-gold font-semibold ml-1">Convenient parking available</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}