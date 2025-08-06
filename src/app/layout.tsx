import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'The Cortado Barbershop | Luxury Haircuts & Fades in Salem, OR',
  description: 'Salem\'s premier barbershop offering luxury haircuts, signature fades, and hot towel shaves. 130+ 5-star reviews. Book your appointment today at Suite 150B.',
  keywords: 'barbershop Salem OR, haircuts Salem, fades Salem, beard trim Salem, hot towel shave, black hair specialist Salem',
  openGraph: {
    title: 'The Cortado Barbershop | Luxury Haircuts & Fades in Salem, OR',
    description: 'Salem\'s premier barbershop offering luxury haircuts, signature fades, and hot towel shaves.',
    url: 'https://cortadobarbershop.com',
    siteName: 'The Cortado Barbershop',
    images: [
      {
        url: 'https://cortadobarbershop.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cortado Barbershop | Luxury Haircuts & Fades in Salem, OR',
    description: 'Salem\'s premier barbershop offering luxury haircuts, signature fades, and hot towel shaves.',
    images: ['https://cortadobarbershop.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "The Cortado Barbershop",
  "image": "https://cortadobarbershop.com/images/cortado-exterior.jpg",
  "url": "https://cortadobarbershop.com",
  "telephone": "503-967-0304",
  "priceRange": "$30-$55",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2195 Hyacinth St NE Suite 150B",
    "addressLocality": "Salem",
    "addressRegion": "OR",
    "postalCode": "97301",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "44.9778",
    "longitude": "-123.0351"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/cortadobarbershop",
    "https://www.instagram.com/cortadobarbershop",
    "https://www.yelp.com/biz/the-cortado-barbershop-salem"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "130"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}