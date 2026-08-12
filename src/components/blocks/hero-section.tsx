'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { STATS_DATA } from '@/lib/data';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-mesh-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Startup Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-xs font-bold uppercase tracking-wider text-navy">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>2026 Tech-First Hybrid Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1]">
              Engineering Physical Foundations.{' '}
              <span className="text-gold-gradient block mt-1">Building Digital Futures.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-navy/80 leading-relaxed font-medium max-w-2xl">
              A modern hybrid developer bridging civil infrastructure and custom IT solutions. We build spaces you live in and software you scale on.
            </p>

            {/* Key Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-navy/90">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Civil & Residential Construction</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-navy/90">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Custom Software & Cloud Stack</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-navy/90">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Roads & Civil Infrastructure</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-navy/90">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>24/7 Managed IT Support</span>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 bg-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Free Consultation</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="px-8 py-4 bg-white border-2 border-navy/20 text-navy font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-navy/5 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual: Split Blueprint Architecture + Digital Mesh Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none pt-4 pb-4 px-3 sm:px-4">
              
              {/* Glass Visual Container */}
              <div className="relative rounded-3xl overflow-visible shadow-2xl border border-navy/15 bg-glass p-4 sm:p-6 backdrop-blur-xl">
                
                {/* Visual Graphic Canvas */}
                <div className="relative h-[360px] sm:h-[420px] rounded-2xl bg-navy overflow-hidden flex flex-col justify-between p-6">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#C5A059_1px,transparent_1px),linear-gradient(to_bottom,#C5A059_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Top Header Card Info */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>SYS: HYBRID_CORE_v2.6</span>
                    </div>
                    <div className="text-gold text-xs font-semibold uppercase tracking-widest">
                      Mohis Platform
                    </div>
                  </div>

                  {/* Dynamic Graphic SVG: Split Glass Building & Cloud Node Mesh */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <svg viewBox="0 0 300 200" className="w-full h-48 drop-shadow-2xl">
                      {/* Left: Glass Blueprint Building Wireframe */}
                      <g transform="translate(30, 20)">
                        <polygon points="40,10 90,30 90,150 40,130" fill="rgba(197, 160, 89, 0.15)" stroke="#C5A059" strokeWidth="2" />
                        <polygon points="40,10 0,30 0,130 40,130" fill="rgba(255, 255, 255, 0.05)" stroke="#FFFFFF" strokeWidth="2" />
                        <line x1="20" y1="40" x2="20" y2="120" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="65" y1="45" x2="65" y2="135" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="60" x2="90" y2="90" stroke="#C5A059" strokeWidth="1.5" opacity="0.7" />
                        <line x1="0" y1="90" x2="90" y2="120" stroke="#C5A059" strokeWidth="1.5" opacity="0.7" />
                      </g>

                      {/* Bridge Connection Pulse Lines */}
                      <path d="M 120 100 Q 150 70 180 90" fill="none" stroke="#C5A059" strokeWidth="3" strokeDasharray="4 4" className="animate-pulse" />
                      <path d="M 120 120 Q 150 150 180 120" fill="none" stroke="#60A5FA" strokeWidth="3" strokeDasharray="4 4" className="animate-pulse" />

                      {/* Right: Digital Cloud & Server Node Mesh */}
                      <g transform="translate(170, 20)">
                        <circle cx="50" cy="50" r="30" fill="rgba(0, 31, 63, 0.6)" stroke="#60A5FA" strokeWidth="2" />
                        <circle cx="50" cy="50" r="12" fill="#C5A059" />
                        
                        {/* Satellite Nodes */}
                        <circle cx="10" cy="20" r="7" fill="#38BDF8" />
                        <circle cx="90" cy="30" r="7" fill="#38BDF8" />
                        <circle cx="20" cy="110" r="7" fill="#C5A059" />
                        <circle cx="85" cy="100" r="7" fill="#38BDF8" />

                        {/* Node Connectors */}
                        <line x1="50" y1="50" x2="10" y2="20" stroke="#60A5FA" strokeWidth="1.5" />
                        <line x1="50" y1="50" x2="90" y2="30" stroke="#60A5FA" strokeWidth="1.5" />
                        <line x1="50" y1="50" x2="20" y2="110" stroke="#C5A059" strokeWidth="1.5" />
                        <line x1="50" y1="50" x2="85" y2="100" stroke="#60A5FA" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>

                  {/* Bottom Stats Floating Widget */}
                  <div className="relative z-10 flex items-center justify-between bg-navy-950/80 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gold/20 text-gold">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-300 font-medium">Domain Integration</div>
                        <div className="text-sm font-bold text-white">Physical + Digital Sync</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-gold text-navy">ACTIVE</span>
                  </div>
                </div>

                {/* Floating Badge 1 (Top Right) */}
                <div className="absolute -top-3 right-2 sm:right-4 z-20 bg-white border border-gold/40 shadow-2xl rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 animate-float">
                  <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                    2026
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy whitespace-nowrap">Certified Hybrid</div>
                    <div className="text-[10px] text-gray-500 font-medium whitespace-nowrap">Standards Compliant</div>
                  </div>
                </div>

                {/* Floating Badge 2 (Bottom Left) */}
                <div className="absolute -bottom-3 left-2 sm:left-4 z-20 bg-navy text-white border border-gold/30 shadow-2xl rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5">
                  <ShieldCheck className="w-7 h-7 text-gold flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold whitespace-nowrap">End-to-End Delivery</div>
                    <div className="text-[10px] text-gray-300 whitespace-nowrap">Zero Intermediaries</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-navy/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS_DATA.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="p-4 rounded-2xl bg-white/60 border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-navy">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
