"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ShoppingCart,
  Wrench,
  Users,
  Headphones,
  Cog,
  User,
  ArrowRight,
} from "lucide-react";
import ShineButton from "../ui/ShineButton";

// Custom WhatsApp brand icon SVG
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  dotColor: string;
  lineColor: string;
}

const leftCards: FeatureCard[] = [
  {
    id: "left-1",
    title: "Customer Queries",
    subtitle: "Instant replies. Happier customers.",
    icon: <MessageSquare className="h-4 w-4" />,
    iconBg: "bg-emerald-50 border border-emerald-200/60",
    iconColor: "text-emerald-600",
    dotColor: "#10b981",
    lineColor: "#10b981",
  },
  {
    id: "left-2",
    title: "WhatsApp Messages",
    subtitle: "Engage at scale. No manual work.",
    icon: <WhatsAppIcon className="h-4 w-4" />,
    iconBg: "bg-[#25D366]/10 border border-[#25D366]/25",
    iconColor: "text-[#25D366]",
    dotColor: "#0ea5e9",
    lineColor: "#0ea5e9",
  },
  {
    id: "left-3",
    title: "Order Updates",
    subtitle: "Keep customers in the loop.",
    icon: <ShoppingCart className="h-4 w-4" />,
    iconBg: "bg-purple-50 border border-purple-200/60",
    iconColor: "text-purple-600",
    dotColor: "#8b5cf6",
    lineColor: "#8b5cf6",
  },
  {
    id: "left-4",
    title: "Multiple Tools",
    subtitle: "One system. Everything connected.",
    icon: <Wrench className="h-4 w-4" />,
    iconBg: "bg-sky-50 border border-sky-200/60",
    iconColor: "text-sky-500",
    dotColor: "#38bdf8",
    lineColor: "#38bdf8",
  },
  {
    id: "left-5",
    title: "Support Queue",
    subtitle: "Faster resolution. Better experiences.",
    icon: <Users className="h-4 w-4" />,
    iconBg: "bg-rose-50 border border-rose-200/60",
    iconColor: "text-rose-500",
    dotColor: "#f43f5e",
    lineColor: "#f43f5e",
  },
];

