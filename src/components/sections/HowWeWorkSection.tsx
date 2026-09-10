"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  BarChart3,
  Check,
  TrendingUp,
  Activity,
  Zap,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Sparkles,
  Bot,
  RefreshCw,
  Sliders,
} from "lucide-react";
import {
  WhatsAppLogo,
  ShopifyLogo,
  GmailLogo,
  SlackLogo,
  GoogleDriveLogo,
  ExcelLogo,
  GoogleSheetsLogo,
  ShiprocketLogo,
} from "@/components/icons/BrandLogos";

// Steps Data matching Protype's 5-phase transformation journey
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
  glowColor: string;
  normProgress: number; // 0 to 1 position along the curve
}

const stepsData: StepData[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Discover & Audit",
    subtitleCallout: "Deep dive into your existing setup",
    desc: "We understand your business — your customers, operational bottlenecks, tool sprawl, and pain points. This reveals the highest-ROI opportunities for automation.",
    checklist: [
      "Full stack ecosystem audit",
      "Customer journey mapping",
      "API & tool dependency analysis",
      "High-friction bottleneck discovery",
    ],
    icon: <Search className="h-5 w-5" />,
    accent: "#10b981",
    accentBg: "bg-emerald-500",
    badgeTone: "border-emerald-200/90 bg-emerald-50/90 text-emerald-800",
    glowColor: "rgba(16, 185, 129, 0.4)",
    normProgress: 0.1,
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Design the Right Solution",
    subtitleCallout: "A tailored blueprint built for scale",
    desc: "We engineer a custom architecture around your exact workflow. From autonomous AI agents to bidirectional data bridges, we plan what fits your business best — never generic templates.",
    checklist: [
      "Custom AI agent decision trees",
      "Supervised escalation protocols",
      "Bidirectional webhook mapping",
      "Low-latency API architecture",
    ],
    icon: <PenTool className="h-5 w-5" />,
    accent: "#3b82f6",
    accentBg: "bg-blue-500",
    badgeTone: "border-blue-200/90 bg-blue-50/90 text-blue-800",
    glowColor: "rgba(59, 130, 246, 0.4)",
    normProgress: 0.32,
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Build & Integrate",
    subtitleCallout: "Connecting systems & training agents",
    desc: "We build your agents, sync your tools, and unify everything into a secure, resilient system. We rigorously simulate real-world e-commerce edge cases before going live.",
    checklist: [
      "Agent logic & prompt tuning",
      "Multi-channel webhook sync",
      "Shopify & ERP live pipelines",
      "Fail-safe human takeover testing",
    ],
    icon: <Code2 className="h-5 w-5" />,
    accent: "#a855f7",
    accentBg: "bg-purple-500",
    badgeTone: "border-purple-200/90 bg-purple-50/90 text-purple-800",
    glowColor: "rgba(168, 85, 247, 0.4)",
    normProgress: 0.54,
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Deploy & Train",
    subtitleCallout: "Your system is live with 24/7 copilot",
    desc: "We launch your agents into production, train your human operators, and ensure effortless handoffs. You receive dedicated technical support from day one.",
    checklist: [
      "Zero-downtime production go-live",
      "Operator & team onboarding",
      "Live conversation shadowing",
      "Continuous confidence tuning",
    ],
    icon: <Rocket className="h-5 w-5" />,
    accent: "#06b6d4",
    accentBg: "bg-cyan-500",
    badgeTone: "border-cyan-200/90 bg-cyan-50/90 text-cyan-800",
    glowColor: "rgba(6, 182, 212, 0.4)",
    normProgress: 0.76,
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Monitor & Improve",
    subtitleCallout: "Data-driven continuous refinement",
    desc: "We continuously analyze resolution accuracy, customer sentiment, and operational throughput — updating agent intelligence as your business evolves and scales.",
    checklist: [
      "Real-time telemetry dashboards",
      "Automated prompt refinements",
      "Weekly performance reviews",
      "Proactive new feature rollouts",
    ],
    icon: <BarChart3 className="h-5 w-5" />,
    accent: "#8b5cf6",
    accentBg: "bg-violet-500",
    badgeTone: "border-violet-200/90 bg-violet-50/90 text-violet-800",
    glowColor: "rgba(139, 92, 246, 0.4)",
    normProgress: 0.94,
  },
];

