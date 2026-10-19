import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for a refined reading experience without jitter
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[100] bg-slate-200/20 dark:bg-slate-900/30 pointer-events-none print:hidden overflow-hidden"
      role="progressbar"
      aria-label="Reading progress bar"
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left shadow-[0_0_12px_rgba(6,182,212,0.9)]"
        style={{ scaleX }}
      />
    </div>
  );
};
