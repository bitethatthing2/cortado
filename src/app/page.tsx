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
          bottom: '20px', 
          right: '20px', 
          width: '400px', 
          height: '600px', 
          border: 'none',
          zIndex: 1000,
          pointerEvents: 'auto',
          maxWidth: 'calc(100vw - 40px)',
          maxHeight: 'calc(100vh - 100px)'
        }}
        title="Booking Assistant"
      />
    </main>
  )
}