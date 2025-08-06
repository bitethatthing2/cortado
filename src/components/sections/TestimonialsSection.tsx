'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Best barbershop in Salem! The attention to detail is incredible, and they really know how to work with all hair types. My fade has never looked better.",
    author: "Marcus Johnson",
    rating: 5,
    service: "Signature Fade",
  },
  {
    id: 2,
    content: "I've been coming here for 2 years and the quality is consistently excellent. The hot towel shave is a luxury experience that's worth every penny.",
    author: "David Chen",
    rating: 5,
    service: "Hot Towel Shave",
  },
  {
    id: 3,
    content: "Finally found a barber who understands black hair! They take their time and make sure everything is perfect. Suite 150B is the right place!",
    author: "Terrell Williams",
    rating: 5,
    service: "Premium Haircut",
  },
  {
    id: 4,
    content: "Professional, skilled, and friendly. The atmosphere is great and they really make you feel valued as a customer. Highly recommend!",
    author: "James Rodriguez",
    rating: 5,
    service: "Beard Grooming",
  },
  {
    id: 5,
    content: "My son and I both get our haircuts here. They're great with kids and adults alike. The consistency and quality keep us coming back.",
    author: "Michael Thompson",
    rating: 5,
    service: "Premium Haircut",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gold">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            What Our Clients Say
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="relative">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 shadow-lg">
              <div className="flex gap-x-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              
              <blockquote className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-gold">
                    {currentTestimonial.service}
                  </p>
                </div>
                
                <div className="flex gap-x-3">
                  <button
                    onClick={prevTestimonial}
                    className="rounded-full bg-white dark:bg-gray-700 p-2 text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="rounded-full bg-white dark:bg-gray-700 p-2 text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-x-2 rounded-full bg-gold/10 px-6 py-3">
            <Star className="h-5 w-5 fill-gold text-gold" />
            <p className="text-lg font-semibold text-white">
              130+ Five-Star Reviews
            </p>
            <Star className="h-5 w-5 fill-gold text-gold" />
          </div>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Join hundreds of satisfied clients who trust Cortado Barbershop for their grooming needs.
          </p>
        </div>
      </div>
    </div>
  )
}