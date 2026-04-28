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
        <section id="faq" className="relative overflow-hidden py-16 bg-[#fafafa] border-t border-black/5">
            <div className="section-container relative z-10 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
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
                            className="border border-black/10 bg-white rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                            >
                                <span className="font-semibold text-zinc-900 pr-8">{faq.q}</span>
                                <div className="text-zinc-500 font-light flex-shrink-0">
                                    {openIndex === i ? <X className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5" />}
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
                                        <div className="px-6 pb-6 pt-2 text-zinc-600 font-light leading-relaxed border-t border-black/5">
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
