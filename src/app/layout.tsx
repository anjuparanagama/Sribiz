import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SriBiz | Modern Point of Sale Ecosystem for Sri Lanka",
  description:
    "Intelligent, cloud-powered POS solutions built for Salora Salons & Spas, Cafes & Restaurants, and Retail stores. Fast, reliable, and multi-branch ready.",
  keywords: [
    "SriBiz",
    "POS Sri Lanka",
    "Salora Salon POS",
    "Restaurant POS",
    "Cafe POS",
    "Retail POS",
    "Point of Sale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#07090E] text-slate-100 antialiased selection:bg-[#E11D48] selection:text-white">
        {children}
      </body>
    </html>
  );
}
