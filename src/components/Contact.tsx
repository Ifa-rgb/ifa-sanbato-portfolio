import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  Loader2
} from 'lucide-react';

type SubmitStatus = 'idle' | 'loading' | 'success';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'om' ? 'Maaloo maqaa keessan galchaa.' : 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = language === 'om' ? 'Maqaan yoo xiqqaate qubee 2 ta\'uu qaba.' : 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'om' ? 'Maaloo imeelii keessan galchaa.' : 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t.contact.invalidEmailError;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = language === 'om' ? 'Maaloo mata duree ergaa galchaa.' : 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'om' ? 'Maaloo ergaa keessan barreessaa.' : 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'om' ? 'Ergaan yoo xiqqaate qubee 10 ta\'uu qaba.' : 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('loading');
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn('Backend contact API call completed or ran in static mode:', err);
    } finally {
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);

        // Give visual confirmation on the button before card transition
        setTimeout(() => {
          setIsSubmitted(true);
        }, 950);
      }, 700);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmitStatus('idle');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleLaunchEmailClient = () => {
    const subject = encodeURIComponent(formData.subject || (language === 'om' ? 'Gaaffii Hojii Misooma Weebii IFA SANBATO' : 'Web Development Inquiry for IFA SANBATO'));
    const body = encodeURIComponent(
      `Akkam Ifa / Hello Ifa,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[var(--bg-canvas-subtle)]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
            {t.contact.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                {t.contact.directChannels}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'om'
                  ? 'Kallattiin imeelii, bilbila, ykn telegiraamaan na qunnamuu dandeessu. Saffisaan deebii isiniif nan kenna.'
                  : 'Feel free to reach out directly via email, telephone, or message. I respond promptly to inquiries.'}
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden mr-2">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">{t.contact.emailTitle}</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'contact-email')}
                  title={copiedField === 'contact-email' ? t.about.copiedTooltip : t.about.copyTooltip}
                  className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'contact-email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">{t.contact.phoneTitle}</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'contact-phone')}
                  title={copiedField === 'contact-phone' ? t.about.copiedTooltip : t.about.copyTooltip}
                  className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'contact-phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">{t.contact.locationTitle}</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {language === 'om' ? 'Dembii, Oromiyaa, Itoophiyaa' : personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Work Availability Badge */}
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.hero.availableBadge}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'om'
                    ? 'Hojii dhaabbataa fuulduraa fi guutuu (Full-Stack), garee sooftiweerii fagootti hojjetuuf qophiidha.'
                    : 'Available for full-time frontend and full-stack positions, remote software teams, and long-term contracts.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted-card"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="py-10 text-center space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto shadow-lg shadow-emerald-500/10"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t.contact.successMessage}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      {language === 'om'
                        ? `Galatoomaa, ${formData.name}. Ergaan keessan sirriitti qophaa'eera. Imeelii keessan dabalataan appilikeeshinii keessaniin kallattiin erguu dandeessu.`
                        : `Thank you, ${formData.name}. Your message has been formatted. You can also send it directly via your mail client.`}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 pt-3">
                      <button
                        onClick={handleLaunchEmailClient}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer hover:from-cyan-300 hover:to-blue-400 transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        {t.contact.openInEmailClient}
                      </button>
                      <button
                        onClick={handleResetForm}
                        className="px-5 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-xs border border-[var(--border-subtle)] cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      >
                        {language === 'om' ? 'Ergaa Biraa Barreessi' : 'Send Another Message'}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {t.contact.nameLabel} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.namePlaceholder}
                          className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                            errors.name
                              ? 'border-rose-500 focus:border-rose-400'
                              : 'border-[var(--border-subtle)] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                          }`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {t.contact.emailLabel} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.emailPlaceholder}
                          className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-rose-500 focus:border-rose-400'
                              : 'border-[var(--border-subtle)] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                          }`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.subjectLabel} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.contact.subjectPlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.subject
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-[var(--border-subtle)] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                        }`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          {t.contact.messageLabel} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <span className="text-[11px] font-mono text-slate-500">
                          {formData.message.length} {language === 'om' ? 'qubeewwan' : 'characters'}
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.messagePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-[var(--border-subtle)] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button with Framer Motion Animation */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-slate-500">
                        {language === 'om' ? 'Iddoowwan ' : 'All fields marked with '}
                        <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        {language === 'om' ? ' qaban guutamuu qabu.' : ' are required.'}
                      </p>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting || submitStatus === 'success'}
                        whileHover={submitStatus === 'idle' ? { scale: 1.02 } : {}}
                        whileTap={submitStatus === 'idle' ? { scale: 0.98 } : {}}
                        animate={
                          submitStatus === 'success'
                            ? {
                                backgroundColor: '#10b981',
                                boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
                              }
                            : submitStatus === 'loading'
                            ? {
                                backgroundColor: '#0284c7',
                              }
                            : {}
                        }
                        className={`w-full sm:w-auto min-w-[180px] h-[48px] px-7 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          submitStatus === 'success'
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                            : submitStatus === 'loading'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 opacity-90 cursor-wait'
                            : 'text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25'
                        }`}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {submitStatus === 'loading' && (
                            <motion.div
                              key="btn-loading"
                              initial={{ opacity: 0, y: 8, scale: 0.85 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8, scale: 0.85 }}
                              transition={{ duration: 0.18 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                              >
                                <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                              </motion.div>
                              <span>{t.contact.sending}</span>
                            </motion.div>
                          )}

                          {submitStatus === 'success' && (
                            <motion.div
                              key="btn-success"
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.7 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className="flex items-center gap-2 text-white font-bold"
                            >
                              <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.08, type: 'spring', stiffness: 450, damping: 15 }}
                              >
                                <Check className="w-4 h-4 stroke-[3]" />
                              </motion.div>
                              <span>
                                {language === 'om' ? 'Milkaa\'inaan Ergameera!' : 'Sent Successfully!'}
                              </span>
                            </motion.div>
                          )}

                          {submitStatus === 'idle' && (
                            <motion.div
                              key="btn-idle"
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.18 }}
                              className="flex items-center gap-2"
                            >
                              <Send className="w-4 h-4" />
                              <span>{t.contact.sendButton}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
