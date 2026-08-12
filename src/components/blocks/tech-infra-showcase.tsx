'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HardHat, Server, Check, ArrowRight, Cpu, Layers } from 'lucide-react';

interface TechInfraShowcaseProps {
  onOpenModal: () => void;
}

export const TechInfraShowcase: React.FC<TechInfraShowcaseProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'physical' | 'digital'>('physical');

  const physicalStack = [
    { title: 'Structural & Concrete', desc: 'C40/50 Grade Reinforced Concrete, Seismic Dampers, Post-tension Slabs' },
    { title: 'Roads & Transit Paving', desc: 'Heavy Duty Asphalt Paving, Geosynthetic Sub-grades, Storm Drainage' },
    { title: 'Green Eco Building', desc: 'LEED Certified Insulation, Solar Array Integration, Rainwater Harvesting' },
    { title: 'Commercial Build Quality', desc: 'Curtain Wall Glassing, Structural Steel Frames, Fire Suppression' },
  ];

  const digitalStack = [
    { title: 'Frontend & App Frameworks', desc: 'Next.js 15, React, TypeScript, Tailwind CSS, Native Mobile' },
    { title: 'Cloud & Microservices', desc: 'AWS Serverless, Docker Containers, PostgreSQL, Redis, Kubernetes' },
    { title: 'Security & Enterprise IT', desc: 'Zero-Trust Architecture, Fiber Cabling, Active Firewall Monitoring' },
    { title: 'AI & Automation', desc: 'Custom Workflow Engines, Real-Time Sensor Telemetry, IoT Analytics' },
  ];

  const currentStack = activeTab === 'physical' ? physicalStack : digitalStack;

  return (
    <section id="tech-infra" className="py-24 bg-mesh-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-navy text-xs font-bold uppercase tracking-wider">
            <span>Engineering Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Built On Modern Physical & Digital Frameworks
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Toggle between our civil engineering standards and custom software architecture.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-10 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-navy/10 border border-navy/15 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('physical')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'physical'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy/70 hover:text-navy hover:bg-white/40'
              }`}
            >
              <HardHat className="w-4 h-4 text-gold" />
              <span>Physical Infrastructure</span>
            </button>

            <button
              onClick={() => setActiveTab('digital')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'digital'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy/70 hover:text-navy hover:bg-white/40'
              }`}
            >
              <Server className="w-4 h-4 text-gold" />
              <span>Digital Tech Stack</span>
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentStack.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-navy/10 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/15 text-navy flex items-center justify-center flex-shrink-0 font-bold">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-navy">{item.title}</h4>
                <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-navy text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy/90 transition-all shadow-lg"
          >
            <span>Consult With Our Lead Engineers</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </button>
        </div>

      </div>
    </section>
  );
};
