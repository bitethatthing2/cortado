'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Camera, Filter } from 'lucide-react'

type GalleryCategory = 'all' | 'haircuts' | 'fades' | 'beards' | 'shaves'

interface GalleryItem {
  id: number
  category: GalleryCategory[]
  title: string
  description: string
  beforeImage: string
  afterImage: string
  service: string
  barber: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: ['fades', 'haircuts'],
    title: 'High Fade Transformation',
    description: 'Clean high fade with textured top styling',
    beforeImage: '/images/gallery/before-1.jpg',
    afterImage: '/images/gallery/after-1.jpg',
    service: 'Signature Fade',
    barber: 'Marcus Johnson'
  },
  {
    id: 2,
    category: ['beards'],
    title: 'Beard Sculpting Makeover',
    description: 'Full beard reshape and line-up definition',
    beforeImage: '/images/gallery/before-2.jpg',
    afterImage: '/images/gallery/after-2.jpg',
    service: 'Beard Grooming',
    barber: 'David Rodriguez'
  },
  {
    id: 3,
    category: ['haircuts'],
    title: 'Classic Gentleman\'s Cut',
    description: 'Traditional side part with modern styling',
    beforeImage: '/images/gallery/before-3.jpg',
    afterImage: '/images/gallery/after-3.jpg',
    service: 'Premium Haircut',
    barber: 'Alex Thompson'
  },
  {
    id: 4,
    category: ['fades'],
    title: 'Skin Fade Precision',
    description: 'Ultra-clean skin fade with sharp line-up',
    beforeImage: '/images/gallery/before-4.jpg',
    afterImage: '/images/gallery/after-4.jpg',
    service: 'Signature Fade',
    barber: 'Marcus Johnson'
  },
  {
    id: 5,
    category: ['shaves'],
    title: 'Hot Towel Shave Experience',
    description: 'Traditional straight razor shave with hot towel treatment',
    beforeImage: '/images/gallery/before-5.jpg',
    afterImage: '/images/gallery/after-5.jpg',
    service: 'Hot Towel Shave',
    barber: 'David Rodriguez'
  },
  {
    id: 6,
    category: ['haircuts', 'beards'],
    title: 'Complete Grooming Package',
    description: 'Full haircut and beard trim combination',
    beforeImage: '/images/gallery/before-6.jpg',
    afterImage: '/images/gallery/after-6.jpg',
    service: 'Full Service Package',
    barber: 'Alex Thompson'
  }
]

const categories = [
  { id: 'all', label: 'All Work', count: galleryItems.length },
  { id: 'haircuts', label: 'Haircuts', count: galleryItems.filter(item => item.category.includes('haircuts')).length },
  { id: 'fades', label: 'Fades', count: galleryItems.filter(item => item.category.includes('fades')).length },
  { id: 'beards', label: 'Beards', count: galleryItems.filter(item => item.category.includes('beards')).length },
  { id: 'shaves', label: 'Hot Towel Shaves', count: galleryItems.filter(item => item.category.includes('shaves')).length }
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all')
  const [isBeforeAfter, setIsBeforeAfter] = useState<{ [key: number]: boolean }>({})

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category.includes(activeCategory))

  const toggleBeforeAfter = (itemId: number) => {
    setIsBeforeAfter(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 flex justify-center">
            <Camera className="h-12 w-12 text-gold" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Our Work Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            See the transformations our master barbers achieve at Salem's premier barbershop, Suite 150B
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as GalleryCategory)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gold text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Filter className="h-4 w-4" />
                {category.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-black/20 text-black'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="rounded-2xl bg-black p-6 hover:shadow-xl transition-shadow duration-300">
                {/* Before/After Image Container */}
                <div className="relative mb-4">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 relative">
                    {/* Placeholder for before/after images */}
                    <div className="h-full w-full bg-gradient-to-br from-gold/10 to-charcoal/10 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="h-12 w-12 text-gold mx-auto mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {isBeforeAfter[item.id] ? 'After' : 'Before'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleBeforeAfter(item.id)}
                      className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs rounded-full hover:bg-black/80 transition-colors"
                    >
                      {isBeforeAfter[item.id] ? 'Show Before' : 'Show After'}
                    </button>
                  </div>
                </div>

                {/* Gallery Item Info */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-gold font-medium">{item.service}</p>
                      <p className="text-gray-500 dark:text-gray-500">by {item.barber}</p>
                    </div>
                    <div className="flex gap-1">
                      {item.category.map((cat, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gold/10 text-gold rounded-full text-xs"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Book your appointment with Salem's most skilled barbers at Suite 150B
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
            >
              Book Your Transformation
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md border border-gray-600 px-6 py-3 text-base font-semibold text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}