import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, TrendingUp, DollarSign, Users, Award, ShieldCheck, Globe, Cpu, Zap, Headphones } from 'lucide-react';
import { PageType } from '../types';

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
  onOpenAudit: (service?: string) => void;
}

// Custom Counter component that increments from 0 to target
function AnimatedCounter({ endValue, duration = 1200, suffix = '', prefix = '' }: { endValue: number; duration?: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * endValue * 10) / 10);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(endValue);
      }
    };
    requestAnimationFrame(step);
  }, [endValue, duration]);

  return <span id="animated-stat-counter">{prefix}{value}{suffix}</span>;
}

export default function Home({ setCurrentPage, onOpenAudit }: HomeProps) {
  // Rotating Headlines list for Hero animation
  const headlines = [
    'Maximize Meta Ads Return',
    'AI-Scale Content Growth',
    'Modern Global Copywriting',
    'Aesthetic Graphic Designing',
    'High-Converting Websites',
  ];

  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <div id="home-view" className="relative w-full pt-20">
      {/* Background Halos */}
      <div className="absolute top-24 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-purple/10 blur-[130px] animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-orange/10 blur-[130px] animate-pulse" />

      {/* Hero Section */}
      <section id="hero-section" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 text-center lg:text-left">
          {/* Hero text metadata */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/5 px-4 py-1.5"
            >
              <Sparkles className="h-4 w-4 text-brand-orange" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-purple">
                Founded by Ikbal KM • Global Remote Service
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="font-syne text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-tight">
                We Ignite Brands to{' '}
                <div className="block h-16 sm:h-20 lg:h-24">
                  <motion.span
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="bg-gradient-to-r from-brand-purple via-brand-orange to-violet-400 bg-clip-text text-transparent inline-block"
                  >
                    {headlines[headlineIndex]}
                  </motion.span>
                </div>
              </h1>
              <p className="mx-auto lg:mx-0 max-w-xl text-base text-gray-400 sm:text-lg">
                &ldquo;AI-Powered Digital Marketing, Delivered Worldwide&rdquo;. We blend Meta ads high-converting machine algorithms with beautiful tailored visuals for brands who ready to skyrocket.
              </p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-primary-cta"
                onClick={() => onOpenAudit()}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-purple/20 transition-all hover:shadow-brand-orange/20 hover:scale-[1.02] active:scale-95"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                id="hero-secondary-cta"
                onClick={() => {
                  setCurrentPage('portfolio');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="w-full sm:w-auto rounded-xl border border-gray-800 bg-[#0d0d18]/40 hover:bg-gray-800/20 py-4 px-8 text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                View Case Studies
              </button>
            </motion.div>

            {/* Trust Badges Row */}
            <div className="pt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 border-t border-gray-900">
              <div className="flex flex-col items-center lg:items-start">
                <Globe className="h-5 w-5 text-brand-purple mb-1" />
                <span className="text-[11px] font-semibold text-gray-300">Worldwide Remote</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <TrendingUp className="h-5 w-5 text-brand-orange mb-1" />
                <span className="text-[11px] font-semibold text-gray-300">Real Results</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Cpu className="h-5 w-5 text-violet-400 mb-1" />
                <span className="text-[11px] font-semibold text-gray-300">AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Hero Visual side panel */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Main glass frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative w-full max-w-sm rounded-2xl glass-panel p-6 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-2 bg-gradient-to-r from-brand-purple to-brand-orange w-full" />
              
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">LIVE AGENCY INDEX</p>
                <div className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Founder Tag */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple/20 text-brand-purple">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-syne text-sm font-bold text-white">Ikbal KM</h4>
                    <p className="text-[10px] text-gray-400 leading-none">Meta Ads Specialist</p>
                  </div>
                </div>

                <blockquote className="border-l-2 border-brand-orange pl-3 text-xs italic text-gray-400">
                  &ldquo;We replace random digital ad spend with laser-targeted high-performance AI execution.&rdquo;
                </blockquote>

                {/* mini analytics state card */}
                <div className="rounded-xl bg-black/40 border border-gray-800/80 p-3 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono">META ADS ALGORITHM</span>
                    <p className="text-xs font-bold text-white">Engagement Peak</p>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">4.9%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metric counters section */}
      <section id="stats-section" className="border-y border-gray-950 bg-[#0d0d18]/45 relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            
            {/* Stat Item 1 */}
            <div className="text-center space-y-1.5" id="stat-leads">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">Lead Generation</span>
              <p className="font-syne text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                <AnimatedCounter endValue={5} suffix="+" />
              </p>
              <p className="text-xs font-medium text-gray-400">Validated Case Study Leads</p>
            </div>

            {/* Stat Item 2 */}
            <div className="text-center space-y-1.5" id="stat-cpl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-orange">Optimized Cost</span>
              <p className="font-syne text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                <AnimatedCounter endValue={30} prefix="₹" />
              </p>
              <p className="text-xs font-medium text-gray-400">Average Cost Per Lead (CPL)</p>
            </div>

            {/* Stat Item 3 */}
            <div className="text-center space-y-1.5" id="stat-engagement">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">Audience Interaction</span>
              <p className="font-syne text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                <AnimatedCounter endValue={4.9} suffix="%" />
              </p>
              <p className="text-xs font-medium text-gray-400">Peak Organic Engagement</p>
            </div>

            {/* Stat Item 4 */}
            <div className="text-center space-y-1.5" id="stat-reached">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-orange">Reach Capability</span>
              <p className="font-syne text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                <AnimatedCounter endValue={871} />
              </p>
              <p className="text-xs font-medium text-gray-400">Target Accounts Reached</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services preview section */}
      <section id="services-preview-section" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-syne text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Our Key AI-Driven Specialties
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            Engineered with deep client focus, powered by machine efficiency, and managed by real specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-800/80 bg-[#0d0d18]/40 p-6 flex flex-col justify-between transition-all hover:border-brand-purple/20 hover:scale-[1.01]">
            <div>
              <div className="mb-4 h-11 w-11 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-2">Meta Ads Management</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Hyper-segmented campaigns designed for Facebook and Instagram to drive immediate ROI.
              </p>
            </div>
            <button
              id="get-free-audit-ads-p"
              onClick={() => onOpenAudit('meta-ads')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-white transition"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-800/80 bg-[#0d0d18]/40 p-6 flex flex-col justify-between transition-all hover:border-brand-orange/20 hover:scale-[1.01]">
            <div>
              <div className="mb-4 h-11 w-11 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-2">Social Media Marketing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlock rapid organic reach, build consistent strategy blueprints, and establish deep client trust.
              </p>
            </div>
            <button
              id="get-free-audit-social-p"
              onClick={() => onOpenAudit('social-media')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-white transition"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-800/80 bg-[#0d0d18]/40 p-6 flex flex-col justify-between transition-all hover:border-brand-purple/20 hover:scale-[1.01]">
            <div>
              <div className="mb-4 h-11 w-11 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-2">Poster & Graphic Design</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                High-end modern brand posters and social media ad creatives. Styled for visual impact.
              </p>
            </div>
            <button
              id="get-free-audit-design-p"
              onClick={() => onOpenAudit('graphic-design')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-white transition"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-800/80 bg-[#0d0d18]/40 p-6 flex flex-col justify-between transition-all hover:border-brand-orange/20 hover:scale-[1.01]">
            <div>
              <div className="mb-4 h-11 w-11 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-2">Video Editing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Immersive video cuts, Instagram Reels, YouTube Shorts, and corporate brand presentations.
              </p>
            </div>
            <button
              id="get-free-audit-video-p"
              onClick={() => onOpenAudit('video-editing')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-white transition"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border border-gray-800/80 bg-[#0d0d18]/40 p-6 flex flex-col justify-between transition-all hover:border-brand-purple/20 hover:scale-[1.01]">
            <div>
              <div className="mb-4 h-11 w-11 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-2">Website Creation</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Ultra-fast, fully responsive modern React web portals optimized for pristine loading speeds.
              </p>
            </div>
            <button
              id="get-free-audit-web-p"
              onClick={() => onOpenAudit('website-creation')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-white transition"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl border border-gray-800/80 bg-[#0d0d18]/40 p-6 flex flex-col justify-between transition-all hover:border-brand-orange/20 hover:scale-[1.01]">
            <div>
              <div className="mb-4 h-11 w-11 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-2">AI Content Strategy</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Bespoke high-performance editorial copy, captions, and systematic multi-channel strategy.
              </p>
            </div>
            <button
              id="get-free-audit-ai-p"
              onClick={() => onOpenAudit('ai-content-strategy')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-white transition"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            id="view-all-services-link"
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-800 hover:border-gray-700 bg-black/40 hover:bg-black/80 px-6 py-3.5 text-sm font-bold text-white transition"
          >
            Explore Detailed Services Sheet
          </button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose-section" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-gray-950">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-orange">The Spark Advantage</span>
            <h2 className="mt-2 font-syne text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Why Global Brands Choose Pixo Spark
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              We operate globally without boundaries, backed by localized insights and AI precision. Distance is never a friction—our systems are fully remote and optimized for asynchronous client updates.
            </p>

            <div className="mt-8 space-y-6">
              {/* Feature Item */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-white">Absolute Transparency</h4>
                  <p className="text-xs text-gray-400">Zero artificial projections. We focus on lead-validated performance counters and real marketing attribution metrics.</p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-white">Advanced AI Workflows</h4>
                  <p className="text-xs text-gray-400">By pairing human specialist curation with computational poster frameworks, we accelerate draft delivery timelines by 300%.</p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-white">Constant Synchronized Communication</h4>
                  <p className="text-xs text-gray-400">Comprehensive virtual workspaces via Google Meet and responsive fast-lane WhatsApp updates, matching your local timezones.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-900/60 bg-[#0d0d18]/40 p-6 space-y-2 mt-4">
                <span className="font-mono text-[9px] font-bold text-brand-purple uppercase">Global Area</span>
                <h5 className="font-syne text-base font-bold text-white">World Service</h5>
                <p className="text-xs text-gray-400">Location is irrelevant. Real campaigns launched for global accounts seamlessly.</p>
              </div>
              <div className="rounded-2xl border border-gray-900/60 bg-[#0d0d18]/40 p-6 space-y-2">
                <span className="font-mono text-[9px] font-bold text-brand-orange uppercase">Ads Budget</span>
                <h5 className="font-syne text-base font-bold text-white">Hyper Optimized</h5>
                <p className="text-xs text-gray-400">Proven leads generated using ₹150 trial budgets. High-efficiency framework.</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl border border-gray-900/60 bg-[#0d0d18]/40 p-6 space-y-2">
                <span className="font-mono text-[9px] font-bold text-brand-orange uppercase">AI Core</span>
                <h5 className="font-syne text-base font-bold text-white">Smart Scaling</h5>
                <p className="text-xs text-gray-400">Machine generation with custom strategic human layers produces 10x output.</p>
              </div>
              <div className="rounded-2xl border border-gray-900/60 bg-[#0d0d18]/40 p-6 space-y-2">
                <span className="font-mono text-[9px] font-bold text-brand-purple uppercase">Focus</span>
                <h5 className="font-syne text-base font-bold text-white">Direct Leads</h5>
                <p className="text-xs text-gray-400">High-converting forms capturing true intent rather than passive clicks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free audit prompt CTA Section */}
      <section id="free-consultation-banner" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0e0c20] to-[#160d1b] border border-brand-purple/20 p-8 md:p-12 shadow-2xl text-center flex flex-col items-center">
          {/* Ambient graphics */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-brand-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-brand-purple/5 rounded-full blur-3xl" />

          <Sparkles className="h-8 w-8 text-brand-orange mb-4 animate-pulse" />
          <h2 className="font-syne text-2xl font-extrabold text-white md:text-4xl max-w-2xl leading-snug">
            Ready to Accelerate Your Direct Brand Reach Globally?
          </h2>
          <p className="mt-4 text-xs text-gray-400 max-w-lg leading-relaxed">
            Submit your current social handle, ad account history, or website links. Ikbal KM will draft a completely custom structured performance report. Completely Free.
          </p>
          
          <button
            id="audit-banner-trigger-btn"
            onClick={() => onOpenAudit()}
            className="mt-8 rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange hover:from-white hover:to-orange-100 py-4 px-8 text-sm font-bold text-white hover:text-brand-dark transition-all shadow-lg active:scale-95"
          >
            Claim Free Digital Audit Now
          </button>
        </div>
      </section>
    </div>
  );
}
