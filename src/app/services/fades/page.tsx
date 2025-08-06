import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Check, Calendar, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Signature Fades | Best Fades Salem OR | Low Mid High Skin Fade | Cortado',
  description: 'Expert fade haircuts in Salem, OR. Low fade, mid fade, high fade, skin fade specialists. Black hair fade experts. 130+ 5-star reviews. Suite 150B.',
  keywords: 'fades Salem, fade haircuts Salem OR, low fade Salem, mid fade Salem, high fade Salem, skin fade Salem, black hair fade Salem',
  openGraph: {
    title: 'Signature Fades | Salem\'s Best Fade Specialists',
    description: 'Salem\'s premier destination for professional fade haircuts. Expert barbers specializing in all fade types.',
    type: 'website',
  },
}

const fadeTypes = [
  {
    name: 'Low Fade',
    price: '$30-35',
    duration: '30 min',
    description: 'Subtle, professional fade starting just above the ears. Perfect for conservative styles.',
    features: ['Gradual blend', 'Professional appearance', 'Versatile styling', 'Easy maintenance'],
    bestFor: 'Office professionals, conservative styles, first-time fade clients',
  },
  {
    name: 'Mid Fade',
    price: '$35-40',
    duration: '35 min', 
    description: 'Our most popular fade. Balanced blend starting at temple level for versatile styling.',
    features: ['Most versatile option', 'Clean, modern look', 'Works with any hair type', 'Medium maintenance'],
    bestFor: 'All hair types, versatile styling, most popular choice',
  },
  {
    name: 'High Fade',
    price: '$35-40',
    duration: '35 min',
    description: 'Bold, modern fade starting high on the sides. Maximum contrast and edge.',
    features: ['High contrast', 'Bold, edgy look', 'Maximum fade effect', 'Statement style'],
    bestFor: 'Bold personalities, modern styles, maximum contrast',
  },
  {
    name: 'Skin Fade',
    price: '$40-45',
    duration: '40 min',
    description: 'Ultimate precision fade blending to skin level. Salem\'s cleanest fade specialist.',
    features: ['Blends to skin', 'Maximum precision', 'Ultra-clean finish', 'Premium technique'],
    bestFor: 'Clean, sharp looks, special occasions, maximum precision',
  },
]

export default function FadesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Professional Fade Haircuts',
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
      'name': 'Fade Services',
      'itemListElement': fadeTypes.map(fade => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': fade.name,
          'description': fade.description,
        },
        'price': fade.price,
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
                Signature Fades in Salem, OR
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Salem's fade specialists. From low fades to skin fades, we master every technique. 
                Expert fade haircuts for all hair types, including black hair specialization.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Link
                  href="/book"
                  className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
                >
                  Book Your Fade
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

        {/* Fade Types Grid */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                Professional Fade Types
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Choose from Salem's most expertly crafted fade styles
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {fadeTypes.map((fade) => (
                <div
                  key={fade.name}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:border-gold transition-colors"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {fade.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-x-1">
                        <DollarSign className="h-4 w-4" />
                        {fade.price}
                      </span>
                      <span className="flex items-center gap-x-1">
                        <Clock className="h-4 w-4" />
                        {fade.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {fade.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Best for: {fade.bestFor}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {fade.features.map((feature) => (
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
                    Book This Fade
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fade Guide */}
        <div className="bg-gray-50 dark:bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16 font-serif">
                The Complete Salem Fade Guide
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What Makes Our Fades Different?
                </h3>
                <p>
                  At Cortado Barbershop in Salem, we've perfected the art of the fade haircut. 
                  Our barbers are trained in advanced fade techniques that work with all hair types, 
                  textures, and densities. Whether you have straight, wavy, curly, or coily hair, 
                  we deliver clean, precise fades every time.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  Black Hair Fade Specialists
                </h3>
                <p>
                  We're proud to be Salem's premier black hair fade specialists. Our barbers understand 
                  the unique characteristics of African American hair and use specialized techniques to 
                  create flawless fades on textured hair. From tight curls to coily textures, we deliver 
                  the cleanest fades in Salem.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                  Fade Maintenance Tips
                </h3>
                <ul className="space-y-2">
                  <li>• Low fades typically need touch-ups every 4-6 weeks</li>
                  <li>• Mid and high fades look best with maintenance every 2-3 weeks</li>
                  <li>• Skin fades require the most frequent maintenance (every 1-2 weeks)</li>
                  <li>• Use quality hair products to maintain your style between visits</li>
                  <li>• Regular line-ups keep your fade looking sharp</li>
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
                Salem Fade FAQs
              </h2>
              
              <dl className="space-y-8">
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: What's the best fade for black hair in Salem?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: At Cortado Barbershop, we recommend the mid-fade for most black hair textures because 
                    it offers versatility and works well with natural hair patterns. However, our expert 
                    barbers will consult with you to determine the perfect fade for your hair type and lifestyle.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: How often should I get my fade touched up?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: For most men in Salem, we recommend every 2-3 weeks for mid to high fades, and every 
                    4-6 weeks for low fades. Skin fades may need touching up every 1-2 weeks to maintain 
                    that crisp, clean look.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: Do you do skin fades on all hair types?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Yes! Our barbers are skilled in creating skin fades on all hair types and textures. 
                    We're Salem's skin fade specialists and take pride in delivering the cleanest, most 
                    precise skin fades in the area.
                  </dd>
                </div>
                
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    Q: What's included with a fade haircut at Cortado?
                  </dt>
                  <dd className="mt-2 text-gray-600 dark:text-gray-300">
                    A: Every fade includes consultation, precision cutting, blending, line-up, neck trim, 
                    and styling. We also provide aftercare advice and product recommendations to help you 
                    maintain your fade between visits.
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
              Ready for Salem's Best Fade?
            </h2>
            <p className="text-lg text-black/80 mb-8">
              Join the thousands who trust Cortado for the cleanest fades in Salem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Fade Now
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