// App tools for Step 01 satellite card with authentic brand logos and status
const auditedTools = [
  { name: "WhatsApp", icon: <WhatsAppLogo className="h-5 w-5" />, status: "1.2k msgs/d", ping: "bg-emerald-500" },
  { name: "Shopify", icon: <ShopifyLogo className="h-5 w-5" />, status: "340 orders/d", ping: "bg-lime-500" },
  { name: "Gmail", icon: <GmailLogo className="h-5 w-5" />, status: "85 threads/d", ping: "bg-red-500" },
  { name: "Slack", icon: <SlackLogo className="h-5 w-5" />, status: "#ops active", ping: "bg-purple-500" },
  { name: "Drive", icon: <GoogleDriveLogo className="h-5 w-5" />, status: "42 SOP docs", ping: "bg-blue-500" },
  { name: "Excel", icon: <ExcelLogo className="h-5 w-5" />, status: "Inventory.xlsx", ping: "bg-emerald-600" },
  { name: "Sheets", icon: <GoogleSheetsLogo className="h-5 w-5" />, status: "Dispatch log", ping: "bg-green-500" },
  { name: "Shiprocket", icon: <ShiprocketLogo className="h-5 w-5" />, status: "Courier API", ping: "bg-sky-500" },
];

// ====================================================================
// PARALLAX SPEECH PILL (Local scroll tracking with silky-smooth physics)
// ====================================================================
function ParallaxSpeechPill({
  text,
  accent,
}: {
  text: string;
  accent: string;
}) {
  const pillRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pillRef,
    offset: ["start end", "end start"],
  });

  // Silky-smooth dampened spring translation locked to physical scroll position
  const smoothY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-26, 26]),
    { stiffness: 90, damping: 22, restDelta: 0.001 }
  );

  return (
    <div ref={pillRef} className="absolute -top-13 z-30 pointer-events-none">
      <motion.div
        style={{ y: smoothY }}
        className="relative whitespace-nowrap rounded-full border border-slate-200/95 bg-white/98 px-4 py-1.5 text-[11px] font-bold text-slate-800 shadow-[0_6px_22px_rgba(15,23,42,0.1)] backdrop-blur-md transition-shadow hover:shadow-lg select-none pointer-events-auto"
      >
        <span
          className="inline-block h-2 w-2 rounded-full mr-2 shadow-xs"
          style={{ backgroundColor: accent }}
        />
        {text}

        {/* Subtle speech bubble downward pointer notch */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-b border-r border-slate-200/90 bg-white" />
      </motion.div>
    </div>
  );
}

