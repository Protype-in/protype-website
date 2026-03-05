"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#cta" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#020209]/90 backdrop-blur-xl border-b border-[#00f5ff]/10"
                : "bg-transparent"
                }`}
        >
            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#00f5ff]/60 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#7c3aed] flex items-center justify-center font-bold text-black text-sm">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#7c3aed] blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                    </div>
                    <div>
                        <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
                            Elevate
                        </span>
                        <div className="text-[9px] font-mono text-[#00f5ff] tracking-widest -mt-0.5 opacity-60">
                            AI SYSTEMS
                        </div>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[#64748b] hover:text-[#00f5ff] transition-colors duration-200 font-mono tracking-wide relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00f5ff] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_#00f5ff]" />
                        </a>
                    ))}
                    <a
                        href="#cta"
                        className="btn-glow !py-2 !px-5 !text-xs"
                    >
                        Book Demo
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 border border-[#00f5ff]/20 rounded"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-[#00f5ff]"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-5 h-0.5 bg-[#00f5ff]"
                    />
                    <motion.span
                        animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-[#00f5ff]"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-[#020209]/98 backdrop-blur-xl border-b border-[#00f5ff]/10"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[#64748b] hover:text-[#00f5ff] transition-colors font-mono text-sm tracking-wide"
                                >
                                    <span className="text-[#00ff88] mr-2">›</span>
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#cta"
                                onClick={() => setMobileOpen(false)}
                                className="btn-glow text-center !py-2"
                            >
                                Book Demo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
