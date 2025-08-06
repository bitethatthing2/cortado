import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Check, Calendar, Clock, DollarSign, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hot Towel Shaves | Traditional Luxury Shave Salem OR | Cortado Barbershop',
  description: 'Luxury hot towel shave experience in Salem, OR. Traditional straight razor shave, premium products. Relaxing luxury barbershop service. Suite 150B.',
  keywords: 'hot towel shave Salem, traditional shave Salem OR, luxury shave Salem, straight razor shave Salem, barbershop shave Salem',
  openGraph: {
    title: 'Luxury Hot Towel Shaves | Salem\'s Premium Shave Experience',
    description: 'Salem\'s most luxurious traditional hot towel shave experience. Relax and indulge at Cortado Barbershop.',
    type: 'website',
  },
}

const shaveServices = [
  {
    name: 'Classic Hot Towel Shave',
    price: '$40',
    duration: '35 min',
    description: 'Traditional hot towel shave with straight razor for the ultimate grooming experience.',
    features: ['Pre-shave oil application', 'Hot towel treatment', 'Straight razor shave', 'Post-shave moisturizer'],
  },
  {
    name: 'Luxury Shave Experience',
    price: '$55',
    duration: '50 min',
    description: 'Our premium shave service with extended hot towel treatment and luxury finishing.',
    features: ['Extended hot towel ritual', 'Premium pre-shave oils', 'Multiple towel applications', 'Luxury aftershave balm', 'Scalp massage'],
  },
  {
    name: 'Beard Line Shave',
    price: '$30',
    duration: '25 min',
    description: 'Precise shaving around beard lines and neck area with hot towel preparation.',
    features: ['Targeted shaving', 'Hot towel prep', 'Clean neck lines', 'Beard edge definition'],
  },
  {
    name: 'Full Service: Cut + Shave',
    price: '$70-80',
    duration: '75 min',
    description: 'Complete gentleman\'s package combining premium haircut with luxury hot towel shave.',
    features: ['Premium haircut', 'Full hot towel shave', 'Styling', 'Complete grooming experience'],
  },
]

export default function HotTowelShavesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Hot Towel Shave Services',
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
      'name': 'Hot Towel Shave Services',
      'itemListElement': shaveServices.map(service => ({
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
              <div className="mb-4 flex justify-center">
                <Sparkles className="h-12 w-12 text-gold" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                Luxury Hot Towel Shaves in Salem, OR
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Experience the ultimate in traditional grooming. Our luxury hot towel shave service 
                combines time-honored techniques with premium products for an unforgettable experience.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Link
                  href="/book"
                  className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
                >
                  Book Luxury Shave
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
                Our Hot Towel Shave Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                From traditional shaves to luxury experiences, indulge in Salem's finest grooming
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {shaveServices.map((service) => (
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

        {/* The Hot Towel Experience */}
        <div className="bg-gray-50 dark:bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16 font-serif">
                The Hot Towel Shave Experience
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  A Time-Honored Tradition
                </h3>
                <p>
                  The hot towel shave is more than just grooming – it's a luxurious ritual that dates 
                  back centuries. At Cortado Barbershop in Salem, we've preserved this traditional 
                  art form while incorporating modern techniques and premium products to deliver an 
                  unparalleled experience.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  Our 7-Step Process
                </h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Consultation:</strong> We assess your skin type and shaving preferences</li>
                  <li><strong>Pre-shave preparation:</strong> Premium pre-shave oils soften the beard</li>
                  <li><strong>Hot towel application:</strong> Multiple warm towels open pores and relax muscles</li>
                  <li><strong>Lather application:</strong> Rich, warm lather using quality shaving cream</li>
                  <li><strong>Straight razor shave:</strong> Expert technique for the closest possible shave</li>
                  <li><strong>Final hot towel:</strong> Removes any remaining residue and soothes skin</li>
                  <li><strong>Aftercare:</strong> Premium aftershave balm and moisturizer application</li>
                </ol>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  Benefits of Professional Hot Towel Shaves
                </h3>
                <ul className="space-y-2">
                  <li>• Closest possible shave with minimal irritation</li>
                  <li>• Deep cleansing and exfoliation of facial skin</li>
                  <li>• Stress relief and relaxation</li>
                  <li>• Prevention of ingrown hairs</li>
                  <li>• Improved skin texture and appearance</li>
                  <li>• Luxury experience and self-care time</li>
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
                Hot Towel Shave FAQs
              </h2>
              
              <dl className="space-y-8">
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Is a hot towel shave safe for sensitive skin?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Yes! Hot towel shaves are actually gentler on sensitive skin than regular shaving. 
                    The hot towels soften the hair and open pores, while our expert technique minimizes 
                    irritation. We also use premium, skin-friendly products.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: How often can I get a hot towel shave?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Most clients in Salem enjoy hot towel shaves 1-2 times per month as a luxury 
                    treatment. However, it's safe to get them more frequently if desired. Many of our 
                    clients come weekly for this premium grooming experience.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: What should I expect during my first hot towel shave?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Plan to relax! The experience takes 35-50 minutes and is deeply relaxing. 
                    You'll feel multiple warm towels, enjoy the precision of our expert barbers, 
                    and leave with the smoothest shave you've ever had.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Do you use straight razors for all hot towel shaves?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Yes, we use professionally maintained straight razors for the authentic 
                    experience and closest possible shave. Our barbers are expertly trained in 
                    straight razor techniques for your safety and comfort.
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
              Ready for the Ultimate Shave Experience?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Treat yourself to Salem's most luxurious hot towel shave at Cortado Barbershop
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Luxury Shave
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