// ====================================================================
// WAVY GLOWING WIRE CONNECTOR (Between Satellite Card & Roadway Waypoint)
// Perfectly docked from 48px roadway checkpoint (radius 24px) to satellite card
// ====================================================================
function WireConnector({
  side,
  step,
  isActive,
}: {
  side: "left" | "right";
  step: StepData;
  isActive: boolean;
}) {
  const isLeft = side === "left";
  // Width: 98px spans precisely from disc edge at calc(50% + 24px) to card at calc(50% + 122px)
  const curveD = isLeft
    ? "M 0,12 C 30,4 68,20 98,12"
    : "M 0,12 C 30,20 68,4 98,12";

  return (
    <div
      className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center pointer-events-none z-20 ${
        isLeft
          ? "right-[calc(50%+24px)] w-[98px]"
          : "left-[calc(50%+24px)] w-[98px]"
      }`}
    >
      <svg
        viewBox="0 0 98 24"
        className="w-full h-6 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id={`wireGlow-${step.id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Muted base highway conduit wire */}
        <path
          d={curveD}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          opacity="0.55"
        />

        {/* 2. Flowing active glowing energy wire */}
        <motion.path
          d={curveD}
          fill="none"
          stroke={step.accent}
          strokeWidth={isActive ? 3 : 2.2}
          strokeDasharray="5 5"
          filter={`url(#wireGlow-${step.id})`}
          animate={{
            strokeDashoffset: [0, isLeft ? -20 : 20],
            opacity: isActive ? 1 : 0.72,
          }}
          transition={{
            strokeDashoffset: { duration: 1.3, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
        />

        {/* 3. Traveling Light Photon */}
        <g filter={`url(#wireGlow-${step.id})`}>
          <circle r={isActive ? 4 : 3} fill={step.accent} opacity={0.9}>
            <animateMotion
              path={curveD}
              dur={isActive ? "1.2s" : "1.8s"}
              repeatCount="indefinite"
            />
          </circle>
          <circle r={isActive ? 2.2 : 1.6} fill="#ffffff">
            <animateMotion
              path={curveD}
              dur={isActive ? "1.2s" : "1.8s"}
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* 4. Left Anchor Dock Ring */}
        <circle cx="0" cy="12" r="4.2" fill="#090d16" stroke={step.accent} strokeWidth="2" />
        <circle cx="0" cy="12" r="1.8" fill={step.accent} />

        {/* 5. Right Anchor Dock Ring */}
        <circle cx="98" cy="12" r="4.2" fill="#090d16" stroke={step.accent} strokeWidth="2" />
        <circle cx="98" cy="12" r="1.8" fill={step.accent} />
      </svg>
    </div>
  );
}

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
    stiffness: 110,
    damping: 26,
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
    setTimeout(() => {
      setUserInteracted(false);
    }, 4500);
  };

  // High-Tech Meandering S-Curve Cyber Pipeline definition (viewBox 0 0 1000 2400)
  const curvePathD =
    "M 500,20 C 500,100 515,160 500,240 C 475,450 525,650 500,850 C 475,1050 525,1250 500,1450 C 475,1650 525,1850 500,2050 C 485,2180 500,2280 500,2380";

  return (
    <section
      ref={containerRef}
      id="process"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden bg-[#fafcfc] py-24 md:py-32"
    >
      {/* Dynamic background ambient blooms */}
      <div
        className="pointer-events-none absolute top-1/4 -left-20 h-[650px] w-[650px] rounded-full bg-emerald-200/25 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-20 h-[700px] w-[700px] rounded-full bg-cyan-200/25 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/3 h-[650px] w-[650px] rounded-full bg-purple-200/20 blur-[160px]"
        aria-hidden="true"
      />

      {/* Modern High-Precision Engineering Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-[11.5px] font-bold tracking-[0.16em] text-emerald-900 uppercase backdrop-blur-md shadow-xs"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg max-w-3xl mx-auto"
          >
            We take a deep look at your business, map your existing workflow, and
            build a custom system that connects your support, operations, and
            customer journey — so everything works together in harmony.
          </motion.p>

          {/* Top-Right Handwritten Script Note matching reference */}
          <div className="pointer-events-none absolute -top-4 right-0 hidden lg:block text-right">
            <div className="font-serif italic text-sm text-slate-500 leading-snug tracking-wide">
              Every business is unique.
              <br />
              <span className="text-emerald-700 font-medium">So is our system architecture.</span>
            </div>
            {/* Curved hand-drawn arrow */}
            <svg
              viewBox="0 0 60 50"
              className="ml-auto mt-1 h-8 w-10 stroke-emerald-500/70"
              fill="none"
              strokeWidth="1.6"
            >
              <path d="M 40,5 C 20,15 15,35 30,45" strokeLinecap="round" />
              <path d="M 24,40 L 30,45 L 32,38" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Milestone Navigation Chips for Quick Phase Jumps */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {stepsData.map((s) => {
            const isActive = activeStepId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleMilestoneClick(s.id)}
                className={`group flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg ring-2 ring-emerald-400/40 scale-105"
                    : "border border-slate-200/80 bg-white/90 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-2xs"
                }`}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: s.accent }}
                >
                  {s.id}
                </span>
                <span>{s.title}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* THE WINDING ROAD JOURNEY (DESKTOP & RESPONSIVE PIPELINE)      */}
        {/* ============================================================ */}
        <div className="relative mx-auto mt-16 max-w-[1360px]">
          
          {/* SVG REALISTIC BLACKISH ASPHALT HIGHWAY + TRAVELING PROTYPE COPILOT */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              viewBox="0 0 1000 2400"
              preserveAspectRatio="none"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* Amber Centerline Highway Glow */}
                <filter id="amberHighwayGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Highway Photon Particle Glow */}
                <filter id="roadParticleGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Road Embankment & Ambient Dark Ground Shadow */}
              <path
                d={curvePathD}
                fill="none"
                stroke="#020617"
                strokeWidth="66"
                strokeLinecap="round"
                opacity="0.25"
                className="filter blur-[8px]"
              />

              {/* 2. Outer Concrete Curb Shoulders */}
              <path
                d={curvePathD}
                fill="none"
                stroke="#1e293b"
                strokeWidth="56"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* 3. Deep Blackish Asphalt Pavement Bed */}
              <path
                d={curvePathD}
                fill="none"
                stroke="#090d16"
                strokeWidth="48"
                strokeLinecap="round"
                opacity="1"
              />

              {/* 4. Shoulder Edge White/Slate Safety Guidelines */}
              <path
                d={curvePathD}
                fill="none"
                stroke="#334155"
                strokeWidth="42"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d={curvePathD}
                fill="none"
                stroke="#0b0f19"
                strokeWidth="38"
                strokeLinecap="round"
                opacity="1"
              />

              {/* 5. Authentic Electric Amber Centerline Highway Divider */}
              <path
                d={curvePathD}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="14 16"
                strokeLinecap="butt"
                opacity="0.92"
                filter="url(#amberHighwayGlow)"
              />

              {/* 6. Hidden pathRef for smooth mascot tracking */}
              <path
                ref={pathRef}
                d={curvePathD}
                fill="none"
                stroke="transparent"
                strokeWidth="1"
              />

              {/* 7. Cruising Highway Light Photons */}
              <circle r="3.8" fill="#ffffff" filter="url(#roadParticleGlow)">
                <animateMotion path={curvePathD} dur="5s" repeatCount="indefinite" />
              </circle>
              <circle r="2.8" fill="#f59e0b" filter="url(#roadParticleGlow)">
                <animateMotion path={curvePathD} dur="5s" begin="1.6s" repeatCount="indefinite" />
              </circle>
              <circle r="3.2" fill="#38bdf8" filter="url(#roadParticleGlow)">
                <animateMotion path={curvePathD} dur="5s" begin="3.2s" repeatCount="indefinite" />
              </circle>

              {/* 8. Highway Terminal Finish Arrowhead */}
              <polygon
                points="500,2395 486,2365 514,2365"
                fill="#f59e0b"
                opacity="0.9"
              />
            </svg>

            {/* 9. Traveling Protype 3D Mascot Autopilot Copilot */}
            <motion.div
              className="absolute z-40 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${(orbPos.x / 1000) * 100}%`,
                top: `${(orbPos.y / 2400) * 100}%`,
              }}
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Forward Highway Headlight Beam */}
              <div
                className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 w-16 h-24 opacity-35 blur-md"
                style={{
                  background: `linear-gradient(to bottom, ${
                    stepsData.find((s) => s.id === activeStepId)?.accent || "#f59e0b"
                  }, transparent)`,
                  clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",
                }}
              />

              {/* Luminous atmospheric halo */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-full animate-pulse opacity-85 blur-lg"
                style={{
                  backgroundColor:
                    stepsData.find((s) => s.id === activeStepId)?.accent || "#f59e0b",
                }}
              />
              <img
                src="/fevicon.png"
                alt="Protype Autopilot"
                className="relative z-10 h-12 w-12 drop-shadow-[0_10px_22px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:rotate-12 cursor-pointer"
                onClick={() => handleMilestoneClick((activeStepId % 5) + 1)}
              />
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* THE 5 MILESTONE ROWS WITH REDESIGNED INTERACTIVE WIDGETS     */}
          {/* ============================================================ */}
          <div className="relative z-10 flex flex-col gap-28 lg:gap-36">
            
            {/* ========================================================== */}
            {/* STEP 01: Discover & Audit                                   */}
            {/* ========================================================== */}
            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Satellite: "Ecosystem Live Audit" */}
              <EcosystemAuditCard />

              {/* Connecting Wire from Card to Node */}
              <WireConnector side="left" step={stepsData[0]} isActive={activeStepId === 1} />

              {/* Center Roadway Waypoint Disc */}
              <RoadwayWaypointDisc
                step={stepsData[0]}
                isActive={activeStepId === 1}
                onClick={() => handleMilestoneClick(1)}
              />

              {/* Right Content Block */}
              <StepContentBlock
                step={stepsData[0]}
                isActive={activeStepId === 1}
              />
            </div>

            {/* ========================================================== */}
            {/* STEP 02: Design the Right Solution                          */}
            {/* ========================================================== */}
            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Content Block */}
              <StepContentBlock
                step={stepsData[1]}
                isActive={activeStepId === 2}
                alignRight
              />

              {/* Center Roadway Waypoint Disc */}
              <RoadwayWaypointDisc
                step={stepsData[1]}
                isActive={activeStepId === 2}
                onClick={() => handleMilestoneClick(2)}
              />

              {/* Connecting Wire from Node to Card */}
              <WireConnector side="right" step={stepsData[1]} isActive={activeStepId === 2} />

              {/* Right Satellite: "Tailored Architecture Blueprint" */}
              <ArchitectureBlueprintCard />
            </div>

            {/* ========================================================== */}
            {/* STEP 03: Build & Integrate                                  */}
            {/* ========================================================== */}
            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Satellite: "Integration & Webhook Engine" */}
              <IntegrationEngineCard />

              {/* Connecting Wire from Card to Node */}
              <WireConnector side="left" step={stepsData[2]} isActive={activeStepId === 3} />

              {/* Center Roadway Waypoint Disc */}
              <RoadwayWaypointDisc
                step={stepsData[2]}
                isActive={activeStepId === 3}
                onClick={() => handleMilestoneClick(3)}
              />

              {/* Right Content Block */}
              <StepContentBlock
                step={stepsData[2]}
                isActive={activeStepId === 3}
              />
            </div>

            {/* ========================================================== */}
            {/* STEP 04: Deploy & Train                                     */}
            {/* ========================================================== */}
            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Content Block */}
              <StepContentBlock
                step={stepsData[3]}
                isActive={activeStepId === 4}
                alignRight
              />

              {/* Center Roadway Waypoint Disc */}
              <RoadwayWaypointDisc
                step={stepsData[3]}
                isActive={activeStepId === 4}
                onClick={() => handleMilestoneClick(4)}
              />

              {/* Connecting Wire from Node to Card */}
              <WireConnector side="right" step={stepsData[3]} isActive={activeStepId === 4} />

              {/* Right Satellite: "Live Autonomous AI Copilot" */}
              <LiveAiCopilotCard />
            </div>

            {/* ========================================================== */}
            {/* STEP 05: Monitor & Improve                                  */}
            {/* ========================================================== */}
            <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)]">
              {/* Left Satellite: "Real-Time Telemetry & Growth" */}
              <TelemetryDashboardCard />

              {/* Connecting Wire from Card to Node */}
              <WireConnector side="left" step={stepsData[4]} isActive={activeStepId === 5} />

              {/* Center Roadway Waypoint Disc */}
              <RoadwayWaypointDisc
                step={stepsData[4]}
                isActive={activeStepId === 5}
                onClick={() => handleMilestoneClick(5)}
              />

              {/* Right Content Block */}
              <StepContentBlock
                step={stepsData[4]}
                isActive={activeStepId === 5}
              />
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM CALLOUT CARD: "THE OUTCOME"                           */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-28 max-w-4xl rounded-[32px] border border-slate-200/80 bg-white/95 p-8 sm:p-12 text-center shadow-[0_24px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl"
        >
          {/* Top Pill Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-[11.5px] font-bold tracking-[0.16em] text-emerald-900 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            THE OUTCOME
          </div>

          <h3 className="font-[Outfit] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A connected system. A faster, smarter business.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            Fewer delays. Happier customers. Zero repetitive manual work. With Protype,
            your front-line support, backend operations, and full customer lifecycle
            work in continuous synchronization.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/8637584923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppLogo className="h-4 w-4" />
              <span>Map Your Workflow on WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ====================================================================
// 1. STEP 01 SATELLITE: Ecosystem Live Audit Card
// ====================================================================
function EcosystemAuditCard({ cardRef }: { cardRef?: React.Ref<HTMLDivElement> }) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="rounded-[26px] border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:justify-self-end lg:max-w-md w-full relative overflow-hidden"
    >
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs">
            <Activity className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-900">
              Ecosystem Audit
            </span>
            <span className="block text-[10px] text-slate-400">
              Continuous dependency scan
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          Active Scan
        </span>
      </div>

      {/* 8-Tool Ecosystem Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {auditedTools.map((tool, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/70 p-2 text-center transition-all hover:bg-white hover:border-emerald-200 hover:shadow-xs"
          >
            <div className="flex h-6 w-6 items-center justify-center">{tool.icon}</div>
            <span className="mt-1 text-[10px] font-semibold text-slate-800">
              {tool.name}
            </span>
            <span className="text-[8.5px] text-slate-400 truncate max-w-full">
              {tool.status}
            </span>
          </div>
        ))}
      </div>

      {/* Progress & Bottleneck Discovery Bar */}
      <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-2.5 text-xs">
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <span className="font-semibold text-emerald-950">Audit Completion</span>
          <span className="font-bold text-emerald-700">100% Verified</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-emerald-200/80 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
          <span>⚡ 14 manual bottlenecks mapped</span>
          <span className="text-emerald-700 font-medium">Ready for flow design</span>
        </div>
      </div>
    </motion.div>
  );
}

