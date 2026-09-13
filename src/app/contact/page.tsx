'use client';

import React, { useState } from 'react';
import { HeaderNav } from '@/components/blocks/header-nav';
import { Footer } from '@/components/blocks/footer';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Home Construction',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <HeaderNav />

      {/* Header Banner */}
      <div className="pt-28 pb-16 bg-navy text-white text-center relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-mesh-pattern opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-full inline-block border border-gold/30">
            Let&apos;s Build Together
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact Mohis Developers
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Have a physical construction project or custom IT software initiative? Talk to our engineering specialists today.
          </p>
        </div>
      </div>

      {/* Contact Content Grid */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-navy px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Direct Inquiries
                </span>
                <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                  Get in Touch with Our Team
                </h2>
                <p className="text-gray-600 text-sm mt-2 font-medium">
                  We respond to all project inquiries within 24 business hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50 border border-navy/10">
                  <div className="p-3 rounded-xl bg-navy text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy">Corporate HQ & Innovation Hub</h4>
                    <p className="text-gray-600 text-xs mt-1">
                      Mohis Innovation Tower, Civil & Technology District, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50 border border-navy/10">
                  <div className="p-3 rounded-xl bg-navy text-gold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy">Email Us</h4>
                    <a href="mailto:contact@mohisdevelopers.com" className="text-gold font-semibold text-sm hover:underline">
                      contact@mohisdevelopers.com
                    </a>
                    <p className="text-gray-500 text-xs mt-0.5">For project specs & proposals</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50 border border-navy/10">
                  <div className="p-3 rounded-xl bg-navy text-gold">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy">Direct Phone & WhatsApp</h4>
                    <a href="tel:+919745257040" className="text-navy font-mono font-bold text-sm hover:text-gold block">
                      +91 97452 57040
                    </a>
                    <p className="text-gray-500 text-xs mt-0.5">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-navy rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-gold/30">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Your inquiry has been submitted. A Mohis Developers specialist will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-gold text-navy font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gold-light"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Project Inquiry Form</h3>
                    <p className="text-gray-300 text-xs mt-1">
                      Fill out the form below to request a callback or project consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 97452 57040"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Service Requirement
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-white focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="Home Construction">Home Construction & Interiors</option>
                      <option value="Road Infrastructure">Road & Infrastructure Engineering</option>
                      <option value="Web & Application Development">Web & Application Development</option>
                      <option value="Mobile App & Social Media">Mobile App & Social Media Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-light transition-all shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
