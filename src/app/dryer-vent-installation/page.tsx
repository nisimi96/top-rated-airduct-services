import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Hammer, ShieldAlert, Construction, Ruler, AlertTriangle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dryer Vent Installation in Atlanta | Code-Compliant Venting',
  description: 'Professional dryer vent installation and repair. Code-compliant rigid venting. Fire-safe and efficient. Free estimates.',
}

export default function DryerVentInstallationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dryer Vent Installation</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Improper dryer venting is a major fire hazard. We install code-compliant, rigid venting systems for maximum safety.
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

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Why Professional Installation Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Common Mistakes:</h3>
              <ul className="space-y-4">
                {[
                  "Flexible dryer vent hose (fire hazard)",
                  "Venting into attic or crawlspace",
                  "Improper termination (too short)",
                  "Blocked or damaged vents",
                  "Improper angle or routing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Standards:</h3>
              <ul className="space-y-4">
                {[
                  "Rigid metal ducting (not flexible)",
                  "Proper slope for drainage",
                  "Sealed connections with caulk/tape",
                  "Exterior termination with flapper",
                  "Code-compliant throughout",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Installation & Repair Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Construction,
                title: "New Installation",
                desc: "Professional installation of rigid dryer venting systems that meet all building codes."
              },
              {
                icon: Hammer,
                title: "Vent Repair",
                desc: "Fix damaged, disconnected, or improperly installed vents. Restore safety and efficiency."
              },
              {
                icon: Ruler,
                title: "Re-routing",
                desc: "Reroute vents away from attics, crawlspaces, or improper termination points."
              },
              {
                icon: ShieldAlert,
                title: "Safety Inspection",
                desc: "Comprehensive inspection to ensure your dryer vent system is safe and efficient."
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <service.icon className="w-10 h-10 text-brand-lime mb-4" />
                <h3 className="text-lg font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why Choose Our Installation Service</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                num: "1",
                title: "Code Compliant",
                desc: "All installations meet building codes and manufacturer specifications."
              },
              {
                num: "2",
                title: "Safety First",
                desc: "We prioritize fire safety with proper materials and installation techniques."
              },
              {
                num: "3",
                title: "Warranty",
                desc: "Professional installation with satisfaction guarantee on all work."
              },
            ].map((item) => (
              <div key={item.num} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-lime text-brand-blue font-bold rounded-full mb-4">
                  {item.num}
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Safe Dryer Venting</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Professional installation protects your family. Schedule your consultation today.
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
