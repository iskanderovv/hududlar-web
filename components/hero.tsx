"use client"
import { Badge } from "./ui/badge"
import { Code, Download, Globe, Sparkles, Zap } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { useTranslation } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const { currentLanguage } = useLanguage()
  const t = useTranslation(currentLanguage)

  return (
    <section className="relative pt-32 mb-10 px-4 overflow-hidden">
      <div className="container mx-auto text-center max-w-6xl relative z-10">
        <div className="mb-12">
          <Badge className="mb-8 px-6 py-3 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white">
            <Sparkles className="h-4 w-4 mr-2" />
            🇺🇿 {t.madeForUzbekistan}
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none">
            <span className="block text-white">{t.heroTitle}</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.heroTitleHighlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            {t.heroDescription}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button
            size="lg"
            className="text-lg px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl hover-lift"
            asChild
          >
            <Link href="#search">
              <Download className="mr-3 h-6 w-6" />
              {t.getStarted}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-12 py-6 border-slate-600 bg-slate-800/50 hover:bg-slate-700 shadow-2xl hover-lift"
            asChild
          >
            <Link href="#api">
              <Code className="mr-3 h-6 w-6" />
              {t.viewDocs}
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 justify-center md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">14</div>
            <div className="text-slate-400 text-sm">{currentLanguage === "uz" ? "Viloyatlar" : "Regions"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
            <div className="text-slate-400 text-sm">{currentLanguage === "uz" ? "Tumanlar" : "Districts"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">1000+</div>
            <div className="text-slate-400 text-sm">{currentLanguage === "uz" ? "Qishloqlar" : "Villages"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
