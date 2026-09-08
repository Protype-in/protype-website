"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Settings, Link2, User, Check } from "lucide-react";

interface PillarData {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  accent: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  desc: string;
  bullets: string[];
  wireColor: string;
}

const pillars: PillarData[] = [
  {
    id: "support",
    title: "Customer Support",
    badge: "Connected",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    accent: "#10b981",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    icon: <MessageSquare className="h-4 w-4" />,
    desc: "AI agents + human support, handling queries, returns, exchanges and more — 24/7.",
    bullets: [
      "WhatsApp & Instagram",
      "Helpdesk integration",
      "Automated responses",
    ],
    wireColor: "#10b981",
  },
  {
    id: "operations",
    title: "Operations",
    badge: "Connected",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200/80",
    accent: "#3b82f6",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: <Settings className="h-4 w-4" />,
    desc: "Automate order processing, inventory, warehouse and shipping workflows.",
    bullets: [
      "Order management",
      "Warehouse & fulfilment",
      "Shipping integrations",
    ],
    wireColor: "#3b82f6",
  },
  {
    id: "tools",
    title: "Tools & Integrations",
    badge: "Connected",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-200/80",
    accent: "#a855f7",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    icon: <Link2 className="h-4 w-4" />,
    desc: "Works with the tools you already use — or we'll set up what you need.",
    bullets: [
      "Shopify, WooCommerce, Magento",
      "WhatsApp, Gmail, Slack",
      "CRM, Excel, Google Sheets & more",
    ],
    wireColor: "#a855f7",
  },
  {
    id: "journey",
    title: "Customer Journey",
    badge: "Connected",
    badgeColor: "bg-cyan-50 text-cyan-600 border-cyan-200/80",
    accent: "#06b6d4",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    icon: <User className="h-4 w-4" />,
    desc: "Keep your customers informed, engaged and coming back.",
    bullets: [
      "Order tracking & updates",
      "Personalised communication",
      "Loyalty & retention workflows",
    ],
    wireColor: "#06b6d4",
  },
];

