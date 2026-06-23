import { Sparkles, Linkedin, Instagram, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer id="main-application-footer" className="bg-[#040409] border-t border-gray-950 pt-16 pb-12 text-[#e2e8f0] relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-purple/5 to-transparent -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-orange">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-syne text-lg font-extrabold text-white">
                PIXO<span className="text-brand-purple">SPARK</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              &ldquo;Ignite Your Brand&rdquo;. World-class, AI-enhanced marketing agency founded by Ikbal KM. We deploy data-validated Meta Ads campaigns and modern creative assets for growth-minded clients globally.
            </p>

            <p className="text-[10px] font-mono text-gray-500">
              Founder Profile: Ikbal KM, Meta Ads Specialist & Digital Strategist
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-syne text-xs font-bold uppercase tracking-widest text-[#fafafa]">Agency Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button id="footer-link-home" onClick={() => handleNavClick('HOME')} className="hover:text-brand-orange transition">
                  Home Portal
                </button>
              </li>
              <li>
                <button id="footer-link-services" onClick={() => handleNavClick('SERVICES')} className="hover:text-brand-purple transition">
                  Detailed Services Sheet
                </button>
              </li>
              <li>
                <button id="footer-link-portfolio" onClick={() => handleNavClick('PORTFOLIO')} className="hover:text-brand-orange transition">
                  Case study reports
                </button>
              </li>
              <li>
                <button id="footer-link-about" onClick={() => handleNavClick('ABOUT')} className="hover:text-brand-purple transition">
                  About the Founders
                </button>
              </li>
              <li>
                <button id="footer-link-blog" onClick={() => handleNavClick('BLOG')} className="hover:text-brand-orange transition">
                  AI Marketing Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Groups */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-syne text-xs font-bold uppercase tracking-widest text-[#fafafa]">Target Audience</h4>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li>• Global SMBs & Startups</li>
              <li>• Kerala-Based Scale-Ups</li>
              <li>• International NRI Brands</li>
              <li>• Creative Creators</li>
              <li>• E-Commerce Stores</li>
            </ul>
          </div>

          {/* Col 4: Contacts List */}
          <div className="md:col-span-3 space-y-4 text-xs text-gray-400">
            <h4 className="font-syne text-xs font-bold uppercase tracking-widest text-[#fafafa]">Direct Desk</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-purple" />
                <span>Thanur, Kerala, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-orange animate-pulse" />
                <a href="mailto:pixospark@gmail.com" className="hover:text-white transition">pixospark@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-purple" />
                <a href="tel:+919061124162" className="hover:text-white transition">+91 90611 24162</a>
              </li>
            </ul>

            <div className="flex gap-3 pt-2">
              <a
                id="footer-social-linkedin"
                href="https://linkedin.com/in/ikbal-km-digital-marketing-executive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded bg-gray-950 text-gray-400 hover:text-white hover:bg-brand-purple/20 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                id="footer-social-instagram"
                href="https://instagram.com/pixospar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded bg-gray-950 text-gray-400 hover:text-white hover:bg-brand-orange/20 transition"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="border-t border-gray-900/60 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© {currentYear} Pixo Spark. All Rights Reserved. Delivered Globally.</p>
          <p className="mt-2 md:mt-0">Developed by Pixo Spark Web Wing • Authorized Remote Office</p>
        </div>

      </div>
    </footer>
  );
}
