import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AROMA — Specialty Coffee Roasters & Slow Café",
  description:
    "Coffee, Crafted Slowly. Specialty single-origin coffees, hand-poured brews, and artisanal morning pastries in an unhurried, Scandinavian-inspired sanctuary.",
  keywords: [
    "specialty coffee",
    "coffee roasters",
    "pour over",
    "espresso",
    "cold brew",
    "artisan cafe",
    "single origin coffee",
  ],
  openGraph: {
    title: "AROMA — Specialty Coffee Roasters & Slow Café",
    description: "Coffee, Crafted Slowly. Specialty coffee, freshly brewed and thoughtfully made.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#100e0b] text-[#F9F6F1] font-sans antialiased selection:bg-[#B07040] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
