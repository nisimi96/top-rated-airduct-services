import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES_LIST, DETAILED_SERVICES } from '@/lib/constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Our Core Services</h2>
          <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            We specialize in deep cleaning solutions that improve air quality and system efficiency.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-lime transition-colors border-b-2 border-transparent hover:border-brand-lime"
          >
            View Full Service Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const detailedService = DETAILED_SERVICES[index];
            return (
            <Link
              href={detailedService?.link || "/services"}
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-lime group hover:-translate-y-1 block"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <service.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center md:hidden">
             <Link
                href="/services"
                className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full shadow-lg"
            >
                View All Services
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
