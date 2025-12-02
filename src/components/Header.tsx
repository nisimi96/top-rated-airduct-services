'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS, DETAILED_SERVICES } from '@/lib/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  const getLinkProps = (link: { name: string, href: string, type: string }) => {
    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

    return {
        href: link.href,
        className: `font-medium transition-colors text-sm uppercase tracking-wide ${
            isActive ? 'text-brand-lime' : 'text-gray-200 hover:text-brand-lime'
        }`
    };
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-blue shadow-lg py-2' : 'bg-brand-blue/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/top-airduct-logo.png"
            alt="Top Rated Air Duct Cleaning Logo"
            width={120}
            height={120}
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAVIGATION_LINKS.map((link) => (
            link.name === 'Services' ? (
              <div key="services" className="relative group">
                <button
                  className="font-medium transition-colors text-sm uppercase tracking-wide text-gray-200 hover:text-brand-lime flex items-center gap-1"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsServicesDropdownOpen(!isServicesDropdownOpen);
                    }
                    if (e.key === 'Escape') {
                      setIsServicesDropdownOpen(false);
                    }
                  }}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="menu"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>

                {/* Desktop Dropdown Menu */}
                <div
                  className="absolute left-0 mt-0 w-56 bg-brand-blue border border-blue-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  role="menu"
                >
                  {DETAILED_SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={service.link}
                      className="block px-4 py-2.5 text-sm text-gray-200 hover:text-brand-lime hover:bg-blue-800 transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                {...getLinkProps(link as any)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={COMPANY_INFO.phoneLink}
            className="flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-2.5 px-6 rounded-full transition-transform transform hover:scale-105 shadow-md"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-brand-blue border-t border-blue-800 absolute w-full shadow-xl overflow-y-auto max-h-screen"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col p-6 space-y-6">
            {NAVIGATION_LINKS.map((link) => (
              link.name === 'Services' ? (
                <div key="services-mobile" className="space-y-2">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsMobileServicesOpen(!isMobileServicesOpen);
                      }
                    }}
                    className="text-white text-xl font-medium py-2 border-b border-blue-800/50 w-full flex justify-between items-center"
                    aria-expanded={isMobileServicesOpen}
                    aria-haspopup="menu"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="bg-blue-800 rounded-lg py-2 space-y-1 ml-4" role="menu">
                      {DETAILED_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={service.link}
                          className="block px-3 py-2 text-gray-200 hover:text-brand-lime text-lg font-medium"
                          onClick={() => {
                            handleNavClick(service.link);
                            setIsMobileServicesOpen(false);
                          }}
                          role="menuitem"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-xl font-medium py-2 border-b border-blue-800/50"
                  onClick={() => handleNavClick(link.href)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              )
            ))}
             <a
                href={COMPANY_INFO.phoneLink}
                className="flex items-center justify-center gap-2 bg-brand-lime text-brand-blue font-bold py-4 px-6 rounded-xl mt-4"
              >
                <Phone className="w-6 h-6 fill-current" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
