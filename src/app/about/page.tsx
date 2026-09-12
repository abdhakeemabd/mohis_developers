'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { WhyMohis } from '@/components/blocks/why-mohis';
import { Footer } from '@/components/blocks/footer';
import { DiscoveryModal } from '@/components/blocks/discovery-modal';
import { TEAM_MEMBERS } from '@/lib/data';
import { ShieldCheck, Award, Building2, Cpu, CheckCircle2, ArrowRight, Mail, Phone, User, Briefcase, TrendingUp, UserCheck, Crown } from 'lucide-react';
import { InstagramIcon, FacebookIcon, UserPersonIcon } from '@/components/ui/social-icons';

export default function AboutPage() {
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
            Our Story & Vision
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About Mohis Developers
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Engineering Physical Foundations. Building Digital Futures.
          </p>
        </div>
      </div>

      {/* Company Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-navy px-3.5 py-1.5 rounded-full inline-block">
                Hybrid Developer Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Reinventing How Infrastructure & Tech Converge
              </h2>
              <p className="text-gray-600 text-base leading-relaxed font-medium">
                Traditional developers treat civil construction and IT setup as completely isolated phases — creating communication gaps, budget overruns, and delayed handoffs.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-medium">
                At Mohis Developers, we operate with a single unified accountability engine. From structural framing and road building to cloud deployment and managed IT services, our teams build spaces you live in and software you scale on.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-navy-50 border border-navy/10">
                  <div className="text-2xl font-extrabold text-navy mb-1">120+</div>
                  <div className="text-xs font-bold text-gray-600 uppercase">Projects Delivered</div>
                </div>
                <div className="p-4 rounded-2xl bg-gold/10 border border-gold/30">
                  <div className="text-2xl font-extrabold text-gold mb-1">2026</div>
                  <div className="text-xs font-bold text-navy uppercase">Engineering Standard</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-navy text-white border border-gold/30 space-y-4">
                <div className="p-3 rounded-2xl bg-navy-950 w-fit border border-gold/30">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white">Physical Construction</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Homes, residential luxury interiors, civil infrastructure, and heavy road transit builds engineered for generations.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-navy-950 text-white border border-gold/30 space-y-4">
                <div className="p-3 rounded-2xl bg-navy-900 w-fit border border-gold/30">
                  <Cpu className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white">Digital Systems</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Custom web apps, enterprise software, SEO digital marketing, and 24/7 managed IT support operations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Executive Board */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden border-t border-b border-gold/15">
        <div className="absolute inset-0 bg-mesh-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-full inline-block border border-gold/30">
              Leadership & Executive Governance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Meet Our Management Team
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              Guiding our physical infrastructure builds and digital software engineering with executive leadership and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group relative p-6 rounded-3xl bg-navy-900/90 border border-gold/20 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Experience */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/30">
                      {member.badge}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {member.experience.split(' ')[0]}
                    </span>
                  </div>

                  {/* Person Avatar Icon Frame */}
                  <div className="relative w-20 h-20 mx-auto my-3 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-navy-950 border-2 border-gold/40 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                      <UserPersonIcon className="w-12 h-12 text-gold group-hover:text-gold-light transition-colors" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-navy border border-gold text-gold font-bold text-[10px] flex items-center justify-center">
                      {member.avatarLetter}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-gold-light">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed pt-2 line-clamp-3 font-normal">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Team Social Media & Contact Link Icons */}
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-center flex-wrap gap-2.5">
                  <a
                    href={member.socials.instagram || "https://instagram.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${member.name} on Instagram`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-navy text-gold transition-all duration-200 border border-gold/20 flex items-center justify-center hover:scale-110"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.facebook || "https://facebook.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${member.name} on Facebook`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-navy text-gold transition-all duration-200 border border-gold/20 flex items-center justify-center hover:scale-110"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.email || "mailto:contact@mohisdevelopers.com"}
                    title={`Email ${member.name}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-navy text-gold transition-all duration-200 border border-gold/20 flex items-center justify-center hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.phone || "tel:+919876543210"}
                    title={`Call ${member.name}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-navy text-gold transition-all duration-200 border border-gold/20 flex items-center justify-center hover:scale-110"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Web Application Showcase (eacyclic) */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-full inline-block border border-gold/30">
              Web & App Development Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Full-Stack E-Commerce & Logistics Platform
            </h2>
            <p className="text-gold font-mono text-sm font-semibold">
              Project Case Study: eacyclic
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 border border-gold/30 shadow-2xl space-y-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-gray-400 font-bold mr-2">Tech Stack:</span>
              {['React 19', 'Vite 7', 'Django REST Framework', 'Python', 'PostgreSQL / SQLite', 'Tailwind CSS v4', 'Context API', 'Recharts', 'Framer Motion'].map((tech, idx) => (
                <span key={idx} className="bg-white/10 text-gold px-3 py-1 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-gray-300">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-base">✓</span>
                  <p><strong className="text-white">Full-Stack Enterprise Architecture:</strong> Architected customer-facing storefront and administrative control panel with lazy-loaded route splitting.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-base">✓</span>
                  <p><strong className="text-white">RESTful Backend APIs:</strong> Django & DRF backend handling Token Auth, catalog management, shopping carts, and order fulfillment workflows.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-base">✓</span>
                  <p><strong className="text-white">Modular State Management:</strong> React Context Providers (UserProvider, CartProvider, ProductProvider, AdminProvider) for seamless global state flow.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-base">✓</span>
                  <p><strong className="text-white">Admin BI Analytics Dashboard:</strong> Interactive visual charts (Recharts) tracking revenue, order volumes, inventory, and inquiry trends in real time.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-base">✓</span>
                  <p><strong className="text-white">Logistics & Delivery Tracking:</strong> End-to-end driver assignment, tracking number updates, estimated delivery calculation, and lifecycle sync.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-base">✓</span>
                  <p><strong className="text-white">SEO Best Practices:</strong> Integrated react-helmet-async for dynamic page metadata alongside automated backend sitemap generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mohis Advantage Section */}
      <WhyMohis onOpenModal={handleOpenModal} />

      <Footer onOpenModal={handleOpenModal} />

      <DiscoveryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
