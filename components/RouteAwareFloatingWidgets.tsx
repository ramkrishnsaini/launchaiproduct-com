"use client";

import { usePathname } from "next/navigation";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { MobileStickyCta } from "@/components/MobileStickyCta";

export function RouteAwareFloatingWidgets() {
  const pathname = usePathname();
  const isProposalPage = pathname === "/proposal";

  if (isProposalPage) {
    return null;
  }

  return (
    <>
      <MobileStickyCta />
      <FloatingWhatsAppButton />
    </>
  );
}
