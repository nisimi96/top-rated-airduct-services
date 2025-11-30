import React from 'react';
import { Phone, Mail, MapPin, Wind } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center">
                    <Wind className="text-brand-blue w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold leading-none">TOP RATED</span>
                    <span className="text-brand-lime text-xs font-semibold tracking-widest">AIR DUCT CLEANING</span>
                </div>
            </div>
            <p className="text-gray-400 mb-6">
              Restoring healthy air to Atlanta homes and businesses. Licensed, insured, and committed to excellence.
            </p>
          </div>

          {/* Quick Contact - Center Focused */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href={COMPANY_INFO.phoneLink} className="flex items-start gap-4 group">
                <Phone className="w-6 h-6 text-brand-lime mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-gray-400 text-sm">Phone (24/7)</span>
                  <span className="text-xl font-bold text-white group-hover:text-brand-lime transition-colors">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-lime mt-1" />
                <div>
                  <span className="block text-gray-400 text-sm">Email</span>
                  <span className="text-white">{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Location</h4>
            <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-lime mt-1 shrink-0" />
                <div>
                  <span className="block text-gray-400 text-sm mb-1">Office Address</span>
                  <address className="text-white not-italic leading-relaxed">
                    1880 West Oak Parkway<br/>
                    Unit 104, Office 104<br/>
                    Marietta, GA 30062
                  </address>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Top Rated Air Duct Cleaning. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Atlanta's Preferred HVAC Cleaning Specialists</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
