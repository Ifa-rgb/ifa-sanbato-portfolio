import React from 'react';
import { educationData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { language, t } = useLanguage();

  const localizedEducation = educationData.map((item, idx) => {
    if (language === 'om') {
      if (idx === 0) {
        return {
          ...item,
          degree: t.education.degreeTitle,
          institution: t.education.degreeInstitution,
          location: t.education.degreeLocation,
          period: '2020 - 2024 (Xumurame)',
          description: t.education.degreeSummary,
          achievements: [
            "Digrii Saayinsii Sooftiweeriitiin eebbifame",
            "Misooma weebii, RDBMS, fi qorannoo sirna sooftiweerii",
            "Pirojektii eebbaa: Sirna tajaajila weebii ammayyaa",
            "Algoorizimii fi rakkoolee teeknikaa furuu irratti dandeettii olaanaa"
          ],
          courses: [
            "Bocama Sooftiweerii",
            "Caasaa Deetaa & Algoorizimii",
            "Misooma Weebii",
            "Kuusaa Deetaa (MySQL/SQL)",
            "Saganteessuu OOP",
            "Sirna Hojii Kompiitaraa (OS)"
          ]
        };
      }
      if (idx === 1) {
        return {
          ...item,
          degree: t.education.collegeTitle,
          institution: t.education.collegeInstitution,
          period: '2018 - 2020 (Xumurame)',
          description: t.education.collegeSummary,
          achievements: [
            "Bu'uura Saayinsii Kompiitaraa fi Teeknooloojii Odeeffannoo",
            "Saganteessuu herregaa fi seera kompiitaraa",
            "Dandeettii qulqulluu qormaata bifa qabxii olaanaan xumuruu"
          ],
          courses: [
            "Bu'uura Kompiitaraa",
            "Herrega Saganteessuu",
            "Afaan C & Saganteessuu Qajeelfamaa",
            "Nageenya Sirna Deetaa"
          ]
        };
      }
      return {
        ...item,
        degree: t.education.schoolTitle,
        institution: t.education.schoolInstitution,
        period: '2014 - 2018 (Xumurame)',
        description: t.education.schoolSummary,
        achievements: [
          "Barnoota Saayinsii Uumamaa fi Herregaa qabxii olaanaan xumure",
          "Dandeettii wal-qunnamtii Afaan Ingiliffaa fi Afaan Oromoo gabbifadhe",
          "Miseensa kilaba saayinsii fi teeknooloojii mana barumsaa"
        ],
        courses: [
          "Herrega & Fiiziksii",
          "Saayinsii Kompiitaraa Sadarkaa 2ffaa",
          "Afaan Ingiliffaa Ogummaa",
          "Toftaa Qorannoo Saayinsii"
        ]
      };
    }
    return item;
  });

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
            {t.education.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            {t.education.heading}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            {t.education.subheading}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-3.5 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-transparent">
          {localizedEducation.map((item, index) => (
            <div key={index} className="relative pl-10 sm:pl-16">
              {/* Timeline marker icon */}
              <div className="absolute left-0 sm:left-2 top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[var(--bg-card)] border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md shadow-cyan-500/20 z-10">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-all shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm sm:text-base mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      {item.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements & Highlights */}
                <div className="mt-6">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {language === 'om' ? 'Qabxiilee Ijoo & Gahumsa' : 'Key Highlights & Competencies'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Coursework (No pills, clean typographic tags) */}
                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {language === 'om' ? 'Gosa Barnootaa Ijoo' : 'Primary Modules & Subject Areas'}
                  </h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.courses.map((course, cIdx) => (
                      <span key={cIdx} className="inline-flex items-center">
                        <span className="text-slate-800 dark:text-slate-300 font-medium">{course}</span>
                        {cIdx < item.courses.length - 1 && <span className="ml-3 text-slate-400 dark:text-slate-600">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
