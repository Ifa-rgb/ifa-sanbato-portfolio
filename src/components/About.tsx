import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Target,
  Check,
  Copy,
  Globe,
  Briefcase,
  Compass,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const localizedLanguages = language === 'om'
    ? [
        { language: "Afaan Oromoo", proficiency: "Afaan Dhalootaa / Mother Tongue" },
        { language: "Ingiliffa (English)", proficiency: "Gahumsa Ogummaa Hojii" },
        { language: "Amaariffa (Amharic)", proficiency: "Dandeettii Cimaa" }
      ]
    : personalInfo.languages;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
            {t.about.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            {t.about.heading}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            {t.about.subheading}
          </p>
        </div>

        {/* 2-Column Main Layout: Bio & Career Objective on Left, Personal Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biography & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-4">
                <User className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                {t.about.whoIAm}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {t.about.bio}
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">{t.about.coreDrive}</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.about.coreDriveTitle}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.coreDriveDesc}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">{t.about.mindset}</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.about.mindsetTitle}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.mindsetDesc}</p>
                </div>
              </div>
            </div>

            {/* Career Objective Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-50/70 via-[var(--bg-card)] to-blue-50/50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-cyan-950/20 border border-cyan-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5 mb-3 text-cyan-600 dark:text-cyan-400">
                <Target className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.about.careerObjectiveTitle}</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                {t.about.careerObjectiveDesc}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-cyan-700 dark:text-cyan-300">
                <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>
                  {language === 'om'
                    ? 'Sprintii dhihoo, misooma fuulduraa fi sirna duubaa irratti bu\'aa qabatamaa fiduuf qophiidha.'
                    : 'Ready to contribute to immediate sprints, frontend features, and backend integrations.'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Information & Verified Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  {t.about.personalInfoTitle}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {language === 'om' ? 'Mirkanaa\'aa' : 'Verified Profile'}
                </span>
              </div>

              {/* Item: Full Name */}
              <div className="group p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-colors">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.about.fullNameLabel}</span>
                <span className="text-base font-semibold text-slate-900 dark:text-white tracking-wide">{personalInfo.fullName}</span>
              </div>

              {/* Item: Email with Copy Action */}
              <div className="group p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-colors flex items-center justify-between">
                <div className="overflow-hidden mr-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.about.emailLabel}</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:underline transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  title={copiedField === 'email' ? t.about.copiedTooltip : t.about.copyTooltip}
                  className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Item: Phone with Copy Action */}
              <div className="group p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-colors flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.about.phoneLabel}</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  title={copiedField === 'phone' ? t.about.copiedTooltip : t.about.copyTooltip}
                  className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Item: Location */}
              <div className="group p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-colors">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.about.locationLabel}</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {language === 'om' ? 'Dembi Dollo, Oromiyaa, Itoophiyaa' : personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Item: Availability */}
              <div className="group p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-colors">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.about.availabilityLabel}</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                  {language === 'om'
                    ? 'Hojii Dhaabbataa, Fagoo (Remote) & Walmakaaf Qophiidha'
                    : personalInfo.availability}
                </span>
              </div>

              {/* Languages Spoken (No pills - clean unboxed list) */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 block mb-2 flex items-center gap-1.5 font-semibold">
                  <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {t.about.languagesLabel}
                </span>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {localizedLanguages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1">
                      <span className="font-medium text-slate-900 dark:text-white">{lang.language}</span>
                      <span className="text-slate-500 dark:text-slate-400">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
