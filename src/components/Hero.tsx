import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Phone,
  Code,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Briefcase,
  Printer,
  FolderDown,
  FileText
} from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
  onTogglePrintView?: () => void;
  onOpenDossier?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onTogglePrintView, onOpenDossier }) => {
  const { language, t } = useLanguage();

  const dynamicHighlights = [
    { label: t.hero.stats.expLabel, value: t.hero.stats.expValue },
    { label: t.hero.stats.projectsLabel, value: t.hero.stats.projectsValue },
    { label: t.hero.stats.techLabel, value: t.hero.stats.techValue },
    { label: t.hero.stats.locationLabel, value: t.hero.stats.locationValue },
    { label: t.hero.stats.educationLabel, value: t.hero.stats.educationValue },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic hierarchy with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Location & Status Tagline (Clean unboxed text) */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-cyan-700 dark:text-cyan-400 font-mono tracking-wide">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                {t.hero.location}
              </span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                {t.hero.statusBadge}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance leading-none">
                {personalInfo.fullName}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {t.hero.role}
              </h2>
            </div>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.intro}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                {t.hero.contactMe}
              </a>
              <button
                onClick={onOpenCV}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-800 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-white bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-950/40 dark:hover:bg-cyan-900/40 border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                {t.hero.downloadCV}
                </button>
            </div>

            {/* Social Links & Quick Contact Row */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[var(--border-subtle)] text-sm text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium">{t.hero.connect}</span>
              <a
                href={"https://github.com/Ifa-rgb"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={"https://t.me/@Son_of_Trinity7"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Telegram Profile"
              >
                <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Telegram</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Photo Frame with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group flex flex-col items-center">
              {/* Outer multi-color gradient blur aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-2xl opacity-35 dark:opacity-50 group-hover:opacity-85 transition duration-700 -z-10" />

              {/* Circular border wrapper with gradient glow */}
              <div className="p-2 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-2xl shadow-cyan-500/20">
                <div className="p-1 rounded-full bg-[var(--bg-canvas)]">
                  {/* Circular Image Container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-inner group">
                    <img
             src="/profile.jpg"
              alt="IFA SANBATO - Full-Stack Developer and Software Engineer"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 rounded-full"
     onError={(e) => {
    console.error("Profile image failed to load:", e.currentTarget.src);
  }}
   />

                    {/* Subtle internal vignette */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge below the circle */}
              <div className="mt-4 px-4 py-2 rounded-full bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {t.hero.availableBadge}
                </span>
                <span className="text-slate-400 dark:text-slate-600">·</span>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                  {language === 'om' ? 'Dembii, Itoophiyaa' : 'Dembi, Ethiopia'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5-Item Highlights Strip in a full-width row below the hero split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {dynamicHighlights.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm hover:border-cyan-500/40 transition-colors"
              >
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
