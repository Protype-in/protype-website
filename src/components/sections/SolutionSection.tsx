"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Rocket } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const solutions = [
    {
        icon: <Cpu className="w-6 h-6 text-blue-600" />,
        title: "Intelligent AI Agents",
        desc: "Custom AI-powered automation systems that handle your business workflows natively — from lead generation to complex document processing.",
        features: [
            "Smart task automation",
            "Natural language understanding",
            "Continuous autonomous operation",
            "Seamless system integrations",
        ],
        glowColor: "rgba(59, 130, 246, 0.4)" as const,
        pastelBg: "bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]",
        bulletColor: "text-blue-500",
    },
    {
        icon: <Rocket className="w-6 h-6 text-purple-600" />,
        title: "Rapid MVP Development",
        desc: "Build and launch your startup product in weeks, not months. Move from idea validation to a fully deployed product with native AI capabilities.",
        features: [
            "Accelerated 4-week delivery cycle",
            "Modern full-stack architecture",
            "Embedded AI-powered features",
            "Enterprise-ready infrastructure",
        ],
        glowColor: "rgba(168, 85, 247, 0.4)" as const,
        pastelBg: "bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff]",
        bulletColor: "text-purple-500",
    },
];

export default function SolutionSection() {
    return (
        <section id="solutions" className="relative overflow-hidden pt-2 lg:pt-4 pb-2 lg:pb-4 bg-[#fafafa]">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        <Cpu className="w-4 h-4" />
                        <span>Core Systems</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="AI Systems That Work"
                            className="inline-block"
                            delay={30}
                            duration={0.5}
                            ease="easeOut"
                        />
                        <br className="hidden md:block" />
                        <span className="text-blue-400">For Your Business</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Two powerful pillars designed to accelerate your growth — scalable 
                        automation and rapid product development workflows.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8 text-left relative z-10"
                    >
                        {solutions.map((s, i) => (
                            <motion.div key={i} variants={itemVariants} className="h-full">
                                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
                                    <SpotlightCard
                                        spotlightColor={s.glowColor}
                                        className={`rounded-[32px] p-8 md:p-10 ${s.pastelBg} border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.02)] relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.05)] group`}
                                    >
                                        {/* Optional subtle light bloom inside the card */}
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-[32px]" />

                                        <div className="relative z-10 flex flex-col flex-grow">
                                            {/* Top Bar with Icon */}
                                            <div className="flex justify-between items-start mb-8 relative z-10">
                                                <div className="w-16 h-16 rounded-[24px] bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/80 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                                    {s.icon}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight drop-shadow-sm">{s.title}</h3>
                                            <p className="text-zinc-600/90 mb-8 leading-relaxed font-medium text-[15px]">{s.desc}</p>

                                            {/* Feature list */}
                                            <ul className="space-y-4 mb-10 flex-grow">
                                                {s.features.map((f, fi) => (
                                                    <li key={fi} className="flex items-center gap-3 text-zinc-700 font-medium text-[15px] bg-white/40 p-3 rounded-2xl border border-white/50 backdrop-blur-sm">
                                                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-purple-500'}`} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            <a
                                                href="#services"
                                                className="mt-auto inline-flex items-center justify-center gap-2 font-bold text-zinc-900 bg-white/80 hover:bg-white px-6 py-3.5 rounded-2xl border border-white transition-all shadow-sm group/btn"
                                            >
                                                Learn More
                                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                            </a>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
