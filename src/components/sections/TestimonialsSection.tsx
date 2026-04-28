"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, CheckCircle2 } from "lucide-react";
import SpotlightCard from "../react-bits/SpotlightCard";

const testimonials = [
    {
        quote: "protype built an MVP that would have taken us 6 months in just 4 weeks. Their blend of AI and full-stack development is unmatched.",
        author: "Sarah Jenkins",
        role: "Founder, Logistics OS",
        tag: "MVP Development",
    },
    {
        quote: "The custom AI agents have completely transformed our lead generation pipeline. We're seeing 3x more qualified meetings booked automatically.",
        author: "David Chen",
        role: "VP Sales, Nexus Systems",
        tag: "AI Automation",
    },
    {
        quote: "The cleanest code, the fastest delivery, and the smartest systems. Easily the best technical partners we've worked with.",
        author: "Elena Rodriguez",
        role: "CTO, FinServe Corp",
        tag: "Enterprise System",
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative overflow-hidden py-6 lg:py-10 bg-white border-y border-black/5">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-cyan-100/40 to-teal-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-zinc-700 text-sm font-medium mb-6">
                        <MessageSquareQuote className="w-4 h-4" />
                        <span>Client Success</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        Hear from the <span className="text-blue-400">Founders</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                    {testimonials.map((t, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor="rgba(59, 130, 246, 0.15)"
                            className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.05)] rounded-[32px] p-8 transition-all duration-300 hover:shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_15px_40px_rgba(0,0,0,0.08)] relative overflow-hidden group"
                        >
                            {/* Subtle inner bloom */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[32px]" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <span className="text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase shadow-sm">
                                        {t.tag}
                                    </span>
                                </div>
                                
                                <blockquote className="text-zinc-700 font-medium leading-relaxed mb-10 flex-1 text-[15px]">
                                    "{t.quote}"
                                </blockquote>
                                
                                <div className="flex items-center justify-between border-t border-black/5 pt-6 mt-auto">
                                    <div>
                                        <div className="font-bold text-zinc-900 text-sm">{t.author}</div>
                                        <div className="text-zinc-500 text-xs mt-0.5">{t.role}</div>
                                    </div>
                                    <CheckCircle2 className="w-5 h-5 text-blue-500/50" />
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
