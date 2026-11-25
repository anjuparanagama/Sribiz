"use client";

import React, { useState } from "react";

type PosId = "salora" | "cafe" | "retail";

type Pos = {
  id: PosId;
  short: string;
  tab: string;
  icon: string;
  badge: string;
  title: string;
  desc: string;
  note: string;
  comingSoon?: boolean;
  features: [string, string][];
  previewTitle: string;
  previewTag: string;
  preview: { name: string; meta?: string; value: string }[];
  tip: string;
  // Static class strings so Tailwind can detect them
  c: {
    tabActive: string;
    chip: string;
    check: string;
    text: string;
    btn: string;
    ring: string;
    tipBox: string;
  };
};

const POS_LIST: Pos[] = [
  {
    id: "salora",
    short: "Salora",
    tab: "Salora — Salon & Spa",
    icon: "💇‍♀️",
    badge: "Salon, Wellness & SPA POS",
    title: "Salora POS",
    desc: "Engineered from Salon_POS for hair salons, beauty clinics and luxury spas. Visual appointment calendar, stylist commissions, customer formula notes, retail stock, and thermal/WhatsApp billing in one cloud system.",
    note: "Used by premier salons across Sri Lanka",
    features: [
      ["Appointment Calendar", "Chair & stylist booking with live status pipeline"],
      ["1-Click Express Checkout", "Services + retail products in one cart, split payments"],
      ["Stylist Commission Engine", "Auto-split commission rates, tips & staff contribution"],
      ["Client CRM & Formula Notes", "Hair color formulas, allergy alerts & lifetime history"],
      ["WhatsApp & Thermal Receipts", "Instant WhatsApp receipt sharing & 80mm/58mm printing"],
      ["Bridal & Service Packages", "Bundled treatments, seasonal combos & gift vouchers"],
      ["Salon Retail Stock Control", "Barcode scanning, shampoo & serum stock, reorder alerts"],
      ["Daily Ledger & Z-Report", "Cash drawer balancing, petty cash & EOD revenue summary"],
    ],
    previewTitle: "Salora Live Floor & Checkout",
    previewTag: "Chair 02 Active",
    preview: [
      { name: "Hair Colour & Keratin Spa", meta: "Stylist: Anuja • Chair 02", value: "Rs. 18,500" },
      { name: "Bridal Dressing & Makeover Package", meta: "Lead Stylist: Dilani • Room 01", value: "Rs. 45,000" },
      { name: "Moroccanoil Treatment 100ml (Retail)", meta: "Barcode: 7290011521 • Qty: 1", value: "Rs. 9,200" },
      { name: "Ayurvedic Head & Shoulder Spa", meta: "Therapist: Kusal • Station 03", value: "Rs. 4,500" },
    ],
    tip: "1-click checkout converts booked appointments into paid invoices with automatic stylist commission allocation.",
    c: {
      tabActive: "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-rose-600/30",
      chip: "bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400",
      check: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
      text: "text-pink-600 dark:text-pink-400",
      btn: "bg-pink-600 hover:bg-pink-700 shadow-pink-600/30",
      ring: "border-pink-500 shadow-pink-500/10",
      tipBox: "bg-pink-500/10 border-pink-500/20 text-pink-700 dark:text-pink-200",
    },
  },
  {
    id: "cafe",
    short: "Cafe",
    tab: "Cafe & Restaurant",
    comingSoon: true,
    icon: "☕",
    badge: "Food & Beverage POS",
    title: "Cafe & Restaurant POS",
    desc: "Fast order taking, kitchen display and table management that keep service smooth during rush hours.",
    note: "Dine-in, takeaway, cafes & bakeries",
    features: [
      ["Table floor map", "Live table status"],
      ["KDS & KOT printing", "Orders straight to kitchen"],
      ["Captain ordering app", "Order from phone / tablet"],
      ["Split bills", "By seat or payment type"],
      ["Modifiers & combos", "Extras, sizes, meal deals"],
      ["Recipe stock", "Auto ingredient deduction"],
    ],
    previewTitle: "Floor map",
    previewTag: "KOT active",
    preview: [
      { name: "Table 01", meta: "Occupied • 4 guests", value: "Rs. 5,400" },
      { name: "Table 03", meta: "Occupied • 2 guests", value: "Rs. 8,250" },
      { name: "Table 04", meta: "Billing in progress", value: "Rs. 3,450" },
    ],
    tip: "Orders reach the kitchen screen in under a second.",
    c: {
      tabActive: "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-600/30",
      chip: "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400",
      check: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
      text: "text-amber-700 dark:text-amber-400",
      btn: "bg-amber-600 hover:bg-amber-700 shadow-amber-600/30",
      ring: "border-amber-500 shadow-amber-500/10",
      tipBox: "bg-amber-500/10 border-amber-500/20 text-amber-800 dark:text-amber-200",
    },
  },
  {
    id: "retail",
    short: "Retail",
    tab: "Retail POS",
    comingSoon: true,
    icon: "🛒",
    badge: "Retail & Supermarket POS",
    title: "Retail POS",
    desc: "For groceries, boutiques, electronics and pharmacies. Fast barcode checkout with live stock across all branches.",
    note: "Barcode printer & scale ready",
    features: [
      ["Barcode scanning", "All 1D / 2D scanners"],
      ["Multi-branch stock", "Live inventory sync"],
      ["Reorder alerts", "Never run out"],
      ["Batch & expiry tracking", "Pharmacy & food ready"],
      ["Loyalty points", "Customer CRM"],
      ["Returns & credit notes", "Quick exchanges"],
    ],
    previewTitle: "Checkout",
    previewTag: "Scanned 0.1s",
    preview: [
      { name: "Linen Shirt (M)", meta: "SKU-49021 • 24 in stock", value: "Rs. 4,890" },
      { name: "Wireless Headphones", meta: "SN-982141 • 1 yr warranty", value: "Rs. 14,500" },
      { name: "Basmati Rice 5kg", meta: "SKU-10233 • Batch B12", value: "Rs. 2,950" },
    ],
    tip: "Cashiers can check stock in other branches from the billing screen.",
    c: {
      tabActive: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/30",
      chip: "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      check: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
      text: "text-emerald-700 dark:text-emerald-400",
      btn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30",
      ring: "border-emerald-500 shadow-emerald-500/10",
      tipBox: "bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-200",
    },
  },
];

