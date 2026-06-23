import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, Share2, Palette, Film, Code, Sparkles, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenAudit: (serviceValue: string) => void;
}

export default function Services({ onOpenAudit }: ServicesProps) {
  // 6 services data
  const services: (ServiceItem & { icon: React.ComponentType<{ className?: string }> })[] = [
    {
      id: 'meta-ads',
      title: 'Meta Ads Management',
      shortDesc: 'Hyper-segmented Facebook & Instagram campaigns built on strict ROI and clean targeting.',
      longDesc: 'Stop wasting dollars on generic boosted posts. We build high-conversion funnels, custom lookalike audiences, and creative ad copies designed specifically to bypass modern ad-bias algorithm changes and yield measurable lead lists.',
      iconName: 'Megaphone',
      icon: Megaphone,
      deliverables: [
        'Strategic Competitor Funnel Audits',
        'Multi-stage Target Persona Mapping',
        'Custom Pixel & Conversion API Setup',
        'Complete Meta Ads Copywriting Drafts',
        'Weekly Performance Attribution Updates',
        'A/B Split Test Coordination'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      shortDesc: 'Unlock systematic organic scaling strategies and consistent visual positioning.',
      longDesc: 'Social growth is not about random daily posting—it is about authoritative industry positioning. We outline consistent, strategic layouts, custom voice guides, and profile optimization templates to trigger immediate engagement.',
      iconName: 'Share2',
      icon: Share2,
      deliverables: [
        'Full Brand Profile Visual Optimization',
        'Consistent 30-Day Content Calendar Sheets',
        'Niche Keyword & Metadata Blueprints',
        'Interactive Engagement Strategies',
        'Direct Instagram Inbound Lead Guidelines',
        'Core Audience Growth Analytics Reports'
      ]
    },
    {
      id: 'graphic-design',
      title: 'Poster & Graphic Design',
      shortDesc: 'AI-infused graphic layouts and modern, eye-catching ad designs.',
      longDesc: 'First impressions take less than 0.05 seconds. We deliver gorgeous, modern visual creatives and poster graphics by coupling advanced AI drafting speeds with rigorous, pixel-perfect manual refinement.',
      iconName: 'Palette',
      icon: Palette,
      deliverables: [
        'Premium High-Conversion Ad Creatives',
        'Interactive Event Poster Blueprints',
        'Sleek Identity Graphics & Logos',
        'Modern Typography Guides',
        'Client-Ready Story Presentation Assets',
        'Multi-Format Visual Deliverables (PNG, SVG, PDF)'
      ]
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      shortDesc: 'Immersive short-form edits, Reels, YT Shorts, and branded corporate trailers.',
      longDesc: 'The modern economy is powered by video hooks. We craft clean text typography cuts, immersive pacing layouts, and color-corrected footage designed to maximize retention rates on TikTok, Instagram, and YouTube.',
      iconName: 'Film',
      icon: Film,
      deliverables: [
        'High-Retention Short Format Splits (Reels/Shorts)',
        'Strategic CapCut/Premiere Audio Syncs',
        'Custom Style Subtitles & Overlays',
        'Branded Multi-Platform Video Cuts',
        'Sound Effect (SFX) Design Enhancements',
        'Color Tone Adjustments & Grading'
      ]
    },
    {
      id: 'website-creation',
      title: 'Website Creation',
      shortDesc: 'Stunning modern React and digital web portals crafted for maximum loading speeds.',
      longDesc: 'Lagging loads kill conversions. We build custom responsive web portfolios and SaaS landing pages using modern tech (Vite, React, Tailwind CSS) that load inside 400 milliseconds, presenting your business in absolute pristine style.',
      iconName: 'Code',
      icon: Code,
      deliverables: [
        'High-Speed React / Vite Architecture',
        'Complete Responsive Mobile Layout Adjustments',
        'Clean Component Block Design Patterns',
        'Search Engine Optimization (SEO) Metadata Tagging',
        'Interactive Scroll Progress Interfaces',
        'Secure Domain & Deployment Configurations'
      ]
    },
    {
      id: 'ai-strategy',
      title: 'AI Content Strategy',
      shortDesc: 'Bespoke corporate copywriting calendars, newsletters, and systematic captions.',
      longDesc: 'Leverage the speed of cutting-edge language engines without sacrificing human authority. We design specialized generative prompts, copy styles, and comprehensive multi-channel frameworks customized to your voice.',
      iconName: 'Sparkles',
      icon: Sparkles,
      deliverables: [
        'Custom Language Model (LLM) Tone Calibrations',
        'AI prompt kits matching your brand',
        'Interactive Sales Copy and captions',
        'Systematic cold outreach and newsletters',
        'SEO-targeted organic content schedules',
        'Asynchronous content distribution systems'
      ]
    }
  ];

  return (
    <div id="services-view" className="relative w-full pt-28 pb-20">
      {/* Background Halos */}
      <div className="absolute top-20 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-purple/5 blur-[120px]" />
      <div className="absolute bottom-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-purple">THE PIXO SPARK SERVICES</span>
          <h1 className="font-syne text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            AI-Enhanced Marketing Frameworks
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            We deliver result-oriented services globally. All strategies are customized and implemented remotely with absolute transparency.
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                id={`detailed-service-card-${service.id}`}
                className="relative overflow-hidden rounded-3xl border border-gray-900 bg-[#0d0d18]/50 p-6 md:p-10 shadow-xl"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 h-[3px] w-full left-0 bg-gradient-to-r ${isEven ? 'from-brand-purple to-violet-500' : 'from-brand-orange to-amber-500'}`} />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                  
                  {/* Left Metadata Pillar */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 ${isEven ? 'text-brand-purple' : 'text-brand-orange'}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <h3 className="font-syne text-2xl font-extrabold text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-gray-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {service.longDesc}
                    </p>

                    <button
                      id={`service-audit-btn-${service.id}`}
                      onClick={() => onOpenAudit(service.id)}
                      className={`inline-flex items-center gap-2 rounded-xl py-3 px-6 text-xs font-bold text-white transition-all shadow-md ${
                        isEven 
                          ? 'bg-brand-purple hover:bg-brand-purple/80 shadow-brand-purple/10' 
                          : 'bg-brand-orange hover:bg-brand-orange/80 shadow-brand-orange/10'
                      }`}
                    >
                      Request Free Audit & Proposal
                    </button>
                  </div>

                  {/* Right Deliverables Pillar */}
                  <div className="lg:col-span-7 bg-black/45 rounded-2xl border border-gray-800/80 p-6 md:p-8">
                    <h4 className="font-syne text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
                      Key Included Deliverables
                    </h4>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${isEven ? 'text-brand-purple' : 'text-brand-orange'}`} />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global disclaimer block */}
        <div className="mt-16 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 p-6 text-center max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 leading-relaxed">
            * Note: All service metrics are driven by Ikbal KM&apos;s Meta Ads blueprint system. Standard setup intervals take 3-5 business days depending on visual collateral limits. Virtual consultations are conducted worldwide via Google Meet (available 9am - 6pm IST).
          </p>
        </div>

      </div>
    </div>
  );
}
