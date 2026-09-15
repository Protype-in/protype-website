"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Package, Truck, Bell, FileText, CheckCircle2, X } from "lucide-react";
import { WhatsAppLogo, InstagramLogo } from "@/components/icons/BrandLogos";
import ShineButton from "../ui/ShineButton";

export default function HeroSection() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[880px] overflow-hidden bg-[#fafcfc] pt-24 text-slate-900 md:min-h-[820px] md:pt-28"
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

      {/* Clean, smoothly visible background grid matching screenshot */}
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
      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-8 px-6 pt-4 pb-16 lg:grid-cols-[440px_1fr] lg:gap-12 lg:px-10 lg:pt-8 xl:grid-cols-[480px_1fr]">
        
        {/* Left Column: Typography & CTAs */}
        <div className="relative z-10 max-w-lg">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur-md"
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
            className="font-[Outfit] text-[52px] font-bold leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-[76px]"
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
            className="mt-7 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg lg:text-[19px]"
          >
            Protype builds custom systems that connect customer support, operations, and every step in between.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
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

            <ShineButton href="#process" variant="secondary" size="lg">
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
          className="relative w-full"
        >
          <WorkflowHub onShowToast={(msg) => setToastMessage(msg)} />
        </motion.div>
      </div>

      {/* Interactive Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-5 py-3.5 text-sm font-medium text-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur-md"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="ml-2 text-slate-400 hover:text-slate-600"
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}// 1000 x 640 Coordinate Wires with precise dual anchor nodes (Card + Core)
// Bilateral symmetry around center axis X = 500, Y = 310
interface WireConfig {
  id: string;
  stage: number;
  d: string;
  color: string;
  cardDot: { cx: number; cy: number };
  coreDot: { cx: number; cy: number };
}

const WIRES: WireConfig[] = [
  // Wire 0: Customer (Top) -> Mascot Orb (Top) - Inward wavy flow
  {
    id: "wire-customer",
    stage: 0,
    d: "M 500,128 C 528,168 472,224 500,265",
    color: "#0ea5e9",
    cardDot: { cx: 500, cy: 128 },
    coreDot: { cx: 500, cy: 265 },
  },
  // Wire 1: Mascot Orb (Left) -> Customer Support (Middle-Left) - Outward wavy flow
  {
    id: "wire-support",
    stage: 1,
    d: "M 438,325 C 385,360 330,240 275,275",
    color: "#10b981",
    cardDot: { cx: 275, cy: 275 },
    coreDot: { cx: 438, cy: 325 },
  },
  // Wire 2: Mascot Orb (Right) -> Order Operations (Middle-Right) - Symmetrical wavy flow
  {
    id: "wire-ops",
    stage: 2,
    d: "M 562,325 C 615,360 670,240 725,275",
    color: "#3b82f6",
    cardDot: { cx: 725, cy: 275 },
    coreDot: { cx: 562, cy: 325 },
  },
  // Wire 3: Mascot Orb (Bottom-Left) -> Fulfilment (Bottom-Left) - Outward wavy flow
  {
    id: "wire-fulfilment",
    stage: 3,
    d: "M 455,375 C 430,445 340,425 310,496",
    color: "#10b981",
    cardDot: { cx: 310, cy: 496 },
    coreDot: { cx: 455, cy: 375 },
  },
  // Wire 4: Mascot Orb (Bottom-Right) -> Customer Update (Bottom-Right) - Symmetrical wavy flow
  {
    id: "wire-update",
    stage: 4,
    d: "M 545,375 C 570,445 660,425 690,496",
    color: "#06b6d4",
    cardDot: { cx: 690, cy: 496 },
    coreDot: { cx: 545, cy: 375 },
  },
];

function WorkflowHub({ onShowToast }: { onShowToast: (msg: string) => void }) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Mouse Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
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
      className="relative w-full select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative mx-auto w-full max-w-[1040px] aspect-[1000/680]"
      >
        {/* Soft aura glow behind central node */}
        <div
          className="pointer-events-none absolute left-1/2 top-[47.8%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.24) 0%, rgba(6,182,212,0.16) 45%, transparent 72%)",
            filter: "blur(42px)",
          }}
          aria-hidden="true"
        />

        {/* SVG Connection Wires & Animated Dashed Light Beams */}
        <svg
          viewBox="0 0 1000 680"
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
            left: "calc(50% - 65px)",
            top: "calc(47.8% - 65px)",
            width: "130px",
            height: "130px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Multi-layer Luminous Halo Glows (matching CTA Section) */}
            <div
              className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-400/40 blur-2xl animate-pulse"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-400/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -inset-3 rounded-full border border-emerald-400/30 bg-white/10 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Glowing Connector Radar Nodes along Mascot Boundary */}
            {/* Top Node */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-20 flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>
            {/* Left Node */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 z-20 flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>
            {/* Right Node */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 z-20 flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>
            {/* Bottom-Left Node */}
            <div className="absolute bottom-0 left-2.5 z-20 flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>
            {/* Bottom-Right Node */}
            <div className="absolute bottom-0 right-2.5 z-20 flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>

            {/* 3D Floating Mascot with breathing scale */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center drop-shadow-[0_18px_35px_rgba(16,185,129,0.4)] cursor-pointer select-none"
              whileHover={{ scale: 1.08 }}
              onClick={() =>
                onShowToast("Protype AI Core: Connected and orchestrating all workflows")
              }
            >
              <Image
                src="/fevicon.png"
                alt="Protype AI Core - Intelligent AI agent orchestrating WhatsApp support and CRM automation"
                width={116}
                height={116}
                className="h-full w-full object-contain select-none"
                priority
              />
            </motion.div>
          </div>

          {/* Core Pill Badge under Mascot */}
          {/* <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-white/95 px-3 py-0.5 text-[9.5px] font-bold tracking-[0.16em] text-emerald-900 uppercase shadow-xs backdrop-blur-md whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>PROTO CORE</span>
          </div> */}
        </div>

        {/* ============================================================ */}
        {/* CARD 1: CUSTOMER (Top) - Exactly centered via calc(50% - 130px) */}
        {/* ============================================================ */}
        <div
          className="absolute z-10"
          style={{ left: "calc(50% - 130px)", top: "1.8%", width: "260px" }}
        >
          <HubCard
            stage={0}
            currentActive={currentActive}
            onHover={() => setHoveredCard(0)}
            onLeave={() => setHoveredCard(null)}
            accent="#0ea5e9"
            floatingDelay={0}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-xs">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-slate-700">Customer</span>
              </div>
              <span className="text-[11px] font-normal text-slate-400">10:24 AM</span>
            </div>

            {/* Question Text */}
            <p className="mt-2 text-[14px] font-semibold text-slate-900">
              Where is my order?
            </p>

            {/* Communication Channels */}
            <div className="mt-2.5 flex items-center gap-1.5">
              {/* WhatsApp */}
              <div
                title="WhatsApp Channel"
                className="flex h-5 w-5 items-center justify-center rounded-full overflow-hidden shadow-2xs"
              >
                <WhatsAppLogo className="h-5 w-5" />
              </div>

              {/* Website pill */}
              <div className="flex items-center gap-1 rounded-full border border-slate-200/70 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-blue-500" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span>Website</span>
              </div>

              {/* Instagram */}
              <div
                title="Instagram DM"
                className="flex h-5 w-5 items-center justify-center rounded-full overflow-hidden shadow-2xs"
              >
                <InstagramLogo className="h-5 w-5" />
              </div>

              {/* +2 */}
              <div className="flex h-5 items-center justify-center rounded-full bg-slate-100 px-1.5 text-[10px] font-semibold text-slate-500">
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
          style={{ left: "1.5%", top: "27%", width: "260px" }}
        >
          <HubCard
            stage={1}
            currentActive={currentActive}
            onHover={() => setHoveredCard(1)}
            onLeave={() => setHoveredCard(null)}
            accent="#10b981"
            floatingDelay={0.6}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span className="text-[13.5px] font-semibold text-slate-900">
                  Customer Support
                </span>
              </div>
              <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                Resolved
              </span>
            </div>

            {/* Body Message */}
            <div className="mt-2 text-[12.5px] leading-snug text-slate-600">
              <p>Hi! Your order is on track.</p>
              <p className="text-slate-500">Here&apos;s the latest update...</p>
            </div>

            {/* Footer with avatar photo and timestamp */}
            <div className="mt-3 flex items-center justify-between">
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
          style={{ right: "1.5%", top: "27%", width: "260px" }}
        >
          <HubCard
            stage={2}
            currentActive={currentActive}
            onHover={() => setHoveredCard(2)}
            onLeave={() => setHoveredCard(null)}
            accent="#3b82f6"
            floatingDelay={1.2}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Package className="h-4 w-4" />
                </div>
                <span className="text-[13.5px] font-semibold text-slate-900">
                  Order Operations
                </span>
              </div>
              <span className="rounded-full border border-blue-200/80 bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600">
                Processing
              </span>
            </div>

            {/* Body Document & Routing */}
            <div className="mt-3 flex items-start gap-2.5">
              <div className="mt-0.5 flex h-7 w-6 shrink-0 items-center justify-center rounded bg-blue-50/80 border border-blue-200/70 text-blue-600">
                <FileText className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-900">Order #4821</p>
                <p className="text-[11.5px] text-slate-500">
                  Assigned <span className="text-slate-400">→</span> Warehouse 02
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-2.5 flex justify-end">
              <span className="text-[11px] text-slate-400">10:28 AM</span>
            </div>
          </HubCard>
        </div>

        {/* ============================================================ */}
        {/* CARD 4: FULFILMENT (Bottom-Left)                             */}
        {/* ============================================================ */}
        <div
          className="absolute z-10"
          style={{ left: "9%", top: "73%", width: "250px" }}
        >
          <HubCard
            stage={3}
            currentActive={currentActive}
            onHover={() => setHoveredCard(3)}
            onLeave={() => setHoveredCard(null)}
            accent="#10b981"
            floatingDelay={1.8}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Truck className="h-4 w-4" />
                </div>
                <span className="text-[13.5px] font-semibold text-slate-900">
                  Fulfilment
                </span>
              </div>
              <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                Packed
              </span>
            </div>

            {/* Body with 3D cardboard box image */}
            <div className="mt-3 flex items-center gap-3">
              <img
                src="/shipping-box.jpg"
                alt="E-commerce parcel package indicating Protype automated order fulfilment tracking"
                className="h-9 w-9 rounded-md object-contain shrink-0"
              />
              <div>
                <p className="text-[13px] font-semibold text-slate-900">Order #4821</p>
                <p className="text-[11.5px] text-slate-500">Ready for shipping</p>
              </div>
            </div>

            {/* Footer */}
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
          style={{ right: "9%", top: "73%", width: "250px" }}
        >
          <HubCard
            stage={4}
            currentActive={currentActive}
            onHover={() => setHoveredCard(4)}
            onLeave={() => setHoveredCard(null)}
            accent="#06b6d4"
            floatingDelay={2.4}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Bell className="h-4 w-4" />
                </div>
                <span className="text-[13.5px] font-semibold text-slate-900">
                  Customer Update
                </span>
              </div>
              <span className="rounded-full border border-blue-200/80 bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600">
                Sent
              </span>
            </div>

            {/* Body with tracking action */}
            <div className="mt-2.5">
              <p className="text-[13px] font-medium text-slate-800">
                Your order is on the way!
              </p>
              <button
                type="button"
                onClick={() =>
                  onShowToast("Order #4821: In transit with DHL Express • Out for delivery")
                }
                className="group mt-1 flex items-center gap-1 text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Track your order</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-1 flex justify-end">
              <span className="text-[11px] text-slate-400">11:15 AM</span>
            </div>
          </HubCard>
        </div>
      </motion.div>
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
      className={`rounded-[22px] border bg-white/95 p-4 backdrop-blur-md transition-all duration-300 ${className}`}
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

