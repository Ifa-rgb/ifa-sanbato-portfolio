import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Send, Mail, Phone, ArrowUp, FolderDown, Printer } from 'lucide-react';

interface FooterProps {
  onOpenCV: () => void;
  onTogglePrintView?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV, onTogglePrintView }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] py-12 text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold text-sm">
              IS
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white tracking-wide text-sm">
                {personalInfo.fullName}
              </p>
              <p className="text-cyan-700 dark:text-cyan-400 text-xs">{t.hero.role}</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenCV}
              className="text-cyan-700 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              {t.nav.downloadCV}
            </button>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.telegram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors shadow-sm"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-colors ml-2 cursor-pointer flex items-center gap-1.5"
              title={t.footer.backToTop}
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-medium hidden sm:inline">{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 dark:text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. {t.footer.rights}</p>
          <p className="flex items-center gap-1.5">
            <span>{t.footer.designedWith}</span>
            <span>·</span>
            <span>{language === 'om' ? 'Dembii, Oromiyaa, Itoophiyaa' : 'Dembi, Oromia, Ethiopia'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
