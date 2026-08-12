'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, Building, Code } from 'lucide-react';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Hybrid (Infra + IT)',
    projectScope: '',
    preferredDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with Blur Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-md"
          />

          {/* Shadcn/UI Style Dialog Content with Spring Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gold/30 overflow-hidden my-8"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between bg-navy px-6 py-4 text-white border-b border-gold/20">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-bold">Book a Discovery Call</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy">Consultation Requested!</h4>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out to Mohis Developers. Our senior engineering advisor will review your project requirements and confirm the meeting time via email within 4 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); onClose(); }}
                    className="mt-4 px-6 py-2.5 bg-navy text-white rounded-xl font-semibold hover:bg-navy/90 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-600 font-medium">
                    Schedule a 30-minute strategic consultation with our Physical Infrastructure & Digital Engineering leads.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm text-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm text-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm text-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                        Primary Domain
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm text-navy bg-white"
                      >
                        <option value="Hybrid (Infra + IT)">Hybrid (Infrastructure + IT)</option>
                        <option value="Home & Civil Construction">Home & Civil Construction</option>
                        <option value="Roads & Transit Infrastructure">Roads & Transit Infrastructure</option>
                        <option value="Custom Software & IT Solutions">Custom Software & IT Solutions</option>
                        <option value="Managed IT Support & Security">Managed IT Support & Security</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                      Preferred Date & Time Slot
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm text-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1">
                      Brief Project Summary
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your upcoming build or software project goals..."
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm text-navy"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gold text-navy font-bold rounded-xl text-sm hover:bg-gold-light transition-all shadow-md hover:shadow-lg"
                    >
                      Confirm Discovery Call
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
