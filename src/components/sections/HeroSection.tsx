"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Check, Headset, Layers, ShieldCheck, Sparkles, Timer, Workflow } from "lucide-react";
import Magnet from "../react-bits/Magnet";
import SplashCursor from "../react-bits/SplashCursor";
import CountUp from "../react-bits/CountUp";

const signals = ["Customer support agents", "Operations automation", "Customer experience AI"];

const stats = [
  { icon: <Layers className="h-3.5 w-3.5" />, value: 40, suffix: "+", label: "Agents deployed" },
  { icon: <Timer className="h-3.5 w-3.5" />, value: 500, suffix: "+", label: "Hours saved weekly" },
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, value: 90, suffix: "%", label: "Requests automated" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} id="hero" aria-labelledby="hero-title" className="relative isolate min-h-[820px] overflow-hidden bg-[#070b18] pt-28 text-white md:min-h-[760px] md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(59,130,246,.28),transparent_27%),radial-gradient(circle_at_78%_20%,rgba(139,92,246,.2),transparent_24%),linear-gradient(135deg,#070b18_0%,#0a1025_55%,#070b18_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="hero-noise absolute inset-0 opacity-[0.035]" />
      <SplashCursor
        containerRef={heroRef}
        SIM_RESOLUTION={96}
        DYE_RESOLUTION={800}
        SPLAT_RADIUS={0.28}
        SPLAT_FORCE={4200}
        PRESSURE_ITERATIONS={14}
        DENSITY_DISSIPATION={3.2}
        VELOCITY_DISSIPATION={2.4}
        HUE_MIN={0.5}
        HUE_MAX={0.78}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[.93fr_1.07fr] lg:gap-8 lg:px-10">
        <div className="relative z-10 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-100 uppercase backdrop-blur-xl">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" /></span>
            AI agents for support, ops &amp; CX
          </motion.div>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="font-[Outfit] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            AI agents for support,
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">operations &amp; experience.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            protype designs and deploys highly customizable AI agents that answer customers, automate the busywork inside your business, and turn every interaction into something faster and more personal.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnet padding={10} magnetStrength={4}>
              <a href="#cta" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-100 sm:w-auto">Deploy your first agent <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </Magnet>
            <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.09]">Explore the pillars <span className="text-cyan-300">↗</span></a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.38 }} className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
            {signals.map((signal) => <span key={signal} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" />{signal}</span>)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="mb-1.5 flex items-center gap-1.5 text-cyan-300">{s.icon}</div>
                <div className="flex items-baseline font-[Outfit] text-3xl font-semibold text-white">
                  <CountUp to={s.value} duration={2} delay={0.6} />
                  <span>{s.suffix}</span>
                </div>
                <div className="mt-1 text-xs leading-snug text-slate-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }} className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
          <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#0d1430]/75 p-3 shadow-[0_35px_100px_rgba(0,0,0,.42)] backdrop-blur-2xl">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-xs text-slate-300"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300" /> PROTYPE / AGENT OS</div><span className="font-mono text-cyan-200">LIVE</span></div>
            <div className="relative mt-3 aspect-[1.18/1] overflow-hidden rounded-2xl border border-white/10 bg-[#0a1025]">
              <SystemCanvas />
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
                <MiniMetric icon={<Headset className="h-3.5 w-3.5" />} label="Support" value="Online" tone="cyan" />
                <MiniMetric icon={<Workflow className="h-3.5 w-3.5" />} label="Operate" value="Running" tone="blue" />
                <MiniMetric icon={<Sparkles className="h-3.5 w-3.5" />} label="Delight" value="Personalized" tone="violet" />
              </div>
            </div>
          </div>
          <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-3 top-12 hidden rounded-2xl border border-white/15 bg-[#111936]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-white"><Bot className="h-4 w-4 text-cyan-300" /> Automation layer live</div>
            <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" /></div>
          </motion.div>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 left-5 hidden rounded-2xl border border-white/15 bg-[#111936]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <div className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">Avg. response time</div>
            <div className="mt-1 text-lg font-semibold text-white">&lt;2 min <span className="text-sm text-cyan-300">across channels</span></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
    </section>
  );
}

function MiniMetric({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: "blue" | "cyan" | "violet" }) {
  const colors = { blue: "text-blue-300", cyan: "text-cyan-300", violet: "text-violet-300" };
  return (
    <motion.div whileHover={{ y: -3, scale: 1.03 }} transition={{ duration: 0.2 }} className="rounded-xl border border-white/10 bg-[#101936]/85 p-2.5 backdrop-blur-xl">
      <div className={`flex items-center gap-1.5 text-[10px] ${colors[tone]}`}>
        <motion.span animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>{icon}</motion.span>
        {label}
      </div>
      <div className="mt-1 text-xs font-semibold text-white">{value}</div>
    </motion.div>
  );
}

function SystemCanvas() {
  return (
    <>
      <svg viewBox="0 0 640 520" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="flow" x1={0} x2={1}><stop stopColor="#22d3ee" stopOpacity={0} /><stop offset={0.5} stopColor="#60a5fa" /><stop offset={1} stopColor="#a78bfa" stopOpacity={0} /></linearGradient>
          <radialGradient id="core"><stop stopColor="#e0f2fe" /><stop offset={0.2} stopColor="#38bdf8" /><stop offset={1} stopColor="#2563eb" stopOpacity={0} /></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation={4} result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g opacity={0.28} stroke="#7dd3fc" strokeWidth={0.7}><path d="M40 100H600M40 180H600M40 260H600M40 340H600M40 420H600" /><path d="M100 40V470M200 40V470M300 40V470M400 40V470M500 40V470" /></g>
        <motion.path d="M105 126 C190 126 170 244 290 254 S410 178 518 135" fill="none" stroke="url(#flow)" strokeWidth={2} strokeDasharray="8 10" animate={{ strokeDashoffset: [0, -72] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M118 375 C200 390 220 304 318 286 S465 330 540 380" fill="none" stroke="url(#flow)" strokeWidth={2} strokeDasharray="8 10" animate={{ strokeDashoffset: [0, 72] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx={320} cy={260} r={122} fill="none" stroke="#60a5fa" strokeOpacity={0.22} strokeWidth={1} strokeDasharray="4 12" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "320px 260px" }} />
        <motion.circle cx={320} cy={260} r={78} fill="none" stroke="#a78bfa" strokeOpacity={0.35} strokeWidth={1} strokeDasharray="2 9" animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "320px 260px" }} />
        <motion.circle cx={320} cy={260} r={100} fill="url(#core)" animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx={320} cy={260} r={38} fill="#0b1734" stroke="#67e8f9" strokeWidth={1.5} filter="url(#glow)" animate={{ r: [37, 40, 37] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
        <text x={320} y={254} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={600}>PROTYPE</text><text x={320} y={272} textAnchor="middle" fill="#67e8f9" fontSize={8} letterSpacing={2}>AGENT CORE</text>
        <Node x={102} y={125} label="SUPPORT" color="#60a5fa" /><Node x={520} y={132} label="OPERATE" color="#a78bfa" /><Node x={112} y={378} label="DELIGHT" color="#22d3ee" /><Node x={540} y={380} label="LEARN" color="#34d399" />
      </svg>
      <div className="absolute left-[9%] top-[18%] h-2 w-2 animate-ping rounded-full bg-blue-300" /><div className="absolute right-[12%] top-[27%] h-2 w-2 animate-ping rounded-full bg-violet-300 [animation-delay:1s]" />
    </>
  );
}

function Node({ x, y, label, color }: { x: number; y: number; label: string; color: string }) {
  return (
    <g>
      <motion.circle cx={x} cy={y} r={24} fill="#0d1733" stroke={color} strokeWidth={1.2} animate={{ strokeOpacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx={x} cy={y} r={5} fill={color} />
      <text x={x} y={y + 39} textAnchor="middle" fill="#cbd5e1" fontSize={8} letterSpacing={1.5}>{label}</text>
    </g>
  );
}
