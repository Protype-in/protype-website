"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Crown } from "lucide-react";
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

const plans = [
    {
        name: "Starter Agent",
        desc: "One AI agent live in a single channel — the fastest way to prove automation works for you.",
        price: "$1.2k/mo",
        features: [
            "1 AI agent (support, ops, or CX)",
            "1 channel integration",
            "Human escalation included",
            "Monthly performance report",
            "Live in 2-4 weeks",
        ],
        popular: false,
    },
    {
        name: "Growth Automation",
        desc: "Ideal for businesses ready to automate across support, operations, and customer experience.",
        price: "$3.5k/mo",
        features: [
            "Up to 3 AI agents across pillars",
            "Unlimited channel integrations",
            "CRM & helpdesk integrations",
            "Weekly optimization calls",
            "Priority support",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        desc: "Full-scale custom automation systems for complex, multi-team organizations.",
        price: "Custom",
        features: [
            "Unlimited AI agents",
            "Custom agent-to-agent workflows",
            "Dedicated engineering team",
            "On-premise / private deployment",
            "SLA guarantees",
        ],
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="hero-grid absolute inset-0 opacity-20" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
                        <Crown className="h-3.5 w-3.5" />
                        Investment levels
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        <SplitText text="Transparent pricing" className="inline-block" delay={40} duration={0.6} ease="easeOut" />
                    </h2>
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
                        No hidden fees. Just clear scope and predictable costs for deploying
                        AI agents across support, operations, and customer experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
                >
                    {plans.map((plan, i) => (
                        <motion.div key={i} variants={itemVariants} className="h-full">
                            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor={plan.popular ? "rgba(56, 189, 248, 0.35)" : "rgba(148, 163, 184, 0.25)"}
                                    className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 backdrop-blur-xl transition-all duration-300 ${
                                        plan.popular
                                            ? "border border-cyan-300/25 bg-gradient-to-br from-cyan-500/[0.08] to-blue-500/[0.04] shadow-[0_20px_70px_rgba(34,211,238,0.15)]"
                                            : "border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 hover:bg-white/[0.06]"
                                    }`}
                                >
                                    <div className="relative z-10 flex h-full flex-grow flex-col">
                                        {plan.popular && (
                                            <div className="absolute -top-8 right-0 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                                                Most popular
                                            </div>
                                        )}

                                        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">{plan.name}</h3>
                                        <p className="mb-6 h-12 text-[15px] leading-relaxed text-slate-400">{plan.desc}</p>

                                        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                            <span className="text-4xl font-black tracking-tighter text-white">{plan.price}</span>
                                            {plan.price === "Custom" && <span className="ml-2 text-sm font-medium text-slate-400">scoped to you</span>}
                                        </div>

                                        <ul className="mb-10 flex-grow space-y-4">
                                            {plan.features.map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-3 text-[15px] font-medium text-slate-300">
                                                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${plan.popular ? 'bg-cyan-500/15 text-cyan-300' : 'bg-white/[0.06] text-slate-300'}`}>
                                                        <CheckCircle2 className="h-4 w-4" />
                                                    </div>
                                                    <span className="mt-0.5">{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="#cta"
                                            className={`mt-auto w-full rounded-full py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                                                plan.popular
                                                    ? "bg-white text-slate-950 hover:bg-cyan-100"
                                                    : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.09]"
                                            }`}
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
