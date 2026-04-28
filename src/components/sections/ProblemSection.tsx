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
        icon: <FileText className="w-5 h-5 text-red-600" />,
        title: "Manual Documentation",
        desc: "Hours wasted on repetitive paperwork and data entry across spreadsheets.",
        pastelBg: "bg-gradient-to-br from-[#fef2f2] to-[#fee2e2]",
        badgeText: "-40 HR/WK",
        glow: "rgba(239, 68, 68, 0.4)" as const,
    },
    {
        icon: <Package className="w-5 h-5 text-orange-600" />,
        title: "Shipment Tracking Chaos",
        desc: "No centralized system to track shipments, deliveries, and logistics.",
        pastelBg: "bg-gradient-to-br from-[#fff7ed] to-[#ffedd5]",
        badgeText: "-20 HR/WK",
        glow: "rgba(249, 115, 22, 0.4)" as const,
    },
    {
        icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
        title: "Unorganized Communication",
        desc: "Client conversations scattered across email, WhatsApp, and calls.",
        pastelBg: "bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]",
        badgeText: "-15 HR/WK",
        glow: "rgba(16, 185, 129, 0.4)" as const,
    },
    {
        icon: <Target className="w-5 h-5 text-blue-600" />,
        title: "Missed Leads",
        desc: "Potential clients fall through the cracks without proper follow-up.",
        pastelBg: "bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]",
        badgeText: "-50 HR/WK",
        glow: "rgba(59, 130, 246, 0.4)" as const,
    },
    {
        icon: <Clock className="w-5 h-5 text-purple-600" />,
        title: "Slow Development",
        desc: "Months spent building products that could be launched in weeks.",
        pastelBg: "bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff]",
        badgeText: "-60 HR/WK",
        glow: "rgba(168, 85, 247, 0.4)" as const,
    },
];

export default function ProblemSection() {
    return (
        <section className="relative overflow-hidden pt-6 lg:pt-10 pb-2 lg:pb-4 bg-[#fafafa]">
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
                <div className="relative max-w-6xl mx-auto">
                    {/* The beautiful aura background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 via-orange-100/40 to-yellow-100/40 blur-[100px] rounded-full pointer-events-none -z-10" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8 text-left relative z-10"
                    >
                        {problems.map((p, i) => (
                            <motion.div key={i} variants={itemVariants} className="h-full">
                                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
                                    <SpotlightCard
                                        spotlightColor={p.glow}
                                        className={`rounded-[32px] p-6 md:p-8 ${p.pastelBg} border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.02)] relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_8px_25px_rgba(0,0,0,0.05)]`}
                                    >
                                        {/* Optional subtle light bloom inside the card */}
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-[32px]" />
                                        
                                        {/* Watermark Number */}
                                        <div className="absolute -bottom-4 -right-4 text-9xl font-black text-black/[0.03] transition-colors duration-500 pointer-events-none select-none">
                                            0{i + 1}
                                        </div>

                                        {/* Top Bar */}
                                        <div className="flex justify-between items-start mb-8 relative z-10">
                                            <div className="w-12 h-12 rounded-[18px] bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/80">
                                                {p.icon}
                                            </div>
                                            <div className="w-4 h-4 rounded-full border-[3px] border-black/10 bg-transparent mt-1 mr-1" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex-grow">
                                            <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">{p.title}</h3>
                                            <p className="text-zinc-600/90 text-[15px] font-medium leading-relaxed mb-6">{p.desc}</p>
                                        </div>

                                        {/* Bottom Badge */}
                                        <div className="mt-auto self-end px-4 py-1.5 rounded-full bg-red-500/[0.08] text-red-600/70 text-[11px] font-bold tracking-wider backdrop-blur-md border border-red-500/[0.05] relative z-10 shadow-sm uppercase">
                                            {p.badgeText}
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            </motion.div>
                        ))}
                        
                        {/* Final spanning card */}
                        <motion.div variants={itemVariants} className="h-full">
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor="rgba(59, 130, 246, 0.4)"
                                    className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[32px] h-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[32px]" />
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    <h3 className="text-3xl font-black text-zinc-900 mb-3 relative z-10 tracking-tight drop-shadow-sm">Sound Familiar?</h3>
                                    <p className="text-zinc-600 font-medium mb-8 relative z-10 text-[15px]">Let's fix it with intelligent systems.</p>
                                    <a href="#solutions" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wide hover:scale-105 transition-all duration-300 relative z-10 flex items-center gap-2 group/btn uppercase">
                                        See Solutions
                                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </a>
                                </SpotlightCard>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
