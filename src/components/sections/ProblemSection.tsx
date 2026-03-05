"use client";

import { motion } from "framer-motion";
import { FileText, Package, MessageSquare, Target, Clock, Zap, AlertTriangle } from "lucide-react";

const problems = [
    {
        icon: <FileText className="w-7 h-7" />,
        title: "Manual Documentation",
        desc: "Hours wasted on repetitive paperwork and data entry across spreadsheets.",
        color: "#ff2b2b",
        code: "ERR_001",
    },
    {
        icon: <Package className="w-7 h-7" />,
        title: "Shipment Tracking Chaos",
        desc: "No centralized system to track shipments, deliveries, and logistics.",
        color: "#ff6b35",
        code: "ERR_002",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Unorganized Communication",
        desc: "Client conversations scattered across email, WhatsApp, and calls.",
        color: "#f59e0b",
        code: "ERR_003",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Missed Leads",
        desc: "Potential clients fall through the cracks without proper follow-up.",
        color: "#ff2b2b",
        code: "ERR_004",
    },
    {
        icon: <Clock className="w-7 h-7" />,
        title: "Slow Product Development",
        desc: "Months spent building products that could be launched in weeks.",
        color: "#ff6b35",
        code: "ERR_005",
    },
];

export default function ProblemSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-red-500/4 blur-[180px]" />
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6" style={{ borderColor: "rgba(255, 43, 43, 0.3)", color: "#ff2b2b" }}>
                        <AlertTriangle className="w-3 h-3" />
                        <span className="ml-1">CRITICAL_BOTTLENECKS_DETECTED</span>
                    </div>
                    <h2 className="section-title">
                        Businesses Waste{" "}
                        <span
                            className="glitch"
                            data-text="Thousands of Hours"
                            style={{
                                color: "#ff2b2b",
                                textShadow: "0 0 20px rgba(255,43,43,0.5), 0 0 40px rgba(255,43,43,0.2)",
                            }}
                        >
                            Thousands of Hours
                        </span>
                        <br />
                        on Manual Work
                    </h2>
                    <p className="section-subtitle">
                        Import-export companies and startups struggle with outdated processes
                        that drain productivity and revenue.
                    </p>
                </motion.div>

                {/* Error cards grid */}
                <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`cyber-card p-6 group ${i === 3 ? "md:col-span-2" : ""}`}
                            style={{
                                borderColor: `${p.color}15`,
                            }}
                        >
                            {/* Card inner */}
                            <div className="relative z-10">
                                {/* Error code top bar */}
                                <div className="flex items-center justify-between mb-5">
                                    <div
                                        className="flex items-center gap-2 px-2 py-1 rounded text-[10px] font-mono"
                                        style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}
                                    >
                                        ⚠ {p.code}
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-[#ff2b2b]/60" />
                                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]/60" />
                                    </div>
                                </div>

                                <div
                                    className="mb-4 p-3 rounded-xl inline-flex"
                                    style={{
                                        background: `${p.color}0d`,
                                        border: `1px solid ${p.color}20`,
                                        color: p.color,
                                        boxShadow: `0 0 15px ${p.color}15`,
                                    }}
                                >
                                    {p.icon}
                                </div>
                                <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                                <p className="text-sm text-[#64748b] leading-relaxed">{p.desc}</p>
                            </div>

                            {/* Hover glow border */}
                            <div
                                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Solution bridge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-sm border border-[#00ff88]/30 bg-[#00ff88]/5 font-mono text-sm shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                        <Zap className="w-4 h-4 text-[#00ff88] animate-pulse" />
                        <span className="text-[#64748b]">
                            <span className="text-[#00ff88]">$ SOLUTION_FOUND:</span>{" "}
                            <span className="text-white font-semibold">AI systems</span>
                            {" + "}
                            <span className="text-white font-semibold">rapid product development</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
