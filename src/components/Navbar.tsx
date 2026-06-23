import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onOpenAudit: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenAudit }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height for progress and sticky navigation backgrounds
  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageType }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-brand-purple to-brand-orange origin-left transition-all duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        id="main-navigation-header"
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gray-900/50 bg-[#080810]/85 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="navbar-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange shadow-lg shadow-brand-purple/20 transition-all group-hover:rotate-6">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <span className="font-syne text-lg font-extrabold tracking-wide text-white group-hover:text-brand-orange transition-colors">
                  PIXO<span className="text-brand-purple">SPARK</span>
                </span>
                <span className="hidden sm:block text-[9px] font-mono tracking-widest text-gray-500 uppercase leading-none">
                  Ignite Your Brand
                </span>
              </div>
            </button>

            {/* Desktop Navigation Link Block */}
            <nav id="desktop-links" className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-syne text-sm font-semibold tracking-wide transition-colors duration-200 outline-none ${
                    currentPage === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTAs and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                id="header-audit-cta"
                onClick={onOpenAudit}
                className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-brand-purple to-brand-orange hover:from-white hover:to-orange-100 py-2 px-4 rounded-xl text-xs font-bold text-white hover:text-brand-dark shadow-md shadow-brand-purple/10 active:scale-95 transition-all"
              >
                <span>Free Audit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white md:hidden transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation-overlay"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-gray-900 bg-[#0d0d18]/96 backdrop-blur-lg overflow-hidden"
            >
              <div className="space-y-1.5 px-4 pt-3 pb-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full rounded-lg px-4 py-2.5 text-left font-syne text-sm font-bold tracking-wide transition-colors ${
                      currentPage === item.id
                        ? 'bg-brand-purple/15 text-white border-l-2 border-brand-orange'
                        : 'text-gray-400 hover:bg-gray-800/40 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-800 px-4">
                  <button
                    id="mobile-menu-audit-cta"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenAudit();
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-orange py-3 text-center rounded-xl text-sm font-bold text-white"
                  >
                    <span>Request Free Campaign Audit</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
