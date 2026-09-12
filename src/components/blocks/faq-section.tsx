'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What makes Mohis Developers a hybrid developer?',
      a: 'Unlike traditional contractors who separate civil construction from technology setup, Mohis Developers operates with unified accountability for both physical infrastructure (homes, civil roads, structural builds) and digital systems (custom web apps, full-stack software platforms, 24/7 IT support).'
    },
    {
      q: 'Can I hire Mohis Developers strictly for Web & Software Development?',
      a: 'Yes! Our digital software division operates both as an integrated technology arm for physical buildings and as a standalone full-stack software development agency (e.g. e-commerce platforms, custom web applications, Django/React architectures, and SEO).'
    },
    {
      q: 'What standards do you follow for physical civil builds & home construction?',
      a: 'We engineer using 2026 eco-structural civil standards, heavy-duty C40/50 grade reinforced concrete, IoT-ready structured electrical wiring, and climate-resilient stormwater drainage systems.'
    },
    {
      q: 'How fast can a consultation or project quote be arranged?',
      a: 'You can reach our lead engineers immediately via our Contact page or phone lines (+91 98765 43210 / +91 97452 57040). We provide initial project proposals within 24–48 hours.'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-navy text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Got Questions? We Have Answers.
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-navy/10 bg-slate-50/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-navy text-base sm:text-lg hover:text-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`p-2 rounded-xl transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold text-navy' : 'bg-navy/5 text-navy'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-gray-600 font-medium leading-relaxed"
                    >
                      <div className="pt-2 border-t border-navy/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-navy hover:text-gold transition-colors"
          >
            <span>Have more questions? Talk to our experts</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
