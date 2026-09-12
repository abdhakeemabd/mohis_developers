'use client';

import React from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { OurWork } from '@/components/blocks/our-work';
import { Footer } from '@/components/blocks/footer';

export default function OurWorkPage() {
  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <HeaderNav />
      <OurWork isPage={true} />
      <Footer />
    </main>
  );
}
