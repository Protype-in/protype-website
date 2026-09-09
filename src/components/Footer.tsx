"use client";

import Image from "next/image";
import { Twitter, Linkedin, Github, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    title: "Platform",
    items: [
      { label: "Our Pillars", href: "#solutions" },
      { label: "Capabilities", href: "#services" },
      { label: "How We Work", href: "#process" },
      { label: "Investment Levels", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Autonomous Support", href: "#solutions" },
      { label: "Operations Automation", href: "#solutions" },
      { label: "Proactive CX", href: "#solutions" },
      { label: "Shopify & ERP Sync", href: "#services" },
      { label: "Human-in-the-Loop", href: "#process" },
    ],
  },
  {
    title: "Company & Trust",
    items: [
      { label: "About Protype", href: "#home" },
      { label: "WhatsApp Direct", href: "https://wa.me/8637584923", external: true },
      { label: "Contact Engineering", href: "#cta" },
      { label: "Security & Privacy", href: "#faq" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-200/80 bg-[#fafcfc] pb-12 pt-20 lg:pt-24">
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-200/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-200/18 blur-[140px]"
        aria-hidden="true"
      />

      {/* Protype Brand Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 25%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 25%, transparent 95%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          
          {/* Brand Info & Socials */}
          <div className="pr-4 lg:col-span-2">
            <a href="#home" className="group mb-6 inline-flex items-center gap-3">
              <Image
                src="/logo3.png"
                alt="protype logo"
                width={180}
                height={70}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              We design and deploy autonomous AI agent systems that eliminate repetitive
              support tickets, orchestrate backend operations, and elevate customer experience.
            </p>

            {/* Direct Contact Links */}
            <div className="mb-8 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/8637584923"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                <span>+91 86375 84923</span>
              </a>

              <a
                href="mailto:info@protype.in"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
              >
                <Mail className="h-3.5 w-3.5 text-slate-500" />
                <span>info@protype.in</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/harshpatel101/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-500 shadow-2xs backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/80 hover:text-emerald-700 hover:scale-105 active:scale-95"
              >
                <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://github.com/QuickHarsh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-500 shadow-2xs backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/80 hover:text-emerald-700 hover:scale-105 active:scale-95"
              >
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="#"
                aria-label="Twitter / X"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-500 shadow-2xs backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/80 hover:text-emerald-700 hover:scale-105 active:scale-95"
              >
                <Twitter className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {links.map((col, i) => (
            <div key={i}>
              <h4 className="mb-5 font-[Outfit] text-xs font-bold uppercase tracking-[0.12em] text-slate-900">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.items.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group relative inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-700"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ease-out group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200/80 pt-8 md:flex-row">
          <div className="text-xs font-normal text-slate-500">
            © {new Date().getFullYear()} Protype. Engineered for high-velocity commerce.
          </div>

          {/* Operational Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-800 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>All systems operational · 99.9% Uptime</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
