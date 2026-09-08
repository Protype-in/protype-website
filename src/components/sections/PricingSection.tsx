"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import Magnet from "../react-bits/Magnet";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  desc: string;
  monthlyPrice: number | "Custom";
  annualPrice: number | "Custom";
  period: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  accent: string;
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Agent",
    desc: "One AI agent live in a single channel — the fastest way to prove automation works for you.",
    monthlyPrice: 1200,
    annualPrice: 960,
    period: "/month",
    features: [
      "1 Custom AI agent (support, ops, or CX)",
      "1 Primary channel (WhatsApp or Webchat)",
      "Instant human escalation routing",
      "Standard ERP & Helpdesk integration",
      "Weekly performance analytics report",
      "Live within 2-4 weeks",
    ],
    popular: false,
    ctaText: "Get started",
    accent: "#10b981",
  },
  {
    id: "growth",
    name: "Growth Automation",
    badge: "Most popular",
    desc: "Ideal for high-volume stores automating customer support, order fulfilment, and proactive CX.",
    monthlyPrice: 3500,
    annualPrice: 2800,
    period: "/month",
    features: [
      "Up to 3 Custom AI agents across pillars",
      "Omnichannel (WhatsApp, Instagram, Email, Chat)",
      "CRM, Shopify, Shiprocket & Helpdesk sync",
      "Autonomous returns & refund processing",
      "Priority SLA & proactive monitoring",
      "Dedicated Slack/WhatsApp support channel",
    ],
    popular: true,
    ctaText: "Start with Growth",
    accent: "#0ea5e9",
  },
  {
    id: "enterprise",
    name: "Enterprise System",
    desc: "Full-scale custom automation architectures for high-complexity, multi-brand e-commerce brands.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "tailored scope",
    features: [
      "Unlimited AI agents & custom workflows",
      "Agent-to-agent autonomous handoffs",
      "Private deployment & dedicated LLM fine-tuning",
      "Custom warehouse & ERP integrations",
      "99.9% uptime SLA & 24/7 incident response",
      "Dedicated engineering squad",
    ],
    popular: false,
    ctaText: "Talk to an engineer",
    accent: "#8b5cf6",
  },
];

const guarantees = [
  {
    icon: <Clock className="h-4 w-4 text-emerald-600" />,
    title: "Live in 2-4 Weeks",
    desc: "Rapid deployment with zero downtime",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-emerald-600" />,
    title: "100% Data Privacy",
    desc: "Enterprise-grade encryption & compliance",
  },
  {
    icon: <Zap className="h-4 w-4 text-emerald-600" />,
    title: "Guaranteed ROI",
    desc: "Measurable hours saved from day one",
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-24 md:py-32"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-emerald-200/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-20 h-[550px] w-[550px] rounded-full bg-cyan-200/20 blur-[140px]"
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

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        
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
            INVESTMENT LEVELS
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="pricing-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-[Outfit] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[56px]"
          >
            Predictable pricing for
            <br />
            every stage of{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              growth.
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
            No hidden fees or unexpected usage spikes. Clear scope and guaranteed
            outcomes for building custom AI systems tailored to your e-commerce workflows.
          </motion.p>

          {/* Billing Cycle Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-10 inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 p-1.5 shadow-xs backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual billing</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="relative mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => {
            const isAnnual = billingCycle === "annual";
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-[28px] p-8 backdrop-blur-xl transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-emerald-400/80 bg-gradient-to-b from-white/98 via-emerald-50/30 to-cyan-50/20 shadow-[0_25px_60px_rgba(16,185,129,0.14)]"
                    : "border border-slate-200/80 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.06)] hover:border-slate-300 hover:shadow-[0_25px_55px_rgba(15,23,42,0.1)]"
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 right-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1 text-[11px] font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)]">
                    <Sparkles className="h-3 w-3" />
                    <span>Most popular</span>
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <h3 className="font-[Outfit] text-2xl font-bold tracking-tight text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 min-h-[36px]">
                    {plan.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-[Outfit] text-4xl font-extrabold tracking-tight text-slate-900">
                      {typeof price === "number" ? `$${price.toLocaleString()}` : price}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {plan.period}
                    </span>
                  </div>
                  {isAnnual && typeof price === "number" && (
                    <div className="mt-1 text-[11px] font-medium text-emerald-600">
                      Billed annually (save ${(plan.monthlyPrice as number - price) * 12}/yr)
                    </div>
                  )}
                </div>

                {/* Feature List */}
                <div className="flex-1 space-y-3">
                  <div className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                    What&apos;s included:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Magnet padding={12} magnetStrength={3}>
                    <a
                      href="#cta"
                      className={`group flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-[#0a2018] text-white hover:bg-[#12362a] shadow-[0_12px_26px_rgba(10,32,24,0.22)]"
                          : "border border-slate-200/90 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </Magnet>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-4xl gap-6 rounded-[24px] border border-slate-200/80 bg-white/90 p-6 shadow-sm sm:grid-cols-3"
        >
          {guarantees.map((g, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200/60">
                {g.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 leading-tight">
                  {g.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {g.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
