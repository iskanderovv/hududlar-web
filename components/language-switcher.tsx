"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'
import { useLanguage } from "@/lib/language-context"

export type Language = "en" | "uz"

const languages = {
  en: { name: "English", flag: "🇺🇸" },
  uz: { name: "O'zbekcha", flag: "🇺🇿" },
}

export function LanguageSwitcher() {
  const { currentLanguage, setCurrentLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-transparent border-slate-600 text-slate-300 hover:text-slate-300 hover:bg-slate-700"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languages[currentLanguage].name}</span>
          <span className="sm:hidden">{languages[currentLanguage].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setCurrentLanguage(code as Language)}
            className={`${currentLanguage === code ? "bg-slate-700" : ""} text-slate-300 hover:text-white`}
          >
            <span className="mr-2">{flag}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
