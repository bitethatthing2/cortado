import InstagramEmbed from '@/components/ui/InstagramEmbed'
import { Instagram } from 'lucide-react'

export default function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream">
              Follow Our Work
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See our latest cuts, styles, and transformations. Follow @the_cortado_barbershop for daily inspiration and booking updates.
          </p>
        </div>

        <div className="flex justify-center">
          <InstagramEmbed 
            url="https://www.instagram.com/the_cortado_barbershop/"
            className="w-full max-w-2xl"
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/the_cortado_barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Follow @the_cortado_barbershop
          </a>
        </div>
      </div>
    </section>
  )
}