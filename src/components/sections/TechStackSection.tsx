"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Magnet from "../react-bits/Magnet";

const categories = [
    {
        label: "Frontend & UI",
        items: [
            { name: "Next.js", color: "#000000" },
            { name: "React", color: "#61dafb" },
            { name: "Tailwind CSS", color: "#38bdf8" },
        ],
    },
    {
        label: "Backend & APIs",
        items: [
            { name: "Node.js", color: "#68a063" },
            { name: "Python", color: "#f7d54a" },
            { name: "FastAPI", color: "#009688" },
        ],
    },
    {
        label: "AI & Machine Learning",
        items: [
            { name: "OpenAI", color: "#10a37f" },
            { name: "Llama", color: "#a78bfa" },
            { name: "LangChain", color: "#00d4aa" },
        ],
    },
    {
        label: "Databases",
        items: [
            { name: "PostgreSQL", color: "#336791" },
            { name: "NeonDB", color: "#00e5a0" },
            { name: "Supabase", color: "#3ecf8e" },
        ],
    },
    {
        label: "Cloud & DevOps",
        items: [
            { name: "Vercel", color: "#000000" },
            { name: "AWS", color: "#ff9900" },
            { name: "Docker", color: "#2496ed" },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative overflow-hidden pt-6 lg:pt-10 pb-2 lg:pb-4 bg-white border-y border-black/5">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-emerald-100/40 via-cyan-100/40 to-blue-100/40 blur-[150px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <Terminal className="w-4 h-4" />
                        <span>Technology Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        Built With <span className="text-blue-400">Modern Technology</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        We use industry-leading tools and frameworks to build reliable,
                        scalable, and performant solutions.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="flex flex-col gap-12 items-center p-4 md:p-8">
                        {categories.map((cat, ci) => (
                            <motion.div
                                key={ci}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: ci * 0.1 }}
                                className="w-full text-center"
                            >
                                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 drop-shadow-sm">
                                    {cat.label}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {cat.items.map((item, ii) => (
                                        <Magnet key={ii} padding={20} disabled={false} magnetStrength={3}>
                                            <div
                                                className="px-6 py-3 rounded-2xl border border-white/80 bg-white/50 backdrop-blur-sm flex items-center gap-3 cursor-pointer group hover:bg-white/80 hover:border-white hover:scale-105 transition-all duration-300 shadow-[inset_0_1px_10px_rgba(255,255,255,0.5),0_4px_10px_rgba(0,0,0,0.02)] hover:shadow-[inset_0_1px_10px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.05)]"
                                            >
                                                <div
                                                    className="w-3 h-3 rounded-full flex-shrink-0 border border-black/5"
                                                    style={{
                                                        backgroundColor: item.color,
                                                        boxShadow: `0 0 12px ${item.color}80, inset 0 0 4px rgba(255,255,255,0.5)`,
                                                    }}
                                                />
                                                <span className="text-[15px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors drop-shadow-sm">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </Magnet>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
