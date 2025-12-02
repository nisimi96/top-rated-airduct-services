import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), { loading: () => <div className="py-16" /> })
const BeforeAfterSection = dynamic(() => import('@/components/BeforeAfterSection'), { loading: () => <div className="py-16" /> })
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { loading: () => <div className="py-16" /> })
const ServiceArea = dynamic(() => import('@/components/ServiceArea'), { loading: () => <div className="py-16" /> })

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
