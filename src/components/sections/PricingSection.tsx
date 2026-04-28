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
        name: "MVP Starter",
        desc: "Perfect for founders looking to validate their idea fast.",
        price: "$15k",
        features: [
            "4-Week Delivery Timeline",
            "Core Product Features",
            "Basic AI Integration",
            "Responsive Web App",
            "1 Month Post-Launch Support",
        ],
        popular: false,
    },
    {
        name: "AI Automation Sandbox",
        desc: "Ideal for businesses ready to automate key workflows.",
        price: "$5k/mo",
        features: [
            "2 Custom AI Agents",
            "CRM & Email Integrations",
            "Dedicated Slack Channel",
            "Weekly Strategy Calls",
            "Continuous Agent Training",
        ],
        popular: true,
    },
    {
        name: "Enterprise Scaling",
        desc: "Full-scale custom systems for complex organizations.",
        price: "Custom",
        features: [
            "Unlimited AI Agents",
            "Custom MVP Portals",
            "On-Premise Deployment Options",
            "Dedicated Engineering Team",
            "SLA Guarantees",
        ],
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative overflow-hidden py-4 lg:py-6 bg-[#fafafa]">
            <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        <Crown className="w-4 h-4" />
                        <span>Investment Levels</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="Transparent Pricing"
                            className="inline-block"
                            delay={40}
                            duration={0.6}
                            ease="easeOut"
                        />
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        No hidden fees. Just clear milestones and predictable costs for
                        delivering high-impact automation and software.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {plans.map((plan, i) => (
                        <motion.div key={i} variants={itemVariants} className="h-full">
                            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor={plan.popular ? "rgba(59, 130, 246, 0.15)" : "rgba(255, 255, 255, 0.05)"}
                                    className={`bg-white border rounded-3xl relative h-full flex flex-col ${
                                        plan.popular ? "border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]" : "border-black/5"
                                    }`}
                                >
                                    <div className="relative z-10 flex flex-col flex-grow h-full">
                                        {plan.popular && (
                                            <div className="absolute -top-12 -right-8 bg-blue-500 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                Most Popular
                                            </div>
                                        )}
                                        
                                        <h3 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight">{plan.name}</h3>
                                        <p className="text-zinc-600 text-sm mb-6 font-light h-10">{plan.desc}</p>
                                        
                                        <div className="mb-8">
                                            <span className="text-4xl font-black text-zinc-900 tracking-tighter">{plan.price}</span>
                                            {plan.price !== "Custom" && <span className="text-zinc-500 text-sm ml-2">base</span>}
                                        </div>

                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {plan.features.map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-3 text-zinc-700 text-sm font-light">
                                                    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-blue-400" : "text-zinc-500"}`} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="#cta"
                                            className={`w-full text-center py-4 mt-auto rounded-xl font-bold text-sm transition-all duration-300 ${
                                                plan.popular
                                                    ? "bg-blue-600 hover:bg-blue-500 text-zinc-900 shadow-lg shadow-blue-500/25"
                                                    : "bg-black/5 hover:bg-black/10 text-zinc-900 border border-black/10"
                                            }`}
                                        >
                                            Get Started
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
