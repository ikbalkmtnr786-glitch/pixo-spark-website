import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { PageType } from './types';
import SplashLoader from './components/SplashLoader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AuditModal from './components/AuditModal';
import Footer from './components/Footer';

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Audit Modal States
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedAuditService, setSelectedAuditService] = useState<string>('');

  // Manage client-side metadata page title updates for custom SEO positioning
  useEffect(() => {
    let titleStr = 'Pixo Spark • AI-Powered Digital Marketing Agency';
    switch (currentPage) {
      case 'home':
        titleStr = 'Pixo Spark | "Ignite Your Brand" — AI-Powered Marketing Worldwide';
        break;
      case 'services':
        titleStr = 'Premium Marketing Services Sheet | Pixo Spark Agency';
        break;
      case 'portfolio':
        titleStr = 'Case Studies & Meta Ads Results | Pixo Spark Audit';
        break;
      case 'about':
        titleStr = 'About Founder Ikbal KM & Core AI Mission | Pixo Spark';
        break;
      case 'blog':
        titleStr = 'AI Marketing Blog & Conversion Secrets | Pixo Spark';
        break;
      case 'contact':
        titleStr = 'Free Audit Request - Contact Pixo Spark Globally';
        break;
    }
    document.title = titleStr;
  }, [currentPage]);

  // Monitor vertical height to display back-to-top buttons
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleOpenAudit = (serviceKey: string = '') => {
    setSelectedAuditService(serviceKey);
    setIsAuditOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render correct visual view in state context
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onOpenAudit={handleOpenAudit} />;
      case 'services':
        return <Services onOpenAudit={handleOpenAudit} />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} onOpenAudit={handleOpenAudit} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#080810] text-[#e2e8f0]">
      {/* 1. Loading Splash Screen */}
      {!isSplashComplete && (
        <SplashLoader onComplete={() => setIsSplashComplete(true)} />
      )}

      {/* Main content body (Only fade elements when splash is completed) */}
      {isSplashComplete && (
        <div className="flex flex-col min-h-screen relative">
          
          {/* 2. Global Sticky Header Menu */}
          <Navbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onOpenAudit={() => handleOpenAudit()}
          />

          {/* 3. Subpage Transition Stage */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {renderActiveView()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* 4. Global Footer block */}
          <Footer setCurrentPage={setCurrentPage} />

          {/* 5. Floating Bottom controls */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
            
            {/* Back to top button */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  id="back-to-top-floating-btn"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={handleScrollToTop}
                  className="rounded-full bg-gray-900 border border-gray-800 p-2.5 text-brand-orange hover:bg-gray-800 transition shadow-lg shadow-black/50"
                  title="Scroll to Top"
                >
                  <ArrowUp className="h-4.5 w-4.5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Permanent Floating WhatsApp channel */}
            <a
              id="permanent-floating-whatsapp-btn"
              href="https://wa.me/919061124162?text=Hello%20Pixo%20Spark!%20I%20visited%2520your%20agency%20website%20and%20would%20like%20to%20request%20a%20free%20ad%20campaign%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-black shadow-xl shadow-black/80 transition-transform duration-300 hover:scale-110 active:scale-95"
              title="Message on WhatsApp"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border border-brand-dark animate-ping" />
            </a>

          </div>

          {/* 6. Universal free campaign audit overlay modal */}
          <AuditModal
            isOpen={isAuditOpen}
            onClose={() => setIsAuditOpen(false)}
            preselectedService={selectedAuditService}
          />

        </div>
      )}
    </div>
  );
}
