"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
    {
        quote: "The automation system saved our team 10+ hours per week. The AI email agent handles all our follow-ups perfectly — our response rate doubled in the first month.",
        name: "Arjun Mehta",
        role: "CEO",
        company: "TradeFlow Solutions",
        avatar: "AM",
        neonColor: "#00f5ff",
        id: "REVIEW_001",
    },
    {
        quote: "Elevate built our import-export CRM in under 4 weeks. It completely replaced our spreadsheet chaos. Now we track every shipment, client and document in one place.",
        name: "Sarah Chen",
        role: "Operations Director",
        company: "LogiPro International",
        avatar: "SC",
        neonColor: "#7c3aed",
        id: "REVIEW_002",
    },
    {
        quote: "We integrated AI document processing into our workflow and it cut our invoice processing time by 95%. This is the future of trade operations.",
        name: "Mohammed Al-Rashid",
        role: "Founder",
        company: "ExportHub MENA",
        avatar: "MR",
        neonColor: "#f59e0b",
        id: "REVIEW_003",
    },
    {
        quote: "Our MVP was ready to launch in exactly 4 weeks as promised. The team's understanding of both AI and business processes is exceptional.",
        name: "Priya Kapoor",
        role: "Co-Founder",
        company: "SynthVault SaaS",
        avatar: "PK",
        neonColor: "#00ff88",
        id: "REVIEW_004",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const t = testimonials[current];

    return (
        <section className="relative overflow-hidden border-y border-[#00f5ff]/08">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f5ff]/3 via-transparent to-[#7c3aed]/3" />
            <div className="animated-grid-bg" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <MessageSquareQuote className="w-3 h-3 inline-block mr-1" />
                        CLIENT_FEEDBACK // VERIFIED_REVIEWS
                    </div>
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">Global Teams</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="cyber-card p-10 text-center"
                            style={{ borderColor: `${t.neonColor}15` }}
                        >
                            {/* Review ID */}
                            <div
                                className="font-mono text-[10px] tracking-widest mb-6 inline-block px-3 py-1 rounded"
                                style={{ color: t.neonColor, background: `${t.neonColor}0d`, border: `1px solid ${t.neonColor}25` }}
                            >
                                {t.id} // VERIFIED
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-base text-[#94a3b8] leading-relaxed mb-8 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <div
                                    className="w-11 h-11 rounded-lg flex items-center justify-center font-bold font-mono text-sm text-black"
                                    style={{ background: `linear-gradient(135deg, ${t.neonColor}, #7c3aed)` }}
                                >
                                    {t.avatar}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-sm">{t.name}</div>
                                    <div className="text-xs font-mono" style={{ color: t.neonColor }}>
                                        {t.role} @ {t.company}
                                    </div>
                                </div>
                            </div>

                            {/* Hover glow */}
                            <div
                                className="absolute inset-x-0 top-0 h-px"
                                style={{ background: `linear-gradient(90deg, transparent, ${t.neonColor}50, transparent)` }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Nav dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className="h-1 rounded-full transition-all duration-300"
                                style={{
                                    width: i === current ? "2rem" : "0.375rem",
                                    background: i === current ? testimonials[i].neonColor : "#1a1f2e",
                                    boxShadow: i === current ? `0 0 8px ${testimonials[i].neonColor}60` : "none",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
