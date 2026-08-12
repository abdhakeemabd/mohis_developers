'use client';

import React from 'react';
import { MohisLogo } from '@/components/ui/logo';
import { NAV_ROUTES } from '@/lib/data';
import { PhoneCall, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-navy text-white relative overflow-hidden border-t border-gold/20">
      
      {/* Top CTA Banner */}
      <div className="border-b border-white/10 py-16 bg-navy-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 px-4 py-1.5 rounded-full inline-block">
            Start Your Next Development Milestone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base font-medium">
            Whether you require custom home builds, roadway civil engineering, or enterprise software systems, Mohis Developers delivers turnkey solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 inline-flex items-center gap-3 group"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Book a Consultation Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <MohisLogo variant="light" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Mohis Developers is an early-stage hybrid developer operating at the intersection of Physical Infrastructure (Civil, Homes, Roads) and Digital Solutions (Software, IT Support).
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>2026 Modern Engineering & IT Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {NAV_ROUTES.map((route) => (
                <li key={route.label}>
                  <a href={route.href} className="text-gray-300 hover:text-white transition-colors">
                    {route.label}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={onOpenModal} className="text-gray-300 hover:text-white transition-colors text-left">
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
              Contact & HQ
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Mohis Innovation Tower, Tech & Infrastructure Hub</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:contact@mohisdevelopers.com" className="hover:text-white">
                  contact@mohisdevelopers.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white font-mono">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Tagline Bar */}
      <div className="border-t border-white/10 bg-navy-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs font-bold uppercase tracking-widest text-gold">
            CONSTRUCTING TODAY | CONNECTING TECHNOLOGY | CREATING TOMORROW
          </div>
          <div className="text-xs text-gray-400 font-medium flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mohis Developers.</span>
            <span className="text-gold font-bold">Developed by eacyclic</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
