"use client";

import { motion, Variants } from "framer-motion";
import { Search, Lightbulb, Zap, Rocket, Headset, Settings } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

const steps = [
    {
        num: "01",
        title: "Discovery & Audit",
        desc: "We map your support, operations, and customer touchpoints to find where automation pays off fastest.",
        icon: <Search className="h-5 w-5" />,
        tone: "text-cyan-300",
        ring: "border-cyan-400/20 bg-cyan-500/10",
    },
    {
        num: "02",
        title: "Agent Design",
        desc: "We design the exact agents, workflows, and escalation paths your business needs — nothing generic.",
        icon: <Lightbulb className="h-5 w-5" />,
        tone: "text-blue-300",
        ring: "border-blue-400/20 bg-blue-500/10",
    },
    {
        num: "03",
        title: "Build & Integrate",
        desc: "We connect agents to your existing tools — WhatsApp, CRM, helpdesk, and internal systems.",
        icon: <Zap className="h-5 w-5" />,
        tone: "text-violet-300",
        ring: "border-violet-400/20 bg-violet-500/10",
    },
    {
        num: "04",
        title: "Deploy",
        desc: "Agents go live in a controlled rollout, with human review before they run unsupervised.",
        icon: <Rocket className="h-5 w-5" />,
        tone: "text-cyan-300",
        ring: "border-cyan-400/20 bg-cyan-500/10",
    },
    {
        num: "05",
        title: "Monitor & Improve",
        desc: "We track every conversation and workflow, continuously retraining agents as your business evolves.",
        icon: <Headset className="h-5 w-5" />,
        tone: "text-blue-300",
        ring: "border-blue-400/20 bg-blue-500/10",
    },
];

export default function HowWeWorkSection() {
    return (
        <section id="process" className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="hero-grid absolute inset-0 opacity-20" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
                        <Settings className="h-3.5 w-3.5" />
                        The process
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        How we <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">work</span>
                    </h2>
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                        A proven 5-stage framework to transform your business operations with
                        AI-powered solutions, from ideation to scale.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative mx-auto max-w-6xl"
                >
                    <div className="absolute left-1/2 top-8 hidden h-px w-[calc(100%-2rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

                    <div className="grid gap-6 lg:grid-cols-5">
                        {steps.map((s, i) => (
                            <motion.div key={i} variants={itemVariants} whileHover={{ y: -6 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor="rgba(96, 165, 250, 0.3)"
                                    className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                                >
                                    <div className="pointer-events-none absolute -right-3 -top-2 select-none text-6xl font-black text-white/[0.04]">
                                        {s.num}
                                    </div>
                                    <div className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${s.ring} ${s.tone} transition-transform duration-300 group-hover:scale-110`}>
                                        {s.icon}
                                    </div>
                                    <div className={`relative z-10 mb-2 text-xs font-bold uppercase tracking-[0.14em] ${s.tone}`}>Step {s.num}</div>
                                    <h3 className="relative z-10 mb-2.5 text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                                    <p className="relative z-10 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
