"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import ShineButton from "./ui/ShineButton";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      {/* Outer wrapper that animates position & max-width */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 32,
        }}
        className={`pointer-events-auto w-full transition-all duration-300 ${
          scrolled
            ? "max-w-4xl lg:max-w-5xl px-4 pt-3 md:pt-4"
            : "max-w-7xl px-6 pt-0"
        }`}
      >
        {/* Main Navbar Capsule */}
        <motion.nav
          layout
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 32,
          }}
          style={{
            WebkitBackdropFilter: scrolled ? "blur(26px) saturate(190%)" : "none",
            backdropFilter: scrolled ? "blur(26px) saturate(190%)" : "none",
            background: scrolled
              ? "linear-gradient(165deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.28) 100%)"
              : "transparent",
            boxShadow: scrolled
              ? "0 20px 48px rgba(15, 23, 42, 0.06), 0 2px 10px rgba(16, 185, 129, 0.04), inset 0 1px 1.5px rgba(255, 255, 255, 0.85), inset 0 -1px 1px rgba(0, 0, 0, 0.02)"
              : "none",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.65)" : "transparent",
          }}
          className={`relative flex items-center justify-between border transition-all duration-300 ${
            scrolled
              ? "h-16 md:h-18 rounded-full px-4 sm:px-6"
              : "h-22 md:h-26 px-2"
          }`}
        >
          {/* Brand Logo */}
          <motion.a
            layout
            href="#home"
            className="group flex items-center gap-2.5 transition-transform hover:scale-102"
          >
            <div
              className={`relative flex items-center transition-all duration-300 ${
                scrolled
                  ? "h-12 md:h-14 w-36 md:w-44"
                  : "h-18 md:h-22 w-48 md:w-60"
              }`}
            >
              <Image
                src="/logo3.png"
                alt="Protype"
                fill
                className="object-contain object-left select-none"
                priority
              />
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isHovered = hoveredLink === link.href;

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a
                    href={link.href}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 font-medium transition-colors duration-200 ${
                      scrolled ? "text-xs tracking-wide" : "text-sm tracking-wide"
                    } ${
                      isHovered
                        ? "text-emerald-950 font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* Smooth sliding pill hover indicator */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <ShineButton
              href="#cta"
              variant="primary"
              size={scrolled ? "sm" : "md"}
            >
              <span>Talk to us</span>
              <ArrowRight
                className={`transition-transform duration-200 group-hover:translate-x-1 ${
                  scrolled ? "h-3.5 w-3.5" : "h-4 w-4"
                }`}
              />
            </ShineButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden flex-col items-center justify-center gap-1.5 p-2 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              className="block w-4 h-0.5 bg-slate-900 origin-center transition-transform"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              className="block w-4 h-0.5 bg-slate-900 transition-opacity"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              className="block w-4 h-0.5 bg-slate-900 origin-center transition-transform"
            />
          </button>
        </motion.nav>

        {/* Mobile Dropdown Menu Card */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              style={{
                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                backdropFilter: "blur(28px) saturate(180%)",
                background: "linear-gradient(165deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.42) 100%)",
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12), inset 0 1px 1.5px rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(255, 255, 255, 0.7)",
              }}
              className="mt-3 overflow-hidden rounded-[24px] border p-6 md:hidden"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#0a2018] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#12362a]"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/8637584923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
