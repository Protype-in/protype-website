"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  BarChart3,
  Check,
  TrendingUp,
} from "lucide-react";

// Steps Data matching the attached image
interface StepData {
  id: number;
  stepNumber: string;
  title: string;
  subtitleCallout?: string;
  desc: string;
  checklist: string[];
  icon: React.ReactNode;
  accent: string;
  accentBg: string;
  badgeTone: string;
  normProgress: number; // 0 to 1 position along the curve
}

const stepsData: StepData[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Discover & Audit",
    subtitleCallout: "Let's understand your current setup.",
    desc: "We understand your business — your customers, processes, tools, and pain points. This helps us find the right opportunities for automation and improvement.",
    checklist: [
      "Business audit",
      "Process mapping",
      "Tool analysis",
      "Pain point discovery",
    ],
    icon: <Search className="h-5 w-5 text-white" />,
    accent: "#10b981",
    accentBg: "bg-emerald-500",
    badgeTone: "border-emerald-200/80 bg-emerald-50 text-emerald-700",
    normProgress: 0.1,
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Design the Right Solution",
    subtitleCallout: "Here's a plan that fits your business.",
    desc: "We design a tailored system around your workflow. From AI agents to integrations, we plan what fits your business best — not a one-size-fits-all template.",
    checklist: [
      "Custom AI agents",
      "Workflow design",
      "Tool integrations",
      "System architecture",
    ],
    icon: <PenTool className="h-5 w-5 text-white" />,
    accent: "#3b82f6",
    accentBg: "bg-blue-500",
    badgeTone: "border-blue-200/80 bg-blue-50 text-blue-700",
    normProgress: 0.32,
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Build & Integrate",
    subtitleCallout: "Connecting your tools, setting up your agents...",
    desc: "We set up your agents, connect your tools, and bring everything together in one seamless system. We test across real scenarios to make sure it works the way you do.",
    checklist: [
      "Agent development",
      "Tool integrations",
      "Workflow setup",
      "Testing & refinement",
    ],
    icon: <Code2 className="h-5 w-5 text-white" />,
    accent: "#a855f7",
    accentBg: "bg-purple-500",
    badgeTone: "border-purple-200/80 bg-purple-50 text-purple-700",
    normProgress: 0.54,
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Deploy & Train",
    subtitleCallout: "Your system is live! We're here to support.",
    desc: "We launch your system, train your team, and make sure everyone is comfortable and confident using it. You get full support from day one and beyond.",
    checklist: [
      "Team training",
      "Go-live support",
      "Documentation",
      "Ongoing assistance",
    ],
    icon: <Rocket className="h-5 w-5 text-white" />,
    accent: "#06b6d4",
    accentBg: "bg-cyan-500",
    badgeTone: "border-cyan-200/80 bg-cyan-50 text-cyan-700",
    normProgress: 0.76,
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Monitor & Improve",
    subtitleCallout: "Better data. Smarter decisions.",
    desc: "We track performance, gather insights, and keep optimising. Because your business evolves — and your system should too.",
    checklist: [
      "Performance tracking",
      "Insights & reports",
      "Continuous optimisation",
      "Feature updates",
    ],
    icon: <BarChart3 className="h-5 w-5 text-white" />,
    accent: "#8b5cf6",
    accentBg: "bg-violet-500",
    badgeTone: "border-violet-200/80 bg-violet-50 text-violet-700",
    normProgress: 0.94,
  },
];

// App tools for Step 01 satellite card
const toolsList = [
  { name: "WhatsApp", color: "#25D366", icon: "💬" },
  { name: "Shopify", color: "#95BF47", icon: "🛍️" },
  { name: "Gmail", color: "#EA4335", icon: "✉️" },
  { name: "Slack", color: "#4A154B", icon: "#" },
  { name: "Drive", color: "#0F9D58", icon: "▲" },
  { name: "Excel", color: "#107C41", icon: "📊" },
  { name: "Sheets", color: "#0F9D58", icon: "📄" },
  { name: "Cloud", color: "#008ECC", icon: "☁️" },
];

