"use client";

import React from "react";

interface ShineButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function ShineButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  type = "button",
  ariaLabel,
}: ShineButtonProps) {
  const isFullWidth = className.includes("w-full");

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-7 py-3.5 text-sm sm:text-base",
  }[size];

  // Inner button surface styling based on variant
  const surfaceClasses = {
    primary:
      "bg-[#0a2018] text-white hover:bg-[#113327] shadow-[0_10px_26px_rgba(10,32,24,0.22)]",
    secondary:
      "bg-white/95 text-slate-800 hover:bg-emerald-50/40 hover:text-emerald-950 shadow-2xs border border-slate-200/80",
    outline:
      "bg-white/90 text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-2xs",
  }[variant];

  // Rotating conic beam gradient colors (Emerald/Teal/Cyan brand theme)
  const beamGradient =
    variant === "primary"
      ? "conic-gradient(from 0deg, transparent 0deg 200deg, rgba(16, 185, 129, 0.4) 250deg, #10b981 290deg, #34d399 330deg, #06b6d4 355deg, transparent 360deg)"
      : "conic-gradient(from 0deg, transparent 0deg 200deg, rgba(16, 185, 129, 0.25) 250deg, #10b981 290deg, #06b6d4 340deg, transparent 360deg)";

  const baseRimBg =
    variant === "primary"
      ? "bg-emerald-950/40"
      : "bg-slate-200/90";

  const content = (
    <div
      className={`group relative inline-flex overflow-hidden rounded-full p-[1.5px] ${baseRimBg} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_24px_rgba(16,185,129,0.22)] ${
        isFullWidth ? "w-full" : ""
      } ${className}`}
    >
      {/* 1. Ambient blurred glow aura */}
      <span
        className="pointer-events-none absolute -inset-[200%] animate-[spin_4s_linear_infinite] opacity-50 blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[spin_2.2s_linear_infinite]"
        style={{ background: beamGradient }}
        aria-hidden="true"
      />

      {/* 2. Sharp rotating shining border beam */}
      <span
        className="pointer-events-none absolute -inset-[200%] animate-[spin_4s_linear_infinite] transition-all duration-300 group-hover:animate-[spin_2.2s_linear_infinite]"
        style={{ background: beamGradient }}
        aria-hidden="true"
      />

      {/* 3. Button surface layer */}
      <span
        className={`relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-all duration-300 ${sizeClasses} ${surfaceClasses}`}
      >
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={`no-underline focus:outline-none ${isFullWidth ? "w-full block" : "inline-block"}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`cursor-pointer focus:outline-none ${isFullWidth ? "w-full block" : "inline-block"}`}
    >
      {content}
    </button>
  );
}
