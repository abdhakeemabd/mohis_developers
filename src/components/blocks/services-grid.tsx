'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '@/lib/data';
import { ServiceItem } from '@/types';
import { 
  Home, 
  Building2, 
  Layers, 
  Code2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  X,
  Sparkles
} from 'lucide-react';

interface ServicesGridProps {
  onOpenModal: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon names to Lucide Icon components
  const renderIcon = (name: string) => {
    const props = { className: "w-7 h-7" };
    switch (name) {
      case 'Home': return <Home {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-navy text-xs font-bold uppercase tracking-wider">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            5 Strategic Offerings for Physical & Digital Scaling
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            From heavy structural engineering to high-performance web systems, Mohis Developers brings 2026 execution standards to every project.
          </p>
        </div>

        {/* 5 Cards Grid Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between border bg-[#001D38] border-[#0A2E52] hover:border-gold hover:shadow-[0_10px_40px_rgba(197,160,89,0.2)] text-white group"
            >
              <div>
                {/* Header Badge & Category Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full border border-gold/40 text-gold bg-gold/5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    {service.badgeText}
                  </span>
                  
                  <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-gold transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Sleek Gold Icon Container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-gold text-navy font-bold group-hover:scale-110 group-hover:bg-white group-hover:text-navy transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-extrabold tracking-tight mb-3 text-white group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 text-gray-300 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer Features & Trigger */}
              <div className="pt-5 border-t border-white/10 space-y-5">
                <ul className="space-y-2.5">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs font-semibold">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-gray-200">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all bg-[#0A2B4C] text-gold border border-gold/20 group-hover:bg-gold group-hover:text-navy group-hover:border-gold group-hover:shadow-md"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal Overlay for Selected Service */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-navy/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gold/40 p-6 sm:p-8 overflow-hidden my-8"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-navy/5 hover:bg-navy/10 text-navy transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-gold/20 text-navy font-bold text-xs uppercase tracking-widest border border-gold/30">
                    {selectedService.badgeText}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    {selectedService.category} Sector
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                  {selectedService.fullDesc}
                </p>

                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                  Key Scope & Technical Capabilities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-navy/5 border border-navy/10">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onOpenModal();
                    }}
                    className="px-6 py-2.5 bg-gold text-navy font-bold rounded-xl text-sm hover:bg-gold-light shadow-md"
                  >
                    Request Proposal for this Service
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
