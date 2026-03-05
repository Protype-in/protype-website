"use client";

import { motion } from "framer-motion";
import { Target, Mail, FileText, Briefcase, Smartphone, Bot, Rocket } from "lucide-react";

const aiServices = [
    {
        icon: <Target className="w-7 h-7" />,
        title: "Lead Generation Agent",
        desc: "Automatically find and qualify leads from multiple sources. Score, prioritize, and route leads to your sales team.",
        color: "#00f5ff",
        id: "AGT_001",
    },
    {
        icon: <Mail className="w-7 h-7" />,
        title: "Email Automation Agent",
        desc: "Reads emails, drafts intelligent replies, tracks conversations, and sends automated follow-ups.",
        color: "#7c3aed",
        id: "AGT_002",
    },
    {
        icon: <FileText className="w-7 h-7" />,
        title: "Document Processing Agent",
        desc: "Extract data from invoices, PDFs, and trade documents with AI-powered OCR and NLP.",
        color: "#00ff88",
        id: "AGT_003",
    },
    {
        icon: <Briefcase className="w-7 h-7" />,
        title: "CRM Automation Agent",
        desc: "Manage leads, deals, and follow-ups automatically. Keep your pipeline organized effortlessly.",
        color: "#f59e0b",
        id: "AGT_004",
    },
    {
        icon: <Smartphone className="w-7 h-7" />,
        title: "Social Media AI Agent",
        desc: "Content planning, scheduling, analytics, and engagement automation across platforms.",
        color: "#ec4899",
        id: "AGT_005",
    },
];

const timeline = [
    { week: "INIT_01", title: "Planning & UI Design", desc: "Requirements gathering, wireframing, and UI/UX design." },
    { week: "BUILD_02", title: "Core Development", desc: "Backend APIs, database design, and frontend development." },
    { week: "INTG_03", title: "AI Integration & Testing", desc: "Integrate AI features, run tests, and iterate on feedback." },
    { week: "SHIP_04", title: "Launch & Deploy", desc: "Final QA, deployment, and go-live support." },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative overflow-hidden">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#00f5ff]/3 blur-[150px]" />
            <div className="animated-grid-bg" />
            <div className="scanline-overlay" />

            <div className="section-container relative z-10">
                {/* AI Agents */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <Bot className="w-3 h-3 inline-block mr-1" />
                        AI_AUTOMATION_SUITE // ACTIVE
                    </div>
                    <h2 className="section-title">
                        Custom AI Agents for{" "}
                        <span className="gradient-text">Business Automation</span>
                    </h2>
                    <p className="section-subtitle">
                        Intelligent agents that work around the clock, handling your
                        business processes with precision and speed.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 mb-32 max-w-5xl mx-auto">
                    {aiServices.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="cyber-card p-6 group"
                            style={{ borderColor: `${s.color}10` }}
                        >
                            {/* Agent ID */}
                            <div className="flex items-center justify-between mb-5">
                                <span
                                    className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded"
                                    style={{ color: s.color, background: `${s.color}0d`, border: `1px solid ${s.color}20` }}
                                >
                                    {s.id} // ONLINE
                                </span>
                                <div
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }}
                                />
                            </div>

                            {/* Icon */}
                            <div
                                className="mb-5 p-3 rounded-xl inline-flex transition-all duration-300"
                                style={{
                                    background: `${s.color}0d`,
                                    border: `1px solid ${s.color}20`,
                                    color: s.color,
                                }}
                            >
                                {s.icon}
                            </div>

                            <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                            <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>

                            {/* Hover top line */}
                            <div
                                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* MVP Development */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6" style={{ borderColor: "rgba(124, 58, 237, 0.3)", color: "#a78bfa" }}>
                        <Rocket className="w-3 h-3 inline-block mr-1" />
                        MVP_DEVELOPMENT // PIPELINE_ACTIVE
                    </div>
                    <h2 className="section-title">
                        Build Your Startup MVP{" "}
                        <span className="gradient-text">in Weeks</span>
                    </h2>
                    <p className="section-subtitle">
                        We help founders validate ideas, build MVPs, and launch
                        products with AI integrations — in just 4 weeks.
                    </p>
                </motion.div>

                {/* Tech timeline */}
                <div className="max-w-2xl mx-auto relative">
                    {/* Animated pipeline line */}
                    <div
                        className="absolute left-5 top-0 bottom-0 w-0.5"
                        style={{
                            background: "linear-gradient(to bottom, #00f5ff, #7c3aed, #00ff88, transparent)",
                            boxShadow: "0 0 10px rgba(0, 245, 255, 0.3)",
                        }}
                    />

                    {timeline.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="flex gap-6 mb-6 last:mb-0"
                        >
                            {/* Node dot */}
                            <div className="relative flex-shrink-0">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono text-black"
                                    style={{ background: `linear-gradient(135deg, #00f5ff, #7c3aed)` }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </motion.div>
                            </div>

                            {/* Card */}
                            <div className="cyber-card p-5 flex-1 group">
                                <div className="font-mono text-[10px] tracking-widest text-[#00f5ff] mb-1 font-semibold">
                                    {t.week}
                                </div>
                                <h3 className="text-base font-semibold mb-1">{t.title}</h3>
                                <p className="text-sm text-[#64748b]">{t.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
