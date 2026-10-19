import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { ScrollToTop } from './components/ScrollToTop';
import { SectionReveal } from './components/SectionReveal';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { MasterDossierModal } from './components/MasterDossierModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {  (
          <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans selection:bg-cyan-500 selection:text-slate-950 relative transition-colors duration-300">
            {/* Thin Reading Progress Bar at the very top of the screen */}
            <ReadingProgressBar />

            {/* Navigation Bar with Theme Toggle, Language Toggle, Print View & Reading Progress */}
            <Navbar
              onOpenCV={() => setIsCVOpen(true)}
              onOpenDossier={() => setIsDossierOpen(true)}
            />

            {/* Main Content Sections with Framer Motion Viewport Animations */}
            <main>
              {/* Hero Section */}
              <Hero
                onOpenCV={() => setIsCVOpen(true)}
                onOpenDossier={() => setIsDossierOpen(true)}
              />

            {/* About Me & Personal Info */}
            <SectionReveal>
              <About />
            </SectionReveal>

            {/* Skills Section */}
            <SectionReveal>
              <Skills />
            </SectionReveal>

            {/* Education Timeline */}
            <SectionReveal>
              <Education />
            </SectionReveal>

            {/* Projects Showcase */}
            <SectionReveal>
              <Projects />
            </SectionReveal>

            {/* Testimonials & Professional Endorsements */}
            <SectionReveal>
              <Testimonials />
            </SectionReveal>

            {/* Contact & Message Form */}
            <SectionReveal>
              <Contact />
            </SectionReveal>
          </main>

          {/* Footer */}
          <Footer
            onOpenCV={() => setIsCVOpen(true)}
          />

          {/* Interactive CV Preview & Download Modal */}
          <CVModal
            isOpen={isCVOpen}
            onClose={() => setIsCVOpen(false)}
          />

          {/* Master Dossier Modal: All Contents in One Place */}
          <MasterDossierModal
            isOpen={isDossierOpen}
            onClose={() => setIsDossierOpen(false)}
          />

          {/* Floating Scroll to Top Button */}
          <ScrollToTop />
        </div>
      )}
    </LanguageProvider>
  </ThemeProvider>
);
}
