"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket } from "lucide-react";

const solutions = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI Agents",
        desc: "Custom AI-powered automation systems that handle your business workflows — from lead generation to document processing.",
        features: [
            "Intelligent task automation",
            "Natural language processing",
            "24/7 autonomous operation",
            "Custom integrations",
        ],
        gradient: "from-[#00f5ff] to-[#3b82f6]",
        neonColor: "#00f5ff",
        moduleId: "MOD_AI_AGENTS",
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "MVP Development",
        desc: "Build and launch your startup product in weeks, not months. From idea validation to full deployment with AI integrations.",
        features: [
            "4-week delivery cycle",
            "Full-stack development",
            "AI-powered features",
            "Launch-ready products",
        ],
        gradient: "from-[#7c3aed] to-[#ec4899]",
        neonColor: "#7c3aed",
        moduleId: "MOD_MVP_DEV",
    },
];

export default function SolutionSection() {
    return (
        <section id="solutions" className="relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00f5ff]/4 blur-[150px]" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/4 blur-[150px]" />
            </div>
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        LOADING_MODULES // CORE_SYSTEMS
                    </div>
                    <h2 className="section-title">
                        AI Systems That Work{" "}
                        <span className="gradient-text">For Your Business</span>
                    </h2>
                    <p className="section-subtitle">
                        Two powerful pillars to accelerate your growth — intelligent
                        automation and rapid product development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {solutions.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="cyber-card p-8 group"
                            style={{ borderColor: `${s.neonColor}12` }}
                        >
                            {/* Module ID header */}
                            <div className="flex items-center justify-between mb-6">
                                <span
                                    className="font-mono text-[10px] tracking-widest px-2 py-1 rounded"
                                    style={{
                                        color: s.neonColor,
                                        background: `${s.neonColor}0d`,
                                        border: `1px solid ${s.neonColor}25`,
                                    }}
                                >
                                    {s.moduleId}
                                </span>
                                <div className="flex gap-1.5 opacity-40">
                                    <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                                    <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                                    <div className="w-2 h-2 rounded-full bg-[#ff2b2b]" />
                                </div>
                            </div>

                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-black mb-6 transition-all duration-300`}
                                style={{
                                    boxShadow: `0 0 25px ${s.neonColor}30`,
                                }}
                            >
                                {s.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                            <p className="text-[#64748b] mb-6 leading-relaxed text-sm">{s.desc}</p>

                            {/* Feature list - terminal style */}
                            <ul className="space-y-2 mb-8 font-mono text-sm">
                                {s.features.map((f, fi) => (
                                    <li key={fi} className="flex items-center gap-3 text-[#94a3b8]">
                                        <span style={{ color: s.neonColor }}>›</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 text-sm font-mono transition-all duration-200 group/link"
                                style={{ color: s.neonColor }}
                            >
                                <span className="group-hover/link:text-white transition-colors">LEARN_MORE</span>
                                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                            </a>

                            {/* Animated top border on hover */}
                            <div
                                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${s.neonColor}80, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
