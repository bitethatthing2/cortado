import Image from 'next/image'
import { Star, Award, Users, Scissors } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { id: 1, name: 'Years of Excellence', value: '3+', icon: Award },
    { id: 2, name: '5-Star Reviews', value: '130+', icon: Star },
    { id: 3, name: 'Happy Clients', value: '2,000+', icon: Users },
    { id: 4, name: 'Master Barbers', value: '4', icon: Scissors },
  ]

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gold">About Cortado</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Crafting Excellence, One Cut at a Time
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            At The Cortado Barbershop, we blend traditional barbering techniques with modern style to create 
            an experience that goes beyond just a haircut. Our commitment to excellence has earned us the trust 
            of Salem's most discerning gentlemen.
          </p>
        </div>

        {/* Shop Front Image */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/logos/front-view-cortado.png"
              alt="The Cortado Barbershop - Salem's Premier Destination"
              width={800}
              height={400}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Welcome to Cortado</h3>
              <p className="text-gray-200">Your destination for premium barbering in Salem, Oregon</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.id} className="flex flex-col items-center text-center">
                  <dt className="flex flex-col items-center gap-y-4">
                    <Icon className="h-12 w-12 text-gold" />
                    <span className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {stat.name}
                    </span>
                  </dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:text-center">
          <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-white">Why Choose Cortado?</span> We're not just another barbershop. 
              With over 130 five-star reviews and 3+ years of dedicated service to the Salem community, 
              we've built a reputation for consistency, quality, and an atmosphere where every client feels valued.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Located in <span className="font-semibold text-gold">Suite 150B</span> at 2195 Hyacinth St NE, 
              we're easy to find and always ready to provide you with the premium barbering experience you deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}