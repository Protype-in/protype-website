"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Bot, BarChart3, Zap, Rocket } from "lucide-react";

// Matrix Rain Canvas
function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const cols = Math.floor(canvas.width / 20);
        const drops: number[] = Array(cols).fill(1);
        const chars = "アイウエオABCDEF0123456789</>{}[]|!@#$%^&*()";

        const draw = () => {
            ctx.fillStyle = "rgba(2, 2, 9, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = "14px JetBrains Mono, monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                const x = i * 20;
                const y = drops[i] * 20;

                // Gradient colour: bright at head, dim below
                const brightness = Math.random() > 0.98 ? "255, 255, 255" : "0, 245, 255";
                const alpha = Math.random() > 0.98 ? 0.9 : 0.15;
                ctx.fillStyle = `rgba(${brightness}, ${alpha})`;
                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-20"
            style={{ pointerEvents: "none" }}
        />
    );
}

// Particle Network
function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
        const particleCount = 60;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
                ctx.fill();
            });

            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(0, 245, 255, ${0.07 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-1"
            style={{ pointerEvents: "none" }}
        />
    );
}

// Typewriter cycling text
const cycleWords = ["AI Agents", "Automation", "MVP Products", "Growth Systems"];

function TypewriterCycle() {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = cycleWords[index];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < word.length) {
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === word.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % cycleWords.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, deleting, index]);

    return (
        <span className="neon-text font-mono">
            {displayed}
            <span className="cursor-blink" />
        </span>
    );
}

// Counter animation
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const step = target / 50;
                    const interval = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 30);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-2xl font-bold font-mono gradient-text">
            {count}{suffix}
        </div>
    );
}

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Matrix Rain */}
            <MatrixRain />

            {/* Particle Network */}
            <ParticleNetwork />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00f5ff]/5 blur-[130px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/8 blur-[130px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00ff88]/3 blur-[180px]" />

            {/* Grid */}
            <div className="animated-grid-bg" />

            {/* Scanline */}
            <div className="scanline-overlay" />
            <div className="scanline-sweep" />

            <div className="section-container relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Terminal badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="tech-badge mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse inline-block" />
                            SYSTEM_ONLINE // AI-POWERED BUSINESS SOLUTIONS
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                            <span className="glitch gradient-text" data-text="AI Automation">
                                AI Automation
                            </span>
                            <br />
                            <span className="text-[#e2e8f0]">&amp; MVP</span>
                            <br />
                            <span className="text-[#e2e8f0] text-3xl md:text-4xl lg:text-5xl">
                                For{" "}
                            </span>
                            <TypewriterCycle />
                        </h1>

                        <p className="text-base text-[#64748b] max-w-lg mb-8 leading-relaxed font-mono">
                            <span className="text-[#00ff88]">$</span>{" "}
                            <span className="text-[#94a3b8]">
                                We build AI agents, automation systems, and startup MVPs for
                                modern companies — especially in global trade, logistics, and SaaS.
                            </span>
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#cta" className="btn-glow">
                                Book a Demo
                            </a>
                            <a href="#products" className="btn-outline">
                                View Products
                            </a>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-8"
                        >
                            {[
                                { val: 50, suffix: "+", label: "AI Agents Built" },
                                { val: 98, suffix: "%", label: "Client Satisfaction" },
                                { val: 10, suffix: "x", label: "Faster Workflows" },
                            ].map((stat) => (
                                <div key={stat.label} className="border-l border-[#00f5ff]/20 pl-4">
                                    <Counter target={stat.val} suffix={stat.suffix} />
                                    <div className="text-xs text-[#64748b] font-mono mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Animated rings with neon */}
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        scale: 0.4 + i * 0.2,
                                        border: `1px solid rgba(0, ${i === 1 ? "245, 255" : i === 2 ? "255, 136" : "245, 255"}, 0.15)`,
                                        boxShadow: `0 0 20px rgba(0, ${i === 1 ? "245, 255" : i === 2 ? "255, 136" : "245, 255"}, 0.08) inset, 0 0 20px rgba(0, ${i === 1 ? "245, 255" : i === 2 ? "255, 136" : "245, 255"}, 0.05)`,
                                    }}
                                    animate={{ rotate: 360 * (i % 2 === 0 ? -1 : 1) }}
                                    transition={{
                                        duration: 20 + i * 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            ))}

                            {/* Core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        boxShadow: [
                                            "0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(0, 245, 255, 0.1)",
                                            "0 0 60px rgba(124, 58, 237, 0.5), 0 0 120px rgba(124, 58, 237, 0.15)",
                                            "0 0 40px rgba(0, 255, 136, 0.4), 0 0 80px rgba(0, 255, 136, 0.1)",
                                            "0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(0, 245, 255, 0.1)",
                                        ],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#00f5ff] via-[#7c3aed] to-[#00ff88] flex items-center justify-center"
                                >
                                    <svg
                                        className="w-14 h-14 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                        />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Floating nodes */}
                            {[
                                { icon: <Bot className="w-5 h-5 text-[#00f5ff]" />, x: "8%", y: "18%", delay: 0, color: "#00f5ff", label: "AI Agent" },
                                { icon: <BarChart3 className="w-5 h-5 text-[#7c3aed]" />, x: "78%", y: "12%", delay: 0.5, color: "#7c3aed", label: "Analytics" },
                                { icon: <Zap className="w-5 h-5 text-[#00ff88]" />, x: "82%", y: "72%", delay: 1, color: "#00ff88", label: "Automation" },
                                { icon: <Rocket className="w-5 h-5 text-[#f59e0b]" />, x: "4%", y: "70%", delay: 1.5, color: "#f59e0b", label: "Deploy" },
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute flex flex-col items-center gap-1"
                                    style={{ left: node.x, top: node.y }}
                                    animate={{ y: [-6, 6, -6] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl bg-[#05050f]/90 backdrop-blur-md border flex items-center justify-center"
                                        style={{
                                            borderColor: `${node.color}30`,
                                            boxShadow: `0 0 15px ${node.color}20, inset 0 0 10px ${node.color}08`,
                                        }}
                                    >
                                        {node.icon}
                                    </div>
                                    <span className="text-[9px] font-mono" style={{ color: node.color }}>{node.label}</span>
                                </motion.div>
                            ))}

                            {/* Connecting lines between nodes and center */}
                            <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
