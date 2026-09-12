'use client';

import React from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { HeroSection } from '@/components/blocks/hero-section';
import { ServicesGrid } from '@/components/blocks/services-grid';
import { ProjectEstimator } from '@/components/blocks/project-estimator';
import { OurWork } from '@/components/blocks/our-work';
import { WhyMohis } from '@/components/blocks/why-mohis';
import { TechInfraShowcase } from '@/components/blocks/tech-infra-showcase';
import { FAQSection } from '@/components/blocks/faq-section';
import { Footer } from '@/components/blocks/footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <HeaderNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid (4 Core Offerings) */}
      <ServicesGrid />

      {/* Interactive Solution & Delivery Estimator */}
      <ProjectEstimator />

      {/* Engineering & Technology Stack Showcase */}
      <TechInfraShowcase />

      {/* Our Work Portfolio Showcase */}
      <OurWork teaser />

      {/* Startup Advantage / Why Mohis */}
      <WhyMohis />

      {/* Interactive FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
