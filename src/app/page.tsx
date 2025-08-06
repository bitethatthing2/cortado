import HeroSection from '@/components/sections/HeroSection'
import ContactInfoBar from '@/components/sections/ContactInfoBar'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import BarbersSection from '@/components/sections/BarbersSection'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ContactInfoBar />
      <AboutSection />
      <ServicesSection />
      <BarbersSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
      <iframe 
        src="/chatbot.html" 
        style={{ 
          position: 'fixed', 
          bottom: '0', 
          right: '0', 
          width: '100vw', 
          height: '100vh', 
          border: 'none',
          zIndex: 1000,
          pointerEvents: 'auto'
        }}
        title="Booking Assistant"
      />
    </main>
  )
}