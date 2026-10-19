import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, Filter } from 'lucide-react';

type ProjectFilter = 'All' | 'Web' | 'Mobile' | 'API';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('All');

  const filterOptions: { label: string; value: ProjectFilter }[] = [
    { label: t.projects.filters.all, value: 'All' },
    { label: t.projects.filters.web, value: 'Web' },
    { label: t.projects.filters.mobile, value: 'Mobile' },
    { label: t.projects.filters.api, value: 'API' },
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.categories?.includes(selectedFilter));

  const getCategoryCount = (cat: ProjectFilter) => {
    if (cat === 'All') return projectsData.length;
    return projectsData.filter((p) => p.categories?.includes(cat)).length;
  };

  const getLocalizedDescription = (project: Project) => {
    if (language === 'om') {
      if (project.id === 'agro-app') return t.projects.agroDesc;
      if (project.id === 'calculator-app') return t.projects.calcDesc;
      if (project.id === 'school-management') return t.projects.schoolDesc;
    }
    return project.description;
  };

  const getLocalizedSubtitle = (project: Project) => {
    if (language === 'om') {
      if (project.id === 'agro-app') return 'Sirna Daldala fi Shallaggii Midhaan Qonnaa';
      if (project.id === 'calculator-app') return 'Shallagduu Faayinaansii fi Saayinsii';
      if (project.id === 'school-management') return 'Sirna Bulchiinsa Manneen Barnootaa';
    }
    return project.subtitle;
  };

  const getTechBadgeDetails = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('react')) {
      return {
        bg: 'bg-cyan-500/10 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
        dot: 'bg-cyan-500',
      };
    }
    if (lower.includes('php')) {
      return {
        bg: 'bg-indigo-500/10 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
        dot: 'bg-indigo-500',
      };
    }
    if (lower.includes('mysql') || lower.includes('database') || lower.includes('sql')) {
      return {
        bg: 'bg-blue-500/10 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-500/30',
        dot: 'bg-blue-500',
      };
    }
    if (lower.includes('javascript') || lower.includes('js')) {
      return {
        bg: 'bg-amber-500/10 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-500/30',
        dot: 'bg-amber-500',
      };
    }
    if (lower.includes('tailwind') || lower.includes('css')) {
      return {
        bg: 'bg-sky-500/10 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-500/30',
        dot: 'bg-sky-500',
      };
    }
    if (lower.includes('state') || lower.includes('algo') || lower.includes('analytic')) {
      return {
        bg: 'bg-purple-500/10 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-500/30',
        dot: 'bg-purple-500',
      };
    }
    return {
      bg: 'bg-slate-500/10 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700',
      dot: 'bg-slate-400',
    };
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Filtering Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
              {t.projects.sectionTag}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              {t.projects.heading}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              {t.projects.subheading}
            </p>
          </div>

          {/* Interactive Category Filter Controls (Segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl overflow-x-auto self-start md:self-auto shrink-0 shadow-sm">
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt.value;
              const count = getCategoryCount(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => setSelectedFilter(opt.value)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{opt.label}</span>
                  <span
                    className={`text-[11px] font-mono tabular-nums px-1.5 py-0.2 rounded ${
                      isActive
                        ? 'bg-black/20 text-slate-950'
                        : 'bg-[var(--bg-card-subtle)] text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Feedback / Count Strip */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>
            {t.projects.showing} <strong className="text-slate-900 dark:text-white">{filteredProjects.length}</strong>{' '}
            {language === 'om' ? 'pirojektoota' : filteredProjects.length === 1 ? 'project' : 'projects'}{' '}
            {t.projects.inCategory}{' '}
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold">
              {filterOptions.find((f) => f.value === selectedFilter)?.label}
            </span>
          </span>
          {selectedFilter !== 'All' && (
            <button
              onClick={() => setSelectedFilter('All')}
              className="text-cyan-700 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              {t.projects.resetFilter}
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group animate-fade-in"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-[var(--border-subtle)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-white/90 dark:bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700/60 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold shadow-sm">
                      {project.category}
                    </span>
                    {project.categories?.map((cat) => (
                      <span
                        key={cat}
                        className="bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-slate-700/50 hidden sm:inline-block"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Visual Badges for Technologies Used (e.g. React, PHP, MySQL) */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {project.tags.slice(0, 4).map((tech) => {
                      const badge = getTechBadgeDetails(tech);
                      return (
                        <span
                          key={tech}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium border ${badge.bg} transition-colors`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-700 dark:text-cyan-400 font-medium mt-0.5">
                    {getLocalizedSubtitle(project)}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {getLocalizedDescription(project)}
                  </p>

                  {/* Highlights list preview */}
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] space-y-1.5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{t.projects.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://github.com/ifasanbato"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                  aria-label={`View ${project.title} source on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
