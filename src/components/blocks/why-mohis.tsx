'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ADVANTAGE_PILLARS } from '@/lib/data';
import { Cpu, Zap, Compass, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface WhyMohisProps {
  onOpenModal: () => void;
}

export const WhyMohis: React.FC<WhyMohisProps> = ({ onOpenModal }) => {
  const renderPillarIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-8 h-8 text-gold" />;
      case 'Zap': return <Zap className="w-8 h-8 text-gold" />;
      case 'Compass': return <Compass className="w-8 h-8 text-gold" />;
      default: return <Cpu className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <section id="why-mohis" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Circuit Pattern Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-800 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
            <span>The Mohis Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Early-Stage & Enterprise Teams Partner With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            Standard contractors isolate civil work from technology. We unify physical execution with modern tech stacks for maximum speed and lower risk.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-3xl bg-navy-900 border border-gold/25 p-8 flex flex-col justify-between hover:border-gold transition-all duration-300 shadow-2xl hover:shadow-gold/10"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-navy-950 border border-gold/30">
                    {renderPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white/10 text-gray-300">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <span className="text-xs font-extrabold uppercase tracking-widest text-gold block mb-1">
                  {pillar.subtitle}
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-normal mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Metrics Box */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                {pillar.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-navy-950/60 p-3 rounded-xl border border-white/5">
                    <div className="text-xl font-extrabold text-gold">{m.value}</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Traditional vs Mohis Comparison Banner */}
        <div className="mt-16 rounded-3xl bg-white text-navy p-8 sm:p-10 shadow-2xl border border-gold/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-navy px-3 py-1 rounded-full inline-block">
                Architectural & IT Integration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                One Accountability Engine. Zero Hand-off Gaps.
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Eliminate delays caused by miscommunication between structural teams and IT infrastructure installers. Mohis Developers owns the end-to-end outcome.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Traditional Model */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Traditional Approach</span>
                </div>
                <ul className="space-y-2 text-xs font-semibold text-gray-600">
                  <li className="flex items-center gap-2">✕ Fragmented contractors</li>
                  <li className="flex items-center gap-2">✕ Delayed network installations</li>
                  <li className="flex items-center gap-2">✕ Budget overruns from rework</li>
                </ul>
              </div>

              {/* Mohis Model */}
              <div className="p-5 rounded-2xl bg-navy text-white border border-gold/50 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mohis Startup Model</span>
                </div>
                <ul className="space-y-2 text-xs font-semibold text-gray-200">
                  <li className="flex items-center gap-2">✓ Unified Infra + Tech team</li>
                  <li className="flex items-center gap-2">✓ Pre-cabled IoT & Smart ready</li>
                  <li className="flex items-center gap-2">✓ Fixed sprint milestones</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
