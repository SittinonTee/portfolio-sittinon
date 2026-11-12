"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "th";

const STORAGE_KEY = "portfolio-language";
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem(STORAGE_KEY);
      if (savedLanguage === "en" || savedLanguage === "th") {
        setCurrentLanguage(savedLanguage);
      }
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setCurrentLanguage(nextLanguage);
    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Keep the selected language for the current visit.
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
