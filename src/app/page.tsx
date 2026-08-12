'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { HeroSection } from '@/components/blocks/hero-section';
import { ServicesGrid } from '@/components/blocks/services-grid';
import { WhyMohis } from '@/components/blocks/why-mohis';
import { TechInfraShowcase } from '@/components/blocks/tech-infra-showcase';
import { Footer } from '@/components/blocks/footer';
import { DiscoveryModal } from '@/components/blocks/discovery-modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <HeaderNav onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* Services Grid (5 Core Offerings) */}
      <ServicesGrid onOpenModal={handleOpenModal} />

      {/* Startup Advantage / Why Mohis */}
      <WhyMohis onOpenModal={handleOpenModal} />

      {/* Tech & Infrastructure Stack Showcase */}
      <TechInfraShowcase onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Book a Discovery Call Modal */}
      <DiscoveryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
