import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, skillsData, projectsData, educationData, testimonialsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, Copy, Check, Download, Printer, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

interface MasterDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterDossierModal: React.FC<MasterDossierModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAll = () => {
    fetch('/ALL_PORTFOLIO_CONTENTS.md')
      .then((res) => res.text())
      .then((text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      })
      .catch(() => {
        // Fallback text generator
        const summary = `${personalInfo.fullName} - ${personalInfo.title}\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}\n\nBIO:\n${personalInfo.bio}\n\nSKILLS:\n${skillsData.map((s) => `- ${s.name} (${s.category})`).join('\n')}\n\nPROJECTS:\n${projectsData.map((p) => `- ${p.title}: ${p.description}`).join('\n')}`;
        navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
  };

  const handleDownloadMd = () => {
    const link = document.createElement('a');
    link.href = '/ALL_PORTFOLIO_CONTENTS.md';
    link.download = 'IFA_SANBATO_PORTFOLIO_ALL_CONTENTS.md';
    link.click();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden text-[var(--text-primary)]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-canvas-subtle)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">
                  {language === 'om' ? 'Qabiyyee Hundaa Bakka Tokkotti' : 'Complete Portfolio in One Place'}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'om' ? 'Dossier Guutuu & Ragaalee IFA SANBATO' : 'Master Portfolio Dossier for Recruiters & Hiring Managers'}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAll}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                title="Copy entire portfolio text to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (language === 'om' ? 'Waraabameera!' : 'Copied!') : (language === 'om' ? 'Hundaa Waraabi' : 'Copy All')}</span>
              </button>

              <button
                onClick={handleDownloadMd}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--border-subtle)] hover:border-cyan-500/50 flex items-center gap-1.5 cursor-pointer transition-all hidden sm:flex"
                title="Download Master Markdown (.md) File"
              >
                <Download className="w-3.5 h-3.5 text-cyan-500" />
                <span>Markdown</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Body Containing All Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed divide-y divide-[var(--border-subtle)]">
            {/* 1. Candidate Bio & Details */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                1. Candidate Profile & Contact
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-semibold block text-slate-500">Full Name</span>
                  <p className="font-bold text-sm">{personalInfo.fullName}</p>
                </div>
                <div>
                  <span className="font-semibold block text-slate-500">Role</span>
                  <p className="font-bold text-sm">{personalInfo.title}</p>
                </div>
                <div>
                  <span className="font-semibold block text-slate-500">Location</span>
                  <p>{personalInfo.location}</p>
                </div>
                <div>
                  <span className="font-semibold block text-slate-500">Contact</span>
                  <p>{personalInfo.email} | {personalInfo.phone}</p>
                </div>
                <div>
                  <span className="font-semibold block text-slate-500">Availability</span>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">{personalInfo.availability}</p>
                </div>
                <div>
                  <span className="font-semibold block text-slate-500">Languages</span>
                  <p>{personalInfo.languages.map((l) => `${l.language} (${l.proficiency})`).join(', ')}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-canvas-subtle)] border border-[var(--border-subtle)] text-xs">
                <span className="font-bold block mb-1 text-slate-700 dark:text-slate-300">Executive Bio</span>
                <p>{personalInfo.bio}</p>
              </div>
            </div>

            {/* 2. Skills Matrix */}
            <div className="space-y-3 pt-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                2. Technical Competencies Matrix
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {skillsData.map((s) => (
                  <div key={s.name} className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold block">{s.name}</span>
                      <span className="text-[10px] text-slate-500">{s.category}</span>
                    </div>
                    <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">{s.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Featured Projects */}
            <div className="space-y-4 pt-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                3. Featured Deliverables & Case Studies
              </span>
              <div className="space-y-3">
                {projectsData.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-cyan-700 dark:text-cyan-400">{p.title}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">{p.category}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[10px] font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Education */}
            <div className="space-y-3 pt-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                4. Academic Education & Honors
              </span>
              <div className="space-y-2.5">
                {educationData.map((e) => (
                  <div key={e.degree} className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] text-xs">
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-sm">{e.degree}</span>
                      <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">{e.period}</span>
                    </div>
                    <p className="text-slate-500">{e.institution} — {e.location}</p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Endorsements */}
            <div className="space-y-3 pt-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                5. Professional Testimonials & Recommendations
              </span>
              <div className="space-y-3">
                {testimonialsData.map((t) => (
                  <div key={t.id} className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] text-xs space-y-1.5">
                    <div className="flex items-center justify-between font-bold">
                      <span>{t.name}</span>
                      <span className="text-amber-400">★★★★★</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{t.role} ({t.companyOrOrg})</p>
                    <p className="italic text-slate-600 dark:text-slate-300">"{t.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">
              {language === 'om' ? 'Faayilli kun odeeffannoo weebsaayitii guutuu qaba.' : 'This document contains all portfolio contents in one place.'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAll}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Full Content'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
