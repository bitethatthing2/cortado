import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Star, Check, Calendar, Clock, DollarSign, Scissors, Razor, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Barber Services | Michael\'s 23 Years Experience | Cortado Barbershop Salem',
  description: 'Complete barber services by Master Barber Michael with 23+ years experience. Premium haircuts, signature fades, beard grooming, hot towel shaves. All hair types specialist in Salem, OR.',
  keywords: 'barber services Salem, Michael master barber, premium haircuts, signature fades, beard grooming, hot towel shaves, all hair types, black hair specialist Salem',
  openGraph: {
    title: 'Professional Barber Services | Master Barber Michael | Cortado Barbershop',
    description: 'Experience Michael\'s 23+ years of master barber expertise. Complete services for all hair types in Salem, OR.',
    type: 'website',
  },
}

const services = [
  {
    id: 'haircuts',
    name: 'Premium Haircuts',
    icon: Scissors,
    price: '$35-50',
    duration: '30-45 min',
    description: 'Michael\'s signature precision cuts for all hair types. 23+ years of expertise in classic and modern styles.',
    features: [
      'Consultation with Michael',
      'All hair types specialist', 
      'Precision cutting techniques',
      'Style & finishing',
      'Product recommendations'
    ],
    highlight: 'Master Barber\'s Signature Service',
    link: '/services/haircuts'
  },
  {
    id: 'fades',
    name: 'Signature Fades',
    icon: Razor,
    price: '$30-45', 
    duration: '30-40 min',
    description: 'Expert fade techniques perfected over 23 years. From classic tapers to modern skin fades.',
    features: [
      'All fade variations',
      'Skin fade specialist',
      'Beard line-ups',
      'Neck detailing',
      'Hot towel finish'
    ],
    highlight: '23 Years of Fade Mastery',
    link: '/services/fades'
  },
  {
    id: 'beard-grooming',
    name: 'Beard Grooming', 
    icon: Scissors,
    price: '$20-35',
    duration: '20-30 min',
    description: 'Professional beard shaping, trimming, and styling. Michael\'s expertise ensures the perfect beard for your face.',
    features: [
      'Beard shaping & design',
      'Precision trimming',
      'Mustache styling',
      'Hot towel treatment',
      'Beard oil application'
    ],
    highlight: 'Expert Beard Artistry',
    link: '/services/beard-grooming'
  },
  {
    id: 'hot-towel-shaves',
    name: 'Hot Towel Shaves',
    icon: Razor,
    price: '$40-55',
    duration: '45-60 min',
    description: 'Traditional luxury shaving experience. Michael\'s classic techniques for the ultimate gentleman\'s service.',
    features: [
      'Hot towel preparation',
      'Premium shaving cream',
      'Straight razor technique',
      'Aftershave treatment',
      'Relaxing experience'
    ],
    highlight: 'Traditional Luxury Experience',
    link: '/services/hot-towel-shaves'
  }
]

const specialties = [
  {
    icon: Users,
    title: 'All Hair Types Specialist',
    description: 'Michael\'s 23 years of experience includes expertise with every hair texture, from straight to coily, including African American hair.'
  },
  {
    icon: Award, 
    title: 'Master Barber Certified',
    description: '23+ years of professional experience and continuous education in the latest techniques and trends.'
  },
  {
    icon: Star,
    title: '130+ Five-Star Reviews',
    description: 'Proven track record of exceptional service and client satisfaction throughout Salem and surrounding areas.'
  }
]

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Professional Barber Services',
    'provider': {
      '@type': 'HairSalon',
      'name': 'The Cortado Barbershop',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2195 Hyacinth St NE Suite 150B',
        'addressLocality': 'Salem',
        'addressRegion': 'OR',
        'postalCode': '97301',
      },
    },
    'areaServed': {
      '@type': 'City', 
      'name': 'Salem, OR',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Barber Services',
      'itemListElement': services.map(service => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
        },
        'price': service.price,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-900">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-gold ring-1 ring-gold/20">
                  **Master Barber Michael** • **23 Years Experience** • **All Hair Types**
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
                Professional Barber Services
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience the artistry of Master Barber Michael's **23+ years of expertise**. 
                Specializing in **all hair types** with precision, passion, and unmatched skill.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-x-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-black shadow-sm hover:bg-gold/90 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  Book with Michael
                </Link>
                <a
                  href="tel:503-967-0304"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-x-2 text-base font-semibold text-white hover:text-gold transition-colors"
                >
                  Call 503-967-0304 →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                Complete Barber Services
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Master-level service for every grooming need
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className="rounded-2xl border border-gray-700 bg-gray-800 p-8 hover:border-gold transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-gold/10 p-3">
                          <Icon className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {service.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-x-4 text-sm text-gray-400">
                            <span className="flex items-center gap-x-1">
                              <DollarSign className="h-4 w-4" />
                              {service.price}
                            </span>
                            <span className="flex items-center gap-x-1">
                              <Clock className="h-4 w-4" />
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full bg-gold/20 px-3 py-1">
                        <span className="text-xs font-medium text-gold">{service.highlight}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-2">
                          <Check className="h-4 w-4 text-gold flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3">
                      <Link
                        href={service.link}
                        className="flex-1 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black hover:bg-gold/90 transition-colors"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/book"
                        className="flex-1 inline-flex items-center justify-center rounded-md border border-gold px-4 py-2 text-sm font-semibold text-gold hover:bg-gold hover:text-black transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Michael's Specialties */}
        <div className="py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                Michael's Expertise
              </h2>
              <p className="mt-4 text-lg text-gold">
                23+ Years of Master Barber Excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-full bg-gold/10 p-4">
                        <Icon className="h-8 w-8 text-gold" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gold py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-4 font-serif">
              Ready for Michael's Expert Service?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Book your appointment with Salem's master barber today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Link>
              <a
                href="tel:503-967-0304"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-white/90 transition-colors"
              >
                Call 503-967-0304
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}