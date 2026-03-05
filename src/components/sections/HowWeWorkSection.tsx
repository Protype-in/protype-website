"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, Rocket, Headset, Settings } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We analyze your business workflow, identify bottlenecks, and understand your goals.",
        icon: <Search className="w-5 h-5" />,
        color: "#00f5ff",
    },
    {
        num: "02",
        title: "Solution Design",
        desc: "Plan AI systems or MVP architecture tailored to your specific business needs.",
        icon: <Lightbulb className="w-5 h-5" />,
        color: "#7c3aed",
    },
    {
        num: "03",
        title: "Development",
        desc: "Build automation systems or products with agile development methodology.",
        icon: <Zap className="w-5 h-5" />,
        color: "#f59e0b",
    },
    {
        num: "04",
        title: "Deployment",
        desc: "Launch and integrate systems into your business infrastructure seamlessly.",
        icon: <Rocket className="w-5 h-5" />,
        color: "#00ff88",
    },
    {
        num: "05",
        title: "Continuous Support",
        desc: "Ongoing improvement, monitoring, and scaling as your business grows.",
        icon: <Headset className="w-5 h-5" />,
        color: "#ec4899",
    },
];

export default function HowWeWorkSection() {
    return (
        <section id="process" className="relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/4 blur-[180px]" />
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <Settings className="w-3 h-3 inline-block mr-1" />
                        PROCESS_PIPELINE // 5_STAGES
                    </div>
                    <h2 className="section-title">
                        How We <span className="gradient-text">Work</span>
                    </h2>
                    <p className="section-subtitle">
                        A proven 5-stage process to transform your business operations with
                        AI-powered solutions.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Connection line */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                        style={{
                            background: "linear-gradient(to bottom, #00f5ff, #7c3aed, #00ff88, transparent)",
                            boxShadow: "0 0 15px rgba(0, 245, 255, 0.2)",
                        }}
                    />

                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`flex flex-col md:flex-row items-center gap-6 mb-10 last:mb-0 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className={`flex-1 ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                                <div className="cyber-card p-6 inline-block text-left group" style={{ borderColor: `${s.color}12` }}>
                                    {/* Step indicator */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="p-2 rounded-lg inline-flex"
                                            style={{
                                                background: `${s.color}10`,
                                                border: `1px solid ${s.color}25`,
                                                color: s.color,
                                            }}
                                        >
                                            {s.icon}
                                        </div>
                                        <span
                                            className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded"
                                            style={{ color: s.color, background: `${s.color}0d`, border: `1px solid ${s.color}20` }}
                                        >
                                            STEP_{s.num}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                                    <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }}
                                    />
                                </div>
                            </div>

                            {/* Center node */}
                            <div className="relative z-10 flex-shrink-0">
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold font-mono text-sm text-black"
                                    style={{
                                        background: `linear-gradient(135deg, ${s.color}, #7c3aed)`,
                                        boxShadow: `0 0 20px ${s.color}40, 0 0 40px ${s.color}15`,
                                    }}
                                >
                                    {s.num}
                                </motion.div>
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
