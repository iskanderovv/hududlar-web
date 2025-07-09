"use client";

import { useState } from "react";
import { type Language } from "../components/language-switcher";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Usage from "@/components/usage";
import Footer from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

export default function HomePage() {
  const { currentLanguage } = useLanguage();
  const getLanguageClass = (language: Language) => {
    switch (language) {
      case "uz":
        return "font-uzbek";
      default:
        return "";
    }
  };
  return (
    <div
      className={`min-h-screen bg-slate-900 text-white ${getLanguageClass(
        currentLanguage
      )}`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 gradient-bg-1 rounded-full opacity-20 float-animation"></div>
        <div
          className="absolute top-1/2 -left-40 w-60 h-60 gradient-bg-2 rounded-full opacity-20 float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-40 right-1/4 w-96 h-96 gradient-bg-3 rounded-full opacity-20 float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Usage */}
      <Usage />

      {/* Footer */}
      <Footer />
    </div>
  );
}
