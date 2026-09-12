'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { HeroSection } from '@/components/blocks/hero-section';
import { ServicesGrid } from '@/components/blocks/services-grid';
import { ProjectEstimator } from '@/components/blocks/project-estimator';
import { OurWork } from '@/components/blocks/our-work';
import { WhyMohis } from '@/components/blocks/why-mohis';
import { TechInfraShowcase } from '@/components/blocks/tech-infra-showcase';
import { FAQSection } from '@/components/blocks/faq-section';
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

      {/* Interactive Solution & Delivery Estimator */}
      <ProjectEstimator />

      {/* Engineering & Technology Stack Showcase */}
      <TechInfraShowcase onOpenModal={handleOpenModal} />

      {/* Our Work Portfolio Showcase */}
      <OurWork onOpenModal={handleOpenModal} teaser />

      {/* Startup Advantage / Why Mohis */}
      <WhyMohis onOpenModal={handleOpenModal} />

      {/* Interactive FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Discovery Modal */}
      <DiscoveryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