// ====================================================================
// 2. STEP 02 SATELLITE: Architecture Blueprint Card
// ====================================================================
function ArchitectureBlueprintCard({ cardRef }: { cardRef?: React.Ref<HTMLDivElement> }) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="rounded-[26px] border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:justify-self-start lg:max-w-md w-full relative overflow-hidden"
    >
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500 text-white shadow-xs">
            <Cpu className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-900">
              System Blueprint
            </span>
            <span className="block text-[10px] text-slate-400">
              AI Decision & Routing Mesh
            </span>
          </div>
        </div>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
          &lt; 1.2s Latency
        </span>
      </div>

      {/* Visual Agent Node Flow */}
      <div className="space-y-2.5">
        {/* Pipeline Layer 1: Inbound Omnichannel Gateway */}
        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-slate-800">
              Omnichannel Input Router
            </span>
          </div>
          <span className="text-[10px] font-medium text-slate-500">
            WhatsApp, IG, Email
          </span>
        </div>

        {/* Central Protype Brain Tag */}
        <div className="relative py-1 flex items-center justify-center">
          <div className="h-4 w-px bg-blue-300" />
          <span className="absolute bg-blue-100 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
            Intent Classification
          </span>
        </div>

        {/* Pipeline Layer 2: Dedicated Autonomous Agents */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-slate-900">CX Copilot</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-[9.5px] text-slate-500 leading-tight">
              Order tracking, returns, FAQs & exchanges
            </p>
          </div>

          <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-slate-900">Ops Sentinel</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-[9.5px] text-slate-500 leading-tight">
              Shopify sync, Shiprocket courier dispatch
            </p>
          </div>
        </div>

        {/* Pipeline Layer 3: Supervised Escalation Shield */}
        <div className="flex items-center justify-between rounded-xl border border-purple-100 bg-purple-50/50 p-2.5 text-xs text-purple-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0" />
            <span className="font-semibold text-[11px]">Supervised Human Protocol</span>
          </div>
          <span className="text-[10px] text-purple-700 font-medium">
            Seamless Slack handoff
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ====================================================================
// 3. STEP 03 SATELLITE: Integration & Webhook Engine Card
// ====================================================================
function IntegrationEngineCard({ cardRef }: { cardRef?: React.Ref<HTMLDivElement> }) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="rounded-[26px] border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:justify-self-end lg:max-w-md w-full relative overflow-hidden"
    >
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs">
            <Zap className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-900">
              Integration & Webhooks
            </span>
            <span className="block text-[10px] text-slate-400">
              Live Bidirectional Sync Engine
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-700">
          3,420 events/min
        </span>
      </div>

      {/* Live Integration Stream Logs */}
      <div className="space-y-2 font-mono text-[10.5px]">
        <div className="flex items-center justify-between rounded-lg bg-slate-900 text-emerald-400 p-2">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">POST</span>
            <span className="text-slate-300">/shopify/orders/sync</span>
          </div>
          <span className="text-[9.5px] text-slate-400">200 OK (84ms)</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-slate-900 text-cyan-400 p-2">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">WS</span>
            <span className="text-slate-300">/whatsapp/stream/live</span>
          </div>
          <span className="text-[9.5px] text-slate-400">Connected</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-slate-900 text-purple-400 p-2">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold">PATCH</span>
            <span className="text-slate-300">/courier/shiprocket/label</span>
          </div>
          <span className="text-[9.5px] text-slate-400">Synced</span>
        </div>
      </div>

      {/* Bottom Payload Metrics */}
      <div className="mt-3.5 grid grid-cols-3 gap-2 text-center border-t border-slate-100 pt-2.5">
        <div>
          <span className="block text-[9.5px] text-slate-400">Payload Uptime</span>
          <span className="block text-xs font-bold text-slate-900">99.98%</span>
        </div>
        <div>
          <span className="block text-[9.5px] text-slate-400">Avg Latency</span>
          <span className="block text-xs font-bold text-emerald-600">42ms</span>
        </div>
        <div>
          <span className="block text-[9.5px] text-slate-400">Data Integrity</span>
          <span className="block text-xs font-bold text-purple-600">100% Zero-Loss</span>
        </div>
      </div>
    </motion.div>
  );
}

