'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ZoomIn,
  Grid3x3,
  LayoutGrid,
  ArrowRight,
  Eye,
} from 'lucide-react';
import Fancybox from '@/components/ui/fancybox';
import { ImageWithSkeleton } from '@/components/ui/image-skeleton';

import work1 from '@/assets/work/1.webp';
import work2 from '@/assets/work/2.webp';
import work3 from '@/assets/work/3.webp';
import work4 from '@/assets/work/4.webp';
import work5 from '@/assets/work/5.webp';
import work6 from '@/assets/work/6.webp';
import work7 from '@/assets/work/7.webp';
import work8 from '@/assets/work/8.webp';
import work9 from '@/assets/work/9.webp';
import work10 from '@/assets/work/10.webp';
import work11 from '@/assets/work/11.webp';
import work12 from '@/assets/work/12.webp';
import work13 from '@/assets/work/13.webp';
import work14 from '@/assets/work/14.webp';
import work15 from '@/assets/work/15.webp';
import work16 from '@/assets/work/16.webp';
import work17 from '@/assets/work/17.webp';
import work18 from '@/assets/work/18.webp';
import work19 from '@/assets/work/19.webp';
import work20 from '@/assets/work/20.webp';
import work21 from '@/assets/work/21.webp';
import work22 from '@/assets/work/22.webp';
import { StaticImageData } from 'next/image';

// ─── Work Image Data ─────────────────────────────────────────────────────────

interface WorkImage {
  id: number;
  src: string | StaticImageData;
  alt: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'Civil' | 'All';
  span?: 'wide' | 'tall' | 'normal';
}

const WORK_IMAGES: WorkImage[] = [
  {
    id: 1,
    src: work1,
    alt: 'Modern Bedroom Interior Design with Platform Bed',
    title: 'Master Bedroom Suite',
    category: 'Interior',
    span: 'normal',
  },
  {
    id: 2,
    src: work2,
    alt: 'Luxury Interior Design Project',
    title: 'Luxury Living Space',
    category: 'Interior',
    span: 'wide',
  },
  {
    id: 3,
    src: work3,
    alt: 'Contemporary Interior Design',
    title: 'Contemporary Living Room',
    category: 'Interior',
    span: 'normal',
  },
  {
    id: 4,
    src: work4,
    alt: 'Modern Interior Architecture',
    title: 'Modern Hallway Design',
    category: 'Interior',
    span: 'tall',
  },
  {
    id: 5,
    src: work5,
    alt: 'Premium Wardrobe and Dresser Design',
    title: 'Premium Wardrobe Suite',
    category: 'Interior',
    span: 'wide',
  },
  {
    id: 6,
    src: work6,
    alt: 'Elegant Room Interior',
    title: 'Elegant Room Concept',
    category: 'Interior',
    span: 'tall',
  },
  {
    id: 7,
    src: work7,
    alt: 'Civil Structure Construction',
    title: 'Civil Structure Build',
    category: 'Civil',
    span: 'wide',
  },
  {
    id: 8,
    src: work8,
    alt: 'Road Infrastructure Project',
    title: 'Infrastructure Development',
    category: 'Civil',
    span: 'normal',
  },
  {
    id: 9,
    src: work9,
    alt: 'Large Scale Construction',
    title: 'Large-Scale Build',
    category: 'Civil',
    span: 'wide',
  },
  {
    id: 10,
    src: work10,
    alt: 'Modern Dining Area with Marble Table',
    title: 'Dining Area Design',
    category: 'Interior',
    span: 'normal',
  },
  {
    id: 11,
    src: work11,
    alt: 'Residential Exterior',
    title: 'Residential Exterior',
    category: 'Exterior',
    span: 'wide',
  },
  {
    id: 12,
    src: work12,
    alt: 'Modern Home Exterior',
    title: 'Modern Facade Design',
    category: 'Exterior',
    span: 'normal',
  },
  {
    id: 13,
    src: work13,
    alt: 'Luxury Villa Exterior Design',
    title: 'Luxury Villa Exterior',
    category: 'Exterior',
    span: 'normal',
  },
  {
    id: 14,
    src: work14,
    alt: 'Premium House Build',
    title: 'Premium House Build',
    category: 'Exterior',
    span: 'tall',
  },
  {
    id: 15,
    src: work15,
    alt: 'Beautiful Home with Garden - Kerala Style Architecture',
    title: 'Kerala-Style Residence',
    category: 'Exterior',
    span: 'wide',
  },
  {
    id: 16,
    src: work16,
    alt: 'Modern Exterior Architecture',
    title: 'Contemporary Facade',
    category: 'Exterior',
    span: 'normal',
  },
  {
    id: 17,
    src: work17,
    alt: 'Interior Design Details',
    title: 'Interior Finishing',
    category: 'Interior',
    span: 'normal',
  },
  {
    id: 18,
    src: work18,
    alt: 'Architectural Interior Details',
    title: 'Architectural Details',
    category: 'Interior',
    span: 'normal',
  },
  {
    id: 19,
    src: work19,
    alt: 'Luxury Master Bedroom with Sage Accents',
    title: 'Luxury Master Bedroom',
    category: 'Interior',
    span: 'wide',
  },
  {
    id: 20,
    src: work20,
    alt: 'Bespoke Executive Interior Project',
    title: 'Executive Interior Design',
    category: 'Interior',
    span: 'wide',
  },
  {
    id: 21,
    src: work21,
    alt: 'Modern Architectural Elevation & Exterior',
    title: 'Modern Architectural Villa',
    category: 'Exterior',
    span: 'wide',
  },
  {
    id: 22,
    src: work22,
    alt: 'Contemporary Residential Build Showcase',
    title: 'Contemporary Architectural Residence',
    category: 'Exterior',
    span: 'wide',
  },
];

