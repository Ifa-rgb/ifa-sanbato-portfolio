import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/portfolioData';
import { Testimonial } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import {
  Quote,
  Star,
  CheckCircle2,
  PlusCircle,
  X,
  MessageSquareQuote,
  Building,
  UserCheck,
  Sparkles
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [activeFilter, setActiveFilter] = useState<'all' | 'clients' | 'mentors' | 'peers'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // New endorsement form state
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    relationship: 'Peer Collaborator',
    content: '',
    rating: 5,
    projectRelation: 'Full-Stack Web Dev'
  });

  const filterOptions = [
    { id: 'all' as const, label: t.testimonials.filterAll },
    { id: 'mentors' as const, label: t.testimonials.filterMentors },
    { id: 'clients' as const, label: t.testimonials.filterClients },
    { id: 'peers' as const, label: t.testimonials.filterPeers },
  ];

  const filteredTestimonials = testimonials.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mentors') {
      return item.relationship.toLowerCase().includes('advisor') || 
             item.relationship.toLowerCase().includes('mentor') ||
             item.role.toLowerCase().includes('faculty');
    }
    if (activeFilter === 'clients') {
      return item.relationship.toLowerCase().includes('client') ||
             item.companyOrOrg.toLowerCase().includes('network') ||
             item.companyOrOrg.toLowerCase().includes('enterprise');
    }
    if (activeFilter === 'peers') {
      return item.relationship.toLowerCase().includes('peer') ||
             item.relationship.toLowerCase().includes('collaborator') ||
             item.relationship.toLowerCase().includes('teammate');
    }
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.content.trim()) return;

    const initials = formData.name
      .split(' ')
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'FB';

    const newTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      name: formData.name.trim(),
      role: formData.role.trim() || 'Software Collaborator',
      companyOrOrg: 'Industry Partner',
      initials,
      relationship: formData.relationship,
      content: formData.content.trim(),
      rating: formData.rating,
      date: 'Just now',
      projectRelation: formData.projectRelation
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmittedSuccess(true);

    try {
      fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newTestimonial.name,
          role: newTestimonial.role,
          companyOrOrg: newTestimonial.companyOrOrg,
          content: newTestimonial.content,
          rating: newTestimonial.rating,
          relationship: newTestimonial.relationship,
        }),
      }).catch((err) => console.warn('Backend testimonials API ran or fallback:', err));
    } catch {
      // offline/fallback
    }

    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        role: '',
        relationship: 'Peer Collaborator',
        content: '',
        rating: 5,
        projectRelation: 'Full-Stack Web Dev'
      });
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>{t.testimonials.sectionTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
          {t.testimonials.heading}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full my-4"></div>
        <p className="max-w-2xl text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
          {t.testimonials.subheading}
        </p>

        {/* Action button to leave feedback */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{t.testimonials.leaveFeedback}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActiveFilter(opt.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === opt.id
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredTestimonials.map((item, idx) => {
          const displayedText = language === 'om' && item.contentOm ? item.contentOm : item.content;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-cyan-500/10"
            >
              {/* Quote icon background watermark */}
              <div className="absolute top-6 right-6 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{t.testimonials.verifiedReview}</span>
                  </div>
                </div>

                {/* Project or context badge if available */}
                {item.projectRelation && (
                  <div className="mb-3 inline-block">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                      {item.projectRelation}
                    </span>
                  </div>
                )}

                {/* Testimonial body text */}
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed italic relative z-10 mb-6">
                  "{displayedText}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-md shrink-0 ring-2 ring-cyan-500/30">
                  {item.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-[var(--text-primary)] font-bold text-sm sm:text-base truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium truncate flex items-center gap-1.5">
                    <Building className="w-3 h-3 shrink-0" />
                    {item.role} · {item.companyOrOrg}
                  </p>
                  <p className="text-[11px] text-[var(--text-secondary)]/80 truncate flex items-center gap-1 mt-0.5">
                    <UserCheck className="w-3 h-3 text-blue-400 shrink-0" />
                    {item.relationship}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Leave Feedback Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg rounded-2xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden p-6 relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {t.testimonials.modalTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                {t.testimonials.leaveFeedbackDesc}
              </p>

              {submittedSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
                  <p className="text-sm font-semibold text-emerald-300">
                    {t.testimonials.formSuccess}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                      {t.testimonials.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Sarah Johnson"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                      {t.testimonials.formRole}
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g., Senior Project Manager, Agro Solutions"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        {t.testimonials.formRelationship}
                      </label>
                      <select
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-cyan-500 text-xs sm:text-sm"
                      >
                        <option value="Mentor / Advisor">Mentor / Academic Advisor</option>
                        <option value="Client / Stakeholder">Client / Project Sponsor</option>
                        <option value="Senior Collaborator">Senior Collaborator</option>
                        <option value="Peer Teammate">Peer Teammate</option>
                        <option value="Hiring Recruiter">Hiring Recruiter / Interviewer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        {t.testimonials.rating}
                      </label>
                      <div className="flex items-center gap-2 py-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: star })}
                            className="p-1 text-slate-600 hover:text-amber-400 transition-colors"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= formData.rating
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-slate-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                      {t.testimonials.formFeedback} *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your recommendation or endorsement of Ifa's technical and professional abilities..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-cyan-500 text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                    >
                      {t.testimonials.cancel}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 cursor-pointer"
                    >
                      {t.testimonials.formSubmit}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
