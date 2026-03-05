"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        q: "How long does MVP development take?",
        a: "Our standard MVP development cycle is 4 weeks: Week 1 for planning & design, Week 2 for core development, Week 3 for AI integration & testing, and Week 4 for launch. Larger projects may take 6–8 weeks depending on complexity.",
    },
    {
        q: "Can AI agents integrate with our existing systems?",
        a: "Absolutely. Our AI agents are built to integrate with CRMs, ERPs, email platforms, Slack, WhatsApp, spreadsheets, and custom APIs. We handle all the integration work for you.",
    },
    {
        q: "Do you support international businesses?",
        a: "Yes — we work with import-export companies, global trading firms, and startups across Asia, Middle East, Europe, and North America. We support multi-language and multi-currency workflows.",
    },
    {
        q: "What happens after the project is delivered?",
        a: "We provide full documentation, source code ownership, and ongoing support. Growth and MVP plans include 3–6 months of maintenance. We also offer retainer plans for continuous improvement.",
    },
    {
        q: "How much does a custom AI agent cost?",
        a: "Our Growth plan starts at $1,200 for a custom AI agent. Pricing depends on complexity, integrations, and scale. Book a free discovery call and we'll provide a detailed quote within 24 hours.",
    },
    {
        q: "Can you build for our specific industry?",
        a: "Yes. While we specialize in import-export and logistics, we've built for SaaS, real estate, legal, healthcare, and e-commerce. Every solution is customized to your business workflow.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden">
            <div className="animated-grid-bg" />
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="tech-badge mb-6">
                        <MessageCircleQuestion className="w-3 h-3 inline-block mr-1" />
                        FAQ_DATABASE // QUERYING
                    </div>
                    <h2 className="section-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know before starting your AI journey with us.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-2">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="cyber-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left group"
                            >
                                <div className="flex items-center gap-3 flex-1">
                                    <span
                                        className="font-mono text-[10px] flex-shrink-0 px-1.5 py-0.5 rounded"
                                        style={{ color: "#00f5ff", background: "rgba(0,245,255,0.05)", border: "1px solid rgba(0,245,255,0.15)" }}
                                    >
                                        Q_{String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-semibold text-sm text-[#e2e8f0] group-hover:text-white transition-colors pr-4">
                                        {faq.q}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 w-6 h-6 rounded border border-[#00f5ff]/20 flex items-center justify-center text-[#00f5ff]"
                                >
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 text-sm text-[#64748b] leading-relaxed border-t border-[#00f5ff]/08 pt-4 font-mono">
                                            <span className="text-[#00ff88] mr-2">›</span>
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