const NAV = [
  { href: "#solutions", label: "POS Solutions" },
  { href: "#salora", label: "Salora Salon POS" },
  { href: "#features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

const SALORA_MODULES = [
  {
    icon: "📅",
    title: "Appointment Calendar & Booking",
    tag: "Calendar & Scheduling",
    desc: "Complete visual calendar with multi-stylist allocation, chair management, and live appointment workflow.",
    bullets: [
      "Day, week & month visual booking calendar",
      "Chair, station & private treatment room allocation",
      "Live status: Scheduled, Confirmed, In-Progress, Completed",
      "Direct 1-click conversion to checkout bill",
      "SMS & WhatsApp booking reminders to reduce no-shows",
    ],
  },
  {
    icon: "⚡",
    title: "Smart Touch Checkout & Billing",
    tag: "Express POS",
    desc: "Lightning-fast billing combining salon services, packages, and retail products in a single customer cart.",
    bullets: [
      "Unified cart: hair/beauty services + retail shelves",
      "Multi-tender split payments (Cash, Card, Bank, Voucher)",
      "Instant WhatsApp digital receipt & 80mm/58mm thermal printing",
      "Line discounts, service charges & change calculation",
      "Seamless walk-in checkout without advance booking",
    ],
  },
  {
    icon: "✂️",
    title: "Staff & Stylist Commission Engine",
    tag: "Payroll & Commissions",
    desc: "Automate commission calculations and tips per service without manual spreadsheet tracking.",
    bullets: [
      "Auto-split commissions per service rendered",
      "Tiered commission rates based on staff experience",
      "Daily & weekly tip collection & distribution",
      "Staff shift rosters, chair availability & attendance",
      "Daily stylist revenue contribution & performance reports",
    ],
  },
  {
    icon: "👤",
    title: "Salon CRM & Treatment Formulas",
    tag: "Client Care & History",
    desc: "Keep detailed client treatment logs, hair color chemical formulas, and allergies ready at every visit.",
    bullets: [
      "Lifetime visit history, total spend & frequency",
      "Hair dye & chemical formulas, skin treatment notes",
      "Allergy warnings & client-specific preferences",
      "Customer loyalty points & repeat visit rewards",
      "Direct WhatsApp chat link for follow-ups",
    ],
  },
  {
    icon: "🧴",
    title: "Salon Retail Inventory Control",
    tag: "Retail Products",
    desc: "Manage shampoos, conditioners, oils, and styling tools with real-time stock levels and barcode lookup.",
    bullets: [
      "Fast barcode scanning (1D & 2D) at checkout",
      "Stock level tracking with low-stock reorder warnings",
      "Brand, category & volume/size filtering",
      "Auto-deduction when retail items are sold in bills",
      "Supplier and reorder management",
    ],
  },
  {
    icon: "🎁",
    title: "Bridal & Multi-Service Packages",
    tag: "Packages & Combos",
    desc: "Create and sell high-value bridal packages, seasonal makeovers, and bundled spa treatments.",
    bullets: [
      "Bridal dressing & makeover package bundling",
      "Pre-set service combos with bundled discounts",
      "Multi-session packages with redemption tracking",
      "Service durations with automatic chair buffer times",
      "Custom service category management (Hair, Skin, Spa)",
    ],
  },
  {
    icon: "📒",
    title: "Cash Drawer Ledger & Z-Report",
    tag: "Daily Finance",
    desc: "Reconcile daily cash collections, record salon expenses, and generate audit-ready end-of-day reports.",
    bullets: [
      "Cash drawer opening & closing balance reconciliation",
      "Daily expense & petty cash tracking with categories",
      "End-of-day Z-Report & daily sales summary",
      "Payment method breakdown (Cash vs Card vs Bank)",
      "Discrepancy alerts and audit history",
    ],
  },
  {
    icon: "📱",
    title: "Offline PWA & Multi-Branch Ready",
    tag: "Touch & Multi-Branch",
    desc: "Installable Progressive Web App that keeps billing even when internet drops, syncing branches in real time.",
    bullets: [
      "Works 100% offline — cash billing never stops",
      "Background auto-sync when internet reconnects",
      "Installable PWA for iPads, Android tablets & Touch POS",
      "Multi-branch salon management with centralized reports",
      "Role-based access (Owner, Manager, Cashier, Stylist)",
    ],
  },
];

const ADVANTAGES = [
  { icon: "☁️", title: "Real-time cloud sync", desc: "See sales and stock from anywhere, on any device." },
  { icon: "⚡", title: "Sub-second billing", desc: "No lag at the counter, even at peak hours." },
  { icon: "📊", title: "Tax & P&L reports", desc: "Z-reports, VAT/SSCL breakdowns and margins in one click." },
  { icon: "🔒", title: "Works offline", desc: "Keeps billing without internet and syncs when back online." },
];

const STATS = [
  { value: "3", label: "Specialised POS systems" },
  { value: "< 1s", label: "Invoice speed", brand: true },
  { value: "100%", label: "Multi-branch cloud sync" },
  { value: "24/7", label: "Local support" },
];

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      className="w-10 h-10 rounded-full border border-line bg-surface hover:bg-surface-2 text-ink flex items-center justify-center transition-colors"
    >
      {/* Moon in light mode, sun in dark mode (pure CSS, no hydration mismatch) */}
      <svg className="w-5 h-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <svg className="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2.5 shrink-0">
      <div
        className={`${small ? "w-8 h-8 rounded-lg text-sm" : "w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-lg sm:text-xl"} bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center shadow-lg shadow-brand-dark/30 text-white font-extrabold`}
      >
        S
      </div>
      <span className={`${small ? "text-lg" : "text-xl sm:text-2xl"} font-extrabold tracking-tight text-ink`}>
        Sri<span className="text-brand">Biz</span> Core
      </span>
    </a>
  );
}