// ====================================================================
// 4. STEP 04 SATELLITE: Live AI Copilot Preview Card
// ====================================================================
function LiveAiCopilotCard({ cardRef }: { cardRef?: React.Ref<HTMLDivElement> }) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="rounded-[26px] border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:justify-self-start lg:max-w-md w-full relative overflow-hidden"
    >
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <img
            src="/support-agent.jpg"
            alt="AI Agent"
            className="h-7 w-7 rounded-full object-cover border border-cyan-300 shadow-2xs"
          />
          <div>
            <span className="block text-xs font-bold text-slate-900">
              Protype Copilot Live
            </span>
            <span className="block text-[10px] text-slate-400">
              Autonomous Customer Support
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10.5px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          Live 24/7
        </span>
      </div>

      {/* Realistic Interactive Chat Simulation */}
      <div className="space-y-2.5 text-xs">
        {/* Customer Incoming Query */}
        <div className="flex items-start gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
            C
          </div>
          <div className="rounded-2xl rounded-tl-none bg-slate-100 p-2.5 text-slate-800 max-w-[85%] leading-relaxed">
            Please change delivery address to Sector 42 Gurgaon for order #PR-8812!
          </div>
        </div>

        {/* AI Agent Instant Autonomous Resolution */}
        <div className="flex items-start gap-2 justify-end">
          <div className="rounded-2xl rounded-tr-none bg-gradient-to-r from-emerald-600 to-teal-600 p-2.5 text-white max-w-[90%] leading-relaxed shadow-xs">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold opacity-90 mb-1">
              <Sparkles className="h-3 w-3" />
              <span>Address Updated in Shopify & Shiprocket</span>
            </div>
            Updated! Courier route adjusted. Tracking confirmation has been sent to your WhatsApp.
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full overflow-hidden shrink-0">
            <WhatsAppLogo className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* CSAT Score Pill */}
      <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-xs text-slate-600">
        <div className="flex items-center gap-1.5 font-semibold text-slate-800">
          <span className="text-amber-500">★ ★ ★ ★ ★</span>
          <span className="text-[11px]">4.98 / 5.0 CSAT</span>
        </div>
        <span className="text-[10px] font-medium text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
          100% Team Onboarded
        </span>
      </div>
    </motion.div>
  );
}

