"use client";

import React, { useState } from "react";
import Image from "next/image";

type PosType = "salora" | "cafe" | "retail";

export default function Home() {
  const [selectedPos, setSelectedPos] = useState<PosType>("salora");
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    posCategory: "salora",
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setDemoSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-[#E11D48] selection:text-white">
      {/* =========================================================
          TOP NAVIGATION BAR
      ========================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07090E]/80 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF2E79] to-[#E11D48] flex items-center justify-center shadow-lg shadow-[#E11D48]/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl tracking-wider">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
                Sri<span className="text-[#FF2E79]">Biz</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E79] ml-1"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                POS Ecosystem
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#solutions" className="hover:text-white transition-colors">
              POS Solutions
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Platform Features
            </a>
            <a href="#why-sribiz" className="hover:text-white transition-colors">
              Why SriBiz
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex text-xs font-semibold px-4 py-2 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all"
            >
              Sign In
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF2E79] to-[#E11D48] hover:from-[#e11463] hover:to-[#be123c] text-white shadow-lg shadow-[#E11D48]/30 hover:shadow-[#E11D48]/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Free Demo</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================
          HERO SECTION (High-contrast Dark SaaS Style)
      ========================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden gradient-hero-glow">
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E11D48]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-200 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF2E79] animate-pulse"></span>
                <span className="font-semibold text-white">SriBiz Cloud POS Platform</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-300">v2.5 Live</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Next-Gen POS Designed for{" "}
                <span className="gradient-text-pink">Speed & Scalability</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
                Purpose-built Point of Sale software engineered for modern Sri Lankan enterprises.
                Streamline operations across <strong className="text-white font-semibold">Salora Salons & Spas</strong>,{" "}
                <strong className="text-white font-semibold">Cafes & Restaurants</strong>, and{" "}
                <strong className="text-white font-semibold">Retail Stores</strong> with unified cloud intelligence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF2E79] to-[#E11D48] text-white font-bold text-sm shadow-xl shadow-[#E11D48]/30 hover:shadow-[#E11D48]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Explore Our 3 POS Systems</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all"
                >
                  <svg className="w-4 h-4 text-[#FF2E79]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book Free Consultation</span>
                </a>
              </div>

              {/* Micro Benefits Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-slate-300 font-medium pt-4 border-t border-white/[0.08] w-full">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF2E79] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Offline Resilient</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF2E79] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-Outlet Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF2E79] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Hardware Agnostic</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact POS Terminal UI Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/0 shadow-2xl shadow-black/80">
                <div className="rounded-xl bg-[#0D121E] border border-white/10 overflow-hidden shadow-inner">
                  
                  {/* Mock Window Title Bar */}
                  <div className="px-4 py-3 bg-[#131929] border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      <span className="text-xs font-semibold text-slate-400 ml-2">SriBiz Terminal OS • Colombo Outlet</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Cloud Live</span>
                    </div>
                  </div>

                  {/* Mock Dashboard Body */}
                  <div className="p-5 space-y-4">
                    {/* Top Stats Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#182035] rounded-lg p-3 border border-white/5">
                        <span className="text-[11px] text-slate-400 font-medium">Today's Revenue</span>
                        <div className="text-base sm:text-lg font-bold text-white mt-0.5">Rs. 248,650</div>
                        <span className="text-[10px] text-emerald-400 font-semibold">+18.5% today</span>
                      </div>
                      <div className="bg-[#182035] rounded-lg p-3 border border-white/5">
                        <span className="text-[11px] text-slate-400 font-medium">Orders / Bills</span>
                        <div className="text-base sm:text-lg font-bold text-white mt-0.5">184 Transactions</div>
                        <span className="text-[10px] text-rose-400 font-semibold">⚡ 0.8s avg speed</span>
                      </div>
                      <div className="bg-[#182035] rounded-lg p-3 border border-white/5">
                        <span className="text-[11px] text-slate-400 font-medium">Active Branch</span>
                        <div className="text-base sm:text-lg font-bold text-white mt-0.5">Terminal #03</div>
                        <span className="text-[10px] text-indigo-400 font-semibold">Salora & Dine-In</span>
                      </div>
                    </div>

                    {/* Active POS Modes Quick Switcher */}
                    <div className="bg-[#131929] rounded-lg p-3 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-300">Live Operating Engines</span>
                        <span className="text-[10px] text-slate-400">Synchronized Realtime</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-md bg-pink-500/15 border border-pink-500/30 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                          <span className="text-xs font-bold text-pink-300">Salora Salon</span>
                        </div>
                        <div className="p-2.5 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                          <span className="text-xs font-bold text-amber-300">Cafe & Resto</span>
                        </div>
                        <div className="p-2.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-xs font-bold text-emerald-300">Retail Smart</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Transaction Log / Live Feed */}
                    <div className="bg-[#131929] rounded-lg p-3 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pb-1 border-b border-white/5">
                        <span>Invoice / Customer</span>
                        <span>POS Engine</span>
                        <span>Amount</span>
                        <span>Status</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 py-1">
                        <div>
                          <p className="font-semibold text-white">INV-8902 • Salon Package</p>
                          <p className="text-[10px] text-slate-400">Stylist: Anuja • Chair 02</p>
                        </div>
                        <span className="text-[11px] font-semibold text-pink-400">Salora POS</span>
                        <span className="font-bold text-white">Rs. 8,500</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Paid</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 py-1 border-t border-white/5">
                        <div>
                          <p className="font-semibold text-white">INV-8903 • Table 05 Dine-in</p>
                          <p className="text-[10px] text-slate-400">2x Cappuccino, 1x Pastry</p>
                        </div>
                        <span className="text-[11px] font-semibold text-amber-400">Cafe POS</span>
                        <span className="font-bold text-white">Rs. 3,450</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Paid</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating highlight tag */}
                <div className="absolute -bottom-4 -left-4 bg-[#182035] border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-[#FF2E79] flex items-center justify-center font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Zero Hardware Lock-In</p>
                    <p className="text-[11px] text-slate-400">Touch PC, Tablet, or Mobile</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#182035] border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    ☁️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Instant Sync</p>
                    <p className="text-[11px] text-slate-400">Never lose a single bill</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          METRICS & HIGHLIGHTS STRIP
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-[#0A0E17] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">3 Engines</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Salora, Cafe & Retail</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FF2E79] tracking-tight">&lt; 1 Sec</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Lightning Fast Invoicing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100%</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Multi-Store Cloud Sync</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">24 / 7</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Direct Sri Lankan Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE 3 POS SYSTEMS SHOWCASE SECTION
      ========================================================= */}
      <section id="solutions" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/20 text-[#FF2E79] text-xs font-bold uppercase tracking-wider mb-3">
              Specialized Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our 3 Tailored POS Systems
            </h2>
            <p className="text-base text-slate-300 mt-4 leading-relaxed">
              No generic, cluttered interfaces. We have built 3 specialized, industry-focused POS engines 
              crafted precisely for your daily business workflow.
            </p>
          </div>

          {/* Interactive Switcher Buttons */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-full bg-[#111726] border border-white/10 gap-1 sm:gap-2">
              <button
                onClick={() => setSelectedPos("salora")}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedPos === "salora"
                    ? "bg-gradient-to-r from-[#FF2E79] to-[#E11D48] text-white shadow-lg shadow-[#E11D48]/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                1. Salora (Salon & Spa)
              </button>
              <button
                onClick={() => setSelectedPos("cafe")}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedPos === "cafe"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                2. Cafe & Restaurant POS
              </button>
              <button
                onClick={() => setSelectedPos("retail")}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedPos === "retail"
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                3. Retail POS
              </button>
            </div>
          </div>

          {/* Solution 1: SALORA POS */}
          {selectedPos === "salora" && (
            <div className="card-dark-gradient rounded-3xl p-6 sm:p-10 border border-white/10 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold">
                    <span>💇‍♀️ Salon, Wellness & SPA POS</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Salora POS — Designed for Beauty, Wellness & Luxury Spas
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Designed from the ground up for hair salons, aesthetic clinics, luxury spas, nail bars, and wellness centers. 
                    Manage appointments, automate stylist commission splits, and track recurring client packages seamlessly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Calendar & Slot Booking:</strong> Color-coded chair & stylist booking schedule.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Stylist Commission Auto-Split:</strong> Instant payouts, tips, and service tiers.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Client History & Formula Logs:</strong> Hair dye ratios, skin treatments, and notes.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>WhatsApp/SMS Reminders:</strong> Cut down customer no-shows by up to 70%.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Spa Room & Bed Allocation:</strong> Prevent double booking of therapy rooms.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Prepaid Packages & Gift Cards:</strong> Boost recurring visits & loyalty.</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <a
                      href="#contact"
                      onClick={() => setFormData({ ...formData, posCategory: "salora" })}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/30 transition-all"
                    >
                      <span>Request Salora POS Demo</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <span className="text-xs text-slate-400">Used by top salons across Sri Lanka</span>
                  </div>
                </div>

                {/* Right Feature Card */}
                <div className="lg:col-span-5 bg-[#121828] rounded-2xl p-6 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Salora Engine Overview</span>
                    <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Touch Ready</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-[#182136] rounded-xl flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Hair Coloring & Wash</span>
                      <span className="text-xs font-bold text-pink-400">Rs. 12,500</span>
                    </div>
                    <div className="p-3 bg-[#182136] rounded-xl flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Full Body Ayurvedic Spa</span>
                      <span className="text-xs font-bold text-pink-400">Rs. 9,800</span>
                    </div>
                    <div className="p-3 bg-[#182136] rounded-xl flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Bridal Dressing Package</span>
                      <span className="text-xs font-bold text-pink-400">Rs. 45,000</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200">
                    💡 <strong>Tip:</strong> Stylist commission splits are computed automatically at the checkout counter.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solution 2: CAFE & RESTAURANT POS */}
          {selectedPos === "cafe" && (
            <div className="card-dark-gradient rounded-3xl p-6 sm:p-10 border border-white/10 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                    <span>☕ Food & Beverage POS</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Cafe & Restaurant POS — Built for Rush Hours & High Turnover
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Fast order punching, digital Kitchen Display System (KDS), table status layout, and captain mobile ordering 
                    to keep your service fluid and error-free during peak lunch and dinner rushes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Floor & Table Layout:</strong> Visual occupied, vacant, and billing status.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>KDS & Kitchen Printer:</strong> Send instant KOT directly to chef stations.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Captain Ordering App:</strong> Take table-side orders on phone or tablet.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Split Bills & Multi-Tender:</strong> Split by person, seat, or payment type.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Menu Modifiers & Combos:</strong> Extra cheese, spicy level, or beverage combos.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Recipe & Ingredient Stock:</strong> Automatic flour, cheese, and milk deductions.</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <a
                      href="#contact"
                      onClick={() => setFormData({ ...formData, posCategory: "cafe" })}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-600/30 transition-all"
                    >
                      <span>Request Cafe POS Demo</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <span className="text-xs text-slate-400">Suitable for QSR, Dine-in, Cafes & Bakeries</span>
                  </div>
                </div>

                {/* Right Feature Card */}
                <div className="lg:col-span-5 bg-[#121828] rounded-2xl p-6 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Live Table Floor Map</span>
                    <span className="text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">KOT Active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-rose-500/15 border border-rose-500/30 rounded-xl text-center">
                      <span className="text-xs font-bold text-white">Table 01</span>
                      <p className="text-[11px] text-rose-300 font-semibold mt-1">Occupied • Rs. 5,400</p>
                    </div>
                    <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-center">
                      <span className="text-xs font-bold text-white">Table 02</span>
                      <p className="text-[11px] text-emerald-300 font-semibold mt-1">Vacant • Ready</p>
                    </div>
                    <div className="p-3 bg-rose-500/15 border border-rose-500/30 rounded-xl text-center">
                      <span className="text-xs font-bold text-white">Table 03</span>
                      <p className="text-[11px] text-rose-300 font-semibold mt-1">Occupied • Rs. 8,250</p>
                    </div>
                    <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl text-center">
                      <span className="text-xs font-bold text-white">Table 04</span>
                      <p className="text-[11px] text-amber-300 font-semibold mt-1">Billing in Progress</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                    ⚡ <strong>Kitchen Sync:</strong> Orders appear immediately on kitchen monitors within 200 milliseconds.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solution 3: RETAIL POS */}
          {selectedPos === "retail" && (
            <div className="card-dark-gradient rounded-3xl p-6 sm:p-10 border border-white/10 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <span>🛒 Smart Retail & Supermarket POS</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Retail POS — High-Volume Scanning & Real-Time Inventory
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Engineered for groceries, apparel boutiques, electronic stores, pharmacies, and multi-branch retail outlets. 
                    Accelerate your checkout queues, track supplier reorders, and manage barcode labels effortlessly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>High-Speed Barcode Scanning:</strong> Compatible with all 1D/2D laser scanners.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Multi-Branch Inventory Sync:</strong> Real-time warehouse & store stock visibility.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Automated Reorder Alerts:</strong> Never run out of your high-margin fast-moving items.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Batch, Serial & Expiry Tracking:</strong> Crucial for medicines, cosmetics, and food.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Customer CRM & Points:</strong> Member tiers, SMS offers, and birthday discounts.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span><strong>Quick Returns & Credit Notes:</strong> Smooth exchange flow without messy paperwork.</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <a
                      href="#contact"
                      onClick={() => setFormData({ ...formData, posCategory: "retail" })}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all"
                    >
                      <span>Request Retail POS Demo</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <span className="text-xs text-slate-400">Barcode printer & weight scale integrated</span>
                  </div>
                </div>

                {/* Right Feature Card */}
                <div className="lg:col-span-5 bg-[#121828] rounded-2xl p-6 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Fast Barcode Terminal</span>
                    <span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full">Scanned 0.1s</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="p-3 bg-[#182136] rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">SKU-49021 • Linen Shirt (M)</p>
                        <p className="text-[10px] text-slate-400">Stock: 24 in Branch A • 62 in Warehouse</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-400">Rs. 4,890</span>
                    </div>
                    <div className="p-3 bg-[#182136] rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">SKU-89104 • Wireless Headphones</p>
                        <p className="text-[10px] text-slate-400">Serial: SN-982141 • 1 Yr Warranty</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-400">Rs. 14,500</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200">
                    📦 <strong>Multi-Store Sync:</strong> Cashiers can check stock availability in nearby branches directly from the billing screen.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3 Cards Quick Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Salora Card */}
            <div 
              onClick={() => setSelectedPos("salora")}
              className={`cursor-pointer rounded-2xl p-6 transition-all ${
                selectedPos === "salora" 
                  ? "bg-[#181F33] border-2 border-pink-500 shadow-xl shadow-pink-500/10" 
                  : "bg-[#0E1322] border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-4">
                💇‍♀️
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Salora POS</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Salon, Wellness & Spa with stylist bookings, appointments, and client formula histories.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-pink-400">
                <span>View Engine</span>
                <span>→</span>
              </div>
            </div>

            {/* Cafe Card */}
            <div 
              onClick={() => setSelectedPos("cafe")}
              className={`cursor-pointer rounded-2xl p-6 transition-all ${
                selectedPos === "cafe" 
                  ? "bg-[#181F33] border-2 border-amber-500 shadow-xl shadow-amber-500/10" 
                  : "bg-[#0E1322] border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                ☕
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Cafe & Restaurant POS</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Floor map table status, KDS kitchen tickets, split billing, and captain handheld tablets.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>View Engine</span>
                <span>→</span>
              </div>
            </div>

            {/* Retail Card */}
            <div 
              onClick={() => setSelectedPos("retail")}
              className={`cursor-pointer rounded-2xl p-6 transition-all ${
                selectedPos === "retail" 
                  ? "bg-[#181F33] border-2 border-emerald-500 shadow-xl shadow-emerald-500/10" 
                  : "bg-[#0E1322] border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                🛒
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Retail POS</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-speed barcode checkout, multi-store stock visibility, and supplier reordering.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>View Engine</span>
                <span>→</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          WHY SReBIZ / CORE PLATFORM ADVANTAGES (Concise Grid)
      ========================================================= */}
      <section id="features" className="py-20 bg-[#0A0D15] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FF2E79]">Built for Performance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Why Businesses Rely on SriBiz
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              Compact, fast, and engineered to eliminate checkout bottlenecks and inventory discrepancies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#101524] p-6 rounded-2xl border border-white/5 hover:border-[#FF2E79]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FF2E79]/15 text-[#FF2E79] flex items-center justify-center text-xl font-bold mb-4">
                ☁️
              </div>
              <h3 className="text-base font-bold text-white mb-2">Real-Time Cloud Sync</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Access your sales figures, cash drawer, and inventory counts from anywhere on your phone or laptop in real-time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#101524] p-6 rounded-2xl border border-white/5 hover:border-[#FF2E79]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center text-xl font-bold mb-4">
                ⚡
              </div>
              <h3 className="text-base font-bold text-white mb-2">Sub-Second Billing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero lag when punching receipts or scanning barcodes. Keep lines moving rapidly even during peak festive hours.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#101524] p-6 rounded-2xl border border-white/5 hover:border-[#FF2E79]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xl font-bold mb-4">
                📊
              </div>
              <h3 className="text-base font-bold text-white mb-2">Detailed Tax & P&L Reports</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated daily closing summaries (Z-Reports), VAT/SSCL tax breakdowns, and profit margin analysis in one click.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#101524] p-6 rounded-2xl border border-white/5 hover:border-[#FF2E79]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-xl font-bold mb-4">
                🔒
              </div>
              <h3 className="text-base font-bold text-white mb-2">Offline Safeguard</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Internet drops out? SriBiz continues issuing receipts and saves all data locally, syncing automatically once back online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT & DEMO INQUIRY (Compact & Action-Oriented)
      ========================================================= */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-dark-gradient rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2E79]/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-[#FF2E79] uppercase tracking-widest">Connect with Us</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                Get a Free Live Demo of SriBiz POS
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Tell us about your business, and our team will set up a customized demo terminal for you today.
              </p>
            </div>

            {demoSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Thank You, {formData.name}!</h3>
                <p className="text-sm text-slate-300">
                  Our POS specialist will reach out to you at <strong className="text-emerald-400">{formData.phone}</strong> shortly 
                  with a personalized walkthrough of your selected system.
                </p>
                <button
                  onClick={() => setDemoSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kamal Perera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F1A] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF2E79] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F1A] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF2E79] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Business or Store Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Glamour Hair Studio / Ceylon Cafe"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F1A] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF2E79] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Which POS Do You Need? *
                    </label>
                    <select
                      value={formData.posCategory}
                      onChange={(e) => setFormData({ ...formData, posCategory: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F1A] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF2E79] transition-all"
                    >
                      <option value="salora">Salora — Salon, Wellness & Spa POS</option>
                      <option value="cafe">Cafe & Restaurant POS</option>
                      <option value="retail">Retail & Supermarket POS</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF2E79] to-[#E11D48] text-white font-bold text-sm shadow-xl shadow-[#E11D48]/30 hover:shadow-[#E11D48]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Schedule My Free Demo
                  </button>
                  <p className="text-[11px] text-slate-400 mt-2">
                    No credit card required. Free onboarding support across Sri Lanka.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.08] bg-[#05070B] py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF2E79] to-[#E11D48] flex items-center justify-center font-bold text-white text-sm">
                S
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Sri<span className="text-[#FF2E79]">Biz</span>
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-xs text-slate-400">Intelligent Point of Sale Ecosystem</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
              <a href="#solutions" className="hover:text-white transition-colors">Salora POS</a>
              <a href="#solutions" className="hover:text-white transition-colors">Cafe & Restaurant POS</a>
              <a href="#solutions" className="hover:text-white transition-colors">Retail POS</a>
              <a href="#contact" className="hover:text-white transition-colors">Free Demo</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} SriBiz. All rights reserved. Sri Lankan SaaS Engineering.</p>
            <p>Salora • Cafe & Restaurant • Retail Point of Sale</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
