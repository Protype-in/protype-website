"use client";

import { motion, Variants } from "framer-motion";
import { Target, Mail, FileText, Briefcase, Smartphone, Bot, Rocket, BarChart, Headphones, LineChart, PieChart, Users, Zap } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const aiServices = [
    {
        icon: <Mail className="w-5 h-5 text-blue-600" />,
        title: "Email Automation",
        desc: "Read emails, draft intelligent replies, and send automated follow-ups.",
        pastelBg: "bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]",
        badgeText: "20 1000",
        glow: "rgba(59, 130, 246, 0.4)" as const,
    },
    {
        icon: <FileText className="w-5 h-5 text-emerald-600" />,
        title: "Document Processing",
        desc: "Extract data from invoices and PDFs automatically with precise OCR.",
        pastelBg: "bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]",
        badgeText: "50 2000",
        glow: "rgba(16, 185, 129, 0.4)" as const,
    },
    {
        icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
        title: "CRM Management",
        desc: "Keep your pipeline organized and update deal statuses effortlessly.",
        pastelBg: "bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff]",
        badgeText: "30 0000",
        glow: "rgba(99, 102, 241, 0.4)" as const,
    },
    {
        icon: <Zap className="w-5 h-5 text-purple-600" />,
        title: "Need Custom Logic?",
        desc: "We can build agents for any niche process.",
        pastelBg: "bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff]",
        badgeText: "20 0000",
        glow: "rgba(168, 85, 247, 0.4)" as const,
    },
];

const timeline = [
    { step: "01", title: "Strategy & UX", desc: "Requirements mapping, user flows, and interface design." },
    { step: "02", title: "Core Build", desc: "Backend APIs, database modeling, and frontend integration." },
    { step: "03", title: "AI Integration", desc: "Embed intelligent agents and test automation pathways." },
    { step: "04", title: "Go-Live", desc: "Final QA, infrastructure scaling, and launch." },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative overflow-hidden pt-2 lg:pt-4 pb-2 lg:pb-4 bg-[#fafafa]">
            <div className="section-container relative z-10 text-center">
                
                {/* AI Agents Setup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        <Bot className="w-4 h-4" />
                        <span>The Automation Suite</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="Custom AI Agents for"
                            className="inline-block"
                            delay={30}
                            duration={0.5}
                            ease="easeOut"
                        />
                        <br />
                        <span className="text-blue-500">Business Workflows</span>
                    </h2>
                </motion.div>

                {/* Agents Grid */}
                <div className="relative mb-20 max-w-6xl mx-auto">
                    {/* The beautiful aura background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-teal-100/40 blur-[100px] rounded-full pointer-events-none -z-10" />

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-6 text-left relative z-10"
                    >
                        {aiServices.map((s, i) => (
                            <motion.div key={i} variants={itemVariants} className="h-full">
                                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
                                    <SpotlightCard
                                        spotlightColor={s.glow}
                                        className={`rounded-[32px] p-6 md:p-8 ${s.pastelBg} border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.02)] relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_8px_25px_rgba(0,0,0,0.05)]`}
                                    >
                                        {/* Optional subtle light bloom inside the card */}
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-[32px]" />
                                        
                                        {/* Top Bar */}
                                        <div className="flex justify-between items-start mb-8 relative z-10">
                                            <div className="w-12 h-12 rounded-[18px] bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/80">
                                                {s.icon}
                                            </div>
                                            <div className="w-4 h-4 rounded-full border-[3px] border-black/10 bg-transparent mt-1 mr-1" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex-grow">
                                            <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">{s.title}</h3>
                                            <p className="text-zinc-600/90 text-[15px] font-medium leading-relaxed mb-6">{s.desc}</p>
                                        </div>

                                        {/* Bottom Badge */}
                                        <div className="mt-auto self-end px-4 py-1.5 rounded-full bg-black/[0.04] text-black/50 text-[11px] font-bold tracking-wider backdrop-blur-md border border-black/[0.02] relative z-10 shadow-sm uppercase">
                                            {s.badgeText}
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* MVP Setup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
                        <Rocket className="w-4 h-4" />
                        <span>Fast-Track Development</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="Build Your Startup MVP"
                            className="inline-block"
                            delay={30}
                            duration={0.5}
                            ease="easeOut"
                        />
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">in Just 4 Weeks</span>
                    </h2>
                </motion.div>

                {/* Modern Timeline Setup */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto text-left grid md:grid-cols-2 gap-8 relative"
                >
                    {timeline.map((t, i) => {
                        const colors = [
                            "text-blue-500 bg-blue-500/10 border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
                            "text-purple-500 bg-purple-500/10 border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
                            "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
                            "text-amber-500 bg-amber-500/10 border-amber-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                        ];
                        const numColors = [
                            "text-blue-500/20 group-hover:text-blue-500/40",
                            "text-purple-500/20 group-hover:text-purple-500/40",
                            "text-emerald-500/20 group-hover:text-emerald-500/40",
                            "text-amber-500/20 group-hover:text-amber-500/40"
                        ];
                        const borderColors = [
                            "hover:border-blue-500/30",
                            "hover:border-purple-500/30",
                            "hover:border-emerald-500/30",
                            "hover:border-amber-500/30"
                        ];
                        return (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className={`relative flex flex-col p-8 rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.02)] hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.05)] ${borderColors[i]} transition-all group duration-500`}
                        >
                            <div className={`absolute top-8 right-8 w-12 h-12 rounded-2xl border ${colors[i]} flex items-center justify-center transition-all duration-300 font-bold text-lg`}>
                                {t.step}
                            </div>
                            <div className={`text-6xl font-black ${numColors[i]} mb-4 transition-colors duration-300`}>{t.step}</div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">{t.title}</h3>
                            <p className="text-zinc-600 text-sm font-light leading-relaxed max-w-[80%]">{t.desc}</p>
                        </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
