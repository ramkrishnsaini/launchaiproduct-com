"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { site, navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <div className="min-w-0 shrink">
          <Logo />
        </div>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-2.5 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg border border-brand-accent/40 bg-brand-accent/10 px-3 py-2 text-sm font-medium text-brand-accent transition hover:border-brand-accent hover:bg-brand-accent/15"
          >
            Book call
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-brand-accent px-3 py-2 text-sm font-semibold text-brand-bg transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/10 p-2.5 text-zinc-300 transition hover:bg-white/[0.04] hover:text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/5 bg-brand-bg lg:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 pb-5 pt-2 sm:px-6">
            <nav className="flex max-h-[min(70vh,28rem)] flex-col gap-0.5 overflow-y-auto overscroll-contain" aria-label="Mobile">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-3 text-[15px] text-zinc-200 transition hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-brand-accent/40 py-3 text-center text-sm font-medium text-brand-accent"
              >
                Book call
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-brand-accent py-3 text-center text-sm font-semibold text-brand-bg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
