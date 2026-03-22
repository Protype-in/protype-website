"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import Magnet from "./react-bits/Magnet";
import FlowingMenu from "./react-bits/FlowingMenu";

const demoItems = [
    { link: '#home', text: 'Home', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2532&auto=format&fit=crop' },
    { link: '#process', text: 'Process', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop' },
    { link: '#services', text: 'Services', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop' },
    { link: '#products', text: 'Products', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2670&auto=format&fit=crop' },
    { link: '#pricing', text: 'Pricing', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop' }
];

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
                ? "bg-[#030305]/80 backdrop-blur-xl border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img 
                      src="/logo1.png"
                      alt="protype logo" 
                                            className="h-[42px] w-auto object-contain shrink-0"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Magnet key={link.href} padding={10} disabled={false} magnetStrength={2}>
                            <a
                                href={link.href}
                                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium tracking-wide relative group block"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out rounded-full" />
                            </a>
                        </Magnet>
                    ))}
                    <Magnet padding={15} disabled={false} magnetStrength={3}>
                        <a
                            href="https://wa.me/8637584923"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black hover:bg-zinc-200 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 inline-block"
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
                        className="fixed inset-0 top-24 md:hidden overflow-hidden bg-[#030305] border-t border-white/5 z-40"
                    >
                        <div className="h-full w-full pb-20">
                            <FlowingMenu items={demoItems} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