export default function Home() {
  const [selectedPos, setSelectedPos] = useState<PosId>("salora");
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", businessName: "", posCategory: "salora" });

  const active = POS_LIST.find((p) => p.id === selectedPos)!;

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setDemoSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-bg border border-line text-ink placeholder:text-subtle text-sm focus:outline-none focus:border-brand transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-ink transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg shadow-brand-dark/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Get Free Demo <ArrowIcon />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="md:hidden w-10 h-10 rounded-full border border-line bg-surface text-ink flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-line bg-bg px-4 py-4 space-y-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-semibold text-ink hover:bg-surface-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white font-bold"
            >
              Get Free Demo <ArrowIcon />
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden gradient-hero-glow">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[300px] bg-brand-dark/10 dark:bg-brand-dark/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-line text-xs font-semibold text-ink mb-5">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              SriBiz Core Cloud POS Platform
            </div>

            <h1 className="text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mb-5">
              One POS ecosystem, <span className="gradient-text-pink">built for your business</span>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Specialised POS systems for <strong className="text-ink">Salons & Spas</strong>,{" "}
              <strong className="text-ink">Cafes & Restaurants</strong> and <strong className="text-ink">Retail stores</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white font-bold text-sm shadow-xl shadow-brand-dark/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Explore POS Systems <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface hover:bg-surface-2 text-ink font-semibold text-sm border border-line transition-colors"
              >
                Book Free Demo
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-muted font-medium">
              {["Works offline", "Multi-branch", "Any device"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-brand">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            <div className="rounded-2xl p-1 bg-gradient-to-b from-line to-transparent shadow-2xl shadow-slate-900/10 dark:shadow-black/60">
              <div className="rounded-xl bg-surface border border-line overflow-hidden">
                <div className="px-4 py-3 bg-surface-2 border-b border-line flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] sm:text-xs font-semibold text-subtle ml-2 truncate">SriBiz Core • Colombo Outlet</span>
                  </div>
                  <span className="shrink-0 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live
                  </span>
                </div>

                <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { l: "Revenue", v: "Rs. 248K", s: "+18.5%", sc: "text-emerald-600 dark:text-emerald-400" },
                      { l: "Bills", v: "184", s: "0.8s avg", sc: "text-rose-600 dark:text-rose-400" },
                      { l: "Branches", v: "3", s: "All synced", sc: "text-indigo-600 dark:text-indigo-400" },
                    ].map((s) => (
                      <div key={s.l} className="bg-surface-2 rounded-lg p-2.5 sm:p-3 border border-line">
                        <span className="text-[10px] sm:text-[11px] text-subtle font-medium">{s.l}</span>
                        <div className="text-sm sm:text-lg font-bold text-ink mt-0.5">{s.v}</div>
                        <span className={`text-[10px] font-semibold ${s.sc}`}>{s.s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 sm:p-2.5 rounded-md bg-pink-500/10 border border-pink-500/25 text-[11px] sm:text-xs font-bold text-pink-600 dark:text-pink-300 text-center">
                      Salora
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-md bg-amber-500/10 border border-amber-500/25 text-[11px] sm:text-xs font-bold text-amber-700 dark:text-amber-300 text-center flex items-center justify-center gap-1">
                      <span>Cafe</span>
                      <span className="text-[8px] sm:text-[9px] px-1 py-0.5 rounded bg-amber-500/20 uppercase font-extrabold text-amber-600 dark:text-amber-400">Soon</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[11px] sm:text-xs font-bold text-emerald-700 dark:text-emerald-300 text-center flex items-center justify-center gap-1">
                      <span>Retail</span>
                      <span className="text-[8px] sm:text-[9px] px-1 py-0.5 rounded bg-emerald-500/20 uppercase font-extrabold text-emerald-700 dark:text-emerald-300">Soon</span>
                    </div>
                  </div>

                  <div className="bg-surface-2 rounded-lg p-3 border border-line divide-y divide-line">
                    {[
                      { t: "INV-8902 • Salon Package", m: "Salora POS", a: "Rs. 8,500", mc: "text-pink-600 dark:text-pink-400" },
                      { t: "INV-8903 • Table 05", m: "Cafe POS", a: "Rs. 3,450", mc: "text-amber-700 dark:text-amber-400" },
                    ].map((r) => (
                      <div key={r.t} className="flex items-center justify-between gap-2 py-2 first:pt-0 last:pb-0 text-xs">
                        <div className="min-w-0">
                          <p className="font-semibold text-ink truncate">{r.t}</p>
                          <p className={`text-[10px] font-semibold ${r.mc}`}>{r.m}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-bold text-ink">{r.a}</span>
                          <span className="hidden sm:inline px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">Paid</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges: inside bounds on mobile-safe screens only */}
            <div className="hidden sm:flex absolute -bottom-5 left-4 bg-surface border border-line rounded-xl p-3 shadow-xl items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand/15 flex items-center justify-center">⚡</div>
              <div>
                <p className="text-xs font-bold text-ink">No hardware lock-in</p>
                <p className="text-[11px] text-subtle">PC, tablet or mobile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-line bg-bg-soft py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${s.brand ? "text-brand" : "text-ink"}`}>{s.value}</div>
              <div className="text-xs sm:text-sm text-subtle font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POS SOLUTIONS ================= */}
      <section id="solutions" className="py-16 sm:py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-brand">Our POS Systems</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mt-2">
              Three POS systems, one platform
            </h2>
            <p className="text-sm sm:text-base text-muted mt-3">Each one built for how your business actually works.</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-3 w-full sm:w-auto p-1.5 rounded-2xl sm:rounded-full bg-surface-2 border border-line gap-1">
              {POS_LIST.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPos(p.id)}
                  className={`px-2 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all inline-flex items-center justify-center gap-1.5 ${
                    selectedPos === p.id ? p.c.tabActive : "text-subtle hover:text-ink"
                  }`}
                >
                  <span className="sm:hidden">{p.short}</span>
                  <span className="hidden sm:inline">{p.tab}</span>
                  {p.comingSoon && (
                    <span
                      className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full ${
                        selectedPos === p.id
                          ? "bg-white/20 text-white"
                          : "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active POS detail */}
          <div className="rounded-3xl p-5 sm:p-8 lg:p-10 bg-surface border border-line shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${active.c.chip}`}>
                    {active.icon} {active.badge}
                  </span>
                  {active.comingSoon ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      ⏳ Coming Soon — Pre-register
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      ✓ Available Now
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink">{active.title}</h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">{active.desc}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.features.map(([title, sub]) => (
                    <li key={title} className="flex items-start gap-2.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${active.c.check}`}>✓</span>
                      <span className="text-sm">
                        <strong className="text-ink font-semibold">{title}</strong>
                        <span className="block text-xs text-subtle">{sub}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => setFormData((f) => ({ ...f, posCategory: active.id }))}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg transition-colors ${active.c.btn}`}
                  >
                    {active.comingSoon ? `Pre-register for ${active.short} POS` : `Request ${active.short} Demo`} <ArrowIcon />
                  </a>
                  <span className="text-xs text-subtle text-center sm:text-left">{active.note}</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-2 rounded-2xl p-4 sm:p-6 border border-line space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <span className={`text-xs font-bold uppercase tracking-wider ${active.c.text}`}>{active.previewTitle}</span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    {active.previewTag}
                  </span>
                </div>
                {active.preview.map((row) => (
                  <div key={row.name} className="p-3 bg-surface rounded-xl border border-line flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-ink truncate">{row.name}</p>
                      {row.meta && <p className="text-[11px] text-subtle truncate">{row.meta}</p>}
                    </div>
                    <span className={`text-xs sm:text-sm font-bold shrink-0 ${active.c.text}`}>{row.value}</span>
                  </div>
                ))}
                <div className={`p-3 rounded-xl border text-xs ${active.c.tipBox}`}>💡 {active.tip}</div>
              </div>
            </div>
          </div>

          {/* Quick cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {POS_LIST.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPos(p.id)}
                className={`text-left rounded-2xl p-5 sm:p-6 bg-surface transition-all ${
                  selectedPos === p.id ? `border-2 shadow-xl ${p.c.ring}` : "border border-line hover:border-subtle/40"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.c.check}`}>{p.icon}</div>
                  {p.comingSoon ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      Available Now
                    </span>
                  )}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-ink">{p.title}</h4>
                <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">{p.desc}</p>
                <span className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${p.c.text}`}>
                  View details <ArrowIcon className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SALORA FEATURE SUITE ================= */}
      <section id="salora" className="py-16 sm:py-20 lg:py-28 border-t border-line bg-bg-soft/40 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/25 text-xs font-bold text-pink-600 dark:text-pink-400 mb-3">
              💇‍♀️ Powered by Salora Salon POS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Everything your salon needs, <span className="gradient-text-pink">all in one place</span>
            </h2>
            <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">
              Engineered specifically for Sri Lankan hair salons, beauty clinics, barbershops, and luxury spas.
              From front-desk booking to back-office stylist payroll and stock control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SALORA_MODULES.map((m) => (
              <div
                key={m.title}
                className="bg-surface rounded-2xl p-5 sm:p-6 border border-line hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {m.icon}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{m.title}</h3>
                  <p className="text-xs text-muted mb-4 leading-relaxed">{m.desc}</p>

                  <ul className="space-y-2 border-t border-line/60 pt-3">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-ink/90">
                        <span className="text-pink-600 dark:text-pink-400 font-bold shrink-0 mt-0.5">✓</span>
                        <span className="text-muted leading-tight">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-line">
                  <a
                    href="#contact"
                    onClick={() => setFormData((f) => ({ ...f, posCategory: "salora" }))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 transition-colors"
                  >
                    Get Salora Demo <ArrowIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick highlight banner */}
          <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-transparent border border-pink-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-pink-500/30 shrink-0">
                💇‍♀️
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-ink">Ready to modernize your salon with Salora?</h4>
                <p className="text-xs sm:text-sm text-muted mt-0.5">
                  Set up your salon services, stylist commissions, and customer formulas in less than 15 minutes.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              onClick={() => setFormData((f) => ({ ...f, posCategory: "salora" }))}
              className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Book Free Salon Demo →
            </a>
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section id="features" className="py-16 sm:py-20 bg-bg-soft border-y border-line scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-brand">Why SriBiz Core</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mt-2">Fast, reliable, simple</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="bg-surface p-5 sm:p-6 rounded-2xl border border-line hover:border-brand/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-xl mb-4">{a.icon}</div>
                <h3 className="text-base font-bold text-ink mb-1.5">{a.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-16 sm:py-20 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-surface border border-line shadow-sm">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative text-center mb-8">
              <span className="text-xs font-bold text-brand uppercase tracking-widest">Free Demo</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mt-2">Try SriBiz Core POS for free</h2>
              <p className="text-sm text-muted mt-2">Tell us about your business and we&apos;ll set up a demo for you.</p>
            </div>

            {demoSubmitted ? (
              <div className="relative p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                <h3 className="text-xl font-bold text-ink">Thank you, {formData.name}!</h3>
                <p className="text-sm text-muted">
                  We&apos;ll contact you at <strong className="text-emerald-600 dark:text-emerald-400">{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setDemoSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-full text-xs font-bold bg-surface-2 hover:bg-line text-ink border border-line transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="relative space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-xs font-semibold text-muted mb-1.5">Full name *</span>
                    <input
                      type="text"
                      required
                      placeholder="Kamal Perera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-muted mb-1.5">Phone / WhatsApp *</span>
                    <input
                      type="tel"
                      required
                      placeholder="077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-muted mb-1.5">Business name</span>
                    <input
                      type="text"
                      placeholder="Your business"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-muted mb-1.5">POS type *</span>
                    <select
                      value={formData.posCategory}
                      onChange={(e) => setFormData({ ...formData, posCategory: e.target.value })}
                      className={inputCls}
                    >
                      <option value="salora">Salora — Salon, Wellness & Spa (Available Now)</option>
                      <option value="cafe">Cafe & Restaurant (Coming Soon)</option>
                      <option value="retail">Retail (Coming Soon)</option>
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto sm:mx-auto sm:flex px-8 py-3.5 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white font-bold text-sm shadow-xl shadow-brand-dark/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Book My Free Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-line bg-bg-soft py-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-line">
            <Logo small />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted font-medium">
              {POS_LIST.map((p) => (
                <a
                  key={p.id}
                  href="#solutions"
                  onClick={() => setSelectedPos(p.id)}
                  className="hover:text-ink transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{p.title}</span>
                  {p.comingSoon && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                      Soon
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <p className="pt-6 text-center text-xs text-subtle">© {new Date().getFullYear()} SriBiz Core. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
