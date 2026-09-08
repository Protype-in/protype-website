"use client";

import { Twitter, Linkedin, Github } from "lucide-react";

const links = [
    {
        title: "Platform",
        items: [
            { label: "Our Pillars", href: "#solutions" },
            { label: "Capabilities", href: "#services" },
            { label: "How We Work", href: "#process" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faq" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About Us", href: "#" },
            { label: "The Agent Lab", href: "#products" },
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
        <footer className="relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 pb-12 pt-24">
            <div className="absolute top-0 left-1/2 h-px w-[800px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,.06),transparent_30%)]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    <div className="pr-8 lg:col-span-2">
                        <a href="#" className="group mb-8 inline-flex items-center gap-3">
                            <img
                                src="/logo3.png"
                                alt="protype logo"
                                className="h-20 w-auto shrink-0 object-contain"
                            />
                        </a>
                        <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-500">
                            We design and deploy AI agents that handle support, automate operations, and elevate customer experience — so your team can focus on growth.
                        </p>

                        <div className="flex gap-3">
                            <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600">
                                <Twitter className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>
                            <a href="https://www.linkedin.com/in/harshpatel101/" className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600">
                                <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>
                            <a href="https://github.com/QuickHarsh" className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600">
                                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {links.map((col, i) => (
                        <div key={i}>
                            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-900">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.items.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            className="group relative block w-fit text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600"
                                        >
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-500 transition-all duration-300 ease-out group-hover:w-full" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
                    <div className="text-sm font-light text-slate-500">
                        © {new Date().getFullYear()} protype. All rights reserved.
                    </div>
                    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-light text-slate-500">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                        </span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
