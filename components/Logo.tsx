"use client";

import Link from "next/link";
import { useId } from "react";

type LogoProps = {
  className?: string;
  /** Smaller type for footer */
  compact?: boolean;
};

/**
 * Brand mark: launch trajectory + product node on a deep panel — matches site palette.
 */
function LogoMark({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const g1 = `logo-g1-${uid}`;
  const g2 = `logo-g2-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={g1} x1="6" y1="34" x2="34" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#03624c" />
          <stop offset="1" stopColor="#00df82" />
        </linearGradient>
        <linearGradient id={g2} x1="10" y1="30" x2="30" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00df82" stopOpacity="0.25" />
          <stop offset="1" stopColor="#00df82" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {/* Panel */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="11"
        fill="#061212"
        stroke={`url(#${g1})`}
        strokeWidth="1.25"
      />
      {/* Soft glow behind arc */}
      <path
        d="M9 28.5C11 18 18 11 28 9.5"
        stroke={`url(#${g2})`}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Launch arc */}
      <path
        d="M9 28.5C11 18 18 11 28 9.5"
        stroke={`url(#${g1})`}
        strokeWidth="2.25"
        strokeLinecap="round"
        fill="none"
      />
      {/* Product node */}
      <circle cx="28" cy="9.5" r="4" fill="#030f0f" stroke="#00df82" strokeWidth="1.75" />
      <circle cx="28" cy="9.5" r="1.75" fill="#00df82" />
      {/* Base / foundation */}
      <path
        d="M8 30.5h24"
        stroke="#03624c"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <Link
      href="#top"
      className={`group flex items-center gap-2.5 outline-none transition ${className}`}
      aria-label="LaunchAIProduct — home"
    >
      <LogoMark className="h-8 w-8 shrink-0 transition duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_14px_rgba(0,223,130,0.35)] sm:h-9 sm:w-9" />
      <span
        className={`font-display font-semibold tracking-tight ${compact ? "text-base" : "text-base sm:text-lg"}`}
      >
        <span className="text-white transition group-hover:text-zinc-100">Launch</span>
        <span className="text-brand-accent">AI</span>
        <span className="text-white transition group-hover:text-zinc-100">Product</span>
      </span>
    </Link>
  );
}
