"use client";

import { site } from "@/lib/site";

/** Fixed bottom bar on small screens; pair with floating WhatsApp hidden on `md+` only in parent layout */
export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-white/10 bg-brand-bg/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-lg bg-brand-accent py-3 text-center text-sm font-semibold text-brand-bg"
      >
        WhatsApp
      </a>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-lg border border-white/15 py-3 text-center text-sm font-medium text-white"
      >
        Book call
      </a>
    </div>
  );
}
