'use client'

import Image from 'next/image'
import { Star, Scissors, Award, Clock } from 'lucide-react'

const barbers = [
  {
    id: 1,
    name: 'Michael',
    title: 'Master Barber & Owner',
    experience: '23+ Years Experience',
    specialty: '**All Hair Types**, **Precision Fades**, **Classic Cuts**, **Black Hair Expert**',
    bio: 'Michael is a **Master Barber** with an impressive **23 years of experience** serving Salem and the surrounding community. His **expertise spans all hair types** and textures, making him the go-to professional for clients with diverse needs. Specializing in **precision fades**, **classic gentleman cuts**, and advanced techniques for **textured and ethnic hair**.',
    image: '/images/barbers/michael.jpg',
    stats: {
      yearsExperience: 23,
      clientsServed: '15,000+',
      specialties: ['All Hair Types', 'Master Fades', 'Black Hair Specialist', 'Beard Grooming', 'Classic Cuts', 'Modern Styles']
    }
  }
]

export default function BarbersSection() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 flex justify-center">
            <Scissors className="h-12 w-12 text-gold" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Meet Your Master Barber
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            **23 years of expertise** at Suite 150B. Salem's premier destination for **all hair types** and **precision cuts**.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
          {barbers.map((barber) => (
            <div key={barber.id} className="group">
              {/* Barber Card */}
              <div className="rounded-2xl bg-gray-900 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gold">
                    {/* Placeholder for barber images */}
                    <div className="h-full w-full bg-gradient-to-br from-gold/20 to-charcoal/20 flex items-center justify-center">
                      <Scissors className="h-12 w-12 text-gold" />
                    </div>
                  </div>
                </div>

                {/* Barber Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {barber.name}
                  </h3>
                  <p className="text-gold font-semibold mb-2">
                    {barber.title}
                  </p>
                  <p className="text-sm text-gray-200 mb-3">
                    {barber.experience}
                  </p>
                  <div className="text-sm font-semibold text-gold">
                    <span className="bg-gold/10 px-3 py-1 rounded-full border border-gold/30">All Hair Types</span> • 
                    <span className="bg-gold/10 px-3 py-1 rounded-full border border-gold/30 ml-1">Precision Fades</span> • 
                    <span className="bg-gold/10 px-3 py-1 rounded-full border border-gold/30 ml-1">Classic Cuts</span> • 
                    <span className="bg-gold/10 px-3 py-1 rounded-full border border-gold/30 ml-1">Black Hair Expert</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="text-center mb-6 leading-relaxed">
                  <p className="text-base text-gray-100 font-medium mb-2">
                    Michael is a <span className="text-gold font-bold">Master Barber</span> with an impressive <span className="text-gold font-bold">23 years of experience</span> serving Salem and the surrounding community.
                  </p>
                  <p className="text-sm text-gray-200">
                    His <span className="text-gold font-semibold">expertise spans all hair types</span> and textures, making him the go-to professional for clients with diverse needs. Specializing in <span className="text-gold font-semibold">precision fades</span>, <span className="text-gold font-semibold">classic gentleman cuts</span>, and advanced techniques for <span className="text-gold font-semibold">textured and ethnic hair</span>.
                  </p>
                </div>

                {/* Stats */}
                <div className="border-t border-gray-600 pt-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="h-6 w-6 text-gold" />
                      </div>
                      <p className="text-2xl font-bold text-gold">
                        {barber.stats.yearsExperience}
                      </p>
                      <p className="text-sm text-gray-200 font-medium">Years</p>
                      <p className="text-xs text-gray-300">Experience</p>
                    </div>
                    <div className="text-center bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="h-6 w-6 text-gold" />
                      </div>
                      <p className="text-2xl font-bold text-gold">
                        {barber.stats.clientsServed}
                      </p>
                      <p className="text-sm text-gray-200 font-medium">Clients</p>
                      <p className="text-xs text-gray-300">Served</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {barber.stats.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-block px-4 py-2 text-sm bg-gold/20 text-gold font-semibold rounded-full border border-gold/40 hover:bg-gold/30 transition-colors"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gold mb-4">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to Experience **23 Years** of Master Barbering?
          </h3>
          <p className="text-gray-200 mb-6">
            Michael at Suite 150B is ready to deliver your perfect cut - **specializing in all hair types**
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gold/90 transition-colors"
            >
              Book with Michael
            </a>
            <a
              href="tel:503-967-0304"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gold px-6 py-3 text-base font-semibold text-gold hover:bg-gold hover:text-black transition-colors"
            >
              Call 503-967-0304
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}