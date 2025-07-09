"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { Language } from "./translations"

declare var window: any;

interface LanguageContextType {
  currentLanguage: Language
  setCurrentLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_STORAGE_KEY = "preferred-language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    setIsClient(true)
    
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "uz")) {
        setCurrentLanguage(savedLanguage)
      }
    }
  }, [])

  // Save to localStorage whenever language changes
  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage)
    }
  }, [currentLanguage, isClient])

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
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
