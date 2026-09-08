"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Plus,
  MessageCircle,
  Sparkles,
  Bot,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import Magnet from "../react-bits/Magnet";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  badge?: string;
  highlight?: string;
}

const faqs: FAQItem[] = [
  {
    id: "agents-types",
    category: "Agents & Scope",
    question: "What kind of AI agents does Protype build?",
    answer:
      "We build custom, autonomous agents across three core pillars: Support (handling order tracking, returns, cancellations, and live inquiries), Operations (automating ERP sync, inventory updates, and warehouse alerts), and Customer Experience (driving VIP outreach, churn re-engagement, and proactive post-purchase check-ins). Every agent is trained exclusively on your brand's data, tone, and operational rules.",
    highlight: "Custom-trained on your brand & workflows",
  },
  {
    id: "integrations",
    category: "Integrations",
    question: "Which tools and channels do your agents integrate with?",
    answer:
      "Protype connects natively to your front-facing channels (WhatsApp, Webchat, Instagram DM, Email, and Slack) and backend systems (Shopify, WooCommerce, Shiprocket, ClickPost, Gorgias, Zendesk, Zoho, and custom PostgreSQL/REST APIs). If your operations rely on an internal API or custom CRM, our engineering squad builds bespoke bidirectional connectors.",
    highlight: "Shopify, Shiprocket, Gorgias & custom APIs",
  },
  {
    id: "escalations",
    category: "Human Handoff",
    question: "What happens when an agent encounters an edge case or complex request?",
    answer:
      "Nothing ever gets stranded. Every agent has a built-in supervised confidence threshold and instant human escalation protocol. When an edge case, high-value dispute, or sensitive VIP inquiry arises, the conversation is seamlessly handed over to your human team on Slack, Gorgias, or WhatsApp — complete with an AI-generated conversation summary and recommended action.",
    highlight: "Zero hallucination fallback & full context handoff",
  },
  {
    id: "timeline",
    category: "Timeline",
    question: "How long does it take to launch an agent?",
    answer:
      "Most single-agent deployments go live within 2 to 4 weeks. This includes system audit, custom prompt & guardrail engineering, sandbox testing on your historical tickets, ERP/CRM integration, and a supervised launch phase where our engineers closely monitor response accuracy before full automation.",
    highlight: "Live in 2-4 weeks with supervised rollout",
  },
  {
    id: "data-privacy",
    category: "Security",
    question: "How do you protect customer data and company privacy?",
    answer:
      "Security is foundational to our architecture. Protype adheres to strict SOC2-ready data isolation standards. Customer conversations and operational records are encrypted in transit (TLS 1.3) and at rest (AES-256). We enforce strict role-based access control and never use your proprietary company data or customer chats to train public foundational models.",
    highlight: "Enterprise encryption & private sandbox isolation",
  },
  {
    id: "customization",
    category: "Operations",
    question: "Can we modify business logic, replies, and promotional rules after launch?",
    answer:
      "Yes, 100%. You receive a dedicated client dashboard where your team can adjust response rules, discount caps, return policies, and operational triggers anytime. Plus, our Growth and Enterprise tiers include ongoing engineering support and monthly optimization sprints to evolve your agents as your catalog grows.",
    highlight: "Real-time policy controls & monthly sprints",
  },
  {
    id: "pricing-model",
    category: "Pricing",
    question: "Are there unexpected ticket volume or token surge charges?",
    answer:
      "No. We believe in predictable, transparent pricing. Our plans come with generous conversation and ticket allowances tailored to your scale. If your brand experiences seasonal spikes (like Black Friday or festive sales), we provide elastic headroom without penalizing you with hidden surprise fees.",
    highlight: "Transparent tiers with seasonal spike headroom",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Agents & Scope", "Integrations", "Security", "Timeline"];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-24 md:py-32"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[550px] w-[550px] rounded-full bg-emerald-200/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-200/18 blur-[140px]"
        aria-hidden="true"
      />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 25%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 25%, transparent 92%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            FREQUENTLY ASKED QUESTIONS
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="faq-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-[Outfit] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[56px]"
          >
            Common questions,
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              clear answers.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Everything you need to know about how Protype builds, integrates, and scales
            custom AI systems for high-growth e-commerce brands.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "border border-slate-200/80 bg-white/90 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Accordion Container */}
        <div className="mx-auto mt-12 max-w-3xl space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`overflow-hidden rounded-[22px] border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-emerald-500/40 bg-gradient-to-b from-white via-emerald-50/20 to-white shadow-[0_16px_40px_rgba(16,185,129,0.08)]"
                    : "border-slate-200/80 bg-white/95 hover:border-slate-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-mono font-bold transition-colors ${
                        isOpen
                          ? "bg-emerald-500 text-white shadow-xs"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <span
                      className={`font-[Outfit] text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                        isOpen ? "text-emerald-950" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Expand / Collapse Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </div>
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-emerald-500/10 px-6 pb-6 pt-4">
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                          {faq.answer}
                        </p>

                        {faq.highlight && (
                          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-50/70 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                            <span>{faq.highlight}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[26px] border border-emerald-500/25 bg-gradient-to-r from-emerald-50/80 via-white to-cyan-50/60 p-7 shadow-[0_18px_45px_rgba(16,185,129,0.07)] backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Founders & AI Architects Online
              </div>
              <h3 className="font-[Outfit] text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Have a question not listed here?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Talk directly with our technical leadership on WhatsApp to discuss your architecture, API specs, or deployment timeline.
              </p>
            </div>

            <div className="shrink-0">
              <Magnet padding={12} magnetStrength={3}>
                <a
                  href="https://wa.me/8637584923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0a2018] px-6 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(10,32,24,0.25)] transition-all duration-300 hover:bg-[#12362a] hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnet>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