export default function HowWeWorkSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [orbPos, setOrbPos] = useState({ x: 500, y: 150 });
  const [activeStepId, setActiveStepId] = useState(1);
  const [userInteracted, setUserInteracted] = useState(false);

  // Parallax Scroll Progress linked to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate SVG path length on mount
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Update orb position along the path as smoothProgress updates
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (!pathRef.current || pathLength === 0 || userInteracted) return;
      // Clamp progress between 0.04 and 0.96
      const clamped = Math.max(0.04, Math.min(0.96, latest));
      const point = pathRef.current.getPointAtLength(clamped * pathLength);
      setOrbPos({ x: point.x, y: point.y });

      // Determine active milestone based on closest progress
      let closest = stepsData[0];
      let minDiff = 999;
      stepsData.forEach((s) => {
        const diff = Math.abs(clamped - s.normProgress);
        if (diff < minDiff) {
          minDiff = diff;
          closest = s;
        }
      });
      setActiveStepId(closest.id);
    });
    return () => unsubscribe();
  }, [smoothProgress, pathLength, userInteracted]);

  // Click on milestone to smoothly travel
  const handleMilestoneClick = (stepId: number) => {
    setUserInteracted(true);
    setActiveStepId(stepId);
    const target = stepsData.find((s) => s.id === stepId);
    if (target && pathRef.current && pathLength > 0) {
      const pt = pathRef.current.getPointAtLength(target.normProgress * pathLength);
      setOrbPos({ x: pt.x, y: pt.y });
    }
    // Resume auto-scroll tracking after 4 seconds of inactivity
    setTimeout(() => {
      setUserInteracted(false);
    }, 4000);
  };

  // SVG Gentle S-Curve ribbon path definition (viewBox 0 0 1000 1760)
  // Gentle meandering amplitude within center 180px channel to avoid overlapping text
  const curvePathD =
    "M 500,60 C 500,130 515,170 515,220 C 515,340 480,380 480,500 C 480,620 520,680 520,800 C 520,920 480,980 480,1100 C 480,1220 515,1280 515,1400 C 515,1520 495,1580 500,1660";

  return (
    <section
      ref={containerRef}
      id="process"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-24 md:py-32"
    >
      {/* Background ambient glows */}
      <div
        className="pointer-events-none absolute top-1/4 -left-20 h-[600px] w-[600px] rounded-full bg-emerald-200/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-20 h-[650px] w-[650px] rounded-full bg-cyan-200/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-purple-200/20 blur-[150px]"
        aria-hidden="true"
      />

      {/* Clean background grid */}
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
        <div className="relative mx-auto max-w-4xl text-center">
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
            HOW WE WORK
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="process-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-[Outfit] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[62px]"
          >
            From scattered tools
            <br />
            to a{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              connected flow.
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
            We take a deep look at your business, map your existing workflow, and
            build a custom system that connects your support, operations, and
            customer journey — so everything works together, not in silos.
          </motion.p>

          {/* Top-Right Handwritten Script Note matching reference */}
          <div className="pointer-events-none absolute -top-4 right-0 hidden lg:block text-right">
            <div className="font-serif italic text-sm text-slate-500 leading-snug tracking-wide">
              Every business is different.
              <br />
              <span className="text-slate-400">So is our approach.</span>
            </div>
            {/* Curved hand-drawn arrow */}
            <svg
              viewBox="0 0 60 50"
              className="ml-auto mt-1 h-8 w-10 stroke-slate-400"
              fill="none"
              strokeWidth="1.5"
            >
              <path d="M 40,5 C 20,15 15,35 30,45" strokeLinecap="round" />
              <path d="M 24,40 L 30,45 L 32,38" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Milestone Navigation Chips for Quick Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {stepsData.map((s) => {
            const isActive = activeStepId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleMilestoneClick(s.id)}
                className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "border border-slate-200/80 bg-white/90 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-full text-[9.5px] font-bold text-white"
                  style={{ backgroundColor: s.accent }}
                >
                  {s.id}
                </span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* THE WINDING ROAD JOURNEY (DESKTOP & RESPONSIVE VIEW)          */}
        {/* ============================================================ */}
        <div className="relative mx-auto mt-16 max-w-[1360px]">
          
          {/* SVG S-Curve River Ribbon + Traveling fevicon.png Orb */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              viewBox="0 0 1000 1760"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* Winding road gradient */}
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                  <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.38" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.38" />
                  <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.45" />
                </linearGradient>
                {/* Glow filter */}
                <filter id="roadGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Outer Translucent Road Ribbon Bed */}
              <path
                d={curvePathD}
                fill="none"
                stroke="url(#roadGradient)"
                strokeWidth="48"
                strokeLinecap="round"
                filter="url(#roadGlow)"
              />

              {/* 2. Frosted Inner Track */}
              <path
                d={curvePathD}
                fill="none"
                stroke="#ffffff"
                strokeWidth="36"
                strokeLinecap="round"
                opacity="0.88"
              />

              {/* 3. Center Dashed Guide Line */}
              <path
                ref={pathRef}
                d={curvePathD}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="6 8"
                opacity="0.6"
              />

              {/* 4. Downward Arrow Tip at Path End */}
              <polygon
                points="500,1720 482,1680 518,1680"
                fill="#8b5cf6"
                opacity="0.75"
              />
            </svg>

            {/* 5. Traveling `fevicon.png` 3D Sphere Bot */}
            <motion.div
              className="absolute z-30 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${(orbPos.x / 1000) * 100}%`,
                top: `${(orbPos.y / 1760) * 100}%`,
              }}
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Radiant aura halo */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-full animate-pulse opacity-80 blur-md"
                style={{
                  backgroundColor:
                    stepsData.find((s) => s.id === activeStepId)?.accent || "#10b981",
                }}
              />
              <img
                src="/fevicon.png"
                alt="Protype Orb"
                className="h-11 w-11 drop-shadow-[0_8px_18px_rgba(16,185,129,0.45)] transition-transform duration-300"
              />
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* THE 5 MILESTONE ROWS                                         */}
          {/* ============================================================ */}
          <div className="relative z-10 flex flex-col gap-24 lg:gap-36">
            
            {/* ========================================================== */}
            {/* STEP 01: Discover & Audit                                   */}
            {/* ========================================================== */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Satellite: "Your current tools" */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="rounded-[22px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md lg:justify-self-end lg:max-w-sm w-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px]">
                    👤
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Your current tools
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {toolsList.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/80 p-2 text-center"
                    >
                      <span className="text-base">{tool.icon}</span>
                      <span className="mt-1 text-[9.5px] font-medium text-slate-600">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Center Hexagonal Node */}
              <MilestoneNode
                step={stepsData[0]}
                isActive={activeStepId === 1}
                onClick={() => handleMilestoneClick(1)}
              />

              {/* Right Content */}
              <StepContentBlock
                step={stepsData[0]}
                isActive={activeStepId === 1}
              />
            </div>

            {/* ========================================================== */}
            {/* STEP 02: Design the Right Solution                          */}
            {/* ========================================================== */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Content */}
              <StepContentBlock
                step={stepsData[1]}
                isActive={activeStepId === 2}
                alignRight
              />

              {/* Center Hexagonal Node */}
              <MilestoneNode
                step={stepsData[1]}
                isActive={activeStepId === 2}
                onClick={() => handleMilestoneClick(2)}
              />

              {/* Right Satellite: "Protype plan" */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="rounded-[22px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md lg:justify-self-start lg:max-w-sm w-full"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <span className="text-xs font-semibold text-slate-900">
                    Protype plan
                  </span>
                  <span className="text-blue-500 text-xs">✦</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="font-medium">Support Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="font-medium">Order Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    <span className="font-medium">Customer Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-medium">Integrations</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ========================================================== */}
            {/* STEP 03: Build & Integrate                                  */}
            {/* ========================================================== */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Satellite: Integration status */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="rounded-[22px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md lg:justify-self-end lg:max-w-sm w-full"
              >
                <div className="mb-3 flex items-center gap-2 rounded-xl bg-purple-50 p-2 text-xs text-purple-700">
                  <span>💬</span>
                  <span className="font-medium">
                    Connecting your tools, setting up your agents...
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {toolsList.slice(0, 6).map((t, idx) => (
                    <div
                      key={idx}
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100/90 text-sm shadow-2xs"
                    >
                      {t.icon}
                    </div>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-xs font-semibold text-purple-700">
                    ✓
                  </div>
                </div>
              </motion.div>

              {/* Center Hexagonal Node */}
              <MilestoneNode
                step={stepsData[2]}
                isActive={activeStepId === 3}
                onClick={() => handleMilestoneClick(3)}
              />

              {/* Right Content */}
              <StepContentBlock
                step={stepsData[2]}
                isActive={activeStepId === 3}
              />
            </div>

            {/* ========================================================== */}
            {/* STEP 04: Deploy & Train                                     */}
            {/* ========================================================== */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Content */}
              <StepContentBlock
                step={stepsData[3]}
                isActive={activeStepId === 4}
                alignRight
              />

              {/* Center Hexagonal Node */}
              <MilestoneNode
                step={stepsData[3]}
                isActive={activeStepId === 4}
                onClick={() => handleMilestoneClick(4)}
              />

              {/* Right Satellite: Live AI Agent Chat Preview */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="rounded-[22px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md lg:justify-self-start lg:max-w-sm w-full"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/support-agent.jpg"
                      alt="AI Agent"
                      className="h-6 w-6 rounded-full object-cover border border-cyan-200"
                    />
                    <span className="text-xs font-semibold text-slate-900">
                      AI Agent
                    </span>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Online
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 p-2.5 text-xs leading-relaxed text-slate-700 mb-3">
                  Hi! I&apos;m here to help with any questions you have.
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10.5px] font-medium text-slate-700 hover:bg-slate-50">
                    Order status
                  </button>
                  <button className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10.5px] font-medium text-slate-700 hover:bg-slate-50">
                    Returns
                  </button>
                  <button className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10.5px] font-medium text-slate-700 hover:bg-slate-50">
                    Support
                  </button>
                </div>
              </motion.div>
            </div>

            {/* ========================================================== */}
            {/* STEP 05: Monitor & Improve                                  */}
            {/* ========================================================== */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Satellite: System Performance Analytics */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="rounded-[22px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-md lg:justify-self-end lg:max-w-sm w-full"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <span className="text-xs font-semibold text-slate-900">
                    System performance
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700">
                    <TrendingUp className="h-3 w-3" />
                    +24%
                  </span>
                </div>
                {/* Visual Chart Wave */}
                <div className="h-10 w-full mb-3">
                  <svg viewBox="0 0 200 40" className="h-full w-full overflow-visible">
                    <path
                      d="M 0,30 Q 30,10 60,25 T 120,15 T 180,5 L 200,8"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                {/* 3 Metrics */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-2.5 text-center">
                  <div>
                    <div className="text-[10px] text-slate-400">Response time</div>
                    <div className="font-semibold text-slate-900 text-xs mt-0.5">2.3 min</div>
                    <div className="text-[9.5px] text-emerald-600 font-medium">↓ 62%</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Orders processed</div>
                    <div className="font-semibold text-slate-900 text-xs mt-0.5">1,248</div>
                    <div className="text-[9.5px] text-emerald-600 font-medium">↑ 48%</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Satisfaction</div>
                    <div className="font-semibold text-slate-900 text-xs mt-0.5">96%</div>
                    <div className="text-[9.5px] text-emerald-600 font-medium">↑ 12%</div>
                  </div>
                </div>
              </motion.div>

              {/* Center Hexagonal Node */}
              <MilestoneNode
                step={stepsData[4]}
                isActive={activeStepId === 5}
                onClick={() => handleMilestoneClick(5)}
              />

              {/* Right Content */}
              <StepContentBlock
                step={stepsData[4]}
                isActive={activeStepId === 5}
              />
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM CALLOUT CARD: "THE RESULT"                            */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-28 max-w-3xl text-center"
        >
          {/* Top Pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            THE RESULT
          </div>

          <h3 className="font-[Outfit] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A connected system. A smoother business.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            Fewer delays. Happier customers. Less manual work. With Protype, your
            support, operations, and customer journey finally work together — so
            you can focus on growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

// Milestone Center Hexagonal Node Component
function MilestoneNode({
  step,
  isActive,
  onClick,
}: {
  step: StepData;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center relative my-4 lg:my-0">
      {/* Little Speech Callout above node if present */}
      {step.subtitleCallout && (
        <div className="absolute -top-10 z-20 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur-md">
          {step.subtitleCallout}
        </div>
      )}

      {/* Hexagonal Button with outer pulse ring */}
      <button
        onClick={onClick}
        type="button"
        aria-label={`Go to step ${step.stepNumber}: ${step.title}`}
        className="group relative flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        {/* Pulsing Ripple Ring when active */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-2.5 rounded-full"
            style={{ backgroundColor: `${step.accent}33` }}
          />
        )}

        {/* Outer glowing border */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-300"
          style={{
            backgroundColor: step.accent,
            boxShadow: isActive
              ? `0 0 35px ${step.accent}80, 0 10px 25px rgba(0,0,0,0.12)`
              : `0 4px 15px ${step.accent}40`,
          }}
        />

        {/* Inner Icon container with rich saturated background */}
        <div
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors"
          style={{
            backgroundColor: step.accent,
            color: "#ffffff",
          }}
        >
          {step.icon}
        </div>
      </button>
    </div>
  );
}

// Text & Checklist content block for each step
function StepContentBlock({
  step,
  isActive,
  alignRight,
}: {
  step: StepData;
  isActive: boolean;
  alignRight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        alignRight
          ? "lg:text-right lg:items-end lg:pr-6"
          : "lg:text-left lg:items-start lg:pl-6"
      } text-left`}
    >
      {/* Step Number Pill */}
      <div
        className={`mb-3 inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${step.badgeTone}`}
      >
        {step.stepNumber}
      </div>

      {/* Title */}
      <h3
        className="font-[Outfit] text-2xl font-bold tracking-tight text-slate-900 transition-colors sm:text-3xl"
        style={{ color: isActive ? step.accent : undefined }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
        {step.desc}
      </p>

      {/* Checklist */}
      <div
        className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 max-w-md ${
          alignRight ? "lg:justify-items-end" : ""
        }`}
      >
        {step.checklist.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Check
              className="h-3.5 w-3.5 shrink-0"
              style={{ color: step.accent }}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
