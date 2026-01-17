"use client"

import { useLanguage } from "@/components/language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors font-sans"
      aria-label="Toggle language"
    >
      {language === "en" ? "عربي" : "EN"}
    </button>
  )
}
