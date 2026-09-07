"use client";

import { motion, Variants } from "framer-motion";
import { MessageSquare, Workflow, Target, Sparkles, Boxes, ArrowRight } from "lucide-react";
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
        icon: <MessageSquare className="h-5 w-5" />,
        title: "Support queues never stop growing",
        desc: "Customers and employees wait hours for replies that should take seconds — and every hire only buys a little headroom.",
        badgeText: "-40 HR/WK",
        tone: "text-rose-300",
        ring: "border-rose-400/20 bg-rose-500/10",
        glow: "rgba(244, 63, 94, 0.35)" as const,
    },
    {
        icon: <Workflow className="h-5 w-5" />,
        title: "Manual ops eat the whole week",
        desc: "Data entry, follow-ups, and internal handoffs quietly consume the hours your team should spend on higher-value work.",
        badgeText: "-25 HR/WK",
        tone: "text-rose-300",
        ring: "border-rose-400/20 bg-rose-500/10",
        glow: "rgba(244, 63, 94, 0.35)" as const,
    },
    {
        icon: <Target className="h-5 w-5" />,
        title: "Leads and follow-ups slip through",
        desc: "Without a system chasing every conversation, warm leads and loyal customers go quiet — and stay quiet.",
        badgeText: "-30 HR/WK",
        tone: "text-rose-300",
        ring: "border-rose-400/20 bg-rose-500/10",
        glow: "rgba(244, 63, 94, 0.35)" as const,
    },
    {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Customer experience feels generic",
        desc: "One-size-fits-all replies and silent post-purchase gaps make customers feel like a ticket number, not a relationship.",
        badgeText: "-20 HR/WK",
        tone: "text-rose-300",
        ring: "border-rose-400/20 bg-rose-500/10",
        glow: "rgba(244, 63, 94, 0.35)" as const,
    },
    {
        icon: <Boxes className="h-5 w-5" />,
        title: "Systems that don't talk to each other",
        desc: "Your CRM, helpdesk, WhatsApp, and internal tools all hold half the picture — and nobody has the full one.",
        badgeText: "-35 HR/WK",
        tone: "text-rose-300",
        ring: "border-rose-400/20 bg-rose-500/10",
        glow: "rgba(244, 63, 94, 0.35)" as const,
    },
];

export default function ProblemSection() {
    return (
        <section className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-rose-200 uppercase backdrop-blur-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-70" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
                        </span>
                        Critical bottlenecks
                    </div>

                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        <SplitText text="Growth breaks" className="inline-block" delay={30} duration={0.5} ease="easeOut" />
                        <br />
                        <span className="text-rose-300">support, ops &amp; CX</span>
                        <br />
                        <span className="text-slate-400">long before revenue does</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                        Every pillar of the business — support, operations, and customer experience — leaks hours to manual work. Automation should be doing the heavy lifting, not your team.
                    </p>
                </motion.div>

                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative z-10 grid gap-6 text-left md:grid-cols-2"
                    >
                        {problems.map((p, i) => (
                            <motion.div key={i} variants={itemVariants} className="h-full">
                                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="h-full">
                                    <SpotlightCard
                                        spotlightColor={p.glow}
                                        className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:p-8"
                                    >
                                        <div className="pointer-events-none absolute -bottom-6 -right-4 select-none text-8xl font-black text-white/[0.03]">
                                            0{i + 1}
                                        </div>

                                        <div className="relative z-10 mb-7 flex items-start justify-between">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${p.ring} ${p.tone}`}>
                                                {p.icon}
                                            </div>
                                        </div>

                                        <div className="relative z-10 flex-grow">
                                            <h3 className="mb-2.5 text-xl font-semibold tracking-tight text-white">{p.title}</h3>
                                            <p className="mb-6 text-[15px] leading-relaxed text-slate-400">{p.desc}</p>
                                        </div>

                                        <div className={`relative z-10 mt-auto self-start rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider ${p.ring} ${p.tone}`}>
                                            {p.badgeText}
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            </motion.div>
                        ))}

                        <motion.div variants={itemVariants} className="h-full">
                            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor="rgba(56, 189, 248, 0.3)"
                                    className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/30"
                                >
                                    <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-500/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />
                                    <h3 className="relative z-10 mb-3 text-2xl font-semibold tracking-tight text-white">Sound familiar?</h3>
                                    <p className="relative z-10 mb-7 text-[15px] text-slate-400">Let&apos;s fix it with the three pillars.</p>
                                    <a href="#solutions" className="group/btn relative z-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                                        See the pillars
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
