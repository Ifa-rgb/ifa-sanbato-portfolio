import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const checkScroll = () => {
      // Appear when scrolled past the hero section (e.g. 450px)
      const scrolled = window.scrollY;
      const heroThreshold = 450;
      setIsVisible(scrolled > heroThreshold);

      // Calculate progress percentage for subtle circular indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percent = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
        setScrollPercent(percent);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label={t.common.scrollToTop}
            title={t.common.scrollToTop}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-card)]/90 backdrop-blur-md border border-cyan-500/40 text-cyan-400 hover:text-slate-950 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[var(--bg-canvas)]"
          >
            {/* Hover Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Subtle Circular Progress Track */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-cyan-500/20"
              />
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * scrollPercent) / 100}
                className="text-cyan-400 group-hover:text-slate-950 transition-all duration-150"
                strokeLinecap="round"
              />
            </svg>

            {/* Icon */}
            <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