// ====================================================================
// 5. STEP 05 SATELLITE: Real-Time Telemetry Dashboard Card
// ====================================================================
function TelemetryDashboardCard({ cardRef }: { cardRef?: React.Ref<HTMLDivElement> }) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="rounded-[26px] border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:justify-self-end lg:max-w-md w-full relative overflow-hidden"
    >
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500 text-white shadow-xs">
            <TrendingUp className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-900">
              Operations Telemetry
            </span>
            <span className="block text-[10px] text-slate-400">
              Continuous System Growth
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-bold text-violet-700">
          +38% Efficiency
        </span>
      </div>

      {/* Visual Gradient Sparkline Wave */}
      <div className="h-14 w-full mb-3 relative">
        <svg viewBox="0 0 260 50" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,40 Q 30,20 65,30 T 130,15 T 195,8 L 260,4 L 260,50 L 0,50 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M 0,40 Q 30,20 65,30 T 130,15 T 195,8 L 260,4"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="260" cy="4" r="4" fill="#8b5cf6" />
        </svg>
      </div>

      {/* 3 Core Business KPIs */}
      <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-2.5 text-center">
        <div className="rounded-lg bg-slate-50 p-2">
          <span className="block text-[9.5px] text-slate-400">Avg Resolution</span>
          <span className="block text-xs font-bold text-slate-900 mt-0.5">18s</span>
          <span className="block text-[9px] text-emerald-600 font-semibold">↓ 99% faster</span>
        </div>
        <div className="rounded-lg bg-slate-50 p-2">
          <span className="block text-[9.5px] text-slate-400">Autonomous</span>
          <span className="block text-xs font-bold text-slate-900 mt-0.5">96.4%</span>
          <span className="block text-[9px] text-emerald-600 font-semibold">↑ Zero touch</span>
        </div>
        <div className="rounded-lg bg-slate-50 p-2">
          <span className="block text-[9.5px] text-slate-400">CSAT Score</span>
          <span className="block text-xs font-bold text-slate-900 mt-0.5">98.2%</span>
          <span className="block text-[9px] text-emerald-600 font-semibold">↑ Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

