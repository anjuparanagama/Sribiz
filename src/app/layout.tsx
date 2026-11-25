import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SriBiz Core | Modern Point of Sale Ecosystem for Sri Lanka",
  description:
    "Cloud POS for Salora Salons & Spas, Cafes & Restaurants, and Retail stores. Complete with visual appointment booking, stylist commissions, customer formula notes, and multi-branch sync.",
  keywords: [
    "SriBiz Core",
    "SriBiz",
    "Salora Salon POS",
    "Salon POS Sri Lanka",
    "Spa POS Software",
    "Stylist Commission System",
    "Appointment Booking POS",
    "Restaurant POS",
    "Cafe POS",
    "Retail POS Sri Lanka",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
  ],
};

// Default to dark theme unless user explicitly chose light.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased selection:bg-brand-dark selection:text-white">
        {children}
      </body>
    </html>
  );
}
