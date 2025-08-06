import { MapPin, Phone, Clock } from 'lucide-react'

export default function ContactInfoBar() {
  return (
    <div className="bg-charcoal dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-8 w-8 text-gold mb-3" />
            <h3 className="text-lg font-semibold text-white">Visit Us</h3>
            <p className="mt-2 text-sm text-gray-300">
              2195 Hyacinth St NE
              <br />
              <span className="font-semibold text-gold">Suite 150B</span>
              <br />
              Salem, OR 97301
            </p>
            <a 
              href="https://maps.google.com/?q=2195+Hyacinth+St+NE+Suite+150B+Salem+OR+97301"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm text-gold hover:text-gold/80 transition-colors"
            >
              Get Directions →
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-gold mb-3" />
            <h3 className="text-lg font-semibold text-white">Call Us</h3>
            <a 
              href="tel:503-967-0304"
              className="mt-2 text-2xl font-bold text-gold hover:text-gold/80 transition-colors"
            >
              503-967-0304
            </a>
            <p className="mt-2 text-sm text-gray-300">
              Book by phone or walk-in
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center">
            <Clock className="h-8 w-8 text-gold mb-3" />
            <h3 className="text-lg font-semibold text-white">Hours</h3>
            <p className="mt-2 text-sm text-gray-300">
              <span className="font-semibold">7 Days a Week</span>
              <br />
              10:00 AM - 6:00 PM
            </p>
            <p className="mt-2 text-sm text-gold">
              Walk-ins Welcome
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}