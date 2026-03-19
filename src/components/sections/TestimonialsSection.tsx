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
        <section id="testimonials" className="relative overflow-hidden py-16 bg-[#0a0a0f]">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium mb-6">
                        <MessageSquareQuote className="w-4 h-4" />
                        <span>Client Success</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        Hear from the <span className="text-blue-400">Founders</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                    {testimonials.map((t, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor="rgba(255, 255, 255, 0.05)"
                            className="bg-[#030305] border-white/5 rounded-3xl"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <span className="text-[10px] font-bold tracking-widest px-2 py-1 rounded bg-blue-500/10 text-blue-400 uppercase">
                                        {t.tag}
                                    </span>
                                </div>
                                
                                <blockquote className="text-zinc-300 font-light leading-relaxed mb-8 flex-1">
                                    "{t.quote}"
                                </blockquote>
                                
                                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                                    <div>
                                        <div className="font-bold text-white text-sm">{t.author}</div>
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
