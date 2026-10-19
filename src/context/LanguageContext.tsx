import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations, Translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ifa_portfolio_lang') as Language | null;
      if (stored === 'en' || stored === 'om') {
        return stored;
      }
    }
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language === 'om' ? 'om' : 'en';
    localStorage.setItem('ifa_portfolio_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'om' : 'en'));
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
