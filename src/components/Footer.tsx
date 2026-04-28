"use client";

import { motion } from "framer-motion";
import { Cpu, Twitter, Linkedin, Github } from "lucide-react";

const links = [
    {
        title: "Platform",
        items: [
            { label: "Our Services", href: "#services" },
            { label: "How We Work", href: "#process" },
            { label: "Internal Products", href: "#products" },
            { label: "Pricing", href: "#pricing" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About Us", href: "#" },
            { label: "Case Studies", href: "#case-studies" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#cta" },
        ],
    },
    {
        title: "Legal",
        items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#fafafa] pt-24 pb-12 border-t border-black/5 overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 pr-8">
                        <a href="#" className="inline-flex items-center gap-3 group mb-8">
                            <img 
                              src="/logo1.png" 
                              alt="protype logo" 
                                                            className="h-32 w-auto object-contain shrink-0 scale-[1.2] origin-left"
                            />
                        </a>
                        <p className="text-zinc-600 font-light leading-relaxed mb-8 max-w-sm text-sm">
                            Building intelligent automation systems and scalable MVPs that transform how businesses operate in the AI era.
                        </p>
                        
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
                                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
                                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
                                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {links.map((col, i) => (
                        <div key={i}>
                            <h4 className="text-zinc-900 font-semibold mb-6 tracking-wide text-sm uppercase">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.items.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            className="text-zinc-600 hover:text-zinc-900 font-light text-sm transition-colors block relative group w-fit"
                                        >
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500/50 group-hover:w-full transition-all duration-300 ease-out" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-zinc-500 text-sm font-light">
                        © {new Date().getFullYear()} protype. All rights reserved.
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 bg-black/[0.02] text-zinc-600 text-sm font-light">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                        </span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
