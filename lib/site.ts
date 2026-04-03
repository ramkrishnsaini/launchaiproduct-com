/**
 * Replace placeholders (email, URLs) before production if needed.
 */
/** Canonical site URL — set NEXT_PUBLIC_SITE_URL when building for GitHub Pages */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://launchaiproduct.com";

export const site = {
  name: "LaunchAIProduct.com",
  tagline: "Idea → architecture → build — AI product strategy + product build & delivery",
  url: siteUrl,
  whatsappUrl:
    "https://wa.me/919022455556?text=Hi%2C%20I%27d%20like%20to%20connect%20about%20LaunchAIProduct.",
  bookingUrl:
    "https://wa.me/919022455556?text=Hi%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.",
  email: "hello@launchaiproduct.com",
} as const;

export const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#how-we-work", label: "Strategy & build" },
  { href: "#budgets", label: "Budgets" },
  { href: "#audience", label: "Who" },
  { href: "#different", label: "Why us" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
