import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ServiceArea from '@/components/ServiceArea'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfterSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceArea />
    </>
  )
}
