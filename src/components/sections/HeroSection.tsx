"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Package,
  Truck,
  Bell,
  FileText,
  CheckCircle2,
  X,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { WhatsAppLogo, InstagramLogo } from "@/components/icons/BrandLogos";
import ShineButton from "../ui/ShineButton";

export default function HeroSection() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-0 overflow-hidden bg-[#fafcfc] pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 text-slate-900 lg:min-h-[820px]"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -bottom-36 -left-36 h-[520px] w-[520px] rounded-full bg-emerald-200/35 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-[5%] h-[600px] w-[600px] rounded-full bg-cyan-200/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-emerald-300/15 blur-[110px]"
        aria-hidden="true"
      />

      {/* Clean, smoothly visible background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 80% at 62% 45%, black 25%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 62% 45%, black 25%, transparent 92%)",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto grid max-w-[1520px] items-center gap-8 px-4 sm:px-6 pt-4 pb-12 lg:grid-cols-[440px_1fr] lg:gap-8 lg:px-10 lg:pt-8 xl:grid-cols-[480px_1fr]">
        
        {/* Left Column: Typography & CTAs */}
        <div className="relative z-10 max-w-lg">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] sm:text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            CUSTOM SYSTEMS FOR E-COMMERCE
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-[Outfit] text-[42px] sm:text-6xl lg:text-[76px] font-bold leading-[1.04] tracking-[-0.04em] text-slate-900"
          >
            Support.
            <br />
            Operations.
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              In flow.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 sm:mt-7 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg lg:text-[19px]"
          >
            Protype builds custom systems that connect customer support, operations, and every step in between.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 sm:mt-6 flex flex-row flex-wrap items-center gap-2 sm:gap-2.5"
          >
            <ShineButton
              href="https://calendly.com/protype-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <span>Talk to us</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </ShineButton>

            <ShineButton
              href="#process"
              variant="secondary"
              size="lg"
            >
              <span>See how it works</span>
              <span className="text-emerald-700 font-semibold">↗</span>
            </ShineButton>
          </motion.div>
        </div>

        {/* Right Column: Interactive Diagram Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="relative w-full overflow-hidden"
        >
          {/* Desktop & Tablet Bilateral Diagram Hub (>= 768px) with Auto-Scaling */}
          <div className="hidden md:block w-full">
            <DesktopWorkflowHub onShowToast={(msg) => setToastMessage(msg)} />
          </div>

          {/* Dedicated Mobile Interactive Workflow Hub (< 768px) */}
          <div className="block md:hidden w-full">
            <MobileWorkflowHub onShowToast={(msg) => setToastMessage(msg)} />
          </div>
        </motion.div>
      </div>

      {/* Interactive Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-4 sm:px-5 py-3.5 text-sm font-medium text-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur-md"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="text-[13px] sm:text-sm">{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="ml-2 text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}// 960 x 550 Coordinate Wires with precise dual anchor nodes (Card + Core)
// Bilateral symmetry around center axis X = 480, Y = 272
interface WireConfig {
  id: string;
  stage: number;
  d: string;
  color: string;
  cardDot: { cx: number; cy: number };
  coreDot: { cx: number; cy: number };
}

const WIRES: WireConfig[] = [
  // Wire 0: Customer (Top) -> Mascot Orb (Top) - Inward query flow
  {
    id: "wire-customer",
    stage: 0,
    d: "M 480,154 C 488,185 472,225 480,255",
    color: "#0ea5e9",
    cardDot: { cx: 480, cy: 154 },
    coreDot: { cx: 480, cy: 255 },
  },
  // Wire 1: Mascot Orb (Left) -> Customer Support (Middle-Left) - Outward wavy flow
  {
    id: "wire-support",
    stage: 1,
    d: "M 415,320 C 365,320 330,263 284,263",
    color: "#10b981",
    cardDot: { cx: 284, cy: 263 },
    coreDot: { cx: 415, cy: 320 },
  },
  // Wire 2: Mascot Orb (Right) -> Order Operations (Middle-Right) - Symmetrical wavy flow
  {
    id: "wire-ops",
    stage: 2,
    d: "M 545,320 C 595,320 630,263 676,263",
    color: "#3b82f6",
    cardDot: { cx: 676, cy: 263 },
    coreDot: { cx: 545, cy: 320 },
  },
  // Wire 3: Mascot Orb (Bottom-Left) -> Fulfilment (Bottom-Left) - Outward wavy flow
  {
    id: "wire-fulfilment",
    stage: 3,
    d: "M 434,366 C 390,410 330,440 280,480",
    color: "#10b981",
    cardDot: { cx: 280, cy: 480 },
    coreDot: { cx: 434, cy: 366 },
  },
  // Wire 4: Mascot Orb (Bottom-Right) -> Customer Update (Bottom-Right) - Symmetrical wavy flow
  {
    id: "wire-update",
    stage: 4,
    d: "M 526,366 C 570,410 630,440 680,480",
    color: "#06b6d4",
    cardDot: { cx: 680, cy: 480 },
    coreDot: { cx: 526, cy: 366 },
  },
];

// Stage configuration used for tabs and active stage styling
const STAGES_DATA = [
  {
    id: 0,
    title: "Customer",
    shortTitle: "Customer",
    icon: User,
    accent: "#0ea5e9",
    tag: "10:24 AM",
  },
  {
    id: 1,
    title: "Customer Support",
    shortTitle: "Support",
    icon: MessageSquare,
    accent: "#10b981",
    tag: "Resolved",
  },
  {
    id: 2,
    title: "Order Operations",
    shortTitle: "Operations",
    icon: Package,
    accent: "#3b82f6",
    tag: "Processing",
  },
  {
    id: 3,
    title: "Fulfilment",
    shortTitle: "Fulfilment",
    icon: Truck,
    accent: "#10b981",
    tag: "Packed",
  },
  {
    id: 4,
    title: "Customer Update",
    shortTitle: "Update",
    icon: Bell,
    accent: "#06b6d4",
    tag: "Sent",
  },
];

/* ========================================================================= */
/* DESKTOP & TABLET WORKFLOW HUB (Proportional Vector Scaler >= 768px)       */
/* ========================================================================= */
function DesktopWorkflowHub({ onShowToast }: { onShowToast: (msg: string) => void }) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  // Measure container and scale the artboard proportionally
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.clientWidth;
      if (width > 0) {
        setScale(Math.min(1, width / 960));
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3D Parallax Mouse Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredCard(null);
  };

  // Automatic sequential workflow animation loop
  useEffect(() => {
    if (hoveredCard !== null) {
      setActiveStage(hoveredCard);
      return;
    }
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(interval);
  }, [hoveredCard]);

  const currentActive = hoveredCard !== null ? hoveredCard : activeStage;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full select-none flex justify-center overflow-hidden"
      style={{
        perspective: 1200,
        height: 640 * scale,
      }}
    >
      <div
        style={{
          width: 960,
          height: 640,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          flexShrink: 0,
        }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full h-full"
        >
          {/* Soft aura glow behind central node */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(6,182,212,0.14) 45%, transparent 72%)",
              filter: "blur(42px)",
            }}
            aria-hidden="true"
          />

          {/* SVG Connection Wires & Animated Dashed Light Beams */}
          <svg
            viewBox="0 0 960 640"
            className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {WIRES.map((w) => {
              const isActive = currentActive === w.stage;
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
                    opacity={0.45}
                  />

                  {/* 2. Active glowing wire with flowing animated dashes */}
                  <motion.path
                    d={w.d}
                    fill="none"
                    stroke={w.color}
                    strokeWidth={isActive ? 2.6 : 1.8}
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    filter={isActive ? "url(#hubGlow)" : undefined}
                    animate={{
                      strokeDashoffset: [0, -24],
                      opacity: isActive ? 1 : 0.25,
                    }}
                    transition={{
                      strokeDashoffset: { duration: 1.1, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 0.3 },
                    }}
                  />

                  {/* 3. Traveling photon particle along path */}
                  <g filter="url(#hubGlow)">
                    {/* Outer glow ring */}
                    <circle r={isActive ? 5.5 : 3.5} fill={w.color} opacity={0.45}>
                      <animateMotion
                        path={w.d}
                        dur={isActive ? "1.8s" : "3.6s"}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                    {/* Bright white core particle */}
                    <circle r={isActive ? 3 : 2} fill="#ffffff">
                      <animateMotion
                        path={w.d}
                        dur={isActive ? "1.8s" : "3.6s"}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                      />
                    </circle>
                  </g>

                  {/* 4. Terminal Anchor Port at Card Connection */}
                  <circle
                    cx={w.cardDot.cx}
                    cy={w.cardDot.cy}
                    r={4.5}
                    fill="#ffffff"
                    stroke={w.color}
                    strokeWidth={2}
                  />
                  <circle
                    cx={w.cardDot.cx}
                    cy={w.cardDot.cy}
                    r={2}
                    fill={w.color}
                  />

                  {/* 5. Terminal Anchor Port at Core Connection */}
                  <circle
                    cx={w.coreDot.cx}
                    cy={w.coreDot.cy}
                    r={4.5}
                    fill="#ffffff"
                    stroke={w.color}
                    strokeWidth={2}
                  />
                  <circle
                    cx={w.coreDot.cx}
                    cy={w.coreDot.cy}
                    r={2}
                    fill={w.color}
                  />

                  {/* 6. Pulsing ring wave on active stage at both ends */}
                  {isActive && (
                    <>
                      <motion.circle
                        cx={w.cardDot.cx}
                        cy={w.cardDot.cy}
                        r={5}
                        fill="none"
                        stroke={w.color}
                        strokeWidth={1.5}
                        animate={{ r: [5, 14], opacity: [0.9, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.circle
                        cx={w.coreDot.cx}
                        cy={w.coreDot.cy}
                        r={5}
                        fill="none"
                        stroke={w.color}
                        strokeWidth={1.5}
                        animate={{ r: [5, 14], opacity: [0.9, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* ============================================================ */}
          {/* CENTER NODE: PROTYPE AI MASCOT ORB (Matching CTA Section)     */}
          {/* ============================================================ */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center pointer-events-auto"
            style={{
              left: "calc(50% - 70px)",
              top: "calc(50% - 70px)",
              width: "140px",
              height: "140px",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Multi-layer Luminous Halo Glows */}
              <div
                className="pointer-events-none absolute -inset-8 rounded-full bg-emerald-400/40 blur-2xl animate-pulse"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -inset-12 rounded-full bg-cyan-400/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -inset-3 rounded-full border border-emerald-400/30 bg-white/10 backdrop-blur-xs"
                aria-hidden="true"
              />

              {/* 3D Floating Mascot with breathing scale */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center drop-shadow-[0_20px_40px_rgba(16,185,129,0.45)] cursor-pointer select-none"
                whileHover={{ scale: 1.08 }}
                onClick={() =>
                  onShowToast("Protype AI Core: Connected and orchestrating all workflows")
                }
              >
                <Image
                  src="/fevicon.png"
                  alt="Protype AI Core - Intelligent AI agent orchestrating WhatsApp support and CRM automation"
                  width={128}
                  height={128}
                  className="h-full w-full object-contain select-none"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 1: CUSTOMER (Top Center)                                */}
          {/* ============================================================ */}
          <div
            className="absolute z-10"
            style={{ left: "calc(50% - 130px)", top: "18px", width: "260px" }}
          >
            <HubCard
              stage={0}
              currentActive={currentActive}
              onHover={() => setHoveredCard(0)}
              onLeave={() => setHoveredCard(null)}
              accent="#0ea5e9"
              floatingDelay={0}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-xs">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Customer</span>
                </div>
                <span className="text-[11px] font-normal text-slate-400">10:24 AM</span>
              </div>

              <p className="mt-2 text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">
                Where is my order?
              </p>

              <div className="mt-2.5 flex items-center gap-1.5">
                <div
                  title="WhatsApp Channel"
                  className="flex h-5.5 w-5.5 items-center justify-center rounded-full overflow-hidden shadow-2xs"
                >
                  <WhatsAppLogo className="h-5.5 w-5.5" />
                </div>

                <div className="flex items-center gap-1 rounded-full border border-slate-200/70 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-blue-500" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                  <span>Website</span>
                </div>

                <div
                  title="Instagram DM"
                  className="flex h-5.5 w-5.5 items-center justify-center rounded-full overflow-hidden shadow-2xs"
                >
                  <InstagramLogo className="h-5.5 w-5.5" />
                </div>

                <div className="flex h-5.5 items-center justify-center rounded-full bg-slate-100 px-1.5 text-[11px] font-semibold text-slate-500">
                  +2
                </div>
              </div>
            </HubCard>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: CUSTOMER SUPPORT (Middle-Left)                       */}
          {/* ============================================================ */}
          <div
            className="absolute z-10"
            style={{ left: "24px", top: "195px", width: "260px" }}
          >
            <HubCard
              stage={1}
              currentActive={currentActive}
              onHover={() => setHoveredCard(1)}
              onLeave={() => setHoveredCard(null)}
              accent="#10b981"
              floatingDelay={0.6}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900">
                    Customer Support
                  </span>
                </div>
                <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-600">
                  Resolved
                </span>
              </div>

              <div className="mt-2 text-xs leading-snug text-slate-600">
                <p>Hi! Your order is on track.</p>
                <p className="text-slate-500">Here&apos;s the latest update...</p>
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/support-agent.jpg"
                    alt="Protype Customer Support AI Agent avatar"
                    className="h-6 w-6 rounded-full object-cover border border-emerald-200 shadow-2xs"
                  />
                  <span className="text-[11px] text-slate-400">Agent live</span>
                </div>
                <span className="text-[11px] text-slate-400">10:32 AM</span>
              </div>
            </HubCard>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: ORDER OPERATIONS (Middle-Right)                      */}
          {/* ============================================================ */}
          <div
            className="absolute z-10"
            style={{ right: "24px", top: "195px", width: "260px" }}
          >
            <HubCard
              stage={2}
              currentActive={currentActive}
              onHover={() => setHoveredCard(2)}
              onLeave={() => setHoveredCard(null)}
              accent="#3b82f6"
              floatingDelay={1.2}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Package className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900">
                    Order Operations
                  </span>
                </div>
                <span className="rounded-full border border-blue-200/80 bg-blue-50 px-2 py-0.5 text-[10.5px] font-semibold text-blue-600">
                  Processing
                </span>
              </div>

              <div className="mt-2.5 flex items-start gap-2">
                <div className="mt-0.5 flex h-7 w-6 shrink-0 items-center justify-center rounded bg-blue-50/80 border border-blue-200/70 text-blue-600">
                  <FileText className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-900">Order #4821</p>
                  <p className="text-[11px] text-slate-500">
                    Assigned <span className="text-slate-400">→</span> Warehouse 02
                  </p>
                </div>
              </div>

              <div className="mt-2 flex justify-end">
                <span className="text-[11px] text-slate-400">10:28 AM</span>
              </div>
            </HubCard>
          </div>

          {/* ============================================================ */}
          {/* CARD 4: FULFILMENT (Bottom-Left)                             */}
          {/* ============================================================ */}
          <div
            className="absolute z-10"
            style={{ left: "80px", top: "480px", width: "260px" }}
          >
            <HubCard
              stage={3}
              currentActive={currentActive}
              onHover={() => setHoveredCard(3)}
              onLeave={() => setHoveredCard(null)}
              accent="#10b981"
              floatingDelay={1.8}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Truck className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900">
                    Fulfilment
                  </span>
                </div>
                <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-600">
                  Packed
                </span>
              </div>

              <div className="mt-2.5 flex items-center gap-2.5">
                <img
                  src="/shipping-box.jpg"
                  alt="E-commerce parcel package indicating Protype automated order fulfilment tracking"
                  className="h-9 w-9 rounded-md object-contain shrink-0"
                />
                <div>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-900">Order #4821</p>
                  <p className="text-[11px] text-slate-500">Ready for shipping</p>
                </div>
              </div>

              <div className="mt-2 flex justify-end">
                <span className="text-[11px] text-slate-400">11:12 AM</span>
              </div>
            </HubCard>
          </div>

          {/* ============================================================ */}
          {/* CARD 5: CUSTOMER UPDATE (Bottom-Right)                       */}
          {/* ============================================================ */}
          <div
            className="absolute z-10"
            style={{ right: "80px", top: "480px", width: "260px" }}
          >
            <HubCard
              stage={4}
              currentActive={currentActive}
              onHover={() => setHoveredCard(4)}
              onLeave={() => setHoveredCard(null)}
              accent="#06b6d4"
              floatingDelay={2.4}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                    <Bell className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-900">
                    Customer Update
                  </span>
                </div>
                <span className="rounded-full border border-cyan-200/80 bg-cyan-50 px-2 py-0.5 text-[10.5px] font-semibold text-cyan-600">
                  Sent
                </span>
              </div>

              <div className="mt-2">
                <p className="text-xs text-slate-700 font-medium">
                  Your order is on the way!
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onShowToast("Order #4821: In transit with DHL Express • Out for delivery")
                  }
                  className="group mt-1 flex items-center gap-1 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors cursor-pointer"
                >
                  <span>Track your order</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>

              <div className="mt-1 flex justify-end">
                <span className="text-[11px] text-slate-400">11:15 AM</span>
              </div>
            </HubCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* DEDICATED MOBILE WORKFLOW HUB (< 768px Viewports)                         */
/* ========================================================================= */
function MobileWorkflowHub({ onShowToast }: { onShowToast: (msg: string) => void }) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance loop every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelectStage = (idx: number) => {
    setActiveStage(idx);
    setIsPaused(true);
    // Resume auto-advancing after 8 seconds of inactivity
    const timer = setTimeout(() => setIsPaused(false), 8000);
    return () => clearTimeout(timer);
  };

  const currentConfig = STAGES_DATA[activeStage];

  return (
    <div className="relative w-full pt-2 pb-2">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(6,182,212,0.16) 45%, transparent 70%)",
          filter: "blur(36px)",
        }}
        aria-hidden="true"
      />

      {/* 1. Mascot Orb Section */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Luminous Halos */}
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-400/40 blur-2xl animate-pulse" />
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -inset-3 rounded-full border border-emerald-400/30 bg-white/10 backdrop-blur-xs" />

          {/* Glowing Radar Connector Nodes */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-20 flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-20 flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </div>

          {/* 3D Mascot Image */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center drop-shadow-[0_18px_36px_rgba(16,185,129,0.42)] cursor-pointer select-none"
            whileTap={{ scale: 0.94 }}
            onClick={() => onShowToast("Protype AI Core: Connected and orchestrating all workflows")}
          >
            <Image
              src="/fevicon.png"
              alt="Protype AI Core"
              width={120}
              height={120}
              className="h-full w-full object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Mascot Core Badge */}
        <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-white/95 px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] text-emerald-900 uppercase shadow-xs backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>PROTO CORE • LIVE ORCHESTRATION</span>
        </div>
      </div>

      {/* 2. Dynamic Connecting Conduit (SVG Wire from Mascot to Stage Card) */}
      <div className="relative h-8 w-full flex items-center justify-center overflow-visible pointer-events-none">
        <svg className="h-8 w-48 overflow-visible" viewBox="0 0 192 32">
          <defs>
            <filter id="mobileWireGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base Wire */}
          <line
            x1="96"
            y1="0"
            x2="96"
            y2="32"
            stroke="#cbd5e1"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            opacity="0.5"
          />

          {/* Active Flowing Laser */}
          <motion.line
            x1="96"
            y1="0"
            x2="96"
            y2="32"
            stroke={currentConfig.accent}
            strokeWidth="2.6"
            strokeDasharray="5 5"
            filter="url(#mobileWireGlow)"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />

          {/* Traveling Photon Core */}
          <circle r="3" fill="#ffffff" filter="url(#mobileWireGlow)">
            <animateMotion
              path="M 96,0 L 96,32"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Top Anchor Dot */}
          <circle cx="96" cy="2" r="3.5" fill="#ffffff" stroke={currentConfig.accent} strokeWidth="1.5" />
          <circle cx="96" cy="2" r="1.5" fill={currentConfig.accent} />

          {/* Bottom Anchor Dot */}
          <circle cx="96" cy="30" r="3.5" fill="#ffffff" stroke={currentConfig.accent} strokeWidth="1.5" />
          <circle cx="96" cy="30" r="1.5" fill={currentConfig.accent} />
        </svg>
      </div>

      {/* 3. Stage Selector Navigation Tabs */}
      <div className="relative mb-3.5 flex items-center justify-between gap-1.5 overflow-x-auto px-0.5 py-1 no-scrollbar">
        {STAGES_DATA.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => handleSelectStage(idx)}
              className={`group relative flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-[11px] sm:text-[12px] font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/90"
                  : "bg-slate-100/70 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
              style={{
                borderColor: isActive ? stage.accent : undefined,
              }}
            >
              <Icon
                className="h-3.5 w-3.5 shrink-0"
                style={{ color: isActive ? stage.accent : "currentColor" }}
              />
              <span className="truncate">{stage.shortTitle}</span>

              {/* Active animated progress bar underneath tab */}
              {isActive && (
                <motion.div
                  layoutId="mobileActiveIndicator"
                  className="absolute -bottom-1 left-1.5 right-1.5 h-0.5 rounded-full"
                  style={{ backgroundColor: stage.accent }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 4. Active Stage Card Showcase */}
      <div className="relative min-h-[190px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-full rounded-[24px] border bg-white/95 p-5 sm:p-6 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.12)] backdrop-blur-md"
            style={{
              borderColor: currentConfig.accent,
              boxShadow: `0 20px 45px -10px rgba(15,23,42,0.12), 0 0 0 1px ${currentConfig.accent}40, 0 0 24px ${currentConfig.accent}20`,
            }}
          >
            {activeStage === 0 && (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-xs">
                      <User className="h-5 w-5" />
                    </div>
                    <span className="text-[15px] font-semibold text-slate-800">Customer</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">10:24 AM</span>
                </div>
                <p className="mt-3 text-[18px] sm:text-[19px] font-bold text-slate-900 leading-tight">
                  Where is my order?
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full overflow-hidden shadow-2xs">
                    <WhatsAppLogo className="h-7 w-7" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-blue-500" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    <span>Website</span>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full overflow-hidden shadow-2xs">
                    <InstagramLogo className="h-7 w-7" />
                  </div>
                  <div className="flex h-7 items-center justify-center rounded-full bg-slate-100 px-2.5 text-xs font-semibold text-slate-600">
                    +2
                  </div>
                </div>
              </div>
            )}

            {activeStage === 1 && (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <span className="text-[16px] font-bold text-slate-900">
                      Customer Support
                    </span>
                  </div>
                  <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Resolved
                  </span>
                </div>
                <div className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-slate-700">
                  <p>Hi! Your order is on track.</p>
                  <p className="text-slate-500">Here&apos;s the latest update...</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/support-agent.jpg"
                      alt="Protype Customer Support Agent"
                      className="h-8 w-8 rounded-full object-cover border border-emerald-200 shadow-2xs"
                    />
                    <span className="text-[13px] font-medium text-slate-600">Agent live</span>
                  </div>
                  <span className="text-xs text-slate-400">10:32 AM</span>
                </div>
              </div>
            )}

            {activeStage === 2 && (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Package className="h-5 w-5" />
                    </div>
                    <span className="text-[16px] font-bold text-slate-900">
                      Order Operations
                    </span>
                  </div>
                  <span className="rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    Processing
                  </span>
                </div>
                <div className="mt-3.5 flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50/80 border border-blue-200/70 text-blue-600">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-slate-900">Order #4821</p>
                    <p className="text-[13.5px] text-slate-500">
                      Assigned <span className="text-slate-400">→</span> Warehouse 02
                    </p>
                  </div>
                </div>
                <div className="mt-3.5 flex justify-end border-t border-slate-100 pt-2.5">
                  <span className="text-xs text-slate-400">10:28 AM</span>
                </div>
              </div>
            )}

            {activeStage === 3 && (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Truck className="h-5 w-5" />
                    </div>
                    <span className="text-[16px] font-bold text-slate-900">
                      Fulfilment
                    </span>
                  </div>
                  <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Packed
                  </span>
                </div>
                <div className="mt-3.5 flex items-center gap-3.5">
                  <img
                    src="/shipping-box.jpg"
                    alt="E-commerce package fulfilment"
                    className="h-12 w-12 rounded-lg object-contain shrink-0"
                  />
                  <div>
                    <p className="text-[16px] font-bold text-slate-900">Order #4821</p>
                    <p className="text-[13.5px] text-slate-500">Ready for shipping</p>
                  </div>
                </div>
                <div className="mt-3.5 flex justify-end border-t border-slate-100 pt-2.5">
                  <span className="text-xs text-slate-400">11:12 AM</span>
                </div>
              </div>
            )}

            {activeStage === 4 && (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Bell className="h-5 w-5" />
                    </div>
                    <span className="text-[16px] font-bold text-slate-900">
                      Customer Update
                    </span>
                  </div>
                  <span className="rounded-full border border-cyan-200/80 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                    Sent
                  </span>
                </div>
                <div className="mt-3.5">
                  <p className="text-[15px] font-semibold text-slate-900">
                    Your order is on the way!
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      onShowToast("Order #4821: In transit with DHL Express • Out for delivery")
                    }
                    className="group mt-2.5 inline-flex items-center gap-2 rounded-xl bg-cyan-50 px-4 py-2 text-[13.5px] font-bold text-cyan-700 hover:bg-cyan-100 transition-colors cursor-pointer"
                  >
                    <span>Track your order</span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
                <div className="mt-3 flex justify-end border-t border-slate-100 pt-2.5">
                  <span className="text-xs text-slate-400">11:15 AM</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 5. Mobile Stage Navigation Footer */}
      <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-400">
        <button
          type="button"
          onClick={() => handleSelectStage((activeStage - 1 + 5) % 5)}
          className="flex items-center gap-1 p-1 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Previous workflow step"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span>Prev</span>
        </button>

        <div className="flex items-center gap-1.5">
          {STAGES_DATA.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStage === i
                  ? "w-5 bg-emerald-500"
                  : "w-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleSelectStage((activeStage + 1) % 5)}
          className="flex items-center gap-1 p-1 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Next workflow step"
        >
          <span>Next</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

// Reusable neo-morphic card wrapper with floating physics, glow border, and hover elevation
function HubCard({
  stage,
  currentActive,
  onHover,
  onLeave,
  className = "",
  style,
  accent,
  floatingDelay,
  children,
}: {
  stage: number;
  currentActive: number;
  onHover: () => void;
  onLeave: () => void;
  className?: string;
  style?: React.CSSProperties;
  accent: string;
  floatingDelay: number;
  children: React.ReactNode;
}) {
  const isActive = currentActive === stage;

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`rounded-[22px] border bg-white/95 p-5 backdrop-blur-md transition-all duration-300 ${className}`}
      style={{
        ...style,
        borderColor: isActive ? accent : "#f1f5f9",
        boxShadow: isActive
          ? `0 24px 50px -12px rgba(15,23,42,0.12), 0 0 0 1px ${accent}40, 0 0 24px ${accent}25`
          : "0 18px 40px -10px rgba(15,23,42,0.06), 0 1px 3px rgba(0,0,0,0.02)",
      }}
      animate={{
        y: isActive ? -4 : [0, -3.5, 0],
        scale: isActive ? 1.02 : 1,
      }}
      transition={{
        y: isActive
          ? { duration: 0.25 }
          : { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: floatingDelay },
        scale: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
}
