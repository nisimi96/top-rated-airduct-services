import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, Clock, Building2 } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Top Rated Air Duct Cleaning: ' + COMPANY_INFO.phone,
  description: 'Get in touch with Top Rated Air Duct Cleaning. Call us for free estimates, questions, or to schedule service.',
}

export default function ContactPage() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Introduction Header */}
      <section className="bg-white text-brand-blue py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight animate-fade-in-up">
            Book Your Service Now
          </h1>
          <p className="text-xl text-gray-600 font-light animate-fade-in-up">
            Speak directly to an expert for immediate assistance and a free quote.
          </p>
        </div>
      </section>

      {/* Primary CTA - The Phone Number */}
      <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-blue-200 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Call Us Today</span>

          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-block text-5xl md:text-7xl lg:text-8xl font-black text-brand-lime hover:text-white transition-colors tracking-tighter drop-shadow-lg"
          >
            {COMPANY_INFO.phone}
          </a>

          <p className="mt-8 text-blue-100 text-lg max-w-xl mx-auto">
            No automated loops. No waiting. Just direct access to our scheduling team.
          </p>

          <div className="mt-8 inline-block bg-brand-lime text-brand-blue font-bold px-6 py-2 rounded-full text-sm">
            Faster Response Time Than Email
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Secondary Contact Info & Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

            {/* Information Column */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold text-brand-blue">Contact Details</h2>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-blue mb-1">Email Us</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-brand-lime transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-gray-400 mt-2">For non-urgent inquiries.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-blue mb-1">Operating Hours</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li className="flex justify-between w-48"><span>Sun - Fri:</span> <span>8:00 AM – 5:00 PM</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-blue mb-1">Office Location</h3>
                  <address className="text-gray-600 not-italic mb-3">
                    1880 West Oak Parkway<br/>
                    Unit 104, Office 104<br/>
                    Marietta, GA 30062
                  </address>
                  <div className="text-xs text-amber-600 font-medium bg-amber-50 px-3 py-2 rounded-lg border border-amber-100 inline-block">
                    *Administrative Office. No equipment storage or walk-in service.
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="h-full min-h-[400px] relative">
              <div className="h-full rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group">
                <Image
                  src="/images/atlanta-map.webp"
                  alt="Atlanta Service Area Map"
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Ready to Breathe Easier?
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Don't wait. Call now to secure your spot for the week.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-3 bg-brand-blue hover:bg-blue-900 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6 fill-current" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
