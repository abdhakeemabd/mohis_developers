'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, ShieldCheck, Cpu, Building2, Code2, CheckCircle2, Zap, ArrowRight, Activity } from 'lucide-react';
import { STATS_DATA } from '@/lib/data';
import work7 from '@/assets/work/7.webp';
import work15 from '@/assets/work/15.webp';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'physical' | 'digital'>('physical');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-navy-950 via-navy to-slate-950 text-white border-b border-gold/15">
      {/* Background Ambient Glows & Grid Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-mesh-dark opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Startup Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-xs font-extrabold uppercase tracking-widest text-gold shadow-gold-glow">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Engineering Physical Foundations.{' '}
              <span className="text-gold-gradient block mt-2">Building Digital Futures.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium max-w-2xl">
              A early-stage hybrid developer operating at the intersection of Physical Infrastructure (Civil, Homes, Roads) and Digital Solutions (Software, Web Apps, IT Support).
            </p>

            {/* Key Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-200 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Civil & Residential Construction</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-200 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Full-Stack Web & App Stack</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-200 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Roads & Civil Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-200 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Mobile Application Development</span>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Get In Touch With Our Team</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual: Interactive Dual-Domain Showcase Switcher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Visual Container */}
              <div className="relative rounded-3xl shadow-2xl border border-gold/30 bg-navy-900/90 p-5 backdrop-blur-xl space-y-4">
                
                {/* Domain Selector Tab Header */}
                <div className="flex items-center justify-between p-1.5 rounded-2xl bg-navy-950 border border-white/10">
                  <button
                    onClick={() => setActiveTab('physical')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                      activeTab === 'physical'
                        ? 'bg-gold text-navy shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Physical Domain</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('digital')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                      activeTab === 'digital'
                        ? 'bg-gold text-navy shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Digital Systems</span>
                  </button>
                </div>

                {/* Animated Interactive Graphic Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'physical' ? (
                    <motion.div
                      key="physical"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35 }}
                      className="relative h-[340px] sm:h-[380px] rounded-2xl overflow-hidden border border-gold/30 group"
                    >
                      <Image
                        src={work15}
                        alt="Physical Infrastructure Build"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy/50 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold/40 text-gold text-[10px] font-mono font-bold">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span>CIVIL_INFRA_2026</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-gold">
                          <span>Physical Construction</span>
                          <span className="text-[10px] font-mono text-gray-400">STATUS: ON-SITE</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-normal">
                          Turnkey residential estates, civil transit asphalt roadways, and heavy concrete structural framing.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="digital"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35 }}
                      className="relative h-[340px] sm:h-[380px] rounded-2xl bg-navy-950 p-6 border border-gold/30 flex flex-col justify-between overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:20px_20px]" />

                      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                          <Activity className="w-4 h-4 animate-pulse" />
                          <span>FULLSTACK_APP_SYSTEM</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/30">
                          eacyclic Stack
                        </span>
                      </div>

                      {/* Code / Architecture Telemetry Card */}
                      <div className="relative z-10 space-y-3 bg-navy-900/80 p-4 rounded-xl border border-white/10 font-mono text-xs text-gray-300">
                        <div className="text-gold font-bold">// Web & Software Architecture</div>
                        <div className="text-gray-400 text-[11px] space-y-1">
                          <div>Frontend: <span className="text-white">React 19, Next.js, Vite, Tailwind CSS</span></div>
                          <div>Backend: <span className="text-white">Django REST Framework, Python, DRF Auth</span></div>
                          <div>Database: <span className="text-white">PostgreSQL / Cloud Data Backup</span></div>
                        </div>
                      </div>

                      <div className="relative z-10 flex items-center justify-between p-3 rounded-xl bg-gold/10 border border-gold/30">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-gold" />
                          <span className="text-xs font-bold text-white">Mobile Apps & SEO Growth</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-gold bg-navy px-2 py-1 rounded">
                          99.99% SLA
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Bottom Badge */}
                <div className="flex items-center justify-between pt-2 text-xs font-semibold text-gray-400 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>Single Partner Accountability Engine</span>
                  </div>
                  <a href="/about" className="text-gold hover:underline text-[11px] font-bold">
                    Learn More →
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS_DATA.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all hover:bg-white/8"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gold">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-300 mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
