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
        icon: <Target className="w-6 h-6" />,
        title: "Lead Generation",
        desc: "Automatically find and qualify leads from multiple sources. Score and route them seamlessly.",
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Automation",
        desc: "Read emails, draft intelligent replies, and send automated follow-ups.",
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Document Processing",
        desc: "Extract data from invoices and PDFs automatically with precise OCR.",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "CRM Management",
        desc: "Keep your pipeline organized and update deal statuses effortlessly.",
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Social Media AI",
        desc: "Schedule posts, analyze trends, and engage audiences autonomously.",
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
        <section id="services" className="relative overflow-hidden py-16 bg-[#030305]">
            <div className="section-container relative z-10 text-center">
                
                {/* AI Agents Setup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        <Bot className="w-4 h-4" />
                        <span>The Automation Suite</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        <SplitText
                            text="Custom AI Agents for"
                            className="inline-block"
                            delay={30}
                            duration={0.5}
                            ease="easeOut"
                        />
                        <br />
                        <span className="text-zinc-400">Business Workflows</span>
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
                                    spotlightColor="rgba(255, 255, 255, 0.05)"
                                    className="bg-[#0a0a0f] border-white/5 rounded-2xl group h-full"
                                >
                                    <div className="relative z-10">
                                        <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-colors">
                                            {s.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{s.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">{s.desc}</p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        </motion.div>
                    ))}
                    
                    {/* Filler Card */}
                    <motion.div variants={itemVariants} className="h-full">
                        <SpotlightCard
                            spotlightColor="rgba(59, 130, 246, 0.1)"
                            className="bg-blue-500/5 border-blue-500/10 rounded-2xl flex flex-col items-center justify-center text-center p-6 h-full min-h-[200px]"
                        >
                            <h3 className="text-lg font-bold text-white mb-2">Need Custom Logic?</h3>
                            <p className="text-blue-200/60 text-sm">We can build agents for any niche process.</p>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>

                {/* MVP Setup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
                        <Rocket className="w-4 h-4" />
                        <span>Fast-Track Development</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        <SplitText
                            text="Build Your Startup MVP"
                            className="inline-block"
                            delay={30}
                            duration={0.5}
                            ease="easeOut"
                        />
                        <br />
                        <span className="text-zinc-400">in Just 4 Weeks</span>
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
                    {timeline.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="relative flex flex-col p-8 rounded-3xl border border-white/5 bg-[#0a0a0f] hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="text-4xl font-black text-white/5 mb-4">{t.step}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">{t.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
