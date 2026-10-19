import React, { useState } from 'react';
import {
  personalInfo,
  skillsData,
  educationData,
  projectsData,
  testimonialsData,
} from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Globe,
  CheckCircle2,
  Star,
  FileText,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface PrintViewProps {
  onExit: () => void;
}

export const PrintView: React.FC<PrintViewProps> = ({ onExit }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isCompact, setIsCompact] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 print:bg-white print:text-slate-950 font-sans">
      {/* Recruiter Floating Top Action Bar (HIDDEN during print) */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 px-4 py-3 shadow-xl print:hidden">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left Title & Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title={t.printView.exitBtn}
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>{t.printView.exitBtn}</span>
            </button>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h1 className="text-sm font-bold tracking-tight text-white">
                  {t.printView.toolbarTitle}
                </h1>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  A4 / Letter Ready
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t.printView.toolbarSubtitle}
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Mode: Compact vs Comprehensive */}
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setIsCompact(false)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  !isCompact
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.printView.fullMode}
              </button>
              <button
                onClick={() => setIsCompact(true)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  isCompact
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.printView.compactMode}
              </button>
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title={language === 'en' ? 'Gara Afaan Oromootti jijjiiri' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'en' ? 'Afaan Oromoo' : 'English'}</span>
            </button>

            {/* Primary Print / Save as PDF Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/30 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printView.savePdfBtn}</span>
            </button>
          </div>
        </div>

        {/* Tip Strip */}
        <div className="max-w-5xl mx-auto mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>{t.printView.printHint}</span>
          <span className="hidden sm:inline-block text-slate-500">
            {t.printView.recruiterNote}
          </span>
        </div>
      </div>

      {/* Main Document Body (A4/Letter Sheet Style) */}
      <main className="py-8 sm:py-12 px-3 sm:px-6 print:py-0 print:px-0">
        <article className="max-w-[850px] mx-auto bg-white text-slate-900 border border-slate-300 print:border-none shadow-2xl print:shadow-none rounded-2xl print:rounded-none p-8 sm:p-12 print:p-6 space-y-8">
          {/* Document Header */}
          <header className="border-b-2 border-slate-900 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-700 uppercase">
                  {language === 'om' ? 'Sanada Porotofooliyoo Injinariingii' : 'Engineering Portfolio & Professional Profile'}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1 uppercase">
                  {personalInfo.fullName}
                </h1>
                <p className="text-base font-semibold text-slate-700 mt-1">
                  {language === 'om'
                    ? 'Misoomsaa Weebii Guutuu & Injinara Sooftiweerii'
                    : personalInfo.title}
                </p>
                <p className="text-xs font-mono text-cyan-800 mt-0.5">
                  React · Modern JavaScript (ES6+) · PHP · MySQL · RESTful APIs
                </p>
              </div>

              {/* Status / Availability Pill */}
              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 print:border-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  {language === 'om' ? 'Hojiif Qophii (Available)' : 'Available for Hire'}
                </span>
                <div className="text-[11px] text-slate-500 font-mono mt-1.5">
                  Full-Time · Remote · Contract
                </div>
              </div>
            </div>

            {/* Contact & Professional Coordinates Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline truncate">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/ifasanbato
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/ifasanbato
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <span>t.me/ifasanbato</span>
              </div>
            </div>
          </header>

          {/* Section 1: Executive Summary */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-700" />
              {t.printView.executiveSummary}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {language === 'om'
                ? 'Iffaa Sanbatoo injinara sooftiweerii fi misoomsaa weebii kutannoo qabuu yoo ta\'u, weebsaayitootaa fi appilikeeshinoota ammayyaa, saffisaa fi si\'aawaa ta\'an React, JavaScript (ES6+), PHP fi MySQL fayyadamee ijaara. Dandeettii rakkoolee qabatamaa furuu, qulqullina koodii eeguu fi muuxannoo fayyadamaa ammayyeessuu irratti muuxannoo qabatamaa qaba. Qonnaa ammayyeessuu irraa hanga sirna bulchiinsa manneen barnootaatti pirojektoota bu\'a-qabeessa ta\'an qopheesseera.'
                : 'Dedicated Software Engineer and Full-Stack Web Developer specializing in building high-performance, responsive web applications using React, modern JavaScript (ES6+), PHP, and MySQL. Combines deep academic rigor in software architecture and algorithms with practical delivery of impactful applications—including agricultural commodity market platforms, scientific calculators, and relational school database systems. Passionate about clean code, robust API architecture, and solving regional and global problems through technology.'}
            </p>
          </section>

          {/* Section 2: Technical Competencies Matrix */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-700" />
              {t.printView.technicalExpertise}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {/* Frontend */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 print:bg-transparent">
                <div className="font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>Frontend Engineering</span>
                  <span className="text-[10px] font-mono text-cyan-700 font-semibold">Core Focus</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['React (Hooks, Context, State)', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / Semantic Web', 'Responsive Mobile-First UI', 'Framer Motion', 'Lucide Icons'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white print:bg-slate-100 border border-slate-300 text-[11px] font-mono text-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Database */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 print:bg-transparent">
                <div className="font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>Backend & Database Systems</span>
                  <span className="text-[10px] font-mono text-cyan-700 font-semibold">Architecture</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['PHP (OOP & REST)', 'MySQL Relational Design', 'PDO Prepared Statements', 'Node.js & Express Basics', 'RESTful API Design', 'JSON Data Contracts', 'Input Sanitization'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white print:bg-slate-100 border border-slate-300 text-[11px] font-mono text-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Practices */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 print:bg-transparent">
                <div className="font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>Software Design & Tools</span>
                  <span className="text-[10px] font-mono text-cyan-700 font-semibold">Methodology</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Git & GitHub Version Control', 'VS Code Workspaces', 'Object-Oriented Programming (OOP)', 'Component Modularity', 'Data Structures & Algorithms', 'Cross-Browser Testing'].map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded bg-white print:bg-slate-100 border border-slate-300 text-[11px] font-mono text-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages & Soft Skills */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 print:bg-transparent">
                <div className="font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>Spoken Languages & Communication</span>
                  <span className="text-[10px] font-mono text-cyan-700 font-semibold">Professional</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Afaan Oromoo</span>
                    <span className="text-slate-500 font-mono">Native / Primary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">English</span>
                    <span className="text-slate-500 font-mono">Full Professional Working Proficiency</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Amharic</span>
                    <span className="text-slate-500 font-mono">Working Proficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Featured Software Systems & Deliverables */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-700" />
              {t.printView.keyDeliverables}
            </h2>

            <div className="space-y-4">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 print:bg-transparent print:p-2 break-inside-avoid"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      Role: {project.role}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-cyan-800 mb-1.5">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-700 leading-relaxed mb-2.5">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase mr-1">
                      Tech Stack:
                    </span>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white print:bg-slate-100 border border-slate-300 text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  {!isCompact && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600 pl-4 list-disc">
                      {project.features.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="leading-tight">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Professional Endorsements & Recommendations */}
          <section className="space-y-3 break-inside-avoid">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              {t.printView.endorsements}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {testimonialsData.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 print:bg-transparent flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-700 italic leading-relaxed mb-3">
                      "{language === 'om' && item.contentOm ? item.contentOm : item.content}"
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="font-bold text-xs text-slate-900">{item.name}</div>
                    <div className="text-[10px] text-slate-500">{item.role}</div>
                    <div className="text-[10px] font-mono text-cyan-700">{item.companyOrOrg}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Education & Academic Credentials */}
          <section className="space-y-3 break-inside-avoid">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-700" />
              {t.printView.educationHistory}
            </h2>

            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">
                      {edu.degree}
                    </div>
                    <div className="text-cyan-800 font-medium">
                      {edu.institution} · {edu.location}
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 max-w-xl">
                      {edu.description}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">
                      {edu.period}
                    </span>
                    <div className="text-[10px] text-emerald-700 font-semibold">
                      {edu.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Document Verification & Sign-off Footer */}
          <footer className="pt-6 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.printView.verifiedDocument} · IFA SANBATO</span>
            </div>
            <div>
              <span>Portfolio & Code: github.com/ifasanbato</span>
            </div>
            <div>
              <span>Printed / Exported: {new Date().toLocaleDateString()}</span>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};