const rightCards: FeatureCard[] = [
  {
    id: "right-1",
    title: "Support",
    subtitle: "Faster answers. Happier customers.",
    icon: <Headphones className="h-4 w-4" />,
    iconBg: "bg-emerald-50 border border-emerald-200/60",
    iconColor: "text-emerald-600",
    dotColor: "#10b981",
    lineColor: "#10b981",
  },
  {
    id: "right-2",
    title: "Operations",
    subtitle: "Less manual work. More efficiency.",
    icon: <Cog className="h-4 w-4" />,
    iconBg: "bg-indigo-50 border border-indigo-200/60",
    iconColor: "text-indigo-600",
    dotColor: "#6366f1",
    lineColor: "#6366f1",
  },
  {
    id: "right-3",
    title: "Customer Experience",
    subtitle: "Seamless journeys. Longer relationships.",
    icon: <User className="h-4 w-4" />,
    iconBg: "bg-sky-50 border border-sky-200/60",
    iconColor: "text-sky-500",
    dotColor: "#0ea5e9",
    lineColor: "#0ea5e9",
  },
];

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbLeftNodeRef = useRef<HTMLDivElement>(null);
  const orbRightNodeRef = useRef<HTMLDivElement>(null);

  const [leftWires, setLeftWires] = useState<
    { id: string; d: string; color: string }[]
  >([]);
  const [rightWires, setRightWires] = useState<
    { id: string; d: string; color: string }[]
  >([]);

  // Function to calculate exact bezier wire paths between card dots and mascot nodes
  const calculateWires = () => {
    if (!containerRef.current || !orbLeftNodeRef.current || !orbRightNodeRef.current)
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const orbLeftRect = orbLeftNodeRef.current.getBoundingClientRect();
    const orbRightRect = orbRightNodeRef.current.getBoundingClientRect();

    const orbLeftX = orbLeftRect.left - containerRect.left + orbLeftRect.width / 2;
    const orbLeftY = orbLeftRect.top - containerRect.top + orbLeftRect.height / 2;

    const orbRightX = orbRightRect.left - containerRect.left + orbRightRect.width / 2;
    const orbRightY = orbRightRect.top - containerRect.top + orbRightRect.height / 2;

    // Calculate left wire paths (from left card dots to orb left node)
    const newLeftWires = leftCards
      .map((card) => {
        const dotEl = document.getElementById(`dot-${card.id}`);
        if (!dotEl) return null;
        const dotRect = dotEl.getBoundingClientRect();
        const startX = dotRect.left - containerRect.left + dotRect.width / 2;
        const startY = dotRect.top - containerRect.top + dotRect.height / 2;

        // Smooth cubic bezier curve
        const dx = orbLeftX - startX;
        const cp1x = startX + dx * 0.48;
        const cp1y = startY;
        const cp2x = orbLeftX - dx * 0.28;
        const cp2y = orbLeftY;

        return {
          id: card.id,
          d: `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${orbLeftX} ${orbLeftY}`,
          color: card.lineColor,
        };
      })
      .filter(Boolean) as { id: string; d: string; color: string }[];

    // Calculate right wire paths (from orb right node to right card dots)
    const newRightWires = rightCards
      .map((card) => {
        const dotEl = document.getElementById(`dot-${card.id}`);
        if (!dotEl) return null;
        const dotRect = dotEl.getBoundingClientRect();
        const endX = dotRect.left - containerRect.left + dotRect.width / 2;
        const endY = dotRect.top - containerRect.top + dotRect.height / 2;

        // Smooth cubic bezier curve
        const dx = endX - orbRightX;
        const cp1x = orbRightX + dx * 0.28;
        const cp1y = orbRightY;
        const cp2x = endX - dx * 0.48;
        const cp2y = endY;

        return {
          id: card.id,
          d: `M ${orbRightX} ${orbRightY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
          color: card.lineColor,
        };
      })
      .filter(Boolean) as { id: string; d: string; color: string }[];

    setLeftWires(newLeftWires);
    setRightWires(newRightWires);
  };

  useEffect(() => {
    // Initial calculation with a slight delay for hydration
    const timer = setTimeout(calculateWires, 100);
    window.addEventListener("resize", calculateWires);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateWires);
    };
  }, []);

  return (
    <section
      id="cta"
      aria-label="Call to Action"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-20 lg:py-28"
    >
      {/* Ambient background soft pastel radial glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-emerald-200/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-emerald-300/20 blur-[140px]"
        aria-hidden="true"
      />

      {/* Brand Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 25%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 50% 50%, black 25%, transparent 95%)",
        }}
        aria-hidden="true"
      />

      {/* Container with relative coordinate tracking */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8"
      >
        {/* Dynamic SVG Connecting Wires (Visible on Desktop) */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          style={{ overflow: "visible" }}
          aria-hidden="true"
        >
          <defs>
            {/* Soft glow filter for active lines */}
            <filter id="cta-wire-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left wires (Card -> Orb) */}
          {leftWires.map((wire, i) => (
            <g key={`left-wire-${wire.id}`}>
              {/* Subtle background line */}
              <path
                d={wire.d}
                fill="none"
                stroke={wire.color}
                strokeWidth="1.5"
                strokeOpacity="0.32"
                strokeDasharray="4 3"
              />
              {/* Animated glowing light pulse flowing toward the orb */}
              <path
                d={wire.d}
                fill="none"
                stroke={wire.color}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="18 180"
                filter="url(#cta-wire-glow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="200"
                  to="0"
                  dur={`${3 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}

          {/* Right wires (Orb -> Card) */}
          {rightWires.map((wire, i) => (
            <g key={`right-wire-${wire.id}`}>
              {/* Subtle background line */}
              <path
                d={wire.d}
                fill="none"
                stroke={wire.color}
                strokeWidth="1.5"
                strokeOpacity="0.32"
                strokeDasharray="4 3"
              />
              {/* Animated glowing light pulse flowing outward from the orb */}
              <path
                d={wire.d}
                fill="none"
                stroke={wire.color}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="18 180"
                filter="url(#cta-wire-glow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-200"
                  dur={`${2.8 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}
        </svg>

        {/* 3-Column Diagram Grid */}
        <div className="relative grid items-center gap-8 lg:grid-cols-[240px_1fr_240px] xl:grid-cols-[260px_1fr_260px]">
          
          {/* ================= LEFT COLUMN: 5 INPUT CARDS ================= */}
          <div className="order-2 flex flex-col gap-4 lg:order-1">
            {leftCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="relative flex items-center gap-3.5 rounded-[22px] border border-slate-200/80 bg-white/95 p-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                {/* Icon Squircle */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="font-[Outfit] text-[13.5px] font-semibold text-slate-900 leading-tight truncate">
                    {card.title}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                    {card.subtitle}
                  </div>
                </div>

                {/* Connection Anchor Dot (Right Edge) */}
                <div
                  id={`dot-${card.id}`}
                  className="absolute -right-1.5 top-1/2 -translate-y-1/2 hidden h-3 w-3 items-center justify-center lg:flex"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                    style={{ backgroundColor: card.dotColor }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= CENTER COLUMN: HEADLINE, CTA, & MASCOT ORB ================= */}
          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:px-4">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-emerald-800 uppercase backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              READY TO MOVE FORWARD?
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-[Outfit] text-4xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[60px] leading-[1.06]"
            >
              Don’t operate
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                like it’s 2004.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-lg text-sm sm:text-[15px] leading-relaxed text-slate-600"
            >
              Stop losing hours to repetitive work, disconnected tools,
              and support queues. Let’s build a system that works the way
              your business should.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <ShineButton
                href="https://wa.me/8637584923"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                <span>Let’s Build Your Flow</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </ShineButton>

              <ShineButton
                href="https://wa.me/8637584923"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </ShineButton>
            </motion.div>

            {/* ================= CENTRAL MASCOT ORB ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mt-12 flex items-center justify-center"
            >
              {/* Radial Halo Glow */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-400/35 blur-2xl animate-pulse"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/25 blur-3xl"
                aria-hidden="true"
              />

              {/* Left Connector Node */}
              <div
                ref={orbLeftNodeRef}
                className="absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-3.5 w-3.5 items-center justify-center"
              >
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </div>

              {/* Right Connector Node */}
              <div
                ref={orbRightNodeRef}
                className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-3.5 w-3.5 items-center justify-center"
              >
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </div>

              {/* 3D Glowing Mascot Orb with Floating Motion */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 h-24 w-24 sm:h-28 sm:w-28 drop-shadow-[0_18px_35px_rgba(16,185,129,0.38)]"
              >
                <Image
                  src="/fevicon.png"
                  alt="Protype AI Core"
                  width={120}
                  height={120}
                  className="h-full w-full object-contain select-none"
                  priority
                />
              </motion.div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: 3 PILLAR CARDS ================= */}
          <div className="order-3 flex flex-col gap-4 lg:order-3">
            {rightCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="relative flex items-center gap-3.5 rounded-[22px] border border-slate-200/80 bg-white/95 p-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                {/* Connection Anchor Dot (Left Edge) */}
                <div
                  id={`dot-${card.id}`}
                  className="absolute -left-1.5 top-1/2 -translate-y-1/2 hidden h-3 w-3 items-center justify-center lg:flex"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                    style={{ backgroundColor: card.dotColor }}
                  />
                </div>

                {/* Icon Squircle */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="font-[Outfit] text-[14px] font-semibold text-slate-900 leading-tight truncate">
                    {card.title}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                    {card.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
