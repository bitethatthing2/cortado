import InstagramEmbed from '@/components/ui/InstagramEmbed'
import Image from 'next/image'
import { Star, Camera } from 'lucide-react'

// Sample gallery images - you can replace these with actual barbershop photos
const galleryImages = [
  {
    id: 1,
    src: '/images/barber-avatar-dark.png',
    alt: 'Classic Fade Cut',
    category: 'Fades',
    description: 'Precision fade with crisp line-up'
  },
  {
    id: 2,
    src: '/images/barber-avatar-light.png',
    alt: 'Beard Grooming',
    category: 'Beards',
    description: 'Sculpted beard with hot towel treatment'
  },
  {
    id: 3,
    src: '/images/cortado-dark-screen.png.png',
    alt: 'Premium Haircut',
    category: 'Haircuts',
    description: 'Executive cut with styling'
  },
  {
    id: 4,
    src: '/images/cortado-light-screen.png.png',
    alt: 'Hot Towel Shave',
    category: 'Shaves',
    description: 'Classic straight razor shave'
  }
]

const categories = ['All', 'Haircuts', 'Fades', 'Beards', 'Shaves']

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Camera className="h-8 w-8 text-gold" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Gallery
            </h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our portfolio of precision cuts, signature fades, and grooming excellence. 
            23 years of mastery captured in every style.
          </p>
        </div>

        {/* Featured Work Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gold">5000+</div>
            <div className="text-sm text-gray-400">Haircuts</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gold">130+</div>
            <div className="text-sm text-gray-400">5-Star Reviews</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gold">23</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-gold">All</div>
            <div className="text-sm text-gray-400">Hair Types</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gold hover:text-black transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg bg-gray-800">
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold mt-1">{image.alt}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="border-t border-gray-800 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Follow Our Latest Work
            </h2>
            <p className="text-gray-300">
              See our daily transformations and connect with us on Instagram
            </p>
          </div>
          
          <div className="flex justify-center">
            <InstagramEmbed 
              url="https://www.instagram.com/the_cortado_barbershop/"
              className="w-full max-w-2xl"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/the_cortado_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Follow @the_cortado_barbershop
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who trust Michael's expertise. 
            Book your appointment today and experience the Cortado difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold text-black rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Book Your Appointment
            </a>
            <a
              href="tel:503-967-0304"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Call 503-967-0304
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}