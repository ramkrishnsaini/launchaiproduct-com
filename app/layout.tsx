import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
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
      "Build Real AI Products | AI Strategy, Architecture, RAG, Agentic AI",
    template: `%s | ${site.name}`,
  },
  description:
    "Build real AI products with deep AI strategy, architecture, RAG, agentic AI, inference pipelines, memory, orchestration, owned infrastructure, and product build support.",
  keywords: [
    "launch AI product",
    "build AI product",
    "AI product strategy",
    "AI product architecture",
    "RAG",
    "agentic AI",
    "inference",
    "owned AI systems",
    "product build support",
    "AI product roadmap",
    "orchestration",
    "AI memory",
    "retrieval augmented generation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Build Real AI Products with Deep AI Architecture",
    description:
      "AI product strategy, architecture, RAG, agentic systems, inference, orchestration, memory, and build support for professionals creating real AI products with long-term value.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Real AI Products",
    description:
      "Deep AI strategy, architecture, RAG, agentic systems, inference, and owned infrastructure for serious builders creating real AI products.",
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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <MobileStickyCta />
        <FloatingWhatsAppButton />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`}
        </Script>
      </body>
    </html>
  );
}