const CATEGORIES = ['All', 'Interior', 'Exterior', 'Civil'] as const;
type Category = (typeof CATEGORIES)[number];



// ─── Our Work Section ─────────────────────────────────────────────────────────

interface OurWorkProps {
  onOpenModal?: () => void;
  isPage?: boolean;
  teaser?: boolean; // if true, show first 6 images only (for landing page)
}

export const OurWork: React.FC<OurWorkProps> = ({ onOpenModal, isPage = false, teaser = false }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');

  const filtered = activeCategory === 'All'
    ? WORK_IMAGES
    : WORK_IMAGES.filter((img) => img.category === activeCategory);

  // Teaser mode: show only first 6 images
  const displayImages = teaser ? filtered.slice(0, 6) : filtered;

  return (
    <section
      id="our-work"
      className={`relative ${isPage ? 'pt-32 pb-24' : 'py-24'} bg-navy overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Portfolio & Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our{' '}
            <span
              className="text-gold-gradient"
              style={{
                background: 'linear-gradient(135deg, #C5A059 0%, #E5C378 50%, #A47F3B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Completed Work
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
            Every project tells a story of precision craftsmanship. From luxurious interiors to monumental civil structures — explore our delivered milestones.
          </p>
        </motion.div>

        {/* Filter Bar + View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold text-navy shadow-lg shadow-gold/25'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-gold/40 hover:text-gold hover:bg-gold/5'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-2 text-[10px] opacity-70">({WORK_IMAGES.length})</span>
                )}
                {cat !== 'All' && (
                  <span className="ml-2 text-[10px] opacity-70">
                    ({WORK_IMAGES.filter((i) => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'masonry' ? 'bg-gold text-navy' : 'text-gray-400 hover:text-white'
              }`}
              title="Masonry Layout"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-gold text-navy' : 'text-gray-400 hover:text-white'
              }`}
              title="Grid Layout"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${viewMode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className={
                viewMode === 'masonry'
                  ? 'columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4'
                  : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'
              }
            >
              {displayImages.map((img, idx) => {
                const imageSrc = typeof img.src === 'string' ? img.src : img.src.src;
                return (
                  <motion.a
                    key={img.id}
                    href={imageSrc}
                    data-fancybox="gallery"
                    data-caption={img.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.07 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-500 block ${
                    viewMode === 'masonry' ? 'break-inside-avoid mb-4' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === 'grid' ? 'aspect-square' : ''
                    }`}
                  >
                    <ImageWithSkeleton
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        viewMode === 'masonry' ? 'h-auto' : 'h-full'
                      }`}
                      wrapperClassName={viewMode === 'grid' ? 'h-full w-full' : 'w-full'}
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      priority={idx < 3}
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4">
                      <div className="w-full">
                        <span className="text-gold text-[10px] font-extrabold uppercase tracking-widest block mb-1">
                          {img.category}
                        </span>
                        <h4 className="text-white font-bold text-sm leading-tight">
                          {img.title}
                        </h4>
                      </div>
                      {/* Zoom Icon */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 flex items-center justify-center text-navy shadow-lg transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-navy/70 backdrop-blur-sm text-gold text-[10px] font-mono font-bold border border-gold/20">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.a>
              );
            })}
            </motion.div>
          </AnimatePresence>
        </Fancybox>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '120+', label: 'Projects Delivered' },
            { value: '19+', label: 'Portfolio Showcases' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '2026', label: 'Latest Standards' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 text-center transition-all hover:bg-white/8"
            >
              <div className="text-3xl font-extrabold text-gold mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA at Bottom */}
        {onOpenModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 text-center space-y-5"
          >
            <p className="text-gray-400 text-base font-medium">
              Inspired by our work? Let&apos;s build your next masterpiece together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              {!isPage && (
                <a
                  href="/our-work"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/20 hover:border-gold/50 hover:bg-white/10 transition-all group"
                >
                  <Eye className="w-4 h-4" />
                  <span>View All Our Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>

    </section>
  );
};
