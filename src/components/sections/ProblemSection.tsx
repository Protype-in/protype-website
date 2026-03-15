"use client";

import { motion } from "framer-motion";
import { FileText, Package, MessageSquare, Target, Clock, AlertTriangle } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";

const problems = [
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Manual Documentation",
        desc: "Hours wasted on repetitive paperwork and data entry across spreadhseets.",
    },
    {
        icon: <Package className="w-6 h-6" />,
        title: "Shipment Tracking Chaos",
        desc: "No centralized system to track shipments, deliveries, and logistics.",
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Unorganized Communication",
        desc: "Client conversations scattered across email, WhatsApp, and calls.",
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Missed Leads",
        desc: "Potential clients fall through the cracks without proper follow-up.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Slow Development",
        desc: "Months spent building products that could be launched in weeks.",
    },
];

export default function ProblemSection() {
    return (
        <section className="relative overflow-hidden py-16 bg-[#030305]">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        <span>The Bottlenecks</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        Businesses Waste <span className="text-red-400">Thousands of Hours</span>
                        <br />
                        on Manual Work
                    </h2>
                    
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Legacy systems and fragmented tools drain your team's productivity. It's time to let automation do the heavy lifting so you can focus on growth.
                    </p>
                </motion.div>

                {/* Spotlight Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                    {problems.map((p, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor="rgba(239, 68, 68, 0.15)"
                            className="bg-[#0a0a0f] border-white/5 rounded-2xl group"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{p.desc}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                    
                    {/* Final spanning card */}
                    <SpotlightCard
                        spotlightColor="rgba(59, 130, 246, 0.15)"
                        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 rounded-2xl md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-center p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Sound Familiar?</h3>
                        <p className="text-blue-200/80 mb-6">Let's fix it with intelligent systems.</p>
                        <a href="#services" className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors">
                            See Solutions
                        </a>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
