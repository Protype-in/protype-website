"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const categories = [
    {
        label: "Frontend",
        prefix: "UI",
        items: [
            { name: "Next.js", color: "#ffffff" },
            { name: "React", color: "#61dafb" },
            { name: "Tailwind", color: "#38bdf8" },
        ],
    },
    {
        label: "Backend",
        prefix: "SVC",
        items: [
            { name: "Node.js", color: "#68a063" },
            { name: "Python", color: "#f7d54a" },
            { name: "FastAPI", color: "#009688" },
        ],
    },
    {
        label: "AI / ML",
        prefix: "AI",
        items: [
            { name: "OpenAI", color: "#10a37f" },
            { name: "Llama", color: "#a78bfa" },
            { name: "LangChain", color: "#00d4aa" },
        ],
    },
    {
        label: "Database",
        prefix: "DB",
        items: [
            { name: "PostgreSQL", color: "#336791" },
            { name: "NeonDB", color: "#00e5a0" },
            { name: "Supabase", color: "#3ecf8e" },
        ],
    },
    {
        label: "DevOps",
        prefix: "OPS",
        items: [
            { name: "Vercel", color: "#ffffff" },
            { name: "AWS", color: "#ff9900" },
            { name: "Docker", color: "#2496ed" },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative overflow-hidden border-y border-[#00f5ff]/08">
            {/* Scanlines */}
            <div className="scanline-overlay" />
            <div className="animated-grid-bg" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-[#00f5ff]/3 blur-[120px]" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <Terminal className="w-3 h-3 inline-block mr-1" />
                        TECH_STACK // PRODUCTION_GRADE
                    </div>
                    <h2 className="section-title">
                        Built With <span className="gradient-text">Modern Technology</span>
                    </h2>
                    <p className="section-subtitle">
                        We use industry-leading tools and frameworks to build reliable,
                        scalable, and performant solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                    {categories.map((cat, ci) => (
                        <motion.div
                            key={ci}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.1 }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-1.5 mb-4 font-mono">
                                <span className="text-[#00f5ff] text-xs opacity-60">//</span>
                                <span className="text-[10px] text-[#00f5ff] font-semibold tracking-widest uppercase">{cat.label}</span>
                            </div>

                            <div className="space-y-2.5">
                                {cat.items.map((item, ii) => (
                                    <motion.div
                                        key={ii}
                                        whileHover={{ scale: 1.04 }}
                                        className="cyber-card px-4 py-3 flex items-center gap-2.5 cursor-default group"
                                        style={{ borderColor: `${item.color}10` }}
                                    >
                                        {/* Color dot with glow */}
                                        <div
                                            className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-125"
                                            style={{
                                                backgroundColor: item.color,
                                                boxShadow: `0 0 6px ${item.color}60`,
                                            }}
                                        />
                                        <span className="text-xs font-mono font-medium text-[#94a3b8] group-hover:text-white transition-colors">
                                            {item.name}
                                        </span>

                                        {/* Hover glow top */}
                                        <div
                                            className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom terminal line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14 font-mono text-xs text-[#334155]"
                >
                    <span className="text-[#00ff88]">$</span> stack.initialize() →{" "}
                    <span className="text-[#00f5ff]">ALL_SYSTEMS_READY</span>
                    <span className="cursor-blink ml-1" />
                </motion.div>
            </div>
        </section>
    );
}
