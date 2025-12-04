import Script from 'next/script'
import Image from 'next/image'
import { Phone, Mail, Clock, Building2 } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Load Google Maps API only on contact page */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="lazyOnload"
        async
      />

      <div className="bg-gray-50" style={{paddingTop: 'calc(100px + 5rem)'}}>
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

      {/* Combined Form & Contact Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Form - Takes up 2 columns on desktop, full width on mobile */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Details Sidebar */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue">Contact Details</h2>

              {/* Email */}
              <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-brand-blue mb-1">Email</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-brand-lime transition-colors text-sm break-all">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Non-urgent inquiries</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue mb-1">Hours</h3>
                  <ul className="text-gray-600 space-y-0.5 text-sm">
                    <li>Sun - Fri: 8 AM – 5 PM</li>
                    <li>Saturday: Closed</li>
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-brand-blue mb-1">Office</h3>
                  <address className="text-gray-600 not-italic text-sm mb-2 leading-snug">
                    1880 West Oak Pkwy<br/>
                    Unit 104, Marietta, GA 30062
                  </address>
                  <p className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded border border-amber-100">
                    Admin only
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="h-48 md:h-56 lg:h-64 relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/atlanta-map.webp"
                  alt="Atlanta Service Area Map"
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
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
    </>
  )
}
