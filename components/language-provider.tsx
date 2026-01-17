"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { dictionary } from "@/lib/dictionary"

type Language = "en" | "ar"

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: keyof typeof dictionary.en | string) => string
    dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language
        if (saved) {
            setLanguageState(saved)
            document.documentElement.lang = saved
            document.documentElement.dir = saved === "ar" ? "rtl" : "ltr"
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
        document.documentElement.lang = lang
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    }

    const t = (key: string) => {
        // @ts-ignore
        return dictionary[language][key] || key
    }

    const dir = language === "ar" ? "rtl" : "ltr"

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={dir}>
                {children}
            </div>
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
