"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, X } from "lucide-react";

const faqs = [
    {
        q: "What kind of AI agents does protype build?",
        a: "We build custom agents across three pillars — support (customer & employee-facing), operations (internal workflow automation), and customer experience (personalized, proactive communication). Every agent is built around your business, not a generic template.",
    },
    {
        q: "Which channels do your agents work on?",
        a: "WhatsApp, web chat, email, and internal tools like Slack — plus your existing CRM, helpdesk, and CMS. If your customers or employees are already there, your agent can be too.",
    },
    {
        q: "What happens when an agent can't handle something?",
        a: "Every agent has a clear human escalation path built in from day one. Nothing gets stuck — complex or sensitive requests are handed off to your team with full conversation context.",
    },
    {
        q: "How long does it take to launch an agent?",
        a: "Most single-agent deployments go live in 2-4 weeks, from discovery to a supervised rollout. Multi-agent automation programs across several pillars are scoped individually.",
    },
    {
        q: "Is our data safe?",
        a: "Yes. Agents run on your approved infrastructure and integrations, with access limited to what each workflow actually needs. We're happy to work within your existing security and compliance requirements.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative isolate overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,.1),transparent_40%)]" />

            <div className="relative z-10 mx-auto max-w-3xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center md:mb-16"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
                        <HelpCircle className="h-3.5 w-3.5" />
                        FAQ
                    </div>
                    <h2 className="font-[Outfit] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        Common <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">questions</span>
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
                            className={`overflow-hidden rounded-[22px] border backdrop-blur-xl transition-all duration-300 ${
                                openIndex === i
                                    ? 'border-white/20 bg-white/[0.07] shadow-[0_20px_50px_rgba(0,0,0,0.35)]'
                                    : 'border-white/10 bg-white/[0.04] hover:border-white/15 hover:bg-white/[0.05]'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex w-full items-center justify-between px-6 py-6 text-left transition-all duration-300 focus:outline-none"
                            >
                                <span className={`pr-8 font-semibold transition-colors ${openIndex === i ? 'text-cyan-200' : 'text-white'}`}>{faq.q}</span>
                                <div className="flex-shrink-0">
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${openIndex === i ? 'bg-cyan-500/15 text-cyan-300' : 'bg-white/[0.06] text-slate-400'}`}>
                                        {openIndex === i ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
                                        <div className="px-6 pb-6 pt-2 leading-relaxed text-slate-400">
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
