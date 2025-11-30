import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | Top Rated Air Duct Cleaning - Atlanta',
  description: 'Get in touch with Top Rated Air Duct Cleaning. Call us for free estimates, questions, or to schedule service.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? Ready to schedule service? We're here to help. Contact us today for a free estimate.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Phone className="w-12 h-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-blue mb-2">Phone</h3>
              <a href={COMPANY_INFO.phoneLink} className="text-xl font-bold text-brand-lime hover:underline">
                {COMPANY_INFO.phone}
              </a>
              <p className="text-sm text-gray-600 mt-2">24/7 Available</p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Mail className="w-12 h-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-blue mb-2">Email</h3>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold text-brand-lime hover:underline">
                {COMPANY_INFO.email}
              </a>
              <p className="text-sm text-gray-600 mt-2">Response within 24hrs</p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <MapPin className="w-12 h-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-blue mb-2">Address</h3>
              <p className="font-bold text-gray-700">
                1880 West Oak Parkway<br />
                Marietta, GA 30062
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Clock className="w-12 h-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-blue mb-2">Hours</h3>
              <p className="text-gray-700 text-sm">
                Mon - Fri: 7am - 7pm<br />
                Sat - Sun: 8am - 6pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Service Area</h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We proudly serve Atlanta and a 60-mile radius around the metro area. This includes Marietta, Alpharetta, Roswell, Decatur, Lawrenceville, and many surrounding communities.
            </p>
            <p className="text-gray-600 mb-6">
              If you're unsure whether your location is within our service area, give us a call. We likely serve your neighborhood!
            </p>
            <Link
              href="/service-area"
              className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-lime transition-colors"
            >
              View Complete Service Map <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can you schedule service?",
                a: "We typically schedule appointments within 2-3 days. For urgent cases like dryer vent concerns, we can often arrange same-day service."
              },
              {
                q: "Do you offer free estimates?",
                a: "Yes! We provide free, no-obligation estimates for all services. Call us or request one online to get started."
              },
              {
                q: "What's included in your service?",
                a: "Service includes thorough inspection, professional cleaning with state-of-the-art equipment, and verification of results. We also provide a detailed report."
              },
              {
                q: "Are you licensed and insured?",
                a: "Yes, we are fully licensed, insured, and NADCA certified. All our technicians undergo regular training and background checks."
              },
              {
                q: "What areas do you serve?",
                a: "We serve Atlanta and a 60-mile radius including Marietta, Alpharetta, Roswell, Decatur, and many surrounding areas. Check our service map for details."
              },
              {
                q: "Do you offer financing options?",
                a: "Yes, we work with several financing partners to make our services affordable. Ask about flexible payment plans when you call."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-blue mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today for a free estimate and discover why thousands of families trust us with their HVAC needs.
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
