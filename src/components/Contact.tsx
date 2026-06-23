import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, Calendar, CheckCircle, Send, Globe, MessageSquare, Sparkles } from 'lucide-react';
import { AuditRequest } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<AuditRequest>({
    name: '',
    email: '',
    phone: '',
    service: 'meta-ads',
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

    // Form inputs checks
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your WhatsApp/Phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending data server-side
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'meta-ads',
      description: '',
    });
    setErrorMsg('');
  };

  const selectedServiceLabel = servicesList.find((s) => s.value === formData.service)?.label || formData.service;

  return (
    <div id="contact-view" className="relative w-full pt-28 pb-20">
      {/* Background Lights */}
      <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-purple/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-orange">GET IN TOUCH NOW</span>
          <h1 className="font-syne text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            We work with clients from anywhere in the world. Drop us your info and receive a comprehensive proposal outline within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Block: Direct contact info / Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-gray-900 bg-[#0d0d18]/40 p-6 md:p-8 space-y-6">
              
              <h3 className="font-syne text-xl font-bold text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-brand-purple" />
                Global Agency Hub
              </h3>
              
              <p className="text-xs text-gray-400 leading-relaxed">
                We operate worldwide. Virtual briefings and audits are scheduled effortlessly across any timezone using Zoom or Google Meet. Location is no barrier to scaling.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Contact Card 1 */}
                <a
                  id="direct-contact-whatsapp"
                  href="https://wa.me/919061124162?text=Hello%20Pixo%20Spark!%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-3 rounded-xl bg-black/40 border border-gray-900 hover:border-brand-purple/20 transition-all"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-medium text-gray-500 uppercase leading-none">WHATSAPP FAST LINE</p>
                    <p className="text-sm font-bold text-white mt-1 group-hover:text-brand-orange transition-colors">+91 90611 24162</p>
                    <p className="text-[10px] text-gray-400 mt-1">Tap to chat with Ikbal KM instantly.</p>
                  </div>
                </a>

                {/* Contact Card 2 */}
                <a
                  id="direct-contact-email"
                  href="mailto:pixospark@gmail.com"
                  className="group flex items-start gap-4 p-3 rounded-xl bg-black/40 border border-gray-900 hover:border-brand-purple/20 transition-all"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-medium text-gray-500 uppercase leading-none">EMAIL DESK</p>
                    <p className="text-sm font-bold text-white mt-1 group-hover:text-brand-orange transition-colors">pixospark@gmail.com</p>
                    <p className="text-[10px] text-gray-400 mt-1">Send us comprehensive brief pitches.</p>
                  </div>
                </a>

                {/* Info Card 3 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-black/40 border border-gray-900">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-medium text-gray-500 uppercase leading-none">WORKING HOURS</p>
                    <p className="text-sm font-bold text-white mt-1">Mon - Sat, 9:00 AM - 6:00 PM IST</p>
                    <p className="text-[10px] text-gray-400 mt-1">Google Meet bookings accepted daily.</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="rounded-xl border border-dashed border-gray-900 p-6 text-center">
              <span className="text-xs text-brand-orange font-bold font-syne">We Serve Clients Worldwide — Location is No Barrier</span>
            </div>
          </div>

          {/* Right Block: On-Page Audit Request questionnaire */}
          <div className="lg:col-span-7" id="contact-form-block">
            <div className="rounded-2xl border border-gray-900 bg-[#0d0d18]/45 p-6 md:p-8 shadow-2xl relative">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-brand-orange" />
                    <h3 className="font-syne text-lg font-bold text-white">Free Business Audit Proposal</h3>
                  </div>
                  
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Provide your key handles or website. Our founder will compile a personalized direct audit detailing conversion leaks.
                  </p>

                  {errorMsg && (
                    <div className="rounded-lg bg-red-950/40 border border-red-500/30 p-3 text-xs text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-gray-400 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ikbal KM"
                      className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-gray-400 mb-1">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="consultancy@company.com"
                        className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-gray-400 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 90611 24162"
                        className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple transition"
                      />
                    </div>
                  </div>

                  {/* Service Needed dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-medium text-gray-400 mb-1">
                      Service Demanded
                    </label>
                    <select
                      id="contact-service"
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

                  {/* Description */}
                  <div>
                    <label htmlFor="contact-desc" className="block text-xs font-medium text-gray-400 mb-1">
                      Describe your setup, target audience or URLs *
                    </label>
                    <textarea
                      id="contact-desc"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="My Instagram handle is @example. We sell eco-friendly decor and want to run Facebook lead campaigns in modern urban areas..."
                      className="w-full rounded-lg border border-gray-800 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple resize-none transition"
                    />
                  </div>

                  {/* Submit btn */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange py-3.5 px-4 text-center text-sm font-semibold text-white shadow-lg shadow-brand-purple/10 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Uploading Details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Free Audit Onboarding Form</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6 space-y-6"
                >
                  <div className="rounded-full bg-brand-purple/15 p-4 ring-4 ring-brand-purple/5 text-emerald-400">
                    <CheckCircle className="h-10 w-10" />
                  </div>

                  <div>
                    <h3 className="font-syne text-2xl font-bold text-white">Onboarding Active, {formData.name}!</h3>
                    <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your campaign details for <span className="text-white font-medium">{selectedServiceLabel}</span>. Our founder <span className="text-brand-orange font-bold">Ikbal KM</span> will personally draft your review sheet.
                    </p>
                  </div>

                  <div className="w-full rounded-xl bg-black/35 border border-gray-900 p-4 text-left space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 text-brand-purple flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-white">Google Meet Coordinator Engaged</h4>
                        <p className="text-[10px] text-gray-500">A virtual diary request matching your corporate email has been reserved.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
                    <a
                      id="contact-success-whatsapp-btn"
                      href={`https://wa.me/919061124162?text=Hello%20Pixo%20Spark!%20My%2520name%20is%20${encodeURIComponent(formData.name)}.%20I%20just%20submitted%20the%20onboarding%20form%20for%20${encodeURIComponent(selectedServiceLabel)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl bg-[#25D366] py-3 px-4 text-center text-xs font-bold text-black hover:scale-[1.01] active:scale-95 transition"
                    >
                      Instant WhatsApp Verification
                    </a>
                    
                    <button
                      id="contact-reset-form-btn"
                      onClick={handleReset}
                      className="flex-1 rounded-xl border border-gray-800 hover:border-gray-700 py-3 px-4 text-center text-xs font-medium text-gray-300 transition"
                    >
                      Submit Another Query
                    </button>
                  </div>

                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
