import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Target, TrendingUp, Sparkles, Filter, Lock } from 'lucide-react';
import { CaseStudy } from '../types';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'meta-ads' | 'social' | 'design'>('all');

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'meta-ads', label: 'Meta Ads Campaigns' },
    { value: 'social', label: 'Social & Growth' },
    { value: 'design', label: 'Poster & Visual Design' }
  ];

  // Raw Case Studies matching prompt
  const caseStudies: CaseStudy[] = [
    {
      id: 'skill-hub',
      title: 'Meta Ads Auditing: Skill Hub Campaign',
      category: 'meta-ads',
      summary: 'Achieved high-value lead conversions with macro-optimized spend metrics.',
      bgColor: 'rgba(124, 58, 237, 0.1)',
      metrics: [
        { label: 'Total Budget Spend', value: '₹150' },
        { label: 'Validated Leads Captured', value: '5 Leads' },
        { label: 'Cost Per Lead (CPL)', value: '₹30' },
        { label: 'Conversion Rate', value: '3.3%' }
      ],
      description: 'A test-bed advertising matrix deployed for Skill Hub targeting professionals. By designing lightweight mobile-first lead forms and strict behavioral targeting, we validated the funnel at a remarkable ₹30 CPL.'
    },
    {
      id: 'ig-organic',
      title: 'Instagram Organic Evolution Engine',
      category: 'social',
      summary: 'Drove pristine organic community development without paid boosters.',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      metrics: [
        { label: 'Follower Growth', value: '0 to 171' },
        { label: 'Accounts Reached', value: '872 Accounts' },
        { label: 'Engagement Ratio', value: '4.9%' },
        { label: 'Video Plays', value: '1,420+' }
      ],
      description: 'Built a systematic, aesthetic grid layout centering structured video reels, specialized hooks, and high-contrast caption templates. Emphasized authentic personal branding which triggered immediate algorithms push.'
    },
    {
      id: 'prime-awards',
      title: 'Prime Business Awards 2026 Poster Layout',
      category: 'design',
      summary: 'Created pristine print and digital assets for high-tier corporate awards event.',
      bgColor: 'rgba(124, 58, 237, 0.1)',
      metrics: [
        { label: 'Assets Drafted', value: '14 High Resolution' },
        { label: 'Event Audience', value: '500+ Attendees' },
        { label: 'File Clarity', value: 'Vector-Accurate PDF' },
        { label: 'Lead Time', value: '48 Hours' }
      ],
      description: 'Bespoke event branding, certificates, and digital promo designs made for the Prime Business Awards 2026. Hand-painted details, deep dark backdrops, and gold foil typography vectoring for luxury styling.'
    },
    {
      id: 'ynes-digital',
      title: 'Ynes Digital Premium Brand Poster',
      category: 'design',
      summary: 'Modern Swiss-inspired branding flyer built with clean gradients.',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      metrics: [
        { label: 'Color Grid', value: 'Neomorphic Cool Tone' },
        { label: 'Format Deliverable', value: '4K Ultra PNG' },
        { label: 'Engagement Shift', value: '+14% Click CTR' }
      ],
      description: 'Highly precise, sleek design language engineered for Ynes Digital. Leveraged typography hierarchy and negative space to establish maximum authority and readability in crowded streams.'
    },
    {
      id: 'tet-skills',
      title: 'TET Skills Ad Creative Blueprint',
      category: 'design',
      summary: 'Engineered high-converting visual collateral for educational client.',
      bgColor: 'rgba(124, 58, 237, 0.1)',
      metrics: [
        { label: 'A/B Test Variants', value: '3 Concept Boards' },
        { label: 'Ad Relevance Score', value: '9.2 / 10' },
        { label: 'Organic CTR Lift', value: '+2.1% Absolute' }
      ],
      description: 'Dynamic visual assets tailored for TET Skills community ad groups. Utilizing color contrasts and explicit directions pointers to guide user eye-flow directly to lead-generation calls-to-action.'
    }
  ];

  const filteredStudies = selectedFilter === 'all'
    ? caseStudies
    : caseStudies.filter((study) => study.category === selectedFilter);

  return (
    <div id="portfolio-view" className="relative w-full pt-28 pb-20">
      {/* Background Lights */}
      <div className="absolute top-10 left-1/3 -z-10 h-80 w-80 rounded-full bg-brand-purple/5 blur-[100px]" />
      <div className="absolute bottom-10 right-1/3 -z-10 h-80 w-80 rounded-full bg-brand-orange/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-orange">CASE STUDIES PROOF</span>
          <h1 className="font-syne text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Verified Campaign Records
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            Real campaigns. Exact budgets. Transparent performance and conversion lists accomplished for global teams.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2" id="portfolio-filter-controls">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mr-2 uppercase tracking-wider">
            <Filter className="h-3.5 w-3.5 text-brand-purple" />
            <span>Filter Categories:</span>
          </div>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              id={`filter-btn-${option.value}`}
              onClick={() => setSelectedFilter(option.value as any)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold font-syne tracking-wide transition-all ${
                selectedFilter === option.value
                  ? 'bg-gradient-to-r from-brand-purple to-brand-orange text-white'
                  : 'bg-[#0d0d18] text-gray-400 hover:text-white border border-gray-900 hover:border-gray-800'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Interactive Case Studies Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                id={`portfolio-case-study-${study.id}`}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-900 bg-[#0c0c16]/50 p-6 md:p-8 hover:border-brand-purple/20 transition-all shadow-xl hover:shadow-brand-purple/5"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-brand-purple/10 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-brand-purple uppercase">
                      {study.category === 'meta-ads' ? 'Meta Ads Campaign' : study.category === 'social' ? 'Social Organic' : 'Poster & Visual Design'}
                    </span>
                    <Sparkles className="h-4 w-4 text-brand-orange animate-pulse" />
                  </div>

                  {/* Title */}
                  <h3 className="font-syne text-xl font-bold text-white mb-2">
                    {study.title}
                  </h3>

                  {/* Description text */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Metrics grid inside */}
                  <div className="grid grid-cols-2 gap-3 bg-black/40 rounded-xl p-4 border border-gray-900/60 mb-4">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider leading-none">
                          {metric.label}
                        </p>
                        <p className="text-sm font-bold text-[#fafafa] tracking-tight mt-1">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-brand-purple/25 via-brand-orange/25 to-transparent w-full rounded-full" />
              </motion.div>
            ))}

            {/* Locked placeholder slot indicating upcoming project logs */}
            {(selectedFilter === 'all' || selectedFilter === 'meta-ads') && (
              <motion.div
                id="case-study-locked-placeholder"
                className="rounded-2xl border border-dashed border-gray-800 bg-[#0d0d18]/10 p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="rounded-full bg-gray-900 p-3 text-gray-600 border border-gray-800">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-gray-400">Campaign Draft Pending</h4>
                  <p className="text-xs text-gray-500 max-w-xs mt-1">
                    Actively launching brand metrics for European SaaS and GCC e-commerce clients. Published monthly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global summary card */}
        <div className="mt-16 rounded-2xl glass-panel p-8 text-center max-w-3xl mx-auto border border-brand-orange/15">
          <h3 className="font-syne text-lg font-bold text-white mb-2">Want Results Like These For Your Business?</h3>
          <p className="text-xs text-gray-400 mb-6 max-w-xl mx-auto">
            We don&apos;t run trial-and-error budgets. We map proven audiences and execute ad styles customized directly to your unique customers. Let&apos;s map out your visual strategy today.
          </p>
          <button
            id="portfolio-cta-modal-trigger"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange py-3 px-6 text-xs font-bold text-white"
          >
            Claim Your Free Custom Campaign Plan
          </button>
        </div>

      </div>
    </div>
  );
}