export default function SolutionSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="solutions"
      aria-labelledby="solution-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-20 md:py-28"
    >
      {/* Background ambient glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[550px] w-[550px] rounded-full bg-emerald-200/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-[480px] w-[480px] rounded-full bg-cyan-200/20 blur-[130px]"
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
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 25%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 25%, transparent 92%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          {/* Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            OUR SOLUTION
          </div>

          {/* Heading */}
          <h2
            id="solution-title"
            className="font-[Outfit] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[56px]"
          >
            We create tailored solutions
            <br />
            for every stage of{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            Protype connects your support, operations, and customer journey into one
            intelligent system — built around your e-commerce business. No more
            switching tools. No more missed updates. Just a smooth, connected flow.
          </p>
        </motion.div>

        {/* Central Architecture Hub with 4 Satellites */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          
          {/* SVG Connection Lines for Desktop Viewports */}
          <svg
            viewBox="0 0 1000 620"
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
            aria-hidden="true"
          >
            <defs>
              <filter id="solutionGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Wire 1: Center to Customer Support (Top-Left) */}
            <g>
              <path
                d="M 430,285 C 380,285 380,180 340,180"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth={1.5}
              />
              <motion.path
                d="M 430,285 C 380,285 380,180 340,180"
                fill="none"
                stroke="#10b981"
                strokeWidth={hoveredCard === "support" ? 3 : 2}
                strokeDasharray="4 8"
                filter="url(#solutionGlow)"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <circle r="3" fill="#10b981" filter="url(#solutionGlow)">
                <animateMotion
                  path="M 430,285 C 380,285 380,180 340,180"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="340" cy="180" r="4.5" fill="#10b981" />
            </g>

            {/* Wire 2: Center to Operations (Top-Right) */}
            <g>
              <path
                d="M 570,285 C 620,285 620,180 660,180"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth={1.5}
              />
              <motion.path
                d="M 570,285 C 620,285 620,180 660,180"
                fill="none"
                stroke="#3b82f6"
                strokeWidth={hoveredCard === "operations" ? 3 : 2}
                strokeDasharray="4 8"
                filter="url(#solutionGlow)"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <circle r="3" fill="#3b82f6" filter="url(#solutionGlow)">
                <animateMotion
                  path="M 570,285 C 620,285 620,180 660,180"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="660" cy="180" r="4.5" fill="#3b82f6" />
            </g>

            {/* Wire 3: Center to Tools & Integrations (Bottom-Left) */}
            <g>
              <path
                d="M 430,335 C 380,335 380,440 340,440"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth={1.5}
              />
              <motion.path
                d="M 430,335 C 380,335 380,440 340,440"
                fill="none"
                stroke="#a855f7"
                strokeWidth={hoveredCard === "tools" ? 3 : 2}
                strokeDasharray="4 8"
                filter="url(#solutionGlow)"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <circle r="3" fill="#a855f7" filter="url(#solutionGlow)">
                <animateMotion
                  path="M 430,335 C 380,335 380,440 340,440"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="340" cy="440" r="4.5" fill="#a855f7" />
            </g>

            {/* Wire 4: Center to Customer Journey (Bottom-Right) */}
            <g>
              <path
                d="M 570,335 C 620,335 620,440 660,440"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth={1.5}
              />
              <motion.path
                d="M 570,335 C 620,335 620,440 660,440"
                fill="none"
                stroke="#06b6d4"
                strokeWidth={hoveredCard === "journey" ? 3 : 2}
                strokeDasharray="4 8"
                filter="url(#solutionGlow)"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <circle r="3" fill="#06b6d4" filter="url(#solutionGlow)">
                <animateMotion
                  path="M 570,335 C 620,335 620,440 660,440"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="660" cy="440" r="4.5" fill="#06b6d4" />
            </g>
          </svg>

          {/* 4 Satellite Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-x-44 lg:gap-y-16">
            
            {/* Top-Left: Customer Support */}
            <SolutionCard
              pillar={pillars[0]}
              onHover={() => setHoveredCard(pillars[0].id)}
              onLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === pillars[0].id}
            />

            {/* Top-Right: Operations */}
            <SolutionCard
              pillar={pillars[1]}
              onHover={() => setHoveredCard(pillars[1].id)}
              onLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === pillars[1].id}
            />

            {/* Bottom-Left: Tools & Integrations */}
            <SolutionCard
              pillar={pillars[2]}
              onHover={() => setHoveredCard(pillars[2].id)}
              onLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === pillars[2].id}
            />

            {/* Bottom-Right: Customer Journey */}
            <SolutionCard
              pillar={pillars[3]}
              onHover={() => setHoveredCard(pillars[3].id)}
              onLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === pillars[3].id}
            />
          </div>

          {/* Center Hub Node (Desktop Overlay) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 50px rgba(16,185,129,0.25), 0 20px 40px -10px rgba(15,23,42,0.1)",
                  "0 0 70px rgba(6,182,212,0.32), 0 20px 40px -10px rgba(15,23,42,0.12)",
                  "0 0 50px rgba(16,185,129,0.25), 0 20px 40px -10px rgba(15,23,42,0.1)",
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-auto flex h-[146px] w-[156px] flex-col items-center justify-center rounded-[28px] border border-white/90 p-3 text-center backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(220,252,231,0.85) 50%, rgba(224,242,254,0.78) 100%)",
              }}
            >
              {/* Protype Brand Logo */}
              <img
                src="/logo3.png"
                alt="Protype"
                className="h-10 w-auto object-contain"
              />

              {/* Subtext */}
              <div className="mt-1.5 text-[10.5px] font-semibold text-slate-800 leading-tight">
                AI + Automation
              </div>
              <div className="text-[9.5px] font-medium text-slate-500">
                for E-commerce
              </div>

              {/* Animated Sheen */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[28px] border border-emerald-400/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  pillar,
  onHover,
  onLeave,
  isHovered,
}: {
  pillar: PillarData;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative rounded-[24px] border border-slate-200/80 bg-white/95 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300"
      style={{
        borderColor: isHovered ? pillar.accent : "#f1f5f9",
        boxShadow: isHovered
          ? `0 24px 50px -12px rgba(15,23,42,0.12), 0 0 0 1px ${pillar.accent}40, 0 0 24px ${pillar.accent}20`
          : "0 18px 40px -10px rgba(15,23,42,0.06), 0 1px 3px rgba(0,0,0,0.02)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${pillar.iconBg} ${pillar.iconColor}`}>
            {pillar.icon}
          </div>
          <h3 className="text-base font-semibold text-slate-900">
            {pillar.title}
          </h3>
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${pillar.badgeColor}`}
        >
          {pillar.badge}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3.5 text-[13.5px] leading-relaxed text-slate-500">
        {pillar.desc}
      </p>

      {/* Feature Checkmarks */}
      <div className="mt-4 space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
        {pillar.bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Check
              className="h-3.5 w-3.5 shrink-0"
              style={{ color: pillar.accent }}
            />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
