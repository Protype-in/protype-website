"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";

const solutions = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Intelligent AI Agents",
        desc: "Custom AI-powered automation systems that handle your business workflows natively — from lead generation to complex document processing.",
        features: [
            "Smart task automation",
            "Natural language understanding",
            "Continuous autonomous operation",
            "Seamless system integrations",
        ],
        glowColor: "rgba(59, 130, 246, 0.2)" as const,
        iconBg: "bg-blue-500/10 text-blue-400",
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Rapid MVP Development",
        desc: "Build and launch your startup product in weeks, not months. Move from idea validation to a fully deployed product with native AI capabilities.",
        features: [
            "Accelerated 4-week delivery cycle",
            "Modern full-stack architecture",
            "Embedded AI-powered features",
            "Enterprise-ready infrastructure",
        ],
        glowColor: "rgba(139, 92, 246, 0.2)" as const,
        iconBg: "bg-purple-500/10 text-purple-400",
    },
];

export default function SolutionSection() {
    return (
        <section id="solutions" className="relative overflow-hidden py-16 bg-[#030305]">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        <Cpu className="w-4 h-4" />
                        <span>Core Systems</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        AI Systems That Work <br className="hidden md:block" />
                        <span className="text-blue-400">For Your Business</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Two powerful pillars designed to accelerate your growth — scalable 
                        automation and rapid product development workflows.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                    {solutions.map((s, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor={s.glowColor}
                            className="bg-[#0a0a0f] border-white/5 rounded-3xl"
                        >
                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${s.iconBg}`}
                                >
                                    {s.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                                <p className="text-zinc-400 mb-8 leading-relaxed font-light">{s.desc}</p>

                                {/* Feature list */}
                                <ul className="space-y-3 mb-8">
                                    {s.features.map((f, fi) => (
                                        <li key={fi} className="flex items-start gap-3 text-zinc-400 font-light">
                                            <span className="text-blue-400 mt-1">•</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#services"
                                    className="inline-flex items-center font-medium text-white hover:text-blue-400 transition-colors group"
                                >
                                    Learn More
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
