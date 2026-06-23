import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function SplashLoader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow exit transition to finish
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="splash-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080810] text-[#e2e8f0]"
        >
          {/* Glowing futuristic grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative flex flex-col items-center">
            {/* Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
              animate={{ scale: 1.1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-orange shadow-[0_0_40px_rgba(124,58,237,0.3)]"
            >
              <Sparkles className="h-10 w-10 text-white animate-pulse" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-orange opacity-40 blur-lg animate-pulse" />
            </motion.div>

            {/* Logo Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-syne text-4xl font-extrabold tracking-wider md:text-5xl">
                <span className="text-white">PIXO</span>{' '}
                <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
                  SPARK
                </span>
              </h1>
              <p className="mt-2 font-mono text-xs tracking-[0.3em] text-gray-400 uppercase">
                Ignite Your Brand
              </p>
            </motion.div>

            {/* Global Brand Indicator Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
              className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="mt-4 text-xs font-light text-gray-400 tracking-wider"
            >
              AI-Powered Marketing • Worldwide Reach
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
