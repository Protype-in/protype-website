"use client";

import { Cpu } from "lucide-react";

const footerLinks = {
    Services: [
        { label: "Lead Generation Agent", href: "#services" },
        { label: "Email Automation Agent", href: "#services" },
        { label: "Document Processing", href: "#services" },
        { label: "CRM Automation", href: "#services" },
        { label: "MVP Development", href: "#services" },
    ],
    Products: [
        { label: "Import Export CRM", href: "#products" },
        { label: "AI Email Tracker", href: "#products" },
        { label: "Trade Dashboard", href: "#products" },
        { label: "Invoice Processor", href: "#products" },
        { label: "Lead Platform", href: "#products" },
    ],
    Company: [
        { label: "How We Work", href: "#process" },
        { label: "Tech Stack", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#" },
    ],
};

const socialLinks = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-[#00f5ff]/08 bg-[#020209] relative overflow-hidden">
            {/* Scanline */}
            <div className="scanline-overlay" />

            {/* Top neon line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#00f5ff]/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative">
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#7c3aed] flex items-center justify-center font-bold text-black">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#7c3aed] blur-md opacity-30" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white">Elevate</span>
                                <div className="text-[9px] font-mono text-[#00f5ff] tracking-widest -mt-0.5 opacity-50">AI SYSTEMS</div>
                            </div>
                        </div>
                        <p className="text-xs text-[#334155] leading-relaxed mb-5 font-mono">
                            // AI Automation & Product Development Studio. We build AI agents, automation systems, and startup MVPs for global businesses.
                        </p>
                        <div className="flex gap-2.5">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-8 h-8 rounded border border-[#00f5ff]/12 flex items-center justify-center text-[#334155] hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-mono text-[10px] text-[#00f5ff] uppercase tracking-widest mb-4">
                                // {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-xs text-[#334155] hover:text-[#94a3b8] transition-colors font-mono flex items-center gap-1.5 group"
                                        >
                                            <span className="text-[#1a1f2e] group-hover:text-[#00f5ff] transition-colors">›</span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#00f5ff]/06 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#1e2535] font-mono">
                        <span className="text-[#00ff88]">©</span> 2026 Elevate — AI_AUTOMATION & PRODUCT_DEVELOPMENT_STUDIO
                    </p>
                    <div className="flex gap-5 text-xs text-[#334155] font-mono">
                        <a href="mailto:hello@elevate.ai" className="hover:text-[#00f5ff] transition-colors">
                            hello@elevate.ai
                        </a>
                        <a href="#" className="hover:text-[#00f5ff] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#00f5ff] transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
