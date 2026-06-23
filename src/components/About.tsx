import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Cpu, Zap, Eye, Linkedin, Instagram } from 'lucide-react';

export default function About() {
  // Methodological 3 pillars
  const pillars = [
    {
      title: 'Computational Audience Mapping',
      desc: 'We map machine-learning segmentation behaviors and custom targeting arrays. We define customer cohorts before deploying a single Rupee of trial ad spend.',
      icon: Cpu,
      color: 'text-brand-purple bg-brand-purple/10'
    },
    {
      title: 'Hybrid Multi-Format Rendering',
      desc: 'We utilize state-of-the-art visual content helpers to create high-velocity graphic variants. Every asset is manually polished by specialist artists to enforce pristine branding values.',
      icon: Zap,
      color: 'text-brand-orange bg-brand-orange/10'
    },
    {
      title: 'Direct Leads Attribution',
      desc: 'No fake clicks. No ambiguous impression lists. We focus purely on hard verified WhatsApp replies, direct signups, and cost per lead (CPL) containment.',
      icon: Eye,
      color: 'text-violet-400 bg-violet-400/10'
    }
  ];

  return (
    <div id="about-view" className="relative w-full pt-28 pb-20">
      {/* Background Lights */}
      <div className="absolute top-1/4 left-10 -z-10 h-96 w-96 rounded-full bg-brand-purple/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 -z-10 h-96 w-96 rounded-full bg-brand-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Story Hero */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-20" id="about-hero">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-purple">THE PIXO SPARK ORIGIN</span>
            <h1 className="font-syne text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              The Story of Pixo Spark
            </h1>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Founded by <span className="text-brand-orange font-semibold">Ikbal KM</span>, Pixo Spark emerged from a vital realization: fast-growing businesses worldwide deserve enterprise-tier, data-backed marketing campaigns without the bloated overhead costs of traditional legacy media firms.
            </p>

            <blockquote className="border-l-4 border-brand-purple pl-4 italic text-sm text-gray-400">
              &ldquo;Based in the vibrant coastal town of Thanur, Kerala, India, we bridge local cost efficiencies with world-class, top-tier computational advertising frameworks to run campaigns that produce leads anywhere in the world.&rdquo;
            </blockquote>

            <p className="text-sm text-gray-300 leading-relaxed">
              Our core mission is straightforward: to bring high-converting Meta Ads, modern sleek React web interfaces, and high-retention video collateral to small, medium, and NRI businesses worldwide. We prove that premium result structures are reachable, budget-optimized, and fully transparent.
            </p>
          </div>

          {/* Founder Profile Card */}
          <div className="lg:col-span-5" id="founder-profile-card">
            <div className="relative rounded-2xl glass-panel p-6 shadow-2xl border border-brand-purple/20">
              <div className="absolute -top-10 right-4 h-20 w-20 rounded-full bg-gradient-to-tr from-brand-purple to-brand-orange p-1 shadow-lg flex items-center justify-center font-syne text-3xl font-extrabold text-white">
                IK
              </div>

              <div className="space-y-4 pt-4">
                <div>
                  <h3 className="font-syne text-xl font-bold text-white">Ikbal KM</h3>
                  <p className="text-xs font-mono text-brand-orange uppercase">FOUNDER • META ADS SPECIALIST</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Direct strategist and graphic design enthusiast. Ikbal manages campaign optimization frameworks, custom audience segment setups, and direct customer interactions for our agency clients globally.
                </p>

                <div className="border-t border-gray-900 pt-4 space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <MapPin className="h-4 w-4 text-brand-purple flex-shrink-0" />
                    <span>Thanur, Kerala, India (Remote Globals)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <Mail className="h-4 w-4 text-brand-orange flex-shrink-0" />
                    <a href="mailto:pixospark@gmail.com" className="hover:text-white transition">pixospark@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <Phone className="h-4 w-4 text-brand-purple flex-shrink-0" />
                    <a href="tel:+919061124162" className="hover:text-white transition">+91 90611 24162</a>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    id="founder-linkedin"
                    href="https://linkedin.com/in/ikbal-km-digital-marketing-executive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-950 text-gray-400 hover:text-white hover:bg-brand-purple/25 transition"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    id="founder-instagram"
                    href="https://instagram.com/pixospar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-950 text-gray-400 hover:text-white hover:bg-brand-orange/25 transition"
                    aria-label="Instagram profile"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pillars Methodology */}
        <section className="space-y-12" id="about-methodology">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-orange">METHODOLOGY CODES</span>
            <h2 className="font-syne text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Our 3 Pillars of AI Execution
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-400">
              We replace guesswork with structured automated testing loops and specialist oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-gray-900 bg-[#0c0c16]/40 p-6 flex flex-col items-start gap-4 transition-all hover:border-gray-800"
                >
                  <div className={`p-3 rounded-lg ${pillar.color}`}>
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-syne text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Global statement bar */}
        <section className="mt-20 rounded-3xl bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 border border-brand-purple/15 p-8 md:p-12 text-center" id="about-footprint">
          <Globe className="h-8 w-8 text-white mx-auto mb-4 animate-spin-slow" />
          <h3 className="font-syne text-2xl font-extrabold text-white">Global Reach • Remote Mastery</h3>
          <p className="mt-2 text-xs text-gray-400 max-w-xl mx-auto">
            From London and Dubai to local businesses scaling within Kerala, we manage campaigns remotely without friction. We leverage secure online work suites, real-time shared dashboards, and structured messaging apps.
          </p>
        </section>

      </div>
    </div>
  );
}
