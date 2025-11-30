import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] pb-safe">
      <a
        href={COMPANY_INFO.phoneLink}
        className="flex items-center justify-center gap-2 w-full bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-4 rounded-xl shadow-lg animate-pulse-slow"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span>Call Now: {COMPANY_INFO.phone}</span>
      </a>
    </div>
  );
};

export default StickyMobileCTA;
