"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Magnet from "../react-bits/Magnet";

const categories = [
    {
        label: "Frontend & UI",
        items: [
            { name: "Next.js", color: "#ffffff" },
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
            { name: "Vercel", color: "#ffffff" },
            { name: "AWS", color: "#ff9900" },
            { name: "Docker", color: "#2496ed" },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative overflow-hidden py-16 bg-[#030305] border-y border-white/5">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium mb-6">
                        <Terminal className="w-4 h-4" />
                        <span>Technology Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        Built With <span className="text-blue-400">Modern Technology</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We use industry-leading tools and frameworks to build reliable,
                        scalable, and performant solutions.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16 max-w-5xl mx-auto items-center">
                    {categories.map((cat, ci) => (
                        <motion.div
                            key={ci}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.1 }}
                            className="w-full text-center"
                        >
                            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-8">
                                {cat.label}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-4">
                                {cat.items.map((item, ii) => (
                                    <Magnet key={ii} padding={20} disabled={false} magnetStrength={3}>
                                        <div
                                            className="px-6 py-3 rounded-full border border-white/10 bg-[#0a0a0f] flex items-center gap-3 cursor-pointer group hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-xl"
                                        >
                                            <div
                                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                                style={{
                                                    backgroundColor: item.color,
                                                    boxShadow: `0 0 10px ${item.color}80`,
                                                }}
                                            />
                                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
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
        </section>
    );
}
