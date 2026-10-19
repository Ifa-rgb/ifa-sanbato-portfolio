import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Globe, FolderDown, Printer, Contrast, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenDossier?: () => void;
  isPrintView?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV,onOpenDossier, isPrintView = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'education', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-lg shadow-black/10 dark:shadow-black/30'
          : 'bg-transparent border-b border-[var(--border-subtle)]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single text wordmark/brand element */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              IS
            </div>
            <span className="font-heading font-extrabold tracking-wide">
              IFA <span className="text-cyan-600 dark:text-cyan-400">SANBATO</span>
            </span>
          </a>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + Light/Dark mode toggle + Language toggle */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Afaan Oromoo' : 'Switch to English'}
              className="px-2.5 py-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold group"
              title={language === 'en' ? 'Gara Afaan Oromootti jijjiiri' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>{language === 'en' ? 'Afaan Oromoo' : 'English'}</span>
            </button>

            {/* White & Black Site Color Theme Selector */}
            <div
              className="flex items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-0.5 shadow-sm text-xs"
              role="group"
              aria-label="Site color theme selector"
            >
              <button
                onClick={() => setTheme('light')}
                className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Switch site to White color theme"
                aria-label="White theme"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.nav.themeWhite}</span>
              </button>

              <button
                onClick={() => setTheme('dark')}
                className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Switch site to Black color theme"
                aria-label="Black theme"
              >
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span>{t.nav.themeBlack}</span>
              </button>

              <button
                onClick={() => setTheme('monochrome')}
                className={`px-2 py-1 rounded-lg font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  theme === 'monochrome'
                    ? 'bg-white text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Switch site to Monochrome Black & White theme"
                aria-label="Black & White monochrome theme"
              >
                <Contrast className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{t.nav.themeMonochrome}</span>
              </button>
            </div>

            <button
              onClick={onOpenCV}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              {t.nav.downloadCV}
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 shadow-sm shadow-cyan-500/30 transition-all whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
            >
              {language === 'om' ? 'Na Qunnamaa' : 'Hire Me'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu controls (Language + Theme toggle + CV + Hamburger) */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Mobile quick language toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Afaan Oromoo' : 'Switch to English'}
              className="px-2 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold flex items-center gap-1"
              title={language === 'en' ? 'Afaan Oromoo' : 'English'}
            >
              <Globe className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>{language === 'en' ? 'OM' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle White / Black site theme"
              title="Toggle White / Black site theme"
              className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-slate-600 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : theme === 'monochrome' ? (
                <Contrast className="w-4 h-4 text-white" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={onOpenCV}
              className="px-2.5 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-500/40 rounded-lg whitespace-nowrap"
            >
              CV
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)] px-5 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            {/* Language Selector in drawer */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                {language === 'om' ? 'Afaan / Language' : 'Language / Afaan'}
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-700 dark:text-slate-200"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-500" />
                <span>{language === 'en' ? 'Afaan Oromoo' : 'English'}</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                {language === 'om' ? 'Halluu Weebsaayitii (Color Theme)' : 'Site Color Theme'}
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                <button
                  onClick={() => setTheme('light')}
                  className={`py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                    theme === 'light'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.nav.themeWhite}</span>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                    theme === 'dark'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                      : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{t.nav.themeBlack}</span>
                </button>
                <button
                  onClick={() => setTheme('monochrome')}
                  className={`py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                    theme === 'monochrome'
                      ? 'bg-white text-slate-950 font-bold shadow-xs'
                      : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Contrast className="w-3.5 h-3.5" />
                  <span>B&W</span>
                </button>
              </div>
            </div>
        <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-cyan-700 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              {t.nav.downloadCV}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-md shadow-cyan-500/20"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
