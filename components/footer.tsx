"use client"

import {
  Github,
  Package,
  ChevronRight,
  Star,
  Users
} from "lucide-react";
import { useTranslation } from "../lib/translations";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { currentLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="hududlar"
                className="h-12 brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-white">
              {t.documentation}
            </h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="#usage"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  {t.usage}
                </Link>
              </li>
              <li>
                <Link
                  href="#install"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  {t.install}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-white">{t.resources}</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="https://github.com/iskanderovv/hududlar"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/hududlar"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Package className="h-4 w-4 mr-2" />
                  npm Package
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/iskanderovv/hududlar/issues"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/iskanderovv"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Contributing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-white">{t.community}</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="https://t.me/mernstackfornow" className="hover:text-white transition-colors">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="mailto:iskandarov_a@nuu.uz" className="hover:text-white transition-colors">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">&copy; 2024 hududlar. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