// ====================================================================
// SLEEK ROADWAY WAYPOINT DISC (Embedded flush into the black asphalt highway)
// Replaces the bulky square milestone boxes with a sleek high-tech road hub
// ====================================================================
function RoadwayWaypointDisc({
  step,
  isActive,
  onClick,
}: {
  step: StepData;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center relative my-6 lg:my-0">
      {/* Floating Smooth Parallax Speech Pill */}
      {step.subtitleCallout && (
        <ParallaxSpeechPill
          text={step.subtitleCallout}
          accent={step.accent}
        />
      )}

      {/* Sleek Embedded Roadway Waypoint Disc (48px) */}
      <button
        onClick={onClick}
        type="button"
        aria-label={`Jump to step ${step.stepNumber}: ${step.title}`}
        className="group relative flex h-12 w-12 items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-115 active:scale-95"
      >
        {/* Active Radar Sweep Ring */}
        {isActive && (
          <span
            className="absolute -inset-2.5 rounded-full border border-dashed animate-[spin_6s_linear_infinite]"
            style={{ borderColor: `${step.accent}99` }}
          />
        )}

        {/* Ambient Pulsing Asphalt Glow Aura */}
        <span
          className="absolute -inset-2 rounded-full blur-md transition-opacity duration-300"
          style={{
            backgroundColor: isActive ? step.accent : "transparent",
            opacity: isActive ? 0.65 : 0,
          }}
        />

        {/* Outer Heavy Asphalt Ring */}
        <div
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 shadow-md"
          style={{
            backgroundColor: isActive ? "#020617" : "#0f172a",
            borderColor: isActive ? step.accent : "#334155",
            boxShadow: isActive
              ? `0 0 16px ${step.glowColor}, inset 0 0 8px ${step.glowColor}`
              : "0 4px 12px rgba(0, 0, 0, 0.45)",
          }}
        >
          {/* Step Number in illuminated roadway stencil font */}
          <span
            className="font-[Outfit] text-xs font-black tracking-wider transition-colors duration-200"
            style={{
              color: isActive ? "#ffffff" : "#94a3b8",
              textShadow: isActive ? `0 0 8px ${step.accent}` : "none",
            }}
          >
            {step.stepNumber}
          </span>
        </div>

        {/* Miniature Top/Bottom alignment ticks simulating road cat-eyes */}
        <span
          className="absolute -top-1 h-1 w-2 rounded-full transition-colors duration-200"
          style={{ backgroundColor: isActive ? step.accent : "#475569" }}
        />
        <span
          className="absolute -bottom-1 h-1 w-2 rounded-full transition-colors duration-200"
          style={{ backgroundColor: isActive ? step.accent : "#475569" }}
        />
      </button>
    </div>
  );
}

// ====================================================================
// TEXT & CHECKLIST CONTENT BLOCK COMPONENT
// ====================================================================
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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        alignRight
          ? "lg:text-right lg:items-end lg:pr-6"
          : "lg:text-left lg:items-start lg:pl-6"
      } text-left`}
    >
      {/* Step Number Pill Badge */}
      <div
        className={`mb-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider shadow-2xs ${step.badgeTone}`}
      >
        <span>PHASE {step.stepNumber}</span>
      </div>

      {/* Title */}
      <h3
        className="font-[Outfit] text-2xl font-bold tracking-tight text-slate-900 transition-colors sm:text-3xl"
        style={{ color: isActive ? step.accent : undefined }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        {step.desc}
      </p>

      {/* Checklist */}
      <div
        className={`mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 max-w-md ${
          alignRight ? "lg:justify-items-end" : ""
        }`}
      >
        {step.checklist.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-slate-100/70"
          >
            <div
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white text-[9px] font-bold"
              style={{ backgroundColor: step.accent }}
            >
              <Check className="h-2.5 w-2.5" />
            </div>
            <span className="font-medium text-slate-800">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

