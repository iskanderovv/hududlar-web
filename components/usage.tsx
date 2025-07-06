"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Shield, Package, BookOpen } from "lucide-react"
import type { Language } from "../components/language-switcher"
import { useTranslation } from "../lib/translations"

export default function Usage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("uz")
  const t = useTranslation(currentLanguage)

  return (
    <div>
      {/* Usage Section */}
      <section id="usage" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {t.usageExamples}
            </h2>
          </div>

          <div className="space-y-12">
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg-4 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{t.basicUsage}</CardTitle>
                    <CardDescription className="text-lg text-slate-300">{t.basicUsageDesc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <pre className="bg-slate-900/50 text-slate-300 p-6 rounded-xl text-sm overflow-x-auto font-mono leading-relaxed border border-slate-700">
                  <code>{`import { getRegions, getDistricts, getVillages } from 'hududlar';

// Barcha viloyatlarni olish
const regions = getRegions();
console.log(regions.length); // 14

// Toshkent viloyati tumanlarini olish
const tashkentDistricts = getDistricts(1727);
console.log(tashkentDistricts[0].name_uz); // "Bekobod shahri"

// Ma'lum tuman qishloqlarini olish
const villages = getVillages(170301);
console.log(villages[0].name_uz); // "Bog'bon MFY"`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg-3 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{t.typescriptSupport}</CardTitle>
                    <CardDescription className="text-lg text-slate-300">{t.typescriptSupportDesc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <pre className="bg-slate-900/50 text-slate-300 p-6 rounded-xl text-sm overflow-x-auto font-mono leading-relaxed border border-slate-700">
                  <code>{`import { Region, District, Village } from 'hududlar';

const region: Region = {
  soato_id: 1703,
  name_uz: "Andijon viloyati",
  name_oz: "Андижон вилояти", 
  name_ru: "Андижанская область",
  type: "region"
};`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t.apiReferenceTitle}
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="text-xl font-mono text-blue-400">getRegions()</CardTitle>
                <CardDescription className="text-lg text-slate-300">{t.getRegionsDesc}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{t.returns}</Badge>
                    <code className="bg-slate-900/50 px-3 py-1 rounded text-slate-300 border border-slate-600">
                      Region[]
                    </code>
                  </div>
                  <p className="text-slate-300">
                    <strong>{t.description}:</strong> {t.getRegionsDescription}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="text-xl font-mono text-blue-400">getDistricts(regionId: number)</CardTitle>
                <CardDescription className="text-lg text-slate-300">{t.getDistrictsDesc}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-3">{t.parameters}</Badge>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-slate-300">
                      <li>
                        <code className="bg-slate-900/50 px-2 py-1 rounded border border-slate-600">regionId</code> -
                        Viloyatning SOATO ID raqami
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{t.returns}</Badge>
                    <code className="bg-slate-900/50 px-3 py-1 rounded text-slate-300 border border-slate-600">
                      District[]
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm hover-lift">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="text-xl font-mono text-blue-400">getVillages(districtId: number)</CardTitle>
                <CardDescription className="text-lg text-slate-300">{t.getVillagesDesc}</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-3">{t.parameters}</Badge>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-slate-300">
                      <li>
                        <code className="bg-slate-900/50 px-2 py-1 rounded border border-slate-600">districtId</code> -
                        Tumanning SOATO ID raqami
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{t.returns}</Badge>
                    <code className="bg-slate-900/50 px-3 py-1 rounded text-slate-300 border border-slate-600">
                      Village[]
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="py-20">
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
                <pre className="bg-slate-900/50 p-6 rounded-xl text-sm font-mono text-slate-300 border border-slate-700">
                  <code>npm install hududlar</code>
                </pre>
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
                <pre className="bg-slate-900/50 p-6 rounded-xl text-sm font-mono text-slate-300 border border-slate-700">
                  <code>yarn add hududlar</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
