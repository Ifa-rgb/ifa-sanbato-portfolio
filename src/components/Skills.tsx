import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  Code2,
  Database,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
  Sliders
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<'All' | 'Frontend' | 'Backend & Database' | 'Core & Tools'>('All');

  const categoryOptions = [
    { key: 'All' as const, label: t.skills.categories.all },
    { key: 'Frontend' as const, label: t.skills.categories.frontend },
    { key: 'Backend & Database' as const, label: t.skills.categories.backend },
    { key: 'Core & Tools' as const, label: t.skills.categories.tools },
  ];

  const filteredSkills =
    selectedCategoryKey === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategoryKey);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[var(--bg-canvas-subtle)]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
              {t.skills.sectionTag}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              {t.skills.heading}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              {t.skills.subheading}
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented control buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl overflow-x-auto self-start md:self-auto shrink-0 shadow-sm">
            {categoryOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectedCategoryKey(option.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategoryKey === option.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-cyan-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-cyan-700 dark:text-cyan-400 font-mono mt-0.5">{skill.category}</p>
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-mono text-slate-400 dark:text-slate-500">{t.skills.proficiencyLabel}:</span>
                <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[200px]">
                  {skill.experience}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Note on PHP & MySQL Backend Integration */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-50/80 via-[var(--bg-card)] to-blue-50/60 dark:from-blue-950/40 dark:via-slate-900 dark:to-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.skills.readyForBackend}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {t.skills.readyForBackendDesc}
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            {language === 'om' ? 'Pirojektoota Ilaalaa →' : 'See in Projects →'}
          </a>
        </div>
      </div>
    </section>
  );
};
