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
        <section id="pricing" className="relative overflow-hidden py-6 lg:py-10 bg-[#fafafa]">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/30 via-indigo-200/30 to-purple-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />
            
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
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
                >
                    {plans.map((plan, i) => (
                        <motion.div key={i} variants={itemVariants} className="h-full">
                            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }} className="h-full">
                                <SpotlightCard
                                    spotlightColor={plan.popular ? "rgba(59, 130, 246, 0.3)" : "rgba(161, 161, 170, 0.2)"}
                                    className={`rounded-[32px] relative h-full flex flex-col p-8 transition-all duration-300 ${
                                        plan.popular 
                                            ? "bg-gradient-to-br from-blue-50/80 to-blue-100/80 border border-blue-200 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_40px_rgba(59,130,246,0.15)]" 
                                            : "bg-white/40 border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_4px_20px_rgba(0,0,0,0.02)] hover:bg-white/60 hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_8px_30px_rgba(0,0,0,0.05)]"
                                    }`}
                                >
                                    {/* Optional subtle light bloom inside the card */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-[32px]" />

                                    <div className="relative z-10 flex flex-col flex-grow h-full">
                                        {plan.popular && (
                                            <div className="absolute -top-12 -right-8 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-400">
                                                Most Popular
                                            </div>
                                        )}
                                        
                                        <h3 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight drop-shadow-sm">{plan.name}</h3>
                                        <p className="text-zinc-600/90 text-[15px] font-medium mb-6 h-12 leading-relaxed">{plan.desc}</p>
                                        
                                        <div className="mb-8 p-4 rounded-2xl bg-white/50 border border-white/80 shadow-sm backdrop-blur-md">
                                            <span className="text-4xl font-black text-zinc-900 tracking-tighter">{plan.price}</span>
                                            {plan.price !== "Custom" && <span className="text-zinc-500 text-sm ml-2 font-medium">base</span>}
                                        </div>

                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {plan.features.map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-3 text-zinc-700 text-[15px] font-medium">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-600'}`}>
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                    <span className="mt-0.5">{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="#cta"
                                            className={`w-full text-center py-4 mt-auto rounded-2xl font-bold text-sm transition-all duration-300 relative z-10 overflow-hidden group/btn ${
                                                plan.popular
                                                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                                                    : "bg-white/80 text-zinc-900 border border-white hover:bg-white shadow-sm"
                                            }`}
                                        >
                                            <span className="relative z-10">Get Started</span>
                                            {plan.popular && <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />}
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
