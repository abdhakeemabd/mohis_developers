'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Code2, Home, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Calculator } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenModal?: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = () => {
  const [selectedDomain, setSelectedDomain] = useState<'infrastructure' | 'digital'>('infrastructure');
  const [selectedService, setSelectedService] = useState<string>('homes');
  const [projectScale, setProjectScale] = useState<'startup' | 'mid' | 'enterprise'>('mid');

  const domainOptions = [
    {
      id: 'infrastructure',
      label: 'Physical Infrastructure',
      icon: Building2,
      services: [
        { id: 'homes', name: 'Custom Home Construction', estTime: '4 - 8 Months', standard: '2026 Eco-Structural Grade' },
        { id: 'roads', name: 'Roads & Civil Asphalt Infrastructure', estTime: '3 - 6 Months', standard: 'Heavy Asphalt Grade' },
        { id: 'civil', name: 'Commercial & Civil Structures', estTime: '6 - 12 Months', standard: 'Seismic Load Frame' },
      ]
    },
    {
      id: 'digital',
      label: 'Digital & Software Solutions',
      icon: Code2,
      services: [
        { id: 'webapp', name: 'Web Application & Platform Dev', estTime: '3 - 8 Weeks', standard: 'React 19, Next.js, Cloud Stack' },
        { id: 'mobileapp', name: 'Mobile Application Development', estTime: '4 - 10 Weeks', standard: 'iOS & Android Native / React Native' },
        { id: 'website', name: 'Corporate Website & SEO Growth', estTime: '2 - 4 Weeks', standard: 'Technical SEO & Mobile Responsive' },
      ]
    }
  ];

  const currentDomainObj = domainOptions.find(d => d.id === selectedDomain)!;
  const currentServiceObj = currentDomainObj.services.find(s => s.id === selectedService) || currentDomainObj.services[0];

  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 via-navy to-slate-900 text-white relative overflow-hidden border-t border-gold/15">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-mesh-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-extrabold uppercase tracking-widest">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Find Your Instant Solution & Delivery Timeline
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-medium">
            Select your project requirements below to see tailored execution standards, estimated timelines, and tech frameworks.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-navy-900/90 border border-gold/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          
          {/* Step 1: Select Domain */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-extrabold uppercase tracking-widest text-gold block">
              Step 1: Select Project Domain
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {domainOptions.map((domain) => {
                const Icon = domain.icon;
                const isSelected = selectedDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => {
                      setSelectedDomain(domain.id as any);
                      setSelectedService(domain.services[0].id);
                    }}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-4 transition-all duration-300 ${
                      isSelected
                        ? 'bg-gold text-navy font-bold border-gold shadow-lg shadow-gold/20'
                        : 'bg-white/5 border-white/10 text-white hover:border-gold/50 hover:bg-white/10'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-navy text-gold' : 'bg-navy-950 text-gold'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold">{domain.label}</div>
                      <div className={`text-xs ${isSelected ? 'text-navy/80' : 'text-gray-400'}`}>
                        {domain.services.length} Core Offerings
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Specific Service */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-extrabold uppercase tracking-widest text-gold block">
              Step 2: Choose Service Capability
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentDomainObj.services.map((svc) => {
                const isSelected = selectedService === svc.id;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                      isSelected
                        ? 'bg-navy-950 border-gold text-gold shadow-md'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-gold/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-gold' : 'bg-gray-500'}`} />
                      <span>{svc.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Project Scale */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-extrabold uppercase tracking-widest text-gold block">
              Step 3: Select Scope Scale
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'startup', label: 'Startup / Small' },
                { id: 'mid', label: 'Mid-Scale / Custom' },
                { id: 'enterprise', label: 'Enterprise / Heavy' },
              ].map((scale) => (
                <button
                  key={scale.id}
                  onClick={() => setProjectScale(scale.id as any)}
                  className={`py-3 px-2 rounded-xl text-xs font-extrabold text-center uppercase tracking-wider border transition-all ${
                    projectScale === scale.id
                      ? 'bg-gold/20 border-gold text-gold'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {scale.label}
                </button>
              ))}
            </div>
          </div>

          {/* Live Estimate Result Banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDomain}-${selectedService}-${projectScale}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-navy-950 border border-gold/40 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gold font-bold">
                    Estimated Timeline:
                  </span>
                  <div className="text-2xl font-extrabold text-white">
                    {currentServiceObj.estTime}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gold font-bold">
                    Engineering Standard:
                  </span>
                  <div className="text-sm font-extrabold text-gold-light">
                    {currentServiceObj.standard}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Turnkey Execution | Guaranteed Uptime SLA & Structural Warranty</span>
                </div>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gold text-navy font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-gold-light transition-all shadow-lg inline-flex items-center gap-2 group whitespace-nowrap"
                >
                  <span>Get Official Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
