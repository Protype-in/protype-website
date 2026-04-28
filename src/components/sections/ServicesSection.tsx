"use client";

import { motion, Variants } from "framer-motion";
import { Target, Mail, FileText, Briefcase, Smartphone, Bot, Rocket } from "lucide-react";
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
        icon: <Mail className="w-6 h-6" />,
        title: "Email Automation",
        desc: "Read emails, draft intelligent replies, and send automated follow-ups.",
        glow: "rgba(59, 130, 246, 0.4)" as const,
        borderHover: "hover:border-blue-500/50",
        iconGlow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        iconText: "group-hover:text-blue-500",
        iconBg: "group-hover:bg-blue-500/10",
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Document Processing",
        desc: "Extract data from invoices and PDFs automatically with precise OCR.",
        glow: "rgba(16, 185, 129, 0.4)" as const,
        borderHover: "hover:border-emerald-500/50",
        iconGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        iconText: "group-hover:text-emerald-500",
        iconBg: "group-hover:bg-emerald-500/10",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "CRM Management",
        desc: "Keep your pipeline organized and update deal statuses effortlessly.",
        glow: "rgba(245, 158, 11, 0.4)" as const,
        borderHover: "hover:border-amber-500/50",
        iconGlow: "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
        iconText: "group-hover:text-amber-500",
        iconBg: "group-hover:bg-amber-500/10",
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
        <section id="services" className="relative overflow-hidden py-4 lg:py-6 bg-[#fafafa]">
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
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto text-left"
                >
                    {aiServices.map((s, i) => (
                        <motion.div key={i} variants={itemVariants} className="h-full">
                            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor={s.glow}
                                    className={`bg-white border border-black/5 ${s.borderHover} transition-colors duration-500 rounded-2xl group h-full`}
                                >
                                    <div className="relative z-10">
                                        <div className={`mb-6 w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-zinc-600 ${s.iconBg} ${s.iconText} ${s.iconGlow} transition-all duration-300`}>
                                            {s.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">{s.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed font-light">{s.desc}</p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        </motion.div>
                    ))}
                    
                    {/* Filler Card */}
                    <motion.div variants={itemVariants} className="h-full">
                        <SpotlightCard
                            spotlightColor="rgba(59, 130, 246, 0.3)"
                            className="bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-500 rounded-2xl flex flex-col items-center justify-center text-center p-6 h-full min-h-[200px] group"
                        >
                            <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Need Custom Logic?</h3>
                            <p className="text-blue-900/80 text-sm font-medium">We can build agents for any niche process.</p>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>

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
                    className="max-w-4xl mx-auto text-left grid md:grid-cols-2 gap-8 relative"
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
                            className={`relative flex flex-col p-8 rounded-3xl border border-black/5 bg-white ${borderColors[i]} transition-colors group duration-500`}
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
