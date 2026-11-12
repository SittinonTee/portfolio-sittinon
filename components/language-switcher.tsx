"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Project description language"
      className="flex shrink-0 rounded-full border border-border bg-background/80 p-1 backdrop-blur-xl"
    >
      {(["th", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-label={
            option === "en" ? "English descriptions" : "คำอธิบายภาษาไทย"
          }
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={`rounded-full px-2 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            language === option
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
