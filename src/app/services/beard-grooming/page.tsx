import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Check, Calendar, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beard Grooming & Trimming | Best Beard Barber Salem OR | Cortado',
  description: 'Expert beard grooming in Salem, OR. Beard trimming, shaping, conditioning. Professional beard barber. 130+ 5-star reviews. Suite 150B.',
  keywords: 'beard trim Salem, beard grooming Salem OR, beard barber Salem, mustache trim Salem, beard shaping Salem',
  openGraph: {
    title: 'Professional Beard Grooming | Salem\'s Beard Specialists',
    description: 'Salem\'s premier destination for professional beard grooming and trimming services.',
    type: 'website',
  },
}

const beardServices = [
  {
    name: 'Classic Beard Trim',
    price: '$20',
    duration: '20 min',
    description: 'Professional beard trimming and shaping to maintain your desired length and style.',
    features: ['Length adjustment', 'Shape definition', 'Mustache trim', 'Cleanup around edges'],
  },
  {
    name: 'Beard Shape & Style',
    price: '$25-30',
    duration: '30 min',
    description: 'Complete beard transformation with customized shaping and styling.',
    features: ['Custom shaping', 'Mustache styling', 'Neckline definition', 'Cheek line cleanup', 'Style consultation'],
  },
  {
    name: 'Premium Beard Grooming',
    price: '$35',
    duration: '40 min',
    description: 'Luxury beard treatment including trim, hot towel, conditioning, and styling.',
    features: ['Hot towel treatment', 'Beard conditioning', 'Professional trim & shape', 'Premium beard oil', 'Styling advice'],
  },
  {
    name: 'Mustache Trim',
    price: '$15',
    duration: '15 min',
    description: 'Precise mustache trimming and styling for the perfect finish.',
    features: ['Precision trimming', 'Style shaping', 'Cleanup', 'Wax application (if desired)'],
  },
]

export default function BeardGroomingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Professional Beard Grooming',
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
      'name': 'Beard Grooming Services',
      'itemListElement': beardServices.map(service => ({
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
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative bg-charcoal dark:bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                Professional Beard Grooming in Salem, OR
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Salem's premier destination for beard grooming and trimming. From basic trims to luxury 
                treatments, our expert barbers perfect every detail of your beard.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Link
                  href="/book"
                  className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
                >
                  Book Beard Service
                </Link>
                <Link
                  href="tel:503-967-0304"
                  className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors"
                >
                  Call 503-967-0304 →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                Our Beard Grooming Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Professional beard care for every style and preference
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {beardServices.map((service) => (
                <div
                  key={service.name}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:border-gold transition-colors"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-x-4 text-sm text-gray-600 dark:text-gray-400">
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
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-x-2">
                        <Check className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/book"
                    className="inline-flex w-full items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black hover:bg-gold/90 transition-colors"
                  >
                    Book This Service
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Beard Care Guide */}
        <div className="bg-gray-50 dark:bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16 font-serif">
                Professional Beard Care Guide
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Why Professional Beard Grooming Matters
                </h3>
                <p>
                  At Cortado Barbershop in Salem, we understand that a well-groomed beard is more than 
                  just facial hair – it's a statement of style and sophistication. Our professional 
                  beard grooming services ensure your beard looks and feels its best, whether you're 
                  growing it out or maintaining an established style.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  Beard Grooming for All Hair Types
                </h3>
                <p>
                  Our Salem barbers are experienced in working with all beard types and textures. From 
                  straight and fine to coarse and curly, we customize our approach to your specific 
                  hair characteristics. We're particularly skilled in grooming beards on men of all 
                  ethnicities and hair textures.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  Beard Maintenance Schedule
                </h3>
                <ul className="space-y-2">
                  <li>• <strong>Weekly:</strong> Basic cleanup and mustache trim (DIY or professional)</li>
                  <li>• <strong>Bi-weekly:</strong> Shape maintenance and neckline cleanup</li>
                  <li>• <strong>Monthly:</strong> Professional trim and conditioning treatment</li>
                  <li>• <strong>Seasonal:</strong> Style adjustment for length and shape changes</li>
                  <li>• <strong>Special occasions:</strong> Premium grooming for events</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  At-Home Beard Care Tips</h3>
                <ul className="space-y-2">
                  <li>• Use beard oil daily to moisturize and condition</li>
                  <li>• Brush or comb regularly to distribute natural oils</li>
                  <li>• Trim carefully between professional visits</li>
                  <li>• Keep the neckline clean for a polished appearance</li>
                  <li>• Invest in quality beard care products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16 font-serif">
                Beard Grooming FAQs
              </h2>
              
              <dl className="space-y-8">
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: How often should I get my beard professionally groomed?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Most men in Salem benefit from professional beard grooming every 2-4 weeks, 
                    depending on growth rate and desired style. Regular maintenance keeps your beard 
                    looking sharp and healthy.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: What's included in a beard trim at Cortado?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Our beard trim includes consultation, length adjustment, shape definition, 
                    mustache trim, neckline cleanup, and cheek line definition. Premium services 
                    also include hot towel treatment and beard conditioning.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Can you help shape my beard if it's uneven or patchy?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Absolutely! Our Salem barbers are experts at working with patchy or uneven 
                    beard growth. We can create flattering shapes that work with your natural 
                    growth pattern and recommend products to encourage healthy growth.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Do you sell beard care products?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Yes! We carry premium beard oils, balms, and grooming tools. Our barbers 
                    will recommend the best products for your specific beard type and provide 
                    guidance on how to use them effectively.
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
              Ready for Professional Beard Grooming?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Join Salem's most distinguished gentlemen at Cortado Barbershop
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Beard Service
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