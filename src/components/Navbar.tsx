"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnet from "./react-bits/Magnet";

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
                ? "bg-[#070b18]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                      src="/logo3-white.png"
                      alt="protype logo"
                      className="h-16 md:h-20 w-auto object-contain shrink-0 transition-all"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Magnet key={link.href} padding={10} disabled={false} magnetStrength={2}>
                            <a
                                href={link.href}
                                className="text-sm transition-colors duration-200 font-medium tracking-wide relative group block text-white/70 hover:text-white"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300 ease-out rounded-full" />
                            </a>
                        </Magnet>
                    ))}
                    <Magnet padding={15} disabled={false} magnetStrength={3}>
                        <a
                            href="https://wa.me/8637584923"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-zinc-950 hover:bg-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 inline-block shadow-sm"
                        >
                            Get in Touch
                        </a>
                    </Magnet>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-5 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-white"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="fixed inset-0 top-20 md:hidden overflow-hidden bg-[#070b18] border-t border-white/10 z-40"
                    >
                    <div className="mx-auto flex h-full max-w-7xl flex-col px-6 pt-12">
                        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center justify-between py-5 text-2xl font-semibold tracking-tight text-white"
                                >
                                    {link.label}
                                    <span className="text-cyan-300">↗</span>
                                </motion.a>
                            ))}
                        </div>
                        <a
                            href="https://wa.me/8637584923"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-100"
                        >
                            Start a conversation
                        </a>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
