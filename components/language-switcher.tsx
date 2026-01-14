"use client"

import { useState, useEffect } from "react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as "en" | "ar"
    if (saved) setLanguage(saved)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
      aria-label="Toggle language"
    >
      {language === "en" ? "عربي" : "EN"}
    </button>
  )
}
