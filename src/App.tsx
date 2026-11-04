/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  ShieldCheck,
  Printer, 
  Download, 
  Sparkles, 
  Car, 
  Copy, 
  Check, 
  SlidersHorizontal,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { cvTranslations, Language } from './data/cvContent.ts';
import { downloadStandaloneHtmlFile } from './utils/generateStandaloneHtml.ts';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [introText, setIntroText] = useState<string>('');
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const t = cvTranslations[lang];
  const fullIntroPhrase = "Creativity is the key";

  // Typing animation for the cinematic intro: ONLY "Creativity is the key" lasting 6 seconds
  useEffect(() => {
    if (!showIntro) return;
    setIntroText('');
    let index = 0;
    
    // Type out the characters smoothly
    const typeInterval = setInterval(() => {
      if (index < fullIntroPhrase.length) {
        setIntroText(fullIntroPhrase.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 70);

    // Keep the intro displayed for 6 seconds total before revealing the CV
    const fullTimer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(fullTimer);
    };
  }, [showIntro]);

  // Handle document direction for Arabic RTL
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.classList.add('font-arabic');
    } else {
      html.setAttribute('dir', 'ltr');
      html.classList.remove('font-arabic');
    }
  }, [lang]);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard?.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen bg-[#050508] text-slate-100 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* 1. CINEMATIC INTRO: ONLY "Creativity is the key" FOR 6 SECONDS */}
      {showIntro && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] transition-opacity duration-1000 px-6"
        >
          <div className="gold-dots-pattern absolute inset-0 opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl w-full text-center space-y-6">
            {/* Glowing pure character typing in Black & Gold */}
            <div className="min-h-[5.5rem] flex items-center justify-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
                <span className="gold-gradient-text drop-shadow-[0_4px_30px_rgba(212,175,55,0.4)]">
                  {introText}
                </span>
                <span className="inline-block w-1.5 sm:w-2 h-10 sm:h-14 bg-[#d4af37] ml-2 align-middle animate-pulse shadow-[0_0_15px_#d4af37]" />
              </h1>
            </div>

            {/* Subtle skip button */}
            <div className="pt-8">
              <button
                onClick={() => setShowIntro(false)}
                className="bubble-chip px-5 py-2 text-xs font-mono text-[#d4af37]/70 hover:text-[#d4af37] hover:border-[#d4af37]/60 transition-all cursor-pointer"
              >
                {t.intro.skip} →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. TOP BAR & LANGUAGE CONTROLS */}
      <header className="sticky top-0 z-40 bg-[#050508]/90 backdrop-blur-md border-b border-[#d4af37]/20 no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] ring-4 ring-[#d4af37]/25 shadow-[0_0_10px_#d4af37]" />
            <a href="#" className="font-display font-bold text-base sm:text-lg text-white tracking-tight hover:text-[#d4af37] transition-colors whitespace-nowrap">
              {t.profile.name}
            </a>
            <span className="hidden lg:inline-block text-xs font-mono text-[#d4af37]/80 whitespace-nowrap">
              · {lang === 'ar' ? 'مسؤول ورشة' : 'Chef d\'Atelier'}
            </span>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#profile" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">{t.nav.profile}</a>
            <a href="#vision" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">{t.nav.vision}</a>
            <a href="#experience" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">{t.nav.experience}</a>
            <a href="#education" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">{t.nav.education}</a>
            <a href="#skills" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">{t.nav.contact}</a>
          </nav>

          {/* Zone 3: Language Toggle & Direct Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* 3-Language Switcher Bubble */}
            <div className="flex items-center p-1 bg-[#0f0f17] border border-[#d4af37]/25 rounded-full text-xs font-medium shadow-inner shrink-0">
              <button
                onClick={() => setLang('ar')}
                className={`px-3 py-1 rounded-full transition-all whitespace-nowrap font-arabic ${
                  lang === 'ar' 
                    ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="العربية"
              >
                العربية
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                  lang === 'fr' 
                    ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Français"
              >
                Français
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                  lang === 'en' 
                    ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English"
              >
                English
              </button>
            </div>

            {/* Direct Call Button Bubble */}
            <a
              href="tel:0669003959"
              className="bubble-btn-gold px-4 py-1.5 text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">0669 00 39 59</span>
              <span className="sm:hidden">{t.profile.actions.call}</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">

        {/* 3. PROFILE HERO SECTION (BUBBLE CONTAINER) */}
        <section id="profile" className="bubble-container p-6 sm:p-10 lg:p-12 relative overflow-hidden space-y-6">
          <div className="gold-dots-pattern absolute inset-0 opacity-15 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Main Info Column (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Top Badges Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="bubble-chip px-4 py-1.5 text-xs font-mono text-[#d4af37] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                  <span>{t.profile.statusBadge}</span>
                </div>
                <span className="bubble-chip px-3.5 py-1 text-xs font-mono text-neutral-400">
                  {lang === 'ar' ? 'تيارت · الجزائر العاصمة · وهران' : 'Tiaret · Alger · Oran'}
                </span>
              </div>

              {/* Name & Title */}
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
                  {t.profile.name}
                  {lang !== 'ar' && (
                    <span className="block sm:inline text-xl sm:text-3xl font-normal text-[#d4af37]/75 ml-0 sm:ml-4 font-arabic">
                      (يونس هواري)
                    </span>
                  )}
                </h1>
                <p className="text-base sm:text-xl font-semibold text-[#d4af37] mt-3 font-display">
                  {t.profile.title}
                </p>
              </div>

              {/* Bio summary bubble */}
              <div className="bubble-card p-5 sm:p-6 border-[#d4af37]/25">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {t.profile.summary}
                </p>
              </div>

              {/* Personal Info Bubbles Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="bubble-card p-3.5 text-center space-y-1">
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3 text-[#d4af37]" /> {lang === 'ar' ? 'الميلاد' : 'Naissance'}
                  </span>
                  <span className="font-bold text-white block">{t.profile.birthDate}</span>
                  <span className="text-[11px] text-neutral-400 block">{t.profile.birthPlace}</span>
                </div>

                <div className="bubble-card p-3.5 text-center space-y-1">
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" /> {lang === 'ar' ? 'الإقامة' : 'Résidence'}
                  </span>
                  <span className="font-bold text-white block">{t.profile.residence}</span>
                  <span className="text-[11px] text-neutral-400 block">{t.profile.status}</span>
                </div>

                <div className="bubble-card p-3.5 text-center space-y-1">
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#d4af37]" /> {lang === 'ar' ? 'الخدمة الوطنية' : 'Service Militaire'}
                  </span>
                  <span className="font-bold text-[#d4af37] block">{t.profile.military}</span>
                  <span className="text-[11px] text-neutral-400 block">{lang === 'ar' ? 'وضعية قانونية' : 'Situation en règle'}</span>
                </div>

                <div className="bubble-card p-3.5 text-center space-y-1">
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
                    <Car className="w-3 h-3 text-[#d4af37]" /> {lang === 'ar' ? 'رخصة السياقة' : 'Permis B'}
                  </span>
                  <span className="font-bold text-[#d4af37] block">{t.profile.license}</span>
                  <span className="text-[11px] text-neutral-400 block">{lang === 'ar' ? 'سيارات ونفعية' : 'Légers & utilitaires'}</span>
                </div>
              </div>

              {/* Quick Action Buttons Bubbles */}
              <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
                <a
                  href="tel:0669003959"
                  className="bubble-btn-gold px-6 py-2.5 text-xs flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.profile.actions.call} (0669 00 39 59)</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="bubble-btn-dark px-5 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#d4af37]" />
                  <span>{t.profile.actions.pdf}</span>
                </button>

                <button
                  onClick={downloadStandaloneHtmlFile}
                  className="bubble-btn-dark px-5 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer"
                  title="Exporter fichier HTML unique autonome"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" />
                  <span>{t.profile.actions.exportHtml}</span>
                </button>

                <a
                  href="mailto:y.houari02@gmail.com"
                  className="bubble-btn-dark px-4 py-2.5 text-xs text-neutral-300 hover:text-white flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>y.houari02@gmail.com</span>
                </a>
              </div>

              {/* Contact quick copy pill strip */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
                <div className="bubble-chip px-4 py-1.5 flex items-center gap-2 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>0669 00 39 59</span>
                  <button 
                    onClick={() => copyToClipboard('0669003959', 'phone')}
                    className="text-neutral-500 hover:text-[#d4af37] ml-1 transition-colors"
                    title="Copier le numéro"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="bubble-chip px-4 py-1.5 flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>y.houari02@gmail.com</span>
                  <button 
                    onClick={() => copyToClipboard('y.houari02@gmail.com', 'email')}
                    className="text-neutral-500 hover:text-[#d4af37] ml-1 transition-colors"
                    title="Copier l'e-mail"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Portrait Column (lg:col-span-4) with Luxury Gold Bubble Framing */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] group">
                
                {/* Glowing gold ambient halo */}
                <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-b from-[#d4af37]/35 via-[#d4af37]/15 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                
                {/* Bubble framing card */}
                <div className="relative rounded-[32px] p-3.5 bg-[#0a0a12]/90 border border-[#d4af37]/40 shadow-2xl space-y-3 backdrop-blur-md">
                  <div className="relative aspect-square rounded-[24px] overflow-hidden bg-[#0d0d17] border border-[#d4af37]/30 shadow-inner">
                    <img
                      src="/younes_houari.png"
                      alt="Younes Houari - Chef d'Atelier & Mécatronicien"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="px-1 py-1 text-center space-y-1">
                    <div className="text-base font-bold text-white font-display tracking-wide">
                      {lang === 'ar' ? 'يونس هواري' : 'Younes Houari'}
                    </div>
                    <div className="text-xs text-[#d4af37] font-medium tracking-wide">
                      {lang === 'ar' ? 'مسؤول ورشة وميكاترونيكي' : "Chef d’Atelier & Mécatronicien"}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 4. THE VISION & CREATIVITY STATEMENT SECTION (BUBBLE CONTAINER) */}
        <section id="vision" className="bubble-container p-8 sm:p-12 relative overflow-hidden space-y-6">
          <div className="gold-dots-pattern absolute inset-0 opacity-15 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="bubble-chip px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                {t.vision.badge}
              </div>
              <span className="text-xs font-mono text-[#d4af37]/80">
                {t.vision.subtitle}
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {t.vision.title}
              </h2>
            </div>

            {/* The Authentic Powerful Quote Bubble */}
            <div className="bubble-card p-6 sm:p-8 border-[#d4af37]/35 relative">
              <p className="text-base sm:text-xl text-amber-100/95 leading-relaxed italic font-sans font-medium">
                {t.vision.quote}
              </p>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>YOUNES HOUARI · WORKSHOP MANAGER</span>
                <span className="text-[#d4af37] font-semibold">
                  {lang === 'ar' ? 'ابتكار عملي ملموس' : 'Real-world Innovation'}
                </span>
              </div>
            </div>

            {/* 3 Pillars Bubbles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {t.vision.keyPoints.map((point, idx) => (
                <div key={idx} className="bubble-card p-6 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bubble-chip px-2.5 py-0.5 text-xs font-mono font-bold text-[#d4af37]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-white text-sm font-display">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. PROFESSIONAL EXPERIENCE SECTION (BUBBLE TIMELINE) */}
        <section id="experience" className="space-y-6">
          <div className="border-b border-[#d4af37]/20 pb-4 flex items-center gap-3">
            <span className="w-2.5 h-7 rounded-full bg-[#d4af37]" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {t.experience.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                {t.experience.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {t.experience.items.map((item, idx) => (
              <div 
                key={idx}
                className={`bubble-card p-6 sm:p-8 space-y-3 ${
                  item.isCurrent 
                    ? 'border-[#d4af37]/50 shadow-[0_8px_30px_rgba(212,175,55,0.12)]' 
                    : 'border-[#d4af37]/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="bubble-chip px-3 py-0.5 text-[11px] font-mono font-semibold text-[#d4af37] border-[#d4af37]/40">
                          {lang === 'ar' ? 'المنصب الحالي' : 'Poste Actuel'}
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#d4af37] mt-1">
                      {item.company}
                    </div>
                  </div>

                  <div className="text-right sm:text-right font-mono text-xs text-neutral-400">
                    <span className="bubble-chip px-3 py-1 inline-block text-slate-200">
                      {item.period}
                    </span>
                    <span className="block text-[11px] text-[#d4af37]/80 mt-1">
                      📍 {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Tags Bubbles */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tg, tgIdx) => (
                    <span key={tgIdx} className="bubble-chip px-3 py-1 text-[11px] font-mono text-neutral-300">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. EDUCATION & CERTIFICATIONS (BUBBLE GRID) */}
        <section id="education" className="space-y-6">
          <div className="border-b border-[#d4af37]/20 pb-4 flex items-center gap-3">
            <span className="w-2.5 h-7 rounded-full bg-[#d4af37]" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {t.education.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                {t.education.subtitle}
              </p>
            </div>
          </div>

          {/* Degrees Bubbles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.education.degrees.map((deg, idx) => (
              <div key={idx} className="bubble-card p-6 flex flex-col justify-between space-y-4">
                <div>
                  <span className="bubble-chip px-3 py-0.5 text-xs font-mono font-bold text-[#d4af37]">
                    {deg.year}
                  </span>
                  <h3 className="font-bold text-white text-base font-display mt-3">
                    {deg.title}
                  </h3>
                  <div className="text-xs font-mono text-[#d4af37]/80 mt-1">
                    {deg.institution}
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed border-t border-[#d4af37]/15 pt-3">
                  {deg.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Bubbles Strip */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {t.education.certificationsTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.education.certifications.map((cert, idx) => (
                <div key={idx} className="bubble-card p-4 text-center space-y-1">
                  <span className="block text-xs font-bold text-white">
                    {cert.title}
                  </span>
                  <span className="block text-[11px] text-neutral-400 font-mono">
                    {cert.org}
                  </span>
                  <span className="bubble-chip px-2.5 py-0.5 text-[10px] font-mono text-[#d4af37] inline-block mt-1">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TECHNICAL SKILLS & MATRIX (BUBBLES) */}
        <section id="skills" className="space-y-6">
          <div className="border-b border-[#d4af37]/20 pb-4 flex items-center gap-3">
            <span className="w-2.5 h-7 rounded-full bg-[#d4af37]" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {t.skills.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                {t.skills.subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.skills.categories.map((cat, idx) => (
              <div key={idx} className="bubble-card p-6 space-y-3">
                <div className="flex items-center gap-2 border-b border-[#d4af37]/20 pb-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <h3 className="font-bold text-white text-sm font-display">{cat.name}</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {cat.items.map((it, itIdx) => (
                    <li key={itIdx} className="flex items-start gap-2">
                      <span className="text-[#d4af37] font-mono font-bold">›</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CONTACT BUBBLE SECTION */}
        <section id="contact" className="bubble-container p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="bubble-chip px-4 py-1 text-xs font-mono uppercase text-[#d4af37] inline-block">
              {lang === 'ar' ? 'متاح للتواصل المباشر' : 'Prêt pour de nouveaux défis'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              {t.contact.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 no-print">
              <a
                href="tel:0669003959"
                className="w-full sm:w-auto bubble-btn-gold px-8 py-3 text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.contact.callNow}</span>
              </a>

              <a
                href="mailto:y.houari02@gmail.com"
                className="w-full sm:w-auto bubble-btn-dark px-6 py-3 text-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>{t.contact.sendEmail}</span>
              </a>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto bubble-btn-dark px-6 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#d4af37]" />
                <span>{t.profile.actions.pdf}</span>
              </button>
            </div>

            <div className="pt-2 text-xs font-mono text-neutral-400">
              📍 {t.contact.location}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#d4af37]/20 mt-16 py-8 text-xs font-mono text-neutral-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>{t.contact.footerNotice}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0669003959" className="hover:text-[#d4af37] transition-colors">0669 00 39 59</a>
            <span>·</span>
            <a href="mailto:y.houari02@gmail.com" className="hover:text-[#d4af37] transition-colors">y.houari02@gmail.com</a>
            <span>·</span>
            <button 
              onClick={downloadStandaloneHtmlFile}
              className="text-[#d4af37] hover:underline cursor-pointer"
            >
              Export HTML
            </button>
          </div>
        </div>
      </footer>

      {/* PRINT RESUME TEMPLATE (Visible only when printing) */}
      <div className="hidden print-only p-8 text-black bg-white" style={{ display: 'none' }}>
        <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Younes Houari</h1>
            <p className="text-base font-bold text-amber-700 mt-1">{t.profile.title}</p>
            <p className="text-xs text-slate-600 mt-1">
              Né le 11/03/2001 à Sougueur · Célibataire · Service Militaire Accompli · Permis B
            </p>
          </div>
          <div className="text-right text-xs font-mono text-slate-700">
            <div>📞 0669 00 39 59</div>
            <div>✉️ y.houari02@gmail.com</div>
            <div>📍 Baraki - Alger / Sougueur</div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Vision & Ambition Créative
          </h2>
          <p className="text-xs text-slate-800 leading-relaxed italic">
            {t.vision.quote}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Expérience Professionnelle
          </h2>
          <div className="space-y-3">
            {t.experience.items.map((exp, i) => (
              <div key={i} className="text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{exp.role} — {exp.company} ({exp.location})</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-slate-700 mt-0.5 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Diplômes & Certifications
          </h2>
          <div className="space-y-2 text-xs">
            {t.education.degrees.map((deg, i) => (
              <div key={i} className="flex justify-between">
                <span><strong>{deg.year}</strong> : {deg.title} ({deg.institution})</span>
              </div>
            ))}
            <div className="pt-1 text-slate-700">
              Certifications : Anglais B1 · Secourisme Volontaire (2019) · Permis de conduire B · Service National Accompli
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Compétences Clés
          </h2>
          <p className="text-xs text-slate-800">
            Diagnostic électronique multimarque (OBD-II, CAN Bus), kits et sécurité GPL, gestion d'équipe et digitalisation d'atelier par QR codes, arabe, français, anglais.
          </p>
        </div>
      </div>

    </div>
  );
}
