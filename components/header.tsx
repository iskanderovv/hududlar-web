import Link from "next/link";
import React, { useState } from "react";
import { Language, LanguageSwitcher } from "./language-switcher";
import { Button } from "./ui/button";
import {
  BookOpen,
  Code,
  Download,
  Github,
  Menu,
  Package,
  Search,
  X,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const t = useTranslation(currentLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#search", label: t.search, icon: Search },
    { href: "#usage", label: t.usage, icon: BookOpen },
    { href: "#api", label: t.apiReference, icon: Code },
    { href: "#install", label: t.install, icon: Download },
  ];
  return (
    <header className="z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur-xl sticky top-0">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/logo.png"
                alt="hududlar"
                className="h-10 brightness-0 invert"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group"
              >
                <item.icon className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />

            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden sm:flex border-slate-700 bg-slate-800/50 hover:bg-slate-700"
            >
              <Link href="https://github.com/iskanderovv/hududlar">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>

            <Button
              size="sm"
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Link href="https://www.npmjs.com/package/hududlar">
                <Package className="h-4 w-4 mr-2" />
                npm
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
