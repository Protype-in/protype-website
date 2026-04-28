"use client";

import { motion, Variants } from "framer-motion";
import { FileText, Package, MessageSquare, Target, Clock, AlertTriangle } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

const problems = [
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Manual Documentation",
        desc: "Hours wasted on repetitive paperwork and data entry across spreadhseets.",
    },
    {
        icon: <Package className="w-6 h-6" />,
        title: "Shipment Tracking Chaos",
        desc: "No centralized system to track shipments, deliveries, and logistics.",
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Unorganized Communication",
        desc: "Client conversations scattered across email, WhatsApp, and calls.",
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Missed Leads",
        desc: "Potential clients fall through the cracks without proper follow-up.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Slow Development",
        desc: "Months spent building products that could be launched in weeks.",
    },
];

export default function ProblemSection() {
    return (
        <section className="relative overflow-hidden py-4 lg:py-6 bg-[#fafafa]">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-500 text-sm font-bold mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)] tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span>Critical Bottlenecks</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="Businesses Waste"
                            className="inline-block"
                            delay={30}
                            duration={0.5}
                            ease="easeOut"
                        />
                        <br />
                        <span className="text-red-500">Thousands of Hours</span>
                        <br />
                        <span className="text-zinc-600">on Manual Work</span>
                    </h2>
                    
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Legacy systems and fragmented tools drain your team's productivity. It's time to let automation do the heavy lifting so you can focus on growth.
                    </p>
                </motion.div>

                {/* Spotlight Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left"
                >
                    {problems.map((p, i) => (
                        <motion.div key={i} variants={itemVariants} className="h-full">
                            <SpotlightCard
                                spotlightColor="rgba(239, 68, 68, 0.2)"
                                className="bg-white border border-black/5 hover:border-red-500/30 transition-all duration-500 rounded-3xl group h-full relative overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <div className="absolute -bottom-4 -right-4 text-9xl font-black text-red-500/[0.03] group-hover:text-red-500/[0.08] transition-colors duration-500 pointer-events-none select-none">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10 flex flex-col h-full p-2">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300">
                                        {p.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">{p.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed font-light text-[15px]">{p.desc}</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                    
                    {/* Final spanning card */}
                    <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 h-full">
                        <SpotlightCard
                            spotlightColor="rgba(59, 130, 246, 0.3)"
                            className="bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors duration-500 rounded-3xl h-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <h3 className="text-3xl font-black text-white mb-3 relative z-10 tracking-tight">Sound Familiar?</h3>
                            <p className="text-zinc-400 mb-8 relative z-10 font-light text-lg">Let's fix it with intelligent systems.</p>
                            <a href="#solutions" className="bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 relative z-10 flex items-center gap-2 group/btn">
                                See Solutions
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </a>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
