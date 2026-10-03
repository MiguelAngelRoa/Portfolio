import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language, type Segment, type TranslationKey } from './translations';

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch {
    /* ignore */
  }
  return 'en';
}

interface LanguageContextValue {
  lang: Language;
  toggleLanguage: () => void;
  tStr: (key: TranslationKey) => string;
  tSegs: (key: TranslationKey) => Segment[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const tStr = useCallback(
    (key: TranslationKey): string => {
      const v = translations[lang][key];
      return typeof v === 'string' ? v : '';
    },
    [lang],
  );

  const tSegs = useCallback(
    (key: TranslationKey): Segment[] => {
      const v = translations[lang][key];
      return Array.isArray(v) ? (v as Segment[]) : [];
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, toggleLanguage, tStr, tSegs }),
    [lang, toggleLanguage, tStr, tSegs],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}