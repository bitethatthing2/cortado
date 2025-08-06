import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Check, Calendar, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Premium Haircuts | Best Men\'s Haircuts Salem OR | Cortado Barbershop',
  description: 'Expert men\'s haircuts in Salem, OR. Precision cuts, personalized styling, hot towel service. 130+ 5-star reviews. Black hair specialist. Suite 150B.',
  keywords: 'men\'s haircuts Salem, haircuts Salem OR, best haircuts Salem, premium haircuts Salem, black men haircuts Salem, kids haircut Salem',
  openGraph: {
    title: 'Premium Haircuts | Cortado Barbershop Salem',
    description: 'Salem\'s premier destination for luxury men\'s haircuts. Expert barbers, precision cuts, and personalized service.',
    type: 'website',
  },
}

const haircuts = [
  {
    name: 'Classic Gentleman\'s Cut',
    price: '$35',
    duration: '30 min',
    description: 'Timeless style with modern precision. Perfect for the professional gentleman.',
    features: ['Consultation', 'Shampoo & condition', 'Precision cut', 'Style & finish', 'Neck trim'],
  },
  {
    name: 'Executive Premium Cut',
    price: '$45',
    duration: '45 min',
    description: 'Our signature luxury experience with enhanced styling and hot towel service.',
    features: ['Extended consultation', 'Hot towel treatment', 'Scalp massage', 'Premium styling products', 'Beard lineup'],
  },
  {
    name: 'Textured & Curly Hair Specialist',
    price: '$40-50',
    duration: '45 min',
    description: 'Expert care for black hair, curly, and textured hair types. Salem\'s black hair specialist.',
    features: ['Texture analysis', 'Specialized techniques', 'Moisture treatment', 'Custom styling', 'Product recommendations'],
  },
  {
    name: 'Kids Haircut (12 & Under)',
    price: '$25',
    duration: '30 min',
    description: 'Patient, friendly service for Salem\'s youngest gentlemen.',
    features: ['Fun, relaxed atmosphere', 'Age-appropriate styles', 'Parent consultation', 'Gentle approach', 'Lollipop included'],
  },
]

export default function HaircutsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Premium Men\'s Haircuts',
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
      'name': 'Haircut Services',
      'itemListElement': haircuts.map(cut => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': cut.name,
          'description': cut.description,
        },
        'price': cut.price,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative bg-charcoal dark:bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                Premium Men's Haircuts in Salem, OR
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Experience the best haircuts Salem has to offer. Our expert barbers specialize in all hair types, 
                including black hair and textured styles. Located in Suite 150B.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/book"
                  className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
                >
                  Book Your Haircut
                </a>
                <a
                  href="tel:503-967-0304"
                  className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors"
                >
                  Call 503-967-0304 →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">130+ Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Years in Salem</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Master Barbers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2,000+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                Our Haircut Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                From classic cuts to modern styles, we deliver exceptional results for every hair type
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {haircuts.map((cut) => (
                <div
                  key={cut.name}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:border-gold transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {cut.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-x-1">
                          <DollarSign className="h-4 w-4" />
                          {cut.price}
                        </span>
                        <span className="flex items-center gap-x-1">
                          <Clock className="h-4 w-4" />
                          {cut.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {cut.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {cut.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-x-2">
                        <Check className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/book"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black hover:bg-gold/90 transition-colors"
                  >
                    Book This Service
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 dark:bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                Why Salem Chooses Cortado for Haircuts
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Black Hair Specialists
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert barbers trained in all hair textures, including African American hair. 
                  We're Salem's trusted black hair specialist barbershop.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Precision & Consistency
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every haircut is executed with precision. Our 130+ 5-star reviews speak to our 
                  consistency and quality in men's haircuts.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Convenient Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easy to find in Suite 150B at 2195 Hyacinth St NE, Salem. Open 7 days a week 
                  with both appointments and walk-ins welcome.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16 font-serif">
                Frequently Asked Questions
              </h2>
              
              <dl className="space-y-8">
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Do you specialize in black hair and textured haircuts?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Yes! We're Salem's premier black hair specialist barbershop. Our barbers are expertly trained 
                    in cutting and styling all hair textures, including African American hair, curly, and coily hair types.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: How much do haircuts cost at Cortado Barbershop?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Our haircuts range from $25 for kids to $50 for our premium services. Most adult haircuts 
                    are $35-45, which includes consultation, cut, style, and neck trim.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Where exactly is Cortado Barbershop located in Salem?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: We're located at 2195 Hyacinth St NE, <span className="font-semibold text-gold">Suite 150B</span>, 
                    Salem, OR 97301. Look for Suite 150B - we're the established barbershop with 130+ 5-star reviews!
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Do I need an appointment for a haircut?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Walk-ins are welcome, but we recommend booking an appointment to minimize wait time. 
                    You can book online or call us at 503-967-0304.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gold py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-4 font-serif">
              Ready for Salem's Best Haircut?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Join over 2,000 satisfied clients who trust Cortado for their haircuts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Online Now
              </Link>
              <Link
                href="tel:503-967-0304"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-white/90 transition-colors"
              >
                Call 503-967-0304
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}