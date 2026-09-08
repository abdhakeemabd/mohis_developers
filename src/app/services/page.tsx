'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { ServicesGrid } from '@/components/blocks/services-grid';
import { TechInfraShowcase } from '@/components/blocks/tech-infra-showcase';
import { Footer } from '@/components/blocks/footer';
import { DiscoveryModal } from '@/components/blocks/discovery-modal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <HeaderNav onOpenModal={handleOpenModal} />
      
      {/* Header Banner */}
      <div className="pt-28 pb-16 bg-navy text-white text-center relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-mesh-pattern opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-full inline-block border border-gold/30">
            Comprehensive Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Strategic Capabilities
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Bridging heavy civil structural engineering and modern enterprise digital solutions under one unified accountability model.
          </p>
        </div>
      </div>

      <ServicesGrid onOpenModal={handleOpenModal} />

      <TechInfraShowcase onOpenModal={handleOpenModal} />

      <Footer onOpenModal={handleOpenModal} />

      <DiscoveryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
