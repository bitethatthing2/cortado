import Link from 'next/link'
import { Scissors, Sparkles, Users, Zap } from 'lucide-react'

const services = [
  {
    name: 'Premium Haircuts',
    description: 'Precision cuts tailored to your style and face shape. Includes consultation, shampoo, and styling.',
    price: '$35-50',
    icon: Scissors,
    href: '/services/haircuts',
    features: ['Personal consultation', 'Hot towel service', 'Styling products', 'Neck trim'],
  },
  {
    name: 'Signature Fades',
    description: 'Expert fades for all hair types. From low to high, skin to drop fades - we master them all.',
    price: '$30-45',
    icon: Zap,
    href: '/services/fades',
    features: ['All fade types', 'Line-up included', 'Design options', 'Black hair specialist'],
  },
  {
    name: 'Beard Grooming',
    description: 'Complete beard maintenance including trim, shape, and conditioning for a polished look.',
    price: '$20-35',
    icon: Users,
    href: '/services/beard-grooming',
    features: ['Beard trim & shape', 'Mustache styling', 'Beard oil treatment', 'Hot towel finish'],
  },
  {
    name: 'Hot Towel Shaves',
    description: 'Traditional luxury shave experience with hot towels, premium products, and expert technique.',
    price: '$40-55',
    icon: Sparkles,
    href: '/services/hot-towel-shaves',
    features: ['Pre-shave oil', 'Hot towel treatment', 'Straight razor shave', 'Aftershave balm'],
  },
]

export default function ServicesSection() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gold">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Elevate Your Style
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From classic cuts to modern fades, our skilled barbers deliver exceptional results every time. 
            All services include a consultation to ensure your complete satisfaction.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-8 border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    <Icon className="h-10 w-10 text-gold" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold leading-7 text-white">
                        {service.name}
                      </h3>
                      <p className="text-2xl font-bold text-gold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
                >
                  Learn More & Book
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            All services include complimentary consultation and neck trim. 
            <span className="font-semibold text-white"> Walk-ins welcome</span>, 
            but appointments recommended for minimal wait time.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-charcoal dark:bg-gold px-6 py-3 text-base font-semibold text-white dark:text-black shadow-sm hover:bg-charcoal/90 dark:hover:bg-gold/90 transition-colors"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </div>
    </div>
  )
}