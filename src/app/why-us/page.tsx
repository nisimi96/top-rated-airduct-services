import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Award, Shield, Zap, ThumbsUp } from 'lucide-react'
import { COMPANY_INFO, WHY_US_FEATURES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Why Choose Top Rated Air Duct Cleaning | Atlanta',
  description: 'NADCA certified experts. Superior technology. Transparent pricing. 100% satisfaction guarantee. Here\'s why we\'re Atlanta\'s top choice.',
}

export default function WhyUsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Top Rated Air Duct Cleaning</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            We're Atlanta's trusted HVAC cleaning specialists. Here's why families and businesses choose us.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Get Free Estimate
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US_FEATURES.map((feature) => (
              <div key={feature.id} className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-lime rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">What Sets Us Apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "NADCA Certification",
                icon: Award,
                desc: "Our technicians are NADCA certified, ensuring adherence to the highest industry standards for HVAC cleaning."
              },
              {
                title: "Industrial-Grade Equipment",
                icon: Zap,
                desc: "We use state-of-the-art HEPA filtration vacuum systems with negative pressure technology for complete contamination removal."
              },
              {
                title: "Transparent Pricing",
                icon: Shield,
                desc: "No hidden fees, no tricks. Free estimates upfront with detailed breakdowns. You know exactly what you're paying for."
              },
              {
                title: "100% Satisfaction Guarantee",
                icon: ThumbsUp,
                desc: "If you're not completely satisfied with our work, we'll return to make it right, no questions asked."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <item.icon className="w-10 h-10 text-brand-lime mb-4" />
                <h3 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Comprehensive Services</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 text-center mb-12">
              We don't just clean air ducts. We provide complete HVAC solutions under one roof.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Air Duct Cleaning",
                "Dryer Vent Cleaning",
                "Duct Installation & Repair",
                "Dryer Vent Installation",
                "Commercial Services",
                "UV Light Installation",
                "Mold Testing",
                "Blown-In Insulation",
                "HVAC Installation",
                "Crawlspace Waterproofing",
              ].map((service, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "1000+", label: "Satisfied Customers" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-brand-lime mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">What Our Customers Say</h2>

          <div className="max-w-2xl mx-auto bg-blue-50 p-12 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-6 italic">
              "The difference in air quality was noticeable immediately. The team was professional, efficient, and left the house spotless. Highly recommend!"
            </p>
            <p className="font-bold text-brand-blue">Sarah J., Marietta GA</p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Serving Metro Atlanta</h2>

          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
            We proudly serve Atlanta and a 60-mile radius including Marietta, Alpharetta, Roswell, and beyond. Wherever you are in the Atlanta metro area, we're ready to help.
          </p>

          <div className="text-center">
            <Link
              href="/service-area"
              className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-lime transition-colors"
            >
              View Full Service Map <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue font-bold text-lg py-4 px-10 rounded-full transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
