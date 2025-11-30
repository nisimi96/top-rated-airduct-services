'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Wind } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center">
            <Wind className="text-brand-blue w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg md:text-xl leading-none tracking-tight">
              TOP RATED
            </span>
            <span className="text-brand-lime text-xs md:text-sm font-semibold tracking-widest">
              AIR DUCT CLEANING
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
             <Link
                key={link.name}
                {...getLinkProps(link as any)}
            >
                {link.name}
            </Link>
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
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-blue-800 absolute w-full shadow-xl h-screen">
          <div className="flex flex-col p-6 space-y-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-xl font-medium py-2 border-b border-blue-800/50"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
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
