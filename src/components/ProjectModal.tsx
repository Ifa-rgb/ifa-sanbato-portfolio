import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Database,
  Cpu,
  Calculator,
  Sprout,
  GraduationCap
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  // Interactive Calculator Demo State
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcPrev, setCalcPrev] = useState('');
  const [calcHistory, setCalcHistory] = useState<string[]>(['1,200 * 3.5 = 4,200', '15,000 / 4 = 3,750']);

  // Interactive Agro App Demo State
  const [selectedCrop, setSelectedCrop] = useState<'Teff' | 'Coffee' | 'Wheat' | 'Maize'>('Teff');
  const [cropQuintals, setCropQuintals] = useState<number>(10);

  // Interactive School App Demo State
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<'All' | 'Grade 10' | 'Grade 11' | 'Grade 12'>('All');

  if (!project) return null;

  const cropPrices: Record<string, { pricePerQ: number; market: string; trend: string }> = {
    Teff: { pricePerQ: 4500, market: 'Addis Ababa Central', trend: '+2.1%' },
    Coffee: { pricePerQ: 14200, market: 'Jimma / Sidama Hub', trend: '+4.8%' },
    Wheat: { pricePerQ: 2850, market: 'Bale / Adama', trend: '+1.2%' },
    Maize: { pricePerQ: 2100, market: 'Hawassa / Wolkite', trend: '-0.5%' },
  };

  const mockStudents = [
    { name: 'Chloe Adams', id: '2026001', grade: 'Grade 10', gpa: '3.88', status: 'Enrolled' },
    { name: 'Liam Davis', id: '2026002', grade: 'Grade 11', gpa: '3.76', status: 'Enrolled' },
    { name: 'Maya Patel', id: '2026003', grade: 'Grade 9', gpa: '3.92', status: 'Enrolled' },
    { name: 'Dawit Bekele', id: '2026004', grade: 'Grade 12', gpa: '3.95', status: 'Honors' },
    { name: 'Hana Tadesse', id: '2026005', grade: 'Grade 10', gpa: '3.82', status: 'Enrolled' },
  ];

  const handleCalcClick = (val: string) => {
    if (val === 'C' || val === 'AC') {
      setCalcDisplay('0');
      setCalcPrev('');
      return;
    }
    if (val === '=') {
      try {
        const sanitized = calcDisplay.replace(/×/g, '*').replace(/÷/g, '/');
        if (/^[\d+\-*/. ]+$/.test(sanitized)) {
          // eslint-disable-next-line no-eval
          const res = Function(`'use strict'; return (${sanitized})`)();
          const formatted = Number(res).toLocaleString('en-US', { maximumFractionDigits: 4 });
          setCalcHistory((prev) => [`${calcDisplay} = ${formatted}`, ...prev.slice(0, 4)]);
          setCalcPrev(calcDisplay + ' =');
          setCalcDisplay(String(formatted));
        }
      } catch {
        setCalcDisplay('Error');
      }
      return;
    }
    if (val === 'DEL') {
      setCalcDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
      return;
    }
    setCalcDisplay((prev) => (prev === '0' || prev === 'Error' ? val : prev + val));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)]">
          <div>
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-semibold">
              {language === 'om' ? 'Qorannoo Pirojektii' : `${project.category} Architecture Case Study`}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Project Screenshot Banner */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-[var(--border-subtle)] shadow-xl group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
              <span className="font-semibold text-white bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                {project.subtitle}
              </span>
              <span className="text-cyan-300 font-mono bg-cyan-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-800">
                Role: {project.role}
              </span>
            </div>
          </div>

          {/* Overview & Detailed Scope */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              {language === 'om' ? 'Waa\'ee Pirojektii & Rakkoo Furame' : 'Project Overview & Problem Statement'}
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              {language === 'om' ? 'Dandeettiwwan Ijoo & Bocama Koodii' : 'Core Capabilities & Architecture'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Feature Demo Sandbox */}
          {project.id === 'modern-calculator' && (
            <div className="p-5 rounded-2xl bg-[var(--bg-canvas-subtle)] border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  Live Calculator Demonstration Widget
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Interactive Preview</span>
              </div>

              {/* Calculator UI inside modal */}
              <div className="max-w-xs mx-auto p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-white">
                <div className="p-3 bg-black/70 rounded-xl mb-3 text-right border border-cyan-900/40">
                  <div className="text-[11px] font-mono text-cyan-400 min-h-[16px]">{calcPrev}</div>
                  <div className="text-2xl font-mono font-bold text-cyan-300 truncate">{calcDisplay}</div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-sm font-mono">
                  {['AC', 'DEL', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map(
                    (btn, bIdx) => (
                      <button
                        key={bIdx}
                        onClick={() => handleCalcClick(btn)}
                        className={`p-2.5 rounded-lg transition-colors font-semibold cursor-pointer ${
                          btn === '='
                            ? 'col-span-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold'
                            : btn === 'AC' || btn === 'DEL'
                            ? 'bg-rose-950/70 text-rose-300 hover:bg-rose-900/80'
                            : ['÷', '×', '-', '+', '%'].includes(btn)
                            ? 'bg-cyan-950/70 text-cyan-400 hover:bg-cyan-900/80'
                            : 'bg-slate-800 text-white hover:bg-slate-700'
                        }`}
                      >
                        {btn}
                      </button>
                    )
                  )}
                </div>

                {calcHistory.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono space-y-1">
                    <span className="text-slate-400 block">Recent calculation:</span>
                    <p className="text-cyan-400 truncate">{calcHistory[0]}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {project.id === 'agro-app' && (
            <div className="p-5 rounded-2xl bg-[var(--bg-canvas-subtle)] border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <Sprout className="w-4 h-4" />
                  Agro Market Value Estimator (Ethiopian Commodity Simulator)
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Live Client Model</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-xs text-slate-700 dark:text-slate-300 block font-medium">Select Crop Commodity:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Teff', 'Coffee', 'Wheat', 'Maize'] as const).map((crop) => (
                      <button
                        key={crop}
                        onClick={() => setSelectedCrop(crop)}
                        className={`p-2 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                          selectedCrop === crop
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                            : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-slate-600 dark:text-slate-400 hover:border-slate-400'
                        }`}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="text-xs text-slate-700 dark:text-slate-300 block mb-1">
                      Harvest Volume (Quintals): <strong className="text-emerald-600 dark:text-emerald-400">{cropQuintals} Q</strong>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={cropQuintals}
                      onChange={(e) => setCropQuintals(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Estimated Market Valuation</span>
                    <p className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                      ETB {(cropPrices[selectedCrop].pricePerQ * cropQuintals).toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                      Market: <strong className="text-slate-900 dark:text-white">{cropPrices[selectedCrop].market}</strong>
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] text-slate-500 dark:text-slate-400 flex justify-between">
                    <span>Base: ETB {cropPrices[selectedCrop].pricePerQ}/Q</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{cropPrices[selectedCrop].trend}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.id === 'school-management' && (
            <div className="p-5 rounded-2xl bg-[var(--bg-canvas-subtle)] border border-blue-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Student Record & Grade Explorer Simulation
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Institutional Dashboard</span>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  {(['All', 'Grade 10', 'Grade 11', 'Grade 12'] as const).map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setSelectedGradeFilter(grade)}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                        selectedGradeFilter === grade
                          ? 'bg-blue-600 text-white'
                          : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>

                <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)]">
                  <table className="w-full text-xs text-left text-slate-700 dark:text-slate-300 bg-[var(--bg-card)]">
                    <thead className="text-[10px] uppercase font-mono bg-[var(--bg-card-subtle)] text-slate-500 dark:text-slate-400 border-b border-[var(--border-subtle)]">
                      <tr>
                        <th className="py-2.5 px-3">Student Name</th>
                        <th className="py-2.5 px-3">ID</th>
                        <th className="py-2.5 px-3">Class</th>
                        <th className="py-2.5 px-3">GPA</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-subtle)] font-mono">
                      {mockStudents
                        .filter((s) => selectedGradeFilter === 'All' || s.grade === selectedGradeFilter)
                        .map((st, i) => (
                          <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="py-2 px-3 text-slate-900 dark:text-white font-sans font-medium">{st.name}</td>
                            <td className="py-2 px-3 text-slate-500 dark:text-slate-400">{st.id}</td>
                            <td className="py-2 px-3">{st.grade}</td>
                            <td className="py-2 px-3 text-cyan-600 dark:text-cyan-400 font-bold">{st.gpa}</td>
                            <td className="py-2 px-3">
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium">{st.status}</span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Backend Readiness Note */}
          {project.backendReadiness && (
            <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-start gap-3">
              <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">
                  PHP & MySQL Backend Architecture
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {project.backendReadiness}
                </p>
              </div>
            </div>
          )}

          {/* Technologies Badges */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2.5">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] text-xs font-mono text-cyan-700 dark:text-cyan-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas-subtle)]">
          <a
            href="https://github.com/ifasanbato"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{language === 'om' ? 'Koodii GitHub Ilaali' : 'View Source on GitHub'}</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
          >
            {language === 'om' ? 'Cufi' : 'Close Case Study'}
          </button>
        </div>
      </div>
    </div>
  );
};
