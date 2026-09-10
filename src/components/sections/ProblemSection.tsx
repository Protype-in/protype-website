"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Layers,
  Check,
  Clock,
  Circle,
  FileSpreadsheet,
  Mail,
  Send,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";

// Queries list for "Constant customer queries" card
const customerQueries = [
  {
    name: "Customer 1",
    avatar: "/support-agent.jpg",
    query: "Where is my order?",
    time: "10:24 AM",
  },
  {
    name: "Customer 2",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80",
    query: "I want to return my product.",
    time: "11:02 AM",
  },
  {
    name: "Customer 3",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&h=80&q=80",
    query: "Can I get an exchange?",
    time: "11:43 AM",
  },
  {
    name: "Customer 4",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&h=80&q=80",
    query: "When will this be delivered?",
    time: "12:30 PM",
  },
  {
    name: "Customer 5",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
    query: "I haven't received my refund yet.",
    time: "1:15 PM",
  },
];

// Tools list for "Tools & Platforms" card
const toolsList = [
  {
    name: "WhatsApp",
    color: "text-[#25D366] bg-emerald-50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.09c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.106 8.106 0 01-1.25-4.31c0-4.47 3.64-8.11 8.11-8.11 2.17 0 4.2 0.85 5.73 2.38 1.54 1.54 2.38 3.57 2.38 5.73 0 4.47-3.64 8.17-8.11 8.17z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    color: "text-[#95BF47] bg-lime-50",
    icon: <ShoppingBag className="h-4 w-4 text-[#95BF47]" />,
  },
  {
    name: "Gmail",
    color: "text-[#EA4335] bg-red-50",
    icon: <Mail className="h-4 w-4 text-[#EA4335]" />,
  },
  {
    name: "Slack",
    color: "text-[#4A154B] bg-purple-50",
    icon: <span className="text-xs font-black text-[#4A154B]">#</span>,
  },
  {
    name: "Excel",
    color: "text-[#107C41] bg-emerald-50",
    icon: <FileSpreadsheet className="h-4 w-4 text-[#107C41]" />,
  },
  {
    name: "Google Sheets",
    color: "text-[#0F9D58] bg-green-50",
    icon: <Layers className="h-4 w-4 text-[#0F9D58]" />,
  },
  {
    name: "Shiprocket",
    color: "text-[#008ECC] bg-sky-50",
    icon: <Send className="h-4 w-4 text-[#008ECC]" />,
  },
  {
    name: "CRM",
    color: "text-[#00A1E0] bg-blue-50",
    icon: <ExternalLink className="h-4 w-4 text-[#00A1E0]" />,
  },
  {
    name: "and more...",
    color: "text-slate-400 bg-slate-50",
    icon: <span className="text-xs font-bold text-slate-400">•••</span>,
  },
];

interface WireData {
  id: string;
  d: string;
  color: string;
  fromCard: string;
  toCard: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export default function ProblemSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [wires, setWires] = useState<WireData[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const queriesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const orderOpsRef = useRef<HTMLDivElement>(null);
  const internalToolsRef = useRef<HTMLDivElement>(null);
  const customerJourneyRef = useRef<HTMLDivElement>(null);

  const updateWires = useCallback(() => {
    if (!containerRef.current) return;
    const c = containerRef.current.getBoundingClientRect();
    if (c.width === 0 || c.height === 0) return;

    // Only render dynamic SVG wires on large screens where layout is 2-column
    if (window.innerWidth < 1024) {
      setWires([]);
      return;
    }

    const getPos = (el: HTMLElement | null) => (el ? el.getBoundingClientRect() : null);

    const q = getPos(queriesRef.current);
    const t = getPos(toolsRef.current);
    const m = getPos(messagesRef.current);
    const o = getPos(orderOpsRef.current);
    const it = getPos(internalToolsRef.current);
    const j = getPos(customerJourneyRef.current);

    const list: WireData[] = [];

    // 1. Queries (Top-Right edge) -> Tools & Platforms (Left edge)
    if (q && t) {
      const x1 = q.right - c.left;
      const y1 = q.top + 32 - c.top;
      const x2 = t.left - c.left;
      const y2 = t.top + t.height * 0.35 - c.top;
      const dx = Math.max(35, (x2 - x1) * 0.5);
      list.push({
        id: "wire-queries-tools",
        color: "#10b981",
        fromCard: "queries",
        toCard: "tools",
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        d: `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`,
      });
    }

    // 2. Queries (Lower-Right edge) -> Fragmented Messages (Left edge)
    if (q && m) {
      const x1 = q.right - c.left;
      const y1 = q.top + q.height * 0.65 - c.top;
      const x2 = m.left - c.left;
      const y2 = m.top + m.height * 0.5 - c.top;
      const dx = Math.max(35, (x2 - x1) * 0.5);
      list.push({
        id: "wire-queries-messages",
        color: "#0ea5e9",
        fromCard: "queries",
        toCard: "messages",
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        d: `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`,
      });
    }

    // 3. Tools & Platforms (Right edge) -> Order Operations (Left edge)
    if (t && o) {
      const x1 = t.right - c.left;
      const y1 = t.top + t.height * 0.45 - c.top;
      const x2 = o.left - c.left;
      const y2 = o.top + o.height * 0.38 - c.top;
      const dx = Math.max(25, (x2 - x1) * 0.5);
      list.push({
        id: "wire-tools-ops",
        color: "#3b82f6",
        fromCard: "tools",
        toCard: "orderOps",
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        d: `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`,
      });
    }

    // 4. Fragmented Messages (Right edge) -> Internal Tools (Left edge)
    if (m && it) {
      const x1 = m.right - c.left;
      const y1 = m.top + m.height * 0.5 - c.top;
      const x2 = it.left - c.left;
      const y2 = it.top + it.height * 0.35 - c.top;
      const dx = Math.max(25, (x2 - x1) * 0.5);
      list.push({
        id: "wire-messages-internal",
        color: "#8b5cf6",
        fromCard: "messages",
        toCard: "internalTools",
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        d: `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`,
      });
    }

    // 5. Order Operations (Bottom edge) -> Internal Tools (Top edge)
    if (o && it) {
      const x1 = o.left + o.width * 0.44 - c.left;
      const y1 = o.bottom - c.top;
      const x2 = it.left + it.width * 0.56 - c.left;
      const y2 = it.top - c.top;
      const dy = Math.max(12, (y2 - y1) * 0.5);
      list.push({
        id: "wire-ops-internal",
        color: "#3b82f6",
        fromCard: "orderOps",
        toCard: "internalTools",
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        d: `M ${x1},${y1} C ${x1 - 22},${y1 + dy} ${x2 + 22},${y2 - dy} ${x2},${y2}`,
      });
    }

    // 6. Internal Tools (Bottom edge) -> Customer Journey (Top edge)
    if (it && j) {
      const x1 = it.left + it.width * 0.56 - c.left;
      const y1 = it.bottom - c.top;
      const x2 = j.left + j.width * 0.44 - c.left;
      const y2 = j.top - c.top;
      const dy = Math.max(12, (y2 - y1) * 0.5);
      list.push({
        id: "wire-internal-journey",
        color: "#06b6d4",
        fromCard: "internalTools",
        toCard: "customerJourney",
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        d: `M ${x1},${y1} C ${x1 + 22},${y1 + dy} ${x2 - 22},${y2 - dy} ${x2},${y2}`,
      });
    }

    setWires(list);
  }, []);

  useEffect(() => {
    updateWires();
    const timer1 = setTimeout(updateWires, 120);
    const timer2 = setTimeout(updateWires, 450);

    const handleResize = () => updateWires();
    window.addEventListener("resize", handleResize);

    let observer: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateWires);
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", handleResize);
      if (observer) observer.disconnect();
    };
  }, [updateWires]);

  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-20 md:py-28"
    >
      {/* Subtle ambient glows matching Hero Section theme */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-[480px] w-[480px] rounded-full bg-emerald-200/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 h-[520px] w-[520px] rounded-full bg-cyan-200/20 blur-[140px]"
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
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 92%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={containerRef}
          className="relative grid items-start gap-10 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[440px_1fr] xl:gap-14"
        >
          {/* ============================================================ */}
          {/* SVG Connection Wires with Glowing Light Beams & Particles     */}
          {/* ============================================================ */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
            aria-hidden="true"
          >
            <defs>
              <filter id="problemGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {wires.map((w) => {
              const isHighlighted =
                hoveredCard === w.fromCard || hoveredCard === w.toCard;

              return (
                <g key={w.id}>
                  {/* 1. Base clean muted dashed line */}
                  <path
                    d={w.d}
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth={1.8}
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    opacity={0.5}
                  />

                  {/* 2. Flowing active glowing dashed wire */}
                  <motion.path
                    d={w.d}
                    fill="none"
                    stroke={w.color}
                    strokeWidth={isHighlighted ? 2.8 : 2}
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    filter={isHighlighted ? "url(#problemGlow)" : undefined}
                    animate={{
                      strokeDashoffset: [0, -24],
                      opacity: isHighlighted ? 1 : 0.45,
                    }}
                    transition={{
                      strokeDashoffset: { duration: 1.4, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 0.3 },
                    }}
                  />

                  {/* 3. Traveling photon particle */}
                  <g filter="url(#problemGlow)">
                    <circle r={isHighlighted ? 5 : 3.5} fill={w.color} opacity={0.6}>
                      <animateMotion
                        path={w.d}
                        dur={isHighlighted ? "1.6s" : "2.6s"}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                    <circle r={isHighlighted ? 2.8 : 2} fill="#ffffff">
                      <animateMotion
                        path={w.d}
                        dur={isHighlighted ? "1.6s" : "2.6s"}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                  </g>

                  {/* 4. Start Anchor Dock Node */}
                  <circle
                    cx={w.start.x}
                    cy={w.start.y}
                    r={4}
                    fill="#ffffff"
                    stroke={w.color}
                    strokeWidth={2}
                  />
                  <circle cx={w.start.x} cy={w.start.y} r={2} fill={w.color} />

                  {/* 5. End Anchor Dock Node */}
                  <circle
                    cx={w.end.x}
                    cy={w.end.y}
                    r={4}
                    fill="#ffffff"
                    stroke={w.color}
                    strokeWidth={2}
                  />
                  <circle cx={w.end.x} cy={w.end.y} r={2} fill={w.color} />

                  {/* 6. Pulsing ring wave if highlighted */}
                  {isHighlighted && (
                    <>
                      <motion.circle
                        cx={w.start.x}
                        cy={w.start.y}
                        r={4}
                        fill="none"
                        stroke={w.color}
                        strokeWidth={1.5}
                        animate={{ r: [4, 12], opacity: [0.9, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.circle
                        cx={w.end.x}
                        cy={w.end.y}
                        r={4}
                        fill="none"
                        stroke={w.color}
                        strokeWidth={1.5}
                        animate={{ r: [4, 12], opacity: [0.9, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* ============================================================ */}
          {/* LEFT COLUMN: Heading & Constant Customer Queries Card Below  */}
          {/* ============================================================ */}
          <div className="flex flex-col gap-6">
            {/* Header Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Pill Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                THE REALITY
              </div>

              {/* Title */}
              <h2
                id="problem-title"
                className="font-[Outfit] text-3xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[44px] xl:text-[48px]"
              >
                It gets messy when
                <br />
                everything is{" "}
                <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  separate.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                Customer questions pile up. Teams juggle multiple tools. Orders need
                manual follow-ups. And somewhere in between, customers get
                frustrated.
              </p>
            </motion.div>

            {/* CARD 1: Constant customer queries - Positioned directly BELOW the title */}
            <motion.div
              ref={queriesRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
              onMouseEnter={() => setHoveredCard("queries")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`rounded-[22px] border bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all ${
                hoveredCard === "queries"
                  ? "border-emerald-300 ring-2 ring-emerald-400/20"
                  : "border-slate-200/80"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span className="text-[13.5px] font-semibold text-slate-900">
                    Constant customer queries
                  </span>
                </div>
                <span className="rounded-full bg-blue-50 border border-blue-200/60 px-2 py-0.5 text-[10.5px] font-semibold text-blue-600">
                  +120 more
                </span>
              </div>

              {/* List of queries */}
              <div className="mt-3 divide-y divide-slate-100 space-y-2">
                {customerQueries.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pt-2 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-6 w-6 rounded-full object-cover border border-slate-200"
                      />
                      <span className="font-medium text-slate-700">
                        {item.query}
                      </span>
                    </div>
                    <span className="shrink-0 text-[10.5px] text-slate-400">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 2 Well-Spaced Columns of Fragmented Chaos Cards*/}
          {/* ============================================================ */}
          <div className="grid gap-5 sm:grid-cols-2">
            
            {/* Column 1: Tools & Platforms + Fragmented Messages Widget */}
            <div className="flex flex-col gap-7">
              
              {/* CARD 2: Tools & Platforms */}
              <motion.div
                ref={toolsRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredCard("tools")}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[22px] border bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all ${
                  hoveredCard === "tools"
                    ? "border-emerald-300 ring-2 ring-emerald-400/20"
                    : "border-slate-200/80"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-slate-900 leading-tight">
                      Tools & Platforms
                    </h4>
                    <p className="text-[10.5px] text-slate-400">
                      Multiple tools. No single source of truth.
                    </p>
                  </div>
                </div>

                {/* 3x3 Grid */}
                <div className="mt-3.5 grid grid-cols-3 gap-2">
                  {toolsList.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/70 p-2 text-center transition-all hover:bg-white hover:border-slate-200 hover:shadow-2xs"
                    >
                      <div className={`mb-1 flex h-7 w-7 items-center justify-center rounded-lg ${tool.color}`}>
                        {tool.icon}
                      </div>
                      <span className="text-[10px] font-medium text-slate-600 leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CARD 3: Fragmented Customer Messages Widget */}
              <motion.div
                ref={messagesRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredCard("messages")}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[22px] border bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md space-y-2.5 transition-all ${
                  hoveredCard === "messages"
                    ? "border-sky-300 ring-2 ring-sky-400/20"
                    : "border-slate-200/80"
                }`}
              >
                {/* Message 1: WhatsApp */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <span className="text-[9px]">💬</span>
                    </div>
                    <div>
                      <span className="block text-[10.5px] text-slate-400">Customer</span>
                      <span className="font-semibold text-slate-800 text-[11.5px]">
                        Hi, I want to track my order.
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">10:24 AM</span>
                </div>

                {/* Message 2: Instagram */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                      <span className="text-[9px]">📷</span>
                    </div>
                    <div>
                      <span className="block text-[10.5px] text-slate-400">Customer</span>
                      <span className="font-semibold text-slate-800 text-[11.5px]">
                        Can I get a refund?
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">11:02 AM</span>
                </div>

                {/* Message 3: Email */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                      <span className="text-[9px]">✉️</span>
                    </div>
                    <div>
                      <span className="block text-[10.5px] text-slate-400">Customer</span>
                      <span className="font-semibold text-slate-800 text-[11.5px]">
                        When will my order arrive?
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">12:16 PM</span>
                </div>
              </motion.div>
            </div>

            {/* Column 2: Order Ops + Internal Tools + Customer Journey */}
            <div className="flex flex-col gap-10">
              
              {/* CARD 4: Order operations */}
              <motion.div
                ref={orderOpsRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredCard("orderOps")}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[22px] border bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all ${
                  hoveredCard === "orderOps"
                    ? "border-blue-300 ring-2 ring-blue-400/20"
                    : "border-slate-200/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Layers className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[13px] font-semibold text-slate-900">
                      Order operations
                    </span>
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200/70 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                    In progress
                  </span>
                </div>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Check inventory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Assign warehouse</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Update in system</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Circle className="h-3 w-3" />
                    <span>Ship order</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 5: Internal tools */}
              <motion.div
                ref={internalToolsRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredCard("internalTools")}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[22px] border bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all ${
                  hoveredCard === "internalTools"
                    ? "border-purple-300 ring-2 ring-purple-400/20"
                    : "border-slate-200/80"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                    <Layers className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-900">
                    Internal tools
                  </span>
                </div>

                <div className="mt-2.5 space-y-1 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-[10px]">■</span>
                    <span>Inventory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-[10px]">■</span>
                    <span>Warehouse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-[10px]">■</span>
                    <span>Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-[10px]">■</span>
                    <span>Support dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-[10px]">■</span>
                    <span>Reports</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 6: Customer journey */}
              <motion.div
                ref={customerJourneyRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredCard("customerJourney")}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-[22px] border bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all ${
                  hoveredCard === "customerJourney"
                    ? "border-cyan-300 ring-2 ring-cyan-400/20"
                    : "border-slate-200/80"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-slate-900">
                    Customer journey
                  </span>
                </div>

                <div className="mt-2.5 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Order placed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-blue-500" />
                    <span>Shipped</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Circle className="h-3 w-3" />
                    <span>Delivered</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
