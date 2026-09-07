"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, Package, UserCheck, Workflow, FileText, Bot, Bell, Gift, Layers } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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

const capabilities = [
    {
        icon: <MessageCircle className="h-5 w-5" />,
        title: "WhatsApp-native support",
        desc: "Meet customers where they already are, with full conversational context carried across every message.",
        pillar: "Support",
        tone: "text-cyan-300",
        ring: "border-cyan-400/20 bg-cyan-500/10",
        glow: "rgba(34, 211, 238, 0.35)" as const,
    },
    {
        icon: <Package className="h-5 w-5" />,
        title: "Order & status queries",
        desc: "Instant, accurate answers on order status, shipping, and account questions — no ticket required.",
        pillar: "Support",
        tone: "text-cyan-300",
        ring: "border-cyan-400/20 bg-cyan-500/10",
        glow: "rgba(34, 211, 238, 0.35)" as const,
    },
    {
        icon: <UserCheck className="h-5 w-5" />,
        title: "Human escalation",
        desc: "Agents know their limits and hand off to a person, with full context, the moment it matters.",
        pillar: "Support",
        tone: "text-cyan-300",
        ring: "border-cyan-400/20 bg-cyan-500/10",
        glow: "rgba(34, 211, 238, 0.35)" as const,
    },
    {
        icon: <Workflow className="h-5 w-5" />,
        title: "Workflow automation",
        desc: "Repetitive, multi-step processes run themselves end to end, freeing your team for higher-value work.",
        pillar: "Operations",
        tone: "text-blue-300",
        ring: "border-blue-400/20 bg-blue-500/10",
        glow: "rgba(96, 165, 250, 0.35)" as const,
    },
    {
        icon: <FileText className="h-5 w-5" />,
        title: "Data & document processing",
        desc: "Extract, structure, and route information from invoices, forms, and PDFs without manual entry.",
        pillar: "Operations",
        tone: "text-blue-300",
        ring: "border-blue-400/20 bg-blue-500/10",
        glow: "rgba(96, 165, 250, 0.35)" as const,
    },
    {
        icon: <Bot className="h-5 w-5" />,
        title: "Agent-to-agent workflows",
        desc: "Specialized agents hand work to each other automatically to complete complex, multi-step tasks.",
        pillar: "Operations",
        tone: "text-blue-300",
        ring: "border-blue-400/20 bg-blue-500/10",
        glow: "rgba(96, 165, 250, 0.35)" as const,
    },
    {
        icon: <Bell className="h-5 w-5" />,
        title: "Proactive updates",
        desc: "Customers hear from you before they have to ask — shipping delays, renewals, and milestones included.",
        pillar: "Experience",
        tone: "text-violet-300",
        ring: "border-violet-400/20 bg-violet-500/10",
        glow: "rgba(167, 139, 250, 0.35)" as const,
    },
    {
        icon: <Gift className="h-5 w-5" />,
        title: "Post-purchase journeys",
        desc: "Turn a single sale into an ongoing relationship with timely, relevant follow-up communication.",
        pillar: "Experience",
        tone: "text-violet-300",
        ring: "border-violet-400/20 bg-violet-500/10",
        glow: "rgba(167, 139, 250, 0.35)" as const,
    },
    {
        icon: <Layers className="h-5 w-5" />,
        title: "Omnichannel experiences",
        desc: "One consistent agent personality across chat, email, WhatsApp, and voice — never a cold restart.",
        pillar: "Experience",
        tone: "text-violet-300",
        ring: "border-violet-400/20 bg-violet-500/10",
        glow: "rgba(167, 139, 250, 0.35)" as const,
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
                        <Bot className="h-3.5 w-3.5" />
                        Inside the pillars
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        <SplitText text="Capabilities across" className="inline-block" delay={30} duration={0.5} ease="easeOut" />
                        <br />
                        <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">every pillar</span>
                    </h2>
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                        A closer look at what these agents actually do once they&apos;re live in your business.
                    </p>
                </motion.div>

                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative z-10 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3"
                    >
                        {capabilities.map((s, i) => (
                            <motion.div key={i} variants={itemVariants} className="h-full">
                                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="h-full">
                                    <SpotlightCard
                                        spotlightColor={s.glow}
                                        className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                                    >
                                        <div className="relative z-10 mb-6 flex items-start justify-between">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${s.ring} ${s.tone}`}>
                                                {s.icon}
                                            </div>
                                            <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${s.ring} ${s.tone}`}>{s.pillar}</span>
                                        </div>

                                        <div className="relative z-10 flex-grow">
                                            <h3 className="mb-2.5 text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                                            <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
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
