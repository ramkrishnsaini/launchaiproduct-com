import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { site } from "@/lib/site";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "LaunchAIProduct.com | AI Product Strategy + Product Build & Delivery",
    template: `%s | ${site.name}`,
  },
  description:
    "AI product strategy (ideas, moat, architecture, roadmap) and product build & delivery support for developers and professionals. Launch your AI product alongside your job—not a wrapper, not generic automation.",
  keywords: [
    "launch AI product",
    "build AI product",
    "AI startup idea",
    "AI product roadmap",
    "AI product architecture",
    "AI product consulting",
    "AI product development support",
    "become AI founder",
    "AI product strategy",
    "AI product build and delivery",
    "build AI product alongside job",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "LaunchAIProduct.com — Idea → architecture → build → real product",
    description:
      "Not idea-only. Not a chatbot shop. AI product strategy plus product build & delivery for serious professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchAIProduct.com — Strategy + build support for AI products",
    description:
      "AI product strategy and product build & delivery. Real product, real execution.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans pb-[4.5rem] md:pb-0">
        {children}
        <MobileStickyCta />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
