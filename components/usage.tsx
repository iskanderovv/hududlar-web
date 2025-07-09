"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Shield, Package, BookOpen, TreePine, Search, Copy, Check } from "lucide-react"
import { useTranslation } from "../lib/translations"
import { useLanguage } from "@/lib/language-context"

interface CodeBlockProps {
  code: string
  className?: string
}

declare var navigator: any

function CodeBlock({ code, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative group">
      <pre
        className={`bg-slate-900/50 text-slate-300 p-6 rounded-xl text-sm overflow-x-auto font-mono leading-relaxed border border-slate-700 ${className}`}
      >
        <code>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-600"
        onClick={copyToClipboard}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </>
        )}
      </Button>
    </div>
  )
}

export default function Usage() {
  const { currentLanguage } = useLanguage()
  const t = useTranslation(currentLanguage)

  const basicUsageCode = `import {
  getRegions,
  getDistrictsByRegionId,
  getVillagesByDistrictId
} from 'hududlar';

// 1. Barcha viloyatlarni olish
const regions = getRegions();
console.log(regions.length); // 14

// 2. Viloyatga tegishli tumanlar
const districts = getDistrictsByRegionId(2);
console.log(districts.map(d => d.name_uz));

// 3. Tumanga tegishli qishloqlar
const villages = getVillagesByDistrictId(16);
console.log(villages.length); // 13`

  const findByIdCode = `import {
  findRegionById,
  findDistrictById,
  findVillageById
} from 'hududlar';

// ID bo'yicha viloyat topish
const region = findRegionById(2);
console.log(region.name_uz); // "Andijon viloyati"

// ID bo'yicha tuman topish
const district = findDistrictById(16);
console.log(district.name_uz); // "Andijon shahri"

// ID bo'yicha qishloq topish
const village = findVillageById(217);
console.log(village.name_uz); // "Qishloq nomi"`

  const regionTreeCode = `import { getRegionTree } from 'hududlar';

// To'liq daraxt strukturasi
const tree = getRegionTree();

// Birinchi viloyatning birinchi tumanining qishloqlari
console.log(tree[0].districts[0].villages);

// Har bir viloyat bo'yicha iteratsiya
tree.forEach(region => {
  console.log(\`Viloyat: \${region.name_uz}\`);
  region.districts.forEach(district => {
    console.log(\`  Tuman: \${district.name_uz}\`);
    console.log(\`    Qishloqlar soni: \${district.villages.length}\`);
  });
});`

  const typescriptCode = `import { Region, District, Village } from 'hududlar';

interface Region {
  id: number
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
}

interface District {
  id: number
  region_id: number
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
}

interface Village {
  id: number
  district_id: number
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
}`

  return (
    <div>
      {/* Usage Examples Section */}
      <section id="usage" className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {t.usageExamples}
            </h2>
          </div>

          <div className="space-y-12">
            {/* Basic Usage */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg-4 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{t.basicUsage}</CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      {currentLanguage === "uz" ? "Asosiy funksiyalardan foydalanish" : "Using basic functions"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <CodeBlock code={basicUsageCode} />
              </CardContent>
            </Card>

            {/* Find by ID */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg-3 rounded-lg flex items-center justify-center">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">
                      {currentLanguage === "uz" ? "ID bo'yicha topish" : "Find by ID"}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      {currentLanguage === "uz" ? "Ma'lum ID bo'yicha ma'lumot topish" : "Find specific data by ID"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <CodeBlock code={findByIdCode} />
              </CardContent>
            </Card>

            {/* Region Tree */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg-1 rounded-lg flex items-center justify-center">
                    <TreePine className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">
                      {currentLanguage === "uz" ? "To'liq daraxt ko'rinishi" : "Complete Tree Structure"}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      {currentLanguage === "uz"
                        ? "Viloyat → Tuman → Qishloq ierarxiyasi"
                        : "Region → District → Village hierarchy"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <CodeBlock code={regionTreeCode} />
              </CardContent>
            </Card>

            {/* TypeScript Support */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg-2 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{t.typescriptSupport}</CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      {currentLanguage === "uz"
                        ? "To'liq TypeScript qo'llab-quvvatlash"
                        : "Full TypeScript support with types"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <CodeBlock code={typescriptCode} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {t.installation}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  npm
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CodeBlock code="npm install hududlar" />
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  yarn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CodeBlock code="yarn add hududlar" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
