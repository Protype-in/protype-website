"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, BarChart, Clock, Users } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";
import SplitText from "../react-bits/SplitText";
import DecayCard from "../react-bits/DecayCard";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
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

const metrics = [
    { label: "Hours Saved", value: "1,200+", icon: <Clock className="w-4 h-4" /> },
    { label: "Revenue Increase", value: "35%", icon: <BarChart className="w-4 h-4" /> },
    { label: "Active Users", value: "10k+", icon: <Users className="w-4 h-4" /> },
];

export default function CaseStudiesSection() {
    return (
        <section id="case-studies" className="relative overflow-hidden py-4 lg:py-6 bg-white">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-zinc-700 text-sm font-medium mb-6">
                        <BarChart className="w-4 h-4" />
                        <span>Proven Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        <SplitText
                            text="Real Results for"
                            className="inline-block"
                            delay={40}
                            duration={0.6}
                            ease="easeOut"
                        />
                        {" "}
                        <span className="text-blue-400">Real Companies</span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
                        See how our intelligent automation and MVPs have transformed operations
                        for businesses worldwide.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 text-left"
                >
                    {/* Featured Case Study */}
                    <motion.div variants={itemVariants} className="lg:w-2/3 h-full">
                        <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.3 }} className="h-full">
                            <SpotlightCard
                                spotlightColor="rgba(59, 130, 246, 0.15)"
                                className="bg-[#fafafa] border-black/5 rounded-3xl h-full"
                            >
                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    <div>
                                        <span className="text-sm font-medium text-blue-400 mb-4 block">Logistics Automation</span>
                                        <h3 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">Global Freight Forwarder</h3>
                                        <p className="text-zinc-600 leading-relaxed font-light mb-8 max-w-lg">
                                            We deployed a custom AI agent fleet to read incoming custom declarations,
                                            extract data, and push it directly into their global ERP. This eliminated manual
                                            data entry errors and reduced processing times from days to seconds.
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-8 border-t border-black/5 mt-auto">
                                        {metrics.map((m, i) => (
                                            <div key={i}>
                                                <div className="text-zinc-500 font-light text-xs uppercase tracking-widest flex items-center gap-2 mb-1">
                                                    {m.icon}
                                                    {m.label}
                                                </div>
                                                <div className="text-2xl font-bold text-zinc-900">{m.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </motion.div>

                    {/* Secondary Studies Column */}
                    <div className="flex flex-col gap-8 lg:w-1/3 mt-12 md:mt-0">
                        <motion.div variants={itemVariants} className="h-full w-full flex justify-center overflow-hidden rounded-3xl group relative">
                            <DecayCard 
                                width={350} 
                                height={350} 
                                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                            >
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-sm font-medium text-emerald-400 mb-2 block">FinTech MVP</span>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">Smart Lending App</h3>
                                    <p className="text-zinc-700 text-sm font-light mb-4">
                                        Validated and launched a complex platform in 4 weeks.
                                    </p>
                                    <a href="#" className="flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-emerald-300 transition-colors">
                                        Read Story <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </DecayCard>
                        </motion.div>

                        <motion.div variants={itemVariants} className="h-full w-full flex justify-center overflow-hidden rounded-3xl group relative">
                            <DecayCard 
                                width={350} 
                                height={350} 
                                image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop"
                            >
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-sm font-medium text-purple-400 mb-2 block">HR Automation</span>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">AI Recruitment Bot</h3>
                                    <p className="text-zinc-700 text-sm font-light mb-4">
                                        Automated initial candidate screening scheduling.
                                    </p>
                                    <a href="#" className="flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-purple-300 transition-colors">
                                        Read Story <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </DecayCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
