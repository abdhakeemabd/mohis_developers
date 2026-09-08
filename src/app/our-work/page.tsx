'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { OurWork } from '@/components/blocks/our-work';
import { Footer } from '@/components/blocks/footer';
import { DiscoveryModal } from '@/components/blocks/discovery-modal';

export default function OurWorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <HeaderNav onOpenModal={() => setIsModalOpen(true)} />
      <OurWork onOpenModal={() => setIsModalOpen(true)} isPage={true} />
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <DiscoveryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
