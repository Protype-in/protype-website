"use client";

import { motion, Variants } from "framer-motion";
import { Headset, Workflow, Sparkles, ArrowRight } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const pillars = [
    {
        icon: <Headset className="h-6 w-6" />,
        title: "Support",
        tagline: "Handle the volume",
        desc: "Help businesses handle the volume of requests coming from customers and employees — without the wait.",
        features: [
            "Customer support agents",
            "WhatsApp support",
            "Order / status queries",
            "Ticket & issue handling",
            "Internal employee support",
            "Human escalation",
        ],
        tone: "text-cyan-300",
        ring: "border-cyan-400/20 bg-cyan-500/10",
        dot: "bg-cyan-300",
        glow: "rgba(34, 211, 238, 0.35)" as const,
    },
    {
        icon: <Workflow className="h-6 w-6" />,
        title: "Operations",
        tagline: "Automate the busywork",
        desc: "Automate the repetitive, time-consuming processes running quietly inside your business.",
        features: [
            "Workflow automation",
            "Information retrieval",
            "Data processing",
            "Lead & customer follow-ups",
            "Internal workflows",
            "Agent-to-agent workflows",
        ],
        tone: "text-blue-300",
        ring: "border-blue-400/20 bg-blue-500/10",
        dot: "bg-blue-300",
        glow: "rgba(96, 165, 250, 0.35)" as const,
    },
    {
        icon: <Sparkles className="h-6 w-6" />,
        title: "Customer Experience",
        tagline: "Make it personal",
        desc: "Make every interaction faster, more personalized, and more useful — from first touch to repeat customer.",
        features: [
            "Personalized interactions",
            "Proactive updates",
            "Post-purchase communication",
            "Customer re-engagement",
            "Intelligent recommendations",
            "Omnichannel experiences",
        ],
        tone: "text-violet-300",
        ring: "border-violet-400/20 bg-violet-500/10",
        dot: "bg-violet-300",
        glow: "rgba(167, 139, 250, 0.35)" as const,
    },
];

export default function SolutionSection() {
    return (
        <section id="solutions" className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.12),transparent_45%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
                        <Workflow className="h-3.5 w-3.5" />
                        The three pillars
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        <SplitText text="One AI layer," className="inline-block" delay={30} duration={0.5} ease="easeOut" />
                        <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">three pillars of impact.</span>
                    </h2>
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                        protype builds highly customizable AI agents and automation systems organized around the three places automation moves the needle fastest.
                    </p>
                </motion.div>

                <div className="relative mx-auto max-w-7xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative z-10 grid gap-6 text-left lg:grid-cols-3"
                    >
                        {pillars.map((s, i) => (
                            <motion.div key={i} variants={itemVariants} className="h-full">
                                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="h-full">
                                    <SpotlightCard
                                        spotlightColor={s.glow}
                                        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:p-8"
                                    >
                                        <div className="relative z-10 flex flex-grow flex-col">
                                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[20px] border ${s.ring} ${s.tone} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                                {s.icon}
                                            </div>

                                            <div className={`mb-1.5 text-xs font-bold uppercase tracking-[0.14em] ${s.tone}`}>{s.tagline}</div>
                                            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                                            <p className="mb-7 text-[15px] leading-relaxed text-slate-400">{s.desc}</p>

                                            <ul className="mb-9 flex-grow space-y-2.5">
                                                {s.features.map((f, fi) => (
                                                    <li key={fi} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-slate-200">
                                                        <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            <a
                                                href="#services"
                                                className="group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.09]"
                                            >
                                                See it in action
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
