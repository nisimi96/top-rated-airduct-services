import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_CITIES } from '@/lib/constants';

const ServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-blue font-bold tracking-widest uppercase mb-2 block text-sm">Our Reach</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Proudly Serving Metro Atlanta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We cover a 60-mile radius around Atlanta. If you're in the metro area, we're ready to help.
          </p>
          <Link
            href="/service-area"
            className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-lime transition-colors border-b-2 border-transparent hover:border-brand-lime"
          >
            View Full Service Map <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 rounded-3xl overflow-hidden shadow-inner border border-gray-100">

          {/* List Side */}
          <div className="lg:w-1/3 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-2">
              <MapPin className="text-brand-lime" /> Key Service Cities
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {SERVICE_CITIES.slice(0, 15).map((city) => (
                <li key={city} className="flex items-center text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-lime rounded-full mr-2"></span>
                  {city}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blue-100 rounded-lg text-brand-blue text-sm">
                <strong>Don't see your city?</strong> Call us! We likely serve your neighborhood too.
            </div>
          </div>

          {/* Map Side - Using a placeholder image instead of iframe */}
          <div className="lg:w-2/3 h-80 lg:h-auto min-h-[400px] relative group bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <p className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                Map Service Area - Atlanta Metro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
