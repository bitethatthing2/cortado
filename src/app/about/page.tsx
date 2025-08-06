import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Award, Users, Clock, MapPin, Scissors, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Cortado Barbershop | Salem\'s Premier Barber Experience | Suite 150B',
  description: 'Learn about Cortado Barbershop\'s story, mission, and commitment to excellence in Salem, OR. 130+ 5-star reviews, 3+ years serving the community at Suite 150B.',
  keywords: 'about Cortado Barbershop, Salem barber story, Suite 150B, barber shop history Salem, best barbershop Salem OR',
  openGraph: {
    title: 'About Cortado Barbershop | Salem\'s Premier Barber Experience',
    description: 'Discover the story behind Salem\'s most trusted barbershop. 130+ 5-star reviews and 3+ years of excellence.',
    type: 'website',
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'HairSalon',
      'name': 'The Cortado Barbershop',
      'description': 'Salem\'s premier barbershop specializing in modern cuts, traditional shaves, and exceptional grooming services.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2195 Hyacinth St NE Suite 150B',
        'addressLocality': 'Salem',
        'addressRegion': 'OR',
        'postalCode': '97301',
      },
      'foundingDate': '2021',
      'founder': {
        '@type': 'Person',
        'name': 'Marcus Johnson'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '130',
        'bestRating': '5'
      }
    }
  }

  const stats = [
    { icon: Star, label: '130+ 5-Star Reviews', value: '4.9/5', description: 'Average rating across all platforms' },
    { icon: Users, label: 'Clients Served', value: '5,000+', description: 'Happy customers since opening' },
    { icon: Clock, label: 'Years of Excellence', value: '3+', description: 'Serving Salem community' },
    { icon: Award, label: 'Master Barbers', value: '2', description: 'Experienced professionals' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We\'re not just a barbershop - we\'re a cornerstone of the Salem community, building lasting relationships with every client.'
    },
    {
      icon: Award,
      title: 'Excellence in Craft',
      description: 'Our master barbers continuously hone their skills, staying current with trends while respecting traditional techniques.'
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'Every client is welcomed with respect and professionalism, regardless of background, age, or style preference.'
    }
  ]

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
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <Scissors className="h-16 w-16 text-gold" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                Our Story
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                More than just a barbershop - we're Salem's premier grooming destination, 
                committed to excellence and community at Suite 150B.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-24 bg-gray-50 dark:bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <stat.icon className="h-12 w-12 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                    Founded on Excellence
                  </h2>
                  <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Cortado Barbershop was born from a vision to bring exceptional grooming services 
                    to Salem, Oregon. Founded in 2021 by Master Barber Marcus Johnson, we set out to 
                    create more than just a place for haircuts - we wanted to build a community hub 
                    where craftsmanship meets comfort.
                  </p>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Located at Suite 150B on Hyacinth Street, we've carefully distinguished ourselves 
                    from other establishments in the area through our commitment to quality, attention 
                    to detail, and genuine care for each client who walks through our doors.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                    {/* Placeholder for shop interior photo */}
                    <div className="h-full w-full bg-gradient-to-br from-gold/20 to-charcoal/20 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Suite 150B</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Our Home Since 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="py-24 bg-gray-50 dark:bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                What drives us every day at Cortado Barbershop
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-gold/10 p-4">
                      <value.icon className="h-8 w-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-16 sm:text-4xl font-serif">
                Why Salem Chooses Cortado
              </h2>
              
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      Suite 150B - Not to be Confused
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      We're proud to be located at Suite 150B, and we want our clients to know exactly 
                      where to find us. While there are other businesses in our building, Cortado 
                      Barbershop at Suite 150B is the established choice with over 130 five-star reviews 
                      and 3+ years of consistent excellence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      Black Hair Specialists
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Our team has extensive experience working with all hair textures, with particular 
                      expertise in black hair styling. From precision fades and line-ups to textured 
                      cuts and styling, we understand the unique needs and preferences of every client.
                    </p>
                  </div>
                </div>

                <div className="bg-gold/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    The Cortado Difference
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">130+ authentic 5-star reviews</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">3+ years of proven excellence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Master barbers with 25+ combined years</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Specialization in all hair textures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Premium products and equipment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Community-focused approach</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-charcoal dark:bg-black py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4 font-serif">
              Experience the Cortado Difference
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join the hundreds of satisfied clients who trust us with their grooming needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
              >
                Book Your Visit
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center rounded-md border border-gold px-6 py-3 text-base font-semibold text-gold hover:bg-gold hover:text-black transition-colors"
              >
                Read Our Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}