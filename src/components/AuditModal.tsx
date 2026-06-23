import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle, Calendar, MessageSquare } from 'lucide-react';
import { AuditRequest } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function AuditModal({ isOpen, onClose, preselectedService = '' }: AuditModalProps) {
  const [formData, setFormData] = useState<AuditRequest>({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'meta-ads',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    { value: 'meta-ads', label: 'Meta Ads Management' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'graphic-design', label: 'Poster & Graphic Design' },
    { value: 'video-editing', label: 'Video Editing (Reels/Shorts)' },
    { value: 'website-creation', label: 'Website Creation' },
    { value: 'ai-strategy', label: 'AI Content Strategy' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid business email.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your WhatsApp or Phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending data server-side
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleClose = () => {
    onClose();
    // Reset state after closure transition
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: preselectedService || 'meta-ads',
        description: '',
      });
      setErrorMsg('');
    }, 300);
  };

  const selectedServiceLabel = servicesList.find((s) => s.value === formData.service)?.label || formData.service;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#040409]/90 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-brand-purple/20 bg-[#0d0d18] p-6 md:p-8 shadow-2xl"
          >
            {/* Ambient glows inside modal */}
            <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-brand-orange/10 blur-2xl" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-orange animate-pulse" />
                <h3 className="font-syne text-xl font-bold text-white md:text-2xl">
                  {isSuccess ? 'Submission Received' : 'Accelerate Your Brand'}
                </h3>
              </div>
              <button
                id="close-modal-btn"
                onClick={handleClose}
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Switch */}
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-gray-400">
                  Request a <span className="text-brand-orange font-semibold">Free Audit</span> of your digital presence. No commitments, just actionable AI-powered marketing insights delivered directly to you.
                </p>

                {errorMsg && (
                  <div className="rounded-lg bg-red-950/40 border border-red-500/30 p-3 text-xs text-red-300">
                    {errorMsg}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="audit-name" className="block text-xs font-medium text-gray-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ikbal KM"
                    className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="audit-email" className="block text-xs font-medium text-gray-400 mb-1">
                      Business Email *
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="audit-phone" className="block text-xs font-medium text-gray-400 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="audit-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="audit-service" className="block text-xs font-medium text-gray-400 mb-1">
                    Select Core Service
                  </label>
                  <select
                    id="audit-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                  >
                    {servicesList.map((service) => (
                      <option key={service.value} value={service.value} className="bg-[#0c0c14] text-white">
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Brief description */}
                <div>
                  <label htmlFor="audit-description" className="block text-xs font-medium text-gray-400 mb-1">
                    Brief describe your current setup/goals (Optional)
                  </label>
                  <textarea
                    id="audit-description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="We want to run Meta Ads for our high-ticket service but don't know where to start..."
                    className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple resize-none transition"
                  />
                </div>

                {/* Button */}
                <button
                  id="submit-audit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange py-3 px-4 text-center text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition-all hover:scale-[1.02] hover:shadow-brand-orange/10 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Processing Setup...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Request & Setup Audit</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-4 space-y-5"
              >
                <div className="rounded-full bg-brand-purple/10 p-3 ring-4 ring-brand-purple/5">
                  <CheckCircle className="h-10 w-10 text-emerald-400" />
                </div>

                <div>
                  <h4 className="font-syne text-lg font-bold text-white">Wonderful Choice, {formData.name}!</h4>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    Your request for a free audit on <span className="text-white font-medium">{selectedServiceLabel}</span> has been processed. Our Meta Ads specialist, <span className="text-brand-orange font-semibold">Ikbal KM</span>, will review your details.
                  </p>
                </div>

                <div className="w-full rounded-xl border border-gray-800/80 bg-black/30 p-4 text-left space-y-3">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Next Immediate Actions</p>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-purple" />
                    <div>
                      <p className="text-xs font-semibold text-white">Google Meet Link Appended</p>
                      <p className="text-[11px] text-gray-400">Our calendar request is active. Check your email for coordinates.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                    <div>
                      <p className="text-xs font-semibold text-white">WhatsApp Fast Track Verified</p>
                      <p className="text-[11px] text-gray-400">We've registered {formData.phone} for swift live campaign drafts.</p>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2 pt-2 sm:flex-row">
                  <a
                    id="whatsapp-followup-cta"
                    href={`https://wa.me/919061124162?text=Hello%20Pixo%20Spark!%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20just%20submitted%20the%20free%20audit%20form%20for%20${encodeURIComponent(selectedServiceLabel)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-[#25D366] py-2.5 px-4 text-center text-xs font-bold text-black transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>Message on WhatsApp</span>
                  </a>
                  <button
                    id="finish-audit-btn"
                    onClick={handleClose}
                    className="flex-1 rounded-xl border border-gray-700 hover:border-gray-600 py-2.5 px-4 text-center text-xs font-medium text-gray-300 transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    Finish Setup
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
