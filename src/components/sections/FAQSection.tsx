"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, X } from "lucide-react";

const faqs = [
    {
        q: "How long does it take to build an MVP?",
        a: "Our standard timeframe for a full-featured Minimum Viable Product is 4 weeks. This includes planning, UI/UX design, full-stack development, and deployment.",
    },
    {
        q: "What kind of AI agents do you build?",
        a: "We build custom AI agents for anything from intelligent lead routing and completely autonomous email management to document OCR and internal knowledge retrieval.",
    },
    {
        q: "Do I own the source code?",
        a: "Yes. Once the project is completed and handed over, you own 100% of the Intellectual Property and raw source code.",
    },
    {
        q: "What is your ongoing support model?",
        a: "Every project comes with 30 days of post-launch support. Afterward, we offer flexible retainer models for scaling the app or maintaining the AI agents.",
    },
    {
        q: "What tech stack do you use?",
        a: "We primarily use Next.js, React, Node, Python, and PostgreSQL. For AI, we utilize state-of-the-art models from OpenAI, Anthropic, or open-source solutions like Llama depending on your data privacy needs.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative overflow-hidden pt-2 lg:pt-4 pb-6 lg:pb-10 bg-[#fafafa] border-t border-black/5">
            {/* Global background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-fuchsia-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <div className="section-container relative z-10 max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-zinc-700 text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        Common <span className="text-blue-400">Questions</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-[24px] overflow-hidden transition-all duration-300 ${
                                openIndex === i 
                                    ? 'bg-white/60 backdrop-blur-xl border border-white/80 shadow-[inset_0_2px_20px_rgba(255,255,255,0.9),0_10px_30px_rgba(0,0,0,0.05)]' 
                                    : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_10px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.02)] hover:bg-white/50'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none transition-all duration-300"
                            >
                                <span className={`font-bold pr-8 transition-colors ${openIndex === i ? 'text-blue-500' : 'text-zinc-900'}`}>{faq.q}</span>
                                <div className="flex-shrink-0">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-blue-100 text-blue-600' : 'bg-black/5 text-zinc-500'}`}>
                                        {openIndex === i ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 text-zinc-600 font-medium leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
