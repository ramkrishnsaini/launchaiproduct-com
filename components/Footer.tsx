import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo compact className="-ml-0.5" />
          <p className="mt-2 max-w-sm text-sm text-zinc-500">{site.tagline}</p>
          <p className="mt-4 text-xs text-zinc-600">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400" aria-label="Footer">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-zinc-500">
          <p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-brand-accent"
            >
              WhatsApp
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${site.email}`} className="text-zinc-300 hover:text-brand-accent">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
