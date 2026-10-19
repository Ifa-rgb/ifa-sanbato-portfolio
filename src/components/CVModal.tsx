import React from 'react';
import { personalInfo, skillsData, educationData, projectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, Printer, Download, MapPin, Mail, Phone, Globe, Briefcase, GraduationCap, Code } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToPrintView?: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, onSwitchToPrintView }) => {
  const { language, t } = useLanguage();
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadStandaloneHTML = () => {
    const cvHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IFA SANBATO - Curriculum Vitae</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #1e293b; max-width: 820px; margin: 40px auto; padding: 0 20px; }
    h1 { margin: 0; color: #0f172a; font-size: 28px; text-transform: uppercase; letter-spacing: 0.5px; }
    h2 { font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #0284c7; padding-bottom: 4px; margin-top: 24px; color: #0369a1; letter-spacing: 1px; }
    h3 { font-size: 16px; margin: 0 0 2px 0; color: #0f172a; }
    p { margin: 4px 0 8px 0; font-size: 13.5px; }
    .contact-bar { margin: 8px 0 20px 0; font-size: 13px; color: #475569; }
    .item { margin-bottom: 14px; }
    .sub { font-size: 12.5px; color: #64748b; font-weight: 500; }
    ul { margin: 4px 0 8px 18px; padding: 0; font-size: 13px; color: #334155; }
    li { margin-bottom: 3px; }
    .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 13px; }
  </style>
</head>
<body>
  <h1>${personalInfo.fullName}</h1>
  <div style="font-size: 16px; font-weight: 600; color: #0284c7; margin-top: 2px;">${personalInfo.title}</div>
  <div class="contact-bar">
    ${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email} | github.com/ifasanbato
  </div>

  <h2>Professional Summary & Objective</h2>
  <p>${personalInfo.careerObjective}</p>
  <p>${personalInfo.bio}</p>

  <h2>Education</h2>
  ${educationData
    .map(
      (e) => `
    <div class="item">
      <h3>${e.degree}</h3>
      <div class="sub">${e.institution} · ${e.location} (${e.period})</div>
      <p>${e.description}</p>
      <ul>
        ${e.achievements.map((a) => `<li>${a}</li>`).join('')}
      </ul>
    </div>
  `
    )
    .join('')}

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <div><strong>Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design</div>
    <div><strong>Backend & Database:</strong> PHP, MySQL Relational Modeling, Node.js, RESTful APIs, PDO Security</div>
    <div><strong>Core Competencies:</strong> Algorithmic Problem Solving, Git/GitHub, System Design Principles</div>
    <div><strong>Languages:</strong> Afan Oromo (Native), English (Professional), Amharic (Fluent)</div>
  </div>

  <h2>Featured Projects</h2>
  ${projectsData
    .map(
      (p) => `
    <div class="item">
      <h3>${p.title} — <span style="font-weight: normal; font-size: 13px; color: #475569;">${p.subtitle}</span></h3>
      <div class="sub">Technologies: ${p.technologies.join(', ')}</div>
      <p>${p.description}</p>
      <ul>
        ${p.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  `
    )
    .join('')}
</body>
</html>`;

    const blob = new Blob([cvHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'IFA_SANBATO_Curriculum_Vitae.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)] no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-wide uppercase font-mono">
              {t.cvModal.title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-[var(--border-subtle)] hover:border-cyan-500/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Print directly or save as PDF via system print dialog"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{t.cvModal.printButton}</span>
            </button>

            <button
              onClick={handleDownloadStandaloneHTML}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Download standalone HTML file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cvModal.downloadButton}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[var(--bg-card)] text-slate-800 dark:text-slate-200 print-container font-sans text-sm">
          {/* Header */}
          <div className="border-b border-[var(--border-subtle)] pb-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.fullName}
              </h1>
              <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-base mt-1">
                {personalInfo.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {personalInfo.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {personalInfo.email}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {personalInfo.phone}
                </span>
              </div>
            </div>
            {personalInfo.profileImage && (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-md bg-slate-900">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Section: Career Objective */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-mono tracking-wider text-cyan-700 dark:text-cyan-400 font-bold border-b border-[var(--border-subtle)] pb-1 mb-2">
              Career Objective & Executive Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Section: Technical Competencies */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-mono tracking-wider text-cyan-700 dark:text-cyan-400 font-bold border-b border-[var(--border-subtle)] pb-1 mb-2.5">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-slate-900 dark:text-white font-bold block mb-1">Frontend Engineering</span>
                <p className="text-slate-600 dark:text-slate-400">React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Component Architecture</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-slate-900 dark:text-white font-bold block mb-1">Backend & Database Readiness</span>
                <p className="text-slate-600 dark:text-slate-400">PHP, MySQL Relational Modeling, Node.js, RESTful API Design, PDO Security & Prepared Statements</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-slate-900 dark:text-white font-bold block mb-1">Engineering Fundamentals</span>
                <p className="text-slate-600 dark:text-slate-400">Algorithmic Problem Solving, Data Structures, Git Version Control, Debugging, Clean Code Discipline</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-slate-900 dark:text-white font-bold block mb-1">Languages Spoken</span>
                <p className="text-slate-600 dark:text-slate-400">Afan Oromo (Native), English (Professional Working), Amharic (Fluent)</p>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-mono tracking-wider text-cyan-700 dark:text-cyan-400 font-bold border-b border-[var(--border-subtle)] pb-1 mb-3">
              Education & Academic Background
            </h2>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{edu.degree}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">{edu.period} · {edu.location}</span>
                  </div>
                  <p className="text-cyan-700 dark:text-cyan-400 text-xs font-medium">{edu.institution}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div className="mb-4">
            <h2 className="text-xs uppercase font-mono tracking-wider text-cyan-700 dark:text-cyan-400 font-bold border-b border-[var(--border-subtle)] pb-1 mb-3">
              Featured Software Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj, pIdx) => (
                <div key={pIdx} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{proj.category}</span>
                  </div>
                  <p className="text-cyan-700 dark:text-cyan-400 text-xs">{proj.subtitle}</p>
                  <p className="text-slate-600 dark:text-slate-300">{proj.description}</p>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <strong className="text-slate-700 dark:text-slate-300">Stack:</strong> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
