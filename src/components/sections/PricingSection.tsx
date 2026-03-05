"use client";

import { motion } from "framer-motion";
import { CreditCard, Check, Zap } from "lucide-react";

const plans = [
    {
        name: "Starter",
        planId: "PLAN_STARTER",
        price: "$299",
        period: "one-time",
        desc: "Perfect for businesses exploring AI automation.",
        features: [
            "AI consultation session",
            "Business process audit",
            "Basic automation setup",
            "1 AI agent configuration",
            "Email support",
            "7-day onboarding",
        ],
        cta: "Get Started",
        popular: false,
        neonColor: "#64748b",
    },
    {
        name: "Growth",
        planId: "PLAN_GROWTH",
        price: "$1,200+",
        period: "project",
        desc: "Full custom AI agents for serious businesses.",
        features: [
            "Everything in Starter",
            "Custom AI agent development",
            "Multi-system integrations",
            "CRM & workflow automation",
            "Dashboard & analytics",
            "Priority support",
            "3 months maintenance",
        ],
        cta: "Most Popular",
        popular: true,
        neonColor: "#00f5ff",
    },
    {
        name: "MVP Dev",
        planId: "PLAN_MVP",
        price: "$3,000+",
        period: "project",
        desc: "Launch your startup product in 4 weeks.",
        features: [
            "Full-stack MVP development",
            "UI/UX design included",
            "Backend APIs & database",
            "AI feature integration",
            "Cloud deployment",
            "6 months support",
            "Source code ownership",
        ],
        cta: "Start Building",
        popular: false,
        neonColor: "#7c3aed",
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5ff]/2 to-transparent" />
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <CreditCard className="w-3 h-3 inline-block mr-1" />
                        PRICING_TIERS // NO_HIDDEN_FEES
                    </div>
                    <h2 className="section-title">
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        No hidden fees. Choose the tier that fits your stage and scale as you grow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`cyber-card p-8 flex flex-col relative group ${plan.popular ? "scale-105 z-10" : ""}`}
                            style={{ borderColor: `${plan.neonColor}15` }}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div
                                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-black text-[10px] font-bold font-mono px-4 py-1 rounded"
                                    style={{ background: "linear-gradient(90deg, #00f5ff, #7c3aed)" }}
                                >
                                    ★ MOST_POPULAR
                                </div>
                            )}

                            {/* Plan ID */}
                            <div className="flex items-center justify-between mb-5">
                                <span
                                    className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded"
                                    style={{ color: plan.neonColor, background: `${plan.neonColor}0d`, border: `1px solid ${plan.neonColor}25` }}
                                >
                                    {plan.planId}
                                </span>
                                {plan.popular && (
                                    <Zap className="w-4 h-4" style={{ color: plan.neonColor }} />
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                                <p className="text-xs text-[#64748b] mb-4">{plan.desc}</p>
                                <div className="flex items-baseline gap-2">
                                    <span
                                        className="text-4xl font-extrabold font-mono"
                                        style={{
                                            color: plan.popular ? plan.neonColor : "#e2e8f0",
                                            textShadow: plan.popular ? `0 0 30px ${plan.neonColor}50` : "none",
                                        }}
                                    >
                                        {plan.price}
                                    </span>
                                    <span className="text-[#334155] text-xs font-mono">/{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-2.5 mb-8 flex-1 font-mono text-xs">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="flex items-center gap-2.5 text-[#64748b]">
                                        <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: plan.neonColor }} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#cta"
                                className={`text-center py-3 px-6 font-mono font-semibold text-xs transition-all duration-300 rounded ${plan.popular ? "btn-glow" : "btn-outline"}`}
                            >
                                {plan.cta}
                            </a>

                            {/* Hover top glow */}
                            <div
                                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${plan.neonColor}80, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 text-xs text-[#334155] font-mono"
                >
                    <span className="text-[#00ff88]">$</span> need_custom_solution?{" "}
                    <a href="#cta" className="text-[#00f5ff] hover:text-white transition-colors">contact_us</a>{" "}
                    for enterprise pricing.
                </motion.p>
            </div>
        </section>
    );
}
