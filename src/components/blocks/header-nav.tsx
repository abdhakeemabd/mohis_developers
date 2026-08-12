'use client';

import React, { useState } from 'react';
import { MohisLogo } from '@/components/ui/logo';
import { NAV_ROUTES } from '@/lib/data';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

interface HeaderNavProps {
  onOpenModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-md border-b border-navy/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Mohis Developers Logo */}
          <a href="#" className="flex items-center focus:outline-none">
            <MohisLogo />
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ROUTES.map((route) => (
              <a
                key={route.label}
                href={route.href}
                className="text-sm font-semibold text-navy/80 hover:text-navy hover:scale-105 transition-all duration-200 relative group"
              >
                {route.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTAs (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenModal}
              className="px-4 py-2.5 rounded-xl border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-all duration-300 shadow-sm"
            >
              Contact Us
            </button>
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl bg-gold text-navy font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-gold/20 hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy hover:bg-navy/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-navy/10 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 pt-2">
            {NAV_ROUTES.map((route) => (
              <a
                key={route.label}
                href={route.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-navy hover:bg-navy/5"
              >
                {route.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              className="w-full py-3 rounded-xl border-2 border-navy text-navy font-bold text-sm uppercase tracking-wider text-center"
            >
              Contact Us
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              className="w-full py-3 rounded-xl bg-gold text-navy font-bold text-sm uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
